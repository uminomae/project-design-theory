# CLAUDE.md

プロジェクトデザイン論のサイトと、その論拠を置く repo。構築中。方針は `docs/BUILD-PLAN.md`。
対話する人間の固有名詞は **pjdhiro**。

## 置き場

| 場所 | 中身 |
|---|---|
| `pd/` | プロジェクトデザイン論（今までの project-design から複製）。サイト・読み物・knowledge・wiki |
| `cs/`・`as/`・`ks/` | 創造とは・意識とは・欠損駆動思考（今までの creation-space・awareness-space・kesson-space から複製） |
| 根の `docs/`・`scripts/`・`.githooks/`・`.github/` | この repo 全体の方針・規約・公開前の点検・公開の手順。進行中の大きな作業の計画（`docs/cs-review/`＝創造とはの全体レビュー）も置く |
| `redirects/` | 今までの URL（`uminomae.github.io/project-design/` ほか）を今の場所へ送る転送ページの雛形。同じ名前の公開 repo に置いて出す |

今までの四つの repo は `-archive` を付けて非公開にし、開いていた Issue はこの repo に移した（ラベル pd・as・ks・cs）。移した Issue の中の `pd#N` などは今までの repo の番号で、`#N` はこの repo の番号。

公開は `.github/workflows/pages.yml`。`pd/` はサイトのファイルと wiki だけを根に、`as/`・`ks/`・`cs/` はディレクトリごと `/as/` などに出す。

原典の PDF（`cs/knowledge/raw/`・`as/knowledge/raw/`・`pd/knowledge/raw/`・`cs/evidence/**/*.pdf`。台帳の `manifest.md` だけは入れる）と、サイトで使わない素材（`cs/resources/`）は git に入れず、手元だけに置く。大きくなりそうなものは、入れる前に `.gitignore` を考える。

## 絶対原則

- **この repo は公開**。入れる前に `docs/PUBLISH-CHECK.md` の点検を通す。迷うものは入れずに pjdhiro に確かめる。
- **今までの repo（project-design・creation-space・kesson-space・awareness-space）は、中身をここに複製して移し、ここで更新する**（`pd/`・`cs/`・`as/`・`ks/`）。今までの repo は四つとも更新しない。調査結果を新しく書くときは、一次ソースで照合し直し、通ったものを書く（pjdhiro 2026-11-07・`docs/BUILD-PLAN.md`）。
- **pjdhiro の発言は趣旨を残す**。誤字・脱字は直してよい。何への答えだったかを添え、Claude の推測を混ぜない。趣旨が変わりうる直しは pjdhiro に確かめる。
- **取り消せない操作、価値判断を伴う操作は pjdhiro の明示的承認なしに実行しない**。
- **しっくり感の判定・理論の採否・公開判定は pjdhiro が行う**。

## 規約の持ち込み

今までの repo の規約（調べ方・執筆・品質の検査）は、見直してから一つずつ入れる。入れるまでは、この CLAUDE.md と**根の** `docs/` にあるものだけが規約。`pd/`・`cs/`・`as/`・`ks/` の下の `docs/`・`transform/` は今までの repo の運用の記録で、規約ではない。例外は、根の規約が名指しで指すもの（今は `pd/docs/DESIGN-RULES.md`・`DESIGN-RULES-LDD.md`）。見直しの記録は `docs/RULES-REVIEW.md`。

ハーネス（`.claude/` の設定・hooks・skills・agents ほか）は 2026-11-07 に一つずつ読んで分けた。要るものは `.claude/` に入れ、迷うものは名前だけを `docs/harness-pending/` に置いた。要るときに中身を写すか、新しく書く（pjdhiro 2026-11-07）。

## 対話・執筆の前に読む

毎回読むのは最初の行の二つの正本（`stance.md`・`corrections.md`）の全文。芯だけで始めない。残りは、その作業をするときに読む（pjdhiro 2026-11-19「全文に戻す」。芯だけで始めたセッションで、たとえの対話が「ここまでの議論をまるで参照していないように見えます」「話が伝わらない感じが困る。コンテキストで読み込む内容を変えたからだと思う」となったため）。

**読みに行くのをためらわない。** 分けて置いたもの（`stance-history.md`・`stance-theories.md`・`corrections-examples.md`・`corrections-rg.md`・`corrections-k.md` ほか）も、少しでも関わりそうなら開く。判断を仰ぐ前・案を出す前・公開文を書く前・pjdhiro の言葉の読みに迷ったときは、関わる節を必ず開く。トークンの節約を、判断の精度より先にしない（pjdhiro 2026-11-19「現在のclaudeの判断は私に近づいているので気に入っています。その精度が落ちないよう、読みにいく場合のハードルは下げて、トークン節約だけを優先することのないようにして」）。

