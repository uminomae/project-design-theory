# 公開物生成 End-to-End ワークフロー テンプレート v1.0

**用途**: evidence から公開物（MD / PDF）を生成する標準手順の骨格
**正本**: project-design（各 repo はこのテンプレートを参照し、固有のステップを追加する）

---

## 前提

- evidence が各 repo の所定ディレクトリに存在すること
- 共通原則（`project-design/knowledge/workflow/PRINCIPLES.md`）を読んでいること
- 各 repo 固有の reader-rules が存在すること

---

## A. 1文書の新規生成（最小パス）

### Step 1: 入力準備

以下を読む（この順序で）:

1. 各 repo 固有の reader-rules（声・構成・品質基準）
2. `project-design/knowledge/workflow/PRINCIPLES.md`（共通原則）
3. 品質テスト観点（生成前に内面化）
4. 対象の evidence ファイル

### Step 2: MD 生成

各 repo 固有のテンプレート構造に従い生成する。

- reader-rules の全§を遵守
- front matter: title, generator_model, lang, version, date を必須記入

出力先: 各 repo の公開正本ディレクトリ（`pjdhiro/assets/{project}/`）

### Step 3: 品質テスト

品質テスト観点に従い自己採点する。

- FAIL があれば再生成（Step 2 に戻る）
- WARN は3件以上で再生成を検討
- grep チェック + 目視チェック

### Step 3.5: 原典照合

品質テスト PASS 後、独立レビューの前に原典照合を実施する。

1. 本文で名前を挙げた理論・人物を列挙する
2. 各理論について信頼できる参照（原著、教科書、学術レビュー、百科事典等）を調べる
3. 判定基準で検証する:
   - `verified`: 原典で確認済み
   - `plausible`: 信頼できる二次文献で確認
   - `overstated`: 原典の主張を超える記述 → 本文を修正して Step 3 に戻る
   - `unverifiable`: 確認不能 → 本文から除外、または温度を下げる
4. 検証結果を `{filename}-ref-check.md` として保存する（公開はしない）

### Step 4: 独立レビュー

生成したレポートを、生成者とは別のエンジン（Codex CLI 等）でレビューする。

レビュー観点（各 repo で具体化）:
- スコープ（主題を維持しているか）
- 文体の統一
- 根拠と温度の適切さ
- 返却設計（立ち位置明示・安全弁・温度開示）
- evidence との整合

- **FAIL** → Step 2 に戻り修正
- **WARN** → 修正して再レビュー（3件以上は再生成検討）
- **PASS** → Step 5 に進む

### Step 5: 翻訳（JA/EN 公開の場合）

`project-design/knowledge/workflow/rules/translation-rules.md` に従う。

各 repo 固有の用語表を適用する。

### Step 6: PDF 生成（PDF 公開の場合）

各 repo の PDF 生成スクリプトを使用する。

### Step 7: manifest 更新

生成メタデータを各 repo の manifest に反映する。

---

## B. 既存文書の更新

1. 変更対象の evidence を確認
2. Step 2-7 を再実行（差分のみ）
3. version を上げる

---

## C. バッチ生成

複数文書を一括生成する場合:
1. 対象リストを作成
2. 各文書について A を実行
3. manifest を一括更新
