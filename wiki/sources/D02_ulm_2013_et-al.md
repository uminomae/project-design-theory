---
title: "Kibble–Zurek スケーリング則 — イオン結晶での欠陥形成の観測"
description: "Ulm ら (2013) Nature Communications 論文。16 個のレーザー冷却イオン結晶の線形–ジグザグ構造相転移を用い、対称性の破れに伴う欠陥形成が臨界点の横断速度のべき乗則に従うことを実験的に検証した。測定指数 β=2.68±0.06 は有限非均一系の理論予測 8/3≈2.67 と一致し、メソスコピック領域でも Kibble–Zurek 機構が成立することを示した。"
aliases: ["Observation of the Kibble-Zurek scaling law for defect formation in ion crystals", "Kibble-Zurek mechanism"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D02/D02-S04_pyka-2013.md"
  manifest_id: "D02-S04"
  oa_url: "https://www.nature.com/articles/ncomms3290.pdf"
compiled: "2026-07-03"
status: 暫定
review_state: 未レビュー
---

# Kibble–Zurek スケーリング則 — イオン結晶での欠陥形成の観測

> **高校生向けのやさしい解説**
>
> 水が氷になるように、ものが急に別の秩序へ「相転移」するとき、あちこちで別々に秩序が芽生えます。その芽生えどうしの向きが食い違う境目には「欠陥（きず）」が残ります。ゆっくり冷やせば欠陥は少なく、速く冷やすほど増える——この「速さと欠陥の数」の関係が、宇宙の初期から実験室の結晶まで同じ数式の形をとる、という予言（Kibble–Zurek 機構）を、16 個のイオンを並べた小さな結晶で実際に測って確かめた論文です。

## 概要

本論文は、冷たいダークマター宇宙論から凝縮系物理まで横断する **Kibble–Zurek 機構（KZM）** のスケーリング則を、レーザー冷却された 16 個の ⁴⁰Ca⁺ イオン結晶で実験的に検証したものである。対称性を破る二次相転移を有限の速度で横断すると、因果的に隔離された領域どうしが両立しない対称性を選び、その境界にトポロジカル欠陥（キンク）が形成される。イオン結晶の「線形→ジグザグ」構造相転移をトラップ電圧の制御で横断し、欠陥形成密度が臨界点の横断速度 γ のべき乗 γ^β に従うことを約 60,000 回の測定で確認した。得られたスケーリング指数は β=2.68±0.06 で、有限で密度が不均一な系に対する理論予測 β=8/3≈2.67 と優れて一致する。この結果は、わずか 16 イオンというメソスコピックな系でも普遍スケーリング則が成立することを示し、イオン結晶が非平衡熱力学のテストベッドになりうることを強調する。

## 主要概念

**Kibble–Zurek 機構のスケーリング則をイオン結晶で初めて定量的に確認**

> "The experiment reveals an exponential scaling of defect formation γ^β, where γ is the rate of traversal of the critical point and β = 2.68 ± 0.06." (p.1)

臨界点近傍で系の緩和時間が発散するため、いかに遅くとも臨界点を断熱的に横断することはできず、系の構造は臨界点に達する前に「凍結」する。異なる領域が因果的に切り離されて別々の対称性を選ぶと、境界に欠陥が残る。

**有限・非均一系の理論予測との一致**

> "This supports the prediction of β = 8/3 ≈ 2.67 for finite inhomogeneous systems." (p.1)

均一な無限系ではなく、トラップポテンシャルにより密度が不均一な有限系に対する予測値と整合する。異方性を変えた条件でも β=2.62±0.15 と一貫し、分子動力学シミュレーション（Langevin 方程式）でも β=2.53±0.23 が得られている。

**メソスコピック領域への KZM の拡張**

> "Our result demonstrates that the scaling laws also apply in the mesoscopic regime and emphasizes the potential for further tests of non-equilibrium thermodynamics with ion crystals." (p.1)

16 個という小さな系でスケーリング則が成立することは、KZM が宇宙論的スケールから実験室スケールまで貫く普遍性の証拠を一つ増やす。

## 関連

- **創造（creation-space: 場→波→縁→渦→束）**: 対応は弱い。線形イオン鎖の対称的な初期状態（場）、臨界点での対称性の破れとゆらぎ（波）、因果的に隔離された領域の境界に生じる欠陥（縁）に構造的類似は認められるが、いずれも著者の論旨（スケーリング則の実証）とは異なる読みであり、渦・束に対応する記述はない。詳細は creation-space の D02 source-note（5段階対応評価）を参照。

## 書誌情報

- 著者: S. Ulm, J. Rossnagel, G. Jacob, C. Degünther, S.T. Dawkins, U.G. Poschinger, R. Nigmatullin, A. Retzker, M.B. Plenio, F. Schmidt-Kaler, K. Singer
- 年: 2013
- 出典: *Nature Communications* 4, 2290
- access_status: url-verified
- **DOI**: [10.1038/ncomms3290](https://doi.org/10.1038/ncomms3290)
- **オープンアクセス**: [PDF](https://www.nature.com/articles/ncomms3290.pdf)
