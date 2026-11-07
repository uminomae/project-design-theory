import random, math
def qmul(a,b):
    w1,x1,y1,z1=a; w2,x2,y2,z2=b
    return (w1*w2-x1*x2-y1*y2-z1*z2, w1*x2+x1*w2+y1*z2-z1*y2,
            w1*y2-x1*z2+y1*w2+z1*x2, w1*z2+x1*y2-y1*x2+z1*w2)
def qnorm(a): return math.sqrt(sum(c*c for c in a))
def qinv(a):
    n2=sum(c*c for c in a); return tuple(( c if i==0 else -c)/n2 for i,c in enumerate(a))
def qsub(a,b): return tuple(x-y for x,y in zip(a,b))
random.seed(7)
R=lambda:(random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2))

# (1) left vs right division differ, yet each solves its own equation exactly
diff=0; solved=0; N=2000
for _ in range(N):
    a,b=R(),R()
    xl=qmul(qinv(a),b)   # solves a*x=b
    xr=qmul(b,qinv(a))   # solves x*a=b
    if qnorm(qsub(xl,xr))>1e-9: diff+=1
    ok1=qnorm(qsub(qmul(a,xl),b))<1e-9
    ok2=qnorm(qsub(qmul(xr,a),b))<1e-9
    if ok1 and ok2: solved+=1
print(f"(1) left-div != right-div: {diff}/{N} pairs differ; both equations solved exactly: {solved}/{N}")

# (2) norm multiplicativity => no zero divisors (product norm = |x||y| exactly)
worst=0
for _ in range(N):
    x,y=R(),R()
    worst=max(worst, abs(qnorm(qmul(x,y))-qnorm(x)*qnorm(y)))
print(f"(2) | |xy|-|x||y| | max deviation: {worst:.2e}  (=> nonzero*nonzero never 0)")

# (3) iteration trichotomy: norm=1 preserved / <1 decay to 0 / >1 divergence
def iterate(k,steps=60):
    u=(math.cos(0.7),math.sin(0.7)*0.6,math.sin(0.7)*0.8,0.0)  # unit
    a=tuple(k*c for c in u); v=(0.0,1.0,0.5,-0.3)
    for _ in range(steps): v=qmul(a,v)
    return qnorm(v)
print(f"(3) after 60 steps: k=1.0 -> {iterate(1.0):.6f} (preserved), k=0.9 -> {iterate(0.9):.2e} (decay), k=1.1 -> {iterate(1.1):.2e} (divergence)")

# (4) uniqueness: a*x1=a*x2 => x1=x2 (injectivity via norm)
a=R(); x1=R(); x2=tuple(c+1e-3 for c in x1)
print(f"(4) |a*x1-a*x2| = {qnorm(qsub(qmul(a,x1),qmul(a,x2))):.6f} = |a|*|x1-x2| = {qnorm(a)*qnorm(qsub(x1,x2)):.6f}")
