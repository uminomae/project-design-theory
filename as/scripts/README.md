# scripts

補助スクリプト置き場。

- `check-issue-close-state.sh`: `.cache/outbox/DONE-*.md` と GitHub Issue 状態を照合し、close 漏れを検出する
- `build-wiki-terms.mjs`: `pd/wiki` の実在するページ（concepts/・keywords/・根）から用語マップを作り、`src/wiki-terms.js` に書き出す。wiki のページを足したり名前を変えたりしたら `node scripts/build-wiki-terms.mjs` を実行し直す
- `compile-content-links.mjs`: `assets/about/*.md` に同じ用語マップで wiki リンクを入れ、`assets/about/compiled/` に書き出す
