#!/usr/bin/env bash
# セッションの記録を、worktree の .cache/session/ から本体の checkout の .cache/session/ へ写す。
# worktree の .cache/ は worktree と一緒に消えるので、記録は本体の側に置く（CLAUDE.md「セッションの記録」）。
# worktree のセッションの Write は、アプリの守りで本体の側に書けない。worktree の .cache/session/ に書いてから、これを回す
# （#130・2026-11-11）。
#
# 使い方：bash scripts/session-log.sh <記録の名前か、worktree の中の道>   例：bash scripts/session-log.sh log-20261111-130-session-end.md
#   本体の側に同じ名前で違う中身があれば、写さずに差分の大きさを出して止める。上書きしてよければ --force を付ける
#   （書き足しを写し直すとき）。本体の checkout で回したときは、何もしない。
set -u
force=0
name=""
for a in "$@"; do
  case "$a" in
    --force) force=1 ;;
    *) name="$a" ;;
  esac
done
[ -n "$name" ] || { echo "使い方：bash scripts/session-log.sh <記録の名前> [--force]" >&2; exit 2; }

top="$(git rev-parse --show-toplevel)" || exit 2
main="$(cd "$(git rev-parse --path-format=absolute --git-common-dir)/.." && pwd)" || exit 2

case "$name" in
  */*) src="$name" ;;
  *) src="$top/.cache/session/$name" ;;
esac
[ -f "$src" ] || { echo "見つからない：$src" >&2; exit 1; }
base="$(basename "$src")"
case "$base" in
  log-*.md) ;;
  *) echo "記録の名前は log-YYYYMMDD-<話題>.md：$base" >&2; exit 2 ;;
esac

dst="$main/.cache/session/$base"
if [ "$(cd "$(dirname "$src")" && pwd)/$base" = "$dst" ]; then
  echo "本体の checkout の記録そのもの。写さない：$dst"
  exit 0
fi
mkdir -p "$main/.cache/session"
if [ -f "$dst" ] && ! cmp -s "$src" "$dst"; then
  if [ "$force" -ne 1 ]; then
    echo "本体の側に同じ名前で違う中身がある：$dst" >&2
    echo "違う行：$(diff "$dst" "$src" | grep -c '^[<>]')" >&2
    echo "上書きしてよければ --force を付けて回し直す。" >&2
    exit 1
  fi
fi
cp "$src" "$dst" && echo "写した：$dst"
