# value/ — 「価値とは」調査ディレクトリ

Issue: #33 (親), #36 (LLM比較)

## 概要

「価値とは何か」を多角的に調査するための資料群。外部 LLM による一次レポート、それらの比較評価、弱点を補完する統合調査を段階的に蓄積する。

## ファイル一覧

| ファイル | 内容 | 段階 |
|---------|------|------|
| README.md | 本ファイル。ディレクトリの目次と読み方 | — |
| research.md | 調査設計・方法論・到達点・次のステップ | — |
| PROCESS-LOG.md | 調査プロセスの全軌跡（使用モデル・操作・時系列） | — |
| value-chatgpt-20260326.md | GPT-5.2 Thinking による概観レポート | Phase A（一次調査） |
| value-chatgptpro-20260327.md | GPT-5.4 Pro による概観レポート | Phase A（一次調査） |
| value-codex-20260327.md | GPT-5 (Codex) による概観レポート | Phase A（一次調査） |
| value-deep-research-codex-20260327.md | GPT-5 (Codex) による prompt 準拠の広域見取り図レポート | Follow-up（prompt 追試） |
| value-llm-comparison.md | 3レポートの LLM 調査能力比較（9軸評価） | Phase B（比較評価） |
| value-integrated.md | 統合調査レポート（3レポートの強み統合 + 弱点補完） | Phase C（統合調査） |

## 読み方

1. **全体像を掴む** → `research.md`（調査設計と到達点）
2. **個別レポートを読む** → `value-chatgpt-*.md`, `value-chatgptpro-*.md`, `value-codex-*.md`, `value-deep-research-codex-20260327.md`
3. **比較結果を見る** → `value-llm-comparison.md`（9軸評価 + 使い分け推奨）
4. **調査過程を追う** → `PROCESS-LOG.md`（時系列の操作記録）
5. **統合成果を読む** → `value-integrated.md`

## 関連

- 親 Issue: #33（「価値とは」探索調査）
- サブ Issue: #36（LLM 調査能力比較）
- trust 調査: `../trust/`
- design-thinking 調査: `../design-thinking/`
- PD 正本: `pjdhiro/_pages/pd/emotional-processing/value.md`（作成中）
