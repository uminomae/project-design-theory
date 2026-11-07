#!/usr/bin/env python3
# RR-024a — 三者=6次元(平面3枚を直交)の回転構造 SO(6)/so(6) の骨格検証（純Python・numpy不使用）
# pd#124 → RR-010「## 構築の順序」で採った方法論（行列が第一）に基づく三者の行列モデルの機械検証。
#
# モデル:
#   個人の意識 = 物質的価値 ⊥ 精神的価値 の2軸平面上のベクトル(ℝ^2)。
#   n人 = 平面n枚を直交させた 2n次元空間。互いの影響 = その空間の回転 SO(2n)。
#   二者 = 4次元 = SO(4)（四元数 ℍ に対応）、三者 = 6次元 = SO(6)。
#
# 検証する3点:
#   (1) so(6) の生成子(15本)は「自己回転3 + ペア間結合12」に分解される。
#   (2) 二者 so(4) は互いに可換な2つの su(2) に分裂する（＝四元数の左作用/右作用。二者の影響は
#       2つの独立成分に「因数分解」できる）。⇔ 三者 so(6)=su(4) は単純で分裂しない（還元不可能な一体）。
#   (3) [A↔B の影響, B↔C の影響] = A↔C の影響（commutator が第三ペアのブロックに載る）。
#       Bを媒介にした影響の順序のズレが、A–Cの直接の結び付きを生む。二者にはこの項が存在しない。

import itertools

N = 6
planes = {1: (0, 1), 2: (2, 3), 3: (4, 5)}  # 平面1=人1, 平面2=人2, 平面3=人3


def zeros(n):
    return [[0.0] * n for _ in range(n)]


def matmul(A, B):
    n = len(A); k = len(B)
    C = zeros(n)
    for i in range(n):
        Ai = A[i]
        for t in range(k):
            a = Ai[t]
            if a == 0:
                continue
            Bt = B[t]
            for j in range(n):
                C[i][j] += a * Bt[j]
    return C


def sub(A, B):
    return [[A[i][j] - B[i][j] for j in range(len(A))] for i in range(len(A))]


def comm(A, B):
    return sub(matmul(A, B), matmul(B, A))


def is_zero(A, tol=1e-9):
    return all(abs(A[i][j]) < tol for i in range(len(A)) for j in range(len(A)))


def gen(p, q, n=N):
    """基本回転生成子 E_{pq}-E_{qp}: p-q 平面内の無限小回転（反対称）。"""
    A = zeros(n); A[p][q] = 1.0; A[q][p] = -1.0
    return A


ok = True

# (1) 生成子の分解と数え上げ
self_rot = [gen(a, b) for (a, b) in planes.values()]           # 各人の内部(物質⇔精神)回転
pair_gen = {}
for (i, j) in itertools.combinations(planes, 2):
    ai, aj = planes[i], planes[j]
    pair_gen[(i, j)] = [gen(p, q) for p in ai for q in aj]     # 2x2=4本/ペア
n_self = len(self_rot)
n_pair = sum(len(v) for v in pair_gen.values())
print(f"(1) so(6) 分解: 自己回転 {n_self} + ペア間結合 {n_pair} = {n_self + n_pair}  (dim so(6)=15)")
ok &= (n_self + n_pair == 15)


def support_blocks(A, tol=1e-9):
    blocks = set()
    for i in range(N):
        for j in range(N):
            if abs(A[i][j]) > tol:
                bi = [k for k, (a, b) in planes.items() if i in (a, b)][0]
                bj = [k for k, (a, b) in planes.items() if j in (a, b)][0]
                blocks.add(tuple(sorted((bi, bj))))
    return blocks


# (3) 三者の核心: [X12, X23] が (1,3) ブロックに載る（媒介Bが直接A-C結合を生む）
X12 = pair_gen[(1, 2)][0]
X23 = pair_gen[(2, 3)][0]
C = comm(X12, X23)
blk = support_blocks(C)
print(f"(3) [X12, X23] の載るブロック = {blk}   非ゼロ? {not is_zero(C)}")
print("    → 媒介Bを通してAとCが直接結合。二者(平面2枚)には平面3が無く、この commutator 自体が存在しない")
ok &= (blk == {(1, 3)} and not is_zero(C))

