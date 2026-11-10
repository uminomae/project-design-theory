---
title: "多安定な系の確率共鳴・自己組織化・情報の動力学（Nicolis & Nicolis 2016）"
description: "Nicolis & Nicolis (2016)。安定な状態をいくつも持つ非線形の系に、ゆらぎと弱い周期的な外力がかかるときの振る舞いを、情報理論の量で調べた理論論文。非平衡の制約は予測のしやすさを高め、確率共鳴の条件でそれが強まる。"
aliases: ["Stochastic Resonance, Self-Organization and Information Dynamics in Multistable Systems", "Nicolis & Nicolis 2016"]
tags: [source, "D06", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D06-S15"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 多安定な系の確率共鳴・自己組織化・情報の動力学（Nicolis & Nicolis 2016）

> **高校生向けのやさしい解説**
>
> 谷がいくつも並んだ地形の上で、ボールがゆらゆら揺さぶられているところを思い浮かべてください。ときどき山を越えて隣の谷へ移ります。そこへ弱い周期的な押しを加えると、移り方にくせが出て、次にどの谷にいるかを当てやすくなります。Nicolis 夫妻は、この「当てやすさ」を情報の量で測り、揺さぶりと押しの速さがうまく合うとき（確率共鳴）に最も高まることを示しました。

## 概要

Grégoire Nicolis（ブリュッセル自由大学）と Catherine Nicolis（ベルギー王立気象研究所）が 2016 年に *Entropy* に発表した理論論文（13 頁）。安定な定常状態をいくつも持つ（多安定な）非線形の系が、ゆらぎ（ノイズ）と弱い周期的な外力という非平衡の制約にさらされたときの振る舞いを、情報理論の量で解析する。精読ノートは全頁を読んでいる。

## 主要概念

### 自己組織化する系は、多くの状態から選ぶ

> "One of the principal features of complex self-organizing systems is the multitude of a priori available states. This confers to their evolution an element of unexpectedness, reflected by the ability to choose among several outcomes and the concomitant difficulty of an observer to localize the actual state in state space." (p.1)

著者らは、この問題が、ノイズでぼやけた信号を多くの信号の中から見分けるという情報理論の中心の問題に似ていると書く。

### 2 状態の確率共鳴を n 状態へ

> "In the classical setting of stochastic resonance, U₀(x) possesses two minima (associated with two stable steady states of the system) separated by a maximum. In the present work, this setting is extended by allowing for the existence of an arbitrary number n of stable steady states." (p.2)

系を、ポテンシャル U(x,t) = U₀(x) − εx sin ωt の上の運動として書く。ノイズが弱い極限では、それぞれの安定な状態の谷（引き込みの領域）にある確率の量が谷から谷へ移る、とびとびの状態のマルコフ過程に写せる（p.3）。

### 情報の量で測る

> "The deviation from full randomness, and thus, the ability to reduce errors, is conveniently measured by the redundancy: R = 1 − S_I/S_{I,max} = 1 − S_I/ln n." (p.6)

外力が無いとき、n 個の状態に確率は等しく分かれ、Shannon のエントロピーは最大になる。冗長度 R は、そこからのずれ、つまり誤りを減らす力を測る。情報エントロピーの生成 σ_I は、平衡と非平衡の隔たりを測る量として定義される（p.7）。

### 非平衡の制約は予測のしやすさを高める

> "In all cases, ΔS̄_I is negative and R̄ positive, reflecting the enhancement of predictability induced by the nonequilibrium constraint. Furthermore, [...] the enhancement is more pronounced in the range of low frequencies ω and is further amplified when the conditions of stochastic resonance are met." (p.9)

### 状態の数にはちょうどよい値がある

> "This unexpected result suggests that to optimize its function our multistable system, viewed as an information processor, should preferably be endowed with a number of states (essentially a 'variety') that is neither very small nor too large." (p.9)

### 情報は自己組織化から生まれる

> "Conversely and in line with the pioneering work in [3,4], information constitutes in turn one of the basic attributes emerging out of the dynamics of wide classes of self-organizing systems and conveying to them their specificity." (p.13)

## 方法

解析と数値計算による理論研究。1 変数の非線形の確率的な系をポテンシャルの形で書き、弱いノイズの極限で n 状態のマルコフ過程（マスター方程式）に写し、外力の振幅で展開して線形の応答を求める。そのうえで Shannon のエントロピー・冗長度・情報エントロピーの生成などを定義し、状態の数・ノイズの強さ・外力の振動数による変わり方を数値で見る（図 1–5）。

## 限界

- 数理の理論論文で、具体的な物理の系や天文の現象への当てはめは本文に無い。解析は抽象的な n 状態のモデル（U₀(x) = −cos x）で行う。
- ノイズも外力も弱い極限での結果で、強い外力の領域は扱わない。
- 精読ノートは、確率共鳴がもともと氷期と間氷期のくり返しのモデルとして出てきたことから天文の分野につないでいるが、それは読む側のつなぎで、論文は天文の現象を論じていない。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を次のように読む（著者の主張ではない）。前もって取りうる多くの安定な状態を場に、周期的な外力とゆらぎを波に、状態のあいだの障壁と、ノイズと外力の時間の尺度が合う確率共鳴の条件を縁に、外力で確率の分かれ方が一様でなくなることを渦に、減ったランダムさ・増えた冗長度・ちょうどよい状態の数として残る情報の構造を束に、それぞれ当てている。

## 書誌情報

- 著者: Grégoire Nicolis, Catherine Nicolis
- 年: 2016
- 出典: *Entropy* 18(5), 172
- **DOI**: [10.3390/e18050172](https://doi.org/10.3390/e18050172)（出版社の公開版。CC BY）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D06-S15`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S15_nicolis-2016.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D06/D06-S15_nicolis-2016.md)

## 出典メモ

- 材料は創造とはの精読ノート（全 13 頁を読んだ記録）だけ。引用はノートの文のまま。
