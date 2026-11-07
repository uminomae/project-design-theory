---
title: "自然選択の遺伝学的理論 — Fisher の数理進化論"
description: "Fisher (1930) Clarendon Press 書籍。融合遺伝の論理的困難を示しメンデル遺伝下での変異保存を論証。Malthusian パラメータと繁殖価を導入し、自然選択の数理的定式化の基盤を構築した進化遺伝学の古典。"
aliases: ["The Genetical Theory of Natural Selection", "Fisher's fundamental theorem", "reproductive value"]
tags: [source, "D04", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D04/D04-S13_fisher-1930.md"
  manifest_id: "D04-S13"
  oa_url: "https://archive.org/download/geneticaltheoryo031631mbp/geneticaltheoryo031631mbp.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 自然選択の遺伝学的理論 — Fisher の数理進化論

> **高校生向けのやさしい解説**
>
> ダーウィンの時代に信じられていた「混合遺伝（融合遺伝）」だと、世代を経るうちに変異が薄まって消えてしまう——これがダーウィン理論の論理的弱点でした。Fisher は「メンデル遺伝（粒子遺伝）」だと変異が自然に保たれることを数学で示し、自然選択を厳密な数理理論に書き直した古典中の古典。集団遺伝学の出発点となった本です。

## 概要

Fisher は自然選択の理論をダーウィンの進化論全体から切り離し、独立に証明可能な因果メカニズムとして数理的に扱うことを目的としている。Chapter I では、ダーウィンが受容した融合遺伝が論理的困難を生むことを示し、メンデルの粒子遺伝の下では変異が自然に保存されることを論証する。Chapter II では集団の増加率を記述する Malthusian パラメータと、各年齢の個体が将来世代の祖先にどれだけ寄与するかを測る繁殖価（reproductive value）を定義し、自然選択の数理的定式化の基盤を構築する。

## 主要概念

**融合遺伝は変異を急速に消滅させる**

> "with blending inheritance bisexual reproduction will tend rapidly to produce uniformity" (p.2)

融合遺伝の下では子孫世代の分散は親世代の正確に半分に縮小する。観察される変異を維持するには絶えず新たな変異の原因が必要。

**粒子遺伝の下では変異が自然に保存される**

> "there is no inherent tendency for the variability to diminish" (p.9)

メンデルの粒子遺伝では遺伝子頻度はランダム交配の下で世代を超えて安定し、変異の維持に必要な突然変異率は融合遺伝の数千分の一で足りる。

**自然選択は進化そのものではなく独立した因果原理**

> "Natural Selection is not Evolution" (Preface, p.vii)

自然選択の理論を進化の事実全体と混同することを戒め、「独立に証明可能な因果メカニズム」として厳密に扱うことを宣言。

**自然選択を厳密な数学的定理として**

> "state the principle of Natural Selection in the form of a rigorous mathematical theorem, by which the rate of improvement of any species...is determined by its present condition" (p.22)

種の適応度の改善速度がその時点の遺伝的分散によって決定されるという原理を、厳密な数学的定理として述べることができる（後の「Fisher の基本定理」）。

**繁殖価**

> "To what extent will persons of this age...contribute to the ancestry of future generations?" (p.27)

繁殖価（reproductive value）は、ある年齢の個体が将来の子孫にどれだけ寄与するかの現在価値。Fisher は利子率の比喩で説明する。

## 方法

数理的・統計学的アプローチ。集団遺伝学の解析、確率論、変分法。具体的なデータ分析より概念枠組みと数式の導出が中心。

## プロジェクトデザインとの関連

「個別現象を厳密な数理定理として書き直す」という方法論は、project-design における「現象の構造を抽出して定式化する」という方針の象徴的事例。Lotka (D03-S13) の物理的生物学と並ぶ、生物学の数理化の中核参照論文。

## 書誌情報

- 著者: R. A. Fisher
- 年: 1930
- 出典: *The Genetical Theory of Natural Selection*, Oxford: At the Clarendon Press
- 約 308 ページ
- access_status: url-verified
- **オープンアクセス**: [Internet Archive PDF](https://archive.org/download/geneticaltheoryo031631mbp/geneticaltheoryo031631mbp.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D04/D04-S13_fisher-1930.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D04/D04-S13_fisher-1930.md)（manifest_id: `D04-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D04/D04-S13_fisher-1930.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D04/D04-S13_fisher-1930.md)
- **この wiki ページ（pd）**: [wiki/sources/D04_fisher_1930_fisher-1930-the-genetical.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D04_fisher_1930_fisher-1930-the-genetical.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D04/D04-S13_fisher-1930.md`（2026-04-10、Claude Opus 4.6, WebFetch via archive.org djvu.txt、Preface + Ch.I + Ch.II 前半を読了）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
