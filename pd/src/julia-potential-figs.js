// 読み物「ジュリア集合のような何かが、神・愛・美のポテンシャルなのではないか」の図。計算と描き方は、対話の作業ページ（漸化式を遡るたとえ・版 21）の図のもの。
// 外部のライブラリは使わず、canvas と素の JS で描く。色は図の枠（.jp-fig）に置いた CSS の変数から読む。
// 1) 固定の図（data-g）：② 黄金角の c の前へ打った値を不動点の周りで拡大、③ ひまわりの並べ方（第二部）
// 2) 手を動かす図（#jp-lab）：c の地図をクリックして c を選ぶ／①で、0 から前へ打った値（赤）と、赤の一点から ±√ の両方で遡る枝を見る（押すと遡りの出発の点が変わる）／ボタン・スライダ／一歩ずつ・再生／塗り分けを重ねる
// 3) 力の地図と、その c で残る形（#jp-mand・#jp-julia、章の畳み）
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
    function treeLevels() {
      // 段 k の点は 2^k 個。Float64Array に x, y を交互に詰める（親は 2 で割った番号）
      const n = Math.min(st.n, fwd.pts.length - 1), z = fwd.pts[n], lv = [Float64Array.of(z[0], z[1])];
      for (let k = 1; k <= st.d; k++) {
        const prev = lv[k - 1], cnt = prev.length / 2, next = new Float64Array(cnt * 4);
        for (let i = 0; i < cnt; i++) {
          const wr = prev[2 * i] - st.c.re, wi = prev[2 * i + 1] - st.c.im, m = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
          const x = m * Math.cos(a), y = m * Math.sin(a);
          next[4 * i] = x; next[4 * i + 1] = y; next[4 * i + 2] = -x; next[4 * i + 3] = -y;
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
      let s = "c = " + fmtC(st.c.re, st.c.im) + "\n前へ：0 から " + n + " 歩目：z = " + fmtC(p[0], p[1]) + "（原点からの距離 " + Math.hypot(p[0], p[1]).toFixed(3) + "）\n";
      if (fwd.escapedAt) s += fwd.escapedAt + " 歩目に原点からの距離が 2 を超え、外へ出ます（発散）。";
      else if (fp.mod < 1) s += "寄る一点 z* = " + fmtC(fp.zr, fp.zi) + "。その近くでは、一歩ごとに " + fp.deg.toFixed(1) + "° 回り、" + fp.mod.toFixed(3) + " 倍に寄ります。";
      else s += N_MAX + " 歩で外へ出ませんが、この c は大きなハート形の外か縁にあり、一点の周りを同じ角度で回りながら寄る形にはなりません。";
      const d = st.d, back = Math.min(d, n);
      s += "\n遡る：" + n + " 歩目の値（紺の点）から " + d + " 段遡ると、" + (2 ** d).toLocaleString("ja-JP") + " 通りに分かれます。";
      if (d === 0) s += "（遡る段数を増やすと、分かれていきます）";
      else if (n === 0) s += "出発点より前は通っていないので、赤い太線はありません。";
      else s += "実際に通った " + (n - 1) + " 歩目" + (back > 1 ? "〜" + (n - back) + " 歩目" : "") + "は、そのうちの一通り（赤い太線）です。";
      out.textContent = s;
    }
    drawLab = () => { mapImg = null; recompute(); drawMap(); draw1(); readout(); };
    const redrawLight = () => { draw1(); readout(); };
    const setC = (c) => { st.c = c; st.n = N_DEF; syncSliders(); clearTimeout(slowTimer); slowTimer = setTimeout(() => { recompute(); drawMap(); redrawLight(); }, 30); };
    const stopPlay = () => { st.playing = false; clearTimeout(playTimer); const b = $("jp-lab-play"); b.setAttribute("aria-pressed", "false"); b.textContent = "再生"; };

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
      st.playing = true; e.currentTarget.setAttribute("aria-pressed", "true"); e.currentTarget.textContent = "止める";
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

  /* ---- 3) 力の地図と、その c で残る形（畳みの図） ---- */
  const mand = document.getElementById("jp-mand"), julia = document.getElementById("jp-julia");
  let drawBig = () => {};
  if (mand && julia) {
    let C = { re: -0.123, im: 0.745 }, showInv = false, mandImg = null;
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
      if (showInv) {
        ctx.fillStyle = css(f, "--coral"); let zr = 1.3, zi = 0.9; let sd = 7; const rd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
        for (let k = 0; k < 9000; k++) {
          const wr = zr - C.re, wi = zi - C.im; const rr = Math.sqrt(Math.hypot(wr, wi)), a = Math.atan2(wi, wr) / 2;
          zr = rr * Math.cos(a); zi = rr * Math.sin(a); if (rd() < 0.5) { zr = -zr; zi = -zi; }
          if (k > 30) { const [px, py] = toPx(JV, zr, zi, julia); ctx.fillRect(px - 1, py - 1, 2.2, 2.2); }
        }
      }
      const n = escM(C.re, C.im, 2000);
      document.getElementById("jp-readout").textContent = "c = " + fmtC(C.re, C.im) + "　0 から c だけを足し続けると：" + (n < 0 ? "残る（形はひとつながり）" : n + 1 + " 段で大きさ 2 を超える（形はかけらに散る）");
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
    const inv = document.getElementById("jp-inv");
    inv.addEventListener("click", () => { showInv = !showInv; inv.setAttribute("aria-pressed", String(showInv)); drawJulia(); });
  }

  function all() { drawFixed(); drawLab(); drawBig(); }
  all();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", all);
  new MutationObserver(all).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
