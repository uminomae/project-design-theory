// blog/ の見た目の切り替え（明るい・暗い）。選んだものはこの端末にだけ覚える。
// ボタンは <button class="bl-theme-toggle" data-bl-theme-toggle>。
(function () {
  var KEY = "bl-theme";
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label(btn) {
    btn.textContent = current() === "dark" ? "明るく" : "暗く";
    btn.setAttribute("aria-label", current() === "dark" ? "明るい見た目にする" : "暗い見た目にする");
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-bl-theme-toggle]").forEach(function (btn) {
      label(btn);
      btn.addEventListener("click", function () {
        var next = current() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
        document.querySelectorAll("[data-bl-theme-toggle]").forEach(label);
      });
    });
  });
})();
