---
name: wiki-compile
description: pd/wiki/ のページを、今の正本（pd・cs・ks・as の knowledge と読み物、cs の出典ノート）から作り直す・新しく作る。正本を直したときに hook が「これを出典にする wiki のページ」を知らせたら、同じ作業でそのページを作り直し、正本と一緒に commit する。「wiki を作り直して」「wiki が古い」「wiki のページを足して」「freshness-report の古いページを片付けて」のときにも使う。
---

# wiki を作り直す

`pd/wiki/` は、正本から LLM が組み直した閲覧用のまとめ（compiled view）。正本は各ディレクトリの `knowledge/`・読み物・出典ノートで、wiki は正本を書き換えない。成り立ちは `pd/wiki/about.md`。今までの project-design の wiki-compile（Karpathy の LLM Knowledge Base の形・pd#48・pd#53）を手本に、この repo の形で書き直した（2026-11-10）。

## いつ使うか

1. **正本を直して、hook が知らせたとき。** `.claude/hooks/content-compile.sh` が、pd・cs・ks・as のファイルを直すたびに `pd/scripts/wiki-stale-check.mjs` を呼び、そのファイルを出典にする wiki のページを知らせる。知らせを受けたセッションが、**同じ作業で**そのページを作り直し、正本と一緒に commit する。後回しにしない（後回しにした分が、2026-04 から 11 月まで wiki が古いままだった理由）。
2. **古いページを片付けるとき。** `node pd/scripts/wiki-stale-check.mjs --list`（または `pd/wiki/health/freshness-report.md` の WL-3）が、出典が `compiled` 日より後に変わったページを並べる。
3. **新しいページを作るとき。** 概念・人物・出典・横断のページ。

作り直すまでもないと確かめたページ（出典の直しが誤字や書式だけ、など）は、本文を変えずに `compiled` を今日にする。`compiled` は「このページを出典と照らした最後の日」で、WL-3 はこの日と出典の commit の日付を比べる。

## 何を材料にするか

- 材料は front matter の `source` に並べたものだけ。並べていないものから書かない。訓練の知識で埋めない（型 A・H）。
- **読み物が正本になっている概念は、読み物を材料に入れる。** pd の読み物の正本は `pd/knowledge/research/<テーマ>/READER-*.md`。たとえば Love 駆動開発は `READER-love-driven-dev.md`。前の作りは公開の読み物を材料から外していたので、読み物を直しても wiki が追いつかなかった（2026-11-10）。
- 出典ページ（`sources/`）の材料は、cs の出典ノート `cs/knowledge/source-notes/Dxx/<manifest_id>_*.md`（原典と照合した記録）。PDF を読み直すのは、出典ノートに無いことを書くときだけで、そのときは `docs/rules/sources.md` に従う。原典の台帳 `cs/knowledge/raw/manifest.md` は書誌と取得の状況だけで、本文の材料ではない。
- pjdhiro の言葉を引くときは、正本に引用として書かれているものだけを、趣旨を変えずに引く（`docs/rules/writing.md` §1）。

## front matter

```yaml
title: "Love 駆動開発"
aliases: ["Love-Driven Development", "LDD"]   # Quartz はファイル名と aliases でリンクを解く。title は行き先にならない
source:
  - repo: "pd"                                 # pd・cs・ks・as（今までの repo の名前も読めるが、新しく書くときは今の名前）
    path: "knowledge/research/love-driven-dev/READER-love-driven-dev.md"   # そのディレクトリからのパス
compiled: "2026-11-10"                         # 出典と照らした日
tags: [concept, ...]                           # 構造のタグ（concept・keyword・person・cross-ref・source）を一つ
status: 暫定                                   # 探索的・暫定・正典・LLM構成物・要改訂
review_state: 未レビュー                        # レビュー済み にするのは pjdhiro だけ
related_concepts: [...]                        # 任意
```

