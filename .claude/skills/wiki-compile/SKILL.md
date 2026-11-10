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

## 区切るときの作り直しの指令

正本を直したセッションが知らせを取りこぼした分（手で直した・ほかの道具で直した など）と、まだ無い出典ページは、セッションを区切るときに拾い、別のセッションで作り直す（pjdhiro 2026-11-10「セッションを区切り、セッションログを作り、そこから司令塔として別セッションにwiki更新の指令を出すように」。今までの #77 の inbox と `wiki-gen-check` に当たる。始めにサブエージェントで作り直す案と、区切るセッションが自分で直す案は取りやめた）。

- 拾うもの：古いページ（出典が `compiled` 日より後に変わった）と、cs の台帳 `cs/knowledge/raw/manifest.md` で読める原典（`raw-confirmed`・`url-verified`）のうち、出典ノートがあるのに wiki の出典ページがまだ無いもの。`node pd/scripts/wiki-stale-check.mjs --session-end` が並べる（台帳の側は `pd/scripts/wiki-gen-check.mjs`）。何も無ければ何も出ない。
- いつ：CLAUDE.md「セッションの終わりに」で、セッションの記録を書いたあと、pjdhiro に伝える前。
- 誰が：区切るセッションは、自分では直さない。司令塔として別のセッションを始め（`start_session`・`context: "fresh"`・自分の worktree）、下の雛形に一覧を入れて渡す。数が多いときは、分野ごとに分けて出す。
- 始めの知らせ：SessionStart の hook（`.claude/hooks/wiki-session-start.sh`・`.claude/settings.json` に登録）と `bash scripts/session-digest.sh` の終わりも同じ一覧を出し、「今は自分の作業を続け、区切るときに出す」と添える。hook は本体の checkout の版が動くので、hook を直したときは develop に入ってから効く。

### 指令の雛形

```
wiki の作り直し（区切ったセッション <セッションの記録の名前> から）。
.claude/skills/wiki-compile/SKILL.md を読み、その手順で次のページを今の正本から作り直す（未作成は出典ノートから作る）。
<node pd/scripts/wiki-stale-check.mjs --session-end の一覧をそのまま>
- 正本に無いことは足さない。引用は正本の文のまま。直す必要が無いと確かめたページは compiled を今日にする。
- 終わったら pd/wiki/log.md に一行足し、node pd/scripts/wiki-stale-check.mjs --session-end が空になること、bash scripts/check.sh が通ることを見る。
- 本体の checkout の develop に取り込んで push する。main へは送らない（公開は pjdhiro が決める）。
- 済んだら、直したページと残したことを短く報告する。
```

### 拾わないもの・台帳

- 出典ページを作らずにおくと決めた原典は、知らせない。作り直す前に、精読ノートが本文を読んだか（前付け・要旨だけでないか）、読んだ写しが `docs/rules/sources.md` §5 の決まり 8 の範囲か、ノートの引用が原文にあるか（WebFetch で読んだノートは、要約を引用の形で書いていることがある。Internet Archive の `_djvu.txt` などの文字の層と照らす）を見る。通らないものは作らず、`pd/wiki-drafts/held-sources.md` に理由を書く。条件が満ちて作ったら、その行を消す（2026-11-10・#111 で外した 26 本の作り直しで、10 本がここに入った）。
- 出典ノートが無い原典（台帳で読めても、まだノートが無いもの）は、知らせない。出典ページの材料は出典ノートで、ノートは cs のレビュー（`docs/cs-review/`）が作る。数だけは `node pd/scripts/wiki-gen-check.mjs --count` と `scripts/check.sh` が出す。
- 台帳は今の形（`source_id`・`domain_id`・`access_status`・`source_title` の表）で読む。#62 で台帳の扱いが変わったら、`wiki-gen-check.mjs` とこの節を合わせる。

## 入れていないもの

- 今までの `wiki-log-append`（commit のあとに log.md へ自動で書き足す）。入れない（pjdhiro 2026-11-10「A 入れない」）。log.md は、直したセッションが手順 4 で手で書く。

## 点検（wiki-lint）

点検は `pd/scripts/wiki-lint.mjs`。別のスキルは置かない。WL-1 旧用語・WL-3 古いページ・WL-4 孤立ページ・WL-5 出典のパス・WL-6 `/` 入りのリンク。報告は `pd/wiki/health/`。`--check` は報告を書き換えずに、孤立・不在の出典・旧用語があれば止める（`scripts/check.sh`）。
