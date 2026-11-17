# ピア・ラーニングとペアプログラミングの原典の照合（2026-11-18）

付箋帳の一件（i20261117142315hkb・場所は Love駆動開発）から。pjdhiro の付箋：「ピアラーニングという教育分野の事例や手法をどこかに入れたい。」補足「教育分野のLove駆動開発とも言える。プログラミングでいうとペアプロ」。

読み物のどこに置くかを決める前に、主な原典を `docs/rules/sources.md` の手順で一次ソースに当たって確かめた記録。調べ役は Claude（サブエージェント二つ。教育の側とプログラミングの側）。取った PDF と文字は本体の checkout の `.cache/raw/peer-learning/`（git の外）。試した経路は本体の `.cache/raw/find-ledger.md`。照合の状態の語は sources.md §3。頁は、誌面の頁があるものは誌面の頁、無いものは「PDF の頁」と書き分けた。訳は Claude の訳。

## 照合の状態の一覧

| 原典 | 照合の状態 | 読んだ写し |
|---|---|---|
| Crouch & Mazur 2001（ピア・インストラクション） | 本文照合済 | 授業用の写し（Wake Forest 大学）。出版社の版の PDF で誌名・頁・DOI が見える。権利は未確認 |
| Palincsar & Brown 1984（相互教授） | 本文照合済 | 授業用の写し（アテネ大学・Wayback）。出版社の版の走査。権利は未確認 |
| Palincsar & Brown 1983（ERIC の技術報告） | 要旨照合済 | ERIC（米国教育省） |
| Topping 2005（ピア・ラーニングの定義） | 未照合（上げた人の分からない写しで読んだ） | SciSpace の写し（Wayback） |
| Sampson, Boud, Cohen & Gaynor 1999（HERDSA） | 本文照合済 | 学会の会議録の置き場（Wayback） |
| Boud, Cohen & Sampson 1999・Boud 2001 | 未照合（有料） | — |
| Damon & Phelps 1989 | 未照合（有料） | — |
| Johnson & Johnson 2009（協同学習） | 本文照合済 | 著者の研究所のサイトの置き場（置き場の ID からの判断） |
| 池田玲子 1999（ピア・レスポンス） | 本文照合済 | 発行元の国際交流基金のリポジトリ（Wayback）。OCR の崩れあり |
| 舘岡洋子 2021（実践報告） | 本文照合済 | 早稲田大学リポジトリ（Wayback） |
| 舘岡洋子 2000（ピア・リーディング） | 未照合（書誌だけ） | — |
| 舘岡洋子『早稲田日本語教育実践研究』1 | 未照合（確認画面） | — |
| 杉江修治（日本の協同学習） | 未照合（原典が特定できない） | — |
| Williams, Kessler, Cunningham & Jeffries 2000（ペアプロ） | 本文照合済 | 著者の研究室の誌面の写し（Wayback） |
| Cockburn & Williams 2000 | 本文照合済 | 著者の写し（Wayback）。誌面の頁ではない |
| Williams 2000 博士論文 | 本文照合済（鍵の頁だけ） | 著者の写し（Wayback） |
| Nosek 1998 | 未照合（確認画面） | — |
| Hannay ら 2009（メタ分析） | 要旨照合済 | Durham 大学の EBSE の頁 |
| Chong & Hurlbutt 2007 | 要旨照合済 | OpenAlex |
| Plonka ら 2015（知識の移り） | 本文照合済 | Open University の機関リポジトリの著者稿（Wayback）。PDF の頁 |
| C2 wiki の PairProgramming の頁 | 本文照合済（中の数字は二次経由） | c2.com |
| Beck の XP の本・Beck 1999 | 未照合（書籍）・未照合（有料） | — |
| Zuill 2014（モブプログラミング） | 本文照合済 | Agile Alliance の公開版 |
| Arisholm ら 2007 | 未照合（有料） | — |
| Zieris & Prechelt 2014 | 未照合（書誌だけ） | — |

自動で取れず、ブラウザでの保存が要るもの：Nosek 1998（https://dl.acm.org/doi/pdf/10.1145/272287.272333）、舘岡『早稲田日本語教育実践研究』1（早稲田大学リポジトリ record 26081）。公開文に使うと決まったときに頼む。

---

## 一 教育分野のピア・ラーニング

### 1. ピア・インストラクション：Crouch & Mazur (2001)

- **書誌**（Crossref で確定。PDF の頭の頁とも一致）：Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. *American Journal of Physics*, 69(9), 970–977. DOI 10.1119/1.1374249
- **確かめ先**：
  - DOI https://doi.org/10.1119/1.1374249（出版社。有料）
  - 読んだ写し：https://users.wfu.edu/gemmerj/files/S23/FYS/PhysEd.pdf（Wake Forest 大学のサーバーの授業用の頁に置かれた写し。中身は出版社の版の PDF で、誌名・巻号・頁・DOI・© 2001 AAPT が見える。権利は未確認）
  - Mazur のグループのサイト（mazur.harvard.edu の出版物の頁）は、今は 403。Wayback の 2022-09-30 の記録には書誌と要旨だけで PDF のリンクは無かった。グループの昔のサイト（mazur-www.harvard.edu）の PDF の一覧からも、この論文の PDF は特定できなかった。
- **照合の状態**：本文照合済（授業用の写し。出版社の版の PDF で、誌名・頁・DOI が見える。権利は未確認）
- **鍵の文**：
  - p.970（手順）："Students are given one or two minutes to formulate individual answers and report their answers to the instructor. Students then discuss their answers with others sitting around them"
    訳：学生は一、二分で各自の答えを出して教員に伝える。そのあと、周りに座っている人と答えを話し合う。
  - p.970（手順の続き）："the instructor urges students to try to convince each other of the correctness of their own answer by explaining the underlying reasoning."
    訳：教員は、根にある理屈を説明して、自分の答えが正しいと互いに納得させ合うよう促す。
  - p.970（手順の終わり）："the instructor calls an end to the discussion, polls students for their answers again (which may have changed based on the discussion), explains the answer, and moves on"
    訳：教員は話し合いを終わらせ、答えをもう一度集め（話し合いで変わっていることがある）、答えを説明して次へ進む。
  - p.970：話し合いは "typically lasts two to four minutes"（たいてい二〜四分）。ConcepTest の答えは成績に入れず、参加を続けたことに少し点を与える。
  - p.971・p.972 の表 I（結果）：力学の概念の試験（FCI）の平均の規格化した伸び〈g〉が、従来の講義の 1990 年の 0.25 から、PI を入れた 1991 年の 0.49 へ。本文は "doubles from 1990 to 1991"（p.971）。
  - p.972（話し合いの効果の条件）："after discussion, the number of students who give the correct answer to a ConcepTest increases substantially, as long as the initial percentage of correct answers to a ConcepTest is between 35% and 70%."
    訳：話し合いのあと正答する学生の数は大きく増える。ただし、話し合う前の正答率が 35% から 70% のあいだにあるとき。
  - p.972–973：話し合いで答えを変えた学生の大半は誤りから正しい答えへ変わった。正しい答えから誤りへ変わったのは "only 6% of the time"（p.973）。
  - p.973："no student gave the correct answer to the ConcepTests prior to discussion more than 80% of the time"
    訳：話し合いの前に 80% を超えて正答した学生は一人もいなかった（いちばんできる学生も問いで試され、そこから学んでいる、と著者は読む）。
  - p.974（設計の目安）：正答率が 35% 未満なら問いがあいまいか、"too few students may understand the relevant concepts to have a fruitful discussion"。70% を超えるなら "there is little benefit from discussion."
    訳：35% 未満では、実りある話し合いができるほど分かっている学生が少なすぎるかもしれない。70% を超えると、話し合いの益は少ない。
