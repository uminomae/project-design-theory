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
| pd：読み物の内部アンカー | 読み物の中の「§2」などのページ内リンクの行き先。ほかの読み物の章へ飛ぶリンク（`<ほかの読み物>.html#id`）の行き先も見る（2026-11-10・#111。Love駆動開発の章題が変わって 5 本が切れていた） | project-design。ページをまたぐ分は新しく足した |
| pd：読み物の版番号 | Love駆動開発の題の隣の版（1.xxx）が、正本とテンプレートに触れた commit の数と合うか（`pd/scripts/reader_version.py`）。1.500 に届いたら、2.x にするかを pjdhiro に諮る知らせを出す（2026-11-13） | 新しく足した |
| pd：引用カードの前の文脈 | 対話の形の読み物（いまは Love駆動開発の正本 md）で、pjdhiro の発言の引用カードの直前（空行を除く）が、見出し・畳みの題・組む道具の印（`<!--OPEN-->` など）になっていない。発言の前に、なぜその発言が出たのかが分かる文を置く（`docs/rules/writing.md` §5 の 10）。直前に文があっても唐突なことはあるので、通して読む確かめは残る | 新しく書いた（`scripts/check-quote-context.mjs`・型 R の繰り返し・2026-11-10・#96） |
| pd：wiki の孤立ページ・不在の出典・旧用語 | 公開する wiki の孤立ページ・出典のパス・使わなくなった用語。`--check` で報告を書き換えずに見る | project-design の `wiki-lint` |
| pd：wiki が読めない原典を出典にしていない | 取れない原典を、wiki の出典ページが読んだことにしていない | project-design の `wiki-access-lint`（pd#114・cs#252） |
| pd：wiki の古いページ（知らせるだけ） | 出典が `compiled` 日より後に変わった wiki のページの数。止めない。一覧は `pd/wiki/health/freshness-report.md` | project-design の `wiki-lint` の WL-3 を、git の日付で比べるように作り直した（2026-11-10） |
| pd：wiki の出典ページが無い原典（知らせるだけ） | cs の台帳で読める原典（raw-confirmed・url-verified）なのに wiki の出典ページが無いものの数と、そのうち出典ノートがあるもの。止めない | project-design の `wiki-gen-check.sh` を、知らせるだけの形で作り直した（`pd/scripts/wiki-gen-check.mjs`・2026-11-10） |
| as：テスト | 言語・画像カード・調査の一覧・スライドの組み立て | awareness-space の `test.yml` |
| ks：config の整合・export | 3D の設定と開発パネルと言語の構造 | kesson-space の `test.yml` |
| ks：devlog の移動と深いリンク・日英 | 開発記録のページ送り・深いリンク・日英の対応 | kesson-space の `devlog.yml`・`package.json` |
| 公開するファイルの文字化け | 公開するページ・データ・読み物の正本に U+FFFD が無い | project-design の `ci.yml` |
| 道具の呼び出しの文字の紛れ込み | Claude がファイルを書く道具の閉じタグなどの文字（invoke・parameter・content の閉じタグ）が、git に入っている文字のファイルに残っていない（2026-11-10・#111。読み物の正本と精読ノートの終わりに残り、公開ページに出ていた） | 新しく書いた（`scripts/check.sh` の `tool_residue`） |
| pd：読み物の出典に原典へのリンク | 読み物の正本（`pd/knowledge/research/*/READER-*.md`）の「出典：」の行を、括弧の外の「／」で一件ずつに分け、Markdown のリンクが一つも無い出典が無いか（`docs/rules/sources.md` §10）。リンクの無い出典は、2026-11-12 に 0 になった（`--strict all`）。四つの入口と cs/as/ks の読み物（HTML）の「出典：」「Source:」の段も止める。wiki の出典ページ（`pd/wiki/sources/`）の URL の無いページは数を知らせる（2026-11-12 に 13 あり、同じ日に 0 にして `--strict all,wiki` で止める側に上げた。間主観性のまとめの 4 ページは、主要著作ごとに張った）。リンクの無い出典には、同じ置き場の調べのノートから URL の候補を並べる。cs・as の記録の窓は、記録の検査が本文照合済の節の確かめ先を見る | 新しく書いた（`scripts/check-source-links.mjs`・2026-11-11） |
| cs：照合の記録 | 分野ごとの照合の記録（`cs/evidence/evidence-Dxx-*.md`）の形：frontmatter・文責・一面の表・照合の状態と判定の語・確かめ先・台帳の行・絶対パス・文末・`未照合（…）` の括弧の頭が `docs/rules/sources.md` §3 の 7 の語か（2026-11-11）。見るものは `docs/cs-review/README.md`「記録の品質の点検」 | 新しく書いた（`scripts/check-cs-evidence.mjs`、2026-11-08・#73。pjdhiro「レビュー時のルールもテストを作っていかないとね」） |
| cs：現在の定義のページと英語の写し | 創造の5段階の「現在の定義」のページ（`cs/reader/five-stages.html`・`five-stages-en.html`）が、正本 `cs/knowledge/schema/five-stages.md` から生成し直されているか。英語の写し（`five-stages.en.md`）の頭のハッシュが、正本の今の抜き出しと合うか（合わなければ、正本が変わったのに英語を訳し直していない） | 新しく書いた（`cs/scripts/build-five-stages.py --check`・2026-11-10・#73） |
| as：照合の記録と台帳 | 領域ごとの照合の記録（`as/evidence/evidence-Axx-*.md`）の形：frontmatter・文責・探し方・一面の表・照合の状態と判定の語・確かめ先・絶対パス・文末・本文の記号とパス・`未照合（…）` の括弧の頭が `docs/rules/sources.md` §3 の 7 の語か（記録と台帳。2026-11-11）。原典の台帳（`as/knowledge/raw/manifest.md`）の行の形と、台帳の「使う記録」の行の書誌（第一著者・年・題の頭・DOI）が記録の本文にあるか。画面に出す一覧（`as/evidence/reviewed.json`）の形。見るものは `docs/as-review/README.md`「記録の品質の点検」 | 新しく書いた（`scripts/check-as-evidence.mjs`、2026-11-10・#95。形の元は cs の点検） |
| cs・as：記録が書いた wiki の誤りの残り（知らせるだけ） | 調査の記録（cs・as の evidence）が「wiki の頁「…」のここが誤り」と書いた行を拾い、行が書かれた時刻（git blame）と、指された頁が最後に変わった時刻（git log）を比べる。頁がそのあと変わっていないものの数を出す。止めない。wiki の古いページの知らせは正本が変わったときにしか出ないので、記録にだけ書かれた誤りを別に拾う。頁が変わったものは、直ったかどうかを目で確かめる（機械では分からない）。一覧は `node scripts/check-evidence-wiki-notes.mjs`。2026-11-10 の数：52 件のうち、変わっていない 29・変わった 21・済みと書いてある 2 | 新しく書いた（`scripts/check-evidence-wiki-notes.mjs`・2026-11-10・#111） |
| 公開のページと記録（作業の節は止める。ほかは知らせるだけ） | ② は 2026-11-10 に 0 になったので、当たりがあれば落とす（`--strict sections`）。① と ③ は今は当たりがあるので、落とさずに数を出す。① 読み物（`pd/reader/*.html`）と入口（pd・cs・as・ks の `index.html`）の、読者に見える文字に、今までの repo の名前（project-design・creation-space・awareness-space・kesson-space）が出ていないか。タグ・script・style・URL は外して見る。JavaScript が後から差し込む文字は見ない（`docs/rules/writing.md` §6-3）。② 公開の調査の記録（`cs/evidence/evidence-D*.md`・`as/evidence/evidence-A*.md`）の見出しに、作業の節（照合中・判断が要る・司令塔が直す）が残っていないか（`stance.md` 2-7）。③ 読み物の表のうち、幅に収める囲み（`.tablefit`）が無く、スマートフォンの幅で表の中を横に送る形のもの（`pd/src/styles/reader-flow.css` が `.tablewrap` の表に `min-width: 520px` を付けている。数えるのは HTML の形で、画面の実際のはみ出しではない）。2026-11-10 の数：① 34 か所（7 本）・② 43 節（30 本。同じ日に記録から作業の節を外して 0）・③ 4 表（1 本）。0 になったものは、`scripts/check.sh` の呼び出しに `--strict names`（`sections`・`tables`）を付けて「止める」に上げる | 新しく書いた（`scripts/check-public-notices.mjs`・2026-11-10・#111） |
| cs：原典の台帳と記録の突き合わせ（知らせるだけ） | 記録が「本文照合済」とした原典の台帳の行（その分野で、書誌に第一著者の姓と年がある行）が、読めない状態（`blocked-access`・`citation-only`）のままになっていないか。台帳の行で、2 列目に状態の語が入り列がずれているもの。止めない。著者が欧文の姓と年で書かれていない原典（和書など）は拾えない。2026-11-10 の数：読めない状態のまま 3・列のずれ 28。直ったら `--strict` に上げる | 新しく書いた（`scripts/check-cs-ledger.mjs`・2026-11-10・#111） |
| 道具：原典を探す find-source | `scripts/find_source.py` の書誌の一行の読み取り・置き場の分類（誰が上げた版か・確認画面のホスト）・判定の段・PDF との突き合わせ（前付けだけ・再録の印・別の題・別の DOI・著者稿）。ネットワークと PDF には触らない。例は cs のレビューで実際に起きた取り違えから取った（2026-11-09） | この repo で新しく書いた（`scripts/test_find_source.py`） |

