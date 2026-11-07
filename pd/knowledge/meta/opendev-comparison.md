# OPENDEV論文との構造比較

**配置先**: `base/text/meta/opendev-comparison.md`
**性質**: DB層の素材（外部論文との設計比較。L4 試行錯誤の資産化）
**初版**: 2026-03-09
**関連**: `ai-collaboration-methodology.md`（本PJの方法論知見）、#146

---

## 出典

Bui (2026) "Building AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned" (arXiv:2603.05344)

CLI-native AIコーディングエージェント OPENDEV の設計論文。本プロジェクトの人間-AI協働体系と高い構造的対応がある。

---

## 概念対応表

| # | OPENDEV の概念 | 本プロジェクトの対応物 | 差分・検討事項 |
|---|---|---|---|
| 1 | Dual-agent architecture（計画と実行の分離） | DT App（調整役）vs Codex CLI（実行） | 概念一致。本PJはさらに ChatGPT DeepResearch, Gemini を加えた多エージェント構成 |
| 2 | Adaptive context compaction（古い観測の段階的圧縮） | CLM Tier 0-3（段階的ロード） | OPENDEVは「圧縮して保持」、本PJは「必要になるまで読まない」。戦略が異なる。OPENDEVはfast pruning/masking/offloadingの段階設計を持つ。本PJはsession reset寄り |
| 3 | Automated memory system（セッション横断の知識蓄積） | state.md / セッションログ / Claude Memory | 本PJは手動更新中心。自動蓄積は Memory のみ。自動化余地あり |
| 4 | Instruction fade-out countermeasures（イベント駆動リマインダー） | 常駐サブエージェント（⚖️批評家・📂書類管理） | 概念一致。fade-out の検出精度に改善余地。OPENDEVはevent-driven+capped reminder。本PJはevery-turn常駐でコスト高だが予期しないパターンにも対応 |
| 5 | Compound AI system（ワークフロー別LLMバインド） | operations.md §1.1 LLM Routing Table | routing table として明文化済み（89f3402）。OPENDEVは5 model roles with fallback chains。本PJはworkflow-based routing+人間判断を強く残す |
| 6 | Progressive degradation（リソース枯渇時の段階的劣化） | セッション分割（100KB閾値） | 閾値は経験値。論文の知見で精緻化可能か |
| 7 | Separation of concerns | CLAUDE.md 委任レベル + 正本分離 | 概念一致。scaffolding vs harnessの分離を比較対象に追加。本PJは入口文書/runtime運用/品質invariantの3層 |
| 8 | Transparency over magic | L4（試行錯誤の資産化）+ decision-log | 概念一致 |
| 9 | Lazy tool discovery | Tier 2+ のオンデマンドロード、SKILL.md の遅延読み込み | 概念一致。frontmatter manifest、Tiered loadingのindex/body分離へ接続 |
| 10 | Prompt section registry / conditional composition | CLAUDE.md + README.md + operations.md + agents.md + SKILL群 | 本PJは文書群が豊富だが条件付きロード表が暗黙。registry化が改善候補 |
| 11 | Architectural safety by invisibility（schema gating） | 委任レベル表、DT App/CLI権限分離 | OPENDEVはschema非表示で安全確保。本PJは文書ルール+運用disciplineで実現 |
| 12 | Approximate-output absorption | CLI指示書の完了条件・停止条件・検証手順 | OPENDEVはtool側で誤差吸収。本PJはharness文書側で吸収 |
| 13 | Event-driven reminder catalog | 常駐サブエージェント + OPS-8 + session health | OPENDEVは24種reminder×event-driven。本PJはevery-turn常駐でコスト高 |
| 14 | Bounded-growth doctrine（cap + empirical tuning） | CLM + 100KB閾値 + OPS-7 | OPENDEVはeager loading回避を明確に失敗原因と位置づけ。本PJの閾値は経験則 |

---

## 設計差分の詳細

### Compaction vs 読まない戦略（#2）

OPENDEVは長時間セッションで古い観測を段階的に要約し、コンテキスト内に圧縮して保持する。本PJの CLM は「必要になるまで読まない」+「セッション分割で切り直す」。

トレードオフ:
- OPENDEV: セッション内の連続性が高いが、圧縮時の情報損失リスク
- 本PJ: セッション間の断絶があるが、各セッションのコンテキスト品質が高い

