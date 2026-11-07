# Phase 2 REVIEW（critic・round 1）— 候補調査 三レーンの検証

**critic**: team-critic（READ-ONLY）／2026-11-02／入力: `lane1-existential.md`・`lane2-neuro.md`・`lane3-design.md`・ブリーフ §0–§1
**結果**: **SPLIT**（critical は表セル 3 箇所の引用符修正で解消。調査の前提自体は崩れていない。追加ラウンドは missing 5 件に絞る）

```yaml
review:
  from: critic
  phase: 2
  round: 1
  consensus: SPLIT
  verified_ok: "Heidegger §16 H.75/§40 H.186・Sartre 1部1章・Camus MS・Nagel・Kierkegaard・Jaspers ch.7／レーン2の全誌名巻号・Depraz 2003 三相／as 棚卸し（intake-map L98・first-person §3・research-design-baseline NOTE の抱持不採用・as 内 Varela 等 0 件）／core-definitions L120・L148・decision-log 不在（git 履歴にも無し）／CN-009 §7 西田 1917 年代不整合／cs western-philosophy L152 の断定／Dewey ch.6・Peirce CP 5.189・Polanyi pp.21-22・Buchanan 1992・Dalsgaard 2014 — いずれも報告どおり"
  questions:
    - {type: clarifying, target: 抱10, content: "PP 主流は意識内容＝予測側、神経現象学は気づきを定義しない。抱10「既存の神経現象学では有力な説のはず」に該当する説は三レーンに出ていない。負の結果として明示するか", verification: [V6]}
    - {type: challenging, target: "レーン2「保つ名前つき概念は無い」", content: "need for closure 低（Kruglanski & Webster 1996）、Litman 2005 の I-type curiosity、open monitoring（Lutz et al. 2008 TICS 12(4)）は該当しないか。「無い」は PP/AIF 限定か", verification: [V3, V5]}
    - {type: challenging, target: "レーン3 insight1「違和感起点は designerly 層の共有前提」", content: "Schön・Dorst・Peirce の3点で層全体を言えるか。Cross 1982・Lawson は起点を違和感と言うか", verification: [V5]}
    - {type: structuring, target: "三レーン収斂「起点は共有、差は保つ構え」", content: "ks 公開面 位1（index.html L102/148/156/537/543/556）は「起点が違う」と言う。Dewey の maintain doubt を入れると「保つ」も既存にある。残る差は循環的意味更新（core-definitions 解釈C）か「gap 認識なしの違和感」か", verification: [V4, V6]}
    - {type: probing, target: "レーン1 Tillich high", content: "核心引用は ch.6 にある。ch.6 を二次と記しつつ high の根拠は", verification: [V2]}
  issues:
    - {severity: critical, target: "レーン1 Heidegger §16 行", description: "「違和感で見えてくる」を 定12・位10 の引用として「」付き記載。ISS-215/216 に無い語＝言い換えの引用化。同種: レーン2 epistemic foraging 行「ゼロなのに探す」、レーン1 Camus 行「違和感」を解消せず保つ（定12 に無い述部）", suggestion: "原文のみ「」、解釈は括弧外に"}
    - {severity: major, target: "レーン1 Tillich", description: "引用は The Courage to Be ch.6 由来。ch.6 二次なのに high", suggestion: "medium へ、または原典照合"}
    - {severity: major, target: "レーン1 insight2「探索を言うのは Sartre と §16 のみ」", description: "§16 は開示で探索駆動でない（候補表自身が記す）＝自己矛盾。反例: Frankl 意味への意志、Jaspers（Einführung 1950 ch.2 哲学の源泉）", suggestion: "「のみ」を外し探索/開示/受容/反抗で分類"}
    - {severity: major, target: "レーン3 Dewey「留まるのは主題外」", description: "How We Think 1910 ch.1 §3「To maintain the state of doubt and to carry on systematic and protracted inquiry—these are the essentials of thinking」「suspended conclusion」は保つ側の明示。レーン2・3 の「既存は解消志向」収斂の反例（V4）", suggestion: "Dewey 行を書き直し、Schön appreciation・Rittel no stopping rule も再評価"}
    - {severity: major, target: "レーン2 insight2「好奇心研究は一貫して解消志向」", description: "Litman 2005 Cogn Emot 19(6) I-type／D-type、Silvia 2008 Curr Dir Psychol Sci 17(1) interest、Berlyne diversive exploration、Van de Cruys & Wagemans 2011 i-Perception が反例", suggestion: "information-gap 系と specific exploration に限定"}
    - {severity: major, target: "レーン2「error precision↑ に AIF 語彙なし」", description: "AIF の precision は誤差の gain そのもので Feldman & Friston 2010 はそれを注意と定義。非標準なのは別層化と、policy↓ と同時に持続させ更新を遅らせる点", suggestion: "「最近接＝誤差への注意、非標準点＝持続と更新抑制」と書き分け。抱10 判断に直結"}
    - {severity: major, target: "レーン3 Bootleg high", description: "版（2010 Bootcamp／2018）・頁・URL 無し。「hold the tension」の原文位置不明。pd DT ノートは Bootleg を 5 modes の出典としか引かない。insight3 はこれに依存", suggestion: "版・頁・原文行を付すまで insight3 は仮置き"}
    - {severity: major, target: "レーン3「設計者向けガイドも「共感の分解」を採る」", description: "引用符つきだが出典ファイル無し。CHARTER-guides.md・ISS-215-general-guide-spine・pd を grep しても該当なし", suggestion: "ファイル・行を示すか引用符を外し未確認"}
    - {severity: major, target: "レーン3 Dorst & Kokotovich 2015", description: "誌名巻号なし。Frame Innovation の章番号も critic 側未確認", suggestion: "書誌補完"}
    - {severity: minor, target: "レーン1 西田行「定6 の構図」[M]", description: "候補側タグだが 定6（虚軸表現）へ構造対応が滲む", suggestion: "「近い」欄を問いの形に"}
    - {severity: minor, target: "レーン2 insight2 の推論", description: "「保つ語彙が PP に無い」→「気づき≠抱持と整合」は非帰結。Frankl noö-dynamics（レーン1）は保つ側の名前つき概念＝接続漏れ", suggestion: "範囲を PP/AIF に限定し、Frankl・Jaspers・Camus と並べる"}
    - {severity: minor, target: "鮮度・網羅", description: "as develop は a6519ef に進行（permalink 有効）。レーン1 ローカル棚卸しに pd awareness-model/SURVEY-30fields.md §11（Heidegger Mitsein・Buber）が漏れ", suggestion: "参照台帳に SHA＋日付、統合時に再ピン"}
  insights:
    - "抱10 の「有力な説」に当たるものは無い、が三レーンから導ける最重要の負の結果。明示されていない"
    - "三レーンの「違う」欄が「解消志向」に揃うのは V4 の疑いあり。Dewey・Litman・Frankl を入れると起点も保つも既存にある。独自性候補は（a）保ちながら意味を循環更新、（b）gap の認識が無い 0 での違和感（レーン2 Loewenstein 行）、の二つに絞れる"
    - "位1 は「ガイド」由来で pjdhiro の言葉ではない（ISS-215）。差し替え可能だが、Bootleg 確認前に動かさない"
  missing_for_pjdhiro:
    - "Tillich ch.6・Bootleg の原典照合（版・頁）"
    - "Dewey maintain doubt・Schön appreciation・Frankl noö-dynamics を含む「保つ」比較表（レーン1↔3 接続）"
    - "解消しない好奇心（Litman I-type・Silvia・Van de Cruys の PP 美学）の有無"
    - "定12 の 0（gap 認識なし）を扱う概念: feeling-of-knowing（Hart 1965）、Koriat の metacognitive feelings、Polanyi intimation を一本に"
    - "Frankl・Jaspers の「緊張を保つ」と precision 操作を同じ表に置けるか（レーン1↔2）"
  convergence:
    agreement: false
    new_insights: true
    open_challenges: 5
    recommendation: additional_round
```

**Main の処置（2026-11-02）**: critical・major のうち統合表 `ISS-216-candidate-survey.md` で直せるもの（引用符の是正、Tillich を medium、Dewey 行の書き直し、「のみ」「一貫して」の撤回、error precision の書き分け、Bootleg・設計者向けガイド・Dorst & Kokotovich を未確認扱い）を反映。レーンの原報告ファイルは記録として据え置き。missing 5 件は追加ラウンド（新セッション）へ。
