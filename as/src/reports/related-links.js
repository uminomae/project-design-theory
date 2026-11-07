/**
 * 解説（guides）の末尾の「関連資料」/「Related Documents」の項目を、公開ページへのリンクにする（#63-5）。
 * 本文の md は pjdhiro の repo にあり as からは変えられないので、表示するときに as の側でリンクを付ける。
 * リンク先は、公開されていて 200 を返すことを確かめたページだけ。
 */

const PJDHIRO_AWARENESS_PAGES = 'https://uminomae.github.io/pjdhiro/assets/awareness';
const WIKI_PUBLIC_URL = 'https://uminomae.github.io/project-design-theory/wiki/';

function pageUrl(kind, lang, slug) {
    return `${PJDHIRO_AWARENESS_PAGES}/${kind}/${lang}/md/${slug}/`;
}

export const RELATED_DOCUMENT_LINKS = {
    // ja
    '調査概要': pageUrl('survey', 'ja', 'survey-status'),
    '一般向け解説': pageUrl('guides', 'ja', 'awareness-general'),
    '観察・支援版': pageUrl('guides', 'ja', 'awareness-designer'),
    '学際的検討版': pageUrl('guides', 'ja', 'awareness-academic'),
    '原典 wiki': WIKI_PUBLIC_URL,
    // en
    'Survey Overview': pageUrl('survey', 'en', 'survey-status'),
    'General Introduction': pageUrl('guides', 'en', 'awareness-general'),
    'Practitioner Guide': pageUrl('guides', 'en', 'awareness-designer'),
    'Interdisciplinary Review': pageUrl('guides', 'en', 'awareness-academic'),
    'Source Wiki': WIKI_PUBLIC_URL,
};

const RELATED_HEADING = /<h([1-6])[^>]*>\s*(?:関連資料|Related Documents)\s*<\/h\1>/i;

/**
 * marked で HTML にしたあとの文字列を受け取り、「関連資料」の見出しより後ろの
 * `<li><strong>名前</strong>` を `<li><a href="…"><strong>名前</strong></a>` にする。
 * 見出しが無ければ、そのまま返す。
 */
export function linkRelatedDocuments(html) {
    const source = String(html || '');
    const match = RELATED_HEADING.exec(source);
    if (!match) return source;

    const head = source.slice(0, match.index + match[0].length);
    let tail = source.slice(match.index + match[0].length);

    // 次の同じか上の階層の見出しまでを「関連資料」の範囲とする
    const level = Number(match[1]);
    const nextHeading = new RegExp(`<h[1-${level}][\\s>]`, 'i').exec(tail);
    const sectionEnd = nextHeading ? nextHeading.index : tail.length;
    const section = tail.slice(0, sectionEnd).replace(
        /<li>(\s*)<strong>([^<]+)<\/strong>/g,
        (whole, space, label) => {
            const url = RELATED_DOCUMENT_LINKS[label.trim()];
            if (!url) return whole;
            return `<li>${space}<a href="${url}"><strong>${label}</strong></a>`;
        },
    );
    tail = section + tail.slice(sectionEnd);
    return head + tail;
}
