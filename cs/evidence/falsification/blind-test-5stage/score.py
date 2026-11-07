#!/usr/bin/env python3
"""runs/{model}-r{n}.md の末尾 JSON と runs/{model}-r{n}.map から、PROTOCOL.md §4 の指標を集計する。

usage: score.py [runs_dir]  → Markdown 表を stdout に出す（RESULTS.md に貼る）
"""
import collections
import glob
import json
import os
import re
import sys

POS = {"対応あり", "部分的に対応"}
NEG = {"弱い対応", "弱い対応（表層的）", "対応なし"}
GROUP = {"P1": "P", "P2": "P", "P3": "P", "C1": "C", "C2": "C", "C3": "C", "C4": "C",
         "L1": "L", "L2": "L", "N1": "N", "N2": "N", "N3": "N", "N4": "N"}
EXPECT_STAGE = {"P1": {4}, "P2": {4}, "P3": {4}}
IDS = ["P1", "P2", "P3", "C1", "C2", "C3", "C4", "L1", "L2", "N1", "N2", "N3", "N4"]


def load_run(path):
    text = open(path, encoding="utf-8").read()
    blocks = re.findall(r"```json\s*(\{.*?\})\s*```", text, flags=re.S)
    if not blocks:
        raise SystemExit(f"no json block: {path}")
    data = json.loads(blocks[-1])
    mp = {}
    for line in open(path.replace(".md", ".map"), encoding="utf-8"):
        if line.startswith("#") or not line.strip():
            continue
        label, cid = line.rstrip("\n").split("\t")
        mp[label] = cid
    out = {}
    for label, v in data.items():
        cid = mp[label]
        j = v["judgment"].replace("（表層的）", "")
        out[cid] = {"judgment": j, "stages": set(int(s) for s in v.get("stages", [])),
                    "confidence": v.get("confidence", ""), "label": label}
    return out, text


