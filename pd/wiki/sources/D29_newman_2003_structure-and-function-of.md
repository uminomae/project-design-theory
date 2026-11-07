---
title: "複雑ネットワークの構造と機能"
description: "Newman (2003) SIAM Rev 大型レビュー。インターネット・社会・生物の各種ネットワークの統計的特性（small-world effect, clustering, 次数分布のべき乗則）を整理し、Erdős-Rényi から成長モデル（preferential attachment）までの理論モデルを系統的にカバーした、ネットワーク科学の教科書的論文。"
aliases: ["The Structure and Function of Complex Networks", "Newman 2003", "scale-free network"]
tags: [source, "D29", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md"
  manifest_id: "D29-S14"
  oa_url: "https://arxiv.org/pdf/cond-mat/0303516"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 複雑ネットワークの構造と機能

> **高校生向けのやさしい解説**
>
> インターネット、人間関係、たんぱく質の相互作用、電力網——これらすべてが「ネットワーク」として分析できるとして、その共通の特徴と違いを総まとめした 90 ページの教科書的論文。「6 次の隔たり（small-world）」「友達の友達は友達である確率が高い（clustering）」「ハブが圧倒的に多くの接続を持つ（scale-free）」など、現代ネットワーク科学の主要概念を、Newman が一望のもとに整理しました。

## 概要

ネットワーク科学の代表的レビュー論文。Internet, social networks, biological networks といった経験的研究に触発され、近年（2003 年時点）の研究者は、そうしたシステムの振る舞いを理解・予測するための技法とモデルを様々に開発してきた。本論文は当該分野における主要な概念の発展をレビューするもので、small-world effect, degree distributions, clustering, network correlations, random graph models, network growth and preferential attachment の各モデル、および network 上で起こる動的プロセスを扱う。Newman はレビューの目的として「ネットワークの構造がその機能に対して持つ意味を把握する」ことを掲げ、real-world networks（social / information / technological / biological の 4 カテゴリ）の実測データの紹介、ネットワーク特性の定量的枠組、そして古典 Erdős-Rényi random graphs からスケールフリー生成モデルまでの理論モデルを系統的にカバーする。

## 主要概念

**「構造が機能に及ぼす意味」を中心問題とする**

> "The body of theory that is the primary focus of this review aims to do three things. First, it aims to find statistical properties ... Second, it aims to create models of networks that can help us to understand the meaning of these properties ... Third, it aims to predict what the behavior of networked systems will be on the basis of measured structural properties and the local rules governing individual vertices." (Sec. I, p.2)

統計的特性の定量化・生成モデルの構築・構造からの機能予測の 3 目的が骨格。

**Real-world network の 4 カテゴリ**

- **Social networks**: Milgram の small-world 実験、映画俳優共演網、科学者共著網、電子メール網、電話網、友情網等
- **Information networks**: citation networks, World Wide Web, semantic networks, peer-to-peer
- **Technological networks**: インターネット（AS level）、電力網、航空路線網、鉄道網、回路図等
- **Biological networks**: 代謝経路、タンパク質相互作用網、遺伝子調節網、食物網、神経回路等

Table II は 25 近いネットワークについて頂点数・辺数・平均次数・平均距離・次数分布指数・クラスタリング係数・次数相関を一覧化。

**Small-world effect**

> "networks are said to show the small-world effect if the value of ℓ scales logarithmically or slower with network size for fixed mean degree." (Sec. III.A, p.11)

平均距離が頂点数の対数スケールかそれ以下で増える性質。Watts-Strogatz の β 模型や Barabási-Albert モデルで解析的に導出可能。

**Clustering（推移律）**

> "if vertex A is connected to vertex B and vertex B to vertex C, then there is a heightened probability that vertex A will also be connected to vertex C. In the language of social networks, the friend of your friend is likely also to be your friend." (Sec. III.B, p.11)

clustering coefficient C は「三角形数 × 3 / 接続三項数」として定義され、real networks で一貫して高い値を示す。Watts-Strogatz は small-world effect とこれを整合させる最初の解析モデル。

**Scale-free degree distribution**

> "Networks with power-law degree distributions ... are sometimes referred to as scale-free networks (38), although it is only their degree distribution that is scale-free; one can and usually does find other ways in which they are not scale-free." (Sec. III.C.1, p.13)

数学者共著網、Web 引用、WWW、Internet AS level の累積次数分布がべき乗則に従う一方、電力網は指数分布、タンパク相互作用網は power-law と exponential cutoff の切り替えを示す。scale-free の普遍性と限界を同時に示す。

## 方法

レビュー論文。real-world ネットワークの実測データの体系的整理（Table II）、ネットワーク特性の定量的枠組の解説、Erdős-Rényi から成長モデル（preferential attachment）までの理論モデルの解説、ネットワーク上の動的プロセスの分析。約 90 ページの大型レビュー。

## プロジェクトデザインとの関連

「ネットワークの統計的特性が機能を決定する」という観点は、project-design における「組織の構造が振る舞いを規定する」という観点と直接接続する。Granovetter (D18-S04) の弱紐帯、Barabási-Albert (D18-S06) のスケールフリー、Watts-Strogatz の small-world と並ぶ「ネットワーク構造論」の中心参照論文。

## 書誌情報

- 著者: M. E. J. Newman (University of Michigan / Santa Fe Institute)
- 年: 2003
- 出典: *SIAM Review* 45(2), 167–256
- access_status: url-verified
- **DOI**: [10.1137/S003614450342480](https://doi.org/10.1137/S003614450342480)
- **オープンアクセス**: [arXiv:cond-mat/0303516](https://arxiv.org/pdf/cond-mat/0303516)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md)（manifest_id: `D29-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md)
- **この wiki ページ（pd）**: [wiki/sources/D29_newman_2003_structure-and-function-of.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D29_newman_2003_structure-and-function-of.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D29/D29-S14_newman-2003-structure-function-complex-networks.md`（2026-04-14、Claude Opus 4.6, WebFetch → Read PDF。Sec. I-IV 冒頭、約 41% 読了）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-4）
