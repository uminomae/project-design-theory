---
title: "生態系のレジリエンスと安定性"
description: "Holling (1973, Annu. Rev. Ecol. Syst.)。生態系を平衡への復元（安定性）ではなく、撹乱を吸収して関係を持続させる能力（レジリエンス）の観点から捉え直し、複数の安定領域（domains of attraction）という考え方を提示したレジリエンス概念の起点となる古典論文。"
aliases: ["Resilience and Stability of Ecological Systems"]
tags: [source, "D20", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D12_holling_1973_resilience-stability.pdf"
  manifest_id: "D20-S13"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# 生態系のレジリエンスと安定性

> **高校生向けのやさしい解説**
>
> 自然のシステムを「どれだけ早く元の状態に戻るか（安定性）」だけで測ると、大事なことを見落とします。森や湖は、たまに大きく揺さぶられても、生き物どうしの関係そのものは保たれ続けることがある——この「ゆれてもつぶれない力」をホリングはレジリエンスと名づけました。しかも自然は戻る先がひとつとは限らず、別の状態へ移ってそこで安定することもある。「最大の収穫を目指して揺れを抑え込む」管理が、かえって絶滅のリスクを高めることさえある、と警告した論文です。

## 概要

Holling (1973) は、生態系の振る舞いを理解する二つの異なる見方——量的な「安定性 (stability)」と質的な「レジリエンス (resilience)」——を区別した。安定性とは撹乱の後に平衡状態へ復元する速さと程度を指すのに対し、レジリエンスとは系が変化や撹乱を吸収しながら個体群間の**関係を持続させる能力**を指す。著者は、平衡中心の静的な見方が非平衡・遷移状態にある自然系の振る舞いを捉えきれないことを指摘し、相平面上の軌道・複数の安定領域（domains of attraction）という枠組みを導入した。最大持続収量のような平衡中心の管理戦略が、逆説的に絶滅の確率を高めうると論じ、変動の振幅ではなく**存続（persistence）の条件**へ注意を移すことを提唱した。後年のレジリエンス科学・社会生態システム論の出発点となる。

## 主要概念

**安定性とレジリエンスの区別**

- **安定性 (stability)**: 撹乱後に平衡へ戻る速さと程度。「いかに早く・正確に元に戻るか」。
- **レジリエンス (resilience)**: 系が変化を吸収しつつ存続し、関係構造を保つ能力。「いかに大きく揺さぶられても崩壊しないか」。

両者は独立しうる。復元は速いがわずかな撹乱で崩壊する系（安定だが脆弱）も、復元は遅いが大きな撹乱を吸収する系（不安定だがレジリエント）もありうる。

**複数の安定領域（domains of attraction）**

系は単一の平衡へ収束するとは限らず、相平面上に複数の安定領域をもちうる。撹乱が系を別の領域へ押し込めば、系はまったく異なる状態で安定する。これが後の「レジーム・シフト」「オルタナティブ安定状態」の概念的源流となる。

**平衡中心の見方の限界**

> "the constancy of its behavior becomes less important than the persistence of the relationships"

自然系は常に遷移状態にあり、平衡近傍の解析では不十分。存続の条件に注目すべきである。

## 創造（creation-space）との関連

「揺れを抑え込む管理がかえって崩壊を招く」というレジリエンスの逆説は、創造の場が一様な安定を志向すると硬直し、適度な撹乱と変動を吸収しながら関係を保つことで持続する、という見方に接続する。複数の安定領域という像は、場が一つの定常状態に閉じず、撹乱を契機に別の状態へ移行しうる（渦・束への転回）創造のダイナミクスと対応づけて読める。

## 書誌情報

- 著者: C. S. Holling（Institute of Resource Ecology, University of British Columbia）
- 年: 1973
- 出典: *Annual Review of Ecology and Systematics* 4, 1–23
- access_status: raw-confirmed
- **オープンアクセス**: [PDF (IIASA RP-73-003)](http://pure.iiasa.ac.at/id/eprint/26/1/RP-73-003.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D12_holling_1973_resilience-stability.pdf](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/D12_holling_1973_resilience-stability.pdf)（manifest_id: `D20-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D20/D20-S13_holling-1973.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D20/D20-S13_holling-1973.md)
- **この wiki ページ（pd）**: [wiki/sources/D20_holling_1973_resilience-stability.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D20_holling_1973_resilience-stability.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 本ページは cs ローカル raw PDF（`knowledge/raw/D12_holling_1973_resilience-stability.pdf`）を pdftotext で抽出した本文を一次入力として生成した。manifest の domain_id が D20 のため wiki_stem は `D20_holling_1973_resilience-stability`（local_file の D12 接頭辞を置換）。
- 生成: 2026-06-14, Claude Opus 4.8（pd#111 Step 3b バッチ2）。cs 側 source-note 生成後に `wiki-cross-check.mjs` で矛盾検査を再実行する。
