---
title: "経済複雑性の構成要素 — Method of Reflections"
description: "Hidalgo & Hausmann (2009) PNAS 論文。国際貿易データを国-製品の二部ネットワークとして解釈し、Method of Reflections で各国の経済複雑性を定量化。所得との強い相関と将来の経済成長の予測力を示した。"
aliases: ["The Building Blocks of Economic Complexity", "Method of Reflections", "Economic Complexity Index"]
tags: [source, "D21", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D21/D21-S14_hidalgo-2009.md"
  manifest_id: "D21-S14"
  oa_url: "https://arxiv.org/pdf/0909.3890"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 経済複雑性の構成要素 — Method of Reflections

> **高校生向けのやさしい解説**
>
> 「なぜある国は豊かで、ある国は貧しいのか？」を、国の『経済的複雑性』で説明した有名な研究です。著者らは「国の能力（capabilities）はレゴのピースのようなもの。複雑な製品を作れる国ほどたくさんのピースを持っている」と捉え、貿易データから能力の多様性を逆算する方法（Method of Reflections）を開発しました。複雑性の指標が一人当たり所得とよく一致し、将来の成長まで予測できる、という強力な発見。

## 概要

本論文は、経済発展の鍵が国の「経済的複雑性」にあるとし、国際貿易データを二部ネットワークとして解釈することで、国の複雑性を定量化する手法（Method of Reflections）を提案する。各国の能力（capabilities）を「レゴのピース」に喩え、国がどの製品を輸出するかは、その国が持つ能力の組み合わせで決まると論じる。この手法で得られる複雑性の指標が一人当たり所得と強く相関し、かつ将来の経済成長を予測することを実証的に示す。

## 主要概念

**経済発展は能力の多様性と相互作用から生まれる複雑性**

> "wealth and development are related to the complexity that emerges from the interactions between the increasing number of individual activities that conform an economy" (p.3)

Adam Smith の分業論を出発点に、経済発展とは個別活動の数と相互作用から生じる複雑性の増大。

**国の生産能力は非貿易財的な能力の多様性に依存**

> "the productivity of a country resides in the diversity of its available non-tradable capabilities, and therefore, cross-country differences in income can be explained by differences in economic complexity" (p.3)

財産権、規制、インフラ、特定の労働スキルなど、輸入できない能力が現地に存在する必要があり、これが国間の所得格差を説明する。

**Method of Reflections による能力の間接測定**

> "we develop a method to characterize the structure of bipartite networks, which we call the Method of Reflections, and apply it to trade data to illustrate how it can be used to extract relevant information about the availability of capabilities in a country" (p.5)

二部ネットワーク（国-製品）の構造を反復的に分析することで、直接観察できない能力の多様性を間接的に推定する手法。

**複雑性は所得と相関し将来成長を予測**

> "Deviations from the correlation between k_c and income are good predictors of future growth, indicating that countries tend to approach the levels of income that correspond to their measured complexity" (p.11)

複雑性の指標と所得の関係からの乖離が将来の成長率を予測。国は自身の複雑性が示す所得水準に収束する傾向。

**経路依存性**

> "the evolution of M_cp exhibits strong path dependence, meaning that we can anticipate some properties a country's future new exports based on its current productive structure" (p.12)

生産構造の進化は強い経路依存性を持ち、現在の構造が未来の輸出多様化を制約する。

## 方法

国際貿易データ（COMTRADE）の国-製品二部ネットワーク化。Method of Reflections の反復計算で国の複雑性 k_c と製品の複雑性 k_p を推定。一人当たり所得との回帰分析、将来成長率の予測力検証。

## プロジェクトデザインとの関連

「観察できない能力（capabilities）を観察できる結果（製品）から逆算する」「個別ではなく『組み合わせ』が価値を生む」という観点は、project-design における「組織の見えない能力をプロジェクト成果から推定する」アプローチと並走する。Newman (D29-S14) のネットワーク科学、Coleman (D18-S11) の社会関係資本と並ぶ「目に見えない構造の定量化」群の参照論文。

## 書誌情報

- 著者: César A. Hidalgo, Ricardo Hausmann
- 年: 2009
- 出典: *PNAS* 106(26)
- access_status: url-verified
- **DOI**: [10.1073/pnas.0900943106](https://doi.org/10.1073/pnas.0900943106)
- **オープンアクセス**: [arXiv:0909.3890](https://arxiv.org/pdf/0909.3890)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D21/D21-S14_hidalgo-2009.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D21/D21-S14_hidalgo-2009.md)（manifest_id: `D21-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D21/D21-S14_hidalgo-2009.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D21/D21-S14_hidalgo-2009.md)
- **この wiki ページ（pd）**: [wiki/sources/D21_hidalgo_2009_building-blocks-of-economic.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D21_hidalgo_2009_building-blocks-of-economic.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D21/D21-S14_hidalgo-2009.md`（2026-04-11、claude-opus-4-6, WebFetch → Read PDF 全 15 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1d）
