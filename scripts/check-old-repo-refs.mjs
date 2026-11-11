// check-old-repo-refs.mjs — 今までの四つの repo を前提にした参照が、また入っていないかを見る。
//
//   node scripts/check-old-repo-refs.mjs
//
// 今までの repo（project-design・creation-space・awareness-space・kesson-space）は、2026-11-07 に
// この repo の pd/・cs/・as/・ks/ に移した。同じ名前の公開 repo は転送ページだけで、中身は
// 非公開のアーカイブ（<名前>-archive）にある。見るのは次の四つ。
//
//   1. 公開ファイルが、今までの repo の GitHub・raw・api の URL や、今までの Pages の URL を指していないか
//   2. 公開ファイルが、今の repo の GitHub（blob・tree・raw）で、git に無いファイルを指していないか
//      （原典の PDF の cs/knowledge/raw/ などは git に入れず手元だけに置くので、リンクすると切れる）
//   3. 公開ファイルのコードが、今までの repo の名前を repo として決め打ちしていないか（REPO="creation-space" など）
//   4. スクリプトが、今までの兄弟の並び（../pjdhiro・~/dev/creation-space など）を前提にしていないか
//      pjdhiro の repo は、2026-11-12 から使わない（#134）。場所を探していた scripts/pjdhiro-dir.* も消した
//
// 記録（knowledge・docs・wiki・evidence ほか）は経緯として残すので見ない。ただし、読み物の正本
// （READER-*.md）と、各ディレクトリの README.md は、読者が辿る入口なので見る。
// 一つでも見つかれば 1 で終わる。

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const OLD = '(?:project-design|creation-space|awareness-space|kesson-space)';
const END = '(?![-\\w])';

const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
const tracked = new Set(files);
const trackedDirs = new Set();
for (const f of files) {
  const parts = f.split('/');
  for (let i = 1; i < parts.length; i++) trackedDirs.add(parts.slice(0, i).join('/'));
}

const RECORD = /\/(knowledge|docs|evidence|transform|wiki|vendor|node_modules|quartz|tests)\//;
const isTemplate = (f) => /^(pd|cs)\/scripts\/[^/]*template\.html$/.test(f);
const isEntryMd = (f) => /^(pd|cs|as|ks)\/README\.md$/.test(f) || /\/READER-[^/]+\.md$/.test(f);
const publicFiles = files.filter((f) => {
  if (!/^(pd|cs|as|ks)\//.test(f)) return false;
  if (isTemplate(f) || isEntryMd(f)) return true;
  if (RECORD.test(f) || /^[a-z]+\/scripts\//.test(f)) return false;
  return /\.(html|js|mjs|css|txt|xml|json|svg)$/.test(f);
});
const scriptFiles = files.filter((f) =>
  (/^(pd|cs|as|ks)\/(scripts|transform\/scripts|tests)\//.test(f) || /^scripts\//.test(f) || /^\.github\//.test(f))
  && /\.(sh|mjs|js|cjs|py|json|ya?ml)$/.test(f)
  && f !== 'scripts/check-old-repo-refs.mjs');

const checks = [
  {
    name: '今までの repo の GitHub・raw・api の URL、今までの Pages の URL',
    files: publicFiles,
    patterns: [
      new RegExp(`github\\.com/uminomae/${OLD}${END}`),
      new RegExp(`raw\\.githubusercontent\\.com/uminomae/${OLD}${END}`),
      new RegExp(`api\\.github\\.com/repos/uminomae/${OLD}${END}`),
      new RegExp(`uminomae\\.github\\.io/${OLD}${END}`),
    ],
  },
  {
    name: '今までの repo の名前を repo として決め打ち',
    files: publicFiles,
    patterns: [
      new RegExp(`\\bREPO\\s*[=:]\\s*["'\`](?:uminomae/)?${OLD}["'\`]`),
      new RegExp(`["'\`]uminomae/${OLD}["'\`]`),
    ],
  },
  {
    name: 'スクリプトの、今までの兄弟の並びを前提にしたパス・repo',
    files: scriptFiles,
    patterns: [
      new RegExp(`\\.\\./(?:\\.\\./)*(?:pjdhiro|${OLD})${END}`),
      new RegExp(`["']\\.\\.["']\\s*,\\s*["'](?:pjdhiro|${OLD})["']`),
      new RegExp(`(?:dev|GitHub)/(?:pjdhiro|${OLD})${END}`),
      new RegExp(`(?:dev|GitHub)["']\\s*,\\s*["'](?:pjdhiro|${OLD})["']`),
      /(?:=|:-)\s*["']?pjdhiro["']?\s*(?:$|[}"'])/m,
      new RegExp(`(?:--repo|-R)\\s+["']?uminomae/${OLD}${END}`),
      new RegExp(`["'\`]uminomae/${OLD}["'\`]`),
      new RegExp(`github\\.com[:/]uminomae/${OLD}${END}`),
    ],
  },
];

// 残すと決めたもの（理由つき）。行の末尾に「old-repo-refs: ok」と書いた行も見ない。
const KEEP = new Map([]);

let failed = false;
for (const check of checks) {
  const hits = [];
  for (const f of check.files) {
    if (KEEP.has(f)) continue;
    let text;
    try { text = readFileSync(f, 'utf8'); } catch { continue; }
    text.split('\n').forEach((line, i) => {
      if (line.includes('old-repo-refs: ok')) return;
      if (check.patterns.some((re) => re.test(line))) hits.push(`${f}:${i + 1}: ${line.trim().slice(0, 160)}`);
    });
  }
  report(check.name, hits);
}

// 2. 今の repo の GitHub で、git に無いファイル
{
  const re = /(?:github\.com\/uminomae\/project-design-theory\/(?:blob|tree|raw)\/(?:main|develop)\/|raw\.githubusercontent\.com\/uminomae\/project-design-theory\/(?:main|develop)\/)([^\s"'<>)\]`|]+)/g;
  const hits = [];
  for (const f of publicFiles) {
    let text;
    try { text = readFileSync(f, 'utf8'); } catch { continue; }
    text.split('\n').forEach((line, i) => {
      for (const m of line.matchAll(re)) {
        let p = m[1].replace(/[#?].*$/, '').replace(/[.,;:。、）]+$/, '').replace(/\/$/, '');
        try { p = decodeURIComponent(p); } catch { /* そのまま */ }
        if (!p || p.includes('${') || p.includes('{')) continue; // テンプレートの差し込みは見ない
        if (!tracked.has(p) && !trackedDirs.has(p)) hits.push(`${f}:${i + 1}: ${p}`);
      }
    });
  }
  report('今の repo の GitHub で、git に無いファイルへのリンク', hits);
}

function report(name, hits) {
  if (!hits.length) return;
  failed = true;
  console.log(`-- ${name}（${hits.length} 件）`);
  for (const h of hits) console.log(`   ${h}`);
}

process.exit(failed ? 1 : 0);
