// pjdhiro-dir.mjs — pjdhiro の repo の場所を決める（cs・ks のスクリプトが使う）。
//
// 今までの repo（creation-space・kesson-space）は pjdhiro の隣にあったので `../pjdhiro` で足りた。
// この repo では pjdhiro は repo の隣（~/dev/pd/pjdhiro）にあり、cs/・ks/ からの深さも、
// worktree の中からの深さも違う。
//
// PJDHIRO_DIR があればそれを使い、無ければ startDir から上へ順に pjdhiro/<marker> を探す。
// 見つからなければ、この repo の隣（<repo>/../pjdhiro）を返す。呼ぶ側が、無いときの扱いを決める。
// shell 版は scripts/pjdhiro-dir.sh。

import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function isDir(p) {
  return existsSync(p) && statSync(p).isDirectory();
}

export function findPjdhiroDir(startDir, marker = 'assets', env = process.env) {
  if (env.PJDHIRO_DIR) return path.resolve(env.PJDHIRO_DIR);
  let dir = path.resolve(startDir);
  while (path.dirname(dir) !== dir) {
    dir = path.dirname(dir);
    const candidate = path.join(dir, 'pjdhiro');
    if (isDir(path.join(candidate, marker))) return candidate;
  }
  return path.resolve(REPO_ROOT, '..', 'pjdhiro');
}
