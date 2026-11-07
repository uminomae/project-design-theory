// reader-menu.js — 読み物・ツールのページにトップと同じ Menu を出す（pjdhiro 2026-10-24「統一感のある menu」）
// 項目は site-data.mjs の getMenuItems（context: "reader"）が正本。描画と開閉はトップと同じ ui/menu.js を使う。
// ページ側に .top-bar の [data-menu-toggle] と <nav class="site-menu" id="site-menu"> を置く。
import { getMenuItems, TRANSLATIONS } from './content/site-data.mjs';
import { createMenuController, renderSiteMenu } from './ui/menu.js';

const menuElement = document.getElementById('site-menu');
const toggleButton = document.querySelector('[data-menu-toggle]');

if (menuElement && toggleButton) {
    const lang = TRANSLATIONS[document.documentElement.lang] ? document.documentElement.lang : 'ja';
    const translate = (key) => TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.ja?.[key] ?? '';

    renderSiteMenu({
        menuElement,
        items: getMenuItems({ currentSite: 'home', context: 'reader' }),
        knowledgeEntries: {},
        translate,
        lang,
        // 読み物ページは reader/ の下にあるので、サイトの根は一つ上
        siteRoot: new URL('../', location.href).pathname,
    });
    toggleButton.textContent = translate('menu.toggle');

    const menu = createMenuController({ menuElement, toggleButton });
    toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.toggle();
    });
    document.addEventListener('click', (event) => {
        if (menu.isOpen() && !event.target.closest('#site-menu')) menu.close();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.isOpen()) {
            menu.close();
            toggleButton.focus();
        }
    });
}
