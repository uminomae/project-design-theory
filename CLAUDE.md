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

原典の PDF（`cs/knowledge/raw/`・`as/knowledge/raw/`・`cs/evidence/**/*.pdf`。台帳の `manifest.md` だけは入れる）と、サイトで使わない素材（`cs/resources/`）は git に入れず、手元だけに置く。大きくなりそうなものは、入れる前に `.gitignore` を考える。

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

毎回読むのは最初の行の二つ。残りは、その作業をするときに読む。毎回読む分を小さく保つため（pjdhiro 2026-11-08）。

| いつ | 読むもの |
|---|---|
| 毎回 | `docs/rules/stance.md`：pjdhiro の見方と判断の仕方。迷ったら、pjdhiro ならどう判断するかをここで確かめる。`docs/rules/corrections.md`：Claude が繰り返す誤りの型。自分の案がどの型に当たるかを見る |
| 公開文を書く・直す | `docs/rules/writing.md`：公開文の書き方。`docs/rules/corrections-examples.md`：当たりそうな型の行だけ。`docs/rules/corrections-rg.md`：型 R・G の確認のうち、当たる節だけ（pjdhiro に手作業を頼むときは R5）。main に出す前に念入りに見るときは `docs/rules/review.md`：レビューの手順 |
| 公開ページを作る・直す（commit の前と main に送る前。必ず） | `.claude/skills/public-page-review/SKILL.md`：これまで公開ページで起きた誤りから溜めた点検の表。§1・§2 は毎回、残りは触ったものの節。直しや指摘があったら、同じ作業で表に足す。通したら `bash scripts/public-page-review.sh --done`（無いと pre-commit が止める）（pjdhiro 2026-11-10） |
| 手を動かす作業（git の取り込み・push、生成・検査、画面、調べと記録）を始める | `docs/rules/corrections-k.md`：型 K の確認のうち、K0 と、その作業の節だけ。worktree で始めるときは、取り込みを回す前に K1 を読む |
| 既存の理論・東洋思想・五段階の語を扱う | `docs/rules/stance-theories.md`：理論との距離 |
| 調べる・引用する | `docs/rules/sources.md`：調べ方と原典の照合 |
| wiki を作り直す・正本を直して wiki の知らせが出た | `.claude/skills/wiki-compile/SKILL.md`：知らされた wiki のページは、正本を直した同じ作業で作り直し、一緒に commit する |
| 特定のページ・Issue を触る | `docs/rules/decisions.md`：そのページ・Issue の行だけ（Love駆動開発の読み物は、終わりの「読み物の組み立て」の節も） |
| 司令塔のセッションの始め・「違和感帳」と言われた | `docs/tools/iwakan-cho.md`：pd/ の違和感を置く帳面（アーティファクト）の読み方・返事の書き方・しまい方 |

新しい指摘を受けたら、同じセッションで stance.md か corrections.md に足す。足すときは、まず既にある行に溶かせるかを見る。ページや Issue ごとの判定は decisions.md に、見方として一般化できる一行だけを stance.md に書く。代表例（corrections-examples.md）は型ごとに一、二件に保ち、足すなら入れ替える。

## セッションの終わりに

コンテキストが 30% を超えたら、セッションを区切る。話があちこちへ行き、おかしくなるのを防ぐため（pjdhiro 2026-11-08「話があっちこっち行っておかしくなってる。区切ろう。やり直したい。コンテキストが３０％を超えたら区切るルールにしたい」）。区切るときは、下の手順で記録を閉じ、次のセッションが読む引き継ぎ（いまの到達点・残した議論点・置き場）をセッションの記録に書く。

毎回、セッションを閉じる前に次を行う（pjdhiro 2026-11-07）。

1. このセッションで pjdhiro が示した判断や見方を、`docs/rules/stance.md` に足すか直す。何への答えだったかを添える。
2. このセッションで Claude が指摘された誤りを、`docs/rules/corrections.md` の型に当てはめる。当てはまる型が無ければ型を足す。同じ誤りを繰り返さないよう、その型の「書く前の確認」を直す。前に同じ型の誤りをしていたら、`docs/rules/corrections-repeats.md` の表に日付を足す（型 K は `corrections-k.md` の「繰り返し」に足す）。corrections.md の「繰り返し」の決まりに従い、2 回目からは確認の文を足すのでなく、機械で止める仕組みに移すか、確認の文を書き直す。
3. Claude の推奨と pjdhiro の判断がずれたところを、セッションの記録の `## ずれ` に書く。一件ごとに、場面・Claude の推奨とその理由・pjdhiro の判断と発言・Claude が見ていなかったもの・写した先（stance・corrections・decisions のどれか）を書く。誤りと言えない、見方の違いから来たずれも書く。pjdhiro に判断を仰いだ問いは、聞く前の Claude の予想と実際の答えを一行ずつ並べる。予想は聞く前に書いておく（あとから書くと、当たったことにしやすい）。予想が当たり続けるなら聞きすぎ（型 P）で、外れるなら stance.md の読みが足りない。ずれが無ければ「無し」と書く（pjdhiro 2026-11-09「claudeの推奨と私がズレたポイントは大切です」・セッションの終わりに振り返って学んでいるかを問われて）。
4. セッションの記録を書く（下の「セッションの記録」）。
5. `node pd/scripts/wiki-stale-check.mjs --session-end` を走らせる。古い wiki のページか、出典ノートがあるのに出典ページが無い原典が出たら、自分では直さず、司令塔として別のセッションを始め（fresh・自分の worktree）、`.claude/skills/wiki-compile/SKILL.md`「区切るときの作り直しの指令」の雛形に一覧を入れて渡す（作り直し・check.sh・develop に取り込み push。main へは送らない）。何も出なければ何もしない（pjdhiro 2026-11-10「セッションを区切り、セッションログを作り、そこから司令塔として別セッションにwiki更新の指令を出すように」）。
6. 足したもの・直したもの（と、出した wiki の指令）を pjdhiro に短く伝える。何も無ければ、無いと伝える。

