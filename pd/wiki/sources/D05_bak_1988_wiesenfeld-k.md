---
title: "自己組織化臨界性 — Bak-Tang-Wiesenfeld の砂山モデル"
description: "Bak, Tang & Wiesenfeld (1988) Phys Rev A 論文。多自由度の散逸動力学系が外部からの微調整なしに臨界状態へ自己組織化することを、砂山セルオートマトンを用いて示し、1/f noise と fractal 構造を統一的に説明した。"
aliases: ["Self-organized criticality", "SOC", "BTW model", "sand-pile model"]
tags: [source, "D05", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md"
  manifest_id: "D05-S14"
  oa_url: "https://psychsafety.com/wp-content/uploads/2025/04/SOC.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
note: "manifest 旧記載は 1987 PRL 59(4) 381-384 だが、PDF 実体は 1988 Phys Rev A 38(1) 364-374（同著者・同テーマの拡張論文）。本ページは 1988 PRA 版から生成"
---

# 自己組織化臨界性 — Bak-Tang-Wiesenfeld の砂山モデル

> **高校生向けのやさしい解説**
>
> 砂を一粒ずつ山に落としていくと、砂山は何度も小さな雪崩を起こしながら、最終的に「ちょうど崩れやすい」絶妙な傾斜に落ち着きます。誰かが角度を調整したわけではありません。これが「自己組織化臨界性」という考え方。地震の大きさ分布や脳活動のパターン、株価の暴落まで、自然界の至るところに同じ「べき乗則」が現れる理由を統一的に説明する候補として登場した古典です。

## 概要

Bak, Tang, Wiesenfeld (1988) は、多数の等価な自由度を持つ散逸動力学系が、外部からの微調整なしに **臨界状態（critical state）** へと自己組織化することを、2 次元・3 次元のセルオートマトン「砂山模型（sand-pile automaton）」を用いて示した。臨界状態は (i) 空間的な fractal 構造、(ii) スケール不変な power-law クラスタサイズ分布、(iii) 時間的 "fingerprint" としての flicker noise (1/f noise) の出現、という三位一体的特徴を持つ。2D 50×50 格子では cluster size 指数 τ ≈ 1.0、lifetime 指数 α ≈ 0.43、power spectrum 指数 β ≈ 1.57。3D 20×20×20 格子では τ ≈ 1.37、α ≈ 0.92、β ≈ 1.08。SOC は地震・1/f noise・乱流・自然界の自己相似性などを統一的に説明しうる「動的分類」の候補と位置付けられる。

## 主要概念

**散逸動力学系は臨界状態へ自己組織化する**

> "We show that certain extended dissipative dynamical systems naturally evolve into a critical state, with no characteristic time or length scales. The temporal 'fingerprint' of the self-organized critical state is the presence of flicker noise or 1/f noise; its spatial signature is the emergence of scale-invariant (fractal) structure." (Abstract, p.364)

論文の中核命題。散逸的・extended・dynamical の 3 条件を満たすシステムは、チューニングなしに critical state に evolve する。

**1/f noise と fractal 構造は同一機構の二面**

時間的普遍性（1/f noise）と空間的普遍性（fractal）を同一機構で説明することの理論的重要性を Sec.I で強調する。

**砂山モデルが最小モデル**

1D モデル: z_n → z_n − 2、z_{n±1} → z_{n±1} + 1（z_n > z_c のとき）。2D 拡張は z(x, y) → z(x, y) − 4、近接 4 サイトに +1 ずつ。「sand」は energy, water, light, electrons など transport される量としても解釈可能。

**最小安定状態と摂動の連鎖**

> "the effect of a small local perturbation is communicated throughout the system, but the system is robust with respect to noise insofar as it returns to the globally minimally stable state." (p.366-367)

1D では外乱が端まで伝播して元の状態に戻るため 1/f は生まれない。2D 以上で構造が破綻する点が鍵となる。

**べき乗則クラスタ分布**

> "D(s) ≈ s^(−τ),  τ ≈ 1.0 for D = 2 ." (eq.3.3, p.368)

2D で τ ≈ 1.0、3D で τ ≈ 1.37。雪崩のサイズ分布が特徴的なスケールを持たない。

**寿命分布と 1/f noise の結合**

クラスタの寿命分布 D(T) = T^(−α) も power-law になり、van der Ziel の議論を経由して 1/f noise と結ばれる。「同時独立に作動する複数の緩和時間が 1/f noise を生む」というアイデアの具体化。

**境界条件と真の 1/f**

閉境界（closed boundary）では完全な 1/f は出ないが、開境界（open boundary）に変えると 2D で α ≈ 1.05, β ≈ 0.95 という真の 1/f スペクトルが得られる。

## 方法

- 1D 砂山モデルの定義（高さ差 z_n、臨界値 z_c の超過で雪崩）
- 2D・3D へのセルオートマトン拡張
- 数値シミュレーション（200 サンプル平均）でクラスタサイズ分布と寿命分布を測定
- log-log プロットでべき乗則指数を抽出
- 開境界・閉境界の対比で 1/f noise の発生条件を特定

## プロジェクトデザインとの関連

「外部からの微調整なしに、系が自然に臨界状態に落ち着く」という構図は、project-design における「設計しすぎないことで創発が起きる」という観察と並走する。SOC のべき乗則は、組織やコミュニティでも繰り返し観察される「ロングテールの揺らぎ」の構造的説明候補として援用しうる。ただし著者自身は地震や物理現象を主対象としており、社会システムへの適用は構造的類比として扱うべきである。

## 書誌情報

- 著者: Per Bak, Chao Tang, Kurt Wiesenfeld (Brookhaven National Laboratory)
- 年: 1988
- 出典: *Physical Review A* 38(1), 364–374（1987 PRL 59(4), 381-384 のレター版を拡張した詳細論文）
- 受領: 1987-08-28 / 発行: 1988-07-01
- access_status: url-verified
- **DOI**: [10.1103/PhysRevA.38.364](https://doi.org/10.1103/PhysRevA.38.364)
- **オープンアクセス**: [psychsafety.com PDF](https://psychsafety.com/wp-content/uploads/2025/04/SOC.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md)（manifest_id: `D05-S14`）
- **cs 精読ノート**: [knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md)
- **この wiki ページ（pd）**: [wiki/sources/D05_bak_1988_wiesenfeld-k.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D05_bak_1988_wiesenfeld-k.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D05/D05-S14_bak-tang-wiesenfeld-1988-self-organized-criticality.md`（2026-04-15、Claude Opus 4.6, WebFetch → PDF Read 全 11 ページ）
- manifest 旧記載は 1987 PRL レター。本ページは PDF 実体である 1988 PRA 拡張論文に基づく
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-1）