- **読めなかったもの**：Mazur (1997) *Peer Instruction: A User's Manual*（本。使わない）。手順の「詳しくは Ref. 4」はこの本。
- **ZPD**：この論文には Vygotsky・最近接発達領域の語は出てこない（全文を grep した）。

---

### 2. 相互教授：Palincsar & Brown (1984)

- **書誌**（Crossref で確定。PDF の頭の頁とも一致）：Palincsar, A. S., & Brown, A. L. (1984). Reciprocal teaching of comprehension-fostering and comprehension-monitoring activities. *Cognition and Instruction*, 1(2), 117–175. DOI 10.1207/s1532690xci0102_1
  - Crossref の著者名は "Palinscar"（綴りの誤り）。誌面は "Palincsar"。巻は 1（ウェブ検索の要約に「2」とあったのは誤り）。
- **確かめ先**：
  - DOI https://doi.org/10.1207/s1532690xci0102_1（出版社。有料）
  - 読んだ写し：Wayback の記録（2026-11-11。元はアテネ大学の授業の基盤 eclass-b.uoa.gr の授業の資料）https://web.archive.org/web/20261111235335/https://eclass-b.uoa.gr/modules/document/file.php/PHS122/%CE%91%CF%81%CE%B8%CF%81%CE%B1/Reciprocal%20teaching.pdf 。中身は出版社の版の走査（誌名・巻号・頁・© 1984 Lawrence Erlbaum が見える）。授業用の写し。権利は未確認。
  - 先の版：Palincsar & Brown (1983). *Reciprocal Teaching of Comprehension-Monitoring Activities*. Technical Report No. 269, Center for the Study of Reading, University of Illinois. ERIC ED225135 https://files.eric.ed.gov/fulltext/ED225135.pdf（米国の教育省の ERIC。公的機関）。取って頭だけ確かめた。中身は三つの研究（誌面の論文は二つ）で、論文とは別の版。
- **照合の状態**：本文照合済（授業用の写し。出版社の版の走査で、誌名・頁が見える。権利は未確認）。ERIC の技術報告は、別の版として頭と要旨まで（要旨照合済）。
- **鍵の文**：
  - p.117（要旨・四つの方略）："The four study activities were summarizing (self-review), questioning, clarifying, and predicting. The training method was that of reciprocal teaching, where the tutor and students took turns leading a dialogue centered on pertinent features of the text."
    訳：四つの学習の活動は、要約（自分での見直し）・問い・明確化・予測。訓練の方法は相互教授で、教える人と生徒が交代で、テキストの要のところをめぐる対話を率いた。
  - p.124（手順）："the teacher (student or adult) for that segment asked a question that a teacher or test might ask on the segment, summarized the content, discussed and clarified any difficulties, and finally made a prediction about future content."
    訳：その区切りの「先生」（生徒か大人）は、先生や試験が聞きそうな問いを立て、中身を要約し、難しいところを話し合って明らかにし、最後に先の中身を予測した。
  - p.125（役を渡していく・始め）："Initially, the adult teacher modeled the activities, but the students had great difficulty assuming the role of dialogue leader when their turn came."
    訳：はじめは大人の先生が手本を見せたが、生徒は自分の番が来ても対話の進め役を担うのにとても苦労した。
  - p.125（役を渡していく・終わり）："Gradually, the students became much more capable of assuming their role as dialogue leader and by the end of ten sessions were providing paraphrases and questions of some sophistication."
    訳：だんだんと生徒は進め役を担えるようになり、十回の終わりには、かなり練れた言い換えと問いを出していた。
  - p.123（理論の足場の手順の形）："Finally, the adult allows the child to take over the major thinking role and adopts the stance of a supportive and sympathetic audience."
    訳：最後に大人は、考える役の主なところを子どもに渡し、支え、共感する聞き手の立場をとる。
  - p.160（研究 2・集団で）："Because of the larger group size, the students were able to provide modeling and feedback for each other, learning from their peers as well as from their teacher."
    訳：集団が大きいので、生徒どうしで手本と返しを出し合え、先生からだけでなく仲間からも学んだ。
  - p.160（研究 2）：3 日目の対話では生徒は先生とだけやりとりし、生徒どうしのやりとりは一度だけ。13 日目には "the students respond to each other with encouragement from the adult teacher"（生徒が互いに応じ、大人の先生がそれを励ます）。
  - p.167：研究 2 に加わった先生の一人は、訓練した生徒を小さな組の進め役にする "peer tutoring situation" を計画した。生徒は "the opportunity to assume the role of teacher"（先生の役を担う機会）を評価した。
- **ZPD の引かれ方**：p.122–123 で、手順の設計の足場として「熟達者の足場かけ（expert scaffolding）」と「先取りの教え（proleptic teaching）」を挙げ、Vygotsky (1978) を引く。p.123："The distance between the level of performance a child can reach unaided and the level of participation he can accomplish when guided by another more knowledgeable than he is the child's zone of proximal development (Vygotsky, 1978)"（訳：子どもが一人で届く出来の水準と、自分より知っている他者に導かれれば加われる水準との隔たりが、その子の最近接発達領域）。p.153 でも、生徒の振る舞いの移り変わりを「次第の内面化（Vygotsky, 1978）」と書く。p.169 では "through interaction with the supportive teacher and their more knowledgeable peers"（支える先生と、自分より知っている仲間とのやりとりを通して）と、仲間も導く側に数えている。
- **注意**：相互教授の芯は、大人の先生と生徒が交代で「先生」役をすることで、同じ立場の者どうしの学び合い（ピア）は、研究 2 の集団で副次的に現れたもの。ピア・ラーニングの事例として書くなら、この区別を残す必要がある（Claude の読み）。
- **読めなかったもの**：無し（誌面の版を読めた）。

---

### 3. ピア・ラーニングの総説・定義

#### 3-1. Topping (2005)

- **書誌**（Crossref で確定。PDF の頭の頁とも一致）：Topping, K. J. (2005). Trends in peer learning. *Educational Psychology*, 25(6), 631–645. DOI 10.1080/01443410500345172
- **確かめ先**：
  - DOI https://doi.org/10.1080/01443410500345172（出版社。有料）
  - Dundee 大学のリポジトリ（discovery.dundee.ac.uk）に記録が二つあるが、どちらもファイルが無い（一つは 2006 年の本の章として再録された版の記録）。
  - 読んだ写し：Wayback の記録（2024-04-18。元は SciSpace〔typeset.io〕）https://web.archive.org/web/20240418091633/https://typeset.io/pdf/trends-in-peer-learning-101zpr6v7g.pdf 。中身は出版社の版（© 2005 Taylor & Francis・DOI・頁が見える）。機械が集めた写しで、上げた人と権利は未確認。
