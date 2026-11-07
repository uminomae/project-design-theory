# CLAUDE.md

プロジェクトデザイン論のサイトと、その論拠を置く repo。構築中。方針は `docs/BUILD-PLAN.md`。
対話する人間の固有名詞は **pjdhiro**。

## 絶対原則

- **この repo は公開**。入れる前に `docs/PUBLISH-CHECK.md` の点検を通す。迷うものは入れずに pjdhiro に確かめる。
- **今までの repo（project-design・creation-space・kesson-space・awareness-space）は材料として読む**。そのまま写さない。調査結果は一次ソースで照合し直し、通ったものを書き直す。
- **pjdhiro の発言は趣旨を残す**。誤字・脱字は直してよい。何への答えだったかを添え、Claude の推測を混ぜない。趣旨が変わりうる直しは pjdhiro に確かめる。
- **取り消せない操作、価値判断を伴う操作は pjdhiro の明示的承認なしに実行しない**。
- **しっくり感の判定・理論の採否・公開判定は pjdhiro が行う**。

## 規約の持ち込み

今までの repo の規約（調べ方・執筆・品質の検査）は、見直してから一つずつ入れる。入れるまでは、この CLAUDE.md と `docs/` にあるものだけが規約。見直しの記録は `docs/RULES-REVIEW.md`。

## 対話・執筆の前に読む

1. `docs/rules/stance.md`：pjdhiro の見方と判断の仕方。迷ったら、pjdhiro ならどう判断するかをここで確かめる。
2. `docs/rules/corrections.md`：Claude が繰り返す誤りの型。自分の案がどの型に当たるかを見る。
3. `docs/rules/writing.md`：公開文の書き方。
4. `docs/rules/sources.md`：調べ方と原典の照合（調べもの・引用をするとき）。

新しい指摘を受けたら、同じセッションで stance.md か corrections.md に足す。

## セッションの終わりに

毎回、セッションを閉じる前に次を行う（pjdhiro 2026-11-07）。

1. このセッションで pjdhiro が示した判断や見方を、`docs/rules/stance.md` に足すか直す。何への答えだったかを添える。
2. このセッションで Claude が指摘された誤りを、`docs/rules/corrections.md` の型に当てはめる。当てはまる型が無ければ型を足す。同じ誤りを繰り返さないよう、その型の「書く前の確認」を直す。
3. 足したもの・直したものを pjdhiro に短く伝える。何も無ければ、無いと伝える。

## Git

- 作業ブランチは `develop`。`main` へのマージは公開にあたるので、pjdhiro が判断する。
- commit の末尾：`Co-Authored-By: Claude <noreply@anthropic.com>`
- 初回だけ `git config core.hooksPath .githooks` を実行して、公開前の点検を有効にする。
