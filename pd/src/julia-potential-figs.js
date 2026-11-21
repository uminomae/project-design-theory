// 読み物「起業家の漸化式と、ジュリア集合」の図。計算と描き方は、対話の作業ページ（漸化式を遡るたとえ・版 21）の図のもの。
// 外部のライブラリは使わず、canvas と素の JS で描く。色は図の枠（.jp-fig）に置いた CSS の変数から読む。
// 1) 固定の図（data-g）：② 黄金角の c の前へ打った値を不動点の周りで拡大、③ ひまわりの並べ方（第五部）
// 2) 手を動かす図（#jp-lab）：c の地図をクリックして c を選ぶ／①で、0 から前へ打った値（赤）と、赤の一点から ±√ の両方で遡る枝を見る（押すと遡りの出発の点が変わる）／ボタン・スライダ／一歩ずつ・再生／塗り分けを重ねる
// 3) c を選ぶ地図と、その c で残る形（#jp-mand・#jp-julia、章の畳み）
// 4) 円を遡って畳む（#jp-fold）：一段を「− c」「√」「−√」の三歩に分け、一歩ずつ・戻す・再生。色で出どころを追う。c は地図のクリックかボタン
(function () {
  const figs = document.querySelectorAll(".jp-fig");
  if (!figs.length) return;
  const css = (el, n) => getComputedStyle(el).getPropertyValue(n).trim();
  function hex(c) { c = c.replace("#", ""); if (c.length === 3) c = c.split("").map((x) => x + x).join(""); return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]; }
  function dot(ctx, px, py, rad) { ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.fill(); }
  const fmtC = (re, im) => re.toFixed(3) + (im < 0 ? " − " : " + ") + Math.abs(im).toFixed(3) + "i";

  // ---- 計算 ----
  const GOLDEN_DEG = 360 * (1 - (Math.sqrt(5) - 1) / 2);
  // 不動点の掛け率 λ = r·e^{iθ} から c = λ/2 − λ²/4（不動点 z* = λ/2）
  function cFromAngle(deg, r) {
    const A = (deg * Math.PI) / 180, lr = r * Math.cos(A), li = r * Math.sin(A);
    return { re: lr / 2 - (lr * lr - li * li) / 4, im: li / 2 - (2 * lr * li) / 4 };
  }
  // c から、引き寄せうる不動点 z* = (1 − √(1 − 4c)) / 2 と、掛け率 λ = 2z*
  function fixedPoint(c) {
    const ar = 1 - 4 * c.re, ai = -4 * c.im, m = Math.hypot(ar, ai);
    const sr = Math.sqrt((m + ar) / 2), si = Math.sign(ai || 1) * Math.sqrt(Math.max(0, (m - ar) / 2));
    const zr = (1 - sr) / 2, zi = -si / 2, lr = 2 * zr, li = 2 * zi;
    return { zr, zi, mod: Math.hypot(lr, li), deg: ((Math.atan2(li, lr) * 180) / Math.PI + 360) % 360 };
  }
  // 前へ：z₀ から z → z² + c を steps 歩。原点からの距離が 2 を超えたら、そこで止める
  function forward(c, z0, steps) {
    const pts = [[z0.re, z0.im]]; let x = z0.re, y = z0.im, escapedAt = 0;
    for (let n = 1; n <= steps; n++) {
      const xx = x * x - y * y + c.re; y = 2 * x * y + c.im; x = xx; pts.push([x, y]);
      if (x * x + y * y > 4) { escapedAt = n; break; }
    }
    return { pts, escapedAt };
  }
  function escM(cx, cy, m) { let a = 0, b = 0; for (let n = 0; n < m; n++) { const aa = a * a - b * b + cx; b = 2 * a * b + cy; a = aa; if (a * a + b * b > 4) return n; } return -1; }
  const escJfor = (c) => (a, b, m) => { for (let n = 0; n < m; n++) { const aa = a * a - b * b + c.re; b = 2 * a * b + c.im; a = aa; if (a * a + b * b > 4) return n; } return -1; };
  // 塗り分け（よくある絵）：平面の一つ一つの点を出発点にして、遠くへ行くまでの回数を色にする
  function paint(cv, view, fn, maxIt, alpha) {
    const f = cv.closest(".jp-fig"), ctx = cv.getContext("2d"), W = cv.width, H = cv.height, img = ctx.createImageData(W, H);
    const S = hex(css(f, "--set")), A0 = hex(css(f, "--esc0")), B0 = hex(css(f, "--esc1"));
    for (let j = 0; j < H; j++) {
      const yy = view.y1 - (view.y1 - view.y0) * j / H;
      for (let i = 0; i < W; i++) {
        const xx = view.x0 + (view.x1 - view.x0) * i / W;
        const n = fn(xx, yy, maxIt), k = (j * W + i) * 4; let col;
        if (n < 0) col = S; else { const t = Math.min(1, Math.sqrt(n / maxIt) * 1.6); col = [A0[0] + (B0[0] - A0[0]) * t, A0[1] + (B0[1] - A0[1]) * t, A0[2] + (B0[2] - A0[2]) * t]; }
        img.data[k] = col[0]; img.data[k + 1] = col[1]; img.data[k + 2] = col[2]; img.data[k + 3] = alpha == null ? 255 : alpha;
      }
    }
    return img;
  }
  const toPx = (v, px, py, cv) => [(px - v.x0) / (v.x1 - v.x0) * cv.width, (v.y1 - py) / (v.y1 - v.y0) * cv.height];
  const fromPx = (v, e, cv) => { const r = cv.getBoundingClientRect(); return { re: v.x0 + (v.x1 - v.x0) * (e.clientX - r.left) / r.width, im: v.y1 - (v.y1 - v.y0) * (e.clientY - r.top) / r.height }; };
  const MV = { x0: -2.25, x1: 0.75, y0: -1.3, y1: 1.3 };

  /* ---- 1) 固定の図（第二部の ②③）：黄金角・r = 0.97 ---- */
  const G = (() => { const c = cFromAngle(GOLDEN_DEG, 0.97); const fp = fixedPoint(c); return { c, fp, fwd: forward(c, { re: 0, im: 0 }, 500).pts }; })();
  function drawFixed() {
    document.querySelectorAll("canvas[data-g]").forEach((cv) => {
      const f = cv.closest(".jp-fig"), t = cv.getContext("2d"), W = cv.width, ox = W / 2, oy = W / 2;
      t.fillStyle = css(f, "--panel"); t.fillRect(0, 0, W, cv.height);
      if (cv.dataset.g === "2") {
        const s = W / 0.7; t.fillStyle = css(f, "--coral");
        G.fwd.slice(1).forEach((p, i) => dot(t, ox + s * (p[0] - G.fp.zr), oy - s * (p[1] - G.fp.zi), i < 60 ? 2.8 : 1.7));
      } else {
        t.fillStyle = css(f, "--gold"); const k = (W / 2 - 12) / Math.sqrt(500), A = (GOLDEN_DEG * Math.PI) / 180;
        for (let n = 1; n < 500; n++) { const a = n * A, rad = k * Math.sqrt(n); dot(t, ox + rad * Math.cos(a), oy - rad * Math.sin(a), 2.3); }
      }
    });
  }

  /* ---- 2) 手を動かす図 ---- */
  const lab = document.getElementById("jp-lab");
  let drawLab = () => {};
  if (lab) {
    const $ = (id) => document.getElementById(id);
    const cvC = $("jp-lab-c"), cv1 = $("jp-lab-1"), out = $("jp-lab-out");
    const sDeg = $("jp-lab-deg"), sR = $("jp-lab-r"), sRe = $("jp-lab-re"), sIm = $("jp-lab-im"), sN = $("jp-lab-n"), sD = $("jp-lab-d");
    const PV = { x0: -1.5, x1: 1.5, y0: -1.5, y1: 1.5 };
    const N_DEF = Number(sN.defaultValue) || 100, N_MAX = Number(sN.max) || 200, D_MAX = Number(sD.max) || 16, D_DEF = Number(sD.defaultValue) || 15;
    const st = { c: cFromAngle(GOLDEN_DEG, 0.97), n: N_DEF, d: D_DEF, bg: false, playing: false };
    let mapImg = null, bgImg = null, fwd = { pts: [], escapedAt: 0 }, playTimer = 0, slowTimer = 0;

    const setOut = (id, v) => { const o = lab.querySelector(`output[for="${id}"]`); if (o) o.textContent = v; };
    function syncSliders() {
      sRe.value = st.c.re.toFixed(3); sIm.value = st.c.im.toFixed(3);
      setOut("jp-lab-re", st.c.re.toFixed(3)); setOut("jp-lab-im", st.c.im.toFixed(3));
      const fp = fixedPoint(st.c);
      if (fp.mod < 1) { sDeg.value = fp.deg.toFixed(1); sR.value = fp.mod.toFixed(3); setOut("jp-lab-deg", fp.deg.toFixed(1) + "°"); setOut("jp-lab-r", fp.mod.toFixed(3)); }
      else { setOut("jp-lab-deg", "—"); setOut("jp-lab-r", "—"); }
      sN.value = st.n; setOut("jp-lab-n", String(st.n)); sD.value = st.d; setOut("jp-lab-d", String(st.d));
    }
    // c が変わったときだけ、前へ打つ計算と塗り分けをやり直す（前へは 0 から）
    function recompute() {
      fwd = forward(st.c, { re: 0, im: 0 }, N_MAX);
      bgImg = st.bg ? paint(cv1, PV, escJfor(st.c), 80, 110) : null;
    }
    function drawMap() {
      const f = lab, ctx = cvC.getContext("2d");
      if (!mapImg) mapImg = paint(cvC, MV, escM, 90);
      ctx.putImageData(mapImg, 0, 0);
      const [px, py] = toPx(MV, st.c.re, st.c.im, cvC);
      ctx.strokeStyle = css(f, "--coral"); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI * 2); ctx.stroke();
    }
    // 赤の一点 z_n から遡る：一段ごとに ±√(w − c) の二つに分かれる木。実際に通った z_{n−1}, z_{n−2}… は、そのうちの一通り
    // 木を全部持つと k 段目は 2^k 個で、100 段なら 2^100 個になり描けない。そこで FULL 段までは木を全部持ち、
    // それより深い段は、FULL 段目の 2^FULL 個の点から始まる道を一本ずつ、一段ごとに枝を一つだけ選んで遡る（逆の反復）。
    const FULL = 11;
    function treeLevels() {
      // Float64Array に x, y を交互に詰める（木の段では、親は 2 で割った番号。道の段では、親は同じ番号）
      const n = Math.min(st.n, fwd.pts.length - 1), z = fwd.pts[n], lv = [Float64Array.of(z[0], z[1])];
      let seed = 12345; const rnd = () => { seed = (seed * 1103515245 + 12345) >>> 0; return seed >>> 16 & 1; };
      for (let k = 1; k <= st.d; k++) {
        const prev = lv[k - 1], cnt = prev.length / 2, tree = k <= FULL, next = new Float64Array(tree ? cnt * 4 : cnt * 2);
        for (let i = 0; i < cnt; i++) {
          const wr = prev[2 * i] - st.c.re, wi = prev[2 * i + 1] - st.c.im, m = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
          const x = m * Math.cos(a), y = m * Math.sin(a);
          if (tree) { next[4 * i] = x; next[4 * i + 1] = y; next[4 * i + 2] = -x; next[4 * i + 3] = -y; }
          else { const sg = rnd() ? 1 : -1; next[2 * i] = sg * x; next[2 * i + 1] = sg * y; }
        }
        lv.push(next);
      }
      // 実際に通った道：一段ごとに、z_{n−k} に近いほうの枝を選ぶ（z₀ まで）
      const path = [[z[0], z[1]]]; let w = z;
      for (let k = 1; k <= Math.min(st.d, n); k++) {
        const wr = w[0] - st.c.re, wi = w[1] - st.c.im, m = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
        const x = m * Math.cos(a), y = m * Math.sin(a), t = fwd.pts[n - k];
        w = Math.hypot(x - t[0], y - t[1]) <= Math.hypot(-x - t[0], -y - t[1]) ? [x, y] : [-x, -y]; path.push(w);
      }
      return { n, lv, path };
    }
    function draw1() {
      const f = lab, t = cv1.getContext("2d"), W = cv1.width, H = cv1.height;
      t.fillStyle = css(f, "--panel"); t.fillRect(0, 0, W, H);
      if (bgImg) { const off = document.createElement("canvas"); off.width = W; off.height = H; off.getContext("2d").putImageData(bgImg, 0, 0); t.drawImage(off, 0, 0); }
      t.strokeStyle = css(f, "--line"); t.lineWidth = 1; const [ax, ay] = toPx(PV, 0, 0, cv1);
      t.beginPath(); t.moveTo(0, ay); t.lineTo(W, ay); t.moveTo(ax, 0); t.lineTo(ax, H); t.stroke();
      // 前へ打った値（赤）：0 から、表示する歩数まで
      const shown = fwd.pts.slice(0, st.n + 1);
      t.strokeStyle = css(f, "--coral"); t.globalAlpha = 0.3; t.lineWidth = 1; t.beginPath();
      shown.forEach((p, i) => { const [x, y] = toPx(PV, p[0], p[1], cv1); i ? t.lineTo(x, y) : t.moveTo(x, y); }); t.stroke();
      t.globalAlpha = 0.75; t.fillStyle = css(f, "--coral"); shown.forEach((p, i) => { const [x, y] = toPx(PV, p[0], p[1], cv1); dot(t, x, y, Math.max(0.8, 2.2 - i / 150)); });
      t.globalAlpha = 1;
      // 赤の一点から遡った枝（紺 → 金）
      const { lv, path } = treeLevels(), N = hex(css(f, "--navy")), Gd = hex(css(f, "--gold")), D = Math.max(1, st.d);
      const col = (k) => { const u = k / D; return "rgb(" + [0, 1, 2].map((j) => Math.round(N[j] + (Gd[j] - N[j]) * u)).join(",") + ")"; };
      // 枝分かれの線（浅い三段だけ。深い段は点だけ）
      for (let k = 1; k <= Math.min(st.d, 3); k++) {
        t.strokeStyle = col(k); t.globalAlpha = 0.35; t.lineWidth = 1; t.beginPath();
        const a = lv[k], b = lv[k - 1];
        for (let i = 0; i < a.length / 2; i++) { const j = i >> 1, [x0, y0] = toPx(PV, b[2 * j], b[2 * j + 1], cv1), [x1, y1] = toPx(PV, a[2 * i], a[2 * i + 1], cv1); t.moveTo(x0, y0); t.lineTo(x1, y1); }
        t.stroke();
      }
      t.globalAlpha = 1;
      // 浅い段は丸、深い段（点が 256 を超える段）は小さな四角で打つ（数万点でも重くならないように）
      const sx0 = cv1.width / (PV.x1 - PV.x0), sy0 = cv1.height / (PV.y1 - PV.y0);
      for (let k = st.d; k >= 1; k--) {
        t.fillStyle = col(k); const a = lv[k], cnt = a.length / 2;
        if (k <= 8) { const r = k <= 3 ? 3 : k <= 6 ? 1.8 : 1.2; for (let i = 0; i < cnt; i++) dot(t, (a[2 * i] - PV.x0) * sx0, (PV.y1 - a[2 * i + 1]) * sy0, r); }
        else { const sz = k <= 12 ? 1.6 : 1.1; for (let i = 0; i < cnt; i++) t.fillRect((a[2 * i] - PV.x0) * sx0 - sz / 2, (PV.y1 - a[2 * i + 1]) * sy0 - sz / 2, sz, sz); }
      }
      // 実際に通った道（赤い太線）
      t.strokeStyle = css(f, "--coral"); t.lineWidth = 2.4; t.beginPath();
      path.forEach((p, i) => { const [x, y] = toPx(PV, p[0], p[1], cv1); i ? t.lineTo(x, y) : t.moveTo(x, y); }); t.stroke();
      t.fillStyle = css(f, "--coral"); path.slice(1).forEach((p) => { const [x, y] = toPx(PV, p[0], p[1], cv1); dot(t, x, y, 3); });
      const [sx, sy] = toPx(PV, lv[0][0], lv[0][1], cv1); t.fillStyle = css(f, "--navy"); dot(t, sx, sy, 5);
    }
    function readout() {
      const fp = fixedPoint(st.c), n = Math.min(st.n, fwd.pts.length - 1), p = fwd.pts[n];
      let s = "c = " + fmtC(st.c.re, st.c.im) + "　前へ " + n + " 歩：z = " + fmtC(p[0], p[1]) + "\n";
      if (fwd.escapedAt) s += fwd.escapedAt + " 歩目で外へ出る（発散）";
      else if (fp.mod < 1) s += "寄る一点 z* = " + fmtC(fp.zr, fp.zi) + "　一歩ごとに " + fp.deg.toFixed(1) + "° 回り " + fp.mod.toFixed(3) + " 倍";
      else s += N_MAX + " 歩まで外へ出ない（ハート形の外か縁で、渦にはならない）";
      const d = st.d, back = Math.min(d, n);
      s += "\n遡る " + d + " 段：" + (d <= 30 ? (2 ** d).toLocaleString("ja-JP") : "約 " + (2 ** d).toExponential(2).replace("e+", " × 10^")) + " 通り";
            if (d === 0) s += "";
      else if (n === 0) s += "（出発点なので、通った道は無い）";
      else s += "（通った道は赤い太線の一通り）";
      out.textContent = s;
    }
    drawLab = () => { mapImg = null; recompute(); drawMap(); draw1(); readout(); };
    const redrawLight = () => { draw1(); readout(); };
    const setC = (c) => { st.c = c; st.n = N_DEF; syncSliders(); clearTimeout(slowTimer); slowTimer = setTimeout(() => { recompute(); drawMap(); redrawLight(); }, 30); };
    const stopPlay = () => { st.playing = false; clearTimeout(playTimer); const b = $("jp-lab-play"); b.setAttribute("aria-pressed", "false"); b.setAttribute("aria-label", "再生"); };

    // 図をクリックしてパラメータを決める：地図は c、①はいちばん近い赤の点を遡りの出発にする
    cvC.addEventListener("click", (e) => { stopPlay(); setC(fromPx(MV, e, cvC)); });
    cv1.addEventListener("click", (e) => {
      stopPlay(); const q = fromPx(PV, e, cv1); let best = 0, bd = Infinity;
      fwd.pts.slice(0, N_MAX + 1).forEach((p, i) => { const dd = Math.hypot(p[0] - q.re, p[1] - q.im); if (dd < bd) { bd = dd; best = i; } });
      st.n = best; syncSliders(); redrawLight();
    });
    // 決まった c
    lab.querySelectorAll("[data-lc]").forEach((b) => b.addEventListener("click", () => {
      stopPlay(); const v = b.dataset.lc;
      if (v === "golden") setC(cFromAngle(GOLDEN_DEG, 0.97)); else { const [a, i] = v.split(",").map(Number); setC({ re: a, im: i }); }
    }));
    // スライダ
    const onAngle = () => { stopPlay(); setC(cFromAngle(Number(sDeg.value), Number(sR.value))); };
    sDeg.addEventListener("input", onAngle); sR.addEventListener("input", onAngle);
    const onC = () => { stopPlay(); setC({ re: Number(sRe.value), im: Number(sIm.value) }); };
    sRe.addEventListener("input", onC); sIm.addEventListener("input", onC);
    sN.addEventListener("input", () => { stopPlay(); st.n = Number(sN.value); setOut("jp-lab-n", String(st.n)); redrawLight(); });
    sD.addEventListener("input", () => { st.d = Number(sD.value); setOut("jp-lab-d", String(st.d)); redrawLight(); });
    $("jp-lab-deeper").addEventListener("click", () => { st.d = st.d >= D_MAX ? 0 : st.d + 1; syncSliders(); redrawLight(); });
    // 一歩ずつ・再生
    $("jp-lab-step").addEventListener("click", () => { stopPlay(); st.n = Math.min(N_MAX, st.n + 1); syncSliders(); redrawLight(); });
    $("jp-lab-reset").addEventListener("click", () => { stopPlay(); st.n = 0; syncSliders(); redrawLight(); });
    $("jp-lab-play").addEventListener("click", (e) => {
      if (st.playing) { stopPlay(); return; }
      st.playing = true; e.currentTarget.setAttribute("aria-pressed", "true"); e.currentTarget.setAttribute("aria-label", "止める");
      if (st.n >= Math.min(N_MAX, fwd.pts.length - 1)) st.n = 0;
      const tick = () => {
        if (!st.playing) return;
        st.n = Math.min(N_MAX, st.n + 1); syncSliders(); redrawLight();
        if (st.n >= Math.min(N_MAX, fwd.pts.length - 1)) { stopPlay(); return; }
        playTimer = setTimeout(tick, st.n < 60 ? 120 : 30);
      };
      tick();
    });
    // 塗り分けを重ねる
    $("jp-lab-bg").addEventListener("click", (e) => {
      st.bg = !st.bg; e.currentTarget.setAttribute("aria-pressed", String(st.bg));
      bgImg = st.bg ? paint(cv1, PV, escJfor(st.c), 80, 110) : null; redrawLight();
    });
    syncSliders();
  }

  /* ---- 3) c を選ぶ地図と、その c で残る形（畳みの図） ---- */
  const mand = document.getElementById("jp-mand"), julia = document.getElementById("jp-julia");
  let drawBig = () => {};
  if (mand && julia) {
    let C = { re: -0.8, im: 0.16 }, mandImg = null;
    const JV = { x0: -1.8, x1: 1.8, y0: -1.6, y1: 1.6 };
    const markC = () => {
      const f = mand.closest(".jp-fig"), ctx = mand.getContext("2d"); if (mandImg) ctx.putImageData(mandImg, 0, 0);
      const [px, py] = toPx(MV, C.re, C.im, mand); ctx.strokeStyle = css(f, "--coral"); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = css(f, "--mid"); ctx.lineWidth = 1; ctx.globalAlpha = 0.5; const [ax, ay] = toPx(MV, 0, 0, mand);
      ctx.beginPath(); ctx.moveTo(0, ay); ctx.lineTo(mand.width, ay); ctx.moveTo(ax, 0); ctx.lineTo(ax, mand.height); ctx.stroke(); ctx.globalAlpha = 1;
    };
    const drawJulia = () => {
      const f = julia.closest(".jp-fig"), ctx = julia.getContext("2d");
      ctx.putImageData(paint(julia, JV, escJfor(C), 110), 0, 0);
      const n = escM(C.re, C.im, 2000);
      document.getElementById("jp-readout").textContent = "c = " + fmtC(C.re, C.im) + "　0 から二乗して c を足し続けると：" + (n < 0 ? "残る（形はひとつながり）" : n + 1 + " 歩で大きさ 2 を超える（形はかけらに散る）");
    };
    drawBig = () => { mandImg = paint(mand, MV, escM, 90); markC(); drawJulia(); };
    const sRe = document.getElementById("jp-cre"), sIm = document.getElementById("jp-cim");
    const oRe = document.getElementById("jp-cre-out"), oIm = document.getElementById("jp-cim-out");
    const sync = () => { if (!sRe) return; sRe.value = C.re.toFixed(3); sIm.value = C.im.toFixed(3); oRe.textContent = C.re.toFixed(3); oIm.textContent = C.im.toFixed(3); };
    const setC = (nc) => { C = nc; sync(); markC(); drawJulia(); };
    mand.addEventListener("click", (e) => setC(fromPx(MV, e, mand)));
    document.querySelectorAll("[data-jc]").forEach((b) => b.addEventListener("click", () => { const [a, i] = b.dataset.jc.split(",").map(Number); setC({ re: a, im: i }); }));
    if (sRe) {
      let t = 0;
      const onSlide = () => { C = { re: Number(sRe.value), im: Number(sIm.value) }; oRe.textContent = C.re.toFixed(3); oIm.textContent = C.im.toFixed(3); clearTimeout(t); t = setTimeout(() => { markC(); drawJulia(); }, 30); };
      sRe.addEventListener("input", onSlide); sIm.addEventListener("input", onSlide); sync();
    }
  }

  /* ---- 4) 円を遡って畳む（#jp-fold、第三部の頭の章） ----
     大きさ 2 の円の上の点を、±√(w − c) で一段ずつ遡る。一段を三つの歩に分けて描く。
       一歩目「− c」：曲線の全体を −c だけ平行移動する（c にあった点が 0 に来る）。
       二歩目「√」 ：0 の周りの角を半分、0 からの距離を √ にする（√ の主値。一周が右半分の半周に縮む）。
       三歩目「−√」：主値の写しのうち −√ の枝に当たる点を、0 の周りに半回転させる（もう一方の半分を埋める）。
     曲線は N 点で持ち、一段ごとの曲線の点 j は、前の曲線の点 2j mod N から来る（j と j + N/2 が同じ点から来る二つの枝）。
     枝の符号は、隣の点に近いほうを選んでつなぐ（曲線の一点 t の行き先が、前の曲線の 2t になる）。
     色は点に付いたまま動く。「一つ前の段の位置」では、その段の前の曲線の一周を虹の順に塗る。「最初の円の位置」では、
     その点を前へ打ったときに戻る、最初の円の上の位置で塗る（段が深いほど細かくなる）。−√ の枝は濃い色にする。
     曲線の内側は、その段の数だけ前へ打っても大きさ 2 を超えない点の集まりで、段を重ねると充填ジュリア集合に寄る。
     M の外の c では曲線が二つに切れて、この描き方（一本の曲線でつなぐ）が成り立たないので、選べないようにする。
     ただし、0 から前へ打って外へ出るまでの歩数が MAXK より十分多い c は、描く段（MAXK 段）までは曲線が一本のまま
     なので選べる。既定の c = −0.8 + 0.16i は M のわずかに外（38 歩で外へ出る）で、これに当たる
     （2026-11-21・付箋 i20261121024316zx9「c = -0.800 + 0.160i　をデフォにして。すべて。」）。 */
  const fold = document.getElementById("jp-fold");
  let drawFold = () => {};
  if (fold) {
    const cv = document.getElementById("jp-fold-cv"), cvM = document.getElementById("jp-fold-c"), out = document.getElementById("jp-fold-out");
    const N = 16384, MAXK = 12, LAST = 3 * MAXK, FV = { x0: -2.75, x1: 2.75, y0: -2.75, y1: 2.75 }, NB = 48;
    let C = { re: -0.8, im: 0.16 }, levels = [], half = [], sig = [], pos = 0, tw = 1, timer = 0, animId = 0, global = true, mapImg = null, note = "";
    // 主値の平方根（偏角を (−π, π] で半分にする）
    const sqrtP = (wr, wi) => { const m = Math.hypot(wr, wi); return [Math.sqrt((m + wr) / 2), Math.sign(wi || 1) * Math.sqrt(Math.max(0, (m - wr) / 2))]; };
    function build() {
      const re0 = new Float64Array(N), im0 = new Float64Array(N);
      for (let j = 0; j < N; j++) { const a = (2 * Math.PI * j) / N; re0[j] = 2 * Math.cos(a); im0[j] = 2 * Math.sin(a); }
      levels = [[re0, im0]]; half = [null]; sig = [null];
      for (let l = 1; l <= MAXK; l++) {
        const [pr, pi] = levels[l - 1], nr = new Float64Array(N), ni = new Float64Array(N), hr = new Float64Array(N), hi = new Float64Array(N), sg = new Int8Array(N);
        for (let j = 0; j < N; j++) {
          const q = (2 * j) % N, [sr, si] = sqrtP(pr[q] - C.re, pi[q] - C.im);
          hr[j] = sr; hi[j] = si; let s = 1;
          if (j > 0) { const dx = sr - nr[j - 1], dy = si - ni[j - 1], ex = -sr - nr[j - 1], ey = -si - ni[j - 1]; if (ex * ex + ey * ey < dx * dx + dy * dy) s = -1; }
          nr[j] = s * sr; ni[j] = s * si; sg[j] = s;
        }
        levels.push([nr, ni]); half.push([hr, hi]); sig.push(sg);
      }
    }
    // 歩 p（0 は円、3(l−1)+1・+2・+3 は l 段目の三つの歩）へ向かう途中 s（0〜1）の、点の位置と色と枝
    const X = new Float64Array(N), Y = new Float64Array(N), H = new Int16Array(N), D = new Int8Array(N);
    let cnt = 0, sub = -1, lv = 0;
    function frame(p, s) {
      if (p === 0) {
        lv = 0; sub = -1; const [r, i] = levels[0];
        for (let j = 0; j < N; j++) { X[j] = r[j]; Y[j] = i[j]; H[j] = Math.floor((j * NB) / N); D[j] = 0; }
        return;
      }
      lv = Math.ceil(p / 3); sub = (p - 1) % 3;
      const l = lv, [pr, pi] = levels[l - 1], [hr, hi] = half[l], sg = sig[l], sh = global ? l - 1 : 0;
      // 色：点 j の前の段の出どころ q の位置。「最初の円の位置」なら、q を l − 1 歩前へ打って戻る円の上の位置
      const hue = (q) => Math.floor((((q * 2 ** sh) % N) * NB) / N);
      for (let j = 0; j < N; j++) {
        if (sub === 0) { X[j] = pr[j] - s * C.re; Y[j] = pi[j] - s * C.im; H[j] = hue(j); D[j] = 0; continue; }
        const q = (2 * j) % N; H[j] = hue(q); D[j] = sg[j];
        if (sub === 1) {
          const wr = pr[q] - C.re, wi = pi[q] - C.im;
          if (s >= 1) { X[j] = hr[j]; Y[j] = hi[j]; continue; }
          const r = Math.hypot(wr, wi) ** (1 - s / 2), a = Math.atan2(wi, wr) * (1 - s / 2);
          X[j] = r * Math.cos(a); Y[j] = r * Math.sin(a);
        } else {
          if (sg[j] > 0 || s <= 0) { X[j] = hr[j]; Y[j] = hi[j]; continue; }
          if (s >= 1) { X[j] = -hr[j]; Y[j] = -hi[j]; continue; }
          const a = Math.PI * s, ca = Math.cos(a), sa = Math.sin(a);
          X[j] = hr[j] * ca - hi[j] * sa; Y[j] = hr[j] * sa + hi[j] * ca;
        }
      }
    }
    function closedPath(ctx) {
      ctx.beginPath();
      for (let j = 0; j < N; j++) { const [px, py] = toPx(FV, X[j], Y[j], cv); if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
      ctx.closePath();
    }
    function arrow(ctx, x0, y0, x1, y1) {
      const [a, b] = toPx(FV, x0, y0, cv), [c, d] = toPx(FV, x1, y1, cv), ang = Math.atan2(d - b, c - a), L = Math.hypot(c - a, d - b);
      ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke();
      if (L > 12) { ctx.beginPath(); ctx.moveTo(c, d); ctx.lineTo(c - 11 * Math.cos(ang - 0.4), d - 11 * Math.sin(ang - 0.4)); ctx.lineTo(c - 11 * Math.cos(ang + 0.4), d - 11 * Math.sin(ang + 0.4)); ctx.closePath(); ctx.fill(); }
    }
    /* 背景の陰陽の印（☯）。0 を中心に、最初の円（大きさ 2）と同じ大きさで薄く描く。左右の半分の境が虚軸に来る向き
       （√ の歩で曲線が右半分に縮み、−√ の歩で半回転の写しが左半分を埋めるのと重なる）。
       2026-11-21・付箋 i20261121024118rcn「…ジュリア集合の逆写像の背景に☯️マークを入れて」 */
    function taiji(ctx, cx, cy, r, ink, paper) {
      ctx.save();
      ctx.globalAlpha = 0.09; ctx.fillStyle = ink;
      ctx.beginPath(); ctx.moveTo(cx, cy - r);
      ctx.arc(cx, cy, r, -Math.PI / 2, Math.PI / 2, true);
      ctx.arc(cx, cy + r / 2, r / 2, Math.PI / 2, -Math.PI / 2, true);
      ctx.arc(cx, cy - r / 2, r / 2, Math.PI / 2, -Math.PI / 2, false);
      ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy - r / 2, r / 7, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1; ctx.fillStyle = paper;
      ctx.beginPath(); ctx.arc(cx, cy + r / 2, r / 7, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.18; ctx.strokeStyle = ink; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }
    function drawMap() {
      if (!cvM) return;
      const ctx = cvM.getContext("2d");
      if (!mapImg) mapImg = paint(cvM, MV, escM, 90);
      ctx.putImageData(mapImg, 0, 0);
      const [px, py] = toPx(MV, C.re, C.im, cvM);
      ctx.strokeStyle = css(fold, "--coral"); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.stroke();
    }
    const STEP_TXT = [
      "− c：曲線の全体を、矢印のとおり −c だけずらす。c にあった点が 0 に来る",
      "√：0 の周りの角を半分、0 からの距離を √ にする（√ の主値）。一周が、左で切れて右半分の半周に縮む",
      "−√：右半分の写しを 0 の周りに半回転させた、もう一つの写し（濃い色）が、左半分を埋める",
    ];
    drawFold = () => {
      const f = fold, ctx = cv.getContext("2d"), W = cv.width, Hh = cv.height, panel = css(f, "--panel"), mid = css(f, "--mid"), coral = css(f, "--coral");
      ctx.fillStyle = panel; ctx.fillRect(0, 0, W, Hh);
      const [ax, ay] = toPx(FV, 0, 0, cv);
      taiji(ctx, ax, ay, (2 * W) / (FV.x1 - FV.x0), mid, panel);
      ctx.strokeStyle = mid; ctx.globalAlpha = 0.3; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, ay); ctx.lineTo(W, ay); ctx.moveTo(ax, 0); ctx.lineTo(ax, Hh); ctx.stroke();
      // この一歩の前の形（薄い灰）
      if (pos > 0) { frame(pos - 1, 1); ctx.globalAlpha = 0.45; ctx.strokeStyle = mid; ctx.lineWidth = 1; closedPath(ctx); ctx.stroke(); }
      ctx.globalAlpha = 1;
      const s = tw * tw * (3 - 2 * tw);
      frame(pos, s);
      // 曲線の内側：形が閉じている歩（円・− c・段の終わり）だけ塗る
      if (sub !== 1 && !(sub === 2 && s < 1)) { closedPath(ctx); ctx.fillStyle = css(f, "--esc0"); ctx.globalAlpha = 0.55; ctx.fill("evenodd"); ctx.globalAlpha = 1; }
      // √ の歩では、半分の境（虚軸）を強める
      if (sub >= 1) { ctx.strokeStyle = mid; ctx.globalAlpha = 0.7; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(ax, 0); ctx.lineTo(ax, Hh); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1; }
      // 点を色ごとに線でつなぐ（離れた隣はつながない）。−√ の枝を先に、+√ の枝をあとに描く
      ctx.lineWidth = 2.6; ctx.lineCap = "round";
      const gap = 0.25 * 0.25;
      const paths = [[], []], used = [new Uint8Array(NB), new Uint8Array(NB)];
      for (let b = 0; b < NB; b++) { paths[0].push(new Path2D()); paths[1].push(new Path2D()); }
      const sx = W / (FV.x1 - FV.x0), sy = Hh / (FV.y1 - FV.y0);
      for (let j = 0; j < N; j++) {
        const k2 = (j + 1) % N, dx = X[k2] - X[j], dy = Y[k2] - Y[j];
        if (dx * dx + dy * dy > gap) continue;
        const g = D[j] < 0 ? 0 : 1, b = H[j], P = paths[g][b];
        P.moveTo((X[j] - FV.x0) * sx, (FV.y1 - Y[j]) * sy); P.lineTo((X[k2] - FV.x0) * sx, (FV.y1 - Y[k2]) * sy); used[g][b] = 1;
      }
      for (let g = 0; g < 2; g++) for (let b = 0; b < NB; b++) {
        if (!used[g][b]) continue;
        ctx.strokeStyle = "hsl(" + Math.round((b * 360) / NB) + "," + (g === 0 ? "62%,30%)" : "75%,52%)"); ctx.stroke(paths[g][b]);
      }
      // 0 と c の印。− c の歩では c から 0 への矢印
      ctx.fillStyle = css(f, "--set"); dot(ctx, ax, ay, 3.5);
      ctx.font = "13px sans-serif"; ctx.fillText("0", ax + 6, ay - 6);
      if (sub === 0 || pos === 0) {
        const [cx, cy] = toPx(FV, C.re, C.im, cv);
        ctx.strokeStyle = coral; ctx.fillStyle = coral; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.stroke(); ctx.fillText("c", cx + 8, cy - 8);
        if (sub === 0) { arrow(ctx, C.re, C.im, 0, 0); const [mx, my] = toPx(FV, C.re / 2, C.im / 2, cv); ctx.fillText("− c", mx + 8, my + 16); }
      }
      let t = "c = " + fmtC(C.re, C.im) + "\n";
      if (pos === 0) t += "大きさ 2 の円（まだ遡っていない）。色は、円の上の位置";
      else {
        t += lv + " 段目の " + (sub + 1) + " 歩目（全 " + LAST + " 歩の " + pos + " 歩目）　" + STEP_TXT[sub];
        if (sub === 2) t += "。同じ色の所は、最初の円の同じ所から来た。内側は、" + lv + " 歩前へ打っても大きさ 2 を超えない点";
      }
      if (note) t += "\n" + note;
      out.textContent = t;
      drawMap();
    };
    const play = document.getElementById("jp-fold-play");
    const stop = () => { clearInterval(timer); timer = 0; play.setAttribute("aria-pressed", "false"); };
    const jump = (p) => { animId++; pos = Math.max(0, Math.min(LAST, p)); tw = 1; drawFold(); };
    const step = () => {
      if (pos >= LAST) { stop(); return false; }
      pos++; tw = 0; const id = ++animId, t0 = performance.now(), reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const anim = (now) => { if (id !== animId) return; tw = reduce ? 1 : Math.min(1, (now - t0) / 900); drawFold(); if (tw < 1) requestAnimationFrame(anim); };
      requestAnimationFrame(anim); return true;
    };
    document.getElementById("jp-fold-step").addEventListener("click", () => { stop(); note = ""; step(); });
    document.getElementById("jp-fold-back").addEventListener("click", () => { stop(); note = ""; jump(pos - 1); });
    document.getElementById("jp-fold-reset").addEventListener("click", () => { stop(); note = ""; jump(0); });
    play.addEventListener("click", () => {
      if (timer) { stop(); return; }
      note = ""; if (pos >= LAST) jump(0);
      play.setAttribute("aria-pressed", "true"); step(); timer = setInterval(() => { if (!step()) stop(); }, 1300);
    });
    const setC = (c) => { stop(); C = c; build(); note = ""; jump(0); };
    fold.querySelectorAll("[data-fc]").forEach((b) => b.addEventListener("click", () => {
      const v = b.dataset.fc; setC(v === "golden" ? cFromAngle(GOLDEN_DEG, 0.97) : (([a, i]) => ({ re: a, im: i }))(v.split(",").map(Number)));
    }));
    if (cvM) cvM.addEventListener("click", (e) => {
      const c = fromPx(MV, e, cvM);
      if (escM(c.re, c.im, 300) >= 0 && escM(c.re, c.im, 300) < MAXK + 4) { stop(); note = "クリックした c（" + fmtC(c.re, c.im) + "）は黒い形の外です。曲線が二つに切れて一本でつなげないので、この図では黒い形の中と、そのすぐ近くの c だけを選べます。"; drawFold(); return; }
      setC(c);
    });
    build();
  }

  /* ---- 5) 漸化式とは（#jp-rec）：フィボナッチ数を、前の二つの値から一歩ずつ出す。数直線に跳ぶ点を打つ
     （2026-11-21・付箋 i20261120180538frq「フィボナッチの計算だけのシンプルなもので十分」。決まりのボタンとスライダは外した） ---- */
  const rec = document.getElementById("jp-rec");
  const REC_N = 11;                       // a₁ 〜 a₁₁（1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89）。数直線は 0 〜 100
  let R = { seq: [1, 1], timer: null };
  const SUB = "₀₁₂₃₄₅₆₇₈₉"; function sub(n) { return String(n).split("").map((d) => SUB[+d]).join(""); }
  function drawRec() {
    if (!rec) return;
    const cv = document.getElementById("jp-rec-cv"), ctx = cv.getContext("2d"), W = cv.width, H = cv.height;
    const LO = 0, HI = 100, X = (v) => 30 + (v - LO) / (HI - LO) * (W - 60), y0 = H * 0.66;
    ctx.fillStyle = css(rec, "--panel"); ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = css(rec, "--mid"); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(14, y0); ctx.lineTo(W - 14, y0); ctx.stroke();
    ctx.fillStyle = css(rec, "--mid"); ctx.font = "22px sans-serif"; ctx.textAlign = "center";
    for (let k = 0; k <= 100; k += 5) { const big = k % 10 === 0; ctx.beginPath(); ctx.moveTo(X(k), y0 - (big ? 8 : 4)); ctx.lineTo(X(k), y0 + (big ? 8 : 4)); ctx.stroke(); if (k % 20 === 0) ctx.fillText(String(k), X(k), y0 + 36); }
    const s = R.seq;
    for (let n = 1; n < s.length; n++) {
      const xa = X(s[n - 1]), xb = X(s[n]), mid = (xa + xb) / 2, h = 18 + Math.min(90, Math.abs(xb - xa) * 0.4);
      ctx.strokeStyle = n === s.length - 1 ? css(rec, "--coral") : css(rec, "--line"); ctx.lineWidth = n === s.length - 1 ? 2 : 1.5;
      ctx.beginPath(); ctx.moveTo(xa, y0 - 6); ctx.quadraticCurveTo(mid, y0 - 6 - h, xb, y0 - 6); ctx.stroke();
    }
    s.forEach((v, n) => { ctx.fillStyle = n === s.length - 1 ? css(rec, "--coral") : css(rec, "--navy"); dot(ctx, X(v), y0, n === s.length - 1 ? 9 : 6); });
    document.getElementById("jp-rec-chain").textContent = s.map((v, n) => "a" + sub(n + 1) + " = " + v).join("　→　");
    const out = document.getElementById("jp-rec-out"), n = s.length;
    if (n === 2) out.textContent = "a₁ = 1、a₂ = 1 から始めます。「一歩進める」か「再生」をクリックすると、前の二つを足して、次の値を出します。";
    else out.textContent = "a" + sub(n) + " = a" + sub(n - 2) + " + a" + sub(n - 1) + " = " + s[n - 3] + " + " + s[n - 2] + " = " + s[n - 1] + "。出てきた値で、また同じ決まりを当てます。" + (n >= REC_N ? "（この先は 100 を超えるので、ここまで）" : "");
  }
  if (rec) {
    const stopR = () => { if (R.timer) { clearInterval(R.timer); R.timer = null; } document.getElementById("jp-rec-play").setAttribute("aria-pressed", "false"); };
    const reset = () => { stopR(); R.seq = [1, 1]; drawRec(); };
    const stepR = () => { const s = R.seq; if (s.length >= REC_N) return false; s.push(s[s.length - 2] + s[s.length - 1]); drawRec(); return true; };
    document.getElementById("jp-rec-step").addEventListener("click", () => { stopR(); stepR(); });
    document.getElementById("jp-rec-reset").addEventListener("click", reset);
    document.getElementById("jp-rec-play").addEventListener("click", (e) => {
      if (R.timer) { stopR(); return; }
      if (R.seq.length >= REC_N) R.seq = [1, 1];
      e.currentTarget.setAttribute("aria-pressed", "true"); stepR(); R.timer = setInterval(() => { if (!stepR()) stopR(); }, 900);
    });
  }

  /* ---- 6) 平面の上の数（#jp-cplx）：クリックした点を x + yi で読む ---- */
  const cplx = document.getElementById("jp-cplx");
  let CZ = { re: 0.8, im: 0.6 };
  const PV = { x0: -2, x1: 2, y0: -2, y1: 2 };
  function axes(fig, ctx, cv, v, unit) {
    ctx.fillStyle = css(fig, "--panel"); ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.strokeStyle = css(fig, "--line"); ctx.lineWidth = 1;
    for (let k = Math.ceil(v.x0); k <= v.x1; k++) { const [px] = toPx(v, k, 0, cv); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, cv.height); ctx.stroke(); }
    for (let k = Math.ceil(v.y0); k <= v.y1; k++) { const [, py] = toPx(v, 0, k, cv); ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(cv.width, py); ctx.stroke(); }
    const [ox, oy] = toPx(v, 0, 0, cv);
    ctx.strokeStyle = css(fig, "--mid"); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(cv.width, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, cv.height); ctx.stroke();
    if (unit) { const [ux] = toPx(v, 1, 0, cv); ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(ox, oy, ux - ox, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
    ctx.fillStyle = css(fig, "--mid"); ctx.font = "15px sans-serif"; ctx.textAlign = "right";
    ctx.fillText("横：実軸", cv.width - 8, oy - 8); ctx.textAlign = "left"; ctx.fillText("縦：虚軸", ox + 8, 18);
    ctx.textAlign = "center"; [-1, 1].forEach((k) => { const [px] = toPx(v, k, 0, cv); ctx.fillText(k < 0 ? "−1" : "1", px, oy + 20); const [, py] = toPx(v, 0, k, cv); ctx.fillText(k < 0 ? "−i" : "i", ox - 14, py + 5); });
    return [ox, oy];
  }
  function drawCplx() {
    if (!cplx) return;
    const cv = document.getElementById("jp-cplx-cv"), ctx = cv.getContext("2d");
    const [ox, oy] = axes(cplx, ctx, cv, PV, false), [px, py] = toPx(PV, CZ.re, CZ.im, cv);
    ctx.strokeStyle = css(cplx, "--navy"); ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, oy); ctx.moveTo(px, py); ctx.lineTo(ox, py); ctx.stroke(); ctx.setLineDash([]);
    ctx.lineWidth = 3; ctx.strokeStyle = css(cplx, "--gold"); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(px, oy); ctx.stroke();
    ctx.strokeStyle = css(cplx, "--coral"); ctx.beginPath(); ctx.moveTo(px, oy); ctx.lineTo(px, py); ctx.stroke();
    ctx.fillStyle = css(cplx, "--navy"); dot(ctx, px, py, 7);
    ctx.font = "16px sans-serif"; ctx.textAlign = "left"; ctx.fillText("z", px + 10, py - 8);
    document.getElementById("jp-cplx-out").textContent = "z = " + nf2(CZ.re) + (CZ.im < 0 ? " − " : " + ") + nf2(Math.abs(CZ.im)) + "i　（横に " + nf2(CZ.re) + "、縦に " + nf2(CZ.im) + "）";
  }
  const nf2 = (v) => (v < 0 ? "−" : "") + Math.abs(v).toFixed(2);
  if (cplx) document.getElementById("jp-cplx-cv").addEventListener("click", (e) => { CZ = fromPx(PV, e, e.currentTarget); drawCplx(); });

  /* ---- 7) 二乗を手で動かす（#jp-sq）：z をつまんで動かすと z² が動く。角度は二倍・距離は二乗、z と −z は同じ z² へ（二対一）
     つまんで動かす（ドラッグ）・スライダ（角度・距離）・「z を一周させる」（z が一周する間に z² は二周し、z と −z が同じ所を通る）。
     「c も足す」は次の部の c の予告で、別の段の組にした ---- */
  const sq = document.getElementById("jp-sq");
  const SQ0 = { re: 0.8 * Math.cos(Math.PI / 6), im: 0.8 * Math.sin(Math.PI / 6) };
  let SQ = { z: { ...SQ0 }, c: { re: 0, im: 0 }, neg: true, trail: [], timer: null, orbit: [], itimer: null };
  const deg360 = (a) => ((((a * 180) / Math.PI) % 360) + 360) % 360;
  function drawSq() {
    if (!sq) return;
    const cv = document.getElementById("jp-sq-cv"), ctx = cv.getContext("2d");
    const [ox, oy] = axes(sq, ctx, cv, PV, true), z = SQ.z, z2 = { re: z.re * z.re - z.im * z.im, im: 2 * z.re * z.im }, w = { re: z2.re + SQ.c.re, im: z2.im + SQ.c.im };
    const r1 = Math.hypot(z.re, z.im), a1 = Math.atan2(z.im, z.re), a1d = deg360(a1);
    const [zx, zy] = toPx(PV, z.re, z.im, cv), [qx, qy] = toPx(PV, z2.re, z2.im, cv), [wx, wy] = toPx(PV, w.re, w.im, cv), [nx, ny] = toPx(PV, -z.re, -z.im, cv);
    // 一周させた跡：z（紺）と z²（赤）
    if (SQ.trail.length > 1) {
      [["--navy", (p) => p], ["--coral", (p) => ({ re: p.re * p.re - p.im * p.im, im: 2 * p.re * p.im })]].forEach(([col, f]) => {
        ctx.strokeStyle = css(sq, col); ctx.globalAlpha = 0.45; ctx.lineWidth = 2; ctx.beginPath();
        SQ.trail.forEach((p, i) => { const q = f(p), [x, y] = toPx(PV, q.re, q.im, cv); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); ctx.globalAlpha = 1;
      });
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = css(sq, "--navy"); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(zx, zy); ctx.stroke();
    ctx.strokeStyle = css(sq, "--coral"); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(qx, qy); ctx.stroke();
    // もう一度二乗した跡：これまでの z（灰の点と線）
    if (SQ.orbit.length) {
      ctx.strokeStyle = css(sq, "--mid"); ctx.fillStyle = css(sq, "--mid"); ctx.lineWidth = 1.5; ctx.setLineDash([3, 4]); ctx.beginPath();
      SQ.orbit.concat([z]).forEach((p, i) => { const [x, y] = toPx(PV, p.re, p.im, cv); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); ctx.setLineDash([]);
      SQ.orbit.forEach((p) => { const [x, y] = toPx(PV, p.re, p.im, cv); dot(ctx, x, y, 4); });
    }
    // 角度の弧：青が z、赤が z²（いつも青の二倍）
    const R0 = 26, ccw = (from, span) => { ctx.beginPath(); ctx.arc(ox, oy, from, 0, -span, true); ctx.stroke(); };
    ctx.strokeStyle = css(sq, "--navy"); ccw(R0, (a1d * Math.PI) / 180);
    ctx.strokeStyle = css(sq, "--coral"); const s2 = (2 * a1d * Math.PI) / 180; ccw(R0 + 10, Math.min(s2, Math.PI * 2 - 1e-6)); if (s2 > Math.PI * 2) ccw(R0 + 16, s2 - Math.PI * 2);
    if (SQ.neg) {
      ctx.strokeStyle = css(sq, "--navy"); ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(nx, ny); ctx.stroke();
      // z と −z から、同じ z² へ向かう細い矢（二対一）
      ctx.strokeStyle = css(sq, "--mid"); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(zx, zy); ctx.lineTo(qx, qy); ctx.moveTo(nx, ny); ctx.lineTo(qx, qy); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = css(sq, "--panel"); ctx.strokeStyle = css(sq, "--navy"); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(nx, ny, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = css(sq, "--navy"); ctx.font = "16px sans-serif"; ctx.textAlign = "left"; ctx.fillText("−z", nx + 10, ny - 8);
    }
    if (SQ.c.re || SQ.c.im) {
      ctx.strokeStyle = css(sq, "--gold"); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(qx, qy); ctx.lineTo(wx, wy); ctx.stroke();
      const ang = Math.atan2(wy - qy, wx - qx); ctx.fillStyle = css(sq, "--gold"); ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx - 12 * Math.cos(ang - 0.4), wy - 12 * Math.sin(ang - 0.4)); ctx.lineTo(wx - 12 * Math.cos(ang + 0.4), wy - 12 * Math.sin(ang + 0.4)); ctx.fill();
      dot(ctx, wx, wy, 6); ctx.font = "16px sans-serif"; ctx.textAlign = "left"; ctx.fillText("z² + c", wx + 10, wy + 18);
    }
    ctx.fillStyle = css(sq, "--navy"); dot(ctx, zx, zy, 9); ctx.font = "16px sans-serif"; ctx.textAlign = "left"; ctx.fillText("z", zx + 12, zy - 10);
    ctx.fillStyle = css(sq, "--coral"); dot(ctx, qx, qy, 7); ctx.fillText("z²", qx + 10, qy - 8);
    const d0 = (a) => Math.round(a) % 360, ad = d0(a1d), rr = +r1.toFixed(2);
    let t = "z：角度 " + ad + "°・原点からの距離 " + rr.toFixed(2) + "\nz²：角度 " + (2 * ad) % 360 + "°（" + ad + "° の二倍" + (2 * ad >= 360 ? " の " + 2 * ad + "° から一周を引いた" : "") + "）・距離 " + (rr * rr).toFixed(2) + "（" + rr.toFixed(2) + " の二乗）";
    t += r1 < 0.98 ? "\n距離 1 の円（点線）の内側なので、二乗すると原点に近づく" : r1 > 1.02 ? "\n距離 1 の円（点線）の外側なので、二乗すると原点から遠ざかる" : "\nほぼ距離 1 の円の上なので、距離はほとんど変わらない";
    if (SQ.neg) { const b = (ad + 180) % 360; t += "\n−z：角度 " + b + "°。二乗すると " + 2 * b + "°" + (2 * b >= 360 ? "（一周を引くと " + (2 * b) % 360 + "°）" : "") + "で、z² と同じ所に行く（二対一）"; }
    if (SQ.orbit.length) t = "二乗した回数：" + SQ.orbit.length + "（いまの z は、はじめの z を " + SQ.orbit.length + " 回" + (SQ.c.re || SQ.c.im ? "、二乗して c を足した" : "二乗した") + "値）\n" + t;
    if (r1 > 2) t += "\nz が図の外（距離 2 の外）に出たので、ここで止めます";
    if (SQ.c.re || SQ.c.im) t += "\n+ c：z² を、同じ向きに同じだけずらす（c = " + nf2(SQ.c.re) + (SQ.c.im < 0 ? " − " : " + ") + nf2(Math.abs(SQ.c.im)) + "i）";
    document.getElementById("jp-sq-out").textContent = t;
    const sa = document.getElementById("jp-sq-a"), sr = document.getElementById("jp-sq-r");
    if (sa && document.activeElement !== sa) sa.value = ad; if (sa) sa.previousElementSibling.querySelector("output").textContent = ad + "°";
    if (sr && document.activeElement !== sr) sr.value = Math.min(1.6, r1).toFixed(2); if (sr) sr.previousElementSibling.querySelector("output").textContent = r1.toFixed(2);
  }
  if (sq) {
    const cv = document.getElementById("jp-sq-cv"), play = document.getElementById("jp-sq-play");
    const iplay = document.getElementById("jp-sq-iter");
    const stopIt = () => { if (SQ.itimer) { clearInterval(SQ.itimer); SQ.itimer = null; } if (iplay) iplay.setAttribute("aria-pressed", "false"); };
    const stopSq = () => { if (SQ.timer) { clearInterval(SQ.timer); SQ.timer = null; } play.setAttribute("aria-pressed", "false"); stopIt(); };
    // もう一度二乗する：いまの z² を（c を足すときは z² + c を）次の z にする
    const sqStep = () => {
      const z = SQ.z; if (Math.hypot(z.re, z.im) > 2 || SQ.orbit.length >= 30) return false;
      SQ.trail = []; SQ.orbit.push({ ...z }); SQ.z = { re: z.re * z.re - z.im * z.im + SQ.c.re, im: 2 * z.re * z.im + SQ.c.im }; drawSq();
      return Math.hypot(SQ.z.re, SQ.z.im) <= 2 && SQ.orbit.length < 30;
    };
    let dragging = false;
    const setFromEvent = (e) => { if (!cv.getBoundingClientRect().width) return; const p = fromPx(PV, e, cv); const r = Math.hypot(p.re, p.im); SQ.z = r > 1.6 ? { re: (p.re * 1.6) / r, im: (p.im * 1.6) / r } : p; drawSq(); };
    cv.addEventListener("pointerdown", (e) => { stopSq(); SQ.trail = []; SQ.orbit = []; dragging = true; if (cv.setPointerCapture) cv.setPointerCapture(e.pointerId); setFromEvent(e); });
    cv.addEventListener("pointermove", (e) => { if (dragging) setFromEvent(e); });
    const end = () => { dragging = false; }; cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);
    const fromPolar = (deg, r) => ({ re: r * Math.cos((deg * Math.PI) / 180), im: r * Math.sin((deg * Math.PI) / 180) });
    const sa = document.getElementById("jp-sq-a"), sr = document.getElementById("jp-sq-r");
    sa.addEventListener("input", () => { stopSq(); SQ.trail = []; SQ.orbit = []; SQ.z = fromPolar(+sa.value, Math.hypot(SQ.z.re, SQ.z.im) || 0.9); drawSq(); });
    sr.addEventListener("input", () => { stopSq(); SQ.trail = []; SQ.orbit = []; SQ.z = fromPolar(deg360(Math.atan2(SQ.z.im, SQ.z.re)), +sr.value); drawSq(); });
    const nb = document.getElementById("jp-sq-neg"); nb.setAttribute("aria-pressed", String(SQ.neg));
    nb.addEventListener("click", () => { SQ.neg = !SQ.neg; nb.setAttribute("aria-pressed", String(SQ.neg)); drawSq(); });
    play.addEventListener("click", () => {
      if (SQ.timer) { stopSq(); return; }
      stopIt(); SQ.orbit = []; const r = Math.min(1.6, Math.hypot(SQ.z.re, SQ.z.im)) || 0.9; let k = 0; SQ.trail = []; play.setAttribute("aria-pressed", "true");
      SQ.timer = setInterval(() => { SQ.z = fromPolar(k * 3, r); SQ.trail.push(SQ.z); drawSq(); k++; if (k > 120) stopSq(); }, 40);
    });
    document.getElementById("jp-sq-once").addEventListener("click", () => { stopSq(); sqStep(); });
    iplay.addEventListener("click", () => {
      if (SQ.itimer) { stopIt(); return; }
      if (SQ.timer) { clearInterval(SQ.timer); SQ.timer = null; play.setAttribute("aria-pressed", "false"); }
      if (!sqStep()) return; iplay.setAttribute("aria-pressed", "true");
      SQ.itimer = setInterval(() => { if (!sqStep()) stopIt(); }, 900);
    });
    document.getElementById("jp-sq-back").addEventListener("click", () => { stopSq(); SQ.trail = []; SQ.z = SQ.orbit.length ? SQ.orbit[0] : { ...SQ0 }; SQ.orbit = []; drawSq(); });
    sq.querySelectorAll("[data-sqc]").forEach((b) => b.addEventListener("click", () => {
      const [a, i] = b.dataset.sqc.split(",").map(Number); SQ.c = { re: a, im: i };
      sq.querySelectorAll("[data-sqc]").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); drawSq();
    }));
  }

  function all() { drawFixed(); drawLab(); drawBig(); drawFold(); drawRec(); drawCplx(); drawSq(); }
  all();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", all);
  new MutationObserver(all).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
