# レーン 2 報告 — 神経現象学・予測誤差・気づき・好奇心

**調査**: team-researcher（READ-ONLY）／2026-11-02／ブリーフ `docs/issues/ISS-216-survey-brief.md` §2 レーン 2
**dest**: →as ＝「意識とは」に関する知見（awareness-space に残す）／→ks ＝ 欠損駆動思考との対応

## Handoff

```yaml
handoff:
  from: researcher(lane2)
  phase: 1
  round: 1
  findings:
    - claim: as に「気づき」の確定定義は無い。確定は原則のみ（一人称が本論／三人称は参照枠／「意識化された予測誤差」≠「欠けとして経験された差異」／Layer1=選別層）。「前反省的気づき」は未確定論点
      evidence: as neurophenomenology-intake-map.md §3-3,§3-4,§6／first-person-vs-third-person.md §3,§6／intake-return-map.md §3（develop e2ad04c）
      confidence: high  # V1,V2
      dest: →as
    - claim: Varela・Lutz・Hohwy・Seth・GWT・salience・curiosity は as 内に 0 件。本報告の「意識とは」系 finding は全て as への新規材料
      evidence: as 全文 grep（evidence/knowledge/build/docs/transform）
      confidence: high  # V1
      dest: →as
    - claim: 神経現象学＝一人称報告と脳動態を相互制約させる方法論。「気づき」の定義は与えない
      evidence: Varela 1996 JCS 3(4):330-349／Lutz & Thompson 2003 JCS 10(9-10):31-52
      confidence: high  # V1,V2
      dest: →as
    - claim: 神経現象学で「気づき（becoming aware）」に名前がある概念＝epoché 三相（suspension／redirection／letting-go）。予測誤差語彙は無い。ks 抱持の成立条件表に epochē が既にあり、気づき/抱持の切り分け時に衝突点になる
      evidence: Depraz, Varela & Vermersch 2003 On Becoming Aware（Benjamins AiCR 43）Part I 目次／ks core-definitions.md L120
      confidence: high  # V1（ToC）
      dest: →as／→ks
    - claim: PP の主流: 意識内容＝事後確率最大の仮説（予測側）であり誤差そのものではない。注意＝precision 最適化。「誤差を意識する」は標準 PP の直接主張ではない
      evidence: Hohwy 2012 Front Psychol 3:96／Hohwy 2013 The Predictive Mind ch.9／Feldman & Friston 2010 Front Hum Neurosci 4:215
      confidence: high  # V1,V2
      dest: →as
    - claim: 係争: PP が意識理論か。Hohwy & Seth「PP 自体は意識理論でないが NCC 探索の体系的基盤」vs Marvan & Havlík「無意識→意識の移行を PP 固有語彙で説明できない」
      evidence: Hohwy & Seth 2020 Phil Mind Sci 1(II)／Marvan & Havlík 2021 New Ideas Psychol 61:100837
      confidence: high  # V1,V2
      dest: →as
    - claim: GWT 接続は Whyte & Smith の predictive global neuronal workspace（能動推論で GNWT を形式化）
      evidence: bioRxiv 2020.02.11.944611（Prog Neurobiol 書誌は未確認）
      confidence: medium  # V1
      dest: →as
    - claim: 「予測誤差を解消せずに保つ」の名前つき概念は見つからず。近接は全て「減らす速さ／情報価値」の語彙: epistemic value（情報利得が尽きるまで探索）、Clark の epistemic foraging、error dynamics、瞑想の予測処理
      evidence: Friston et al. 2015 Cogn Neurosci 6(4):187-214／Clark 2018 PCS 17(3):521-534／Kiverstein, Miller & Rietveld 2019 Synthese 196(7)（要旨未確認）／Laukkonen & Slagter 2021 NBR 128
      confidence: medium  # 不在判定
      dest: →ks
    - claim: ks 計算論的参照枠の「error precision↑（仮称）」に対応する AIF 標準語彙は無い（ks 自身も非標準と明記）。uncertainty tolerance は臨床尺度概念で機構論でない
      evidence: ks core-definitions.md L148／Hillen et al. 2017 Soc Sci Med 180:62-75
      confidence: high  # V1,V2
      dest: →ks
    - claim: Loewenstein の information gap＝「知識の gap に注意が向くと剥奪感→探索」。定12「違和感が気になって探索」に近い。違い: gap は既知量の差、定12 は「ゼロのはず（gap 無し）なのに違和感」で gap の認識自体が問題
      evidence: Loewenstein 1994 Psychol Bull 116(1):75-98
      confidence: high  # V1,V2
      dest: →ks
    - claim: Berlyne の conceptual conflict（doubt, perplexity, incongruity）→specific exploration。語彙は 定12 に最も近いが、好奇心＝aversive arousal の低減（解消志向）
      evidence: Berlyne 1954 Brit J Psychol 45:180-191／1960 Conflict, Arousal, and Curiosity（二次資料のみ）
      confidence: medium  # V1
      dest: →ks
    - claim: 好奇心研究は定義未統一。「情報への drive state」、外的不確実性低減と内発的探索を区別。定12 は内発側
      evidence: Gottlieb et al. 2013 TICS 17(11):585-593／Kidd & Hayden 2015 Neuron 88(3):449-460
      confidence: high  # V1,V2
      dest: →ks
    - claim: 「違和感」の三人称側＝salience network（前島・dACC）。一人称側は Petitmengin の発作前「前反省的経験」研究が最近接。一人称の「違和感」専用術語は未発見
      evidence: Seeley et al. 2007 J Neurosci 27(9):2349／Menon & Uddin 2010 Brain Struct Funct 214:655／Petitmengin et al. 2007 Conscious Cogn 16(3):746-764
      confidence: medium  # V1
      dest: →as
    - claim: ks core-definitions の検討経緯リンク docs/decision-log/2026-02/LOG-20260205-00x はこの worktree に存在しない
      evidence: ls 失敗（V1 失敗）
      confidence: high
      dest: →ks
```

