// 採点関数の単体テスト（README §4 の規則どおりか）。実行: node knowledge/research/stages-screener/test-screener-score.mjs
// src/reader-screener.js はブラウザ向けの ES module（package.json が無く node では CJS 扱い）なので data URL で読む。
import fs from 'node:fs';

const root = new URL('../../../', import.meta.url);
const code = fs.readFileSync(new URL('src/reader-screener.js', root), 'utf8');
const { score, shuffled, MIN_FOR_POSITION } = await import('data:text/javascript,' + encodeURIComponent(code));
const data = JSON.parse(fs.readFileSync(new URL('knowledge/research/stages-screener/screener-data.json', root), 'utf8'));
const B = data.bands;
const ids = B.map(b => b.id);

let fail = 0;
const eq = (got, want, msg) => {
    const ok = JSON.stringify(got) === JSON.stringify(want);
    if (!ok) fail += 1;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${msg}${ok ? '' : ` — got ${JSON.stringify(got)} want ${JSON.stringify(want)}`}`);
};
const fill = (n, v) => Array(n).fill(v);

eq(B.map(b => b.points), [0, 1, 2, 3, 4], 'points: 〜3.5=0 … 6.5=4');
eq(data.questions.length, 16, '16 questions');
eq(data.questions.every(q => q.options.map(o => o.band).join() === ids.join()), true, 'every question has one option per band');
eq(score(fill(16, 'b65'), B).closeness, 100, 'all 6.5 → 100');
eq(score(fill(16, 'b35'), B).closeness, 0, 'all 〜3.5 → 0');

let r = score([...fill(6, 'b40'), ...fill(6, 'b50'), ...fill(4, 'b35')], B);
eq(r.closeness, Math.round((6 * 1 + 6 * 2) / 16 / 4 * 100), 'closeness = avg / 4 × 100');
eq(r.top, ['b40', 'b50'], 'tie → both top (no transition judgment)');
eq('transition' in r, false, 'no transition field (removed 2026-10-24)');

r = score([...fill(5, 'b40'), ...fill(6, 'b50'), ...fill(5, 'b60')], B);
eq(r.top, ['b50'], '5/6/5 → top 5.0〜5.5');

r = score([...fill(MIN_FOR_POSITION - 1, 'b60'), ...fill(16 - MIN_FOR_POSITION + 1, null)], B);
eq([r.answered, r.closeness, r.top], [MIN_FOR_POSITION - 1, 75, []], 'fewer than MIN_FOR_POSITION answers → closeness only');

r = score([...fill(4, null), ...fill(4, 'b40'), ...fill(4, 'b50'), ...fill(5, 'b65')].slice(0, 16), B);
eq([r.answered, r.counts.b65], [12, 4], 'skipped questions excluded from counts');

eq(score(fill(16, null), B).closeness, null, 'nothing answered → null');
eq([...shuffled(5)].sort(), [0, 1, 2, 3, 4], 'shuffle is a permutation');

console.log(fail ? `${fail} FAILED` : 'ALL CHECKS PASSED');
process.exitCode = fail ? 1 : 0;
