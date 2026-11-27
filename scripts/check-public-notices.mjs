#!/usr/bin/env node
// 公開しているページと記録について、今の develop で当たるものがあるので、落とさずに数を知らせる検査（2026-11-10・#111 束 8）。
// 当たりが 0 になったものは、scripts/check.sh で --strict <名前> を付けて「止める」に上げる。
//
//   node scripts/check-public-notices.mjs                数を出す（いつも 0 で終わる）
//   node scripts/check-public-notices.mjs --list         当たった行も出す
//   node scripts/check-public-notices.mjs --strict names,sections,tables   その検査に当たりがあれば 1 で終わる
//   --root <置き場>   見る根を替える（確かめのときだけ）
//
// 見るもの：
//   names    読み物（pd/reader/*.html）と入口（pd・cs・as・ks の index.html）の、読者に見える文字に、
//            今までの repo の名前（project-design・creation-space・awareness-space・kesson-space）が出ていないか。
//            タグ・script・style・URL は外して見る。今の repo の名前（project-design-theory）は当たりにしない。
//            決まり：docs/rules/writing.md §6-3。JavaScript が後から差し込む文字は見ていない。
//   sections 公開の調査の記録（cs/evidence/evidence-D*.md・as/evidence/evidence-A*.md）の見出しに、
//            作業の節（照合中・判断が要る・司令塔が直す）が残っていないか。決まり：stance.md 2-7「内部連絡のようなものは公開ページに出さない」。
//   tables   読み物の表のうち、スマートフォンの幅で表の中を横に送る形のもの。
//            pd/src/styles/reader-flow.css は .tablewrap の表に min-width: 520px を付け、.tablefit で囲んだ表だけ幅に収める。
//            だから、reader-flow の読み物で .tablefit に囲まれていない .tablewrap の数を数える。決まり：stance.md 2-7「表は横スクロールさせない」。
//            数えているのは HTML の形で、画面の実際のはみ出しではない（画面での確かめは docs/TESTING.md「作りたいもの」）。
//   workrefs 読み物（pd/reader/*.html・cs/reader/*.html と、読み物を作り直す雛形 pd/scripts/*template*.html）と入口（pd・cs・as・ks の index.html）から、作業の途中の Issue と、
//            探索・調べの記録を読者に指していないか。当たりにするのは、この repo の Issue へのリンク、読者に見える文字の
//            「Issue #N」「（#N）」「（探索：#N）」「pd#N」のような番号、knowledge/research/ の記録（EXPLORE・SURVEY・RR・PLAN・
//            ANALYSIS・REVIEW・DRAFT・LOG）の md へのリンク。HTML の注記（<!-- -->）・script・style は外して見る。
//            決まり：stance.md 2-7「公開ページから、作業の途中の Issue と、探索・調べの記録を、読者に指さない」（2026-11-26）。
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const args = process.argv.slice(2);
const opt = (k) => (args.indexOf(k) >= 0 ? args[args.indexOf(k) + 1] : null);
const ROOT = opt('--root') || execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
const list = args.includes('--list');
const strict = new Set((opt('--strict') || '').split(',').filter(Boolean));

const read = (rel) => readFileSync(join(ROOT, rel), 'utf8');
const ls = (rel, re) => (existsSync(join(ROOT, rel)) ? readdirSync(join(ROOT, rel)).filter((n) => re.test(n)).sort().map((n) => `${rel}/${n}`) : []);

const results = {};

