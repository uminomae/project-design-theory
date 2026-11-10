---
title: "エルニーニョと南方振動の理論"
description: "熱帯太平洋の大気・海洋結合系がENSOサイクルを自律的に生み出すことを最初に結合モデルで再現し、予測可能性を示したケインとゼビアックの論文。"
aliases: ["A Theory for El Niño and the Southern Oscillation"]
tags: [source, "D05", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D05_cane-zebiak_1985_enso-theory.pdf"
  manifest_id: "D05-S08"
compiled: "2026-11-10"
status: 正典
review_state: 未レビュー
---

# エルニーニョと南方振動の理論

> **高校生向けのやさしい解説**
>
> 数年に一度、太平洋の水温が変化して世界の天気が大きく乱れる「エルニーニョ」。ケインとゼビアックは海水温・風・海流の相互作用を結合させたモデルを作り、外からのランダムな力がなくてもエルニーニョが自然に繰り返されることをコンピュータで再現しました。ただし著者たち自身は、モデルは本物より単純なので、本物のエルニーニョがモデルより予測しやすいとは考えにくい、と慎重に結んでいます。

## 概要

マーク・ケインとスティーブン・ゼビアックが1985年に発表した気候モデル論文。熱帯太平洋の海面水温（SST）・海面風・熱躍層深度の相互作用を表す結合大気・海洋モデルを構築し、ENSOが不規則な周期（3〜4年）で繰り返されるサイクルを決定論的な結合系の内部過程として再現した。外部からのランダムな強制力を仮定せずとも、熱帯太平洋域内の正のフィードバック・負のフィードバックの組み合わせがENSO変動を生成・維持することを示した。予測については、モデルは現実のENSOをつくる相互作用より単純なので、現実のイベントがモデルのものより予測しやすいとは考えにくい、と慎重に結んでいる。

## 主要概念

### 正のフィードバック（ビャークネス機構）

東部赤道太平洋のSST上昇が大気の加熱を強め、偏西風偏差を生む。この偏西風偏差は赤道東部の湧昇を弱め、さらにSSTを高める。このループが温暖イベント（エルニーニョ）を急速に発達させる。

### 赤道太平洋の熱蓄積と放電

赤道太平洋の熱コンテント（熱躍層の状態）が十分高くなったときにのみ、エルニーニョが発達できる。イベント後は熱コンテントが低下し、次のイベントまでの準備期間が生じる。この充放電サイクルがENSOの周期性をもたらす。

### 季節変調

平均場の季節変化（熱帯収束帯の移動など）がENSOの空間パターンと時間発展を左右する。モデルでは温暖ピークが主に年末に固定される傾向が現れ、観測されたENSOの季節ロッキングと整合した。

### 決定論的不規則性

モデルは完全に決定論的であるにもかかわらず、ENSOの振幅・発生タイミングが不規則になる。これはランダムノイズではなく、非線形決定論的相互作用によるカオス的ふるまいであることを示唆した。

### 予測可能性

著者らは予測可能性について慎重に結論している。

> "The model is simpler than the set of interactions that account for real ENSO events, so it is unlikely that the real events are more predictable than the model ones."


## 書誌情報

- 著者: Mark A. Cane, Stephen E. Zebiak
- 年: 1985
- 出典: Science, 228, 1085-1087
- access_status: raw-confirmed
- **DOI**: [10.1126/science.228.4703.1085](https://doi.org/10.1126/science.228.4703.1085)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D05_cane-zebiak_1985_enso-theory.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D05_cane-zebiak_1985_enso-theory.pdf)（manifest_id: `D05-S08`）
- **cs 精読ノート**: [knowledge/source-notes/D05/D05-S08_cane-zebiak-1985.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D05/D05-S08_cane-zebiak-1985.md)
- **この wiki ページ（pd）**: [wiki/sources/D05_cane-zebiak_1985_enso-theory.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D05_cane-zebiak_1985_enso-theory.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
