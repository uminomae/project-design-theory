# ISS-216 段 1.5 候補調査ブリーフ round 3 — 追加照合 6 件を 1 レーン 1 件で埋める

**対象 Issue**: https://github.com/uminomae/kesson-space/issues/216
**作成日**: 2026-11-02（統合表 v3 `ISS-216-candidate-survey.md` §6「round 3」の 6 件。pjdhiro「round 3 を先に」2026-11-02）
**実行**: agent-team-workflow・light（Phase 1 SURVEY ×6 を 3 並行 ×2 組 → Phase 2 REVIEW ×1）。成果は Main が統合表 **v4** に反映
**round 2 の教訓**: 3 レーン × 2〜3 件では researcher の 20 ターン上限に届かず「書誌のみ」「内容未読」が多く残った。round 3 は **1 レーン 1 件**。各レーンは照合そのものに集中し、比較表や接続は書かない（Main が統合表で行う）
**pjdhiro の採点（棚卸しの重要度）は未完**（位1 × のみ）。本ラウンドも採点に依存しない照合に限る。論の骨子 v0 は採点後

> 中立性原則（`.claude/rules/agents.md`）: 「近い論を探せ」ではなく「原典に何と書いてあるかを報告し、近さと違いを両方書け」。採否は pjdhiro。
> 態度（pjdhiro 原文・位11）: 「二つの論がある時、両方が同時に起きるというよりも、いろんな場合があるという立場です。なので、両方とも調査する。追っていく。というのが態度です」→ 二つの読みが並ぶ箇所はどちらかに絞らず、同時とも書かず、両方を並べる。

---

## 0. alignment（共有辞書。round 2 と同じ）

```yaml
alignment:
  task: "統合表 v3 で「字句のみ」「書誌のみ」「要旨のみ」「未探索」のまま残った 6 件を、原典の版・章・頁・原文行まで照合する。1 レーン 1 件"
  terms:
    欠損駆動思考: "棄却される誤差を、問いとして拾う態度（定義。変えない）"
    欠損: "予想と現実の誤差を、意識が「欠け」として捉えた主観的経験"
    抱持: "反射的に処理せず、誤差を問いとして保持する機能。語は「抱持」。「保持」と言い換えない"
    気づき: "定義は未確定。pjdhiro（2026-11-02）「意識にのぼる信号は、予測と誤差がある場合に立つ。認知される。それは気づきの部品だろう」。抱持とは別概念。定義は awareness-space#149 で立てる"
    表現: "「虚軸に値があって、しかも、認知上は 0 の直観」。定義ではなく仮説・表現。定義との関係は言語化前"
    cos 90°: "比喩か本質かわからない（pjdhiro）。[P][M][S] のタグを当てない"
    タグ: "[P] 一次資料にそう書いてある／[M] 構造的対応（読み手の解釈）／[S] 検証仮説"
  severity_levels:
    critical: "pjdhiro の言葉を言い換えた・概念を同一視した・定義番号を使った・出典が実在しない・原文にない語を引用符で囲んだ"
    major: "近さだけ書いて違いを書いていない／版・章・頁が無いのに「照合済み」と書いた／一般化しすぎ／二つの読みをどちらかに絞った"
    minor: "表現の粗さ、重複"
    info: "参考"
  scope: "一次資料（原典・著作）を優先。ローカル（ks docs/issues/survey-216/・knowledge/、awareness-space、project-design knowledge/research）を先に見てから Web。Internet Archive・Gutenberg・PMC・出版社サイト・著者ページの本文が見られれば本文で、見られなければ要旨で、どちらも無ければ「未確認」と明記し、作らない。「意識とは」に関する知見は awareness-space に残す（→as 印）"
  skip_phases: [3, 4, 5, 6, 7]
  scale: "light"
  review_mode: "single"
```

## 1. pjdhiro の言葉（原文。言い換え禁止）

