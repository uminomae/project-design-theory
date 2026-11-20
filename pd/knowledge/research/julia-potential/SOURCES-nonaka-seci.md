# 野中郁次郎の知識創造（SECI・知識スパイラル）の原典の調べ

2026-11-20。読み物「起業家の漸化式と、ジュリア集合」に SECI の短い解説を畳みで足すための調べ。規約は `docs/rules/sources.md`（§3・§5・§10）と `.claude/skills/find-source/SKILL.md`。付箋帳 i202611201327036qk（pjdhiro「あれは組織だけど、起業家一人の内面でも起きるのかもしれない。フラクタルに。そういう野中の論があれば探してほしい」）。

- find-source の `find` で Crossref・OpenAlex・Semantic Scholar・Wayback まで引いた。
- 書誌はどれも Crossref で著者・年・題・誌・巻号・頁を照らした（下の各行の DOI）。
- 頁は、誌面の頁番号を PDF の中で確かめてから書いた。

## 照合の状態の一覧

| 出典 | 状態 | 読んだ写し |
|---|---|---|
| Nonaka 1994 Organization Science | 本文照合済 | ケンタッキー大学の授業の頁に置かれた JSTOR の誌面（Wayback） |
| Nonaka, Umemoto, Senoo 1996 Technology in Society | 本文照合済 | 教科書の付属サイトに置かれた Elsevier の誌面（cs D22 と同じ写し） |
| Nonaka, Toyama, Konno 2000 Long Range Planning | 本文照合済 | ノルウェー技術博物館の研究計画のサイトの Elsevier の誌面（cs D22 と同じ写し） |
| Nonaka, Toyama, Nagata 2000 Industrial and Corporate Change | 本文照合済 | 一橋大学 ICS のサイトの誌面（Wayback） |
| Nonaka & Toyama 2003 KMRP | 本文照合済 | ウィーン経済大学のサーバーの教員の頁に置かれた Palgrave の誌面（Wayback） |
| Nonaka & Toyama 2005 Industrial and Corporate Change | 本文照合済 | 一橋大学 ICS のサイトの誌面（Wayback） |
| Nonaka & von Krogh 2009 Organization Science | 本文照合済 | ウィーン経済大学のサーバーの教員の頁に置かれた INFORMS の誌面（Wayback） |
| Nonaka & Takeuchi 2021 Long Range Planning | 本文照合済 | PubMed Central（Elsevier の COVID-19 の資料として PMC への公開を許したもの） |
| Nonaka & Konno 1998 California Management Review | 要旨照合済 | 要旨（OpenAlex）だけ。本文は有料 |
| Nonaka, Kodama, Hirose, Kohlbacher 2014 European Management Journal | 要旨照合済 | 要旨（IDEAS/RePEc）だけ。本文は未照合（有料） |
| Nonaka & Takeuchi 1995『The Knowledge-Creating Company』 | 未照合（書籍） | Internet Archive は貸し出しだけ（knowledgecreatin00nona・knowledgecreatin0000nona）。中の検索も使えなかった |
| Nonaka, von Krogh, Voelpel 2006 Organization Studies 27(8) | 未照合（有料） | OA の写しが見つからない |
| Nonaka, Toyama, Hirata 2008『Managing Flow』 | 未照合（書籍） | 無料で読める版を見つけていない（ウェブ検索一回だけ。深追いしていない） |
| Nonaka & Takeuchi 2019『The Wise Company』 | 未照合（書籍） | 開いていない。2021 の論文がこの本の SECI スパイラルを要約しているので、そちらで読んだ |

載せてよい写しかの見立て（sources §5-8・スキルの表）：1994 と 2003・2009 は大学のサーバーの授業・教員の頁に置かれた写しで、誌名・巻号・頁・DOI の見える出版社の版の PDF なので「よい」の側。どの写しも、公開ページに書くときは DOI を先に張り、写しの性格を括弧で添える。

---

## 1. Nonaka 1994「A Dynamic Theory of Organizational Knowledge Creation」

- 書誌：Nonaka, I. (1994). A Dynamic Theory of Organizational Knowledge Creation. *Organization Science* 5(1), 14–37. DOI https://doi.org/10.1287/orsc.5.1.14 （Crossref 一致）
- 読める写し：https://web.archive.org/web/20261009125025/https://www.uky.edu/~gmswan3/EDC608/Nonaka_1994.pdf （ケンタッキー大学の授業 EDC608 の頁に置かれた JSTOR の誌面。元の URL は 2026-11-20 に接続できず、Wayback の 2026-10-09 の写しで読んだ。権利は未確認）
- 読んだ頁：pp.14–23、27、32–33（全 24 頁のうち本論の主要部）
- 状態：本文照合済

