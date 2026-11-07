# pjdhiro-dir.sh — source して使う。pjdhiro の repo の場所を決める。
#
# PJDHIRO_DIR があればそれを使い、無ければ渡したディレクトリから上へ順に
# pjdhiro/assets/awareness を探す（worktree の中からでも ~/dev/pd/pjdhiro が見つかるように）。
# 見つからなければ理由を stderr に出して 1 を返す。
#
#   PJDHIRO_DIR="$(find_pjdhiro_dir "$AS_ROOT")" || exit 1

find_pjdhiro_dir() {
    local start="$1"
    if [ -n "${PJDHIRO_DIR:-}" ]; then
        if [ -d "$PJDHIRO_DIR/assets/awareness" ]; then
            (cd "$PJDHIRO_DIR" && pwd)
            return 0
        fi
        echo "pjdhiro: PJDHIRO_DIR=$PJDHIRO_DIR に assets/awareness が無い" >&2
        return 1
    fi
    local dir
    dir="$(cd "$start" && pwd)"
    while [ "$dir" != "/" ]; do
        dir="$(dirname "$dir")"
        if [ -d "$dir/pjdhiro/assets/awareness" ]; then
            echo "$dir/pjdhiro"
            return 0
        fi
    done
    echo "pjdhiro: $start から上に pjdhiro/assets/awareness が見つからない（PJDHIRO_DIR で指定できる）" >&2
    return 1
}
