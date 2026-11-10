import { normalizeLang } from '../i18n.js';
import {
    DEFAULT_PROGRESS_TAXONOMY,
    DEFAULT_REPORTS_ASSET_BASE,
    DEFAULT_REPORTS_DATA_URL,
    DEFAULT_REPORTS_MD_ASSET_BASE,
    GUIDES_MANIFEST_URL,
    MODEL_GUIDE_LINKS,
    PHASE8_THEMES_MANIFEST_URL,
    STATUS_REPORT_LINKS,
    SURVEY_MANIFEST_URL,
    SYNTHESIS_REPORT_LINKS,
    SYNTHESIS_PRESENTATION_LINKS,
    countReportsByProgressLevel,
    loadGuidesGeneratedAt,
    loadReportsData,
    normalizeAssetBaseUrl,
    normalizeDomainId,
    normalizeProgressTaxonomy,
    resolveLocalizedSources,
    resolveDomainReportSources,
    isDomainReportPendingEnglish,
    buildJapaneseDomainUrl,
} from './data.js';
import {
    createReportsHistoryController,
    DOMAIN_HISTORY_MODE_INITIAL,
    DOMAIN_HISTORY_MODE_PUSH,
} from './history.js';
import { createGenericHistoryController } from './generic-history.js';
import { createSlideHistoryController } from '../slide-history.js';
import { createModalRouter } from '../modal-router.js';
import { createReportsModalController } from './modal.js';
import { initHoverGrid } from './hover-grid.js';
import { createReportsRenderer, getDomainReportTitle, getReportsStrings } from './render.js';
import { createPhase8Renderer, loadPhase8Themes } from './phase8.js';
import { createSynthesisRenderer } from './synthesis.js';
import { createThemeVerificationRenderer, THEME_DATA, INTEGRATION_REPORT, THEME_VERIFICATION_BASE } from './theme-verification.js';
import { openRichSlideViewer } from '../slide-viewer.js';
import { closeAboutModal, isAboutOpen, openAboutModal } from '../about-modal.js';

const state = {
    config: {
        lang: 'ja',
        dataUrl: DEFAULT_REPORTS_DATA_URL,
        assetBaseUrl: DEFAULT_REPORTS_ASSET_BASE,
        assetMdBaseUrl: DEFAULT_REPORTS_MD_ASSET_BASE,
    },
    data: {
        reports: [],
        generatedAt: '',
        guidesGeneratedAt: '',
        progressTaxonomy: DEFAULT_PROGRESS_TAXONOMY.map((entry) => ({ ...entry })),
        progressLevelCounts: {},
        activeScenario: null,
        phase8Themes: [],
        phase8GeneratedAt: '',
        reportsReady: false,
        loadError: false,
    },
    ui: {
        tableFilter: 'all',
        quickLinksBound: false,
    },
    modal: {
        mdModalInstance: null,
        mdRequestId: 0,
        activeDomainId: '',
        activeDomainHistoryMode: '',
        pendingDomainId: '',
        pendingDomainHistoryMode: '',
        _isHistorySyncing: false,
        historyEventsBound: false,
        hoverGridEventsBound: false,
        hoverGridEnabled: false,
        // Generic modal & guide history state
        activeGenericModalKey: '',
        activeGenericHistoryMode: '',
        activeGuideKey: '',
        activeGuideHistoryMode: '',
    },
    slide: {
        activeSlideKey: '',
        activeSlideHistoryMode: '',
        _isHistorySyncing: false,
    },
    dom: {
        error: null,
        openStatusBtn: null,
        domainsHeading: null,
        scenarioNote: null,
        levelLegend: null,
        featureCards: null,
        metrics: null,
        domainGrid: null,
        filterGroup: null,
        mdModal: null,
        mdModalTitle: null,
        mdModalMeta: null,
        mdModalContent: null,
        mdOpenPdf: null,
        phase8Heading: null,
        phase8Description: null,
        phase8Grid: null,
    },
    // Opener registries for page-load sync (populated after data loads)
    _modalOpeners: new Map(),
    _slideOpeners: new Map(),
};

