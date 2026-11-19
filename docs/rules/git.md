# Git と公開

CLAUDE.md から 2026-11-19 に移した。毎回自動で入る CLAUDE.md を軽くするため。CLAUDE.md には名指しと、毎回効く一行だけを残している（付箋帳 i20261118130216b6l・pjdhiro「毎回のセッションで読み込まれるルール群を軽くして」）。

この repo は、複数の人がプログラムを開発するための git の使い方をしない。自然言語の文章を、LLM のために管理している個人のプロジェクトで、git は履歴のため。編集者は pjdhiro 一人（pjdhiro 2026-11-07・2026-11-08「何度も言ってることなのでルールに入れて」「別セッションも動くからワークツリーは便利」「編集したらdevelopに最速で統合してほしい」）。

- **編集したら、`develop` に最速で統合する。** プルリクエストは使わない。worktree は、別のセッションが同時に動くときや、クラウドでスマートフォンから動かすときに便利なので使ってよい。その場合も、作業を worktree の枝に溜めずに、本体の checkout（`~/dev/pd/project-design-theory`）の `develop` へ早く取り込む。最速がどのタイミングかは状況による（ほかのセッションと同じファイルを触っているとき、pjdhiro の判断を待って手が止まっているとき など）。取り込みの段取りを説明して pjdhiro の手を止めない。
- **確かめは、手元のサーバーをブラウザで見るのが基本。** 最速で目視できるから使っている。本体の checkout（develop）を launchd（`com.uminomae.project-design-theory`）が `scripts/serve.sh` で http://localhost:3001/ に常駐させている。直したらすぐ 3001 で見られる状態にしておく：直したら 3001 で開いて確かめ、止まっていたら `launchctl kickstart -k gui/$(id -u)/com.uminomae.project-design-theory` で起こす。
- **公開は、確かめが済んだら `develop` をそのまま `main` へ送る**（`git push origin develop:main`）。別のセッションの途中の commit が develop に入っていても、分けずに全部送る（pjdhiro 2026-11-10・Issue #111 の問い 2「全部送る。以後も、確かめが済んだら develop をそのまま送る、を決まりにします」に「はい」）。話の流れで確かめが済んでいれば、いちいち聞かずに送る。`bash scripts/check.sh` が落ちている状態では送らない。送る前に `bash scripts/publish-main.sh develop` を走らせ、一緒に出る commit を見る（`.githooks/pre-push` が、これを走らせていない main への push を止める）。その commit が触った公開ページは、`.claude/skills/public-page-review/SKILL.md` の表を通してから送る。
- 公開の判断を待つ別のセッションの変更が develop にあって、自分の commit だけを載せた枝で main に送ったとき（cs の記録など）は、main に develop に無い commit ができる。送ったあとに、本体の checkout で `git fetch origin`、続けて `git merge origin/main` を単独で回し、develop に戻し入れて push する（`.claude/` が入るならサンドボックスの外で。2026-11-10 までに develop で 4 回行われている）。戻さないと、次の `develop:main` が早送りにならない（2026-11-10）。
- 公開は GitHub Actions（`.github/workflows/pages.yml`）。出すのはサイトのファイルだけ。
- サイトのファイルを直したら、commit の前に `bash scripts/check.sh` を走らせる（旧 repo へのリンク・読み物の内部アンカー・wiki・as と ks のテスト・文字化け）。同じものを `.github/workflows/check.yml` が develop と main で走らせる。何を機械で見て、何を画面で見て、何がまだ無いかは `docs/TESTING.md`。
- commit の末尾：`Co-Authored-By: Claude <noreply@anthropic.com>`
- 初回だけ `git config core.hooksPath .githooks` を実行して、公開前の点検を有効にする。
