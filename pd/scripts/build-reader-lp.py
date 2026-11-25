#!/usr/bin/env python3
"""READER (knowledge/ の MD 正本) から公開 LP HTML を生成する。

ページ一覧は PAGES を参照（正本 MD × テンプレート × 出力 HTML の組）。
使い方: python3 scripts/build-reader-lp.py

READER を更新したら本スクリプトを再実行して LP を追随させる。

デザイン必須制約（docs/DESIGN-RULES.md §0a）:
- 全公開ページは index.html の VI を継承する（シェーダー背景 + グロークラス体系 + 確立パレット）
- テンプレート（scripts/reader-*-template.html）や後処理を変更するときも上記を満たすこと
- 独自テーマ・埋め込み standalone CSS の新造は禁止（却下実例: DESIGN-RULES §8b 2026-07-03）
"""
import html as htmllib
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# (正本 MD, テンプレート, 出力 HTML, style)。ページ追加時はここに1行足し、reader/README.md の表も更新する
# style:
#   "glow" … three-and-seven 型（透過記事＋要素ごとの glow-card、<!--TOC--> にインライン目次）
#   "flow" … energy-flow 型（cs wave-vortex 参考の一枚ガラスカラム＋garage 型の章 details.sec、
#            目次は src/reader-flow.js がクライアント側で生成。pjdhiro 指示 2026-07-14）
PAGES = [
    (
        ROOT / "knowledge/research/two-axis-closure/READER-division-algebra-consciousness-organization.md",
        ROOT / "scripts/reader-lp-template.html",
        ROOT / "reader/three-and-seven.html",
        "glow",
    ),
    # energy-flow（エネルギーの流れ）は 2026-11-10 に reader/archive/ へしまい、生成の対象から外した（Issue #111）。
    (
        ROOT / "knowledge/research/stages-screener/READER-stages-screener.md",
        ROOT / "scripts/reader-stages-screener-template.html",
        ROOT / "reader/stages-screener.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-driven-dev/READER-love-driven-dev.md",
        ROOT / "scripts/reader-love-driven-dev-template.html",
        ROOT / "reader/love-driven-dev.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/gravity-well/READER-gravity-well.md",
        ROOT / "scripts/reader-gravity-well-template.html",
        ROOT / "reader/gravity-well.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/influences-psychology/READER-influences-psychology.md",
        ROOT / "scripts/reader-influences-psychology-template.html",
        ROOT / "reader/influences-psychology.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/influences-management/READER-influences-management.md",
        ROOT / "scripts/reader-influences-management-template.html",
        ROOT / "reader/influences-management.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/rotation-multiplication/READER-rotation-multiplication.md",
        ROOT / "scripts/reader-rotation-multiplication-template.html",
        ROOT / "reader/rotation-multiplication.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/subtraction-kinds/READER-subtraction-kinds.md",
        ROOT / "scripts/reader-subtraction-kinds-template.html",
        ROOT / "reader/subtraction-kinds.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/intrinsic-motivation/READER-intrinsic-motivation.md",
        ROOT / "scripts/reader-intrinsic-motivation-template.html",
        ROOT / "reader/intrinsic-motivation.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/psychological-safety/READER-psychological-safety.md",
        ROOT / "scripts/reader-psychological-safety-template.html",
        ROOT / "reader/psychological-safety.html",
        "flow",
    ),
    (
        # 英語版（違和感帳 i20261113113814dxq・2026-11-14）。日本語の正本を直したら、同じ作業でこちらも直す
        ROOT / "knowledge/research/psychological-safety/READER-psychological-safety-en.md",
        ROOT / "scripts/reader-psychological-safety-en-template.html",
        ROOT / "reader/psychological-safety-en.html",
        "flow",
    ),
    (
        # 英語版（違和感帳 i20261113220707n4w・2026-11-14）。日本語版に毎回は追いつかない。英訳した日本語版の版はテンプレートに書く
        ROOT / "knowledge/research/love-driven-dev/READER-love-driven-dev-en.md",
        ROOT / "scripts/reader-love-driven-dev-en-template.html",
        ROOT / "reader/love-driven-dev-en.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/management-drivers/READER-management-drivers.md",
        ROOT / "scripts/reader-management-drivers-template.html",
        ROOT / "reader/management-drivers.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/mintzberg-schools/READER-mintzberg-schools.md",
        ROOT / "scripts/reader-mintzberg-schools-template.html",
        ROOT / "reader/mintzberg-schools.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/developmental-stages/READER-developmental-stages.md",
        ROOT / "scripts/reader-developmental-stages-template.html",
        ROOT / "reader/developmental-stages.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/anxiety/READER-anxiety.md",
        ROOT / "scripts/reader-anxiety-template.html",
        ROOT / "reader/anxiety.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/forgiveness-salvation/READER-forgiveness-salvation.md",
        ROOT / "scripts/reader-forgiveness-salvation-template.html",
        ROOT / "reader/forgiveness-salvation.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/anshin/READER-anshin.md",
        ROOT / "scripts/reader-anshin-template.html",
        ROOT / "reader/anshin.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/peirce-love-abduction/READER-peirce-love-abduction.md",
        ROOT / "scripts/reader-peirce-love-abduction-template.html",
        ROOT / "reader/peirce-love-abduction.html",
        "flow",
    ),
    (
        # 訳の本文は peirce-1893-evolutionary-love.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-peirce-evolutionary-love-ja.md",
        ROOT / "scripts/reader-peirce-evolutionary-love-ja-template.html",
        ROOT / "reader/peirce-evolutionary-love-ja.html",
        "flow",
    ),
    (
        # 訳の本文は peirce-1892-law-of-mind.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-peirce-law-of-mind-ja.md",
        ROOT / "scripts/reader-peirce-law-of-mind-ja-template.html",
        ROOT / "reader/peirce-law-of-mind-ja.html",
        "flow",
    ),
    (
        # 訳の本文は peirce-1892-mans-glassy-essence.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-peirce-glassy-essence-ja.md",
        ROOT / "scripts/reader-peirce-glassy-essence-ja-template.html",
        ROOT / "reader/peirce-glassy-essence-ja.html",
        "flow",
    ),
    (
        # 訳の本文は carus-1892-onslaught-on-necessity.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-carus-onslaught-on-necessity-ja.md",
        ROOT / "scripts/reader-carus-onslaught-on-necessity-ja-template.html",
        ROOT / "reader/carus-onslaught-on-necessity-ja.html",
        "flow",
    ),
    (
        # 訳の本文は james-1863-substance-and-shadow.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-james-substance-and-shadow-ja.md",
        ROOT / "scripts/reader-james-substance-and-shadow-ja-template.html",
        ROOT / "reader/james-substance-and-shadow-ja.html",
        "flow",
    ),
    (
        # 訳の本文は newcomb-1886-principles-of-political-economy.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-newcomb-political-economy-ja.md",
        ROOT / "scripts/reader-newcomb-political-economy-ja-template.html",
        ROOT / "reader/newcomb-political-economy-ja.html",
        "flow",
    ),
    (
        # 訳の本文は darwin-1861-historical-sketch.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-darwin-historical-sketch-ja.md",
        ROOT / "scripts/reader-darwin-historical-sketch-ja-template.html",
        ROOT / "reader/darwin-historical-sketch-ja.html",
        "flow",
    ),
    (
        # 訳の本文は darwin-1858-tendency-of-species.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-darwin-wallace-1858-ja.md",
        ROOT / "scripts/reader-darwin-wallace-1858-ja-template.html",
        ROOT / "reader/darwin-wallace-1858-ja.html",
        "flow",
    ),
    (
        # 訳の本文は herschel-1850-quetelet-on-probabilities.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-herschel-quetelet-probabilities-ja.md",
        ROOT / "scripts/reader-herschel-quetelet-probabilities-ja-template.html",
        ROOT / "reader/herschel-quetelet-probabilities-ja.html",
        "flow",
    ),
    (
        # 訳の本文は mandeville-1714-fable-of-the-bees.md（原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-mandeville-grumbling-hive-ja.md",
        ROOT / "scripts/reader-mandeville-grumbling-hive-ja-template.html",
        ROOT / "reader/mandeville-grumbling-hive-ja.html",
        "flow",
    ),
    (
        # 訳の本文は kolliker-1864-darwinsche-schopfungstheorie.md（原文〔独語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-kolliker-darwinsche-schopfungstheorie-ja.md",
        ROOT / "scripts/reader-kolliker-darwinsche-schopfungstheorie-ja-template.html",
        ROOT / "reader/kolliker-darwinsche-schopfungstheorie-ja.html",
        "flow",
    ),
    (
        # 訳の本文は helmholtz-1847-erhaltung-der-kraft.md（原文〔独語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-helmholtz-erhaltung-der-kraft-ja.md",
        ROOT / "scripts/reader-helmholtz-erhaltung-der-kraft-ja-template.html",
        ROOT / "reader/helmholtz-erhaltung-der-kraft-ja.html",
        "flow",
    ),
    (
        # 訳の本文は clausius-1850-bewegende-kraft-der-warme.md（原文〔独語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-clausius-bewegende-kraft-der-warme-ja.md",
        ROOT / "scripts/reader-clausius-bewegende-kraft-der-warme-ja-template.html",
        ROOT / "reader/clausius-bewegende-kraft-der-warme-ja.html",
        "flow",
    ),
    (
        # 訳の本文は rankine-1850-mechanical-action-of-heat.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-rankine-mechanical-action-of-heat-ja.md",
        ROOT / "scripts/reader-rankine-mechanical-action-of-heat-ja-template.html",
        ROOT / "reader/rankine-mechanical-action-of-heat-ja.html",
        "flow",
    ),
    (
        # 訳の本文は mansel-1858-limits-of-religious-thought.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-mansel-limits-of-religious-thought-ja.md",
        ROOT / "scripts/reader-mansel-limits-of-religious-thought-ja-template.html",
        ROOT / "reader/mansel-limits-of-religious-thought-ja.html",
        "flow",
    ),
    (
        # 訳の本文は mill-1865-examination-of-hamilton.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-mill-examination-of-hamilton-ja.md",
        ROOT / "scripts/reader-mill-examination-of-hamilton-ja-template.html",
        ROOT / "reader/mill-examination-of-hamilton-ja.html",
        "flow",
    ),
    (
        # 訳の本文は hamilton-1829-philosophy-of-the-unconditioned.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-hamilton-philosophy-of-the-unconditioned-ja.md",
        ROOT / "scripts/reader-hamilton-philosophy-of-the-unconditioned-ja-template.html",
        ROOT / "reader/hamilton-philosophy-of-the-unconditioned-ja.html",
        "flow",
    ),
    (
        # 訳の本文は kronig-1856-theorie-der-gase.md（原文〔独語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-kronig-theorie-der-gase-ja.md",
        ROOT / "scripts/reader-kronig-theorie-der-gase-ja-template.html",
        ROOT / "reader/kronig-theorie-der-gase-ja.html",
        "flow",
    ),
    (
        # 訳の本文は clausius-1857-art-der-bewegung.md（原文〔独語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-clausius-art-der-bewegung-ja.md",
        ROOT / "scripts/reader-clausius-art-der-bewegung-ja-template.html",
        ROOT / "reader/clausius-art-der-bewegung-ja.html",
        "flow",
    ),
    (
        # 訳の本文は maxwell-1860-dynamical-theory-of-gases.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-maxwell-dynamical-theory-of-gases-ja.md",
        ROOT / "scripts/reader-maxwell-dynamical-theory-of-gases-ja-template.html",
        ROOT / "reader/maxwell-dynamical-theory-of-gases-ja.html",
        "flow",
    ),
    (
        # 訳の本文は buckle-1857-history-of-civilization-in-england.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-buckle-history-of-civilization-ja.md",
        ROOT / "scripts/reader-buckle-history-of-civilization-ja-template.html",
        ROOT / "reader/buckle-history-of-civilization-ja.html",
        "flow",
    ),
    (
        # 訳の本文は herapath-1847-mathematical-physics.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-herapath-mathematical-physics-ja.md",
        ROOT / "scripts/reader-herapath-mathematical-physics-ja-template.html",
        ROOT / "reader/herapath-mathematical-physics-ja.html",
        "flow",
    ),
    (
        # 訳の本文は quetelet-1846-lettres-sur-la-theorie-des-probabilites.md（原文〔仏語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-quetelet-lettres-probabilites-ja.md",
        ROOT / "scripts/reader-quetelet-lettres-probabilites-ja-template.html",
        ROOT / "reader/quetelet-lettres-probabilites-ja.html",
        "flow",
    ),
    (
        # 訳の本文は draper-1863-history-of-intellectual-development-of-europe.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-draper-intellectual-development-ja.md",
        ROOT / "scripts/reader-draper-intellectual-development-ja-template.html",
        ROOT / "reader/draper-intellectual-development-ja.html",
        "flow",
    ),
    (
        # 訳の本文は thomson-1880-heat.md（原文〔英語〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-thomson-heat-ja.md",
        ROOT / "scripts/reader-thomson-heat-ja-template.html",
        ROOT / "reader/thomson-heat-ja.html",
        "flow",
    ),
    (
        # 訳の本文は weismann-1886-significance-of-sexual-reproduction.md（原文〔英訳 1889〕と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-weismann-significance-of-sexual-reproduction-ja.md",
        ROOT / "scripts/reader-weismann-significance-of-sexual-reproduction-ja-template.html",
        ROOT / "reader/weismann-significance-of-sexual-reproduction-ja.html",
        "flow",
    ),
    (
        # 訳の本文は naegeli-1884-mechanisch-physiologische-theorie-der-abstammungslehre.md（独語の原文と訳の対訳）から <!--JA-TEXT:…--> で差し込む
        ROOT / "knowledge/translations/READER-naegeli-abstammungslehre-ja.md",
        ROOT / "scripts/reader-naegeli-abstammungslehre-ja-template.html",
        ROOT / "reader/naegeli-abstammungslehre-ja.html",
        "flow",
    ),
    (
        # 読む順のリンク集。鍵の文の対訳は william-james-*.md（原文と訳）から <!--JA-TEXT:…--> で差し込む（#189）
        ROOT / "knowledge/translations/READER-william-james-self-ja.md",
        ROOT / "scripts/reader-william-james-self-ja-template.html",
        ROOT / "reader/william-james-self-ja.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/creative-thinking/READER-creative-thinking.md",
        ROOT / "scripts/reader-creative-thinking-template.html",
        ROOT / "reader/creative-thinking.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/via-vulnerability/READER-via-vulnerability.md",
        ROOT / "scripts/reader-via-vulnerability-template.html",
        ROOT / "reader/via-vulnerability.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/beauty/READER-beauty.md",
        ROOT / "scripts/reader-beauty-template.html",
        ROOT / "reader/beauty.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/julia-potential/READER-julia-potential.md",
        ROOT / "scripts/reader-julia-potential-template.html",
        ROOT / "reader/julia-potential.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/no-road-ahead/READER-no-road-ahead.md",
        ROOT / "scripts/reader-no-road-ahead-template.html",
        ROOT / "reader/no-road-ahead.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/life-drivers/READER-life-drivers.md",
        ROOT / "scripts/reader-life-drivers-template.html",
        ROOT / "reader/life-drivers.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/to-james/READER-to-james.md",
        ROOT / "scripts/reader-to-james-template.html",
        ROOT / "reader/to-james.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/vibe-to-code/READER-vibe-to-code.md",
        ROOT / "scripts/reader-vibe-to-code-template.html",
        ROOT / "reader/vibe-to-code.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/capacity-after-ai/READER-capacity-after-ai.md",
        ROOT / "scripts/reader-capacity-after-ai-template.html",
        ROOT / "reader/capacity-after-ai.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/breath-filter/READER-breath-filter.md",
        ROOT / "scripts/reader-breath-filter-template.html",
        ROOT / "reader/breath-filter.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/shikan/READER-shikan.md",
        ROOT / "scripts/reader-shikan-template.html",
        ROOT / "reader/shikan.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/complex-plane/READER-complex-plane.md",
        ROOT / "scripts/reader-complex-plane-template.html",
        ROOT / "reader/complex-plane.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/fundamental-theorem-of-algebra/READER-fundamental-theorem-of-algebra.md",
        ROOT / "scripts/reader-fundamental-theorem-of-algebra-template.html",
        ROOT / "reader/fundamental-theorem-of-algebra.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/reasoning/READER-reasoning.md",
        ROOT / "scripts/reader-reasoning-template.html",
        ROOT / "reader/reasoning.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/nondual/READER-nondual.md",
        ROOT / "scripts/reader-nondual-template.html",
        ROOT / "reader/nondual.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/decision-making/READER-decision-making.md",
        ROOT / "scripts/reader-decision-making-template.html",
        ROOT / "reader/decision-making.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/nonaka-complement/READER-nonaka-complement.md",
        ROOT / "scripts/reader-nonaka-complement-template.html",
        ROOT / "reader/nonaka-complement.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/empathy/READER-empathy.md",
        ROOT / "scripts/reader-empathy-template.html",
        ROOT / "reader/empathy.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/metacognition/READER-metacognition.md",
        ROOT / "scripts/reader-metacognition-template.html",
        ROOT / "reader/metacognition.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/thinking/READER-thinking.md",
        ROOT / "scripts/reader-thinking-template.html",
        ROOT / "reader/thinking.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/defense-mechanisms/READER-stages-defense.md",
        ROOT / "scripts/reader-stages-defense-template.html",
        ROOT / "reader/stages-defense.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/defense-mechanisms/READER-defense-mechanisms.md",
        ROOT / "scripts/reader-defense-mechanisms-template.html",
        ROOT / "reader/defense-mechanisms.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/personality/READER-personality.md",
        ROOT / "scripts/reader-personality-template.html",
        ROOT / "reader/personality.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-history/READER-love-history.md",
        ROOT / "scripts/reader-love-history-template.html",
        ROOT / "reader/love-history.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-trajectory/READER-love-trajectory.md",
        ROOT / "scripts/reader-love-trajectory-template.html",
        ROOT / "reader/love-trajectory.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/business-design-syllabus/READER-business-design-syllabus.md",
        ROOT / "scripts/reader-business-design-syllabus-template.html",
        ROOT / "reader/business-design-syllabus.html",
        "flow",
    ),
    (
        # 独立ページを束ねる並び（付箋帳 i20261119004012n6t・2026-11-19）
        ROOT / "knowledge/research/reader-shelves/READER-shelf-mind.md",
        ROOT / "scripts/reader-shelf-mind-template.html",
        ROOT / "reader/shelf-mind.html",
        "flow",
    ),
    (
        # 独立ページを束ねる並び（付箋帳 i20261119004012n6t・2026-11-19）
        ROOT / "knowledge/research/reader-shelves/READER-shelf-love.md",
        ROOT / "scripts/reader-shelf-love-template.html",
        ROOT / "reader/shelf-love.html",
        "flow",
    ),
    (
        # 独立ページを束ねる並び（付箋帳 i20261119004012n6t・2026-11-19）
        ROOT / "knowledge/research/reader-shelves/READER-shelf-number-org.md",
        ROOT / "scripts/reader-shelf-number-org-template.html",
        ROOT / "reader/shelf-number-org.html",
        "flow",
    ),
    (
        # 独立ページを束ねる並び（付箋帳 i20261119004012n6t・2026-11-19）
        ROOT / "knowledge/research/reader-shelves/READER-shelf-translations.md",
        ROOT / "scripts/reader-shelf-translations-template.html",
        ROOT / "reader/shelf-translations.html",
        "flow",
    ),
]

