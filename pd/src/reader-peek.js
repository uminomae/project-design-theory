/* reader-peek.js — 読み物のページ内リンクを、戻ってこれる形にする（2026-11-20・起業家の漸化式と、ジュリア集合）
 *
 * pjdhiro「ページ内は戻ってこれないリンクが多いので読み続けるのがしんどい。なるべく入れたくない。
 * でも、重複コンテンツは困る。modalで呼び出すなり何か考えないといけないと思う。」
 *
 * 二つのことをする。読み物ごとにテンプレートで読み込む（reader-flow.js の後）。
 * 1. 小窓：跳び先に data-peek が付いた要素（用語の説明など）へのリンクは、跳ばずに小窓（<dialog>）で開く。
 *    中身は跳び先を写して見せるので、説明は正本の一か所だけに書けばよい。
 *    - 跳び先が <details> なら、summary を題に、残りを中身にする。
 *    - 跳び先が小見出しの段（<p id><b>…</b></p>）なら、次の小見出しの段・見出しの手前までを中身にする。
 *    - 跳び先が図（<figure>）なら、写さずに図そのものを小窓へ移し、閉じたら元の場所へ戻す（canvas の絵と
 *      ボタンの働きを保つため）。題は図の .jp-fig__title か、data-peek-title（2026-11-20・付箋 i20261120122123gig）。
 *    閉じる（×・Esc・小窓の外を押す）と、開いたリンクにフォーカスを戻す。
 *    data-peek-dock="<字>" も付いた説明は、右下の棚のボタンから、どこを読んでいても開ける（2026-11-20）。
 *    data-peek-dock は図（<figure>）にも付けられる（ボタンは字だけ。2026-11-21・付箋 i202611210239561it）。
 *    棚だけから開く図は hidden の <figure> に置いてよく、小窓の中でだけ見せる。ボタンの絵は data-peek-thumb（2026-11-21・付箋 i20261121043634uo3）。
 * 1b. 章の頭の小窓：跳び先が段落の頭の印（中身の無い <a id>）なら、跳ばずに、その段落から続く数段
 *    （図・畳み・見出しの手前まで）を小窓で見せる。題は、その段の章の題。小窓の下の「この章へ移る」で跳べる
 *    （2026-11-21・付箋 i202611210239561it「ページ内リンクでスクロールされないようにmodalにしてます。
 *    他のmodalもこのようにすべきではないか？」。本文中のページ内リンクを、どれも、まず小窓で開く形にそろえた）。
 * 2. 戻るボタン：それ以外のページ内リンク（目次を除く）で跳んだら、左下に「元の所へ戻る」を出す。
 *    押すと、跳ぶ前のリンクの所へ戻る。跳ぶのは reader-flow.js の jumpTo（閉じた畳みを開いて着地する）。
 *    小窓の中のリンクで跳んだときは、小窓を開いたリンクの所へ戻る。
 */
