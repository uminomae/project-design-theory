#!/usr/bin/env node
// 意識とは（as）の文献レビューの、領域ごとの照合の記録（as/evidence/evidence-Axx-*.md）と原典の台帳
// （as/knowledge/raw/manifest.md）の機械の点検。何を見るかは docs/as-review/README.md「記録の品質の点検」。
// 白黒がつくものだけをここに入れ、中身の良し悪し（研究で体験を説明していないか、言い切りが厚みに見合うか）は人が見る。
// 形の元は scripts/check-cs-evidence.mjs（cs のレビュー）。
//
//   node scripts/check-as-evidence.mjs              点検。落ちたら 1 で終わる（scripts/check.sh から回す）
//   node scripts/check-as-evidence.mjs --stats      文末の数え方の確かめ（点検はしない）
//   node scripts/check-as-evidence.mjs as/evidence/evidence-A02-….md   一つの記録だけ（台帳との突き合わせも含む）
//   node scripts/check-as-evidence.mjs --crossref   台帳の DOI を Crossref で引き、題と年が台帳と合うかを見る。
//                                                   ネットワークが要るので check.sh には入れない。手で回す。
//                                                   プロキシの内側では NODE_USE_ENV_PROXY=1 を付ける
//
// 見るもの（2026-11-10・#95 の A01 のあとに作った）：
//  1. as/evidence/reviewed.json（画面に出す記録の一覧）の各行：id の形、file が実在して id と合う、reviewed が日付、
//     画面に出す名前（name_ja・name_en）と一行の説明（summary_ja・summary_en）がある。
//  2. frontmatter：file_id（EV-Axx）・area_id（ファイル名と同じ）・title・last_updated（日付）・status。
//  3. 冒頭に文責が Claude であること。「## 探し方」「## 一面の表」「## 論ごとの節」があること。
//  4. 一面の表：見出しに 論・何を見たか・型と厚み・批判・似ている体験・食い違う体験・照合の状態 があり、
//     各行の照合の状態が docs/rules/sources.md §3 の四つ（本文照合済・要旨照合済・二次資料のみ・未照合）のどれかを含む。
//     各行の照合の状態に「本文照合済」がある。本文を読めた文献が一本も無い論は、表に置かず、表の下の一覧と、
//     論ごとの節の最後の「### 本文を読めなかった論」に分ける（pjdhiro 2026-11-10「引けたものだけ。」・Issue #111 の問い 11。
//     README「規約で決めたこと」の、本文を読めなかった論の行。cs の記録の点検 11 と同じ線）。
//  5. 「判定」の列を持つ表：各行の判定が README の語（一致・言い過ぎ・取り違え・帰属違い・付け足し・抜け・未判定）で始まる。
//  6. 論ごとの節（### の節）：照合の状態の語が一つはある。本文照合済・要旨照合済と書く節には、確かめ先（DOI・URL）がある。
//  7. 手元の絶対パス（/Users/…）が無い。旧い判定の語（verified・accepted・plausible ほか）を使っていない。
//  8. 地の文（段落）の文末が「です・ます」。箇条書き・表・引用・見出しは見ない。「だ・である」が 2 割を超えたら落とす。
//  9. 本文（frontmatter と URL を除く）に、領域・原典・cs の分野の記号（A01・A01-S03・D08 など）と、repo のパス・
//     ファイル名（docs/…・as/evidence/…・*.md など）、手元の PDF の保存名が無い。公開の記録の本文に記号やパスを
//     書かない決まり（README「規約で決めたこと」の記号の行・writing §6-3・§6-5）を機械で止める。
// 10. 台帳との突き合わせ：台帳の「使う記録」の列にその領域の番号がある行ごとに、記録の本文に、第一著者の姓と年があり、
//     台帳に DOI があればその DOI があり、台帳の題の頭（コロンより前）がある。記録の本文には台帳の番号を書かない決まり
//     なので、番号では突き合わせない（README「進め方」段 1）。
// 11. 台帳そのもの：表の各行の source_id の形（Axx-Snn）、重なりが無い、照合の状態が四つの語のどれか、
//     取得の状況が決まった語、「使う記録」の番号の記録が実在する。手元の絶対パスが無い。
// 12. 「未照合（…）」の括弧の頭が、docs/rules/sources.md §3 の 7 の語（記憶・書誌だけ・書籍・有料・確認画面・
//     上げた人の分からない写しで読んだ・原典が特定できない）か。語の前には年だけを置いてよく、二つ以上は「と」でつなぎ、
//     語のあとは句点で補いを足してよい（2026-11-11・Issue #111）。（台帳も見る）

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
const EVIDENCE_DIR = path.join(ROOT, 'as', 'evidence');
const REVIEWED = path.join(EVIDENCE_DIR, 'reviewed.json');
const MANIFEST = path.join(ROOT, 'as', 'knowledge', 'raw', 'manifest.md');
const ARGS = process.argv.slice(2);
const STATS = ARGS.includes('--stats');
const CROSSREF = ARGS.includes('--crossref');

