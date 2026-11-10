#!/usr/bin/env node
/**
 * wiki-gen-check.mjs
 *
 * cs の原典の台帳（cs/knowledge/raw/manifest.md）で、読める原典（access_status が raw-confirmed・url-verified）
 * なのに、wiki の出典ページ（front matter の manifest_id がその source_id のページ）がまだ無いものを並べる。
 * 今までの project-design の wiki-gen-check.sh に当たる（2026-11-10・pjdhiro「C 両方入れる」）。
 * 前の版は inbox に依頼を書いたが、ここでは知らせるだけ。作るのは wiki-compile のスキル（.claude/skills/wiki-compile/SKILL.md）。
 *
 * 台帳は今の形（source_id・domain_id・access_status・source_title の表）で読む。
 * 台帳の扱い（#62）が変わったら、ここを合わせる。
 *
 * Usage:
 *   node pd/scripts/wiki-gen-check.mjs --count   # 数だけ
 *   node pd/scripts/wiki-gen-check.mjs --list    # 一覧（分野・source_id・題・出典ノートの有無）
 * いつも 0 で終わる。
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { REPO_ROOT, readWikiPages } from "./wiki-sources.mjs";

const READABLE = new Set(["raw-confirmed", "url-verified"]);
const MANIFEST = join(REPO_ROOT, "cs/knowledge/raw/manifest.md");
// 出典ページを作らずにおくと決めた原典（写しが載せてよい範囲でない・ノートの引用が原文と合わない など）。
// ここに行がある原典は held に理由を入れ、知らせ（出典ノートがあるのに出典ページが無い）から外す（2026-11-10）。
const HELD = join(REPO_ROOT, "pd/wiki-drafts/held-sources.md");

export function heldSources() {
  const held = new Map();
  if (!existsSync(HELD)) return held;
  for (const line of readFileSync(HELD, "utf8").split("\n")) {
    const m = /^\|\s*(D\d{2}-S\d+[a-z]?)\s*\|[^|]*\|\s*([^|]*)\|/.exec(line);
    if (m) held.set(m[1], m[2].trim());
  }
  return held;
}

export function missingSourcePages() {
  if (!existsSync(MANIFEST)) return [];
  const have = new Set(
    readWikiPages().flatMap((p) => p.sources.map((s) => s.manifest_id).filter(Boolean))
  );
  const held = heldSources();
  const out = [];
  for (const line of readFileSync(MANIFEST, "utf8").split("\n")) {
    const m = /^\|\s*(D\d{2}-S\d+[a-z]?)\s*\|\s*(D\d{2})\s*\|\s*`?([\w-]+)`?\s*\|\s*([^|]*)\|/.exec(line);
    if (!m) continue;
    const [, id, domain, status, title] = m;
    if (!READABLE.has(status) || have.has(id)) continue;
    const dir = join(REPO_ROOT, "cs/knowledge/source-notes", domain);
    const note = existsSync(dir) && readdirSync(dir).some((n) => n.startsWith(`${id}_`));
    out.push({ id, domain, status, title: title.trim(), note, held: held.get(id) || "" });
  }
  return out;
}

function main() {
  const miss = missingSourcePages();
  const withNote = miss.filter((m) => m.note && !m.held).length;
  const held = miss.filter((m) => m.held).length;
  if (process.argv.includes("--list")) {
    for (const m of miss) console.log(`${m.id}\t${m.status}\t出典ノート${m.note ? "あり" : "なし"}${m.held ? "\t作らずにおく" : ""}\t${m.title.slice(0, 80)}`);
  }
  console.log(`台帳で読める原典なのに wiki の出典ページが無いもの：${miss.length}（うち出典ノートがあるもの ${withNote}・作らずにおくもの ${held}〔pd/wiki-drafts/held-sources.md〕。止めずに知らせるだけ。一覧は --list）`);
}

// 直接走らせたときだけ main（wiki-stale-check.mjs から import したときは走らせない）
if (import.meta.url === `file://${process.argv[1]}`) {
  try { main(); } catch (e) { console.error(`wiki-gen-check error: ${e.message}`); }
  process.exit(0);
}
