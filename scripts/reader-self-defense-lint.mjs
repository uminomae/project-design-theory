#!/usr/bin/env node
// reader-self-defense-lint — 公開 READER から「Claude がルールに向けて言い訳する地の文」を検出する。
// 根拠: two-axis-closure/README.md 執筆ルール 24（2026-11-03 pjdhiro 指示）。
// 使い方: node scripts/reader-self-defense-lint.mjs [reader/*.html ...]  （無指定なら reader/ 全部）
// 判定は候補の列挙。読者向けの内容（例: 4章の「看板＝分かったと言える安心」）は人が残す判断をする。
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const PATTERNS = [
  /この読み物(では|は)、?[^。]{0,30}(しません|書きません|消そうとしません|掲げません|使いません)/,
  /断定ではなく、?足場/,
  /(一度だけ|一度ずつ|一か所だけ)[^。]{0,20}(戻り|触れ|置き)ます/,
  /この語(には|を)[^。]{0,20}(戻り|看板|使い)/,
  /看板にし(ない|ません)/,
  /群盲象/,
  /(語|言葉)をどう扱ったか/,
  /(今回|この)の?視点から引いた一つの輪郭/,
  /(通説|多数派)に(丸め|寄せ)(ない|ません)/,
  /ルール(に従|のため|があるので)/,
  /このページ(も|は|では)、?[^。]{0,40}(書きません|しません|見ます)/,
  /Claude が[^。]{0,20}(せず|しないで|しません)/,
  // 2026-11-05 追補（pd#144 love-driven-dev で見落とした型）
  /象の一部に触れた/,
  /別枠の足場/,
  /並べているのは、?形の重なり/,
  /まだ確かめていない見立て/,
  /指を向けることまで/,
  /別の切り口(です|として扱)/,
  /とあるとおり、[^。]{0,20}(出発点|仮)/,
  /(この読み物|このページ)で(は)?、?話の流れに合わせて/,
  /としては扱いません/,
  /同時に持っておきます/,
];

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync('reader').filter(f => f.endsWith('.html')).map(f => join('reader', f));

let hits = 0;
for (const f of files) {
  // コメント・LLM 向け隠し要約（visually-hidden）は対象外: 読者に見える本文だけを見る
  const src = readFileSync(f, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(div|section)[^>]*(visually-hidden|seo-content-summary)[\s\S]*?<\/\1>/g, '');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    for (const re of PATTERNS) {
      const m = line.match(re);
      if (m) {
        hits++;
        const text = line.replace(/<[^>]+>/g, '');
        const at = Math.max(0, text.indexOf(m[0]) - 30);
        console.log(`${f}:${i + 1}: /${re.source}/ … ${text.slice(at, at + 110)}`);
        break;
      }
    }
  });
}
console.log(hits ? `\n${hits} 件の候補。読者向けの内容か、ルールへの言い訳かを一つずつ判断する。` : 'self-defense lint: 0 hits');
process.exit(0);
