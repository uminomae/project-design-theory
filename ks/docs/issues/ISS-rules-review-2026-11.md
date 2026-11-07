# ルール棚卸し 2026-11 — CLAUDE.md と .claude/rules/ を今の進め方と突き合わせる

**対象 Issue**: #218（関連 #215・#216）
**作成日**: 2026-11-03
**状態**: pjdhiro の採否待ち。**採否は pjdhiro が決める**。この一覧は現状を記述し選択肢を並べるだけで、Claude は推奨しない
**きっかけ**: pjdhiro（2026-11-03）「このレポのルールが間違ってるのかもしれない。古い昔のままで。それも見直しながら進めたい」

## 読み方

- 対象: `CLAUDE.md`（develop 版）と `.claude/rules/` の 18 ファイル（orchestrator・env-adaptive・state-sync・docs-navigator・dt-codex-delegation・codex-exec・review-gates・shared-quality・shader-impl・project-management-agent・parallel-worktree・agent-completion・memory-policy・agents・commit-rules・project-structure・session-management・breaking-change-checklist）＋ agent-team-workflow/SKILL.md
- 各項目は **ルールの文（引用）／今の実態／選択肢**。選択肢は「残す」「直す」「消す」のどれか、または組み合わせ。採否欄（§5）は空
- 種別: **矛盾**＝ルール同士またはルールと実態が食い違う／**死文**＝指す先（ファイル・パス・ブランチ・ツール）が無い／**揺れ**＝同じものを別の名で呼んでいる／**一致**＝今の進め方と合っている
- `.claude/rules/` と `CLAUDE.md` 自体は書き換えていない。明らかな死文だけ改訂案の diff を §6 に添えた（適用は採否後）
- ID: C＝CLAUDE.md、O＝orchestrator、E＝env-adaptive、S＝state-sync、N＝docs-navigator、D＝dt-codex-delegation、X＝codex-exec、G＝review-gates、Q＝shared-quality、H＝shader-impl、P＝project-management-agent、W＝parallel-worktree、A＝agent-completion、M＝memory-policy、T＝agents、K＝commit-rules、J＝project-structure、L＝session-management、B＝breaking-change-checklist、F＝agent-team-workflow、Z＝横断・周辺文書

---

## 0. 突き合わせに使った実態（2026-11-03 の観測）

**リポジトリ**
- develop @ `131011e`（2026-11-03）。main @ `9a6406d`。develop は main より 100 コミット先。CLAUDE.md は develop 版だけに「行 ID に英字 1 文字＋数字を使わない」（2026-11-02）と §8 Design system がある。main への PR は未作成（pjdhiro 判断）
- ブランチ: `dev` はローカルにもリモートにも**無い**。あるのは `main`・`develop`・`claude/*`（Claude Code app が切る）・`feature/*`（リモートのみ・2026-03 以前）・`gemini-dev`（最終コミット 2026-03-01）・`codexDT/*`・`ci/*`・`fix/*`
- ワークツリー: 本体 `ks` ＝ develop を checkout。ほかは `.claude/worktrees/<slug>` が 7 本（app が作成。枝 `claude/<slug>`・main 起点）。`~/dev/` に `kesson-codex-*`・`kesson-claude-dt-check`・`kesson-claude-code-cli`・`kesson-space-develop` は**無い**
- 配信: `~/Library/LaunchAgents/com.uminomae.kesson-space.plist` が本体の `serve.sh` を常時実行（localhost:3001）
- GitHub Actions: `deploy-pages.yml`（main push）・`test.yml`（push to `main`, `dev`）・`devlog.yml`。リポジトリは public

**ツール**
- `codex` コマンドは未インストール。`.mcp.json` は無い（`settings.local.json` は `codex`・`gemini-threejs` MCP を enable）。`mcp_servers/gemini_threejs.py` はある
- `.claude/agents/`: code-reviewer・config-validator・shader-generator・team-critic・team-researcher（後二つは pd 正本のコピー）
- `.claude/hooks/`: state-lock-guard.sh・issue-sync-guard.sh ほか 9 本（hooks.json で配線）

**.cache（本体チェックアウト。gitignore）**
- ある: `session/log-*.md`（2026-03〜05 は `-01` 連番、2026-11 は `-800`・`-198` など乱数 3 桁）、`outbox/DONE-*.md`・`outbox/REVIEW-*.md`、`inbox/archive/`、`reviews/`
- 無い: `session/state.md`・`backlog.md`・`session/state.lock`・`session/handoff-*.md`・`active/`
- `~/Library/Caches/kesson-agent/{active,inbox,session}` は 2026-03-09 に作られたまま空

**docs**
- `docs/CURRENT.md`・`docs/TODO.md` は「廃止」の案内文だけを残して存在する
- `docs/prompts/`: `INSTRUCTION-215-A.md`・`-B.md`（2026-11-02）、`P001〜P004`、`TEMPLATE-instruction-v2.md`（pd 正本へのポインタ）。`NEXT-TASK.md` は無い。`docs/codex/` は README が「Legacy」と明記
- `README.md` に「セッション開始ルーチン Step 2.5」「Devlog English Flow」の節は**無い**（見出しは Overview／概要／デザイン思考との比較／3D／Live Site／技術スタック／関連プロジェクト／Author／License）。`scripts/articles-en-routine.sh` はある
- `scripts/session-log.sh` は無い（dev/CLAUDE.md が指す myhome の実装は ks では `repo-local.conf` 不在で落ちる＝log-20261102-894）
- `context-pack/`・`knowledge/LEARNINGS.md`・`docs/CONCEPT.md`・`docs/AGENT-RULES.md`・`docs/WORKFLOW.md`・`docs/ENVIRONMENT.md`（v1.3・2026-02-20）・`docs/guardian-matrix.md`（2026-03-24）はある

**Issues**
- open 10 件: #215・#216・#217（ラベル無し）、保持論点 #173〜#179（ラベル「保持論点」）。**P0〜P3 ラベルが付いた open Issue は 0 件**
- #173〜#179 のタイトルは D1・D2・D4 の定義番号を含む（2026-03-28 起票）

**2026-11-02〜03 の進め方**（#215/#216 コメント・log-20261101-800／20261102-198・870・894・DONE-215-A/B から）
- 本体セッション（Claude Code desktop app・Fable）が pjdhiro と**直接対話**し、論・定義・公開面の本文を**本体が書く**。DT チャットからの指示書は 11 月の記録に無い
- 調査・照合は team-researcher ×3〜7 並行（max_turns 13〜20）→ team-critic → 原文転記。段 2・3 の機械的反映だけ `INSTRUCTION-215-A/B` で Agent-WT（`isolation: "worktree"`・push なし・Main が取り込み）
- 作業枝 → 本体で develop に `--no-ff` マージ → push。目視は pjdhiro（localhost:3001・claude.ai アーティファクト）。テストは毎回 `node tests/config-consistency.test.js`（90 passed）
- 手順（棚卸し 位19〜位22・pjdhiro 原文）: 材料から推論して公開文をつくる → アーティファクト（HTML）で見る → 直す → その間に定まる → 正本 `knowledge/` → 草案 `docs/drafts/` → 公開ページ。本人の発言は論の基盤でなく**テスト文**（`docs/issues/ISS-215-claims-inventory.md`）
- コミット: `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`。`Session: {ID}` trailer は直近 8 件中 1 件

---

## 1. CLAUDE.md

### C-01 §1 役割定義 — 指示の入口 ［揺れ］
- **ルールの文**: 「DT（Claude.ai Desktop）から指示書を受けて実装するか、ユーザーと直接対話してタスクを遂行する」
- **今の実態**: 11 月は Claude Code desktop app で pjdhiro と直接対話。指示書（INSTRUCTION-215-A/B）は本体セッションが書き、サブエージェントに渡した。DT チャット発の指示書は無い
- **選択肢**: 残す（両方の入口を併記したまま）／直す（「本体セッションが pjdhiro と対話し、指示書は本体がサブエージェント向けに書く」に）／消す（入口の記述を外し §6 マトリクスに寄せる）

