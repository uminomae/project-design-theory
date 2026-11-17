#!/usr/bin/env python3
"""付箋帳・違和感帳の一件に、thread の行を足す update の JSON を作る。

時刻は、この道具が今の UTC で入れる（手で書かない。型 K の K3・corrections-k.md の「繰り返し」）。
thread は丸ごと置き換わるので、読んだ一件の thread の全部に足した並びを書く。

使い方:
  1. ArtifactData の get（または query）に out_dir を付けて、一件を JSON に保存する。
  2. python3 scripts/fusen-thread.py <保存した一件.json> <書き出す.json> \
       --comment "返事" [--status done --from-label 直している --to-label 済んだ] \
       [--commit abc1234 ...] [--session 名前]
  3. ArtifactData の update に、file_path で <書き出す.json> を、if_version に一件の version を渡す。
"""
import argparse
import json
import sys
from datetime import datetime, timezone

LABELS = {"new": "届いた", "look": "見ている", "decide": "判断を待つ",
          "work": "直している", "check": "確かめを待つ", "done": "済んだ"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("out")
    ap.add_argument("--comment", action="append", default=[], help="from claude の comment の行（何度でも）")
    ap.add_argument("--status", choices=list(LABELS), help="動かす先の status。status の行も足す")
    ap.add_argument("--commit", action="append", default=[], help="commits に足す番号")
    ap.add_argument("--session")
    a = ap.parse_args()

    doc = json.load(open(a.src, encoding="utf-8"))
    # out_dir で保存した一件は中身だけ（版は ArtifactData の出力に出る）。{"data":…,"version":…} の形も読む
    item = doc["data"] if isinstance(doc.get("data"), dict) and "thread" in doc["data"] else doc
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")

    thread = list(item.get("thread") or [])
    for text in a.comment:
        thread.append({"at": now, "from": "claude", "kind": "comment", "text": text})
    upd = {"lastFrom": "claude", "lastAt": now, "updatedAt": now, "claudeReadAt": now}
    if a.status:
        before = LABELS.get(item.get("status"), item.get("status"))
        thread.append({"at": now, "from": "claude", "kind": "status",
                       "text": f"{before} → {LABELS[a.status]}"})
        upd["status"] = a.status
    if a.commit:
        upd["commits"] = list(item.get("commits") or []) + [c for c in a.commit if c not in (item.get("commits") or [])]
    if a.session:
        upd["session"] = a.session
    if len(thread) == len(item.get("thread") or []) and not a.status:
        sys.exit("足す行がありません（--comment か --status を渡す）")
    upd["thread"] = thread
    json.dump(upd, open(a.out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"書いた：{a.out}（thread {len(item.get('thread') or [])} → {len(thread)} 行・時刻 {now}）。if_version には、保存したときに出た version を渡す")


if __name__ == "__main__":
    main()
