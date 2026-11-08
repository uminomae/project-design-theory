# 名前だけ置いたハーネス

今までの四つの repo のハーネス（`.claude/` の設定・hooks・rules・skills・agents・commands・scripts と、`.github/workflows/`）を、2026-11-07 に一つずつ読んで分けた（#62）。分け方は pjdhiro の指示による。

- 今の環境で要ることが明らかなもの：この repo の構成に合わせて書き直して入れた
- 要らないもの：入れない
- 判断に迷うもの：中身を入れず、ファイルの名前だけをここに置いた。要るときに中身を写すか、新しく書く

このディレクトリの中は空のファイルだけ。`<今までの repo>/claude/…` は今までの `.claude/…`、`github/…` は `.github/…` を指す。`.claude` のままにすると Claude Code が読みにいくので、名前を変えた。中身は `uminomae/<今までの repo>-archive`（非公開）の `develop` の同じパスにある。

読んだ版は各 repo の `develop`（2026-11-07 時点。project-design 43391af）。

検査と自動化に当たるもの（まとまり C の品質の検査・テスト・レビューの手順、hooks の検査、`github/workflows/`）は、2026-11-08 に `docs/TESTING.md` へまとめた。今の形で動くものはそこの「今あるもの」に入れ、まだ形の決まらないものは「作りたいもの」に作りたい内容だけを書いた。下の表は、もとの名前と迷った理由の記録として残す（pjdhiro 2026-11-08）。

## 入れたもの

| 入れた先 | もと | 直したこと |
|---|---|---|
| `.claude/settings.json` | 四つの repo の `settings.json` | `dev-private` を読まない・書かない設定と、取り消せない git の操作を止める設定を、四つから合わせて入れた。sandbox の外で `git push`・`gh` を動かす設定を入れた。hooks は下の一つだけにした |
| `.claude/hooks/content-compile.sh` | project-design・awareness-space の `content-compile.sh` | 公開ページが読む Markdown（`pd/content/*.md`・`as/assets/about/*.md`）を書き換えたら、wiki リンク入りの compiled 版を作り直す。二つを一つにし、この repo のパスに合わせた |
| `.claude/launch.json` | project-design の `launch.json` | 手元の確かめ用に、pd・as・ks・cs の四つのサーバーを並べた。2026-11-08 に `scripts/serve.sh` の `site` 一つにまとめた（cfd67e8） |

`content-compile.sh` を入れて動かしたところ、`as/assets/about/compiled/ja.md` のリンクが `wiki/entities/…`（無いページ）から `wiki/concepts/…`（あるページ）に直った。awareness-space ではこの hook が動いていなかった（下の「hooks.json」）。

## 新しく書いたもの（2026-11-08）

統合のあとの作業（#63・#65 ほか）と照らして、漏れを見直した。次のものは、今までの中身を写さず、今あるものから新しく書いた。

| 書いたもの | 代わりにしたもの | 書いたこと |
|---|---|---|
| `scripts/check.sh`・`.github/workflows/check.yml` | project-design の `github/workflows/ci.yml`・三つの `github/workflows/test.yml` の一部 | 今ある検査をこの repo のパスでまとめて呼ぶ：旧 repo の GitHub へのリンク・repo をまたぐ URL・読み物の内部アンカー・as のテスト・ks の config の検査。develop と main に入れるたびに走る。`static-checks.js`・文字化けの検査・cs のテストは、まとまり C で決める |
| `CLAUDE.md` の「セッションの記録」 | project-design の `rules/session-management.md` の、記録の置き場の部分 | 本体の checkout の `.cache/session/` に、一つのセッションにつき一つ書く。state.md・ハンドオフ・inbox は入れない |

あわせて、仕分けで見なかった各サイトの `scripts/` の中にも、今までのハーネスを前提にしたものがあったので片付けた。

