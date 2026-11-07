---
title: "自己組織化臨界への道筋"
description: "Dickman, Muñoz, Vespignani & Zapperi (2000, Braz. J. Phys.)。SOCを「吸収状態相転移 + slow driving」の組合せとして再定式化し、「SOCは自発的でもパラメタ自由でもない」というde-mystificationを確立した教育的レビュー。砂山・駆動界面・Bak-Sneppen・SODPの5経路を統一視点で解析。"
aliases: ["Paths to self-organized criticality", "SOC paths", "Dickman 2000"]
tags: [source, "D29", "原典解説"]
source:
  repo: "creation-space"
  manifest_id: "D29-S11"
  oa_url: "https://arxiv.org/pdf/cond-mat/9910454"
  note: "SciELO PDF タイムアウト → arXiv preprint cond-mat/9910454 v2（公刊版と同内容）で取得"
compiled: "2026-06-16"
status: 暫定
review_state: 未レビュー
---

# 自己組織化臨界への道筋

> **高校生向けのやさしい解説**
>
> 砂山に砂を一粒ずつ落すと、やがて「いつでも崩れそうな状態」に自然とたどり着きます。この「外からチューニングしなくても臨界状態に自己組織化する」現象を「自己組織化臨界（SOC）」と言います。でも Dickman らは「それって本当に完全に自発的？」と問い直しました。答えは「No」——実は「外から非常にゆっくり粒子を追加する」という暗黙のルールが必要で、その無限にゆっくりな駆動こそが系を臨界点に「固定」していたのです。SOCは神秘的な自己組織化ではなく、よく知られた「相転移現象に slow driving を加えたもの」として明快に理解できる——そう教えてくれる論文です。

## 概要

Dickman, Muñoz, Vespignani, Zapperi (2000) は、Bak–Tang–Wiesenfeld (1987/1988) 以来の「SOCは自発的・パラメタ自由な臨界性」という理解を根本から再解釈する教育的レビューである。中心主張は **「SOC = 吸収状態相転移 + 特別な駆動プロトコル（slow driving + 活動連動 dissipation）」** であり、いわゆる「神秘性」は解体される。

具体的な機構：保存量 ζ（粒子密度）が吸収状態相転移を示すモデルに、(1) 系が吸収配置に落ちたときのみ infinitesimal rate h→0+ で粒子を追加、(2) 活動中のみ境界で粒子を失う dissipation rate ε→0+、という2修正を加えると、系は必ず ζ = ζ_c（臨界点）に「ピン留め」される。活動があれば密度が下がり、活動がなければ密度が上がる——このフィードバックが自動的に臨界点を維持する。

5種の SOC 到達経路（Activated Random Walkers / 砂山 / 駆動界面 / Bak-Sneppen 進化モデル / 自己組織化有向浸透）を統一的に "slow driving で conventional な相転移を SOC 化する" という視点で再解析する。

## 主要概念

**SOC レシピ（3成分）**

> "Start with a system having a continuous absorbing-state phase transition at a critical value of a density ζ. Add to the conservative local dynamics (1) a process for increasing the density in infinitesimal steps when the local dynamics reaches an absorbing configuration, and (2) a process for decreasing the density at an infinitesimal rate while the system is active."

成分1：保存密度 ζ を持つ吸収状態相転移の存在。成分2：不活性時のみ infinitesimal な粒子追加（rate h→0+）。成分3：活動中のみ境界で粒子を失う dissipation（rate ε→0+）。この3成分が揃えば「系は ζ_c に自動的にピン留めされる」。

**臨界点へのピン留め機構**

> "In the presence of activity, ζ > ζ_c and dζ/dt < 0. In the absence of activity there is addition but no loss, so ζ < ζ_c implies dζ/dt > 0. Evidently, the only possible stationary value for the density in the sandpile is ζ_c!"

活動あり → 密度下降、活動なし → 密度上昇——この単純なフィードバックループが SOC の「自己組織化」の正体。

**baby-sitter 議論：SOCはパラメタ自由ではない**

BTW の original formulation には活動を監視する暗黙の「baby-sitter」が存在する。これを除去すると driving rate h がパラメタとして現れ、h→0 に tune する必要がある。「パラメタ自由」は幻想であり、SOC は**2パラメタ (h, ε) を 0 に送る無限時間スケール分離**を要求する。

**5種の SOC 到達経路**

