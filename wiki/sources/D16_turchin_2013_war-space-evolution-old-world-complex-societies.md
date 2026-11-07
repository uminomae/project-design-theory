---
title: "戦争・空間・旧世界複雑社会の進化"
description: "Turchin ら (2013) PNAS 論文。大規模社会の進化を社会間競争（戦争）の選択結果と捉える文化進化モデル。軍事技術がユーラシア・ステップ境界から拡散する過程をシミュレートし、紀元前 1500 年から紀元 1500 年の旧世界帝国分布を R²=0.65 で再現した。"
aliases: ["War, space, and the evolution of Old World complex societies", "ultrasociality"]
tags: [source, "D16", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D16_turchin_2013_war-space-evolution-old-world-complex-societies.pdf"
  manifest_id: "D16-S11"
  oa_url: "https://www.pnas.org/content/pnas/110/41/16384.full.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 戦争・空間・旧世界複雑社会の進化

> **高校生向けのやさしい解説**
>
> 「人類はなぜ顔の見える小さな集団から、知らない人とも協力する巨大な国家へ進化できたか？」を、文化進化のシミュレーションで解いた論文。鍵は「戦争」と「ユーラシアのステップ地帯（草原）」。馬や戦車などの軍事技術がステップとの境目で生まれて農耕地帯に広がり、強い集団間競争が大規模で協力的な社会を選んだ。シミュレーションが過去 3000 年の帝国分布をかなりの精度で再現し、しかも「ステップとの境界」効果を抜くと予測精度が大幅に落ちる、という説得力ある結果。

## 概要

Turchin ら (2013) は、人類社会が小規模な対面協力集団から大規模な匿名社会（国家）へとなぜ・どこで進化したかを説明する文化進化モデルを開発・検証した。著者らは、高コストな制度（ultrasociality）が社会間の激しい競争——とりわけ戦争——の結果として進化したと仮定し、空間的に明示的なエージェントベースシミュレーションを構築。軍事技術（MilTech）がユーラシア・ステップ境界から拡散する過程が、大規模社会（macrostate）の出現パターンを規定するという仮説を立て、紀元前 1500 年から紀元 1500 年までの旧世界の歴史データと照合した結果、モデルの予測が実データと高い一致を示した（R²=0.65）。

## 主要概念

**大規模社会の進化は社会間競争（戦争）の選択結果**

> "We develop a cultural evolutionary model that predicts where and when the largest-scale complex societies arose in human history. The central premise of the model, which we test, is that costly institutions that enabled large human groups to function without splitting up evolved as a result of intense competition between societies—primarily warfare." (p.16384)

国家形成を個人レベルの合理的選択ではなく、集団間選択圧として説明するアプローチ。文化的多レベル選択の枠組み。

**軍事技術のステップ境界からの拡散**

> "Our hypothesis is that the diffusion of horse-related military technologies from the steppe-zone interface to the rest of Afroeurasia results in a characteristic spatiotemporal pattern of spread of intense forms of warfare, leading to macrostate forms of political organization." (p.16388)

馬・戦車・騎兵がステップ地帯との境界から農耕地帯へ拡散し、ultrasociality 形質を持つ大規模政体形成を促進した。

**モデル予測力の依存構造**

> Table 1: Full model R² = 0.65 overall; removing the steppe effect reduces R² to 0.17; removing the elevation effect reduces R² to 0.48.

ステップ効果を除去すると説明力が劇的に低下（0.65→0.17）。軍事技術の空間的拡散パターンが大規模社会の地理的分布を説明する上で不可欠。

**歴史データとの空間的一致**

3 つの時代区分（1500BCE-500BCE / 500BCE-500CE / 500CE-1500CE）で、帝国密度の空間分布がモデル予測と実データで高い一致を示す（Fig.1）。

## 方法

空間的に明示的なエージェントベースシミュレーション。旧世界の農耕可能地域を格子（agricultural cells）に分割し、各セルに ultrasociality 形質と MilTech 形質の 2 つの二値ベクトルを持つ「コミュニティ」を配置。政体間の戦争・征服・分裂（ethnocide）・文化的同化のプロセスを離散時間でシミュレートし、紀元前 1500 年から紀元 1500 年までの 3000 年間を走らせた。予測された帝国密度の空間分布を歴史アトラスから構築した実データと比較し R² で評価。各構成要素を順に除去する感度分析を実施。

## プロジェクトデザインとの関連

「大規模協力は集団間競争という外的圧力の関数として立ち上がる」という構造は、project-design における「個と場のスケール変換」の議論に響く。とくに「ステップ境界」という生態学的境界が変革の起点になるという観察は、PD 論における「縁（境界）が新しい構造の発生源である」という視点の歴史社会学的事例として援用しうる。

## 書誌情報

- 著者: Peter Turchin, Thomas E. Currie, Edward A. L. Turner, Sergey Gavrilets
- 年: 2013
- 出典: *Proceedings of the National Academy of Sciences* 110(41), 16384–16389
- access_status: raw-confirmed（cs 側で PDF 確認済）
- **DOI**: [10.1073/pnas.1308825110](https://doi.org/10.1073/pnas.1308825110)
- **オープンアクセス**: [PNAS PDF](https://www.pnas.org/content/pnas/110/41/16384.full.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D16_turchin_2013_war-space-evolution-old-world-complex-societies.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D16_turchin_2013_war-space-evolution-old-world-complex-societies.pdf)（manifest_id: `D16-S11`）
- **cs 精読ノート**: [knowledge/source-notes/D16/D16-S11_turchin-2013.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D16/D16-S11_turchin-2013.md)
- **この wiki ページ（pd）**: [wiki/sources/D16_turchin_2013_war-space-evolution-old-world-complex-societies.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D16_turchin_2013_war-space-evolution-old-world-complex-societies.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D16/D16-S11_turchin-2013.md`（2026-04-16、claude-opus-4-6, Read PDF 全 6 ページ）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
