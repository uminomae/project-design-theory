# エージェントに頼む文の雛形

as の文献レビュー（`README.md`）で、一つの領域をエージェントに頼む文。cs の雛形（`docs/cs-review/prompts.md`）を元にした。`{…}` を埋めて使う。試しの一領域（A01）のあとに直す。

- R は `~/dev/pd/project-design-theory`（本体の checkout）。読むのはここ。手元の PDF はここにしか無い。
- W は、頼む側のセッションの作業場所（worktree のパス）。書くのはここ。

エージェントは Opus で、バックグラウンドで走らせる（Agent ツールの `model: "opus"`・`effort: "high"`・`run_in_background: true`。原典の照合なので、cs で比べた結果に合わせる。モデルや effort を替えるときの比べ方は `docs/cs-review/README.md`「エージェントの分け方」・2026-11-10）。頼む文に書く書誌（DOI・題・巻号）は、司令塔が Crossref で照らしてから書く（型 H。2026-11-09 に、記憶の Lutz ら 2002 の DOI が違っていた）。

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
本文（frontmatter・URL を除く）に、領域や原典の記号（{Axx}・{Axx}-S01 など）、repo のパスやファイル名（docs/…・as/evidence/…・*.md）、手元の PDF の保存名を書かない。領域は名前で、原典は著者・年・題で、as の資料は題で書く。ブラウザでの保存が要る原典の表は記録に置かず、報告に書く。一面の表の体験の列は番号だけで、研究の語の括弧を付けない。

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

A02 を回して足した（2026-11-10）。

- かかった量：Opus 一つで 45 分ほど、51 万トークン、ツール 175 回。論 15・文献 27 本（本文照合済 23・要旨照合済 2・未照合 1・未照合（書籍）1）。PDF 21 本。
- 頼む文の「この領域の注意」に、Issue の問い（#36 の「駆動」と「内容」）を書き、論ごとの節に問いとの関わりを一行、最後に問いごとの節を置くよう頼むと、記録がそのまま Issue への答えの材料になった。問いを持つ領域では同じ形で頼む（README「規約で決めたこと」）。
- 最初に既存の資料の主張をこの領域の分だけ取り出して一覧にしてから探す、と頼むと、判定が 23 行になり、「抜け」だけにならなかった。
- 確認画面で止まるホストに、PMC・nature.com・academic.oup.com を足す。PhilSci-Archive は拒否の頁を返した。Europe PMC の全文の API は、公開の対象外の論文（Lutz ら 2008・Menon & Uddin 2010）に HTTP 500 を返す。
- 研究室の昔のサイトを Wayback の一覧（CDX）で探す手は、この領域でも効いた（Nieuwenhuis・Poldrack・Petitmengin の三つで PDF が残っていた）。
- 報告の「台帳に足す行の案」で、ほかの領域の行を「使う」と書いてきても、記録がその領域の記録へ送るだけなら「使う記録」に番号を足さない（点検が落ちる。README「規約で決めたこと」）。
- 司令塔の確かめ：記録の DOI は `LC_ALL=C grep -oE '10\.[0-9]{4,9}/[A-Za-z0-9._:/()-]+'` で取る（文字の種類を絞らないと、DOI の後ろの日本語の括弧まで取って Crossref が 404 を返す）。鍵の文は pdftotext を頁ごとに Python で探す（この手元の grep は ugrep で、`.{0,120}` の形の正規表現が「complexity limits」で通らない）。印字の頁と PDF の頁がずれる著者稿は、頁の末尾の番号を見る。
- 報告の要約は、本文の節と食い違うことがある（Seeley ら 2007 の不安を、本文は「状態か特性か分けられない」、判定の表と報告は「特性としての不安」と書いていた）。報告の要約は、本文の節と原典で確かめてから写す。

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

### A02 予測と気づき（2026-11-10）

- 見るのは、(a) 予測処理（予測符号化・自由エネルギー原理）は意識の理論か、意識に上るのは予測か誤差か、(b) 注意を精度の重みとして書く見方、(c) 顕著性のネットワーク（違和感の三人称の側）、(d) 大域ワークスペースとの関係、(e) 前反省的な気づきの一人称の記述（Petitmengin ら 2007 の発作の前兆）。#36 の問い「誤差が意識化を駆動する」と「誤差が意識の内容になる」を分けて書く。前反省的に信号が立つ層と、自覚する層も分ける。
- 批判の側を同じ重さで探す：予測処理を意識の理論とすることへの批判（Marvan & Havlík 2021 ほか）、自由エネルギー原理の反証可能性の議論、顕著性のネットワークの逆推論の問題。
- A01 の記録（`as/evidence/evidence-A01-neurophenomenology-method.md`）で本文照合済の文献（Lutz & Thompson 2003・Thompson ら 2005 ほか）は、読み直さずに参照する。
- 抱持は as で採用しない（`as/evidence/review/research-design-baseline.md` の NOTE）。「立った信号を持つ」側には入らない。
- 材料：Issue #36 の本文（`gh issue view 36`）、R/ks/docs/issues/survey-216/lane2-neuro.md、R/as/evidence/review/layer1-prediction-error-reading.md・neurophenomenology-intake-map.md §3-2、学術版 §1.2（予測符号化）。