公開してよいかの点検（`docs/PUBLISH-CHECK.md`・`scripts/publish-check.sh`）は、commit のときに `.githooks/pre-commit` が、commit しようとしている分だけを回す。repo の全部（`--all`）は、`.github/workflows/check.yml` が develop と main で回す。手元だけの語の一覧は git に無いので、そこで回るのは形の点検だけ（手元のパス・鍵・メール・共有のリンク・書庫の中のファイルの名前）。語の点検を全部に回すのは、手元で `scripts/publish-check.sh --all`（8 秒ほど）。形のうち `~/` のパス・一時置き場のパスは、通す一覧（`.publish-check-allow`）で、確かめて通したもの（ok）と判断待ち（wait）を持つ。共有のリンクは、公開の repo に置いてよいかを pjdhiro が決めるまで、止めずに数とファイルを知らせる（2026-11-10・#111）。手元の `--all` は、書庫 1 本（中に非公開の repo の発言の置き場の名前）が判断待ちで、いまは落ちる。

### 画面で確かめる：3001 と `pd/src/page-check.js`

直したら、3001 をアプリのブラウザで開いて見る。日英は `?lang=en` を付けて、スマートフォンは幅を変えて、開き直す。コンソールのエラーも見る。

wiki（Quartz）を手元で組むと、サンドボックスの中では画像の生成（フォントの取得）で止まる。wiki の確かめも 3001 で行う（launchd が `pd/wiki/` の変化で組み直す）（2026-11-10・#111 の wiki の直しのセッション）。

