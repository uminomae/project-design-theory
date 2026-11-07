#!/usr/bin/env python3
"""Claude 版スクリーナー（claude.ai アーティファクト）の HTML を生成する。

使い方: python3 scripts/build-screener-artifact.py
  入力: scripts/screener-artifact-template.html（ページ）
        knowledge/research/stages-screener/screener-data.json（帯・16問・バージョン）
  出力: knowledge/research/stages-screener/artifact/screener.html
        → Artifact ツールで https://claude.ai/artifact/VY7XMLt7g4v5PLzzmUDTu1 に再公開する
選択肢を直したら reader/ の公開ページ（scripts/build-reader-lp.py）と一緒にこれも再生成する。
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TPL = ROOT / "scripts/screener-artifact-template.html"
DATA = ROOT / "knowledge/research/stages-screener/screener-data.json"
OUT = ROOT / "knowledge/research/stages-screener/artifact/screener.html"


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    # 回答中の補足と例はまだない（pd#133）。帯・問い・バージョンだけを渡す
    payload = {
        "version": data["version"],
        "updated": data["updated"],
        "bands": data["bands"],
        "questions": [
            {"id": q["id"], "text": q["text"], "options": [{"band": o["band"], "text": o["text"]} for o in q["options"]]}
            for q in data["questions"]
        ],
    }
    page = TPL.read_text(encoding="utf-8")
    marker = "/*SCREENER_DATA*/null"
    if page.count(marker) != 1:
        raise SystemExit("ERROR: data marker not found exactly once in template")
    # </script> を閉じさせないよう < をエスケープする
    page = page.replace(marker, json.dumps(payload, ensure_ascii=False).replace("<", "\\u003c"))
    if "�" in page:
        raise SystemExit("ERROR: U+FFFD found in output")
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(page, encoding="utf-8")
    print(f"OK: {OUT.relative_to(ROOT)} ({len(page):,} bytes, version {data['version']})")


if __name__ == "__main__":
    main()
