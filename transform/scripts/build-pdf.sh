#!/usr/bin/env bash
# build-pdf.sh — 汎用 MD→PDF 変換 v1.0
#
# 全リポジトリ共通の PDF 生成正本。
# project-design に配置し、他リポから参照して使う。
#
# 使い方:
#   # 単一ファイル変換
#   bash build-pdf.sh INPUT.md OUTPUT.pdf
#   bash build-pdf.sh INPUT.md OUTPUT.pdf --lang en
#   bash build-pdf.sh INPUT.md OUTPUT.pdf --title "タイトル" --subtitle "サブ"
#
#   # バッチ変換（ディレクトリ内の *.md を一括）
#   bash build-pdf.sh --batch INPUT_DIR/ OUTPUT_DIR/
#   bash build-pdf.sh --batch INPUT_DIR/ OUTPUT_DIR/ --lang en --pattern "*.md"
#
#   # 依存チェックのみ
#   bash build-pdf.sh --setup
#
# タイトル決定の優先順:
#   1. --title オプション
#   2. YAML front matter の title フィールド
#   3. 最初の H1 見出し
#   4. ファイル名
#
# 他リポからの呼び出し例:
#   bash ~/dev/project-design/transform/scripts/build-pdf.sh \
#     knowledge/report.md output/report.pdf
#
# 互換性:
#   bash 3.2以上（macOS標準）。${var^^} は使用しない。
#
# 依存:
#   pandoc, lualatex, python3
#   オプション: rsvg-convert（SVG画像を含むMDの場合）

set -euo pipefail

# ── 色付き出力 ──
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; RED='\033[0;31m'; NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REWRITE_SVG="$SCRIPT_DIR/rewrite-svg-links-for-pdf.py"
BUILD_TMP="${TMPDIR:-/tmp}/build-pdf-$$"

# ── YAML front matter を除去 ──
strip_frontmatter() {
    python3 -c "
import sys
lines = sys.stdin.readlines()
if lines and lines[0].strip() == '---':
    for i, l in enumerate(lines[1:], 1):
        if l.strip() == '---':
            print(''.join(lines[i+1:]), end=''); sys.exit()
print(''.join(lines), end='')
"
}

# ── 黒板太字を LaTeX 数式へ置換 ──
# Hiragino / Latin Modern に ℝℂℍ𝕆 等のグリフが無く空白落ちするため、
# コードスパン・フェンス・既存数式の外でのみ $\mathbb{…}$ に置換する。
substitute_bb_math() {
    python3 -c "
import sys, re
MAP = {'ℕ': 'N', 'ℤ': 'Z', 'ℚ': 'Q', 'ℝ': 'R', 'ℂ': 'C', 'ℍ': 'H', '𝕆': 'O'}
def sub(t):
    for k, v in MAP.items():
        t = t.replace(k, '\$\\\\mathbb{' + v + '}\$')
    return t
text = sys.stdin.read()
parts = re.split(r'(\`\`\`.*?\`\`\`|\`[^\`\n]*\`|\\\$[^\$\n]*\\\$)', text, flags=re.S)
sys.stdout.write(''.join(p if i % 2 else sub(p) for i, p in enumerate(parts)))
"
}

# ── front matter / H1 からタイトル取得 ──
extract_title() {
    local file="$1"
    local fallback
    fallback="$(basename "$file" .md)"
    python3 - "$file" "$fallback" << 'PYEOF'
import sys, re
text = open(sys.argv[1]).read()
m = re.search(r'^title:\s*["\x27]?(.*?)["\x27]?\s*$', text, re.MULTILINE)
if m:
    print(m.group(1))
else:
    h = re.search(r'^#\s+(.+)', text, re.MULTILINE)
    if h:
        raw = h.group(1).strip()
        clean = re.split(r'[—―]+', raw)[0].strip()
        print(clean)
    else:
        print(sys.argv[2])
PYEOF
}

# ── front matter からサブタイトル取得 ──
extract_subtitle() {
    local file="$1"
    python3 -c "
import sys, re
text = open(sys.argv[1]).read()
m = re.search(r'^subtitle:\s*[\"\\x27]?(.*?)[\"\\x27]?\s*$', text, re.MULTILINE)
print(m.group(1) if m else '')
" "$file"
}

# ── 依存チェック ──
check_deps() {
    echo "依存チェック..."
    local missing=0
    for cmd in pandoc lualatex python3; do
        if command -v "$cmd" &>/dev/null; then
            echo -e "  ${GREEN}✓${NC} $cmd"
        else
            echo -e "  ${RED}✗${NC} $cmd が見つかりません"
            missing=1
        fi
    done
    # rsvg-convert はオプション
    if command -v rsvg-convert &>/dev/null; then
        echo -e "  ${GREEN}✓${NC} rsvg-convert（SVG対応）"
    else
        echo -e "  ${YELLOW}△${NC} rsvg-convert なし（SVG画像は変換されません）"
    fi
    if [ "$missing" -eq 1 ]; then
        echo ""
        echo -e "${YELLOW}インストール:${NC}"
        echo "  brew install pandoc"
        echo "  brew install --cask mactex-no-gui"
        echo "  sudo tlmgr install collection-luatex luatexja haranoaji"
        echo "  brew install librsvg  # SVG対応（オプション）"
        exit 1
    fi
    echo -e "  ${GREEN}✓${NC} 依存OK"
}

