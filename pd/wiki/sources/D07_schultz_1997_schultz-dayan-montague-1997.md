---
title: "予測と報酬の神経基盤（D07 文脈）— ドーパミン予測誤差"
description: "Schultz, Dayan & Montague (1997) Science 論文。ドーパミンニューロンが TD 学習の予測誤差を符号化することを示した古典。D09-S07 と同論文だが、D07（工学情報）の文脈で cs に分類されている。"
aliases: ["A Neural Substrate of Prediction and Reward", "TD learning"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md"
  manifest_id: "D07-S07"
  oa_url: "http://www.cs.utexas.edu/~dana/Reward.pdf"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
note: "D09-S07 と同論文の D07 文脈版"
---

# 予測と報酬の神経基盤（D07 文脈）

> **高校生向けのやさしい解説**
>
> ドーパミンが反応するのは『ご褒美そのもの』ではなく『予想とのズレ』だった——という有名な発見の D07（工学情報）文脈での参照ページです。D09-S07 と同じ論文。詳細は D09-S07 ページを参照。

## 概要

Schultz, Dayan, Montague (1997) は、霊長類のドーパミンニューロンが「報酬予測誤差」を符号化しているという電気生理学的証拠と、TD 学習による計算論的解釈を統合した。VTA・黒質のドーパミンニューロンは三様式（活性化・無反応・抑制）を示し、TD 学習の誤差項 δ(t) = r(t) + γV(t+1) − V(t) と定量的に一致する。詳細は D09-S07 ページを参照。

## 主要概念

D09 文脈版（[D09_schultz_1997](D09_schultz_1997_schultz-dayan-montague-1997)）と同じ内容。

- ドーパミンは報酬予測誤差を符号化する
- TD 学習モデルとの定量的一致
- 条件刺激への応答転移と blocking
- 価値面（value surface）と行動方針

## プロジェクトデザインとの関連

D07（工学情報）文脈では、本論文は脳の計算論的視座の中核として位置付けられる。Friston の自由エネルギー原理（D02-S14）、Clark の予測処理（D08-S13）と並ぶ「予測する脳」群の参照点。

## 書誌情報

- 著者: Wolfram Schultz, Peter Dayan, P. Read Montague
- 年: 1997
- 出典: *Science* 275(5306), 1593–1599
- access_status: url-verified
- **DOI**: [10.1126/science.275.5306.1593](https://doi.org/10.1126/science.275.5306.1593)
- **オープンアクセス**: [著者公開 PDF](http://www.cs.utexas.edu/~dana/Reward.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md)（manifest_id: `D07-S07`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_schultz_1997_schultz-dayan-montague-1997.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D07_schultz_1997_schultz-dayan-montague-1997.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D07/D07-S07_schultz-dayan-montague-1997.md`
- 本ページは D09-S07 と同論文の D07 文脈版（pd#81 Phase C-1c）
