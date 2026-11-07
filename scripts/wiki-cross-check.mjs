#!/usr/bin/env node
/**
 * wiki-cross-check.mjs (pd#82)
 *
 * pd `wiki/sources/D{NN}_*.md` と cs `knowledge/source-notes/D{NN}/D{NN}-S{##}_*.md` の
 * 対応ペアを cs manifest 経由で突き合わせ、矛盾検査用の候補ファイルを書き出す。
 *
 * 矛盾判定そのものは LLM に任せる（スクリプトは候補ペアと本文を用意するのみ）。
 *
 * 対応付けロジック:
 *   - 正本: cs/knowledge/raw/manifest.md
 *   - cs side (source-note): source_id (D{NN}-S{##}) で特定 → cs/knowledge/source-notes/D{NN}/{source_id}_*.md
 *   - pd side (wiki): domain_id + author + year で特定 → pd/wiki/sources/D{NN}_{author}_{year}_*.md
 *
 * Usage:
 *   node scripts/wiki-cross-check.mjs --source wiki/sources/D01_bott_1988_morse-theory-indomitable.md
 *   node scripts/wiki-cross-check.mjs --all
 *   node scripts/wiki-cross-check.mjs --source <path> --dry-run
 *
 * Output:
 *   .cache/wiki-conflict-candidates-{YYYYMMDD}.md  候補ペア一覧（CLI が読む）
 *   stderr に WARN サマリ
 *
 * Exit:
 *   0 常に（hook 停止を避ける）
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, basename, dirname, resolve } from "node:path";
import { homedir } from "node:os";

const ROOT = resolve(new URL("..", import.meta.url).pathname.replace(/\/$/, ""));
const PD_SOURCES = join(ROOT, "wiki", "sources");
const CS_ROOT = join(homedir(), "dev", "creation-space");
const CS_SOURCE_NOTES = join(CS_ROOT, "knowledge", "source-notes");
const CS_MANIFEST = join(CS_ROOT, "knowledge", "raw", "manifest.md");
const OUT_DIR = join(ROOT, ".cache");

// ---------- CLI ----------
const argv = process.argv.slice(2);
const opts = { source: null, all: false, dryRun: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--source") opts.source = argv[++i];
  else if (a === "--all") opts.all = true;
  else if (a === "--dry-run") opts.dryRun = true;
}
if (!opts.source && !opts.all) {
  console.error("usage: wiki-cross-check.mjs --source <path> | --all [--dry-run]");
  process.exit(2);
}

// ---------- manifest parser ----------
// | source_id | domain_id | access_status | source_title | local_file | ... |
function parseManifest() {
  if (!existsSync(CS_MANIFEST)) {
    console.error(`error: cs manifest not found: ${CS_MANIFEST}`);
    process.exit(1);
  }
  const rows = [];
  for (const line of readFileSync(CS_MANIFEST, "utf8").split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line.split("|").map((c) => c.trim());
    if (cells.length < 6) continue;
    const [, source_id, domain_id, access_raw, title, local_file] = cells;
    if (!/^D\d+-S\d+$/.test(source_id)) continue;
    const access = access_raw.replace(/`/g, "");
    if (access !== "raw-confirmed" && access !== "url-verified") continue;
    const pdStem = derivePdStem(domain_id, local_file, title);
    rows.push({ source_id, domain_id, access, title, local_file, pdStem });
  }
  return rows;
}

// pd 側ファイル名の stem 候補を local_file または title から推測
// local_file が `knowledge/raw/D{NN}_{author}_{year}_{slug}.pdf` なら basename から .pdf を除く
function derivePdStem(domain_id, local_file, title) {
  const m = local_file && local_file.match(/D\d+_[^/]+\.pdf/);
  if (m) {
    let stem = m[0].replace(/\.pdf$/, "").replace(/_part\d+$/, "");
    // domain 不一致時は domain_id で置換
    stem = stem.replace(/^D\d+/, domain_id);
    return stem;
  }
  // local_file がない url-verified 行: title から推測不能なので null
  return null;
}

// ---------- cs source-note lookup ----------
function findCsSourceNote(source_id, domain_id) {
  const dir = join(CS_SOURCE_NOTES, domain_id);
  if (!existsSync(dir)) return null;
  const prefix = `${source_id}_`;
  const hit = readdirSync(dir).find((f) => f.startsWith(prefix) && f.endsWith(".md"));
  return hit ? join(dir, hit) : null;
}

// ---------- pd wiki lookup ----------
function findPdWiki(stem) {
  if (!stem) return null;
  const path = join(PD_SOURCES, `${stem}.md`);
  if (existsSync(path)) return path;
  // stem 完全一致で見つからない場合、prefix match を試す（著者名末尾のバリエーション対策）
  const prefix = stem.split("_").slice(0, 3).join("_") + "_"; // D{NN}_{author}_{year}_
  const hit = readdirSync(PD_SOURCES).find((f) => f.startsWith(prefix) && f.endsWith(".md"));
  return hit ? join(PD_SOURCES, hit) : null;
}

// ---------- manifest_id index (url-verified フォールバック) ----------
// pd wiki frontmatter の manifest_id: "DXX-SYY" を解析してマップを構築
function buildManifestIdIndex() {
  const idx = new Map(); // source_id -> pd wiki path
  for (const f of readdirSync(PD_SOURCES)) {
    if (!f.endsWith(".md")) continue;
    const fullPath = join(PD_SOURCES, f);
    const text = readFileSync(fullPath, "utf8");
    const m = text.match(/manifest_id:\s*["']?([A-Z0-9]+-S\d+)["']?/);
    if (m) idx.set(m[1], fullPath);
  }
  return idx;
}

// ---------- main ----------
const rows = parseManifest();
const manifestIdIndex = buildManifestIdIndex();

const pairs = [];
const warnCsMissing = [];
const warnPdMissing = [];

for (const row of rows) {
  const csPath = findCsSourceNote(row.source_id, row.domain_id);
  // url-verified で pdStem=null の場合、manifest_id index でフォールバック
  const pdPath = findPdWiki(row.pdStem) || manifestIdIndex.get(row.source_id) || null;

  if (opts.source) {
    // 単一 source モード: pdPath が指定と一致する行のみ
    const want = resolve(opts.source);
    if (pdPath && resolve(pdPath) !== want) continue;
    if (!pdPath || resolve(pdPath) !== want) continue;
  }

  if (!csPath && pdPath) warnCsMissing.push({ source_id: row.source_id, pd: pdPath });
  else if (csPath && !pdPath) warnPdMissing.push({ source_id: row.source_id, cs: csPath });
  else if (csPath && pdPath) pairs.push({ row, csPath, pdPath });
}

// ---------- output ----------
const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const outPath = join(OUT_DIR, `wiki-conflict-candidates-${today}.md`);

if (opts.dryRun) {
  console.error(`[dry-run] pairs=${pairs.length} cs-missing=${warnCsMissing.length} pd-missing=${warnPdMissing.length}`);
  console.error(`[dry-run] would write: ${outPath}`);
  process.exit(0);
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

let out = "";
out += "---\n";
out += "action: llm-review\n";
out += "type: wiki-cross-check-candidates\n";
out += `date: ${new Date().toISOString()}\n`;
out += `pairs: ${pairs.length}\n`;
out += `cs_missing: ${warnCsMissing.length}\n`;
out += `pd_missing: ${warnPdMissing.length}\n`;
out += "---\n\n";
out += "# wiki 矛盾検査 候補ペア (pd#82)\n\n";
out += "pd `wiki/sources/` と cs `knowledge/source-notes/` の対応ペアを列挙する。\n";
out += "CLI は各ペアを読み、SKILL.md「矛盾検査の対象項目」に従って判定すること。\n";
out += "矛盾があれば `.cache/inbox/wiki-conflict-{date}.md` に起票して pjdhiro 判断を仰ぐ。\n\n";

out += `## 対応ペア (${pairs.length})\n\n`;
for (const p of pairs) {
  out += `### ${p.row.source_id} — ${p.row.title}\n`;
  out += "- pd: `" + relativeTo(ROOT, p.pdPath) + "`\n";
  out += "- cs: `" + relativeTo(CS_ROOT, p.csPath) + "`\n";
  out += `- access: ${p.row.access}\n\n`;
}

if (warnCsMissing.length > 0) {
  out += `## cs 未生成 (skip, ${warnCsMissing.length})\n\n`;
  for (const w of warnCsMissing) {
    out += "- " + w.source_id + ": pd=`" + relativeTo(ROOT, w.pd) + "` / cs source-note なし\n";
  }
  out += "\n";
}

if (warnPdMissing.length > 0) {
  out += `## pd 未生成 (Step 3b 対象, ${warnPdMissing.length})\n\n`;
  for (const w of warnPdMissing) {
    out += "- " + w.source_id + ": cs=`" + relativeTo(CS_ROOT, w.cs) + "` / pd wiki なし\n";
  }
  out += "\n";
}

writeFileSync(outPath, out, "utf8");
console.error(`wrote: ${outPath}`);
console.error(`pairs=${pairs.length} cs-missing=${warnCsMissing.length} pd-missing=${warnPdMissing.length}`);

function relativeTo(base, p) {
  return p.startsWith(base) ? p.slice(base.length + 1) : p;
}