欠損駆動思考（`/ks/`）と意識とは（`/as/`）のトップページは、開いたまま次を回すと、部品・言葉・リンク・横のはみ出しを機械で見られる。見た目の良し悪しは見ない。

```js
const { run } = await import('../src/page-check.js'); await run();
```

見ること：`<html lang>` と URL の言語、題と言語の切り替えの言葉、その言語の本文だけが見えていること、章と記録の畳みがあること、id が重ならないこと、英語の表示に日本語が残っていないこと、背景の canvas、画像の読み込み、横のはみ出し、本文のサイト内リンクとページ内リンク。もとは kesson-space の E2E のランナー（`?test` で読み込む `ks/tests/e2e-runner.js`）。今のページに無い部品を見ていたので、考え方だけを継いで書き直した。

### 作る・直すたびの点検の表：`.claude/skills/public-page-review/SKILL.md`

公開ページを作る・直すたびに、commit の前と main に送る前に通す表。これまで公開ページで起きた誤り（fix の commit・#111 の束）から項目を取り、各行に起きた commit を添えてある。直しや指摘があったら同じ作業で行を足し、二度目の誤りは機械の検査へ移す。履歴をどこまで読んだかもスキルに書いてある（2026-11-10）。公開ページを含む commit は、`.githooks/pre-commit` が、表を通した印（`bash scripts/public-page-review.sh --done`。今の index の tree の番号と時刻）が無ければ止める。

### 念入りなレビュー：`docs/rules/review.md`

