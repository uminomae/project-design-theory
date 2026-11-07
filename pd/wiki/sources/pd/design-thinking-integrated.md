---
title: "デザイン思考 — PD 統合分析"
description: "PD 独自のデザイン思考論。Johansson-Sköldberg 等の 3 層区分（designerly thinking / Stanford-IDEO / business DT）、abduction と framing の関係、論理的思考との補完性、形骸化の 6 パターンと残る有効核を整理した二次文献レビュー。concepts/デザイン思考（PD）を支える主要ソース。"
aliases: ["デザイン思考の分析", "Design thinking integrated analysis"]
tags: [source, pd-integrated, "統合分析", design-thinking]
source:
  repo: "project-design"
  path: "knowledge/research/design-thinking/design-thinking-integrated.md"
  related_issue: "#35"
compiled: "2026-04-19"
status: 暫定
review_state: 未レビュー
related_concepts: ["デザイン思考（PD）", 欠損駆動思考, 抱持, 創造の5段階モデル, Love 駆動開発]
---

# デザイン思考 — PD 統合分析

> **高校生向けのやさしい解説**
>
> 「デザイン思考」という言葉をワークショップや本で聞いたことがあるかもしれません。でも実は「デザイン思考」は 3 つのまったく違うものが混在しています — (1) 設計者がどう考えるかを研究する学問、(2) スタンフォード・IDEO が広めた教育メソッド、(3) 企業向けのイノベーション手法パッケージ。核心は「何を問題と見なすか（framing）」と「まだ存在しないが望ましいもの」を構想する推論（abduction）にあり、5 段階プロセスは導入用のレシピに過ぎません。「論理的思考と対立する」のではなく、演繹・帰納を補う仮説形成と問題再定義の実践として理解するのが最も正確です。

## 概要

本統合分析は、Codex (GPT-5)、ChatGPT (GPT-4o Deep Research)、ChatGPT Pro (GPT-5.4 Pro) による 3 本の独立調査レポートを入力として統合した二次文献レビューである。デザイン思考は単一の方法論ではなく少なくとも 3 つの層（designerly thinking / Stanford-IDEO method / business design thinking）が混在している（Johansson-Sköldberg et al. 2013）。核心は abduction・framing・問題設定の往還にあり、5 段階プロセスは導入用の recipe であって本質ではない。論理的思考の対立物ではなく、deduction・induction を補う仮説形成と問題再定義の実践として理解するのが最も正確である。形骸化は工程化・共感儀式化・実装欠落で生じるが、問題再定義・仮説形成・試作による学習という有効核は残る、というのが本分析の結論である。

## 主要概念

**デザイン思考の 3 層（Johansson-Sköldberg et al. 2013）**

| 層 | 内容 | 代表的論者 | 時期 |
|---|---|---|---|
| Designerly thinking | 設計者の認知・実践・探究様式の研究。独自の知の領域としての設計 | Cross, Schön, Lawson, Rowe | 1970s-1990s |
| Stanford-IDEO method | Visual thinking, needfinding, prototyping を教育可能な方法として体系化 | McKim, Faste, Kelley, Brown | 1960s-2000s |
| Business design thinking | 組織導入用のイノベーション手法パッケージ | Brown (HBR), Martin, d.school Bootleg | 2000s- |

3 層を区別しないと議論が混線する。特に「design thinking 批判」が批判している対象がどの層かを見極めることが重要。

**系譜（1969-2020s）**

- **1969 Simon** *The Sciences of the Artificial* — 設計を人工物の合理的探究として一般化
- **1972 McKim** — visual thinking を Stanford で教育導入
- **1973 Rittel & Webber** "Dilemmas in a General Theory of Planning" — wicked problems 概念
- **1979 Lawson** 建築学生 vs 科学系学生の実験 — 設計者の solution-focused strategy を実証
- **1982 Cross** "Designerly Ways of Knowing" — design を「第三の教育領域」として措定
- **1983 Schön** *The Reflective Practitioner* — reflection-in-action と状況との対話
- **1987 Rowe** *Design Thinking* — design thinking の語の早期使用
- **1992 Buchanan** wicked problems を design thinking に接続
- **2008 Brown** HBR "Design Thinking" — 経営層向けの普及
- **2011 Dorst** "The Core of Design Thinking" — framing / frame creation を核心に
- **2011 Kimbell** "Rethinking Design Thinking" — generalized DT 批判、situated practices へ
- **2013 Johansson-Sköldberg et al.** — 3 層区分の定式化
- **2020s** d.school の自己批判 — 「五つの六角形は THE process ではなく recipe にすぎない」

