#!/usr/bin/env node
// wiki-access-lint.mjs — 鎖の不変条件の pd 側執行 (pd#114 / cs#252)
//
// 原則「持つ(誰でも検証可)→読む→解釈→まとめる→公開」。
// 取得不能(citation-only / blocked-access)な cs 原典の上に pd の公開解説ページを置いてはならない。
// wiki/sources/ の各ページ frontmatter `manifest_id` を cs manifest の access_status に突合し、
// 取得不能原典に対応するページがあれば FAIL する。
//
// cs#228: pd は cs manifest を「生成入力」として読む(これは許容)。cs の状態を強制はしない。
// 違反検出時は当該ページを削除し、cs 側で read-list 化する(cs#252)。
//
// exit 0 = OK / exit 1 = 違反あり

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const pdRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourcesDir = join(pdRoot, 'wiki', 'sources');
const manifestPath = join(pdRoot, '..', 'creation-space', 'knowledge', 'raw', 'manifest.md');

if (!existsSync(sourcesDir)) {
  console.log('SKIP — wiki/sources/ なし');
  process.exit(0);
}
if (!existsSync(manifestPath)) {
  console.log('SKIP — cs manifest が見つからない (creation-space 未配置)');
  process.exit(0);
}

// cs manifest: source_id -> access_status
const access = {};
for (const line of readFileSync(manifestPath, 'utf8').split('\n')) {
  const m = line.match(/^\|\s*(D\d+-S\d+[a-z]?)\s*\|\s*D\d+\s*\|\s*`([a-z-]+)`/);
  if (m) access[m[1]] = m[2];
}

const INACCESSIBLE = new Set(['citation-only', 'blocked-access']);
const violations = [];
for (const f of readdirSync(sourcesDir).filter((x) => x.endsWith('.md'))) {
  const t = readFileSync(join(sourcesDir, f), 'utf8');
  const m = t.match(/manifest_id:\s*"?(D\d+-S\d+[a-z]?)"?/);
  if (!m) continue; // manifest_id なし(awareness-model 等)はスキップ
  const sid = m[1];
  if (INACCESSIBLE.has(access[sid])) {
    violations.push({ f, sid, status: access[sid] });
  }
}

console.log(`[wiki-access-lint] wiki/sources ${readdirSync(sourcesDir).filter((x) => x.endsWith('.md')).length}ページ / cs原典 ${Object.keys(access).length}本`);
if (violations.length) {
  console.log(`  FAIL — 取得不能原典に wiki ページが存在 (${violations.length}件): 削除し cs 側で read-list 化すること (cs#252)`);
  for (const v of violations) console.log(`        ${v.sid} (${v.status}) -> wiki/sources/${v.f}`);
  process.exit(1);
}
console.log('  OK — 取得不能原典に対応する wiki/sources ページなし');
process.exit(0);
