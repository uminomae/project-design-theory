---
date: 2026-11-07
type: survey
status: 一巡目（原典未照合の箇所が残る）。別ページ「感情を表す言葉と誤解」の骨格案（`PLAN-skeleton-20261107.md`）の足場
moved: 2026-11-08 に、今までの project-design の枝 claude/gallant-lewin-3db64c から写した（#67）。中身は変えていない。パスは pd/ からの相対
related:
  - knowledge/research/emotion-words/NOTE-pjdhiro-plutchik-figure-20261107.md（pjdhiro の図の書き起こし）
  - knowledge/research/two-axis-closure/PAPER-references-inventory.md C11（Plutchik 1980・原典未精読）
  - knowledge/reference/nitta-shinya-bad-and-weak-emotions.md（新田信也の悪い情動・弱い情動）
---

# プルチックの感情の輪 — 言葉の英日対応と出典の照合（一巡目）

## 0. 照合の段（どこまで確かめたか）

| 印 | 意味 | この調べで当たるもの |
|---|---|---|
| [原典] | Plutchik 本人の本文を読んだ | **無し**。1980 の本（*Emotion: A Psychoevolutionary Synthesis*, Harper & Row）も、2001 の論文（"The Nature of Emotions", *American Scientist* 89(4):344–350）も本文は取れていない（Scribd は本文なし・web.archive.org は取得不可・JSTOR は未試行） |
| [図解] | 原典に基づくと明記された第三者の図 | Markus Drews のポスター「Robert Plutchik's Psychoevolutionary Theory of Basic Emotions」（Fachhochschule Potsdam・2007。下端に「Based on the Book "EMOTION: A Psychoevolutionary Synthesis" by Robert Plutchik; Harper & Row, Publishers (1980)」）。http://www.adliterate.com/archives/Plutchik.emotion.theorie.POSTER.pdf を 2026-11-07 に取得して目視 |
| [二次] | 百科事典・解説サイト | en.wikipedia「Robert Plutchik」「Contrasting and categorization of emotions」／ja.wikipedia「ロバート・プルチック」（脚注は解説サイト二つだけで、Plutchik の文献を挙げていない） |
| [図] | pjdhiro の図の訳語 | `assets/img/plutchik-emotion-wheel-two-switches.jpg`。訳語は ja.wikipedia 系と見られる（図の参考欄） |

## 1. 基本の八つ・強さ・対極

[二次]（ja/en wikipedia で一致）＋[図解]（八つの名と対極の四組が一致）。

| 基本 | 英 | 弱い | 強い | 対極 |
|---|---|---|---|---|
| 喜び | joy | 平穏 serenity | 恍惚 ecstasy | 悲しみ |
| 信頼 | trust（図解では弱い側に acceptance・tolerance） | 容認 acceptance | 敬愛 admiration | 嫌悪 |
| 恐れ | fear | 不安 apprehension | 恐怖 terror | 怒り |
| 驚き | surprise | 放心 distraction | 驚嘆 amazement | 期待 |
| 悲しみ | sadness | 哀愁 pensiveness | 悲嘆 grief | 喜び |
| 嫌悪 | disgust | 退屈 boredom | 憎悪 loathing | 信頼 |
| 怒り | anger | 苛立ち annoyance | 激怒 rage | 恐れ |
| 期待 | anticipation | 関心 interest | 警戒 vigilance | 驚き |

- 強弱の英語は en.wikipedia と図解でおおむね一致（図解は各花弁に三〜四語を並べ、どれが「強」「弱」の正式な名かは示さない）。
- **訳語の注**：ja の「不安」は恐れの弱い側（apprehension）。pjdhiro の図の「不安」は弧の上の言葉で、期待と恐れの混合（anxiety・三次）と見られる（位置からの Claude の読み）。同じ「不安」が二か所に出る。
- **訳語の注**：「期待」の原語は anticipation。英語の anticipation は、先を見越して備えることに寄る（日本語なら予期・見越し）。日本語の「期待」は、望む方向の先を思い描くことに寄る。訳語が、望みの色を足している可能性がある（Claude の読み・辞書での確認は未）。
- 対極の四組は、図解では「conflict」と書かれる（対極の二つが同時に起きると葛藤になる、の意と読める）。

