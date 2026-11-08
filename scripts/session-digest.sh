#!/usr/bin/env bash
# セッションの記録（本体の .cache/session/log-YYYYMMDD-*.md）の要点だけを出す。
# 作業を始める前に読む（CLAUDE.md「セッションの記録」）。全文は、関わる記録だけを開く。
# 使い方: bash scripts/session-digest.sh [YYYYMMDD ...]   省略時はその日と前の日
set -euo pipefail

root="$(cd "$(git rev-parse --git-common-dir)/.." && pwd)"
dir="$root/.cache/session"

if [ $# -eq 0 ]; then
  today="$(date +%Y%m%d)"
  yesterday="$(date -v-1d +%Y%m%d 2>/dev/null || date -d yesterday +%Y%m%d)"
  set -- "$yesterday" "$today"
fi

for d in "$@"; do
  for f in "$dir"/log-"$d"-*.md; do
    [ -e "$f" ] || continue
    echo "=== $(basename "$f")"
    # 出すもの：見出し（1 行目）、「## 要点」の節、見出しに 残したこと・次に回した・commit を含む節、
    # 箇条書きの「- 残したこと」「- commit」「- 追記」の行。
    awk '
      NR==1 { print; next }
      /^#+ / { sec = ($0 ~ /要点|残したこと|次に回|commit/); if (sec) print; next }
      sec { print; next }
      /^- (残したこと|次に回|commit|追記)/ { print (length($0) > 160 ? substr($0, 1, 160) "…" : $0) }
    ' "$f"
    echo
  done
done
