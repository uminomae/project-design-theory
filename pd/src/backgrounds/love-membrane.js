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
//   ③ カメラは管の軸の上から、中央の円の中心を正面に見て、奥へ落ちていく（膜の場をカメラへ送る uFall）。
//      落ちる速さは、読み進めるほど速く、呼吸に合わせて満ち引きする。渦のねじれも一緒に近づくので、螺旋を描いて落ちる。
//   ⑤ 質量による歪み：光の道を一歩ごとに軸へ向けて曲げる（uLens）。重力レンズのように、奥の輪が中心の暗い穴へ
//      引き込まれて詰まって見える。強くすると画面全体が輪で埋まって白く飽和するので、弱く（0.1）。
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
uniform float uFall;
uniform float uLens;
uniform float uDim; // 1 がふつう。長く動かしたあと始めに戻すとき、いったん 0 へ
uniform vec3 uCool;
uniform vec3 uWarm;
uniform vec3 uGate;
uniform vec3 uGold;
uniform vec3 uSilver;

const float FAR = 12.0;
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
    // 落ちていく：膜の場そのものを、カメラへ向けて uFall だけ送る（カメラが軸に沿って奥へ進むのと同じ）。
    // 色と周波数（progress）はカメラに対して決まったままなので、奥の金の光にはいつまでも届かない
    // 回転のあとに足す（cs の流れと同じ位置。回転の前に足すと、大きな値が横へ混ざって形が崩れる）
    float X = p.x + uFall;
    // 軸（x）の周りの渦。軸に近いほど強くねじれる（見えない源）
    float rad2 = dot(p.yz, p.yz);
    q.yz *= rot2(X * 0.3 + timeSec * 0.1 + uVortex / (0.45 + rad2));
    // cs と同じ、奥行きでのねじれと軸のうねり（cs の流れ FLOW は、落ちる動き uFall に置き換えた）
    q.xy *= rot2(p.z * 0.24 + timeSec * 0.12);
    q.x += uFall;
    vec2 axisCurve = vec2(
        0.24 * sin(X * 0.66 + timeSec * 0.31),
        0.18 * cos(X * 0.53 - timeSec * 0.28)
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

    vec3 p = ro + rd * t;
    for (int i = 0; i < 64; i++) {
        if (float(i) >= uMaxSteps) break;

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
        // 質量による歪み：光の道を、一歩ごとに軸へ向けて曲げる（軸に近いほど強く）。
        // 重力レンズのように、奥の輪が中心へ引き込まれて詰まって見える
        vec2 toAxis = p.yz;
        float d2 = dot(toAxis, toAxis) + 0.2;
        rd.yz -= toAxis / d2 * (uLens * stepLen);
        rd = normalize(rd);
        p += rd * stepLen;
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

    alpha *= uDim;
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
    // 描く細かさは、画面の大きさで変える（描く画素の数に上限を置き、小さく描いて画面いっぱいに引き伸ばす）。
    // 重さは描く画素の数にほぼ比例する（1440×900・M4 の測り：cs と同じ細かさ＝1814×1134 で一枚 27〜29ms＝約 35fps、
    // 1361×851 で 18ms、907×567 で 10ms・2026-11-10）。上限は 907×567 ほど（52 万画素）。pjdhiro 2026-11-10「0.5 でも問題ないね。
    // レスポンシブのように画面サイズで変えることはできないの？」。広い画面ほど細かさを下げ、狭い画面（スマートフォン）は上限に届かないので
    // cs と同じ細かさ（画素比 1.4 まで、さらに 0.9 倍）のまま。
    // ?rs=0.5 のように渡すと、上限を使わず、cs と同じ細かさに掛ける（見比べ用）。?px=800000 で上限を上書き。
    const PIXEL_BUDGET = Math.max(qn('px') ?? 520000, 50000);
    const rsOverride = qn('rs');
    const pixelRatioFor = (w, h) => {
        const base = Math.min(window.devicePixelRatio || 1, 1.4) * 0.9;
        if (rsOverride !== null) return Math.max(0.25, base * Math.min(Math.max(rsOverride, 0.25), 1));
        return Math.max(0.25, Math.min(base, Math.sqrt(PIXEL_BUDGET / (w * h))));
    };
    renderer.setPixelRatio(pixelRatioFor(window.innerWidth, window.innerHeight));
    renderer.setSize(window.innerWidth, window.innerHeight);
    // ?bgc=02050d：地の色の上書き
    let bgc = /^[0-9a-fA-F]{6}$/.test(q.get('bgc') || '') ? parseInt(q.get('bgc'), 16) : 0x02050d;
    renderer.setClearColor(bgc, 1);
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
        uFall: { value: 0 },
        uLens: { value: 0.1 },
        uDim: { value: 1 },
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
    // 最初の画面（.ldd-intro・背景を全画面で見せるぶん）は、読み進めた量に数えない。
    // 読書欄の上端に着いたところを 0 にする（docs/DESIGN-RULES-LDD.md §1）
    const intro = document.querySelector('.ldd-intro');
    const readScroll = () => {
        const off = intro ? intro.offsetHeight : 0;
        const max = document.documentElement.scrollHeight - window.innerHeight - off;
        scrollTarget = max > 0 ? Math.min(Math.max((window.scrollY - off) / max, 0), 1) : 0;
    };
    readScroll();
    scroll = scrollTarget;

    // 出発点は cs の流れの分（458 秒 × 0.21）。前に整えた見え方から落ち始める
    const FALL0 = qn('fall') ?? -96.18;
    const T0 = qn('t') ?? 458; // cs のループの基準の時刻。最初から膜が育った様子で始める
    let fall = FALL0;
    let t = T0;
    const BREATH_PERIOD = 8.0;
    const OMEGA_B = (Math.PI * 2) / BREATH_PERIOD;
    // 読み始め（スクロール 0）のまま e 秒たったときの落ちた量（呼吸の満ち引きも含めて積分したもの）
    const fallAt = (e) => FALL0 + 0.25 * e - (0.0625 / OMEGA_B) * (Math.sin(OMEGA_B * (T0 + e)) - Math.sin(OMEGA_B * T0));
    // 調整のページ（studio.html）が手で動かすもの。名前が入っている uniform は、自動で動かさない
    // 始める時刻と位置：読み始めのまま e 秒たったときと同じところから。既定は 1:30（pjdhiro 2026-11-10「開始位置は 1:30 のとこがいい」）。
    // ?e=秒 で上書き（調整の板の書き出し）
    const START_E = qn('e') ?? 90;
    t = T0 + START_E;
    fall = fallAt(START_E);
    const manual = new Set();
    let paused = false;
    let speedOverride = qn('speed');
    // 長く動かしたら始めに戻す：時刻と落ちた量は増え続け、数時間で計算の桁が足りず形が粗くなりうる。
    // 一時間ごとに、ゆっくり暗くして始めの値へ戻し、ゆっくり明るくする（pjdhiro 2026-11-10・違和感帳「手当てを入れる」）。
    // ?reset=秒 で間隔を上書き（確かめ用）。
    const RESET_AFTER = qn('reset') ?? 3600;
    const FADE = 2.0;
    let sinceReset = 0;
    let dim = 1;
    let resetting = 0; // 0 ふつう・1 暗くしている・2 明るくしている

    const update = (dt) => {
        if (paused) dt = 0;
        sinceReset += dt;
        if (resetting === 0 && sinceReset > RESET_AFTER && manual.size === 0) resetting = 1;
        if (resetting === 1) {
            dim = Math.max(0, dim - dt / FADE);
            if (dim === 0) { t = T0 + START_E; fall = fallAt(START_E); sinceReset = 0; resetting = 2; }
        } else if (resetting === 2) {
            dim = Math.min(1, dim + dt / FADE);
            if (dim === 1) resetting = 0;
        }
        uniforms.uDim.value = dim;
        t += dt;
        const k = 1 - Math.exp(-dt * 2.0);
        scroll += (scrollTarget - scroll) * k;
        px += (pxTarget - px) * k;
        uniforms.uTime.value = t;
        const breath = 0.5 + 0.5 * Math.sin((t / BREATH_PERIOD) * Math.PI * 2 - Math.PI / 2);
        uniforms.uBreath.value = breath;
        // 落ちる速さ：読み進めるほど速く引き込まれ、呼吸に合わせて引く力が満ち引きする
        const fallSpeed = (speedOverride ?? lerp(0.25, 0.6, scroll)) * (0.75 + 0.5 * breath);
        fall += fallSpeed * dt;
        uniforms.uFall.value = fall;
        // 軸の上から、中央の円の中心を正面に見る。ゆらぎはごく小さく
        // （1〜2 分のあいだでも、左右 −89° 前後・上下 ±1° 未満しか動かない）
        if (!manual.has('uYaw')) uniforms.uYaw.value = qn('yaw') ?? (-Math.PI / 2 + Math.sin(t * 0.013) * 0.03 + px * 0.03);
        if (!manual.has('uPitch')) uniforms.uPitch.value = qn('pitch') ?? (Math.sin(t * 0.011) * 0.02);
        if (!manual.has('uVortex')) uniforms.uVortex.value = qn('vortex') ?? lerp(0.55, 0.3, scroll);
        if (manual.size) return;
        if (qn('split') !== null) uniforms.uSplit.value = qn('split');
        if (qn('shell') !== null) uniforms.uShell.value = qn('shell');
        if (qn('jitter') !== null) uniforms.uJitter.value = qn('jitter');
        if (qn('dist') !== null) uniforms.uDist.value = qn('dist');
        if (qn('mg') !== null) uniforms.uMembraneGain.value = qn('mg');
        if (qn('lens') !== null) uniforms.uLens.value = qn('lens');
    };
    const render = () => renderer.render(scene, camera);

    // ?fps：左上に、一秒ごとの描いた枚数と一枚あたりの間隔を出す（確かめ用）
    let fpsEl = null, fpsN = 0, fpsT0 = 0, fpsWorst = 0;
    if (q.has('fps')) {
        fpsEl = document.createElement('div');
        fpsEl.style.cssText = 'position:fixed;left:8px;top:8px;z-index:2000;font:12px/1.4 ui-monospace,monospace;color:#e6ebf5;background:rgba(0,0,0,0.6);padding:4px 8px;border-radius:4px;pointer-events:none;white-space:pre';
        fpsEl.textContent = '…';
        document.body.appendChild(fpsEl);
    }
    const countFps = (now, gap) => {
        if (!fpsEl) return;
        if (!fpsT0) fpsT0 = now;
        fpsN++;
        fpsWorst = Math.max(fpsWorst, gap);
        if (now - fpsT0 >= 1000) {
            const c = renderer.domElement;
            fpsEl.textContent = `${Math.round((fpsN * 1000) / (now - fpsT0))} fps  最長 ${Math.round(fpsWorst)}ms\n描く画素 ${c.width}×${c.height}（画素比 ${renderer.getPixelRatio().toFixed(2)}${rsOverride !== null ? '・rs ' + rsOverride : ''}）`;
            fpsN = 0; fpsT0 = now; fpsWorst = 0;
        }
    };

    let raf = 0, last = 0;
    const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
        if (last) countFps(now, now - last);
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
    // 調整のページでは、マウスでカメラを動かさない（ドラッグは時刻の送り戻しに使う）
    if (!q.has('studio') && window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('pointermove', (e) => {
            pxTarget = (e.clientX / window.innerWidth) * 2 - 1;
        }, { passive: true });
    }
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderer.setPixelRatio(pixelRatioFor(window.innerWidth, window.innerHeight));
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

    // 調整の板（membrane-panel.js）から動かすための入口
    {
        window.loveMembrane = {
            uniforms,
            manual,
            T0,
            get elapsed() { return t - T0; },
            get fall() { return fall; },
            get paused() { return paused; },
            set paused(v) { paused = Boolean(v); },
            get speed() { return speedOverride; },
            set speed(v) { speedOverride = v; },
            // 経過秒を指定して、その時刻・その位置へ跳ぶ（読み始めのまま e 秒たったときと同じ見え方）
            seek(e) { t = T0 + e; fall = fallAt(e); still(); },
            setFall(v) { fall = v; still(); },
            get clearHex() { return `#${bgc.toString(16).padStart(6, '0')}`; },
            setClearColor(hex) { bgc = hex; renderer.setClearColor(hex, 1); still(); },
            redraw() { still(); },
        };
        window.dispatchEvent(new Event('love-membrane-ready'));
    }
    // 右端の dev ボタン（調整のページでは板を最初から開くので置かない。見本の iframe の中にも置かない）
    if (!q.has('studio') && window.self === window.top) {
        import('./membrane-panel.js').then((m) => m.mountDevButton()).catch((err) => console.warn('[love-membrane] dev button failed', err));
    }

    if (reduce) still(); else run();
}

start();