読み物を develop に入れたあと・main に出す前に、別のセッションの「作った・照合した」という報告を出来上がりで確かめ直す手順（2026-11-09・#79 のページで初めて回した）。五つの点検に分ける：① 機械（check.sh・帰属の監査・型 F の lint・アンカー・照合の状態の語の数え上げ・DOI を Crossref で照らす・退ける語の grep・外部リンクの生死・pjdhiro の言葉の一字ずつの照合）、② 内容の照合（分野ごとのエージェントが、本文照合済の中から抜き取って一次情報と照らし直す）、③ 文体と規約（エージェント一人）、④ 画面（司令塔。3001 の PC とスマートフォン幅）、⑤ 文脈ゼロの読解（エージェント一人に、公開ページの文字だけを渡す）。指摘の形・重さ・エージェントの分け方・頼む文に入れること・一覧と報告の形は `review.md`。

### 手で回す点検（候補を挙げるだけ）

| 点検 | いつ回すか | 見方 |
|---|---|---|
| `pd/scripts/reader-self-defense-lint.mjs` | 読み物を書いた・直したとき | Claude が Claude に説明している地の文（型 F）の候補。読者向けの文か、規約への言い訳かを一つずつ見る |
| `pd/scripts/reader-attribution-audit.mjs <正本.md>` | 読み物に pjdhiro の言葉や出典を足したとき | 一文ごとの帰属の形。間接話法や帰属の無い地の文が、本人の言葉や原典とずれていないか（型 G・H）。表の行も読む：見出しと区切りの行を飛ばし、どの形にも当たらない 12 字以上のセルを CELL として出す（2026-11-10・#111。`--no-table` で表を飛ばす） |
| `pd/scripts/wiki-cross-check.mjs --all --dry-run` | wiki の出典ページと cs の出典ノートを直したとき | 二つの食い違いの候補。書き出すときは `pd/.cache/` に出る |
| cs の検査（`cs/scripts/qc-all.sh` ほか） | cs を直したとき | cs の全体のレビューで、今の形に合わせる（`docs/cs-review/README.md` の段 0）。それまではここで扱わない |
| `NODE_USE_ENV_PROXY=1 node scripts/check-as-evidence.mjs --crossref` | as の領域を回して台帳に行を足したとき | 台帳の DOI を Crossref で引き、題の頭と年が台帳と合うかを見る。年は号とオンラインの公開で違うことがあるので、合わない行は台帳の書誌の注記と見比べる（2026-11-10 に A01 の 18 本で回し、すべて合った） |
| `NODE_USE_ENV_PROXY=1 node scripts/check-cs-evidence.mjs --crossref` | cs の台帳に DOI のある行を足した・直したとき | 台帳（`cs/knowledge/raw/manifest.md`）の書誌の欄か注記にある DOI を Crossref で引き、題の頭と年が台帳の書誌と合うかを見る。書誌の欄の DOI を先に、注記では「DOI」の語のあとを先に見る。2026-11-11 に回し、題の入れ替わり（D10-S11・S12）と、題が無いか略しすぎた行（7 行）を直した。直したあとは 427 本のうち 19 件が合わないと出るが、どれも誤りではない：版の違い（電子版・再刊・working paper・号とオンラインの年）、Crossref に無い登録先（DataCite・JaLC の DOI）、大文字・記号・Crossref の側の綴り。一覧は Issue #111 のコメント。意識とはの点検 10（台帳の行が記録に出てくるか）は、cs の台帳に記録が使う行を見分ける列が無い（`linked_evidence` は 864 行すべてでその分野の記録を指す）ので入れていない |
| `bash scripts/find-source.sh check <PDF> --cite "<台帳の書誌の一行>"` | 原典の PDF を手元に足したとき・台帳の行を直したとき | 判定が「合わない」「注意がある」の行を目で見る。画像だけの PDF は「機械では確かめられない」と出るので、表紙を見る。手元の全部に流す形はスキル `find-source`（2026-11-09 に 223 本に流し、版の違い 7 と取り違え 2 が出た） |

### 自動で動くもの

