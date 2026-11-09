// Reader LP 用ブートストラップ — index.html と同じシェーダー背景を起動する。
// UI の振る舞いをページ内インラインに書かないための入口（DESIGN-RULES §6）。
//
// ページ固有の背景：body の data-background が `love-…` のとき、または `?bg=orbit|lens|binary`
// のときは、Love駆動開発の背景（backgrounds/love-field.js・three.js の WebGL）を使う。
// 失敗したら、いつものランダムなシェーダー背景に戻す。
import { loadRandomShader } from './bootstrap/shaders.js';
import { SHADER_PATHS } from './content/site-data.mjs';

function wantsLoveField() {
    let q = null;
    try {
        q = new URLSearchParams(window.location.search).get('bg');
    } catch (_) { /* window が無い環境 */ }
    if (q) return ['orbit', 'lens', 'binary'].includes(q.replace(/^love-/, ''));
    return /^love-/.test((document.body && document.body.dataset.background) || '');
}

async function loadBackground() {
    if (wantsLoveField()) {
        try {
            await import('./backgrounds/love-field.js');
            return;
        } catch (error) {
            console.warn('Love field background failed; falling back to the shader pool.', error);
            const c = document.getElementById('webgl-container');
            if (c) c.replaceChildren();
        }
    }
    await loadRandomShader(SHADER_PATHS, import.meta.url);
}

try {
    await loadBackground();
} catch (error) {
    console.warn('Shader bootstrap failed; continuing without background.', error);
}
