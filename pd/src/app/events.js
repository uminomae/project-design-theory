export function bindAppEvents({ i18n, menuController, modalRouter, slideViewer }) {
    function handleDocumentClick(event) {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        if (target.closest('[data-menu-toggle]')) {
            menuController.toggle();
            return;
        }

        const langButton = target.closest('[data-lang-button]');
        if (langButton) {
            void i18n.switchLang(langButton.dataset.langButton);
            return;
        }

        const modalOpeners = {
            about: () => modalRouter.openAbout(),
            howto: () => modalRouter.openHowto(),
            slides: () => modalRouter.openSlides(),
        };

        const openTrigger = target.closest('[data-modal-open]');
        if (openTrigger) {
            event.preventDefault();
            menuController.close();
            const handler = modalOpeners[openTrigger.dataset.modalOpen];
            if (handler) { void handler(); }
            return;
        }

        const modalClosers = {
            about: () => modalRouter.closeAbout(),
            knowledge: () => modalRouter.closeKnowledge(),
            howto: () => modalRouter.closeHowto(),
            slides: () => modalRouter.closeSlides(),
        };

        const closeTrigger = target.closest('[data-modal-close]');
        if (closeTrigger) {
            const handler = modalClosers[closeTrigger.dataset.modalClose];
            if (handler) { handler(); }
            return;
        }

        const copyBtn = target.closest('.howto-copy');
        if (copyBtn) {
            const targetId = copyBtn.getAttribute('data-copy-target');
            const codeEl = document.getElementById(targetId);
            if (codeEl) {
                navigator.clipboard.writeText(codeEl.textContent.trim()).then(() => {
                    const label = copyBtn.querySelector('[data-i18n-key="howto.copy"]');
                    if (label) {
                        const orig = label.textContent;
                        label.textContent = i18n.translate('howto.copied');
                        setTimeout(() => { label.textContent = orig; }, 1500);
                    }
                });
            }
            return;
        }

        const slidesPrev = target.closest('#slides-prev');
        if (slidesPrev && slideViewer) {
            void slideViewer.prev();
            return;
        }

        const slidesNext = target.closest('#slides-next');
        if (slidesNext && slideViewer) {
            void slideViewer.next();
            return;
        }

        const knowledgeLink = target.closest('[data-knowledge]');
        if (knowledgeLink) {
            event.preventDefault();
            menuController.close();
            void modalRouter.openKnowledge(knowledgeLink.dataset.knowledge);
            return;
        }

        if (menuController.isOpen() && !target.closest('#site-menu')) {
            menuController.close();
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            modalRouter.handleEscape();
            return;
        }

        if (modalRouter.isSlidesOpen() && slideViewer) {
            if (event.key === 'ArrowLeft') {
                void slideViewer.prev();
                return;
            }

            if (event.key === 'ArrowRight') {
                void slideViewer.next();
                return;
            }
        }
    }

    function handlePopState() {
        void modalRouter.handlePopState();
    }

    const scrollHint = document.getElementById('scroll-hint');
    let scrollHintHidden = false;

    function handleScroll() {
        if (!scrollHint) {
            return;
        }

        const shouldHide = window.scrollY > window.innerHeight * 0.15;

        if (shouldHide === scrollHintHidden) {
            return;
        }

        scrollHintHidden = shouldHide;
        scrollHint.classList.toggle('visible', !shouldHide);
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        document.removeEventListener('click', handleDocumentClick);
        document.removeEventListener('keydown', handleKeydown);
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('scroll', handleScroll);
    };
}
