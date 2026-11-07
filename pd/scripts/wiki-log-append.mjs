#!/usr/bin/env node
// wiki/log.md auto-append — pd#71
//
// HEAD コミットを検査し wiki/*.md の変更が閾値以上あれば
// wiki/log.md にエントリを追記 → follow-up コミットを作る。
//
// guards:
//   - log.md しか変更されていない（= 自身の follow-up コミット）なら skip
//   - HEAD commit message が "auto-append" を含むなら skip
//   - 閾値 3 未満なら skip
//   - wiki/log.md が既にそのコミットに含まれていれば skip（手動更新済み）

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const THRESHOLD = 3;
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LOG_PATH = resolve(REPO_ROOT, "wiki/log.md");

function sh(cmd) {
  // -c core.quotepath=false でマルチバイトファイル名を raw UTF-8 のまま得る
  const prefixed = cmd.replace(/^git /, "git -c core.quotepath=false ");
  return execSync(prefixed, { cwd: REPO_ROOT, encoding: "utf8" }).trim();
}

function main() {
  if (!existsSync(LOG_PATH)) return;

  const sha = sh("git rev-parse --short HEAD");
  const subject = sh("git log -1 --pretty=%s");
  const date = sh("git log -1 --pretty=%cd --date=format:%Y-%m-%d");

  if (/auto-append/i.test(subject)) return;

  const changed = sh("git diff-tree --no-commit-id --name-only -r HEAD")
    .split("\n")
    .filter(Boolean);

  const wikiMd = changed.filter(
    (f) => f.startsWith("wiki/") && f.endsWith(".md") && f !== "wiki/log.md",
  );
  if (wikiMd.length < THRESHOLD) return;

  if (changed.includes("wiki/log.md")) return;

  const sampleFiles = wikiMd.slice(0, 5).map((f) => `  - ${f}`).join("\n");
  const more = wikiMd.length > 5 ? `\n  - ... (+${wikiMd.length - 5})` : "";

  const entry = `## [${date}] auto-append | ${subject}
- commit: ${sha}
- pages: ${wikiMd.length} wiki/*.md 変更
- files:
${sampleFiles}${more}

`;

  const log = readFileSync(LOG_PATH, "utf8");
  const marker = "-->\n\n";
  const idx = log.indexOf(marker);
  if (idx === -1) return;
  const insertAt = idx + marker.length;
  const next = log.slice(0, insertAt) + entry + log.slice(insertAt);
  writeFileSync(LOG_PATH, next);

  sh("git add wiki/log.md");
  sh(
    `git commit -m "chore(wiki): log.md auto-append for ${sha}" -m "pd#71" --trailer "Co-Authored-By: Claude <noreply@anthropic.com>"`,
  );

  console.error(`[wiki-log-append] appended entry for ${sha} (${wikiMd.length} wiki files)`);
}

try {
  main();
} catch (e) {
  console.error(`[wiki-log-append] skipped: ${e.message}`);
  process.exit(0);
}