1. **Activated Random Walkers / Manna sandpile**：保存量 + 吸収状態相転移の原型例。DP universality class とは別 class
2. **BTW deterministic sandpile**：Manna の決定論的版。同型のレシピで生成
3. **Driven interface depinning**：弾性界面 + pinning force に constant-velocity drive v→0 を与えると SOC 化
4. **Bak-Sneppen 進化モデル**：global minimum fitness の置換（extremal dynamics）が order parameter を自動的に 0 に調整
5. **自己組織化有向浸透 (SODP)**：パラメタが完全に消える珍しい変種だが、物理系の説明力は低いとされる

**実験的 SOC 候補**

真正な SOC には overdamped dynamics（inertia が無視できる）が必要。実験的に良い候補は Barkhausen noise（強磁性体の磁壁運動）、type II 超伝導体の磁束線、rice piles（オスロ実験）。通常の砂粒・地震・森林火災は inertia や追加機構のため理想 SOC から逸脱する。

**SOCの定義の再定式化**

> "SOC refers neither to spontaneous or parameter-free criticality, nor to self-tuning. It becomes, rather, a useful concept for describing systems that, in isolation, would manifest a phase transition between active and frozen regimes, and that are in fact driven slowly from outside."

## 創造（creation-space）との関連

D29「複雑性科学」において本論文は**全5段階が強く現れる**論拠を提供し、特に **縁 × 渦** の接続が鮮明である。

- **場 (Field)**：格子上の粒子場（密度 ζ）/ 高さ場（砂山）/ 界面場（駆動界面）が場を定義。場の構造が universality class を決定する
- **波 (Wave)**：アバランシェ = 活動の伝播。scale-invariant な power-law 分布（P(s) ∼ s^{-τ}）が全スケールで波を記述する
- **縁 (Relation)**：境界でのみ dissipation が起こる open boundary、および h→0 / ε→0 という**二重極限（無限時間スケール分離）**が縁の本質。縁が系を臨界へ引き寄せる
- **渦 (Vortex)**：「活動あり → 密度下降、活動なし → 密度上昇」というフィードバックが系を ζ_c に自動吸引する渦的機構。意図なき self-tuning ループ
- **束 (Bundle)**：臨界定常状態が scale-invariant な avalanche 分布を生成する束。universality class（DP / 保存場あり / Bak-Sneppen型）が束の分類を与える

[[自己組織化臨界]] (BTW 1988, D29-S04) の「SOCの提唱」に対し、本論文は「SOCの de-mystification」として補完的位置にある。Bak 1996 *How Nature Works* の「万物はSOC」言説を抑制し、SOC概念を成熟させた節目の論文。

## 書誌情報

- 著者: Ronald Dickman (UFMG, Brazil), Miguel A. Muñoz (Granada 大学), Alessandro Vespignani (ICTP Trieste), Stefano Zapperi (ESPCI Paris)
- 年: 2000
- 出典: *Brazilian Journal of Physics*, 30, pp.27-41
- access_status: raw-confirmed
- **DOI**: [10.1590/S0103-97332000000100004](https://doi.org/10.1590/S0103-97332000000100004)
- **arXiv**: [cond-mat/9910454](https://arxiv.org/pdf/cond-mat/9910454)（公刊版と同内容）

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: ローカル raw PDF なし（SciELO タイムアウト → arXiv cond-mat/9910454 v2 PDF で取得；manifest_id: `D29-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S11_dickman-munoz-vespignani-zapperi-2000.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D29/D29-S11_dickman-munoz-vespignani-zapperi-2000.md)
- **この wiki ページ（pd）**: [wiki/sources/D29_dickman-munoz-vespignani-zapperi_2000_paths-self-organized-criticality.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D29_dickman-munoz-vespignani-zapperi_2000_paths-self-organized-criticality.md)
- **参照先（原典 DOI / arXiv）**: 下記「書誌情報」を参照

## 出典メモ

- 本ページは cs 精読ノート（D29-S11_dickman-munoz-vespignani-zapperi-2000.md）を一次入力として生成した。arXiv preprint cond-mat/9910454 v2（248KB、23頁）を cs 側が取得し精読（本文19頁を精読）。
- 生成: 2026-06-16, Claude Sonnet 4.6（wiki-gen inbox 4月分整理、5段階対応は cs source-note §5 を参照）。
