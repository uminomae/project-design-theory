# 推論とは

<p class="reader-summary__title">概要</p>

<p class="reader-lead"><span class="reader-lead__label">問い</span>演繹・帰納・仮説（アブダクション）・類推は、どういう関係に置かれてきたのでしょうか。それぞれは、どこで止まるのでしょうか。</p>

このページは、pjdhiro の問いに、Claude が原典を読んで答える形で書いています。考えること・推し量ることの働きを、一つずつ独立したページに分けて見ていく作業の一つです。始まりは、考える力について話していたときの、pjdhiro の次の言葉です。

<strong>pjdhiro の問い：</strong>思考とは、推論とは、のようなメタな頭脳力が整理されてない気がする。演繹、帰納、仮説の三つの推論力がある。それに包括されるのか、全く別なのか。

<div class="reader-lead"><span class="reader-lead__label">今の答え</span>
推論は、古くから、前提から必ず出る推論と、事例から広げる推論とに分けられてきました。パースは 1878 年に、広げる推論を帰納と仮説に分け、演繹と合わせて三つの形を並べました。類推は、この三つの分け方の中に、自分だけの席を持っていません。けれど、読んだ原典では、類推はどこにも入り込んでいます。アリストテレスは帰納と並ぶ別の形として、ヒュームは事実についてのすべての推論の土台として、ミルは帰納に届かない弱い形として、パースは帰納と仮説と演繹を組み合わせたものとして、類推を置きました。四つの形は区別して並べられてきましたが、どの論者も、一つの形を別の形の中に見つけています。止まる所は、形ごとに違います。
<ul class="reader-lead__list">
<li><b><a href="#rs-map">推論は、どう分けられてきたか</a></b>：必ず出る推論と、広げる推論。四つの形を、何から何へ推すかと、どこで止まるかで並べます。</li>
<li><b><a href="#rs-deduction">演繹は、必ず出るが、前提の外へは出ない</a></b>：アリストテレスの定義と、ミルの「論点先取ではないか」という問いです。</li>
<li><b><a href="#rs-induction">帰納は、未来が過去に似ることを、事例では示せない</a></b>：ヒュームの問いと、パースの「引く数を増やせば直っていく」という見方です。</li>
<li><b><a href="#rs-hypothesis">仮説は、性質を引くので、数えられない</a></b>：パースが仮説を帰納と見分けた所です。</li>
<li><b><a href="#rs-analogy">類推には、独立の席が無いように見える</a></b>：四人が類推をどこに置いたかを並べます。</li>
<li><b><a href="#rs-wrap">分けた形は、互いの中に見つかる</a></b>：問いへの答えと、ほかのページへのつながりです。</li>
</ul>
</div>

## 推論は、どう分けられてきたか

<!--OPEN-->

<a id="rs-map"></a>推論は、分かっていることから、まだ分かっていないことを引き出す働きです。古くからの大きな分け方は、前提が正しければ結論も必ず正しくなる推論と、前提の外へ広げるので結論が外れうる推論の二つです。

アリストテレスは『分析論前書』で、推論（シュロギスモス）を、いくつかのことが置かれたとき、置かれたこととは別の何かが、それらから必ず出てくる言論、と定義しました。同じ本の終わり近くでは、帰納と、「例」と呼ぶ推論を、これとは別の形として書いています。

パースは 1878 年の論文で、推論を、分析的な演繹と、総合的な推論とに分け、総合的な推論を帰納と仮説に分けました。1883 年の論文でも、確からしさの推論を、演繹と、知識を広げる推論とに分け、広げる推論を帰納と仮説に分けています。三つの形の豆の袋の例と、1908 年に三つを探究の三つの段階として並べ直したことは、「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-three)」の章「三つの推論」にあります。

下の表は、読んだ原典から、このページが四つの形を並べたものです。列の立て方は Claude によるもので、どの著者の分け方でもありません。

<div class="tablefit">

| 形 | 何から何へ推すか | 当てにしているもの | 止まる所 |
|---|---|---|---|
| 演繹 | 決まりと事例から、結果へ | 前提が正しいこと | 結論は前提に含まれていたものの外へ出ない、と問われてきた（ミル） |
| 帰納 | 事例と結果から、決まりへ | 見た事例が、見ていない事例に似ていること | 未来が過去に似ることは、事例からの議論では示せない（ヒューム） |
| 仮説（アブダクション） | 決まりと結果から、事例へ。目の前の結果を説明するものを推し量る | 性質がいくつも合うこと | 引くのは性質で、数え上げられない（パース 1883） |
| 類推 | 似ている一つから、似ている別の一つへ | 似ている所が、問いの性質とつながっていること | 似ている所・違う所・まだ調べていない所の比べで、強さが決まる（ミル） |