# スクリーナーのデータ（正本 JSON）。出力 HTML 名 → JSON。正本 MD の <!--SCREENER--> に
# no-JS 用の静的リスト＋埋め込み JSON を差し込み、src/reader-screener.js が対話 UI に置き換える
SCREENER_DATA = {
    "stages-screener.html": ROOT / "knowledge/research/stages-screener/screener-data.json",
}


# 対訳の md（knowledge/translations/*.md）ごとの、章を切る段 → 章の題（訳）
JA_CHAPTERS = {
    "peirce-1893-evolutionary-love.md": {
        "¶1": "題と、最初の節「一見したところ、反対の福音」",
        "¶18": "再考、和解の論",
        "¶28": "第三の側面、見分け方",
        "注61": "パースの脚注",
    },
    "peirce-1892-law-of-mind.md": {
        "¶1": "題と、はじめの二段",
        "¶4": "法則とは何か",
        "¶7": "観念の個別性",
        "¶11": "観念の連続",
        "¶18": "無限と連続の一般論",
        "¶46": "時間の分析",
        "¶53": "感じには強さの連続がある",
        "¶55": "感じには空間の広がりがある",
        "¶58": "観念の働きかけ",
        "¶67": "観念は連続によってしか結びつかない",
        "¶69": "心の法則は論理の形式に従う",
        "¶74": "心の働きの不確かさ",
        "¶78": "法則の言い直し",
        "¶85": "人格",
        "¶89": "伝え合い",
        "¶95": "結び",
        "注98": "パースの脚注",
    },
    "peirce-1892-mans-glassy-essence.md": {
        "¶1": "題と、はじめの二段",
        "¶4": "物質の成り立ち",
        "¶7": "ビリアルの法則と、気体の式",
        "¶18": "アマガの実験と、解離",
        "¶26": "原形質の性質",
        "¶36": "原形質の分子の仮説と、習慣",
        "¶46": "感じと、偶然の自発性",
        "¶50": "一般観念と、人格",
        "注55": "パースの脚注",
    },
    "carus-1892-onslaught-on-necessity.md": {
        "¶1": "題と、はじめの段",
        "¶7": "I　よみがえったヒューム",
        "¶21": "II　因果はただの継起ではない",
        "¶49": "III　パース氏の科学の論理",
        "¶70": "IV　思考の必然は、事実の必然を前提とする",
        "¶73": "V　パース氏の進化論",
        "¶89": "VI　世界の構成",
        "¶99": "VII　事実と法則",
        "¶106": "VIII　法則は説明できないものではない",
        "¶116": "IX　結論",
        "注1": "ケーラスの脚注",
    },
    "james-1863-substance-and-shadow.md": {
        "¶1": "第 24 章の抜き　被造物は、創造者の逆の像でなければならない",
        "注1": "ジェイムズの脚注",
    },
    "newcomb-1886-principles-of-political-economy.md": {
        "¶1": "第 56 節　貯えて投資する人と、慈善",
        "¶2": "第 57 節　結びの考察、人を動かす三つの動機",
        "¶16": "補遺　この本が示した経済学の主な原理の要約",
        "注1": "ニューカムの脚注",
    },
    "darwin-1861-historical-sketch.md": {
        "¶1": "題と、ラマルクからウォレスまで",
        "注1": "ダーウィンの脚注",
    },
    "darwin-1858-tendency-of-species.md": {
        "¶1": "ライエルとフッカーの送り状",
        "¶14": "I　ダーウィンの未刊の原稿からの抜き",
        "¶20": "II　ダーウィンからエイサ・グレイへの手紙の要約",
        "¶29": "III　ウォレス、変種が原型から限りなく離れていく傾向について",
        "注1": "ダーウィンの脚注",
    },
    "herschel-1850-quetelet-on-probabilities.md": {
        "¶1": "書誌と、確率とは何か",
        "¶13": "確率論の歩み、ラプラスまでとそのあと",
        "¶23": "ケトレーの書簡と、賭けと保険の確率",
        "¶31": "誤差の法則を三つの要請から導く",
        "¶38": "兵士の胸囲と身長、誤差の法則との一致",
        "¶53": "平均の理論と、原因の探究",
        "¶66": "天文学と植物の生長、偶然に変わる原因",
        "¶73": "統計は技術か科学か、人口と資料の集め方",
        "¶105": "統計の資料の吟味と、偏った選び方",
        "¶116": "犯罪と裁判の統計",
        "¶120": "医学の統計",
        "¶126": "英訳の誤りと、統計の行政への効用",
        "注1": "ハーシェルの脚注",
    },
    "mandeville-1714-fable-of-the-bees.md": {
        "¶1": "題と、悪徳に満ちて栄える巣",
        "¶17": "ならず者たちの嘆きと、正直になった巣",
        "¶28": "寂れていく巣",
        "¶34": "教訓",
    },
    "kolliker-1864-darwinsche-schopfungstheorie.md": {
        "¶1": "題と、ダーウィンの見方",
        "¶5": "ダーウィンの説への八つの異論",
        "¶26": "ダーウィンの功績と、残る創造の仮説",
        "¶35": "自然発生の理論",
        "¶40": "異種発生の理論",
        "¶53": "ダーウィンの仮説との違い",
        "¶62": "人間の位置",
        "注1": "ケリカーの脚注",
    },
    "helmholtz-1847-erhaltung-der-kraft.md": {
        "¶1": "序",
        "¶10": "I 活力の保存の原理",
        "¶18": "II 力の保存の原理",
        "¶33": "III 力学の定理への適用",
        "¶41": "IV 熱の力の当量",
        "¶55": "V 電気の過程の力の当量",
        "¶67": "V のうち、ガルバーニ電気",
        "¶83": "VI 磁気と電磁気の力の当量",
        "¶105": "正誤",
        "注1": "ヘルムホルツの脚注",
    },
    "clausius-1850-bewegende-kraft-der-warme.md": {
        "¶1": "題と序",
        "¶9": "I 熱と仕事の等価の原則から出てくる帰結",
        "¶20": "I のうち、永久気体",
        "¶35": "I のうち、密度が最大の蒸気",
        "¶47": "I のうち、副次の仮定を置いた気体",
        "¶57": "続きの題（第 4 号）",
        "¶58": "II カルノーの原則から出てくる帰結",
        "¶78": "II のうち、水蒸気の法則からの外れ",
        "¶96": "熱の単位に対する仕事の当量",
        "注1": "クラウジウスの脚注",
    },
    "rankine-1850-mechanical-action-of-heat.md": {
        "¶1": "題と序論",
        "¶4": "分子渦の仮説の原理の要約",
        "¶63": "第 I 節 熱と膨張の動力との相互の変換",
        "¶108": "第 II 節 真の比熱と見かけの比熱",
        "¶146": "第 III 節 蒸発の潜熱と全熱",
        "¶175": "第 IV 節 水蒸気の力学的作用と蒸気機関の動力",
        "¶238": "第 IV 節への付録と表",
        "注1": "ランキンの脚注",
    },
    "mansel-1858-limits-of-religious-thought.md": {
        "¶1": "序文　人間の思考の限界と、ハミルトンの無条件者の哲学",
        "注1": "マンセルの脚注",
    },
    "mill-1865-examination-of-hamilton.md": {
        "¶1": "第 VII 章　マンセル氏が宗教的思考の限界に当てはめた、条件づけられたものの哲学",
        "注1": "ミルの脚注",
    },
    "hamilton-1829-philosophy-of-the-unconditioned.md": {
        "¶1": "無条件者の哲学について――クザンの無限・絶対者の説に寄せて",
        "注1": "ハミルトンの脚注",
    },
    "kronig-1856-theorie-der-gase.md": {
        "¶1": "題と、気体の仮説",
        "¶7": "容器の壁にかかる圧力",
        "¶10": "温度と、気体の法則",
        "¶14": "原子の重さと、気体の浮き沈み",
        "¶18": "拡散と、熱量と比熱",
        "¶21": "法則が厳密でないこと",
        "¶22": "膨張と圧縮のときの温度",
    },
    "clausius-1857-art-der-bewegung.md": {
        "¶1": "題と、この論文を出すわけ",
        "¶4": "分子の進む運動と、構成部分の運動",
        "¶15": "気体の法則が近似でしか成り立たないわけ",
        "¶23": "固体・液体・気体の違い",
        "¶28": "蒸発",
        "¶39": "状態が変わるときの熱の発生と消費",
        "¶50": "化合する気体の体積と、分子の中の原子の数",
        "¶64": "数学的な補遺：気体の圧力の式",
        "¶81": "分子の速さ",
        "¶87": "進む運動の活力と、熱の全体",
        "注1": "クラウジウスの脚注",
    },
    "maxwell-1860-dynamical-theory-of-gases.md": {
        "¶1": "題と、気体の粒子の運動を調べるわけ",
        "¶6": "第 I 部　完全に弾性のある球の衝突（命題 I〜III）",
        "¶14": "速度の分布の法則（命題 IV〜VI）",
        "¶34": "衝突の数と、道のりの平均の長さ（命題 VII〜XI）",
        "¶51": "壁にかかる圧力と、内部摩擦（命題 XII・XIII）",
        "¶62": "第 II 部　二種類以上の粒子の拡散（命題 XIV〜XVIII）",
        "¶87": "気体の拡散の法則と、管でつないだ容器の拡散（命題 XIX・XX）",
        "¶105": "熱の伝導（命題 XXI）",
        "¶111": "第 III 部　形を問わない、完全に弾性のある物体の衝突（命題 XXII）",
        "¶128": "並進と回転の活力と、全体のまとめ（命題 XXIII）",
        "注1": "マクスウェルの脚注",
    },
    "buckle-1857-history-of-civilization-in-england.md": {
        "¶1": "自由意志と予定を退け、人の行いの一様性へ",
        "¶9": "殺人と自殺の規則性",
        "¶12": "犯罪の規則性と、法則の摂動",
        "¶14": "結婚の数と、宛名を書き忘れた手紙",
        "¶16": "統計の先へ：心の研究と自然の研究をつなぐ",
        "注19": "バックルの脚注",
    },
    "herapath-1847-mathematical-physics.md": {
        "¶1": "第 I 編 §9・§10：衝撃が圧する力になることと、気体の理論",
        "¶10": "第 II 編 §40〜§46：熱は粒子の内部運動で、温度はその度合い",
        "¶33": "第 II 編 第 II 節：気体の法則（定義と一般の考察）",
        "¶46": "命題 I〜IV：弾性・体積・温度・原子数",
        "¶72": "注解：ボイルの法則・温度の目盛り・絶対的な寒さ",
        "¶83": "命題 V〜VII：二つの気体と、混ぜた気体",
        "¶105": "命題 VIII・IX：粒子の質量・数・速さと、比熱",
    },
    "quetelet-1846-lettres-sur-la-theorie-des-probabilites.md": {
        "¶1": "第 17 書簡：平均の理論（誤差は決まった順序で落ちる）",
        "¶18": "第 18 書簡：本来の意味の平均・精度の目盛り・確率誤差",
        "¶33": "第 19 書簡：天文学から取った例（北極星の赤経の観測）",
        "¶54": "第 20 書簡：算術平均が本当に平均かを見分ける・人の身長の型",
        "¶69": "第 21 書簡：人の人種は、それぞれに固有の型をもつ",
        "¶90": "第 22 書簡：ふつうの出来事、並外れた出来事、奇形",
        "¶110": "第 30 書簡：恒常的とみなしてよい可変的な原因・大数の法則",
        "注1": "ケトレーの脚注",
    },
    "draper-1863-history-of-intellectual-development-of-europe.md": {
        "¶1": "章の題と、目次の要約",
        "¶3": "コンスタンティヌスの政策と、キリスト教の異教化",
        "¶8": "哲学への迫害と、テオドシウスの施策",
        "¶14": "教父主義と、その教え",
        "¶20": "アレクサンドリアの図書館と、セラピオンの破壊",
        "¶24": "キュリロスとヒュパティア",
        "¶27": "アレクサンドリアの学問の抑圧",
    },
    "thomson-1880-heat.md": {
        "¶1": "題と序、熱の感覚と潜熱",
        "¶7": "熱量測定",
        "¶14": "熱の本性と、熱の動力学的当量",
        "¶22": "温度測定の予備と、温度の感覚",
        "¶31": "感温器と、気体と液体の温度計",
        "¶67": "温度の定義と、熱力学的な絶対目盛り",
        "¶85": "流体の熱力学的な性質から目盛りを定める",
        "¶104": "絶対零度の意味と、定圧の気体温度計",
        "¶124": "熱容量と比熱",
        "¶129": "熱の移り、伝導と放射",
        "¶147": "拡散率と、フーリエの拡散",
        "¶156": "熱の性質の表",
        "¶170": "数学の付録、熱の伝わりの方程式",
        "¶182": "点の源と球面の源の解",
        "¶194": "フーリエの線形の熱の運動",
        "¶209": "三次元の周期的な源と、調和の解",
        "注1": "トムソンの脚注",
    },
    "weismann-1886-significance-of-sexual-reproduction.md": {
        "¶1": "論文の題と序文、目次",
        "¶10": "自然選択なしで済ませられるか、ネーゲリの内的な原因による変形",
        "¶28": "適応の重さと、クジラの体のつくり",
        "¶37": "変形は最も小さな段階で、個体の変異性の上に起こる",
        "¶42": "生殖質の連続と、獲得形質は伝わらないこと",
        "¶51": "ネーゲリとジョルダンの実験、生殖質は変わりにくい",
        "¶60": "個体の変異の源は有性生殖にある",
        "¶68": "無性生殖では自然選択がはたらかない",
        "¶78": "単細胞の生物での変異性の起こり",
        "¶83": "有性生殖は組み合わせを生む",
        "¶91": "有性生殖のはじまりと、若返りの説への異論",
        "¶101": "接合のもとの意味と、遺伝による有性生殖の保持",
        "¶109": "単為生殖で有性生殖が失われることと、その帰結",
        "¶114": "使われない器官と、パンミクシア",
        "¶121": "結びの考察",
        "注1": "ヴァイスマンと編者の脚注",
    },
    "naegeli-1884-mechanisch-physiologische-theorie-der-abstammungslehre.md": {
        "¶1": "序論：生物の成り立ちの学説と、生理学の立場",
        "¶17": "この本が調べること、由来論と自然選択",
        "¶26": "個体の変化は、向きを持たないか、定まった向きを持つか",
        "¶30": "完成化の原理と、二つの完全さ",
        "¶38": "完成化は慣性の原理であり、競争が無くても生物は生じた",
        "¶52": "分子生理学の仮説と、論じていく点",
        "¶61": "第 III 章 変化の原因：内的な原因の栄養へのふるまい",
        "¶74": "卵の発生と系統の変化、結晶の成長と比べる",
        "¶88": "内的な原因は分子の力であり、分子の力として働く",
        "注1": "ネーゲリの脚注",
    },
    # ウィリアム・ジェームズの鍵の文（#189）。章の見出しは読む順のリンク集の正本 READER-william-james-self-ja.md に書く
    "william-james-1892-psychology-briefer-course.md": {},
    "william-james-1890-consciousness-of-self.md": {},
    "william-james-1890-stream-of-thought.md": {},
    "william-james-1902-varieties-of-religious-experience.md": {},
    "william-james-1904-does-consciousness-exist.md": {},
}


