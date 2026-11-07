const STARTUP_ERROR_OVERLAY_ID = 'app-startup-error-overlay';
const STARTUP_ERROR_HANDLER_FLAG = '__pdStartupErrorHandlersInstalled';
const STARTUP_ERROR_RENDERER = '__pdShowStartupErrorOverlay';
const STARTUP_WARNING_BANNER_ID = 'app-startup-warning-banner';

function formatStartupError(errorLike) {
    if (!errorLike) return 'Unknown startup error';
    if (typeof errorLike === 'string') return errorLike;
    if (errorLike instanceof Error) {
        return errorLike.stack || `${errorLike.name}: ${errorLike.message}`;
    }
    try {
        return JSON.stringify(errorLike, null, 2);
    } catch {
        return String(errorLike);
    }
}

function ensureStartupErrorOverlay(doc) {
    let overlay = doc.getElementById(STARTUP_ERROR_OVERLAY_ID);
    if (!overlay) {
        overlay = doc.createElement('pre');
        overlay.id = STARTUP_ERROR_OVERLAY_ID;
        const parent = doc.body || doc.documentElement;
        if (parent) parent.appendChild(overlay);
    }
    return overlay;
}

function renderStartupError(message) {
    const sharedRenderer = window[STARTUP_ERROR_RENDERER];
    if (typeof sharedRenderer === 'function') {
        sharedRenderer(message);
        return;
    }

    const doc = window.document;
    if (!doc) return;
    const overlay = ensureStartupErrorOverlay(doc);
    if (!overlay) return;
    overlay.textContent = `[startup-error]\n${message}`;
}

export function showStartupErrorOverlay(errorLike) {
    renderStartupError(formatStartupError(errorLike));
}

export function showStartupWarningBanner(message) {
    const doc = window.document;
    if (!doc) return;
    let banner = doc.getElementById(STARTUP_WARNING_BANNER_ID);
    if (!banner) {
        banner = doc.createElement('div');
        banner.id = STARTUP_WARNING_BANNER_ID;
        const parent = doc.body || doc.documentElement;
        if (parent) parent.appendChild(banner);
    }
    banner.textContent = message;
}

let installed = false;

export function installStartupErrorHandlers() {
    if (installed || window[STARTUP_ERROR_HANDLER_FLAG]) return;
    installed = true;
    window[STARTUP_ERROR_HANDLER_FLAG] = true;

    window.addEventListener('error', (event) => {
        const value = event?.error || event?.message || event;
        showStartupErrorOverlay(value);
    });

    window.addEventListener('unhandledrejection', (event) => {
        showStartupErrorOverlay(event?.reason || event);
    });
}
