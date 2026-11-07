# Phase 1 SURVEY round 2 — レーン B: 解消しない好奇心・gap 認識なしの違和感・「緊張を保つ」と precision・open monitoring

**researcher**: team-researcher（READ-ONLY）／2026-11-02／ブリーフ `../ISS-216-survey-brief-r2.md` レーン B
**状態**: 20 ターン上限で途中停止。確認できた出典と未確認の出典を分けて記載。Main が本文を転記（原文のまま）

前提と制約
- `.claude/agents/team-researcher.md` は Read が失敗した。同名ファイルは ls で存在を確認済みで、形式はシステムプロンプトの定義に従った。
- 書誌（誌名・巻号・頁）は Crossref で確認した。
- 出典の語句は引用符で囲まず、日本語で言い直し、原語は括弧に入れた。引用符は pjdhiro の原文だけに使った。
- 要旨・本文を読めなかったものは「内容未読」「未確認」と明記した。
- 「ゼロのはず」の 定12 原文は「ゼロのはずなのに違和感がある。その違和感が気になって探索したくなる。」

## 1. Handoff YAML

```yaml
handoff:
  from: "researcher(lane B, round 2)"
  phase: 1
  round: 2
  findings:
    - claim: "解消を目的としない好奇心の名前は、ある。Litman の I-type（interest-type）は situational interest を高めることを目的とし、D-type は situational uncertainty の低減を目的とする（質的に別）。これが解消欲求／関心の場合分けに最も直接当たる"
      evidence: "Litman 2005 Cogn Emot 19(6):793-814（書誌 V1 済・本文は二次のみ）／Litman 2019 Cambridge Handbook of Motivation and Learning pp.418-442 の章要旨（V2 済）"
      confidence: medium  # 2005 本文未読。D-type=不快な need to know、I-type=take it or leave it の別。2019 章要旨は読了
      verification: [V1, V2]
    - claim: "Silvia & Kashdan 2009 は、curious な人は不確実さを意図的に引き延ばす（まだ見つかっていないことへの反復思考が快だから）、gap への注意は tension-producing であると同時に enjoyable、と書く。解消しない側の明示例"
      evidence: "Silvia & Kashdan 2009 Soc Pers Psychol Compass 3(5):785-797（本文 pdftotext で読了）。節 'Curiosity as an Enduring Strength'。引用先 Bryant & Veroff 2007／Wilson et al. 2005／Berns et al. 2001／Panksepp & Moskal 2008 は今回未確認"
      confidence: high  # 同書の記述としては。引用先は未確認
      verification: [V1, V2]
    - claim: "Silvia の interest は novelty-complexity と coping potential の二つの appraisal。新しく、かつ理解できそうなら interest、新しいが理解できないなら confusion・anxiety・discomfort。保てるかは『理解できそうか』に依存すると読める（場合分けの一方）"
      evidence: "Silvia 2005 Emotion 5(1):89-102（書誌 V1）／Silvia & Kashdan 2009 本文 pp.787-788 付近（V2 済）／Silvia 2008 Curr Dir Psychol Sci 17(1):57-60 は書誌と要旨冒頭のみ（本文未読）"
      confidence: medium
      verification: [V1, V2]
    - claim: "Van de Cruys & Wagemans 2011 は、予測を壊されたときの negative affect を重視しつつ、報酬は『不確実な状態から予測可能性の増した状態への移行』から来ると言う（一時的な未解消は含むが、報酬の源は移行＝解消側）"
      evidence: "i-Perception 2(9):1035-1062 の要旨（V2 済）。PMID 23145260"
      confidence: high
      verification: [V1, V2]
    - claim: "Kiverstein, Miller & Rietveld は、valence を予測誤差の低減の『速度』に結びつけ、好奇心・遊びが快い理由を error dynamics で説明する。学習の進み（progress）に向かう側の語彙"
      evidence: "Synthese 196(7):2847-2869（2017 オンライン）。要旨 V2 済"
      confidence: high
      verification: [V1, V2]
    - claim: "gap の内容が認識されていないのに feeling だけがある状態の最近接は Koriat の noetic feelings。経験ベースのメタ認知判断で、推論的ヒューリスティクスにより暗黙に生じ、意識的な感じになったあと制御行為に影響する。Litman, Hutchins & Russon 2005 が epistemic curiosity と feeling-of-knowing を直接つなぐ（要旨未読）"
      evidence: "Koriat 2000 Conscious Cogn 9(2):149-171 要旨（V2 済）。Hart 1965 J Educ Psychol 56(4):208-216／Brown & McNeill 1966 JVLVB 5(4):325-337／Litman et al. 2005 Cogn Emot 19(4):559-582 は書誌のみ V1 済、内容未読"
      confidence: medium
      verification: [V1, V2]
    - claim: "Loewenstein の information gap は gap への注意が前提（知識の穴に注意が向く→欠乏感→探索）。定12 の『ゼロ』（gap の内容が認識されていない）とは前提が違う。今回は原典を再読していない"
      evidence: "Loewenstein 1994 Psychol Bull 116(1):75-98（書誌 V1）。内容は round 1 lane2 の V2 済記述に拠る。二次記事で要旨文言を確認できず（原文未確認）"
      confidence: medium
      verification: [V1]
    - claim: "Feldman & Friston は precision を注意として定式化（予測と精度の両方が最適化される）。Hohwy は意識的知覚を予測誤差最小化の帰結、注意を precision 期待の最適化とする。Frankl/Jaspers とは記述の層が違い、同じ表の同じ列には置きにくい（置ける列は限られる）"
      evidence: "Feldman & Friston 2010 Front Hum Neurosci 4:215 要旨／Hohwy 2012 Front Psychol 3:96 要旨（V2 済）。Frankl・Jaspers は round 1 lane1 の記述（medium）。今回は原典を再照合していない"
      confidence: medium
      verification: [V1, V2]
    - claim: "open monitoring（OM）の定義は non-reactive monitoring of the content of experience from moment to moment で、目的は感情・認知パターンの性質を認識すること。本文は誤差や不一致を検出して保つとは書いていない。Lutz 2019 の active inference 定式化は focused attention（FA）のみ。Laukkonen & Slagter 2021 は FA・OM・non-dual を一つの連続体に置き、予測の習慣を手放す方向と書く。よって OM を『予測誤差を解消せずに保つ』に当てる記述は今回の資料に無い"
      evidence: "Lutz, Slagter, Dunne & Davidson 2008 TICS 12(4):163-169（PMC 本文 V2 済。Box 2・Table 1）／Lutz, Mattout & Pagnoni 2019 Curr Opin Psychol 28:166-171 要旨／Laukkonen & Slagter 2021 Neurosci Biobehav Rev 128:199-217 要旨"
      confidence: medium  # 不在判定。OM の本文全体ではなく要旨・Box を読んだ範囲
      verification: [V1, V2]
    - claim: "抱13（早く結論を出してスッキリしたい）は、Litman の D-type（不快な need to know を満たして低減する）と語の上で重なる面がある。ただし D-type は好奇心の一型で、結論を急ぐ性向（need for closure）とは別概念。両者の関係を実証したのが Litman 2010 だが、結果は今回未読"
      evidence: "Litman 2010 Pers Individ Dif 48(4):397-402（書誌 V1、結果未読）／Kruglanski & Webster 1996 Psychol Rev 103(2):263-283（書誌 V1、内容はレーン C）"
      confidence: low  # 関係の方向は未確認
      verification: [V1]
    - claim: "Frankl の noö-dynamics と Jaspers の限界状況は、『緊張を保つ』の名前つき概念（round 1 lane1）。今回は原典の再照合ができていない。Frankl は為すべき意味との間の緊張、Jaspers は解けない状況に留まること、と round 1 に記録"
      evidence: "survey-216/lane1-existential.md の候補表（Frankl 1959 Part II, Jaspers 1932 ch.7。medium）"
      confidence: medium
      verification: [V1]
    - claim: "round 1 の insight（好奇心研究は一貫して解消志向）への反例は成立する。I-type（Litman）、interest（Silvia）、不確実さの引き延ばし（Silvia & Kashdan）。いっぽう Van de Cruys・Kiverstein・Loewenstein・Berlyne 型は解消または progress の側。どちらかに絞らず場合分けで並べる"
      evidence: "上記 findings"
      confidence: medium
      verification: [V2]
  questions:
    - {type: clarifying, target: "定12 の違和感の対象", content: "『ゼロのはずなのに』は、gap の内容が分からない場合（feeling のみ）と、分かるが予測は差なしの場合のどちらか。後者なら Loewenstein 型に近づく。両方ありうる、と置いてよいか"}
    - {type: probing, target: "OM", content: "OM を『誤差を保つ』に当てる記述は今回無かった。pjdhiro が OM に見ているのは、反応しないことか、何も取り除かないことか。as#149 側の問いと揃えるか"}
    - {type: challenging, target: "表の層", content: "Frankl/Jaspers（一人称・規範）と precision（三人称・機構）を同じ表に並べると、似て見えるのは列を揃えたためかもしれない。表の体裁自体が対応を示唆していないか"}
  insights:
    - "解消志向／関心志向の場合分けは Litman（D-type／I-type）と Silvia（coping potential の有無）で、論として二本ある。どちらが働くかは場合による、と置ける"
    - "定12 の前半（gap の内容が分からないのに感じがある）は Koriat 型、後半（気になって探索）は Litman・Silvia・Loewenstein 型と、文献の島が分かれる。両方を一つで言う論は今回も見つからない"
    - "PP 側（Van de Cruys・Kiverstein）は、未解消でも報酬が出るのは解消へ向かう途中だから、と説明する。『保つ』自体を目的にする記述は PP 側に見つからない（範囲は読んだ要旨）"
```

