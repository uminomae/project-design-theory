#!/usr/bin/env bash
# SessionStart hook：古い wiki のページと、出典ノートがあるのに出典ページが無い原典を、セッションに知らせる。
# 今までの project-design の #77（inbox）と wiki-gen-check.sh に当たる（2026-11-10・pjdhiro「C 両方入れる」）。
# 中身は pd/scripts/wiki-stale-check.mjs --session-start --json。何も無ければ何も出さない。いつも 0 で終わる。
# 作り直すのは司令塔が別のセッションに出す（.claude/skills/wiki-compile/SKILL.md「セッションの始めの知らせ」）。
# 同じ知らせは scripts/session-digest.sh の終わりにも出る。
root="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null)}"
[ -f "$root/pd/scripts/wiki-stale-check.mjs" ] || exit 0
cat >/dev/null
node "$root/pd/scripts/wiki-stale-check.mjs" --session-start --json 2>/dev/null || true
exit 0
