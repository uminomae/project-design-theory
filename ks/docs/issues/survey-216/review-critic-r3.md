# Phase 2 REVIEW（critic・round 3）— critic 報告（原文転記・2026-11-02）

> Main 注: team-critic（fable）の最終報告をそのまま転記。入力は `r3-lane1.md`〜`r3-lane6.md`・ブリーフ r3・統合表 v3 §7・`review-critic-r2.md`。**Main の処置**: §2 の行単位差分と major 2・minor 5 を統合表 v4 に反映。§4 の新 #5〜#7 を §8 に追加し #4 を「済」に。round 4 は不要（紙・図書館でのみ埋まる 4 件は採点後に必要なものだけ）。

# Phase 2 REVIEW（critic・round 3）— 六レーン（Tillich／Frankl・Jaspers／Litman／Koriat・Hart・Polanyi／忍耐力四語／Cross・Lawson）

**critic**: team-critic（READ-ONLY・7 ターン）／入力: `docs/issues/survey-216/r3-lane1.md`〜`r3-lane6.md`・ブリーフ r3・統合表 v3 §7・`review-critic-r2.md`
**独自照合（報告どおりだったもの）**: Koriat 2000 PDF（crystallized p.163・go-between p.163・trace access (Hart, 1965) p.152・not inherently valid p.160）／Litman 2019 PDF（take it or leave it・need to know・induce situational interest or reduce situational uncertainty・always reduces curiosity・resolving recognized discrepancies すべて在る）／Rosenzweig 1938 PDF（first approximation 定義文・small amounts of frustration・誌名 CHARACTER AND PERSONALITY）／Cross 1982 AM（違和感系 14 語 grep 0 件・delight of being a designer・problem-as-given・primary generator 在る）／Jaspers *Einführung* Piper PDF（nennen wir Grenzsituationen・Augen schließen・Verschleierung・Beruhigungen ergreift・redlich hinnimmt 在る）／religiousnaturalism 転写は "is in itself" 形。**ずれ 1 件**: Keats の Negative Capability 句は Colvin 版 Gutenberg #35698 で **p.48**（Letter XXIV は p.46 から始まる。索引も "negative capability, 48"）。レーン 5 の「p.46」は書簡冒頭頁。

