#!/usr/bin/env python3
"""RELEASE-STAGES.md の 3.2 と 3.3 の段 1 の表を、当てはめの TSV から作る。

  python3 -I scripts/release-maps.py          # 二つの md と JSON を書き、数を出す
  python3 -I scripts/release-maps.py --check  # 書かずに、md と JSON が TSV と合っているかだけ見る

入力：docs/release-stages/kaken-kubun-r10.tsv・kaken-assign.tsv・kokoro-assign.tsv
出力：docs/release-stages/kaken-map.md・kokoro-scale-map.md（下書きの表）と
      kaken-map.json・kokoro-scale-map.json（公開ページ pd/reader/kaken-map.html・kokoro-scale-map.html の材料。
      pd/scripts/build-reader-lp.py が読んでページに埋める）
kaken-assign.tsv の page の行は、pd/reader/*.html と一つずつ合っていなければ止まる（ページを足した・外したら行も直す）。
"""
import collections
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, "docs", "release-stages")
READER = os.path.join(ROOT, "pd", "reader")


def page_title(ident):
    with open(os.path.join(READER, ident + ".html"), encoding="utf-8") as f:
        m = re.search(r"<title>(.*?)</title>", f.read(), re.S)
    return re.sub(r"\s*\|\s*Project Design\s*$", "", m.group(1).strip()) if m else ident


def cs_title(ident):
    for p in glob.glob(os.path.join(ROOT, "cs", "evidence", f"evidence-{ident}-*.md")):
        with open(p, encoding="utf-8") as f:
            m = re.search(r'^title:\s*"?([^"\n]*)', f.read(), re.M)
        if m:
            return m.group(1).split("：")[0]
    sys.exit(f"cs の記録が無い：{ident}")


def rows(name):
    with open(os.path.join(D, name), encoding="utf-8") as f:
        return [l.rstrip("\n").split("\t") for l in f if l.strip() and not l.startswith("#")]


def codes(s):
    return [] if s.strip() in ("", "-") else s.split()


