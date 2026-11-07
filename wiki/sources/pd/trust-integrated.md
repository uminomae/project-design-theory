---
title: "信頼 — PD 統合分析"
description: "PD 独自の信頼論。trust / confidence / reliance / faith の翻訳ズレ、14分野の定義対比、trust と trustworthiness の非対称性、distrust・mistrust・cynicism の区別を多層的に整理した二次文献レビュー。concepts/信頼 を支える主要ソース。"
aliases: ["信頼の多層分析", "Trust integrated analysis"]
tags: [source, pd-integrated, "統合分析", trust]
source:
  repo: "project-design"
  path: "knowledge/research/trust/trust-integrated.md"
  related_issue: "#34"
compiled: "2026-04-19"
status: 暫定
review_state: 未レビュー
related_concepts: [信頼, 価値, 欠損駆動思考, 抱持, 情動の構成, 測定設計原則]
---

# 信頼 — PD 統合分析

> **高校生向けのやさしい解説**
>
> 「信頼」という言葉は一見わかりやすそうに見えて、実は国・分野・文脈で意味がまったく違います。心理学では「期待」、社会学では「社会の複雑さを減らす装置」、哲学では「傷つきうる状態を引き受けること」、AI 研究では「適切に依存できる較正された状態」。日本語の「信頼」は英語の trust, confidence, reliance, faith などに分岐し、翻訳時に混線します。このページは 14 分野の定義と 8 つの主要論争を俯瞰し、「信頼とは何か」を問うときに何を先に確定すべきかを整理した統合分析です。

## 概要

本統合分析は、ChatGPT (GPT-4o)、ChatGPT Pro (GPT-5.4 Pro)、Codex による 3 本の独立調査レポートを入力として Claude が統合・再構成した二次文献レビューである。信頼は単一概念ではなく複合概念であり、分野ごとに感情・態度・期待・関係の性質・制度的資本・行動戦略・認識論的条件・経験構造として扱われる。共通核は「脆弱性」「期待」「依存」「予測不能性」「監視の限界」「修復可能性」にある。日英間の翻訳ズレ（trust / confidence / reliance / faith ↔ 信頼 / 信用 / 安心）が定義混線の主因となる。信頼を定義するには「誰が、何を、どの水準で、何として信頼と呼んでいるか」を先に確定する必要があるというのが本分析の結論である。

## 主要概念

**信頼の8層構造**

信頼を単一定義で捉えず、8 つの「何として扱うか」に分解する:

| 層 | 信頼を何として扱うか | 代表分野 | 英語対応 |
|---|---|---|---|
| 感情 | 安心・好意・身体的弛緩を伴う情動的結合 | 臨床心理学、愛着理論 | affective trust |
| 期待 | 相手が善意・能力をもって行動するという見込み | 社会心理学、組織論 | expectation, belief |
| 関係の性質 | 相互行為に埋め込まれた安定性・安全感 | 社会学、人類学 | relational trust |
| 制度的資本 | 社会秩序・複雑性縮減を支える装置 | 社会学、政治学 | institutional trust, social capital |
| 行動戦略 | 不確実性下で相手に資源を委ねる選択 | 経済学、神経経済学 | trust behavior, investment |
| 認識論的条件 | 他者の証言・情報を受容可能にする前提 | 哲学、臨床(epistemic trust) | epistemic trust |
| 技術較正 | 自動化・AI への依存度を調整する心理状態 | HCI、AI 研究 | calibrated trust |
| 経験構造 | 「警戒がほどける」「身を預けられる」lived experience | 神経現象学 | lived trust |

これらは互いに置換不可能で、混在すると測定・政策議論が混線する。

**日英翻訳ズレ**

| 英語 | 主な日本語対応 | ズレのポイント |
|---|---|---|
| trust | 信頼 | 最も広義。態度・期待・関係を含む |
| confidence | 信頼、確信 | Luhmann: confidence = 代替なき依存（制度的）、trust = リスクを意識した委託 |
| reliance | 依拠、依存 | 哲学: trust は reliance + 裏切り可能性への認識 |
| faith | 信仰、信念 | 証拠を超えた確信。宗教的文脈で前景化 |
| trustworthiness | 信頼に値すること | trustee 側の性質。trust（trustor 側）と混同されやすい |
| 信用 (JP) | credit, reliability | 実績・能力に基づく評価。山岸: 信用 = 情報に基づく判断 |
| 安心 (JP) | assurance, security | 山岸: 安心 = 制度的保証による不確実性の除去。trust とは別概念 |

山岸(1998)の核心的区別: **安心(assurance)** は制度や監視により裏切りが不可能な状態。**信頼(trust)** は裏切りの可能性がある中で相手の善意を期待すること。両者は質的に異なる。

Luhmann(1979)の区別: **confidence** は代替選択肢を意識しない日常的依存。**trust** はリスクを認識した上での能動的委託。

**14 分野の定義と測定法**

社会心理・発達・臨床・神経科学・愛着・社会学・政治学・経済学・哲学・人類学・組織論・HCI/AI・公衆衛生・法学・神経現象学の 14 分野で「信頼を何として扱うか」「代表理論」「主要測定法」が系統的に異なる。測定法だけ見ても質問紙 / trust game / 神経画像 / 面接 / 微視的現象学と多様で、得られる「信頼」の姿も測定法依存。

**trust と trustworthiness の非対称性**

