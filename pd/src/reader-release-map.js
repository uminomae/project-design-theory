// 升目の絵（reader/kaken-map.html・kokoro-scale-map.html）の升を押したとき、中身を升のすぐ下に出す。
// 升目と数は生成のときに HTML に入っている（pd/scripts/release_map_markup.py）。ここは押したときの出し方だけ。
// JavaScript が動かない環境では、升目の色と、升の aria-label・title、ページの下の一覧で読める。
(function () {
    'use strict';

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    function link(href, text) {
        var a = el('a', null, text);
        a.href = href;
        return a;
    }

    function fillKaken(panel, code, data) {
        var c = data.cells[code];
        panel.appendChild(el('p', 'rmap-detail__title', code + ' ' + c.n));
        if (!c.p.length && !c.c.length) {
            panel.appendChild(el('p', 'rmap-detail__none', 'このサイトのページも、創造とはの記録も、まだ触れていません。'));
            return;
        }
        if (c.p.length) {
            panel.appendChild(el('p', 'rmap-detail__head', '当てた読み物のページ（' + c.p.length + '）'));
            var ul = el('ul');
            c.p.forEach(function (id) {
                var li = el('li');
                li.appendChild(link(id + '.html', data.pages[id] || id));
                ul.appendChild(li);
            });
            panel.appendChild(ul);
        }
        if (c.c.length) {
            panel.appendChild(el('p', 'rmap-detail__head', '当てた創造とはの分野（' + c.c.length + '）'));
            var ul2 = el('ul');
            c.c.forEach(function (id) {
                var li = el('li');
                li.appendChild(link('../cs/index.html?domain=' + encodeURIComponent(id), (data.cs[id] || id)));
                ul2.appendChild(li);
            });
            panel.appendChild(ul2);
        }
    }

    function fillScale(panel, key, data) {
        var c = data.cells[key];
        var title = el('p', 'rmap-detail__title', c.n);
        if (c.sub) title.appendChild(el('span', 'rmap-detail__sub', c.sub));
        panel.appendChild(title);
        if (!c.i.length) {
            panel.appendChild(el('p', 'rmap-detail__none', '当たる台帳の項は、まだありません。'));
            return;
        }
        panel.appendChild(el('p', 'rmap-detail__head', '当たる台帳の項（' + c.i.length + '）'));
        var ul = el('ul');
        c.i.forEach(function (id) {
            var it = data.items[id] || { n: id, s: '', star: false };
            var li = el('li');
            li.appendChild(link('#ks-' + id, id + (it.star ? ' ★' : '') + '　' + it.n));
            if (it.s) li.appendChild(el('span', 'rmap-detail__sec', '（' + it.s + '）'));
            ul.appendChild(li);
        });
        panel.appendChild(ul);
    }

    function setup(root) {
        var kind = root.getAttribute('data-rmap');
        var json = root.parentNode.querySelector('script[data-rmap-json="' + kind + '"]');
        var panel = root.querySelector('[data-rmap-detail]');
        if (!json || !panel) return;
        var data;
        try { data = JSON.parse(json.textContent); } catch (e) { return; }
        var current = null;

        function close() {
            if (current) current.setAttribute('aria-pressed', 'false');
            current = null;
            panel.hidden = true;
            panel.textContent = '';
        }

        root.addEventListener('click', function (ev) {
            var cell = ev.target.closest('[data-rmap-cell]');
            if (!cell || !root.contains(cell)) return;
            if (cell === current) { close(); return; }
            close();
            current = cell;
            cell.setAttribute('aria-pressed', 'true');
            var key = cell.getAttribute('data-rmap-cell');
            if (data.kind === 'kaken') fillKaken(panel, key, data); else fillScale(panel, key, data);
            var shut = el('button', 'rmap-detail__close', '閉じる');
            shut.type = 'button';
            shut.addEventListener('click', function () { var c = current; close(); if (c) c.focus(); });
            panel.appendChild(shut);
            // 押した升の組（中区分・水準・段階の列）のすぐ下に出す
            var group = cell.closest('.rmap-group') || root;
            group.parentNode.insertBefore(panel, group.nextSibling);
            panel.hidden = false;
        });

        root.addEventListener('keydown', function (ev) {
            if (ev.key === 'Escape' && current) { var c = current; close(); c.focus(); }
        });
    }

    function init() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-rmap]'), setup);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
