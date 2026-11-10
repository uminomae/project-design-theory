/*
 * Love駆動開発（LDD）の最初の画面：読書欄を下へずらし、まず背景（膜の渦）を全画面で見せる。
 * 決まりは docs/DESIGN-RULES-LDD.md §1（pjdhiro 2026-11-10「次はページ開始位置を少しずらして、背景を全画面で見れるようにしたい」）。
 *
 * - 最初の画面の形は html の data-intro（空白区切り：blank・title・cue・peek）と、--ldd-intro-h（高さ・svh）で決める。
 *   どの形にするかは見本（src/backgrounds/intro-samples.html）を見て pjdhiro が選ぶ。
 * - 見本のために ?intro=title+cue&ih=80 で上書きできる（決まった値は テンプレートの html に書く）。
 * - 最初の画面にいるあいだは、目次（常設・右下のボタン）を出さない（背景を全画面で見せるため）。
 * - head で同期に読む（描く前に data-intro を決めて、読書欄の位置が跳ねないように）。
 */
(function () {
    var html = document.documentElement;
    var q = new URLSearchParams(location.search);
    if (q.has('intro')) {
        var words = (q.get('intro') || '').split(/[\s+,]+/).filter(function (w) {
            return /^(blank|title|cue|peek|off)$/.test(w);
        });
        if (words.indexOf('off') >= 0 || !words.length) html.removeAttribute('data-intro');
        else html.setAttribute('data-intro', words.join(' '));
    }
    var ih = parseFloat(q.get('ih'));
    if (ih >= 40 && ih <= 100) html.style.setProperty('--ldd-intro-h', ih);
    // 開いた直後は最初の画面にいるとみなす（目次が一瞬出てから消えないように）。スクロールの位置を戻したときは ready() で直す
    if (html.hasAttribute('data-intro') && !location.hash) html.classList.add('ldd-at-intro');

    function ready() {
        var intro = document.querySelector('.ldd-intro');
        if (!intro || !html.hasAttribute('data-intro')) return;
        var ticking = false;
        function at() {
            ticking = false;
            // 読書欄の上端が画面の半分より上に来たら、最初の画面を抜けたとみなす
            var h = intro.offsetHeight;
            html.classList.toggle('ldd-at-intro', window.scrollY < h * 0.5);
        }
        window.addEventListener('scroll', function () {
            if (!ticking) { ticking = true; requestAnimationFrame(at); }
        }, { passive: true });
        window.addEventListener('resize', at, { passive: true });
        at();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
    else ready();
})();
