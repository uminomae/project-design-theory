---
title: "カオスの縁での計算：相転移と創発する計算（Langton 1990）"
description: "Langton (1990)。セル・オートマトンの規則の空間を一つのパラメータ λ で並べると、秩序ある振る舞いと乱れた振る舞いの間に相転移があり、その近くで情報を蓄え・伝え・書き換える計算の働きが自然に現れうる、と論じる論文。"
aliases: ["Computation at the Edge of Chaos", "Langton 1990", "カオスの縁"]
tags: [source, "D29", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D29-S15"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# カオスの縁での計算：相転移と創発する計算（Langton 1990）

> **高校生向けのやさしい解説**
>
> 升目の一つ一つが、隣の升目の様子を見て次の色を決める、という単純な決まりの集まり（セル・オートマトン）があります。Langton は、決まりを少しずつ変えていくと、すぐに止まって動かなくなる世界から、でたらめに荒れる世界へ移り、その間の境目あたりで、形を保ったまま動いて情報を運ぶ「粒」のようなものが現れることを示しました。計算はこの境目の近くで自然に生まれるのかもしれない、と論じています。

## 概要

Christopher G. Langton（ロスアラモス国立研究所）の論文。*Physica D* 42（1990）pp.12–37 に載り、ロスアラモスのプレプリント LA-UR-90-379 としても出た。計算がどんな物理的な条件で自然に現れるかを、セル・オートマトンを抽象の模型として調べる。精読ノートは、OSTI（米国エネルギー省の科学技術情報局）が公開しているプレプリントの版の pp.1–18（要旨・序論・規則の空間のパラメータ化・質的な概観・質的な動きについての注記の冒頭）を読んでいる。

## 主要概念

### 計算に要る三つの働き

> "All of these constructs rely on three fundamental features of the dynamics supported by the underlying transition function physics. First, the physics must support the *storage* of information, ... " (§1.2, p.9)

計算を支えるには、情報を蓄えること（storage）、伝えること（transmission）、書き換えること（modification）の三つが要る。三つを同時に支えるには、時間と空間に長く延びる相関が要る、とノートは読んでいる。

### λ パラメータ

> "λ is defined as follows. We pick an arbitrary state s ∈ Σ, and call it the *quiescent* state s_q. Let there be n transitions to this special quiescent state in a transition function Δ. Let the remaining K^N - n transitions in Δ be filled by picking randomly and uniformly over the other K - 1 states in Σ - s_q. Then λ = (K^N - n) / K^N." (§2.1, p.6)

λ = 0 では、すべての遷移が静かな状態に行く（いちばん一様な規則）。λ = 1 − 1/K では、どの状態も同じ確率で現れる（いちばん一様でない規則）。

### 秩序と乱れの間の相転移

> "by varying the λ parameter throughout 0.0 < λ ≤ 0.75 over the space of possible K=4, N=5, 1D cellular automata, we progress from CAs exhibiting the maximal possible order to CAs exhibiting the maximal possible disorder. At intermediate values of λ, we encounter a *phase-transition* between periodic and chaotic dynamics, ..." (§3, p.15)

λ が 0.45 あたりで、落ち着くまでの過渡の時間が急に長くなり、孤立波のように動く構造（グライダー）が現れる、とノートは記録している。

> "First, transients grow rapidly in the vicinity of the transition between ordered and disordered dynamics, a phenomenon known in the study of phase-transitions as *critical slowing down*." (§4。誌面の p.25)

### 計算は相転移の近くで現れうる

> "Computation may emerge spontaneously and come to dominate the dynamics of physical systems when those systems are at or near a transition between their solid and fluid phases." (要旨・§1.2)

### 生命についての見通し

> "Perhaps the most exciting implication is the possibility that life had its origin in the vicinity of a phase transition, and that evolution reflects the process by which life has gained local control over a successively greater number of environmental parameters affecting its ability to maintain itself at a critical balance point between order and chaos." (§1.2, p.3)

著者自身が「可能性」として書いている見通しで、論文はこれを示してはいない。

## 方法

一次元と二次元のセル・オートマトンの数値実験。周期的な境界の 128 升の一次元のセル・オートマトン（K=4、N=5）で、λ を 0.00 から 0.75 まで 0.05 刻みで動かす。同じ規則の表を少しずつ変えていく方法で、規則を連続的に変えていく。Wolfram（1984）の四つの質的な分類を広げる形で結果を読む。

## 限界

- 数値実験は一次元と二次元のセル・オートマトンに限られ、流体やニューロンのような実際の物理の系に広がるかは示されていない。
- λ は規則の統計的な性質で、動きの振る舞いとは大まかに相関するだけだ、と Langton 自身が書いている（§2.4）。
- 読んだのは pp.1–18 で、§4.2 からの量的な解析（エントロピー・相互情報量・過渡の統計の詳細）は読んでいない。プレプリントの PDF では図 1–5 の画像が欠けている。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を強く読む（著者の主張ではない）。λ で並べた規則の空間を場に、動きの伝わりとグライダーの波のような動きを波に、秩序と乱れの間の相転移の境目（カオスの縁）を縁に、グライダーと止まった構造のぶつかり合いと書き換えを渦に、蓄える・伝える・書き換えるの三つがまとまって計算が成り立つことを束に、それぞれ当てている。

## 書誌情報

- 著者: Christopher G. Langton
- 年: 1990
- 出典: *Physica D* 42, 12–37
- **DOI**: [10.1016/0167-2789(90)90064-V](https://doi.org/10.1016/0167-2789(90)90064-V)
- **プレプリントの版**: LA-UR-90-379（OSTI の公開版: [osti.gov/servlets/purl/7264125](https://www.osti.gov/servlets/purl/7264125)）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D29-S15`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S15_langton-1990.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D29/D29-S15_langton-1990.md)

## 出典メモ

- 材料は創造とはの精読ノート（OSTI の公開版で pp.1–18 を読んだ記録）だけ。引用はノートの文のまま。
- 創造とはの複雑系科学の照合の記録は、この論文を、権利の確かめられない別の写しで読んだので未照合とし、OSTI の版を取り直すと書いている。精読ノートが読んだのは、その OSTI の版（公的機関の公開版）。
