# 四つのサイトが互いを紹介する文

四つの入口（プロジェクトデザイン論の HOME・創造とは・意識とは・欠損駆動思考）が、ほかのサイトを紹介するときに使う名前と一文を、ここ一か所に決める。入口・トップバー・機械向けの要約・noscript・AI に読ませる窓で、ほかのサイトを紹介するときは、この表から写す。

経緯：2026-11-10 のレビュー（Issue #111 の束 6）で、「意識とは」の紹介が入口ごとに四通り（間主観性を中核・4点仮説・4層モデル・気づき空間）あり、どれも「意識とは」の今の入口と合っていなかった。紹介の文の正本が無かったため。

## 表

一文は、それぞれのサイトの入口の冒頭の問いと、今の見方から取る。入口の冒頭が変わったら、この表を先に直し、写した先を直す。

| サイト | 名前（日本語） | 名前（英語） | 紹介の一文（日本語） | 紹介の一文（英語） | 元にした入口の文 |
|---|---|---|---|---|---|
| Love駆動開発の読み物（`pd/reader/love-driven-dev.html`） | Love駆動開発と呼びたいもの β | What I Want to Call Love-Driven Development (beta) | 私は何に駆られてプロジェクトを行うのか。人やプロジェクトを動かしているもの（駆動源）が何かを探す読み物 | What am I driven by when I carry out a project? A reader that looks for what moves people and projects (the driving source) | 冒頭の概要の「問い」 |
| 意識とは（`as/`） | 意識とは | What Is Consciousness | 人は、何で世界を切り取っているのか。生き延びられるか（生存）と、つながっていられるか（信頼）の二つの信号から見る探究 | What do people cut the world with? An exploration through two signals: whether we can survive, and whether we can stay connected (trust) | 最初の画面の二行と、冒頭の二段落め |
| 欠損駆動思考（`ks/`） | 欠損駆動思考 | Kesson-Driven Thinking | 記号の上では 0 と出るところで、人は何を感じているのか。欠けている感じや違和感を駆動源にする、思考や精神の構えを見る探究 | What do people sense where symbols read zero? An exploration of a stance of mind driven by a sense of lack or unease | 冒頭の二段落め |
| 創造とは（`cs/`） | 創造とは | What Is Creation | 物事が生まれるとき、どんな構造と過程をたどるのか。30 の分野の論を並べ、五つの段（場 → 波 → 縁 → 渦 → 束）で書く探究 | What structure and process does something follow when it comes into being? An exploration that sets theories from 30 fields side by side and writes them in five stages (Field → Wave → Edge → Vortex → Bundle) | 入口の組み直し（#73）が済んだら、その冒頭の問いに合わせて直す |

ほかのサイトから Love駆動開発を一文で紹介するとき（部品のサイトの冒頭）は、「Love駆動開発の読み物は、人やプロジェクトを動かしているもの（駆動源）が何かを探しています。」と書く。「構想の手前で動いている見えないもの」とは書かない（`docs/rules/stance.md` 2-4。問いは駆動源で、構想の手前に置いていない）。

## 名前と訳語

- 日本語の画面では、読者に見える題（プロジェクトデザイン論・創造とは・意識とは・欠損駆動思考）で呼ぶ。今までの repo の名前（creation-space・awareness-space・kesson-space）や、英語の内部名（kesson-driven・creation・AWARENESS）で呼ばない（`docs/rules/writing.md` 6-3）。
- 英語では、意識を consciousness、気づきを awareness と訳す。「意識とは」を What Is Awareness と訳さない。「意識とは」は、意識と気づきの違いを言えるかどうかを、内部の目標にしている。二つを一つの語に重ねると、その違いが書けなくなる（`docs/rules/decisions.md`「意識とは の目標と立ち位置」）。「意識とは」の記録の名前（Prediction and awareness・Consciousness and meta-awareness）も、この訳し分けで書かれている。
- 「意識とは」を、モデルの名前（4点仮説・4層モデル・間主観性の意識モデル）や、調べた分野の名前（神経現象学）で紹介しない（`docs/rules/stance.md` 2-4）。
- 五段階の英語は Field・Wave・Edge・Vortex・Bundle（正本は `cs/knowledge/schema/five-stages.md`）。

## 写してあるところ（2026-11-10）

| 場所 | 写したもの |
|---|---|
| `pd/index.html`・`pd/src/content/site-data.mjs` | 「今後の方向性」の四枚のカードの説明、「AI に読ませる」窓の表、メニューとカードの英語の名前 |
| `as/index.html`・`as/assets/about/`・`as/llms.txt` | 冒頭の Love駆動開発の紹介、英語の題と本文の訳語 |
| `ks/index.html` | 冒頭の Love駆動開発の紹介、畳みの「関連概念」のカード（創造とは・意識とは）、トップバーの名前 |
| `cs/index.html`・`cs/src/i18n/dict.js` | まだ。創造とはの持ち場で直す（Issue #111 のコメント） |
