---
title: "ダークマターと宇宙構造 — LCDM 標準モデルの 40 年史"
description: "Frenk & White (2012) Annalen der Physik 招待レビュー。1970 年代のダークマターハロー提唱から 2012 年時点までの宇宙構造形成理論の発展史を、数値シミュレーションの役割とダークマター性質に焦点を当てて概観した教科書的レビュー。"
aliases: ["Dark matter and cosmic structure", "LCDM"]
tags: [source, "D06", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D06/D06-S12_frenk-white-2012.md"
  manifest_id: "D06-S12"
  oa_url: "https://arxiv.org/pdf/1210.0544"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# ダークマターと宇宙構造 — LCDM 標準モデルの 40 年史

> **高校生向けのやさしい解説**
>
> 宇宙の物質の 8 割を占める「ダークマター」が、銀河や銀河団といった巨大構造をどう作ってきたか——を 40 年の研究史として整理した招待レビューです。「ホットダークマター」モデルが観測と合わずに退場し、「冷たいダークマター（CDM）」が標準モデルの座を獲得し、密度プロファイルが普遍的な NFW 式で記述されることが分かり、現在は『衛星銀河問題』など小スケールでの課題が残る——という、宇宙論の現代史。

## 概要

本論文は招待レビューであり、1970 年代のダークマターハロー提唱から 2012 年時点までの宇宙構造形成理論の発展史を時系列で追う。初期の解析モデルと N 体シミュレーション、ホットダークマター（HDM）の排除と冷たいダークマター（CDM）モデルの確立、CMB 観測による宇宙論パラメータの精密決定を経て、現在の標準 LCDM モデルに至る経緯を述べる。後半では、ダークマターハロの質量関数・密度プロファイル（NFW プロファイル）・形状・スピン・サブ構造といった詳細な構造的性質を、Millennium Simulation や Aquarius/Phoenix プロジェクトなどの大規模シミュレーション結果に基づいて記述する。最後にバリオン物理の効果と、CDM モデルに対する小スケールでの観測的課題（衛星銀河問題、コア-カスプ問題）を論じている。

**論文種別の注記**: 招待レビュー論文。著者のオリジナル発見ではなく、分野の知見の整理・俯瞰。

## 主要概念

**階層的構造形成（bottom-up）が CDM の本質**

> "Whether the dark matter is cold or warm, halos form in a hierarchical manner provided fluctuations were originally generated with a spectrum similar to that predicted by inflationary models" (p.8)

CDM モデルでは小さな構造が先に重力的に崩壊し、合体・降着で大きな構造を形成する「ボトムアップ」階層成長が起こる。HDM の「トップダウン」とは対照的。

**ハロ密度プロファイルの普遍性（NFW）**

> "in good approximation, all dark matter halos have circular velocity profiles which are the same shape in a log-log plot ... well fitted by a simple two-parameter formula that has become known as the 'NFW profile'" (p.12)

ハロの密度分布が質量や宇宙論パラメータによらず普遍的な 2 パラメータ関数で記述できる。CDM シミュレーションの最も注目すべき結果。

**HDM モデルの排除と CDM の確立**

> "the free-streaming cut-off in the power spectrum imprints a large and well-defined scale on the galaxy distribution which is clearly not present in the real universe ... This severe discrepancy resulted in an immediate loss of interest in HDM models" (p.6)

HDM モデルが予言する銀河分布は CfA 赤方偏移サーベイと矛盾。CDM が標準モデルの地位を確立した経緯。

**サブハローの豊富さ**

> "Cold dark matter halos are not smooth: vast numbers of self-bound substructures ('subhalos') swarm within them. Subhalo centres are the sites where cluster galaxies or satellite galaxies should reside." (p.15)

ハロ内部にサブハローが大量に存在し、その質量関数はべき乗則。観測される衛星銀河の数との不一致は「衛星銀河問題」として残る。

**小スケールでの 3 つの課題**

> "There are three aspects of small-scale structure where potential conflicts with the cold dark matter model have been identified: (i) the luminosity function of galactic satellites, (ii) the abundance of galactic substructures as a function of mass or circular velocity and (iii) the structure of the halos that host faint satellites or field dwarfs." (p.21)

CDM モデルへの観測的挑戦が小スケールで残る。

## 方法

レビュー論文。数値シミュレーション（Millennium, Aquarius, Phoenix）の結果と、CMB 観測（WMAP）、銀河サーベイ（2dFGRS, SDSS）、衛星銀河観測のデータを統合的に整理。

## プロジェクトデザインとの関連

「観測と予測の不一致から理論モデルが選別され洗練されていく」という科学史的構造は、project-design における「実践と理論の往復から知が成熟する」という観点と並走する。White-Rees (D06-S02)、Springel (D06-S11)、NFW (D06-S13) と並ぶ宇宙論標準モデルの全体像を提供する論文。

## 書誌情報

- 著者: Carlos S. Frenk, Simon D. M. White
- 年: 2012
- 出典: *Annalen der Physik* 524, 507
- access_status: url-verified
- **DOI**: [10.1002/andp.201200212](https://doi.org/10.1002/andp.201200212)
- **オープンアクセス**: [arXiv:1210.0544](https://arxiv.org/pdf/1210.0544)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D06/D06-S12_frenk-white-2012.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S12_frenk-white-2012.md)（manifest_id: `D06-S12`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S12_frenk-white-2012.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S12_frenk-white-2012.md)
- **この wiki ページ（pd）**: [wiki/sources/D06_frenk_2012_dark-matter-and-cosmic.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D06_frenk_2012_dark-matter-and-cosmic.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D06/D06-S12_frenk-white-2012.md`（2026-04-10、Claude Opus 4.6, WebFetch → Read PDF 全 25 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
