#!/usr/bin/env node
// 創造とは（cs）の、分野ごとの照合の記録（cs/evidence/evidence-Dxx-*.md）の機械の点検。
// 何を見るかは docs/cs-review/README.md「記録の品質の点検」。白黒がつくものだけをここに入れ、
// 中身の良し悪し（当てはめがこじつけか、原典の読みが合っているか）は人が見る。
//
//   node scripts/check-cs-evidence.mjs            点検。落ちたら 1 で終わる
//   node scripts/check-cs-evidence.mjs --stats    文末の数え方の確認（点検はしない）
//   node scripts/check-cs-evidence.mjs cs/evidence/evidence-D20-law-politics.md   一つの記録だけ（reviewed.json に入れる前に）
//
// 見るもの（2026-11-08・#73 の 5 分野のあとに作った）：
//  1. cs/evidence/reviewed.json の各行：id の形、file が実在、reviewed が日付。en（英語の記録）があれば en/<file> で実在。
//  2. frontmatter：file_id（EV-Dxx）・domain_id（id と同じ）・title・last_updated・status・source_archive（実在）。
//  3. 冒頭に文責が Claude であること。「## 一面の表」があること。
//  4. 一面の表：見出しに 論・対立・衝突・統合・照合の状態 があり、各行の照合の状態が
//     sources.md §3 の四つ（本文照合済・要旨照合済・二次資料のみ・未照合）のどれかを含む。
//     「精読ノートのみ」は「二次資料のみ（精読ノート）」と書く。
//  5. 「判定」の列を持つ表：各行の判定が README の語（一致・言い過ぎ・取り違え・帰属違い・付け足し・抜け・未判定）で始まる。
//  6. 論ごとの節（### で始まる節）：照合の状態の語が一つはある。本文照合済・要旨照合済と書く節には、
//     確かめ先（DOI・URL・manifest の行）がある。
//  7. （2026-11-09 に外した）記録が引く manifest の行（Dxx-Snn）が台帳にあるか。本文に番号を書かなくなったので、10 に替えた。
//  8. 手元の絶対パス（/Users/…）が無い。旧い判定の語（verified・accepted・plausible・Accept）を
//     照合の状態や判定の欄に使っていない。
//  9. 地の文（段落）の文末が「です・ます」。箇条書き・表・引用・見出しは見ない。
//     「だ・である」の文末が地の文の 2 割を超えたら落とす。
// 10. 本文（frontmatter とリンクの行き先・URL を除く）に、分野と原典の記号（D01・D30-S12 など）と、
//     repo のパス・ファイル名（pjdhiro/assets/…・cs/knowledge/…・docs/…・*.md など）が無い。公開文に記号を出さない
//     決まり（docs/rules/writing.md §6-3・§6-5）を、機械で止める（corrections の型 R の繰り返し。2026-11-09）。
//     本文では、分野の名前と、著者・年・題で書く。台帳との対応は「台帳の「著者 年」の行」のように書く。
// 11. 一面の表の各行の照合の状態に「本文照合済」がある。本文を読めなかった論（未照合・要旨照合済・二次資料のみだけの論）は、
//     表に置かず、表の下の一覧と、論ごとの節の最後の「### 本文を読めなかった論」に分ける（pjdhiro 2026-11-10「読めなかったものは、
//     明確にして。10本に入れたくないのです。できれば」。線の引き方は docs/cs-review/README.md「規約で決めたこと」）。
//     関わる実験の論文や別の著者の要約だけを本文で読めた論は、機械では見分けられないので人が見る。

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
const EVIDENCE_DIR = path.join(ROOT, 'cs', 'evidence');
const REVIEWED = path.join(EVIDENCE_DIR, 'reviewed.json');
const STATS = process.argv.includes('--stats');
let OFFSET = 0; // 今見ている記録の frontmatter の行数

const STATUS_TERMS = ['本文照合済', '要旨照合済', '二次資料のみ', '未照合'];
const JUDGMENT_TERMS = ['一致', '言い過ぎ', '取り違え', '帰属違い', '付け足し', '抜け', '未判定'];
const OLD_TERMS = /\b(verified|accepted|plausible|Accept|Reject)\b/;
const POLITE_END = /(です|ます|ません|でした|ました|ましょう|ください)[。）)]*$/;
const PLAIN_END = /(である|だ|ない|た|る|う|い)[。）)]*$/;

const errors = [];
const err = (file, msg) => errors.push(`${path.relative(ROOT, file)}: ${msg}`);

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: null, body: text };
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i <= 0) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return { meta, body: m[2] };
}

