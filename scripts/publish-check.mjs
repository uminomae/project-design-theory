#!/usr/bin/env node
// 公開してよいかの点検。docs/PUBLISH-CHECK.md の機械の部分。呼び出しは scripts/publish-check.sh から。
//
//   scripts/publish-check.sh           commit しようとしている内容（staged）を点検する
//   scripts/publish-check.sh --all     repo にあるファイルすべてを点検する
//
// 見つかったら一覧を出して 1 で終わる。pre-commit と .github/workflows/check.yml から呼ばれる。
//
// 見るもの：
//   [語]   手元だけの語の一覧（.publish-check-terms。git に入れない）の語。大文字と小文字は区別しない。
//   [形]   手元のパス・鍵やトークンの形・メールアドレス・非公開になりうる共有のリンク。
//   [書庫] zip などの書庫の中のファイルの名前に、上の語と形が無いか（中身は開かない）。
// 通す一覧（.publish-check-allow。git に入れる）：形のうち home・tmp・link の三つだけ、ファイルごとに通せる。
//   ok   は確かめて通したもの。wait は判断を待っているもの（通すが、数を毎回知らせる）。
//   語・鍵・メール・/Users/ の形は、この一覧では通せない。
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, extname, join } from 'node:path';

const git = (args, opts = {}) => execFileSync('git', args, { maxBuffer: 1 << 28, ...opts });
const ROOT = git(['rev-parse', '--show-toplevel']).toString().trim();
process.chdir(ROOT);
const mode = process.argv[2] === '--all' ? 'all' : 'staged';

