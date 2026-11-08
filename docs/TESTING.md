# 検査と自動化

この repo で、何を機械で確かめ、何を画面で見て、何を人が判断するか。今までの四つの repo のテスト・品質管理・自動化を、考え方を継いで今の形に合わせた。まだ形の決まらないものは、作りたい内容だけをここに書き、要る場面が来たときに作って「今あるもの」へ移す。

経緯：pjdhiro 2026-11-08「以前の自動化やテスト類は馴染まないものが多いと思います。コンセプトは継承しつつも、今の形に合わせてほしい。まだ定まらないものは作りたい内容だけを記述し、今後の作業の中で適宜追加していくものとして」（#70 を片付けたあと、ks の古い E2E のテストが今のページを見ていないと報告したことへの答え）。`docs/RULES-REVIEW.md` の「まとまり C」と、`docs/harness-pending/` の名前だけ置いたもののうち、検査と自動化に当たるものを、ここで扱う。

## 考え方

今までの repo から継いだ考え方は四つ。

1. 白黒がつくものは機械で見て、develop と main に入れるたびに回す。今までの `ci.yml`・`test.yml`・config の整合のテストがこれに当たる。
2. 判断が要るものは、機械は候補を挙げるだけにして、一つずつ見る。言い訳の地の文や帰属の形の監査がこれに当たる。判定は、Claude が見て、迷うものを pjdhiro に聞く。
3. 見た目と動きは画面で確かめる。今までは E2E のランナーや Claude in Chrome で見ていた。今は、本体の checkout を常駐させた http://localhost:3001/ を、アプリのブラウザで開いて見る（CLAUDE.md の「Git」）。
4. 道具立ては小さくする。エージェントの種類・段階の名前・通知の仕組みは、今の進め方（セッションと、セッションの記録）で足りるなら作らない。

## 今あるもの

### 入れるたびに回す：`scripts/check.sh`

サイトのファイルを直したら、commit の前に `bash scripts/check.sh` を回す。同じものを `.github/workflows/check.yml` が develop と main で回す。

| 検査 | 見ること | もと |
|---|---|---|
| 今までの repo を前提にした参照 | 今までの四つの repo の URL・名前の決め打ち・兄弟の並びを前提にしたスクリプト | 新しく書いた（`scripts/check-old-repo-refs.mjs`） |
| pd：repo をまたぐ URL | 公開の URL の形 | project-design の `ci.yml` |
| pd：読み物の内部アンカー | 読み物の中の「§2」などのページ内リンクの行き先 | project-design |
| pd：wiki の孤立ページ・不在の出典・旧用語 | 公開する wiki の孤立ページ・出典のパス・使わなくなった用語。`--check` で報告を書き換えずに見る | project-design の `wiki-lint` |
| pd：wiki が読めない原典を出典にしていない | 取れない原典を、wiki の出典ページが読んだことにしていない | project-design の `wiki-access-lint`（pd#114・cs#252） |
| as：テスト | 言語・画像カード・調査の一覧・スライドの組み立て | awareness-space の `test.yml` |
| ks：config の整合・export | 3D の設定と開発パネルと言語の構造 | kesson-space の `test.yml` |
| ks：devlog の移動と深いリンク・日英 | 開発記録のページ送り・深いリンク・日英の対応 | kesson-space の `devlog.yml`・`package.json` |
| 公開するファイルの文字化け | 公開するページ・データ・読み物の正本に U+FFFD が無い | project-design の `ci.yml` |

公開してよいかの点検（`docs/PUBLISH-CHECK.md`）は、commit のときに `.githooks/` が回す。

### 画面で確かめる：3001 と `pd/src/page-check.js`

直したら、3001 をアプリのブラウザで開いて見る。日英は `?lang=en` を付けて、スマートフォンは幅を変えて、開き直す。コンソールのエラーも見る。

欠損駆動思考（`/ks/`）と意識とは（`/as/`）のトップページは、開いたまま次を回すと、部品・言葉・リンク・横のはみ出しを機械で見られる。見た目の良し悪しは見ない。

```js
const { run } = await import('../src/page-check.js'); await run();
```

見ること：`<html lang>` と URL の言語、題と言語の切り替えの言葉、その言語の本文だけが見えていること、章と記録の畳みがあること、id が重ならないこと、英語の表示に日本語が残っていないこと、背景の canvas、画像の読み込み、横のはみ出し、本文のサイト内リンクとページ内リンク。もとは kesson-space の E2E のランナー（`?test` で読み込む `ks/tests/e2e-runner.js`）。今のページに無い部品を見ていたので、考え方だけを継いで書き直した。

### 手で回す点検（候補を挙げるだけ）

| 点検 | いつ回すか | 見方 |
|---|---|---|
| `pd/scripts/reader-self-defense-lint.mjs` | 読み物を書いた・直したとき | Claude が Claude に説明している地の文（型 F）の候補。読者向けの文か、規約への言い訳かを一つずつ見る |
| `pd/scripts/reader-attribution-audit.mjs <正本.md>` | 読み物に pjdhiro の言葉や出典を足したとき | 一文ごとの帰属の形。間接話法や帰属の無い地の文が、本人の言葉や原典とずれていないか（型 G・H） |
| `pd/scripts/wiki-cross-check.mjs --all --dry-run` | wiki の出典ページと cs の出典ノートを直したとき | 二つの食い違いの候補。書き出すときは `pd/.cache/` に出る |
| cs の検査（`cs/scripts/qc-all.sh` ほか） | cs を直したとき | cs の全体のレビューで、今の形に合わせる（`docs/cs-review/README.md` の段 0）。それまではここで扱わない |

