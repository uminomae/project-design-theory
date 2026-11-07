---
title: "人間の歌における普遍性と多様性"
description: "Mehr ら (2019) Science 論文。315 社会のテキストと 118 の録音を分析し、音楽が全社会に普遍的に存在し、形式性・覚醒度・宗教性の3次元で行動的文脈が整理でき、音響特徴と機能の対応も普遍的であることを大規模に示した。"
aliases: ["Universality and diversity in human song"]
tags: [source, "D26", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D26/D26-S07_mehr-2019.md"
  manifest_id: "D26-S07"
  oa_url: "https://osf.io/gxzfq_v1/download"
compiled: "2026-04-17"
status: 暫定
review_state: 未レビュー
---

# 人間の歌における普遍性と多様性

> **高校生向けのやさしい解説**
>
> 「音楽はどの文化にもあるの？」「世界中で似ているところと違うところは？」という大きな問いに、文献と録音の大規模データで答えた研究です。315 の社会を調べた結果、音楽はすべての社会に存在しました。さらに、知らない文化の歌を聞いても、聴き手はその歌が踊り用か子守歌か治癒歌か恋歌かを偶然より高い精度で当てられた——音響と機能のあいだに、文化を越えた対応がある、ということが示されました。

## 概要

Mehr ら (2019) は、315 社会の民族誌テキスト（NHS Ethnography）と 30 地域 × 4 歌種 = 118 のフィールド録音（NHS Discography）を組み合わせ、音楽の普遍性と多様性を統計的に検証した。音楽は全社会に存在し（100%、ベイズ信用区間 [0.994, 1]）、行動コンテキストの変動は社会間より社会内のほうが大きい。3つの主成分（形式性・覚醒度・宗教性）が文脈の変動を説明する。文化的に不慣れな聴取者でも、4種類の歌（ダンス・子守歌・治癒・恋）を 42.4%（チャンス 25%）で識別でき、機械分類は 50.8% に達した。旋律・リズムのパターンは少数の単純パターンに収束し、調性は大半の歌に検出された。

## 主要概念

**音楽の普遍性**

> "music appears in every society observed" — 315 社会中 309 でドキュメント確認、残り 6 も他資料で確認 = "100% of a large sample of societies"（Bayesian credible interval: [0.994, 1]）

確率サンプルによる検証であり、選択バイアスを抑えた上で「すべての観察社会に音楽が存在する」と統計的に結論づけた。

**変動は社会間より社会内に大きい**

> 社会内対社会間の分散比: "5.58 (Formality), 6.39 (Arousal), 6.21 (Religiosity)"

音楽の行動的文脈における変動の大部分は、文化間の差ではなく、同一社会内の異なる場面での差として現れる。

**音響特徴は機能を予測する**

> "Human listeners identified song contexts at 42.4% accuracy (chance = 25%); Machine classifiers: 50.8% accuracy"

文化的に不慣れな聴取者でも、歌の機能的文脈（ダンス・子守歌・治癒・恋）を偶然以上の精度で識別する。形式と機能の間に普遍的対応があることを示唆する。

**旋律・リズムのべき乗則**

> "Three small intervals comprise 73% of melodic bigrams; Three simple rhythm ratios comprise 86% of rhythmic bigrams"（median R² = 0.97 旋律; R² = 0.98 リズム）

世界中の音楽で少数の単純パターンが圧倒的に支配的に使われる。これは音楽生成の基底に普遍的な構造的制約が存在することを示唆する。

**調性の普遍性**

> "97.8% of expert listener ratings identified tonal centers; 113 of 118 songs rated tonal by >90% of listeners"

ほぼすべてのサンプルで調性中心が検出され、調性が音楽の普遍的特徴であることが示された。

## 方法

- NHS Ethnography: 確率サンプルファイル（60 社会、30 地域）から 4,709 件の歌の記述を収集、66 変数を手動アノテーション、ベイズ主成分分析
- NHS Discography: 30 地域 × 4 歌種 = 118 録音に対し、機械要約・未訓練聴取者評定・専門家アノテーション・手動転写の4アプローチで分析
- 分類: 交差検証付き LASSO ロジスティック回帰
- バイアス補正: 民族誌者の報告バイアスを MCMC で補正

## プロジェクトデザインとの関連

「文化的多様性と統計的普遍性は両立する」「変動の主軸は文化間より文化内にある」という構造は、プロジェクト設計における「一般化可能なパターンと文脈固有性の同時成立」という観点に重なる。ただし本論文は音楽人類学の記述的研究であり、援用は構造的類比に留まる。

## 書誌情報

- 著者: Samuel A. Mehr, Manvir Singh, Dean Knox, Daniel M. Ketter, Daniel Pickens-Jones, Stephanie Atwood, Christopher Lucas, Nori Jacoby, Alena A. Egner, Erin J. Hopkins, Rhea M. Howard, Joshua K. Hartshorne, Mariela V. Jennings, Jan Simson, Constance M. Bainbridge, Steven Pinker, Timothy J. O'Donnell, Max M. Krasnow, Luke Glowacki
- 年: 2019
- 出典: *Science* 366(6468), eaax0868
- access_status: url-verified
- **DOI**: [10.1126/science.aax0868](https://doi.org/10.1126/science.aax0868)
- **オープンアクセス**: [PMC7001657](https://pmc.ncbi.nlm.nih.gov/articles/PMC7001657/) / [OSF preprint](https://osf.io/gxzfq_v1/download)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D26/D26-S07_mehr-2019.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D26/D26-S07_mehr-2019.md)（manifest_id: `D26-S07`）
- **cs 精読ノート**: [knowledge/source-notes/D26/D26-S07_mehr-2019.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D26/D26-S07_mehr-2019.md)
- **この wiki ページ（pd）**: [wiki/sources/D26_mehr_2019_et-al.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D26_mehr_2019_et-al.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D26/D26-S07_mehr-2019.md`（2026-04-11、Claude Opus 4.6、WebFetch via PMC）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase A）
