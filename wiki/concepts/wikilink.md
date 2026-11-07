---
title: "wikilink"
aliases: ["ウィキリンク", "wiki link"]
compiled: "2026-04-06"
tags: [concept, meta, wiki-infrastructure]
status: 正典
review_state: 未レビュー
---

# wikilink

> **高校生向けのやさしい解説**
>
> ウィキペディアで青い文字をクリックすると別のページに飛びますよね。あれと同じ仕組みを、この wiki では `[[ページ名]]` という書き方で作っています。このページは、その記法と、どうやって機械的にリンクが張られていくのかというルールを説明する裏側のページです。ページ同士をつなぐ糸を、人ではなく辞書とプログラムで管理しているのがポイントです。

この wiki で使用される内部リンク記法と、その変換・管理の仕組みを説明するメタページ。

---

## wikilink とは

`[[ページ名]]` の形式で wiki 内の他ページへのリンクを記述する記法。Obsidian がネイティブに解釈し、グラフビューやバックリンクの表示に利用する。

### 記法

| 形式 | 例 | 用途 |
|------|---|------|
| `[[ページ名]]` | `[[欠損駆動思考]]` | 同一ディレクトリまたは Obsidian の自動解決 |
| `[[パス/ページ名\|表示名]]` | `[[cross-refs/concept-entity-map\|Concept-Entity Map]]` | サブディレクトリ指定 + 表示名 |
| `[[ページ名#セクション]]` | `[[抱持#Bion の Containment]]` | セクション指定 |

---

## canonical-keywords 辞書

wikilink の用語統一は `/knowledge/meta/canonical-keywords.md` が担保する。

### 辞書の役割

1. **全リポ共通の用語定義**: 日本語・英語・定義・備考を一元管理
2. **禁止・非推奨用語の制御**: 「Withhold」→「抱持」、「F軸/O軸」→「生存軸/信頼軸」等
3. **表記規則**: 日英併記の形式、略称の初出ルール、概念の用語名表記

### リポジトリ別キーワード

canonical-keywords.md は以下のセクションを持つ:
- **横断キーワード（全リポ共通）**: [[プロジェクトデザイン]], [[欠損駆動思考]], [[欠損]], [[抱持]], [[情動の構成]], [[ネガティブケイパビリティ]], [[Love 駆動開発]], [[感情処理]], [[間主観性]]
- **kesson-space**: [[デザイン思考]], 未定義要件, 弱いシグナル 等
- **awareness-space**: [[内受容感覚]], [[アウェアネスモデル]], 予測誤差, 生存-信頼評価 等
- **creation-space**: [[創造の5段階モデル]], 構造パターン, 領域横断分析 等
- **project-design**: 事業構想

---

## compile の仕組み（wikilink 変換ルール）

wiki-compile スキル（`.claude/skills/wiki-compile/SKILL.md`）が定義する後処理。

### 変換フロー

1. **辞書構築**: canonical-keywords.md の全用語 + wiki/ 内の既存ページ名
2. **正規表現マッチ**: 各ページ内のテキストを辞書の語彙でスキャン
3. **初出のみリンク化**: 同一語が複数回出現する場合、最初の出現のみ `[[]]` で囲む
4. **冪等性保証**: 既に `[[]]` で囲まれた語はスキップ。何度実行しても同じ結果

### 設計原則

| 原則 | 内容 |
|------|------|
| 辞書ベース | LLM の判断ではなく、辞書の正規表現で機械的に変換 |
| 初出のみ | 同一ページ内で同一語は最初の出現のみリンク化 |
| 冪等 | 繰り返し実行しても結果が変わらない |
| 後処理 | compile 本体（LLM による内容整理）の後に実行 |

---

## ソースの traceability

各 wiki ページの front matter にある `source` フィールドが、compile 元のファイルを記録する。

```yaml
source:
  - repo: "kesson-space"
    path: "knowledge/schema/core-definitions.md"
  - repo: "awareness-space"
    path: "knowledge/topics/four-layers/ja/report.md"
```

- `repo`: ソースが存在するリポジトリ名（project-design の場合は省略可）
- `path`: リポジトリルートからの相対パス
- `compiled`: 最後に compile した日付

これにより「この wiki ページの情報はどこから来たか」を常に追跡できる。

---

## 関連ページ

- [[cross-refs/concept-entity-map|Concept-Entity Map]] -- concepts と entities の関係マトリクス
- [[about|About This Wiki]] -- wiki 全体の仕組みと役割分担
