// Reader 理解度テスト — 任意の自己チェック（関門にしない。答えなくても・間違えても読み進められる）。
// 各セクション直後にその都度置く（DESIGN-RULES §12）。複数の [data-quiz] ブロックに対応。
// DESIGN-RULES §0a 準拠: tokens と glow 体系の上にのみ載せる。依存ライブラリなし（vanilla）。
// 正本 MD 側に静的マークアップ（質問・選択肢・<details>答えと解説）があり、本モジュールは
// 選択肢をボタン化して「押すとその場で答え合わせ」を足すだけ。no-JS でも同じ内容が読める。

function enhanceQuestion(q) {
    const answer = q.getAttribute('data-quiz-answer');
    const choices = q.querySelectorAll('.quiz-choices li');
    const details = q.querySelector('details.quiz-explain');
    if (!answer || choices.length === 0) return;

    const st = document.createElement('p');
    st.className = 'quiz-status';
    st.setAttribute('aria-live', 'polite');
    if (details) q.insertBefore(st, details);
    else q.appendChild(st);

    choices.forEach(li => {
        const key = li.getAttribute('data-choice');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-choice';
        btn.innerHTML = li.innerHTML;
        btn.addEventListener('click', () => {
            q.querySelectorAll('.quiz-choice').forEach(b => b.classList.remove('is-correct', 'is-wrong'));
            if (key === answer) {
                btn.classList.add('is-correct');
                st.textContent = '○ そのとおりです。下に解説を開きました。';
                if (details) details.open = true;
            } else {
                btn.classList.add('is-wrong');
                st.textContent = '△ この読み物の答えとは違います（そう読めるのも自然です）。下の「答えと解説」にどうぞ。';
            }
        });
        li.textContent = '';
        li.appendChild(btn);
    });
}

function init() {
    document.querySelectorAll('[data-quiz]').forEach(root => {
        try {
            root.querySelectorAll('.quiz-q').forEach(enhanceQuestion);
            root.classList.add('quiz-ready');
        } catch (err) {
            console.warn('reader-quiz enhance failed:', err);
        }
    });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
