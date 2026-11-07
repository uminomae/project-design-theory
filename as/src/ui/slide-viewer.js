let overlayNode = null;
let slidesState = [];
let currentSlideIndex = 0;
let previousBodyOverflow = '';
let onCloseCallback = null;
let richState = null;
let narrowQuery = null;

// 狭い幅（スマートフォンの縦向き）では、スライドを 16:9 の枠に縮めず、縦に並べた読み物にする（#63-2）。
const NARROW_SLIDE_QUERY = '(max-width: 575.98px)';
const RICH_NAV_HEIGHT = '3rem';

// スライドの HTML は pjdhiro の repo にあり、as からは変えられない。ビューアの側で、取ってきた HTML に
// 組み方だけを足す。中身（文と図）は変えない。
// 広い幅：下の Prev / Next の帯にスライドの下端が潜らないよう、デッキの高さから帯の分を引く。
// 帯に潜らないときは、今までと同じ大きさ（92vw と 88vh の小さいほう）のまま。
const RICH_WIDE_CSS = `
  .deck { height: calc(100vh - ${RICH_NAV_HEIGHT}); }
  .slide-inner { width: min(92vw, calc(88vh * 16 / 9), calc((100vh - ${RICH_NAV_HEIGHT} - 0.5rem) * 16 / 9)); }
`;
// 狭い幅：全部のスライドを縦に並べ、読める文字の大きさにする。Prev / Next の帯は使わない。
const RICH_VERTICAL_CSS = `
  html, body { height: auto; min-height: 100%; overflow-x: hidden; overflow-y: auto; }
  .deck { width: auto; height: auto; overflow: visible; display: flex; flex-direction: column; gap: 14px; padding: 12px 10px 28px; }
  .slide { position: static; inset: auto; display: block; opacity: 1; visibility: visible; transition: none; }
  .slide-inner { width: 100%; aspect-ratio: auto; box-shadow: none; }
  .slide-content { height: auto; padding: 1.25rem 1.1rem 1.1rem; }
  .layout-title .slide-content { min-height: 14rem; }
  h1, .layout-title h1 { font-size: 1.6rem; max-width: none; }
  h2 { font-size: 1.2rem; }
  h3 { font-size: 1rem; }
  p, .layout-title .subtitle { font-size: 0.95rem; max-width: none; }
  ul li { font-size: 0.92rem; }
  .list--small li { font-size: 0.8rem; }
  .cite { font-size: 0.72rem; }
  .domain-tag, .layout-title .domain-tag { font-size: 0.75rem; }
  .metric-value { font-size: 1.8rem; }
  .metric-label { font-size: 0.75rem; }
  .metrics-grid, .layout-split .split-col { grid-template-columns: 1fr; }
  .slide [style*="font-size"] { font-size: 0.86rem !important; }
  .slide .animate-in { animation: none !important; }
  .nav-bar, .progress-bar { display: none !important; }
`;

function getOverlayPart(selector) {
    return overlayNode ? overlayNode.querySelector(selector) : null;
}

function setBodyScrollLock(locked) {
    if (!document?.body) return;
    if (locked) {
        previousBodyOverflow = document.body.style.overflow || '';
        document.body.style.overflow = 'hidden';
        return;
    }
    document.body.style.overflow = previousBodyOverflow;
    previousBodyOverflow = '';
}

function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function requestElementFullscreen(element) {
    if (!element) return Promise.reject(new Error('missing fullscreen target'));
    if (typeof element.requestFullscreen === 'function') {
        return element.requestFullscreen();
    }
    if (typeof element.webkitRequestFullscreen === 'function') {
        element.webkitRequestFullscreen();
        return Promise.resolve();
    }
    return Promise.reject(new Error('fullscreen unsupported'));
}

function exitFullscreenMode() {
    if (typeof document.exitFullscreen === 'function') {
        return document.exitFullscreen();
    }
    if (typeof document.webkitExitFullscreen === 'function') {
        document.webkitExitFullscreen();
    }
    return Promise.resolve();
}

function isOverlayFullscreen() {
    return getFullscreenElement() === overlayNode;
}

