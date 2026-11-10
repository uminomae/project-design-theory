---
title: "収穫逓増と経済地理（Krugman 1991）"
description: "Krugman (1991)。製造業がなぜ特定の地域に集まるのかを、規模の経済と輸送費の兼ね合いで説明するモデル。大きな市場が製造業を呼び、製造業が市場を大きくする循環があり、条件がある境目を越えると、地域が均等な状態から一つの地域への集中へ移る。"
aliases: ["Increasing Returns and Economic Geography", "Krugman 1991"]
tags: [source, "D21", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D21-S13"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 収穫逓増と経済地理（Krugman 1991）

> **高校生向けのやさしい解説**
>
> 工場や会社は、なぜ大都市に集まるのでしょう。Krugman は、人が多い地域は売る相手も多く、物も手に入りやすいので、工場がそこに来て、工場が来るとさらに人が集まる、という循環があると考えました。運ぶ費用が十分に下がると、少しだけ人が多かった地域に工場がどんどん集まり、どの地域が中心になるかは、そのときのわずかな差で決まります。

## 概要

Paul Krugman（マサチューセッツ工科大学）の論文。1990 年 3 月に NBER の作業論文（No. 3275）として出て、1991 年に *Journal of Political Economy* に載った。製造業の立地の集中を、収穫逓増（規模の経済）と輸送費の相互作用として、一般均衡のモデルで形にする。精読ノートは NBER の作業論文の版（26 頁）を全部読んでいる。頁は作業論文の版のもの。

## 主要概念

### 経済地理は主流の経済学で脇に置かれてきた

> "The study of economic geography -- of the location of factors of production in space -- occupies a relatively small part of standard economic analysis." (p.1)

収穫逓増は不完全な競争を含むので、数理で扱いにくかった。そのため経済地理の議論は、論理の欠けたモデルか、言葉だけの議論に頼ってきた、と著者は書く（p.2）。

### 地域が分かれていく循環

> "A region with a relatively large nonrural population will be an attractive place to produce both because of the large local market and because of the availability of the goods and services produced there; this will attract still more population, at the expense of regions with smaller initial production; and the process will feed on itself until the whole of the nonrural population is concentrated in a few regions." (p.7)

> "What we will see is that it is possible to develop a very simple model of regional divergence based on the interaction of economies of scale with transportation costs." (p.3)

### 状態が変わる境目

> "Thus the geography will go through a kind of change of state when the index crosses a critical level, much as water changes its qualitative behavior when the temperature goes from a little above to a little below freezing." (p.7)

製造業の消費の割合 μ、代替の弾力性 σ（規模の経済の強さの逆の目安）、輸送費の三つから作る指標 ν が 1 を下回ると、ほかの製造業が全部地域 1 にあるときに地域 2 で生産を始めても利益が出ず、地域の分岐が長い目で見た均衡になる（p.18）。輸送費が低く、製造業の割合が高く、規模の経済が強いほど分岐が起きやすい。

### どの地域が中心になるかは初めの条件に敏感

> "Second, the details of the geography that emerges -- which regions end up with the population -- depend sensitively on initial conditions." (p.7)

輸送費が境目を下回ったときに、ある地域の人口が少しだけ多ければ、その地域がほかの地域の分まで人口を得る。

### 多くの地域への広げ

> "Consider, then, the economy shown in Figure 4. It contains six regions, laid out in a circle... What will long-run equilibrium look like in this model? Obviously one possibility is that manufactures production will be evenly spread among the six regions. A second possibility is the reverse: that all manufactures production will concentrate in a single 'metropolis'." (p.23)

## 方法

Dixit と Stiglitz（1977）の型の独占的競争の枠組みで、二つの地域と二つの部門（農業は収穫一定で土地に縛られ、製造業は収穫逓増で動ける）の一般均衡のモデルを組む。収束と分岐を分ける境目の条件を解析で導き、解析で扱いにくいところは数値計算（図 1・図 3）で補う。

## 限界

- 農産物の輸送費をゼロとするなど、強い単純化を置く。著者もとても特殊なモデルだと認める（p.22）。
- モデルにはっきりした時間の動きは無く、均衡どうしを比べる。
- 主題は産業の立地の経済学で、何かが生まれる過程を論じたものではない。

## 創造の5段階モデルとの関連

精読ノートは、[[創造の5段階モデル]] との対応を次のように読む（著者の主張ではない）。農業が均等に散らばった平らな初めの状態を場に、輸送費が境目を下回ったときに小さな初めの差が強まっていく循環を波に、収束と分岐を分ける境目の曲線を縁に、製造業が一つの地域に集まった長い目で見た均衡を渦に、多くの地域での中心の都市と後背地の階層を束に、それぞれ当てている。

## 書誌情報

- 著者: Paul Krugman
- 年: 1991
- 出典: *Journal of Political Economy* 99(3), 483–499
- **DOI**: [10.1086/261763](https://doi.org/10.1086/261763)
- **作業論文の版**: NBER Working Paper No. 3275（1990 年 3 月）。[NBER の PDF](https://www.nber.org/system/files/working_papers/w3275/w3275.pdf)（DOI: 10.3386/w3275）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D21-S13`）
- **cs 精読ノート**: [knowledge/source-notes/D21/D21-S13_krugman-1991.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D21/D21-S13_krugman-1991.md)

## 出典メモ

- 材料は創造とはの精読ノート（NBER の作業論文の版の全 26 頁を読んだ記録）だけ。引用はノートの文のまま。
- 雑誌の版の DOI は、創造とはの経済学の照合の記録が Crossref で確かめたもの。同じ記録が作業論文の版で本文照合済としている。
