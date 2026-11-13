# reader/ — 公開読み物ページ（生成物）

**このディレクトリ内の HTML は生成物。直接編集禁止。**

| ページ | 正本（編集はこちら） | style |
|---|---|---|
| `three-and-seven.html` | `knowledge/research/two-axis-closure/READER-division-algebra-consciousness-organization.md` | glow（透過記事＋glow-card） |
| `stages-screener.html` | `knowledge/research/stages-screener/READER-stages-screener.md`（本文）＋ `screener-data.json`（問いと選択肢・version） | flow（`<!--SCREENER-->` に 16問×5択を差し込み、「答える」章だけ `<!--OPEN-->` で開く。上部にトップと同じ Menu（`src/reader-menu.js`）、状態は最終更新日とバージョン。DESIGN-RULES §13・§14） |
| `gravity-love.html` | **初版・手書き（生成元なし）**。図は `src/reader-gravity-love.js`。後で正本 MD＋生成へ移す（#15） | flow（二枚並置の 3D 井戸） |
| `gravity-well.html` | `knowledge/research/gravity-well/READER-gravity-well.md`（重力の井戸とは・#64。Love駆動開発がたとえに使う絵の説明。何を描いた絵か・中心の三つの性質・なぜたとえに使うか・事実とたとえの境目・出てくる場所へ戻るリンク。井戸の絵の説明はここにだけ置き、`gravity-love.html` からは `#gw-what`・`#gw-caution`・`#gw-center`・`#gw-faq`・`#gw-facts` へリンクする・#92） | flow（二枚並置の 3D 井戸は `src/reader-gravity-love.js`。**工事中＝noindex**。Love駆動開発の確認と一緒に外す） |
| `love-driven-dev.html` | `knowledge/research/love-driven-dev/READER-love-driven-dev.md`（計画と章の状態は同ディレクトリ `README.md`・#20） | flow（トップと同じ Menu・DESIGN-RULES §14。**工事中＝noindex**。本文が揃ったら noindex を外し sitemap・llms.txt へ） |
| `love-driven-dev-en.html` | `knowledge/research/love-driven-dev/READER-love-driven-dev-en.md`（Love駆動開発と呼びたいもの β の英語版・違和感帳 i20261113220707n4w・2026-11-14。Claude の英訳。日本語版に毎回は追いつかず、英訳した日本語版の版〔`scripts/reader_version.py` の番号〕と日付をページの上の帯・題の横・巻末に書く〔pjdhiro 2026-11-13「常に最新版でなくて良いので、英訳時のバージョンだけ記載しておいて。古くなったら時折修正したい」〕。引用は原典の英語、pjdhiro の言葉には「translated by Claude」。英語版の無いページへのリンクは日本語のページへ向け「(in Japanese)」と添える） | flow（テンプレートは `scripts/reader-love-driven-dev-en-template.html`・`<html lang="en">` でメニュー・目次・重力の井戸の図の言葉が英語になる。日本語版と同じダークの見た目と膜の渦の背景。上の帯に HOME と同じ JA・EN のボタン。hreflang は ja・en・x-default〔en〕。index する。sitemap.xml・llms.txt に入れた） |
| `influences-psychology.html` | `knowledge/research/influences-psychology/READER-influences-psychology.md`（学者名・主要な論の説明・pjdhiro の印象の順。印象は本人の言葉が届いたものから） | flow（トップと同じ Menu。**工事中＝noindex**。印象が揃ったら noindex を外し sitemap・llms.txt へ。Love駆動開発以外からもリンクする予定） |
| `rotation-multiplication.html` | `knowledge/research/rotation-multiplication/READER-rotation-multiplication.md`（虚軸を読むための前提知識。−1 で 180 度・i で 90 度・虚軸・直角の軸は実軸の上で 0（cos 90 度 = 0）・立体の回転＝四元数と順序） | flow（対話図 neg-rotation・i-rotation・complex-plane・project-to-real・map-mountain・quaternion-order を src/reader-microworlds.js で読み込む。**工事中＝noindex**。本人の確認後に noindex を外し sitemap・llms.txt へ） |
| `subtraction-kinds.html` | `knowledge/research/subtraction-kinds/READER-subtraction-kinds.md`（いろんな引き算。一本の数直線の上の引き算では 0 と出る差を測る七つ：大きさの差と差の大きさ・微分・角度と 720 度・ホロノミー・交換子・二乗の差と二つの根が重なる 0・集合の差。欠損駆動思考の章の前提知識・数学の事実だけ） | flow（虚軸が関わる二つに、ひとりでに動く対話図 roots-merge・root-720、大きさの差の節に回さない数直線の図 magnitude-vs-difference を src/reader-microworlds.js で読み込む。トップと同じ Menu。**工事中＝noindex**） |
| `intrinsic-motivation.html` | `knowledge/research/intrinsic-motivation/READER-intrinsic-motivation.md`（内発的動機とは・#29。調べは同ディレクトリ `SURVEY-00-first-pass.md`） | flow（トップと同じ Menu。**工事中＝noindex**。pjdhiro の確認後に noindex を外し sitemap・llms.txt へ。Love駆動開発の心の言葉の章の内発的動機の表からリンク） |
| `psychological-safety.html` | `knowledge/research/psychological-safety/READER-psychological-safety.md`（心理的安全性とは・#26。調べは同ディレクトリ SURVEY-00〜04） | flow（トップと同じ Menu。**工事中＝noindex**・本文は骨格承認後。冒頭バナーに工事中。Love駆動開発の心の言葉の章の心理的安全性の表からリンク） |
| `psychological-safety-en.html` | `knowledge/research/psychological-safety/READER-psychological-safety-en.md`（心理的安全性とはの英語版・違和感帳 i20261113113814dxq・2026-11-14。Claude の英訳。日本語版に毎回は追いつかず、英訳した日本語版の版〔`scripts/reader_version.py` の番号〕と日付をページの上の帯・題の横・巻末に書く〔Love駆動開発と同じ決まり・pjdhiro 2026-11-14「Love駆動開発と同じルールで。そして、英訳に用いたバージョンを追加して」〕。引用は原典の英語、pjdhiro の言葉には「translated by Claude」。英語版の無いページへのリンクは日本語のページへ向け「(in Japanese)」と添える） | flow（テンプレートは `scripts/reader-psychological-safety-en-template.html`・`<html lang="en">` でメニューと目次が英語になる。日本語版の上に English、英語版の上に 日本語 のリンク。**工事中＝noindex**） |
| `developmental-stages.html` | `knowledge/research/developmental-stages/READER-developmental-stages.md`（精神の発達段階とは・#27。問い「同じ言葉が、人によって違う意味で受け取られるのはなぜか」。第一部＝段階とは何か〔オファロンの図と「対象にできる／できない」の表はスクリーナーから移した〕・第二部＝段階で何が違って見えるか。調べは同ディレクトリ README） | flow（トップと同じ Menu。**工事中＝noindex**。冒頭バナーに工事中。心理的安全性とはの段階の補足・影響を受けた心理学のクック＝グロイターの項・Love駆動開発・スクリーナーからリンク） |
| `love-history.html` | `knowledge/research/love-history/READER-love-history.md`（Love とは、どう言われてきたか・#79。Love と呼ばれてきたものを、仏教の流れと西洋哲学の流れに沿って歴史の順に並べ、現代の恋愛の定義と心理学の分類・神経科学を足す。誰が何を Love と呼んだかを、原典の本文を読めた出典だけで並べる。ほかのページとの関係を書かない独立した読み物で、どこから参照されてもよい（pjdhiro 2026-11-09）） | flow（トップと同じ Menu。**工事中＝noindex**） |
| `anxiety.html` | `knowledge/research/anxiety/READER-anxiety.md`（不安とは・#135。新田信也の定義「不安こそ解離である」〔解離＝防衛と正反対の動き〕と、それを「心理防衛状態から現実直視に戻る時に起こる解離のようなもの」と読む pjdhiro の言葉を起点にし、理解に要る視点〔不安と恐怖・フロイトの流れ・新田の制御とシャインの学ぶ不安・恥の危険・発達段階ごとの主な不安〕だけを足す。照合の記録は同ディレクトリ `README.md`。どこから参照されてもよい独立した読み物） | flow（トップと同じ Menu。**工事中＝noindex**） |
| `anshin.html` | `knowledge/research/anshin/READER-anshin.md`（安心とは。違和感帳の一件から。安心の語を、来歴の順〔禅の達磨安心・浄土のあんじん・日常語・文部科学省 2004 の安全と安心・山岸の安心と信頼・心理学〕にたどり、守りをほどくか固めるかと、確かめずにつながっている安定の二つの見方を当てる。調べの記録は同ディレクトリ `SURVEY-01-what-anshin-points-to.md`。どこから参照されてもよい独立した読み物） | flow（トップと同じ Menu。**工事中＝noindex**） |
| `defense-mechanisms.html` | `knowledge/research/defense-mechanisms/READER-defense-mechanisms.md`（心理的防衛機制とは。問い「心は、何から、どうやって自分を守っているのか」。第一部＝防衛とは何か・何から守るか、第二部＝ペリーの七つの水準・ゆるむこと〔心理的安全性とはの防衛の成熟の章から表と詳しくを移した〕、第三部＝人格の重さと型〔カーンバーグの組織化の水準・PDM・ICD-11〕。冒頭の問いのすぐ後に組織化の水準の表。調べは `knowledge/research/psychological-safety/SURVEY-07`・`SURVEY-09`。どこから参照されてもよい独立した読み物） | flow（トップと同じ Menu。**工事中＝noindex**） |
| `personality.html` | `knowledge/research/personality/READER-personality.md`（性格とは。違和感帳の一件から。心理学の性格の定義・型と特性の二つの見方・パーソナリティ障害の分け方を示し、パーソナリティ障害とエニアグラムの分類が似ているという pjdhiro の見方を、似ていると見る研究と検討する研究から見る。第三部「pjdhiro が注目する使い方」は工事中） | flow（トップと同じ Menu） |
| `love-trajectory.html` | `knowledge/research/love-trajectory/READER-love-trajectory.md`（私というアプリを、読めるようにした一年・#109。Love駆動開発が生まれるまでの pjdhiro の一年を、章ごとの pjdhiro の言葉と、当時の公開の投稿や記録へのリンクでたどる。Love駆動開発の巻末の「一年の軌跡」から独立させた。骨格は `knowledge/research/love-driven-dev/PLAN-trajectory-page-20261110.md`） |
| `management-drivers.html` | `knowledge/research/management-drivers/READER-management-drivers.md`（経営学の考え方は、どこまで効くか。七つの駆動源の考え方を、よく効く場面と、正解として広げたときの取り違えで見る。Love駆動開発の「経営学が見てきた七つの駆動源」の章の詳しくを切り出したもの） | flow（トップと同じ Menu。**工事中＝noindex**。pjdhiro の確認後に noindex を外し sitemap・llms.txt へ。Love駆動開発の七つの駆動源の章からリンク） |
| `business-design-syllabus.html` | `knowledge/research/business-design-syllabus/READER-business-design-syllabus.md`（Love駆動開発は、事業構想の授業になるか — 総論と特論の試案。事業構想の授業を、総論〔学の輪郭を、見方の道具を持ってかんたんな順に一周する〕と特論〔Love駆動開発を読み物の順にたどる〕の二本に組むとしたらという pjdhiro の思案を、それぞれ 15 回とシラバス文の形で置く。現実の講義ではない） | flow（トップと同じ Menu。**工事中＝noindex**。pjdhiro の確認後に noindex を外し sitemap・llms.txt へ。HOME の「問い」からリンク） |

