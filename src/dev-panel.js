// dev-panel.js — ?dev で開くグロー調整パネル
// creation-space の dev-panel パターンを簡易模倣
import { revealConfig, revealAboutContent, resetReveal } from './ui/modal.js';

const PARAMS = [
    { group: 'Glow color', items: [
        { var: '--glow-r', label: 'Red',   min: 0, max: 255, step: 1 },
        { var: '--glow-g', label: 'Green', min: 0, max: 255, step: 1 },
        { var: '--glow-b', label: 'Blue',  min: 0, max: 255, step: 1 },
        { type: 'color', label: 'Pick color' },
    ]},
    { group: 'Heading glow', items: [
        { var: '--glow-h-r1', label: 'R1 (inner)', min: 0, max: 60, step: 1 },
        { var: '--glow-h-r2', label: 'R2 (mid)',   min: 0, max: 80, step: 1 },
        { var: '--glow-h-r3', label: 'R3 (outer)', min: 0, max: 120, step: 1 },
        { var: '--glow-h-a3', label: 'A3 opacity', min: 0, max: 1, step: 0.05 },
    ]},
    { group: 'Text glow', items: [
        { var: '--glow-t-r1', label: 'R1', min: 0, max: 40, step: 1 },
        { var: '--glow-t-r2', label: 'R2', min: 0, max: 60, step: 1 },
        { var: '--glow-t-r3', label: 'R3', min: 0, max: 100, step: 1 },
        { var: '--glow-t-r4', label: 'R4', min: 0, max: 120, step: 1 },
        { var: '--glow-t-r5', label: 'R5 (widest)', min: 0, max: 200, step: 1 },
        { var: '--glow-t-a3', label: 'A3 opacity', min: 0, max: 1, step: 0.05 },
        { var: '--glow-t-a4', label: 'A4 opacity', min: 0, max: 1, step: 0.05 },
        { var: '--glow-t-a5', label: 'A5 opacity', min: 0, max: 1, step: 0.05 },
    ]},
    { group: 'Card glow', items: [
        { var: '--glow-c-r1', label: 'R1', min: 0, max: 40, step: 1 },
        { var: '--glow-c-r2', label: 'R2', min: 0, max: 60, step: 1 },
        { var: '--glow-c-r3', label: 'R3', min: 0, max: 100, step: 1 },
        { var: '--glow-c-a3', label: 'A3 opacity', min: 0, max: 1, step: 0.05 },
    ]},
    { group: 'Card panel', items: [
        { var: '--card-bg-alpha', label: 'BG alpha', min: 0, max: 1, step: 0.05 },
        { var: '--card-blur', label: 'Blur (px)', min: 0, max: 20, step: 1 },
        { var: '--card-border-alpha', label: 'Border alpha', min: 0, max: 1, step: 0.05 },
    ]},
];

function getVar(name) {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
}

function setVar(name, val) {
    document.documentElement.style.setProperty(name, val);
}

