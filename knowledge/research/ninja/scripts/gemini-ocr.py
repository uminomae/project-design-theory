#!/usr/bin/env python3
"""
古典籍 Gemini OCR スクリプト
くずし字画像 → 翻刻テキスト

creation-space パターン準拠: curl + base64 inline で Gemini API を叩く
"""

import sys
import os
import json
import time
import base64
import subprocess
from pathlib import Path

API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
RATE_LIMIT_SEC = 4

PROMPT = """あなたは日本の古典籍（くずし字・変体仮名）の専門的な翻刻者です。

この画像は江戸時代の写本の1ページです。

以下の作業を行ってください:

1. **翻刻**: 画像に書かれている文字を、できるだけ正確に現代の漢字・ひらがなに翻刻してください。
   - 右ページと左ページを区別してください（見開きの場合）
   - 行ごとに改行してください（右から左の順）
   - 読めない文字は ■ としてください
   - 変体仮名は現代のひらがなに置き換えてください
   - 漢文体の部分はそのまま漢字で記述してください
   - 句読点は原文になくても適宜補ってください

2. **備考**: 判読に迷った箇所、異体字、虫損・汚損の有無を簡潔にメモしてください。

3. **内容要約**: このページの内容を1-2文で要約してください。

出力形式:
## 右ページ
（翻刻テキスト）

## 左ページ
（翻刻テキスト）

## 備考
（判読メモ）

## 要約
（内容の要約）
"""


def ocr_image(image_path):
    """1枚の画像を Gemini API で OCR する (curl + base64)"""
    img_bytes = Path(image_path).read_bytes()
    b64 = base64.b64encode(img_bytes).decode("utf-8")

    payload = {
        "contents": [{
            "parts": [
                {"text": PROMPT},
                {
                    "inline_data": {
                        "mime_type": "image/jpeg",
                        "data": b64
                    }
                }
            ]
        }],
        "generationConfig": {
            "maxOutputTokens": 8192,
            "temperature": 0.1
        }
    }

    payload_json = json.dumps(payload)
    result = subprocess.run(
        [
            "curl", "-sS", "-X", "POST",
            f"{API_URL}?key={API_KEY}",
            "-H", "Content-Type: application/json",
            "-d", "@-",
            "--max-time", "120"
        ],
        input=payload_json,
        capture_output=True, text=True, timeout=150
    )

    if result.returncode != 0:
        raise RuntimeError(f"curl failed: {result.stderr}")

    resp = json.loads(result.stdout)

    if "error" in resp:
        raise RuntimeError(f"API error: {resp['error'].get('message', resp['error'])}")

    candidates = resp.get("candidates", [])
    if not candidates:
        raise RuntimeError(f"No candidates in response")

    parts = candidates[0].get("content", {}).get("parts", [])
    return "".join(p.get("text", "") for p in parts)


def process_volume(image_dir, output_path, start=1, end=None):
    """指定ディレクトリの画像を順次 OCR し、結果をファイルに出力する"""
    image_dir = Path(image_dir)
    images = sorted(image_dir.glob("R*.jpg"))

    if end:
        images = [img for img in images if start <= int(img.stem[1:]) <= end]
    else:
        images = [img for img in images if int(img.stem[1:]) >= start]

    print(f"Target: {len(images)} frames ({image_dir})", file=sys.stderr)
    print(f"Model: {MODEL}", file=sys.stderr)

    output = Path(output_path)
    output.parent.mkdir(parents=True, exist_ok=True)

    # 増分書き込み: 1フレームごとに追記
    for i, img_path in enumerate(images):
        frame = img_path.stem
        print(f"[{i+1}/{len(images)}] {frame}...", file=sys.stderr, end=" ")

        try:
            text = ocr_image(img_path)
            entry = f"# {frame}\n\n{text}\n\n---\n\n"
            print("done", file=sys.stderr)
        except Exception as e:
            entry = f"# {frame}\n\nERROR: {e}\n\n---\n\n"
            print(f"ERROR: {e}", file=sys.stderr)

        with open(output, "a", encoding="utf-8") as f:
            f.write(entry)

        if i < len(images) - 1:
            time.sleep(RATE_LIMIT_SEC)

    print(f"\nComplete: {output} ({len(images)} frames)", file=sys.stderr)


if __name__ == "__main__":
    if not API_KEY:
        print("Error: GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    if len(sys.argv) < 3:
        print("Usage: python gemini-ocr.py <image_dir> <output_file> [start] [end]")
        print("  env: GEMINI_API_KEY (required)")
        print("  env: GEMINI_MODEL  (default: gemini-2.5-flash)")
        print("Example: python gemini-ocr.py images/vol1 output.md 3 54")
        sys.exit(1)

    image_dir = sys.argv[1]
    output_file = sys.argv[2]
    start = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    end = int(sys.argv[4]) if len(sys.argv) > 4 else None

    process_volume(image_dir, output_file, start, end)