## 2. 生き延びるための働き（Plutchik の「survival issues」）

[図解]（Drews 2007・1980 の本に基づく）。en.wikipedia にも同じ順の表（刺激→感情→行動→効果）があり、出典は Plutchik & Kellerman (1980) *Theories of emotion* と付く [二次]。二つは行動・効果の語が少し違う。

| 感情 | 刺激（図解） | 認知（図解） | 行動（図解／en.wiki） | 働き（図解／en.wiki） |
|---|---|---|---|---|
| 喜び | 価値あるものを得る | 「持つ」 | 保つ・繰り返す／求愛・交尾 | 資源を得る／生殖 |
| 信頼 | 自分の群れの一員 | 「仲間」 | 毛づくろい／毛づくろい・分け合う | 支え合い／親和 |
| 恐れ | 脅威 | 「危険」 | 逃げる | 安全／防御 |
| 驚き | 予期しない出来事 | 「何だ？」 | 止まる | 向き直る時間を得る／定位 |
| 悲しみ | 価値あるものを失う | 「見捨てられ」 | 泣く | 失ったものにもう一度つながる／再統合 |
| 嫌悪 | 口に合わないもの | 「毒」 | 吐く | 毒を出す／拒絶 |
| 怒り | 障害 | 「敵」 | 攻める | 障害を壊す／破壊 |
| 期待 | 新しい縄張り | 「調べる」 | 地図を作る | 縄張りを知る／探索 |

- Plutchik の公準（図解の十項目）の 3 は「感情は、環境が出す生存の問題に生物が対処するのを助ける適応の役割を持つ」。1 は「感情の概念は進化のすべての段の動物と人に当てはまる」。
- **見えること（事実の並べ）**：Plutchik の枠では、信頼も「群れの一員」への生き延びるための働き（支え合い）として書かれる。八つすべてが survival issues の側に置かれている。

## 3. 二つの言葉の混合（dyad）

「二つの基本感情の混合を dyad と呼ぶ」[図解]。隣どうし＝一次（よく感じる）・一つおき＝二次（ときどき）・二つおき＝三次（まれ）[図解]。

| 組み合わせ | 段 | [図解] 1980 準拠の名 | [二次] en.wiki 系の名 | pjdhiro の図の訳語 |
|---|---|---|---|---|
| 喜び＋信頼 | 一次 | love | love | 愛 |
| 信頼＋恐れ | 一次 | submission | submission | 忍従 |
| 恐れ＋驚き | 一次 | **alarm** | **awe**（alarm を併記する表もある） | 畏敬 |
| 驚き＋悲しみ | 一次 | **disappointment** | **disapproval**（disappointment を併記する表もある） | 不承認 |
| 悲しみ＋嫌悪 | 一次 | remorse | remorse | 自責感 |
| 嫌悪＋怒り | 一次 | contempt | contempt | 軽蔑 |
| 怒り＋期待 | 一次 | aggression | aggressiveness | 攻撃性 |
| 期待＋喜び | 一次 | optimism | optimism | 楽観主義 |
| 喜び＋恐れ | 二次 | guilt | guilt | 罪責感 |
| 信頼＋驚き | 二次 | curiosity | curiosity | 興味がわく |
| 恐れ＋悲しみ | 二次 | despair | despair | 絶望感 |
| 驚き＋嫌悪 | 二次 | **「?」（名なし）** | unbelief | 不信感 |
| 悲しみ＋怒り | 二次 | envy | envy | 妬み |
| 嫌悪＋期待 | 二次 | cynism | cynicism | 皮肉 |
| 怒り＋喜び | 二次 | pride | pride | うぬぼれ |
| 期待＋信頼 | 二次 | **fatalism** | **hope** | 希望 |
| 喜び＋驚き | 三次 | delight | delight | 悦楽 |
| 信頼＋悲しみ | 三次 | sentimentality | sentimentality | 感傷的な |
| 恐れ＋嫌悪 | 三次 | shame | shame | 恥 |
| 驚き＋怒り | 三次 | outrage | outrage | 侮辱感 |
| 悲しみ＋期待 | 三次 | pessimism | pessimism | 悲観的な |
| 嫌悪＋喜び | 三次 | morbidness | morbidness | 病的な |
| 怒り＋信頼 | 三次 | dominance | dominance | 支配感 |
| 期待＋恐れ | 三次 | anxiety | anxiety | 不安 |

