# ISS-216 候補調査ブリーフ round 4 — セルフレビューの穴 9 件＋アブダクションとの切り分け 1 件を調査項目として埋める（1 レーン 1 件）

**対象 Issue**: https://github.com/uminomae/kesson-space/issues/216
**作成日**: 2026-11-02
**起点**: `docs/issues/ISS-216-self-review-v0.md` §4 の穴 1〜9。pjdhiro（原文）「決められないものを調べもせずに決めようとすることが問題だと思う。claudeがわからないものは、調べるしかない。つまりその問いは調べるべき項目です。」
**実行**: agent-team-workflow・light（Phase 1 SURVEY ×10 を 3 並行 ×3 組＋1 → Phase 2 REVIEW ×1）。成果は Main が統合表 **v5**（`ISS-216-candidate-survey.md` §9）と草案 **v0.2**（`docs/drafts/kesson-academic-ja-v0.md`）に反映
**round 3 の教訓**: 1 レーン 1 件なら 20 ターンで完了する。各レーンは自分の問いだけに集中し、他レーンの問いや論の組み立てに踏み込まない

> 中立性原則（`.claude/rules/agents.md`）: 「近い論を探せ」「穴を埋めろ」ではなく、**「原典に何と書いてあるかを報告し、穴への当たり方を近い／違うの両方で書け」**。決めるのは調査ではなく、後の対話。
> 態度（pjdhiro 原文・位11）: 「二つの論がある時、両方が同時に起きるというよりも、いろんな場合があるという立場です。なので、両方とも調査する。追っていく。というのが態度です」

---

## 0. alignment（共有辞書。round 3 から更新あり）

```yaml
alignment:
  task: "セルフレビュー §4 の穴 9 件を、原典の照合で埋められるところまで埋める。1 レーン 1 件。決めない"
  terms:
    欠損駆動思考: "正本の定義「棄却される誤差を、問いとして拾う態度」は言い直し保留（pjdhiro 2026-11-02）。草案 v0.1 の仮説的定義: 実軸ではゼロと定義されて無意味・無価値のように扱われたものに残る違和感を、切り捨てずに問いとして抱え保ち、そこから探索へ向かう態度。出発点は虚軸の欠損"
    欠損: "構図（pjdhiro 原文・定15）: 実軸で認知したものの中に、ゼロだからゼロと定義されて、無意味・無価値のように扱われたものが、実は虚軸で意味があった。体験（定2）: 違和感や欠けを感じること。その一つとして誤差がある"
    違和感: "言語化できない感覚的なもの。持ち込まれるものが言語化できない直感や感覚、感情であればそれは違和感（位12）"
    抱持: "反射的に処理せず、問いとして抱え保つ機能。対象は誤差だけでなく違和感（定3）。語は「抱持」。「保持」と言い換えない"
    気づき: "定義は未確定（awareness-space#149）。pjdhiro: 意識にのぼる信号は予測と誤差がある場合に立つ。それは気づきの部品だろう（推測）。抱持とは別概念"
    虚軸: "記号で表現すると最もしっくりくる概念。ただの比喩でしかないかもしれないし、本質かもしれない（定17・定18）。[P][M][S] のタグを当てない。実在の主張ではない"
    定義の身分: "仮説的な定義。神経現象学の知見を借りて足場とする（定18）"
    タグ: "[P] 一次資料にそう書いてある／[M] 構造的対応（読み手の解釈）／[S] 検証仮説"
  severity_levels:
    critical: "pjdhiro の言葉を言い換えた・概念を同一視した・定義番号（D1 等）を使った・出典が実在しない・原文にない語を引用符で囲んだ・穴に答えを「決めた」"
    major: "近さだけ書いて違いを書いていない／版・章・頁が無いのに「照合済み」と書いた／一般化しすぎ／二つの読みをどちらかに絞った"
    minor: "表現の粗さ、重複"
  scope: "一次資料（原典・著作）を優先。ローカル（ks docs/issues/survey-216/・docs/issues/ISS-216-candidate-survey.md・knowledge/、awareness-space、project-design knowledge/research）を先に見てから Web。Internet Archive・Gutenberg・PMC・出版社サイト・著者サイト"
  row_ids: "棚卸し `docs/issues/ISS-215-claims-inventory.md` の行 ID は用語頭字＋番号（問1・定15・抱11 …）。英字 1 文字＋数字（D1 等）は使わない"
  skip_phases: [3, 4, 5, 6, 7]
  scale: "light"
  review_mode: "single"
```

