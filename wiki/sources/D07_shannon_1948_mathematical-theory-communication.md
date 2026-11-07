---
title: "通信の数学的理論"
description: "クロード・シャノンによる情報理論の原論文。情報量のビット単位による定量化、チャンネル容量、エントロピーの概念を確立し、現代通信技術の理論的基礎を築いた。"
aliases: ["A Mathematical Theory of Communication"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D07_shannon_1948_mathematical-theory-communication.pdf"
  manifest_id: "D07-S05"
compiled: "2026-04-08"
status: 正典
review_state: 未レビュー
---

# 通信の数学的理論

> **高校生向けのやさしい解説**
>
> 「ノイズだらけの電話線でも、情報をどれくらい正確に届けられるか」を数学で測った1948年の論文です。シャノンは情報の量を「ビット」という単位で表す方法を考え、どんなにノイズがあっても工夫次第で誤りをほぼゼロにできる限界値（チャンネル容量）を証明しました。スマホの通信やQRコードの誤り訂正など、今の情報技術の根っこになっている理論です。

## 概要

本論文はクロード・シャノンが1948年に Bell System Technical Journal に発表した情報理論の基礎を確立した原論文である。シャノンは通信の本質的な問題を「ある地点で選択されたメッセージを別の地点で正確または近似的に再現すること」と定義し、その解決に向けた数学的枠組みを構築した。情報量の対数的尺度（ビット）、離散的ノイズなしチャンネルの容量、情報源のエントロピー、ノイズのあるチャンネルにおける通信容量（シャノンの定理）など、現代の情報理論・通信理論・コンピュータ科学の基礎概念をすべて含む。PCM や PPM などの変調方式の一般的解析への動機も明示されている。

## 主要概念

**情報量とビット**
メッセージを選択することで生まれる情報量の尺度として対数が最適であることを議論した。底を2とする対数で測った単位がビット（binary digit の略、J. W. Tukey が提案）。2つの安定状態をもつデバイス（リレー、フリップフロップ）は1ビットを記憶する。対数的尺度を選ぶ理由:
1. 工学的パラメータ（時間、帯域幅、リレー数）が可能性の対数と線形に関係する
2. 直感的に「2つのカードは1枚の2倍の容量」という感覚に合致する
3. 数学的に扱いやすい

**通信システムの5要素**
論文は通信システムを次の5部分からなるモデルとして定式化した:
1. 情報源（messages を生成）
2. 送信機（信号に変換）
3. チャンネル（伝送媒体）
4. 受信機（信号から messages を復元）
5. 目的地（受信者）

**離散ノイズなしチャンネル容量**
持続時間 T のメッセージ数 N(T) の時間 T に対する成長率として、チャンネル容量 C を定義:
```
C = lim_{T→∞} log N(T) / T
```

**情報源エントロピー**
確率分布 p_i をもつ離散情報源のエントロピー（不確かさの量）:
```
H = - Σ p_i log p_i
```
これは統計力学のボルツマンエントロピーと形式的に等価であり、シャノンはノイマンの助言によりこの名称を採用したとされる。

**シャノンの符号化定理（ノイズありチャンネル）**
ノイズのあるチャンネルであっても、チャンネル容量 C を下回る速度でデータを送信するならば、誤り率をいくらでも小さくできる符号化が存在する。これは通信工学の基本限界を示す定理であり、情報の圧縮と誤り訂正の理論的根拠となった。

## 書誌情報

- 著者: C. E. Shannon
- 年: 1948
- 出典: Bell System Technical Journal, Vol. 27, pp. 379-423, 623-656（July, October 1948）
- access_status: raw-confirmed
- **DOI**: [10.1002/j.1538-7305.1948.tb01338.x](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D07_shannon_1948_mathematical-theory-communication.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D07_shannon_1948_mathematical-theory-communication.pdf)（manifest_id: `D07-S05`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S05_shannon-1948.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D07/D07-S05_shannon-1948.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_shannon_1948_mathematical-theory-communication.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D07_shannon_1948_mathematical-theory-communication.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
