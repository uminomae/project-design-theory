import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import {
    normalizeReviewedAreas,
    reviewedRecordItems,
    loadReviewedAreas,
} from '../src/reports/reviewed-records.js';

const BASE = 'https://uminomae.github.io/project-design-theory/as/';
const JSON_URL = `${BASE}evidence/reviewed.json`;

test('normalizeReviewedAreas resolves the record url next to reviewed.json and sorts by id', () => {
    const areas = normalizeReviewedAreas({
        areas: [
            { id: 'A03', file: 'evidence-A03-self.md', reviewed: '2026-11-12', name_ja: '自己と境界', name_en: 'Self and boundaries', summary_ja: 's', summary_en: 's' },
            { id: 'a01', file: 'evidence-A01-x.md', reviewed: '2026-11-09', name_ja: '神経現象学の方法' },
        ],
    }, JSON_URL);
    assert.deepEqual(areas.map((a) => a.id), ['A01', 'A03']);
    assert.equal(areas[0].mdUrl, `${BASE}evidence/evidence-A01-x.md`);
    assert.equal(areas[0].name.en, '神経現象学の方法');
});

test('normalizeReviewedAreas drops rows whose file does not match the id or the record name', () => {
    const areas = normalizeReviewedAreas({
        areas: [
            { id: 'A02', file: 'evidence-A01-x.md', name_ja: 'a' },
            { id: 'A02', file: '../secret.md', name_ja: 'a' },
            { id: 'D08', file: 'evidence-D08-x.md', name_ja: 'a' },
            { id: 'A02', file: 'evidence-A02-x.md' },
        ],
    }, JSON_URL);
    assert.equal(areas.length, 0);
});

test('reviewedRecordItems picks the language and marks English titles as Japanese records', () => {
    const areas = normalizeReviewedAreas({
        areas: [{ id: 'A01', file: 'evidence-A01-x.md', reviewed: '2026-11-09', name_ja: '神経現象学の方法', name_en: 'Methods of neurophenomenology', summary_ja: '説明', summary_en: 'summary' }],
    }, JSON_URL);
    const [ja] = reviewedRecordItems(areas, 'ja');
    assert.equal(ja.title, '神経現象学の方法');
    assert.equal(ja.summary, '説明');
    const [en] = reviewedRecordItems(areas, 'en');
    assert.equal(en.title, 'Methods of neurophenomenology (in Japanese)');
    assert.equal(en.modalTitle, 'Methods of neurophenomenology');
    assert.equal(en.summary, 'summary');
});

test('item text never shows the area code', () => {
    const payload = JSON.parse(fs.readFileSync(new URL('../evidence/reviewed.json', import.meta.url), 'utf8'));
    for (const lang of ['ja', 'en']) {
        for (const item of reviewedRecordItems(normalizeReviewedAreas(payload, JSON_URL), lang)) {
            assert.doesNotMatch(`${item.title} ${item.summary}`, /(?<![A-Za-z0-9])A\d\d(?![0-9])/);
        }
    }
});

test('the published reviewed.json lists records that exist', () => {
    const payload = JSON.parse(fs.readFileSync(new URL('../evidence/reviewed.json', import.meta.url), 'utf8'));
    const areas = normalizeReviewedAreas(payload, JSON_URL);
    assert.equal(areas.length, payload.areas.length);
    for (const a of payload.areas) {
        assert.ok(fs.existsSync(new URL(`../evidence/${a.file}`, import.meta.url)), a.file);
    }
});

test('loadReviewedAreas resolves records next to reviewed.json', async () => {
    const ok = async () => ({ ok: true, json: async () => ({ areas: [{ id: 'A01', file: 'evidence-A01-x.md', name_ja: 'a' }] }) });
    const [area] = await loadReviewedAreas('evidence/reviewed.json', { baseHref: BASE, fetchImpl: ok });
    assert.equal(area.mdUrl, `${BASE}evidence/evidence-A01-x.md`);
});

test('loadReviewedAreas returns an empty list when the file cannot be read', async () => {
    const notFound = async () => ({ ok: false, json: async () => ({}) });
    assert.deepEqual(await loadReviewedAreas('evidence/reviewed.json', { baseHref: BASE, fetchImpl: notFound }), []);
    const broken = async () => { throw new Error('offline'); };
    assert.deepEqual(await loadReviewedAreas('evidence/reviewed.json', { baseHref: BASE, fetchImpl: broken }), []);
});