# 鍵の文だけを抜いた対訳：原文を畳まず、訳の上に出す（#189「鍵の文（原文・頁）と日本語訳を並べる」）。
# 一つのページに対訳を幾つも差し込むので、段のアンカーに接頭辞を付けて重ならないようにする
JA_ORIG_SHOWN = {
    "william-james-1892-psychology-briefer-course.md": "b",
    "william-james-1890-consciousness-of-self.md": "s",
    "william-james-1890-stream-of-thought.md": "t",
    "william-james-1902-varieties-of-religious-experience.md": "v",
    "william-james-1904-does-consciousness-exist.md": "c",
}


# 原文が英語でない対訳の、原文の畳みの lang。無いものは en
JA_LANG = {
    "kolliker-1864-darwinsche-schopfungstheorie.md": "de",
    "helmholtz-1847-erhaltung-der-kraft.md": "de",
    "clausius-1850-bewegende-kraft-der-warme.md": "de",
    "kronig-1856-theorie-der-gase.md": "de",
    "clausius-1857-art-der-bewegung.md": "de",
    "naegeli-1884-mechanisch-physiologische-theorie-der-abstammungslehre.md": "de",
    "quetelet-1846-lettres-sur-la-theorie-des-probabilites.md": "fr",
}


def ja_text_markdown(path: Path) -> str:
    """原典の対訳の md（`knowledge/translations/*.md`）を、訳を主に・原文を段ごとの畳みにした本文の md に組み直す。

    対訳の md の形（`knowledge/translations/README.md`）：`### ¶N　p.X` の段ごとに、`>` の行が原文、
    `訳注：` で始まる行が Claude の注、残りが訳。頭の版の説明（最初の `### ` より前）は使わない
    （公開ページの冒頭に書き直して置く）。原文の節の見出し（全部が大文字の短い段）の前で章（h2）を切る。
    作業の覚え書き（道具で取れず手で足した、の類）は、公開ページに出さない。
    """
    text = path.read_text(encoding="utf-8")
    blocks = re.split(r"^### ", text, flags=re.M)[1:]
    # 原文の節の見出しの段 → 章の題（訳）。訳の md の段の番号で指す。ファイルごとに持つ
    chapters = JA_CHAPTERS[path.name]
    out = []
    # 「進化的な愛」の冒頭の一覧「引いている文献の訳」から、訳文の中でその文献を初めて引くリンクへ飛べるよう、
    # そのリンクに id="cite-<ページ名>" を付ける（pjdhiro 2026-11-25「一覧から訳文へ飛べない」。¶20 は一段に 14 本を引くので、段の頭では足りない）
    cite_ids = path.name == "peirce-1893-evolutionary-love.md"
    cited: set[str] = set()

    def cite(s: str) -> str:
        if not cite_ids:
            return s

        def rep(m: re.Match) -> str:
            slug = m.group(2)[: -len("-ja.html")]
            if slug in cited or m.group(2) == "peirce-evolutionary-love-ja.html":
                return m.group(0)
            cited.add(slug)
            return f'<a id="cite-{slug}" href="{m.group(2)}">{m.group(1)}</a>'

        return re.sub(r"\[([^\]]+)\]\(([a-z0-9-]+-ja\.html)\)", rep, s)
    for b in blocks:
        head, _, body = b.partition("\n")
        no, _, page = head.strip().partition("　")
        if no in chapters:
            out.append(f"\n## {chapters[no]}\n")
            if no == "¶1":
                out.append("\n<!--OPEN-->\n")
        orig, trans, notes = [], [], []
        for line in body.split("\n"):
            if line.startswith(">"):
                s = line[1:].lstrip(" ") if line.strip() != ">" else ""
                if s.startswith("（誌面の表"):
                    continue
                orig.append(s)
            elif line.startswith("訳注："):
                if "道具" in line or "Wikisource" in line:
                    continue
                notes.append(line)
            else:
                trans.append(line)
        aid = ("n" + no[1:]) if no.startswith("注") else ("p" + no[1:])
        prefix = JA_ORIG_SHOWN.get(path.name)
        if prefix:
            aid = prefix + aid
        label = no
        link = lambda s: re.sub(r"\[注(\d+)\]", r'<a href="#n\1">[注\1]</a>', s)
        # 表（¶32 の身長の表）は、狭い幅で横に送らないよう .tablefit で囲む（stance 2-7）
        fit = lambda s: re.sub(r"((?:^\|.*\n?)+)", lambda m: '\n<div class="tablefit cols-2">\n\n' + m.group(1).rstrip("\n") + "\n\n</div>\n", s, flags=re.M)
        out.append(f'\n<p id="{aid}"><small>{label}　{page}</small></p>\n')
        if prefix:
            # 原文を先に、畳まずに出す。訳と訳注はその下
            out.append(f'\n<blockquote lang="{JA_LANG.get(path.name, "en")}">\n\n' + link("\n".join(orig).strip()) + "\n\n</blockquote>\n")
        out.append("\n" + fit(link(cite("\n".join(trans).strip()))) + "\n")
        for n in notes:
            # 訳注は HTML の塊で出すので、中の Markdown（リンク・斜体・コード）はここで HTML にする
            n = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', n)
            n = re.sub(r"`([^`]+)`", r"<code>\1</code>", n)
            n = re.sub(r"(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])", r"<em>\1</em>", n)
            out.append(f"\n<p><small>{n}</small></p>\n")
        if prefix:
            continue
        out.append(f'\n<details><summary>原文（{label}）</summary>\n\n<blockquote lang="{JA_LANG.get(path.name, "en")}">\n\n'
                   + fit(link("\n".join(orig).strip())) + "\n\n</blockquote>\n\n</details>\n")
    return "".join(out)


