---
title: "階層出現のためのネットワーク形成ゲーム"
description: "Cisneros-Velarde & Bullo (2021) PLOS ONE 論文。エージェントが効用最大化のために関係を形成・切断するネットワーク形成ゲームの均衡として、階層構造（順次的階層）が内生的に出現することを数理的に証明した。"
aliases: ["A network formation game for the emergence of hierarchies", "sequential hierarchy"]
tags: [source, "D25", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D25/D25-S16_cisneros-2021.md"
  manifest_id: "D25-S16"
  oa_url: "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0255990&type=printable"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 階層出現のためのネットワーク形成ゲーム

> **高校生向けのやさしい解説**
>
> 「組織のヒエラルキーは外から押し付けられる」と思いがちですが、著者らは「自分の利益を考えて関係を作ったり切ったりするだけで、階層構造が自然に生まれる」と数理ゲームで証明しました。各人は『協力者』『上位者』『下位者』を選んで関係を結び、階層的地位の報酬と管理コストを天秤にかけて最適化する。すると、レベルごとに 1 本の繋がりを持つ『順次的階層』が必ず出現する——という、組織の形成原理に関する数理研究。

## 概要

Cisneros-Velarde & Bullo はネットワーク形成ゲームの枠組みを用いて、階層構造（hierarchies）が自己利益追求的な個人の意思決定から内生的に出現するメカニズムを数理的に分析した。エージェントは上位者・下位者・協力者との関係を自律的に形成・切断し、各自の効用（協力報酬、階層報酬、管理コスト）を最大化する。著者らは非合意型と合意型の二つの設定について均衡ネットワーク（equilibrium network）の構造を完全に特徴づけ、いずれの場合も階層構造が均衡解として出現することを示した。さらに、確率的な better-response dynamics の下でネットワークが有限時間で均衡に収束することを証明した。

## 主要概念

**階層構造は個人の効用最大化から自発的に出現**

> "We propose a novel network formation game that explains the emergence of various hierarchical structures in groups where self-interested or utility-maximizing individuals decide to establish or severe relationships of authority or collaboration among themselves." (p.1, Abstract)

階層は外部から課されるのではなく、個人が効用を最大化するべく関係の形成・切断を行う結果として内生的に生じる。

**均衡ネットワークは順次的階層の構造**

> "A network G is an equilibrium network for some game G if and only if it is a sequential hierarchy that satisfies the following conditions" (p.10, Theorem 3.1)

非合意型エージェントの場合、均衡ネットワークは必ず順次的階層（各レベルに 1 つの連結成分、各ノードが上位ノードに 1 本のみのエッジを持つ構造）。階層報酬関数の増分と協力報酬・管理コストのバランスがレベル数と各レベルの規模を決定する。

**動的プロセスは確率 1 で均衡に収束**

> "the network formation process ... converges in finite time to an equilibrium network with no critical edges and such that it is connected" (p.15, Theorem 4.4)

エージェントが myopic に better-response dynamics をプレイする場合、任意の初期ネットワークから出発して確率 1 で有限時間内に均衡に収束する。収束先のトポロジーは初期条件と確率過程の実現に依存（経路依存性）。

**合意型エージェントはより多様な階層構造を許容**

> "consensual agents allow the formation of a wider variety of hierarchical structures than non-consensual agents." (p.11, Remark 3.4)

合意型エージェント（関係形成に相手の同意が必要）の場合、非連結な階層構造も均衡として出現するなど、非合意型よりも多様なトポロジーが可能。

## 方法

ネットワーク形成ゲームの数理モデル。効用関数は 3 要素: (i) 下位者・協力者からの報酬 γ、(ii) 階層的地位に応じた報酬 H(level)、(iii) 下位者の管理コスト c。グラフ理論（有向非巡回グラフ、連結成分、凝縮グラフ）で階層を形式化、純粋戦略 Nash 均衡として equilibrium network を導出。

## プロジェクトデザインとの関連

「階層は個人の利己的選択から自発的に立ち上がる」「順次的階層が均衡解」という観察は、project-design における「組織形成の自然な力学」と直接接続する。Mauss (D25-S07) の贈与論、Coleman (D18-S11) の social capital と並ぶ「社会構造の出現」群の数理的範例。

## 書誌情報

- 著者: Pedro Cisneros-Velarde, Francesco Bullo
- 年: 2021
- 出典: *PLOS ONE* 16(8), e0255990
- access_status: url-verified
- **DOI**: [10.1371/journal.pone.0255990](https://doi.org/10.1371/journal.pone.0255990)
- **オープンアクセス**: [PLOS ONE PDF](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0255990&type=printable)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D25/D25-S16_cisneros-2021.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D25/D25-S16_cisneros-2021.md)（manifest_id: `D25-S16`）
- **cs 精読ノート**: [knowledge/source-notes/D25/D25-S16_cisneros-2021.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D25/D25-S16_cisneros-2021.md)
- **この wiki ページ（pd）**: [wiki/sources/D25_cisnerosvelarde_2021_a-network-formation-game.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D25_cisnerosvelarde_2021_a-network-formation-game.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D25/D25-S16_cisneros-2021.md`（2026-04-11、claude-opus-4-6, WebFetch → Read PDF pp.1-20）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1d）
