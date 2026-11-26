# knowledge/research/

調査レポートのハブ。テーマ別にサブディレクトリを切って管理する。

## 配置判断の経緯

当初 `techo/inquiry/` や `knowledge/pd/` 等が候補に挙がったが、project-design リポの `knowledge/research/` に集約する方針で確定（2026-03-31）。理由:

- 調査資産の一元管理（リポ横断の参照を避ける）
- テーマ別サブディレクトリで拡張性を確保

## サブディレクトリ

| ディレクトリ | 内容 |
|---|---|
| `trust/` | trust 系の調査・深掘り・インデックス（17ファイル） |
| `design-thinking/` | design thinking 系の調査・深掘り・インデックス |
| `value/` | value 系の調査 |
| `origin-survey/` | 起源・語源調査 |
| `meta/` | テーマ横断メモ・評価メモ |
| `ninja/` | 個別テーマ外の作業メモ・補助資料 |
| `stages-screener/` | 自我発達ステージ簡易スクリーナー（STAGES の定義を借りた 16問×5択・pd#131）。README が正本 |
| `psychological-safety/` | 「心理的安全性とは」（pd#151）。調べの一巡目＝`SURVEY-00-first-pass.md`（原典照合の状態と主張の段の印つき） |
| `anxiety/` | 「不安とは」（#135）。正本 `READER-anxiety.md`、新田信也の不安の定義の照合の記録は `README.md` |
| `forgiveness-salvation/` | 「赦しと救いとは」（付箋帳 i20261118234114cox）。正本 `READER-forgiveness-salvation.md`、照合の状態と張り先の決めは `README.md`。調べの記録は `love-driven-dev/SURVEY-forgiveness-salvation-20261119.md` |
| `anshin/` | 「安心とは」。正本 `READER-anshin.md`、安心の語が指してきたものの照合の記録は `SURVEY-01-what-anshin-points-to.md` |
| `peirce-love-abduction/` | 「パースの創造的な愛と、アブダクション」。正本 `READER-peirce-love-abduction.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・残したことは `README.md` |
| `creative-thinking/` | 「創造的思考とは」。正本 `READER-creative-thinking.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・残したことは `README.md` |
| `beauty/` | 「美とは」。探索して追記していくページ。正本 `READER-beauty.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・追記の決まり・残したことは `README.md` |
| `julia-potential/` | 「起業家の漸化式と、ジュリア集合」（副題は「起業家を駆るものは、ジュリア集合のような、神・愛・美のポテンシャルか」）。漸化式のたとえの対話から立った問いと、問いが立った視点（漸化式は起業家のよう・Love は重力のようにドリフトする・それはジュリア集合の漸化式のよう）を解説する工事中の独立ページ。正本 `READER-julia-potential.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・残したことは `README.md` |
| `life-drivers/` | 「人生というプロジェクト」の駆動源の先行研究（2026-11-23 に始めた）。読み物の正本は `READER-life-drivers.md`（`pd/reader/life-drivers.html`・工事中・noindex）で、原典の本文で照らしたもの（プラトン『饗宴』・ショーペンハウアー §56–57 と第 44 章・ヘーゲル『精神哲学』§§430–436）だけを書き、ほかの視点は名だけを置く。材料の `STOCK-candidates-20261123.md` は、駆動源を何として見たかの 24 視点の第一巡で（視点どうしの含みと階層も仮に置く）、多くは未照合の検証の候補。場・揺らぎ・渦と、julia-potential の第五部の所で当てた |
| `to-james/` | 「ジェームズに辿り着くまで」（副題「ウォーミーな私の感覚と、乾いた呼吸音」・2026-11-24）。I と me の区別を体で感じた一回の気づきを、日記のように書き留めた読み物。正本は `READER-to-james.md`（`pd/reader/to-james.html`）。ジェームズの原典の照合は `william-james/README.md`、止観と禅の原典は `self-and-anatta/README.md` を使った |
| `me-unnoticed/` | 「見られる私（me）とは」（2026-11-25）の正本。ページは同じ日にしまった（生成の行・テンプレート・公開ページを外した）。カフカ『城』1926 初版・ジェームズ 1890 第 10 章の社会の自己・クーリー 1902 とミード 1934 の照合した段の置き場として残す。社会の me の一段は breath-filter の寄り道に写した |
| `breath-filter/` | 「聞こえていなかった呼吸の音」（副題「意識に昇る前の補正と、me」・2026-11-25・同じ日に公開）。正本は `READER-breath-filter.md`（`pd/reader/breath-filter.html`）。起きがけの呼吸の音から、体の信号が意識に昇る前に弱められ組み直されること（感覚の減衰・耳管・予測処理と内受容）と、me の芯は体の感じ（ジェームズ）を重ねる仮説の独立ページ。出典はどれも本文で照合 |
| `swedenborg-kant-goethe/` | スウェーデンボルグは、カントとゲーテのどこに触れたのか（付箋 i20261123203621y13・2026-11-25）。本人の文（カントの手紙・『視霊者の夢』・講義録・『純粋理性批判』、ゲーテの書評・『ファウスト』・手紙・『色彩論』）と、研究者の読み（Sewall 1900 の序・モリス 1902）を分けた照合の記録。読み物には組み込んでいない |
| `shikan/` | 「止観とは」（副題「止と観の来歴と、pjdhiro の止観」〔仮〕・2026-11-25・工事中・noindex）。正本は `READER-shikan.md`（`pd/reader/shikan.html`）。止と観を二つ一組に説く経（『増支部』2.31・4.170・『雑阿含経』464）、天台の智顗の『摩訶止観』（594 年の講義・三種止観・円頓止観の定義）と『天台小止観』、禅の『六祖壇経』の定慧一体と静けさへの戒め、pjdhiro の止観（bzero のたとえ・静かな海面・心で指さす）。ほかの読み物で止観に触れる所は、ここを指す（付箋 i20261125042552ukq） |
| `complex-plane/` | 「複素平面で考える」（副題「複素数が関わる、十七の法則」・2026-11-25・工事中・noindex・#204）。正本は `READER-complex-plane.md`（`pd/reader/complex-plane.html`）。複素数が関わる有名な数学十五の目次（分野で絞らない・stance 1-4）。独立ページは一つずつ別に作り、できたら表の名前をリンクにする |
| `thinking/` | 「思考とは」（2026-11-25・工事中・noindex・#206 の M1。2026-11-26 から思考のモジュールへの道案内）と「「考える」の語は、何を指してきたか」（もとの思考とはの中身）。調べの記録は `README.md`（十一の原典の照合の状態・鍵の文・Claude の読み）、正本は `READER-thinking.md`（`pd/reader/thinking.html`）と `READER-thinking-definitions.md`（`pd/reader/thinking-definitions.html`）。M2〜M8 の独立ページは別のセッションで作る |
| `cognitive-abilities/` | 「頭脳の能力は、どう分けられてきたか」（2026-11-25・工事中・noindex・#206 の M3）。調べの記録は `README.md`（読んだ原典の照合の状態・鍵の文・照らせなかったもの・空きとして見えたこと）、正本は `READER-cognitive-abilities.md`（`pd/reader/cognitive-abilities.html`） |
| `nonaka-papers/` | 野中郁次郎の論文（知識創造・SECI・場）の索引。書誌・原典へのリンク・ライセンスの見立てだけ（八本とも著作権が残り、本文は置かない）。`INDEX.md`（付箋帳 i20261120141240lud） |
| `nonaka-complement/` | 野中郁次郎の知識創造を Love駆動開発で補う独立の読み物（#183）。骨格の案 `PLAN-reader-20261121.md`、組み直しの計画 `PLAN-rebuild-20261121.md`、pjdhiro の発言の出どころは `README.md`。材料は `nonaka-five-words/`・`nonaka-papers/` |
| `nondual/` | 「不二（非二元）とは」（最初の題は「見分けられるのに、切り離せないもの」、次に「非二元とは」「不二・非二元とは」）。非二元さを表したものを分野ごとに集め、随時追記していくページ。正本 `READER-nondual.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・追記の決まり・載せなかった候補は `README.md` |
| `decision-making/` | 「意思決定とは」（#176）。正本 `READER-decision-making.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・載せなかったもの・残したことは `README.md`、原典ごとの照合は `SURVEY-01`〜`06` |
| `via-vulnerability/` | 「脆弱性から、全体を知る」。正本 `READER-via-vulnerability.md`、一般化の下書き `DRAFT-knowing-through-vulnerability-20261117.md`。照合の記録は `love-driven-dev/SURVEY-self-via-vulnerability-20261117.md` |
| `empathy/` | 「共感とは」（#151）。正本 `READER-empathy.md`、pjdhiro の発言の記録・読んだ原典と照合の状態・本文の「共感」の使い分けの一覧は `README.md`、原典ごとの照合は `SURVEY-01-classics.md`・`SURVEY-02-psychology.md` |
| `vibe-to-code/` | Sato「Vibe to Code」（Jxiv 5731・2026。生成 AI と対話してデザインの意図を言葉にする過程を、熟練のデザイナー 5 人で観た探索的な質的研究）を読んだ記録。読み物の正本は `READER-vibe-to-code.md`（`pd/reader/vibe-to-code.html`・「Vibe to Code と並べて見る、pjdhiro のやり方」・工事中・noindex・リンク元は未定）。書誌・照合の状態・方法と見つけたことの頁つきの控えは `README.md` |
| `capacity-after-ai/` | 読み物「AI の時代に、差になるスキルは何か」（`pd/reader/capacity-after-ai.html`・副題「身体・思考・心の量と、道具の歴史から」・2026-11-25・工事中・noindex）の正本 `READER-capacity-after-ai.md`。道具が引き受けた量と差が移った先の歴史、AI で照らされる取り繕い、身体・思考・心の量、鍵は受容、このサイトが手伝えること。リンク元はトップの「AIに読ませる」の窓の D の節 |
| `peer-learning/` | ピア・ラーニング（教育）とペアプログラミングの原典の照合（付箋帳 i20261117142315hkb・Love駆動開発に置く前の調べ）。`SURVEY-peer-learning-pairprog-20261118.md` |
| `defense-mechanisms/` | 「心理的防衛機制とは」。正本 `READER-defense-mechanisms.md`。照合の記録は `psychological-safety/SURVEY-07-defense-maturity.md`（防衛の水準・パーソナリティ障害・職場のいじめ）と `SURVEY-09-personality-integration.md`（人格の重さと型を並べる論） |
| `subtraction-kinds/` | 「いろんな引き算」（欠損駆動思考の章「「私は引き算をしていた。数直線の外で。」」の前提知識）。正本 `READER-subtraction-kinds.md` |
| `summary-robustness/` | 公開ページを文脈の無い LLM に要約させ、要点が残るかを確かめた記録（#191）。README が入口 |
| `developmental-stages/` | 「精神の発達段階とは」の調査ノート（pd#152）。段階ごとの不安・防衛・組織。pd#151 の足場 |
| `intrinsic-motivation/` | 内発的動機が前提にしている人の像（pd#154）。調べの一巡目＝`SURVEY-00-first-pass.md`（Ryan & Deci 2000・Cook-Greuter 2013 の自己保護の段は本文照合） |
