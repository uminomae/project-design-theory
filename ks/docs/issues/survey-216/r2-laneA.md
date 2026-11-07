# Phase 1 SURVEY round 2 — レーン A: 「保つ」の既存論と原典照合（Tillich・Bootleg・Dewey・Schön・Frankl・Jaspers・Camus・Rittel／Cross・Lawson／pd SURVEY-30fields §11）

**researcher**: team-researcher（READ-ONLY）／2026-11-02／ブリーフ `../ISS-216-survey-brief-r2.md` レーン A
**状態**: 20 ターン上限で途中停止。Bootleg の原文位置は確定。Tillich の頁、Cross と Lawson の原典、Dewey 1933 版、Schön の appreciation、Frankl・Jaspers・Camus・Rittel の頁は未確認。Main が本文を転記（原文のまま）

表中の確認状況は次の三種。
- ○ = 本セッションで原文照合
- R = R1（round 1 または critic）の記述の引継ぎ
- ? = 記憶・未確認

## 1. Handoff YAML

```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 2
  lane: A
  note: "ターン上限で打ち切り。未達の項目は「見送った候補」に明記"
  findings:
    - claim: "d.school の Bootcamp Bootleg（2009 版の更新版を自称する版。以下 版A）に 'hold the tension in your POV' が実在する。2018 版 Design Thinking Bootleg（以下 版B）には無い"
      evidence: >
        版A: PDF を読んで grep。cs.kent.ac.uk 掲載の複製
        https://www.cs.kent.ac.uk/people/staff/saf/patterns/gallery/BootlegBootcamp.pdf
        （PDF メタデータ Author: Thomas Both、作成 2013-07。本文冒頭 "An update from the 2009 edition"）。
        版Aの本文に "2010" の記載は無い。年次「2010」は検索結果側の呼称で、文書内では未確認。
        d.school 公式の元 URL は未確認。
        原文（POV Madlib、印刷頁 21／PDF 24 頁）:
        "[USER] needs to [USER'S NEED] because [SURPRISING INSIGHT]" の直後に
        "Keep it sexy (it should intrigue people) and hold the tension in your POV."
        版B: https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf
        （dschool.stanford.edu/resources/design-thinking-bootleg の DL リンク。PDF 91 頁）。
        'hold the tension'・'contradiction' はゼロ。'tension' は PDF 38 頁の HMW 例 "How Might We Alleviate tension" のみ（別用法）
      confidence: high
      verification: [V1, V2]
    - claim: "Bootleg 版Aは tension と contradiction を insight の種として明示する（Empathy Map）。版Bは contradiction の語を欠き、'Surprise-to-Insights Leap' を置く"
      evidence: >
        版A 印刷頁 15／PDF 18 頁: "Insights often grow from contradictions between two user attributes ... or from asking yourself 'Why?' when you notice strange behavior."
        "One way to identify the seeds of insights is to capture 'tensions' and 'contradictions' as you work."
        版B PDF 79–80 頁（印刷頁 34）: Surprise-to-Insights Leap（Jennifer Hennessy 名義。OCR 表記は Hennesy）。
        PDF 34 頁の POV 枠: "choose your favorite surprise/insight"
      confidence: high
      verification: [V1, V2]
    - claim: "Tillich『The Courage to Be』に 'The act of accepting meaninglessness is in itself a meaningful act. It is an act of faith.' が実在する。章・頁は未確定"
      evidence: >
        https://religiousnaturalism.org/the-courage-to-be/ （抜粋ページ。章・頁の表示なし。書誌は Yale UP 1952 とのみ）。
        前後に "The faith which creates the courage to take them into itself has no special content. It is simply faith, undirected, absolute."
        検索結果上の目次では第6章 = Courage and Transcendence（The courage to accept acceptance）。
        引用がこの章に属するかは抜粋ページから確定できない。頁は未確認。
        二次の抜粋であり、版による字句差がある（"is itself a meaningful act" と表記する転載あり）
      confidence: medium
      verification: [V1, V2（字句のみ。章頁は未確認）]
    - claim: "project-design の SURVEY-30fields.md は、ブリーフ記載の awareness-model/ 直下ではなく knowledge/research/awareness-model/ にある。§11 は Heidegger の Mitsein と Buber の I and Thou を挙げる"
      evidence: >
        pd/knowledge/research/awareness-model/SURVEY-30fields.md
        （調査日 2026-04-07、核心仮説「間主観性の信号が生存関連と同等の価値を持つ」への支持判定の一覧）。
        §11: Heidegger *Being and Time* (1927) Mitsein（章節の指定なし）、Buber *I and Thou* (1923)、判定=支持。
        §30 に "Paul Tillich — Buber への評価" とあるのみで、Tillich の著作の指定なし
      confidence: high
      verification: [V1, V2]
    - claim: "Dewey 1910 ch.1 §3 の '保つ' は R1 の critic が提示した原文。本セッションでは再読していない"
      evidence: "review-critic-r1.md 引用: 'To maintain the state of doubt and to carry on systematic and protracted inquiry—these are the essentials of thinking' / 'suspended conclusion'（How We Think 1910 ch.1 §3）。1933 版の対応箇所は未確認"
      confidence: medium
      verification: [V2（R1 引継ぎ）]
    - claim: "Cross 1982・Lawson について、違和感・驚きを設計の起点と言う記述は、手元の材料（pd の二次ノート）には無い。R1 insight1 を Cross・Lawson で補強できたとは言えない"
      evidence: >
        pd/knowledge/research/design-thinking/design-thinking-designerly-vs-business-deep-dive-codex-20260327.md §2.1・§2.2。
        Cross 1982（Design Studies 3(4)）の要旨 = design を第三の知とする。
        Lawson 1979（Ergonomics。Cognitive Strategies in Architectural Design）の要旨 = 試行解が問題探索を進める、問題と解の共進化。
        同ノート L186 が「Lawson・Rowe は abstract／書誌レベルの再確認にとどまる」と自認。
        Cross 論文・Lawson *How Designers Think* の本文は未読
      confidence: low
      verification: [V1（ノートの実在）, V2 未達]
    - claim: "Frankl・Jaspers・Camus・Schön の '保つ' は R1 の記述を引き継ぐ。原典頁は本ラウンドでも未確認"
      evidence: "lane1-existential.md（Frankl 1959 Part II・Jaspers 1932 Philosophie II ch.7 は medium、Camus 1942 第1部は high）、lane3-design.md（Schön 1983 ch.3 は二次で medium）"
      confidence: medium
      verification: [V2（R1 引継ぎ）]
    - claim: "Rittel & Webber 1973 の 'no stopping rule' は、終わりの規則が無いという問題の性質の記述。保つ主体の態度の記述ではない"
      evidence: "書誌: Policy Sciences 4, 155–169 (1973), DOI 10.1007/BF01405730（pd の design-thinking ノートに記載あり）。'stopping rule' の語と頁は本セッション未確認（記憶ベース）"
      confidence: low
      verification: [V1（書誌のみ）]
  questions:
    - {type: clarifying, target: "Bootleg の年次", content: "版Aの本文に 2010 の記載は無い。ks 側で '2010 Bootcamp Bootleg' と書く場合、d.school 公式の元 PDF（年次の記載あり）を別途確認するか、'2009 版の更新版' と書くか"}
    - {type: probing, target: "Tillich", content: "引用の章・頁。Yale 版か他の版か。第6章に属するかを含め、紙の版で頁確認が要る"}
    - {type: probing, target: "Cross・Lawson", content: "Cross 1982 論文と Lawson 2005 本文で '起点' がどう書かれているか。pd のノートは二次要約"}
    - {type: challenging, target: "Bootleg の tension", content: "'hold the tension in your POV' は POV 文の書き方の助言と読める一方、'問いを保つ' 指示と読むのは読み込みすぎの可能性がある。どちらの場合があるかは原文の範囲では決められない"}
  insights:
    - "Bootleg は版Aと版Bで 'tension'・'contradiction' の扱いが違う。ks 公開面の対比は pjdhiro の判断で外す方針（§4-5）だが、designerly 層の見え方（R1 レーン3）の確認としては、版を特定して書く必要がある"
    - "'保つ' の既存論は、探究へ向かう場合（Dewey・Bootleg）、解消せず留まる場合（Camus・Jaspers・Frankl）、受容する場合（Tillich）に分かれて見える。同時とは書かず、場合分けのまま置く（位11）"
```

