
# デザイン思考の系譜、アブダクション、そして形骸化
**作成日**: 2026-03-27  
**作成モデル**: GPT-5.4 Pro  
**形式**: Web ベースの文献調査をもとにした Markdown レポート  
**調査方針**:
- Wikipedia は論点漏れ防止のチェックリストとしてのみ参照し、主張の根拠は一次資料・準一次資料・学術レビューを優先した。
- `design thinking` と `designerly ways of knowing / designerly thinking` は区別して扱った。
- `human-centered design`, `creative problem solving`, `deduction`, `induction`, `abduction`, `analysis`, `synthesis`, `framing` は混同しないように整理した。
- オープンに読める範囲の資料に依存しているため、いくつかの論点は抄録・公式紹介文・準一次資料に基づく。該当箇所は明示する。

---

## 要約（400〜800字）

本調査の結論を先に言えば、デザイン思考は本来、**「論理的思考の反対物」ではない**。むしろ、純粋な分析・最適化・技術合理性だけでは扱いきれない問題に対して、**仮説形成、問題設定、再フレーミング、試作と検証を往復する設計的探究**をどう捉えるか、という設計学・建築・創造性研究の問いから生まれた。Stanford の系譜では Arnold、McKim、Faste を通じて visual thinking, needfinding, rapid prototyping, ambidextrous thinking, abductive reasoning が育ち、Simon はそれを「人工物の科学」の一部として一般化した。Lawson は建築家と科学者の問題解決戦略の差を示し、Cross は design を sciences / humanities に並ぶ「第三の領域」として位置づけ、Schön は technical rationality への対抗として reflection-in-action を提起した。Buchanan は wicked problems を design thinking に接続し、Dorst はその核心を **abduction と framing / frame creation** に求めた。他方、2000年代以降、IDEO・d.school・Rotman を通じて design thinking は経営・教育へ移植され、人間中心・反復・実験・事業成立性を備えたイノベーション手法として普及したが、その過程で 5 段階プロセスや共感ワークショップへと縮減されやすくなった。後年の d.school 自身も「五つの六角形は THE process ではなく、最初の recipe にすぎない」と批判している。したがって、デザイン思考の核心は、いま流通している定型手順そのものではなく、**曖昧で価値葛藤を含む状況において、分析と総合を往復しながら“何を問題とみなすか”を構成し、望ましい可能世界を仮説的に立ち上げる能力**にある。

---

## 1. 問題設定：なぜ「デザイン思考」は混乱しやすいのか

「デザイン思考」は一つの安定した教義ではない。  
少なくとも次の三層が重なっている。

1. **設計学・建築・デザイン研究の文脈**  
   ここでは、デザイナーがどのように問題を捉え、外化し、案を生成し、制約を統合し、状況と対話しながら進むのか、という**認知・実践・探究の様式**が主題になる。

2. **Stanford / IDEO / d.school 系の教育実践の文脈**  
   ここでは、visual thinking, needfinding, prototyping, human-centered design などを、教育・実践の方法として体系化し、学際的チームで使えるようにした**方法論・教育実践**が主題になる。

3. **経営・コンサル・企業研修の文脈**  
   ここでは、design thinking は「イノベーションのための実践手法」「組織変革の方法」「顧客中心戦略のフレーム」として広く流通する。ここでしばしば、5段階プロセス・付箋・共感インタビュー・プロトタイピングのセットとして理解される。

この三層を分けないと、**本来の設計的探究**と、**企業向けに標準化された研修商品**が同じもののように見えてしまう。Johansson-Sköldberg らがまさに指摘するように、デザイン領域の `designerly thinking` と、管理領域で広まった `design thinking` は同一ではない。後者はしばしば、前者より「表層的」「大衆的」「学術的基盤が弱い」形で流通したとされる。（Johansson-Sköldberg, Woodilla, and Çetinkaya 2013）

---

## 2. 用語整理

### 2.1 `design thinking`
文脈により意味がずれる。  
狭義には、デザイナーの思考や設計的探究の様式。  
広義には、ユーザー理解、再定義、発想、試作、検証を含む人間中心のイノベーション手法。

### 2.2 `designerly ways of knowing / designerly thinking`
Nigel Cross に代表される系譜で、デザインを sciences / humanities に並ぶ独自の知の様式として捉える概念。  
こちらは、実務パッケージではなく、**設計という営みの認識論**に近い。

### 2.3 `human-centered design`
IDEO の整理では、人びとへの深い共感から始まり、そのニーズに合わせて解をつくる創造的アプローチ。IDEO にとって HCD は「自分たちの仕事の背骨」であり、design thinking はそれを含むより広い innovation のアプローチとして説明される。（IDEO “Design Thinking”; IDEO FAQ）

### 2.4 `creative problem solving`
創造的問題解決全般を指す広い伝統。  
design thinking と重なるが、design thinking は一般に、**needfinding / ethnography / prototyping / artifact-service-system の具体化**への重心がより強い。

### 2.5 deduction / induction / abduction
- **Deduction（演繹）**: 既知の原理から個別事例の結論を導く
- **Induction（帰納）**: 個別事例から一般的傾向やルールを引き出す
- **Abduction（アブダクション）**: まだ存在しない説明や仮説を立ち上げる

