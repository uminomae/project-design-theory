# 建築・デザイン学：記録から外した作業の節

`cs/evidence/evidence-D27-architecture.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D27-architecture.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 強い対応 | 部分・条件付き | 対応なし |
|---|---|---|---|
| 日本語版（ja 57〜72 行） | 8 | 3（Menges・Aravena・Pallasmaa） | 1（Schumacher） |
| 英語版（en 58〜74 行） | 10（Menges・Aravena も Strong） | 1（Pallasmaa） | 1 |
| プレゼン版（pres 23 行） | 冒頭「強い対応 1件、条件付きの対応 1件」 | ― | ― |
| プレゼン版（pres 43〜48 行） | 確定に近い 5・有力 5 | 1 | 1 |
| 退避版（651〜653 行） | Accept 10 | CA 1 | Reject 1 |
| 調べた跡 phase5（23 行） | Anchor 8 | ― | ― |

判定は「未判定（版の食い違い）」です。重さは高です。プレゼン版の冒頭は、同じ版の表と合っていません。

### 至らない形を外に置いていること

報告 §7（ja 212 行）は「本調査の理論群は『成功した建築』『生きた建築』に偏っています」と書きます。読めた原典では、Alexander が解離と生気の無い構造を（1965 Part II、講演 Part B）、O'Brien & Carrasco が枠を越えた増築と取り合いを（pp.271–272）、Menges が仮想の形と物の世界の分裂を（p.93）、Schumacher が様式どうしの衝突と逆戻りの禁止を書いていました。二次資料でも、van Eyck の論は会合で衝突し、都市計画に空白を残したと書かれています。報告は、これらを落とすか、Schumacher のように「対応なし」として外に置いています（抜け。型 K「無いと言う前に原典で数え直す」）。

### 横断の節は報告の作った分け方

- ja 180〜184 行「境界は帯域である」の独立収束：調べた跡 phase7 5〜17 行から来ています。Alexander と van Eyck は直接ぶつかっていて（Team 10 の会議録 pp.103–104。二次資料）、独立とは言えません（取り違え、高）。「帯域」は Alexander の講演の語でも Nitschke の語でもありません。
- ja 186〜190 行「主体性のスペクトラム」：調べた跡 phase7 19〜31 行の表です。phase7 は「構造そのもの」を記述していることの「証拠」と書き、報告は「示唆します」に弱めて写しています（付け足し、中）。
- ja 192〜196 行「縁の10の顔」・ja 198〜202 行「残余の資源化」：調べた跡 phase6 214〜232 行・phase7 33〜61 行の分け方で、原典に無い名前です（付け足し、中。型 H）。
- ja 222 行「12のエントリ中10が『縁』への対応を持ち、そのうち7件が強い対応」：退避版 673 行と phase5 230 行の数から来ています。照合した原典からは数えられません（未判定）。

### テンプレート由来の表示

「立ち位置明示」（ja 3 行）・「方法論的開示」の「著者（pjdhiro）自身の精読による検証が完了していない箇所」（ja 30〜33 行。文責を pjdhiro としている）・「安全弁」（ja 74 行）・「温度帯」（ja 72 行）・「結びの温度開示」（ja 228 行）・Colophon（ja 233〜243 行）・Phase 1〜7（ja 24 行）。どれも型 F と LLM の記号で、テンプレートで一度に直すものです（README 段 1）。

### 誤りの出どころ

- 「全段階に明瞭な対応」「強い対応」の数：退避版の Accept と、調べた跡 phase5 の Anchor。
- 「逆照射」「通底」「10の顔」「残余の資源化」「主体性のスペクトラム」「独立収束」：調べた跡 phase5〜7 の着想が、本文で「事実として」に近い形に上がったもの。
- 「二項対立を解消するのではなく…新たな質を生む」（ja 100 行）：退避版 158 行の非二元性の点検（CHK-A）の文を、点検の語だけ外して写したもの。退避版は 12 の論すべてに非二元性の点検の欄を持っています（62・109・158・207・260・315・369・420・468・523・571・618 行）。「意識や意図を介さない生成」（ja 92 行）も退避版 109 行の点検の読みに近い言い方です。
- 「何もないことが何かである」・縁側：退避版 284〜285 行。
- 英語版の「lack」「predictive error」（en 153 行）：退避版・調べた跡・DR に無く、英語版を書いたときに入ったもの。
- 「1978 年のパリ装飾美術館」・「磯崎ほか」：DR と退避版 274 行。Nitschke 1988 の書く年と場所と違う。

### 文体（書き方と誤りの型の規約）

- 型 E（言い切り・格上げ）：「構造対応の中でも特に堅い事例」（ja 118 行）、「最も直接的な建築理論的定式化」（ja 102 行）、「最も豊かに確認された領域の一つ」（ja 220 行）、「本調査の中で最も堅い発見の一つ」（ja 222 行）。
- 型 J（独自の比喩ラベル）：「逆照射型」「居場所型」「未完型」などの「縁」の 10 の顔（ja 194 行）。
- 型 B（対で切る）：「主体性がほぼゼロ」から「協働」までの一列のスペクトラム（ja 188 行）。
- 型 H（原典に無い名前）：「残余の資源化」「縁の10の顔」。

### 精読ノートと wiki・台帳の誤り（司令塔が原典で確かめて直した。2026-11-09）

- 精読ノート「Schumacher 2008」 63 行・86 行、wiki の頁「Schumacher 2008」 68 行：引用「…rather than compensatory adaptations」は、原文では「rather than compensatory or ameliorating adaptations」。省略の印なしに語を落としている。
- 同じノートの 87 行と wiki 60 行：議題 1 の題を「Inter-articulation of multiple subsystems」と引用符に入れているが、原文の題は「Inter-articulation of sub-systems」（「multiple subsystems」は本文の語）。
- 同じノートの 15 行と wiki 92 行：「著者サイト掲載日: January 9, 2008」。今の頁の表示は「January 9, 2024」（発表は 2008 年）。
- 精読ノート「Jiang 2019」 80 行：引用「a whole comes from parts... it is incorrect. It is the wholeness that induces centers to generate a coherent whole」は、原文の語順を入れ替えている。原文は「it is incorrect to say a whole comes from parts, or a whole consists of parts; it is the wholeness that induces centers to generate a coherent whole」（arXiv 版 p.5）。
- 台帳の「Risselada ら 2006」の行：URL の PDF は van Eyck の著作でなく、2006 年の Delft の会議録『Team 10: Keeping the Language of Modern Architecture Alive』（Risselada・van den Heuvel・de Waal 編）。
- 台帳の「Menges 2012」の行の備考：「OA 代替」の URL の PDF は「Morphospaces of Robotic Fabrication」でなく、Menges (2013) Performative Morphology in Architecture, SAJ 5, 92–105。
- 台帳の「Schumacher 2008」の行：URL は 404。新しい URL は https://patrikschumacher.com/parametricism-as-style-parametricist-manifesto/ 。
- 台帳の「Moroni ら 2019」の行：巻号を 47(6) と書くが、手元の PDF の表紙（Groningen 大学のリポジトリの出版社の版）と Crossref では 47(2), 220–234（2020 年刊）。
- 台帳の「Jiang 2019」の行：MDPI の PDF は自動取得で 403。arXiv の著者稿（1909.11757）を取得先に足す。
- 台帳の「Alexander 2002」の行：手元の PDF は 313 頁の抜粋の走査（文字の層なし）。全 1171 頁の本ではない。

## 判断が要るもの

- 本文に当たれない論（Otto・Hertzberger・Jacobs・Pallasmaa・poché・Lynch。12 のうち 6）を、分野の論として残すか。予想：残して照合の状態を書く（README「判断が要ること」5 の三つ目の予想と同じ。調べ方の規約 §3-3）。Internet Archive の貸し出しの 3 冊（「Hertzberger 1991」・「Jacobs 1961」・「Pallasmaa 1996」）は、pjdhiro がログインして借りれば読める見込みです。 → 答え（pjdhiro 2026-11-10「読めなかったものは、明確にして。10本に入れたくないのです。できれば」）：本文を読めなかった論は、分野の論の数に入れず、一面の表の外に分けます。七つ（中間領域を含む）は、表の外の「本文を読めなかった論」に分けました。
- 「間」の論は、原典（Nitschke 1988）から対立・衝突・統合を読むのが難しく、語の構造の論です。予想：外さずに「原典から読むのは難しい」と書いて並べる（農学・生態学の境界の理論と同じ扱い）。縁側の「縁」は語が同じだけなので数えない（規約で決めたこと）。 → 答え（2026-11-10、調べ方の計画と規約の中心の問い）：予想のとおり、外さずに「原典から対立・衝突・統合を読むのは難しい」と書いて並べます。対応が無いと出たら、そのまま保ちます。

## 新しく見つけた原典

エージェントは台帳を書き換えていません。取ってきたファイルは、司令塔が手元の原典の置き場に置き、下の行と書き足しを台帳に入れました（2026-11-09）。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Alexander, C. (1965). A City is Not a Tree. *Architectural Forum* 122(1), 58–62; 122(2), 58–62 | https://www.patternlanguage.com/archive/cityisnotatree.html （著者のサイトの再録。書誌は著者のサイトの記載） | 手元に保存した（著者の写し。HTML） |
| Alexander, C. (1999). The origins of pattern theory: the future of the theory, and the generation of a living world. *IEEE Software* 16(5), 71–82. DOI 10.1109/52.795104 | https://www.patternlanguage.com/archive/ieee.html （著者のサイトの 1996 年の講演の記録。誌面との一致は未確認）。IEEE は有料 | 手元に保存した（著者の写し。HTML） |
| Withagen, R. & Caljouw, S. R. (2017). Aldo van Eyck's Playgrounds: Aesthetics, Affordances, and Creativity. *Front. Psychol.* 8, 1130. DOI 10.3389/fpsyg.2017.01130 | https://www.frontiersin.org/articles/10.3389/fpsyg.2017.01130/pdf （出版社の OA。CC BY） | 手元に保存した（二次資料） |
| O'Brien, D. & Carrasco, S. (2021). Contested incrementalism: Elemental's Quinta Monroy settlement fifteen years on. *Front. Archit. Res.* 10(2), 263–273. DOI 10.1016/j.foar.2020.11.002 | https://ndownloader.figshare.com/files/54377570 （ニューカッスル大学の機関リポジトリの出版社の版。CC BY-NC-ND） | 手元に保存した |
| Nitschke, G. (1988). MA: Place, Space, Void. *Kyoto Journal* 8 | https://kyotojournal.org/hidden-japan/ma-place-space-void/ （出版社のサイトの再録） | 手元に保存した（出版社のサイトの再録。HTML） |
| Menges, A. (2013). Performative Morphology in Architecture: Integrative Design Research by the Institute for Computational Design. *SAJ (Serbian Architectural Journal)* 5, 92–105 | https://openlab.citytech.cuny.edu/anzalonearch3631spring2015-/files/2011/06/SAJ-2013-2-A.Menges.pdf （授業の頁の写し。権利は未確認） | 手元に保存した（授業用の写し） |
| Liddell, I. (2015). Frei Otto and the development of gridshells. *Case Studies in Structural Engineering* 4, 39–49. DOI 10.1016/j.csse.2015.08.001 | ScienceDirect（OA だが自動取得で確認画面） | 自動では取れない |
| Goldsmith, N. (2016). The physical modeling legacy of Frei Otto. *Int. J. Space Struct.* 31(1), 25–30. DOI 10.1177/0266351116642071 | Sage（有料） | 書誌だけ |
| Veenendaal, D. & Block, P. (2012). An overview and comparison of structural form finding methods for general networks. *Int. J. Solids Struct.* 49(26), 3741–3753. DOI 10.1016/j.ijsolstr.2012.08.008 | Elsevier（有料）。研究室のサイトの Wayback に写しなし | 書誌だけ |
| Schumacher, P. (2009). Parametricism: A New Global Style for Architecture and Urban Design. *Architectural Design* 79(4), 14–23. DOI 10.1002/ad.912 | Wiley（有料） | 書誌だけ |
| Reichert, S., Menges, A. & Correa, D. (2015). Meteorosensitive architecture. *Computer-Aided Design* 60, 50–69. DOI 10.1016/j.cad.2014.02.010 | Elsevier（有料） | 書誌だけ |
| Pilgrim, R. B. (1986). Intervals ("Ma") in Space and Time. *History of Religions* 25(3), 255–277. DOI 10.1086/463043 | UChicago（有料） | 書誌だけ |
| Lynch, K. (1960). *The Image of the City*. MIT Press | 書籍 | 書誌だけ |
| Lynch, K. (1984). Reconsidering The Image of the City. In *Cities of the Mind*, 151–161. DOI 10.1007/978-1-4757-9697-1_9 | Springer（有料） | 書誌だけ |
| Venturi, R. (1966). *Complexity and Contradiction in Architecture*. The Museum of Modern Art | MoMA の公開版は見つからなかった。追記（2026-11-09）：MoMA のサイトにあるのは 2019 年の版の見本の PDF（16 頁。review 用）で、司令塔が取って全文を「poch」で検索したが、poché の箇所は入っていなかった | 書誌だけ |
| Pallasmaa, J. (2014). Space, Place, and Atmosphere: Peripheral Perception in Existential Experience. In *Architectural Atmospheres*, 18–41. DOI 10.1515/9783038211785.18 | De Gruyter（有料）。Lebenswelt の版は誌のサイトに接続できなかった | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Alexander 2002」の行：手元の PDF は 313 頁の抜粋の走査で文字の層が無い。p.x（pdf の p.8）を確かめた。走査は PFU ScanSnap で作られ、上げた人は未確認。
- 台帳の「Risselada ら 2006」の行：書誌を、Risselada, M., van den Heuvel, D. & de Waal, G. (eds.) (2006). *Team 10: Keeping the Language of Modern Architecture Alive*. TU Delft に直す。研究者の会のサイトの写し（233 頁）。手元に保存した の候補（二次資料）。
- 台帳の「Menges 2012」の行：「OA 代替」の題を Menges (2013) Performative Morphology in Architecture に直す。
- 台帳の「Schumacher 2008」の行：URL を新しい頁に直す。手元に保存した の候補（宣言。著者のサイト）。
- 台帳の「Moroni ら 2019」の行：巻号を 47(2), 220–234 に直す。
- 台帳の「Jiang 2019」の行：arXiv の著者稿（https://arxiv.org/pdf/1909.11757 ）を足す。MDPI は 403。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 建築の論の原典は書籍が多く、本文に当たれたのは、著者のサイトの講演と論説（Alexander）、宣言（Schumacher）、出版社の再録（Nitschke）、授業の頁の論文（Menges）、機関リポジトリの評価の論文（O'Brien & Carrasco）でした。評価の論文は、至らない形を正面から書いていて、中心の問いに直接効きました（地球科学と同じ）。
- 台帳が「取得先を確かめた」と書く行の写しは、二つが別の文書でした（台帳の「Risselada ら 2006」の行は会議録、台帳の「Menges 2012」の行の「OA 代替」は別の題の論文）。取ってから表紙で確かめる手順が要りました。
- Elsevier の OA の論文は ScienceDirect で確認画面でしたが、同じ論文の機関リポジトリの写しを Figshare の API で引けました（メルボルン大学のリポジトリは Incapsula の確認画面）。
- 道具の題での検索は、Internet Archive の段で長く止まることがありました（Venturi）。一件ずつ時間の上限を付けて走らせました。
- 報告の非二元性の言い方は、退避版の 12 の論すべてにある点検の欄（CHK-A）から、語を外して本文に入っていました。英語版には、退避版にも調べた跡にも無い欠損の語が入っていました。版ごとに grep する必要があります。