## 2. 「保つ」比較表

確認状況: ○ = 本セッションで原文照合／R = R1 引継ぎ／? = 記憶・未確認。引用符で囲んだ英語は原典の語。pjdhiro の原文ではない。

| 誰が（確認） | 何を保つか | 保つ理由 | 解消しない根拠 | いつ終わるか | 抱持との近さ | 違い |
|---|---|---|---|---|---|---|
| Dewey, *How We Think* 1910 ch.1 §3（R。1933 版は未確認） | 疑いの状態。"suspended conclusion" | "systematic and protracted inquiry" を続けるため。"essentials of thinking" と位置づける | 原文の根拠の詳細は未確認。結論を先送りすることが探究の条件、と読める | 探究が証拠にもとづく判断に至るとき（解消が終点） | 結論を急がず、疑いを問いとして置いておく点 | 保つのは探究の手段。保つための内的条件（忍耐・関心・記憶）は主題として未確認。誤差・予測の語彙は無い |
| Schön, *The Reflective Practitioner* 1983（R。ch.3 は二次。appreciation は未確認） | surprise を契機に、状況の back-talk を聴き続けること | 状況が "talk back" し、問題設定を更新するため | 本ラウンドでは未確認 | 行為中に再フレームが成立したとき（R1 の記述） | 期待との差を反省の起点にする点 | 行為中・外部状況との応答。保持というより即座の再フレーム（R1）。appreciation については言えない |
| Frankl, noö-dynamics（R。*Man's Search for Meaning* 1959 Part II） | 達成と為すべきことの間の緊張 | 緊張を保つことが精神的健康の前提とされる（R1） | 緊張は為すべき意味との間にあり、無くすべきものとされない（R1 の読み。原語は未確認） | 終点を置かず、意味の実現を継続する構え（記憶。未確認） | 緊張を無くさずに保つ点 | 緊張の相手は誤差ではなく為すべき意味（R1）。規範的・臨床的な記述 |
| Jaspers, 限界状況（R。*Philosophie* II 1932 ch.7。*Einführung* 1950 ch.2 は未確認） | 解けない状況（死・苦・争い・罪など。記憶） | 状況を経験することが実存することと同じとされる（R1 の逐語二次） | 状況そのものが消えない | 終わらない | 解けない問題に留まる構え | 特定の限界状況に限る。日常の違和感一般ではない。一人称の実存論 |
| Camus, *Le Mythe de Sisyphe* 1942 第1部（R） | 不条理（人間の呼びかけと世界の沈黙の対決） | 同意すれば不条理が消えるため。保つ＝反抗（R1） | 対決は項ではなく関係にあり、同意しない限り意味を持つ（R1） | 終わらない（生きている間。記憶） | 解消せず保つ点 | 探索には向かわない（R1）。別軸の意味は拒否。保つのは反抗という構え |
| d.school Bootcamp Bootleg 版A（○。POV Madlib 印刷頁 21、Empathy Map 印刷頁 15） | POV 文の中の tension。insight の種としての tensions／contradictions | POV を intrigue し、actionable かつ generative にするため（原文の趣旨） | 保つ理由の説明は原文に無い | POV を書き上げ ideation（HMW）へ進むとき | tension という語で矛盾を残す点。種として捕まえる点 | POV 文の書き方の助言として読める。保持の機能というより、解決案の生成へ回収される。版Bには該当句が無い |
| Rittel & Webber 1973（?。書誌のみ○） | 保つのではなく、終わりの規則が無い問題 | 問題の定式化そのものが解の一部になる、と論じる（記憶。未確認） | no stopping rule（頁未確認） | 資源や時間など外的事情で打ち切る（記憶。未確認） | 解消が約束されない問題を扱う点 | 問題の性質の記述で、保つ主体の態度の記述ではない |
| Tillich, *The Courage to Be* 1952（○ 字句のみ。章頁は未確認） | 無意味さを引き受けること（"take them into itself"） | 無意味さの受容自体が "a meaningful act"。それは "an act of faith" とされる | 信仰が "undirected, absolute" で内容を持たない、と書く | 終わりの指定は抜粋内に無い（未確認） | 無意味さを解消せず引き受ける点 | 受容。探索へ向かわない。答えは絶対的信仰（R1）。問いとして保持する機能の記述ではない |