Peirce は abduction を「新しいアイデアを導入する唯一の論理操作」と位置づけた。  
ただし design における abduction は、科学の説明仮説だけでなく、**望ましい人工物・体験・制度・サービスの可能性仮説**を含む。（Peirce on Abduction, Stanford Encyclopedia of Philosophy）

### 2.6 analysis / synthesis / framing
- **Analysis**: 問題や要素を分解し、因果・制約・構造を見定める
- **Synthesis**: 複数の要素を統合して、まとまりある案や構成をつくる
- **Framing**: 何を問題と見なすか、何を目的とするか、何を価値ある成果とみなすか、その枠組み自体をつくり直す

本稿の核はここにある。  
デザイン思考は、分析を拒否するのではなく、**分析だけでは決まらない framing と synthesis を中核化した**点に特徴がある。（Cross 1982; Dorst 2011）

---

## 3. 系譜整理：設計学から経営への移植

## 3.1 前史：Stanford における design education の土壌
Stanford d.school の歴史ページによると、Stanford では 1957 年に John E. Arnold が参加し、1958 年に Robert McKim を採用した。そこで、従来の機械部品中心の engineering design を超えて、**creative problem solving**, **visual thinking**, **human-centered approach**, **rapid prototyping**, **needfinding**, **ambidextrous thinking**, **abductive reasoning** が、Product Design の核として育った。  
これは極めて重要である。後年ビジネス世界で「デザイン思考」と呼ばれるものの多くは、実は 2000 年代の新語というより、**Stanford の設計教育の長い系譜の再パッケージ化**なのである。（Stanford d.school, “The History & Evolution of Design”）

McKim の位置づけはとりわけ大きい。Stanford 工学部の追悼記事では、McKim は “visual thinking” を唱え、人間中心アプローチと結びつけ、想像・スケッチ・ラピッドプロトタイピングを重視したとされる。しかも Stanford の公式史料は、needfinding と abductive reasoning をこの初期系譜に明示的に置いている。  
この点は、ユーザーの見立て――「本質的にはアブダクションに近かったのではないか」――を強く支持する。（Stanford d.school History; Stanford School of Engineering on McKim）

さらに 1984 年以降の Rolf Faste は、この系譜を Needfinding, Visual Thinking, 身体性、創造性教育へと継承・拡張した。Faste Foundation のページは準一次資料であり慎重に扱うべきだが、Faste が Stanford の Design Program を率い、後に “Design Thinking” と呼ばれる hands-on practice を形づくったという自己記述は、Stanford 系譜の内部証言としては重要である。  
ただし、**「Faste が design thinking を単独で創始した」とまでは本稿では言わない**。それは系譜を単純化しすぎる。（Rolf A. Faste Foundation; Stanford d.school History）

## 3.2 Herbert A. Simon：設計の一般化
Herbert Simon の『The Sciences of the Artificial』は、design thinking の遠い根源として欠かせない。Simon は、人工物を自然物と区別しつつ、それらが**目的や機能に向けて環境へ適応するシステム**であることを示し、engineering design を含む「人工物の科学」が可能だと論じた。  
ここで重要なのは、Simon が design を「意匠」ではなく、**望ましい状態へ状況を変えるための行為一般**へと拡張したことだ。

Simon の寄与は二重である。

- 設計を、個別の職能ではなく**一般的な知的活動**として捉え直したこと
- そのうえで、それを irrational な直感の世界に追いやるのではなく、**人工物の合理的探究**として扱おうとしたこと

したがって、デザイン思考の原点の一つは、「論理の否定」ではない。むしろ、**自然科学的合理性だけでは足りないが、それでもなお知的・合理的に扱うべき設計的問題がある**、という認識である。（Simon, *The Sciences of the Artificial*, MIT Press description）

## 3.3 Bryan Lawson：建築家 vs 科学者
Lawson の 1979 年論文は、のちに非常に有名になる「建築家と科学者の違い」の実験的起点である。抄録レベルで確認できるのは、最終学年の建築学生と大学院の科学学生が、同じ抽象問題に対して**有意に異なる problem solving strategy** を示した、ということだ。  
のちの説明では、科学側が規則や問題構造の把握に向かいやすいのに対し、設計側は仮の解を早く立てて、それが働くかを試す **solution-focused** な戦略をとると整理される。

この議論はしばしば雑に、「科学＝分析、デザイン＝ひらめき」と単純化される。  
だが Lawson の本来の重要性は、そうした二分法ではなく、**設計では問題理解そのものが、解の試行を通じて進む**ということを示した点にある。  
これは後の co-evolution 論にも接続する。（Lawson 1979; Dorst & Cross 2001）

## 3.4 Nigel Cross：designerly ways of knowing
Cross は 1982 年に、design を sciences / humanities に並ぶ「第三の領域」と捉え、その固有の知り方を `designerly ways of knowing` と呼んだ。さらに 2001 年には、scientific design, design science, science of design を区別しつつ、designers に固有の知識形式を論じた。  
ここで design は、単なる problem solving 手法ではない。**独自の認識論的地位**を持つ領域である。（Cross 1982; Cross 2001）

Cross の議論は、のちの経営学的 design thinking と重要な点で異なる。  
前者が問うのは、「デザインとはどのように知ることか」であり、後者が問うのは、「それをどう組織の innovation 手法として使うか」である。  
このズレを見失うと、design research の話をそのまま workshop menu に縮減してしまう。

