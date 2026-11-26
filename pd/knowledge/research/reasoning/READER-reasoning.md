# 推論とは

<p class="reader-summary__title">概要</p>

<p class="reader-lead"><span class="reader-lead__label">問い</span>推論は、いくつの種類に数えられてきたのでしょうか。その中で、演繹・帰納・仮説（アブダクション）・類推は、どういう関係に置かれ、それぞれどこで止まるのでしょうか。</p>

このページの問いは、考える力について話していたときの、pjdhiro の次の言葉から立ちました。答えは、Claude が原典を読んで書いています。

<strong>pjdhiro の問い：</strong>思考とは、推論とは、のようなメタな頭脳力が整理されてない気がする。演繹、帰納、仮説の三つの推論力がある。それに包括されるのか、全く別なのか。

<div class="reader-lead"><span class="reader-lead__label">今の答え</span>
推論の種類の数は、論者によって、二つにも三つにもなり、分け方を二段に重ねる論者もいました。アリストテレスはシュロギスモス（前提から必ず出る推論。三段論法とも訳されます）と帰納の二つを立て、似た事例から推す「例」を、弁論での帰納と呼びました。カントは推理を、まず直接の推理と間接の推理に分け、間接の推理を理性の推理と判断力の推理に、判断力の推理を帰納と類推に分けました。パースは演繹・帰納・仮説の三つを並べ、類推をその三つの組み合わせとして読み解きました。いまの哲学の事典には、哲学者はふつう論証を演繹と帰納の二つに分ける、と書く項目と（二つしか無いとする見方への批判も紹介しています）、アブダクションを加えた三つがふつうだ、と書く項目があります。数が分かれるのは、何を単位に数えるかが違うからのように見えます。このページは、問いに出てくる三つの形に、数え方で席の揺れる類推を足した四つを並べます。読んだ原典の論者は、どれも一つの形を別の形の中に見つけています。止まる所（その形だけでは確かにできない所）も形ごとに違い、演繹は前提の外へ出ず、帰納は未来が過去に似ることを事例で示せず、仮説は合う性質を厳密には数え上げられず、類推は似ている所の比べで強さが揺れます。
<ul class="reader-lead__list">
<li><b><a href="#rs-count">推論は、いくつに数えられてきたか</a></b>：二つ・三つの数え方と二段の分け方を、誰が、何を単位に数えたかで並べます。</li>
<li><b><a href="#rs-map">四つの形を、何から何へ推すかで並べる</a></b>：このページが並べる四つの形を、何から何へ推すかと、どこで止まるかで見ます。</li>
<li><b><a href="#rs-deduction">演繹は、必ず出るが、前提の外へは出ない</a></b>：アリストテレスの定義と、ミルの「論点先取ではないか」という問いです。</li>
<li><b><a href="#rs-induction">帰納は、未来が過去に似ることを、事例では示せない</a></b>：ヒュームの問いと、パースの「引く数を増やせば直っていく」という見方です。</li>
<li><b><a href="#rs-hypothesis">仮説は、性質を引くので、厳密には数えられない</a></b>：パースが仮説を帰納と見分けた所です。</li>
<li><b><a href="#rs-analogy">類推の席は、数え方で変わる</a></b>：五人が類推をどこに置いたかを並べます。</li>
<li><b><a href="#rs-wrap">分けた形は、互いの中に見つかる</a></b>：問いへの答えと、ほかのページへのつながりです。</li>
</ul>
</div>

## 推論は、いくつに数えられてきたか

<!--OPEN-->

<a id="rs-count"></a>このページでは、分かっていることから、まだ分かっていないことを引き出す働きを、推論と呼びます。その種類をいくつに数えるかは、時代と論者で違ってきました。下の表は、読んだ原典と事典の項目から、数え方を並べたものです。「何で分けたか」の列の言葉は、それぞれの原典の書き方から、このページがまとめたものです。

<div class="tablefit">

