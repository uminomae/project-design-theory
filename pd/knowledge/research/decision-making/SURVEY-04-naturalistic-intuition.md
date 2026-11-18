# 意思決定とは — 調べ 4：自然主義的意思決定と、直観と熟達

調べた日：2026-11-18。原典の PDF は本体の `.cache/raw/decision-making/`（git の外）に置いた。台帳は本体の `.cache/raw/find-ledger.md`。訳はすべて Claude。

## 要点（10 行まで）

- 自然主義的意思決定（NDM）は、意思決定を「決まった選択肢の集まりから、安定した目標に照らして一つを選ぶ出来事（decision event）」と見る従来の研究への異論として出た（Orasanu & Connolly 1993）。現場の決定は、もっと大きな作業に埋め込まれ、状況の見立て・行動・結果の評価の循環の中にある。
- 出発点は消防の指揮官の聞き取り（Klein, Calderwood & Clinton-Cirocco 1988 の報告書、調べは 1985）。156 の決定点のうち、二つ以上の選択肢が挙がったのは 28、選択肢どうしを比べたと言ったのは 16。127 は「見覚えのある型」と見て、型に合う一つの行動をそのまま取った。
- そこから出た認知主導型意思決定（RPD）モデル（Klein 1993）：状況を「典型」と見ること（もっともな目標・大事な手がかり・予期・典型的な行動の四つ）から最初の一案が出て、時間があれば頭の中で動かしてみて（心的シミュレーション）、駄目なら直すか次の案へ移る。比べるのでなく、一つずつ確かめる。最適でなく、使えるものを探す。
- Klein 自身が、分析的なやり方が向く場面（データが抽象的、組み合わせが多い、利害が割れる、決定の正当化が求められる）と、認識的なやり方の危うさ（経験が足りない、敵の最悪の手を読む場面での視野の狭まり）を書いている。どちらが良いとは言っていない。
- Lipshitz（1993）は、選択を意思決定の定義に使うのをやめ、「〈A をせよ、なぜなら R だから〉という行為の論拠を実行すること」と定義し直すことを提案した。
- Simon（1992）：「直観とは、認識以上でも以下でもない」。手がかりが記憶への入口になる、という説明。
- Kahneman & Klein（2009）：ヒューリスティクスとバイアスの側と NDM の側が、直観が当てになる条件で一致した。環境が十分に規則的で妥当な手がかりを出すこと（高い妥当性）と、その手がかりを学ぶ機会（長い練習と、速くはっきりした返り）の二つ。主観的な自信は当てにならない。
- de Groot の名人の「経験が知覚に働く」という見方は、上げた人の分からない写しでしか読めず、本文照合済にはしていない。

## 論ごと

### 消防の指揮官の速い意思決定（Klein, Calderwood & Clinton-Cirocco 1988 の報告書／1986 の予稿）

