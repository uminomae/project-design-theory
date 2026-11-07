export const DEFAULT_MODE = 'raijin';
export const AVAILABLE_BACKGROUND_MODES = ['raijin'];
const MODES = new Set(AVAILABLE_BACKGROUND_MODES);

export function normalizeMode(mode) {
    if (mode === 'flow' || mode === 'uzu') return 'raijin';
    return MODES.has(mode) ? mode : DEFAULT_MODE;
}

function syncModeQuery(mode) {
    if (!window.history?.replaceState) return;
    const url = new URL(window.location.href);
    url.searchParams.set('graphic', normalizeMode(mode));
    window.history.replaceState(window.history.state, '', url.toString());
}

function setButtonState(mode) {
    const normalized = normalizeMode(mode);
    document.querySelectorAll('[data-graphic-mode]').forEach((button) => {
        if (!(button instanceof HTMLButtonElement)) return;
        const isActive = button.dataset.graphicMode === normalized;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

const MODULE_MAP = {
    raijin: () => import('./backgrounds/kitai.js'),
};

let activeModule = null;
let activeMode = null;

// WebGL が使えないとき・動きを減らす設定のときは、シェーダーを動かさず、動かない明るい背景にする（#63-4）。
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
export const STATIC_BACKGROUND_CLASS = 'as-bg-static';

export function prefersReducedMotion() {
    return typeof window.matchMedia === 'function' && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function setStaticBackground(reason) {
    const root = document.documentElement;
    root.classList.toggle(STATIC_BACKGROUND_CLASS, Boolean(reason));
    if (reason) {
        root.dataset.bgStatic = reason;
    } else {
        delete root.dataset.bgStatic;
    }
}

function cleanupActiveModule() {
    if (activeModule?.cleanup) {
        try {
            activeModule.cleanup();
        } catch (error) {
            console.warn('[background-mode] cleanup failed:', error);
        }
    }
    activeModule = null;
}

async function loadBackground(mode, container) {
    const normalized = normalizeMode(mode);
    const loader = MODULE_MAP[normalized];
    if (!loader) return null;

    cleanupActiveModule();
    activeMode = normalized;

    if (prefersReducedMotion()) {
        setStaticBackground('reduced-motion');
        return null;
    }

    let mod = null;
    try {
        mod = await loader();
        mod.init(container);
    } catch (error) {
        // renderer を作れない（WebGL の context が取れない）・three を読めないときは、動かない背景にする
        console.warn('[background-mode] WebGL background unavailable, using the static background:', error);
        if (mod?.cleanup) {
            try {
                mod.cleanup();
            } catch {
                // ignore
            }
        }
        setStaticBackground('no-webgl');
        return null;
    }
    setStaticBackground(null);
    activeModule = mod;
    return mod;
}

export function initBackgroundModeSwitcher(options = {}) {
    const onModeChange = typeof options.onModeChange === 'function' ? options.onModeChange : null;
    const onLoad = typeof options.onLoad === 'function' ? options.onLoad : null;
    const container = document.getElementById('canvas-container');
    if (!(container instanceof HTMLElement)) return;

    function getCurrentMode() {
        return activeMode || DEFAULT_MODE;
    }

    async function applyMode(nextMode, { emitChange = true } = {}) {
        const normalized = normalizeMode(nextMode);
        if (activeMode === normalized) {
            setButtonState(normalized);
            syncModeQuery(normalized);
            return;
        }
        setButtonState(normalized);
        syncModeQuery(normalized);

        await loadBackground(normalized, container);

        if (emitChange && onModeChange) {
            onModeChange(normalized);
        }
        if (onLoad) {
            onLoad(normalized);
        }
    }

    const initial = normalizeMode(new URL(window.location.href).searchParams.get('graphic') || DEFAULT_MODE);
    applyMode(initial, { emitChange: false });

    // 動きを減らす設定が途中で変わったら、背景を入れ直す
    if (typeof window.matchMedia === 'function') {
        const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
        reducedMotion.addEventListener?.('change', () => {
            const current = getCurrentMode();
            activeMode = null;
            applyMode(current, { emitChange: false });
        });
    }

    document.querySelectorAll('[data-graphic-mode]').forEach((button) => {
        if (!(button instanceof HTMLButtonElement)) return;
        button.addEventListener('click', () => {
            const next = normalizeMode(button.dataset.graphicMode);
            applyMode(next);
        });
    });

    return {
        getCurrentMode,
        setMode(nextMode) {
            applyMode(nextMode);
        },
        applyState(nextState) {
            if (activeModule?.applyState) {
                activeModule.applyState(nextState);
            }
        },
    };
}
