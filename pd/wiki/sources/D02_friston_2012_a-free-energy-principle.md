---
title: "生物システムの自由エネルギー原理"
description: "Friston (2012) Entropy 論文。生物システムが無秩序への傾向に抗して組織を維持する能力を、変分自由エネルギー最小化として定式化。シナジェティクス、Fokker-Planck、能動的推論、最大エントロピー、情報ボトルネック法を統合した理論論文。"
aliases: ["A Free Energy Principle for Biological Systems", "FEP", "active inference"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D02/D02-S14_friston-2012.md"
  manifest_id: "D02-S14"
  oa_url: "https://www.mdpi.com/1099-4300/14/11/2100/pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 生物システムの自由エネルギー原理

> **高校生向けのやさしい解説**
>
> 生き物は放っておくと壊れていくはずなのに、なぜ秩序を保てるのか？ フリストンは「生物は『驚き（自分の予測と現実のズレ）』を最小化することで秩序を保っている」と論じます。脳・細胞・行動・進化まで、すべて『自由エネルギー最小化』という単一原理で説明できる、という野心的な統一理論。能動的推論（自分が見たいものを見にいく）という独特の概念を導入。

## 概要

本論文は、生物システムが無秩序への自然な傾向に抗して組織を維持する能力を説明する自由エネルギー原理を提示する。シナジェティクスの円環的因果性（スレイビング原理）と結合力学系のモデルを用い、非線形 Fokker-Planck 方程式を通じてランダム力学系の定式化を行う。変分自由エネルギーの最小化が情報ボトルネック法と形式的に等価であることを示し、ベイズ推論・能動的推論・最大エントロピー原理を系として導出する。神経科学への応用として予測符号化による脳の階層的処理を具体化している。

## 主要概念

**生物システムは環境の構造的規則性を蒸留する**

> "biological systems can distil structural regularities from environmental fluctuations...and embody them in their form and internal dynamics." (Section 1)

環境をモデル化することでホメオスタシスを獲得し、自身が占める状態の数を制限する。

**自由エネルギー原理（中核命題）**

> "If the internal states r(t) minimize free energy, then the system conforms to the principle of least action and is an active system" (Section 3, Proposition 1)

変分自由エネルギーの最小化がサプライザル（自己情報量）の最小化に帰着し、エルゴード仮定のもとでシャノンエントロピーの最小化と等価。

**能動的推論**

> "Systems that conform to the free energy principle will selectively sample what they 'expect to see'" (Section 3, Corollary 2)

事後信念のもとで最も確率の高い感覚状態を選択的にサンプリングする。知覚（内部状態の更新）と行為（環境のサンプリング）を統一的に説明。

**モデルは設計されるのではなく存在条件**

> "if they did not entail a model that satisfies [Equation 13] they would not exist; or only exist for short periods of time (until their external states were dispersed by environmental fluctuations)." (Section 6)

淘汰論的議論。自由エネルギー原理は設計原理ではなく存在条件である。

**情報ボトルネック法との等価性**

> "Active systems that minimise variational free energy...comply with the constraints afforded by the information bottleneck method." (Section 4)

エルゴード仮定と MAP 推論のもとで、自由エネルギーの経路積分が情報ボトルネック基準と数学的に一致する。

## 方法

理論論文。シナジェティクス、結合力学系、非線形 Fokker-Planck 方程式、変分推論、ベイズ統計、情報理論、最大エントロピー原理を統合。神経科学への応用として階層的予測符号化を具体例として議論。

## プロジェクトデザインとの関連

「生命は予測モデルを持つことで存在し続ける」という観点は、project-design における「プロジェクトは自分自身を予測し続けることで存在し続ける」という観点と直接接続する。Friston の能動的推論（D22-S17）、Clark の予測処理（D08-S13）、Rochat の自己意識発達（D23-S04）と並ぶ「予測する個体」群の中核参照論文。

## 書誌情報

- 著者: Karl Friston
- 年: 2012
- 出典: *Entropy* 14(11), 2100–2121
- access_status: url-verified
- **DOI**: [10.3390/e14112100](https://doi.org/10.3390/e14112100)
- **オープンアクセス**: [MDPI PDF](https://www.mdpi.com/1099-4300/14/11/2100/pdf) / [PMC3510653](https://pmc.ncbi.nlm.nih.gov/articles/PMC3510653/)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D02/D02-S14_friston-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D02/D02-S14_friston-2012.md)（manifest_id: `D02-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S14_friston-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D02/D02-S14_friston-2012.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_friston_2012_a-free-energy-principle.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_friston_2012_a-free-energy-principle.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D02/D02-S14_friston-2012.md`（2026-04-10、Claude Opus 4.6, WebFetch via PMC HTML、セクション 1-6 全文）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1a）
