// Love駆動開発の背景（`?bg=membrane`）。創造とはの背景（cs/src/scene-intent.js・`cs/?graphic=i`）の作り方を移したもの。
//
// 作り方は cs と同じ：線も粒も置かない。画面いっぱいの板一枚のシェーダーで、画素ごとに奥へ光線を進め、
// 空間に置いた数式の薄い膜に当たったところだけを光らせ、手前から半透明に積む（体積のレイマーチ）。
// 歩幅がほぼ一定なので、膜の断面が細い弧になって何重にも並び、光る繊細な線の束に見える。
// 最初の一歩を画素ごとにずらすと線がざらつくので、ずらさない（uJitter = 0。cs も時刻の値が大きく、ずらしがほぼ効いていない）。
// 色の積み方・2.04 乗・1 − exp(−2.45·色)・呼吸・歩数・膜の周波数と流れは cs の値をそのまま使う。
//
// cs から変えたところ（Love駆動開発のため）：
//   ① 膜を二枚にした。ジャイロイド g = sin x·cos y + sin y·cos z + sin z·cos x の、g = +c と g = −c の二つの面。
//      二枚は決して交わらず、触れず、互いに絡み合ったまま空間を分けている（二重ジャイロイド）。「二つで一つ」。
//      一枚は金へ、もう一枚は白銀へ寄せた色。
//   ② 渦のねじれを、軸に近いほど強くした（回す角度に 1/(a + r²) を足す）。軸そのもの（源）は描かず、
//      周りの膜の巻き方だけが、そこに何かがあることを示す。「見えない源」。
//   ④ カメラを管の中へ少し寄せた（3.5 → 2.7）。輪の線が画面の端まで広がる。色の冷たい側を navy 寄りに落ち着かせた。
//   ③ スクロールで、前半（駆動源）は渦の芯を覗く向き、後半（開発）は渦がほどけて横へ広がる向きへ、ゆっくり回る。
//
// WebGL（three.js）。動きを減らす設定では一枚を描いて止める。タブが隠れたら止める。`?motion=still` で確かめ用の一枚。

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

const VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform float uBreath;
uniform vec2 uResolution;
uniform float uMaxSteps;
uniform float uYaw;
uniform float uPitch;
uniform float uVortex;
uniform float uSplit;
uniform float uShell;
uniform float uJitter;
uniform float uDist;
uniform float uMembraneGain;
uniform vec3 uCool;
uniform vec3 uWarm;
uniform vec3 uGate;
uniform vec3 uGold;
uniform vec3 uSilver;

const float FAR = 12.0;
const float FLOW = 0.21;
const float FREQ_LOW = 2.5;
const float FREQ_HIGH = 1.0;
const float THICK_LOW = 0.085;
const float THICK_HIGH = 0.15;
const float ENVELOPE = 2.44;
const float DENSITY_GAIN = 0.2;
const float STEP_NEAR = 0.084;
const float STEP_FAR = 0.215;
const float GATE_TINT = 0.88;
const float LIGHT_BOOST = 1.55;
const float PRE_GAMMA = 2.04;
const float EXPOSURE = 2.45;

