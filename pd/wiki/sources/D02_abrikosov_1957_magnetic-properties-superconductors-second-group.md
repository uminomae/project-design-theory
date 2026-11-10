---
title: "第二種超伝導体の磁気的性質"
description: "アブリコソフによる第二種超伝導体の理論的解析。ギンツブルク-ランダウ理論のパラメータ κ が 1/√2 より大きい場合の渦糸格子構造を初めて予測した。"
aliases: ["On the Magnetic Properties of Superconductors of the Second Group"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D02_abrikosov_1957_magnetic-properties-superconductors-second-group.pdf"
  manifest_id: "D02-S03"
compiled: "2026-11-10"
status: 正典
review_state: 未レビュー
---

# 第二種超伝導体の磁気的性質

> **高校生向けのやさしい解説**
>
> 超伝導体は磁場を完全に排除するのが普通ですが、材料によっては磁場を「渦巻き状の糸」として少しずつ内部に取り込みながら超伝導を保ち続けるものがあります。Abrikosov はこの「渦糸（ボルテックス）」が規則正しい格子状に並ぶことを1957年に理論で予測し、後に実験で確認されました。この発見は強力な電磁石や医療用MRIを実現する超伝導材料の開発につながり、2003年のノーベル物理学賞に輝いた研究です。

## 概要

本論文はアレクセイ・アブリコソフが1957年に発表した、第二種超伝導体の磁気的性質に関する理論的研究である。ギンツブルク-ランダウ（GL）理論のパラメータ κ（カッパ）が 1/√2 より大きい場合、超伝導体は第一種とは根本的に異なる振る舞いを示すことを理論的に証明した。外部磁場が下部臨界磁場 H_c1 を超えると磁束が量子化された「渦糸（ボルテックス）」として超伝導体内部に侵入し、上部臨界磁場 H_c2 = κ√2 H_cm に達するまで超伝導状態が維持される。この渦糸が規則的な格子（アブリコソフ渦糸格子）を形成するという予言は後に実験的に確認された。アブリコソフはこの業績で2003年のノーベル物理学賞を受賞した。

## 主要概念

**第一種・第二種超伝導体の分類**
GL 理論のパラメータ κ による分類:
- 第一種（κ < 1/√2）: 正の表面エネルギー。磁場と超伝導の完全な相分離
- 第二種（κ > 1/√2）: 負の表面エネルギー。磁束の部分的侵入が可能

純粋な金属では κ が小さく（例: 水銀で κ = 0.16）、第一種となる。超伝導合金では κ が大きくなり第二種となる。

**上部臨界磁場の理論的導出**
GL 方程式の線形化により、正常状態 (Ψ = 0) が不安定になる最大磁場として
```
H_c2 = κ√2 · H_cm
```
が導出される。ここで H_cm は熱力学的臨界磁場。

**アブリコソフ渦糸格子**
H_c1 < H < H_c2 の範囲（混合状態）では、磁束は量子化された渦糸として超伝導体内に侵入する。各渦糸の中心では秩序パラメータ Ψ = 0（正常相の細管）となり、その周囲を超伝導の環状電流が取り囲む。渦糸は規則的な格子に並ぶ。この論文は、上部臨界磁場の近くでは正方格子を選び、三角格子は磁束の少ない所でだけ有利とした（pp.1177–1180）。

**磁束量子化**
各渦糸が運ぶ磁束は量子化されており、磁気誘導 B は渦糸の密度 n に比例する（p.1179）。

## 書誌情報

- 著者: A. A. Abrikosov
- 年: 1957
- 出典: Soviet Physics JETP, Vol. 5, No. 6, pp. 1174-1182（原文: Zh. Eksp. Teor. Fiz. 32, 1442-1452, 1957）
- access_status: raw-confirmed

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D02_abrikosov_1957_magnetic-properties-superconductors-second-group.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D02_abrikosov_1957_magnetic-properties-superconductors-second-group.pdf)（manifest_id: `D02-S03`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S03_abrikosov-1957.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D02/D02-S03_abrikosov-1957.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_abrikosov_1957_magnetic-properties-superconductors-second-group.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_abrikosov_1957_magnetic-properties-superconductors-second-group.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