def expand_ja_text(md: str, src: Path) -> tuple[str, list[Path]]:
    """正本 MD の <!--JA-TEXT:相対パス--> を、対訳の md から組んだ本文に置き換える。"""
    used: list[Path] = []

    def rep(m: re.Match) -> str:
        p = (src.parent / m.group(1).strip()).resolve()
        used.append(p)
        return ja_text_markdown(p)

    return re.sub(r"<!--JA-TEXT:(.*?)-->", rep, md), used


def fold_sections(html: str) -> str:
    """h2 章を garage 型の <details class="sec"> に畳む（flow style 用）。

    h2 の id を details 側へ移す（既存アンカー #2-... は details に着地し、
    reader-flow.js が開いてスクロールする）。h2 より前のリード部はそのまま残す。
    """
    parts = re.split(r'(<h2 id="[^"]+">.*?</h2>)', html, flags=re.S)
    # 正本 MD で章の前に <!--PART:第一部|部の題--> を置くと、章をまとめる部の区切りを
    # 章の外に出す（目次では src/reader-flow.js が部の行にする・#20「章を4つくらいの分類に」）
    part_no = [0]
    lens_no = [0]

    def part_html(mark: str) -> str:
        part_no[0] += 1
        no, _, title = mark.partition("|")
        t = f'<p class="reader-part__title">{title.strip()}</p>' if title.strip() else ""
        return (f'<div class="reader-part" id="part-{part_no[0]}">'
                f'<p class="reader-part__no">{no.strip()}</p>{t}</div>')

    # 部の区切りのあとに <!--PARTLEAD-->…<!--/PARTLEAD--> を置くと、章にせず、部の頭の文として
    # 部の見出しの下に出す（章を閉じていても見える。2026-11-21・付箋 i20261121041141s2r
    # 「…の章は、第三部の冒頭文のような位置付けにして。章ではなく。」）
    def take_part(seg: str) -> tuple[str, str]:
        m = re.search(r"(?:<p>)?<!--PART:(.*?)-->(?:</p>)?", seg, flags=re.S)
        if not m:
            return seg, ""
        rest = seg[:m.start()] + seg[m.end():]
        ph = part_html(m.group(1))
        lm = re.search(r"(?:<p>)?<!--PARTLEAD-->(?:</p>)?(.*?)(?:<p>)?<!--/PARTLEAD-->(?:</p>)?", rest, flags=re.S)
        if lm:
            ph = ph[:-len("</div>")] + f'<div class="reader-part__lead">{lm.group(1).strip()}</div></div>'
            rest = rest[:lm.start()] + rest[lm.end():]
        return rest, ph

    lead, lead_part = take_part(parts[0])
    out = [lead + lead_part]
    for i in range(1, len(parts), 2):
        h2 = parts[i]
        body = parts[i + 1] if i + 1 < len(parts) else ""
        body, next_part = take_part(body)
        hid = re.search(r'id="([^"]+)"', h2).group(1)
        label = re.sub(r"<[^>]+>", "", h2).strip()
        # 正本 MD で h2 直後に <!--OPEN--> を置いた章は、最初から開いておく
        opened = body.lstrip().startswith("<!--OPEN-->")
        if opened:
            body = body.replace("<!--OPEN-->", "", 1)
        # 正本 MD で章末に <!--TURN-->…<!--/TURN--> を置くと、章の外（次の章との間）に
        # 転回点として出す。章を閉じていても見える（#20「独立して章を繋ぐ言葉として印象的に」）
        turn = ""
        m = re.search(r"<!--TURN-->(.*?)<!--/TURN-->", body, flags=re.S)
        if m:
            turn = f'<div class="reader-turn">{m.group(1).strip()}</div>'
            body = body[:m.start()] + body[m.end():]
        # 正本 MD で章末に <!--LENS:視点 1|束の題-->案内<!--/LENS--> を置くと、次の章から始まる
        # 章の束（部の中のサブテーマ）の見出しを章の外に出す。目次では src/reader-flow.js が
        # 束の行にする（違和感帳 i20261113230557790「サブテーマに沿って進めたい」）
        lens = ""
        m = re.search(r"(?:<p>)?<!--LENS:(.*?)-->(?:</p>)?(.*?)(?:<p>)?<!--/LENS-->(?:</p>)?", body, flags=re.S)
        if m:
            lens_no[0] += 1
            no, _, title = m.group(1).partition("|")
            t = f'<p class="reader-lens__title">{title.strip()}</p>' if title.strip() else ""
            lens = (f'<div class="reader-lens" id="lens-{lens_no[0]}">'
                    f'<p class="reader-lens__no">{no.strip()}</p>{t}'
                    f'<div class="reader-lens__guide">{m.group(2).strip()}</div></div>')
            body = body[:m.start()] + body[m.end():]
        out.append(
            f'<details class="sec" id="{hid}"{" open" if opened else ""}><summary>{label}</summary>'
            f'<div class="secbody">{body}</div></details>{turn}{next_part}{lens}'
        )
    return "".join(out)