(function () {
  'use strict';
  if (typeof document === 'undefined') return;

  var EN = (document.documentElement.lang || '').slice(0, 2) === 'en';
  var T = EN
    ? { close: 'Close', back: 'Back to where you were', dismiss: 'Hide', go: 'Go to this section' }
    : { close: '閉じる', back: '元の所へ戻る', dismiss: '隠す', go: 'この章へ移る' };

  var host = document.querySelector('.reader-article') || document.body;

  function targetOf(a) {
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) !== '#' || href.length < 2) return null;
    return document.getElementById(decodeURIComponent(href.slice(1)));
  }

  /* ---------- 1. 小窓 ---------- */
  var dlg = document.createElement('dialog');
  dlg.className = 'peek';
  dlg.setAttribute('aria-labelledby', 'peek-title');
  dlg.innerHTML =
    '<div class="peek__head"><p class="peek__title" id="peek-title"></p>' +
    '<button type="button" class="peek__close" aria-label="' + T.close + '">×</button></div>' +
    '<div class="peek__body"></div>' +
    '<div class="peek__foot" hidden><button type="button" class="peek__go">' + T.go + ' →</button></div>';
  host.appendChild(dlg);
  var titleEl = dlg.querySelector('.peek__title');
  var bodyEl = dlg.querySelector('.peek__body');
  var footEl = dlg.querySelector('.peek__foot');
  var opener = null, leadTarget = null;

  /* 段落の頭の印（中身の無い <a id>）か */
  function isLeadMark(el) {
    return el && el.tagName === 'A' && !el.hasAttribute('href') && !el.textContent.trim() &&
      el.parentElement && el.parentElement.tagName === 'P' && el.closest('.reader-article');
  }
  /* 印の段落から、図・畳み・見出しの手前まで（多くて四段）。題は、その段の章の題 */
  function collectLead(el) {
    var sec = el.closest('details.sec');
    var sum = sec && sec.querySelector(':scope > summary');
    var nodes = [], n = el.parentElement;
    var start = n.parentElement && n.parentElement.tagName === 'BLOCKQUOTE' ? n.parentElement : n;
    n = start;
    while (n && nodes.length < 4 && /^(P|BLOCKQUOTE|UL|OL)$/.test(n.tagName) && !(nodes.length && isSubhead(n))) {
      nodes.push(n); n = n.nextElementSibling;
    }
    var title = sum ? sum.textContent.trim() : '';
    /* 章でなく、部の頭の文（.reader-part__lead）の印なら、題は部の番号と題（2026-11-22） */
    var part = !sum && el.closest('.reader-part');
    if (part) {
      title = Array.prototype.map.call(part.querySelectorAll('.reader-part__no, .reader-part__title'),
        function (x) { return x.textContent.trim(); }).join(' ');
    }
    return { title: title, nodes: nodes };
  }

  function isSubhead(n) {
    if (!n || n.nodeType !== 1) return false;
    if (/^H[1-6]$/.test(n.tagName)) return true;
    return n.tagName === 'P' && n.children.length === 1 && n.children[0].tagName === 'B' &&
      n.textContent.trim() === n.children[0].textContent.trim();
  }

  function collect(el) {
    var title, nodes = [];
    if (el.tagName === 'DETAILS') {
      var sum = el.querySelector(':scope > summary');
      title = sum ? sum.textContent.replace(/^詳しく\s*[—–-]\s*/, '') : '';
      Array.prototype.forEach.call(el.children, function (c) { if (c !== sum) nodes.push(c); });
    } else {
      title = el.textContent.trim();
      var n = el.nextElementSibling;
      while (n && !isSubhead(n)) { nodes.push(n); n = n.nextElementSibling; }
    }
    return { title: title, nodes: nodes };
  }

  /* 図は写さずに移す。moved は今小窓にある図と、元の場所の印 */
  var moved = null;
  function restoreMoved() {
    if (!moved) return;
    moved.mark.parentNode.insertBefore(moved.el, moved.mark);
    moved.mark.parentNode.removeChild(moved.mark);
    if (moved.hid) moved.el.hidden = true;
    moved = null;
  }

  function openPeek(el, a) {
    restoreMoved();
    bodyEl.innerHTML = '';
    leadTarget = isLeadMark(el) ? el : null;
    footEl.hidden = !leadTarget;
    if (el.tagName === 'FIGURE') {
      var t = el.getAttribute('data-peek-title') || (el.querySelector('.jp-fig__title') || {}).textContent || '';
      titleEl.textContent = t.trim();
      var mark = document.createComment('peek');
      el.parentNode.insertBefore(mark, el);
      /* 本文に置かず棚からだけ開く図（hidden の <figure>）は、小窓の中でだけ見せる（2026-11-21・付箋 i20261121043634uo3） */
      moved = { el: el, mark: mark, hid: el.hidden };
      el.hidden = false;
      bodyEl.appendChild(el);
      opener = a;
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
      document.documentElement.classList.add('peek-open');
      bodyEl.scrollTop = 0;
      dlg.querySelector('.peek__close').focus();
      return;
    }
    var c = leadTarget ? collectLead(el) : collect(el);
    titleEl.textContent = c.title;
    c.nodes.forEach(function (n) {
      var k = n.cloneNode(true);
      /* 同じ id が二つにならないよう、写しからは id を外す */
      if (k.removeAttribute) k.removeAttribute('id');
      Array.prototype.forEach.call(k.querySelectorAll ? k.querySelectorAll('[id]') : [], function (x) { x.removeAttribute('id'); });
      bodyEl.appendChild(k);
    });
    opener = a;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    document.documentElement.classList.add('peek-open');
    bodyEl.scrollTop = 0;
    dlg.querySelector('.peek__close').focus();
  }

  function closePeek(keepOpener) {
    if (typeof dlg.close === 'function' && dlg.open) dlg.close(); else dlg.removeAttribute('open');
    restoreMoved();
    document.documentElement.classList.remove('peek-open');
    if (!keepOpener && opener && opener.focus) opener.focus({ preventScroll: true });
  }
  dlg.addEventListener('close', function () { document.documentElement.classList.remove('peek-open'); restoreMoved(); });
  dlg.querySelector('.peek__close').addEventListener('click', function () { closePeek(false); });
  /* 小窓の外（背景）を押したら閉じる */
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closePeek(false); });
  dlg.addEventListener('cancel', function (e) { e.preventDefault(); closePeek(false); });

  /* 小窓で開くか：data-peek の付いた跳び先か、段落の頭の印 */
  function peekable(el) { return el && (el.hasAttribute('data-peek') || isLeadMark(el)); }

  /* 小窓で開くリンクに印（点の下線）を付ける */
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
    var el = targetOf(a);
    if (peekable(el) && !a.closest('#toc')) a.classList.add('peek-link');
  });

  /* 呼び出しの棚：data-peek-dock="<ボタンの字>" が付いた説明は、右下（目次のボタンの上）にボタンを置き、
     どこを読んでいても、スクロールせずに小窓で開けるようにする（2026-11-20・付箋 i20261120135227pg5
     「野中とジュリア集合はmodalにして、どこからでも呼び出せるのがいい。スクロール無しに読みたいものだから」）。
     説明の本体は、本文に畳みとして見せず hidden の <details> に置いてよい。 */
  var dockEls = document.querySelectorAll('[data-peek][data-peek-dock]');
  if (dockEls.length) {
    var dock = document.createElement('div');
    dock.className = 'peek-dock';
    dock.setAttribute('role', 'group');
    dock.setAttribute('aria-label', EN ? 'Explanations' : '解説を開く');
    Array.prototype.forEach.call(dockEls, function (el) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'peek-dock__btn';
      /* 棚のボタンの小さな絵：畳みなら見出しの絵、図なら data-peek-thumb */
      var th = el.querySelector(':scope > summary img');
      var thSrc = th ? th.getAttribute('src') : el.getAttribute('data-peek-thumb');
      if (thSrc) {
        var im = document.createElement('img');
        im.src = thSrc;
        im.alt = '';
        im.width = 24; im.height = 24;
        b.appendChild(im);
      }
      b.appendChild(document.createTextNode(el.getAttribute('data-peek-dock')));
      b.addEventListener('click', function () {
        /* 目次の中に置いているときは、目次を閉じてから開く */
        if (dock.classList.contains('peek-dock--in-toc')) {
          var x = document.querySelector('#toc .toc-x');
          if (x && x.offsetParent !== null) x.click();
        }
        openPeek(el, b);
      });
      dock.appendChild(b);
    });
    /* 狭い幅（600px 以下）では、右下に固定すると図や本文に重なるので、目次の中の頭に置く
       （2026-11-21・判断のページ q2「狭い幅では、二つの解説のボタンを目次の中へ移す」）。 */
    var narrow = window.matchMedia ? window.matchMedia('(max-width: 600px)') : null;
    var placeDock = function () {
      var toc = document.getElementById('toc');
      var head = toc && toc.querySelector('.toc-h');
      if (narrow && narrow.matches && head) {
        dock.classList.add('peek-dock--in-toc');
        if (dock.parentNode !== toc || dock.previousElementSibling !== head) head.insertAdjacentElement('afterend', dock);
      } else {
        dock.classList.remove('peek-dock--in-toc');
        if (dock.parentNode !== document.body) document.body.appendChild(dock);
      }
    };
    placeDock();
    if (narrow) {
      if (narrow.addEventListener) narrow.addEventListener('change', placeDock);
      else if (narrow.addListener) narrow.addListener(placeDock);
    }
  }

  /* ---------- 2. 戻るボタン ---------- */
  var back = document.createElement('div');
  back.className = 'jump-back';
  back.hidden = true;
  back.innerHTML =
    '<button type="button" class="jump-back__go">↩ ' + T.back + '</button>' +
    '<button type="button" class="jump-back__x" aria-label="' + T.dismiss + '">×</button>';
  document.body.appendChild(back);
  var origin = null;

  back.querySelector('.jump-back__go').addEventListener('click', function () {
    var o = origin;
    back.hidden = true;
    origin = null;
    if (!o) return;
    /* native の smooth は背景の描画と干渉して途中で止まるので使わない（DESIGN-RULES §13） */
    o.scrollIntoView({ block: 'center' });
    if (o.focus) o.focus({ preventScroll: true });
  });
  back.querySelector('.jump-back__x').addEventListener('click', function () { back.hidden = true; origin = null; });

  /* 小窓の「この章へ移る」：小窓を閉じて跳び、戻るボタンを出す。跳ぶのは reader-flow.js（偽のリンクを押す） */
  dlg.querySelector('.peek__go').addEventListener('click', function () {
    var t = leadTarget;
    if (!t) return;
    var o = opener;
    closePeek(true);
    var a = document.createElement('a');
    a.href = '#' + t.id;
    a.hidden = true;
    host.appendChild(a);
    origin = o;
    back.hidden = false;
    /* 横取りの段を通さずに跳ぶ：印は小窓で開く跳び先なので、横取りに捕まらないよう一度だけ外す */
    skipNext = true;
    a.click();
    host.removeChild(a);
  });

  /* ---------- リンクの横取り（reader-flow.js の跳びより先に、捕捉の段で見る） ---------- */
  var skipNext = false;
  document.addEventListener('click', function (e) {
    if (skipNext) { skipNext = false; return; }
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || a.closest('#toc')) return;
    var el = targetOf(a);
    if (!el) return;
    var inPeek = dlg.contains(a);
    if (peekable(el) && !(inPeek && dlg.contains(el))) {
      e.preventDefault();
      e.stopPropagation();
      /* 小窓の中のリンクから別の小窓へ移るときは、最初に開いたリンクを戻り先に残す */
      openPeek(el, inPeek ? opener : a);
      return;
    }
    /* ふつうの跳び。跳ぶのは reader-flow.js。ここでは戻り先だけ覚える */
    if (inPeek) closePeek(true);
    origin = inPeek ? opener : a;
    back.hidden = false;
  }, true);
})();
