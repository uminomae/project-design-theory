---
title: "漢方薬QiShenYiQiのネットワーク薬理学研究"
description: "心筋梗塞に対する中国伝統処方「気参益気滴丸（QSYQ）」の多成分・多標的・多経路作用メカニズムをネットワーク薬理学的手法で解明した研究。"
aliases: ["A network pharmacology study of Chinese medicine QiShenYiQi", "Li 2014 network pharmacology QSYQ"]
tags: [source, "D11", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D11_li_2014_network-pharmacology-qishenyiqi.pdf"
  manifest_id: "D11-S09"
compiled: "2026-04-08"
status: 正典
review_state: 未レビュー
---

# 漢方薬QiShenYiQiのネットワーク薬理学研究

> **高校生向けのやさしい解説**
>
> 心臓病に使われる中国の漢方薬「気参益気滴丸」が、体内でどんな遺伝子・分子にどうはたらくかをネットワーク図で解き明かした2014年の研究です。一般の薬は「一つの標的に一つの成分」が基本ですが、漢方は4種の生薬が55か所もの標的に同時に作用します。その複雑な作用を地図のように可視化することで、「なぜ効くのか」を西洋医学的な言葉で説明しようとしています。

## 概要

気参益気滴丸（QiShenYiQi: QSYQ）は中国で心血管疾患（CVD）の治療に広く使われる中国薬で、黄耆（Huangqi）、丹参（Danshen）、三七（Sanqi）、降香（Jiangxiang）の4種生薬から構成される。本研究は、心筋梗塞ラットモデルを用いたDEG（差次的発現遺伝子）解析と、化合物-標的-経路の三層ネットワーク構築を組み合わせ、QSYQの多成分・多標的・多経路作用メカニズムを体系的に解明した。55の潜在的標的が特定され、そのうち14がCVD関連文献で実験的に裏付けられた。また、降香の3種セスキテルペン成分について抗炎症効果と分子標的が実験的に検証された。

## 主要概念

### ネットワーク薬理学（Network Pharmacology）のアプローチ

- 単一標的・単一化合物のモデルでは説明できない、複雑な疾患に対する多成分処方の作用を記述するフレームワーク
- システム生物学・ネットワーク生物学の手法を応用し、化合物-遺伝子-経路の三者間のネットワーク構造として薬効を可視化する
- 「複雑性に対して複雑性で対抗する」（complexity against complexity）というパラダイムとして位置づけられる

### QSYQの構成と主要化合物

| 生薬 | 代表的有効成分 |
|------|-------------|
| 黄耆（Huangqi） | アストラガロシドIV（Ast）、カリコシン（Cal）、フォルモノネチン（For） |
| 丹参（Danshen） | 丹参素（DSS）、プロトカテクアルデヒド（PCA）、ロズマリン酸（RSA） |
| 三七（Sanqi） | ジンセノサイドRg1、Rb1、ノトジンセノサイドR1 |
| 降香（Jiangxiang） | トランスネロリドール（ENL）、SDL、RDL（セスキテルペン） |

### 研究の設計と主要知見

- 雄SDラット心筋梗塞モデルにQSYQを7日間経口投与し、梗塞境界領域の全ゲノムマイクロアレイ解析を実施
- CVD関連DEGと化合物の対応関係を文献マイニングで収集し、Cytoscapeでネットワーク構築
- 降香の3種セスキテルペン（ENL、SDL、RDL）についてはRAW264.7細胞での抗炎症実験を実施。ERK1/2、PPARγ、HO-1が標的として同定された

### 三層ネットワークの意義

化合物→標的（遺伝子）→経路（pathway）の三層構造で作用機序を記述することで、どの成分がどの遺伝子を通じてどの生物学的経路に作用するかを俯瞰的に把握できる。単一標的の阻害や促進ではなく、ネットワーク全体の調整として漢方処方の効果を理解する枠組みを提供する。

## 書誌情報

- 著者: Xiang Li, Leihong Wu, Wei Liu, Yecheng Jin, Qian Chen, Linli Wang, Xiaohui Fan, Zheng Li, Yiyu Cheng
- 年: 2014
- 出典: PLoS ONE, 9(5): e95004
- access_status: raw-confirmed
- **DOI**: [10.1371/journal.pone.0105865](https://doi.org/10.1371/journal.pone.0105865)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D11_li_2014_network-pharmacology-qishenyiqi.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D11_li_2014_network-pharmacology-qishenyiqi.pdf)（manifest_id: `D11-S09`）
- **cs 精読ノート**: [knowledge/source-notes/D11/D11-S09_li-2014.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D11/D11-S09_li-2014.md)
- **この wiki ページ（pd）**: [wiki/sources/D11_li_2014_network-pharmacology-qishenyiqi.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D11_li_2014_network-pharmacology-qishenyiqi.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