function buildPanel() {
    var panel = document.createElement('div');
    panel.id = 'dev-panel';

    var style = document.createElement('style');
    style.textContent = [
        '#dev-panel { position:fixed; top:0; right:0; width:320px; height:100vh;',
        '  background:rgba(0,0,0,0.85); color:#eee; font:12px/1.6 monospace;',
        '  overflow-y:auto; z-index:9999; padding:1rem;',
        '  transform:translateX(100%); transition:transform 0.3s ease; }',
        '#dev-panel.open { transform:translateX(0); }',
        '#dev-toggle { position:fixed; top:50%; right:0; z-index:9998;',
        '  writing-mode:vertical-rl; background:rgba(0,0,0,0.7); color:#aaa;',
        '  border:none; padding:0.5rem 0.25rem; cursor:pointer; font:11px monospace;',
        '  border-radius:4px 0 0 4px; }',
        '#dev-toggle:hover { color:#fff; }',
        '.dp-group { margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.75rem; }',
        '.dp-group-title { font-weight:bold; color:#8af; margin-bottom:0.5rem; cursor:pointer; }',
        '.dp-row { display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0; }',
        '.dp-label { width:80px; font-size:11px; color:#aaa; flex-shrink:0; }',
        '.dp-range { flex:1; accent-color:#8af; }',
        '.dp-val { width:40px; text-align:right; font-size:11px; color:#ccc; }',
        '.dp-actions { display:flex; gap:0.5rem; margin-top:1rem; }',
        '.dp-btn { background:#333; color:#ccc; border:1px solid #555; border-radius:3px;',
        '  padding:0.3rem 0.6rem; cursor:pointer; font:11px monospace; }',
        '.dp-btn:hover { background:#444; color:#fff; }',
    ].join('\n');
    document.head.appendChild(style);

    // Toggle button
    var toggle = document.createElement('button');
    toggle.id = 'dev-toggle';
    toggle.textContent = 'DEV';
    toggle.onclick = function() { panel.classList.toggle('open'); };
    document.body.appendChild(toggle);

    // Header
    var header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;';
    header.innerHTML = '<span style="color:#8af;font-size:14px;font-weight:bold;">Glow Dev Panel</span>';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'dp-btn';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = function() { panel.classList.remove('open'); };
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Groups
    for (var g = 0; g < PARAMS.length; g++) {
        var group = PARAMS[g];
        var groupEl = document.createElement('div');
        groupEl.className = 'dp-group';

        var title = document.createElement('div');
        title.className = 'dp-group-title';
        title.textContent = group.group;
        groupEl.appendChild(title);

        for (var i = 0; i < group.items.length; i++) {
            var item = group.items[i];
            var row = document.createElement('div');
            row.className = 'dp-row';

            // Color picker type
            if (item.type === 'color') {
                var cpLabel = document.createElement('span');
                cpLabel.className = 'dp-label';
                cpLabel.textContent = item.label;

                var cp = document.createElement('input');
                cp.type = 'color';
                cp.style.cssText = 'flex:1;height:32px;border:none;background:none;cursor:pointer;';
                var r = getVar('--glow-r'), gv = getVar('--glow-g'), b = getVar('--glow-b');
                cp.value = '#' + [r,gv,b].map(function(c){return Math.round(c).toString(16).padStart(2,'0');}).join('');

                cp.addEventListener('input', function(e) {
                    var hex = e.target.value;
                    var rv = parseInt(hex.substr(1,2),16);
                    var gvv = parseInt(hex.substr(3,2),16);
                    var bv = parseInt(hex.substr(5,2),16);
                    setVar('--glow-r', rv);
                    setVar('--glow-g', gvv);
                    setVar('--glow-b', bv);
                    // Sync RGB sliders
                    var sliders = panel.querySelectorAll('.dp-range');
                    for (var s = 0; s < sliders.length; s++) {
                        var vn = sliders[s].dataset.varName;
                        if (vn === '--glow-r') { sliders[s].value = rv; sliders[s].nextElementSibling.textContent = rv; }
                        if (vn === '--glow-g') { sliders[s].value = gvv; sliders[s].nextElementSibling.textContent = gvv; }
                        if (vn === '--glow-b') { sliders[s].value = bv; sliders[s].nextElementSibling.textContent = bv; }
                    }
                });

                row.appendChild(cpLabel);
                row.appendChild(cp);
                groupEl.appendChild(row);
                continue;
            }

            var label = document.createElement('span');
            label.className = 'dp-label';
            label.textContent = item.label;

            var input = document.createElement('input');
            input.type = 'range';
            input.className = 'dp-range';
            input.min = item.min;
            input.max = item.max;
            input.step = item.step;
            input.value = getVar(item.var);
            input.dataset.varName = item.var;

            var valSpan = document.createElement('span');
            valSpan.className = 'dp-val';
            valSpan.textContent = input.value;

            input.addEventListener('input', (function(inp, vs, varName) {
                return function() {
                    vs.textContent = parseFloat(inp.value).toFixed(inp.step < 1 ? 2 : 0);
                    setVar(varName, inp.value);
                };
            })(input, valSpan, item.var));

            row.appendChild(label);
            row.appendChild(input);
            row.appendChild(valSpan);
            groupEl.appendChild(row);
        }
        panel.appendChild(groupEl);
    }

    // Reveal timing group
    var revealGroup = document.createElement('div');
    revealGroup.className = 'dp-group';
    var revealTitle = document.createElement('div');
    revealTitle.className = 'dp-group-title';
    revealTitle.textContent = 'About reveal';
    revealGroup.appendChild(revealTitle);

    var REVEAL_PARAMS = [
        { key: 'initialDelay', label: 'Initial (ms)', min: 0, max: 2000, step: 50 },
        { key: 'stagger', label: 'Stagger (ms)', min: 100, max: 2000, step: 50 },
        { key: 'duration', label: 'Duration (s)', min: 0.2, max: 3, step: 0.1 },
    ];

    for (var ri = 0; ri < REVEAL_PARAMS.length; ri++) {
        var rp = REVEAL_PARAMS[ri];
        var rRow = document.createElement('div');
        rRow.className = 'dp-row';

        var rLabel = document.createElement('span');
        rLabel.className = 'dp-label';
        rLabel.textContent = rp.label;

        var rInput = document.createElement('input');
        rInput.type = 'range';
        rInput.className = 'dp-range';
        rInput.min = rp.min;
        rInput.max = rp.max;
        rInput.step = rp.step;
        rInput.value = revealConfig[rp.key];

        var rVal = document.createElement('span');
        rVal.className = 'dp-val';
        rVal.textContent = rp.step < 1 ? parseFloat(rInput.value).toFixed(1) : rInput.value;

        rInput.addEventListener('input', (function(inp, vs, key, step) {
            return function() {
                revealConfig[key] = parseFloat(inp.value);
                vs.textContent = step < 1 ? parseFloat(inp.value).toFixed(1) : inp.value;
            };
        })(rInput, rVal, rp.key, rp.step));

        rRow.appendChild(rLabel);
        rRow.appendChild(rInput);
        rRow.appendChild(rVal);
        revealGroup.appendChild(rRow);
    }

    var previewBtn = document.createElement('button');
    previewBtn.className = 'dp-btn';
    previewBtn.textContent = 'Preview';
    previewBtn.style.marginTop = '0.5rem';
    previewBtn.onclick = function() {
        var aboutBody = document.getElementById('about-body');
        if (aboutBody) {
            resetReveal(aboutBody);
            setTimeout(function() { revealAboutContent(aboutBody); }, 50);
        }
    };
    revealGroup.appendChild(previewBtn);
    panel.appendChild(revealGroup);

    // Shader scroll group
    var scrollGroup = document.createElement('div');
    scrollGroup.className = 'dp-group';
    var scrollTitle = document.createElement('div');
    scrollTitle.className = 'dp-group-title';
    scrollTitle.textContent = 'Shader scroll';
    scrollGroup.appendChild(scrollTitle);

    window.__shaderScrollStep = 0.005;
    var sRow = document.createElement('div');
    sRow.className = 'dp-row';
    var sLabel = document.createElement('span');
    sLabel.className = 'dp-label';
    sLabel.textContent = 'Max step';
    var sInput = document.createElement('input');
    sInput.type = 'range';
    sInput.className = 'dp-range';
    sInput.min = 0.0005;
    sInput.max = 0.05;
    sInput.step = 0.0005;
    sInput.value = 0.005;
    var sVal = document.createElement('span');
    sVal.className = 'dp-val';
    sVal.textContent = '0.005';
    sInput.addEventListener('input', function() {
        window.__shaderScrollStep = parseFloat(sInput.value);
        sVal.textContent = parseFloat(sInput.value).toFixed(4);
    });
    sRow.appendChild(sLabel);
    sRow.appendChild(sInput);
    sRow.appendChild(sVal);
    scrollGroup.appendChild(sRow);
    panel.appendChild(scrollGroup);

    // Actions
    var actions = document.createElement('div');
    actions.className = 'dp-actions';

    var copyBtn = document.createElement('button');
    copyBtn.className = 'dp-btn';
    copyBtn.textContent = 'Copy CSS';
    copyBtn.onclick = function() {
        var lines = [];
        for (var g = 0; g < PARAMS.length; g++) {
            for (var i = 0; i < PARAMS[g].items.length; i++) {
                var item = PARAMS[g].items[i];
                if (!item.var) continue;
                var val = getComputedStyle(document.documentElement).getPropertyValue(item.var).trim();
                lines.push('    ' + item.var + ': ' + val + ';');
            }
        }
        var text = ':root {\n' + lines.join('\n') + '\n}';
        navigator.clipboard.writeText(text).then(function() {
            copyBtn.textContent = 'Copied!';
            setTimeout(function() { copyBtn.textContent = 'Copy CSS'; }, 1500);
        });
    };

    var resetBtn = document.createElement('button');
    resetBtn.className = 'dp-btn';
    resetBtn.textContent = 'Reset';
    resetBtn.onclick = function() {
        document.documentElement.style.cssText = '';
        var inputs = panel.querySelectorAll('.dp-range');
        for (var j = 0; j < inputs.length; j++) {
            var v = getVar(inputs[j].dataset.varName);
            inputs[j].value = v;
            inputs[j].nextElementSibling.textContent = parseFloat(v).toFixed(inputs[j].step < 1 ? 2 : 0);
        }
    };

    actions.appendChild(copyBtn);
    actions.appendChild(resetBtn);
    panel.appendChild(actions);

    document.body.appendChild(panel);
}