trust は trustor（信頼する側）の態度、trustworthiness は trustee（信頼される側）の能力・善意・誠実性。多くの測定上の混乱はこの混同から生じる。AI 研究・医療・組織論で特に重要。

**distrust / mistrust / cynicism は trust の単純な反転ではない**

- distrust: 特定対象への積極的な否定的期待。同一関係内で trust と併存しうる（Lewicki et al. 1998）
- mistrust: より拡散的な猜疑・警戒のスタンス。人類学では正当な社会的構えとして扱う
- cynicism: 制度的冷笑。低 trust は歴史的不正義への合理的応答でありうる（Levi & Stoker 2000）

## 主要論争（8 点）

1. **感情か、信念か、期待か、関係か** — 信頼の存在論的カテゴリーは分野により異なり、一つに還元するより「どの水準の現象を問うか」を先に確定すべき（SEP; Rousseau et al. 1998）
2. **信頼とリスク** — 経済学では明示的選択問題、哲学では裏切り可能性と規範性、臨床では身体的・情緒的開放
3. **信頼と脆弱性** — Baier (1986) 以降、信頼を vulnerability から切り離せないとする議論は強い
4. **信頼と裏切り・修復** — 裏切りは trust 特有の損傷で、mere reliance の失敗とは質的に異なる（Mayer et al. 2007; Platt & Freyd 2015）
5. **信頼と制度・権力** — 低信頼は歴史的不正義への合理的応答でありうる
6. **trust と distrust の関係** — distrust は trust のゼロ点ではない
7. **trust と trustworthiness の非対称性** — trustor 側と trustee 側は別概念
8. **人間への信頼と AI/自動化への信頼** — 完全同一でも完全別物でもなく、部分重複モデルが妥当（Lee & See 2004; Glikson & Woolley 2020）

## 未解決の問い

- 信頼は状態か、特性か、関係か、過程か
- 信頼の形成と修復は同じメカニズムか —「もう一度警戒を解けるか」の固有の閾値問題を含む可能性
- epistemic trust は対人信頼と同じ構造か
- 文化による信頼概念の差異（高信頼社会 vs 低信頼社会の二分法は粗い）
- 神経現象学で「信頼の lived experience」をどう研究できるか

## 方法

3 つの外部 LLM レポート（GPT-4o, GPT-5.4 Pro, Codex GPT-5）を入力とする二次文献統合レビュー。一次文献の直接査読は行っていない。agent-team-workflow Phase 1-2（researcher 3 並列 × 2 ラウンド + critic 2 ラウンド）による検証を経ている。

## プロジェクトデザインとの関連

本統合分析は `concepts/信頼` ページを支える主要ソースのひとつ。PD は信頼を外部理論の紹介としてではなく、**誤差のルーティング問題**（生存軸と信頼軸の配分）として独自に再編成する。本分析の 8 層構造・翻訳ズレ・14 分野対比は、PD の信頼論が「どの分野のどの水準の話をしているか」を明確にするための参照枠として機能する。具体的には:

- PD の「誤差を問いとして拾う態度」（欠損駆動思考 D1）は、epistemic trust（認識論的条件）と接続する
- PD の「抱持」（欠損駆動思考 D3）の成立条件は、Baier の vulnerability account および山岸の「信頼の成立条件」と共鳴する
- 信頼の「修復」議論は、PD の「保持論点の扱い」と構造的に類似する

詳細な接続は `kesson-bridge`（欠損駆動思考との接続分析）を参照。

## 書誌情報

- 作成: 2026-03-27, Claude (agent-team-workflow, cs#188 プロトコル)
- 関連 Issue: [project-design#34](https://github.com/uminomae/project-design/issues/34)
- 入力レポート:
  - `trust-chatgpt-20260326.md` (GPT-4o)
  - `trust-chatgpt-pro-20260326.md` (GPT-5.4 Pro)
  - `trust-codex-20260326.md` (Codex GPT-5)
- 二次文献中心。一次文献の直接査読は未実施

## 主要一次文献（sources/trust/ に個別ページあり）

- Mayer, Davis & Schoorman (1995) "An Integrative Model of Organizational Trust" — `sources/trust/Mayer_1995_integrative-model.md`
- Luhmann (1979) *Trust and Power* — `sources/trust/Luhmann_1979_trust-and-power.md`
- Baier (1986) "Trust and Antitrust" — `sources/trust/Baier_1986_trust-and-antitrust.md`
- 山岸俊男 (1998)『信頼の構造』 — `sources/trust/Yamagishi_1998_trust-structure.md`
- Rousseau et al. (1998) "Not So Different After All" — `sources/trust/Rousseau_1998_not-so-different.md`

その他の参照: Berg et al. (1995) trust game; Lee & See (2004) automation trust; SEP "Trust"; Gambetta (1988); Hardin (2002); Schilke et al. (2021) AROS; Levi & Stoker (2000); Hoff & Bashir (2015); McAllister (1995); Lewicki et al. (1998); Glikson & Woolley (2020); Petitmengin (2006); Li et al. (2023) epistemic trust review; Bohnet & Zeckhauser (2004); King-Casas et al. (2005).

## 出典メモ

- 一次入力: `knowledge/research/trust/trust-integrated.md`（175 行、2026-03-27）
- 本ページは統合分析を wiki sources/pd/ の読者向け形式に再編（pd#76、2026-04-19）
- 関連: PD の信頼論は concepts/信頼 を参照。欠損駆動思考との接続は `sources/pd/kesson-bridge` を参照
