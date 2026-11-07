import test from 'node:test';
import assert from 'node:assert/strict';

import { buildRichSlideDocument } from '../src/ui/slide-viewer.js';

const DECK = '<!DOCTYPE html><html><head><title>A01</title><style>.x{}</style></head><body><div class="deck"></div></body></html>';

test('buildRichSlideDocument adds base and the wide layout before </head>', () => {
    const out = buildRichSlideDocument(DECK, { baseUrl: 'https://example.test/deck.html' });
    assert.match(out, /<base href="https:\/\/example\.test\/deck\.html"><style data-as-slide-viewer="wide">[^]*<\/style><\/head>/);
    assert.ok(out.includes('<div class="deck"></div>'), 'deck body is kept as is');
});

test('buildRichSlideDocument uses the vertical layout on narrow screens', () => {
    const out = buildRichSlideDocument(DECK, { baseUrl: '', vertical: true });
    assert.ok(out.includes('data-as-slide-viewer="vertical"'));
    assert.ok(out.includes('.nav-bar, .progress-bar { display: none !important; }'));
    assert.ok(!out.includes('<base '), 'no base without baseUrl');
});

test('buildRichSlideDocument escapes the base URL', () => {
    const out = buildRichSlideDocument(DECK, { baseUrl: 'https://e.test/"><script>' });
    assert.ok(out.includes('href="https://e.test/&quot;>&lt;script>"'));
});