def collect_refs(html: str) -> str:
    """正本 MD で「出典：」段落の前に <!--REF:分野--> を置くと、巻末の <!--REFS--> に分野ごとに集める。

    各行には出典が置かれた章（h2）へのリンクを付ける。章の中の出典はそのまま残す
    （#20「論文的な参照を見やすくしたい」）。<!--REFS--> が無いページは何もしない。
    """
    marker = re.search(r"(?:<p>)?<!--REFS-->(?:</p>)?", html)
    if not marker:
        return html
    heads = [(m.start(), m.group(1), re.sub(r"<[^>]+>", "", m.group(2)).strip())
             for m in re.finditer(r'<h2 id="([^"]+)">(.*?)</h2>', html, flags=re.S)]
    groups: dict[str, list[str]] = {}
    # 英語版は「Sources: 」で始まる段落（2026-11-14・Love駆動開発の英語版）
    for m in re.finditer(r"<!--REF:(.*?)-->\s*<p>(?:出典：|Sources: )(.*?)</p>", html, flags=re.S):
        before = [h for h in heads if h[0] < m.start()]
        where = ""
        if before:
            _, hid, label = before[-1]
            short = re.split(r"\s*[—―]\s*", label)[0]
            where = f'<a class="reader-refs__where" href="#{hid}">{short}</a>'
        groups.setdefault(m.group(1).strip(), []).append(f"<li>{where}{m.group(2).strip()}</li>")
    out = "".join(f'<h4>{field}</h4><ul class="reader-refs">{"".join(items)}</ul>'
                  for field, items in groups.items())
    html = re.sub(r"<!--REF:.*?-->", "", html)
    return re.sub(r"(?:<p>)?<!--REFS-->(?:</p>)?", lambda _: out, html, count=1)


