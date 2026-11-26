# 新しく注目されている能力 — 調べの記録（#206 の M4）

独立ページ「新しく注目されている能力」（正本 `READER-emerging-abilities.md`・公開は `reader/emerging-abilities.html`・工事中・noindex）の、問い・読んだ原典・照合の状態・鍵の文・残したことを置く。2026-11-26 に一つの作業セッションで回した。原典の写しを探して鍵の文を抜く作業は、仕事・教育・AI の三つの側に分けてエージェントに頼み、鍵の文は、保存した本文（pdftotext・HTML を文字にしたもの）を grep で引き直して、このセッションが確かめた。

## 答える問い

いま何が能力として呼ばれ始めたか。なぜ今か（#206 の M4）。返すもの：名前の一覧と背景（AI・教育・仕事）。

## ほかのページとの切り分け

- 頭脳の能力は、どう分けられてきたか（M3・`cognitive-abilities.html`）：測られて残った分類（g・Gf/Gc・CHC・実行機能・作業記憶）。このページは中身を写さず、「測られて残った整理は M3」と一文で指す。
- AI の時代に、差になるスキルは何か（`capacity-after-ai.html`）：pjdhiro の問い（量で差がつく）から、道具が引き受けた量の歴史を見て、差になる量を仮説で答える読み物。このページは、その仮説を立てず、仕事・教育・AI の側の機関や研究者が**何に名前を付けたか**と、**なぜ今と書いたか**を、原典の言葉で並べる。差になるかどうかは、あちらへ一文で送る。
- 創造的思考とは（`creative-thinking.html`）：世界経済フォーラム 2025 の創造的思考の置き場と、PISA 2022 の創造的思考の定義はあちらにある。このページは、同じ報告の別の所（伸びるスキルの並び・中核のスキルの並び）だけを使い、創造的思考の定義はあちらを指す。
- 思考を動かす構えと体力（M6・まだページが無い）：やり抜く力・成長の構えのような、構え・気質の名前の中身は M6 に回す。このページでは、社会情動的スキルの名前の並びまでにとどめた。

## pjdhiro の言葉（出どころ）

`docs/rules/stance.md` 1-4 の行（2026-11-25・2026-11-26。#204・#206）と、その原文（`stance-history.md`）。読み物では、見方のカードに次の一つを引いた。

- 2026-11-25（Claude が、ベクトルは歴史の上でも四元数から内積と外積を切り出して生まれた、と返したあとに）：「そそ。四元数の発見までは一次元からの積み上げる演繹力が必要でした。今、四元数が瞬時に計算される世の中で、四元数から演繹することは、能力の違いでなく状況の違いです。演繹力ではなく、前提を問う力の方が優先される。もう、健脚である必要がないように。」 カードでは頭の「そそ。」を外した（合いの手・stance 2-8）。

2026-11-26 の「計算機がこれだけ進化したのだから、もっと違う能力が知力として評価されそうだけども。」は、同じ向きの言葉として記録にだけ置き、カードには引いていない（前後が Claude の評価の仕方への言葉で、読者向けの問いの形に切り出すと場面が落ちるため）。

## 読んだ原典と照合の状態

頁は、その版に刷られた頁。作業論文の版の頁は、雑誌の版の頁と違う。保存した本文は、このセッションの作業場所（手元・git の外）にだけ置いた。

