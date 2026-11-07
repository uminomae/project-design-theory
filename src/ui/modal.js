function setBodyLocked(locked) {
    document.body.style.overflow = locked ? 'hidden' : '';
}

let revealTimers = [];

export const revealConfig = {
    initialDelay: 0,
    stagger: 150,
    duration: 1.5,
};

export function revealAboutContent(container) {
    revealTimers.forEach(clearTimeout);
    revealTimers = [];

    const items = container.querySelectorAll('.reveal-item');
    items.forEach((el) => {
        el.classList.remove('reveal');
        el.style.animationDuration = '';
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach((el) => el.classList.add('reveal'));
        return;
    }

    let delay = revealConfig.initialDelay;

    items.forEach((el) => {
        const id = setTimeout(() => {
            el.style.animationDuration = revealConfig.duration + 's';
            el.classList.add('reveal');
        }, delay);
        revealTimers.push(id);
        delay += revealConfig.stagger;
    });
}

export function resetReveal(container) {
    revealTimers.forEach(clearTimeout);
    revealTimers = [];
    container.querySelectorAll('.reveal-item').forEach((el) => {
        el.classList.remove('reveal');
    });
}

export function createModalController(rootElement) {
    function isOpen() {
        return rootElement.classList.contains('open');
    }

    function open() {
        rootElement.classList.add('open');
        rootElement.setAttribute('aria-hidden', 'false');
        setBodyLocked(true);
    }

    function close() {
        rootElement.classList.remove('open');
        rootElement.setAttribute('aria-hidden', 'true');
        setBodyLocked(false);
    }

    return {
        close,
        isOpen,
        open,
    };
}