- **照合の状態**：未照合（上げた人の分からない写しで読んだ。pp.631–632・636–637）。読んだのは p.631–632・p.636–637。§5-8 により、この写しだけでは本文照合済にしない。出版社・著者・大学の版は見つからなかった。
- **鍵の文**（上の写しで読んだもの。公開文には載せない）：
  - p.631（定義）："Peer learning can be defined as the acquisition of knowledge and skill through active helping and supporting among status equals or matched companions. It involves people from similar social groupings who are not professional teachers helping each other to learn and learning themselves by so doing."
    訳：ピア・ラーニングは、立場の等しい者、または釣り合った仲間どうしが、積極的に助け、支え合うことを通して、知識と技能を得ることと定義できる。職業としての教師でない、似た社会的な集まりの人々が、互いの学びを助け、そうすることで自分も学ぶ。
  - p.631–632：昔は、助け手を「代わりの先生」とみて知識を先生→助け手→学び手へ流すと考え、助け手は「いちばんできる生徒」がよいとされた。いまは、助け手と助けられる者の力が近く、二人ともが共同の活動の中で認知の手応えを得ることに関心が移った。"The helper is intended to be "learning by teaching""（p.632。助け手は「教えることで学ぶ」ことが意図される）。
  - p.637（ZPD の引かれ方）："support and scaffolding from a more competent other, necessitating management of activities to be within the zone of proximal development of both parties (reflecting Vygotskian schools of thought…)"
    訳：より有能な他者からの支えと足場かけ。活動を、双方の最近接発達領域の内に収めるよう運ぶことが要る（Vygotsky の学派を映す）。
  - p.637：助け手の側の認知の負荷（学び手の出来を見て、誤解を見つけ、診断し、直す）は "even greater"（さらに大きい）とし、そこに助け手の益があるとする。また、権限を持たない仲間との信頼が、知らないこと・誤解を打ち明けやすくするかもしれない、と書く。

#### 3-2. Boud ほか（UTS のグループ）

- **Boud, Cohen & Sampson (1999)**：書誌（Crossref で確定）Boud, D., Cohen, R., & Sampson, J. (1999). Peer learning and assessment. *Assessment & Evaluation in Higher Education*, 24(4), 413–426. DOI 10.1080/0260293990240405
  - 照合の状態：未照合（有料）。Deakin 大学のリポジトリの記録はファイルが「永久に非公開」。UTS のリポジトリ（opus.lib.uts.edu.au）の Wayback の PDF の一覧にも見つからなかった。Scribd の個人の写しは使わない。
- **Boud (2001)** "Introduction: Making the move to peer learning"（Boud, Cohen & Sampson 編 *Peer Learning in Higher Education*, Kogan Page）：本の章。無料の写しは見つからなかった。未照合（有料）。
- **代わりに読めた同じグループの論文**：Sampson, J., Boud, D., Cohen, R., & Gaynor, F. (1999). Designing peer learning. HERDSA Annual International Conference, Melbourne, 12–15 July 1999（会議の論文。DOI なし。頁は論文の中の頁）。
  - 確かめ先：Wayback の記録（2008-07-28。元は HERDSA〔オーストラレーシア高等教育研究開発学会〕の会議録の置き場）https://web.archive.org/web/20080728173456/http://www.herdsa.org.au/wp-content/uploads/conference/1999/pdf/Sampson.PDF
  - 照合の状態：本文照合済（Wayback の記録。元は学会の会議録の置き場）
  - 鍵の文：
    - p.1（要旨）："Reciprocal peer learning involves students working together to learn with and from each other."
      訳：相互のピア・ラーニングは、学生が一緒に取り組み、互いと共に、互いから学ぶこと。
    - p.2："It involves notions of interdependence and mutual benefit where students take responsibility for each other's learning in a setting which is often constructed by the students."
      訳：相互依存と互いの益という考えを含み、学生が、しばしば学生自身がつくる場で、互いの学びに責任を持つ。
    - p.2（ピア・チュータリングとの違い）："Reciprocal peer learning differs from peer tutoring in that the power and status of the students is similar and the emphasis is on learning together."
      訳：相互のピア・ラーニングがピア・チュータリングと違うのは、学生の力と立場が近く、共に学ぶことに重きがある点。
    - p.2：協同学習（cooperative）は認知・社会・発達の心理学から出て、知の権威は教師にあった。協働学習（collaborative）は大人の学びから出て、学び手の参加と、教える側が統制を分け合うことに重きがある、と区別し、相互のピア・ラーニングを協働学習の一部とみる。教師は "a less direct, more facilitative, but nevertheless crucial, role"（より間接的で、ファシリテーター的だが、それでも欠かせない役）を担う。

#### 3-3. Damon & Phelps (1989)

- **書誌**（Crossref で確定）：Damon, W., & Phelps, E. (1989). Critical distinctions among three approaches to peer education. *International Journal of Educational Research*, 13(1), 9–19. DOI 10.1016/0883-0355(89)90013-x
- **照合の状態**：未照合（有料）。OA の写しは見つからなかった。三つの区別（ピア・チュータリング／協同学習／ピア・コラボレーション）は原文で確かめていない。

---

### 4. 協同学習：Johnson & Johnson (2009)

- **書誌**（Crossref で確定。PDF の頭の頁とも一致）：Johnson, D. W., & Johnson, R. T. (2009). An educational psychology success story: Social interdependence theory and cooperative learning. *Educational Researcher*, 38(5), 365–379. DOI 10.3102/0013189X09339057
- **確かめ先**：
  - DOI https://doi.org/10.3102/0013189X09339057（出版社。有料）
  - 読んだ写し：https://static1.squarespace.com/static/55b8e334e4b0e176420c9949/t/57273f5b86db4345e7323102/1462189915305/ER.CL-Success-Story-Pub-Version-09.pdf 。著者の Cooperative Learning Institute のサイト（co-operation.org）と同じ Squarespace の置き場（サイトのロゴ・CSS が同じ `static/55b8e334e4b0e176420c9949` の下にある）。サイトの頁からこの PDF へのリンクそのものは、今回は確かめられなかった。中身は出版社の版（SAGE・AERA の表紙つき・誌名・巻号・頁・DOI）。
- **照合の状態**：本文照合済（著者の研究所のサイトの置き場の写し。出版社の版）。ただし、置き場が著者のものであることは、同じ置き場の ID からの判断で、サイトの頁のリンクでは確かめていない。
- **鍵の文**：
  - p.366（正の相互依存）："Positive interdependence exists when there is a positive correlation among individuals' goal attainments; individuals perceive that they can attain their goals if and only if the other individuals with whom they are cooperatively linked attain their goals."
    訳：正の相互依存は、個々人の目標の達成に正の相関があるときに在る。協力でつながった他の人々が目標を達するときに限り、自分も目標を達せると感じる。
  - p.366（五つの要素）："five variables mediate the effectiveness of cooperation: positive interdependence, individual accountability, promotive interaction, the appropriate use of social skills, and group processing."
    訳：協力の効き目を媒介する五つの変数は、正の相互依存・個人の責任・促進的なやりとり・社会的技能の適切な使用・集団の振り返り。
  - p.366（理論の芯）：目標の構造がやりとりの仕方を決め、やりとりの型が結果を決める（Deutsch 1949・1962 に拠る）。
  - p.368（促進的なやりとり）："Promotive interaction occurs as individuals encourage and facilitate each other's efforts to accomplish the group's goals."
    訳：促進的なやりとりは、集団の目標を果たそうとする互いの努力を、励まし助けるときに起きる。p.368–369 に十の特徴を挙げる（信頼できるふるまい、必要な情報や材料のやりとり、互いの推論や結論への挑戦、他者の視点をより正確にとる、など）。
  - p.365："More than 1,200 research studies have been conducted in the past 11 decades on cooperative, competitive, and individualistic efforts."（協力・競争・個人の取り組みについて、過去 110 年で 1,200 を超える研究）