```yaml
review:
  from: critic
  phase: 2
  round: 3
  consensus: CONSENSUS-3   # 条件: 下記 major 2 件・minor を v4 転記時に適用
  questions:
    - type: challenging
      target: "レーン 2 Frankl 行の版表記「Beacon 1959 版」"
      content: "1959 の Beacon 初版の題は From Death-Camp to Existentialism で、Man's Search for Meaning の題と Part II 'Logotherapy in a Nutshell' は 1962 増補版から。IA 識別子 manssearchformea0000unse の '1959' は copyright 表記の可能性が高い。noö-dynamics 節が 1959 初版に在るかはレーン自身も §4 で未確認と書く。v4 で「1959 Part II」を維持する根拠は何か"
      verification: [V5, V6]
    - type: probing
      target: "レーン 1 claim 2「1952 と 2000 は本文頁が一致」の根拠"
      content: "IA 画像数差 246−198=48 は序文 xxxiii と一致しない。頁一致の根拠は BU 書評 (176)・Tomer 2008 (p.176) の二次一致に限るべきでは"
      verification: [V6]
    - type: challenging
      target: "レーン 4 insight「信号が立つ条件は予測誤差ではなく accessibility／familiarity」"
      content: "Koriat は予測誤差を論じていない。不在を「ではなく」と対比で書くと、Koriat が予測誤差説を退けたように読める。「Koriat の枠には予測誤差の語が無く、立つ条件は手がかりの accessibility／familiarity」が原文の範囲では"
      verification: [V5]
    - type: structuring
      target: "レーン 3 finding 4 と challenging（I-type は「解消を目的としない」か）"
      content: "脚注 1（接触で必ず低減）と p.421（目的は situational interest の誘発）が揃った。§7-2 I-type 行は「目的が解消でない」から「低減の対象が不確実さでなく、新情報の享受が目的。接触で低減する点は D と同じ」へ書き換え、「保つ」側の候補から外すか"
      verification: [V3, V6]
    - type: clarifying
      target: "レーン 6 insight1 の二読み (a)(b)"
      content: "(b)「Cross・Lawson の『早く決めない』は保つ側」は §7-1 の表（保つの既存論）に行を足すことを意味するか。足すなら Rittel と同じ「問題の性質」枠か、態度の枠か"
      verification: [V5]
  issues:
    - severity: major
      target: "レーン 2 照合表 Frankl 4 行の出典「Beacon 1959/1963・Pocket 1963…」"
      description: "版の帰属が IA メタデータ依存。1959 Beacon 初版は別題で、Part II の差し替え（1962）を二次が言うとレーン自身が §4 に書きながら、表には「Beacon 1959」を本文○の版として載せている。「版が無いのに照合済み」に当たる"
      suggestion: "v4 では「*Man's Search for Meaning* Part II 'Logotherapy in a Nutshell' 節 Noö-Dynamics（1962 以降の Beacon 系。IA 所蔵 OCR 一致。1959 初版 From Death-Camp to Existentialism に在るかは未確認。頁は二次 2006 Beacon p.110）」と書く。「1959 Part II」は消す"
    - severity: major
      target: "レーン 1 照合表 ch.5 行「Yale p.139（goodreads の頁表示）」確認の深さ「本文○（二次転写・頁付き）」"
      description: "goodreads の頁は利用者入力で、三者一致も無い。他行（Killen・Wren・Capetz の一致）と同じ「本文○」に並べるのは深さの表記が過大"
      suggestion: "「二次（goodreads 転写・頁は利用者入力・未照合）」に落とす。BU 書評の (140) courage of despair は別文なので頁の裏づけにしない"
    - severity: minor
      target: "レーン 5 finding 1・照合表「Letter XXIV p.46」"
      description: "Gutenberg #35698 の頁アンカーでは Negative Capability の句は p.48（索引も 48）。p.46 は書簡の開始頁"
      suggestion: "「Letter XXIV pp.46-48（該当句 p.48）」"
    - severity: minor
      target: "レーン 1 全般の「本文○（二次経由の転写）」"
      description: "一次の頁画像は未見で、根拠は転写＋スニペット＋二次頁の一致。表記に括弧の限定があるので妥当だが、v4 で括弧が落ちると「本文○」単独は過大になる"
      suggestion: "v4 の凡例に「転写○＝二次転写・頁は複数二次の一致・頁画像未見」を一段足し、Tillich 行はそれを使う"
    - severity: minor
      target: "レーン 5 finding 3「二次の要約は『not knowing の痛みと混乱に耐える能力』」"
      description: "Williams 2009 経由の要約を『』で囲んでいる。Bion の語と誤読されうる"
      suggestion: "『』を外し「（二次要約・訳）」と付す。Bion 行は現状どおり材料にしない"
    - severity: minor
      target: "レーン 6 finding 4「Lawson 1980・1990 本文に…の語は無い」"
      description: "IA 全文検索（OCR）の 0 件は grep 0 件より弱い。confidence medium は妥当だが、表の「違和感語: 無い」は断定形"
      suggestion: "「IA 全文検索で 0 件（OCR 依存・頁未見）」と書く"
    - severity: minor
      target: "レーン 4 insight（上の questions 参照）"
      description: "「ではなく」の対比が Koriat の主張範囲を超える"
      suggestion: "「予測誤差の語は無い」と不在の形で書く"
    - severity: info
      target: "レーン 3 §5 追加 1 点の確認段階の更新案"
      description: "「2005 要旨○・2019 本文○・2015 本文○・2005/2008/2010 本文未読」は独自照合でも支持できる。v4 に採用可"
      suggestion: "そのまま転記"
  insights:
    - "critical は六レーンとも無し。pjdhiro の原文は全て引用符内で一致（D11・D13・B12・B11・H11）。定義番号なし。気づき／抱持の同一視なし。「保持」の言い換えなし。実在しない出典なし"
    - "六レーンの共通結論は一つの形に揃った: 「解消しない」点では近い候補が多数あるが、保つ**担い手**（Tillich＝faith／Frankl＝意味の呼びかけ／Jaspers＝実存の生成／Keats＝Beauty／Dewey＝探究の訓練）と**対象**（ought の差／限界状況／不確実・謎・疑い／欲求阻止／長期目標／記憶の欠け）が 抱11 の「予測と誤差の信号」と一致する論は無い。これは Claude の横断読み（[M]）で、v4 §0 に一行で置いてよい"
    - "定12「ゼロのはず」の読み分けに材料が増えた: Koriat・Hart・Polanyi（レーン 4）、Litman D-type（レーン 3）、Frankl の gap（レーン 2）はいずれも「欠けがあることは自覚された上での感じ」。「欠けを予測していない状態」を正面から書く候補は round 3 でも出ていない。§8 #1 に添える"
    - "レーン 2・5・6 が独立に 抱13 の対極・同側の原文を拾った: Jaspers 'Beruhigungen ergreift'（同側）・'gegenwärtig hat'（対極）、Rosenzweig 'without distorting'（対極・[M]）、Lawson 'not knowing too early'（対極）、Cross 'seek the certainty…never appreciate'（対極）。§7-3 抱13 表に加える候補"
    - "round 2 major の「近さだけ書いて違いを書かない」偏りは解消。六レーンすべて違い欄が原語で埋まり、「近い」が [M] か Claude の読みであることを明記している"
  convergence:
    agreement: true
    new_insights: true
    open_challenges: 2
    recommendation: "proceed — v4 に major 2 件・minor を反映して転記。round 4 は不要（下記 §5）"
```

