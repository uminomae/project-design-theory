# round 3 レーン 5: 忍耐力の候補探索（frustration tolerance・patience・negative capability・grit）— researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` レーン 5。統合表への反映は v4。

## レーン 5: 忍耐力の候補探索（frustration tolerance・patience・negative capability・grit）— 13 ターン時点の報告

### 1. 未確認のまま残っていたもの
- 統合表 v3 §7-3「性格」行（`docs/issues/ISS-216-candidate-survey.md` L216）: 抱11「忍耐力」に対し曖昧さ耐性を「語の近さで暫定置き」。frustration tolerance・patience・negative capability・grit は四語とも未探索（書誌すら無い）
- r2-laneC（`docs/issues/survey-216/r2-laneC.md` L83・L138）: insight「忍耐力の最近接は曖昧さ耐性（Claude の読み）」→ critic r2 が major（候補探索なしに最近接と言った）。Keats の negative capability は「未確認」とだけ記載
- ローカル grep: negative capability は ks 正本 `knowledge/schema/core-definitions.md` L120（成立条件 L2-L3「認知的枠組み（メタ認知）」の例＝epochē・覚悟・ネガティブ・ケイパビリティ、タグ [M] Keats→Bion）と `knowledge/text/clinical-psychology/part5-aesthetic-conflict-hoji.md` L415（書誌「Letter to George and Tom Keats, 21 December 1817」）のみ。「忍耐」の語は survey-216 の r2/critic にしか無く、knowledge/ には無い。Bion 1970 の該当頁はローカルに無い

### 2. Handoff YAML
```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  lane: 5
  findings:
    - claim: "Keats の negative capability の定義文は Colvin 編 Letters（Gutenberg #35698）Letter XXIV「To George and Thomas Keats, Hampstead, December 22, 1817」に本文で在る。耐える対象は uncertainties, mysteries, doubts。手放すものは irritable reaching after fact and reason。到達点は Beauty が every other consideration を obliterate すること"
      evidence: "Letters of John Keats to His Family and Friends, ed. Sidney Colvin, Macmillan 1925 reprint（初版 1891）, Letter XXIV p.46。https://www.gutenberg.org/files/35698/35698-h/35698-h.htm（原文は照合表に逐語）"
      confidence: high
      verification: [V1, V2]
    - claim: "書簡の日付は版で異なる。Colvin 版は 22 December 1817。ks part5 L415 と fs.blog は 21 December。両方を残す（どちらかに直さない）"
      evidence: "上記 Gutenberg 本文の見出し／knowledge/text/clinical-psychology/part5-aesthetic-conflict-hoji.md L415／https://fs.blog/john-keats-quality-man-of-achievement-negative-capability/"
      confidence: medium
      verification: [V1]
    - claim: "Bion 1970 *Attention and Interpretation*（Tavistock, London, 136pp）が Keats の語を転用したことは二次で一致するが、Bion 自身の patience／security の定義文と頁は未確認。二次の要約は『not knowing の痛みと混乱に耐える能力』（Meg Harris Williams 2009 経由）"
      evidence: "https://en.wikipedia.org/wiki/Negative_capability §Wilfred Bion（Williams, The Aesthetic Development 2009 を引く）／Green, A. 1973 IJP 54:115-119（書評、書誌のみ）／Wellcome 所蔵記録（Tavistock 1970）"
      confidence: low
      verification: [V1]
    - claim: "Rosenzweig 1938 は frustration tolerance を『first approximation』として定義: 'the capacity of the individual to withstand a given frustrating situation without distorting the so-called \"objective\" facts of the life situation'。個人内で水準が一様でなく、小量の frustration で育つとする"
      evidence: "Rosenzweig, S. (1938). VI. A general outline of frustration. Character and Personality（Crossref 上は Journal of Personality）7(2), 151–160, §FRUSTRATION TOLERANCE p.153–154。DOI 10.1111/j.1467-6494.1938.tb02285.x。全文 PDF https://gwern.net/doc/psychiatry/1938-rosenzweig-2.pdf（pdftotext で本文照合）"
      confidence: high
      verification: [V1, V2]
    - claim: "Harrington 2005 の FDS は REBT の frustration intolerance を多次元で測る尺度。四因子＝emotional intolerance／entitlement／discomfort intolerance／achievement。各因子の中身は二次要約（感情的苦痛・不公正と欲求阻止・困難と煩雑・達成目標の阻止への不耐性）。本文未読"
      evidence: "Harrington, N. (2005). The Frustration Discomfort Scale: development and psychometric properties. Clinical Psychology & Psychotherapy 12(5), 374–387. DOI 10.1002/cpp.465（Crossref で書誌確認。要旨は zendy ミラー要約・Wikipedia Low frustration tolerance 経由）"
      confidence: medium
      verification: [V1]
    - claim: "Schnitker 2012 の定義は要旨に逐語で在る: 'Patience is the propensity to wait calmly in the face of frustration or adversity.' 三類型＝interpersonal／life hardship／daily hassles patience。Study 2: 障害があるとき patience が目標追求を助ける。Study 3: 訓練で増える"
      evidence: "Schnitker, S. A. (2012). An examination of patience and well-being. J Positive Psychol 7(4), 263–280. DOI 10.1080/17439760.2012.697185（Crossref 書誌）。要旨 https://instituteofcoaching.org/node/34086"
      confidence: high
      verification: [V1, V2]
    - claim: "Duckworth et al. 2007 の要旨の定義は 'perseverance and passion for long-term goals'。本文の長い定義文（working strenuously… の文）は著者ページ PDF が 403 で未確認。二次（Posner 2016 書評）が 2007 本文として引く文: 'The gritty individual approaches achievement as a marathon; his or her advantage is stamina.' 'Whereas disappointment or boredom signals to others that it is time to change trajectory and cut losses, the gritty individual stays the course.'（頁なし）"
      evidence: "Duckworth, A. L., Peterson, C., Matthews, M. D., & Kelly, D. R. (2007). JPSP 92(6), 1087–1101. DOI 10.1037/0022-3514.92.6.1087。要旨 https://pubmed.ncbi.nlm.nih.gov/17547490/。書評 https://www.newramblerreview.com/book-reviews/psychology/there-s-grit-and-then-there-s-true-grit"
      confidence: medium
      verification: [V1, V2（要旨のみ）]
    - claim: "四語の『耐える／保つ対象』は互いに異なる: Keats＝不確実・謎・疑い（答えに手を伸ばさない）／Rosenzweig＝欲求阻止状況（事実を歪めずに持ちこたえる）／Schnitker＝待つ（frustration・adversity の中で calmly）／Duckworth＝長期目標への努力と興味（失敗・停滞を越えて）。抱11 の『信号を抱持する』対象（予測誤差の信号）を直接に名指すものは四語のどれにも無い"
      evidence: "上記各 finding の原文"
      confidence: medium
      verification: [V2]
  questions:
    - type: clarifying
      target: "抱11「忍耐力」"
      content: "pjdhiro の「忍耐力」は、答えを出さずにいる耐性（Keats 側）と、不快を持ちこたえる耐性（Rosenzweig／Schnitker 側）と、長く続ける耐性（Duckworth 側）のどれに近いか、あるいは場合による（位11）か"
    - type: probing
      target: "Bion 1970"
      content: "ks 正本 L120 は [M] Keats→Bion と置くが、Bion の patience／security の原文頁は未確認。原典（Tavistock 1970 か Routledge 復刻）を手に取るか、[M] のまま置くか"
    - type: probing
      target: "Duckworth 2007 本文"
      content: "長い定義文の逐語と頁（1087–1088 と推定）は原典 PDF でのみ確認できる。要旨の定義で足りるか"
  insights:
    - "Keats の文は『耐える』を言わない。capable of being in… と remaining content with half-knowledge（Coleridge はこれが incapable）。忍耐の語彙でなく『在り方』の語彙で書かれている。抱11 の『心理エネルギー』と近いか違うかは pjdhiro"
    - "Rosenzweig の定義は『事実を歪めずに』が核。抱13「誤解や逆効果になっている知識」（早く結論を出すために事実を歪める）と対になる読みを置ける。これは Claude の読み（[M]）"
    - "Schnitker の三類型は対人・人生・日常の『場』の分類で、認知的な未解決状態は含まない。Duckworth は目標志向で、問いを保つことは主題でない"
```