- **揺れが四か所**（太字）：恐れ＋驚き（alarm／awe）・驚き＋悲しみ（disappointment／disapproval）・驚き＋嫌悪（名なし／unbelief）・期待＋信頼（fatalism／hope）。1980 と 2001 のどちらでどの名を使ったかは、二次資料どうしで食い違い、原典で確かめていない。
- 期待＋信頼は、図解では fatalism（宿命論）、二次では hope（希望）。期待と信頼の混ざりを「希望」と読むか「宿命論」と読むかは向きが逆に近い。別ページで期待と信頼を扱うなら、ここは原典で確かめたい箇所。
- 「侮辱感」は outrage の訳としてはずれがある（outrage はふつう憤慨・激しい怒り）。訳語の出所は未確認。
- 三つの混合（triad）は、Plutchik が立てたが具体には挙げなかった、と en.wiki 系に書かれる [二次・未照合]。
- 輪を円錐（強さの縦軸）として立体に描くこと＝RR-020 §A-4 で二次確認済み。

## 4. pjdhiro の図と重なるところ（事実の並べだけ）

- Plutchik の対極の四組のうち、**怒り–恐れ**と**信頼–嫌悪**の二組が、pjdhiro の図の二本の矢印（闘争と逃避／信頼（好意）と嫌悪）の近くを通る。矢印は輪の対極の線から少し回してある。その意図は未確認。
- Plutchik の表では、怒りの行動は「攻める」、恐れの行動は「逃げる」。図の「闘争（怒り）と逃避（恐怖）」は、この二つの行動と同じ並び。
- 新田信也の大綱：怒りや憎しみ＝「悪い情動」、寂しさや惨めさ＝「弱い情動」（`knowledge/reference/nitta-shinya-bad-and-weak-emotions.md`）。図の中心の「悪」は赤（闘争と逃避）の側、「弱」は緑（信頼と嫌悪）の側に書かれている。新田の表記は「許し」で、図は「赦」。
- これより先の対応（二本の軸＝「意識とは」の生存と信頼か、悪と弱の位置の意味など）は、pjdhiro に聞くまで書かない（`PLAN-skeleton-20261107.md` §6）。

## 5. 未照合・次に取るもの

1. Plutchik (2001) *American Scientist* 89(4):344–350 本文（JSTOR・図書館）。一次の混合の名（awe／alarm 等）と、trust／acceptance のどちらを使うか。
2. Plutchik (1980) *Emotion: A Psychoevolutionary Synthesis* の混合の表（図解の「?」・fatalism の確認）。
3. Plutchik (1982) "A psychoevolutionary theory of emotions", *Social Science Information* 21(4–5):529–553（doi:10.1177/053901882021004003）。公準と survival issues の表の出所。
4. 日本語の訳語の出所（ja.wikipedia の「プルチックの感情の輪」項は 2026-11-07 時点で 404。図の訳語の典拠は不明）。
5. 「オキシトシンで説明する本」の書名（pjdhiro に聞く）。エビの種と出典（ks ISS-215 情10 で調査候補）。

## 出典（取得日 2026-11-07）

- Drews, M. (2007). Robert Plutchik's Psychoevolutionary Theory of Basic Emotions [poster]. Fachhochschule Potsdam. http://www.adliterate.com/archives/Plutchik.emotion.theorie.POSTER.pdf
- en.wikipedia "Robert Plutchik"（感情と行動の表は Plutchik & Kellerman 1980 を出典にする）／"Contrasting and categorization of emotions"（混合の表）
- ja.wikipedia「ロバート・プルチック」（基本の八つ・強弱・対極の表）
- 二次の照合に使った解説：simonwhatley.co.uk（2001 を引く）・Wikiversity "Plutchik's wheel of emotions"（2014）
