// 読み物「神・愛・美と、ジュリア集合」の図。対話の作業ページ（漸化式を遡るたとえ・版 21）の図の計算と描き方を、そのまま移した。
// 外部のライブラリは使わず、canvas と素の JS で描く。色は図の枠（.jp-fig）に置いた CSS の変数から読む。
// 1) 黄金角の図：① 平面の全体（前へ打った値＝赤、遡った点＝灰）、② ①の赤を不動点の周りで拡大、③ ひまわりの並べ方
// 2) 力の地図（c の平面）と、その c で残る形（z の平面）。「遡った点を撒く」で ±√(z − c) の遡りを重ねる
(function () {
  const figs = document.querySelectorAll(".jp-fig");
  if (!figs.length) return;
  const css = (el, n) => getComputedStyle(el).getPropertyValue(n).trim();
  function hex(c) { c = c.replace("#", ""); if (c.length === 3) c = c.split("").map((x) => x + x).join(""); return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]; }
  function dot(ctx, px, py, rad) { ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.fill(); }

  /* ---- 1) 黄金角の図：julia7-golden-three.py と同じ値で描く ---- */
  // 一歩ごとの回る角度（度）と寄る倍率 r から、不動点の掛け率 λ = r·e^{iθ} を置き、c = λ/2 − λ²/4（不動点 z* = λ/2）を作る。
  // 既定は作業ページと同じ黄金角（約 137.5°）と r = 0.97。スライダの付いた図（data-gctrl）だけが値を変える
  const GOLDEN_DEG = 360 * (1 - (Math.sqrt(5) - 1) / 2);
  function compute(deg, r) {
    const A = (deg * Math.PI) / 180;
    const lr = r * Math.cos(A), li = r * Math.sin(A);
    const l2r = lr * lr - li * li, l2i = 2 * lr * li;
    const cr = lr / 2 - l2r / 4, ci = li / 2 - l2i / 4, zsr = lr / 2, zsi = li / 2;
    const fwd = [[0, 0]]; let x = 0, y = 0;
    for (let n = 0; n < 500; n++) { const xx = x * x - y * y + cr; y = 2 * x * y + ci; x = xx; fwd.push([x, y]); }
    const bwd = []; let seed = 12345; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    x = 0; y = 0;
    for (let k = 0; k < 45000; k++) {
      const wr = x - cr, wi = y - ci, m = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
      x = m * Math.cos(a); y = m * Math.sin(a); if (rnd() < 0.5) { x = -x; y = -y; } if (k > 20) bwd.push([x, y]);
    }
    return { deg, r, A, cr, ci, zsr, zsi, fwd, bwd };
  }
  const DEFAULT = compute(GOLDEN_DEG, 0.97);
  function clear(cv, bg) { const t = cv.getContext("2d"); t.fillStyle = bg; t.fillRect(0, 0, cv.width, cv.height); return t; }
  function drawG1(cv, P) { // ① 平面の全体
    const f = cv.closest(".jp-fig"), t = clear(cv, css(f, "--panel")), W = cv.width, s = W / 3.0, ox = W / 2, oy = W / 2;
    t.fillStyle = css(f, "--mid"); t.globalAlpha = 0.6; P.bwd.forEach((p) => t.fillRect(ox + s * p[0], oy - s * p[1], 1, 1)); t.globalAlpha = 1;
    t.fillStyle = css(f, "--coral"); P.fwd.forEach((p, i) => dot(t, ox + s * p[0], oy - s * p[1], Math.max(0.8, 2.4 - i / 150)));
  }
  function drawG2(cv, P) { // ② 不動点の周りで拡大（はみ出すときだけ縮める）
    const f = cv.closest(".jp-fig"), t = clear(cv, css(f, "--panel")), W = cv.width, ox = W / 2, oy = W / 2;
    const far = Math.max(...P.fwd.slice(1).map((p) => Math.hypot(p[0] - P.zsr, p[1] - P.zsi)));
    const s = Math.min(W / 0.7, (W / 2 - 6) / far);
    t.fillStyle = css(f, "--coral"); P.fwd.slice(1).forEach((p, i) => dot(t, ox + s * (p[0] - P.zsr), oy - s * (p[1] - P.zsi), i < 60 ? 2.8 : 1.7));
  }
  function drawG3(cv, P) { // ③ ひまわりの並べ方（同じ角度・距離 √n）
    const f = cv.closest(".jp-fig"), t = clear(cv, css(f, "--panel")), W = cv.width, ox = W / 2, oy = W / 2;
    t.fillStyle = css(f, "--gold"); const k = (W / 2 - 12) / Math.sqrt(500);
    for (let n = 1; n < 500; n++) { const a = n * P.A, rad = k * Math.sqrt(n); dot(t, ox + rad * Math.cos(a), oy - rad * Math.sin(a), 2.3); }
  }
  const gState = new Map(); // 図の枠ごとの値
  function drawFig(f) {
    const P = gState.get(f) || DEFAULT;
    f.querySelectorAll("canvas[data-g]").forEach((cv) => ({ 1: drawG1, 2: drawG2, 3: drawG3 })[cv.dataset.g](cv, P));
    const out = f.querySelector("[data-gout]");
    if (out) {
      const b = P.ci;
      out.textContent = "c = " + P.cr.toFixed(3) + (b < 0 ? " − " : " + ") + Math.abs(b).toFixed(3) + "i　一歩ごとに " + P.deg.toFixed(1) + "° 回り、" + P.r.toFixed(3) + " 倍に寄る";
    }
  }
  function drawGolden() { document.querySelectorAll(".jp-fig").forEach((f) => { if (f.querySelector("canvas[data-g]")) drawFig(f); }); }
  document.querySelectorAll(".jp-fig[data-gctrl]").forEach((f) => {
    const deg = f.querySelector("[data-gdeg]"), rr = f.querySelector("[data-gr]");
    const dOut = f.querySelector("[data-gdeg-out]"), rOut = f.querySelector("[data-gr-out]");
    let timer = 0;
    const update = () => {
      dOut.textContent = Number(deg.value).toFixed(1) + "°"; rOut.textContent = Number(rr.value).toFixed(3);
      clearTimeout(timer);
      timer = setTimeout(() => { gState.set(f, compute(Number(deg.value), Number(rr.value))); drawFig(f); }, 30);
    };
    deg.addEventListener("input", update); rr.addEventListener("input", update);
    const reset = f.querySelector("[data-greset]");
    // 黄金角に戻す：スライダの刻み（0.1°）に丸めず、黄金角そのもの（137.507…°）で描く
    if (reset) reset.addEventListener("click", () => {
      clearTimeout(timer); deg.value = GOLDEN_DEG.toFixed(1); rr.value = "0.97";
      dOut.textContent = GOLDEN_DEG.toFixed(1) + "°"; rOut.textContent = "0.970";
      gState.delete(f); drawFig(f);
    });
  });

  /* ---- 2) 力の地図と、その c で残る形 ---- */
  const mand = document.getElementById("jp-mand"), julia = document.getElementById("jp-julia");
  let C = { re: -0.123, im: 0.745 }, showInv = false, mandImg = null;
  const MV = { x0: -2.25, x1: 0.75, y0: -1.3, y1: 1.3 }, JV = { x0: -1.8, x1: 1.8, y0: -1.6, y1: 1.6 };
  function paint(cv, view, fn, maxIt) {
    const f = cv.closest(".jp-fig"), ctx = cv.getContext("2d"), W = cv.width, H = cv.height, img = ctx.createImageData(W, H);
    const S = hex(css(f, "--set")), A0 = hex(css(f, "--esc0")), B0 = hex(css(f, "--esc1"));
    for (let j = 0; j < H; j++) {
      const yy = view.y1 - (view.y1 - view.y0) * j / H;
      for (let i = 0; i < W; i++) {
        const xx = view.x0 + (view.x1 - view.x0) * i / W;
        const n = fn(xx, yy, maxIt), k = (j * W + i) * 4; let col;
        if (n < 0) col = S; else { const t = Math.min(1, Math.sqrt(n / maxIt) * 1.6); col = [A0[0] + (B0[0] - A0[0]) * t, A0[1] + (B0[1] - A0[1]) * t, A0[2] + (B0[2] - A0[2]) * t]; }
        img.data[k] = col[0]; img.data[k + 1] = col[1]; img.data[k + 2] = col[2]; img.data[k + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0); return ctx;
  }
  function escM(cx, cy, m) { let a = 0, b = 0; for (let n = 0; n < m; n++) { const aa = a * a - b * b + cx; b = 2 * a * b + cy; a = aa; if (a * a + b * b > 4) return n; } return -1; }
  function escJ(a, b, m) { for (let n = 0; n < m; n++) { const aa = a * a - b * b + C.re; b = 2 * a * b + C.im; a = aa; if (a * a + b * b > 4) return n; } return -1; }
  function toPx(v, px, py, cv) { return [(px - v.x0) / (v.x1 - v.x0) * cv.width, (v.y1 - py) / (v.y1 - v.y0) * cv.height]; }
  function drawMand() { const ctx = paint(mand, MV, escM, 90); mandImg = ctx.getImageData(0, 0, mand.width, mand.height); markC(); }
  function markC() {
    const f = mand.closest(".jp-fig"), ctx = mand.getContext("2d"); if (mandImg) ctx.putImageData(mandImg, 0, 0);
    const [px, py] = toPx(MV, C.re, C.im, mand); ctx.strokeStyle = css(f, "--coral"); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = css(f, "--mid"); ctx.lineWidth = 1; ctx.globalAlpha = 0.5; const [ax, ay] = toPx(MV, 0, 0, mand);
    ctx.beginPath(); ctx.moveTo(0, ay); ctx.lineTo(mand.width, ay); ctx.moveTo(ax, 0); ctx.lineTo(ax, mand.height); ctx.stroke(); ctx.globalAlpha = 1;
  }
  function drawJulia() {
    const f = julia.closest(".jp-fig"), ctx = paint(julia, JV, escJ, 110);
    if (showInv) {
      ctx.fillStyle = css(f, "--coral"); let zr = 1.3, zi = 0.9; let sd = 7; const rd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
      for (let k = 0; k < 9000; k++) {
        const wr = zr - C.re, wi = zi - C.im; const rr = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
        zr = rr * Math.cos(a); zi = rr * Math.sin(a); if (rd() < 0.5) { zr = -zr; zi = -zi; }
        if (k > 30) { const [px, py] = toPx(JV, zr, zi, julia); ctx.fillRect(px - 1, py - 1, 2.2, 2.2); }
      }
    }
    const n = escM(C.re, C.im, 2000), b = C.im;
    document.getElementById("jp-readout").textContent = "c = " + C.re.toFixed(3) + (b < 0 ? " − " : " + ") + Math.abs(b).toFixed(3) + "i　0 から c だけを足し続けると：" + (n < 0 ? "残る（形はひとつながり）" : n + 1 + " 段で大きさ 2 を超える（形はかけらに散る）");
  }
  function drawMap() { if (mand && julia) { drawMand(); drawJulia(); } }
  if (mand && julia) {
    // c の実部・虚部のスライダ。地図を押したとき・例のボタンのときも、スライダを同じ値に揃える
    const sRe = document.getElementById("jp-cre"), sIm = document.getElementById("jp-cim");
    const oRe = document.getElementById("jp-cre-out"), oIm = document.getElementById("jp-cim-out");
    const syncSliders = () => {
      if (!sRe) return;
      sRe.value = C.re.toFixed(3); sIm.value = C.im.toFixed(3);
      oRe.textContent = C.re.toFixed(3); oIm.textContent = C.im.toFixed(3);
    };
    const setC = (nc) => { C = nc; syncSliders(); markC(); drawJulia(); };
    mand.addEventListener("click", (e) => {
      const rc = mand.getBoundingClientRect();
      setC({ re: MV.x0 + (MV.x1 - MV.x0) * (e.clientX - rc.left) / rc.width, im: MV.y1 - (MV.y1 - MV.y0) * (e.clientY - rc.top) / rc.height });
    });
    document.querySelectorAll("[data-jc]").forEach((b) => b.addEventListener("click", () => { const [a, i] = b.dataset.jc.split(",").map(Number); setC({ re: a, im: i }); }));
    if (sRe) {
      let t = 0;
      const onSlide = () => {
        C = { re: Number(sRe.value), im: Number(sIm.value) };
        oRe.textContent = C.re.toFixed(3); oIm.textContent = C.im.toFixed(3);
        clearTimeout(t); t = setTimeout(() => { markC(); drawJulia(); }, 30);
      };
      sRe.addEventListener("input", onSlide); sIm.addEventListener("input", onSlide);
      syncSliders();
    }
    const inv = document.getElementById("jp-inv");
    inv.addEventListener("click", () => { showInv = !showInv; inv.setAttribute("aria-pressed", String(showInv)); drawJulia(); });
  }

  function all() { drawGolden(); drawMap(); }
  all();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", all);
  new MutationObserver(all).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
