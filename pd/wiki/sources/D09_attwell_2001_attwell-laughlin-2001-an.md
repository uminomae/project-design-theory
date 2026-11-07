---
title: "脳灰白質の信号伝達のエネルギー収支"
description: "Attwell & Laughlin (2001)。脳灰白質の興奮性信号伝達に要するエネルギーを解剖・生理データから定量化し、活動電位とシナプス後効果が大半を占めることを示した。エネルギー効率が神経符号と配線の制約となり、分散符号（同時活動<15%）を予測。"
aliases: ["An energy budget for signaling in the grey matter of the brain"]
tags: [source, "D09", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D09-S02"
  oa_url: "https://journals.sagepub.com/doi/pdf/10.1097/00004647-200110000-00001"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# 脳灰白質の信号伝達のエネルギー収支

> **高校生向けのやさしい解説**
>
> 脳はとても燃費の悪い臓器で、体重の数%なのに大量のエネルギーを使います。では、その電気信号のやりとりに、どこでどれだけエネルギーを使っているのか？ この論文は解剖と生理のデータから「予算表」を作りました。すると、神経の発火（活動電位）とシナプスでの受け渡しが大半を占めることがわかった。エネルギーが限られているからこそ、脳は「一度にごく一部の神経だけを使う」効率のよい使い方（分散符号）を選んでいる、と予測します。

## 概要

David Attwell と Simon Laughlin (2001) は、げっ歯類の脳灰白質における興奮性信号伝達のエネルギー消費を、解剖学的・生理学的データから定量的に分析した。**活動電位 (47%)** と **グルタミン酸のシナプス後効果 (34%)** が大半を占め、静止電位が13%、グルタミン酸再取り込みはわずか3%。エネルギー消費は活動電位の発火頻度に強く依存し、皮質ニューロンあたり毎秒1発火の増加で酸素消費が 145 mL/100g 灰白質/h 増える。信号伝達に費やされるエネルギーは脳の総エネルギーの大きな割合を占めるため、**エネルギー効率の良い神経符号と配線パターン**が選好される。著者らの推定は、エネルギー消費を抑えつつ固定数のニューロンからより大きな計算能力を引き出すために、**分散符号（同時活動ニューロン ≤15%）** の使用を予測する。fMRI 信号もシナプス電流と活動電位伝播に伴うエネルギー消費の変化に支配される可能性が高い。

## 主要概念

**信号伝達のエネルギー予算配分**

> "Action potentials and postsynaptic effects of glutamate are predicted to consume much of the energy (47% and 34%, respectively), with the resting potential consuming a smaller amount (13%), and glutamate recycling using only 3%."

エネルギーの行き先を定量化し、活動電位とシナプス伝達が支配的であることを示す。

**エネルギー制約が神経符号を選ぶ**

> "this favors the use of energy efficient neural codes and wiring patterns ... predict the use of distributed codes, with ≤15% of neurons simultaneously active"

限られたエネルギーが、脳の情報表現の様式（疎・分散符号）を制約・形成する。

**fMRI 信号の物理的基盤**

機能的MRIの信号が、シナプス電流と活動電位伝播のエネルギー消費変化に対応するという含意。脳機能画像の解釈基盤を与える。

## 方法

定量的モデリング。解剖学的データ（シナプス密度・ニューロン数）と生理学的データ（イオン流量・ATP消費）から、信号伝達の各過程のエネルギーコストを積算する「エネルギー予算」アプローチ。

## 創造（creation-space）との関連

「限られた資源（エネルギー）の制約が、システムの情報表現様式（疎・分散符号）を形づくる」という構図は、創造が無制約の自由ではなく**制約下での効率的な構造選択**として立ち上がることを示す。創造の5段階における **束（方向・集合：制約による構造化）** に対応する。D08（神経）の Miller & Cohen 前頭前野統合理論、Dehaene 意識論と同じ「脳の構造的制約と機能」群の参照。

## 書誌情報

- 著者: David Attwell, Simon B. Laughlin
- 年: 2001
- 出典: *Journal of Cerebral Blood Flow & Metabolism* 21(10), 1133–1145
- access_status: url-verified
- **DOI**: [10.1097/00004647-200110000-00001](https://doi.org/10.1097/00004647-200110000-00001)
- **オープンアクセス**: [SAGE PDF](https://journals.sagepub.com/doi/pdf/10.1097/00004647-200110000-00001)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D09-S02`）
- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 `wiki-cross-check.mjs` で照合）
- **この wiki ページ（pd）**: [wiki/sources/D09_attwell_2001_attwell-laughlin-2001-an.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D09_attwell_2001_attwell-laughlin-2001-an.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 一次入力: PubMed 公式 abstract（PMID 11598490, 2026-06-14 efetch）。出版社 PDF は SAGE で本文全文は本セッション未読。
- cs source-note は未生成（manifest D09-S02 として url-verified 登録のみ）。生成後に `wiki-cross-check.mjs` で矛盾検査を再実行する。
- 生成: 2026-06-14, Claude Opus 4.8（Main 逐次）
