# 意思決定とは — 調べ 3：判断のヒューリスティクスとバイアス、プロスペクト理論、二つの思考

調べた日：2026-11-18。原典の PDF は本体の `.cache/raw/decision-making/S03_*.pdf`（git の外）。試した経路は本体の `.cache/raw/find-ledger.md`。訳はすべて Claude。

## 要点（10 行まで）

- Tversky & Kahneman 1974 は、不確かなことについての判断（確率の見積もり・値の予測）を、少数の「ヒューリスティクス」（代表性・利用可能性・係留と調整）に頼る簡単な操作として書いた。ふだんは役に立つが、ときに系統立った誤り（バイアス）を生む、という二面で書いている。統計に通じた研究者も直観で考えるときは同じ誤りをする、とも書く。
- Kahneman & Tversky 1979 は、期待効用理論は「規範（合理的な選択のモデル）」としては受け入れられていても、「記述（人が実際にどう選ぶか）のモデル」として不十分だとし、プロスペクト理論を出した。選ぶ過程を「編集」と「評価」の二段に分け、価値は最終的な資産でなく参照点からの変化（得と損）に付く、損は同じ額の得より大きく感じられる、確かなものを重く見る（確実性効果）、と書く。
- Tversky & Kahneman 1981 は、意思決定の問題を「行為・結果・その間の条件付きの確率」で定義し、決める人がそれをどう捉えるかを「決定の枠（decision frame）」と呼んだ。同じ問題を言い換えるだけで選好が逆になる（アジアの病気の問題）。この逆転を必ずしも非合理とは言わず、サイモンの「限定合理性」に触れたうえで、プロスペクト理論と枠の分析のほうがよく説明すると書く。枠が結果の経験そのものを変えるときは、枠を選ぶことは倫理的な行為だ、とも書く。
- Kahneman 2003（ノーベル賞の講演の改訂版）は、二人の仕事を「限定合理性の地図」を作る試みと位置づけ（サイモンの満足化に触れる）、考えることと決めることを「直観」と「推論」の二つのしかたに分け、Stanovich & West 2000 の名前を借りて System 1・System 2 と呼んだ。大半の判断と選択は直観でなされ、System 2 の見張りはふだんゆるい、と書く。
- 二重過程の総説の Evans 2008 は、System 1・2 という一般の二システム論は「単純すぎ、誤解を招く」とし、「type 1・type 2 の過程」と呼ぶほうがよいと書く。Stanovich & West 2000 は、規範と実際の答えのずれを、すぐ「非合理」とせず四つの解釈で調べ、個人差（認知の力）から見た。
- 批判：Gigerenzer 1996 は、規範が狭すぎ（中身を見ずに確率論を当てる）、ヒューリスティクスが曖昧すぎ（一語の名札で説明したことにしている）と批判した。Kahneman & Tversky 1996 は、自分たちが言っていない立場を帰されていると答え、頻度で問えば錯覚は「いくつかが・ときに・減る」までで、「消える」とは言えない、と返した。
- この分野で「意思決定」を一文で定義している原典は 1981 の「意思決定の問題」の定義だけで、ほかは「リスクの下での選択」「不確かさの下での判断」を対象として扱っている（1974 の頭は「多くの決定は不確かな出来事の見込みについての信念に基づく」）。

## 論ごと

### 判断のヒューリスティクスとバイアス（Tversky & Kahneman 1974）

