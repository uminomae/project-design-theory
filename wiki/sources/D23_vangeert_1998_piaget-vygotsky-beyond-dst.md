---
title: "基本的発達メカニズムの動的システムモデル — ピアジェ・ヴィゴツキーを超えて"
description: "van Geert (1998) Psychological Review 論文。ピアジェの同化/調節とヴィゴツキーの最近接発達領域から抽出した『保守的な力×進歩的な力』の弁証法を、単一の一般動的システムモデルとして数理化した。段階・移行期の二峰性・戦略の波状的盛衰・微視発達の変動を、いずれも創発的特性として再現し、段階を実体ではなくアトラクタとして再記述する。"
aliases: ["A Dynamic Systems Model of Basic Developmental Mechanisms: Piaget, Vygotsky, and Beyond", "dynamic systems model of development"]
tags: [source, "D23", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D23/D23-S14_van-geert-1998.md"
  manifest_id: "D23-S14"
  oa_url: "https://research.rug.nl/en/publications/ab03691b-cf40-452c-a8cf-7a5d9d799bbf"
compiled: "2026-07-03"
status: 暫定
review_state: 未レビュー
---

# 基本的発達メカニズムの動的システムモデル — ピアジェ・ヴィゴツキーを超えて

> **高校生向けのやさしい解説**
>
> 子どもの成長には、なだらかに伸びる時期もあれば、あるとき急に「わかった！」と段が変わる時期もあります。van Geert は、ピアジェとヴィゴツキーという二人の心理学者の考えから「今のやり方を守ろうとする力」と「新しく変わろうとする力」という二つの引っ張り合いを取り出し、それをコンピュータの数式にしました。すると、段階的なジャンプも、移行期のぐらつきも、いろんな学び方の波も、ぜんぶ同じ一つの仕組みから自然に出てくる——発達の多様な姿は、この綱引きが生む動きの表れだ、と示した論文です。

## 概要

本論文は、Piaget と Vygotsky の理論から抽出した**基本的発達メカニズム**を、非線形動的システム論の上に**単一の一般計算モデル**として再構成する。中心命題は「認知発達の多様な特徴的パターン（連続・不連続、段階、移行期の多峰性、個人内・個人間変動）は、それ自体が**保守的な力と進歩的な力の緊張**から成る動的システムの**内在的ダイナミクス**の表現である」というもの。Piaget からは**同化 vs 調節**、Vygotsky からは**現実的発達 vs 最近接発達領域（ZPD）**を取り出し、両者を「保守的・主体駆動」と「進歩的・環境駆動」の弁証法的対立として一般化する。発達を発達距離次元上に並んだ内容（スキル・知識・規則）の配列とし、各内容の重み（活性化確率）が「現実水準」のピークと、感受性が最大となる「潜在水準（ZPD＝アトラクタ）」の二点で最大成長する。シミュレーションは、連続的 S 字成長・突発的段階移行・移行期の二峰性・戦略の波状的盛衰・微視発達の変動帯を、いずれも創発的特性として再現する。段階数が典型 4（3〜5）になること、段階区間長がべき乗則（フラクタル的）で増えることもモデルから自然に導かれる。

## 主要概念

**発達の多様なパターンは内在的ダイナミクスの表現である**

> "The general aim of this article is to demonstrate that the wide variety of characteristic patterns of cognitive development is in fact the expression of the intrinsic dynamics of dynamic systems that operate on the basis of major developmental mechanisms that can already be found in Piaget's and Vygotsky's works." (p.634)

経験的に見られるパターンの多様性こそが説明対象であり、そのどれか一つだけを「真の」発達パターンとみなす論争は不要だと論じる。

**発達の駆動因は「保守的×進歩的」の弁証法（同化/調節 = ZPD）**

> "there exists a fundamental dialectic between a primarily subject- and a primarily object-driven force, which constitutes the motor behind the developmental process." (p.639)

Piaget の同化-調節、Vygotsky の現実的発達-最近接発達領域、情報処理論の規則-情報を、すべて同型の弁証法的緊張として束ねる。感受性が最大になる潜在水準は新奇性選好と熟知性選好の交点として定式化され、教育・ZPD によって前進しうる。

**段階は実体ではなくアトラクタであり、段階数と段階長はモデルから創発する**

> "the four-stage pattern occurs most frequently." (p.652)

> "The logarithmic plot of the average length of the stages … approximates a straight line, which shows that the increase of the stage or phase duration is governed by a power function." (p.655)

段階は領域固有・個人差を伴い、移行期には旧水準と新水準の二峰が一時的に共存する。「なぜ段階数が少数か」「なぜ段階が進むほど長くなるか」という古典的疑問に、保守×進歩の緊張で動く過程がスケール不変（フラクタル的）だからだと答える。ただし段階数 4±2 の一致は「段階が実在する」ことを意味しないと留保する。

## 関連

- **創造（creation-space: 場→波→縁→渦→束）**: 波・縁・渦が強い対応で揃う原典アンカーである。波（重みの揺らぎ・移行期の二峰性・段階長のべき乗則）、縁（同化/調節・ZPD という主体-環境の弁証法、準安定での移行）、渦（保守×進歩の緊張から段階というアトラクタへの自己組織化的創発）に明確な構造的同型がある。場は発達距離配列として明示されるが未分化基底の記述が薄いため中程度、束は単一システムの軌道に閉じるため弱い。同著者の 2019 論文（D23-S11）が過程オントロジーの観点から本論を一般化している。詳細は creation-space の D23 source-note を参照。

## 書誌情報

- 著者: Paul van Geert（University of Groningen, Heymans Institute）
- 年: 1998
- 出典: *Psychological Review* 105(4), 634-677
- access_status: raw-confirmed（RUG green OA, 全文精読）
- **DOI**: [10.1037/0033-295X.105.4.634-677](https://doi.org/10.1037/0033-295X.105.4.634-677)
- **オープンアクセス**: [University of Groningen（Pure）](https://research.rug.nl/en/publications/ab03691b-cf40-452c-a8cf-7a5d9d799bbf)
