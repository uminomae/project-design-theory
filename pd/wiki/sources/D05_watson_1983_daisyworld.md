---
title: "Daisyworld — 生物-環境結合系のホメオスタシス寓話"
description: "Watson & Lovelock (1983) Tellus B 論文。黒白 2 種のデイジーが太陽光度の変化に対して惑星温度を自己調節する仮想惑星モデル『Daisyworld』を構築し、生物と環境の密に結合したシステムが温度安定化を生むことを示した。"
aliases: ["Daisyworld parable", "biological homeostasis"]
tags: [source, "D05", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md"
  manifest_id: "D05-S11"
  oa_url: "https://b.tellusjournals.se/articles/10.3402/tellusb.v35i4.14616/"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# Daisyworld — 生物-環境結合系のホメオスタシス寓話

> **高校生向けのやさしい解説**
>
> 「生き物がいると地球の気温が安定する」というガイア仮説を、誰でも納得できる単純な仮想惑星モデルで示した寓話的論文です。惑星には黒いデイジーと白いデイジーしかいない。黒は熱を吸収し白は反射する。太陽が強くなると白が増えて反射が増し、弱くなると黒が増えて吸収が増す——気温は自然と心地よい範囲に保たれる。生命と環境を切り離さず「ひとつの結合系」として見ると、こんな調節が現れる、というデモです。

## 概要

Watson & Lovelock (1983) は、生物圏と地球環境を「密に結合した（closely-coupled）システム」として捉え、その性質を調査するため意図的に単純化された仮想惑星「Daisyworld」を数学的に定義し数値シミュレーションで挙動を解析した。Daisyworld は雲も温室効果もない惑星で、唯一の植物として 2 種のデイジー（黒：アルベド 0.25、白：0.75）が生育する。デイジーの成長率は温度の関数（22.5°C でピーク、5°C と 40°C でゼロ）であり、デイジー自体は自らのアルベドで温度を変える。非線形多重フィードバックの数理解析により、(i) デイジーが存在することで太陽光度 L の広い範囲にわたって惑星温度が安定化される、(ii) L 増加に対して定常温度が *減少* しうる、(iii) フィードバックの向きを反転させても homeostasis は維持される、(iv) デイジーなしの惑星より常にデイジーのある惑星の方が安定、という結論を得た。

## 主要概念

**生物と環境は密に結合した一つのシステムである**

> "The biota have effected profound changes on the environment of the surface of the earth. At the same time, that environment has imposed constraints on the biota, so that life and the environment may be considered as two parts of a coupled system." (Abstract, p.284)

> "One can think of the biota and their environment as two elements of a closely-coupled system: perturbations of one will affect the other and this may in turn feed back on the original change." (Sec.1, p.284)

論文の存在論的前提。生物圏と物理環境は因果的に相互作用する 2 成分システムであり、両者のフィードバック関係こそが研究対象である。

**Daisyworld は意図的に単純化された寓話**

> "we are not trying to model the Earth, but rather a fictional world which displays clearly a property which we believe is important for the Earth." (Sec.1, p.284)

Daisyworld は地球の近似ではなく、仮説の構造を純化するための思考実験である。「parable（寓話）」の語義はここに根ざす。

**4 本の基本方程式**

デイジーの個体群動態 dα/dt = α(xβ − γ)、肥沃地面 x = p − α_b − α_w、温度依存成長率 β = 1 − 0.003265(22.5 − T_l)²、惑星エネルギーバランス σ(T_e + 273)⁴ = SL(1 − A)、アルベド A = α_g A_g + α_b A_b + α_w A_w。これらの非線形連立系が温度のホメオスタシスを自然に生む。

**定常状態における温度の固定**

> "T_b* − 22.5 = 22.5 − T_w*." (eq.12, p.286)

両種の成長率が等しい定常状態では、黒白デイジーの局所温度が成長率最適点 22.5°C を中心に対称に配置される。これが温度安定化の数理的根拠。

## 方法

- 概念モデル：黒白 2 種のデイジー、雲なし、温室効果なし、肥沃地面 p
- 数値シミュレーション：太陽光度 L を緩やかに変化させたときの定常解の追跡
- 解析：dα/dt = 0 の非自明定常解を解析的に導出し、対称性論議で温度固定を示す
- 拡張：q（熱再分配パラメータ）を変えて完全伝導〜完全絶縁の幅で挙動を比較

## プロジェクトデザインとの関連

「生物と環境を切り離して扱わず、結合系として見たときに新たな性質（ホメオスタシス）が立ち上がる」という構図は、project-design における「個と場の境界が事後的に決まる」という観点に接続する。Daisyworld は「単純化された寓話モデル」が複雑現象の核心構造を露わにする好例として、PD 論におけるモデル化の方針にも示唆を持つ。

## 書誌情報

- 著者: Andrew J. Watson, James E. Lovelock
- 年: 1983
- 出典: *Tellus B: Chemical and Physical Meteorology* 35B(4), 284–289
- 受領: 1982-10-20 / 最終形：1983-02-14
- access_status: url-verified
- **DOI**: [10.3402/tellusb.v35i4.14616](https://doi.org/10.3402/tellusb.v35i4.14616)
- **オープンアクセス（CC BY）**: [Tellus B HTML / PDF](https://b.tellusjournals.se/articles/10.3402/tellusb.v35i4.14616/)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md)（manifest_id: `D05-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md)
- **この wiki ページ（pd）**: [wiki/sources/D05_watson_1983_daisyworld.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D05_watson_1983_daisyworld.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D05/D05-S11_watson-lovelock-1983-daisyworld.md`（2026-04-15、Claude Opus 4.6, WebFetch → PDF Read 全 6 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-1）