// 画素ごとの最初の一歩のずらし（cs と同じ形。WebGL の highp で使う）
float hash21(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

mat2 rot2(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

float gyroid(vec3 p) {
    return dot(sin(p), cos(p.yzx));
}

// 二枚の膜の濃さ（x：g = +c の膜、y：g = −c の膜）と、軸のまわりの柔らかい層（z）
vec3 getDensity(vec3 p, float progress, float breath, float timeSec) {
    vec3 q = p;
    // 軸（x）の周りの渦。軸に近いほど強くねじれる（見えない源）
    float rad2 = dot(p.yz, p.yz);
    q.yz *= rot2(p.x * 0.3 + timeSec * 0.1 + uVortex / (0.45 + rad2));
    // cs と同じ、奥行きでのねじれと流れと軸のうねり
    q.xy *= rot2(p.z * 0.24 + timeSec * 0.12);
    q.x -= timeSec * FLOW;
    vec2 axisCurve = vec2(
        0.24 * sin(p.x * 0.66 + timeSec * 0.31),
        0.18 * cos(p.x * 0.53 - timeSec * 0.28)
    );
    q.yz -= axisCurve;

    float frequency = mix(FREQ_LOW, FREQ_HIGH, progress);
    float g0 = gyroid(q * frequency);
    float g1 = gyroid((q + vec3(1.2, -0.8, 0.5)) * (frequency * 1.35));
    float field = g0 * 0.74 + g1 * 0.26;

    float thickness = mix(THICK_LOW, THICK_HIGH, progress) * (1.0 + breath * 0.38);
    float c = uSplit;
    float a = 1.0 - smoothstep(0.0, thickness, abs(field - c));
    float b = 1.0 - smoothstep(0.0, thickness, abs(field + c));
    // cs の shell：軸のまわりの柔らかい層。歩幅の縞で、細い同心の輪の束になる
    float radial = length(q.yz);
    float shell = exp(-3.6 * radial * radial) * (0.22 + 0.46 * progress) * uShell;
    return vec3(a, b, shell);
}

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float aspect = max(uResolution.x / max(uResolution.y, 1.0), 0.0001);
    uv.x *= aspect;

    float breath = clamp(uBreath, 0.0, 1.0);

    vec3 ro = vec3(0.0, 0.0, uDist);
    vec3 rd = normalize(vec3(uv, -1.8));
    rd.xz = rot2(uYaw) * rd.xz;
    rd.yz = rot2(uPitch) * rd.yz;
    ro.xz = rot2(uYaw) * ro.xz;
    ro.yz = rot2(uPitch) * ro.yz;
    rd = normalize(rd);

    vec3 col = vec3(0.0);
    float transmittance = 1.0;
    float timeSec = uTime;
    float t = hash21(gl_FragCoord.xy + vec2(mod(timeSec * 17.0, 1000.0), mod(timeSec * 11.0, 1000.0))) * uJitter;

    for (int i = 0; i < 64; i++) {
        if (float(i) >= uMaxSteps) break;

        vec3 p = ro + rd * t;
        float progress = smoothstep(-2.5, 2.5, p.x);
        float radial = length(p.yz);

        float envelope = smoothstep(ENVELOPE, 0.08, radial);
        envelope *= smoothstep(-3.0, -1.75, p.x);
        envelope *= 1.0 - smoothstep(4.35, 5.75, p.x);

        if (envelope > 0.0005) {
            vec3 dens = getDensity(p, progress, breath, timeSec) * envelope;
            // 膜が二枚になったぶん、一枚あたりを cs（0.82）より薄くして、線のくっきりさを保つ
            float sum = (dens.x + dens.y) * uMembraneGain + dens.z * 0.18;
            if (sum > 0.0004) {
                vec3 tint = mix(uCool, uWarm, pow(progress, 1.05));
                float gate = max(1.0 - abs(progress - 0.5) * 2.0, 0.0);
                tint += uGate * gate * gate * GATE_TINT;
                // 二枚の膜の色の寄せ（金と白銀）
                vec3 memb = (uGold * dens.x + uSilver * dens.y + vec3(dens.z)) / max(dens.x + dens.y + dens.z, 1e-4);
                tint *= memb;

                float breathLight = 0.86 + 0.3 * breath;
                float weight = sum * breathLight * DENSITY_GAIN * LIGHT_BOOST;
                float stepAlpha = clamp(weight, 0.0, 0.34);

                col += tint * stepAlpha * transmittance;
                transmittance *= (1.0 - stepAlpha);
                if (transmittance < 0.024) break;
            }
        }

        float stepLen = mix(STEP_NEAR, STEP_FAR, 1.0 - envelope);
        t += stepLen;
        if (t > FAR) break;
    }

    float alpha = 1.0 - transmittance;
    alpha = smoothstep(0.0, 0.85, alpha);
    if (alpha < 0.01) discard;

    col = pow(max(col, vec3(0.0)), vec3(PRE_GAMMA));
    col = 1.0 - exp(-col * EXPOSURE);
    float vignette = 1.0 - dot(uv, uv) * 0.01;
    col *= vignette;
    alpha *= vignette;

    if (alpha < 0.012) discard;
    gl_FragColor = vec4(col, min(alpha, 0.96));
}
`;

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function start() {
    const container = document.getElementById('webgl-container');
    if (!container) return;

    let stillQuery = false;
    try {
        stillQuery = new URLSearchParams(window.location.search).get('motion') === 'still';
    } catch (_) { /* 既定のまま */ }
    // 確かめ用の上書き（?yaw=&pitch=&vortex=&split=&t=）
    const q = (() => { try { return new URLSearchParams(window.location.search); } catch (_) { return new URLSearchParams(); } })();
    const qn = (k) => { const v = parseFloat(q.get(k)); return Number.isFinite(v) ? v : null; };
    // 色の上書き（?cool=0.12,0.2,0.68 のように三つの数）
    const qv = (k) => {
        const parts = String(q.get(k) || '').split(',').map(Number);
        return parts.length === 3 && parts.every(Number.isFinite) ? parts : null;
    };
    const reduce = stillQuery || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    // cs と同じ：画素比は 1.4 まで、さらに 0.9 倍
    const pixelRatio = Math.max(0.5, Math.min(window.devicePixelRatio || 1, 1.4) * 0.9);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x02050d, 1);
    renderer.domElement.dataset.background = 'love-membrane';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const shortEdge = Math.min(window.innerWidth, window.innerHeight);

    const uniforms = {
        uTime: { value: 0 },
        uBreath: { value: 0.5 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMaxSteps: { value: shortEdge < 900 ? 34 : 52 },
        uYaw: { value: 0 },
        uPitch: { value: 0 },
        uVortex: { value: 1.2 },
        uSplit: { value: 0.42 },
        uShell: { value: 1.0 },
        uJitter: { value: 0.0 },
        uDist: { value: 2.7 },
        uMembraneGain: { value: 0.55 },
        // cs の色（冷たい青 → 暖かい白、真ん中に金の門）を、tokens の navy・gold・coral の側へ少し寄せた
        uCool: { value: new THREE.Vector3(0.2, 0.24, 0.46) },
        uWarm: { value: new THREE.Vector3(1.0, 0.96, 0.95) },
        uGate: { value: new THREE.Vector3(1.3, 0.82, 0.32) },
        // 二枚の膜の寄せ（1 を中心に、少しだけ）
        uGold: { value: new THREE.Vector3(1.08, 0.98, 0.86) },
        uSilver: { value: new THREE.Vector3(0.9, 0.97, 1.1) },
    };
    for (const [key, name] of [['cool', 'uCool'], ['warm', 'uWarm'], ['gate', 'uGate'], ['gold', 'uGold'], ['silver', 'uSilver']]) {
        const v = qv(key);
        if (v) uniforms[name].value.set(v[0], v[1], v[2]);
    }
    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        depthTest: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    mesh.frustumCulled = false;
    scene.add(mesh);

    // スクロールと指
    let scrollTarget = 0, scroll = 0, pxTarget = 0, px = 0;
    const readScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollTarget = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };
    readScroll();
    scroll = scrollTarget;

    const T0 = qn('t') ?? 458; // cs のループの基準の時刻。最初から膜が育った様子で始める
    let t = T0;
    const BREATH_PERIOD = 8.0;

    const update = (dt) => {
        t += dt;
        const k = 1 - Math.exp(-dt * 2.0);
        scroll += (scrollTarget - scroll) * k;
        px += (pxTarget - px) * k;
        uniforms.uTime.value = t;
        uniforms.uBreath.value = 0.5 + 0.5 * Math.sin((t / BREATH_PERIOD) * Math.PI * 2 - Math.PI / 2);
        // 前半は渦の芯を覗く向き（軸に沿う）、後半は少し横へ回り、渦がゆるむ。
        // 斜めに回りすぎると、輪の線がざらついた縞に変わるので、回す幅は小さくする
        uniforms.uYaw.value = qn('yaw') ?? (lerp(-1.57, -1.35, scroll) + Math.sin(t * 0.013) * 0.05 + px * 0.04);
        uniforms.uPitch.value = qn('pitch') ?? (lerp(0.05, 0.12, scroll) + Math.sin(t * 0.011) * 0.03);
        uniforms.uVortex.value = qn('vortex') ?? lerp(0.55, 0.3, scroll);
        if (qn('split') !== null) uniforms.uSplit.value = qn('split');
        if (qn('shell') !== null) uniforms.uShell.value = qn('shell');
        if (qn('jitter') !== null) uniforms.uJitter.value = qn('jitter');
        if (qn('dist') !== null) uniforms.uDist.value = qn('dist');
        if (qn('mg') !== null) uniforms.uMembraneGain.value = qn('mg');
    };
    const render = () => renderer.render(scene, camera);

    let raf = 0, last = 0;
    const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
        last = now;
        update(dt);
        render();
    };
    const run = () => {
        if (raf || reduce) return;
        last = 0;
        // 最初の一枚はすぐ描く（次のフレームを待たない）
        update(0);
        render();
        raf = requestAnimationFrame(loop);
    };
    const stop = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
    };
    const still = () => {
        update(0);
        render();
    };

    window.addEventListener('scroll', () => {
        readScroll();
        if (reduce) { scroll = scrollTarget; still(); }
    }, { passive: true });
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('pointermove', (e) => {
            pxTarget = (e.clientX / window.innerWidth) * 2 - 1;
        }, { passive: true });
    }
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
            uniforms.uMaxSteps.value = Math.min(window.innerWidth, window.innerHeight) < 900 ? 34 : 52;
            readScroll();
            if (reduce) still();
        }, 120);
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop(); else run();
    });

    if (reduce) still(); else run();
}

start();