// 手元だけの語の一覧。worktree で動くときは、一覧が本体の checkout にだけある。そちらを見る。
// （確かめのときだけ：PUBLISH_CHECK_TERMS で一覧の場所を替えられる。CI と同じ「一覧なし」は、無いパスを渡す）
let termsFile = process.env.PUBLISH_CHECK_TERMS || join(ROOT, '.publish-check-terms');
if (!process.env.PUBLISH_CHECK_TERMS && !existsSync(termsFile)) {
  const common = git(['rev-parse', '--path-format=absolute', '--git-common-dir']).toString().trim();
  const alt = join(dirname(common), '.publish-check-terms');
  if (existsSync(alt)) termsFile = alt;
}
const terms = [];
if (existsSync(termsFile)) {
  for (const raw of readFileSync(termsFile, 'utf8').split('\n')) {
    const t = raw.replace(/#.*$/, '').trimEnd();
    if (t) terms.push(t.toLowerCase());
  }
  if (terms.length === 0)
    console.error('publish-check: 注意 — .publish-check-terms に語がありません。手元だけの語の点検は空です。');
} else {
  console.error('publish-check: 注意 — .publish-check-terms がありません。手元だけの語の点検は行っていません。');
}

// 形で見つけるもの。kind は通す一覧で使う名前。
const patterns = [
  { kind: 'path', label: '手元のパス /Users/', re: /\/Users\/[A-Za-z0-9._-]+/ },
  { kind: 'path', label: '手元のパス /home/', re: /(^|[^A-Za-z0-9~._-])\/home\/[A-Za-z0-9._-]+/ },
  { kind: 'path', label: '手元のパス C:\\Users\\', re: /[A-Za-z]:\\Users\\/ },
  { kind: 'home', label: '手元のパス ~/', re: /(^|[^A-Za-z0-9._\/~-])~\/[A-Za-z._-]+/ },
  { kind: 'tmp', label: '手元のパス（区切りが - の形）', re: /-Users-[A-Za-z0-9]+-/ },
  { kind: 'link', label: '非公開になりうる共有のリンク', re: /claude\.ai\/(code\/)?(artifact|share|chat|project)s?\// },
  { kind: 'key', label: '鍵の形 gh*_', re: /gh[pousr]_[A-Za-z0-9]{20,}/ },
  { kind: 'key', label: '鍵の形 github_pat_', re: /github_pat_[A-Za-z0-9_]{20,}/ },
  { kind: 'key', label: '鍵の形 sk-ant-', re: /sk-ant-[A-Za-z0-9_-]{10,}/ },
  { kind: 'key', label: '鍵の形 AKIA', re: /AKIA[0-9A-Z]{16}/ },
  { kind: 'key', label: '秘密鍵', re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { kind: 'email', label: 'メールアドレス', re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/ },
];
// 公開してよいメールアドレス（commit の trailer、同梱した他者のソフトウェア（Quartz・Dataview）の作者欄）
const allowEmail =
  /git@github\.com|noreply@anthropic\.com|noreply@openai\.com|@users\.noreply\.github\.com|j\.zhao2k19@gmail\.com|blacksmithgu@gmail\.com/;

// ~/ の形のうち、通すもの：~/ だけ・~/dev・~/dev/pd/…・~/dev/CLAUDE.md・~/.（点で始まる道具の設定の置き場）
const PUBLIC_HOME = /^~\/($|\.[A-Za-z]|dev\/?$|dev\/pd(\/|$)|dev\/CLAUDE\.md$)/;

// 通す一覧：「<形> <ok|wait> <パス>  # 理由」。パスの終わりが / なら、その下の全部。
const ALLOW_KINDS = new Set(['home', 'tmp', 'link']);
const allow = [];
const allowFile = join(ROOT, '.publish-check-allow');
if (existsSync(allowFile)) {
  readFileSync(allowFile, 'utf8')
    .split('\n')
    .forEach((raw, i) => {
      const line = raw.replace(/\s+#.*$/, '').replace(/^#.*$/, '').trim();
      if (!line) return;
      const m = /^(\S+)\s+(ok|wait)\s+(.+)$/.exec(line);
      if (!m || !ALLOW_KINDS.has(m[1])) {
        console.error(`publish-check: .publish-check-allow の ${i + 1} 行目が読めない（形は home・tmp・link、状態は ok・wait）：${raw}`);
        process.exit(2);
      }
      allow.push({ kind: m[1], state: m[2], path: m[3].trim(), used: false });
    });
}
const allowed = (kind, f) => {
  if (!ALLOW_KINDS.has(kind)) return null;
  const a = allow.find((x) => x.kind === kind && (x.path.endsWith('/') ? f.startsWith(x.path) : f === x.path));
  if (a) a.used = true;
  return a || null;
};

const files = git(
  mode === 'staged' ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z'] : ['ls-files', '-z'],
)
  .toString()
  .split('\0')
  .filter(Boolean);
if (files.length === 0) process.exit(0);

const contentOf = (f) => {
  try {
    return mode === 'staged' ? git(['show', `:${f}`]) : readFileSync(f);
  } catch {
    return null; // 消えたファイル・サブモジュールなど
  }
};

const SKIP = new Set(['scripts/publish-check.sh', 'scripts/publish-check.mjs']);
const ARCHIVE_ZIP = new Set(['.zip', '.jar', '.docx', '.xlsx', '.pptx', '.epub']);
const ARCHIVE_TAR = new Set(['.tar', '.tgz', '.gz', '.bz2', '.xz']);
const cut = (s) => (Array.from(s).length > 200 ? Array.from(s).slice(0, 200).join('') : s);

let found = 0;
const waits = new Map(); // 形 → 判断を待っているファイルの数
const report = (head, hits) => {
  console.log(head);
  for (const h of hits) console.log('    ' + cut(h));
  found = 1;
};

// 一行ずつ、語と形を当てる。lines は [表示の頭, 文] の並び。
function scan(f, lines, tag) {
  for (const t of terms) {
    const hits = [];
    for (const [n, l] of lines) {
      if (l.toLowerCase().includes(t)) hits.push(`${n}:${l}`);
      if (hits.length >= 5) break;
    }
    if (hits.length) report(`[語${tag}] ${f} — 一覧の語に当たりました`, hits);
  }
  for (const p of patterns) {
    const hits = [];
    for (const [n, l] of lines) {
      if (!p.re.test(l)) continue;
      if (p.kind === 'home') {
        // 公開している置き場の決まり（~/dev/CLAUDE.md）と、道具の設定の置き場（~/.claude など）は、手元の事情を明かさないので通す
        const all = l.match(/~\/[A-Za-z0-9._\/-]*/g) || [];
        if (all.every((t) => PUBLIC_HOME.test(t))) continue;
      }
      if (p.kind === 'email') {
        // 一行のアドレスが、どれも公開してよいものなら通す
        const all = l.match(new RegExp(p.re.source, 'g')) || [];
        if (all.every((a) => allowEmail.test(a))) continue;
      }
      hits.push(`${n}:${l}`);
      if (hits.length >= 5) break;
    }
    if (!hits.length) continue;
    const a = allowed(p.kind, f);
    if (a && a.state === 'ok') continue;
    if (a && a.state === 'wait') {
      waits.set(p.kind, (waits.get(p.kind) || 0) + 1);
      continue;
    }
    report(`[形${tag}] ${f} — ${p.label}`, hits);
  }
}

function archiveNames(f, buf) {
  const ext = extname(f).toLowerCase();
  if (!ARCHIVE_ZIP.has(ext) && !ARCHIVE_TAR.has(ext)) return null;
  let path = f;
  let tmp = null;
  if (mode === 'staged') {
    tmp = mkdtempSync(join(tmpdir(), 'publish-check-'));
    path = join(tmp, 'a' + ext);
    writeFileSync(path, buf);
  }
  try {
    const out = ARCHIVE_ZIP.has(ext)
      ? execFileSync('unzip', ['-Z1', path], { maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] })
      : execFileSync('tar', ['-tf', path], { maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] });
    return out.toString().split('\n').filter(Boolean);
  } catch {
    return undefined; // 開けなかった
  } finally {
    if (tmp) rmSync(tmp, { recursive: true, force: true });
  }
}

let unreadable = 0;
for (const f of files) {
  if (SKIP.has(f)) continue;
  // 同梱した他者のソフトウェア（three.js など）は見ない
  if (f.startsWith('vendor/') || f.includes('/vendor/')) continue;
  const buf = contentOf(f);
  if (!buf || buf.length === 0) continue;
  // 文字のファイルか（頭の 8000 バイトに NUL が無い）
  const isText = !buf.subarray(0, 8000).includes(0);
  if (!isText) {
    const names = archiveNames(f, buf);
    if (names === undefined) {
      console.log(`[書庫] ${f} — 中の名前を読めなかった（開いて確かめる）`);
      unreadable++;
      found = 1;
    } else if (names) {
      scan(f, names.map((n) => ['中の名前', n]), '・書庫の中の名前');
    }
    continue;
  }
  const lines = buf
    .toString('utf8')
    .split('\n')
    .map((l, i) => [i + 1, l]);
  scan(f, lines, '');
}

if (mode === 'all') {
  const stale = allow.filter((a) => !a.used);
  if (stale.length) {
    console.error(`publish-check: 注意 — .publish-check-allow の ${stale.length} 行は、もう当たらない（消してよい）：`);
    for (const a of stale) console.error(`    ${a.kind} ${a.state} ${a.path}`);
  }
}
if (waits.size) {
  const parts = [...waits].map(([k, n]) => `${k} ${n} 本`).join('・');
  console.error(`publish-check: 知らせ — 判断を待っている形（.publish-check-allow の wait）：${parts}`);
}
if (found) {
  console.log('');
  console.log('publish-check: 公開してよいかを確かめてください（docs/PUBLISH-CHECK.md）。');
  console.log('  形のうち ~/ のパス・一時置き場のパス・共有のリンクは、中身を確かめたうえで .publish-check-allow に一行足すと通る。');
  process.exit(1);
}
console.log(`publish-check: OK (${files.length} files, mode=${mode})`);