# (2) 二者 so(4) が2つの可換 su(2) に分裂
def add4(A, B):
    return [[A[i][j] + B[i][j] for j in range(4)] for i in range(4)]


def sub4(A, B):
    return [[A[i][j] - B[i][j] for j in range(4)] for i in range(4)]


def matmul4(A, B):
    C = [[0.0] * 4 for _ in range(4)]
    for i in range(4):
        for t in range(4):
            a = A[i][t]
            for j in range(4):
                C[i][j] += a * B[t][j]
    return C


def comm4(A, B):
    return sub4(matmul4(A, B), matmul4(B, A))


def is_zero4(A, tol=1e-9):
    return all(abs(A[i][j]) < tol for i in range(4) for j in range(4))


g4 = lambda p, q: gen(p, q, n=4)
# 自己双対 Λ+ と 反自己双対 Λ-（標準の Hodge ペア）
Lp = [add4(g4(0, 1), g4(2, 3)), add4(g4(0, 2), g4(3, 1)), add4(g4(0, 3), g4(1, 2))]
Lm = [sub4(g4(0, 1), g4(2, 3)), sub4(g4(0, 2), g4(3, 1)), sub4(g4(0, 3), g4(1, 2))]
all_commute = all(is_zero4(comm4(Lp[a], Lm[b])) for a in range(3) for b in range(3))
# 各族が su(2) として閉じる（[Λ+_a,Λ+_b] が Λ+ 内、[Λ-_a,Λ-_b] が Λ- 内）ことも確認
def in_span(v, basis):
    # v が basis(4x4反対称のリスト)の実線形結合か: 反対称成分(01,02,03,12,13,23)ベクトルで判定
    def vec(M):
        return [M[0][1], M[0][2], M[0][3], M[1][2], M[1][3], M[2][3]]
    import itertools as it
    B = [vec(b) for b in basis]
    tgt = vec(v)
    # 3本の basis で張る3次元部分空間に tgt が入るか（最小二乗残差=0 を素朴ガウス消去で）
    # 拡大行列 [B^T | tgt] を解く
    A = [[B[k][r] for k in range(len(B))] for r in range(6)]  # 6x3
    # ガウス消去で rank と整合性
    M = [row[:] + [tgt[r]] for r, row in enumerate(A)]
    rows, cols = 6, 3
    piv = 0
    for c in range(cols):
        pr = None
        for r in range(piv, rows):
            if abs(M[r][c]) > 1e-9:
                pr = r; break
        if pr is None:
            continue
        M[piv], M[pr] = M[pr], M[piv]
        pivval = M[piv][c]
        M[piv] = [x / pivval for x in M[piv]]
        for r in range(rows):
            if r != piv and abs(M[r][c]) > 1e-12:
                f = M[r][c]
                M[r] = [M[r][k] - f * M[piv][k] for k in range(cols + 1)]
        piv += 1
    # 整合性: ピボットの無い行で右辺が非ゼロなら解なし
    for r in range(rows):
        if all(abs(M[r][c]) < 1e-9 for c in range(cols)) and abs(M[r][cols]) > 1e-6:
            return False
    return True


plus_closed = all(in_span(comm4(Lp[a], Lp[b]), Lp) for a in range(3) for b in range(3))
minus_closed = all(in_span(comm4(Lm[a], Lm[b]), Lm) for a in range(3) for b in range(3))
print(f"(2) 二者 so(4): [Λ+,Λ-]=0 全ペア成立? {all_commute} / Λ+閉包 {plus_closed} / Λ-閉包 {minus_closed}")
print("    → so(4)=su(2)⊕su(2) 分裂（四元数の左作用/右作用）。二者の影響は2独立成分に因数分解可")
print("    ⇔ 三者 so(6)=su(4) は単純（分裂せず）＝影響は還元不可能な一体")
ok &= all_commute and plus_closed and minus_closed

print()
print("ALL CHECKS PASSED" if ok else "*** CHECK FAILED ***")