### 3. 照合表
| 項目 | 原文（逐語） | 出典（版・章・頁） | 深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| negative capability（Keats） | "I had not a dispute, but a disquisition, with Dilke upon various subjects; several things dove-tailed in my mind, and at once it struck me what quality went to form a Man of Achievement, especially in Literature, and which Shakspeare possessed so enormously—I mean Negative Capability, that is, when a man is capable of being in uncertainties, mysteries, doubts, without any irritable reaching after fact and reason. Coleridge, for instance, would let go by a fine isolated verisimilitude caught from the Penetralium of mystery, from being incapable of remaining content with half-knowledge. This pursued through volumes would perhaps take us no further than this, that with a great poet the sense of Beauty overcomes every other consideration, or rather obliterates all consideration." | Colvin ed. 1925 reprint, Letter XXIV, Hampstead, December 22, 1817, p.46（Gutenberg #35698） | 本文○ | 「反射的に処理せず」＝irritable reaching after fact and reason をしない点。uncertainties, mysteries, doubts の中に居続ける点 | 保つのは「問い」でなく half-knowledge で満足する在り方。到達点は Beauty（詩人の資質）。予測・誤差・探索の語は無い。抱11 の忍耐・興味・記憶のどれも語としては無い |
| negative capability（Bion） | 原文未取得。二次: Bion にとって negative capability は not knowing の痛みと混乱に耐え、既成の確信を押しつけないこと（Williams 2009 経由） | Bion 1970 *Attention and Interpretation*, Tavistock（136pp）。頁未確認 | 書誌（二次要約） | 未確認のため材料にしない。ks 正本 L120 は [M] で置く | 分析家の態度としての転用。原文頁が無いので近さ・違いを書けない |
| frustration tolerance（Rosenzweig） | "frustration tolerance might as a first approximation be defined as the capacity of the individual to withstand a given frustrating situation without distorting the so-called \"objective\" facts of the life situation." ／ "the frustration tolerance of an individual need not exist at the same level throughout his personality" ／ "Frustration tolerance appears to be fostered by allowing the child to experience small amounts of frustration" | Character and Personality 7(2) 1938, pp.151–160, §FRUSTRATION TOLERANCE p.153–154 | 本文○ | 「事実を歪めずに持ちこたえる」は、誤差を棄却せず（歪めず）置く点と並ぶ。小量の frustration で育つ＝訓練・習慣の方向（Dewey 行と並ぶ） | 対象は欲求阻止状況であり問いではない。終点は適応（adequacy）。量的・測定志向（"frustration tolerance quotients"） |
| frustration intolerance（Harrington） | 要旨要約: REBT で中心概念だが内容・因子構造が不明確だったため多次元尺度を作成。四因子 emotional intolerance／entitlement／discomfort intolerance／achievement | Clin Psychol Psychother 12(5) 2005, 374–387 | 要旨（二次要約） | 「不快に耐えられない」の下位分類があり、抱13「耐えられない」側を分けて見る道具になりうる | 臨床的な非合理信念の尺度。問いを保つ・探索する側面は無い |
| patience（Schnitker） | "Patience is the propensity to wait calmly in the face of frustration or adversity." 三類型: interpersonal／life hardship／daily hassles patience | J Positive Psychol 7(4) 2012, 263–280（要旨） | 要旨 | 「待つ」が「急いで結論を出さない」（抱13 の反対）と並ぶ。障害があるときほど目標追求を助ける | 待つ対象は人・人生・日常の frustration。認知的未解決は類型に無い。calmly が要件（抱持は違和感が「気になる」状態＝定12 で、calm とは言っていない） |
| grit（Duckworth） | 要旨: "Defined as perseverance and passion for long-term goals"。本文（二次引用・頁なし）: "The gritty individual approaches achievement as a marathon; his or her advantage is stamina. Whereas disappointment or boredom signals to others that it is time to change trajectory and cut losses, the gritty individual stays the course." | JPSP 92(6) 2007, 1087–1101 | 要旨＋二次引用 | 「興味を年単位で保つ」（passion＝consistency of interest）は 抱11 の「興味」と並ぶ | 保つ対象は長期目標への努力。誤差・問いではない。conscientiousness と強相関（要旨） |