## 候補表

| 候補 | 著作 | 何を言うか | 近い | 違い | DT隣接 | タグ | V1 |
|---|---|---|---|---|---|---|---|
| epoché 三相 | Depraz・Varela・Vermersch 2003 Pt.I | 判断保留→注意の転回→手放し | 抱10「抱き続ける」の構え | 予測誤差語なし・訓練手続 | 低 | [M] high | ok |
| precision | Hohwy 2012/2013 ch.9 | 注意＝誤差の重み最適化 | 「意識化」の機構 | 意識内容は予測側 | 低 | [P] high | ok |
| epistemic value | Friston 2015 | 探索は情報利得の最大化 | 定12「探索したくなる」 | 利得が尽きたら止む | 低 | [P] high | ok |
| epistemic foraging | Clark 2018 | 誤差最小化と新奇追求の矛盾を解く | 「ゼロなのに探す」 | 文化・環境で説明 | 中 | [M] high | ok |
| information gap | Loewenstein 1994 | gap に注意→剥奪→探索 | 定12 の流れ | gap 既知が前提 | 高 | [M] high | ok |
| conceptual conflict | Berlyne 1954/1960 | 矛盾・不一致→探索 | 「違和感」語彙 | 解消志向 | 中 | [M] med | 二次 |
| salience | Seeley 2007／Menon 2010 | 前島が重要刺激を選別 | 違和感の三人称側 | 一人称記述なし | 低 | [P] med | ok |

## 見送り

- Thompson 2007 Mind in Life: 章節未特定・未確認。Seth 2021 Being You: 一般書、一次確認未了。
- Lutz et al. 2002 PNAS: 準備状態の報告で違和感と直結せず。
- feeling-of-knowing（Hart 1965）: 範囲外だが「ゼロのはずなのに何かある」に近く次回候補。

## 問い・insights

- clarifying: pjdhiro の「気づき」は前反省的（pre-reflective）か反省的（becoming aware）か。
- probing: 「気づき」定義を as 側 Issue で立てるか（現状 as に無い）。
- challenging: 「ゼロのはずなのに違和感」は PP で「予測は差なしなのに誤差が低精度のまま残る」と書けるが、それを気づきと呼ぶかは別問題。
- insight1: as と ks は「意識化された予測誤差≠欠けの経験」で既に一致。
- insight2: 好奇心研究は一貫して解消志向。「保つ」側の語彙が無いことは、気づきと抱持を別概念とする線と整合。
- insight3: as の main(61c8967) と develop(e2ad04c) は 13 コミット差。branch 無指定 URL は main を指す。

## awareness-space 棚卸し（develop e2ad04c ＝ e2ad04cb5e318eb2826d55964cb1cb8ade811549）

| ファイル／節 | 内容 | 状態 | 最終コミット |
|---|---|---|---|
| evidence/review/README.md | 正本一覧 | 確定 | fcfe10b |
| evidence/review/core-source-map.md §2,§4-3 | 神経現象学＝中核参照 | 確定（旧リポ kesson-driven-thinking パスと定義番号表記が残る） | fe759c9 |
| evidence/review/neurophenomenology-intake-map.md §3-2〜3-4,§5,§6 | 選別層・一人称本論 | 確定。前反省的気づきの層対応と Friston 本論化は未確定 | 712aabb |
| evidence/review/layer1-prediction-error-reading.md §2-3 | Friston は鏡、誤差最小化と問いとして拾う態度に緊張 | 読解メモ（#55） | c903dd6 |
| evidence/review/first-person-vs-third-person.md §3,§5,§6 | 原則 A–D | 確定（#51） | c903dd6 |
| evidence/review/neurophenomenology-design.md §2 | 主質問 B・C は問いのみ | 未確定（#50） | fe759c9 |
| build/theory/what-is-consciousness.md §3.2 | ズレ→違和感の一文、Friston 2010 のみ | 叩き台 | 5417141 |
| evidence/PROJECT.md §0.1.1,§3.1 | open Issue なし、抱持は as で不採用（research-design-baseline NOTE） | 確定 | 62a0b42 |

## 切れないリンク方針（提案）

1. 入口は安定ファイル名を branch URL で: `https://github.com/uminomae/project-design-theory/blob/main/as/evidence/review/README.md`（正本一覧）→ intake-map。
2. 文言引用はコミット固定 permalink＋SHA 併記: `https://github.com/uminomae/awareness-space/blob/e2ad04cb5e318eb2826d55964cb1cb8ade811549/evidence/review/neurophenomenology-intake-map.md#L98`（公開表示を確認済み）。
3. ks 側は参照を 1 箇所の「as 参照台帳」に集約し、as 更新時はそこだけ SHA を更新。
