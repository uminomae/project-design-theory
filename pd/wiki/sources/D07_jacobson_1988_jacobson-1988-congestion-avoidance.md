---
title: "輻輳回避と制御 — TCP の輻輳制御アルゴリズム"
description: "Jacobson & Karels (1988) SIGCOMM 論文。1986 年の Internet 輻輳崩壊（スループット 1/1000）に対応して 4.3BSD TCP に投入した 7 つの新アルゴリズム（slow-start, RTT 分散推定、congestion avoidance 等）の根拠を、『パケット保存則』として物理学的に定式化した古典。"
aliases: ["Congestion Avoidance and Control", "TCP congestion control", "slow-start"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D07/D07-S03_jacobson-1988.md"
  manifest_id: "D07-S03"
  oa_url: "https://dl.acm.org/doi/pdf/10.1145/52324.52356"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 輻輳回避と制御 — TCP の輻輳制御アルゴリズム

> **高校生向けのやさしい解説**
>
> 1986 年、インターネットで初めて『輻輳崩壊』が起きました。LBL から UC Berkeley までの通信速度が、なぜか 1/1000 に落ちたのです。Jacobson と Karels は 4.3BSD TCP の実装を直し、「ネットワークから古いパケットが出るまで新しいパケットを入れない（パケット保存則）」という物理的原理を導入しました。これが現代インターネットの安定通信を支える基礎であり、slow-start・指数バックオフなどの定番アルゴリズムの原典です。

## 概要

1986 年 10 月、Internet で初の "congestion collapse" シリーズが発生し、LBL-UC Berkeley 間のスループットが 32 Kbps から 40 bps へと約千分の一に落ちた。著者らは 4.3BSD TCP の実装を調査し、輻輳問題の多くは「プロトコル仕様」ではなく「実装」に由来することを示した。論文は 4.3BSD TCP に投入した 7 つの新アルゴリズム（うち (i)-(v) を本論で詳述）の根拠を述べる。中核となる原理は "conservation of packets"（パケット保存則）で、平衡状態にある接続では「古いパケットがネットワークを離れない限り新しいパケットを入れない」ことを要求する。この原理を破る三つの失敗モード（平衡到達失敗、タイマー誤りによる早期注入、経路上の資源限界）に対応するのが slow-start、RTT 分散推定を含む再送タイマ、congestion avoidance（加法的増加・乗法的減少）である。

## 主要概念

**輻輳制御は『パケット保存則』を守る問題**

> "The flow on a TCP connection ... should obey a 'conservation of packets' principle. ... congestion control involves finding places that violate conservation and fixing them." (p.2)

> "By 'conservation of packets' we mean that for a connection 'in equilibrium' ... the packet flow is what a physicist would call 'conservative': A new packet isn't put into the network until an old packet leaves." (p.2)

著者は輻輳問題を「保存則違反を探して直す」という物理学的フレームに置き直した。Lyapunov 安定性への対応も明示。

**保存則の破れは三通りしかない**

> "There are only three ways for packet conservation to fail: 1. The connection doesn't get to equilibrium, or 2. A sender injects a new packet before an old packet has exited, or 3. The equilibrium can't be reached because of resource limits along the path." (p.2)

論文の §1, §2, §3 はこの三分類に 1 対 1 で対応する。

**ack はクロックである — slow-start**

> "the sender uses acks as a 'clock' to strobe new packets into the network. Since the receiver can generate acks no faster than data packets can get through the network, the protocol is 'self clocking'" (p.2-3)

> "On each ack for new data, increase cwnd by one packet." (p.3-4)

slow-start は名前に反して指数的（log₂W ラウンドトリップ）に窓を開く。送信器の自己クロック化と窓の指数的立ち上げが平衡を「点火」する。

**RTT の平均だけでなく分散を推定する必要**

> "From queuing theory we know that R and the variation in R increase quickly with load. ... if the network is running at 75% of capacity ... one should expect round-trip-time to vary by a factor of sixteen (−2σ to +2σ)." (p.6)

> "the suggested β = 2 can adapt to loads of at most 30%. Above this point ... this is the network equivalent of pouring gasoline on a fire." (p.7)

待ち行列理論を直接持ち込み、RFC793 の固定 β=2 の高負荷下破綻を示す。付録で平均偏差を用いた廉価な分散推定アルゴリズムを提示。

**congestion avoidance（加法的増加・乗法的減少）**

輻輳が起きるたびに窓を半分にし（乗法的減少）、安全な間は線形に増やす（加法的増加）。これが現在も TCP の中核アルゴリズム。

## 方法

エンジニアリング論文 + 物理学的フレーミング。実装解析、待ち行列理論、線形システム理論、Lyapunov 安定性論。具体的なアルゴリズム提案と実測データの両立。

## プロジェクトデザインとの関連

「複雑系の制御を物理学的保存則で再定式化する」という方法論は、project-design における「現象を一段階抽象化して原理に立ち返る」という方針の象徴的事例。とくに「自己クロック化」「保存則違反の三分類」というフレーミングは、組織運営や情報流通の設計論にもアナロジーを提供する。

## 書誌情報

- 著者: Van Jacobson (LBL), Michael J. Karels (UC Berkeley)
- 年: 1988
- 出典: *Proceedings of SIGCOMM '88*, ACM Computer Communication Review 18(4), 314–329
- access_status: url-verified
- **DOI**: [10.1145/52324.52356](https://doi.org/10.1145/52324.52356)
- **オープンアクセス**: [LBL PDF](https://ee.lbl.gov/papers/congavoid.pdf) / [ACM PDF](https://dl.acm.org/doi/pdf/10.1145/52324.52356)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D07/D07-S03_jacobson-1988.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D07/D07-S03_jacobson-1988.md)（manifest_id: `D07-S03`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S03_jacobson-1988.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D07/D07-S03_jacobson-1988.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_jacobson_1988_jacobson-1988-congestion-avoidance.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D07_jacobson_1988_jacobson-1988-congestion-avoidance.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D07/D07-S03_jacobson-1988.md`（2026-04-13、Claude Opus 4.6, curl + Read PDF。本論 + 付録 A,B 全部、付録 C,D は未読）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase C-1b）
