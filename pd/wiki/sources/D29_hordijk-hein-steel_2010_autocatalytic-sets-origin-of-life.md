---
title: "自己触媒集合と生命の起源（Hordijk, Hein & Steel 2010）"
description: "Hordijk, Hein & Steel (2010, Entropy) のレビュー。生命の起源の多くのシナリオに共通する自己触媒集合を、RAF（Reflexively Autocatalytic and F-generated）集合として形式化し、触媒活性が系の大きさに比例して増えるだけで RAF 集合が高い確率で現れるという著者らの先行研究の結果をまとめる。RAF は自己維持する生命の必要条件だが十分条件ではないとし、扱わない三つの問題を挙げる。"
aliases: ["Hordijk, Hein & Steel 2010", "RAF framework"]
tags: [source, "D29", "原典解説"]
source:
  repo: "cs"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D29-S10"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 自己触媒集合と生命の起源（Hordijk, Hein & Steel 2010）

> **高校生向けのやさしい解説**
>
> 生命の始まりについての多くの説には、分子どうしが互いの反応を助け合って輪が閉じる「自己触媒集合」が出てきます。Hordijk らは、この集合を RAF という数学の形で定義し、触媒の働きが系の大きさに比例して増えるだけで、こうした集合が高い確率で現れることを示してきました。ただし、それだけで生命になるわけではなく、膜で囲うことや遺伝のしくみは別に要る、と著者たち自身が書いています。

## 概要

Hordijk, Hein & Steel (2010) は、生命の起源（origin of life）の研究で使われる自己触媒集合を、RAF 集合という数学の枠組みで紹介するレビューである。生命の起源の標準的なシナリオ（無機・有機化学 ⇒ 前生物的代謝 ⇒ RNA ワールド ⇒ タンパク質 ⇒ DNA）のいくつもの段階で、自己触媒的な輪が必要になると著者らは見る。RAF 集合は、触媒反応の系のうち、どの反応も集合の中の分子に触媒され（RA）、どの反応物も外から供給される食物集合 F から集合の中の反応で作れる（F）、という二つの条件を満たすものと定義される。著者らの先行研究では、RAF 集合を見つける多項式時間のアルゴリズムを作り、Kauffman の二値ポリマーモデルで、触媒活性が系の大きさに比例して増えるだけで RAF 集合が高い確率で現れることを示した。これは、指数的な増加が要るとした Kauffman の元の議論とは違う結果である。著者らは同時に、RAF は自己維持する生命の必要条件だが十分条件ではないとして、扱っていない三つの問題を挙げる。

## 主要概念

**生命の起源のシナリオに共通する自己触媒集合**

> "Despite differences between various proposed scenarios, one common element seems to be the emergence of an autocatalytic set or cycle at some stage." (Abstract)

> "A collectively autocatalytic set is a set of molecules and catalyzed reactions where each molecule is created by at least one reaction from this set, and each reaction is catalyzed by at least one molecule from the set." (§1.3)

**RAF 集合と触媒の閉包**

> "an RAF set formally captures the notion of 'catalytic closure', i.e., a self-sustaining set supported by a steady supply of (simple) molecules from some food set." (§2)

> "autocatalytic cycles, hypercycles, and collectively autocatalytic sets can all be seen as particular instances of RAF sets." (§2)

著者らは、RAF がペトリネットの枠組みでも書き直せること、Rosen の代謝の閉包の扱いと似たところがあることにも触れる。

**触媒活性は系の大きさに比例して増えれば足りる**

> "Our computational results in [37] indicate that only a linear growth in catalytic activity (with system size) is necessary for RAF sets to appear with high likelihood in Kauffman's binary polymer model. This was subsequently verified analytically [39]. The level of catalysis necessary for RAF sets to occur in our simulations is between 1 and 2 reactions per molecule (on average), a number which is (bio)chemically quite realistic, especially for proteins [53–55]." (§3)

