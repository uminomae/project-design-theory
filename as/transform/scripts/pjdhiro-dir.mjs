// pjdhiro-dir.mjs — pjdhiro の repo の場所を決める。
//
// PJDHIRO_DIR があればそれを使い、無ければこのスクリプトの場所から上へ順に
// pjdhiro/assets/awareness を探す（worktree の中からでも ~/dev/pd/pjdhiro が見つかるように）。
// 見つからなければ例外を投げる（作業ディレクトリに偽の pjdhiro/ を作らないため）。

import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const AWARENESS_SUBPATH = path.join('assets', 'awareness');

function isDir(p) {
    return existsSync(p) && statSync(p).isDirectory();
}

export function findPjdhiroDir({ env = process.env, startDir = SCRIPT_DIR } = {}) {
    if (env.PJDHIRO_DIR) {
        const candidate = path.resolve(env.PJDHIRO_DIR);
        if (isDir(path.join(candidate, AWARENESS_SUBPATH))) return candidate;
        throw new Error(`pjdhiro: PJDHIRO_DIR=${env.PJDHIRO_DIR} に assets/awareness が無い`);
    }
    let dir = path.resolve(startDir);
    while (true) {
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
        const candidate = path.join(dir, 'pjdhiro');
        if (isDir(path.join(candidate, AWARENESS_SUBPATH))) return candidate;
    }
    throw new Error(`pjdhiro: ${startDir} から上に pjdhiro/assets/awareness が見つからない（PJDHIRO_DIR で指定できる）`);
}

export function findAwarenessAssetsRoot(options) {
    return path.join(findPjdhiroDir(options), AWARENESS_SUBPATH);
}