def screener_markup(data_path: Path) -> str:
    """スクリーナーの静的マークアップ（no-JS・SEO/LLM 用）と埋め込み JSON を作る。"""
    data = json.loads(data_path.read_text(encoding="utf-8"))
    bands = {b["id"]: b for b in data["bands"]}
    esc = htmllib.escape
    items = []
    for i, q in enumerate(data["questions"], 1):
        opts = "".join(f"<li>{esc(o['text'])}</li>" for o in q["options"])
        key = "".join(f"<li>{esc(bands[o['band']]['label'])}：{esc(o['text'])}</li>" for o in q["options"])
        items.append(
            f'<li><p class="screener-question">Q{i}. {esc(q["text"])}</p><ul>{opts}</ul>'
            f'<details><summary>各選択肢の帯</summary><ul>{key}</ul></details></li>'
        )
    # JSON は </script> を閉じさせないよう < をエスケープする
    payload = json.dumps(data, ensure_ascii=False).replace("<", "\\u003c")
    return (
        '<section class="screener glow-card" data-screener="screener-data" aria-label="スクリーナー">'
        '<p class="screener-small">JavaScript が動かない環境では、問いと選択肢の一覧だけを表示しています。</p>'
        f'<ol class="screener-static">{"".join(items)}</ol></section>'
        f'<script type="application/json" id="screener-data">{payload}</script>'
    )


