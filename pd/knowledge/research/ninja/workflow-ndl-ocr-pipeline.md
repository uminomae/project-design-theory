# ワークフロー: NDL古典籍 OCR パイプライン

作成日: 2026-03-27
背景: Issue #24（正忍記読解）で構築。Issue 自体はクローズしたが、パイプラインはナレッジとして残す。

## 適用場面

- NDL デジタルコレクションで公開されている古典籍を AI で翻刻したい
- 既存の翻刻が存在しない（or 入手困難な）テキストが対象
- 既に翻刻がある書物には使わない（車輪の再発明になる）

## パイプライン

```
[1] IIIF Manifest 確認 → コマ数・画像URL・メタデータ取得
[2] 画像一括取得 → fetch-ndl-images.sh
[3] Gemini OCR → gemini-ocr.py（翻刻 + 備考 + 要約）
[4] 校正 → Claude Vision で二重チェック / 他OCRと照合
[5] 現代語訳・解釈
```

## Step 1: IIIF Manifest

```
https://dl.ndl.go.jp/api/iiif/{PID}/manifest.json
```

取得できる情報: 総コマ数、画像URLパターン、タイトル、著者、成立年、請求記号、アクセス制限

画像URLパターン:
```
https://dl.ndl.go.jp/api/iiif/{PID}/R{7桁連番}/full/full/0/default.jpg
```

サイズ制御: `full/1024,/0/default.jpg`（幅1024pxに縮小）

## Step 2: 画像取得

```bash
bash scripts/fetch-ndl-images.sh <PID> <コマ数> <出力ディレクトリ>
```

注意点:
- `-L` フラグ（リダイレクト追従）必須。ないと 0B になる場合がある
- 0.5秒間隔で rate limit 対応
- 既存ファイルはスキップ

## Step 3: Gemini OCR

```bash
python3 scripts/gemini-ocr.py <画像ディレクトリ> <出力ファイル> [開始] [終了]
```

環境変数:
- `GEMINI_API_KEY`（必須）
- `GEMINI_MODEL`（デフォルト: `gemini-2.5-flash`）

特徴:
- curl + base64 inline 方式（creation-space パターン準拠）
- base64 が大きいため `-d @-`（stdin）で payload を渡す
- 増分書き込み: 1フレームごとにファイルに追記（中断しても途中まで残る）
- temperature 0.1（翻刻は正確性優先）
- 4秒間隔の rate limit

## 精度実績（正忍記 初巻での検証）

| ページ種別 | Gemini flash 精度 | 備考 |
|-----------|------------------|------|
| 漢文体（序文） | 高い | 訓読まで付く |
| 漢字中心 | 概ね良好 | 固有名詞の校正は必要 |
| くずし字ひらがな混じり | ~85% | 推測交じりの箇所あり |
| 読みにくいコマ | ハルシネーション発生 | 「ををを...」の繰り返し。pro で改善する場合あり |

ハルシネーション発生率: 54コマ中5コマ（~9%）

対処: `GEMINI_MODEL=gemini-2.5-pro` で再実行、または Claude Vision で個別読み取り

## 制約と教訓

1. **既存翻刻がある書物には使うな**: 正忍記のような著名テキストは専門家翻刻が出版されている
2. **くずし字ひらがなは AI OCR の限界**: 漢字に比べて精度が落ちる
3. **「全てを正確に読みたい」には不十分**: 校正なしで使える精度ではない
4. **未翻刻の古典籍には有用**: 粗い翻刻でも手がかりになる

## コスト

54コマ（初巻）の実行時間: 約15分（4秒間隔 + API応答時間）
Gemini 2.5 flash の API コスト: 画像トークン + 出力で数十円程度

## ファイル構成

```
scripts/
  fetch-ndl-images.sh  — NDL IIIF 画像取得
  gemini-ocr.py        — Gemini Vision OCR（汎用）
```