- 書誌：Klein, G. A., Calderwood, R., & Clinton-Cirocco, A. (1988). *Rapid Decision Making on the Fire Ground*. ARI Technical Report 796. U.S. Army Research Institute for the Behavioral and Social Sciences（June 1988・108 頁・委託の期間 1985 年 4 月〜10 月・Klein Associates）. DOI 10.21236/ADA199492（Crossref の report と一致）。同じ研究の予稿：Klein, Calderwood & Clinton-Cirocco (1986). Rapid decision making on the fire ground. *Proceedings of the Human Factors Society Annual Meeting* 30(6), 576–580. DOI 10.1177/154193128603000616（Crossref と一致。予稿は読んでいない）。
- 読んだ写し：Wayback の記録（元は公的機関 DTIC の PDF、apps.dtic.mil/sti/pdfs/ADA199492.pdf。写しの日 2024-02-16）https://web.archive.org/web/20240216151226/https://apps.dtic.mil/sti/pdfs/ADA199492.pdf 。表紙に「Approved for public release; distribution unlimited」。DTIC そのものは自動取得に 403 を返す。
- 照合の状態：本文照合済（報告書。要旨の頁〔DD Form 1473 の欄 20、PDF の 4 頁〕・本文 pp.11–13「Decision Strategy」と表 4・pp.17–19「Discussion」）。1986 の予稿は未照合（書誌だけ）。
- 鍵の文：
  - 「A total of 156 decision points were probed in this way. The major finding was that in less than 12% of the cases was there any evidence of simultaneous comparisons and relative evaluation of two or more options.」（要旨・PDF p.4）訳：こうして 156 の決定点を聞いた。主な所見は、二つ以上の選択肢を同時に比べ、相対的に評価した跡があったのが 12% に満たないことだった。
  - 「In over 80% of the cases, the strategy was for the FGCs to use their experience to directly identify the situation as typical of a standard prototype」（同）訳：80% を超える場合で、指揮官は経験を使って状況を標準の原型の典型だとじかに見分けていた。
  - 「we found virtually no instances of the standard laboratory paradigm for decision making: conscious and deliberate selection of one alternative from several.」（p.11）訳：実験室の標準の意思決定、つまり幾つかの選択肢から一つを意識して熟慮して選ぶことの例は、ほとんど見つからなかった。
  - 「In an analysis of 156 decision points, we found that in only 28 was more than one option even identified. In only 16 did the FGC report doing any relative evaluation」（p.17）訳：156 の決定点のうち、選択肢が二つ以上挙がったのは 28 だけで、比べたと言ったのは 16 だけだった。
- 要約：26 人の経験の長い消防の指揮官（経験の平均 23 年）に、型にはまらない、熟達の要った最近の出来事を一つずつ聞き、決定点ごとに、挙がった選択肢・選んだもの・理由を引き出した（32 の出来事、156 の決定点）。156 のうち 127 が「原型」の類で、指揮官は他の選択肢に気づかないまま行動していた。だから本人たちは「決定をしている」と感じていなかった（p.12）。過去の個別の事例を類推に使ったのは 3 例だけで、似た経験は記憶の中で混ざって「典型」になっていた。選択肢を比べたのは 10 例で（揚水所の事例を除く）、それも一つか少数の軸（かかる時間・危険）で比べ、属性を体系的に調べたものは無かった（pp.11–13）。ここから認知主導型意思決定（RPD）モデルを組んだ（p.18）。
- 条件として書かれていること：極端な時間の圧力の下で、経験と身の入れ方の大きい人の決定を見た調べ（p.18）。聞いた出来事は難しさで選んだ事例（p.17）。一方、揚水所の事例では決定のおよそ 59% が意識的な熟慮で、ほとんどが集団での相談だった。報告書は、熟慮は個人より集団の側面に当たるのかもしれないと書く（p.12）。どちらの面も落とさないこと。
- 批判・のちの改め：著者たちは 2010 年に、この研究を編集し直して後書きを付けた版を出している（Klein, Calderwood & Clinton-Cirocco 2010, *Journal of Cognitive Engineering and Decision Making* 4(3), 186–209. DOI 10.1518/155534310X12844000801203。Crossref と一致）。未照合（書誌だけ）。後書きで何を改めたかは読んでいない。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）p.12：指揮官は見覚えのある型に当てはめて、その決定点でほかの選択肢を考えずに行動に移る。「In our interviews, we probed this very carefully, and the FGCs were clear that they were not aware of other options. That is why they did not feel that they were making decisions.」訳：聞き取りで念入りに確かめたが、指揮官たちは、ほかの選択肢に気づいていなかったとはっきり言った。だから、彼らは決定をしていると感じていなかった。

### 意思決定の「再発明」と NDM の場面の八つの特徴（Orasanu & Connolly 1993）

