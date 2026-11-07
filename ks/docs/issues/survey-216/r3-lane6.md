# round 3 レーン 6: Cross 1982 と Lawson の本文 — researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` レーン 6。統合表への反映は v4。

# レーン 6: Cross 1982 と Lawson の本文 — 照合報告（round 3）

## 1. 未確認のまま残っていたもの
- 統合表 v3 §7-1 末尾・r2-laneA §3: Cross 1982 と Lawson *How Designers Think* は原典未読。pd 二次ノート（`design-thinking-designerly-vs-business-deep-dive-codex-20260327.md` §2.1・§2.2、L186 が「abstract/書誌レベル」と自認）の範囲では起点を違和感とは言わない。
- round 1 `lane3-design.md` insight1「違和感起点は designerly 層の共有前提」は Schön・Dorst・Peirce の三点のみで、Cross・Lawson で言える／言えないのどちらも書けていなかった。
- 問いは ①Cross 本文の起点・知り方の逐語と違和感語の有無 ②Lawson の ill-defined・問題と解の同時展開の章と違和感語の有無 ③insight1 を両者で言えるか（両読みを残す）。

## 2. Handoff YAML
```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  lane: 6
  findings:
    - claim: "Cross 1982 本文（Accepted Manuscript 全 7 頁分）に surprise・discrepancy・uneasiness・dissatisfaction・unexpected・doubt・discomfort・frustration・anomaly・conflict・tension の語は無い"
      evidence: "Cross, N. (1982) Designerly ways of knowing. Design Studies 3(4) 221–227。ORO 39253 Accepted Manuscript PDF（oro.open.ac.uk は Cloudflare で直接取得不可。Wayback 2023-11-27 取得 https://web.archive.org/web/20231127154634id_/https://oro.open.ac.uk/39253/8/Designerly%20Ways%20of%20Knowing%20DS.pdf、12 頁 PDF）を pdftotext し grep。検索語: surpris|discrepan|uneas|dissatisf|unexpect|doubt|discomfort|frustrat|unhappy|anomal|irritat|conflict|tension|mismatch → 0 件。puzzle は対比語としてのみ 2 箇所"
      confidence: high
      verification: [V1, V2]
    - claim: "Cross の設計の起点は『与えられた問題（problem-as-given）』を設計者が定義し直すことであり、設計者側の違和感ではない"
      evidence: "同 AM、節 'Design processes': \"In order to cope with ill-defined problems, designers have to learn to have the self-confidence to define, redefine and change the problem-as-given in the light of the solution that emerges from their minds and hands.\"／\"What designers tend to do, therefore, is to seek, or impose a 'primary generator' which both defines the limits of the problem and suggests the nature of its possible solution.\""
      confidence: high
      verification: [V1, V2]
    - claim: "Cross は結論で designerly ways of knowing の五側面を列挙し、うち三つが ill-defined・solution-focused・constructive"
      evidence: "同 AM、結論節: \"Designers tackle 'ill-defined' problems.\" \"Their mode of problem-solving is 'solution-focused'.\" \"Their mode of thinking is 'constructive'.\"（他二つは codes／object languages）"
      confidence: high
      verification: [V1, V2]
    - claim: "Lawson *How Designers Think* 1980 初版・1990 第 2 版の本文に discrepancy・uneasy/uneasiness・dissatisfaction/dissatisfied・mismatch・misfit・frustration・discomfort・dissonance の語は無い。surprise は 2〜3 箇所あるが設計の起点の文脈ではない"
      evidence: "Internet Archive 全文検索 API（be-api.us.archive.org/fts/v1、identifier: howdesignersthin0000laws_w7l4＝1980 Architectural Press／howdesignersthin0000laws_v5s2＝1990 Butterworth Architecture）。両版とも貸出制限で本文頁は取得不可、スニペットのみ。surprise の文脈: 画家の逸話 \"it was the artist who to the surprise of all was the most accurate\"／Johnson 引用 \"sudden fits of inadvertancy will surprise vigilance\"／（1990 のみ）\"intelligence software can generate results which surprise us\""
      confidence: medium
      verification: [V1, V2]
    - claim: "Lawson の起点は依頼者から『持ち込まれる』ill-defined な課題であり、設計者の違和感ではない"
      evidence: "1980・1990 両版スニペット: \"the task, albeit ill-defined, is brought to him\"（ランニングヘッド 'A MODEL OF DESIGN [PROBLEMS]' 直前）"
      confidence: medium
      verification: [V1, V2]
    - claim: "Lawson は問題と解を『動的な緊張』にあると書き、過程の中で両方が明確になるとする"
      evidence: "両版スニペット: \"[design problems ... should not be seen as independent of] design problems but rather they should be seen as in dynamic tension with design solutions. 2 Design problems require ...\"（番号付き要約の 1 項目。前半は断片）／\"both problem and solution become clearer as the process goes on\"／\"Design problems cannot be comprehensively stated\"（見出し）"
      confidence: medium
      verification: [V1, V2]
    - claim: "Lawson は wicked problems への対処を『早く知らないこと』と書く（抱13 の対極に当たる記述）"
      evidence: "両版スニペット: \"Part of the art of dealing with wicked problems is in the act of not knowing too early which type of solution to apply.\"（Rittel & Webber 引用の直前。1980 版では章 'Design tactics and traps' のランニングヘッド付近）"
      confidence: medium
      verification: [V1, V2]
    - claim: "Lawson に『不満→再設計』の事例はあるが、起点でなく途中（試行解への不満）"
      evidence: "両版スニペット: \"After several days of puzzling out a plan for the flats they were unhappy with the shape of the living room which they felt would be dark and depressing. During discussions ...\"。unexpected は 1 箇所、閃きの記述 \"[the] solution, he claims, then appears in a sudden and unexpected manner needing further conscious elaboration\""
      confidence: medium
      verification: [V1, V2]
  questions:
    - type: clarifying
      target: "Lawson 2005 第 4 版"
      content: "第 4 版は IA に無く、Google Books API は quota 超過。部構成 'What Is Design?'／'Problems and Solutions' しか確認できていない。版を 1980/1990 で代替してよいか、第 4 版を要するか"
    - type: probing
      target: "Lawson 'dynamic tension' の全文"
      content: "番号付き要約（1〜n 項目）の全文と頁。『緊張』が設計者の内的感覚か、問題と解の論理関係かはスニペットでは決まらない"
    - type: challenging
      target: "insight1"
      content: "Cross・Lawson の起点語は『与えられる／持ち込まれる』問題。designerly 層を『違和感起点』とまとめるのは Schön 系の三点に限るべきか、層の定義を分けるか"
  insights:
    - "Cross・Lawson に共通する態度語は『不確定さの中で早く決めない』（Cross: 'People who seek the certainty of externally structured, well-defined problems will never appreciate the delight of being a designer'／Lawson: 'not knowing too early'）。これは起点（違和感）ではなく保つ側の記述に当たる。[M]"
```

