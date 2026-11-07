---
title: "意識の統合情報理論（IIT）"
description: "Tononi (2004) BMC Neurosci 論文。意識を『情報を統合するシステムの能力』として定義し、統合情報量 Φ で定量化する理論的枠組みを提示。視床皮質系と小脳の対比からその妥当性を論じた。"
aliases: ["An information integration theory of consciousness", "IIT", "Phi"]
tags: [source, "D08", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D08/D08-S12_tononi-2004.md"
  manifest_id: "D08-S12"
  oa_url: "https://bmcneurosci.biomedcentral.com/counter/pdf/10.1186/1471-2202-5-42"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 意識の統合情報理論（IIT）

> **高校生向けのやさしい解説**
>
> 「意識とは何か？」という難問に、トノーニは「情報をどれくらいまとめあげられるか」で測ろうと提案しました。光を感じるダイオードは「明るい/暗い」を区別はできますが、見ている自覚はありません。一方、人の脳は膨大な異なる体験のレパートリーを持ちつつ、一瞬一瞬の体験は一つに統合されている。この「区別できる」と「統合される」を同時に満たす度合い Φ が意識の量である、というのが理論の核心です。

## 概要

Tononi (2004) は、意識を「情報を統合するシステムの能力」として定義し、統合情報量 Φ で定量化する理論的枠組みを提示する。意識の現象学的特性として「分化（differentiation: 膨大な数の異なる意識経験が利用可能であること）」と「統合（integration: 各経験が統一されていること）」の 2 つを挙げ、これらを Φ で同時に捉える。理論は「コンプレックス（Φ > 0 を持ち、より大きな上位集合に含まれない要素の部分集合）」の概念を導入し、意識経験の質（クオリア）をクオリア空間として特徴づける。視床皮質系が高い Φ を生成し意識を支える一方、小脳が意識を生まない理由を、この枠組みから説明する。

## 主要概念

**意識は情報統合能力に対応する**

> "consciousness corresponds to the capacity of a system to integrate information" (Abstract)

意識の程度はシステムが統合できる情報量で決まる。これを定量化する尺度が統合情報量 Φ。

**分化と統合の二特性**

> "differentiation -- the availability of a very large number of conscious experiences; and integration -- the unity of each such experience" (Presentation of the hypothesis)

光ダイオードはオン/オフを区別できるが「見る」体験はない。分化だけでは不十分で統合が必要——という現象学的出発点。

**視床皮質系と小脳の対比**

> "On the information side, the thalamocortical system comprises a large number of elements that are functionally specialized...On the integration side, the specialized elements of the thalamocortical system are linked by an extended network of intra- and inter-areal connections that permit rapid and effective interactions." (Testing the hypothesis)

> "The organization of the connections is such that individual patches of cerebellar cortex tend to be activated independently of one another, with little interaction possible between distant patches." (Testing the hypothesis)

視床皮質系は機能特化した多数要素が広範に結合されるため高 Φ。小脳は独立パッチで相互作用が乏しいため、多数の小さなコンプレックスしか作らない。

**クオリアは情報関係の空間**

> "the elements of a complex constitute the dimensions of an abstract relational space, the qualia space" (Presentation of the hypothesis)

意識経験の質は、コンプレックス要素間の実効的情報関係が成す抽象的関係空間として記述される。

**意識は基本量・段階的・人工物にも可能**

> "consciousness is a fundamental quantity, that it is graded, that it is present in infants and animals, and that it should be possible to build conscious artifacts." (Implications of the hypothesis)

理論の帰結として、意識は二値的ではなく段階的、乳児や動物にも存在し、非神経的素材で意識的人工物を構築することも原理的には可能。

## 方法

純粋に理論的・計算論的な論文。実験データは含まない。
- 意識の現象学的特性（分化と統合）から出発し公理的に理論を構築
- 実効的情報を最大エントロピー置換と相互情報量で定義
- 最小情報二分割（minimum information bipartition, MIB）の概念を導入し Φ を定義
- コンピュータモデルとシミュレーションで含意を検証
- 神経科学の既知知見（視床皮質系 vs 小脳、睡眠・麻酔の効果）との整合性を検討

## プロジェクトデザインとの関連

「区別できる多様性と統合された一性が同時に成立する度合い」を一つの量で測ろうとする発想は、project-design における「個別性と全体性の境界」の議論と並走する。コンプレックスの定義（Φ > 0 を持ち、より大きな包含集合に飲み込まれない部分集合）は、プロジェクトの「個」が立ち上がる条件を考えるうえでの参照枠を提供する。ただし IIT は意識の物理的記述を目的としており、援用は構造的類比に留まる。

## 書誌情報

- 著者: Giulio Tononi
- 年: 2004
- 出典: *BMC Neuroscience* 5, 42
- access_status: url-verified
- **DOI**: [10.1186/1471-2202-5-42](https://doi.org/10.1186/1471-2202-5-42)
- **オープンアクセス**: [BMC Neurosci PDF](https://bmcneurosci.biomedcentral.com/counter/pdf/10.1186/1471-2202-5-42)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D08/D08-S12_tononi-2004.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D08/D08-S12_tononi-2004.md)（manifest_id: `D08-S12`）
- **cs 精読ノート**: [knowledge/source-notes/D08/D08-S12_tononi-2004.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D08/D08-S12_tononi-2004.md)
- **この wiki ページ（pd）**: [wiki/sources/D08_tononi_2004_an-information-integration-theory.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D08_tononi_2004_an-information-integration-theory.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D08/D08-S12_tononi-2004.md`（2026-04-10、Claude Opus 4.6, WebFetch via PMC）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-1）
