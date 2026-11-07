import random, math
def qmul(a,b):
    w1,x1,y1,z1=a; w2,x2,y2,z2=b
    return (w1*w2-x1*x2-y1*y2-z1*z2, w1*x2+x1*w2+y1*z2-z1*y2,
            w1*y2-x1*z2+y1*w2+z1*x2, w1*z2+x1*y2-y1*x2+z1*w2)
def qnorm(a): return math.sqrt(sum(c*c for c in a))
def qinv(a):
    n2=sum(c*c for c in a); return tuple((c if i==0 else -c)/n2 for i,c in enumerate(a))
def scale(a,k): return tuple(k*c for c in a)
def unit(a): return scale(a,1.0/qnorm(a))
random.seed(11)
R=lambda:(random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2))
N=2000

# (1) unit sphere: closed under mult and inverse; any other radius shell is NOT closed
ok=all(abs(qnorm(qmul(unit(R()),unit(R())))-1.0)<1e-12 and abs(qnorm(qinv(unit(R())))-1.0)<1e-12 for _ in range(N))
print(f"(1) S3 closed under mult & inverse: {ok}")
for r in (0.5,2.0):
    a,b=scale(unit(R()),r),scale(unit(R()),r)
    print(f"    shell r={r}: |xy|={qnorm(qmul(a,b)):.3f} (leaves shell unless r=1: r^2={r*r})")

# (2) sandwich is scale-invariant: qvq^-1 == (q/|q|) v (q/|q|)^-1, and preserves |v|, for ANY |q|
worst=0.0; nworst=0.0
for _ in range(N):
    q=scale(unit(R()), random.uniform(0.1,5.0)); v=R()
    s1=qmul(qmul(q,v),qinv(q)); u=unit(q); s2=qmul(qmul(u,v),qinv(u))
    worst=max(worst, qnorm(tuple(x-y for x,y in zip(s1,s2))))
    nworst=max(nworst, abs(qnorm(s1)-qnorm(v)))
print(f"(2) sandwich scale-invariance: max |q·v·q⁻¹ - û·v·û⁻¹| = {worst:.2e}; max | |qvq⁻¹|-|v| | = {nworst:.2e}")

# (3) pure imaginary NOT closed under mult: Re(u*v) = -dot(u,v); sandwich DOES keep Im
mism=0; kept=0
for _ in range(N):
    u=(0.0,)+tuple(random.uniform(-2,2) for _ in range(3))
    v=(0.0,)+tuple(random.uniform(-2,2) for _ in range(3))
    re=qmul(u,v)[0]; dot=sum(a*b for a,b in zip(u[1:],v[1:]))
    if abs(re+dot)<1e-12: mism+=1
    q=R(); s=qmul(qmul(q,v),qinv(q))
    if abs(s[0])<1e-12: kept+=1
print(f"(3) Re(u·v) = -u·v (pure imag not closed): {mism}/{N} confirm; sandwich keeps Re=0: {kept}/{N}")
