import { normalizeLang } from './data.js';
import { createReportsModalController } from './modal.js';
import { getReportsStrings } from './strings.js';
import { loadReviewedAreas, renderReviewedRecords } from './reviewed-records.js';

// 照合し直した記録（as/evidence/reviewed.json）の一覧と、記録を開くモーダル。
// 旧「調査の現在地」・読者別の解説・分野の報告とスライド・画像カードは、別の公開 repo から読み込んでいたので、
// 2026-11-12 に配線ごと外した（Issue #134）。昔の版は as/archive/ にしまってある。

const state = {
    lang: 'ja',
    mdModalInstance: null,
    mdRequestId: 0,
    dom: {
        mdModal: null,
        mdModalTitle: null,
        mdModalMeta: null,
        mdModalContent: null,
        mdOpenPdf: null,
        mdOpenWiki: null,
    },
};

const modalController = createReportsModalController({
    state,
    getStrings: getReportsStrings,
});

function ensureModalDomCached() {
    if (state.dom.mdModal) return;
    state.dom.mdModal = document.getElementById('reports-md-modal');
    state.dom.mdModalTitle = document.getElementById('reports-md-modal-title');
    state.dom.mdModalMeta = document.getElementById('reports-md-meta');
    state.dom.mdModalContent = document.getElementById('reports-md-content');
    state.dom.mdOpenPdf = document.getElementById('reports-md-open-pdf');
    state.dom.mdOpenWiki = document.getElementById('reports-md-open-wiki');

    if (state.dom.mdOpenPdf && !state.dom.mdOpenPdf.dataset.boundClick) {
        state.dom.mdOpenPdf.addEventListener('click', (event) => {
            if (state.dom.mdOpenPdf.classList.contains('disabled')) {
                event.preventDefault();
            }
        });
        state.dom.mdOpenPdf.dataset.boundClick = '1';
    }
}

function applyModalStaticText() {
    if (!state.dom.mdOpenWiki) return;
    const strings = getReportsStrings(state.lang);
    state.dom.mdOpenWiki.textContent = strings.modalOpenWiki;
    state.dom.mdOpenWiki.setAttribute('aria-label', strings.modalOpenWikiAria);
}

export function setReportsLanguage(lang) {
    state.lang = normalizeLang(lang);
    ensureModalDomCached();
    applyModalStaticText();
}

// 文献レビューで照合し直した記録の一覧（reviewed-records.js）。置き場は data-reviewed-records を持つ要素。
const reviewedState = { areas: [], lang: 'ja' };

function renderAllReviewedRecords() {
    document.querySelectorAll('[data-reviewed-records]').forEach((container) => {
        if (!(container instanceof HTMLElement)) return;
        renderReviewedRecords(container, reviewedState.areas, {
            lang: reviewedState.lang,
            onOpen: ({ mdUrl, title }) => {
                ensureModalDomCached();
                modalController.openMarkdownModal({ mdUrl, title });
            },
        });
    });
}

export async function initReviewedRecords({ lang = document.documentElement.lang || 'ja' } = {}) {
    reviewedState.lang = normalizeLang(lang);
    if (!document.querySelector('[data-reviewed-records]')) return;
    reviewedState.areas = await loadReviewedAreas();
    renderAllReviewedRecords();
}

export function setReviewedRecordsLanguage(lang) {
    reviewedState.lang = normalizeLang(lang);
    if (reviewedState.areas.length) renderAllReviewedRecords();
}
