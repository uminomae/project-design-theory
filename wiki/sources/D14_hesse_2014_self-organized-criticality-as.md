---
title: "神経系の基本特性としての自己組織化臨界性"
description: "Hesse & Gross (2014) Front Syst Neurosci レビュー。脳が SOC 状態で動作するという仮説を概説し、臨界状態における最適な記憶・情報処理特性、神経可塑性による自己組織化、覚醒状態での実験的矛盾を整理した。"
aliases: ["Self-organized criticality as a fundamental property of neural systems"]
tags: [source, "D14", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D14/D14-S07_hesse-2014.md"
  manifest_id: "D14-S07"
  oa_url: "https://www.frontiersin.org/articles/10.3389/fnsys.2014.00166/pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 神経系の基本特性としての自己組織化臨界性

> **高校生向けのやさしい解説**
>
> 脳の活動を測ると、雪崩のような広がりかたが「砂山モデル」と同じ統計法則に従うことが知られています。これは「脳は無秩序と秩序の境目（臨界状態）で動いている」という仮説の根拠です。臨界状態だと情報を遠くまで伝えられて記憶もよく働く——理論的にはとても良いのですが、麻酔下や培養皿ではきれいに見えるのに、起きている動物では結果がばらつく、という未解決の謎があります。

## 概要

Hesse & Gross (2014) はレビュー論文として、脳が自己組織化臨界（SOC）の状態で動作しているという仮説を概説する。統計物理学における相転移の概念を神経システムに適用し、臨界状態にあるシステムは最適な記憶・情報処理能力を持つと論じる。簡単なネットワークモデルで相転移の数理的構造を示した上で、細胞培養・脳スライス・麻酔下動物・覚醒動物における実験的証拠を検討。SOC は生物学的に妥当なメカニズムを提供するが、覚醒状態での実験結果には矛盾が残り、仮説は依然として議論対象であると結論する。

## 主要概念

**臨界状態の最適計算特性**

> "Systems at criticality are believed to have optimal memory and information processing capabilities." (Introduction)

臨界点で相関長が最大化し、微小入力が全体に影響を及ぼし得る状態。記憶容量と情報処理の最適化をもたらすとされる。

**自己組織化による臨界到達**

> "slopes evolve to a critical state" (Section 4, Bak らの砂山モデル引用)

分散的プロセスにより外部介入なしに臨界状態に自己組織化されるメカニズムが存在する。神経可塑性がこの役割を果たし得る。

**実験証拠は有望だが一貫しない**

細胞培養と麻酔下動物では臨界性指標（べき乗則アバランシェ等）が確認されるが、覚醒状態の動物では結果が矛盾。方法論的問題か複数臨界状態の共存を示唆。

**枠組みの有用性は仮説の妥当性と独立**

臨界性の枠組みは「仮説そのものの妥当性とは独立に」脳のダイナミクス分析に有用なツールを提供する。

## 方法

理論モデリング（興奮性ノードと伝達確率の有向ネットワーク定常状態解析）、文献レビュー、概念フレームの統合（統計物理学と神経生物学）。

## プロジェクトデザインとの関連

「秩序と無秩序の境目で機能が最適化される」という構図は、project-design における「動的バランス」「臨界点での創発」の議論と並走する。Bak らの SOC（D05-S14）と Beggs-Plenz のニューロン雪崩（D08-S11）と並ぶ参照論文として位置付けられる。

## 書誌情報

- 著者: Jochen Hesse, Thilo Gross
- 年: 2014
- 出典: *Frontiers in Systems Neuroscience* 8, 166
- access_status: url-verified
- **DOI**: [10.3389/fnsys.2014.00166](https://doi.org/10.3389/fnsys.2014.00166)
- **オープンアクセス**: [Frontiers PDF](https://www.frontiersin.org/articles/10.3389/fnsys.2014.00166/pdf)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D14/D14-S07_hesse-2014.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D14/D14-S07_hesse-2014.md)（manifest_id: `D14-S07`）
- **cs 精読ノート**: [knowledge/source-notes/D14/D14-S07_hesse-2014.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D14/D14-S07_hesse-2014.md)
- **この wiki ページ（pd）**: [wiki/sources/D14_hesse_2014_self-organized-criticality-as.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D14_hesse_2014_self-organized-criticality-as.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D14/D14-S07_hesse-2014.md`（2026-04-10、claude-opus-4-6, WebFetch via HTML）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
