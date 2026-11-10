---
title: "サイバネティクス——動物と機械における制御と通信"
description: "Wiener (1948, 第 2 版 1961)。制御の問題と通信の問題は切り離せず、どちらも「メッセージ」を中心にしている、と論じた本。フィードバックを、機械の制御と人の随意運動に共通するものとして扱った。"
aliases: ["Cybernetics: Or Control and Communication in the Animal and the Machine", "Wiener 1948"]
tags: [source, "D07", "原典解説"]
source:
  - repo: "cs"
    path: "knowledge/raw/manifest.md"
    manifest_id: "D07-S01"
compiled: "2026-11-11"
status: 正典
review_state: 未レビュー
---

# サイバネティクス——動物と機械における制御と通信

> **高校生向けのやさしい解説**
>
> 機械も人の体も、目標とのずれを感じ取り、それを打ち消すように動きを直しています。この仕組みをフィードバックと呼びます。Wiener は 1948 年のこの本で、機械の制御と人の動きの制御を、同じ言葉と数学で扱おうとしました。情報の量を、物理のエントロピーと結びつけて考えたのもこの本です。

## 概要

Norbert Wiener が 1948 年に出した本で、1961 年の第 2 版で補足の章が足された。題は、動物と機械における制御と通信。Wiener は、戦時中に Julian Bigelow と火器管制（射撃の照準を合わせる装置）の予測の理論に取り組んだ経緯から書き起こす（Introduction）。制御の問題と通信の問題は切り離せず、どちらも電気工学の技法でなく「メッセージ」という概念を中心にしている、と論じ、この分野を「サイバネティクス」と名づけた（pp.8–11）。精読ノートは、序文・Introduction・第 III・IV・V・IX・X 章を読んでいる。

## 主要概念

### 科学の境界の領域

> "It is these boundary regions of science which offer the richest opportunities to the qualified investigator. They are at the same time the most refractory to the accepted techniques of mass attack and the division of labor." (p.2)

数学・生理学・工学のあいだの境界の領域を、Wiener は最も実りのある所と見る。同時に、分業の手法が最も効きにくい所でもある、と書く。

### 制御と通信は切り離せない

> "on the communication engineering plane, it had already become clear to Mr. Bigelow and myself that the problems of control engineering and of communication engineering were inseparable, and that they centered not around the technique of electrical engineering but around the much more fundamental notion of the message" (p.8)

### フィードバック

> "Mr. Bigelow and I came to the conclusion that an extremely important factor in voluntary activity is what the control engineers term feedback." (p.6)

> "The information fed back to the control center tends to oppose the departure of the controlled from the controlling quantity" (p.97)

第 IV 章は、フィードバックを、サーモスタットや蒸気機関の調速機（ガバナー）の例と、人がたばこを拾うような随意運動の例で並べて説明する（p.97）。章の冒頭には、筋肉は丈夫なのに動きをまとめられない運動失調（ataxia）の患者が出てくる。Wiener はこれを、フィードバックがうまく働かないときの振る舞いとして論じる（p.95）。

### 情報とエントロピー

> "The notion of the amount of information attaches itself very naturally to a classical notion in statistical mechanics: that of entropy. Just as the amount of information in a system is a measure of its degree of organization, so the entropy of a system is a measure of its degree of disorganization; and the one is simply the negative of the other." (p.11)

情報の量は組織化の度合いの尺度で、エントロピーは無秩序の度合いの尺度である。一方は他方の負にすぎない、と Wiener は書く。

### 周波数の引き込みと自己組織化

> "Consider the possibility that the brain contains a number of oscillators of frequencies of nearly 10 per second, and that within limitations these frequencies can be attracted to one another. Under such circumstances, the frequencies are likely to be pulled together into one or more little clumps" (p.199)

> "We thus see that a non-linear interaction causing the attraction of frequency can generate a self-organizing system" (p.202)

第 2 版で足された第 X 章は、脳波の約 10 ヘルツのリズムを、互いに周波数を引き寄せ合う振動子の集まりとして説明する。

## 方法

時系列の統計の理論・フーリエ解析・確率論で、通信と制御の問題を定式化する。情報の量は確率密度の対数で定義し（第 III 章）、フィードバックの安定性は複素関数論で調べる（第 IV 章）。機械の制御（サーボ機構・火器管制の予測器）と生き物の制御（神経系・筋肉の随意運動）を並べて、共通する数学の形を取り出す。Rosenblueth との猫の筋肉の実験や、脳波の自己相関の解析（第 X 章）も扱う。

## 限界

- 本は 1948 年の初版と 1961 年の補足の章からなり、戦時の研究と初期の計算機の開発という時代に根ざしている。
- 精読ノートは、第 III・IV 章の数式を細かくは確かめていない。第 I・II・VI・VII・VIII 章は読んでいない（社会と言語を扱う第 VIII 章を含む）。

## 関連する探索キーワード

精読ノートは、フィードバックを [[創造の5段階モデル]] の「縁」（境界で起きる出来事）に当て、周波数の引き込みによる自己組織化を「渦」に弱く当てている（著者の主張ではない）。

## 書誌情報

- 著者: Norbert Wiener
- 年: 1948（読んだのは第 2 版。The M.I.T. Press, 1961）
- 出典: *Cybernetics: Or Control and Communication in the Animal and the Machine*, 2nd ed.
- **ISBN**: 0-262-23007-0（布装）、0-262-73009-X（紙装）

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D07-S01`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S01_wiener-1948.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S01_wiener-1948.md)

## 出典メモ

- 材料は創造とはの精読ノート（読んだ章は「概要」に書いた）。引用は、手元の写し（第 2 版の走査）の pp.2・6・8・11・95・97・199・202 の画像で原文と照らした。
