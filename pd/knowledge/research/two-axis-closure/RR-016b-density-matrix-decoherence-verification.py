"""
検証: 密度行列の対角(実・確率)成分と非対角(複素・コヒーレンス)成分。
簡略デコヒーレンスモデルで非対角要素が減衰し、対角(実数の確率分布)だけが残ることを確認する。
"""
import cmath, random, math

random.seed(1)

# 2準位系（qubit）を例に: |psi> = a|0> + b|1>, a,b 複素
a = complex(0.6, 0.3)
b = complex(0.4, -0.2)
norm = (abs(a)**2 + abs(b)**2) ** 0.5
a, b = a/norm, b/norm

# 密度行列 rho = |psi><psi|
rho = [[a*a.conjugate(), a*b.conjugate()],
       [b*a.conjugate(), b*b.conjugate()]]

print("純粋状態の密度行列:")
for row in rho:
    print(["{:.3f}".format(x) for x in row])

print("\n対角成分 (populations, 実数=確率):")
print(" rho_00 =", rho[0][0], " -> imag~0?", abs(rho[0][0].imag) < 1e-9)
print(" rho_11 =", rho[1][1], " -> imag~0?", abs(rho[1][1].imag) < 1e-9)
print(" sum(diag) == 1?", abs(rho[0][0]+rho[1][1] - 1) < 1e-9)

print("\n非対角成分 (coherence, 一般に複素):")
print(" rho_01 =", rho[0][1])
print(" rho_10 =", rho[1][0])
print(" rho_01 == conj(rho_10)?", abs(rho[0][1] - rho[1][0].conjugate()) < 1e-9)

# 簡易デコヒーレンスモデル: 非対角成分を指数減衰させる(対角はそのまま)
print("\nデコヒーレンス過程(非対角減衰)のシミュレーション:")
for t in [0, 1, 2, 5, 10]:
    decay = math.exp(-0.5*t)
    rho_t_01 = rho[0][1]*decay
    print(f" t={t}: |rho_01(t)|={abs(rho_t_01):.4f}  (対角 rho_00={rho[0][0].real:.4f}, rho_11={rho[1][1].real:.4f} は不変)")

print("\n=> 対角(実数・確率)は保存され、非対角(複素コヒーレンス)だけが時間とともに0に近づく。")
print("   極限で rho は対角行列(実数の確率分布)のみが残る = 「古典的で共有可能な現実」に対応する構造。")
