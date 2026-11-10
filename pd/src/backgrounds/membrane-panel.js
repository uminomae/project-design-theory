// 膜の渦（love-membrane.js）の調整の板。読者も、ページ右端の「dev」ボタンから開ける。
// 調整のページ（studio.html）も同じ板を使い、そちらでは画面のドラッグで時刻を送り戻せる。
// 板で動かした値は、その人の画面の中だけで変わる（保存しない・ほかの人には届かない）。
// 「今の値を書き出す」で、その状態を再現する frame.html の URL と JSON をコピーできる。

const GUI_URL = 'https://cdn.jsdelivr.net/npm/lil-gui@0.19.2/dist/lil-gui.esm.min.js';

const deg = (r) => (r * 180) / Math.PI;
const rad = (d) => (d * Math.PI) / 180;

// 色：uniform の値（1 を超えることがある）を、色と強さに分けて扱う
const toHex = (v) => {
    const k = Math.max(v.x, v.y, v.z, 1e-6);
    const h = (c) => Math.round(Math.min(1, Math.max(0, c / k)) * 255).toString(16).padStart(2, '0');
    return { hex: `#${h(v.x)}${h(v.y)}${h(v.z)}`, k };
};
const fromHex = (hex, k, v) => {
    const n = parseInt(hex.slice(1), 16);
    v.set((((n >> 16) & 255) / 255) * k, (((n >> 8) & 255) / 255) * k, ((n & 255) / 255) * k);
};

let styleAdded = false;
function addStyle() {
    if (styleAdded) return;
    styleAdded = true;
    const st = document.createElement('style');
    st.textContent = `
        .love-dev-btn {
            position: fixed; right: 0; top: 50%; transform: translateY(-50%); z-index: 1000;
            writing-mode: vertical-rl; font: 600 11px/1 ui-monospace, monospace; letter-spacing: 0.12em;
            padding: 12px 6px; color: #d7deec; background: rgba(8, 12, 26, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.2); border-right: none; border-radius: 8px 0 0 8px;
            cursor: pointer; opacity: 0.55; transition: opacity 0.2s;
        }
        .love-dev-btn:hover, .love-dev-btn:focus-visible, .love-dev-btn[aria-expanded="true"] { opacity: 1; }
        .lil-gui.love-panel { --width: 300px; --name-width: 44%; z-index: 1001; }
        .lil-gui.love-panel.autoPlace { top: 56px; right: 34px; max-height: calc(100vh - 120px); overflow: auto; }
        .love-panel-out {
            position: fixed; left: 12px; bottom: 12px; width: min(560px, calc(100vw - 24px)); height: 150px; z-index: 1002;
            background: rgba(0, 0, 0, 0.85); color: #e6ebf5; border: 1px solid #555; border-radius: 6px;
            font: 12px/1.5 ui-monospace, monospace; display: none;
        }
    `;
    document.head.appendChild(st);
}

