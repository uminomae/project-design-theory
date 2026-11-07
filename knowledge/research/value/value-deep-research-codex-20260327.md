# 「価値とは」広域見取り図

Issue: #33  
作成日: 2026-03-27  
作成: Codex (`GPT-5`)  
入力: [PROMPT.md](/knowledge/research/value/PROMPT.md)

このレポートは、2026-03-27 時点で確認できた主要辞典・SEP・Britannica・大学/学会/公的機関資料・古典的文献への入口をもとに、「価値」という語の全体像を浅く広く整理した見取り図である。領域ごとに定義が衝突する場合は統一せず、「この領域ではこう使う」と分けて書く。URL はできるだけ一次資料または標準的資料を優先し、直接の本文確認が難しいものは Google Scholar 検索リンクを付した。

## A. まず全体要約

「価値」は一語だが、一つの対象を指す単純な語ではない。経済学では価格や交換と結びつく使用価値・交換価値・効用の問題になり、哲学では何が善いのか、何がそれ自体として価値をもつのかという価値論になる。社会学では価値観・規範・承認・地位の秩序として現れ、人類学では贈与・儀礼・象徴交換のなかで何が社会的に重みをもつかが問われる。宗教学では聖性・救済・徳のように、取引に還元できない究極的価値が前景化する。法学・政治学では自由・平等・尊厳・公共性のような公的に正当化される価値が主題になり、教育学ではどのような人間・市民・態度を望ましいものとして育てるかが中心になる。AI/HCI では human values や value alignment が論じられるが、実装ではしばしば preference や reward へ落とし込まれ、そこに概念上のズレが生じる。認知科学と神経科学では value は subjective value, valuation, reward prediction, salience として操作的に扱われるが、それでも「その人にとってなぜ大事なのか」という生きられた重要性を言い切るわけではない。

日本語の「価値」は、この広がりをかなり一語で抱え込む。英語でも singular の `value` は広いが、実際の使い分けでは `values`（価値観・規範）、`worth`（値打ち・見合うだけの価値）、`utility`（有用性・効用）、`significance`（意義）、`importance`（重要性）、`price`（価格）へ分かれやすい。したがって「価値がある」を英語にするときも、対象が expensive なのか、beneficial なのか、meaningful なのか、desirable なのかで `valuable`, `worthwhile`, `worth it`, `has value`, `matters`, `is useful` を使い分ける必要がある。全体像としては、「価値」は対象の内側に固定的にあるものでも、主体の気分だけでもなく、対象・主体・社会制度・評価基準・文脈の関係のなかで立ち上がる多層概念である、と捉えるのが最も無理の少ない見取り図である。

## B. 用語マップ

### B-1. 日本語と英語の対応表

| 語 | 近い対応 | 短い定義 | ニュアンス差・注意点 |
|---|---|---|---|
| 価値 | `value` | 値打ち、重要さ、役立ち、規範的な良さをまたぐ広い語 | 日本語の守備範囲はかなり広く、英語では 1 語で足りないことが多い |
| 価値観 | `values`, `sense of values` | 何を大切だと思うかという持続的な志向 | `values` は複数形で、単数 `value` よりも信念体系に近い |
| 値打ち | `worth`, `value`, ときに `merit` | そのものに見合うだけの良さや相応しさ | 「割に合う」「それだけのものがある」という感触が強い |
| 意義 | `significance`, ときに `meaning` | なぜ重要なのか、どんな意味をもつのか | `value` よりも「意義づけ」に寄る |
| 重要性 | `importance` | どの程度大事か、優先順位が高いか | 規範・価格・効用を含まず、「重み」に焦点がある |
| 有用性 | `utility`, `usefulness` | 役に立つこと、役立ちの度合い | 経済学の `utility` は日常語の「役に立つ」より形式的 |
| 評価 | `evaluation`, `assessment`, `valuation` | 価値を見積もる行為や判断 | 価値そのものではなく、価値を扱うプロセス |
| merit | 長所、功績、正当性 | 何かが称賛や報酬に値する理由 | 日本語の「メリット」は利点寄りで、英語 `merit` の「値する」感は弱い |
| price | 価格、値段 | 貨幣額で表現された交換上の値 | `value` の一部にすぎず、価値全体ではない |
| valuable | 価値がある、高価な | 役に立つ、重要、高価、貴重 | 文脈によって「高価」と「有益」が分かれる |
| worthwhile | やる価値がある | 時間や労力をかけるだけの意味がある | `valuable` よりも行為・経験に使いやすい |
| worth it | 割に合う、やる価値がある | 費用・手間・リスクに見合う | 交換・比較の感触が強い |
| has value | 価値をもつ | 抽象的に価値がある | 哲学・経済・政策で使いやすいが、日常語としては少し硬い |

