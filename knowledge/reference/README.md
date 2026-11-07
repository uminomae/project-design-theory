# reference/

**pd の論と公開文に効く外部の事実・標準**を置く。pd の外の repo での作業から得た知見は置かない（2026-11-07・pd#160）。

## 何を置くか

- 調べないと分からず、**間違えると設計をやり直すことになる**外部の事実
- 公開文の書き方の標準（概念の定義の作法など）で、pd・cs・ks・as の READER に共通して効くもの（2026-11-04〜）

## 何を置かないか

- 1つの repo でしか使わない知見 → **その repo を正本にする**
- 手順そのもの → 各 repo の CLAUDE.md / README
- 概念・一般則 → `concepts/`（CN-*）

## 書き方

1ファイル1事実。**いつ確かめたか**と**一次ソースの URL** を必ず書く。仕様は変わるので、
古くなったら消すか、確認日を更新する。

## 一覧

| ファイル | 内容 | 確認日 |
|---|---|---|
| [how-to-define-a-concept-standard-methods.md](how-to-define-a-concept-standard-methods.md) | 概念を定義する標準的な作法は五つ（ISO 704 の類と種差・SEP の定義の種類・Walker & Avant の概念分析・百科事典の項目の型・四原因）。READER の定義文と章立ての下敷き | 2026-11-04 |
| [mba-classics-pjdhiro-essentials.md](mba-classics-pjdhiro-essentials.md) | MBA の名著で pjdhiro が本質と見るもの（戦略サファリ・野中の変遷・コトラーの変遷・リアル・オプション）と書誌の照合状況（未照合） | 2026-11-04 |
| [cook-greuter-2013-stage-anxieties-index.md](cook-greuter-2013-stage-anxieties-index.md) | Cook-Greuter 2013 の段階ごとの主な不安・防衛・引き寄せられる組織のページ索引（本文照合）。反証候補 Vaillant & McCullough 1987 | 2026-11-06 |
| [nitta-shinya-bad-and-weak-emotions.md](nitta-shinya-bad-and-weak-emotions.md) | 新田信也『精神分析統合理論』：不快な情動を悪い情動（怒り・憎しみ）と弱い情動（寂しさ・惨めさ）にまとめる。pjdhiro が影響を受けた一点は「悪さと弱さで分類する視点」。著者名の表記・未照合の箇所つき |
