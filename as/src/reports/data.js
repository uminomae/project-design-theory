import { normalizeLang } from '../i18n.js';

// 旧「調査の現在地」・読者別の解説三本・分野の報告とスライドは、別の公開 repo から読み込んでいた。
// 2026-11-10 に画面から外し（Issue #111）、2026-11-12 に読み込みの配線ごと外した（Issue #134）。
// 昔の版は as/archive/ にしまってある。ここに残すのは、照合し直した記録（reviewed-records.js）を
// モーダルで開くための小さな道具だけ。

export { normalizeLang };

export function hasText(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

export function formatDate(value) {
    if (!hasText(value)) return '';
    const match = value.trim().match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : value.trim();
}

export function parseFrontmatter(text) {
    const match = String(text || '').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: String(text || '').trim() };

    const meta = {};
    match[1].split('\n').forEach((line) => {
        const index = line.indexOf(':');
        if (index <= 0) return;
        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, '');
        meta[key] = value;
    });

    return {
        meta,
        body: match[2].trim(),
    };
}

export function looksLikeHtmlDocument(text) {
    const sample = String(text || '').trimStart().slice(0, 1024).toLowerCase();
    return sample.startsWith('<!doctype html') || sample.startsWith('<html');
}

export function safeUrl(rawUrl, fallback = '', baseHref = document.baseURI) {
    if (!hasText(rawUrl)) return fallback;
    try {
        return new URL(rawUrl.trim(), baseHref).toString();
    } catch {
        return fallback;
    }
}

export function normalizePdfBrowserUrl(rawUrl) {
    return safeUrl(rawUrl, '');
}

export function normalizeModalSources({
    mdUrl = '',
    pdfUrl = '',
    generatorModel = '',
    generated = '',
    sources = [],
    assetBaseUrl = document.baseURI,
} = {}) {
    const normalized = [];
    const pushSource = (source) => {
        const resolvedMd = safeUrl(source?.mdUrl || source?.md || '', '', assetBaseUrl);
        const resolvedPdf = safeUrl(source?.pdfUrl || source?.pdf || '', '', assetBaseUrl);
        if (!resolvedMd && !resolvedPdf) return;
        normalized.push({
            mdUrl: resolvedMd,
            pdfUrl: normalizePdfBrowserUrl(resolvedPdf),
            generatorModel: hasText(source?.generatorModel) ? source.generatorModel.trim() : '',
            generated: hasText(source?.generated) ? source.generated.trim() : '',
        });
    };

    if (Array.isArray(sources) && sources.length) {
        sources.forEach(pushSource);
    } else {
        pushSource({ mdUrl, pdfUrl, generatorModel, generated });
    }

    return normalized;
}

export async function resolveFirstAvailablePdfUrl(sources = []) {
    const match = sources.find((source) => hasText(source?.pdfUrl));
    return match?.pdfUrl || '';
}
