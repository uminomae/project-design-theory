"""
検証: 「実部/虚部の分解は基底(位相基準)依存でゲージ的・物理的でない」の機械確認。
標準ライブラリのみ（cmath/random）で実装。
"""
import cmath, random

random.seed(0)

def random_state(dim=4):
    v = [complex(random.gauss(0,1), random.gauss(0,1)) for _ in range(dim)]
    norm = sum(abs(c)**2 for c in v) ** 0.5
    return [c/norm for c in v]

def inner(a, b):
    # <a|b> = sum conj(a_i) b_i
    return sum(x.conjugate()*y for x, y in zip(a, b))

psi = random_state()
phase = complex(0, 1)  # i = 90度のグローバル位相
psi2 = [phase*c for c in psi]

probs1 = [abs(c)**2 for c in psi]
probs2 = [abs(c)**2 for c in psi2]
print("CHECK1: |psi_k|^2 vs |i*psi_k|^2 identical? ->", all(abs(p1-p2) < 1e-12 for p1,p2 in zip(probs1, probs2)))

print("\nCHECK1b: random-basis overlap probability |<b|psi>|^2 identical under global phase")
for _ in range(5):
    b = random_state()
    p1 = abs(inner(b, psi))**2
    p2 = abs(inner(b, psi2))**2
    print(f"  p1={p1:.6f} p2={p2:.6f} equal? {abs(p1-p2)<1e-9}")

print("\nCHECK2: Re/Im components rotate entirely under global phase (basis-dependence of the split)")
re1 = [c.real for c in psi]
im1 = [c.imag for c in psi]
re2 = [c.real for c in psi2]
im2 = [c.imag for c in psi2]
print("Re(psi)   =", [round(x,3) for x in re1])
print("Im(psi)   =", [round(x,3) for x in im1])
print("Re(i*psi) =", [round(x,3) for x in re2])
print("Im(i*psi) =", [round(x,3) for x in im2])
match_a = all(abs(a - (-b)) < 1e-9 for a,b in zip(re2, im1))
match_b = all(abs(a - b) < 1e-9 for a,b in zip(im2, re1))
print("Re(i*psi) == -Im(psi) for all components?", match_a)
print("Im(i*psi) ==  Re(psi) for all components?", match_b)
print("=> 実部だったものが虚部に、虚部だったものが実部になる(役割が入れ替わる)。")
print("   すなわち「どれが実部でどれが虚部か」は、グローバル位相という物理的に無内容な自由度の選び方に依存する。")

print("\nCHECK3: expectation value of a Hermitian operator is real & phase-invariant")
dim = 4
# ランダムエルミート行列を作る
A = [[complex(random.gauss(0,1), random.gauss(0,1)) for _ in range(dim)] for _ in range(dim)]
H = [[ (A[i][j] + A[j][i].conjugate())/2 for j in range(dim)] for i in range(dim)]

def matvec(M, v):
    return [sum(M[i][j]*v[j] for j in range(len(v))) for i in range(len(M))]

Hpsi = matvec(H, psi)
Hpsi2 = matvec(H, psi2)
exp1 = inner(psi, Hpsi)
exp2 = inner(psi2, Hpsi2)
print("  <psi|H|psi>  =", exp1, " imag~0?", abs(exp1.imag) < 1e-9)
print("  <psi2|H|psi2>=", exp2, " imag~0?", abs(exp2.imag) < 1e-9)
print("  exp1 == exp2 (phase-invariant)?", abs(exp1-exp2) < 1e-9)
