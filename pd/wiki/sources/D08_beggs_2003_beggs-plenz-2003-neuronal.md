---
title: "皮質神経回路におけるニューロン雪崩"
description: "Beggs & Plenz (2003) J Neurosci 論文。ラット皮質培養の自発活動が、べき乗則（指数 -3/2）に従う『ニューロン雪崩』として伝播し、分岐パラメータが臨界値 1 付近にあって情報伝達と安定性を両立させていることを示した。"
aliases: ["Neuronal Avalanches in Neocortical Circuits", "neuronal avalanche", "critical brain"]
tags: [source, "D08", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md"
  manifest_id: "D08-S11"
  oa_url: "https://www.jneurosci.org/content/jneuro/23/35/11167.full.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 皮質神経回路におけるニューロン雪崩

> **高校生向けのやさしい解説**
>
> 脳の自発的な活動を 60 個の電極で同時記録すると、活動は「雪崩」のように広がっていきました。しかも、雪崩の大きさの分布が砂山モデルと同じべき乗則に従う——つまり脳は「臨界状態」というギリギリのバランスで動いている、というのが発見です。臨界だと情報をよく伝えられるけど、暴走（てんかん発作）の危険もある。脳はその境目で動いている、という話です。

## 概要

Beggs & Plenz (2003) は、ラット皮質の器官型培養と急性スライスを 60 チャンネルマルチ電極アレイで記録し、自発活動の伝播が「ニューロン雪崩（neuronal avalanche）」として記述できることを示した。雪崩サイズの確率分布が指数 −3/2 のべき乗則に従い、分岐パラメータ σ が臨界値 1 に近いことが約 9 万回の雪崩計測から確認された。シミュレーションにより、この臨界分岐がフィードフォワードネットワークの情報伝達を最適化しつつ暴走的興奮を防ぐことが示された。著者らは、ニューロン雪崩が皮質ネットワークの汎用的特性であり、振動・同期・波動とは根本的に異なる活動様式であると結論する。

## 主要概念

**自発活動はべき乗則に従う雪崩として伝播する**

> "the propagation obeys a power law with an exponent of -3/2 for event sizes, with a branching parameter close to the critical value of 1" (Abstract)

雪崩サイズの確率分布が log-log プロットで直線関係を示し、指数は −1.50 ± 0.008。閾値や電極間隔のリスケーリングにわたって安定。

**臨界分岐過程**

> "σ = 1.04 ± 0.19 for avalanches starting with a single electrode, and σ = 0.90 ± 0.19 for avalanches starting with more than one electrode (~90,000 avalanches measured)" (Results)

分岐パラメータの直接測定値が臨界値 1 に近い。シャッフルデータでは 0.7 程度まで低下することから、これが真の時間構造を反映していると確認された。

**情報伝達と安定性の両立**

> "In the critical state, the network may satisfy the competing demands of information transmission and network stability." (Abstract/Discussion)

シミュレーションで情報伝達は σ = 1 付近でピーク。亜臨界（σ < 1）では信号減衰、超臨界（σ > 1）では全出力ユニット活性化で入力情報が失われる。

**振動・同期・波動とは異なる**

> "neuronal avalanches may be a generic property of cortical networks, and represent a mode of activity that differs profoundly from oscillatory, synchronized, or wave-like network states" (Abstract)

雪崩の伝播は波動的ではなく（隣接電極への順次伝播は約 39% のみ）、スケールフリー特性を示す。GABA-A 受容体拮抗薬で抑制を除去するとべき乗則が崩壊し二峰性分布になる。

**生きた神経回路で臨界分岐を示した最初の証拠**

> "To our knowledge, no previous evidence has been presented for the existence of a critical branching process operating in the spatiotemporal dynamics of a living neural network." (Discussion)

べき乗則指数 −3/2 と分岐パラメータ σ ≈ 1 の 2 つの独立手法による裏付け。

## 方法

- 生体材料：ラット体性感覚皮質の器官型培養（7 検体、計 70 時間記録）と急性スライス（9 検体）
- 記録：8×8 マルチ電極アレイ（電極間距離 200 μm）、サンプリング 1 kHz、低域通過 50 Hz
- 雪崩定義：時間ビン内に活性化した電極の空間パターンを「フレーム」、連続フレーム列を「雪崩」、空白フレームで区切る
- 分岐パラメータ：1 つの活性電極から次のビンで活性化する電極数の平均
- 薬理：ピクロトキシン（GABA-A 拮抗薬）で抑制を除去し超臨界化を確認
- シミュレーション：フィードフォワードネットワークで分岐パラメータと相互情報量の関係を計算

## プロジェクトデザインとの関連

「臨界状態が情報伝達と安定性の両立を生む」という構造は、プロジェクトや組織における「動きすぎず止まりすぎない動的バランス」の物理的アナロジーとして読める。ニューロン雪崩のスケールフリー性は、Bak らの SOC（D05-S14）と並ぶ「自己組織化臨界」の生物学的実例として、project-design 周辺の議論で参照されうる。ただし本論文の主目的は神経回路の臨界現象記述であり、援用は構造的類比に留まる。

## 書誌情報

- 著者: John M. Beggs, Dietmar Plenz
- 年: 2003
- 出典: *The Journal of Neuroscience* 23(35), 11167–11177
- access_status: url-verified
- **DOI**: [10.1523/JNEUROSCI.23-35-11167.2003](https://doi.org/10.1523/JNEUROSCI.23-35-11167.2003)
- **オープンアクセス**: [J Neurosci PDF](https://www.jneurosci.org/content/jneuro/23/35/11167.full.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md)（manifest_id: `D08-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md)
- **この wiki ページ（pd）**: [wiki/sources/D08_beggs_2003_beggs-plenz-2003-neuronal.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D08_beggs_2003_beggs-plenz-2003-neuronal.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D08/D08-S11_beggs-plenz-2003.md`（2026-04-10、Claude Opus 4.6, WebFetch via PMC HTML）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-1）
