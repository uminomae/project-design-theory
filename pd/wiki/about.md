---
title: "About This Wiki"
compiled: "2026-11-10"
tags: [meta]
---

# About This Wiki

> **高校生向けのやさしい解説**
>
> このページは「この wiki がどうやって作られて、どう使えばいいか」を説明する案内板です。人が手で全部書いているのではなく、AI が研究ノートや読み物を読んでまとめています。だから、人間（pjdhiro）が承認した正本ではなく、いつでも作り直せる「閲覧用のまとめ」だ——というのが大事なポイントです。

この wiki の成り立ち、仕組み、役割の分担を説明するページ。

> プロジェクトデザイン論そのものの概要は [[プロジェクトデザイン]] を参照。

---

## この wiki は何か

この repo（project-design-theory）の正本から、LLM が組み直した **compiled view**（閲覧用のまとめ）。正本を書き換えず、読みやすく組み直し、概念のあいだにリンクを付けたもの。

**正本ではない。** 正本は、`pd/`・`cs/`・`ks/`・`as/` の `knowledge/`、pd の読み物（`pd/knowledge/research/*/READER-*.md`）、cs の出典ノート（`cs/knowledge/source-notes/`）、サイトの冒頭のページ（`pd/src/content/site-data.mjs`）にある。この wiki は閲覧・探索・健全性の点検のための層で、いつでも作り直せる。

---

## 材料の置き場

2026-11-07 に、今までの四つの repo（project-design・creation-space・kesson-space・awareness-space）を、この repo の `pd/`・`cs/`・`ks/`・`as/` に移した。front matter の `repo` には、今までの名前も今の名前も書いてある。どちらも同じディレクトリを指す。

| ディレクトリ | 材料 | wiki のページ |
|---|---|---|
| `pd/knowledge/concepts/` | 概念ノート CN-005〜008（信頼・測定・保持論点） | `concepts/` |
| `pd/knowledge/research/` | 調査レポート（信頼・価値・デザイン思考など）と読み物の正本 `READER-*.md` | `concepts/`・`keywords/` |
| `pd/src/content/site-data.mjs` | サイトの冒頭のページ（定義・射程・領域・Doing と Being） | [[プロジェクトデザイン]] |
| `pd/knowledge/evidence/awareness-model/` | アウェアネスモデルの原典の記録 | `sources/` |
| `ks/knowledge/` | 欠損駆動思考の概念・定義・臨床心理学との接続 | `concepts/`・`cross-refs/` |
| `as/knowledge/` | 意識とはのレポート（四つの層・生存と信頼の軸） | `concepts/`・`cross-refs/` |
| `cs/knowledge/` | 創造の5段階モデルの解説・用語・30 の分野 | `concepts/`・`cross-refs/` |
| `cs/knowledge/source-notes/` | 原典と照合した出典ノート（台帳 `cs/knowledge/raw/manifest.md` の行ごと） | `sources/` |

前の作りは、公開の読み物を材料から外していた。そのため、読み物を直しても wiki が追いつかなかった。2026-11-10 から、読み物が正本になっている概念（[[Love 駆動開発]]・[[プロジェクトデザイン]]）は、読み物とサイトの冒頭を材料にしている。

---

## 作り直しの仕組み

### 誰が何をするか

| 主体 | 役割 |
|---|---|
| **Claude Code** | 正本を読み、wiki のページを作り直す・足す（`.claude/skills/wiki-compile/SKILL.md`） |
| **hook** | 正本を直すと、`.claude/hooks/content-compile.sh` が `pd/scripts/wiki-stale-check.mjs` を呼び、それを出典にする wiki のページを Claude に知らせる |
| **wiki-lint** | `pd/scripts/wiki-lint.mjs` が点検し、`health/` に報告を書く。`scripts/check.sh` が develop と main で走らせる |
| **Quartz** | wiki を組んでサイトにする。手元は http://localhost:3001/wiki/（`scripts/serve.sh` が `pd/wiki/` の変化で組み直す）、公開は GitHub Pages の `/project-design-theory/wiki/` |
| **pjdhiro** | `review_state` をレビュー済みにする。理論の採否・しっくり感・公開の判定 |

### 流れ

```
正本を直す（knowledge・読み物・出典ノート）
  │  hook：これを出典にする wiki のページを知らせる
  ▼
同じ作業で、知らされたページを作り直す（compiled を今日に）
  │  log.md に一行
  ▼
正本と一緒に commit → develop → 3001 で見る → main → Pages
```

知らせを見落としたページは、出典の最後の変更が `compiled` 日より後になるので、`health/freshness-report.md` の WL-3 に並ぶ。`scripts/check.sh` はその数を出す（止めない）。

### front matter の読み方

各ページの冒頭にある YAML front matter が、どの正本から作ったかを残す。

```yaml
title: "概念名"              # ページの題
aliases: ["English", "略称"]  # Quartz のリンクの行き先（ファイル名と aliases で解く）
source:                       # ★ 材料にした正本
  - repo: "pd"                # pd・cs・ks・as（今までの repo の名前も読める）
    path: "knowledge/concepts/CN-005_trust-hypothesis-inventory.md"
compiled: "2026-11-10"        # 出典と照らした最後の日
tags: [concept, trust]
status: 探索的 | 暫定 | 正典 | LLM構成物 | 要改訂  # 内容の成熟度
review_state: 未レビュー | v2照合中 | v2照合済 | レビュー済み  # 人のレビューの状態
ocr_verified: true            # (任意) 原典の PDF を OCR で確かめた
related_concepts: [...]       # (任意) 関連する概念
```

