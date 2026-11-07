#!/bin/bash
# 手元の確認用サーバーを起動する。並びは scripts/serve.py を見る。
#   bash scripts/serve.sh [port]    既定は 3001
# 本体の checkout は launchd（com.uminomae.project-design-theory）が 3001 で常駐させている。
# worktree で確かめるときは別のポート（.claude/launch.json は 3010）で起動する。
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${1:-${PORT:-3001}}"
QUARTZ="$ROOT/pd/quartz"

build_wiki() {
  echo "wiki: build"
  (cd "$QUARTZ" && npx quartz build --directory ../wiki --output ../wiki-out >/dev/null 2>&1) \
    && echo "wiki: done" || echo "wiki: build failed"
}

if [ -d "$QUARTZ/node_modules" ] && command -v npx >/dev/null; then
  (
    build_wiki
    if command -v fswatch >/dev/null; then
      fswatch -o -l 2 "$ROOT/pd/wiki" | while read -r _; do build_wiki; done
    fi
  ) &
  trap 'kill 0' EXIT
else
  echo "wiki: pd/quartz/node_modules が無いので /wiki/ は作らない（cd pd/quartz && npm ci で入る）"
fi

python3 "$ROOT/scripts/serve.py" "$PORT"
