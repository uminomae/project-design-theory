# エージェントに頼む文の雛形

as の文献レビュー（`README.md`）で、一つの領域をエージェントに頼む文。cs の雛形（`docs/cs-review/prompts.md`）を元にした。`{…}` を埋めて使う。試しの一領域（A01）のあとに直す。

- R は `~/dev/pd/project-design-theory`（本体の checkout）。読むのはここ。手元の PDF はここにしか無い。
- W は、頼む側のセッションの作業場所（worktree のパス）。書くのはここ。

エージェントは Opus で、バックグラウンドで走らせる（Agent ツールの `model: "opus"`・`run_in_background: true`）。頼む文に書く書誌（DOI・題・巻号）は、司令塔が Crossref で照らしてから書く（型 H。2026-11-09 に、記憶の Lutz ら 2002 の DOI が違っていた）。

どの頼む文にも、次の五つを入れる。

- 日本語で作業し、日本語で報告すること（型 Q）。
- 書いてよい場所（W の記録のファイル一つだけ）。commit と push はしない。手元の絶対パス（/Users/…）を書かない。例外は三つ：取った PDF を R/as/knowledge/raw/ に `Axx_姓_年_題の語.pdf` で保存すること（git の外）、`find-source.sh` が自分で追記する R/.cache/raw/find-ledger.md と find-hosts.tsv。頼む文にこの例外を書く（2026-11-09・A01 で「ほかは書き換えない」と ledger の追記が食い違った）。
- 材料の在りか。
- 原典の取り方（`sources.md` §5 とスキル `find-source`）。作業用の一時置き場に置き、repo には入れず、取ったものを報告に書く。台帳に足すのは司令塔。
- 支える研究だけを集めないこと。反対の知見と批判を探すこと。

## 1. 一つの領域

```
日本語で作業・報告してください。書いてよいのは {W}/as/evidence/evidence-{Axx}-{slug}.md の一つだけです（新しく作る）。ほかのファイルは書き換えず、commit も push もしないでください。読むのは R＝~/dev/pd/project-design-theory です。手元の絶対パス（/Users/…）は記録に書かず、~/dev/… か repo の相対パスで書いてください。

## 背景
R の as/ は「意識とは」というサイトで、持ち主の pjdhiro は、ここを神経現象学と心理学の研究を足場に組み、自分の体験と擦り合わせていくつもりです。2026-11-09 に見ると、今までの「神経現象学の読み」は旧資料と ChatGPT のレビューを読んだもので、論文の原典に当たっていませんでした。あなたの仕事は、{領域名}（{Axx}）の文献を、研究論文のための文献調査の水準で探し、原典で確かめ、記録を書くことです。

## 先に読む
- R/docs/as-review/README.md（計画。「中心の問い」「並べる相手：体験の記述」「調べ方」「記録の形」「記録の品質の点検」）
- R/docs/rules/sources.md（照合の状態・取得の順番）、R/.claude/skills/find-source/SKILL.md（道具の使い方）、R/docs/rules/writing.md、R/docs/rules/corrections.md（型 A・E・H・K）、R/docs/rules/stance.md の §1-1・§1-4・§2-6、R/docs/rules/stance-theories.md
- 形と文体の見本：R/cs/evidence/evidence-D14-psychology.md（cs の済んだ記録。文末は「です・ます」）
{領域ごとの注意}

## 材料の在りか
{領域ごとの材料。README の「領域」の表の「既存の材料」の列を、パスで書く}
- cs の記録で本文照合済の文献は、読み直さずに参照してよい：R/cs/evidence/evidence-D08-neuroscience.md・evidence-D13-philosophy.md・evidence-D14-psychology.md・evidence-D23-developmental-psychology.md
- 原典の台帳：R/as/knowledge/raw/manifest.md（無ければまだ作っていない）。cs の台帳 R/cs/knowledge/raw/manifest.md にある文献は、そこから辿ってよい。

## 候補（書誌は司令塔が Crossref で照らした）
{候補の表：著者・年・題・誌・巻・頁・DOI。DOI の無いもの（JCS など）はそう書く}
候補は出発点です。総説・メタ分析から辿って、足りないものは足してください。外したものは理由を書いてください。

## やること
単位は「論」（一本の論文か、一つの理論）。この領域で 10〜15 ほど。

1. 探し方を記録する：どこで（Crossref・OpenAlex・PubMed・Europe PMC・PhilPapers・Semantic Scholar・Google Scholar）、何の語で、いつ探し、何件から何を選んだか。選んだ理由と外した理由。`bash scripts/find-source.sh discover` を使ってよい。
2. 総説とメタ分析から入る：この領域の今の到達点を先に読み、個々の研究はそこから辿る。
3. 論ごとに、一次情報（URL があるかダウンロードできるもの）を `bash scripts/find-source.sh find` で探して読む。台帳（ledger）は R の本体の .cache/raw/find-ledger.md。取ったものは `fetch`・`check` で書誌と突き合わせる。確認画面を返したものは、別の名乗りで取りに行かず「ブラウザでの保存が要る」と書く。読んだ頁を控え、鍵の文は原文のまま短く（40 語ほどまで）頁つきで書く。
4. 照合の状態を書く（sources.md §3 の四つ：本文照合済・要旨照合済・二次資料のみ・未照合）。写しの性格（出版社・機関リポジトリ・著者稿・授業の写し・個人が上げた写し）を添える。個人が上げた写しだけでは本文照合済にしない。書籍だけの論は「未照合（書籍）」と書いて残す。
5. 論ごとに、研究の型（理論・総説・メタ分析・実験・観察・事例・一人称の報告）、人数（N）、人か動物か、追試の状況を書く。sources.md §1-3 の実証の厚み（経験則・実証済み・見送り・仮説）を添える。
6. 論ごとに、批判・追試の失敗・論争を探す。見つからなければ、探した語と場所を書いて「当たらなかった」と書く。
7. 一人称の記述（どう経験されたか）と三人称の記述（測ったもの・計算論の語彙）を分けて書く。
8. README の「並べる相手：体験の記述」の番号（体験 1〜4・問い・見立て）と、構造が似ているところ・食い違うところを、Claude の読みとして番号で書く。体験の中身を研究の語で言い換えない。研究で体験を説明したことにしない。空でよい。
9. 既存の as の資料（{既存の材料のパス}）と学術版（~/dev/pd/pjdhiro/assets/awareness/guides/ja/md/awareness-academic.md のこの領域の節）の主張を、原典で確かめて判定する（一致・言い過ぎ・取り違え・帰属違い・付け足し・抜け・未判定）。

## 書くもの
{W}/as/evidence/evidence-{Axx}-{slug}.md。並びは README の「記録の形」のとおり（frontmatter：file_id: EV-{Axx}・area_id: {Axx}・title・last_updated・status: reviewed／冒頭／探し方／一面の表／論ごとの節／分からなかったこと・取れなかった原典）。文は writing.md に従い（教科書のような普通の文・演出しない・断定しない・一文に一つのこと・文末は「です・ます」）、冒頭に文責が Claude であることを書く。

## 報告
次を日本語で報告してください。
- 論の数と、照合の状態ごとの数。
- 台帳に足す行の案（書誌・DOI・取得先・状態・手元に取った PDF の名前）。
- ブラウザでの保存が要る PDF（開く URL・保存名・何を確かめるためか）。
- 既存の as の資料と学術版で見つけた誤り（重い順）。
- 判断が要るもの（規約で答えが出ないものだけ）。
- 司令塔が確かめ直すとよい点を三つ（DOI・鍵の文と頁）。
```

