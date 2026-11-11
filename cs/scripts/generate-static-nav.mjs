#!/usr/bin/env node

/**
 * Generate crawler-visible static links to every report page (#59).
 *
 * トップの報告カードは JS 描画のため、JS を実行しないクローラー（GPTBot・ClaudeBot 等）からは
 * 本文ページへ辿れない。cs/evidence/reviewed.json から、30 分野の記録の素の <a href> を生成し、
 * 次の3か所を書き換える:
 *
 *   1. index.html  — <noscript> 内の static-nav マーカー間（JS 有効時の見た目は変わらない）
 *   2. llms.txt    — static-nav マーカー間（Markdown のリンク一覧）
 *   3. sitemap.xml — 全体を再生成（noindex のページは載せない）
 *
 * 前は pjdhiro の repo の目録（manifests/domains.json）を読んでいた。pjdhiro の repo は使わないので、
 * 分野の並びと名前は reviewed.json だけから取る（#134・2026-11-12）。
 */

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');

const SITE_URL = 'https://uminomae.github.io/project-design-theory/cs/';

// cs 側の静的ページを置くディレクトリ。新しい静的ページ（例: #263 対応表）を足したらここへ追加する
const LOCAL_PAGE_DIRS = ['reader'];
// sitemap に載せるテキスト資源（HTML 以外）
const SITEMAP_TEXT_FILES = ['llms.txt', 'llms-full.txt'];

const MARKER_START = 'static-nav:start';
const MARKER_END = 'static-nav:end';

function printHelp() {
  console.log('Generate static links to all report pages (#59)');
  console.log('');
  console.log('Usage:');
  console.log('  node scripts/generate-static-nav.mjs [options]');
  console.log('');
  console.log('Options:');
  console.log('  --check                Report whether outputs are up to date (exit 1 if not)');
  console.log('  --help, -h             Show this help');
}

