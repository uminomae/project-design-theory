---
title: "自己組織化臨界"
description: "Bak, Tang, Wiesenfeld (1988) Phys Rev A 38 の原論文。空間的に拡がった散逸動力学系が、外部からのチューニングなしに自発的に臨界状態へ進化することを数値実験で示した。臨界状態は 1/f ノイズ（時間的指紋）とフラクタル構造（空間的指紋）として現れ、砂山モデル（セルオートマトン）でその機構を解明した。自己組織化臨界（SOC）概念の提唱論文。"
aliases: ["Self-organized criticality", "BTW 1988", "Bak-Tang-Wiesenfeld", "SOC"]
tags: [source, "D29", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D29_bak-tang-wiesenfeld_1988_self-organized-criticality.pdf"
  manifest_id: "D29-S04"
  oa_url: "https://psychsafety.com/wp-content/uploads/2025/04/SOC.pdf"
compiled: "2026-04-19"
status: 正典
review_state: 未レビュー
---

# 自己組織化臨界

> **高校生向けのやさしい解説**
>
> 砂山に砂を一粒ずつ落としていくと、あるとき小さな雪崩、別のときには大きな雪崩が起きますよね。不思議なのは、雪崩の大きさを事前に予測できないこと、そして誰も砂山の傾きを調整していないのに自然と「いつでも崩れそうな状態」になることです。バク・タン・ヴィーゼンフェルドはこの現象を「自己組織化臨界」と名づけ、自然界の 1/f ノイズ（長い相関をもつゆらぎ）と、川・山・雲などに見られるフラクタル構造が、実は同じ仕組みから生まれる双子の兄弟だと示しました。

## 概要

ペル・バク、チャオ・タン、カート・ヴィーゼンフェルドによる 1988 年の *Physical Review A* 論文。1987 年の PRL 論文の拡張完全版であり、**自己組織化臨界** (Self-Organized Criticality, SOC) 概念の基礎を確立した。論文の核心主張は次の二点である。第一に、空間的に拡がった散逸動力学系は、**外部からの微調整なしに**、臨界状態 (critical state) に自発的に進化する。第二に、この臨界状態は時間的には **1/f ノイズ（フリッカーノイズ）**、空間的には**スケール不変のフラクタル構造**として観測される。両者はそれぞれ独立に自然界に遍在することが知られていたが、統一的説明は存在しなかった。BTW は**砂山モデル**（セルオートマトン）を用い、一般的な動的機構として両現象を同時に説明することに成功した。

## 主要概念

### 従来の臨界現象との決定的違い：チューニングの有無

平衡統計力学における臨界現象（液体-気体相転移、磁気相転移など）は、**外部パラメータ（温度など）の微調整**によってのみ到達できる特異な点として理解されていた。自然界で臨界状態が広く観測されるはずがない、というのが従来の常識だった。SOC の発見はこの常識を覆す。

> "The critical point can be reached only by fine tuning a parameter (e.g., temperature), and so may occur only accidentally in nature: It cannot be invoked as an explanation for the dynamical phenomena discussed above where no fine tuning is needed." (p. 364)

散逸的な動的系は、**系自身の内在的ダイナミクス**によって臨界状態へと引き寄せられる。つまり臨界状態は動力学の**アトラクター**であり、初期条件やパラメータ変動に対してロバストである。

### 砂山モデル（sandpile model）

BTW は二次元格子上のセルオートマトンとして砂山を定式化した。各格子点 $(x, y)$ に砂粒の高さ $z(x, y)$ を割り当てる。臨界高さ $z_c$ を超えると以下のルールで砂が崩れる。

$$
\begin{aligned}
z(x, y) &\to z(x, y) - 4 \\
z(x \pm 1, y) &\to z(x \pm 1, y) + 1 \\
z(x, y \pm 1) &\to z(x, y \pm 1) + 1
\end{aligned}
\quad \text{for } z(x, y) > z_c
$$

ランダムに砂を一粒ずつ加えていくと、系は**臨界的な傾き**に到達し、その後は**アバランシェ**（なだれ）を起こしながら自己組織的にその状態を維持する。1次元系では臨界状態は「最小安定状態」となるが、2次元以上では**真に臨界的**な状態（スケール不変・長距離相関）が出現する。

### 1/f ノイズ（時間的指紋）

臨界状態での砂の流出量の時系列を解析すると、周波数 $f$ に対してパワースペクトル $S(f) \propto 1/f$ の関係が現れる。フリッカーノイズは準星の光度、太陽黒点、抵抗器を流れる電流、砂時計、ナイル川の流量、株価指数など**自然界・経済現象に遍在**することが知られていたが、その起源は謎だった。BTW は 1/f ノイズが**散逸動力学系の自己組織化臨界状態の普遍的指紋**であると提案した。

### フラクタル構造（空間的指紋）

臨界状態のアバランシェ領域のサイズ分布は**冪乗則**に従い、特徴的な長さスケールをもたない（スケール不変）。この性質が、山の稜線・雲・海岸線・生体組織などに広く観測される**フラクタル構造**の物理的起源を説明する。

### 有限サイズ・スケーリング

BTW はアバランシェのサイズ分布、時間分布、空間相関関数について**有限サイズ・スケーリング仮説**を提示し、数値実験で検証した。臨界指数は普遍的（局所ルールの詳細や次元の局所的乱雑さに依存しない）であり、これは系が**普遍性クラス**をもつことを示唆する。

### 「Ising 模型」としての位置づけ

BTW は自身のセルオートマトンを「散逸動力学の Ising 模型」と表現する。平衡統計物理における Ising 模型のように、単純で解析しやすいが本質的な物理を捉えたモデルであり、より現実的な系（乱流、生態系、地震）への一般化の出発点となる。

## 関連

- **創造（creation-space）**：「5段階モデル」のうち「渦」段階の臨界現象、自発的な秩序形成のダイナミクスと部分的に接続し得る（部品として引用する際は理論的接続を明示する必要がある）
- **欠損駆動思考**：臨界状態における「小さな入力が大きなアバランシェを引き起こす」構造は、保持された欠損が臨界点で情動の構成へと一斉に再編される現象との形式的類似が仮説として指摘可能（検証要）
- **複雑ネットワーク**（[[D02_strogatz_2001_exploring-complex-networks]]）：Strogatz (2001) はネットワーク上の動力学を論じる際、SOC を臨界現象の古典例として参照する。スケールフリー・ネットワークの冪乗分布と SOC のアバランシェ冪乗分布は、異なる起源から似た統計をもたらす

## 書誌情報

- 著者: Per Bak, Chao Tang, Kurt Wiesenfeld
- 年: 1988
- 出典: *Physical Review A*, Vol. 38, No. 1, pp. 364-374, 1 July 1988
- access_status: raw-confirmed
- **DOI**: [10.1103/PhysRevA.38.364](https://doi.org/10.1103/PhysRevA.38.364)
- **オープンアクセス**: [PDF](https://psychsafety.com/wp-content/uploads/2025/04/SOC.pdf)
- **前身論文**: Bak, Tang & Wiesenfeld (1987) "Self-Organized Criticality: An Explanation of 1/f Noise." *Physical Review Letters* 59, 381-384. [DOI: 10.1103/PhysRevLett.59.381](https://doi.org/10.1103/PhysRevLett.59.381)（本論文はその拡張完全版）

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D29_bak-tang-wiesenfeld_1988_self-organized-criticality.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D29_bak-tang-wiesenfeld_1988_self-organized-criticality.pdf)（manifest_id: `D29-S04`）
- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 `wiki-cross-check.mjs` で照合）
- **この wiki ページ（pd）**: [wiki/sources/D29_bak-tang-wiesenfeld_1988_self-organized-criticality.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D29_bak-tang-wiesenfeld_1988_self-organized-criticality.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
