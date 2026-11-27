// 「起業家の進み方と、ジュリア集合の式」（reader/julia-potential-hs.html）の図を一つだけ動かす。
// z → z² + c を ① 前へ進める ② 逆にたどる ③ 半径 2 の円いっぱいに点を放つ。どれもブラウザの中で計算する。
// c は、不動点の掛ける数 λ が「約 137.5° 回り、0.97 倍ずつ寄る」ように c = λ/2 − λ²/4 と選ぶ。
(function () {
  const cv = document.getElementById('jh-cv');
  if (!cv) return;
  const g = cv.getContext('2d');
  const cap = document.getElementById('jh-cap');
  const legend = document.getElementById('jh-legend');
  const COL = { bg: '#0f1628', dot: '#e9c46a', back: '#8fb3ff', ring: '#ec8a74' };
  const W = cv.width, O = W / 2;
  const S1 = W / 3.4, S3 = W / 4.6; // ①②は -1.7〜1.7、③は半径 2 の円が入る -2.3〜2.3
  let S = S1;
  const deg = 137.5 * Math.PI / 180, r = 0.97;
  const L = [r * Math.cos(deg), r * Math.sin(deg)]; // λ
  const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  const L2 = mul(L, L), c = [L[0] / 2 - L2[0] / 4, L[1] / 2 - L2[1] / 4];
  const f = (z) => { const q = mul(z, z); return [q[0] + c[0], q[1] + c[1]]; };
  const X = (p) => O + p[0] * S, Y = (p) => O - p[1] * S;
  const N = 160, fwd = [[0, 0]];
  for (let i = 0; i < N; i++) fwd.push(f(fwd[fwd.length - 1]));
  const star = fwd[N];
  const sqrt = (z) => {
    const m = Math.hypot(z[0], z[1]);
    const a = Math.sqrt((m + z[0]) / 2);
    let b = Math.sqrt(Math.max(0, (m - z[0]) / 2));
    if (z[1] < 0) b = -b;
    return [a, b];
  };
  let shown = 0, depth = 0, timer = null, mode = 'idle';
  function backLevels(d) {
    let lv = [star]; const out = [];
    for (let k = 0; k < d; k++) {
      const nx = [];
      for (const z of lv) { const s = sqrt([z[0] - c[0], z[1] - c[1]]); nx.push(s, [-s[0], -s[1]]); }
      lv = nx; for (const q of lv) out.push(q);
    }
    return { all: out, last: lv };
  }
  // ③ の雲：円の中にばらまいた点（金）と、縁の上の点（青）
  const CLOUD_STEPS = 24;
  let cloud = [], edge = [], cstep = 0;
  function seedCloud() {
    cloud = []; let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < 3000; i++) { const a = rnd() * Math.PI * 2, d = 2 * Math.sqrt(rnd()); cloud.push([d * Math.cos(a), d * Math.sin(a)]); }
    edge = backLevels(11).last.map((p) => [p[0], p[1]]);
    cstep = 0;
  }
  const out = (p) => !isFinite(p[0]) || Math.hypot(p[0], p[1]) > 2;
  function stepCloud() { cloud = cloud.map((p) => (out(p) ? p : f(p))); edge = edge.map((p) => (out(p) ? p : f(p))); cstep++; }
  function draw() {
    g.fillStyle = COL.bg; g.fillRect(0, 0, W, W);
    g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(0, O); g.lineTo(W, O); g.moveTo(O, 0); g.lineTo(O, W); g.stroke();
    if (mode === 'cloud') {
      g.strokeStyle = COL.ring; g.setLineDash([6, 6]); g.beginPath(); g.arc(O, O, 2 * S, 0, 7); g.stroke(); g.setLineDash([]);
      g.fillStyle = COL.dot; for (const p of cloud) { if (!out(p)) g.fillRect(X(p) - 1, Y(p) - 1, 2, 2); }
      g.fillStyle = COL.back; for (const p of edge) { if (!out(p)) g.fillRect(X(p) - 1, Y(p) - 1, 2, 2); }
      g.fillStyle = '#ffffff'; g.beginPath(); g.arc(X(star), Y(star), 3.5, 0, 7); g.fill();
      return;
    }
    if (depth > 0) { g.fillStyle = COL.back; for (const p of backLevels(depth).all) g.fillRect(X(p) - 1, Y(p) - 1, 2, 2); }
    g.strokeStyle = 'rgba(233,196,106,.45)'; g.beginPath();
    for (let i = 0; i <= shown; i++) { const p = fwd[i]; if (i) g.lineTo(X(p), Y(p)); else g.moveTo(X(p), Y(p)); }
    g.stroke();
    g.fillStyle = COL.dot;
    for (let i = 0; i <= shown; i++) { const p = fwd[i]; g.beginPath(); g.arc(X(p), Y(p), i === shown ? 4.5 : 2.6, 0, 7); g.fill(); }
  }
  const dot = (col, extra) => `<span class="jh-dot" style="background:${col}${extra || ''}"></span>`;
  const LEG12 = `${dot(COL.dot)}前へ進めた点　${dot(COL.back)}逆にたどった点`;
  const LEG3 = `${dot(COL.dot)}円の中にばらまいた点　${dot(COL.back)}縁の上にあった点　${dot('#ffffff', ';border:1px solid #888')}寄っていく一点　点線は半径 2 の円`;
  function setMode(m) { mode = m; S = m === 'cloud' ? S3 : S1; legend.innerHTML = m === 'cloud' ? LEG3 : LEG12; }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function cloudText() {
    const inside = cloud.filter((p) => !out(p)).length;
    const gone = Math.round((1 - inside / cloud.length) * 100);
    return cstep + ' 歩。円を超えて散った点は、ばらまいた点の ' + gone + '%。内側の点は渦を巻いて白い一点へ寄り、縁の上の点（青）は、入れ替わりながら縁に残っています。';
  }
  document.getElementById('jh-b-fwd').onclick = () => {
    stop(); setMode('fwd'); depth = 0;
    if (reduce) { shown = N; draw(); cap.textContent = '0 から式を ' + N + ' 回くり返して打ちました。点は一歩ごとに約 137.5° 回りながら、渦を巻いて一か所へ寄っていきます。'; return; }
    shown = 0; draw();
    timer = setInterval(() => {
      shown++; draw();
      cap.textContent = shown + ' 歩目。点は一歩ごとに約 137.5° 回りながら、渦を巻いて一か所へ寄っていきます。';
      if (shown >= N) { stop(); cap.textContent = '前へ ' + N + ' 歩。点は外へ飛び出さず、渦の中心へ寄りました。次は「② 逆にたどる」をクリックしてください。'; }
    }, 40);
  };
  document.getElementById('jh-b-back').onclick = () => {
    stop(); setMode('back'); shown = N;
    if (reduce) { depth = 14; draw(); cap.textContent = '最後の点から 14 段さかのぼりました。一段ごとに候補が二つに分かれ、境目に散らばります。'; return; }
    depth = 0; draw();
    timer = setInterval(() => {
      depth++; draw();
      cap.textContent = depth + ' 段さかのぼりました。「一つ前」の候補は 2 の ' + depth + ' 乗（' + Math.pow(2, depth).toLocaleString() + ' 通り）に分かれます。';
      if (depth >= 14) { stop(); cap.textContent = '14 段で 16,384 通り。分かれた点は、渦から離れて、ジュリア集合の込み入った境目に散らばりました。'; }
    }, 450);
  };
  document.getElementById('jh-b-cloud').onclick = () => {
    stop(); setMode('cloud'); seedCloud();
    if (reduce) { while (cstep < CLOUD_STEPS) stepCloud(); draw(); cap.textContent = cloudText(); return; }
    draw(); cap.textContent = '半径 2 の円いっぱいに点を放ちました。これから、いっせいに前へ進めます。';
    timer = setInterval(() => { stepCloud(); draw(); cap.textContent = cloudText(); if (cstep >= CLOUD_STEPS) stop(); }, 220);
  };
  document.getElementById('jh-b-reset').onclick = () => {
    stop(); setMode('idle'); shown = 0; depth = 0; draw();
    cap.textContent = '「① 前へ進める」をクリックすると、0 から式をくり返した点が、一つずつ打たれます。';
  };
  draw();
})();