## 1. pjdhiro の言葉（原文。言い換え禁止）

| ID | 原文 | 日付 |
|---|---|---|
| 問1 | 無意味さは無意味なのか？ | トップページ |
| 問3-5 への答え | 信頼という概念が未定義。信頼という概念を見つけたり、曖昧なまま扱うための思考方法ではないか？という位置付け。今のところ。 | 2026-11-02 |
| 定12 | 私としては、コサイン９０度のたとえが、最も欠損駆動を表すと思う。ゼロのはずなのに違和感がある。その違和感が気になって探索したくなる。 | 2026-11-02 |
| 定14 | 認知しづらかった、記号で表現しづらかった、価値観として受容されなかったものたち　のことですが、そのまま列挙したほうがいいと思う | 2026-11-02 |
| 定15 | 実軸で認知したものの中に、ゼロだからゼロと定義されて、無意味・無価値のように扱われたものが、実は虚軸で意味があった。そんなことが　欠損だと思います | 2026-11-02 |
| 定16 | 欠損駆動思考は虚軸の欠損のことを指しています。出発点は。それが全てかもしれませんし、それ以外にも見落としがあるかもしれません | 2026-11-02 |
| 定18 | 記号で表現すると虚軸の概念を使うのが最もしっくりくるのです。でも、ただの比喩でしかないかもしれない。人間がしっくりきたり、岩っ感を感じたりすることが、どうなっているのかわからない。神経現象学の知見を借りて仮説的に定義して足場としていくしかない。 | 2026-11-02 |
| 原6 | 人は本質的に「√の存在」。表現される姿（ノルム）は二乗された虚構で、根本には虚軸（感情・無意識・未体験）がある | 2025-06-15 |
| 抱11 | 意識にのぼる信号は、予測と誤差がある場合に立つ。認知される。という意味です。それは　気づきの部品だろう、という推測です。その後に、その信号を抱持するのは忍耐力や興味といった心理エネルギーや頭脳の記憶が必要だろう。 | 2026-11-02 |
| 抱13 | 発達が低次の場合、正解を一つにしたがるので耐えられないと思います。早く正解めいた結論を出してスッキリしたい欲求があるはずです。 | 2026-11-02 |
| 位14 | そこから欠損駆動思考として切り分けられる概念を探索するしかない。演繹、帰納など他の試行方法とは違うものを。アブダクションとは似ているかもしれないが、それの定義が曖昧だと思う。最終的にはアブダクションとの違い、もしくは再定義のようなものになるかもしれない。私はデザイン思考の一部、もしくは本質に触れようとしていると思って出発したが。 | 2026-11-02 |
| 欠8 | 捨てられた誤差たちの30年。失われたはず、が、失えなかった。——規格品に合わせるために粗く処理していた人たちが大勢いる。情報生産でも | blog 2026-02-02 |

## 2. 九つのレーン（セルフレビュー §4 の順）

各レーンの冒頭で、セルフレビュー §3 の対応する推論と §4 の穴の文を読み、**何を照合すれば穴が狭まるか**を 3 行で書いてから始める。候補として挙げた著者は「当たる先の例」であり、網羅でも採用でもない。見つからなければ「見つからない」と書く。

### レーン 1: 探索しても意味が見つからなかった違和感（穴 1）

- 穴: 探索しても虚軸の意味が見つからなかったものは、欠損だったのか。見つかったときにはじめて欠損と呼ぶのか
- 問い: 起点の違和感・予感・疑いが**外れた場合**を、原典はどう扱っているか。①Polanyi: 問題の予感（intimation）が外れる場合、偽の問題について何と書いているか（*Personal Knowledge* 1958 の問題発見の節、*The Tacit Dimension* 1966 ch.1）②Koriat 2000／Hart 1965: feeling-of-knowing の錯誤（illusory FOK）の扱いと精度 ③Peirce: abduction の可謬性（CP 5.189 周辺、"guessing" の論）④Dewey 1910: 疑いが否定的に解消される場合（示唆が棄てられる場合）の記述 ⑤デザイン研究: 行き止まりになった hunch の扱い（Schön 1983 の実験の失敗、Cross の記述があれば）
- 報告の形: 著者ごとに「外れた予感を何と呼ぶか／それでも価値があると言うか／言わないか」。穴 1 に対して近い／違うの両方

