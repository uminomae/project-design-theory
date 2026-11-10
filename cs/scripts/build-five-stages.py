#!/usr/bin/env python3
"""創造の5段階の「現在の定義」のページを、正本の md から生成する（日英）。

正本（日本語）: knowledge/schema/five-stages.md
英語の写し:     knowledge/schema/five-stages.en.md
出力:           reader/five-stages.html ・ reader/five-stages-en.html
テンプレート:   scripts/five-stages-template.html

使い方:
  python3 scripts/build-five-stages.py          # 生成する
  python3 scripts/build-five-stages.py --check  # 生成物と英語の写しが正本に追いついているかを見る（書き換えない）

日本語の本文は、正本から次だけを抜き出して作る（手で直さない）:
  - 「5段階一覧」の表と、その下の段落（図の版に触れる文は除く）
  - 「第 1 層」の五つの段（一文と補い）と「五つ全体に添える文」。材料にした言葉の一覧は載せない
  - 「第 2 層」の最初の段落と、段ごとの候補（「照合した出典ノートから」の手前まで）
  - 「版の記録」の表
英語の写しは、この抜き出しを訳したもの。頭の `<!-- ja-source-sha: … -->` に、訳したときの抜き出しのハッシュを持つ。
正本が変わってハッシュが合わなくなると、英語のページは生成せずに止まる（--check でも止まる）。
そのときは英語の写しを訳し直し、表示されたハッシュに書き換える。
"""
import argparse
import hashlib
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC_JA = ROOT / "knowledge/schema/five-stages.md"
SRC_EN = ROOT / "knowledge/schema/five-stages.en.md"
TPL = ROOT / "scripts/five-stages-template.html"
OUT = {"ja": ROOT / "reader/five-stages.html", "en": ROOT / "reader/five-stages-en.html"}

# ページの地の文（正本に無い、ページの枠の文）。本文の中の <!--L1-INTRO--> などをここで置き換える
CHROME = {
    "ja": {
        "lang": "ja",
        "title": "創造の5段階 — 現在の定義",
        "page_title": "創造の5段階 — 現在の定義 | 創造とは",
        "description": "創造の5段階（場・波・縁・渦・束）の今の定義。pjdhiro の体感から書いた暫定の定義と、ほかの論ではこう言うケースもある、という論じる候補の二つの層で書く。",
        "lead": [
            "創造の5段階（場・波・縁・渦・束）の、今の定義です。定義は暫定で、二つの層で書いています。",
            "第 1 層は、pjdhiro の体感から書いた定義です。第 2 層は、ほかの論ではこう言うケースもある、という特徴で、30 の分野の調べで報告されたものです。第 2 層の特徴を一つずつ論じ、第 1 層に組み込んで補強していきます。組み込んだときは、末尾の版の記録に書き足します。",
        ],
        "toc": "目次",
        "updated": "最終更新",
        "other_lang": '<a href="./five-stages-en.html" hreflang="en" lang="en">English</a>',
        "home": '<a href="../index.html">創造とは</a>',
        "source": "正本 (GitHub)",
        "L1-INTRO": "この層は、pjdhiro の体感から書いた暫定の定義です。段ごとに、太字の一文が定義で、その下が補いです。",
        "L2-NOTE": "ここに並べた候補は、各分野の論を原典で照らし直す前の報告を、分野を横断して集計したもの（2026 年 4 月）から拾いました。括弧の中の分野の数と信頼度は、その集計の数をそのまま写したもので、まだ確かめていません。原典で照らし直した分野の記録で数え直してから、一つずつ論じます。「仮説」は、その集計から立てた五つの仮説のことで、数字はその番号です。",
        "footer": '定義は、30 の分野の調べで見つかる特徴を論じ、組み込んで補強していきます。<br><a href="../index.html">創造とは</a> ・ <a href="../sources.html">原典の台帳</a>',
    },
    "en": {
        "lang": "en",
        "title": "Five Stages of Creation — Current Definition",
        "page_title": "Five Stages of Creation — Current Definition | What Is Creation",
        "description": "The current definition of the Five Stages of Creation (Field, Wave, Edge, Vortex, Bundle), written in two layers: a provisional definition from pjdhiro's own felt sense, and candidates to discuss, from cases where other theories describe it differently.",
        "lead": [
            "This is the current definition of the Five Stages of Creation (Field, Wave, Edge, Vortex, Bundle). The definition is provisional and is written in two layers.",
            "Layer 1 is the definition written from pjdhiro's own felt sense. Layer 2 lists features that other theories sometimes describe, as reported in the survey of 30 fields. Each feature in Layer 2 will be discussed in turn and built into Layer 1 to strengthen it. Each time something is built in, it is added to the version record at the end.",
        ],
        "toc": "Contents",
        "updated": "Last updated",
        "other_lang": '<a href="./five-stages.html" hreflang="ja" lang="ja">日本語</a>',
        "home": '<a href="../index.html?lang=en">What Is Creation</a>',
        "source": "Source (GitHub, Japanese)",
        "L1-INTRO": "This layer is the provisional definition written from pjdhiro's felt sense. For each stage, the sentence in bold is the definition, and the text below it adds to it.",
        "L2-NOTE": "The candidates listed here were taken from an aggregate (April 2026) of reports across fields, made before the theories in each field were re-checked against their original sources. The numbers of fields and the confidence levels in parentheses are copied from that aggregate as they are, and have not yet been checked. They will be recounted from the re-checked records of each field, and then discussed one by one. \"Hypothesis\" refers to the five hypotheses drawn from that aggregate; the number is its index.",
        "footer": 'The definition is strengthened by discussing and building in the features found in the survey of 30 fields.<br><a href="../index.html?lang=en">What Is Creation</a> · <a href="../sources.html">Source ledger</a>',
    },
}