let historyController;
let genericHistoryController;
let slideHistoryController;
let modalRouter;
let openDomainModalByIdImpl = () => false;

const modalController = createReportsModalController({
    state,
    getStrings: getReportsStrings,
    setActiveDomainModalState: (...args) => historyController?.setActiveDomainModalState(...args),
    setActiveGuideState: (...args) => genericHistoryController?.setActiveGuideState(...args),
    setActiveGenericModalState: (...args) => genericHistoryController?.setActiveGenericModalState(...args),
    updateGuideHistoryEntry: (...args) => genericHistoryController?.updateGuideHistoryEntry(...args),
    updateGenericHistoryEntry: (...args) => genericHistoryController?.updateGenericHistoryEntry(...args),
});

const renderer = createReportsRenderer({
    state,
    openMarkdownModal: (...args) => modalController.openMarkdownModal(...args),
    openDomainModalById: (...args) => openDomainModalByIdImpl(...args),
    getReportSources: (report) => resolveDomainReportSources(report, {
        lang: state.config.lang,
        assetBaseUrl: state.config.assetBaseUrl,
        assetMdBaseUrl: state.config.assetMdBaseUrl,
    }),
    isReportPendingEnglish: (report) => isDomainReportPendingEnglish(report, { lang: state.config.lang }),
});

const phase8Renderer = createPhase8Renderer({
    openMarkdownModal: (...args) => modalController.openMarkdownModal(...args),
    getLang: () => state.config.lang,
    wrapSlideOpen: (slideKey) => {
        if (!slideHistoryController) return null;
        slideHistoryController.pushSlideHistory(slideKey);
        return slideHistoryController.createSlideOnClose();
    },
});

const synthesisRenderer = createSynthesisRenderer({
    openMarkdownModal: (...args) => modalController.openMarkdownModal(...args),
    getLang: () => state.config.lang,
    wrapSlideOpen: (slideKey) => {
        if (!slideHistoryController) return null;
        slideHistoryController.pushSlideHistory(slideKey);
        return slideHistoryController.createSlideOnClose();
    },
});

const themeVerificationRenderer = createThemeVerificationRenderer({
    openMarkdownModal: (...args) => modalController.openMarkdownModal(...args),
    getLang: () => state.config.lang,
});

historyController = createReportsHistoryController({
    state,
    ensureMdModalInstance: () => modalController.ensureMdModalInstance(),
    isMdModalVisible: () => modalController.isMdModalVisible(),
    openDomainModalById: (...args) => openDomainModalByIdImpl(...args),
});

genericHistoryController = createGenericHistoryController({
    state,
    ensureMdModalInstance: () => modalController.ensureMdModalInstance(),
    isMdModalVisible: () => modalController.isMdModalVisible(),
});

slideHistoryController = createSlideHistoryController({ state });
modalRouter = createModalRouter({
    historyController,
    genericHistoryController,
    slideHistoryController,
    openAbout: (...args) => openAboutModal(...args),
    closeAbout: (...args) => closeAboutModal(...args),
    isAboutOpen: () => isAboutOpen(),
});

// --- Unified event handlers ---

function handleUnifiedMdModalHidden() {
    // _isHistorySyncing means a controller triggered the close (popstate/back)
    if (state.modal._isHistorySyncing) {
        state.modal._isHistorySyncing = false;
        historyController.clearActiveDomainModalState();
        genericHistoryController.clearActiveGuideState();
        genericHistoryController.clearActiveGenericModalState();
        return;
    }

    // Domain takes priority
    if (state.modal.activeDomainId) {
        historyController.handleMdModalHidden();
        return;
    }
    // Guide
    if (state.modal.activeGuideKey) {
        genericHistoryController.handleGuideModalHidden();
        return;
    }
    // Generic modal
    if (state.modal.activeGenericModalKey) {
        genericHistoryController.handleGenericModalHidden();
        return;
    }
}