def kaken():
    chu, sho, order = {}, {}, []
    for r in rows("kaken-kubun-r10.tsv"):
        if r[0].startswith("中区分"):
            chu[r[0][3:]] = (r[1], r[2])
        else:
            sho[r[0]] = (r[1], r[2].split(","))
            order.append(r[0])
    assign = rows("kaken-assign.tsv")
    hits = collections.defaultdict(list)
    for kind, ident, cs, *_ in assign:
        for c in codes(cs):
            if c not in sho:
                sys.exit(f"区分表に無い番号：{c}（{ident}）")
            hits[c].append(ident)
    pages = [a for a in assign if a[0] == "page"]
    have = {os.path.basename(p)[:-5] for p in glob.glob(os.path.join(READER, "*.html"))}
    listed = {a[1] for a in pages}
    if have != listed:
        sys.exit(f"kaken-assign.tsv の page の行が pd/reader と合わない。行が無いページ：{sorted(have - listed)}・ページが無い行：{sorted(listed - have)}")
    mapped_pages = [a for a in pages if codes(a[2])]
    csf = [a for a in assign if a[0] == "cs"]
    page_codes = {c for a in pages for c in codes(a[2])}
    cs_codes = {c for a in csf for c in codes(a[2])}
    touched = set(hits)
    chu_touched = {ch for c in touched for ch in sho[c][1]}
    dai_all = sorted({d for v in chu.values() for d in v[1].split("・")})
    dai_touched = sorted({d for ch in chu_touched for d in chu[ch][1].split("・")})
    n = dict(
        pages=len(pages), mapped_pages=len(mapped_pages), unmapped=[a[1] for a in pages if not codes(a[2])],
        cs=len(csf), sho=len(sho), touched=len(touched), page_only=len(page_codes - cs_codes),
        cs_only=len(cs_codes - page_codes), both=len(page_codes & cs_codes),
        chu=len(chu), chu_touched=len(chu_touched), dai=len(dai_all), dai_touched=len(dai_touched),
        dai_untouched=[d for d in dai_all if d not in dai_touched],
        unmapped_n=len(pages) - len(mapped_pages),
    )
    out = []
    w = out.append
    w("# 学問の地図の下書き（科研費の審査区分表の小区分）")
    w("")
    w("`docs/RELEASE-STAGES.md` 3.2（D 人類の man の範囲）の段 1 の下書き。このファイルは `python3 -I scripts/release-maps.py` が `kaken-assign.tsv` から作る。手で直さず、TSV を直して作り直す。")
    w("")
    w("- 基準：科研費の審査区分表（文部科学省。令和 10 年度の公募から使う版。https://www.mext.go.jp/content/20261021-mxt_gakujokik-000052128_01.pdf の「審査区分表（中区分種目）」）。小区分は `kaken-kubun-r10.tsv` に機械で抜いた。")
    w("- 当てたもの：`pd/reader/*.html` の全ページと、cs の 30 分野（`cs/evidence/evidence-Dxx-*.md` の論ごとの節）。")
    w("- 当て方は Claude の読み（2026-11-26）。ページは題・説明・見出しを、cs は論の名と著者を読み、区分表の「内容の例」のどこに入るかで当てた。主に扱う区分だけを置いた。別のコンテキストで照合し直す前の下書き。")
    w("")
    w("## 数")
    w("")
    w("| 項目 | 数 |")
    w("|---|---|")
    w(f"| 小区分 | 触れている {n['touched']} / {n['sho']}（触れていない {n['sho'] - n['touched']}） |")
    w(f"| うち読み物のページだけ・cs だけ・両方 | {n['page_only']}・{n['cs_only']}・{n['both']} |")
    w(f"| 中区分 | 触れている {n['chu_touched']} / {n['chu']} |")
    w(f"| 大区分 | 触れている {n['dai_touched']} / {n['dai']}（触れていない：{'・'.join(n['dai_untouched']) or 'なし'}） |")
    w(f"| 読み物のページ | {n['pages']}（区分に当てた {n['mapped_pages']}・当てない {len(n['unmapped'])}） |")
    w(f"| cs の分野 | {n['cs']}（どれも一つ以上の区分に当てた） |")
    w("")
    w(f"区分に当てないページ：{'・'.join(n['unmapped'])}。並びや目次のページ（中身は呼ぶ先のページの側）と、このサイトを測った結果のページと、pjdhiro の一年の記録（love-trajectory）。")
    w("")
    w("区分の中に場所が無いもの：Love駆動開発そのもの（経営学・臨床心理学・仏教学に触れるが、どれかの区分の研究ではない）、cs の D30 の伝統知そのもの（TEK・メーティスなどの論は区分に入る）。")
    w("")
    w("## 地図")
    w("")
    w("● は触れている小区分で、括弧の中は当てたページ（ファイル名）と cs の分野。○ は触れていない小区分。")
    w("")
    by_dai = collections.defaultdict(list)
    for ch, (nm, dai) in chu.items():
        by_dai[dai.split("・")[0]].append(ch)
    for dai in sorted(by_dai):
        chs = sorted(by_dai[dai], key=int)
        t = sum(1 for ch in chs for c in order if ch in sho[c][1] and c in touched)
        a = sum(1 for ch in chs for c in order if ch in sho[c][1])
        w(f"### 大区分 {dai}（{t} / {a}）")
        w("")
        w("| 中区分 | 触れている | 小区分 |")
        w("|---|---|---|")
        for ch in chs:
            cs_in = [c for c in order if ch in sho[c][1]]
            k = sum(1 for c in cs_in if c in touched)
            cells = []
            for c in cs_in:
                nm = sho[c][0].replace("関連", "")
                if c in touched:
                    cells.append(f"● {c} {nm}（{'・'.join(hits[c])}）")
                else:
                    cells.append(f"○ {c} {nm}")
            w(f"| {ch} {chu[ch][0]} | {k} / {len(cs_in)} | {'<br>'.join(cells)} |")
        w("")
    w("複数の中区分に現れる小区分は、それぞれの中区分の行に出す（大区分の数は、出た行で数える）。上の「数」の小区分は、重ねずに数えた。")
    w("")
    page_ids = {a[1] for a in pages}
    data = dict(
        counts={k: v for k, v in n.items() if not isinstance(v, list)},
        dai=[
            dict(id=dai, chu=[
                dict(id=ch, name=chu[ch][0], sho=[
                    dict(id=c, name=sho[c][0].replace("関連", ""),
                         pages=[i for i in hits.get(c, []) if i in page_ids],
                         cs=[i for i in hits.get(c, []) if i not in page_ids])
                    for c in order if ch in sho[c][1]
                ]) for ch in sorted(by_dai[dai], key=int)
            ]) for dai in sorted(by_dai)
        ],
        pages={a[1]: page_title(a[1]) for a in mapped_pages},
        cs={a[1]: cs_title(a[1]) for a in csf},
    )
    return "\n".join(out), n, data


