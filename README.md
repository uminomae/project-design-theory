# project-design-theory

プロジェクトデザイン論のサイトと、その論拠を置く repo です。構築中です。

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

## Love駆動開発の視点でレビューに使うとき

読み物「[Love駆動開発と呼びたいもの β](https://uminomae.github.io/project-design-theory/reader/love-driven-dev.html)」の見方を物差しにして、論文や文章をレビューしたいときの読ませ方です。

公開ページだけでは、見方の細かいところ（どんな条件で言ったか、何への答えだったか、退けた読み）が読めません。それは、この repo の規約の文書に、pjdhiro の言葉と一緒に書いてあります。なので、repo を取得して読める LLM（Claude Code・Codex など）に、repo ごと読ませます。

### 取得する

```bash
git clone --depth 1 https://github.com/uminomae/project-design-theory
```

`--depth 1` で、今の版だけを取ります（履歴込みでは約 95MB）。repo を取得できないチャットの LLM に渡せるのは、公開ページと [llms.txt](https://uminomae.github.io/project-design-theory/llms.txt) だけです。そこからは規約のニュアンスが読めません。読み物は長いので、チャットの LLM は途中で切って読みがちです。

### 読む順

1. `pd/knowledge/research/love-driven-dev/READER-love-driven-dev.md`：読み物の正本です。公開ページは、この正本から作っています。第一部〜第七部と巻末があり、長いので、部ごとに分けて終わりまで読みます。
2. `docs/rules/stance.md`：pjdhiro の見方（§1）と判断の仕方（§2）。行の読みに迷ったら、`docs/rules/stance-history.md` の同じ節に、何への答えだったかと原文があります。
3. `docs/rules/corrections.md`：LLM が繰り返しやすい読み違いと書き方の型。レビューを書く前に、自分の読みがどの型に当たるかを見ます。
4. 題材に応じて：既存の理論・東洋思想・創造の五段階の語を扱うなら `docs/rules/stance-theories.md`（理論との距離）。原典を引くなら `docs/rules/sources.md`（調べ方と原典の照らし方）。

### 構え

- Love駆動開発は、pjdhiro の素朴体験論です。論拠は本人の一人称の体験で、統計ではありません。正解の論証でなく、仮説として置いています。物差しとして使うときも、相手の論の正誤を裁く基準にしません。
- 相手の論も Love駆動開発も、群盲象を評すような一面と見ます。違いを並べて論評するより先に、同じ所を見ている所を書き、そのうえで補える所を書きます。
- 言い切りません。当てはめは「〜ではないか」の形で書き、言い切るのは原典の紹介と数学の事実だけにします。
- 「A ではなく B」と二つに切り分けません。善悪の判断を持ち込みません。
- 原典で照らします。引く文は原典の本文で確かめ、本文を読めなかったものは載せません。
- Love駆動開発を、優れたもの・誰にでも勧めるものとして書きません。
- レビューは LLM の読みとして書きます。pjdhiro の判断や見方として書きません。規約に「pjdhiro に確かめる」とある所は、確かめられないので、決めずに問いとして残します。

### 当てないもの

`CLAUDE.md` と、`docs/rules/` のうちこの repo で作業するための決まり（`git.md`・`session.md`・`review.md`・`corrections-k.md`・`writing.md`）、`docs/tools/`（付箋帳ほか）、`docs/PUBLISH-CHECK.md` は、外のレビューには当てません。`docs/rules/decisions.md` は、ページごとに決めたことの記録で、レビューの物差しではありません。`pd/`・`cs/`・`as/`・`ks/` の下の `docs/` は、今までの repo の運用の記録です。

### 頼む文の例

野中郁次郎の知識創造の論をレビューする例です。

```text
https://github.com/uminomae/project-design-theory を取得し、README の「Love駆動開発の視点でレビューに使うとき」に沿って読んでください。そのうえで、読み物「Love駆動開発と呼びたいもの β」の見方を物差しにして、野中郁次郎の知識創造の論文（たとえば Nonaka 1994「A Dynamic Theory of Organizational Knowledge Creation」）をレビューしてください。野中の理想を目指すとき、どこに気をつけるかを、引く文には原典の頁を添えて書いてください。
```

この形で答えた読み物が、「[野中郁次郎の理想を目指すとき、どこに気をつけるか](https://uminomae.github.io/project-design-theory/reader/nonaka-complement.html)」です。

## この repo で作業する AI へ

この repo は、人だけでなく AI が読むことも想定しています。ここで作業する（編集・公開する）ときは、次を読みます。外の文章のレビューに使うときは、上の節を読みます。

- 構築の方針：`docs/BUILD-PLAN.md`
- 公開前の点検の手順：`docs/PUBLISH-CHECK.md`
- 作業の規約：`CLAUDE.md`

## ライセンス

MIT（`LICENSE`）。
