import { normalizeLang } from '../i18n.js';
import { dict } from '../i18n/dict.js';
import { openRichSlideViewer } from '../slide-viewer.js';
import {
    MODEL_GUIDE_LINKS,
    STATUS_REPORT_LINKS,
    SURVEY_MANIFEST_URL,
    formatReportsScenarioFallbackLabel,
    getDefaultProgressTaxonomyEntry,
    hasText,
    normalizeProgressLevelId,
    resolveLocalizedSources,
    resolveDomainPresentationSources,
} from './data.js';
import { DOMAIN_HISTORY_MODE_PUSH } from './history.js';
import { observeGridItems } from '../reveal-observer.js';

export function getReportsStrings(lang = 'ja') {
    return dict[normalizeLang(lang)]?.reports || dict.ja.reports;
}

export function getDomainReportTitle(report, lang = 'ja') {
    if (!report) return '';
    const useJapanese = normalizeLang(lang) === 'ja';
    const domainLabel = useJapanese
        ? (report.nameJa || report.nameEn)
        : (report.nameEn || report.nameJa);
    return `${report.id} ${domainLabel}`.trim();
}

export function createReportsRenderer({
    state,
    openMarkdownModal,
    openDomainModalById,
    getReportSources,
    wrapSlideOpen,
}) {
    function getReportsScenarioLabel(scenario = state.data.activeScenario) {
        if (!scenario) return '';
        if (normalizeLang(state.config.lang) === 'ja') {
            return scenario.labelJa || scenario.labelEn || formatReportsScenarioFallbackLabel(scenario.name);
        }
        return scenario.labelEn || scenario.labelJa || formatReportsScenarioFallbackLabel(scenario.name);
    }

    function getReportsScenarioDescription(scenario = state.data.activeScenario) {
        if (!scenario) return '';
        if (normalizeLang(state.config.lang) === 'ja') {
            return scenario.descriptionJa || scenario.descriptionEn || '';
        }
        return scenario.descriptionEn || scenario.descriptionJa || '';
    }

    function getProgressTaxonomyEntry(level) {
        const normalizedLevel = normalizeProgressLevelId(level);
        return state.data.progressTaxonomy.find((entry) => entry.id === normalizedLevel)
            || getDefaultProgressTaxonomyEntry(normalizedLevel);
    }

    function getProgressLevelLabel(level) {
        const taxonomyEntry = getProgressTaxonomyEntry(level);
        return normalizeLang(state.config.lang) === 'ja'
            ? (taxonomyEntry.labelJa || taxonomyEntry.labelEn || taxonomyEntry.id)
            : (taxonomyEntry.labelEn || taxonomyEntry.labelJa || taxonomyEntry.id);
    }

    function getProgressLevelDescription(level) {
        const taxonomyEntry = getProgressTaxonomyEntry(level);
        return normalizeLang(state.config.lang) === 'ja'
            ? (taxonomyEntry.descriptionJa || taxonomyEntry.descriptionEn || '')
            : (taxonomyEntry.descriptionEn || taxonomyEntry.descriptionJa || '');
    }

    function formatProgressDescription(level) {
        return getProgressLevelDescription(level);
    }
    function getPresentProgressTaxonomy() {
        return state.data.progressTaxonomy.filter((entry) => (state.data.progressLevelCounts[entry.id] || 0) > 0);
    }

    function buildProgressPaletteMap(presentTaxonomy = getPresentProgressTaxonomy()) {
        const paletteMap = new Map();
        const source = presentTaxonomy.length ? presentTaxonomy : state.data.progressTaxonomy;

        source.forEach((entry, index) => {
            paletteMap.set(entry.id, `is-palette-${(index % 10) + 1}`);
        });

        return paletteMap;
    }

    function getProgressPaletteClass(level, paletteMap) {
        const normalizedLevel = normalizeProgressLevelId(level);
        if (!normalizedLevel) return 'is-palette-1';
        return paletteMap.get(normalizedLevel) || 'is-palette-1';
    }

    function getAvailableFilterKeys() {
        return new Set(['all', ...getPresentProgressTaxonomy().map((entry) => entry.id)]);
    }

    function cacheDom() {
        state.dom.error = document.getElementById('reports-error');
        state.dom.openStatusBtn = document.getElementById('reports-open-status-btn');
        state.dom.domainsHeading = document.getElementById('reports-domains-heading');
        state.dom.scenarioNote = document.getElementById('reports-scenario-note');
        state.dom.levelLegend = document.getElementById('reports-level-legend');
        state.dom.featureCards = document.getElementById('reports-feature-cards');
        state.dom.metrics = document.getElementById('reports-metrics');
        state.dom.domainGrid = document.getElementById('reports-domain-grid');
        state.dom.filterGroup = document.getElementById('reports-table-filters');
        state.dom.mdModal = document.getElementById('reports-md-modal');
        state.dom.mdModalTitle = document.getElementById('reports-md-modal-title');
        state.dom.mdModalMeta = document.getElementById('reports-md-meta');
        state.dom.mdModalContent = document.getElementById('reports-md-content');
        state.dom.mdOpenPdf = document.getElementById('reports-md-open-pdf');
    }

    function setReportsError(message) {
        if (!state.dom.error) return;
        if (message) {
            state.dom.error.textContent = message;
            state.dom.error.classList.remove('d-none');
            return;
        }
        state.dom.error.textContent = '';
        state.dom.error.classList.add('d-none');
    }

    // 進み具合・検証の段階（「多段階検証済」など）は内部連絡に当たるので、公開ページに出さない
    // （pjdhiro 2026-11-09・stance 2-7）。凡例の置き場は空にして隠す。
    function renderLevelLegend() {
        if (!state.dom.levelLegend) return;
        state.dom.levelLegend.textContent = '';
        state.dom.levelLegend.classList.add('d-none');
    }

    function createFilterButton({ filterKey, label, isActive, paletteClass = '' }) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = [
            'btn',
            'btn-outline-light',
            'btn-sm',
            'reports-filter-btn',
            paletteClass,
            isActive ? 'active' : '',
        ].join(' ').trim();
        button.dataset.filter = filterKey;
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        button.textContent = label;
        return button;
    }

    // 段階での絞り込みの釦も出さない（上の凡例と同じ理由）。
    function updateFilterButtons() {
        if (!state.dom.filterGroup) return;
        state.ui.tableFilter = 'all';
        state.dom.filterGroup.innerHTML = '';
        state.dom.filterGroup.classList.remove('d-flex');
        state.dom.filterGroup.classList.add('d-none');
    }

    function applyStaticText() {
        const strings = getReportsStrings(state.config.lang);

        if (state.dom.domainsHeading) state.dom.domainsHeading.textContent = strings.tabDomains;
        if (state.dom.scenarioNote) {
            const scenarioLabel = getReportsScenarioLabel();
            const scenarioDescription = getReportsScenarioDescription();
            if (scenarioLabel) {
                state.dom.scenarioNote.textContent = `${strings.scenarioPrefix}: ${scenarioLabel}`;
                state.dom.scenarioNote.title = scenarioDescription;
                state.dom.scenarioNote.classList.remove('d-none');
            } else {
                state.dom.scenarioNote.textContent = '';
                state.dom.scenarioNote.title = '';
                state.dom.scenarioNote.classList.add('d-none');
            }
        }
        renderLevelLegend();

        if (state.dom.filterGroup) state.dom.filterGroup.setAttribute('aria-label', strings.filterGroupAria);
        if (state.dom.openStatusBtn) state.dom.openStatusBtn.textContent = strings.openStatus;

        updateFilterButtons();
    }

    function renderFeatureCards() {
        if (!state.dom.featureCards) return;

        const strings = getReportsStrings(state.config.lang);
        state.dom.featureCards.innerHTML = '';

        const fragment = document.createDocumentFragment();
        MODEL_GUIDE_LINKS.forEach((guide) => {
            const featureText = strings.features[guide.key];
            if (!featureText) return;

            const col = document.createElement('div');
            col.className = 'col';

            const card = document.createElement('article');
            card.className = 'card kesson-card h-100 reports-feature-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${featureText.title} ${strings.featureRead}`);

            const body = document.createElement('div');
            body.className = 'card-body p-2 p-md-3 d-flex flex-column gap-1';

            const title = document.createElement('h3');
            title.className = 'h6 mb-1 text-light';
            title.textContent = featureText.title;

            const desc = document.createElement('p');
            desc.className = 'small mb-0 reports-feature-description';
            desc.textContent = featureText.description;

            const openCardModal = () => {
                openMarkdownModal({
                    title: featureText.modalTitle || featureText.title,
                    sources: resolveLocalizedSources(guide.links, state.config.lang),
                    modalContext: { type: 'guide', guideKey: guide.key, historyMode: 'push' },
                });
            };

            body.appendChild(title);
            body.appendChild(desc);
            card.appendChild(body);
            card.addEventListener('click', openCardModal);
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openCardModal();
                }
            });

            col.appendChild(card);
            fragment.appendChild(col);
        });

        state.dom.featureCards.appendChild(fragment);
    }

    function createMetricCard(label, value, { paletteClass = '' } = {}) {
        const col = document.createElement('div');
        col.className = 'col-6 col-lg';

        const card = document.createElement('div');
        card.className = [
            'card',
            'report-metric-card',
            'h-100',
            paletteClass ? 'reports-progress-card' : '',
            paletteClass,
        ].join(' ').trim();

        const body = document.createElement('div');
        body.className = 'card-body py-2 px-3';

        const metricLabel = document.createElement('div');
        metricLabel.className = 'report-metric-label text-uppercase small';
        metricLabel.textContent = label;

        const metricValue = document.createElement('div');
        metricValue.className = 'report-metric-value fw-semibold';
        metricValue.textContent = value;

        body.appendChild(metricLabel);
        body.appendChild(metricValue);
        card.appendChild(body);
        col.appendChild(card);
        return col;
    }

    function renderMetrics() {
        if (!state.dom.metrics) return;

        const strings = getReportsStrings(state.config.lang);
        const total = state.data.reports.length;
        const generatedValue = state.data.generatedAt ? state.data.generatedAt.slice(0, 10) : '-';
        state.dom.metrics.innerHTML = '';
        const fragment = document.createDocumentFragment();
        fragment.appendChild(createMetricCard(strings.metricGenerated, generatedValue));
        fragment.appendChild(createMetricCard(strings.metricTotal, String(total)));

        // 進み具合の段階ごとの数は出さない（renderLevelLegend と同じ理由）。

        state.dom.metrics.appendChild(fragment);
    }

    function createDomainGridItem({ report, muted = false, paletteMap }) {
        const strings = getReportsStrings(state.config.lang);
        const useJapanese = normalizeLang(state.config.lang) === 'ja';
        const domainLabel = useJapanese
            ? (report.nameJa || report.nameEn)
            : (report.nameEn || report.nameJa);
        const level = normalizeProgressLevelId(report.progressLevel) || 'not_surveyed';
        const paletteClass = getProgressPaletteClass(level, paletteMap);
        const sources = getReportSources(report);
        const clickable = sources.length > 0 && !muted;
        const col = document.createElement('div');
        col.className = 'col';
        const tile = document.createElement('article');
        const reportTitle = getDomainReportTitle(report, state.config.lang) || `${report.id} ${domainLabel}`;

        if (clickable) {
            tile.setAttribute('role', 'button');
            tile.setAttribute('tabindex', '0');
            tile.addEventListener('click', () => {
                openDomainModalById(report.id, {
                    historyMode: DOMAIN_HISTORY_MODE_PUSH,
                    syncUrl: 'push',
                });
            });
            tile.addEventListener('keydown', (event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                openDomainModalById(report.id, {
                    historyMode: DOMAIN_HISTORY_MODE_PUSH,
                    syncUrl: 'push',
                });
            });
        }

        tile.className = [
            'reports-domain-item',
            'card',
            'h-100',
            'w-100',
            'text-start',
            paletteClass,
            `is-level-${level.replace(/_/g, '-')}`,
            muted ? 'is-filter-muted' : '',
        ].join(' ').trim();
        tile.setAttribute('data-report-level', level);
        tile.setAttribute('aria-label', reportTitle);
        if (!clickable) {
            tile.setAttribute('aria-disabled', 'true');
        }

        const body = document.createElement('div');
        body.className = 'card-body p-2 d-flex flex-column gap-1 h-100 reports-domain-item-body';

        const head = document.createElement('div');
        head.className = 'd-flex flex-wrap align-items-start justify-content-between gap-2 reports-domain-item-head';

        const idNode = document.createElement('span');
        idNode.className = 'reports-domain-item-id';
        idNode.textContent = report.id;

        const nameNode = document.createElement('div');
        nameNode.className = 'reports-domain-item-name';
        nameNode.title = domainLabel;
        nameNode.textContent = domainLabel;

        head.appendChild(idNode);
        body.appendChild(head);
        body.appendChild(nameNode);
        if (report.reviewRecord) {
            body.appendChild(createReviewedChip(report));
        }

        // Presentation buttons
        const presSources = resolveDomainPresentationSources(report, { lang: state.config.lang });
        if (presSources.length > 0) {
            const btnGroup = document.createElement('div');
            btnGroup.className = 'd-flex flex-wrap gap-1 mt-auto';

            const slideBtn = document.createElement('button');
            const slideLabel = getReportsStrings(state.config.lang).phase8Themes.slidesButton;
            slideBtn.type = 'button';
            slideBtn.className = 'reports-slide-btn';
            slideBtn.textContent = slideLabel;
            slideBtn.setAttribute('aria-label', `${domainLabel} ${slideLabel}`);
            slideBtn.addEventListener('click', async (event) => {
                event.stopPropagation();
                const currentSources = resolveDomainPresentationSources(report, { lang: state.config.lang });
                const source = currentSources[0];
                if (!source) return;
                const slideKey = report.id;
                const slideOnClose = typeof wrapSlideOpen === 'function' ? wrapSlideOpen(slideKey) : null;

                // Try rich HTML first
                if (source.htmlUrl) {
                    try {
                        const htmlResp = await fetch(source.htmlUrl, { method: 'HEAD', cache: 'no-store' });
                        if (htmlResp.ok) {
                            openRichSlideViewer({
                                htmlUrl: source.htmlUrl,
                                title: `${report.id} ${domainLabel}`,
                                onClose: slideOnClose,
                            });
                            return;
                        }
                    } catch {
                        // Rich HTML not available, fall through to MD
                    }
                }

                console.warn('[slide-viewer] rich HTML unavailable for', report.id);
            });
            btnGroup.appendChild(slideBtn);

            body.appendChild(btnGroup);
        }

        tile.appendChild(body);
        col.appendChild(tile);

        return col;
    }

    // 一次情報で確かめ直した分野の印（#73）。日本語の画面では記録が先に開く。
    function createReviewedChip(report) {
        const strings = getReportsStrings(state.config.lang);
        const chip = document.createElement('span');
        chip.className = 'reports-reviewed-chip';
        chip.textContent = strings.reviewedChip;
        const reviewed = report?.reviewRecord?.reviewed;
        if (reviewed) {
            chip.title = `${strings.modalReviewed}: ${reviewed}`;
        }
        return chip;
    }

    function renderDomainGrid() {
        if (!state.dom.domainGrid) return;

        const allReports = state.data.reports;
        const paletteMap = buildProgressPaletteMap(getPresentProgressTaxonomy());

        state.dom.domainGrid.innerHTML = '';
        if (!allReports.length) {
            const empty = document.createElement('div');
            empty.className = 'reports-domain-empty col-12 text-body-secondary';
            empty.textContent = getReportsStrings(state.config.lang).empty;
            state.dom.domainGrid.appendChild(empty);
            return;
        }

        const fragment = document.createDocumentFragment();
        allReports.forEach((report) => {
            const muted = state.ui.tableFilter !== 'all' && report.progressLevel !== state.ui.tableFilter;
            fragment.appendChild(createDomainGridItem({ report, muted, paletteMap }));
        });

        state.dom.domainGrid.appendChild(fragment);
        observeGridItems();
    }

    function bindUiEvents() {
        if (state.ui.quickLinksBound) return;

        if (state.dom.openStatusBtn && !state.dom.openStatusBtn.dataset.boundClick) {
            state.dom.openStatusBtn.addEventListener('click', async () => {
                const strings = getReportsStrings(state.config.lang);
                let surveyGenerated = '';
                try {
                    const resp = await fetch(SURVEY_MANIFEST_URL, { cache: 'no-store' });
                    if (resp.ok) {
                        const manifest = await resp.json();
                        surveyGenerated = manifest.generated_at || '';
                    }
                } catch { /* use empty fallback */ }
                const enrichedLinks = {
                    ja: { ...STATUS_REPORT_LINKS.ja, generated: surveyGenerated },
                    en: { ...STATUS_REPORT_LINKS.en, generated: surveyGenerated },
                };
                openMarkdownModal({
                    title: strings.statusReportTitle,
                    sources: resolveLocalizedSources(enrichedLinks, state.config.lang),
                    modalContext: { type: 'generic', modalKey: 'status', historyMode: 'push' },
                });
            });
            state.dom.openStatusBtn.dataset.boundClick = '1';
        }

        if (state.dom.mdOpenPdf && !state.dom.mdOpenPdf.dataset.boundClick) {
            state.dom.mdOpenPdf.addEventListener('click', (event) => {
                if (state.dom.mdOpenPdf?.classList.contains('disabled')) {
                    event.preventDefault();
                }
            });
            state.dom.mdOpenPdf.dataset.boundClick = '1';
        }

        if (state.dom.filterGroup && !state.dom.filterGroup.dataset.boundClick) {
            state.dom.filterGroup.addEventListener('click', (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) return;
                const button = target.closest('button[data-filter]');
                if (!(button instanceof HTMLButtonElement)) return;

                const nextFilter = button.dataset.filter;
                if (!getAvailableFilterKeys().has(nextFilter) || nextFilter === state.ui.tableFilter) return;

                state.ui.tableFilter = nextFilter;
                updateFilterButtons();
                renderDomainGrid();
            });
            state.dom.filterGroup.dataset.boundClick = '1';
        }

        state.ui.quickLinksBound = true;
    }

    function renderHoverGrid() {
        const hoverSection = document.getElementById('hover-grid-modal');
        const hoverContainer = document.getElementById('hover-grid-container');
        if (!hoverSection || !hoverContainer) return;

        const allReports = state.data.reports;
        if (!allReports.length) return;

        const useJapanese = normalizeLang(state.config.lang) === 'ja';
        hoverContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        allReports.forEach((report, idx) => {
            const domainLabel = useJapanese
                ? (report.nameJa || report.nameEn)
                : (report.nameEn || report.nameJa);
            const cell = document.createElement('div');
            cell.className = `hover-grid-cell collapsed hg-color-${idx % 10}`;
            cell.dataset.index = idx;
            cell.dataset.domainId = report.id;

            const idBadge = document.createElement('div');
            idBadge.className = 'hover-grid-cell-id';
            idBadge.textContent = report.id;

            const name = document.createElement('div');
            name.className = 'hover-grid-cell-name';
            name.textContent = domainLabel;

            const contentArea = document.createElement('div');
            contentArea.className = 'hover-grid-cell-content';

            cell.appendChild(idBadge);
            cell.appendChild(name);
            if (report.reviewRecord) {
                cell.appendChild(createReviewedChip(report));
            }
            cell.appendChild(contentArea);
            fragment.appendChild(cell);
        });

        hoverContainer.appendChild(fragment);
    }

    function renderReports() {
        applyStaticText();
        renderFeatureCards();
        // renderMetrics(); // 調査内容以外のメトリクスカードは不要。安定したら削除する
        renderDomainGrid();
        setReportsError(state.data.loadError ? getReportsStrings(state.config.lang).error : '');
    }

    return {
        bindUiEvents,
        cacheDom,
        getStrings: getReportsStrings,
        renderHoverGrid,
        renderReports,
    };
}
