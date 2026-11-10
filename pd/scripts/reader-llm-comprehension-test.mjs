#!/usr/bin/env node
/**
 * READER 公開ページ LLM 読解テスト ハーネス（pd#127・ルール16）
 *
 * 公開 HTML (reader/three-and-seven.html) から「文脈ゼロの LLM が読むプレーンテキスト」を
 * 抽出し、テスト仕様 (TEST-reader-llm-comprehension.md) の規定質問群を束ねて
 * 読者 LLM へ渡すプロンプトを生成する。
 *
 *   node scripts/reader-llm-comprehension-test.mjs
 *
 * 抽出方針:
 *  - <script>/<style>/<svg>/<noscript>/<head> は除去（装飾・ノイズ）
 *  - <details> は展開して隠れを排除（summary は【畳み】マーカー付きで残す）
 *  - 見出し・リスト・段落の構造を保った平易テキストに落とす
 *
 * 出力（いずれも .cache/active/・gitignore・ローカル）:
 *  - reader-context-zero.txt : 読者 LLM が読むページ本文のみ
 *  - reader-llm-test-prompt.md: 上記 + 規定質問群 + 指示（読者へそのまま渡す）
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// 対象 READER をコマンドライン引数で選ぶ（既定は three-and-seven で後方互換）。
//   node scripts/reader-llm-comprehension-test.mjs [three-and-seven|energy-flow]
const TARGETS = {
  'three-and-seven': {
    html: 'reader/three-and-seven.html',
    spec: 'knowledge/research/two-axis-closure/TEST-reader-llm-comprehension.md',
  },
  'energy-flow': {
    html: 'reader/energy-flow.html',
    spec: 'knowledge/research/energy-flow-psyche/TEST-reader-energy-flow.md',
  },
  'love-driven-dev': {
    html: 'reader/love-driven-dev.html',
    spec: 'knowledge/research/love-driven-dev/TEST-comprehension-log.md',
  },
  'rotation-multiplication': {
    html: 'reader/rotation-multiplication.html',
    spec: 'knowledge/research/rotation-multiplication/TEST-reader-rotation-multiplication.md',
  },
  'psychological-safety': {
    html: 'reader/psychological-safety.html',
    spec: 'knowledge/research/psychological-safety/TEST-comprehension-log.md',
  },
  // spec が無いページは、下の DEFAULT_QUESTIONS（docs/rules/review.md の⑤）を使う（2026-11-09・#79）
  'love-history': {
    html: 'reader/love-history.html',
    spec: null,
  },
  'love-trajectory': {
    html: 'reader/love-trajectory.html',
    spec: null,
  },
};

// spec の無いページに使う規定質問群（docs/rules/review.md「五つの点検」⑤・writing.md §6）
const DEFAULT_QUESTIONS = `
1. 冒頭（最初の見出しとその下の数段落）だけを読んで、このページが何の話で、答え（または並べているもの）は何か、一、二文で言ってください。言えない場合は、何が足りないかを書いてください。
2. 本文の途中で、説明なしに出てきた用語・固有名詞・サイト特有の語（初出で定義や説明が無いもの）をすべて挙げてください。
3. 「誰の言葉か」が本文だけから分からない箇所を挙げてください（著者の主張か、引用した原典の主張か、ページの持ち主の見方か）。
4. 「どこまで確かめたか」（原典を読んだのか、要旨だけか、確かめていないのか）が本文だけから読み取れない箇所を挙げてください。
5. 二通り以上に読める文、または前後で言っていることが食い違うと読める箇所を、場所と二つの読みを添えて挙げてください。
6. ページの中で、良い・悪い、正しい・誤り の判断が入っていると読める箇所があれば挙げてください。
7. 中学生に説明するつもりで、このページの全体を 200 字ほどで言い直してください。
`.trim();
const TARGET = process.argv[2] || 'three-and-seven';
if (!TARGETS[TARGET]) {
  console.error(`未知の対象: ${TARGET}. 選択肢: ${Object.keys(TARGETS).join(' / ')}`);
  process.exit(2);
}

const HTML = resolve(ROOT, TARGETS[TARGET].html);
const SPEC = TARGETS[TARGET].spec ? resolve(ROOT, TARGETS[TARGET].spec) : null;
const OUT_DIR = resolve(ROOT, '.cache/active');
const OUT_TEXT = resolve(OUT_DIR, `reader-context-zero-${TARGET}.txt`);
const OUT_PROMPT = resolve(OUT_DIR, `reader-llm-test-prompt-${TARGET}.md`);

/** HTML の本文領域を抽出して平易テキストへ落とす */
function extractContextZero(html) {
  // <body> 内に限定
  let s = html.replace(/[\s\S]*?<body[^>]*>/i, '').replace(/<\/body>[\s\S]*$/i, '');
  // ノイズ要素を丸ごと除去
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<svg[\s\S]*?<\/svg>/gi, ' [図（本文の理解には必須ではない装飾/概念図）] ');
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  // details を展開: summary をマーカー化、開閉タグは境界マーカーに
  s = s.replace(/<summary[^>]*>([\s\S]*?)<\/summary>/gi, (_, t) => `\n\n【畳み】${stripTags(t).trim()}\n`);
  s = s.replace(/<details[^>]*>/gi, '\n');
  s = s.replace(/<\/details>/gi, '\n【畳みここまで】\n');
  // 見出し
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${stripTags(t).trim()}\n`);
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${stripTags(t).trim()}\n`);
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${stripTags(t).trim()}\n`);
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${stripTags(t).trim()}\n`);
  // リスト項目
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${stripTags(t).trim()}`);
  // 段落・改行・引用・表セル
  s = s.replace(/<\/(p|div|tr|blockquote)>/gi, '\n\n');
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/(td|th)>/gi, ' | ');
  // 残りのタグを除去
  s = stripTags(s);
  // 実体参照
  s = decodeEntities(s);
  // 空白整理
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

function stripTags(t) {
  return t.replace(/<[^>]+>/g, '');
}

function decodeEntities(t) {
  const map = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ', '&hellip;': '…', '&mdash;': '—', '&ndash;': '–' };
  return t
    .replace(/&(amp|lt|gt|quot|#39|nbsp|hellip|mdash|ndash);/g, (m) => map[m] || m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

/** テスト仕様から規定質問群ブロックを取り出す */
function extractQuestions(spec) {
  const m = spec.match(/<!--\s*QUESTIONS:START\s*-->([\s\S]*?)<!--\s*QUESTIONS:END\s*-->/);
  if (!m) throw new Error('QUESTIONS ブロックが TEST 仕様に見つかりません');
  return m[1].trim();
}

function buildPrompt(pageText, questions) {
  return `# READER 公開ページ LLM 読解テスト（文脈ゼロ）

