// Reader LP 用ブートストラップ — index.html と同じシェーダー背景を起動する。
// UI の振る舞いをページ内インラインに書かないための入口（DESIGN-RULES §6）。
import { loadRandomShader } from './bootstrap/shaders.js';
import { SHADER_PATHS } from './content/site-data.mjs';

try {
    await loadRandomShader(SHADER_PATHS, import.meta.url);
} catch (error) {
    console.warn('Shader bootstrap failed; continuing without background.', error);
}
