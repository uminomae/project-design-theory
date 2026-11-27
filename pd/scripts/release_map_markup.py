"""公開ページ reader/kaken-map.html・kokoro-scale-map.html の升目の絵を、
scripts/release-maps.py が書く JSON（docs/release-stages/*.json）から組む。

build-reader-lp.py が読み込んで使う。正本 MD の
  <!--N:キー-->            … JSON の counts の数（一覧なら「・」でつなぐ）
  <!--RELEASE-MAP-->       … 学問の地図（kaken-map）
  <!--RELEASE-MAP:dmrs-->  … 防衛の尺度の表（kokoro-scale-map）
  <!--RELEASE-MAP:wusct--> … 発達の尺度の表
  <!--RELEASE-MAP:items--> … 台帳の項の並び
を置き換える。数も当てはめも JSON から取り、手で書かない（docs/rules/decisions.md「RELEASE-STAGES 3.2・3.3 の段 1 の見せ方」）。
升を押したときの出し方は src/reader-release-map.js。
"""
import html as htmllib
import json
import re
import sys

esc = htmllib.escape


def fill_counts(html: str, counts: dict, name: str) -> str:
    def rep(m):
        k = m.group(1)
        if k not in counts:
            sys.exit(f"ERROR: <!--N:{k}--> が {name} の counts に無い")
        v = counts[k]
        return "・".join(v) if isinstance(v, list) else str(v)
    return re.sub(r"<!--N:(\w+)-->", rep, html)


def _payload(obj) -> str:
    # </script> を閉じさせないよう < をエスケープする
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")


def kaken_markup(data: dict) -> str:
    titles = data["pages"]
    cells_data, out, listed = {}, [], {}
    out.append(
        '<div class="rmap rmap--kaken" data-rmap="kaken">'
        '<p class="rmap-legend"><span class="rmap-key is-page"></span>読み物のページ'
        '<span class="rmap-key"></span>触れていない</p>'
    )
    for dai in data["dai"]:
        t = sum(1 for ch in dai["chu"] for s in ch["sho"] if s["pages"])
        a = sum(len(ch["sho"]) for ch in dai["chu"])
        out.append(f'<div class="rmap-dai"><p class="rmap-dai__title">大区分 {esc(dai["id"])}<span class="rmap-count">{t} / {a}</span></p><div class="rmap-chus">')
        for ch in dai["chu"]:
            k = sum(1 for s in ch["sho"] if s["pages"])
            out.append(
                f'<div class="rmap-chu rmap-group{" is-empty" if not k else ""}">'
                f'<p class="rmap-chu__name">中区分 {esc(ch["id"])}　{esc(ch["name"])}<span class="rmap-count">{k} / {len(ch["sho"])}</span></p>'
                '<div class="rmap-cells">'
            )
            for s in ch["sho"]:
                cells_data[s["id"]] = {"n": s["name"], "p": s["pages"]}
                paint = "is-page" if s["pages"] else ""
                what = f'読み物 {len(s["pages"])}' if s["pages"] else "触れていない"
                label = f'{s["id"]} {s["name"]}（{what}）'
                out.append(
                    f'<button type="button" class="rmap-cell {paint}" data-rmap-cell="{esc(s["id"])}"'
                    f' aria-pressed="false" aria-label="{esc(label)}" title="{esc(label)}"></button>'
                )
                if paint:
                    listed[s["id"]] = s
            out.append("</div></div>")
        out.append("</div></div>")
    out.append('<div class="rmap-detail" data-rmap-detail hidden></div></div>')
    payload = {"kind": "kaken", "cells": cells_data, "pages": titles}
    out.append(f'<script type="application/json" data-rmap-json="kaken">{_payload(payload)}</script>')
    # JavaScript が動かない環境と機械の読み手のための一覧（升の中身と同じもの）
    rows = []
    for code in sorted(listed):
        s = listed[code]
        links = [f'<a href="{esc(p)}.html">{esc(titles[p])}</a>' for p in s["pages"]]
        rows.append(f'<li><strong>{esc(code)} {esc(s["name"])}</strong>：{"・".join(links)}</li>')
    out.append(
        '<details class="acc"><summary>触れている小区分の一覧</summary>'
        f'<ul class="rmap-list">{"".join(rows)}</ul></details>'
    )
    return "".join(out)


def _bucket(n: int) -> str:
    return "" if n == 0 else ("is-n1" if n == 1 else ("is-n2" if n == 2 else "is-n3"))


def _item_payload(data: dict) -> dict:
    return {i["id"]: {"n": i["name"], "s": i["section"], "star": i["star"]} for i in data["items"]}


