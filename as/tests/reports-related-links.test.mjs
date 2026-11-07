import test from 'node:test';
import assert from 'node:assert/strict';

import { linkRelatedDocuments, RELATED_DOCUMENT_LINKS } from '../src/reports/related-links.js';

const JA = `<h2>注意</h2>
<ul>
<li><strong>調査概要</strong> — 本文中の同じ語はリンクにしない</li>
</ul>
<h2>関連資料</h2>
<ul>
<li><strong>調査概要</strong> — 調査の全体像と現在の進捗</li>
<li><strong>観察・支援版</strong> — 現場での観察の手がかり</li>
<li><strong>学際的検討版</strong> — 研究者向けの詳細な証拠の検討</li>
<li><strong>原典 wiki</strong> — 個別の研究者・知見の解説</li>
<li><strong>知らない名前</strong> — リンクにしない</li>
</ul>`;

test('linkRelatedDocuments links the four ja items after the heading only', () => {
    const out = linkRelatedDocuments(JA);
    assert.ok(out.includes('<li><strong>調査概要</strong> — 本文中'), 'before the heading stays plain');
    for (const label of ['調査概要', '観察・支援版', '学際的検討版', '原典 wiki']) {
        assert.ok(
            out.includes(`<a href="${RELATED_DOCUMENT_LINKS[label]}"><strong>${label}</strong></a>`),
            `missing link for ${label}`,
        );
    }
    assert.ok(out.includes('<li><strong>知らない名前</strong>'), 'unknown labels stay plain');
});

test('linkRelatedDocuments handles the en heading', () => {
    const out = linkRelatedDocuments('<h2>Related Documents</h2>\n<ul>\n<li><strong>General Introduction</strong> — x</li>\n</ul>');
    assert.ok(out.includes(`<a href="${RELATED_DOCUMENT_LINKS['General Introduction']}"><strong>General Introduction</strong></a>`));
    assert.ok(RELATED_DOCUMENT_LINKS['General Introduction'].includes('/guides/en/md/awareness-general/'));
});

test('linkRelatedDocuments returns html unchanged without the heading', () => {
    const html = '<h2>他</h2><ul><li><strong>調査概要</strong></li></ul>';
    assert.equal(linkRelatedDocuments(html), html);
});
