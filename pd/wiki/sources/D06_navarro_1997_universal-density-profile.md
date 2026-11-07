---
title: "階層的クラスタリングからの普遍密度プロファイル — NFW プロファイル"
description: "Navarro, Frenk & White (1997) ApJ 論文。高解像度 N 体シミュレーションで、暗黒物質ハロの密度プロファイルが質量・宇宙論によらず同一形状（ρ ∝ 1/[r/r_s · (1+r/r_s)²]）で記述できることを発見した『NFW プロファイル』の原典。"
aliases: ["A Universal Density Profile from Hierarchical Clustering", "NFW profile"]
tags: [source, "D06", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md"
  manifest_id: "D06-S13"
  oa_url: "https://arxiv.org/pdf/astro-ph/9611107"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 階層的クラスタリングからの普遍密度プロファイル — NFW

> **高校生向けのやさしい解説**
>
> 暗黒物質が集まってできる「ハロー」（銀河を包む球状の塊）は、サイズも形成時期もばらばらなのに、密度のプロファイルがすべて同じ式で書けるという驚きの発見。「中心付近では r⁻¹、外側では r⁻³」という単純な 2 パラメータ式（NFW プロファイル）が、ありとあらゆる宇宙論モデルで成り立つ。さらに「小さなハローほど密度が高い」のは「先に出来たから」だと示されています。宇宙論シミュレーション史の金字塔。

## 概要

著者らは高解像度 N 体シミュレーションを用いて、階層的クラスタリング宇宙における暗黒物質ハローの平衡密度プロファイルを研究した。ハロー質量、初期密度ゆらぎスペクトル、宇宙論パラメータによらず、全てのハローの密度プロファイルが同一の形状を持つことを発見した。この普遍的プロファイルは 2 つのスケールパラメータ（スケール半径 r_s と特性密度 δ_c）を持つ単純な数式で記述される。低質量ハローは高質量ハローより高密度であり、これは小さなハローがより早い時期に崩壊することを反映している。著者らは Press-Schechter 形式に基づく解析的手続きも提供し、任意の階層的モデルにおける平衡プロファイルの計算を可能にした。

## 主要概念

**密度プロファイルの普遍性**

> "all such profiles have the same shape, independent of halo mass, of initial density fluctuation spectrum, and of the values of the cosmological parameters" (p.1)

8 種類の宇宙論モデルにわたって、ハローの球対称平均密度プロファイルが同一関数形 ρ(r)/ρ_crit = δ_c / [(r/r_s)(1+r/r_s)²] で記述される。

**特性密度と崩壊赤方偏移の比例関係**

> "The characteristic density of an equilibrium halo is proportional to the density of the universe at the time it was assembled" (p.1)

特性密度 δ_c はハローが組み立てられた時点の宇宙の平均密度に比例する。比例定数は全テスト宇宙論モデルで共通。

**低質量ハローの高密度性**

> "Low-mass halos are significantly denser than more massive systems, a correlation which reflects the higher collapse redshift of small halos" (p.1)

低質量ハローはより高い特性密度（より高い集中度パラメータ c）を持つ。小さなハローがより早期に崩壊し、その時点の宇宙密度が高かったことの直接的な帰結。

**violent relaxation による普遍性の起源**

> "mergers and collisions act during halo formation as a 'relaxation' mechanism to produce an equilibrium which is largely independent of initial conditions" (p.13)

ハロー形成過程における合体・衝突が「緩和」機構として働き、初期条件にほぼ依存しない平衡状態を生み出す。Lynden-Bell (1967) の「激しい緩和」過程の特徴。

## 方法

- N 体シミュレーション: 8 種類の宇宙論モデル（EdS 5 + 開いた宇宙 2 + 平坦 Lambda 1）
- 再シミュレーション技法: 大規模宇宙論シミュレーションからハローを選択し、個別に高解像度で再シミュレーション
- 質量範囲: CDM で約 4 桁、べき乗スペクトルで約 2 桁
- 平衡条件: ビリアル平衡近傍のハローを分析対象に
- プロファイルフィッティング: 球対称平均密度プロファイルに 2 パラメータ式をフィット

## プロジェクトデザインとの関連

「形成過程の差異にもかかわらず、最終的には普遍的な構造に収束する」という現象は、project-design における「異なる経路でも同じ型に落ち着く」観察と並走する。とくに「合体・衝突が緩和機構として働く」という構造は、組織やコミュニティの統合過程の物理学的範例として参照しうる。

## 書誌情報

- 著者: Julio F. Navarro, Carlos S. Frenk, Simon D. M. White
- 年: 1997
- 出典: *The Astrophysical Journal* 490, 493–508
- access_status: url-verified
- **DOI**: [10.1086/304888](https://doi.org/10.1086/304888)
- **オープンアクセス**: [arXiv:astro-ph/9611107](https://arxiv.org/pdf/astro-ph/9611107)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md)（manifest_id: `D06-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md)
- **この wiki ページ（pd）**: [wiki/sources/D06_navarro_1997_universal-density-profile.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D06_navarro_1997_universal-density-profile.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D06/D06-S13_navarro-frenk-white-1997.md`（2026-04-10、Claude Opus 4.6, WebFetch + PDF Read 全 20 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