def dmrs_markup(data: dict) -> str:
    out = [
        '<div class="rmap rmap--scale" data-rmap="dmrs">'
        '<p class="rmap-legend"><span class="rmap-key is-n1"></span>1 項'
        '<span class="rmap-key is-n2"></span>2 項'
        '<span class="rmap-key is-n3"></span>3 項以上'
        '<span class="rmap-key"></span>空き</p>'
    ]
    cells = {}
    for lv in data["levels"]:
        out.append(f'<div class="rmap-level rmap-group"><p class="rmap-level__name">{esc(lv["name"])}</p><div class="rmap-chips">')
        for d in lv["defenses"]:
            n = len(d["items"])
            key = "d:" + d["name"]
            cells[key] = {"n": d["name"], "sub": lv["name"], "i": d["items"]}
            label = f'{d["name"]}（{n} 項）' if n else f'{d["name"]}（空き）'
            out.append(
                f'<button type="button" class="rmap-chip {_bucket(n)}" data-rmap-cell="{esc(key)}" aria-pressed="false"'
                f' aria-label="{esc(label)}">{esc(d["name"])}<span class="rmap-chip__n">{n or "—"}</span></button>'
            )
        out.append("</div></div>")
    out.append('<div class="rmap-detail" data-rmap-detail hidden></div></div>')
    payload = {"kind": "scale", "cells": cells, "items": _item_payload(data)}
    out.append(f'<script type="application/json" data-rmap-json="dmrs">{_payload(payload)}</script>')
    return "".join(out)


def wusct_markup(data: dict) -> str:
    out = [
        '<div class="rmap rmap--scale" data-rmap="wusct">'
        '<div class="rmap-stages rmap-group">'
    ]
    cells = {}
    for st in data["stages"]:
        n = len(st["items"])
        key = "s:" + st["code"]
        cells[key] = {"n": f'{st["code"]} {st["name"]}', "sub": st["cg"], "i": st["items"]}
        label = f'{st["code"]} {st["name"]}・{st["cg"]}（{n} 項）' if n else f'{st["code"]} {st["name"]}・{st["cg"]}（空き）'
        out.append(
            f'<button type="button" class="rmap-stage {_bucket(n)}" data-rmap-cell="{esc(key)}" aria-pressed="false" aria-label="{esc(label)}">'
            f'<span class="rmap-stage__code">{esc(st["code"])}</span>'
            f'<span class="rmap-stage__name">{esc(st["name"])}</span>'
            f'<span class="rmap-stage__cg">{esc(st["cg"])}</span>'
            f'<span class="rmap-chip__n">{n or "—"}</span></button>'
        )
    out.append('</div><div class="rmap-detail" data-rmap-detail hidden></div></div>')
    payload = {"kind": "scale", "cells": cells, "items": _item_payload(data)}
    out.append(f'<script type="application/json" data-rmap-json="wusct">{_payload(payload)}</script>')
    return "".join(out)


def items_markup(data: dict) -> str:
    cg = {s["code"]: s["cg"] for s in data["stages"]}
    out, sec = ['<div class="rmap-items">'], None
    for it in data["items"]:
        if it["section"] != sec:
            if sec is not None:
                out.append("</ul>")
            sec = it["section"]
            out.append(f'<p class="rmap-items__sec">{esc(sec)}</p><ul>')
        tags = [f'<span class="rmap-tag is-d">{esc(d)}</span>' for d in it["dmrs"]]
        tags += [f'<span class="rmap-tag is-s">{esc(s)} {esc(cg[s])}</span>' for s in it["wusct"]]
        if not tags:
            tags = ['<span class="rmap-tag is-none">どちらにも当てない</span>']
        out.append(
            f'<li id="ks-{esc(it["id"])}"><span class="rmap-id">{esc(it["id"])}{" ★" if it["star"] else ""}</span>'
            f'<span class="rmap-item__name">{esc(it["name"])}</span><span class="rmap-tags">{"".join(tags)}</span></li>'
        )
    out.append("</ul></div>")
    return "".join(out)


MARKUP = {
    ("kaken", ""): kaken_markup,
    ("kokoro", "dmrs"): dmrs_markup,
    ("kokoro", "wusct"): wusct_markup,
    ("kokoro", "items"): items_markup,
}


def fill_maps(html: str, kind: str, data: dict, name: str) -> str:
    def rep(m):
        f = MARKUP.get((kind, m.group(1) or ""))
        if not f:
            sys.exit(f"ERROR: {name} に置けない印 <!--RELEASE-MAP{':' + m.group(1) if m.group(1) else ''}-->")
        return f(data)
    html, n = re.subn(r"(?:<p>)?<!--RELEASE-MAP(?::(\w+))?-->(?:</p>)?", rep, html)
    if not n:
        sys.exit(f"ERROR: <!--RELEASE-MAP--> が {name} に無い")
    return html