## 3.5 Peter Rowe：Design Thinking という語の早期使用
Peter Rowe の『Design Thinking』は、architecture / urban planning における designing のプロセスを体系的に捉えようとした著作である。MIT Press の紹介文が示すように、Rowe は多様な理論的立場を、**「設計一般に共通する inquiry の基底構造」**として読み解こうとしていた。  
ここでの `Design Thinking` は、後年の企業研修スローガンではなく、むしろ**設計行為の知的構造**を示す語である。（Rowe, *Design Thinking*, MIT Press）

## 3.6 Donald Schön：technical rationality への批判
Schön は『The Reflective Practitioner』で、専門職実践を単なる技術合理性の適用として理解する見方を批判し、現場の実践はしばしば**reflection-in-action**、すなわち状況の最中での省察と実験によって支えられていると論じた。  
これは design thinking にとって決定的である。なぜなら設計では、問題は最初から完全には定義されておらず、実践者は「状況との対話」を通じて問題と解を同時に変えていくからである。

Schön を読むと、デザイン思考は「直感」礼賛ではなく、**状況に働きかけつつ、そこで生じる反作用から学ぶ反省的実践**として理解できる。  
この流れは、のちの prototyping を単なる試作品ではなく、**考えるための実験装置**として理解する下地になる。（Schön, *The Reflective Practitioner*）

## 3.7 Rittel & Webber → Buchanan：wicked problems と design thinking
Rittel & Webber は 1973 年、社会政策の問題は science が得意とする “tame problems” ではなく “wicked problems” だと論じた。wicked problems は、最終的・客観的に定義し尽くせず、正解が true/false で判定できず、最適解を前提にしにくい。  
Buchanan はこれを design thinking へ接続し、現代社会の設計課題を、単なる技術計算ではなく**統合的判断**を要する design の問題として再定位した。

ここで design thinking は、アイデア発想法よりもむしろ、**複雑性・価値対立・不定義性に耐える知的実践**として浮上する。（Rittel & Webber 1973; Buchanan 1992）  
この文脈では、「何を問題とみなすか」を問う framing が本質である。

## 3.8 Dorst & Cross / Dorst：co-evolution と frame creation
Dorst と Cross の 2001 年論文は、creative design を **problem space と solution space の co-evolution** として捉えた。創造性は解の独創性だけでなく、**問題の定式化それ自体**に関わる。  
この見方は、Lawson の solution-focused strategy を洗練させた形だと言える。

さらに Dorst の 2011 年論文は、design thinking の core を、設計の根底にある reasoning pattern、特に **framing / frame creation** に求める。  
ここで重要なのは、design thinking の中核が「共感→定義→発想→試作→テスト」という可視的手順ではなく、**フレームをつくり替える知的操作**にあるとされる点である。  
この意味で、デザイン思考の核心は確かに **abduction に近い**。（Dorst & Cross 2001; Dorst 2011）

## 3.9 IDEO / Tim Brown：人間中心の innovation への翻訳
IDEO は design thinking を「人びとのニーズ、技術的可能性、事業成立性を統合する human-centered approach to innovation」と説明する。これは、設計学的な design thinking を、経営・イノベーションの一般実践へ翻訳した代表的定義である。  
IDEO 自身も「私たちが design thinking を発明したわけではない」と述べている。つまり IDEO の役割は創始ではなく、**翻訳・普及・社会化**に近い。（IDEO “Design Thinking”; IDEO About）

IDEO の功績は大きい。  
設計的探究を、デザイナー以外にも使える形にしたからである。  
しかしこの翻訳には代償もあった。design thinking は、desirability / feasibility / viability の sweet spot を探る innovation method として理解される一方で、**その背後にある設計認識論や problem framing の厳しさが見えにくくなった**。

## 3.10 d.school：普及と自己批判
d.school は 2005 年に Stanford に設立され、design education と interdisciplinary innovation の中心となった。Bootleg などのリソースを通じて、Empathize / Define / Ideate / Prototype / Test の 5 modes は世界中に普及した。  
ただし d.school の Bootleg は、五つを linear steps ではなく **“modes”** と呼び、「どこから始めてもよい」と説明している。  
したがって、初期の普及版ですら、本来は完全な直線工程ではなかった。（Stanford d.school, “Design Thinking Bootleg”）

より重要なのは、その後の d.school 自身の自己批判である。2025 年の d.school 記事は、intro workshop にありがちな「90分で 5段階を一周する」教え方を明確に相対化し、「五つの六角形は THE process を作ってしまったが、実際には最初の recipe にすぎない」と述べる。さらに、design education の要点を固定的 process ではなく、**abilities** に置き直し、Synthesize Information の能力には abductive thinking が必要だと明言している。  
この自己批判は非常に示唆的だ。design thinking の普及機関そのものが、**過度のプロセス化が本質を損なう**ことを認めているからである。（Stanford d.school, “Let’s Stop Talking About THE Design Process”）

## 3.11 Roger Martin / Rotman：経営学への理論翻訳
Rotman の Roger Martin は、design thinking を経営教育に持ち込み、deduction / induction だけではなく **abductive reasoning** を組み込むべきだと論じた。  
彼の議論では、伝統的マネジャーは既存の選択肢から最適なものを選ぶ傾向が強いのに対し、designer は「まだ存在しないが、もしあれば望ましい何か」を考える。  
これはまさに abduction の経営学的翻訳である。