def main():
    runs_dir = sys.argv[1] if len(sys.argv) > 1 else "runs"
    runs = {}
    texts = {}
    for p in sorted(glob.glob(os.path.join(runs_dir, "*-r[0-9].md"))):
        name = os.path.basename(p)[:-3]
        runs[name], texts[name] = load_run(p)
    names = list(runs)
    print(f"集計対象 run: {len(names)} 本 — {', '.join(names)}\n")

    # 判定表
    print("## 判定表（概念 × run）— 判定 / 段階\n")
    print("| ID | " + " | ".join(names) + " |")
    print("|---|" + "---|" * len(names))
    for cid in IDS:
        cells = []
        for n in names:
            r = runs[n].get(cid)
            if not r:
                cells.append("—")
                continue
            st = ",".join(str(s) for s in sorted(r["stages"])) or "—"
            cells.append(f"{r['judgment']} / {st}")
        print(f"| {cid} | " + " | ".join(cells) + " |")
    print()

    # 指標
    def rate(ids, pred):
        hit = tot = 0
        for n in names:
            for cid in ids:
                r = runs[n].get(cid)
                if r:
                    tot += 1
                    hit += pred(r)
        return hit, tot

    print("## 指標（PROTOCOL §4）\n")
    print("| 指標 | 値 | 合格線 |")
    print("|---|---|---|")
    h, t = rate(["N1", "N2", "N3", "N4"], lambda r: r["judgment"] in NEG)
    print(f"| 対照棄却率 | {h}/{t} = {100*h/t:.0f}% | ≥ 75% |")
    h, t = rate(["P1", "P2", "P3"], lambda r: r["judgment"] in POS and EXPECT_STAGE[list(EXPECT_STAGE)[0]] and bool(r["stages"] & {4}))
    print(f"| 採用済みの再構成率（陽性かつ段階 4 を含む） | {h}/{t} = {100*h/t:.0f}% | 参考値 |")
    h, t = rate(IDS, lambda r: 3 in r["stages"])
    print(f"| 第 3 段階割付率（全判定） | {h}/{t} = {100*h/t:.0f}% | — |")
    hN, tN = rate(["N1", "N2", "N3", "N4"], lambda r: 3 in r["stages"])
    print(f"| 第 3 段階割付（対照 N1-N4） | {hN}/{tN} | 1 件でも「当てはまりすぎ」の直接証拠 |")
    print()

    # 概念別 第3段階 / 陽性率 / 一致度
    print("## 概念別: 陽性率・第 3 段階割付・最頻判定の一致度\n")
    print("| ID | 区分 | 陽性 | 段階 3 を含む | 最頻判定 | 一致度 |")
    print("|---|---|---|---|---|---|")
    for cid in IDS:
        js = [runs[n][cid]["judgment"] for n in names if cid in runs[n]]
        s3 = sum(1 for n in names if cid in runs[n] and 3 in runs[n][cid]["stages"])
        pos = sum(1 for j in js if j in POS)
        mode, cnt = collections.Counter(js).most_common(1)[0]
        print(f"| {cid} | {GROUP[cid]} | {pos}/{len(js)} | {s3}/{len(js)} | {mode} | {cnt}/{len(js)} = {100*cnt/len(js):.0f}% |")
    print()

    # 似非の検出（本文の語で機械判定・最終判断は手読み）
    print("## 似非の検出（本文キーワード・要手読み）\n")
    print("| run | L1: 解散/終結/方向が逆 に言及 | L2: 表層/こじつけ に言及 |")
    print("|---|---|---|")
    for n in names:
        t = texts[n]
        l1 = runs[n]["L1"]["label"]
        l2 = runs[n]["L2"]["label"]
        sec1 = re.search(rf"### 記述 {l1}\n(.*?)(?=\n### |\n## )", t, flags=re.S)
        sec2 = re.search(rf"### 記述 {l2}\n(.*?)(?=\n### |\n## )", t, flags=re.S)
        s1 = sec1.group(1) if sec1 else ""
        s2 = sec2.group(1) if sec2 else ""
        k1 = bool(re.search(r"解散|終結|終了|逆|消滅|死", s1))
        k2 = bool(re.search(r"表層|こじつけ|表面|字面|比喩", s2))
        print(f"| {n} | {'有' if k1 else '無'} ({runs[n]['L1']['judgment']}) | {'有' if k2 else '無'} ({runs[n]['L2']['judgment']}) |")
    print()

    # 課題 B の理論名
    print("## 課題 B に挙がった理論名（本文 `## B` 節の人名・理論語を機械抽出・要手読み）\n")
    keys = ["シモンドン", "Simondon", "ボーム", "Bohm", "プリゴジン", "Prigogine", "ホワイトヘッド", "Whitehead",
            "ベルタランフィ", "Bertalanffy", "ケストラー", "Koestler", "ヘーゲル", "Hegel", "ドゥルーズ", "Deleuze",
            "ベルクソン", "Bergson", "弁証法", "複雑系", "自己組織化", "オートポイエーシス", "老子", "道教", "仏教", "華厳",
            "タックマン", "Tuckman", "ゲシュタルト", "ユング", "Jung", "ウォーラス", "Wallas", "易", "陰陽", "シェリング", "Schelling",
            "ヘラクレイトス", "Heraclitus", "スピノザ", "Spinoza", "レヴィナス", "西田", "Varela", "ヴァレラ", "マトゥラーナ", "Maturana"]
    counter = collections.Counter()
    print("| run | 挙がった名（機械抽出） |")
    print("|---|---|")
    for n in names:
        t = texts[n]
        m = re.search(r"\n## B\n(.*?)(?=\n## C)", t, flags=re.S)
        sec = m.group(1) if m else ""
        found = [k for k in keys if k in sec]
        for k in found:
            counter[k] += 1
        print(f"| {n} | {', '.join(found) or '（抽出なし）'} |")
    print()
    print("頻度: " + ", ".join(f"{k} {v}" for k, v in counter.most_common()))


if __name__ == "__main__":
    main()
