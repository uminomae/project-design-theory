---
title: "周期 3 はカオスを意味する"
description: "Li & Yorke (1975) Amer. Math. Monthly 論文。区間上の連続写像が周期 3 の点を持てば、全周期 k=1,2,...の周期点と非可算なカオス集合が存在することを示し、『カオス』という用語を数学に初めて導入した記念碑的論文。"
aliases: ["Period Three Implies Chaos", "Li-Yorke chaos"]
tags: [source, "D01", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D01/D01-S10_li-yorke-1975.md"
  manifest_id: "D01-S10"
  oa_url: "https://www.its.caltech.edu/~matilde/LiYorke.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 周期 3 はカオスを意味する

> **高校生向けのやさしい解説**
>
> 「カオス」という言葉を初めて数学的に定義した有名な論文です。x の値を関数 F で繰り返し変換していく単純な系を考えたとき、もし「3 回で元に戻る点（周期 3）」が一つでも存在すると、なんと「あらゆる周期の点」が存在し、しかも「永遠に予測不可能な点の非可算集合」も生まれる——という驚きの定理。シンプルな仮定から壮大な帰結が導かれる、初等的だが革命的な論文。

## 概要

本論文は区間上の連続写像 F: J → J が反復された場合に、周期 3 の点が存在するという条件だけから、(i) 任意の周期 k = 1, 2, 3, ... を持つ周期点が存在すること、(ii) 周期点を含まない「非可算集合 S ⊂ J」が存在し、この集合の任意の 2 点は互いに離れたり近づいたりして漸近的周期性を持たないこと（= "chaotic" な振る舞い）、という 2 点を示す。証明は連続性と中間値定理から得られる初等的な補題（Lemma 0, 1, 2）のみを用い、測度論や滑らかさを必要としない。

## 主要概念

**Theorem 1 — 周期 3 から全周期と非可算カオス集合**

> "Theorem 1. Let J be an interval and let F: J → J be continuous. Assume there is a point a ∈ J for which the points b = F(a), c = F²(a) and d = F³(a), satisfy d ≤ a < b < c (or d ≥ a > b > c)." (p.987)

> "T1: for every k = 1, 2, ... there is a periodic point in J having period k. ... T2: there is an uncountable set S ⊂ J (containing no periodic points), which satisfies the following conditions: (A) For every p, q ∈ S with p ≠ q, lim sup_(n→∞) |F^n(p) − F^n(q)| > 0 and lim inf_(n→∞) |F^n(p) − F^n(q)| = 0. (B) For every p ∈ S and periodic point q ∈ J, lim sup_(n→∞) |F^n(p) − F^n(q)| > 0." (p.987)

T2(A) は S 内の任意の 2 軌道が「無限回近づく」かつ「無限回離れる」という振る舞い、T2(B) は S の点が周期軌道に漸近しないことを意味する。

**初等的な 3 補題のみで証明される**

Lemma 0（中間値定理の利用）、Lemma 1（区間列の追跡）、Lemma 2（不動点定理）。Smale の "horseshoe example" における手法と類似する。

**カオスは差分方程式の単純モデルで生じる**

> "The way phenomena or processes evolve or change in time is often described by differential equations or difference equations." (p.985)

ロジスティック方程式 x_{n+1} = r x_n (1 − x_n/K) などの単純な反復系が、複雑なカオス的振る舞いを生む。

**周期 5 は周期 3 を含意しない**

Appendix 1 で反例を提示。周期 3 が他のすべての周期を含意するという結果が「周期 3」に固有の性質であることを示す。これは後の Sharkovsky の定理（1964）と整合する重要な観察。

## 方法

純粋数学的証明。連続性、中間値定理、不動点定理の初等的応用。測度論や滑らかさを使わず、位相的な議論のみで結果を得る。Smale の horseshoe との類似を意識した区間追跡の手法。

## プロジェクトデザインとの関連

「単純な仕掛けから複雑な挙動が生まれる」という数学的事実は、project-design における「設計の単純さと結果の複雑さは両立する」という観察と直接接続する。「カオス」という用語を数学に持ち込んだことで、後の複雑系科学・非線形動力学の発展の起点となった。「決定論的でありながら予測不可能」という新しい認識論を切り開いた論文。

## 書誌情報

- 著者: Tien-Yien Li, James A. Yorke
- 年: 1975
- 出典: *The American Mathematical Monthly* 82(10), 985–992
- access_status: url-verified
- **JSTOR**: [10.2307/2318254](https://www.jstor.org/stable/2318254)
- **オープンアクセス**: [Caltech mirror PDF](https://www.its.caltech.edu/~matilde/LiYorke.pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D01/D01-S10_li-yorke-1975.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D01/D01-S10_li-yorke-1975.md)（manifest_id: `D01-S10`）
- **cs 精読ノート**: [knowledge/source-notes/D01/D01-S10_li-yorke-1975.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D01/D01-S10_li-yorke-1975.md)
- **この wiki ページ（pd）**: [wiki/sources/D01_li_1975_yorke-j-a.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D01_li_1975_yorke-j-a.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D01/D01-S10_li-yorke-1975.md`（2026-04-13、Claude Opus 4.6, WebFetch → Read PDF 全 8 ページ読了）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1a）
