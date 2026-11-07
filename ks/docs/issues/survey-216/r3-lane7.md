# round 3 追補レーン 7: 「訓練・習慣」は保つために必要なものの五つ目の方向か — researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` §4 レーン 7（pjdhiro §8 #3「よくわからない。一応調べて欲しい」を受けて）。統合表への反映は v4 追補。

**レーン 7 報告: 「訓練・習慣」は保つために必要なものの五つ目の方向か**（READ-ONLY。ファイル作成・編集なし）

### 1. 未確認のまま残っていたもの（統合表 v4 §7-3 L222・§8-1 #3・正本 L118 を読んだ結果）
- Dewey 1910 は ch.1 の "training of good mental habits" 一句のみ。habit を記憶／興味／性格／関係のどれと結び付けて書いているか（ch.2・3・6、1922 の habit 論）は未読
- Schnitker 2012 Study 3・Lutz 2008・曖昧さ耐性／NFC の可塑性研究は「訓練で変わる」の一行のみで、何が変わると書かれているか（trait か skill か）は未確認
- 正本 L0-L1 の身体的修練は「自律神経調整」層の具体例として置かれており、それ自体が「方向」かどうかは正本に記述が無い

### 2. Handoff YAML
```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  lane: 7
  findings:
    - claim: "Dewey 1910 ch.1 §4 は『疑いを保つ』を習慣の訓練として書く。同じ段落に忍耐・苦痛・早期受容の誘惑が並ぶ"
      evidence: "How We Think 1910, ch.1 §4 Summary（Gutenberg #37423 L568-583）: 'The easiest way is to accept any suggestion that seems plausible and thereby bring to an end the condition of mental uneasiness.' / 'it involves willingness to endure a condition of mental unrest and disturbance' / 'suspense is likely to be somewhat painful' / 'the most important factor in the training of good mental habits consists in acquiring the attitude of suspended conclusion'"
      confidence: high
      verification: [V1, V2]
    - claim: "Dewey 1910 は習慣を『素質の贈り物ではない』と性格・素質から切り離す一方、訓練は『生得の傾向（好奇心等）の方向づけ』であって創出ではないと書く。二つの読みが原文に並ぶ"
      evidence: "ch.2 §4（L1040-1053）: 'these habits are not a gift of nature (no matter how strong the aptitude for acquiring them)' … 'The formation of these habits is the Training of Mind.' ／ ch.3 導入（L1062-1076）: 'Training must, however, be itself based upon the natural tendencies' … 'it is concerned with their proper direction, not with creating them.' ch.3 §1 Curiosity が最初の natural resource"
      confidence: high
      verification: [V1, V2]
    - claim: "Dewey 1910 ch.2 §3 は誤信の内的原因として temperament と habits を別物として並べる"
      evidence: "ch.2 §3（L850-855）: 'the other resides in the specific temperament and habits of the given individual'"
      confidence: high
      verification: [V1, V2]
    - claim: "Dewey 1910 ch.6 は『批判的思考の本質は判断の保留』とし、推論の制御を『企業心と慎重さを兼ねた心の習慣の形成』に置く"
      evidence: "ch.6（L2452-2456）: 'The essence of critical thinking is suspended judgment; and the essence of this suspense is inquiry to determine the nature of the problem before proceeding to attempts at its solution.' ／（L2472-2473）'the formation of habits of mind which are at once enterprising and cautious'"
      confidence: high
      verification: [V1, V2]
    - claim: "Dewey 1922 は habit を『獲得された反応様式への傾性』『特定の刺激への感受性・選好』『意志』と定義し、性格を『習慣の相互浸透』と定義する＝性格が習慣から成る向き（性格→習慣ではない）"
      evidence: "Human Nature and Conduct 1922（Gutenberg #41386）Part One: 'The essence of habit is an acquired predisposition to _ways_ or modes of response' / 'Habit means special sensitiveness or accessibility to certain classes of stimuli, standing predilections and aversions' / 'It means will.'（L1195-1200）／ 'Character is the interpenetration of habits.'（Section III, L1098-1099）／ 'habits are arts'（L561）／ 'Habit is an ability, an art, formed through past experience'（L1786）／ Part Two: 'the most precious part of plasticity consists in ability to form habits of independent judgment'（L2520-2521）"
      confidence: high
      verification: [V1, V2]
    - claim: "Schnitker 2012 Study 3 は訓練の対象を trait patience（特性）と書く＝性格側の変数が訓練で変わる、という書き方"
      evidence: "J Positive Psychol 7(4) 2012 要旨（instituteofcoaching.org 転載。tandfonline・DeepDyve は 403）: 'In Study 3 participants took part in a training program designed to increase trait patience. The program led to increased patience decreased depression and increased positive affect relative to a control condition suggesting that patience may be modifiable.' 方法・効果量は要旨に無い"
      confidence: medium
      verification: [V1, V2]
    - claim: "Lutz 2008 は瞑想を『注意・情動の調整の訓練』と位置づけ、注意の下位成分を『訓練可能な技能』と書く。記憶・興味・好奇心の語は本文に無く、personality は参考文献題名のみ"
      evidence: "Trends Cogn Sci 12(4) 2008（PMC2693206 本文）: 'a family of complex emotional and attentional regulatory training regimes' / 'several subcomponents of attention are best regarded as the product of trainable skills' / Box 1: 'Eventually FA induces a trait change whereby the attention rests more readily and stably on the chosen focus.' / 'Long-term practice of OM meditation is also thought to result in enduring changes in mental and brain function.'"
      confidence: high
      verification: [V1, V2]
    - claim: "曖昧さ耐性は『安定特性として研究されてきた』が状況操作で変わり得る。訓練で上がるという主張には実験的証拠が無いと同論文が書く"
      evidence: "Endres, Camp & Milner 2015 Front Psychol 6:619（PMC4434947 本文）: 'it has primarily been studied as a single factor stable trait' / 'whether it is truly a stable personality trait or an attitude that varies by context' / 'or that intercultural training increases TA' … 'There is no experimental evidence to support these claims, however' / 'These results suggest that TA may be malleable.'（F = 3.96, p < 0.02。効果量なし）"
      confidence: high
      verification: [V1, V2]
  questions:
    - type: clarifying
      target: "pjdhiro"
      content: "抱12「性格的なもの」は、Dewey 1922 のように習慣の集積として変わるものを含むか、temperament（生得）のみを指すか。含むなら訓練・習慣は性格の方向の中に入り、含まないなら隣に置く余地が出る"
    - type: probing
      target: "正本 L0-L1"
      content: "正本は身体的修練を「自律神経調整」の手段として置く。Dewey の mental habits（判断保留の態度）は L2-L3 の epochē 行に近い。訓練・習慣は一つの層でなく複数層にまたがる手段と読めるか"
    - type: challenging
      target: "統合表 §7-3 訓練・習慣行"
      content: "「四方向のどれにも入らない」は原文からは言えない。Dewey・Schnitker・Lutz はそれぞれ興味の方向づけ／性格特性の変化／注意技能として書く。入らないのではなく、入り方が資料ごとに違う"
  insights:
    - "Dewey 1910 の忍耐（endure）・苦痛（painful）・早期受容（easiest way）・習慣訓練は一段落に同居し、抱11・抱12・抱13 の三つに同じ箇所からかかる（critic r2 の指摘を本文で確認）"
    - "「訓練で変わる」と「性格の変数」は原典では対立しない。Schnitker は trait を訓練する、Dewey 1922 は character を habits の浸透と書く。四方向を固定した変数と読むか変わる変数と読むかで、訓練・習慣の置き場所が変わる"
```

