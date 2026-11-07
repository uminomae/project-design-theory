#!/usr/bin/env node
/**
 * build-wiki-terms.mjs
 *
 * pd/wiki の実在するページから用語マップを作り、src/wiki-terms.js に書き出す。
 * 用語マップの作り方は pd/scripts/compile-content-links.mjs の buildTermMap と同じ
 * （URL は Quartz の slug に合わせ、空白は `-`）。
 * wiki のページを足したり名前を変えたりしたら、これを実行し直す。
 *
 * Usage: node scripts/build-wiki-terms.mjs
 */

import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import { ROOT as PD_ROOT, buildTermMap } from "../../pd/scripts/compile-content-links.mjs";

const AS_ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const OUT = join(AS_ROOT, "src", "wiki-terms.js");

// as で用語リンクにする wiki の置き場（sources/ は文献ページなので用語にしない）
export const AS_WIKI_DIRS = [
  { dir: join(PD_ROOT, "wiki", "concepts"), category: "concepts" },
  { dir: join(PD_ROOT, "wiki", "keywords"), category: "keywords" },
  { dir: join(PD_ROOT, "wiki"), category: "" },
];

export function buildAsTermMap() {
  return buildTermMap(AS_WIKI_DIRS);
}

async function main() {
  const terms = await buildAsTermMap();
  if (terms.length === 0) throw new Error("pd/wiki にページが見つからない");
  const body = [
    "// このファイルは scripts/build-wiki-terms.mjs が生成する。手で直さない。",
    "// pd/wiki の concepts/・keywords/・根のページから作った用語マップ（長い順）。",
    "export const TERM_MAP = [",
    ...terms.map(({ term, url }) => `  { term: ${JSON.stringify(term)}, url: ${JSON.stringify(url)} },`),
    "];",
    "",
  ].join("\n");
  await writeFile(OUT, body, "utf-8");
  console.error(`wrote ${terms.length} terms -> src/wiki-terms.js`);
}

const isDirectRun =
  process.argv[1] && import.meta.url === new URL(process.argv[1], "file://").href;

if (isDirectRun) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
