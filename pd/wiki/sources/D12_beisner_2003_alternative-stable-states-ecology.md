---
title: "生態学における代替安定状態（Beisner, Haydon & Cuddington 2003）"
description: "Beisner, Haydon & Cuddington (2003)。生態系が一つの安定な状態から別の状態へ移ることを、状態の変数を動かす見方（群集の視座）と、条件のパラメータが景観ごと変える見方（生態系の視座）の二つで整理し、二つは定式化の選び方の違いだと論じるレビュー。"
aliases: ["Alternative stable states in ecology", "Beisner 2003", "代替安定状態"]
tags: [source, "D12", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D12-S13"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 生態学における代替安定状態（Beisner, Haydon & Cuddington 2003）

> **高校生向けのやさしい解説**
>
> でこぼこの地面にボールを置くと、ボールはどこかの谷に落ち着きます。谷が二つあれば、同じ地面の上でもボールが落ち着く場所は二つありえます。湖が「澄んだ水」と「藻で濁った水」のどちらかに落ち着くのも、この形で説明できます。Beisner らは、ボールを強く押して谷を移す見方と、地面の形そのものが少しずつ変わって谷が消える見方の二つを整理し、どちらも同じことを別の切り口で見ているのだと論じました。

## 概要

Beverley E. Beisner・Daniel T. Haydon（ゲルフ大学）と Kim Cuddington（カリフォルニア大学デービス校）が 2003 年に *Frontiers in Ecology and the Environment* に書いたレビュー（7 頁）。生態学で 1960 年代から論じられてきた代替安定状態（alternative stable states）の考え方を整理する。精読ノートは全頁を読んでいる。

## 主要概念

### 状態が移る二つの道

> "Theoretical ecologists envision two ways in which a community can move from one stable state to another. The first requires that different states exist simultaneously under the same set of conditions and that the community be conveyed from one state to another by a sufficiently large perturbation applied directly to the state variables [...]." (pp.376–377)

一つ目は、同じ条件のもとで複数の状態が同時にありえて、個体群の密度などの状態の変数に十分大きな揺さぶりが加わると別の状態へ移る道（群集の視座）。二つ目は、状態の変数の振る舞いを決めるパラメータ（出生率など）が変わる道（生態系の視座）。

### ボールとカップのたとえ

> "All conceivable states of the system can be represented by a surface or landscape, with the actual state of the community as a point or a ball residing on this surface. [...]" (p.377)

ありうる状態の全部を地形として描き、今の状態をその上のボールとして描く。くぼみは、ある安定な状態に引き込む領域を表す。揺さぶりはボールを動かし、パラメータの変化は地形そのものを変える。

### パラメータか変数かは定式化の問題

> "Ultimately, whether a quantity in a model is treated as a parameter or a variable is a matter of formulation – and therein lies the key to understanding the apparent differences between the community and ecosystem perspectives. [...]" (p.378)

モデルの動きからの帰還に「速く」応じて変わる量を変数とし、そうでない量をパラメータとする。漁業の漁獲の圧力を外から与えるパラメータとみれば生態系の視座に、人と魚の捕食のモデルの中の変数とみれば群集の視座になる。二つの視座の違いは、時間の尺度による定式化の選び方に帰る、と著者らは論じる。

### レジリエンスの二つの面

> "Steepness of the sides of the basin affects the return time of the ball to the lowest point in the basin. [...]" (p.379)

くぼみの壁の傾きは、揺さぶられたあと底へ戻る時間を決める（局所的な安定性。工学的レジリエンスとも呼ばれる）。くぼみの幅は、くぼみから抜け出すのに要る揺さぶりの大きさを決める（生態学的レジリエンス）。

### 少しずつの変化が急な移り変わりを招く

> "An example is the gradual addition of nutrients to shallow lakes that erodes the resilience of the clear water state (Scheffer et al. 1993). This gradual change makes the entire system more prone to catastrophic shifts toward an algae-dominated, turbid water state. [...]" (p.379)

### 履歴に依存する（ヒステリシス）

> "Hysteresis is revealed if the return trajectory of the equilibrium point differs from that adopted during its 'outward' journey [...]. Consequently, there must be multiple possible equilibrium points for some values of the perturbed parameter, and which of these states is adopted depends on the history of past perturbation. [...]" (pp.379–380)

### 何を示せば代替安定状態があると言えるか

> "Demonstration of at least two states that are each locally stable is sufficient evidence for alternative stable states. However, reverting to a former state will usually also demonstrate hysteresis; complete reversal of a perturbation will not lead to reversal of community structure because of asymmetry in most ball-in-cup 'landscapes'." (p.380)

## 方法

概念を整理するレビューで、著者ら自身の実験のデータは無い。ボールとカップの図（図 1・3・4・5）、漁業のモデル（S 字の成長と直線の死亡率から複数の平衡が出る・図 2）や浅い湖の文献の例、群集の視座と生態系の視座の先行研究を並べて整理する。

## 限界

- レビューで、独自のデータも数理の厳密な扱いも無い。
- ボールとカップの図は二次元の直観のための道具で、高い次元の状態の空間の実際の形を厳密に表すものではない。著者らもそう断っている。
- どの状態を本当に「別の」状態とみなすかの基準は決まっていない、と著者らは認める（p.381）。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を次のように読む（著者の主張ではない）。ありうる状態の全部の地形を場に、状態の変数への揺さぶりやパラメータの少しずつの変化を波に、二つのくぼみの間の鞍点（どちらの状態に決まるかの境目）を縁に、新しいくぼみに落ち着く安定な状態を渦に、くぼみの形（傾きと幅）と履歴への依存として残る構造を束に、それぞれ当てている。

## 書誌情報

- 著者: Beverley E. Beisner, Daniel T. Haydon, Kim Cuddington
- 年: 2003
- 出典: *Frontiers in Ecology and the Environment* 1(7), 376–382
- **DOI**: [10.1890/1540-9295(2003)001[0376:ASSIE]2.0.CO;2](https://doi.org/10.1890/1540-9295(2003)001[0376:ASSIE]2.0.CO;2)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D12-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D12/D12-S13_beisner-2003.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D12/D12-S13_beisner-2003.md)

## 出典メモ

- 材料は創造とはの精読ノート（全 7 頁を読んだ記録）だけ。引用はノートの文のまま。
- 創造とはの農学・生態学の照合の記録も、出版社の誌面でこの論文を本文照合済としている。