| 誰が・どこで | 数 | 何で分けたか | 類推（似たものから推すこと）の置き場 |
|---|---|---|---|
| アリストテレス『トピカ』『分析論前書』『弁論術』 | 二つ：シュロギスモス（三段論法）と帰納 | 置いたことから必ず出るか、個別から一般へ進むか | 「例」は、弁論での帰納 |
| カント『論理学』（1800） | 二段の二分：直接の推理と間接の推理。間接の推理は理性の推理と判断力の推理。判断力の推理は帰納と類推 | 間に立つ判断が要るか。結論に必然を与えるか | 帰納と並ぶ、判断力の推理の一つ |
| ミル『論理学体系』（1843） | 二つ：推理（三段論法）と帰納。本の題も「推理と帰納の論理学の体系」 | — | ふつうの使い方では、完全な帰納に届かない議論。数学者のもとの意味（関係の類似）なら、完全な帰納にもなりうる |
| パース（1878・1883） | 三つ：演繹・帰納・仮説 | 演繹か、知識を広げる推論か。広げるなら、引くのが数えられるものか、性質か | 帰納と仮説のあとに演繹が続く、組み合わせ |
| 『インターネット哲学百科事典』の項目「演繹的な論証と帰納的な論証」 | 二つ：演繹と帰納（哲学者がふつう分けるものとして。二つに収まらない論証がある、という批判も紹介） | 前提が結論を必ず支えると言うか、確からしくすると言うだけか | — |
| 『スタンフォード哲学百科事典』の項目「アブダクション」（2011・2025 改訂） | 三つ：演繹・帰納・アブダクション | 帰納とアブダクションはどちらも知識を広げ、説明の良さを頼りにするかで分かれる | — |
| 心理測定の CHC の整理（マグルー 2009） | 流動性知能（Gf）の下に、狭い能力を五つ（一般的な系列推論・帰納・量的推論・ピアジェ的推論・推論の速さ） | 試験で測れて、別の因子として出るか | 名の付いた能力は無い |

</div>

アリストテレスは『トピカ』で、問答の議論には帰納とシュロギスモスの二つの種類がある、と書きました。『分析論前書』の終わり近くでは、確信はどれもシュロギスモスか帰納から来る、と書いたうえで、帰納・例・還元・反論・エンテューメーマ（ありそうなことやしるしから推す推論）を、続けて並べています。『弁論術』では、例を弁論での帰納、エンテューメーマを弁論でのシュロギスモスと呼び、証明で説得する人は、この二つのどちらかを使っていて、ほかの道は無い、と書きました。

カントの『論理学』（弟子のイェッシェが編んだ本）は、推理をまず、間に立つ判断の要らない直接の推理と、要る推理とに分けます。間に立つ判断の要る推理は、理性の推理（三段論法）と、判断力の推理の二つです。判断力の推理には、多くのものから同じ種類のすべてへ推す帰納と、二つのものが多くの点で合うことから残りの点でも合うと推す類推の二つがある、と書きました。帰納と類推は結論に必然を与えないので、理性の推理でなく「論理的な推定」だ、とカントは見ます。

パースは 1878 年の論文で、推論を、分析的な演繹と、総合的な推論とに分け、総合的な推論を帰納と仮説に分けました。1883 年の論文でも、確からしさの推論を、演繹と、知識を広げる推論とに分け、広げる推論を帰納と仮説に分けています。三つの形の豆の袋の例と、1908 年に三つを探究の三つの段階として並べ直したことは、「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-three)」の章「三つの推論」にあります。