- 書誌：Tversky, A., & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. *Science*, 185(4157), 1124–1131. DOI 10.1126/science.185.4157.1124（Crossref と一致）
- 読んだ写し：https://sites.stat.washington.edu/peter/498.Sp16/Tversky.pdf （ワシントン大学の統計学の授業の頁に置かれた写し。権利は未確認。中身は *Science* の誌面の画像に文字の層が付いたもの。頁の下に「SCIENCE, VOL. 185」「27 SEPTEMBER 1974」と頁番号が見える）。同じ論文は、カリフォルニア大学サンディエゴ校の McKenzie の頁の写しが Wayback にある（http://psy.ucsd.edu/~mckenzie/TverskyKahneman1974Science.pdf ・2006-12-15。取っていない）。出版社・著者・機関リポジトリの写しは見つからなかった（Crossref・OpenAlex・Semantic Scholar・著者のプリンストンの頁の今と昔〔Wayback の一覧〕）。
- 照合の状態：本文照合済（授業用の写し。誌名・巻・頁の見える出版社の版。pp.1124・1127・1128・1130・1131）
- 鍵の文：
  - 「people rely on a limited number of heuristic principles which reduce the complex tasks of assessing probabilities and predicting values to simpler judgmental operations. In general, these heuristics are quite useful, but sometimes they lead to severe and systematic errors.」（p.1124）訳：人は、確率を見積もり値を予測するという複雑な課題を、より簡単な判断の操作に縮める、少数のヒューリスティックな原理に頼っている。一般に、これらのヒューリスティクスはとても役に立つが、ときに重く、系統立った誤りを生む。
  - 利用可能性：「people assess the frequency of a class or the probability of an event by the ease with which instances or occurrences can be brought to mind」（p.1127）訳：人は、ある部類の頻度や出来事の確率を、例や出来事をどれだけ容易に思い浮かべられるかで見積もる。
  - 係留：「different starting points yield different estimates, which are biased toward the initial values. We call this phenomenon anchoring.」（p.1128）訳：出発点が違えば見積もりも違い、見積もりは最初の値の側に偏る。この現象を係留と呼ぶ。
  - 「Experienced researchers are also prone to the same biases—when they think intuitively.」（p.1130）訳：経験を積んだ研究者も、直観で考えるときは同じバイアスに陥りやすい。
  - まとめ：「These heuristics are highly economical and usually effective, but they lead to systematic and predictable errors.」（p.1131）訳：これらのヒューリスティクスはとても経済的で、たいていは有効だが、系統立った、予測できる誤りに導く。
- 要約：論文は「多くの決定は、選挙の結果や被告の有罪などの不確かな出来事の見込みについての信念に基づく」（p.1124）から始め、その信念がどう作られるかを問う。距離を物の鮮明さで見積もる知覚のたとえ（霧の日は遠く見える）を置き、確率の主観的な見積もりも同じく限られた妥当性のデータを経験則で処理したものだとする。三つのヒューリスティクス――代表性（A が B にどれだけ似ているかで確率を判断する。事前確率〔基準率〕の無視・標本の大きさの無視などを生む）、利用可能性（思い浮かべやすさ）、係留と調整（出発点からの調整が足りない）――と、それぞれのバイアスを並べる。議論の節では、主観確率の妥当さを内的な整合性だけで測る見方に対し、「十分な、あるいは合理的な判断と見なされるには、内的な整合性だけでは足りない」とし、その人の信念の網全体と両立することを求める（p.1130）。
- 批判・のちの改め：Gigerenzer 1996・Kahneman & Tversky 1996（下）。Kahneman 2003 は、この論文の結論を引いたうえで、Kahneman & Frederick 2002 の「属性の置き換え」（難しい対象の属性を、より思い浮かべやすい別の属性で置き換えて判断する）として捉え直し、不確かさの下の判断に限らないものにした（Kahneman 2003 p.1460。下）。

### プロスペクト理論（Kahneman & Tversky 1979）

