# Zenn セットアップ・運用メモ

最終更新: 2026-03-26

## アカウント・リポジトリ

| 項目 | 値 |
|------|-----|
| Zenn アカウント | GitHub ログインで作成 |
| 連携リポジトリ | `uminomae/zenn-content`（public） |
| GitHub URL | https://github.com/uminomae/zenn-content |
| 記事ディレクトリ | `articles/` |
| 本ディレクトリ | `books/` |

## 仕組み

- `zenn-content` リポの `main` ブランチに push → Zenn に自動デプロイ
- Zenn ダッシュボードで「GitHub からのデプロイ」を連携設定済み
- 記事の公開/非公開は frontmatter の `published: true/false` で制御

## 記事ファイル形式

```markdown
---
title: "記事タイトル"
emoji: "📐"
type: "idea"          # "idea" or "tech"
topics: ["トピック1", "トピック2"]  # 最大5つ
published: false      # true で公開
---

本文（Markdown）
```

- ファイル名 = スラッグ（URL の一部になる）
- `articles/{slug}.md` に配置

## CLI コマンド

```bash
# 初期化（済み）
npx zenn-cli init

# 新規記事作成（スラッグ自動生成）
npx zenn-cli new:article

# スラッグ指定で作成
npx zenn-cli new:article --slug my-article-slug

# ローカルプレビュー（http://localhost:8000）
npx zenn-cli preview
```

注意: パッケージ名は `zenn-cli`（`zenn` ではない。`npx zenn` はエラーになる）。

## 公開フロー

1. `articles/` に MD を作成（`published: false`）
2. `npx zenn-cli preview` でローカル確認
3. pjdhiro が内容を確認・加筆
4. `published: true` に変更
5. `git commit && git push` → Zenn に自動反映

## スクラップについて

- スクラップ（scraps）は GitHub 連携対象外。Zenn Web 上で作成・編集
- デフォルトで公開される（作成時に非公開も選択可）
- CLI ワークフローには乗らない

## 現在の記事

| ファイル | タイトル | 状態 |
|---------|---------|------|
| `project-design-toha.md` | プロジェクトデザインとは何か | 非公開（下書き） |

## note との棲み分け

| プラットフォーム | 用途 | 理由 |
|-----------------|------|------|
| Zenn | 技術思想系（欠損駆動思考、AI協働） | 技術者層、GitHub 連携で MD 直接公開 |
| note | ビジネス・思想系（事業構想、プロジェクトデザイン） | ビジネス層。API なし、手動コピペ |

## 関連 Issue

- kesson-driven-thinking#307: Zenn GitHub 連携
- kesson-driven-thinking#297: 寄生戦略（Parasite SEO）— Zenn 展開部分
