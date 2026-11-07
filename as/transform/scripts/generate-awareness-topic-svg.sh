#!/usr/bin/env bash
set -euo pipefail

ROOT="as"

python3 "$ROOT/transform/scripts/generate-awareness-topic-svg.py" "$@"
