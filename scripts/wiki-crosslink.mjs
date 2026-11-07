#!/usr/bin/env node
/**
 * wiki-crosslink.mjs
 *
 * wiki/sources/*.md が [[wikilink]] で言及している concept/entity/cross-refs ページに
 * `## 関連原典` セクションで逆向きの参照を追記する。
 *
 * Usage:
 *   node scripts/wiki-crosslink.mjs --source wiki/sources/xxx.md
 *   node scripts/wiki-crosslink.mjs --all
 *   node scripts/wiki-crosslink.mjs --source wiki/sources/xxx.md --dry-run
 *   node scripts/wiki-crosslink.mjs --all --build
 *
 * Quartz build は現環境（Node 25 / Quartz 4.5.2 非互換 OOM）では走らせない。
 * デフォルトでは build は行わず、--build を明示したときのみ試みる。
 * 公開確認は GitHub Pages 側に委ねる。
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const WIKI = join(ROOT, "wiki");
const SOURCES_DIR = join(WIKI, "sources");
const TARGET_CATEGORIES = ["concepts", "entities", "cross-refs"];
const SECTION = "## 関連原典";

// ---------- CLI ----------
const argv = process.argv.slice(2);
const opts = { source: null, all: false, dryRun: false, build: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--source") opts.source = argv[++i];
  else if (a === "--all") opts.all = true;
  else if (a === "--dry-run") opts.dryRun = true;
  else if (a === "--build") opts.build = true;
  else if (a === "--no-build") opts.build = false;
}

if (!opts.source && !opts.all) {
  console.error("usage: wiki-crosslink.mjs --source <path> | --all [--dry-run] [--build]");
  process.exit(2);
}

// ---------- helpers ----------

function stripFrontmatter(text) {
  if (!text.startsWith("---\n")) return { fm: "", body: text };
  const end = text.indexOf("\n---\n", 4);
  if (end < 0) return { fm: "", body: text };
  return { fm: text.slice(0, end + 5), body: text.slice(end + 5) };
}

function parseFrontmatter(fm) {
  const result = {};
  if (!fm) return result;
  const lines = fm.split("\n");
  for (const line of lines) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) result[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return result;
}

function listMd(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => join(dir, f));
}

// Build lookup: stem -> { path, category }
// Stems must be unique across concepts/entities/cross-refs for the simple wikilink form.
function buildTargetIndex() {
  const idx = new Map();
  for (const cat of TARGET_CATEGORIES) {
    for (const path of listMd(join(WIKI, cat))) {
      const stem = basename(path, ".md");
      const key = stem;
      if (idx.has(key)) {
        console.error(`warn: duplicate stem "${stem}" in ${cat} and ${idx.get(key).category}; using first`);
        continue;
      }
      idx.set(key, { path, category: cat, stem });
    }
  }
  return idx;
}

// Extract wikilinks from body. Returns array of target stems.
// Handles [[stem]], [[stem|alt]], [[category/stem]], [[category/stem|alt]]
function extractWikilinks(body) {
  const targets = new Set();
  const re = /\[\[([^\[\]|\n]+?)(?:\|[^\[\]]*?)?\]\]/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    let target = m[1].trim();
    const slash = target.indexOf("/");
    if (slash >= 0) target = target.slice(slash + 1);
    if (target) targets.add(target);
  }
  return [...targets];
}

// Derive an "Author (year)" label from a source stem, fallback to title.
// Stem examples:
//   D16_toynbee_1934_study-of-history  -> "Toynbee (1934)"
//   Craig_2002_interoception           -> "Craig (2002)"
//   Panksepp-Barrett_1998_panic-grief  -> "Panksepp-Barrett (1998)"
function labelFromStem(stem, fallbackTitle) {
  const parts = stem.split("_");
  let author = null;
  let year = null;
  for (let i = 0; i < parts.length; i++) {
    if (/^(19|20)\d{2}$/.test(parts[i])) {
      year = parts[i];
      // author is the previous part unless it's a domain prefix like D16
      if (i > 0 && !/^D\d{2}$/.test(parts[i - 1])) author = parts[i - 1];
      else if (i > 1) author = parts[i - 1];
      break;
    }
  }
  if (author && year) {
    const cap = author.charAt(0).toUpperCase() + author.slice(1);
    return `${cap} (${year})`;
  }
  return fallbackTitle || stem;
}

// Read a source page, return { stem, title, description, linkedTargets }
function readSource(path) {
  const text = readFileSync(path, "utf8");
  const { fm, body } = stripFrontmatter(text);
  const meta = parseFrontmatter(fm);
  const stem = basename(path, ".md");
  const title = meta.title || stem;
  const description = meta.description || "";
  const linkedTargets = extractWikilinks(body);
  return { stem, title, description, linkedTargets };
}

// Insert a bullet into target file under `## 関連原典`. Returns { changed, reason }.
function insertCrossref(targetPath, sourceStem, label, description) {
  const text = readFileSync(targetPath, "utf8");
  const bullet = `- [[sources/${sourceStem}|${label}]]${description ? " — " + description : ""}`;

  // Idempotent: skip if this exact source stem already appears anywhere in the file
  if (text.includes(`[[sources/${sourceStem}`) || text.includes(`[[${sourceStem}`)) {
    return { changed: false, reason: "already-linked" };
  }

  const lines = text.split("\n");
  const sectionRe = new RegExp(`^${SECTION.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`);

  // Find existing section
  let sectionIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (sectionRe.test(lines[i])) {
      sectionIdx = i;
      break;
    }
  }

  let newText;
  if (sectionIdx >= 0) {
    // Find end of section (next ## heading or EOF)
    let endIdx = lines.length;
    for (let i = sectionIdx + 1; i < lines.length; i++) {
      if (/^## /.test(lines[i])) {
        endIdx = i;
        break;
      }
    }
    // Insert bullet at end of section's content (trim trailing blank lines inside section)
    let insertAt = endIdx;
    while (insertAt > sectionIdx + 1 && lines[insertAt - 1].trim() === "") insertAt--;
    lines.splice(insertAt, 0, bullet);
    newText = lines.join("\n");
  } else {
    // Create new section. Place it before `## 関連ページ` if present, else before last `## ` if it's
    // a "related" category, else at EOF.
    let insertAt = lines.length;
    for (let i = 0; i < lines.length; i++) {
      if (/^## 関連ページ\s*$/.test(lines[i])) {
        insertAt = i;
        break;
      }
    }
    // Strip trailing empty lines at insertion point
    while (insertAt > 0 && lines[insertAt - 1].trim() === "") insertAt--;
    const block = ["", SECTION, "", bullet, ""];
    lines.splice(insertAt, 0, ...block);
    newText = lines.join("\n");
    // Ensure final newline
    if (!newText.endsWith("\n")) newText += "\n";
  }

  if (!opts.dryRun) writeFileSync(targetPath, newText);
  return { changed: true, reason: sectionIdx >= 0 ? "appended" : "created" };
}

// ---------- main ----------

const targetIndex = buildTargetIndex();

const sourcePaths = opts.all
  ? listMd(SOURCES_DIR)
  : [opts.source.startsWith("/") ? opts.source : join(ROOT, opts.source)];

let totalEdits = 0;
let totalSources = 0;
const editedFiles = new Set();

for (const sp of sourcePaths) {
  if (!existsSync(sp)) {
    console.error(`warn: source not found: ${sp}`);
    continue;
  }
  totalSources++;
  const src = readSource(sp);
  const label = labelFromStem(src.stem, src.title);
  const matched = [];
  for (const t of src.linkedTargets) {
    if (targetIndex.has(t)) matched.push(targetIndex.get(t));
  }
  if (matched.length === 0) continue;

  for (const target of matched) {
    const result = insertCrossref(target.path, src.stem, label, src.description);
    if (result.changed) {
      totalEdits++;
      editedFiles.add(target.path);
      console.error(
        `  ${opts.dryRun ? "[dry] " : ""}${target.category}/${basename(target.path)} <- ${src.stem} (${result.reason})`
      );
    }
  }
}

console.error(
  `wiki-crosslink: sources=${totalSources}, edits=${totalEdits}, files=${editedFiles.size}${opts.dryRun ? " [dry-run]" : ""}`
);

// ---------- build ----------
if (opts.build && !opts.dryRun && editedFiles.size > 0) {
  const quartzDir = join(ROOT, "quartz");
  if (!existsSync(quartzDir)) {
    console.error("wiki-crosslink: quartz/ not found, skipping build");
    process.exit(0);
  }
  const wikiDir = join(ROOT, "wiki");
  const outDir = join(ROOT, "build", "_serve", "wiki");
  const build = spawnSync(
    "npx",
    ["quartz", "build", "--directory", wikiDir, "--output", outDir],
    { cwd: quartzDir, stdio: "inherit" }
  );
  if (build.status !== 0) {
    console.error("wiki-crosslink: quartz build failed");
    process.exit(build.status || 1);
  }
  console.error("wiki-crosslink: quartz build OK");
}
