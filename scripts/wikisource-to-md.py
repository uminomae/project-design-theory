# Wikisource の頁を、原文の段落ごとに「段の番号・誌面の頁・原文・訳の空欄」を並べた md の骨にする。
# 訳はセッションの中で Claude が埋める（pd/knowledge/translations/README.md）。
#
# 使い方：
#   curl -sL "https://en.wikisource.org/w/api.php?action=parse&format=json&prop=text&page=<題>" -o page.json
#   python3 -I scripts/wikisource-to-md.py page.json > 骨.md
#
# 誌面の頁の印（data-page-number）は、段の途中に来たら原文の中に [p.N] と置く。
import html
import json
import re
import sys

d = json.load(open(sys.argv[1]))["parse"]["text"]["*"]
d = re.sub(r"<style.*?</style>", "", d, flags=re.S)
d = re.sub(r'<span[^>]*data-page-number="(\d+)"[^>]*>.*?</span></span>', r"⟦\1⟧", d, flags=re.S)
d = re.sub(r'<sup[^>]*class="reference"[^>]*>.*?</sup>', "", d, flags=re.S)

blocks = re.findall(r"<(p|h\d|li|div class=\"[^\"]*center[^\"]*\")[^>]*>(.*?)</(?:p|h\d|li|div)>", d, flags=re.S)
first = re.search(r"⟦(\d+)⟧", d)
page = first.group(1) if first else None  # 本文の前の印は段に入らないので、最初の印を始まりの頁にする
n = 0
for _, b in blocks:
    t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", b))).strip()
    if not t or t.startswith("Public domain") or t.startswith("This work was published before"):
        continue
    marks = re.findall(r"⟦(\d+)⟧", t)
    lead = re.match(r"^⟦(\d+)⟧\s*", t)
    if lead:
        page = lead.group(1)
        t = t[lead.end():]
    start = page
    t = re.sub(r"\s*⟦(\d+)⟧\s*", lambda m: f" [p.{m.group(1)}] ", t).strip()
    if marks:
        page = marks[-1]
    n += 1
    if t.startswith("↑"):  # 脚注。誌面では段のある頁の下にあるが、どの頁かは Wikisource の形からは取れない
        print(f"### 注{n}\n\n> {t[1:].strip()}\n\n（訳）\n")
        continue
    where = f"p.{start}" if start else "p.?"
    if page and page != start:
        where += f"–{page}"
    print(f"### ¶{n}　{where}\n\n> {t}\n\n（訳）\n")
