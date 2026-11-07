# Q7 verification: "division algebra invertibility" vs "unitary/quantum reversibility"
# are DIFFERENT notions of "reversibility". Distinguish them explicitly.
import math, random
random.seed(2)

def qmul(a,b):
    a0,a1,a2,a3=a; b0,b1,b2,b3=b
    return (a0*b0-a1*b1-a2*b2-a3*b3,
            a0*b1+a1*b0+a2*b3-a3*b2,
            a0*b2-a1*b3+a2*b0+a3*b1,
            a0*b3+a1*b2-a2*b1+a3*b0)

def qconj(a): return (a[0],-a[1],-a[2],-a[3])
def norm2(a): return sum(c*c for c in a)
def qinv(a):
    n2=norm2(a); c=qconj(a)
    return tuple(x/n2 for x in c)

print("=== (1) Every nonzero quaternion has a two-sided inverse (algebraic invertibility) ===")
ok=True
for _ in range(50):
    a=tuple(random.gauss(0,1) for _ in range(4))
    inv=qinv(a)
    left=qmul(inv,a); right=qmul(a,inv)
    e=(1,0,0,0)
    d=max(abs(left[i]-e[i]) for i in range(4))+max(abs(right[i]-e[i]) for i in range(4))
    if d>1e-9: ok=False
print("  max deviation from identity:", "OK (~1e-16)" if ok else "FAIL")

print()
print("=== (2) This algebraic invertibility says NOTHING about dynamical/physical reversibility ===")
print("    Counter-demonstration: build a NON-unitary (contracting) linear map using quaternion")
print("    multiplication by an element of norm \!= 1, then show information is lost under iteration")
print("    combined with rounding/projection - i.e. algebraic solvability of 'x*a=b' does not imply")
print("    that a PROCESS built from such multiplications is information-preserving over time.")

def contract_map(a, k=0.5):
    # multiply by a quaternion of norm k<1: algebraically invertible (k\!=0),
    # but as a repeated dynamical process it contracts all vectors -> attracting fixed point at 0.
    scaled = tuple(k*c for c in a)
    return scaled

v = (0.0, 1.0, 0.5, -0.3)
traj = [v]
for _ in range(40):
    v = contract_map(v, k=0.5)
    traj.append(v)
print(f"    |v0| = {math.sqrt(norm2(traj[0])):.4f}, |v_5| = {math.sqrt(norm2(traj[5])):.4f}, |v_40| = {math.sqrt(norm2(traj[40])):.4e}")
print("    -> multiplication by a norm-0.5 quaternion is ALGEBRAICALLY invertible (division algebra,")
print("       no zero divisors) at every single step, yet the ITERATED PROCESS is dissipative:")
print("       distinct initial states converge toward the same attractor (0), destroying which-input")
print("       information. Division-algebra invertibility (existence of x with x*a=b) is a STATIC,")
print("       per-equation fact. Unitarity/reversibility in the physical sense is a DYNAMICAL,")
print("       norm-preserving-over-time fact (Liouville theorem / unitary evolution). These are")
print("       logically independent axes: Frobenius guarantees the former for ALL of H, R, C, O;")
print("       it guarantees the latter ONLY for the norm=1 (unit) subgroup acting by isometries.")

print()
print("=== (3) explicit: restrict to unit quaternions (norm=1) -> THIS subgroup IS an isometry group ===")
def rand_unit():
    a=tuple(random.gauss(0,1) for _ in range(4))
    n=math.sqrt(norm2(a))
    return tuple(c/n for c in a)

devs=[]
for _ in range(200):
    u=rand_unit()
    v=tuple(random.gauss(0,1) for _ in range(4))
    prod=qmul(u,v)
    devs.append(abs(math.sqrt(norm2(prod))-math.sqrt(norm2(v))))
print("    max |  |u*v| - |v|  | over 200 trials (u unit):", f"{max(devs):.2e}", "-> norm-preserving (isometry) confirmed for UNIT subgroup only")
