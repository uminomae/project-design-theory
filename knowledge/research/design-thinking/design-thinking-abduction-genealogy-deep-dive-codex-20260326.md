# design thinking と abduction：説明仮説から frame creation へ

Issue: #15  
Parent: #6  
作成日: 2026-03-26  
作成: Codex  
使用モデル: `GPT-5`

## 0. エグゼクティブサマリー

`design thinking` の核心はアブダクションにある、という主張はかなり有力だが、そのまま Peirce から IDEO へ一直線につながる単純な系譜ではない。Peirce における abduction は、まず第一に `explanatory hypothesis` の形成、つまり驚くべき事実を説明しうる仮説を導入する推論であり、 deduction と induction に先立つ `discovery` の局面に属していた。[SEP](https://plato.stanford.edu/archives/fall2023/entries/abduction/peirce.html) が整理するように、Peirce の abduction は「何が起きているのかを説明する仮説を立てる」論理であって、最初から人工物やサービスの設計を直接論じていたわけではない。

設計研究においてこの概念が重要になるのは、Simon の一般的な `science of design` 提案だけではなく、より明示的には Roozenburg 以降である。Simon は人工物一般を学問対象とし、設計を ill-structured problems を扱う problem solving の一部として構想したが、少なくとも今回確認した一次・準一次資料の範囲では、 design thinking の核心を abduction として前景化してはいない。[MIT Press の紹介](https://mitpress.mit.edu/9780262190510/the-sciences-of-the-artificial/) と [Simon 1973 の再掲](https://ojs.unbc.ca/index.php/design/article/view/1273) から見えるのは、 design を人工物・目的・適応の科学として捉える枠組みであり、 problem setting や frame creation の強い理論化はまだ薄い。むしろ Schön が、 technical rationality を批判し、 problem solving の前に `problem setting` があることを強調したことで、後の「デザイン思考のアブダクション的核心」に近い地平が開かれた。[Schön](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC)

Peirce の abduction を設計へ明示的に移植した節目として重要なのは [Roozenburg 1993](https://www.sciencedirect.com/science/article/abs/pii/S0142694X0580002X) である。彼は、Peirce の abduction には `explanatory abduction` と `innovative abduction` という二つのパターンがあると整理し、設計で決定的なのは後者だと述べた。ここで abduction は「既存事実を説明する」より「まだ存在しない解を構想する」論理へとずれる。さらに [Dorst 2011](https://www.sciencedirect.com/science/article/pii/S0142694X11000603) は、この設計推論を design thinking の core として位置づけ、 framing と frame creation を中心に据えた。ここで abduction は explanation だけでなく、問題状況の見方、価値、作動原理、解の可能性を同時に編み直す実践へ拡張される。

一方、経営文脈で abduction を強く流通させた Roger Martin は、この概念をさらに一般化した。[Martin 2005](https://www-2.rotman.utoronto.ca/rogermartin/EmbeddingDesign.pdf) では abductive reasoning を `what might be` の論理と呼び、 inductive / deductive logic に偏った企業文化を批判する。[Martin 2009](https://books.google.com/books/about/The_Design_of_Business.html?id=CvpAgm8dQQkC) では design thinking を analytical thinking の補完として、 knowledge funnel を前に進める力として描く。しかしこの段階では、Peirce 的な説明仮説や Roozenburg 的な innovative abduction の論理的厳密さはかなり薄まり、創造的・将来志向のマネジメント能力へと再解釈されている。したがって、`design thinking = abduction` はそのままでは言い過ぎであり、より正確には「設計研究の成熟した一系譜において、 design thinking の核心は abduction を設計的に拡張した framing / problem setting にある」と言うべきである。

## 1. 何を検証するか

本メモの問いは次の三つである。

1. Peirce の abduction は、元来どのような推論だったか。  
2. それが design research の中でどの時点から `problem setting` や `frame creation` の論理として読み替えられたのか。  
3. business design thinking は、その abduction をどの程度まで継承し、どの程度まで一般化・希薄化したのか。  

検証上の注意:

- `abduction = ひらめき` という粗い理解は採らない。
- `Simon = すでに frame creation を言っていた` とも言い切らない。
- `Schön = abduction を明示的に理論化した` とも言い切らない。
- それぞれの文献で、何が明言され、何が後年の再読によって補われているかを分ける。

## 2. 系譜の骨格

### 2.1 Peirce：abduction は explanatory hypothesis の形成

- [SEP の Peirce 補遺](https://plato.stanford.edu/archives/fall2023/entries/abduction/peirce.html) によれば、Peirce の abduction は deduction / induction と並ぶ第三の推論形式で、主たる位置は `context of discovery` にある。
- 同補遺は、後世の `inference to the best explanation` と Peirce の abduction を完全同一視してはいけないと整理している。
- Google Books 上で追える Peirce 関連の定番表現では、abduction は `explanatory hypothesis` を形成する操作であり、新しい考えを導入する推論とされる。[Google Books 集成](https://books.google.com/books/about/Identifying_Relevant_Information_for_Tes.html?id=o0ahF9PJY8YC)
- したがって Peirce の原義では、abduction は「まだない人工物を設計する論理」というより、「観察された事実を説明しうる仮説の提案」である。

### 2.2 Simon：science of design と ill-structured problems

- [The Sciences of the Artificial](https://mitpress.mit.edu/9780262190510/the-sciences-of-the-artificial/) の MIT Press 紹介では、Simon は artificial systems を `goal or purpose` への適応として捉え、 engineering design を含む `science of design` を提案した。
- ここでの寄与は、 design を単なる職人的技能ではなく、人工物一般を扱う学術的領域に引き上げた点にある。
- [Simon 1973「The Structure of Ill Structured Problems」再掲](https://ojs.unbc.ca/index.php/design/article/view/1273) の要旨からも、 ill-structured problems を既存の情報処理枠組みで扱おうとする姿勢が見える。
- ただし、今回確認した範囲では、Simon が design を本質的に `abduction` と命名している証拠は十分ではない。
- したがって Simon は、abductive design thinking の直接定義者というより、後にその議論が立つための `design as a rigorous field` と `ill-structuredness` の土台を与えた、と位置づけるのが妥当である。

### 2.3 Schön：problem setting と reflective conversation

- [The Reflective Practitioner](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC) の Google Books プレビューでは、Schön は problem solving 偏重が `problem setting` を見落とすと明言している。
- 同書の代表的 passages には、現実の問題は practitioner に対して `givens` として現れるのではなく、 `puzzling, troubling, and uncertain` な状況から構成されるとある。
- さらに目次レベルでも、設計は `reflective conversation with the situation` として扱われている。
- これは abduction を名指ししてはいないが、 design における仮説形成を「問題の与件化」以前に置く点で、後の framing 論に決定的な橋を架ける。
- [Chua 2009](https://www.sciencedirect.com/science/article/abs/pii/S0142694X08000811) は、Schön の Simon 批判がやや単純化されてきたことを指摘し、両者を完全な対立項として読むことに修正を加えている。

### 2.4 Roozenburg：explanatory abduction から innovative abduction へ

- [Roozenburg 1993](https://www.sciencedirect.com/science/article/abs/pii/S0142694X0580002X) は、この系譜の重要な分岐点である。
- 要旨で彼は、 design reasoning の多くが plausible reasoning であり、 tentative solutions へ向かう crucial step に Peirce の abduction が関係すると述べる。
- ただしその上で、Peirce に含まれる `explanatory abduction` と `innovative abduction` を区別し、 design に必要なのは後者だと主張する。
- ここで abduction は「すでにある事実の説明」から、「まだ存在しない解の構想」へ移る。
- この転換点を押さえないと、 design thinking の abduction を Peirce の原義にそのまま還元してしまう。

### 2.5 Dorst：design thinking の core を framing / frame creation に置く

- [Dorst 2011](https://www.sciencedirect.com/science/article/pii/S0142694X11000603) は、design thinking の core を問う論文として重要である。
- ScienceDirect 公開要旨では、 design の `fundamental reasoning pattern` を検討したうえで、 core design practices として `framing and frame creation` を扱うと明示されている。
- Highlights でも `Analysing design reasoning in terms of abduction` と `Investigating the creation of new frames as a key design practice` が前面に出ている。
- したがって Dorst において abduction は、単なる創造性一般ではなく、 frame creation を説明する理論装置として用いられている。
- [Frame Innovation](https://books.google.com/books/about/Frame_Innovation.html?id=E6R7BwAAQBAJ) の Google Books 紹介でも、frame creation は borrowed tricks としての design thinking を超え、 `new approaches to the problem situation itself` を作ることだとされる。

### 2.6 Martin：business design thinking への翻訳

- [Martin 2005「Embedding Design into Business」](https://www-2.rotman.utoronto.ca/rogermartin/EmbeddingDesign.pdf) では、企業は inductive / deductive logic に偏っており、 designers はそれに加えて abductive reasoning を使うとされる。
- 同文書では abductive reasoning は `what might be` の論理として紹介され、証明可能性の前に可能性を構想する働きが強調される。
- ここで abduction は design shop の sensibility と結びつき、 wicked problems に向き合う企業の必須能力へと一般化される。
- [The Design of Business](https://books.google.com/books/about/The_Design_of_Business.html?id=CvpAgm8dQQkC) では、この議論はさらに knowledge funnel と reliability / validity のバランスという経営論へ接続される。
- ただし Martin の abduction は、Peirce の explanatory hypothesis や Roozenburg の innovative abduction より広く、しばしば `creative leap` や future-oriented reasoning のほぼ同義語に近づく。

## 3. どこで意味が変わったのか

### 3.1 Peirce と design のずれ

- Peirce の abductionは、基本的には `surprising fact` を説明しうる仮説の形成である。
- これに対して design では、説明すべき事実よりも、達成すべき価値、使われる状況、成立しうる作動原理、実体としての artefact が同時に未確定である。
- したがって design における abduction は、 explanation より `projection` と `construction` の度合いが強い。
- この意味で、design reasoning を単に `inference to the best explanation` と呼ぶのは狭すぎる。

### 3.2 Simon と Schön の間のずれ

- Simon は design を problem solving の一部として体系化した。
- Schön はその problem solving の前に `problem setting` を置いた。
- この差は、単なるスタイルの違いではなく、 design の知がどこで始まるかに関わる。
- ただし [Chua 2009](https://www.sciencedirect.com/science/article/abs/pii/S0142694X08000811) が指摘するように、Simon を素朴な線形合理主義の代表としてだけ読むのも粗い。
- よってこの系譜は `Simon を Schön が乗り越えた` という単純な進化史ではなく、 design のどこに理論的重心を置くかの差として読むべきである。

### 3.3 Roozenburg と Dorst の貢献

- Roozenburg は、 design が explanatory abduction ではなく innovative abduction によって進むと明示した。
- Dorst はそこからさらに、 design thinking の core を `framing and frame creation` に置いた。
- ここで abduction は hypothesis generation から `problem frame generation` へと拡張される。
- この時点で初めて、「design thinking の核心はアブダクションにある」という主張は、かなり具体的な形をとる。

### 3.4 Martin における拡大と希薄化

- Martin は abduction を business audience にとって理解しやすい形に翻訳した。
- その功績は大きいが、代償として、abduction の論理的輪郭は薄くなる。
- `what might be` は実務上は有用な表現だが、 explanation, framing, principle creation, artifact proposition のどれを指すかが曖昧になりやすい。
- この曖昧化が、その後の `design thinking = creative mindset` 的な流通を後押しした可能性が高い。

## 4. design thinking の核心は本当にアブダクションか

### 4.1 強く言えること

- 設計研究の成熟した系譜、とくに Roozenburg と Dorst を経た議論では、 design thinking の核心を abductive と呼ぶのはかなり妥当である。
- ただしそれは deduction / induction の対立物ではなく、それらに先立ち、またそれらと往復する `generative reasoning` である。
- Schön の language を使えば、それは problem setting と reflective conversation の論理である。

### 4.2 留保すべきこと

- `Simon 以来ずっと design thinking の本質は abduction だった` とまでは言えない。
- `Peirce の abduction = design framing` と完全同一視するのも言い過ぎである。
- business design thinking に流通した abduction は、 design research における意味より広く、しばしば loose である。

### 4.3 現時点での最も妥当な定式化

- 最も妥当なのは次の表現である。  
  `design thinking の核心は、 deduction / induction では捉えにくい未定義状況において、価値・問題枠組み・作動原理・解候補を仮説的に生成し、試作と評価を通じて更新する abductive-framing の実践である。`

## 5. 比較表

| 段階 | 主な担い手 | abduction の意味 | design thinking への含意 |
|---|---|---|---|
| 原義 | Peirce | explanatory hypothesis の形成 | discovery の論理として重要だが、まだ設計固有ではない |
| 前史 | Simon | ill-structured problems を扱う design science | abductive turn の前提条件だが、核心を abduction と命名しない |
| 転換 | Schön | problem setting / reflective conversation | design は与件処理ではなく、問題構成から始まる |
| 明示化 | Roozenburg | explanatory ではなく innovative abduction | 設計固有の推論として abduction を直接導入 |
| 核心化 | Dorst | framing / frame creation を支える reasoning | design thinking の core を abduction で説明 |
| 普及化 | Martin | `what might be` の logic | business design thinking に広く流通するが意味は拡大する |

## 6. 結論

1. Peirce の abduction は、まず説明仮説の形成であって、 design の理論として始まったわけではない。  
2. Simon は design を学術的対象として強く押し出したが、 design thinking の核心を abduction と名指してはいない。  
3. Schön は `problem solving` の前に `problem setting` を置いたことで、後の abductive framing 論への橋を架けた。  
4. Roozenburg が explanatory / innovative abduction を区別したことが、 design reasoning と abduction を結びつける決定的節目である。  
5. Dorst において、abduction は framing / frame creation を支える design thinking の core として定式化される。  
6. Martin はそれを business language に翻訳し普及させたが、同時に意味を広げ、やや希薄化した。  
7. したがって「design thinking の核心はアブダクションか」という問いには、`はい、ただしそれは Peirce の原義を設計的に拡張した framing 的アブダクションである` と答えるのが最も正確である。  

## 7. 重要文献

- Charles S. Peirce 関連整理: [Peirce on Abduction, Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/archives/fall2023/entries/abduction/peirce.html)  
  一次資料への導線を含む信頼できる整理。今回の Peirce 理解の入口。

- Herbert A. Simon, *The Sciences of the Artificial* (1969/1996). [MIT Press](https://mitpress.mit.edu/9780262190510/the-sciences-of-the-artificial/)  
  design science の基盤。

- Herbert A. Simon, “The Structure of Ill Structured Problems” (1973; 再掲). [Annual Review of Policy Design](https://ojs.unbc.ca/index.php/design/article/view/1273)  
  ill-structured problems の議論。

- Donald A. Schön, *The Reflective Practitioner* (1984). [Google Books](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=ceJIWay4-jgC)  
  problem setting と reflective conversation。

- N. F. M. Roozenburg, “On the pattern of reasoning in innovative design” (1993). [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0142694X0580002X)  
  explanatory / innovative abduction の区別。

- Kees Dorst, “The core of ‘design thinking’ and its application” (2011). [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0142694X11000603)  
  design thinking の core を framing / frame creation に置く重要論文。

- Kees Dorst, *Frame Innovation* (2015). [Google Books](https://books.google.com/books/about/Frame_Innovation.html?id=E6R7BwAAQBAJ)  
  frame creation の展開。

- Roger Martin, “Embedding Design into Business” (2005). [PDF](https://www-2.rotman.utoronto.ca/rogermartin/EmbeddingDesign.pdf)  
  abductive reasoning = `what might be` の business translation。

- Roger Martin, *The Design of Business* (2009). [Google Books](https://books.google.com/books/about/The_Design_of_Business.html?id=CvpAgm8dQQkC)  
  knowledge funnel と business design thinking。

- Lucy Kimbell, “Rethinking Design Thinking: Part I” (2011). [University of Brighton](https://research.brighton.ac.uk/en/publications/rethinking-design-thinking-part-i/)  
  design thinking の三類型整理と批判。

- Jude Chua Soo Meng, “Donald Schön, Herbert Simon and The Sciences of the Artificial” (2009). [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0142694X08000811)  
  Simon vs Schön の単純対立を修正する準一次整理。

## 8. 未確認・保持論点

- Peirce の原文については、今回のアクセスでは主に SEP と Google Books 上の二次的導線で確認した。厳密な原文校訂版への再確認は今後の余地がある。
- Dorst の `abduction-1 / abduction-2` の詳細整理は、今回の一次確認では十分に追えていない。少なくとも 2011 論文の要旨レベルでは framing / frame creation と abduction の接続は確認できる。
- Martin が Jeanne Liedtka を介して行う abduction の定義は実務上影響力が大きいが、Peirce との論理的連続性は薄い。この点は別途批判的に深掘りしてよい。
