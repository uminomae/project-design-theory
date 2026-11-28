#!/bin/bash
# blog/ の記事のサムネイル（一覧のカードと og:image の一枚）を、1200×630 の PNG か JPG にして blog/assets/thumbs/ に置く。
#
#   bash scripts/blog-thumb.sh <入力> <記事の名前>
#
#   <記事の名前>：記事のファイル名から .html を外したもの（例 2026-11-28-friday）。ブログ全体の一枚は blog
#   <入力>：
#     ① pjdhiro が渡した画像（.png・.jpg・.jpeg・.heic など、sips が読めるもの）
#        → 縦横の比を保って 1200×630 を覆う大きさにし、真ん中で切り出す。写真（.jpg・.jpeg・.heic）は JPG、ほかは PNG で書く
#        渡された元の画像は repo に入れない（切り出した一枚だけを入れる）
#     ② Claude が描いた SVG（blog/_thumbs-src/<記事の名前>.svg に置く）→ rsvg-convert で 1200×630 の PNG に書き出す
#
# 手元の道具（macOS の sips と、Homebrew の rsvg-convert）だけで回す。外のサービスに送らない。
# ① の sips は中間のファイルを OS の一時置き場に書くので、Claude のサンドボックスの中では止まる。外で回す。
# 書いたファイル名を出すので、記事の og:image をそのファイル名にする。
set -euo pipefail

if [ $# -ne 2 ]; then
  sed -n '2,15p' "$0" | sed 's/^# \{0,1\}//'
  exit 2
fi

in="$1"
name="$2"
repo="$(cd "$(dirname "$0")/.." && pwd)"
outdir="$repo/blog/assets/thumbs"
W=1200
H=630

if [ ! -f "$in" ]; then
  echo "blog-thumb: 入力が無い（$in）" >&2
  exit 1
fi
case "$name" in
  *.*|*/*|"") echo "blog-thumb: 記事の名前は拡張子もパスも付けない（例 2026-11-28-friday）" >&2; exit 1 ;;
esac
mkdir -p "$outdir"

ext="$(printf '%s' "${in##*.}" | tr '[:upper:]' '[:lower:]')"
case "$ext" in
  svg)
    command -v rsvg-convert >/dev/null || { echo "blog-thumb: rsvg-convert が無い（brew install librsvg）" >&2; exit 1; }
    out="$outdir/$name.png"
    rsvg-convert -w "$W" -h "$H" -b "#ffffff" "$in" -o "$out"
    ;;
  jpg|jpeg|heic|heif)
    out="$outdir/$name.jpg"; fmt=jpeg ;;
  *)
    out="$outdir/$name.png"; fmt=png ;;
esac

if [ "$ext" != svg ]; then
  w=$(sips -g pixelWidth "$in" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$in" | awk '/pixelHeight/{print $2}')
  tmp="$(mktemp "${TMPDIR:-/tmp}/blog-thumb.XXXXXX").$ext"
  cp "$in" "$tmp"
  # 横長すぎる絵は高さを、縦長の絵は幅を合わせてから、真ん中で切り出す
  if [ $((w * H)) -gt $((h * W)) ]; then
    sips --resampleHeight "$H" "$tmp" >/dev/null
  else
    sips --resampleWidth "$W" "$tmp" >/dev/null
  fi
  sips --cropToHeightWidth "$H" "$W" -s format "$fmt" "$tmp" --out "$out" >/dev/null
  rm -f "$tmp"
fi

# 同じ名前で拡張子の違う古い一枚が残っていたら知らせる（og:image とカードが古い方を指さないように）
for old in "$outdir/$name".*; do
  [ "$old" = "$out" ] || echo "blog-thumb: 古い一枚が残っている（$(basename "$old")）。要らなければ消す" >&2
done

size=$(sips -g pixelWidth -g pixelHeight "$out" | awk '/pixel/{printf "%s ", $2}')
echo "blog-thumb: ${out#$repo/}（${size% }）"
echo "  og:image は https://uminomae.github.io/project-design-theory/blog/assets/thumbs/$(basename "$out")"