候補（Crossref で照らした。2026-11-10）：

| 論 | 書誌 | DOI |
|---|---|---|
| 自由エネルギー原理 | Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11, 127–138. | 10.1038/nrn2787 |
| 予測する脳 | Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences*, 36, 181–204. | 10.1017/s0140525x12000477 |
| 注意と意識的な知覚 | Hohwy, J. (2012). Attention and conscious perception in the hypothesis testing brain. *Frontiers in Psychology*, 3. | 10.3389/fpsyg.2012.00096 |
| 注意・不確かさ・自由エネルギー | Feldman, H., & Friston, K. (2010). Attention, uncertainty, and free-energy. *Frontiers in Human Neuroscience*, 4. | 10.3389/fnhum.2010.00215 |
| 予測処理と意識の神経相関 | Hohwy, J., & Seth, A. (2020). Predictive processing as a systematic basis for identifying the neural correlates of consciousness. *Philosophy and the Mind Sciences*, 1(II). | 10.33735/phimisci.2020.ii.64 |
| 予測処理は意識の理論か（批判） | Marvan, T., & Havlík, M. (2021). Is predictive processing a theory of perceptual consciousness? *New Ideas in Psychology*, 61, 100837. | 10.1016/j.newideapsych.2020.100837 |
| 予測する大域ワークスペース | Whyte, C. J., & Smith, R. (2021). The predictive global neuronal workspace. *Progress in Neurobiology*, 199, 101918.（bioRxiv 版 2020 は 10.1101/2020.02.11.944611） | 10.1016/j.pneurobio.2020.101918 |
| 大域ワークスペース | Dehaene, S., & Changeux, J.-P. (2011). Experimental and theoretical approaches to conscious processing. *Neuron*, 70, 200–227. | 10.1016/j.neuron.2011.03.018 |
| 同 | Mashour, G. A., Roelfsema, P., Changeux, J.-P., & Dehaene, S. (2020). Conscious processing and the global neuronal workspace hypothesis. *Neuron*, 105, 776–798. | 10.1016/j.neuron.2020.01.026 |
| 顕著性のネットワーク | Seeley, W. W., Menon, V., Schatzberg, A. F., Keller, J., et al. (2007). Dissociable intrinsic connectivity networks for salience processing and executive control. *Journal of Neuroscience*, 27, 2349–2356. | 10.1523/jneurosci.5587-06.2007 |
| 同 | Menon, V., & Uddin, L. Q. (2010). Saliency, switching, attention and control: a network model of insula function. *Brain Structure and Function*, 214, 655–667. | 10.1007/s00429-010-0262-0 |
| 意識の理論の総説 | Seth, A. K., & Bayne, T. (2022). Theories of consciousness. *Nature Reviews Neuroscience*, 23, 439–452. | 10.1038/s41583-022-00587-4 |
| 前反省的な気づきの一人称の記述 | Petitmengin, C., Navarro, V., & Le Van Quyen, M. (2007). Anticipating seizure: Pre-reflective experience at the center of neuro-phenomenology. *Consciousness and Cognition*, 16, 746–764. | 10.1016/j.concog.2007.05.006 |
| 予測する心（書籍） | Hohwy, J. (2013). *The Predictive Mind*. Oxford UP. | 書籍（Crossref の検索が返らず、未照らし） |

### A03 自己と境界（2026-11-10）

- 体験 1・2 に最も近い領域。見るのは、(a) 自己の最小の形（最小限の自己・所有の感と行為の感・最小限の現象的自己）の哲学と実験、(b) メタ認知と脱中心化（自分の心の動きを、少し離れた所から観る構え）、(c) 瞑想で自己の境界が薄れる・消える体験の一人称の記述と測定（神経現象学の研究の流れ）、(d) 非二元の気づき・最小限の現象的経験、(e) 自己を越える体験の分類と、瞑想の困難な体験（良いことだけでない側）。
- 批判の側を同じ重さで探す：瞑想の研究の方法の問題（小さな人数・熟練者の選び方・報告の偏り）、困難な体験や害の報告、幻覚剤と瞑想を同じ枠で読むことへの異論、非二元の気づきの記述を測定で確かめられるかの議論。
- A01 の記録（神経現象学の方法）で本文照合済の Berkovich-Ohana ら 2020・Timmermann ら 2023・Lutz & Thompson 2003 は読み直さずに参照する。A02 の記録の Laukkonen & Slagter 2021 も同じ。
- 体験 1・2 はメタ認知の先で到達した感覚の記述で、文脈なしに公開文へ出さない（stance 2-4）。並べるときは公開ページの文の語で、番号と Claude の読みとして書く。研究の語で体験を言い換えない（型 A）。as は神経現象学の研究を材料として調べるが、as そのものが神経現象学として成り立つわけではない（計画の「中心の問い」）。
- as の目標は意識と気づきの違いを定義できるようにすること（計画の「中心の問い」）。この領域で、自己に気づくこと・気づきに気づくこと（メタ認知・メタ気づき）と、意識そのものの区別がどう書かれているかを、原典の語のまま拾う。定義は立てない。
- 材料：R/as/evidence/review/band-signal-source-reading.md（瞑想の神経現象学の節）、R/as/evidence/evidence-A01-neurophenomenology-method.md の論 14・15、学術版 §3.1（非二元性の段）。