// 板を作る。返すもの：gui・値（P）・時刻のつまみ・つまみを動かしているか
export async function createPanel(lm, { title = '膜の渦の調整' } = {}) {
    addStyle();
    const { default: GUI } = await import(GUI_URL);
    const U = lm.uniforms;

    const P = {
        一時停止: lm.paused,
        経過秒: +lm.elapsed.toFixed(1),
        '1:30 へ': () => lm.seek(90),
        '4:30 へ': () => lm.seek(270),
        落ちる速さ: lm.speed ?? 0.25,
        速さを手で: lm.speed !== null && lm.speed !== undefined,
        左右: deg(U.uYaw.value),
        上下: deg(U.uPitch.value),
        向きを手で: lm.manual.has('uYaw'),
        距離: U.uDist.value,
        渦: U.uVortex.value,
        渦を手で: lm.manual.has('uVortex'),
        歪み: U.uLens.value,
        膜の間: U.uSplit.value,
        膜の濃さ: U.uMembraneGain.value,
        軸の光: U.uShell.value,
        地: lm.clearHex,
    };
    const colors = {};
    for (const [name, key] of [['手前（冷）', 'uCool'], ['奥（暖）', 'uWarm'], ['中心の門', 'uGate'], ['膜A', 'uGold'], ['膜B', 'uSilver']]) {
        const { hex, k } = toHex(U[key].value);
        colors[name] = { key, hex, k };
    }

    const gui = new GUI({ title });
    gui.domElement.classList.add('love-panel');

    const g0 = gui.addFolder('時刻と位置');
    g0.add(P, '一時停止').onChange((v) => { lm.paused = v; });
    // つまみを滑らせているあいだ、映像がその時刻へ送り戻される
    const timeCtl = g0.add(P, '経過秒', 0, 600, 0.1).name('時刻（秒）').onChange((v) => lm.seek(v));
    g0.add(P, '1:30 へ');
    g0.add(P, '4:30 へ');
    g0.add(P, '速さを手で').onChange((v) => { lm.speed = v ? P.落ちる速さ : null; });
    g0.add(P, '落ちる速さ', 0, 2, 0.01).onChange((v) => { if (P.速さを手で) lm.speed = v; });

    const g1 = gui.addFolder('カメラ');
    const setDir = () => {
        if (P.向きを手で) { lm.manual.add('uYaw'); lm.manual.add('uPitch'); U.uYaw.value = rad(P.左右); U.uPitch.value = rad(P.上下); }
        else { lm.manual.delete('uYaw'); lm.manual.delete('uPitch'); }
        lm.redraw();
    };
    g1.add(P, '向きを手で').onChange(setDir);
    g1.add(P, '左右', -180, 0, 0.1).name('左右（度）').onChange(setDir);
    g1.add(P, '上下', -30, 30, 0.1).name('上下（度）').onChange(setDir);
    g1.add(P, '距離', 1.2, 4.5, 0.01).name('中心からの距離').onChange((v) => { U.uDist.value = v; lm.redraw(); });

    const g2 = gui.addFolder('形');
    const setVortex = () => {
        if (P.渦を手で) { lm.manual.add('uVortex'); U.uVortex.value = P.渦; } else lm.manual.delete('uVortex');
        lm.redraw();
    };
    g2.add(P, '渦を手で').onChange(setVortex);
    g2.add(P, '渦', 0, 2.5, 0.01).onChange(setVortex);
    g2.add(P, '歪み', 0, 0.4, 0.005).name('歪み（重力レンズ）').onChange((v) => { U.uLens.value = v; lm.redraw(); });
    g2.add(P, '膜の間', 0, 0.9, 0.01).name('二枚の膜の間').onChange((v) => { U.uSplit.value = v; lm.redraw(); });
    g2.add(P, '膜の濃さ', 0.1, 1.5, 0.01).onChange((v) => { U.uMembraneGain.value = v; lm.redraw(); });
    g2.add(P, '軸の光', 0, 3, 0.01).onChange((v) => { U.uShell.value = v; lm.redraw(); });

    const g3 = gui.addFolder('色');
    g3.addColor(P, '地').onChange((v) => lm.setClearColor(parseInt(v.slice(1), 16)));
    for (const [name, c] of Object.entries(colors)) {
        const sub = g3.addFolder(name);
        const apply = () => { fromHex(c.hex, c.k, U[c.key].value); lm.redraw(); };
        sub.addColor(c, 'hex').name('色').onChange(apply);
        sub.add(c, 'k', 0, 2.5, 0.01).name('強さ').onChange(apply);
    }

    const out = document.createElement('textarea');
    out.className = 'love-panel-out';
    out.readOnly = true;
    document.body.appendChild(out);
    const g4 = gui.addFolder('書き出し');
    g4.add({ 書き出す: () => {
        const v3 = (v) => [v.x, v.y, v.z].map((n) => +n.toFixed(3)).join(',');
        const e = +lm.elapsed.toFixed(1);
        const params = new URLSearchParams({ bg: 'membrane', e: String(e) });
        if (P.速さを手で) params.set('speed', P.落ちる速さ);
        if (P.向きを手で) { params.set('yaw', U.uYaw.value.toFixed(4)); params.set('pitch', U.uPitch.value.toFixed(4)); }
        if (P.渦を手で) params.set('vortex', U.uVortex.value);
        params.set('dist', U.uDist.value); params.set('lens', U.uLens.value);
        params.set('split', U.uSplit.value); params.set('mg', U.uMembraneGain.value); params.set('shell', U.uShell.value);
        params.set('bgc', P.地.slice(1));
        for (const [k, key] of [['cool', 'uCool'], ['warm', 'uWarm'], ['gate', 'uGate'], ['gold', 'uGold'], ['silver', 'uSilver']]) params.set(k, v3(U[key].value));
        const url = `${new URL('./frame.html', import.meta.url).href}?${params}`;
        const json = JSON.stringify({ 経過秒: e, 落ちた量: +lm.fall.toFixed(2), ...Object.fromEntries(params) }, null, 1);
        out.value = `${url}\n\n${json}`;
        out.style.display = 'block';
        out.select();
        navigator.clipboard?.writeText(out.value).catch(() => {});
    } }, '書き出す').name('今の値を書き出す（コピー）');
    g4.add({ 閉じる: () => { out.style.display = 'none'; } }, '閉じる').name('書き出した欄を閉じる');

    // 時刻のつまみを、動いている映像に合わせて進める（つまみを動かしているあいだは止める）
    const state = { sliding: false };
    gui.domElement.addEventListener('pointerdown', () => { state.sliding = true; });
    window.addEventListener('pointerup', () => { state.sliding = false; });
    const tick = () => {
        if (!gui._closed && !state.sliding) {
            const e = lm.elapsed;
            if (Math.abs(P.経過秒 - e) > 0.05) { P.経過秒 = Math.min(600, +e.toFixed(1)); timeCtl.updateDisplay(); }
        }
        requestAnimationFrame(tick);
    };
    tick();

    return { gui, P, timeCtl, state, out };
}

// ページ右端の「dev」ボタン。押すと板を開き、もう一度押すと隠す
export function mountDevButton() {
    const lm = window.loveMembrane;
    if (!lm || document.querySelector('.love-dev-btn')) return;
    addStyle();
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'love-dev-btn';
    btn.textContent = 'dev';
    btn.setAttribute('aria-label', '背景の調整の板を開く');
    btn.setAttribute('aria-expanded', 'false');
    document.body.appendChild(btn);
    let panel = null;
    btn.addEventListener('click', async () => {
        if (!panel) {
            btn.disabled = true;
            try {
                panel = await createPanel(lm);
            } finally {
                btn.disabled = false;
            }
        } else {
            const hidden = panel.gui.domElement.style.display === 'none';
            panel.gui.domElement.style.display = hidden ? '' : 'none';
            if (!hidden) panel.out.style.display = 'none';
        }
        const open = panel.gui.domElement.style.display !== 'none';
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? '背景の調整の板を隠す' : '背景の調整の板を開く');
    });
}
