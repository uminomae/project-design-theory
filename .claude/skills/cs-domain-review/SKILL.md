---
name: cs-domain-review
description: 創造とは（cs）の全体レビューで、一つの分野（D01〜D30）を回す。分野ごとに 10 ほどの論を一次情報で確かめ、今の報告を直し・足し、記録を cs/evidence/evidence-Dxx-*.md に書いて cs の UI で見られるようにする。「cs のレビューの Issue をやって」「次の分野を回して」「D08 をやって」のときに使う。
---

# 創造とは：一つの分野を回す

計画と規約の正本は `docs/cs-review/README.md`。このスキルは、その「調査の手順（一つの分野）」を一分野ぶん回す順番だけを書く。食い違ったら README を正とし、このスキルを直す。

## 役

- 司令塔は、このスキルを使う親のセッション（Fable。版はその時の最新）。材料は自分で読み込まず、エージェントの報告を受け取って、確かめ、仕上げる。
- 調べるのは Opus のエージェント（Agent ツールの `model: "opus"`・`effort: "medium"`・`run_in_background: true`。替えるときは README「エージェントの分け方」の比べ方を通す・2026-11-10）。同時に走らせるのは、今は一つ（pjdhiro 2026-11-08「まだ一つの分野ずつ行ったほうがいいね」。品質の点検と規約がそろうまで）。待つ間に、次の分野の割り振りや、済んだ分野の仕上げを進める。

## 始める前に（セッションで一度）

1. CLAUDE.md、`docs/rules/`（CLAUDE.md の表のとおり。理論を扱うので `stance-theories.md` も）、本体の checkout の `.cache/session/` のその日と前の日の記録、`docs/cs-review/README.md`・`history.md` を読む。
2. `git log --oneline -20 develop` で、ほかのセッションが cs・wiki・`docs/rules/`・`docs/cs-review/` を直していないかを見る。
3. Issue #73（cs の全体レビュー）のチェックリストで、次の分野を決める。README の「判断が要ること」に答えが出ていないものがあっても、照合は進める。

## 一つの分野の順番

1. **頼む**：`docs/cs-review/prompts.md` の「1. 内容の照合」を、分野の番号・slug・作業場所（W）・領域ごとの注意で埋め、Opus のエージェントに頼む。報告が引く理論ごとに、台帳にある原典か、無ければ OA の当たり（著者の論文版・PMC・archive.org）を頼む文に書くと、探す時間が減る。slug は `ls ~/dev/pd/pjdhiro/assets/creation/domains/ja/md/` で確かめる。論は、すでに集めた原典（台帳・手元の PDF・精読ノート）をベースにする。読める原典が 10 に届かない分野（README「調査の手順」の表）は、さらに探すよう頼む文に書く。
   - 原典を探す手順は、スキル `find-source`（`.claude/skills/find-source/SKILL.md`）と `docs/rules/sources.md` §5 で固定する。頼む文には、そのスキルを Read して従うことと、次を書く：台帳に無い原典・読めない行は、まず `bash scripts/find-source.sh find`（DOI か `--cite "<台帳の書誌の一行>"`。止まった PDF の URL は `--url`、著者・雑誌のサイトは `--domain <ドメイン>:author`・`:publisher`）で置き場所を引く。`--ledger` は本体の checkout の `cs/knowledge/raw/find-ledger.md`、`--hosts-file` は同じ場所の `find-hosts.tsv`（worktree の中に書かない）。Bash の allowed_domains はスキルの「始める前に」の並び。判定が「自動で取れそう」なら `fetch` で取り（一度だけ。%PDF・末尾・書誌を道具が確かめる）、「ブラウザでの保存が要る」は取りに行かず表に残す。書籍だけで読めない理論は、`discover --author`・`--cited-by` で同じ著者の OA の論文版と、その理論で衝突や至らない形を書いている論文を探す（見つけたものを分野の論として足すかは README「調査の手順」1 の目安のまま）。（2026-11-09）
   - 分野を始める前に、司令塔が `bash scripts/find-source.sh batch --manifest cs/knowledge/raw/manifest.md --status blocked-access,citation-only --domain-id Dxx --note-urls --out <本体の .cache/raw/ の下> --ledger …` を裏で流しておくと、頼む文に書く「OA の当たり」が先にそろう（2026-11-09）。
2. **確かめ直す**：報告が届いたら、要の点を二つ三つ自分で確かめる（DOI を Crossref で引く、原典か精読ノートの引用を一つ開く、今の報告の行を一つ開く）。報告をうのみにしない。
   - エージェントが新しく見つけた原典は、司令塔が `cs/knowledge/raw/manifest.md` に行を足し（公開）、PDF は手元の `cs/knowledge/raw/` に置く（git の外）。足す前に、`bash scripts/find-source.sh check <PDF> --cite "<台帳の書誌の一行>"` で、先頭が %PDF か、頭の頁の書誌・頁数・版（再録・訳・著者稿・前付けだけ）が合うかを見る。「注意がある」「合わない」は目で確かめ、版を台帳に書く。
