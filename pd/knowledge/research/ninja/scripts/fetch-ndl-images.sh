#!/bin/bash
# NDL デジタルコレクション 画像取得スクリプト
# IIIF API から指定 PID の画像を一括取得する
#
# Usage:
#   bash fetch-ndl-images.sh <PID> <frame_count> <output_dir>
#   bash fetch-ndl-images.sh 12865777 54 images/vol1

set -euo pipefail

PID="${1:?Usage: fetch-ndl-images.sh <PID> <frame_count> <output_dir>}"
COUNT="${2:?}"
DIR="${3:?}"

mkdir -p "$DIR"

echo "=== NDL IIIF fetch: PID=${PID}, ${COUNT} frames → ${DIR} ==="

for i in $(seq 1 "$COUNT"); do
  NUM=$(printf "R%07d" "$i")
  OUTFILE="${DIR}/${NUM}.jpg"

  if [ -f "$OUTFILE" ] && [ -s "$OUTFILE" ]; then
    echo "  skip: ${NUM}.jpg (exists)"
    continue
  fi

  URL="https://dl.ndl.go.jp/api/iiif/${PID}/${NUM}/full/full/0/default.jpg"
  echo "  fetch: ${NUM}.jpg"
  curl -sS -L -o "$OUTFILE" "$URL"

  # 0B チェック（リダイレクト失敗対策）
  if [ ! -s "$OUTFILE" ]; then
    echo "  WARN: ${NUM}.jpg is 0 bytes, retrying..."
    rm -f "$OUTFILE"
    sleep 1
    curl -sS -L -o "$OUTFILE" "$URL"
  fi

  sleep 0.5
done

echo "=== done: ${DIR} (${COUNT} frames) ==="
