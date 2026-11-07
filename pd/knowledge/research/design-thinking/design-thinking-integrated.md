# 「デザイン思考とは」統合調査レポート

Issue: #35
作成日: 2026-03-27
作成: Claude (agent-team-workflow, cs#188)
入力: design_thinking_gpt-deep-research-report.md, design_thinking_gptpro_report.md, design-thinking-deep-research--codex-20260326.md

## 要約

デザイン思考は単一の方法論ではなく、少なくとも3つの層――設計学的思考（designerly thinking）、Stanford-IDEO型教育実践、経営コンサルパッケージ――が混在している（Johansson-Sköldberg et al. 2013）。核心は abduction・framing・問題設定の往還にあり、5段階プロセスは導入用の recipe であって本質ではない。論理的思考の対立物ではなく、deduction・induction を補う仮説形成と問題再定義の実践として理解するのが最も正確である。形骸化は工程化・共感儀式化・実装欠落で生じるが、問題再定義・仮説形成・試作による学習という有効核は残る。

## デザイン思考の3層

Johansson-Sköldberg et al. 2013 の区分に基づく。

| 層 | 内容 | 代表的論者 | 時期 |
|---|---|---|---|
| Designerly thinking | 設計者の認知・実践・探究様式の研究。独自の知の領域としての設計 | Cross, Schön, Lawson, Rowe | 1970s-1990s |
| Stanford-IDEO method | Visual thinking, needfinding, prototyping を教育可能な方法として体系化 | McKim, Faste, Kelley, Brown | 1960s-2000s |
| Business design thinking | 組織導入用のイノベーション手法パッケージ。desirability/feasibility/viability の統合 | Brown (HBR), Martin, d.school Bootleg | 2000s- |

## 系譜

| 年代 | 人物/出来事 | 貢献 |
|---|---|---|
| 1969 | Simon, *The Sciences of the Artificial* | 設計を人工物の合理的探究として一般化。design を目的志向的行為として位置づけ |
| 1972 | McKim, visual thinking (Stanford) | 視覚化・スケッチ・試作を言語や計算を補完する認知技法として教育に導入 |
| 1973 | Rittel & Webber, "Dilemmas in a General Theory of Planning" | wicked problems 概念の提示。定義・正解・最適解を拒む問題性の記述 |
| 1979 | Lawson, 建築学生 vs 科学系学生の実験 | 設計者の solution-focused strategy を示す。問題理解が解の試行を通じて進むことの発見 |
| 1982 | Cross, "Designerly Ways of Knowing" | design を sciences/humanities に並ぶ「第三の教育領域」として措定 |
| 1983 | Schön, *The Reflective Practitioner* | technical rationality への批判。reflection-in-action と状況との対話の提唱 |
| 1987 | Rowe, *Design Thinking* | 建築・都市計画の設計過程を inquiry structure として体系化。design thinking の語の早期使用 |
| 1992 | Buchanan, "Wicked Problems in Design Thinking" | wicked problems を design thinking に接続。設計を統合的判断の実践として再定位 |
| 1984-2003 | Faste (Stanford) | ambidextrous thinking、身体性・創造性・hands-on の教育。d.school への橋渡し |
| 1991/2005 | Kelley / IDEO / d.school | human-centered design を teachable method として再編。5モードの教育普及 |
| 2006 | Dunne & Martin, Rotman | abductive reasoning を経営教育に翻訳。「まだ存在しないが望ましいもの」を扱う能力の定位 |
| 2008 | Brown, HBR "Design Thinking" | design thinking を経営層向けに「thinking like a designer」として提示 |
| 2011 | Dorst, "The Core of 'Design Thinking'" | design thinking の核心を framing / frame creation に求め、abduction との関係を精緻化 |
| 2011 | Kimbell, "Rethinking Design Thinking" | generalized DT が設計実践の多様性・歴史性を消すことへの批判。situated practices への転換を提唱 |
| 2013 | Johansson-Sköldberg et al. | designerly thinking と management discourse の design thinking を分節。後者の表層性を指摘 |
| 2020s | d.school の自己批判 | 「五つの六角形は THE process ではなく recipe にすぎない」。process から abilities への転換 |

## 用語の区別

| 用語 | 定義 | 注意点 |
|---|---|---|
| Design thinking | 文脈により意味がずれる。狭義は設計者の思考様式の研究、広義は人間中心のイノベーション手法 | 3層を区別しないと混線する（Johansson-Sköldberg et al. 2013） |
| Designerly ways of knowing | design を sciences/humanities に並ぶ独自の知の様式として捉える概念（Cross 1982） | 実務パッケージではなく設計の認識論 |
| Human-centered design | 人への深い共感から始まり、ニーズに合わせて解をつくる創造的アプローチ（IDEO） | IDEO にとっては design thinking の一部であり全体ではない |
| Creative problem solving | 創造的問題解決全般の広い伝統 | design thinking と重なるが、design thinking は needfinding・prototyping・artifact への重心が強い |
| Abduction | 説明仮説を形成する推論操作。新しいアイデアを導入する唯一の論理操作（Peirce） | design における abduction は科学の hypothesis generation と完全には同一でない |
| Deduction | 既知の原理から結論を導く推論 | design thinking でも技術要件の整合性検証等で使用 |
| Induction | 観察から一般化・評価を行う推論 | ユーザーテスト・運用データでの仮説更新に使用 |
| Framing | 何を問題と見なすか、何を価値・成果とみなすかの枠組み自体をつくり直す操作（Dorst 2011） | 古典論理の一形式ではなく、design 実践に特有の再定義操作 |
| Reflection-in-action | 状況の最中での省察と実験。状況との対話を通じた問題と解の共進化（Schön 1983） | 直感の礼賛ではなく反省的実践の記述 |
| Synthesis | 複数の制約と価値をまとめて、ひとつの案・体験・制度として成立させること | 「科学=分析、デザイン=総合」は粗い。差は二元論ではなく前景化の違い |

## 論理的思考との関係

Codex の4行比較表をベースに拡張。

| 推論形式 | 方向 | 目的 | デザイン思考との関係 |
|---|---|---|---|
| Deduction（演繹） | 既知ルール → 個別結論 | 一貫性・予測の確保 | 技術要件定義・整合性検証・プロトタイプの評価設計に使用 |
| Induction（帰納） | 個別事例 → 一般化・評価 | 検証・傾向把握 | ユーザーテスト・観察データによる仮説更新に使用 |
| Abduction（アブダクション） | 驚き・違和感 → 説明仮説 | 新規仮説の形成 | design thinking の中核。ただし「説明仮説」に限定せず生成的仮説を含む |
| Design framing | 状況 → 枠組みの再構成 | 問題・価値・評価軸の設定 | abduction を拡張した設計固有の実践。wicked problems への対処に不可欠 |

Design framing は Peirce の abduction を拡張した設計実践上の呼び名として理解できるが、完全同一視は言い過ぎである（Dorst 2011）。Design framing は説明仮説だけでなく、価値判断・境界設定・評価軸の設計を含み、外化（プロトタイプ）を通じて前進する点で言語命題の推論に還元しにくい。

デザイン思考は論理的思考の対立物ではなく補完物である。対抗していたのは「分析だけで足りる」という狭い合理主義であって、論理そのものではない。Simon は設計を合理的探究として一般化し、Lawson は認知戦略の差を示し（知性の上下ではない）、Schön は技術合理性の限界を論じた（非合理の称揚ではない）。

## 形骸化の6パターン

| # | パターン | 何が失われるか | 発生メカニズム |
|---|---|---|---|
| 1 | 5段階プロセスへの矮小化 | framing の往復、問題の組み替え | mode/recipe を linear stage-gate として運用（d.school 自身が自己批判） |
| 2 | 共感ワークショップ化 | 深い needfinding、社会・制度理解、長期観察 | empathize が短時間インタビューや疑似共感ゲームに縮退 |
| 3 | ポストイット・ブレスト化 | 判断、統合、framing の質 | アイデア数と発散が problem redefinition より重視される |
| 4 | 実装との断絶 | 運用・評価・組織変革 | ideation/PoC で止まり本番実装・評価設計が抜ける |
| 5 | 組織文化との不整合（innovation theater） | 権限配分、KPI、意思決定構造の変更 | ワークショップだけ行われ、組織の意思決定構造は不変（Blank 2019） |
| 6 | 評価不能な万能語化 | 概念の境界、成功/失敗条件 | 人間中心・創造性・共創等を何でも含む曖昧な善語に拡散 |

## 「それでも残る有効核」と「失われた本質」

| 有効核（残る） | 失われた本質（形骸化で消える） |
|---|---|
| 問題再定義: 何を問題とみなすかを組み替える | 素材との対話: スケッチ・模型・状況の back-talk から学ぶ reflective conversation |
| 仮説形成: まだ存在しないが望ましいものの生成的仮説 | 知覚訓練: visual thinking、身体的外化、multiple representational language |
| 試作による学習: プロトタイプを知識生成の実験装置として使う | 長期的判断力: 文脈依存の situated judgment、価値葛藤の統合、曖昧さへの耐性 |

## 主要論争

1. **デザイン思考は方法か、能力か、態度か** -- d.school の近年の自己批判は process から abilities への転換を提唱。Kimbell は cognitive style / general theory / organizational resource の3つの語られ方を整理（Kimbell 2011）
2. **Abduction と design framing は同一か** -- Dorst は framing を abduction の設計的拡張として位置づけるが、framing は価値判断・境界設定・外化を含むため Peirce 的 abduction より広い（Dorst 2011）
3. **形骸化はデザイン思考の本質的欠陥か、普及過程の歪みか** -- Johansson-Sköldberg et al. は designerly thinking と management DT の分断を指摘。d.school 自身も過度のプロセス化を認める。一方で、パッケージ化は教育・普及に不可避な側面もある
4. **HCD はデザイン思考の全体か一部か** -- IDEO は HCD を「背骨」、design thinking をそれを含む broader approach と整理。しかし流通版では HCD = DT として消費されやすい
5. **Wicked problems の射程（社会計画 vs デザイン一般）** -- 元来は Rittel & Webber の社会計画論。Buchanan がデザインに接続したが、あらゆる設計問題が wicked であるわけではない

## 探索すべき問い

- Designerly thinking の核心は教育可能か -- d.school は abilities として教育可能とするが、Kimbell は脱文脈化の危険を指摘する。教育可能な範囲と、長期の実践でしか育たない範囲の境界はどこか
- 形骸化を防ぐ制度的条件は何か -- 評価設計（何をもって成功か）を初期から扱い、外化を意思決定に接続し、反復の学習を制度化すること（組織論レビューの示唆）。具体的な制度設計の知見は不足
- Abduction のデザイン固有性は何か -- 科学の abduction が既存世界の説明仮説を立てるのに対し、design の abduction は「まだ存在しないが望ましいもの」の生成的仮説を含む。この差の論理的位置づけは未決着
- Framing の訳語問題 -- 日本語に定訳がない。「枠組み設定」「問題構成」「再定義」等が混在し、frame creation の操作的意味が伝わりにくい

## 未調査だが重要な領域

- **Alexander（パターンランゲージ）**: 設計知識の構造化と共有の先駆。design thinking との関係は未整理
- **Papanek（社会的デザイン責任）**: デザインの倫理的・社会的次元。business DT が軽視しがちな領域
- **北欧参加型デザイン（Participatory Design）**: ユーザーを共同設計者とする伝統。HCD との異同は重要だが未調査
- **Verganti（meaning innovation）**: 意味のイノベーション。design thinking の問題再定義とどう接続するか
- **Krippendorff（意味論的転回）**: デザインを人工物の意味の設計として捉える。designerly knowing の別入口
- **Double Diamond（Design Council）**: 発散・収束の2ダイヤモンド図式。教育普及への影響は大きいが本レポートでは詳細未検討

## 深掘り候補

| テーマ | 問い | 出典入口 |
|---|---|---|
| Abduction の設計固有性 | 科学の abduction と design の abduction はどこで分岐するか | Dorst 2011; SEP Peirce on Abduction |
| Frame creation の認知過程 | framing はどのような認知操作で成立するか。教育可能か | Dorst 2011; Schön 1983 |
| 形骸化の組織論的条件 | どのような組織構造・評価制度が形骸化を防ぐか | Elsbach & Stigliani 2018; Blank 2019 |
| Visual thinking の認知科学的基盤 | McKim 系譜の visual thinking は認知科学でどこまで支持されるか | McKim; Stanford design history |
| Wicked problems の射程再検討 | Rittel & Webber の本来の射程と、Buchanan 以降の拡張はどこまで妥当か | Rittel & Webber 1973; Buchanan 1992 |

## 出典一覧

本レポートは二次文献中心の調査に基づく。原著本文の全文確認は限定的であり、抄録・公式紹介文・準一次資料に依拠している箇所がある。Codex レポートの URL 付き出典を primary に採用した。

### 一次資料・準一次資料

- Simon, Herbert A. *The Sciences of the Artificial*. MIT Press, 1969/1996. [MIT Press](https://mitpress.mit.edu/9780262537537/the-sciences-of-the-artificial/)
- Lawson, Bryan. "Cognitive Strategies in Architectural Design." *Ergonomics*, 1979. [Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/00140137908924589)
- Cross, Nigel. "Designerly Ways of Knowing." *Design Studies*, 1982. [ScienceDirect](https://www.sciencedirect.com/science/article/pii/0142694X82900400)
- Schön, Donald A. *The Reflective Practitioner*. Basic Books, 1983. [Google Books](https://books.google.com/books/about/The_Reflective_Practitioner.html?id=9QA4DgAAQBAJ)
- Rowe, Peter G. *Design Thinking*. MIT Press, 1987. [MIT Press](https://mitpress.mit.edu/9780262680677/design-thinking/)
- Rittel, Horst W. J. and Melvin M. Webber. "Dilemmas in a General Theory of Planning." *Policy Sciences*, 1973. [DOI](https://doi.org/10.1007/BF01405730)
- Buchanan, Richard. "Wicked Problems in Design Thinking." *Design Issues*, 1992. [PDF](https://web.mit.edu/jrankin/www/engin_as_lib_art/Design_thinking.pdf)
- Brown, Tim. "Design Thinking." *Harvard Business Review*, 2008. [HBR](https://hbr.org/2008/06/design-thinking)
- Dunne, David and Roger Martin. "Design Thinking and How It Will Change Management Education." *Academy of Management Learning & Education*, 2006. [DOI](https://doi.org/10.5465/amle.2006.23473212)
- Dorst, Kees. "The Core of 'Design Thinking' and its Application." *Design Studies*, 2011. [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0142694X11000603)

### 学術レビュー・批判的整理

- Kimbell, Lucy. "Rethinking Design Thinking: Part I." *Design and Culture*, 2011. [University of Brighton](https://research.brighton.ac.uk/en/publications/rethinking-design-thinking-part-i)
- Johansson-Sköldberg, Ulla, Jill Woodilla, and Mehves Çetinkaya. "Design Thinking: Past, Present and Possible Futures." *Creativity and Innovation Management*, 2013. [Chalmers](https://research.chalmers.se/publication/185362)
- Elsbach, Kimberly D. and Ileana Stigliani. "Design Thinking and Organizational Culture: A Review and Framework for Future Research." *Journal of Management*, 2018.

### アブダクション

- "Peirce on Abduction." *Stanford Encyclopedia of Philosophy*. [SEP](https://plato.stanford.edu/archives/Win2018/entries/abduction/peirce.html)

### Stanford 系譜・IDEO

- Stanford Engineering. "Robert McKim, a force in Stanford's product design program, has died." [Stanford](https://engineering.stanford.edu/news/robert-mckim-force-stanfords-product-design-program-has-died)
- Stanford News Archive. "Rolf Faste, associate professor of mechanical engineering, dies." [Stanford](https://news-archive.stanford.edu/pr/03/faste2312.html)
- Stanford d.school. "Founding Principles." [d.school](https://dschool.stanford.edu/stories/founding-principles)
- History of Design at Stanford. [Stanford](https://designhistory.stanford.edu/)
- IDEO. "Did IDEO invent design thinking?" [IDEO](https://designthinking.ideo.com/faq/did-ideo-invent-design-thinking)
- IDEO. "History." [IDEO](https://designthinking.ideo.com/history)

### 形骸化・Innovation theater

- Blank, Steve. "Why Companies Do 'Innovation Theater' Instead of Actual Innovation." *Harvard Business Review*, 2019.

## 方法論ノート（付録）

3本のレポート（Codex/GPT-5 を primary source、GPT-5.4 Pro を secondary、GPT-5.2 Thinking の Deep Research を idea source）を統合した。いずれも二次文献中心の調査であり、原著の全文確認は限定的である。Cross 2023 および Bromage 2025 は実在未確認のため使用していない。
