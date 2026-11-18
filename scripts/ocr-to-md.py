# Internet Archive の OCR の文字（`<id>_djvu.txt`。JSTOR Early Journal Content ほか）を、
# 段落ごとに「段の番号・誌面の頁・原文・訳の空欄」を並べた md の骨にする。
# Wikisource に文字起こしが無い論文に使う（あるときは scripts/wikisource-to-md.py）。
# 訳はセッションの中で Claude が埋める（pd/knowledge/translations/README.md）。
#
# 使い方：
#   python3 -I scripts/ocr-to-md.py ocr.txt 最初の頁 [柱の語 …] > 骨.md 2> つないだ語.txt
#   柱の語：頁の頭の柱（"THE MONIST." や論文の短い題）に含まれる語。柱の行を落とし、頁の印にする。
#
# OCR は斜体・記号の付いた字・式を落とすので、骨は必ず誌面の画像と照らして直す。
# 行末のハイフンでつないだ語は、標準エラーに並べる（誌面の行の中のハイフンだったものを画像で拾い直すため）。
# 頁をまたぐ段は、前の頁の段が文の終わり（. ? ! : ”）で終わっていなければ、続きとしてつなぐ。
# 終わっていれば新しい段にする（誌面で段の途中に頁が変わり、ちょうど文が終わる所は誤って分かれる。画像で直す）。
import re
import sys

text = open(sys.argv[1], encoding="utf-8").read()
page = int(sys.argv[2])
heads = [h.upper() for h in sys.argv[3:]] or ["THE MONIST"]

# JSTOR の前書き（STOP〜利用の案内）を落とす
m = re.search(r"journal-content \.\s*\n", text)
if m:
    text = text[m.end():]

paras = []  # [頁, 文]
cur = None
blocks = re.split(r"\n\s*\n", text)
for b in blocks:
    lines = [l.strip() for l in b.split("\n") if l.strip()]
    if not lines:
        continue
    if len(lines) == 1 and re.match(r"^(\d+\s+)?[A-Z][A-Z'’ .,\-]+\.?(\s+\d+)?$", lines[0]) and any(h in lines[0] for h in heads):
        num = re.search(r"\d+", lines[0])
        page = int(num.group()) if num else page + 1
        if cur is not None:
            cur[1] += f" [p.{page}]"
        continue
    s = ""
    for l in lines:
        if s.endswith("-") and l[:1].islower():
            w1 = re.search(r"(\S+)-$", s).group(1)
            w2 = l.split()[0]
            print(f"{w1}-{w2}", file=sys.stderr)
            s = s[:-1] + l
        elif s:
            s += " " + l
        else:
            s = l
    if cur is not None and cur[1].endswith("]") and not re.search(r"[.?!:”\"]\s*\[p\.\d+\]$", cur[1]):
        cur[1] += " " + s
        continue
    if cur is not None and cur[1].endswith("]"):
        # 頁の印は、新しい段の頭へ移す
        cur[1] = re.sub(r"\s*\[p\.(\d+)\]$", "", cur[1])
    cur = [page, s]
    paras.append(cur)

for i, (p, s) in enumerate(paras, 1):
    pages = [int(x) for x in re.findall(r"\[p\.(\d+)\]", s)]
    where = f"p.{p}" + (f"–{pages[-1]}" if pages else "")
    print(f"### ¶{i}　{where}\n\n> {s}\n\n（訳）\n")