| ID | 原文 | 日付 |
|---|---|---|
| 定11 | コサイン９０度の０の比喩はある。それは無意味さという言葉を表すかもしれない。別軸に意味があるという意味。それは実存的課題でもあるので、かなり哲学の概念が接続されそうな、もしくは、一つの哲学の論を解説することになるかもしれない。それが欠損駆動思考の中身かもしれません。つまり既存の論に近いものがあるだろうということ。実存主義の中に。デザイン思考と隣接するような。 | 2026-11-02 |
| 定12 | 私としては、コサイン９０度のたとえが、最も欠損駆動を表すと思う。ゼロのはずなのに違和感がある。その違和感が気になって探索したくなる。 | 2026-11-02 |
| 抱11 | 意識にのぼる信号は、予測と誤差がある場合に立つ。認知される。という意味です。それは　気づきの部品だろう、という推測です。その後に、その信号を抱持するのは忍耐力や興味といった心理エネルギーや頭脳の記憶が必要だろう。 | 2026-11-02 |
| 抱12 | 保つために、何が必要なのかわかりません。一般的には脳みそでの記憶力とされると思いますが、心理的な興味関心、性格的なものなど、他にもありそうです | 2026-11-02 |
| 抱13 | 発達が低次の場合、正解を一つにしたがるので耐えられないと思います。早く正解めいた結論を出してスッキリしたい欲求があるはずです。そのせいで誤解や逆効果になっている知識もあるというのが実社会での現象です | 2026-11-02 |
| 位11 | 二つの論がある時、両方が同時に起きるというよりも、いろんな場合があるという立場です。なので、両方とも調査する。追っていく。というのが態度です | 2026-11-02 |

## 2. 六つのレーン（統合表 v3 §6「round 3」の順）

各レーンの冒頭で、統合表 v3 の該当行（`docs/issues/ISS-216-candidate-survey.md` §7）と round 1・2 のレーン報告（`docs/issues/survey-216/`）の該当箇所を読み、**何が未確認のまま残っているか**を 3 行で書いてから照合に入る。

### レーン 1: Tillich *The Courage to Be*（1952）の版・章・頁

- 統合表の現状: "The act of accepting meaninglessness is in itself a meaningful act. It is an act of faith." は二次サイトの字句のみ。章・頁・版・ch.6 に属するかが未確認
- 問い: ① この文が原典にそのまま在るか（版: Yale University Press 1952 初版／2000 年版／2014 年版のいずれかで頁）② 属する章と節（ch.6 "Courage and Transcendence" の "The Courage to Accept Acceptance"／"Absolute Faith" 等の節名）③ 同じ箇所で「無意味さの不安」（anxiety of meaninglessness）を「在る勇気」が引き受けると述べる文の原文行 ④ 近い／違う: 抱持（誤差を問いとして保持する機能）と、Tillich の「引き受ける」（accept）の違いを原文の語で
- 当たる先: Internet Archive の全文、Yale UP のページ、Google Books のスニペット。round 1 `lane1-existential.md` の Tillich 記述

### レーン 2: Frankl と Jaspers の「緊張を保つ」逐語

- 統合表の現状: Frankl noö-dynamics は *Man's Search for Meaning* 1959 Part II の記述で原語未確認。Jaspers 限界状況は *Philosophie* II 1932 ch.7 の二次記述
- 問い（Frankl）: ① noö-dynamics の定義文の原文（英訳 Beacon Press 版の頁。可能なら独語 *Ärztliche Seelsorge* の Noodynamik）② 「緊張」（tension）を**無くすのではなく保つ**と言っている文の逐語（"tension between what one has already achieved and what one still ought to accomplish" 等）③ 近い／違う: 保つ対象が「為すべき意味」であって誤差ではない点を原文で
- 問い（Jaspers）: ① Grenzsituation の定義に当たる文の原文（*Philosophie* II 1932 の章・頁、または *Einführung in die Philosophie* 1950 ch.2 の該当頁。英訳 *Philosophy* vol.2 1970 の頁でも可）② 限界状況に「留まる」「引き受ける」に当たる語の逐語 ③ 近い／違う
- 当たる先: Internet Archive、PhilPapers、round 1 `lane1-existential.md`

### レーン 3: Litman 2005 の I-type／D-type の定義

