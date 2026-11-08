# CLAUDE.md

プロジェクトデザイン論のサイトと、その論拠を置く repo。構築中。方針は `docs/BUILD-PLAN.md`。
対話する人間の固有名詞は **pjdhiro**。

## 置き場

| 場所 | 中身 |
|---|---|
| `pd/` | プロジェクトデザイン論（今までの project-design から複製）。サイト・読み物・knowledge・wiki |
| `cs/`・`as/`・`ks/` | 創造とは・意識とは・欠損駆動思考（今までの creation-space・awareness-space・kesson-space から複製） |
| 根の `docs/`・`scripts/`・`.githooks/`・`.github/` | この repo 全体の方針・規約・公開前の点検・公開の手順 |
| `redirects/` | 今までの URL（`uminomae.github.io/project-design/` ほか）を今の場所へ送る転送ページの雛形。同じ名前の公開 repo に置いて出す |

今までの四つの repo は `-archive` を付けて非公開にし、開いていた Issue はこの repo に移した（ラベル pd・as・ks・cs）。移した Issue の中の `pd#N` などは今までの repo の番号で、`#N` はこの repo の番号。

公開は `.github/workflows/pages.yml`。`pd/` はサイトのファイルと wiki だけを根に、`as/`・`ks/`・`cs/` はディレクトリごと `/as/` などに出す。

原典の PDF（`cs/knowledge/raw/`・`cs/evidence/**/*.pdf`）と、サイトで使わない素材（`cs/resources/`）は git に入れず、手元だけに置く。大きくなりそうなものは、入れる前に `.gitignore` を考える。

## 絶対原則

- **この repo は公開**。入れる前に `docs/PUBLISH-CHECK.md` の点検を通す。迷うものは入れずに pjdhiro に確かめる。
- **今までの repo（project-design・creation-space・kesson-space・awareness-space）は、中身をここに複製して移し、ここで更新する**（`pd/`・`cs/`・`as/`・`ks/`）。今までの repo は四つとも更新しない。調査結果を新しく書くときは、一次ソースで照合し直し、通ったものを書く（pjdhiro 2026-11-07・`docs/BUILD-PLAN.md`）。
- **pjdhiro の発言は趣旨を残す**。誤字・脱字は直してよい。何への答えだったかを添え、Claude の推測を混ぜない。趣旨が変わりうる直しは pjdhiro に確かめる。
- **取り消せない操作、価値判断を伴う操作は pjdhiro の明示的承認なしに実行しない**。
- **しっくり感の判定・理論の採否・公開判定は pjdhiro が行う**。

## 規約の持ち込み

今までの repo の規約（調べ方・執筆・品質の検査）は、見直してから一つずつ入れる。入れるまでは、この CLAUDE.md と `docs/` にあるものだけが規約。見直しの記録は `docs/RULES-REVIEW.md`。

ハーネス（`.claude/` の設定・hooks・skills・agents ほか）は 2026-11-07 に一つずつ読んで分けた。要るものは `.claude/` に入れ、迷うものは名前だけを `docs/harness-pending/` に置いた。要るときに中身を写すか、新しく書く（pjdhiro 2026-11-07）。

## 対話・執筆の前に読む

1. `docs/rules/stance.md`：pjdhiro の見方と判断の仕方。迷ったら、pjdhiro ならどう判断するかをここで確かめる。
2. `docs/rules/corrections.md`：Claude が繰り返す誤りの型。自分の案がどの型に当たるかを見る。
3. `docs/rules/writing.md`：公開文の書き方。
4. `docs/rules/sources.md`：調べ方と原典の照合（調べもの・引用をするとき）。

新しい指摘を受けたら、同じセッションで stance.md か corrections.md に足す。

## セッションの終わりに

毎回、セッションを閉じる前に次を行う（pjdhiro 2026-11-07）。

1. このセッションで pjdhiro が示した判断や見方を、`docs/rules/stance.md` に足すか直す。何への答えだったかを添える。
2. このセッションで Claude が指摘された誤りを、`docs/rules/corrections.md` の型に当てはめる。当てはまる型が無ければ型を足す。同じ誤りを繰り返さないよう、その型の「書く前の確認」を直す。
3. セッションの記録を書く（下の「セッションの記録」）。
4. 足したもの・直したものを pjdhiro に短く伝える。何も無ければ、無いと伝える。

## セッションの記録

- 本体の checkout の `.cache/session/` に、一つのセッションにつき一つ、`log-YYYYMMDD-<話題>.md` を書く。`.cache/` は git に入れない。worktree の `.cache/` は worktree と一緒に消えるので、worktree で作業したときも本体の側に書く（場所は `git rev-parse --git-common-dir` の一つ上）。
- 書くこと：見出しに日付・話題・worktree の名前。直したこと、pjdhiro の判断（趣旨と、何への答えか）、残したこと・次に回したこと、commit。
- 作業を始める前に、その日と前の日の記録を読み、今の状態を確かめる（型 K）。

## Git

この repo は、複数の人がプログラムを開発するための git の使い方をしない。自然言語の文章を、LLM のために管理している個人のプロジェクトで、git は履歴のため。編集者は pjdhiro 一人（pjdhiro 2026-11-07・2026-11-08「何度も言ってることなのでルールに入れて」「別セッションも動くからワークツリーは便利」「編集したらdevelopに最速で統合してほしい」）。

- **編集したら、`develop` に最速で統合する。** プルリクエストは使わない。worktree は、別のセッションが同時に動くときや、クラウドでスマートフォンから動かすときに便利なので使ってよい。その場合も、作業を worktree の枝に溜めずに、本体の checkout（`~/dev/pd/project-design-theory`）の `develop` へ早く取り込む。最速がどのタイミングかは状況による（ほかのセッションと同じファイルを触っているとき、pjdhiro の判断を待って手が止まっているとき など）。取り込みの段取りを説明して pjdhiro の手を止めない。
- **確かめは、手元のサーバーをブラウザで見るのが基本。** 最速で目視できるから使っている。本体の checkout（develop）を launchd（`com.uminomae.project-design-theory`）が `scripts/serve.sh` で http://localhost:3001/ に常駐させている。直したらすぐ 3001 で見られる状態にしておく：直したら 3001 で開いて確かめ、止まっていたら `launchctl kickstart -k gui/$(id -u)/com.uminomae.project-design-theory` で起こす。
- **公開は、`develop` を `main` へ送るだけ**（`git push origin develop:main`）。話の流れで確かめが済んでいれば、いちいち聞かずに送る。
- 公開は GitHub Actions（`.github/workflows/pages.yml`）。出すのはサイトのファイルだけ。
- サイトのファイルを直したら、commit の前に `bash scripts/check.sh` を走らせる（旧 repo へのリンク・読み物の内部アンカー・as と ks のテスト）。同じものを `.github/workflows/check.yml` が develop と main で走らせる。
- commit の末尾：`Co-Authored-By: Claude <noreply@anthropic.com>`
- 初回だけ `git config core.hooksPath .githooks` を実行して、公開前の点検を有効にする。
