import { normalizeLang } from '../i18n.js';

const REPORTS_SCENARIO_BASE = 'assets/reports/scenarios';
const DOMAIN_ID_PATTERN = /^D\d+$/i;

// 30 分野の格子と記録は、この repo の中だけから読む（#134・pjdhiro 2026-11-12「画面から外す。昔の版は archive に写して残すが、画面からは読まない」）。
// 一次情報で確かめ直した分野の一覧（#73）。分野の名前もここに持つ。cs のサイトの中にあり、ページからの相対で読む。
// 今までの目録（pjdhiro の repo の manifests/domains.json）と、旧ガイド・総合報告・テーマ・調査の現在地は cs/archive/creation/ にしまった。
export const REVIEWED_RECORDS_URL = 'evidence/reviewed.json';
export const REVIEWED_RECORDS_BASE = 'evidence/';
export const DEFAULT_REPORTS_DATA_URL = REVIEWED_RECORDS_URL;

// 正本: docs/evidence-metadata-creation.md §2 (v2.0 — Phase ベース, cs#123)
export const DEFAULT_PROGRESS_TAXONOMY = [
    {
        id: 'not_surveyed',
        labelJa: '調査前',
        labelEn: 'Not yet surveyed',
        descriptionJa: 'AI支援調査が未実施',
        descriptionEn: 'No AI-assisted survey conducted yet',
        tone: 'secondary',
        order: 10,
    },
    {
        id: 'initial_scan',
        labelJa: '初期スキャン済',
        labelEn: 'Initial scan',
        descriptionJa: '幅優先スキャンで候補理論を抽出した（Phase 1-2）',
        descriptionEn: 'Candidate theories extracted via breadth-first scan (Phase 1-2)',
        tone: 'warning',
        order: 20,
    },
    {
        id: 'cross_reviewed',
        labelJa: '独立照合済',
        labelEn: 'Cross-reviewed',
        descriptionJa: '複数AIエンジンによる独立レビューと突き合わせを実施した（Phase 3-4）',
        descriptionEn: 'Independent review and cross-check by multiple AI engines (Phase 3-4)',
        tone: 'primary',
        order: 30,
    },
    {
        id: 'deep_investigated',
        labelJa: '多段階検証済',
        labelEn: 'Multi-stage verified',
        descriptionJa: '複数AIエンジンによる論拠監査・構造再読・統合検証を実施した（Phase 5-7）',
        descriptionEn: 'Multi-stage verification by multiple AI engines: audit, structural re-reading, and integration (Phase 5-7)',
        tone: 'primary',
        order: 40,
    },
    {
        id: 'cross_explored',
        labelJa: '領域横断探索済',
        labelEn: 'Cross-domain explored',
        descriptionJa: '領域横断的な構造探索を実施した（Phase 8）',
        descriptionEn: 'Cross-domain structural exploration conducted (Phase 8)',
        tone: 'primary',
        order: 50,
    },
    {
        id: 'human_reviewed',
        labelJa: '人間レビュー済',
        labelEn: 'Human-reviewed',
        descriptionJa: '著者による最終確認を実施した',
        descriptionEn: 'Author final confirmation conducted',
        tone: 'success',
        order: 60,
    },
];

export function hasText(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

export function sanitizeReportsScenarioName(value) {
    if (!hasText(value)) return '';
    return value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '');
}

export function getReportsScenarioName(search = window.location.search) {
    try {
        const params = new URLSearchParams(search);
        return sanitizeReportsScenarioName(params.get('reportsScenario') || params.get('reportsTaxonomyTest'));
    } catch {
        return '';
    }
}

export function formatReportsScenarioFallbackLabel(name) {
    const sanitized = sanitizeReportsScenarioName(name);
    return sanitized || '';
}

export function normalizeDomainId(value) {
    if (!hasText(value)) return '';
    const normalized = value.trim().toUpperCase();
    return DOMAIN_ID_PATTERN.test(normalized) ? normalized : '';
}

export function normalizeProgressLevelId(value) {
    return hasText(value) ? value.trim().toLowerCase() : '';
}

