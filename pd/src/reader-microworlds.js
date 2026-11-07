// Reader Micro-worlds — 触って挙動を直感できる対話的環境（Litt「Micro-worlds」/ CN-011 §2 / pd#128）。
// DESIGN-RULES §0a 準拠: 独自テーマを新造せず、tokens.css の CSS 変数と glow 体系の上にのみ載せる。
// 依存ライブラリなし（vanilla）。各ウィジェットは <div data-microworld="..."> にマウントされる。
// 数理核（Cayley–Dickson 乗算・八元数の合成則・16元数の零因子）は node で機械検証済み（RR-011/§4）。

// ---- palette: tokens.css の確立色のみを使う（新色ハードコード禁止 §0a-4）----
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
    line: 'rgba(0,0,0,0.10)',
    faint: 'rgba(0,0,0,0.045)',
});

// ---- canvas: devicePixelRatio 対応の 2D 文脈を作る ----
// ResizeObserver で「折りたたみ <details> を開いた」「ウィンドウ幅が変わった」の両方を一律に拾い、
// api.onResize（各ウィジェットが draw を代入）を呼んで再描画する。
function makeCanvas(host, aspect = 0.62) {
    const canvas = document.createElement('canvas');
    canvas.className = 'mw-canvas';
    canvas.setAttribute('role', 'img');
    host.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0;
    const api = { canvas, ctx, resize, onResize: null, get W() { return W; }, get H() { return H; } };
    // サイズが実際に変わった時だけ canvas.width を再代入する（再代入は canvas をクリアするため）。
    // 変化なしなら no-op（既存の描画を保持）。戻り値 true = リサイズ＝クリアしたので要再描画。
    function resize() {
        // clientWidth は padding を含むので、内側の幅に直す（含めたままだと狭い画面で枠からはみ出す）
        const cs = getComputedStyle(host);
        const pad = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
        const raw = (host.clientWidth ? host.clientWidth - pad : 0) || canvas.parentElement?.clientWidth || 0;
        if (raw < 1) return false;                 // 非表示（閉じた details 等）。表示され次第 Observer/toggle が再呼び出し
        const cssW = Math.max(200, raw);
        const cssH = Math.round(cssW * aspect);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const bw = Math.round(cssW * dpr), bh = Math.round(cssH * dpr);
        W = cssW; H = cssH;
        if (canvas.width === bw && canvas.height === bh) return false;  // 変化なし＝クリアしない
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        canvas.width = bw; canvas.height = bh;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return true;
    }
    resize();
    if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(() => { if (resize() && api.onResize) api.onResize(); });
        ro.observe(host);
    }
    // 折りたたみ <details> 内でマウントされた場合、開いた瞬間に確実に再描画する（ResizeObserver の保険）
    const det = host.closest('details');
    if (det) det.addEventListener('toggle', () => { if (resize() && api.onResize) api.onResize(); });
    return api;
}

// ---- 小物 UI ----
function el(tag, cls, txt) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
}
function controls(host) {
    const row = el('div', 'mw-controls');
    host.appendChild(row);
    return row;
}
function button(row, label, onClick) {
    const b = el('button', 'mw-btn', label);
    b.type = 'button';
    b.addEventListener('click', onClick);
    row.appendChild(b);
    return b;
}
function slider(row, { label, min, max, value, step = 1, onInput }) {
    const wrap = el('label', 'mw-slider');
    wrap.appendChild(el('span', 'mw-slider-label', label));
    const input = document.createElement('input');
    input.type = 'range';
    input.min = min; input.max = max; input.step = step; input.value = value;
    input.addEventListener('input', () => onInput(parseFloat(input.value)));
    wrap.appendChild(input);
    row.appendChild(wrap);
    return input;
}
function status(host) {
    const s = el('p', 'mw-status');
    s.setAttribute('aria-live', 'polite');
    host.appendChild(s);
    return s;
}

// ============================================================
// 1) 複素数の掛け算＝平面回転（§2「回る数」）
//    掛けても大きさは変わらず、向きだけ回る（|z·y| = |z|·|y|）。×i で 90°ずつ。
// ============================================================
function mountComplexRotation(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.66);
    const row = controls(host);
    const st = status(host);
    let theta = 90;      // 掛ける回転角（度）
    const inAng = 33;    // 入力点の初期角（度）

    const slInput = slider(row, {
        label: '掛ける回転', min: 0, max: 360, value: theta,
        onInput: v => { theta = v; draw(); },
    });
    button(row, '× i（90°）', () => { theta = (theta + 90) % 360; slInput.value = theta; draw(); });
    button(row, 'リセット', () => { theta = 0; slInput.value = theta; draw(); });

    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.36;
        // 軸
        ctx.strokeStyle = P.line; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx - R * 1.25, cy); ctx.lineTo(cx + R * 1.25, cy);
        ctx.moveTo(cx, cy - R * 1.25); ctx.lineTo(cx, cy + R * 1.25); ctx.stroke();
        // 単位円
        ctx.strokeStyle = P.faint; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
        // ラベル 1, i
        ctx.fillStyle = P.mute; ctx.font = '13px sans-serif';
        ctx.textAlign = 'left'; ctx.fillText('1', cx + R * 1.28, cy + 4);
        ctx.textAlign = 'center'; ctx.fillText('i', cx, cy - R * 1.30);
        const rad = a => a * Math.PI / 180;
        const pt = a => [cx + R * Math.cos(rad(a)), cy - R * Math.sin(rad(a))];
        const outAng = inAng + theta;
        // 回転の弧
        ctx.strokeStyle = P.gold; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, R * 0.55, -rad(outAng), -rad(inAng), theta < 0); ctx.stroke();
        // 入力ベクトル（navy）
        drawVec(ctx, cx, cy, pt(inAng), P.navy, '入力');
        // 出力ベクトル（coral）
        drawVec(ctx, cx, cy, pt(outAng), P.coral, '掛けた後');
        st.innerHTML = '掛ける回転 <b>' + Math.round(theta) + '°</b> ／ 大きさは <b>1 のまま</b>（回るだけ、増えも減りもしない）。'
            + (theta % 90 === 0 && theta !== 0 ? ' ＝ 「× i」を ' + (theta / 90) + ' 回。' : '');
    }
    function drawVec(ctx, cx, cy, [x, y], color, label) {
        ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(label, x + (x > cx ? 6 : -6) * 0, y + (y > cy ? 16 : -10));
    }
    view.canvas.setAttribute('aria-label', '複素数の掛け算＝回転。掛けても大きさは変わらず向きだけ回る。');
    view.onResize = draw;
    draw();
}

