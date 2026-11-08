# pjdhiro-dir.sh — source して使う。pjdhiro の repo の場所を決める（cs・ks のスクリプトが使う）。
#
# 今までの repo（creation-space・kesson-space）は pjdhiro の隣にあったので、`../pjdhiro` や
# 作業ディレクトリからの `pjdhiro` で足りた。この repo では pjdhiro は repo の隣（~/dev/pd/pjdhiro）にあり、
# cs/・ks/ からの深さも、worktree の中からの深さも違う。
#
# PJDHIRO_DIR があればそれを使い、無ければ渡したディレクトリから上へ順に pjdhiro/<目印> を探す。
# 目印は既定で assets（cs なら assets/creation、ks なら assets/kesson を渡すとよい）。
# 見つからなければ、この repo の隣（<repo>/../pjdhiro）を返す。呼ぶ側が、無いときの扱いを決める。
#
#   . "$REPO_ROOT/scripts/pjdhiro-dir.sh"
#   PJDHIRO_DIR="$(find_pjdhiro_dir "$SCRIPT_DIR" assets/creation)"

find_pjdhiro_dir() {
    local start="$1" marker="${2:-assets}"
    if [ -n "${PJDHIRO_DIR:-}" ]; then
        echo "$PJDHIRO_DIR"
        return 0
    fi
    local dir
    dir="$(cd "$start" && pwd)"
    while [ "$dir" != "/" ]; do
        dir="$(dirname "$dir")"
        if [ -d "$dir/pjdhiro/$marker" ]; then
            echo "$dir/pjdhiro"
            return 0
        fi
    done
    local root
    root="$(git -C "$start" rev-parse --path-format=absolute --git-common-dir 2>/dev/null)"
    if [ -n "$root" ]; then
        echo "$(dirname "$(dirname "$root")")/pjdhiro"
    else
        echo "$(cd "$start" && pwd)/../pjdhiro"
    fi
}
