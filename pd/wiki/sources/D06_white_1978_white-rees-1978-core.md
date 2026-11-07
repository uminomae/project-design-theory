---
title: "重いハロにおけるコア凝縮 — 銀河形成と階層的クラスタリングの 2 段階理論"
description: "White & Rees (1978) MNRAS 論文。銀河形成を純粋重力過程（N体・クラスタリング）とガス力学的過程（散逸・放射冷却）の二段階に分け、暗黒物質ハロ内でガスが冷却・凝縮する『集中した光る核』モデルを提唱した古典。"
aliases: ["Core condensation in heavy halos", "two-stage galaxy formation"]
tags: [source, "D06", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D06/D06-S02_white-rees-1978.md"
  manifest_id: "D06-S02"
  oa_url: "https://academic.oup.com/mnras/article-pdf/183/3/341/2943374/mnras183-0341.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 重いハロにおけるコア凝縮 — 銀河形成の 2 段階理論

> **高校生向けのやさしい解説**
>
> 銀河はどう生まれたのか？ 1978 年に White と Rees は「重力で物質が集まるだけでは銀河の大きさやしぶとさを説明できない。ガスが冷えて中心に集まる『散逸過程』が必要だ」と論じました。暗黒物質の大きなハロの中で、ガスだけが冷えて中央に小さな『光る核（銀河）』を作る——という現代銀河形成理論の出発点となったモデル。

## 概要

宇宙の物質の大部分は初期に小さな「暗い」天体に凝縮し、その後階層的クラスタリングを経て大きな構造を形成したと提案する論文。銀河形成を純粋な重力過程（N 体効果、クラスタリング）とガス力学的過程（散逸と放射冷却）の二段階に分けて説明する。暗黒物質ハロの中でガスが冷却・凝縮し、銀河は広大なダークハロに埋め込まれた集中した光る核として形成されるというモデルを提唱する。このモデルでは密度パラメータ Ω が約 0.2、暗黒物質が全質量の約 80% を占め、観測される銀河の光度関数や半径と整合する。

## 主要概念

**散逸過程が銀河形成に不可欠**

> "The observed sizes of galaxies and their survival through later stages of the hierarchy seem inexplicable without invoking substantial dissipation; this dissipation allows the galaxies to become sufficiently concentrated to survive the disruption of their halos in groups and clusters of galaxies." (p.341)

純粋な重力的クラスタリングだけでは銀河の観測サイズと、銀河団内での銀河の生存を説明できない。ガス散逸冷却で銀河が十分集中し、ハロが破壊されても生き残る。

**階層的クラスタリングの下部構造消滅**

> "a three or four member group which is more tightly bound than its constituent members will be transformed by relaxation effects into an amorphous system in <= 1 crossing time." (p.347)

無散逸クラスタリングでは、各段階で崩壊した系の下部構造が約 1 交差時間で消滅し、自己相似的な質量分布が維持される。

**冷却時間による銀河質量上限**

> "If t_cool <= t_dyn, any gas within the potential well must cool and collapse to the centre, probably fragmenting into stars." (p.348)

冷却時間と力学的時間の比較が銀河形成の鍵。t_cool < t_dyn でガスは冷却凝縮、t_cool > t_dyn では凝縮できない。これが銀河の最大質量・光度の上限を決定。

**小さな銀河が先に形成され光る核として生き残る**

> "the luminous material that condensed in their centres may nevertheless have survived to the present day in identifiable stellar systems." (p.349)

低質量ハロ内で初期に凝縮した恒星系は、後にハロが大きな系に合体・破壊されても、光る核として現在まで生き残る。大銀河周囲の衛星銀河の存在を自然に説明。

**光度関数と観測の整合**

> "the form and scale of our luminosity function compare quite well, at least at the bright end, with those of the fitting functions empirically derived by Schechter (1976)." (p.354)

具体的モデルパラメータ（Ω = 0.2, h = 0.5, F_i = 0.2）で、銀河光度関数が観測 Schechter 関数と明るい端で良一致。

## 方法

理論的論考と簡単な解析モデル。Press-Schechter 型の質量関数推定、冷却時間と力学的時間の比較、N 体シミュレーションの引用。

## プロジェクトデザインとの関連

「重力（場）と散逸（時間スケール）の組み合わせから個別の構造（銀河）が立ち上がる」という観察は、project-design における「複数のプロセスの結合から個が立ち上がる」観点に物理学的根拠を提供する。Springel (D06-S11) の Millennium Simulation など現代シミュレーションの理論的基盤となる古典。

## 書誌情報

- 著者: S. D. M. White, M. J. Rees
- 年: 1978
- 出典: *Monthly Notices of the Royal Astronomical Society* 183, 341–358
- access_status: url-verified
- **DOI**: [10.1093/mnras/183.3.341](https://doi.org/10.1093/mnras/183.3.341)
- **オープンアクセス**: [MNRAS PDF](https://academic.oup.com/mnras/article-pdf/183/3/341/2943374/mnras183-0341.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D06/D06-S02_white-rees-1978.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S02_white-rees-1978.md)（manifest_id: `D06-S02`）
- **cs 精読ノート**: [knowledge/source-notes/D06/D06-S02_white-rees-1978.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D06/D06-S02_white-rees-1978.md)
- **この wiki ページ（pd）**: [wiki/sources/D06_white_1978_white-rees-1978-core.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D06_white_1978_white-rees-1978-core.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D06/D06-S02_white-rees-1978.md`（2026-04-10、Claude Opus 4.6, WebFetch → PDF Read 全 18 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