本PJのアプローチは「セッションは断絶する」を前提として受け入れ、state.md / ハンドオフで橋渡しする設計（L1: 認知的継続性）。

### Automated vs Manual memory（#3）

OPENDEVは自動的にセッション知見を蓄積。本PJは state.md の手動更新 + Claude Memory の自動蓄積の二本立て。手動更新の信頼性は高いが、更新漏れリスクがある（📂書類管理で監視）。

### Fade-out 対策（#4）

OPENDEVはイベント駆動で特定のタイミングにリマインダーを注入。本PJは毎ターンのサブエージェント常駐で対抗。本PJの方がコスト高だが、予期しないfade-outパターンにも対応できる。TC-020（harness品質テスト）で実効性を定期評価。

### Safety: 禁止文言 vs 構造制約（#11）

OPENDEVは危険ツールをschemaから見えなくすることで安全を確保する。本PJはCLAUDE.mdの委任レベルとDT App/CLIの権限分離で対応している。

差分:
- OPENDEV: ソフトウェア機構としてのschema gating
- 本PJ: 文書ルール+運用disciplineによる権限制約

これは「システム製品」対「人間-AI運用体系」の差であり、すぐに同一化してはいけない。

### Approximate Output: tool吸収 vs harness吸収（#12）

OPENDEVはedit mismatch等をtool側で吸収する設計。本PJはCLI指示書に完了条件・検証手順・停止条件を明記することで、harness文書側で誤差を吸収している。

トレードオフ:
- OPENDEV: 道具が誤差を丸めるため実行時の滑らかさが高い
- 本PJ: 契約が文書化されるため、なぜ止まったか・何を確認すべきかが見えやすい

本PJでは、repo内文書がharnessの主要部分を担う以上、近似吸収の責務がtoolより指示書側に寄りやすい。

---

## 今後の改善候補

| # | 改善項目 | 対応する差分 | 優先度 | 備考 |
|---|---|---|---|---|
| 1 | compaction戦略の比較実験 | #2 | 低 | 現状の「読まない」戦略で問題が顕在化していない |
| 2 | state.md 更新の半自動化 | #3 | 中 | CLI完了時にstate.md自動更新スクリプト |
| 3 | fade-out検出の定量化 | #4 | 低 | OPS テストで既にカバー |
| 4 | 100KB閾値の精緻化 | #6 | 低 | 論文のdegradation知見を参照 |
| 5 | 常駐サブエージェントのevent-driven発火条件定義 | #13 | 高 | OPS-8実測可能化。Issue候補 |
| 6 | harness文書群のsection registry化 | #10 | 高 | 条件付き適用表の整備。Issue候補 |
| 7 | 大出力offloadルールの明文化 | #2 | 中 | 会話→ファイル退避の運用ルール |
| 8 | routing fallback chain明文化 | #5 | 低 | workflow別の第一/第二候補 |

---

## L1-L5 との対比（§4.9 Human-Agent Collaboration）

OPENDEVの人間-エージェント協働は「より少ない介入でより高い完了率」を目指す工学的協働である。本PJのL1-L5は理論の正統性・保持論点・専権判断を含み、completion rateだけでは測れない。

| 観点 | OPENDEV | 本PJ |
|------|---------|------|
| 協働の目的 | task completion率の向上 | 理論の正統性保護 + 判断境界の明示 |
| 人間の役割 | strategic guidance injection | 最終判断権の保持（pjdhiro専権） |
| autonomyの扱い | autonomyを捨てずにguidanceを混ぜる | autonomyの上限を明示（委任レベル） |
| 評価軸 | pass rate, intervention count | 判断境界の説明可能性, 保持論点の保全 |

**保持論点**: 本PJの協働設計はOPENDEVより「人間主権」が強い。これは理論構築プロジェクトの特性であり、コーディングタスクとの本質的差異。

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-03-09 | 初版。概念対応表9項目、設計差分3項目、改善候補4項目 |
| 2026-03-09 | deepdive精読(output.md)の知見を反映。概念対応5項目追加(#10-14)、既存5項目更新(#2,4,5,7,9)、設計差分2項目追加、改善候補4項目追加、L1-L5対比セクション新設 |
