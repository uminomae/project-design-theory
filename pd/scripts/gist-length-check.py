# -*- coding: utf-8 -*-
"""読み物の「ざっくりいうと」が、一段落 140 字まで・三段落まで（例外として五段落まで）に収まっているかを数える。

止めずに知らせるだけ（writing.md §5-16・pjdhiro 2026-11-27「１４０文字で５パラグラフまで」「３パラグラフまでにしたい。例外的に５まで許容」）。
超えたページ（140 字・五段落）を数え、一覧では、四・五段落の例外も別に挙げる。
字数は、タグを外し、空白を除いた文字の数。引用の枠（blockquote）も一つの段落に数える。

  python3 -I pd/scripts/gist-length-check.py          # 超えているページの一覧
  python3 -I pd/scripts/gist-length-check.py --count  # 超えているページの数だけ
"""
import glob
import html
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "reader")
MAX_CHARS = 140
MAX_PARAS = 5
USUAL_PARAS = 3


def gist_lengths(text):
    m = re.search(r'<span class="reader-lead__label">ざっくりいうと</span>(.*?)</div>', text, flags=re.S)
    if not m:
        return None
    blocks = re.findall(r"<(?:p|blockquote)\b.*?</(?:p|blockquote)>", m.group(1), flags=re.S)
    out = []
    for b in blocks:
        t = html.unescape(re.sub(r"<[^>]+>", "", b))
        out.append(len(re.sub(r"\s", "", t)))
    return out


def main():
    over = []
    exceptions = []
    for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
        lens = gist_lengths(open(f, encoding="utf-8").read())
        if lens is None:
            continue
        if len(lens) > MAX_PARAS or any(n > MAX_CHARS for n in lens):
            over.append((os.path.basename(f), lens))
        elif len(lens) > USUAL_PARAS:
            exceptions.append((os.path.basename(f), lens))
    if "--count" in sys.argv:
        print(f"{len(over)} ページ")
        return
    for name, lens in over:
        print(f"{name}: {len(lens)} 段落 {lens}")
    if not over:
        print("どのページも収まっている")
    for name, lens in exceptions:
        print(f"例外（四・五段落）：{name}: {len(lens)} 段落 {lens}")


if __name__ == "__main__":
    main()