- 書誌：Kahneman, D., & Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. *Econometrica*, 47(2), 263–291. DOI 10.2307/1914185（Crossref と一致。Crossref は頁の始めの 263 だけを返した。終わりの 291 は写しの表紙の書誌による）
- 読んだ写し：Wayback の記録（元は Kahneman のプリンストン大学の頁 kahneman.scholar.princeton.edu の `prospect_theory.pdf`・2024-03-12）https://web.archive.org/web/20240312171026/https://kahneman.scholar.princeton.edu/sites/g/files/toruqf3831/files/kahneman/files/prospect_theory.pdf 。中身は Econometric Society の著作権の断り書きの表紙＋ ProQuest（ABI/INFORM）の誌面の画像。文字の層が無いので、頁の画像で読んだ。今の頁は Cloudflare の確認画面で止まる（403）。同じ PDF は昔の頁 www.princeton.edu/~kahneman/docs/Publications/prospect_theory.pdf にも Wayback に残る（2010-03-31）。
- 照合の状態：本文照合済（著者の大学の頁の写し・Wayback。頁の画像で読んだ。pp.263・265・274・275・277・278・279）
- 鍵の文：
  - 「Expected utility theory has dominated the analysis of decision making under risk. It has been generally accepted as a normative model of rational choice [24], and widely applied as a descriptive model of economic behavior」（p.263）訳：期待効用理論は、リスクの下での意思決定の分析を支配してきた。合理的な選択の規範のモデルとして広く受け入れられ、経済行動の記述のモデルとしても広く当てはめられてきた。
  - 「Decision making under risk can be viewed as a choice between prospects or gambles.」（p.263）訳：リスクの下での意思決定は、見込み（賭け）の間の選択と見ることができる。
  - 確実性効果：「people overweight outcomes that are considered certain, relative to outcomes which are merely probable—a phenomenon which we label the certainty effect.」（p.265）訳：人は、確かだと見なされる結果を、ただ見込みがあるだけの結果に比べて重く見る。これを確実性効果と呼ぶ。
  - 二段：「Prospect theory distinguishes two phases in the choice process: an early phase of editing and a subsequent phase of evaluation.」（p.274）訳：プロスペクト理論は、選ぶ過程に二つの段を分ける。先の編集の段と、それに続く評価の段。
  - 参照点：「the location of the reference point, and the consequent coding of outcomes as gains or losses, can be affected by the formulation of the offered prospects, and by the expectations of the decision maker.」（p.274）訳：参照点の位置と、それに従って結果を得か損かに振り分けることは、示された見込みの言い表し方と、決める人の期待に左右されうる。
  - 「the carriers of value are changes in wealth or welfare, rather than final states.」（p.277）訳：価値を担うのは、最終的な状態でなく、富や暮らし向きの変化である。
  - 損失回避：「losses loom larger than gains.」（p.279）訳：損は得より大きく見える。
- 要約：期待効用理論の三つの柱（期待・資産への統合・危険回避）を、学生と教員への仮の選択の問題（イスラエル・ストックホルム・ミシガン）で崩す。確実性効果（アレのパラドックスの変形）、確かな損を前にすると危険を好むこと、どの見込みにも共通の部分を捨てる「孤立効果（isolation effect）」などを示す（要旨・p.263）。そのうえで、編集（符号化・結合・分離・相殺・単純化・優越の検出）と評価の二段を置き、評価は確率の代わりの「決定の重み」π と、参照点からの変化に付く価値関数 v で書く。価値関数は (i) 参照点からの偏りの上で定義され、(ii) 得では凹、損ではたいてい凸、(iii) 損の側が得の側より急（p.279）。著者は、この理論が言う規範からの外れ（非推移性・優越の破れ）は、本人が気づけばふつう正されるが、気づく機会の無い場面では起こると見込む（p.277）。仮の選択という方法の限界は、著者自身が認めている（p.265）。
- 批判・のちの改め：Tversky & Kahneman 1992 の累積プロスペクト理論（*Journal of Risk and Uncertainty*）で改められたが、今回は読んでいない。Kahneman 2003 は、プロスペクト理論を「変化と差は、絶対の値より思い浮かびやすい」という一般の命題に結びつけて捉え直した（下）。

### 決定の枠（Tversky & Kahneman 1981）

