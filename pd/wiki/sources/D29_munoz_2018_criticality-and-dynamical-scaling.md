---
title: "生物系における臨界性と動的スケーリング"
description: "Muñoz (2018) Rev Mod Phys Colloquium。生物系の一部が『不安定の縁』（秩序と無秩序の中間、相転移の臨界点近傍）で動作することで機能的利益を得るという『criticality hypothesis』を、神経活動・遺伝子調節網・群れ・SOC モデルなど多様な事例で総説した。"
aliases: ["Criticality and dynamical scaling in living systems", "criticality hypothesis", "edge of chaos"]
tags: [source, "D29", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md"
  manifest_id: "D29-S13"
  oa_url: "https://arxiv.org/pdf/1712.04499"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 生物系における臨界性と動的スケーリング

> **高校生向けのやさしい解説**
>
> 脳・群れ・遺伝子ネットワークなど、生き物のシステムは「秩序すぎず無秩序すぎない」絶妙な臨界状態で動いていることが、ここ 20 年の研究で次々示されてきました。Muñoz はこの「臨界性仮説」を物理学者の視点で総説します。臨界状態だと刺激への感度が高く、計算能力も高く、揺らぎへの耐性と適応性のバランスが最適化される——ただし証拠は決定的ではなく、検証はまだ途上、と慎重に位置付けます。

## 概要

生物系の一部（部分・側面・グループ）が「不安定の縁」、すなわち秩序と無秩序の中間、相転移の臨界点近傍で動作することで機能的利益を得るのではないか——この celebrated and controversial hypothesis を統計物理の立場から総説した Colloquium。Muñoz は、臨界性が摂動へのロバストネスと適応柔軟性の最適バランスを与え、計算能力の向上・動的レパートリの増加・刺激感度の増大・相関長の発散などを伴うことを論じ、神経活動・遺伝子調節網・細胞集団・鳥群・昆虫群・神経発達など多様な生物系で臨界性の経験的示唆（べき乗則分布、動的スケーリング、長距離相関）が報告されてきた経緯を整理する。理論的には平衡相転移と非平衡相転移の両方を導入し、contact process・branching process・directed percolation・Griffiths phase・self-organized criticality (SOC) の各モデルを生物系への応用と共に解説する。

## 主要概念

**生物系は臨界点近傍で機能的利益を引き出す**

> "A celebrated and controversial hypothesis suggests that some biological systems —parts, aspects, or groups of them— may extract important functional benefits from operating at the edge of instability, halfway between order and disorder, i.e. in the vicinity of the critical point of a phase transition." (Abstract, p.1)

> "Criticality has been argued to provide biological systems with an optimal balance between robustness against perturbations and flexibility to adapt to changing conditions, as well as to confer on them optimal computational capabilities, huge dynamical repertoires, unparalleled sensitivity to stimuli, etc." (Abstract, p.1)

「criticality hypothesis」が本 Colloquium の中核命題。

**スケール不変性とべき乗則**

臨界点における物理量分布が P(x) ∝ x^(−α) のべき乗則となり、特徴的スケールを持たない。ただし「べき乗則の発見それ自体が臨界性の証拠ではない」とも明言。より厳格な実験設計と統計検定が必要。

**非平衡相転移**

contact process（活性ノードが伝播率 λ で広がり率 μ で失活する単純モデル）の平均場解析で、λc = 1 を境に吸収相と活性相が分岐する。臨界点で密度減衰が power-law ρ(t) ∼ t^(−1) となり、活動雪崩のサイズ・継続時間分布が power-law（α=2, τ=3/2; mean-field directed percolation class）を示す。

**自己組織化臨界性（SOC）**

Bak-Tang-Wiesenfeld sandpile 以降の展開として、conservative dynamics 条件と separation of timescales 条件の緩和が「self-organization to criticality (SOC)」と「self-organized quasi-criticality (SOqC)」を生む。

**neuronal avalanches が最も顕著な経験的証拠**

> "Beggs and Plenz (2003) succeeded at revealing the internal spatio-temporal organization of the above-mentioned outbursts of neural activity. ... avalanche sizes ... and durations were found to be distributed as power-laws with exponent τ ≈ 3/2 and α ≈ 2" (Sec. IV.A.2, p.12)

ラット皮質の自発活動（D08-S11 Beggs-Plenz 参照）が、有限サイズスケーリングに従うべき乗則アバランシェを示す。

## 方法

総説論文。平衡相転移と非平衡相転移の両方の理論枠組みを導入し、contact process・branching process・directed percolation・Griffiths phase・SOC の各モデルを系統的に解説。多様な生物系（神経・遺伝子・細胞・鳥群・昆虫群）での臨界性の経験的示唆を整理。理論と経験の接続を強調しつつ、実験的検証の必要性を明確にする。

## プロジェクトデザインとの関連

「生物系の機能は『不安定の縁』で発揮される」という構図は、project-design における「動的バランス」「変化と安定の間にこそ創発が起きる」という観点と直接接続する。Bak らの SOC（D05-S14）、Beggs-Plenz のニューロン雪崩（D08-S11）、Hesse-Gross の SOC（D14-S07）と並ぶ「自己組織化臨界」群の中心参照論文。

## 書誌情報

- 著者: Miguel A. Muñoz (Universidad de Granada)
- 年: 2018
- 出典: *Reviews of Modern Physics* 90, 031001
- access_status: url-verified
- **DOI**: [10.1103/RevModPhys.90.031001](https://doi.org/10.1103/RevModPhys.90.031001)
- **オープンアクセス**: [arXiv:1712.04499](https://arxiv.org/pdf/1712.04499)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md)（manifest_id: `D29-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md)
- **この wiki ページ（pd）**: [wiki/sources/D29_munoz_2018_criticality-and-dynamical-scaling.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D29_munoz_2018_criticality-and-dynamical-scaling.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D29/D29-S13_munoz-2018-criticality-living-systems.md`（2026-04-14、Claude Opus 4.6, WebFetch → Read PDF。Sec. I-V + Appendices A-D 冒頭を読了、約 30 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-4）