// ============================================================
// 2) 四元数の非可換回転（§2「手元で試せます」）
//    同じ2つの90°回転でも、順序を変えると行き先が変わる（i·j = k, j·i = −k）。
//    2つの立方体を左右で「前→右」「右→前」に回し、最終の向きが違うことを見せる。
// ============================================================
function mat3mul(a, b) {
    const r = new Array(9);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
        r[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j];
    return r;
}
const ID3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function rotX(deg) { const t = deg * Math.PI / 180, c = Math.cos(t), s = Math.sin(t); return [1, 0, 0, 0, c, -s, 0, s, c]; }
function rotY(deg) { const t = deg * Math.PI / 180, c = Math.cos(t), s = Math.sin(t); return [c, 0, s, 0, 1, 0, -s, 0, c]; }
function apply3(m, v) { return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]]; }

function mountQuaternionOrder(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.52);
    const row = controls(host);
    const st = status(host);
    // 立方体: 6面（頂点インデックス・法線・色・ラベル）
    const V = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
    const faces = [
        { idx: [4, 5, 6, 7], n: [0, 0, 1], c: P.navy, t: '前' },
        { idx: [1, 0, 3, 2], n: [0, 0, -1], c: P.mute, t: '後' },
        { idx: [3, 2, 6, 7], n: [0, 1, 0], c: P.gold, t: '上' },
        { idx: [0, 1, 5, 4], n: [0, -1, 0], c: P.mid, t: '下' },
        { idx: [1, 2, 6, 5], n: [1, 0, 0], c: P.coral, t: '右' },
        { idx: [0, 4, 7, 3], n: [-1, 0, 0], c: P.ink, t: '左' },
    ];
    const Vview = mat3mul(rotX(-22), rotY(28)); // 3面が見える固定視点
    // 各立方体: 完了済み向き M0、実行中ステップ列
    function makeCube(steps, title) { return { M0: ID3.slice(), steps, i: 0, p: 0, title, done: false }; }
    let left, right, playing = false, raf = 0;
    reset();

    button(row, '▶ 同時に回す', () => { if (!playing) { reset(); play(); } });
    button(row, 'リセット', () => { cancelAnimationFrame(raf); playing = false; reset(); draw(); setStatus(); });

    function reset() {
        left = makeCube([{ f: rotX, d: 90, name: '前へ90°' }, { f: rotY, d: 90, name: '右へ90°' }], '① 前 → 右');
        right = makeCube([{ f: rotY, d: 90, name: '右へ90°' }, { f: rotX, d: 90, name: '前へ90°' }], '② 右 → 前');
    }
    function curMat(cube) {
        if (cube.i >= cube.steps.length) return cube.M0;
        const s = cube.steps[cube.i];
        return mat3mul(s.f(s.d * cube.p), cube.M0);
    }
    function play() {
        playing = true;
        let last = performance.now();
        const speed = 90 / 900; // 度/ms → 1 ステップ約 1 秒
        function tick(now) {
            const dt = now - last; last = now;
            [left, right].forEach(cube => {
                if (cube.done) return;
                cube.p += (dt * speed) / cube.steps[cube.i].d;
                if (cube.p >= 1) {
                    const s = cube.steps[cube.i];
                    cube.M0 = mat3mul(s.f(s.d), cube.M0);
                    cube.i++; cube.p = 0;
                    if (cube.i >= cube.steps.length) cube.done = true;
                }
            });
            draw(); setStatus();
            if (!left.done || !right.done) raf = requestAnimationFrame(tick);
            else { playing = false; setStatus(true); }
        }
        raf = requestAnimationFrame(tick);
    }
    function drawCube(ctx, ox, oy, scale, M) {
        const MM = mat3mul(Vview, M);
        const proj = v => { const p = apply3(MM, v); return [ox + p[0] * scale, oy - p[1] * scale, p[2]]; };
        const pv = V.map(proj);
        const vis = faces.map(f => {
            const nv = apply3(MM, f.n);
            const depth = f.idx.reduce((s, k) => s + pv[k][2], 0) / 4;
            return { f, front: nv[2] > 0, depth };
        }).sort((a, b) => a.depth - b.depth);
        vis.forEach(({ f, front }) => {
            if (!front) return;
            ctx.beginPath();
            f.idx.forEach((k, n) => { const [x, y] = pv[k]; n ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
            ctx.closePath();
            ctx.fillStyle = f.c; ctx.globalAlpha = 0.92; ctx.fill(); ctx.globalAlpha = 1;
            ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 1.2; ctx.stroke();
            // ラベル（面中心）
            const cxp = f.idx.reduce((s, k) => s + pv[k][0], 0) / 4;
            const cyp = f.idx.reduce((s, k) => s + pv[k][1], 0) / 4;
            ctx.fillStyle = '#fff'; ctx.font = '600 15px sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(f.t, cxp, cyp);
        });
    }
    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const scale = Math.min(W / 2, H) * 0.24;
        const y = H * 0.46;
        drawCube(ctx, W * 0.27, y, scale, curMat(left));
        drawCube(ctx, W * 0.73, y, scale, curMat(right));
        ctx.strokeStyle = P.faint; ctx.beginPath(); ctx.moveTo(W / 2, 8); ctx.lineTo(W / 2, H - 8); ctx.stroke();
        ctx.fillStyle = P.mid; ctx.font = '600 13px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(left.title, W * 0.27, H - 8);
        ctx.fillText(right.title, W * 0.73, H - 8);
    }
    function setStatus(finished) {
        if (finished) {
            st.innerHTML = '同じ2つの回転を、順序だけ変えました。<b>手前に来る面が違います</b>——順序が効く。'
                + 'これが <code>i·j = k</code> と <code>j·i = −k</code> の身体版です。';
        } else if (playing) {
            st.textContent = '回転中…（左は 前→右、右は 右→前）';
        } else {
            st.innerHTML = '「▶ 同時に回す」を押すと、左右が同じ2回転を<b>逆の順序</b>で行います。';
        }
    }
    view.canvas.setAttribute('aria-label', '2つの立方体を同じ2つの90°回転で、順序を変えて回す。最終の向きが違う。');
    view.onResize = draw;
    draw(); setStatus();
}

// ============================================================
// 4) 零因子（§4「つむじと零因子」）
//    ℂ・ℍ・𝕆 では |x·y| = |x|·|y|（非ゼロ×非ゼロは絶対にゼロにならない＝割れる）。
//    𝕊(16元数)では、二つとも非ゼロなのに積がゼロになる（割り戻せない）。
//    零因子ペア (e1+e10)(e5+e14)=0 は node で機械検証済み（自規約）。
// ============================================================
const _conj = x => x.map((v, i) => (i === 0 ? v : -v));
function cdMul(x, y) {
    const n = x.length;
    if (n === 1) return [x[0] * y[0]];
    const h = n / 2;
    const a = x.slice(0, h), b = x.slice(h), c = y.slice(0, h), d = y.slice(h);
    const add = (p, q) => p.map((v, i) => v + q[i]);
    const sub = (p, q) => p.map((v, i) => v - q[i]);
    return sub(cdMul(a, c), cdMul(_conj(d), b)).concat(add(cdMul(d, a), cdMul(b, _conj(c))));
}
const _norm = x => Math.sqrt(x.reduce((s, v) => s + v * v, 0));
function basisSum(dim, ...ks) { const v = Array(dim).fill(0); ks.forEach(k => (v[k] = 1)); return v; }