### レーン 2: 三つの面（認知・記号・価値）の分類の先行例（穴 2）

- 穴: 定14 の三つ（認知しづらかった／記号で表現しづらかった／価値観として受容されなかった）は、実軸が物事を処理する三つの面と読めるか。四つ目はあるか
- 問い: 「見落とされ方」を**認知・表象（記号）・価値**の三つに分ける枠組みが既存にあるか。①認知: inattentional blindness（Mack & Rock 1998、Simons & Chabris 1999）、予測処理での期待外れ刺激の扱い ②記号: Polanyi の tacit／explicit、"we can know more than we can tell"（1966 p.4 の確認は統合表に low で在る）、Cassirer の象徴形式 ③価値: Kuhn 1962 ch.6 anomaly（パラダイムが見落とすもの）、Fleck 1935 思考様式、Douglas 1966 *Purity and Danger*（分類からこぼれるもの＝dirt）④三分法の先行例: Peirce の三つのカテゴリー、Habermas の三つの世界（客観・社会・主観）、Popper の三世界 ⑤四つ目の候補が原典から出るか（行為・制度・時間・身体など）
- 報告の形: 枠組みごとに「何を何に分けているか／定14 の三つと対応するか／しないか」。四つ目は「原典にその区分があるか」だけ書き、足すべきかは書かない

### レーン 3: 虚軸の中身（感情・無意識・未体験）と、言語化されないもの（穴 3）

- 穴: 2025-06 の虚軸の中身（感情・無意識・未体験）は、定14 の三つと対になるか
- 問い: 言語化・象徴化されていない経験を扱う概念が、感情・無意識・未体験のそれぞれにあるか。①感情: Barrett の構成主義（affect と概念化。2017）、alexithymia（Sifneos 1973）②無意識: Bollas 1987 "the unthought known"（*The Shadow of the Object*）、Stern 1997 "unformulated experience"、Bion の β 要素と α 機能（1962）③未体験: Gendlin の felt sense と implicit（*Experiencing and the Creation of Meaning* 1962、*Focusing* 1978）④これらが「認知しづらい／記号で表しづらい／価値として受容されない」のどれに当たる記述か
- 報告の形: 概念ごとに「定義文（逐語）／感情・無意識・未体験のどれか／定14 の三つのどれに当たる記述があるか」。対応づけは「原典にそう読める箇所があるか」だけ。対にするかは書かない

### レーン 4: 「無意味とされたものに意味がある」という言い方（穴 4）

- 穴: 問1「無意味さは無意味なのか」は、定15（無意味・無価値と扱われたものに虚軸の意味があった）を問いの形にしたものと読めるか
- 問い: 実存主義と周辺で、「無意味さ」が**判断（誰かが無意味と定義した）**として扱われているか、**経験（無意味さを感じる）**として扱われているか。①Tillich 1952 ch.6: meaninglessness は不安の経験か、判断か。"accepting meaninglessness" の対象 ②Camus 1942: 不条理は「人間の呼びかけと世界の沈黙の対面」＝関係の記述。無意味は判断か ③Frankl: existential vacuum の記述 ④Nagel 1971: 外からの視点で「すべてが恣意的に見える」＝判断の側 ⑤「無意味とされたものに別の意味がある」と**判断の訂正**として書いている論があるか（例: 老子 11 章の無用の用、Douglas の dirt、Bataille の過剰）
- 報告の形: 著者ごとに「無意味は判断か経験か／別の意味があると言うか／その意味はどこにあると言うか」。問1 と定15 のつながりは書かない（後の対話）

### レーン 5: 信頼と、測れないもの（穴 5）

- 穴: 信頼は、実軸でゼロ扱いされやすい虚軸の値の一例か
- 問い: 信頼論は信頼を「不確実さ・測れなさを扱う仕組み」としてどう定義しているか。①Luhmann *Vertrauen* 1968（英訳 *Trust and Power* 1979）: 複雑性の縮減、信頼と確信の区別 ②Möllering 2001 "The nature of trust: From Georg Simmel to a theory of expectation, interpretation and suspension"（*Sociology* 35(2)）、Möllering 2006 *Trust: Reason, Routine, Reflexivity*: **suspension**（判断保留・leap of faith）の定義文 ③Simmel: 信頼は知と無知のあいだ（*Soziologie* 1908／*Philosophie des Geldes*）④Lewis & Weigert 1985、Baier 1986 ⑤「信頼は測れない／測ろうとすると壊れる」と書いている箇所があるか
- 報告の形: 著者ごとに「信頼の定義（逐語）／不確実さ・無知・測れなさとの関係／suspension と抱持（反射的に処理せず問いとして抱え保つ）の近い点・違う点」。信頼が虚軸の値かは書かない

