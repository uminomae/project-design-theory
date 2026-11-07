import { renderMarkdown } from '../lib/render-markdown.js';

function renderAbout(aboutBody, markdown) {
    // markdown は外部 fetch 由来。renderMarkdown でサニタイズ済みのため innerHTML 注入は安全。
    aboutBody.innerHTML = renderMarkdown(markdown);

    for (const child of aboutBody.children) {
        child.classList.add('reveal-item');
    }
}

async function fetchTextWithFallback(path, fallbackPath) {
    try {
        const response = await fetch(path);
        const text = response.ok ? await response.text() : '';

        if (text || !fallbackPath) {
            return text;
        }

        const fallbackResponse = await fetch(fallbackPath);
        return fallbackResponse.ok ? await fallbackResponse.text() : '';
    } catch {
        return '';
    }
}

export function createContentLoader({
    aboutBody,
    knowledgeBody,
    knowledgeEntries,
    knowledgePdfLink,
    translate,
}) {
    const aboutCache = new Map();
    const knowledgeCache = new Map();
    let aboutRequestId = 0;
    let knowledgeRequestId = 0;

    function hasKnowledgeEntry(key) {
        return Boolean(knowledgeEntries[key]);
    }

    function updateKnowledgePdfLink(entry, lang) {
        if (entry.pdfUrl) {
            knowledgePdfLink.href = entry.pdfUrl.replace('{lang}', lang);
            knowledgePdfLink.setAttribute('aria-disabled', 'false');
            knowledgePdfLink.textContent = translate('knowledge.pdf.open', lang);
            return;
        }

        knowledgePdfLink.href = '#';
        knowledgePdfLink.setAttribute('aria-disabled', 'true');
        knowledgePdfLink.textContent = translate('knowledge.pdf.pending', lang);
    }

    async function loadAboutContent(lang) {
        aboutRequestId += 1;
        const requestId = aboutRequestId;
        const cached = aboutCache.get(lang);

        if (cached !== undefined) {
            if (requestId !== aboutRequestId) return false;
            renderAbout(aboutBody, cached);
            return true;
        }

        const compiledPath = `content/compiled/about-${lang}.md`;
        const fallbackPath = `content/about-${lang}.md`;
        const markdown = await fetchTextWithFallback(compiledPath, fallbackPath);
        if (markdown) {
            aboutCache.set(lang, markdown);
        }
        if (requestId !== aboutRequestId) return false;
        renderAbout(aboutBody, markdown);
        return true;
    }

    async function loadKnowledgeContent(key, lang) {
        knowledgeRequestId += 1;
        const requestId = knowledgeRequestId;
        const entry = knowledgeEntries[key];

        if (!entry) {
            return false;
        }

        const cacheKey = `${key}:${lang}`;
        let markdown = knowledgeCache.get(cacheKey);

        if (markdown === undefined) {
            const mdPath = entry.mdPath.replace('{lang}', lang);
            const compiledPath = mdPath.replace('content/', 'content/compiled/');
            const fallbackPath = lang === 'ja'
                ? mdPath
                : entry.mdPath.replace('{lang}', 'ja');

            markdown = await fetchTextWithFallback(compiledPath, fallbackPath);
            if (markdown) {
                knowledgeCache.set(cacheKey, markdown);
            }
        }

        if (requestId !== knowledgeRequestId) return false;
        // markdown は外部 fetch 由来。renderMarkdown でサニタイズ済みのため innerHTML 注入は安全。
        knowledgeBody.innerHTML = renderMarkdown(markdown);
        updateKnowledgePdfLink(entry, lang);
        return true;
    }

    return {
        hasKnowledgeEntry,
        loadAboutContent,
        loadKnowledgeContent,
    };
}