## 2. 統合表 v3 §7 の行単位の差分（Main が v4 に転記）

- **§7-1 Tillich 行**: 確認「○ 字句のみ・二次サイト。章・頁・版は未。ch.6 に属するかも未」→「転写○（Yale 1952 初版＝2000 第 2 版 p.176・ch.6 Courage and Transcendence pp.155-190・節 Absolute Faith and the Courage to Be〔節名 medium〕・頁は Killen 1956／Wren／Jeong 2003 の一致・頁画像未見・2014 第 3 版の頁未確認）」。原文は "is in itself"（"is itself" は転写の揺れ）。「違い」に追記: 保つ担い手は faith（'no special content'・'undirected, absolute'）。「探索ではなく受容」→「探索について沈黙（'boundary line' は引き受けが勇気の限界点と言い、先を語らない）」。動詞は原語で三つ並べる: accept／take … into itself／take … upon oneself（訳語を決めない）
- **§7-1 Frankl 行**: 確認「R。1959 Part II。原語未確認」→「本文○（IA 所蔵 OCR 一致・頁×。版: *Man's Search for Meaning* Part II 節 Noö-Dynamics・1962 以降 Beacon 系。1959 初版に在るかは未確認。二次頁 2006 Beacon p.110。独語 Noodynamik 未確認。版差: spiritual〔〜1969〕／existential〔1984〜〕）」。「何を保つか」に定義文（"not homeostasis but what I call 'noö-dynamics'…polar field of tension…"）と ①②③ の三文を原語で。「行為の向き」の「向かう緊張」→原語 'striving and struggling for a worthwhile goal'／'the call of a potential meaning'。「違い」に追記: gap は achieved↔ought／is↔should で不足が自覚された gap（定12 の 0 ではない）
- **§7-1 Jaspers 行**: 確認「R。*Philosophie* II 1932 ch.7」→「本文○（Springer 1932／1956／1973 の IA OCR 一致・第 7 章 Grenzsituationen・頁は二次一致 II 203-204〔一巻本 1948＝469〕・英訳 Ashton *Philosophy* vol.2 1969/70 p.179〔二次〕）＋*Einführung in die Philosophie* 第 2 講 S.18-20（Piper Serie Piper 13・本文○・頁○）」。「行為の向き」の「居る（留まる）」→原語 'offenen Auges eintreten'／'erfahren'／'gegenwärtig haben'／'hinnehmen'（「留まる」は読み手の訳と注記）。「何を保つか」に "Grenzsituationen erfahren und Existieren ist dasselbe" と *Einführung* の定義文。「違い」に追記: 二層（*Philosophie*＝経験＝実存／*Einführung*＝自覚＝哲学の源泉。Staunen・Zweifel と並ぶ三つ目）。両方並べる（位11）
- **§7-1 末尾 Cross・Lawson 段落**: 「原典未読。pd 二次ノートの範囲では…」→「Cross 1982 本文○（ORO AM・Wayback 2023）: 違和感系 14 語 0 件。起点は problem-as-given を 'define, redefine and change'。Lawson 1980/1990 本文（IA 全文検索スニペット・頁未特定・OCR 依存）: 違和感系語 0 件、起点は 'the task, albeit ill-defined, is brought to him'。2005 第 4 版未確認」。R1 insight1 は二読み併記: (a) 違和感起点は Schön・Dorst・Peirce の系に限る／(b) Cross 'never appreciate the delight'・Lawson 'not knowing too early'・'dynamic tension' は起点でなく保つ側 [M]。**§7-1 表に行を足すか**は上の structuring 質問（Main 判断）
- **§7-2 Litman D-type 行**: 確認「書誌＋2019 章要旨・二次。本文未読」→「2005 要旨○（OpenAlex・定義文は要旨に無い）・2019 本文○ p.420（Litman & Jimerson 2004 を定義の原出典として参照）・2015 本文○・2005/2008/2010 本文未読」。定義原文 "activated when individuals become aware that they have an incomplete understanding…"。「違い」: need for closure と非同値の原文（Lauriola et al. 2015 p.203 'can only be satisfied by the right piece of information'）
- **§7-2 Litman I-type 行**: 「当たる場合: 関心（目的が解消でない）」→「関心（目的は situational interest の誘発。'do not feel they are missing any important pieces of information'）」。「違い」: 「『解消を目的としない』であって『解消せず保つ』とは限らない（critic r2）」→「2019 章・2005 要旨・2015 のどこにも『解消せず保つ』は無い。脚注 1 'increased contact…always reduces curiosity'。欠けを感じていないことが前提で 定12「違和感」と前提が逆」。書誌を 2004（定義）＋2005（wanting-liking）に分けるかは Main
- **§7-2 Koriat 行**: 確認「要旨」→「本文○（Conscious Cogn 9(2)・ハイファ大 PDF）」。列語「内容にアクセスせず生じる感じ」→「記憶痕跡への直接アクセスなし（'Rather than reflecting direct access to memory traces…inferential heuristics'）」。crossover 定義 pp.162-163、自覚の始点 p.163 'begins only after the feeling itself has been crystallized' を追記（→as）。「gap の認識は前提か」は「欠けた標的があることは自覚（TOT・FOK）」に直す
- **§7-2 Hart 行**: 「書誌」→「要旨○（APA 要旨・2 実験 N=22/16・'relatively accurate indicator of memory storage'）。RJR の手順名は二次」
- **§7-2 Polanyi 行**: 「R1 pp.21-22。再確認失敗」→「二次（逐語一致・Chicago 2009 pp.21-22 と頁付き転載。1966 Doubleday 頁未確認。'know more than we can tell' は 1966 p.4〔二次 2 件・low〕）＋ Polanyi 1966 *Philosophy* 41 'The Logic of Tacit Inference' 本文○（'vague and subtle intimation'・'discovery without awareness'・頁未特定）」。1966＝2009 同頁の仮定は書かない
- **§7-2 「緊張を保つ」と precision 表**: Frankl・Jaspers の列を（R）→（本文○・頁×／頁は二次）に。「保つ対象」セルを原語（ought↔is の gap／Grenzsituation・endgültig）に
- **§7-3 性格行の「忍耐力（抱11）には語の近さで暫定置き。未探索: …」**→ 新行「忍耐力の候補（抱11）」を四つ並べる: Keats negative capability（Colvin 版 Letter XXIV p.48・本文○・耐える対象 uncertainties, mysteries, doubts・「耐える」の語彙でない）／Bion 1970（書誌・頁未確認・材料にしない・正本 L120 は [M] のまま）／Rosenzweig 1938 frustration tolerance（本文○ p.153-154・'without distorting the so-called "objective" facts'）／Harrington 2005 FDS（要旨・二次要約・四因子）／Schnitker 2012 patience（要旨○・'wait calmly in the face of frustration or adversity'・三類型）／Duckworth 2007 grit（要旨○・'perseverance and passion for long-term goals'・本文の長い定義文は未確認）。**どれが最近接かは書かない**。曖昧さ耐性の暫定置きは外すか Main
- **§7-3 抱13 表**: 追加候補行 Jaspers *Einführung* S.18 'Augen schließen und leben, als ob sie nicht wären'／S.20 'Beruhigungen ergreift'（同側）・'gegenwärtig hat'（対極）；Rosenzweig 'without distorting'（対極・[M]）；Lawson 'not knowing too early'（対極）；Cross 'seek the certainty…well-defined problems will never appreciate'（対極）
- **§7-3 訓練・習慣行**: Rosenzweig 'fostered by allowing the child to experience small amounts of frustration'・Schnitker Study 3（訓練で増える）を候補に追記
- **§0-1・§1 問1 表 Tillich 行**: conf「medium。核心引用は ch.6 で二次資料経由」→「high（頁 176・ch.6 を三者一致で確定。頁画像未見）」
- **§8 #4**: round 3 実施済みにつき削除（または「済」）

