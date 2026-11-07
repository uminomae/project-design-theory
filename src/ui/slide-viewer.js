const PDFJS_CDN = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
const PDFJS_WORKER_CDN = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';

let pdfjsLib = null;

async function loadPdfJs() {
    if (pdfjsLib) {
        return pdfjsLib;
    }

    const mod = await import(PDFJS_CDN);
    mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_CDN;
    pdfjsLib = mod;

    return pdfjsLib;
}

export function createSlideViewer({ container, pageIndicator, prevBtn, nextBtn }) {
    let pdfDoc = null;
    let currentPage = 1;
    let totalPages = 0;
    let rendering = false;
    let pendingPage = null;

    const canvas = container.querySelector('canvas');

    if (!canvas) {
        throw new Error('Missing canvas element in slide viewer container');
    }

    const ctx = canvas.getContext('2d');

    function updateNavButtons() {
        if (prevBtn) { prevBtn.disabled = currentPage <= 1; }
        if (nextBtn) { nextBtn.disabled = currentPage >= totalPages; }
    }

    async function renderPage(pageNum) {
        if (rendering) {
            pendingPage = pageNum;
            return;
        }

        if (!pdfDoc) {
            return;
        }

        rendering = true;

        try {
            const page = await pdfDoc.getPage(pageNum);
            const containerWidth = container.clientWidth;
            const unscaledViewport = page.getViewport({ scale: 1 });
            const scale = (containerWidth / unscaledViewport.width) * window.devicePixelRatio;
            const viewport = page.getViewport({ scale });

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.style.width = containerWidth + 'px';
            canvas.style.height = (viewport.height / window.devicePixelRatio) + 'px';

            await page.render({ canvasContext: ctx, viewport }).promise;

            currentPage = pageNum;
            pageIndicator.textContent = `${currentPage} / ${totalPages}`;
            updateNavButtons();
        } finally {
            rendering = false;
        }

        if (pendingPage !== null) {
            const next = pendingPage;
            pendingPage = null;
            await renderPage(next);
        }
    }

    const resizeObserver = typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            if (pdfDoc && !rendering) {
                void renderPage(currentPage);
            }
        })
        : null;

    if (resizeObserver) {
        resizeObserver.observe(container);
    }

    let preloadPromise = null;

    async function preload(url) {
        if (pdfDoc) return true;
        if (preloadPromise) return preloadPromise;

        preloadPromise = (async () => {
            try {
                const lib = await loadPdfJs();
                const doc = await lib.getDocument(url).promise;
                if (!preloadPromise) {
                    doc.destroy();
                    return false;
                }
                pdfDoc = doc;
                totalPages = pdfDoc.numPages;
                return true;
            } catch (error) {
                console.warn('PDF preload failed:', error);
                preloadPromise = null;
                return false;
            }
        })();

        return preloadPromise;
    }

    async function load(url) {
        try {
            const preloaded = await preload(url);
            if (!preloaded) {
                pageIndicator.textContent = 'Failed to load PDF';
                return false;
            }
            currentPage = 1;
            await renderPage(1);
            return true;
        } catch (error) {
            pageIndicator.textContent = 'Failed to load PDF';
            console.error('PDF load failed:', error);
            return false;
        }
    }

    async function prev() {
        if (currentPage <= 1) {
            return;
        }

        await renderPage(currentPage - 1);
    }

    async function next() {
        if (currentPage >= totalPages) {
            return;
        }

        await renderPage(currentPage + 1);
    }

    function destroy() {
        resizeObserver?.disconnect();

        if (pdfDoc) {
            pdfDoc.destroy();
            pdfDoc = null;
        }

        currentPage = 1;
        totalPages = 0;
        pendingPage = null;
        preloadPromise = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pageIndicator.textContent = '';
    }

    function getCurrentPage() {
        return currentPage;
    }

    function getTotalPages() {
        return totalPages;
    }

    return {
        destroy,
        getCurrentPage,
        getTotalPages,
        load,
        next,
        preload,
        prev,
    };
}
