// Reader LP 用ブートストラップ — index.html と同じシェーダー背景を起動する。
// UI の振る舞いをページ内インラインに書かないための入口（DESIGN-RULES §6）。
//
// ページ固有の背景：body の data-background が `love-…` のとき、または `?bg=membrane|gemini|gemini2|gemini3|orbit|lens|binary`
// のときは、Love駆動開発の背景（backgrounds/love-gemini.js＝Gemini 作、love-field.js＝Claude の見本）を使う。
// 失敗したら、いつものランダムなシェーダー背景に戻す。
import { loadRandomShader } from './bootstrap/shaders.js';
import { SHADER_PATHS } from './content/site-data.mjs';

// どの Love駆動開発の背景を読むか。無ければ null（いつものプール）
function loveBackgroundModule() {
    let q = null;
    try {
        q = new URLSearchParams(window.location.search).get('bg');
    } catch (_) { /* window が無い環境 */ }
    const name = String(q || (document.body && document.body.dataset.background) || '').replace(/^love-/, '');
    if (name === 'membrane') return './backgrounds/love-membrane.js';
    if (name === 'gemini') return './backgrounds/love-gemini.js';
    if (name === 'gemini2') return './backgrounds/love-gemini2.js';
    if (name === 'gemini3') return './backgrounds/love-gemini3.js';
    if (['orbit', 'lens', 'binary'].includes(name)) return './backgrounds/love-field.js';
    return null;
}

async function loadBackground() {
    const mod = loveBackgroundModule();
    if (mod) {
        try {
            await import(mod);
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