## 2. 表

### 2-1. 解消しない好奇心と探索（定12「その違和感が気になって探索したくなる」）

pjdhiro は「両方。場合によって違う」と答えている。場合分けのまま並べる。

| 論 | 何を言っているか（原典の語） | 当たる場合 | 定12 との近さ | 違い |
|---|---|---|---|---|
| Litman D-type | 不快な need to know。満たされるまで強まる。situational uncertainty の低減が目的 | 解消欲求 | 「気になって」の側 | 目的が解消。抱13 の「スッキリしたい」と語は近いが、need for closure とは別概念（関係は未読） |
| Litman I-type | take it or leave it の態度。situational interest を高めることが目的 | 関心 | 解消を目的にしない側 | 気になる圧は弱い。「違和感」の語は無い |
| Silvia interest | novelty-complexity と coping potential。new but comprehensible で interest、incomprehensible で confusion・anxiety | 関心（理解できそうなとき） | 関心が働く条件を与える | 理解できなければ関心でなく不快になる。違和感が強いときの記述が薄い |
| Silvia & Kashdan 2009 の記述 | 不確実さを意図的に引き延ばす。gap への注意は tension-producing かつ enjoyable | 関心（解消しない） | 解消しない好奇心の明示例 | 快が前提。不快な違和感を保つ話ではない。引用先は未確認 |
| Loewenstein information gap | gap に注意が向くと欠乏感、取得で低減（二次記述） | 解消欲求 | 流れが 定12 に近い | gap の認識が前提。定12 は gap の認識自体が問題 |
| Berlyne | collative variables（novelty・complexity・uncertainty・conflict）。specific／diversive exploration | 両方の語彙 | 語彙が近い | 今回は diversive／specific の原典を読んでいない（未確認）。Silvia & Kashdan は collative variables のみ記述 |
| Van de Cruys & Wagemans 2011 | 予測の破壊の negative affect→回復時の報酬。不確実から予測可能への移行が報酬 | 解消へ向かう途中 | 違和感が起点 | 報酬は移行側。保つこと自体は主題でない |
| Kiverstein et al. | valence は誤差低減の速度。好奇心・遊びが快い理由 | progress | 探索が快い理由を説明 | 低減の速度が鍵。低減しない場合の記述は要旨に無い |