**論理的思考との関係**

| 推論形式 | 方向 | 目的 | デザイン思考との関係 |
|---|---|---|---|
| Deduction（演繹） | 既知ルール → 個別結論 | 一貫性・予測の確保 | 技術要件定義・整合性検証に使用 |
| Induction（帰納） | 個別事例 → 一般化・評価 | 検証・傾向把握 | ユーザーテスト・観察データによる仮説更新 |
| Abduction（アブダクション） | 驚き・違和感 → 説明仮説 | 新規仮説の形成 | design thinking の中核。「まだ存在しないが望ましいもの」の生成的仮説を含む |
| Design framing | 状況 → 枠組みの再構成 | 問題・価値・評価軸の設定 | abduction を拡張した設計固有の実践。wicked problems への対処に不可欠 |

Design framing は Peirce の abduction を拡張した設計実践上の呼び名として理解できるが、完全同一視は言い過ぎ（Dorst 2011）。framing は価値判断・境界設定・評価軸の設計を含み、外化（プロトタイプ）を通じて前進する点で言語命題の推論に還元しにくい。デザイン思考は論理的思考の対立物ではなく補完物である。対抗していたのは「分析だけで足りる」という狭い合理主義であって、論理そのものではない。

**形骸化の 6 パターン**

| # | パターン | 何が失われるか | 発生メカニズム |
|---|---|---|---|
| 1 | 5 段階プロセスへの矮小化 | framing の往復、問題の組み替え | mode/recipe を linear stage-gate として運用 |
| 2 | 共感ワークショップ化 | 深い needfinding、社会・制度理解 | empathize が短時間インタビューに縮退 |
| 3 | ポストイット・ブレスト化 | 判断、統合、framing の質 | アイデア数と発散が重視される |
| 4 | 実装との断絶 | 運用・評価・組織変革 | ideation/PoC で止まる |
| 5 | 組織文化との不整合（innovation theater） | 権限配分、KPI、意思決定構造の変更 | ワークショップのみで組織構造は不変（Blank 2019） |
| 6 | 評価不能な万能語化 | 概念の境界、成功/失敗条件 | 何でも含む曖昧な善語に拡散 |

**残る有効核と失われた本質**

| 有効核（残る） | 失われた本質（形骸化で消える） |
|---|---|
| 問題再定義: 何を問題とみなすかを組み替える | 素材との対話: スケッチ・模型・状況の back-talk から学ぶ reflective conversation |
| 仮説形成: まだ存在しないが望ましいものの生成的仮説 | 知覚訓練: visual thinking、身体的外化、multiple representational language |
| 試作による学習: プロトタイプを知識生成の実験装置として使う | 長期的判断力: 文脈依存の situated judgment、価値葛藤の統合、曖昧さへの耐性 |

## 主要論争（5 点）

1. **デザイン思考は方法か、能力か、態度か** — d.school の近年の自己批判は process から abilities への転換を提唱
2. **Abduction と design framing は同一か** — Dorst は framing を abduction の設計的拡張として位置づけるが、framing は価値判断・境界設定・外化を含むため Peirce 的 abduction より広い
3. **形骸化はデザイン思考の本質的欠陥か、普及過程の歪みか** — designerly thinking と management DT の分断（Johansson-Sköldberg et al.）
4. **HCD はデザイン思考の全体か一部か** — IDEO は HCD を「背骨」、DT をそれを含む broader approach と整理
5. **Wicked problems の射程（社会計画 vs デザイン一般）** — 元来は Rittel & Webber の社会計画論。あらゆる設計問題が wicked なわけではない

## 未解決の問い

