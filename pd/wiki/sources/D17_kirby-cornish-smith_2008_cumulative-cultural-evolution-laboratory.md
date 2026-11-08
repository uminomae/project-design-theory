---
title: "実験室での累積的文化進化：人間言語の構造的起源への実験的アプローチ"
description: "Kirby, Cornish & Smith (2008, PNAS)。iterated learning パラダイムを初めて実験的に実装し、個々の学習者の意図なしに言語が世代連鎖を通じて累積的に構造化される「意図なき設計（design without a designer）」を実証した。"
aliases: ["Cumulative cultural evolution in the laboratory", "iterated learning", "Kirby 2008"]
tags: [source, "D17", "原典解説"]
source:
  repo: "creation-space"
  manifest_id: "D17-S12"
  note: "raw PDF は cs ローカルなし。web.archive.org 経由で PNAS full PDF（archive スナップショット）を取得"
compiled: "2026-06-16"
status: 暫定
review_state: 未レビュー
---

# 実験室での累積的文化進化：人間言語の構造的起源への実験的アプローチ

> **高校生向けのやさしい解説**
>
> 言語の文法は、誰かが「こう決めよう」と意図して作ったわけではありません。ではなぜ、ランダムな音の並びが何世代もかけて整った「ルールのある言語」になるのでしょう？Kirby らは実験室の中で「異星人言語」を作り、80人の学生に順番に学ばせる実験をしました。驚くことに、参加者の誰も意識していないのに、10世代後には音と意味が体系的に対応する言語が自然に生まれていました。進化が「設計者なき設計」を生むように、言語も「意図なき設計」で構造化されます。

## 概要

Kirby, Cornish, Smith (2008) は **iterated learning**（反復学習）と呼ばれる文化伝達過程を実験室内で初めて実装し、「個々の学習者の意図なしに、言語が世代連鎖を通じて累積的に構造化される」ことを経験的に示した研究である。80名の大学生を 8 本の diffusion chain（各 10 世代）に配置し、27個の視覚刺激（形 × 色 × 動き）にランダムな音節列ラベルを割り当てた架空言語を世代ごとに学習・再生産させた。SEEN 集合（14ペア）で訓練し UNSEEN 集合（13ペア）を含む全27個でテストする **transmission bottleneck** を人為的に作ることで、伝達誤りが減衰しつつ構造度が上昇することを示した。

実験1では **systematic underspecification**（少数のシグナルが多数の意味を系統的にカバー）が、実験2では **compositionality**（色・形・動きに対応する3形態素の連結）が出現した。どちらも参加者の意図とは独立に生じる——この「設計者なき設計 (design without a designer)」が論文の核心命題である。

## 主要概念

**Iterated learning パラダイム**

各世代の最終テスト出力が次世代の訓練データとなる連鎖学習実験。世代ごとに「見ていない刺激に対して信号を一般化する」必要が生じ、rote 学習は不可能になる。この不完全な伝達が **bottleneck** として機能し、言語に構造を課す進化的圧力になる。

**Systematic underspecification（実験1）**

10世代を経ると、27通りの意味が少数の信号だけで体系的に表される。動きが「水平→tuge」「螺旋→poi」「バウンド→形状依存」の3クラスに収束した例が典型。伝達しやすさの圧力だけが働くと、意味側の区別が部分的に崩壊することで学習コストが下がる。

> "By generation 8, and also for generations 9 and 10, the language has settled on a simple system of regularities whereby everything that moves horizontally is *tuge*, all spiraling objects are *poi*, and bouncing objects are divided according to shape."

**Compositionality（実験2）**

「同一信号が複数の意味を指す対」を訓練データから除去するフィルタを加えると、代わりに色・形・動きに対応する3つの形態素を連結する組み合わせ的言語が出現する。これは **learnability**（伝達しやすさ）と **expressivity**（曖昧さなく意味を区別する力）という2圧力の均衡解として生まれる。

> "The result is the evolution of exactly the type of structure that optimizes both these competing constraints: compositionality."

**意図なき設計 (Design without a designer)**

参加者の大半は「自分が他者の出力を学習している」ことすら気付いていなかった。それでも言語は10世代で構造化される——生物進化が設計者なしに「設計されたように見える」複雑さを産むように、文化進化もそれ自体の論理で言語構造を生む。

> "Just as biological evolution can deliver the appearance of design without the existence of a designer, so too can cultural evolution."

## 創造（creation-space）との関連

本論文は D17「言語の発生」領域において**5段階すべてが強く現れる**経験的論拠を提供する。特に **渦→束** の遷移が鮮明である。

- **場 (Field)**：27通りの形×色×動きが意味側の組合せ空間を構成し、信号側がそれを写す余地を作る
- **波 (Wave)**：10世代の transmission error 減衰と構造度上昇が時間波として現れる
- **縁 (Relation)**：SEEN/UNSEEN の bottleneck が進化的圧力の境界として機能する
- **渦 (Vortex)**：invisible hand による非意図的な構造立ち上がり（参加者は全員無自覚）
- **束 (Bundle)**：実験1では underspecification 言語、実験2では compositional 言語という 2 種の「束」が2つの異なる圧力条件に応じて出現する

後続研究として [[D17_raviv_2020_social-network-linguistic-structure|社会ネットワーク構造と言語構造の創発]] (Raviv 2020, D17-S13) が iterated learning パラダイムを同期的グループコミュニケーションに拡張している。

## 書誌情報

- 著者: Simon Kirby, Hannah Cornish, Kenny Smith（エジンバラ大学 / ノーサンブリア大学）
- 年: 2008
- 出典: *Proceedings of the National Academy of Sciences*, Vol. 105, No. 31, pp. 10681–10686
- access_status: raw-confirmed
- **DOI**: [10.1073/pnas.0707835105](https://doi.org/10.1073/pnas.0707835105)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: ローカル raw PDF なし（web.archive.org 経由 PNAS full PDF；manifest_id: `D17-S12`）
- **cs 精読ノート**: [knowledge/source-notes/D17/D17-S12_kirby-cornish-smith-2008.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D17/D17-S12_kirby-cornish-smith-2008.md)
- **この wiki ページ（pd）**: [wiki/sources/D17_kirby-cornish-smith_2008_cumulative-cultural-evolution-laboratory.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D17_kirby-cornish-smith_2008_cumulative-cultural-evolution-laboratory.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 本ページは cs 精読ノート（D17-S12_kirby-cornish-smith-2008.md）を一次入力として生成した。原典 raw PDF は web.archive.org 経由で cs 側が取得し精読（全6頁）。
- 生成: 2026-06-16, Claude Sonnet 4.6（wiki-gen inbox 4月分整理、5段階対応は cs source-note §5 を参照）。
