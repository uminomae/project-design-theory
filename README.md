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

## AI に読ませるとき

この repo は、人だけでなく AI が読むことも想定しています。

- 構築の方針：`docs/BUILD-PLAN.md`
- 公開前の点検の手順：`docs/PUBLISH-CHECK.md`
- 作業の規約：`CLAUDE.md`

## ライセンス

MIT（`LICENSE`）。