function mountZeroDivisor(host) {
    const P = PAL();
    const worlds = {
        'ℂ (2)': { dim: 2, x: basisSum(2, 1), y0: basisSum(2, 0), y1: basisSum(2, 1) },
        'ℍ (4)': { dim: 4, x: basisSum(4, 1, 2), y0: basisSum(4, 0, 3), y1: basisSum(4, 2, 3) },
        '𝕆 (8)': { dim: 8, x: basisSum(8, 1, 4), y0: basisSum(8, 2, 5), y1: basisSum(8, 3, 6) },
        '𝕊 (16)': { dim: 16, x: basisSum(16, 1, 10), y0: basisSum(16, 2, 7), y1: basisSum(16, 5, 14) },
    };
    let key = 'ℍ (4)', t = 0;
    // DOM 構築順: world ボタン → canvas → スライダー → status
    const wrow = controls(host);
    const view = makeCanvas(host, 0.5);
    const row = controls(host);
    const st = status(host);
    const wbtns = {};
    Object.keys(worlds).forEach(k => { wbtns[k] = button(wrow, k, () => { key = k; t = 0; sl.value = 0; markWorld(); draw(); }); });
    const sl = slider(row, { label: '二人の向きを近づける', min: 0, max: 100, value: 0, onInput: v => { t = v / 100; draw(); } });
    button(row, 'リセット', () => { t = 0; sl.value = 0; draw(); });
    function markWorld() { Object.entries(wbtns).forEach(([k, b]) => b.classList.toggle('is-on', k === key)); }

    function ratioAt(w, tt) {
        const y = w.y0.map((v, i) => (1 - tt) * v + tt * w.y1[i]);
        const ny = _norm(y);
        if (ny < 1e-9) return 0;
        return _norm(cdMul(w.x, y)) / (_norm(w.x) * ny);
    }
    function draw() {
        const w = worlds[key];
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const r = ratioAt(w, t);
        // メーター（|x·y| ÷ |x||y|）
        const mx = W * 0.12, mw = W * 0.76, my = H * 0.30, mh = 20;
        ctx.fillStyle = P.faint; ctx.fillRect(mx, my, mw, mh);
        ctx.fillStyle = r < 0.02 ? P.coral : P.navy;
        ctx.fillRect(mx, my, mw * Math.max(0, Math.min(1, r)), mh);
        ctx.strokeStyle = P.line; ctx.strokeRect(mx, my, mw, mh);
        ctx.fillStyle = P.mid; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('|x·y| ÷ (|x|·|y|)', mx, my - 8);
        ctx.textAlign = 'right'; ctx.fillText(r.toFixed(2), mx + mw, my - 8);
        // 二人のドット
        const py = H * 0.7, ax = W * 0.3, bx = W * 0.7, rr = 13;
        ctx.fillStyle = P.navy; ctx.beginPath(); ctx.arc(ax, py, rr, 0, 7); ctx.fill();
        ctx.fillStyle = P.gold; ctx.beginPath(); ctx.arc(bx, py, rr, 0, 7); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = '600 13px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('x', ax, py); ctx.fillText('y', bx, py); ctx.textBaseline = 'alphabetic';
        ctx.strokeStyle = r < 0.02 ? P.coral : P.mute; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ax + rr, py); ctx.lineTo(bx - rr, py); ctx.stroke();
        ctx.fillStyle = P.mid; ctx.font = '12px sans-serif';
        ctx.fillText('x・y とも非ゼロ（|x|=' + _norm(w.x).toFixed(2) + '、|y|>0）', W * 0.5, py + 32);

        const composition = w.dim <= 8;
        if (composition) {
            st.innerHTML = '<b>' + key + '</b>：向きをどう近づけても、比は <b>1.00 のまま</b>。'
                + '非ゼロ×非ゼロは<b>絶対にゼロになりません</b>——だから割り戻せます（割れる世界）。';
        } else if (r < 0.02) {
            st.innerHTML = '<b>' + key + '</b>：二人とも非ゼロなのに、積が <b>ゼロ</b>になりました。'
                + '結果のゼロからは元を割り戻せません——<b>零因子</b>（割れない世界）。';
        } else {
            st.innerHTML = '<b>' + key + '</b>：向きを近づけると比が下がっていきます。'
                + 'スライダーを右端まで動かすと…（8 を超えた数の世界だけで起きます）';
        }
    }
    markWorld();
    view.canvas.setAttribute('aria-label', 'ℂ・ℍ・𝕆 では非ゼロの積はゼロにならないが、16元数では零因子が現れる。');
    view.onResize = draw;
    draw();
}

