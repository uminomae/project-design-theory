# evidence-metadata.md — 調査メタ情報ルール

**バージョン**: 1.9
**作成日**: 2026-03-07
**位置づけ**: evidence/ に保存する前に読む基本定義。creation-space 固有の公開 metadata は別正本を参照
**関連Issue**: kesson-driven-thinking #121, creation-space #23, creation-space #24

---

## このファイルの役割

調査メタ情報に関わる3つの関心が、これまで別々のファイルに散在していた。

| 旧所在 | 内容 | 問題 |
|---|---|---|
| `creation-space/evidence/PROJECT.md` | フラグ体系 | evidence憲章に埋め込み |
| `creation-space/transform/domains/publish/domains/index.json` | 旧 progress_levels | 変換スクリプト周辺に散在 |
| `creation-space/src/reports.js` | 公開ラベル実装 | UIコードに埋め込み |

本ファイルは kesson 側の基本定義を保持する。creation-space 固有の公開ラベルタクソノミーと `generator_model` は `creation-space/docs/evidence-metadata-creation.md` に移管した。

---

## §1 設計思想（creation-space #23 確定）

> 「AIが調査した」は低コスト行為のためそれ自体は品質の証明にならない。
> 読者が知りたいのは「**どう操作したか**」であり、**操作プロトコルが実質的な品質基準**になっている。
> これを内部用語を使わずに読者に伝える手段として「ラベル（短い）＋解説（操作の事実）」の2層構造を採用した。

**したがってタクソノミーの軸は「調査スコープの大きさ」ではなく「誰が・どのように操作したか」である。**

---

## §2 公開ラベルタクソノミー

> **正本移転**: 公開ラベルタクソノミーの正本は `creation-space/docs/evidence-metadata-creation.md` に移行しました（#248）。

## §2.5 generator_model フィールド

> **正本移転**: `generator_model` の書式ルールと `domains.json` 連携の正本は `creation-space/docs/evidence-metadata-creation.md` に移行しました（#248）。

---

## §3 フラグ体系（evidence内部管理用）

evidenceファイルの各エントリの `flags` フィールドに記載する。
**公開タクソノミー（§2）とは別軸**。

### AIフラグ（`[ai:*]`）

フラグにはモデル名・バージョンを含める。操作の事実を記録するため。

**書式**: `[ai:{操作種別}:{モデル名}]`

| フラグ例 | 意味 |
|---|---|
| `[ai:スキャン:claude-opus-4-5]` | 指定モデルが1ターンでスキャンした段階 |
| `[ai:Claude:claude-opus-4-6]` | 指定モデルによるLevel 2以上の深掘り |
| `[ai:Codex:gpt-5.4 xhigh]` | Codex指定バージョンによる処理 |
| `[ai:GPT:gpt-4o]` | ChatGPT指定モデルによる処理 |
| `[ai:GPT:deep-research]` | ChatGPT Deep Researchによる処理 |
| `[ai:トリアージ:claude-opus-4-6]` | 指定モデルが品質チェック9項目を適用済み |
| `[ai:deepdive-claude:claude-opus-4-6]` | Claude Code Agent逐次多ラウンド深掘り |
| `[ai:deepdive-codex:gpt-5.4 xhigh]` | Codex CLIマルチエージェント並列深掘り |

**モデル名の記法**:
- Claude系: `claude-opus-4-5` / `claude-opus-4-6` / `claude-sonnet-4-6` 等（API model string）
- Codex系: `gpt-5.4 xhigh`（現行）/ `codex 5.3`（旧）等（CLIバージョン表記）
- GPT系: `gpt-4o` / `deep-research` 等
- 不明な場合: `unknown` を使う（空欄禁止）

### pjdhiroフラグ（`[hiro:*]`）

| フラグ | 意味 |
|---|---|
| `[hiro:未確認]` | pjdhiroが未レビュー（デフォルト） |
| `[hiro:確認]` | pjdhiroがレビュー済み（しっくり感チェック含む） |

### 文献フラグ（`[lit:*]`）

| フラグ | 意味 |
|---|---|
| `[lit:概要]` | 概要・二次文献参照 |
| `[lit:複数]` | 複数の一次文献を確認 |
| `[lit:精読]` | 一次文献を精読済み |

### バージョンフラグ（`[v:*]`）

| フラグ | 意味 |
|---|---|
| `[v:未検証]` | 未検証 |
| `[v:Level1]` | Level 1（幅優先スキャン段階） |
| `[v:Level2]` | Level 2（深さ優先・4面記述済み） |

---

## §4 内部Levelと公開タクソノミーのマッピング

