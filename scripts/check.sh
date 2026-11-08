#!/usr/bin/env bash
# サイトの検査をまとめて走らせる。手元でも CI（.github/workflows/check.yml）でも同じものを使う。
#
#   bash scripts/check.sh
#
# 一つでも落ちたら 1 で終わる。機械で白黒がつき、公開するサイトが壊れていないかを見るものだけを入れる。
# 何を入れ、何を手で回し、何をまだ作っていないかは docs/TESTING.md。候補を挙げるだけの点検（言い訳の地の文・
# 帰属の監査）は人が判断するものなので、ここには入れない。
set -u

ROOT=$(git rev-parse --show-toplevel)
cd "$ROOT" || exit 2

failed=()
run() {
  local name=$1; shift
  echo "== $name"
  if "$@"; then echo "   ok"; else echo "   失敗：$name"; failed+=("$name"); fi
}

# 今までの四つの repo（転送だけ・非公開のアーカイブ）を前提にした参照。公開ファイルの GitHub・raw・api・Pages の URL、
# 今の repo の GitHub で git に無いファイル（原典の PDF など）へのリンク、repo 名の決め打ち、スクリプトの兄弟の並び。
# 記録（knowledge・docs・wiki ほか）は経緯として残すので見ない。中身は scripts/check-old-repo-refs.mjs。
run "今までの repo を前提にした参照" node scripts/check-old-repo-refs.mjs
run "pd：repo をまたぐ URL" bash -c 'cd pd && bash scripts/check-cross-repo-urls.sh'
run "pd：読み物の内部アンカー" bash -c 'cd pd && node scripts/reader-anchor-check.mjs'
run "pd：wiki の孤立ページ・不在の出典・旧用語" bash -c 'cd pd && node scripts/wiki-lint.mjs --check --quiet'
run "pd：wiki が読めない原典を出典にしていない" bash -c 'cd pd && node scripts/wiki-access-lint.mjs'
run "as：テスト" bash -c 'cd as && node --test tests/*.test.mjs'
run "ks：config の整合" bash -c 'cd ks && node tests/config-consistency.test.js'
run "ks：config の export" bash -c 'cd ks && node --experimental-vm-modules tests/config-exports.test.js'
run "ks：devlog の移動と深いリンク" bash -c 'cd ks && node tests/devlog-navigation.test.js && node tests/offcanvas-deeplink.test.js'
run "ks：devlog の日英" bash -c 'cd ks && node scripts/validate-devlog-i18n.mjs'
# 創造とはの、分野ごとの照合の記録（cs/evidence/evidence-Dxx-*.md）。見るものは docs/cs-review/README.md「記録の品質の点検」。
run "cs：照合の記録" node scripts/check-cs-evidence.mjs

# 公開するページ・データ・読み物の正本に、文字化け（U+FFFD）が無いか。scripts/ の中の検査の文字は除く。
# 今までの project-design の ci.yml の文字化けの検査の考え方を継いだ（docs/TESTING.md）。
mojibake() {
  local hits
  hits=$(git grep -l -I $'\xef\xbf\xbd' -- '*.html' '*.json' '*.js' '*.css' 'pd/content/' 'pd/wiki/' 'pd/knowledge/' 'as/assets/' 'ks/content/' ':!*/scripts/*')
  [ -z "$hits" ] || { echo "$hits"; return 1; }
}
run "公開するファイルの文字化け" mojibake

echo
if [ ${#failed[@]} -gt 0 ]; then
  echo "落ちた検査：${failed[*]}"
  exit 1
fi
echo "すべて通った"
