#!/usr/bin/env node
// 読み物の正本の「出典：」の行で、原典へのリンクが無い出典を数える。
//
//   node scripts/check-source-links.mjs            # 読み物ごとの数を出す（知らせるだけ）
//   node scripts/check-source-links.mjs --list     # リンクの無い出典を一件ずつ出す
//   node scripts/check-source-links.mjs --strict love-driven-dev,...   # 名指しした読み物に一件でもあれば 1 で終わる
//   node scripts/check-source-links.mjs --strict all --except <読み物>   # 名指しした読み物は知らせるだけ
//
// 公開ページの出典は、一件ごとに原典へのリンクを張る（docs/rules/sources.md §10・pjdhiro 2026-11-11
// 「LLM のハルシネーションなどをレビューするために原典チェックは必須」「原典への参照リンクはマナーとして義務に」）。
// 一行の中の出典は、括弧の外の「／」で分ける。分けた一件の中に Markdown のリンク（](）が一つも無ければ、リンクの無い出典と数える。
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = execSync('git rev-parse --show-toplevel').toString().trim();
const args = process.argv.slice(2);
const list = args.includes('--list');
const si = args.indexOf('--strict');
const strict = si >= 0 ? (args[si + 1] || '').split(',').filter(Boolean) : [];
const ei = args.indexOf('--except');
const except = ei >= 0 ? (args[ei + 1] || '').split(',').filter(Boolean) : [];

const base = path.join(root, 'pd/knowledge/research');
const files = [];
for (const d of fs.readdirSync(base)) {
  const dir = path.join(base, d);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) if (/^READER-.*\.md$/.test(f)) files.push(path.join(dir, f));
}

function splitTop(s) {
  const out = []; let depth = 0; let cur = '';
  for (const ch of s) {
    if ('（('.includes(ch)) depth++;
    if ('）)'.includes(ch)) depth--;
    if (ch === '／' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out;
}

let bad = 0;
for (const f of files.sort()) {
  const name = path.basename(f).replace(/^READER-|\.md$/g, '');
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  const miss = [];
  lines.forEach((l, i) => {
    if (!l.startsWith('出典：')) return;
    for (const it of splitTop(l.slice(3))) {
      if (it.trim() && !it.includes('](')) miss.push(`${i + 1}: ${it.trim().slice(0, 90)}`);
    }
  });
  if (!miss.length) continue;
  const isStrict = (strict.includes('all') || strict.includes(name)) && !except.includes(name);
  if (isStrict) bad += miss.length;
  console.log(`${isStrict ? '止める' : '知らせる'}  ${name}：リンクの無い出典 ${miss.length} 件（${path.relative(root, f)}）`);
  if (list || isStrict) for (const m of miss) console.log(`    ${m}`);
}
if (bad) { console.log(`原典へのリンクの無い出典が ${bad} 件。一件ごとに DOI か読んだ写しへのリンクを張る（docs/rules/sources.md §10）`); process.exit(1); }
