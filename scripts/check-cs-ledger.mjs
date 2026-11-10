#!/usr/bin/env node
// 創造とはの原典の台帳（cs/knowledge/raw/manifest.md）を、照合の記録（cs/evidence/evidence-D*.md）と突き合わせる。
// 記録の形の点検（scripts/check-cs-evidence.mjs）は台帳を見ていないので、別に置いた（2026-11-10・#111 束 8・レビューの T-3）。
// 今の develop で当たりがあるので、落とさずに数を知らせる（--strict で 1 で終わる）。
//
// 見るもの：
//   1. 記録が「本文照合済」とした原典の行が、台帳では読めない状態（blocked-access・citation-only）のままになっていないか。
//      - 記録の「**照合の状態**：」の行を、論ごとの節（### 1. …（著者 年））ごとに読む。
//      - 「<著者 年> は本文照合済」と名指してある原典を拾う。名指しが無く「本文照合済（…）」で始まるときは、
//        節の題の括弧に書いてある原典を指すと読む。題に原典が二つ以上あるときは、どれを読んだか分からないので、
//        台帳に行があるものがどれも読めない状態のときだけ知らせる。
//      - 台帳の、その分野の行のうち、書誌に第一著者の姓と年の両方がある行を当てる。
//        当たった行がどれも読めない状態なら知らせる。行が一つも当たらない原典は数だけ出す。
//   2. 台帳の行で、2 列目（分野の番号）に状態の語が入り、列がずれているもの（状態が二つ並び、どちらが今の状態か分からない）。
//
// 使い方：
//   node scripts/check-cs-ledger.mjs            一覧
//   node scripts/check-cs-ledger.mjs --count    数だけ（scripts/check.sh が使う。いつも 0 で終わる）
//   node scripts/check-cs-ledger.mjs --strict   当たりがあれば 1 で終わる
//   --root <置き場>  見る根を替える（確かめのときだけ）
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const args = process.argv.slice(2);
const opt = (k) => (args.indexOf(k) >= 0 ? args[args.indexOf(k) + 1] : null);
const ROOT = opt('--root') || execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
const countOnly = args.includes('--count');
const strict = args.includes('--strict');

const LEDGER = 'cs/knowledge/raw/manifest.md';
const STATES = ['raw-confirmed', 'url-verified', 'citation-only', 'blocked-access'];
const READABLE = new Set(['raw-confirmed', 'url-verified']);
const fold = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

if (!existsSync(join(ROOT, LEDGER))) {
  console.log(`   台帳が無い：${LEDGER}`);
  process.exit(strict ? 1 : 0);
}

// ---- 台帳
const rows = [];
const twoStates = [];
readFileSync(join(ROOT, LEDGER), 'utf8')
  .split('\n')
  .forEach((line, i) => {
    if (!/^\|\s*D\d\d-S\d+/.test(line)) return;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    const id = cells[0];
    const domain = id.slice(0, 3);
    const found = [];
    cells.slice(1, 3).forEach((c) => {
      const s = STATES.find((x) => c.replace(/`/g, '') === x);
      if (s) found.push(s);
    });
    const uniq = [...new Set(found)];
    if (!/^D\d\d$/.test(cells[1])) twoStates.push({ n: i + 1, id, states: found });
    rows.push({ n: i + 1, id, domain, states: uniq, text: fold(cells.slice(1).join(' | ')) });
  });

// ---- 記録
// 「著者 年」の並びを取り出す。著者は頭が大文字の欧文の姓（Becker & Döring 1935・Ameta ら 2021 など）。
function labels(text) {
  const out = [];
  const re = /(\p{Lu}[\p{L}'’-]+)((?:\s*(?:&|,|and|ら|et al\.?)\s*|\s+)(?:\p{Lu}[\p{L}'’.-]*|ら|et al\.?|&|,|and|\s)*)?\s*[（(]?((?:1[5-9]|20)\d\d)(?![\d–-]*\s*頁)/gu;
  let m;
  while ((m = re.exec(text))) out.push({ author: m[1], year: m[3], label: `${m[1]} ${m[3]}` });
  return out;
}

const hits = [];
let named = 0;
let noRow = 0;
const files = existsSync(join(ROOT, 'cs/evidence'))
  ? readdirSync(join(ROOT, 'cs/evidence')).filter((n) => /^evidence-D\d\d-.*\.md$/.test(n)).sort()
  : [];
for (const name of files) {
  const domain = name.slice(9, 12);
  const lines = readFileSync(join(ROOT, 'cs/evidence', name), 'utf8').split('\n');
  let heading = '';
  lines.forEach((line, i) => {
    const h = /^###\s+(.*)$/.exec(line);
    if (h) {
      heading = h[1];
      return;
    }
    if (!line.startsWith('**照合の状態**')) return;
    const body = line.replace(/^\*\*照合の状態\*\*[：:]\s*/, '');
    const targets = [];
    const groups = [];
    for (const sent of body.split('。')) {
      const at = sent.indexOf('本文照合済');
      if (at < 0) continue;
      const subject = sent.slice(0, at);
      if (/は\s*$/.test(subject)) {
        targets.push(...labels(subject));
      } else if (subject.trim() === '') {
        const paren = /[（(]([^（）()]*)[）)]\s*$/.exec(heading);
        const hl = paren ? labels(paren[1]) : [];
        if (hl.length) groups.push(hl);
      }
    }
    const rowsOf = (t) => rows.filter((r) => r.domain === domain && r.text.includes(fold(t.author)) && r.text.includes(t.year));
    const readable = (rs) => rs.some((r) => r.states.some((s) => READABLE.has(s)));
    for (const t of targets) {
      named++;
      const matched = rowsOf(t);
      if (matched.length === 0) {
        noRow++;
        continue;
      }
      if (readable(matched)) continue;
      hits.push({ file: `cs/evidence/${name}`, n: i + 1, label: t.label, rows: matched });
    }
    // 名指しの無い「本文照合済」：節の題の原典のうち、台帳に行があるものがどれも読めない状態なら知らせる
    for (const g of groups) {
      named++;
      const matched = g.map(rowsOf).filter((rs) => rs.length);
      if (matched.length === 0) {
        noRow++;
        continue;
      }
      if (matched.some(readable)) continue;
      hits.push({ file: `cs/evidence/${name}`, n: i + 1, label: g.map((t) => t.label).join('・'), rows: matched.flat() });
    }
  });
}

const summary = `   記録が本文照合済とした原典 ${named} のうち、台帳の行が読めない状態のまま：${hits.length}（台帳に行が当たらない ${noRow}）。台帳の行で 2 列目に状態の語が入り列がずれている：${twoStates.length}`;
if (countOnly) {
  console.log(summary);
  if (hits.length + twoStates.length) console.log('   一覧：node scripts/check-cs-ledger.mjs');
  process.exit(0);
}
console.log(summary.trim());
console.log('');
console.log(`## 記録は本文照合済、台帳は読めない状態（${hits.length}）`);
for (const h of hits) {
  console.log(`- ${h.file}:${h.n} 「${h.label}」 → 台帳 ${h.rows.map((r) => `${r.n} 行（${r.states.join('・') || '状態なし'}）`).join('、')}`);
}
console.log('');
console.log(`## 台帳の行で、2 列目に状態の語が入り、列がずれている（${twoStates.length}）`);
for (const t of twoStates) console.log(`- ${LEDGER}:${t.n} ${t.states.join(' と ')}`);
process.exit(strict && hits.length + twoStates.length ? 1 : 0);
