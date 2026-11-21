# project-design-theory

プロジェクトデザイン論のサイトと、その論拠を置く repo です。構築中です。

## Love駆動開発の視点でレビューに使うとき

読み物「[Love駆動開発と呼びたいもの β](https://uminomae.github.io/project-design-theory/reader/love-driven-dev.html)」の見方を物差しにして、論文や文章をレビューするときの案内です。見方の細かいところ（どんな条件で言ったか、何への答えだったか）は公開ページに無く、この repo の規約に pjdhiro の言葉と一緒にあります。repo を取得できる LLM（Claude Code・Codex など）に読ませます。

```bash
git clone --depth 1 https://github.com/uminomae/project-design-theory
```

`--depth 1` で今の版だけを取ります（履歴込みは約 95MB）。repo を取得できないチャットの LLM に渡せるのは、公開ページと [llms.txt](https://uminomae.github.io/project-design-theory/llms.txt) だけで、規約のニュアンスは読めません。

最初に読むのは、次の三つだけです。

- `pd/knowledge/research/love-driven-dev/READER-love-driven-dev.md`：読み物の正本。冒頭の概要と、レビューの題材に関わる部を読みます。
- `docs/rules/stance.md`：pjdhiro の見方と判断の仕方。
- `docs/rules/corrections.md`：LLM が繰り返しやすい読み違いの型。

残りは、要るときに開きます。

- 既存の理論・東洋思想・創造の五段階の語に当てるとき：`docs/rules/stance-theories.md`
- 原典を引く・照らすとき：`docs/rules/sources.md`
- stance の一行の読みに迷ったとき：`docs/rules/stance-history.md` の同じ節（何への答えだったかと原文）
- 信頼・不安・心理的安全性など、題材を扱う読み物があるとき：`pd/reader/` のその読み物と、`docs/rules/decisions.md` のそのページの行
- 語の説明を手早く引くとき：`pd/wiki/`

構えは四つです。

- Love駆動開発は pjdhiro の素朴体験論で、仮説として置いています。相手の論の正誤を裁く基準にせず、優れたものとして勧めません。
- 相手の論も Love駆動開発も、群盲象を評すような一面と見ます。違いを論評するより先に同じ所を見ている所を書き、そのうえで補える所を書きます。「A ではなく B」と切らず、善悪の判断を持ち込みません。
- 言い切りません。引く文は原典の本文で確かめます。
- レビューは LLM の読みとして書き、pjdhiro の判断としては書きません。規約に「pjdhiro に確かめる」とある所は、決めずに問いとして残します。

`CLAUDE.md` と、git・セッション・付箋帳・公開前の点検など、この repo で作業するための決まりは、外のレビューには当てません。

頼む文の例（野中郁次郎の知識創造の論）：

```text
https://github.com/uminomae/project-design-theory を取得し、README の「Love駆動開発の視点でレビューに使うとき」に沿って読んでください。そのうえで、読み物「Love駆動開発と呼びたいもの β」の見方を物差しにして、野中郁次郎の知識創造の論文（たとえば Nonaka 1994「A Dynamic Theory of Organizational Knowledge Creation」）をレビューしてください。野中の理想を目指すとき、どこに気をつけるかを、引く文には原典の頁を添えて書いてください。
```

この形で答えた読み物が、「[野中郁次郎の理想を目指すとき、どこに気をつけるか](https://uminomae.github.io/project-design-theory/reader/nonaka-complement.html)」です。

## このサイトについて

プロジェクトデザイン論は、プロジェクトの進め方・管理の仕方そのものを設計の対象にする試みです。やること（Doing）と、起きていること（Being）の両方を扱います。

サイトは、プロジェクトデザイン論を中心に置き、その論が引用する部品として、次の三つを下に置きます。

- 創造とは
- 欠損駆動思考
- 意識とは

## 今までのサイトとの関係

今までは四つのサイトに分かれていました。2026-11-07 に、中身をこの repo にまとめました。

| 今までのサイト | 今の場所 |
|---|---|
| プロジェクトデザイン論（`uminomae.github.io/project-design/`） | https://uminomae.github.io/project-design-theory/ |
| 意識とは（`uminomae.github.io/awareness-space/`） | https://uminomae.github.io/project-design-theory/as/ |
| 欠損駆動思考（`uminomae.github.io/kesson-space/`） | https://uminomae.github.io/project-design-theory/ks/ |
| 創造とは（`uminomae.github.io/creation-space/`） | https://uminomae.github.io/project-design-theory/cs/ |

今までの URL は、下の階層も含めて、今の場所へ転送します。今までの repo は非公開にし、開いていた Issue はこの repo に移しました。

この repo では、今までのサイトを材料にして、新しいサイトを組み直しています。ページを作るたびに、要る主張を一次ソースで確かめ直してから書きます。

## 置き場

- `pd/`：プロジェクトデザイン論（サイト・読み物・knowledge・wiki）
- `cs/`・`as/`・`ks/`：創造とは・意識とは・欠損駆動思考
- `docs/`：この repo 全体の方針と規約
- `redirects/`：今までの URL を今の場所へ送る転送ページの雛形（`python3 redirects/build.py`）

## 手元で見る

`bash scripts/serve.sh [port]`（既定 3001）。公開と同じ並びで配ります（`/` が pd、`/as/`・`/ks/`・`/cs/`、`/wiki/`）。`/wiki/` は `pd/quartz` で `npm ci` を済ませたときだけ作ります。

## 作者の作業用

https://pjdhiro-shelf.pages.dev/ （非公開・ログインが要る）

## この repo で作業する AI へ

この repo は、人だけでなく AI が読むことも想定しています。ここで作業する（編集・公開する）ときは、次を読みます。外の文章のレビューに使うときは、冒頭の節「Love駆動開発の視点でレビューに使うとき」を読みます。

- 構築の方針：`docs/BUILD-PLAN.md`
- 公開前の点検の手順：`docs/PUBLISH-CHECK.md`
- 作業の規約：`CLAUDE.md`

## ライセンス

MIT（`LICENSE`）。
