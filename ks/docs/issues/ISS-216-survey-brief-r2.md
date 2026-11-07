# ISS-216 段 1.5 候補調査ブリーフ round 2 — critic の missing と棚卸し 抱12/抱13 を三レーンで埋める

**対象 Issue**: https://github.com/uminomae/kesson-space/issues/216
**作成日**: 2026-11-02（round 1 ブリーフ `ISS-216-survey-brief.md`・critic `survey-216/review-critic-r1.md`・統合表 v2 `ISS-216-candidate-survey.md` §6 の追加ラウンド 7 件を受けて）
**実行**: agent-team-workflow・light（Phase 1 SURVEY ×3 並行 → Phase 2 REVIEW ×1）。成果は Main が統合表 **v3** に反映
**pjdhiro の採点（棚卸しの重要度）は未完**（位1 × のみ）。本ラウンドは採点に依存しない「候補を並べる」作業に限る。論の骨子 v0 は採点後

> 中立性原則（`.claude/rules/agents.md`）: 「近い論を探せ」ではなく「何を言っているかを報告し、近さと違いを両方書け」。採否は pjdhiro。
> 態度（pjdhiro 原文・位11）: 「二つの論がある時、両方が同時に起きるというよりも、いろんな場合があるという立場です。なので、両方とも調査する。追っていく。というのが態度です」→ 二つの論が並ぶ箇所はどちらかに絞らず、同時とも書かず、場合分けのまま両方を並べる。

---

## 0. alignment（共有辞書。round 1 と同じ＋追記）

```yaml
alignment:
  task: "round 1 の critic が「pjdhiro の判断に足りない」とした 5 件と、棚卸し 抱12/抱13 で足した 1 件を、原典照合つきで埋める。候補は近い／違う を両方書いて並べる"
  terms:
    欠損駆動思考: "棄却される誤差を、問いとして拾う態度（定義。変えない）"
    欠損: "予想と現実の誤差を、意識が「欠け」として捉えた主観的経験"
    抱持: "反射的に処理せず、誤差を問いとして保持する機能。語は「抱持」。「保持」と言い換えない"
    気づき: "定義は未確定。pjdhiro（2026-11-02）「意識にのぼる信号は、予測と誤差がある場合に立つ。認知される。それは気づきの部品だろう」。抱持とは別概念。定義は awareness-space#149 で立てる"
    表現: "「虚軸に値があって、しかも、認知上は 0 の直観」。定義ではなく仮説・表現。定義との関係は言語化前"
    cos 90°: "比喩か本質かわからない（pjdhiro）。[P][M][S] のタグを当てない"
    タグ: "[P] 一次資料にそう書いてある／[M] 構造的対応（読み手の解釈）／[S] 検証仮説"
  severity_levels:
    critical: "pjdhiro の言葉を言い換えた・概念を同一視した・定義番号を使った・出典が実在しない"
    major: "近さだけ書いて違いを書いていない／出典の章節が無い／一般化しすぎ／二つの論をどちらかに絞った"
    minor: "表現の粗さ、重複"
    info: "参考"
  scope: "一次資料（原典・著作）を優先。ローカル（ks knowledge/・docs/issues/survey-216/・awareness-space・creation-space evidence/・project-design knowledge/research・awareness-model）を先に見てから Web。出典は著作・年・章節・頁まで。確認できない出典は「未確認」と明記し、作らない。「意識とは」に関する知見は awareness-space に残す（→as 印）"
  skip_phases: [3, 4, 5, 6, 7]
  scale: "light"
  review_mode: "single"
```

## 1. pjdhiro の言葉（原文。言い換え禁止。round 1 §1 に加えて）

| ID | 原文 | 日付 |
|---|---|---|
| 定12 | 私としては、コサイン９０度のたとえが、最も欠損駆動を表すと思う。ゼロのはずなのに違和感がある。その違和感が気になって探索したくなる。 | 2026-11-02 |
| 抱11 | 意識にのぼる信号は、予測と誤差がある場合に立つ。認知される。という意味です。それは　気づきの部品だろう、という推測です。その後に、その信号を抱持するのは忍耐力や興味といった心理エネルギーや頭脳の記憶が必要だろう。 | 2026-11-02 |
| 抱12 | 保つために、何が必要なのかわかりません。一般的には脳みそでの記憶力とされると思いますが、心理的な興味関心、性格的なものなど、他にもありそうです | 2026-11-02 |
| 抱13 | 発達が低次の場合、正解を一つにしたがるので耐えられないと思います。早く正解めいた結論を出してスッキリしたい欲求があるはずです。そのせいで誤解や逆効果になっている知識もあるというのが実社会での現象です | 2026-11-02 |
| 位11 | 二つの論がある時、両方が同時に起きるというよりも、いろんな場合があるという立場です。なので、両方とも調査する。追っていく。というのが態度です | 2026-11-02 |
| §4-1〜3 の答え | 定11 の「意味」は両方・まだ決めない／気づき（部品）は前反省的と反省的の両方にまたがる／定12「探索したくなる」は両方（解消欲求も関心も。場合によって違う） | 2026-11-02 |