### 2-2. gap の認識なしの違和感（定12「ゼロのはずなのに違和感がある」）

| 概念 | gap の認識は前提か | 違和感の内容 | 探索に向かうか | 定12 との近さ | 違い |
|---|---|---|---|---|---|
| Koriat noetic feelings（2000） | 前提でない。内容にアクセスせず生じる感じ | 知っている／いない、の感じ。推論的ヒューリスティクスで暗黙に生成 | 感じが制御行為を左右する | 内容が不明なのに感じだけある点 | 記憶・知識の領域。予測との差の語は無い |
| feeling-of-knowing（Hart 1965） | 想起できない項目について感じを持つ | 内容未読 | 内容未読 | 書誌のみ確認。Koriat が継承する領域 | 内容未読 |
| tip-of-the-tongue（Brown & McNeill 1966） | 欠けた語があることは分かっている | 内容未読 | 内容未読 | 書誌のみ確認 | gap（語が欠けている）は認識されている |
| James 1890 ch.IX の fringe 記述 | 欠けていることは分かる | 空白だが活発（二次記事で語句を確認。原文は psychclassics.yorku.ca の prin9 で未確認） | 名前に向けて引く感じ | 空白が単なる空白でない点 | 欠けた名は想起したい対象で、定12 の「ゼロのはず」とは別 |
| Polanyi intimation（1966） | 未解決の一貫性への予感 | round 1 では pp.21-22。今回は原文確認に失敗（未確認） | 問題を見ること | round 1 の近さの評価に従う | 認識論。情動は主題外 |
| Litman, Hutchins & Russon 2005 | feeling-of-knowing と epistemic curiosity を結ぶ（題名のみ） | 要旨未読 | 探索行動（題名） | FOK と好奇心の橋になりうる | 内容未読 |
| Loewenstein 1994 | 前提（gap への注意） | 欠乏感 | 向かう | 流れは近い | gap の認識が前提 |

未読の候補: Whittlesea & Williams 2001（予期せぬ不一致から生じる familiarity の感じ）、Nieuwenhuis et al. 2001（誤差関連電位と誤りへの気づき）。書誌のみ確認し、内容は未読。

### 2-3. 「緊張を保つ」と precision