## 回して分かったこと

A01 を回して足した（2026-11-09）。頼む文の雛形（上の 1）に入れていないものは、領域ごとの注意に書き写して使う。

- かかった量：Opus 一つで 40 分ほど、43 万トークン、ツール 138 回。論 15・文献 23 本（本文照合済 15・要旨照合済 3・二次資料のみ 3・未照合（書籍）1・ほかに節だけ読んだ 1）。cs の一分野と同じくらい。
- 一面の表の体験の列は番号だけ（README「規約で決めたこと」）。頼む文の「やること」8 に「列には番号だけ。研究の語の括弧を付けない」と書き足して使う。
- `discover` は、OpenAlex と Semantic Scholar が HTTP 429 を返して使えないことがある。そのときは Europe PMC の検索 API（題の語と被引用の順）で代わりに引き、引いた語と件数を探し方に書く。
- 古い論文（1990 年代〜2000 年代の JCS・本の章）は、著者の研究室の昔のサイトが Wayback に残っていることが多い。Wayback の一覧（CDX）で、研究室のサイトの下を探す（Varela の `ccr.jussieu.fr/varela/` に、Varela 1996 の HTML 版と Depraz ら 2000 の著者稿があった）。
- 確認画面やログインで止まるホスト：philpapers.org・constructivist.info・www.zora.uzh.ch（`find-hosts.tsv` に入った）。PMC と PNAS の頁も止まった。最初から「ブラウザでの保存が要る」側に置いてよい。
- `find-source.sh --help` が落ちていた（`fetch` の help の文字列の `%PDF`）。2026-11-09 に直した。
- 道具が著者本人の大学の頁（`~lutz`・`~eschwitz`・`hurlburt.faculty`）を「授業・個人の頁」と出す。写しの性格は、頁の中身で著者のものかを確かめてから書く。

