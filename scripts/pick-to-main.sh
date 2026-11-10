#!/usr/bin/env bash
# 自分の commit だけを origin/main の上に載せた枝を、作業ツリーを使わずに作る。
#
#   bash scripts/pick-to-main.sh <作る枝の名前> <commit>...
#
# develop に、公開の判断を待っている別のセッションの変更が入っているとき、develop:main をそのまま送らず、
# 自分の commit だけを main へ送る（docs/rules/decisions.md・2026-11-09）。そのための枝を作る。
# worktree で `git switch -c … origin/main` と枝を切り替えると、サンドボックスの中では `.claude/` で止まり、
# 作業ツリーが途中まで main の形になる（2026-11-10・docs/rules/corrections-k.md の K1「繰り返し」）。
# ここでは一時の index で木を組み、commit を作り、枝の名前だけを置くので、作業ツリーにも今の枝にも触らない。
#
# 作ったあと：bash scripts/publish-main.sh <作る枝の名前> で一緒に出るものを見て、git push origin <作る枝の名前>:main。
# 送ったら、本体の develop に origin/main を取り込み（git -C <本体> merge origin/main を単独で）、枝を消す。
# 載せられない（main と食い違う）ときは、何も変えずに 1 で終わる。
# origin/main は、手元の今のもの（先に git fetch origin main を回す。publish-main.sh も fetch する）。
# テストのときだけ：PICK_BASE で土台を替える（既定は origin/main）。
set -eu
if [ $# -lt 2 ]; then
  echo "使い方：bash scripts/pick-to-main.sh <作る枝の名前> <commit>..." >&2
  exit 2
fi
name="$1"; shift
case "$name" in
  develop|main) echo "develop・main は作る枝にしない" >&2; exit 2 ;;
esac
base="$(git rev-parse --verify "${PICK_BASE:-origin/main}^{commit}")"
idx="$(mktemp "${TMPDIR:-/tmp}/pick-to-main.XXXXXX")"
trap 'rm -f "$idx"' EXIT
GIT_INDEX_FILE="$idx" git read-tree "$base"
parent="$base"
for c in "$@"; do
  sha="$(git rev-parse --verify "$c^{commit}")"
  if [ "$(git rev-list --parents -n 1 "$sha" | wc -w)" -ne 2 ]; then
    echo "$c は親が一つの commit でない（merge は載せない）" >&2; exit 1
  fi
  if ! git diff --binary "$sha^" "$sha" | GIT_INDEX_FILE="$idx" git apply --cached; then
    echo "$c を $(git rev-parse --short "$base") の上に載せられない（main と食い違う）。何も変えていない" >&2; exit 1
  fi
  tree="$(GIT_INDEX_FILE="$idx" git write-tree)"
  parent="$(
    GIT_AUTHOR_NAME="$(git log -1 --format=%an "$sha")" \
    GIT_AUTHOR_EMAIL="$(git log -1 --format=%ae "$sha")" \
    GIT_AUTHOR_DATE="$(git log -1 --format=%aI "$sha")" \
    git log -1 --format=%B "$sha" | git commit-tree "$tree" -p "$parent"
  )"
done
git branch -f "$name" "$parent"
echo "枝 $name を作った（$(git rev-parse --short "$base") の上に $# 本）："
git log --oneline "$base..$name"
echo "次：bash scripts/publish-main.sh $name"
