# research-operations.md — 調査・公開の管理体系

「価値とは？」「信頼とは？」「デザイン思考とは？」——
テーマごとの調査から公開までの全体像を、ここを見れば把握できるようにする。

## パイプライン

```
[1] 調査 (research)
    外部 LLM（ChatGPT Deep Research / Codex）+ Claude による先行研究調査
    ↓
[2] 統合 (synthesis)
    複数ソースの比較・統合・独自理論との接続
    ↓
[3] 変換 (transform)
    生成ルールに基づいて公開用記事に変換
    ↓
[4] 公開 (publish)
    pjdhiro（正本）/ note / Zenn に配置
```

## ディレクトリ構成

| ディレクトリ | 役割 | 命名規則 |
|---|---|---|
| `knowledge/research/{topic}/` | 調査レポート（生データ） | `{topic}-{llm}-{YYYYMMDD}.md` |
| `knowledge/research/{topic}/` | 深掘りレポート | `{topic}-{subtopic}-deep-dive-{llm}-{YYYYMMDD}.md` |
| `knowledge/research/{topic}/` | インデックス | `{topic}-deep-dives-index-{llm}-{YYYYMMDD}.md` |
| `knowledge/research/meta/` | テーマ横断メモ | `{slug}-{llm}-{YYYYMMDD}.md` |
| `transform/` | 変換ルール・テンプレート | MD 実体は置かない |
| `publish/` | 公開用出力 | 正本は pjdhiro に残す |

### ファイル命名規則

```
{topic}-{llm}-{YYYYMMDD}.md

topic : trust, value, design-thinking, ...
llm   : chatgpt, codex, claude
date  : YYYYMMDD
```

## テーマ別ダッシュボード

### 信頼（trust）

| 項目 | 内容 |
|------|------|
| 親 Issue | project-design#6 |
| 子 Issue | #8（愛着）, #9（AI）, #10（神経現象学） |
| KDT 側関連 | kesson-driven-thinking#7, #10 |
| インデックス | `knowledge/research/trust/trust-deep-dives-index-codex-20260326.md` |

| ファイル | LLM | 状態 |
|---------|-----|------|
| `trust/trust-chatgpt-20260326.md` | ChatGPT | 完了 |
| `trust/trust-codex-20260326.md` | Codex | 完了 |
| `trust/trust-attachment-deep-dive-codex-20260326.md` | Codex | 完了 |
| `trust/trust-neurophenomenology-deep-dive-codex-20260326.md` | Codex | 完了 |
| `trust/trust-ai-deep-dive-codex-20260326.md` | Codex | 完了 |

### デザイン思考（design-thinking）

| 項目 | 内容 |
|------|------|
| 親 Issue | project-design#6 |
| 子 Issue | #11（visual thinking）, #12（Stanford系譜）, #13（形骸化）, #14（日本受容史）, #15（abduction）, #16（wicked problems）, #17（designerly vs business） |
| KDT 側関連 | kesson-space#171 |
| インデックス | `knowledge/research/design-thinking/design-thinking-deep-dives-index-codex-20260326.md` |

| ファイル | LLM | 状態 |
|---------|-----|------|
| `design-thinking/design-thinking-deep-research-gpt-20260326.md` | ChatGPT | 完了 |
| `design-thinking/design-thinking-deep-research--codex-20260326.md` | Codex | 完了 |
| `design-thinking/design-thinking-abduction-genealogy-deep-dive-codex-20260326.md` | Codex | 完了 |
| `design-thinking/design-thinking-stanford-lineage-deep-dive-codex-20260327.md` | Codex | 完了 |
| `design-thinking/design-thinking-designerly-vs-business-deep-dive-codex-20260327.md` | Codex | 完了 |
| `design-thinking/design-thinking-wicked-problems-reception-deep-dive-codex-20260327.md` | Codex | 完了 |
| `design-thinking/design-thinking-ossification-critique-deep-dive-codex-20260327.md` | Codex | 完了 |
| `design-thinking/design-thinking-visual-thinking-language-deep-dive-codex-20260327.md` | Codex | 完了 |
| `design-thinking/design-thinking-japan-reception-deep-dive-codex-20260327.md` | Codex | 完了 |

### 価値（value）

| 項目 | 内容 |
|------|------|
| 親 Issue | project-design#6 |
| 子 Issue | #18 |
| インデックス | なし（今後作成） |

| ファイル | LLM | 状態 |
|---------|-----|------|
| `value/value-chatgpt-20260326.md` | ChatGPT | 完了 |
| `value/value-codex-20260327.md` | Codex | 完了 |

## 調査の進捗管理

### Issue 体系

```
#6 knowledge/evidence/ への調査データ蓄積（親）
├── 信頼: #8, #9, #10
├── デザイン思考: #11, #12, #13, #14, #15, #16, #17
└── 価値: #18
```

### 状況報告のルール

- 調査レポートが完了したら、該当 Issue にコメントで報告（保存先・主要知見・次のステップ）
- 深掘り Issue は起票時にスコープ・成果物ファイル名を明記
- インデックスファイルは Codex が自動生成・更新

## 生成ルール（transform）

### 調査レポート → 公開記事

1. **統合フェーズ**: 同一テーマの複数 LLM レポートを比較し、一致点・相違点・独自理論との接続を整理
2. **変換フェーズ**: 統合結果を公開用フォーマットに変換
   - SEO/LLM 最適化: `kesson-driven-thinking/.claude/rules/seo-llm-keywords.md` 参照
   - 定義文: 独自用語の初出に「〇〇とは、△△である」形式
   - 英語併記: 重要概念に英語表記を添える
3. **配置**: pjdhiro の該当パスに正本を配置

### 公開先マッピング

| テーマ | pjdhiro 上のパス | 備考 |
|--------|----------------|------|
| 信頼 | `_pages/pd/emotional-processing/` | 感情処理シリーズ |
| 価値 | `_pages/pd/emotional-processing/` | 感情処理シリーズ |
| デザイン思考 | `_pages/pd/thinking/` | 思考法シリーズ |

### 使用スキル

| スキル | 用途 | リポジトリ |
|--------|------|-----------|
| `/note-generate` | note 記事生成 | kesson-driven-thinking |
| `/generate-drafts` | 全種ドラフト生成 | kesson-driven-thinking |
| `/publish-pdf` | PDF ビルド→公開 push | kesson-driven-thinking |

## 新テーマ追加時のチェックリスト

1. [ ] pd repo に Issue 起票（親 #6 の子として）
2. [ ] ChatGPT Deep Research を実行、`{topic}-chatgpt-{date}.md` で保存
3. [ ] Codex に深掘り Issue を起票させる
4. [ ] 本ファイルのダッシュボードにテーマセクションを追加
5. [ ] 公開先パス（pjdhiro）を決定
