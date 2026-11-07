// 背景シェーダーの起動。WebGPU が使える環境では *-webgpu.js を、使えない環境
// （Safari 18 / iOS 18 以前は機能フラグで既定オフ・Firefox 等）では同じ数式の
// 旧 WebGL 版（three.js・`main-webgpu.js` → `main.js` の対応）に切り替える。
//
// 検証用クエリ:
//   `?shader=main3`      basename の一部でシェーダーを 1 本に固定（通常はランダム）
//   `?renderer=webgl`    WebGPU が使えても WebGL 版を強制（フォールバックの確認用）

function getQuery(key) {
    try {
        return new URLSearchParams(window.location.search).get(key);
    } catch (_) {
        return null; // window が無い環境
    }
}

function pickShaderPath(shaderPaths) {
    const wanted = getQuery('shader');
    if (wanted) {
        const hit = shaderPaths.find((p) => p.split('/').pop().includes(wanted));
        if (hit) return hit;
    }
    return shaderPaths[Math.floor(Math.random() * shaderPaths.length)];
}

// WebGPU の可否。`navigator.gpu` があっても adapter が取れない（フラグ無効・
// 非対応 GPU・ブロックリスト）場合があるので requestAdapter まで確かめる。
export async function detectWebGPU() {
    try {
        if (typeof navigator === 'undefined' || !('gpu' in navigator)) return false;
        const adapter = await navigator.gpu.requestAdapter();
        return Boolean(adapter);
    } catch (_) {
        return false;
    }
}

export function toWebGLFallbackPath(webgpuPath) {
    return webgpuPath.replace(/-webgpu\.js$/, '.js');
}

export async function loadRandomShader(shaderPaths, baseUrl = import.meta.url) {
    let pick = pickShaderPath(shaderPaths);
    const forceWebGL = getQuery('renderer') === 'webgl';
    const hasWebGPU = forceWebGL ? false : await detectWebGPU();
    if (!hasWebGPU) {
        pick = toWebGLFallbackPath(pick);
        console.info(`[project-design] WebGPU ${forceWebGL ? 'forced off' : 'unavailable'}; falling back to WebGL background: ${pick}`);
    }
    const resolved = new URL(pick, baseUrl).href;
    await import(resolved);
}
