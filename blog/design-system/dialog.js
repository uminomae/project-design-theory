// 開く窓（モーダル）。
//   開くボタン：<button class="bl-open-dialog" data-bl-open="窓の id">
//   窓：<dialog class="bl-dialog" id="窓の id"> の中に <button class="bl-dialog__close" data-bl-close>
// URL の # が窓の id なら、開いた状態で出す（解説への直接のリンクに使う）。
(function () {
  function open(dlg) {
    if (!dlg || dlg.open) return;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    var body = dlg.querySelector(".bl-dialog__body");
    if (body) dlg.scrollTop = 0;
  }
  function close(dlg) {
    if (!dlg) return;
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bl-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        open(document.getElementById(btn.getAttribute("data-bl-open")));
      });
    });
    document.querySelectorAll("dialog.bl-dialog").forEach(function (dlg) {
      dlg.querySelectorAll("[data-bl-close]").forEach(function (b) {
        b.addEventListener("click", function () { close(dlg); });
      });
      // 窓の外（背景）を押したら閉じる
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) close(dlg);
      });
      dlg.addEventListener("close", function () {
        if (location.hash === "#" + dlg.id) history.replaceState(null, "", location.pathname + location.search);
      });
    });
    function fromHash() {
      var id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      var target = document.getElementById(id);
      if (target && target.matches("dialog.bl-dialog")) open(target);
    }
    fromHash();
    window.addEventListener("hashchange", fromHash);
  });
})();