### C-02 §1 実装の委譲原則 ［矛盾］
- **ルールの文**: 「Main（本体セッション）は直接実装しない。実装タスクは必ず指示書を作成し、Agent-WT（`isolation: "worktree"`）に委譲する。Main の役割は PM（計画・検証・マージ）に限定する」
- **今の実態**: 論・定義・公開面の**本文は本体が直接書く**（位19〜22、CLI メモリ feedback_write_ron_directly）。サブエージェントは調査・照合のみ。一方、#215 段 2（knowledge/ 6 ファイル）・段 3（スライド・SEO・llms）の機械的反映は指示書で Agent-WT に委譲した。つまり「コードと生成物の反映は委譲、論の本文は本体」の二層
- **選択肢**: 残す（「実装」をコードに限ると読む）／直す 案 A（委譲対象を「`src/`・`content/` の生成物・テスト」に限定し、「`knowledge/`・`docs/drafts/`・公開文の本文は本体が書く。サブエージェントは調査・照合」と明記）／直す 案 B（原則を外し、タスクごとに §6 マトリクスで決める）／消す

### C-03 §2 ワークツリー命名規則 ［死文］
- **ルールの文**: 「`kesson-{llm}-{app}-{補足}` — 全て小文字・ハイフン区切り」、§4-2「`pwd` でワークツリーを確認（§2テーブルと照合）」
- **今の実態**: ワークツリーは app が `.claude/worktrees/<slug>`（silly-torvalds-1939b5 等）と `agent-<hash>` を自動作成。枝名は `claude/<slug>`。`kesson-*` 命名のディレクトリは一つも無い
- **選択肢**: 残す／直す（「ワークツリーと枝は app が自動で切る。`pwd`・`git branch --show-current` を控える」に）／消す（命名規則の表を外す）

### C-04 §2 ブランチ運用 ［一致・一部ずれ］
- **ルールの文**: 「本体は常時 develop を checkout」「macOS LaunchAgents で localhost:3001 から配信中」「常設ワークツリーは使用しない」「Agent-WT は `isolation: "worktree"` で一時ワークツリーを作成し、Issue クローズ時に削除する」
- **今の実態**: 本体＝develop・LaunchAgents 配信・常設なし・Agent-WT の分離は一致。削除は「Issue クローズ時」でなく「pjdhiro 判断」として 7 本が残っている（各ログに「削除は pjdhiro 判断」）
- **選択肢**: 残す／直す（削除のタイミングを「取り込み済みなら本体がまとめて削除」か「pjdhiro 判断」のどちらかに明記）

### C-05 §2 作業開始時の最新化 ［ずれ］
- **ルールの文**: 「作業開始時は `git fetch origin && git pull` で最新化する」
- **今の実態**: app の worktree は main 起点で切られるため、develop に合わせるには `git merge --ff-only develop` が要る。本 worktree では `.claude/hooks/` がサンドボックス保護で書けず ff が失敗し、`git reset --hard` も拒否された（log-894 も同じ。`reset --soft`＋`read-tree` で回避）。DONE-215-A も Step 0 で ff している
- **選択肢**: 残す／直す（「worktree は main 起点。着手前に `git merge --ff-only develop`。hooks が書けない場合の回避」を書く）

### C-06 §3 D1-D4 表記禁止 ［一致・周辺に残存］
- **ルールの文**: 「欠損駆動思考の概念を『D1』『D2』『D3』『D4』等の定義番号で参照してはならない」（develop 版は行 ID の追記あり）
- **今の実態**: 本文・正本からは除去済み（09bb435）。残っているのは保持論点 Issue #173〜#179 の**タイトル**（D1・D2・D4）と、禁止を述べる文脈（CHARTER-guides・slide-content-rules）だけ
- **選択肢**: 残す／直す（Issue タイトルの扱い＝改題するか「2026-03 の表記のまま」と注記するかを決める）

### C-07 §3 SH-1〜SH-6 セッションヘルス ［使用の記録なし］
- **ルールの文**: 「SH-1: シェーダー全文読み込みは2ファイルまで」「SH-4: 連続ツール呼び出し5回で中間確認」「SH-5: Gemini MCP応答はdiffのみ抽出」ほか
- **今の実態**: 11 月のログに SH 番号での発動記録は無い。Gemini MCP は 2026-03 以降使われていない。ツール呼び出し 5 回ごとの中間確認は行われていない（調査レーンは 13〜20 ターン連続）
- **選択肢**: 残す／直す（シェーダー・Gemini の項を休眠扱いにし、文章作業向けの負荷判定に置き換える）／消す

### C-08 §3 PM-1〜PM-6 ［一致・一部揺れ］
- **ルールの文**: 「PM-3: 指示書生成（`.claude/rules/project-management-agent.md` テンプレート）」「PM-6: DT確認手順を含める」
- **今の実態**: 指示書は pd 正本の cli-instruction テンプレート（TEMPLATE-instruction-v2.md はポインタ）で作っている。確認は DT でなく pjdhiro の目視（localhost:3001・アーティファクト）
- **選択肢**: 残す／直す（テンプレの参照先を pd 正本に、「DT 確認」を「pjdhiro の目視手順」に）

### C-09 §3 QG — SSoT のパス ［揺れ］
- **ルールの文**: 「`src/config.js` = Single Source of Truth。パラメータは必ずここに定義」
- **今の実態**: `src/config.js` は `export * from './config/index.js'` の 1 行。実体は `src/config/`（params・dev-ui・dev-registry）。breaking-change-checklist は「`src/config.js` (config/params.js)」と併記
- **選択肢**: 残す／直す（「`src/config/`（入口は `src/config.js`）」に統一）

### C-10 §3 QG — シェーダーの Gemini 委譲 ［休眠］
- **ルールの文**: 「シェーダー/GLSL実装 → Gemini MCPに委譲（ユーザー許可時のみ）」
- **今の実態**: gemini-dev の最終コミット 2026-03-01。`mcp_servers/gemini_threejs.py` と shader-generator agent はあるが 11 月に使用なし
- **選択肢**: 残す（休眠と注記）／消す

### C-11 §4 セッション開始手順 — README Step 2.5 ［死文］
- **ルールの文**: 「`README.md` のセッション開始ルーチン（Step 2.5）を実行（ARTICLES英語化チェック）」
- **今の実態**: README.md に該当節は無い。docs/README.md「セッション開始」と AGENTS.md §1-4 も同じ節を指す。`scripts/articles-en-routine.sh` は存在する
- **選択肢**: 直す（参照先を `scripts/articles-en-routine.sh` か README の実在節に）／消す（手順 4 を外す）

### C-12 §4 推奨タスク P0/P1 ［死文に近い］
- **ルールの文**: 「推奨タスク（Issue の P0/P1 ラベル）」
- **今の実態**: open Issue に P ラベルは 0 件。優先は pjdhiro が対話で決めている（#215 → #216 → #217）
- **選択肢**: 残す（ラベル運用を再開）／直す（「直近の Issue コメントと pjdhiro の指示で決める」に）／消す

### C-13 §5 終了チェックリスト — develop ワークツリーのパス ［死文］
- **ルールの文**: 「`cd kesson-space-develop   # develop ワークツリー` … `bash ks/serve.sh &`」
- **今の実態**: そのパスは無い。develop は本体チェックアウト `ks`。サーバーは LaunchAgents が常時起動しているので `serve.sh &` を手で起動すると 3001 が競合する。実際の手順は本体で `git merge --no-ff <枝>` → `git push origin develop`
- **選択肢**: 直す（§6 に diff）／消す（dev/CLAUDE.md の終了手順に寄せる）

### C-14 §5 「コンフリクトは DT App に報告」 ［揺れ］
- **ルールの文**: 「コンフリクトが発生した場合は自動解決せず DT App に報告する」
- **今の実態**: 報告先は pjdhiro（対話中の本体セッション）
- **選択肢**: 残す／直す（「pjdhiro に報告」）

### C-15 §5 main への直接 push 禁止 ［一致］
- **ルールの文**: 「main への直接 push は行わない。PR経由でマージする」
- **今の実態**: 一致（#213・#214 は PR）
- **選択肢**: 残す

