---
title: "二次元超流体の超流体密度における普遍的ジャンプ"
description: "Nelson と Kosterlitz が二次元 XY モデルの相転移理論から、He 薄膜における超流体密度の普遍的ジャンプを予測した論文。BKT 転移の核心的実験予測を導く。"
aliases: ["Universal Jump in the Superfluid Density of Two-Dimensional Superfluids"]
tags: [source, "D02", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D02_nelson-kosterlitz_1977_universal-jump-superfluid.pdf"
  manifest_id: "D02-S06"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# 二次元超流体の超流体密度における普遍的ジャンプ

> **高校生向けのやさしい解説**
>
> 極低温に冷やした薄い液体ヘリウムは「超流体」になり、摩擦ゼロで流れます。ネルソンとコスタリッツはこの薄膜が超流体に変わる瞬間、あるヘリウム固有の量が「普遍的な値」にぴたりと着地することを理論で予言しました。まるで水が0℃でいきなり氷になるように、量が急に飛び変わる——その予言は後に実験で確かめられ、BKT転移という二次元物質特有の現象の証拠になりました。

## 概要

David R. Nelson（Harvard）と J. M. Kosterlitz（Birmingham）が1977年に Physical Review Letters に発表した論文。二次元 XY モデルにおける Berezinskii–Kosterlitz–Thouless（BKT）相転移理論から導かれる、He 薄膜の超流体密度の普遍的ジャンプを予測する。臨界温度 T_c に近づくにつれ、超流体密度 ρ_s(T) と温度 T の比が普遍定数 2m²k_B/ħ² = 3.52×10⁻⁹ g/cm²K に収束するという具体的予測を提示した。この予測はその後実験で確認され、BKT 転移の実在性を証明する決定的証拠となった。

## 主要概念

### BKT 転移とボルテックス対解離

Berezinskii、Kosterlitz、Thouless によって予測された二次元系特有の相転移。長距離秩序は形成されないが、低温ではボルテックス（渦）と反ボルテックスが対を組んで束縛状態を形成し、臨界温度でこの対が解離することで相転移が起きる。

### 二次元 XY モデル

面内スピンが連続的に回転できる格子モデル。二次元では長距離秩序が存在しない（Mermin-Wagner 定理）にもかかわらず、有限温度での相転移が起きることが BKT 理論で示された。

### 普遍的ジャンプの導出

繰り込み群方程式（再帰関係）を用いて超流体密度 ρ_s(T) を計算し、T→T_c の極限で ρ_s(T)/T が普遍定数に収束することを示す。この「ジャンプ」はボルテックス対の解離に対応し、膜の厚さや壁ポテンシャルに依存しない普遍量である。

### クーロンガスへの写像

二次元平面スピンの格子をクーロンガスに写像することで、超流体速度場をポテンシャル流成分とボルテックス成分に分解し、両者の統計力学的処理を可能にする。

### 液晶・平面磁性体への応用

He 薄膜への適用に加え、二次元平面磁性体や液晶薄膜でも類似の普遍的関係が成立することを示す。Nelson-Pelcovits による液晶の繰り込み群解析への言及も含む。

## 書誌情報

- 著者: David R. Nelson, J. M. Kosterlitz
- 年: 1977
- 出典: Physical Review Letters, Vol. 39, No. 19, pp. 1201–1205
- access_status: raw-confirmed
- **DOI**: [10.1103/PhysRevLett.39.1201](https://doi.org/10.1103/PhysRevLett.39.1201)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D02_nelson-kosterlitz_1977_universal-jump-superfluid.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D02_nelson-kosterlitz_1977_universal-jump-superfluid.pdf)（manifest_id: `D02-S06`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S06_nelson-1977.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D02/D02-S06_nelson-1977.md)
- **この wiki ページ（pd）**: [wiki/sources/D02_nelson-kosterlitz_1977_universal-jump-superfluid.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D02_nelson-kosterlitz_1977_universal-jump-superfluid.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
