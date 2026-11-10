#!/usr/bin/env bash
# 公開ページの点検（.claude/skills/public-page-review/SKILL.md）を通したかの印。
#
#   bash scripts/public-page-review.sh          commit しようとしている公開ページと、見る節を出す
#   bash scripts/public-page-review.sh --done   表を通したあとに走らせ、今の index に印を置く
#
# .githooks/pre-commit が、公開ページを含む commit を、今の index と同じ印が無ければ止める。
# 印は worktree ごと（git rev-parse --git-dir の下）で、中身は index の tree の番号と置いた時刻。
# 印を置いたあとに git add で中身を変えると、番号が合わなくなり、もう一度通す。60 分を超えた印も通さない。
# 印は「走らせた」ことしか確かめられない。表を読まずに --done を走らせない（docs/PUBLISH-CHECK.md と同じ考え）。
# 経緯：pjdhiro 2026-11-10「公開ページを作る際に、必ずチェックしたい」「hook も足して」。
set -u
mode=list
case "${1:-}" in
  --done) mode=done ;;
  --staged-public) mode=names ;;   # pre-commit が使う：公開ページの名前だけ
  "") ;;
  *) echo "知らない引数：$1" >&2; exit 2 ;;
esac
gitdir="$(cd "$(git rev-parse --git-dir)" && pwd)"
stamp="$gitdir/PUBLIC_PAGE_REVIEWED"

# サイトに出るもの（.github/workflows/pages.yml）と、読み物の正本。道具・テスト・wiki の作業の頁は外す
public_files() {
  git diff --cached --name-only --diff-filter=ACMRD -z \
    | tr '\0' '\n' \
    | grep -E '^(pd/(index\.html|src/|content/|assets/|reader/|wiki/|robots\.txt|llms\.txt|llms-full\.txt|sitemap\.xml)|pd/knowledge/research/[^/]+/READER-[^/]*\.md$|as/|ks/|cs/)' \
    | grep -v -E '(^|/)(scripts|tests|node_modules)/|^pd/wiki/(log\.md|health/)|\.test\.[a-z]+$|(^|/)package(-lock)?\.json$'
}

files="$(public_files)"
if [ "$mode" = names ]; then
  printf '%s' "$files"
  exit 0
fi
if [ -z "$files" ]; then
  echo "commit しようとしている中に、公開ページは無い。"
  [ "$mode" = done ] && rm -f "$stamp"
  exit 0
fi

if [ "$mode" = done ]; then
  tree="$(git write-tree)" || exit 1
  echo "$tree $(date +%s)" > "$stamp"
  echo "印を置いた（index ${tree:0:7}）。このまま commit できる。git add で中身を変えたら、もう一度通す。"
  exit 0
fi

echo "## commit しようとしている公開ページ"
printf '%s\n' "$files" | sed 's/^/  /'
echo
echo "## 見る節（.claude/skills/public-page-review/SKILL.md）"
echo "  §1 機械・§2 載せてはいけないもの：毎回"
has() { printf '%s\n' "$files" | grep -q -E "$1"; }
if has '^pd/reader/|READER-.*\.md$|^pd/wiki/|\.md$|\.html$'; then echo "  §3 中身：文を書いた・直したとき"; fi
if has '\.html$|\.md$|\.pdf$'; then echo "  §4 リンクと行き先"; fi
if has '\.(html|css|js|mjs|glsl|frag|vert)$|/src/'; then echo "  §5 画面（3001 を PC とスマートフォンの幅で開く）"; fi
if has '^pd/(index\.html|reader/|llms|sitemap)|index\.html$'; then echo "  §6 ページの外側（meta・要約・noindex・日付）"; fi
echo
echo "表を通し、当たったものを直してから：bash scripts/public-page-review.sh --done"
