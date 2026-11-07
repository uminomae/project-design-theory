#!/usr/bin/env python3
# RR-024b — 2〜8名の回転構造 SO(2n)/so(2n) の骨格を機械検証（純Python・numpy不使用）
# 方法論（RR-010「構築の順序」）どおり「行列（回転）を第一」に、人数 n=2..8 を通す。
#
# モデル: 個人=物質⊥精神の2軸ベクトル。n人=平面n枚を直交させた 2n 次元。影響=回転 SO(2n)。
#
# 各 n について確認/計上する:
#   dim so(2n) = n(2n-1)、生成子の分解 = 自己回転 n + ペア間結合 2n(n-1)。
#   可除代数（掛け算も割り算もできる数の体系）が 2n 次元に在るか = 2n ∈ {1,2,4,8}（Hurwitz）。
#   偶奇（チームを 50:50 の二陣営に割れるか）。
#   ペア数 C(n,2)（「掛け算で見た関係の本数」＝抱える負荷）。
#   三角形の自己閉包: n>=3 で [X_{1,2}, X_{2,3}] が (1,3) ブロックに載り非ゼロか
#     （媒介を経由する影響の非可換性が、直接は触れていない両端を結ぶ）。
#
# so(2n) の「単純性（一枚岩・バラせない）」は Cartan 分類の標準事実として扱う（計算では確認しない）:
#   so(3)=A1 単純 / so(4)=D2=su(2)+su(2) は半単純だが【非単純＝唯一の例外】/ so(6)=A3 単純 /
#   so(2n) (2n>=6) は Bn/Dn 型で単純。→ n=2 だけがバラける、n>=3 は一枚岩。

from math import comb


def zeros(m):
    return [[0.0] * m for _ in range(m)]


def matmul(A, B):
    m = len(A); k = len(B)
    C = zeros(m)
    for i in range(m):
        Ai = A[i]
        for t in range(k):
            a = Ai[t]
            if a == 0:
                continue
            Bt = B[t]
            for j in range(m):
                C[i][j] += a * Bt[j]
    return C


def comm(A, B):
    P = matmul(A, B); Q = matmul(B, A)
    return [[P[i][j] - Q[i][j] for j in range(len(A))] for i in range(len(A))]


def is_zero(A, tol=1e-9):
    return all(abs(A[i][j]) < tol for i in range(len(A)) for j in range(len(A)))


def gen(p, q, m):
    A = zeros(m); A[p][q] = 1.0; A[q][p] = -1.0
    return A


def triangle_closure(n):
    """[X_{1<->2}, X_{2<->3}] が (人1,人3) のブロックに載り非ゼロか。"""
    m = 2 * n
    P = {k: (2 * (k - 1), 2 * (k - 1) + 1) for k in range(1, n + 1)}  # 人k -> 座標2本
    X12 = gen(P[1][0], P[2][0], m)   # 人1の軸 <-> 人2の軸
    X23 = gen(P[2][0], P[3][0], m)   # 人2の軸 <-> 人3の軸
    C = comm(X12, X23)
    blocks = set()
    for i in range(m):
        for j in range(m):
            if abs(C[i][j]) > 1e-9:
                bi = i // 2 + 1; bj = j // 2 + 1
                blocks.add(tuple(sorted((bi, bj))))
    return (not is_zero(C)), blocks


ok = True
print(f"{'n':>2} {'2n':>3} {'dim so(2n)':>10} {'自己':>4} {'ペア結合':>7} {'可除代数':>10} "
      f"{'単純(一枚岩)':>12} {'偶奇':>4} {'ペア数':>5} {'三角自己閉包':>14}")
print("-" * 92)
for n in range(2, 9):
    m = 2 * n
    dim = n * (2 * n - 1)
    self_g = n
    pair_g = 2 * n * (n - 1)
    ok &= (self_g + pair_g == dim)
    div = {1: "ℝ", 2: "ℂ", 4: "ℍ", 8: "𝕆"}.get(m, "—（無）")
    simple = "半単純(分裂)" if n == 2 else "単純"
    parity = "偶" if n % 2 == 0 else "奇"
    split5050 = "50:50可" if n % 2 == 0 else "50:50不可"
    pairs = comb(n, 2)
    if n >= 3:
        nz, blks = triangle_closure(n)
        tri = f"○ {sorted(blks)}"
        ok &= (nz and blks == {(1, 3)})
    else:
        tri = "—(第三なし)"
    print(f"{n:>2} {m:>3} {dim:>10} {self_g:>4} {pair_g:>7} {div:>10} "
          f"{simple:>12} {parity:>4}({split5050}) {pairs:>5} {tri:>14}")

print()
print("要点:")
print(" ・鋭い質的転換は 2→3 の一回だけ: so(4) はバラける(2つの独立su(2)) → so(6) 以降は単純(一枚岩)。")
print(" ・可除代数(数の体系)が立つのは 2n∈{2,4,8} = n∈{1,2,4}。3,5,6,7,8 は行列でしか書けない(回転は健全)。")
print(" ・偶奇: 偶数(2,4,6,8)は二陣営50:50に割れる=膠着の余地。奇数(3,5,7)は割れない=非膠着。※単なるパリティ。")
print(" ・ペア数 C(n,2) は二次で増える(3→3,7→21)=掛け算で見た関係の本数=抱える負荷。")
print()
print("ALL CHECKS PASSED" if ok else "*** CHECK FAILED ***")