### 場合分けの置き方（位11）
- 保つ → 探究・生成へ向かう場合: Dewey、Bootleg（Schön も行為への再フレームとして並ぶ）。
- 保つ → 解消せず留まる場合: Camus、Jaspers、Frankl の緊張。
- 保つ → 受容する場合: Tillich。
- 上の三つは、どれが抱持に当たるかを決めずに並べている。抱持（反射的に処理せず、誤差を問いとして保持する機能）を「保つこと一般」とは同一視していない。

## 3. designerly 層の起点（Cross・Lawson）
- 原典は読めていない。pd の二次ノート（finding 6）の範囲では、次のように書かれている。
  - Cross 1982 は design を第三の知とする。
  - Lawson 1979 は試行解が問題探索を進めるという解決志向を扱う。
  - どちらも、違和感・驚きを起点とする要約にはなっていない。
- R1 の insight1「違和感起点は designerly 層の共有前提」は、Schön・Dorst・Peirce の三点のまま。Cross・Lawson を加えて層全体と言えるかは「未確認」。言える、とも言えない、とも書けない。
- Bootleg 版Aは business DT 層の資料で、contradiction・tension を insight の種と明記している（実在、高信頼）。R1 レーン3 の「business 層では共感の内側に回収」と矛盾しない。
- 版Bは contradiction の語を欠き、surprise を残している。同じ d.school の中でも、版で語が変わる。