</div>

演繹・帰納・仮説の「何から何へ」は、パースの 1878 年の論文が、規則・事例・結果の三つの文の並べ替えで書いた形です。類推の行は、アリストテレスの「例」とミルの類推の書き方から置きました。

## 演繹は、必ず出るが、前提の外へは出ない

<!--OPEN-->

<a id="rs-deduction"></a>演繹の強みは、前提が正しければ、結論が必ず正しいことです。アリストテレスの定義の「必ず出てくる」が、この強みを言っています。

その強みが、そのまま限界にもなる、と問われてきました。ミルは『論理学体系』で、「人はみな死ぬ。ソクラテスは人である。だからソクラテスは死ぬ」という三段論法を例に、次の批判を紹介し、反論できないと認めています。人がみな死ぬと言えるのは、ソクラテスも死ぬとすでに分かっているからで、結論は前提に先に入っている。だから三段論法は、論点先取（証明すべきことを前提に置いてしまうこと）ではないか、という批判です。

ミルの答えは、三段論法を捨てることではありませんでした。ミルは、推論はどれも個別のことから個別のことへ進み、「人はみな死ぬ」のような一般の文は、すでにした推論の記録と、次の推論のための短い式だ、と置き直しました。演繹の芯に、事例から広げる推論を見つけたことになります。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『分析論前書』第 1 巻 第 1 章（Jenkinson 訳）：「A syllogism is discourse in which, certain things being stated, something other than what is stated follows of necessity from their being so.」
- ミル『論理学体系』第 2 巻 第 3 章 §2（第 8 版 p.140）：三段論法は論点先取だという批判について「This doctrine appears to me irrefragable」。
- 同 §4（p.146）：「All inference is from particulars to particulars: General propositions are merely registers of such inferences already made, and short formulae for making more」。

</details>

## 帰納は、未来が過去に似ることを、事例では示せない

<!--OPEN-->

<a id="rs-induction"></a>帰納は、いくつもの事例から決まりを引き出します。アリストテレスは、帰納はすべての事例を数え上げて進む、と書きました。けれど、ふつう事例は数え尽くせません。

ヒュームは『人間知性研究』で、経験からの推論はみな、未来が過去に似るという前提に立っている、と書きました。その前提を経験からの議論で示そうとすると、議論そのものが同じ前提に立ってしまいます。だから、どれほど規則正しく続いてきたことも、それだけでは、この先も続くことの証明にならない、とヒュームは見ます。

パースは 1883 年の論文で、帰納を、袋から無作為に引いて割合を推し量ることにたとえました。引く数が少ないうちは割合が外れうるが、引く数を増やせば、割合は正しい値に近づいていく、と書きます。帰納は一度で正しくはならないが、続けることで直っていく推論として置かれています。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『分析論前書』第 2 巻 第 23 章：「induction proceeds through an enumeration of all the cases」。
- ヒューム『人間知性研究』第 4 節 第 2 部（Open Court 版 1907, p.37）：経験からの議論は、過去と未来が似ることを証明できない。「since all these arguments are founded on the supposition of that resemblance」。
- パース「蓋然的推論の理論」（1883, p.143）：「In ampliative reasoning the ratio may be wrong, because the inference is based on but a limited number of instances; but on enlarging the sample the ratio will be changed till it becomes approximately correct.」

</details>

## 仮説は、性質を引くので、数えられない

<!--OPEN-->

<a id="rs-hypothesis"></a>仮説は、目の前の結果から、それを説明するものを推し量ります。パースは 1878 年の論文で、仮説は帰納とよく似ていて、二つを取り違えた論理学者もいる、と書き、仮説は「性質の帰納」と呼ばれてきた、と添えています。ある種類に属するものの性質がいくつも目の前のものに見つかるので、その種類の性質を全部持っているだろう、と推すからです。

1883 年の論文では、二つの違いを、何を引くかで書き分けました。帰納で引くのは、数えられるもの（袋の中の豆）です。仮説で引くのは性質で、性質は厳密には数え上げられません。帰納は引く数を増やせば直っていきますが、仮説が当てにする「いくつも合う」は、何個合えば十分かを数で言えない、とパースは見ています。

仮説が探究の中で何をするのか、どんな心の働きから生まれるのかは、「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-musement)」の章「遊びの中で、仮説が生まれる」にあります。

<details><summary>詳しく — 原文の鍵の文</summary>

