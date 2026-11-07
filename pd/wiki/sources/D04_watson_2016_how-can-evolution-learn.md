---
title: "進化はどのように学習するか — 進化と学習の数学的等価性"
description: "Watson & Szathmáry (2016) TREE 論文。進化と学習の間に単なるアナロジーではなく数学的等価性が存在することを論じ、evo-devo・evo-eco・evo-ego の 3 領域での『相関学習』『教師なし相関学習』『深層相関学習』の対応を体系化した。"
aliases: ["How Can Evolution Learn?", "evolution and learning equivalence"]
tags: [source, "D04", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md"
  manifest_id: "D04-S12"
  oa_url: "http://www.cell.com/article/S0169534715002931/pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 進化はどのように学習するか — 進化と学習の数学的等価性

> **高校生向けのやさしい解説**
>
> 「進化は学習に似ている」と言われることがありますが、Watson と Szathmáry はそれが「単なるたとえ」ではなく「数学的に同じこと」だと示します。集団の中で『有利な型』が増えていくプロセスは、機械学習の『パラメータ更新』と数式上ぴたり対応する。これにより「進化が過去の経験を未来の探索に活かせる」「進化的飛躍は深層学習に対応する」という大胆な主張ができる、という挑発的な論文。

## 概要

本論文は、進化と学習の間に単なるアナロジーではなく数学的等価性（formal equivalence）が存在することを論じるオピニオン論文である。著者らは、自然選択による集団の頻度調整がベイズ学習や相関学習と形式的に等価であることを示した先行研究群を統合し、進化が「過去の経験から学ぶ」メカニズムとして機能しうる条件を論じている。具体的には、(1) evo-devo（発生の進化）における相関学習と進化可能性の獲得、(2) evo-eco（生態関係の進化）における教師なし相関学習と生態系の自己組織化、(3) evo-ego（個体性の進化）における深層相関学習と主要進化遷移の 3 つの領域で、学習理論が進化生物学の未解決問題に新しい理論的ツールを提供することを主張している。

## 主要概念

**進化と学習は形式的に等価**

> "evolutionary processes and simple learning processes are formally equivalent. In particular, learning can be implemented by incrementally adjusting a probability distribution over behaviours [...] similar to the way selection increases the proportion of fit phenotypes in a population" (p.2)

集団における表現型頻度の選択的変化はベイズ更新と数学的に等価。学習理論の形式的限界を進化に転用できる。

**進化は過去の経験から将来を方向づける**

> "Using past experience to favourably direct future behaviour is a hallmark of intelligence. By showing that incremental adjustment in the parameters of an appropriate model is sufficient to achieve this, learning theory puts this behaviour within reach of evolution by natural selection" (p.7)

学習理論は自然選択が「一見知的な」設計を生み出す理由を説明できる。

**進化的遷移は『深層学習』に対応**

> "We think this suggests that such 'deep optimisation' principles might explain how evolutionary transitions facilitate 'deep evolution', that is, the evolution of adaptive biological complexity through successive levels of biological organisation" (p.8-9)

深層学習が複数スケールで相関学習を積むように、個体レベルの選択がより高次の組織レベルでの教師なし学習として機能しうる。

**進化可能性は学習の汎化に対応**

> "evolvability is to evolution as generalisation is to learning." (p.6)

過学習を避けるためのパーシモニー圧がモジュール性を促進し、進化可能性を高める。

**evo-devo, evo-eco, evo-ego の 3 領域**

> "correlation learning, unsupervised correlation learning, and deep correlation learning thus provide a formal way to understand how variation, selection, and inheritance, respectively, might be transformed over evolutionary time" (p.9)

進化の 3 要素（変異・選択・遺伝）がそれぞれ進化の産物によって自己変容する。

## 方法

オピニオン論文。先行研究（MWUA, Harper, Shalizi, Chastain ら）の統合と、進化生物学の未解決問題への学習理論の適用。

## プロジェクトデザインとの関連

「進化と学習が同じ数理構造を持つ」という命題は、project-design における「異なる領域のプロセスが同型構造で記述できる」という観点と直接接続する。Laland ら EES (D04-S04)、Goldenfeld-Woese (D04-S14) と並ぶ進化論の現代的展開の参照論文。

## 書誌情報

- 著者: Richard A. Watson, Eörs Szathmáry
- 年: 2016
- 出典: *Trends in Ecology & Evolution* 31(2), 147–157
- access_status: url-verified
- **DOI**: [10.1016/j.tree.2015.11.009](https://doi.org/10.1016/j.tree.2015.11.009)
- **オープンアクセス**: [Cell Press PDF](http://www.cell.com/article/S0169534715002931/pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md)（manifest_id: `D04-S12`）
- **cs 精読ノート**: [knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md)
- **この wiki ページ（pd）**: [wiki/sources/D04_watson_2016_how-can-evolution-learn.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D04_watson_2016_how-can-evolution-learn.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D04/D04-S12_watson-szathmary-2016.md`（2026-04-10、Claude Opus 4.6, WebFetch → Read PDF 全 11 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