Martin の功績は、経営に design thinking を「感性」ではなく**reasoning の構成**として持ち込んだ点にある。  
ただし、ここでも risk がある。  
design thinking が「MBA でも使える論理」として再記述されると、現場での craft, making, situated judgment よりも、抽象的な capability language が前景化する。（Martin 2006）  
その結果、design thinking は理解しやすくなる一方で、**デザイン実践の厚み**を失いやすい。

---

## 4. 論理的思考との対比：対立物か、補完物か

## 4.1 結論
デザイン思考は、**論理的思考の対立物ではなく、論理の構成を拡張する補完物**として理解するのが最も正確である。

### なぜ「対立物」と誤解されるのか
その理由は三つある。

1. Lawson 以降、designer は solution-focused だと語られたため
2. Schön が technical rationality を批判したため
3. 企業研修版 design thinking が、「分析より共感」「ロジックより創造性」といった雑なスローガンで売られやすかったため

しかし原典に近づくと、より精密な図が見える。

- **Simon** は design を人工物の合理的探究として一般化した
- **Lawson** は problem solving strategy の差を示したのであって、logic の否定を述べたのではない
- **Cross** は design を独自の知の領域とした
- **Schön** は技術合理性の限界を論じたが、非合理を称揚したのではない
- **Dorst** は design の核を framing / abduction と見た
- **Martin** は deduction / induction に abduction を追加すべきだとした

つまり design thinking は、「論理を捨てること」ではなく、**演繹と帰納だけでは処理しきれない問題に対して、仮説形成とフレーミングを組み込むこと**なのである。（Martin 2006; Dorst 2011）

## 4.2 Analysis と Synthesis
設計問題では、問題を要素分解しても、そのまま解は出ない。  
なぜなら設計では、目的、評価軸、ユーザー、制約、文脈、価値観そのものが揺れているからである。  
そこで design thinking は、analysis に加えて **synthesis** を強く要求する。  
複数の制約と価値をまとめて、ひとつの案・体験・制度として成立させることが必要になる。

### ただし注意
「科学＝分析、デザイン＝総合」と言い切るのは粗い。  
科学にも仮説形成と統合理論の構築があり、設計にも厳密な分析がある。  
差は二元論ではなく、**どの局面で何が前景化されるか**にある。

## 4.3 Framing の重要性
最も大きな差は framing にある。  
設計ではしばしば、「何が問題か」自体が未定義である。  
たとえば「高齢者向け移動支援を改善する」という課題は、交通問題なのか、孤立問題なのか、ケアの可視化の問題なのか、地域の時間編成の問題なのかで、全く違う解が生まれる。  
ここで design thinking が働くのは、既存の問題定義に解を当てはめる場面より、**問題定義そのものを再構成する場面**である。（Dorst 2011）

この意味で、デザイン思考の中心は process step ではなく **frame work** にある。

---

## 5. アブダクションとの関係

## 5.1 Peirce における abduction
Peirce によれば abduction は、説明仮説を形成する推論であり、新しいアイデアを導入する論理操作である。  
演繹が結果を導き、帰納が結果を検証・一般化するのに対して、abduction は **何を仮説として立てるか** を担う。（Peirce on Abduction, Stanford Encyclopedia of Philosophy）

## 5.2 design thinking はなぜ abduction 的なのか
design thinking が abduction に近いのは、**まだ存在しないものの可能性仮説**を立てるからである。  
ここで立てられる仮説は、「なぜこの現象が起きたのか」という説明仮説にとどまらない。  
むしろ「この状況をより望ましく変えるには、どんな人工物・制度・体験・仕組みがありうるか」という**生成的仮説**である。

Dorst が design thinking の core を framing と frame creation に置いたのは、まさにこのためである。  
d.school が最近、Synthesize Information の能力に abductive thinking を必要条件として挙げているのも、偶然ではない。  
「大量の定性・定量情報を前にして、どのパターンを見いだし、どこに opportunity を見るか」は、単なる集計ではなく abduction だからである。（Dorst 2011; Stanford d.school 2025）

## 5.3 scientific abduction と design abduction の違い
両者は似ているが、同じではない。

### scientific abduction
- 観察された現象を最もよく説明する仮説をつくる
- 既存世界の説明に重心
- 真偽・説明力・予測力が焦点

### design abduction
- まだ存在しないが、望ましく成立しうる人工物・制度・体験の仮説をつくる
- 未来の構成に重心
- desirability / feasibility / viability / ethics / meaning が焦点

Roger Martin の「まだ存在しないが、もしあれば素晴らしい何か」という整理は、この design abduction の特徴をよく表している。（Martin 2006）

## 5.4 aha moment は本質か
「aha moment」を design thinking の本質に置くのは危険である。  
洞察や飛躍は確かにある。だが、それは神秘的ひらめきとして降ってくるというより、**観察、外化、試作、失敗、再定義、再配置**の繰り返しの中で生じる。  
d.school の recent pedagogy が、insight を Synthesize Information / Navigate Ambiguity / Learn from Others と結び付けているのはそのためである。  
したがって本質は「ひらめき」それ自体ではなく、**ひらめきが生じうる構えと実践条件**にある。（Stanford d.school 2025）