// ---- names
{
  const files = [
    ...ls('pd/reader', /\.html$/),
    ...['pd/index.html', 'cs/index.html', 'as/index.html', 'ks/index.html'].filter((f) => existsSync(join(ROOT, f))),
  ];
  const NAME = /(?<![A-Za-z0-9_-])(project-design(?!-theory)|creation-space|awareness-space|kesson-space)(?![A-Za-z0-9_])/g;
  const hits = [];
  for (const f of files) {
    const text = read(f)
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, '\n')
      .replace(/https?:\/\/[^\s"'<>）)」]+/g, ' ')
      .replace(/(?:[a-z0-9-]+\.)?github(?:usercontent)?\.(?:com|io)\/[^\s"'<>）)」]+/g, ' ');
    const found = [];
    for (const line of text.split('\n')) {
      const m = line.match(NAME);
      if (m) found.push(...m.map((x) => `${x}：${line.trim().slice(0, 80)}`));
    }
    if (found.length) hits.push({ file: f, n: found.length, lines: found });
  }
  results.names = {
    title: '読み物と入口の本文に、今までの repo の名前',
    total: hits.reduce((a, h) => a + h.n, 0),
    files: hits,
    unit: 'か所',
  };
}

// ---- sections
{
  const files = [...ls('cs/evidence', /^evidence-D\d\d-.*\.md$/), ...ls('as/evidence', /^evidence-A\d\d-.*\.md$/)];
  const WORK = /照合中|判断が要る|司令塔が直す/;
  const hits = [];
  for (const f of files) {
    const found = read(f)
      .split('\n')
      .map((l, i) => [i + 1, l])
      .filter(([, l]) => /^#{1,6}\s/.test(l) && WORK.test(l))
      .map(([n, l]) => `${n}:${l.slice(0, 80)}`);
    if (found.length) hits.push({ file: f, n: found.length, lines: found });
  }
  results.sections = {
    title: `公開の調査の記録（${files.length} 本）に、作業の節の見出し`,
    total: hits.reduce((a, h) => a + h.n, 0),
    files: hits,
    unit: '節',
  };
}

// ---- tables
{
  const hits = [];
  for (const f of ls('pd/reader', /\.html$/)) {
    const html = read(f);
    if (!/<body[^>]*class="[^"]*\breader-flow\b/.test(html)) continue;
    const wraps = (html.match(/<div class="tablewrap"/g) || []).length;
    const fits = (html.match(/<div class="tablefit\b/g) || []).length;
    const n = wraps - fits;
    if (n > 0) hits.push({ file: f, n, lines: [`表 ${wraps} のうち、幅に収める囲み（tablefit）が無いもの ${n}`] });
  }
  results.tables = {
    title: '読み物の表のうち、スマートフォンの幅で横に送る形のもの',
    total: hits.reduce((a, h) => a + h.n, 0),
    files: hits,
    unit: '表',
  };
}

// ---- workrefs
{
  const files = [
    ...ls('pd/reader', /\.html$/),
    ...ls('cs/reader', /\.html$/),
    ...ls('pd/scripts', /template.*\.html$/),
    ...['pd/index.html', 'cs/index.html', 'as/index.html', 'ks/index.html'].filter((f) => existsSync(join(ROOT, f))),
  ];
  const ISSUE_LINK = /github\.com\/uminomae\/project-design-theory\/issues\/\d+/g;
  const RECORD_LINK = /github\.com\/uminomae\/project-design-theory\/(?:blob|tree)\/[a-z]+\/[^"'\s]*knowledge\/research\/[^"'\s]*\/(?:EXPLORE|SURVEY|RR|PLAN|ANALYSIS|REVIEW|DRAFT|LOG)-[^"'\s]*\.md/g;
  // 例外：pjdhiro が読み物からの参照として名指しした調べの記録だけ（docs/rules/decisions.md の行。一本ずつ足す）
  const RECORD_ALLOW = [
    'knowledge/research/breath/SURVEY-breath-boundaries-20261127.md', // 呼吸の境目の調べ（pjdhiro 2026-11-27「読み物に貼ってもらう話でした。リンクは。」）
  ];
  const NUM = /Issue\s*#\d+|（(?:探索：|追跡：)?#\d+）|\((?:[Ee]xploration: )?#\d+\)|(?<![A-Za-z0-9&])(?:pd|cs|as|ks)#\d+/g;
  const hits = [];
  for (const f of files) {
    const raw = read(f)
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ');
    const found = [];
    for (const m of raw.matchAll(ISSUE_LINK)) found.push(`Issue へのリンク：${m[0].replace(/.*\/issues\//, '#')}`);
    for (const m of raw.matchAll(RECORD_LINK)) if (!RECORD_ALLOW.some((a) => m[0].endsWith(a))) found.push(`記録へのリンク：${m[0].replace(/.*knowledge\/research\//, '')}`);
    const text = raw.replace(/<[^>]+>/g, '\n');
    for (const line of text.split('\n')) {
      const m = line.match(NUM);
      if (m) found.push(...m.map((x) => `番号 ${x}：${line.trim().slice(0, 60)}`));
    }
    if (found.length) hits.push({ file: f, n: found.length, lines: found });
  }
  results.workrefs = {
    title: '読み物と入口から、作業の途中の Issue と探索・調べの記録を指すもの',
    total: hits.reduce((a, h) => a + h.n, 0),
    files: hits,
    unit: 'か所',
  };
}

let fail = false;
for (const [key, r] of Object.entries(results)) {
  console.log(`   ${r.title}：${r.total} ${r.unit}（${r.files.length} 本）${r.total ? '' : '　無し'}`);
  if (list || (strict.has(key) && r.total)) {
    for (const h of r.files) {
      console.log(`     ${h.file}（${h.n}）`);
      for (const l of h.lines.slice(0, list ? 50 : 3)) console.log(`       ${l}`);
    }
  }
  if (strict.has(key) && r.total) fail = true;
}
if (!list && Object.values(results).some((r) => r.total)) console.log('   一覧：node scripts/check-public-notices.mjs --list');
process.exit(fail ? 1 : 0);