### C-16 §6 委譲マトリクス ［死文多数］
- **ルールの文**: 「シェーダー/GLSL → Gemini MCP」「単純実装・定型作業 → OpenAI Codex CLI」「PoC・一発実装・コードレビュー → OpenAI Codex App（codex 5.2/5.3）」「DT Code向けタスク → DT Code（Web版）。`docs/prompts/NEXT-TASK.md` 経由」「複数ファイル + 設計判断 → Claude Code CLI」
- **今の実態**: `codex` 未インストール、`NEXT-TASK.md` 無し、Codex 指示書は `docs/codex/`（Legacy）。11 月の委譲先は Claude Code のサブエージェント（Agent-WT・team-researcher・team-critic）だけ。Codex によるコミット後レビューは pd の codex-review スキル（outbox/REVIEW-*）
- **選択肢**: 残す（将来の再導入用に「現在未使用」と注記）／直す（今使う 3 種＝本体・Agent-WT・team-researcher/critic に書き直し、Gemini・Codex・DT Code は「休眠」節へ）／消す

### C-17 §7 デプロイの記述 ［揺れ］
- **ルールの文**: 「デプロイ: GitHub Pages (main ブランチ直接)」
- **今の実態**: #214 で `deploy-pages.yml`（main push で Actions デプロイ）に変えた
- **選択肢**: 直す（「main push → deploy-pages.yml」）

### C-18 CLAUDE.md の main 版と develop 版の差 ［運用］
- **ルールの文**: （develop 版のみ）「行 ID にも英字 1 文字＋数字を使わない」「§8 Design system」
- **今の実態**: main 版には無い。main への PR は pjdhiro 判断で未作成。worktree は main 起点なので古い CLAUDE.md を読んで始まる
- **選択肢**: 残す（PR のタイミングは pjdhiro）／直す（develop → main の PR を出す）

---

## 2. .claude/rules/

### orchestrator.md

#### O-01 自制ルール ［休眠］
- **ルールの文**: 「Claudeは**Three.js/GLSLの実装コードを書かない**」「シェーダー/Three.jsはGeminiに委譲する」「過去の実績: Claude実装→UV正規化ミス等の品質差が発生（LEARNINGS.md参照）」
- **今の実態**: 11 月にコード変更は無い（docs・knowledge・content のみ）。Gemini は 2026-03 以降未使用。LEARNINGS.md は `knowledge/LEARNINGS.md` に実在（パス省略）
- **選択肢**: 残す／直す（パスを `knowledge/LEARNINGS.md` に。Gemini 委譲を「許可時」から「休眠」に）／消す

#### O-02 context-pack ［未使用］
- **ルールの文**: 「context-pack作成: L0〜L2を組み立て（AGENT-RULES.md §2参照）」
- **今の実態**: `context-pack/` は存在するが、11 月の指示書は `docs/prompts/INSTRUCTION-*.md`（pd の cli-instruction テンプレート）
- **選択肢**: 残す／直す（指示書の置き場を docs/prompts/ に統一）／消す（context-pack を外す）

#### O-03 「構造レビュー、設計議論 → GPT」 ［揺れ］
- **ルールの文**: 「構造レビュー、設計議論 → GPT」
- **今の実態**: レビューは team-critic（Claude）と Codex レビュー（pd スキル）。GPT を直接呼ぶ記録は無い
- **選択肢**: 残す／直す（「team-critic／codex-review」）

### env-adaptive.md

#### E-01 ブランチ `dev` ［死文・揺れ］
- **ルールの文**: 「ベース: `dev`」「リモート `dev` ブランチの `src/config.js`」「dev への直接マージ禁止」「リモート dev ブランチの docs/prompts/INSTRUCTION-TXXX.md」
- **今の実態**: ブランチは `develop`。`dev` は無い
- **選択肢**: 直す（§6 に diff）

#### E-02 ワークツリー `kesson-claude-code-cli` ［死文］
- **ルールの文**: 「`cd kesson-claude-code-cli`」
- **今の実態**: 無い（C-03）
- **選択肢**: 直す／消す

#### E-03 DT App Code・GitHub API・codex exec の操作マッピング ［休眠］
- **ルールの文**: 「DT App Code: `github:create_or_update_file`」「codex 委譲: `codex exec --full-auto`」「環境判別を省略して実装を開始することは禁止」
- **今の実態**: 11 月は全てローカル CLI（desktop app）。DT App Code も codex も未使用。環境判別は dev/CLAUDE.md の LOCAL/REMOTE 判定が別にある
- **選択肢**: 残す（REMOTE 用として）／直す（dev/CLAUDE.md の LOCAL/REMOTE に寄せて重複を外す）／消す

#### E-04 指示書テンプレートが三通り ［揺れ］
- **ルールの文**: §3「指示書: T-XXX タスク名」。project-management-agent §2.1「`docs/prompts/INSTRUCTION-<issue-number>.md`」。dt-codex-delegation「`docs/codex/INSTRUCTION-{issue番号}.md`」。TEMPLATE-instruction-v2.md は pd 正本ポインタ
- **今の実態**: 使われているのは `docs/prompts/INSTRUCTION-<issue>-<枝>.md`＋pd テンプレート
- **選択肢**: 直す（一つに統一し、他は参照に）

### state-sync.md

#### S-01 state.md・backlog.md 全体 ［死文］
- **ルールの文**: 「state.md の『CLI 作業中』に自分を登録する」「Issue 起票と backlog.md 更新は同一ターン（同一レスポンス）で実行する。分離禁止」「`.cache/session/state.lock` を確認…lock を作成」
- **今の実態**: `.cache/session/state.md`・`.cache/backlog.md`・`state.lock` は ks に存在しない（本体 .cache にも無い）。進捗は Issue コメント（Start/Interim/Completion）・`session/log-*.md`・`outbox/DONE-*.md` で共有されている。参照元: hooks `state-lock-guard.sh`・`issue-sync-guard.sh`、guardian-matrix KS-018/021/022/023/026/030、agent-completion・parallel-worktree・memory-policy・session-management・dt-codex-delegation
- **選択肢**: 残す（state.md・backlog.md を新設して運用を始める）／直す（Issue コメント＋セッションログ＋DONE に置換。§6 に diff）／消す（ファイルごと削除し、hooks の state-lock-guard・issue-sync-guard と guardian-matrix の該当行も外す）

#### S-02 外部エージェントの DONE ファイル ［一致］
- **ルールの文**: 「外部エージェントが行うこと: Issue にコメント + `.cache/outbox/DONE-{issue}-{YYYYMMDD}.md` を作成」
- **今の実態**: DONE-215-A・DONE-215-B で運用
- **選択肢**: 残す

### docs-navigator.md

#### N-01 「devlog 追加 → README.md §Devlog English Flow」 ［死文］
- **ルールの文**: 「devlog 追加 | README.md §Devlog English Flow | 手順 + 検証コマンド」
- **今の実態**: README.md に該当節は無い（C-11 と同根）
- **選択肢**: 直す（`docs/DEVLOG-SPEC.md` か `scripts/` の実在先に）／消す

#### N-02 優先順位の記述が三通り ［矛盾］
- **ルールの文**: docs-navigator「CLAUDE.md の記述が他ドキュメントと矛盾する場合、CLAUDE.md を優先」。project-management-agent §0「`User request > README.md > AGENTS.md > this file > docs/*`」。AGENTS.md §1.1「1. CLAUDE.md 2. AGENT-RULES.md 3. CLAUDE-CODE-QC.md …」。dev/CLAUDE.md は横断規約
- **今の実態**: どれを最上位にするかが文書ごとに違う
- **選択肢**: 直す（一箇所に決めて他は参照）

#### N-03 その他の行 ［一致］
- **ルールの文**: shader-impl・config.js／ARCHITECTURE・breaking-change-checklist・TESTING・commit-rules・quality-management・docs/README
- **今の実態**: 参照先はすべて存在
- **選択肢**: 残す

### dt-codex-delegation.md

