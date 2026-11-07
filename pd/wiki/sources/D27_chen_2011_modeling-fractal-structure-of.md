---
title: "都市規模分布のフラクタル構造 — 相関関数によるモデル化"
description: "Chen (2011) PLOS ONE 論文。都市規模分布の Zipf 法則と Pareto 法則を、外的複雑性（都市数の増加）と内的複雑性（個々の都市規模の成長）の二つの対立する効果の競合として相関関数で統一的にモデル化した。"
aliases: ["Modeling Fractal Structure of City-Size Distributions", "Zipf law", "Pareto"]
tags: [source, "D27", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D27/D27-S16_chen-2011.md"
  manifest_id: "D27-S16"
  oa_url: "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0024791&type=printable"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 都市規模分布のフラクタル構造

> **高校生向けのやさしい解説**
>
> 世界の都市の人口を大きい順に並べると、奇妙なことに「1 位の都市は 2 位の倍くらい、3 位はその 1/3 くらい」というシンプルな規則（Zipf の法則）に従います。Chen は、これを「都市数を増やす効果（Pareto）」と「個々の都市を大きくする効果（Zipf）」という二つの対立する力の綱引きとして説明し、二つが釣り合うとスケーリング指数が 1 に近づくと示しました。フラクタルな都市進化モデル。

## 概要

都市規模分布における Zipf の法則と Pareto の法則の関係を、相関関数を用いてフラクタル構造として統一的に説明する論文。著者は Zipf の法則と Pareto の法則が数学的に相互変換可能だが、都市発展の異なるプロセス（外的複雑性の増大 vs 内的複雑性の成長）を表すと主張する。スケーリング分析と多重フラクタルスペクトルを用いて Pareto の指数パラメータの合理的区間を (0.5, 1) と導出し、二重競合仮説を提案している。米国都市データを用いた経験的検証も行われている。

## 主要概念

**都市発展は二つの対立する効果の競合**

> "The process of urban evolution falls into two effects: one is the Pareto effect indicating city number increase (external complexity), and the other the Zipf effect indicating city size growth (internal complexity)." (p.1, Abstract)

都市システムの進化は、都市数の増加（Pareto 効果）と個々の都市の規模拡大（Zipf 効果）という二つの対立するプロセスの競合。

**二つの効果が均衡するとスケーリング指数は 1 に近づく**

> "Because of struggle of the two effects, the scaling exponent varies from 0.5 to 2; but if the two effects reach equilibrium with each other, the scaling exponent approaches 1." (p.1, Abstract)

均衡状態でスケーリング指数が 1 に収束する力学的構造を明示。

**フラクタル次元による特徴づけ**

> "the proper fractal dimension of city-size distributions comes between 0.5 and 1, namely, D_0 = 1/d_0 = 1." (p.4)

都市規模分布の適切なフラクタル次元は 0.5 から 1 の間にあり、Pareto・Zipf 双方の次元スペクトルが正常であるためには指数 1 が必要。

## 方法

Zipf 法則と Pareto 法則に基づく離散・連続相関関数の理論的構築。スケーリング分析と多重フラクタルスペクトルによる Pareto 指数の合理的区間の導出。米国 513 都市（2000 年 Urbanized Area 人口データ）を用いた階層的相関分析の経験的検証。最小二乗法と非線形フィッティングの比較。

## プロジェクトデザインとの関連

「拡張と深化の二つの力の綱引きから安定した分布が生まれる」という構図は、project-design における「広げることと深めることの両立」という運営論的観点に響く。Jiang (D27-S13) の living structure と並ぶ「都市の数学的構造」研究の参照論文。

## 書誌情報

- 著者: Yanguang Chen
- 年: 2011
- 出典: *PLOS ONE* 6(9), e24791
- access_status: url-verified
- **DOI**: [10.1371/journal.pone.0024791](https://doi.org/10.1371/journal.pone.0024791)
- **オープンアクセス**: [PLOS ONE PDF](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0024791&type=printable)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D27/D27-S16_chen-2011.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D27/D27-S16_chen-2011.md)（manifest_id: `D27-S16`）
- **cs 精読ノート**: [knowledge/source-notes/D27/D27-S16_chen-2011.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D27/D27-S16_chen-2011.md)
- **この wiki ページ（pd）**: [wiki/sources/D27_chen_2011_modeling-fractal-structure-of.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D27_chen_2011_modeling-fractal-structure-of.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D27/D27-S16_chen-2011.md`（2026-04-11、Claude Opus 4.6, WebFetch → Read PDF 全 9 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-4）
