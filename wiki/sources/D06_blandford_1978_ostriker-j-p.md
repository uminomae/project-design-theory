---
title: "天体物理学的衝撃波による粒子加速 — 一次 Fermi 加速"
description: "Blandford & Ostriker (1978) ApJ Letters 論文。強い衝撃波の上下流の Alfvén 波散乱による一次の Fermi 加速機構を提案。観測される宇宙線のべき乗スペクトル指数を q=3r/(r-1) として導出し、超新星残骸が銀河宇宙線のエネルギー源となる機構を確立した古典。"
aliases: ["Particle Acceleration by Astrophysical Shocks", "diffusive shock acceleration", "first-order Fermi acceleration"]
tags: [source, "D06", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md"
  manifest_id: "D06-S06"
  oa_url: "https://articles.adsabs.harvard.edu/pdf/1978ApJ...221L..29B"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 天体物理学的衝撃波による粒子加速 — 一次 Fermi 加速

> **高校生向けのやさしい解説**
>
> 宇宙からは膨大なエネルギーを持つ宇宙線粒子が降ってきます。その正体は長らく謎でしたが、Blandford と Ostriker は「超新星爆発で広がる衝撃波の前後を、粒子が散乱されながら何度も往復することでエネルギーを得る」という仕組みを提案しました。加速時間と逃げる時間がちょうど釣り合うように自動的に決まるエレガントな機構で、観測される宇宙線スペクトルともきれいに一致します。

## 概要

強い衝撃波の近傍で高エネルギー粒子が、上流と下流の両側を覆う波動乱流（Alfvén 波）によってピッチ角散乱される過程は、収束する流体流を媒介した一次の Fermi 加速機構となる。著者らは、定常解として観測される宇宙線のべき型運動量分布 f(p) ∝ p^(−q) が得られ、その指数 q = 3r/(r−1)（r は衝撃波圧縮比）が観測値 4 < s < 5 と近いことを示す。超新星残骸の衝撃波が銀河宇宙線のエネルギー源となる機構として、また河外電波源（Cygnus A など）の相対論的電子加速の機構として、同じ原理が機能すると論じる。

## 主要概念

**強い衝撃波での一次 Fermi 加速**

> "A new mechanism is proposed for acceleration of a power-law distribution of cosmic rays with approximately the observed slope. High-energy particles in the vicinity of a shock are scattered by Alfvén waves carried by the converging fluid flow leading to a first-order acceleration process in which the escape time is automatically comparable to the acceleration time." (p.L29, ABSTRACT)

収束流に乗った Alfvén 波が散乱中心となり、粒子は上流と下流を往復して一次 Fermi でエネルギーを得る。拡散長 L ~ D/u が自然に逃避と加速の時間スケールを均衡させる。

**べき型分布の導出**

> "f+(p) = q p^(-q) ∫_0^p f−(p') p'^(q-1) dp' (2) with q = 3r/(r − 1)." (p.L30)

遷移条件から、強い断熱衝撃波 r = 4 で q = 4（s = 4）の限界スロープ。観測スロープ 4 < s < 5 とのずれは、Alfvénic 限界での効率低下と圧縮率減少で説明される。

**超新星残骸のエネルギー源として量的に十分**

> "for a supernova rate of 10^(-68) cm^(-3) yr^(-1) (one per 60 years in the Galaxy), the energy input rate is 10^(-18) ergs cm^(-3) yr^(-1), which, for a cosmic-ray density of 10^(-12) ergs cm^(-3), gives an acceleration time of 10^6 years, comparable with the known residence time in the Galaxy." (p.L31)

単発超新星で ~10^50 erg が宇宙線変換されるシナリオは、エネルギー収支・時間スケール・電子-陽子比と整合。

**河外電波源にも適用可能**

> "Low-energy electrons injected by the beam can be accelerated efficiently by the shock mechanism described above ... we find that this maximum energy is approximately 10 GeV." (pp.L31-L32)

Cygnus A など双極電波源の hot spot で観測される電子エネルギー分布と一致。

## 方法

- 解析的手法: 拡散-対流方程式（式 1a/1b）を上流・下流で解き、衝撃波面遷移条件を課す
- スケール比較: 衝撃波厚 δ ≪ 拡散長 L ≪ 後方流体スケール H
- 自己無撞着な乱流生成: ストリーミング不安定性による Alfvén 波励起
- 並行発見の参照: Axford-Leer-Skadron (1977)、Bell (1977) との独立同時発見

## プロジェクトデザインとの関連

「収束する流れの中で、行ったり来たりする運動がエネルギーを引き出す」というメカニズムは、project-design における「対立や行き来から学習が立ち上がる」観点に物理学的アナロジーを提供する。とくに「逃避と加速の時間スケールが自動的に釣り合う」自己調整構造は、組織の動的バランス論の参照点。

## 書誌情報

- 著者: R. D. Blandford (Caltech), J. P. Ostriker (Princeton Univ. Observatory)
- 年: 1978
- 出典: *The Astrophysical Journal* 221, L29–L32
- access_status: url-verified
- **DOI**: [10.1086/182658](https://doi.org/10.1086/182658)
- **オープンアクセス**: [NASA ADS PDF](https://articles.adsabs.harvard.edu/pdf/1978ApJ...221L..29B)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md)（manifest_id: `D06-S06`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md)
- **この wiki ページ（pd）**: [wiki/sources/D06_blandford_1978_ostriker-j-p.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D06_blandford_1978_ostriker-j-p.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D06/D06-S06_blandford-ostriker-1978.md`（2026-04-13、Claude Opus 4.6, WebFetch → Read PDF 全 4 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