// FPS counter via stats.js
function initFps() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/stats.js@0.17.0/build/stats.min.js';
    script.onload = function() {
        var stats = new Stats();
        stats.showPanel(0);
        stats.dom.style.cssText = 'position:fixed;bottom:0;left:0;top:auto;z-index:9999;';
        stats.dom.style.cursor = 'pointer';
        document.body.appendChild(stats.dom);
        function loop() {
            stats.begin();
            stats.end();
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    };
    document.head.appendChild(script);
}

// --- Dev Links Panel ---
// モーダル追加時はここにリンクを追加する（seo-llm.md 参照）
var DEV_LINKS = [
    { group: 'Query Links', items: [
        { label: 'About', path: './?about' },
        { label: 'Knowledge: Design Thinking', path: './?knowledge=design-thinking' },
        { label: 'Knowledge: Trust', path: './?knowledge=trust' },
        { label: 'Knowledge: Value', path: './?knowledge=value' },
        { label: 'Dev Mode', path: './?dev' },
    ]},
];

function buildLinksPanel() {
    var panel = document.createElement('div');
    panel.id = 'dev-links-panel';

    var style = document.createElement('style');
    style.textContent = [
        '#dev-links-panel { position:fixed; top:0; right:0; width:320px; height:100vh;',
        '  background:rgba(0,0,0,0.85); color:#eee; font:12px/1.6 monospace;',
        '  overflow-y:auto; z-index:9997; padding:1rem;',
        '  transform:translateX(100%); transition:transform 0.3s ease; }',
        '#dev-links-panel.open { transform:translateX(0); }',
        '#dev-links-toggle { position:fixed; top:calc(50% + 40px); right:0; z-index:9996;',
        '  writing-mode:vertical-rl; background:rgba(0,0,0,0.7); color:#aaa;',
        '  border:none; padding:0.5rem 0.25rem; cursor:pointer; font:11px monospace;',
        '  border-radius:4px 0 0 4px; }',
        '#dev-links-toggle:hover { color:#fff; }',
        '.dl-group { margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.75rem; }',
        '.dl-group-title { font-weight:bold; color:#af8; margin-bottom:0.5rem; }',
        '.dl-item { display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0; }',
        '.dl-link { color:#8cf; text-decoration:none; font-size:12px; flex:1; }',
        '.dl-link:hover { color:#fff; text-decoration:underline; }',
        '.dl-copy { background:#333; color:#aaa; border:1px solid #555; border-radius:3px;',
        '  padding:0.15rem 0.4rem; cursor:pointer; font:10px monospace; flex-shrink:0; }',
        '.dl-copy:hover { background:#444; color:#fff; }',
    ].join('\n');
    document.head.appendChild(style);

    // Toggle button
    var toggle = document.createElement('button');
    toggle.id = 'dev-links-toggle';
    toggle.textContent = 'LINKS';
    toggle.onclick = function() { panel.classList.toggle('open'); };
    document.body.appendChild(toggle);

    // Header
    var header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;';
    header.innerHTML = '<span style="color:#af8;font-size:14px;font-weight:bold;">Link Hub</span>';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'dl-copy';
    closeBtn.style.fontSize = '11px';
    closeBtn.textContent = 'Close';
    closeBtn.onclick = function() { panel.classList.remove('open'); };
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Groups
    for (var g = 0; g < DEV_LINKS.length; g++) {
        var group = DEV_LINKS[g];
        var groupEl = document.createElement('div');
        groupEl.className = 'dl-group';

        var title = document.createElement('div');
        title.className = 'dl-group-title';
        title.textContent = group.group;
        groupEl.appendChild(title);

        for (var i = 0; i < group.items.length; i++) {
            var item = group.items[i];
            var row = document.createElement('div');
            row.className = 'dl-item';

            var link = document.createElement('a');
            link.className = 'dl-link';
            link.href = item.path;
            link.textContent = item.label;
            if (item.path.indexOf('http') === 0) {
                link.target = '_blank';
                link.rel = 'noopener';
            }

            var copyBtn = document.createElement('button');
            copyBtn.className = 'dl-copy';
            copyBtn.textContent = 'Copy';
            copyBtn.dataset.url = item.path;
            copyBtn.onclick = function() {
                var btn = this;
                var url = btn.dataset.url;
                // Resolve relative URLs
                if (url.indexOf('http') !== 0) {
                    url = new URL(url, window.location.href).href;
                }
                navigator.clipboard.writeText(url).then(function() {
                    btn.textContent = 'OK';
                    setTimeout(function() { btn.textContent = 'Copy'; }, 1000);
                });
            };

            row.appendChild(link);
            row.appendChild(copyBtn);
            groupEl.appendChild(row);
        }
        panel.appendChild(groupEl);
    }

    document.body.appendChild(panel);
}

// Init on ?dev
if (new URLSearchParams(window.location.search).has('dev')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { buildPanel(); buildLinksPanel(); initFps(); });
    } else {
        buildPanel();
        buildLinksPanel();
        initFps();
    }
}
