#!/usr/bin/env node
// reader-attribution-audit — READER の正本 MD を一文ごとに「帰属の形」で機械分類し、監査表を出す。
// 根拠: pd#147（Fable レビュー 2026-11-05）。ずれるのは引用ラベルでなく、間接話法と帰属の無い地の文。
// 判定は人がする。出力は候補の一覧（lint ではない）。
// 使い方: node scripts/reader-attribution-audit.mjs knowledge/research/love-driven-dev/READER-love-driven-dev.md [--all]
//   既定は ASSERT（裸の断定）と CITE（引用先と突き合わせる文）と CELL（表のセルで、帰属もヘッジも無いもの）だけを出す。--all で全分類を出す。
//   表の行も読む（2026-11-10・#111）。見出しの行と区切りの行は飛ばし、セルごとに分類する。セルは文末が整わないことが多いので、
//   どの形にも当たらない 12 字以上のセルを CELL として出す（--no-table で表を飛ばす）。
import { readFileSync } from 'node:fs';

const file = process.argv[2];
const all = process.argv.includes('--all');
const noTable = process.argv.includes('--no-table');
if (!file) { console.error('usage: node scripts/reader-attribution-audit.mjs <READER.md> [--all]'); process.exit(1); }

const RULES = [
  ['QUOTE',    /^<strong>pjdhiro の[^<]+<\/strong>/],
  ['INDIRECT', /pjdhiro (は|には|が)[^。]*(見ています|見立て|読み|言い|言って|評し|挙げる|探して|考えて|問い続けて|感じて|喩えて|書きます|書いて)/],
  ['CITE',     /(と置いています|と置きます|と書いています|と書きました|と結びます|と考えます|と論じて|と置いて|とも置いて|と提案しました|と見積もりました)/],
  ['HEDGE',    /(かもしれません|かもしれない|と読めます|と見ることができます|と見ています|のではないか|のでしょうか|ように見えます|とは考えにくい|ありそう|なさそう|としたら|とします|あるとしたら|と読めて|と仮定|と言いにくく)/],
];

const src = readFileSync(file, 'utf8');
const lines = src.split('\n');
const counts = {};
let inFront = false;
lines.forEach((raw, i) => {
  const ln = raw.trim();
  if (i === 0 && ln === '---') { inFront = true; return; }
  if (inFront) { if (ln === '---') inFront = false; return; }
  if (ln.startsWith('|')) {
    if (noTable) return;
    const isSep = (l) => /^\|[\s:|-]+\|?$/.test((l || '').trim());
    if (isSep(ln) || isSep(lines[i + 1])) return; // 区切りの行と、その上の見出しの行
    const cells = ln.replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((c) => c.replace(/<[^>]+>/g, '').replace(/\*\*/g, '').trim()).filter(Boolean);
    for (const c of cells) {
      let cat = null;
      for (const [name, re] of RULES) { if (name !== 'QUOTE' && re.test(c)) { cat = name; break; } }
      if (!cat) cat = Array.from(c).length >= 12 ? 'CELL' : 'OTHER';
      counts[cat] = (counts[cat] || 0) + 1;
      if (all || cat === 'CELL' || cat === 'CITE') console.log(`${i + 1}\t${cat}\t表：${c.slice(0, 90)}`);
    }
    return;
  }
  if (!ln || ln.startsWith('#') || ln.startsWith('<!--') || ln.startsWith('<div') || ln.startsWith('</') || ln.startsWith('<a ') || ln.startsWith('<img') || ln.startsWith('<span') || ln.startsWith('<p ') || ln.startsWith('出典：') || ln.startsWith('🚧')) return;
  const text = ln.replace(/<details><summary>[^<]*<\/summary>/, '').replace(/<[^>]+>/g, '');
  if (!text) return;
  // 一文ごとに分ける（「。」で区切る）
  const sentences = text.split(/(?<=。)/).map(s => s.trim()).filter(Boolean);
  for (const s of sentences) {
    let cat = 'ASSERT';
    for (const [name, re] of RULES) { if (re.test(ln.startsWith('<strong>pjdhiro') ? ln : s)) { cat = name; break; } }
    if (cat === 'ASSERT' && !/(ます|です|ました|ません|でした)。$/.test(s)) cat = 'OTHER';
    counts[cat] = (counts[cat] || 0) + 1;
    if (all || cat === 'ASSERT' || cat === 'CITE') console.log(`${i + 1}\t${cat}\t${s.slice(0, 90)}`);
  }
});
console.log('\n集計: ' + Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(' '));
console.log('CELL＝表のセルで、帰属もヘッジも無いもの（出典の列と見比べて、誰の言葉・どの原典かを人が判定する）。');
console.log('ASSERT＝帰属もヘッジも無い断定（確かめた事実か、本人の言葉か、Claude の試案かを人が判定する）／CITE＝引用先と突き合わせる文。');
