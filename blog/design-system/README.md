# blog/design-system — ブログの見た目

ブログだけで使う見た目の決まり。pd/ のサイト（暗い地・青い光）とは別にした。ただし右上の Menu は、サイトと同じ形と項目にした（2026-11-28）。紙に近い生成りの地に墨の文字、印に藍を一色、工事中や注意にだけ朱を使う。OS が暗い設定のとき、または `data-theme="dark"` のときは暗い見た目になる。

## ファイル

| ファイル | 中身 |
|---|---|
| `tokens.css` | 色・文字・幅・余白・形の名前（`--bl-*`）。明るい見た目と暗い見た目の両方の値 |
| `base.css` | 要素そのもの（本文・見出し・リンク・表・コード・リスト） |
| `components.css` | 部品（`bl-` で始まる class） |
| `theme.js` | 明るい・暗いの切り替えボタン。選んだものはその端末にだけ覚える |
| `menu.js` | 右上の Menu。項目と描画はサイトの正本（`src/content/site-data.mjs`・`src/ui/menu.js`）を読み込み、開閉（外を押す・Escape で閉じる）を受け持つ。`type="module"` で読み込む |
| `dialog.js` | 開く窓（モーダル）。URL の `#窓の id` で開いた状態で出せる |
| `list.js` | 一覧の絞り込み（タグ・語・日付の並べ替え）。URL の `?tag=`・`?q=`・`?sort=old` で状態を渡せる |

読み込む順は `tokens.css` → `base.css` → `components.css`。ページの中の `<style>` でも、色や大きさは `var(--bl-…)` で書き、値を直に書かない。

## トークン

| 名前 | 使いどころ |
|---|---|
| `--bl-bg`・`--bl-surface` | 地・一段浮かせた面（カード・本人の言葉・畳み） |
| `--bl-ink`・`--bl-ink-sub` | 本文・日付や添え書き |
| `--bl-rule` | 罫線・枠 |
| `--bl-accent`・`--bl-accent-soft` | 藍。リンク・見出しの印・タグ・注記の地 |
| `--bl-mark`・`--bl-mark-soft` | 朱。工事中・注意だけ。一ページに一、二か所まで |
| `--bl-font-body`・`--bl-font-ui`・`--bl-font-mono` | 本文は明朝（Noto Serif JP）、日付・札・ボタンはゴシック（Noto Sans JP） |
| `--bl-font-menu` | 右上の Menu と見た目の切り替え。サイトの Menu と同じ EB Garamond（和文は Noto Serif JP） |
| `--bl-size-*` | xs・sm・base・lg・xl・2xl |
| `--bl-measure`・`--bl-wide` | 本文の柱（36rem）・一覧や広い図（46rem） |
| `--bl-gutter` | 狭い画面の左右の余白（16px） |
| `--bl-space-1`〜`8` | 4・8・12・16・24・32・48・72px |
| `--bl-shadow`・`--bl-shadow-pop` | 面の影・開いた Menu の影 |

## 部品

| class | 何に使うか |
|---|---|
| `bl-header`・`bl-footer` | 上の帯（ブログの名前）と足 |
| `bl-topbar`・`bl-menu-toggle`・`bl-site-menu`・`bl-theme-toggle` | 右上に固定の Menu と見た目の切り替え。サイトの HOME・読み物の Menu（`pd/docs/DESIGN-RULES.md` §14）と同じ形で、項目は `menu.js` が描く。`bl-site-menu` の中の `menu-label`・`menu-current`・`hr` は描画の側の class |
| `bl-main`（`--wide`） | 本文の柱。一覧は `--wide` |
| `bl-page-title`・`bl-page-lede` | 一覧のページの題と添え書き |
| `bl-filter`・`bl-input`・`bl-select`・`bl-chip` | 一覧の絞り込み。`bl-chip` は `aria-pressed="true"` で選んだ状態 |
| `bl-cards`・`bl-card`（`__thumb`・`__date`・`__title`・`__lede`） | 記事のカード。題のリンクがカード全体を覆い、タグはその上で押せる |
| `bl-empty` | 当てはまるものが無いとき |
| `bl-post`（`__head`・`__title`・`__meta`・`__actions`・`__body`） | 記事。`__actions` は日付の下のボタン（解説を開く など） |
| `bl-tags`・`bl-tag` | タグ。リンクにすると絞り込んだ一覧へ飛ぶ |
| `bl-quote` | 引用。`<cite>` で出どころ |
| `bl-voice`（`__label`） | 本人の言葉。誰の言葉かを札に書く |
| `bl-note` | 補足の注記 |
| `bl-wip` | 工事中の印。文字は「🚧 工事中」とだけ |
| `bl-figure` | 図と説明 |
| `bl-wide` | 本文の柱より広く出す図・表 |
| `bl-details`（`__body`） | 畳み（詳しく） |
| `bl-sources` | 出典 |
| `bl-pager` | 前後の記事 |
| `bl-open-dialog`・`bl-dialog`（`__bar`・`__close`・`__body`） | 開く窓。解説などを本文と分けて置く |
| `bl-visually-hidden` | 画面に出さず読み上げにだけ渡す |

部品を足すときは、ここの表にも足す。