この結果は本論文の中で新しく示されたものではなく、著者らの先行研究（文献 [37]・[39]）の要約である。

**RAF は必要条件だが十分条件ではない**

> "It is important, though, to stress that the existence of an RAF, while necessary for the emergence of self-sustaining life, is far from sufficient for it for at least three reasons." (§3)

三つの理由は、(1) 反応物の濃度や化学量論、反応を妨げる分子などを無視していること、(2) 反応を膜などの境界で物理的に囲う問題（containment problem）を扱わないこと、(3) 前生物的な系での遺伝と自然選択を直接扱わないこと、である。

## 方法

レビューと数学の枠組みの紹介。触媒反応系（CRS）を、分子の集合・反応の集合・触媒の関係・食物集合で定め、RAF 集合をその部分集合として三つの条件で定義する。RAF 集合を見つけるアルゴリズムは、先行研究 [37] で示されたもので、本論文では概要だけが述べられる（平均の計算時間は反応ネットワークの大きさに対して二次より小さい）。著者らは今後の課題を次のように書く。

> "The next steps would be (1) to include dynamics into the models in the form of reaction kinetics and the evolution of reaction sets (for example by using a genetic algorithm to evolve reaction sets [57]), and (2) to use the RAF framework to analyze real (bio)chemical networks as discussed above (e.g., the Beilstein database and bacterial metabolic networks)." (§4)

出典ノートが挙げる留意点として、線形の増加で足りるという結果は二値ポリマーモデルでのもので、ほかのモデルで同じことが成り立つかは示されていない。

## 関連

- 出典ノートは、この論文を生命の起源の最小の構造モデルとして読み、創造の五段階のうち場・縁・渦・束に強い対応があり、波は弱いと評価している。波が弱いのは、論文が反応速度などの動力学を意図して扱っていないためとされる。これは出典ノートの読みで、著者の主張ではない。
- 出典ノートは、[[D20_friston_2013_life-as-we-know-it|私たちが知っている生命（Friston 2013）]] と対比している。Friston がマルコフ・ブランケットという境界から生命らしさを形式化するのに対し、この論文は反応ネットワークの触媒の閉包という別の種類の境界を示す、という読みである。

## 書誌情報

- 著者: Wim Hordijk（University of Oxford, Dept. of Statistics）, Jotun Hein（同）, Mike Steel（University of Canterbury, Allan Wilson Centre for Molecular Ecology and Evolution, Biomathematics Research Centre）
- 年: 2010
- 出典: *Entropy* 12(7), 1733–1742（Review）
- access_status: raw-confirmed
- **DOI**: [10.3390/e12071733](https://doi.org/10.3390/e12071733)
- **オープンアクセス**: [MDPI PDF](https://www.mdpi.com/1099-4300/12/7/1733/pdf)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D29-S10`）
- **cs 精読ノート**: [knowledge/source-notes/D29/D29-S10_hordijk-hein-steel-2010.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D29/D29-S10_hordijk-hein-steel-2010.md)
- **この wiki ページ（pd）**: [wiki/sources/D29_hordijk-hein-steel_2010_autocatalytic-sets-origin-of-life.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D29_hordijk-hein-steel_2010_autocatalytic-sets-origin-of-life.md)

## 出典メモ

- 材料は cs の出典ノートだけ（2026-04-24 読解。PDF を画像で全 10 頁精読。本文 pp.1733-1739 と参考文献 pp.1740-1742。読んでいない範囲は無い）。引用と位置は出典ノートのとおりに写した。出典ノートは引用の位置を頁でなく節（Abstract・§1.3・§2 など）で示している。
- 同じ論文は、化学の分野の出典ページ [[D03_hordijk_2010_autocatalytic-sets-and-the|自己触媒集合と生命の起源 — RAF 集合の数学]] でも扱っている（台帳では同じ文献の二つの行）。
- 生成: 2026-11-10（wiki-compile）。