export function slugToTitle(slug) {
    if (typeof slug !== 'string' || !slug.trim()) return '';
    return slug
        .trim()
        .split('-')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function formatProgressLevelFallbackLabel(level) {
    const normalizedLevel = normalizeProgressLevelId(level);
    if (!normalizedLevel) return '';
    return slugToTitle(normalizedLevel.replace(/_/g, '-')) || normalizedLevel;
}

export function getDefaultProgressTaxonomyEntry(level) {
    const normalizedLevel = normalizeProgressLevelId(level);
    const matched = DEFAULT_PROGRESS_TAXONOMY.find((entry) => entry.id === normalizedLevel);
    if (matched) {
        return { ...matched };
    }

    const fallbackLabel = formatProgressLevelFallbackLabel(normalizedLevel);
    return {
        id: normalizedLevel,
        labelJa: fallbackLabel || normalizedLevel,
        labelEn: fallbackLabel || normalizedLevel,
        descriptionJa: '',
        descriptionEn: '',
        tone: 'secondary',
        order: Number.MAX_SAFE_INTEGER,
    };
}

export function normalizeProgressTaxonomy(rawTaxonomy, reports = []) {
    const sourceEntries = Array.isArray(rawTaxonomy) && rawTaxonomy.length
        ? rawTaxonomy
        : DEFAULT_PROGRESS_TAXONOMY;
    const normalized = [];
    const seen = new Set();

    sourceEntries.forEach((entry, index) => {
        const id = normalizeProgressLevelId(entry?.id);
        if (!id || seen.has(id)) return;

        const fallback = getDefaultProgressTaxonomyEntry(id);
        const order = Number(entry?.order);
        normalized.push({
            id,
            labelJa: hasText(entry?.label_ja) ? entry.label_ja.trim() : fallback.labelJa,
            labelEn: hasText(entry?.label_en) ? entry.label_en.trim() : fallback.labelEn,
            descriptionJa: hasText(entry?.description_ja) ? entry.description_ja.trim() : fallback.descriptionJa,
            descriptionEn: hasText(entry?.description_en) ? entry.description_en.trim() : fallback.descriptionEn,
            tone: hasText(entry?.tone) ? entry.tone.trim().toLowerCase() : fallback.tone,
            order: Number.isFinite(order) ? order : (fallback.order + index),
        });
        seen.add(id);
    });

    reports.forEach((report, index) => {
        const id = normalizeProgressLevelId(report?.progressLevel);
        if (!id || seen.has(id)) return;

        const fallback = getDefaultProgressTaxonomyEntry(id);
        normalized.push({
            ...fallback,
            order: fallback.order === Number.MAX_SAFE_INTEGER ? 1000 + index : fallback.order,
        });
        seen.add(id);
    });

    return normalized.sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.id.localeCompare(b.id, 'en');
    });
}

function getManifestProgressTaxonomy(payload) {
    if (!payload || typeof payload !== 'object') return [];
    if (Array.isArray(payload.progress_taxonomy)) return payload.progress_taxonomy;
    if (Array.isArray(payload.progress_levels)) return payload.progress_levels;
    return [];
}

function resolveReportsScenarioUrl(name) {
    const scenarioName = sanitizeReportsScenarioName(name);
    if (!scenarioName) return '';
    return `${REPORTS_SCENARIO_BASE}/${scenarioName}.json`;
}

function mergeProgressTaxonomyEntries(baseEntries = [], overrideEntries = []) {
    const merged = [];
    const indexById = new Map();

    const appendEntry = (entry) => {
        const id = normalizeProgressLevelId(entry?.id);
        if (!id) return;

        const nextEntry = { ...entry, id };
        if (indexById.has(id)) {
            merged[indexById.get(id)] = {
                ...merged[indexById.get(id)],
                ...nextEntry,
                id,
            };
            return;
        }

        indexById.set(id, merged.length);
        merged.push(nextEntry);
    };

    (Array.isArray(baseEntries) ? baseEntries : []).forEach(appendEntry);
    (Array.isArray(overrideEntries) ? overrideEntries : []).forEach(appendEntry);
    return merged;
}