LEVELS = [
    ("7 高い適応（成熟）", ["人に頼る", "利他", "予期", "ユーモア", "自己主張", "自己観察", "昇華", "抑制"]),
    ("6 強迫的（神経症的）", ["感情の隔離", "知性化", "打ち消し"]),
    ("5 そのほかの神経症的", ["抑圧", "解離", "反動形成", "置き換え"]),
    ("4 小さな像の歪み（未熟）", ["自己の価値下げ", "他者の価値下げ", "自己の理想化", "他者の理想化", "万能"]),
    ("3 否認（未熟）", ["否認", "合理化", "投影", "自閉的空想"]),
    ("2 大きな像の歪み（未熟）", ["自己像の分裂", "他者像の分裂", "投影性同一視"]),
    ("1 行動（未熟）", ["行動化", "助けを拒む不平", "受動的攻撃"]),
]
STAGES = [
    ("E2", "衝動（Impulsive・I-2）", "衝動（2）"),
    ("E3", "自己保護（Self-Protective・Δ）", "自己保護（2/3）"),
    ("E4", "順応（Conformist・I-3）", "順応（3）"),
    ("E5", "自己意識（Self-Aware・I-3/4）", "専門家（3/4）"),
    ("E6", "良心（Conscientious・I-4）", "達成者（4）"),
    ("E7", "個人主義（Individualistic・I-4/5）", "多元（4/5）"),
    ("E8", "自律（Autonomous・I-5）", "戦略家（5）"),
    ("E9", "統合（Integrated・I-6）", "構成への気づき（5/6）以降"),
]


