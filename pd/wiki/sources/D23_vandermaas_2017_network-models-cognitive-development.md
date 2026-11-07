---
title: "認知発達と知能のネットワークモデル"
description: "van der Maas ら (2017) Journal of Intelligence 論文。認知の『機構』を扱う実験心理学と『個人差』を扱う相関心理学の分断を、ネットワークモデリングで架橋する。知能テスト得点間の正相関（正の多様体）を、脳内の単一実体 g を仮定せず、相互に成長を促進し合う認知過程の相利共生モデルから創発させる。Ising モデルと IRT の等価性を通じ、同一ネットワークが連続的発達と段階的発達の双方を生むことを示す。"
aliases: ["Network Models for Cognitive Development and Intelligence", "mutualism model", "positive manifold"]
tags: [source, "D23", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D23/D23-S15_van-der-maas-2017.md"
  manifest_id: "D23-S15"
  oa_url: "https://www.mdpi.com/2079-3200/5/2/16/pdf"
compiled: "2026-07-03"
status: 暫定
review_state: 未レビュー
---

# 認知発達と知能のネットワークモデル

> **高校生向けのやさしい解説**
>
> 頭のよさを測るテストでは、計算が得意な人は読解も得意、という具合に得点どうしが正の相関を持ちます。これを昔は「知能 g という一つの中身がある」と説明しました。でもこの論文は「そんな単一の中身を仮定しなくても、記憶・推論・言語などの能力が発達の途中でお互いを引き上げ合うネットワークだと考えれば、正の相関は自然に生まれる」と示します。しかも同じネットワークの『つながりの強さ』を変えるだけで、なだらかな成長にも、ピアジェのような段階的なジャンプにもなる——認知の仕組みと個人差を一つの絵でつなぐ論文です。

## 概要

本論文は、認知の**機構（mechanisms）**を扱う実験心理学と、**個人差（intelligence）**を扱う相関心理学という Cronbach (1957) の「2 つの学問」の分断を、**ネットワークモデリング**で架橋することを主張する。一般知能の**正の多様体**（認知能力テスト得点間の正相関）を説明する 3 モデル（g 因子モデル・サンプリングモデル・相利共生モデル）を比較し、著者らの**相利共生（mutualism）モデル**——W 個の認知過程が相互に成長を促進し合う Lotka–Volterra 型力学系——が、g を「脳内の単一実体」と仮定せずに正の多様体を創発させると論じる。さらにネットワークモデルが現代心理測定（因子モデル / IRT）と数学的に等価であること（Ising モデル ≡ 多次元 2 パラメータ IRT、相利共生 ≡ 因子モデル）を示し、ネットワークの相転移（カスプ破局・Ising 温度）が Piaget 的な離散的発達段階と連続的発達の双方を同一ネットワークから生み出すことを示す。

## 主要概念

**認知の機構と個人差はネットワークで架橋できる**

> "we argue that network modeling is a promising approach to integrate the processes of cognitive development and (developing) intelligence into one unified theory." (Abstract)

機構（個人内の過程）と個人差（個人間の変動源）を統合するモデルが必要で、ネットワークモデルはその両方を担える。従来の g 因子モデルは潜在変数 g が何を表すか（脳の大きさ？作業記憶？処理速度？）が 100 年の研究でも未解決という限界を持つ。

**相利共生モデル — 相互促進する認知過程のネットワーク**

> "growth in one aspect is partly autonomous and partly based on growth in other aspects." (p.5)

各過程の成長を「自律的ロジスティック成長＋他過程との相利的相互作用（行列 M）」で記述する（Eq.1）。個人差は限界容量 K の差（遺伝＋環境）に由来し、単一の個人差源（g）は存在しない。等相互作用の相利共生モデルと 1 因子モデルは同一の共分散行列を生む——すなわち g は創発的記述であって脳内実体ではない。

**同一ネットワークが連続的・離散的発達を生む（相転移）**

> "the same network can give rise to both continuous and discontinuous cognitive-intellectual development." (p.2)

強磁性を説明する Ising モデルが多次元 2 パラメータ IRT と数学的に等価であり、ネットワークの温度（結合強度）に応じて潜在特性分布が単峰（連続的発達）にも双峰（段階移行）にもなる。Piaget 的段階移行はカスプ破局として相転移で記述できる。統一モデルは相利共生・環境を介した乗数効果・サンプリング・作業記憶の中心性の 4 要素を統合する。

## 関連

- **創造（creation-space: 場→波→縁→渦→束）**: 相互作用ネットワークの相転移を扱うため 5 段階の全段階に対応する。場（相互作用前の自律成長を持つ認知過程ノード群）、波（発達中にネットワークを伝播する相互促進的成長）、縁（相互作用行列 M・カスプ破局・Ising 相転移＝段階移行の臨界）、渦（創発する正の多様体・新段階という alternative stable state）、束（g 因子・因子構造・IRT として再利用される不変則）。同領域の D23-S14 van Geert (1998) が個別成長軌道の力学を扱うのと相補的で、本論は認知過程ネットワークの創発構造を扱う。詳細は creation-space の D23 source-note を参照。

## 書誌情報

- 著者: Han L. J. van der Maas, Kees-Jan Kan, Maarten Marsman, Claire E. Stevenson（University of Amsterdam）
- 年: 2017
- 出典: *Journal of Intelligence* 5(2), 16
- access_status: raw-confirmed（MDPI gold OA, CC BY, 全文精読）
- **DOI**: [10.3390/jintelligence5020016](https://doi.org/10.3390/jintelligence5020016)
- **オープンアクセス**: [PDF](https://www.mdpi.com/2079-3200/5/2/16/pdf)
