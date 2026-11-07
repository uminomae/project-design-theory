---
title: "現象学からメカニズムへ — 統合情報理論 3.0"
description: "Oizumi, Albantakis & Tononi (2014) PLOS Comput Biol 論文。意識の現象学的 5 公理（存在・構成・情報・統合・排他）から物理メカニズムを演繹する IIT 3.0 を定式化し、複合体の最大限不可約な概念構造（MICS）を経験と同一視する公式を提示した。"
aliases: ["Integrated Information Theory 3.0", "IIT 3.0", "Phi"]
tags: [source, "D23", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D23/D23-S17_tononi-2014.md"
  manifest_id: "D23-S17"
  oa_url: "https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1003588&type=printable"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 現象学からメカニズムへ — 統合情報理論 3.0

> **高校生向けのやさしい解説**
>
> 「意識とは何か？」を、トノーニらは哲学的な議論ではなく、5 つの『絶対に成り立つ公理』から出発して数式で詰めていきます。情報がどれだけ統合されているかを測る量 Φ（ファイ）を定義し、最大の Φ を持つ要素の集合（複合体）が一つの意識経験に対応する、と主張。フィードバック接続のない単純な装置はどれほど大きくても意識を持たないが、フィードバックがあれば 2 要素の単純なシステムでも最小限の意識を持ちうる、という大胆な予測を含みます。

## 概要

統合情報理論（IIT）3.0 は、意識の現象学的公理から出発し、物理的メカニズムが満たすべき条件を導出する理論である。5 つの公理（存在・構成・情報・統合・排他）を定め、それぞれに対応する仮説（公準）を物理システムに適用する。個々のメカニズムが「差異を生む差異」として因果情報を指定し、統合情報（Φ）が非零であるとき、そのメカニズムは「概念」（concept）を構成する。システム全体では、最大限に還元不可能な概念構造（MICS）が「クオリア」として経験と同一視される。統合概念情報 Φ が最大となる要素の集合が「複合体」（complex）であり、一つの意識経験に対応する。理論は、単純なフォトダイオードでも最小限の意識を持ちうること、純粋なフィードフォワード・ネットワークは意識を持たないことなどを予測する。

## 主要概念

**意識は統合された情報と同一である**

> "an experience is identical with the maximally irreducible conceptual structure (MICS, integrated information structure, or quale 'sensu lato') specified by the mechanisms of a complex in a state." (p.14)

IIT の中核的アイデンティティ命題。

**5 つの現象学的公理から物理仮説を導出**

> "IIT starts from phenomenological axioms: information says that each experience is specific -- it is what it is, by how it differs from alternative experiences; integration says that it is unified -- irreducible to non-interdependent components; exclusion says that it has unique borders and a particular spatio-temporal grain." (p.1)

トップダウンに構成され、意識の現象学的特性を公理として定め、そこから物理システムが満たすべき条件を演繹。

**フィードバック接続が意識に不可欠**

> "systems with a purely feed-forward architecture cannot generate consciousness" (p.19)

フィードフォワード・システムはどれほど複雑でも複合体を形成できず、意識を持たない。

**単純なシステムでも最小限の意識**

> "simple systems can be minimally conscious; complicated systems can be unconscious" (p.1)

フォトダイオードのような 2 要素のシステムでもフィードバック接続があれば Φ > 0 となり、最小限の意識を持つ。逆に複雑なフィードフォワード・ネットワーク（ゾンビ）は無意識のまま。

## 方法

理論的・数理的手法。現象学的公理から出発し、因果情報、統合情報、排他性の概念を数学的に定式化。論理ゲート（OR, AND, XOR）で構成された小規模ネットワーク（3-6 要素）を用いて、概念、概念構造、複合体の計算を具体的に例示。遷移確率行列（TPM）、因果レパートリー、earth mover's distance (EMD) などの計算手法を用いる。

## プロジェクトデザインとの関連

「統合された情報の集合体が一つの経験を構成する」「フィードバックなしには統合は生まれない」という IIT の基本構図は、project-design における「個や集団の輪郭はフィードバック構造から立ち上がる」という観点と並走する。Tononi (2004, D08-S12) の IIT 1.0 を発展させた本論文は、意識・個・統合性を計算論的に扱う基底参照論文として位置付けられる。

## 書誌情報

- 著者: Masafumi Oizumi, Larissa Albantakis, Giulio Tononi
- 年: 2014
- 出典: *PLOS Computational Biology* 10(5), e1003588
- access_status: url-verified
- **DOI**: [10.1371/journal.pcbi.1003588](https://doi.org/10.1371/journal.pcbi.1003588)
- **オープンアクセス**: [PLOS Comput Biol PDF](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1003588&type=printable)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D23/D23-S17_tononi-2014.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D23/D23-S17_tononi-2014.md)（manifest_id: `D23-S17`）
- **cs 精読ノート**: [knowledge/source-notes/D23/D23-S17_tononi-2014.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D23/D23-S17_tononi-2014.md)
- **この wiki ページ（pd）**: [wiki/sources/D23_tononi_2014_integrated-information-theory-3.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D23_tononi_2014_integrated-information-theory-3.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D23/D23-S17_tononi-2014.md`（2026-04-11、claude-opus-4-6, Read PDF pp.1-20）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-3）
