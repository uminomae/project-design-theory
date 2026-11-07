---
title: "脳の傍血管経路（glymphatic システム）— 脳脊髄液による間質溶質クリアランス"
description: "Iliff ら (2012) Sci Transl Med 論文。動脈周囲からの脳脊髄液流入と静脈周囲からの間質液排出を結ぶ脳全体の液体輸送経路を同定。AQP4 依存・アミロイドβ排出への関与を示し『glymphatic』と命名した。"
aliases: ["A Paravascular Pathway Facilitates CSF Flow Through the Brain Parenchyma", "glymphatic"]
tags: [source, "D09", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D09/D09-S06_iliff-2012.md"
  manifest_id: "D09-S06"
  oa_url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3551275/"
compiled: "2026-04-17"
status: 暫定
review_state: 未レビュー
---

# 脳の傍血管経路（glymphatic システム）

> **高校生向けのやさしい解説**
>
> 体には老廃物を流すリンパの仕組みがありますが、脳には長らく見つかっていませんでした。この論文は、脳の動脈の周りから脳脊髄液が中に入り、神経組織を通って静脈側へ抜け、不要なタンパク質（認知症で問題になるアミロイドβも含む）を一緒に運び出す経路を見つけ出しました。アストロサイトという細胞の水チャネルが流れの要で、これを止めるとクリアランスが大きく落ちる、という発見です。

## 概要

Iliff ら (2012) は、in vivo 二光子顕微鏡と AQP4 ノックアウトマウスを組み合わせ、マウス脳に脳全体の液体輸送経路が存在することを示した。脳脊髄液（CSF）はくも膜下腔から皮質表面動脈と穿通細動脈の周囲（paravascular space）を通って脳実質に流入し、間質液（ISF）が静脈周囲を経て排出される。アストロサイト終足の水チャネル AQP4 がこの流れを駆動し、欠損マウスではマンニトールクリアランスが約 70%、可溶性アミロイドβ排出が約 55% 低下する。著者は本系を glia + lymphatic から「glymphatic」と命名した。

## 主要概念

**動脈周囲経路を介する CSF の脳実質流入**

> "tracers rapidly entered the brain along the outside of cortical surface arteries and penetrating arterioles" through "a pathway immediately surrounding the vascular smooth muscle cells" (Results)

くも膜下腔に注入した蛍光トレーサーが、動脈の血管平滑筋を取り囲む空間を通って速やかに脳内へ流入する様子が in vivo で可視化された。

**分子量依存性と AQP4 依存性**

> "the large-molecular weight tracer (FITC-d2000) was confined to the paravascular space" while smaller molecules "readily entered the interstitium" (Results)

> "In Aqp4-null mice, [3H]mannitol clearance from the brain interstitium was reduced by ~70% compared to that of wild-type animals" (Results)

大分子（2000 kD）は paravascular space に留まり、小分子は脳実質全体に浸透する。AQP4 欠損で間質液クリアランスが大幅に低下する事実は、流れがアストロサイトの水輸送に依存することを示す。

**アミロイドβのクリアランス**

> "the rate of 125I-amyloid beta1-40 clearance was reduced by ~55%" in AQP4 knockout mice (Results)

可溶性アミロイドβも同じ paravascular 経路で排出される。AQP4 欠損で約 55% 排出が落ちることは、アルツハイマー病の細胞外アミロイド蓄積病態との接続を示唆する。

**glymphatic システムという統合概念**

著者は3段階の経路（動脈周囲流入 → 間質バルクフロー → 静脈周囲排出）を、グリア細胞依存のリンパ様機能としてまとめ、

> "para-arterial influx of subarachnoid CSF into the brain interstitium, followed by the clearance of ISF along large-caliber draining veins" (Discussion)

「glymphatic」という命名でひとつの機能系として提示した。

## 方法

- 動物: C57BL/6, GFAP-GFP, NG2-DsRed/Tie2-GFP, Aqp4 ノックアウトマウス
- イメージング: in vivo 二光子レーザー走査顕微鏡（閉鎖式頭蓋窓）、ex vivo 蛍光イメージング
- トレーサー: A594 (759 Da)・TR-d3 (3 kD)・FITC-d2000 (2000 kD) の3種で分子量依存性を検証、放射性 [3H]mannitol・[3H]dextran-10 で定量化
- 注入経路: 大槽（cisterna magna）注入と脳実質直接注入の2方式
- アミロイドβ: 蛍光・放射性標識可溶性 Abeta1-40 を使用

## プロジェクトデザインとの関連

「個別の細胞ではなく、流体・血管系・グリアの結合した『系』として機能が成立する」という構図は、プロジェクト設計における要素単独評価ではなく系の循環構造評価という観点に響く部分がある。ただし本論文は神経生理学の知見であり、プロジェクトデザイン論への接続は構造的類比に留まる。

## 書誌情報

- 著者: Iliff JJ, Wang M, Liao Y, Plogg BA, Peng W, Gundersen GA, Benveniste H, Vates GE, Deane R, Goldman SA, Nagelhus EA, Nedergaard M
- 年: 2012
- 出典: *Science Translational Medicine* 4(147), 147ra111
- access_status: url-verified
- **DOI**: [10.1126/scitranslmed.3003748](https://doi.org/10.1126/scitranslmed.3003748)
- **オープンアクセス**: [PMC3551275](https://pmc.ncbi.nlm.nih.gov/articles/PMC3551275/)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D09/D09-S06_iliff-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D09/D09-S06_iliff-2012.md)（manifest_id: `D09-S06`）
- **cs 精読ノート**: [knowledge/source-notes/D09/D09-S06_iliff-2012.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D09/D09-S06_iliff-2012.md)
- **この wiki ページ（pd）**: [wiki/sources/D09_iliff_2012_2012-a-paravascular-pathway.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D09_iliff_2012_2012-a-paravascular-pathway.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D09/D09-S06_iliff-2012.md`（2026-04-10、Claude Opus 4.6、WebFetch via PMC HTML）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase A）
