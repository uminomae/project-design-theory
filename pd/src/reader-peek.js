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
 * 2. 戻るボタン：それ以外のページ内リンク（目次を除く）で跳んだら、左下に「元の所へ戻る」を出す。
 *    押すと、跳ぶ前のリンクの所へ戻る。跳ぶのは reader-flow.js の jumpTo（閉じた畳みを開いて着地する）。
 *    小窓の中のリンクで跳んだときは、小窓を開いたリンクの所へ戻る。
 */
(function () {
  'use strict';
  if (typeof document === 'undefined') return;

  var EN = (document.documentElement.lang || '').slice(0, 2) === 'en';
  var T = EN
    ? { close: 'Close', back: 'Back to where you were', dismiss: 'Hide' }
    : { close: '閉じる', back: '元の所へ戻る', dismiss: '隠す' };

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
    '<div class="peek__body"></div>';
  host.appendChild(dlg);
  var titleEl = dlg.querySelector('.peek__title');
  var bodyEl = dlg.querySelector('.peek__body');
  var opener = null;

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
    moved = null;
  }

  function openPeek(el, a) {
    restoreMoved();
    bodyEl.innerHTML = '';
    if (el.tagName === 'FIGURE') {
      var t = el.getAttribute('data-peek-title') || (el.querySelector('.jp-fig__title') || {}).textContent || '';
      titleEl.textContent = t.trim();
      var mark = document.createComment('peek');
      el.parentNode.insertBefore(mark, el);
      bodyEl.appendChild(el);
      moved = { el: el, mark: mark };
      opener = a;
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
      document.documentElement.classList.add('peek-open');
      bodyEl.scrollTop = 0;
      dlg.querySelector('.peek__close').focus();
      return;
    }
    var c = collect(el);
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

  /* 小窓で開くリンクに印（点の下線）を付ける */
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
    var el = targetOf(a);
    if (el && el.hasAttribute('data-peek') && !a.closest('#toc')) a.classList.add('peek-link');
  });

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

  /* ---------- リンクの横取り（reader-flow.js の跳びより先に、捕捉の段で見る） ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || a.closest('#toc')) return;
    var el = targetOf(a);
    if (!el) return;
    var inPeek = dlg.contains(a);
    if (el.hasAttribute('data-peek') && !(inPeek && dlg.contains(el))) {
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
