---
title: "単純な系における複雑なパターン — Gray-Scott 反応拡散"
description: "Pearson (1993) Science 論文。Gray-Scott 反応拡散モデルの数値シミュレーションで 12 種の時空間パターンを発見。特に自己複製するスポット（成長・分裂・過密崩壊）はカオス的振る舞いを示し、有限振幅摂動への非線形応答として生まれる。"
aliases: ["Complex Patterns in a Simple System", "Gray-Scott model", "self-replicating spots"]
tags: [source, "D03", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D03/D03-S11_pearson-1993.md"
  manifest_id: "D03-S11"
  oa_url: "https://arxiv.org/pdf/patt-sol/9304003"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 単純な系における複雑なパターン — Gray-Scott 反応拡散

> **高校生向けのやさしい解説**
>
> たった 2 つの化学物質だけが反応・拡散する単純な系をコンピュータでシミュレートすると、12 種類もの全く違う模様が現れます。中でも驚きは「自己複製するスポット」——黒い点が成長して分裂し、増えすぎると崩壊する。生命の細胞分裂のような振る舞いが、生命とは全く関係のない化学反応から生まれるのです。チューリング模様（D03-S05）の進化形として広く知られる古典。

## 概要

Gray-Scott 反応拡散モデルの数値シミュレーションにより、従来観察されたことのない多様な時空間パターンが発見された。有限振幅の摂動に対する応答として 12 種のパターン（ギリシャ文字 α から μ で分類）が同定され、パラメータ空間における相図が提示された。特に注目すべきは自己複製するスポットのパターン（ε, ζ, λ）であり、スポットが臨界サイズまで成長すると分裂し、過密になると崩壊するという動態を示す。最大リアプノフ指数の推定によりパターン ε がカオス的であることが確認された。

## 主要概念

**単純な反応拡散系から多様な時空間パターン**

> "In this article, I describe patterns recently observed in numerical experiments on a simple reaction-diffusion model. These patterns are unlike any that have been previously observed in theoretical or numerical studies." (p.2)

2 成分の Gray-Scott モデルから、従来研究では見られなかった全く新しいクラスのパターンが出現。パラメータ F（供給率）と k（反応速度定数）の値に応じて 12 種が同定。

**スポットの自己複製と崩壊**

> "After a spot is formed, it grows. When it achieves the critical size the gradient is no longer sufficient to maintain the center of the spot in the blue state so the center decays to red leaving two blue spots." (p.5)

> "This occurs when many spots are crowded together and the gradient becomes insufficient to support them." (p.5)

スポットは勾配によって自己を維持する自律的構造で、成長・分裂・過密崩壊という生命的サイクルを示す。

**有限振幅摂動への非線形応答**

> "All of the patterns presented here arose in response to finite-amplitude perturbations. The ratio of diffusion coefficients used was 2." (p.6)

> "Most work in this field in the past has focused on pattern formation from a spatially uniform state that is near the transition from linear stability to linear instability." (p.2)

使用された拡散係数比（Du/Dv = 2）では安定なチューリングパターンは存在せず、線形不安定性ではなく有限振幅摂動への非線形応答として生じる。従来のパターン形成理論を超える新現象。

**パターン ε はカオス的**

> "The Liapunov exponent is on the order of 1.5 × 10⁻³." (p.6)

> "The Liapunov time (the inverse of the Liapunov exponent) is 660 time steps. It is roughly equal to the time it takes for a spot to reproduce as shown in Figure 4." (p.6)

リアプノフ時間がスポットの再生産時間と同程度。カオスの源がスポットの分裂・崩壊ダイナミクスそのものにあることを示唆。

## 方法

数値シミュレーション。Gray-Scott 反応拡散方程式を 2 次元格子上で時間発展。パラメータ F-k 平面で系統的にスキャンしてパターンの相図を作成。リアプノフ指数の数値推定でカオス性を判定。

## プロジェクトデザインとの関連

「単純な仕組みから自己複製・分裂・崩壊という生命的振る舞いが生じる」という観察は、project-design における「個と集団の境界が動的に立ち上がる」観点に強い物理的根拠を提供する。Turing (D03-S05) の反応拡散の発展形として、PD 論における「分化と個体化」のメカニズムを考えるうえでの中核参照論文。

## 書誌情報

- 著者: John E. Pearson
- 年: 1993
- 出典: *Science* 261(5118), 189–192
- access_status: url-verified
- **DOI**: [10.1126/science.261.5118.189](https://doi.org/10.1126/science.261.5118.189)
- **オープンアクセス**: [arXiv:patt-sol/9304003](https://arxiv.org/pdf/patt-sol/9304003)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D03/D03-S11_pearson-1993.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S11_pearson-1993.md)（manifest_id: `D03-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D03/D03-S11_pearson-1993.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S11_pearson-1993.md)
- **この wiki ページ（pd）**: [wiki/sources/D03_pearson_1993_e.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D03_pearson_1993_e.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D03/D03-S11_pearson-1993.md`（2026-04-10、Claude Opus 4.6, WebFetch → Read PDF 全 8 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1a）