### 3. 照合表
| 項目 | 原文（逐語） | 出典（版・章・頁） | 確認の深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| Dewey 1910・習慣訓練と保留 | "the most important factor in the training of good mental habits consists in acquiring the attitude of suspended conclusion" / "willingness to endure a condition of mental unrest and disturbance" / "To maintain the state of doubt and to carry on systematic and protracted inquiry—these are the essentials of thinking" | *How We Think*, Heath 1910, ch.1 §4（Gutenberg #37423 L568-583。1910 版頁は未） | 本文○ | 結論を急がず疑いを置く態度を**獲得される習慣**と書く。抱13 の「早く…スッキリしたい」に当たる 'easiest way … bring to an end the condition of mental uneasiness' が同段落 | 保つ対象は doubt／suggestion（探究の問題）。予測誤差・信号の語彙なし。終点は探究の完了 |
| Dewey 1910・習慣と素質 | "these habits are not a gift of nature (no matter how strong the aptitude for acquiring them)" / "The formation of these habits is the Training of Mind." | 同 ch.2 §4（L1046-1053） | 本文○ | 習慣を aptitude（素質・性格側）から分けて書く → **独立の読み** | 教育論。個人の内的条件を列挙する文脈ではない |
| Dewey 1910・訓練は生得傾向の方向づけ | "Training must, however, be itself based upon the natural tendencies" / "it is concerned with their proper direction, not with creating them." ch.3 の natural resources の第一は Curiosity | 同 ch.3 導入・§1（L1062-1076, 1112-） | 本文○ | 訓練＝好奇心（興味の方向）の方向づけ → **興味に乗る読み** | 好奇心は 'physiological uneasiness' から始まる生得の overflow と書く。違和感（定12）の語ではない |
| Dewey 1910・temperament と habits | "the other resides in the specific temperament and habits of the given individual" | 同 ch.2 §3（L850-855） | 本文○ | 誤信の原因として temperament（性格）と habits を**別物として並べる** | 保つ条件の列挙ではなく、誤りの原因の分類 |
| Dewey 1910・ch.6 | "The essence of critical thinking is suspended judgment; and the essence of this suspense is inquiry" / "the formation of habits of mind which are at once enterprising and cautious" / "an undefined uneasiness and shock may come first" | 同 ch.6（L2381-2382, 2452-2456, 2472-2473） | 本文○ | 保留を習慣形成に帰す。'undefined uneasiness and shock may come first' は 定12「ゼロのはずなのに違和感」の順序に近い [M] | 保留の目的は問題の性質の診断。habit に記憶の語なし |
| Dewey 1922・habit の定義 | "The essence of habit is an acquired predisposition to _ways_ or modes of response" / "Habit means special sensitiveness or accessibility to certain classes of stimuli, standing predilections and aversions … It means will." / "Character is the interpenetration of habits." / "habits are arts" / "plasticity consists in ability to form habits of independent judgment" | *Human Nature and Conduct*, Holt 1922, Part One（Gutenberg #41386 L561, 1195-1200, 1098-1099）, Part Two（L2520-2521） | 本文○（頁は未） | 'standing predilections'＝興味・関心に近い語。'Character is the interpenetration of habits'＝性格は習慣の集積 → 性格の方向に**包含される読み**（ただし向きは逆: 習慣が性格を成す） | 社会心理学・道徳論。「保つ」や保留は主題でない |
| Schnitker 2012 Study 3 | "a training program designed to increase trait patience … suggesting that patience may be modifiable" | *J Positive Psychol* 7(4) 2012, pp.263-280 要旨 | 要旨○（方法・効果量は未。二次: 71 名・2 週間） | 訓練で変わる対象を **trait（性格側）** と書く → 性格の変化としての読み | 対象は frustration／adversity を 'wait calmly'。認知的未解決ではない |
| Lutz 2008 | "a family of complex emotional and attentional regulatory training regimes" / "several subcomponents of attention are best regarded as the product of trainable skills" / "Eventually FA induces a trait change" | *Trends Cogn Sci* 12(4) 2008, 163-169（PMC2693206 Abstract・Box 1・FA 節） | 本文○ | 変わるのは注意の**技能**。記憶・興味・好奇心の語なし → 四方向と**独立の変数**としての読み。正本 L0-L1「身体的修練（瞑想）」に対応 | 誤差・不一致の語なし（r2-laneB と同じ）。'trait change' は注意の安定の意 |
| Endres 2015・曖昧さ耐性 | "it has primarily been studied as a single factor stable trait" / "There is no experimental evidence to support these claims [that intercultural training increases TA]" / "These results suggest that TA may be malleable." | *Front Psychol* 6:619, 2015（PMC4434947 Introduction・Lit Review・Conclusion） | 本文○ | 性格変数（TA）が**状況**で変わる＝性格と状況の二つの読みが同一論文に並ぶ | 変えたのは面接の構造化（状況操作）。訓練研究ではない。NFC は扱わない |
| 正本 L0-L1 | 「自律神経調整｜安全な関係（E10）、身体的修練（瞑想、武道、呼吸法）、環境設計｜[P] Porges, Bowlby; [M] 禅、ヨーガ」 | ks `knowledge/schema/core-definitions.md` L118 | 本文○ | 修練を「関係」と同じ層・同じ手段列に置く → **関係の方向と同層**の読み | 正本は修練を層の手段として書き、独立の「方向」とは書いていない |
| Rosenzweig 1938 | "fostered by allowing the child to experience small amounts of frustration" | *Character and Personality* 7(2) p.153-154 | 本文○（r3-lane5 転記。本レーンで再取得せず） | 耐性は経験で育つ | 対象は欲求阻止。再照合は未 |