function updateFullscreenUi() {
    const button = getOverlayPart('.slide-viewer-fullscreen');
    if (!button) return;

    const supported = Boolean(
        overlayNode
        && (typeof overlayNode.requestFullscreen === 'function'
            || typeof overlayNode.webkitRequestFullscreen === 'function')
    );
    if (!supported) {
        button.hidden = true;
        return;
    }

    button.hidden = false;
    const active = isOverlayFullscreen();
    button.textContent = active ? '\u2922' : '\u26F6';
    button.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Enter fullscreen');
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
}

async function toggleFullscreen() {
    if (!overlayNode) return;

    try {
        if (isOverlayFullscreen()) {
            await exitFullscreenMode();
        } else {
            await requestElementFullscreen(overlayNode);
        }
    } catch {
        // Fullscreen is best-effort. Keep the viewer usable even if the API fails.
    } finally {
        updateFullscreenUi();
    }
}

function updateSlideUi(title = '') {
    if (!overlayNode || !slidesState.length) return;

    const titleNode = getOverlayPart('.slide-viewer-title');
    const countNode = getOverlayPart('.slide-viewer-count');
    const prevButton = getOverlayPart('.slide-viewer-nav-prev');
    const nextButton = getOverlayPart('.slide-viewer-nav-next');

    slidesState.forEach((page, index) => {
        const active = index === currentSlideIndex;
        page.classList.toggle('is-active', active);
        page.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    if (titleNode) {
        titleNode.textContent = title;
    }
    if (countNode) {
        countNode.textContent = `${currentSlideIndex + 1} / ${slidesState.length}`;
    }
    if (prevButton) {
        prevButton.disabled = currentSlideIndex === 0;
    }
    if (nextButton) {
        nextButton.disabled = currentSlideIndex === slidesState.length - 1;
    }
}

function moveSlide(step) {
    if (!slidesState.length) return;
    const nextIndex = Math.min(slidesState.length - 1, Math.max(0, currentSlideIndex + step));
    if (nextIndex === currentSlideIndex) return;
    currentSlideIndex = nextIndex;
    updateSlideUi(getOverlayPart('.slide-viewer-title')?.textContent || '');
}

function createOverlay() {
    const node = document.createElement('div');
    node.id = 'slide-viewer-overlay';
    node.setAttribute('role', 'dialog');
    node.setAttribute('aria-modal', 'true');
    node.innerHTML = `
        <div class="slide-viewer-shell">
            <button class="slide-viewer-close" aria-label="Close slides">&times;</button>
            <button class="slide-viewer-fullscreen" aria-label="Enter fullscreen" aria-pressed="false">\u26F6</button>
            <div class="slide-viewer-frame">
                <div class="slide-viewer-stage"></div>
                <div class="slide-viewer-loading" role="status" aria-live="polite" hidden></div>
            </div>
            <div class="slide-viewer-toolbar">
                <button class="slide-viewer-nav slide-viewer-nav-prev" aria-label="Previous slide">Prev</button>
                <div class="slide-viewer-meta">
                    <div class="slide-viewer-title"></div>
                    <div class="slide-viewer-count"></div>
                </div>
                <button class="slide-viewer-nav slide-viewer-nav-next" aria-label="Next slide">Next</button>
            </div>
        </div>
    `;

    node.querySelector('.slide-viewer-close').addEventListener('click', closeSlideViewer);
    node.querySelector('.slide-viewer-fullscreen').addEventListener('click', () => {
        toggleFullscreen();
    });
    node.querySelector('.slide-viewer-nav-prev').addEventListener('click', () => moveSlide(-1));
    node.querySelector('.slide-viewer-nav-next').addEventListener('click', () => moveSlide(1));
    node.addEventListener('click', (event) => {
        if (event.target === node) {
            closeSlideViewer();
        }
    });

    // ESC handler for non-iframe cases (MD legacy slides, future extensions).
    // NOTE: This does NOT cover iframe-focused state -- iframe has
    // its own ESC handler injected in openRichSlideViewer().
    // Do NOT remove during refactoring.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && node.classList.contains('visible')) {
            event.stopPropagation();
            closeSlideViewer();
        }
    }, true);

    // Cross-origin ESC fallback: rich HTML slides post a message
    // when ESC is pressed inside them. This covers file:// -> https:// cases
    // where contentDocument is inaccessible.
    // Do NOT remove during refactoring.
    window.addEventListener('message', (event) => {
        if (event.data?.type === 'slide-escape' && node.classList.contains('visible')) {
            closeSlideViewer();
        }
    });
    document.addEventListener('fullscreenchange', updateFullscreenUi);
    document.addEventListener('webkitfullscreenchange', updateFullscreenUi);

    document.body.appendChild(node);
    updateFullscreenUi();
    return node;
}

