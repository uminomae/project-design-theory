#!/usr/bin/env python3
"""READER (evidence/themes/ の MD 正本) から読み物のページ HTML を生成する。

ページの表は下の PAGES（出力 reader/{slug}.html と正本の組）。
ページごとの題・説明・見出しは、正本の front matter の page: に書き、
テンプレートの PAGE_ の差し込み口に入れる。
使い方: python3 scripts/build-reader-th.py            # PAGES の全部
        python3 scripts/build-reader-th.py --page research-history
        python3 scripts/build-reader-th.py --src PATH --out PATH   # 試し（fixture など）

READER を更新したら本スクリプトを再実行してページを追随させる。
pd の scripts/build-reader-lp.py の cs 移植（cs#259）。

デザイン制約:
- 生成ページは cs の VI を継承する（dashboard.html 方式: tokens.css + cosmic ambient。WebGL なし）
- クラス名は cs 用に新設（reader-heading / reader-card / reader-callout / reader-table）。
  pd の glow-* 体系は cs に存在しないため持ち込まない
- 色・面はテンプレート側で token 変数経由で定義する（本スクリプトは構造フックのみ付与）
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
TPL = ROOT / "scripts/reader-th-template.html"

# 出力 reader/{slug}.html → 正本
PAGES = {
    "wave-vortex": "evidence/themes/TH-001-wave-vortex-ontology/READER-wave-vortex.md",
    "research-history": "evidence/themes/TH-002-research-history/READER-research-history.md",
}
PAGE_KEYS = ["title", "description", "h1", "subtitle", "issue", "banner", "footer"]

# 信頼度バッジ: 正本 MD 内の表記をテンプレート定義のバッジ span に変換する
# 目次挿入位置マーカー（正本 MD 側に置く）と、pandoc 変換を生き延びる placeholder
TOC_MARKER = "<!--TOC-->"
TOC_PLACEHOLDER = "CSREADERTOCPLACEHOLDER9f2b"

BADGES = [
    ("実証済み [P]", "badge-p"),
    ("解釈 [M]", "badge-m"),
    ("推測 [S]", "badge-s"),
]


def convert_md(body_md: str) -> tuple[str, str]:
    """GFM → HTML。pandoc を優先し、無ければ npx marked にフォールバックする。

    戻り値: (html, 使用したコンバータ名)
    """
    try:
        r = subprocess.run(
            ["pandoc", "-f", "gfm", "-t", "html", "--wrap=none"],
            input=body_md, capture_output=True, text=True, check=True,
        )
        return r.stdout, "pandoc"
    except FileNotFoundError:
        pass  # pandoc 不在 → marked へ
    # フォールバック: npx marked --gfm（cs は marked を UI 側でも使用）
    r = subprocess.run(
        ["npx", "--yes", "marked", "--gfm"],
        input=body_md, capture_output=True, text=True,
    )
    if r.returncode != 0:
        sys.exit(f"ERROR: pandoc not found and npx marked failed:\n{r.stderr}")
    html = r.stdout
    # marked は見出しに id を付けないため、TOC 用に h2 へ id を補う
    counter = [0]

    def add_id(m: re.Match) -> str:
        counter[0] += 1
        return f'<h2 id="sec-{counter[0]}">'

    html = re.sub(r"<h2>", add_id, html)
    return html, "npx marked (fallback)"


def main() -> None:
    ap = argparse.ArgumentParser(description="READER MD から読み物の HTML を生成する")
    ap.add_argument("--page", choices=sorted(PAGES), help="PAGES の一つだけを作る")
    ap.add_argument("--src", type=Path, help="正本 MD のパス（試し用。--out と組む）")
    ap.add_argument("--out", type=Path, help="出力 HTML のパス（試し用）")
    args = ap.parse_args()
    if args.src or args.out:
        if not (args.src and args.out):
            sys.exit("ERROR: --src と --out は組で使う")
        build(args.src, args.out)
        return
    for slug in [args.page] if args.page else PAGES:
        build(ROOT / PAGES[slug], ROOT / "reader" / f"{slug}.html")


def page_fields(fm_text: str, src: Path, out: Path) -> dict:
    """front matter の page: から差し込む値を取る。"""
    fm = yaml.safe_load(fm_text) or {}
    page = fm.get("page") or {}
    missing = [k for k in PAGE_KEYS if k not in page]
    if missing:
        sys.exit(f"ERROR: front matter の page: に {missing} が無い: {src}")
    try:
        rel = src.resolve().relative_to(ROOT).as_posix()
    except ValueError:
        rel = src.as_posix()
    noindex = bool(page.get("noindex"))
    return {
        "TITLE": str(page["title"]),
        "SLUG": out.stem,
        "DESCRIPTION": str(page["description"]),
        "HEAD_EXTRA": '<meta name="robots" content="noindex">' if noindex else "",
        "H1": str(page["h1"]),
        "SUBTITLE": str(page["subtitle"]),
        "SRC": rel,
        "ISSUE": str(page["issue"]),
        "BANNER": "\n".join("    " + line for line in str(page["banner"]).splitlines()),
        "FOOTER": "    " + str(page["footer"]).strip(),
    }


def fill_template(tpl: str, fields: dict) -> str:
    # 差し込みが空の行（noindex でない頭の行）は、行ごと消す
    for key, val in fields.items():
        mark = f"<!--PAGE_{key}-->"
        if val == "":
            tpl = tpl.replace(mark + "\n", "")
        tpl = tpl.replace(mark, val)
    # 行まるごとの差し込み（BANNER・FOOTER）は、字下げ込みで入れてある
    left = re.findall(r"<!--PAGE_[A-Z_]+-->", tpl)
    if left:
        sys.exit(f"ERROR: 埋まっていない差し込み口: {left}")
    return tpl


def build(src: Path, out: Path) -> None:
    if not src.exists():
        sys.exit(f"ERROR: source MD not found: {src}")

    md = src.read_text(encoding="utf-8")

    # front matter を剥がす
    m = re.match(r"^---\n(.*?)\n---\n", md, re.S)
    body_md = md[m.end():] if m else md
    fields = page_fields(m.group(1) if m else "", src, out)

    # <!--TOC--> マーカーは HTML コメントのため pandoc (gfm) が
    # &lt;!--TOC--&gt; にエスケープしてしまう。変換前にプレーンテキストの
    # プレースホルダへ差し替えて変換を生き延びさせ、変換後に目次と置換する。
    if TOC_MARKER not in body_md:
        sys.exit("ERROR: <!--TOC--> marker not found in source MD")
    body_md = body_md.replace(TOC_MARKER, TOC_PLACEHOLDER, 1)

    # 最終更新日は正本の git 履歴から取る（未追跡ファイル＝fixture 等は unknown）
    try:
        updated = subprocess.run(
            ["git", "log", "-1", "--format=%ad", "--date=format:%Y-%m-%d", "--", str(src)],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.strip() or "unknown"
    except subprocess.CalledProcessError:
        updated = "unknown"

    # GFM → HTML
    html, converter = convert_md(body_md)
    print(f"[converter] {converter}")

    # 先頭 H1 はテンプレートの hero と重複するため除去
    html = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", html, count=1)

    # 見出しクラス付与（cs 用に reader-heading を新設。pd の glow-heading は使わない）
    html = re.sub(
        r"<h([23])( |>)",
        lambda mm: f'<h{mm.group(1)} class="reader-heading"' + (" " if mm.group(2) == " " else ">"),
        html,
    )
    # 表・引用はカードパネル（reader-card）に載せる。色はテンプレート側 token 変数で定義
    html = re.sub(r"(<table\b.*?</table>)", r'<div class="reader-card reader-table">\1</div>', html, flags=re.S)
    html = html.replace("<blockquote>", '<blockquote class="reader-card reader-callout">')

    # 信頼度バッジ: 「実証済み [P]」等の表記をバッジ span に変換
    for text, cls in BADGES:
        html = html.replace(text, f'<span class="{cls}">{text}</span>')

    # 目次: 本文の h2（章）から生成し、正本 MD の <!--TOC--> 位置に挿す
    toc_items = []
    for hid, text in re.findall(r'<h2[^>]*\bid="([^"]+)"[^>]*>(.*?)</h2>', html, flags=re.S):
        label = re.sub(r"<[^>]+>", "", text).strip()
        toc_items.append(f'<li><a href="#{hid}">{label}</a></li>')
    toc_html = (
        '<nav class="reader-toc reader-card" aria-label="目次">'
        '<p class="reader-toc-title">目次</p>'
        "<ol>" + "".join(toc_items) + "</ol></nav>"
    )
    ph = re.compile(r"<p>\s*" + TOC_PLACEHOLDER + r"\s*</p>|" + TOC_PLACEHOLDER)
    if not ph.search(html):
        sys.exit("ERROR: <!--TOC--> marker (placeholder) not found in generated body")
    html = ph.sub(lambda _: toc_html, html, count=1)

    page = fill_template(TPL.read_text(encoding="utf-8"), fields).replace("<!--BODY-->", html)
    # 中身が日付の所しか違わなければ、今の日付を保って書き換えない（pd の build-reader-lp.py と同じ）。
    # 日付は正本のコミット日なので、repo の引っ越しのような中身の変わらないコミットでも進んでしまう
    kept = kept_date(out, page)
    if kept:
        page = page.replace("<!--UPDATED-->", kept)
        if page == out.read_text(encoding="utf-8"):
            print(f"SAME: {out} (updated {kept} のまま)")
            return
        print(f"注記だけ違う: {out} を書き直す（updated {kept} のまま）")
    else:
        page = page.replace("<!--UPDATED-->", updated)

    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(page, encoding="utf-8")

    # UTF-8 置換文字（U+FFFD）検査
    if "�" in page:
        sys.exit("ERROR: U+FFFD found in output")
    try:
        shown = out.resolve().relative_to(ROOT)
    except ValueError:
        shown = out
    print(f"OK: {shown} ({len(page.encode('utf-8')):,} bytes, updated {kept or updated}, converter: {converter})")


HEAD_NOTE = re.compile(r"\A<!DOCTYPE html>\n<!--.*?-->\n", re.S)


def kept_date(out, page):
    """日付の所と頭の注記（テンプレートの説明）を除いて out と page が同じなら、out の日付を返す。違えば None。

    頭の注記は読者に見えない作り方の説明なので、そこだけが変わっても中身は変わっていない（stance 2-6）。
    """
    if not out.exists():
        return None
    page = HEAD_NOTE.sub("", page, count=1)
    parts = page.split("<!--UPDATED-->")
    pattern = (
        re.escape(parts[0])
        + r"(?P<d>\d{4}-\d{2}-\d{2}|unknown)"
        + r"(?P=d)".join(re.escape(p) for p in parts[1:])
    )
    m = re.fullmatch(pattern, HEAD_NOTE.sub("", out.read_text(encoding="utf-8"), count=1), re.S)
    # 正本が commit 前だった（unknown）ときは保たない。commit のあとに作り直せば日付が入る
    return m.group("d") if m and m.group("d") != "unknown" else None


if __name__ == "__main__":
    main()