- `cs/scripts/verify-hooks.sh`・`ks/scripts/verify-hooks.sh`：`.claude/hooks.json` を確かめるだけなので外した（`cs/scripts/qc-all.sh`・`cs/docs/quality-management.md` から呼び出しも外した）
- `cs/scripts/smoke-test.js`：hooks の確かめを外し、`\!` の書き損じを直し、pjdhiro の場所を上へ探すようにした
- `ks/tests/config-exports.test.js`：Node 25 で循環する import が読めずに落ちていたので、入口だけで link するようにした
- `ks/scripts/articles-en-semi-auto.mjs` ほか：通知先が今までの `kesson-space#107` だったので、既定では通知しないようにした
- `ks/scripts/agent-post-check.sh`・`cs/scripts/agent-post-check.sh` は、下の `agent-completion.md` と一緒に決めるので残した。2026-11-08 に外した（`docs/TESTING.md` の「外したもの」）。cs のスクリプトの多くは pjdhiro を `../pjdhiro` で探すが、cs の調査を再開するときに直す

## 名前だけ置いたもの（判断に迷うもの）

「当たり」の列は、2026-11-08 の見直しで、統合のあとの作業で要りそうになった跡があるもの。

| 今までの repo | ファイル | 迷う理由 |
|---|---|---|
| project-design | `rules/commit-rules.md` | commit の形と公開の流れは CLAUDE.md にある。残りの「commit 前の品質ループ」は、まとまり C（品質の検査）で決める。**当たり**：落とせる検査は `scripts/check.sh` に入れた。候補を挙げるだけの点検（`pd/scripts/reader-self-defense-lint.mjs`・`reader-attribution-audit.mjs`）は、いつ誰が見るかを決めていない |
| project-design | `rules/cs-as-component.md` | cs を pd の部品として引用する原則。一つの repo になった今も、論どうしの関係として要るかもしれない。**当たり**：11-07・11-08 に ks と as を「部品のサイト」として Love駆動開発にそろえた（stance.md） |
| project-design | `rules/session-management.md` | 記録の置き場は CLAUDE.md の「セッションの記録」に新しく書いた（上の「新しく書いたもの」）。state.md・ハンドオフ・inbox の部分は今の進め方に無い |
| project-design | `rules/seo-llm.md` | まとまり E（サイトの発見性）で決める。**当たり（弱い）**：ks の `llms.txt` を組み直しで書き換え、pd の読み物に OGP を足した |
| project-design | `hooks/ui-lint.sh` | `docs/DESIGN-RULES.md` に沿う検査。デザインの規約（まとまり A の「あとで」・E）を決めてから。**当たり**：#63 で as の見た目を多く直した |
| project-design | `hooks/wiki-build.sh`・`wiki-log-append.sh` | wiki を手元で組む・`wiki/log.md` に書き足す。公開は `pages.yml` が組む。手元で wiki を確かめる流れを決めてから |
| project-design | `hooks/wiki-gen-check.sh` | cs の manifest から wiki の生成を促す。manifest を使い続けるか（#62）で決まる |
| project-design | `scripts/static-checks.js`・`responsive-test.js`・`responsive-test.sh`・`scheduled-responsive-test.sh` | サイトの構造とスマートフォン表示の検査。まとまり C で決める。**当たり**：#63-2・#63-3 で、as のスマートフォンの表示を手で見て直した |
| project-design | `skills/adversarial-review`・`agent-team-workflow`・`model-dispatch` | 複数のエージェントやモデルで確かめる手順。まとまり C で、道具立てを最小にして決める。**当たり**：11-07・11-08 に念入りなレビューを続けて頼まれた（stance.md「不具合が多そうなときのレビューは…」「レビューでは、使えるスキルや点検のスクリプトがあれば使う」） |
| project-design | `skills/periodic-review`・`commands/periodic-review.md` | `~/dev/CLAUDE.md` に定期レビューの記録の置き方がある。この repo で定期レビューを置くかは決めていない |
| project-design | `skills/reader-comprehension`・`reader-litt-conformance` | 読み物の読解テストと手法の適合の確かめ。読み物を育てるときに要る。まとまり C で決める。**当たり**：11-08 に Love駆動開発の読み物を大きく組み直した。前の読解テストの記録（`pd/knowledge/research/love-driven-dev/TEST-comprehension-log.md`）は手順としてこのスキルを指す。型 R（冒頭だけで話が見えるか）をそのまま確かめられる。抽出のスクリプト（`pd/scripts/reader-llm-comprehension-test.mjs`）は残っている |
| project-design | `skills/wiki-compile`（四つ）・`wiki-lint` | まとまり D（生成物の作り方）。wiki を作るときに見直す |
| project-design | `agents/team-critic`・`team-planner`・`team-researcher`・`team-worker` | `agent-team-workflow` と一緒に決める |
| project-design | `agents/evidence-researcher`・`theory-explorer` | まとまり D |
| project-design | `github/workflows/ci.yml` | 上の `static-checks.js` と、文字化け・repo をまたぐ URL の検査。repo をまたぐ URL の検査は `scripts/check.sh` に入れた。残りはまとまり C で決める |
| creation-space | `rules/evidence-progress.md`・`source-note-invariants.md` | まとまり B で原則は `docs/rules/sources.md` に入れた。manifest と 1:1 の決まりは、manifest を使い続けるか（#62）で決まる |
| creation-space | `rules/agent-completion.md`・`breaking-change-checklist.md` | サブエージェントの終わり方と、データ構造を変えるときの確かめ。まとまり C |
| creation-space | `rules/pd-wiki-reference.md` | cs の調べものから pd の wiki を参照する決まり。一つの repo になったので書き方が変わる。manifest と一緒に決める |
| creation-space | `hooks/source-note-gen-check.sh`・`source-note-gen-notify.sh` | manifest と出典ノートの対応を見る。manifest で決まる |
| creation-space | `hooks/progress-level-guard.sh`・`quality-level-guard.sh`・`domains-json-sync-guard.sh`・`design-system-guard.sh` | 30 領域の進み具合と品質の値を守る。`hooks.json` に書かれていて動いていなかった。cs の調査を再開するときに決める |
| creation-space | `skills/domain-report`・`source-note-gen`・`phase-gate`・`nl-debug`（スクリプト四つを含む） | まとまり D と manifest。cs の調査を再開するときに決める |
| creation-space | `skills/rich-slides` | Markdown から HTML のスライドを作る。スライドを作るときに見直す |
| creation-space | `agents/domain-report-generator`・`report-quality-evaluator`・`researcher`・`source-reader`・`team-critic` | まとまり C・D |
| creation-space | `mcp.json` | Playwright。画面の確かめは今アプリの中のブラウザでできる。要るかは C で決める |
| creation-space・awareness-space・kesson-space | `github/workflows/test.yml` | 各サイトのテスト（`cs/`・`as/tests/`・`ks/tests/`）。as と ks の分は `scripts/check.sh` に入れた（上の「新しく書いたもの」）。cs の分はまとまり C で決める |
| kesson-space | `github/workflows/devlog.yml` | devlog の `sessions.json` の検査。ks の devlog を更新するときに要る |
| kesson-space | `rules/shared-quality.md`・`breaking-change-checklist.md` | まとまり C |
| kesson-space | `rules/memory-policy.md` | Claude の手元のメモと repo の記録の分け方。記録の決まりと一緒に決める |
| kesson-space | `agents/code-reviewer`・`config-validator` | Three.js・GLSL のレビューと、`config.js` の検査。ks のシェーダーを直すときに要るかもしれない |

