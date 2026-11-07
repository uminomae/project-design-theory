# 「価値とは」調査プロセスログ

Issue: #33 (親), #36 (LLM比較)
開始日: 2026-03-26
最終更新: 2026-03-27

---

## Phase A: 一次調査（外部 LLM によるレポート収集）

### A-1. ChatGPT レポート

| 項目 | 内容 |
|------|------|
| ファイル | `value-chatgpt-20260326.md` |
| 使用モデル | GPT-5.2 Thinking |
| 収集日 | 2026-03-26 |
| プロンプト | 未記録（同一性未確認） |
| 出力形式 | 構造化（表4つ、Mermaid図1つ、5セクション） |
| commit | 5ae4312 |
| 特徴 | 15領域の見取り図、「束をほどく」二軸フレームワーク、citeturn形式の内部参照 |

### A-2. ChatGPT Pro レポート

| 項目 | 内容 |
|------|------|
| ファイル | `value-chatgptpro-20260327.md` |
| 使用モデル | GPT-5.4 Pro（本文作成モデル。Deep Research ウィジェット側のモデルは未確認） |
| 収集日 | 2026-03-27 |
| プロンプト | 未記録 |
| 出力形式 | 散文（表・図なし、A-E セクション） |
| commit | 315b914 |
| 特徴 | 四層整理、横断論点の丁寧な言語化、出典ゼロ、末尾に孤立した 's' |

### A-3. Codex レポート

| 項目 | 内容 |
|------|------|
| ファイル | `value-codex-20260327.md` |
| 使用モデル | GPT-5 (Codex) |
| 収集日 | 2026-03-27 |
| プロンプト | 未記録 |
| 出力形式 | 箇条書き中心（8セクション、H2/H3 階層） |
| commit | c53f7ef |
| 特徴 | URL付き出典3件（SEP, Britannica, コトバンク）、PD文脈への明示的接続、簡潔 |

### A-注記

- 3レポートのプロンプト同一性は未確認。モデル能力の厳密な比較ではなく、出力品質の比較として扱う
- モデル世代差（GPT-5 / 5.2 / 5.4）の影響は未分離

---

## Phase B: LLM 比較評価（agent-team-workflow 初回運用）

