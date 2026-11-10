// stacked-tables.js — 狭い幅で表を行ごとに縦に積むため、各セルに列の見出しを写す（viewer.css の .md-table-stack）。
// 三列以上の表だけに付ける。表は横スクロールさせない（stance 2-7・cs・as と同じ形・2026-11-10）。

export function prepareStackedTables(root) {
    if (!root) return;
    root.querySelectorAll('.md-body table').forEach((table) => {
        const headers = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent.trim());
        if (headers.length < 3) return;
        table.classList.add('md-table-stack');
        table.querySelectorAll('tbody tr').forEach((tr) => {
            Array.from(tr.children).forEach((cell, index) => {
                if (headers[index]) cell.setAttribute('data-label', headers[index]);
            });
        });
    });
}