- 書誌：Orasanu, J., & Connolly, T. (1993). The reinvention of decision making. In G. A. Klein, J. Orasanu, R. Calderwood, & C. E. Zsambok (Eds.), *Decision Making in Action: Models and Methods* (pp. 3–20). Norwood, NJ: Ablex.（ISBN 0-89391-794-X。本なので DOI は無い。題・編者・版元・頁は写しの目次と章の頭で確かめた）
- 読んだ写し：ShadowBox LLC のサイトに置かれた本全体の PDF（493 頁）https://www.shadowboxtraining.com/wp-content/uploads/2024/09/Klein-et-al-1993-Decision-Making-in-Action-Models-and-Methods.pdf 。ShadowBox の「Our Team」の頁に Gary Klein が Chief Scientist として載っており、編者の一人の会社の写し（関係者の写し）。版元 Ablex の許しの有無は確かめていない（奥付は「All rights reserved」）。
- 照合の状態：本文照合済（pp.3–20 の全体。編者の会社の写し）
- 鍵の文：
  - 「traditional decision research has invested most of its energy in only one part of decision making, which we shall refer to the decision event.」（p.5）訳：従来の意思決定の研究は、力のほとんどを意思決定の一部分だけに注いできた。それを決定の出来事と呼ぶ。
  - 「the decision maker (generally a single individual) surveys a known and fixed set of alternatives, weighs the likely consequences of choosing each, and makes a choice.」（p.5）訳：（たいてい一人の）決める人が、分かっていて決まった選択肢の集まりを見渡し、それぞれを選んだときに起こりそうな結果を量り、選ぶ。
  - 「In natural settings, making a decision is not an end in itself. Usually it is a means to achieving a broader goal.」（p.6）訳：自然な場面では、決めることそれ自体は目的ではない。たいてい、もっと広い目標を果たす手段である。
  - 「These eight characteristics fall short of providing a strict definition of NDM.」（p.10）訳：この八つの特徴は、NDM の厳密な定義には届かない。
- 要約：消防・神経痛の診断・会社の製品の発売という三つの場面から始め、従来の研究が「決定の出来事」に偏ってきたと言う。現場の決定は大きな作業に埋め込まれ、問題の定義・解の見当・行動・効果の評価の循環の中にある（p.6）。自然な場面の決定を難しくする八つの要因を挙げる：構造の悪い問題／不確かで動く環境／移る・はっきりしない・競合する目標／行動と返りの輪／時間の圧力／大きな賭け金／複数の担い手／組織の目標と規範（p.7）。八つがすべて最悪である場面はまれで、たいてい幾つかが重なる、と条件を付けている（p.7）。そして、上の文のとおり八つは定義ではなく、関心を向ける場面の型を示すためのものだと断っている（p.10）。熟達については、データの統合や不確かな確率の判断を求める課題では専門家の利がほとんど無く（機械的な式のほうが良い）、問題の組み立てや自分の分野の曖昧な手がかりの読み取りを求める課題では専門家が勝る、と課題の違いで二つの研究の結論の食い違いを説明している（p.11）。NDM の所見として、見立てが先・満足化・図式に導かれた推論・考えることと動くことが交互になる、を挙げる（pp.18–19）。
- 批判・のちの改め：同じ論の 2001 年の総括（下の Lipshitz ら 2001）は読めていない。

### 認知主導型意思決定（RPD）モデル（Klein 1993）