// ============================================================
// 4) ファノ平面のホーム三つ組（§4）
//    7点・7線。どの点を選んでも、その点が入る線（ホーム三つ組）はちょうど3本。
//    e₇（中心）も特別扱いでないことを、触って確かめられる。
// ============================================================
function mountFanoHome(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.69);
    const row = controls(host);
    const st = status(host);

    // 正本 MD の静的 SVG（viewBox 680×470 相当）と同じ配置
    const PTS = [
        [340, 70], [245, 235], [150, 400], [435, 235], [530, 400], [340, 400], [340, 290],
    ]; // e1..e7（index 0..6）
    const LINES = [
        { m: [0, 1, 2] },                  // e1-e2-e3（左辺）
        { m: [0, 3, 4] },                  // e1-e4-e5（右辺）
        { m: [2, 5, 4] },                  // e3-e6-e5（下辺）
        { m: [1, 3, 5], circle: true },    // e2-e4-e6（内接円）
        { m: [0, 6, 5] },                  // e1-e7-e6（中線）
        { m: [2, 6, 3] },                  // e3-e7-e4（中線）
        { m: [1, 6, 4] },                  // e2-e7-e5（中線）
    ];
    const SUB = ['e₁', 'e₂', 'e₃', 'e₄', 'e₅', 'e₆', 'e₇'];
    let sel = -1; // 選択中の点（-1 = なし）

    button(row, '次の点へ', () => { sel = (sel + 1) % 7; draw(); });
    button(row, '選択解除', () => { sel = -1; draw(); });

    function xy(i) {
        const s = view.W / 680;
        return [PTS[i][0] * s, PTS[i][1] * s];
    }
    function homesOf(i) {
        return LINES.filter(L => L.m.includes(i));
    }
    function strokeLine(ctx, L, color, width) {
        ctx.strokeStyle = color; ctx.lineWidth = width;
        const s = view.W / 680;
        if (L.circle) {
            ctx.beginPath(); ctx.arc(340 * s, 290 * s, 110 * s, 0, Math.PI * 2); ctx.stroke();
        } else {
            const ends = [L.m[0], L.m[L.m.length - 1]];
            const [x1, y1] = xy(ends[0]), [x2, y2] = xy(ends[1]);
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        }
    }
    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const homes = sel >= 0 ? homesOf(sel) : [];
        const hi = [P.navy, P.gold, P.coral];
        // 非選択の線は薄く、選択点のホーム3線は色つきで
        LINES.forEach(L => { if (!homes.includes(L)) strokeLine(ctx, L, sel >= 0 ? P.faint : P.line, 1.2); });
        homes.forEach((L, k) => strokeLine(ctx, L, hi[k], 2.8));
        // 点
        const s = W / 680;
        const r = Math.max(10, 15 * s);
        for (let i = 0; i < 7; i++) {
            const [x, y] = xy(i);
            const isSel = i === sel;
            const inHome = homes.some(L => L.m.includes(i));
            ctx.beginPath(); ctx.arc(x, y, isSel ? r * 1.25 : r, 0, Math.PI * 2);
            ctx.fillStyle = isSel ? P.navy : '#fff';
            ctx.globalAlpha = isSel ? 1 : (sel >= 0 && !inHome ? 0.45 : 1);
            ctx.fill();
            ctx.strokeStyle = isSel ? P.navy : P.mid; ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = isSel ? '#fff' : P.ink;
            ctx.font = '13px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(SUB[i], x, y + 1);
            ctx.globalAlpha = 1;
        }
        if (sel < 0) {
            st.innerHTML = '点に触れる（タップ）か「次の点へ」で、一人を選んでください。その人が入る<b>3つの三つ組</b>が光ります。';
        } else {
            const partners = homesOf(sel).map(L => '(' + L.m.filter(i => i !== sel).sort((a, b) => a - b).map(i => SUB[i]).join(',') + ')').join('・');
            st.innerHTML = '<b>' + SUB[sel] + '</b> のホーム三つ組は ' + partners + ' — <b>ちょうど3つ</b>。'
                + (sel === 6 ? ' 中心の e₇ も、他の点と同じ扱いです。' : ' どの点を選んでも、必ず3つです。');
        }
    }
    function pick(ev) {
        const rect = view.canvas.getBoundingClientRect();
        const px = ev.clientX - rect.left, py = ev.clientY - rect.top;
        const s = view.W / 680;
        const hitR = Math.max(18, 22 * s);
        for (let i = 0; i < 7; i++) {
            const [x, y] = xy(i);
            if ((px - x) ** 2 + (py - y) ** 2 <= hitR * hitR) return i;
        }
        return -1;
    }
    view.canvas.addEventListener('pointermove', ev => {
        const i = pick(ev);
        view.canvas.style.cursor = i >= 0 ? 'pointer' : 'default';
        if (i >= 0 && i !== sel) { sel = i; draw(); }
    });
    view.canvas.addEventListener('pointerdown', ev => {
        const i = pick(ev);
        if (i !== sel) { sel = i; draw(); }
    });
    view.canvas.setAttribute('aria-label', 'ファノ平面。どの点もちょうど3本の線に入っている。点を選ぶとその3本が強調される。');
    view.onResize = draw;
    draw();
}

