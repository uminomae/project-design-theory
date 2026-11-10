# 農学・生態学：記録から外した作業の節

`cs/evidence/evidence-D12-agriculture.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D12-agriculture.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | ja（日本語版） | en（英語版） | pres（プレゼン版） | 退避版 |
|---|---|---|---|---|
| 対応の強さの件数 | 強い 4・部分的 4・条件付き 2（ja 83 行・228 行） | 最も高い評価 5・中程度 5（en 45 行） | 強い 9・部分的 1（pres 23 行） | 10 件すべて Accept |
| 強い対応の論 | IPM・レジームシフト・境界・パーコレーション（ja 216 行） | 名を挙げない | 1〜8 と 10 | ― |
| 縁の型の数え方 | 日本語版の中で三通り。閾値型・設計的・境界型（ja 58 行）、閾値型・境界型・関係型（ja 83 行・218 行）、内在的・設計的・構築的の三起源（ja 179 行） | 閾値型 4・境界型 3・関係型 2・複合 1（en 47 行） | ― | ― |
| 遷移の提唱者 | Clements・Connell & Slatyer（ja 72 行） | ― | Clements・Connell & Slatyer・Holling（pres 45 行） | Clements・Connell & Slatyer・Holling（退避版 33 行） |

件数と型の数え方は、版ごとに別の数え方をしていて、どれも原典から出た数ではありません。日本語版の中でも、縁の「三つの型」の中身が節ごとに違います（58 行と 83 行で、設計的と関係型が入れ替わる）。判定は「未判定（版の食い違い）」です。

- en 47 行「It is rare, even among the 30 domains, to find within a single domain such a diverse set of implementations of Edge」：30 の分野を比べた跡はありません。言い過ぎ・中。
- ja 83 行「『渦』（フィードバック）は全10件で明示されています」、en 95 行：境界の理論は、変えられた流れが区画の中の過程を変えるかにまだ答えていないと書き（Cadenasso p.756）、生態系エンジニアの論は、エンジニアへの返りがほとんど調べられていないと書きます（Jones p.381）。言い過ぎ・中。
- ja 216 行「10件の理論・概念すべてにおいて何らかの構造対応が認められ」、218 行「縁の起源が『内在的・設計的・構築的』の三分法で整理できることが示されました」：三分法は、調べた跡の構造の読み直し（phase6 の C-1）で Claude が [SPECULATIVE] の印を付けて出した見立てで、原典の主張ではありません。「示されました」は言い過ぎ・中。en 21 行の「Edge's three conditions, namely relational network, indeterminacy, and connection to Vortex」は ja に無い判定の基準です。

### 中心の問いとの関わり

- 原典は、至らない形を論の中心に書いていました。遷移の阻害とやり直し、殺虫剤だけの防除の悪循環、作物に入らずに流れ出る窒素、別の状態への移り変わりと戻りにくさ、絶滅の閾値と生態学的な罠、裸地への崩れと砂漠化、病原体のたまりによる衰えと植え替えの失敗、土が流れる灌木林への移り変わりです。報告は、このほとんどを書かず、分かれ目・境界・フィードバックを縁の型として分ける形にまとめています。
- 報告は、閾値（分かれ目）そのものを縁に当てています（ja 58 行・121 行）。原典でぶつかっているのは、分かれ目の両側の状態（生活形の違う生き物の優占、Scheffer p.595）や、殺虫剤と天敵、植物と病原体です。分かれ目は、ぶつかりの結果が決まる所として書かれています。
- Holling（1973）と Scheffer ら（2001）は、揺れや撹乱を過程の外に置かず、系を保ち更新するものとして書き、撹乱を除く管理がかえって崩れを招くと書いています（Holling pp.14–15・21、Scheffer p.596）。中心の問いの、良いこと以外とぶつかるのを包んで進む形に近い原典の文です。報告はこの点を書いていません。
- 管理の枠組み（IPM・状態と遷移のモデル）では、分かれ目を人が経済や管理の時間の尺度で置きます。報告はこれを「設計的な縁」「縁の制度化」と呼びますが、原典では、分かれ目は人の尺度で動き（Stern p.86、Bestelmeyer ら p.310）、定めるデータも足りないと書かれています（Bestelmeyer ら p.315）。

### テンプレート由来の表示

- 冒頭の「立ち位置明示」（ja 3〜6 行）、「安全弁」（ja 85〜87 行）、「方法論的開示（S60）」（ja 43〜48 行）、「結びの温度開示」（ja 213〜214 行）、「温度帯の分布」（ja 83 行）、Colophon（ja 222〜232 行）。型 F の表示と LLM の記号で、テンプレートが原因です（README の段 1）。
- ja 48 行「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」は、文責を pjdhiro に置いています。生成は claude-opus-4-6（ja 227 行）で、文責は Claude です。
- ja 29・37 行の Phase 1〜7 の記号。

### 誤りの出どころ

- 「促進・競争・捕食」（ja 95 行）：退避版 41 行の 5段階対応の欄。調べた跡 phase6 12 行がそれを「怪しい対応」として写し、報告はそのまま本文にした。93 行は正しい三つを書いていて、同じ節の中で食い違う。
- Holling の「回復能力を定量化」（ja 93 行）：退避版 38・56 行。DR 26 行は「安定性と区別」と正しく書いていて、退避版で取り違えが入った。
- 「二目的最適化」（ja 101 行）：退避版 79・82・93 行の [P] と独自性の欄。調べた跡 phase5 57 行・phase6 23 行が「見えていなかった構造」として格上げした。
- 「USDA が STMs を採用」（ja 165 行）：調べた跡 phase7 41 行・phase5 148 行。出典の書誌が無い。
- 「縁の三起源」（ja 177〜181 行）と「渦の方向性」（ja 183〜187 行）：調べた跡 phase7 の横断の分け方。元は phase6 の C-1・C-2 で、Claude が [SPECULATIVE] の印を付けていた。報告では印が落ちている。原典の分け方ではない。
- 早期警告から「5段階間の遷移が前兆を持つ」とする見立て（ja 121 行・207 行）：調べた跡 phase6 129 行と phase7 68 行。phase7 では [SPECULATIVE] の印が付いていた。
- 「BZ反応と同型」（en 77 行）：退避版の乾燥地の植生の項の「独自性」と「文脈」の欄（293・303・309 行）。
- 状態と遷移のモデルを「レジームシフトの管理実装版」とすること（ja 167 行）：退避版の状態遷移モデルの項の「独自性」（419・429 行）。
- 「根圏・微生物・土壌粒子の界面」（ja 103 行）：退避版の縁の表（468 行）。
- 退避版の文献表（255 行）は With & Crist（1995）を *Ecology* 76(7) としています。Crossref と誌面では 76(8) です（報告の本文には巻号は出ていません）。

### 文体（書き方と誤りの型の規約）

- 言い過ぎ（型 E）：「5段階との対応は最も直接的です」（ja 121 行）、「『縁』概念の最も明示的な制度的実装の一つ」（ja 111 行）、「稀有な構造」（ja 143 行）、「この領域の重要な知見です」（ja 60 行）、「管理介入が5段階の各段階に具体的に挿入できるという発見」（ja 218 行）。
- 事実の形で書かれた研究の一線：「臨界閾値が存在します」（ja 133 行）、「種間競争を経て極相群集へと遷移します」（ja 93 行）。
- 「〜という対応が成立します」が 10 の節すべての「解釈として」にあり、Claude の読み替えを成立した事実のように書いています。
- 至らない形を過程の外に置く形は、この報告では目立ちません。代わりに、原典が中心に置く至らない形（遷移が止まる、殺虫剤だけの防除の失敗、模様から裸地への移行、窒素の損失）を、報告が書いていません（抜け）。

## 判断が要るもの

1. 状態と遷移のモデル（論 10）を、University of Arizona のアーカイブの PDF をブラウザで保存してから照合し直すか。予想：保存してから照合する（stance 2-5、最初から完全にしようとしない。今は未照合のまま残す）。 → 答え（2026-11-10、調べ方の計画と規約「規約で決めたこと」の取れなかった PDF の行）：保存は Issue #73 の表に回し、pjdhiro があとでまとめてブラウザで保存します。保存されるまでは今の状態のままです。本文を読めなかった論として、表の外に分けました（2026-11-10）。 → そのあと同じ日に、その論を書き継いだ総説（Bestelmeyer ら 2017。出版社の OA）で本文に当たれたので、表に戻しました。提唱者の Westoby ら（1989）の保存は、今も Issue #73 の表のとおりです。
2. 生態学的境界（論 5）を論として残すか。原典は道具立ての論で、衝突も至らない形も書いていません。予想：残し、「原典から対立・衝突・統合を読むのは難しい」と書いたまま並べる（README「中心の問い」：対応が無いと出たら、そのまま保つ。型 E）。 → 答え（2026-11-10、調べ方の計画と規約の中心の問い）：予想のとおり、外さずに「原典から対立・衝突・統合を読むのは難しい」と書いて並べます。対応が無いと出たら、そのまま保ちます。

## 新しく見つけた原典

台帳には、2026-11-10 にこの表のとおり行を足し、状態を改めました。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Gleason, H. A. (1926). The Individualistic Concept of the Plant Association. *Bull. Torrey Bot. Club* 53(1), 7–26. DOI 10.2307/2479933 | https://sciences.ucf.edu/biology/d4lab/wp-content/uploads/sites/23/2017/02/Gleason-1926.pdf （研究室のサイトの写し。JSTOR の走査。1926 年刊でパブリックドメイン） | 手元に保存した（研究室のサイトの写し） |
| Cadenasso, M. L., Pickett, S. T. A., Weathers, K. C. & Jones, C. G. (2003). A Framework for a Theory of Ecological Boundaries. *BioScience* 53(8), 750–758. DOI 10.1641/0006-3568(2003)053[0750:AFFATO]2.0.CO;2 | https://www.caryinstitute.org/sites/default/files/public/reprints/Cadenasso_et_al_2003_BioScience_53_750-758.pdf （著者の所属する研究所の再刷） | 手元に保存した（著者の機関の写し） |
| Fahrig, L. (2003). Effects of Habitat Fragmentation on Biodiversity. *Annu. Rev. Ecol. Evol. Syst.* 34, 487–515. DOI 10.1146/annurev.ecolsys.34.011802.132419 | https://www.montana.edu/hansenlab/documents/bio515_13/farhig%202003.pdf （授業用の写し。誌面） | 手元に保存した（授業用の写し） |
| Rietkerk, M., Dekker, S. C., de Ruiter, P. C. & van de Koppel, J. (2004). Self-Organized Patchiness and Catastrophic Shifts in Ecosystems. *Science* 305(5692), 1926–1929. DOI 10.1126/science.1101867 | https://sciences.ucf.edu/biology/d4lab/wp-content/uploads/sites/23/2024/08/Rietkerk-etal-2003.pdf （研究室のサイトの写し。ファイル名は 2003 だが中身は 2004 年の誌面） | 手元に保存した（研究室のサイトの写し） |
| van der Putten, W. H., Bardgett, R. D., Bever, J. D., Bezemer, T. M. ら (2013). Plant–soil feedbacks: the past, the present and future challenges. *J. Ecol.* 101(2), 265–276. DOI 10.1111/1365-2745.12054 | https://edepot.wur.nl/285787 （Wageningen 大学の機関リポジトリ） | 手元に保存した（機関リポジトリ） |
| Jones, C. G., Lawton, J. H. & Shachak, M. (1994). Organisms as Ecosystem Engineers. *Oikos* 69(3), 373–386. DOI 10.2307/3545850 | https://webpages.ciencias.ulisboa.pt/~vlamaral/EXPL_MAR-EST_1226_2013_files/7-Jones%201994.pdf （授業用の写し。JSTOR の走査） | 手元に保存した（授業用の写し） |
| Westoby, M., Walker, B. & Noy-Meir, I. (1989). Opportunistic Management for Rangelands Not at Equilibrium. *J. Range Manage.* 42(4), 266–. DOI 10.2307/3899492 | https://repository.arizona.edu/handle/10150/645053 （University of Arizona の機関リポジトリ。自動取得で 403） | 自動では取れない（ブラウザでの保存が要る） |
| Briske, D. D., Fuhlendorf, S. D. & Smeins, F. E. (2005). State-and-Transition Models, Thresholds, and Rangeland Health. *Rangeland Ecol. Manage.* 58(1), 1–10. DOI 10.2111/1551-5028(2005)58<1:SMTARH>2.0.CO;2 | University of Arizona の機関リポジトリ（記録 71f4b056-6ee3-4009-bc58-e1449154ff39。自動取得で 403） | 自動では取れない（ブラウザでの保存が要る） |
| Stringham, T. K., Krueger, W. C. & Shaver, P. L. (2003). State and Transition Modeling: An Ecological Process Approach. *J. Range Manage.* 56(2), 106–. DOI 10.2307/4003893 | https://repository.arizona.edu/bitstream/10150/643725/1/9780-9661-1-PB.pdf （自動取得で 403） | 自動では取れない（ブラウザでの保存が要る） |
| Rietkerk, M., Boerlijst, M. C., van Langevelde, F., HilleRisLambers, R. ら (2002). Self-Organization of Vegetation in Arid Ecosystems. *Am. Nat.* 160(4), 524–530. DOI 10.1086/342078 | https://rune.une.edu.au/bitstreams/552e113e-0bf7-4284-9c0c-a68ffa35371f/download （ニューイングランド大学の機関リポジトリ RUNE。手元の PDF とバイト単位で一致）。フローニンゲン大学と KNAW の機関リポジトリは自動取得で 403 | 手元に保存した（機関リポジトリ。2026-11-10） |
| Bever, J. D. (1994). Feedback between Plants and Their Soil Communities in an Old Field Community. *Ecology* 75(7), 1965–1977. DOI 10.2307/1941601 | http://hdl.handle.net/1808/21341 （カンザス大学の機関リポジトリ。本文のファイルは自動取得で 403） | 自動では取れない（ブラウザでの保存が要る） |
| With, K. A. & Crist, T. O. (1995). Critical Thresholds in Species' Responses to Landscape Structure. *Ecology* 76(8), 2446–2459. DOI 10.2307/2265819 | https://web.archive.org/web/20060905164109/http://www.k-state.edu/withlab/publications/With&Crist1995.pdf （著者 With の研究室のサイトの写しの Wayback の記録。文字の層の無い走査） | 手元に保存した（著者の研究室のサイトの写し。2026-11-10） |
| Bestelmeyer, B. T., Ash, A., Brown, J. R. ら (2017). State and Transition Models: Theory, Applications, and Challenges. In *Rangeland Systems*, Springer, pp.303–345. DOI 10.1007/978-3-319-46709-2_9 | https://link.springer.com/content/pdf/10.1007/978-3-319-46709-2_9.pdf （出版社の OA。CC BY-NC 2.5） | 手元に保存した（新しい行。2026-11-10） |
| Brock, W. A. & Carpenter, S. R. (2006). Variance as a Leading Indicator of Regime Shift in Ecosystem Services. *Ecology and Society* 11(2), 9. DOI 10.5751/ES-01777-110209 | https://www.ecologyandsociety.org/vol11/iss2/art9/main.html （出版社の OA の記事の頁） | 手元に保存した（新しい行。2026-11-10） |
| Taylor, P. D., Fahrig, L., Henein, K. & Merriam, G. (1993). Connectivity Is a Vital Element of Landscape Structure. *Oikos* 68(3), 571–. DOI 10.2307/3544927 | 取得を試していない | 書誌だけ（新しい行） |
| Briske, D. D., Fuhlendorf, S. D. & Smeins, F. E. (2003). Vegetation dynamics on rangelands: a critique of the current paradigms. *J. Appl. Ecol.* 40(4), 601–614. DOI 10.1046/j.1365-2664.2003.00837.x | 有料。取得を試していない | 書誌だけ（新しい行。2005 年の行とは別の論文） |
| Klironomos, J. N. (2002). Feedback with soil biota contributes to plant rarity and invasiveness in communities. *Nature* 417(6884), 67–70. DOI 10.1038/417067a | 有料。取得を試していない | 書誌だけ（新しい行） |
| Bever, J. D., Westover, K. M. & Antonovics, J. (1997). Incorporating the Soil Community into Plant Population Dynamics: The Utility of the Feedback Approach. *J. Ecol.* 85(5), 561–. DOI 10.2307/2960528 | 取得を試していない | 書誌だけ（新しい行） |
| Stern ら (1959) の DOI 10.3733/hilg.v29n02p081 | ― | 今の行に DOI を書き足した |
| Klausmeier, C. A. (1999). Regular and Irregular Patterns in Semiarid Vegetation. *Science* 284(5421), 1826–1828. DOI 10.1126/science.284.5421.1826 | 有料。写しは見つからなかった | 書誌だけ |
| von Hardenberg, J., Meron, E., Shachak, M. & Zarmi, Y. (2001). Diversity of Vegetation Patterns and Desertification. *Phys. Rev. Lett.* 87(19), 198101. DOI 10.1103/PhysRevLett.87.198101 | https://doi.org/10.17877/de290r-11355 （TU ドルトムントの機関リポジトリ。本文に認証が要る） | 書誌だけ |

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- University of Arizona の機関リポジトリ（DSpace 7）は、記録と本文のファイルの一覧は API で取れますが、本文のファイルは自動取得で 403 でした。Journal of Range Management の古いアーカイブ（journals.uair.arizona.edu）の URL は、新しいサイトの入口に送られ、記事の頁には届きませんでした。
- OpenAlex が OA の写しとして挙げる URL の一つ（edepot.wur.nl/174936）は、Folke ら 2010 でなく、同じ号の Folke & Gunderson の巻頭言でした。OA の所在の一覧も、取ってから 1 頁目の書誌で確かめる必要があります。
- 有料の原論文（Science・Ecology・Nature）は、同じ著者の後の総説（Rietkerk ら 2004、Bever と Klironomos が共著の van der Putten ら 2013）と、共著者の総説（Taylor ら の Fahrig 2003）で論の芯に当たれました。
- 精読ノートの頁の誤り：精読ノート「Connell & Slatyer 1977」 44 行の引用は p.1122 でなく p.1123、62 行の引用は pp.1138–1139 でなく p.1132、80 行の staghorn corals は p.1135 付近でなく p.1137。精読ノート「Robertson 2009」 34 行の引用は p.108 でなく p.107。精読ノート「Pedigo 1986」 28 行の被害水準の定義は p.342 でなく p.341。どれも 2026-11-09 に直しました。2026-11-10 に、同じ「Pedigo 1986」の 30 行（被害水準が密度であること）を p.345 から p.343 に、40・46・65 行（経済閾値の定義と、被害の境との関係）を p.347 から p.344 に直し、精読ノート「Holling 1973」と「Stern 1959」の書誌に DOI を足しました。wiki の頁「Córdoba 2020」はファイル名で Córdoba の綴りが落ちています。
- 2026-11-09 に写しが見つからなかった With & Crist（1995）は、著者の研究室のドメインを Wayback の一覧で PDF に絞って引くと、研究室のサイトの写しとして見つかりました。研究室の URL は、所属と名前から推した形で当たりました。
- 機関リポジトリが 403 を返した Rietkerk ら（2002）は、OA の所在の一覧が挙げる別の機関リポジトリで取れました。一つの機関が 403 を返しても、ほかの機関の写しを順に試す価値があります。
- 提唱者の論文が自動では取れない状態と遷移のモデルは、その論を書き継いだ出版社の OA の本の章で、論の芯に当たれました。出版社の OA の PDF は、自動取得では確認の頁に送られることがあります。
- 文字の層の無い走査（With & Crist）は、手元に文字を読み取る道具が無いので、要旨と考察の頁を画像にして読みました。
