#!/usr/bin/env python3
"""毎回読む「芯」を、正本の規約から機械で作る。

  python3 -I scripts/rules-core.py          # 作り直す
  python3 -I scripts/rules-core.py --check  # 芯が正本と食い違っていたら 1 で終わる（scripts/check.sh から）

- docs/rules/stance.md      → docs/rules/stance-core.md
    見出しと、各項目の頭の一文（上の段の「- 」の行）だけを並べる。日付・発言の出所の括弧は外す。
    言葉は変えない。下の段の補いは載せず、件数を「〔補い n〕」で示す。
- docs/rules/corrections.md → docs/rules/corrections-core.md
    型の表の「型・やりがちなこと・pjdhiro の構え」の三列だけを並べる。「書く前の確認」は正本で読む。

正本だけを直し、芯は手で直さない。経緯：付箋帳 i20261118130216b6l（pjdhiro 2026-11-19「毎回のセッションで
読み込まれるルール群を軽くして」「読みにいく場合のハードルは下げて、トークン節約だけを優先することのないようにして」）。
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RULES = ROOT / "docs" / "rules"

# 日付か対話録を含む全角の括弧。内側から外していく。
SRC = re.compile(r"（[^（）]*?(?:20\d\d|対話録)[^（）]*?）")


def strip_sources(s: str) -> str:
    prev = None
    while prev != s:
        prev = s
        s = SRC.sub("", s)
    return s.rstrip()


STANCE_HEAD = """# pjdhiro の見方と判断の仕方（芯）

<!-- scripts/rules-core.py が docs/rules/stance.md から作る。ここは手で直さない。直すのは stance.md。 -->

目次（毎回読むのは `stance.md` の全文。2026-11-19 に戻した）。`stance.md` の見出しと各項目の頭の一文を、日付と発言の出所の括弧を外して並べた。言葉は変えていない。この repo の目標は、ここを読めば LLM が pjdhiro と同じように判断できること。

**詳細を開くのをためらわない。** 芯は入口で、判断の材料の多くは `stance.md` の補い（各項目の下の段の行。決めた見方の条件・例外・続き）にある。項目の末尾の「〔補い n〕」は、その下に補いが n 件あるしるし。いまの作業に少しでも関わりそうな節は、`stance.md` のその節を開いて読む。判断を仰ぐ前・案を出す前・公開文を書く前・pjdhiro の言葉の読みに迷ったときは、関わる節を必ず開く。トークンの節約を、判断の精度より先にしない（pjdhiro 2026-11-19）。
"""

CORR_HEAD = """# Claude が繰り返す誤りの型（芯）

<!-- scripts/rules-core.py が docs/rules/corrections.md から作る。ここは手で直さない。直すのは corrections.md。 -->

目次（毎回読むのは `corrections.md` の全文。2026-11-19 に戻した）。`corrections.md` の型の表から、型・やりがちなこと・pjdhiro の構えの三列だけを並べた。自分の案がどの型に当たるかを見る。

**当たりそうな型は、`corrections.md` のその行の「書く前の確認」を開いて読む。** 案を出す前・公開文を書く前・手を動かす作業の前は、当たりうる型の行を全部読む。迷ったら開く。トークンの節約を、確かめより先にしない（pjdhiro 2026-11-19）。繰り返しの決まりと表も `corrections.md` にある。
"""


def stance_core() -> str:
    lines = (RULES / "stance.md").read_text(encoding="utf-8").split("\n")
    start = next(i for i, l in enumerate(lines) if l.startswith("## "))
    body = lines[start:]
    out = []
    i = 0
    while i < len(body):
        l = body[i]
        if l.startswith("- "):
            n = 0
            j = i + 1
            while j < len(body) and body[j].startswith("  "):
                if body[j].lstrip().startswith("- "):
                    n += 1
                j += 1
            t = strip_sources(l)
            if n:
                t += f"〔補い {n}〕"
            out.append(t)
            i = j
            continue
        if l.startswith("  "):
            i += 1
            continue
        out.append(strip_sources(l) if l.strip() else "")
        i += 1
    text = "\n".join(out)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return STANCE_HEAD + "\n" + text + "\n"


def corrections_core() -> str:
    lines = (RULES / "corrections.md").read_text(encoding="utf-8").split("\n")
    rows = ["| 型 | Claude がやりがちなこと | pjdhiro の構え |", "|---|---|---|"]
    for l in lines:
        if not l.startswith("| ") or l.startswith("| 型 |"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 4:
            continue
        rows.append("| " + " | ".join(strip_sources(c) for c in cells[:3]) + " |")
    return CORR_HEAD + "\n" + "\n".join(rows) + "\n"


TARGETS = [
    (RULES / "stance-core.md", stance_core),
    (RULES / "corrections-core.md", corrections_core),
]


def main() -> int:
    check = "--check" in sys.argv[1:]
    bad = 0
    for path, make in TARGETS:
        want = make()
        have = path.read_text(encoding="utf-8") if path.exists() else None
        rel = path.relative_to(ROOT)
        if have == want:
            continue
        if check:
            print(f"{rel} が正本と食い違っている。python3 -I scripts/rules-core.py で作り直す")
            bad = 1
        else:
            path.write_text(want, encoding="utf-8")
            print(f"作り直した：{rel}（{len(want)} 字）")
    return bad


if __name__ == "__main__":
    sys.exit(main())
