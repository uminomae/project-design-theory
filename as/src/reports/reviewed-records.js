// 文献レビュー（#95）で原典から照合し直した領域の記録の一覧。as/evidence/reviewed.json を読み、
// 記録の名前と一行の説明を並べ、押すと記録（as/evidence/evidence-Axx-*.md）を調査の報告と同じ窓で開く。
// 形の元は cs の reviewed.json（cs/src/reports/data.js の loadReviewedRecords）。cs は分野のカードに記録を付けるが、
// as の今までの調査の一覧は番号の振り方が違う（今までの A01 は生存-信頼軸）ので、カードには付けず、別の一覧にする。
// 画面には領域の記号（A01 など）を出さない（公開文に記号を出さない決まり）。
//
// 置き場は HTML の側で決める：data-reviewed-records を持つ要素の中に一覧を描く。data-lang があれば
// その言語で、無ければページの言語で描く。いくつ置いてもよい。

import { normalizeLang } from '../i18n.js';

export const REVIEWED_RECORDS_URL = 'evidence/reviewed.json';

const RECORD_FILE = /^evidence-A\d\d-[a-z0-9-]+\.md$/;

const STRINGS = {
    ja: { reviewed: '照合', inJapanese: '' },
    en: { reviewed: 'reviewed', inJapanese: ' (in Japanese)' },
};

const hasText = (value) => typeof value === 'string' && value.trim().length > 0;

// reviewed.json の中身を、画面で使う形にそろえる。記録の URL は reviewed.json の隣（jsonUrl から解く）。
// 形の合わない行は落とす（点検は scripts/check-as-evidence.mjs）。
export function normalizeReviewedAreas(payload, jsonUrl = 'http://localhost/as/evidence/reviewed.json') {
    const entries = Array.isArray(payload?.areas) ? payload.areas : [];
    const out = [];
    for (const entry of entries) {
        const id = hasText(entry?.id) ? entry.id.trim().toUpperCase() : '';
        const file = hasText(entry?.file) ? entry.file.trim() : '';
        if (!/^A\d\d$/.test(id) || !RECORD_FILE.test(file) || !file.startsWith(`evidence-${id}-`)) continue;
        if (!hasText(entry?.name_ja)) continue;
        let mdUrl = '';
        try {
            mdUrl = new URL(file, jsonUrl).toString();
        } catch {
            continue;
        }
        out.push({
            id,
            mdUrl,
            reviewed: hasText(entry?.reviewed) ? entry.reviewed.trim() : '',
            name: { ja: entry.name_ja.trim(), en: hasText(entry?.name_en) ? entry.name_en.trim() : entry.name_ja.trim() },
            summary: {
                ja: hasText(entry?.summary_ja) ? entry.summary_ja.trim() : '',
                en: hasText(entry?.summary_en) ? entry.summary_en.trim() : '',
            },
        });
    }
    return out.sort((a, b) => a.id.localeCompare(b.id));
}

// 一覧の一行ずつの文。言語で題と説明を選ぶ。英語の表示では、記録が日本語であることを添える。
export function reviewedRecordItems(areas = [], lang = 'ja') {
    const l = normalizeLang(lang);
    const s = STRINGS[l] || STRINGS.ja;
    return areas.map((area) => ({
        mdUrl: area.mdUrl,
        title: `${area.name[l] || area.name.ja}${s.inJapanese}`,
        modalTitle: area.name[l] || area.name.ja,
        summary: area.summary[l] || '',
        date: area.reviewed,
        dateLabel: area.reviewed ? `${s.reviewed} ${area.reviewed}` : '',
    }));
}

export async function loadReviewedAreas(url = REVIEWED_RECORDS_URL, { baseHref = globalThis.location?.href, fetchImpl = globalThis.fetch } = {}) {
    try {
        const resolved = new URL(url, baseHref).toString();
        const response = await fetchImpl(resolved, { cache: 'no-store' });
        if (!response.ok) return [];
        return normalizeReviewedAreas(await response.json(), resolved);
    } catch {
        return [];
    }
}

// 一覧を描く。onOpen({ mdUrl, title }) で記録を開く。記録が無ければ置き場を隠す。
export function renderReviewedRecords(container, areas, { lang = 'ja', onOpen } = {}) {
    if (!container) return;
    const doc = container.ownerDocument;
    const items = reviewedRecordItems(areas, container.dataset.lang || lang);
    container.replaceChildren();
    container.hidden = items.length === 0;
    if (!items.length) return;
    const list = doc.createElement('ul');
    list.className = 'reviewed-records-list';
    for (const item of items) {
        const li = doc.createElement('li');
        li.className = 'reviewed-records-item';
        const link = doc.createElement('a');
        link.className = 'reviewed-records-link';
        link.href = item.mdUrl;
        link.textContent = item.title;
        link.addEventListener('click', (event) => {
            if (typeof onOpen !== 'function') return;
            event.preventDefault();
            onOpen({ mdUrl: item.mdUrl, title: item.modalTitle });
        });
        li.append(link);
        if (item.summary || item.dateLabel) {
            const meta = doc.createElement('span');
            meta.className = 'reviewed-records-meta';
            meta.textContent = [item.summary, item.dateLabel].filter(Boolean).join(' · ');
            li.append(meta);
        }
        list.append(li);
    }
    container.append(list);
}