- 書誌：Klein, G. A. (1993). A recognition-primed decision (RPD) model of rapid decision making. In G. A. Klein, J. Orasanu, R. Calderwood, & C. E. Zsambok (Eds.), *Decision Making in Action: Models and Methods* (pp. 138–147). Norwood, NJ: Ablex.
- 読んだ写し：上と同じ ShadowBox LLC の写し（編者の会社）。
- 照合の状態：本文照合済（pp.138–147 の全体。編者の会社の写し）
- 鍵の文：
  - 「This model explains how people can make decisions without having to compare options. It fuses two processes—situation assessment and mental simulation」（p.138）訳：このモデルは、人が選択肢を比べずにどう決められるかを説明する。状況の見立てと心的シミュレーションの二つの過程を一つにする。
  - 「we assert that the decision is primed by the way the situation is recognized and not completely determined by that recognition.」（p.140）訳：決定は、状況がどう認識されるかによって呼び起こされる（primed）が、その認識だけで決まり切るのではない、と言う。
  - 「I am not proposing that there is a best decision strategy. Both recognitional and analytical approaches have their functions.」（p.146）訳：最善の決め方がある、と言っているのではない。認識的なやり方にも分析的なやり方にも、それぞれの働きがある。
- 要約：消防の指揮官は「選んでいる」「選択肢を考えている」とは言わず、経験から状況を見分け、典型的な反応を取り、時間があればそれを頭の中で動かして確かめていた（pp.139–140）。状況の見立てには四つの面がある：達成できる目標の種類が分かる、大事な手がかりが目立つ、予期ができる（予期が外れれば見立ての誤りの知らせになる）、典型的な行動が分かる（p.142）。モデルの特徴として、選択肢の優劣でなく見立てに重きを置く、最初に考える案がそこそこ良い、満足化（Simon 1955）、選択肢の直列の評価、心的シミュレーションによる評価、いつでも行動に移れること、を挙げる（pp.143–144）。表 6.1 は五つの調べでの RPD の割合（消防の指揮官 80%、熟達した指揮官 58%・新人 46%、山火事 51%、戦車の小隊長〔訓練 10 日目までの士官候補生〕42%、設計技術者 60%）。分類は、選択肢を少しでも比べた跡があれば「分析的」とする甘い基準で、符号付けの一致は 87〜94%（p.145）。
- 条件として書かれていること：認識的な決め方は、経験がある・時間の圧力が強い・状況が不安定なときに多い。分析的な決め方は、データが抽象的で数字や文字である・組み合わせが多い・利害が割れる・選んだ道を正当化する必要が強いときに多い（p.146）。認識的なやり方の危うさとして、最初の案を出す経験が足りない、心的シミュレーションで落とし穴を見つけられない、最適化が要る場面で最適化しない、を挙げ、敵の最悪の手を読む課題では認識的な過程が視野の狭まりと自己欺瞞を招きうると書く（p.146）。RPD は人がすでにしていることの記述なので、教えるべきものではなく、状況を見分ける訓練が要る、とも言う（p.146）。
- 批判・のちの改め：下の Kahneman & Klein 2009 が、どんな環境なら認識が当てになるかの条件を足した。

### 意思決定を「行為の論拠の実行」と定義し直す（Lipshitz 1993）

- 書誌：Lipshitz, R. (1993). Decision making as argument-driven action. In G. A. Klein, J. Orasanu, R. Calderwood, & C. E. Zsambok (Eds.), *Decision Making in Action: Models and Methods* (pp. 172–181). Norwood, NJ: Ablex.
- 読んだ写し：上と同じ ShadowBox LLC の写し（編者の会社）。候補の外だが、同じ本で「意思決定とは何か」の定義を正面から扱っていたので足した。
- 照合の状態：本文照合済（pp.172–181 の全体。編者の会社の写し）
- 鍵の文：
  - 「The decision to act is traditionally defined as choosing among alternative actions.」（p.172）訳：行為の決定は、伝統的に、選択肢となる行為の中から選ぶことと定義されてきた。
  - 「Consider the definition of a decision as the enactment of an action argument of the general form "Do 'A' because 'R'," where 'A' and 'R' denote an action and reasons for its implementation」（p.180）訳：決定を、「R だから A をせよ」という一般の形の行為の論拠を実行すること、と定義してみよう。A は行為、R はそれを行う理由を表す。
