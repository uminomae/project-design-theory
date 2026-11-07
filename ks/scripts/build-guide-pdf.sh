#!/usr/bin/env bash
# build-guide-pdf.sh — 欠損駆動思考ガイド（一般向け・設計者向け・専門家向け）の md → PDF
#
# 手順書: docs/guides-pdf.md（#220）
#
# 入力: $PJDHIRO_DIR/assets/kesson/guides/{lang}/md/kesson-{audience}.md
# 出力: $PJDHIRO_DIR/assets/kesson/guides/{lang}/pdf/kesson-{audience}.pdf
#
# 変換本体は project-design の共通正本 build-pdf.sh（pandoc + lualatex）。
# creation-space の transform/scripts/build-pdf-guide.sh と同じ呼び方で、
# ここでは kesson 固有のタイトル・サブタイトルだけを持つ。
#
# 使い方:
#   bash scripts/build-guide-pdf.sh --audience academic --lang ja
#   bash scripts/build-guide-pdf.sh --audience all --lang all
#   bash scripts/build-guide-pdf.sh --audience academic --lang ja --out-dir "$TMPDIR/pdf"   # 試し出力
#   bash scripts/build-guide-pdf.sh --setup                                                # 依存チェックのみ
#
# 環境変数:
#   PJDHIRO_DIR  pjdhiro の checkout（既定 pjdhiro）
#   BUILD_PDF    共通正本のパス（既定 pd/transform/scripts/build-pdf.sh）
#
# bash 3.2（macOS 標準）で動く書き方にしている。

set -euo pipefail

PJDHIRO_DIR="${PJDHIRO_DIR:-pjdhiro}"
BUILD_PDF="${BUILD_PDF:-pd/transform/scripts/build-pdf.sh}"
GUIDES_BASE="$PJDHIRO_DIR/assets/kesson/guides"

# ── タイトル（表紙と PDF メタデータ）──
# 一般向け・設計者向けは 2026-03 の既存 PDF の Title をそのまま引き継いでいる。
# 本文を書き直したら、ここも合わせて直す。
guide_title() {
    case "$2:$1" in
        ja:general)  echo "欠損駆動思考 — 概要版" ;;
        ja:designer) echo "ラベルの下を見る" ;;
        ja:academic) echo "欠損駆動思考" ;;
        en:general)  echo "Kesson-Driven Thinking — General Overview" ;;
        en:designer) echo "Seeing Beneath the Label — Kesson-Driven Thinking for Designers" ;;
        en:academic) echo "Kesson-Driven Thinking" ;;
    esac
}

guide_subtitle() {
    case "$2:$1" in
        ja:designer) echo "設計者向け" ;;
        ja:academic) echo "専門家向け（草案 v0.4）" ;;
        en:academic) echo "For Researchers" ;;
        *)           echo "" ;;
    esac
}

usage() {
    sed -n '2,24p' "$0" | sed 's/^# \{0,1\}//'
}

audience="all"
lang="all"
out_dir=""

while [ $# -gt 0 ]; do
    case "$1" in
        --audience|-a) audience="${2:-}"; shift 2 ;;
        --lang|-l)     lang="${2:-}"; shift 2 ;;
        --out-dir|-o)  out_dir="${2:-}"; shift 2 ;;
        --setup)       exec bash "$BUILD_PDF" --setup ;;
        --help|-h)     usage; exit 0 ;;
        *) echo "不明なオプション: $1" >&2; usage >&2; exit 1 ;;
    esac
done

if [ ! -f "$BUILD_PDF" ]; then
    echo "✗ 共通正本が見つかりません: $BUILD_PDF" >&2
    exit 1
fi

case "$audience" in
    all) audiences="general designer academic" ;;
    general|designer|academic) audiences="$audience" ;;
    *) echo "不明な audience: $audience" >&2; exit 1 ;;
esac
case "$lang" in
    all) langs="ja en" ;;
    ja|en) langs="$lang" ;;
    *) echo "不明な lang: $lang" >&2; exit 1 ;;
esac

ok=0
ng=0
for a in $audiences; do
    for l in $langs; do
        md="$GUIDES_BASE/$l/md/kesson-$a.md"
        dir="${out_dir:-$GUIDES_BASE/$l/pdf}"
        [ -n "$out_dir" ] && dir="$out_dir/$l"
        mkdir -p "$dir"
        pdf="$dir/kesson-$a.pdf"
        if [ ! -f "$md" ]; then
            echo "✗ 入力がありません: $md" >&2
            ng=$((ng + 1))
            continue
        fi
        if bash "$BUILD_PDF" "$md" "$pdf" --lang "$l" \
            --title "$(guide_title "$a" "$l")" --subtitle "$(guide_subtitle "$a" "$l")"; then
            ok=$((ok + 1))
        else
            ng=$((ng + 1))
        fi
    done
done

echo "build-guide-pdf: ${ok} 成功 / ${ng} 失敗"
[ "$ng" -eq 0 ]
