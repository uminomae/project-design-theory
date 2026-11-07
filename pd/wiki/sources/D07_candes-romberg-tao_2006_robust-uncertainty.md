---
title: "ロバスト不確実性原理――疎な信号のフーリエサンプルからの完全再構成"
description: "スパース信号を少数のランダム周波数サンプルから凸最適化（l1最小化）によって完全に再構成できることを証明したカンデス・ロンバーグ・タオの論文。圧縮センシングの数学的基礎を確立した。"
aliases: ["Robust uncertainty principles"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D07_candes-romberg-tao_2006_robust-uncertainty.pdf"
  manifest_id: "D07-S06"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# ロバスト不確実性原理――疎な信号のフーリエサンプルからの完全再構成

> **高校生向けのやさしい解説**
>
> 写真を撮るとき、必要なすべてのピクセルを一枚一枚記録するのが普通ですが、ほとんどのデータがゼロに近い「疎な」信号なら、ランダムに選んだごく少数の測定点からでも元の情報を完全に復元できます。カンデスらはこれを数学的に証明し、「圧縮センシング」という考え方を生みました。MRIの撮影時間短縮など医療への応用にもつながる、情報の取り方に革命をもたらした研究です。

## 概要

エマニュエル・カンデス、ジャスティン・ロンバーグ、テレンス・タオが発表した数学・信号処理の論文。離散信号がスパース（ゼロでない成分が少ない）であるとき、ランダムに選んだ少数の周波数サンプルから凸最適化問題（l1最小化）を解くだけで信号を完全に再構成できることを証明した。これは「情報を完全に復元するにはナイキスト・シャノンのサンプリング定理に従った密なサンプリングが必要」という従来の常識を覆すものであり、圧縮センシング（compressed sensing）という新分野の数学的基礎となった。

## 主要概念

### スパース性（疎性）

信号の多くの成分がゼロまたはゼロに近い場合、その信号は「スパース」であるという。自然画像・音声・医療データの多くは適切な変換域でスパースな表現を持つ。

### l1最小化による完全再構成

l0ノルム（非ゼロ成分の数）最小化は組み合わせ爆発で計算不能だが、l1ノルム（絶対値の和）最小化に置き換えると凸問題となり多項式時間で解ける。本論文の中心的定理は、観測周波数がランダムに選ばれていれば、この緩和が圧倒的確率で正確な再構成をもたらすことを保証する。

### ロバスト不確実性原理

古典的不確実性原理（時間域と周波数域の両方に同時に局在化できない）の強化版。ランダムに選ばれた周波数集合に対しては、スパース信号がほぼ確実に一意に復元できることを示す新しい不確実性原理を導出した。

### ランダムサンプリングの役割

観測周波数をランダムに選ぶことが決定的に重要。決定論的なサンプリングパターンでは反例が構成できるが、ランダムサンプリングは高い確率で再構成を保証する。

### 全変動最小化への拡張

スパース信号だけでなく「区分的定数信号（不連続点が少ない）」に対しても同様の結果が成立する。医療画像（CTなど）への応用が直接の動機となっていた。

## 書誌情報

- 著者: Emmanuel Candes, Justin Romberg, Terence Tao
- 年: 2006
- 出典: IEEE Transactions on Information Theory, 52(2), 489-509（arXiv:math/0409186, 2004年投稿）
- access_status: raw-confirmed
- **DOI**: [10.1109/TIT.2005.862083](https://doi.org/10.1109/TIT.2005.862083)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D07_candes-romberg-tao_2006_robust-uncertainty.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D07_candes-romberg-tao_2006_robust-uncertainty.pdf)（manifest_id: `D07-S06`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S06_candes-romberg-tao-2006.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D07/D07-S06_candes-romberg-tao-2006.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_candes-romberg-tao_2006_robust-uncertainty.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D07_candes-romberg-tao_2006_robust-uncertainty.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
