// Love駆動開発の背景（three.js・WebGL）。物理と数学の像を、抽象的な模様として描く。
//
// 見本は三つ（`?bg=orbit|lens|binary` で選ぶ。ページの既定は body の data-background）。
//   orbit  見えない中心 — 銀河の回り方（平らな回転曲線）・腕（密度波）・中心の影と光の輪
//   lens   井戸と光の道 — 重力の井戸の形（Flamm の放物面）の上を、曲がる光の道（ヌル測地線）が流れる
//   binary 二つで一つ — 互いを回る二つの見えない重さと、場に広がる重力波（四重極の二本の渦）
//
// 物理は模式。数値を再現するのでなく、形の由来を式までたどれることを目指す（式は各見本の頭に書く）。
// 見えるのは周りの動きだけで、中心そのものは描かない（読み物の「見えないものを、どう指し示すか」）。
//
// DESIGN-RULES §0a：色は tokens.css の --navy・--gold・--coral から取り、新しい色は作らない。
// WebGL（three.js）なので、WebGPU が既定で無効な環境でも映る（stance 2-7・DESIGN-RULES の背景の判定）。
// 残像は二枚の描画先を往復させて作る（前の絵を少し暗くして重ね、その上に今の粒を足す）。
// prefers-reduced-motion では、少し進めた一枚を止めて見せる。タブが隠れている間は止める。

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

const VARIANTS = ['orbit', 'lens', 'binary'];
const TAU = Math.PI * 2;

function pickVariant() {
    let q = null;
    try {
        q = new URLSearchParams(window.location.search).get('bg');
    } catch (_) { /* window が無い環境 */ }
    const fromBody = (document.body && document.body.dataset.background) || '';
    const v = String(q || fromBody).replace(/^love-/, '');
    return VARIANTS.includes(v) ? v : 'orbit';
}

