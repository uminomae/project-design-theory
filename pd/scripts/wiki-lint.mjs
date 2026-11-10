#!/usr/bin/env node
/**
 * wiki-lint.mjs
 *
 * wiki/ の健全性チェック:
 *   - WL-1 CN divergence (旧用語残存)  → wiki/health/cn-divergence-report.md
 *   - WL-3 古いページ（出典が compiled 日より後に変わった。wiki-sources.mjs）→ wiki/health/freshness-report.md
 *   - WL-4 孤立ページ検出              → wiki/health/orphan-report.md
 *   - WL-5 source path 実在確認        → wiki/health/freshness-report.md (統合)
 *
 * 既存レポートの手書きセクションを保護するため、マーカー
 *   <!-- auto:start --> ... <!-- auto:end -->
 * で囲まれた範囲のみ書き換える。マーカーがない場合はファイル末尾に追記する。
 *
 * Usage: node scripts/wiki-lint.mjs [--quiet]
 * Exit 0: 常に 0 (hook がセッションを止めないように)
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, basename, relative, dirname, resolve } from "node:path";
import { parseSources as parseSourcesShared, resolveSource, stalePages, readWikiPages, lastChangeDates, isShallow, REPO_ROOT } from "./wiki-sources.mjs";

const ROOT = resolve(new URL("..", import.meta.url).pathname.replace(/\/$/, ""));
const WIKI = join(ROOT, "wiki");
const HEALTH = join(WIKI, "health");
const ORPHAN_REPORT = join(HEALTH, "orphan-report.md");
const FRESHNESS_REPORT = join(HEALTH, "freshness-report.md");
const CN_REPORT = join(HEALTH, "cn-divergence-report.md");

// 出典の repo の名前とパスの読み方は wiki-sources.mjs（今までの四つの repo の名前も、pd・cs・ks・as も読む）。

// WL-1 forbidden terms: { pattern, replacement_hint, severity }
// "pattern" is a regex source string (case-insensitive for Latin)
const FORBIDDEN_TERMS = [
  { name: "Withhold", pattern: /\bWithhold\b/gi, hint: "Containment / 抱持" },
  { name: "F軸", pattern: /F軸/g, hint: "生存軸" },
  { name: "O軸", pattern: /O軸/g, hint: "信頼軸" },
  { name: "D1-D4 定義体系", pattern: /\bD[1-4]\b[^\n]{0,20}(?:定義|コア|体系)/g, hint: "用語名で記述" },
];

const QUIET = process.argv.includes("--quiet");
// --check：報告（wiki/health/*.md）を書き換えず、孤立ページ・不在の source path・旧用語があれば 1 で終わる。
// scripts/check.sh から呼ぶ（2026-11-08・docs/TESTING.md）。指定しないときは今までどおり報告を書き換え、0 で終わる。
const CHECK = process.argv.includes("--check");
function writeReport(path, text) { if (!CHECK) writeFileSync(path, text); }
const log = (...args) => { if (!QUIET) console.error(...args); };

// ---- helpers ----

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function today() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseFrontMatter(text) {
  if (!text.startsWith("---\n")) return { front: {}, body: text, raw: "" };
  const end = text.indexOf("\n---\n", 4);
  if (end < 0) return { front: {}, body: text, raw: "" };
  const raw = text.slice(4, end);
  const body = text.slice(end + 5);
  const front = {};
  for (const line of raw.split("\n")) {
    const m = /^([a-zA-Z_][\w-]*):\s*(.*)$/.exec(line);
    if (m) front[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return { front, body, raw };
}

function parseAliases(frontRaw) {
  // aliases: ["a", "b", ...]  — minimal parser
  const m = /^aliases:\s*\[(.*)\]\s*$/m.exec(frontRaw);
  if (!m) return [];
  return m[1]
    .split(",")
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}


// [[target]] / [[target|alias]] / [[target#section]] / [[path/target]]
const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

// WL-6: safe path prefixes that legitimately contain /
const SAFE_WIKILINK_PREFIXES = ["sources/", "concepts/", "cross-refs/", "keywords/"];

/**
 * WL-6: Detect wikilinks whose target contains `/` but does NOT start
 * with a known directory prefix (sources/, concepts/, etc.).
 * These may be year-range titles like [[van Gennep 1909/1960]] where
 * the `/` is misinterpreted as a path separator, truncating the link stem.
 */