### 4. 確認できなかったもの
- Dewey 1910 の 1910 Heath 版頁番号・1933 改訂版: Gutenberg 行番号で代替。頁は未
- Dewey 1922 の節名・頁: Gutenberg 行番号のみ。Section III "Character and Conduct" 以外の節名は未照合
- Schnitker 2012 Study 3 の方法・効果量: tandfonline・DeepDyve が 403。要旨のみ。二次（mindful.org: 71 名・2 週間）は未照合
- need for closure が訓練で変わるかの研究: 検索 1 回。ClinicalTrials.gov NCT07556250（NFC 尺度を結果指標、結果未公開）と Spinelli らの pilot（マインドフルネスで TA の epistemic 次元）が検索要約に出たのみ。要旨未読＝**未確認**
- Dewey 1913 *Interest and Effort in Education*（興味と訓練の関係を直接論じる候補）: 未取得

### 5. 問い・insights
上の YAML の questions／insights に記載。追加: pjdhiro 抱12 の「性格的なもの」を**変わらないもの**と読むか**変わり得るもの**と読むかで、訓練・習慣が「性格の中」か「隣」かが変わる。原典はどちらの書き方もある（Dewey 1910 は切り離し、Dewey 1922・Schnitker は性格側の変化として書く、Lutz は注意技能として独立に書く）。五つ目に置くかは決めない。

### 参照（V1 実在確認済み）
- Dewey 1910: https://www.gutenberg.org/cache/epub/37423/pg37423.txt
- Dewey 1922: https://www.gutenberg.org/cache/epub/41386/pg41386.txt
- Lutz 2008: https://pmc.ncbi.nlm.nih.gov/articles/PMC2693206/
- Endres 2015: https://pmc.ncbi.nlm.nih.gov/articles/PMC4434947/
- Schnitker 2012 要旨転載: https://instituteofcoaching.org/node/34086
- ローカル: `docs/issues/ISS-216-candidate-survey.md` §7-3 L222・§8-1 L260、`docs/issues/survey-216/review-critic-r2.md` L28-49、`docs/issues/survey-216/r3-lane5.md` L73
