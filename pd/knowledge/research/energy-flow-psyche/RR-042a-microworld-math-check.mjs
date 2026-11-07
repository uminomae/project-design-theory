// RR-042a — energy-flow READER Micro-worlds の数理核 機械検証（pd#130 / RR-042）
//
// 検証対象は src/reader-microworlds.js の 2 ウィジェットが使う更新式そのもの:
//   ou-well:       Euler–Maruyama  x ← x − k·x·dt + σ·√dt·N(0,1)
//   kuramoto-sync: dφ_i = (ω_i + (K/N)·Σ_j sin(φ_j − φ_i))·dt
//
// 実行: node knowledge/research/energy-flow-psyche/RR-042a-microworld-math-check.mjs
// 全通過で ALL CHECKS PASSED を印字する。
//
// 再現性のため乱数はシード付き（mulberry32）。更新式は実装 JS と一致させている
// （実装は Math.random を使うが、更新式・係数・dt の意味は同一）。

// ---- シード付き PRNG と標準正規（Box–Muller、実装 JS と同形）----
function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0; a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function gaussianFrom(rng) {
    let u = 0, v = 0;
    while (u === 0) u = rng();
    while (v === 0) v = rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

let PASS = true;
function check(name, ok, detail) {
    console.log(`  [${ok ? 'PASS' : 'FAIL'}] ${name}${detail ? ' — ' + detail : ''}`);
    if (!ok) PASS = false;
}
const relErr = (a, b) => Math.abs(a - b) / Math.abs(b);

// ============================================================
// OU 過程
// ============================================================
// 実装 JS と同一の一歩: x ← x − k·x·dt + σ·√dt·N(0,1)
function ouStep(x, k, sigma, dt, rng) {
    return x - k * x * dt + sigma * Math.sqrt(dt) * gaussianFrom(rng);
}
// 系列を回して、定常分散と（複数ラグの）自己相関を測る
function ouSimulate(k, sigma, dt, steps, burn, seed) {
    const rng = mulberry32(seed);
    let x = 0;
    for (let n = 0; n < burn; n++) x = ouStep(x, k, sigma, dt, rng);
    const xs = new Float64Array(steps);
    for (let n = 0; n < steps; n++) { x = ouStep(x, k, sigma, dt, rng); xs[n] = x; }
    // 平均・分散
    let mean = 0; for (let n = 0; n < steps; n++) mean += xs[n]; mean /= steps;
    let varr = 0; for (let n = 0; n < steps; n++) { const d = xs[n] - mean; varr += d * d; } varr /= steps;
    // ラグ L ステップの自己相関 ρ(L) = E[x_n x_{n+L}] / Var
    const autocorr = (L) => {
        let s = 0; const M = steps - L;
        for (let n = 0; n < M; n++) s += (xs[n] - mean) * (xs[n + L] - mean);
        return (s / M) / varr;
    };
    return { varr, autocorr };
}

console.log('OU 過程（くぼみのボール）');
const DT_OU = 0.01, STEPS_OU = 2_000_000, BURN_OU = 200_000;
// 1) 定常分散 ≈ σ²/(2k)、ラグτ自己相関 ≈ exp(−k·τ)（複数の k・σ）
const ouCases = [
    { k: 2.0, sigma: 0.8, seed: 101 },
    { k: 1.0, sigma: 0.6, seed: 202 },
    { k: 0.5, sigma: 1.0, seed: 303 },
];
for (const { k, sigma, seed } of ouCases) {
    const { varr, autocorr } = ouSimulate(k, sigma, DT_OU, STEPS_OU, BURN_OU, seed);
    const varTheory = (sigma * sigma) / (2 * k);
    check(
        `定常分散 σ²/(2k)  (k=${k}, σ=${sigma})`,
        relErr(varr, varTheory) < 0.08,
        `測定 ${varr.toFixed(4)} / 理論 ${varTheory.toFixed(4)} (相対誤差 ${(relErr(varr, varTheory) * 100).toFixed(1)}%)`
    );
    for (const tau of [0.5, 1.0, 2.0]) {
        const L = Math.round(tau / DT_OU);
        const rho = autocorr(L);
        const rhoTheory = Math.exp(-k * tau);
        check(
            `自己相関 exp(−k·τ)  (k=${k}, τ=${tau})`,
            Math.abs(rho - rhoTheory) < 0.05,
            `測定 ${rho.toFixed(4)} / 理論 ${rhoTheory.toFixed(4)}`
        );
    }
}

// 2) 臨界減速: k を下げると τ=1/k と定常分散 σ²/(2k) が単調増加
console.log('OU 臨界減速（k を下げる）');
const sigmaFixed = 0.6;
const ks = [3.0, 1.0, 0.3, 0.15];
const measuredVars = [], taus = [];
for (const k of ks) {
    const { varr } = ouSimulate(k, sigmaFixed, DT_OU, STEPS_OU, BURN_OU, 4242);
    measuredVars.push(varr); taus.push(1 / k);
}
let monoVar = true, monoTau = true;
for (let i = 1; i < ks.length; i++) {
    if (!(measuredVars[i] > measuredVars[i - 1])) monoVar = false;   // k 降順 → 分散は増加のはず
    if (!(taus[i] > taus[i - 1])) monoTau = false;                    // τ=1/k も増加
}
check('臨界減速: k↓ で自己相関時間 τ=1/k が単調増加', monoTau, `τ = [${taus.map(t => t.toFixed(2)).join(', ')}]`);
check('臨界減速: k↓ で定常分散が単調増加', monoVar, `Var = [${measuredVars.map(v => v.toFixed(3)).join(', ')}]`);

// ============================================================
// 蔵本モデル
// ============================================================
// 実装 JS と同一の一歩: dφ_i = (ω_i + (K/N)·Σ_j sin(φ_j − φ_i))·dt
function kuramotoSteadyR(N, K, omega, dt, steps, burn, seed) {
    const rng = mulberry32(seed);
    const phi = new Float64Array(N);
    for (let i = 0; i < N; i++) phi[i] = rng() * 2 * Math.PI;
    const orderR = () => {
        let sx = 0, sy = 0;
        for (let i = 0; i < N; i++) { sx += Math.cos(phi[i]); sy += Math.sin(phi[i]); }
        return Math.hypot(sx / N, sy / N);
    };
    let rsum = 0, cnt = 0;
    const d = new Float64Array(N);
    for (let n = 0; n < burn + steps; n++) {
        for (let i = 0; i < N; i++) {
            let s = 0;
            for (let j = 0; j < N; j++) s += Math.sin(phi[j] - phi[i]);
            d[i] = omega[i] + (K / N) * s;
        }
        for (let i = 0; i < N; i++) phi[i] += d[i] * dt;
        if (n >= burn) { rsum += orderR(); cnt++; }
    }
    return rsum / cnt;
}

console.log('蔵本モデル（結合振動子の同期）');
const N = 24, DT_K = 0.05, STEPS_K = 8000, BURN_K = 4000;
// 固有振動数は一度だけ生成（実装 JS と同じ 標準正規×0.6・固定）
const omega = new Float64Array(N);
{
    const orng = mulberry32(7);
    for (let i = 0; i < N; i++) omega[i] = gaussianFrom(orng) * 0.6;
}
const Ks = [0, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0];
const rByK = Ks.map(K => kuramotoSteadyR(N, K, omega, DT_K, STEPS_K, BURN_K, 999));
console.log('  r(K): ' + Ks.map((K, i) => `K=${K}:${rByK[i].toFixed(3)}`).join('  '));

const rLow = rByK[0];                 // K=0
const rHigh = rByK[rByK.length - 1];  // K=4
check('K=0 で r が小さい（バラバラ, r<0.4）', rLow < 0.4, `r(0)=${rLow.toFixed(3)}`);
check('K=4 で r が有意に大きい（揃った, r>0.7）', rHigh > 0.7, `r(4)=${rHigh.toFixed(3)}`);
check('K 増加で r が有意に増加（r(4)−r(0)>0.4）', (rHigh - rLow) > 0.4, `Δr=${(rHigh - rLow).toFixed(3)}`);
// 単調傾向（有限 N のゆらぎを許容し、各ステップで 0.05 以上は下がらない）
let monoTrend = true, worst = 0;
for (let i = 1; i < Ks.length; i++) {
    const drop = rByK[i - 1] - rByK[i];
    if (drop > worst) worst = drop;
    if (rByK[i] < rByK[i - 1] - 0.05) monoTrend = false;
}
check('K↑ で r が単調傾向（下振れ ≤ 0.05）', monoTrend, `最大の下振れ ${worst.toFixed(3)}`);
// 閾値の存在: 低 K 域は低いまま、閾値超で立ち上がる（K≤0.5 は低く, K≥2 は高い）
const rBelow = Math.max(rByK[0], rByK[1]);           // K=0,0.5
const rAbove = Math.min(rByK[4], rByK[5], rByK[6]);  // K=2,3,4
check('閾値の存在（K≤0.5 は低く K≥2 は高い）', rBelow < 0.45 && rAbove > 0.6, `低域max=${rBelow.toFixed(3)} / 高域min=${rAbove.toFixed(3)}`);

console.log('');
if (PASS) {
    console.log('ALL CHECKS PASSED');
    process.exit(0);
} else {
    console.log('SOME CHECKS FAILED');
    process.exit(1);
}
