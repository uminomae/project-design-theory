# 推論とは — 調べの記録（#206 の M2）

独立ページ「推論とは」（正本 `READER-reasoning.md`・公開は `reader/reasoning.html`・工事中）の、問い・読んだ原典・照合の状態・鍵の文・残したことを置く。2026-11-25 に一つの作業セッションで回した。

## 答える問い

推論は、いくつの種類に数えられてきたか。その中で、演繹・帰納・アブダクション（仮説）・類推は、どういう関係に置かれてきたか（#206 の M2。数え方の問いは 2026-11-26 に足した）。返すもの：推論の形の分類と、それぞれの限界。類推に独立の席が無いように見えることを含む。

## pjdhiro の言葉（出どころ）

`docs/rules/stance-history.md` 1-4 の「思考・推論の整理」の行（2026-11-25・#205 を立てたあとの別のセッション）と、#206 の本文から。読み物では、問いのカードに次の二つを引いた。

- 「思考とは、推論とは　のようなメタな頭脳力が整理されてない気がする。演繹、帰納、仮説の3つの推論力がある。それに包括されるのか、全く別なのか、理数系と文系のような分け方で整理されてきた。」（カードでは、推論の段までを引いた。理数系と文系・知能テストの分類は M3 の側）
- 「私の個性は類推力、構造の類似を見抜く力など」