## 3. 照合表
| 項目 | 原文（逐語） | 出典（版・章・頁） | 確認の深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| Cross: 問題の性質 | "It is also now widely recognised that design problems are ill-defined, ill-structured, or 'wicked'. They are not the same as the 'puzzles' that scientists, mathematicians and other scholars set themselves." | Cross 1982, DS 3(4) 221–227, AM 節 'Design processes'（AM は雑誌頁なし） | 本文○ | 「正解が一つでない」状況を扱う点で 抱13 の背景と近い | 問題は「認識される性質」であり、設計者が感じる誤差ではない |
| Cross: 起点 | "designers have to learn to have the self-confidence to define, redefine and change the problem-as-given in the light of the solution that emerges" | 同上 | 本文○ | 与件を疑い直す構え | 起点は problem-as-given（外から与えられる）。違和感・驚きの語なし |
| Cross: primary generator | "seek, or impose a 'primary generator' which both defines the limits of the problem and suggests the nature of its possible solution" | 同上（Darke 引用） | 本文○ | 問いを作る側の動き | 保持でなく「課す・探す」。誤差を保つ記述なし |
| Cross: 構え | "People who seek the certainty of externally structured, well-defined problems will never appreciate the delight of being a designer." | 同上 | 本文○ | 抱13「正解を一つにしたがる」の対極を designer の条件とする | 「耐える」ではなく「delight」。耐性でなく志向の語 |
| Cross: 五側面 | "Designers tackle 'ill-defined' problems. / Their mode of problem-solving is 'solution-focused'. / Their mode of thinking is 'constructive'." | 同上、結論節 | 本文○ | — | 違和感・驚き系の語は五側面に無い |
| Cross: 違和感語 | 無い（検索語: surpris／discrepan／uneas／dissatisf／unexpect／doubt／discomfort／frustrat／unhappy／anomal／irritat／conflict／tension／mismatch） | AM 全文 grep | 本文○ | — | — |
| Lawson: 起点 | "the task, albeit ill-defined, is brought to him" | 1980 初版・1990 第 2 版、章 'A model of design problems' 付近、頁未特定 | 本文（IA スニペット） | — | 起点は依頼。違和感でない |
| Lawson: 問題と解 | "they should be seen as in dynamic tension with design solutions" ／ "both problem and solution become clearer as the process goes on" | 同、頁未特定 | 本文（スニペット） | 決着させず両方を動かし続ける点 [M] | tension は問題–解の関係語。設計者の情動語ではない（文脈は断片） |
| Lawson: 早く決めない | "Part of the art of dealing with wicked problems is in the act of not knowing too early which type of solution to apply." | 同、章 'Design tactics and traps' 付近、頁未特定 | 本文（スニペット） | 抱13 の対極。保つ側の記述に最も近い [M] | 保つ対象は「解の型の判断」。誤差でも問いでもない |
| Lawson: puzzle trap | "The puzzle trap Design problems are not in themselves puzzles. In a puzzle the elements are defined ..." | 同、頁未特定 | 本文（スニペット） | 与件を疑う | 起点語なし |
| Lawson: 不満の事例 | "they were unhappy with the shape of the living room which they felt would be dark and depressing" | 同、事例節、頁未特定 | 本文（スニペット） | 試行解への不満が次の探索を呼ぶ点は 定12 の「違和感が気になって探索」に構造的に近い [M] | 起点でなく途中。対象は具体的な形状で、「ゼロのはずなのに」ではない |
| Lawson: surprise/unexpected | surprise は逸話・引用のみ。unexpected は "solution ... appears in a sudden and unexpected manner" | 同、頁未特定 | 本文（スニペット） | — | 驚きは解の出現（illumination）側。誤差側でない |
| Lawson: 違和感語 | 無い（検索語: discrepancy／uneasy／uneasiness／dissatisfaction／dissatisfied／mismatch／misfit／frustration／discomfort／dissonance／"something wrong"／"feel uneasy"。intuition も 0 件） | IA FTS 両版 | 本文（スニペット） | — | — |
| Lawson 2005 第 4 版 | — | Architectural Press 2005。部 'What Is Design?'／'Problems and Solutions' のみ（T&F 目次） | 書誌 | — | 未確認 |

