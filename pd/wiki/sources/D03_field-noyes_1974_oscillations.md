---
title: "化学系における振動 IV: 実在する化学反応のモデルにおけるリミットサイクル挙動"
description: "Field と Noyes が Belousov-Zhabotinsky 反応の機構を5ステップ・3中間体に簡約した Oregonator モデルを提示し、数値計算で3次元位相空間における安定なリミットサイクルを示した1974年の論文。"
aliases: ["Oscillations in Chemical Systems IV", "Oregonator", "Field-Noyes 1974"]
tags: [source, "D03", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D03_field-noyes_1974_oscillations.pdf"
  manifest_id: "D03-S04"
compiled: "2026-04-13"
status: 正典
review_state: 未レビュー
---

# 化学系における振動 IV: 実在する化学反応のモデルにおけるリミットサイクル挙動

> **高校生向けのやさしい解説**
>
> 試験管の中の液体が青くなったり赤くなったりを一定のリズムで繰り返す——ベロウソフ・ジャボチンスキー（BZ）反応という不思議な化学実応があります。フィールドとノイズはこの振動が「なぜ永続するのか」を5つの反応ステップに単純化したモデルで説明し、時計のように安定したリズム（リミットサイクル）が存在することを数値計算で確かめました。

## 概要

Richard J. Field と Richard M. Noyes が 1974 年に Journal of Chemical Physics 60(5) に発表した論文。Field・Kőrös・Noyes が提唱した Belousov-Zhabotinsky（BZ）反応の化学機構を、5 ステップの反応と 3 つの独立な化学中間体からなる簡約モデル（後に「Oregonator」と呼ばれる）にまとめ、微分方程式系の数値解析により、3 次元位相空間において安定な閉軌道（リミットサイクル）を系が辿ることを示した。初期条件や定常状態解からも同一の軌道に収束することが確認され、実在の化学反応における **リミットサイクル挙動** が初めて定量的に検証された。さらに 2 つの中間体濃度を断熱近似で結合することで 2 変数系に簡約し、既存の解析手法が適用可能であることも示す。

## 主要概念

### Lotka モデルの限界と Brusselator

Lotka が 1920 年に提唱した仮想的反応系 (A+X→2X, X+Y→2Y, Y→P) は持続的振動を生成するが、その振動の振幅と周期は **初期濃度に依存** し、反応速度定数だけでは決まらない。これに対し Prigogine と共同研究者が提唱した Brusselator モデル（A→X, B+X→Y+D, 2X+Y→3X, X→E）は、初期条件によらず反応速度定数だけで決まる安定な閉軌道（リミットサイクル）を持つ。Lotka のような **中立安定** ではなく、摂動に対して収束する **漸近安定** な振動が特徴である。

### Oregonator: BZ 反応の簡約モデル

実在する Belousov-Zhabotinsky 反応の詳細な化学機構（Field・Kőrös・Noyes 機構、通称 FKN 機構）は非常に多数の素反応からなるが、振動挙動の本質は以下の 5 ステップに簡約できる。

| Step | 反応 | 役割 |
|------|------|------|
| R1 | A + Y → X | Y（Br⁻）の消費 + X（HBrO₂）生成 |
| R2 | X + Y → P | X と Y の相互消費 |
| R3 | B + X → 2X + Z | X の自己触媒増幅 + Z（Ce⁴⁺）生成 |
| R4 | 2X → Q | X の二次消費 |
| R5 | Z → fY | Z による Y の再生（f は化学量論係数） |

ここで X = HBrO₂, Y = Br⁻, Z = Ce⁴⁺ の 3 つが独立な動的変数となる。R3 の自己触媒項と R5 の遅延負帰還が振動の必要条件を構成する。

### 3次元位相空間でのリミットサイクル

3 変数系 (X, Y, Z) の微分方程式を数値積分すると、軌道は初期条件によらず同一の閉曲線へ収束する。定常状態解（dX/dt = dY/dt = dZ/dt = 0）から出発しても同様に閉軌道へ収束する。これは定常状態が不安定な **リミットサイクル** であることを意味し、Lotka 型の中立安定振動とは質的に異なる。

### 断熱近似による2変数への簡約

3 変数のうち 2 つの時定数が十分異なる場合、速い変数を断熱的に消去して 2 変数系に簡約できる。Field-Noyes は X と Y を擬定常状態近似で結合し、(X, Z) の 2 変数系を得る。この 2 変数系には Poincaré-Bendixson 定理等の古典的解析手法が適用可能であり、リミットサイクルの存在を厳密に示す道が開かれる。

### 非平衡系の構造形成への貢献

BZ 反応は、実在の化学系が熱力学的平衡から遠く離れた条件下で **自己組織化的な振動・空間パターン（螺旋波・ターゲット波）** を示すことの最重要実証例であり、Oregonator モデルは Prigogine の散逸構造論を具体的な反応機構で裏付ける。化学振動は後に神経興奮、心拍、概日リズム、細胞周期など生物学的リミットサイクルの理論的雛形となる。

## 関連

- **創造（creation-space）**: Oregonator は [[創造の5段階モデル]] における「縁」（臨界・分岐点での質的変化）の化学的雛形。自己触媒と遅延負帰還の組み合わせによるリミットサイクルは、創造過程の循環構造（束→場回帰）と構造的に類似する。
- **抱持（kesson-space）**: R5 の遅延負帰還（Z による Y の再生）は [[抱持]] の時間構造（即座に処理せず遅延して保持する機能）と同型の数理構造を示す。
- **複雑系・散逸構造**: Prigogine の [[sources/D29_prigogine_1977_time-structure-fluctuations|時間、構造、揺らぎ]] が提示する散逸構造の具体例として、Oregonator は複雑系科学の基礎例示の一つとなった。

## 書誌情報

- 著者: Richard J. Field, Richard M. Noyes
- 年: 1974
- 出典: Journal of Chemical Physics, Vol. 60, No. 5, pp. 1877-1884
- access_status: raw-confirmed
- **DOI**: [10.1063/1.1681288](https://doi.org/10.1063/1.1681288)
- 備考: ポーランド大学教材 PDF 経由で手動 DL（manifest notes）

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D03_field-noyes_1974_oscillations.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D03_field-noyes_1974_oscillations.pdf)（manifest_id: `D03-S04`）
- **cs 精読ノート**: [knowledge/source-notes/D03/D03-S04_field-noyes-1974.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S04_field-noyes-1974.md)
- **この wiki ページ（pd）**: [wiki/sources/D03_field-noyes_1974_oscillations.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D03_field-noyes_1974_oscillations.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
