# QB verification: sedenions (16-dim, Cayley-Dickson doubling of octonions) have ZERO DIVISORS.
# i.e. exist nonzero x,y with x*y = 0. This is a standard fact (Frobenius/Hurwitz theorem's
# converse consequence: R,C,H,O are the ONLY normed division algebras; doubling further breaks
# alternativity AND introduces zero divisors). Verify numerically with a known example.
import math

def qmul(a,b):
    a0,a1,a2,a3=a; b0,b1,b2,b3=b
    return (a0*b0-a1*b1-a2*b2-a3*b3,
            a0*b1+a1*b0+a2*b3-a3*b2,
            a0*b2-a1*b3+a2*b0+a3*b1,
            a0*b3+a1*b2-a2*b1+a3*b0)
def qconj(a): return (a[0],-a[1],-a[2],-a[3])

def omul(x,y):
    a,b=x[:4],x[4:]; c,d=y[:4],y[4:]
    ac=qmul(a,c); db=qmul(qconj(d),b); da=qmul(d,a); bc=qmul(b,qconj(c))
    left=tuple(ac[i]-db[i] for i in range(4))
    right=tuple(da[i]+bc[i] for i in range(4))
    return left+right
def oconj(x):
    return tuple(-c for c in x[:0]) # unused

def oconj8(x):
    return (x[0],) + tuple(-c for c in x[1:])

def smul(x,y):
    # Cayley-Dickson doubling of octonions -> sedenions (16-dim)
    a,b=x[:8],x[8:]; c,d=y[:8],y[8:]
    ac=omul(a,c); db=omul(oconj8(d),b); da=omul(d,a); bc=omul(b,oconj8(c))
    left=tuple(ac[i]-db[i] for i in range(8))
    right=tuple(da[i]+bc[i] for i in range(8))
    return left+right

def norm(x): return math.sqrt(sum(c*c for c in x))

def e(i,n=16):
    v=[0.0]*n; v[i]=1.0; return tuple(v)

print("=== Sedenion (16-dim) zero-divisor check: classic example (e1+e10)*(e5-e14)=? ===")
# Well-known example from literature (e.g. Moreno 1997 / standard basis):
# (e1 + e10) * (e5 - e14) = 0  (indices depend on basis convention; we search numerically instead)
x = tuple(a+b for a,b in zip(e(1),e(10)))
y = tuple(a-b for a,b in zip(e(5),e(14)))
prod = smul(x,y)
print(f"  |x|={norm(x):.4f} |y|={norm(y):.4f} |x*y|={norm(prod):.6e}")

if norm(prod) > 1e-9:
    print("  (basis convention mismatch — doing brute-force search for a zero-divisor pair)")
    import itertools, random
    random.seed(0)
    found=False
    basis=[e(i) for i in range(16)]
    # search small combinations of two basis vectors on each side
    for i1 in range(16):
        for i2 in range(i1+1,16):
            for s1 in (1,-1):
                xx = tuple(a+s1*b for a,b in zip(basis[i1],basis[i2]))
                for i3 in range(16):
                    for i4 in range(i3+1,16):
                        for s2 in (1,-1):
                            yy = tuple(a+s2*b for a,b in zip(basis[i3],basis[i4]))
                            p = smul(xx,yy)
                            if norm(p) < 1e-9 and norm(xx)>1e-9 and norm(yy)>1e-9:
                                print(f"  FOUND zero divisor: x=e{i1}{'+' if s1>0 else '-'}e{i2}, y=e{i3}{'+' if s2>0 else '-'}e{i4}, |x*y|={norm(p):.2e}")
                                found=True
                                break
                        if found: break
                    if found: break
                if found: break
            if found: break
        if found: break
    print("  zero divisor exists among sedenions:", found)
else:
    print("  -> ZERO DIVISOR CONFIRMED: two nonzero sedenions multiply to (numerically) zero.")

print()
print("=== control: same search restricted to octonions (8-dim) should find NONE ===")
def e8(i):
    v=[0.0]*8; v[i]=1.0; return tuple(v)
found8=False
for i1 in range(8):
    for i2 in range(i1+1,8):
        for s1 in (1,-1):
            xx=tuple(a+s1*b for a,b in zip(e8(i1),e8(i2)))
            for i3 in range(8):
                for i4 in range(i3+1,8):
                    for s2 in (1,-1):
                        yy=tuple(a+s2*b for a,b in zip(e8(i3),e8(i4)))
                        p=omul(xx,yy)
                        if norm(p)<1e-9 and norm(xx)>1e-9 and norm(yy)>1e-9:
                            found8=True
print("  zero divisor found among octonions (should be False):", found8)