| 頁 | 原文（短い引用） | 要旨 |
|---|---|---|
| p.14（要旨） | "organizational knowledge is created through a continuous dialogue between tacit and explicit knowledge." | 組織の知識は、暗黙知と形式知の絶え間ない対話から生まれる |
| p.16 | "'Explicit' or codified knowledge refers to knowledge that is transmittable in formal, systematic language. On the other hand, 'tacit' knowledge has a personal quality, which makes it hard to formalize and communicate." | 形式知と暗黙知の定義（ポランニーに拠る） |
| p.17 | "At a fundamental level, knowledge is created by individuals. An organization cannot create knowledge without individuals." | 存在論の次元（社会的な相互作用の水準）。知識をつくるのは根では個人 |
| p.18 | "(1) from tacit knowledge to tacit knowledge, (2) from explicit knowledge to explicit knowledge, (3) from tacit knowledge to explicit knowledge, and (4) from explicit knowledge to tacit knowledge." | 知識変換の四つのモード |
| p.19 | "This process of creating tacit knowledge through shared experience will be called 'socialization.'" | 共同化：経験の共有で暗黙知をつくる |
| p.19 | "the conversion of tacit knowledge into explicit knowledge, which will be called 'externalization.' The other is the conversion of explicit knowledge into tacit knowledge, … 'internalization.'" | 表出化と内面化 |
| p.19 | "This process of creating explicit knowledge from explicit knowledge is referred to as 'combination.'" | 連結化 |
| p.20 | "Organizational knowledge creation, as distinct from individual knowledge creation, takes place when all four modes of knowledge creation are 'organizationally' managed to form a continual cycle." | 四つのモードが「組織的に」回って途切れない循環になるとき、個人の知識創造と区別される組織の知識創造になる |
| p.20 | "organizational knowledge creation can be viewed as an upward spiral process, starting at the individual level moving up to the collective (group) level, and then to the organizational level, sometimes reaching out to the interorganizational level." | 知識スパイラル。個人→集団→組織→（ときに）組織間 |
| p.20（図 2） | 図の題 "Spiral of Organizational Knowledge Creation"。縦軸 "Epistemological dimension"（暗黙知・形式知）、横軸 "Ontological dimension"（Individual・Group・Organization・Inter-organization） | 二軸の図 |

問い 2 に関わる箇所：

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.18 | "The principle of autonomy can be applied at the individual, group, and organizational levels—either separately or all together." | 自律の原理は、個人・集団・組織のどの水準にも当てはまる |
| p.18 | "Even though intention is internal to the individual, knowledge creation at the individual level involves continuous interaction with the external world." | 「個人の水準の知識創造」という語を使っている。ただし外の世界との相互作用を伴う |
| p.22 | "Individual knowledge is enlarged through this interaction between experience and rationality, and crystallized into a unique perspective original to an individual." | 個人の知識は「経験の知」（暗黙知の側）と「合理の知」（形式知の側）の相互作用で広がり、その人だけの視点に結晶する。個人の内側での暗黙と形式のやりとりに当たる記述 |
| p.23 | "These core members form focal points in the team and could be seen as the organizational equivalent of the central element in a series of nested Russian dolls." | 「入れ子のロシア人形」の比喩はあるが、チームの中核の人の配置の比喩で、SECI の形が水準ごとにくり返すという話ではない |
| p.27 | "the actual process progresses forming multilayered loops. Respective stages can take place simultaneously, or sometimes jump forward or backward." | 実際の過程は多層のループをなし、段は同時に起きたり前後に跳んだりする |

## 2. Nonaka, Umemoto, Senoo 1996「From information processing to knowledge creation」