def fail(msg: str) -> None:
    sys.exit(f"ERROR: {msg}")


def sections(md: str, level: int) -> list[tuple[str, str]]:
    """md を、指定の深さの見出しで切る。[(見出し, 中身)]。最初の見出しより前は捨てる。"""
    mark = "#" * level + " "
    out, head, buf = [], None, []
    for line in md.split("\n"):
        if line.startswith(mark):
            if head is not None:
                out.append((head, "\n".join(buf)))
            head, buf = line[len(mark):].strip(), []
        elif head is not None:
            buf.append(line)
    if head is not None:
        out.append((head, "\n".join(buf)))
    return out


def find(secs, prefix: str) -> str:
    for head, body in secs:
        if head.startswith(prefix):
            return body
    fail(f"見出し「{prefix}」が正本に無い")


def blocks(body: str) -> list[str]:
    """空行と区切り線（---）で段落に分ける。"""
    out = []
    for b in re.split(r"\n\s*\n", body):
        b = b.strip()
        if b and b != "---":
            out.append(b)
    return out


def drop_sentences(par: str, needle: str) -> str:
    return "".join(s for s in re.findall(r"[^。]*。?", par) if s and needle not in s).strip()


def extract_ja(md: str) -> str:
    """正本からページに載せる部分を抜き出し、ページの形の md にする。"""
    top = sections(md, 2)

    # 一覧の表と、その下の段落
    overview = blocks(find(top, "5段階一覧"))
    table = next(b for b in overview if b.startswith("|"))
    notes = [drop_sentences(b, "Ver.") for b in overview if not b.startswith("|")]
    parts = ["## 五つの段の一覧", table] + [n for n in notes if n]

    # 第 1 層
    l1 = sections(find(top, "第 1 層"), 3)
    parts += ["## 第 1 層：pjdhiro の体感（暫定の定義）", "<!--L1-INTRO-->"]
    for head, body in l1:
        m = re.match(r"Stage \d+:\s*(.+)", head)
        parts.append("### " + (m.group(1) if m else head))
        for b in blocks(body):
            if b.startswith("材料にした"):
                break  # 材料にした言葉の一覧は載せない
            parts.append(b)

    # 第 2 層
    l2_body = find(top, "第 2 層")
    l2_lead = blocks(l2_body.split("\n### ", 1)[0])[0]
    parts += ["## 第 2 層：ほかの論ではこう言うケースもある（論じる候補）", l2_lead, "<!--L2-NOTE-->"]
    for head, body in sections(l2_body, 3):
        if head.startswith("照合した出典ノート"):
            break
        parts.append("### " + head)
        parts += blocks(body)

    # 版の記録
    rec = blocks(find(top, "版の記録"))
    parts += ["## 版の記録"] + [b for b in rec if b.startswith("|")]
    return "\n\n".join(parts) + "\n"


