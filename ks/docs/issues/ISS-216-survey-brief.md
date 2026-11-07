# ISS-216 段 1.5 候補調査ブリーフ — pjdhiro の主張に近い既存の論を三系で並べる

**対象 Issue**: https://github.com/uminomae/kesson-space/issues/216
**作成日**: 2026-11-02
**実行**: agent-team-workflow・light（Phase 1 SURVEY ×3 並行 → Phase 2 REVIEW ×1）
**reasoning**: xhigh（解釈・分析を伴う）
**成果物**: `docs/issues/ISS-216-candidate-survey.md`（Main が統合）。「意識とは」に関する知見は awareness-space 側に残す（pjdhiro 2026-11-02）

> 中立性原則（`.claude/rules/agents.md`）: 「近い論を探せ」ではなく「何を言っているかを報告し、近さと違いを両方書け」。採否は pjdhiro。

---

## 0. alignment（共有辞書）

```yaml
alignment:
  task: "pjdhiro の主張（問1・定11・定12・抱10・位10）に近い既存の論を、実存主義／神経現象学・予測誤差・好奇心／デザイン思考の違和感 の三系で並べ、近さ・違い・隣接を報告する"
  terms:
    欠損駆動思考: "棄却される誤差を、問いとして拾う態度（定義。変えない）"
    欠損: "予想と現実の誤差を、意識が「欠け」として捉えた主観的経験"
    抱持: "反射的に処理せず、誤差を問いとして保持する機能。語は「抱持」。「保持」と言い換えない"
    情動の構成: "欠損が生存軸と信頼軸で評価され、情動として構成されるプロセス"
    気づき: "定義は未確定（pjdhiro）。抱持とは別概念。神経現象学の予測誤差の調査次第"
    表現: "「虚軸に値があって、しかも、認知上は 0 の直観」（pjdhiro）。定義ではなく仮説・表現。定義との関係は言語化前"
    cos 90°: "比喩か本質かわからない（pjdhiro）。[P][M][S] のタグを当てない"
    タグ: "[P] 一次資料にそう書いてある／[M] 構造的対応（読み手の解釈）／[S] 検証仮説"
  severity_levels:
    critical: "pjdhiro の言葉を言い換えた・概念を同一視した・定義番号を使った・出典が実在しない"
    major: "近さだけ書いて違いを書いていない／出典の章節が無い／一般化しすぎ"
    minor: "表現の粗さ、重複"
    info: "参考"
  scope: "一次資料（原典・著作）を優先。ローカルの ks knowledge/、awareness-space、creation-space evidence/、project-design knowledge/research を先に見てから Web。出典は著作・年・章節まで。確認できない出典は「未確認」と明記し、作らない"
  skip_phases: [3, 4, 5, 6, 7]
  scale: "light"
  review_mode: "single"
```

## 1. pjdhiro の主張（原文。言い換え禁止）

| ID | 原文 | 日付 |
|---|---|---|
| 問1 | 無意味さは無意味なのでしょうか？（トップページの問い）。「問いは良い。問題は欠損駆動思考という概念とどう関わっているのかが私にも意味不明なこと。私が曖昧なのです」 | 2026-11-02 |
| 定6 | 虚軸に値があって、しかも、認知上は 0 の直観 | 2026-11-01 |
| 定11 | コサイン９０度の０の比喩はある。それは無意味さという言葉を表すかもしれない。別軸に意味があるという意味。それは実存的課題でもあるので、かなり哲学の概念が接続されそうな、もしくは、一つの哲学の論を解説することになるかもしれない。それが欠損駆動思考の中身かもしれません。つまり既存の論に近いものがあるだろうということ。実存主義の中に。デザイン思考と隣接するような。 | 2026-11-02 |
| 定12 | 私としては、コサイン９０度のたとえが、最も欠損駆動を表すと思う。ゼロのはずなのに違和感がある。その違和感が気になって探索したくなる。 | 2026-11-02 |
| 抱10 | 予測のずれを抱き続けるというのは、それが気づきの定義ではないかと睨んでいるからです。まだ最終決定ではありませんが、既存の神経現象学では有力な説のはず。——気づき　の別の言い方という意味です。——気づき　という単語の定義が曖昧なのです。——気づきは予測誤差についての調査次第。気づきと保持は別概念。 | 2026-11-02 |
| 位10 | デザイン思考では、違和感と表現されるかもしれません。コサイン９０度のたとえのような感覚を。 | 2026-11-02 |

## 2. 三つのレーン

### レーン 1: 実存主義・哲学