- 書誌：Nonaka, I., Umemoto, K. & Senoo, D. (1996). *Technology in Society* 18(2), 203–218. DOI https://doi.org/10.1016/0160-791X(96)00001-2 （Crossref 一致）
- 読める写し：http://www.sietmanagement.fr/wp-content/uploads/2016/04/nonaka-1996.pdf （Elsevier の誌面。教科書『Systèmes d'information et Management』の付属サイト。権利は未確認。cs の evidence D22 で本文照合済として扱った写しと同じ）
- 読んだ頁：p.209、p.215
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.209 | "we can also visualize a knowledge spiral in the ontological dimension, namely, across the levels of knowledge-creating entities such as individuals, groups, an organization, and collaborating organizations." | 存在論の次元のスパイラル（個人・集団・組織・協働する組織） |
| p.209 | "The organization mobilizes the tacit knowledge created and accumulated at the individual level and amplifies it at the upper ontological levels" | 個人の水準でつくられ溜まった暗黙知を、組織が上の水準で増幅する |
| p.215 | "the interaction between tacit and explicit knowledge in the West tends to take place mainly at the individual level. That is, concepts are created through externalization efforts by top leaders … or product champions" | 問い 2 に関わる。欧米では暗黙知と形式知のやりとりが主に個人の水準で起き、トップや製品の推進者（3M のポストイットの Art Fry）の表出化で概念が生まれる、と日本（集団の水準）との違いとして書く |

## 3. Nonaka, Toyama, Konno 2000「SECI, Ba and Leadership」

- 書誌：Nonaka, I., Toyama, R. & Konno, N. (2000). SECI, Ba and Leadership: a Unified Model of Dynamic Knowledge Creation. *Long Range Planning* 33(1), 5–34. DOI https://doi.org/10.1016/S0024-6301(99)00115-6 （Crossref 一致）
- 読める写し：https://tingene.tekniskmuseum.no/images/PDF/Litteratur_MK/SECI_Ba_and_Leadership_a_Unified_Model.pdf （ノルウェー技術博物館の研究計画「Tingenes metode」のサイトの Elsevier の誌面）
- 読んだ頁：pp.8–10、12–15、19
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.9 | "(1) socialisation (from tacit knowledge to tacit knowledge); (2) externalisation (from tacit knowledge to explicit knowledge); (3) combination (from explicit knowledge to explicit knowledge); and (4) internalisation (from explicit knowledge to tacit knowledge)." | SECI の四つ（この論文で SECI の頭字語が並ぶ） |
| p.9 | "Externalisation is the process of articulating tacit knowledge into explicit knowledge. When tacit knowledge is made explicit, knowledge is crystallised" | 表出化の定義 |
| p.10 | "This tacit knowledge accumulated at the individual level can then set off a new spiral of knowledge creation when it is shared with others through socialisation." | 内面化で個人に溜まった暗黙知が、共同化で次のスパイラルを始める |
| p.12 | "the movement through the four modes of knowledge conversion forms a spiral, not a circle. … The spiral becomes larger in scale as it moves up through the ontological levels." | 円でなく螺旋。存在論の水準を上るほど大きくなる |
| p.8 | "Knowledge creation is a continuous, self-transcending process through which one transcends the boundary of the old self into a new self" | 知識創造は、古い自己の境界を越えて新しい自己になる自己超越の過程 |
| p.13 | "In externalisation, an individual transcends the inner- and outer-boundaries of the self by committing to the group and becoming one with the group." | 四つのモードそれぞれを、個人の自己超越として書く（表出化では個人が集団と一つになる） |
| p.15 | "Knowledge is created through the interactions amongst individuals or between individuals and their environments, rather than by an individual operating alone." | 問い 2 に関わる。一人で動く個人だけで知識がつくられるのではない、と明言（p.14 で Grant の「知識創造は個人の活動」という見方を退けたあとに） |
| p.19 | "Ba exists at many ontological levels and these levels may be connected to form a greater ba. Individuals form the ba of teams, which in turn form the ba of organisation." | 問い 2 に関わる。場（ba）は存在論の多くの水準にあり、個人がチームの場を、チームが組織の場をなす（入れ子）。市場は組織にとっての場 |

## 4. Nonaka, Toyama, Nagata 2000「A firm as a knowledge-creating entity」

- 書誌：Nonaka, I., Toyama, R. & Nagata, A. (2000). *Industrial and Corporate Change* 9(1), 1–20. DOI https://doi.org/10.1093/icc/9.1.1 （Crossref 一致。Crossref の著者欄は Nonaka だけで、誌面の頭は三人）
- 読める写し：https://web.archive.org/web/20220521125442/https://www.ics.hub.hit-u.ac.jp/research/academic_journal/uploads/Nonaka%20ICC.pdf （一橋大学大学院 ICS の教員の論文の頁に置かれた誌面。2026-11-20 に元の URL は HTML を返したので Wayback で取った）
- 読んだ頁：p.9
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.9 | "'Ba' exists at many ontological levels and these levels may be connected to form a greater 'ba'. Individuals form the 'ba' of teams, which in turn form the 'ba' of organizations. A firm is a collection of 'ba'" | 3 の p.19 と同じ趣旨。企業は場の集まり |

