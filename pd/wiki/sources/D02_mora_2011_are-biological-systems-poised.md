---
title: "生物系は臨界点に位置するか"
description: "Mora & Bialek (2011) J Stat Phys レビュー。神経ネットワーク・タンパク質配列・鳥の群れ・聴覚毛細胞などの生物データを最大エントロピーモデルで解析し、いずれもパラメータ空間の臨界点近傍に位置することを示し、Zipf 法則を臨界性の強い兆候として整理した。"
aliases: ["Are Biological Systems Poised at Criticality?", "Zipf's law", "criticality hypothesis"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D02/D02-S15_mora-2011.md"
  manifest_id: "D02-S15"
  oa_url: "https://arxiv.org/pdf/1012.2242"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 生物系は臨界点に位置するか

> **高校生向けのやさしい解説**
>
> 「網膜の神経細胞」「タンパク質の配列」「ムクドリの群れ」——全く違うものを統計モデルで分析すると、すべてが「臨界点（秩序と無秩序のちょうど境目）」の近くで動いていることが分かりました。Zipf の法則（頻度がランクに反比例する）が広く成り立つことも、臨界性の強い証拠だと著者らは論じます。生物がなぜそんな絶妙な場所で動くのか——進化的・機能的理由はまだ謎、というスリリングな総説。

## 概要

本論文は、生物系における集団現象が統計力学の臨界点（critical point）近傍に位置しているという仮説を、複数の生物系にわたって検証したレビューである。著者らは最大エントロピーモデル（maximum entropy model）を用い、神経ネットワーク（網膜神経節細胞）、タンパク質配列のアンサンブル（WW ドメイン、SK/RR ペア、セリンプロテアーゼ、B 細胞受容体）、鳥の群れ（ムクドリの群飛行）、および聴覚系の毛細胞における実験データを解析した。いずれの系においても、データから構築されたモデルがパラメータ空間の臨界点近傍に位置することが示された。さらに、神経系のアバランシェや聴覚系のホップ分岐など、動的臨界現象（dynamical criticality）の証拠も検討され、統計的臨界性と動的臨界性の関係が議論されている。

**論文種別の注記**: review/survey 論文であり、独自実験データはなく、複数分野の知見を統合した俯瞰的議論。

## 主要概念

**データから構築されたモデルは臨界点に位置する**

> "in all these cases the models that emerge from the data are poised at a very special point in their parameter space--a critical point." (p.1)

神経・タンパク質・鳥の群れという全く異なる系で、最大エントロピー法で構築したモデルがすべて臨界点近傍に位置することは、何らかの理論的原理を反映している可能性。

**Zipf の法則は臨界性の兆候**

> "What is truly remarkable about Zipf's law, and its corollary Eq (13), is that S''(E) = 0 at all energies, making Zipf's law a very strong signature of criticality." (p.3)

Zipf の法則はエントロピーがエネルギーの正確に線形な関数であることと等価であり、比熱の発散と対応する臨界点の強い兆候。

**ペアワイズ相関で集団行動を再現**

> "The Ising model greatly improves the prediction of retinal activity over the independent model" (p.6, Fig. 1)

網膜神経節細胞では独立モデルでは説明できないが、ペアワイズ相関を制約として組み込んだ最大エントロピーモデル（Ising モデル）が、3 点相関関数やスパイク数分布など、モデルが直接フィットしていない観測量も正確に予測する。

**臨界点近傍にあることの生物学的帰結**

> "critical behaviour can considerably reduce the space of explored states, as measured by the entropy." (p.3)

臨界点では比熱が発散し、相関長が系のサイズまで伸びる一方、エントロピーは臨界温度以下で急激に減少する。生物系が探索する状態空間を大幅に縮小しうる。

**動的臨界性と統計的臨界性の区別**

> "criticality, however, can also be meant as a dynamical concept." (p.14)

統計力学的臨界性（ボルツマン分布の臨界点）と動的臨界性（分岐点、アバランシェ、自己組織化臨界）を区別しつつ、両者の関連を論じる。神経系のアバランシェと聴覚系の毛細胞のホップ分岐が例。

## 方法

レビュー論文。最大エントロピーモデルを神経・タンパク質配列・鳥の群れ・聴覚系の実験データに体系的に適用し、各系のパラメータ位置と臨界点の関係を検討。Zipf 法則の出現を比熱の発散と関連付ける理論的議論。

## プロジェクトデザインとの関連

「生物系は秩序と無秩序の境目で動いている」という観察は、project-design における「動的バランスの中で機能が立ち上がる」観点と直接接続する。Bak ら (D05-S14) の SOC、Beggs-Plenz (D08-S11) のニューロン雪崩、Hesse-Gross (D14-S07) の臨界仮説、Muñoz (D29-S13) のレビューと並ぶ「臨界性」群の中核参照論文。

## 書誌情報

- 著者: Thierry Mora, William Bialek
- 年: 2011
- 出典: *Journal of Statistical Physics* 144, 268–302
- access_status: url-verified
- **DOI**: [10.1007/s10955-011-0229-4](https://doi.org/10.1007/s10955-011-0229-4)
- **オープンアクセス**: [arXiv:1012.2242](https://arxiv.org/pdf/1012.2242)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D02/D02-S15_mora-2011.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D02/D02-S15_mora-2011.md)（manifest_id: `D02-S15`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S15_mora-2011.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D02/D02-S15_mora-2011.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_mora_2011_are-biological-systems-poised.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_mora_2011_are-biological-systems-poised.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D02/D02-S15_mora-2011.md`（2026-04-10、Claude Opus 4.6, WebFetch → Read PDF 全 20 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1a）
