#!/usr/bin/env node
// セッションの記録（本体の .cache/session/log-YYYYMMDD-*.md）の要点を出す。
// 呼び出しは scripts/session-digest.sh から（CLAUDE.md「セッションの記録」）。
//
// 既定（引数なし）：その日と前の日の記録を、一つにつき「ファイル名・題・## 要点 の頭の数行」だけ出す。
//   - 選び方は、名前の日付か、更新した日のどちらかがその二日に当たるもの
//     （前の日付の名前の記録に次の日に書き足した分を漏らさないため）。
//   - 行は文字で切る（バイトで切ると日本語が壊れる）。
//   - 全体が上限（既定 26,000 バイト。Bash の返す量〔30KB ほど〕に収まる大きさ）を超えるときは、
//     一つの記録から出す行の数と一行の長さを 5 行 → 3 → 2 → 1 → 1（短く）→ 0（題だけ）と減らす。
//   - 題からは、頭の日付と worktree の名前を外す（日付は名前に、worktree は記録の本文にある）。
// 話題や記録を指したとき（日付でない語を渡す）：名前か題にその語を含む記録の、
//   ## 要点・## ずれ・「残したこと」「次に回した」「引き継ぎ」「commit」の節を切らずに出す。日付は問わない。
// --full：選んだ記録の全部について、上の節を切らずに出す（大きい。ファイルに落として読む）。
// --list：題だけの一覧。
// --max <バイト数>：既定の上限を変える。
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const dates = [];
const words = [];
let full = false;
let listOnly = false;
let max = 26000;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--full') full = true;
  else if (a === '--list') listOnly = true;
  else if (a === '--max') max = Number(args[++i]);
  else if (a === '--dir') process.env.SESSION_DIGEST_DIR = args[++i];
  else if (a === '-h' || a === '--help') {
    console.log('使い方: bash scripts/session-digest.sh [YYYYMMDD ...] [話題の語 ...] [--full] [--list] [--max バイト数]');
    process.exit(0);
  } else if (/^\d{8}$/.test(a)) dates.push(a);
  else words.push(a);
}
if (!Number.isFinite(max) || max <= 0) {
  console.error('--max には正の数を渡す');
  process.exit(2);
}

let dir = process.env.SESSION_DIGEST_DIR;
if (!dir) {
  const common = execFileSync('git', ['rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim();
  dir = join(resolve(common, '..'), '.cache', 'session');
}

const ymd = (d) =>
  `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
if (dates.length === 0 && words.length === 0) {
  const now = new Date();
  const y = new Date(now);
  y.setDate(now.getDate() - 1);
  dates.push(ymd(y), ymd(now));
}

// 「## ずれ」の節を決めた commit（ab14df4・2026-11-09 14:08）より後に書かれた記録で、節が無いものを知らせる。
const ZURE_SINCE = new Date('2026-11-09T14:08:00+09:00').getTime();

let names;
try {
  names = readdirSync(dir).filter((n) => /^log-\d{8}-.*\.md$/.test(n)).sort();
} catch {
  console.error(`記録の置き場が無い：${dir}`);
  process.exit(1);
}

const records = [];
for (const name of names) {
  const path = join(dir, name);
  const st = statSync(path);
  const nameDate = name.slice(4, 12);
  const mDate = ymd(st.mtime);
  const text = readFileSync(path, 'utf8');
  const lines = text.split('\n');
  const title = (lines[0] || '')
    .replace(/^#+\s*/, '')
    .replace(/^\d{4}-\d{2}-\d{2}(〜\d+)?\s*/, '')
    .replace(/（worktree[:：]?\s*[\w-]+(・[^）]*)?）/, '')
    .replace(/\s*[・—―-]+\s*worktree[:：]?\s*[\w-]+/, '')
    .trim();
  const byDate = dates.includes(nameDate) || dates.includes(mDate);
  const byWord = words.length > 0 && words.every((w) => name.includes(w) || title.includes(w));
  let hit;
  if (words.length > 0 && dates.length > 0) hit = byDate && byWord;
  else if (words.length > 0) hit = byWord;
  else hit = byDate;
  if (!hit) continue;
  records.push({ name, title, lines, nameDate, mDate, mtime: st.mtime.getTime() });
}

// 節を取り出す。pick(見出しの行) が真の節の本文を返す（次の同じ深さ以上の見出しまで）。
function sections(lines, pick) {
  const out = [];
  let on = false;
  let depth = 0;
  for (let i = 1; i < lines.length; i++) {
    const m = /^(#+)\s+(.*)$/.exec(lines[i]);
    if (m) {
      if (on && m[1].length > depth) {
        out.push(lines[i]);
        continue;
      }
      on = pick(m[2]);
      depth = m[1].length;
      if (on) out.push(lines[i]);
      continue;
    }
    if (on) out.push(lines[i]);
  }
  return out;
}

const cut = (s, n) => {
  const chars = Array.from(s);
  return chars.length > n ? chars.slice(0, n).join('') + '…' : s;
};

function head(r, extra = '') {
  const moved = r.mDate !== r.nameDate ? `・${r.mDate.slice(4, 6)}-${r.mDate.slice(6)} に書き足し` : '';
  const noZure = r.mtime > ZURE_SINCE && !r.lines.some((l) => /^## ずれ/.test(l)) ? '・ずれの節なし' : '';
  return `=== ${r.name.replace(/^log-|\.md$/g, '')}｜${r.title}${moved}${noZure}${extra}`;
}

function brief(r, n, width) {
  const body = sections(r.lines, (h) => /^要点/.test(h))
    .slice(1)
    .filter((l) => l.trim() !== '' && !/^#+ /.test(l));
  const picked = body.slice(0, n).map((l) => cut(l, width));
  const more = body.length > n && n > 0 ? `・要点あと ${body.length - n} 行` : '';
  return [head(r, more), ...picked].join('\n');
}

function detail(r) {
  const body = sections(r.lines, (h) => /要点|ずれ|残したこと|次に回|引き継ぎ|commit/.test(h));
  return [head(r), ...body].join('\n').replace(/\n{3,}/g, '\n\n');
}

if (records.length === 0) {
  console.log(`当たる記録は無い（${[...dates, ...words].join(' ')}）。置き場：${dir}`);
  process.exit(0);
}

let out;
let note = '';
if (listOnly) {
  out = records.map((r) => head(r)).join('\n');
} else if (full || words.length > 0) {
  out = records.map(detail).join('\n\n');
} else {
  const steps = [
    [5, 140],
    [3, 120],
    [2, 100],
    [1, 100],
    [1, 60],
    [0, 0],
  ];
  for (const [n, width] of steps) {
    out = records.map((r) => brief(r, n, width)).join(n > 1 ? '\n\n' : '\n');
    if (Buffer.byteLength(out) <= max) {
      note = n === 5 ? '' : n === 0 ? '記録が多いので、題だけにした。' : `記録が多いので、要点は一つにつき ${n} 行・一行 ${width} 字までに減らした。`;
      break;
    }
    note = '題だけにしても上限を超えた。日付か話題の語で絞る。';
  }
}

console.log(out);
console.log('');
console.log(
  `--- 記録 ${records.length} 本・${Buffer.byteLength(out)} バイト。${note}` +
    (full || words.length > 0 || listOnly
      ? ''
      : '名前は log- と .md を外して出している。関わる記録は、話題の語で指すと「ずれ」「残したこと」「commit」まで出る（例：bash scripts/session-digest.sh cs-review）。'),
);
