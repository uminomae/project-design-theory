# Find a genuine automorphism of O (an element of G2, realized as a signed
# permutation of the 7 imaginary basis units e1..e7) that fixes e0=1 pointwise,
# by brute-force search over signed permutations respecting the multiplication
# table -- this is exactly how Aut(Fano)=168 embeds into G2 as a finite subgroup
# (the "obvious" automorphisms coming from symmetries of the Fano plane).
import itertools
import random

def qmul(a, b):
    w1,x1,y1,z1 = a
    w2,x2,y2,z2 = b
    return (w1*w2-x1*x2-y1*y2-z1*z2,
            w1*x2+x1*w2+y1*z2-z1*y2,
            w1*y2-x1*z2+y1*w2+z1*x2,
            w1*z2+x1*y2-y1*x2+z1*w2)

def qconj(a):
    return (a[0],-a[1],-a[2],-a[3])

def qadd(a,b):
    return tuple(x+y for x,y in zip(a,b))

def qsub(a,b):
    return tuple(x-y for x,y in zip(a,b))

def omul(A, B):
    a,b = A
    c,d = B
    return (qsub(qmul(a,c), qmul(qconj(d), b)),
            qadd(qmul(d,a), qmul(b, qconj(c))))

ZERO_Q=(0,0,0,0)
def e(idx):
    if idx==0: return ((1,0,0,0),ZERO_Q)
    elif idx in (1,2,3):
        v=[0,0,0]; v[idx-1]=1
        return ((0,)+tuple(v),ZERO_Q)
    else:
        v=[0,0,0,0]; v[idx-4]=1
        return (ZERO_Q,tuple(v))

basis=[e(i) for i in range(8)]

def as_vec(A):
    return A[0]+A[1]  # 8-tuple

def mult_table():
    T = {}
    for i in range(8):
        for j in range(8):
            prod = omul(basis[i], basis[j])
            v = as_vec(prod)
            # find which signed basis vector this equals
            for k in range(8):
                if all(abs(v[m]-(basis[k][0]+basis[k][1])[m])<1e-9 for m in range(8)):
                    T[(i,j)]=(k,1); break
            else:
                for k in range(8):
                    neg=tuple(-x for x in (basis[k][0]+basis[k][1]))
                    if all(abs(v[m]-neg[m])<1e-9 for m in range(8)):
                        T[(i,j)]=(k,-1); break
    return T

T = mult_table()

# search signed permutations of {1..7} (fixing 0) that preserve the table
imag_idx = list(range(1,8))
found = None
count_checked = 0
count_valid = 0
for perm in itertools.permutations(imag_idx):
    for signs in itertools.product([1,-1], repeat=7):
        count_checked += 1
        # build map: 0->0 (sign+1), i -> perm[i-1] with sign signs[i-1]
        mapidx = {0:(0,1)}
        for i in range(1,8):
            mapidx[i] = (perm[i-1], signs[i-1])
        # check homomorphism property on all basis pairs
        ok = True
        for i in range(8):
            for j in range(8):
                k, s = T[(i,j)]
                mi, si = mapidx[i]
                mj, sj = mapidx[j]
                # phi(e_i * e_j) should equal phi(e_i)*phi(e_j)
                # phi(e_i)=si*e_mi, phi(e_j)=sj*e_mj
                # phi(e_i)*phi(e_j) = si*sj*(e_mi * e_mj) = si*sj*T[(mi,mj)]
                mk, ms = T[(mi,mj)]
                lhs = (k, s)  # phi(e_i*e_j) = phi(s*e_k) = s*mapidx[k]
                mk2, ms2 = mapidx[k]
                lhs_val = (mk2, s*ms2)
                rhs_val = (mk, si*sj*ms)
                if lhs_val != rhs_val:
                    ok = False
                    break
            if not ok:
                break
        if ok:
            count_valid += 1
            if found is None and perm != tuple(imag_idx):  # nontrivial
                found = (perm, signs)
        if count_checked > 200000:
            break
    if count_checked > 200000:
        break

print(f"checked {count_checked} signed permutations (subset), valid automorphisms found so far: {count_valid}")
if found:
    perm, signs = found
    print("A nontrivial automorphism (signed permutation of e1..e7):")
    for i in range(1,8):
        print(f"  e{i} -> {signs[i-1]:+d} e{perm[i-1]}")
    print(" By construction this fixes e0=1 pointwise (index 0 mapped to itself, sign +1).")
else:
    print("No nontrivial one found in searched subset (search space is large: 7\! * 2^7 = 645120; may need full scan or smarter construction).")
