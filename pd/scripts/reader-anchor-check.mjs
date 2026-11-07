#!/usr/bin/env node
// reader-anchor-check.mjs — READER 公開ページの内部アンカー健全性チェック (pd#129)
//
// 動機: energy-flow READER で本文の「§2/§3/§4/§5」等の相互参照がプレーンテキストの
// ままクリックできない欠陥が公開まで通ってしまった（回遊性/内部リンク健全性が
// 品質ループのブラインドスポットだった）。その回帰を構造的に防ぐ。
//
// 検査対象: reader/*.html の内部リンク href="#..." が、同ページ内の実在 id に
// 解決するか。解決しない（宙に浮いた）リンクがあれば FAIL する。
// build-reader-lp.py は pandoc の gfm_auto_identifiers で見出し id を振るため、
// 正本 MD 側で節見出しに合わせて手書きした <a href="#..."> がズレると壊れる。
//
// exit 0 = OK / exit 1 = 破損アンカーあり

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const pdRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const readerDir = join(pdRoot, 'reader');

if (!existsSync(readerDir)) {
  console.log('SKIP — reader/ なし');
  process.exit(0);
}

const files = readdirSync(readerDir).filter((x) => x.endsWith('.html'));
if (!files.length) {
  console.log('SKIP — reader/*.html なし');
  process.exit(0);
}

let broken = 0;
let totalLinks = 0;
for (const f of files) {
  const html = readFileSync(join(readerDir, f), 'utf8');
  // 属性のクオート（" / '）と大小文字（id/ID・href/HREF）を許容して捕捉する。
  // ダブルクオート小文字限定だと、将来 build や手書きが href='#..' や HREF を出した
  // 場合に壊れアンカーを見逃す（偽陰性）——今回直した「観点の穴」の縮小版を塞ぐ。
  const ids = new Set(
    [...html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)].map((m) => m[2]),
  );
  // 内部リンクのみ（href="#..." で "#" 単独は除外）。decodeURIComponent で
  // %エンコードされたマルチバイト id にも対応する。
  const hrefs = [...html.matchAll(/\bhref\s*=\s*(["'])#(.*?)\1/gi)]
    .map((m) => { try { return decodeURIComponent(m[2]); } catch { return m[2]; } })
    .filter((h) => h);
  totalLinks += hrefs.length;
  const missing = hrefs.filter((h) => !ids.has(h));
  if (missing.length) {
    broken += missing.length;
    console.log(`  [FAIL] ${f}: ${missing.length} 件の破損アンカー`);
    for (const h of [...new Set(missing)]) console.log(`         → #${h}`);
  } else {
    console.log(`  [PASS] ${f}: 内部アンカー ${hrefs.length} 件すべて解決`);
  }
}

console.log('');
if (broken) {
  console.log(`NG — 破損アンカー ${broken} 件（正本 MD の <a href="#..."> を見出し id に合わせて修正）`);
  process.exit(1);
}
console.log(`OK — reader ${files.length} ページ・内部アンカー ${totalLinks} 件すべて解決`);
process.exit(0);