function mergeReportOverride(report, override) {
    if (!report || !override || typeof override !== 'object') return report;

    const nextReport = { ...report };
    Object.entries(override).forEach(([key, value]) => {
        if (value === null || value === undefined) return;
        if ((key === 'md' || key === 'pdf') && typeof value === 'object') {
            nextReport[key] = value;
            return;
        }
        if (typeof value === 'string') {
            const trimmed = value.trim();
            if (!trimmed) return;
            nextReport[key] = trimmed;
            return;
        }
        nextReport[key] = value;
    });
    return nextReport;
}

function applyReportScenarioPayload(payload, scenarioPayload) {
    if (!payload || !scenarioPayload || typeof scenarioPayload !== 'object') {
        return payload;
    }

    const baseReports = Array.isArray(payload?.reports) ? payload.reports : [];
    const reportOverrides = scenarioPayload?.report_overrides && typeof scenarioPayload.report_overrides === 'object'
        ? scenarioPayload.report_overrides
        : {};
    const defaultOverride = reportOverrides.default;
    const nextReports = baseReports.map((report) => {
        const withDefault = mergeReportOverride(report, defaultOverride);
        return mergeReportOverride(withDefault, reportOverrides[report?.id]);
    });

    return {
        ...payload,
        generated_at: hasText(scenarioPayload?.generated_at) ? scenarioPayload.generated_at.trim() : payload?.generated_at,
        progress_taxonomy: mergeProgressTaxonomyEntries(
            getManifestProgressTaxonomy(payload),
            getManifestProgressTaxonomy(scenarioPayload),
        ),
        reports: nextReports,
    };
}

function normalizeReportsScenarioMeta(name, scenarioPayload) {
    if (!hasText(name)) return null;
    const scenarioName = sanitizeReportsScenarioName(name);
    if (!scenarioName) return null;
    return {
        name: scenarioName,
        labelJa: hasText(scenarioPayload?.label_ja) ? scenarioPayload.label_ja.trim() : '',
        labelEn: hasText(scenarioPayload?.label_en) ? scenarioPayload.label_en.trim() : '',
        descriptionJa: hasText(scenarioPayload?.description_ja) ? scenarioPayload.description_ja.trim() : '',
        descriptionEn: hasText(scenarioPayload?.description_en) ? scenarioPayload.description_en.trim() : '',
    };
}

export function formatDate(isoStr) {
    if (!isoStr) return '';
    const match = String(isoStr).match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : String(isoStr);
}

