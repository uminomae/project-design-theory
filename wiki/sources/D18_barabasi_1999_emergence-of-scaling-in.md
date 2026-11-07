---
title: "ランダムネットワークにおけるスケーリングの創発 — BA モデル"
description: "Barabasi & Albert (1999) Science 論文。実在ネットワーク（俳優共演・WWW・電力網・引用）の次数分布がべき乗則 P(k) ~ k^-γ に従うことを示し、『成長』と『優先的接続』の二要素でスケールフリー構造が自己組織化する BA モデルを提示した。"
aliases: ["Emergence of Scaling in Random Networks", "scale-free network", "BA model", "preferential attachment"]
tags: [source, "D18", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D18/D18-S06_barabasi-1999.md"
  manifest_id: "D18-S06"
  oa_url: "https://arxiv.org/pdf/cond-mat/9910332"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# ランダムネットワークにおけるスケーリングの創発 — BA モデル

> **高校生向けのやさしい解説**
>
> 友人関係、ウェブサイトのリンク、論文の引用、空港のフライト網——これらの「ネットワーク」を測ると、ごく一部の点（ハブ）が圧倒的に多くの接続を持ち、大部分の点はわずかな接続しか持たない、という偏った分布になります。Barabasi & Albert は、(1) ネットワークが時間とともに成長する、(2) 新しい点は既に多くの接続を持つ点に繋がりやすい——この 2 つだけで、自然にこの分布（スケールフリー）が生まれることを示しました。「金持ちはさらに金持ちに」がネットワークでも起きる、という観察。

## 概要

Barabasi & Albert (1999) は、遺伝子ネットワークから WWW まで、多様なシステムが複雑なトポロジーを持つネットワークとして記述できることを背景に、実際の大規模ネットワーク（俳優の共演関係、WWW、電力網、引用ネットワーク）の次数分布がべき乗則 P(k) ~ k^(−γ) に従うことを示した。この「スケールフリー」性は、従来の Erdős-Rényi ランダムグラフモデルや Watts-Strogatz スモールワールドモデルでは再現できない。著者らは、(1) ネットワークの成長（新しい頂点の継続的追加）と (2) 優先的接続（既に多くの接続を持つ頂点に接続しやすい）という二つのメカニズムを組み込んだモデル（BA モデル）を提案し、これがスケールフリー分布を再現することを示した。

## 主要概念

**実在ネットワークはスケールフリーである**

> "independent of the system and the identity of its constituents, the probability P(k) that a vertex in the network interacts with k other vertices decays as a power-law, following P(k) ~ k^{-gamma}." (p.2)

システムの種類や構成要素の性質に依らず、次数分布がべき乗則。既存ランダムネットワークモデルでは説明できない普遍的特性。

**成長と優先的接続の両方が必要**

> "The failure of models A and B indicates that both ingredients, namely growth and preferential attachment, are needed for the development of the stationary power-law distribution." (p.6)

成長のみ（モデル A: 指数分布）や優先的接続のみ（モデル B: 定常状態にならない）では不十分。両方の要素が必要。

**「富める者がさらに富む」**

> "older (smaller t_i) vertices increase their connectivity at the expense of the younger (larger t_i) ones, leading with time to some vertices that are highly connected, a 'rich-gets-richer' phenomenon" (p.6)

古い頂点が若い頂点を犠牲にして接続数を増やし、高度に接続されたハブが形成される自己組織化現象。

**普遍的構造の自己組織化**

> "the development of large networks is governed by robust self-organizing phenomena that go beyond the particulars of the individual systems." (p.1, abstract)

大規模ネットワークの発展は、個々のシステムの特殊性を超えたロバストな自己組織化現象に支配される。

## 方法

実証的手法と理論的モデリングの組み合わせ。
- 4 種類の実在ネットワーク（俳優共演、WWW、電力網、引用）の次数分布を測定し、べき乗則を確認
- ER モデルと WS モデルがこれを再現できないことを示す
- 成長 + 優先的接続を組み込んだ BA モデルを構築
- 数値シミュレーションと連続時間近似による mean-field 解析の両方で P(k) = 2m²/k³ (γ=3) を導出
- 対照実験として成長のみ（モデル A）と優先的接続のみ（モデル B）を検証

## プロジェクトデザインとの関連

「全体構造は局所的な接続ルールから自己組織化する」という観念は、project-design における「設計せずに立ち上げる」という創造論的観点と並走する。とくに優先的接続（preferential attachment）は、「実績のある場所に新たな実践が集まる」というプロジェクト形成の構造として転用しうる。Bak らの SOC（D05-S14）と並ぶ「自己組織化」群の参照論文。

## 書誌情報

- 著者: Albert-László Barabási, Réka Albert
- 年: 1999
- 出典: *Science* 286(5439), 509–512
- access_status: url-verified
- **DOI**: [10.1126/science.286.5439.509](https://doi.org/10.1126/science.286.5439.509)
- **オープンアクセス**: [arXiv:cond-mat/9910332](https://arxiv.org/pdf/cond-mat/9910332)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D18/D18-S06_barabasi-1999.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D18/D18-S06_barabasi-1999.md)（manifest_id: `D18-S06`）
- **cs 精読ノート**: [knowledge/source-notes/D18/D18-S06_barabasi-1999.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D18/D18-S06_barabasi-1999.md)
- **この wiki ページ（pd）**: [wiki/sources/D18_barabasi_1999_emergence-of-scaling-in.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D18_barabasi_1999_emergence-of-scaling-in.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D18/D18-S06_barabasi-1999.md`（2026-04-11、claude-opus-4-6, Read PDF 全 8 ページ、arXiv 版）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
