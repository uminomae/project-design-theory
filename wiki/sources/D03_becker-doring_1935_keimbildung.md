---
title: "過飽和蒸気における核形成の運動論的処理"
description: "Becker と Döring が過飽和蒸気からの液滴核形成の速度を運動論的に厳密に計算し、核形成頻度の定量的公式を導いた1935年の基礎論文。"
aliases: ["Kinetische Behandlung der Keimbildung in übersättigten Dämpfen", "Kinetic Treatment of Nucleation in Supersaturated Vapors"]
tags: [source, "D03", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D03_becker-doring_1935_keimbildung.pdf"
  manifest_id: "D03-S01"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# 過飽和蒸気における核形成の運動論的処理

> **高校生向けのやさしい解説**
>
> 冷えた空気に息を吐くと白くなりますよね。あれは水蒸気が小さな水滴の「核」を作り始める現象です。ベッカーとデーリングは「どのくらいの確率で最初の核が生まれるか」を計算する式を導き出しました。霧や雪の結晶が生まれる瞬間の速さを理論で予測できるようにした、核形成理論の古典的な論文です。

## 概要

R. Becker と W. Döring が1935年に Annalen der Physik に発表した論文（NACA Technical Memorandum 1374 として英訳）。Volmer と Weber が確立した核形成の熱力学的理論を継承しながら、Farkas の運動論的計算を改良し、核形成頻度 J を定量的に決定する比例定数 K を厳密に導く。液滴核形成（流体核）と結晶核形成（固体核）の両方を扱い、代数的消去法という簡潔な手法によって連立方程式を解き、従来の微分方程式への変換に伴う問題を回避した。結果は Farkas の公式と本質的に一致しながら、従来の不定定数を確定的に同定することに成功した。

## 主要概念

### 臨界液滴と核形成

過飽和蒸気中では、ある臨界半径 r_n より大きい液滴は自発的に成長し、小さい液滴は蒸発する。過飽和蒸気の自発的凝縮（霧の形成など）は、揺らぎによってちょうど臨界液滴が形成されたときにのみ起動する。

### Volmer の熱力学的公式

臨界液滴を生成する可逆な仕事 A（自由エネルギー障壁）から核形成頻度を J ∝ exp(-A/kT) と表現する。比例定数 K が Volmer の段階では不定のまま残されていた。

### 代数的消去法（Becker-Döring の核心）

従来の連続微分方程式への変換を避け、各液滴サイズの「定常核形成電流」を記述する連立代数方程式を直接代数的に解く方法を開発した。これにより中間状態を系統的に消去し、核形成頻度の正確な表現を得た。電気回路のアナロジー（核形成電流＝電流、熱力学ポテンシャル差＝電圧差、蒸発・凝縮確率の逆数＝抵抗）を用いて直感的理解を提供する。

### K の定量化

最終的な核形成頻度の公式：J = K exp(-A_n/kT) において、K はガス運動論的衝突係数で与えられることを示した。液体核と結晶核で同程度の K が得られ、Volmer-Flood の実験測定と良好な一致を示す。

### Ostwald の段階則への応用

複数の相が競合するときに最安定相ではなく準安定相から順に出現するという Ostwald の段階則を、得られた核形成理論から定量的に説明・限界条件を導く。

### 結晶核形成

流体核と同様のアプローチを単純立方格子モデルの結晶核に適用し、最初の定量的な結晶核形成速度の理論計算を実現した。

## 書誌情報

- 著者: R. Becker, W. Döring
- 年: 1935
- 出典: Annalen der Physik, Folge 5, Band 24, pp. 719–752（英訳: NACA Technical Memorandum 1374）
- access_status: raw-confirmed
- **DOI**: [10.1002/andp.19354160806](https://doi.org/10.1002/andp.19354160806)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D03_becker-doring_1935_keimbildung.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D03_becker-doring_1935_keimbildung.pdf)（manifest_id: `D03-S01`）
- **cs 精読ノート**: [knowledge/source-notes/D03/D03-S01_becker-doring-1935.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D03/D03-S01_becker-doring-1935.md)
- **この wiki ページ（pd）**: [wiki/sources/D03_becker-doring_1935_keimbildung.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D03_becker-doring_1935_keimbildung.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
