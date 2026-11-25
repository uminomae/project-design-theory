#!/bin/bash
# HOME の「プレゼン資料」の PDF を、元の HTML から作り直す。
# 使い方：bash pd/scripts/slides/build-overview-slides.sh
# 作り直すのは骨格が変わったときだけ、週に一度ほど（docs/rules/stance.md 2-8）。
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../../.." && pwd)"
src="$here/overview-slides.html"
out="$root/pd/assets/pdf/overview-slides-ja.pdf"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
prof="$(mktemp -d "${TMPDIR:-/tmp}/slides-chrome.XXXXXX")"
"$chrome" --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir="$prof" \
  --print-to-pdf="$out" "file://$src" 2>/dev/null
echo "書いた：$out"
