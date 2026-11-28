// blog/ の Menu。行き先と開き方を、pd/ のサイト（HOME・読み物）の Menu にそろえる。見た目はブログの bl-menu で作る
// （pjdhiro 2026-11-28「メニューを pdt repoのデザインに寄せたい」「素朴なblogの感じは好きなので、navi類だけをまず機能させたい」）。
// 行き先は、サイトの Menu の正本（pd/src/content/site-data.mjs の getMenuItems・context "reader"）から写した。
// サイトの Menu の項目を変えたら、ここの ITEMS も直す。pd/ のファイルは読み込まない。
// ページ側に [data-bl-menu-toggle] のボタンと <nav class="bl-menu" id="bl-menu" hidden> を置く。
(function () {
  // href はサイトの根（blog/ の一つ上）から見たパス
  var ITEMS = [
    { label: "サイト" },
    { href: "", text: "HOME" },
    { href: "wiki/", text: "WIKI" },
    { href: "ks/", text: "欠損駆動思考" },
    { href: "cs/", text: "創造とは" },
    { href: "as/", text: "意識とは" },
    { href: "reader/about.html", text: "このサイトについて" },
    { href: "reader/love-driven-dev.html", text: "Love駆動開発と呼びたいもの β" },
    { label: "ツール" },
    { href: "reader/stages-screener.html", text: "ものの見方の広さスクリーナー" }
  ];

  // このファイルは blog/design-system/ にあるので、サイトの根は二つ上
  var script = document.currentScript;
  var root = new URL("../../", script ? script.src : location.href).pathname;

  function render(menu) {
    menu.textContent = "";
    ITEMS.forEach(function (item, i) {
      var el;
      if (item.label) {
        if (i > 0) menu.appendChild(document.createElement("hr"));
        el = document.createElement("span");
        el.className = "bl-menu__label";
        el.textContent = item.label;
      } else {
        el = document.createElement("a");
        el.href = root + item.href;
        el.textContent = item.text;
      }
      menu.appendChild(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("bl-menu");
    var btn = document.querySelector("[data-bl-menu-toggle]");
    if (!menu || !btn) return;
    render(menu);

    function isOpen() { return !menu.hidden; }
    function setOpen(open) {
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    }

    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      setOpen(!isOpen());
    });
    document.addEventListener("click", function (event) {
      if (isOpen() && !event.target.closest("#bl-menu")) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        btn.focus();
      }
    });
  });
})();
