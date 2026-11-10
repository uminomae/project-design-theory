---
title: "暗号の新方向"
description: "公開鍵暗号と一方向関数の概念を初めて提唱し、事前の鍵共有なしに安全な通信と電子署名を実現するアイデアを提示したディフィーとヘルマンの論文。"
aliases: ["New Directions in Cryptography"]
tags: [source, "D07", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/raw/D07_diffie-hellman_1976_new-directions-cryptography.pdf"
  manifest_id: "D07-S10"
compiled: "2026-11-10"
status: 正典
review_state: 未レビュー
---

# 暗号の新方向

> **高校生向けのやさしい解説**
>
> ネットで買い物をするとき、相手と事前に「暗号の鍵」を共有しなくても安全に通信できるのはなぜでしょうか。ディフィーとヘルマンは「誰でも知ってよい公開鍵で暗号化し、本人しか持たない秘密鍵でだけ復号できる」という仕組みを1976年に提唱しました。「鍵を送らずに鍵を共有する」という逆転の発想が、現代のネットセキュリティ全体を支えています。

## 概要

ホワイトフィールド・ディフィーとマーティン・ヘルマンが1976年にIEEE Transactions on Information Theoryに発表した暗号理論の革新的論文。当時の暗号システムが抱えていた「送受信者が事前に安全な手段で鍵を共有しなければならない」という鍵配送問題を根本的に解決するアイデアを提示した。暗号化鍵と復号鍵を分離し、暗号化鍵を公開しても復号鍵を推定することが計算量的に困難な「公開鍵暗号システム」の概念を確立したことで、現代のインターネットセキュリティの礎を築いた。

## 主要概念

### 鍵配送問題

従来の対称鍵暗号では、通信前にセキュアなチャネルを通じて鍵を共有しなければならない。インターネット規模のネットワークでは事前接触のない当事者間の通信が日常的に必要となるため、これは根本的な障壁となっていた。

### 公開鍵暗号システム

暗号化に使う公開鍵（E）と復号に使う秘密鍵（D）を分離する。公開鍵を誰でも知ることができても、そこから秘密鍵を計算することが計算量的に実行不可能（計算量的に安全）であれば、安全な通信が成立する。すべてのユーザーが公開鍵ディレクトリを持つことで、初対面の相手とも安全な通信が可能になる。

### 一方向関数とトラップドア

計算は容易だが逆算が困難な「一方向関数」が公開鍵暗号の基盤となる。適切な補助情報（トラップドア）があれば逆算できるが、なければ事実上不可能であることが安全性の根拠となる。

### 電子署名（一方向認証）

公開鍵暗号を逆用することで、本人だけが生成できるが誰でも検証できるメッセージ固有の署名を実現する。紙の署名に相当するデジタル認証手段の概念的基礎となった。

### 計算量的安全性と情報理論的安全性

破解不可能な暗号（ワンタイムパッド）は鍵が長すぎて実用的でない。実用システムは有限の計算資源では解読できないという「計算量的安全性」を目標とし、その評価には計算複雑性理論が必要となる。

## 書誌情報

- 著者: Whitfield Diffie, Martin E. Hellman
- 年: 1976
- 出典: IEEE Transactions on Information Theory, IT-22(6), 644-654
- access_status: raw-confirmed
- **DOI**: [10.1109/TIT.1976.1055638](https://doi.org/10.1109/TIT.1976.1055638)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/raw/D07_diffie-hellman_1976_new-directions-cryptography.pdf](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/D07_diffie-hellman_1976_new-directions-cryptography.pdf)（manifest_id: `D07-S10`）
- **cs 精読ノート**: [knowledge/source-notes/D07/D07-S10_diffie-hellman-1976.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D07/D07-S10_diffie-hellman-1976.md)
- **この wiki ページ（pd）**: [wiki/sources/D07_diffie-hellman_1976_new-directions-cryptography.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D07_diffie-hellman_1976_new-directions-cryptography.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照