| 内部Level | 定義（内部） | 公開タクソノミーid |
|---|---|---|
| 未実施 | evidence未作成 | `not_surveyed` |
| Level 1 | Claude 1セッションで幅優先スキャン。5段階対応・牽強付会リスク評価まで | `claude_screened` |
| Level 2 | Level 1 + ChatGPT独立レビュー突き合わせ + 4面記述 | `claude_gpt_reviewed` |
| Level 2+claude-agent | Level 2 + Claude Code Agent逐次多ラウンド深掘り | `api_deepdive` |
| Level 2+codex-parallel | Level 2 + Codex CLIマルチエージェント並列深掘り | `codex_parallel_deepdive` |
| Level 2+hiro | 上記いずれか + pjdhiroしっくり感チェック（#88）通過 | `human_reviewed` |

---

## §5 evidence保存前チェックリスト

```
□ 対象ドメインのD番号を確認（base/schema/academic-domains.md）
□ 実施した操作は何か？ → §4 のマッピングで progress_level を決定する
□ flagsフィールドに [ai:{操作種別}:{モデル名}][hiro:未確認] を設定したか
□ triageは Accept / CA / Reject のいずれか
□ 牽強付会チェックを適用したか
□ creation-space/transform/domains/publish/domains/index.json の該当ドメインの
  progress_level と progress_note を更新したか
□ deepdive を実施した場合は creation-space/evidence/deepdive/{手法}/に出力が保存されているか
```

---

## §6 情報フローと source of truth

```
`creation-space/docs/evidence-metadata-creation.md`（タクソノミー定義）
    ↓
creation-space/transform/domains/publish/domains/index.json
    ↓ publish スクリプト
pjdhiro/assets/creation/manifests/domains.json
    ↓
creation-space/src/reports.js
```

| 情報 | source of truth |
|---|---|
| タクソノミー定義 | `creation-space/docs/evidence-metadata-creation.md` |
| generator_model 定義 | `creation-space/docs/evidence-metadata-creation.md §2.5` |
| 各ドメインの進捗レベル | `creation-space/transform/domains/publish/domains/index.json` |
| 公開アセットの有無 | pjdhiro の実ファイル |
| 公開 manifest | `pjdhiro/assets/creation/manifests/domains.json` |
| UI 表示実装 | `creation-space/src/reports.js` |
| deepdive 探索の生出力 | `creation-space/evidence/deepdive/{手法}/{D番号}/` |

---

## §7 旧タクソノミーとの対応（移行メモ）

| 旧id | 現行id | 移行理由 |
|---|---|---|
| `quick_scan` | `claude_screened` | スコープではなく操作主体を明示 |
| `structure_exploration` | `claude_gpt_reviewed` | GPT照合の有無を明示 |
| `analysis_complete` | `human_reviewed` | 「完了」は評価語 |

---

## §8 deepdive ディレクトリ（標準仕様）

### ディレクトリ構造

```
creation-space/evidence/deepdive/
  README.md                        手法一覧・ラベル対応表
  script/                          再実行可能スクリプト群
  claude-code-agent/               Claude Code Agent 逐次多ラウンド
    {D番号}-{slug}/
      run{N}/
        README.md
        round-{R:02d}.md
        output.md
  codex-parallel-deepdive/         Codex CLI マルチエージェント並列
    {D番号}-{slug}/
      run{N}/
        README.md
        agent-{name}.md            各並列エージェントの出力
        output.md
```

### 新手法追加時のルール

1. `deepdive/` 直下に手法名ディレクトリを作成
2. `deepdive/README.md` の手法一覧表を更新
3. `creation-space/docs/evidence-metadata-creation.md` §2 にタクソノミーidを追加（**§2 新設時の必須ルールを満たすこと**）
4. `creation-space/transform/domains/publish/domains/index.json` の `progress_taxonomy` を更新
5. `creation-space/src/reports.js` の `DEFAULT_PROGRESS_TAXONOMY` に追加

### README.md 必須項目（各run）

```markdown
# {D番号} {手法} Run{N} サマリー

- 実行日: YYYY-MM-DD
- 手法: claude-code-agent / codex-parallel-deepdive
- モデル: （例: gpt-5.4 xhigh）
- エージェント数: N（並列の場合）/ ラウンド数: N（逐次の場合）
- 入力: creation-space/evidence/{ファイル名}
- 結果サマリー: 新規採用N件・CA変更N件・棄却N件
- 次のアクション:
```

### deepdive 後の evidence 更新フロー

```
output.md 確認（pjdhiro）
    ↓
creation-space/evidence/{D番号}-*.md 更新（flagsに [ai:deepdive-{手法}:{モデル名}] を付与）
    ↓
index.json の progress_level 更新
    ↓
（しっくり感チェック通過後）→ human_reviewed
```

---

## §9 AIモデル来歴（Model Provenance）

### 原則

外部に報告する可能性のある調査作業の成果物には、使用したAIのモデルバージョンを可能な限り記録する。
モデル名は「操作の事実」の一部であり、信頼性評価・再現性・遡及検証の基盤となる。
不明な場合は `unknown` と明記する。省略・空欄は禁止。

### 適用対象の階層