---

## 6. 形骸化・批判：何が失われたのか

## 6.1 形骸化とは何を指すのか
本稿で言う「形骸化」は、単なる popularization ではない。  
次の現象を指す。

1. **5段階プロセスへの矮小化**  
   本来は mode や recipe にすぎないものが、唯一の設計プロセスとして固定化される。

2. **共感ワークショップ化**  
   empathize が、深い needfinding や社会・制度理解ではなく、短時間インタビューや疑似共感ゲームに縮退する。

3. **ポストイット化**  
   付箋・発散・アイデア数が、framing の質や problem redefinition より重視される。

4. **表層導入**  
   組織が design thinking を「新規事業っぽさ」や「創造性アピール」の記号として導入するが、権限設計・評価制度・意思決定・実験コスト配分は変わらない。

5. **評価不能な万能語化**  
   design thinking が、人間中心、創造性、共創、イノベーション、ユーザー理解など何でも含む曖昧な善語になり、成功条件も失敗条件も不明瞭になる。

## 6.2 学術的批判
### Johansson-Sköldberg ら
彼女らは、design 領域における `designerly thinking` は複数の異なるディスコースを持つ一方、management discourse の design thinking は、全体としてより表層的で popular であり、designerly thinking への参照も弱い、と整理した。  
これは本テーマにとって決定的である。  
つまり、いま広く流通している design thinking は、元来の design research の厚みをそのまま継承していない。（Johansson-Sköldberg, Woodilla, and Çetinkaya 2013）

### Lucy Kimbell
Kimbell は design thinking を、cognitive style / general theory of design / resource for organizations の三つに整理したうえで、thinking と acting を分ける二元論、design を非歴史化・脱文脈化する傾向、designer を主役化しすぎる傾向を批判した。  
Part II では、disembodied で ahistorical な design thinking から、situated practices へ移るべきだと論じる。  
要するに、「デザイン思考」は、頭の中の考え方として抽象化しすぎると、**実践・身体・物質・制度**が消えてしまう。（Kimbell 2011; Kimbell 2012）

## 6.3 実務側からの自己批判
### d.school
d.school 自身が、五つの六角形は “THE process” ではなく最初の recipe にすぎないと書いている。  
これは、「広く流通した design thinking」の看板を生んだ当事者が、その**過剰な標準化**を認めていることを意味する。（Stanford d.school, “Let’s Stop Talking About THE Design Process”）

### IDEO
IDEO 自身も、design thinking には単一の定義はなく、fail-safe な唯一の方法ではないと述べ、表層的に扱うと十分な結果が出ないと認めている。  
したがって、批判は外部からだけではない。  
普及を担った側も、単純化の副作用を十分認識している。（Stanford d.school 2025; IDEO “Design Thinking”）

## 6.4 企業研修化と商品化
d.school は現在、business leaders 向けの Bootcamp を展開し、design thinking toolkit を組織内 innovation に持ち帰ることを明示している。  
これは悪ではない。  
教育・普及・共有可能性のためには、ある程度のパッケージ化は必要だからである。

しかし問題は、パッケージが入口から本体へ昇格してしまうことだ。  
本来 recipe でしかないものが doctrine になると、design thinking は  
- 問題定義の再構成  
- 観察の質  
- 外化と試作  
- フレーム転換  
- 判断の責任  
を失い、**innovation theater** に変わる。（Stanford d.school Bootcamp; Stanford d.school 2025）

---

## 7. 何が残り、何が失われたのか

### 失われやすい本質
- 問題そのものを問い直す framing
- 中途半端な情報の中で仮説を立てる abduction
- スケッチ・試作・対話を通じて思考する externalization
- 文脈依存の判断
- 学際協働の中での価値葛藤の統合
- 自分の解を状況にさらし、学び直す reflective practice

### それでも残る有効な核
- 人間中心・文脈中心の観察
- 早い試作と早い学習
- 不確実性の中での iterative inquiry
- 分析と総合の往復
- 「まだ存在しないが望ましいもの」を仮説として立てる姿勢
- 組織において、既存選択肢の比較から、新しい選択肢の生成へ移る契機

したがって、design thinking は完全に空疎になったわけではない。  
空疎になりやすいのは、**それを固定プロセスとして消費する使い方**である。（Johansson-Sköldberg et al. 2013; Kimbell 2011; Stanford d.school 2025）

---

## 8. 本来の design thinking と企業研修型 design thinking の左右対比

| 観点 | 本来の design thinking（設計学・designerly thinking に近い） | 企業研修型 design thinking |
|---|---|---|
| 主対象 | ill-defined / wicked problem、人工物・制度・体験の構成 | 新規事業、CX、サービス改善、組織課題 |
| 問題の扱い | 問題定義そのものが動く | 既に与えられた課題にメソッドを当てることが多い |
| 核心 | framing、abduction、co-evolution、reflection | process、toolkit、workshop、team alignment |
| 思考様式 | 分析＋総合＋再フレーミング | 共感→発想→試作の可視的運用が中心 |
| ユーザー理解 | needfinding、深い観察、文脈把握 | 短時間インタビュー、共感演習に縮みやすい |
| プロトタイプ | 思考を進める実験装置 | 進捗を示す成果物・ワークショップ成果になりやすい |
| 成果の評価 | 状況適合、意味、価値、使用実態、統合性 | アイデア数、参加感、社内納得、短期PoC |
| デザインの位置 | 独自の知の様式・実践 | イノベーション手法の一つ |
| リスク | 曖昧さが高く教育に時間がかかる | 表層化、万能語化、innovation theater |
| それでもの価値 | 問題設定を変えられる | 組織に探索的態度を導入しやすい |