- `.claude/hooks/content-compile.sh`：公開ページが読む Markdown を書き換えたら、wiki のリンク入りの版を作り直す。pd・cs・ks・as の正本を直したら、それを出典にする wiki のページを Claude に知らせる（`pd/scripts/wiki-stale-check.mjs`・2026-11-10）。知らされたページは、同じ作業で `.claude/skills/wiki-compile/SKILL.md` に沿って作り直す。hook は本体の checkout（`~/dev/pd/project-design-theory`）の版が動く。worktree で hook を直したときは、develop に取り込んでから効く（2026-11-10 に確かめた）。
- wiki の作り直しの指令：区切るとき、CLAUDE.md「セッションの終わりに」の手順 5 で `node pd/scripts/wiki-stale-check.mjs --session-end --log <記録の名前>` を走らせ（並べた分に、本体の `.cache/wiki-order.json` で出した印を付け、24 時間のうちにほかのセッションが同じものを出さない。#130）、古いページと、出典ノートがあるのに出典ページが無い原典があれば、司令塔として別のセッションに作り直しを出す（`.claude/skills/wiki-compile/SKILL.md` の雛形）。古いページは、出典が `compiled` 日より後に変わったものと、同じ日にページの最後の commit より後に変わったもの（2026-11-11 から。`compiled` が日付だけで、作り直したあとの同じ日の直しを拾えなかった）。同じ一覧は `.claude/hooks/wiki-session-start.sh`（SessionStart）と `scripts/session-digest.sh` の終わりにも出て、「区切るときに出す」と添える（pjdhiro 2026-11-10）。
- launchd（`com.uminomae.project-design-theory`）：本体の checkout を `scripts/serve.sh` で 3001 に常駐させる。fswatch があれば、`pd/wiki/` が変わると wiki を組み直す（今までの `wiki-build.sh` の役目）。
- GitHub Actions：`check.yml`（上の検査）と `pages.yml`（公開）。
- 定期実行（launchd の定期・routine・scheduled task）は置いていない。

- main へ送る前の確かめ（2026-11-09・直し 2026-11-10 #111）：`.githooks/pre-push` が、main への push を、送る commit を `bash scripts/publish-main.sh <送る枝>` で見たあとでなければ止める。道具は、一緒に公開される commit・変わるファイル・記録の「main には送っていない」を出して、見た印を置く。印は worktree ごとで、送る commit の番号と置いた時刻が入り、push する commit と番号が合って 30 分以内のときだけ通る。記録は名前の日付でなく書かれた時刻で選ぶ（直近 3 日）。今の main の先頭より後に書かれた記録に「main には送っていない」があると、印を置かずに止まる（確かめたうえで `--seen`）。develop には、公開の判断を待っている別のセッションの変更が入っていることがあるため（`docs/rules/corrections-k.md`「繰り返し」の表）。`git push --no-verify` と GitHub の上での操作は、この仕組みでは止まらない（`docs/PUBLISH-CHECK.md`「ここは仕組みで止まらない」）。
- `.githooks/` は、本体の checkout の版が動く（`core.hooksPath` が本体の `.githooks` を指している）。worktree で直したフックは、develop に取り込んでから効く。フックが呼ぶ `scripts/publish-check.sh` は、commit をする worktree の版。
- セッションの記録の要点：`bash scripts/session-digest.sh`（中身は `scripts/session-digest.mjs`）。既定は、その日と前の日の記録（名前の日付か、更新した日）の題と `## 要点` の頭だけで、全体を 26,000 バイトに収める（記録が多い日は、一つにつき一行まで減らす。2026-11-10 は 89 本で 23,760 バイト）。話題の語で指すと、その記録の要点・ずれ・残したこと・commit の節を切らずに出す（2026-11-10・#111。前は二日分で 30 万バイトほど出て、行をバイトで切って日本語が壊れていた）。

## 作りたいもの（まだ定まらない）

作る場面が来たら、ここから一つ選んで作り、上の「今あるもの」に移す。

