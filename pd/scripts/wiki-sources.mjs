/**
 * wiki-sources.mjs
 *
 * wiki のページの front matter の `source`（出典）を読み、この repo の中のファイルに結びつける。
 * 出典の最後の変更日を git で引き、ページの `compiled` 日より新しい出典を持つページ（古いページ）を並べる。
 * wiki-lint.mjs（WL-3・WL-5）と wiki-stale-check.mjs（正本を直したときの知らせ）が使う。
 *
 * repo の名前：今までの四つの repo（project-design・creation-space・kesson-space・awareness-space）は、
 * 2026-11-07 にこの repo の pd/・cs/・ks/・as/ に移した。front matter には今までの名前も今の名前も書いてよい。
 *
 * 出典の書き方は二通り：
 *   source:                      source:
 *     - repo: "pd"                 repo: "creation-space"
 *       path: "knowledge/…"        path: "knowledge/raw/manifest.md"
 *                                  manifest_id: "D26-S16"
 * manifest_id があるときは、cs の出典ノート（cs/knowledge/source-notes/Dxx/<manifest_id>_*.md）を出典として見る。
 * 原典の台帳（knowledge/raw/manifest.md）と PDF は日付を比べない（台帳は行が増えるたびに変わり、PDF は git に無い）。
 *
 * 日付：2026-11-07 は四つの repo を移した日で、その日の commit は中身の直しでない。
 * 2026-11-08 からの commit だけを数える。移す前の変更日は、この repo からは見えない。
 */

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, resolve, basename } from "node:path";
import { execFileSync } from "node:child_process";

export const PD = resolve(new URL("..", import.meta.url).pathname.replace(/\/$/, ""));
export const REPO_ROOT = resolve(PD, "..");
export const WIKI = join(PD, "wiki");

// 前の repo の名前・今の名前 → この repo の中のディレクトリ
export const REPO_DIR = {
  "project-design": "pd",
  pd: "pd",
  "creation-space": "cs",
  cs: "cs",
  "kesson-space": "ks",
  ks: "ks",
  "awareness-space": "as",
  as: "as",
};

// 移した日の翌日。これより前の commit は数えない
export const SINCE = "2026-11-08";

export function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

export function frontRaw(text) {
  if (!text.startsWith("---\n")) return "";
  const end = text.indexOf("\n---\n", 4);
  return end < 0 ? "" : text.slice(4, end);
}

