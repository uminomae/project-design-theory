#!/usr/bin/env node
/**
 * generate-wiki-index.mjs
 *
 * wiki/ の全ページ front matter から wiki/index.md を自動生成する。
 * PostToolUse hook (content-compile.sh) から呼ばれる。
 *
 * Usage: node scripts/generate-wiki-index.mjs
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join, basename } from "path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const WIKI = join(ROOT, "wiki");
const OUTPUT = join(WIKI, "index.md");

// --- Domain name mapping (D01-D30) ---
const DOMAIN_NAMES = {
  D01: "数学",
  D02: "物理学",
  D03: "化学",
  D04: "進化生物学",
  D05: "地球科学",
  D06: "天文学",
  D07: "工学・情報科学",
  D08: "神経科学",
  D09: "生命科学",
  D10: "臨床医学",
  D11: "薬学",
  D12: "農学・生態学",
  D13: "哲学",
  D14: "心理学",
  D15: "美学",
  D16: "歴史学",
  D17: "言語学",
  D18: "社会学",
  D19: "文学",
  D20: "法学・政治学",
  D21: "経済学",
  D22: "経営学",
  D23: "発達心理学",
  D24: "宗教学",
  D25: "人類学",
  D26: "音楽学",
  D27: "建築",
  D28: "舞台芸術",
  D29: "複雑系科学",
  D30: "伝統知・技芸",
};

// --- awareness-model section mapping ---
const AM_SECTIONS = {
  "§1-先行研究": "先行研究（確立された知見）",
  "§2-核心仮説": "核心仮説の多層的証拠",
  "§3-哲学臨床": "哲学・臨床理論",
};

// --- Front matter parser ---
function parseFrontMatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const get = (key) => {
    const re = new RegExp(`^${key}:\\s*"?([^"\\n]*)"?`, "m");
    const match = fm.match(re);
    return match ? match[1].trim() : "";
  };
  // tags: [...] parsing
  const tagsMatch = fm.match(/^tags:\s*\[([^\]]*)\]/m);
  const tags = tagsMatch
    ? tagsMatch[1].split(",").map((t) => t.trim().replace(/^["']|["']$/g, ""))
    : [];
  return {
    title: get("title"),
    description: get("description"),
    compiled: get("compiled"),
    status: get("status"),
    review_state: get("review_state"),
    tags,
  };
}

// --- Read all pages from a directory ---
function readPages(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const content = readFileSync(join(dir, f), "utf-8");
      const fm = parseFrontMatter(content);
      return { file: f, stem: f.replace(/\.md$/, ""), ...fm };
    })
    .sort((a, b) => a.stem.localeCompare(b.stem));
}

// --- Format a wikilink with description ---
function wikilink(category, stem, title, description) {
  const display = title || stem;
  const desc = description ? ` -- ${description}` : "";
  return `- [[${category}/${stem}|${display}]]${desc}`;
}

// --- Main ---
function generate() {
  const today = new Date().toISOString().slice(0, 10);

  // Read all pages
  const concepts = readPages(join(WIKI, "concepts"));
  const keywords = readPages(join(WIKI, "keywords"));
  const sources = readPages(join(WIKI, "sources"));
  const crossRefs = readPages(join(WIKI, "cross-refs"));
  const health = readPages(join(WIKI, "health"));

  // Separate sources: domain (D01-D30) vs awareness-model
  const domainRe = /^D(\d{2})_/;
  const domainSources = {};
  const amSources = { "§1-先行研究": [], "§2-核心仮説": [], "§3-哲学臨床": [], other: [] };

  for (const s of sources) {
    const dm = s.stem.match(domainRe);
    if (dm) {
      const key = `D${dm[1]}`;
      if (!domainSources[key]) domainSources[key] = [];
      domainSources[key].push(s);
    } else {
      // awareness-model: classify by § tag
      const secTag = s.tags.find((t) => t.startsWith("§"));
      if (secTag && amSources[secTag]) {
        amSources[secTag].push(s);
      } else if (s.tags.includes("間主観性")) {
        amSources["§3-哲学臨床"].push(s);
      } else {
        amSources["§2-核心仮説"].push(s);
      }
    }
  }

  // Meta pages (wikilink etc.)
  const meta = concepts.filter((c) => c.tags.includes("meta") || c.stem === "wikilink");
  const conceptsMain = concepts.filter(
    (c) => !c.tags.includes("meta") && c.stem !== "wikilink"
  );

  // Collect all pages for "最近 compile されたページ"
  const allPages = [
    ...concepts.map((p) => ({ ...p, category: "concepts" })),
    ...keywords.map((p) => ({ ...p, category: "keywords" })),
    ...sources.map((p) => ({ ...p, category: "sources" })),
    ...crossRefs.map((p) => ({ ...p, category: "cross-refs" })),
  ];
  const recent = allPages
    .filter((p) => p.compiled)
    .sort((a, b) => b.compiled.localeCompare(a.compiled))
    .slice(0, 20);

  // --- Build output ---
  const lines = [];
  const push = (s) => lines.push(s);

  // Header
  push("---");
  push(`title: "Wiki Index"`);
  push(`compiled: "${today}"`);
  push("---");
  push("# Wiki -- Map of Content");
  push("");
  push("pd/knowledge/ および関連リポの知識を compile した閲覧用 wiki。");
  push("");
  push("> **[[about|About This Wiki]]** -- ソースの所在、compile の仕組み、Obsidian との分担を解説");
  push("");

  // Concepts
  push("## Concepts");
  for (const c of conceptsMain) {
    push(wikilink("concepts", c.stem, c.title, c.description));
  }
  push("");

  // Keywords
  push("## Keywords");
  for (const k of keywords) {
    push(wikilink("keywords", k.stem, k.title, k.description));
  }
  push("");

  // Meta
  if (meta.length > 0) {
    push("## Meta");
    for (const m of meta) {
      push(wikilink("concepts", m.stem, m.title, m.description));
    }
    push("");
  }

  // Sources
  push("## Sources / 原典");
  push("");

  // awareness-model
  push("### awareness-model 原典");
  push("");
  for (const [secKey, secLabel] of Object.entries(AM_SECTIONS)) {
    const items = amSources[secKey];
    if (items.length === 0) continue;
    push(`#### ${secLabel}`);
    for (const s of items) {
      push(wikilink("sources", s.stem, s.title, ""));
    }
    push("");
  }
  // other (no § tag, no 間主観性)
  if (amSources.other.length > 0) {
    push("#### その他");
    for (const s of amSources.other) {
      push(wikilink("sources", s.stem, s.title, ""));
    }
    push("");
  }

  // D01-D30
  push("### creation-space 30ドメイン原典");
  push("");
  const domainKeys = Object.keys(domainSources).sort();
  for (const dk of domainKeys) {
    const name = DOMAIN_NAMES[dk] || dk;
    const items = domainSources[dk];
    push(`#### ${dk} ${name} (${items.length}件)`);
    for (const s of items) {
      push(wikilink("sources", s.stem, s.title, ""));
    }
    push("");
  }

  // Cross References
  push("## Cross References");
  for (const c of crossRefs) {
    push(wikilink("cross-refs", c.stem, c.title, c.description));
  }
  push("");

  // Health
  push("## Health");
  for (const h of health) {
    push(wikilink("health", h.stem, h.title, ""));
  }
  push("");

  // Concepts 一覧 (status 別)
  push("## Concepts 一覧（status 別）");
  push("");
  push("| ページ | status | compiled | review_state |");
  push("|--------|--------|----------|--------------|");
  for (const c of concepts) {
    const link = `[[concepts/${c.stem}\\|${c.title || c.stem}]]`;
    push(`| ${link} | ${c.status || "-"} | ${c.compiled || "-"} | ${c.review_state || "-"} |`);
  }
  push("");

  // 最近 compile されたページ
  push("## 最近 compile されたページ");
  push("");
  push("| ページ | category | compiled |");
  push("|--------|----------|----------|");
  for (const p of recent) {
    const link = `[[${p.category}/${p.stem}\\|${p.title || p.stem}]]`;
    push(`| ${link} | ${p.category} | ${p.compiled} |`);
  }
  push("");
  push("> このページは `scripts/generate-wiki-index.mjs` により自動生成されます。wiki/ 内のページ変更時に PostToolUse hook で自動実行されます。");
  push("");

  // Write
  writeFileSync(OUTPUT, lines.join("\n"), "utf-8");

  // Stats to stderr
  const stats = {
    concepts: conceptsMain.length,
    keywords: keywords.length,
    sources: sources.length,
    crossRefs: crossRefs.length,
    domains: domainKeys.length,
  };
  process.stderr.write(
    `Wiki index generated: ${stats.concepts}C ${stats.keywords}K ${stats.sources}S ${stats.crossRefs}X ${stats.domains}D\n`
  );
}

generate();