## 2. 三つのレーン（統合表 v2 §6 の番号を併記）

### レーン A: 「保つ」の既存論と原典照合（§6 の 1・2 ＋ critic 反例の Cross/Lawson・pd §11）

1. **原典照合（§6-1）**: Tillich *The Courage to Be*（1952）ch.6 の該当箇所（無意味さの不安を「在る勇気」が引き受ける）を版・頁・原文行で確定する。d.school Bootleg（2010 Bootcamp Bootleg／2018 Design Thinking Bootleg）に「hold the tension」またはそれに当たる語が**実際にあるか**を版・頁・原文で確定する。無ければ「無い」と書く（round 1 の insight3 はこれに依存して仮置き）
2. **「保つ」比較表（§6-2）**: Dewey『How We Think』（1910 ch.1 §3 "To maintain the state of doubt…" "suspended conclusion"／1933 版の対応箇所）、Schön（*The Reflective Practitioner* 1983 の appreciation・surprise・back-talk）、Frankl（noö-dynamics。*Man's Search for Meaning* 1959/1962 Part II、*The Will to Meaning* 1969）、Jaspers（限界状況・*Einführung in die Philosophie* 1950 ch.2）、Camus（*Le Mythe de Sisyphe* 1942 の「反抗」＝不条理を解消しない）、Bootleg（1 の結果次第）、Rittel（no stopping rule。Rittel & Webber 1973）を**一つの表**に。列: 誰が／何を保つか／保つ理由／解消しない根拠／いつ終わるか／抱持（反射的に処理せず問いとして保持）との近さ／違い
3. **designerly 層の起点（critic 反例）**: Cross 1982 "Designerly ways of knowing"（*Design Studies* 3(4)）と Lawson *How Designers Think*（1980/2005）は、設計の起点を違和感・驚きと言うか、別の語（問題の不良設定・解決志向）か。round 1 レーン 3 insight1「違和感起点は designerly 層の共有前提」が三点（Schön・Dorst・Peirce）で言えるかを、Cross・Lawson で確認
4. **ローカル漏れ**: project-design `knowledge/research/awareness-model/SURVEY-30fields.md` §11（初版は `awareness-model/` 直下と書いていた。誤り）（Heidegger の Mitsein・Buber）を読み、レーン 1 round 1 の実存主義候補との重なり・差分を 1 段落で
5. 各候補に、近い／違う を両方。抱持を「保つこと一般」と同一視しない

### レーン B: 解消しない好奇心・gap 認識なしの違和感・「緊張を保つ」と precision（§6 の 3・4・5 ＋ open monitoring）

1. **解消しない好奇心（§6-3）**: Litman 2005（*Cognition and Emotion* 19(6)。I-type／D-type）、Silvia 2008（*Current Directions in Psychological Science* 17(1)。interest の appraisal）、Van de Cruys & Wagemans 2011（*i-Perception* 2(9)。予測処理の美学）、Berlyne（diversive／specific exploration）。問い: 「解消を目的としない好奇心」に名前があるか。定12「その違和感が気になって探索したくなる」の「探索」は解消欲求か関心か→ pjdhiro は「両方。場合によって違う」。どの論がどの場合に当たるかを**場合分けのまま**並べる。抱13（早く結論を出してスッキリしたい欲求）が D-type／need for closure に対応するかも、近い／違う で
2. **定12 の「0」（§6-4）**: 「ゼロのはずなのに違和感がある」＝ gap の内容が認識されていないのに違和感だけがある状態を扱う概念を一本に: feeling-of-knowing（Hart 1965 *J Educ Psychol* 56(4)）、Koriat の metacognitive feelings（Koriat 2000 *Conscious Cogn* 9(2) ほか）、Polanyi の intimation（*The Tacit Dimension* 1966 pp.21-24 付近）、tip-of-the-tongue（Brown & McNeill 1966）、Loewenstein 1994 の information gap（gap を認識している前提か）。列: 概念／gap の認識は前提か／違和感の内容／探索に向かうか／定12 との近さ／違い
3. **「緊張を保つ」と precision 操作（§6-5）**: Frankl の noö-dynamics・Jaspers の限界状況（レーン 1 round 1 `survey-216/lane1-existential.md` の記述を読む）と、予測処理の precision（Feldman & Friston 2010 *Front Hum Neurosci* 4:215、Hohwy 2012 *Front Psychol* 3:96）を**同じ表に置けるか**。置けるなら列を揃えて置く。置けないなら、何が違う（記述の層・一人称／三人称・規範／機構）かを書く。断定せず、両方の読みを残す
4. **open monitoring（critic 反例）**: Lutz, Slagter, Dunne & Davidson 2008（*TICS* 12(4)）の open monitoring は「予測誤差を解消せずに保つ」に当たるか。focused attention との対比で。→as 印の候補（意識とは、に属する部分）を分ける
5. 各 finding に →ks／→as の印。→as は awareness-space#149 に渡す候補として一覧にする

