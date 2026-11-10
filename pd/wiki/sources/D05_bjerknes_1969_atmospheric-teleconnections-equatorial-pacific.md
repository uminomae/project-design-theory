---
title: "赤道太平洋からの大気のテレコネクション（Bjerknes 1969）"
description: "Bjerknes (1969)。赤道太平洋の海面水温の高い冬に、北東太平洋の中緯度の偏西風が強まることを三つの冬の観測で示し、赤道に沿う東西の循環をウォーカー循環と名づけ、海と大気が互いを強め合う連鎖を書いた論文。"
aliases: ["Atmospheric Teleconnections from the Equatorial Pacific", "D05_bjerknes_1969_bjerknes-1969-atmospheric-teleconnections"]
tags: [source, "D05", "原典解説"]
source:
  repo: "cs"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D05-S10"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 赤道太平洋からの大気のテレコネクション（Bjerknes 1969）

> **高校生向けのやさしい解説**
>
> 太平洋の赤道のあたりは、ふだんは西が暖かく東が冷たくなっています。Bjerknes は、東のほうの海が暖かくなった冬には、遠く離れた北太平洋の西風まで強くなることを、観測の記録で示しました。さらに、東西の水温の差が風を生み、その風が水温の差を保つ、という海と空気の助け合いの輪を書きました。この輪は、弱まる向きにも同じように回ります。

## 概要

J. Bjerknes（カリフォルニア大学ロサンゼルス校・気象学科）が 1969 年に *Monthly Weather Review* に発表した論文。赤道太平洋の海面水温が高い冬に、北東太平洋の中緯度の偏西風が強まること（"high index" の応答）を、1957–58 年・1963–64 年・1965–66 年の三つの冬で示す。あわせて、赤道太平洋の東西の水温の差で動く東西の循環を「Walker Circulation」と呼び、Gilbert Walker が統計で定めた南方振動（Southern Oscillation）のしくみの一部とした。

このページは、論文の全文（10 頁）を読んだ精読ノートから作った。

## 主要概念

### 赤道の海が暖かい冬に、中緯度の西風が強まる

> "The 'high index' response of the northeast Pacific westerlies to big positive anomalies of equatorial sea temperature, observed in the winter of 1957-58, has been found to repeat during the major equatorial sea temperature maxima in the winters of 1963-64 and 1965-66."

説明として著者は、赤道の海から大気のハドレー循環の上昇する側へ渡る熱がふだんより多いと、その循環が強まり、中緯度の偏西風の帯へ運ぶ角運動量が増える、と述べる。

### 水温の高まりの原因

> "The maxima of the sea temperature in the eastern and central equatorial Pacific occur as a result of anomalous weakening of the trade winds of the Southern Hemisphere with inherent weakening of the equatorial upwelling."

南半球の貿易風が弱まり、赤道の湧昇が弱まることで、東部と中部の赤道太平洋の水温が上がる。

### ウォーカー循環と南方振動

> "The Walker Circulation described in section 4 must be part of the mechanism of the still larger 'Southern Oscillation' statistically defined by Sir Gilbert Walker (1923, 1924, 1928, 1937)..."

> "The fluctuations in the running of the Walker Circulation are therefore likely to initiate some of the major pulses of the Southern Oscillation."

### 海と大気の連鎖

弱まる向き：

> "A decrease of the equatorial easterlies weakens the equatorial upwelling, thereby the eastern equatorial Pacific becomes warmer and supplies heat also to the atmosphere above it. This lessens the east-west temperature contrast within the Walker Circulation and makes that circulation slow down."

強まる向き：

> "This chain reaction shows that an intensifying Walker Circulation also provides for an increase of the east-west temperature contrast that is the cause of the Walker Circulation in the first place."

東風が弱まると湧昇が弱まり、東の海が暖まり、東西の温度の差が小さくなって循環がさらに弱まる。逆に、循環が強まると温度の差が大きくなり、それが循環をさらに強める。精読ノートは、この段落を、のちに Bjerknes フィードバックと呼ばれる考えの出どころとしている。

### 著者が残した課題

> "Further research is needed to see if the triggering of pulses in the Southern Oscillation regularly does originate from equatorial ocean-atmosphere interaction in the Pacific."

> "Very desirable for checking purposes is, of course, also the eventual numerical simulation of the described ocean-atmosphere interaction by sufficiently realistic dynamic models."

## 方法

観測の記録の分析。カントン島の月ごとの海面水温と気温（1950–1967）、ジャカルタの月ごとの気圧、五つの 1 月（1963–1967）の全球の海面気圧の分布、1963 年のイースター島とラバウルの気圧、1967 年 3 月の気象衛星の雲の合成画像を使う。冷たく乾いた年（1963・1965・1967）と暖かく湿った年（1964・1966）の 1 月を比べ、1963 年の出来事を月を追ってたどる。

## 限界

- 月ごとの記録と、相関・力学の類推で組み立てた議論で、熱と運動量の収支の計算は閉じていない。数値モデルでの確かめは、著者自身が今後の課題としている。
- 中緯度から熱帯への返りは論じていない。
- 南方振動の周期を、力学から説明してはいない。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を次のように読む（著者の主張ではない）。東西の水温の差のある海を場に、年々の振動を波に、二つの循環と海と大気のあいだの熱のやりとりを縁に、自分を強める連鎖を渦に、強く対応させる。全球へのつながりは束に中くらいに対応させている。

## 書誌情報

- 著者: J. Bjerknes
- 年: 1969
- 出典: *Monthly Weather Review*, 97(3), 163–172
- **全文**: [ハーバード大学の授業の頁に置かれた写し](https://courses.seas.harvard.edu/climate/eli/Courses/EPS281r/Sources/ENSO/Bjerknes-1969.pdf)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D05-S10`）
- **cs 精読ノート**: [knowledge/source-notes/D05/D05-S10_bjerknes-1969.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D05/D05-S10_bjerknes-1969.md)

## 出典メモ

- 材料は cs の精読ノート（D05-S10。全文を読んだ記録）だけ。引用はノートの文のまま。ノートは引用に頁を付けていないので、このページも付けていない。
- 前の頁（`D05_bjerknes_1969_bjerknes-1969-atmospheric-teleconnections`）は、原典を取れずに書かれていた。2026-11-10 に精読ノートから作り直し、前の頁は `pd/wiki-drafts/sources/` に移した。