- 書誌：Tversky, A., & Kahneman, D. (1981). The Framing of Decisions and the Psychology of Choice. *Science*, 211(4481), 453–458. DOI 10.1126/science.7455683（Crossref と一致）
- 読んだ写し：https://www.csc2.ncsu.edu/faculty/mpsingh/local/Social/f24/wrap/readings/Tversky+Kahneman-framing-1981.pdf （ノースカロライナ州立大学の授業の読み物の頁に置かれた写し。権利は未確認。中身は JSTOR の誌面。表紙に誌名・巻・号・頁）。OpenAlex が挙げた Georgetown の機関リポジトリの handle（10822/789595）は 404。出版社・著者の写しは見つからなかった。
- 回答者（2026-11-18 の読み直しで足した）：スタンフォード大学とブリティッシュコロンビア大学の学生が教室で短い質問紙に答えた（p.453）。問題 1 は N = 152、問題 2 は「A second group of respondents」で N = 155（p.453）。
- 照合の状態：本文照合済（授業用の写し。誌名・巻・頁の見える出版社の版。pp.453・458）
- 鍵の文：
  - 「A decision problem is defined by the acts or options among which one must choose, the possible outcomes or consequences of these acts, and the contingencies or conditional probabilities that relate outcomes to acts.」（p.453）訳：意思決定の問題は、選ばなければならない行為（選択肢）、その行為のありうる結果、結果と行為を結ぶ条件（条件付きの確率）によって定義される。
  - 「We use the term "decision frame" to refer to the decision-maker's conception of the acts, outcomes, and contingencies associated with a particular choice.」（p.453）訳：ある選択に伴う行為・結果・条件を、決める人がどう捉えているかを「決定の枠」と呼ぶ。
  - 「The frame that a decision-maker adopts is controlled partly by the formulation of the problem and partly by the norms, habits, and personal characteristics of the decision-maker.」（p.453）訳：決める人がとる枠は、一部は問題の言い表し方に、一部はその人の規範・習慣・人となりに左右される。
  - 「These observations do not imply that preference reversals, or other errors of choice or judgment (24), are necessarily irrational.」（p.458）訳：これらの観察は、選好の逆転や、選択や判断のほかの誤りが、必ず非合理だということを意味しない。
  - 「When framing influences the experience of consequences, the adoption of a decision frame is an ethically significant act.」（p.458）訳：枠づけが結果の経験に影響するとき、決定の枠をとることは倫理的に重い行為である。
- 要約：「合理的な選択は、枠を変えても選好が逆にならないことを求める」（p.453）とし、知覚で見る位置を変えると山の高さの見えが逆になることにたとえる。アジアの病気の問題では、600 人の命を「200 人が助かる」と言えば確実な案が 72%、「400 人が死ぬ」と言えば賭けの案が 78% 選ばれる（p.453）。得の枠では危険を避け、損の枠では危険をとる。結論の節では、選好の逆転を必ず非合理とはせず、サイモンの「限定合理性」の名で論じられた知の限界と同じく、いちばん手近な枠で動くことは別の枠を探る手間から正当化されうる、と認めたうえで、細部はプロスペクト理論と枠の分析のほうがよく説明すると書く。規範の側では、近代の合理的選択の理論が選好の整合性だけを合理性の基準にしてきたことに疑いを置き、「いま何が欲しいか」より「そのとき何を感じるか」を問う、経験を予測する基準を挙げる（p.458）。
- 批判・のちの改め：Stanovich & West 2000 は、この病気の問題などで「別の捉え方（construal）」をとる人が認知の力の低い側に多いことを示し、別の捉え方を正当とする議論に一つの材料を足した（p.658。下）。

### 限定合理性の地図・System 1 と System 2（Kahneman 2003）