function onKeyDown(event) {
    // ESC is handled by the capture-phase handler in createOverlay().
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        moveSlide(-1);
        return;
    }
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        moveSlide(1);
    }
}


export function closeSlideViewer() {
    window.removeEventListener('keydown', onKeyDown);
    if (isOverlayFullscreen()) {
        void exitFullscreenMode();
    }
    setBodyScrollLock(false);

    if (narrowQuery) {
        narrowQuery.removeEventListener('change', onNarrowChange);
        narrowQuery = null;
    }
    richState = null;

    if (overlayNode) {
        overlayNode.classList.remove('visible', 'is-vertical');
        setLoading(false);
        const stage = getOverlayPart('.slide-viewer-stage');
        if (stage) {
            stage.innerHTML = '';
        }
        // Restore toolbar visibility when closing rich mode
        const toolbar = getOverlayPart('.slide-viewer-toolbar');
        if (toolbar) {
            toolbar.style.display = '';
        }
    }

    slidesState = [];
    currentSlideIndex = 0;
    updateFullscreenUi();

    if (onCloseCallback) {
        const cb = onCloseCallback;
        onCloseCallback = null;
        cb();
    }
}

function setLoading(loading) {
    const node = getOverlayPart('.slide-viewer-loading');
    if (!node) return;
    if (loading) {
        const lang = (document.documentElement.lang || 'ja').toLowerCase();
        node.textContent = lang.startsWith('en') ? 'Loading slides…' : 'スライドを読み込み中…';
        node.hidden = false;
    } else {
        node.hidden = true;
    }
    overlayNode?.classList.toggle('is-loading', loading);
}

function isNarrowViewport() {
    return typeof window.matchMedia === 'function' && window.matchMedia(NARROW_SLIDE_QUERY).matches;
}

function escapeAttribute(value) {
    return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/**
 * 取ってきたスライドの HTML に、相対パスの基点と、幅に合わせた組み方を足す。
 * スライドの文と図には手を入れない。
 */
export function buildRichSlideDocument(html, { baseUrl = '', vertical = false } = {}) {
    const css = vertical ? RICH_VERTICAL_CSS : RICH_WIDE_CSS;
    const injected = `${baseUrl ? `<base href="${escapeAttribute(baseUrl)}">` : ''}`
        + `<style data-as-slide-viewer="${vertical ? 'vertical' : 'wide'}">${css}</style>`;
    const source = String(html || '');
    if (/<\/head>/i.test(source)) {
        return source.replace(/<\/head>/i, `${injected}</head>`);
    }
    return `${injected}${source}`;
}

function attachIframeEscape(iframe) {
    // ESC handler: inject into iframe's contentDocument after load.
    // IMPORTANT: iframe is a separate browsing context -- keydown events
    // inside iframe do NOT reach the parent document (not even in capture
    // phase). We must register directly on iframe.contentDocument.
    // Same-origin only; cross-origin silently falls back to close button.
    // Do NOT remove this handler during refactoring.
    try {
        iframe.contentDocument.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSlideViewer();
            }
        });
    } catch (_) {
        // Cross-origin (e.g. file:// opening https:// iframe):
        // contentDocument is inaccessible. Use postMessage fallback.
        // The rich HTML slides call parent.postMessage({type:'slide-escape'})
        // when ESC is pressed inside them.
        console.warn('[slide-viewer] cross-origin iframe -- ESC uses postMessage fallback');
    }
}

