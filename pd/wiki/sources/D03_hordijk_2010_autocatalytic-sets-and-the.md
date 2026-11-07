---
title: "自己触媒集合と生命の起源 — RAF 集合の数学"
description: "Hordijk, Hein & Steel (2010) Entropy レビュー。生命の起源シナリオに共通する自己触媒的サイクルを RAF（Reflexively Autocatalytic and F-generated）集合の数学的枠組みで体系化。触媒活性が線形成長するだけで RAF 集合が高確率で出現することを示した。"
aliases: ["Autocatalytic Sets and the Origin of Life", "RAF set", "catalytic closure"]
tags: [source, "D03", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D03/D03-S14_hordijk-2010.md"
  manifest_id: "D03-S14"
  oa_url: "https://www.mdpi.com/1099-4300/12/7/1733/pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 自己触媒集合と生命の起源 — RAF 集合の数学

> **高校生向けのやさしい解説**
>
> 生命はどう始まったか？ 多くの仮説に共通するのは「分子同士が互いに触媒となって反応の輪が閉じる『自己触媒集合』が生まれた」という考え方です。Kauffman の元の議論には『触媒活性が指数的に増えないとダメ』という批判がありましたが、Hordijk らは数学的枠組み RAF を作って『線形に増えるだけで十分』と示しました。生命起源の数理。

## 概要

生命の起源における自己触媒集合（autocatalytic set）の役割を概観するレビュー論文。RNA 世界仮説、前生物的代謝、そして RNA からタンパク質・DNA への移行という起源シナリオの各段階で自己触媒的サイクルが登場することを指摘する。著者らは自己触媒集合の自発的出現の可否に関する批判と支持の双方を整理したうえで、自ら開発した RAF（Reflexively Autocatalytic and F-generated）集合の数学的枠組みを用いて、触媒活性が系のサイズに対して線形に増加するだけで RAF 集合が高確率で出現することを示し、生命起源における自己触媒集合の妥当性を主張する。

## 主要概念

**生命起源の各シナリオに共通して自己触媒集合**

> "Although often quite different in their details, one common element which most of these scenarios have is the appearance of an autocatalytic set or cycle at some stage." (p.1733)

前生物的代謝、RNA 世界、タンパク質・DNA 出現のいずれの段階においても、自己維持的な触媒反応ネットワークの成立が鍵となる。

**RAF 集合の出現には線形成長で足りる**

> "only a linear growth rate (with system size) in catalytic activity is sufficient for RAF sets to appear with high probability" (p.1736)

Kauffman の元の議論が指数的成長を要求すると批判されたのに対し、著者らの形式的枠組みでは線形成長で十分。必要な触媒活性は分子あたり平均 1-2 反応で、生化学的に現実的。

**RAF は生命の必要条件だが十分条件ではない**

> "the existence of an RAF, while necessary for the emergence of self-sustaining life, is far from sufficient" (p.1739)

限界として (1) 反応物の濃度・化学量論・阻害反応を無視、(2) 反応の物理的封じ込め問題（containment problem）を扱わない、(3) 前生物系における遺伝と自然選択を直接扱わない、の 3 点を明示。

**RAF の形式的定義**

> "an RAF set formally captures the notion of 'catalytic closure', i.e., a self-sustaining set supported by a steady supply of (simple) molecules from some food set." (p.1736)

RAF: (1) 全反応が集合内の分子により触媒される（RA: Reflexively Autocatalytic）、(2) 全反応物が食物集合 F から集合内の反応で構成可能（F-generated）、を同時に満たす。超サイクル、集合的自己触媒集合などはすべて RAF の特殊例。

## 方法

レビュー + 形式的数学枠組み。触媒反応系（CRS）と RAF 集合を数学的に定義（先行研究で導入）。任意の CRS に RAF 集合が含まれるかを判定し最小 RAF を発見する多項式時間アルゴリズムを開発。平均計算時間は反応ネットワークサイズに対して準二次。

## プロジェクトデザインとの関連

「閉じた自己維持的なネットワークが生命の本質」「触媒活性は線形成長で十分」という観察は、project-design における「自己組織的なネットワークが立ち上がる条件」の数理的探究と接続する。Lotka (D03-S13) の物理的生物学、Pearson (D03-S11) の自己複製スポット、Ameta ら (D03-S15) の ACS と並ぶ「生命の起源・自己組織化」群の参照論文。

## 書誌情報

- 著者: Wim Hordijk, Jotun Hein, Mike Steel
- 年: 2010
- 出典: *Entropy* 12(7), 1733–1742
- access_status: url-verified
- **DOI**: [10.3390/e12071733](https://doi.org/10.3390/e12071733)
- **オープンアクセス**: [MDPI PDF](https://www.mdpi.com/1099-4300/12/7/1733/pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D03/D03-S14_hordijk-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S14_hordijk-2010.md)（manifest_id: `D03-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D03/D03-S14_hordijk-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S14_hordijk-2010.md)
- **この wiki ページ（pd）**: [wiki/sources/D03_hordijk_2010_autocatalytic-sets-and-the.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D03_hordijk_2010_autocatalytic-sets-and-the.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D03/D03-S14_hordijk-2010.md`（2026-04-10、Claude Opus 4.6, WebFetch via Wayback Machine、全 10 ページ読了）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1a）