出典ページ（`sources/`）は、`source` に `repo: "cs"`・`path: "knowledge/raw/manifest.md"`・`manifest_id: "Dxx-Syy"` を書く。WL-3 は `manifest_id` から出典ノートを引いて日付を比べる。

#### status の意味

| 値 | 意味 |
|---|---|
| `探索的` | 調査の途中。構造が定まっていない |
| `暫定` | 情報はまとまったが、理論の中の置き場所が決まっていない |
| `正典` | 学術文献の解説など、出典が確定しているもの |
| `LLM構成物` | LLM が構成したが pjdhiro が採っていない。参照は注意 |
| `要改訂` | 今の内容に食い違いがあり、書き直し待ち |

#### review_state の意味

| 値 | 意味 |
|---|---|
| `未レビュー` | pjdhiro がまだ確かめていない |
| `v2照合中` | 理論の v2 の系列との整合を確かめている |
| `v2照合済` | 整合を確かめた |
| `レビュー済み` | pjdhiro が内容を承認した |

---

## ディレクトリの置き方

| ディレクトリ | 内容 | status の既定 |
|---|---|---|
| `concepts/` | PD 固有の概念（project-design の独自のもの、または ks と共有のもの） | `暫定` か `正典` |
| `keywords/` | 複数の論文をまたぐ索引のページ（人物、外部の理論） | `暫定` |
| `sources/` | 学術論文・原典・公式文書の解説ページ | `正典` |
| `sources/pd/` | PD 固有の原典、またはほかに分類されない原典 | `暫定` か `正典` |
| `cross-refs/` | ディレクトリをまたぐ接続・地図・概観 | `暫定` |
| `health/` | wiki-lint の点検の報告 | 管理の対象外 |

### 迷うとき

- **人物のページ**：複数の論文をまたぐ人物は `keywords/`、個別の論文の著者は `sources/`
- **PD 固有の概念**：`concepts/` に置く（欠損、抱持、情動の構成 など）
- **LLM が構成した仮説**：`status: LLM構成物` で `keywords/` に置く
- **ディレクトリをまたぐ観点の整理**：`cross-refs/`

### alias の付け方

- 英語名（ローマ字）→ 日本語の別名 → 略称 の順に書く
- 例：`aliases: ["Annette Baier", "アネット・ベイアー", "Baier"]`

### tag の体系

- 構造のタグ：`concept`・`keyword`・`person`・`cross-ref`・`source`（ディレクトリの種類。1 ページに必ず一つ）
- 主題のタグ：`trust`・`value`・`design-thinking`・`kesson`・`awareness-model` など
- 創造とはの分野のタグ：`D01`〜`D30`（30 の分野に属する sources・keywords に付ける）
- メタのタグ：`原典参照`（PDF から）・`原典解説`（sources の解説ページ）

本文の節の名前（`§1-先行研究` のようなもの）はタグにしない。絞り込みが効かなくなる。

---

## 点検（wiki-lint）

`pd/scripts/wiki-lint.mjs` が点検し、結果を `health/` に書く。

| チェック | 何を見るか | 報告 |
|---|---|---|
| **WL-1** 旧用語 | 使わなくなった用語（Withhold→抱持 など）が残っていないか | `health/cn-divergence-report.md` |
| **WL-3** 古いページ | 出典の最後の変更（git の commit）が、ページの `compiled` 日より後か | `health/freshness-report.md` |
| **WL-4** 孤立ページ | どこからもリンクされていないページ | `health/orphan-report.md` |
| **WL-5** 出典の実在 | front matter の出典のパスが、この repo にあるか | WL-3 と同じ報告 |
| **WL-6** `/` 入りのリンク | 年号の `/` がパスとして読まれていないか | `health/orphan-report.md` |

文字化け（U+FFFD）は `scripts/check.sh` が見る。

---

## 設計の考え方

Karpathy の [LLM Knowledge Base の形](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) を参考にした。

| Karpathy の概念 | この wiki で |
|---|---|
| **Raw Sources**（変えない） | 正本（knowledge・読み物・出典ノート・サイトの冒頭） |
| **Compiled Wiki**（LLM が作る） | `pd/wiki/`（このディレクトリ） |
| **Schema**（構造の定義） | wiki-compile のスキル、`pd/knowledge/meta/canonical-keywords.md` |
| **Ingest・Compile** | 正本を直したセッションが、wiki-compile のスキルで作り直す |
| **Query & Enhance** | Quartz のサイトで読む・検索する・グラフで見る |
| **Lint & Maintain** | wiki-lint と `scripts/check.sh` |

1. **正本を書き換えない** — wiki は追加の層
2. **作り直せる** — wiki を消しても、正本から作り直せる
3. **正本と分ける** — wiki は compiled view。正本は各ディレクトリにある
4. **正本と一緒に動かす** — 正本を直した作業の中で、wiki も作り直す

---

## Obsidian について

2026-04 には、人が wiki を Obsidian で閲覧・探索する分担を考えていた。今は Obsidian を使っていない。wiki を書く・点検する・組む・公開するのは、Claude Code・wiki-lint・Quartz。今までの repo から運ばれてきた設定 `pd/wiki/.obsidian/` は、使っていないので外した（2026-11-10）。

---

## 関連

| 項目 | 場所 |
|---|---|
| 作り直しのスキル | `.claude/skills/wiki-compile/SKILL.md` |
| 知らせと日付の比べ | `pd/scripts/wiki-stale-check.mjs`・`pd/scripts/wiki-sources.mjs` |
| 点検 | `pd/scripts/wiki-lint.mjs` |
| 経緯 | 今までの project-design の #48（計画）・#49（Obsidian）・#53（repo をまたぐ compile）・#72（正本を直したときの知らせ）・#77（作り直しの依頼の inbox）。今は非公開のアーカイブ |
