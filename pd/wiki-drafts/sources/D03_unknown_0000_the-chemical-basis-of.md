---
title: "形態形成の化学的基礎 — Turing の反応拡散モデル"
description: "Turing (1952) Phil Trans R Soc B 論文。モルフォゲンと呼ぶ化学物質群の反応と拡散だけで形態形成の主要現象を説明できることを示し、均質平衡の不安定性によるパターン形成の数理を確立した。"
aliases: ["The Chemical Basis of Morphogenesis", "Turing pattern", "reaction-diffusion"]
tags: [source, "D03", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D03/D03-S05_turing-1952.md"
  manifest_id: "D03-S05"
  oa_url: "https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
note: "inbox v2 の wiki_stem は unknown_0000 だが本ページは Turing (1952) の解説。1:1 原則を満たすため inbox stem を採用"
---

# 形態形成の化学的基礎 — Turing の反応拡散モデル

> **高校生向けのやさしい解説**
>
> ヒマワリの種の螺旋、シマウマの縞模様、ヒドラの触手の数——生き物のかたちはどうして決まるのか？ チューリングは「化学物質が組織の中で反応しながら拡がるだけで、こうした模様が自動的に出来上がる」ことを数式で示しました。最初は均質だったものが、わずかなゆらぎから一気にパターンに分化する。「対称が壊れる」というシンプルな仕組みが、生命のかたちの種になっている、という古典です。

## 概要

Turing (1952) は、組織中を拡散しながら相互に反応する化学物質群（モルフォゲン）が、形態形成の主要現象を説明しうることを数理的に示した。当初は完全に均質なシステムでも、均質平衡の不安定性がランダムな擾乱によって引き起こされ、パターンや構造を発展させうる。Turing は孤立した細胞環をモデルに 6 種の不安定性を分類し、定常波が Hydra の触手や葉序を説明しうると示唆した。球面上の反応拡散系による原腸陥入の説明にも踏み込んでいる。

## 主要概念

**反応拡散系が形態形成を説明しうる**

> "It is suggested that a system of chemical substances, called morphogens, reacting together and diffusing through a tissue, is adequate to account for the main phenomena of morphogenesis." (p. 37)

論文の中心命題。新しい仮説を立てるのではなく、既知の物理法則（拡散と化学反応）のみで多くの形態形成現象を説明できることを示す、という方針が採られている。

**均質平衡の不安定性とランダム擾乱**

> "Such a system, although it may originally be quite homogeneous, may later develop a pattern or structure due to an instability of the homogeneous equilibrium, which is triggered off by random disturbances." (p. 37)

均質な初期状態から対称性が破れてパターンが出現する核心的メカニズム。微小な擾乱が不安定性を通じて増幅される構造を、Turing は電気振動子との類似で説明する。

**球対称のパラドックスと解決**

> "A system which has spherical symmetry, and whose state is changing because of chemical reactions and diffusion, will remain spherically symmetrical for ever. ... It certainly cannot result in an organism such as a horse, which is not spherically symmetrical." (p. 41)

> "There is a fallacy in this argument. ... It is, however, important that there are *some* deviations, for the system may reach a state of instability in which these irregularities, or certain components of them, tend to grow." (p. 42)

完全な対称性は数学的にのみ維持され、現実の擾乱がある世界では微小なズレが不安定性を通じて増幅される。これが論文の理論的核心。

**6 種の不安定性と定常波**

> "After the lapse of a certain period of time from the beginning of instability, a pattern of morphogen concentrations appears which can best be described in terms of 'waves'. There are six types of possibility which may arise." (p. 66)

(a) 極長波長の定常波、(b) 極長波長の振動波、(c) 極短波長の定常波、(d) 有限波長の定常波、(e) 有限波長の振動波、(f) 極短波長の振動波。ケース (d) が最も生物学的応用が大きい。

**化学波長**

> "There is a sense, however, in which there is a 'chemical wave-length' which does not depend on the dimensions of the ring." (p. 51)

パターンの空間スケールは反応速度定数と拡散係数から決まる内在的長さであり、これが触手の数や葉の配置のような生物学的形態を規定する、という観念の導入。

## 方法

- 細胞環（N 個の細胞からなるリング）と連続組織環の 2 形式
- 均質平衡近傍で反応関数を線形化し、フーリエ分解で各波数モードの成長率を求める線形安定性解析
- 成長率の性質（実数 vs 複素数）と最大成長率を持つ波数で 6 ケースを分類
- Manchester University Computer による 20 細胞環の数値計算（Section 10）
- 球面調和関数による球面への拡張（Section 12、原腸陥入）

## プロジェクトデザインとの関連

「均質な状態から微小なゆらぎが不安定性を通じて増幅され、自発的にパターンが立ち上がる」という構造は、project-design 周辺の創造論において繰り返し参照される基底的構図のひとつ。「場 → 波」の遷移を数理的に裏付けた最初期の論文として、PD 論が cs（creation-space）の「創造のモデル」を引用するときの基層に位置する。ただし Turing 自身は形態形成の数理的記述に焦点を置いており、人間の創造プロセスを論じてはいない。

## 書誌情報

- 著者: A. M. Turing
- 年: 1952
- 出典: *Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences* 237(641), 37–72
- 受領: 9 November 1951 / 改訂: 15 March 1952 / 発行: 14 August 1952
- access_status: url-verified
- **DOI**: [10.1098/rstb.1952.0012](https://doi.org/10.1098/rstb.1952.0012)
- **オープンアクセス**: [Caltech mirror PDF](https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D03/D03-S05_turing-1952.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S05_turing-1952.md)（manifest_id: `D03-S05`）
- **cs 精読ノート**: [knowledge/source-notes/D03/D03-S05_turing-1952.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D03/D03-S05_turing-1952.md)
- **この wiki ページ（pd）**: [wiki/sources/D03_unknown_0000_the-chemical-basis-of.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D03_unknown_0000_the-chemical-basis-of.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D03/D03-S05_turing-1952.md`（2026-04-10、Claude Opus 4.6, 全 36 ページ読了）
- 本ページのファイル名 stem は inbox v2 の auto-derived 値（unknown_0000）に従う。本文は Turing (1952) の解説
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-1）