// ---- 乱数（標準正規・Box–Muller）----
// energy-flow の OU / 蔵本ウィジェット用。RR-042a-microworld-math-check.mjs と同じ更新式で機械検証済み。
function gaussian() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// ============================================================
// 5) OU 過程＝くぼみのボール（energy-flow §2「くぼみに置かれたボール」＋臨界減速）
//    ポテンシャル井戸 U(x)=½·k·x² を、底へ引き戻す力とランダムな揺れの釣り合いで点が動く。
//    離散化（Euler–Maruyama）: x ← x − k·x·dt + σ·√dt·N(0,1)。
//    定常分散 σ²/(2k)、ラグτ自己相関 exp(−k·τ)、臨界減速＝k→小 で τ=1/k・分散が増大。
//    （数理核は RR-042a-microworld-math-check.mjs で node 検証済み）
// ============================================================
function mountOUWell(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.5);
    const row = controls(host);
    const st = status(host);
    const dt = 0.05;
    const XR = 3.4;                 // 描画に使う x の範囲 ±XR（視覚的クランプ兼用）
    let k = 1.0, kTarget = 1.0, sigma = 0.6, x = 0;
    const trace = [];
    const TRACE_MAX = 260;
    let raf = 0;

    const slK = slider(row, {
        label: '引き戻す力（k）', min: 0.1, max: 3, value: k, step: 0.1,
        onInput: v => { k = v; kTarget = v; },
    });
    slider(row, {
        label: '揺れ（σ）', min: 0, max: 1.5, value: sigma, step: 0.05,
        onInput: v => { sigma = v; },
    });
    button(row, 'くぼみを浅く（臨界減速）', () => { kTarget = 0.15; });
    button(row, 'リセット', () => { k = 1.0; kTarget = 1.0; sigma = 0.6; slK.value = '1'; x = 0; trace.length = 0; });

    function step() {
        // 臨界減速: k を目標値へなめらかに寄せる（井戸がじわりと浅くなる）
        if (Math.abs(k - kTarget) > 1e-3) { k += (kTarget - k) * 0.05; slK.value = k.toFixed(2); }
        // Euler–Maruyama（RR-042a と同一）
        x = x - k * x * dt + sigma * Math.sqrt(dt) * gaussian();
        if (x > XR) x = XR; else if (x < -XR) x = -XR;
        trace.push(x);
        if (trace.length > TRACE_MAX) trace.shift();
    }
    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const pad = 12, splitX = W * 0.46, topY = pad + 6, baseY = H - pad - 6;
        // ---- 左: ポテンシャル井戸とボール ----
        const wx0 = pad, wx1 = splitX - pad, wcx = (wx0 + wx1) / 2, wSpan = (wx1 - wx0) / 2;
        const xToPx = xv => wcx + (xv / XR) * wSpan;
        const Umax = 0.5 * 3 * XR * XR;                 // k=3・x=XR を縦スケール基準に
        const Uscale = (baseY - topY) / Umax;
        const yOf = (xv, kk) => baseY - 0.5 * kk * xv * xv * Uscale;
        ctx.strokeStyle = P.navy; ctx.lineWidth = 2; ctx.beginPath();
        for (let i = 0; i <= 60; i++) { const xv = -XR + 2 * XR * i / 60; const px = xToPx(xv), py = yOf(xv, k); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        ctx.strokeStyle = P.faint; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(wx0, baseY); ctx.lineTo(wx1, baseY); ctx.stroke();
        const bx = xToPx(x), by = yOf(x, k) - 8;
        ctx.fillStyle = P.coral; ctx.beginPath(); ctx.arc(bx, by, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = P.mute; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('U(x)=½k x²（つつくと転がり、やがて底へ）', wcx, topY);
        // ---- 右: 時系列トレース（横=時間・縦=位置）----
        const tx0 = splitX + pad, tx1 = W - pad, tcy = (topY + baseY) / 2, tSpan = (baseY - topY) / 2;
        const posToPy = xv => tcy - (xv / XR) * tSpan;
        const sd = sigma > 0 && k > 0 ? Math.min(sigma / Math.sqrt(2 * k), XR) : 0;   // 定常標準偏差 σ/√(2k)
        ctx.fillStyle = P.faint; ctx.fillRect(tx0, posToPy(sd), tx1 - tx0, posToPy(-sd) - posToPy(sd));
        ctx.strokeStyle = P.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(tx0, tcy); ctx.lineTo(tx1, tcy); ctx.stroke();
        ctx.strokeStyle = P.gold; ctx.lineWidth = 1.6; ctx.beginPath();
        for (let i = 0; i < trace.length; i++) { const px = tx0 + (tx1 - tx0) * i / (TRACE_MAX - 1); const py = posToPy(trace[i]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        ctx.fillStyle = P.mute; ctx.font = '11px sans-serif'; ctx.textAlign = 'left'; ctx.fillText('位置の時系列（時間 →）', tx0, topY);
        ctx.strokeStyle = P.faint; ctx.beginPath(); ctx.moveTo(splitX, topY - 4); ctx.lineTo(splitX, baseY + 4); ctx.stroke();
    }
    function setStatus() {
        const tau = 1 / k, varr = sigma > 0 ? (sigma * sigma) / (2 * k) : 0;
        const note = k < 0.4 ? ' <span class="mw-note">くぼみを浅くすると、戻るのに時間がかかり（τ が伸び）ばらつきが広がります＝臨界減速。</span>' : '';
        st.innerHTML = '戻る速さの目安 <b>τ = 1/k = ' + tau.toFixed(2) + '</b>'
            + ' ／ ばらつき <b>σ²/2k = ' + varr.toFixed(2) + '</b>。'
            + '底へ引き戻す力とつつく揺れの釣り合いで、動き方が決まります。' + note;
    }
    view.canvas.addEventListener('pointerdown', ev => {
        // つつく: 井戸（左半分）をタップすると、その位置へボールを弾く
        const rect = view.canvas.getBoundingClientRect();
        const px = ev.clientX - rect.left, splitX = view.W * 0.46, pad = 12;
        if (px < splitX) {
            const wcx = (pad + (splitX - pad)) / 2, wSpan = (splitX - pad - pad) / 2;
            x = Math.max(-XR, Math.min(XR, ((px - wcx) / wSpan) * XR));
        }
    });
    view.canvas.style.cursor = 'pointer';
    view.canvas.setAttribute('aria-label', 'ポテンシャル井戸（くぼみ）の中のボール。底へ引き戻す力とランダムな揺れで動き、やがて底へ戻る。');
    view.onResize = draw;
    (function loop() { if (host.offsetParent) { step(); draw(); setStatus(); } raf = requestAnimationFrame(loop); })();
}

// ============================================================
// 6) 蔵本モデル＝結合振動子の同期（energy-flow 横串「同じ結合振動子（蔵本モデル）の仲間」）
//    円周上の N 個の位相 φ_i を、結合 K で引き込み合う。
//    更新: dφ_i = (ω_i + (K/N)·Σ_j sin(φ_j − φ_i))·dt。ω_i は固定のばらつき（標準正規×0.6）。
//    秩序変数 r = |(1/N)Σ e^{iφ}|。K を上げると閾値以上で r が単調に増える（RR-042a 検証）。
// ============================================================
function mountKuramotoSync(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.62);
    const row = controls(host);
    const st = status(host);
    const N = 24, dt = 0.05;
    let K = 0, raf = 0;
    const phi = new Array(N), omega = new Array(N);
    for (let i = 0; i < N; i++) omega[i] = gaussian() * 0.6;   // 固有振動数は初期化時に一度だけ
    for (let i = 0; i < N; i++) phi[i] = Math.random() * 2 * Math.PI;

    slider(row, { label: '結合の強さ K', min: 0, max: 4, value: K, step: 0.1, onInput: v => { K = v; } });
    button(row, 'かき混ぜる', () => { for (let i = 0; i < N; i++) phi[i] = Math.random() * 2 * Math.PI; });

    function order() {
        let sx = 0, sy = 0;
        for (let i = 0; i < N; i++) { sx += Math.cos(phi[i]); sy += Math.sin(phi[i]); }
        return { r: Math.hypot(sx / N, sy / N), psi: Math.atan2(sy, sx) };
    }
    function step() {
        const d = new Array(N);
        for (let i = 0; i < N; i++) { let s = 0; for (let j = 0; j < N; j++) s += Math.sin(phi[j] - phi[i]); d[i] = omega[i] + (K / N) * s; }
        for (let i = 0; i < N; i++) phi[i] += d[i] * dt;
    }
    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const cx = W * 0.36, cy = H * 0.52, R = Math.min(W * 0.30, H * 0.40);
        ctx.strokeStyle = P.faint; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
        for (let i = 0; i < N; i++) {
            const px = cx + R * Math.cos(phi[i]), py = cy + R * Math.sin(phi[i]);
            ctx.fillStyle = P.navy; ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
        }
        const { r, psi } = order();
        const ex = cx + R * r * Math.cos(psi), ey = cy + R * r * Math.sin(psi);
        ctx.strokeStyle = P.coral; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();
        ctx.fillStyle = P.coral; ctx.beginPath(); ctx.arc(ex, ey, 5, 0, Math.PI * 2); ctx.fill();
        // r バー
        const bx = W * 0.80, bw = 22, bTop = cy - R, bH = 2 * R;
        ctx.fillStyle = P.faint; ctx.fillRect(bx, bTop, bw, bH);
        ctx.fillStyle = r > 0.7 ? P.coral : P.navy; ctx.fillRect(bx, bTop + bH * (1 - r), bw, bH * r);
        ctx.strokeStyle = P.line; ctx.lineWidth = 1; ctx.strokeRect(bx, bTop, bw, bH);
        ctx.fillStyle = P.mid; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('r', bx + bw / 2, bTop - 8); ctx.fillText(r.toFixed(2), bx + bw / 2, bTop + bH + 16);
        return r;
    }
    function setStatus(r) {
        const label = r < 0.3 ? '<b>バラバラ</b>' : (r < 0.7 ? '<b>揃ってきた</b>' : '<b>揃った</b>');
        st.innerHTML = '秩序 r = <b>' + r.toFixed(2) + '</b>（0〜1）／ ' + label
            + '。K を上げると、ある強さを超えたところで一斉に位相が揃います（相転移）。';
    }
    view.canvas.setAttribute('aria-label', '円周上の結合振動子。結合 K を上げると位相が一斉に揃い、中心の秩序変数ベクトル r が伸びる。');
    view.onResize = draw;
    (function loop() { if (host.offsetParent) { step(); setStatus(draw()); } raf = requestAnimationFrame(loop); })();
}