// 決まった種から同じ並びを出す乱数（mulberry32）。開くたびに同じ形になる。
function makeRng(seed) {
    let a = seed >>> 0;
    return () => {
        a = (a + 0x6d2b79f5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function gauss(rand) {
    const u = Math.max(rand(), 1e-9);
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * rand());
}
const lerp = (a, b, t) => a + (b - a) * t;

function tokenColor(name, fallback) {
    let v = '';
    try {
        v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    } catch (_) { /* 既定値を使う */ }
    return new THREE.Color(v || fallback);
}
function palette() {
    const navy = tokenColor('--navy', '#2e3a6e');
    const gold = tokenColor('--gold', '#8a7040');
    const coral = tokenColor('--coral', '#b04050');
    const white = new THREE.Color(1, 1, 1);
    return {
        // 光る線は、トークンの色を白へ寄せて明るくしたもの
        silver: navy.clone().lerp(white, 0.78),
        gold: gold.clone().lerp(white, 0.35),
        coral: coral.clone().lerp(white, 0.25),
        // 地は navy を暗く沈めたもの
        bgInner: navy.clone().multiplyScalar(0.2),
        bgOuter: navy.clone().multiplyScalar(0.05),
    };
}

const QUAD_VS = /* glsl */ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`;

const DOT_FS = /* glsl */ `
    uniform float uGain;
    varying vec3 vCol;
    varying float vA;
    void main() {
        vec2 d = gl_PointCoord - 0.5;
        float q = dot(d, d) * 4.0;
        if (q > 1.0) discard;
        float f = 1.0 - q;
        gl_FragColor = vec4(vCol * vA * f * f * uGain, 1.0);
    }
`;

// 正面を向く円板（中心の影・光の輪に使う）。
function billboard(size, material) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);
    mesh.frustumCulled = false;
    return mesh;
}

// ---------------------------------------------------------------------------
// orbit — 見えない中心
//   回り方：平らな回転曲線 v(r) = V0·r/√(r²+rc²)。外側では速さが落ちない（ω ∝ 1/r）。
//           見えている星だけの重さなら外側ほど遅くなるはず（ケプラーの ω ∝ r^(-3/2)）で、
//           このずれが、見えない重さ（暗黒物質）を周りの動きから指した前例。
//   揺れ：  円からの小さなずれは周転円（κ = √2·Ω、平らな回転曲線のとき）。
//   腕：    密度波（Lin–Shu）。対数らせん φ − cot(i)·ln r − Ωp·t の二本の腕を、星は通り抜けていく。
//           腕の中では星が生まれて明るく、電離した水素が赤く光る（Hα）。その赤を --coral から取る。
//   中心：  影（光が戻らない範囲）と、その縁の光の輪。近づいてくる側が明るい（ドップラー・ビーミング）。
// ---------------------------------------------------------------------------
function buildOrbit(rand, small, pal) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 400);

    const N = small ? 70000 : 150000;
    const aR = new Float32Array(N);
    const aPhi = new Float32Array(N);
    const aZ = new Float32Array(N);
    const aEcc = new Float32Array(N);
    const aSeed = new Float32Array(N);
    const aKind = new Float32Array(N);
    const aTilt = new Float32Array(N);
    const aNode = new Float32Array(N);
    const rMin = 0.72, rMax = 22, Rd = 6.5;
    const span = 1 - Math.exp(-(rMax - rMin) / Rd);
    for (let i = 0; i < N; i++) {
        // 指数円盤：面の明るさが exp(−r/Rd) で落ちる
        aR[i] = rMin - Rd * Math.log(1 - rand() * span);
        aPhi[i] = rand() * TAU;
        aZ[i] = gauss(rand);
        aEcc[i] = 0.015 + 0.05 * rand();
        aSeed[i] = rand();
        const k = rand();
        aKind[i] = k < 0.014 ? 2 : (k < 0.06 ? 1 : 0);
        // 見えない重さの広がり（ハロー）：円盤の外まで、いろいろな傾きの軌道に淡い粒を置く。
        // 同じ回転曲線で回るので、斜めに交わる弧として見える
        if (k > 0.86) {
            aKind[i] = 3;
            aR[i] = 2.5 + Math.pow(rand(), 0.7) * 22;
            aTilt[i] = Math.acos(2 * rand() - 1);
            aNode[i] = rand() * TAU;
        }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute('aR', new THREE.BufferAttribute(aR, 1));
    geo.setAttribute('aPhi', new THREE.BufferAttribute(aPhi, 1));
    geo.setAttribute('aZ', new THREE.BufferAttribute(aZ, 1));
    geo.setAttribute('aEcc', new THREE.BufferAttribute(aEcc, 1));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(aSeed, 1));
    geo.setAttribute('aKind', new THREE.BufferAttribute(aKind, 1));
    geo.setAttribute('aTilt', new THREE.BufferAttribute(aTilt, 1));
    geo.setAttribute('aNode', new THREE.BufferAttribute(aNode, 1));

    const uniforms = {
        uTime: { value: 0 },
        uV0: { value: 0.62 },
        uRc: { value: 1.1 },
        uPitchK: { value: 1 / Math.tan((17 * Math.PI) / 180) },
        uOmegaP: { value: 0.045 },
        uPx: { value: 1 },
        uGain: { value: 0.05 },
        uSilver: { value: pal.silver },
        uGold: { value: pal.gold },
        uCoral: { value: pal.coral },
    };
    const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: /* glsl */ `
            uniform float uTime, uV0, uRc, uPitchK, uOmegaP, uPx;
            uniform vec3 uSilver, uGold, uCoral;
            attribute float aR, aPhi, aZ, aEcc, aSeed, aKind, aTilt, aNode;
            varying vec3 vCol;
            varying float vA;
            void main() {
                float omega = uV0 / sqrt(aR * aR + uRc * uRc);
                float kappa = 1.41421356 * omega;
                float ph = kappa * uTime + aSeed * 6.2831853;
                float r = aR * (1.0 + aEcc * cos(ph));
                float phi = aPhi + omega * uTime - 1.41421356 * aEcc * sin(ph);
                float h = aZ * (0.03 + 0.016 * aR);
                vec3 p = vec3(r * cos(phi), h, -r * sin(phi));
                if (aKind > 2.5) {
                    // 軌道の面を、x 軸の周りに aTilt、y 軸の周りに aNode だけ回す
                    vec3 q = vec3(r * cos(phi), 0.0, -r * sin(phi));
                    float ct = cos(aTilt), st = sin(aTilt);
                    q = vec3(q.x, -q.z * st, q.z * ct);
                    float cn = cos(aNode), sn = sin(aNode);
                    p = vec3(q.x * cn + q.z * sn, q.y, -q.x * sn + q.z * cn);
                }

                float arm = phi - uPitchK * log(r) - uOmegaP * uTime;
                float w = 0.5 + 0.5 * cos(2.0 * arm);
                float armB = w * w * w * w;
                float fall = exp(-aR / 9.0);
                vec3 col = uSilver;
                float a = (0.1 + 2.2 * armB) * (0.35 + 0.9 * fall);
                if (aKind > 1.5) {
                    col = uCoral;
                    a = 3.2 * armB * armB * (0.4 + fall);
                } else if (aKind > 2.5) {
                    col = mix(uSilver, vec3(1.0), 0.3);
                    a = 1.1 * (0.4 + 0.6 * exp(-aR / 14.0));
                } else if (aKind > 0.5) {
                    col = mix(uSilver, vec3(1.0), 0.6);
                    a *= 2.0;
                }
                if (aKind < 2.5) col = mix(col, uGold, 0.6 * exp(-aR / 2.6));

                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_Position = projectionMatrix * mv;
                float size = aKind > 0.5 ? 2.3 : 1.35;
                gl_PointSize = size * uPx * clamp(14.0 / -mv.z, 0.6, 2.2);
                vCol = col;
                vA = a;
            }
        `,
        fragmentShader: DOT_FS,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        depthTest: true,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    scene.add(points);

    // 中心の影：黒で塗りつぶし、奥の粒を深さで隠す
    const shadow = billboard(
        0.84,
        new THREE.ShaderMaterial({
            vertexShader: /* glsl */ `
                varying vec2 vUv;
                void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
            `,
            fragmentShader: /* glsl */ `
                varying vec2 vUv;
                void main() {
                    if (length(vUv - 0.5) > 0.5) discard;
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                }
            `,
            depthWrite: true,
            depthTest: true,
        })
    );
    shadow.renderOrder = -1;
    scene.add(shadow);

    // 光の輪：影の縁の細い輪と、外のにじみ。近づく側（左）を明るく
    const ringU = { uTime: { value: 0 }, uGold: { value: pal.gold }, uK: { value: 1 }, uElev: { value: 0.3 } };
    const ring = billboard(
        2.6,
        new THREE.ShaderMaterial({
            uniforms: ringU,
            vertexShader: /* glsl */ `
                varying vec2 vUv;
                void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
            `,
            fragmentShader: /* glsl */ `
                uniform float uTime, uK, uElev;
                uniform vec3 uGold;
                varying vec2 vUv;
                float sq(float x) { return x * x; }
                void main() {
                    vec2 q = (vUv - 0.5) * 2.6;
                    float rho = length(q);
                    float ang = atan(q.y, q.x);
                    float beam = 1.0 + 0.55 * cos(ang - 3.1415926);
                    float flick = 0.85 + 0.15 * sin(ang * 7.0 + uTime * 0.9) * sin(ang * 3.0 - uTime * 0.6);
                    float thin = exp(-sq((rho - 0.43) / 0.014)) * 2.0;
                    float soft = exp(-sq((rho - 0.48) / 0.07)) * 0.2;
                    // 円盤の奥側が、重力レンズで影の上と下に回り込んで見える像。
                    // 真横から見るほど上が太く、真上から見るほど上下が同じ輪になる
                    float sa = q.y / max(rho, 1e-4);
                    float face = clamp(uElev / 1.2, 0.0, 1.0);
                    float side = mix(0.9 * sqrt(max(sa, 0.0)) + 0.22 * sqrt(max(-sa, 0.0)), 0.55, face);
                    float streak = 0.65 + 0.35 * sin(ang * 46.0 + uTime * 1.3) * sin(ang * 17.0 - uTime * 0.7);
                    float arc = exp(-sq((rho - 0.6) / 0.11)) * side * streak * 2.2;
                    vec3 col = mix(vec3(1.0), uGold, 0.45);
                    gl_FragColor = vec4(col * ((thin + soft) * beam * flick + arc) * uK, 1.0);
                }
            `,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        })
    );
    ring.renderOrder = 2;
    scene.add(ring);

    return {
        scene,
        camera,
        decay: 0.985,
        exposure: 0.75,
        update(t, s) {
            uniforms.uTime.value = t;
            ringU.uTime.value = t;
            // 残像で積み重なる分（1/(1−decay)）を割って、輪の明るさを一定にする
            ringU.uK.value = (1 - s.decay) * 1.1;
            ringU.uElev.value = lerp(0.26, 0.95, s.scroll);
            uniforms.uPx.value = s.dpr;
            const elev = lerp(0.26, 0.95, s.scroll) + s.py * 0.06;
            const az = -0.5 + t * 0.006 + s.px * 0.12;
            const dist = lerp(11.5, 8.5, s.scroll) * s.fit;
            camera.position.set(
                dist * Math.cos(elev) * Math.sin(az),
                dist * Math.sin(elev),
                dist * Math.cos(elev) * Math.cos(az)
            );
            camera.lookAt(0, 0, 0);
            shadow.quaternion.copy(camera.quaternion);
            ring.quaternion.copy(camera.quaternion);
        },
    };
}

// ---------------------------------------------------------------------------
// lens — 井戸と光の道
//   井戸：  シュヴァルツシルト時空の、ある時刻の赤道面を三次元に埋め込んだ形（Flamm の放物面）
//           w(r) = 2√(rs(r − rs))。底の輪 r = rs が事象の地平面。ここでは rs = 1、高さは 0.6 倍。
//           輪は井戸の面に沿った距離で等間隔に置き、内へ落ちていく波を明るさで流す。
//   光の道：赤道面のヌル測地線 d²u/dφ² + u = (3/2)·rs·u²（u = 1/r）を RK4 で解く。
//           衝突径数 b が臨界値 bc = (3√3/2)·rs に近い光は、光子球 r = 1.5·rs を何周も回ってから
//           出ていくか、落ちる。b が大きい光は、曲がって通り過ぎる。
//           道を井戸の面に載せて描くのは模式（埋め込みの面は空間の形で、光の道そのものではない）。
// ---------------------------------------------------------------------------
function buildLens(rand, small, pal) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 400);
    const RMAX = 16;
    const surf = (r) => 1.2 * Math.sqrt(Math.max(r - 1, 0));
    // 面に沿った、底の輪からの距離 s(r) = √(r(r−1)) + ln(√r + √(r−1))
    const proper = (r) => Math.sqrt(r * (r - 1)) + Math.log(Math.sqrt(r) + Math.sqrt(Math.max(r - 1, 0)));
    const sMax = proper(RMAX);
    const invProper = (s) => {
        let lo = 1, hi = RMAX;
        for (let i = 0; i < 40; i++) {
            const mid = (lo + hi) / 2;
            if (proper(mid) < s) lo = mid; else hi = mid;
        }
        return (lo + hi) / 2;
    };

    // ---- 井戸の格子 ----
    {
        const pos = [], aS = [], aKind = [], idx = [];
        const push = (r, phi, kind) => {
            pos.push(r * Math.cos(phi), surf(r), -r * Math.sin(phi));
            aS.push(proper(r) / sMax);
            aKind.push(kind);
            return pos.length / 3 - 1;
        };
        const nRad = small ? 48 : 72;
        const K = 90;
        for (let j = 0; j < nRad; j++) {
            const phi = (j / nRad) * TAU;
            let prev = -1;
            for (let k = 0; k <= K; k++) {
                const r = invProper((k / K) * sMax);
                const id = push(r, phi, 0);
                if (prev >= 0) idx.push(prev, id);
                prev = id;
            }
        }
        const nCirc = small ? 28 : 40;
        const M = small ? 180 : 256;
        const circle = (r, kind) => {
            let first = -1, prev = -1;
            for (let m = 0; m < M; m++) {
                const id = push(r, (m / M) * TAU, kind);
                if (prev >= 0) idx.push(prev, id); else first = id;
                prev = id;
            }
            idx.push(prev, first);
        };
        for (let j = 0; j <= nCirc; j++) circle(invProper((j / nCirc) * sMax), 1);
        circle(1.5, 2); // 光子球

        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        g.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
        g.setAttribute('aKind', new THREE.Float32BufferAttribute(aKind, 1));
        g.setIndex(idx);
        var gridU = { uTime: { value: 0 }, uSilver: { value: pal.silver }, uGold: { value: pal.gold }, uGain: { value: 0.05 } };
        const m = new THREE.ShaderMaterial({
            uniforms: gridU,
            vertexShader: /* glsl */ `
                uniform float uTime;
                uniform vec3 uSilver, uGold;
                attribute float aS, aKind;
                varying vec3 vCol;
                varying float vA;
                void main() {
                    float wave = 0.5 + 0.5 * cos(28.0 * aS + uTime * 0.9);
                    wave = pow(wave, 10.0);
                    float rim = 1.0 - smoothstep(0.55, 1.0, aS);
                    float a = (0.14 + 1.6 * wave) * (0.2 + 0.8 * rim);
                    if (aKind > 0.5) a *= 1.25;
                    vec3 col = uSilver;
                    if (aKind > 1.5) { col = uGold; a = 1.6 + 0.6 * sin(uTime * 0.7); }
                    vCol = col;
                    vA = a;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uGain;
                varying vec3 vCol;
                varying float vA;
                void main() { gl_FragColor = vec4(vCol * vA * uGain, 1.0); }
            `,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        });
        const lines = new THREE.LineSegments(g, m);
        lines.frustumCulled = false;
        scene.add(lines);
    }

    // ---- 光の道 ----
    const bc = (3 * Math.sqrt(3)) / 2;
    const trace = (b) => {
        // u'' = −u + 1.5u²（rs = 1）。外の r = RMAX から内へ入る向きで始める
        let u = 1 / RMAX;
        let v = Math.sqrt(Math.max(1 / (b * b) - u * u * (1 - u), 0));
        let phi = 0;
        const f = (uu) => -uu + 1.5 * uu * uu;
        const h = 0.005;
        const out = [[1 / u, phi]];
        let lastR = 1 / u, lastPhi = 0;
        for (let i = 0; i < 9000; i++) {
            const k1u = v, k1v = f(u);
            const k2u = v + 0.5 * h * k1v, k2v = f(u + 0.5 * h * k1u);
            const k3u = v + 0.5 * h * k2v, k3v = f(u + 0.5 * h * k2u);
            const k4u = v + h * k3v, k4v = f(u + h * k3u);
            u += (h / 6) * (k1u + 2 * k2u + 2 * k3u + k4u);
            v += (h / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
            phi += h;
            if (u >= 1) { out.push([1, phi]); break; } // 地平面に落ちた
            if (u <= 1 / RMAX && v < 0) break; // 外へ出た
            const r = 1 / u;
            const dx = r * Math.cos(phi) - lastR * Math.cos(lastPhi);
            const dy = r * Math.sin(phi) - lastR * Math.sin(lastPhi);
            if (dx * dx + dy * dy > 0.0025) {
                out.push([r, phi]);
                lastR = r; lastPhi = phi;
            }
        }
        return out;
    };

    // 遠くの一つの方向から来る、平行な光の束。衝突径数 b ごとに曲がり方が違う。
    // 束の向きは、ゆっくり回す（井戸は軸の周りで同じ形なので、どの向きでも同じ物理）
    const nPaths = small ? 220 : 380;
    const pos = [], aS = [], aLen = [], aSeed = [], aRad = [], idx = [];
    for (let p = 0; p < nPaths; p++) {
        const k = rand();
        let b;
        if (k < 0.4) b = bc * (1 + Math.pow(10, -0.5 - 3.0 * rand())); // 光子球を回ってから出る
        else if (k < 0.55) b = bc * (1 - Math.pow(10, -0.6 - 2.6 * rand())); // 回ってから落ちる
        else b = 0.3 + rand() * 7.5; // 曲がって通り過ぎる・まっすぐ落ちる
        const path = trace(b);
        if (path.length < 3) continue;
        const dir = rand() < 0.5 ? 1 : -1; // 中心の右を通るか、左を通るか
        // 入ってくる向きを、どの道も同じ向き（−x）にそろえる
        const [r0, f0] = path[0], [r1, f1] = path[1];
        const vx = r1 * Math.cos(dir * f1) - r0 * Math.cos(dir * f0);
        const vy = r1 * Math.sin(dir * f1) - r0 * Math.sin(dir * f0);
        const psi = Math.PI - Math.atan2(vy, vx);
        let len = 0, prev = -1, px = 0, py = 0, pz = 0;
        const start = pos.length / 3;
        for (let i = 0; i < path.length; i++) {
            const [r, ph] = path[i];
            const a = psi + dir * ph;
            const x = r * Math.cos(a), y = surf(r) + 0.04, z = -r * Math.sin(a);
            if (i > 0) len += Math.hypot(x - px, y - py, z - pz);
            px = x; py = y; pz = z;
            pos.push(x, y, z);
            aS.push(len);
            aRad.push(r);
            const id = pos.length / 3 - 1;
            if (prev >= 0) idx.push(prev, id);
            prev = id;
        }
        const seed = rand();
        for (let i = start; i < pos.length / 3; i++) {
            aLen.push(len);
            aSeed.push(seed);
        }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
    g.setAttribute('aLen', new THREE.Float32BufferAttribute(aLen, 1));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(aSeed, 1));
    g.setAttribute('aRad', new THREE.Float32BufferAttribute(aRad, 1));
    g.setIndex(idx);
    const rayU = {
        uTime: { value: 0 },
        uTail: { value: 9.0 },
        uSpeed: { value: 2.4 },
        uSilver: { value: pal.silver },
        uGold: { value: pal.gold },
        uGain: { value: 0.12 },
    };
    const m = new THREE.ShaderMaterial({
        uniforms: rayU,
        vertexShader: /* glsl */ `
            uniform float uTime, uTail, uSpeed;
            uniform vec3 uSilver, uGold;
            attribute float aS, aLen, aSeed, aRad;
            varying vec3 vCol;
            varying float vA;
            void main() {
                float cycle = aLen + uTail + 18.0;
                float head = mod(uTime * uSpeed + aSeed * cycle, cycle);
                float d = head - aS;
                float tail = (d > 0.0 && d < uTail) ? pow(clamp(1.0 - d / uTail, 0.0, 1.0), 2.2) : 0.0;
                float rim = 1.0 - smoothstep(2.5, 11.0, aRad);
                vA = (0.03 + 1.6 * tail) * (0.06 + 0.94 * rim);
                vCol = mix(uSilver, mix(uGold, vec3(1.0), 0.4), tail * tail);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: /* glsl */ `
            uniform float uGain;
            varying vec3 vCol;
            varying float vA;
            void main() { gl_FragColor = vec4(vCol * vA * uGain, 1.0); }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
    });
    const rays = new THREE.LineSegments(g, m);
    rays.frustumCulled = false;
    scene.add(rays);

    return {
        scene,
        camera,
        decay: 0.82,
        exposure: 1.4,
        update(t, s) {
            gridU.uTime.value = t;
            rayU.uTime.value = t;
            rays.rotation.y = t * 0.012;
            const elev = lerp(0.62, 1.2, s.scroll) + s.py * 0.05;
            const az = 0.3 + t * 0.01 + s.px * 0.12;
            const dist = lerp(27, 21, s.scroll) * s.fit;
            camera.position.set(
                dist * Math.cos(elev) * Math.sin(az),
                2.2 + dist * Math.sin(elev),
                dist * Math.cos(elev) * Math.cos(az)
            );
            camera.lookAt(0, 2.0, 0);
        },
    };
}

// ---------------------------------------------------------------------------
// binary — 二つで一つ
//   二つの重さが、共通の重心の周りを角速度 Ω で回る。重力波は、その倍の 2Ω で出る（四重極）。
//   波の位相：θ = 2(φ − Ω(t − r/c))。r/c は遅れ（遠くほど前の時刻の様子が届く）。
//   同じ θ の場所をつなぐと、外へ広がる二本の腕のらせんになる。
//   向きによる強さ：h+ ∝ (1 + cos²ι)/2・cos θ、h× ∝ cos ι・sin θ（ι は回転軸からの角度）。
//   面の輪：波が通ると、輪に沿った長さが伸び縮みする（ひずみ）。縮んだところで点が詰んで明るくなる。
//           上下に揺れる膜の動きは、伸び縮みを見やすくするための模式。
//   二つの重さそのものは描かず、周りの光の輪だけで場所を示す。
// ---------------------------------------------------------------------------
function buildBinary(rand, small, pal) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 400);
    const OMEGA = 0.3, C = 0.4, SEP = 1.0;

    const common = {
        uTime: { value: 0 },
        uOmega: { value: OMEGA },
        uC: { value: C },
        uSilver: { value: pal.silver },
        uGold: { value: pal.gold },
        uCoral: { value: pal.coral },
    };

    // ---- 面の輪 ----
    {
        const nRings = small ? 44 : 70;
        const M = small ? 240 : 360;
        const aR = [], aPhi = [], idx = [];
        for (let k = 0; k < nRings; k++) {
            const r = 1.1 + (k / (nRings - 1)) * 18;
            const base = aR.length;
            for (let m = 0; m < M; m++) {
                aR.push(r);
                aPhi.push((m / M) * TAU);
                idx.push(base + m, base + ((m + 1) % M));
            }
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(aR.length * 3), 3));
        g.setAttribute('aR', new THREE.Float32BufferAttribute(aR, 1));
        g.setAttribute('aPhi', new THREE.Float32BufferAttribute(aPhi, 1));
        g.setIndex(idx);
        const m = new THREE.ShaderMaterial({
            uniforms: { ...common, uGain: { value: 0.06 } },
            vertexShader: /* glsl */ `
                uniform float uTime, uOmega, uC;
                uniform vec3 uSilver, uGold;
                attribute float aR, aPhi;
                varying vec3 vCol;
                varying float vA;
                void main() {
                    float th = 2.0 * (aPhi - uOmega * (uTime - aR / uC));
                    float env = smoothstep(1.0, 3.2, aR) / (1.0 + 0.16 * aR);
                    float phi = aPhi + 0.11 * env * sin(th);
                    float y = 0.95 * env * cos(th);
                    vec3 p = vec3(aR * cos(phi), y, -aR * sin(phi));
                    float crest = pow(0.5 + 0.5 * cos(th), 3.0);
                    float fade = 1.0 - smoothstep(12.0, 19.0, aR);
                    vA = (0.18 + 1.5 * crest * (0.3 + 3.0 * env)) * (0.2 + 0.8 * fade);
                    vCol = mix(uSilver, uGold, 0.35 * crest * exp(-aR / 6.0));
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uGain;
                varying vec3 vCol;
                varying float vA;
                void main() { gl_FragColor = vec4(vCol * vA * uGain, 1.0); }
            `,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        });
        const lines = new THREE.LineSegments(g, m);
        lines.frustumCulled = false;
        scene.add(lines);
    }

    // ---- 空間に広がる波面（球殻の上の粒） ----
    {
        const N = small ? 30000 : 70000;
        const pos = new Float32Array(N * 3);
        const aR = new Float32Array(N), aPhi = new Float32Array(N), aCosI = new Float32Array(N);
        for (let i = 0; i < N; i++) {
            const r = 1.6 + Math.pow(rand(), 0.8) * 20;
            const c = 2 * rand() - 1;
            const s = Math.sqrt(1 - c * c);
            const phi = rand() * TAU;
            pos[i * 3] = r * s * Math.cos(phi);
            pos[i * 3 + 1] = r * c;
            pos[i * 3 + 2] = -r * s * Math.sin(phi);
            aR[i] = r; aPhi[i] = phi; aCosI[i] = c;
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        g.setAttribute('aR', new THREE.BufferAttribute(aR, 1));
        g.setAttribute('aPhi', new THREE.BufferAttribute(aPhi, 1));
        g.setAttribute('aCosI', new THREE.BufferAttribute(aCosI, 1));
        var shellU = { ...common, uPx: { value: 1 }, uGain: { value: 0.16 } };
        const m = new THREE.ShaderMaterial({
            uniforms: shellU,
            vertexShader: /* glsl */ `
                uniform float uTime, uOmega, uC, uPx;
                uniform vec3 uSilver, uCoral;
                attribute float aR, aPhi, aCosI;
                varying vec3 vCol;
                varying float vA;
                void main() {
                    float th = 2.0 * (aPhi - uOmega * (uTime - aR / uC));
                    float hp = 0.5 * (1.0 + aCosI * aCosI) * cos(th);
                    float hx = aCosI * sin(th);
                    float crest = pow(max(hp + 0.5 * hx, 0.0), 4.0);
                    float env = 1.0 / (1.0 + 0.12 * aR);
                    vA = 0.06 + 2.4 * crest * env;
                    vCol = mix(uSilver, uCoral, 0.45 * crest);
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = 1.5 * uPx * clamp(20.0 / -mv.z, 0.6, 2.0);
                }
            `,
            fragmentShader: DOT_FS,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        });
        const pts = new THREE.Points(g, m);
        pts.frustumCulled = false;
        scene.add(pts);
    }

    // ---- 二つの重さ（描かず、縁の光で場所を示す） ----
    const ringU = { uK: { value: 1 }, uGold: { value: pal.gold } };
    const ringMat = new THREE.ShaderMaterial({
        uniforms: ringU,
        vertexShader: /* glsl */ `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: /* glsl */ `
            uniform float uK;
            uniform vec3 uGold;
            varying vec2 vUv;
            float sq(float x) { return x * x; }
            void main() {
                float rho = length(vUv - 0.5) * 2.0;
                float thin = exp(-sq((rho - 0.42) / 0.035));
                float soft = exp(-sq((rho - 0.5) / 0.22)) * 0.25;
                gl_FragColor = vec4(mix(vec3(1.0), uGold, 0.5) * (thin + soft) * uK, 1.0);
            }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false,
    });
    const coreMat = new THREE.ShaderMaterial({
        vertexShader: /* glsl */ `
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: /* glsl */ `
            varying vec2 vUv;
            void main() {
                if (length(vUv - 0.5) > 0.5) discard;
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            }
        `,
        depthTest: false,
        depthWrite: false,
    });
    const bodies = [0, 1].map(() => {
        const core = billboard(0.42, coreMat);
        const ring = billboard(1.0, ringMat);
        core.renderOrder = 3;
        ring.renderOrder = 4;
        scene.add(core, ring);
        return { core, ring };
    });

    return {
        scene,
        camera,
        decay: 0.7,
        exposure: 1.3,
        update(t, s) {
            common.uTime.value = t;
            shellU.uPx.value = s.dpr;
            ringU.uK.value = (1 - s.decay) * 0.8;
            const ang = OMEGA * t;
            bodies.forEach((b, i) => {
                const a = ang + i * Math.PI;
                b.core.position.set((SEP / 2) * Math.cos(a), 0, -(SEP / 2) * Math.sin(a));
                b.ring.position.copy(b.core.position);
            });
            const elev = lerp(0.42, 1.15, s.scroll) + s.py * 0.05;
            const az = 0.2 + t * 0.008 + s.px * 0.12;
            const dist = lerp(28, 22, s.scroll) * s.fit;
            camera.position.set(
                dist * Math.cos(elev) * Math.sin(az),
                dist * Math.sin(elev),
                dist * Math.cos(elev) * Math.cos(az)
            );
            camera.lookAt(0, 0, 0);
            for (const b of bodies) {
                b.core.quaternion.copy(camera.quaternion);
                b.ring.quaternion.copy(camera.quaternion);
            }
        },
    };
}

const BUILDERS = { orbit: buildOrbit, lens: buildLens, binary: buildBinary };

// ---------------------------------------------------------------------------
// 舞台：描画先の往復（残像）・仕上げ（地の色・明るさの丸め・ディザ）・スクロールと指の追従
// ---------------------------------------------------------------------------
function start() {
    const container = document.getElementById('webgl-container');
    if (!container) return;
    const variantName = pickVariant();
    // 粒の数は端末の画面で決める（iframe の中でも、スマートフォンかどうかで分ける）
    const small = Math.min(window.screen.width, window.screen.height) < 700;
    const pal = palette();

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.dataset.background = `love-${variantName}`;
    container.appendChild(renderer.domElement);

    const gl = renderer.getContext();
    const canHalf = !!(gl.getExtension('EXT_color_buffer_half_float') || gl.getExtension('EXT_color_buffer_float'));
    const rtOpts = { type: canHalf ? THREE.HalfFloatType : THREE.UnsignedByteType, depthBuffer: true };
    const size = () => [Math.floor(window.innerWidth * dpr), Math.floor(window.innerHeight * dpr)];
    let [w, h] = size();
    let rtA = new THREE.WebGLRenderTarget(w, h, rtOpts);
    let rtB = new THREE.WebGLRenderTarget(w, h, rtOpts);

    const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quadGeo = new THREE.PlaneGeometry(2, 2);
    const fadeMat = new THREE.ShaderMaterial({
        uniforms: { tPrev: { value: null }, uDecay: { value: 0.9 }, uFloor: { value: canHalf ? 0.0015 : 1.5 / 255 } },
        vertexShader: QUAD_VS,
        fragmentShader: /* glsl */ `
            uniform sampler2D tPrev;
            uniform float uDecay, uFloor;
            varying vec2 vUv;
            void main() {
                vec3 c = texture2D(tPrev, vUv).rgb;
                gl_FragColor = vec4(max(c * uDecay - uFloor, 0.0), 1.0);
            }
        `,
        depthTest: false,
        depthWrite: false,
    });
    const fadeScene = new THREE.Scene();
    fadeScene.add(new THREE.Mesh(quadGeo, fadeMat));

    const compMat = new THREE.ShaderMaterial({
        uniforms: {
            tAccum: { value: null },
            uRes: { value: new THREE.Vector2(w, h) },
            uBgInner: { value: pal.bgInner },
            uBgOuter: { value: pal.bgOuter },
            uExposure: { value: 1.2 },
        },
        vertexShader: QUAD_VS,
        fragmentShader: /* glsl */ `
            uniform sampler2D tAccum;
            uniform vec2 uRes;
            uniform vec3 uBgInner, uBgOuter;
            uniform float uExposure;
            varying vec2 vUv;
            float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
            void main() {
                vec3 a = texture2D(tAccum, vUv).rgb;
                vec3 c = 1.0 - exp(-a * uExposure);
                vec2 q = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
                float v = smoothstep(0.15, 1.1, length(q));
                vec3 col = mix(uBgInner, uBgOuter, v) + c * (1.0 - 0.4 * v);
                col += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
                gl_FragColor = vec4(col, 1.0);
            }
        `,
        depthTest: false,
        depthWrite: false,
    });
    const compScene = new THREE.Scene();
    compScene.add(new THREE.Mesh(quadGeo, compMat));

    const variant = BUILDERS[variantName](makeRng(20261110), small, pal);
    compMat.uniforms.uExposure.value = variant.exposure;

    const state = { scroll: 0, px: 0, py: 0, fit: 1, dpr, decay: variant.decay };
    let scrollTarget = 0, pxTarget = 0, pyTarget = 0;
    const readScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollTarget = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };
    const fitCamera = () => {
        const aspect = window.innerWidth / window.innerHeight;
        variant.camera.aspect = aspect;
        variant.camera.updateProjectionMatrix();
        // 縦長の画面では引いて、横の広がりが収まるようにする
        state.fit = aspect >= 1 ? 1 : 1 + (1 / aspect - 1) * 0.55;
    };
    fitCamera();
    readScroll();
    state.scroll = scrollTarget;

    // `?motion=still` は確かめ用：動きを減らす設定と同じ一枚を出す
    let stillQuery = false;
    try {
        stillQuery = new URLSearchParams(window.location.search).get('motion') === 'still';
    } catch (_) { /* 既定のまま */ }
    const reduce = stillQuery || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    let t = 0;

    const step = (dt) => {
        t += dt;
        const k = 1 - Math.exp(-dt * 2.5);
        state.scroll += (scrollTarget - state.scroll) * k;
        state.px += (pxTarget - state.px) * k;
        state.py += (pyTarget - state.py) * k;
        variant.update(t, state);

        fadeMat.uniforms.tPrev.value = rtA.texture;
        fadeMat.uniforms.uDecay.value = Math.pow(variant.decay, dt * 60);
        renderer.setRenderTarget(rtB);
        renderer.render(fadeScene, quadCam);
        renderer.clearDepth();
        renderer.render(variant.scene, variant.camera);
        const tmp = rtA; rtA = rtB; rtB = tmp;
    };
    const present = () => {
        renderer.setRenderTarget(null);
        compMat.uniforms.tAccum.value = rtA.texture;
        renderer.render(compScene, quadCam);
    };
    // 動きを減らす設定のとき：少し進めて残像を溜めた一枚を見せて止める
    const still = () => {
        t = 40;
        for (let i = 0; i < 150; i++) step(1 / 60);
        present();
    };

    let raf = 0, last = 0;
    const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
        last = now;
        step(dt);
        present();
    };
    const run = () => {
        if (raf || reduce) return;
        last = 0;
        raf = requestAnimationFrame(loop);
    };
    const stop = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
    };

    window.addEventListener('scroll', readScroll, { passive: true });
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('pointermove', (e) => {
            pxTarget = (e.clientX / window.innerWidth) * 2 - 1;
            pyTarget = (e.clientY / window.innerHeight) * 2 - 1;
        }, { passive: true });
    }
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            [w, h] = size();
            rtA.setSize(w, h);
            rtB.setSize(w, h);
            compMat.uniforms.uRes.value.set(w, h);
            fitCamera();
            readScroll();
            if (reduce) still();
        }, 120);
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop(); else run();
    });

    if (reduce) still(); else run();
}

try {
    start();
} catch (error) {
    console.warn('[project-design] love-field background failed.', error);
    throw error;
}