## 3. critic r2 の major 6 件の状態

| # | 件 | 状態 |
|---|---|---|
| 1 | Dewey 違い欄 | 解消（v3 で反映済み。round 3 対象外） |
| 2 | 三分類は Claude の軸 | **解消可**: レーン 1・2 で Tillich／Frankl／Jaspers の動詞が原語で取れた。v4 で「行為の向き」列を原語動詞に置換すれば Claude の軸は注記に退く |
| 3 | Bootleg 限定 | 解消（v3 反映。round 3 対象外） |
| 4 | 「反例成立」強すぎ | **解消**: レーン 3 が原典で裏づけ（I-type に「解消せず保つ」記述なし・脚注 1）。残: Silvia & Kashdan 2009 の引用先 4 件は未確認のまま |
| 5 | OM 不在の過大 | 解消（v3 の表記で。Lutz 2008 OM 節の通読は未。round 3 対象外） |
| 6 | 忍耐力「最近接」無根拠 | **解消**: 四語を探索し並べた。最近接は決めていない。残: Bion 1970 の原文頁 |

## 4. pjdhiro への問い（統合表 §8 追加候補。最大 4）

1. **新 #5（レーン 5）**: 抱11「忍耐力」は、答えに手を伸ばさずにいる耐性（Keats）／不快を歪めず持ちこたえる耐性（Rosenzweig・Schnitker）／長く続ける耐性（Duckworth）のどれに近いか、場合による（位11）か
2. **新 #6（レーン 2）**: Frankl の緊張は「現在と為すべき（ought・should）」の差。「欠損」（予想と現実の誤差）と同じ軸に置けるか、別の差か、場合による か
3. **新 #7（レーン 6）**: 位10「デザイン思考では違和感と表現されるかもしれない」に対し、Cross・Lawson の起点語は「与えられる／持ち込まれる問題」で違和感語は無い。designerly 層の「違和感起点」を Schön・Dorst・Peirce の系に限って置くか、層の分け方を変えるか
4. **既存に吸収**: レーン 3・4 の 定12「ゼロのはず」（gap の自覚の有無）→ **既存 #1 に吸収**（添え書き: Koriat・Hart・Polanyi・Litman D-type・Frankl はいずれも欠けの自覚が前提）。レーン 1 の 定11「別軸」＝faith か引き受ける行為か → **§4 #1（両方・まだ決めない）に吸収**。レーン 2 Jaspers 訳語・レーン 1 take into itself 訳語・レーン 3 書誌分割・レーン 6 第 4 版要否は Main の判断（pjdhiro に出さない）

