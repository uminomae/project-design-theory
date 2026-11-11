import DOMPurify from 'dompurify';
import { detectLang } from './i18n.js';
import { prepareStackedTables } from './stacked-tables.js';

function normalizeLang(lang) {
    return lang === 'en' ? 'en' : 'ja';
}

// 読者別の旧ガイド三本（一般向け・設計者向け・学術版）の md と PDF は、pjdhiro の repo から読んでいた。
// 2026-11-10 に読み込みをやめ（Issue #111）、2026-11-12 に行き先ごと外した（Issue #134）。昔の版は ks/archive/guides/ にある。
// 残すのは、論の下書きを公開ページと同じ見え方で確かめる配線（?guide=<名前>&draft-md=<repo 内の .md>・#216）だけ。

const STRINGS = {
    ja: {
        modalLoading: 'Markdown を読み込み中...',
        modalError: 'Markdown の読み込みに失敗しました。',
        modalOpenPdf: 'PDFを開く',
        modalPdfPending: 'PDF準備中',
        modalClose: '閉じる',
        modalModel: 'モデル',
        modalGenerated: '生成日',
        features: {
            general: {
                title: '一般向け',
                modalTitle: '欠損駆動思考 — 一般向け',
                description: '欠損駆動思考の全体像を短く把握するための解説。',
            },
            designer: {
                title: '設計者向け',
                modalTitle: 'ラベルの下を見る',
                description: '設計判断と運用視点で読む解説。',
            },
            academic: {
                title: '専門家向け',
                modalTitle: '欠損駆動思考 — 学術版',
                description: '論の本文（草案）。見えないものをゼロとする認知と抱持、意識、実存主義と思考方法の三つの視点で書く。', // CHANGED(2026-11-05): #216
            },
        },
    },
    en: {
        modalLoading: 'Loading markdown...',
        modalError: 'Failed to load markdown.',
        modalOpenPdf: 'Open PDF',
        modalPdfPending: 'PDF Pending',
        modalClose: 'Close',
        modalModel: 'Model',
        modalGenerated: 'Generated',
        features: {
            general: {
                title: 'General',
                modalTitle: 'Kesson-Driven Thinking — Overview',
                description: 'A concise overview of the kesson-driven thinking framework.',
            },
            designer: {
                title: 'Designer',
                modalTitle: 'Seeing Beneath the Label',
                description: 'Guide focused on design and implementation decisions.',
            },
            academic: {
                title: 'Expert',
                modalTitle: 'Kesson-Driven Thinking — Academic',
                description: 'Theory comparison and verification-oriented guide.',
            },
        },
    },
};

let markedParser = null;

const state = {
    lang: 'ja',
    mdModalInstance: null,
    mdRequestId: 0,
    markdownCache: new Map(),
    dom: {
        mdModal: null,
        mdModalTitle: null,
        mdModalMeta: null,
        mdModalContent: null,
        mdOpenPdf: null,
        mdCloseBtn: null,
    },
};

function getStrings(lang = 'ja') {
    return STRINGS[normalizeLang(lang)] || STRINGS.ja;
}

async function getMarked() {
    if (!markedParser) {
        const { marked } = await import('marked');
        marked.setOptions({ breaks: true, gfm: true });
        markedParser = marked;
    }
    return markedParser;
}

function parseFrontmatter(text) {
    const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: text.trim() };

    const meta = {};
    match[1].split('\n').forEach((line) => {
        const idx = line.indexOf(':');
        if (idx <= 0) return;
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        meta[key] = val;
    });

    return { meta, body: match[2].trim() };
}

function formatDate(isoStr) {
    if (!isoStr) return '';
    const match = String(isoStr).match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : String(isoStr);
}