3. **仕上げる**：`node scripts/check-cs-evidence.mjs` を走らせて機械の点検を通し、エージェントが書いた `cs/evidence/evidence-Dxx-*.md` を README「記録の品質の点検」の人の目の項目で読んで直す。
   - 中心の問い：論ごとに、対立・衝突・統合・新たな安定（または至らない形）が一行になっているか。悪い統合も統合、片方の勝利は波に留まるか場に戻る（README「中心の問い」）。
   - 一次情報：各論に確かめ先（URL・DOI）と読んだ頁があるか。照合の状態は `sources.md` §3 の四つか。
   - 文：`writing.md`（教科書のような普通の文・演出しない・断定しない・文末は「です・ます」）、冒頭に文責が Claude。旧い語（Phase・温度帯・安全弁・verified など）が無いか。手元の絶対パスが無いか。
   - 確かめ直しは三つで足りる（2026-11-08 の三分野）：DOI を Crossref で引く、原典の頁を pdftotext で一つ開く、精読ノートの直しの元になる行を開く。エージェントが挙げた精読ノート・wiki・台帳の機械的な誤りは、原典か Crossref で確かめたものだけ直す。
   - 判断が要るもの：stance.md で答えを予想し、答えが出るものは決めて書く。出ないものだけを残す。
4. **UI**：`cs/evidence/reviewed.json` の `domains` に、この分野の行（`id`・`file`・`reviewed`）を足す。cs のトップの「30領域調査報告」のマスと分野のモーダルが、その md を先に読む（仕組みは `cs/src/reports/data.js` の `loadReviewedRecords`。日本語の画面だけ）。3001 で `?domain=Dxx` を開き、冒頭と表が出ること、「一次情報で照合済」の印、PDF のボタンが出ないことを見る。スマートフォンの幅（375px）も一度は見る。
5. **機械的な誤りを直す**：この分野で見つかった DOI・書誌・切れたリンクの誤りは、出どころ（wiki の精読ノートなど）まで直す（README「レビューの決まり」）。pjdhiro の repo の今の報告は、README の判断 2 のとおり、決まるまで触らない。
6. **入れる**：`bash scripts/check.sh` を走らせ、commit（末尾は CLAUDE.md のとおり）。develop へすぐに取り込み、push する。`.claude/` を含む取り込みはサンドボックスの外で行う（corrections 型 K）。main への公開は、最初の分野だけ pjdhiro に 3001 か確かめ用のページで見せてから。二つ目からは、確かめが済んでいれば送る。送る前に、`git log origin/main..develop` と、その日の記録の「main には送っていない」を見る。develop に、公開の判断を待っている別のセッションの commit（読み物の章など）が入っていれば、`develop:main` をそのまま送らず、cs の commit だけを載せた枝を main に送る（README「規約で決めたこと」2026-11-09 の行。D05〜D09 で見ずに送り、読み物の変更を一緒に公開した）。
7. **記録する**：Issue #73 に、その分野の要約をコメントし、本文のチェックを付ける（本文は取ってから置き換え、中身を確かめてから送る。型 K）。コメントの形（2026-11-08 から）：記録のパスと commit／論の数と本文照合済の数、未照合で残した論／台帳に足した原典／高の指摘（確かめた度合いつき）／中の主なもの／一面で見えたこと／判断が要るもの（予想つき）／直した機械的な誤りと、ブラウザでの保存が要る PDF。取れなかった PDF は、別に一つのコメントで、台帳の行・文献・ダウンロード先・保存名の案を表にして残す（pjdhiro がまとめて保存する）。手で開いて確かめてもらうものは、開く URL・ページ内で探す語・持ち帰るもの（貼る範囲）・それで何を確かめるのかを一件ずつ書く（sources §5「順番」の 4・corrections 型 R）。`.cache/session/` のセッションの記録に足す。
8. 最初の 5 分野が済んだら、記録の形を一度だけ pjdhiro に見せる（README「区切りと終わり」）。
9. **確かめ用のページを更新する**：Issue #73 や対話で計画が変わったら、pjdhiro の確かめ用のページ（アーティファクト「創造とは レビュー計画」。Artifact ツールの list で題名から探す。URL は非公開なので repo に書かない）を、その都度今の状態に合わせて publish し直す（pjdhiro 2026-11-08「随時更新してください。issue や対話によって変更になったものを」）。

## セッションの終わりに

CLAUDE.md の「セッションの終わりに」を行う。このスキルで回して食い違った所や足りなかった所、エージェントの報告の「雛形に足りなかったこと」、pjdhiro の判断は、その分野が済むごとに README（調査の手順・レビューの決まり・規約で決めたこと・判断が要ること）・prompts.md・このスキル・`docs/rules/` に追記する。報告の形（Issue のコメント・確かめ用のページ）と公開ページの UI の決まりも同じ（pjdhiro 2026-11-08）。

## 更新の記録

足した行には日付を付ける（pjdhiro 2026-11-08）。

- 2026-11-09：原典を探す手順をスキル `find-source` に分け、頼む文と PDF の突き合わせからそれを指すようにした。分野の前に台帳の読めない行を `batch` で流す段を足した。
- 2026-11-09：原典を探す順番を `scripts/find-source.sh` に固定し、頼む文・PDF の突き合わせ・手で頼む表の書き方から使うようにした（sources §5「順番」）。
- 2026-11-08：スキルを書いた（試しの一巡のあと）。本番の 5 分野のあとに、UI の段（reviewed.json）、確かめ直しの三つ、Issue のコメントの形、PDF の依頼の表、機械の点検、同時に一つずつ、セッションの終わりの追記先を足した。