- 統合表の現状: Litman, J. A. (2005). Curiosity and the pleasures of learning: Wanting and liking new information. *Cognition and Emotion*, 19(6), 793–814 は書誌と 2019 章要旨・二次のみ。本文未読
- 問い: ① I-type（interest）と D-type（deprivation）の定義文を本文または要旨から逐語で ② 「take it or leave it」「need to know」が本文の語か二次の要約か ③ I-type は「解消を目的としない」と書いているか、「解消せず保つ」とまで書いているか（統合表 7-2 の critic 指摘を本文で確かめる）④ Litman 2008（*Personality and Individual Differences* 44(7)）や Litman 2010 で need for closure との関係を測った結果があれば要旨で ⑤ 近い／違う: 定12「その違和感が気になって探索したくなる」の「探索」が I と D のどちらに当たるかを、場合分けのまま
- 当たる先: Taylor & Francis の要旨、著者の ResearchGate、PMC（引用論文経由）

### レーン 4: Koriat 2000・Hart 1965・Polanyi 1966 の内容

- 統合表の現状: Koriat 2000 は要旨のみ。Hart 1965 は書誌。Polanyi の intimation は round 1 の pp.21-22 を再確認できず
- 問い: ① Koriat, A. (2000). The feeling of knowing: Some metatheoretical implications for consciousness and control. *Consciousness and Cognition*, 9(2), 149–171 の本文から、noetic feelings が「内容にアクセスせずに生じる」と述べる箇所と、crossover model（情報ベース／経験ベース）の記述を逐語で ② Hart, J. T. (1965). Memory and the feeling-of-knowing experience. *Journal of Educational Psychology*, 56(4), 208–216 の方法（RJR 法）と結論を要旨か本文で ③ Polanyi *The Tacit Dimension*（1966）の intimation／"we can know more than we can tell" の頁（1966 Doubleday 版か 2009 Chicago 版で明記）④ 近い／違う: 定12「ゼロのはずなのに違和感がある」に対し、三者それぞれ gap の認識が前提か（統合表 7-2 の表の列）。結論は出さず列を埋める
- →as 印: 「信号が立つ層／自覚する層」に関わる知見は →as として分けて一覧にする

### レーン 5: 忍耐力の候補探索（frustration tolerance・patience・negative capability・grit）

- 統合表の現状: 抱11「忍耐力」に対し、曖昧さ耐性を「語の近さで暫定置き」。四語は未探索
- 問い: 四語それぞれに ① 代表的な定義文（著者・著作・年・頁・原文）② 何を耐える／保つと言っているか ③ 抱11「その信号を抱持するのは忍耐力や興味といった心理エネルギーや頭脳の記憶が必要だろう」との近さ ④ 違い。候補: frustration tolerance（Rosenzweig 1938／Harrington 2005 の Frustration Discomfort Scale）、patience（Schnitker 2012 *J Positive Psychol* 7(4) の三類型）、negative capability（Keats 1817 の書簡の原文／Bion 1970 *Attention and Interpretation* の該当頁。ks 正本 `knowledge/schema/core-definitions.md` に既出か grep）、grit（Duckworth et al. 2007 *JPSP* 92(6) の定義文）
- 守ること: 四語のどれが「最近接」かを決めない（critic r2 major）。並べるだけ
- ローカル: `grep -rn "negative capability\|Negative Capability\|忍耐" knowledge/ docs/issues/survey-216/`

### レーン 6: Cross 1982 と Lawson の本文

- 統合表の現状: 原典未読。pd の二次ノートの範囲では起点を違和感とは言わない
- 問い: ① Cross, N. (1982). Designerly ways of knowing. *Design Studies*, 3(4), 221–227 の本文から、設計の起点・設計者の知り方を述べる文（"ill-defined problems"、"solution-focused"、"constructive thinking" 等）を逐語で。違和感・驚き（surprise・discrepancy）に当たる語が**あるか無いか** ② Lawson, B. *How Designers Think*（1980 初版／2005 第 4 版）の、設計問題の性質（ill-defined・問題と解の同時展開）を述べる章と頁。違和感・驚きに当たる語があるか ③ 近い／違う: round 1 レーン 3 insight1「違和感起点は designerly 層の共有前提」が Cross・Lawson でも言えるか、言えないか。両方の読みを残す
- 当たる先: Cross 1982 は Open University のリポジトリ（oro.open.ac.uk）に PDF。Lawson は Internet Archive・Google Books。pd `knowledge/research/` の design-thinking ノート