function revealAllSlides(iframe) {
    // 縦に並べたときは、どのスライドも読み上げの対象にする（デッキの script は今の 1 枚以外を aria-hidden にする）。
    try {
        iframe.contentDocument.querySelectorAll('.slide[aria-hidden]').forEach((slide) => {
            slide.removeAttribute('aria-hidden');
        });
    } catch (_) {
        // cross-origin: nothing to do
    }
}

function renderRichIframe() {
    if (!richState || !overlayNode) return;
    const stage = getOverlayPart('.slide-viewer-stage');
    if (!stage) return;

    const vertical = Boolean(richState.html) && isNarrowViewport();
    overlayNode.classList.toggle('is-vertical', vertical);
    stage.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.title = richState.title || 'Slides';
    iframe.setAttribute('allowfullscreen', '');
    iframe.addEventListener('load', () => {
        if (!richState || !iframe.isConnected) return;
        attachIframeEscape(iframe);
        if (vertical) revealAllSlides(iframe);
        setLoading(false);
    });
    if (richState.html) {
        iframe.srcdoc = buildRichSlideDocument(richState.html, {
            baseUrl: richState.htmlUrl,
            vertical,
        });
    } else {
        // HTML を取ってこられなかったときは、今までどおり URL で開く（組み方は足せない）。
        iframe.src = richState.htmlUrl;
    }
    setLoading(true);
    stage.appendChild(iframe);
}

function onNarrowChange() {
    if (!richState?.html) return;
    renderRichIframe();
}

/**
 * Open a pre-generated rich HTML slide deck in the viewer modal.
 *
 * The rich HTML is self-contained (CSS + JS inlined) and has its own
 * navigation, so we display it via iframe and hide the parent toolbar.
 * The HTML is fetched and shown through srcdoc with a small layout stylesheet
 * added (wide: keep the slide above its nav bar / narrow: stack slides vertically).
 * If the fetch fails, the iframe falls back to loading htmlUrl directly.
 *
 * @param {Object} options
 * @param {string} options.htmlUrl - URL of the rich HTML slide file
 * @param {string} [options.title] - Title for the overlay aria-label
 */
export async function openRichSlideViewer({ htmlUrl, title = '', onClose = null }) {
    if (!htmlUrl) return;

    try {
        onCloseCallback = typeof onClose === 'function' ? onClose : null;

        if (!overlayNode) {
            overlayNode = createOverlay();
        }

        const stage = getOverlayPart('.slide-viewer-stage');
        if (!stage) return;

        stage.innerHTML = '';
        slidesState = [];

        // Hide parent toolbar -- the rich HTML has its own nav
        const toolbar = getOverlayPart('.slide-viewer-toolbar');
        if (toolbar) {
            toolbar.style.display = 'none';
        }

        const state = { htmlUrl, title, html: '' };
        richState = state;

        overlayNode.classList.add('visible');
        overlayNode.setAttribute('aria-label', title || 'Rich Slides');
        setBodyScrollLock(true);
        updateFullscreenUi();
        // 取ってくるあいだも、真っ黒のままにせず読み込み中と出す。
        setLoading(true);

        try {
            const response = await fetch(htmlUrl, { cache: 'no-store' });
            if (!response.ok) {
                // スライドが無い（404 など）。開いたままにせず閉じる。
                if (richState === state) {
                    console.warn('[slide-viewer] rich HTML slide unavailable:', htmlUrl, response.status);
                    closeSlideViewer();
                }
                return;
            }
            state.html = await response.text();
        } catch {
            // 取れなければ URL で開く
        }
        // 取ってくるあいだに閉じられた・別のスライドが開かれたときは何もしない
        if (richState !== state) return;

        if (narrowQuery) {
            narrowQuery.removeEventListener('change', onNarrowChange);
            narrowQuery = null;
        }
        if (typeof window.matchMedia === 'function') {
            narrowQuery = window.matchMedia(NARROW_SLIDE_QUERY);
            narrowQuery.addEventListener('change', onNarrowChange);
        }
        renderRichIframe();
    } catch (err) {
        console.error('[slide-viewer] rich slide ERROR:', err);
    }
}
