---
name: find-source
description: 論文・本の原典を探す。DOI・題・書誌の一行から置き場所を決まった順番で全部引き、OA の写しを取り、書誌と突き合わせ、取れないものをブラウザでの保存の表に回す。主題や理論の名前・引用関係から関連する論文を広く探す入口もある。「この論文を探して」「原典を取ってきて」「関連する論文を広く探して」「台帳の読めない行を引き直して」「手元の PDF が合っているか確かめて」のとき、また cs の分野のレビューや読み物の出典の照合で原典が要るときに使う。
---

# 論文を探す

規約の正本は `docs/rules/sources.md` §5「取得する」。このスキルは、その手順を道具 `scripts/find-source.sh`（中身は `scripts/find_source.py`）で回す順番と、結果の読み方を書く。食い違ったら sources.md を正とし、このスキルを直す。

道具がするのは、置き場所を引くこと・一度だけ取ること・書誌と突き合わせること・候補を並べること。読むこと、照合の状態を決めること（sources §3）、分野の論として足すかを決めることは、道具の外。

## 始める前に

- 探す前に、台帳（ledger）で、すでに試した経路を見る。同じ所を二度叩かない。
  - 創造とは（cs）の原典：本体の checkout の `cs/knowledge/raw/find-ledger.md`。それ以外：本体の `.cache/raw/find-ledger.md`。どちらも git の外。worktree で作業するときも本体の側に書く（場所は `git rev-parse --git-common-dir` の一つ上）。
  - 確認画面などを返したホストの手元の一覧：ledger と同じ場所の `find-hosts.tsv`（`fetch` が足す）。`--hosts-file` で渡す。
- サンドボックスでは、Bash の allowed_domains に `api.crossref.org`・`api.unpaywall.org`・`api.openalex.org`・`api.semanticscholar.org`・`www.ebi.ac.uk`・`api.core.ac.uk`・`archive.org`・`web.archive.org` を並べる。`fetch` は、それに取りに行く先のホストを足す。
- 環境変数は、環境に既に入っているときだけ使う。repo にも頼む文にも書かない。pjdhiro のメールアドレスを勝手に入れない。無ければその経路は「飛ばした」と表に出るので、報告にそう書く。
  - `FIND_SOURCE_EMAIL`（Unpaywall）・`CORE_API_KEY`（CORE）・`OPENALEX_API_KEY`・`S2_API_KEY`。
  - Unpaywall 用の連絡先のメールは、今は使わない（pjdhiro 2026-11-09・#73 で「Unpaywall 用の連絡先メールを、手元の環境変数に入れて使いますか？」に「今は使わない」）。入っていないことを毎回聞き直さず、飛ばしたと報告に書く。
  - キーの無い OpenAlex は、題や主題での検索が一日 100 回ほどまで（DOI で引くぶんは数えられない）。だから DOI を先に確かめ、検索は要るときだけ使う。キーの無い Semantic Scholar は 429 が多く、道具は一度待って駄目なら飛ばす。

## 一つの文献を探す

```bash
bash scripts/find-source.sh find --doi 10.1038/211676a0 --ledger <ledger> --hosts-file <find-hosts.tsv>
bash scripts/find-source.sh find --cite "Wilson, J.T. (1966). Did the Atlantic Close and then Re-Open? *Nature* 211, 676-681." --ledger <ledger>
bash scripts/find-source.sh find --title "Nine Levels of Increasing Embrace" --author Cook-Greuter --year 2013 --domain cook-greuter.com:author
bash scripts/find-source.sh find --doi … --url <確認画面で止まった PDF の URL>
```

1. 渡すもの：DOI があれば DOI。無ければ `--cite`（台帳の書誌の一行のまま）か、`--title`・`--author`・`--year`。本は `--book`。記憶で DOI を書かない（corrections 型 H）。
2. 引く順番（早く当たっても止めない）：Crossref（書誌の確定）→ Unpaywall → OpenAlex → Semantic Scholar（arXiv の番号も）→ Europe PMC（生命・医学）→ CORE → Internet Archive（本・DOI の無い文献・1930 年より前。`--ia` で必ず）→ Wayback（`--url` の URL そのものの写し。確認画面のホストに OA の PDF があれば自動で二つまで）→ Wayback の CDX（`--domain` で渡した著者・雑誌のサイトの PDF の一覧）。
3. 頭の「判定」の一行を読む。表は取りやすい順に並ぶ。