function splitCells(row) {
  return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

// 表を取り出す：見出し行・区切り行・データ行の並び。
function findTables(lines) {
  const tables = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].startsWith('|') && /^\|[\s:|-]+\|$/.test(lines[i + 1])) {
      const header = splitCells(lines[i]);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && lines[j].startsWith('|')) {
        rows.push({ lineNo: j + 1 + OFFSET, cells: splitCells(lines[j]) });
        j++;
      }
      tables.push({ lineNo: i + 1 + OFFSET, header, rows });
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
    // 「**要旨**：…」のような、見出しつきの段落は中身を見る
    const body = line.replace(/^\*\*[^*]+\*\*[：:]\s*/, '');
    for (const s of body.split('。')) {
      const t = s.trim();
      if (t) out.push(`${t}。`);
    }
  }
  return out;
}

function checkRecord(file, domainId) {
  const text = fs.readFileSync(file, 'utf8');
  const { meta, body } = parseFrontmatter(text);
  if (!meta) { err(file, 'frontmatter が無い'); return; }
  const offset = text.slice(0, text.indexOf(body)).split('\n').length - 1; // 行番号を file のものにする
  for (const key of ['file_id', 'domain_id', 'title', 'last_updated', 'status', 'source_archive']) {
    if (!meta[key]) err(file, `frontmatter に ${key} が無い`);
  }
  if (meta.file_id && meta.file_id !== `EV-${domainId}`) err(file, `file_id が EV-${domainId} でない（${meta.file_id}）`);
  if (meta.domain_id && meta.domain_id !== domainId) err(file, `domain_id が ${domainId} でない（${meta.domain_id}）`);
  if (meta.last_updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.last_updated)) err(file, `last_updated が日付でない（${meta.last_updated}）`);
  if (meta.source_archive && !fs.existsSync(path.join(ROOT, 'cs', meta.source_archive))) err(file, `source_archive が無い（cs/ からの相対で ${meta.source_archive}）`);

  if (!/文責は Claude/.test(body)) err(file, '冒頭に「文責は Claude」が無い');
  if (!/^## 一面の表/m.test(body)) err(file, '「## 一面の表」が無い');
  if (/\/Users\//.test(body)) err(file, '手元の絶対パス（/Users/…）がある');

  OFFSET = offset;
  const lines = body.split('\n');
  const tables = findTables(lines);

  // 4. 一面の表
  const faceIdx = lines.findIndex((l) => l.startsWith('## 一面の表'));
  const faceTable = tables.find((t) => t.lineNo > faceIdx + 1 + offset);
  if (faceIdx >= 0 && faceTable) {
    const h = faceTable.header.join(' ');
    for (const need of ['論', '対立', '衝突', '統合', '照合の状態']) {
      if (!h.includes(need)) err(file, `一面の表の見出しに「${need}」が無い（${faceTable.lineNo} 行）`);
    }
    const si = faceTable.header.findIndex((c) => c.includes('照合の状態'));
    if (si >= 0) {
      for (const row of faceTable.rows) {
        const cell = row.cells[si] || '';
        if (!STATUS_TERMS.some((t) => cell.includes(t))) err(file, `一面の表 ${row.lineNo} 行の照合の状態が四つの語のどれでもない（${cell}）`);
        if (cell.includes('精読ノートのみ')) err(file, `一面の表 ${row.lineNo} 行：「精読ノートのみ」は「二次資料のみ（精読ノート）」と書く`);
        if (OLD_TERMS.test(cell)) err(file, `一面の表 ${row.lineNo} 行の照合の状態に旧い語（${cell}）`);
        if (!cell.includes('本文照合済')) err(file, `一面の表 ${row.lineNo} 行に「本文照合済」が無い。本文を読めなかった論は表に置かず、表の下と論ごとの節の最後の「本文を読めなかった論」に分ける（11）`);
      }
    }
  } else if (faceIdx >= 0) {
    err(file, '一面の表の下に表が無い');
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
  if (sectionStart < 0) err(file, '「## 論ごとの節」が無い');
  else {
    let i = sectionStart + 1;
    let cur = null;
    const sections = [];
    for (; i < lines.length && !lines[i].startsWith('## '); i++) {
      if (lines[i].startsWith('### ')) { cur = { title: lines[i].slice(4), lineNo: i + 1 + offset, text: '' }; sections.push(cur); }
      else if (cur) cur.text += `${lines[i]}\n`;
    }
    if (!sections.length) err(file, '論ごとの節に ### の節が無い');
    for (const s of sections) {
      const hasStatus = STATUS_TERMS.some((t) => s.text.includes(t));
      if (!hasStatus) err(file, `節「${s.title}」（${s.lineNo} 行）に照合の状態の語が無い`);
      const claimsRead = /本文照合済|要旨照合済/.test(s.text);
      const hasSource = /10\.\d{4,}\/|https?:\/\/|台帳|の記録|PMC\d+/.test(s.text);
      if (claimsRead && !hasSource) err(file, `節「${s.title}」（${s.lineNo} 行）は本文・要旨照合済と書くが確かめ先（DOI・URL・manifest の行）が無い`);
      if (s.text.includes('精読ノートのみ')) err(file, `節「${s.title}」：「精読ノートのみ」は「二次資料のみ（精読ノート）」と書く`);
    }
  }

  // 10. 記号とパス（リンクの行き先と URL は見ない）
  lines.forEach((raw, i) => {
    const line = raw.replace(/\]\([^)\s]*\)/g, ']()').replace(/https?:\/\/\S+/g, 'URL');
    const code = line.match(/(?<![A-Za-z0-9])D(?:0[1-9]|[12]\d|30)(?:-S\d+[a-z]?)?(?!\d)/);
    if (code) err(file, `${i + 1 + offset} 行に分野・原典の記号（${code[0]}）。分野の名前と、著者・年・題で書く`);
    const p = line.match(/(?:pjdhiro\/assets|cs\/knowledge|cs\/evidence\/|cs\/transform|docs\/(?:rules|cs-review)|pd\/wiki|pd\/knowledge|source-notes|scripts\/)[^\s、。）]*|[\w.-]+\.(?:md|mjs|py|sh)\b/);
    if (p) err(file, `${i + 1 + offset} 行に repo のパスかファイル名（${p[0]}）。読者に見える名前で書く`);
  });

  // 9. 文末
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
}