- 書誌：Kahneman, D. (2003). Maps of Bounded Rationality: Psychology for Behavioral Economics. *American Economic Review*, 93(5), 1449–1475. DOI 10.1257/000282803322655392（写しの表紙と頭の頁で、誌・巻・号・頁を確かめた。Crossref は引いていない）
- 読んだ写し：Wayback の記録（元は Kahneman のプリンストン大学の頁の `maps_bounded_rationality_dk_2003.pdf`・2024-03-12）https://web.archive.org/web/20240312165332/https://kahneman.scholar.princeton.edu/sites/g/files/toruqf3831/files/kahneman/files/maps_bounded_rationality_dk_2003.pdf 。表紙に AEA の許諾の文、本文は誌面。
- 照合の状態：本文照合済（著者の大学の頁の写し・Wayback。pp.1449–1452・1460・1469–1470）
- 頼む文の候補との関係：論文の脚注に、これは 2002 年 12 月 8 日のストックホルムでのノーベル賞の講演の改訂版で、別の版が *American Psychologist* 2003 年 9 月号に出たとある（p.1449）。nobelprize.org の講演の PDF と *American Psychologist* 版（Kahneman 2003 "A perspective on judgment and choice"）は今回は取っていない。
- 鍵の文：
  - 「Herbert A. Simon (1955, 1979) had proposed much earlier that decision makers should be viewed as boundedly rational, and had offered a model in which utility maximization was replaced by satisficing. Our research attempted to obtain a map of bounded rationality」（p.1449）訳：サイモンはずっと前に、決める人を限定合理的なものと見るべきだと提案し、効用の最大化を満足化に置き換えたモデルを示していた。私たちの研究は、限定合理性の地図を得ようとした。
  - 「The rational-agent model was our starting point and the main source of our null hypotheses」（p.1449）訳：合理的な行為者のモデルは、私たちの出発点であり、帰無仮説の主な出どころだった。
  - 「most judgments and most choices are made intuitively; (ii) that the rules that govern intuition are generally similar to the rules of perception.」（p.1450）訳：大半の判断と大半の選択は直観でなされる。直観を支配する規則は、おおむね知覚の規則に似ている。
  - 「Stanovich and West (2000) proposed the neutral labels of System 1 and System 2.」（p.1451）訳：Stanovich と West（2000）が、System 1・System 2 という中立な名前を提案した。
  - 「The operations of System 1 are fast, automatic, effortless, associative, and often emotionally charged ... The operations of System 2 are slower, serial, effortful, and deliberately controlled」（p.1451）訳：System 1 の働きは速く、自動的で、努力が要らず、連想によるもので、しばしば情動を帯びる。System 2 の働きはより遅く、一つずつで、努力が要り、意図して制御される。
  - 「the traditional separation between belief and preference in analyses of decision making is psychologically unrealistic.」（p.1470）訳：意思決定の分析での、信念と選好の伝統的な分け方は、心理学的に現実的でない。
- 要約：二人の仕事を三つの研究の流れ（ヒューリスティクスとバイアス・プロスペクト理論・枠づけ）にまとめ、直観と推論の二つのしかたで捉え直す。直観（System 1）は知覚に似て、何が「思い浮かびやすいか（accessibility）」に左右される。推論（System 2）は直観を見張るが、その見張りはふだんゆるい（バットとボールの問題）。直観は誤りだけでなく、熟練した人では速く正確でもある（チェスの名人・経験を積んだ看護師）。判断のヒューリスティクスは「属性の置き換え」（Kahneman & Frederick 2002 の定義を引く、p.1460）として捉え直す。結びでは、経済学の合理的な行為者は「欠けのない System 2 の論理の力と、System 1 の低い計算の費用を併せ持つ単一のシステム」と言い換えられ、行動経済学の多くは合理的モデルの骨組みを残して特定の制限を足しているが、ここで示したモデルは骨組みが違う、と書く（p.1469）。ヒューリスティクスの研究を始めたとき、これらの特徴の多くは「サイモンの頭にずっと前からあった」とも書く（p.1470）。
- 批判・のちの改め：Evans 2008 が二システムという言い方そのものを批判した（下）。

### 二重過程の総説（Evans 2008）