## 5. round 4

**不要**。Web で届く範囲は六レーンとも尽きた（IA 貸出壁・T&F／Wiley 403・Google Books 日次上限）。残りは紙・図書館でのみ埋まるもので、pjdhiro の採点後に必要なものだけ: ① Tillich Yale 2014 第 3 版の頁 ② Frankl Beacon 1962/2006 の頁と 1959 初版に noö-dynamics 節が在るか ③ Bion 1970 *Attention and Interpretation* の patience／security の頁 ④ Litman 2005 本文（"take it or leave it" の初出確認）。これらが無くても pjdhiro の採点材料としては足りる（「未確認」付きで出せる）。

## 6. 判定

**CONSENSUS-3（条件付き）**。critical 0。major 2（Frankl の版帰属・Tillich ch.5 行の深さ表記）は v4 転記時の書き方で直せる。recommendation: **proceed** — v4 に上記 §2 の差分と major 2・minor 5 を反映して転記。§8 は #4 を落とし新 #5〜#7 を加える。

参照ファイル: `docs/issues/survey-216/r3-lane1.md` 〜 `r3-lane6.md`／`docs/issues/ISS-216-candidate-survey.md`（§7 L152-231・§8 L234-241）／`docs/issues/survey-216/review-critic-r2.md`／`knowledge/schema/core-definitions.md` L120／`knowledge/text/clinical-psychology/part5-aesthetic-conflict-hoji.md` L415。独自照合のダウンロード物は scratchpad（揮発）。ファイルの作成・編集なし。

