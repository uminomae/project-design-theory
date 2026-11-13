"""読み物の版番号（1.xxx）を git の commit の数から出す。

Love駆動開発と呼びたいもの β は、正本かテンプレートに触れた commit のたびに 0.001 上げる
（pjdhiro 2026-11-13「バージョン1.xを4桁で入れたい。コミットのたびに０.００１を上げる。
1.5を過ぎた（５００コミットで）2.𝕏を検討するようルールを設定したい」）。
心理的安全性とはも同じ決まりで数える（pjdhiro 2026-11-14「心理的安全性とはのページにもバージョン表記して。
Love駆動開発と同じルールで」）。

- 数えるのは、正本とテンプレートに触れた commit（`git rev-list --count HEAD -- <正本> <テンプレート>`）。
  生成物（reader/*.html）は数えない。生成物を数えると、生成し直すたびに数が動き、落ち着かない。
- 正本かテンプレートに commit 前の変更（index でも作業ツリーでも）があれば、次の commit の分として 1 を足す。
  生成 → check → commit の順で回すと、commit したあとの数と同じ版が出る（最終更新日と同じ考え方）。
- BASE は、版を入れた commit を数えたときの数。その commit が 1.000。
- 500 を超えたら（1.500 を過ぎたら）、2.x にするかを pjdhiro に諮る（docs/rules/decisions.md）。ページごとに数える。
  生成と check.sh が知らせる。

使い方：
  python3 pd/scripts/reader_version.py --check   生成物の版が今の数と合うかを見る（合わなければ 1）
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent  # pd/

# 生成物の名前 → (正本, テンプレート, 基点の数)
VERSIONED = {
    "love-driven-dev.html": (
        ROOT / "knowledge/research/love-driven-dev/READER-love-driven-dev.md",
        ROOT / "scripts/reader-love-driven-dev-template.html",
        220,
    ),
    # 版を入れた commit が 57 本目（それまでの 56 commit を数えれば 1.057 だった）。
    # 英語版（psychological-safety-en.html）は、英訳した日本語版の版を手で書く（数えない）
    "psychological-safety.html": (
        ROOT / "knowledge/research/psychological-safety/READER-psychological-safety.md",
        ROOT / "scripts/reader-psychological-safety-template.html",
        57,
    ),
}

ASK_AT = 500  # 1.500 を過ぎたら 2.x にするかを諮る


def _git(*args: str) -> str:
    return subprocess.run(
        ["git", *args], cwd=ROOT, capture_output=True, text=True, check=True
    ).stdout.strip()


def steps(name: str) -> int:
    """基点からの commit の数（commit 前の変更があれば、その分を足す）。"""
    src, tpl, base = VERSIONED[name]
    count = int(_git("rev-list", "--count", "HEAD", "--", str(src), str(tpl)))
    if _git("status", "--porcelain", "--", str(src), str(tpl)):
        count += 1
    return count - base


def version(name: str) -> str:
    n = steps(name)
    if n < 0:
        sys.exit(f"ERROR: {name} の commit の数が基点より少ない（{n}）。浅い clone か、古い枝")
    return f"{1 + n // 1000}.{n % 1000:03d}"


def notice(name: str) -> str | None:
    n = steps(name)
    if n >= ASK_AT:
        return (
            f"知らせ：{name} の版が {version(name)} になった（1.500 に届いた）。"
            "2.x にするかを pjdhiro に諮る（docs/rules/decisions.md の読み物の版番号の行）"
        )
    return None


def check() -> int:
    bad = 0
    for name in VERSIONED:
        out = ROOT / "reader" / name
        m = re.search(r'data-reader-version="([^"]*)"', out.read_text(encoding="utf-8"))
        want = version(name)
        have = m.group(1) if m else None
        if have != want:
            print(f"   {name}：版が {have}、今の数では {want}。cd pd && python3 scripts/build-reader-lp.py で生成し直す")
            bad = 1
        msg = notice(name)
        if msg:
            print("   " + msg)
    return bad


if __name__ == "__main__":
    if sys.argv[1:] == ["--check"]:
        sys.exit(check())
    for name in VERSIONED:
        print(name, version(name))
