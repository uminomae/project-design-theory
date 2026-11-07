---
title: "決定論的非周期流"
description: "Edward Lorenz が大気対流の簡略モデルから決定論的系における非周期的・カオス的挙動を発見した論文。バタフライ効果と気象予測可能性の限界を示した現代カオス理論の原典。"
aliases: ["Deterministic Nonperiodic Flow"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D02_lorenz_1963_deterministic-nonperiodic-flow.pdf"
  manifest_id: "D02-S12"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# 決定論的非周期流

> **高校生向けのやさしい解説**
>
> 天気予報はなぜ1週間先になると当たらなくなるのか、ロレンツはその理由を数式で示しました。ほんのわずかな初期条件の違いが時間とともに大きく広がり、やがて全く別の結果を生む——これを「バタフライ効果」と呼びます。決定論的（つまりランダムではない）な方程式でも、予測が原理的に不可能になることをこの論文は証明し、現代のカオス理論を生み出しました。

## 概要

MIT の気象学者 Edward Lorenz が1963年に Journal of the Atmospheric Sciences に発表した論文。Saltzman の大気対流モデルをさらに簡略化した3変数の常微分方程式系を解析し、決定論的な方程式から生じる非周期的（カオス的）な解の存在を示した。初期条件のわずかな違いが時間経過とともに指数的に拡大し、長期予測を不可能にするという「初期値鋭敏性」の概念は、後に「バタフライ効果」として広く知られることになった。Lorenz アトラクターと呼ばれる奇妙なアトラクターの発見は、数学・物理・気象学・生物学にまたがるカオス理論の礎石となった。

## 主要概念

### Lorenz 方程式

大気の熱対流を記述する Saltzman モデルを簡略化した3変数の常微分方程式系：
dx/dt = σ(y - x)、dy/dt = rx - y - xz、dz/dt = xy - bz
パラメータ σ（プラントル数）、r（レイリー数比）、b（幾何学因子）によって挙動が決まる。典型的なカオス的挙動は σ=10、r=28、b=8/3 のとき現れる。

### 初期値鋭敏性（バタフライ効果）

任意に近い2つの初期条件から出発した軌跡が、指数的速度で離れていく性質。決定論的な方程式であっても、初期条件を無限の精度で知ることができない現実においては、有限時間後の予測が不可能になることを意味する。

### Lorenz アトラクター（奇妙なアトラクター）

相空間で2枚の翼を持つ蝶型の構造に軌跡が収束するが、同じ経路を二度と通らない。これは「奇妙なアトラクター（strange attractor）」の最初の具体例であり、フラクタル次元を持つ無限に複雑な構造として特徴づけられる。

### 予測可能性の限界

気象予測に固有の誤差増大メカニズムを理論化し、長期予測の原理的限界を示す。完全な初期条件の知識があっても、観測誤差が避けられない限り、予測の地平線は有限であることを導く。

### 非線形性と複雑性

単純な3変数の非線形方程式から複雑な挙動が生じることは、複雑性が多数の変数を必要としないことを示す。決定論と予測不可能性の共存という逆説を提示した。

## 書誌情報

- 著者: Edward N. Lorenz
- 年: 1963
- 出典: Journal of the Atmospheric Sciences, Vol. 20, No. 2, pp. 130–141
- access_status: raw-confirmed
- **DOI**: [10.1175/1520-0469(1963)020<0130:DNF>2.0.CO;2](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2)
- **オープンアクセス**: [PDF](https://journals.ametsoc.org/downloadpdf/journals/atsc/20/2/1520-0469_1963_020_0130_dnf_2_0_co_2.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D02_lorenz_1963_deterministic-nonperiodic-flow.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D02_lorenz_1963_deterministic-nonperiodic-flow.pdf)（manifest_id: `D02-S12`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S12_lorenz-1963.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D02/D02-S12_lorenz-1963.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_lorenz_1963_deterministic-nonperiodic-flow.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D02_lorenz_1963_deterministic-nonperiodic-flow.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