### レーン 6: 誤差と、枠組みから欠けているものの区別（穴 6）

- 穴: 「欠損駆動思考は虚軸の欠損」で全てか。実軸の欠損（ふつうの誤差や失敗）は対象外か
- 問い: 「測った軸の上の誤差」と「測る枠組みから欠けているもの」を区別する論があるか。①Kuhn 1962 ch.6: anomaly と、通常科学が解く puzzle の違い ②Reason 1990 *Human Error*: slips／lapses／mistakes の区分（誤差の側）③統計・データ: 残差（residual）と欠測（missing。Rubin 1976 の MCAR／MAR／MNAR）と「ゼロ」の区別。「0 と NA は違う」の扱い ④Bateson 1972 "a difference which makes a difference" ⑤unknown unknowns の系譜（Luft & Ingham 1955 Johari window、Rumsfeld 2002、Taleb 2007）⑥測定論: 「測れないものはゼロではない」と明示している箇所（Stevens 1946 の尺度水準、Kahneman の WYSIATI 2011）
- 報告の形: 論ごとに「何と何を区別しているか／『ゼロと定義された』に当たる側はどれか／誤差の側はどれか」。欠損駆動思考の対象範囲は書かない

### レーン 7: 気づきの無い違和感（穴 7）

- 穴: 信号が立っていない（気づきの無い）違和感はありうるか
- 問い: 意識的な気づきに先立つ、または伴わない不一致の身体信号について、原典は何を示しているか。①Bechara, Damasio, Tranel & Damasio 1997 *Science* 275: Iowa gambling task で、意識的に分かる前に皮膚電気反応が出る（原文の数値と、後の批判 Maia & McClelland 2004 も）②Damasio 1994 somatic marker 仮説の定義文 ③Gendlin: felt sense は「まだ言葉になっていないが身体にある」の定義文（1978／1996）④Petitmengin 2007 "Towards the source of thoughts": pre-reflective の記述 ⑤Lewicki, Hill & Czyzewska 1992 nonconscious acquisition、Reber 1967 implicit learning ⑥Nieuwenhuis et al. 2001: 誤りに気づかないときの ERN ⑦各論が「awareness／気づき」をどう定義しているか（それが無いと「気づきの無い違和感」が言えない）
- 報告の形: 論ごとに「何を測ったか／気づきの定義／気づき無しの不一致信号があると言えるか・言えないか」。→as#149 候補を別に列挙

### レーン 8: 起点・保つ・探索の三段と、既存のプロセスモデル（穴 8）

- 穴: 三要素（欠損・抱持・駆動）に分けた構成は妥当か。「駆動」は独立の要素か、欠損の一部か
- 問い: 思考・探究・創造のプロセスモデルで、「起点の不一致」「保つ段」「探索へ向かう段」がどう分けられているか。①Dewey 1910 ch.6 の五段（felt difficulty → location and definition → suggestion → reasoning → testing）: 「保つ」はどこか ②Wallas 1926 *The Art of Thought*: preparation／incubation／illumination／verification。incubation は保つか ③Peirce: abduction／deduction／induction。驚きから仮説までのあいだに段があるか ④Gendlin *Focusing* 1978 の六段 ⑤Schön 1983 の reflection-in-action の流れ ⑥Bion 1962／1970: container-contained、PS↔D、"without memory or desire"（1967）⑦Loewenstein 1994: gap の認識と探索は一段か二段か
- 報告の形: モデルごとに「段の数と名前（逐語）／起点の不一致はどれか／保つ段があるか／探索への移行は独立の段か」。三要素の採否は書かない

### レーン 9: 仮説的な定義の提示法（穴 9）