| 判定 | 次にすること |
|---|---|
| 自動で取れそう（OA の PDF／Wayback に残る PDF） | `fetch` で取り、書誌を確かめる |
| 開いて確かめる（OA の案内の頁・全文の HTML や XML） | 頁を開く。Europe PMC の全文 XML は頁が無いので、節の名前で控える |
| ブラウザでの保存が要る | 取りに行かない。`--url` で同じ URL の Wayback の写しを引き、無ければ Issue の表に残す |
| 読めるが性格を添える（個人・授業の頁・上げた人の分からない写し） | 読んでよい。性格を添え、それだけで本文照合済にしない。出版社・著者・大学の版を探す |
| 借りる形だけ（Internet Archive の貸出） | 自動では読めない。同じ著者の OA の論文版・総説・講演を `discover --author` で探す |
| 本文でない（目次・索引） | 別の経路へ |
| 有料・案内の頁だけ | 著者のサイトを `--domain` で、同じ著者の OA の版を `discover` で探す。無ければ Issue の表に残す |

4. Crossref の注意を読む。「近い候補なし」「著者が違う」は、その DOI を使わない（DOI の無い本・古い文献・小さな雑誌のことが多い）。「年が違う」「題の語が半分も重ならない」は、再刊・再録・書評・同名の別の文献の恐れなので、巻と頁を目で確かめる。
5. 表に無い経路は、そのあとに試す。レビューで実際に当たった経路：著者のサイトと昔のサイト（`--domain <ドメイン>:author`）、ノーベル講演（nobelprize.org）、NASA NTRS（古い独語・露語の論文の英訳）、JETP の公開アーカイブ、Numdam・Gallica・Project Euclid（古い数学）、HathiTrust、機関リポジトリ、同じ著者の作業論文（NBER・IIASA など）。経路ごとの実績は `docs/cs-review/prompts.md` の「領域ごとの注意」と「更新の記録」。

## 取る

```bash
bash scripts/find-source.sh fetch <置き場の URL> --out <保存先>/<保存名>.pdf --cite "<書誌の一行>" --hosts-file <find-hosts.tsv>
```

- 一度だけ取りに行く。名乗りは道具の UA のまま。確認画面・ログイン・403 が返ったら、ホストを一覧に足して止まる。別の名乗りで取りに行かない。同じ所をもう一度叩かない（sources §5-2・§5-7）。
- 取れたかは、返事の番号でなく中身で決まる：先頭が `%PDF`、末尾に `%%EOF`（途中で切れた転送は、待って一度だけ取り直す）、頭の頁の題・著者・頁数。書誌と合わなければ `<保存名>.mismatch` に置かれるので、目で確かめて、違えば捨てて ledger に書く。
- 保存先：原典の PDF は git に入れない。cs は本体の `cs/knowledge/raw/`、それ以外は本体の `.cache/raw/`。保存名は台帳の付け方（`Dxx_姓_年_題の語.pdf`）。既にある名前には上書きしない。
- 台帳（`manifest.md` など公開の一覧）に書く性格は、`fetch` の最後の行と下の表から決める。

## 書誌と突き合わせる

```bash
bash scripts/find-source.sh check <PDF> --cite "<書誌の一行>" [--doi … --crossref] [--book]
bash scripts/find-source.sh compare <前の写し> <新しい写し>
```

`check` が見るもの：先頭が %PDF／頁数と書誌の頁の範囲／本なのに頁が少ない（前付けだけ）／頭の頁の題・著者・年／掲載誌の名／頭の頁の DOI が狙いと違う／再録・訳・抜粋の印（Reprinted from… など）／文字の層の有無。`--crossref` は、渡した題と DOI の Crossref の題も比べる。

