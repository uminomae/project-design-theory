#!/usr/bin/env node
// 対話の形の読み物で、pjdhiro の発言の引用カードが、文脈なしに出ていないかを見る。
//
//   node scripts/check-quote-context.mjs
//
// 引用カード：`<strong>pjdhiro の…：</strong>` で始まる段落（頭にページ内リンクの `<a id="…"></a>` があってもよい）。
// カードの直前（空行を除く）が、次のどれかなら止める。発言の前に、なぜその発言が出たのかが分かる文
// （多くは、その発言が答えた問い）を置く（docs/rules/stance.md 2-4・docs/rules/writing.md §5 の 10・型 R）。
//   - 見出し（`#` で始まる行。章・小見出し・畳みの中の小見出し）
//   - 畳みの題・入口（`<summary>`・`<details>`）
//   - 組む道具の印（`<!--OPEN-->`・`<!--PART:…-->`・`<!--/TURN-->` ほか `<!--` で始まる行）
//   - ファイルの頭（前に何も無い）
// 見る正本は FILES に並べる。対話の形で組む読み物が増えたら、ここに足す。
import { readFileSync } from 'node:fs';

const FILES = [
  'pd/knowledge/research/love-driven-dev/READER-love-driven-dev.md',
  'pd/knowledge/research/love-trajectory/READER-love-trajectory.md',
];

const CARD = /^(?:<a id="[^"]*"><\/a>)?<strong>pjdhiro の[^<]*：<\/strong>/;

function why(prev) {
  if (prev === null) return 'ファイルの頭';
  const t = prev.trim();
  if (t.startsWith('#')) return '見出し';
  if (t.includes('<summary')) return '畳みの題';
  if (t.startsWith('<details')) return '畳みの入口';
  if (t.startsWith('<!--')) return `組む道具の印（${t.slice(0, 20)}）`;
  return null;
}

let bad = 0;
let cards = 0;
for (const file of FILES) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (!CARD.test(line)) return;
    cards++;
    let j = i - 1;
    while (j >= 0 && lines[j].trim() === '') j--;
    const reason = why(j >= 0 ? lines[j] : null);
    if (reason) {
      bad++;
      const head = line.replace(/^<a id="[^"]*"><\/a>/, '').replace(/<\/?strong>/g, '').slice(0, 40);
      console.log(`${file}:${i + 1}: 引用カードの直前が${reason}。発言の前に、なぜその発言が出たのかが分かる文を置く：${head}…`);
    }
  });
}

if (bad > 0) {
  console.log(`文脈なしの引用カード ${bad} 件（カード ${cards} 件のうち）。docs/rules/writing.md §5 の 10`);
  process.exit(1);
}
console.log(`引用カード ${cards} 件、どれも直前に文がある`);