const STATUS_TERMS = ['本文照合済', '要旨照合済', '二次資料のみ', '未照合'];
const JUDGMENT_TERMS = ['一致', '言い過ぎ', '取り違え', '帰属違い', '付け足し', '抜け', '未判定'];
const ACCESS_TERMS = ['手元に PDF あり', 'URL で読める', 'ブラウザでの保存が要る', '書籍だけ'];
const FACE_COLUMNS = ['論', '何を見たか', '型と厚み', '批判', '似ている体験', '食い違う体験', '照合の状態'];
const OLD_TERMS = /\b(verified|accepted|plausible|Accept|Reject)\b/;
const POLITE_END = /(です|ます|ません|でした|ました|ましょう|ください)[。）)]*$/;
const PLAIN_END = /(である|だ|ない|た|る|う|い)[。）)]*$/;
const RECORD_NAME = /^evidence-(A\d\d)-[a-z0-9-]+\.md$/;

const errors = [];
const err = (file, msg) => errors.push(`${path.relative(ROOT, file)}: ${msg}`);

// 12. 「未照合（…）」の語（docs/rules/sources.md §3 の 7）
const UNVERIFIED_WORDS = ['上げた人の分からない写しで読んだ', '原典が特定できない', '書誌だけ', '確認画面', '記憶', '書籍', '有料'];
const UNVERIFIED_HEAD = new RegExp(`^(?:\\d{4}[a-z]? の)?(?:${UNVERIFIED_WORDS.join('|')})(?:と(?:\\d{4}[a-z]? の)?(?:${UNVERIFIED_WORDS.join('|')}))*(?:。.+)?$`);
function checkUnverifiedTerms(file, text) {
  text.split('\n').forEach((line, i) => {
    for (const m of line.matchAll(/未照合（((?:[^（）]|（[^（）]*）)*)）/g)) {
      if (!UNVERIFIED_HEAD.test(m[1])) err(file, `${i + 1} 行の「${m[0].slice(0, 40)}」：括弧の頭が sources.md §3 の 7 の語でない（12）`);
    }
  });
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: null, body: text, offset: 0 };
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i <= 0) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return { meta, body: m[2], offset: m[1].split('\n').length + 2 };
}

function splitCells(row) {
  return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

// 表を取り出す：見出し行・区切り行・データ行の並び。lineNo はファイルの行番号。
function findTables(lines, offset = 0) {
  const tables = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].startsWith('|') && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const header = splitCells(lines[i]);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && lines[j].startsWith('|')) {
        rows.push({ lineNo: j + 1 + offset, cells: splitCells(lines[j]) });
        j++;
      }
      tables.push({ index: i, lineNo: i + 1 + offset, header, rows });
      i = j - 1;
    }
  }
  return tables;
}