- 書誌：Evans, J. St. B. T. (2008). Dual-Processing Accounts of Reasoning, Judgment, and Social Cognition. *Annual Review of Psychology*, 59, 255–278. DOI 10.1146/annurev.psych.59.103006.093629（Crossref と一致）
- 読んだ写し：Wayback の記録（元はアルバータ大学の哲学の授業の頁 sites.ualberta.ca/~francisp/Phil488/EvansDualProcessing2008.pdf・2026-05-28。権利は未確認）https://web.archive.org/web/20260528093008id_/https://sites.ualberta.ca/~francisp/Phil488/EvansDualProcessing2008.pdf 。中身は Annual Reviews の誌面（他の大学が 2009 年に落とした印あり）。今の頁は TLS の証明書の問題で取れなかった。プリマス大学の研究ポータルは書誌の頁だけ。
- 照合の状態：本文照合済（授業用の写し・Wayback。誌名・巻・頁・DOI の見える出版社の版。pp.255・256・270–271）
- 鍵の文：
  - 「readers should beware of inferring that there are necessarily just two systems or just two kinds of dual-processing theory」（p.256）訳：システムが必ず二つだけ、二重過程の理論が必ず二種類だけ、と推し量ることに読者は気をつけるべきだ。
  - 「close inspection of the evidence suggests that generic dual-system theory is currently oversimplified and misleading.」（p.270）訳：証拠をよく見ると、一般の二システム論は、今のところ単純すぎ、誤解を招く。
  - 「My suggestion is that type 2 processes are those that require access to a single, capacity-limited central working memory resource, while type 1 processes do not require such access.」（p.270）訳：私の案は、type 2 の過程とは、容量に限りのある一つの中央の作業記憶に頼る必要のある過程で、type 1 の過程はそれを要しない、というもの。
- 要約：認知心理学と社会心理学でばらばらに出てきた二重過程の案（速く・自動的で・無意識の過程と、遅く・熟慮的で・意識的な過程）を総覧する。System 1・2 の名は Kahneman & Frederick 2002 と Stanovich 1999 によるとする（p.256。Kahneman 2003 は Stanovich & West 2000 とする）。結論では、System 1 と 2 に割り振られた性質は一つにまとまらず、少なくとも二種の理論がある――暗黙と明示の二つの知識が行動を取り合う「並行・競合」型（Sloman 1996 など）と、前意識の速い過程が既定の答えを出し、分析的な推論がそれを認めるか介入する「既定・介入」型（Evans 2006・Stanovich 1999・Kahneman & Frederick 2002）――とする（pp.270–271）。
- 批判・のちの改め：Evans & Stanovich 2013（*Perspectives on Psychological Science*）で二人がまとめ直しているが、今回は読んでいない。

### 推論の個人差と合理性の論争（Stanovich & West 2000）

- 書誌：Stanovich, K. E., & West, R. F. (2000). Individual differences in reasoning: Implications for the rationality debate? *Behavioral and Brain Sciences*, 23(5), 645–665. DOI 10.1017/S0140525X00003435（Crossref と一致。写しの頭の頁は、討論の論評を含む 645–726 と書く）
- 読んだ写し：Wayback の記録（元はカリフォルニア大学サンディエゴ校の McKenzie の頁 pages.ucsd.edu/~mckenzie/StanovichBBS.pdf・2026-03-19。権利は未確認）https://web.archive.org/web/20260319030228id_/https://pages.ucsd.edu/~mckenzie/StanovichBBS.pdf 。中身は誌面（論評つき 82 頁）。
- 照合の状態：本文照合済（授業用の写し・Wayback。誌名・巻・頁の見える出版社の版。pp.645・658。論評と応答は読んでいない）
- 鍵の文：
  - 要旨：「four alternative interpretations preserve the assumption that human behavior and cognition is largely rational. These posit that the gap is due to (1) performance errors, (2) computational limitations, (3) the wrong norm being applied by the experimenter, and (4) a different construal of the task by the subject.」（p.645）訳：四つの別の解釈は、人の行動と認知はおおむね合理的だという前提を保つ。ずれは (1) 実行の誤り、(2) 計算の力の限り、(3) 実験者が誤った規範を当てたこと、(4) 被験者が課題を別に捉えたこと、による、とする。
  - 「In order to emphasize the prototypical view that is adopted here, the two systems have simply been generically labeled System 1 and System 2.」（p.658）訳：ここでとる典型の見方を強めるため、二つのシステムを一般にただ System 1・System 2 と名づけた。