| 項目 | 内容 |
|------|------|
| ファイル | `value-llm-comparison.md` |
| 使用ワークフロー | agent-team-workflow (cs#188) v1.1 |
| 実行モデル | Claude Opus 4.6 (Main) + Claude Sonnet (researcher/critic agents) |
| 実行日 | 2026-03-27 |
| commit | d280735 |

### B-1. Phase 1 SURVEY — researcher ×3 並行

| researcher | 対象 | 所要時間 |
|-----------|------|---------|
| researcher-chatgpt | value-chatgpt-20260326.md の7軸分析 | ~180s |
| researcher-chatgptpro | value-chatgptpro-20260327.md の7軸分析 | ~62s |
| researcher-codex | value-codex-20260327.md の7軸分析 | ~49s |

**比較軸（7軸）**: 構造化、網羅性、正確性、独自性、接続性、深掘り価値、簡潔さ

### B-2. Phase 2 REVIEW — critic

| 項目 | 結果 |
|------|------|
| 合意度 | CONSENSUS-3 |
| 主要指摘 | 正確性と検証可能性の混同(major)、接続性の評価基準不一致(major)、簡潔さの基準不統一(minor) |
| 推奨 | proceed |

**critic の指摘による軸の再設計**:
- 「正確性」→「内容正確性」+「検証可能性」に分離
- 「接続性」→「構造的接続」+「内容的接続」に分離
- 結果: 7軸 → 9軸に拡張

### B-3. Phase 5 EXECUTE — 比較レポート執筆

Main が critic のフィードバックを反映し、9軸 × 3モデルの比較表 + モデル別プロファイル + 使い分け推奨を執筆。

### B-4. Phase 6 REVIEW — 最終チェック

| 項目 | 結果 |
|------|------|
| 合意度 | CONSENSUS-3 |
| critical/major | なし |
| minor | 4件（評価スケール凡例、深掘り候補数え方、世代差注記、Pro領域数確認） |
| 推奨 | accept |

### B-5. Phase 7 CLOSE — minor 反映

- 評価スケール凡例（A/B/C/D）を追加
- モデル別プロファイルに世代差注記を追加

### B-結論

3レポートは相補的。用途別使い分けが有効:
- 構造化された概観 → ChatGPT
- 横断論点の言語化 → Pro
- 検証可能な出典付き簡潔な整理 → Codex

---

## Phase C: 統合調査（3レポートの強み統合・弱点補完）

| 項目 | 内容 |
|------|------|
| 使用ワークフロー | agent-team-workflow (cs#188) v1.1 |
| 実行モデル | Claude Opus 4.6 (Main) + Claude Sonnet (researcher/critic agents) |
| 実行日 | 2026-03-27 |
| 目的 | 3レポートの強みをそのまま活かし、弱点を調査で補完した統合レポートの作成 |

### C-0. Step 0 — alignment（共有辞書）

```yaml
strengths_to_keep:
  ChatGPT: 構造化（表・図）、網羅性（15領域）、深掘り候補（10件）
  Pro: 横断論点の言語化、日英翻訳ズレ分析、認知科学寄りの視点
  Codex: 簡潔さ、URL付き出典、PD文脈への明示的接続
weaknesses_to_fix:
  - 検証可能性: citeturn/出典ゼロ → URL付き出典に置換
  - PD接続: Doing/Being・Love駆動開発・欠損駆動思考との接続がゼロ
  - 独自フレームワークの根拠: 「束をほどく」5次元・四層整理の出自確認
  - 網羅性の穴: Schwartz価値理論、Bourdieu文化資本、Graeber価値論が未言及
```

### C-1. Phase 1 SURVEY — researcher ×3 並行（バックグラウンド）

| researcher | 調査内容 | 状態 | 所要時間 | 主な成果 |
|-----------|---------|------|---------|---------|
| researcher-sources | 主要主張の URL 付き出典収集・V1/V2 検証 | 完了 | ~464s + ~555s (2回実行) | 27件の URL 付き出典、25件 high / 2件 medium |
| researcher-pd-connection | PD 中心概念との接続調査 | 完了 | ~726s | 接続点11件。Being側の空白、生存-信頼座標系の接続、value.md作成中を発見 |
| researcher-coverage | 網羅性の穴埋め（Schwartz, Bourdieu, Graeber）+ フレームワーク出自確認 | 実行中 | — | — |

#### researcher-sources の主な成果

出典を収集した領域:
1. 哲学（SEP Value Theory, Intrinsic vs Extrinsic Value, Value Pluralism）
2. 経済学（使用価値/交換価値, 限界効用, プロスペクト理論原著PDF）
3. 社会学（Schwartz Basic Human Values概説, Bourdieu文化資本原典PDF）
4. 人類学（Graeber価値論, Mauss贈与論原典PDF）
5. AI/VSD（VSD Lab公式, CIRL arXiv論文, AI alignment概説）
6. 環境（IPBES Values Assessment, TEEB）
7. 教育（OECD Learning Compass 2030）
8. 認知科学（報酬予測誤差, Active Inference MIT Press OA書籍）
9. 日本語辞書（コトバンク「価値」「価値観」「値打ち」）
10. その他（Cambridge Dictionary, Baudrillard sign value, 語源辞典）

フレームワーク出自確認:
- ChatGPTの「束をほどく」5次元×操作: 既存の単一フレームワークに直接対応せず。部分的に Spranger, Baudrillard, IPBES, VSD が対応。**独自構成と判定**
- Proの四層整理: 各層は既存概念だが統合は独自。第4層「生きられた重要性」に神経現象学を置いた点が独自

#### researcher-pd-connection の主な成果

| 接続点 | 内容 | 所在 |
|--------|------|------|
| Doing/行動原理 | 「多様な価値観を受容れる」が第一項 | pjdhiro pd/project-design.md L65 |
| Being/空白 | Being側に「価値」の記述がない — 理論的空白 | pjdhiro pd/project-design.md L109 |
| 用語定義 | プロジェクトの目的=「価値創出」、問題は「価値基準」で決まる | pjdhiro pd/word/word-project.md L19,25 |
| Love駆動開発 | 価値は暗黙的に含まれるが明示的接続なし | pjdhiro pd/project-design.md L24 |
| 欠損駆動思考/入力 | 「無価値感」が入力値の一つ | pjdhiro pd/thinking/thinking-kesson.md L51 |
| 欠損駆動思考/生存-信頼 | 生存-信頼座標系が価値評価の基底メカニズムとして機能 | kesson-driven-thinking core-definitions.md L157 |
| 感情処理 | 「価値」は処理段階の一要素（ただし value.md は作成中） | pjdhiro pd/emotional-processing.md L36 |
| trust | 信頼=「価値評価・社会予測・誤差学習」の結節点 | trust-codex-20260326.md L81 |
| design-thinking | "human values → user needs" 圧縮の系譜 | design-thinking深掘りレポート |
| LLM比較 | PD独自の価値分類フレーム構築の可能性 | value-llm-comparison.md L150 |
| value.md | 「作成中」— 成果実装の機会 | pjdhiro pd/emotional-processing/value.md |

#### researcher-coverage の主な成果

| テーマ | 要点 | URL |
|--------|------|-----|
| Schwartz Basic Human Values | 10基本価値の円環構造。4高次元（Openness-Conservation, Self-Enhancement-Self-Transcendence） | scholarworks.gvsu.edu, i2insights.org |
| Bourdieu 資本理論 | 4形態（経済/文化/社会/象徴）、資本間転換、場とハビトゥス | marxists.org, home.iitk.ac.in |
| Graeber 人類学的価値論 | 3伝統（社会学的/経済学的/言語学的）の統合。「価値 = 行動が社会的全体に組み込まれることで意味を持つようになる仕方」 | davidgraeber.org, theanarchistlibrary.org |
| 「束をほどく」出自 | Boltanski & Thevenot の6正当化レジームと構造的類似。直接の出自ではなく独自合成 | press.princeton.edu |
| 四層整理の出自 | O'Neill/IPBES の3分類（instrumental/intrinsic/relational）を拡張 + 現象学的「生きられた重要性」 | philpapers.org, ipbes.net |

insights:
- 3レポートとも Schwartz/Bourdieu/Graeber への言及がない = 心理学・社会学・人類学の最重要価値理論の欠落
- Graeber「価値 = 行動の意味」は Doing/Being 接続の最有望な理論的資源
- Boltanski & Thevenot を正式参照すれば「束をほどく」に学術的基盤を付与可能

### C-2. Phase 2 REVIEW

（critic 実行中 — 完了次第追記）

### C-3〜C-7: Phase 3以降

（Phase 2 完了後に実行 — 完了次第追記）

---

## Phase D: prompt 準拠 deep research 追試

| 項目 | 内容 |
|------|------|
| ファイル | `value-deep-research-codex-20260327.md` |
| 使用モデル | GPT-5 (Codex) |
| 実行日 | 2026-03-27 |
| 入力 | `knowledge/research/value/PROMPT.md` |
| 目的 | 2026-03-27 作成の統一プロンプトに合わせ、A-E 形式・広域見取り図・URL 付き出典を備えた Codex 版レポートを別ファイルとして残す |

### D-1. 実施内容

- 既存の `value-codex-20260327.md` は LLM 比較資産として保持し、上書きせず別ファイルを追加
- 既存の `value-integrated.md`, `research.md`, `README.md` を参照して命名・位置づけを確認
- 主要ソースを再収集し、次を優先:
  - 辞典: Kotobank, Cambridge Dictionary, Etymonline
  - 哲学: SEP, Britannica
  - 経済学: Smith, Marx, Jevons, Prospect Theory
  - 社会科学: Schwartz, Bourdieu, Mauss, Graeber
  - AI/HCI: VSD, CIRL
  - 認知/神経: Scholarpedia, Active Inference, Varela 入口
  - 環境/教育/法: IPBES, TEEB, OECD, UDHR
- 直接の本文確認が難しい標準文献は Google Scholar 検索リンクを付与

### D-2. 出力上の判断

- 「価値」を単一理論に統合せず、領域ごとの使い方を並置
- 神経現象学については、標準術語としての「価値」が定着していない点を明記
- 日本語と英語のズレを B/D に分散させず、B に集中して整理
- deep research の保存先は `knowledge/research/value/` とした

---

## 調査設計の記録

### 使用ツール・モデルの一覧

| 段階 | ツール/モデル | 用途 |
|------|-------------|------|
| 一次調査 | GPT-5.2 Thinking | 「価値とは」の概観レポート生成 |
| 一次調査 | GPT-5.4 Pro (Deep Research) | 同上（別モデルでの比較） |
| 一次調査 | GPT-5 (Codex) | 同上（別モデルでの比較） |
| 比較・統合 | Claude Opus 4.6 | Main（orchestrator、レポート執筆） |
| 比較・統合 | Claude Sonnet (Agent) | researcher（調査）、critic（検証） |
| 出典検証 | WebSearch / WebFetch | URL 実在確認（V1）、内容照合（V2） |
| リポ内調査 | Glob / Grep / Read | PD 概念との接続調査 |

### 操作の分類

| 操作 | 説明 | 実施フェーズ |
|------|------|------------|
| 収集 | 外部 LLM にテーマを投げてレポートを取得 | Phase A |
| 比較 | 複数レポートを統一軸で評価・ランク付け | Phase B |
| 検証 (V1) | 出典 URL の実在確認 | Phase B-1, C-1 |
| 検証 (V2) | 主張と出典内容の照合 | Phase B-1, C-1 |
| 批判的検証 (V3-V6) | 反論構築、バイアス検出、論理チェック | Phase B-2, B-4 |
| 接続 | PD 既存概念との関係を調査・記述 | Phase C-1 |
| 補完 | 既存レポートの網羅性の穴を外部調査で埋める | Phase C-1 |
| 統合 | 複数ソースの最良部分を1つのレポートにまとめる | Phase C-5 (予定) |

### 品質保証のフロー

```
一次レポート(3モデル)
  → researcher ×3 で7軸分析
  → critic で REVIEW (CONSENSUS-3)
  → 軸の再設計(7→9軸)
  → 比較レポート執筆
  → critic で最終 REVIEW (accept)
  → 統合調査開始
  → researcher ×3 で弱点補完調査
  → (以降: critic REVIEW → PLAN → EXECUTE → REVIEW → CLOSE)
```