function main() {
  // 引数に記録のパスがあれば、その記録だけを見る（reviewed.json に入れる前の確かめ）。
  const files = process.argv.slice(2).filter((a) => a.endsWith('.md'));
  if (files.length) {
    for (const f of files) {
      const file = path.resolve(f);
      const m = path.basename(file).match(/^evidence-(D\d\d)-/);
      if (!m) { err(file, 'ファイル名が evidence-Dxx-… でない'); continue; }
      if (!fs.existsSync(file)) { err(file, 'ファイルが無い'); continue; }
      checkRecord(file, m[1]);
    }
    if (STATS) return;
    if (errors.length) { for (const e of errors) console.log(`  × ${e}`); console.log(`${errors.length} 件`); process.exit(1); }
    console.log(`照合の記録 ${files.length} 本：問題なし`);
    return;
  }
  if (!fs.existsSync(REVIEWED)) { console.error('cs/evidence/reviewed.json が無い'); process.exit(1); }
  const reviewed = JSON.parse(fs.readFileSync(REVIEWED, 'utf8'));
  const domains = Array.isArray(reviewed.domains) ? reviewed.domains : [];
  for (const d of domains) {
    if (!/^D\d\d$/.test(d.id || '')) { err(REVIEWED, `id の形が違う（${d.id}）`); continue; }
    if (!d.file || !/^evidence-D\d\d-[a-z0-9-]+\.md$/.test(d.file)) { err(REVIEWED, `${d.id} の file の形が違う（${d.file}）`); continue; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.reviewed || '')) err(REVIEWED, `${d.id} の reviewed が日付でない（${d.reviewed}）`);
    const file = path.join(EVIDENCE_DIR, d.file);
    if (!fs.existsSync(file)) { err(REVIEWED, `${d.id} の file が無い（${d.file}）`); continue; }
    if (!d.file.startsWith(`evidence-${d.id}-`)) err(REVIEWED, `${d.id} の file 名が id と合わない（${d.file}）`);
    // 英語の記録（任意）：en/ に日本語と同じファイル名で置く（docs/cs-review/README.md「記録の形」）。
    // 英語の画面はこの行の en があるときだけ記録を開き、無ければ工事中を出す。中身の点検（です・ます など）は日本語だけ。
    if (d.en !== undefined) {
      if (d.en !== `en/${d.file}`) err(REVIEWED, `${d.id} の en が en/${d.file} でない（${d.en}）`);
      else if (!fs.existsSync(path.join(EVIDENCE_DIR, d.en))) err(REVIEWED, `${d.id} の en が無い（${d.en}）`);
    }
    checkRecord(file, d.id);
  }
  if (STATS) return;
  if (errors.length) {
    for (const e of errors) console.log(`  × ${e}`);
    console.log(`${errors.length} 件`);
    process.exit(1);
  }
  console.log(`照合の記録 ${domains.length} 本：問題なし`);
}

main();
