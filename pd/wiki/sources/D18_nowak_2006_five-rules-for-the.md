---
title: "協力進化のための 5 つのルール"
description: "Nowak (2006) Science 論文。自然選択は利己性を選ぶはずなのに協力が成立する理由を、kin selection・direct reciprocity・indirect reciprocity・network reciprocity・group selection の 5 つの数学的条件として整理した協力進化論の現代的総説。"
aliases: ["Five Rules for the Evolution of Cooperation"]
tags: [source, "D18", "原典解説"]
source:
  repo: "creation-space"
  manifest_id: "D18-S09"
  oa_url: "https://europepmc.org/articles/pmc3279745?pdf=render"
compiled: "2026-04-19"
status: 暫定
review_state: 未レビュー
note: "cs 既要約なし、本ページは pd 側で WebFetch (PMC HTML) から直接読解"
---

# 協力進化のための 5 つのルール

> **高校生向けのやさしい解説**
>
> 自然選択は利己的な個体を選ぶはずなのに、なぜ生物は協力するのか？ ノヴァクは「血縁度（kin）」「繰り返し（direct）」「評判（indirect）」「ネットワーク」「集団選択」の 5 つを、それぞれ数学的な不等式で表現します。たとえば血縁選択なら『r > c/b』（血縁度が損益比を超えれば協力が進化する）。協力の成立条件を 5 つに整理した、現代進化生物学の重要レビュー。

## 概要

Nowak は、自然選択が利己性を選ぶはずなのに協力が広範に成立する理由を、5 つの異なるメカニズムとそれぞれに対応する数学的条件として整理する。各ルールは固有の生物学的・社会的構造を前提とし、それぞれ「協力が裏切りに勝つ」ための異なる条件を与える。論文は協力進化研究の統合的レビューとして広く参照される。

## 主要概念

**Rule 1 — Kin Selection: r > c/b**

血縁度 r が損益比 c/b を超えるとき協力が進化する（Hamilton 則）。遺伝子を共有する近親への利他行動は、その遺伝子を間接的に伝える経路となるため進化的に有利。

**Rule 2 — Direct Reciprocity: w > c/b**

> "the probability of future encounters must justify current cooperation costs"

繰り返し相互作用の確率 w が損益比を超えるとき協力が成立。tit-for-tat（しっぺ返し）戦略が反復囚人のジレンマで成功する。

**Rule 3 — Indirect Reciprocity: q > c/b**

評判知識 q が損益比を超えるとき協力が成立。「誰かを助けると良い評判が立ち、それが他者からの報酬で返される」。言語と社会的監視が人間社会で重要な前提。

**Rule 4 — Network Reciprocity: b/c > k**

利益損失比 b/c が平均近隣数 k を超えるとき協力が成立。空間構造（ネットワーク・クラスタリング）が協力の成立を支える。協力者がネットワーククラスターを形成し、裏切り者を排除する。

**Rule 5 — Group Selection: b/c > 1 + n/m**

集団規模比を超えるとき協力が進化。「協力者の集団は裏切り者の集団より速く成長し分裂する」。個体レベルでは選ばれなくても、集団レベルで選ばれる構造。

**統一的枠組み**

各ルールについて 2×2 利得行列で分析。協力が (1) 進化的安定戦略 (ESS)、(2) リスク優位、(3) 固定確率がランダム期待を超える、のどれに該当するかを判定。

**根源的洞察**

> "In any mixed population, defectors have a higher average fitness than cooperators."

混合集団では裏切りが有利だが、純協力者集団は純裏切り者集団より高い適応度を持つ。この frequency-dependent paradox を 5 ルールが体系的に解決する。

> "Cooperation allows specialization and thereby promotes biological diversity."

協力が分業を可能にし、生物学的多様性を促進する。

## 方法

理論論文 + レビュー。各メカニズムについて数学的条件を統一形式で導出。先行研究（Hamilton、Trivers、Axelrod、Boyd-Richerson 等）を統合。

## プロジェクトデザインとの関連

「協力の成立には複数の異なる条件構造がある」「血縁・繰り返し・評判・ネットワーク・集団競争のいずれかが必要」という観察は、project-design における「組織やコミュニティの協力を支える構造的条件の設計」と直接接続する。Granovetter (D18-S04)、Coleman (D18-S11)、Mauss (D25-S07) と並ぶ社会協力研究の中核参照論文。

## 書誌情報

- 著者: Martin A. Nowak (Program for Evolutionary Dynamics, Harvard University)
- 年: 2006
- 出典: *Science* 314(5805), 1560–1563
- access_status: url-verified
- **DOI**: [10.1126/science.1133755](https://doi.org/10.1126/science.1133755)
- **オープンアクセス**: [PMC3279745](https://europepmc.org/articles/pmc3279745?pdf=render)

## ソース参照（GitHub・検証用）

- **cs 精読ノート**: [knowledge/source-notes/D18/D18-S09_nowak-2006.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D18/D18-S09_nowak-2006.md)
- **この wiki ページ（pd）**: [wiki/sources/D18_nowak_2006_five-rules-for-the.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D18_nowak_2006_five-rules-for-the.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- pd 側読解: WebFetch via PMC HTML（2026-04-19、Claude Opus 4.7、本ページは pd 側で直接読解。cs 側 source-notes は未作成）
- 本ページは pd#81 Phase C-2a として WebFetch から直接生成