| 判定 | 意味 |
|---|---|
| 書誌と合う | 読んで、引く箇所を頁つきで控える |
| 注意がある | 題と著者は合うが、版が違う恐れ（著者稿で頁が多い・掲載誌の名が無い・再録の印）。版を目で確かめ、台帳に版を書く |
| 合わない点がある | 別の文献・一部だけ・訳の恐れ。目で確かめ、違えば捨てる |
| 機械では確かめられない | 画像だけの PDF。表紙を目で見る |

道具が「合う」と言っても、照合が済んだことにはならない。題を縮めて書いた書誌や、同じ著者の似た題の別の論文は通ることがある。引く箇所を読むときに、巻・頁・版をもう一度見る。

## 写しの性格を書き分ける

確かめ先や台帳には、誰が上げた、どの版かを添える（sources §5-8、`docs/cs-review/README.md`「規約で決めたこと」）。道具の「誰が上げた版か」はドメインからの見立てなので、頁を開いて確かめる。

| 道具の表示 | 書き方 | 本文照合済にしてよいか |
|---|---|---|
| 出版社・出版社の版 | 出版社の版 | よい |
| 大学・機関リポジトリ／著者のサイト・著者稿（査読後・投稿時） | 「著者稿（機関リポジトリ）」「著者のサイトの写し」。節や頁が誌面と違うことを添える | よい（誰が上げたかを添える） |
| Wayback の写し・元は出版社／大学／著者 | 「Wayback の記録（元は …）」と写しの日 | よい（元の置き場の性格に従う。出版社の PDF の写しは pjdhiro 2026-11-09「よい」・sources §5-8） |
| 授業・個人の頁（大学のサーバー） | 「授業用の写し。権利は未確認」。出版社の URL か DOI を並べる | 誌名・頁・DOI が見える出版社の版の PDF ならよい |
| 個人・不明（archive.org の個人・ResearchGate・Zenodo など） | 「個人が上げた写し。権利は未確認」「上げた人と権利は未確認」 | それだけではしない（未照合として読んだ頁を書く） |
| 訳 | 訳者・版・ライセンス。状態に「（訳）」 | 訳として |

## まとめて流す

```bash
bash scripts/find-source.sh batch --manifest cs/knowledge/raw/manifest.md --status blocked-access,citation-only --domain-id D05 \
     --note-urls --out <git の外のディレクトリ> --ledger <ledger> --hosts-file <find-hosts.tsv>
bash scripts/find-source.sh batch --input <id・書誌の一行・止まった URL の TSV> --out … --ledger …
```

- 済んだ id は `results.jsonl` から読んで飛ばす（途中で止まっても続きから走る）。`summary.md` に、一件ずつの判定・いちばん取りやすい置き場・経路ごとの数が出る。
- 一件に 10〜40 秒かかる（ホストごとに間隔を空けている）。数十件はバックグラウンドで走らせる。
- `summary.md` の ⚠ の行は、Crossref の注意つき。台帳に足す前に ledger のその行を開く。
- 並行のレビューが台帳（`manifest.md`）や記録を書き換えているときは、自分で台帳を直さず、「台帳に足す案」（source_id・書誌・取得先と性格・状態・保存した手元のファイル名）を表にして Issue に渡す。

## 取れなかったものを頼む

自動で取れなかったもの（確認画面・ログイン・403・貸出だけ）は、Issue に一件ずつ表で残す。列は、台帳の行・文献・開く URL・保存名の案・止まった理由と、保存できると何を確かめられるか（sources §5「順番」の 4、corrections 型 R）。図書館の相互貸借や購入は、候補と費用感を出すところまで（sources §5-6）。

## 広く探す

```bash
bash scripts/find-source.sh discover --topic "musical expectation prediction error" --oa-only --rows 15 --ledger <ledger>
bash scripts/find-source.sh discover --cited-by <DOI> --match "failure breakdown" --oa-only
bash scripts/find-source.sh discover --refs <DOI> --match "…"
bash scripts/find-source.sh discover --author "David Huron" --match "expectation" --oa-only
```

