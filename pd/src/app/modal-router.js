import { getSearchParams, updateSearchParams } from '../lib/query-state.js';
import { resetReveal, revealAboutContent } from '../ui/modal.js';

export function createModalRouter({
    aboutBody,
    aboutModal,
    contentLoader,
    getCurrentLang,
    exploreModal,
    howtoModal,
    knowledgeModal,
    slideViewer,
    slidesModal,
}) {
    let activeKnowledgeKey = null;

    async function openAbout({ pushHistory = true } = {}) {
        const loaded = await contentLoader.loadAboutContent(getCurrentLang());
        if (loaded === false) return;
        closeKnowledge({ updateHistory: false });
        activeKnowledgeKey = null;
        aboutModal.open();
        revealAboutContent(aboutBody);

        if (pushHistory && !getSearchParams().has('about')) {
            updateSearchParams(
                { about: '', knowledge: null },
                { state: { modal: 'about' } },
            );
        }
    }

    function closeAbout({ updateHistory = true } = {}) {
        if (!aboutModal.isOpen()) {
            return;
        }

        resetReveal(aboutBody);
        aboutModal.close();

        if (!updateHistory) {
            return;
        }

        if (getSearchParams().has('about')) {
            if (history.state?.modal === 'about') {
                history.back();
                return;
            }

            updateSearchParams({ about: null }, { replace: true });
        }
    }

    async function openKnowledge(key, { pushHistory = true } = {}) {
        if (!contentLoader.hasKnowledgeEntry(key)) {
            return;
        }

        activeKnowledgeKey = key;
        const loaded = await contentLoader.loadKnowledgeContent(key, getCurrentLang());
        if (loaded === false) return;
        closeAbout({ updateHistory: false });
        knowledgeModal.open();

        if (pushHistory && getSearchParams().get('knowledge') !== key) {
            updateSearchParams(
                { knowledge: key, about: null },
                { state: { modal: 'knowledge', key } },
            );
        }
    }

    function closeKnowledge({ updateHistory = true } = {}) {
        if (!knowledgeModal.isOpen()) {
            return;
        }

        knowledgeModal.close();
        activeKnowledgeKey = null;

        if (!updateHistory) {
            return;
        }

        if (getSearchParams().has('knowledge')) {
            if (history.state?.modal === 'knowledge') {
                history.back();
                return;
            }

            updateSearchParams({ knowledge: null }, { replace: true });
        }
    }

    async function loadSlidesForLang(lang = getCurrentLang()) {
        const path = slidesPdfPath(lang);
        if (!slideViewer || slidesLoadedPath === path) return;
        const loaded = await slideViewer.load(path);
        if (loaded) slidesLoadedPath = path;
    }

    async function handleLanguageChange(lang) {
        if (slidesModal.isOpen()) {
            await loadSlidesForLang(lang);
        }

        if (aboutModal.isOpen()) {
            resetReveal(aboutBody);
            await contentLoader.loadAboutContent(lang);
            if (aboutModal.isOpen()) {
                revealAboutContent(aboutBody);
            }
        }

        if (knowledgeModal.isOpen() && activeKnowledgeKey) {
            const key = activeKnowledgeKey;
            await contentLoader.loadKnowledgeContent(key, lang);
            // knowledgeModal の open 状態は loadKnowledgeContent 内では変化しないため追加ガード不要
        }
    }

    function openHowto({ pushHistory = true } = {}) {
        closeAbout({ updateHistory: false });
        closeKnowledge({ updateHistory: false });
        howtoModal.open();

        if (pushHistory && !getSearchParams().has('howto')) {
            updateSearchParams(
                { howto: '', about: null, knowledge: null },
                { state: { modal: 'howto' } },
            );
        }
    }

    function closeHowto({ updateHistory = true } = {}) {
        if (!howtoModal.isOpen()) {
            return;
        }

        howtoModal.close();

        if (!updateHistory) {
            return;
        }

        if (getSearchParams().has('howto')) {
            if (history.state?.modal === 'howto') {
                history.back();
                return;
            }

            updateSearchParams({ howto: null }, { replace: true });
        }
    }

    // 日本語の画面は overview-slides-ja.pdf、英語の画面は overview-slides-en.pdf（元は pd/scripts/slides/）
    let slidesLoadedPath = null;
    function slidesPdfPath(lang = getCurrentLang()) {
        return lang === 'en' ? 'assets/pdf/overview-slides-en.pdf' : 'assets/pdf/overview-slides-ja.pdf';
    }

    async function openSlides({ pushHistory = true } = {}) {
        closeAbout({ updateHistory: false });
        closeKnowledge({ updateHistory: false });
        closeHowto({ updateHistory: false });
        slidesModal.open();

        await loadSlidesForLang();

        if (pushHistory && !getSearchParams().has('slides')) {
            updateSearchParams(
                { slides: '', about: null, knowledge: null, howto: null },
                { state: { modal: 'slides' } },
            );
        }
    }

    function closeSlides({ updateHistory = true } = {}) {
        if (!slidesModal.isOpen()) {
            return;
        }

        slidesModal.close();

        if (!updateHistory) {
            return;
        }

        if (getSearchParams().has('slides')) {
            if (history.state?.modal === 'slides') {
                history.back();
                return;
            }

            updateSearchParams({ slides: null }, { replace: true });
        }
    }

    function openExplore({ pushHistory = true } = {}) {
        if (!exploreModal) return;
        closeAbout({ updateHistory: false });
        closeKnowledge({ updateHistory: false });
        closeHowto({ updateHistory: false });
        exploreModal.open();

        if (pushHistory && !getSearchParams().has('explore')) {
            updateSearchParams(
                { explore: '', about: null, knowledge: null, howto: null },
                { state: { modal: 'explore' } },
            );
        }
    }

    function closeExplore({ updateHistory = true } = {}) {
        if (!exploreModal || !exploreModal.isOpen()) {
            return;
        }

        exploreModal.close();

        if (!updateHistory) {
            return;
        }

        if (getSearchParams().has('explore')) {
            if (history.state?.modal === 'explore') {
                history.back();
                return;
            }

            updateSearchParams({ explore: null }, { replace: true });
        }
    }

    function handleEscape() {
        closeExplore();
        closeSlides();
        closeHowto();
        closeKnowledge();
        closeAbout();
    }

    async function handlePopState() {
        const params = getSearchParams();

        if (params.has('about')) {
            if (!aboutModal.isOpen()) {
                await openAbout({ pushHistory: false });
            }
        } else {
            closeAbout({ updateHistory: false });
        }

        const knowledgeKey = params.get('knowledge');

        if (knowledgeKey && contentLoader.hasKnowledgeEntry(knowledgeKey)) {
            if (!knowledgeModal.isOpen() || activeKnowledgeKey !== knowledgeKey) {
                await openKnowledge(knowledgeKey, { pushHistory: false });
            }
        } else {
            closeKnowledge({ updateHistory: false });
        }

        if (params.has('howto')) {
            if (!howtoModal.isOpen()) {
                openHowto({ pushHistory: false });
            }
        } else {
            closeHowto({ updateHistory: false });
        }

        if (params.has('explore')) {
            if (exploreModal && !exploreModal.isOpen()) {
                openExplore({ pushHistory: false });
            }
        } else {
            closeExplore({ updateHistory: false });
        }

        if (params.has('slides')) {
            if (!slidesModal.isOpen()) {
                await openSlides({ pushHistory: false });
            }
        } else {
            closeSlides({ updateHistory: false });
        }
    }

    async function hydrateFromLocation() {
        const params = getSearchParams();

        if (params.has('about')) {
            history.replaceState({ modal: 'about' }, '', window.location.href);
            await openAbout({ pushHistory: false });
        }

        const knowledgeKey = params.get('knowledge');

        if (knowledgeKey && contentLoader.hasKnowledgeEntry(knowledgeKey)) {
            history.replaceState({ modal: 'knowledge', key: knowledgeKey }, '', window.location.href);
            await openKnowledge(knowledgeKey, { pushHistory: false });
        }

        if (params.has('howto')) {
            history.replaceState({ modal: 'howto' }, '', window.location.href);
            await openHowto({ pushHistory: false });
        }

        if (params.has('explore')) {
            history.replaceState({ modal: 'explore' }, '', window.location.href);
            openExplore({ pushHistory: false });
        }

        if (params.has('slides')) {
            history.replaceState({ modal: 'slides' }, '', window.location.href);
            await openSlides({ pushHistory: false });
        }
    }

    function preloadSlides() {
        if (slideViewer) {
            slideViewer.preload(slidesPdfPath());
        }
    }

    return {
        closeAbout,
        closeExplore,
        closeHowto,
        closeKnowledge,
        closeSlides,
        handleEscape,
        handleLanguageChange,
        handlePopState,
        hydrateFromLocation,
        isSlidesOpen: () => slidesModal.isOpen(),
        openAbout,
        openExplore,
        openHowto,
        openKnowledge,
        openSlides,
        preloadSlides,
    };
}
