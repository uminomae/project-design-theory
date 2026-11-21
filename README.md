# project-design-theory

プロジェクトデザイン論のサイトと、その論拠を置く repo です。構築中です。

## この repo を知識として使うとき

レビューや調べの知識としてこの repo を LLM に読ませるときの入口です。repo の md は全部で千万トークンを超え、一度には読めません。下の芯を読み、あとは問いに合わせて辿ります。repo を取得できる LLM（Claude Code・Codex など）なら、取得して読みます。

```bash
git clone --depth 1 https://github.com/uminomae/project-design-theory
```

取得できないチャットの LLM は、下の公開ページと raw の URL から読みます。

- 芯：`docs/rules/stance.md`（pjdhiro の見方と判断の仕方・[raw](https://raw.githubusercontent.com/uminomae/project-design-theory/main/docs/rules/stance.md)）と `docs/rules/corrections.md`（LLM が繰り返しやすい読み違い・[raw](https://raw.githubusercontent.com/uminomae/project-design-theory/main/docs/rules/corrections.md)）。四つの探究に共通です。
- Love駆動開発から入るとき：読み物「[Love駆動開発と呼びたいもの β](https://uminomae.github.io/project-design-theory/reader/love-driven-dev.html)」と、その正本 `pd/knowledge/research/love-driven-dev/READER-love-driven-dev.md`。読み方は次の節「Love駆動開発の視点でレビューに使うとき」。
- プロジェクトデザイン論（`pd/`）：読み物は `pd/reader/`、その調べは `pd/knowledge/research/`。一覧は [llms.txt](https://uminomae.github.io/project-design-theory/llms.txt)。
- 創造とは（`cs/`）：30 の学問領域の調べが `cs/evidence/`。入口は `cs/README.md` と [cs/llms.txt](https://uminomae.github.io/project-design-theory/cs/llms.txt)。
- 意識とは（`as/`）・欠損駆動思考（`ks/`）：入口はそれぞれの `README.md` と `llms.txt`。
- 語から辿るとき：`pd/wiki/index.md`（概念・キーワード・相互参照の目次）。
- 原典を引く・照らすとき：`docs/rules/sources.md`。

## Love駆動開発の視点でレビューに使うとき

読み物「Love駆動開発と呼びたいもの β」の見方を物差しにして、論文や文章をレビューするときの案内です。見方の細かいところ（どんな条件で言ったか、何への答えだったか）は公開ページに無く、規約の文書に pjdhiro の言葉と一緒にあります。

読む量は、窓の大きさに合わせて三段にします。

1. 必ず（約 7〜8 万トークン）：`stance.md` と `corrections.md` の全文（上の節の raw）、読み物の公開ページの冒頭の概要と各部の頭。
2. 余裕があれば（約 20 万トークン）：正本 `READER-love-driven-dev.md` の全文（[raw](https://raw.githubusercontent.com/uminomae/project-design-theory/main/pd/knowledge/research/love-driven-dev/READER-love-driven-dev.md)）。窓に入りきらなければ、部（`<!--PART:` の印）ごとに読みます。
3. あとは題材に合わせて開きます。
   - 心の守り：[心理的防衛機制とは](https://uminomae.github.io/project-design-theory/reader/defense-mechanisms.html)
   - 発達の段階：[精神の発達段階とは](https://uminomae.github.io/project-design-theory/reader/developmental-stages.html)
   - 共感：[共感とは](https://uminomae.github.io/project-design-theory/reader/empathy.html)
   - 心理的安全性：[心理的安全性とは](https://uminomae.github.io/project-design-theory/reader/psychological-safety.html)
   - 不安：[不安とは](https://uminomae.github.io/project-design-theory/reader/anxiety.html)
   - 既存の理論・東洋思想・創造の五段階の語に当てるとき：`docs/rules/stance-theories.md`
   - stance の一行の読みに迷ったとき：`docs/rules/stance-history.md` の同じ節（何への答えだったかと原文）
   - その読み物で何を決めたかを知りたいとき：`docs/rules/decisions.md` のそのページの行

構えは四つです。

- Love駆動開発は pjdhiro の素朴体験論で、仮説として置いています。相手の論の正誤を裁く基準にせず、優れたものとして勧めません。
- 相手の論も Love駆動開発も、群盲象を評すような一面と見ます。違いを論評するより先に同じ所を見ている所を書き、そのうえで補える所を書きます。「A ではなく B」と切らず、善悪の判断を持ち込みません。
- 言い切りません。引く文は原典の本文で確かめます。
- レビューは LLM の読みとして書き、pjdhiro の判断としては書きません。規約に「pjdhiro に確かめる」とある所は、決めずに問いとして残します。

`CLAUDE.md` と、git・セッション・付箋帳・公開前の点検など、この repo で作業するための決まりは、外のレビューには当てません。

頼む文の例（野中郁次郎の知識創造の論）：

```text
https://github.com/uminomae/project-design-theory を取得し、README の「Love駆動開発の視点でレビューに使うとき」に沿って読んでください。そのうえで、野中郁次郎が知識創造（SECI・場・知識のらせん）を論じた論文のうち、本文を読めるものを探して読み、野中が出典に挙げた論文や、引いた哲学者の原典も本文で確かめてください。読み物「Love駆動開発と呼びたいもの β」の見方を物差しにして、野中の理想を目指すときの注意点をレビューし、引く文には原典の頁を添えてください。
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

この repo は、人だけでなく AI が読むことも想定しています。ここで作業する（編集・公開する）ときは、次を読みます。外の文章のレビューや調べに使うときは、冒頭の二つの節を読みます。

- 構築の方針：`docs/BUILD-PLAN.md`
- 公開前の点検の手順：`docs/PUBLISH-CHECK.md`
- 作業の規約：`CLAUDE.md`

## ライセンス

MIT（`LICENSE`）。