function handleUnifiedPopState(event) {
    // 30領域調査報告モーダル（?modal=domains, cs#269）: URL からキーが消えたら閉じる
    if (isHoverGridOpen() && genericHistoryController.getModalKeyFromUrl() !== HOVER_GRID_MODAL_KEY) {
        closeHoverGridModal({ updateHistory: false });
    }
    modalRouter.handlePopState(event);
}

function bindUnifiedHistorySyncEvents() {
    if (state.modal.historyEventsBound) return;
    if (state.dom.mdModal) {
        state.dom.mdModal.addEventListener('hidden.bs.modal', handleUnifiedMdModalHidden);
    }
    window.addEventListener('popstate', handleUnifiedPopState);
    state.modal.historyEventsBound = true;
}

// --- Slide opener helpers ---

// --- Modal opener registry builders ---

// 古い版（旧ガイド三本・旧「調査内容」・横断分析・領域横断テーマ・テーマの検証）は、照合し直す前の主張のまま
// だったので、2026-11-10 にしまった（Issue #111・pjdhiro「古いものはアーカイブしてどこかにしまうのは良いと思う。」）。
// 中身は pjdhiro の repo にあり、ここでは読み込みと、URL から開く配線だけを止めている。
// 照合し直した版を作ったら、その版を開く配線を足す。この印を false に戻して古い版を出し直さない。
const OLD_REPORTS_ARCHIVED = true;

function buildModalOpenerRegistry() {
    const openers = state._modalOpeners;
    openers.clear();

    // Guide openers
    (OLD_REPORTS_ARCHIVED ? [] : MODEL_GUIDE_LINKS).forEach((guide) => {
        openers.set('guide-' + guide.key, (historyMode) => {
            const strings = getReportsStrings(state.config.lang);
            const featureText = strings.features[guide.key];
            if (!featureText) return;
            modalController.openMarkdownModal({
                title: featureText.modalTitle || featureText.title,
                sources: resolveLocalizedSources(guide.links, state.config.lang),
                modalContext: { type: 'guide', guideKey: guide.key, historyMode },
            });
        });
    });

    // 30領域調査報告モーダル（cs#269）: ?modal=domains で直接開く
    if (state.modal.hoverGridEnabled) {
        openers.set(HOVER_GRID_MODAL_KEY, (historyMode) => {
            openHoverGridModal({ historyMode, syncUrl: false });
        });
    }

    if (!OLD_REPORTS_ARCHIVED) {
        // Status opener
        openers.set('status', (historyMode) => {
            const strings = getReportsStrings(state.config.lang);
            modalController.openMarkdownModal({
                title: strings.statusReportTitle,
                sources: resolveLocalizedSources(STATUS_REPORT_LINKS, state.config.lang),
                modalContext: { type: 'generic', modalKey: 'status', historyMode },
            });
        });

        // Synthesis opener
        openers.set('synthesis', (historyMode) => {
            const lang = state.config.lang;
            const strings = getReportsStrings(lang);
            const synthStrings = strings.synthesis || {};
            modalController.openMarkdownModal({
                title: synthStrings.reportTitle,
                sources: resolveLocalizedSources(SYNTHESIS_REPORT_LINKS, lang),
                modalContext: { type: 'generic', modalKey: 'synthesis', historyMode },
            });
        });

        // Phase 8 theme openers (built after themes are loaded)
        state.data.phase8Themes.forEach((theme) => {
            if (!theme.slug) return;
            openers.set('phase8-' + theme.slug, (historyMode) => {
                const lang = state.config.lang;
                const useJa = normalizeLang(lang) === 'ja';
                const name = useJa ? (theme.nameJa || theme.nameEn || theme.slug) : (theme.nameEn || theme.nameJa || theme.slug);
                const mdUrl = theme.mdByLang
                    ? (() => {
                        const PJDHIRO_RAW_BASE = 'https://raw.githubusercontent.com/uminomae/pjdhiro/main';
                        const relPath = theme.mdByLang[normalizeLang(lang)] || theme.mdByLang['ja'];
                        return relPath ? `${PJDHIRO_RAW_BASE}/assets/creation/${relPath}` : '';
                    })()
                    : '';
                if (!mdUrl) return;
                const pdfUrl = theme.pdfByLang
                    ? (() => {
                        const PJDHIRO_RAW_BASE = 'https://raw.githubusercontent.com/uminomae/pjdhiro/main';
                        const relPath = theme.pdfByLang[normalizeLang(lang)] || theme.pdfByLang['ja'];
                        return relPath ? `${PJDHIRO_RAW_BASE}/assets/creation/${relPath}` : '';
                    })()
                    : '';
                modalController.openMarkdownModal({
                    title: name,
                    sources: [{ mdUrl, pdfUrl, generatorModel: theme.generatorModel, generated: theme.generated }],
                    modalContext: { type: 'generic', modalKey: 'phase8-' + theme.slug, historyMode },
                });
            });
        });

        // Theme verification openers
        THEME_DATA.forEach((theme) => {
            const normalizedId = theme.id.replace(/\+/g, '');
            openers.set('verify-' + normalizedId, (historyMode) => {
                const lang = state.config.lang;
                const useJa = normalizeLang(lang) === 'ja';
                const name = useJa ? theme.nameJa : (theme.nameEn || theme.nameJa);
                const mdUrl = THEME_VERIFICATION_BASE + '/' + theme.mdFile;
                modalController.openMarkdownModal({
                    title: name,
                    sources: [{ mdUrl }],
                    modalContext: { type: 'generic', modalKey: 'verify-' + normalizedId, historyMode },
                });
            });
        });

        // Integration report opener
        openers.set('verify-integration', (historyMode) => {
            const lang = state.config.lang;
            const useJa = normalizeLang(lang) === 'ja';
            const name = useJa ? INTEGRATION_REPORT.nameJa : (INTEGRATION_REPORT.nameEn || INTEGRATION_REPORT.nameJa);
            const mdUrl = THEME_VERIFICATION_BASE + '/' + INTEGRATION_REPORT.mdFile;
            modalController.openMarkdownModal({
                title: name,
                sources: [{ mdUrl }],
                modalContext: { type: 'generic', modalKey: 'verify-integration', historyMode },
            });
        });
    }
}

