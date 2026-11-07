function sanitize(input) {
    return input
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
        .replace(/<object\b[^>]*>[\s\S]*?<\/object>/gi, '')
        .replace(/<embed\b[^>]*\/?>/gi, '')
        .replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, '')
        .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
        .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '')
        .replace(/href\s*=\s*"javascript:[^"]*"/gi, 'href="#"')
        .replace(/href\s*=\s*'javascript:[^']*'/gi, "href='#'");
}

export function renderMarkdown(markdown) {
    let html = sanitize(markdown)
        .replace(/^---$/gm, '<hr>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    html = html.replace(/(?:^|\n)((?:\|.+\|\n)+)/g, (match, tableBlock) => {
        const rows = tableBlock.trim().split('\n');
        if (rows.length < 2) {
            return match;
        }

        const parseRow = (row) => row.split('|').slice(1, -1).map((cell) => cell.trim());
        const headerCells = parseRow(rows[0]);
        const bodyRows = rows.slice(2);

        let table = '<table><thead><tr>';
        for (const cell of headerCells) {
            table += `<th>${cell}</th>`;
        }
        table += '</tr></thead><tbody>';

        for (const row of bodyRows) {
            const cells = parseRow(row);
            table += '<tr>';
            for (const cell of cells) {
                table += `<td>${cell}</td>`;
            }
            table += '</tr>';
        }

        table += '</tbody></table>';
        return table;
    });

    html = html.replace(/(?:^|\n)((?:\d+\. .+\n?)+)/g, (match, listBlock) => {
        const items = listBlock.trim().split('\n');
        let list = '<ol>';
        for (const item of items) {
            list += `<li>${item.replace(/^\d+\.\s*/, '')}</li>`;
        }
        list += '</ol>';
        return list;
    });

    html = html.replace(/(?:^|\n)((?:- .+\n?)+)/g, (match, listBlock) => {
        const items = listBlock.trim().split('\n');
        let list = '<ul>';
        for (const item of items) {
            list += `<li>${item.replace(/^-\s*/, '')}</li>`;
        }
        list += '</ul>';
        return list;
    });

    return html
        .split('\n')
        .map((line) => {
            const trimmed = line.trim();
            if (!trimmed) {
                return '';
            }
            if (/^<(h[1-3]|hr|table|thead|tbody|tr|th|td|ol|ul|li|\/|p|img|figure|div)/.test(trimmed)) {
                return trimmed;
            }
            return `<p>${trimmed}</p>`;
        })
        .join('\n')
        .replace(/<p>\s*<\/p>/g, '');
}