## セッションの記録

- 本体の checkout の `.cache/session/` に、一つのセッションにつき一つ、`log-YYYYMMDD-<話題>.md` を書く。`.cache/` は git に入れない。worktree の `.cache/` は worktree と一緒に消えるので、worktree で作業したときも本体の側に書く（場所は `git rev-parse --git-common-dir` の一つ上）。
- 書くこと：見出しに日付・話題・worktree の名前。見出しの直下に `## 要点` を置き、直したこと・残したこと・commit を 5 行ほどで書く。その次に `## ずれ`（上の手順 3）を置く。その下に本文：直したこと、pjdhiro の判断（趣旨と、何への答えか）、残したこと・次に回したこと、commit。
- 作業を始める前に、`bash scripts/session-digest.sh` で、その日と前の日の記録の要点を読み、今の状態を確かめる（型 K）。既定で出るのは、題と `## 要点` の頭だけ。`## ずれ`・「残したこと」・「commit」の節は、話題の語を引数にしたときに出る（例：`bash scripts/session-digest.sh cs-review`）。関わる記録は、語で指してそこまで読む。本文は、関わる記録だけを開く。全部を読まない（pjdhiro 2026-11-08・毎回読む分を小さく保つため）。
- worktree で始めるときは、規約と記録の要点を読んだあとに、`bash scripts/sync-develop.sh` だけを一つの呼び出しで回して develop に揃える（fetch・早送り・枝と作業ツリーの食い違いと `.claude/` の差分の確かめ）。パイプ・リダイレクト・`&&` と組まない（型 K・`corrections-k.md` の K1）。
- 司令塔のセッションは、続けて違和感帳を見張り（帳面を出し直す）、`items` を読み、Claude がまだ読んでいないものを拾う。見張っていると、帳面の「司令塔を呼ぶ」がそのセッションに届く（`docs/tools/iwakan-cho.md`・pjdhiro 2026-11-09）。

## Git

この repo は、複数の人がプログラムを開発するための git の使い方をしない。自然言語の文章を、LLM のために管理している個人のプロジェクトで、git は履歴のため。編集者は pjdhiro 一人（pjdhiro 2026-11-07・2026-11-08「何度も言ってることなのでルールに入れて」「別セッションも動くからワークツリーは便利」「編集したらdevelopに最速で統合してほしい」）。

- **編集したら、`develop` に最速で統合する。** プルリクエストは使わない。worktree は、別のセッションが同時に動くときや、クラウドでスマートフォンから動かすときに便利なので使ってよい。その場合も、作業を worktree の枝に溜めずに、本体の checkout（`~/dev/pd/project-design-theory`）の `develop` へ早く取り込む。最速がどのタイミングかは状況による（ほかのセッションと同じファイルを触っているとき、pjdhiro の判断を待って手が止まっているとき など）。取り込みの段取りを説明して pjdhiro の手を止めない。
- **確かめは、手元のサーバーをブラウザで見るのが基本。** 最速で目視できるから使っている。本体の checkout（develop）を launchd（`com.uminomae.project-design-theory`）が `scripts/serve.sh` で http://localhost:3001/ に常駐させている。直したらすぐ 3001 で見られる状態にしておく：直したら 3001 で開いて確かめ、止まっていたら `launchctl kickstart -k gui/$(id -u)/com.uminomae.project-design-theory` で起こす。
- **公開は、確かめが済んだら `develop` をそのまま `main` へ送る**（`git push origin develop:main`）。別のセッションの途中の commit が develop に入っていても、分けずに全部送る（pjdhiro 2026-11-10・Issue #111 の問い 2「全部送る。以後も、確かめが済んだら develop をそのまま送る、を決まりにします」に「はい」）。話の流れで確かめが済んでいれば、いちいち聞かずに送る。`bash scripts/check.sh` が落ちている状態では送らない。送る前に `bash scripts/publish-main.sh develop` を走らせ、一緒に出る commit を見る（`.githooks/pre-push` が、これを走らせていない main への push を止める）。その commit が触った公開ページは、`.claude/skills/public-page-review/SKILL.md` の表を通してから送る。
- 公開の判断を待つ別のセッションの変更が develop にあって、自分の commit だけを載せた枝で main に送ったとき（cs の記録など）は、main に develop に無い commit ができる。送ったあとに、本体の checkout で `git fetch origin`、続けて `git merge origin/main` を単独で回し、develop に戻し入れて push する（`.claude/` が入るならサンドボックスの外で。2026-11-10 までに develop で 4 回行われている）。戻さないと、次の `develop:main` が早送りにならない（2026-11-10）。
- 公開は GitHub Actions（`.github/workflows/pages.yml`）。出すのはサイトのファイルだけ。
- サイトのファイルを直したら、commit の前に `bash scripts/check.sh` を走らせる（旧 repo へのリンク・読み物の内部アンカー・wiki・as と ks のテスト・文字化け）。同じものを `.github/workflows/check.yml` が develop と main で走らせる。何を機械で見て、何を画面で見て、何がまだ無いかは `docs/TESTING.md`。
- commit の末尾：`Co-Authored-By: Claude <noreply@anthropic.com>`
- 初回だけ `git config core.hooksPath .githooks` を実行して、公開前の点検を有効にする。
