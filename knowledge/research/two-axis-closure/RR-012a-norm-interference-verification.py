# T-layer machine verification for RR-012 (pd#115 Q8)
# Question (pjdhiro): norm preservation |xy|=|x||y| feels like "amplitude
# amplification by phase (resonance/interference)". But interference (phase
# alignment changing amplitude) is an ADDITIVE phenomenon, while norm
# preservation is a MULTIPLICATIVE property. This script separates the two
# layers and shows how they connect.
#
# (a) Unit-phase multiplication preserves norm (rotation keeps each magnitude).
# (b) Interference lives in the SUM: |a+b|^2 = |a|^2+|b|^2+2|a||b|cos(dtheta).
# (c) Norm-preserving rotation is the DIAL that sets dtheta and thus tunes the
#     sum's amplitude between destructive ||a|-|b|| and constructive |a|+|b|.
# (d) Quaternion norm-multiplicativity |xy|=|x||y| (Hurwitz composition) holds
#     and is a product-side geometry, a different operation from the additive sum.
import math
import cmath
import random

random.seed(0)


def report(msg):
    print(msg)


report("=== Q8: norm preservation (product) vs interference (sum) ===\n")

report("(a) e^{i*phi} * a preserves |a| (rotation keeps magnitude)")
for _ in range(3):
    a = complex(random.gauss(0, 1), random.gauss(0, 1))
    phi = random.uniform(0, 2 * math.pi)
    ra = cmath.exp(1j * phi) * a
    report(f"    |a|={abs(a):.4f}  |e^i*phi*a|={abs(ra):.4f}  diff={abs(abs(a)-abs(ra)):.1e}")

report("\n(b) sum a+b: |a+b|^2 = |a|^2+|b|^2 + 2|a||b|cos(dtheta)  (varies with phase)")
a = complex(1, 0)
b = complex(1, 0)
for dth, tag in [(0.0, "constructive"), (math.pi / 2, "orthogonal (cross term 0)"), (math.pi, "destructive")]:
    s = a + b * cmath.exp(1j * dth)
    report(f"    dtheta={dth:.4f}: |a+b|={abs(s):.4f}  cross 2cos={2*math.cos(dth):+.3f}  {tag}")

report("\n(c) rotation (norm-preserving) is the interference DIAL")
a = complex(1, 0)
b = complex(0.7, 0)
amps = [abs(a + b * cmath.exp(1j * (2 * math.pi * k / 8))) for k in range(9)]
report(
    f"    |a|={abs(a)} |b|={abs(b)} constant. sum amplitude "
    f"min={min(amps):.4f}(=||a|-|b||={abs(abs(a)-abs(b)):.4f}) "
    f"max={max(amps):.4f}(=|a|+|b|={abs(a)+abs(b):.4f})"
)


def qmul(x, y):
    w1, x1, y1, z1 = x
    w2, x2, y2, z2 = y
    return (
        w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2,
        w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
        w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
        w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2,
    )


def qnorm(q):
    return math.sqrt(sum(c * c for c in q))


report("\n(d) quaternion |xy|=|x||y| (Hurwitz composition, product-side geometry)")
ok = True
for _ in range(3):
    x = tuple(random.gauss(0, 1) for _ in range(4))
    y = tuple(random.gauss(0, 1) for _ in range(4))
    lhs = qnorm(qmul(x, y))
    rhs = qnorm(x) * qnorm(y)
    ok = ok and abs(lhs - rhs) < 1e-9
    report(f"    |xy|={lhs:.4f}  |x||y|={rhs:.4f}  diff={abs(lhs-rhs):.1e}")

report("\n=== conclusion ===")
report("Norm preservation (Q8, product) = rotation keeps each actor's magnitude; not amplification itself.")
report("Amplification/interference = additive cross term 2|a||b|cos(dtheta) living in the sum (superposition).")
report("Bridge: norm-preserving rotation sets dtheta, which tunes the sum's interference -> rotation is the dial, interference the output.")
report("ALL CHECKS PASSED" if ok else "CHECK FAILED")