候補（Crossref で照らした。2026-11-10）：

| 論 | 書誌 | DOI |
|---|---|---|
| 最小限の自己 | Gallagher, S. (2000). Philosophical conceptions of the self: implications for cognitive science. *Trends in Cognitive Sciences*, 4, 14–21. | 10.1016/s1364-6613(99)01417-5 |
| 同 | Zahavi, D. (2017). Thin, thinner, thinnest: Defining the minimal self. In *Embodiment, Enaction, and Culture*. MIT Press. | 10.7551/mitpress/9780262035552.003.0010 |
| 最小限の現象的自己 | Blanke, O., & Metzinger, T. (2009). Full-body illusions and minimal phenomenal selfhood. *Trends in Cognitive Sciences*, 13, 7–13. | 10.1016/j.tics.2008.10.003 |
| 最小限の現象的経験 | Metzinger, T. (2020). Minimal phenomenal experience. *Philosophy and the Mind Sciences*, 1, 1–44. | 10.33735/phimisci.2020.i.46 |
| 瞑想の注意の調整と観察 | Lutz, A., Slagter, H. A., Dunne, J. D., & Davidson, R. J. (2008). Attention regulation and monitoring in meditation. *Trends in Cognitive Sciences*, 12, 163–169. | 10.1016/j.tics.2008.01.005 |
| 自己を組み直す・ほどく | Dahl, C. J., Lutz, A., & Davidson, R. J. (2015). Reconstructing and deconstructing the self. *Trends in Cognitive Sciences*, 19, 515–523. | 10.1016/j.tics.2015.07.001 |
| 脱中心化 | Bernstein, A., Hadash, Y., Lichtash, Y., Tanay, G., et al. (2015). Decentering and related constructs. *Perspectives on Psychological Science*, 10, 599–617. | 10.1177/1745691615594577 |
| メタ認知の神経の基盤 | Fleming, S. M., & Dolan, R. J. (2012). The neural basis of metacognitive ability. *Philosophical Transactions of the Royal Society B*, 367, 1338–1349. | 10.1098/rstb.2011.0417 |
| 自己の無い体験（脳磁図） | Dor-Ziderman, Y., Berkovich-Ohana, A., Glicksohn, J., & Goldstein, A. (2013). Mindfulness-induced selflessness. *Frontiers in Human Neuroscience*, 7. | 10.3389/fnhum.2013.00582 |
| 境界の無い感じ（事例） | Ataria, Y., Dor-Ziderman, Y., & Berkovich-Ohana, A. (2015). How does it feel to lack a sense of boundaries? *Consciousness and Cognition*, 37, 133–147. | 10.1016/j.concog.2015.09.002 |
| 境界が溶ける（現象学の調べ） | Nave, O., Trautwein, F.-M., Ataria, Y., Dor-Ziderman, Y., et al. (2021). Self-boundary dissolution in meditation. *Brain Sciences*, 11, 819. | 10.3390/brainsci11060819 |
| 非二元の気づき | Josipovic, Z. (2014). Neural correlates of nondual awareness in meditation. *Annals of the New York Academy of Sciences*, 1307, 9–18.（Crossref の発行年は 2013） | 10.1111/nyas.12261 |
| 幻覚剤・瞑想と自己意識 | Millière, R., Carhart-Harris, R. L., Roseman, L., Trautwein, F.-M., et al. (2018). Psychedelics, meditation, and self-consciousness. *Frontiers in Psychology*, 9. | 10.3389/fpsyg.2018.01475 |
| 自己を越える体験 | Yaden, D. B., Haidt, J., Hood, R. W., Vago, D. R., et al. (2017). The varieties of self-transcendent experience. *Review of General Psychology*, 21, 143–160. | 10.1037/gpr0000102 |
| 瞑想の困難な体験 | Lindahl, J. R., Fisher, N. E., Cooper, D. J., Rosen, R. K., et al. (2017). The varieties of contemplative experience. *PLOS ONE*, 12, e0176239. | 10.1371/journal.pone.0176239 |
