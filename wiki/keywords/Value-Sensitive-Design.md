---
title: "Value Sensitive Design"
aliases: ["VSD", "価値に配慮した設計", "Value Sensitive Design"]
source:
  - repo: "project-design"
    path: "knowledge/research/value/value-integrated.md"
compiled: "2026-04-06"
tags: [keyword, theory, value, design, HCI, ethics]
related_concepts: [プロジェクトデザイン, Love 駆動開発]
status: 暫定
review_state: 未レビュー
---

# Value Sensitive Design

> **高校生向けのやさしい解説**
>
> 新しいアプリやサービスを作るとき、便利さだけを考えるとプライバシーや公平さといった大事なものが置いてけぼりになりがちですよね。Value Sensitive Design は、設計のはじめから「どんな価値を大切にするか」を真ん中に置こうとする方法論です。たとえば「使いやすい」だけでなく「ユーザーの自分で決める権利を傷つけないか」も同じテーブルで議論する——そんな進め方を提案しています。

## 概要

Batya Friedman らが2006年に体系化した設計方法論。技術設計のプロセスに human values を原理的に組み込むことを目指す。概念的調査（conceptual investigation）、経験的調査（empirical investigation）、技術的調査（technical investigation）の三相調査（tripartite methodology）を採用し、ステークホルダーの価値を設計に反映する。プライバシー、自律性、信頼、公正性などの価値を扱うが、価値の選定基準が不明確であること、価値衝突の解決手順が弱いことが限界として指摘される。

## 本プロジェクトとの関連

[[プロジェクトデザイン]]が「Doing（やること）+ Being（起きていること）」を含む設計論であるのに対し、VSD は技術設計に限定した価値統合の方法論である。しかし「設計に価値を組み込む」という問題意識は PD と直接的に重なる。とりわけ [[Love 駆動開発]]が「関係・感情・意図が駆動する局面に名前を与える」ことを目指すのに対し、VSD は「どの価値をどう設計に反映するか」という手順を提供する -- 両者は補完的な関係にある。

VSD の限界（価値の選定基準の不明確さ、衝突解決の弱さ）は、PD が扱う「価値の多義性」と「比較可能性問題」そのものであり、value-integrated の領域横断論点として記録されている。

## 主要な知見・引用

- **三相調査**: conceptual（概念的）、empirical（経験的）、technical（技術的）の3つの調査を反復的に実施
- **対象 values**: privacy, autonomy, trust, fairness, accountability, sustainability など
- **HCI 起源**: Human-Computer Interaction の文脈で発展したが、AI、都市計画、医療にも適用拡大
- **限界**: 価値の選定基準が不明確、価値衝突の解決手順が弱い

## ソース参照

- `knowledge/research/value/value-integrated.md` -- 主要理論の概観（AI・設計）
- Friedman, Batya, Kahn, Peter H., & Borning, Alan. "Value Sensitive Design and Information Systems." In *Human-Computer Interaction and Management Information Systems: Foundations*, 348-372, 2006
