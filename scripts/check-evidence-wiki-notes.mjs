#!/usr/bin/env node
// 調査の記録（cs/evidence/evidence-D*.md・as/evidence/evidence-A*.md）が書いた「wiki の頁「…」のここが誤り」の行を拾い、
// 指された wiki の頁が、その行が書かれたあとに変わっていないものを並べる。
//
// なぜ要るか（2026-11-10・#111・レビューの R-16）：wiki の古いページの知らせ（pd/scripts/wiki-stale-check.mjs）は、
// 出典の正本（精読ノートなど）が変わったときにだけ出る。記録に「wiki の頁のここが誤り」と書いても、正本が変わらなければ
// どこにも出ず、誤りが wiki に残った。
//
// 見方：
//   - 記録の行のうち「wiki の頁「<名前>」」を含むものを拾う。名前は「Bott 1988」のような第一著者と年。
//   - 頁は pd/wiki/sources/ の、その分野（D01 など）の番号で始まり、名前の語を全部含むファイル。
//     分野の番号で始まる頁に無ければ、番号の無い頁からも探す。
//   - 行が書かれた時刻（git blame）と、頁が最後に変わった時刻（git log）を比べる。
//       直っていない    ：頁が、行より後に変わっていない
//       変わった        ：頁が、行より後に変わった（直ったかどうかは機械では分からない。目で確かめる）
//       頁が見つからない：名前から頁を決められない（頁が消えた・名前が違う）
//   - 行に「直しました」「直した（」など、直したことを書き足してある行は「済み」として数えない。
//
// 使い方：
//   node scripts/check-evidence-wiki-notes.mjs            直っていないものと、頁が見つからないものの一覧
//   node scripts/check-evidence-wiki-notes.mjs --all      変わったもの・済みも並べる
//   node scripts/check-evidence-wiki-notes.mjs --count    数だけ（scripts/check.sh が使う。知らせるだけで、いつも 0 で終わる）
//   --dir <置き場>  記録の置き場を替える（確かめのときだけ。git に無いファイルは、行の時刻を今として扱う）
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
const args = process.argv.slice(2);
const showAll = args.includes('--all');
const countOnly = args.includes('--count');
const dirArg = args.indexOf('--dir') >= 0 ? args[args.indexOf('--dir') + 1] : null;

const git = (a) => {
  try {
    return execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return '';
  }
};

const WIKI = 'pd/wiki/sources';
const pages = existsSync(join(ROOT, WIKI)) ? readdirSync(join(ROOT, WIKI)).filter((n) => n.endsWith('.md')) : [];
const fold = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

function findPages(domain, label) {
  const tokens = fold(label)
    .split(/[^a-z0-9]+/)
    .filter((t) => t && !['and', 'et', 'al'].includes(t));
  if (tokens.length === 0) return [];
  const hit = (n) => {
    const parts = fold(n.replace(/\.md$/, '')).split(/[^a-z0-9]+/);
    const squashed = parts.join('');
    // 語は、名前の一区切りと同じか、4 字以上ならその頭。区切りなしでつながった名前（vangennep）は、3 字以上の語を中に探す
    return tokens.every(
      (t) => parts.some((p) => p === t || (t.length >= 4 && p.startsWith(t))) || (t.length >= 3 && !/^\d+$/.test(t) && squashed.includes(t)),
    );
  };
  const own = pages.filter((n) => domain && n.startsWith(domain + '_') && hit(n));
  if (own.length) return own;
  return pages.filter((n) => !/^[DA]\d\d_/.test(n) && hit(n));
}

const pageTime = new Map();
function changedAt(page) {
  if (!pageTime.has(page)) {
    const t = Number(git(['log', '-1', '--format=%ct', '--', `${WIKI}/${page}`]).trim() || 0);
    pageTime.set(page, t);
  }
  return pageTime.get(page);
}

// 記録の一行ずつの時刻（git blame）。git に無いファイルは今の時刻。
function lineTimes(rel) {
  const out = git(['blame', '--line-porcelain', '--', rel]);
  const times = [];
  if (!out) return null;
  let t = 0;
  for (const l of out.split('\n')) {
    if (l.startsWith('committer-time ')) t = Number(l.slice(15));
    else if (l.startsWith('\t')) times.push(t);
  }
  return times;
}

const sets = dirArg
  ? [[dirArg, /^evidence-([DA]\d\d)-.*\.md$/]]
  : [
      ['cs/evidence', /^evidence-(D\d\d)-.*\.md$/],
      ['as/evidence', /^evidence-(A\d\d)-.*\.md$/],
    ];

const DONE = /直しました|直した（|直し済|済み（|（済）|作り直しました|作り直した（/;
const rows = [];
for (const [dir, re] of sets) {
  const abs = dir.startsWith('/') ? dir : join(ROOT, dir);
  if (!existsSync(abs)) continue;
  for (const name of readdirSync(abs).sort()) {
    const m = re.exec(name);
    if (!m) continue;
    const domain = m[1];
    const rel = dir.startsWith('/') ? null : `${dir}/${name}`;
    const lines = readFileSync(join(abs, name), 'utf8').split('\n');
    const times = rel ? lineTimes(rel) : null;
    const now = Math.floor(Date.now() / 1000);
    lines.forEach((line, i) => {
      if (!line.includes('wiki の頁「')) return;
      const labels = [...line.matchAll(/wiki の頁「([^」]+)」/g)].map((x) => x[1]);
      const at = times && times[i] ? times[i] : now;
      for (const label of [...new Set(labels)]) {
        const found = findPages(domain, label);
        let state;
        if (DONE.test(line)) state = '済み';
        else if (found.length === 0) state = '頁が見つからない';
        else if (found.every((p) => changedAt(p) <= at)) state = '直っていない';
        else state = '変わった';
        rows.push({ file: `${dir.startsWith('/') ? '' : dir + '/'}${name}`, n: i + 1, label, found, state, text: line.trim() });
      }
    });
  }
}

const by = (s) => rows.filter((r) => r.state === s);
const open = by('直っていない');
const lost = by('頁が見つからない');
const moved = by('変わった');
const done = by('済み');

if (countOnly) {
  console.log(
    `   記録が書いた wiki の誤り ${rows.length} 件：頁がそのあと変わっていない ${open.length}・頁が見つからない ${lost.length}・頁が変わった（目で確かめる）${moved.length}・済みと書いてある ${done.length}`,
  );
  if (open.length + lost.length > 0) console.log('   一覧：node scripts/check-evidence-wiki-notes.mjs');
  process.exit(0);
}

const cut = (s, n) => (Array.from(s).length > n ? Array.from(s).slice(0, n).join('') + '…' : s);
const show = (title, list) => {
  console.log(`## ${title}（${list.length}）`);
  for (const r of list) {
    console.log(`- ${r.file}:${r.n} 「${r.label}」${r.found.length ? ' → ' + r.found.map((p) => `${WIKI}/${p}`).join('・') : ''}`);
    console.log(`    ${cut(r.text, 160)}`);
  }
  console.log('');
};
show('直っていない：頁が、記録の行より後に変わっていない', open);
show('頁が見つからない：名前から wiki の頁を決められない', lost);
if (showAll) {
  show('頁が変わった：直ったかどうかは目で確かめる', moved);
  show('済みと書いてある', done);
} else {
  console.log(`頁が変わった（目で確かめる）${moved.length}・済みと書いてある ${done.length} は --all で出る。`);
}
