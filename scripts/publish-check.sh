#!/usr/bin/env bash
# 公開してよいかの点検。docs/PUBLISH-CHECK.md の機械の部分。
#
#   scripts/publish-check.sh           commit しようとしている内容（staged）を点検する
#   scripts/publish-check.sh --all     repo にあるファイルすべてを点検する
#
# 見つかったら一覧を出して 1 で終わる。pre-commit から呼ばれる。
set -u

ROOT=$(git rev-parse --show-toplevel)
cd "$ROOT" || exit 2
TERMS_FILE="$ROOT/.publish-check-terms"

mode=staged
[ "${1:-}" = "--all" ] && mode=all

if [ "$mode" = staged ]; then
  files=$(git diff --cached --name-only --diff-filter=ACMR)
else
  files=$(git ls-files)
fi
[ -z "$files" ] && exit 0

content_of() {
  if [ "$mode" = staged ]; then git show ":$1" 2>/dev/null; else cat "$1" 2>/dev/null; fi
}

# 手元だけの語の一覧（公開しない名前など）。一行に一語。# で始まる行は注釈。
terms=()
if [ -f "$TERMS_FILE" ]; then
  while IFS= read -r line; do
    line="${line%%#*}"; line="$(printf '%s' "$line" | sed 's/[[:space:]]*$//')"
    [ -n "$line" ] && terms+=("$line")
  done < "$TERMS_FILE"
else
  echo "publish-check: 注意 — .publish-check-terms がありません。手元だけの語の点検は行っていません。" >&2
fi

# 形で見つけるもの（拡張正規表現）
patterns=(
  '/Users/[A-Za-z0-9._-]+'
  '/home/[A-Za-z0-9._-]+'
  '[A-Za-z]:\\Users\\'
  'gh[pousr]_[A-Za-z0-9]{20,}'
  'github_pat_[A-Za-z0-9_]{20,}'
  'sk-ant-[A-Za-z0-9_-]{10,}'
  'AKIA[0-9A-Z]{16}'
  '-----BEGIN [A-Z ]*PRIVATE KEY-----'
  '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
)
# 公開してよいメールアドレス（commit の trailer、同梱した他者のソフトウェア（Quartz・Dataview）の作者欄）
allow_email='git@github\.com|noreply@anthropic\.com|noreply@openai\.com|@users\.noreply\.github\.com|j\.zhao2k19@gmail\.com|blacksmithgu@gmail\.com'

found=0
while IFS= read -r f; do
  [ -z "$f" ] && continue
  [ "$f" = "scripts/publish-check.sh" ] && continue
  # 同梱した他者のソフトウェア（three.js など）は見ない
  case "$f" in */vendor/*|vendor/*) continue;; esac
  # 文字のファイルだけを見る
  if ! content_of "$f" | head -c 8000 | LC_ALL=C grep -qI . 2>/dev/null; then
    continue
  fi
  body=$(content_of "$f")
  for t in "${terms[@]+"${terms[@]}"}"; do
    hits=$(printf '%s\n' "$body" | grep -niF -- "$t" | head -5)
    if [ -n "$hits" ]; then
      echo "[語] $f — 一覧の語に当たりました"; printf '%s\n' "$hits" | cut -c1-200 | sed 's/^/    /'; found=1
    fi
  done
  for p in "${patterns[@]}"; do
    hits=$(printf '%s\n' "$body" | grep -nE -- "$p" | head -5)
    if [ "$p" = "${patterns[${#patterns[@]}-1]}" ]; then
      hits=$(printf '%s\n' "$hits" | grep -vE "$allow_email" || true)
    fi
    if [ -n "$hits" ]; then
      echo "[形] $f — $p"; printf '%s\n' "$hits" | cut -c1-200 | sed 's/^/    /'; found=1
    fi
  done
done <<< "$files"

if [ "$found" -ne 0 ]; then
  echo
  echo "publish-check: 公開してよいかを確かめてください（docs/PUBLISH-CHECK.md）。"
  exit 1
fi
echo "publish-check: OK ($(printf '%s\n' "$files" | grep -c .) files, mode=$mode)"
exit 0