---

## 9. deduction / induction / abduction / design framing 比較表

| 形式 | 何をするか | 主な問い | 典型的入力 | 典型的出力 | 妥当性の基準 | design thinking との関係 |
|---|---|---|---|---|---|---|
| Deduction（演繹） | 既知の原理を個別事例に適用する | 「この条件なら何が言えるか」 | ルール、前提、モデル | 結論、予測 | 論理的一貫性 | 技術要件や整合性検証に必要 |
| Induction（帰納） | 事例から傾向や規則を抽出する | 「観察から何が一般化できるか」 | 観察データ、事例、実験結果 | パターン、仮説の支持 | 統計的・経験的妥当性 | リサーチ、テスト、ユーザー観察で重要 |
| Abduction（アブダクション） | 新しい説明・可能性仮説を立てる | 「こう考えると説明/可能化できるのではないか」 | 不十分な情報、違和感、断片的観察 | 仮説、コンセプト、見立て | もっともらしさ、生成力、後続検証可能性 | design thinking の中核の一つ |
| Design framing | 何を問題とみなすか、何を価値とみなすかを組み替える | 「そもそも何を解くべきか」 | 利害、文脈、価値葛藤、使われ方、制度条件 | 新しい問題設定、評価軸、設計方針 | その後の解探索を開く力、関係者との整合、意味生成 | abduction を含むが、それより広い design 固有の実践 |

**補足**: `design framing` は古典論理の一形式ではなく、design 実践に特有の再定義操作である。Dorst のいう frame creation に近い。

---

## 10. 論点別の詳細整理

## 10.1 起源
起源は単一ではない。少なくとも以下の複数起源が重なる。

- Simon による design の一般化（人工物の科学）
- Stanford Product Design における visual thinking / needfinding / abductive reasoning
- 建築・設計研究における designerly inquiry の分析
- Rittel & Webber の wicked problems を受けた design の再定位
- 2000年代以降の IDEO / d.school / Rotman による経営的翻訳

## 10.2 解決志向の思考
Lawson 系譜の重要点は、design が problem-focused というより solution-focused になりやすいということ。  
ただしこれは「問題を軽視する」という意味ではない。  
仮の solution を置くことで初めて、問題の輪郭が逆照射される、ということだ。  
ここで問題理解は解探索と同時進行で進む。（Lawson 1979; Dorst & Cross 2001）

## 10.3 Brian Lawson の建築家 vs 科学者
厳密に言えば Lawson が示したのは、曖昧な問題に対する**認知戦略の差**であって、知性の上下ではない。  
この論点は後に俗流化して「左脳 vs 右脳」みたいな話にされがちだが、それは誤りである。

## 10.4 分析と総合
design thinking は分析を不要にするのではなく、分析だけでは足りない場面に総合と framing を導入する。  
それゆえ design thinking は anti-analysis ではないが、**analysis-only ではない**。

## 10.5 発散と収束
企業研修では、design thinking はしばしば「まず発散、後で収束」と教えられる。  
これは教育的には有用だが、本質の半分しか言っていない。  
本当の核心は、発散と収束に先立つ **framing の転換** である。（Dorst 2011）  
どの問題枠で発散するかが違えば、発散の意味も変わる。

## 10.6 問題解決プロセスとしてのデザイン思考
設計学側では、design thinking は固定的 linear process というより、
- inquiry structure（Rowe）
- reflective conversation（Schön）
- co-evolution（Dorst & Cross）
- frame creation（Dorst）
として捉えられる。  
この差を無視すると、design thinking は「工程管理表」に変わる。

## 10.7 原理
主要原理として抽出できるのは、
- 人間中心 / 文脈中心
- 外化（sketch, prototype, mockup）
- 反復
- 統合的判断
- 曖昧性耐性
- re-framing
- abductive hypothesis generation
である。

## 10.8 wicked problems
wicked problems は design thinking を有名にしたキーワードだが、もともとは social planning の議論である。  
Buchanan の意義は、それを design に接続したこと。  
つまり design thinking の本質は、**正解のない問題に対する発想法**というより、**正解の条件自体が争われる問題に対する構成的実践**にある。

## 10.9 aha moment / insight
insight はある。しかしそれは単独の天啓ではない。  
観察、比較、外化、プロトタイプ、フィードバックの循環の中で生じる。  
ゆえに、aha moment を演出する workshop はできても、**本物の insight を制度的に保証することはできない**。

## 10.10 方法とプロセス
Bootleg の 5 modes は有用な導入だが、それ自体が core ではない。  
d.school の recent pedagogy は、process より abilities を重視する方向に移っている。（Stanford d.school 2025）  
これは「プロセス万能主義」への修正として読むべきである。

## 10.11 視覚アナロジー
McKim の visual thinking、スケッチ、プロトタイピングは、デザインが言語だけでなく**視覚的・身体的外化**を通じて考える営みであることを示す。  
視覚アナロジーは、単なる表現でなく、**考えるための道具**である。