あなたは、この 1 ページの文章を **初めて読む** LLM です。事前知識や外部の文脈は使わず、**下の「対象ページ本文」だけ**を根拠に、続く質問群へ日本語で答えてください。

ルール:
- ページに書いていないことは推測で埋めず、「ページからは判断できない」と書いてください。
- 曖昧・二義的に読める箇所は、率直に「ここは A とも B とも読める」と指摘してください（それが最重要の出力です）。
- 数式・専門語は、中学生に説明するつもりで自分の言葉に言い直してください。

---

## 対象ページ本文

${pageText}

---

## 質問群（すべてに答えてください）

${questions}
`;
}

function main() {
  const html = readFileSync(HTML, 'utf-8');
  const pageText = extractContextZero(html);
  const questions = SPEC ? extractQuestions(readFileSync(SPEC, 'utf-8')) : DEFAULT_QUESTIONS;
  const prompt = buildPrompt(pageText, questions);

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_TEXT, pageText, 'utf-8');
  writeFileSync(OUT_PROMPT, prompt, 'utf-8');

  const chars = [...pageText].length;
  const foldOpen = (pageText.match(/【畳み】/g) || []).length;
  const badChar = (pageText.match(/�/g) || []).length;
  const leftoverTags = (pageText.match(/<[a-z/][^>]*>/gi) || []).length;

  console.log('READER LLM 読解テスト ハーネス');
  console.log('  対象:', HTML.replace(ROOT + '/', ''));
  console.log('  本文出力:', OUT_TEXT.replace(ROOT + '/', ''));
  console.log('  プロンプト出力:', OUT_PROMPT.replace(ROOT + '/', ''));
  console.log('  本文文字数:', chars);
  console.log('  展開した畳み数:', foldOpen);
  console.log('  UTF-8 置換文字(U+FFFD):', badChar, badChar === 0 ? 'OK' : '⚠️ 要調査');
  console.log('  残存タグ:', leftoverTags, leftoverTags === 0 ? 'OK' : '⚠️ 抽出漏れ');
  if (badChar > 0 || leftoverTags > 0) process.exitCode = 1;
}

main();
