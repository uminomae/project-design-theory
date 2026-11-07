---
title: "オンライン反復学習における言語構造の創発"
description: "Beckner, Pierrehumbert & Hay (2017) J Lang Evol 論文。Kirby らの反復学習実験を Mechanical Turk で大規模再現し、言語の構成性が世代を経て増加するが第 7 世代付近で頭打ちになることと、意味次元による構造化速度の差を示した。"
aliases: ["The emergence of linguistic structure in an online iterated learning task", "iterated learning"]
tags: [source, "D17", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D17/D17-S11_beckner-2017.md"
  manifest_id: "D17-S11"
  oa_url: "https://academic.oup.com/jole/article-pdf/2/2/160/19522987/lzx001.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# オンライン反復学習における言語構造の創発

> **高校生向けのやさしい解説**
>
> 人工言語を最初の人に学ばせ、その出力を次の人に学ばせ……を世代を超えて繰り返すと、言語は徐々に「構成的」（同じ部品を組み合わせて意味を表す）になっていきます。Mechanical Turk で 240 人を 24 本のチェーンに割り振って 10 世代追跡したら、構成性は確かに上がるものの第 7 世代あたりで頭打ち。さらに「形」「色」「数」のうち形だけ早く構造化される——意味の種類によって学習バイアスが違う、ということが分かりました。

## 概要

Beckner ら (2017) は、Kirby, Cornish & Smith (2008) の反復学習実験を Amazon Mechanical Turk でオンライン大規模再現した。240 名の参加者を 24 本の伝達チェーンに配置し、各チェーン 10 世代にわたって人工言語の伝達を追跡。結果、言語は世代を経るにつれて構成性（compositionality）が増加するが、第 7 世代付近で頭打ちとなり、理論的最大値には遠く及ばないことが示された。意味次元ごとに構造化の速度が異なり、形状次元が色や数よりも速く構造化されることが確認された。

## 主要概念

**反復学習で構成性は増加するが頭打ちになる**

> "iterated learning causes languages to become more compositional, although the trend levels off before the 10th generation." (Abstract)

generation の正の係数（0.973, p<0.001）と generation² の負の係数（−0.058, p<0.001）が曲線パターンを示す。

**意味次元によって構造化速度が異なる**

> "Shape dimension significantly outperformed color and number" (Results, Table 5)

形状次元が色・数より速く構成性を獲得。学習者が特定の意味タイプを優先的に構造化する認知バイアスの存在を示唆。

**反復学習は認知バイアス探査の有効ツール**

> "iterated learning approaches provide a helpful empirical tool for exploring cognitive biases that underlie the learning and use of language." (Discussion)

学習者のエラー・革新を含む出力が次世代の入力となる仕組みにより、個人の認知バイアスが世代を超えて累積的に言語構造へ変換される。

**構造喪失（縮退言語）への退行リスク**

> "language learners tend to create identical forms for distinct stimuli, thus leaving certain dimensions of meaning underspecified. When left unchecked, these processes allow languages to evolve into degenerate states where underspecification runs rampant." (Introduction)

構造喪失は全試行の約 10.4% で観察（KCS の実験室条件 2.5-7.5% より高い）。コミュニケーション圧力がない条件では意味区別の喪失への抑止力が弱い。

## 方法

反復学習パラダイムによるオンライン実験。Mechanical Turk で 240 名募集（24 チェーン × 10 世代）。意味空間 3×3×3（形 3 × 色 3 × 数 3 = 27 意味）。訓練条件 12 項目と 15 項目の 2 条件。テスト 27 項目全てで言語形式産出（未学習項目への般化を強制）。構成性の z-score 定量化、混合効果モデル分析。

## プロジェクトデザインとの関連

「個人の小さな認知バイアスが世代を超えて累積し、構造を生む」という観察は、project-design における「集合知の形成過程」と並走する。とくに「7 世代付近で頭打ち」というプラトー現象は、組織やコミュニティでも観察される「変化の限界」を考えるうえでの参照点。意味次元による構造化速度の差は、デザインにおける「先に固まる側面と後まで流動的な側面」の区別にも示唆を持つ。

## 書誌情報

- 著者: Clay Beckner, Janet B. Pierrehumbert, Jennifer Hay
- 年: 2017
- 出典: *Journal of Language Evolution* 2(2), 160–176
- access_status: url-verified
- **DOI**: [10.1093/jole/lzx001](https://doi.org/10.1093/jole/lzx001)
- **オープンアクセス**: [J Lang Evol PDF](https://academic.oup.com/jole/article-pdf/2/2/160/19522987/lzx001.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D17/D17-S11_beckner-2017.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D17/D17-S11_beckner-2017.md)（manifest_id: `D17-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D17/D17-S11_beckner-2017.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D17/D17-S11_beckner-2017.md)
- **この wiki ページ（pd）**: [wiki/sources/D17_beckner_2017_the-emergence-of-linguistic.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D17_beckner_2017_the-emergence-of-linguistic.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D17/D17-S11_beckner-2017.md`（2026-04-11、claude-opus-4-6, WebFetch via HTML）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
