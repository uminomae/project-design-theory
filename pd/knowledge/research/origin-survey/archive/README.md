# origin-survey archive

30領域「原点」調査 v1 のアーカイブ。調査設計のための試行として実施し、プロセスから教訓を抽出した上でアーカイブした。成果物自体は今後使用しない。

教訓は issue #46 のコメントおよび auto-memory (`feedback_survey_design_lessons.md`) に記録済み。

## ファイル一覧

### プロンプト（指示書）

| ファイル | 内容 |
|---------|------|
| `30-domains-origin-survey-v1.md` | 調査指示書 v1。背景（ステップ1〜6）、ずれやすいポイント、30領域リスト、報告フォーマットを定義 |
| `origin-survey-review-v1.md` | 吟味指示書 v1。事実精度・構造的偏り・三角測量有効性の3軸で成果物を検証するための指示 |

### Codex版（#46）

| ファイル | 内容 |
|---------|------|
| `origin-survey-codex-v1.md` | Codex (GPT-5) による簡易調査の成果物。30領域の領域別レポート、横断比較表、共通構造の仮説 |
| `origin-survey-codex-v1-review.md` | 吟味レポート。総合評価B。事実精度は概ね良好だが構造的偏り（「不足」判定0個）を検出 |

### Claude Code CLI版（#45）

| ファイル | 内容 |
|---------|------|
| `origin-survey-claude-code-v1.md` | Claude Code CLI による簡易調査の成果物 |
| START-HERE.md | 検証結果を読むためのガイド |
| VERIFICATION-REPORT-v1.md | 検証レポート本体 |
| VERIFICATION-SUMMARY-TABLE.md | 検証結果の要約表 |
| VERIFICATION-CHECKLIST.md | 検証チェックリスト |
| DETAILED-CORRECTIONS.md | 修正すべき箇所の詳細 |
| EXECUTIVE-SUMMARY.md | 検証の概要 |
| README-VERIFICATION.md | 検証ファイル群の説明 |

## 主な教訓（詳細は issue #46）

1. 指示書に仮説を書くとLLMは反証を拾わない → 反証要求を明示的に書く
2. 三択（不足/足場/両方）だと「両方」が思考停止のデフォルトに → 出力構造で分離を強制
3. 一貫フォーマットは固有性を潰す → 分岐ルールまたは段階分離
4. 三角測量は調査と解釈を分離しないと確証バイアスになる → 2段構成
5. 吟味は「データ精度」と「解釈の偏り」を分けて検証すると有効