- 穴: 公開するとき「仮説的な定義（足場）」をどこまで明記するか
- 問い: 暫定的・感受的な定義を本文でどう提示するかについて、先行例と規約は何か。①Blumer 1954 "What is Wrong with Social Theory?"（*American Sociological Review* 19(1)）: sensitizing concepts と definitive concepts の定義文 ②Robinson 1950 *Definition*: stipulative／lexical／real の区別 ③Carnap 1950 の explication（explicandum／explicatum）④Lakatos 1970: hard core と protective belt ⑤Varela 1996 "Neurophenomenology": working hypothesis の提示の仕方 ⑥現象学的質的研究の "working definition"／"operational definition" の慣習（例: van Manen 1990）⑦文章上の慣習: 定義文に「暫定」「working」「provisional」を付ける例が一次資料にあるか
- 報告の形: 枠組みごとに「定義文（逐語）／提示の仕方（冒頭か各定義文か）／本論の『仮説的な定義（足場）』に近い点・違う点」。どこまで明記するかは書かない

### レーン 10: アブダクションの定義と、その曖昧さ（位14）

- 起点（pjdhiro 原文・位14）: 「演繹、帰納など他の試行方法とは違うものを。アブダクションとは似ているかもしれないが、それの定義が曖昧だと思う。最終的にはアブダクションとの違い、もしくは再定義のようなものになるかもしれない」
- 問い: ①Peirce 自身のアブダクションの定義文（CP 5.189 の三段論法形式、CP 5.171 "Abduction is the process of forming an explanatory hypothesis"、1878 "Deduction, Induction, and Hypothesis"、1903 Harvard 講義、retroduction への語の変遷）を逐語で ②定義が曖昧とされる論点を扱った二次文献: Frankfurt 1958 "Peirce's Notion of Abduction"、Hintikka 1998、Paavola 2004（*Semiotica*）、Schurz 2008 "Patterns of abduction"（*Synthese* 164）、Magnani 2001／2009（manipulative abduction）、Douven（SEP "Abduction"）③デザイン研究のアブダクション: Dorst 2011 "The core of 'design thinking' and its application"（*Design Studies* 32(6)。abduction-1／abduction-2）、Kolko 2010 "Abductive Thinking and Sensemaking"（*Design Issues* 26(1)）、Roozenburg 1993 "On the pattern of reasoning in innovative design"（*Design Studies* 14(1)。innovative abduction）④各定義で、アブダクションの**起点**（surprising fact／anomaly）と**終点**（仮説の形成）のあいだに、「保つ」段や「言語化できない違和感」が入る余地があるか。起点が「驚くべき事実」（命題化されたもの）に限られているか
- 報告の形: 定義ごとに「逐語／起点は何か（命題か・感覚か）／終点は何か／曖昧とされる点（二次文献の指摘）／草案 v0.1 の三要素（欠損・抱持・駆動）との近い点・違う点」。「違い」か「再定義」かは書かない。デザイン思考の本質かどうかも書かない

## 3. 出力形式（各レーン共通・120 行以内）

```markdown
# r4-lane{N}: {題}
## 0. 読んだローカル資料（パス）
## 1. 穴と、何を照合すれば狭まるか（3 行）
## 2. 原典ごとの報告
### {著者 年 題}
- 書誌（版・章・頁）／確認状況: 本文○／要旨○／書誌のみ／未取得
- 原文（逐語・2 文以内。引用符は原文にある語だけ。訳は別行）
- 何を言っているか（3 行以内）
- 穴への当たり方: 近い／違う（両方）
- conf: high／medium／low
## 3. 見つからなかったこと（探した先を書く）
## 4. →as#149 候補（あれば）
## 5. 残課題（紙でしか確認できないもの等）
```

**禁止**: 穴に答えを決める／pjdhiro の言葉を言い換える／cos 90°・虚軸にタグを当てる／定義番号（D1 等）で概念を呼ぶ／原文にない語を引用符で囲む／120 行超。
**書き先**: `docs/issues/survey-216/r4-lane{N}.md`（Bash の heredoc で作成。失敗したら本文を報告に含める）。報告の最後に 10 行以内の要約。

## 4. Phase 2 REVIEW（critic ×1）

10 レーンの報告を V3（主張とエビデンスの対応）・V4（過度の一般化）・V5（二つの読みの保持）・V6（禁止事項）で検査。critical／major／minor を行単位で指摘。独自照合は可（round 3 と同じ）。結果は `docs/issues/survey-216/review-critic-r4.md`。
