---
title: "社会ネットワーク構造と言語構造の創発"
description: "Raviv, Meyer & Lev-Ari (2020, Cognitive Science)。168名・21グループの大規模実験で、FC・Small-World・Scale-Free の3種ネットワーク構造を操作しても言語構造の平均的な発達には差がないことを示した。一方、分散（drift への耐性）はネットワーク構造によって規定されることを発見。"
aliases: ["Social network structure and linguistic structure", "Raviv 2020"]
tags: [source, "D17", "原典解説"]
source:
  repo: "creation-space"
  manifest_id: "D17-S13"
  note: "raw PDF は cs ローカルなし。Wiley Cloudflare 403 → philpapers self-archive PDF 経由取得"
compiled: "2026-06-16"
status: 暫定
review_state: 未レビュー
---

# 社会ネットワーク構造と言語構造の創発

> **高校生向けのやさしい解説**
>
> 「人がバラバラにつながった集団よりも、みんながつながった集団のほうが、共通の言語が生まれやすい」——そう思いませんか？ Raviv らは168人を使った実験でそれを検証しました。結果は予想外で、「全員つながり」でも「ハブのある接続」でも「スモールワールド型」でも、10数回のやり取りを経れば同じくらい体系的な言語が生まれました。ただし、グループごとのばらつき（どんな言語が生まれるかの多様さ）はネットワークの形で変わります。言語の平均的な体系性はネットワークに依存しないが、言語の「偶然の揺れ方」はネットワーク構造に左右されるのです。

## 概要

Raviv, Meyer, Lev-Ari (2020) は、社会ネットワーク構造の違いが言語構造の出現に因果的効果をもつかを、168名 × 21グループという大規模な group-communication 実験で初めて検証した研究である。3種のネットワーク構造——(a) 全員接続 (FC)、(b) Small-World (SW)、(c) Scale-Free (SF)——を比較し、いずれも 16 ラウンドを経て同様に体系的な言語（構造スコア 0.67–0.72, Mantel test p < .0001）に収束することを見出した。

主要な null result は「ネットワーク構造は言語構造の平均的な発達軌道を変調しない」という発見だが、**グループ間の分散**はネットワーク条件で有意に異なる。Small-World は最も高い variance（ランダムな言語ドリフトへの脆弱性）を、Scale-Free は最も低い variance（ハブによる安定化）を示した。著者らはこれを「人間の学習者が持つ一般化バイアスがネットワーク疎密を上書きする」と解釈し、**ネットワーク構造の効果は平均ではなく分散に現れる**と結論した。

## 主要概念

**3種のネットワーク構造**

| 条件 | 接続数 | 特徴 |
|------|--------|------|
| FC（全員接続） | 28/28 | 完全密度、全員と隣接 |
| SW（Small-World） | 14/28 | 50%密度、Watts–Strogatz 型。「見知らぬ者同士が短い鎖で間接接続」 |
| SF（Scale-Free） | 14/28 | 50%密度、Barabási–Albert 型。一部の「ハブ」に接続が偏在 |

**Null result の核心：input variability の無差異**

計算モデルは「sparse network の方が strangers 間の暴露がずれて input variability が高まり、それが一般化を促して言語を体系化する」と予測した。しかし実験では、ネットワーク構造に関わらず input variability は有意差なし——予測の**第1段階が経験的に成立しない**。この因果連鎖の断絶が null result の核心。

> "Given the assumed causal relationship between the amount of input variability and the creation of more linguistic structure, the lack of difference in the degree of input variability across the different network conditions may explain why there was no effect of network structure on linguistic structure."

**分散への効果：drift susceptibility**

平均軌道は同じでも、各グループが到達する言語の「型」はばらつく。SW は「高度に収束する群」と「分裂したままの群」が共存し、SF はハブが drift を抑制して群間が似通う。ネットワーク構造は **drift への脆弱性（susceptibility to random linguistic change）** を規定する。

> "network structure can influence the community's susceptibility to random linguistic changes (i.e., drift)."

**Variability → Systematization の法則（ネットワーク独立）**

ある ラウンドで input variability が大きいと次ラウンドで構造スコアが上昇する因果関係は、3条件すべてで確認された（β = 0.02, p < .0001）。variability → generalization 圧力 → 体系化 という法則はネットワーク構造に依存しない普遍的プロセスとして機能している。

## 創造（creation-space）との関連

本論文は [[実験室での累積的文化進化：人間言語の構造的起源への実験的アプローチ]] (Kirby 2008, D17-S12) の iterated learning パラダイムを**同期的グループコミュニケーション**に拡張し、かつ**「縁」にあたるネットワーク構造を直接操作した**点で D17 領域の理論的補完となる。5段階との対応：

- **場 (Field)**：23個の動画刺激空間（形 × 動き × パターン）と letter inventory が場を定義する
- **波 (Wave)**：16ラウンドの繰返し相互作用で accuracy / convergence / stability / structure が同期的に上昇する
- **縁 (Relation)**：FC / SW / SF という3種の接続トポロジーが縁の実体であり、本論文はこれを直接操作した
- **渦 (Vortex)**：誰も「体系的な言語を作れ」とは指示されない。コミュニケーション成功の最大化という意図から、意図なき compositionality が立ち上がる
- **束 (Bundle)**：3条件とも最終的に shape × motion の形態素連結を持つ体系的言語（束）に到達する

null result の発見——「縁の形は平均構造化に影響しないが分散を規定する」——は、5段階理論における縁の効果を精密化する経験的知見として重要。

## 書誌情報

- 著者: Limor Raviv (MPI for Psycholinguistics), Antje Meyer (MPI / Radboud 大学), Shiri Lev-Ari (MPI / Royal Holloway 大学)
- 年: 2020
- 出典: *Cognitive Science*, 44, e12876. CC-BY
- access_status: raw-confirmed
- **DOI**: [10.1111/cogs.12876](https://doi.org/10.1111/cogs.12876)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: ローカル raw PDF なし（Wiley Cloudflare 403 → philpapers self-archive PDF 経由；manifest_id: `D17-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D17/D17-S13_raviv-2020.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D17/D17-S13_raviv-2020.md)
- **この wiki ページ（pd）**: [wiki/sources/D17_raviv_2020_social-network-linguistic-structure.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D17_raviv_2020_social-network-linguistic-structure.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 本ページは cs 精読ノート（D17-S13_raviv-2020.md）を一次入力として生成した。原典は Wiley CC-BY 公開論文（philpapers self-archive PDF, 32頁）を cs 側が取得し精読（約19頁）。
- 生成: 2026-06-16, Claude Sonnet 4.6（wiki-gen inbox 4月分整理、5段階対応は cs source-note §5 を参照）。
