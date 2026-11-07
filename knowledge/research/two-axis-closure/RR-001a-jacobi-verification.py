# T-layer machine verification for RR-001 (pd#118)
# Build H and O via Cayley-Dickson from R (convention-independent route),
# then check Jacobi identity for the cross product x*y = Im(xy) on Im(H) (3-dim)
# and Im(O) (7-dim).
from fractions import Fraction


def cd_mult(mul, conj):
    """Given mult/conj on algebra A, return mult/conj on A' = A + A (Cayley-Dickson).
    (a,b)(c,d) = (ac - d* b, da + b c*)  [Baez convention eq. (2.2)-ish]
    """
    def mul2(x, y):
        a, b = x
        c, d = y
        return (sub(mul(a, c), mul(conj(d), b)), add(mul(d, a), mul(b, conj(c))))

    def conj2(x):
        a, b = x
        return (conj(a), neg(b))

    return mul2, conj2


# scalars (level 0) = Fractions
def add(x, y):
    if isinstance(x, tuple):
        return (add(x[0], y[0]), add(x[1], y[1]))
    return x + y


def sub(x, y):
    if isinstance(x, tuple):
        return (sub(x[0], y[0]), sub(x[1], y[1]))
    return x - y


def neg(x):
    if isinstance(x, tuple):
        return (neg(x[0]), neg(x[1]))
    return -x


def mul0(x, y):
    return x * y


def conj0(x):
    return x


def flatten(x):
    if isinstance(x, tuple):
        return flatten(x[0]) + flatten(x[1])
    return [x]


def build(dim_levels):
    mul, conj = mul0, conj0
    for _ in range(dim_levels):
        mul, conj = cd_mult(mul, conj)
    return mul, conj


def basis(n_levels):
    """Return basis elements as nested tuples for algebra of dim 2**n_levels."""
    dim = 2 ** n_levels

    def unflatten(vec, lv):
        if lv == 0:
            return vec[0]
        half = len(vec) // 2
        return (unflatten(vec[:half], lv - 1), unflatten(vec[half:], lv - 1))

    out = []
    for i in range(dim):
        v = [Fraction(0)] * dim
        v[i] = Fraction(1)
        out.append(unflatten(v, n_levels))
    return out


def cross(mul, x, y, n_levels):
    """x*y = Im(xy) for imaginary x,y: subtract real part."""
    xy = mul(x, y)
    f = flatten(xy)
    f[0] = Fraction(0)  # drop real part

    def unflatten(vec, lv):
        if lv == 0:
            return vec[0]
        half = len(vec) // 2
        return (unflatten(vec[:half], lv - 1), unflatten(vec[half:], lv - 1))

    return unflatten(f, n_levels)


def jacobi(mul, a, b, c, n_levels):
    t1 = cross(mul, a, cross(mul, b, c, n_levels), n_levels)
    t2 = cross(mul, b, cross(mul, c, a, n_levels), n_levels)
    t3 = cross(mul, c, cross(mul, a, b, n_levels), n_levels)
    return flatten(add(add(t1, t2), t3))


def run(n_levels, name):
    mul, _ = build(n_levels)
    es = basis(n_levels)
    imag = es[1:]  # imaginary units
    worst = None
    fails = 0
    total = 0
    n = len(imag)
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                total += 1
                J = jacobi(mul, imag[i], imag[j], imag[k], n_levels)
                if any(v != 0 for v in J):
                    fails += 1
                    if worst is None:
                        worst = (i + 1, j + 1, k + 1, J)
    print(f"{name}: imaginary dim={n}, triples tested={total}, Jacobi failures={fails}")
    if worst:
        i, j, k, J = worst
        print(f"  counterexample: (e{i},e{j},e{k}) -> J = {[str(v) for v in J]}")


# sanity: quaternion imaginary part (3-dim cross product) must satisfy Jacobi
run(2, "H (3-dim cross product = so(3))")
# octonion imaginary part (7-dim cross product)
run(3, "O (7-dim cross product)")


# --- S(2,3,7) / associativity verification (RR-001 「新結果」) ---
def verify_steiner():
    from collections import Counter
    mul, _ = build(3)
    es = basis(3)
    imag = es[1:]
    passing = []
    for i in range(7):
        for j in range(i + 1, 7):
            for k in range(j + 1, 7):
                J = jacobi(mul, imag[i], imag[j], imag[k], 3)
                if all(v == 0 for v in J):
                    passing.append((i + 1, j + 1, k + 1))
    print("Jacobi-passing triples:", passing)
    pairs = Counter()
    for (a, b, c) in passing:
        pairs[(a, b)] += 1
        pairs[(a, c)] += 1
        pairs[(b, c)] += 1
    is_steiner = len(pairs) == 21 and all(v == 1 for v in pairs.values())
    print("covers all 21 pairs exactly once (Steiner S(2,3,7)):", is_steiner)
    pts = Counter(p for t in passing for p in t)
    print("each point in exactly 3 triples:", all(v == 3 for v in pts.values()))

    def assoc(i, j, k):
        l = mul(mul(imag[i - 1], imag[j - 1]), imag[k - 1])
        r = mul(imag[i - 1], mul(imag[j - 1], imag[k - 1]))
        return all(v == 0 for v in flatten(sub(l, r)))

    print("all passing triples associative:", all(assoc(*t) for t in passing))
    print("failing example (1,2,4) associative:", assoc(1, 2, 4))


verify_steiner()
