# workflow/ -- 公開物生成の汎用ワークフロー正本

各 repo（creation-space, awareness-space 等）が公開物を生成する際に共通で参照するルール・ワークフローの正本。

## 原則

- **データは各 repo が持つ**: evidence, knowledge, 調査資料は各 repo に置く
- **ワークフローとルールは pd が正本**: 汎用的な生成手順・品質基準・視覚仕様はここに置く
- **固有ルールは各 repo が持つ**: reader-rules, テンプレート, モデル固有の品質チェック項目は各 repo の `transform/` に置く

## 構成

```
workflow/
├── PRINCIPLES.md              # 全 workflow 共通原則（§2 スコープは各 repo で上書き）
├── WORKFLOW-TEMPLATE.md       # evidence → generate → test → publish の骨格
├── rules/
│   ├── translation-rules.md   # JA↔EN 翻訳（§3 用語表は各 repo で定義）
│   ├── evidence-constraint.md # evidence 外挿入禁止の原則
│   └── quality-test-framework.md  # PASS/WARN/FAIL 方法論
└── visual/
    ├── diagram-strategy.md    # スライドタイプ別図解パターン
    ├── svg-generation-rules.md    # SVG スタイルガイド（§2 カラーは各 repo）
    └── rich-slides-design-spec.md # スライド HTML/CSS 仕様（完全汎用）
```

## 各 repo での使い方

1. `transform/` 配下の reader-rules 冒頭で本ディレクトリの正本を参照する
2. §2 スコープ / カラーパレット / 用語表 など repo 固有部分のみ自 repo で定義する
3. 品質テストは `quality-test-framework.md` のカテゴリ構造に従い、固有チェック項目を追加する
