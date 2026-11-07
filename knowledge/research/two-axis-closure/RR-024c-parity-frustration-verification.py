#!/usr/bin/env python3
# RR-024c — 偶奇の膠着＝幾何学的フラストレーション／グラフ二部性の機械検証（純Python）
# 仮説α（偶数=対立・膠着／奇数=決着・多数決可）に、行列/回転側の厳密な機構を与える。
#
# モデル: n人がリング状に並び、隣どうしは「反対を向きたい」(対立志向)。
#   各人の姿勢 = 角度 theta_i。反発エネルギー E = sum_i cos(theta_i - theta_{i+1})
#   (cos=-1 が真逆=最も対立が満たされる)。リング基底状態は一様ねじれ theta_i=i*q,
#   周期条件 n*q=2*pi*m。1辺あたり最小エネルギー = min_m cos(2*pi*m/n)。
#
# 確認する事実:
#   偶数 n: 交互 +/- が全辺で成立(サイクル C_n は二部) → 1辺 -1.0(完全な真逆) → 二陣営が安定(50:50)。
#   奇数 n: 交互彩色が閉じない(奇サイクルは二部でない=フラストレーション) → 最小 -cos(pi/n) > -1、
#           基底状態は左右巻きの2重縮退 → 二陣営に落ち着けず対称な妥協へ(膠着が構造上不可能)。
#
# 2つの前提条件(この効果が出る条件)も明記:
#   (C1) 結合が「反対を向きたい(対立志向)」であること。協調志向なら偶奇に依らず全員一致。
#   (C2) リング状(疎)のトポロジー。完全グラフ(全員が全員と対立)は n>=3 で偶奇に依らずフラストレーション
#        (K_n は n>=3 で二部でない)。

import math

TOL = 1e-12
ok = True


def cycle_is_bipartite(n):
    # サイクル C_n が二部 ⇔ n 偶数（奇サイクルは二部でない）
    return n % 2 == 0


def min_bond_energy(n):
    # 許される pitch q=2*pi*m/n の中で cos(q) を最小化
    return min(math.cos(2 * math.pi * m / n) for m in range(n))


def ground_degeneracy(n):
    minv = min_bond_energy(n)
    return sum(1 for m in range(n) if abs(math.cos(2 * math.pi * m / n) - minv) < TOL)


print(f"{'n':>2} {'偶奇':>4} {'二部(2陣営可)':>12} {'最小1辺E':>10} {'縮退':>4} {'解釈':>30}")
print("-" * 84)
for n in range(2, 9):
    bip = cycle_is_bipartite(n)
    e = min_bond_energy(n)
    degen = ground_degeneracy(n)
    parity = "偶" if n % 2 == 0 else "奇"
    if n % 2 == 0:
        # 偶数: 二部・完全な真逆(-1)・Neel状態
        ok &= bip and abs(e - (-1.0)) < 1e-9
        interp = "真逆で安定=二陣営(対立が固定・50:50可)"
    else:
        # 奇数: 非二部・-cos(pi/n)>-1・2重縮退(フラストレーション)
        expected = -math.cos(math.pi / n)
        ok &= (not bip) and abs(e - expected) < 1e-9 and degen == 2
        interp = "真逆不可=フラストレーション(妥協・膠着不能)"
    print(f"{n:>2} {parity:>4} {str(bip):>12} {e:>10.4f} {degen:>4}   {interp}")

print()
print("前提条件(この偶奇効果が出る条件・組織解釈つき):")
print("  C1 対立志向の結合 = 競争的相互依存(Deutsch)。協調的なら偶奇無関係で全員一致。")
print("  C2 リング/疎トポロジー。完全グラフ(全員が全員と対立)は n>=3 で偶奇に依らずフラストレーション。")
print("  → 『二陣営に割れる』⇔ 対立グラフが二部 ⇔ 奇サイクルが無い（構造均衡理論 Harary の核）。")
print()
print("ALL CHECKS PASSED" if ok else "*** CHECK FAILED ***")