- 要約：規範のモデル（効用理論の公理など）と実際の答えのずれを、「系統立った非合理」とする側（Meliorist）と、合理性を保つ側（Panglossian）の論争として整理し、ヒューリスティクスとバイアスの古典的な課題での個人差（認知の力との相関）から、四つの解釈を一つずつ見た。実行の誤りは小さな要因で、文脈から離れて考えることを要する課題では計算の力の限りが効く。System 1 は自動的で計算の力をあまり要さず、文脈に強く結びついた捉え方を生み、System 2 は分析的な知能の過程を含む、と書く（p.658）。
- 批判・のちの改め：同じ号の論評（多数）と著者の応答は読んでいない。

### 批判：狭い規範と曖昧なヒューリスティクス（Gigerenzer 1996）

- 書誌：Gigerenzer, G. (1996). On narrow norms and vague heuristics: A reply to Kahneman and Tversky (1996). *Psychological Review*, 103(3), 592–596. DOI 10.1037/0033-295X.103.3.592（Crossref と一致）
- 読んだ写し：Wayback の記録（元はマックス・プランク協会の機関リポジトリ PuRe の項 item_2547850 の `GG_On Narrow_1996.pdf`・2025-01-13）https://web.archive.org/web/20250113030527id_/https://pure.mpg.de/rest/items/item_2547850/component/file_2561571/content 。中身は APA の誌面。今の PuRe は自動取得に確認画面を返す。handle：http://hdl.handle.net/21.11116/0000-0000-BD2F-8
- 照合の状態：本文照合済（機関リポジトリの写し・Wayback。pp.592–594）
- 頼む文の候補との順番：頼む文の「Gigerenzer 1996 と Kahneman & Tversky 1996 の返答」は、実際は逆。Gigerenzer 1991・1994 などの批判に Kahneman & Tversky 1996（同じ号 pp.582–591）が答え、それへの再答が Gigerenzer 1996。
- 鍵の文：
  - 「At issue is the imposition of unnecessarily narrow norms of sound reasoning that are used to diagnose so-called cognitive illusions and the continuing reliance on vague heuristics that explain everything and nothing.」（p.592）訳：問題は、いわゆる認知の錯覚を診断するのに使われる、不必要に狭い、まっとうな推論の規範を押し付けることと、何でも説明して何も説明しない曖昧なヒューリスティクスに頼り続けることだ。
  - 「The heuristics in the heuristics-and-biases program are too vague to count as explanations.」（p.593）訳：ヒューリスティクスとバイアスの研究のヒューリスティクスは、説明と呼ぶには曖昧すぎる。
  - 「one-word-labels such as representativeness that seem to be traded as explanations」（p.594）訳：代表性のような一語の名札が、説明として取り引きされているように見える。
- 要約：争点は個々の結果より研究の進め方だとする。規範が狭いとは、問いの中身や文脈を見ずに（content-blind）確率論の規則を一つの出来事に当てることで、たとえば「リンダの問題」で「probable」を文脈から読む意味の推論は知的な過程であって、誤りではない（p.593）。曖昧とは、代表性のような名札や言い換えが過程のモデルの代わりになっていること。求めるのは、いつ、なぜ錯覚が出たり消えたりするかを予測する、細かい認知の過程のモデルだと書く。
- 批判・のちの改め：下の Kahneman & Tversky 1996 と、その追記（Gigerenzer 1996 への応答）。