- **ZPD**：この論文には Vygotsky・最近接発達領域の語は出てこない（全文を grep した）。足場は Deutsch・Lewin・ゲシュタルト心理学（p.366）。

---

### 5. 日本のピア・ラーニング

#### 5-1. 池田玲子 (1999)

- **書誌**（PDF の頭と柱で確かめた。Crossref は引いていない〔DOI なし〕）：池田玲子 (1999)「ピア・レスポンスが可能にすること―中級学習者の場合―」『世界の日本語教育』9, 29–43（1999 年 6 月）
- **確かめ先**：国際交流基金のリポジトリ（『世界の日本語教育』の発行元）https://jpf.repo.nii.ac.jp/record/281/files/Sekai09_ikeda.pdf 。今回は、置き場のファイルの保存先（オブジェクトストレージ）への接続が手元の決まりで止まったので、Wayback の記録（2024-09-07）https://web.archive.org/web/20240907113745/https://jpf.repo.nii.ac.jp/record/281/files/Sekai09_ikeda.pdf で読んだ。
- **照合の状態**：本文照合済（Wayback の記録。元は発行元の国際交流基金のリポジトリ）。PDF の文字の層は走査の OCR で、字の崩れがある（「推敲」が「推敵」「推高」など）。引くときは誌面の画像で字を確かめたい。
- **鍵の文**：
  - p.29（定義）：「ピア・レスポンスは作文の推敲過程に行う学習者同士の話し合い活動である．これは，作文の推敲のために仲間の学習者が読み手となって書き手の学習者にフィードバックを与える場であり，書き手と読み手が作文を媒介にしてインターアクションを起こす場でもある．」（OCR の崩れを直して引いた）
  - p.29（要旨・結果）：中級学習者のピア・レスポンスでは、語彙や文法の話題のやりとりが、教師との個人指導（カンファレンス）よりも効果的に行われていた。話し合いの進行を促す発話や、発話を和らげる発話が見られ、「学習者自身による学習活動のコントロール」と考えられ、教師主導のカンファレンスには見られない特徴だった。
  - p.41（考察）：発話を和らげる働きが教師とのカンファレンスで学習者の側にほとんど見られなかったのは、そこでは学習者が読み手の立場に立たないこと、相手が母語話者で教師なので批判的な指摘をする状況が起こりにくいことによる、と著者は読む。
  - p.41–42（まとめ・限り）：一つのペアの事例の分析。内容についてのやりとりは中級の言語知識では足りなかった、と限りを書く。
- **ZPD**：この論文で Vygotsky は引かれていない（grep で見当たらない。OCR の崩れで漏れている恐れはある）。

#### 5-2. 舘岡洋子 (2021)

- **書誌**（PDF と早稲田大学リポジトリの記録〔Wayback 2024-11-15〕で確かめた）：舘岡洋子 (2021)「「いっしょにつくる」専門家養成教育―日本語授業「クリティカル・リーディング」の学習環境デザインから―」『早稲田日本語教育学』31, 27–31（実践報告。発行日 2021-12-15）。http://hdl.handle.net/2065/00082719
- **確かめ先**：早稲田大学リポジトリ https://waseda.repo.nii.ac.jp/record/66905/files/WasedaNihongoKyoikugaku_31_8.pdf を、Wayback の記録（2024-09-10）https://web.archive.org/web/20240910185907/https://waseda.repo.nii.ac.jp/record/66905/files/WasedaNihongoKyoikugaku_31_8.pdf で読んだ（理由は 5-1 と同じ）。
- **照合の状態**：本文照合済（Wayback の記録。元は大学の機関リポジトリ）
- **鍵の文**：
  - p.27（経緯）：1990 年代に米国の大学院生と少人数でグループ・リーディングを行い、学生の議論に触発されてファシリテーターとして場づくりを工夫した。その一つが「ピア・リーディング」で、「「ピア・リーディング」と名づけて具体的に論文化したのは2000年のことだった（舘岡2000）」。
  - p.28 ほか（授業の形）：「クリティカル・リーディング」は中級の学習者を対象に、仲間との協働で日本語のテキストを批判的に読み、他者との対話を通して筆者の主張に対する自分の考えを明らかにする授業。学習者どうし・学習者と教師と実習生・実習生どうしの協働が「複層的に」置かれ、参加者が「いっしょにつくる」構造になっている、と書く。
  - 注意：これは実践報告で、ピア・ラーニングの定義を述べた論文ではない。定義は、ここが引く舘岡 (2000)・舘岡 (2005)・池田・舘岡 (2007) にある。
- **読めなかったもの**：
  - 舘岡洋子 (2000)「読解過程における学習者間の相互作用―ピア・リーディングの可能性をめぐって―」『アメリカ・カナダ大学連合日本研究センター紀要』23, 25–50（書誌は 2021 年の論文の参考文献から。二次経由）。未照合（書誌だけ）。無料の本文は見つからなかった。
  - 舘岡洋子「テキストを媒介とした学習コミュニティの生成」『早稲田日本語教育実践研究』1（早稲田大学リポジトリ record 26081）。置き場のファイルの保存先への接続が手元の決まりで止まり、Wayback の記録も無かった。未照合（確認画面）。置き場の保存先への自動の接続が止まり、Wayback の記録も無い。ブラウザでの保存がまだ。
  - 池田玲子・舘岡洋子 (2007)『ピア・ラーニング入門』（本。使わない）。舘岡 (2005)『ひとりで読むことからピア・リーディングへ』（本）。

#### 5-3. 日本の協同学習（杉江修治）

- 照合の状態：未照合（原典が特定できない）。無料の本文が見つからず、引く一本を決められなかった。J-STAGE と中京大学のリポジトリを検索したが、杉江修治が書いた協同学習の論文の本文は見つからなかった。他の論文が引く杉江 (1998)・杉江 (2011) は、書誌を確かめていない。

---

### 6. Vygotsky の最近接発達領域（ZPD）の引かれ方

- Palincsar & Brown (1984)：手順の設計の芯の足場として引く（p.122–123、p.153、p.156）。ZPD は「一人でできる水準」と「より知っている他者に導かれてできる水準」の隔たり。導く側は「大人」「熟達者」として書かれ、p.169 では「より知っている仲間」も入る。
- Topping (2005)：ピア・ラーニングの理論の模型の一つの層として引く（p.637）。「双方の」最近接発達領域の内に活動を収める、と、助け手の側の領域も言う（上げた人が未確認の写しで読んだもの）。
- Crouch & Mazur (2001)・Johnson & Johnson (2009)・池田 (1999)：引いていない。
- Vygotsky (1978) *Mind in Society* そのものは追っていない（無料のパブリックドメインの写しが無い）。