- パース「演繹、帰納、仮説」（1878）：「The analogy of hypothesis with induction is so strong that some logicians have confounded them. Hypothesis has been called an induction of characters.」
- パース「蓋然的推論の理論」（1883, p.143）：「In induction, the instances drawn at random are numerable things; in hypothesis they are characters, which are not capable of strict enumeration」。

</details>

## 類推には、独立の席が無いように見える

<!--OPEN-->

<a id="rs-analogy"></a>三つの形の分け方には、類推だけの席がありません。それでも、読んだ四人は、それぞれの場所に類推を置いています。

アリストテレスは、帰納と別に「例」という推論を立てました。テーバイ人とフォキス人の隣国どうしの戦争が悪い結果になったことから、アテナイ人とテーバイ人の隣国どうしの戦争も悪いだろう、と推します。アリストテレスは、これを、部分から全体へでも、全体から部分へでもなく、同じものの下にある部分から部分への推論だ、と書きました。すべての事例から証明する帰納と違い、似た一つの事例から、当の事例へ結論を当てます。

ヒュームは、事実についての推論はみな、一種の類推に立っている、と書きました。似た原因からは同じ結果が出る、と期待することです。原因がまったく似ていれば類推は完全で、似かたが落ちるほど推論の力も落ちる、と見ます。ヒューム自身は帰納の語を使っていませんが、経験から推す推論の土台に、類推を置いたことになります。

ミルは、類推ほど緩く使われる語は無い、と断ったうえで、類推を、帰納に似ているが完全な帰納には届かない議論として置きました。二つのものが一つかいくつかの点で似ていて、一方について言えることを、他方についても言う、という形です。強さは、確かめた似ている所と違う所、まだ調べていない所の広さの比べで決まります。ミルは、類推は研究の道しるべにすぎないとし、それでも、どれほど薄い類推も、次に試す実験や観察を思いつかせる点で大きな値打ちを持つ、と書いています。ミルはまた、類推の語のもとの意味は、数学者が使った「関係の類似」だった、と書いています。もの同士が似ているのでなく、関係の置かれ方が似ていることです。

パースは 1883 年の論文で、類推を、帰納と仮説のあとに演繹が続くもの、と分けました。地球・火星・木星・土星が自転しているので、ほかの惑星も自転しているだろう、と推す例で、手元の四つから、大きな惑星という種類のものはみな自転すると推し（帰納）、残りの惑星はその種類の性質をいくつも持つので同じ種類に入ると推し（仮説）、だから残りも自転すると引く（演繹）、という組み立てです。

<strong>pjdhiro の見方：</strong>私の個性は類推力、構造の類似を見抜く力など。

類推に独立の席が無いのは、類推が、どの形にも入り込んでいるからかもしれません。アリストテレスでは帰納の隣に、ヒュームでは経験から推す推論の下に、パースでは三つの形の組み合わせとして現れます。三つの形のどれにも収まりきらず、どれからも切り離せない働きとして、このページは類推を置いておきます（この並べ方は、四人の書き方から Claude がしたものです）。ミルの「関係の類似」は、pjdhiro の言う構造の類似に近いのかもしれません。離れたものの構造を重ねる働きが、心理学や認知科学でどう研究されてきたかは、独立ページ「類推と、構造の類似を見抜く力」（工事中）で見ます。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『分析論前書』第 2 巻 第 24 章：例は「reasoning from part to part, when both particulars are subordinate to the same term, and one of them is known」。帰納と違い、すべての事例から証明せず、結論を当の事例に当てる。
- ヒューム『人間知性研究』第 9 節（Open Court 版 1907, p.108）：「All our reasonings concerning matter of fact are founded on a species of Analogy, which leads us to expect from any cause the same events, which we have observed to result from similar causes.」
- ミル『論理学体系』第 3 巻 第 20 章 §1（p.393）：類推は「some kind of argument supposed to be of an inductive nature, but not amounting to a complete induction」。もとの意味は「Resemblance of Relations」。
- 同 §3（p.396）：研究者は類推を「a mere guide-post, pointing out the direction in which more rigorous investigations should be prosecuted」とする。
- パース「蓋然的推論の理論」（1883, p.160）：「We have evidently here an induction and an hypothesis followed by a deduction」。事例を足していくと、類推は知識を広げる性格を失い、完全帰納という演繹になる、とも書く。

</details>

## 分けた形は、互いの中に見つかる

<!--OPEN-->

<a id="rs-wrap"></a>冒頭の問いは、推論が三つの形に包括されるのか、まったく別のものがあるのか、でした。読んだ原典からは、どちらの読みも立ちます。類推は三つの形の外に置かれることも、三つの形の組み合わせとして中に置かれることもありました。