function extractSuspiciousSlashLinks(text) {
  WIKILINK_RE.lastIndex = 0;
  const suspicious = [];
  let m;
  while ((m = WIKILINK_RE.exec(text)) !== null) {
    let raw = m[1];
    const escPipe = raw.indexOf("\\|");
    const pipe = raw.indexOf("|");
    const cut = escPipe >= 0 && (pipe < 0 || escPipe < pipe) ? escPipe : pipe;
    const target = (cut >= 0 ? raw.slice(0, cut) : raw).trim();
    if (target.includes("/") && !SAFE_WIKILINK_PREFIXES.some((pfx) => target.startsWith(pfx))) {
      suspicious.push(target);
    }
  }
  return suspicious;
}

function extractLinks(text) {
  const links = [];
  let m;
  while ((m = WIKILINK_RE.exec(text)) !== null) {
    let raw = m[1];
    // handle escaped pipe \|  and regular |
    const escPipe = raw.indexOf("\\|");
    const pipe = raw.indexOf("|");
    const cut = escPipe >= 0 && (pipe < 0 || escPipe < pipe) ? escPipe : pipe;
    if (cut >= 0) raw = raw.slice(0, cut);
    // strip section
    const hash = raw.indexOf("#");
    if (hash >= 0) raw = raw.slice(0, hash);
    // strip path (use basename as canonical key)
    const slash = raw.lastIndexOf("/");
    const target = slash >= 0 ? raw.slice(slash + 1) : raw;
    links.push(target.trim());
  }
  return links;
}

function replaceAutoBlock(text, block, beforeIfMissing = "\n## 判定") {
  const startTag = "<!-- auto:start -->";
  const endTag = "<!-- auto:end -->";
  const si = text.indexOf(startTag);
  const ei = text.indexOf(endTag);
  if (si >= 0 && ei > si) {
    return text.slice(0, si + startTag.length) + "\n" + block + "\n" + text.slice(ei);
  }
  // Insert before beforeIfMissing marker, else append
  const idx = text.indexOf(beforeIfMissing);
  const auto = `${startTag}\n${block}\n${endTag}\n`;
  if (idx >= 0) {
    return text.slice(0, idx) + auto + "\n" + text.slice(idx);
  }
  return text.replace(/\s*$/, "\n\n") + auto;
}