def kokoro():
    rs = rows("kokoro-assign.tsv")
    names = {d for _, ds in LEVELS for d in ds}
    stg = {s[0] for s in STAGES}
    dh, sh = collections.defaultdict(list), collections.defaultdict(list)
    for r in rs:
        for d in codes(r[4]):
            if d not in names:
                sys.exit(f"DMRS に無い防衛：{d}（{r[0]}）")
            dh[d].append(r[0])
        for s in codes(r[5]):
            if s not in stg:
                sys.exit(f"WUSCT に無い段階：{s}（{r[0]}）")
            sh[s].append(r[0])
    lv_touched = [lv for lv, ds in LEVELS if any(d in dh for d in ds)]
    n = dict(
        items=len(rs), star=sum(1 for r in rs if r[2] == "★"),
        d_items=sum(1 for r in rs if codes(r[4])), s_items=sum(1 for r in rs if codes(r[5])),
        none=sum(1 for r in rs if not codes(r[4]) and not codes(r[5])),
        defenses=len(names), d_touched=len(dh), levels=len(LEVELS), lv_touched=len(lv_touched),
        stages=len(STAGES), s_touched=len(sh),
        empty_levels=[lv.split(" ", 1)[1] for lv, ds in LEVELS if lv not in lv_touched],
        empty_stages=[f"{c} {cg}" for c, _, cg in STAGES if c not in sh],
    )
    out = []
    w = out.append
    w("# 誤解の台帳を、公的な防衛の尺度と発達の尺度に当てた表（下書き）")
    w("")
    w("`docs/RELEASE-STAGES.md` 3.3（B バグチェッカーの範囲）の段 1 の下書き。このファイルは `python3 -I scripts/release-maps.py` が `kokoro-assign.tsv` から作る。手で直さず、TSV を直して作り直す。")
    w("")
    w("- 台帳：`docs/tools/kokoro-scan/ruler.md` 版 1.12 の「よくある誤解（台帳）」46 項。番号 R01〜R46 は台帳の並び順。")
    w("- DMRS：Di Giuseppe & Perry 2021（*Frontiers in Psychology* 12:718440, https://doi.org/10.3389/fpsyg.2021.718440）の 7 水準・30 の防衛。防衛の名の訳は `pd/reader/defense-mechanisms.html` の表のとおり（本文照合済の写しは `pd/knowledge/research/defense-mechanisms/SURVEY-classifications-20261122.md` §5）。")
    w("- WUSCT：Hy & Loevinger 1996（*Measuring Ego Development*, 2nd ed.）の段階 E2〜E9。段階の英語の名と I の符号（I-2・Δ・I-3・I-3/4・I-4・I-4/5・I-5・I-6）、36 項目で採点することは Loevinger 1979（*Applied Psychological Measurement* 3(3):281–311, https://doi.org/10.1177/014662167900300301・写し https://hdl.handle.net/11299/99630 の Table 1 p.283・pp.281–284）の本文で照合した。1979 年の表では I-3/4 と I-4/5 に段階の名が無く、本文は I-3/4 を順応から良心への移り目、I-4/5 を個人主義の水準と呼ぶ。E の番号と、I-3/4 の名「Self-Aware」は Hy & Loevinger 1996 の形で、その本文は読めず未照合。repo のページはクック＝グロイター 2013 の呼び名を使うので、横に並べた（対応はクック＝グロイター 2013 が括弧で書く Loevinger の段階の番号による。`pd/knowledge/research/developmental-stages/README.md` §1・§2）。")
    w("- 当て方は Claude の読み（2026-11-26）。DMRS は、その誤解の中で働いている防衛か、誤解が見落としている防衛を一つから三つ。WUSCT は、その誤解が出やすい段階か、同じ語の向きが反転する境目の段階を、クック＝グロイター 2013 の段階ごとの主な不安と防衛から読んだ。防衛でない取り違え（語の水準・定義の混同）と、段階の根拠が repo に無いものは「—」。")
    w("- 照合し直し（2026-11-27）：作った側と別のコンテキストで、項ごとに (1) 防衛と段階の名と水準が原典のとおりか、(2) 項の文が防衛の定義（Di Giuseppe & Perry 2021 の各防衛の Definition と Function の節）と段階の記述（Loevinger 1979 pp.281–282）に本当に重なるか、(3) 当て漏れと当てすぎ、を見た。名と水準は原典のとおりだった。変えた項と理由は下の「照合し直しで変えたもの」（正本 `kokoro-recheck.tsv`）。")
    w("")
    w("## 数")
    w("")
    w("| 項目 | 数 |")
    w("|---|---|")
    w(f"| 台帳の項 | {n['items']}（うち pjdhiro 由来 {n['star']}） |")
    w(f"| DMRS の防衛に当てた項 | {n['d_items']} / {n['items']} |")
    w(f"| WUSCT の段階に当てた項 | {n['s_items']} / {n['items']} |")
    w(f"| どちらにも当てない項 | {n['none']} / {n['items']}（多くは F4・F5 の取り違えと条件の欠落。枠 2 へ） |")
    w(f"| DMRS の防衛 | 当たる項がある {n['d_touched']} / {n['defenses']}（空き {n['defenses'] - n['d_touched']}） |")
    w(f"| DMRS の水準 | 当たる項がある {n['lv_touched']} / {n['levels']} |")
    w(f"| WUSCT の段階 | 当たる項がある {n['s_touched']} / {n['stages']}（空き {n['stages'] - n['s_touched']}） |")
    w("")
    w("## DMRS の 30 の防衛から見た表")
    w("")
    w("| 水準 | 防衛 | 当たる項 |")
    w("|---|---|---|")
    for lv, ds in LEVELS:
        for d in ds:
            w(f"| {lv} | {d} | {'・'.join(dh[d]) if d in dh else '（空き）'} |")
    w("")
    w("## WUSCT の段階から見た表")
    w("")
    w("| WUSCT | repo の呼び名（クック＝グロイター） | 当たる項 |")
    w("|---|---|---|")
    for code, nm, cg in STAGES:
        w(f"| {code} {nm} | {cg} | {'・'.join(sh[code]) if code in sh else '（空き）'} |")
    w("")
    w("## 台帳の 46 項")
    w("")
    w("| 番号 | 節 | 誤解 | DMRS | WUSCT | 根拠 |")
    w("|---|---|---|---|---|---|")
    for r in rs:
        d = "・".join(codes(r[4])) or "—"
        s = "・".join(codes(r[5])) or "—"
        w(f"| {r[0]}{' ★' if r[2] == '★' else ''} | {r[1]} | {r[3]} | {d} | {s} | {r[6]} |")
    w("")
    w("## 照合し直しで変えたもの（2026-11-27）")
    w("")
    w("| 番号 | 列 | 前 | 後 | 理由 |")
    w("|---|---|---|---|---|")
    for r in rows("kokoro-recheck.tsv"):
        f = lambda s, col: "同じ" if s == "同じ" else ("・".join(codes(s)) or "—")
        w(f"| {r[0]} | {r[1]} | {f(r[2], r[1])} | {f(r[3], r[1])} | {r[4]} |")
    w("")
    data = dict(
        counts=n,
        levels=[dict(name=lv, defenses=[dict(name=d, items=dh.get(d, [])) for d in ds]) for lv, ds in LEVELS],
        stages=[dict(code=c, name=nm, cg=cg, items=sh.get(c, [])) for c, nm, cg in STAGES],
        items=[dict(id=r[0], section=r[1], star=r[2] == "★", name=r[3], dmrs=codes(r[4]), wusct=codes(r[5])) for r in rs],
    )
    return "\n".join(out), n, data


def main():
    check = "--check" in sys.argv
    bad = 0
    for name, (text, n, data) in (("kaken-map", kaken()), ("kokoro-scale-map", kokoro())):
        js = json.dumps(data, ensure_ascii=False, indent=1)
        for p, body in ((os.path.join(D, name + ".md"), text + "\n"), (os.path.join(D, name + ".json"), js + "\n")):
            if check:
                cur = open(p, encoding="utf-8").read() if os.path.exists(p) else ""
                if cur != body:
                    print(f"{os.path.basename(p)} が TSV と合っていない。python3 -I scripts/release-maps.py で作り直す")
                    bad = 1
            else:
                with open(p, "w", encoding="utf-8") as f:
                    f.write(body)
        print(name, {k: v for k, v in n.items() if not isinstance(v, list)})
    sys.exit(bad)


if __name__ == "__main__":
    main()
