#!/usr/bin/env bash
# main へ送る前に、一緒に公開される変更を見る。見たら印を置き、.githooks/pre-push がその印で push を通す。
#
#   bash scripts/publish-main.sh [送る枝や commit。既定は develop] [--seen]
#
# develop には、ほかのセッションが「main には送っていない（pjdhiro が決める）」と記録した変更が入っていることがある。
# develop:main をそのまま送ると、それも一緒に公開される（2026-11-09 に同じ誤りが続いた。docs/rules/corrections-k.md「繰り返し」の表）。
# 出るもの：origin/main との差のうち、サイトに出るファイルに触る commit・変わるファイル・記録の「main には送っていない」の行。
#
# 印（2026-11-10・#111）：
#   - 置き場は worktree ごと（git rev-parse --git-dir の下）。別の worktree のセッションが置いた印では通らない。
#   - 中身は「送る commit の番号・置いた時刻」。pre-push は、push する commit と番号が合い、置いてから 30 分以内のときだけ通す。
#   - 今の main の先頭より後に書かれた記録に「main には送っていない」の行があるときは、印を置かずに 1 で終わる。
#     その行が自分の送る変更のことでないと確かめたうえで送るなら、--seen を付けてもう一度走らせる。
# 仕組みで止まらないもの：git push --no-verify、GitHub の上での操作（ウェブの merge・gh pr merge・gh api）。docs/PUBLISH-CHECK.md。
# git の通信（fetch）があるので、サンドボックスの外で走らせる。
set -u
ref=develop
seen=0
for a in "$@"; do
  case "$a" in
    --seen) seen=1 ;;
    -*) echo "知らない引数：$a" >&2; exit 2 ;;
    *) ref="$a" ;;
  esac
done
common="$(cd "$(git rev-parse --git-common-dir)" && pwd)"
gitdir="$(cd "$(git rev-parse --git-dir)" && pwd)"
stamp="$gitdir/PUBLISH_MAIN_CHECKED"
# テストのときだけ：PUBLISH_MAIN_NO_FETCH=1 で fetch を飛ばし、PUBLISH_MAIN_SESSION_DIR で記録の置き場を替える
if [ "${PUBLISH_MAIN_NO_FETCH:-}" != 1 ]; then
  git fetch -q origin main || { echo "origin/main を取れない（サンドボックスの外で走らせる）" >&2; exit 1; }
fi
sha="$(git rev-parse --verify "$ref^{commit}")" || exit 1
# .github/workflows/pages.yml が出すもの（pd の wiki は pd/wiki を pd/quartz で組む）
PATHS=(pd/index.html pd/src pd/content pd/assets pd/reader pd/wiki pd/quartz pd/robots.txt pd/llms.txt pd/llms-full.txt pd/sitemap.xml pd/favicon.ico as ks cs)
echo "## main に出る commit（origin/main..$ref のうち、サイトに出るファイルに触るもの）"
git log --no-merges --format='%h %ad %s' --date=format:'%m-%d %H:%M' origin/main.."$sha" -- "${PATHS[@]}" | cut -c1-150
echo
echo "## 変わるファイル（今の main と比べて。main で戻した変更は上の一覧に出ないので、実際に出る差はこちらで見る）"
git diff --stat origin/main "$sha" -- "${PATHS[@]}" | tail -40
echo

# 記録の「main には送っていない」。名前の日付でなく、書かれた時刻で分ける（前の日の名前の記録に書き足した分も出す）。
#   新しい：今の main の先頭の時刻より後に書かれた記録。まだ送られていない変更のことでありうる。
#   古い　：それより前に書かれ、直近 3 日のうちに書かれた記録。そのあと main が進んでいるので、古い知らせかもしれない。
dir="${PUBLISH_MAIN_SESSION_DIR:-$(dirname "$common")/.cache/session}"
main_time="$(git log -1 --format=%ct origin/main)"
now="$(date +%s)"
pat='main (に|へ)(は)?(まだ)?(送っていない|送らない|送らなかった)'
fresh=""
old=""
for f in "$dir"/log-*.md; do
  [ -e "$f" ] || continue
  m="$(stat -f %m "$f" 2>/dev/null || stat -c %Y "$f")"
  [ $((now - m)) -le $((3 * 86400)) ] || continue
  hits="$(grep -n -E "$pat" "$f" | head -3 | cut -c1-200)"
  [ -n "$hits" ] || continue
  block="$(basename "$f")"$'\n'"$(printf '%s\n' "$hits" | sed 's/^/    /')"
  if [ "$m" -gt "$main_time" ]; then fresh+="$block"$'\n'; else old+="$(basename "$f")"$'\n'; fi
done
echo "## 記録の「main には送っていない」：今の main の先頭（$(git log -1 --format='%h %ad' --date=format:'%m-%d %H:%M' origin/main)）より後に書かれた記録"
if [ -n "$fresh" ]; then printf '%s' "$fresh"; else echo "（無し）"; fi
echo
if [ -n "$old" ]; then
  echo "## それより前に書かれた記録（直近 3 日。そのあと main が進んでいるので、古い知らせかもしれない）"
  printf '%s' "$old" | sed 's/^/    /'
  echo
fi

echo "公開の判断を待っている別のセッションの変更が入っていれば、そのまま送らない。origin/main から枝を切り、"
echo "自分の commit だけを載せて、その枝でもう一度これを走らせる（docs/rules/decisions.md・2026-11-09）。迷えば pjdhiro に聞く。"
if [ -n "$fresh" ] && [ "$seen" -ne 1 ]; then
  rm -f "$stamp"
  echo
  echo "見た印は置いていない：上の記録に「main には送っていない」がある。" >&2
  echo "その行が、いま送る変更（上の commit の一覧）のことでないと確かめたら：bash scripts/publish-main.sh $ref --seen" >&2
  exit 1
fi
echo "$sha $now" > "$stamp"
echo "見た印を置いた（${sha:0:7}・この worktree だけ・30 分のあいだ）。送るなら：git push origin $ref:main"