## 5. Nonaka & Toyama 2003「The knowledge-creating theory revisited」

- 書誌：Nonaka, I. & Toyama, R. (2003). The knowledge-creating theory revisited: knowledge creation as a synthesizing process. *Knowledge Management Research & Practice* 1(1), 2–10. DOI https://doi.org/10.1057/palgrave.kmrp.8500001 （Crossref 一致）
- 読める写し：https://web.archive.org/web/20130512161449/http://www.ai.wu.ac.at:80/~kaiser/birgit/Nonaka-Papers/The-knowledge-creation-theory-revisited-2003.pdf （ウィーン経済大学 ai.wu.ac.at の教員の頁に置かれた Palgrave の誌面。元の URL は今は 404。権利は未確認）
- 読んだ頁：pp.2、4–6
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.4 | "we can say that tacit knowledge is produced by our practical consciousness and explicit knowledge is produced by our discursive consciousness." | 問い 2 に関わる。ギデンズの二つの意識の水準に当てて、暗黙知は実践的意識が、形式知は言説的意識が生む、と書く。一人の人の中の二つの意識に二つの知を置いている |
| p.4 | "Whereas these two levels of consciousness act harmoniously in the Structuration theory, we claim that tacit and explicit knowledge act dialectically" | 二つは調和でなく弁証法的にはたらく、と野中らは主張する |
| p.6 | "The spiral becomes larger in scale as it moves up the ontological levels." | 2000 と同じ言い方 |

## 6. Nonaka & Toyama 2005「The theory of the knowledge-creating firm」

- 書誌：Nonaka, I. & Toyama, R. (2005). The theory of the knowledge-creating firm: subjectivity, objectivity and synthesis. *Industrial and Corporate Change* 14(3), 419–436. DOI https://doi.org/10.1093/icc/dth058 （Crossref 一致）
- 読める写し：https://web.archive.org/web/20231206012835/https://www.ics.hub.hit-u.ac.jp/research/academic_journal/uploads/dth058.pdf （一橋大学大学院 ICS の頁に置かれた誌面）
- 読んだ頁：p.419（要旨）と、全文を語で引いた（fractal・nested・individual level などの語は出ない）
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.419 | "Knowledge is created through the synthesis of thinking and actions of individuals, who interact with each other within and beyond the organizational boundaries." | 知識は、組織の内外で交わる個人の考えと行いの総合から生まれる |

## 7. Nonaka & von Krogh 2009「Tacit Knowledge and Knowledge Conversion」

- 書誌：Nonaka, I. & von Krogh, G. (2009). Perspective—Tacit Knowledge and Knowledge Conversion: Controversy and Advancement in Organizational Knowledge Creation Theory. *Organization Science* 20(3), 635–652. DOI https://doi.org/10.1287/orsc.1080.0412 （Crossref 一致）
- 読める写し：https://web.archive.org/web/20120712130320/http://www.ai.wu.ac.at/~kaiser/birgit/Nonaka-Papers/tacit-knowledge-and-knowledge-conversion-2009.pdf （ウィーン経済大学の教員の頁に置かれた INFORMS の誌面。元の URL は今は 403/404。権利は未確認）
- 読んだ頁：pp.635–646
- 状態：本文照合済

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.635 | "Organizational knowledge creation is the process of making available and amplifying knowledge created by individuals as well as crystallizing and connecting it to an organization's knowledge system." | 組織的知識創造の定義 |
| p.638 | "The individual brings to bear their tacit and explicit knowledge and the process forces their interaction" | 問い 2 に関わる。個人が自分の暗黙知と形式知を持ち込み、その過程が両者を交わらせる |
| p.643 | "recent work provides insights on the conjecture of an individual's knowledge conversion (externalization and internalization)." | 問い 2 に関わる。「個人の知識変換（表出化と内面化）」という推測（conjecture）に、学習と認知の心理学の近年の研究が手がかりを与える、と書く |
| p.643 | "Whereas the context of action and practice may be social, internalization is an individual, psychological process." | 内面化は個人の心理の過程 |
| pp.643–644 | "In organizational knowledge creation theory, knowledge conversion is not only individual but also a social process (Nonaka and Takeuchi 1995, p. 61)." | 知識変換は個人のものでもあるが、それだけでなく社会の過程でもある。1995 年の本の p.61 を引く（本の p.61 は二次経由。本は読めていない） |
| p.646 | "For the individual, the outcome of knowledge conversion can be the development of tacit and explicit forms of knowledge. At the level of the team, it can be shared knowledge" | 知識変換の結果を、個人の水準とチームの水準で並べて書く |