# ── YAML header 生成（JA） ──
make_header_ja() {
    local title="$1" subtitle="$2"
    local date_str
    date_str=$(TZ=Asia/Tokyo date "+%Y年%m月%d日")

    cat << YAML
---
title: "${title}"
subtitle: "${subtitle}"
author: ""
date: "${date_str}"
documentclass: ltjsarticle
classoption: [a4paper, 11pt]
header-includes:
  - \\usepackage{luatexja-fontspec}
  - \\setmainjfont{Hiragino Mincho ProN}
  - \\setsansjfont{Hiragino Sans}
  - \\setmonofont{Menlo}
  - \\usepackage{graphicx}
  - \\usepackage{hyperref}
  - \\usepackage{xcolor}
  - \\usepackage{longtable}
  - \\usepackage{booktabs}
  - \\hypersetup{colorlinks=true,linkcolor=blue,urlcolor=blue}
geometry: [margin=25mm]
toc: true
toc-depth: 2
---

\\newpage

YAML
}

# ── YAML header 生成（EN） ──
make_header_en() {
    local title="$1" subtitle="$2"
    local date_str
    date_str=$(TZ=Asia/Tokyo date "+%Y-%m-%d")

    cat << YAML
---
title: "${title}"
subtitle: "${subtitle}"
author: ""
date: "${date_str}"
documentclass: article
classoption: [a4paper, 11pt]
header-includes:
  - \\usepackage{luatexja-fontspec}
  - \\setmainjfont{Hiragino Mincho ProN}
  - \\setsansjfont{Hiragino Sans}
  - \\setmonofont{Menlo}
  - \\ltjdefcharrange{9}{"2013-"201D}
  - \\ltjsetparameter{jacharrange={-9}}
  - \\usepackage{graphicx}
  - \\usepackage{hyperref}
  - \\usepackage{xcolor}
  - \\usepackage{longtable}
  - \\usepackage{booktabs}
  - \\hypersetup{colorlinks=true,linkcolor=blue,urlcolor=blue}
geometry: [margin=25mm]
toc: true
toc-depth: 2
---

\\newpage

YAML
}

# ── SVG リンク書き換え ──
rewrite_svg_links() {
    local tmp_md="$1"
    local source_md="$2"
    local raster_dir="$3"

    if [ ! -f "$REWRITE_SVG" ]; then
        return 0
    fi
    if ! command -v rsvg-convert &>/dev/null; then
        return 0
    fi

    python3 "$REWRITE_SVG" \
        --input-md "$tmp_md" \
        --source-md "$source_md" \
        --raster-dir "$raster_dir"
}

# ── pandoc 実行 ──
run_pandoc() {
    local input_md="$1"
    local output_pdf="$2"
    local resource_path="${3:-}"
    shift 3 || true

    local texmf_var="$BUILD_TMP/texmf-var"
    local texmf_config="$BUILD_TMP/texmf-config"
    mkdir -p "$texmf_var" "$texmf_config"

    local args=(
        "$input_md" -o "$output_pdf"
        --pdf-engine=lualatex
        --wrap=none
    )

    if [ -n "$resource_path" ]; then
        args+=(--resource-path="$resource_path")
    fi

    env \
        TEXMFVAR="$texmf_var" \
        TEXMFCONFIG="$texmf_config" \
        pandoc "${args[@]}" "$@"
}

# ── 単一ファイルビルド ──
build_single() {
    local input_md="$1"
    local output_pdf="$2"
    local lang="$3"
    local opt_title="$4"
    local opt_subtitle="$5"

    if [ ! -f "$input_md" ]; then
        echo -e "${RED}✗${NC} ソースが見つかりません: ${input_md}"
        return 1
    fi

    local input_abs
    input_abs="$(cd "$(dirname "$input_md")" && pwd)/$(basename "$input_md")"
    local input_dir
    input_dir="$(dirname "$input_abs")"

    # タイトル決定
    local title subtitle
    if [ -n "$opt_title" ]; then
        title="$opt_title"
    else
        title="$(extract_title "$input_abs")"
    fi
    if [ -n "$opt_subtitle" ]; then
        subtitle="$opt_subtitle"
    else
        subtitle="$(extract_subtitle "$input_abs")"
    fi

    local basename_md
    basename_md="$(basename "$input_md" .md)"
    local tmp="$BUILD_TMP/_${basename_md}_${lang}.md"

    echo -e "${BLUE}→${NC} $(basename "$input_md") [$(echo "$lang" | tr '[:lower:]' '[:upper:]')]"

    mkdir -p "$(dirname "$output_pdf")"
    mkdir -p "$BUILD_TMP"

    # pandoc 用ヘッダー生成
    if [ "$lang" = "en" ]; then
        make_header_en "$title" "$subtitle" > "$tmp"
    else
        make_header_ja "$title" "$subtitle" > "$tmp"
    fi

    # フロントマターを除去して連結
    cat "$input_abs" | strip_frontmatter | substitute_bb_math >> "$tmp"

    # SVG→PNG 変換
    rewrite_svg_links "$tmp" "$input_abs" "$BUILD_TMP/svg-raster/${basename_md}"

    # pandoc 実行
    if run_pandoc "$tmp" "$output_pdf" "$input_dir" 2>&1 | sed 's/^/    /'; then
        local size
        size=$(du -k "$output_pdf" 2>/dev/null | cut -f1)
        echo -e "  ${GREEN}✅${NC} $(basename "$output_pdf") (${size:-?} KB)"
    else
        echo -e "  ${RED}✗${NC} ビルド失敗: $(basename "$output_pdf")"
        rm -f "$tmp"
        return 1
    fi

    rm -f "$tmp"
}

