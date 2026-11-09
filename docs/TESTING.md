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
| cs：照合の記録 | 分野ごとの照合の記録（`cs/evidence/evidence-Dxx-*.md`）の形：frontmatter・文責・一面の表・照合の状態と判定の語・確かめ先・台帳の行・絶対パス・文末。見るものは `docs/cs-review/README.md`「記録の品質の点検」 | 新しく書いた（`scripts/check-cs-evidence.mjs`、2026-11-08・#73。pjdhiro「レビュー時のルールもテストを作っていかないとね」） |
| as：照合の記録と台帳 | 領域ごとの照合の記録（`as/evidence/evidence-Axx-*.md`）の形：frontmatter・文責・探し方・一面の表・照合の状態と判定の語・確かめ先・絶対パス・文末・本文の記号とパス。原典の台帳（`as/knowledge/raw/manifest.md`）の行の形と、台帳の「使う記録」の行の書誌（第一著者・年・題の頭・DOI）が記録の本文にあるか。画面に出す一覧（`as/evidence/reviewed.json`）の形。見るものは `docs/as-review/README.md`「記録の品質の点検」 | 新しく書いた（`scripts/check-as-evidence.mjs`、2026-11-10・#95。形の元は cs の点検） |
| 道具：原典を探す find-source | `scripts/find_source.py` の書誌の一行の読み取り・置き場の分類（誰が上げた版か・確認画面のホスト）・判定の段・PDF との突き合わせ（前付けだけ・再録の印・別の題・別の DOI・著者稿）。ネットワークと PDF には触らない。例は cs のレビューで実際に起きた取り違えから取った（2026-11-09） | この repo で新しく書いた（`scripts/test_find_source.py`） |

公開してよいかの点検（`docs/PUBLISH-CHECK.md`）は、commit のときに `.githooks/` が回す。

### 画面で確かめる：3001 と `pd/src/page-check.js`

直したら、3001 をアプリのブラウザで開いて見る。日英は `?lang=en` を付けて、スマートフォンは幅を変えて、開き直す。コンソールのエラーも見る。

欠損駆動思考（`/ks/`）と意識とは（`/as/`）のトップページは、開いたまま次を回すと、部品・言葉・リンク・横のはみ出しを機械で見られる。見た目の良し悪しは見ない。

```js
const { run } = await import('../src/page-check.js'); await run();
```

見ること：`<html lang>` と URL の言語、題と言語の切り替えの言葉、その言語の本文だけが見えていること、章と記録の畳みがあること、id が重ならないこと、英語の表示に日本語が残っていないこと、背景の canvas、画像の読み込み、横のはみ出し、本文のサイト内リンクとページ内リンク。もとは kesson-space の E2E のランナー（`?test` で読み込む `ks/tests/e2e-runner.js`）。今のページに無い部品を見ていたので、考え方だけを継いで書き直した。

### 念入りなレビュー：`docs/rules/review.md`

読み物を develop に入れたあと・main に出す前に、別のセッションの「作った・照合した」という報告を出来上がりで確かめ直す手順（2026-11-09・#79 のページで初めて回した）。五つの点検に分ける：① 機械（check.sh・帰属の監査・型 F の lint・アンカー・照合の状態の語の数え上げ・DOI を Crossref で照らす・退ける語の grep・外部リンクの生死・pjdhiro の言葉の一字ずつの照合）、② 内容の照合（分野ごとのエージェントが、本文照合済の中から抜き取って一次情報と照らし直す）、③ 文体と規約（エージェント一人）、④ 画面（司令塔。3001 の PC とスマートフォン幅）、⑤ 文脈ゼロの読解（エージェント一人に、公開ページの文字だけを渡す）。指摘の形・重さ・エージェントの分け方・頼む文に入れること・一覧と報告の形は `review.md`。

### 手で回す点検（候補を挙げるだけ）

| 点検 | いつ回すか | 見方 |
|---|---|---|
| `pd/scripts/reader-self-defense-lint.mjs` | 読み物を書いた・直したとき | Claude が Claude に説明している地の文（型 F）の候補。読者向けの文か、規約への言い訳かを一つずつ見る |
| `pd/scripts/reader-attribution-audit.mjs <正本.md>` | 読み物に pjdhiro の言葉や出典を足したとき | 一文ごとの帰属の形。間接話法や帰属の無い地の文が、本人の言葉や原典とずれていないか（型 G・H） |
| `pd/scripts/wiki-cross-check.mjs --all --dry-run` | wiki の出典ページと cs の出典ノートを直したとき | 二つの食い違いの候補。書き出すときは `pd/.cache/` に出る |
| cs の検査（`cs/scripts/qc-all.sh` ほか） | cs を直したとき | cs の全体のレビューで、今の形に合わせる（`docs/cs-review/README.md` の段 0）。それまではここで扱わない |
| `NODE_USE_ENV_PROXY=1 node scripts/check-as-evidence.mjs --crossref` | as の領域を回して台帳に行を足したとき | 台帳の DOI を Crossref で引き、題の頭と年が台帳と合うかを見る。年は号とオンラインの公開で違うことがあるので、合わない行は台帳の書誌の注記と見比べる（2026-11-10 に A01 の 18 本で回し、すべて合った） |
| `bash scripts/find-source.sh check <PDF> --cite "<台帳の書誌の一行>"` | 原典の PDF を手元に足したとき・台帳の行を直したとき | 判定が「合わない」「注意がある」の行を目で見る。画像だけの PDF は「機械では確かめられない」と出るので、表紙を見る。手元の全部に流す形はスキル `find-source`（2026-11-09 に 223 本に流し、版の違い 7 と取り違え 2 が出た） |

### 自動で動くもの

- `.claude/hooks/content-compile.sh`：公開ページが読む Markdown を書き換えたら、wiki のリンク入りの版を作り直す。
- launchd（`com.uminomae.project-design-theory`）：本体の checkout を `scripts/serve.sh` で 3001 に常駐させる。fswatch があれば、`pd/wiki/` が変わると wiki を組み直す（今までの `wiki-build.sh` の役目）。
- GitHub Actions：`check.yml`（上の検査）と `pages.yml`（公開）。
- 定期実行（launchd の定期・routine・scheduled task）は置いていない。

- main へ送る前の確かめ（2026-11-09）：`.githooks/pre-push` が、main への push を、送る commit を `bash scripts/publish-main.sh <送る枝>` で見たあとでなければ止める。道具は、一緒に公開される commit・変わるファイル・その日の記録の「main には送っていない」を出す。develop には、公開の判断を待っている別のセッションの変更が入っていることがあるため（`docs/rules/corrections.md`「繰り返し」の表）。

## 作りたいもの（まだ定まらない）

作る場面が来たら、ここから一つ選んで作り、上の「今あるもの」に移す。

| 作りたいもの | 作りたい内容 | 作るきっかけ | もと |
|---|---|---|---|
| 読み物の読解テスト（ページごとの質問） | 文脈の無い読み手に公開ページの文字だけを読ませる手順そのものは、念入りなレビューの ⑤ として `docs/rules/review.md` にある（抽出は `pd/scripts/reader-llm-comprehension-test.mjs`。spec の無いページは共通の七問を使う。2026-11-09）。残っているのは、ページごとの質問（TEST の spec）を今の構成に合わせて書くこと。pjdhiro の趣旨とずれて読まれないかは、ページごとの質問でしか見られない | #62（読解テストを今の構成に合わせて書く） | project-design の `reader-comprehension`・`reader-litt-conformance` |
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