いまの数え方も一つではありません。『インターネット哲学百科事典』の項目は、演繹と帰納の二つの区別が、多くの入門の教科書で当たり前のように示されている、と書き、二つしかないとする見方には批判もあることを紹介しています。『スタンフォード哲学百科事典』の項目「アブダクション」は、アブダクションはふつう、演繹・帰納と並ぶ三つの主な推論の一つと考えられている、と書きます。心理学で頭の能力を測る研究の整理（CHC）は、新しい問題を解く力（流動性知能）の下に、帰納や一般的な系列推論など、測れる推論の能力を五つ並べています。そこに、仮説を思いつく力や類推の名の付いた能力はありません。詳しくは「[頭脳の能力は、どう分けられてきたか](cognitive-abilities.html#ca-chc)」にあります。

並べてみると、数が分かれるのは、何を単位に数えるかが違うからのように見えます（このページの読み）。結論が必ず出るかで切ると、二つになります。広げる推論を、何を引くかでさらに切ると、パースの三つになります。間に立つ判断が要るかと、必然を与えるかで切ると、カントの形になります。試験で別の因子として出るかで切ると、心理測定の狭い能力になります。類推は、どの単位で数えるかによって、帰納の一種にも、独立の一つにも、三つの組み合わせにもなってきました。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『トピカ』第 1 巻 第 12 章（Pickard-Cambridge 訳）：「we must distinguish how many species there are of dialectical arguments. There is on the one hand Induction, on the other Reasoning.」
- アリストテレス『分析論前書』第 2 巻 第 23 章（Jenkinson 訳）：「For every belief comes either through syllogism or from induction.」第 25 章は還元（reduction）、第 26 章は反論、第 27 章はエンテューメーマ。
- アリストテレス『弁論術』第 1 巻 第 2 章（Rhys Roberts 訳）：「I call the enthymeme a rhetorical syllogism, and the example a rhetorical induction. Every one who effects persuasion through proof does in fact use either enthymemes or examples: there is no other way.」
- カント『論理学』（イェッシェ編、1800。アカデミー版 第 9 巻）§42（p.114）：「Alle Schlüsse sind entweder unmittelbare oder mittelbare.」§43：「alle mittelbaren Schlüsse hingegen sind entweder Vernunftschlüsse oder Schlüsse der Urtheilskraft.」§84（p.132）の見出し：「Induction und Analogie - die beiden Schlußarten der Urtheilskraft.」注 2（p.133）：「Induction und Analogie sind daher keine Vernunftschlüsse, sondern nur logische Präsumtionen oder auch empirische Schlüsse」。
- 『インターネット哲学百科事典』「Deductive and Inductive Arguments」（Timothy Shanahan）：二つの区別は「usually presented as straightforward, such as in many introductory philosophy textbooks」。また、二つしか無いとする見方を、ゴヴィア（1987）が「the positivist theory of argument」と呼んだ、と紹介する（ゴヴィアは、この項目の紹介による）。
- 『スタンフォード哲学百科事典』「Abduction」（Igor Douven、2011 初出・2025 改訂）：「Abduction is normally thought of as being one of three major types of inference, the other two being deduction and induction.」帰納とアブダクションは「both are ampliative」で、アブダクションには説明への訴えがある。

</details>

## 四つの形を、何から何へ推すかで並べる

<!--OPEN-->

<a id="rs-map"></a>このページが表に並べる四つは、カントの分け方とも違います。問いに出てくる演繹・帰納・仮説の三つに、数え方によって席の揺れる類推を足したものです。カントの直接の推理（判断の形だけを変える推理）や、アリストテレスが例と並べて書いた還元は、行にしていません。表の列の立て方も、どの著者の分け方でもなく、このページがしたものです。

<div class="tablefit">

| 形 | 何から何へ推すか | 当てにしているもの | 止まる所 |
|---|---|---|---|
| 演繹 | 決まりと事例から、結果へ | 前提が正しいこと | 結論は前提に含まれていたものの外へ出ない、と問われてきた（ミル） |
| 帰納 | 事例と結果から、決まりへ | 見た事例が、見ていない事例に似ていること | 未来が過去に似ることは、事例からの議論では示せない（ヒューム） |
| 仮説（アブダクション） | 決まりと結果から、事例へ。目の前の結果を説明するものを推し量る | 性質がいくつも合うこと | 引くのは性質で、厳密には数え上げられず、ほかのやり方で見積もる（パース 1883） |
| 類推 | 似ている一つから、似ている別の一つへ | 似ている所が、結論で言いたい性質とつながっていること | 似ている所・違う所・まだ調べていない所の比べで、強さが決まる（ミル） |

</div>

演繹・帰納・仮説の「何から何へ」は、パースの 1878 年の論文が、規則（このページの表の「決まり」）・事例・結果の三つの文の並べ替えで書いた形です。類推の行は、アリストテレスの「例」とミルの類推の書き方から置きました。

## 演繹は、必ず出るが、前提の外へは出ない

<!--OPEN-->

<a id="rs-deduction"></a>演繹の強みは、前提が正しければ、結論が必ず正しいことです。アリストテレスの定義の「必ず出てくる」が、この強みを言っています。

その強みが、そのまま限界にもなる、と問われてきました。ミルは『論理学体系』で、「人はみな死ぬ。ソクラテスは人である。だからソクラテスは死ぬ」という三段論法を例に、次の批判を紹介し、反論できないと認めています。人がみな死ぬと言えるのは、ソクラテスも死ぬとすでに分かっているからで、結論は前提に先に入っている。だから三段論法は、論点先取（証明すべきことを前提に置いてしまうこと）ではないか、という批判です。

ミルの答えは、三段論法を捨てることではありませんでした。ミルは、推論はどれも個別のことから個別のことへ進み、「人はみな死ぬ」のような一般の文は、すでにした推論の記録と、次の推論のための短い式だ、と置き直しました。演繹の芯に、事例から広げる推論を見つけた、と読めます。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『分析論前書』第 1 巻 第 1 章（Jenkinson 訳）：「A syllogism is discourse in which, certain things being stated, something other than what is stated follows of necessity from their being so.」
- ミル『論理学体系』第 2 巻 第 3 章 §2（第 8 版 p.140）：三段論法は論点先取だという批判について「This doctrine appears to me irrefragable」。
- 同 §4（p.146）：「All inference is from particulars to particulars: General propositions are merely registers of such inferences already made, and short formulae for making more」。

</details>

## 帰納は、未来が過去に似ることを、事例では示せない

<!--OPEN-->

<a id="rs-induction"></a>帰納は、いくつもの事例から決まりを引き出します。アリストテレスは『トピカ』で、帰納を、個別のことから一般のことへ進むことと書きました。『分析論前書』で帰納をシュロギスモスの形に組むときは、すべての事例を数え上げて進む、とも書いています。けれど、ふつう事例は数え尽くせません。

ヒュームは『人間知性研究』で、経験からの推論はみな、未来が過去に似るという前提に立っている、と書きました。その前提を経験からの議論で示そうとすると、議論そのものが同じ前提に立ってしまいます。だから、どれほど規則正しく続いてきたことも、それだけでは、この先も続くことの証明にならない、とヒュームは見ます。

パースは 1883 年の論文で、知識を広げる推論（帰納と仮説）を、無作為に引いた見本から割合を推し量ることとして書きました。引く数が少ないうちは割合が外れうるが、引く数を増やせば、割合は正しい値に近づいていく、と書きます。帰納は、一度で正しくはならないが、引き続けることで直っていく推論として置かれています。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『トピカ』第 1 巻 第 12 章：帰納は「a passage from individuals to universals」。『分析論前書』第 2 巻 第 23 章：帰納から組むシュロギスモス（「the syllogism which springs out of induction」）では「induction proceeds through an enumeration of all the cases」。
- ヒューム『人間知性研究』第 4 節 第 2 部（Open Court 版 1907, p.37）：経験からの議論は、過去と未来が似ることを証明できない。「since all these arguments are founded on the supposition of that resemblance」。
- パース「蓋然的推論の理論」（1883, p.143）：「In ampliative reasoning the ratio may be wrong, because the inference is based on but a limited number of instances; but on enlarging the sample the ratio will be changed till it becomes approximately correct.」

</details>

## 仮説は、性質を引くので、厳密には数えられない

<!--OPEN-->

<a id="rs-hypothesis"></a>仮説は、目の前の結果から、それを説明するものを推し量ります。パースは 1878 年の論文で、仮説は帰納とよく似ていて、二つを取り違えた論理学者もいる、と書き、仮説は「性質の帰納」と呼ばれてきた、と添えています。ある種類に属するものの性質がいくつも目の前のものに見つかるので、その種類の性質を全部持っているだろう、と推すからです。

1883 年の論文では、二つの違いを、何を引くかで書き分けました。帰納で無作為に引くのは、数えられるものです。仮説で引くのは性質で、性質は厳密には数え上げられず、ほかのやり方で見積もるしかない、とパースは書きました。

仮説が探究の中で何をするのか、どんな心の働きから生まれるのかは、「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-musement)」の章「遊びの中で、仮説が生まれる」にあります。

