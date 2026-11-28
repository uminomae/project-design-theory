// blog/ の Menu。pd/ のサイト（HOME・読み物）と同じ右上の Menu を出す（pjdhiro 2026-11-28「メニューを pdt repoのデザインに寄せたい」）。
// 項目と描画は、サイトの Menu の正本をそのまま使う（項目は pd/src/content/site-data.mjs の getMenuItems・描画は pd/src/ui/menu.js）。
// 項目をここに書き写すと、サイトの Menu を直したときにブログだけ古くなるため。見た目は components.css の bl-menu で、pd/ の CSS は読み込まない。
// ページ側に .bl-topbar の [data-bl-menu-toggle] と <nav class="bl-site-menu" id="bl-site-menu"> を置く。
import { getMenuItems, TRANSLATIONS } from '../../src/content/site-data.mjs';
import { createMenuController, renderSiteMenu } from '../../src/ui/menu.js';

const menuElement = document.getElementById('bl-site-menu');
const toggleButton = document.querySelector('[data-bl-menu-toggle]');

if (menuElement && toggleButton) {
    const lang = TRANSLATIONS[document.documentElement.lang] ? document.documentElement.lang : 'ja';
    const translate = (key) => TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.ja?.[key] ?? '';

    renderSiteMenu({
        menuElement,
        // ブログはサイトのどれにも当たらないので、今いる所の印は付けない
        items: getMenuItems({ currentSite: 'blog', context: 'reader' }),
        knowledgeEntries: {},
        translate,
        lang,
        // このファイルは blog/design-system/ にあるので、サイトの根は二つ上
        siteRoot: new URL('../../', import.meta.url).pathname,
    });

    const menu = createMenuController({ menuElement, toggleButton });
    toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.toggle();
    });
    document.addEventListener('click', (event) => {
        if (menu.isOpen() && !event.target.closest('#bl-site-menu')) menu.close();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.isOpen()) {
            menu.close();
            toggleButton.focus();
        }
    });
}
