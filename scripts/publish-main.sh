#!/usr/bin/env bash
# main へ送る前に、一緒に公開される変更を見る。見たら印を置き、.githooks/pre-push がその印で push を通す。
#
#   bash scripts/publish-main.sh [送る枝や commit。既定は develop]
#
# develop には、ほかのセッションが「main には送っていない（pjdhiro が決める）」と記録した変更が入っていることがある。
# develop:main をそのまま送ると、それも一緒に公開される（2026-11-09 に同じ誤りが続いた。docs/rules/corrections.md「繰り返し」の表）。
# 出るもの：origin/main との差のうち、サイトに出るファイルに触る commit・変わるファイル・その日の記録の「main には送っていない」の行。
# git の通信（fetch）があるので、サンドボックスの外で走らせる。
set -u
ref="${1:-develop}"
common="$(cd "$(git rev-parse --git-common-dir)" && pwd)"
git fetch -q origin main || { echo "origin/main を取れない（サンドボックスの外で走らせる）" >&2; exit 1; }
sha="$(git rev-parse --verify "$ref^{commit}")" || exit 1
# .github/workflows/pages.yml が出すもの（pd の wiki は pd/wiki から作る）
PATHS=(pd/index.html pd/src pd/content pd/assets pd/reader pd/wiki pd/robots.txt pd/llms.txt pd/llms-full.txt pd/sitemap.xml pd/favicon.ico as ks cs)
echo "## main に出る commit（origin/main..$ref のうち、サイトに出るファイルに触るもの）"
git log --no-merges --format='%h %ad %s' --date=format:'%m-%d %H:%M' origin/main.."$sha" -- "${PATHS[@]}" | cut -c1-150
echo
echo "## 変わるファイル（今の main と比べて。main で戻した変更は上の一覧に出ないので、実際に出る差はこちらで見る）"
git diff --stat origin/main "$sha" -- "${PATHS[@]}" | tail -40
echo
echo "## その日の記録の「main には送っていない」"
grep -n -E 'main (に|へ)(は)?(まだ)?送っていない' "$(dirname "$common")"/.cache/session/log-"$(date +%Y%m%d)"-*.md 2>/dev/null | sed 's#^.*/log-#log-#' | cut -c1-200
echo
echo "公開の判断を待っている別のセッションの変更が入っていれば、そのまま送らない。origin/main から枝を切り、"
echo "自分の commit だけを載せて、その枝でもう一度これを走らせる（docs/rules/decisions.md・2026-11-09）。迷えば pjdhiro に聞く。"
echo "$sha" > "$common/PUBLISH_MAIN_CHECKED"
echo "見た印を置いた（$sha）。送るなら：git push origin $ref:main"
