/* reader-import.js — ほかのページに一か所だけ書いた中身を、小窓で呼び出す（2026-11-26・人類の man）
 *
 * pjdhiro「同じものを２箇所においてない？コンテンツは１箇所でリンクで呼び出されるか、
 * modalでインポートされるなどの仕組みが良い」。
 *
 * 正本の MD では、次の形のリンクを置く：
 *   <a href="man.html#man-exp" data-import="man.html#man-exp-doc" data-import-title="exp(z) の説明書">…</a>
 * クリックすると、data-import のページを読み込み、# の id の要素を写して小窓（<dialog class="peek">。
 * 見た目は reader-peek.js の小窓と同じ・reader-flow.css）に出す。小窓の下の「ページへ移る」で href へ跳ぶ。
 * JavaScript が動かない所や、読み込みに失敗したときは、ふつうのリンクとして href へ跳ぶ。
 * 写した中身の相対リンクは、読み込んだページの場所で解き直す。
 */
(function () {
  'use strict';
  if (typeof document === 'undefined' || typeof fetch === 'undefined') return;
  var links = [].slice.call(document.querySelectorAll('a[data-import]'));
  if (!links.length) return;

  var host = document.querySelector('.reader-article') || document.body;
  var dlg = document.createElement('dialog');
  dlg.className = 'peek';
  dlg.setAttribute('aria-labelledby', 'import-title');
  dlg.innerHTML =
    '<div class="peek__head"><p class="peek__title" id="import-title"></p>' +
    '<button type="button" class="peek__close" aria-label="閉じる">×</button></div>' +
    '<div class="peek__body"></div>' +
    '<div class="peek__foot"><a class="peek__go" href="#">ページへ移る →</a></div>';
  host.appendChild(dlg);
  var titleEl = dlg.querySelector('.peek__title');
  var bodyEl = dlg.querySelector('.peek__body');
  var goEl = dlg.querySelector('.peek__go');
  var opener = null;
  var cache = {};

  function close() {
    if (dlg.open) dlg.close();
  }
  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('peek-open');
    if (opener) opener.focus();
  });
  dlg.querySelector('.peek__close').addEventListener('click', close);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });

  function load(src) {
    var parts = src.split('#');
    var url = new URL(parts[0], location.href).href;
    if (!cache[url]) {
      cache[url] = fetch(url).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      }).then(function (html) {
        return new DOMParser().parseFromString(html, 'text/html');
      });
    }
    return cache[url].then(function (doc) {
      var el = doc.getElementById(decodeURIComponent(parts[1] || ''));
      if (!el) throw new Error('not found');
      var copy = el.cloneNode(true);
      copy.removeAttribute('id');
      [].slice.call(copy.querySelectorAll('[href]')).forEach(function (a) {
        var h = a.getAttribute('href');
        if (h && !/^(#|[a-z]+:)/i.test(h)) a.setAttribute('href', new URL(h, url).href);
      });
      return copy;
    });
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      opener = a;
      load(a.getAttribute('data-import')).then(function (node) {
        titleEl.textContent = a.getAttribute('data-import-title') || a.textContent;
        bodyEl.innerHTML = '';
        bodyEl.appendChild(node);
        goEl.setAttribute('href', a.getAttribute('href'));
        document.documentElement.classList.add('peek-open');
        dlg.showModal();
        bodyEl.scrollTop = 0;
      }).catch(function () {
        location.href = a.href;
      });
    });
  });
})();
