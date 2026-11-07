---
title: "ネットワーク薬理学による漢方処方「君臣佐使」の検証"
description: "Wu ら（2014）によるQiShenYiQi（気参益気）処方の急性心筋虚血治療効果をネットワーク薬理学で解析した研究。「君・臣・佐・使」という漢方の配合原理を分子ネットワークレベルで実証した。"
aliases: ["Chinese herbal medicine network pharmacology", "Jun-Chen-Zuo-Shi"]
tags: [source, "D11", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D11_wu_2014_chinese-medicine.pdf"
  manifest_id: "D11-S08"
compiled: "2026-04-10"
status: 正典
review_state: 未レビュー
---

# ネットワーク薬理学による漢方処方「君臣佐使」の検証

> **高校生向けのやさしい解説**
>
> 漢方の配合原理「君臣佐使」——主役の薬・脇を固める薬・調整する薬・引き導く薬という4つの役割分担——が、分子レベルでも本当に成立しているかを調べた2014年の研究です。心臓病関連の遺伝子ネットワークを計算で作り、それをどれくらい正常に回復させるかをスコアで評価すると、主役の黄耆が高得点、組み合わせ全体がさらに高得点になりました。昔からの経験知が現代科学の方法で裏付けられた例です。

## 概要

本論文（Wu et al., 2014, *Chinese Medicine* 9:24）は、急性心筋虚血（AMI）治療に用いる漢方処方 QiShenYiQi（QSYQ）の配合原理「君臣佐使（Jun-Chen-Zuo-Shi）」をネットワーク薬理学的アプローチで検証した研究である。AMI に関連する遺伝子・タンパク質間相互作用・マイクロアレイデータを統合して疾患特異的ネットワーク（AMI-ODN）を構築し、ネットワーク回復指数（NRI-ODN）により各生薬の治療効果を定量化した。結果として QSYQ 全処方が最高スコア（864.48）を示し、主薬（君薬・臣薬）が補佐薬（佐薬・使薬）より高いスコアを示すことで、君臣佐使の序列が分子レベルで支持された。

## 主要概念

### 君臣佐使（Jun-Chen-Zuo-Shi）

漢方の複合処方は「君薬（主役）・臣薬（補佐）・佐薬（調整）・使薬（引導）」の4階層で構成される。QSYQ においては黄耆（Astragalus）が君薬、丹参（Salvia）が臣薬、三七（Notoginseng）が佐薬、降香（Dalbergia）が使薬に相当する。本研究はこの序列が実験的・計算的に整合することを示した。

### AMI-ODN（疾患特異的ネットワーク）

AMI 関連遺伝子（820種）を起点に、遺伝子発現データとタンパク質間相互作用（PPI）を統合し、281ノード・616エッジからなる「急性心筋虚血特異的生体攪乱ネットワーク（AMI-ODN）」を構築した。このネットワーク上で各薬剤がどれだけ疾患状態を正常に回復させるかを NRI-ODN スコアで評価した。

### NRI-ODN（ネットワーク回復指数）

NRI（Network Recovery Index）は生薬がネットワーク全体を正常状態に向けて回復させる能力を定量化する指標である。NRI-ODN では各ノードの位相的重要度（次数中心性）と回復効率（EoR）を加重して算出する。EoR ≥ 50% の遺伝子を「有効回復遺伝子（ERG）」と定義し、経路濃縮解析を適用した。

### 相乗効果の実証

QSYQ 全処方の NRI-ODN（864.48）は個々の生薬スコアをすべて上回った。ラット実験においても QSYQ は梗塞心組織の重量比をアスピリン同等以上に有意に低減した。各生薬が独立して作用しながら、組み合わせることで新たな経路（細胞接着分子・アクチン細胞骨格調節）が活性化される相乗作用が示された。

## 書誌情報

- 著者: Leihong Wu, Yi Wang, Zheng Li, Boli Zhang, Yiyu Cheng, Xiaohui Fan
- 年: 2014
- 出典: *Chinese Medicine* 9:24, BioMed Central
- access_status: raw-confirmed
- **DOI**: [10.1186/1749-8546-9-24](https://doi.org/10.1186/1749-8546-9-24)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D11_wu_2014_chinese-medicine.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D11_wu_2014_chinese-medicine.pdf)（manifest_id: `D11-S08`）
- **cs 精読ノート**: [knowledge/source-notes/D11/D11-S08_wu-2014.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D11/D11-S08_wu-2014.md)
- **この wiki ページ（pd）**: [wiki/sources/D11_wu_2014_chinese-medicine.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D11_wu_2014_chinese-medicine.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