---

# 追補: レーン 7（訓練・習慣）の critic 報告（原文転記・2026-11-02）

> Main 注: team-critic（fable）。入力は `r3-lane7.md`・ブリーフ §4・統合表 §7-3・§8-1 #3。**Main の処置**: §2 の差分 3 件を §7-3 に反映、§3 の #8 を §8 に追加、probing は §5 へ。minor 4 件は転記時に適用。

```yaml
review:
  from: "critic"
  phase: "2"
  round: "3-追補（レーン 7）"
  consensus: CONSENSUS-3
  independent_check:  # Gutenberg #37423・#41386 全文、PMC2693206 本文を取得して逐語照合
    - "Dewey 1910 ch.1 §4（Sec. 4 Summary＝L532〜）L568-583: 'easiest way…' / 'willingness to endure…' / 'suspense is likely to be somewhat painful' / 'training of good mental habits…' / 'To maintain the state of doubt…' 全て一致。ch.2 L850-855・L1046-1053、ch.3 L1062-1076、ch.6（L2245-2580）L2381-2382・2452-2456・2470-2474 も一致"
    - "Dewey 1922 L561 'habits are arts'、L1098-1099 'Character is the interpenetration of habits'、L1195-1200 'essence of habit…It means will'、L1786、L2520-2521 全て一致"
    - "Lutz 2008: 引用 4 句一致。memory／curiosity／interest 本文 0 件、personality 1 件（参考文献題名 Int J Psychophysiol 2005）＝researcher の記述どおり。'trait change' の直前文は注意の regulative skills の話（注意の安定の意、という読みは文脈に合う）"
  questions:
    - type: challenging
      target: "統合表 §7-3 訓練・習慣行「四方向のどれにも入らない」"
      content: "原文は入らないとは言っていない。Dewey 1910 ch.2 は aptitude と分け、ch.3 は好奇心の方向づけと書き、1922・Schnitker は性格側、Lutz は注意技能。researcher の challenging を採る根拠は引用で足りる"
      verification: [V3, V6]
    - type: probing
      target: "Lutz 2008 の分類『独立の変数』"
      content: "同じ論文に 'trainable skills' と 'trait change' が並ぶ。技能（独立）と trait（性格側）の二読みを表に残すべきではないか"
      verification: [V4, V5]
  issues:
    - severity: minor
      target: "r3-lane7 Dewey 1922 出典欄 'Section III, L1098-1099'"
      description: "Section III は L1205 開始。L1098-1099（Character…）と L1195-1200（essence of habit）は Section II 'Habits and Will'、L561 は Section I。行番号は正しく節名だけ誤り"
      suggestion: "統合表に写す時は『Part One §II（L1098-1099, 1195-1200）』に直す"
    - severity: minor
      target: "finding 5 の付記「（性格→習慣ではない）」"
      description: "Dewey 1922 は『性格は習慣の相互浸透』と書くが、逆向きの否定は書いていない。推論の上乗せ"
      suggestion: "付記を落とすか [Claude の読み] と明示"
    - severity: minor
      target: "Lutz 行の近さ欄が『独立の変数』の一読みのみ"
      description: "'trait change' が同 Box 1 にある。違い欄で補っているが近さ欄が片側"
      suggestion: "近さ欄に『技能（独立）／trait（性格側）の二読み』と並記（位11）"
    - severity: minor
      target: "抱13 の引用「早く…スッキリしたい」"
      description: "省略引用。pjdhiro の原文は「早く正解めいた結論を出してスッキリしたい欲求があるはずです」"
      suggestion: "統合表では全文で置く"
    - severity: info
      target: "Schnitker 2012 Study 3"
      description: "『trait を訓練する』の根拠は要旨の語のみ（本文 403）。researcher は明記済み。段階表記は適正"
  insights:
    - "critical／major は検出なし。出典は全件実在・行番号一致、二読み保持、『五つ目に置くべき』の結論なし、pjdhiro の言い換えなし"
    - "「訓練で変わる」は『性格の変化』『興味の方向づけ』『注意の技能』の三つの書き方で原典に現れる。『五つ目か否か』は原典でなく 抱12「性格的なもの」の範囲の取り方で決まる＝pjdhiro への問いに戻る"
  convergence:
    agreement: true
    new_insights: true
    open_challenges: 1   # Lutz 二読み（表の書き方で閉じる）
    recommendation: "proceed"
```

