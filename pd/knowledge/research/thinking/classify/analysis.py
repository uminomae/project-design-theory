# -*- coding: utf-8 -*-
"""思考の定義の符号化の表を、統計で分ける（標準ライブラリだけ）。

使い方: python3 -I analysis.py   （このディレクトリで）
入力: definitions.csv・coding-a.csv・coding-b.csv（あれば）
出力: results.md（表と数）・map.svg（対応分析の図）・tree.svg（樹形図）

1. 二人の符号化の一致：升ごとの一致率と Cohen の κ（全体・視点ごと）
2. 合わせた表：二人の平均（0・0.5・1）。b が無ければ a だけ
3. 対応分析（数量化 III 類。0/1 の表の因子分析にあたる）：固有値・寄与率・行と列の座標
4. 定義の群分け：コサイン距離・群平均法（UPGMA）の樹形図。列を復元抽出して 1000 回、同じ群に入る割合
5. 視点ごとの集計：時代 × 列の数
"""
import csv, math, random, os, json

HERE = os.path.dirname(os.path.abspath(__file__))
def rd(name):
    with open(os.path.join(HERE, name), encoding='utf-8') as f:
        return list(csv.DictReader(f))

defs = rd('definitions.csv')
A = rd('coding-a.csv')
B = rd('coding-b.csv') if os.path.exists(os.path.join(HERE, 'coding-b.csv')) else None
cols = [c for c in A[0].keys() if c != 'id']
ids = [r['id'] for r in A]
groups = {'P': '場所', 'T': '道具', 'W': '働き', 'S': '場面', 'C': '性格'}
colname = {
 'P1':'魂・心の内','P2':'意識の場','P3':'頭・脳','P4':'体','P5':'頭の外',
 'T1':'言葉','T2':'像・知覚','T3':'概念・規則','T4':'記号・表象','T5':'根拠','T6':'経験則','T7':'外の道具','T8':'感覚と体の動き',
 'W1':'比べる・結ぶ','W2':'判断する','W3':'探す・解く','W4':'確かめる','W5':'段を踏む','W6':'形を受け取る','W7':'流れる・よぎる','W8':'表象を作り替える','W9':'問いと答え',
 'S1':'日常','S2':'学問・数学','S3':'教え・学び','S4':'判断と選択・仕事',
 'C1':'意識が前提','C2':'努力と意図','C3':'目的に向かう','C4':'速く自動','C5':'心の働きのすべて'}
lab = {d['id']: d['who'] for d in defs}
short = {d['id']: d['who'].split('（')[0].split('『')[0].replace('心理学の教科書','教科書').replace('日本国語大辞典','国語辞典').replace('デジタル大辞泉','大辞泉') for d in defs}
for d in defs:
    w = d['who']
    if 'デューイ' in w: short[d['id']] = 'デューイ' + w.split()[1][0]
    if 'カーネマン' in w: short[d['id']] = 'カーネマン系' + w.split()[2]
    if 'プラトン' in w: short[d['id']] = 'プラトン' + ('（国家）' if '国家' in w else '（対話）')
year = {d['id']: int(d['year']) for d in defs}

def mat(rows):
    m = {r['id']: r for r in rows}
    return [[int(m[i][c]) for c in cols] for i in ids]
Xa = mat(A)
out = []
P = lambda s='': out.append(s)

# 1. agreement
if B:
    Xb = mat(B)
    def kappa(pairs):
        n = len(pairs)
        if n == 0: return float('nan'), float('nan')
        po = sum(1 for a, b in pairs if a == b) / n
        pa = sum(a for a, _ in pairs) / n; pb = sum(b for _, b in pairs) / n
        pe = pa * pb + (1 - pa) * (1 - pb)
        return po, (po - pe) / (1 - pe) if pe < 1 else float('nan')
    allp = [(Xa[i][j], Xb[i][j]) for i in range(len(ids)) for j in range(len(cols))]
    po, k = kappa(allp)
    P('## 1. 二人の符号化の一致')
    P()
    P(f'升の数 {len(allp)}。一致率 {po:.3f}・Cohen の κ {k:.3f}。1 を付けた升：a {sum(a for a,_ in allp)}・b {sum(b for _,b in allp)}。')
    P()
    P('| 視点 | 一致率 | κ |'); P('|---|---|---|')
    for g, gn in groups.items():
        pr = [(Xa[i][j], Xb[i][j]) for i in range(len(ids)) for j, c in enumerate(cols) if c.startswith(g)]
        po, k = kappa(pr); P(f'| {gn} | {po:.3f} | {k:.3f} |')
    P()
    dis = [(ids[i], cols[j], Xa[i][j], Xb[i][j]) for i in range(len(ids)) for j in range(len(cols)) if Xa[i][j] != Xb[i][j]]
    P(f'食い違った升（{len(dis)}）：' + '・'.join(f'{i} {c}（a{a}・b{b}）' for i, c, a, b in dis))
    P()
    X = [[(Xa[i][j] + Xb[i][j]) / 2 for j in range(len(cols))] for i in range(len(ids))]
