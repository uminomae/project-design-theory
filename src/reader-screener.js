// Reader スクリーナー — 16問×5択の自己スクリーニング（knowledge/research/stages-screener/README.md §4・§10）。
// データの正本は screener-data.json。ビルドがページに <script type="application/json" id="screener-data"> で埋め込み、
// 同じ内容を no-JS 用の静的リストにも書き出す。本モジュールは静的リストを対話 UI に置き換えるだけ。
// 回答はどこにも保存しない（localStorage も使わない）。どの問も飛ばせる（関門にしない・DESIGN-RULES §12）。
// DESIGN-RULES §0a 準拠: tokens と glow 体系の上にのみ載せる。依存ライブラリなし（vanilla）。

const KEYS = ['A', 'B', 'C', 'D', 'E'];
// 位置（最多の帯）を出す最小の回答数。これ未満は分布だけを示す
// 移行期の判定は置かない。分布はグラデーションとして本人が読み取る（pjdhiro 2026-10-24）
export const MIN_FOR_POSITION = 8;
const CARE = '数字は優劣ではありません。どの帯も、次の見方へ移る途中の一つの場所です。';

// answers: 問ごとの帯 id（未回答は null）。bands: points（6.5 への近さ 0〜4）の昇順
export function score(answers, bands) {
    const byId = Object.fromEntries(bands.map(b => [b.id, b]));
    const picked = answers.filter(a => a && byId[a]);
    const n = picked.length;
    const counts = Object.fromEntries(bands.map(b => [b.id, 0]));
    picked.forEach(a => { counts[a] += 1; });
    if (n === 0) return { answered: 0, closeness: null, counts, top: [] };

    const avg = picked.reduce((s, a) => s + byId[a].points, 0) / n;
    const closeness = Math.round(avg / 4 * 100);
    if (n < MIN_FOR_POSITION) return { answered: n, closeness, counts, top: [] };

    const max = Math.max(...Object.values(counts));
    const top = bands.filter(b => counts[b.id] === max).map(b => b.id);
    return { answered: n, closeness, counts, top };
}

