function getRequiredElementById(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`Missing required element: #${id}`);
    }

    return element;
}

function getRequiredElement(selector) {
    const element = document.querySelector(selector);

    if (!element) {
        throw new Error(`Missing required element: ${selector}`);
    }

    return element;
}

export function getAppDom() {
    return {
        aboutBody: getRequiredElementById('about-body'),
        aboutModalElement: getRequiredElementById('about-modal'),
        knowledgeBody: getRequiredElementById('knowledge-body'),
        howtoModalElement: getRequiredElementById('howto-modal'),
        knowledgeModalElement: getRequiredElementById('knowledge-modal'),
        knowledgePdfLink: getRequiredElementById('knowledge-pdf-link'),
        langButtons: Array.from(document.querySelectorAll('[data-lang-button]')),
        menuElement: getRequiredElementById('site-menu'),
        menuToggle: getRequiredElement('[data-menu-toggle]'),
        slidesCanvasWrap: getRequiredElementById('slides-canvas-wrap'),
        slidesModalElement: getRequiredElementById('slides-modal'),
        slidesNext: getRequiredElementById('slides-next'),
        slidesPage: getRequiredElementById('slides-page'),
        slidesPrev: getRequiredElementById('slides-prev'),
    };
}
