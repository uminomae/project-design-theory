/* home-toc.js — HOME の目次（読み物と同じ形：PC=左に常設 / スマホ=右下ボタン＋ドロワー）
   見た目は styles/toc.css（読み物と共用）。項目は #main-content の各節の h2 から作り、
   data-i18n-key を写して JA/EN の切り替えに付いていく（2026-11-08）。 */

export function createHomeToc({ root = document } = {}) {
    const sections = [...root.querySelectorAll('#main-content > section.content-section[id]')]
        .filter((sec) => sec.querySelector('h2'));
    if (!sections.length) return;

    document.body.classList.add('home-toc');

    const nav = document.createElement('nav');
    nav.id = 'toc';
    nav.setAttribute('aria-label', '目次');
    nav.dataset.i18nAriaLabelKey = 'toc.title';

    const head = document.createElement('div');
    head.className = 'toc-h';
    const title = document.createElement('span');
    title.textContent = '目次';
    title.dataset.i18nKey = 'toc.title';
    const xbtn = document.createElement('button');
    xbtn.type = 'button';
    xbtn.className = 'toc-x';
    xbtn.setAttribute('aria-label', '閉じる');
    xbtn.dataset.i18nAriaLabelKey = 'toc.close';
    xbtn.textContent = '×';
    head.append(title, xbtn);
    nav.appendChild(head);

    const ol = document.createElement('ol');
    nav.appendChild(ol);

    const close = () => document.body.classList.remove('toc-open');
    const links = sections.map((sec) => {
        const h2 = sec.querySelector('h2');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${sec.id}`;
        a.dataset.target = sec.id;
        const label = document.createElement('span');
        label.className = 'toc-main';
        label.textContent = h2.textContent.trim();
        if (h2.dataset.i18nKey) label.dataset.i18nKey = h2.dataset.i18nKey;
        a.appendChild(label);
        a.addEventListener('click', (event) => {
            event.preventDefault();
            close();
            sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState?.(null, '', `#${sec.id}`);
        });
        li.appendChild(a);
        ol.appendChild(li);
        return a;
    });
    document.body.appendChild(nav);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'toc-btn';
    btn.setAttribute('aria-label', '目次を開く');
    btn.dataset.i18nAriaLabelKey = 'toc.open';
    btn.textContent = '☰ 目次';
    btn.dataset.i18nKey = 'toc.button';
    const bd = document.createElement('div');
    bd.id = 'toc-bd';
    document.body.append(btn, bd);

    btn.addEventListener('click', () => document.body.classList.toggle('toc-open'));
    bd.addEventListener('click', close);
    xbtn.addEventListener('click', close);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close();
    });

    /* スクロール位置に応じて現在地をハイライト */
    let ticking = false;
    function spy() {
        ticking = false;
        let current = null;
        let best = -Infinity;
        for (const sec of sections) {
            const top = sec.getBoundingClientRect().top;
            if (top <= 140 && top > best) {
                best = top;
                current = sec.id;
            }
        }
        for (const link of links) link.classList.toggle('active', link.dataset.target === current);
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(spy);
        }
    }, { passive: true });
    spy();

    /* 本文の左に目次が収まるときだけ常設にする（toc.css の .toc-fits）。
       左 20px ＋ 幅 206px ＋ 間 16px = 242px */
    const content = root.querySelector('#main-content');
    const fit = () => {
        if (!content) return;
        /* .container は左右に padding を持つので、文字の始まる位置で測る */
        const textLeft = content.getBoundingClientRect().left + parseFloat(getComputedStyle(content).paddingLeft || 0);
        document.body.classList.toggle('toc-fits', textLeft >= 242);
    };
    window.addEventListener('resize', fit, { passive: true });
    fit();
}