出典入口: [Kotobank 価値](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651), [Kotobank 価値観](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4%E8%A6%B3-460652), [Kotobank 値打ち](https://kotobank.jp/word/%E5%80%A4%E6%89%93%E3%81%A1-590579), [Cambridge value](https://dictionary.cambridge.org/dictionary/english/value), [Cambridge values](https://dictionary.cambridge.org/dictionary/english/values), [Cambridge worth](https://dictionary.cambridge.org/dictionary/english/worth), [Cambridge utility](https://dictionary.cambridge.org/dictionary/english/utility), [Cambridge significance](https://dictionary.cambridge.org/dictionary/english/significance), [Cambridge importance](https://dictionary.cambridge.org/dictionary/english/importance), [Cambridge merit](https://dictionary.cambridge.org/dictionary/english/merit), [Cambridge price](https://dictionary.cambridge.org/dictionary/english/price), [Cambridge valuable](https://dictionary.cambridge.org/dictionary/english/valuable)

### B-2. 「価値がある」をどう言い分けるか

- `valuable`: 対象自体が貴重・有益・高価である。物や情報、時間、人材に使いやすい。
- `worthwhile`: 行為や経験に「やるだけの意味がある」。学習、挑戦、活動に向く。
- `worth it`: 手間・費用・痛みとの比較で「割に合う」。
- `has value`: 抽象的・分析的な言い方。経済・哲学・政策文脈で使いやすい。
- `matters` / `is important`: 「大事だ」「重要だ」に近い。価値より優先順位や重みを示す。
- `is useful`: 「役に立つ」。有用性には近いが、規範的価値や意味は含まない。

### B-3. 概念史の入口

- 英語 `value` はラテン語 `valere`（強い、価値がある）に遡る。`worth` は古英語 `weorth` 系で、より「値する」「見合う」に近い。`merit` はラテン語 `merere`（受け取るに値する、稼ぐ）に由来する。[Etymonline value](https://www.etymonline.com/word/value), [Etymonline worth](https://www.etymonline.com/word/worth), [Etymonline merit](https://www.etymonline.com/word/merit)
- 日本語の近代的な「価値」は、西洋語 `value` / ドイツ語 `Wert` の翻訳語として経済学・哲学とともに整理された面が大きい。コトバンク系の語誌では 1878 年の用例が見えるが、近代日本における概念史全体は別途確認が必要である。[Kotobank 価値](https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651)

### B-4. 翻訳で誤解が起こりやすい代表例

- `human values` は通常「人間の価値」ではなく「人が大切にする価値観」。
- `social value` は「社会的価値」だが、文脈によって公共価値、社会的便益、社会的承認価値のどれもありうる。
- `significance` はしばしば「意義」または「重要性」であり、必ずしも「価値」ではない。
- `utility` は「有用性」や「効用」であって、「価値」一般ではない。
- `worth it` は「価値がある」と訳せるが、実際には「コストに見合う」が中心で、倫理的価値や人生の意味までは含まない。
- `merit` は「功績」「長所」「値するだけの理由」に近く、単純な `value` の置換語ではない。

## C. 領域別一覧

### 経済学

- その領域での「価値」の意味: 古典派では使用価値と交換価値の区別が起点で、マルクスでは交換価値の背後に労働価値の問題が立ち上がる。新古典派以降は価値は主に主観的効用と選好の順序として扱われ、行動経済学では参照点・損失回避・文脈依存を含む主観的価値へと再記述される。
- 何が価値か / どう測るか / 典型問い: 財・サービス・将来便益・リスク・選択肢が価値の対象になる。価格、支払意思額、需要、効用関数、選択実験で測り、「価格は価値を表すのか」「価値は労働に根ざすのか選好に根ざすのか」「効用は幸福と同じか」が典型問い。
- 代表対立軸・キーワード: 使用価値 / 交換価値、労働価値説 / 限界効用、客観価値 / 主観価値、規範理論 / 記述理論。
- 代表的人物・理論: Adam Smith, Karl Marx, W.S. Jevons, Carl Menger, Kahneman & Tversky。出典入口: [Wealth of Nations (Project Gutenberg)](https://www.gutenberg.org/files/3300/3300-h/3300-h.htm), [Marx Capital Vol.1 Ch.1](https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm), [Jevons Google Scholar](https://scholar.google.com/scholar?q=William+Stanley+Jevons+Theory+of+Political+Economy), [Prospect Theory PDF](https://www.uzh.ch/cmsssl/slaw/dam/jcr:00000000-64a0-1db1-0000-00003b7ec704/10.18-kahneman-tversky-79.pdf)

### 経営学・マーケティング

- その領域での「価値」の意味: 中心は customer value で、「顧客が受け取る便益」と「支払うコスト・犠牲」の関係として理解される。そこから value proposition、提供価値、顧客経験価値、ブランド価値、企業価値へ分岐する。
- 何が価値か / どう測るか / 典型問い: 顧客にとっての便益、ブランドが生む知覚、継続購買、顧客生涯価値などが対象。支払意思額、満足度、継続率、CLV、ブランド想起やプレミアムで測り、「顧客価値と企業価値はどう結びつくか」「価値は製品に内在するのか共創されるのか」が問われる。
- 代表対立軸・キーワード: benefits vs sacrifices, value creation vs value capture, product value vs experience value, customer equity, brand equity。
- 代表的人物・理論: Zeithaml, Keller, Aaker, Lanning。出典入口: [Zeithaml 1988 DOI](https://doi.org/10.2307/1251446), [Keller 1993 DOI](https://doi.org/10.1177/002224299305700101), [Lanning value proposition Google Scholar](https://scholar.google.com/scholar?q=Michael+Lanning+value+proposition), [Customer lifetime value Google Scholar](https://scholar.google.com/scholar?q=customer+lifetime+value+marketing)

### 倫理学・哲学

- その領域での「価値」の意味: 価値論（axiology / value theory）は、何が善いのか、何がそれ自体として価値をもつのか、価値は主観か客観か、複数の価値は比較可能かを問う。善、美、真、幸福、尊厳などが中心対象になる。
- 何が価値か / どう測るか / 典型問い: 価値あるもののリスト化、理由づけ、反省的均衡、思考実験、規範理論の比較で扱う。「intrinsic value と instrumental value はどう違うか」「価値は事実から導けるか」「価値多元主義は成立するか」が典型問い。
- 代表対立軸・キーワード: intrinsic / instrumental, objective / subjective, monism / pluralism, fact / value distinction。
- 代表的人物・理論: Moore, Ross, Frankfurt, Berlin ほか。出典入口: [SEP Value Theory](https://plato.stanford.edu/entries/value-theory/), [SEP Intrinsic vs. Extrinsic Value](https://plato.stanford.edu/entries/value-intrinsic-extrinsic/), [SEP Value Pluralism](https://plato.stanford.edu/entries/value-pluralism/), [Britannica axiology](https://www.britannica.com/topic/axiology)

### 美学・芸術

- その領域での「価値」の意味: 美的価値は、美しさだけでなく、形式、表現、感情喚起、独創性、歴史的位置、文化的意義まで含む。芸術的価値は市場価格と一致せず、批評・制度・鑑賞経験・歴史的文脈が絡む。
- 何が価値か / どう測るか / 典型問い: 作品、スタイル、経験、文化遺産が対象。批評、キュレーション、受容史、保存、オークション価格などで見えるが、測定は常に部分的である。「美は主観か客観か」「高値の作品は芸術的に高価値か」「文化的価値は誰が決めるか」が問われる。
- 代表対立軸・キーワード: beauty / artistic value, aesthetic judgment, canon, authenticity, cultural heritage。
- 代表的人物・理論: Kant, Dewey, Bourdieu ほか。出典入口: [Britannica aesthetics](https://www.britannica.com/topic/aesthetics), [Aesthetic value Google Scholar](https://scholar.google.com/scholar?q=aesthetic+value+philosophy), [UNESCO culture/heritage values Google Scholar](https://scholar.google.com/scholar?q=UNESCO+cultural+heritage+values)

### 社会学

- その領域での「価値」の意味: 価値は、個人の好みより広く、共同体が何を望ましいとみなすかという shared values と norms の秩序に関わる。加えて、承認・地位・名誉・象徴資本としての価値も重要になる。
- 何が価値か / どう測るか / 典型問い: 価値観、規範、地位、社会的承認、ライフスタイルが対象。価値観調査、態度尺度、階層分析、文化資本分析で扱い、「個人の価値観は社会構造にどう組み込まれるか」「何が高ステータスの価値として承認されるか」が問われる。
- 代表対立軸・キーワード: values / norms, recognition, status, symbolic capital, social distinction。
- 代表的人物・理論: Durkheim, Weber, Schwartz, Bourdieu。出典入口: [Schwartz overview DOI](https://doi.org/10.9707/2307-0919.1116), [Schwartz original Google Scholar](https://scholar.google.com/scholar?q=Shalom+Schwartz+basic+human+values+1992), [Bourdieu Forms of Capital PDF](https://home.iitk.ac.in/~amman/soc748/bourdieu_forms_of_capital.pdf)

### 文化人類学

- その領域での「価値」の意味: 価値は、交換・贈与・儀礼・象徴秩序のなかで何が重みをもつかという問題として扱われる。貨幣的価格だけでなく、名誉、返礼、関係、社会的全体への組み込み方が価値を構成する。
- 何が価値か / どう測るか / 典型問い: 贈与、物、儀礼、関係、義務、象徴が対象。民族誌、交換過程の記述、象徴分析で扱い、「商品と贈与はどう違うか」「価値は関係のなかでどう生成されるか」が問われる。
- 代表対立軸・キーワード: gift / commodity, reciprocity, symbolic exchange, total social fact。
- 代表的人物・理論: Mauss, Sahlins, Graeber。出典入口: [Mauss The Gift (Archive)](https://archive.org/details/essaisurledonforme0000maus), [Graeber book page](https://davidgraeber.org/books/toward-an-anthropological-theory-of-value/), [Graeber Google Scholar](https://scholar.google.com/scholar?q=Toward+an+Anthropological+Theory+of+Value)

### 宗教学・思想史

- その領域での「価値」の意味: ここでの価値は、聖性、救済、徳、罪、究極目的のように、取引や効用では測りきれない ultimate worth として現れる。宗教的価値はしばしば「何を犠牲にしても守るべきもの」を示す。
- 何が価値か / どう測るか / 典型問い: 聖なるもの、救済、徳、戒律、禁忌、献身が対象。教義、儀礼、共同体実践、殉教や禁忌の強さなどで現れ、「聖なる価値は交渉可能か」「宗教的価値と世俗的価値はどう衝突するか」が問われる。
- 代表対立軸・キーワード: sacred / profane, salvation, virtue, transcendence, taboo。
- 代表的人物・理論: Durkheim, Weber, Otto, virtue ethics 系譜。出典入口: [Britannica sacred](https://www.britannica.com/topic/sacred), [SEP Virtue Ethics](https://plato.stanford.edu/entries/ethics-virtue/), [Sacred values Google Scholar](https://scholar.google.com/scholar?q=sacred+values+religion+anthropology)

### 法学・政治学

- その領域での「価値」の意味: 価値は、自由、平等、尊厳、人権、法の支配、公共性のような、公的に正当化される原理として扱われる。政治学ではこれに public value や common good が加わる。
- 何が価値か / どう測るか / 典型問い: 権利、制度、政策目的、憲法原理が対象。司法審査、衡量、立法・行政評価、熟議で扱い、「自由と平等が衝突したらどうするか」「市場価値と公共価値はどう違うか」が問われる。
- 代表対立軸・キーワード: liberty / equality, rights, dignity, constitutional values, public value。
- 代表的人物・理論: Rawls, Dworkin, Mark Moore ほか。出典入口: [Universal Declaration of Human Rights](https://www.un.org/en/about-us/universal-declaration-of-human-rights), [Constitutional values Google Scholar](https://scholar.google.com/scholar?q=constitutional+values+law), [Public value Google Scholar](https://scholar.google.com/scholar?q=Mark+Moore+public+value)

### 教育学

- その領域での「価値」の意味: 教育における価値は、知識の伝達だけでなく、どのような態度・人格・市民性・関係性を望ましいものとして育てるかに関わる。ここでは value education や moral/civic education が中心になる。
- 何が価値か / どう測るか / 典型問い: 態度、性向、協働、責任、ウェルビーイング、エージェンシーが対象。カリキュラム、学校文化、ルーブリック、行動観察、自己省察で扱い、「共通価値を教えることは教化か」「多元社会で何を共有価値とするか」が問われる。
- 代表対立軸・キーワード: values education, character formation, civic education, student agency, well-being。
- 代表的人物・理論: Dewey, Kohlberg ほか。出典入口: [OECD Learning Compass 2030](https://www.oecd.org/education/2030-project/teaching-and-learning/learning/), [UNESCO values education Google Scholar](https://scholar.google.com/scholar?q=UNESCO+values+education)

### 情報学・AI・HCI

- その領域での「価値」の意味: HCI では privacy, autonomy, dignity, accessibility のような human values を設計にどう埋め込むかが中心で、AI では value alignment が「機械が人間にとって望ましい行動をとるには何を学習すべきか」という問題になる。ただし実装では values が preference や reward に圧縮されやすい。
- 何が価値か / どう測るか / 典型問い: 人間の価値観、ステークホルダー間の価値衝突、学習目標、報酬関数が対象。参与設計、ステークホルダー分析、preference learning、reward modeling、監査で扱い、「whose values?」「観測された選好は価値そのものか」「価値衝突をどう集約するか」が問われる。
- 代表対立軸・キーワード: value alignment, human values, preference, reward, corrigibility, Value Sensitive Design。
- 代表的人物・理論: Friedman, Borning, Hadfield-Menell, Russell。出典入口: [Value Sensitive Design](https://vsdesign.org/), [CIRL arXiv](https://arxiv.org/abs/1606.03137), [AI values/alignment Google Scholar](https://scholar.google.com/scholar?q=AI+values+alignment)

### 認知科学・認知心理学

- その領域での「価値」の意味: 価値は、選択肢がその主体にとってどれだけ魅力的かを統合する subjective value として扱われる。報酬、コスト、確率、遅延、社会的文脈がまとめて valuation の入力になる。
- 何が価値か / どう測るか / 典型問い: 選択肢、報酬、コスト、遅延、社会的評価が対象。選択課題、反応時間、主観評定、強化学習モデル、損失回避パラメータで測り、「価値は安定属性か文脈効果か」「意味やアイデンティティは主観価値に組み込めるか」が問われる。
- 代表対立軸・キーワード: subjective value, valuation, decision making, reward prediction, context dependence。
- 代表的人物・理論: Kahneman, Tversky, Rangel, Glimcher。出典入口: [Prospect Theory PDF](https://www.uzh.ch/cmsssl/slaw/dam/jcr:00000000-64a0-1db1-0000-00003b7ec704/10.18-kahneman-tversky-79.pdf), [Reward signals (Scholarpedia)](https://www.scholarpedia.org/article/Reward_signals), [Value-based decision making Google Scholar](https://scholar.google.com/scholar?q=value-based+decision+making+subjective+value)

### 神経科学・神経現象学

- その領域での「価値」の意味: 神経科学では value は、報酬予測誤差、期待価値、インセンティブ・サリエンス、情動的有意味性を担う神経過程として研究される。神経現象学では「価値」が標準化された中心語というより、一人称の生きられた重要性と神経ダイナミクスをどう結びつけるかという方法論的問題として現れる。
- 何が価値か / どう測るか / 典型問い: 予測誤差、サリエンス、報酬、快不快、身体状態、主観報告が対象。神経活動計測、病変研究、モデル化、一人称報告の連結で扱い、「reward と significance は同じか」「salience と value はどう違うか」「生きられた価値を neural signal に還元できるか」が問われる。
- 代表対立軸・キーワード: valuation, salience, reward, affective significance, neurophenomenology, expected free energy。
- 代表的人物・理論: Schultz, Berridge, Friston, Varela。出典入口: [Reward signals (Scholarpedia)](https://www.scholarpedia.org/article/Reward_signals), [Active Inference (MIT Press OA)](https://direct.mit.edu/books/oa-monograph/5299/Active-InferenceThe-Free-Energy-Principle-in-Mind), [Varela neurophenomenology Google Scholar](https://scholar.google.com/scholar?q=Francisco+Varela+neurophenomenology)

### 臨床心理・精神分析・人間性心理学

- その領域での「価値」の意味: 臨床では「その人にとって何が大事か」「何が生を方向づけるか」が実践上の価値になる。人間性心理学や ACT では values は選ばれた生の方向として明示されるが、精神分析ではしばしば価値という語より desire, ideal, conflict の語で論じられる。
- 何が価値か / どう測るか / 典型問い: 欲求、意味、自己像、関係、行動の方向性が対象。価値明確化、面接、ナラティブ、symptom-function の観察で扱い、「症状の軽減と価値に沿った生は同じか」「自分の価値と内面化された規範をどう区別するか」が問われる。
- 代表対立軸・キーワード: values clarification, self-actualization, meaning, desire, valued action。
- 代表的人物・理論: Rogers, Maslow, Frankl, Hayes。出典入口: [ACT overview](https://contextualscience.org/act), [Frankl Google Scholar](https://scholar.google.com/scholar?q=Viktor+Frankl+meaning+value), [Maslow self-actualization Google Scholar](https://scholar.google.com/scholar?q=Maslow+self-actualization)

### 環境倫理・生態学

- その領域での「価値」の意味: 自然の価値は、資源やサービスとしての道具的価値だけでなく、生物や生態系がそれ自体でもつ内在的価値、そして人と自然の関係のなかに成立する relational value として論じられる。
- 何が価値か / どう測るか / 典型問い: 種、生態系、景観、関係性、将来世代が対象。生態系サービス評価、費用便益分析、多基準評価、熟議的評価で扱い、「自然を貨幣換算してよいか」「人間中心主義を超えられるか」「関係的価値はどう記述するか」が問われる。
- 代表対立軸・キーワード: intrinsic / instrumental / relational, ecosystem services, biodiversity, stewardship。
- 代表的人物・理論: Callicott, O'Neill, IPBES 系譜。出典入口: [IPBES Values Assessment](https://ipbes.net/the-values-assessment), [TEEB](https://teebweb.org/), [SEP Environmental Ethics](https://plato.stanford.edu/entries/ethics-environmental/)

### メディア・消費文化

- その領域での「価値」の意味: ここでは価値は、使用価値だけでなく、記号価値、体験価値、承認価値、注意の価値として現れる。人はモノそのものだけでなく、それが示す地位・趣味・所属・物語を消費する。
- 何が価値か / どう測るか / 典型問い: ブランド、プラットフォーム、体験、可視性、承認が対象。エンゲージメント、コミュニティ、プレミアム価格、模倣・差異化、可視性で見えるが、「なぜ人は utility より sign を買うのか」「承認はどのように価値へ変換されるか」が問われる。
- 代表対立軸・キーワード: sign value, symbolic value, experience economy, recognition, attention economy。
- 代表的人物・理論: Baudrillard, Bourdieu, Pine & Gilmore。出典入口: [Baudrillard sign value Google Scholar](https://scholar.google.com/scholar?q=Baudrillard+sign+value), [Experience economy Google Scholar](https://scholar.google.com/scholar?q=Pine+Gilmore+experience+economy), [Bourdieu Forms of Capital PDF](https://home.iitk.ac.in/~amman/soc748/bourdieu_forms_of_capital.pdf)

## D. 横断論点

| 論点 | 見取り図 | 強く出る領域 | 補足 |
|---|---|---|---|
| 価値は客観的か主観的か | 両極ではなく、現実には「対象・主体・関係・制度」の関係論で捉える立場が多い | 哲学、経済学、環境倫理、認知科学 | 哲学では客観主義/主観主義の対立が明示的だが、環境倫理や社会科学では relational value が増えている |
| 価値は発見するものか与えるものか | 自然・真理・神聖のように「見出す」語りと、評価者・共同体が「付与する」語りが併存する | 哲学、宗教、芸術、AI/HCI | 実務では価値を「設計する」「提案する」とも言うため、付与だけでも発見だけでも足りない |
| 価値と価格の違い | 価格は価値の貨幣的表現の一部でしかない | 経済学、マーケティング、芸術、環境 | 芸術・自然・信頼・尊厳のように、価格化しにくい価値が常に残る |
| 価値と意味の違い | 価値は「なぜ大事か」、意味は「何を表しどう経験されるか」に寄る | 哲学、宗教、臨床、神経現象学 | `significance` は両者をまたぐため翻訳が揺れやすい |
| 価値と評価の違い | 価値は対象や関係の worth、評価はそれを見積もる行為や制度 | 経済学、教育、AI、法 | `valuation` は評価行為だが、実務では value と混同されやすい |
| 価値と欲望・快楽・報酬の違い | 欲望や快楽は価値の一部の入力であり、価値全体ではない | 認知科学、神経科学、臨床、哲学 | reward signal は「主観的価値」の代理になりうるが、徳・意味・義務までは表しきれない |
| 価値と規範の関係 | 価値は「何が良いか」、規範は「何をすべきか」へ傾く | 倫理学、法学、教育、宗教 | 価値が規範を支え、規範が価値を制度化する |
| 個人の価値と社会の価値が衝突するとき | 承認、規範、制度、法、アイデンティティのレベルで摩擦が起こる | 社会学、法学、政治学、臨床 | 逸脱・抵抗・少数者保護・自己実現の問題がここに集まる |
| 価値は比較可能か | 通約できる価値とできない価値がある | 哲学、環境倫理、公共政策 | 単一尺度化は便利だが、神聖・尊厳・生態系・文化遺産では抵抗が強い |

### D-2. 日本語と英語のズレを一言でいうと

- 日本語の「価値」は英語の `value` より広く使われることが多い。とくに `価値観`, `意義`, `重要性`, `有用性`, `値打ち` を一語に吸い込みやすい。
- 逆に英語の `values` は日本語の「価値」より狭く、「価値観」「大切にする原則」に近い。
- `value` は日本語の「価値」と対応するが、文脈によっては `price`, `worth`, `utility`, `significance`, `importance` に分解した方が誤解が少ない。
- AI 文脈の `alignment with human values` は、日本語で「人間の価値との整合」と直訳すると不自然で、実際には「人が大切にする価値観や規範との整合」に近い。
- 「価値がある」「大事」「意味がある」「役に立つ」を英語で全部 `valuable` に寄せると、規範・意義・有用性・コスト比較の差が消える。

## E. 今後の深掘り候補

1. `subjective value` と「生きられた意味」は同じか  
   認知科学の主観価値と、臨床・現象学の「その人にとっての意味あること」がどこで重なり、どこで切れるか。
2. reward prediction error は規範的価値を扱えるか  
   神経科学の報酬学習モデルが、徳・義務・尊厳・聖性のような価値をどこまで表現できるか。
3. active inference の `epistemic value` と教育・好奇心の接続  
   知ること自体の価値を、学習・探究・教育学とどう橋渡しできるか。
4. sacred values と経済的通約不可能性  
   宗教・政治・環境で「売れない価値」がなぜ出てくるのかを、法と行動科学でつなぐ。
5. Schwartz の価値理論と神経価値計算の接続  
   社会心理学の価値観地図が、脳内 valuation とどう接続しうるか。
6. Bourdieu の象徴資本と status valuation の神経基盤  
   地位・承認・文化資本が、主観価値やサリエンスとしてどう実装されるか。
7. Graeber の「価値 = 行為の意味」と神経現象学  
   行為が社会的全体に埋め込まれて意味をもつという人類学的価値論を、enaction や sense-making とつなぐ。
8. ACT の values と行動経済学の preference の差  
   「選ばれた生の方向」と「観測された選好」はどこまで一致し、どこでずれるか。
9. 環境の relational value と身体化された価値経験  
   自然との関係的価値を、身体感覚・情動・場所性の観点からどう記述できるか。
10. 近代日本で「価値」がどう翻訳語として定着したか  
   `value` / `Wert` の翻訳史をたどることで、日本語の「価値」がなぜここまで広いのかを概念史的に検証する。

## 付記: 未確認・立場によって異なる点

- 日本語「価値」の本格的な概念史は今回は入口確認に留まる。1878 年の用例は見えるが、明治期の哲学・経済学翻訳史の全体像は未整理。
- 神経現象学は「価値」を固定した標準術語として用いる領域ではない。ここでは Varela 系の方法論と、現代の valuation / salience 研究を横断した整理として述べた。
- マーケティングの brand equity や value proposition には複数の標準理論があり、Aaker/Keller/Lanning/SDL 系で焦点が少しずつ異なる。
- メディア・消費文化の「承認価値」は著者によって sign value, symbolic value, recognition, attention value など語彙が分かれる。

## 主要出典

### 言語・辞典

- Kotobank「価値」: https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651
- Kotobank「価値観」: https://kotobank.jp/word/%E4%BE%A1%E5%80%A4%E8%A6%B3-460652
- Kotobank「値打ち」: https://kotobank.jp/word/%E5%80%A4%E6%89%93%E3%81%A1-590579
- Cambridge Dictionary `value`: https://dictionary.cambridge.org/dictionary/english/value
- Cambridge Dictionary `values`: https://dictionary.cambridge.org/dictionary/english/values
- Cambridge Dictionary `worth`: https://dictionary.cambridge.org/dictionary/english/worth
- Cambridge Dictionary `utility`: https://dictionary.cambridge.org/dictionary/english/utility
- Cambridge Dictionary `significance`: https://dictionary.cambridge.org/dictionary/english/significance
- Cambridge Dictionary `importance`: https://dictionary.cambridge.org/dictionary/english/importance
- Cambridge Dictionary `merit`: https://dictionary.cambridge.org/dictionary/english/merit
- Cambridge Dictionary `price`: https://dictionary.cambridge.org/dictionary/english/price
- Cambridge Dictionary `valuable`: https://dictionary.cambridge.org/dictionary/english/valuable
- Online Etymology Dictionary `value`: https://www.etymonline.com/word/value
- Online Etymology Dictionary `worth`: https://www.etymonline.com/word/worth
- Online Etymology Dictionary `merit`: https://www.etymonline.com/word/merit

### 哲学・美学

- SEP, Value Theory: https://plato.stanford.edu/entries/value-theory/
- SEP, Intrinsic vs. Extrinsic Value: https://plato.stanford.edu/entries/value-intrinsic-extrinsic/
- SEP, Value Pluralism: https://plato.stanford.edu/entries/value-pluralism/
- SEP, Virtue Ethics: https://plato.stanford.edu/entries/ethics-virtue/
- SEP, Environmental Ethics: https://plato.stanford.edu/entries/ethics-environmental/
- Britannica, Axiology: https://www.britannica.com/topic/axiology
- Britannica, Aesthetics: https://www.britannica.com/topic/aesthetics
- Britannica, Sacred: https://www.britannica.com/topic/sacred

### 経済学・認知科学

- Adam Smith, *Wealth of Nations*: https://www.gutenberg.org/files/3300/3300-h/3300-h.htm
- Karl Marx, *Capital* Vol.1 Ch.1: https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm
- W.S. Jevons 検索入口: https://scholar.google.com/scholar?q=William+Stanley+Jevons+Theory+of+Political+Economy
- Kahneman & Tversky (1979) PDF: https://www.uzh.ch/cmsssl/slaw/dam/jcr:00000000-64a0-1db1-0000-00003b7ec704/10.18-kahneman-tversky-79.pdf
- Scholarpedia, Reward signals: https://www.scholarpedia.org/article/Reward_signals

### 社会科学・人類学・メディア

- Schwartz overview DOI: https://doi.org/10.9707/2307-0919.1116
- Bourdieu, “The Forms of Capital” PDF: https://home.iitk.ac.in/~amman/soc748/bourdieu_forms_of_capital.pdf
- Mauss, *The Gift* (Archive): https://archive.org/details/essaisurledonforme0000maus
- Graeber book page: https://davidgraeber.org/books/toward-an-anthropological-theory-of-value/
- Baudrillard 検索入口: https://scholar.google.com/scholar?q=Baudrillard+sign+value
- Experience Economy 検索入口: https://scholar.google.com/scholar?q=Pine+Gilmore+experience+economy

### 経営・教育・法・AI

- Zeithaml (1988) DOI: https://doi.org/10.2307/1251446
- Keller (1993) DOI: https://doi.org/10.1177/002224299305700101
- Customer lifetime value 検索入口: https://scholar.google.com/scholar?q=customer+lifetime+value+marketing
- OECD Learning Compass 2030: https://www.oecd.org/education/2030-project/teaching-and-learning/learning/
- Universal Declaration of Human Rights: https://www.un.org/en/about-us/universal-declaration-of-human-rights
- Value Sensitive Design: https://vsdesign.org/
- Cooperative Inverse Reinforcement Learning: https://arxiv.org/abs/1606.03137

### 神経科学・神経現象学・臨床・環境

- Active Inference (MIT Press OA): https://direct.mit.edu/books/oa-monograph/5299/Active-InferenceThe-Free-Energy-Principle-in-Mind
- Varela neurophenomenology 検索入口: https://scholar.google.com/scholar?q=Francisco+Varela+neurophenomenology
- ACT overview: https://contextualscience.org/act
- Frankl 検索入口: https://scholar.google.com/scholar?q=Viktor+Frankl+meaning+value
- Maslow 検索入口: https://scholar.google.com/scholar?q=Maslow+self-actualization
- IPBES Values Assessment: https://ipbes.net/the-values-assessment
- TEEB: https://teebweb.org/
