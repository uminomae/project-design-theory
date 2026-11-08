#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_SCRIPT="${SCRIPT_DIR}/articles-en-semi-auto.mjs"

MODE="${1:-routine}"
if [[ "${MODE}" == "check" || "${MODE}" == "sync" || "${MODE}" == "routine" ]]; then
  shift || true
else
  MODE="routine"
fi

ARGS=(--mode "${MODE}")

if [[ "${MODE}" == "routine" ]]; then
  # 通知先の Issue は既定で決めない（今までの kesson-space#107 は移した先で番号が違う）。
  # 通知するときは --issue <番号> を足す。
  :
fi

exec node "${NODE_SCRIPT}" "${ARGS[@]}" "$@"