// ============================================================
// 7) 数直線の上の矢印を、掛け算で回す（回転の掛け算 §1・§2・pd#149）
//    §1 neg-rotation: 3 に −1 を掛けると、0 を中心に 180°回って反対を向く。
//    §2 i-rotation:   1 に i を掛けると 90°ずつ回り、2 回で −1 に着く。
//    ひっくり返るのでなく、回る動きで見せる。
// ============================================================
function mountTurnArrow(host, cfg) {
    const P = PAL();
    const view = makeCanvas(host, 0.72);
    const row = controls(host);
    const st = status(host);
    const R = cfg.range;  // 数直線に出す目盛りの範囲（−R〜R）
    let count = 0;        // 掛けた回数
    let ang = 0;          // 矢印の向き（度・0 が右）
    let anim = null;      // { from, to, t0 }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    button(row, cfg.btn, () => {
        if (anim) return;
        count += 1;
        const from = ang, to = ang + cfg.step;
        if (reduce) { ang = to; draw(); return; }
        anim = { from, to, t0: performance.now() };
        requestAnimationFrame(tick);
    });
    button(row, '最初に戻す', () => { anim = null; count = 0; ang = 0; draw(); });

    function tick(now) {
        if (!anim) return;
        const u = Math.min(1, (now - anim.t0) / (cfg.step * 5));
        const e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
        ang = anim.from + (anim.to - anim.from) * e;
        draw();
        if (u < 1) requestAnimationFrame(tick);
        else { ang = anim.to; anim = null; draw(); }
    }

    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2;
        const unit = Math.min(W / (2 * R + 1.6), H / (2 * cfg.start + 1.2));
        // 数直線と目盛り
        ctx.strokeStyle = P.mid; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(cx - unit * (R + 0.5), cy); ctx.lineTo(cx + unit * (R + 0.5), cy); ctx.stroke();
        ctx.fillStyle = P.mid; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        for (let n = -R; n <= R; n++) {
            const x = cx + n * unit;
            ctx.beginPath(); ctx.moveTo(x, cy - 4); ctx.lineTo(x, cy + 4); ctx.stroke();
            ctx.fillText(n < 0 ? '−' + (-n) : String(n), x, cy + 18);
        }
        // 回る道筋（円）
        ctx.strokeStyle = P.gold; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.arc(cx, cy, cfg.start * unit, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]);
        // 矢印（0 から先端へ）
        const rad = ang * Math.PI / 180;
        const tx = cx + cfg.start * unit * Math.cos(rad), ty = cy - cfg.start * unit * Math.sin(rad);
        ctx.strokeStyle = P.coral; ctx.fillStyle = P.coral; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(tx, ty); ctx.stroke();
        const hl = 11, a = Math.atan2(ty - cy, tx - cx);
        ctx.beginPath(); ctx.moveTo(tx, ty);
        ctx.lineTo(tx - hl * Math.cos(a - 0.4), ty - hl * Math.sin(a - 0.4));
        ctx.lineTo(tx - hl * Math.cos(a + 0.4), ty - hl * Math.sin(a + 0.4));
        ctx.closePath(); ctx.fill();
        // 数直線の外に出た先端には、その数を添える
        const tip = !anim && cfg.tipLabel ? cfg.tipLabel(count) : '';
        if (tip) {
            ctx.font = '14px sans-serif'; ctx.textAlign = 'left';
            ctx.fillText(tip, tx + 10, ty + (Math.sin(rad) > 0 ? 6 : 4));
        }
        // 中心
        ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(cx, cy, 3.5, 0, Math.PI * 2); ctx.fill();
        if (!anim) st.innerHTML = cfg.status(count);
    }
    view.canvas.setAttribute('aria-label', cfg.aria);
    view.onResize = draw;
    draw();
}
const signed = v => (v < 0 ? '−' + (-v) : String(v));
function mountNegRotation(host) {
    mountTurnArrow(host, {
        start: 3, step: 180, range: 4, btn: '× (−1)',
        status: n => n === 0
            ? 'いまの数は <b>3</b> です。「× (−1)」を押すと、矢印が 0 を中心に回ります。'
            : '3 に −1 を <b>' + n + '</b> 回掛けました。いまの数は <b>' + signed(n % 2 ? -3 : 3) + '</b> です。回した角度は <b>'
              + (n * 180) + ' 度</b>で、0 からの長さは 3 のままです。',
        aria: '数直線の上の矢印。−1 を掛けると、矢印が 0 を中心に 180 度回って反対を向く。長さは変わらない。',
    });
}
function mountIRotation(host) {
    const VAL = ['1', 'i', '−1', '−i'];
    mountTurnArrow(host, {
        start: 1, step: 90, range: 2, btn: '× i',
        tipLabel: n => (n % 2 ? VAL[n % 4] : ''),
        status: n => {
            if (n === 0) return 'いまの数は <b>1</b> です。「× i」を押すと、矢印が 0 を中心に 90 度回ります。';
            const v = VAL[n % 4];
            const where = n % 2 ? '数直線の外にあります。' : '数直線の上に戻りました。';
            return '1 に i を <b>' + n + '</b> 回掛けました。いまの数は <b>' + v + '</b> で、' + where
                + '回した角度は <b>' + (n * 90) + ' 度</b>です。' + (n === 2 ? '（i を 2 回掛けると −1）' : '');
        },
        aria: '数直線の上の矢印。i を掛けると、矢印が 0 を中心に 90 度ずつ回る。1 回で数直線の外（0 の真上）、2 回で −1 に着く。',
    });
}

