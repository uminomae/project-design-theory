import random
random.seed(1)

# Baez & Huerta 2009 (arXiv:0909.0551), eq. around line 202-217:
# h2(K) = 2x2 hermitian matrix [[t+x, y],[y*, t-x]], t,x in R, y in K (here K=R, so y is real scalar)
# -det = -[(t+x)(t-x) - y*y] = -(t^2 - x^2 - |y|^2) = -t^2 + x^2 + y^2
# This gives Minkowski signature (n+1,1) for K of dim n. For K=R (n=1): 3-dim spacetime (2+1).
# NOTE: this is a DIFFERENT construction from "quaternion norm t^2+x^2+y^2+z^2".
# Here the quaternion (or K element) y sits in the OFF-DIAGONAL entry of a 2x2 matrix,
# and the Minkowski-like minus sign comes from the DETERMINANT formula (t+x)(t-x)-|y|^2,
# not from the quaternion's own norm form.

def det_form(t, x, y_normsq):
    # -det([[t+x,y],[y*,t-x]]) = -( (t+x)(t-x) - |y|^2 ) = -t^2+x^2+|y|^2
    return -((t+x)*(t-x) - y_normsq)

# CHECK: confirm -det gives indefinite signature (+,-,-,...) i.e. can be positive or negative
neg, pos = 0, 0
trials = 3000
for _ in range(trials):
    t = random.gauss(0,1)
    x = random.gauss(0,1)
    y_normsq = random.gauss(0,1)**2 + random.gauss(0,1)**2 + random.gauss(0,1)**2  # |y|^2 for y in H (3 imaginary dims when x fixed... simplified as scalar normsq here)
    v = det_form(t, x, y_normsq)
    if v > 0: pos += 1
    elif v < 0: neg += 1
print(f"CHECK: -det() sign over {trials} trials: positive={pos}, negative={neg} "
      f"=> indefinite signature confirmed (unlike plain quaternion norm t^2+x^2+y^2+z^2 which is always >=0)")

# CHECK: this construction is fundamentally different from Cayley-Dickson quaternion norm.
# In Cayley-Dickson, norm(q) = t^2+x^2+y^2+z^2 (all + signs), q's own algebra structure.
# In Baez's h2(K), the minus sign is INSERTED BY HAND ("We insert a minus sign to obtain
# signature (n+1,1)") and comes from the matrix determinant identity det=ad-bc, not from
# any property internal to K's multiplication.
print()
print("STRUCTURAL NOTE (from Baez & Huerta 2009, arXiv:0909.0551, lines 202-217):")
print("  h2(K) = {[[t+x, y],[y*, t-x]] : t,x in R, y in K}, dimension = n+2 (K has dim n)")
print("  -det = -t^2 + x^2 + |y|^2  -->  signature (n+1,1), i.e. ONE plus, (n+1) minus (or vice versa)")
print("  For K=H (n=4): produces 6-dimensional Minkowski spacetime (NOT 4-dim; y itself carries")
print("  the quaternion's 4 real dims, plus t,x = 2 more reals = 6 total). This is the k+2 rule.")
print("  CRITICAL: the minus sign making it 'Minkowski' is INSERTED via det formula, not derived")
print("  from H's native positive-definite norm form. Baez explicitly writes 'We insert a minus")
print("  sign' -- i.e. this is a DIFFERENT quadratic form built ON TOP OF K, not K's own norm.")