function parseArgs(argv) {
  const options = { check: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') return { help: true, options };
    if (arg === '--check') {
      options.check = true;
      continue;
    }
    throw new Error(`Unknown option: ${arg}`);
  }
  return { help: false, options };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeMarkdownLabel(value) {
  return String(value).replace(/([[\]])/g, '\\$1');
}

function stripInlineMarkdown(value) {
  return String(value)
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+---\s+/g, ' — ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Jekyll と同じく、front matter の title → 最初の H1 の順で題名を採る */
function extractMarkdownTitle(text) {
  const frontMatter = text.match(/^---\n([\s\S]*?)\n---/);
  if (frontMatter) {
    const titleLine = frontMatter[1].match(/^title:\s*(.+)$/m);
    if (titleLine) return stripInlineMarkdown(titleLine[1].replace(/^["']|["']$/g, ''));
  }
  const heading = text.match(/^#\s+(.+)$/m);
  return heading ? stripInlineMarkdown(heading[1]) : '';
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

/** cs/evidence/reviewed.json の分野を、id の順に、記録のページ（?domain=Dxx）と記録の md へのリンクにする */
async function collectReviewedDomainItems() {
  const reviewed = await readJson(join(ROOT, 'evidence', 'reviewed.json'));
  const rows = [...(reviewed.domains || [])].sort((a, b) => String(a.id).localeCompare(String(b.id), 'en', { numeric: true }));
  const items = [];
  for (const row of rows) {
    const text = await readFile(join(ROOT, 'evidence', row.file), 'utf8');
    // 題は記録の題の「：」の前（分野の名前）。番号（D01 など）は出さない（#73 の J9）。
    const title = extractMarkdownTitle(text).split('：')[0].trim() || row.name_ja || row.id;
    items.push({
      ja: { url: `${SITE_URL}?domain=${row.id}`, mdUrl: `${SITE_URL}evidence/${row.file}`, title },
      en: null,
    });
  }
  return items;
}

async function collectReportGroups() {
  // 旧ガイド三本・横断分析・領域横断テーマ・テーマの検証・旧「調査内容」は、照合し直す前の主張のままだったので、
  // 2026-11-10 に一覧から外した（Issue #111）。昔の版は cs/archive/creation/ にある。照合し直した版を作ったら、その版の組をここに足す。
  const domainItems = await collectReviewedDomainItems();
  return [
    { headingJa: '30領域調査報告', headingEn: '30 Domain Reports', items: domainItems },
  ].map((group) => ({ ...group, items: group.items.filter((item) => item.ja || item.en) }));
}

async function collectLocalPages() {
  const pages = [];
  for (const dir of LOCAL_PAGE_DIRS) {
    const absDir = join(ROOT, dir);
    if (!existsSync(absDir)) continue;
    const names = (await readdir(absDir)).filter((name) => name.endsWith('.html')).sort();
    for (const name of names) {
      const relPath = `${dir}/${name}`;
      const html = await readFile(join(ROOT, relPath), 'utf8');
      const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || relPath;
      const noindex = /<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);
      pages.push({ relPath, title: title.replace(/\s*\|\s*creation-space\s*$/, '').trim(), noindex });
    }
  }
  return pages;
}

function renderHtmlNav(groups, localPages, indent) {
  const pad = (level) => indent + '  '.repeat(level);
  const lines = [];
  lines.push(`${pad(0)}<!-- ${MARKER_START} — scripts/generate-static-nav.mjs が生成（#59）。手で編集しない -->`);
  lines.push(`${pad(0)}<nav aria-label="調査報告の一覧">`);
  lines.push(`${pad(1)}<h2>調査報告の一覧</h2>`);
  for (const group of groups) {
    lines.push(`${pad(1)}<h3>${escapeHtml(group.headingJa)}</h3>`);
    lines.push(`${pad(1)}<ul>`);
    for (const item of group.items) {
      const parts = [];
      if (item.ja) parts.push(`<a href="${escapeHtml(item.ja.url)}">${escapeHtml(item.ja.title)}</a>`);
      if (item.en) {
        const enLink = `<a href="${escapeHtml(item.en.url)}" hreflang="en" lang="en">${escapeHtml(item.en.title)}</a>`;
        parts.push(item.ja ? `（English: ${enLink}）` : enLink);
      }
      lines.push(`${pad(2)}<li>${parts.join('')}</li>`);
    }
    lines.push(`${pad(1)}</ul>`);
  }
  if (localPages.length) {
    lines.push(`${pad(1)}<h3>テーマ解説（READER）</h3>`);
    lines.push(`${pad(1)}<ul>`);
    for (const page of localPages) {
      lines.push(`${pad(2)}<li><a href="./${escapeHtml(page.relPath)}">${escapeHtml(page.title)}</a></li>`);
    }
    lines.push(`${pad(1)}</ul>`);
  }
  lines.push(`${pad(0)}</nav>`);
  lines.push(`${pad(0)}<!-- ${MARKER_END} -->`);
  return lines.join('\n');
}

function renderMarkdownNav(groups, localPages) {
  const lines = [];
  lines.push(`<!-- ${MARKER_START} — generated by scripts/generate-static-nav.mjs (#59); do not edit by hand -->`);
  for (const group of groups) {
    lines.push('');
    lines.push(`### ${group.headingEn}（${group.headingJa}）`);
    lines.push('');
    for (const item of group.items) {
      const parts = [];
      // llms.txt は読むのが LLM なので、記録は JS で開くページでなく md そのものへ向ける
      if (item.ja) parts.push(`[${escapeMarkdownLabel(item.ja.title)}](${item.ja.mdUrl || item.ja.url})`);
      if (item.en) parts.push(`[${escapeMarkdownLabel(item.en.title)}](${item.en.url})`);
      lines.push(`- ${parts.join(' · ')}`);
    }
  }
  // llms.txt には sitemap と同じく、索引対象（noindex でない）の cs 静的ページだけを載せる
  const indexable = localPages.filter((page) => !page.noindex);
  if (indexable.length) {
    lines.push('');
    lines.push('### Theme Readers（テーマ解説）');
    lines.push('');
    for (const page of indexable) lines.push(`- [${escapeMarkdownLabel(page.title)}](${SITE_URL}${page.relPath})`);
  }
  lines.push('');
  lines.push(`<!-- ${MARKER_END} -->`);
  return lines.join('\n');
}

function replaceBetweenMarkers(text, replacement, fileLabel) {
  const pattern = new RegExp(`[ \\t]*<!-- ${MARKER_START}[^\\n]*-->[\\s\\S]*?<!-- ${MARKER_END} -->`);
  if (!pattern.test(text)) throw new Error(`${fileLabel}: static-nav markers not found`);
  return text.replace(pattern, replacement);
}

function markerIndent(text, fileLabel) {
  const match = text.match(new RegExp(`^([ \\t]*)<!-- ${MARKER_START}`, 'm'));
  if (!match) throw new Error(`${fileLabel}: static-nav markers not found`);
  return match[1];
}

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

/**
 * 最終更新日 = 未コミットの変更があれば今日。前に sitemap.xml を書いたコミットからファイルが変わっていなければ、
 * 前の sitemap.xml の日付を保つ。変わっていれば最後のコミット日。
 * コミット日だけで決めると、repo の引っ越し（2026-11-07）のような中身の変わらないコミットで日付が進んでしまう。
 */
function lastModified(relPath, pendingChanges, previous) {
  const today = new Date().toISOString().slice(0, 10);
  if (pendingChanges.has(relPath)) return today;
  try {
    if (git(['status', '--porcelain', '--', relPath])) return today;
    const prev = previous.get(relPath);
    const since = prev && git(['log', '-1', '--format=%H', '--', 'sitemap.xml']);
    if (since && unchangedSince(since, relPath)) return prev;
    return git(['log', '-1', '--format=%cs', '--', relPath]) || today;
  } catch {
    return today;
  }
}

function unchangedSince(commit, relPath) {
  try {
    execFileSync('git', ['diff', '--quiet', commit, '--', relPath], { cwd: ROOT, stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/** 前の sitemap.xml の loc → lastmod */
function previousLastmods(sitemapText) {
  const map = new Map();
  for (const m of sitemapText.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) map.set(m[1], m[2]);
  return map;
}

function renderSitemap(localPages, pendingChanges, sitemapText = '') {
  const byLoc = previousLastmods(sitemapText);
  const entries = [{ loc: SITE_URL, file: 'index.html', priority: '1.0' }];
  for (const page of localPages) {
    if (!page.noindex) entries.push({ loc: `${SITE_URL}${page.relPath}`, file: page.relPath, priority: '0.8' });
  }
  for (const file of SITEMAP_TEXT_FILES) {
    if (existsSync(join(ROOT, file))) entries.push({ loc: `${SITE_URL}${file}`, file, priority: '0.5' });
  }
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  for (const entry of entries) {
    lines.push('  <url>');
    lines.push(`    <loc>${escapeHtml(entry.loc)}</loc>`);
    const previous = new Map(byLoc.has(entry.loc) ? [[entry.file, byLoc.get(entry.loc)]] : []);
    lines.push(`    <lastmod>${lastModified(entry.file, pendingChanges, previous)}</lastmod>`);
    lines.push(`    <priority>${entry.priority}</priority>`);
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  return `${lines.join('\n')}\n`;
}

async function main() {
  const { help, options } = parseArgs(process.argv.slice(2));
  if (help) {
    printHelp();
    return;
  }
  const warnings = [];
  const groups = await collectReportGroups();
  const localPages = await collectLocalPages();

  const indexPath = join(ROOT, 'index.html');
  const llmsPath = join(ROOT, 'llms.txt');
  const sitemapPath = join(ROOT, 'sitemap.xml');
  const [indexText, llmsText, sitemapText] = await Promise.all([
    readFile(indexPath, 'utf8'),
    readFile(llmsPath, 'utf8'),
    readFile(sitemapPath, 'utf8'),
  ]);

  const nextIndex = replaceBetweenMarkers(
    indexText,
    renderHtmlNav(groups, localPages, markerIndent(indexText, 'index.html')),
    'index.html',
  );
  const nextLlms = replaceBetweenMarkers(llmsText, renderMarkdownNav(groups, localPages), 'llms.txt');
  // index.html / llms.txt をこの実行で書き換える場合、sitemap の lastmod は今日にする
  const pendingChanges = new Set();
  if (nextIndex !== indexText) pendingChanges.add('index.html');
  if (nextLlms !== llmsText) pendingChanges.add('llms.txt');
  const nextSitemap = renderSitemap(localPages, pendingChanges, sitemapText);

  const outputs = [
    { label: 'index.html', path: indexPath, before: indexText, after: nextIndex },
    { label: 'llms.txt', path: llmsPath, before: llmsText, after: nextLlms },
    { label: 'sitemap.xml', path: sitemapPath, before: sitemapText, after: nextSitemap },
  ];

  const linkCount = groups.reduce((sum, group) => sum + group.items.reduce((n, item) => n + Number(Boolean(item.ja)) + Number(Boolean(item.en)), 0), 0);
  console.log(`Report links: ${linkCount} (${groups.map((group) => `${group.headingEn}: ${group.items.length}`).join(', ')})`);
  console.log(`Local pages: ${localPages.map((page) => `${page.relPath}${page.noindex ? ' [noindex: not in sitemap/llms.txt]' : ''}`).join(', ') || 'none'}`);
  for (const warning of warnings) console.warn(`WARN: ${warning}`);

  const stale = outputs.filter((output) => output.before !== output.after);
  if (options.check) {
    if (stale.length) {
      console.log(`Out of date: ${stale.map((output) => output.label).join(', ')}`);
      process.exitCode = 1;
    } else {
      console.log('Up to date: index.html, llms.txt, sitemap.xml');
    }
    return;
  }
  for (const output of stale) await writeFile(output.path, output.after);
  console.log(stale.length ? `Updated: ${stale.map((output) => output.label).join(', ')}` : 'No changes');
}

main().catch((error) => {
  console.error(`ERROR: ${error.message}`);
  process.exitCode = 1;
});