// ============================================================
// 8) 実軸と虚軸の平面（回転の掛け算 §3・pd#149）
//    点を置く（クリック・タップ・ドラッグ）と、横（実軸）と縦（虚軸）の値と、その点の数が出る。
//    「× i」で点が 0 を中心に 90°回る（(a, b) → (−b, a)）。
// ============================================================
function mountComplexPlane(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.8);
    const row = controls(host);
    const st = status(host);
    const N = 3;                 // 目盛りの範囲（−3〜3）
    let a = 2, b = 1;            // 点の横と縦の値（整数）
    let anim = null;             // { r, from, t0, to: [a, b] }
    let dragging = false;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    button(row, '× i', () => {
        if (anim || (a === 0 && b === 0)) return;
        const to = [-b, a];
        if (reduce) { [a, b] = to; draw(); return; }
        anim = { r: Math.hypot(a, b), from: Math.atan2(b, a), t0: performance.now(), to };
        requestAnimationFrame(tick);
    });
    button(row, '最初に戻す', () => { anim = null; a = 2; b = 1; draw(); });

    function tick(now) {
        if (!anim) return;
        const u = Math.min(1, (now - anim.t0) / 450);
        draw(anim.from + (Math.PI / 2) * (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2));
        if (u < 1) requestAnimationFrame(tick);
        else { [a, b] = anim.to; anim = null; draw(); }
    }

    function geom() {
        const { W, H } = view;
        const unit = Math.min(W, H) / (2 * N + 1.6);
        return { cx: W / 2, cy: H / 2, unit };
    }
    function place(ev) {
        if (anim) return;
        const rect = view.canvas.getBoundingClientRect();
        const { cx, cy, unit } = geom();
        const clamp = v => Math.max(-N, Math.min(N, Math.round(v)));
        a = clamp((ev.clientX - rect.left - cx) / unit);
        b = clamp(-(ev.clientY - rect.top - cy) / unit);
        draw();
    }
    view.canvas.addEventListener('pointerdown', ev => { dragging = true; place(ev); });
    view.canvas.addEventListener('pointermove', ev => { if (dragging) place(ev); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => view.canvas.addEventListener(t, () => { dragging = false; }));
    view.canvas.style.cursor = 'pointer';

    function numText(x, y) {
        if (x === 0 && y === 0) return '0';
        const re = x === 0 ? '' : signed(x);
        let im = '';
        if (y !== 0) {
            const mag = Math.abs(y) === 1 ? 'i' : Math.abs(y) + 'i';
            im = re === '' ? (y < 0 ? '−' + mag : mag) : (y < 0 ? ' − ' : ' + ') + mag;
        }
        return re + im;
    }

    function draw(angle) {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const { cx, cy, unit } = geom();
        // 格子
        ctx.strokeStyle = P.faint; ctx.lineWidth = 1;
        for (let n = -N; n <= N; n++) {
            ctx.beginPath(); ctx.moveTo(cx + n * unit, cy - N * unit); ctx.lineTo(cx + n * unit, cy + N * unit); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(cx - N * unit, cy + n * unit); ctx.lineTo(cx + N * unit, cy + n * unit); ctx.stroke();
        }
        // 実軸（横）と虚軸（縦）
        ctx.strokeStyle = P.mid; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(cx - unit * (N + 0.5), cy); ctx.lineTo(cx + unit * (N + 0.5), cy);
        ctx.moveTo(cx, cy - unit * (N + 0.5)); ctx.lineTo(cx, cy + unit * (N + 0.5)); ctx.stroke();
        ctx.fillStyle = P.mid; ctx.font = '11px sans-serif';
        for (let n = -N; n <= N; n++) {
            if (n === 0) continue;
            ctx.textAlign = 'center'; ctx.fillText(signed(n), cx + n * unit, cy + 15);
            ctx.textAlign = 'right'; ctx.fillText(numText(0, n), cx - 6, cy - n * unit + 4);
        }
        ctx.font = '12px sans-serif'; ctx.fillStyle = P.navy;
        ctx.textAlign = 'right'; ctx.fillText('実軸', cx + unit * (N + 0.5), cy - 8);
        ctx.textAlign = 'left'; ctx.fillText('虚軸', cx + 8, cy - unit * (N + 0.3));

        // 点の位置（回転中は角度で、止まっているときは整数の値で）
        let px, py;
        if (angle != null) { px = anim.r * Math.cos(angle); py = anim.r * Math.sin(angle); }
        else { px = a; py = b; }
        const x = cx + px * unit, y = cy - py * unit;
        if (angle == null) {
            // 横と縦の軸へ下ろした点線
            ctx.strokeStyle = P.gold; ctx.lineWidth = 1.2; ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, cy); ctx.moveTo(x, y); ctx.lineTo(cx, y); ctx.stroke();
            ctx.setLineDash([]);
        }
        // 0 から点への矢印
        ctx.strokeStyle = P.coral; ctx.fillStyle = P.coral; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
        if (angle == null) {
            ctx.font = '14px sans-serif'; ctx.textAlign = 'left';
            ctx.fillText(numText(a, b), x + 10, y - 8);
        }
        ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();

        if (angle == null) {
            st.innerHTML = '横（実軸）の値は <b>' + signed(a) + '</b>、縦（虚軸）の値は <b>' + signed(b) + '</b> です。この点の数は <b>'
                + numText(a, b) + '</b> です。平面のどこかを押すと、点がそこへ移ります。';
        }
    }
    view.canvas.setAttribute('aria-label', '実軸（横）と虚軸（縦）の平面。点を置くと、横と縦の値とその点の数が出る。× i で点が 0 を中心に 90 度回る。');
    view.onResize = () => draw();
    draw();
}

// ============================================================
// 9) 地図と山（回転の掛け算 §4・pd#149）
//    上＝横から見た山、下＝上から見た山（地図）。動かすのは山の高さだけ。
//    横から見た図では高さが変わり、上から見た図は変わらない＝上から見た図では高さはわからない
//    （pjdhiro 2026-11-06「横から見たときは山の高さを変える。上から見た図では高さはわからない」）。
// ============================================================
function mountMapMountain(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.95);
    const row = controls(host);
    const st = status(host);
    let h = 3000;   // 山の高さ（m）
    slider(row, { label: '山の高さ', min: 500, max: 4000, step: 500, value: h, onInput: v => { h = v; draw(); } });

    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const xl = W * 0.06, xr = W * 0.94;                  // 東西の範囲（上下の図で共通）
        const kmToX = km => (xl + xr) / 2 + km * (xr - xl) / 12;
        const px = kmToX(0);
        const R = Math.min((xr - xl) / 12 * 1.6, H * 0.15);  // 山のすその半径（画素）
        // ---- 上: 横から見た山 ----
        const ground = H * 0.44, top = H * 0.10;
        const peak = ground - h * (ground - top) / 4000;
        ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
        ctx.fillStyle = P.mid; ctx.fillText('横から見た山', xl, top - 12 > 10 ? top - 12 : 12);
        ctx.strokeStyle = P.mid; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(xl, ground); ctx.lineTo(xr, ground); ctx.stroke();
        ctx.fillStyle = P.navy; ctx.strokeStyle = P.navy;
        ctx.beginPath(); ctx.moveTo(px - R, ground); ctx.lineTo(px, peak); ctx.lineTo(px + R, ground); ctx.closePath();
        ctx.globalAlpha = 0.12; ctx.fill(); ctx.globalAlpha = 1; ctx.stroke();
        ctx.fillStyle = P.coral; ctx.textAlign = 'center';
        ctx.fillText('高さ ' + h + ' m', px, peak - 8);
        // ---- 下: 上から見た山（地図）----
        const my = H * 0.74, y0 = H * 0.54, y1 = H * 0.94;
        ctx.fillStyle = P.mid; ctx.textAlign = 'left'; ctx.fillText('上から見た山（地図）', xl, y0 - 6);
        ctx.strokeStyle = P.line; ctx.lineWidth = 1;
        for (let km = -6; km <= 6; km += 2) {
            const gx = kmToX(km);
            ctx.beginPath(); ctx.moveTo(gx, y0); ctx.lineTo(gx, y1); ctx.stroke();
        }
        for (let i = 0; i <= 4; i++) {
            const gy = y0 + (y1 - y0) * i / 4;
            ctx.beginPath(); ctx.moveTo(xl, gy); ctx.lineTo(xr, gy); ctx.stroke();
        }
        ctx.fillStyle = P.navy; ctx.font = '11px sans-serif';
        ctx.textAlign = 'right'; ctx.fillText('東', xr, y1 + 13);
        ctx.textAlign = 'left'; ctx.fillText('西', xl, y1 + 13);
        // すそ（円）と、山頂からすそへの尾根
        ctx.strokeStyle = P.navy; ctx.fillStyle = P.navy; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(px, my, R, 0, Math.PI * 2);
        ctx.globalAlpha = 0.12; ctx.fill(); ctx.globalAlpha = 1; ctx.stroke();
        ctx.lineWidth = 0.8;
        for (let t = 0; t < 8; t++) {
            const a = t * Math.PI / 4;
            ctx.beginPath(); ctx.moveTo(px, my); ctx.lineTo(px + R * Math.cos(a), my + R * Math.sin(a)); ctx.stroke();
        }
        // ---- 山頂からまっすぐ下ろした線（上の図から下の図へ）----
        ctx.strokeStyle = P.coral; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(px, peak); ctx.lineTo(px, my); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = P.coral;
        ctx.beginPath(); ctx.arc(px, my, 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('高さはわからない', px, my + R + 15 < y1 ? my + R + 15 : y1 - 4);

        st.innerHTML = '横から見ると、山の高さは <b>' + h + ' m</b> です。上から見た図は、山をどの高さにしても同じで、高さはわかりません。';
    }
    view.canvas.setAttribute('aria-label', '上は横から見た山、下は上から見た山（地図）。山の高さを変えると横から見た図は変わるが、上から見た図は変わらず、高さはわからない。');
    view.onResize = draw;
    draw();
}