// 地の文の段落だけを取り出す（箇条書き・表・引用・見出し・コードを除く）。
function proseSentences(lines) {
  const out = [];
  let inCode = false;
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('```')) { inCode = !inCode; continue; }
    if (inCode || !line) continue;
    if (/^([-*>|#]|\d+\.\s|\*\*[^*]+\*\*：?$)/.test(line)) continue;
    const body = line.replace(/^\*\*[^*]+\*\*[：:]\s*/, '');
    for (const s of body.split('。')) {
      const t = s.trim();
      if (t) out.push(`${t}。`);
    }
  }
  return out;
}

// ---------- 台帳 ----------

function readManifest() {
  if (!fs.existsSync(MANIFEST)) { err(MANIFEST, '台帳が無い'); return []; }
  const text = fs.readFileSync(MANIFEST, 'utf8');
  if (/\/Users\//.test(text)) err(MANIFEST, '手元の絶対パス（/Users/…）がある');
  checkUnverifiedTerms(MANIFEST, text);
  const lines = text.split('\n');
  const table = findTables(lines).find((t) => t.header[0] === 'source_id');
  if (!table) { err(MANIFEST, 'source_id で始まる表が無い'); return []; }
  const col = (name) => table.header.findIndex((c) => c === name);
  const idx = {
    id: col('source_id'), cite: col('書誌'), doi: col('DOI'), access: col('取得の状況'),
    status: col('照合の状態'), uses: col('使う記録'),
  };
  for (const [k, v] of Object.entries(idx)) if (v < 0) err(MANIFEST, `表の見出しに ${k} の列が無い`);
  const seen = new Set();
  const rows = [];
  for (const r of table.rows) {
    const c = (k) => (r.cells[idx[k]] || '').trim();
    const id = c('id');
    if (!/^A\d\d-S\d\d[a-z]?$/.test(id)) err(MANIFEST, `${r.lineNo} 行の source_id の形が違う（${id}）`);
    if (seen.has(id)) err(MANIFEST, `${r.lineNo} 行の source_id が重なる（${id}）`);
    seen.add(id);
    if (!STATUS_TERMS.some((t) => c('status').includes(t))) err(MANIFEST, `${r.lineNo} 行（${id}）の照合の状態が四つの語のどれでもない（${c('status')}）`);
    if (!ACCESS_TERMS.some((t) => c('access').startsWith(t))) err(MANIFEST, `${r.lineNo} 行（${id}）の取得の状況が決まった語でない（${c('access')}）`);
    const uses = c('uses').split(/[・、,\s]+/).filter((u) => /^A\d\d$/.test(u));
    rows.push({ lineNo: r.lineNo, id, cite: c('cite'), doi: c('doi'), uses });
  }
  return rows;
}

// 書誌の一行から、第一著者の姓・年・題の頭を取り出す（APA の形：Surname, I., … (YYYY). Title. …）。
function parseCitation(cite) {
  const surname = (cite.match(/^([^,(]+?),/) || [])[1]?.trim() || '';
  const year = (cite.match(/\((\d{4})[a-z]?\)/) || [])[1] || '';
  let title = '';
  const after = cite.split(/\(\d{4}[a-z]?\)\.\s*/)[1] || '';
  if (after) {
    const t = after.replace(/^\*/, '').split(/\.\s|\?\s|\*\.|\*,/)[0];
    title = t.split(':')[0].replace(/[*]/g, '').trim();
  }
  return { surname, year, title };
}

const norm = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[‐-―–—-]/g, '-').replace(/[’'`]/g, "'").replace(/\s+/g, ' ');

function checkAgainstManifest(file, areaId, body, manifestRows) {
  const hay = norm(body);
  const mine = manifestRows.filter((r) => r.uses.includes(areaId));
  if (!mine.length) { err(file, `台帳に「使う記録」が ${areaId} の行が無い`); return; }
  for (const r of mine) {
    const { surname, year, title } = parseCitation(r.cite);
    const label = `台帳 ${r.id}（${surname} ${year}）`;
    if (!surname || !year) { err(MANIFEST, `${r.lineNo} 行（${r.id}）の書誌から著者と年が読めない`); continue; }
    if (!hay.includes(norm(surname))) err(file, `${label}の第一著者の姓が記録に無い`);
    if (!hay.includes(year)) err(file, `${label}の年が記録に無い`);
    if (/^10\.\d{4,}\//.test(r.doi) && !hay.includes(norm(r.doi))) err(file, `${label}の DOI（${r.doi}）が記録に無い`);
    if (title && title.length >= 8 && !hay.includes(norm(title))) err(file, `${label}の題の頭「${title}」が記録に無い`);
  }
}

// ---------- 記録 ----------

function checkRecord(file, areaId, manifestRows) {
  const text = fs.readFileSync(file, 'utf8');
  const { meta, body, offset } = parseFrontmatter(text);
  checkUnverifiedTerms(file, text);
  if (!meta) { err(file, 'frontmatter が無い'); return; }
  for (const key of ['file_id', 'area_id', 'title', 'last_updated', 'status']) {
    if (!meta[key]) err(file, `frontmatter に ${key} が無い`);
  }
  if (meta.file_id && meta.file_id !== `EV-${areaId}`) err(file, `file_id が EV-${areaId} でない（${meta.file_id}）`);
  if (meta.area_id && meta.area_id !== areaId) err(file, `area_id が ${areaId} でない（${meta.area_id}）`);
  if (meta.last_updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.last_updated)) err(file, `last_updated が日付でない（${meta.last_updated}）`);

  const head = body.split(/^## /m)[0];
  if (!/文責は Claude/.test(head)) err(file, '冒頭（最初の ## の前）に「文責は Claude」が無い');
  for (const h of ['探し方', '一面の表', '論ごとの節']) {
    if (!new RegExp(`^## ${h}`, 'm').test(body)) err(file, `「## ${h}」が無い`);
  }
  if (/\/Users\//.test(body)) err(file, '手元の絶対パス（/Users/…）がある');

  const lines = body.split('\n');
  const tables = findTables(lines, offset);

  // 4. 一面の表
  const faceIdx = lines.findIndex((l) => l.startsWith('## 一面の表'));
  const nextH2 = lines.findIndex((l, i) => i > faceIdx && l.startsWith('## '));
  const faceTable = tables.find((t) => t.index > faceIdx && (nextH2 < 0 || t.index < nextH2));
  if (faceIdx >= 0 && faceTable) {
    const h = faceTable.header.join(' ');
    for (const need of FACE_COLUMNS) {
      if (!h.includes(need)) err(file, `一面の表の見出しに「${need}」が無い（${faceTable.lineNo} 行）`);
    }
    const si = faceTable.header.findIndex((c) => c.includes('照合の状態'));
    if (si >= 0) {
      for (const row of faceTable.rows) {
        const cell = row.cells[si] || '';
        if (!STATUS_TERMS.some((t) => cell.includes(t))) err(file, `一面の表 ${row.lineNo} 行の照合の状態が四つの語のどれでもない（${cell}）`);
        if (OLD_TERMS.test(cell)) err(file, `一面の表 ${row.lineNo} 行の照合の状態に旧い語（${cell}）`);
        if (!cell.includes('本文照合済')) err(file, `一面の表 ${row.lineNo} 行に「本文照合済」が無い。本文を読めなかった論は表に置かず、表の下と、論ごとの節の最後の「本文を読めなかった論」に分ける`);
      }
    }
  } else if (faceIdx >= 0) {
    err(file, '一面の表の節に表が無い');
  }

  // 5. 判定の列
  for (const t of tables) {
    const ji = t.header.findIndex((c) => c === '判定');
    if (ji < 0) continue;
    for (const row of t.rows) {
      const cell = (row.cells[ji] || '').replace(/^\*\*|\*\*$/g, '');
      if (!cell || cell === '―' || cell === '-') continue;
      if (!JUDGMENT_TERMS.some((term) => cell.startsWith(term))) err(file, `${row.lineNo} 行の判定が README の語で始まらない（${cell}）`);
      if (OLD_TERMS.test(cell)) err(file, `${row.lineNo} 行の判定に旧い語（${cell}）`);
    }
  }

  // 6. 論ごとの節
  const sectionStart = lines.findIndex((l) => l.startsWith('## 論ごとの節'));
  if (sectionStart >= 0) {
    const sections = [];
    let cur = null;
    for (let i = sectionStart + 1; i < lines.length && !lines[i].startsWith('## '); i++) {
      if (lines[i].startsWith('### ')) { cur = { title: lines[i].slice(4), lineNo: i + 1 + offset, text: '' }; sections.push(cur); }
      else if (cur) cur.text += `${lines[i]}\n`;
    }
    if (!sections.length) err(file, '論ごとの節に ### の節が無い');
    for (const s of sections) {
      if (!STATUS_TERMS.some((t) => s.text.includes(t))) err(file, `節「${s.title}」（${s.lineNo} 行）に照合の状態の語が無い`);
      const claimsRead = /本文照合済|要旨照合済/.test(s.text);
      const hasSource = /10\.\d{4,}\/|https?:\/\/|PMC\d+/.test(s.text);
      if (claimsRead && !hasSource) err(file, `節「${s.title}」（${s.lineNo} 行）は本文・要旨照合済と書くが、確かめ先（DOI・URL）が無い`);
    }
  }

  // 9. 記号とパス（リンクの行き先と URL は見ない）
  lines.forEach((raw, i) => {
    const line = raw.replace(/\]\([^)\s]*\)/g, ']()').replace(/https?:\/\/\S+/g, 'URL');
    const code = line.match(/(?<![A-Za-z0-9])(?:A0[1-9]|D(?:0[1-9]|[12]\d|30))(?:-S\d+[a-z]?)?(?![0-9])/);
    if (code) err(file, `${i + 1 + offset} 行に領域・原典・分野の記号（${code[0]}）。領域や分野は名前で、原典は著者・年・題で書く`);
    const p = line.match(/(?:pjdhiro\/assets|(?:as|cs|ks|pd)\/(?:evidence|knowledge|docs|src|wiki)|docs\/(?:rules|as-review|cs-review)|scripts\/)[^\s、。）]*|[\w.-]+\.(?:md|mjs|py|sh|pdf)\b/i);
    if (p) err(file, `${i + 1 + offset} 行に repo のパスかファイル名（${p[0]}）。読者に見える名前で書き、手元のファイルは「手元の PDF」と書く`);
  });

  // 8. 文末
  const sentences = proseSentences(lines);
  let polite = 0; let plain = 0; const plainSamples = [];
  for (const s of sentences) {
    const core = s.replace(/[。）)」』]+$/, '');
    if (POLITE_END.test(core)) polite++;
    else if (PLAIN_END.test(core)) { plain++; if (plainSamples.length < 3) plainSamples.push(s.slice(0, 40)); }
  }
  const total = polite + plain;
  if (STATS) console.log(`${path.basename(file)}: です・ます ${polite} / だ・である ${plain}（段落の文 ${sentences.length}）`);
  if (total >= 10 && plain / total > 0.2) err(file, `地の文の文末が「だ・である」寄り（${plain}/${total}。例：${plainSamples.join(' / ')}）`);

  // 10. 台帳との突き合わせ
  checkAgainstManifest(file, areaId, body, manifestRows);
}

// ---------- 画面に出す一覧 ----------

function checkReviewed(recordFiles) {
  if (!fs.existsSync(REVIEWED)) return; // 一覧はまだ無くてよい（画面に出す記録が無いとき）
  let payload;
  try { payload = JSON.parse(fs.readFileSync(REVIEWED, 'utf8')); } catch (e) { err(REVIEWED, `JSON が読めない（${e.message}）`); return; }
  const areas = Array.isArray(payload.areas) ? payload.areas : null;
  if (!areas) { err(REVIEWED, 'areas の配列が無い'); return; }
  const seen = new Set();
  for (const a of areas) {
    if (!/^A\d\d$/.test(a.id || '')) { err(REVIEWED, `id の形が違う（${a.id}）`); continue; }
    if (seen.has(a.id)) err(REVIEWED, `${a.id} が重なる`);
    seen.add(a.id);
    const m = (a.file || '').match(RECORD_NAME);
    if (!m) { err(REVIEWED, `${a.id} の file の形が違う（${a.file}）`); continue; }
    if (m[1] !== a.id) err(REVIEWED, `${a.id} の file 名が id と合わない（${a.file}）`);
    if (!recordFiles.has(a.file)) err(REVIEWED, `${a.id} の file が無い（${a.file}）`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.reviewed || '')) err(REVIEWED, `${a.id} の reviewed が日付でない（${a.reviewed}）`);
    for (const k of ['name_ja', 'name_en', 'summary_ja', 'summary_en']) {
      if (typeof a[k] !== 'string' || !a[k].trim()) err(REVIEWED, `${a.id} に ${k} が無い`);
    }
    // 画面に出す文にも記号を出さない
    for (const k of ['name_ja', 'name_en', 'summary_ja', 'summary_en']) {
      if (/(?<![A-Za-z0-9])A\d\d(?![0-9])/.test(a[k] || '')) err(REVIEWED, `${a.id} の ${k} に領域の記号がある`);
    }
  }
}

// ---------- Crossref（手で回す） ----------

async function crossref(manifestRows) {
  let bad = 0;
  for (const r of manifestRows) {
    if (!/^10\.\d{4,}\//.test(r.doi)) continue;
    const { year, title } = parseCitation(r.cite);
    try {
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(r.doi)}`, { headers: { 'User-Agent': 'check-as-evidence (manual run)' } });
      if (!res.ok) { console.log(`  × ${r.id} ${r.doi}：Crossref が ${res.status}`); bad++; continue; }
      const w = (await res.json()).message;
      const cTitle = (w.title || [''])[0];
      const years = ['published-print', 'published-online', 'issued', 'published']
        .map((k) => w[k]?.['date-parts']?.[0]?.[0]).filter(Boolean).map(String);
      const titleOk = !title || norm(cTitle).includes(norm(title)) || norm(title).includes(norm(cTitle.split(':')[0]));
      const yearOk = !year || years.includes(year);
      const mark = titleOk && yearOk ? '  ok' : '  ×';
      if (!(titleOk && yearOk)) bad++;
      console.log(`${mark} ${r.id} ${r.doi}：台帳「${title}」${year} ／ Crossref「${cTitle}」${[...new Set(years)].join('・')}`);
    } catch (e) {
      console.log(`  × ${r.id} ${r.doi}：引けない（${e.message}）`);
      bad++;
    }
  }
  console.log(bad ? `合わない・引けない ${bad} 件（年は、号とオンラインの公開で違うことがある。台帳の書誌の注記を見る）` : 'DOI はすべて Crossref と合う');
  process.exit(bad ? 1 : 0);
}

async function main() {
  const manifestRows = readManifest();
  if (CROSSREF) return crossref(manifestRows);

  const all = fs.readdirSync(EVIDENCE_DIR).filter((f) => RECORD_NAME.test(f));
  const recordFiles = new Set(all);
  const named = ARGS.filter((a) => a.endsWith('.md'));
  const targets = named.length ? named.map((f) => path.resolve(f)) : all.map((f) => path.join(EVIDENCE_DIR, f));

  for (const file of targets) {
    const m = path.basename(file).match(RECORD_NAME);
    if (!m) { err(file, 'ファイル名が evidence-Axx-… でない'); continue; }
    if (!fs.existsSync(file)) { err(file, 'ファイルが無い'); continue; }
    checkRecord(file, m[1], manifestRows);
  }
  if (!named.length) {
    checkReviewed(recordFiles);
    // 台帳の「使う記録」が指す記録が実在するか
    for (const r of manifestRows) {
      for (const u of r.uses) {
        if (![...recordFiles].some((f) => f.startsWith(`evidence-${u}-`))) err(MANIFEST, `${r.lineNo} 行（${r.id}）の使う記録 ${u} の記録が無い`);
      }
    }
  }
  if (STATS) return;
  if (errors.length) {
    for (const e of errors) console.log(`  × ${e}`);
    console.log(`${errors.length} 件`);
    process.exit(1);
  }
  console.log(`照合の記録 ${targets.length} 本・台帳 ${manifestRows.length} 行：問題なし`);
}

main();
