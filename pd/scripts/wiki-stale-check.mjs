#!/usr/bin/env node
/**
 * wiki-stale-check.mjs
 *
 * wiki の材料（正本）を直したときに、それを出典にする wiki のページを知らせる。
 * 今までの project-design の #72 の仕組みを、一つの repo の形に作り直した（2026-11-10）。
 * #77 の inbox（.cache/inbox/wiki-restale-*.md と、セッションの始めの自動の作り直し）は入れない。
 * 作り直しは週に一度、週のまとめのレビューの司令塔が別のセッションにまとめて出す（--weekly。pjdhiro 2026-11-24
 * 「セッション終了時に動くwikiの更新も週に一度でいいんだよね」。.claude/skills/wiki-compile/SKILL.md「週の作り直し」）。
 * 正本を直したときと、セッションの始めの知らせは、「週の作り直しで拾う」と知らせるだけ。
 *
 * Usage（repo のどこからでも）:
 *   node pd/scripts/wiki-stale-check.mjs --knowledge <path>   # repo の根からのパス（例 pd/knowledge/meta/project-overview.md）
 *   node pd/scripts/wiki-stale-check.mjs --hook <path> --session <id>
 *        # .claude/hooks/content-compile.sh から呼ぶ。知らせを Claude に渡す JSON を標準出力に出す。
 *        # 同じセッションで同じファイルは一度だけ知らせる（.cache/wiki-stale/<session>.txt）
 *   node pd/scripts/wiki-stale-check.mjs --list    # 古いページ（出典が compiled 日より後に変わった）を並べる
 *   node pd/scripts/wiki-stale-check.mjs --count   # 古いページの数だけ（scripts/check.sh が使う）
 *   node pd/scripts/wiki-stale-check.mjs --weekly [--log <記録の名前>]
 *        # 週の作り直しの一覧（古いページと、出典ノートがあるのに出典ページが無い原典）。司令塔が作り直す別のセッションを出す。
 *        # 出した印を本体の checkout の .cache/wiki-order.json に書き、ほかのセッションが 24 時間のうちに同じものを出さない
 *        # （並べた分は、出すものとして取る。もう出ている分は並べない。#130・pjdhiro 2026-11-11「印を置く」）
 *   node pd/scripts/wiki-stale-check.mjs --session-start [--json]
 *        # セッションの始めの知らせ（古いページと出典ページの無い原典の数を一行）。--json は SessionStart の hook の形
 *   node pd/scripts/wiki-stale-check.mjs --session-end
 *        # 2026-11-10〜11-24 の区切るときの指令。今は何もせず、週の作り直しに移ったことだけを出す
 *
 * いつも 0 で終わる（hook と検査を止めない）。
 */

import { existsSync, mkdirSync, readFileSync, appendFileSync, writeFileSync, renameSync, rmdirSync } from "node:fs";
import { join, relative, isAbsolute, resolve, dirname } from "node:path";
import { execFileSync } from "node:child_process";
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
    "作り直しは週の作り直しで拾う（.claude/skills/wiki-compile/SKILL.md「週の作り直し」）。この作業では作り直さない。",
  ];
  return lines.join("\n");
}

// 区切るときの指令の印（#130）。worktree のセッションどうしで見えるよう、本体の checkout の .cache/ に置く。
const ORDER_TTL_MS = 24 * 60 * 60 * 1000;
function mainCheckout() {
  try {
    const common = execFileSync("git", ["rev-parse", "--path-format=absolute", "--git-common-dir"], { cwd: REPO_ROOT, encoding: "utf8" }).trim();
    return dirname(common);
  } catch { return REPO_ROOT; }
}
// 印を読み、まだ出ていないものだけを返し、それを出すものとして書き足す。二つのセッションが同時に回しても重ならないよう、mkdir で錠を取る。
function claimOrders(keys, log) {
  const dir = join(mainCheckout(), ".cache");
  const file = join(dir, "wiki-order.json");
  const lock = join(dir, "wiki-order.lock");
  mkdirSync(dir, { recursive: true });
  let locked = false;
  for (let i = 0; i < 50 && !locked; i++) {
    try { mkdirSync(lock); locked = true; } catch { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100); }
  }
  try {
    const now = Date.now();
    let orders = [];
    try { orders = JSON.parse(readFileSync(file, "utf8")).orders || []; } catch { /* 印が無い・壊れている */ }
    orders = orders.filter((o) => now - Date.parse(o.time) < ORDER_TTL_MS);
    const by = new Map();
    for (const o of orders) for (const k of o.keys) by.set(k, o);
    const fresh = keys.filter((k) => !by.has(k));
    const already = [...new Set(keys.filter((k) => by.has(k)).map((k) => by.get(k)))];
    if (fresh.length) orders.push({ time: new Date(now).toISOString(), local: new Date(now).toLocaleString("ja-JP", { hour12: false }), log: log || "（記録の名前なし）", keys: fresh });
    const tmp = file + "." + process.pid;
    writeFileSync(tmp, JSON.stringify({ orders }, null, 1) + "\n");
    renameSync(tmp, file);
    return { fresh: new Set(fresh), already };
  } finally {
    if (locked) try { rmdirSync(lock); } catch { /* 消えている */ }
  }
}

