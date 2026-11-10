// 重力の井戸と愛の井戸 — 同じ形の 3D 模式図を二枚並べ、カメラを連動させる（#15）。
// DESIGN-RULES §0a 準拠: tokens.css の CSS 変数と glow 体系の上にのみ載せる。新色なし。
// 依存ライブラリなし（vanilla canvas 2D に自前の透視投影）。§10 Micro-worlds の約束に従う。
//
// 形: z = -DEPTH / sqrt(1 + (r/SOFT)^2)。中心が平らな井戸（Plummer 型ポテンシャルの高さ表示）。
//     中心では坂がゼロ（図の形の約束。物理の「力がゼロ」の話ではない）。点質量の -1/r と違い底は無限に落ちない。
// 周回: 円軌道・角速度 ω ∝ r^(-3/2)（ケプラーの第三法則の形）。中心は動かない。
// 中心からの視点: 井戸の底に立って見渡す。周りのすべてが見えるが、見ている中心そのものは映らない
//   （見ている点は自分の視野に現れない＝読みB「中心こそが自身を見る場所」・#15）。

const cssVar = (name, fallback) => {
    try {
        const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return v || fallback;
    } catch {
        return fallback;
    }
};
const PAL = () => ({
    ink: cssVar('--ink', '#0f172a'),
    mid: cssVar('--mid', '#334155'),
    mute: cssVar('--mute', '#94a3b8'),
    navy: cssVar('--navy', '#2e3a6e'),
    gold: cssVar('--gold', '#8a7040'),
    coral: cssVar('--coral', '#b04050'),
});

// ---- 形と運動 ----
const HALF = 6;          // 格子の半幅
const DEPTH = 4.6;         // 井戸の深さ
const SOFT = 0.75;       // 中心の平らさ
const GRID = 25;         // 格子線の本数（各方向）
const STEPS = 72;        // 1 本あたりの分割数
const ORBITS = [1.5, 2.3, 3.1, 4.0, 5.0];
const OMEGA0 = 0.75;     // 最内軌道の角速度 [rad/s]
const EYE = 0.3;         // 中心に立つ目の高さ
const FOV_TOP = 0.95;    // 俯瞰の水平画角 [rad]
const FOV_DOWN = 1.15;   // 俯瞰で真下を向いたときの水平画角 [rad]（外側の軌道まで入れる）
const PITCH_MIN = 0.0, PITCH_MAX = Math.PI / 2; // 俯瞰の仰角：真横〜真上から（真下を向くと z が消えて平面になる）
const PITCH_MID = (PITCH_MIN + PITCH_MAX) / 2, PITCH_AMP = (PITCH_MAX - PITCH_MIN) / 2;
const FOV_CENTER = 1.5;  // 中心からの水平画角 [rad]
const TURN = 0.18;       // 中心から見渡すときの自動の向き変え [rad/s]
const TILT0 = Math.PI / 4; // 中心から見上げる基準の仰角 [rad]
const NOD_RATE = 0.3;    // 俯瞰の上下首振りの速さ [rad/s]
const TILT_MIN = 0.0, TILT_MAX = Math.PI / 2; // 仰角の範囲：水平〜真上（真上では z が消えて平面になる）
const FOV_UP = 2.2;      // 真上を向いたときの水平画角 [rad]（外側の軌道まで入れる）

const height = r => -DEPTH / Math.sqrt(1 + (r / SOFT) ** 2);
const omega = r => OMEGA0 * (r / ORBITS[0]) ** -1.5;

// ---- 小さなベクトル演算 ----
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

// right を渡すと真上・真下を向いても崩れない（cross(f, z) が 0 になるため）
function lookAt(eye, forward, right) {
    const f = norm(forward);
    const r = norm(right || cross(f, [0, 0, 1]));
    const u = cross(r, f);
    return { eye, f, r, u };
}