function normalizePdfBrowserUrl(rawUrl) {
    if (typeof rawUrl !== 'string' || !rawUrl.trim()) return '';
    try {
        const parsed = new URL(rawUrl);
        if (parsed.hostname === 'raw.githubusercontent.com' && /\.pdf(?:$|[?#])/i.test(parsed.pathname)) {
            const parts = parsed.pathname.split('/').filter(Boolean);
            if (parts.length >= 4) {
                const [owner, repo, _branch, ...restPath] = parts;
                return `https://${owner}.github.io/${repo}/${restPath.join('/')}`;
            }
        }
        return rawUrl;
    } catch {
        return '';
    }
}

function buildMarkdownFetchCandidates(rawUrl) {
    if (typeof rawUrl !== 'string' || !rawUrl.trim()) return [];
    return [rawUrl.trim()];
}

async function fetchMarkdownText(mdUrl) {
    let lastError = null;

    for (const candidateUrl of buildMarkdownFetchCandidates(mdUrl)) {
        try {
            const response = await fetch(candidateUrl, { cache: 'no-store' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.text();
        } catch (error) {
            lastError = error;
        }
    }

    throw (lastError || new Error('No markdown source could be loaded'));
}

function cacheDom() {
    state.dom.mdModal = document.getElementById('guides-md-modal');
    state.dom.mdModalTitle = document.getElementById('guides-md-modal-title');
    state.dom.mdModalMeta = document.getElementById('guides-md-meta');
    state.dom.mdModalContent = document.getElementById('guides-md-content');
    state.dom.mdOpenPdf = document.getElementById('guides-md-open-pdf');
    state.dom.mdCloseBtn = document.getElementById('guides-md-close-btn');
}

function ensureMdModalInstance() {
    if (!state.dom.mdModal || !globalThis.bootstrap?.Modal) return null;
    if (!state.mdModalInstance) {
        state.mdModalInstance = globalThis.bootstrap.Modal.getOrCreateInstance(state.dom.mdModal);
    }
    return state.mdModalInstance;
}

function setModalPdfButton(pdfUrl) {
    if (!state.dom.mdOpenPdf) return;
    const strings = getStrings(state.lang);
    const browserPdfUrl = normalizePdfBrowserUrl(pdfUrl);
    if (browserPdfUrl) {
        state.dom.mdOpenPdf.href = browserPdfUrl;
        state.dom.mdOpenPdf.textContent = strings.modalOpenPdf;
        state.dom.mdOpenPdf.classList.remove('disabled');
        state.dom.mdOpenPdf.setAttribute('aria-disabled', 'false');
    } else {
        state.dom.mdOpenPdf.href = '#';
        state.dom.mdOpenPdf.textContent = strings.modalPdfPending;
        state.dom.mdOpenPdf.classList.add('disabled');
        state.dom.mdOpenPdf.setAttribute('aria-disabled', 'true');
    }
}

function setMarkdownModalLoading({ title, pdfUrl }) {
    const strings = getStrings(state.lang);

    if (state.dom.mdModalTitle) {
        state.dom.mdModalTitle.textContent = title || '';
    }
    if (state.dom.mdModalMeta) {
        state.dom.mdModalMeta.textContent = '';
    }
    if (state.dom.mdModalContent) {
        state.dom.mdModalContent.innerHTML = `
            <div class="d-flex align-items-center gap-2 text-body-secondary">
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span>${strings.modalLoading}</span>
            </div>
        `;
    }
    setModalPdfButton(pdfUrl);

    if (state.dom.mdCloseBtn) {
        state.dom.mdCloseBtn.textContent = strings.modalClose;
    }
}

async function openMarkdownModal({ mdUrl, title = '', pdfUrl = '', cacheKey = '' }) {
    if (!mdUrl) return;

    const modal = ensureMdModalInstance();
    if (!modal) {
        window.open(mdUrl, '_blank', 'noopener');
        return;
    }

    const requestId = ++state.mdRequestId;
    setMarkdownModalLoading({ title, pdfUrl });
    modal.show();

    try {
        const marked = await getMarked();
        const resolvedCacheKey = cacheKey || mdUrl;
        let raw = state.markdownCache.get(resolvedCacheKey);

        if (raw === undefined) {
            raw = await fetchMarkdownText(mdUrl);
            state.markdownCache.set(resolvedCacheKey, raw);
        }

        if (requestId !== state.mdRequestId) return;

        const { meta, body } = parseFrontmatter(raw);
        const html = DOMPurify.sanitize(marked.parse(body || raw));

        setModalPdfButton(pdfUrl);
        if (state.dom.mdModalContent) {
            state.dom.mdModalContent.innerHTML = `
                <div class="md-article">
                    <div class="md-body">${html}</div>
                </div>
            `;
            prepareStackedTables(state.dom.mdModalContent);
        }

        const strings = getStrings(state.lang);
        const metaParts = [];
        if (meta.generator_model) metaParts.push(`${strings.modalModel}: ${meta.generator_model}`);
        if (meta.generated) metaParts.push(`${strings.modalGenerated}: ${formatDate(meta.generated)}`);
        if (state.dom.mdModalMeta) {
            state.dom.mdModalMeta.textContent = metaParts.join(' / ');
        }
    } catch (error) {
        console.warn('[guides] markdown load failed:', error);
        if (requestId !== state.mdRequestId) return;
        const strings = getStrings(state.lang);
        if (state.dom.mdModalMeta) {
            state.dom.mdModalMeta.textContent = '';
        }
        if (state.dom.mdModalContent) {
            state.dom.mdModalContent.innerHTML = `<p class="text-warning-emphasis mb-0">${strings.modalError}</p>`;
        }
        setModalPdfButton(pdfUrl);
    }
}

function render() {
    if (state.dom.mdCloseBtn) {
        state.dom.mdCloseBtn.textContent = getStrings(state.lang).modalClose;
    }
}

export function initGuides({ lang = 'ja' } = {}) {
    cacheDom();
    state.lang = normalizeLang(lang);

    if (state.dom.mdOpenPdf) {
        state.dom.mdOpenPdf.addEventListener('click', (event) => {
            if (state.dom.mdOpenPdf?.classList.contains('disabled')) {
                event.preventDefault();
            }
        });
    }

    render();
}

export function setGuidesLanguage(lang) {
    state.lang = normalizeLang(lang);
    render();
}

// CHANGED(2026-03-25): #169 — Public API to open a guide modal by key (general/designer/academic)
// CHANGED(2026-11-02): #216 — `?draft-md=<repo 内の .md>` で、ガイドの modal に下書きを読み込む。
// 公開ページと同じ見え方で論の下書きを確認するための配線。パラメータが無ければ何も開かない。
// repo 内の相対パスだけ許可する（外部 URL・絶対パス・上位ディレクトリは無視）。
function getDraftMarkdownOverride() {
    const value = new URLSearchParams(window.location.search).get('draft-md');
    if (!value) return '';
    const trimmed = value.trim();
    if (trimmed.includes('..') || !/^[\w-]+(?:\/[\w.-]+)*\.md$/i.test(trimmed)) {
        console.warn('[guides] draft-md ignored (repo 内の相対 .md パスのみ):', value);
        return '';
    }
    return `./${trimmed}`;
}

export function openGuideModal(key) {
    const strings = getStrings(state.lang);
    const featureText = strings.features[key];
    if (!featureText) {
        console.warn('[guides] Unknown guide key:', key);
        return;
    }
    const draftMd = getDraftMarkdownOverride(); // CHANGED(2026-11-02): #216
    // 読者別の旧ガイドはしまってある（ks/archive/guides/）。下書きの指定（draft-md）があるときだけ開く。
    if (!draftMd) {
        console.warn('[guides] 読者別の旧ガイドはしまってあります。下書きを見るときは draft-md を付けます:', key);
        return;
    }
    openMarkdownModal({
        mdUrl: draftMd,
        title: featureText.modalTitle || featureText.title || key,
        pdfUrl: '',
        cacheKey: `draft:${draftMd}`,
    });
}