- 要約：現実の決定は、選択肢を選ばずになされることが多い、見立てが基本の仕組みである、など七つの命題を挙げ、前の五つは実証の支えが大きく、あとの二つ（不確かさの働き方・問題の枠付けの重要さ）は推測に近いと自分で分けている（pp.172–173）。選択による定義のままだと、RPD は「熟慮しない比較」だと言いくるめられてしまう、と指摘する（p.179）。そこで、帰結による選択（目的論的）・状況に合う行為を選ぶ照合（義務論的）・既に傾いている行為への異論を検討する再評価の三つを並べ、どれも「行為の論拠」の違いとして含められる定義を出す（pp.178–180）。Toulmin（1958）から借りたと書いている（p.180）。
- 批判・のちの改め：読めていない。

### 直観は認識である（Simon 1992）

- 書誌：Simon, H. A. (1992). What is an "explanation" of behavior? *Psychological Science* 3(3), 150–161. DOI 10.1111/j.1467-9280.1992.tb00017.x（Crossref と一致）
- 読んだ写し：Wayback の記録（元はカリフォルニア州立大学ロングビーチ校の授業の読み物の頁、home.csulb.edu/~cwallis/…。写しの日 2022-03-26）https://web.archive.org/web/20220326165500/https://home.csulb.edu/~cwallis/382/readings/482/simon%20What%20is.pdf 。誌名・巻号・頁の見える誌面の PDF。授業用の写しで、権利は未確認。今の頁は証明書の鎖の不備で自動では取れなかった。
- 照合の状態：本文照合済（p.155 の該当の段だけ。誌面の PDF の授業用の写し）。調べ 2 と重なるので一文に留めた。
- 鍵の文：「The situation has provided a cue; this cue has given the expert access to information stored in memory, and the information provides the answer. Intuition is nothing more and nothing less than recognition.」（p.155）訳：状況が手がかりを出し、その手がかりが専門家に記憶の中の情報への入口を与え、その情報が答えを出す。直観とは、認識以上でも以下でもない。
- 要約：同じ段で、私たちは友人を見分けられても、どの手がかりで見分けたかを意識できない、と続ける（p.155）。Kahneman & Klein 2009 はこの一文を、二人とも認める直観の定義として引いている（p.520）。

### 直観的な熟達の条件（Kahneman & Klein 2009）

- 書誌：Kahneman, D., & Klein, G. (2009). Conditions for intuitive expertise: A failure to disagree. *American Psychologist* 64(6), 515–526. DOI 10.1037/a0016755（Crossref と一致）
- 読んだ写し：リュブリャナ大学教育学部のサイトに置かれた誌面の PDF（12 頁・各頁に誌名と DOI）https://www.pef.uni-lj.si/wp-content/uploads/2026/05/Kahneman_Klein_2009_Conditions-for-Intuitive-Expertise_A-Failure-to-disagree_Am_Psi.pdf 。大学のサーバーの写しで、権利は未確認。
- 照合の状態：本文照合済（pp.515–516・p.520・pp.524–525。誌面の PDF の大学の写し）
- 鍵の文：
  - 「evaluating the likely quality of an intuitive judgment requires an assessment of the predictability of the environment in which the judgment is made and of the individual's opportunity to learn the regularities of that environment. Subjective experience is not a reliable indicator of judgment accuracy.」（要旨・p.515）訳：直観的な判断の質を見積もるには、判断がなされる環境の予測しやすさと、その人がその環境の規則性を学ぶ機会とを見なければならない。主観的な体験は、判断の正しさの当てになる指標ではない。
  - 「Skilled intuitions will only develop in an environment of sufficient regularity, which provides valid cues to the situation.」（p.520）訳：熟練した直観は、状況への妥当な手がかりを出す、十分に規則的な環境でしか育たない。
  - 「Two conditions must be satisfied for skilled intuition to develop: an environment of sufficiently high validity and adequate opportunity to practice the skill.」（p.520）訳：熟練した直観が育つには二つの条件が要る。十分に妥当性の高い環境と、その技を練習する十分な機会である。
  - 「We describe task environments as "high-validity" if there are stable relationships between objectively identifiable cues and subsequent events or between cues and the outcomes of possible actions.」（p.524）訳：客観的に見分けられる手がかりとその後の出来事のあいだ、または手がかりとありうる行為の結果のあいだに安定した関係がある課題の環境を、「妥当性が高い」と呼ぶ。
