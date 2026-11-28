# セッションの区切りと記録

CLAUDE.md から 2026-11-19 に移した。毎回自動で入る CLAUDE.md を軽くするため。CLAUDE.md には名指しと、毎回効く一行だけを残している（付箋帳 i20261118130216b6l）。

## セッションの終わりに

コンテキストが 30% を超えたら、セッションを区切る。話があちこちへ行き、おかしくなるのを防ぐため（pjdhiro 2026-11-08）。区切るときは、下の手順で記録を閉じ、次のセッションが読む引き継ぎ（いまの到達点・残した議論点・置き場）をセッションの記録に書く。

毎回、セッションを閉じる前に次を行う（pjdhiro 2026-11-07）。

1. このセッションで pjdhiro が示した判断や見方を、`docs/rules/stance.md` に足すか直す。書くのは、日付と、決めた見方を一般にした一行だけ。発言の原文と場面は写さない（CLAUDE.md の絶対原則。原文はこのセッションの記録〔`.cache/session/`・手元〕に書く）。stance.md か corrections.md を直したら、芯（`stance-core.md`・`corrections-core.md`）は commit のときに `.githooks/pre-commit` が作り直して一緒に入れる（手で回すなら `python3 -I scripts/rules-core.py`）。
   - あわせて、このセッションで見つかった「よくある誤解」（近い心の働きや言葉の取り違え。pjdhiro の指摘・読み物・調べのどこから出たものでもよい）を、心の脆弱性スキャンの物差し `docs/tools/kokoro-scan/ruler.md` の「よくある誤解」の台帳に足す。出典（発言の日付・読み物の章）を添え、既にある項に溶かせるならそうする。足したら版を上げ、`docs/tools/kokoro-scan/README.md` の手順でページを出し直す。見つからなければ何もしない（pjdhiro 2026-11-22）。
2. このセッションで Claude が指摘された誤りを、`docs/rules/corrections.md` の型に当てはめる。当てはまる型が無ければ型を足す。同じ誤りを繰り返さないよう、その型の「書く前の確認」を直す。前に同じ型の誤りをしていたら、`docs/rules/corrections-repeats.md` の表に日付を足す（型 K は `corrections-k.md` の「繰り返し」に足す）。corrections.md の「繰り返し」の決まりに従い、2 回目からは確認の文を足すのでなく、機械で止める仕組みに移すか、確認の文を書き直す。
3. Claude の推奨と pjdhiro の判断がずれたところを、セッションの記録の `## ずれ` に書く。一件ごとに、場面・Claude の推奨とその理由・pjdhiro の判断と発言・Claude が見ていなかったもの・写した先（stance・corrections・decisions のどれか）を書く。誤りと言えない、見方の違いから来たずれも書く。pjdhiro に判断を仰いだ問いは、聞く前の Claude の予想と実際の答えを一行ずつ並べる。予想は聞く前に書いておく（あとから書くと、当たったことにしやすい）。予想が当たり続けるなら聞きすぎ（型 P）で、外れるなら stance.md の読みが足りない。ずれが無ければ「無し」と書く（pjdhiro 2026-11-09）。
4. セッションの記録を書く（下の「セッションの記録」）。
5. 役目を終えたアーティファクトを消す。特に、このセッションが作ったもの（案のページ・判断を仰ぐページ・報告のページ）を消す。役目を終えたとは、答えを受け、その判断を `stance.md`・`decisions.md`・Issue のどれかに写し終えたもの。消す前に写っているかを見る。答えを待っているものは消さずに残し、記録の引き継ぎに URL を書く。付箋帳（`docs/tools/fusen-cho.md`）と違和感帳（`docs/tools/iwakan-cho.md`）の帳面そのものは消さない。帳面の `links` に載っていたものは、消したら `archive` の `linksCleared` を `true` にする。消すたびに承認の画面が出る（pjdhiro 2026-11-14）。
6. 足したもの・直したもの・消したものを pjdhiro に短く伝える。何も無ければ、無いと伝える。

wiki の作り直しは、区切るたびには出さない。週に一度、`.claude/skills/wiki-compile/SKILL.md`「週の作り直し」でまとめて出す（pjdhiro 2026-11-24。2026-11-10 から 11-24 までは、ここに手順 5 として `wiki-stale-check.mjs --session-end` を置いていた）。

## セッションの記録

- 本体の checkout の `.cache/session/` に、一つのセッションにつき一つ、`log-YYYYMMDD-<話題>.md` を書く。`.cache/` は git に入れない。worktree の `.cache/` は worktree と一緒に消えるので、worktree で作業したときも本体の側に書く（場所は `git rev-parse --git-common-dir` の一つ上）。worktree のセッションの Write は本体の側に書けないので、worktree の `.cache/session/` に書いてから `bash scripts/session-log.sh <記録の名前>` で写す。書き足したら `--force` を付けて写し直す（#130・2026-11-11）。
- 書くこと：見出しに日付・話題・worktree の名前。見出しの直下に `## 要点` を置き、直したこと・残したこと・commit を 5 行ほどで書く。その次に `## ずれ`（上の手順 3）を置く。その下に本文：直したこと、pjdhiro の判断（趣旨と、何への答えか）、残したこと・次に回したこと、commit。
- 作業を始める前に、`bash scripts/session-digest.sh` で、その日と前の日の記録の要点を読み、今の状態を確かめる（型 K）。既定で出るのは、題と `## 要点` の頭だけ。`## ずれ`・「残したこと」・「commit」の節は、話題の語を引数にしたときに出る（例：`bash scripts/session-digest.sh cs-review`）。関わる記録は、語で指してそこまで読む。本文は、関わる記録だけを開く。全部を読まない（pjdhiro 2026-11-08・毎回読む分を小さく保つため）。
- worktree で始めるときは、規約と記録の要点を読んだあとに、`bash scripts/sync-develop.sh` だけを一つの呼び出しで回して develop に揃える（fetch・早送り・枝と作業ツリーの食い違いと `.claude/` の差分の確かめ）。パイプ・リダイレクト・`&&` と組まない（型 K・`corrections-k.md` の K1）。
- 司令塔のセッションは、続けて付箋帳を見張り（帳面の URL に `ArtifactComments` の `watch`。出し直すのはページの元を直したときだけ）、`items` を読み、Claude がまだ読んでいないものを拾う。見張っていると、帳面の「司令塔を呼ぶ」がそのセッションに届く（`docs/tools/fusen-cho.md`・pjdhiro 2026-11-09。2026-11-17 に違和感帳から付箋帳へ移った）。

