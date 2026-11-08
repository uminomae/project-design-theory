// page-check.js — 欠損駆動思考（/ks/）と意識とは（/as/）のトップページを、開いたまま確かめる。
//
// 今までの kesson-space の E2E ランナー（?test で読み込む tests/e2e-runner.js）の考え方を継いで、
// 今のページの形（読み物の本文・日英・記録の畳み）に合わせて書き直した（2026-11-08・docs/TESTING.md）。
// 見た目の良し悪しは決めない。部品が出ているか、言葉が揃っているか、リンクが切れていないか、
// スマートフォン幅で横にはみ出していないかだけを見る。
//
// 使い方：手元のサーバー（http://localhost:3001/ks/ など）をブラウザで開き、本体の JS が動いたあとで
//   const { run } = await import('../src/page-check.js'); await run();
// を実行する（Claude はアプリのブラウザの javascript_tool から）。日英・スマートフォン幅は、
// ?lang=en を付けて開き直す・幅を変えて開き直すことで見る。コンソールのエラーは別に見る。

const PAGES = {
  ks: { title: { ja: '欠損駆動思考', en: 'Kesson-Driven Thinking' } },
  as: { title: { ja: '意識とは', en: 'What Is Awareness' } },
};
const JA_CHARS = /[぀-ヿ㐀-鿿]/;

function visible(el) {
  if (!el) return false;
  const cs = getComputedStyle(el);
  if (cs.display === 'none' || cs.visibility === 'hidden') return false;
  return el.getClientRects().length > 0 || el.closest('details:not([open])') !== null;
}

function visibleText(root) {
  if (!root) return '';
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let out = '';
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const el = n.parentElement;
    if (el && !el.closest('[aria-hidden="true"], script, style') && visible(el)) out += n.textContent;
  }
  return out.replace(/\s+/g, ' ').trim();
}

export async function run({ checkLinks = true } = {}) {
  const key = location.pathname.match(/\/(ks|as)\//)?.[1];
  const results = [];
  const check = (name, ok, detail = '') => results.push({ name, ok: Boolean(ok), detail: String(detail) });
  if (!key) return { error: 'ks か as のトップページで実行する' };

  const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ja';
  const other = lang === 'en' ? 'ja' : 'en';
  const root = document.documentElement;

  // 言葉
  check('<html lang> が URL の言語と同じ', root.lang === lang, root.lang);
  check('lang-pending が外れている', !root.classList.contains('lang-pending'));
  const title = document.getElementById('topbar-main-title')?.textContent.trim();
  check('上の帯の題がその言語', title === PAGES[key].title[lang], title);
  const toggle = document.getElementById('lang-toggle')?.textContent.trim();
  check('言語の切り替えがもう一方の言語を指す', toggle === (lang === 'en' ? '日本語' : 'English'), toggle);

  // 読み物の本文
  const body = document.querySelector(`[data-reading-lang="${lang}"]`);
  const hidden = document.querySelector(`[data-reading-lang="${other}"]`);
  check('その言語の本文が見えている', body && getComputedStyle(body).display !== 'none');
  check('もう一方の言語の本文が隠れている', hidden && getComputedStyle(hidden).display === 'none');
  const chapters = body ? [...body.querySelectorAll('.reading-chapter')] : [];
  check('本文に章がある', chapters.length > 0, `${chapters.length} 章`);
  const ids = [...document.querySelectorAll('[id]')].map((el) => el.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  check('id が重ならない', dupes.length === 0, [...new Set(dupes)].join(' '));
  const fold = document.getElementById('records-fold');
  check('記録の畳みがある', fold?.tagName === 'DETAILS');

  if (lang === 'en') {
    const areas = ['#kesson-topbar', '#overlay', '.room-narration', '.records-fold-summary', `[data-reading-lang="en"]`];
    const leaks = areas
      .map((sel) => [sel, visibleText(document.querySelector(sel))])
      .filter(([, text]) => JA_CHARS.test(text))
      .map(([sel, text]) => `${sel}: ${text.match(/.{0,12}[぀-ヿ㐀-鿿].{0,12}/)?.[0]}`);
    check('英語の表示に日本語が残っていない', leaks.length === 0, leaks.join(' / '));
  }

  // 背景と画像
  check('背景の canvas がある', document.querySelector('#canvas-container canvas'));
  const brokenImages = [...document.images].filter((img) => visible(img) && img.complete && img.naturalWidth === 0);
  check('見えている画像が読み込めている', brokenImages.length === 0, brokenImages.map((img) => img.src).join(' '));

  // スマートフォン幅でも横にはみ出さない（stance.md 2-7「表は横スクロールさせない」）
  const overflow = root.scrollWidth - window.innerWidth;
  check('横にはみ出していない', overflow <= 1, `幅 ${window.innerWidth}px・はみ出し ${overflow}px`);

  // 本文のリンク（同じサイトの中だけ）
  if (checkLinks && body) {
    const hrefs = [...new Set([...body.querySelectorAll('a[href]')]
      .map((a) => new URL(a.getAttribute('href'), location.href))
      .filter((u) => u.origin === location.origin)
      .map((u) => u.href.split('#')[0]))];
    const bad = [];
    for (const href of hrefs) {
      try {
        const res = await fetch(href, { method: 'HEAD', cache: 'no-store' });
        if (!res.ok) bad.push(`${res.status} ${href}`);
      } catch (e) {
        bad.push(`${e.message} ${href}`);
      }
    }
    check('本文のサイト内リンクが開ける', bad.length === 0, bad.length ? bad.join(' / ') : `${hrefs.length} 本`);
    const anchors = [...body.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href').slice(1));
    const missing = anchors.filter((id) => id && !document.getElementById(decodeURIComponent(id)));
    check('本文のページ内リンクの行き先がある', missing.length === 0, missing.join(' '));
  }

  const failed = results.filter((r) => !r.ok);
  return {
    page: key,
    lang,
    width: window.innerWidth,
    passed: results.length - failed.length,
    failed: failed.length,
    results: failed.length ? failed : results.map((r) => r.name),
  };
}
