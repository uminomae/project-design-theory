#!/usr/bin/env node
// 読み物の正本の「出典：」の行で、原典へのリンクが無い出典を数える。
//
//   node scripts/check-source-links.mjs            # 読み物ごとの数を出す（知らせるだけ）
//   node scripts/check-source-links.mjs --list     # リンクの無い出典を一件ずつ出す
//   node scripts/check-source-links.mjs --strict love-driven-dev,...   # 名指しした読み物に一件でもあれば 1 で終わる
//   node scripts/check-source-links.mjs --strict all --except <読み物>   # 名指しした読み物は知らせるだけ
//   node scripts/check-source-links.mjs --strict all,wiki   # wiki の出典ページの URL の無いものも止める
// 見るもの：pd の読み物の正本の「出典：」の行・四つの入口と cs/as/ks の読み物の「出典：」「Source:」の段・wiki の出典ページ。
//
// 公開ページの出典は、一件ごとに原典へのリンクを張る（docs/rules/sources.md §10・pjdhiro 2026-11-11
// 「LLM のハルシネーションなどをレビューするために原典チェックは必須」「原典への参照リンクはマナーとして義務に」）。
// 一行の中の出典は、括弧の外の「／」で分ける。分けた一件の中に Markdown のリンク（](）が一つも無ければ、リンクの無い出典と数える。
// リンクの無い出典には、同じ読み物の置き場の調べのノート（READER 以外の .md）から、著者名（と年）が同じ行にある URL を
// 「候補」として並べる。「写しが無い」「公開されていない」と言う前に、記録の確かめ先を見るため（型 K0 を 2026-11-12 に
// 三度繰り返した：LeaderFactor の reginfo.gov・愛着の研究 4 件の著者の写し・仙台いちごの版は、どれもノートに書いてあった）。
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

function candidates(dir, item) {
  const t = item.trim();
  const key = (t.match(/^[『「]?([^\s,&（(『「」』・]+)/) || [])[1];
  const year = (t.match(/\((\d{4})\)|（(\d{4})）/) || []).slice(1).find(Boolean);
  if (!key || key.length < 2) return [];
  const found = new Map();
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || /^READER-/.test(f)) continue;
    for (const l of fs.readFileSync(path.join(dir, f), 'utf8').split('\n')) {
      if (!l.includes(key) || (year && !l.includes(year))) continue;
      for (const u of l.match(/https?:\/\/[^\s）)|｜`<>\]、。]+/g) || []) if (!found.has(u)) found.set(u, f);
    }
  }
  return [...found].slice(0, 3).map(([u, f]) => `候補：${u}（${f}）`);
}

let bad = 0;
for (const f of files.sort()) {
  const name = path.basename(f).replace(/^READER-|\.md$/g, '');
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  const miss = [];
  lines.forEach((l, i) => {
    if (!l.startsWith('出典：')) return;
    for (const it of splitTop(l.slice(3))) {
      if (it.trim() && !it.includes('](')) {
        miss.push(`${i + 1}: ${it.trim().slice(0, 90)}`);
        for (const c of candidates(path.dirname(f), it)) miss.push(`      ${c}`);
      }
    }
  });
  if (!miss.length) continue;
  const count = miss.filter((m) => !m.startsWith('      ')).length;
  const isStrict = (strict.includes('all') || strict.includes(name)) && !except.includes(name);
  if (isStrict) bad += count;
  console.log(`${isStrict ? '止める' : '知らせる'}  ${name}：リンクの無い出典 ${count} 件（${path.relative(root, f)}）`);
  if (list || isStrict) for (const m of miss) console.log(`    ${m}`);
}
// 入口と cs・as・ks の読み物（HTML）：「出典：」「Source:」で始まる段に、リンクが一つも無いもの。読み物（pd）と同じく止める。
const htmlFiles = ['pd/index.html', 'cs/index.html', 'as/index.html', 'ks/index.html'];
for (const d of ['cs/reader', 'as/reader', 'ks/reader']) {
  const dir = path.join(root, d);
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir)) if (f.endsWith('.html')) htmlFiles.push(`${d}/${f}`);
}
for (const rel of htmlFiles) {
  const f = path.join(root, rel);
  if (!fs.existsSync(f)) continue;
  const miss = [];
  fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => {
    const m = l.match(/>\s*(出典：|Source:)(.*)/);
    if (m && !/<a\s/.test(m[2])) miss.push(`${i + 1}: ${m[1]}${m[2].replace(/<[^>]+>/g, '').slice(0, 80)}`);
  });
  if (!miss.length) continue;
  const isStrict = strict.includes('all') && !except.includes(rel);
  if (isStrict) bad += miss.length;
  console.log(`${isStrict ? '止める' : '知らせる'}  ${rel}：リンクの無い出典 ${miss.length} 件`);
  for (const m of miss) console.log(`    ${m}`);
}

// wiki の出典ページ（pd/wiki/sources/）：一ページが一つの原典なので、URL が一つも無いページを数える。
// 2026-11-12 に 13 ページあり、同じ日に 0 にした（間主観性のまとめの 4 ページは、主要著作 49 に一つずつ張った。pjdhiro「著作ごとに張る」）。
// scripts/check.sh は --strict all,wiki で止める。
const wdir = path.join(root, 'pd/wiki/sources');
if (fs.existsSync(wdir)) {
  const noUrl = fs.readdirSync(wdir).filter((f) => f.endsWith('.md') && !/https?:\/\//.test(fs.readFileSync(path.join(wdir, f), 'utf8')));
  if (noUrl.length) {
    const isStrict = strict.includes('wiki');
    if (isStrict) bad += noUrl.length;
    console.log(`${isStrict ? '止める' : '知らせる'}  wiki の出典ページ：URL の無いページ ${noUrl.length} 件（pd/wiki/sources/）`);
    if (list || isStrict) for (const f of noUrl) console.log(`    ${f}`);
  }
}

if (bad) { console.log(`原典へのリンクの無い出典が ${bad} 件。一件ごとに DOI か読んだ写しへのリンクを張る。候補は調べのノートにある URL。「無い」と言う前に開く（docs/rules/sources.md §10）`); process.exit(1); }