else:
    X = [[float(v) for v in r] for r in Xa]
    P('（coding-b.csv が無いので、a だけで計算した）'); P()

# 2. correspondence analysis
def jacobi(S, iters=200):
    n = len(S); A_ = [row[:] for row in S]; V = [[1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    for _ in range(iters):
        off = sum(A_[i][j] ** 2 for i in range(n) for j in range(n) if i != j)
        if off < 1e-20: break
        for p in range(n):
            for q in range(p + 1, n):
                if abs(A_[p][q]) < 1e-15: continue
                th = (A_[q][q] - A_[p][p]) / (2 * A_[p][q])
                t = (1 if th >= 0 else -1) / (abs(th) + math.sqrt(th * th + 1))
                c = 1 / math.sqrt(t * t + 1); s = t * c
                for k in range(n):
                    akp, akq = A_[k][p], A_[k][q]
                    A_[k][p] = c * akp - s * akq; A_[k][q] = s * akp + c * akq
                for k in range(n):
                    apk, aqk = A_[p][k], A_[q][k]
                    A_[p][k] = c * apk - s * aqk; A_[q][k] = s * apk + c * aqk
                for k in range(n):
                    vkp, vkq = V[k][p], V[k][q]
                    V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq
    ev = [A_[i][i] for i in range(n)]
    order = sorted(range(n), key=lambda i: -ev[i])
    return [ev[i] for i in order], [[V[k][i] for k in range(n)] for i in order]

def ca(X, rid, cid):
    keepc = [j for j in range(len(cid)) if sum(X[i][j] for i in range(len(rid))) > 0]
    keepr = [i for i in range(len(rid)) if sum(X[i][j] for j in keepc) > 0]
    Y = [[X[i][j] for j in keepc] for i in keepr]
    tot = sum(map(sum, Y)); Pm = [[v / tot for v in r] for r in Y]
    r = [sum(row) for row in Pm]; c = [sum(Pm[i][j] for i in range(len(Pm))) for j in range(len(keepc))]
    S = [[(Pm[i][j] - r[i] * c[j]) / math.sqrt(r[i] * c[j]) for j in range(len(c))] for i in range(len(r))]
    StS = [[sum(S[i][a] * S[i][b] for i in range(len(r))) for b in range(len(c))] for a in range(len(c))]
    ev, vec = jacobi(StS)
    total = sum(e for e in ev if e > 1e-12)
    dims = 3
    colc, rowc = {}, {}
    for d in range(dims):
        sv = math.sqrt(max(ev[d], 0)); v = vec[d]
        # sign: make largest-|loading| column positive for stability
        if v[max(range(len(v)), key=lambda j: abs(v[j]))] < 0: v = [-x for x in v]
        for jj, j in enumerate(keepc):
            colc.setdefault(cid[j], []).append(v[jj] * sv / math.sqrt(c[jj]))  # principal col coords
        u = [sum(S[i][jj] * v[jj] for jj in range(len(c))) / sv for i in range(len(r))]
        for ii, i in enumerate(keepr):
            rowc.setdefault(rid[i], []).append(u[ii] * sv / math.sqrt(r[ii]))  # principal row coords
    contrib = {}
    for d in range(dims):
        v = vec[d]
        for jj, j in enumerate(keepc):
            contrib.setdefault(cid[j], []).append(v[jj] ** 2)  # column contribution to axis
    return ev, total, rowc, colc, contrib, [rid[i] for i in keepr]

ev, total, rowc, colc, contrib, kept = ca(X, ids, cols)
P('## 2. 対応分析（数量化 III 類）')
P()
P('| 軸 | 固有値 | 寄与率 | 累積 |'); P('|---|---|---|---|')
cum = 0
for d in range(5):
    cum += ev[d] / total
    P(f'| {d+1} | {ev[d]:.3f} | {ev[d]/total*100:.1f}% | {cum*100:.1f}% |')
P()
for d in range(3):
    top = sorted(contrib, key=lambda c: -contrib[c][d])[:7]
    P(f'軸 {d+1} に効く列（寄与の大きい順・+ と − は座標の向き）：' + '・'.join(f'{colname[c]}（{"+" if colc[c][d]>0 else "−"}{contrib[c][d]*100:.0f}%）' for c in top))
    P()
P('| 定義 | 年 | 軸 1 | 軸 2 | 軸 3 | 原点からの距離（σ） |'); P('|---|---|---|---|---|---|')
dist = {i: math.sqrt(sum(x * x for x in rowc[i][:2])) for i in kept}
mu = sum(dist.values()) / len(dist); sd = math.sqrt(sum((v - mu) ** 2 for v in dist.values()) / len(dist))
for i in kept:
    P(f'| {lab[i]} | {year[i]} | {rowc[i][0]:+.2f} | {rowc[i][1]:+.2f} | {rowc[i][2]:+.2f} | {(dist[i]-mu)/sd:+.2f} |')
P()

# 3. clustering
def cosd(a, b):
    na = math.sqrt(sum(x * x for x in a)); nb = math.sqrt(sum(x * x for x in b))
    if na == 0 or nb == 0: return 1.0
    return 1 - sum(x * y for x, y in zip(a, b)) / (na * nb)
def upgma(vecs):
    cl = {k: [k] for k in range(len(vecs))}
    D = {(i, j): cosd(vecs[i], vecs[j]) for i in range(len(vecs)) for j in range(i + 1, len(vecs))}
    def dd(a, b):
        return sum(D[(min(x, y), max(x, y))] for x in cl[a] for y in cl[b]) / (len(cl[a]) * len(cl[b]))
    merges = []; nxt = len(vecs)
    while len(cl) > 1:
        keys = list(cl); best = None
        for x in range(len(keys)):
            for y in range(x + 1, len(keys)):
                v = dd(keys[x], keys[y])
                if best is None or v < best[0]: best = (v, keys[x], keys[y])
        v, a, b = best; cl[nxt] = cl.pop(a) + cl.pop(b); merges.append((a, b, v, nxt)); nxt += 1
    return merges
def cut(merges, n, k):
    lab_ = {i: i for i in range(n)}
    members = {i: [i] for i in range(n)}
    for a, b, v, new in merges[: n - k]:
        members[new] = members.pop(a) + members.pop(b)
    out_ = {}
    for g, (key, m) in enumerate(sorted(members.items(), key=lambda kv: min(kv[1]))):
        for i in m: out_[i] = g
    return out_
merges = upgma(X)
K = 7
base = cut(merges, len(ids), K)
random.seed(20261125)
co = [[0] * len(ids) for _ in ids]; NB = 1000
for _ in range(NB):
    js = [random.randrange(len(cols)) for _ in cols]
    Xs = [[row[j] for j in js] for row in X]
    g = cut(upgma(Xs), len(ids), K)
    for i in range(len(ids)):
        for j in range(len(ids)):
            if g[i] == g[j]: co[i][j] += 1
P('## 3. 定義の群分け（コサイン距離・群平均法・7 群）')
P()
for g in range(K):
    mem = [i for i in range(len(ids)) if base[i] == g]
    if len(mem) > 1:
        st = sum(co[a][b] for a in mem for b in mem if a < b) / (NB * len(mem) * (len(mem) - 1) / 2)
    else:
        st = float('nan')
    # characteristic columns: mean in group minus overall mean
    means = [(sum(X[i][j] for i in mem) / len(mem) - sum(X[i][j] for i in range(len(ids))) / len(ids), cols[j]) for j in range(len(cols))]
    feat = [colname[c] for d_, c in sorted(means, reverse=True)[:5] if d_ > 0.15]
    P(f'- 群 {g+1}（{len(mem)}・列を復元抽出した 1000 回で、同じ群に残る割合 {st:.2f}）：' + '・'.join(lab[ids[i]] for i in mem) + '。目立つ列：' + '・'.join(feat))
P()

# 4. era × viewpoint
eras = [('古代〜古代の日本', -10000, 1000), ('近代の哲学（1600–1800）', 1000, 1800), ('1900 年の前後', 1800, 1950), ('この 50 年', 1950, 3000)]
P('## 4. 時代 × 列（合わせた表の値の和。0.5 は二人の一方だけが付けた升）')
P()
P('| 視点 | 列 | ' + ' | '.join(e[0] for e in eras) + ' |'); P('|---|---|' + '---|' * len(eras))
for j, c in enumerate(cols):
    vals = []
    for en, lo, hi in eras:
        vals.append(sum(X[i][j] for i in range(len(ids)) if lo <= year[ids[i]] < hi))
    P(f'| {groups[c[0]]} | {colname[c]} | ' + ' | '.join(('%g' % v) if v else '·' for v in vals) + ' |')
P()

with open(os.path.join(HERE, 'results.md'), 'w', encoding='utf-8') as f:
    f.write('# 思考の定義を統計で分けた結果（analysis.py が書く。手で直さない）\n\n' + '\n'.join(out) + '\n')

# SVG map
def svg_map(dx=0, dy=1):
    W, H, pad = 760, 580, 90
    showc = [c for c in colc if contrib[c][dx] >= 0.03 or contrib[c][dy] >= 0.03]
    xs = [rowc[i][dx] for i in kept] + [colc[c][dx] for c in showc]; ys = [rowc[i][dy] for i in kept] + [colc[c][dy] for c in showc]
    mnx, mxx, mny, mxy = min(xs), max(xs), min(ys), max(ys)
    sx = lambda x: pad + (x - mnx) / (mxx - mnx) * (W - 2 * pad)
    sy = lambda y: H - pad - (y - mny) / (mxy - mny) * (H - 2 * pad)
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="思考の定義と列の対応分析の図（軸 {dx+1} と軸 {dy+1}）" style="max-width:100%;height:auto;font-family:sans-serif">']
    s.append(f'<line x1="{sx(0):.1f}" y1="{pad/2}" x2="{sx(0):.1f}" y2="{H-pad/2}" stroke="currentColor" stroke-opacity=".25"/>')
    s.append(f'<line x1="{pad/2}" y1="{sy(0):.1f}" x2="{W-pad/2}" y2="{sy(0):.1f}" stroke="currentColor" stroke-opacity=".25"/>')
    s.append(f'<text x="{W-pad/2}" y="{sy(0)-6:.1f}" text-anchor="end" font-size="12" fill="currentColor" fill-opacity=".6">軸 {dx+1}（{ev[dx]/total*100:.0f}%）</text>')
    s.append(f'<text x="{sx(0)+6:.1f}" y="{pad/2+12}" font-size="12" fill="currentColor" fill-opacity=".6">軸 {dy+1}（{ev[dy]/total*100:.0f}%）</text>')
    for c in showc:
        x, y = sx(colc[c][dx]), sy(colc[c][dy])
        s.append(f'<text x="{x:.1f}" y="{y:.1f}" font-size="11" fill="#8a6d3b" text-anchor="middle">{colname[c]}</text>')
    pal = ['#2b6cb0', '#c05621', '#2f855a', '#805ad5', '#b83280', '#0f766e', '#4a5568']
    placed = [(sx(colc[c][dx]) - 6 * len(colname[c]), sy(colc[c][dy]) - 11, 12 * len(colname[c]), 13) for c in showc]
    def free(bx, by, bw, bh):
        return all(bx + bw < px or px + pw < bx or by + bh < py or py + ph < by for px, py, pw, ph in placed)
    bins = {}
    for i in kept:
        bins.setdefault((round(sx(rowc[i][dx]) / 14), round(sy(rowc[i][dy]) / 14)), []).append(i)
    reps = {}
    for k_, mem in bins.items():
        reps[mem[0]] = '・'.join(short[m] for m in mem)
    for i in sorted(reps, key=lambda i: sy(rowc[i][dy])):
        x, y = sx(rowc[i][dx]), sy(rowc[i][dy]); g = base[ids.index(i)]
        name = reps[i]
        w = 12.5 * len(name); cand = [(x + 7, y + 4), (x + 7, y + 17), (x + 7, y - 9), (x - 7 - w, y + 4), (x - 7 - w, y + 17), (x - 7 - w, y - 9), (x + 7, y + 30), (x + 7, y - 22)]
        tx, ty = next(((cx, cy) for cx, cy in cand if free(cx, cy - 11, w, 13) and cx > 2 and cx + w < W - 2), cand[0])
        placed.append((tx, ty - 11, w, 13))
        s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5" fill="{pal[g % len(pal)]}"/>')
        if (tx, ty) != (x + 7, y + 4):
            s.append(f'<line x1="{x:.1f}" y1="{y:.1f}" x2="{tx + (0 if tx > x else w):.1f}" y2="{ty - 4:.1f}" stroke="{pal[g % len(pal)]}" stroke-opacity=".5"/>')
        s.append(f'<text x="{tx:.1f}" y="{ty:.1f}" font-size="12" font-weight="600" fill="{pal[g % len(pal)]}">{name}</text>')
    s.append('</svg>')
    return '\n'.join(s)
with open(os.path.join(HERE, 'map.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_map(0, 1))
with open(os.path.join(HERE, 'map-23.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_map(1, 2))

# SVG tree (dendrogram)
def svg_tree():
    n = len(ids); W, rowh, left, right = 720, 22, 200, 40
    H = n * rowh + 50
    pos = {}; ordr = []
    nodes = {}
    for a, b, v, new in merges: nodes[new] = (a, b, v)
    def leaves(k):
        if k < n: return [k]
        a, b, v = nodes[k]; return leaves(a) + leaves(b)
    root = merges[-1][3]; order = leaves(root)
    for r_, k in enumerate(order): pos[k] = (0.0, 20 + r_ * rowh + rowh / 2)
    maxh = max(v for _, _, v, _ in merges)
    X_ = lambda h: left + h / maxh * (W - left - right)
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="思考の定義の樹形図（コサイン距離・群平均法）" style="max-width:100%;height:auto;font-family:sans-serif">']
    pal = ['#2b6cb0', '#c05621', '#2f855a', '#805ad5', '#b83280', '#0f766e', '#4a5568']
    for k in order:
        y = pos[k][1]; g = base[k]
        s.append(f'<text x="{left-8}" y="{y+4:.1f}" font-size="12" text-anchor="end" fill="{pal[g % len(pal)]}">{short[ids[k]]}</text>')
    for a, b, v, new in merges:
        xa, ya = pos[a]; xb, yb = pos[b]; xn = v
        s.append(f'<path d="M{X_(xa):.1f},{ya:.1f}H{X_(xn):.1f}V{yb:.1f}H{X_(xb):.1f}" fill="none" stroke="currentColor" stroke-opacity=".6"/>')
        pos[new] = (xn, (ya + yb) / 2)
    s.append(f'<text x="{left}" y="{H-8}" font-size="11" fill="currentColor" fill-opacity=".6">0</text><text x="{W-right}" y="{H-8}" font-size="11" text-anchor="end" fill="currentColor" fill-opacity=".6">距離 {maxh:.2f}</text>')
    s.append('</svg>')
    return '\n'.join(s)
with open(os.path.join(HERE, 'tree.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_tree())
print('\n'.join(out))

# 5. sensitivity: drop 場面 (low κ) and compare; group counts 5–7
P('## 5. 確かめ：場面の列を外したとき・群の数を変えたとき')
P()
keep = [j for j, c in enumerate(cols) if not c.startswith('S')]
Xn = [[row[j] for j in keep] for row in X]
ev2, tot2, rowc2, colc2, _, kept2 = ca(Xn, ids, [cols[j] for j in keep])
def corr(a, b):
    ma, mb = sum(a) / len(a), sum(b) / len(b)
    num = sum((x - ma) * (y - mb) for x, y in zip(a, b))
    return num / math.sqrt(sum((x - ma) ** 2 for x in a) * sum((y - mb) ** 2 for y in b))
common = [i for i in kept if i in kept2]
for d in range(3):
    r_ = max((abs(corr([rowc[i][d] for i in common], [rowc2[i][e] for i in common])), e) for e in range(3))
    P(f'- 軸 {d+1}：場面を外した表の軸 {r_[1]+1} と、定義の座標の相関の絶対値 {r_[0]:.2f}（寄与率 {ev2[r_[1]]/tot2*100:.1f}%）')
P()
for k in (5, 6, 7):
    g = cut(merges, len(ids), k)
    grp = {}
    for i in range(len(ids)): grp.setdefault(g[i], []).append(short[ids[i]])
    P(f'- {k} 群：' + ' ／ '.join('・'.join(v) for v in grp.values()))
P()
with open(os.path.join(HERE, 'results.md'), 'w', encoding='utf-8') as f:
    f.write('# 思考の定義を統計で分けた結果（analysis.py が書く。手で直さない）\n\n' + '\n'.join(out) + '\n')
print('\n'.join(out[out.index('## 5. 確かめ：場面の列を外したとき・群の数を変えたとき'):]))

# 6. viewpoint lists (for the page)
P('## 6. 視点ごとの並び（列ごとに、当たる定義。〔½〕は二人の一方だけが付けた升）')
P()
for g, gn in groups.items():
    P(f'### {gn}'); P()
    P('| 列 | 当たる定義（年の順） |'); P('|---|---|')
    for j, c in enumerate(cols):
        if not c.startswith(g): continue
        hits = sorted([i for i in range(len(ids)) if X[i][j] > 0], key=lambda i: year[ids[i]])
        P(f'| {colname[c]} | ' + ('・'.join(short[ids[i]] + ('〔½〕' if X[i][j] < 1 else '') for i in hits) or '（無し）') + ' |')
    P()
with open(os.path.join(HERE, 'results.md'), 'w', encoding='utf-8') as f:
    f.write('# 思考の定義を統計で分けた結果（analysis.py が書く。手で直さない）\n\n' + '\n'.join(out) + '\n')
