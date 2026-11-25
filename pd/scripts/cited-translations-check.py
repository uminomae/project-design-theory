#!/usr/bin/env python3
"""「進化的な愛」の対訳の冒頭の一覧「引いている文献の訳」が、訳の本文のリンクとずれていないかを見る。

一覧は手で書く（題の言い方を選ぶため）。手で書くので、#175 で訳を足したセッションが本文からだけリンクして、
一覧に足し忘れることがあった（2026-11-25・付箋 i20261125055644z8c。済んだ 25 本のうち 15 本が一覧に無かった）。
この検査は、次の三つが同じ訳のページを、同じ順で指しているかを見る。

1. 訳の本文（peirce-1893-evolutionary-love.md）の段と注からの `*-ja.html` へのリンク。
   注の中のリンクは、その注の印（「注N」）がある段に置く。
2. 訳のページの正本（pd/knowledge/translations/READER-*-ja.md）のうち、「進化的な愛」の対訳へ戻るリンクを持つもの。
3. 冒頭の一覧（READER-peirce-evolutionary-love-ja.md の id="cited-translations" の <ul>）。
   並びは、本文で初めて出る段の順（同じ段の中は出てくる順）。各行の ¶ の印は、その行の訳が初めて出る段。

  python3 -I pd/scripts/cited-translations-check.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TR = ROOT / "pd/knowledge/translations"
BODY = TR / "peirce-1893-evolutionary-love.md"
LIST = TR / "READER-peirce-evolutionary-love-ja.md"
SELF = "peirce-evolutionary-love-ja.html"
LINK = re.compile(r"\]\(([a-z0-9-]+-ja\.html)(?:#[^)]*)?\)")


def body_order():
    """本文で初めて出る順の [(page, para)]。"""
    sections = []  # (kind, num, lines)
    for line in BODY.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^### (¶|注)(\d+)", line)
        if m:
            sections.append((m.group(1), int(m.group(2)), []))
        elif sections:
            sections[-1][2].append(line)
    # 注の印がある段
    note_para = {}
    for kind, num, lines in sections:
        if kind != "¶":
            continue
        text = "\n".join(l for l in lines if not l.startswith(">"))
        for n in re.findall(r"注(\d+)", text):
            note_para.setdefault(int(n), num)
    hits = []  # (para, order, page)
    for i, (kind, num, lines) in enumerate(sections):
        if kind == "¶":
            para, base = num, (num, 0, i)
        else:
            if num not in note_para:
                print(f"   注{num} の印がどの段にも見つからない")
                return None
            para, base = note_para[num], (note_para[num], 1, i)
        for j, line in enumerate(lines):
            for k, m in enumerate(LINK.finditer(line)):
                if m.group(1) != SELF:
                    hits.append((base + (j, k), para, m.group(1)))
    hits.sort()
    seen, out = set(), []
    for _, para, page in hits:
        if page not in seen:
            seen.add(page)
            out.append((page, para))
    return out


def list_items():
    text = LIST.read_text(encoding="utf-8")
    m = re.search(r'id="cited-translations".*?<ul[^>]*>(.*?)</ul>', text, re.S)
    if not m:
        print("   一覧（id=\"cited-translations\"）が見つからない")
        return None
    out = []
    for li in re.findall(r"<li>(.*?)</li>", m.group(1), re.S):
        a = re.match(r'\s*<a href="#p(\d+)">', li)
        para = int(a.group(1)) if a else None
        for page in re.findall(r'href="([a-z0-9-]+-ja\.html)"', li):
            out.append((page, para))
    return out


def backlinked():
    out = set()
    for f in TR.glob("READER-*-ja.md"):
        if f == LIST:
            continue
        if SELF in f.read_text(encoding="utf-8"):
            out.add(f.name[len("READER-"):-len(".md")] + ".html")
    return out


def main():
    body, lst = body_order(), list_items()
    if body is None or lst is None:
        return 1
    bad = 0
    body_pages = [p for p, _ in body]
    list_pages = [p for p, _ in lst]
    back = backlinked()
    for p in sorted(back - set(body_pages)):
        print(f"   {p}：「進化的な愛」へ戻るリンクがあるのに、訳の本文からリンクしていない")
        bad += 1
    for p in sorted(set(body_pages) - back):
        print(f"   {p}：訳の本文からリンクしているのに、そのページから「進化的な愛」へ戻るリンクが無い")
        bad += 1
    for p in body_pages:
        if p not in list_pages:
            print(f"   {p}：訳の本文からリンクしているのに、冒頭の一覧「引いている文献の訳」に無い")
            bad += 1
    for p in list_pages:
        if p not in body_pages:
            print(f"   {p}：冒頭の一覧にあるのに、訳の本文からリンクしていない")
            bad += 1
    if len(set(list_pages)) != len(list_pages):
        print("   冒頭の一覧に同じページが二度ある")
        bad += 1
    if not bad:
        if list_pages != body_pages:
            print("   冒頭の一覧の並びが、本文で初めて出る順と違う。本文の順：")
            for p, para in body:
                print(f"     ¶{para} {p}")
            bad += 1
        first = dict(body)
        for p, para in lst:
            if para != first[p]:
                print(f"   {p}：一覧の行の印が ¶{para}、本文で初めて出るのは ¶{first[p]}")
                bad += 1
    if not bad:
        print(f"   {len(body_pages)} 本がそろっている")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