## 8. Nonaka & Takeuchi 2021「Humanizing strategy」

- 書誌：Nonaka, I. & Takeuchi, H. (2021). Humanizing strategy. *Long Range Planning* 54(4), 102070. DOI https://doi.org/10.1016/j.lrp.2021.102070 （Crossref 一致）
- 読める写し：https://pmc.ncbi.nlm.nih.gov/articles/PMC9753931/ （PubMed Central。Elsevier が COVID-19 の資料として PMC への公開を許したもの。Europe PMC の全文 XML で読んだ。頁の番号が無いので節の名前で控える）
- 読んだ節：「From knowledge to wisdom」
- 状態：本文照合済

| 節 | 原文 | 要旨 |
|---|---|---|
| From knowledge to wisdom | "Both explicit and tacit knowledge reside in an individual, or to use Peter Drucker's words, in the 'head' and 'hand' of an individual." | 問い 2 に関わる。形式知も暗黙知も一人の人の中（頭と手）にある |
| 同 | "we made the process more dynamic by adding a third dimension – time – to the original SECI Model and converted it into a three-dimensional model called the SECI Spiral Model" | 『The Wise Company』（2019）で、元の SECI に時間の軸を足して三次元の「SECI スパイラル・モデル」にした |
| 同 | "SECI starts with Socialization at the individual level. … This dynamic interaction also creates a vertical spiral movement to higher levels of ontology – from the individual level to the society level." | 一回りの横の SECI が、個人から社会までの縦の螺旋をつくる。比喩は「独楽」 |

## 9. 要旨だけ読めたもの

- Nonaka, I. & Konno, N. (1998). The Concept of "Ba": Building a Foundation for Knowledge Creation. *California Management Review* 40(3), 40–54. DOI https://doi.org/10.2307/41165942 （Crossref 一致）。要旨照合済（OpenAlex の要旨）。要旨の中に "A self-transcending process of knowledge creation can be supported by providing ba on different organizational levels." がある（チーム・事業部・全社の三つの水準の事例）。本文は有料。Wayback の写しも無い。Scribd の写しは個人が上げたもので開いていない。
- Nonaka, I., Kodama, M., Hirose, A. & Kohlbacher, F. (2014). Dynamic fractal organizations for promoting knowledge-based transformation – A new paradigm for organizational theory. *European Management Journal* 32(1), 137–146. DOI https://doi.org/10.1016/j.emj.2013.02.003 （Crossref 一致）。要旨照合済（https://ideas.repec.org/a/eee/eurman/v32y2014i1p137-146.html ）。要旨の語は "we present the 'dynamic fractal organization' as a new organizational model" と、暗黙知と形式知を統合して第三の知「フロネシス」をつくる三つ組の関係が "an upward spiraling process" をなす、まで。**何がフラクタル（どの水準のあいだで同じ形がくり返すのか）は、要旨には書かれていない。** 本文は有料で、OA の写しは find-source でも検索でも見つからなかった。

## 10. 見つからない／読めない

- Nonaka & Takeuchi 1995『The Knowledge-Creating Company』（Oxford UP）：未照合（書籍）。Internet Archive は貸し出しだけで、中の語の検索も返事が無かった。「フラクタル」の語がこの本にあるかは確かめられていない。2009 の論文が引く本の p.61（知識変換は個人だけでなく社会の過程）も二次経由。邦訳『知識創造企業』（梅本勝博訳）の書誌は未照合（記憶）。
- Nonaka, Toyama, Hirata 2008『Managing Flow』：未照合（書籍）。「fractal organization」の語があるかは確かめられていない。
- Nonaka & Takeuchi 2019『The Wise Company』：未照合（書籍）。中身は 2021 の論文の要約でだけ読んだ。
- Nonaka, von Krogh & Voelpel 2006（Organization Studies 27(8), 1179–1208, DOI https://doi.org/10.1177/0170840606066312 ）：未照合（有料）。
- 野中のフロネシス（賢慮）の論の単独の原典は、上の 2014 の要旨と 2021 の論文の範囲でしか読んでいない。
- 「SECI が一人の人の内側でも同じ形でくり返す（フラクタル・自己相似・ホロン）」と野中（共著を含む）が書いた文は、読めた八本の本文には無かった。fractal・holon・self-similar・nested の語は、読めた本文では 1994 の「入れ子のロシア人形」（チームの中核の人の配置の比喩）だけ。