## 入れないもの（要らないもの）

| 今までの repo | ファイル | 要らない理由 |
|---|---|---|
| 四つとも | `CLAUDE.md`・`AGENTS.md`・`GEMINI.md`・`README` の運用の節 | この repo の `CLAUDE.md` と `docs/` に置き換わった |
| 四つとも | `.claude/hooks.json` と、そこにだけ書かれた hooks（`credential-guard`・`exfil-guard`・`destructive-command-guard`・`backslash-bang-guard`・`read-path-guard`・`issue-sync-guard`・`state-lock-guard`・`instruction-lint`・`instruction-prereq-guard`・`session-start-guard`・`_common`） | Claude Code は `.claude/hooks.json` を読まないので、どれも動いていなかった。秘密や外への持ち出しの見張りは、今は sandbox と自動の許可の仕組みがしている。`session-start-guard`（project-design の settings では動いていた）は `develop` 以外の枝で止めるので、worktree で作業する今の進め方とぶつかる |
| project-design | `hooks/obsidian-diff-check.sh` | `.cache/session/state.md` に書く。state.md は今の進め方に無い |
| project-design | `rules/pjdhiro-corrections.md`・`writing-stage.md` | まとまり A で `docs/rules/` に入れた |
| project-design・creation-space・kesson-space | `rules/docs-navigator.md` | 今までの repo のパスの案内。この repo の CLAUDE.md の「対話・執筆の前に読む」が代わり |
| project-design・creation-space・kesson-space | `rules/parallel-worktree.md` | 三つのレーンと `wt/` 枝の決まり。今はアプリが worktree を作り、CLAUDE.md の Git の節で足りる |
| project-design | `rules/reference-repos.md` | 今までの repo を見本にする決まり。一つの repo になった |
| creation-space・kesson-space | `rules/commit-rules.md`・`session-management.md` | project-design の同じ名前のものと同じ扱い。名前は project-design の側に置いた |
| project-design・awareness-space | `skills/cli-instruction`・`codex-worker-instruction`・`codex-review`・`commands/codex-review.md` | デスクトップアプリから CLI への指示書・Codex への依頼。どちらも今は使っていない（codex-review は 2026-07-02 から休眠） |
| project-design | `skills/wiki-publish` | 公開は `pages.yml` が wiki を組んで出す |
| creation-space | `skills/adversarial-review`・`model-dispatch` | project-design の正本へのポインタ。名前は project-design の側に置いた |
| creation-space | `agents/manifest-validator`・`evidence-researcher` | 廃止済み・`researcher` に統合済み |
| kesson-space | `rules/env-adaptive.md`・`dt-codex-delegation.md`・`codex-exec.md`・`orchestrator.md`・`shader-impl.md`・`review-gates.md`・`agents.md`・`state-sync.md`・`project-management-agent.md`・`project-structure.md`・`agent-team-workflow/SKILL.md` | Gemini・Codex・デスクトップアプリへの振り分けと、state.md・backlog.md の決まり。2026-03 から使っていない（閉じた #46 の棚卸し）。構成の説明は今の ks/ と合わない |
| kesson-space | `agents/shader-generator.md`・`commands/session-init.md` | Gemini MCP を使う生成と、`docs/CURRENT.md` を読む初期化。どちらも今は使っていない |
| 四つとも | 根の `skills/`（awareness-space・kesson-space） | project-design の正本へのポインタ |
| 四つとも | `github/workflows/deploy-pages.yml`・project-design の `wiki-publish.yml` | この repo の `pages.yml` に置き換わった |
| awareness-space | `ops/launchd/com.uminomae.awareness-space.plist` | 今までの場所でサーバーを立てる。手元のサーバーは `.claude/launch.json` で立てる |
| 四つとも | `settings.json` の `allow` の一覧と `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` | `allow` は今は自動の許可の仕組みが代わる。エージェントチームは `agent-team-workflow` と一緒に決める |

## 入れていない、ハーネス以外のもの

- awareness-space の `build/theory/what-is-consciousness.md`：根の `.gitignore` の `build/` で外れていた。移すかは #35 で pjdhiro が決める

## 片付けたこと（repo の外）

- 2026-11-08（#75）：`~/.claude/settings.json` の hooks 4 本（exfil-guard・credential-guard・backslash-bang-guard・instruction-lint。今までの project-design の場所を指していて、ツールを呼ぶたびに失敗していた）を外し、`~/.claude/skills/` の切れた symlink 5 本（agent-team-workflow・cli-instruction・codex-review・codex-worker-instruction・periodic-review）を消した。要るものは、この repo の `.claude/` に新しく書く。