### 4. 確認できなかったもの
- Bion 1970 の patience／security の原文と頁: Google Books API 429×2、archive.org 検索ヒット無し、UWE リポジトリ PDF 403、ISPSO・aeon の記事に直接引用無し。→ 原典（Tavistock 1970／Routledge 復刻）が必要
- Duckworth 2007 本文の長い定義文: 著者ページ `sas.upenn.edu/~duckwort/...Grit JPSP.pdf` 403、USC Kortschak PDF は 2019 年の Canva 資料（論文でない）、Gesis ZIS 404。「working strenuously…」の文は検索で一致せず未確認（引用符で置かない）
- Harrington 2005 の要旨逐語: Wiley 403、Semantic Scholar・Crossref は abstract 欠落、UJI リポジトリ 404。因子名は Wikipedia・zendy 要約の二次
- Rosenzweig の journal 名: PDF ヘッダは CHARACTER AND PERSONALITY、Crossref は Journal of Personality（改題後の名）。書誌は両方を併記
- Keats の日付の決着（21／22／27 日）: Rollins 版（1958）は未参照

### 5. 問い・insights
- 問い: 上記 YAML の 3 件（抱11「忍耐力」の意味の場合分け／Bion 原典の要否／Duckworth 要旨で足りるか）
- challenging: 「忍耐力」を四語のどれかに写すと、どれも「保つ対象」が 抱11 の「信号」と一致しない。語を借りずに 抱11 をそのまま置き、四語を「隣」に並べる選択肢もある（決めない）
- insights: YAML の 3 件（Keats は忍耐の語彙でない／Rosenzweig の「歪めず」と 抱13／Schnitker・Duckworth は認知的未解決を主題にしない）
- 「最近接」は決めていない。曖昧さ耐性の暫定置きを外すかどうかは Main・pjdhiro

### 参照したローカルファイル
- `docs/issues/ISS-216-candidate-survey.md`（L24, L135-136, L215-216）
- `docs/issues/survey-216/r2-laneC.md`（L83, L104-109, L138）
- `docs/issues/survey-216/review-critic-r2.md`（L39-40, L68-70）
- `knowledge/schema/core-definitions.md`（L116-124）
- `knowledge/text/clinical-psychology/part5-aesthetic-conflict-hoji.md`（L415）
- Rosenzweig 全文の抽出テキスト（一時・揮発）: $TMPDIR/rz/rz2.txt（L83-146）