## 4. 確認できなかったもの
- Cross 1982 の雑誌頁（221–227 内の位置）: ORO は Accepted Manuscript で雑誌頁なし。ScienceDirect 本文は未取得。
- Lawson 1980/1990 の頁: IA は貸出制限（djvu.txt 403）。全文検索スニペットのみで、頁・章題はランニングヘッドからの推定。
- Lawson 2005 第 4 版の章・頁: IA に無し。Google Books API は quota 超過（429）。T&F・academia・stem.org.uk は 403。無許諾の PDF ホストは使わなかった。
- "dynamic tension" を含む番号付き要約の全文と前後文脈。

## 5. 問いと insights
- clarifying: 第 4 版を要するか、1980/1990 で代替可か（Main の判断）。
- probing: 'dynamic tension' 要約の全文と頁。'not knowing too early' の章と頁。
- challenging: insight1 を Cross・Lawson に広げる根拠は本文に無い。二つの読みを並べる — (a) designerly 層の「違和感起点」は Schön・Dorst・Peirce の系に限り、Cross・Lawson の起点は「与えられる問題」なので層の共有前提とは言えない／(b) Cross・Lawson にある「早く決めない」「問題と解の緊張」は起点でなく保つ側で、R1 insight1 の後半「差は起点でなく『急がず保つ』構え」とは整合すると読める。どちらかに絞らない。
- insight: 上記 YAML の 1 件。

スクラッチ（READ-ONLY 作業。repo 外・揮発）: scratchpad/cross/wb.txt（Cross AM 全文テキスト）
参照したローカル: `docs/issues/ISS-216-candidate-survey.md`、`docs/issues/survey-216/lane3-design.md`、`docs/issues/survey-216/r2-laneA.md`、pd `knowledge/research/design-thinking/design-thinking-designerly-vs-business-deep-dive-codex-20260327.md`
