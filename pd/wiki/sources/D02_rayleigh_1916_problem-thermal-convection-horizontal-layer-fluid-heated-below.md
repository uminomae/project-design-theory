---
title: "下から熱した水平な流体の層の対流（On convection currents in a horizontal layer of fluid）"
description: "レイリー卿によるベナール対流の理論的解析。加熱された流体層が臨界温度勾配を超えると規則的な対流セルを形成する不安定性を数学的に解明した。"
aliases: ["On Convection Currents in a Horizontal Layer of Fluid, when the Higher Temperature is on the Under Side", "The Problem of Thermal Convection in a Horizontal Layer of Fluid Heated from Below"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D02_rayleigh_1916_problem-thermal-convection-horizontal-layer-fluid-heated-below.pdf"
  manifest_id: "D02-S08"
compiled: "2026-04-08"
status: 正典
review_state: 未レビュー
---

# 下方加熱された水平流体層における熱対流の問題

> **高校生向けのやさしい解説**
>
> フライパンに油を入れて弱火にかけると、やがて油の表面に六角形の模様が現れることがあります——これがベナール対流です。レイリー卿はこの現象を数学で解明し、「温度差がある一定の値を超えると流体が自然に規則正しく動き始める」ことを理論で示しました。自然に生まれる秩序がいつ出現するかを決める「レイリー数」という指標は、この論文から生まれました。

## 概要

本論文はレイリー卿（Lord Rayleigh）が1916年に発表した、ベナール対流の理論的解明を試みた論文である。ベナールが1900年頃の実験で発見した現象——下方から加熱された薄い流体層が、ある臨界値を超えると自発的に規則的な六角形セルパターンの対流を形成する——を、ブシネスク近似に基づく流体力学方程式から出発して理論的に解析した。温度勾配が十分大きくなると（重力と浮力の相互作用が粘性と熱伝導を上回ると）流体の静止状態が不安定になり、最大成長率をもつ擾乱の波長が対流パターンの特徴的スケールを決定することを示した。この解析が後の「レイリー数」の概念の基礎となった。

## 主要概念

**ベナール不安定性**
下方加熱・上方冷却された水平流体層において、「逆温度勾配」（温度 T1 > T2、下 > 上）が臨界値を超えると静止状態が不安定化する。重力場中で暖かい流体（密度小）は上昇し、冷たい流体（密度大）は下降しようとする浮力が、粘性と熱拡散による安定化を凌駕する。

**線形安定性解析の枠組み**
レイリーは流体の静止状態からの微小擾乱が時間因子 e^(qt) に従って成長するとして、q が正になる条件（不安定条件）を導出した。これは一般的な流体不安定性解析の範型となった手法である。最も速く成長する擾乱モード（最大 q を与える波長）が現れるパターンを決定する。

**ブシネスク近似**
密度変化を重力項にのみ反映させ、他の方程式では密度を一定とみなす近似。これにより非線形の圧縮性効果を排除しながらも浮力による対流を扱える。レイリーはブシネスク（Boussinesq）の方程式を用いてこの問題を定式化した。

**セルパターンの形成**
二次元問題に限定すると、最大不安定波長（対流セルの幅）が一意に定まる。三次元では長辺と短辺の比が特定されず、実際の六角形パターンの説明には追加の考察が必要であることも指摘している。初期擾乱の性質によって流れの方向が決まり、完全な規則性は原理的に達成困難であることも論じた。

**レイリー数（後継概念）**
レイリーの解析から後に次元解析によって
```
Ra = (g α ΔT h³) / (ν κ)
```
（g: 重力加速度、α: 熱膨張率、ΔT: 温度差、h: 層厚、ν: 動粘性係数、κ: 熱拡散率）が定義され、Ra が臨界値（約 1708）を超えると対流が始まることが確立された。

## 書誌情報

- 著者: Lord Rayleigh O.M. F.R.S.
- 年: 1916
- 出典: Philosophical Magazine Series 6, Vol. 32, No. 192, pp. 529-546
- access_status: raw-confirmed
- **DOI**: [10.1080/14786441608635602](https://doi.org/10.1080/14786441608635602)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D02_rayleigh_1916_problem-thermal-convection-horizontal-layer-fluid-heated-below.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D02_rayleigh_1916_problem-thermal-convection-horizontal-layer-fluid-heated-below.pdf)（manifest_id: `D02-S08`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S08_rayleigh-1916.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D02/D02-S08_rayleigh-1916.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_rayleigh_1916_problem-thermal-convection-horizontal-layer-fluid-heated-below.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_rayleigh_1916_problem-thermal-convection-horizontal-layer-fluid-heated-below.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