function buildSlideOpenerRegistry() {
    const openers = state._slideOpeners;
    openers.clear();

    // 分野のスライド（今までのプレゼン版）は 2026-11-10 に下げたので、開く部品を置かない（#73）。

    if (OLD_REPORTS_ARCHIVED) return;

    // Synthesis slide opener
    openers.set('synthesis', async () => {
        const lang = state.config.lang;
        const sources = resolveLocalizedSources(SYNTHESIS_PRESENTATION_LINKS, lang);
        const source = sources[0];
        if (!source) return;
        const strings = getReportsStrings(lang);
        const title = (strings.synthesis || {}).reportTitle;

        if (source.htmlUrl) {
            try {
                const resp = await fetch(source.htmlUrl, { method: 'HEAD', cache: 'no-store' });
                if (resp.ok) {
                    openRichSlideViewer({ htmlUrl: source.htmlUrl, title, onClose: slideHistoryController.createSlideOnClose() });
                    return;
                }
            } catch { /* fall through */ }
        }
        console.warn('[slide-viewer] rich HTML unavailable for synthesis');
    });

    // Phase 8 theme slide openers
    state.data.phase8Themes.forEach((theme) => {
        if (!theme.slug || !theme.presentationMdByLang) return;
        openers.set('phase8-' + theme.slug, async () => {
            const lang = state.config.lang;
            const PJDHIRO_RAW_BASE = 'https://raw.githubusercontent.com/uminomae/pjdhiro/main';
            const PJDHIRO_PAGES_BASE = 'https://uminomae.github.io/pjdhiro';
            const relPath = theme.presentationMdByLang[normalizeLang(lang)] || theme.presentationMdByLang['ja'];
            if (!relPath) return;
            const mdUrl = `${PJDHIRO_RAW_BASE}/assets/creation/${relPath}`;
            const useJa = normalizeLang(lang) === 'ja';
            const title = useJa ? (theme.nameJa || theme.nameEn || theme.slug) : (theme.nameEn || theme.nameJa || theme.slug);

            // Try rich HTML
            const richHtmlUrl = mdUrl
                .replace(PJDHIRO_RAW_BASE, PJDHIRO_PAGES_BASE)
                .replace(/\/md\/([^/]+)\.md$/, '/html/$1.html');
            if (richHtmlUrl !== mdUrl) {
                try {
                    const resp = await fetch(richHtmlUrl, { method: 'HEAD', cache: 'no-store' });
                    if (resp.ok) {
                        openRichSlideViewer({ htmlUrl: richHtmlUrl, title, onClose: slideHistoryController.createSlideOnClose() });
                        return;
                    }
                } catch { /* fall through */ }
            }

            console.warn('[slide-viewer] rich HTML unavailable for phase8-' + theme.slug);
        });
    });
}