---

### 7. ピアラーニングで何が起きているか（原典から言えること）

原典の記述：
1. ピア・インストラクションでは、各自で答えを出したあと隣と理屈を説明し合うと、正答が増える。ただし、話し合う前の正答率が 35〜70% のときに限られ、低すぎても高すぎても益は少ない（Crouch & Mazur 2001, p.972・974）。答えを変えた人の大半は、誤りから正しい答えへ変わった（p.972–973）。
2. 相互教授では、はじめは大人が手本を見せ、生徒は進め役になるのに苦労するが、交代を重ねるうちに生徒が「先生」役を担えるようになる。集団では生徒どうしが手本と返しを出し合い、先生は「コーチ」になる（Palincsar & Brown 1984, p.125・160）。
3. 同じ立場どうしのやりとりは、教師と生徒のやりとりと質が違う。ピア・レスポンスでは、学習者が自分で話し合いを進め、発話を和らげる。それは教師とのカンファレンスには見られなかった（池田 1999, p.29・41）。相互のピア・ラーニングは、力と立場が近く、共に学ぶことに重きがある点でチュータリングと違う（Sampson ら 1999, p.2）。
4. 協同学習では、目標が互いに結びついている（正の相互依存）ことが、励まし合い、資源を渡し合い、互いの推論に挑み合うやりとりを生む、とされる（Johnson & Johnson 2009, p.366・368–369）。

Claude の読み（原典の記述ではない）：
5. どの原典も、「教える側」と「教わる側」を固定せず、役を回すか、力の近い者どうしにすることで、説明する側にも学びが起きると見ている。ペアプロの運転役と案内役の交代に近いのは、相互教授の「先生」役の交代と、ピア・インストラクションの「説明して納得させ合う」ところ。ただし、相互教授の芯は大人と生徒の交代で、ピアは副次的に現れたもの（2 の注意）。Love駆動開発に足すなら、この区別と、Topping の定義が未照合であることを残す必要がある。

---

## 二 プログラミングのペアプログラミング

### 1. Williams, Kessler, Cunningham, Jeffries (2000) Strengthening the Case for Pair Programming

- 書誌（Crossref で確認）：Williams, L., Kessler, R. R., Cunningham, W., Jeffries, R. (2000). Strengthening the case for pair programming. *IEEE Software* 17(4), 19–25. DOI 10.1109/52.854064
- 確かめ先：https://doi.org/10.1109/52.854064 （出版社は有料）／読んだ写し：https://web.archive.org/web/20010807011332/http://collaboration.csc.ncsu.edu:80/laurie/Papers/ieeeSoftware.PDF （Wayback の記録・写しの日 2001-08-07。元は第一著者 Williams の NCSU の研究室の頁。中身は誌面の組版そのもの〔頁 19–25 の柱つき〕）
- 手元：`Williams_2000_strengthening_pair.pdf`（`check`：書誌と合う）
- 照合の状態：**本文照合済**（著者の研究室が上げた誌面の写し・Wayback）
- 鍵の文：
  - p.20 「One partner, the driver, controls the pencil, mouse, or keyboard and writes the code. The other partner continuously and actively observes the driver's work, watching for defects, thinking of alternatives, looking up resources, and considering strategic implications.」
    訳：一人（ドライバー）は鉛筆・マウス・キーボードを持ってコードを書く。もう一人は、ドライバーの作業を絶えず能動的に見て、欠陥を見張り、別の案を考え、資料を調べ、戦略上の意味を考える。
    （この論文では、二人目に「navigator」の語を使っていない。p.24 の学生の言葉では「nondriver」）
  - p.20 「The partners deliberately switch roles periodically. Both are equal, active participants in the process at all times and wholly share the ownership of the work product」
    訳：二人は意図して周期的に役を替える。どちらも常に対等で能動的な参加者で、作ったものを丸ごと共に持つ。
  - p.22 実験の組み立て：Utah 大学の 4 年生 41 人。対照群 13 人（一人で）、実験群 28 人（二人組）。GPA で高・中・低を同じ割合に分けた。実験群の 28 人は全員ペアを望んでいた。
  - p.22 「On average, however, they took 60% more programmer hours to complete the assignment.」「After the adjustment period, this 60% decreased dramatically to a minimum of 15%.」
    訳：（最初の課題では）平均で 60% 多くの人時をかけた。慣れの期間のあと、この 60% は大きく下がり、最小で 15% になった。
  - p.23 表 1（自動テストの通った割合。個人／ペア）：課題 1 73.4／86.4、課題 2 78.1／88.6、課題 3 70.4／87.1、課題 4 78.1／94.4。「statistically significant to p < 0.01」。
  - p.23 「By working in tandem, the pairs completed their assignments 40% to 50% faster.」 訳：ペアは課題を 40〜50% 速く（経過時間で）終えた。
  - p.23 「They admit to working "harder and smarter" because they don't want to let their partner down.」 訳：相手を落胆させたくないから「より懸命に、より賢く」働く、と彼らは認める。
  - p.24 職業プログラマーへのオンライン調査で 96% が一人のときより仕事を楽しめると答え、学生 41 人への 6 回の調査では毎回 90% 超が一人より楽しいと答え、学生のほぼ 95% がより自信を持てると答えた。
  - p.24 教員の観察：一人で作業した学生は、ペアの学生より 2〜3 倍多く技術的な質問をした。
  - p.24 限界の断り：「The majority of participants in our study and in our survey were self-selected pair programmers. Further study is needed」 訳：研究と調査の参加者の多くは、自分でペアを選んだ人だった。嫌がる人に強いた場合の満足は、さらに調べる必要がある。
  - p.24 相性の難しさ：自我が強すぎる相手（my-way-or-the-highway）と、弱すぎて主張できない相手。
  - p.25 Jeffries の囲み（C3 プロジェクト）：最も経験の浅い若手と組み、教えるつもりが、相手に助けられていた、という経験談。
  - 二次経由（Nosek 1998 の数字。この論文の p.19 が伝えるもの）：経験あるプログラマー 15 人、個人 5 人・5 組 10 人、最長 45 分。ペアは合計で 60% 多い分数を使い、40% 速く終え、より良いアルゴリズムとコードを作った。
  - 歴史（p.20 が伝えるもの・二次経由）：Constantine 1995 がペアを観察、Coplien 1995 が developing-in-pairs のパターン、1996 年に Beck が Cunningham・Jeffries と XP を作り始めた。
- 読めなかったもの：無し（誌面の頁がそろっている）。

### 2. Cockburn & Williams (2000) The Costs and Benefits of Pair Programming

