#!/usr/bin/env bash
set -euo pipefail

# クロス repo URL 参照の整合性チェック
# GitHub Pages の公開 URL パターンとの整合性を検証する
#
# 正しいパターン:
#   https://uminomae.github.io/project-design-theory/
#   https://uminomae.github.io/project-design-theory/as/
#   https://uminomae.github.io/project-design-theory/ks/
#   https://uminomae.github.io/project-design-theory/cs/
#
# 誤りやすいパターン:
#   /pjdhiro/project-design/  (旧パス)
#   //project-design-theory/         (ダブルスラッシュ)

errors=0

# 旧パス /pjdhiro/ が残存していないか
# 例外: pjdhiro サイトの総論ページ https://uminomae.github.io/pjdhiro/project-design/ ちょうど1つだけ。
#   pd サイトの旧パスと同じ文字列だが、別サイト（pjdhiro）に実在する総論への参照なので許す（pd#135）。
#   許すのは URL がそこで終わる形だけ（直後が引用符・< ・空白・行末）。その下の階層や相対パスは失敗のまま。
#   sitemap.xml は pd 自身のページだけを載せるので、例外にしない。
pjdhiro_overview='https://uminomae\.github\.io/pjdhiro/project-design/'
legacy_pd="$( { grep -rn '/pjdhiro/project-design' index.html src/ 2>/dev/null || true; } \
  | sed -e "s#${pjdhiro_overview}\([\"'< ]\)#\1#g" -e "s#${pjdhiro_overview}\$##" \
  | { grep '/pjdhiro/project-design' || true; } )"
legacy_pd_sitemap="$(grep -n '/pjdhiro/project-design' sitemap.xml 2>/dev/null || true)"
if [ -n "$legacy_pd" ] || [ -n "$legacy_pd_sitemap" ]; then
  if [ -n "$legacy_pd" ]; then echo "$legacy_pd"; fi
  if [ -n "$legacy_pd_sitemap" ]; then echo "sitemap.xml:$legacy_pd_sitemap"; fi
  echo "FAIL: Legacy path '/pjdhiro/project-design' found"
  errors=$((errors + 1))
fi

if grep -rn '/pjdhiro/awareness-space' index.html src/ sitemap.xml 2>/dev/null; then
  echo "FAIL: Legacy path '/pjdhiro/awareness-space' found"
  errors=$((errors + 1))
fi

if grep -rn '/pjdhiro/kesson-space' index.html src/ sitemap.xml 2>/dev/null; then
  echo "FAIL: Legacy path '/pjdhiro/kesson-space' found"
  errors=$((errors + 1))
fi

if grep -rn '/pjdhiro/creation-space' index.html src/ sitemap.xml 2>/dev/null; then
  echo "FAIL: Legacy path '/pjdhiro/creation-space' found"
  errors=$((errors + 1))
fi

# ダブルスラッシュのパス (//project-design-theory/ 等)
if grep -rn '//project-design-theory/' index.html src/ sitemap.xml 2>/dev/null | grep -v 'https://' | grep -v 'http://'; then
  echo "FAIL: Double-slash path found"
  errors=$((errors + 1))
fi

if [ $errors -gt 0 ]; then
  echo ""
  echo "FAIL: $errors cross-repo URL issue(s) found"
  exit 1
else
  echo "PASS: No cross-repo URL issues detected"
fi
