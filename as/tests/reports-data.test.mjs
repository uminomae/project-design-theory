import test from 'node:test';
import assert from 'node:assert/strict';

import {
    hasText,
    formatDate,
    parseFrontmatter,
    looksLikeHtmlDocument,
    resolveFirstAvailablePdfUrl,
} from '../src/reports/data.js';

// hasText

test('hasText returns true for non-empty string', () => {
    assert.equal(hasText('hello'), true);
    assert.equal(hasText(' a '), true);
});

test('hasText returns false for empty or whitespace-only string', () => {
    assert.equal(hasText(''), false);
    assert.equal(hasText('   '), false);
});

test('hasText returns false for non-string types', () => {
    assert.equal(hasText(null), false);
    assert.equal(hasText(undefined), false);
    assert.equal(hasText(42), false);
    assert.equal(hasText([]), false);
});

// formatDate

test('formatDate extracts YYYY-MM-DD from ISO datetime string', () => {
    assert.equal(formatDate('2025-01-15T00:00:00Z'), '2025-01-15');
});

test('formatDate returns plain YYYY-MM-DD as-is', () => {
    assert.equal(formatDate('2025-06-30'), '2025-06-30');
});

test('formatDate returns empty string for empty input', () => {
    assert.equal(formatDate(''), '');
    assert.equal(formatDate(null), '');
});

// parseFrontmatter

test('parseFrontmatter parses simple frontmatter', () => {
    const text = '---\ntitle: Hello\nauthor: test\n---\nBody content here.';
    const { meta, body } = parseFrontmatter(text);
    assert.equal(meta.title, 'Hello');
    assert.equal(meta.author, 'test');
    assert.equal(body, 'Body content here.');
});

test('parseFrontmatter strips surrounding quotes from values', () => {
    const text = '---\ntitle: "Quoted"\n---\nbody';
    const { meta } = parseFrontmatter(text);
    assert.equal(meta.title, 'Quoted');
});

test('parseFrontmatter returns empty meta and trimmed body for plain text', () => {
    const { meta, body } = parseFrontmatter('  plain text  ');
    assert.deepEqual(meta, {});
    assert.equal(body, 'plain text');
});

test('parseFrontmatter handles null/undefined input gracefully', () => {
    const { meta, body } = parseFrontmatter(null);
    assert.deepEqual(meta, {});
    assert.equal(body, '');
});

// looksLikeHtmlDocument

test('looksLikeHtmlDocument returns true for doctype html', () => {
    assert.equal(looksLikeHtmlDocument('<!doctype html><html>'), true);
    assert.equal(looksLikeHtmlDocument('<!DOCTYPE HTML><html>'), true);
});

test('looksLikeHtmlDocument returns true for bare html tag', () => {
    assert.equal(looksLikeHtmlDocument('<html lang="ja">'), true);
});

test('looksLikeHtmlDocument returns false for markdown content', () => {
    assert.equal(looksLikeHtmlDocument('# Heading\n\nContent'), false);
});

test('looksLikeHtmlDocument returns false for empty string', () => {
    assert.equal(looksLikeHtmlDocument(''), false);
});

// resolveFirstAvailablePdfUrl

test('resolveFirstAvailablePdfUrl returns first pdfUrl', async () => {
    const sources = [
        { mdUrl: 'https://example.com/a.md', pdfUrl: 'https://example.com/a.pdf' },
        { mdUrl: 'https://example.com/b.md', pdfUrl: 'https://example.com/b.pdf' },
    ];
    const result = await resolveFirstAvailablePdfUrl(sources);
    assert.equal(result, 'https://example.com/a.pdf');
});

test('resolveFirstAvailablePdfUrl returns empty string when no pdfUrl', async () => {
    const result = await resolveFirstAvailablePdfUrl([{ mdUrl: 'https://example.com/a.md' }]);
    assert.equal(result, '');
});

test('resolveFirstAvailablePdfUrl returns empty string for empty array', async () => {
    const result = await resolveFirstAvailablePdfUrl([]);
    assert.equal(result, '');
});