- 書誌：Cockburn, A., Williams, L. "The Costs and Benefits of Pair Programming." XP2000（Sardinia）向けの論文。手元の PDF には掲載先の記載が無い。Crossref に当たる記録は無かった（DOI 無し）。本の章として載った先（*Extreme Programming Examined*, 2001 など）は**未照合（記憶）**で、書誌に入れない。
- 読んだ写し：https://web.archive.org/web/20010603045411/http://collaboration.csc.ncsu.edu:80/laurie/Papers/XPSardinia.PDF （Wayback の記録・写しの日 2001-06-03。元は Williams の研究室の頁。著者の組版で、頁は「Page N」の自前の番号）
- 手元：`Cockburn_Williams_2000_costs_benefits_pair.pdf`（`check`：書誌と合う）
- 照合の状態：**本文照合済**（著者の写し・Wayback。誌面の頁ではない）
- 鍵の文（頁は PDF の自前の番号）：
  - p.1 要旨「for a development-time cost of about 15%, pair programming improves design quality, reduces defects, reduces staffing risk, enhances technical skills, improves team communications and is considered more enjoyable at statistically significant levels.」
    訳：開発時間で約 15% の費用で、設計の質を上げ、欠陥を減らし、人の抜ける危うさを減らし、技術を高め、チームの意思疎通を良くし、より楽しいとされた（統計的に有意な水準で）。
  - p.3 「the resulting code has about 15% fewer defects [4]」 訳：できたコードの欠陥は約 15% 少ない。〔Claude の注：根拠 [4] は 1 の論文。1 の表 1 はテストの通過率で、「15% fewer defects」はその差の言い方。数字を使うときは 1 の表 1 の値に戻る〕
  - p.6–7 「Learning happens in a very tight apprenticeship mode. The partners take turns being the teacher and the taught, from moment to moment. Even unspoken skills and habits cross partners.」
    訳：学びはとても密な徒弟の形で起きる。二人は刻々と教える側と教わる側を入れ替わる。言葉にされない技や癖さえ相手に渡る。
  - p.7 Lave & Wenger の正統的周辺参加と「line of sight」（熟練者が見え聞こえる所にいること）を引き、ペアを「a better apprenticeship situation」と置く。〔これは著者の当てはめ。Lave & Wenger 自身はペアプロを論じていない〕
  - p.8 Utah 大学の Web プログラミングの授業（20 人・全員ペア）の最終日の無記名調査：74% が「between my partner and me, we could figure everything out」、84% が ASP を相手といたから速く良く学べた、に同意。
  - p.4 職業プログラマーの言葉「I can be sure I had done a good job if someone else I trust had been watching and approved.」 訳：信頼する人が見ていて認めてくれたなら、良い仕事をしたと確信できる。
  - p.8 Cockburn の聞き取りの記録（チームの立ち上げ）：初めはぎこちなく、声に出して考えるよう促すと「They actually began to enjoy and trust each other.」 訳：彼らは本当に、互いを楽しみ、信頼し始めた。
  - p.8 「Often, by having to work together, people learn to work together.」／「We know of no statistical study of these effects.」 訳：一緒に働かざるを得ないことで、一緒に働くことを学ぶことが多い。／（チームの意思疎通への）この効果の統計的な研究を、私たちは知らない。
  - p.6 「pair relaying」：行き詰まると交互に洞察を出して少しずつ問題を削る、と実践者が語る（Wagstaff の言葉）。
- 読めなかったもの：掲載先の誌面（本の章）。

### 3. Williams (2000) 博士論文 The Collaborative Software Process

- 書誌：Williams, L. A. (2000). *The Collaborative Software Process*. Ph.D. dissertation, Department of Computer Science, The University of Utah, August 2000.（表紙で確認。DOI 無し）
- 読んだ写し：https://web.archive.org/web/20030614162334/http://collaboration.csc.ncsu.edu:80/laurie/Papers/dissertation.pdf （Wayback の記録・写しの日 2003-06-14。元は著者の研究室の頁。206 PDF 頁。印刷の頁＝PDF の頁−17）
- 手元：`Williams_2000_dissertation_collaborative_software_process.pdf`（`check`：書誌と合う）
- 照合の状態：**本文照合済**（著者の写し・Wayback）。読んだのは下の頁だけ。全文は読んでいない。
- 鍵の文（印刷の頁）：
  - p.3 「One is the 'designated driver.' … The non-driver is observing the work of the driver and identifying tactical and strategic deficiencies in their work.」
    訳：一人が「指名されたドライバー」。もう一人（ノンドライバー）はドライバーの作業を見て、戦術・戦略上の欠けを見つける。〔ここでも語は driver／non-driver で、navigator ではない〕
  - p.39 pair-pressure：相手を落胆させたくないので懸命に働く。授業の最終日の無記名調査で、学生は課題の出来の差を「It was the pair-pressure – I could not let my partner down.」と答えた（p.40）。
  - p.49 熟練者が見える所で学ぶ徒弟の例を引き、「the expert, too, learns from the novice」と添える。p.49–50 ペアを替えると知識が広がる（Beck の本からの引用。二次経由）。
  - p.63 「Together the pairs only spent about 15% more time on the program than the individuals.」 また、最初の課題のあと、時間の差は統計的に有意でなくなった（p = .380）。
    訳：ペアは合計で、個人より約 15% 多いだけの時間を使った。
  - p.64 課題 4 の時間は、学生の記録が不正確だったので分析から外した、という断り。
- 読めなかったもの：無し（読む範囲を絞っただけ）。

### 4. Nosek (1998) The Case for Collaborative Programming

- 書誌（Crossref で確認）：Nosek, J. T. (1998). The case for collaborative programming. *Communications of the ACM* 41(3), 105–108. DOI 10.1145/272287.272333
- 確かめ先：https://doi.org/10.1145/272287.272333 ／ PDF：https://dl.acm.org/doi/pdf/10.1145/272287.272333 （OpenAlex・Semantic Scholar は無料〔bronze〕と言う。道具の見立ては確認画面のホスト。Wayback には PDF の写しが無く、案内の頁だけ）
- 照合の状態：**未照合（確認画面）**。ACM DL。ブラウザでの保存がまだ。
- 鍵の文：無し。数字は 1 の p.19 が伝えるもの（二次経由）だけ。
- 読めなかったもの：本文全部。pjdhiro にブラウザで頼む表の行：開く URL＝上の dl.acm.org の PDF／保存名＝`.cache/raw/peer-learning/Nosek_1998_case_collaborative_programming.pdf`／確かめること＝15 人・5 組の実験の数字（60% 多い分数・40% 速い）と、楽しさ・自信の記述の頁。

### 5. Hannay, Dybå, Arisholm, Sjøberg (2009) The effectiveness of pair programming: A meta-analysis

