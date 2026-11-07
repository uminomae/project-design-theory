---
title: "非相対論的量子力学への時空アプローチ"
description: "リチャード・ファインマンによる経路積分定式化の原論文。量子力学の遷移振幅を全経路にわたる積分として表現する手法を確立し、シュレーディンガー方程式との等価性を証明した。"
aliases: ["Space-Time Approach to Non-Relativistic Quantum Mechanics"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D02_feynman_1948_space-time-approach-nonrelativistic-quantum-mechanics.pdf"
  manifest_id: "D02-S01"
  ocr: "knowledge/raw/ocr/D02-S01_feynman_1948.md"
compiled: "2026-04-08"
ocr_verified: true
status: 正典
review_state: 未レビュー
---

# 非相対論的量子力学への時空アプローチ

> **高校生向けのやさしい解説**
>
> 粒子が「A地点からB地点に移動する」とき、量子力学ではどうなるのでしょうか？ Feynman は「考えられるすべての経路を同時に通る」という驚くべき発想を数学的に定式化しました（経路積分）。速回りをする道も、宇宙を一周する道も——すべての経路の「寄与」を足し合わせると、私たちが観測する確率が得られます。量子力学を従来とは全く違う言葉で書き直したこの方法は、現代物理学の基礎となっています。

## 概要

本論文はリチャード・ファインマンが1948年に Reviews of Modern Physics 誌に発表した、量子力学の経路積分（パス積分）定式化を初めて体系的に提示した論文である。ディラックのラグランジアン形式への着目を出発点として、粒子の遷移振幅を「考えられるすべての経路に沿った寄与の和」として表現する定式化を提唱した。ファインマンはこの定式化がシュレーディンガーの波動方程式およびハイゼンベルクの行列力学と数学的に等価であることを論文中で証明し、さらに古典的極限への移行、演算子代数、ハミルトニアン、統計力学への拡張、場の振動子の消去への応用までを体系的に展開した。論文は14節、21ページ（pp. 367-387）で構成される。

## 論文の構成

1. Introduction（導入）
2. The Superposition of Probability Amplitudes（確率振幅の重ね合わせ）
3. The Probability Amplitude for a Space-Time Path（時空経路の確率振幅）
4. The Calculation of the Probability Amplitude for a Path（経路の確率振幅の計算）
5. Definition of the Wave Function（波動関数の定義）
6. The Wave Equation（波動方程式）
7. Discussion of the Wave Equation — The Classical Limit（波動方程式の議論 — 古典的極限）
8. Operator Algebra — Matrix Elements（演算子代数 — 行列要素）
9. Newton's Equations — The Commutation Relation（ニュートン方程式 — 交換関係）
10. The Hamiltonian — Momentum（ハミルトニアン — 運動量）
11. Inadequacies of the Formulation（定式化の不備）
12. A Possible Generalization（可能な一般化）
13. Application to Eliminate Field Oscillators（場の振動子の消去への応用）
14. Statistical Mechanics — Spin and Relativity（統計力学 — スピンと相対論）

## 主要概念

**経路積分（パス積分）定式化**
粒子が時刻 t_a の位置 x_a から時刻 t_b の位置 x_b へ移動する際の量子振幅は、x_a から x_b へ至るすべての可能な経路 x(t) にわたる和として表される。各経路の寄与は等しい大きさをもち、位相は古典的作用 S（ラグランジアンの時間積分）で与えられる。

```
φ(R) = Lim ∫...∫ exp(i/ℏ Σ S(x_{i+1}, x_i)) ∏ dx_i/A
```

ファインマンは「理想測定」概念を導入し、粒子が時空の領域 R に存在する確率が、R 内のすべての経路からの複素寄与の和の絶対値の二乗であることを定式化した（第3節）。

**確率振幅の重ね合わせ原理**
論文の出発点として、測定 A の結果 a と測定 B の結果 b の間の確率振幅 P_ab は、中間測定 C を挿入すると P_ab = Σ_c P_ac · P_cb と分解できることを示す（第2節）。量子力学と古典力学の本質的差異は、中間測定を実際に行わない場合に確率ではなく確率振幅を足し合わせる点にある。

**シュレーディンガー方程式の導出**
経路積分から波動方程式を導出する過程が第6節で詳細に示される。微小時間 ε の伝播を考え、

```
ψ(x, t+ε) = ∫ exp(iS(x, x_i)/ℏ) ψ(x_i, t) dx_i/A
```

から、自由粒子の場合にガウス積分を用いて正規化因子 A = (2πiℏε/m)^(1/2) を決定し、ε の一次まで展開することでシュレーディンガー方程式を得る。ポテンシャル V(x) を含む一般的な場合にも同様の導出が与えられる。

**古典的極限とホイヘンスの原理**
ℏ → 0 の極限では、位相 S/ℏ が急速に振動するため、定常位相近似によって古典的軌道（作用が停留する経路）のみが支配的になる（第7節）。ファインマンはこれをホイヘンスの原理と対比する。幾何光学ではフェルマーの最小時間の原理に対応し、波動光学ではすべての経路からの寄与が干渉する。物質波に対する同様の構造が経路積分から自然に現れる。ハミルトンの最小作用の原理との類似性も明示される。

**演算子代数と行列要素**
第8節で遷移要素（transition element）が定義される。

```
⟨x'|F|x⟩_S = Lim ∫...∫ F · exp(iS/ℏ) ∏ dx_i/A
```

ここで F は経路 x(t) の汎関数である。遷移要素を通じて、経路積分定式化と従来の演算子形式の対応が確立される。重要な結果として、行列演算子積の因子の順序が汎関数における時間の順序に対応することが示される。

**交換関係の導出**
第9節で、経路積分から px - xp = ℏ/i（正準交換関係）が導かれる。異なる2つの汎関数が同じ遷移要素を与えることから、作用汎関数に関する等価性（Eq. 46）を用いてニュートンの運動方程式と正準交換関係が同時に得られる。

**ハミルトニアンと運動量**
第10節でハミルトニアン汎関数 H_t が経路積分の文脈で定義される。作用の時間に関する変化率から、運動エネルギーとポテンシャルエネルギーの和としてのハミルトニアンが再現される。運動量汎関数は位置の変位に対する作用の変化から定義される。

**定式化の限界と一般化**
第11節でファインマン自身が不備を認めている。時間間隔の分割という不自然な手続きが必要であること。第12節では、作用が異なる時刻の座標の積を含む場合（∫x(t)x(t+T)dt のような形）への一般化可能性を指摘する。このような場合は波動関数が存在せず、従来の定式化では扱えないが、経路積分では自然に記述できる。

**場の振動子の消去**
第13節で電磁場の振動子をガウス積分によって消去し、粒子間の遅延（および先進）相互作用を直接的に得ることを示す。これが後の量子電磁力学（QED）における場のない直接相互作用の定式化（ウィーラー＝ファインマン理論）への道を示す。

**統計力学・スピン・相対論**
第14節で、統計力学の密度行列が exp(iS/ℏ) を exp(-S/kT) に置き換えることで得られること、パウリのスピン方程式への拡張、クライン＝ゴルドン方程式やディラック方程式の経路積分による導出（形式的なもの）が論じられる。

## 書誌情報

- 著者: Richard P. Feynman
- 年: 1948
- 出典: Reviews of Modern Physics, Vol. 20, No. 2, pp. 367-387
- 謝辞: Professor and Mrs. H. C. Corben, Professor H. A. Bethe, Professor J. A. Wheeler
- access_status: raw-confirmed（OCR 検証済み）
- **DOI**: [10.1103/RevModPhys.20.367](https://doi.org/10.1103/RevModPhys.20.367)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D02_feynman_1948_space-time-approach-nonrelativistic-quantum-mechanics.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D02_feynman_1948_space-time-approach-nonrelativistic-quantum-mechanics.pdf)（manifest_id: `D02-S01`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S01_feynman-1948.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D02/D02-S01_feynman-1948.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_feynman_1948_space-time-approach-nonrelativistic-quantum-mechanics.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_feynman_1948_space-time-approach-nonrelativistic-quantum-mechanics.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