// 二枚で共有するカメラ状態
const state = {
    mode: 'top',         // 'top' 俯瞰 | 'center' 中心から見る
    yaw: -0.9,
    pitch: 0.38,
    pitchPhase: 0,       // 俯瞰の上下首振りの位相 [rad]（pitch から逆算して続きを振る）
    dist: 12.5,
    head: 0,             // 中心から見るときの向き [rad]
    tilt: 0,             // 中心から見るときの仰角のずらし（ドラッグ）[rad]
    t: 0,
    running: true,
    dragging: false,     // ドラッグ中は自動の首振りを止め、手の動きだけに従う
};

function camera() {
    if (state.mode === 'top') {
        const target = [0, 0, -DEPTH * 0.5];
        const cp = Math.cos(state.pitch);
        const eye = add(target, mul([cp * Math.cos(state.yaw), cp * Math.sin(state.yaw), Math.sin(state.pitch)], state.dist));
        const fov = FOV_TOP + (FOV_DOWN - FOV_TOP) * (state.pitch / PITCH_MAX) ** 2;
        return { ...lookAt(eye, sub(target, eye), [-Math.sin(state.yaw), Math.cos(state.yaw), 0]), fov, near: 0.05 };
    }
    // 井戸の底から、せり上がる壁と軌道を見上げる（上下は手で動かす）
    const pos = [0, 0, height(0) + EYE];
    const el = Math.min(TILT_MAX, Math.max(TILT_MIN, TILT0 + state.tilt));
    const ce = Math.cos(el);
    const right = [Math.sin(state.head), -Math.cos(state.head), 0];
    const fov = FOV_CENTER + (FOV_UP - FOV_CENTER) * (el / TILT_MAX) ** 2;
    return { ...lookAt(pos, [ce * Math.cos(state.head), ce * Math.sin(state.head), Math.sin(el)], right), fov, near: 0.35 };
}

function projector(cam, W, H) {
    const focal = (W / 2) / Math.tan(cam.fov / 2);
    const cx = W / 2, cy = H / 2;
    return p => {
        const d = sub(p, cam.eye);
        const zc = dot(d, cam.f);
        if (zc < cam.near) return null;   // 足もとの格子が引き伸ばされた線にならないよう手前を切る
        return [cx + dot(d, cam.r) / zc * focal, cy - dot(d, cam.u) / zc * focal, zc];
    };
}

