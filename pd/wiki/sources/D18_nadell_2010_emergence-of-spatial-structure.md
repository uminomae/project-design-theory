---
title: "細胞集団における空間構造の創発と協力の進化"
description: "Nadell, Foster & Xavier (2010) PLoS Comput Biol 論文。細胞集団における空間的系統分離が成長基質の利用可能性で制御され、活性層が薄いほど協力的細胞が搾取的細胞に勝ちやすくなることを個体ベースシミュレーションで示した。"
aliases: ["Emergence of Spatial Structure in Cell Groups and the Evolution of Cooperation", "lineage segregation"]
tags: [source, "D18", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D18/D18-S10_nadell-2010.md"
  manifest_id: "D18-S10"
  oa_url: "https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1000716&type=printable"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 細胞集団における空間構造の創発と協力の進化

> **高校生向けのやさしい解説**
>
> 細菌のように細胞が集まって増えるとき、酵素を分泌してまわりに栄養をもたらす「協力的な」細胞は、ただ食べるだけの「搾取的な」細胞に負けてしまいそうに思えます。でもシミュレーションすると、栄養が薄い環境では細胞集団が自然に「セクター」や「タワー」のように空間的に分かれていき、協力的細胞同士が固まることで搾取的細胞に勝てる条件が生まれる——という研究です。「空間構造があるから協力が進化する」という洞察。

## 概要

Nadell, Foster & Xavier (2010) は、細胞集団における空間構造の自発的出現と、それが協力の進化に与える影響を計算シミュレーションで研究した。細胞は個体として微視的な影響しか及ぼせないが、数が増えると協力的表現型の発現が環境に大きな影響を与える。著者らは個体ベースのシミュレーションモデルを用いて、成長基質の利用可能性という単一のパラメータが細胞系統の空間的分離（lineage segregation）を制御し、この分離が協力的細胞と搾取的細胞の競争結果を決定することを示した。活性層（active layer）が薄いほど系統分離が強まり、協力的細胞が搾取的細胞に勝ちやすくなる。

## 主要概念

**空間構造は自発的に出現する**

> "If cooperative cells are segregated in space and preferentially interact with each other, they may prevail." (p.1)

> "We argue that cooperative and exploitative cell lineages will spontaneously segregate in space under a wide range of conditions" (p.1)

協力的細胞が空間的に分離し互いに優先的に相互作用すれば、搾取的細胞に勝てる。この空間的分離はアクティブな機構なしに自発的に起こる。

**活性層の深さが系統分離を制御する**

> "cell lineage segregation is inversely related to active layer depth" (p.4, Fig. 4 caption)

> "Lineage segregation within cell groups declines with increasing delta, regardless of how delta is altered." (p.4)

無次元パラメータ delta（活性層の深さの指標）が系統分離を制御。delta が小さい（活性層が薄い）ほど分離が強くなる。

**空間的分離が協力の進化を促進する**

> "Lineage segregation allows cooperative cells to outcompete exploitative cells" (p.6, Fig. 5)

> "When cell lineages segregate into sectors, there is a narrow range of enzyme production rates at which cooperative cells outcompete exploitative cells." (p.6)

系統が空間的にセクターに分離すると、協力的細胞が搾取的細胞に勝てる酵素生産率の範囲が生まれる。強い分離（tower 構造）ではこの範囲がさらに広がる。

**液体環境での予測を超えた協力進化**

> "we predict that localized cooperation will evolve more readily in cell groups than suggested by models and experiments that only consider liquid environments." (p.6)

液体環境のみを考慮したモデルや実験が示唆するよりも、局所的な協力は細胞集団でより容易に進化する。

## 方法

個体ベースシミュレーション（Individual-Based Model）。Java で実装されたフレームワークで、各細胞エージェントが局所的な基質濃度に応じて成長・分裂する。反応-拡散方程式で基質勾配を計算。3 条件（高・中・低基質利用可能性）でシミュレーションを行い、系統分離指数（segregation index）を定量化。協力的細胞（細胞外酵素を分泌）と搾取的細胞（酵素を分泌しない）の競争をシミュレートし、適応度を比較。無次元パラメータ delta を導入して活性層の深さを理論的に整理。

## プロジェクトデザインとの関連

「空間構造の自発的形成が協力の進化的維持を可能にする」という観察は、project-design における「場の構造が個の振る舞いを規定する」という観点と直接接続する。とくに「資源条件の変化（活性層の薄さ）が空間構造を介して協力性を変える」という機構は、組織やコミュニティ設計における「環境条件のチューニングがふるまいを変える」という設計論として転用しうる。

## 書誌情報

- 著者: Carey D. Nadell, Kevin R. Foster, João B. Xavier
- 年: 2010
- 出典: *PLoS Computational Biology* 6(3), e1000716
- access_status: url-verified
- **DOI**: [10.1371/journal.pcbi.1000716](https://doi.org/10.1371/journal.pcbi.1000716)
- **オープンアクセス**: [PLOS Comput Biol PDF](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1000716&type=printable)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D18/D18-S10_nadell-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D18/D18-S10_nadell-2010.md)（manifest_id: `D18-S10`）
- **cs 精読ノート**: [knowledge/source-notes/D18/D18-S10_nadell-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D18/D18-S10_nadell-2010.md)
- **この wiki ページ（pd）**: [wiki/sources/D18_nadell_2010_emergence-of-spatial-structure.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D18_nadell_2010_emergence-of-spatial-structure.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D18/D18-S10_nadell-2010.md`（2026-04-11、claude-opus-4-6, Read PDF 全 9 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
