/* reader-flow.js — READER「エネルギーの流れ仮説」ページの目次＋章アコーディオン制御
   参考（pjdhiro 指示 2026-07-14）: pjdhiro garage/index.html の TOC
   （章 details.sec から自動生成。PC=常設サイドバー / モバイル=右下ボタン＋ドロワー、
    スクロール連動ハイライト、タップで該当章を開いてスクロール）。
   スタイルは src/styles/reader-flow.css（body.reader-flow スコープ）。 */

(function () {
  var secs = [].slice.call(document.querySelectorAll('details.sec'));
  if (!secs.length) return;

  /* ---- ハッシュ/ページ内リンクで畳まれた章を開く ----
     注意: このページではブラウザ native の smooth スクロール
     （window.scrollTo / scrollIntoView の behavior:'smooth'）が
     シェーダー背景（reader-app.js の rAF ループ）と干渉して途中停止する。
     自前の短いイージングで確実にスクロールする。 */
  function smoothTo(el, animate) {
    var root = document.scrollingElement || document.documentElement;
    function landing() { return el.getBoundingClientRect().top + root.scrollTop - 12; }
    /* 畳み展開・図版ロード等のリフローで着地がズレるため、最後に必ず位置を取り直す
       （garage と同じ遅延補正。アニメーション自体が失敗しても最終補正で着地する） */
    function settle() { root.scrollTop = Math.max(0, landing()); }
    if (!animate) { settle(); setTimeout(settle, 420); return; }
    var from = root.scrollTop, dist = landing() - from, dur = 320, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var ease = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      root.scrollTop = from + dist * ease;
      if (p < 1) { requestAnimationFrame(step); } else { settle(); setTimeout(settle, 420); }
    }
    requestAnimationFrame(step);
  }
  function jumpTo(id, animate) {
    var el = document.getElementById(id);
    if (!el) return false;
    /* 着地先を隠している祖先の <details> を全て開く。章の details.sec だけでなく
       入れ子の「詳しく」（.acc 等）も含めて開かないと、閉じた要素の中へ
       スクロールして着地が見えない破れが起きる。開いてからリフロー後に着地する。 */
    var d = el.closest ? el.closest('details') : null;
    while (d) {
      d.open = true;
      var p = d.parentNode;
      d = p && p.closest ? p.closest('details') : null;
    }
    requestAnimationFrame(function () { smoothTo(el, animate); });
    return true;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || a.closest('#toc')) return; /* 目次リンクは専用ハンドラが担当 */
    var id = decodeURIComponent(a.getAttribute('href').slice(1));
    if (!id) return;
    if (jumpTo(id, true)) {
      e.preventDefault();
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    }
  });
  if (location.hash) {
    jumpTo(decodeURIComponent(location.hash.slice(1)), false);
  }

  /* ---- 目次を章から自動生成 ---- */
  var nav = document.createElement('nav');
  nav.id = 'toc';
  nav.setAttribute('aria-label', '目次');
  var head = document.createElement('div');
  head.className = 'toc-h';
  head.innerHTML = '<span>目次</span>';
  var xbtn = document.createElement('button');
  xbtn.className = 'toc-x';
  xbtn.setAttribute('aria-label', '閉じる');
  xbtn.innerHTML = '×';
  head.appendChild(xbtn);
  nav.appendChild(head);
  var ol = document.createElement('ol');
  nav.appendChild(ol);

  /* 見出しを「主タイトル」＋「短いサブタイトル」に分解する（garage と同ロジック） */
  function tocParts(t) {
    var m = t.split(/[―—–：:]/);
    var main = (m[0] || t).trim();
    var sub = m.slice(1).join(' ').replace(/（[^）]*）/g, '').replace(/\([^)]*\)/g, '').trim();
    if (sub) {
      if (sub.length > 7 && /[・/／]/.test(sub)) { sub = sub.split(/[・/／]/)[0].trim(); }
      else if (sub.length > 14) { sub = sub.slice(0, 14) + '…'; }
    }
    return { main: main, sub: sub };
  }

  /* 部の区切り（.reader-part・build-reader-lp.py が <!--PART:--> から作る）は、目次で章の上の行にする */
  var partOf = new Map();
  [].slice.call(document.querySelectorAll('.reader-part')).forEach(function (pt) {
    var nx = pt.nextElementSibling;
    while (nx && !(nx.matches && nx.matches('details.sec'))) nx = nx.nextElementSibling;
    if (nx) partOf.set(nx, pt);
  });

  secs.forEach(function (sec, i) {
    var pt = partOf.get(sec);
    if (pt) {
      var pli = document.createElement('li');
      pli.className = 'toc-part';
      var pa = document.createElement('a');
      pa.href = '#' + pt.id;
      var no = pt.querySelector('.reader-part__no'), ti = pt.querySelector('.reader-part__title');
      pa.textContent = (no ? no.textContent : '') + (ti ? '　' + ti.textContent : '');
      pa.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('toc-open');
        requestAnimationFrame(function () { smoothTo(pt, true); });
        if (history.replaceState) history.replaceState(null, '', '#' + pt.id);
      });
      pli.appendChild(pa);
      ol.appendChild(pli);
    }
    var id = sec.id || ('sec-' + (i + 1));
    sec.id = id;
    var sum = sec.querySelector(':scope>summary');
    var full = sum ? sum.textContent.replace(/\s+/g, ' ').trim() : ('章' + (i + 1));
    var p = tocParts(full);
    if (sum && sum.dataset.sub) { p.sub = sum.dataset.sub; }
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + id;
    a.title = full;
    a.dataset.target = id;
    var mEl = document.createElement('span');
    mEl.className = 'toc-main';
    mEl.textContent = p.main;
    a.appendChild(mEl);
    if (p.sub) {
      var sEl = document.createElement('span');
      sEl.className = 'toc-sub2';
      sEl.textContent = p.sub;
      a.appendChild(sEl);
    }
    li.appendChild(a);
    ol.appendChild(li);
    a.addEventListener('click', function (e) {
      e.preventDefault();
      sec.open = true;
      document.body.classList.remove('toc-open');
      requestAnimationFrame(function () { smoothTo(sec, true); });
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  });
  document.body.appendChild(nav);

  /* ---- モバイル: 開閉ボタン＋背景 ---- */
  var btn = document.createElement('button');
  btn.id = 'toc-btn';
  btn.setAttribute('aria-label', '目次を開く');
  btn.textContent = '☰ 目次';
  var bd = document.createElement('div');
  bd.id = 'toc-bd';
  document.body.appendChild(btn);
  document.body.appendChild(bd);
  function close() { document.body.classList.remove('toc-open'); }
  btn.addEventListener('click', function () { document.body.classList.toggle('toc-open'); });
  bd.addEventListener('click', close);
  xbtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  /* ---- スクロール位置に応じて現在地をハイライト ---- */
  var links = [].slice.call(ol.querySelectorAll('a[data-target]'));
  var ticking = false;
  function spy() {
    ticking = false;
    var cur = secs[0].id, best = -1e9;
    secs.forEach(function (s) {
      var t = s.getBoundingClientRect().top;
      if (t <= 140 && t > best) { best = t; cur = s.id; }
    });
    links.forEach(function (l) { l.classList.toggle('active', l.dataset.target === cur); });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(spy); }
  }, { passive: true });
  spy();
})();