### 自動で動くもの

- `.claude/hooks/content-compile.sh`：公開ページが読む Markdown を書き換えたら、wiki のリンク入りの版を作り直す。
- launchd（`com.uminomae.project-design-theory`）：本体の checkout を `scripts/serve.sh` で 3001 に常駐させる。fswatch があれば、`pd/wiki/` が変わると wiki を組み直す（今までの `wiki-build.sh` の役目）。
- GitHub Actions：`check.yml`（上の検査）と `pages.yml`（公開）。
- 定期実行（launchd の定期・routine・scheduled task）は置いていない。

## 作りたいもの（まだ定まらない）

作る場面が来たら、ここから一つ選んで作り、上の「今あるもの」に移す。

| 作りたいもの | 作りたい内容 | 作るきっかけ | もと |
|---|---|---|---|
| 読み物の読解テスト | 文脈の無い読み手（別のモデル）に公開ページの文字だけを読ませ、冒頭だけで何の話で答えは何かが分かるか（型 R）、用語が初出で分かるか、pjdhiro の趣旨とずれて読まれないかを見る。抽出のスクリプト `pd/scripts/reader-llm-comprehension-test.mjs` は動く | #62（読解テストを今の構成に合わせて書く） | project-design の `reader-comprehension`・`reader-litt-conformance` |
| 念入りなレビューの手順 | 調べる・コードを見る・画面を見るを、コンテキストを分けたエージェントに分けて頼み、結果を突き合わせる。使えるスキル（`/code-review` など）があれば使う（stance.md 2-8）。手順と頼み方の雛形を一つにまとめる | 次に大きなレビューを頼まれたとき。cs は `docs/cs-review/` に計画がある | project-design の `adversarial-review`・`agent-team-workflow`・`model-dispatch`・`team-*` |
| ほかのページの画面の確かめ | `page-check.js` を、プロジェクトデザイン論のトップ・読み物・創造とはのトップへ広げる。スマートフォン幅で、表が横にはみ出さないか、文字が小さすぎないかも見る | それらのページを作り直すとき | project-design の `static-checks.js`・`responsive-test.*` |
| キーボードで使えるか | Tab で順に移れるか、隠れた部品に移らないか、畳みや切り替えを Enter で開けるか、読み上げの名前があるか | ks・as のトップの部品を足すとき | kesson-space の E2E（TC-10・ISS-001） |
| 読み込みの速さの目安 | 初めの表示までの時間・転送量・リクエスト数の目安を決め、超えたら知らせる | 3D や画像を足して重くなったとき | kesson-space の E2E（TC-08・TC-11） |
| デザインの規約に沿うか | 色・文字の大きさ・余白が、決めたデザインの規約に沿うかを見る | デザインの規約（まとまり A の「あとで」・E）を決めたとき | project-design の `ui-lint.sh` |
| ks の 3D の確かめ | シェーダーや 3D の設定を直したとき、設定の値と開発パネルと描画が揃っているかを見る。設定の整合は check.sh に入っている | ks のシェーダーを直すとき | kesson-space の `code-reviewer`・`config-validator` |
| wiki の作り方の自動化 | 正本（knowledge）を直したら、関わる wiki のページを知らせ、作り直し、`wiki/log.md` に書き足す | wiki の作り方（まとまり D）を決めたとき | project-design の `wiki-stale-check`・`wiki-log-append`・`wiki-gen-check` |
| 英語の記事をそろえる定期の作業 | ks の記事の日本語版と英語版のずれを定期に見る。手では `cd ks && npm run articles:en:check` で見られる。通知先は決めていない | 英語の記事を育てるとき | kesson-space の `articles-en-routine.sh` |
| 定期のレビュー | この repo の中のことだけを、決まった間隔で見直す（`~/dev/CLAUDE.md`） | pjdhiro が頼んだとき | project-design の `periodic-review` |

## 外したもの

今の進め方に合わないので外した。中身は 53c4db8 にある（`git show 53c4db8:<パス>`）。

| ファイル | 外した理由と、考え方の行き先 |
|---|---|
| `ks/tests/e2e-runner.js`・`ks/tests/e2e-test-design.md`・`ks/src/pages/e2e-auto-run.js` | 今のページに無い部品（`h1#title-h1`・`.subtitle`・GUIDES のカード ほか）を見ていた。考え方は `pd/src/page-check.js` と、上の「キーボードで使えるか」「読み込みの速さの目安」に継いだ |
| `ks/scripts/agent-post-check.sh`・`cs/scripts/agent-post-check.sh`・`as/scripts/check-issue-close-state.sh` | サブエージェントが `.cache/outbox/DONE-*.md` を書く、今までの進め方を確かめていた。今はその置き場を使わない。頼んだ仕事が終わったかは、セッションの報告を、commit・差分・画面で確かめてから伝える（型 K） |
| `cs/scripts/budget-check.sh` | サブスクの枠からサブエージェントを起こしてよいかを決めていた。今は、大きな作業の前に、コンテキストを使いすぎないかを考える（stance.md 2-8） |

## 見つけたもの

- `cs/evidence/similar-papers/validation/VAL-REPLACEMENT-33-20260410.md` に文字化けが 7 行ある。記録なので文字化けの検査の外に置いた。直すには、化ける前の文が要る。
