---
title: "モース理論 不屈の研究"
description: "ラウル・ボットによるモース理論の歴史的発展を振り返る講演論文。臨界点理論から始まりフロアー理論に至るまでの数学的系譜を解説する。"
aliases: ["Morse Theory Indomitable"]
tags: [source, "D01", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D01_bott_1988_morse-theory-indomitable.pdf"
  manifest_id: "D01-S01"
compiled: "2026-04-08"
status: 正典
review_state: 未レビュー
---

# モース理論 不屈の研究

> **高校生向けのやさしい解説**
>
> 山の地形を上から眺めると「山頂」「鞍部」「谷底」といった特別な点があります。モース理論は、こうした「形の特徴点」を数学的に分析することで、曲がった空間（多様体）全体の形を読み解く方法です。この論文は数学者ラウル・ボットが、そのモース理論が1920年代から1980年代にかけてどのように発展し続けてきたかを振り返ったもので、地形の山を関数の「高さ」として読む発想が現代数学の様々な分野に広がっていった歴史を語っています。

## 概要

本論文はラウル・ボットが1988年にパリで開催されたルネ・トムを称える会議で行った講演の記録である。タイトル「Morse Theory Indomitable（不屈のモース理論）」は、20世紀を通じてモース理論が様々な形で発展し続けてきたことへの敬意を込めたものである。ボットは自身の数学的経歴を振り返りながら、モース理論の主要な発展段階——モース本人の臨界点理論（1920年代）、スマールの高次元化（1960年代）、ウィッテンのゲージ理論的アプローチ（1970年代）、フロアーの無限次元化（1980年代）——を概観する。論文は個人的な回想と厳密な数学的内容を織り交ぜた独特のスタイルで書かれている。

## 主要概念

**モース関数と臨界点**
滑らかなコンパクト多様体 M 上の滑らかな関数 f: M → R について、微分 df が消える点を臨界点という。非退化臨界点では各点においてヘッセ行列の行列式が消えず、負の固有値の個数を「指数（index）」と定義する。

**モース不等式**
各指数 λ の臨界点の個数をカウントするモース多項式 M_t(f) は、多様体 M のポアンカレ多項式 P_t(M; K) に対して係数ごとに大きい。より精密には
```
M_t(f) - P_t(M; K) = (1 + t) Q_t(f; K)
```
と書け、Q_t の係数はすべて非負となる。この (1+t) 因子が不等式に大きな力を与え、臨界点の情報から多様体のトポロジーへの逆方向のフィードバックを可能にする。

**定理A・定理B**
- 定理A: f の [a,b] 区間に臨界値がなければ M_a と M_b は微分同相
- 定理B: 指数 λ の非退化臨界点が1個だけあれば、M_b のホモトピー型は M_a に λ-セルを貼り付けたものになる

**エネルギー関数とパス空間**
コンパクトリー群や対称空間上では、パス空間 L(M) 上のエネルギー関数 ε が完全なモース関数となる。ボットとサメルソンはこの方法で対称空間のコホモロジーを計算した。

**フロアー理論（1980年代）**
無限次元多様体上でのモース理論の実現。シンプレクティック幾何やゲージ理論への応用が現代数学の中心的課題となっている。

## 書誌情報

- 著者: Raoul Bott
- 年: 1988
- 出典: Publications Mathématiques de l'I.H.É.S., tome 68, pp. 99-114
- access_status: raw-confirmed
- **DOI**: [10.1007/BF02564666](https://doi.org/10.1007/BF02564666)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D01_bott_1988_morse-theory-indomitable.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D01_bott_1988_morse-theory-indomitable.pdf)（manifest_id: `D01-S01`）
- **cs 精読ノート**: [knowledge/source-notes/D01/D01-S01_bott-1988.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D01/D01-S01_bott-1988.md)
- **この wiki ページ（pd）**: [wiki/sources/D01_bott_1988_morse-theory-indomitable.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D01_bott_1988_morse-theory-indomitable.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