def claude_prompt(data_path: Path) -> str:
    """Claude（チャット）に貼るとスクリーナーを再現できるプロンプトを、正本 JSON から組み立てる。

    問い・選択肢・帯・バージョンは毎回 JSON から取る（選択肢を直したときにずれないように）。
    採点の決まりは src/reader-screener.js の score() と同じ。
    """
    data = json.loads(data_path.read_text(encoding="utf-8"))
    bands = data["bands"]
    by_id = {b["id"]: b for b in bands}
    points = "、".join(f'{b["label"]}={b["points"]}' for b in bands)
    lines = [
        f'あなたは「ものの見方の広さスクリーナー」（バージョン {data["version"]}）の進行役です。'
        "視座・メタ認知・インクルーシブ（包摂）——どの視点から観ているか、何が観えているか、"
        "どこまでを含めて観ているか——を、16問×5択で確かめます。"
        "いちばん奥の帯（6.0・6.5）では、非二元性（時間や境界に限られないものと日常とが二つに分かれていない見方）があるかも見ます。",
        "",
        "## 進め方",
        "- まず「診断ではなく、ふだんの見方に気づくための目安です。回答はこの会話の外には保存しません」と一言伝えてから始める。",
        "- 1問ずつ出す。各問の5つの選択肢は、問ごとに並びを入れ替えて A〜E で示す。どの選択肢がどの帯かは、全問に答え終えるまで言わない。",
        "- 回答者は A〜E のどれか、または「飛ばす」で答える。迷っていたら「一時的な体験ではなく、ふだんの自分にいちばん近いもの」を選ぶよう促すだけにし、特定の選択肢へ誘導しない。",
        "- 言葉の意味を聞かれたら、どの選択肢がどの帯か分からない範囲で答える。",
        "- 「前の問に戻りたい」と言われたら戻って答え直してもらう。",
        "",
        "## 採点（全問のあとで）",
        f"- 選んだ選択肢の帯を {points} として平均し、平均 ÷ 4 × 100 を四捨五入した値を「6.5 への近さ」（0〜100）とする。飛ばした問は数えない。",
        "- 帯ごとに選ばれた数を数える。",
        "- 回答が 8 問以上のとき、いちばん多い帯を「いまの位置（参考）」とする（同数なら並べて示す）。8 問未満なら位置は出さず、分布だけを示す。",
        "- 「移行期」などの判定はしない。帯の境目ははっきり分かれるものではないので、分布はグラデーションとして示し、どう読むかは回答者に委ねる。",
        "",
        "## 結果の伝え方",
        "- 6.5 への近さ、帯ごとの回答数（グラデーションが見えるよう、多い帯から少ない帯まですべて）、いまの位置（参考）を示す。",
        "- 各問で選んだ選択肢と、その帯を一覧で示す。求められたら、ほかの選択肢の帯も示す。",
        "- 必ず添える:「数字は優劣ではありません。どの帯も、次の見方へ移る途中の一つの場所です。」",
        "- 診断や正式な測定ではない（何度答えても同じ結果になることや、STAGES の正式な測定との一致は求めていない）。結果を断定したり、病気や能力の判定に使ったりしない。",
        "- そのあと回答者が望めば、結果について一緒に考える。",
        "",
        "## 帯（定義の要約。回答中は回答者に見せない）",
        "帯の名前と定義は Terri O'Fallon の STAGES モデルの公開論文（Integral Review 16(1), 2020）、段階の見分け方は Cook-Greuter の自我発達理論（2013）を要約して借りている。",
    ]
    for b in bands:
        lines.append(
            f'- {b["label"]} {b["name"]}（{b["phrase"]}）：視座＝{b["perspective"]}。'
            f'見えているもの＝{b["metacognition"]}。取り込むもの＝{b["inclusion"]}。'
        )
    lines += [
        "- 非二元性: 6.0 は、時間や境界に限られないものと日常の行為が別々になっていない（二つを並べるのではない）。"
        "6.5 は、体・感情・考えの層と、それに気づいている意識そのものが互いに入り込み合う。どちらも「区別が消えて一つになる」ことではない。",
        "",
        "## 問いと選択肢（[ ] 内は帯。回答者には見せない）",
    ]
    for i, q in enumerate(data["questions"], 1):
        lines.append(f'Q{i}. {q["text"]}')
        for o in q["options"]:
            lines.append(f'- [{by_id[o["band"]]["label"]}] {o["text"]}')
    lines += ["", "準備ができたら、最初の一言と Q1 から始めてください。"]
    return "\n".join(lines)