---

## 問い 2 への答え

読めた原典の範囲では、野中は「SECI が起業家一人の内面でもフラクタルにくり返す」とは書いていない。いちばん近いのは次の四つ。(1) 個人の内側での暗黙知と形式知のやりとり：1994 p.22「経験と合理の相互作用で個人の知識が広がる」、2003 p.4（暗黙知＝実践的意識・形式知＝言説的意識が弁証法的にはたらく）、2009 p.638・p.643（「個人の知識変換（表出化と内面化）」を推測として挙げ、心理学の支えを示す。内面化は個人の心理の過程）、2021（両方の知は一人の頭と手にある）。(2) 水準ごとの入れ子：場（ba）は多くの存在論の水準にあり、個人がチームの場を、チームが組織の場をなす（2000 LRP p.19・ICC 2000 p.9）。(3) 2014 年に「dynamic fractal organization」を出したが、何がフラクタルかは本文が有料で読めていない（要旨は組織の形の話）。(4) 一方で野中は、知識は「一人で動く個人によってでなく」相互作用から生まれる（2000 LRP p.15）、知識変換は「個人だけでなく社会の過程」（2009 pp.643–644）と、個人だけに閉じる読みには歯止めをかけている。だから「起業家の内面でも SECI がフラクタルに回る」は、野中の材料（個人の水準の知識変換・入れ子の場）から組み立てた pjdhiro と Claude の読み替えとして書くのが正確。なお 1996 p.215 は、欧米では暗黙知と形式知のやりとりが主に個人（トップや製品の推進者）の水準で起きると書いており、起業家一人の話に当てる材料になりうる。

---

## 歯止めの文を、野中の知識の定めから読み直す（2026-11-20）

pjdhiro の読み（上の問い 2 の答えの (4) を読んで）：「場の入れ子は近い可能性があるね。野中自身の歯止め：知識は「一人で動く個人」だけからは生まれない。というのは、知識とは何かによるんじゃないかな。個人が全く何も知識を持たずに生み出さずに場に貢献できるといいたいわけではないと思うけど。」

LRP 2000 の前後で照らした結果（本文照合済。上の 3 と同じ写し）：

| 頁 | 原文 | 要旨 |
|---|---|---|
| p.7 | "we consider knowledge to be ``a dynamic human process of justifying personal belief toward the `truth'''." | 野中らは、知識を、個人の信念を「真」へ向けて正当化していく動的な人間の過程と定める |
| p.7 | "Information becomes knowledge when it is interpreted by individuals and given a context and anchored in the beliefs and commitments of individuals. Hence, knowledge is relational" | 情報は、個人が解釈し、文脈を与え、個人の信念と関与に錨を下ろしたときに知識になる。だから知識は関係的 |
| p.14 | "quoting Simon's ``All learning takes place inside individual human heads'', Grant claims that knowledge creation is an individual activity … However, such an argument is based on a view of knowledge and human beings as static and inhuman." | 歯止めの文の相手は、知識を頭の中の静的なものと見るサイモンとグラントの見方 |
| pp.14–15 | "Knowledge is created through the interactions amongst individuals or between individuals and their environments, rather than by an individual operating alone." | 相互作用の相手には「個人と環境のあいだ」も入る |

読み：pjdhiro の読みのとおり、歯止めの文は、個人が知識を持たずに場に貢献できる、と言っているのではない。知識を、個人の信念と関与に根を持ちながら、文脈の中で正当化されていく動きと定めているので、頭の中に閉じた静的な持ち物としての知識の見方（サイモン・グラント）を退けている。相互作用の相手に環境も入るので、起業家が一人で人や市場とやりとりしながら進む形は、この文と食い違わない（この当てはめは Claude の読み）。