export function shuffled(len, rand = Math.random) {
    const a = [...Array(len).keys()];
    for (let i = len - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
}

function button(label, cls, onClick) {
    const b = el('button', cls, label);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
}

function bandName(b) {
    return `${b.label} ${b.name}（${b.phrase}）`;
}

function mount(root, data) {
    const { bands, questions } = data;
    const byId = Object.fromEntries(bands.map(b => [b.id, b]));
    let answers, perms, cur;

    const ui = el('div', 'screener-ui');
    const status = el('p', 'screener-status');
    status.setAttribute('aria-live', 'polite');
    root.replaceChildren(ui, status);

    function reset() {
        answers = questions.map(() => null);
        perms = questions.map(q => shuffled(q.options.length));
        cur = 0;
    }

    function renderStart() {
        ui.replaceChildren(
            el('p', 'screener-lead', `全${questions.length}問、各問5つの選択肢から、ふだんの自分にいちばん近いものを1つ選びます。選択肢の並びは問ごとにランダムです。迷う問は飛ばせます。`),
            button('Q1 から始める', 'screener-btn is-primary', () => { reset(); renderQuestion(); }),
        );
        status.textContent = '';
    }

    function renderQuestion() {
        const q = questions[cur];
        const head = el('div', 'screener-progress');
        head.append(el('span', null, `Q${cur + 1} / ${questions.length}`), el('span', null, `回答 ${answers.filter(Boolean).length}`));
        const bar = el('div', 'screener-bar');
        const fill = el('i');
        fill.style.width = `${cur / questions.length * 100}%`;
        bar.append(fill);

        const qp = el('p', 'screener-question', `Q${cur + 1}. ${q.text}`);
        qp.id = 'screener-q-text';
        const opts = el('div', 'screener-options');
        opts.setAttribute('role', 'group');
        opts.setAttribute('aria-labelledby', qp.id);
        perms[cur].forEach((oi, pos) => {
            const o = q.options[oi];
            const b = button('', 'screener-option', () => pick(o.band));
            b.append(el('b', null, KEYS[pos]), el('span', null, o.text));
            const on = answers[cur] === o.band;
            b.classList.toggle('is-picked', on);
            b.setAttribute('aria-pressed', String(on));
            opts.append(b);
        });

        const parts = [head, bar, qp, opts];
        const notes = perms[cur].map(oi => q.options[oi]).filter(o => o.note || o.example);
        if (notes.length) {
            const d = el('details', 'screener-notes');
            d.append(el('summary', null, '選択肢の補足と例'));
            const dl = el('dl');
            perms[cur].forEach((oi, pos) => {
                const o = q.options[oi];
                if (!o.note && !o.example) return;
                const dd = el('dd');
                if (o.note) dd.append(el('span', null, o.note));
                if (o.example) dd.append(el('span', 'screener-example', `例：${o.example}`));
                dl.append(el('dt', null, KEYS[pos]), dd);
            });
            d.append(dl);
            parts.push(d);
        }
        const nav = el('div', 'screener-nav');
        const back = button('前の問に戻る', 'screener-btn', () => { cur -= 1; renderQuestion(); });
        back.disabled = cur === 0;
        nav.append(back, button(cur === questions.length - 1 ? '飛ばして結果を見る' : 'この問を飛ばす', 'screener-btn', () => { answers[cur] = null; next(); }));
        parts.push(nav);
        ui.replaceChildren(...parts);
        status.textContent = '';
        opts.querySelector('.screener-option')?.focus({ preventScroll: true });
    }

    function pick(band) {
        answers[cur] = band;
        next();
    }

    function next() {
        if (cur < questions.length - 1) {
            cur += 1;
            renderQuestion();
        } else {
            renderResult();
        }
    }

    function exportText(r) {
        const lines = [];
        lines.push(r.closeness == null ? '6.5 への近さ：回答なし' : `6.5 への近さ：${r.closeness}（0〜100・${r.answered}問に回答）`);
        lines.push(CARE);
        if (r.top.length) lines.push(`いまの位置（参考）：${r.top.map(id => byId[id].label).join('・')}`);
        lines.push(`帯ごとの回答数：${bands.map(b => `${b.label}=${r.counts[b.id]}`).join(' ')}`);
        lines.push('回答：');
        questions.forEach((q, i) => {
            const a = answers[i];
            const o = a && q.options.find(x => x.band === a);
            lines.push(`Q${i + 1} ${q.text} → ${o ? `${o.text}（${byId[a].label}）` : '（飛ばした）'}`);
        });
        lines.push(`出典：${location.href.split(/[?#]/)[0]}`);
        return lines.join('\n');
    }

    function renderResult() {
        const r = score(answers, bands);
        const parts = [];

        const label = el('p', 'screener-label', '6.5 への近さ');
        label.tabIndex = -1;
        parts.push(label);
        const big = el('p', 'screener-closeness', r.closeness == null ? '—' : String(r.closeness));
        big.append(el('small', null, r.closeness == null ? '回答がありません' : ` / 100（${r.answered}問に回答）`));
        parts.push(big);
        const meter = el('div', 'screener-meter');
        const mi = el('i');
        mi.style.width = `${r.closeness ?? 0}%`;
        meter.append(mi);
        parts.push(meter);
        parts.push(el('p', 'screener-small', CARE));
        parts.push(el('p', 'screener-small', '選んだ選択肢の帯を 〜3.5=0、4.0〜4.5=1、5.0〜5.5=2、6.0=3、6.5=4 として平均し、100 点に換算したものです。飛ばした問は数えません。'));

        parts.push(el('p', 'screener-label', 'いまの位置（参考）'));
        let pos;
        if (r.answered < MIN_FOR_POSITION) pos = `回答が ${MIN_FOR_POSITION} 問に満たないため、位置は出していません。下の分布だけを見てください。`;
        else pos = r.top.map(id => bandName(byId[id])).join('／');
        parts.push(el('p', 'screener-position', pos));
        const dist = el('table', 'screener-dist');
        const max = Math.max(1, ...Object.values(r.counts));
        [...bands].reverse().forEach(b => {
            const tr = el('tr');
            const m = el('div', 'screener-meter');
            const i = el('i');
            i.style.width = `${r.counts[b.id] / max * 100}%`;
            m.append(i);
            const td = el('td');
            td.append(m);
            tr.append(el('th', null, b.label), td, el('td', 'screener-num', `${r.counts[b.id]}問`));
            dist.append(tr);
        });
        parts.push(dist);
        parts.push(el('p', 'screener-small', 'いちばん多い帯を位置としていますが、帯の境目ははっきり分かれるものではありません。どの帯にどれだけ広がっているかを、グラデーションとして読み取ってください。'));

        parts.push(el('p', 'screener-label', 'あなたの回答と対応する帯'));
        const list = el('div', 'screener-answers');
        questions.forEach((q, i) => {
            const a = answers[i];
            const d = el('details');
            const sm = el('summary');
            const o = a && q.options.find(x => x.band === a);
            sm.append(el('span', 'screener-qn', `Q${i + 1}`), el('span', null, o ? o.text : '（飛ばした）'), el('span', 'screener-chip', a ? byId[a].label : '—'));
            const ul = el('ul');
            q.options.forEach(x => {
                const li = el('li', x.band === a ? 'is-mine' : null, `${byId[x.band].label}：${x.text}`);
                ul.append(li);
            });
            d.append(sm, ul);
            list.append(d);
        });
        parts.push(list);

        parts.push(el('p', 'screener-label', '結果を書き出す'));
        const out = el('pre', 'screener-out', exportText(r));
        const note = el('span', 'screener-small');
        note.setAttribute('aria-live', 'polite');
        const copy = button('コピー', 'screener-btn is-primary', () => {
            navigator.clipboard?.writeText(out.textContent).then(
                () => { note.textContent = 'コピーしました'; },
                () => { note.textContent = '選択してコピーしてください'; },
            );
        });
        const row = el('div', 'screener-nav');
        row.append(copy, note);
        parts.push(out, row);
        parts.push(el('p', 'screener-small', '書き出したテキストを好きな AI に貼ると、結果について話せます。'));

        const again = el('div', 'screener-nav');
        again.append(button('最初からやり直す', 'screener-btn', () => renderStart()));
        parts.push(again);

        ui.replaceChildren(...parts);
        status.textContent = `結果：6.5 への近さ ${r.closeness ?? '—'}。いまの位置（参考）：${pos}`;
        root.scrollIntoView({ block: 'start' });
        label.focus({ preventScroll: true });
    }

    root.addEventListener('keydown', e => {
        if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || !ui.querySelector('.screener-options')) return;
        const k = KEYS.indexOf(e.key.toUpperCase());
        if (k >= 0 && k < perms[cur].length) {
            e.preventDefault();
            pick(questions[cur].options[perms[cur][k]].band);
        }
    });

    renderStart();
}

function init() {
    document.querySelectorAll('[data-screener]').forEach(root => {
        try {
            const src = document.getElementById(root.getAttribute('data-screener'));
            mount(root, JSON.parse(src.textContent));
            root.classList.add('screener-ready');
        } catch (err) {
            console.warn('reader-screener enhance failed:', err);
        }
    });
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
}

// 「Claude で再現する」のプロンプトをコピーするボタン（ビルドが <!--CLAUDE-PROMPT--> に置く）
// node の採点テストはこのモジュールを読み込むだけなので、document がないときは何もしない
if (typeof document !== 'undefined') document.querySelectorAll('[data-copy]').forEach((btn) => {
    const target = document.getElementById(btn.dataset.copy);
    if (!target) return;
    const label = btn.textContent;
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(target.textContent);
            btn.textContent = 'コピーしました';
        } catch {
            // クリップボードが使えない環境では、全文を選択して手でコピーできるようにする
            const range = document.createRange();
            range.selectNodeContents(target);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            btn.textContent = '全文を選択しました（コピーしてください）';
        }
        setTimeout(() => { btn.textContent = label; }, 2500);
    });
});
