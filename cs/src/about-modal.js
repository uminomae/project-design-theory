import { getCurrentLang, normalizeLang } from './i18n.js';
import { dict } from './i18n/dict.js';
import { ABOUT_QUERY_PARAM, getSearchParams, updateSearchParams } from './modal-router.js';

let overlayEl = null;
let titleEl = null;
let bodyEl = null;
let triggerBtnEl = null;
let closeBtnEl = null;
// 閉じる途中の片付け（transitionend と setTimeout）。開き直したら取り消す（definition-modal.js と同じ）
let pendingFinish = null;

export function initAboutModal() {
  createAboutButton();
  createAboutOverlay();
}

function t(lang) {
  const l = normalizeLang(lang);
  return dict[l].about;
}

function createAboutButton() {
    const overlay = document.getElementById('overlay');
    if (!overlay) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'about-trigger';
    btn.innerHTML = '<span class="about-trigger__letter">i</span>';

  btn.style.marginTop = '0.8rem';

    btn.addEventListener('click', () => openAboutModal());

    overlay.appendChild(btn);
    triggerBtnEl = btn;
    setAboutLanguage(getCurrentLang());
}

function createAboutOverlay() {
  const el = document.createElement('div');
  el.id = 'about-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.tabIndex = -1;

  const glass = document.createElement('div');
  glass.className = 'about-glass';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'about-close';
  closeBtn.textContent = '✕';

  titleEl = document.createElement('h2');
  titleEl.className = 'about-title';

  bodyEl = document.createElement('div');
  bodyEl.className = 'about-body';

  glass.appendChild(closeBtn);
  glass.appendChild(titleEl);
  glass.appendChild(bodyEl);
  el.appendChild(glass);
  document.body.appendChild(el);

  overlayEl = el;
  closeBtnEl = closeBtn;

  closeBtn.addEventListener('click', () => closeAboutModal());
  el.addEventListener('click', (e) => {
    if (e.target === el) closeAboutModal();
  });
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAboutModal();
  });
}

function renderContent(lang) {
  const d = t(lang);
  titleEl.textContent = d.title;
  const paragraphs = d.body;
  bodyEl.innerHTML = '';
  for (const text of paragraphs) {
    if (text.startsWith('__stages__')) {
      const span = document.createElement('span');
      span.className = 'about-stages';
      span.textContent = d.stages;
      bodyEl.appendChild(span);
    } else {
      const p = document.createElement('p');
      p.textContent = text;
      bodyEl.appendChild(p);
    }
  }
}

function cancelPendingFinish() {
  if (!pendingFinish) return;
  pendingFinish.cancel();
  pendingFinish = null;
}

function openAbout() {
  if (!overlayEl) return;
  // 閉じる途中（0.6 秒以内）に開き直すと、閉じる片付けがあとから走り、開いたモーダルを消して
  // 背景がむき出しになる（定義のモーダルで起きた不具合と同じ作り・2026-11-18）。先に取り消す
  cancelPendingFinish();
  const lang = getCurrentLang();
  renderContent(lang);

  overlayEl.classList.add('visible');
  overlayEl.setAttribute('aria-label', t(lang).title);
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlayEl.classList.add('open');
    });
  });

  overlayEl.focus();
}

function closeAbout() {
  if (!overlayEl) return;
  cancelPendingFinish();
  overlayEl.classList.remove('open');

  const glassEl = overlayEl.querySelector('.about-glass');
  let timer = 0;
  const onEnd = (event) => {
    // 幕の色や中のボタンの色の transitionend で早く消さない。枠の透明度が終わるのを待つ
    if (event.target !== glassEl || event.propertyName !== 'opacity') return;
    finish();
  };
  const cancel = () => {
    clearTimeout(timer);
    overlayEl.removeEventListener('transitionend', onEnd);
  };
  const finish = () => {
    cancel();
    pendingFinish = null;
    overlayEl.classList.remove('visible');
    document.body.style.overflow = '';
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish();
    return;
  }
  pendingFinish = { cancel };
  overlayEl.addEventListener('transitionend', onEnd);
  timer = setTimeout(finish, 600);
}

export function isAboutOpen() {
  return Boolean(overlayEl?.classList.contains('visible'));
}

export function openAboutModal({ pushHistory = true } = {}) {
  if (pushHistory && !getSearchParams().has(ABOUT_QUERY_PARAM)) {
    updateSearchParams(
      { about: '', domain: null, guide: null, modal: null },
      { state: { ...(history.state || {}), modal: 'about' } },
    );
  }
  openAbout();
}

export function closeAboutModal({ updateHistory = true } = {}) {
  if (!isAboutOpen()) return;
  closeAbout();

  if (!updateHistory) return;

  if (getSearchParams().has(ABOUT_QUERY_PARAM)) {
    if (history.state?.modal === 'about') {
      history.back();
    } else {
      updateSearchParams({ about: null }, { replace: true, state: history.state || null });
    }
  }
}

export function setAboutLanguage(lang) {
  const aboutStrings = t(lang);
  if (triggerBtnEl) {
    triggerBtnEl.setAttribute('aria-label', aboutStrings.triggerAria);
  }
  if (closeBtnEl) {
    closeBtnEl.setAttribute('aria-label', aboutStrings.closeAria);
  }
  if (overlayEl?.classList.contains('visible')) {
    renderContent(lang);
    overlayEl.setAttribute('aria-label', aboutStrings.title);
  }
}
