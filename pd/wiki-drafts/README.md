# wiki の下書きの置き場

公開の wiki（`pd/wiki/`）から外した頁を置く。ここは Quartz が組まず、Pages にも出ない（`.github/workflows/pages.yml` は `pd/wiki-out/` だけを出す）。消さずに残してあるのは、作り直すときの手がかりにするため。

## 外した理由（2026-11-10・Issue #111）

決まり：公開文に載せるのは、原典の本文を読めたものだけ（`docs/rules/sources.md` §3-3）。

- **原典の本文を読まずに書いた頁**：頁が自分で「確立した学術的理解に基づいて記述した」「本文は未読」などと断っているもの、手元の PDF が前付けだけのもの（Haken 1983）、指している PDF が手元に無いもの（Winter & Chambon 1986）。
- **同じ原典の二重の頁**：台帳の同じ行（`manifest_id`）を指す頁が二枚あったものの、古いほう。残した頁の `aliases` に、外した頁の名前を入れてある。

## 戻し方

外した頁の多くは、cs の精読ノート（`cs/knowledge/source-notes/`）が、あとから原典の本文を読んでいる。`.claude/skills/wiki-compile/SKILL.md` の手順で、精読ノートを材料に `pd/wiki/sources/` に新しく作る（ここの頁を書き足して戻さない。記憶から書いた文が混ざるため）。作り直したら、ここの古い頁は消してよい。

`node pd/scripts/wiki-gen-check.mjs` が、精読ノートがあるのに wiki の出典ページが無い原典を並べる。
