function normalizeLang(lang) {
    return lang === 'en' ? 'en' : 'ja';
}

function syncLangQuery(lang) {
    if (!window.history?.replaceState) return;
    const normalized = normalizeLang(lang);
    const url = new URL(window.location.href);
    if (normalized === 'en') {
        url.searchParams.set('lang', 'en');
    } else {
        url.searchParams.delete('lang');
    }
    window.history.replaceState(window.history.state, '', url.toString());
}

export function detectLang() {
    const raw = new URLSearchParams(window.location.search).get('lang');
    return normalizeLang(raw);
}

export function createI18n({ langButtons, translations, onLanguageChange }) {
    function getCurrentLang() {
        return document.documentElement.lang || 'ja';
    }

    function translate(key, lang = getCurrentLang()) {
        return translations[lang]?.[key] ?? translations.ja?.[key] ?? '';
    }

    function applyTranslations(root = document, lang = getCurrentLang()) {
        for (const element of root.querySelectorAll('[data-i18n-key]')) {
            // translations は開発者管理の静的データ（site-data.mjs）。外部入力を含まないため innerHTML 使用は安全。
            element.innerHTML = translate(element.dataset.i18nKey, lang);
        }

        for (const element of root.querySelectorAll('[data-i18n-aria-label-key]')) {
            element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabelKey, lang));
        }
    }

    async function switchLang(lang) {
        const normalized = normalizeLang(lang);
        document.documentElement.lang = normalized;

        for (const button of langButtons) {
            button.classList.toggle('active', button.dataset.langButton === normalized);
        }

        syncLangQuery(normalized);
        applyTranslations(document, normalized);

        if (onLanguageChange) {
            await onLanguageChange(normalized);
        }
    }

    return {
        applyTranslations,
        getCurrentLang,
        switchLang,
        translate,
    };
}