## 10.12 科学や人文学との違い
Cross の言う design as a third area が最も明快である。  
science が説明・予測・一般化に強く、人文学が解釈・意味理解に強いとすれば、design は**構成・統合・提案**に重心を置く。  
ただし三者は排他的ではない。現代の design thinking は、むしろそれらを横断する。

## 10.13 デザインの言語
design の言語は、自然言語だけではない。  
スケッチ、モデル、ワイヤーフレーム、サービスブループリント、プロトタイプ、シナリオ、体験の脚本、場面の再演などが含まれる。  
ここでも design thinking は「考えること」と「作ること」を分けない。

## 10.14 ビジネスにおけるデザイン思考
IDEO と Rotman は、design thinking を business innovation に移した主要拠点である。  
IDEO は人間中心・技術可能性・事業成立性の統合を強調し、Martin は abductive reasoning を組み込んだ management education を提唱した。  
ここで design thinking は、既存選択肢の比較から、新しい選択肢の生成へと経営を押し広げる役割を担う。

## 10.15 教育におけるデザイン思考
Stanford の歴史では、design education は 1950年代から続く長い系譜の上にあり、d.school はその institutional hub である。  
教育的には、design thinking の強みは、
- 実践を通じて学ぶ
- 問題設定を問う
- 異分野を協働させる
- 不確実性に慣れさせる
点にある。  
しかし弱点は、短時間導入では recipe の模倣で終わりやすいことだ。

## 10.16 歴史
歴史は、ざっくり次のように整理できる。

| 時期 | 主な出来事 | 意義 |
|---|---|---|
| 1950s–60s | Arnold, McKim による Stanford design education の刷新 | visual thinking, human-centered, needfinding の土壌 |
| 1969以降 | Simon『The Sciences of the Artificial』 | design の一般化、人工物の科学 |
| 1970s–80s | Lawson, Cross, Rowe | designerly inquiry, solution-focused strategy, inquiry structure |
| 1980s–90s | Schön, Buchanan | reflective practice, wicked problems |
| 1984–2003 | Faste at Stanford | hands-on, human-centered, creative design education の継承 |
| 1990s–2000s | IDEO, Kelley, Brown | design thinking の business への翻訳 |
| 2005以降 | d.school institutionalization | 教育・普及・世界的拡散 |
| 2000s以降 | Rotman / Martin | abductive reasoning を経営教育へ翻訳 |
| 2010s以降 | Kimbell, Johansson-Sköldberg, d.school 自己批判 | 表層化・一般化への批判と再精密化 |

## 10.17 日本の大学におけるデザイン思考教育
この点は**網羅的には未確認**である。以下は、今回確認できた公式情報の範囲に限る。

### 東京大学 i.school
東京大学の 2009 年プレスリリースでは、i.school は「これまで世界に存在せず、誰も生み出しえなかった、新しい答えを創り出す人材」を育てるとし、論理的思考の先に creativity を羽ばたかせ、人間中心に考えることを掲げている。記念シンポジウムには Tom Kelley, Heather Fraser, Barry Katz らが登壇しており、日本での受容が IDEO / Rotman / Stanford の回路と直結していたことが分かる。（東京大学 i.school 2009 年プレスリリース）

### 慶應義塾大学 SDM / IDC
慶應 SDM の IDC は、デザイン思考に基づくワークショップ型デザインプロジェクトの教育・研究活動を行うと明記している。研究ページでは「デザイン思考の教育・実践に関する研究」を掲げ、教育・研修・実践だけでなく方法論研究にも言及する。さらに KiDS ページでは、2008 年以来、システム思考とデザイン思考に基づく独自の協働教育・研修を行ってきたとされる。  
興味深いのは、慶應 SDM が design thinking をそのまま輸入するのではなく、**システム思考との統合**として再構成している点である。（慶應義塾大学 SDM 研究所 IDC 公式ページ）

### 補足
日本では design thinking はしばしば、
- 人間中心イノベーション教育
- 新規事業 / 企業研修
- システム思考との統合
- 地域課題や社会課題への応用
の形で受容されているように見える。  
ただしこの一般化は本調査の範囲を超える。大学横断の厳密な地図化は**未確認**である。

---

## 11. 最終判断：5つの問いへの回答

### 1. デザイン思考は、もともと何だったのか
もともとは、デザイナーや設計者が、曖昧で開かれた問題にどう向き合うかを捉える**設計的探究の理論と教育実践**であった。  
それは単なる ideation technique ではなく、visual thinking, needfinding, reflection-in-action, wicked problems, co-evolution, framing を含む広い系譜を持つ。

### 2. それは論理的思考の対立物だったのか、それとも補完物だったのか
補完物である。  
より正確には、演繹・帰納だけでは処理しきれない局面に対して、abduction と framing を導入することで、論理の構成を拡張するものだった。  
「ロジックの反対」として売られた場合、それはかなり俗流化している。

### 3. デザイン思考の核心は、アブダクション・フレーミング・問題設定にあると言えるか
**かなり強く Yes**。  
ただし「アブダクションだけ」と言うのは狭すぎる。  
より正確には、**abduction を含む framing / frame creation と、problem-solution co-evolution** にある。  
Dorst, Martin, d.school recent pedagogy, McKim/Stanford 系譜はこの判断を支持する。