export function parseFrontmatter(text) {
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

export function safeUrl(rawUrl, fallback = '#', baseHref = window.location.href) {
    if (typeof rawUrl !== 'string') return fallback;
    const trimmed = rawUrl.trim();
    if (!trimmed) return fallback;
    try {
        const resolved = new URL(trimmed, baseHref);
        if (resolved.protocol === 'http:' || resolved.protocol === 'https:') {
            return resolved.toString();
        }
    } catch {
        return fallback;
    }
    return fallback;
}

export function normalizePdfBrowserUrl(rawUrl) {
    const resolved = safeUrl(rawUrl, '');
    if (!resolved) return '';

    try {
        const parsed = new URL(resolved);
        if (!/\.pdf(?:$|[?#])/i.test(parsed.pathname)) {
            return resolved;
        }

        if (parsed.hostname === 'raw.githubusercontent.com') {
            const parts = parsed.pathname.split('/').filter(Boolean);
            if (parts.length >= 4) {
                const [owner, repo, _branch, ...restPath] = parts;
                return `https://${owner}.github.io/${repo}/${restPath.join('/')}`;
            }
        }

        if (parsed.hostname === 'github.com') {
            const parts = parsed.pathname.split('/').filter(Boolean);
            if (parts.length >= 5 && parts[2] === 'blob') {
                const [owner, repo, _blob, _branch, ...restPath] = parts;
                return `https://${owner}.github.io/${repo}/${restPath.join('/')}`;
            }
        }

        return resolved;
    } catch {
        return '';
    }
}

async function isPdfReachable(pdfUrl) {
    const normalizedPdfUrl = normalizePdfBrowserUrl(pdfUrl);
    if (!normalizedPdfUrl) return false;

    try {
        const headResponse = await fetch(normalizedPdfUrl, { method: 'HEAD', cache: 'no-store' });
        if (headResponse.ok) return true;
        if (headResponse.status !== 405 && headResponse.status !== 501) {
            return false;
        }
    } catch {
        // Fall through to range request fallback.
    }

    try {
        const rangeResponse = await fetch(normalizedPdfUrl, {
            method: 'GET',
            headers: { Range: 'bytes=0-0' },
            cache: 'no-store',
        });
        return rangeResponse.ok || rangeResponse.status === 206;
    } catch {
        return false;
    }
}

export async function resolveFirstAvailablePdfUrl(sources = []) {
    for (const source of sources) {
        const candidate = normalizePdfBrowserUrl(source?.pdfUrl);
        if (!candidate) continue;
        if (await isPdfReachable(candidate)) {
            return candidate;
        }
    }
    return '';
}

// 記録はこの repo の md だけを読む。今までの pjdhiro の repo の写しへの読み替えは外した（#134）。
export function buildMarkdownFetchCandidates(rawUrl) {
    const primary = safeUrl(rawUrl, '');
    return primary ? [primary] : [];
}

export function looksLikeHtmlDocument(text) {
    if (typeof text !== 'string') return false;
    const sample = text.slice(0, 1024).trimStart().toLowerCase();
    return sample.startsWith('<!doctype html') || sample.startsWith('<html');
}

function normalizeReport(report, index) {
    const id = typeof report?.id === 'string' && report.id.trim()
        ? report.id.trim()
        : `D${String(index + 1).padStart(2, '0')}`;
    const rawSlug = typeof report?.slug === 'string' ? report.slug.trim() : '';
    const nameJa = hasText(report?.name_ja) ? report.name_ja.trim() : (slugToTitle(rawSlug) || id);
    const nameEn = hasText(report?.name_en) ? report.name_en.trim() : (slugToTitle(rawSlug) || nameJa);

    return {
        id,
        slug: rawSlug,
        nameJa,
        nameEn,
        progressLevel: normalizeProgressLevelId(report?.progress_level) || 'not_surveyed',
        generated: hasText(report?.reviewed) ? report.reviewed.trim() : '',
    };
}

function sortReportsById(list) {
    return [...list].sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
}

function dedupeSources(sources = []) {
    const seenMdUrls = new Set();
    const normalized = [];

    sources.forEach((source) => {
        const safeMarkdownUrl = safeUrl(source?.mdUrl, '');
        if (!safeMarkdownUrl || seenMdUrls.has(safeMarkdownUrl)) return;
        seenMdUrls.add(safeMarkdownUrl);
        normalized.push({
            mdUrl: safeMarkdownUrl,
            pdfUrl: normalizePdfBrowserUrl(source?.pdfUrl),
            generatorModel: hasText(source?.generatorModel) ? source.generatorModel.trim() : '',
            generated: hasText(source?.generated) ? source.generated.trim() : '',
            kind: hasText(source?.kind) ? source.kind.trim() : 'report',
        });
    });

    return normalized;
}

export function normalizeModalSources({ mdUrl = '', pdfUrl = '', sources = [] } = {}) {
    const merged = Array.isArray(sources) ? [...sources] : [];
    if (mdUrl) merged.push({ mdUrl, pdfUrl });
    return dedupeSources(merged);
}

// 分野の報告は、一次情報で確かめ直した記録（cs/evidence/evidence-Dxx-*.md）だけを読む（#73）。
// 今までの報告（pjdhiro の repo の assets/creation/domains/ の日英の md・PDF・プレゼン版）は、
// 2026-11-10 に日本語を記録への転送にし、英語版・PDF・プレゼン版を下げた（docs/rules/decisions.md）。
// 英語の画面では、英語の記録（cs/evidence/en/evidence-Dxx-*.md。reviewed.json の行の en に書く）を読む。
// 英語の記録がまだ無い分野は、開くものが無いので空を返し、画面は工事中を出す（isDomainReportPendingEnglish）。
export function resolveDomainReportSources(report, { lang = 'ja' } = {}) {
    const record = report?.reviewRecord;
    const mdUrl = normalizeLang(lang) === 'en' ? record?.mdUrlEn : record?.mdUrl;
    if (!mdUrl) return [];
    return [{
        mdUrl,
        pdfUrl: '',
        generated: record.reviewed || '',
        generatorModel: '',
        kind: 'review',
    }];
}

// 英語の画面で、日本語の記録はあるが英語の記録がまだ無い分野（#73・pjdhiro 2026-11-10「英語で工事中と書くのがいいよ」）。
export function isDomainReportPendingEnglish(report, { lang = 'ja' } = {}) {
    return normalizeLang(lang) === 'en' && Boolean(report?.reviewRecord?.mdUrl) && !report.reviewRecord.mdUrlEn;
}

// 日本語の記録を開く URL（今のページの ?domain=Dxx。lang を外して日本語の画面にする）。
export function buildJapaneseDomainUrl(domainId, baseHref = window.location.href) {
    const url = new URL(baseHref);
    url.search = '';
    url.hash = '';
    url.searchParams.set('domain', normalizeDomainId(domainId));
    return url.href;
}

export function countReportsByProgressLevel(reports = []) {
    return reports.reduce((counts, report) => {
        const level = normalizeProgressLevelId(report?.progressLevel);
        if (!level) return counts;
        counts[level] = (counts[level] || 0) + 1;
        return counts;
    }, {});
}

export function buildReviewedRecords(payload, baseHref = window.location.href) {
    const entries = Array.isArray(payload?.domains) ? payload.domains : [];
    const map = new Map();
    entries.forEach((entry) => {
        const id = normalizeDomainId(entry?.id);
        const file = hasText(entry?.file) ? entry.file.trim() : '';
        if (!id || !file || !/\.md$/i.test(file)) return;
        const mdUrl = safeUrl(`${REVIEWED_RECORDS_BASE}${file}`, '', baseHref);
        if (!mdUrl) return;
        // 英語の記録は en/ に、日本語と同じファイル名で置く（docs/cs-review/README.md「記録の形」）。
        const fileEn = hasText(entry?.en) ? entry.en.trim() : '';
        const mdUrlEn = fileEn === `en/${file}` ? safeUrl(`${REVIEWED_RECORDS_BASE}${fileEn}`, '', baseHref) : '';
        map.set(id, {
            mdUrl,
            mdUrlEn,
            reviewed: hasText(entry?.reviewed) ? entry.reviewed.trim() : '',
        });
    });
    return map;
}

export function attachReviewRecords(reports = [], reviewedMap = new Map()) {
    if (!(reviewedMap instanceof Map) || !reviewedMap.size) return reports;
    return reports.map((report) => {
        const record = reviewedMap.get(normalizeDomainId(report?.id));
        return record ? { ...report, reviewRecord: record } : report;
    });
}

export async function loadReportsData({
    dataUrl = DEFAULT_REPORTS_DATA_URL,
    lang = 'ja',
    search = window.location.search,
} = {}) {
    const response = await fetch(dataUrl, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const reviewedPayload = await response.json();
    // 格子に並べる分野は reviewed.json の行。シナリオ（?reportsScenario=）は reports の形で上書きする。
    let payload = { reports: Array.isArray(reviewedPayload?.domains) ? reviewedPayload.domains : [] };
    let activeScenario = null;
    const scenarioName = getReportsScenarioName(search);
    const scenarioUrl = resolveReportsScenarioUrl(scenarioName);

    if (scenarioUrl) {
        try {
            const scenarioResponse = await fetch(scenarioUrl, { cache: 'no-store' });
            if (!scenarioResponse.ok) {
                throw new Error(`HTTP ${scenarioResponse.status}`);
            }
            const scenarioPayload = await scenarioResponse.json();
            activeScenario = normalizeReportsScenarioMeta(scenarioName, scenarioPayload);
            payload = applyReportScenarioPayload(payload, scenarioPayload);
        } catch (error) {
            console.warn(`[reports] scenario load failed (${scenarioName}):`, error);
        }
    }

    const reviewedMap = buildReviewedRecords(reviewedPayload);
    const reports = attachReviewRecords(sortReportsById(payload.reports.map(normalizeReport)), reviewedMap);
    const progressTaxonomy = normalizeProgressTaxonomy(getManifestProgressTaxonomy(payload), reports);

    return {
        lang: normalizeLang(lang),
        generatedAt: hasText(reviewedPayload?.updated) ? reviewedPayload.updated.trim() : '',
        reports,
        progressTaxonomy,
        progressLevelCounts: countReportsByProgressLevel(reports),
        activeScenario,
    };
}