async function main() {
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

  if (args.includes("--session-end")) {
    // 2026-11-10〜11-24 は、区切るたびにここで一覧を出し、別のセッションに作り直しを出していた。
    // 今は週に一度（--weekly）。古い手順で呼ばれたときに、移ったことだけを知らせる。
    console.log("wiki の作り直しは、区切るたびでなく週に一度に移した（pjdhiro 2026-11-24）。区切るときは何も出さない。週の作り直しは .claude/skills/wiki-compile/SKILL.md「週の作り直し」（--weekly）。");
    return;
  }

  if (args.includes("--session-start") || args.includes("--weekly")) {
    // --session-start：セッションの始めの知らせ（scripts/session-digest.sh と .claude/hooks/wiki-session-start.sh が呼ぶ）。数を一行だけ。
    // --weekly：週の作り直しの一覧。司令塔が別のセッションに出す（.claude/skills/wiki-compile/SKILL.md「週の作り直し」）。
    // 何も無ければ何も出さない。
    if (isShallow()) return;
    let stale = stalePages(pages, lastChangeDates());
    let miss = [];
    try { miss = (await import("./wiki-gen-check.mjs")).missingSourcePages().filter((m) => m.note && !m.held); } catch { /* 台帳が無い */ }
    if (!stale.length && !miss.length) return;
    const weekly = args.includes("--weekly");
    const staleKey = (s) => `pd/wiki/${s.rel}@${s.newer.map((n) => n.date).sort().pop() || ""}`;
    let already = [];
    if (weekly) {
      // 週の作り直し：印を見て、ほかのセッションがもう出したものを外し、残りを自分が出すものとして取る（#130）。
      const claim = claimOrders([...stale.map(staleKey), ...miss.map((m) => `source:${m.id}`)], arg("--log"));
      already = claim.already;
      stale = stale.filter((s) => claim.fresh.has(staleKey(s)));
      miss = miss.filter((m) => claim.fresh.has(`source:${m.id}`));
      if (!stale.length && !miss.length) {
        console.log(`wiki の週の作り直し：一覧は、ほかのセッションがもう出している（${already.map((o) => `${o.log}・${o.local || o.time}`).join("、")}）。出さない。`);
        return;
      }
    }
    if (!weekly) {
      const parts = [];
      if (stale.length) parts.push(`古いページ ${stale.length}`);
      if (miss.length) parts.push(`出典ページの無い原典 ${miss.length}`);
      const text = `wiki の知らせ（セッションの始め）：${parts.join("・")}。週の作り直しで拾うので、今は作り直さない（一覧は node pd/scripts/wiki-stale-check.mjs --list）。`;
      if (args.includes("--json")) {
        process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: text } }));
      } else console.log(text);
      return;
    }
    const lines = ["wiki の週の作り直し："];
    if (stale.length) {
      lines.push(`- 古いページ ${stale.length}（出典が compiled 日より後に変わった）：`);
      // 週に一度で数が溜まるので、印を付けた分は全部並べる（渡す一覧から落とさない）。
      for (const s of stale) lines.push(`  - pd/wiki/${s.rel} ← ${s.newer.map((n) => n.path).join("、")}`);
    }
    if (miss.length) {
      lines.push(`- 出典ノートがあるのに wiki の出典ページが無い原典 ${miss.length}：${miss.map((m) => m.id).join("・")}`);
    }
    if (already.length) lines.push(`（ほかに、もう出ている分がある：${already.map((o) => `${o.log}・${o.local || o.time}`).join("、")}。それは並べていない）`);
    lines.push("これは、このセッションが出すものとして印を付けた（本体の .cache/wiki-order.json・24 時間）。司令塔として、これを作り直す別のセッションを始める（.claude/skills/wiki-compile/SKILL.md「週の作り直し」の雛形に、この一覧を入れて渡す。main へは送らない）。自分では直さない。");
    console.log(lines.join("\n"));
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

  console.error("Usage: wiki-stale-check.mjs --knowledge <path> | --hook <path> --session <id> | --list | --count | --weekly [--log <name>] | --session-start [--json]");
}

try { await main(); } catch (err) { console.error(`wiki-stale-check error: ${err.message}`); }
process.exit(0);
