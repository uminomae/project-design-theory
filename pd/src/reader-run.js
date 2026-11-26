/* reader-run.js — 読み物の「その場で動くコード」（pjdhiro 2026-11-26・付箋 i20261126042310ij7
   「pythonなりjsなり、その場で動くプログラミングコードを書いたほうが優しくないかな？
    誰でも動かせるように、また、エディタなどで再現できるように」）。

   正本の MD では、JavaScript のコードを次の形で置く（空行で区切る。pandoc が <pre><code> にする）：

     <div class="code-run">

     ```
     console.log(1 + 1);
     ```

     </div>

   このスクリプトは、.code-run の中の最初の <pre> を、書き換えられる欄と「実行」「元に戻す」
   「コピー」のボタンに置き換える。console.log の出力は欄の下に出す。JS が動かない所では、
   <pre> のまま読めて、写してエディタやブラウザのコンソールで動かせる。依存ライブラリなし。 */

(function () {
  var hosts = [].slice.call(document.querySelectorAll('.code-run'));
  hosts.forEach(function (host) {
    var pre = host.querySelector('pre');
    if (!pre) return;
    var original = pre.textContent.replace(/\n+$/, '');

    var box = document.createElement('textarea');
    box.className = 'code-run__code';
    box.spellcheck = false;
    box.setAttribute('aria-label', 'JavaScript のコード（書き換えて実行できる）');
    box.value = original;
    box.rows = original.split('\n').length + 1;

    var bar = document.createElement('div');
    bar.className = 'code-run__bar';
    function button(label, fn) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'code-run__btn';
      b.textContent = label;
      b.addEventListener('click', fn);
      bar.appendChild(b);
      return b;
    }

    var out = document.createElement('pre');
    out.className = 'code-run__out';
    out.setAttribute('aria-live', 'polite');
    out.textContent = '（「実行」をクリックすると、ここに結果が出ます）';

    function fmt(v) {
      if (typeof v === 'string') return v;
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    }
    function run() {
      var lines = [];
      var con = {
        log: function () { lines.push([].map.call(arguments, fmt).join(' ')); }
      };
      con.info = con.warn = con.error = con.log;
      try {
        /* 読者がこの欄に書いたコードを、読者のブラウザの中で動かす */
        new Function('console', box.value)(con);
      } catch (e) {
        lines.push('エラー：' + e.message);
      }
      out.textContent = lines.length ? lines.join('\n') : '（出力はありませんでした）';
    }

    var runBtn = button('実行', run);
    runBtn.classList.add('code-run__btn--main');
    button('元に戻す', function () { box.value = original; });
    var copyBtn = button('コピー', function () {
      var done = function () { copyBtn.textContent = 'コピーしました'; setTimeout(function () { copyBtn.textContent = 'コピー'; }, 1500); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(box.value).then(done, function () { box.select(); });
      } else {
        box.select();
      }
    });

    var wrap = pre.closest('.sourceCode') || pre;
    wrap.parentNode.replaceChild(box, wrap);
    box.insertAdjacentElement('afterend', bar);
    bar.insertAdjacentElement('afterend', out);
  });
})();