<details><summary>詳しく — 原文の鍵の文</summary>

- パース「演繹、帰納、仮説」（1878）：「The analogy of hypothesis with induction is so strong that some logicians have confounded them. Hypothesis has been called an induction of characters.」
- パース「蓋然的推論の理論」（1883, p.143）：「In induction, the instances drawn at random are numerable things; in hypothesis they are characters, which are not capable of strict enumeration, but have to be otherwise estimated」。

</details>

## 類推の席は、数え方で変わる

<!--OPEN-->

<a id="rs-analogy"></a>パースの三つの形の分け方には、類推だけの席がありません。けれど、カントは、類推に帰納と並ぶ席を与えていました。読んだ五人は、それぞれの場所に類推を置いています。

アリストテレスは『分析論前書』で、帰納と並べて「例」という推論を書きました。テーバイ人とフォキス人の隣国どうしの戦争が悪い結果になったことから、隣国と戦うのは悪い、と示し、それをアテナイ人とテーバイ人の戦争に当てます。アリストテレスは、これを、部分から全体へでも、全体から部分へでもなく、同じものの下にある部分から部分への推論だ、と書きました。すべての事例から証明する帰納と違い、似た事例から、当の事例へ結論を当てます。『弁論術』では、この例を、弁論での帰納と呼んでいます。

