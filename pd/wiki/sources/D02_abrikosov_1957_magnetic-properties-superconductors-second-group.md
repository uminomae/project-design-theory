---
title: "第二種超伝導体の磁気的性質"
description: "Abrikosov (1957)。Ginzburg-Landau 理論のパラメータ κ が 1/√2 より大きい超伝導体（第二群）では、上部臨界磁場の近くで超伝導の秩序が周期的な格子の形をとり、磁場が下がると磁束が渦糸として入る「混合状態」があることを理論で示した論文。"
aliases: ["On the Magnetic Properties of Superconductors of the Second Group", "Abrikosov 1957"]
tags: [source, "D02", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D02-S03"
compiled: "2026-11-11"
status: 正典
review_state: 未レビュー
---

# 第二種超伝導体の磁気的性質

> **高校生向けのやさしい解説**
>
> 超伝導体の多くは、中に磁場を入れません。Abrikosov は、ある条件の材料では、磁場が細い糸のような形で少しずつ中へ入り、そのあいだも超伝導が続くことを、1957 年に理論で示しました。糸の中心では超伝導が消え、糸は規則正しく並びます。論文は、当時の合金の実験の測定値とも比べています。

## 概要

ソ連科学アカデミー物理問題研究所の A. A. Abrikosov が 1957 年に発表した理論論文（英訳 9 頁）。Ginzburg-Landau（GL）理論のパラメータ κ が 1/√2 より大きい超伝導体を「第二群」と呼び、円柱を長さの向きの磁場に置いたときの磁気的な性質を調べた。上部臨界磁場の近くでは、超伝導の秩序パラメータ Ψ が周期的な格子の形をとる。磁場が下がると、磁束が渦糸として入る「混合状態」がある。論文の後半は、鉛の合金の磁化の測定（Shubnikov ら 1937）と理論を比べる。精読ノートは全頁を読んでいる。

## 主要概念

### 二つの群

> "For the first of these groups, the parameter κ entering into the Ginzburg-Landau theory is less than 1/√2, and for the second group it is greater than 1/√2." (p.1174)

κ が 1/√2 より大きいと、常伝導と超伝導の境の表面エネルギーが負になる、と計算されていた。そのため、第二群は第一群と大きく違う性質を持つはずだ、と論文は書く。純粋な金属では κ が小さい（例として水銀で κ = 0.16）。論文は、多くの超伝導合金で κ が 1/√2 より大きいことを示す（p.1174）。

### 上部臨界磁場の近くの格子

GL 理論では、κ > 1/√2 のとき、熱力学的臨界磁場 H_cm より強い磁場でも超伝導が保たれる。不安定さが続くのは、太い試料で κ√2 H_cm までである（p.1175）。この磁場の近くで Ψ を周期関数の重ね合わせとして解き、自由エネルギーが最も低くなる形を探すと、|Ψ|² は正方格子の対称性を持つ。

> "Thus |Ψ|² has the symmetry of a square lattice." (p.1177)

論文は三角格子も調べ、上部臨界磁場の近くでは正方格子より不利だと書く（脚注、pp.1177–1178）。磁束の少ない所では三角格子に移るはずだ、とも書く（p.1180）。

### 混合状態と渦糸

> "Let us call this the mixed state." (p.1177)

> "This pattern reminds one of the distribution of vortex filaments, as proposed by Onsager and Feynman." (p.1178)

磁場が入り始めるとき、磁場は間隔の大きい格子の点に集まり、点と点のあいだではほとんど消える。磁場は離れた糸の形で入る。糸の中心では Ψ がゼロになり、まわりを一周すると Ψ の位相が 2π 変わる。論文はこの振る舞いを、ヘリウム II の渦糸（Onsager と Feynman）になぞらえている（p.1178）。

### 下部臨界磁場と磁束

> "It follows from this that the filaments start being formed when the field strength H_0 attains the value H_c1 = εκ/4π." (p.1179)

糸ができ始める磁場 H_c1 を導き、磁気誘導 B が糸の密度 n に比例すること（B = 2πn/κ）を示した（p.1179）。

### 実験との比較

Shubnikov ら（1937）が測った、鉛にタリウムやインジウムを混ぜた合金の磁化曲線と理論を比べた。曲線から傾きと H_c1 を読み取る精度は 15% ほどだと断ったうえで、上部臨界磁場の近くの傾きは理論とよく合う、と書く（p.1181）。H_c1 は理論と測定が同じ桁だが、合い方は劣る。

## 方法

GL の方程式から出発し、上部臨界磁場の近くで |Ψ|² が小さいとして解を組み、自由エネルギーを最小にする形を探した。糸どうしが十分離れているとき（κ が大きいとき）は、糸を一本ずつ円筒の対称で扱い、糸のあいだの相互作用を書いて、正方格子と三角格子の自由エネルギーを比べた。

## 限界

- GL の現象論の理論で、微視的な基礎づけは含まない。κ がとても大きくないときの定量の限界は、著者も認めている。
- 実験との比較は、鉛の合金に限られる。
- 読んだのは英訳（E. J. Saletan 訳）で、ロシア語の原文とは違いうる。

## 書誌情報

- 著者: A. A. Abrikosov（ソ連科学アカデミー物理問題研究所）
- 年: 1957
- 出典: *Soviet Physics JETP* 5(6), pp.1174–1182（1957 年 12 月 15 日）。原文は *J. Exptl. Theoret. Phys. (U.S.S.R.)* 32, pp.1442–1452（1957 年 6 月）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D02-S03`）
- **cs 精読ノート**: [knowledge/source-notes/D02/D02-S03_abrikosov-1957.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D02/D02-S03_abrikosov-1957.md)

## 出典メモ

- 材料は創造とはの精読ノート（全頁を読んだ記録）。引用・κ の値・H_c2 の式・格子の段・実験との比較の段・訳者は、手元の原典の英訳の文字で確かめた。