// --- Domain modal opener (unchanged logic) ---

function findReportById(domainId) {
    const normalizedId = normalizeDomainId(domainId);
    if (!normalizedId) return null;
    return state.data.reports.find((report) => normalizeDomainId(report?.id) === normalizedId) || null;
}

openDomainModalByIdImpl = function openDomainModalById(
    domainId,
    {
        historyMode = DOMAIN_HISTORY_MODE_PUSH,
        syncUrl = 'push',
    } = {},
) {
    const normalizedId = normalizeDomainId(domainId);
    const report = findReportById(normalizedId);
    if (!report) return false;

    const sources = resolveDomainReportSources(report, {
        lang: state.config.lang,
        assetBaseUrl: state.config.assetBaseUrl,
        assetMdBaseUrl: state.config.assetMdBaseUrl,
    });
    const pendingEnglish = !sources.length && isDomainReportPendingEnglish(report, { lang: state.config.lang });
    if (!sources.length && !pendingEnglish) return false;

    let resolvedHistoryMode = historyMode === DOMAIN_HISTORY_MODE_INITIAL
        ? DOMAIN_HISTORY_MODE_INITIAL
        : DOMAIN_HISTORY_MODE_PUSH;

    if (syncUrl === 'push') {
        const currentDomainId = historyController.getDomainIdFromUrl();
        const currentHistoryMode = historyController.getDomainHistoryMarker(window.history?.state, currentDomainId)?.mode;
        if (currentDomainId !== normalizedId || currentHistoryMode !== DOMAIN_HISTORY_MODE_PUSH) {
            const didPush = historyController.updateDomainHistoryEntry(normalizedId, {
                method: 'push',
                mode: DOMAIN_HISTORY_MODE_PUSH,
            });
            if (!didPush) {
                historyController.updateDomainHistoryEntry(normalizedId, {
                    method: 'replace',
                    mode: DOMAIN_HISTORY_MODE_INITIAL,
                });
                resolvedHistoryMode = DOMAIN_HISTORY_MODE_INITIAL;
            }
        }
    } else if (syncUrl === 'replace') {
        historyController.updateDomainHistoryEntry(normalizedId, {
            method: 'replace',
            mode: resolvedHistoryMode,
        });
    }

    historyController.clearPendingDomainSync();
    const modalContext = {
        type: 'domain',
        domainId: normalizedId,
        historyMode: resolvedHistoryMode,
    };
    const title = getDomainReportTitle(report, state.config.lang);
    if (pendingEnglish) {
        // 英語の記録がまだ無い分野は、英語で工事中と書き、日本語版へのリンクを添える（#73）。
        modalController.openNoticeModal({
            title,
            html: renderer.buildPendingEnglishHtml(buildJapaneseDomainUrl(normalizedId)),
            modalContext,
        });
        return true;
    }
    modalController.openMarkdownModal({ title, sources, modalContext });
    return true;
};

// --- Hover-grid modal helpers (techo#53) ---

let hoverGridInitialised = false;

// ?modal=domains で開閉を URL と同期する（cs#269）
const HOVER_GRID_MODAL_KEY = 'domains';
let hoverGridHistoryMode = '';