| いつ | 読むもの |
|---|---|
| 毎回 | `docs/rules/stance.md` の全文：pjdhiro の見方と判断の仕方（項目の補い・pjdhiro の言葉・何への答えか）。迷ったら、pjdhiro ならどう判断するかをここで確かめる。`docs/rules/corrections.md` の全文：Claude が繰り返す誤りの型。自分の案がどの型に当たるかを見て、「書く前の確認」を読む。芯（`stance-core.md`・`corrections-core.md`）は `scripts/rules-core.py` が正本から作る目次で、手で直さない。芯だけで済ませない |
| 公開文を書く・直す | `docs/rules/writing.md`：公開文の書き方。`docs/rules/corrections-examples.md`：当たりそうな型の行だけ。`docs/rules/corrections-rg.md`：型 R・G の確認のうち、当たる節だけ（pjdhiro に手作業を頼むときは R5）。main に出す前に念入りに見るときは `docs/rules/review.md`：レビューの手順 |
| 公開ページを作る・直す（commit の前と main に送る前。必ず） | `.claude/skills/public-page-review/SKILL.md`：これまで公開ページで起きた誤りから溜めた点検の表。§1・§2 は毎回、残りは触ったものの節。直しや指摘があったら、同じ作業で表に足す。通したら `bash scripts/public-page-review.sh --done`（無いと pre-commit が止める）（pjdhiro 2026-11-10） |
| 手を動かす作業（git の取り込み・push、生成・検査、画面、調べと記録）を始める | `docs/rules/corrections-k.md`：型 K の確認のうち、K0 と、その作業の節だけ。worktree で始めるときは、取り込みを回す前に K1 を読む |
| 既存の理論・東洋思想・五段階の語を扱う | `docs/rules/stance-theories.md`：理論との距離 |
| 調べる・引用する | `docs/rules/sources.md`：調べ方と原典の照合 |
| wiki を作り直す・正本を直して wiki の知らせが出た | `.claude/skills/wiki-compile/SKILL.md`：知らされた wiki のページは、正本を直した同じ作業で作り直し、一緒に commit する |
| 特定のページ・Issue を触る | `docs/rules/decisions.md`：そのページ・Issue の行だけ（Love駆動開発の読み物は、終わりの「読み物の組み立て」の節も） |
| 司令塔のセッションの始め・「付箋帳」「違和感帳」と言われた | `docs/tools/fusen-cho.md`：手元の指示を付箋のように置き、Issue を週で見る帳面（アーティファクト）の読み方・返事の書き方・しまい方。2026-11-17 に違和感帳（`docs/tools/iwakan-cho.md`・読むだけで残す）から移った |

新しい指摘を受けたら、同じセッションで stance.md か corrections.md（正本）に足し、芯は commit のときに pre-commit が作り直す（手で回すなら `python3 -I scripts/rules-core.py`。食い違いは check.sh が止める）。足すときは、まず既にある行に溶かせるかを見る。正本の行には日付・番号と言葉の芯を書き、何への答えだったか（場面）と原文は `stance-history.md`・`corrections-history.md` の同じ節に足す（2026-11-20・毎回読む量を減らすため）。ページや Issue ごとの判定は decisions.md に、見方として一般化できる一行だけを stance.md に書く。代表例（corrections-examples.md）は型ごとに一、二件に保ち、足すなら入れ替える。

## セッションの終わりに

コンテキストが 30% を超えたら、セッションを区切る（pjdhiro 2026-11-08）。区切るとき・閉じる前は、`docs/rules/session.md` の「セッションの終わりに」の七つの手順を開いて、そのとおりに行う（stance・corrections に写す・`## ずれ`・記録・wiki の指令・アーティファクトを消す・伝える）。

## セッションの記録

- 本体の checkout の `.cache/session/` に `log-YYYYMMDD-<話題>.md` を書く。書き方・置き方・写し方は `docs/rules/session.md` の「セッションの記録」。
- 作業を始める前に `bash scripts/session-digest.sh` で、その日と前の日の記録の要点を読む。worktree で始めるときは、続けて `bash scripts/sync-develop.sh` を単独で回して develop に揃える（パイプ・`&&` と組まない。`corrections-k.md` の K1）。
- 司令塔のセッションは付箋帳を見張る（`docs/tools/fusen-cho.md`）。

## Git

個人の文章管理で、git は履歴のため。細部（3001 での確かめ・main への送り方・戻し入れ・check.sh）は `docs/rules/git.md`。git を触る前に開く。

- 編集したら `develop` に最速で統合する。プルリクエストは使わない。段取りを説明して pjdhiro の手を止めない。
- 確かめは http://localhost:3001/ をブラウザで見るのが基本。
- 公開は、確かめが済んだら `develop` をそのまま `main` へ送る。送る前に `bash scripts/check.sh` と `bash scripts/publish-main.sh develop`。
- commit の末尾：`Co-Authored-By: Claude <noreply@anthropic.com>`
