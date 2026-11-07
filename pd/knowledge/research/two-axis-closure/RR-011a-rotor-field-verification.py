# T-layer machine verification for RR-011 (pd#115 Q9a-d)
# 1) One-sided action qv leaks into the real axis (the shared field);
#    the sandwich q v q^-1 keeps the field intact and preserves |v|.
# 2) q and -q give the same rotation via sandwich (double cover entrance);
#    the one-sided world distinguishes them.
# 3) 360-degree rotation: the situation (vector, sandwich) returns;
#    the carrier (one-sided) picks up -1. 720 degrees returns both.
import math
import random

random.seed(42)


def qmul(a, b):
    w1, x1, y1, z1 = a
    w2, x2, y2, z2 = b
    return (w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2,
            w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
            w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
            w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2)


def qconj(a):
    return (a[0], -a[1], -a[2], -a[3])


def qneg(a):
    return tuple(-c for c in a)


def norm(a):
    return math.sqrt(sum(c * c for c in a))


def close(a, b, tol=1e-12):
    return all(abs(x - y) < tol for x, y in zip(a, b))


def rand_unit_q():
    q = [random.gauss(0, 1) for _ in range(4)]
    n = norm(q)
    return tuple(c / n for c in q)


def rand_pure():
    return (0.0, random.gauss(0, 1), random.gauss(0, 1), random.gauss(0, 1))


def main():
    print("=== 1: one-sided qv leaks into Re (field); sandwich does not ===")
    for t in range(3):
        q, v = rand_unit_q(), rand_pure()
        one = qmul(q, v)
        sand = qmul(qmul(q, v), qconj(q))
        assert abs(one[0]) > 1e-3, "expected generic leak"
        assert abs(sand[0]) < 1e-12, "sandwich must keep Re = 0"
        assert abs(norm(sand) - norm(v)) < 1e-12, "norm must be preserved"
        print(f" trial{t}: Re(qv)={one[0]:+.4f}  Re(qvq^-1)={sand[0]:+.1e}  |v| kept")

    print("=== 2: sandwich identifies q and -q; one-sided does not ===")
    q, v = rand_unit_q(), rand_pure()
    s1 = qmul(qmul(q, v), qconj(q))
    s2 = qmul(qmul(qneg(q), v), qconj(qneg(q)))
    assert close(s1, s2)
    assert not close(qmul(q, v), qmul(qneg(q), v))
    print(" q v q^-1 == (-q) v (-q)^-1 : True / qv == (-q)v : False")

    print("=== 3: 360 vs 720 degrees ===")
    q360 = (math.cos(math.pi), math.sin(math.pi), 0.0, 0.0)  # spatial 360deg -> q = -1
    v0 = (0.0, 0.3, -0.7, 0.5)
    assert close(qmul(qmul(q360, v0), qconj(q360)), v0)      # situation returns
    assert close(qmul(q360, v0), qneg(v0))                    # carrier flips sign
    q720 = qmul(q360, q360)
    assert abs(q720[0] - 1.0) < 1e-12                          # +1: everything returns
    print(" 360deg: sandwich returns v; one-sided returns -v. 720deg: q = +1")
    print("ALL CHECKS PASSED")


if __name__ == "__main__":
    main()