| 項目 | Frankl noö-dynamics | Jaspers 限界状況 | precision（Feldman & Friston／Hohwy） |
|---|---|---|---|
| 層 | 一人称・規範（健康の条件） | 一人称・実存の記述 | 三人称・機構 |
| 保つ対象 | 達成と為すべきことの間の緊張（round 1 記述） | 解けない状況に留まること | 予測誤差への重み（注意）。保つかは別 |
| 理由 | 精神的健康 | 実存することと同じ | 精度推定の最適化 |
| 誤差との関係 | 誤差ではなく意味との間 | 誤差ではない | 誤差そのものが対象 |
| いつ終わるか | 意味に応じる | 状況が続く限り | 推論の更新まで |

- 同じ表に置ける読み: 「保つ」という機能の記述として列を揃え、近さと違いを書く表にはできる。ks の core-definitions は、抱持の操作を policy↓ と error precision↑（仮称）としている。error precision↑ は AIF の標準語彙ではなく、ks の暫定表現。
- 置けない読み: 一人称の規範記述と三人称の機構記述は、記述の層が違う。対応づけは構造的対応〔M〕であり、一次資料の主張ではない。as#55（layer1-prediction-error-reading.md §2-3）も、Friston 系は鏡であり代替ではないと書いている。
- どちらの読みも残し、採否は判断しない。

### 2-4. open monitoring

| 項目 | focused attention（FA） | open monitoring（OM） |
|---|---|---|
| 定義（Lutz 2008） | 選んだ対象に注意を向け続ける | non-reactive monitoring。経験の内容を瞬間ごとに。目的は感情・認知パターンの性質の認識 |
| 対象 | 明示的な対象あり | 明示的な焦点なし。monitoring 自体が新たな焦点をつくらない |
| 誤差・不一致との関係 | Lutz 2019 は active inference で FA を定式化（要旨） | 本文は誤差の検出を述べない。conflict monitoring への言及は訓練研究 1 件のみ |
| 「解消せずに保つ」への近さ | 習慣的反応を下げる（要旨） | 反応しないことは近い。誤差を保つとは書かれていない |
| 違い | 注意で対象を保つ | 何も取り除かない／手放す（Laukkonen & Slagter は予測習慣を手放す連続体に置く） |

## 3. 見送った候補

- Berlyne diversive／specific の原典（1966 Science 153:25-33、1954 Brit J Psychol 45:180-191）: 書誌のみ確認し、本文を読めなかった。未調査。
- Hart 1965・Brown & McNeill 1966 の内容: 書誌のみ確認。内容は未調査。
- Whittlesea & Williams 2001・Nieuwenhuis et al. 2001・Bowers et al. 1990（Cogn Psychol 22(1):72-110）: 書誌のみ確認。内容は未調査。
- Polanyi *The Tacit Dimension* pp.21-24: 再確認に失敗。未確認。
- Frankl・Jaspers の原典再照合: 時間切れ。round 1 の記述を引いただけ。未調査。
- Litman 2005 本文、Litman 2010 の結果、Wilson et al. 2005、Bryant & Veroff 2007、Berns et al. 2001: 未読。
- Kashdan et al. 2018 J Res Pers 73:130-149（five-dimensional curiosity scale。書誌 V1 済）: 内容未読。

## 4. →as 候補一覧（awareness-space#149 に渡す候補）

| 候補 | 内容 | 状態 |
|---|---|---|
| Koriat 2000 noetic feelings | 暗黙の過程と明示的・制御的過程の間を媒介する感じ。「信号が立つ層」と「自覚する層」の境目に関わる | 要旨のみ読了 |
| feeling-of-knowing／tip-of-the-tongue／James の fringe | gap の内容が不明なまま感じがある状態 | 書誌のみ（James は二次記事） |
| Nieuwenhuis et al. 2001 | 誤差関連電位と誤りへの気づきの関係 | 書誌のみ・内容未読 |
| Hohwy 2012／Feldman & Friston 2010 | 意識的知覚を予測誤差最小化の帰結、注意を precision 最適化とする | 要旨読了（lane2 既存） |
| Lutz 2019／Laukkonen & Slagter 2021 | FA の active inference 定式化と、FA・OM・non-dual の連続体 | 要旨読了 |
| Lutz 2008 OM／FA の定義 | non-reactive monitoring。誤差の語は無い | 本文 Box・Table 読了 |
| Kiverstein et al. 2019 | valence と error dynamics | 要旨読了 |
| Van de Cruys & Wagemans 2011 | 美的経験での予測誤差と報酬 | 要旨読了 |

→ks の候補（欠損駆動思考との対応）は、Litman の D-type／I-type、Silvia の interest、Silvia & Kashdan の「不確実さを引き延ばす」記述、Frankl／Jaspers の表。いずれも近い／違うの両方を書いた状態で、採否は pjdhiro が決める。
