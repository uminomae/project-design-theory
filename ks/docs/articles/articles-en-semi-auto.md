# ARTICLES 英語化 半自動運用

> 2026-11-12：ここに書いた道具（`scripts/build-guide-pdf.sh`・`scripts/articles-en-*`）と、入口の記事の段（ARTICLES）は外した。pjdhiro の repo とサイトを使わないことにしたため（Issue #134）。旧ガイドは `ks/archive/guides/` にある。ここから下は当時の運用の記録で、今の手順ではない。

## 目的

- `pjdhiro` 側の最新記事を `kesson-space` へ取り込みつつ、英語未整備項目を見逃さない。
- Claude / Codex のどちらの対話開始でも同じチェックルーチンを実行する。
- 自動翻訳エンジンに依存せず、通知 + キュー化までを自動化する。

---

## 対象データ

- Remote source: pjdhiro のサイトの `api/kesson-articles.json`（リンクは外した・#134）
- Local cache: `assets/articles/articles.json`
- EN required fields: `title_en`, `excerpt_en`

---

## ルーチンコマンド

```bash
# セッション開始ルーチン（sync + Issue通知）
./scripts/articles-en-routine.sh

# 差分確認のみ（書き込みなし）
./scripts/articles-en-routine.sh check

# 新規/更新記事をローカルJSONへ同期
./scripts/articles-en-routine.sh sync
```

npm経由の互換コマンド:

```bash
npm run articles:en:check
npm run articles:en:sync
npm run articles:en:routine
```

`articles:en:routine` は以下を実行する:

1. remote API 取得
2. local JSON と比較して新規/更新を同期
3. 英語未整備項目を抽出
4. `--issue <番号>` を渡したときだけ、API差分がある場合に、その Issue に要約コメントを投稿（無変化時は投稿しない）。今までの kesson-space の `#107` は、この repo では番号が違うので、既定では投稿しない（2026-11-08）

---

## セッション開始ルール（Claude / Codex 共通）

新しい対話を開始したら、実装着手前に以下を実行する。

```bash
./scripts/articles-en-routine.sh
```

運用:

- 失敗しても作業を全面停止しない（ネットワーク断などは警告として扱う）。
- 失敗時は、その日のセッションの記録に「routine failed」と残す（今までの Issue `#107` は移していない。2026-11-08）。
- ルーチンの結果で `pending_en > 0` の場合、翻訳準備タスクとして優先キューに入れる。

---

## 翻訳作業の位置づけ

- ルーチンは「検知・同期・通知」までを自動化する。
- 翻訳文の最終作成とレビューは対話内で実施する（半自動）。
- 既存英語がある項目は上書きしない。

---

## メモ

- 実装スクリプト: `scripts/articles-en-semi-auto.mjs`
- npm scripts 定義: `package.json`
