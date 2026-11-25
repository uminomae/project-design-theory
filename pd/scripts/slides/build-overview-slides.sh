#!/bin/bash
# HOME の「プレゼン資料」の PDF（日本語・英語）を、元の HTML から作り直す。
# 使い方：bash pd/scripts/slides/build-overview-slides.sh
# 作り直すのは骨格が変わったときだけ、週に一度ほど（docs/rules/stance.md 2-8）。
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../../.." && pwd)"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# 日本語（overview-slides.html → -ja.pdf）と英語（overview-slides-en.html → -en.pdf）の二つを作る。
for pair in "overview-slides.html:overview-slides-ja.pdf" "overview-slides-en.html:overview-slides-en.pdf"; do
  src="$here/${pair%%:*}"
  out="$root/pd/assets/pdf/${pair##*:}"
  prof="$(mktemp -d "${TMPDIR:-/tmp}/slides-chrome.XXXXXX")"
  "$chrome" --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir="$prof" \
    --print-to-pdf="$out" "file://$src" 2>/dev/null
  echo "書いた：$out"
done