ヒュームは、事実についての推論はみな、一種の類推に立っている、と書きました。似た原因からは同じ結果が出る、と期待することです。原因がまったく似ていれば類推は完全で、似かたが落ちるほど推論の力も落ちる、と見ます。『人間知性研究』には帰納の語は出てきませんが、経験から推す推論の土台に、類推を置いたことになります。

カントは、類推を、帰納と並ぶ判断力の推理の一つとしました。帰納は、同じ種類の多くのものに当てはまることから、残りのものにも当てはまると推します。類推は、同じ種類の二つのものが多くの点で合うことから、一方で知っている残りの点も、もう一方で合うと推します。カントは二つの違いを、帰納は「多くの中の一つ、だからすべてに」、類推は「一つの中の多く、だから残りも」と書き分けました。どちらも結論に必然を与えないので、経験の知識を広げるのに欠かせないが、用心して使うべきだ、とも書いています。

ミルは、類推の語は、ふつう、帰納に似ているが完全な帰納には届かない議論の名として取られている、と書き、これほど緩く、いろいろな意味で使われる語は無い、と断りました。ウェイトリーが、数学者が使ったもとの意味に従って、類推を「関係の類似」と定めたことも紹介しています。もの同士が似ているのでなく、関係の置かれ方が似ていることです。この意味の類推は、似ている所が肝心な所だと示せれば、完全な帰納にもなりうる、とミルは書きます。そのうえでミルが扱うのは、ふつうの使い方の、完全な帰納に届かない、どんな種類の似かたからの議論です。二つのものが一つかいくつかの点で似ていて、一方について言えることを、他方についても言う、という形です。強さは、確かめた似ている所と違う所、まだ調べていない所の広さの比べで決まります。完全な帰納が得られるときには、研究者は類推を、もっと厳しい調べの向きを示す道しるべとしか見ない、とミルは書きます。それでも、どれほど薄い類推も、次に試す実験や観察を思いつかせる点で、この上ない値打ちを持ちうる、と書いています。