### レーン C: 「保つために何が必要か」（§6 の 7。抱12・抱13）

1. **四つの方向を並べる**: pjdhiro「わかりません」を前提に、答えを出さず候補を並べる
   - 記憶: ワーキングメモリ（Baddeley）、長期記憶との往復。「問いを保つ」に記憶容量はどこまで関わるか、という既存の論があるか
   - 興味・関心: Silvia の interest（appraisal: novelty-complexity × coping potential）、Litman の I-type、Dewey の interest（*Interest and Effort in Education* 1913）
   - 性格: 開放性（Big Five）、曖昧さ耐性（Frenkel-Brunswik 1949、Budner 1962）、need for closure（Kruglanski & Webster 1996 *Psychol Rev* 103(2)。低 NFC は「保つ」側か）
   - 関係: Bion の container/contained（*Learning from Experience* 1962、*Attention and Interpretation* 1970）、ks `knowledge/concepts/CN-001_internalized-relationship.md`・`knowledge/schema/core-definitions.md` の「抱持の成立条件」（四層）。**正本の成立条件は候補の一つとして扱い、答えとしない**
2. **抱13（抱持できない側）**: 「発達が低次の場合、正解を一つにしたがるので耐えられない」「早く正解めいた結論を出してスッキリしたい欲求」を、成人発達（Kegan *In Over Our Heads* 1994 の orders of mind、Perry 1970 の dualism→relativism）、need for closure（seizing and freezing）、曖昧さ耐性、Bion の PS↔D（paranoid-schizoid／depressive position の往復。*Attention and Interpretation* 1970 ch.12 付近）と並べる。**近い／違う の両方**。「発達が低い＝…」と一般化しない（pjdhiro の言葉は原文のまま）
3. **ローカル**: ks `knowledge/` の抱持の成立条件・CN-001・CN-003（境界ケースブック）・CN-004（集団抱持）に、上の候補と重なる記述があるか。cs・pd に成人発達のノートがあるか（`grep -ri "Kegan\|Perry\|need for closure\|曖昧さ耐性"`）
4. 列: 方向／候補（著者・著作・年・章節）／何を言っているか（原典の語）／抱12・抱13 との近さ／違い／抱持の成立条件（正本）との関係（候補・重なる・別）

## 3. 出力（各レーン共通）

最終メッセージに、この順で（**全体で 250 行以内**。Main が統合表に写すので冗長な前置きは不要）:

1. **Handoff YAML**（`team-researcher.md` の形式。findings は優先度順に最大 12 件。各 finding に claim／evidence（著作・年・章節・頁・URL）／confidence／verification）
2. **表**（Markdown。レーンの問いで指定した列）
3. **見送った候補**と理由（1 行ずつ）
4. **問い**（clarifying／probing／challenging）と **insights**
5. レーン B のみ: →as 候補一覧

守ること:
- 日本語。pjdhiro の原文は引用符つきでそのまま。原文にない語を引用符で囲まない（round 1 critical）
- 近さと違いを**必ず両方**書く。「これが欠損駆動思考だ」と断定しない。二つの論が並ぶ箇所はどちらかに絞らない（位11）
- cos 90°・虚軸にタグを当てない。気づきと抱持を同一視しない。「保持」と言い換えない。定義番号で概念を呼ばない
- 出典は実在確認（V1）。確認できなければ「未確認」。作らない。round 1 で「未確認」になった出典（Bootleg・Dorst & Kokotovich 2015・設計者向けガイドの「共感の分解」）は、確認できた場合のみ格上げ
- ファイルの作成・編集はしない（READ-ONLY）
