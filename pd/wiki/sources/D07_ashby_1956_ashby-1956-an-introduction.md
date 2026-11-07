---
title: "サイバネティクス入門 — Ashby"
description: "Ashby (1956) Chapman & Hall 書籍。サイバネティクスの基礎概念を電子工学や高等数学の予備知識なしに体系化した教科書。『差異』を最基底概念とし、必要多様性の法則・拘束・伝送・調整制御を一般理論として展開した。"
aliases: ["An Introduction to Cybernetics", "Law of Requisite Variety"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D07/D07-S11_ashby-1956.md"
  manifest_id: "D07-S11"
  oa_url: "https://archive.org/download/introductiontocy00ashb/introductiontocy00ashb.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# サイバネティクス入門 — Ashby

> **高校生向けのやさしい解説**
>
> 「機械にも生物にも、組織にも共通する『制御』の理論がある」と論じた、サイバネティクスの古典的な教科書です。物質が何でできているかを問わず、「差異」「多様性」「拘束」「制御」だけで一般的な系の振る舞いを記述する道具を作りました。中でも『多様性は多様性によってのみ破壊される（必要多様性の法則）』が有名。複雑な相手を制御するには、こちらも同じくらい多様な手を持っていないとダメ、という洞察。

## 概要

本書はサイバネティクスの基礎概念を、電子工学や高等数学の予備知識なしに理解できるよう体系的に導入する教科書である。3 部構成をとり、第 1 部（機構）では変化・変換・決定論的機械・入力をもつ機械・安定性・ブラックボックスを扱い、第 2 部（多様性）では多様性の量・拘束・伝送・エントロピーを、第 3 部（調整と制御）では生物系の調整・必要多様性の法則・誤差制御レギュレータ・巨大系の制御・調整の増幅を扱う。Ashby はサイバネティクスの最も基本的な概念を「差異」（difference）と定め、系の行動パターンの数学的記述を通じて、物質の種類を問わない一般的制御理論を展開している。

## 主要概念

**サイバネティクスの基礎は『差異』**

> "The most fundamental concept in cybernetics is that of 'difference', either that two things are recognisably different or that one thing has changed with time" (p.9)

サイバネティクスの出発点を物質的構成ではなく「差異」の認識に置く。

**必要多様性の法則**

> "Variety can only be destroyed by variety" (p.206)

レギュレータが外乱を制御するには、外乱の多様性に匹敵する多様性をレギュレータ自身が持たねばならない。サイバネティクスにおける最も有名な定理の一つ。

**エネルギーに開かれ情報に閉じた系**

> Cybernetics studies "systems that are open to energy but closed to information and control" (p.3)

サイバネティクスの対象を、エネルギー的には開かれているが情報と制御に関しては閉じた系として限定。

**拘束は多様性間の関係**

> "A constraint exists between two sets when the variety in one limits the variety in the other" (p.127)

拘束を一方の集合の多様性が他方の多様性を制限する関係として形式的に定義。これにより制御や秩序を「多様性の制限」として統一的に記述する枠組みが成立。

## 方法

数学的形式（集合・変換・ベクトル・マルコフ連鎖）を用い、物理的基盤を捨象した一般的な系の理論を構築。帰納的に具体例を積み上げ演習問題を多用する教科書的アプローチ。

## プロジェクトデザインとの関連

「制御は多様性の問題」「拘束は関係である」というサイバネティクスの基本観念は、project-design における「設計とは何を可能にし何を制限するかの問題」という観点と直接接続する。Doyle-Csete (D07-S12) の architecture-constraints-behavior、Friston (D02-S14) の自由エネルギー原理と並ぶ「系と制御」群の中核参照論文。

## 書誌情報

- 著者: W. Ross Ashby
- 年: 1956
- 出典: *An Introduction to Cybernetics*, Chapman & Hall, London / J. Wiley, New York
- 約 295 ページ
- access_status: url-verified
- **オープンアクセス**: [Internet Archive PDF](https://archive.org/download/introductiontocy00ashb/introductiontocy00ashb.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D07/D07-S11_ashby-1956.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S11_ashby-1956.md)（manifest_id: `D07-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S11_ashby-1956.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S11_ashby-1956.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_ashby_1956_ashby-1956-an-introduction.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D07_ashby_1956_ashby-1956-an-introduction.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D07/D07-S11_ashby-1956.md`（2026-04-10、Claude Opus 4.6, WebFetch via Archive.org DjVu。目次 + 序文 + Ch.1-3 + Ch.7-14 のキーフレーズ抽出）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1d）
