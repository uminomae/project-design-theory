#!/usr/bin/env bash
# セッションの記録（本体の .cache/session/log-YYYYMMDD-*.md）の要点を出す。
# 作業を始める前に読む（CLAUDE.md「セッションの記録」）。全文は、関わる記録だけを開く。
#
# 使い方:
#   bash scripts/session-digest.sh                 その日と前の日の記録の、題と「## 要点」の頭の数行だけ
#   bash scripts/session-digest.sh 20261109        その日付の記録（名前の日付か、更新した日）
#   bash scripts/session-digest.sh cs-review       名前か題にその語を含む記録の、要点・ずれ・残したこと・commit の節
#   bash scripts/session-digest.sh --full          選んだ記録の全部について、上の節を切らずに（大きい）
#   bash scripts/session-digest.sh --list          題だけの一覧
# 中身は scripts/session-digest.mjs（文字で切るために node で書いた）。
set -euo pipefail
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "$here/session-digest.mjs" "$@"