`archive/` には、入口と機械向けの案内から外した古い版をしまってある（`archive/README.md`。2026-11-10・Issue #111 で `energy-flow.html`＝「エネルギーの流れ」と、その比較用の実験版 `energy-flow-rhythm.html` を移した。`energy-flow.html` は生成の対象から外してある）。

## このページが何で、どう育てるか

`three-and-seven.html` は **可除代数‑意識/組織仮説の万人向け公開解説ページ**（North Star）。
ゴール・骨格・執筆ルール・検証プロセス・残タスクの正本は
**[`knowledge/research/two-axis-closure/README.md`](../knowledge/research/two-axis-closure/README.md)**（着工前に必読）。

- 骨格は完成済み。残り作業は**調査・検証で論拠を固め、進捗ごとに §9 を更新して再公開**すること
- 執筆ルール（一人称語り・三点セット・anti-collapse・棄却の三層段差表＋比喩）も上記 README に集約


## 更新手順

1. 正本の READER (MD) を編集する
2. 再生成: `python3 scripts/build-reader-lp.py`
   - 直書き HTML（gravity-love 等）も含め、commit 前に `node scripts/reader-self-defense-lint.mjs` で「ルールへの言い訳」の地の文がないことを確認（執筆ルール 24）
3. develop に commit → main へマージで公開（GitHub Pages。反映まで数分〜10分）

## デザイン制約（必須）

**`docs/DESIGN-RULES.md` §0a を必読。** 公開ページはサイトの VI を継承する:

- WebGL シェーダー背景（`#webgl-container` + `src/reader-app.js`）の上に透過コンテンツ
- グロークラス体系（`.glow-heading` / `.glow-text` / `.glow-card`）で可読性を制御
- カラー・タイポは `src/styles/tokens.css` の CSS 変数のみ（新色ハードコード禁止）
- ページ固有スタイルは `src/styles/reader.css`（tokens + glow の上に載せる）
- 独自テーマ・埋め込み standalone CSS の新造は**禁止**（2026-07-03 の却下実例が DESIGN-RULES §8b にある）

テンプレートは `scripts/reader-lp-template.html`。テンプレート変更時も上記制約を満たすこと。