- 要約：NDM（Klein）とヒューリスティクスとバイアス（Kahneman）の二つの立場の者が、食い違うと思って始めたが、ほとんどの点で一致した、という報告（p.515）。Simon 1992 の「直観は認識」を共通の定義に置き、認識が熟練と言えるための二条件を出す（p.520）。妥当性は環境の因果と統計の構造のことで、不確かさが無いことではない（ポーカーや戦争は妥当性が高く、不確かさも大きい）。個別の株の値や長期の政治の予測は、ほぼ妥当性ゼロの環境（pp.520, 524）。学ぶ機会には、長い練習と、速くはっきりした返りが要る（p.524）。運よく当たった人は技の錯覚と過信に陥る。ある課題に熟達した専門家が、熟達していない隣の課題でも判断を求められる「熟達の分断（fractionation）」も過信の源（pp.524–525）。妥当性の低い場面では、弱い規則性からでも作れる算法が一貫性の利で人を上回ることがあるが、人の判断を置き換えることは強い抵抗と望ましくない副作用を招きやすい（p.525）。消防の指揮官の研究を、選択肢を一つしか出さず、de Groot の言う「漸進的深化」で確かめる過程として紹介している（p.516）。
- 批判・のちの改め：この論文そのものが、二つの立場の互いへの批判を突き合わせたもの。結びで、HB の側は誤りに偏り、直観の技を無視する心理学は視野が狭い、NDM の側は「バイアス」の語を嫌い、予測できる誤りを無視する専門職の判断の心理学は足りない、と両方の限界を認め、まだそれを越えられていないと書いている（p.525）。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）p.519：建物が崩れそうだという早い手がかりはありそうだが、ある株の値動きを当てる公開の情報はなさそうだ（あれば値段にもう入っている）。だから、建物の安定についての経験ある指揮官の直観は、株についての売り手の直観より信じる理由がある、と書く。p.523：「To a good approximation, predictions of the future value of individual stocks and long-term forecasts of political events are made in a zero-validity environment.」訳：よい近似で言えば、個々の株の先の値打ちの予測と、政治の出来事の長い先の予測は、妥当性がゼロの環境でなされている。同じ頁に、医療と消防はかなり妥当性の高い環境で行われる、とある。

### チェスの名人の経験と知覚（de Groot 1946／英訳 1965・1978）

- 書誌：de Groot, A. D. (1978). *Thought and Choice in Chess* (2nd ed.). The Hague: Mouton.（原著はオランダ語 1946、英訳初版 1965。書誌は写しの表紙と Kahneman & Klein 2009 の参照で見たもので、出版社の頁とは照らしていない）
- 読んだ写し：Internet Archive に個人が上げた 1978 年第 2 版の走査と OCR の文字（https://archive.org/details/adriaan_d._de_groot_-_thought_and_choice_in_chess_2nd_ed._1978 ）。上げた人と権利は未確認。2008 年の Amsterdam University Press の電子版は有料の販売だけ。
- 照合の状態：未照合（上げた人の分からない写しで読んだ。OCR の文字で読んだ。pp.305–306）
- 鍵の文（読んだ頁の控え。公開文には載せない）：「what a master perceives differs substantially from what a weaker player perceives! The master's 'experience' — thus, a reproductive factor — is operative in perception as well as in operational thinking proper.」（p.306）訳：名人が知覚するものは、弱い指し手が知覚するものとは大きく違う。名人の「経験」、つまり再生的な要因は、本来の操作的な思考だけでなく知覚の中でも働いている。
- 要約：名人であることの多くは、経験から呼び出せる典型的な指し方の型を持っていることで、名人は盤面を、弱い指し手とは文字どおり違うふうに「見る」（pp.305–306）。Kahneman & Klein 2009（p.516）は、de Groot の「漸進的深化」（候補手を深めながら確かめる進め方）を RPD の心的シミュレーションと重ねている（これは二次経由）。