### 返答：認知の錯覚は実在する（Kahneman & Tversky 1996）

- 書誌：Kahneman, D., & Tversky, A. (1996). On the reality of cognitive illusions. *Psychological Review*, 103(3), 582–591. DOI 10.1037/0033-295X.103.3.582（Crossref と一致。著者の順は Crossref による。写しの文字の層では順が崩れて読める）
- 読んだ写し：Wayback の記録（元はカリフォルニア大学サンディエゴ校の McKenzie の頁 psy.ucsd.edu/~mckenzie/KahnemanTversky1996PsychRev.pdf・2006-12-15。権利は未確認）https://web.archive.org/web/20061215203329id_/http://psy.ucsd.edu:80/~mckenzie/KahnemanTversky1996PsychRev.pdf 。中身は APA の誌面。同じ文書がノースカロライナ州立大学の授業の頁にもある（取得して突き合わせはしていない）。
- 照合の状態：本文照合済（授業用の写し・Wayback。誌名・巻・頁の見える出版社の版。pp.582・589。追記は読んでいない）
- 鍵の文：
  - 「These heuristics, we argued, are often useful but they sometimes lead to characteristic errors or biases」（p.582）訳：これらのヒューリスティクスはしばしば役に立つが、ときに特有の誤りやバイアスに導く、と私たちは論じた。
  - 「some cognitive illusions (not all) are sometimes reduced (not made to disappear) in judgments of frequency.」（p.589）訳：頻度の判断では、いくつかの認知の錯覚が（すべてではない）、ときに減る（消えるのではない）。
- 要約：研究の目的は、正しい判断と誤った判断の両方を生む認知の過程を理解することで、誤りは過程を調べる方法だった、と述べ直す（p.582）。Gigerenzer の批判は、言っていない前提（ヒューリスティクスは中身と文脈によらない、確率と頻度の判断は同じ結果になる）を自分たちに帰しており、頻度の判断にも大きく系統立ったバイアスがある、と返す。残る違いは、Gigerenzer が頻度の判断の正確さを重く見て主観確率を軽く見る点で、自分たちはそれに与しない、とする（p.589）。

## 読めなかったもの・載せられないもの

- Kahneman 2002 のノーベル賞の講演（nobelprize.org の PDF）と Kahneman 2003 *American Psychologist* 版：取りに行っていない。AER 版が講演の改訂版だと本文の脚注で確かめたので、AER 版で代えた。要れば nobelprize.org を次に引く。
- Tversky & Kahneman 1974・1981、Kahneman & Tversky 1996、Evans 2008、Stanovich & West 2000：出版社・著者・機関リポジトリの写しは見つからず、大学の授業や教員の頁に置かれた誌面の写しで読んだ（権利は未確認）。sources.md と find-source のスキルの表では「誌名・頁・DOI が見える出版社の版の PDF なら本文照合済としてよい」に当たるとして本文照合済とした。載せるときは DOI を先に張り、写しの性格を添える。試した経路：Crossref・OpenAlex・Semantic Scholar（Unpaywall と CORE はキーが無く飛ばした）・Kahneman のプリンストンの頁の今と昔の Wayback の一覧（1974・1981 は無かった）・Georgetown の handle（404）・プリマス大学の研究ポータル（書誌だけ）。
- Gigerenzer 1991 "How to make cognitive illusions disappear"（批判の元）：探していない。
- Tversky & Kahneman 1992（累積プロスペクト理論）・Kahneman & Frederick 2002・Evans & Stanovich 2013：探していない。
- 道具の止まり：core.ac.uk と pure.mpg.de は確認画面のホストとして一覧にあり、Wayback の写しで取った。kahneman.scholar.princeton.edu は今は Cloudflare の確認画面（403）。sites.ualberta.ca・pages.ucsd.edu は TLS の証明書のエラーで取れず、Wayback の写しで取った。