## 3. 出力（各レーン共通）

最終メッセージに、この順で（**全体で 120 行以内**。照合結果が主。Main が統合表に写す）:

1. **未確認のまま残っていたもの**（3 行。レーン冒頭で読んだ結果）
2. **Handoff YAML**（`team-researcher.md` の形式。findings は最大 8 件。各 finding に claim／evidence（著作・年・版・章節・頁・URL）／confidence／verification）
3. **照合表**（Markdown。列: 項目／原文（逐語。英語はそのまま。独語・仏語は原語＋英訳）／出典（版・章・頁）／確認の深さ（本文○／要旨／書誌／未確認）／抱持との近さ／違い）
4. **確認できなかったもの**と理由（1 行ずつ。どこまで当たったか）
5. **問い**（clarifying／probing／challenging）と **insights**（あれば。無ければ「なし」）
6. レーン 4 のみ: →as 候補一覧

守ること:
- 日本語。pjdhiro の原文は引用符つきでそのまま。原文にない語を引用符で囲まない（round 1 critical）
- 近さと違いを**必ず両方**書く。「これが欠損駆動思考だ」と断定しない。二つの読みが並ぶ箇所はどちらかに絞らない（位11）
- cos 90°・虚軸にタグを当てない。気づきと抱持を同一視しない。「保持」と言い換えない。定義番号で概念を呼ばない
- 出典は実在確認（V1）。版・頁が取れないものは「要旨」「書誌」「未確認」と段階を明記し、「照合済み」と書かない。作らない
- 20 ターンで届かない場合は、途中でも **その時点で確認できた範囲** を上の形式で報告する（無報告で終わらない）
- ファイルの作成・編集はしない（READ-ONLY）

---

## 4. 追補レーン 7（2026-11-02。pjdhiro §8 #3 への答え「よくわからない。一応調べて欲しい」を受けて）

### レーン 7: 「訓練・習慣」は保つために必要なものの五つ目の方向か

- 統合表 v4 §7-3 の現状: 「訓練・習慣」行は critic r2 の追加提案。候補は Dewey 1910 ch.1 "training of good mental habits"／正本 L0-L1 の身体的修練／OM（瞑想訓練）／Rosenzweig 1938 "fostered by allowing the child to experience small amounts of frustration"／Schnitker 2012 Study 3（訓練で増える）。四方向（記憶／興味・関心／性格／関係）のどれにも入らず、五つ目に置くか定義外かが未定
- pjdhiro（抱12 原文）: 「保つために、何が必要なのかわかりません。一般的には脳みそでの記憶力とされると思いますが、心理的な興味関心、性格的なものなど、他にもありそうです」。#3 の答え: 「よくわからない。一応調べて欲しい」
- 問い: ① 「結論を急がず未解決を保つ態度」が訓練・習慣で変わる、と言う論は何か（Dewey 1910 ch.1・ch.6 の habit の原文行／Dewey *Human Nature and Conduct* 1922 の habit／Schnitker 2012 Study 3 の方法と効果量〔要旨〕／Lutz 2008 の瞑想訓練と注意の可塑性／曖昧さ耐性・need for closure が訓練で変わるかの研究があれば〔要旨〕）② それらは記憶・興味・性格・関係のどれかの**変化として**書かれているか、それらとは独立の変数として書かれているか（原文の語で）③ 近い／違う: 抱11「忍耐力や興味といった心理エネルギー」抱12 の四方向との関係を、答えを出さずに並べる
- ローカル: ks `knowledge/schema/core-definitions.md` の「抱持の成立条件」L0-L1（身体的修練）の該当行を読む。`grep -rn "訓練\|習慣\|修練\|habit" knowledge/ docs/issues/survey-216/`
- 守ること: 「五つ目に置くべき」と結論しない。還元できる読みと独立の読みを両方並べる（位11）。他は §3 と同じ
