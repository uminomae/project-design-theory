# パースの気質・性格・駆動源 — 自分で書いたこと、同時代の人が書いたこと、生き方の事実（2026-11-18）

読み物 `READER-peirce-love-abduction.md` の章「パースと、気質まで似ていないか」（`#pa-temperament`）の工事中のところに入れる材料の調べ。

何への答えか：章のカードの pjdhiro の問い「それよりも、パースの気質や性格などを知りたい。論より、出所、駆動源のようなものを知りたい。パースを鏡として使えないだろうか？」と、2026-11-18 の「パースだけは気になるので気質について興味がある」。`READING-ORDER-20261116.md` の「観点に入れなかったもの」が、パースの生き方の資料はまだ探していない、と書いていた分。

この記録が置くのは、パースが自分をどう書いたか（§1）、同時代の人がパースをどう書いたか（§2）、生き方の事実（§3）、当たれなかったもの（§4）、章の書き足しの案（§5）。pjdhiro とパースが似ているかは書かない。似ているかを見るのは pjdhiro で、ここはパースの側の言葉を並べるところまで。パースの性格を Claude が判定することもしない。評価の語（genius・erratic など）は、誰がどこで言ったかを付けて引く。

訳はどれも Claude のもの。引用は一か所 40 語ほどまで。

## 0. 読んだ写しと照合の状態

照合の状態の語は `docs/rules/sources.md` §3。読んだのは OCR の文字で、頁は誌面の柱（頁の頭の番号）で確かめた。手元の写しは本体の `.cache/raw/peirce-temperament/`（git の外）。