問い:
1. 「無意味さ」を、別の軸・別の測り方の上では意味がある、として扱う論はどれか。著者・著作・箇所と、原典の語で何と言っているか
2. 欠如・不在・無が、人を探索・投企・問いへ向かわせる、と記述する論はどれか
3. 緊張を解消せずに保つこと（留まる・耐える・反抗する）を構えとして記述する論はどれか
4. 各候補について、定11・定12 の原文と「どこが近いか」「どこが違うか」を両方書く
5. 哲学側からデザイン研究へ接続された先行例があるか（レーン 3 と重なる場合は哲学側の記述だけ）
6. ローカル（creation-space `evidence/`、project-design `knowledge/research/`、ks `knowledge/`）に実存主義の既存ノートがあるか

候補の一次リスト（強制しない。外してよい、足してよい）: Sartre（欠如 manque・投企 projet・無化）、Heidegger（不安が開示する無・気遣い・道具の故障）、Camus（不条理）、Frankl（実存的空虚・意味への意志）、Jaspers（限界状況）、Tillich（無意味さの不安と「在る勇気」）、Kierkegaard（絶望）、Nagel「The Absurd」、Merleau-Ponty、Levinas・Buber（他者）、西田幾多郎（絶対無・場所）、Marcel、九鬼周造

### レーン 2: 神経現象学・予測誤差・気づき・好奇心（「意識とは」に関する知見は awareness-space に残す）

問い:
0. **awareness-space の既存調査の棚卸し**（最優先）: 「気づき」「予測誤差」「神経現象学」について何が確定（正本）で何が未確定か。入口は `as/evidence/review/README.md`、`core-source-map.md`、`neurophenomenology-intake-map.md`、`layer1-prediction-error-reading.md`、`first-person-vs-third-person.md`、`build/theory/what-is-consciousness.md`。ファイル・節・現在の develop のコミット SHA を書く。ks から**切れない**参照の仕方を提案する（安定した入口ファイル＋引用はコミット固定 permalink、など）
1. 予測誤差と意識化（気づき）の関係について、神経現象学・予測処理で有力とされる説は何か。何が主流で何が係争か（Varela・Thompson・Lutz／Clark・Hohwy・Seth／Friston の精度重み付け／global workspace との接続）
2. 「予測誤差を解消せずに保つ」に相当する、名前のある概念はあるか（例: precision の操作、epistemic value、uncertainty tolerance）。無ければ無いと書く
3. 好奇心・探索: 違和感（prediction error／information gap／conceptual conflict）が探索を駆動する、という説（Loewenstein 1994、Berlyne、Gottlieb & Oudeyer、Kidd & Hayden、Friston の epistemic foraging）。定12 との近さ・違い
4. 「違和感」の神経現象学的な扱い（salience・surprise）
5. 各 finding に「意識とは、に関する知見（→ awareness-space に残す）」か「欠損駆動思考との対応（→ ks）」かの印を付ける

### レーン 3: デザイン思考・デザイン研究の「違和感」

問い:
1. デザイン研究で、違和感・驚き・ブレイクダウン・felt difficulty が探究の起点として扱われている論はどれか（Dewey『How We Think』の felt difficulty／indeterminate situation、Schön の surprise と back-talk、Winograd & Flores の breakdown、Dorst の frame creation、Krippendorff、Kolko、Rittel、Nelson & Stolterman、Cross、Buchanan、野中・紺野の暗黙知、d.school の empathy）
2. 各候補について、位10・定12 の原文と「どこが近いか」「どこが違うか」
3. 共感（empathy）を起点とするデザイン思考の中で、違和感はどこに位置づけられているか（共感の内側か外か）。「共感 vs 欠けへの気づき」という対比（位1）が成り立つかどうかを、中立に
4. 実存主義・現象学がデザイン研究に接続された先行例（Heidegger → Winograd & Flores、Merleau-Ponty → design phenomenology、Dewey → Schön・Buchanan）
5. ローカル（ks `knowledge/`、pd、cs）に既存ノートがあるか

## 3. 出力（各レーン共通）

最終メッセージに、この順で:

1. **Handoff YAML**（`team-researcher.md` の形式。findings は優先度順に最大 15 件。各 finding に claim／evidence（著作・年・章節・URL）／confidence／verification）
2. **候補表**（Markdown）: `| 候補 | 著者・著作（年・章節） | 何を言っているか（原典の語で 1〜2 行） | どの主張に近いか・どこが | どこが違うか | デザイン思考との隣接 | タグ・confidence | V1 |`
3. **見送った候補**と理由（1 行ずつ）
4. **問い**（clarifying／probing／challenging）と **insights**
5. レーン 2 のみ: awareness-space の棚卸し表と、切れないリンク方針の提案

守ること:
- 日本語。pjdhiro の原文は引用符つきでそのまま
- 近さと違いを**必ず両方**書く。「これが欠損駆動思考だ」と断定しない
- cos 90°・虚軸にタグを当てない。気づきと抱持を同一視しない。「保持」と言い換えない。定義番号で概念を呼ばない
- 出典は実在確認（V1）。確認できなければ「未確認」。作らない
- ファイルの作成・編集はしない（READ-ONLY）
