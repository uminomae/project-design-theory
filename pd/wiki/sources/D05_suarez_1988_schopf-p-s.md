---
title: "ENSO のための遅延作用振動子"
description: "Suarez & Schopf (1988)。エルニーニョ／南方振動（ENSO）の数年周期を、海洋波の伝播による『負の遅延フィードバック』を含む単純な非線形モデルで説明した。遅延微分方程式 dT/dt = T − T³ − αT(t−δ) が中核。"
aliases: ["A Delayed Action Oscillator for ENSO"]
tags: [source, "D05", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D05-S09"
  oa_url: "https://www.harmonyforearth.org/publications/suarez-schopf1988.pdf"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# ENSO のための遅延作用振動子

> **高校生向けのやさしい解説**
>
> 太平洋の赤道域では、海面の温度が数年おきに暖かくなったり冷たくなったりを繰り返します（エルニーニョとラニーニャ）。なぜ「数年」という規則的な周期になるのか？ 著者らは、海面の温度が上がると風が変わり、その風が海の波を起こすが、その波が西の端まで行って跳ね返り、数か月～1年遅れて戻ってきて今度は逆向きの効果（冷やす効果）を生む、というしくみを提案します。たとえるなら、ブランコを押した手が、時間差で逆向きに戻ってきて自然に振り戻すようなもの。この「時間差で逆に効くフィードバック」が振り子のような周期を生むのです。

## 概要

エルニーニョ／南方振動（ENSO）現象に対して提案された単純な非線形モデルの論文。鍵となる特徴は、赤道で捕捉された海洋波（equatorially trapped oceanic waves）が閉じた海盆を時間差で伝播する効果を、負の遅延フィードバック項として取り込んだ点にある。モデルは、海洋-大気系に強い正のフィードバックが存在し、その不安定な成長を非線形機構が制限すると仮定する。中央太平洋で結合が最も強く、そこで成長する擾乱が西向き伝播する海洋波を放出し、その波が西の境界で反射して東向きの赤道ケルビン波として戻り、伝播時間に等しい遅延の後に再び結合系に「再突入」する。著者らは線形安定性解析と数値解を提示し、振動の周期が典型的に遅延の数倍になることを示す。この遅延フィードバック効果が、ENSO の数年（2-4年）という長い時間スケールを説明しうると論じる。

## 主要概念

**遅延作用振動子の基礎方程式**

> "dT/dt = T − T³ − αT(t − δ)" (p.3284, eq. 2)

T は結合領域の SST 偏差の振幅、T³ は成長を制限する非線形（散逸）項、αT(t−δ) が伝播時間 δ だけ遅れて戻る波による負の遅延フィードバック項。この単一方程式が ENSO の振動を生む。

**負の遅延フィードバックの起源（位相反転反射）**

> "a 'warming' signal enters from the west and a 'cooling' signal is reemitted by wind perturbations produced by the incident signal. We referred to this as 'coupled reflection'." (p.3285)

西から戻る暖信号が、入射信号による風偏差で冷信号として再放出される。この「結合反射（coupled reflection）」が位相反転を起こし、遅延項を負（α>0）にする。

**周期は遅延の少なくとも2倍以上**

> "the period of oscillation ... to be no less than twice the transit time. We will show below that oscillatory solutions of (2) in the range 0 < α < 1 have periods longer than 2δ." (p.3285)

西境界への往復に2回の伝播を要するため、周期は遅延 δ の少なくとも2倍、実際にはそれより長くなる。

**ENSO の 2-4 年スケールへの適用**

> "Can this model account for the 2−4 year time scale of ENSO?" (p.3287)

著者らは重力波速度や子午面モードの選択により、遅延が1年以上に伸び、2-4年の周期が得られると論じる。e-folding 時間50日・遅延400日で約2.75倍（約3年）という具体例を示す。

**2パラメータへの縮約**

> "Solutions depend on only two parameters: the ratio of a wave transit time to the e-folding time of the underlying coupled instability (δ); and the relative importance of the local and delayed wave effects (α)." (p.3286)

複雑な ENSO 力学が、遅延 δ と遅延効果の相対強度 α という2つの無次元パラメータに縮約される。

## 方法

単純な非線形遅延微分方程式（delay differential equation）の提案、線形安定性解析（中立曲線の導出、Fig. 2-3）、および α-δ 平面上での数値積分（Fig. 4-5）。大循環モデル（Cane-Zebiak 1985, Schopf-Suarez 1988）の挙動の概念的説明として位置づける。

## 創造（creation-space）との関連

「強い正のフィードバックによる不安定成長」と「時間差で逆向きに戻る負の遅延フィードバックによる反転」が結合して持続的な振動（自律的循環）を生む構造は、創造の5段階の「渦（自己持続する循環・振動の確立）」に実質的に対応する。波が境界で反射して位相を反転させ、系全体を振り戻すという機構は、増幅と抑制の時間差結合から秩序ある周期が創発する一般的なパターンとして接続する。

## 書誌情報

- 著者: Max J. Suarez（NASA ゴダード宇宙飛行センター 大気研究室）, Paul S. Schopf（同 海洋研究室）
- 年: 1988
- 出典: *Journal of the Atmospheric Sciences* 45(21), 3283-3287（Notes and Correspondence）
- access_status: url-verified
- **DOI**: [10.1175/1520-0469(1988)045&lt;3283:ADAOFE&gt;2.0.CO;2](https://doi.org/10.1175/1520-0469(1988)045%3C3283:ADAOFE%3E2.0.CO;2)
- **オープンアクセス**: [PDF](https://www.harmonyforearth.org/publications/suarez-schopf1988.pdf)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/manifest.md)（manifest_id: `D05-S09`）
- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 `wiki-cross-check.mjs` で照合）
- **この wiki ページ（pd）**: [wiki/sources/D05_suarez_1988_schopf-p-s.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D05_suarez_1988_schopf-p-s.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- harmonyforearth.org のスキャン PDF（全5ページ）を curl で取得し、Read（画像モード）で全ページ精読した。引用とページ番号は原典本文に基づく。cs source-note は未生成。
- 生成: 2026-06-14, source-reader