パースは 1883 年の論文で、類推では、引く集まりが小さく、同じ事例を二度引かない、と書き、その推し方を、帰納と仮説のあとに演繹が続く組み立てとして読み解きました。地球・火星・木星・土星が自転しているので、ほかの惑星も自転しているだろう、と推す例で、手元の四つから、大きな惑星という種類のものはみな自転すると推し（帰納）、残りの惑星はその種類の性質をいくつも持つので同じ種類に入ると推し（仮説）、だから残りも自転すると引く（演繹）、という組み立てです。

<strong>pjdhiro の見方：</strong>私の個性は類推力、構造の類似を見抜く力など。

三つの形の分け方で類推に独立の席が無いのは、類推が、どの形にも入り込んでいるからかもしれません。アリストテレスでは帰納の隣か帰納の一つとして、カントでは帰納と並ぶ一つとして、ヒュームでは経験から推す推論の下に、パースでは三つの形の組み合わせとして現れます。三つの形のどれにも収まりきらず、どれからも切り離せない働きとして、このページは類推を置いておきます（このページの読み）。ミルが紹介した「関係の類似」は、pjdhiro の言う構造の類似に近いのかもしれません。離れたものの構造を重ねる働きが、心理学や認知科学でどう研究されてきたかは、独立ページ「[類推と、構造の類似を見抜く力](analogy.html)」で見ます。

<details><summary>詳しく — 原文の鍵の文</summary>

- アリストテレス『分析論前書』第 2 巻 第 24 章：例は「reasoning from part to part, when both particulars are subordinate to the same term, and one of them is known」。帰納と違い、すべての事例から証明せず、結論を当の事例に当てる。
- ヒューム『人間知性研究』第 9 節（Open Court 版 1907, p.108）：「All our reasonings concerning matter of fact are founded on a species of Analogy, which leads us to expect from any cause the same events, which we have observed to result from similar causes.」
- カント『論理学』§84 注 1（アカデミー版 第 9 巻 p.133）：帰納は「Eines in Vielen, also in Allen」、類推は「Vieles in Einem (was auch in Andern ist), also auch das Übrige in demselben」。注 3：二つは経験の知識を広げるのに「nützlich und unentbehrlich」だが、経験の確かさしか与えないので「mit Behutsamkeit und Vorsicht」使う。
- ミル『論理学体系』第 3 巻 第 20 章 §1（p.393）：類推の語は、ふつう「some kind of argument supposed to be of an inductive nature, but not amounting to a complete induction」と取られている。ウェイトリーは、数学者のもとの意味に従って「Resemblance of Relations」と定めた。この意味の類推は「it may amount to nothing, or it may be a perfect and conclusive induction」。§2（pp.393–394）：ふつうは、完全な帰納に届かない、どんな種類の似かたからの議論にも、類推の名を広げる。
- 同 §3（pp.396–397）：完全な帰納が得られるときには、研究者は類推を「a mere guide-post, pointing out the direction in which more rigorous investigations should be prosecuted」とする。どれほど薄い類推も、実験や観察を思いつかせる点で「of the utmost value」でありうる。
- パース「蓋然的推論の理論」（1883, pp.158–160）：「reasoning from analogy」では「the class sampled is small, and no instance is taken twice」。類推の式について「We have evidently here an induction and an hypothesis followed by a deduction」。事例を足していくと、類推は知識を広げる性格を失い、完全帰納という演繹になる、とも書く。

</details>

## 分けた形は、互いの中に見つかる

<!--OPEN-->

