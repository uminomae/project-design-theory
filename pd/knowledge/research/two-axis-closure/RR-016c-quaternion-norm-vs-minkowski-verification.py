import random
random.seed(42)

def quat_norm_sq(t, x, y, z):
    return t**2 + x**2 + y**2 + z**2

def minkowski_interval(t, x, y, z, signature="+---"):
    if signature == "+---":
        return t**2 - x**2 - y**2 - z**2
    else:
        return -t**2 + x**2 + y**2 + z**2

def split_quat_norm(t, x, y, z):
    # split-quaternion (coquaternion) norm form: t^2 + x^2 - y^2 - z^2
    return t**2 + x**2 - y**2 - z**2

def randn():
    return random.gauss(0, 1)

# CHECK1: quaternion norm always positive-definite
n_trials = 2000
all_positive = True
for _ in range(n_trials):
    t, x, y, z = randn(), randn(), randn(), randn()
    if quat_norm_sq(t, x, y, z) < 0:
        all_positive = False
print(f"CHECK1: quaternion norm t^2+x^2+y^2+z^2 always >= 0 over {n_trials} random draws: {all_positive}")

# CHECK1b: Minkowski interval sign varies (indefinite)
neg_count = 0
for _ in range(n_trials):
    t, x, y, z = randn(), randn(), randn(), randn()
    if minkowski_interval(t, x, y, z) < 0:
        neg_count += 1
print(f"CHECK1b: Minkowski interval t^2-x^2-y^2-z^2 negative in {neg_count}/{n_trials} draws "
      f"(both signs occur => indefinite signature, unlike quaternion norm which is always positive)")

# CHECK2: split-quaternion norm CAN be indefinite (mixed sign) -- shows a *variant* of
# quaternion-like algebra can match Minkowski-type signature, but this is NOT Hamilton's H
signs_seen = set()
for _ in range(n_trials):
    t, x, y, z = randn(), randn(), randn(), randn()
    v = split_quat_norm(t, x, y, z)
    if v > 0: signs_seen.add("+")
    elif v < 0: signs_seen.add("-")
    else: signs_seen.add("0")
print(f"CHECK2: split-quaternion (coquaternion) norm t^2+x^2-y^2-z^2 sign set over {n_trials} draws: {signs_seen} "
      "(indefinite signature IS achievable, but only by leaving Hamilton's division algebra H; "
      "coquaternions have zero divisors, i.e. NOT a division algebra)")

# CHECK3: explicit counterexample pair with same |components| but different qualitative meaning
t, x, y, z = 1.0, 2.0, 0.0, 0.0
print(f"CHECK3 example: (t,x,y,z)=({t},{x},{y},{z})")
print(f"  quaternion norm^2 = {quat_norm_sq(t,x,y,z)} (always spacelike-flavored positive, no causal structure)")
print(f"  Minkowski interval (+---) = {minkowski_interval(t,x,y,z)} "
      f"({'timelike' if minkowski_interval(t,x,y,z)>0 else 'spacelike' if minkowski_interval(t,x,y,z)<0 else 'null'})")

print()
print("SUMMARY: Hamilton's quaternions H have a POSITIVE-DEFINITE quadratic form (+,+,+,+).")
print("Minkowski spacetime has an INDEFINITE quadratic form (+,-,-,-) or (-,+,+,+), signature 2.")
print("The '1 real + 3 imaginary' dimension count (1+3=4) matches, but the algebraic form does NOT.")
print("To recover Minkowski signature from quaternion-like objects, one needs EITHER:")
print("  (a) biquaternions (complexified quaternions, Hamilton's own term) - but these are NOT a division algebra")
print("  (b) split quaternions (coquaternions) - also NOT a division algebra (have zero divisors, isotropic vectors)")
print("So neither variant preserves the division-algebra property that makes H so special (Q9/A1-A2 in RR-015).")