並べてみると、四人に共通するのは、形を区別しながら、一つの形の芯に別の形を見つけていることです。ミルは演繹の芯に個別から個別への推論を、ヒュームは経験から推す推論の芯に類推を、パースは仮説の中に性質の帰納を、類推の中に三つの形を見つけました。推論の形は、分けて名前を付けられてきましたが、互いから切り離されて働いてはいない、と読めます（Claude の読み）。

止まる所も、形ごとに違います。演繹は前提の外へ出ず、帰納は未来が過去に似ることを示せず、仮説は合う性質を数え上げられず、類推は似ている所の比べで強さが揺れます。どの形も、それだけでは知識を確かなものにしきれません。

このページは、考える力を一つずつ分けて見ていく独立ページの一つです。「考える」という語が何を指してきたかは「思考とは」（工事中）、頭の能力がどう分けられ、測られてきたかは「頭脳の能力は、どう分けられてきたか」（工事中）、類推の仕組みは「類推と、構造の類似を見抜く力」（工事中）で見ます。新しい考えを生み、確かめ、よくしていく力の全体は「[創造的思考とは](creative-thinking.html)」にあります。

<!--PART:巻末|原典と、このページの作り方-->

## 原典と、読む順

<a id="rs-sources"></a>このページで読んだ原典は、どれも無料で読めます。古い順に並べます。

- アリストテレス『分析論前書』：Jenkinson の英訳を、[The Internet Classics Archive（MIT）](http://classics.mit.edu/Aristotle/prior.html)で読めます。推論の定義は第 1 巻 第 1 章、帰納は第 2 巻 第 23 章、例は第 24 章です。
- ヒューム『人間知性研究』（1748）：Open Court 版（1907）の Cornell 大学図書館の走査を [Internet Archive](https://archive.org/details/cu31924014603967) で読めます。帰納の問いは第 4 節 第 2 部、類推は第 9 節「動物の理性について」です。
- ミル『論理学体系』（1843）：第 8 版（New York, 1874）の米国議会図書館の走査を [Internet Archive](https://archive.org/details/systemoflogicrat01mill) で読めます。三段論法の問いは第 2 巻 第 3 章、類推は第 3 巻 第 20 章「類推について」です。
- パース「演繹、帰納、仮説」（1878）：*Popular Science Monthly* 第 13 巻を [Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_13/August_1878/Illustrations_of_the_Logic_of_Science_VI) で読めます。
- パース「蓋然的推論の理論」（1883）：『Studies in Logic by Members of the Johns Hopkins University』pp.126–181 を、Toronto 大学の走査で [Internet Archive](https://archive.org/details/studiesinlogic00peiruoft) から読めます。類推は pp.158–160 です。

<details><summary>出典</summary>

出典：Aristotle, *Prior Analytics*, trans. A. J. Jenkinson（[The Internet Classics Archive・全文](http://classics.mit.edu/Aristotle/prior.mb.txt)で本文照合済（訳）。I.1・II.23・II.24）。Hume, D. (1748) *An Enquiry Concerning Human Understanding*（Chicago: Open Court, 1907。[Internet Archive `cu31924014603967`](https://archive.org/details/cu31924014603967)・Cornell 大学図書館の走査で本文照合済。§IV Part II p.37・§IX p.108）。Mill, J. S. (1843) *A System of Logic, Ratiocinative and Inductive*（8th ed., New York: Harper & Brothers, 1874。[Internet Archive `systemoflogicrat01mill`](https://archive.org/details/systemoflogicrat01mill)・米国議会図書館の走査で本文照合済。Book II ch.III pp.140–146・Book III ch.XX pp.393–397）。Peirce, C. S. (1878) "Deduction, Induction, and Hypothesis", *Popular Science Monthly* 13, pp.470–482（[Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_13/August_1878/Illustrations_of_the_Logic_of_Science_VI) で本文照合済）。Peirce, C. S. (1883) "A Theory of Probable Inference", in *Studies in Logic by Members of the Johns Hopkins University*, Boston: Little, Brown, pp.126–181（[Internet Archive `studiesinlogic00peiruoft`](https://archive.org/details/studiesinlogic00peiruoft)・Toronto 大学の走査で本文照合済。pp.143・158–160）。

</details>

## このページの作り方

<a id="rs-method"></a>このページは、pjdhiro の問いに、Claude が原典を読んで書いたものです。原典は、上の五つを、それぞれの走査や全文の写しで、引いた箇所の前後の節まで読みました。英文の訳は、どれも Claude です。表の列の立て方と、四つの形が互いの中に見つかるという読みは、Claude がしたものです。pjdhiro の言葉は、考える力の整理について Claude と話したときのものです。