#### D-01 固定ワークツリー表 ［死文・矛盾］
- **ルールの文**: 「kesson-space ~/dev/kesson-space main 本番」「kesson-claude-dt-check dev」「kesson-codex-app1〜3」「kesson-codex-cli1〜3」
- **今の実態**: 本体は develop。ほかは存在しない。CLAUDE.md §2「常設ワークツリーは使用しない」と逆
- **選択肢**: 直す（表を外し CLAUDE.md §2 を参照）／消す（ファイルごと）

#### D-02 `dev` 表記 ［揺れ］
- **ルールの文**: 「dev から分岐」「from_branch: dev」「dev へのマージは目視確認後のみ」「目視確認 OK → dev マージ」
- **今の実態**: develop
- **選択肢**: 直す（§6 に diff）

#### D-03 指示書の置き場 `docs/codex/` ［死文］
- **ルールの文**: 「`docs/codex/INSTRUCTION-{issue番号}.md` を作成」
- **今の実態**: docs/codex/README が「Legacy」。現行は docs/prompts/
- **選択肢**: 直す／消す

#### D-04 セッション状態 `~/Library/Caches/kesson-agent/session/state.md` ［死文］
- **ルールの文**: 「委譲後のセッション状態を `~/Library/Caches/kesson-agent/session/state.md` に記録」
- **今の実態**: ディレクトリは空（2026-03-09 作成）
- **選択肢**: 消す

#### D-05 DT の自制ルール ［主体の揺れ］
- **ルールの文**: 「DT が直接コードを実装・プッシュ」禁止、「目視確認前に次タスク着手」禁止
- **今の実態**: 目視ゲートは pjdhiro。DT チャットは 11 月に登場しない
- **選択肢**: 残す（DT を使うときの規約として）／直す（主体を「本体セッション」に）／消す（ファイルごと休眠へ）

### codex-exec.md

#### X-01 ファイル全体 ［死文］
- **ルールの文**: 「`codex exec --full-auto -m gpt-5.3-codex`」「ワークツリー対応表: kesson-codex-cli1／kesson-codex-app1／kesson-claude-dt-check dev」「目視確認 → dev マージ」
- **今の実態**: `codex` 未インストール。ワークツリーは無い。Codex は pd の codex-review スキル（MCP）経由でレビューだけに使われた（outbox/REVIEW-*、最終 2026-04-19）
- **選択肢**: 残す（再導入時の手順として「現在未使用」注記）／直す（`dev`→`develop`。§6 に diff）／消す（pd の codex-review スキルに寄せる）

### review-gates.md

#### G-01 「GPT用」・観点がコード向け ［休眠・揺れ］
- **ルールの文**: 「Role: レビュアー/アーキテクト」「レビュー観点: パフォーマンス、設計整合性、可読性、堅牢性、アクセシビリティ」「60fps維持できるか」
- **今の実態**: 11 月のレビュー対象は論・文章。team-critic が pd の検証プリミティブ V3〜V6 で見ている。コードレビューは行われていない
- **選択肢**: 残す（コード変更時用）／直す（「コード向け」と明記し、文章のレビューは agent-team-workflow を参照）／消す

### shared-quality.md

#### Q-01 コード規約・パフォーマンス・テスト ［一致・未発動］
- **ルールの文**: 「60fps」「毎フレームの `new` 禁止」「静的: `node tests/config-consistency.test.js` 通過」
- **今の実態**: テストは毎回実行（90 passed）。コード規約は 11 月に対象なし
- **選択肢**: 残す

#### Q-02 「HTMLの変更禁止（JSコードのみ出力）」 ［運用で上書き］
- **ルールの文**: 「HTMLの変更（JSコードのみ出力。HTML変更が必要な場合は別途明記）」禁止。「例外: アクセシビリティ改善」
- **今の実態**: INSTRUCTION-215-B は index.html・meta-overview.html を明示して編集させた。「指示書に明記すれば可」の運用
- **選択肢**: 残す／直す（例外を「指示書に対象として明記した場合」に広げる）

#### Q-03 「CONCEPT.md との整合性」 ［揺れ］
- **ルールの文**: 「CONCEPT.md との整合性を保つ」
- **今の実態**: `docs/CONCEPT.md`。11 月の論は `knowledge/schema/core-definitions.md` を正本にしている
- **選択肢**: 直す（正本を `knowledge/schema/core-definitions.md` に、CONCEPT.md の位置づけを一言）

### shader-impl.md

#### H-01 ファイル全体 ［休眠］
- **ルールの文**: 「Role: Three.js/GLSLの実装担当。Claudeからのタスク定義に基づきコードを生成する」
- **今の実態**: Gemini は 2026-03 以降未使用
- **選択肢**: 残す（休眠と注記）／消す

### project-management-agent.md

#### P-01 CURRENT.md・TODO.md 廃止 ［一致・周辺に残存］
- **ルールの文**: 「`docs/CURRENT.md` と `docs/TODO.md` は廃止済み。読まない・更新しない」
- **今の実態**: 両ファイルは「廃止」案内だけで存在。`.claude/commands/session-init.md`（/session-init）は今も両方を読む手順
- **選択肢**: 残す／直す（session-init.md を Issue コメント・セッションログ読みに）／消す（CURRENT.md・TODO.md 自体を削除）

#### P-02 `dev` 表記 ［揺れ］
- **ルールの文**: 「`dev -> main` の最終マージ」「WAIT_VISUAL: `dev` 反映済み」「リリース経路は `implementation -> dev -> main`」
- **今の実態**: develop
- **選択肢**: 直す（§6 に diff）

