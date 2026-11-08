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

# 今までの repo（転送だけ・非公開のアーカイブ）の GitHub を、公開ファイルが指していないか。
# 記録（knowledge・docs・wiki ほか）は経緯として残すので見ない。-theory・-archive は今の repo とアーカイブ。
old_repo_links() {
  local hits
  hits=$(git ls-files 'pd/*' 'as/*' 'ks/*' 'cs/*' \
    | grep -E '\.(html|js|mjs|txt|xml|json)$' \
    | grep -vE '/(knowledge|docs|evidence|transform|wiki|vendor|node_modules|quartz|tests)/' \
    | grep -vE '^[a-z]+/scripts/' \
    | { cat; git ls-files 'pd/scripts/*template.html' 'cs/scripts/*template.html'; } \
    | xargs grep -nE 'github\.com/uminomae/(project-design|creation-space|awareness-space|kesson-space)([^-a-zA-Z]|$)' 2>/dev/null)
  [ -z "$hits" ] && return 0
  echo "$hits"; return 1
}

run "旧 repo の GitHub へのリンク" old_repo_links
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