## 2. 領域ごとの注意

### A01 神経現象学の方法（2026-11-09）

- この領域は、ほかの領域を体験と並べるときの方法になる。見るのは、(a) 一人称の報告と神経の測定を互いの制約にする考え（相互制約）、(b) 体験を聞き出す方法（二人称の面接・記述的経験サンプリング）、(c) 内観がどこまで信頼できるかの議論とその批判、(d) 瞑想者の一人称の報告を使った研究で、方法がどう使われたか。
- #36 に、ks のレーン 2 の候補と pjdhiro の言葉がある（R/ks/docs/issues/survey-216/lane2-neuro.md）。「気づき（becoming aware）」に名前がある概念（Depraz, Varela & Vermersch 2003）は、この領域で確かめる。予測と誤差の話は A02 に回す。
- Varela, Thompson & Rosch 1991 は cs の D08・D14 で本文照合済。読み直さずに参照する。
- 材料：R/as/evidence/review/first-person-vs-third-person.md・neurophenomenology-design.md・neurophenomenology-intake-map.md・band-signal-source-reading.md（§2 の瞑想の神経現象学）、R/ks/docs/issues/survey-216/lane2-neuro.md、Issue #36 の本文（`gh issue view 36`）。

候補（Crossref で照らした。2026-11-09）：

| 論 | 書誌 | DOI |
|---|---|---|
| 相互制約 | Varela, F. J. (1996). Neurophenomenology: A methodological remedy for the hard problem. *Journal of Consciousness Studies*, 3(4), 330–349. | なし（Crossref に無い。JCS） |
| 一人称のデータで脳の動きを読む | Lutz, A., Lachaux, J.-P., Martinerie, J., & Varela, F. J. (2002). Guiding the study of brain dynamics by using first-person data. *PNAS*, 99, 1586–1591. | 10.1073/pnas.032658199 |
| 神経現象学の総説 | Lutz, A., & Thompson, E. (2003). Neurophenomenology. *Journal of Consciousness Studies*, 10(9–10), 31–52. | なし（Crossref に無い。JCS） |
| 同 | Thompson, E., Lutz, A., & Cosmelli, D. (2005). Neurophenomenology: An introduction for neurophilosophers. In *Cognition and the Brain* (pp. 40–97). Cambridge UP. | 10.1017/cbo9780511610608.003 |
| 気づきになる（epoché） | Depraz, N., Varela, F. J., & Vermersch, P. (2003). *On Becoming Aware*. John Benjamins. | 書籍（未照らし） |
| 二人称の面接 | Petitmengin, C. (2006). Describing one's subjective experience in the second person. *Phenomenology and the Cognitive Sciences*, 5, 229–269. | 10.1007/s11097-006-9022-2 |
| 体験の構造を見つける | Petitmengin, C., Remillieux, A., & Valenzuela-Moguillansky, C. (2019). Discovering the structures of lived experience. *Phenomenology and the Cognitive Sciences*, 18, 691–730.（Crossref の発行年は 2018） | 10.1007/s11097-018-9597-4 |
| 記述的経験サンプリング | Hurlburt, R. T., & Akhter, S. A. (2006). The Descriptive Experience Sampling method. *Phenomenology and the Cognitive Sciences*, 5, 271–301. | 10.1007/s11097-006-9024-0 |
| 内観の信頼性の批判 | Schwitzgebel, E. (2008). The unreliability of naive introspection. *The Philosophical Review*, 117, 245–273. | 10.1215/00318108-2007-037 |
| 内観の擁護 | Bitbol, M., & Petitmengin, C. (2013). On the possibility and reality of introspection. *Kairos*, 6, 173–198. | 10.56526/10451/60029 |
| 方法の反省 | Bockelman, P., Reinerman-Jones, L., & Gallagher, S. (2013). Methodological lessons in neurophenomenology. *Frontiers in Human Neuroscience*, 7. | 10.3389/fnhum.2013.00608 |
| 瞑想者で自己の境界を調べる手引き | Berkovich-Ohana, A., Dor-Ziderman, Y., Trautwein, F.-M., Schweitzer, Y., et al. (2020). The hitchhiker's guide to neurophenomenology. *Frontiers in Psychology*, 11. | 10.3389/fpsyg.2020.01680 |
| ふだんと違う意識の状態 | Timmermann, C., Bauer, P. R., Gosseries, O., Vanhaudenhuyse, A., et al. (2023). A neurophenomenological approach to non-ordinary states of consciousness. *Trends in Cognitive Sciences*, 27, 139–159. | 10.1016/j.tics.2022.11.006 |

Crossref で見つからなかったもの：Froese, Gould & Seth 2011（一人称と二人称の方法の確かめ。JCS の可能性）。探すなら題で。
