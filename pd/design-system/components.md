# project-design / design-system / components

**status**: placeholder（techo#126 次アクション(3) で拡充予定）

## SYSTEMIZE 候補（観点A 棚卸しより）

3 repo 棚卸しで SYSTEMIZE 判定を受けた component の一覧。本 issue (#84) では**名前と出自の記録のみ**。実装は別 issue で段階的に移植する。

### 共通 layout

- `section > .section-content-wrap > .container` 三層ラップ（z-index 責務分離）
- card grid 2col / 3col（Bootstrap row-cols ベース）
- kesson-card（h-100 / translateY hover / soft shadow）

### 共通 UI

- section-heading（mono uppercase 0.15em）+ section-heading-link（self anchor）
- room-narration + room-narration-text（幕間ナレーション）
- viewer glass（bg / border / shadow / backdrop-filter）
- 軽量 modal pattern（`data-modal-open / data-modal-close` 属性駆動、pd 由来）
- about-trigger（`i` button、pd と as で共有）
- copy-target pattern（pd 由来、howto / snippet 用）

### 共通 dev utility

- `clear-storage.html`（9 行、dev utility、cs 由来）
- startup-error overlay（boot 失敗可視化、cs 由来）
- `?dev` パラメータでの panel 有効化

### 共通 i18n（三つ巴、要統一判断）

- kesson: `data-ja / data-en`（leaf 直書き）
- cs / as: `data-i18n + data-i18n-attr-*`（key + dict、aria-label 含む）
- pd: `data-i18n-key + data-i18n-aria-label-key`

## 参照

- 親 issue: [techo#126](https://github.com/uminomae/techo/issues/126)
- 本 repo issue: [#84](https://github.com/uminomae/project-design/issues/84)
