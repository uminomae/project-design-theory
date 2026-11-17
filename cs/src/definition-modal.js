// definition-modal.js — 「現在の定義を読む」のモーダル。
// 五段階の定義のページ（reader/five-stages.html・英語は five-stages-en.html）を、
// ページを離れずに枠の中で読めるようにする。閉じる：✕・Esc・外側を押す。閉じたら押したボタンへフォーカスを戻す。

import { getCurrentLang, normalizeLang } from './i18n.js';
import { dict } from './i18n/dict.js';

let overlayEl = null;
let glassEl = null;
let titleEl = null;
let closeBtnEl = null;
let newTabEl = null;
let frameEl = null;
let returnFocusEl = null;
let loadedHref = '';

function strings(lang = getCurrentLang()) {
    const l = normalizeLang(lang);
    return dict[l]?.prologue || dict.ja.prologue;
}

function ensureOverlay() {
    if (overlayEl) return;

    overlayEl = document.createElement('div');
    overlayEl.id = 'definition-overlay';
    overlayEl.setAttribute('role', 'dialog');
    overlayEl.setAttribute('aria-modal', 'true');
    overlayEl.setAttribute('aria-labelledby', 'definition-modal-title');

    glassEl = document.createElement('div');
    glassEl.className = 'definition-glass';

    const head = document.createElement('div');
    head.className = 'definition-head';

    titleEl = document.createElement('h2');
    titleEl.id = 'definition-modal-title';
    titleEl.className = 'definition-title';

    newTabEl = document.createElement('a');
    newTabEl.className = 'definition-newtab';
    newTabEl.target = '_blank';
    newTabEl.rel = 'noopener';

    closeBtnEl = document.createElement('button');
    closeBtnEl.type = 'button';
    closeBtnEl.className = 'definition-close';
    closeBtnEl.textContent = '✕';

    head.appendChild(titleEl);
    head.appendChild(newTabEl);
    head.appendChild(closeBtnEl);

    frameEl = document.createElement('iframe');
    frameEl.className = 'definition-frame';
    frameEl.addEventListener('load', onFrameLoad);

    glassEl.appendChild(head);
    glassEl.appendChild(frameEl);
    overlayEl.appendChild(glassEl);
    document.body.appendChild(overlayEl);

    closeBtnEl.addEventListener('click', () => closeDefinitionModal());
    overlayEl.addEventListener('click', (event) => {
        if (event.target === overlayEl) closeDefinitionModal();
    });
    overlayEl.addEventListener('keydown', onKeydown);
}

// 枠の中のページは同じ origin。Esc を拾う。リンクは、定義のページどうし（日本語⇔English）と目次は枠の中、
// サイトの外（GitHub の正本）は別のタブ、それ以外（創造とは・原典の台帳）は枠の外で開く。
function onFrameLoad() {
    let doc = null;
    try {
        doc = frameEl.contentDocument;
    } catch {
        return;
    }
    if (!doc) return;
    doc.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeDefinitionModal();
    });
    doc.querySelectorAll('a[href]').forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (href.startsWith('#') || /^(\.\/)?five-stages(-en)?\.html/.test(href)) return;
        if (/^https?:/.test(href)) {
            a.target = '_blank';
            a.rel = 'noopener';
            return;
        }
        // 「創造とは」へ戻るリンクは、今いるページなので、モーダルを閉じるだけにする
        if (/^\.\.\/(index\.html)?(\?.*)?$/.test(href)) {
            a.addEventListener('click', (event) => {
                event.preventDefault();
                closeDefinitionModal();
            });
            return;
        }
        a.target = '_top';
    });
}

function focusables() {
    return [newTabEl, closeBtnEl, frameEl].filter(Boolean);
}

function onKeydown(event) {
    if (event.key === 'Escape') {
        event.preventDefault();
        closeDefinitionModal();
        return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function applyStrings(lang) {
    const s = strings(lang);
    const href = s.definitionHref || dict.ja.prologue.definitionHref;
    titleEl.textContent = s.definitionModalTitle || s.definitionLink;
    newTabEl.textContent = s.definitionOpenNewTab || '';
    newTabEl.href = href;
    closeBtnEl.setAttribute('aria-label', s.definitionCloseAria || dict.ja.prologue.definitionCloseAria);
    frameEl.title = s.definitionModalTitle || s.definitionLink;
    if (loadedHref !== href) {
        loadedHref = href;
        frameEl.src = href;
    }
}

export function isDefinitionModalOpen() {
    return Boolean(overlayEl?.classList.contains('visible'));
}

export function openDefinitionModal(triggerEl = null) {
    ensureOverlay();
    returnFocusEl = triggerEl || document.activeElement;
    applyStrings(getCurrentLang());

    overlayEl.classList.add('visible');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => overlayEl.classList.add('open'));
    });
    closeBtnEl.focus();
}

export function closeDefinitionModal() {
    if (!isDefinitionModalOpen()) return;
    overlayEl.classList.remove('open');
    let done = false;
    const finish = () => {
        if (done) return;
        done = true;
        overlayEl.classList.remove('visible');
        document.body.style.overflow = '';
        if (returnFocusEl && typeof returnFocusEl.focus === 'function') {
            returnFocusEl.focus({ preventScroll: true });
        }
        returnFocusEl = null;
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finish();
    } else {
        overlayEl.addEventListener('transitionend', finish, { once: true });
        setTimeout(finish, 450);
    }
}

export function setDefinitionModalLanguage(lang) {
    if (!overlayEl) return;
    applyStrings(lang);
}
