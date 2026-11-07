---
title: "生態系の破局的レジームシフト — 理論と観測をつなぐ"
description: "Scheffer & Carpenter (2003, TREE)。生態系が緩やかな変化の後に突然まったく別の状態へ急変する『レジームシフト』を、代替安定状態・ヒステリシス・分岐の理論と野外観測（サハラ砂漠化、カリブ海サンゴ礁崩壊等）を結びつけて論じたレビュー。"
aliases: ["Catastrophic regime shifts in ecosystems"]
tags: [source, "D12", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D12-S09"
  oa_url: "https://sciences.ucf.edu/biology/d4lab/wp-content/uploads/sites/23/2024/08/Scheffer-Carpenter-2003.pdf"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# 生態系の破局的レジームシフト — 理論と観測をつなぐ

> **高校生向けのやさしい解説**
>
> 池や森のような自然は、たいてい平均値のまわりで小さく揺れています。ところが、じわじわ負荷がかかったあるとき、突然まったく別の状態に「パタン」と切り替わることがあります。たとえばサハラは昔、急に砂漠になりました。カリブ海のサンゴ礁も、誰も予測できないまま藻だらけの海へ一変しました。怖いのは、元に戻そうとしても簡単には戻らないこと（ヒステリシス）。この「ゆっくりの変化が、あるしきい値で急変する」しくみを、理論と実際の観測の両面から説明した論文です。

## 概要

Marten Scheffer と Stephen Carpenter (2003) は、生態系における **破局的レジームシフト (catastrophic regime shift)** — 緩やかな変化の後に突然まったく異なる状態へ急変する現象 — を、理論モデルと野外観測を結びつけてレビューした。通常、自然界の個体群はある傾向や安定平均のまわりで変動するが、時にこれが中断され急激な状態転換が起きる。例として、古代サハラの突然の砂漠化、カリブ海サンゴ礁の藻類被覆状態への急変（富栄養化＋草食魚の乱獲＋ウニの病原体感染が重なった）を挙げる。核心概念は **代替安定状態 (alternative stable states)**、**ヒステリシス (hysteresis)**（一度移行すると条件を戻しても元に戻りにくい）、**分岐点・臨界閾値 (tipping point)**。著者らは、こうした移行が事前に予測困難であり、しばしば事後的にのみ機構が解明される点を強調する。

## 主要概念

**代替安定状態とレジームシフト**

> "The usual state of affairs in nature is one of populations fluctuating around some trend or stable average. Occasionally, however, this scenario is interrupted by an abrupt shift to a dramatically different regime."

同一の外的条件下で複数の安定状態が存在しうり、系はその間を不連続に飛び移る。

**ヒステリシス（不可逆性）**

レジームシフトは対称的でない。ある方向に移行を起こした条件まで戻しても元の状態には復帰せず、より大きく条件を戻す必要がある。これが「破局的」と呼ばれる所以。

**予測困難性と事後的機構解明**

> "not one researcher foresaw the sudden dramatic shift ... Only with hindsight were the probable mechanisms unraveled."

複雑な相互作用（富栄養化・乱獲・病原体）の重なりが閾値を越えさせるため、移行の事前予測は難しい。

## 方法

レビュー論文（*Trends in Ecology & Evolution*）。代替安定状態・分岐理論の数理モデルと、湖沼・サンゴ礁・乾燥地など複数生態系の野外観測事例を対応づける。

## 創造（creation-space）との関連

「緩やかな蓄積が臨界閾値で不連続な状態転換を生む」というレジームシフトの構図は、創造の5段階における **波（ゆれ・対立）から渦（個・立ち上がり）への非線形な相転移** と強く対応する。とくにヒステリシス（一度立ち上がった新状態が容易には崩れない）は、創造された新秩序の安定性・不可逆性を示す。D12（生態）・D20/D21 のレジリエンス系（Holling, Walker, Folke）と同じ「臨界・転換・安定状態」群の中核参照。

## 書誌情報

- 著者: Marten Scheffer, Stephen R. Carpenter
- 年: 2003
- 出典: *Trends in Ecology & Evolution* 18(12), 648–656
- access_status: url-verified
- **DOI**: [10.1016/j.tree.2003.09.002](https://doi.org/10.1016/j.tree.2003.09.002)
- **オープンアクセス**: [PDF (UCF mirror)](https://sciences.ucf.edu/biology/d4lab/wp-content/uploads/sites/23/2024/08/Scheffer-Carpenter-2003.pdf)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D12-S09`）
- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 `wiki-cross-check.mjs` で照合）
- **この wiki ページ（pd）**: [wiki/sources/D12_scheffer_2003_carpenter-s-r.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D12_scheffer_2003_carpenter-s-r.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 一次入力: UCF ミラー PDF を pdftotext 抽出（2026-06-14, 冒頭〜導入部）。本文全体の精読は cs source-note 生成時に行う。
- cs source-note は未生成（manifest D12-S09 として url-verified 登録のみ）。生成後に `wiki-cross-check.mjs` で矛盾検査を再実行する。
- 生成: 2026-06-14, Claude Opus 4.8（Main 逐次）