// ---- 一枚の図 ----
function makePanel(host, spec) {
    const canvas = document.createElement('canvas');
    canvas.className = 'mw-canvas gl-canvas';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', spec.aria);
    host.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;

    function resize() {
        const cssW = Math.max(200, host.clientWidth || 0);
        const cssH = Math.round(cssW * 0.9);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const bw = Math.round(cssW * dpr), bh = Math.round(cssH * dpr);
        W = cssW; H = cssH;
        if (canvas.width === bw && canvas.height === bh) return;
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        canvas.width = bw; canvas.height = bh;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(resize).observe(host);

    function polyline(proj, pts, stroke, width) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = width;
        ctx.beginPath();
        let pen = false;
        for (const p of pts) {
            const s = proj(p);
            if (!s) { pen = false; continue; }
            if (pen) ctx.lineTo(s[0], s[1]); else ctx.moveTo(s[0], s[1]);
            pen = true;
        }
        ctx.stroke();
    }

    function draw() {
        if (W < 1) return;
        const pal = PAL();
        const accent = pal[spec.accent];
        const cam = camera();
        const proj = projector(cam, W, H);
        ctx.clearRect(0, 0, W, H);

        // 格子：深いところほど線を濃く（くぼみが目で追えるように）
        ctx.globalAlpha = 1;
        for (let i = 0; i < GRID; i++) {
            const c = -HALF + (2 * HALF * i) / (GRID - 1);
            for (const axis of [0, 1]) {
                const pts = [];
                for (let k = 0; k <= STEPS; k++) {
                    const s = -HALF + (2 * HALF * k) / STEPS;
                    const x = axis ? c : s, y = axis ? s : c;
                    pts.push([x, y, height(Math.hypot(x, y))]);
                }
                const near = 1 - Math.min(1, Math.abs(c) / HALF);
                ctx.globalAlpha = 0.18 + 0.32 * near;
                polyline(proj, pts, pal.mute, 1);
            }
        }

        // 軌道の輪
        ctx.globalAlpha = 0.35;
        ORBITS.forEach(R => {
            const pts = [];
            for (let k = 0; k <= 96; k++) {
                const a = (2 * Math.PI * k) / 96;
                pts.push([R * Math.cos(a), R * Math.sin(a), height(R) + 0.01]);
            }
            polyline(proj, pts, accent, 1);
        });

        // 周回するもの（軌道上の視点では自分自身は描かない）
        ctx.globalAlpha = 1;
        ORBITS.forEach((R, i) => {
            const a = omega(R) * state.t + i * 1.7;
            const s = proj([R * Math.cos(a), R * Math.sin(a), height(R) + 0.06]);
            if (!s) return;
            const rad = Math.max(2.5, Math.min(9, 38 / s[2]));
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(s[0], s[1], rad, 0, Math.PI * 2);
            ctx.fill();
            if (spec.bodies && W > 300) {
                ctx.fillStyle = pal.mid;
                ctx.font = '12px ' + cssVar('--sans', 'sans-serif');
                ctx.fillText(spec.bodies[i], s[0] + rad + 3, s[1] - rad);
            }
        });

        // 中心：物を光らせず、くぼみの底に空の輪だけを置く（無・ゼロ）
        const c0 = proj([0, 0, height(0)]);
        const sansFont = cssVar('--sans', 'sans-serif');
        if (c0 && c0[0] > 0 && c0[0] < W && c0[1] > 0 && c0[1] < H) {
            const rr = Math.max(4, Math.min(12, 60 / c0[2]));
            ctx.strokeStyle = pal.ink;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(c0[0], c0[1], rr, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = pal.ink;
            ctx.font = '500 13px ' + sansFont;
            ctx.textAlign = 'center';
            ctx.fillText(spec.center, c0[0], c0[1] + rr + 16);
            ctx.font = '12px ' + sansFont;
            ctx.fillStyle = pal.mid;
            ctx.fillText('動かない・坂はゼロ', c0[0], c0[1] + rr + 31);
            ctx.textAlign = 'start';
        } else {
            // 視野の外：画面の縁に、中心のある向きだけを矢印で示す
            const d = sub([0, 0, height(0)], cam.eye);
            const a = Math.atan2(-dot(d, cam.u), dot(d, cam.r));   // 画面座標での向き（y 下向き）
            const ux = Math.cos(a), uy = Math.sin(a);
            const m = 16;
            const k = Math.min((W / 2 - m) / (Math.abs(ux) || 1e-6), (H / 2 - m) / (Math.abs(uy) || 1e-6));
            const x = W / 2 + ux * k, y = H / 2 + uy * k;
            ctx.fillStyle = pal.ink;
            ctx.beginPath();
            ctx.moveTo(x + ux * 6, y + uy * 6);
            ctx.lineTo(x - ux * 8 - uy * 7, y - uy * 8 + ux * 7);
            ctx.lineTo(x - ux * 8 + uy * 7, y - uy * 8 - ux * 7);
            ctx.closePath();
            ctx.fill();
            ctx.font = '500 12px ' + sansFont;
            ctx.textAlign = ux > 0.3 ? 'right' : ux < -0.3 ? 'left' : 'center';
            const tx = x - ux * 18, ty = y - uy * 18 + 4;
            ctx.fillText(state.mode === 'center' ? spec.center + '＝見ている場所（映らない）' : spec.center + '（視野の外）', tx, ty);
            ctx.textAlign = 'start';
        }

        // 図の名前
        ctx.fillStyle = accent;
        ctx.font = '500 13px ' + sansFont;
        ctx.fillText(spec.label, 10, 20);
    }

    return { draw, canvas };
}

// ---- マウント ----
function mount(root) {
    const pair = root.querySelector('.gl-pair');
    const hosts = pair ? [...pair.querySelectorAll('[data-gl-panel]')] : [];
    if (hosts.length !== 2) return;
    const panels = hosts.map(h => makePanel(h.querySelector('.gl-stage'), {
        label: h.dataset.label,
        center: h.dataset.center,
        accent: h.dataset.accent,
        aria: h.dataset.aria,
        bodies: h.dataset.bodies ? h.dataset.bodies.split(',') : null,
    }));

    const status = root.querySelector('.mw-status');
    const row = root.querySelector('.mw-controls');
    const btn = (label, onClick) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'mw-btn';
        b.textContent = label;
        b.addEventListener('click', onClick);
        row.appendChild(b);
        return b;
    };
    const bTop = btn('俯瞰で見る', () => setMode('top'));
    const bCenter = btn('中心から見る', () => setMode('center'));
    const bRun = btn('止める', () => {
        state.running = !state.running;
        bRun.textContent = state.running ? '止める' : '動かす';
    });

    function say() {
        if (!status) return;
        if (state.mode === 'top') {
            status.textContent = '俯瞰：外からは、二枚とも中心がくぼみの底に見えます。カメラは真横から真上までゆっくり首を振り、真上では高さが消えて平面の図になります。どちらかの図をドラッグすると、二枚が同じ角度で回ります（上下にも倒せます）。';
        } else {
            status.textContent = '中心から：井戸の底に立って見渡しています。周りのすべてがここを中心に回って見えます。どちらを向いても映らないのは、いま見ているこの場所だけです。ドラッグで左右にも上下にも向きを変えられます。';
        }
    }

    function setMode(m) {
        state.mode = m;
        state.head = 0;
        bTop.classList.toggle('is-on', m === 'top');
        bCenter.classList.toggle('is-on', m === 'center');
        bTop.setAttribute('aria-pressed', String(m === 'top'));
        bCenter.setAttribute('aria-pressed', String(m === 'center'));
        say();
        drawAll();
    }

    // ドラッグ：俯瞰ではカメラを回す／中心からでは見る向き（左右・上下）を変える。二枚で共有。
    panels.forEach(({ canvas }) => {
        let last = null;
        canvas.addEventListener('pointerdown', e => {
            last = [e.clientX, e.clientY];
            state.dragging = true;
            canvas.setPointerCapture(e.pointerId);
        });
        canvas.addEventListener('pointermove', e => {
            if (!last) return;
            const dx = e.clientX - last[0], dy = e.clientY - last[1];
            last = [e.clientX, e.clientY];
            if (state.mode === 'top') {
                state.yaw -= dx * 0.008;
                state.pitch = Math.min(PITCH_MAX, Math.max(PITCH_MIN, state.pitch + dy * 0.006));
            } else {
                state.head -= dx * 0.006;
                state.tilt = Math.min(TILT_MAX - TILT0, Math.max(TILT_MIN - TILT0, state.tilt + dy * 0.005));
            }
            drawAll();
        });
        const end = () => { last = null; state.dragging = false; syncPitchPhase(); };
        canvas.addEventListener('pointerup', end);
        canvas.addEventListener('pointercancel', end);
    });

    function drawAll() { panels.forEach(p => p.draw()); }

    // 手で動かした仰角から、自動の首振りを途切れずに続ける
    function syncPitchPhase() {
        state.pitchPhase = Math.asin(Math.min(1, Math.max(-1, (state.pitch - PITCH_MID) / PITCH_AMP)));
    }
    syncPitchPhase();

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        state.running = false;
        bRun.textContent = '動かす';
    }

    let prev = null;
    function tick(now) {
        if (prev != null && state.running) {
            const dt = Math.min(0.05, (now - prev) / 1000);
            state.t += dt;
            if (state.mode === 'center' && !state.dragging) { state.head += TURN * dt; }
            if (state.mode === 'top' && !state.dragging) {
                state.pitchPhase += NOD_RATE * dt;
                state.pitch = PITCH_MID + PITCH_AMP * Math.sin(state.pitchPhase);
            }
        }
        prev = now;
        drawAll();
        requestAnimationFrame(tick);
    }

    root.classList.add('mw-ready');
    setMode('top');
    requestAnimationFrame(tick);
}

document.querySelectorAll('[data-gravity-love]').forEach(mount);
