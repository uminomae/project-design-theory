---
title: "最大エントロピー生成原理の理論的な基礎と地球システムへの応用（Dyke & Kleidon 2010）"
description: "Dyke & Kleidon (2010)。最大エントロピー生成（MEP）原理が非平衡の状態をよく予測するのは、自然法則だからではなく、手元の情報から最良の予測を出す推論の手続きだからだ、と論じる概念論文。"
aliases: ["The Maximum Entropy Production Principle: Its Theoretical Foundations and Applications to the Earth System", "Dyke & Kleidon 2010", "最大エントロピー生成原理"]
tags: [source, "D05", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D05-S13"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 最大エントロピー生成原理の理論的な基礎と地球システムへの応用（Dyke & Kleidon 2010）

> **高校生向けのやさしい解説**
>
> 大気や海のように、熱が流れ続けて形を保っている系では、「エントロピーをいちばん多く作る状態に落ち着く」と仮定すると、熱の運ばれ方がよく当たることが知られています。Dyke と Kleidon は、それが当たるのは自然の法則だからではなく、分かっている情報から最もありそうな答えを選ぶ推論のやり方だからだ、と論じました。

## 概要

James Dyke と Axel Kleidon（マックス・プランク生物地球化学研究所）が 2010 年に *Entropy* の特集に寄せた論文（18 頁）。新しい実験や計算は載せず、最大エントロピー生成（Maximum Entropy Production, MEP）原理をどう解釈するかを論じる。精読ノートは全頁を読んでいる。

## 主要概念

### MEP は推論の手続き

> "The Maximum Entropy Production (MEP) principle has been remarkably successful in producing accurate predictions for non-equilibrium states. We argue that this is because the MEP principle is an effective inference procedure that produces the best predictions from the available information." (p.613, Abstract)

MEP をめぐっては、自然法則とみる解釈と、推論の手続きとみる解釈がある。著者らは、Jaynes の最大エントロピー法と Dewar の導出に沿って、後者をとる。

### 定常状態のエントロピーの収支

系のエントロピーの変化は、系の中で作られる分（σ）と、境界を越えて出入りする分の和で書ける（p.617, 式 2）。定常状態では、中で作られる分は熱の流れと温度の勾配から計算でき、境界を越える出入りと釣り合う（p.618, 式 3）。著者らは、Paltridge と Lorenz の箱モデルで、大気が σ を最大にするように熱の運び方を「選ぶ」と仮定すると観測によく合った例を紹介する（p.618）。

### 反証できるか

> "Consequently, if one requires falsification to be a necessary condition of any scientific theory, the MEP principle is not a scientific theory." (p.620)

MEP の予測が外れても、「その系は MEP に従う系ではなかった」と言えてしまう。著者らは、確率を系の性質とみる頻度主義から、確率を系についての知識の度合いとみるベイズ主義へ移ることで、この問題を避けようとする。

> "Rather than the entropy of a system being a particular property of a system, it is instead a measure of how much we know about a system." (p.622)

### 情報の言葉から熱力学の言葉へ

> "As all real world systems must conserve energy and matter, we can safely translate information theoretic concepts into thermodynamic ones when modelling the Earth system." (p.615)

地球システムではエネルギーと物質が保存されるので、情報理論から導いた MEP と、熱力学での MEP の応用は食い違わない、と著者らは書く（p.624）。

### 平衡から離れるほど細かい構造が現れる

> "As the system moves further and further away from thermodynamic equilibrium, these structures should show less and less autocorrelation. Less autocorrelation in turn represents increased 'memory' of a system." (p.625)

## 方法

概念の論文。平衡の統計力学でのエントロピーの定義、非平衡の定常状態でのエントロピーの生成、Popper の反証可能性、頻度主義とベイズ主義の確率の解釈、Jaynes と Dewar の議論を順に整理し、地球システムのモデルへの当て方（局所熱力学平衡の仮定、格子より細かいスケールへの応用）を論じる。

## 限界

- 新しいデータは無い。箱モデルの予測の成功は、ほかの研究の紹介。
- MEP を推論の手続きとみる立場は、分野の中で争いのある一つの解釈。
- 論の射程は非平衡の定常状態の予測で、エントロピーの生成を何かを生み出す力として広げて読むのは、この論文の外になる。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応をどれも弱いとみる（著者の主張ではない）。平衡の一様な状態を場に、温度の勾配が立つことを波に、境界を越えるエントロピーの出入りを縁に、系が一つの定常状態を「選ぶ」ことを渦に当てうるが、著者らはそれを物の立ち上がりでなく推論として扱っている。束に当たる記述は無い。

## 書誌情報

- 著者: James Dyke, Axel Kleidon
- 年: 2010
- 出典: *Entropy* 12(3), 613–630
- **DOI**: [10.3390/e12030613](https://doi.org/10.3390/e12030613)（出版社の公開版。MDPI）
- 精読ノートは、マックス・プランク研究所のリポジトリの写しで読んでいる

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D05-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D05/D05-S13_dyke-kleidon-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D05/D05-S13_dyke-kleidon-2010.md)

## 出典メモ

- 材料は創造とはの精読ノート（全 18 頁を読んだ記録）だけ。引用はノートの文のまま。