## 読んだ原典と照合の状態

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| アリストテレス『分析論前書』（Jenkinson 訳） | MIT The Internet Classics Archive の全文 [`prior.mb.txt`](http://classics.mit.edu/Aristotle/prior.mb.txt)（大学に置かれた訳） | 本文照合済（訳）。第 1 巻 第 1 章・第 2 巻 第 23・24 章 | 推論（syllogism）の定義「discourse in which, certain things being stated, something other than what is stated follows of necessity from their being so」（I.1）。帰納「induction proceeds through an enumeration of all the cases」（II.23）。例（example）「reasoning from part to part, when both particulars are subordinate to the same term, and one of them is known」。帰納と違い、すべての事例から証明せず、結論を当の事例に当てる（II.24）。Bekker の頁番号は、この写しに無いので書かない |
| ヒューム『人間知性研究』（1748） | Open Court 版（Chicago, 1907）、Cornell 大学図書館の走査 [Internet Archive `cu31924014603967`](https://archive.org/details/cu31924014603967)（「There are no known copyright restrictions in the United States」と表紙に） | 本文照合済（OCR の文字で読んだ）。第 4 節 第 2 部 p.37・第 9 節 p.108 | 経験からの推論はみな、未来が過去に似ることを前提にしている。だから「all these arguments are founded on the supposition of that resemblance」（p.37）。「All our reasonings concerning matter of fact are founded on a species of Analogy」。原因がまったく似ていれば類推は完全で、似かたが落ちるほど推論の力も落ちる（p.108。目次は 109 と書くが、走査の頁の頭の番号は 108） |
| ミル『論理学体系』（初版 1843） | 第 8 版、Harper & Brothers（New York, 1874）、米国議会図書館の走査 [Internet Archive `systemoflogicrat01mill`](https://archive.org/details/systemoflogicrat01mill) | 本文照合済（OCR の文字で読んだ）。第 2 巻 第 3 章 §2・§4 pp.140–146・第 3 巻 第 20 章 §§1–3 pp.393–397 | 三段論法は論点先取（petitio principii）か、という批判を「irrefragable」と認め（p.140）、「All inference is from particulars to particulars」、一般の命題はすでにした推論の記録にすぎない、と置く（p.146）。類推は「some kind of argument supposed to be of an inductive nature, but not amounting to a complete induction」で、これほど緩く使われる語は無い（p.393）。もとの数学の意味は関係の類似（Resemblance of Relations）。類推の型は「Two things resemble each other in one or more respects; a certain proposition is true of the one; therefore it is true of the other」だが、これでは帰納と見分けられない（pp.393–394）。強さは、確かめた似ている所・違う所・まだ調べていない広さの比べで決まる（p.396）。研究者は類推を「a mere guide-post」とし、どれほど薄い類推も、実験や観察を思いつかせる点で値打ちを持つ（pp.396–397） |
| パース「演繹、帰納、仮説」（1878） | *Popular Science Monthly* 13, pp.470–482、[Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_13/August_1878/Illustrations_of_the_Logic_of_Science_VI) | 本文照合済（このセッションでは Wikisource の文字を読み直した。豆の袋の三つの形は `peirce-love-abduction/README.md` の行で照合済） | 推論を「Deductive or Analytic」と「Synthetic」に分け、総合を帰納と仮説に分ける。「The analogy of hypothesis with induction is so strong that some logicians have confounded them. Hypothesis has been called an induction of characters.」 |
| パース「蓋然的推論の理論」（1883） | *Studies in Logic by Members of the Johns Hopkins University*（Boston: Little, Brown, 1883）pp.126–181、Toronto 大学の走査 [Internet Archive `studiesinlogic00peiruoft`](https://archive.org/details/studiesinlogic00peiruoft) | 本文照合済（OCR の文字で読んだ）。pp.143・158–160 | 蓋然的な推論を演繹と拡張的（ampliative）に分け、拡張的を帰納と仮説に分ける。帰納で無作為に引くのは数えられるもの、仮説で引くのは性質で「not capable of strict enumeration」（p.143）。「reasoning from analogy」では、引く集まりが小さく、同じ事例を二度引かない（pp.158–159。惑星の自転の例）。類推の式は三つの前提を持ち、「We have evidently here an induction and an hypothesis followed by a deduction」（p.160）。事例を足していくと、集まりを使い尽くして拡張の性格を失い、完全帰納という演繹になる（p.160） |

## 推論は、いくつに数えられてきたか（2026-11-26 に足した調べ）

付箋 i202611260415052jq（pjdhiro「推論の種類が４種類かどうかをまず探索すべきじゃないかな？」）を受けて、四つという数え方を前提にせず、数え方そのものを原典で照らした。結論：数は二つ・三つ・四つと分かれ、四つは定説でなく、このページの並べ方。

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| アリストテレス『トピカ』（Pickard-Cambridge 訳） | MIT The Internet Classics Archive の全文 [`topics.mb.txt`](http://classics.mit.edu/Aristotle/topics.mb.txt) | 本文照合済（訳）。第 1 巻 第 12 章 | 「we must distinguish how many species there are of dialectical arguments. There is on the one hand Induction, on the other Reasoning.」帰納は「a passage from individuals to universals」 |
| アリストテレス『分析論前書』（Jenkinson 訳） | 同じ [`prior.mb.txt`](http://classics.mit.edu/Aristotle/prior.mb.txt) | 本文照合済（訳）。第 2 巻 第 23–27 章 | II.23「For every belief comes either through syllogism or from induction.」II.25 還元（reduction＝アパゴーゲー）、II.26 反論、II.27 エンテューメーマ（probabilities or signs からの推論） |
| アリストテレス『弁論術』（Rhys Roberts 訳） | 同じ [`rhetoric.mb.txt`](http://classics.mit.edu/Aristotle/rhetoric.mb.txt) | 本文照合済（訳）。第 1 巻 第 2 章 | 「I call the enthymeme a rhetorical syllogism, and the example a rhetorical induction. Every one who effects persuasion through proof does in fact use either enthymemes or examples: there is no other way.」 |
| カント『論理学』（イェッシェ編、1800） | アカデミー版 第 9 巻、Duisburg-Essen 大学の Kant im Korpus [p.114](https://korpora.org/kant/aa09/114.html)・[p.115](https://korpora.org/kant/aa09/115.html)・[p.120](https://korpora.org/kant/aa09/120.html)・[pp.131](https://korpora.org/kant/aa09/131.html)–[133](https://korpora.org/kant/aa09/133.html) | 本文照合済。§§41–44・§56・§§81–84 | §42「Alle Schlüsse sind entweder unmittelbare oder mittelbare.」§43 直接の推理＝Verstandesschlüsse、間接は「entweder Vernunftschlüsse oder Schlüsse der Urtheilskraft」。§84 見出し「Induction und Analogie - die beiden Schlußarten der Urtheilskraft.」注 1：帰納「Eines in Vielen, also in Allen」、類推「Vieles in Einem (was auch in Andern ist), also auch das Übrige in demselben」。注 2「Induction und Analogie sind daher keine Vernunftschlüsse, sondern nur logische Präsumtionen」。注 3 経験の知識を広げるのに「nützlich und unentbehrlich」 |
| Shanahan「Deductive and Inductive Arguments」『インターネット哲学百科事典』 | [iep.utm.edu](https://iep.utm.edu/deductive-inductive-arguments/) | 本文照合済（事典の項目） | 二つの区別は「usually presented as straightforward, such as in many introductory philosophy textbooks」。「Govier (1987) calls the view that there are only two kinds of argument (that is, deductive and inductive) "the positivist theory of argument"」（ゴヴィアは二次経由） |
| Douven「Abduction」『スタンフォード哲学百科事典』（2011 初出・2025-06-18 改訂） | [plato.stanford.edu](https://plato.stanford.edu/entries/abduction/) | 本文照合済（事典の項目）。§1 | 「Abduction is normally thought of as being one of three major types of inference, the other two being deduction and induction.」帰納とアブダクションは「both are ampliative」、違いは説明への訴え |
| CHC（McGrew 2009 ほか） | `cognitive-abilities/README.md` の行（本文照合済） | 写さずリンク | Gf の狭い能力 RG・I・RQ・RP・RE。仮説・類推の名の能力は無い |

照らさずに残したもの：Gentner (1983) "Structure-Mapping: A Theoretical Framework for Analogy", *Cognitive Science* 7(2), 155–170, DOI 10.1207/s15516709cog0702_3 は、OpenAlex で OA（bronze）と出たが、置き場が確認画面を返し、Wayback に PDF の写しも無い。未照合（確認画面）。類推を独立の過程として扱う認知科学の側は、M7「類推と、構造の類似を見抜く力」で読める原典を探す。ほかに、ニヤーヤ学派の比定（upamāna）のように、推論と別の知る手立てとして類似を数える伝統もあるが、今回は照らしていない。OpenStax *Introduction to Philosophy* 5.2 は、JavaScript の要る頁で文字を取れず、照らしていない。

並べ方：数え方の表の「何で分けたか」の列と、数が分かれるのは数える単位が違うから、という読みは Claude がした。四つの形の表は、問いの三つに類推を足したこのページの並べ方で、どの論者の数え方でもない、とページに書いた。

### 照らさなかったもの（読み物には載せない）

| 原典 | 状態 | なぜ |
|---|---|---|
| ポパー『探究の論理』（1934）・英訳 *The Logic of Scientific Discovery*（1959） | 未照合（書籍） | 無料で読める版が見つからなかった（Internet Archive は貸し出しだけ）。帰納の限界の側は、ヒュームとパースの本文で書けた |
| ポリア『いかにして問題をとくか』（1945）・*Mathematics and Plausible Reasoning*（1954） | 未照合（書籍） | 同じ。類推を発見の手として扱う論は、M7「類推と、構造の類似を見抜く力」の調べで、読める原典を探す |
| パース 1903 年のハーバードの講義（アブダクションは新しい考えを持ち込む唯一の操作、など） | 未照合（上げた人の分からない写しで読んだ） | `peirce-love-abduction/README.md` の 2026-11-18 の行のとおり、公開ページから外したもの。ここでも載せない |
| パースが類推を帰納と仮説の合成と見た箇所として、地図で挙げていた「全集の箇所」 | — | 全集（CP）の頁でなく、1883 年の論文の本文（pp.158–160）で見つかった。全集の番号は確かめていないので書かない |

## 並べ方（このページがしたこと）

- 四つの形を、何から何へ推すか・何を当てにするか・どこで止まるか、の三つで表にした。表の列は Claude が立てた。原典の著者の分け方ではない。
- 確かさの順に一本の軸へ並べることはしなかった。演繹と類推を一本の軸の両端に置かない（`corrections.md` 型 B）。読んだ四人は、どれも、一つの形を別の形の中に見つけている（ミルは演繹の下に帰納、ヒュームは事実の推論の下に類推、パースは仮説を性質の帰納、類推を帰納と仮説と演繹の組み合わせ）。ページは、区別しつつ切り離されていない形として書いた。
- 類推の席：アリストテレスは帰納と並ぶ別の形（例）として、ヒュームはすべての事実の推論の土台として、ミルは帰納の弱い形として、パースは三つの合成として置いた。三つ（演繹・帰納・仮説）の分け方の中に、類推だけの席は無い。けれど、席が無いのは、どの形にも入り込んでいるからだ、とも読める（Claude の読み）。

## 呼び出す・呼ばれるページ

- パースの三つの推論と 1908 年の探究の三段階：「パースの創造的な愛と、アブダクション」（`reader/peirce-love-abduction.html#pa-three`・`#pa-musement`）を指す。写さない。
- 思考とは（M1）・頭脳の能力は、どう分けられてきたか（M3）・類推と、構造の類似を見抜く力（M7）：2026-11-25 の時点でページが無いので、工事中の言及だけ。ページができたら、リンクに替える。
- 創造的思考とは：`reader/creative-thinking.html`。仮説を生む・確かめるの並べ方はそちらにある。

## 残したこと

- M7 が立ったら、「類推の席」の段からリンクし、pjdhiro の「私の個性は類推力」のカードのあとの一文をそちらへ向ける。
- ポパーの反証・ポリアの発見法は、読める原典が見つかったら足す。
- 演繹・帰納・仮説を、パースが 1908 年に探究の三段階として並べ直したこと（形の分類から、過程の段階へ）は、パースのページにある。ここでは一文で指すだけにした。

## 2026-11-26 の直し（細かい読みのレビューを受けて）

原典を開き直して確かめ、読み物を直した。
- パース 1883 p.143 の「引く数を増やせば直っていく」の主語は ampliative reasoning（帰納と仮説の両方）。帰納だけの話にしていたのと、仮説は「何個合えば十分かを数で言えない」とパースが見た、と書いていたのを外し、「not capable of strict enumeration, but have to be otherwise estimated」のとおりにした。
- ミル第 3 巻 第 20 章 §1：「完全な帰納に届かない議論」は、類推の語がふつうそう取られている、という紹介。「関係の類似」はウェイトリー（ファーガソンらに従う）の定義の紹介で、その意味の類推は完全な帰納にもなりうる、とミルは書く。§3 の「a mere guide-post」は、完全な帰納が得られるときの話。帰属と条件を本文に戻した。
- アリストテレス：シュロギスモスを「推論」と訳すと、類の名の推論と重なるので「シュロギスモス」とした。『分析論前書』II.23 の「すべての事例を数え上げて進む」は、帰納から組むシュロギスモスの文脈。『トピカ』I.12 の「個別から一般へ」を先に置いた。II.24 の例は、一般の文（隣国と戦うのは悪い）を経て当てる形に直した。
- カントの数は「三つ」「形として数えると四つ」でなく、二段の二分として書いた。IEP は「入門書では二つが多い」でなく、哲学者はふつう二つに分ける、と書く項目として扱った。
- CHC の行は、頭脳の能力のページにそろえ、流動性知能（Gf）の下の五つ（RG・I・RQ・RP・RE）とした。
- ミル第 2 巻 第 3 章の「All inference is from particulars to particulars」は、本文では §4（p.146）の文。目次の §3 の見出し（p.141）にも同じ句があるが、引いた文は §4 にある。直さない。
- 『人間知性研究』（Open Court 版）の OCR の全文に「induct」の語は無い。本文は「『人間知性研究』には帰納の語は出てきません」とした。
- 冒頭のカードの切り方と、結びの問いの言い直し（172 行あたり）は、判断が要るので触っていない。
