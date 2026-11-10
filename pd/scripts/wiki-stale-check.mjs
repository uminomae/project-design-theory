#!/usr/bin/env node
/**
 * wiki-stale-check.mjs
 *
 * wiki の材料（正本）を直したときに、それを出典にする wiki のページを知らせる。
 * 今までの project-design の #72 の仕組みを、一つの repo の形に作り直した（2026-11-10）。
 * #77 の inbox（.cache/inbox/wiki-restale-*.md と、セッションの始めの自動の作り直し）は入れない。
 * 代わりに、正本を直したセッションが、知らされたページを同じ作業で作り直し、一緒に commit する
 * （.claude/skills/wiki-compile/SKILL.md）。
 *
 * Usage（repo のどこからでも）:
 *   node pd/scripts/wiki-stale-check.mjs --knowledge <path>   # repo の根からのパス（例 pd/knowledge/meta/project-overview.md）
 *   node pd/scripts/wiki-stale-check.mjs --hook <path> --session <id>
 *        # .claude/hooks/content-compile.sh から呼ぶ。知らせを Claude に渡す JSON を標準出力に出す。
 *        # 同じセッションで同じファイルは一度だけ知らせる（.cache/wiki-stale/<session>.txt）
 *   node pd/scripts/wiki-stale-check.mjs --list    # 古いページ（出典が compiled 日より後に変わった）を並べる
 *   node pd/scripts/wiki-stale-check.mjs --count   # 古いページの数だけ（scripts/check.sh が使う）
 *
 * いつも 0 で終わる（hook と検査を止めない）。
 */

import { existsSync, mkdirSync, readFileSync, appendFileSync } from "node:fs";
import { join, relative, isAbsolute, resolve } from "node:path";
import {
  REPO_ROOT, readWikiPages, resolveSource, stalePages, lastChangeDates, isShallow,
} from "./wiki-sources.mjs";

const args = process.argv.slice(2);
const arg = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };

function toRepoPath(p) {
  const abs = isAbsolute(p) ? p : resolve(process.cwd(), p);
  const rel = relative(REPO_ROOT, abs);
  return rel.startsWith("..") ? p.replace(/^\.\//, "") : rel;
}

/** このパスを出典にするページ。原典の台帳そのものは数えない（行が増えるたびに全部の出典ページが当たる）。 */
function referencing(target, pages) {
  return pages.filter((p) =>
    p.sources.some((s) => {
      const r = resolveSource(s);
      if (r.note === target) return true;
      if (!r.path || /knowledge\/raw\//.test(r.path)) return false;
      return r.path === target || target.startsWith(r.path + "/");
    })
  );
}

function message(target, hits) {
  const lines = [
    `wiki の材料を直した：${target}`,
    `これを出典にする wiki のページ（${hits.length}）：`,
    ...hits.map((h) => `  - pd/wiki/${h.rel}（compiled ${h.compiled || "不明"}）`),
    "同じ作業で、.claude/skills/wiki-compile/SKILL.md に沿ってこれらのページを今の正本から作り直し、正本と一緒に commit する。",
    "直す必要が無いと確かめたページは、compiled を今日にする。どちらも pd/wiki/log.md に一行足す。",
  ];
  return lines.join("\n");
}

function main() {
  const pages = readWikiPages();

  const hookPath = arg("--hook");
  if (hookPath) {
    const target = toRepoPath(hookPath);
    if (/^pd\/wiki\//.test(target) || !/^(pd|cs|ks|as)\//.test(target)) return;
    const hits = referencing(target, pages);
    if (!hits.length) return;
    const session = (arg("--session") || "nosession").replace(/[^\w.-]/g, "_");
    const dir = join(REPO_ROOT, ".cache", "wiki-stale");
    const seenFile = join(dir, `${session}.txt`);
    const seen = existsSync(seenFile) ? readFileSync(seenFile, "utf8").split("\n") : [];
    if (seen.includes(target)) return;
    mkdirSync(dir, { recursive: true });
    appendFileSync(seenFile, target + "\n");
    process.stdout.write(JSON.stringify({
      hookSpecificOutput: { hookEventName: "PostToolUse", additionalContext: message(target, hits) },
    }));
    return;
  }

  const k = arg("--knowledge");
  if (k) {
    const target = toRepoPath(k);
    const hits = referencing(target, pages);
    console.log(hits.length ? message(target, hits) : `wiki-stale-check: ${target} を出典にする wiki のページは無い`);
    return;
  }

  if (args.includes("--list") || args.includes("--count")) {
    if (isShallow()) {
      console.log("wiki-stale-check: git の履歴が浅いので、日付を比べない");
      return;
    }
    const stale = stalePages(pages, lastChangeDates());
    if (args.includes("--count")) {
      console.log(`wiki の古いページ（出典が compiled 日より後に変わった）：${stale.length}（止めずに知らせるだけ。一覧は pd/wiki/health/freshness-report.md か --list）`);
      return;
    }
    for (const s of stale) {
      console.log(`${s.rel}（compiled ${s.compiled || "不明"}）← ${s.newer.map((n) => `${n.path} ${n.date}`).join("、")}`);
    }
    console.log(`計 ${stale.length}`);
    return;
  }

  console.error("Usage: wiki-stale-check.mjs --knowledge <path> | --hook <path> --session <id> | --list | --count");
}

try { main(); } catch (err) { console.error(`wiki-stale-check error: ${err.message}`); }
process.exit(0);
