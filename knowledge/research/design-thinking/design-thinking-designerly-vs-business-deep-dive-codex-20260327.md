# designerly thinking と business design thinking の断絶

Issue: #17  
Parent: #6  
作成日: 2026-03-27  
作成: Codex  
使用モデル: `GPT-5`

## 0. エグゼクティブサマリー

`designerly thinking` と、経営・コンサルで流通する `business design thinking` は、完全に無関係な別物ではない。しかし同一概念として扱うと、設計研究が何を問題にしていたかと、企業研修で何が流通しているかの差が見えなくなる。前者は、Cross, Lawson, Rowe, Schön らが探究したように、デザイナーが未定義で相互依存的な状況に対して、どのように問題を設定し、解を仮設し、外化し、状況と対話しながら統合判断していくか、という設計知の記述である。[Cross 1982](https://www.sciencedirect.com/science/article/pii/0142694X82900400), [Lawson 1979](https://www.tandfonline.com/doi/abs/10.1080/00140137908924589), [Rowe 1987](https://mitpress.mit.edu/9780262680677/design-thinking/), [Schön 1984](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC)

これに対して後者は、IDEO, d.school, Rotman, HBR の流れで広まった、より teachable で portable な innovation method である。David Kelley の Stanford 公式プロフィールは `Design Thinking` を empathy for user needs, iterative prototyping, storytelling に基づく project-based methodology と説明する。[Kelley](https://engineering.stanford.edu/people/david-kelley) IDEO は、自分たちは human-centered design を 1978 年以来実践しており、その中で最も `learnable and teachable` な elements を shorthand として `design thinking` と呼ぶようになったと説明する。[IDEO FAQ](https://designthinking.ideo.com/faq/did-ideo-invent-design-thinking), [IDEO History](https://designthinking.ideo.com/history) Tim Brown は HBR で design thinking を `designer’s sensibility and methods` を用いて人々の needs, 技術的可能性, business viability を統合する方法として提示した。[Brown 2008](https://hbr.org/2008/06/design-thinking)

したがって、両者の違いは「前者は本物、後者は偽物」という単純な道徳図式ではない。むしろ、business design thinking は designerly thinking の一部を強く継承しながら、それを組織導入可能な process/mindset/toolkit に変換したものだと理解すべきである。継承されたのは、人間中心性、問題の再定義、反復、曖昧さの受容、異分野協働である。切り落とされやすいのは、視覚・素材・形態を通じた thinking、長い修練に支えられた judgment、aesthetics、domain-specific craft、form-giving の責任である。Lucy Kimbell が design thinking を `cognitive style`, `general theory of design`, `organizational resource` の三つに分けて整理したことは、このズレを理解するうえで有効である。[Kimbell 2011](https://research.brighton.ac.uk/en/publications/rethinking-design-thinking-part-i/)

最も重要なのは、designerly thinking の中心が「プロセス」よりも `problem framing, synthesis, representation, judgment` にあり、business design thinking の中心が「方法の普及可能性」と「チーム協働の運用可能性」にある点である。両者のあいだには連続性があるが、重心は明確にずれている。その意味で `business design thinking` は designerly thinking の民主化であると同時に、薄型化でもある。

## 1. 何を比較するか

本メモでは、次の二群を比較する。

- 設計研究側: Cross, Lawson, Rowe, Schön
- business/education 側: Kelley, IDEO, Brown, Martin

比較軸は次の七つとする。

1. 問題の捉え方  
2. 方法の中心  
3. thinking を支える媒体  
4. judgment の位置  
5. 学習可能性の扱い  
6. 組織との関係  
7. 失われやすいもの / 残るもの  

## 2. designerly thinking 側の重心

### 2.1 Cross: design を第三の知とみなす

- [Cross 1982](https://www.sciencedirect.com/science/article/pii/0142694X82900400) の中心は、design を sciences / humanities と並ぶ `third area of education` とみなし、`designerly ways of knowing` を立てることにある。
- ここで design は、科学の縮小版でも、人文学の応用版でもない。
- 重要なのは、物を作り、配置し、表現し、相互依存する制約の中で統合する独自の knowing がある、という主張である。

### 2.2 Lawson: 問題分析より solution-focused exploration

- [Lawson 1979](https://www.tandfonline.com/doi/abs/10.1080/00140137908924589) は、建築学生と科学系学生の problem-solving strategy の違いを示す古典である。
- 通俗的には `architects are solution-focused` と要約されるが、重要なのは「分析しない」のではなく、 tentative solution が problem exploration を進める装置になる点である。
- したがって designerly thinking の中では、 problem と solution は順番に並ぶのでなく、共進化する。

### 2.3 Rowe: design thinking は inquiry structure の記述

- [Rowe 1987](https://mitpress.mit.edu/9780262680677/design-thinking/) における `design thinking` は、後年の workshop 用語ではなく、 architectural/urban design における inquiry structure の systematic account である。
- ここでは思考は process step というより、先例、タイプ、制約、場面、判断が絡む procedural and situational logic として扱われる。
- 重要なのは、方法の名前よりも、設計行為の組み立てそのものを記述することにある。

### 2.4 Schön: problem setting, reflection-in-action, conversation with the situation

- [Schön 1984](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC) は、technical rationality を批判し、実務では問題は givens として来るのではなく、`uncertain, unstable, unique` な状況から practitioner が `problem setting` を行うと述べる。
- 設計は `reflection-in-action` であり、`conversation with the situation` である。
- ここでは thinking は workbook 上の手順ではなく、行為・表現・素材・フィードバックを含む situated inquiry になる。

### 2.5 designerly thinking 側の総括

- 問題は与件でない
- solution は exploratory device でもある
- representation は思考の補助ではなく中核
- judgment は method の外にある暗黙の残余ではなく、 method の中心にある
- learning は長期の studio/craft 的修練に支えられる

## 3. business design thinking 側の重心

### 3.1 Kelley: empathy, prototyping, storytelling

- [Kelley の Stanford 公式プロフィール](https://engineering.stanford.edu/people/david-kelley) は、`Design Thinking` を Product Design Program と d.school の双方で用いられる project-based methodology と説明する。
- その中心語彙は `empathy for user needs`, `iterative prototyping`, `storytelling` である。
- ここでは designerly practice は、教育可能な methodology として名指される。

### 3.2 IDEO: learnable and teachable elements

- [IDEO FAQ](https://designthinking.ideo.com/faq/did-ideo-invent-design-thinking) は、IDEO は design thinking を invent したのではなく、1978 年以来の human-centered design 実践から、最も `learnable and teachable` な elements を `design thinking` と呼んだと明言する。
- [IDEO History](https://designthinking.ideo.com/history) は、その要素を empathy, optimism, iteration, creative confidence, experimentation, ambiguity/failure の embrace として示す。
- また clients が designs だけでなく these skills を欲したため share するようになった、と説明する。
- ここで thinking は、 expert craft から transferable skillset へ変換されている。

### 3.3 Brown: innovation method への一般化

- [Brown 2008](https://hbr.org/2008/06/design-thinking) は、design thinking を `designer's sensibility and methods` を使って people’s needs, technology, business success を統合する innovation approach として提示する。
- ここでは design thinking は、設計者の仕事の記述よりも、経営者が採用すべき general management method に近づく。

### 3.4 Martin / Rotman: analytic management の補完

- [Dunne & Martin 2006](https://doi.org/10.5465/amle.2006.23473212) は、design thinking を management education に持ち込み、analysis 中心の business school 教育を補完するものとして位置づける。
- Martin 系譜では、abductive reasoning や `what might be` が強調されるが、その目的は designerly culture の再現というより、managerial capability の拡張である。

### 3.5 business design thinking 側の総括

- 問題再定義は残るが、運用可能な process に整形される
- representation は prototyping や workshop artifact に縮約されやすい
- judgment は team facilitation や iteration の背後に退く
- learning は比較的短期間で transfer 可能な skill として構成される
- goal は professional design culture の再生産ではなく、innovation capacity の拡張

## 4. 何が継承され、何が切り落とされたか

### 4.1 継承されたもの

- human-centered orientation
- problem reframing
- iterative exploration
- ambiguity tolerance
- collaborative synthesis
- prototyping through making

### 4.2 切り落とされやすいもの

- visual thinking / representational literacy
- materiality と form-giving
- aesthetic judgment
- domain-specific craft
- long apprenticeship
- professional responsibility for the final form

### 4.3 なぜ切り落とされるか

- business design thinking は `teachable`, `repeatable`, `team-based`, `organizationally portable` である必要がある
- そのため、深い craft や tacit judgment は workshop module に分解しにくい
- IDEO 自身が `learnable and teachable elements` と言うように、最初から切り出しの論理がある
- したがって business DT の薄型化は、偶発的な劣化だけでなく、普及戦略そのものに内在している

## 5. 中間的な橋渡し概念

完全な断絶ではなく、両者の間には橋渡し概念がある。

### 5.1 human-centered design

- Stanford/IDEO 系譜では、human-centered design が designerly practice と business DT の中間項になっている。
- McKim の `human values` から Kelley/IDEO の `user needs` への接続線はここにある。

### 5.2 abductive framing

- business DT でも本来は framing が中核にあるが、 workshop 運用では発想法に見えやすい。
- ここを Dorst 的に読み直すと、designerly と business の共通核が見える。

### 5.3 strategic / service design

- 実務の中には、単純な 5 段階 DT ではなく、service design や strategic design と接続し、より designerly に近い厚みを保つ領域もある。
- したがって business 側も一枚岩ではない。

## 6. 比較表

| 比較軸 | designerly thinking | business design thinking |
|---|---|---|
| 問題観 | 問題は未定義で、設計行為の中で構成される | 問題再定義は行うが、運用可能な課題形式へ整える |
| 中心実践 | framing, synthesis, representation, judgment | empathy, ideation, prototyping, facilitation |
| 媒体 | sketch, model, drawing, material, artifact | canvas, sticky notes, low-fi prototype, workshop outputs |
| 学習様式 | studio, apprenticeship, long practice | short-cycle training, toolkit, team workshop |
| 目的 | よい form / fit / situation の統合的構成 | innovation capacity と cross-functional collaboration の拡張 |
| 担い手 | trained designer / architect / practitioner | manager, facilitator, entrepreneur, cross-functional team |
| リスク | tacit 化、属人化、説明困難 | 薄型化、儀式化、 theater 化 |

## 7. 結論

1. `designerly thinking` と `business design thinking` は連続しているが、同一ではない。  
2. 前者の中心は設計知の記述であり、後者の中心は設計実践の移植可能化である。  
3. designerly thinking では `representation, form-giving, judgment` が中心にあるが、business design thinking では `empathy, process, collaboration` が前景化する。  
4. business design thinking は human-centeredness, reframing, iteration を確かに継承している。  
5. しかし visual/material literacy, aesthetics, long-cycle craft, professional judgment は薄くなりやすい。  
6. その薄型化は単なる誤用ではなく、learnable / teachable / portable にする過程である程度必然的に起こる。  
7. したがって両者の関係は「本質と堕落」ではなく、「深い設計文化と、その組織普及のための抽出」の関係として理解するのが最も正確である。  

## 8. 重要文献・資料

- Nigel Cross, “Designerly Ways of Knowing” (1982). [ScienceDirect](https://www.sciencedirect.com/science/article/pii/0142694X82900400)  
- Bryan Lawson, “Cognitive Strategies in Architectural Design” (1979). [Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/00140137908924589)  
- Peter G. Rowe, *Design Thinking* (1987). [MIT Press](https://mitpress.mit.edu/9780262680677/design-thinking/)  
- Donald A. Schön, *The Reflective Practitioner* (1984). [Google Books](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC)  
- David Kelley profile. [Stanford Engineering](https://engineering.stanford.edu/people/david-kelley)  
- IDEO, “Did IDEO invent design thinking?” [IDEO](https://designthinking.ideo.com/faq/did-ideo-invent-design-thinking)  
- IDEO, “History.” [IDEO](https://designthinking.ideo.com/history)  
- Tim Brown, “Design Thinking” (2008). [Harvard Business Review](https://hbr.org/2008/06/design-thinking)  
- David Dunne and Roger Martin, “Design Thinking and How It Will Change Management Education” (2006). [DOI](https://doi.org/10.5465/amle.2006.23473212)  
- Lucy Kimbell, “Rethinking Design Thinking: Part I” (2011). [University of Brighton](https://research.brighton.ac.uk/en/publications/rethinking-design-thinking-part-i/)  

## 9. 未確認・保持論点

- Lawson, Rowe の本文細部は今回の取得環境では abstract/書誌レベルの再確認にとどまる箇所がある。
- Martin 系譜の business DT は本来もう少し細分化できるが、今回は Brown / IDEO / Kelley / Rotman に集約している。
- service design, strategic design, design management の中間領域は別途独立して掘る価値がある。