- 書誌（Crossref で確認）：Hannay, J. E., Dybå, T., Arisholm, E., Sjøberg, D. I. K. (2009). The effectiveness of pair programming: A meta-analysis. *Information and Software Technology* 51(7), 1110–1122. DOI 10.1016/j.infsof.2009.02.001
- 確かめ先：https://doi.org/10.1016/j.infsof.2009.02.001 （有料）／要旨：https://ebse.webspace.durham.ac.uk/ebse-bibliography/the-effectiveness-of-pair-programming-a-meta-analysis/ （Durham 大学の EBSE〔根拠に基づくソフトウェア工学〕の書誌の頁に写された要旨）
- 照合の状態：**要旨照合済**（本文は未照合〔有料〕）。試した経路：Crossref・OpenAlex・Semantic Scholar（要旨は出版社が伏せている）・Simula と SINTEF の頁（PDF なし）・Wayback（simula.no の PDF の一覧に当たりなし。途中で Wayback が一時止まった）・HUJI の授業の PDF（接続できず）。見つかったほかの写し（typeset.io・ウルグアイ大学の授業の頁〔404〕）は、上げた人が分からないか開けない。
- 鍵の文（要旨。頁は無い）：
  - 「a small significant positive overall effect of pair programming on quality, a medium significant positive overall effect on duration, and a medium significant negative overall effect on effort.」
    訳：質には小さな有意の正の効果、所要期間には中程度の有意の正の効果（短くなる）、工数には中程度の有意の負の効果（増える）。
  - 「between-study variance is significant, and there are signs of publication bias」 訳：研究どうしのばらつきが有意に大きく、出版の偏りの兆しがある。
  - 「pair programming is faster than solo programming when programming task complexity is low and yields code solutions of higher quality when task complexity is high.」
    訳：課題が易しいときはペアのほうが速く、難しいときはペアのほうが質の高い解を出す。
  - 「The higher quality for complex tasks comes at a price of considerably greater effort, while the reduced completion time for the simpler tasks comes at a price of noticeably lower quality.」
    訳：難しい課題での質の高さは、かなり大きい工数と引き換え。易しい課題での時間の短さは、目に見えて低い質と引き換え。
  - 「greater attention should be given to moderating factors」 訳：効果を左右する条件にもっと目を向けるべき。
- 読めなかったもの：本文（熟練度の扱い・頁つきの条件の節）。要旨には熟練度（expertise）の語が無い。熟練度で効き目が変わる、は本文か Arisholm ら 2007 で確かめる必要がある。**課題の難しさの結論は要旨で言えるが、頁つきでは言えない。**

### 6. Chong & Hurlbutt (2007) The Social Dynamics of Pair Programming

