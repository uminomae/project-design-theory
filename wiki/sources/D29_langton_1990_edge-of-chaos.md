---
title: "カオスの縁における計算"
description: "Langton (1990, Physica D)。セル・オートマトンのダイナミクスを秩序からカオスへと連続的に変えるパラメータ λ を導入し、複雑な計算（情報の伝達・保存・改変）が秩序相とカオス相のあいだの相転移点——『カオスの縁（edge of chaos）』——で最大化されることを示した、創発的計算と複雑系の古典論文。"
aliases: ["Computation at the Edge of Chaos", "Edge of Chaos"]
tags: [source, "D29", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D29-S15"
compiled: "2026-06-14"
status: 暫定
review_state: 未レビュー
---

# カオスの縁における計算

> **高校生向けのやさしい解説**
>
> ものごとには「カチカチに固まって何も起きない状態（秩序）」と「めちゃくちゃで何も保てない状態（カオス）」があります。ラングトンは、簡単なルールで動くマス目の世界（セル・オートマトン）を、秩序からカオスへと少しずつ変えていく「つまみ（λ）」を考えました。すると面白いことに、**秩序とカオスのちょうど境い目**で、情報を伝えたり覚えたり書き換えたりする「計算らしい複雑なふるまい」が最もよく現れたのです。固すぎても緩すぎてもダメ、その「縁」でこそ豊かなことが起こる——生命や知能のヒントとされる有名なアイデアです。

## 概要

Langton (1990) は、セル・オートマトン (cellular automata, CA) のダイナミクスを秩序的（固定点・周期）からカオス的へと連続的に変化させる単一パラメータ **λ** を導入し、CA のふるまいを定量的に分類した。λ を動かしていくと、CA のふるまいは秩序相からカオス相へと**相転移 (phase transition)** を起こす。Langton の中心的発見は、情報の伝達 (transmission)・保存 (storage)・改変 (modification) という、計算 (computation) に不可欠な能力が、この秩序相とカオス相のあいだの**遷移領域——「カオスの縁 (edge of chaos)」——で最大化される**ことである。秩序が強すぎる相では情報は固定され伝わらず、カオスが強すぎる相では情報は保存されず壊れる。その中間の縁でのみ、情報を保ちつつ伝え変えるという、創発的計算 (emergent computation) が可能になる。この知見は、生命・知能・複雑性が秩序とカオスの境界に立ち上がるという、複雑系科学の象徴的なテーゼとなった。

## 主要概念

**λ パラメータ**

CA の遷移規則において「静止（quiescent）でない状態」へ写る割合を表すパラメータ。λ を 0 から上げていくと、ダイナミクスは秩序（固定・周期）→「複雑」→カオスへと変化する。秩序とカオスを連続的に橋渡しする制御変数。

**カオスの縁 (edge of chaos)**

> 計算に必要な情報の伝達・保存・改変が最大化される、秩序相とカオス相のあいだの相転移領域。

固すぎる秩序でも壊れるカオスでもなく、その境界でのみ複雑な情報処理（創発的計算）が可能になる。

**相転移としての計算能力**

計算能力は連続的に増減するのではなく、秩序↔カオスの相転移に伴って臨界的に立ち上がる。複雑さは中間の臨界点に集中する。

## 創造（creation-space）との関連

「秩序とカオスのちょうど境い目（縁）で、豊かな出来事（創発的計算）が最大化される」という Langton の中心テーゼは、創造が固定（秩序）でも無秩序（カオス）でもなく、その**あいだの縁**で立ち上がるという見方と直接に響き合う。creation-space の「縁」概念——異質なものが接し、定まりきらない境界での出来事——の、複雑系科学における対応物として読める。秩序が強すぎれば創造は固着し、カオスが強すぎれば創造は霧散する。

## 書誌情報

- 著者: Christopher G. Langton
- 年: 1990
- 出典: *Physica D: Nonlinear Phenomena* 42(1–3), 12–37
- access_status: url-verified
- **DOI**: [10.1016/0167-2789(90)90064-V](https://doi.org/10.1016/0167-2789(90)90064-V)
- **オープンアクセス**: [PDF (OSTI / DOE)](https://www.osti.gov/servlets/purl/7264125)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/creation-space/blob/main/knowledge/raw/manifest.md)（manifest_id: `D29-S15`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S15_langton-1990.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D29/D29-S15_langton-1990.md)
- **この wiki ページ（pd）**: [wiki/sources/D29_langton_1990_edge-of-chaos.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D29_langton_1990_edge-of-chaos.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- 本ページは OSTI（DOE）公開 PDF を curl で取得したが、当該スキャン PDF は pdftotext で可読テキストを抽出できなかった（OCR 崩れ）。本ページの内容は、当該論文（Physica D 42, 1990）の確立した学術的理解に基づいて記述し、OSTI の安定リンクを出典として付した。λ・edge of chaos・相転移という核心概念は本論文の中心主張として広く引用されている。
- 生成: 2026-06-14, Claude Opus 4.8（pd#111 Step 3b バッチ2）。cs 側 source-note 生成後に `wiki-cross-check.mjs` で矛盾検査を再実行する。
