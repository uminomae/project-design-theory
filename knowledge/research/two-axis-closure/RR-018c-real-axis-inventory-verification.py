import random, math
def qmul(a,b):
    w1,x1,y1,z1=a; w2,x2,y2,z2=b
    return (w1*w2-x1*x2-y1*y2-z1*z2, w1*x2+x1*w2+y1*z2-z1*y2,
            w1*y2-x1*z2+y1*w2+z1*x2, w1*z2+x1*y2-y1*x2+z1*w2)
def qnorm(a): return math.sqrt(sum(c*c for c in a))
def qinv(a):
    n2=sum(c*c for c in a); return tuple((c if i==0 else -c)/n2 for i,c in enumerate(a))
def qsub(a,b): return tuple(x-y for x,y in zip(a,b))
random.seed(13)
R=lambda:(random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2))
N=2000
I=(0,1,0,0); J=(0,0,1,0)

# (a) center: x commutes with both i and j  ==> x is real (numerical: commutator norm bounds Im size)
# construct x with any imaginary part -> commutator with i or j is nonzero
viol=0
for _ in range(N):
    x=R()
    ci=qnorm(qsub(qmul(x,I),qmul(I,x))); cj=qnorm(qsub(qmul(x,J),qmul(J,x)))
    im=math.sqrt(sum(c*c for c in x[1:]))
    if im>1e-9 and ci<1e-12 and cj<1e-12: viol+=1   # imaginary part but commutes with i,j => violation
print(f"(a) commuting with i and j while having Im!=0: {viol}/{N} (0 = center is exactly R)")

# (b) rotation angle: sandwich by unit q rotates Im-vectors by angle 2*arccos(Re q)
worst=0.0
for _ in range(N):
    q=R(); n=qnorm(q); q=tuple(c/n for c in q)
    th=2*math.acos(max(-1,min(1,q[0])))
    # rotate a vector orthogonal to axis u=Im(q)/|Im(q)|
    u=q[1:]; un=math.sqrt(sum(c*c for c in u))
    if un<1e-6: continue
    u=tuple(c/un for c in u)
    # pick v orthogonal to u
    t=(1.0,0.0,0.0) if abs(u[0])<0.9 else (0.0,1.0,0.0)
    v=tuple(t[i]-u[i]*sum(t[j]*u[j] for j in range(3)) for i in range(3))
    vn=math.sqrt(sum(c*c for c in v)); v=tuple(c/vn for c in v)
    V=(0.0,)+v
    S=qmul(qmul(q,V),qinv(q))
    cosang=sum(S[1+i]*v[i] for i in range(3))
    worst=max(worst, abs(cosang-math.cos(th)))
print(f"(b) sandwich rotation angle == 2*arccos(Re q): max |cos dev| = {worst:.2e}")

# (c) characteristic equation: x^2 - 2Re(x)x + |x|^2 = 0 (coefficients live on the real axis)
worst=0.0
for _ in range(N):
    x=R()
    lhs=qsub(qsub(qmul(x,x), tuple(2*x[0]*c for c in x)), (-(qnorm(x)**2),0,0,0))
    worst=max(worst,qnorm(lhs))
print(f"(c) x^2 - 2Re(x)x + |x|^2 = 0: max residual = {worst:.2e}")