const unq = (s) => s.trim().replace(/^["']|["']$/g, "").trim();

/** `source:` を { repo, path, manifest_id } の配列にする。リストの形と、一つだけの形の両方を読む。 */
export function parseSources(raw) {
  const sources = [];
  let inSource = false;
  let cur = null;
  for (const line of raw.split("\n")) {
    if (/^source:\s*$/.test(line)) { inSource = true; continue; }
    if (!inSource) continue;
    if (/^\S/.test(line)) break; // 次の上の段のキー
    let m;
    if ((m = /^\s*-\s*repo:\s*(.+)$/.exec(line))) {
      if (cur) sources.push(cur);
      cur = { repo: unq(m[1]), path: "" };
    } else if ((m = /^\s*repo:\s*(.+)$/.exec(line))) {
      if (cur) sources.push(cur);
      cur = { repo: unq(m[1]), path: "" };
    } else if ((m = /^\s*path:\s*(.+)$/.exec(line)) && cur) {
      cur.path = unq(m[1]);
    } else if ((m = /^\s*manifest_id:\s*(.+)$/.exec(line)) && cur) {
      cur.manifest_id = unq(m[1]);
    }
  }
  if (cur) sources.push(cur);
  return sources;
}

export function field(raw, key) {
  const m = new RegExp(`^${key}:\\s*(.*)$`, "m").exec(raw);
  return m ? unq(m[1]) : null;
}

/**
 * 出典を、repo の根からのパスにする。
 * 返す値：{ path: "cs/knowledge/…" | null, dir: true|false, note: 出典ノートのパス | null, unknownRepo }
 */
export function resolveSource(src) {
  const top = REPO_DIR[src.repo];
  if (!top) return { path: null, note: null, unknownRepo: true };
  const clean = src.path.replace(/\s*\(.*\)\s*$/, "").trim().replace(/^\.\//, "").replace(/\/$/, "");
  const path = clean ? `${top}/${clean}` : null;
  let note = null;
  const m = src.manifest_id && /^(D\d{2})-S\d+/.exec(src.manifest_id);
  if (m && top === "cs") {
    const d = join(REPO_ROOT, "cs/knowledge/source-notes", m[1]);
    if (existsSync(d)) {
      const f = readdirSync(d).find((n) => n.startsWith(`${src.manifest_id}_`) && n.endsWith(".md"));
      if (f) note = `cs/knowledge/source-notes/${m[1]}/${f}`;
    }
  }
  return { path, note, unknownRepo: false };
}

/** 出典として日付を比べるパス（台帳・PDF を除く）。 */
export function datedPaths(src) {
  const r = resolveSource(src);
  const out = [];
  if (r.note) out.push(r.note);
  if (r.path && !/knowledge\/raw\//.test(r.path)) out.push(r.path);
  return out;
}

/** wiki のページを読み、{ file, rel, title, compiled, checked, sources } の配列にする（health/ は除く）。
 * checked は、中身を変えずに出典と照らした時刻（ISO 8601。例 "2026-11-11T23:40+09:00"。任意）。 */
export function readWikiPages() {
  return walk(WIKI)
    .filter((f) => !f.includes("/health/"))
    .map((f) => {
      const raw = frontRaw(readFileSync(f, "utf8"));
      return {
        file: f,
        rel: relative(WIKI, f),
        title: field(raw, "title") || basename(f, ".md"),
        compiled: field(raw, "compiled"),
        checked: field(raw, "checked"),
        sources: parseSources(raw),
      };
    });
}

function git(args) {
  return execFileSync("git", ["-c", "core.quotepath=false", ...args], {
    cwd: REPO_ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"],
  });
}

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** 履歴が浅い（CI の既定の checkout）と、日付を比べられない。 */
export function isShallow() {
  try { return git(["rev-parse", "--is-shallow-repository"]).trim() === "true"; } catch { return false; }
}

/**
 * パスごとの最後の変更日（YYYY-MM-DD）。2026-11-08 からの commit と、まだ commit していない直し（今日）。
 * 一度の git log で引く。
 */
export function lastChangeDates() {
  const dates = new Map();
  let out = "";
  try {
    out = git(["log", `--since=${SINCE}T00:00:00`, "--format=@%cs %ct", "--name-only", "--no-renames", "--",
      "pd", "cs", "ks", "as"]);
  } catch { return dates; }
  // 同じ日のうちの前後を見るため、commit の時刻（秒）も持つ（2026-11-11・#111。compiled は日付だけなので、
  // 作り直したあとの同じ日に正本が直ると、日付では拾えなかった）
  const times = new Map();
  dates.times = times;
  let date = null;
  let time = 0;
  for (const line of out.split("\n")) {
    if (line.startsWith("@")) { [date, time] = line.slice(1).split(" "); time = Number(time); continue; }
    if (!line || !date) continue;
    if (!dates.has(line)) { dates.set(line, date); times.set(line, time); } // 新しい順に出るので、最初の一つが最後の変更
  }
  try {
    const t = today();
    const now = Math.floor(Date.now() / 1000);
    for (const line of git(["status", "--porcelain", "-uall", "--", "pd", "cs", "ks", "as"]).split("\n")) {
      if (line.length > 3) { const f = line.slice(3).replace(/^"|"$/g, ""); dates.set(f, t); times.set(f, now); }
    }
  } catch { /* git が無いときは commit の分だけ */ }
  return dates;
}

function dateOf(path, dates) {
  if (dates.has(path)) return dates.get(path);
  // ディレクトリを出典にしているときは、その下の最後の変更
  let best = null;
  const prefix = path + "/";
  for (const [p, d] of dates) if (p.startsWith(prefix) && (!best || d > best)) best = d;
  return best;
}
// 最後の変更の時刻（秒）。ディレクトリはその下の最後。分からなければ 0
function timeOf(path, dates) {
  const times = dates.times;
  if (!times) return 0;
  if (times.has(path)) return times.get(path);
  let best = 0;
  const prefix = path + "/";
  for (const [p, s] of times) if (p.startsWith(prefix) && s > best) best = s;
  return best;
}

// ページを出典と照らした日と時刻（秒）。compiled（日付）と checked（中身を変えずに照らした時刻）の遅い方。
// compiled は日付だけなので、同じ日に出典が直って中身の直しが要らないと確かめたときは、checked に時刻を書く（2026-11-11）
function baseOf(p) {
  let day = p.compiled || "";
  let time = 0;
  const c = p.checked ? Date.parse(p.checked) : NaN;
  if (!Number.isNaN(c)) {
    time = Math.floor(c / 1000);
    const cd = localDay(c);
    if (cd > day) day = cd;
  }
  return { day, time };
}
// 時刻（ミリ秒）を、出典の日付と同じ JST の YYYY-MM-DD にする
function localDay(ms) {
  return new Date(ms + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

/**
 * 古いページ：出典のどれかが、ページの compiled 日より後に変わったもの。
 * 返す値：[{ rel, title, compiled, newer: [{ path, date }] }]（compiled の古い順）
 */
export function stalePages(pages = readWikiPages(), dates = lastChangeDates()) {
  const stale = [];
  for (const p of pages) {
    if (!p.sources.length) continue;
    const newer = [];
    const seen = new Set();
    const base = baseOf(p);
    for (const s of p.sources) {
      for (const path of datedPaths(s)) {
        if (seen.has(path)) continue;
        seen.add(path);
        const d = dateOf(path, dates);
        if (d && (!base.day || d > base.day)) newer.push({ path, date: d });
        else if (d && d === base.day) {
          // 同じ日：ページの最後の commit（と checked の時刻）より後に出典が変わっていれば古い
          const pageTime = Math.max(timeOf(`pd/wiki/${p.rel}`, dates), base.time);
          if (pageTime && timeOf(path, dates) > pageTime) newer.push({ path, date: `${d}（ページを作り直したあと）` });
        }
      }
    }
    if (newer.length) stale.push({ rel: p.rel, title: p.title, compiled: p.compiled, newer });
  }
  return stale.sort((a, b) => (a.compiled || "").localeCompare(b.compiled || "") || a.rel.localeCompare(b.rel));
}

/** 出典の一つに、指定のパス（repo の根から）を持つページ。 */
export function pagesReferencing(target, pages = readWikiPages()) {
  const norm = target.replace(/^\.\//, "");
  return pages.filter((p) =>
    p.sources.some((s) => {
      const r = resolveSource(s);
      return r.note === norm || r.path === norm || (r.path && norm.startsWith(r.path + "/"));
    })
  );
}

export function isDir(path) {
  try { return statSync(join(REPO_ROOT, path)).isDirectory(); } catch { return false; }
}