- 書誌（Crossref で確認）：Chong, J., Hurlbutt, T. (2007). The Social Dynamics of Pair Programming. *29th International Conference on Software Engineering (ICSE'07)*, 354–363. DOI 10.1109/icse.2007.87
- 確かめ先：https://doi.org/10.1109/icse.2007.87 （有料）／要旨：OpenAlex の記録（https://api.openalex.org/works/doi:10.1109/icse.2007.87 の abstract）
- 照合の状態：**要旨照合済**（本文は未照合〔有料〕）。GWU の授業の頁の PDF（https://www2.seas.gwu.edu/~mlancast/cs254/28280354.pdf ・授業用の写し）は、証明書の鎖の不備で取れなかった。確かめを外して取ることはしていない。
- 鍵の文（要旨）：
  - 「a four month ethnographic study of professional pair programmers from two software development teams」 訳：二つのチームの職業プログラマーのペアを 4 か月、エスノグラフィで調べた。
  - 「Contrary to the current conception of pair programmers, the pairs in this study did not hew to the separate roles of "driver" and "navigator".」
    訳：通念と違い、この研究のペアは「ドライバー」と「ナビゲーター」という別々の役を守らなかった。
  - 「The distribution of expertise among the members of a pair had a strong influence on the tenor of pair programming interaction. Keyboard control had a consistent secondary effect on decisionmaking within the pair.」
    訳：二人の間の熟練の分布が、やりとりの調子を強く左右した。キーボードを持つことは、ペアの中の決め方に一貫して二次的な影響を与えた。
- 読めなかったもの：本文（熟練の差・キーボードと決め方の具体の場面）。

### 7. Plonka, Sharp, van der Linden, Dittrich (2015) Knowledge transfer in pair programming: An in-depth analysis

- 書誌（Crossref で確認）：Plonka, L., Sharp, H., van der Linden, J., Dittrich, Y. (2015). Knowledge transfer in pair programming: An in-depth analysis. *International Journal of Human-Computer Studies* 73, 66–78. DOI 10.1016/j.ijhcs.2014.09.001
- 確かめ先：https://doi.org/10.1016/j.ijhcs.2014.09.001 ／読んだ写し：https://web.archive.org/web/20170809074724/http://oro.open.ac.uk/41032/1/revised%20submission.pdf （Wayback の記録・写しの日 2017-08-09。元は The Open University の機関リポジトリ ORO。**著者稿・改訂投稿稿〔IJHCS-D-14-00134R1〕**で、誌面の頁と違う。今の ORO は確認画面を返す）
- 手元：`Plonka_2015_knowledge_transfer_pair_ORO.pdf`（`check`：書誌と合う。74 PDF 頁。査読者向けの改訂の覚え書きを含む）
- 照合の状態：**本文照合済**（著者稿・機関リポジトリ・Wayback。頁は PDF の頁）。読んだのは要旨・序・考察（5 章）。結果の節（4 章）の個々の例は読んでいない。
- 鍵の文（PDF の頁）：
  - PDF p.18 要旨「six teaching strategies, ranging from "giving direct instructions" to "subtle hints"; and challenges and benefits for both partners」「novice articulation, reflection and exploration are not seen in the data.」
    訳：直接の指示から、さりげない手がかりまでの六つの教え方と、双方にとっての難しさと利点。初心者が言葉にすること・振り返り・探索は、データに見られなかった。
  - PDF p.48 六つ：「(1) indirect hints, (2) pointing out problems, (3) gradually adding information, (4) giving clear instructions, (5) explanation, and (6) verbalisation.」
  - PDF p.50 「tasks are typically chosen according to agile prioritisation which considers business value, not educational progression.」 訳：課題は教育の進み具合でなく、事業の価値で選ばれる。
  - PDF p.50 「Novices become more active and engage on a more detailed level when driving than they do when navigating.」 訳：初心者は、ナビゲートするときより運転するときのほうが能動的になり、細部まで関わる。
  - PDF p.51 初心者は自分が運転する番になるとためらい、熟練者と初心者の組では熟練者が運転を占めがち（先行研究 [28] の報告として）。
  - PDF p.51–52 熟練者の学び：初心者の「simple questions」が熟練者に前提を考え直させる。熟練者は、説明することで自分の考えが整うと語った。
  - PDF p.52 熟練者の負担：言葉にし説明することは追加の認知の負担で、ペアがソロより疲れる理由の一つかもしれない。
- 読めなかったもの：誌面の版（頁の対応）。

### 8. C2 wiki（Ward Cunningham の wiki）PairProgramming の頁

- 確かめ先：https://wiki.c2.com/?PairProgramming （JSON の本文：https://c2.com/wiki/remodel/pages/PairProgramming 、頁の日付 2014-06-27）。手元：`c2_PairProgramming.json`・`.txt`
- 照合の状態：**本文照合済**（頁の本文を読んだ）。ただし多くの人が書き足した wiki で、多くの節は署名が無い。中の数字（例：Economist 2001 経由の「15% slower … 15% fewer bugs」）は**二次経由**で、論拠に使わない。
- 鍵の文：
  - 冒頭の定義「An ExtremeProgrammingPractice in which two engineers participate in one development effort at one workstation.」 訳：XP の実践の一つで、二人の技術者が一つの作業台で一つの開発に加わる。
  - 「WardAndKent lead a BOF at OOPSLA'97 that included looking for patterns in the code and in the recorded dialog between programmers as they work together.」 そこで見つけた型の一つ目が「Let me drive.」、ほかに「trust me.」（説明する言葉がまだ無い考えを、数分だけ止められずに打たせてもらう）。（節の記名：Michael Feathers・Katy Mulvey ほか）
  - 歴史の節（Alistair Cockburn の記名）：Constantine が Plauger のチームでペアを見て「Dynamic Duo」と呼んだ。独立した発明が 3〜4 回あった、という記述。
- 読めなかったもの：Beck・Cunningham 本人の署名つきの定義の文は、この頁には無かった。

### 9. Kent Beck の XP の一次の文章

- *Extreme Programming Explained: Embrace Change*（1999/2000 初版・2004 第 2 版、Addison-Wesley）：**未照合（書籍。Internet Archive は貸し出しだけ〔kentBeck2000・extremeprogrammi00beck〕）**
- Beck, K. (1999). Embracing change with extreme programming. *Computer* 32(10), 70–77. DOI 10.1109/2.796139（Crossref で確認）：**未照合（有料）**。OpenAlex・Semantic Scholar に OA なし。見つかった全文の写し（chsasank.github.io の書き起こし）は個人が上げた写しで、取りに行くと 503 で読めなかった。
- 読めなかったもの：Beck 本人によるペアの役の定義。

### 10. Zuill (2014) Mob Programming – A Whole Team Approach（モブプログラミング）

- 書誌：Zuill, W. (2014). Mob Programming – A Whole Team Approach. Agile 2014 の経験報告。DOI 無し（Crossref で確かめていない）。
- 確かめ先：https://www.agilealliance.org/wp-content/uploads/2015/12/ExperienceReport.2014.Zuill_.pdf （Agile Alliance が公開。p.1 に「Copyright is held by the author.」）。手元：`Zuill_2014_mob_programming_agile2014.pdf`（`check`：書誌と合う。11 頁）
- 照合の状態：**本文照合済**（会議を開く団体の公開版）
- 鍵の文（報告の頁）：
  - p.1 「the whole team works on the same thing, at the same time, in the same space, and at the same computer.」 訳：チーム全員が、同じことを、同じ時に、同じ場で、同じ一台のコンピューターで行う。
  - p.5 「We actually think of learning as a type of contribution to the team.」 訳：学ぶことを、チームへの貢献の一つと考えている。
  - p.5 「we have adopted a principle to always treat each other with kindness, consideration, and respect.」 訳：互いに常に親切・思いやり・敬意をもって接する、という原則を置いた。
  - p.5 「for an idea to go from your head into the computer it MUST go through someone else's hands.」 Driver/Navigators は Llewellyn Falco の「strong」スタイルを採ったもの、と書く（p.5・p.11）。
  - p.6 「The Driver listens to the Navigators, and must trust the Navigators.」 訳：ドライバーはナビゲーターたちに耳を傾け、信頼しなければならない。ドライバーは 15 分ごとにタイマーで交代（p.6）。
- 読めなかったもの：Falco の strong-style の元の文（ブログ。今回は開いていない）。

### 11. 書誌だけ確かめたもの（次の候補）

- Arisholm, E., Gallis, H., Dybå, T., Sjøberg, D. I. K. (2007). Evaluating Pair Programming with Respect to System Complexity and Programmer Expertise. *IEEE Transactions on Software Engineering* 33(2), 65–86. DOI 10.1109/tse.2007.17：**未照合（有料）**。試したのは Crossref・OpenAlex・Semantic Scholar だけで、§5 の決まり 1 の四つに足りない。熟練度の条件を頁つきで言うなら、これの著者の写しを探すのが次。
- Zieris, F., Prechelt, L. (2014). On knowledge transfer skill in pair programming. *ESEM '14*, 1–10. DOI 10.1145/2652524.2652529：**未照合（書誌だけ）**。FU Berlin の写しは探していない。

### ドライバーとナビゲーターの語の出どころ（確かめた範囲）

- 「driver」の語は、読んだ中では C2 の頁の OOPSLA'97 の型「Let me drive.」が最も早い言い回しの記録（頁の中の記述で、日付は二次経由）。Williams の 2000 年の三本は driver と「non-driver／nondriver／the other partner」で、「navigator」の語を使っていない。
- 「Driver/Navigator」を一組の役として書いているのは、読んだ中では Zuill 2014（Falco の strong-style から採った、と本人が書く）と Plonka ら 2015。Chong & Hurlbutt 2007 の要旨は、それを「current conception」と呼び、実際のペアはそれを守らなかったと書く。
- 「navigator」の語を最初に使った原典：**未照合（原典が特定できない）**。

---

### ペアプロで何が起きているか（要点）

原典の記述：
1. 役の分け方：一人が打ち、もう一人が見て欠陥・別の案・戦略を考え、周期的に替わる（Williams ら 2000 p.20）。ただ、職業ペアを 4 か月見た研究では、ペアはその役を守らず、同じ抽象度で同じ役のように動き、熟練の差とキーボードを持つことが決め方を左右した（Chong & Hurlbutt 2007・要旨）。
2. 費用と効き目：学生の実験で、慣れたあとの人時の増えは最小 15%、テストの通過率はペアが高い（Williams ら 2000 pp.22–23）。ただし参加者は自分でペアを選んだ人が多い（同 p.24）。メタ分析では質に小、期間に中の正の効果、工数に中の負の効果で、易しい課題は速いが質が落ち、難しい課題は質が上がるが工数が大きい。研究どうしのばらつきと出版の偏りがある（Hannay ら 2009・要旨のみ）。
3. 学び：二人は刻々と教える側と教わる側を入れ替わる、という実践者の語り（Cockburn & Williams pp.6–7）。録画の分析では、熟練者は六つの教え方を使い分け、初心者が言葉にすることや振り返りは見られず、初心者は運転するときに深く関わり、熟練者も初心者の素朴な問いと自分の説明から学ぶ（Plonka ら 2015 PDF pp.48–52）。
4. 人の間：相手を落胆させたくない「pair-pressure」、信頼する人に見られていることの安心、ぎこちないチームが声に出して考えるうちに互いを信頼し始めた聞き取りの記録が報告されている（Williams 2000 博論 p.39・Cockburn & Williams pp.4, 8）。ただ、これらは聞き取りと自己報告で、チームへの効果の統計的な研究は知らない、と著者自身が書く（同 p.8）。モブでは、互いへの親切・思いやり・敬意を原則として明文化し、学ぶことを貢献とみなす（Zuill 2014 p.5）。

Claude の読み（原典の記述ではない）：
5. 効き目は「二人いること」そのものより、条件（課題の難しさ・熟練の差・誰がキーボードを持つか・自分で選んだか）で変わる、という線が、初期の推進側の報告（Williams ら）と、あとの観察とメタ分析（Chong & Hurlbutt・Plonka ら・Hannay ら）で共通して見える。初期の報告の「楽しさ・信頼」の数字は、自分で選んだ人の自己報告なので、Love駆動開発に足すなら、効果の数字より、Plonka らの「教え方と、双方の学び・負担」の記述のほうが、原典に沿って書きやすい。