def sha(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]


# --- 小さな md → HTML（見出し・段落・箇条・表・太字だけ） ---

def inline(text: str) -> str:
    t = html.escape(text, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"`(.+?)`", r"<code>\1</code>", t)
    return t


def mute_trailing_paren(item: str) -> str:
    """箇条の終わりの括弧（集計の数）を控えめに見せる。"""
    s = item.rstrip()
    close = s[-1:] if s[-1:] in "）)" else ""
    if not close:
        return inline(item)
    opener = "（" if close == "）" else "("
    depth = 0
    for i in range(len(s) - 1, -1, -1):
        if s[i] == close:
            depth += 1
        elif s[i] == opener:
            depth -= 1
            if depth == 0:
                return inline(s[:i].rstrip()) + ' <span class="count-note">' + inline(s[i:]) + "</span>"
    return inline(item)


def slug(text: str, used: set) -> str:
    base = re.sub(r"[^\w]+", "-", text, flags=re.U).strip("-").lower() or "sec"
    sid, n = base, 2
    while sid in used:
        sid, n = f"{base}-{n}", n + 1
    used.add(sid)
    return sid


def render(md: str, chrome: dict) -> tuple[str, list]:
    out, toc, used = [], [], set()
    section = None
    for b in blocks(md):
        if b.startswith("<!--") and b.endswith("-->"):
            key = b[4:-3].strip()
            out.append(f'<p class="layer-intro">{chrome[key]}</p>')
        elif b.startswith("## "):
            title = b[3:].strip()
            sid = slug(title, used)
            toc.append((sid, title))
            section = sid
            out.append(f'<h2 class="reader-heading" id="{sid}">{inline(title)}</h2>')
        elif b.startswith("### "):
            title = b[4:].strip()
            out.append(f'<h3 class="reader-heading" id="{slug(title, used)}">{inline(title)}</h3>')
        elif b.startswith("|"):
            rows = [r.strip().strip("|").split("|") for r in b.split("\n")]
            rows = [r for r in rows if not all(re.fullmatch(r"\s*:?-+:?\s*", c) for c in r)]
            heads = [c.strip() for c in rows[0]]
            head = "".join(f"<th>{inline(c)}</th>" for c in heads)
            # 狭い幅では行ごとに積むので、各セルに列の名前を持たせる（テンプレートの .tablefit）
            body = "".join(
                "<tr>" + "".join(f'<td data-label="{html.escape(h)}">{inline(c.strip())}</td>' for h, c in zip(heads, r)) + "</tr>"
                for r in rows[1:]
            )
            # 列の多い表（一覧）は、一文の定義の列のほかを折らない
            cls = " table-wide" if len(heads) > 4 else ""
            out.append(f'<div class="reader-card reader-table tablefit{cls}"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
        elif b.startswith("- "):
            items = [l[2:].strip() for l in b.split("\n") if l.startswith("- ")]
            layer2 = section is not None and section.startswith(("第-2-層", "layer-2"))
            li = "".join(f"<li>{mute_trailing_paren(i) if layer2 else inline(i)}</li>" for i in items)
            out.append(f"<ul>{li}</ul>")
        elif b.startswith("**") and b.endswith("**") and "\n" not in b:
            out.append(f'<p class="stage-definition">{inline(b)}</p>')
        else:
            out.append(f"<p>{inline(' '.join(b.split(chr(10))))}</p>")
    return "\n".join(out), toc


def build_page(lang: str, body_md: str, updated: str) -> str:
    c = CHROME[lang]
    body, toc = render(body_md, c)
    toc_html = (
        f'<nav class="reader-toc reader-card" aria-label="{c["toc"]}"><p class="reader-toc-title">{c["toc"]}</p><ol>'
        + "".join(f'<li><a href="#{sid}">{inline(t)}</a></li>' for sid, t in toc)
        + "</ol></nav>"
    )
    lead = "".join(f'<p class="reader-lead">{html.escape(p, quote=False)}</p>' for p in c["lead"])
    page = TPL.read_text(encoding="utf-8")
    for key, val in {
        "LANG": c["lang"], "PAGE_TITLE": html.escape(c["page_title"]), "TITLE": html.escape(c["title"]),
        "DESCRIPTION": html.escape(c["description"]), "CANONICAL": OUT[lang].name,
        "LEAD": lead, "TOC": toc_html, "BODY": body, "UPDATED_LABEL": c["updated"], "UPDATED": updated,
        "OTHER_LANG": c["other_lang"], "HOME": c["home"], "SOURCE_LABEL": c["source"], "FOOTER": c["footer"],
    }.items():
        page = page.replace("{{" + key + "}}", val)
    if "{{" in page:
        fail("テンプレートに埋まっていない場所がある: " + re.search(r"\{\{\w+\}\}", page).group(0))
    if "�" in page:
        fail("生成物に文字化け（U+FFFD）がある")
    return page


def latest_record_date(body_md: str) -> str:
    dates = re.findall(r"^\|\s*(\d{4}-\d{2}-\d{2})\s*\|", body_md, flags=re.M)
    return max(dates) if dates else "unknown"


def main() -> None:
    ap = argparse.ArgumentParser(description="創造の5段階の現在の定義のページを生成する")
    ap.add_argument("--check", action="store_true", help="書き換えずに、生成物と英語の写しが正本に追いついているかを見る")
    args = ap.parse_args()

    ja_md = extract_ja(SRC_JA.read_text(encoding="utf-8"))
    ja_sha = sha(ja_md)

    en_raw = SRC_EN.read_text(encoding="utf-8")
    m = re.match(r"<!--\s*ja-source-sha:\s*([0-9a-f]+)\s*-->\n", en_raw)
    if not m:
        fail(f"{SRC_EN.relative_to(ROOT)} の頭に <!-- ja-source-sha: … --> が無い")
    en_md = en_raw[m.end():]
    # 英語の写しの頭の説明（--- まで）は、ページに載せない
    en_md = en_md.split("\n---\n", 1)[1] if "\n---\n" in en_md else en_md

    # 最終更新は、版の記録のいちばん新しい日付（コミットの日付は、中身の変わらない引っ越しでも進むため）
    updated = latest_record_date(ja_md)
    pages = {"ja": build_page("ja", ja_md, updated)}
    problems = []
    if m.group(1) != ja_sha:
        problems.append(
            f"英語の写しが古い：正本の抜き出しが変わった（写しのハッシュ {m.group(1)}、今の正本 {ja_sha}）。"
            f"{SRC_EN.relative_to(ROOT)} を訳し直し、頭のハッシュを {ja_sha} にする"
        )
    else:
        pages["en"] = build_page("en", en_md, updated)

    for lang, page in pages.items():
        out = OUT[lang]
        now = out.read_text(encoding="utf-8") if out.exists() else None
        if now == page:
            print(f"SAME: {out.relative_to(ROOT)}")
        elif args.check:
            problems.append(f"{out.relative_to(ROOT)} が正本から生成し直されていない（python3 cs/scripts/build-five-stages.py）")
        else:
            out.write_text(page, encoding="utf-8")
            print(f"OK: {out.relative_to(ROOT)} ({len(page.encode('utf-8')):,} bytes)")

    if problems:
        for p in problems:
            print("NG: " + p)
        sys.exit(1)


if __name__ == "__main__":
    main()
