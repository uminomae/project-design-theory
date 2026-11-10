---
title: "生物システムの自由エネルギー原理（Friston 2012・工学と制御の角度）"
description: "Friston (2012)。生き物が無秩序に向かう傾向に逆らって形を保てるのは、感覚の「驚き」を最小にするように内部の状態と行動を組み立てるからだ、とする理論論文。工学と制御の角度から、最小作用の原理の組み直しとして読んだ精読ノートから作った。"
aliases: ["Friston 2012（工学・制御）"]
tags: [source, "D07", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D07-S14"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 生物システムの自由エネルギー原理（Friston 2012・工学と制御の角度）

> **高校生向けのやさしい解説**
>
> 生き物は、放っておけば崩れていくはずの体の形やしくみを保っています。Friston は、生き物は「思っていたのと違う」という驚きを小さくするように、体の中の状態と行動を整えている、と考えました。驚きを小さくすることは、外の世界の原因を推し量ること（ベイズの推論）と同じ形をしており、物理の「最小作用の原理」の言い直しにもなる、と論じています。

## 概要

Karl Friston が 2012 年に *Entropy* に発表した理論論文（22 頁）。新しい実験は無く、数理の定式化と概念の論証で「自由エネルギー原理」を示す。同じ論文を物理の角度で読んだページが [[D02_friston_2012_a-free-energy-principle|生物システムの自由エネルギー原理]] にある。このページは、工学と制御の角度（最小作用の原理・制御の原理）から読んだ精読ノートから作った。ノートは PMC の全文の版で本文の 6 節を通して読み、数式の導出と文献表は詳しく見ていない。

## 主要概念

### 能動的な系は驚きを最小にする

> "an ergodic random dynamical system m=(Rd,φ) is said to be *active* if it possesses an internal map that satisfies (locally) the extremal condition: φR*=argminφRH(S∣m)" (§2.3, Definition 1)

系は、内部の写像によって感覚の状態のエントロピー（驚きの長い期間の平均）を最小にする。それが、限られたアトラクタに自分を制約することとして現れる。

### 自由エネルギーの最小化は驚きの最小化

> "minimizing free energy with respect to the internal states renders it the surprise that is minimized by active states." (§3)

自由エネルギーは驚きの上界で、内部の状態について自由エネルギーを最小にすると、驚きが抑えられる。

### ベイズの推論としての知覚

> "Systems that conform to the free energy principle represent the causes of their sensory states in a Bayesian sense" (§3, Corollary 1)

内部の状態は、外の原因の事後分布を近似して表す。

### 情報ボトルネック

> "the information bottleneck requires the internal states (representations) to predict sensory states accurately, under the constraint that their entropy is small." (§4.1)

知覚は、隠れた状態をまとめるときの正確さと複雑さの兼ね合いとして特徴づけられる。

### 最小作用の原理の組み直し

> "the free energy principle is just a delicate reconstruction of the principle of least action, in the setting of random dynamical systems." (§6)

> "any biological system, from a single-cell organism to a social structure should have, encoded in its internal (macroscopic) states, a representation of causal structure in its external milieu" (§6)

## 方法

数理の定式化と概念の論証。エルゴード理論とランダム力学系のアトラクタでエントロピーの最小化を定義し、変分自由エネルギーを驚きの上界として入れ、その最小化を能動的な推論（知覚と行動）として書く。情報ボトルネック法と同じ形になることを示し、脳での実装を階層的な生成モデルと予測符号化で示す（§5, 式 24）。

## 限界

- 原理の提案で、新しい実験のデータは無い。
- 著者の関心は秩序を保つことと推論で、何かが生まれる過程ではない。
- 出版社の版は自動では取れず、PMC の全文の版で読んでいる。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を、縁と渦で中くらい、場と束で弱く、波は無いとみる（著者の主張ではない）。内部の状態と外の状態をつなぐ感覚と行動の状態を縁に、系が限られたアトラクタに自分を制約して低いエントロピーの状態として立ち上がることを渦に当てる。対立や揺れから何かが生まれる構造は、この論文の射程の外で、動きはアトラクタへの収束として書かれている。ノートは、この論文を5段階モデルの強い裏付けとして扱わないよう注意している。

## 書誌情報

- 著者: Karl Friston
- 年: 2012
- 出典: *Entropy* 14(11), 2100–2121
- **DOI**: [10.3390/e14112100](https://doi.org/10.3390/e14112100)（出版社の公開版。MDPI）
- **PMC**: [PMC3510653](https://pmc.ncbi.nlm.nih.gov/articles/PMC3510653/)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D07-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S14_friston-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S14_friston-2012.md)

## 出典メモ

- 材料は創造とはの精読ノート（PMC の全文の版で本文の 6 節を読んだ記録）だけ。ノートの引用は、2026-11-10 に PMC の全文の版と一字ずつ照らし、すべて一致した。