def build(SRC: Path, TPL: Path, OUT: Path, STYLE: str) -> None:
    md = SRC.read_text(encoding="utf-8")

    # front matter を剥がす
    m = re.match(r"^---\n.*?\n---\n", md, re.S)
    body_md = md[m.end():] if m else md
    body_md, ja_paths = expand_ja_text(body_md, SRC)
    date_paths = [str(SRC)] + [str(p) for p in ja_paths]

    # 最終更新日は正本の git 履歴から取る。ただし未コミットの編集があるときは今日の日付
    # （MD 編集と再ビルドを同一コミットに入れる通常運用では、コミット前のビルド時点で
    #  git log が 1 コミット前の日付を返し、表示が古いまま公開される）
    dirty = subprocess.run(
        ["git", "status", "--porcelain", "--", *date_paths],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout.strip()
    if dirty:
        updated = date.today().isoformat()
    else:
        updated = subprocess.run(
            ["git", "log", "-1", "--format=%ad", "--date=format:%Y-%m-%d", "--", *date_paths],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.strip() or "unknown"

    # GFM → HTML（インライン SVG は raw HTML としてそのまま通る）
    html = subprocess.run(
        ["pandoc", "-f", "gfm", "-t", "html", "--wrap=none"],
        input=body_md, capture_output=True, text=True, check=True,
    ).stdout

    # 先頭 H1 はテンプレートの hero と重複するため除去
    html = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", html, count=1)

    if OUT.name in SCREENER_DATA:
        if "<!--SCREENER-->" not in html:
            sys.exit(f"ERROR: <!--SCREENER--> marker not found in generated body ({SRC.name})")
        # glow 後処理（表の glow-card 化など）が静的リストに及ばないよう、最後に差し込む
        screener_html = screener_markup(SCREENER_DATA[OUT.name])
    else:
        screener_html = None

    if STYLE == "glow":
        # DESIGN-RULES §0a: グロークラス体系を生成 HTML に適用する
        # 見出しは .glow-heading（本文の glow は article 側の .glow-text が担う）
        html = re.sub(r"<h([23])( |>)", lambda m: f'<h{m.group(1)} class="glow-heading"' + (" " if m.group(2) == " " else ">"), html)
        # 図版（インライン SVG）と表は .glow-card の白ガラスパネルに載せる
        # SVG 直後の <figcaption> は同じ figure に含める（正本 MD 側で </svg> の次行に置く）
        html = re.sub(
            r"(<svg\b.*?</svg>)(\s*<figcaption>.*?</figcaption>)?",
            lambda m: '<figure class="glow-card reader-figure">' + m.group(1) + (m.group(2) or "") + "</figure>",
            html, flags=re.S,
        )
        html = re.sub(r"(<table\b.*?</table>)", r'<div class="glow-card reader-table">\1</div>', html, flags=re.S)
        # 引用・コールアウト（lede/📖/仮説ボックス）はガラスパネルに載せる（シェーダー上の可読性）
        html = html.replace("<blockquote>", '<blockquote class="glow-card reader-callout">')

        # 目次: 本文の h1（部）/ h2（章）から生成し、正本 MD の <!--TOC--> 位置に挿す
        # 一番上は冒頭の概要へのリンク（mark_overview・違和感帳 i20261115225936k9l）
        toc_items = ['<li class="reader-toc-part"><a href="#overview">概要</a></li>']
        for level, hid, text in re.findall(r'<h([12])[^>]*\bid="([^"]+)"[^>]*>(.*?)</h\1>', html, flags=re.S):
            label = re.sub(r"<[^>]+>", "", text).strip()
            cls = ' class="reader-toc-part"' if level == "1" else ""
            toc_items.append(f'<li{cls}><a href="#{hid}">{label}</a></li>')
        toc_html = (
            '<nav class="reader-toc glow-card" aria-label="目次">'
            '<p class="reader-toc-title">目次</p>'
            "<ol>" + "".join(toc_items) + "</ol></nav>"
        )
        if "<!--TOC-->" not in html:
            sys.exit(f"ERROR: <!--TOC--> marker not found in generated body ({SRC.name})")
        html = html.replace("<!--TOC-->", toc_html, 1)
    elif STYLE == "flow":
        # flow 型（DESIGN-RULES §13）: 一枚ガラスカラム上なので glow クラスは付けない。
        # 表は garage 型の横スクロール枠、引用はコールアウト、MD の畳みは .acc カードに
        html = re.sub(r"(<table\b.*?</table>)", r'<div class="tablewrap">\1</div>', html, flags=re.S)
        html = html.replace("<blockquote>", '<blockquote class="reader-callout">')
        # pjdhiro 本人の言葉（「pjdhiro の問い：」等で始まる段落）は gravity-love と同じ引用カードに載せる（#20）
        html = re.sub(
            # 段落の頭にページ内リンクの印（<a id="…"></a>）があっても、引用カードに載せる（#96・2026-11-10）
            # 英語版は「pjdhiro's view (translated by Claude):」の形（2026-11-14）
            r"(?<!<blockquote class=\"reader-callout\">\n)<p>((?:<a id=\"[^\"]*\"></a>)?<strong>(?:pjdhiro の[^<：]{1,8}：|pjdhiro's [^<:]{1,40}:)</strong>.*?)</p>",
            r'<blockquote class="reader-callout reader-request">\n<p>\1</p>\n</blockquote>',
            html, flags=re.S,
        )
        html = html.replace("<details>", '<details class="acc">')
        # 章の出典を巻末の参照の一覧に集めてから、h2 章を garage 型の details.sec に畳む（目次は src/reader-flow.js が生成）
        html = collect_refs(html)
        html = fold_sections(html)
        if "<!--TOC-->" in html:
            sys.exit(f"ERROR: flow style page must not contain <!--TOC--> marker ({SRC.name})")
    else:
        sys.exit(f"ERROR: unknown style {STYLE!r} for {SRC.name}")

    if screener_html is not None:
        html = html.replace("<!--SCREENER-->", screener_html, 1)
    if "<!--CLAUDE-PROMPT-->" in html:
        if OUT.name not in SCREENER_DATA:
            sys.exit(f"ERROR: <!--CLAUDE-PROMPT--> needs a data source ({OUT.name})")
        prompt = htmllib.escape(claude_prompt(SCREENER_DATA[OUT.name]))
        html = html.replace(
            "<!--CLAUDE-PROMPT-->",
            '<div class="prompt-box"><button type="button" class="screener-btn" data-copy="claude-prompt">プロンプトをコピー</button>'
            f'<pre id="claude-prompt" class="prompt-text">{prompt}</pre></div>',
            1,
        )

    page = TPL.read_text(encoding="utf-8")
    page = page.replace("<!--BODY-->", html).replace("<!--UPDATED-->", UPDATED_MARK)
    page = mark_overview(page, STYLE)
    # 状態は日付とバージョンで示す（pjdhiro 2026-10-24）。バージョンはスクリーナーの正本 JSON から取る
    if "<!--VERSION-->" in page:
        if OUT.name not in SCREENER_DATA:
            sys.exit(f"ERROR: <!--VERSION--> needs a data source ({OUT.name})")
        version = json.loads(SCREENER_DATA[OUT.name].read_text(encoding="utf-8"))["version"]
        page = page.replace("<!--VERSION-->", version)
    # 読み物の版番号（1.xxx）。正本かテンプレートに触れた commit の数から出す（scripts/reader_version.py・pjdhiro 2026-11-13）
    if "<!--READER-VERSION-->" in page:
        import reader_version
        page = page.replace("<!--READER-VERSION-->", reader_version.version(OUT.name))
        msg = reader_version.notice(OUT.name)
        if msg:
            print(msg)

    # 中身が今の HTML と同じなら、今の HTML の日付を保ち、書き換えない。
    # git の最終コミット日は、移動やリンクの一括置換でも進むので、それだけでは日付を変えない
    # （repo の引っ越しで全ページが 2026-11-07 になりかけた。pjdhiro 2026-11-08）
    kept = kept_date(OUT, page)
    if kept:
        print(f"SAME: {OUT.relative_to(ROOT)} (updated {kept} のまま)")
        return
    page = page.replace(UPDATED_MARK, updated)

    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(page, encoding="utf-8")

    # UTF-8 置換文字（U+FFFD）検査
    if "�" in page:
        sys.exit(f"ERROR: U+FFFD found in output ({OUT.name})")
    print(f"OK: {OUT.relative_to(ROOT)} ({len(page):,} bytes, updated {updated})")

    update_sitemap_lastmod(OUT, updated)


UPDATED_MARK = "\x00UPDATED\x00"

# 目次の一番上（第一部の上）に置く「概要」の行の行き先（pjdhiro 2026-11-16・違和感帳 i20261115225936k9l
# 「目次の一番上が第一部なので、冒頭の概要に対してアンカーリンクするように　概要　の２文字を追加して」）。
# 行き先は冒頭の概要の見出し（.reader-summary__title）。無いページは、glow 型は冒頭の最初の囲み、
# flow 型はページの頭（.reader-hero）。行は glow 型はこのスクリプトが、flow 型は src/reader-flow.js が足す
OVERVIEW_ID = "overview"


def mark_overview(page: str, style: str) -> str:
    """冒頭の概要に id="overview" を付ける。すでにあれば何もしない。"""
    if f'id="{OVERVIEW_ID}"' in page:
        return page
    pats = [r'<p class="reader-summary__title"']
    if style == "glow":
        pats.append(r'<blockquote class="glow-card reader-callout"')
    pats.append(r'<header class="reader-hero"')
    for pat in pats:
        page, n = re.subn(pat, lambda m: m.group(0) + f' id="{OVERVIEW_ID}"', page, count=1)
        if n:
            return page
    sys.exit("ERROR: 冒頭の概要（.reader-summary__title か .reader-hero）が見つからない")


def kept_date(out: Path, page: str) -> "str | None":
    """日付の所を除いて out と page が同じなら、out の日付を返す。違えば None。"""
    if not out.exists():
        return None
    parts = page.split(UPDATED_MARK)
    pattern = (
        re.escape(parts[0])
        + r"(?P<d>\d{4}-\d{2}-\d{2}|unknown)"
        + r"(?P=d)".join(re.escape(p) for p in parts[1:])
    )
    m = re.fullmatch(pattern, out.read_text(encoding="utf-8"), re.S)
    return m.group("d") if m else None


def update_sitemap_lastmod(out: Path, updated: str) -> None:
    """sitemap.xml の該当 <url> の <lastmod> をビルド日付に追随させる（pd#122）。"""
    if updated == "unknown":
        return
    sm = ROOT / "sitemap.xml"
    xml = sm.read_text(encoding="utf-8")
    loc = f"https://uminomae.github.io/project-design-theory/reader/{out.name}"
    pattern = re.compile(
        r"(<loc>" + re.escape(loc) + r"</loc>\s*<lastmod>)[^<]+(</lastmod>)"
    )
    new_xml, n = pattern.subn(lambda m: m.group(1) + updated + m.group(2), xml)
    if n and new_xml != xml:
        sm.write_text(new_xml, encoding="utf-8")
        print(f"OK: sitemap.xml lastmod -> {updated} ({out.name})")


def main() -> None:
    for src, tpl, out, style in PAGES:
        build(src, tpl, out, style)


if __name__ == "__main__":
    main()