## 読めなかったもの・載せられないもの

| 文献 | 試した経路 | 状態 |
|---|---|---|
| Lipshitz, R., Klein, G., Orasanu, J., & Salas, E. (2001). Taking stock of naturalistic decision making. *Journal of Behavioral Decision Making* 14(5), 331–352. DOI 10.1002/bdm.381（Crossref と一致） | find-source（Crossref・OpenAlex・Semantic Scholar・Europe PMC。Unpaywall と CORE は環境変数が無く飛ばした）／UCF の STARS の二つの記録（書誌だけで本文の写し無し）／ハイファ大学の研究者の頁 CRIS の三つの記録（ファイル無し）／sos-vo.org の頁（PDF 無し）／CiteSeerX（今は Wayback に送られ、元の置き場が分からない）／共著者 Orasanu が ResearchGate に上げた著者稿（頭に「6/16/00」の日付が見える。https://www.researchgate.net/profile/Judith-Orasanu/publication/321153404_Taking_Stock_of_Naturalistic_Decision_Making/links/5a111391a6fdccc2d7999fa5/Taking-Stock-of-Naturalistic-Decision-Making.pdf 。確認画面）／同じ URL の Wayback（記録無し） | 未照合（確認画面。ResearchGate の著者稿）。共著者が上げた著者稿なので、ブラウザで保存すれば本文照合済にできる見込み。保存名の案：`Lipshitz_2001_taking-stock_authorMS.pdf`（本体の `.cache/raw/decision-making/`）。確かめられること：NDM の十年の総括で、NDM の本質的な特徴と五つの貢献（RPD・不確かさへの対処・チームの意思決定・決定の誤り・方法論）と、残る課題 |
| Klein, Calderwood & Clinton-Cirocco (1986). *Proceedings of the Human Factors Society Annual Meeting* 30(6), 576–580. DOI 10.1177/154193128603000616 | Crossref で書誌だけ。同じ研究の 1988 の報告書を本文で読んだので、予稿は追っていない | 未照合（書誌だけ） |
| Klein, Calderwood & Clinton-Cirocco (2010). Rapid decision making on the fire ground: The original study plus a postscript. *JCEDM* 4(3), 186–209. DOI 10.1518/155534310X12844000801203 | Crossref で書誌だけ。find-source は時間切れで結果が出なかった | 未照合（書誌だけ） |
| de Groot (1946/1965/1978) *Thought and Choice in Chess* | Internet Archive の個人の写し（読んだ）／2008 年の Amsterdam University Press の電子版（有料の販売だけ）／de Gruyter の頁（前付けだけ）。有料のものは使わない | 未照合（上げた人の分からない写しで読んだ。pp.305–306）。公開文には載せない |
| Kahneman & Klein 2009 のほかの写し | チェコのカレル大学の授業の写し（ログインが要る）・Kahneman の Princeton の旧サイトの Wayback（この論文は無い）・Klein の旧サイト（macrocognition.com・gary-klein.com の Wayback に無い） | 本文はリュブリャナ大学の写しで読めたので、記録だけ |

- Klein (1993) と Orasanu & Connolly (1993) と Lipshitz (1993) を読んだ本の PDF は、編者 Gary Klein が Chief Scientist の会社（ShadowBox LLC）のサイトの写し。sources.md §5-8 の「著者本人や関係者」に当たると見て本文照合済にしたが、版元の許しは確かめていない。公開のリンクに張るかは、司令役か pjdhiro が決めてほしい。
