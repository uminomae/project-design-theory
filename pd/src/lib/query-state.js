export function getSearchParams() {
    return new URLSearchParams(window.location.search);
}

export function updateSearchParams(updates, { replace = false, state = null } = {}) {
    const url = new URL(window.location.href);

    for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === undefined) {
            url.searchParams.delete(key);
            continue;
        }

        url.searchParams.set(key, value);
    }

    history[replace ? 'replaceState' : 'pushState'](
        state,
        '',
        `${url.pathname}${url.search}${url.hash}`,
    );
}
