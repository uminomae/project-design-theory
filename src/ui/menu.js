function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// メニュー定義の pd 内リンクは公開先の絶対パス（/project-design-theory/…）で書かれている（wiki と共有）。
// siteRoot を渡すと、表示中のページから見たサイトの根に読み替える（ローカル :3004 でも飛べるように）
const SITE_PREFIX = '/project-design-theory/';

function resolveHref(href, siteRoot) {
    if (!siteRoot || !href.startsWith(SITE_PREFIX)) return href;
    return siteRoot + href.slice(SITE_PREFIX.length);
}

export function renderSiteMenu({ menuElement, items, knowledgeEntries, translate, lang, siteRoot }) {
    const parts = [];

    for (const item of items) {
        if (item.type === 'separator') {
            parts.push('<hr>');
            continue;
        }

        if (item.type === 'label') {
            parts.push(
                `<span class="menu-label" data-i18n-key="${escapeHtml(item.labelKey)}">${escapeHtml(translate(item.labelKey, lang))}</span>`,
            );
            continue;
        }

        if (item.type === 'action') {
            parts.push(
                `<a href="#" role="button" data-modal-open="${escapeHtml(item.modalOpen)}" data-i18n-key="${escapeHtml(item.labelKey)}">${escapeHtml(translate(item.labelKey, lang))}</a>`,
            );
            continue;
        }

        const className = item.className ? ` class="${escapeHtml(item.className)}"` : '';
        const dataKnowledge = item.type === 'knowledge-link' ? ` data-knowledge="${escapeHtml(item.key)}"` : '';
        const labelKey = item.type === 'knowledge-link'
            ? knowledgeEntries[item.key].titleKey
            : item.labelKey;

        parts.push(
            `<a href="${escapeHtml(resolveHref(item.href, siteRoot))}"${className}${dataKnowledge} data-i18n-key="${escapeHtml(labelKey)}">${escapeHtml(translate(labelKey, lang))}</a>`,
        );
    }

    menuElement.innerHTML = parts.join('\n');
}

export function createMenuController({ menuElement, toggleButton }) {
    function close() {
        menuElement.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
    }

    function toggle() {
        const isOpen = menuElement.classList.toggle('open');
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    }

    function isOpen() {
        return menuElement.classList.contains('open');
    }

    return {
        close,
        isOpen,
        toggle,
    };
}
