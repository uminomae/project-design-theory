#!/usr/bin/env node
// wiki/sources/*.md に「## ソース参照（GitHub・検証用）」セクションを冪等に挿入する。
// frontmatter の source.path / source.manifest_id から、
//  - cs 原典(raw PDF)またはマニフェストの GitHub blob リンク
//  - cs 精読ノート(source-notes)の GitHub blob リンク（存在すれば）
//  - この wiki ページ自身(pd)の GitHub blob リンク
// を生成する。原典(参照先)の DOI/OA は「書誌情報」に既存のためそこへ誘導する。
//
// 目的: 「何を参照しているか」を人間も LLM もクリックで辿れるようにし、
//       推測による書き換えを防ぎ、後から検証できるようにする（pd#113）。
//
// 使い方:
//   node scripts/add-source-github-links.mjs               # 全 wiki/sources を更新
//   node scripts/add-source-github-links.mjs --dry-run     # 差分のみ表示
//   node scripts/add-source-github-links.mjs --file wiki/sources/X.md

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PD_ROOT = path.resolve(__dirname, '..');
const CS_ROOT = path.resolve(PD_ROOT, '..', 'creation-space');
const SOURCES_DIR = path.join(PD_ROOT, 'wiki', 'sources');

const CS_BLOB = 'https://github.com/uminomae/project-design-theory/blob/main/cs';
const PD_BLOB = 'https://github.com/uminomae/project-design-theory/blob/main';

const TICK = '`'; // markdown インラインコード用のバッククォート（リテラル）
const SECTION_HEADING = '## ソース参照（GitHub・検証用）';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const fileArg = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;

// frontmatter から source ブロックの値を粗く抽出する（簡易パーサ）
function parseSource(md) {
  const fm = md.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return null;
  const block = fm[1];
  const get = (key) => {
    const m = block.match(new RegExp('^\\s*' + key + ':\\s*"?([^"\\n]+?)"?\\s*$', 'm'));
    return m ? m[1].trim() : null;
  };
  return {
    repo: get('repo'),
    srcPath: get('path'),
    manifestId: get('manifest_id'),
  };
}

// cs 精読ノートを manifest_id から探す（例: D13-S11 → source-notes/D13/D13-S11_*.md）
function findCsNote(manifestId) {
  if (!manifestId) return null;
  const dom = manifestId.split('-')[0];
  const dir = path.join(CS_ROOT, 'knowledge', 'source-notes', dom);
  if (!fs.existsSync(dir)) return null;
  const hit = fs.readdirSync(dir).find((f) => f.startsWith(manifestId + '_') && f.endsWith('.md'));
  return hit ? 'knowledge/source-notes/' + dom + '/' + hit : null;
}

function buildSection(fileName, src) {
  const lines = [SECTION_HEADING, ''];
  // cs 原典 / マニフェスト
  if (src.srcPath) {
    const isManifest = src.srcPath.endsWith('manifest.md');
    const label = isManifest ? 'cs マニフェスト（該当行）' : 'cs 原典ファイル';
    const idNote = src.manifestId ? '（manifest_id: ' + TICK + src.manifestId + TICK + '）' : '';
    lines.push('- **' + label + '**: [' + src.srcPath + '](' + CS_BLOB + '/' + encodeURI(src.srcPath) + ')' + idNote);
  }
  // cs 精読ノート
  const note = findCsNote(src.manifestId);
  if (note) {
    lines.push('- **cs 精読ノート**: [' + note + '](' + CS_BLOB + '/' + encodeURI(note) + ')');
  } else {
    lines.push('- **cs 精読ノート**: 未生成（cs#249 で生成予定。生成後 ' + TICK + 'wiki-cross-check.mjs' + TICK + ' で照合）');
  }
  // pd ページ自身
  lines.push('- **この wiki ページ（pd）**: [wiki/sources/' + fileName + '](' + PD_BLOB + '/wiki/sources/' + encodeURI(fileName) + ')');
  // 参照先（原典）
  lines.push('- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照');
  lines.push('');
  return lines.join('\n');
}

// セクションを「## 出典メモ」の直前に挿入。既存セクションがあれば置換（冪等）。
function applySection(md, section) {
  const escaped = SECTION_HEADING.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const existing = new RegExp('\\n' + escaped + '\\n[\\s\\S]*?(?=\\n## |$)', 'g');
  let body = md.replace(existing, '\n').replace(/\n{3,}/g, '\n\n');

  const anchor = '\n## 出典メモ';
  if (body.includes(anchor)) {
    return body.replace(anchor, '\n' + section + anchor);
  }
  return body.replace(/\s*$/, '\n\n') + section;
}

function processFile(fp) {
  const md = fs.readFileSync(fp, 'utf8');
  const src = parseSource(md);
  if (!src || !src.manifestId) return { skipped: true };
  const fileName = path.basename(fp);
  const section = buildSection(fileName, src);
  const next = applySection(md, section);
  if (next === md) return { unchanged: true };
  if (!dryRun) fs.writeFileSync(fp, next);
  return { changed: true };
}

const files = fileArg
  ? [path.resolve(PD_ROOT, fileArg)]
  : fs.readdirSync(SOURCES_DIR).filter((f) => f.endsWith('.md')).map((f) => path.join(SOURCES_DIR, f));

let changed = 0, skipped = 0, unchanged = 0;
for (const fp of files) {
  const r = processFile(fp);
  if (r.changed) changed++;
  else if (r.skipped) skipped++;
  else unchanged++;
}
console.log('add-source-github-links: changed=' + changed + ' unchanged=' + unchanged + ' skipped(no manifest_id)=' + skipped + (dryRun ? ' [dry-run]' : ''));