- Designerly thinking の核心は教育可能か — abilities として教育可能な範囲と、長期の実践でしか育たない範囲の境界
- 形骸化を防ぐ制度的条件は何か — 評価設計・外化と意思決定の接続・反復の学習の制度化
- Abduction のデザイン固有性は何か — 科学の abduction（既存世界の説明仮説）vs design の abduction（まだ存在しないが望ましいものの生成的仮説）
- Framing の訳語問題 — 日本語に定訳がない

## 未調査だが重要な領域

- Alexander（パターンランゲージ） — 設計知識の構造化と共有の先駆（cs D27 で別途調査）
- Papanek（社会的デザイン責任）
- 北欧参加型デザイン（Participatory Design）
- Verganti（meaning innovation）
- Krippendorff（意味論的転回）
- Double Diamond（Design Council）

## 方法

3 本のレポート（Codex/GPT-5 を primary source、GPT-5.4 Pro を secondary、GPT-5.2 Thinking の Deep Research を idea source）を統合。いずれも二次文献中心の調査であり、原著の全文確認は限定的。Cross 2023 および Bromage 2025 は実在未確認のため使用していない。

## プロジェクトデザインとの関連

本統合分析は `concepts/デザイン思考（PD）` ページを支える主要ソースのひとつ。PD は「デザイン思考（PD）」として独自の 3 視点（①欠損駆動・②保持論点・③ Love 駆動）を打ち出しており、本分析の 3 層区分と系譜は PD 独自視点と通説を明確に分けるための参照枠として機能する。具体的には:

- PD の「欠損駆動思考 D1（棄却される誤差を問いとして拾う態度）」は、Dorst の Abduction-2（WHAT と HOW を同時に構想する設計固有 abduction）の先行条件として位置づけられる
- PD の「抱持」（D3）は、Schön の reflection-in-action と構造的に類似するが、主語が異なる（R-i-A は外部環境との対話、D3 は内部の意味更新循環）
- PD は形骸化の 6 パターンを「D1 反転の 2 レベル（個人態度 + 組織構造）」として再記述する

詳細は `sources/pd/kesson-bridge` の §3「デザイン思考 → D1・D3」および補足 A「Dorst 2011 frame creation — D1 との接続精査」を参照。

## 書誌情報

- 作成: 2026-03-27, Claude (agent-team-workflow, cs#188 プロトコル)
- 関連 Issue: [project-design#35](https://github.com/uminomae/project-design/issues/35)
- 入力レポート:
  - `design_thinking_gpt-deep-research-report.md` (GPT-4o Deep Research)
  - `design_thinking_gptpro_report.md` (GPT-5.4 Pro)
  - `design-thinking-deep-research--codex-20260326.md` (Codex GPT-5)
- 二次文献中心。原著の全文確認は限定的

## 主要一次文献（sources/design-thinking/ に個別ページあり）

- Cross (1982) "Designerly Ways of Knowing" — `sources/design-thinking/Cross_1982_designerly-ways-of-knowing.md`
- Schön (1983) *The Reflective Practitioner* — `sources/design-thinking/Schon_1983_reflective-practitioner.md`
- Dorst (2011) "The Core of Design Thinking" — `sources/design-thinking/Dorst_2011_core-of-design-thinking.md`
- Rittel & Webber (1973) "Wicked Problems" — `sources/design-thinking/Rittel-Webber_1973_wicked-problems.md`
- Johansson-Sköldberg et al. (2013) "Design Thinking" — `sources/design-thinking/Johansson-Skoldberg_2013_design-thinking-layers.md`

その他の参照: Simon (1969) *Sciences of the Artificial*; Lawson (1979); Rowe (1987); Buchanan (1992); Brown (2008) HBR; Dunne & Martin (2006); Kimbell (2011); Elsbach & Stigliani (2018); Blank (2019); SEP "Peirce on Abduction"; Stanford History of Design; d.school Bootleg; IDEO.

## 出典メモ

- 一次入力: `knowledge/research/design-thinking/design-thinking-integrated.md`（168 行、2026-03-27）
- 本ページは統合分析を wiki sources/pd/ の読者向け形式に再編（pd#76、2026-04-19）
- 関連: PD のデザイン思考論は concepts/デザイン思考（PD）を参照。欠損駆動思考との接続は `sources/pd/kesson-bridge` を参照
