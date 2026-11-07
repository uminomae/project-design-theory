/**
 * wiki-links.js
 *
 * ブラウザ render-time で HTML 内の wiki 用語初出をリンクに置換する。
 * 用語マップは pd/wiki の実在するページから生成した src/wiki-terms.js を読む。
 *
 * Usage:
 *   import { injectWikiLinks } from './wiki-links.js';
 *   const html = injectWikiLinks(parsedHtml);
 */

import { TERM_MAP } from './wiki-terms.js';

export const WIKI_BASE = '/project-design-theory/wiki';
export const WIKI_INDEX_URL = `${WIKI_BASE}/`;

// 用語マップは src/wiki-terms.js（scripts/build-wiki-terms.mjs が pd/wiki から生成。長い順）

/**
 * 文字列内に含まれる wiki 用語を長い順に走査し、最初に見つかった用語の URL を返す。
 * 見つからない場合は null。TERM_MAP は長さ降順にソート済みなので、より具体的な用語が優先される。
 *
 * @param {string} text - 検索対象の文字列（例: report.nameJa + report.summaryJa）
 * @returns {string | null}
 */
export function findWikiUrlByText(text) {
  if (!text) return null;
  for (const { term, url } of TERM_MAP) {
    if (text.includes(term)) return url;
  }
  return null;
}

/**
 * parsed HTML 内の用語初出を wiki リンクに置換する。
 * - <a> タグ内部はスキップ
 * - <h1>-<h6> 内部はスキップ
 * - 各用語は最初の1回だけ置換
 *
 * @param {string} html - marked.parse() 済みの HTML 文字列
 * @returns {string} wiki リンクが注入された HTML
 */
export function injectWikiLinks(html) {
  if (!html) return html;

  const linked = new Set();

  // タグ内部 / 既存リンク / 見出しを退避
  const placeholders = [];
  let safe = html
    .replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, (match) => {
      const idx = placeholders.length;
      placeholders.push(match);
      return `\x00PH${idx}\x00`;
    })
    .replace(/<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>/gi, (match) => {
      const idx = placeholders.length;
      placeholders.push(match);
      return `\x00PH${idx}\x00`;
    })
    .replace(/<[^>]+>/g, (match) => {
      const idx = placeholders.length;
      placeholders.push(match);
      return `\x00PH${idx}\x00`;
    });

  for (const { term, url } of TERM_MAP) {
    if (linked.has(term)) continue;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped);
    if (regex.test(safe)) {
      const link = `<a href="${url}" data-wiki="1">${term}</a>`;
      const phIdx = placeholders.length;
      placeholders.push(link);
      safe = safe.replace(regex, `\x00PH${phIdx}\x00`);
      linked.add(term);
    }
  }

  // 復元
  safe = safe.replace(/\x00PH(\d+)\x00/g, (_, idx) => placeholders[Number(idx)]);
  return safe;
}
