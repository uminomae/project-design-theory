import random, math
def qmul(a,b):
    w1,x1,y1,z1=a; w2,x2,y2,z2=b
    return (w1*w2-x1*x2-y1*y2-z1*z2, w1*x2+x1*w2+y1*z2-z1*y2,
            w1*y2-x1*z2+y1*w2+z1*x2, w1*z2+x1*y2-y1*x2+z1*w2)
def qnorm(a): return math.sqrt(sum(c*c for c in a))
def dot(p,q): return sum(a*b for a,b in zip(p,q))
random.seed(17)
R=lambda:(random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2),random.uniform(-2,2))
N=2000

# (1) THEOREM CANDIDATE: cos(angle between x and x*a) = Re(a)/|a|  (independent of x!)
worst=0.0
for _ in range(N):
    x,a=R(),R()
    xa=qmul(x,a)
    c=dot(x,xa)/(qnorm(x)*qnorm(xa))
    worst=max(worst, abs(c - a[0]/qnorm(a)))
print(f"(1) cos angle(x, x*a) == Re(a)/|a| for ALL x: max deviation = {worst:.2e}")

# (2) decomposition: x*a = Re(a)*x + x*Im(a)  (advance component + turn component)
worst=0.0
for _ in range(N):
    x,a=R(),R()
    adv=tuple(a[0]*c for c in x)
    turn=qmul(x,(0.0,)+a[1:])
    recon=tuple(p+q for p,q in zip(adv,turn))
    worst=max(worst, qnorm(tuple(p-q for p,q in zip(recon,qmul(x,a)))))
print(f"(2) x*a = Re(a)*x + x*Im(a) exactly: max residual = {worst:.2e}")

# (3) pure real action: direction perfectly preserved (angle 0), any size
a=(1.7,0,0,0); x=R(); xa=qmul(x,a)
print(f"(3) real-only action: cos angle = {dot(x,xa)/(qnorm(x)*qnorm(xa)):.12f} (=1: no turn, pure advance)")
# pure imaginary action: cos = 0 (right-angle turn regardless of x)
a=(0.0,0.8,-1.1,0.4); x=R(); xa=qmul(x,a)
print(f"    pure-imaginary action: cos angle = {dot(x,xa)/(qnorm(x)*qnorm(xa)):.2e} (=0: full turn, no advance)")
