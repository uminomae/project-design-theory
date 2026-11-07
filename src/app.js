import { bindAppEvents } from './app/events.js';
import { getAppDom } from './app/dom.js';
import { createContentLoader } from './app/content-loader.js';
import { createModalRouter } from './app/modal-router.js';
import { loadRandomShader } from './bootstrap/shaders.js';
import { KNOWLEDGE_ENTRIES, MENU_ITEMS, SHADER_PATHS, TRANSLATIONS } from './content/site-data.mjs';
import { getSearchParams } from './lib/query-state.js';
import { createI18n, detectLang } from './ui/i18n.js';
import { createMenuController, renderSiteMenu } from './ui/menu.js';
import { createModalController } from './ui/modal.js';
import { createSlideViewer } from './ui/slide-viewer.js';

try {
    await loadRandomShader(SHADER_PATHS, import.meta.url);
} catch (error) {
    console.warn('Shader bootstrap failed; continuing without background.', error);
}

const dom = getAppDom();

const menuController = createMenuController({
    menuElement: dom.menuElement,
    toggleButton: dom.menuToggle,
});

const aboutModal = createModalController(dom.aboutModalElement);
const howtoModal = createModalController(dom.howtoModalElement);
const knowledgeModal = createModalController(dom.knowledgeModalElement);
const slidesModal = createModalController(dom.slidesModalElement);

const slideViewer = createSlideViewer({
    container: dom.slidesCanvasWrap,
    pageIndicator: dom.slidesPage,
    prevBtn: dom.slidesPrev,
    nextBtn: dom.slidesNext,
});

let modalRouter;

const i18n = createI18n({
    langButtons: dom.langButtons,
    translations: TRANSLATIONS,
    onLanguageChange: async (lang) => {
        if (modalRouter) {
            await modalRouter.handleLanguageChange(lang);
        }
    },
});

renderSiteMenu({
    menuElement: dom.menuElement,
    items: MENU_ITEMS,
    siteRoot: new URL('./', location.href).pathname,
    knowledgeEntries: KNOWLEDGE_ENTRIES,
    translate: i18n.translate,
    lang: i18n.getCurrentLang(),
});
i18n.applyTranslations(dom.menuElement, i18n.getCurrentLang());

const contentLoader = createContentLoader({
    aboutBody: dom.aboutBody,
    knowledgeBody: dom.knowledgeBody,
    knowledgeEntries: KNOWLEDGE_ENTRIES,
    knowledgePdfLink: dom.knowledgePdfLink,
    translate: i18n.translate,
});

modalRouter = createModalRouter({
    aboutBody: dom.aboutBody,
    aboutModal,
    contentLoader,
    getCurrentLang: () => i18n.getCurrentLang(),
    howtoModal,
    knowledgeModal,
    slideViewer,
    slidesModal,
});

bindAppEvents({
    i18n,
    menuController,
    modalRouter,
    slideViewer,
});

async function init() {
    await i18n.switchLang(detectLang());
    await modalRouter.hydrateFromLocation();

    if (getSearchParams().has('dev')) {
        await import('./dev-panel.js');
    }

    // UX: スライドモーダルの即時表示のため、全ユーザーに対してPDF.js+PDFを事前ロードする
    modalRouter.preloadSlides();
}

init();