### 2. §7-3「訓練・習慣」行の v4 追補差分（3 件）
1. **候補欄**: 既存 5 件に追加 → 「Dewey 1910 ch.2 §4 "these habits are not a gift of nature"・ch.3 "proper direction, not with creating them"・ch.6 "habits of mind which are at once enterprising and cautious"（本文○・Gutenberg 行・頁未）／Dewey 1922 Part One §I-II "Character is the interpenetration of habits"（本文○・頁未）／Lutz 2008 "trainable skills" / "trait change"（本文○）／Endres 2015 TA（本文○・訓練研究ではない）」
2. **何を言っているか欄**: 「保つ態度は習慣として訓練される」→「保つ態度（suspended conclusion）は獲得される習慣。ただし Dewey 1910 は訓練を生得傾向（好奇心）の方向づけであって創出ではないと書く」
3. **違い欄**: 「四方向のどれにも入らない。五つ目に置くか定義外かは pjdhiro」→「**入り方が資料ごとに違う**: Dewey 1910 ch.2＝aptitude と別（独立）／ch.3＝興味（好奇心）の方向づけ／Dewey 1922・Schnitker＝性格側の変化（character・trait）／Lutz＝注意の技能（独立。'trait change' は注意の安定の意）の二読み／正本 L0-L1＝関係と同層の手段。五つ目か、四方向の『変わり方』かは pjdhiro（#3「よくわからない。一応調べて欲しい」のまま）」。researcher の challenging を採る。「還元される」とも書かない。

### 3. pjdhiro 向けに §8 へ足す問い
- **#8（clarifying・採用）**: 抱12「性格的なもの」は、訓練や経験で変わり得るもの（Dewey 1922 の habits の集積としての character、Schnitker の trait patience）を含むか、生まれつきのもの（Dewey 1910 の temperament・aptitude）だけを指すか。含むなら訓練・習慣は「性格」の中、含まないなら隣。答えは原文で記録し、どちらにも寄せない。
- probing（正本 L0-L1 と L2-L3 epochē 行に修練がまたがるか）は Main の正本読みの課題として §5 不整合側に置く。pjdhiro に聞かない。
