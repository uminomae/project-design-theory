# ガイド PDF の生成ルール（md → PDF・日英）

公開ページの三本のガイド（一般向け・設計者向け・専門家向け）の PDF をつくる手順です。Issue #220。

## 置き場所

| もの | 場所 |
|---|---|
| 入力（md） | pjdhiro `assets/kesson/guides/{ja,en}/md/kesson-{general,designer,academic}.md` |
| 出力（PDF） | pjdhiro `assets/kesson/guides/{ja,en}/pdf/kesson-{general,designer,academic}.pdf` |
| 読む側 | ks `src/guides.js`（md は raw.githubusercontent、PDF は GitHub Pages から開く） |
| 一覧 | pjdhiro `assets/kesson/manifests/guides.json`（パスだけ。生成のたびに直す必要はない） |
| 生成スクリプト | ks `scripts/build-guide-pdf.sh` |
| 変換の本体 | project-design `transform/scripts/build-pdf.sh`（全 repo 共通の正本。pandoc + lualatex） |

2026-03 の既存 PDF も同じ経路（creation-space `transform/scripts/build-pdf-guide.sh` と同型、PDF メタデータの Creator が「LaTeX via pandoc」、Producer が LuaTeX）でつくられていました。ks 側には手順が無かったので、ここに置きます。

## 依存

```bash
bash scripts/build-guide-pdf.sh --setup
```

pandoc・lualatex・python3（SVG を含む md なら rsvg-convert）。足りないときは `brew install pandoc`、`brew install --cask mactex-no-gui`、`sudo tlmgr install collection-luatex luatexja haranoaji`。

## つくる

```bash
# 1 本だけ（例: 専門家向け 日本語）
bash scripts/build-guide-pdf.sh --audience academic --lang ja

# 全部（3 本 × 日英）
bash scripts/build-guide-pdf.sh --audience all --lang all

# 公開先に書かずに試す
bash scripts/build-guide-pdf.sh --audience academic --lang ja --out-dir "$TMPDIR/guides-pdf"
```

所要時間の目安（2026-11-07、Apple Silicon）: 専門家向け ja 1 本で約 18 秒、6 本で約 100 秒。

pjdhiro の checkout が別の場所なら `PJDHIRO_DIR=/path/to/pjdhiro` を前につけます。

## できたものを確かめる

1. ページ数とタイトル: `pdfinfo <pdf>`（Title が表紙のタイトルと合っているか）
2. 本文が落ちていないか: `pdftotext <pdf> - | grep '<md の見出しや表の語>'`
3. 見た目: 表紙・目次・表のあるページを開く（`pdftoppm -f <p> -l <p> -r 60 -png <pdf> out` で画像にしても見られます）
4. 見出し・表・引用・箇条書きがそのまま出ているか

## 公開する

1. pjdhiro で PDF をコミットして push（pjdhiro は main から GitHub Pages に出ます）
2. 準備中にしていた場合は ks `src/guides.js` の `pdfUrl: ''` を元の URL に戻し、develop で目視 → main へは PR

## タイトル

表紙と PDF メタデータのタイトルは `scripts/build-guide-pdf.sh` の `guide_title` / `guide_subtitle` に書いてあります。md 側に H1 が無いので、ここで決めます。

- 一般向け・設計者向けは 2026-03 の PDF のタイトルを引き継いでいます
- 専門家向け ja は「欠損駆動思考／専門家向け（草案 v0.4）」。草案の版が上がったらサブタイトルを直します
- 本文を書き直したガイドは、タイトルも合わせて直します

## 英語版

英語版の md を更新したら、同じコマンドに `--lang en` をつけて再生成します。翻訳そのものはこの手順に含めません（2026-11-07 時点で専門家向け en は旧版の本文のままです）。

## md を差し替えるとき（専門家向け）

正本は ks `docs/drafts/kesson-academic-ja-v0.md`。v0.4 の公開用 md（pjdhiro `1e81645`）は、そこから front matter・H1・「作業メモ（公開時に削除）」を除き、先頭に版の一行（`*草案 vX.Y（日付）。正本は …。*`）を置き、末尾に「IX. 参考文献」を足したものです（参考文献は草案側にはありません）。差し替えたら上の「つくる」から行います。
