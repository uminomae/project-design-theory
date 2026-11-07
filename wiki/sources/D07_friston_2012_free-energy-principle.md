---
title: "生物系のための自由エネルギー原理 — 無秩序化への抵抗の数理"
description: "Friston (2012)。生物系が自然な無秩序化（エントロピー増大）に抗える能力を、ランダム力学系を内部状態と外部状態に分け、変分自由エネルギーの最小化として説明した自由エネルギー原理の定式化。"
aliases: ["A Free Energy Principle for Biological Systems"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D07-S14"
  oa_url: "https://www.mdpi.com/1099-4300/14/11/2100/pdf"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# 生物系のための自由エネルギー原理 — 無秩序化への抵抗の数理

> **高校生向けのやさしい解説**
>
> 生き物は、放っておけば壊れて散らばっていく自然の流れ（無秩序化）に逆らって、自分の形やはたらきを保ち続けます。なぜそんなことができるのか？ この論文は「生き物は自分が経験する世界の状態を、いつもよく知っている少数のパターンに収まるよう振る舞っている」と考えます。そのために最小化しているのが「自由エネルギー」という量で、これは『世界がどうなるかの予測のズレ』のようなものです。脳の働きの理解に役立ってきたこの考え方を、生物一般に広げて定式化しています。

## 概要

本論文は、生物系が自然な無秩序化（disorder への傾向）に抵抗する能力を説明しようとする自由エネルギー原理を記述する。シナジェティクスの自己組織化定式化（例：従属化原理 slaving principle）や結合力学系モデルに見られる「円環的因果性（circular causality）」に訴え、非線形 Fokker-Planck 方程式を用いる。ここで円環的因果性は、ランダム力学系の状態を外部状態（external states）と内部状態（internal states）に分離することで誘導される。外部状態はランダムな揺らぎを受けるが内部状態は受けない。この分離により問題は、「系が訪れる外部状態を限られた数に抑える内部状態の（決定論的）ダイナミクスを見つけること」へと還元される — 言い換えれば、系の（ランダムな）アトラクター集合の測度、すなわち外部状態の Shannon エントロピーを小さく保つことである。著者は統計物理学に由来する変分自由エネルギー（variational free energy）に基づく最小作用原理を用いて解を動機づけ、それが情報ボトルネック法（information bottleneck method）と形式的に等価となる条件を確立する。

## 主要概念

**無秩序化への抵抗としての自由エネルギー原理**

> "This paper describes a free energy principle that tries to explain the ability of biological systems to resist a natural tendency to disorder."

生物系がエントロピー増大に抗う能力を、原理的に説明することを目的とする。

**内部状態と外部状態の分離による円環的因果性**

> "circular causality is induced by separating the states of a random dynamical system into external and internal states, where external states are subject to random fluctuations and internal states are not."

系を内部/外部に分割し、内部の決定論的ダイナミクスが外部状態の訪問範囲を限定する、という構図を導入する。

**変分自由エネルギー最小化と情報ボトルネックの等価性**

> "We motivate a solution using a principle of least action based on variational free energy (from statistical physics) and establish the conditions under which it is formally equivalent to the information bottleneck method."

最小作用原理に基づく変分自由エネルギー最小化を解として提示し、情報理論の情報ボトルネック法と形式的に等価であることを示す。

**神経科学を超える一般性**

> "The generality of variational free energy minimisation and corresponding information theoretic formulations may speak to interesting applications beyond the neurosciences; e.g., in molecular or evolutionary biology."

脳の機能的構造の理解に有用だったこの枠組みが、分子生物学・進化生物学など神経科学を超えて適用されうる一般性を主張する。

## 方法

理論論文。非線形 Fokker-Planck 方程式、変分自由エネルギー（統計物理）、最小作用原理、情報理論（Shannon エントロピー、情報ボトルネック法）を用いた数理的定式化。

## 創造（creation-space）との関連

「揺らぎを受ける外部状態」と「それに応答して秩序を維持する内部状態」の円環的因果という構図は、創造の5段階における「波」（揺らぎ・変動）と「渦」（秩序の自己維持・自己形成）の関係に実質的に対応する。系が訪れる状態を少数のアトラクターに収束させる過程は、無数の可能性の場から特定の安定構造が立ち上がる「渦」の数理的記述と読める。Nicolis (D06-S15) の確率共鳴・自己組織化、Strogatz (D07-S13) の同期と並ぶ「揺らぎ・自己組織化・秩序生成」群の中核理論。

## 書誌情報

- 著者: Karl Friston
- 年: 2012
- 出典: *Entropy* 14(11), 2100–2121
- access_status: url-verified
- **DOI**: [10.3390/e14112100](https://doi.org/10.3390/e14112100)
- **オープンアクセス**: [PDF](https://www.mdpi.com/1099-4300/14/11/2100/pdf)（GOLD OA）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/manifest.md)（manifest_id: `D07-S14`）
- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 `wiki-cross-check.mjs` で照合）
- **この wiki ページ（pd）**: [wiki/sources/D07_friston_2012_free-energy-principle.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D07_friston_2012_free-energy-principle.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- OA本文（MDPI）への直接アクセスは 403 のため、PubMed (PMID 23204829) の公式 abstract 全文を一次入力に pd 形式で生成した。本文全文は未読のため主要概念は abstract ベース。
- cs source-note 未生成の可能性あり。
- 生成: 2026-06-14, source-reader
