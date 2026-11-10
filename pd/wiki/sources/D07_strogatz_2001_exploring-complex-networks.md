---
title: "複雑ネットワークの探究（Strogatz 2001・工学と情報の角度）"
description: "Strogatz (2001)。ネットワークの構造がその上の動きを決める、という見方から、送電網・インターネット・レーザーの列などを横断して整理したレビュー。工学と情報科学の角度（故障の伝わり方・同期・探索のしやすさ）から読んだ精読ノートから作った。"
aliases: ["Strogatz 2001（工学・情報）"]
tags: [source, "D07", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D07-S13"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 複雑ネットワークの探究（Strogatz 2001・工学と情報の角度）

> **高校生向けのやさしい解説**
>
> 送電線の二本の故障が、いくつもの州の停電にまで広がることがあります。部品の一つ一つが丈夫でも、どうつながっているかによって、故障やウイルスの広がり方が変わるからです。Strogatz は、ネットワークのつながり方が、その上で起きることを決めるという見方から、電力網・インターネット・レーザーの列などの研究をまとめました。

## 概要

Steven H. Strogatz（コーネル大学）が 2001 年に *Nature* のレビューの欄に書いた論文（9 頁）。結合した振動子の集団の動きと、グラフの構造（スモールワールド・スケールフリー・ランダムグラフ）の研究を整理する。同じ論文を物理の角度で読んだページが [[D02_strogatz_2001_exploring-complex-networks|複雑ネットワークの探究]] にある。このページは、工学と情報科学の角度から読んだ精読ノートから作った。ノートは全頁を読んでいる。

## 主要概念

### 故障は構造の上を伝わる

> "On 10 August 1996, a fault in two power lines in Oregon led, through a cascading series of failures, to blackouts in 11 US states and two Canadian provinces, leaving about 7 million customers without power for up to 16 hours. The Love Bug worm, the worst computer attack to date, spread over the Internet on 4 May 2000 and inflicted billions of dollars of damage worldwide." (p.268)

### 構造はいつも働きに効く

> "Why is network anatomy so important to characterize? Because structure always affects function. For instance, the topology of social networks affects the spread of information and disease, and the topology of the power grid affects the robustness and stability of power transmission." (p.268)

### 同期は技術の目標でもある

> "From a technological standpoint, self-synchronization would be the most desirable outcome, because a perfectly coherent array of N lasers would produce N² times as much power as a single one. But in practice, semiconductor laser arrays are notoriously prone to spatial and temporal instabilities." (pp.269–270)

### スモールワールドと信号の伝わり

> "Furthermore, they conjectured that dynamical systems coupled in this way would display enhanced signal propagation speed, synchronizability and computational power, as compared with regular lattices of the same size. ..." (p.273)

Watts と Strogatz は、近道の少し入ったつながり方（スモールワールド）で結んだ系は、同じ大きさの規則正しい格子より、信号が速く伝わり、同期しやすく、計算の力も高い、と予想した。短い道が、離れた部分どうしの速い通信路になるという見立てである。

### 探しやすさはつながり方による

> "Computer scientists see questions about algorithms and their complexity. Walsh showed that graphs associated with many difficult search problems have a small-world topology. Kleinberg introduced an elegant model of the algorithmic challenge posed by Milgram's original sociological experiment — ..." (p.273)

短い道があることと、手元の情報だけでその道を見つけられることは別の問題で、Kleinberg のモデルでは、見つけやすさがスモールワールドの種類によって変わる。

### 残された課題

> "The speculations that these architectures are dynamically advantageous (for example, more synchronizable or error-tolerant) need to be sharpened, then confirmed or refuted mathematically for specific examples. Other ripe topics include the design of self-healing networks, and the relationships among optimization principles, network growth rules and network topology." (p.275)

## 方法

レビュー。結合した振動子の集団の動き（規則正しいネットワークの上）と、グラフの構造の解析（スモールワールド・スケールフリー・ランダムグラフ）という二つの補い合う方法を整理し、送電網・インターネット・レーザーの列などの実際の系の例と結ぶ。

## 限界

- レビューで、新しい結果を示す論文ではない。
- 精読ノートは工学と情報の角度で読んだ記録で、同期の数理やネットワークの統計の構造は、物理の角度のページの側が扱う。

## 創造の5段階モデルとの関連

精読ノートは、工学と情報の角度から [[創造の5段階モデル]] との対応を次のように読む（著者の主張ではない）。つながる前のばらばらの部品（発電所・ルータ・レーザー・計算機）を場に（弱い）、ネットワークの上を伝わる故障・ワームの感染・信号の広がりを波に、近道の割合のように全体の協調が成り立つ境目の条件を縁に、揃ったレーザーの列のように技術として立ち上がる集団の状態を渦に、自分で直るネットワークの設計や最適化の原理のような、使い回せる設計の原理を束に、それぞれ当てている。

## 書誌情報

- 著者: Steven H. Strogatz
- 年: 2001
- 出典: *Nature* 410, 268–276
- **DOI**: [10.1038/35065725](https://doi.org/10.1038/35065725)
- 精読ノートは、著者のサイト（stevenstrogatz.com）に置かれた PDF で読んでいる

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D07-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S13_strogatz-2001.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S13_strogatz-2001.md)

## 出典メモ

- 材料は創造とはの精読ノート（全 9 頁を読んだ記録）だけ。引用はノートの文のまま。
- 写しの置き場（squarespace）は、著者のサイトと同じサイトの番号であることを 2026-11-10 に確かめた。