#### P-03 ブランチ命名と起点 ［揺れ］
- **ルールの文**: 「ブランチ名 `feature/issue-<number>-<slug>` を標準採用」「実装ブランチは必ず `main` 起点で作成」「既存ブランチ再利用: `issue-<number>` を含む」
- **今の実態**: app が `claude/<slug>` を main 起点で切る（起点は一致）。`feature/*` は 2026-03 以前。再利用は同じ worktree で続ける形
- **選択肢**: 残す／直す（「app が切る `claude/*` を使う。feature/* は手で切る場合」）

#### P-04 委譲マトリクス「JS/CSS/HTML → Codex」 ［死文］
- **ルールの文**: 「JS/CSS/HTML の通常実装 | Codex | 既定の実装先」「Three.js構成変更 | Codex or Claude Code | 先にCodexを試す」
- **今の実態**: Codex 未導入（C-16）
- **選択肢**: 直す（既定を Agent-WT に）／消す

#### P-05 指示書の置き場 ［一致］
- **ルールの文**: 「`docs/prompts/INSTRUCTION-<issue-number>.md`」
- **今の実態**: INSTRUCTION-215-A.md・-B.md
- **選択肢**: 残す

#### P-06 Issue コメント Start/Interim/Completion ［一致］
- **ルールの文**: §7「🚀 Started」「🛠️ Interim update」「✅ Implementation complete」
- **今の実態**: #215・#216 で使用
- **選択肢**: 残す

#### P-07 トリアージ（P0〜P3・加点） ［死文に近い］
- **ルールの文**: 「P0 = 400 … 最終更新からの経過日数を加点」
- **今の実態**: P ラベル 0 件（C-12）
- **選択肢**: 残す／直す／消す

#### P-08 WAIT_VISUAL 中の禁止 ［運用で上書き］
- **ルールの文**: 「`WAIT_VISUAL` 中は、同Issueの新規分析・新規指示書作成を禁止」「目視確認前に次タスクへ着手する」禁止
- **今の実態**: #215 段 3 の目視待ち中に、pjdhiro の方針転換で #216 を起票して着手した（2026-11-02）。pjdhiro の指示があれば越える運用
- **選択肢**: 残す／直す（「pjdhiro の指示がある場合を除く」）

#### P-09 「1 Issue 1 ブランチ 1 ワークツリー」 ［ずれ］
- **ルールの文**: 「1 Issue 1 ブランチ 1 実装ワークツリーを原則とする」
- **今の実態**: 1 セッション 1 ワークツリーで #215・#216・#217 を同じ枝に積んでいる
- **選択肢**: 残す／直す（「1 セッション 1 ワークツリー。Issue は複数可」）

#### P-10 「Ask-Then-Proceed: UI/演出の大幅変更」 ［一致］
- **ルールの文**: 「UI/演出の大幅変更 | 期待値の差分が出やすいため」
- **今の実態**: 公開面の書き直しは pjdhiro の採否（#216）
- **選択肢**: 残す

### parallel-worktree.md

#### W-01 3 レーン・Agent-WT は push しない ［一致］
- **ルールの文**: 「Agent-WT は push しない。本体がマージと push を行う」「ワークツリー作成時に事前明確化: 完了条件／マージ先（原則 `develop`）／後処理」
- **今の実態**: DONE-215-A「push なし・Main が取り込む」。マージ先 develop
- **選択肢**: 残す

#### W-02 共有禁止ファイル ［死文混在］
- **ルールの文**: 「共有禁止ファイル: `CLAUDE.md`／`.claude/rules/*.md`／`.cache/session/state.md`／`.cache/backlog.md`」
- **今の実態**: 後二つは無い（S-01）
- **選択肢**: 直す（後二つを外す）

#### W-03 並行数 ［ずれ］
- **ルールの文**: 「3レーン以上の同時実行はレート制限リスクがあるため、2並行を推奨する」
- **今の実態**: team-researcher を 3 並行 × 2 組（round 3）、計 7 agent。レート制限は記録されていない
- **選択肢**: 残す／直す（調査系は 3 並行まで等、実測に合わせる）

#### W-04 max_turns 目安 ［ずれ］
- **ルールの文**: 「形式修正 10-15／比較 + 反映 20-25／テンプレ適用 15-20」
- **今の実態**: Web 照合つき調査は 20 で足りず 3 本が途中停止（round 2）。1 レーン 1 件に切り直して 13〜20 で完了（round 3）
- **選択肢**: 残す／直す（「調査（Web 照合）: 1 レーン 1 件・20」を追加）

#### W-05 ワークツリー削除 ［C-04 と同じ］
- **ルールの文**: 「Agent-WT のワークツリーは Issue クローズ時に削除する」
- **今の実態**: 7 本残存
- **選択肢**: C-04 に同じ

### agent-completion.md

#### A-01 DONE・Issue コメント・Main のチェックリスト ［一致］
- **ルールの文**: 「`.cache/outbox/DONE-{issue}-{YYYYMMDD}.md` を作成すること」「4. develop にマージし、push する」
- **今の実態**: 一致
- **選択肢**: 残す

#### A-02 state.md・backlog.md ［死文］
- **ルールの文**: 「行わないこと: `.cache/session/state.md` の更新、`.cache/backlog.md` の更新」「7. 必要なら `.cache/session/state.md` と `.cache/backlog.md` を更新する」
- **今の実態**: 無い（S-01）
- **選択肢**: S-01 に同じ

### memory-policy.md

#### M-01 .cache/ の表 ［死文混在］
- **ルールの文**: 「`session/state.md`」「`backlog.md`」「`session/handoff-*.md`」「`active/TASK-*.md`」「`inbox/`」
- **今の実態**: あるのは `session/log-*.md`・`outbox/DONE-*`・`outbox/REVIEW-*`・`inbox/archive`・`reviews/`。state・backlog・handoff・active は無い
- **選択肢**: 直す（表を実態に）

#### M-02 CLI メモリの方針 ［一致］
- **ルールの文**: 「オーナーのフィードバック・修正指示（type: feedback）」「書かないもの: コード構造、ファイルパス、Git 履歴」
- **今の実態**: MEMORY.md は feedback／project／reference のみ
- **選択肢**: 残す

### agents.md

#### T-01 「標準エージェント（プロセスガード・セッションヘルス）」 ［揺れ］
- **ルールの文**: 「プロセスガード | 品質ルール・プロジェクト定義との整合性を監視」「セッションヘルス | コンテキスト負荷・品質劣化を監視」
- **今の実態**: `.claude/agents/` にその名の定義は無い。hooks（credential・exfil・destructive 等）が一部を担う。セッションヘルスの発動記録なし（C-07）
- **選択肢**: 残す／直す（実在する agents・hooks の一覧に）／消す

#### T-02 中立性原則 ［一致］
- **ルールの文**: 「『バグを探せ』→『ロジックを辿り、所見を報告せよ』」
- **今の実態**: 本タスクの指示にも使われている
- **選択肢**: 残す

#### T-03 敵対エージェント（発見者・反証者・審判） ［一致・名が違う］
- **ルールの文**: 「発見者／反証者／審判」
- **今の実態**: agent-team-workflow の researcher／critic／本体の統合。審判は pjdhiro
- **選択肢**: 残す／直す（名前を agent-team-workflow に揃える）

### commit-rules.md

#### K-01 ブランチ表 ［一致・休眠混在］
- **ルールの文**: 「`develop` 目視確認ゲート マージのみ」「`feature/*`, `claude/*` 実装作業」「`gemini-dev` Gemini シェーダー実験」
- **今の実態**: develop・claude/* は一致。gemini-dev は 2026-03-01 で止まっている
- **選択肢**: 残す／直す（gemini-dev に休眠注記）

#### K-02 Co-Authored-By と Session trailer ［揺れ］
- **ルールの文**: 「`Co-Authored-By: Claude <noreply@anthropic.com>`」
- **今の実態**: 実際は `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`（ハーネス指定）。dev/CLAUDE.md が求める `Session: {YYYYMMDD}-{rnd3}` trailer は直近 8 件中 1 件
- **選択肢**: 残す／直す（Co-Authored-By はハーネスに従う、Session trailer を必須にするかを決める）

#### K-03 Push 前チェック ［一致］
- **ルールの文**: 「3. `node tests/config-consistency.test.js` パス確認 4. Issue にコメント」
- **今の実態**: 一致
- **選択肢**: 残す

### project-structure.md

#### J-01 ディレクトリレイアウト ［一致］
- **ルールの文**: 「src/config/ core/ shaders/ consciousness/ styles/ devlog/ … knowledge/ transform/ content/ mcp_servers/ .github/workflows/」
- **今の実態**: すべて存在。`docs/issues/`・`docs/drafts/`（2026-11）が増えた
- **選択肢**: 残す／直す（docs/ の下位を一言）

#### J-02 `.github/workflows/` と test.yml の `dev` ［揺れ］
- **ルールの文**: 「.github/workflows/ # CI/CD」
- **今の実態**: test.yml は `branches: [main, dev]`。`dev` は無いので main push でしか走らない（5796b05 で復元）。dev/CLAUDE.md「Actions を使わない」は private 限定で ks（public）は対象外
- **選択肢**: 残す／直す（test.yml を `develop` に）

### session-management.md

#### L-01 state.md プロトコル ［死文］
- **ルールの文**: 「パス: `.cache/session/state.md`。ローカル書き込み完了ごとに更新（フリーズ対策の最重要ルール）」
- **今の実態**: 無い（S-01）
- **選択肢**: S-01 に同じ

#### L-02 セッションログの採番 ［揺れ］
- **ルールの文**: 「`.cache/session/log-{YYYYMMDD}-{seq}.md`」
- **今の実態**: 2026-05 までは `-01` 連番、2026-11 からは dev/CLAUDE.md の `{rnd3}`（`-800`・`-198`・`-870`・`-894`）。書き込み口 `scripts/session-log.sh` は ks に無く、myhome 版は ks で落ちる
- **選択肢**: 直す（dev/CLAUDE.md の書式に統一し、ks に session-log.sh か conf を置くかを決める）

#### L-03 handoff ファイル ［未使用］
- **ルールの文**: 「`handoff-{FROM}-{YYYYMMDD}-{slug}.md`」「CLI: セッション開始時に `ls .cache/session/handoff-DT-*.md` で確認」
- **今の実態**: 一つも無い。DT↔CLI の往復が無い
- **選択肢**: 残す／消す

#### L-04 inbox/outbox の向き ［揺れ］
- **ルールの文**: 「`.cache/inbox/`: `REQ-*`（依頼）／`REVIEW-*`（出力）」
- **今の実態**: `REVIEW-*` は `outbox/` にある（codex-review の出力）。dev/CLAUDE.md は「outbox/REQ-*」「inbox/REVIEW-*」。inbox は archive のみ
- **選択肢**: 直す（dev/CLAUDE.md と pd の codex-review スキルの向きに揃える）

#### L-05 成果品整合性チェック（DIC） ［一致］
- **ルールの文**: 「完了済みタスクの依頼ファイルが残存していないか照合」
- **今の実態**: 問題なし
- **選択肢**: 残す

### breaking-change-checklist.md

#### B-01 ファイル全体 ［一致］
- **ルールの文**: 「`src/config.js` (config/params.js) のパラメータ名変更・削除」「`grep -r "{変更対象}" src/ tests/ index.html`」
- **今の実態**: 参照先は存在。11 月に対象変更なし
- **選択肢**: 残す

### agent-team-workflow/SKILL.md

#### F-01 pd 正本ポインタ・agent 定義の同期 ［一致］
- **ルールの文**: （develop 版）「`.claude/agents/team-critic.md`・`team-researcher.md` は pd 正本のコピー」
- **今の実態**: f225a0a で実ファイル化。round 2〜4 で使用
- **選択肢**: 残す

---

## 3. 横断・周辺文書（CLAUDE.md が参照しているもの）

### Z-01 `dev` と `develop` の表記揺れ ［揺れ］
- **ルールの文**: `dev`＝env-adaptive（4 箇所）・dt-codex-delegation（6）・codex-exec（2）・project-management-agent（5）・AGENTS.md §3.1・docs/WORKFLOW.md §5・test.yml。`develop`＝CLAUDE.md・parallel-worktree・agent-completion・commit-rules
- **今の実態**: ブランチは `develop` だけ
- **選択肢**: 直す（rules 4 本は §6 に diff。AGENTS.md・WORKFLOW.md・test.yml は別途）

### Z-02 AGENTS.md ［矛盾］
- **ルールの文**: §2.2「main `ks` main 本番」「DT staging kesson-claude-dt-check dev」「Codex App 1〜3／CLI 1〜3」。§3.1「main → implementation → dev → PR → main」。§1-4「README.md Step 2.5」
- **今の実態**: 本体は develop・固定ワークツリー無し・Step 2.5 無し（C-03・C-11・D-01 と同根）
- **選択肢**: 直す（CLAUDE.md §2 と同じ内容に）／消す（AGENTS.md の該当節を CLAUDE.md 参照に）

### Z-03 docs/WORKFLOW.md・docs/ENVIRONMENT.md ［死文混在］
- **ルールの文**: WORKFLOW §3a「DT App Code: `docs/prompts/NEXT-TASK.md` を読んで実行して」。§5「dev 目視確認用ステージング」。ENVIRONMENT v1.3「Codex MCP／OpenAI Codex CLI／Worktree 運用: kesson-codex-app1〜3・cli1〜3」
- **今の実態**: NEXT-TASK.md 無し・dev 無し・Codex 無し
- **選択肢**: 直す／消す（CLAUDE.md と重複する節を外す）

### Z-04 `.claude/commands/session-init.md` ［死文］
- **ルールの文**: 「`docs/CURRENT.md` を読んで…」「`docs/TODO.md` を読んで、P0/P1 タスクを確認する」
- **今の実態**: 両ファイルは廃止案内のみ（P-01）
- **選択肢**: 直す／消す

### Z-05 hooks と guardian-matrix の state.md 依存 ［死文］
- **ルールの文**: `state-lock-guard.sh`（`.cache/session/state.md`・`.cache/backlog.md` 編集時に lock を強制）、`issue-sync-guard.sh`（gh issue 操作後の backlog 同期）、guardian-matrix KS-018・021・022・023・026・030
- **今の実態**: 対象ファイルが無いので hooks は何も起こらない
- **選択肢**: S-01 の採否に従う

### Z-06 dev/CLAUDE.md（横断）との関係 ［揺れ］
- **ルールの文**: dev/CLAUDE.md「書き込み口は `bash scripts/session-log.sh begin` の1つ」「コミット末尾に `Session: {YYYYMMDD}-{rnd3}`」「`{repo}/.cache/outbox/REQ-*.md`／`{repo}/.cache/inbox/REVIEW-*.md`」
- **今の実態**: ks に session-log.sh 無し（手書き）。Session trailer は 1/8。REVIEW-* は outbox
- **選択肢**: 直す（ks 側の session-management.md を dev/CLAUDE.md に合わせ、スクリプトを置くか決める）

### Z-07 「論は本体が書く」手順がどこにも書かれていない ［不足］
- **ルールの文**: （該当なし）
- **今の実態**: 11 月の進め方（材料から推論 → アーティファクト → 直す → 定まる → 正本 → 草案 → 公開ページ。本人の発言はテスト文）は棚卸し 位19〜22 と CLI メモリにだけある。リポジトリのルールには無い
- **選択肢**: 残す（ルール化しない。棚卸しと Issue に置く）／直す（CLAUDE.md に「論・公開文の作り方」節を足す。C-02 の採否と一体）

---

## 4. 一致していて見直し不要に見えるもの（まとめ）

C-04（develop・LaunchAgents・常設なし）、C-15（main 直 push 禁止）、S-02（DONE）、N-03、P-05・P-06・P-10、W-01、A-01、M-02、T-02、K-03、J-01、L-05、B-01、F-01。

---

## 5. 採否の記入欄（pjdhiro）

| ID | 種別 | 要旨 | 採否 | メモ |
|---|---|---|---|---|
| C-01 | 揺れ | 指示の入口（DT／直接対話） | | |
| C-02 | 矛盾 | Main は実装しない vs 論は本体が書く | | |
| C-03 | 死文 | ワークツリー命名 kesson-* | | |
| C-04 | 一致 | develop・LaunchAgents・削除タイミング | | |
| C-05 | ずれ | 作業開始時の最新化（main 起点 → develop） | | |
| C-06 | 一致 | D1-D4 禁止（Issue タイトルの残存） | | |
| C-07 | 未使用 | SH-1〜6 | | |
| C-08 | 揺れ | PM-3 テンプレ・PM-6 DT 確認 | | |
| C-09 | 揺れ | SSoT のパス src/config.js vs src/config/ | | |
| C-10 | 休眠 | シェーダー → Gemini | | |
| C-11 | 死文 | README Step 2.5 | | |
| C-12 | 死文 | P0/P1 ラベル | | |
| C-13 | 死文 | kesson-space-develop パス・serve.sh & | | |
| C-14 | 揺れ | コンフリクトは DT App に報告 | | |
| C-15 | 一致 | main 直 push 禁止 | | |
| C-16 | 死文 | 委譲マトリクス（Gemini・Codex・DT Code） | | |
| C-17 | 揺れ | デプロイ＝main 直接 → deploy-pages.yml | | |
| C-18 | 運用 | CLAUDE.md main 版と develop 版の差 | | |
| O-01 | 休眠 | Three.js/GLSL を書かない・Gemini | | |
| O-02 | 未使用 | context-pack | | |
| O-03 | 揺れ | レビュー → GPT | | |
| E-01 | 死文 | dev → develop | | |
| E-02 | 死文 | kesson-claude-code-cli | | |
| E-03 | 休眠 | DT App Code／codex exec マッピング | | |
| E-04 | 揺れ | 指示書テンプレ三通り | | |
| S-01 | 死文 | state.md・backlog.md | | |
| S-02 | 一致 | DONE ファイル | | |
| N-01 | 死文 | README §Devlog English Flow | | |
| N-02 | 矛盾 | 優先順位が三通り | | |
| N-03 | 一致 | その他の参照先 | | |
| D-01 | 死文 | 固定ワークツリー表 | | |
| D-02 | 揺れ | dev → develop | | |
| D-03 | 死文 | docs/codex/ | | |
| D-04 | 死文 | ~/Library/Caches/kesson-agent | | |
| D-05 | 揺れ | DT の自制ルールの主体 | | |
| X-01 | 死文 | codex-exec 全体 | | |
| G-01 | 休眠 | review-gates（GPT・コード向け） | | |
| Q-01 | 一致 | コード規約・テスト | | |
| Q-02 | 運用 | HTML 変更禁止の例外 | | |
| Q-03 | 揺れ | CONCEPT.md vs core-definitions.md | | |
| H-01 | 休眠 | shader-impl 全体 | | |
| P-01 | 一致 | CURRENT.md・TODO.md（session-init が読む） | | |
| P-02 | 揺れ | dev → develop | | |
| P-03 | 揺れ | ブランチ命名 feature/issue-* vs claude/* | | |
| P-04 | 死文 | JS/CSS/HTML → Codex | | |
| P-05 | 一致 | 指示書の置き場 | | |
| P-06 | 一致 | Issue コメント形式 | | |
| P-07 | 死文 | トリアージ P0〜P3 | | |
| P-08 | 運用 | WAIT_VISUAL 中の禁止 | | |
| P-09 | ずれ | 1 Issue 1 ブランチ | | |
| P-10 | 一致 | UI 大幅変更は確認 | | |
| W-01 | 一致 | Agent-WT は push しない | | |
| W-02 | 死文 | 共有禁止ファイルに state.md | | |
| W-03 | ずれ | 2 並行推奨 vs 3〜7 | | |
| W-04 | ずれ | max_turns 目安 | | |
| W-05 | ずれ | ワークツリー削除 | | |
| A-01 | 一致 | DONE・チェックリスト | | |
| A-02 | 死文 | state.md・backlog.md | | |
| M-01 | 死文 | .cache/ の表 | | |
| M-02 | 一致 | CLI メモリ方針 | | |
| T-01 | 揺れ | 標準エージェント名 | | |
| T-02 | 一致 | 中立性原則 | | |
| T-03 | 一致 | 敵対エージェントの名 | | |
| K-01 | 一致 | ブランチ表（gemini-dev 休眠） | | |
| K-02 | 揺れ | Co-Authored-By・Session trailer | | |
| K-03 | 一致 | Push 前チェック | | |
| J-01 | 一致 | ディレクトリ | | |
| J-02 | 揺れ | test.yml の dev | | |
| L-01 | 死文 | state.md プロトコル | | |
| L-02 | 揺れ | ログ採番 seq vs rnd3 | | |
| L-03 | 未使用 | handoff | | |
| L-04 | 揺れ | inbox/outbox の向き | | |
| L-05 | 一致 | DIC | | |
| B-01 | 一致 | breaking-change-checklist | | |
| F-01 | 一致 | agent-team-workflow ポインタ | | |
| Z-01 | 揺れ | dev/develop 横断 | | |
| Z-02 | 矛盾 | AGENTS.md の表 | | |
| Z-03 | 死文 | WORKFLOW.md・ENVIRONMENT.md | | |
| Z-04 | 死文 | session-init.md | | |
| Z-05 | 死文 | hooks・guardian-matrix | | |
| Z-06 | 揺れ | dev/CLAUDE.md との関係 | | |
| Z-07 | 不足 | 論の作り方がルールに無い | | |

---

## 6. 改訂案 diff（明らかな死文のみ。適用は採否後）

diff は develop @ 131011e の各ファイルから機械的に作った。`gemini-dev`・`?dev`・`dev-ui`・`devパネル` は触っていない。存在しないワークツリー表（D-01・X-01）の行はブランチ名だけ直してあり、表自体の扱いは採否に従う。

### 6.1 S-01 state-sync.md — state.md・backlog.md を Issue コメント＋セッションログ＋DONE に置換する案

```diff
--- a/.claude/rules/state-sync.md
+++ b/.claude/rules/state-sync.md
@@ -1,58 +1,41 @@
-<!-- Ported from: creation-space (2026-03-24) -->
-# CLI 進捗の state.md / backlog.md 自動反映ルール
+# CLI 進捗の共有ルール（Issue コメント・セッションログ・DONE）
 
 **このルールは CLI / Desktop App が必ず守ること。他エージェントからの可視性を担保する生命線。**
 
+> 2026-11 改訂: 旧版が指していた `.cache/session/state.md`・`.cache/backlog.md` は kesson-space に存在しない。
+> 進捗は GitHub Issue コメント・`.cache/session/log-*.md`・`.cache/outbox/DONE-*.md` で共有されている実態に合わせた。
+
 ## トリガーと更新義務
 
 ### 1. セッション開始時
-- state.md の「CLI 作業中」に自分を登録する
-- HEAD SHA を最新に更新する
+- 対象 Issue の直近コメントと `.cache/session/log-*.md`（最新 1〜2 件）を読み、前回の到達点から始める
+- `pwd`・`git branch --show-current`・`git log --oneline -1` を控える
 
 ### 2. Issue 起票時（同一ターン必須）
-- **Issue 起票と backlog.md 更新は同一ターン（同一レスポンス）で実行する。分離禁止。**
-- backlog.md の該当セクションに新規行を追加する
-- 依存関係がある場合は依存関係の全体図も更新する
+- Issue 本文に目的・完了条件・関連 Issue を書く
+- 既存 Issue との依存関係があれば本文に明記する
 
 ### 3. commit & push 後
-- state.md の HEAD SHA を更新する
+- 対象 Issue に Interim コメント（SHA・変更ファイル・次の一手）
 
 ### 4. タスク完了時
-- state.md の「CLI 作業中」から削除する
-- backlog.md の該当行に `完了 (SHA)` フラグを立てる
-- Issue にコメントを残す
+- Issue に Completion コメント（SHA・変更ファイル・テスト結果・残）
+- 完了条件を満たし push 済みなら close。判断が要るものは pjdhiro に仰ぐ
 
 ### 5. 外部エージェント並行実行の開始時（投入側の責務）
-- **投入側（CLI / DT App）が** state.md の「外部エージェント待ち」に登録する（Issue番号、内容、エンジン名）
-- 外部エージェント自身は state.md を操作しない
+- **投入側（CLI / DT App）が** Issue に Start コメント（指示書パス・ワークツリー・エージェント名）を書く
+- 外部エージェント自身は Issue の状態管理をしない
 
 ### 6. 外部エージェント完了時（責務分離）
 - **外部エージェントが行うこと**: Issue にコメント + `.cache/outbox/DONE-{issue}-{YYYYMMDD}.md` を作成
-- **投入側が行うこと**: state.md の「外部エージェント待ち」から削除、backlog.md のステータス更新、session log 作成、inbox archive
+- **投入側が行うこと**: DONE を検証 → develop に取り込み → Issue コメント → セッションログに記録 → 処理済みの inbox/outbox ファイルを archive
 
-**設計理由**: 外部エージェントが state.md の lock プロトコルを実行するとフリーズしやすい。state.md / backlog.md 管理を投入側に集約し、外部エージェントは作業本体 + commit + DONE ファイルに集中させる。
+**設計理由**: 外部エージェントに状態ファイルの更新を負わせるとフリーズしやすい。状態管理を投入側に集約し、外部エージェントは作業本体 + commit + DONE ファイルに集中させる。
 
 ### 7. セッション終了時
-- state.md を最終状態に更新する（R-B-W + Lock プロトコル）
-- backlog.md を最終状態に更新する
-- セッションログを作成する
+- `.cache/session/log-{YYYYMMDD}-{rnd3}.md` を作成する（書式は dev/CLAUDE.md「セッション終了時のログ保存」）
+- 作業した Issue に到達点コメントを残す
 
-## 更新手順
-
-state.md / backlog.md を書き換える際は必ず:
-
-1. `.cache/session/state.lock` を確認（存在して5分以内なら待つ、5分超なら stale として削除）
-2. lock を作成
-3. **ファイルを読み直してから**書き換える（Read-Before-Write）
-4. lock を削除
-
-## backlog.md 更新のフォーマット
-
-新規 Issue を追加する場合:
-```
-| #NNN | タイトル | CLI作業中 / 外部実行中 / 完了(SHA) | 依存 |
-```
-
 ## 怠った場合のリスク
 
 - 他エージェントから CLI の進捗が見えなくなる
```

### 6.2 E-01 env-adaptive.md — dev → develop

```diff
--- a/.claude/rules/env-adaptive.md
+++ b/.claude/rules/env-adaptive.md
@@ -47,7 +47,7 @@
 自身の環境を判定してから操作マッピングに従って実装すること。
 
 ## 作業ブランチ
-- ベース: `dev`
+- ベース: `develop`
 - 作業: `feature/xxx`
 
 ## 完了条件
@@ -57,7 +57,7 @@
 ## 実装手順
 
 ### Step 1: ファイルを読む
-- 対象: リモート `dev` ブランチの `src/config.js`
+- 対象: リモート `develop` ブランチの `src/config.js`
 
 ### Step 2: ファイルを編集
 - 対象: `src/config.js`
@@ -73,7 +73,7 @@
 
 ## 禁止事項
 - main ブランチへの直接 push 禁止
-- dev への直接マージ禁止
+- develop への直接マージ禁止
 - 既存ファイルの意図しない変更禁止
 ```
 
@@ -89,7 +89,7 @@
   4. ブランチ作成（必要なら github:create_branch）
   5. ユーザーに報告:
      「指示書を push しました。DT App Code で以下を伝えてください:
-      リモート dev ブランチの docs/prompts/INSTRUCTION-TXXX.md を読み実装せよ」
+      リモート develop ブランチの docs/prompts/INSTRUCTION-TXXX.md を読み実装せよ」
 
 ユーザー: 「cli で XXX」
               ↓
```

### 6.3 D-02 dt-codex-delegation.md — dev → develop

```diff
--- a/.claude/rules/dt-codex-delegation.md
+++ b/.claude/rules/dt-codex-delegation.md
@@ -13,7 +13,7 @@
 | ワークツリー | パス | ブランチ | 用途 |
 |---|---|---|---|
 | kesson-space | ~/dev/kesson-space | main | 本番。読み取り参照用 |
-| kesson-claude-dt-check | ~/dev/kesson-claude-dt-check | dev | DT 目視確認・ステージング |
+| kesson-claude-dt-check | ~/dev/kesson-claude-dt-check | develop | DT 目視確認・ステージング |
 | kesson-codex-app1 | ~/dev/kesson-codex-app1 | (可変) | Codex DT app 用 |
 | kesson-codex-app2 | ~/dev/kesson-codex-app2 | (可変) | Codex DT app 用 |
 | kesson-codex-app3 | ~/dev/kesson-codex-app3 | (可変) | Codex DT app 用 |
@@ -37,14 +37,14 @@
 - Issue 番号を控える
 
 ### Step 2: ブランチ作成
-- dev から分岐
+- develop から分岐
 - 命名: `feature/kesson-codex-app-{keyword}{issue番号}`
 
 ```
 DT が GitHub API で実行:
 github:create_branch
   branch: feature/kesson-codex-app-{keyword}{issue番号}
-  from_branch: dev
+  from_branch: develop
 ```
 
 ### Step 3: 指示書作成・プッシュ
@@ -141,14 +141,14 @@
 
 1. Codex から完了報告を受領（上記テンプレートで構造化された報告）
 2. コミット内容を GitHub API で確認
-3. **dev へのマージは目視確認後のみ**
+3. **develop へのマージは目視確認後のみ**
 4. ユーザーに目視確認を依頼:
    ```bash
    cd ~/dev/kesson-codex-{app|cli}{N}
    ./serve.sh
    # ブラウザで http://localhost:3001 を開いて確認
    ```
-5. 目視確認 OK → dev マージ → Issue クローズコメント
+5. 目視確認 OK → develop マージ → Issue クローズコメント
 6. **確認前に次作業・docs 更新・指示書作成は絶対禁止**
 
 ---
```

### 6.4 X-01 codex-exec.md — dev → develop

```diff
--- a/.claude/rules/codex-exec.md
+++ b/.claude/rules/codex-exec.md
@@ -78,7 +78,7 @@
 |---|---|---|
 | Codex CLI 定型 | `kesson-codex-cli1` | feature/*, codex/* |
 | Codex App 実装 | `kesson-codex-app1` | feature/*, codex/* |
-| DT staging 確認 | `kesson-claude-dt-check` | dev |
+| DT staging 確認 | `kesson-claude-dt-check` | develop |
 
 ## 実行フロー
 
@@ -98,7 +98,7 @@
   │  結果確認・DT に報告
   ▼
 DT チャット
-  │  目視確認 → dev マージ
+  │  目視確認 → develop マージ
 ```
 
 ## 出力の扱い
```

### 6.5 P-02 project-management-agent.md — dev → develop

```diff
--- a/.claude/rules/project-management-agent.md
+++ b/.claude/rules/project-management-agent.md
@@ -40,7 +40,7 @@
 
 | 項目 | 確認理由 |
 |---|---|
-| `dev -> main` の最終マージ | 公開影響があるため |
+| `develop -> main` の最終マージ | 公開影響があるため |
 | Issue本文にないスコープ追加 | 要件変更に当たるため |
 | UI/演出の大幅変更 | 期待値の差分が出やすいため |
 | 依存追加・削除 | 保守コストに影響するため |
@@ -62,7 +62,7 @@
 Open Issues を次の順に分類する。
 
 1. `BLOCKED`: `blocked` / `needs-info` ラベルあり
-2. `WAIT_VISUAL`: `dev` 反映済みで目視確認待ちコメントあり
+2. `WAIT_VISUAL`: `develop` 反映済みで目視確認待ちコメントあり
 3. `IN_PROGRESS`: 実装ブランチあり、`main` 未取り込み
 4. `READY`: 上記以外
 
@@ -113,7 +113,7 @@
 
 - `main` へ直接コミットしない
 - 実装ブランチは必ず `main` 起点で作成
-- リリース経路は `implementation -> dev -> main`
+- リリース経路は `implementation -> develop -> main`
 - 1 Issue 1 ブランチ 1 実装ワークツリーを原則とする
 
 ### 5.2 ブランチ再利用判定
@@ -134,8 +134,8 @@
 |---|---|---|---|
 | `READY` | 着手可能Issue | Startコメント投稿、ブランチ確定 | `IN_PROGRESS` |
 | `IN_PROGRESS` | 実装中 | Interimコメント更新、リスク監視 | `REVIEW_READY` |
-| `REVIEW_READY` | 実装完了報告あり | Completionコメント、`dev` 反映準備 | `WAIT_VISUAL` |
-| `WAIT_VISUAL` | `dev` 反映済み | 目視確認手順提示、停止待機 | `FIX_REQUIRED` or `READY_TO_MERGE_MAIN` |
+| `REVIEW_READY` | 実装完了報告あり | Completionコメント、`develop` 反映準備 | `WAIT_VISUAL` |
+| `WAIT_VISUAL` | `develop` 反映済み | 目視確認手順提示、停止待機 | `FIX_REQUIRED` or `READY_TO_MERGE_MAIN` |
 | `FIX_REQUIRED` | 目視NG | 同一Issueで修正指示書を発行 | `IN_PROGRESS` |
 | `READY_TO_MERGE_MAIN` | 目視OK | PR作成（`Closes #<issue>`） | `DONE` |
 | `DONE` | main取り込み完了 | Issueクローズ確認、ワークツリー削除、featureブランチ削除 | - |
```

### 6.6 C-13 CLAUDE.md §5 — 存在しないパスと serve.sh の手起動（任意）

```diff
--- a/CLAUDE.md
+++ b/CLAUDE.md
@@ -87,11 +87,11 @@
 - [ ] コミット・`git push origin <作業ブランチ>`
 - [ ] **develop ワークツリーにマージしてサーバーを起動する（必須）**:
   ```bash
-  cd kesson-space-develop   # develop ワークツリー
+  cd ks           # 本体チェックアウト（常時 develop）
   git fetch origin
   git merge --no-ff <作業ブランチ> -m "Merge <作業ブランチ> into develop (preview)"
-  bash ks/serve.sh &
-  # → http://localhost:3001/
+  git push origin develop
+  # → http://localhost:3001/（LaunchAgents が常時配信。serve.sh を手で起動しない＝ポート競合）
   ```
   コンフリクトが発生した場合は自動解決せず DT App に報告する。
 - [ ] ユーザーに完了報告（サーバーURL を含める）
```