出典ページ（`sources/`）は一つだけの形で書く：`source:` の下に `repo: "cs"`・`path: "knowledge/raw/manifest.md"`・`manifest_id: "D26-S16"`。WL-3 は `manifest_id` から出典ノートを引いて比べる。

`status` と `review_state` は、作り直しても上げない。中身がしっくりくるか・採るかの判定は pjdhiro が行う（CLAUDE.md）。

## 書き方

- 公開文の規約 `docs/rules/writing.md` に従う。とくに §1（声と帰属）・§2（断定しない・保持論点を解かない）・§4（普通の説明文）。誤りの型は `docs/rules/corrections.md`。
- 概念のページは、その概念が何かを書く。この repo の構成・ディレクトリ・作業の流れを書かない（それは `about.md` の役目）。
- 既存の理論の定義は、原典か信頼できる二次文献で確かめてから書く。確かめられないものは書かない。pjdhiro 独自の見方は、独自だと分かる形で書く。
- 冒頭（`# 題` の直後）に、引用の形で「高校生向けのやさしい解説」を 2〜4 文置く（今の wiki の形）。index・log・health には付けない。
- 正本の要約にとどめる。正本に無い結論・まとめの言い切りを足さない。正本が「まだ分からない」と置いていることは、そのまま置く。
- wikilink は、ページの中で初めて出るところだけ `[[ページ名]]`。行き先はファイル名か aliases。表の中の `|` は `\|` と書く。

## 手順

1. `node pd/scripts/wiki-stale-check.mjs --knowledge <直した正本>` か `--list` で、作り直すページを決める。
2. 各ページの `source` を読み、今の正本を読む。足りない材料・外す材料があれば `source` を直す。
3. 本文を書き直し、`compiled` を今日にする。
4. `pd/wiki/log.md` の末尾に一行の記録を足す（形は下）。
5. `cd pd && node scripts/wiki-lint.mjs` で `pd/wiki/health/` の報告を書き直す。`index.md` に載せる新しいページがあれば `node scripts/generate-wiki-index.mjs`。
6. `bash scripts/check.sh` を通す（孤立ページ・不在の出典・旧用語・読めない原典・文字化けを止める。古いページの数は知らせるだけ）。
7. 正本の直しと一緒に commit し、CLAUDE.md の「Git」のとおり develop に取り込む。
8. 3001 の `/wiki/` で、直したページが組み直されて出ていることを見る（`scripts/serve.sh` が `pd/wiki/` の変化で Quartz を組み直す。本体の checkout の develop が 3001）。公開（main）のあとは、Pages の `/project-design-theory/wiki/` でも見る。

## log.md の形

```markdown
## [YYYY-MM-DD] compile | {対象}
- scope: {概念ページ 1・出典ページ 3 など}
- sources: {材料にした正本}
- pages: {作り直した・足したページと、何を変えたか}
```

直す必要が無いと確かめただけのときは `## [YYYY-MM-DD] check | {対象}`、誤りの直しは `fix`。

## 入れていないもの（pjdhiro に聞く問いとして残す）

- 今までの #77 の、セッションの始めに自動で作り直す inbox（`.cache/inbox/wiki-restale-*.md`）。
- 今までの `wiki-gen-check`（原典の台帳から、まだ無い出典ページを促す）。台帳を使い続けるかが #62 で決まっていない。
- 今までの `wiki-log-append`（commit のあとに log.md へ自動で書き足す）。今は手順 4 で手で書く。

## 点検（wiki-lint）

点検は `pd/scripts/wiki-lint.mjs`。別のスキルは置かない。WL-1 旧用語・WL-3 古いページ・WL-4 孤立ページ・WL-5 出典のパス・WL-6 `/` 入りのリンク。報告は `pd/wiki/health/`。`--check` は報告を書き換えずに、孤立・不在の出典・旧用語があれば止める（`scripts/check.sh`）。