| Tier | 対象ファイル | 記載方法 | 正本セクション |
|---|---|---|---|
| 1 | evidence entries (`evidence-D{NN}-*.md` 各エントリ) | `[ai:{操作}:{モデル}]` フラグ | §3 |
| 2 | evidence front matter (`domains/*.md`, `domains.json`) | `generator_model` フィールド | `creation-space/docs/evidence-metadata-creation.md §2.5` |
| 3 | evidence deepdive Run (`deepdive/*/run*/README.md`) | Run README 必須項目 | §8 |
| 4 | DR（Deep Research一次ソース） (`202602-deep-research-30domains-gpt/DR-D{NN}-*.md`) | ヘッダー書式（下記） | 本セクション |
| 5 | meta deepdive (`base/text/meta/deepdive/*/README.md`) | Run README に準拠 | `base/text/meta/deepdive/README.md` |
| 6 | その他の調査素材 (`base/text/meta/*.md` 等) | ヘッダーに `**生成モデル**:` 行を記載 | 本セクション |

### Tier 4: DR ヘッダー書式

```markdown
**ソース**: {ツール} / {モデル名} ({日付})
**レビュー**: {ツール} / {モデル名} ({日付})
```

例:

```markdown
**ソース**: ChatGPT Deep Research / deep-research ({日付})
**レビュー**: Claude / claude-opus-4-5 ({日付})
```

モデル名が不明な場合:

```markdown
**ソース**: ChatGPT Deep Research / unknown ({日付})
**レビュー**: Claude / unknown ({日付})
```

### Tier 6: その他の調査素材

ヘッダーまたはメタ情報セクションに以下を含める:

```markdown
**生成モデル**: {generator_model書式}
```

書式は `creation-space/docs/evidence-metadata-creation.md` §2.5 の `generator_model` に準拠（例: `claude:claude-opus-4-6+gpt:deep-research`）。

### 品質管理

- **新規作成時**: 上記Tierに該当するファイルを作成・更新するAI（CLI/DT/外部）は、モデル自己申告を必須とする
- **遡及対応**: 既存ファイルで記載がないものは、推定可能なら追記、不可なら `unknown` を記載
- **定期チェック**: Tier 1-4 のモデル記載漏れを検出するスクリプトを用意（§9.1 検証テスト参照）

### §9.1 検証テスト

以下のコマンドで Tier 4（DRファイル）のモデル記載漏れを検出できる:

```bash
for f in creation-space/evidence/202602-deep-research-30domains-gpt/DR-D*.md; do
  header=$(head -10 "$f")
  if echo "$header" | grep -q '^\*\*ソース\*\*:' && ! echo "$header" | grep -q '^\*\*ソース\*\*:.*/'; then
    echo "FAIL: $f - ソース行にモデル名なし"
  fi
  if echo "$header" | grep -q '^\*\*レビュー\*\*:' && ! echo "$header" | grep -q '^\*\*レビュー\*\*:.*/'; then
    echo "FAIL: $f - レビュー行にモデル名なし"
  fi
done
```

---

## 更新履歴

| 日付 | バージョン | 内容 |
|---|---|---|
| 2026-03-14 | 1.9 | §2 / §2.5 の creation-space 固有定義を `creation-space/docs/evidence-metadata-creation.md` へ移管し、本ファイルは参照 stub に更新 (#248) |
| 2026-03-09 | 1.8 | §9 AIモデル来歴（Model Provenance）追加。Tier 1-6の階層的記載ルール・DR書式・検証テストを追加 (#115) |
| 2026-03-08 | 1.7 | §2/§2.5/§3/§8: Codex CLIモデル名を `gpt-5.4 xhigh` に更新（2026-03-06アップグレード反映） |
| 2026-03-08 | 1.6 | §2.5 generator_model フィールド追加（書式ルール・有効値・伝搬先定義）(#140) |
| 2026-03-08 | 1.5 | §2 api_deepdive / codex_parallel_deepdive の tone を `info` → `primary` に修正。reports.js badgeMap に `info` 未定義のため（cs#36吟味で発覚）。tone有効値を注記追加。保持論点に `info` 追加案を記録 |
| 2026-03-08 | 1.4 | §2 に「新設時の必須ルール」追加。description_ja/en 必須化・欠落時の UI 問題を明記（cs#36）。§8 新手法追加時ルールに reports.js 反映ステップを追加 |
| 2026-03-07 | 1.3 | §3 AIフラグにモデル名・バージョンを含める書式に拡張（`[ai:{操作種別}:{モデル名}]`）。モデル名記法を追加。§5チェックリスト・§8更新フローも対応修正（#121） |
| 2026-03-07 | 1.2 | §8 deepdive 構造を手法別に再設計。`codex_parallel_deepdive` タクソノミー追加。`[ai:deepdive-claude]` / `[ai:deepdive-codex]` フラグ追加 |
| 2026-03-07 | 1.1 | §8 deepdive ディレクトリ標準仕様追加。`api_deepdive` タクソノミー追加 |
| 2026-03-07 | 1.0 | 初版。creation-space #23確定設計思想を正本として記録。kesson-driven-thinking #121 |