- 出るのは候補の一覧（年・著者・題・種類・被引用・OA・DOI・OA の置き場）。被引用の数は、論の確かさではない。題と要旨で選び、選んだものを `find`（DOI）→ `fetch` → `check` → 読む、の順に進める。
- 使いどころ：
  - 書籍だけで読めない理論：`--author` で、同じ著者の OA の論文版・総説・講演を探す。
  - その理論で、衝突や、統合に至らない形を書いている論文：`--cited-by <原典の DOI> --match "<語>"` と、`--topic "<理論の名前> <failure・breakdown・violation・conflict などの語>"`。
  - 原典が何を足場にしたか：`--refs`。
  - 生命・医学は `--epmc` を足す（上限を気にせず引ける）。
- OpenAlex の検索は一回 10 点で、キーが無いと一日 1000 点。残りが少なくなると表に出る。一つの理論に、主題 1・著者 1・引用 1 ほどで足りる。
- 広く探して見つかったものを、分野の論として足すかは別の判断。cs の分野のレビューでは `docs/cs-review/README.md`「調査の手順」1 の目安のまま（pjdhiro 2026-11-09「今のまま」）。候補は ledger と報告に残し、足すかは司令塔と pjdhiro が決める。

## 止めどころ

- 一つの文献に：`find` を一度（`--url`・`--domain` を添えて）、表の上から二つまで `fetch`、表に無い経路を四つ（sources §5-1）。それで取れなければ、Issue の表に残して次へ進む。
- 同じ URL に二度取りに行かない。API の 429 は、道具が一度待って駄目なら飛ばすので、追いかけない。時間を置いて `batch` を走らせ直せば、済んだものは飛ばされる。
- 読めた版が著者稿・訳・再録のときは、それで読めた範囲を書き、出版社の版を探し続けて手を止めない。

## 使ってみて分かったこと（2026-11-09）

Issue #73 の保存待ち 77 行・台帳の読めない 42 行・手元の写し 238 本で使った結果。

- いちばん当たったのは、確認画面で止まった PDF の URL そのものの Wayback の写し（`--url`）。保存待ち 77 行のうち 24 本が取れ、19 本がこれだった。確認画面のホスト（PMC・王立協会・AEA・AMS・ACM・生理学会・Annual Reviews など）の無料の PDF は、まずこれを引く。
- OpenAlex が OA と言う置き場は、取りに行くと案内の頁や確認画面のことが多い（機関リポジトリの handle・出版社の PDF）。「自動で取れそう」は見立てで、決めるのは `fetch` の結果。arXiv は確かに取れる。
- 書籍は、Internet Archive の貸出か個人の写ししか出ないことが多い。書籍だけの理論は、置き場を引き続けるより、`discover` で同じ著者の OA の論文版と、その本を引用している OA の論文を探すほうが早い。
- 題だけで引くと、短い題・よくある題で同じ題の別の文献を掴む（『The Evolution of Sex』に 2025 年の論文）。道具は著者と年を突き合わせて外すが、著者を渡さないと働かない。`--cite` か `--author`・`--year` を必ず添える。
- `check` を手元の写しの全部に流すと、版の違い（訳・会議版・序章だけ・再録）と取り違え（同じ著者の別の論文・別の年の版）が出る。分野を始める前に、その分野の `raw-confirmed` の行に流しておく。「合わない」には、題を縮めた書誌や走査の文字の崩れも混ざるので、目で見て決める。
- プロキシ越しでは、返事が 200 のまま PDF の末尾が落ちることがあった。`fetch` は curl で取り、末尾の `%%EOF` を見る。自分で取るときも末尾を見る。

## 更新の記録

足した行には日付を付ける。

- 2026-11-09：スキルを書いた。道具に `fetch`・`batch`・`discover`、Europe PMC・Internet Archive・URL の Wayback の写し、判定の一行、確認画面のホストの一覧、`check` の頁・掲載誌・再録・前付けの確かめを足した（Issue #73 の保存待ちと台帳の読めない行で試した。数字は Issue #73 のコメント）。