| 印 | 文献 | 読んだ写し | 状態 |
|---|---|---|---|
| P1 | Peirce (1892) "The Law of Mind", *The Monist* 2(4), pp.533–559 | 対訳 `pd/knowledge/translations/peirce-1892-law-of-mind.md`（原文の欄は誌面の走査 [IA `jstor-27897003`](https://archive.org/details/jstor-27897003) と照らしてある） | 本文照合済（¶2・pp.533–534） |
| P2 | Peirce (1893) "Evolutionary Love", *The Monist* 3(2), pp.176–200 | 対訳 `pd/knowledge/translations/peirce-1893-evolutionary-love.md` | 本文照合済。偏りの打ち明け（pp.182–183）・証明できないと認める（p.198）・決定を待つ（p.200）は `SURVEY-reception-nuance-20261117.md` §7-2 で済んでいるので、ここでは繰り返さない |
| P3 | Peirce (1901) "Pearson's Grammar of Science", *Popular Science Monthly* 58（January 1901） | [Wikisource](https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_58/January_1901/Pearson%27s_Grammar_of_Science)（誌面の走査から起こした版。頁の印つき） | 本文照合済（p.300 の段だけ。誌面の走査とは照らしていない。論文の頁の範囲は確かめていない） |
| P4 | Peirce (1905) "What Pragmatism Is", *The Monist* 15(2), pp.161–181 | 誌面の走査 [IA `jstor-27899577`](https://archive.org/details/jstor-27899577)（JSTOR Early Journal Content） | 本文照合済（pp.161–163 の段） |
| P5 | パースの手紙 4 通（1900 年 11 月の 2 通・1902 年の感謝祭・日付なし）。Ladd-Franklin (1916) "Charles S. Peirce at the Johns Hopkins", *The Journal of Philosophy, Psychology and Scientific Methods* 13(26), pp.715–722 に載ったもの | 誌面の走査 [IA `jstor-2012321`](https://archive.org/details/jstor-2012321)（JSTOR Early Journal Content） | 本文照合済（全文を読んだ）。手紙は Ladd-Franklin が載せた形で、一部は「quoted in part」と省かれている。手稿とは照らしていない |
| P6 | Peirce（1897 年ごろの断片二つ。『Collected Papers』第 1 巻〔1931〕の序の 1.3–1.14、pp.vii–xi） | Internet Archive の、個人が上げた写し（`collected-papers-of-charles-sanders-peirce-volume-1`。権利は未確認） | 未照合（上げた人の分からない写しで読んだ。CP 1.3–1.14）。年は編者の注「3-7 and 8-14 are two fragments, c. 1897」から |
| P7 | パースの Lady Welby 宛の手紙（1908-12-23）の一文 | Atkin "Peirce's Theory of Signs", *Stanford Encyclopedia of Philosophy*（2006、2022 改訂）の冒頭の引用（出どころは *Semiotic and Significs* 1977, pp.85–86 と書かれている） | 二次資料のみ（SEP の項。手紙の日付は SEP の引用には無く、ここでは書かない） |
| C1 | *The Letters of William James*, ed. Henry James（息子）, 2 vols., Boston: Atlantic Monthly Press, 1920 | 図書館の本の走査（IA [`lettersofwilliam01jame`](https://archive.org/details/lettersofwilliam01jame)・[`lettersofwilliam02jame`](https://archive.org/details/lettersofwilliam02jame)。1920 年刊でパブリックドメイン） | 本文照合済（第 1 巻 pp.32–33・35・80・149、第 2 巻 p.191） |
| C2 | William James (1907) *Pragmatism*, New York: Longmans, Green | 図書館の本の走査（IA [`pragmatismnewnam00jame`](https://archive.org/details/pragmatismnewnam00jame)） | 本文照合済（第 1 講 p.5 の段。頁は OCR の柱から） |
| C3 | Ladd-Franklin (1916)。P5 と同じ記事 | 同上 | 本文照合済（全文） |
| C4 | Jastrow (1916) "Charles S. Peirce as a Teacher", 同じ号 pp.723–726 | [IA `jstor-2012322`](https://archive.org/details/jstor-2012322) | 本文照合済（全文） |
| C5 | 記事 "Charles Sanders Peirce"、同じ号 p.701 から（頭の節は「Peirce as a Philosopher」、あとの節は「The Peirce Manuscripts」） | [IA `jstor-2012319`](https://archive.org/details/jstor-2012319)。IA の書誌の著者は Fergus Kernan。誌面の署名と終わりの頁は確かめていない | 本文照合済（pp.701–703 と、手稿の節の頭） |
| C6 | Cohen (1916) "Charles S. Peirce and a Tentative Bibliography of His Published Writings", 同じ号 p.726 から | [IA `jstor-2012323`](https://archive.org/details/jstor-2012323) | 本文照合済（pp.726–728） |
| C7 | Cohen (1923) "Introduction", Peirce『Chance, Love, and Logic』 | トロント大学の本の走査（IA [`chanceloveandlog00peiruoft`](https://archive.org/details/chanceloveandlog00peiruoft)） | 本文照合済（pp.vii–ix） |
| B1 | Burch "Charles Sanders Peirce", *Stanford Encyclopedia of Philosophy*（2001、2021 改訂）§1 Brief Biography | [公開の項](https://plato.stanford.edu/entries/peirce/) | 本文照合済（§1。SEP は伝記の二次資料で、その記述を読んだ、という意味） |
| B2 | Houser "Introduction to Volume 5"（1884–1886）、*Writings of Charles S. Peirce: A Chronological Edition* | Peirce Edition Project（インディアナ大学）のサイトの写し。[Wayback の記録（元は peirce.iupui.edu）2024-02-28](https://web.archive.org/web/20240228023556/https://peirce.iupui.edu/writings/v5/v5intro.htm) | 本文照合済（解雇・測量部の醜聞の段。編者による伝記の記述で、中に引かれたパースの手紙は二次経由） |
| B3 | Houser "Introduction to Volume 6"（1887–1890）、同 | 同じサイトの写し。[Wayback の記録 2022-02-07](https://web.archive.org/web/20220207161701/https://peirce.iupui.edu/writings/v6/v6introx.htm) | 本文照合済（冒頭・ミルフォードへの移住・1889 年の段。同上） |

写しの性格：P1〜P5・C1〜C7 は 1923 年までの刊行物で、パブリックドメイン。P6 の『Collected Papers』第 1 巻は 1931 年刊で、権利の状態は確かめていない。

## 1. パースが自分について書いたこと

年の順に並べる。引いた文の前後も読んだ。

### 1-1. 育った場所と、知らずに植えられたもの（1892）

「The Law of Mind」の頭（P1・p.533）。自分の論（偶然から進化の宇宙論へ、物質を「特殊化し部分的に死んだ心」と見るシェリング風の観念論へ）を述べた直後に、読者への断りとして書く。

> I may mention, for the benefit of those who are curious in studying mental biographies, that I was born and reared in the neighborhood of Concord,—I mean in Cambridge,—at the time when Emerson, Hedge, and their friends were disseminating the ideas that they had caught from Schelling

訳：心の伝記を調べることに興味のある人のために述べておくと、私はコンコードの近く、つまりケンブリッジで生まれ育った。それは、エマソンやヘッジやその友人たちが、シェリングから受け取った考えを広めていた頃である。

続けて、ケンブリッジの空気には超越主義への防腐剤が多く、その病毒に感染した覚えはない、と書いたうえで：

> it is probable that some cultured bacilli, some benignant form of the disease was implanted in my soul, unawares, and that now, after long incubation, it comes to the surface, modified by mathematical conceptions and by training in physical investigations.（pp.533–534）

訳：おそらく、培養された桿菌のようなもの、この病の良性の形が、知らぬ間に私の魂に植えつけられていて、それが長い潜伏のあとに、数学の概念と物理の研究の訓練で変えられて、いま表面に出てきているのだろう。

自分の論の出どころを、論証でなく、育ちと、気づかないうちに入っていたものに置いている。「mental biographies」という語で、論者の伝記を見る読み方をパース自身が勧めている。

### 1-2. 熱い好みの打ち明け（1893）

「Evolutionary Love」pp.182–183・198・200。`SURVEY-reception-nuance-20261117.md` §7-2 と読み物の第一部に置いてある。ここでは場所だけ。

### 1-3. 認められなかったことと、何のために書いたか（手紙・日付なし）

Ladd-Franklin 宛の手紙（P5・pp.718–720）。手紙の中で、近く *The Monist* に自分のプラグマティズムを説明する論文が出る、と書いているので、1905 年 4 月の「What Pragmatism Is」の前に書かれたもの（Claude の読み。Ladd-Franklin は日付を載せていない）。

> It is true that I have not received much credit either for pragmatism or any other part of my work. However, as it was not done for the sake of anything of that kind, I have no reason to complain. What I expected to gain when I did it, I have gained.（pp.718–719）

訳：プラグマティズムについても、私の仕事のほかのどの部分についても、私があまり認められてこなかったのは本当です。けれども、そういうもののためにした仕事ではないので、不平を言う理由はありません。それをしたときに得たいと思ったものは、得ました。

続けて、初めは論理の研究を毎月一本ずつ刷るつもりだった、動機は混ざっていた、と書く。

> I wanted the statement of my results in print for my own convenience in referring to them, and I thought it would be a gain to civilization to have my entire logical system. But after a very few months, I found that nobody took any notice of my papers, and I lost all interest in their publication, and simply filed away my mss. for my own use.（p.719）

訳：結果を刷っておけば、自分があとで参照するのに便利だと思いましたし、私の論理の体系の全体があることは文明の得になるとも思いました。しかし数か月もすると、誰も私の論文に目を留めないことが分かり、刷ることへの関心をすっかり失って、原稿は自分で使うためにしまい込むだけになりました。

同じ手紙で、ジェームズについて「There never was the smallest disloyalty on James's part. On the contrary, he has dragged in mention of me whenever he could.」（p.719。ジェームズの側に不実はまったく無かった。むしろ、できるかぎり私の名を引っぱり出してくれた）。1903 年のハーバードの講義を刷るつもりだったが、ジェームズが自分にも分からないので刷ることを勧められないと言った、とも書く（pp.719–720）。そのうえで：

> How can I, to whom nothing seems so thoroughly real as generals, and who regard Truth and Justice as literally the most powerful powers in the world, expect to be understood by the thoroughgoing Wundtian?（p.720）

訳：一般的なものほど徹底して実在するものは無いと思え、真理と正義を文字どおり世界でもっとも強い力だと見ている私が、筋金入りのヴント派に分かってもらえると、どうして期待できるでしょう。

### 1-4. 昔の自分は分かっていなかった、と書く（手紙・1902）

Ladd-Franklin がジョンズ・ホプキンズで論理学を教えることになったと聞いての手紙（P5・p.717。Milford, Pa.、1902 年の感謝祭の日）。

> In those days I knew very little about logic, and did not even thoroughly understand upon what logic is based. ... I am finding out every day something new to me in logic.

訳：あの頃の私は、論理についてほとんど何も知らず、論理が何の上に立っているのかさえ、よく分かっていませんでした。…私は毎日、論理について、自分にとって新しいことを見つけています。

同じ手紙で、論理の学は倫理の学の上に立つという証明をまだ持っていなかったが、健全な推論は何よりも健全な道徳に左右されると、多少は感じていた、と書く。

### 1-5. 言いにくい批判を頼み、礼を言う（手紙・1900）

哲学の辞典に出す「Exact Logic」の項が長すぎないかを、Ladd-Franklin の夫 Fabian Franklin に見てもらい、載せるべきでないという返事を受けての手紙（P5・p.722。Milford, Pa.、1900 年 11 月）。

> I asked of you a disagreeable thing, and I thank you for having done it so faithfully. Would there were more courage between friends! You give me wholesome counsel, and I shall follow it, notwithstanding the suggestions of the Evil One.

訳：私はあなたに嫌なことを頼みました。それをこれほど誠実にしてくださったことに感謝します。友人のあいだに、もっと勇気があればよいのに。あなたは健全な忠告をくださった。悪魔のささやきがあっても、私はそれに従います。

頼んだ側の手紙には「I am too close to it to get a good mental sight at it.」（p.721。近すぎて、よく見えない）とある。

### 1-6. 「ならず者」の仲間だと打ち明ける（1901）

ピアソン『科学の文法』の書評（P3・p.300）。ピアソンが、ある純粋に理論上の命題を「社会の利益に反する」から信じてはならないとした、とパースは読み、真理は社会の利益に反していても真理だ、と書いたあとに：

> I must confess that I belong to that class of scallawags who purpose, with God's help, to look the truth in the face, whether doing so be conducive to the interests of society or not.

訳：打ち明けなければならないが、私は、社会の利益に役立とうが役立つまいが、神の助けを借りて真理を正面から見ようとする、あのならず者の部類に属している。

### 1-7. 六歳から実験室に住んでいたようなもの（1905）

「What Pragmatism Is」の頭（P4・pp.161–162）。実験の科学の達人は、実験室の暮らしで心を形づくられていて、本で学んだ人とは「油と水」のようだ、と書いたあとに、自分を「the writer」と呼んで：

> he himself may almost be said to have inhabited a laboratory from the age of six until long past maturity ; and having all his life associated mostly with experimentalists, it has always been with a confident sense of understanding them and of being understood by them.（p.162）

訳：筆者自身、六歳から成年をとうに過ぎるまで、実験室に住んでいたと言ってよいくらいである。生涯、おもに実験家たちと付き合ってきたので、彼らを理解し、彼らに理解されているという確かな感じが、いつもあった。

続けて、その暮らしは考え方の方法に関心を持つ妨げにならず、形而上学を読むと多くは緩く論じられていると思えたが、カント・バークリー・スピノザの中に、実験室の考え方を思い出させる筋を見つけた、と書く（p.162）。

### 1-8. 載せてよい写しで読めていないもの：1897 年ごろの「著者について」（P6）

『Collected Papers』第 1 巻の序に、編者が置いた断片（CP 1.3–1.14）。パースが自分の考えの出来かた・批評家との関係・自分の哲学の根を、もっともまとまって書いている所。**読んだのは個人が上げた写しなので、本文照合済とせず、公開ページには引けない**（`sources.md` §5 の決まり 8）。pjdhiro が自分で読むときの手がかりとして、どこに何があるかだけを置く。

- CP 1.3：考えられるようになってから四十年ほど、探究の方法の研究にたゆまず取り組んできた。「I am saturated, through and through, with the spirit of the physical sciences.」
- CP 1.4：最初に読んだ哲学の本はドイツの古典で、その考え方に深く染まったが、態度はいつも実験室に住む者のもので、まだ知らないことを学びたいだけだった。
- CP 1.7：自分の哲学は、一人の物理学者が、科学の方法の許すかぎりで宇宙の成り立ちを推測する試み。「Demonstrative proof is not to be thought of.」できるのは、あとの観察者が確かめるか退けるかできる仮説を出すことまで。
- CP 1.10：批評家が自分について良いことを言ったことが無い。一度だけ、ほめ言葉そのものを喜んだことがあり、それは非難のつもりで言われた「自分の結論に絶対の確信が無いようだ」だった。
- CP 1.11：自分の本は誰にも教えを授けない。「I decline to serve as bellwether.」
- CP 1.12：考えの育ちは三十年の仕事で、判定するのは自分でも読者でもなく「experience and history」。
- CP 1.13–1.14：自分の考えを長く fallibilism の名でまとめてきた。「out of a contrite fallibilism, combined with a high faith in the reality of knowledge, and an intense desire to find things out, all my philosophy has always seemed to me to grow.」

第 1 巻は 1931 年の刊行で、米国では刊行から 95 年でパブリックドメインに入るので、2027 年 1 月 1 日からは公有の写しとして読める見込み（Claude の計算。権利の更新の有無は確かめていない）。

### 1-9. 二次経由：何を学んでも記号の研究としてしか学べなかった（P7）

SEP の「Peirce's Theory of Signs」の冒頭が、Lady Welby 宛の手紙から引く文。「it has never been in my power to study anything, – mathematics, ethics, metaphysics, gravitation, ... whist, men and women, wine, metrology, except as a study of semiotic」（数学も倫理学も…トランプのホイストも、男と女も、ワインも、度量衡学も、記号の研究としてでなければ、何かを学ぶことが私にはできなかった）。手紙の本文（*Semiotic and Significs* 1977 は Internet Archive の貸し出しだけ）は読めていない。

### 1-10. 二次経由：伝記の記述の中に引かれた手紙と日記

B2・B3（Houser の序）が引くもの。手稿も刊本も読んでいないので、二次経由。

- 1885 年 10 月、ジェームズ宛（B2）：測量部の醜聞について「This horrid & sickening business of the Survey makes me long intensely for University life. ... I would rather keep a pea-nut stand than stay in it one minute longer than my duty requires me to do.」
- 1889 年 1 月 6 日の日記（B3）：妻ジュリエットの病気について「If I should lose her, I would not survive her. Therefore, I must turn my whole energy to saving her.」
- 1887 年の論文「Logical Machines」（B3）：機械に独創は要らない、という文脈で「we no more want an original machine, than ... an American board of college trustees would hire an original professor」。Houser は「a clear reference to himself」と読む。論文そのもの（*American Journal of Psychology* 1887）は探していない。

## 2. 同時代の人が、パースについて書いたこと

評価の語は、書いた人と場所を付ける。

### 2-1. ウィリアム・ジェームズ（C1・C2）

- 1861 年、家族への手紙（C1 第 1 巻 p.35）。化学の実験室の一つ上の学年について：「a son of Prof. Peirce, whom I suspect to be a very "smart" fellow with a great deal of character, pretty independent and violent though.」（ピアース教授の息子がいて、とても「頭の切れる」やつで、たいへん気骨があると見ている。ただ、かなり独立心が強くて激しい。）
- 1866 年の手紙（同 p.80）：「C. S. Peirce's lecture, which I could not understand a word of, but rather enjoyed the sensation of listening to for an hour.」（一語も分からなかったが、一時間聞いている感じはむしろ楽しんだ。）
- 1869 年 1 月 24 日、Henry P. Bowditch 宛（同 p.149）。パースの思弁哲学誌の論文について「exceedingly bold, subtle and incomprehensible」。続けて：「The poor cuss sees no chance of getting a professorship anywhere ... It seems a great pity that as original a man as he is, who is willing and able to devote the powers of his life to logic and metaphysics, should be starved out of a career, when there are lots of professorships of the sort to be given in the country to "safe," orthodox men.」（気の毒に、どこにも教授の口の見込みが無い。…これほど独創的で、生涯の力を論理学と形而上学に捧げる気も力もある男が、職から干されるのは、じつに惜しい。この国には、そういう教授の口が「安全な」正統の人たちにいくらでも与えられているのに。）
- 1903 年、弟ヘンリー宛（C1 第 2 巻 p.191）：「Charles Peirce is lecturing here — queer being.」（ここで講義をしている。変わった人だ。）
- 1907 年『Pragmatism』第 1 講（C2・p.5）。パースのローウェル講義について：「flashes of brilliant light relieved against Cimmerian darkness! None of us, I fancy, understood all that he said」（漆黒の闇に浮かぶ、まばゆい光のひらめき。私たちの誰も、彼の言ったことの全部は分からなかったと思う。）
- 書簡集の編者（ジェームズの息子 Henry James）の地の文（C1 第 1 巻 pp.32–33）：「the brilliant but erratic Charles S. Peirce」。

### 2-2. 教え子：ラッド＝フランクリン（C3）

ジョンズ・ホプキンズでの講義（1880–81 年から）の回想。

- 数学者シルヴェスターと並べて、二人とも「the temperament of genius」の要素を持つが形が違い、「Peirce, on the contrary, was of the brooding type.」（p.716。パースは、じっと考え込む型だった。）
- 印象は人を鼓舞する人柄からではなく、「a profound, original, dispassionate and impassioned seeker of truth」が目の前にいる、という感じから来た（p.716）。
- 講義の筋は曲がりくねって先が読めず、形而上学を「the science of unclear thinking」と定義して始めた講義の終わりに、「形而上学クラブ」を作ろうと言い出した（pp.716–717）。
- 「his apparent aloofness and air of irresponsibility」にもかかわらず、聞き手のことを深く心にかけていた、として 1902 年の手紙（§1-4）を引く（p.717）。
- 「he lacked, no doubt, as do too many geniuses, that keen self-criticism which would have enabled him to distinguish rigidly, in what he produced, between the wheat and the chaff.」（p.720。自分の書いたものの麦と籾殻を厳しく分ける自己批判を欠いていた。）晩年のものは多くが理解できない、とも書く。
- 批判を受け入れる所を「The ingrained sweetness of Peirce's character」（p.721）と書き、§1-5 の手紙を引く。
- ジョンズ・ホプキンズでの活動がもっと長く続き、冷静な学生たちとの議論で「the solid ground of intelligible reason」に留められていたら、仕事はもっと確かな値打ちのものになっただろう、と書く（p.722）。

### 2-3. 教え子：ジャストロウ（C4）

1882 年秋にジョンズ・ホプキンズへ来てからの回想。

- 「Mr. Peirce's personality was affected by a superficial reticence often associated with the scientific temperament. He readily gave the impression of being unsocial, possibly cold, more truly retiring. At bottom the trait was in the nature of a refined shyness」（p.725。上辺の寡黙さがあり、非社交的で、冷たいとさえ見られやすかったが、実は引っ込み思案で、根は洗練された内気さだった。）世間話や挨拶が苦手だった、と続ける。
- 「His nature was generously hospitable; he was an intellectual host.」（p.725）。学生を対等に扱い、それは「too spontaneous and sincere」でお世辞ではなかった（p.725）。実験の器具を借りてきて、研究を一つ任せ、連名で発表した（p.724）。
- 「his type of ability does not flourish readily in an institutionalized atmosphere」（p.725。彼の型の能力は、制度化された空気の中では育ちにくい。）
- 講義の中心の印象は「masterly analysis accomplished with neatness and dispatch」（p.723）。
- 偉人の研究：先祖・心身の質・仕事の仕方・成長の段階などの質問表を作り、学生と偉人の伝記を読んで表にした。完成しなかった（pp.724–725）。パース自身が、人の気質と仕事のつながりに関心を持っていた跡。

### 2-4. 追悼の記事「Charles Sanders Peirce」（C5）

- 晩年は自分を「simply a logician」と呼んだ（p.701）。
- 「Peirce was fond of saying that he grew up in a laboratory.」（p.701。§1-7 の自分の文と合う。）
- 学識は「somewhat capricious, despite its frequent thoroughness」（p.702）。「Peirce had no interest in founding a school, belonged to none of the existing schools」（p.702）。
- 法則がどうして今の形になったかを知りたがった。その思弁は「perhaps the most characteristic productions of his whole personal character and mental interest」（p.703）。
- 「his entire life work may in a certain sense be called fragmentary」（手稿の節の前）。遺稿はハーバードの哲学科と図書館に置かれた、と書く。

### 2-5. コーエン（C6・C7）

- 1916（C6・pp.726–727）：哲学の共同体のなかで、開けた畑を離れて密林に入る「lonely pioneers」を描き、「Charles S. Peirce was certainly one of these restless pioneer souls」。大学は「those who can work well in harness」にしか場所を見つけられない。著作が顧みられないのは、「isolation and neglect are the penalty for those who stray from the beaten path and refuse to bow to the reigning idols」としか説明できない、と書く。コーエンは、自分はパースと特別な関係に無かった、と断っている（p.726）。
- 1923（C7・pp.viii–ix）：体系が未完なのは、仕事の難しさと「neglect and poverty」のせいだけではなく、「A certain inner instability or lack of self-mastery is reflected in the outer moral or conventional waywardness which, except for a few years at Johns Hopkins, caused him to be excluded from a university career」。年とともに「more and more fragmentary, cryptic, and involved」になった、と書く。

## 3. 生き方の事実

B1（SEP・Burch）と B2・B3（Houser）が書いていること。どれも二次資料の記述で、一次の記録（大学や測量部の文書）には当たっていない。

| 年 | 事実 | 出どころ |
|---|---|---|
| 1839 | 9 月 10 日、マサチューセッツ州ケンブリッジに生まれる。父ベンジャミンはハーバードの数学の教授。父は、面白い問題を出して解を点検する形で教えた | B1 |
| 1851 か 1852 | 12 歳か 13 歳で、ホエートリーの論理学の教科書を数日で読み、以後すべての問題を論理の問題として考えるようになった（年はパース自身の記憶と Fisch の考証で一年ずれる） | B1 |
| 1859・1863 | ハーバード卒業。1863 年に化学の学位を最優等で。化学のほかは成績が下位三分の一だった | B1 |
| 1859–1891 | 合衆国沿岸測量部に勤める。振り子で重力を測る仕事。一部は暮らしのためで、考える力の主なところは論理に向けていた、と Burch は書く | B1 |
| 19 歳ごろ | 三年カントを読み、生涯を論理の研究に捧げると決めた。当時それで暮らすことはできなかった | B1 |
| 1879–1884 | ジョンズ・ホプキンズ大学で論理学を教える。唯一の大学の職 | B1 |
| 1883 | 4 月、最初の妻 Melusina Fay と離婚し、Juliette と再婚 | B3 |
| 1884 | 大学の契約が更新されないと決まる。Burch は、再婚の前後の事情に結びついた理由で突然終わった、と書く。Houser は「a sign that society could not tolerate his disregard for its conventions」と書く。「The shock and disappointment ... led to ill-health and despair」 | B1・B2 |
| 1885 | 測量部が議会の調査を受け、パースの振り子の仕事は費用に比べて値打ちが乏しいと報告される。パースは新聞に抗議を書く | B2 |
| 1887 | 「spurned by the society that had nurtured him—he was no longer welcome even in his family home」（Houser）。4 月、ペンシルベニア州ミルフォードへ移る。通信教育で論理を教える試みは、生徒が集まらず続かなかった | B3 |
| 1888 | 5 月、のちに Arisbe と名づける家を買う。改築に力を注ぎ、土地を買い足す。Houser は、慎ましく暮らせばのちの「terrible poverty」は避けられたかもしれない、と書く | B3 |
| 1889 | 妻の病気が重くなる。7 月、家事の手伝いの女性を殴り、暴行で訴えられ、10 月に罪を認めて罰金 25 ドル | B3 |
| 1891 | 年末、測量部の職が終わる。Burch は、純粋な研究への予算の反対と、おそらくパースの出費と報告の遅れのため、と書く。Houser は、長官が報告の印刷を断り、辞職を求めた、と書く | B1・B2 |
| 1891–1893 | *The Monist* の連作（「Evolutionary Love」を含む）。職を失う前後に当たる | 誌面・B1 |
| 1892 以後 | 「often lived on the edge of penury」。翻訳・雑文・化学の相談で暮らし、ときに親類や友人、たとえばジェームズの援助で生き延びた | B1 |
| 1914 | 4 月 19 日、ミルフォードで亡くなる。刷られたものは約 12,000 頁、手稿は約 80,000 枚 | B1 |

`SURVEY-reception-nuance-20261117.md` §7-1 が「照らしていない」と残した、*The Monist* の連作の時期の暮らしは、上の 1887〜1891 の行が当たる。連作が出たのは、大学の職を失って七年、測量部の職を失う年とその翌々年にかけて。雑誌の発行者や編者との関係は、読めていない（§4）。

## 4. 当たれなかったもの

- **Brent『Charles Sanders Peirce: A Life』（1993・改訂 1998）**：未照合（書籍。Internet Archive の貸し出しだけ）。病気（顔の神経の痛みなど）・薬・晩年の暮らしの細かいところ・死因は、この記録では書いていない。SEP の項にも書かれていなかった。
- **Lady Welby 宛の手紙**（*Semiotic and Significs* 1977、Lieb 編 1953、CP 第 8 巻）：未照合（書籍。貸し出しだけ）。Internet Archive で 1953 年の版と Welby の書簡集を題で引いたが、出なかった。
- **ジェームズ宛のパースの手紙**：Perry『The Thought and Character of William James』（1935）は貸し出しか、上げた人の分からない写し。開いていない。1920 年の書簡集（C1）に入っているのはジェームズの側の手紙だけ。
- **自伝的な草稿**（左利きと言葉の不得手を書いたとされる晩年の手稿など）：手稿の画像も刊本も探せていない。Claude の記憶にある文は、確かめていないので書かない。
- **Peirce Edition Project の第 1 巻の序（Fisch。幼少期）・選集の序（Houser。1893 年以後）・第 8 巻の序（1890–1892）**：Wayback に本文の頁の写しが無かった。今のサイト（peirce.indianapolis.iu.edu ほか）は、このセッションからつながらなかった。pjdhiro のブラウザなら開けるかもしれない。
- **Wikisource の P3 と誌面の走査の突き合わせ**、**C5 の署名と頁の範囲**、**P5 の日付なしの手紙の年**：確かめていない。

## 5. 章「パースと、気質まで似ていないか」の書き足しの案

正本は直していない。工事中の一行（「パースの気質や性格から、その駆動源を見て、鏡として使うところは、これから書きます」）の前に入れる案。載せるのは本文照合済のもの（P1・P3・P4・P5・C1〜C7、事実は B1〜B3 の記述として）だけ。P6・P7 は載せない。

案の形は、パースの言葉を年の順に並べ、Claude の読みを足さないもの。似ているかどうかは書かない。

pjdhiro の判断（2026-11-18・判断のページのボタン）：範囲は「生き方の事実まで」、並べ方は「古いものから」、厳しい評価と出来事は「誰が書いたかを付けて入れる」。下の案は、この答えに合わせて直してある。正本に入れる時期は決まっていない。

### 案の本文

> パースは、自分の論がどこから来たのか、何のために書いたのかを、論文と手紙の中で何度か自分で書いています。年の順に並べます。訳は Claude のものです。
>
> **1892 年・52 歳。**「心の法則」の頭で、心の伝記に興味のある人のために、と断って、自分はコンコードの近くで、エマソンたちがシェリングの考えを広めていた頃に育った、と書きます。その病毒に感染した覚えはない、としたうえで、こう続けます。「おそらく、この病の良性の形が、知らぬ間に私の魂に植えつけられていて、長い潜伏のあとに、数学の概念と物理の研究の訓練で変えられて、いま表面に出てきているのだろう」。
>
> **1893 年・53 歳。**「進化的な愛」で、自分の熱い好みを打ち明け、読者に用心を頼みます（[パースは、愛を何と呼んだか](#pa-love)）。
>
> **1900 年・61 歳。**辞典に出す原稿が長すぎないかを、教え子の夫に見てもらい、載せるべきでないと言われて、こう返します。「私はあなたに嫌なことを頼みました。それをこれほど誠実にしてくださったことに感謝します。友人のあいだに、もっと勇気があればよいのに」。
>
> **1901 年・61 歳。**書評の中で、こう書きます。「打ち明けなければならないが、私は、社会の利益に役立とうが役立つまいが、神の助けを借りて真理を正面から見ようとする、あのならず者の部類に属している」。
>
> **1902 年・63 歳。**二十年前に教えていた頃を振り返って、教え子に書きます。「あの頃の私は、論理についてほとんど何も知りませんでした。…私は毎日、論理について、自分にとって新しいことを見つけています」。
>
> **1905 年ごろ。**同じ教え子への手紙です。「私の仕事のどの部分についても、私があまり認められてこなかったのは本当です。けれども、そういうもののためにした仕事ではないので、不平を言う理由はありません」。初めは論理の研究を毎月刷るつもりだったが、「誰も私の論文に目を留めないことが分かり、刷ることへの関心をすっかり失って、原稿は自分で使うためにしまい込むだけになりました」。同じ手紙で、自分が分かってもらえない理由をこう書きます。「一般的なものほど徹底して実在するものは無いと思え、真理と正義を文字どおり世界でもっとも強い力だと見ている私が」。
>
> **1905 年・65 歳。**「プラグマティズムとは何か」の頭で、自分を筆者と呼んで書きます。「六歳から成年をとうに過ぎるまで、実験室に住んでいたと言ってよいくらいである」。
>
> パースを知っていた人たちは、次のように書いています。大学で一つ下の学年にいたウィリアム・ジェームズは、1861 年に「たいへん気骨がある。ただ、かなり独立心が強くて激しい」、1869 年に「これほど独創的で、生涯の力を論理学と形而上学に捧げる気も力もある男が、職から干されるのは、じつに惜しい」と手紙に書きました。教え子のジャストロウは、亡くなった二年後に、非社交的で冷たいとさえ見られやすかったが「根は洗練された内気さだった」、「彼の型の能力は、制度化された空気の中では育ちにくい」と書いています。同じ号で教え子のラッド＝フランクリンは、パースを「じっと考え込む型」と書き、自分の書いたものの麦と籾殻を分ける自己批判を欠いていた、とも、批判を受け入れるところに「性格に染みついた優しさ」が出ている、とも書いています。
>
> 厳しい言葉も残っています。ジェームズの書簡集（1920 年）を編んだ息子のヘンリー・ジェームズは、地の文でパースを「輝かしいが気まぐれな（brilliant but erratic）」と書きました。パースの論文集（1923 年）を編んだコーエンは、序で、体系が未完に終わったのは仕事の難しさや、顧みられなかったことと貧しさのせいだけではない、として、「ある種の内なる不安定さ、あるいは自制の欠け」が、世間のしきたりから外れたふるまいに映り、数年を除いて大学の職から締め出されることになった、と書いています。
>
> パースが大学で教えたのは、ジョンズ・ホプキンズ大学での五年ほど（1879〜1884 年）だけです。三十二年勤めた沿岸測量部の職は 1891 年の末に終わり、そのあとは貧しさの縁で暮らすことが多かった、とスタンフォード哲学百科事典の項は書いています。著作集の編者ハウザーは、1883 年の離婚と再婚のあと、パースは育ててくれた社会から疎まれ、実家でも歓迎されなくなった、と書きます。1887 年にペンシルベニア州のミルフォードへ移りました。ハウザーによれば、妻の病気が重くなった 1889 年の夏、パースは怒りと苛立ちのあまり家事の手伝いの女性を殴り、暴行で訴えられて、秋に罪を認め、罰金を払っています。「進化的な愛」を含む連作が雑誌に出たのは、1891 年から 1893 年です。

### 案に付ける出典（畳み）

上の §0 の表の P1・P3・P4・P5・C1・C3・C4・C7・B1・B2・B3 を、公開ページの出典の書き方（原典へのリンクつき・`sources.md` §10）で並べる。年齢は生年（1839 年 9 月 10 日・B1）からの Claude の計算。

### 案について

- 年の順に並べたのは、並べる枠を Claude が立てないため（主題で分けると、分け方が Claude の読みになる）。pjdhiro も「古いものから」を選んだ。
- 同時代の人の段と、生き方の事実の段は、pjdhiro の判断で入れた（範囲「生き方の事実まで」）。
- 評価の語のうち、強いもの（Cohen 1923 の「inner instability or lack of self-mastery」・p.viii、書簡集の編者の「erratic」・第 1 巻 pp.32–33、1889 年の暴行の件・B3）は、初めの案では外していた。pjdhiro の判断で、誰がどこで書いたかを付けて入れた。
- パースが何に駆られたかを一言でまとめる文は、置いていない。パース自身の言葉では、「そういうもののためにした仕事ではない」（§1-3）、「真理を正面から見ようとする」（§1-6）、載せられない P6 では「an intense desire to find things out」（§1-8）。

## 6. 残したこと

- P6（CP 1.3–1.14）を、載せてよい写しで読む。2027 年 1 月以後に公有の写しを探すか、手稿の画像（ハーバードの Houghton 図書館）を探す。
- Welby 宛・ジェームズ宛の手紙、Brent の伝記、PEP の第 1 巻・第 8 巻・選集の序（§4）。
- *The Monist* の発行者・編者（Carus・Hegeler）との関係。B3 に、Francis C. Russell が橋渡しをした、という一文があるところまで。
- 公開ページは直していない。
