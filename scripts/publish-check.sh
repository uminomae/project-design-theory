#!/usr/bin/env bash
# 公開してよいかの点検。docs/PUBLISH-CHECK.md の機械の部分。
#
#   scripts/publish-check.sh           commit しようとしている内容（staged）を点検する
#   scripts/publish-check.sh --all     repo にあるファイルすべてを点検する
#
# 見つかったら一覧を出して 1 で終わる。pre-commit と .github/workflows/check.yml から呼ばれる。
# 中身は scripts/publish-check.mjs（書庫の中の名前と、通す一覧を扱うために node で書いた。2026-11-10・#111）。
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "$here/publish-check.mjs" "$@"