function updateCheckedDate(text, newDate) {
  return text.replace(/^(checked:\s*)["']?[\d-]+["']?/m, `$1"${newDate}"`);
}

// ---- main ----

function main() {
  if (!existsSync(WIKI)) {
    log("wiki/ not found, skip");
    return 0;
  }

  // allFiles: pages subject to orphan check (exclude health/)
  // linkTargets: all pages that can be linked to (include health/)
  const linkTargets = walk(WIKI);
  const allFiles = linkTargets.filter((f) => !f.includes("/health/"));

  // Resolve key: stem -> canonical stem (via aliases)
  // byStem maps any usable link key to the canonical file stem.
  const byStem = new Map();
  const canonicalStems = new Set();
  for (const f of linkTargets) {
    const stem = basename(f, ".md");
    canonicalStems.add(stem);
    if (!byStem.has(stem)) byStem.set(stem, stem);
    const text = readFileSync(f, "utf8");
    const { raw } = parseFrontMatter(text);
    for (const alias of parseAliases(raw)) {
      if (!byStem.has(alias)) byStem.set(alias, stem);
    }
    // title はリンクの行き先にしない。サイトの wiki を組む Quartz は、ファイル名（stem）と
    // aliases でしかリンクを解決しないので、[[題]] は無いページへのリンクになる（#66・2026-11-08）。
  }

  // Build backlink map: canonical stem -> Set of referring canonical stems
  const backrefs = new Map();
  for (const stem of canonicalStems) backrefs.set(stem, new Set());

  let totalLinks = 0;
  let broken = 0;

  const brokenSamples = [];
  const suspiciousSlashLinks = [];
  // wikilink.md は記法説明ページで、解決しない例示リンクを意図的に含む。
  // broken 抽出のソースから除外する（孤立判定の EXCLUDE と同じ扱い。pd#120）。
  const BROKEN_SRC_EXCLUDE = new Set(["wikilink"]);
  for (const f of allFiles) {
    const text = readFileSync(f, "utf8");
    const { body } = parseFrontMatter(text);
    const srcStem = basename(f, ".md");
    const skipBroken = BROKEN_SRC_EXCLUDE.has(srcStem);
    const links = extractLinks(body);
    for (const target of links) {
      totalLinks++;
      const canonical = byStem.get(target);
      if (canonical) {
        if (canonical !== srcStem) backrefs.get(canonical).add(srcStem);
      } else if (!skipBroken) {
        broken++;
        if (brokenSamples.length < 20) brokenSamples.push({ from: srcStem, target });
      }
    }
    // WL-6: detect suspicious / in wikilink targets
    for (const t of extractSuspiciousSlashLinks(body)) {
      if (suspiciousSlashLinks.length < 20) suspiciousSlashLinks.push({ from: srcStem, target: t });
    }
  }

  // Orphans: pages with 0 backrefs, excluding meta pages
  // health/ の三つの報告は、入口に並べず Quartz にも出さない内部の帳簿なので、孤立に数えない（2026-11-10・Issue #111）
  const EXCLUDE = new Set(["index", "about", "about-project-design", "log", "wikilink", "cn-divergence-report", "freshness-report", "orphan-report"]);
  const orphans = [];
  for (const [stem, refs] of backrefs) {
    if (EXCLUDE.has(stem)) continue;
    if (refs.size === 0) orphans.push(stem);
  }
  orphans.sort();

  // Directory breakdown
  const dirCounts = new Map();
  const dirOrphans = new Map();
  for (const f of allFiles) {
    const rel = relative(WIKI, f);
    const slash = rel.indexOf("/");
    const dir = slash >= 0 ? rel.slice(0, slash) : "(root)";
    dirCounts.set(dir, (dirCounts.get(dir) || 0) + 1);
    const stem = basename(f, ".md");
    if (orphans.includes(stem)) {
      dirOrphans.set(dir, (dirOrphans.get(dir) || 0) + 1);
    }
  }

  // Top hubs
  const hubs = [...backrefs.entries()]
    .map(([stem, refs]) => ({ stem, count: refs.size }))
    .filter((h) => !EXCLUDE.has(h.stem))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // ---- render orphan auto block ----
  const date = today();
  const lines = [];
  lines.push(`_auto-generated by scripts/wiki-lint.mjs at ${date}_`);
  lines.push("");
  lines.push("## サマリ");
  lines.push("");
  lines.push("| 指標 | 値 |");
  lines.push("|---|---|");
  lines.push(`| 総ページ数 | ${allFiles.length} |`);
  lines.push(`| 総 wikilink 数 | ${totalLinks} |`);
  lines.push(`| Orphan（除外: ${[...EXCLUDE].join(", ")}） | **${orphans.length}** |`);
  lines.push(`| Broken wikilink | ${broken} |`);
  lines.push(`| WL-6 疑わしい / 入り wikilink | ${suspiciousSlashLinks.length} |`);
  lines.push("");
  lines.push("## ディレクトリ別");
  lines.push("");
  lines.push("| ディレクトリ | ページ数 | Orphan |");
  lines.push("|---|---|---|");
  for (const [dir, count] of [...dirCounts.entries()].sort()) {
    lines.push(`| ${dir} | ${count} | ${dirOrphans.get(dir) || 0} |`);
  }
  lines.push("");
  lines.push("## Top 10 hubs（被リンク数）");
  lines.push("");
  lines.push("| ページ | 被リンク数 |");
  lines.push("|---|---|");
  for (const h of hubs) lines.push(`| ${h.stem} | ${h.count} |`);
  lines.push("");
  if (orphans.length > 0) {
    lines.push("## Orphan 一覧");
    lines.push("");
    for (const o of orphans) lines.push(`- ${o}`);
    lines.push("");
  }
  if (brokenSamples.length > 0) {
    lines.push("## Broken wikilink サンプル (最大 20 件)");
    lines.push("");
    for (const b of brokenSamples) lines.push("- `" + b.target + "` ← " + b.from);
    lines.push("");
  }
  if (suspiciousSlashLinks.length > 0) {
    lines.push("## WL-6 疑わしい `/` 入り wikilink (最大 20 件)");
    lines.push("");
    lines.push("年号 `1909/1960` 等タイトルに `/` が含まれると basename 誤抽出が起きます。");
    lines.push("pipe 形式 `[[stem|ラベル]]` または aliases を使用してください。");
    lines.push("");
    for (const b of suspiciousSlashLinks) lines.push("- `" + b.target + "` ← " + b.from);
    lines.push("");
  }
  const autoBlock = lines.join("\n");

  // ---- update orphan-report.md ----
  if (existsSync(ORPHAN_REPORT)) {
    let text = readFileSync(ORPHAN_REPORT, "utf8");
    text = updateCheckedDate(text, date);
    // WARN only if true orphans exist; broken wikilinks are reported but not fail-level
    // (wikilink.md contains 文法説明用例 which are intentionally broken).
    const status = orphans.length > 0 ? "WARN" : "PASS";
    text = text.replace(/^(status:\s*).*$/m, `$1${status}`);
    text = replaceAutoBlock(text, autoBlock);
    writeReport(ORPHAN_REPORT, text);
    log(`orphan-report updated: ${orphans.length} orphans, ${broken} broken, ${totalLinks} links`);
  }

  // ---- WL-1: CN divergence (forbidden terms) ----
  // Meta ページ (about/wikilink/log/health) には用語変更の説明として旧用語が正当に登場する
  // ので検査対象外とする
  const WL1_EXCLUDE_STEMS = new Set(["about", "about-project-design", "wikilink", "log", "index"]);
  const cnHits = [];
  for (const f of allFiles) {
    const stem = basename(f, ".md");
    if (WL1_EXCLUDE_STEMS.has(stem)) continue;
    const text = readFileSync(f, "utf8");
    const { body } = parseFrontMatter(text);
    const rel = relative(WIKI, f);
    for (const term of FORBIDDEN_TERMS) {
      term.pattern.lastIndex = 0;
      const matches = body.match(term.pattern);
      if (matches && matches.length > 0) {
        cnHits.push({ file: rel, term: term.name, hint: term.hint, count: matches.length });
      }
    }
  }

  // ---- WL-5: source path existence ----
  const missingSources = [];
  for (const f of allFiles) {
    const text = readFileSync(f, "utf8");
    const { raw } = parseFrontMatter(text);
    for (const src of parseSourcesShared(raw)) {
      const r = resolveSource(src);
      if (r.unknownRepo) {
        missingSources.push({ file: relative(WIKI, f), src, reason: `unknown repo: ${src.repo}` });
        continue;
      }
      if (!r.path) continue;
      // 原典の PDF・素材は git に入れず手元だけに置く（CLAUDE.md）。台帳 manifest.md だけを確かめる
      if (/knowledge\/raw\/(?!manifest\.md$)/.test(r.path)) continue;
      if (!existsSync(join(REPO_ROOT, r.path))) {
        missingSources.push({ file: relative(WIKI, f), src, reason: "path not found" });
      }
    }
  }

  // ---- WL-3: 古いページ（出典が compiled 日より後に変わった）----
  const shallow = isShallow();
  const stale = shallow ? [] : stalePages(readWikiPages(), lastChangeDates());

  // ---- render freshness auto block (WL-3 date + WL-5 results) ----
  const freshLines = [];
  freshLines.push(`_auto-generated by scripts/wiki-lint.mjs at ${date}_`);
  freshLines.push("");
  freshLines.push("## WL-3 古いページ");
  freshLines.push("");
  freshLines.push(`wiki/ の ${allFiles.length} ページを見た。出典の最後の変更（git の commit。2026-11-08 から）が、ページの compiled 日より後のものを並べる。`);
  freshLines.push("");
  if (shallow) {
    freshLines.push("git の履歴が浅いので、日付を比べていない。");
  } else if (stale.length === 0) {
    freshLines.push("古いページ: **なし**");
  } else {
    freshLines.push(`古いページ: **${stale.length}**`);
    freshLines.push("");
    freshLines.push("| wiki ページ | compiled | 後から変わった出典 |");
    freshLines.push("|---|---|---|");
    for (const st of stale) {
      freshLines.push(`| [[${st.rel.replace(/\.md$/, "")}\\|${st.title.replace(/\|/g, "／")}]] | ${st.compiled || "不明"} | ${st.newer.map((n) => `${n.path}（${n.date}）`).join("<br>")} |`);
    }
  }
  freshLines.push("");
  freshLines.push("## WL-5 source path 実在確認");
  freshLines.push("");
  if (missingSources.length === 0) {
    freshLines.push("全 source パス実在: **OK**");
  } else {
    freshLines.push(`不在の source path: **${missingSources.length} 件**`);
    freshLines.push("");
    freshLines.push("| wiki ページ | repo | path | 理由 |");
    freshLines.push("|---|---|---|---|");
    for (const m of missingSources) {
      freshLines.push(`| ${m.file} | ${m.src.repo} | ${m.src.path} | ${m.reason} |`);
    }
  }
  freshLines.push("");
  const freshAutoBlock = freshLines.join("\n");

  if (existsSync(FRESHNESS_REPORT)) {
    let text = readFileSync(FRESHNESS_REPORT, "utf8");
    text = updateCheckedDate(text, date);
    const fstatus = missingSources.length > 0 ? "FAIL" : stale.length > 0 ? "WARN" : "PASS";
    text = text.replace(/^(status:\s*).*$/m, `$1${fstatus}`);
    text = replaceAutoBlock(text, freshAutoBlock);
    writeReport(FRESHNESS_REPORT, text);
    log(`freshness-report updated: ${missingSources.length} missing sources`);
  }

  // ---- render cn-divergence auto block ----
  const cnLines = [];
  cnLines.push(`_auto-generated by scripts/wiki-lint.mjs at ${date}_`);
  cnLines.push("");
  cnLines.push("## WL-1 旧用語検出");
  cnLines.push("");
  if (cnHits.length === 0) {
    cnLines.push("旧用語残存: **なし** (PASS)");
  } else {
    cnLines.push(`旧用語残存: **${cnHits.length} 件**`);
    cnLines.push("");
    cnLines.push("| wiki ページ | 旧用語 | 代替 | ヒット数 |");
    cnLines.push("|---|---|---|---|");
    for (const h of cnHits) {
      cnLines.push(`| ${h.file} | ${h.term} | ${h.hint} | ${h.count} |`);
    }
  }
  cnLines.push("");
  const cnAutoBlock = cnLines.join("\n");

  if (existsSync(CN_REPORT)) {
    let text = readFileSync(CN_REPORT, "utf8");
    text = updateCheckedDate(text, date);
    const cstatus = cnHits.length > 0 ? "FAIL" : "PASS";
    text = text.replace(/^(status:\s*).*$/m, `$1${cstatus}`);
    text = replaceAutoBlock(text, cnAutoBlock);
    writeReport(CN_REPORT, text);
    log(`cn-divergence-report updated: ${cnHits.length} forbidden term hits`);
  }

  if (CHECK) {
    const problems = orphans.length + missingSources.length + cnHits.length;
    console.log(`wiki-lint --check: 孤立 ${orphans.length}・不在の source path ${missingSources.length}・旧用語 ${cnHits.length}（壊れたリンク ${broken}・古いページ ${stale.length} は数えない）`);
    return problems > 0 ? 1 : 0;
  }
  return 0;
}

try {
  process.exit(main());
} catch (err) {
  log(`wiki-lint error: ${err.message}`);
  process.exit(CHECK ? 1 : 0); // hook として呼ぶときは止めない。--check のときは落とす
}