# ── バッチビルド ──
build_batch() {
    local input_dir="$1"
    local output_dir="$2"
    local lang="$3"
    local pattern="$4"

    if [ ! -d "$input_dir" ]; then
        echo -e "${RED}✗${NC} ディレクトリが見つかりません: ${input_dir}"
        return 1
    fi

    mkdir -p "$output_dir"

    local success=0 fail=0
    for md_file in "$input_dir"/$pattern; do
        [ -f "$md_file" ] || continue
        local basename_md
        basename_md="$(basename "$md_file" .md)"
        local out="$output_dir/${basename_md}.pdf"

        if build_single "$md_file" "$out" "$lang" "" ""; then
            success=$((success + 1))
        else
            fail=$((fail + 1))
        fi
    done

    echo ""
    echo -e "バッチ完了: ${success}成功 / ${fail}失敗"
    [ "$fail" -gt 0 ] && return 1
    return 0
}

# ── クリーンアップ ──
cleanup() {
    rm -rf "$BUILD_TMP"
}
trap cleanup EXIT

# ── メイン ──
main() {
    local mode="single"  # single | batch | setup
    local lang="ja"
    local opt_title=""
    local opt_subtitle=""
    local pattern="*.md"
    local positional=()

    while [[ $# -gt 0 ]]; do
        case "$1" in
            --setup|-s)     check_deps; exit 0 ;;
            --batch|-b)     mode="batch"; shift ;;
            --lang|-l)      lang="${2:-ja}"; shift 2 ;;
            --title|-t)     opt_title="${2:-}"; shift 2 ;;
            --subtitle)     opt_subtitle="${2:-}"; shift 2 ;;
            --pattern|-p)   pattern="${2:-*.md}"; shift 2 ;;
            --help|-h)
                echo "使い方:"
                echo "  build-pdf.sh INPUT.md OUTPUT.pdf [options]"
                echo "  build-pdf.sh --batch INPUT_DIR/ OUTPUT_DIR/ [options]"
                echo "  build-pdf.sh --setup"
                echo ""
                echo "オプション:"
                echo "  --lang {ja|en}           言語（デフォルト: ja）"
                echo "  --title \"タイトル\"       タイトルを上書き"
                echo "  --subtitle \"サブ\"       サブタイトルを上書き"
                echo "  --batch                  ディレクトリ一括変換"
                echo "  --pattern \"*.md\"        バッチ時のファイルパターン"
                echo "  --setup                  依存チェックのみ"
                exit 0
                ;;
            -*)             echo -e "${RED}不明なオプション: $1${NC}"; exit 1 ;;
            *)              positional+=("$1"); shift ;;
        esac
    done

    echo -e "${BLUE}══════════════════════════════════════${NC}"
    echo -e "${BLUE}  build-pdf — 汎用 MD→PDF 変換 v1.0${NC}"
    echo -e "${BLUE}══════════════════════════════════════${NC}"
    echo ""

    check_deps
    echo ""

    case "$mode" in
        single)
            if [ "${#positional[@]}" -lt 2 ]; then
                echo -e "${RED}✗${NC} INPUT.md と OUTPUT.pdf を指定してください"
                echo "  使い方: build-pdf.sh INPUT.md OUTPUT.pdf"
                exit 1
            fi
            build_single "${positional[0]}" "${positional[1]}" "$lang" "$opt_title" "$opt_subtitle"
            ;;
        batch)
            if [ "${#positional[@]}" -lt 2 ]; then
                echo -e "${RED}✗${NC} INPUT_DIR/ と OUTPUT_DIR/ を指定してください"
                echo "  使い方: build-pdf.sh --batch INPUT_DIR/ OUTPUT_DIR/"
                exit 1
            fi
            build_batch "${positional[0]}" "${positional[1]}" "$lang" "$pattern"
            ;;
    esac

    echo ""
    echo -e "${GREEN}══════════════════════════════════════${NC}"
    echo -e "${GREEN}  完了${NC}"
    echo -e "${GREEN}══════════════════════════════════════${NC}"
}

main "$@"