function isHoverGridOpen() {
    const modal = document.getElementById('hover-grid-modal');
    return Boolean(modal) && modal.style.display !== 'none';
}

function openHoverGridModal({ historyMode = 'push', syncUrl = true } = {}) {
    const modal = document.getElementById('hover-grid-modal');
    if (!modal) return;

    if (!isHoverGridOpen()) {
        hoverGridHistoryMode = historyMode === 'initial' ? 'initial' : 'push';
        if (syncUrl && genericHistoryController.getModalKeyFromUrl() !== HOVER_GRID_MODAL_KEY) {
            genericHistoryController.updateGenericHistoryEntry(HOVER_GRID_MODAL_KEY, { method: 'push', mode: 'push' });
        }
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Initialise grid on first open
    if (!hoverGridInitialised) {
        renderer.renderHoverGrid();

        const hoverContainer = document.getElementById('hover-grid-container');
        if (hoverContainer) {
            initHoverGrid(hoverContainer, {
                onExpand: async (cellEl, idx) => {
                    const contentArea = cellEl.querySelector('.hover-grid-cell-content');
                    if (!contentArea || contentArea.dataset.loaded === '1') return;

                    const domainId = cellEl.dataset.domainId;
                    if (!domainId) return;

                    // Show loading indicator
                    contentArea.innerHTML = '<div class="hover-grid-loading"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading...</div>';

                    // Use openDomainModalById for click-through (tap on expanded cell)
                    // 言語の切り替えで中身を捨てて読み直すことがあるので、クリックは一度だけ結ぶ。
                    if (!cellEl.dataset.clickBound) {
                        cellEl.dataset.clickBound = '1';
                        cellEl.addEventListener('click', (event) => {
                            // 工事中の「日本語版を読む」は、窓を開かずにそのまま移る。
                            if (event.target instanceof Element && event.target.closest('a')) return;
                            openDomainModalByIdImpl(domainId, {
                                historyMode: 'push',
                                syncUrl: 'push',
                            });
                        });
                    }

                    // Fetch markdown content inline (reuse modal fetch pattern)
                    try {
                        const report = findReportById(domainId);
                        if (!report) throw new Error('Report not found');

                        const sources = resolveDomainReportSources(report, {
                            lang: state.config.lang,
                            assetBaseUrl: state.config.assetBaseUrl,
                            assetMdBaseUrl: state.config.assetMdBaseUrl,
                        });
                        // 英語の記録がまだ無い分野は、英語で工事中と書く（#73）。開くものが無い分野は空にする。
                        if (!sources.length) {
                            contentArea.innerHTML = isDomainReportPendingEnglish(report, { lang: state.config.lang })
                                ? renderer.buildPendingEnglishHtml(buildJapaneseDomainUrl(report.id))
                                : '';
                            contentArea.dataset.loaded = '1';
                            return;
                        }

                        const { buildMarkdownFetchCandidates, looksLikeHtmlDocument, parseFrontmatter } = await import('./data.js');
                        let raw = '';
                        for (const source of sources) {
                            const candidates = buildMarkdownFetchCandidates(source.mdUrl);
                            for (const url of candidates) {
                                try {
                                    const resp = await fetch(url, { cache: 'no-store' });
                                    if (!resp.ok) continue;
                                    const text = await resp.text();
                                    if (looksLikeHtmlDocument(text)) continue;
                                    raw = text;
                                    break;
                                } catch { /* try next */ }
                            }
                            if (raw) break;
                        }

                        if (!raw) throw new Error('Markdown fetch failed');

                        const { body } = parseFrontmatter(raw);
                        const { marked } = await import('marked');
                        marked.setOptions({ breaks: true, gfm: true });
                        const DOMPurify = (await import('dompurify')).default;
                        const html = DOMPurify.sanitize(marked.parse(body || raw), { FORBID_TAGS: ['a'] });

                        contentArea.innerHTML = '<div class="md-body">' + html + '</div>';
                        contentArea.dataset.loaded = '1';
                    } catch (err) {
                        console.warn('[hover-grid] content load failed:', domainId, err);
                        contentArea.innerHTML = '';
                    }
                },
            });
        }
        hoverGridInitialised = true;
    }
}

function closeHoverGridModal({ updateHistory = true } = {}) {
    const modal = document.getElementById('hover-grid-modal');
    if (!modal) return;
    const wasOpen = isHoverGridOpen();
    modal.style.display = 'none';
    document.body.style.overflow = '';

    const historyMode = hoverGridHistoryMode;
    hoverGridHistoryMode = '';
    if (!wasOpen || !updateHistory) return;
    if (genericHistoryController.getModalKeyFromUrl() !== HOVER_GRID_MODAL_KEY) return;

    // 自分で積んだ履歴なら戻る、初回読み込みで開いたならクエリだけ外す
    if (historyMode === 'push' && typeof window.history?.back === 'function') {
        window.history.back();
        return;
    }
    genericHistoryController.updateGenericHistoryEntry('', { method: 'replace' });
}

function handleHoverGridEsc(modal) {
    return (e) => {
        if (e.key !== 'Escape') return;
        if (modal.style.display === 'none') return;
        if (document.querySelector('[data-role="img-overlay"]')) return;

        e.stopPropagation();

        const detailModal = document.getElementById('reports-md-modal');
        if (detailModal && detailModal.classList.contains('show')) {
            const bsModal = bootstrap.Modal.getInstance(detailModal);
            if (bsModal) bsModal.hide();
            return;
        }

        closeHoverGridModal();
    };
}

function bindHoverGridModalEvents() {
    const modal = document.getElementById('hover-grid-modal');
    if (!modal || state.modal.hoverGridEventsBound) return;
    state.modal.hoverGridEventsBound = true;

    // Close button
    const closeBtn = document.getElementById('hover-grid-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeHoverGridModal());
    }

    // ESC key — capture phase so we intercept before Bootstrap's bubbling handler
    document.addEventListener('keydown', handleHoverGridEsc(modal), true);

    // Background click (but not grid content)
    modal.addEventListener('click', (e) => {
        // Only close if clicking on the modal backdrop itself, not children
        if (e.target === modal) {
            closeHoverGridModal();
        }
    });
}

// --- Exported helpers for renderers ---

// --- Init ---

export async function initReports({
    lang = 'ja',
    dataUrl = DEFAULT_REPORTS_DATA_URL,
    assetBaseUrl = DEFAULT_REPORTS_ASSET_BASE,
    assetMdBaseUrl = DEFAULT_REPORTS_MD_ASSET_BASE,
} = {}) {
    renderer.cacheDom();
    phase8Renderer.cacheDom();
    synthesisRenderer.cacheDom();
    themeVerificationRenderer.cacheDom();
    renderer.bindUiEvents();
    bindUnifiedHistorySyncEvents();

    state.config.lang = normalizeLang(lang);
    state.config.dataUrl = dataUrl;
    state.config.assetBaseUrl = normalizeAssetBaseUrl(assetBaseUrl);
    state.config.assetMdBaseUrl = normalizeAssetBaseUrl(assetMdBaseUrl, DEFAULT_REPORTS_MD_ASSET_BASE);
    state.data.generatedAt = '';
    state.data.reports = [];
    state.data.progressTaxonomy = normalizeProgressTaxonomy([]);
    state.data.progressLevelCounts = countReportsByProgressLevel([]);
    state.data.activeScenario = null;
    state.ui.tableFilter = 'all';
    state.data.loadError = false;
    state.data.reportsReady = false;
    historyController.clearPendingDomainSync();

    renderer.renderReports();

    const guidesDatePromise = OLD_REPORTS_ARCHIVED ? Promise.resolve('') : loadGuidesGeneratedAt(GUIDES_MANIFEST_URL);

    try {
        const loaded = await loadReportsData({
            dataUrl: state.config.dataUrl,
            lang: state.config.lang,
            assetBaseUrl: state.config.assetBaseUrl,
            assetMdBaseUrl: state.config.assetMdBaseUrl,
        });
        state.data.generatedAt = loaded.generatedAt;
        state.data.reports = loaded.reports;
        state.data.progressTaxonomy = loaded.progressTaxonomy;
        state.data.progressLevelCounts = loaded.progressLevelCounts;
        state.data.activeScenario = loaded.activeScenario;
        state.data.loadError = false;
        state.data.reportsReady = true;
        state.data.guidesGeneratedAt = await guidesDatePromise;
    } catch (error) {
        state.data.reports = [];
        state.data.progressTaxonomy = normalizeProgressTaxonomy([]);
        state.data.progressLevelCounts = countReportsByProgressLevel([]);
        state.data.activeScenario = null;
        state.data.loadError = true;
        state.data.reportsReady = false;
        console.warn('[reports] load failed:', error);
    }

    renderer.renderReports();

    // --- Hover grid (techo#53) ---
    // デフォルト有効。安定したら旧グリッド (reports-domain-grid) を削除する。
    // ?grid=legacy で旧グリッドにフォールバック可。
    const hoverGridDisabled = new URLSearchParams(window.location.search).get('grid') === 'legacy';
    if (!hoverGridDisabled && state.data.reportsReady) {
        const domainGridEl = document.getElementById('reports-domain-grid');
        const btnWrap = document.getElementById('reports-hover-grid-btn-wrap');
        const openBtn = document.getElementById('reports-hover-grid-open-btn');

        if (domainGridEl) domainGridEl.style.display = 'none';
        if (btnWrap) btnWrap.style.display = '';

        // Bind modal open/close events
        bindHoverGridModalEvents();
        state.modal.hoverGridEnabled = true;

        if (openBtn) {
            openBtn.addEventListener('click', () => openHoverGridModal());
        }
    }

    // Load Phase 8 cross-domain themes
    try {
        const phase8Data = OLD_REPORTS_ARCHIVED ? { themes: [], generatedAt: '' } : await loadPhase8Themes();
        state.data.phase8Themes = phase8Data.themes;
        state.data.phase8GeneratedAt = phase8Data.generatedAt;
    } catch (error) {
        console.warn('[reports] phase8 themes load failed:', error);
        state.data.phase8Themes = [];
    }
    phase8Renderer.renderThemes(state.data.phase8Themes);

    synthesisRenderer.renderSynthesis();
    themeVerificationRenderer.renderVerification();

    // Build opener registries (needs data to be loaded)
    buildModalOpenerRegistry();
    buildSlideOpenerRegistry();

    modalRouter.hydrateFromLocation({
        hydrateReports: () => {
            if (!state.data.loadError) {
                historyController.syncDomainModalWithUrl({
                    historyState: window.history?.state,
                    fallbackHistoryMode: state.modal.pendingDomainHistoryMode,
                    treatAsInitial: !state.modal.pendingDomainHistoryMode && Boolean(historyController.getDomainIdFromUrl()),
                });
            }

            if (!state.modal.activeDomainId) {
                const guideOpened = genericHistoryController.syncGuideWithUrl({ treatAsInitial: true });
                if (!guideOpened) {
                    genericHistoryController.syncGenericModalWithUrl({ treatAsInitial: true });
                }
            }
        },
        hydrateSlides: () => {
            slideHistoryController.syncSlideWithUrl({ treatAsInitial: true });
        },
    });
}

export function setReportsLanguage(lang) {
    state.config.lang = normalizeLang(lang);
    renderer.renderReports();
    phase8Renderer.renderThemes(state.data.phase8Themes);
    synthesisRenderer.renderSynthesis();
    themeVerificationRenderer.renderVerification();
}

export {
    DEFAULT_PROGRESS_TAXONOMY,
    DEFAULT_REPORTS_ASSET_BASE,
    DEFAULT_REPORTS_DATA_URL,
    DEFAULT_REPORTS_MD_ASSET_BASE,
    GUIDES_MANIFEST_URL,
    PHASE8_THEMES_MANIFEST_URL,
};