// ============================================================
// 10) 実軸の上で測る（回転の掛け算 §4・pd#149）
//     長さ 3 の矢印を、実軸から虚軸の向きへ角度スライダーで起こす。
//     実軸の上で測った値（矢印の影）＝長さ × cos（角度）は、真上（90°）で 0 になる（cos 90° = 0 を出す・pjdhiro 2026-11-05）。
// ============================================================
function mountProjectToReal(host) {
    const P = PAL();
    const view = makeCanvas(host, 0.62);
    const row = controls(host);
    const st = status(host);
    const L = 3;
    let deg = 30;
    const sl = slider(row, { label: '矢印の角度', min: 0, max: 90, step: 1, value: deg, onInput: v => { deg = v; draw(); } });
    button(row, '真上（90 度）', () => { deg = 90; sl.value = 90; draw(); });

    function draw() {
        const { ctx, W, H } = view;
        ctx.clearRect(0, 0, W, H);
        const unit = Math.min(W / 5.2, H / 3.8);
        const cx = W / 2 - unit * 1.4, cy = H - unit * 0.55;
        // 軸と目盛り
        ctx.strokeStyle = P.mid; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(cx - unit * 0.6, cy); ctx.lineTo(cx + unit * 3.6, cy);
        ctx.moveTo(cx, cy + unit * 0.3); ctx.lineTo(cx, cy - unit * 3.3); ctx.stroke();
        ctx.fillStyle = P.mid; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        for (let n = 1; n <= 3; n++) {
            ctx.beginPath(); ctx.moveTo(cx + n * unit, cy - 4); ctx.lineTo(cx + n * unit, cy + 4); ctx.stroke();
            ctx.fillText(String(n), cx + n * unit, cy + 16);
            ctx.textAlign = 'right'; ctx.fillText(n === 1 ? 'i' : n + 'i', cx - 6, cy - n * unit + 4); ctx.textAlign = 'center';
        }
        ctx.font = '12px sans-serif'; ctx.fillStyle = P.navy;
        ctx.textAlign = 'right'; ctx.fillText('実軸', cx + unit * 3.6, cy - 8);
        ctx.textAlign = 'left'; ctx.fillText('虚軸', cx + 8, cy - unit * 3.2);
        const r = deg * Math.PI / 180;
        const a = L * Math.cos(r), b = L * Math.sin(r);
        const x = cx + a * unit, y = cy - b * unit;
        // 真上から実軸へ下ろした点線と、実軸の上の影
        ctx.strokeStyle = P.gold; ctx.lineWidth = 1.2; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, cy); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = P.gold; ctx.lineWidth = 6; ctx.globalAlpha = 0.7;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, cy); ctx.stroke(); ctx.globalAlpha = 1;
        // 矢印
        ctx.strokeStyle = P.coral; ctx.fillStyle = P.coral; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
        const hl = 11, ang = Math.atan2(y - cy, x - cx);
        ctx.beginPath(); ctx.moveTo(x, y);
        ctx.lineTo(x - hl * Math.cos(ang - 0.4), y - hl * Math.sin(ang - 0.4));
        ctx.lineTo(x - hl * Math.cos(ang + 0.4), y - hl * Math.sin(ang + 0.4));
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();

        const fmt = v => (Math.abs(v) < 0.05 ? '0' : v.toFixed(1));
        st.innerHTML = '実軸の上で測った値は 3 × cos ' + deg + ' 度 = <b>' + fmt(a) + '</b> です。'
            + (deg === 90 ? '矢印は虚軸の上の 3i で、cos 90 度 = 0 です。' : '');
    }
    view.canvas.setAttribute('aria-label', '長さ 3 の矢印を実軸から虚軸の向きへ起こす。実軸の上で測った値は小さくなり、真上の 90 度で 0 になる。');
    view.onResize = draw;
    draw();
}

// ---- ディスパッチ ----
const MOUNTS = {
    'neg-rotation': mountNegRotation,
    'i-rotation': mountIRotation,
    'complex-plane': mountComplexPlane,
    'map-mountain': mountMapMountain,
    'project-to-real': mountProjectToReal,
    'complex-rotation': mountComplexRotation,
    'quaternion-order': mountQuaternionOrder,
    'zero-divisor': mountZeroDivisor,
    'fano-home': mountFanoHome,
    'ou-well': mountOUWell,
    'kuramoto-sync': mountKuramotoSync,
};
function init() {
    document.querySelectorAll('[data-microworld]').forEach(host => {
        const kind = host.getAttribute('data-microworld');
        const mount = MOUNTS[kind];
        if (!mount) return;
        try {
            mount(host);
            host.classList.add('mw-ready');
        } catch (err) {
            host.classList.remove('mw-ready');
            console.warn('micro-world mount failed:', kind, err);
        }
    });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
