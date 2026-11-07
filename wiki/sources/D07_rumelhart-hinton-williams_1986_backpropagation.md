---
title: "誤差逆伝播法による表現学習"
description: "Rumelhart、Hinton、Williams が誤差逆伝播アルゴリズムを多層ネットワークに適用し、有用な内部表現が自動的に獲得できることを示した論文。"
aliases: ["Learning representations by back-propagating errors", "Backpropagation"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D07_rumelhart-hinton-williams_1986_backpropagation.pdf"
  manifest_id: "D07-S04"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# 誤差逆伝播法による表現学習

> **高校生向けのやさしい解説**
>
> AIがどうやって「間違いから学ぶか」を数学的に解き明かした1986年の論文です。テスト採点で「ここが違うよ」とフィードバックをもらうように、ネットワークの出力と正解のズレを逆方向にたどって各部分の重みを少しずつ修正していきます。この「誤差逆伝播」のしくみが、現代の深層学習（ChatGPTなどを支える技術）の理論的な土台になっています。

## 概要

David E. Rumelhart、Geoffrey E. Hinton、Ronald J. Williams による1986年の Nature 掲載論文。多層ニューラルネットワークの学習における中核的難問——隠れ層のユニットをどのように学習させるか——に対し、誤差逆伝播（back-propagation of errors）アルゴリズムが有効な解答を与えることを示した。勾配降下法を多層ネットワークに体系的に適用することで、ネットワークが入力の有用な内部表現を自律的に形成できることを実験的・理論的に示す。並列分散処理（PDP）研究グループの中核的成果であり、現代の深層学習の理論的基盤を形成した。

## 主要概念

### 表現学習の問題

パーセプトロン等の単層ネットワークは線形分離可能な問題にしか対処できない。隠れ層を持つ多層ネットワークはより複雑な問題を解ける可能性があるが、隠れ層ユニットに対する「正解」が存在しないため、どのように学習させるかが問題であった。著者らはこの問題を「信用割り当て問題（credit assignment problem）」として定式化し、誤差逆伝播がその解法であることを示す。

### 誤差逆伝播アルゴリズム

出力層で計算された誤差（目標値と実際の出力の差）を、ネットワークを逆向きにたどりながら各層の重みに割り当てる手続き。連鎖律（chain rule）を用いて各重みが誤差に与える貢献度（勾配）を計算し、その勾配に比例して重みを更新する。この手続きを繰り返すことで、ネットワーク全体が誤差を最小化する方向に収束する。

### 内部表現の自律形成

誤差逆伝播の重要な含意は、隠れ層が「何を表現すべきか」を事前に与える必要がないことである。ネットワークは学習過程で、与えられたタスクに適した内部表現を自律的に獲得する。論文ではこれを XOR 問題、対称性検出、エンコーダ問題などで実証した。この「表現の自己組織化」は従来の手動による特徴設計を不要にする可能性を示した。

### 分散表現

情報が少数の特化ユニットではなく多数のユニットに分散して符号化されるという表現形式。局所表現（grandmother cell 仮説）と対比される。分散表現はノイズ耐性と汎化能力を高める。

### 勾配消失問題の萌芽

論文自体が問題を提起したわけではないが、後に深層ネットワークで顕在化する勾配消失問題——誤差信号が逆伝播の過程で減衰し、下位層の学習が困難になる——の素地がある。これは後の研究における ReLU、BatchNorm、残差接続などの発展への問いを内包している。

## 関連する探索キーワード

[[欠損駆動思考]]（ks）との接続が直接的である。誤差信号を消去せず逆伝播させながら学習を継続するメカニズムは、[[欠損]]を起点に探究が駆動されるという論理の計算論的モデルとして位置づけられ、[[抱持]]——欠損を抱えたまま機能し続ける能力——との対応も読める。[[創造の5段階モデル]]（cs）とも共鳴する点があり、隠れ層が自律的に内部表現を獲得するプロセスは、創造が外部設計ではなく内側から立ち上がるという観点と対応する。

## 書誌情報

- 著者: David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams
- 年: 1986
- 出典: Nature, 323, 533-536
- access_status: raw-confirmed
- **DOI**: [10.1038/323533a0](https://doi.org/10.1038/323533a0)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D07_rumelhart-hinton-williams_1986_backpropagation.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D07_rumelhart-hinton-williams_1986_backpropagation.pdf)（manifest_id: `D07-S04`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S04_rumelhart-hinton-williams-1986.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D07/D07-S04_rumelhart-hinton-williams-1986.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_rumelhart-hinton-williams_1986_backpropagation.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D07_rumelhart-hinton-williams_1986_backpropagation.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
