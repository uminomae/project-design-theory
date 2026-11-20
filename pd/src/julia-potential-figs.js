// 読み物「神・愛・美と、ジュリア集合」の図。外部のライブラリは使わず、canvas と素の JS で描く。
// 1) #jp-live：c を選ぶと、z → z² + c を 0 から前へ打った値（渦）と、±√(z − c) で遡った点（ジュリア集合）を同じ c で並べる。
// 2) #jp-sun：黄金角で回る c の、前へ打った値（不動点のまわりを拡大）と、ひまわりの並べ方（フォーゲルの式）を並べる。
(() => {
  const PHI = (Math.sqrt(5) - 1) / 2;
  const GOLDEN_DEG = 360 * (1 - PHI); // 137.507…°

  // 複素数は [re, im] の配列で持つ
  const sqrtC = (re, im) => {
    const r = Math.hypot(re, im);
    const a = Math.sqrt((r + re) / 2);
    const b = Math.sign(im || 1) * Math.sqrt(Math.max(0, (r - re) / 2));
    return [a, b];
  };
  // 不動点の掛け率 λ から c を作る（c = λ/2 − λ²/4。不動点は z* = λ/2）
  const cFromLambda = (r, deg) => {
    const t = (deg * Math.PI) / 180;
    const lr = r * Math.cos(t), li = r * Math.sin(t);
    return [lr / 2 - (lr * lr - li * li) / 4, li / 2 - (2 * lr * li) / 4];
  };
  // c の不動点のうち引き寄せうるほう z* = (1 − √(1 − 4c)) / 2 と、掛け率 λ = 2z*
  const fixedPoint = (cr, ci) => {
    const [sr, si] = sqrtC(1 - 4 * cr, -4 * ci);
    const zr = (1 - sr) / 2, zi = -si / 2;
    return { zr, zi, lr: 2 * zr, li: 2 * zi };
  };
  // 決まった種から同じ乱数を出す（描くたびに同じ遡りになるように）
  const rng = (seed) => () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const forward = (cr, ci, steps) => {
    const pts = [[0, 0]];
    let zr = 0, zi = 0;
    for (let k = 1; k <= steps; k++) {
      const nr = zr * zr - zi * zi + cr, ni = 2 * zr * zi + ci;
      zr = nr; zi = ni;
      pts.push([zr, zi]);
      if (Math.hypot(zr, zi) > 2) return { pts, escapedAt: k };
    }
    return { pts, escapedAt: 0 };
  };
  const backward = (cr, ci, n, skip) => {
    const rand = rng(1);
    const pts = [];
    let zr = 0, zi = 0;
    for (let k = 0; k < n + skip; k++) {
      let [a, b] = sqrtC(zr - cr, zi - ci);
      if (rand() < 0.5) { a = -a; b = -b; }
      zr = a; zi = b;
      if (k >= skip) pts.push([zr, zi]);
    }
    return pts;
  };

  const setup = (cv) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = cv.width, h = cv.height;
    if (!cv.dataset.base) { cv.dataset.base = `${w}x${h}`; }
    const [bw, bh] = cv.dataset.base.split("x").map(Number);
    cv.width = bw * dpr; cv.height = bh * dpr;
    const g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { g, w: bw, h: bh };
  };
  const BG = "#fbfaf6", AXIS = "#c9c6bd", RED = "#c0392b", GRAY = "#6b6b6b", INK = "#2b2b2b", GOLD = "#a67c00";

  const plane = (g, w, h, span) => {
    const s = Math.min(w, h) / (2 * span);
    const X = (x) => w / 2 + s * x, Y = (y) => h / 2 - s * y;
    g.fillStyle = BG; g.fillRect(0, 0, w, h);
    g.strokeStyle = AXIS; g.lineWidth = 0.6;
    g.beginPath(); g.moveTo(0, Y(0)); g.lineTo(w, Y(0)); g.moveTo(X(0), 0); g.lineTo(X(0), h); g.stroke();
    return { X, Y, s };
  };
  const dot = (g, x, y, r, col) => { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, 2 * Math.PI); g.fill(); };

  // ---- 1) c を動かす図 ----
  const live = document.getElementById("jp-live");
  if (live) {
    const cvC = live.querySelector("#jp-live-c");
    const cvF = live.querySelector("#jp-live-fwd");
    const cvB = live.querySelector("#jp-live-bwd");
    const state = live.querySelector("#jp-live-state");
    const presets = {
      golden: cFromLambda(0.97, GOLDEN_DEG),
      third: cFromLambda(0.96, 120),
      out: [-0.75, 0.15],
    };
    let c = presets.golden.slice();

    // c の平面：マンデルブロ集合（c を選ぶと、0 から前へ打った値が外に出ない c の集まり）を一度だけ描く
    const CR0 = -2.1, CR1 = 0.7, CI0 = -1.25, CI1 = 1.25;
    let mandel = null;
    const drawMandel = () => {
      const { g, w, h } = setup(cvC);
      const img = g.createImageData(w, h);
      for (let py = 0; py < h; py++) {
        for (let px = 0; px < w; px++) {
          const cr = CR0 + ((px + 0.5) / w) * (CR1 - CR0), ci = CI1 - ((py + 0.5) / h) * (CI1 - CI0);
          let zr = 0, zi = 0, k = 0;
          for (; k < 80 && zr * zr + zi * zi <= 4; k++) { const t = zr * zr - zi * zi + cr; zi = 2 * zr * zi + ci; zr = t; }
          const i = 4 * (py * w + px);
          const v = k === 80 ? 40 : 251 - Math.min(60, k * 4);
          img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = k === 80 ? 48 : v - 4; img.data[i + 3] = 255;
        }
      }
      mandel = { img, w, h };
    };
    const drawC = () => {
      const { g, w, h } = setup(cvC);
      if (mandel) {
        const off = document.createElement("canvas"); off.width = mandel.w; off.height = mandel.h;
        off.getContext("2d").putImageData(mandel.img, 0, 0);
        g.drawImage(off, 0, 0, w, h);
      }
      const x = ((c[0] - CR0) / (CR1 - CR0)) * w, y = ((CI1 - c[1]) / (CI1 - CI0)) * h;
      g.strokeStyle = RED; g.lineWidth = 2;
      g.beginPath(); g.arc(x, y, 6, 0, 2 * Math.PI); g.stroke();
      dot(g, x, y, 2, RED);
    };
    // 真ん中：寄っていく一点（不動点）があるときは、その点のまわりを拡大して渦を見せる。無いときは平面の全体
    const drawF = () => {
      const { g, w, h } = setup(cvF);
      const { pts, escapedAt } = forward(c[0], c[1], 300);
      const fp = fixedPoint(c[0], c[1]);
      const attracting = !escapedAt && Math.hypot(fp.lr, fp.li) < 1;
      let ox = 0, oy = 0, span = 1.6;
      if (attracting) {
        ox = fp.zr; oy = fp.zi;
        span = 1.15 * Math.max(...pts.slice(1).map(([a, b]) => Math.hypot(a - ox, b - oy)));
      }
      g.fillStyle = BG; g.fillRect(0, 0, w, h);
      const s = Math.min(w, h) / (2 * span);
      const X = (x) => w / 2 + s * (x - ox), Y = (y) => h / 2 - s * (y - oy);
      g.strokeStyle = "rgba(192,57,43,0.25)"; g.lineWidth = 0.8; g.beginPath();
      pts.forEach(([a, b], i) => (i ? g.lineTo(X(a), Y(b)) : g.moveTo(X(a), Y(b)))); g.stroke();
      pts.forEach(([a, b], i) => dot(g, X(a), Y(b), i < 60 ? 2.4 : 1.4, RED));
      dot(g, X(0), Y(0), 3, INK);
      if (attracting) { g.strokeStyle = INK; g.lineWidth = 1; g.beginPath(); g.arc(X(ox), Y(oy), 4, 0, 2 * Math.PI); g.stroke(); }
      return { pts, escapedAt, attracting };
    };
    // 右：遡った点（灰）に、前へ打った値（赤）を同じ目盛りで重ねる
    const drawB = (fwdPts) => {
      const { g, w, h } = setup(cvB);
      const { X, Y } = plane(g, w, h, 1.6);
      g.fillStyle = GRAY;
      for (const [a, b] of backward(c[0], c[1], 40000, 50)) g.fillRect(X(a), Y(b), 1, 1);
      fwdPts.forEach(([a, b]) => { if (Math.abs(a) < 1.7 && Math.abs(b) < 1.7) dot(g, X(a), Y(b), 1.3, RED); });
    };
    const fmt = (v) => (v >= 0 ? "+" : "−") + Math.abs(v).toFixed(3);
    const render = () => {
      drawC();
      const { pts, escapedAt } = drawF();
      drawB(pts);
      const cs = `c = ${c[0] < 0 ? "−" : ""}${Math.abs(c[0]).toFixed(3)} ${fmt(c[1])}i`;
      if (escapedAt) {
        state.textContent = `${cs}：前へ打った値は ${escapedAt} 歩目に大きさ 2 を超え、外へ出ました（発散）。遡った点は、つながらない塵のように散ります。`;
      } else {
        const fp = fixedPoint(c[0], c[1]);
        const m = Math.hypot(fp.lr, fp.li);
        let maxAbs = 0; for (const [a, b] of pts) maxAbs = Math.max(maxAbs, Math.hypot(a, b));
        if (m < 1) {
          const deg = ((Math.atan2(fp.li, fp.lr) * 180) / Math.PI + 360) % 360;
          state.textContent = `${cs}：300 歩打っても外に出ません（大きさの最大 ${maxAbs.toFixed(3)}）。一歩ごとに ${deg.toFixed(1)}° 回り、${m.toFixed(3)} 倍に寄っていきます。`;
        } else {
          state.textContent = `${cs}：300 歩打っても外に出ません（大きさの最大 ${maxAbs.toFixed(3)}）。ただ、この c は大きなハート形の外か、その縁にあり、一点の周りを同じ角度で回りながら同じ割合で寄る形にはなりません。`;
        }
      }
    };
    let queued = false;
    const setC = (nc) => { c = nc; if (!queued) { queued = true; setTimeout(() => { queued = false; render(); }, 16); } };
    const pick = (ev) => {
      const r = cvC.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width, py = (ev.clientY - r.top) / r.height;
      setC([CR0 + px * (CR1 - CR0), CI1 - py * (CI1 - CI0)]);
    };
    let dragging = false;
    cvC.addEventListener("pointerdown", (e) => { dragging = true; cvC.setPointerCapture(e.pointerId); pick(e); });
    cvC.addEventListener("pointermove", (e) => { if (dragging) pick(e); });
    cvC.addEventListener("pointerup", () => { dragging = false; });
    live.querySelectorAll("button[data-c]").forEach((b) => b.addEventListener("click", () => setC(presets[b.dataset.c].slice())));
    drawMandel();
    render();
  }

  // ---- 2) 黄金角の渦と、ひまわり ----
  const sun = document.getElementById("jp-sun");
  if (sun) {
    const [cr, ci] = cFromLambda(0.97, GOLDEN_DEG);
    const fp = fixedPoint(cr, ci);
    {
      const { g, w, h } = setup(sun.querySelector("#jp-sun-orbit"));
      g.fillStyle = BG; g.fillRect(0, 0, w, h);
      const { pts } = forward(cr, ci, 300);
      const far = Math.max(...pts.slice(1).map(([a, b]) => Math.hypot(a - fp.zr, b - fp.zi)));
      const s = (Math.min(w, h) / 2 - 6) / far;
      pts.forEach(([a, b], i) => {
        if (i === 0) return;
        dot(g, w / 2 + s * (a - fp.zr), h / 2 - s * (b - fp.zi), i < 60 ? 2.6 : 1.6, RED);
      });
      dot(g, w / 2, h / 2, 2, INK);
    }
    {
      const { g, w, h } = setup(sun.querySelector("#jp-sun-vogel"));
      g.fillStyle = BG; g.fillRect(0, 0, w, h);
      const k = (Math.min(w, h) / 2 - 6) / Math.sqrt(400);
      for (let n = 1; n <= 400; n++) {
        const a = (n * GOLDEN_DEG * Math.PI) / 180, r = k * Math.sqrt(n);
        dot(g, w / 2 + r * Math.cos(a), h / 2 - r * Math.sin(a), 2.2, GOLD);
      }
    }
  }
})();
