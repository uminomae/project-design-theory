---
title: "生物システムの自由エネルギー原理（D06 文脈）"
description: "Friston (2012) Entropy 論文。D02 との重複論文だが、cs 側で D06（宇宙論）の文脈でも分類されている。生物システムが無秩序への傾向に抗して組織を維持する自由エネルギー最小化原理を提示。"
aliases: ["A Free Energy Principle for Biological Systems", "FEP"]
tags: [source, "D06", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D06/D06-S14_friston-2012.md"
  manifest_id: "D06-S14"
  oa_url: "https://www.mdpi.com/1099-4300/14/11/2100/pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
note: "D02-S14 と同一論文。D06 文脈の cs 要約を採用"
---

# 生物システムの自由エネルギー原理（D06 文脈）

> **高校生向けのやさしい解説**
>
> 生命がなぜ無秩序に抗して秩序を保てるのかを、フリストンが「自由エネルギー最小化」という単一原理で説明した古典の D06（宇宙論）文脈バージョン。脳の予測符号化から細胞・進化まで貫く統一原理として提示されています。D02-S14 と同じ論文ですが、cs 側で別領域にも分類されているので、こちらは D06 視点での参照ページとなります。

## 概要

本論文は、生物系がなぜ無秩序への自然な傾向に抗して自己組織化できるかを説明する理論的枠組みを提示する。著者は、ランダム動的系の状態空間を外部状態（環境ゆらぎに晒される）と内部状態（決定論的）に分割し、内部状態が変分自由エネルギーを最小化するとき、系が「能動的システム」となり最小作用の原理に従うことを示す。この枠組みは、ベイズ推論・能動推論・最大エントロピー原理を系として導出し、脳の予測符号化から分子生物学・進化まで適用可能な統一原理として提案される。

## 主要概念

**生物系は環境の構造的規則性を蒸留する**

> "biological systems can distil structural regularities from environmental fluctuations...and embody them in their form and internal dynamics." (Sec. 1)

生物系は受動的に環境に反応するのではなく、環境の統計的規則性を抽出して自身の構造と動態に組み込む。

**変分自由エネルギーを最小化する系は最小作用の原理に従う**

> "If the internal states r(t) minimize free energy, then the system conforms to the principle of least action." (Sec. 3, Proposition 1)

論文の中核命題。自由エネルギー最小化と最小作用原理を結びつける。

**生物系は自身の環境モデルを含意し、そのエビデンスを最大化する**

> "biological systems entail a model of their environment and act to maximize the evidence for that model and, implicitly, their own existence." (Sec. 6)

自由エネルギー最小化は自身の生成モデルのエビデンス最大化と等価で、暗黙的に自身の存在維持に相当する。

**精度と複雑性のトレードオフ**

> "minimising free energy corresponds to minimising complexity, while maximising accuracy." (Sec. 4)

情報ボトルネック法との形式的等価性。

**円環的因果性が能動的システムを特徴づける**

> "circular causality arises because internal states depend on external states, while the internal couple back to the external states by changing their flow or motion." (Sec. 2.3)

内部状態と外部状態の相互依存（円環的因果性）が能動的システムの本質。

## 方法

理論論文。シナジェティクス、結合力学系、非線形 Fokker-Planck 方程式、変分推論、ベイズ統計、情報理論、最大エントロピー原理を統合。

## プロジェクトデザインとの関連

D02-S14 と同様。「生命は予測モデルを持つことで存在し続ける」という観点が、project-design における「プロジェクトは自分自身を予測し続けることで存在し続ける」観点と直接接続する。

## 書誌情報

- 著者: Karl Friston
- 年: 2012
- 出典: *Entropy* 14(11), 2100–2121
- access_status: url-verified
- **DOI**: [10.3390/e14112100](https://doi.org/10.3390/e14112100)
- **オープンアクセス**: [MDPI PDF](https://www.mdpi.com/1099-4300/14/11/2100/pdf) / [PMC3510653](https://pmc.ncbi.nlm.nih.gov/articles/PMC3510653/)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D06/D06-S14_friston-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D06/D06-S14_friston-2012.md)（manifest_id: `D06-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S14_friston-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D06/D06-S14_friston-2012.md)
- **この wiki ページ（pd）**: [wiki/sources/D06_friston_2012_a-free-energy-principle.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D06_friston_2012_a-free-energy-principle.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D06/D06-S14_friston-2012.md`（2026-04-10、Claude Opus 4.6, WebFetch via PMC HTML）
- D02-S14 と同一論文。本ページは D06 文脈の cs 要約を採用
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