### 仕事の側

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| Autor, Levy & Murnane (2003) The skill content of recent technological change. *QJE* 118(4), 1279–1333. DOI [10.1162/003355303322552801](https://doi.org/10.1162/003355303322552801) | NBER の作業論文 w8337（2001-06）[nber.org の PDF](https://www.nber.org/system/files/working_papers/w8337/w8337.pdf)（NBER が置いた版） | 本文照合済（NBER の作業論文の版。表紙と要旨の頁は文字の符号が壊れていて読めず、要旨は引いていない） | p.5「advances in information technology have sharply lowered the price of accomplishing procedural cognitive tasks (i.e., rules-based reasoning)」。p.6「computers are relative complements to workers engaged in non-routine tasks」「the comparative advantage of labor in a computerized environment is specifically in handling non-routine problems」。p.14 決まった手順でない認知の仕事を「interactive and managerial skills」と「analytic reasoning skills」の二つで測る |
| Frey & Osborne (2013) The Future of Employment: How susceptible are jobs to computerisation?（作業論文 2013-09-17。雑誌の版は *Technol Forecast Soc Change* 114, 254–280, 2017, DOI [10.1016/j.techfore.2016.08.019](https://doi.org/10.1016/j.techfore.2016.08.019)） | [Oxford Martin School の PDF](https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf)（著者の所属の機関が置いた版） | 本文照合済（2013 年の作業論文の版） | p.23 機械学習と移動ロボットが「pattern recognition」で決まった手順でない仕事にも及ぶ。p.24 自動化のボトルネックの三つ「perception and manipulation tasks, creative intelligence tasks, and … social intelligence tasks」。p.26「Human social intelligence is important in a wide range of work tasks, such as those involving negotiation, persuasion and care.」。p.38 米国の雇用の約 47% が高い危険の区分。p.45「they will have to acquire creative and social skills」 |
| Deming (2017) The growing importance of social skills in the labor market. *QJE* 132(4), 1593–1640. DOI [10.1093/qje/qjx022](https://doi.org/10.1093/qje/qjx022) | NBER の作業論文 w21473（2015-08、2017-06 改訂）[nber.org の PDF](https://www.nber.org/system/files/working_papers/w21473/w21473.pdf) | 本文照合済（NBER の作業論文の版） | 要旨「The labor market increasingly rewards social skills. Between 1980 and 2012, jobs requiring high levels of social interaction grew by nearly 12 percentage points」。要旨「social skills reduce coordination costs」。p.3「Our ability to read and react to others is based on tacit knowledge」。p.28「computers are still very poor at simulating human interaction」 |
| World Economic Forum (2016) *The Future of Jobs*（2016-01） | [WEF の PDF](https://www3.weforum.org/docs/WEF_Future_of_Jobs.pdf) | 本文照合済 | p.5 第四次産業革命（人工知能と機械学習・ロボット・3D 印刷 ほか）。p.21 全部の仕事の 36% が「complex problem-solving」を中核のスキルに。p.22「social skills—such as persuasion, emotional intelligence and teaching others—will be in higher demand」。p.23 創造性・数の推論と、能動的な傾聴・批判的思考が伸びる。よく出回る「2020 年に要る上位十のスキル」の順位の図は、報告の本文に見つからなかった（ページには載せない） |
| World Economic Forum (2020) *The Future of Jobs Report 2020*（2020-10） | [WEF の PDF](https://www3.weforum.org/docs/WEF_Future_of_Jobs_2020.pdf) | 本文照合済 | p.5 2025 年までに人と機械の仕事の分け方の移りで 8500 万の仕事が置き換わり、9700 万の役が生まれうる。p.35 批判的思考と問題解決が毎年上位、今年新しく自己管理（能動的な学び・回復力・ストレス耐性・柔軟性）。p.36 図「Top 15 skills for 2025」の 15 の名前 |
| World Economic Forum (2025) *Future of Jobs Report 2025*（2025-01） | [WEF の PDF](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf)（このときは直接取れた。創造的思考とはの記録では 2026-11-17 に 504） | 本文照合済 | p.5「human-centred skills such as resilience, flexibility and agility skills, and leadership and social influence」。p.6「AI and big data top the list of fastest-growing skills」、補う側に creative thinking・resilience, flexibility and agility・curiosity and lifelong learning。p.6 中核のスキルの一番は analytical thinking（10 社のうち 7 社）。p.11 AI と情報処理の技術が 2030 年までに事業を変えると 86%。p.32 生成 AI の長い影響は不確か・2030 年までに中核のスキルの 39% が変わる。p.35 図 3.3 の中核のスキルの並び |
| OECD (2019) *OECD Skills Outlook 2019: Thriving in a Digital World*. DOI [10.1787/df80bc12-en](https://doi.org/10.1787/df80bc12-en) | OECD iLibrary の PDF の [Wayback の記録（2020-05-09）](https://web.archive.org/web/20200509112040id_/https://www.oecd-ilibrary.org/docserver/df80bc12-en.pdf?expires=1589024128&id=id&accname=guest&checksum=0E98D7022A9706B854C706C2F4743B02)（元は出版者 OECD の公開の PDF） | 本文照合済 | p.3「To thrive in a digital workplace, workers need a broad mix of skills – strong cognitive and socio-emotional skills, as well as digital skills.」。p.12 伸びる職は「high-level, non-routine cognitive skills」。p.22 分析の力を補う「problem solving, creative and critical thinking, communication skills and a strong ability to continue learning」 |

### 教育の側

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| OECD (2005) *The Definition and Selection of Key Competencies: Executive Summary*（DeSeCo。頁の印字 27/05/05・最終報告は 2003 年） | oecd.org の PDF の [Wayback の記録（2020-12-09）](https://web.archive.org/web/20201209195551id_/http://www.oecd.org/pisa/35070367.pdf)（今の同じ URL は 403） | 本文照合済 | p.4「A competency is more than just knowledge and skills. It involves the ability to meet complex demands」。p.4 小見出し「Why are competencies so important today?」の下、グローバル化と近代化・変わる技術・大量の情報。p.5 三つの範疇（Use tools interactively・Interact in heterogeneous groups・Act autonomously）。p.5「The need for individuals to think and act reflectively is central to this framework」 |
| OECD (2019) *OECD Learning Compass 2030: Concept Note* | oecd.org の PDF の [Wayback の記録（2021-12-12）](https://web.archive.org/web/20211212083018id_/https://www.oecd.org/education/2030-project/teaching-and-learning/learning/learning-compass-2030/OECD_Learning_Compass_2030_concept_note.pdf) | 本文照合済 | p.4「Global trends like digitalisation, climate change, and advances in artificial intelligence … pose fundamental challenges to both the goals and the methods of education」。p.6 羅針盤のたとえ「to navigate by themselves through unfamiliar contexts」。p.7 コンピテンシーは知識・スキル・態度・価値を含む。p.7 新しい価値を創る・責任を取る・対立と緊張とジレンマを調停する |
| OECD (2019) *Transformative Competencies for 2030: Concept Note* | oecd.org の PDF の [Wayback の記録（2022-01-20）](https://web.archive.org/web/20220120121911id_/https://www.oecd.org/education/2030-project/teaching-and-learning/learning/transformative-competencies/Transformative_Competencies_for_2030_concept_note.pdf) | 本文照合済 | p.4 DeSeCo を足場に「transformative competencies」を定める。p.4「As of this writing, artificial intelligence (AI) cannot compete with humans' capacity to create new value, reconcile tensions or take responsibility.」。p.4 創造的知能の要る仕事は自動化されにくい（Berger と Frey 2015 を引いて） |
| Partnership for 21st Century Skills (2009) *P21 Framework Definitions*（2009-12。ERIC ED519462） | P21 のサイトの PDF の [Wayback の記録（2013-01-17）](https://web.archive.org/web/20130117111459id_/http://p21.org/storage/documents/P21_Framework_Definitions.pdf) と [ERIC の版](https://files.eric.ed.gov/fulltext/ED519462.pdf)（二つは一字も違わない） | 本文照合済 | p.1 批判的思考・問題解決・コミュニケーション・協働を「the essential skills for success in today's world」。p.3 学びと革新のスキルが「separate students who are prepared for a more and more complex life and work environments in the 21st century, and those who are not」。p.3 creativity・critical thinking・communication・collaboration。「4C」という呼び名はこの文書には無い |
| Council of the European Union (2018) Council Recommendation of 22 May 2018 on key competences for lifelong learning (2018/C 189/01). OJ C 189, 1–13 | [EUR-Lex の PDF](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018H0604(01))（EU の公式の版） | 本文照合済 | C 189/1 前文 (4)「competence requirements have changed with more jobs being subject to automation」。C 189/7「In a rapidly changing and highly interconnected world」。附属書の八つ（読み書き・多言語・数学と科学技術工学・デジタル・個人と社会と学ぶことを学ぶ・市民・起業家・文化の自覚と表現）。C 189/10「Personal, social and learning to learn competence is the ability to reflect upon oneself …」。C 189/11「Entrepreneurship competence refers to the capacity to act upon opportunities and ideas」 |
| 中央教育審議会（1996-07-19）「21世紀を展望した我が国の教育の在り方について（第一次答申）」 | 文部科学省の頁の Wayback の記録（[目次](https://web.archive.org/web/20190906230338id_/http://www.mext.go.jp/b_menu/shingi/chuuou/toushin/960701.htm)・[第１部 (2)](https://web.archive.org/web/20200723020939id_/https://www.mext.go.jp/b_menu/shingi/chuuou/toushin/960701d.htm)・[第１部 (3)](https://web.archive.org/web/20191015095341id_/http://www.mext.go.jp/b_menu/shingi/chuuou/toushin/960701e.htm)。今の同じ URL は 404） | 本文照合済（HTML で頁は無く、節で示す） | 第１部 (3)「こうした資質や能力を、変化の激しいこれからの社会を［生きる力］と称することとし」。同じ節「初めて遭遇するような場面でも、自分で課題を見つけ、自ら考え、自ら問題を解決していく資質や能力」。第１部 (2)「変化の激しい、先行き不透明な、厳しい時代」。この答申より前に同じ語が無いかは調べていない（ページでは「初めて名付けた」と書かない） |
| 中央教育審議会（2016-12-21）「幼稚園、小学校、中学校、高等学校及び特別支援学校の学習指導要領等の改善及び必要な方策等について（答申）」 | [文部科学省の PDF](https://www.mext.go.jp/b_menu/shingi/chukyo/chukyo0/toushin/__icsFiles/afieldfile/2017/01/10/1380902_0.pdf) | 本文照合済 | p.9 第４次産業革命と進化した人工知能。p.10「人工知能がいかに進化しようとも、それが行っているのは与えられた目的の中での処理である。」。p.28 三つの柱が OECD の 2030 の枠組みなどで「国際的にも共有されている」。p.28–30 三つの柱の見出し（知識・技能／思考力・判断力・表現力等／学びに向かう力・人間性等） |
| 経済産業省 社会人基礎力に関する研究会（2006-01-20）「中間取りまとめ」 | 経済産業省の PDF の [Wayback の記録（2017-12-08）](https://web.archive.org/web/20171208212043id_/http://www.meti.go.jp:80/policy/kisoryoku/chukanhon.pdf)（今は 404） | 本文照合済 | p.2 90 年代以降の国内市場の成熟化と IT 化。p.4「既存の成功モデルの踏襲」から「新しい価値の創出」へ。p.4「「社会人基礎力」と名付けることが適当である」。p.12 三つの能力（前に踏み出す力・考え抜く力・チームで働く力）と十二の能力要素 |
| 経済産業省・中小企業庁（2018-03）「我が国産業における人材力強化に向けた研究会（人材力研究会）報告書」 | 経済産業省の PDF の [Wayback の記録（2020-04-17）](https://web.archive.org/web/20200417134725id_/https://www.meti.go.jp/report/whitepaper/data/pdf/20180319001_1.pdf) | 本文照合済 | p.4「「AI×データ」に牽引される第四次産業革命」・知識やスキルの「賞味期限」の短期化。p.28「「非認知能力」、「抽象思考力」、「価値判断力」、「課題設定力」、「問題発見能力」、「未来を予想する力」、「編集力」、「金融的投資能力」などをはじめ、昨今論じられている新たな時代に必要とされる能力」。p.29 人生 100 年時代の社会人基礎力と三つの視点（学び・統合・目的） |

### 測られてこなかった面の名前

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| Heckman & Kautz (2012) Hard evidence on soft skills. *Labour Econ* 19(4), 451–464. DOI [10.1016/j.labeco.2012.05.014](https://doi.org/10.1016/j.labeco.2012.05.014) | NBER の作業論文 w18121（2012-06）[nber.org の PDF](https://www.nber.org/system/files/working_papers/w18121/w18121.pdf) | 本文照合済（NBER の作業論文の版） | 要旨「Achievement tests miss, or perhaps more accurately, do not adequately capture, soft skills—personality traits, goals, motivations, and preferences」。p.4「These attributes go by many names in the literature, including soft skills, personality traits, noncognitive skills, noncognitive abilities, character, and socioemotional skills.」。p.6 GED の例。技術や自動化を理由にしていない |
| OECD (2021) *Beyond Academic Learning: First Results from the Survey of Social and Emotional Skills*. DOI [10.1787/92a11084-en](https://doi.org/10.1787/92a11084-en) | [OECD の公式の PDF](https://read.oecd.org/10.1787/92a11084-en?format=pdf) | 本文照合済 | p.7「What we call social and emotional skills in this report may be more familiar to you under a different name: character or personality traits.」。p.7「Creativity and curiosity – again – which are more difficult for machines to replicate」。p.18 五つの群をビッグファイブで束ねる。p.20「The terminology used to name and describe these skills varies widely, yet all terms refer to the same conceptual space」 |

### 計算機と AI の側

| 原典 | 確かめ先 | 状態 | 読んだ所と鍵の文 |
|---|---|---|---|
| Wing (2006) Computational thinking. *Commun ACM* 49(3), 33–35. DOI [10.1145/1118178.1118215](https://doi.org/10.1145/1118178.1118215) | [CMU の著者の頁の PDF](https://www.cs.cmu.edu/afs/cs/usr/wing/www/publications/Wing06.pdf)（誌面と同じ組み） | 本文照合済（著者の置いた版） | p.33「Computational thinking is a fundamental skill for everyone, not just for computer scientists. To reading, writing, and arithmetic, we should add computational thinking to every child's analytical ability.」。p.34「Ubiquitous computing was yesterday's dream that became today's reality; computational thinking is tomorrow's reality.」。Papert の名は本文に無い |
| Wing (2008) Computational thinking and thinking about computing. *Phil Trans R Soc A* 366, 3717–3725. DOI [10.1098/rsta.2008.0118](https://doi.org/10.1098/rsta.2008.0118) | [CMU の著者の頁の PDF](https://www.cs.cmu.edu/afs/cs/usr/wing/www/publications/Wing08a.pdf)（PMC2696102 の XML でも確かめた） | 本文照合済 | p.3717「Computational thinking will influence everyone in every field of endeavour.」。p.3718 芯は抽象（abstraction）の層を定めて扱うこと。p.3721 子どもが毎日計算機器に触れている |
| Wing (2017) Computational thinking's influence on research and education for all. *Ital J Educ Technol* 25(2), 7–14. DOI 10.17471/2499-4324/922（Crossref は返事をせず、OpenAlex で一致） | 出版社の PDF の [Wayback の記録（2025-07-04）](https://web.archive.org/web/20250704205654/https://ijet.itd.cnr.it/index.php/td/article/download/922/874) | 本文照合済 | p.7「computational thinking will be a fundamental skill—just like reading, writing, and arithmetic—used by everyone by the middle of the 21st Century」。p.7 語を自分の語（「what I call "computational thinking"」）として書く。p.8 定義「the thought processes involved in formulating a problem and expressing its solution(s) in such a way that a computer—human or machine—can effectively carry out」 |
| Long & Magerko (2020) What is AI Literacy? Competencies and Design Considerations. *CHI 2020*, 1–16. DOI [10.1145/3313831.3376727](https://doi.org/10.1145/3313831.3376727) | 著者の研究室の企画のサイト（Georgia Tech の AI Unplugged）の camera-ready 版の [Wayback の記録（2025-06-18）](https://web.archive.org/web/20250618030030/https://aiunplugged.lmc.gatech.edu/wp-content/uploads/sites/36/2020/08/CHI-2020-AI-Literacy-Paper-Camera-Ready.pdf) | 本文照合済（ACM の版と頁が同じかは確かめていない） | p.1 AI が利用者向けの技術に組み込まれ、人々の理解は限られる。p.2「We define AI literacy as a set of competencies that enables individuals to critically evaluate AI technologies; communicate and collaborate effectively with AI; and use AI as a tool online, at home, and in the workplace.」。17 の能力 |
| Vuorikari, Kluzer & Punie (2022) *DigComp 2.2: The Digital Competence Framework for Citizens*. EUR 31006 EN. doi 10.2760/115376（Crossref は返事をせず、奥付で確かめた） | [欧州委員会のサイトの JRC の版](https://pact-for-skills.ec.europa.eu/document/download/dee1e64a-37b5-4fed-a970-0fa07c1f720e_en?filename=DigComp%202.2%20The%20Digital%20Competence%20Framework%20for%20Citizens.pdf) | 本文照合済 | p.5 250 を超える例を足した。p.77 AI システムとやりとりする市民の付録（73 の例）。「addresses the topic of citizens interacting with AI systems rather than focusing on the knowledge about Artificial Intelligence per se」 |
| UNESCO (2024) *AI competency framework for students*. DOI [10.54675/JKJB9835](https://doi.org/10.54675/JKJB9835)（CC BY-SA 3.0 IGO） | [Cedefop（EU の機関）が置いた UNESCO の版](https://www.cedefop.europa.eu/files/unesco_ai_competency_framework_for_students_.pdf)（unesdoc は確認画面） | 本文照合済 | 要約（PDF の 3 枚目）「12 competencies across four dimensions: Human-centred mindset, Ethics of AI, AI techniques and applications, and AI system design」。序文（PDF の 5 枚目）2022 年 11 月の生成 AI の公開。p.12 学校の AI のカリキュラムを持つ国は 15 ほど |
| UNESCO (2024) *AI competency framework for teachers*. DOI [10.54675/ZJTE2084](https://doi.org/10.54675/ZJTE2084) | [UCL の機関リポジトリの UNESCO の版](https://discovery.ucl.ac.uk/id/eprint/10196729/1/UNESCO_AI_CFT_Final.pdf) | 本文照合済 | p.13 2022 年に教員向けの AI の枠組みを持つ国は七つ。p.21 五つの面。p.22 十五の区画。要約と本文で五つ目の面の名前が違う（professional learning／professional development）ので、ページには面の名前を並べない |
| OECD & European Commission (2026) *Empowering Learners for the Age of AI: An AI Literacy Framework*（確定版）. DOI [10.1787/65cd27d4-en](https://doi.org/10.1787/65cd27d4-en)（CC BY 4.0） | [枠組みの公式のサイトの PDF](https://ailiteracyframework.org/pdfs/framework_pdf/AILF_en.pdf) | 本文照合済（頁は刷りの頁。「Reflective」の段だけ PDF の 26 枚目） | p.5「AI literacy represents the technical knowledge, durable skills and future-ready attitudes required to thrive in a world influenced by AI.」。p.5「AI literacy is different from AI tool use.」。p.7「For learners who cannot remember a time devoid of these technologies」。四つの領域（Engage with AI・Create with AI・Manage AI・Shape AI）。態度の「Reflective」：「Learners question the assumptions and narratives surrounding AI use」（PDF の 26 枚目） |

WEF 2025 の減るスキル（p.38）：「skills like reading, writing, and mathematics; manual dexterity, endurance, and precision; and dependability and attention to detail have seen the largest decline in projected future demand」。雇い主の見込みの差し引きで、測った結果ではない。

## 照らせなかったもの

- Binkley ら (2012) "Defining twenty-first century skills"（Griffin・McGaw・Care 編『Assessment and Teaching of 21st Century Skills』Springer, pp.17–66, DOI 10.1007/978-94-007-2324-5_2）：未照合（有料）。前の版の白書（ATC21S Draft White Paper 1, 2010-01）は計画のサイトの Wayback の記録で本文を読んだ（十のスキルを四つの群に分ける）が、表紙と各頁に「NOT for quotation in this draft form」「not for formal citation」とあるので、ページには載せない。
- 四本の論文の雑誌の版（QJE 2003・TFSC 2017・QJE 2017・Labour Economics 2012）：有料なので取っていない。どれも作業論文の版で読んだ。
- WEF 2016 の「2020 年に要る上位十のスキル」の順位の図：報告の本文に見つからない。WEF のブログの図と思われるが、確かめていない。
- PISA 2025 の「Learning in the Digital World」の枠組み（確定版は *PISA 2025 Assessment and Analytical Framework*, DOI 10.1787/86c36975-en）：未照合（確認画面。oecd.org が 403、第二稿の URL は 404。Wayback はまだ引いていない）。
- AILit の案（2025-05）：載せてよい写しが見つからず、確定版（2026）で読んだ。
- Papert (1980) *Mindstorms*：未照合（書籍。Internet Archive は貸し出しだけ）。Wing は 2006・2008・2017 のどれでも Papert を挙げていない。
- OECD の 2030 の枠組みの日本語の訳（文部科学省・国立教育政策研究所の仮訳）：探していない。訳語（「変革を起こすコンピテンシー」など）はページでは Claude の訳として書いた。

## 並べ方（Claude がしたこと）

- 章は、名前が出てきた側（仕事・雇い主の見込み・教育・日本の教育と職場・計算機と AI・名前の付け直し）で分けた。どの原典も、この分け方はしていない。
- 「なぜ今」の三つの読み（機械が引き受けた所の裏返し・速い変化と先の読めなさ・機械と一緒に働くための力）と、名前の付け直しを四つ目に置く読みは、このページの仮説として書いた。
- pjdhiro のカード（健脚の行）への答えの段は、原典の文（AILit の Reflective・中教審 2016 の「与えられた目的の中での処理」）を並べたもので、どの原典も pjdhiro の見方を言っているわけではない、と分かる形で書いた。WEF 2025 の減るスキルを健脚のたとえに当てる文は、2026-11-26 に外した（下の節）。

## 残したこと

- 名前どうしの重なり（同じ働きに別の名前が付いているのか）を、定義の文で一つずつ比べることはしていない。M6（構えと体力）・M5（身体知）で、それぞれの名前の中身を読むときの足場にする。
- 日本の大学教育の「学士力」（2008）、厚生労働省の「就職基礎能力」（2004）、内閣府の「人間力」（2003）など、日本のほかの名前は今回は照らしていない。

## 2026-11-26 のレビューでの直し

原典の本文（元の作業セッションが保存した写し）で引き直してから直した。

- WEF 2025 の「減るスキル」：p.38 の「Comparisons with previous editions … have seen the largest decline in projected future demand」は前の版と比べた見込みの下がり。p.37 の図と本文では、純減は手先の器用さ・持久力・正確さ（−24・24% が減ると回答）と読み・書き・数学（−4）だけで、信頼できることと細部への注意は +12、読み・書き・数学と並んで「among the most stable skills」。読み物は「最も減ると見込まれた」と向きを取り違えていたので、三つを書き分けた。これを健脚のたとえに字どおり当てていた文は外した。
- WEF 2025 の中核のスキルの一番は、2020・2023 と同じく分析的思考（p.35）。39% は 2023 の 44% から下がった数（p.32）。「なぜ今」の段で、2016 の中核と 2025 の伸びるスキルという違う物差しを並べていたのを直し、両方を足した。
- 欧州連合の勧告の前文 (4) の三つ目の理由（回復力と変化に適応する力のための起業家・社会・市民のコンピテンシー）が落ちていた。足し、「なぜ今」の二つ目にも置いた。
- 中教審 2016 の三つの柱の出発点は学力の三要素と海外の事例の分析（pp.28–29）。AI の段は答申の時代の見立て。一覧の右の列と本文に書き分けた。
- 中教審 1996 の引用「変化の激しい、先行き不透明な、厳しい時代」を原文の字に直した。
- Frey & Osborne の 47% に、時期を定めない・技術の上での見積もり（p.38）を、UNESCO の 15 か国に、190 か国の調査と「作っているか、使っている」（p.12）を、DeSeCo の定義に「in a particular context」「psychosocial resources」を、オーターらに 1960〜1998 年の米国のデータを足した。
- 一覧の列「名前を付けた所」を「このページで読んだ原典」に替えた。ヘックマンとカウツは名前を並べた側、ロングとマジェルコはすでにある研究を受けて定義した側で、名付けた側ではない。
- 「どの枠組みでも単独では置かれず」は、ウィングの計算論的思考が一つで出されているので「読んだ枠組みの多くで」に。WEF の並びは 2025 年の中核のスキルの並びと明記。人材力研究会の課題設定力・問題発見能力は「昨今論じられている」名前として独立に並ぶので「ほかの名前の一部」「測られていない」の言い切りを外した。
- 今の答えの「なぜ今」を、本文と同じ四つにそろえた。