<a id="rs-wrap"></a>冒頭の問いは、推論はいくつに数えられてきたか、そして推論が三つの形に包括されるのか、まったく別のものがあるのか、でした。数は、何を単位に数えるかで、二つにも三つにもなり、二段に重ねて分ける論者もいました。三つの形に包括されるかにも、どちらの読みも立ちます。類推は、帰納の一種とされることも、帰納と並ぶ一つとされることも、三つの形の組み合わせとして中に置かれることもありました。

並べてみると、読んだ論者に共通するのは、形を区別しながら、一つの形の芯に別の形を見つけていることです。アリストテレスは例を帰納の中に、ミルは演繹の芯に個別から個別への推論を、ヒュームは経験から推す推論の芯に類推を見つけました。パースは、仮説が性質の帰納と呼ばれてきたことを紹介し、類推の中に三つの形を見つけました。推論の形は、分けて名前を付けられてきましたが、互いから切り離されて働いてはいない、と読めます（このページの読み）。

止まる所も、形ごとに違います。演繹は前提の外へ出ず、帰納は未来が過去に似ることを示せず、仮説は合う性質を厳密には数え上げられず、類推は似ている所の比べで強さが揺れます。どの形も、それだけでは知識を確かなものにしきれません。

「考える」という語が何を指してきたかは「[「考える」の語は、何を指してきたか](thinking-definitions.html)」に、頭の能力がどう分けられ、測られてきたかは「[頭脳の能力は、どう分けられてきたか](cognitive-abilities.html)」にあります。新しい考えを生み、確かめ、よくしていく力の全体は「[創造的思考とは](creative-thinking.html)」にあります。「考える」ことのほかの面（類推と構造の類似など）への道案内は「[思考とは](thinking.html)」にあります。

<!--PART:巻末|原典と、このページの作り方-->

## 原典と、読む順

<a id="rs-sources"></a>このページで読んだ原典は、どれも無料で読めます。古い順に並べます。