| 作りたいもの | 作りたい内容 | 作るきっかけ | もと |
|---|---|---|---|
| 読み物の読解テスト（ページごとの質問） | 文脈の無い読み手に公開ページの文字だけを読ませる手順そのものは、念入りなレビューの ⑤ として `docs/rules/review.md` にある（抽出は `pd/scripts/reader-llm-comprehension-test.mjs <ページの名前> [--out <出力先>]`。spec の無いページは共通の七問を使う。2026-11-09。`pd/reader/` にあるページなら、名前を道具に足さなくても回せる。出力先は既定で `pd/.cache/active/`、`--out` で repo の外へ向けられる。2026-11-10・#111）。残っているのは、ページごとの質問（TEST の spec）を今の構成に合わせて書くこと。pjdhiro の趣旨とずれて読まれないかは、ページごとの質問でしか見られない | #62（読解テストを今の構成に合わせて書く） | project-design の `reader-comprehension`・`reader-litt-conformance` |
| ほかのページの画面の確かめ | `page-check.js` を、プロジェクトデザイン論のトップ・読み物・創造とはのトップへ広げる。スマートフォン幅で、表が横にはみ出さないか、文字が小さすぎないかも見る | 作るきっかけは来ている（2026-11-09〜10 に、表の横スクロールを手で直した跡が記録に 7 件）。HTML の形で数える知らせは入れた（上の「公開のページと記録」の ③）。画面で見る形の案：`page-check.js` の横のはみ出しの見方（`scrollWidth` と見える幅の差）を、ページ全体でなく表の枠（`.tablewrap`）ごとに当て、375px の幅で、枠の中身が枠より広い表を並べる。3001 を開いたブラウザで回す形なので、`scripts/check.sh` には入らない。表を幅に収める直し（CSS）は見た目の判断を伴うので、pjdhiro が決める | project-design の `static-checks.js`・`responsive-test.*`（`docs/harness-pending/` にあるのは名前だけで、中身は 0 バイト。今までの repo は読まないので、使えるかは確かめられない。新しく書く） |
| キーボードで使えるか | Tab で順に移れるか、隠れた部品に移らないか、畳みや切り替えを Enter で開けるか、読み上げの名前があるか | ks・as のトップの部品を足すとき | kesson-space の E2E（TC-10・ISS-001） |
| 読み込みの速さの目安 | 初めの表示までの時間・転送量・リクエスト数の目安を決め、超えたら知らせる | 3D や画像を足して重くなったとき | kesson-space の E2E（TC-08・TC-11） |
| デザインの規約に沿うか | 色・文字の大きさ・余白が、決めたデザインの規約に沿うかを見る | デザインの規約（まとまり A の「あとで」・E）を決めたとき | project-design の `ui-lint.sh` |
| ks の 3D の確かめ | シェーダーや 3D の設定を直したとき、設定の値と開発パネルと描画が揃っているかを見る。設定の整合は check.sh に入っている | ks のシェーダーを直すとき | kesson-space の `code-reviewer`・`config-validator` |
| 英語の記事をそろえる定期の作業 | ks の記事の日本語版と英語版のずれを定期に見る。手では `cd ks && npm run articles:en:check` で見られる。通知先は決めていない | 英語の記事を育てるとき | kesson-space の `articles-en-routine.sh` |
| 定期のレビュー | この repo の中のことだけを、決まった間隔で見直す（`~/dev/CLAUDE.md`） | pjdhiro が頼んだとき | project-design の `periodic-review` |

## 外したもの

今の進め方に合わないので外した。中身は 53c4db8 にある（`git show 53c4db8:<パス>`）。

| ファイル | 外した理由と、考え方の行き先 |
|---|---|
| `ks/tests/e2e-runner.js`・`ks/tests/e2e-test-design.md`・`ks/src/pages/e2e-auto-run.js` | 今のページに無い部品（`h1#title-h1`・`.subtitle`・GUIDES のカード ほか）を見ていた。考え方は `pd/src/page-check.js` と、上の「キーボードで使えるか」「読み込みの速さの目安」に継いだ |
| project-design の `wiki-log-append`（commit のあとに `wiki/log.md` へ自動で書き足す） | 入れない（pjdhiro 2026-11-10・違和感帳「log.md に自動で書き足す仕組みを入れるか」への答え「A 入れない」）。log.md は、wiki を直したセッションが `.claude/skills/wiki-compile/SKILL.md` の手順 4 で手で書く。古いページと未作成の出典ページの知らせは、上の「自動で動くもの」に入れた |
| `ks/scripts/agent-post-check.sh`・`cs/scripts/agent-post-check.sh`・`as/scripts/check-issue-close-state.sh` | サブエージェントが `.cache/outbox/DONE-*.md` を書く、今までの進め方を確かめていた。今はその置き場を使わない。頼んだ仕事が終わったかは、セッションの報告を、commit・差分・画面で確かめてから伝える（型 K） |
| `cs/scripts/budget-check.sh` | サブスクの枠からサブエージェントを起こしてよいかを決めていた。今は、大きな作業の前に、コンテキストを使いすぎないかを考える（stance.md 2-8） |

## 見つけたもの

- `cs/evidence/similar-papers/validation/VAL-REPLACEMENT-33-20260410.md` に文字化けが 7 行ある。記録なので文字化けの検査の外に置いた。直すには、化ける前の文が要る。
