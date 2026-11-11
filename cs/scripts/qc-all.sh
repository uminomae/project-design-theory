#!/usr/bin/env bash
# qc-all.sh — creation-space 品質テスト 網羅ランナー (#52)
#
# 用途: 決定的(LLM不要)な QC テストを 1 コマンドで一括実行する。
#   定期レビュー(periodic-review skill)・大きな backfill 後・push 前に回す。
# 正本カタログ: docs/quality-management.md §7-§9
#
# 各テストは非 fatal で実行し、最後に PASS/FAIL を集計する(最初の失敗で止めない)。
# 終了コード: すべて PASS=0 / 1件以上 FAIL=1 / スキップのみは PASS 扱い。
#
# オプション:
#   --deep   時間のかかる検査(PDF抽出測定等)も実行
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CS_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "$CS_DIR"

DEEP=0
for a in "$@"; do [[ "$a" == "--deep" ]] && DEEP=1; done

# linked worktree 検出: worktree では .git が file(gitdir ポインタ)。
# worktree は .claude/hooks が相対 symlink で切れる/隣接 repo パスがずれるため、
# 環境依存テスト(verify-hooks / 配信JSON / ガイド)は誤 FAIL になる。main checkout 推奨。
IS_WORKTREE=0
[[ -f "${CS_DIR}/.git" ]] && IS_WORKTREE=1

pass=0; fail=0; skip=0
results=()

run() {
    # run "<ラベル>" <コマンド...>
    local label="$1"; shift
    echo ""
    echo "────────────────────────────────────────────────────────"
    echo "▶ ${label}"
    echo "  \$ $*"
    if "$@"; then
        echo "  ✅ PASS: ${label}"
        results+=("PASS  ${label}"); pass=$((pass+1))
    else
        echo "  ❌ FAIL: ${label}"
        results+=("FAIL  ${label}"); fail=$((fail+1))
    fi
}

skip_msg() {
    echo ""
    echo "────────────────────────────────────────────────────────"
    echo "⏭  SKIP: $1"
    results+=("SKIP  $1"); skip=$((skip+1))
}

echo "========================================================"
echo "  creation-space QC 網羅ランナー (qc-all.sh)"
echo "  $(date '+%Y-%m-%d %H:%M:%S')  deep=${DEEP}"
echo "========================================================"

# --- 1. manifest 間整合 + 原典重複 (Check 1/4/5/6/8/9/10) ---
run "manifest 整合 + 原典重複 (validate-manifest-sync)" \
    bash scripts/validate-manifest-sync.sh

# --- 2. 配信 JSON 整合 ---
run "dashboard-stats 鮮度 (generate-dashboard-stats --check)" \
    node scripts/generate-dashboard-stats.mjs --check

run "報告ページへの静的リンク鮮度 (generate-static-nav --check)" \
    node scripts/generate-static-nav.mjs --check

# --- 3. hooks 健全性 ---
# 今までの creation-space の .claude/hooks.json を見る verify-hooks.sh は、この repo に hooks が無いので外した
# （docs/harness-pending/README.md・2026-11-08）。

# --- 4・5. ドメインレポートの日付・ガイドの evidence 制約・スライドの URL ---
# どれも pjdhiro の repo の報告・ガイド・スライドを見る検査だった。pjdhiro の repo を使わないので、
# 検査ごと外した（#134・2026-11-12。昔の版は cs/archive/creation/）。

# --- 6. nl-debug 静的検査 (manifest 計数 / 死参照 / 書誌照合) ---
if [[ -d ".claude/skills/nl-debug/scripts" ]]; then
    run "nl-debug 死参照検査 (check-dead-refs)" \
        bash .claude/skills/nl-debug/scripts/check-dead-refs.sh
    run "nl-debug 書誌照合 (bib-crosscheck)" \
        bash .claude/skills/nl-debug/scripts/bib-crosscheck.sh
    if [[ $DEEP -eq 1 ]]; then
        run "nl-debug PDF抽出測定 (check-pdf-extract, --deep)" \
            bash .claude/skills/nl-debug/scripts/check-pdf-extract.sh
    fi
else
    skip_msg "nl-debug 静的検査 — skill scripts が無い"
fi

# --- Summary ---
echo ""
echo "========================================================"
echo "  QC 網羅ランナー 結果"
echo "========================================================"
for r in "${results[@]}"; do echo "  $r"; done
echo "--------------------------------------------------------"
echo "  PASS=${pass}  FAIL=${fail}  SKIP=${skip}"
if [[ $fail -gt 0 ]]; then
    echo "  ⛔ FAIL あり。上記の各テスト出力を確認して修正すること。"
    exit 1
fi
echo "  ✅ すべて PASS（スキップ除く）"
exit 0