- アリストテレス『分析論前書』：Jenkinson の英訳を、[The Internet Classics Archive（MIT）](http://classics.mit.edu/Aristotle/prior.html)で読めます。シュロギスモスの定義は第 1 巻 第 1 章、帰納は第 2 巻 第 23 章、例は第 24 章、還元は第 25 章です。
- アリストテレス『トピカ』と『弁論術』：同じ所で、Pickard-Cambridge の英訳の[『トピカ』](http://classics.mit.edu/Aristotle/topics.html)（二つの種類は第 1 巻 第 12 章）と、Rhys Roberts の英訳の[『弁論術』](http://classics.mit.edu/Aristotle/rhetoric.html)（例とエンテューメーマは第 1 巻 第 2 章）を読めます。
- ヒューム『人間知性研究』（1748）：Open Court 版（1907）の Cornell 大学図書館の走査を [Internet Archive](https://archive.org/details/cu31924014603967) で読めます。帰納の問いは第 4 節 第 2 部、類推は第 9 節「動物の理性について」です。
- カント『論理学』（イェッシェ編、1800）：アカデミー版 第 9 巻を、Duisburg-Essen 大学の [Kant im Korpus](https://korpora.org/kant/aa09/114.html) で、頁ごとに読めます。推理の分け方は §41–43（p.114）、帰納と類推は §81–84（[pp.131–133](https://korpora.org/kant/aa09/132.html)）です。
- ミル『論理学体系』（1843）：第 8 版（New York, 1874）の米国議会図書館の走査を [Internet Archive](https://archive.org/details/systemoflogicrat01mill) で読めます。三段論法の問いは第 2 巻 第 3 章、類推は第 3 巻 第 20 章「類推について」です。
- パース「演繹、帰納、仮説」（1878）：*Popular Science Monthly* 第 13 巻を [Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_13/August_1878/Illustrations_of_the_Logic_of_Science_VI) で読めます。
- パース「蓋然的推論の理論」（1883）：『Studies in Logic by Members of the Johns Hopkins University』pp.126–181 を、Toronto 大学の走査で [Internet Archive](https://archive.org/details/studiesinlogic00peiruoft) から読めます。類推は pp.158–160 です。
- 『インターネット哲学百科事典』の項目「[Deductive and Inductive Arguments](https://iep.utm.edu/deductive-inductive-arguments/)」（Timothy Shanahan）と、『スタンフォード哲学百科事典』の項目「[Abduction](https://plato.stanford.edu/entries/abduction/)」（Igor Douven）は、どちらもウェブで読めます。いまの数え方を見るために引きました。

<details><summary>出典</summary>

出典：Aristotle, *Prior Analytics*, trans. A. J. Jenkinson（[The Internet Classics Archive・全文](http://classics.mit.edu/Aristotle/prior.mb.txt)で本文照合済（訳）。I.1・II.23–27）。Aristotle, *Topics*, trans. W. A. Pickard-Cambridge（[全文](http://classics.mit.edu/Aristotle/topics.mb.txt)で本文照合済（訳）。I.12）。Aristotle, *Rhetoric*, trans. W. Rhys Roberts（[全文](http://classics.mit.edu/Aristotle/rhetoric.mb.txt)で本文照合済（訳）。I.2）。Kant, I. (1800) *Logik. Ein Handbuch zu Vorlesungen*, hrsg. G. B. Jäsche（Akademie-Ausgabe Bd. IX。[Kant im Korpus](https://korpora.org/kant/aa09/114.html) で本文照合済。§§41–44 pp.114–115・§§81–84 pp.131–133）。Hume, D. (1748) *An Enquiry Concerning Human Understanding*（Chicago: Open Court, 1907。[Internet Archive `cu31924014603967`](https://archive.org/details/cu31924014603967)・Cornell 大学図書館の走査で本文照合済。§IV Part II p.37・§IX p.108）。Mill, J. S. (1843) *A System of Logic, Ratiocinative and Inductive*（8th ed., New York: Harper & Brothers, 1874。[Internet Archive `systemoflogicrat01mill`](https://archive.org/details/systemoflogicrat01mill)・米国議会図書館の走査で本文照合済。Book II ch.III pp.140–146・Book III ch.XX §§1–3 pp.393–397）。Peirce, C. S. (1878) "Deduction, Induction, and Hypothesis", *Popular Science Monthly* 13, pp.470–482（[Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_13/August_1878/Illustrations_of_the_Logic_of_Science_VI) で本文照合済）。Peirce, C. S. (1883) "A Theory of Probable Inference", in *Studies in Logic by Members of the Johns Hopkins University*, Boston: Little, Brown, pp.126–181（[Internet Archive `studiesinlogic00peiruoft`](https://archive.org/details/studiesinlogic00peiruoft)・Toronto 大学の走査で本文照合済。pp.143・158–160）。Shanahan, T. "Deductive and Inductive Arguments", *Internet Encyclopedia of Philosophy*（[iep.utm.edu](https://iep.utm.edu/deductive-inductive-arguments/) で本文照合済）。Douven, I. (2011, substantive revision 2025) "Abduction", *Stanford Encyclopedia of Philosophy*（[plato.stanford.edu](https://plato.stanford.edu/entries/abduction/) で本文照合済。§1）。CHC の整理は「頭脳の能力は、どう分けられてきたか」の出典（McGrew 2009）による。

</details>

## このページの作り方

<a id="rs-method"></a>このページは、pjdhiro の問いに、Claude が原典を読んで書いたものです。原典は、事典の項目を除く八つ（アリストテレスの三つ・ヒューム・カント・ミル・パースの二つ）を、それぞれの走査や全文の写しで、引いた箇所の前後の節まで読みました。いまの数え方は、二つの哲学の事典の項目で見ました。英文とドイツ語の訳は、どれも Claude です。二つの表の列の立て方、数が分かれるのは数える単位が違うからという読み、四つの形が互いの中に見つかるという読みは、Claude がしたものです。pjdhiro の言葉は、考える力の整理について Claude と話したときのものです。
