// 一覧のページの絞り込み。カードは HTML に書いてあり、これは並べ替えと出し入れだけをする。
//   カード：<li data-date="YYYY-MM-DD" data-stage="種|推敲中|まとめ|（空）" data-tags="タグ1 タグ2" data-text="題 概要">
//   URL：?stage=状態&tag=タグ&q=語&sort=new|old（選んだ状態をリンクで渡せる）
// script が動かなくても、カードは新しい順で全部見える。
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var list = document.querySelector("[data-bl-cards]");
    if (!list) return;
    var items = Array.prototype.slice.call(list.children);
    var q = document.querySelector("[data-bl-q]");
    var sort = document.querySelector("[data-bl-sort]");
    var chipsBox = document.querySelector("[data-bl-chips]");
    var stagesBox = document.querySelector("[data-bl-stages]");
    var STAGES = ["種", "推敲中", "まとめ"];
    var status = document.querySelector("[data-bl-status]");
    var empty = document.querySelector("[data-bl-empty]");

    function tagsOf(li) { return (li.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean); }

    // タグの札を、記事についているタグから作る（多い順・同じ数なら名前順）
    var count = {};
    items.forEach(function (li) { tagsOf(li).forEach(function (t) { count[t] = (count[t] || 0) + 1; }); });
    var tags = Object.keys(count).sort(function (a, b) { return count[b] - count[a] || a.localeCompare(b, "ja"); });

    // 状態の札（記事に出てくる状態だけ、種 → 推敲中 → まとめ の順）
    var stageCount = {};
    items.forEach(function (li) { var s = li.getAttribute("data-stage"); if (s) stageCount[s] = (stageCount[s] || 0) + 1; });
    var stages = STAGES.filter(function (s) { return stageCount[s]; });

    var params = new URLSearchParams(location.search);
    var state = {
      stage: params.get("stage") || "",
      tag: params.get("tag") || "",
      q: params.get("q") || "",
      sort: params.get("sort") === "old" ? "old" : "new"
    };
    if (state.tag && !count[state.tag]) state.tag = "";
    if (state.stage && !stageCount[state.stage]) state.stage = "";

    function stageChip(name, n) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "bl-chip bl-chip--stage";
      b.setAttribute("data-stage", name);
      b.textContent = name;
      var c = document.createElement("span");
      c.className = "bl-chip__count";
      c.textContent = n;
      b.appendChild(c);
      b.addEventListener("click", function () {
        state.stage = state.stage === name ? "" : name;
        render(true);
      });
      return b;
    }
    if (stagesBox) {
      if (stages.length) stages.forEach(function (s) { stagesBox.appendChild(stageChip(s, stageCount[s])); });
      else stagesBox.hidden = true;
    }

    function chip(name, label, n) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "bl-chip";
      b.setAttribute("data-tag", name);
      b.textContent = label;
      if (n != null) {
        var c = document.createElement("span");
        c.className = "bl-chip__count";
        c.textContent = n;
        b.appendChild(c);
      }
      b.addEventListener("click", function () {
        state.tag = state.tag === name ? "" : name;
        render(true);
      });
      return b;
    }
    if (chipsBox) {
      chipsBox.appendChild(chip("", "すべて", items.length));
      tags.forEach(function (t) { chipsBox.appendChild(chip(t, "#" + t, count[t])); });
    }

    if (q) {
      q.value = state.q;
      q.addEventListener("input", function () { state.q = q.value; render(true); });
    }
    if (sort) {
      sort.value = state.sort;
      sort.addEventListener("change", function () { state.sort = sort.value; render(true); });
    }

    // 記事の中のタグのリンク（?tag=）を、ページを読み直さずに効かせる
    list.addEventListener("click", function (e) {
      var a = e.target.closest("a.bl-tag");
      if (!a) return;
      var t = new URL(a.href, location.href).searchParams.get("tag");
      if (t == null) return;
      e.preventDefault();
      state.tag = t;
      render(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function render(push) {
      var words = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
      var sorted = items.slice().sort(function (a, b) {
        var d = (a.getAttribute("data-date") || "").localeCompare(b.getAttribute("data-date") || "");
        return state.sort === "old" ? d : -d;
      });
      var shown = 0;
      sorted.forEach(function (li) {
        var text = ((li.getAttribute("data-text") || "") + " " + tagsOf(li).join(" ")).toLowerCase();
        var ok = (!state.stage || li.getAttribute("data-stage") === state.stage) &&
          (!state.tag || tagsOf(li).indexOf(state.tag) !== -1) &&
          words.every(function (w) { return text.indexOf(w.replace(/^#/, "")) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
        list.appendChild(li);
      });
      if (chipsBox) {
        chipsBox.querySelectorAll(".bl-chip").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b.getAttribute("data-tag") === state.tag));
        });
      }
      if (stagesBox) {
        stagesBox.querySelectorAll(".bl-chip").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b.getAttribute("data-stage") === state.stage));
        });
      }
      if (status) {
        var label = (state.stage ? state.stage + " の" : "") + (state.tag ? "#" + state.tag + " の" : "");
        status.textContent = (label ? label + "記事 " : "記事 ") + shown + " 件";
      }
      if (empty) empty.hidden = shown !== 0;
      if (push) {
        var p = new URLSearchParams();
        if (state.stage) p.set("stage", state.stage);
        if (state.tag) p.set("tag", state.tag);
        if (state.q) p.set("q", state.q);
        if (state.sort === "old") p.set("sort", "old");
        var s = p.toString();
        history.replaceState(null, "", location.pathname + (s ? "?" + s : ""));
      }
    }
    render(false);
  });
})();
