#!/usr/bin/env bash
# サイトの検査をまとめて走らせる。手元でも CI（.github/workflows/check.yml）でも同じものを使う。
#
#   bash scripts/check.sh
#
# 一つでも落ちたら 1 で終わる。今までの repo の ci.yml・test.yml（docs/harness-pending/）の代わりに、
# 今ある検査だけをこの repo のパスで呼ぶ。候補を挙げるだけの点検（言い訳の地の文・帰属の監査）は、
# 人が判断するものなので、ここには入れない（docs/harness-pending/README.md）。
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
run "as：テスト" bash -c 'cd as && node --test tests/*.test.mjs'
run "ks：config の整合" bash -c 'cd ks && node tests/config-consistency.test.js'
run "ks：config の export" bash -c 'cd ks && node --experimental-vm-modules tests/config-exports.test.js'

echo
if [ ${#failed[@]} -gt 0 ]; then
  echo "落ちた検査：${failed[*]}"
  exit 1
fi
echo "すべて通った"