## 4. pd SURVEY-30fields §11 と R1 レーン1 の重なり・差分（1 段落）
§11 は、間主観性の信号が生存と同等の価値を持つという仮説への支持を示す一覧である。Heidegger は Mitsein（共存在）、Buber は I and Thou（出会い）を挙げ、判定は「支持」で、章節の指定はない。R1 の Heidegger は SZ §16（道具の故障）と §40（不安）で、一人称の違和感と無意味さの開示を扱っていた。両者は同じ Heidegger でも主題が違い、§11 の Mitsein は「保つ」とも「無意味さ」とも接点を持たない。Buber は R1 で「他者論、接点薄」として見送った候補である。§11 はその見送りの当否を変えない。ただし §11 は仮説に支持を集めるための調査で、中立の一覧ではない。R1 の候補表には Mitsein・Buber を加えず、他者論を扱うときの参照先として残すのが妥当と見えるが、採否は pjdhiro。

## 5. 見送った候補と理由
- Cross 1982 の本文・Lawson *How Designers Think* 1980/2005: 原典未読。二次要約のみ（打ち切り）。
- Dewey 1933 改訂版の対応箇所: 未照合（打ち切り）。
- Schön の appreciation: 該当箇所と章を特定できず（打ち切り）。
- Frankl *The Will to Meaning* 1969、Jaspers *Einführung* 1950 ch.2: 未読（打ち切り）。
- Camus の「反抗」の原文頁（*L'Homme révolté* 1951 を含む）: 未確認。
- Rittel & Webber 'stopping rule' の頁: 未確認。
- Tillich 紙の版での頁: 未確認。
- 2010 Bootleg の d.school 公式元 PDF: 検索で別の掲載先（スペイン語ブログ経由）が出たが、開いていない。
- pd・cs の Tillich・Camus・Frankl・Jaspers 個別ノート: 確認できた範囲では SURVEY-30fields §30 の Tillich 言及（Buber への評価）のみ。他は個別に調べていない（未確認）。

## 6. 問いと insights
- clarifying: ks で Bootleg を引くときの年次表記（2009 版の更新版／2010）。
- probing: Tillich の章・頁（第6章であることの確認を含む）。Cross・Lawson 本文での「起点」の書き方。
- challenging: Bootleg の 'hold the tension' を「問いを保つ」と読むと読み込みすぎになりうる。POV 文の助言としての読みも並べる。
- insight: 「保つ」の既存論は、探究へ向かう場合・留まる場合・受容する場合に分かれて見える。同時とは書かず、場合分けのまま置く。抱持と一致する論は、本ラウンドの範囲では確認できていない。「無い」と断定する根拠にもならない。

## 7. 参照した主なパス・URL
- `docs/issues/ISS-216-survey-brief-r2.md`、`docs/issues/survey-216/lane1-existential.md`、`lane3-design.md`、`review-critic-r1.md`、`docs/issues/ISS-216-candidate-survey.md`
- `pd/knowledge/research/awareness-model/SURVEY-30fields.md`（ブリーフの `awareness-model/` 直下の記載は誤り）
- `pd/knowledge/research/design-thinking/design-thinking-designerly-vs-business-deep-dive-codex-20260327.md`
- Bootleg 版A: https://www.cs.kent.ac.uk/people/staff/saf/patterns/gallery/BootlegBootcamp.pdf
- Bootleg 版B（2018）: https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf
- Tillich 抜粋: https://religiousnaturalism.org/the-courage-to-be/

補足: `.claude/agents/team-researcher.md` は worktree では Read できず、project-design 側の正本（`pd/.claude/agents/team-researcher.md`）を参照。形式は system prompt の記載に従った。