### 4. 今日広く流通している design thinking は、どの程度まで形骸化しているか
相当程度、形骸化している。  
特に企業研修・イノベーション啓発の場面では、5-step process, empathy workshop, Post-it ritual, quick prototype へ縮減されやすい。  
Johansson-Sköldberg と Kimbell の批判、そして d.school 自身の自己批判がそれを裏づける。  
ただし、すべてが空疎という意味ではない。入口としては依然有効である。

### 5. それでもなお有効な核があるなら、それは何か
ある。  
それは、**曖昧で価値対立を含む状況に対して、観察・外化・試作・対話を通じて framing を更新し、まだ存在しない望ましい解を仮説的に構成する能力**である。  
これを一言で言えば、**人間中心の abduction を、反復的な実践で支えること**である。

---

## 12. 結論だけ（7項目以内）

- デザイン思考は本来、論理的思考の反対物ではなく、**分析だけでは扱えない問題に対して framing と abduction を導入する補完的な知的実践**である。  
- その源流は、Simon の人工物の科学、Stanford の visual thinking / needfinding、Lawson の solution-focused strategy、Cross の designerly ways of knowing、Schön の reflective practice、Buchanan の wicked problems にまたがる。  
- `designerly thinking` と、経営・コンサルで流通した `design thinking` は同じではない。後者は前者より表層化しやすい。  
- デザイン思考の核心は、5段階の工程ではなく、**problem framing / frame creation / problem-solution co-evolution** にある。  
- したがって本質は「共感」や「発想数」ではなく、**何を問題として立て、どのような望ましい可能性仮説を組み立てるか**にある。  
- 形骸化とは、design thinking が recipe から doctrine へ変わり、workshop / post-it / innovation theater に縮退することを指す。  
- それでも残る核は、**人間中心の観察、仮説的構成、試作による思考、そして曖昧性に耐えながら学ぶ反復実践**である。  

---

## 13. 参考文献・主要参照先

### 一次資料・準一次資料・学術レビュー
- Simon, Herbert A. *The Sciences of the Artificial*. MIT Press.  
- McKim, Robert H. *Experiences in Visual Thinking*.  
- Lawson, Bryan R. “Cognitive Strategies in Architectural Design.” *Ergonomics* 22(1), 1979.  
- Lawson, Bryan. *How Designers Think*. Routledge / Architectural Press.  
- Cross, Nigel. “Designerly Ways of Knowing.” *Design Studies* 3(4), 1982.  
- Cross, Nigel. “Designerly Ways of Knowing: Design Discipline Versus Design Science.” *Design Issues* 17(3), 2001.  
- Rowe, Peter G. *Design Thinking*. MIT Press.  
- Schön, Donald A. *The Reflective Practitioner*. Basic Books.  
- Rittel, Horst W. J., and Melvin M. Webber. “Dilemmas in a General Theory of Planning.” *Policy Sciences* 4, 1973.  
- Buchanan, Richard. “Wicked Problems in Design Thinking.” *Design Issues* 8(2), 1992.  
- Dorst, Kees, and Nigel Cross. “Creativity in the Design Process: Co-evolution of Problem-Solution.” *Design Studies* 22(5), 2001.  
- Dorst, Kees. “The Core of ‘Design Thinking’ and Its Application.” *Design Studies* 32(6), 2011.  
- Kimbell, Lucy. “Rethinking Design Thinking: Part I.” *Design and Culture* 3(3), 2011.  
- Kimbell, Lucy. “Rethinking Design Thinking: Part II.” *Design and Culture* 4(2), 2012.  
- Johansson-Sköldberg, Ulla, Jill Woodilla, and Mehves Çetinkaya. “Design Thinking: Past, Present and Possible Futures.” *Creativity and Innovation Management* 22(2), 2013.  
- Martin, Roger. “Design Thinking and How It Will Change Management Education.” *Academy of Management Learning & Education* 5(4), 2006.  

### 公式・準公式ウェブ資料
- Stanford d.school, “The History & Evolution of Design.”  
- Stanford d.school, “Design Thinking Bootleg.”  
- Stanford d.school, “Let’s Stop Talking About THE Design Process.”  
- Stanford School of Engineering, “Robert McKim, a force in Stanford’s product design program, has died.”  
- IDEO, “Design Thinking.”  
- IDEO, “What’s the difference between human-centered design and design thinking?”  
- IDEO, “About IDEO.”  
- Rolf A. Faste Foundation for Design Creativity, “Rolf Faste.”  
- University of Tokyo, 「東京大学 i.school 開校、および記念シンポジウムの開催」  
- 慶應義塾大学 SDM 研究所 イノベーティブデザインセンター（研究・教育関連ページ）

### 補足
- 日本語 Wikipedia「デザイン思考」は、論点漏れ防止のチェックリストとしてのみ参照した。根拠としては使用していない。  
- 一部の日本語二次資料では d.school の設立年が 2003 / 2005 / 2006 と揺れるが、本稿では Stanford d.school 公式の **2005** を採用した。  
- Faste と “design thinking” の接続については Foundation の準一次資料と Stanford 系譜からかなり強く示唆されるが、単独で創始者と断定するほどではない。  
- 「日本の大学における受容」の全国的地図化は、本調査では未確認。東京大学 i.school と慶應 SDM を公式情報ベースで確認した範囲に留めた。

---
