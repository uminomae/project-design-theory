# 地球科学：記録から外した作業の節

`cs/evidence/evidence-D05-earth-science.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D05-earth-science.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（73〜84 行）と本文（86 行・228 行） | 10 | 強い 7（プレート・ENSO・地震・火山・大量絶滅・磁場・惑星分化）・部分 2（ミランコビッチ・シーケンス層序）・条件付き 1（風化） |
| en（39 行・93 行・155 行） | 10 | 「nine of the ten」が強いか明らかな対応、風化が条件付き。「seven」は縁に強く対応した数 |
| pres（21〜23 行・43〜58 行） | 14 | 23 行は「強い対応 7件、条件付きの対応 3件」。表は 強い構造対応 7（プレート・ENSO・弾性反発・火山・シーケンス層序・磁場・惑星分化）・有力 3（ミランコビッチ・摩擦則・大量絶滅）・監査枠 2（スラブ駆動・Walker 循環）・条件付き 2（100kyr 問題・風化） |
| 退避版（407 行・413 行） | 10 | Accept 9・CA 1。縁フラグ 🔴 7・🟡 3 |
| 調べた跡 phase5（15〜24 行） | 10 | Anchor 4（のち火山を足して 5）・Scoped 4・High-risk 2 |

ja の「強い 7」は、退避版の Accept 9 から ミランコビッチとシーケンス層序を引いた数と合いますが、en の「seven」は退避版の縁フラグ 🔴 7 と同じ七つ（大量絶滅を含み、シーケンス層序を含まない）を数えています。同じ「7」が、ja では判定、en では縁との対応の数を指しています。pres は論が 14 で、23 行の「条件付き 3」は表の「条件付き 2」と合いません。シーケンス層序は ja で部分、pres で強い、大量絶滅は ja で強い、pres で有力です。

### 横断の節は報告の作った分け方

報告の横断の節（ja 174〜198 行）の五つと、未解決の問い（ja 200〜224 行）は、退避版（413〜459 行）と調べた跡（phase6・phase7）が作った分け方で、原典の著者の分け方ではありません（型 H）。原典で確かめると、次のようになります。

- 「6.1 不発の記録の体系的存在」（ja 180〜182 行）：三つの例のうち、原典で確かめられたのは火山の噴火に至らない貫入だけです（Moran ら pp.115–116。報告の引く原典ではない）。オーラコジェンとエクスカーションは、読んだ原典に出てきません。逆に、報告が数えていない至らない形が、原典に書かれていました。地震の止まる破壊と少しずつ逃げるひずみ（Scholz pp.38・40）、ENSO の育たない事象（Cane & Zebiak p.1086）、回復の間に消える系統（Erwin）、残らない地層（Catuneanu ら p.15）です。
- 「6.2 波の振幅と束の振幅の非比例性」（ja 184〜186 行）：ミランコビッチの「最弱の日射変化」は、数を取り違えたうえで（0.2% と 0.1%）、Hays が書く変調の仕組み（p.1130）を落としています。地震の Gutenberg–Richter 則は複雑系科学の記録の 2 を参照します。
- 「6.3 閾値型メカニズムの集中」（ja 188〜190 行）：「10件中5件」は退避版 409 行の T1 型の数です。
- 「6.5 渦の質的バリエーション」（ja 196〜198 行）の四つの分け方は、調べた跡の分け方です。

### 至らない形を外に置いていること

報告は、至らない形を「不発の記録」として拾っていて、30 の分野の報告の中では外に置く度合いが小さいほうです。一方で、風化を「5段階の適用が弱まる限界領域」（ja 190 行・204 行）、絶滅のカスケードを「死の渦」（ja 212 行）として、5段階の外か、分けた別の種類に置いています。原典を開くと、至らない形と、その分かれ目が、論の中心に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| プレートテクトニクス | 超大陸がまとまる時期に多様性が下がり、大量絶滅を招くことがある（Nance 2022） | 大陸が一つに集まるか |
| ENSO | 熱の量が足りないと事象は育たない。春に保てなくなり、行き過ぎる（Cane & Zebiak p.1086） | 赤道の海の熱の量が平均より多いか、季節の条件 |
| ミランコビッチ | 線形の応答では 10 万年の周期は生まれない（Hays p.1130） | 氷床が育つ速さと解ける速さの違い（仮説） |
| 地震 | 安定な領域に入った破壊は止まる。条件付き安定ではひずみが少しずつ逃げる（Scholz pp.38・40）。途中の小さな変位でひずみが逃げる（Reid p.31） | 摩擦の (a−b) の符号、ばねの固さの臨界の値（Ruina の要旨） |
| 火山 | マグマは地表の手前で止まることが多い。前ぶれがあっても噴火しない（Moran ら p.115）。噴煙柱は崩れ落ちることがある（Woods の要旨） | 促す要因と妨げる要因の組、噴出の速さと質量の流れ |
| シーケンス層序 | 削剥で削られ、欠乏でたまらず、地層が残らない（Catuneanu ら p.15） | 基準面の上がる速さと堆積の速さ |
| 大量絶滅 | 生き延びた系統が回復の間に消える。生態の空きが崩れる（Erwin） | 書かれていない（絶滅の大きさと影響に相関は無い） |

数学・物理学・化学・進化生物学・複雑系科学と同じく、至らない形は原典の中心にありました。地球科学では、片方の勝利（海進と海退の入れ替わり、氷期と間氷期）と、場に戻って次を待つ形（ENSO の熱の貯え、地震のひずみの再蓄積）と、そのほかの至らない形（止まる破壊、止まるマグマ、残らない地層、消える系統）が、はっきり分かれて書かれていました。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30 行・38 行）、「方法論的開示（S60）」（44〜49 行）、「温度帯の分布」（86 行）、「安全弁」（88〜90 行）、「結びの温度開示」（232〜233 行）、「Colophon」の generator_model（235〜245 行）。49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。en 15 行の「three conditions associated with Edge」は、退避版の縁フラグの「縁の3条件」（40 行ほか）から来ています。en 31 行の「If these definitions already produce discomfort…Both are legitimate choices」は、読者への合いの手です（型 F）。数学・物理学・化学・経営学・複雑系科学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| ENSO の不規則な間隔を「確率的」の実証とする | 退避版 90 行の [独自]、調べた跡 phase6 38 行 |
| 離心率の日射変化「約0.2%」 | 調べた跡 phase6 56 行・phase7 |
| 「81〜96%」 | 退避版 253 行 |
| 「10〜100倍」 | 退避版、調べた跡 phase6 |
| オーラコジェンを「縁を超えなかったリフトの化石」とする | 退避版 37 行、調べた跡 phase6・phase7 |
| シーケンス層序の「最も厳密」 | 退避版、調べた跡 phase5・phase7 |
| 「縁の3条件」（en 15 行） | 退避版の縁フラグの欄（40 行・264 行・301 行・338 行・375 行） |
| 判定の数が版ごとに違う | ja は退避版の Accept 9 から二つを引いた形。en の「seven」は退避版 413 行の縁フラグ 🔴 7。pres は 14 件の別の表（DR の候補の表の形） |
| ウィルソンサイクルの提唱者に Morgan・Le Pichon を並べる | 退避版の書誌の欄と、台帳の「Morgan 1968」の行がプレートテクトニクスの行に入っていること |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「5段階モデルとの対応が最も自然に読める地球科学理論の一つ」（108 行）、「対応は極めて明快」（124 行）、「『束』の定義においては30領域中で最も厳密」（140 行）、「構造対応が最も高密度な領域の一つ」（228 行）、「5段階モデルの記述力を示す顕著な事例」（228 行）、en 121 行「earth science provides one of the most direct supporting indications for that claim」、en 159 行「This is not merely a metaphorical resemblance」。
- 型 E（研究の一線を事実として書く）：プレートの駆動力の配分（96 行）、10 万年問題の位置づけ（116 行）、地震予知の難しさを5段階の性質の裏付けにする所（124 行）。
- 型 H（原典に無い体系）：「縁の3条件」（en 15 行）、「渦の質的バリエーション」の四つ（196〜198 行）。
- 型 B（二つに切って置く）：「死の渦」と「創造の渦」（212 行、en 133 行・147 行）、「閾値型」と「非閾値型」（188〜190 行）。
- 型 F（読者への合いの手・言い訳）：「対応が弱い事例の存在がモデルの誠実性を担保しています」（156 行）、en 31 行。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- 精読ノート「Cane & Zebiak 1985」 44 行：引用が原文と違い、意味が逆になっています。ノートは「One intent is to reproduce … so to simulate it precisely. We formulate a minimum model for the perturbations」、原文（p.1085）は「Our intent is to reproduce … not to simulate it precisely. We formulate a nonlinear model for the perturbations」です。同じノートの頁（p.1・p.2）は PDF の頁で、誌面では pp.1085・1086 です。
- wiki の頁「Bjerknes 1969」 62 行：「確立した学術的理解に基づいて記述した」「OA URL（AMS journals）は直接取得できなかった」とあり、原典を読まずに書いた頁です。ハーバード大学の授業の頁の写しで本文が読めます（上の 2 の節）。
- 台帳の「Bjerknes 1969」の行（235 行）：取得先の AMS は、2026-11-09 に自動取得で 403 でした。ハーバード大学の授業の頁の写しを書き足す案です。
- 台帳の「Suarez & Schopf 1988」の行（234 行）：取得先の harmonyforearth.org は、上げた人が分かりません。PDF は走査の画像で文字の層がありません。AMS の誌面に替える案です。
- 台帳の「Conrad & Lithgow-Bertelloni 2002」の行（230 行）：取得先（ハワイ大学の FTP）は 2026-11-09 に取れました（同じ日の早い時刻に 502 だったと頼む文にあります）。
- 台帳の「Nance ら 2014」の行（231 行）：注にある Nance 2022 は、独立した行が無いので、下の案で台帳の「Nance 2022」の行にしました。
- Crossref の 10.1038/377203a0 の著者名が「Glatzmaiers」と綴られています（Crossref の側の誤りで、この repo の誤りではありません）。

精読ノート「Cane & Zebiak 1985」の主張 1〜3 と主張 5 の引用は、読んだ所では原典と合っていました（p.1086）。ノートは、フィードバックが根づかない条件（p.1086）を落としています。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Suarez & Schopf（1988）の台帳の取得先（harmonyforearth.org）は、上げた人と権利が確かめられません。上げた人の分からない写しの扱い（「規約で決めたこと」2026-11-09 の複雑系科学の行）に従い、読んだ頁を書いて未照合としました。予想：pjdhiro も同じ扱いを選ぶ見込みです（stance 2-6 誠実さ）。AMS の誌面をブラウザで保存すれば本文照合済にできます。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：匿名の個人が上げた写しは、本文照合済にせず、未照合のまま読んだ頁を書きます。この扱いのままです。
- Reid（1910）は、イリノイ大学の図書館が走査した Internet Archive の資料の OCR の文字で読みました。1910 年の刊行でパブリックドメインなので本文照合済にし、「OCR の文字で読んだ」と添えました（「規約で決めたこと」の経済学の行）。
- Hull（2015）は、著者の所属するイェール大学の学科のサイトの写しで読みました。大学のサイトの写しとして本文照合済にしました（調べ方の規約 §5-8 の「著者・大学の写しは載せる」）。
- 火山噴火・大量絶滅・プレートテクトニクスで、報告が引かない後の総説（Moran ら 2011・Erwin 2001・Hull 2015・Nance 2022）を、同じ論の中の確かめ先として足しました。論の数は増やしていません（調べ方の計画と規約「調査の手順」1）。
- 報告の「死の渦」と「創造の渦」の区別は、問いとして立てず、回復の間に消える系統を至らない形の行として並べました（規約で決めたこと「射程を狭める推奨は採らない」、中心の問い）。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Nance, R. D. (2022). The supercontinent cycle and Earth's long-term climate. *Ann. N. Y. Acad. Sci.* 1515(1), 33–49. DOI 10.1111/nyas.14849 | https://pmc.ncbi.nlm.nih.gov/articles/PMC9796656/ （CC BY。PMC の記事の頁） | 取得先を確かめた |
| Hays, J. D., Imbrie, J. & Shackleton, N. J. (1976). Variations in the Earth's Orbit: Pacemaker of the Ice Ages. *Science* 194(4270), 1121–1132. DOI 10.1126/science.194.4270.1121 | https://www2.atmos.umd.edu/~nigam/AOSC617/Hays.Imbrie.Shackelton.Orbital.theory.ice.age.Science.1976.pdf （授業用の写し。誌面） | 手元に保存した（授業用の写し） |
| Reid, H. F. (1910). *The Mechanics of the Earthquake*. The California Earthquake of April 18, 1906, Report of the State Earthquake Investigation Commission, Vol. II. Carnegie Institution of Washington, Publication 87 | https://archive.org/details/californiaearthq872cali （イリノイ大学の図書館の走査。パブリックドメイン。OCR の文字で読んだ） | 取得先を確かめた（OCR の文字） |
| Scholz, C. H. (1998). Earthquakes and friction laws. *Nature* 391(6662), 37–42. DOI 10.1038/34097 | https://www.eoas.ubc.ca/courses/eosc562/scholz1998.pdf （授業用の写し。誌面） | 手元に保存した（授業用の写し） |
| Dieterich, J. H. (1979). Modeling of rock friction: 1. Experimental results and constitutive equations. *J. Geophys. Res.* 84(B5), 2161–2168. DOI 10.1029/JB084iB05p02161 | Wiley（刊行から 24 か月を過ぎて無料のはず。自動取得で 403） | 書誌だけ（要旨照合済） |
| Ruina, A. (1983). Slip instability and state variable friction laws. *J. Geophys. Res.* 88(B12), 10359–10370. DOI 10.1029/JB088iB12p10359 | Wiley（自動取得で 403） | 書誌だけ（要旨照合済） |
| Moran, S. C., Newhall, C. & Roman, D. C. (2011). Failed magmatic eruptions: late-stage cessation of magma ascent. *Bull. Volcanol.* 73(2), 115–122. DOI 10.1007/s00445-010-0444-x | https://www.eps.mcgill.ca/~courses/c567/Week%208%20-%20Failed%20eruptions/Moran%20et%20al%202011,%20failed%20eruptions.pdf （授業用の写し。誌面）。USGS の記録 https://pubs.usgs.gov/publication/70036578 | 手元に保存した（授業用の写し） |
| Cashman, K. V. & Sparks, R. S. J. (2013). How volcanoes work: A 25 year perspective. *GSA Bull.* 125(5–6), 664–690. DOI 10.1130/B30720.1 | GSA（自動取得で 403） | 書誌だけ（要旨照合済） |
| Woods, A. W. (1995). The dynamics of explosive volcanic eruptions. *Rev. Geophys.* 33(4), 495–530. DOI 10.1029/95RG02096 | Wiley（自動取得で 403） | 書誌だけ（要旨照合済） |
| Gudmundsson, A. (2012). Magma chambers: Formation, local stresses, excess pressures, and compartments. *J. Volcanol. Geotherm. Res.* 237–238, 19–41. DOI 10.1016/j.jvolgeores.2012.05.015 | Elsevier（有料。取得を試していない） | 書誌だけ |
| Catuneanu, O., Abreu, V., Bhattacharya, J. P., Blum, M. D. ら (2009). Towards the standardization of sequence stratigraphy. *Earth-Sci. Rev.* 92(1–2), 1–33. DOI 10.1016/j.earscirev.2008.10.003 | https://basin.earth.ncu.edu.tw/download/courses/sequence_strat/reading/Catuneanu_etal_2009_ESR_Standardization%20of%20sequence%20stratigraphy.pdf （授業用の写し。誌面） | 手元に保存した（授業用の写し） |
| Raup, D. M. & Sepkoski, J. J. (1982). Mass Extinctions in the Marine Fossil Record. *Science* 215(4539), 1501–1503. DOI 10.1126/science.215.4539.1501 | Science（有料）。個人の GitHub の頁の JSTOR の写しは画像だけで、上げた人と権利は未確認 | 書誌だけ（要旨照合済） |
| Alvarez, L. W., Alvarez, W., Asaro, F. & Michel, H. V. (1980). Extraterrestrial Cause for the Cretaceous-Tertiary Extinction. *Science* 208(4448), 1095–1108. DOI 10.1126/science.208.4448.1095 | mantleplumes.org の写し（2026-11-09 に接続できず）、OSTI（応答なし）。日をおいて取り直す | 書誌だけ（要旨照合済） |
| Erwin, D. H. (2001). Lessons from the past: Biotic recoveries from mass extinctions. *PNAS* 98(10), 5399–5403. DOI 10.1073/pnas.091092698 | https://pmc.ncbi.nlm.nih.gov/articles/PMC33225/ （PMC の記事の頁。efetch の XML は要旨だけ） | 取得先を確かめた |
| Hull, P. (2015). Life in the Aftermath of Mass Extinctions. *Curr. Biol.* 25(19), R941–R952. DOI 10.1016/j.cub.2015.08.053 | https://earth.yale.edu/sites/default/files/2024-12/Hull%20pdf%209.pdf （著者の所属の学科のサイトの写し。誌面） | 手元に保存した（大学のサイトの写し） |
| Goldich, S. S. (1938). A Study in Rock-Weathering. *J. Geol.* 46(1), 17–58. DOI 10.1086/624619 | シカゴ大学出版（自動取得で 403） | 書誌だけ |
| Jenny, H. (1941). *Factors of Soil Formation*. McGraw-Hill | 書籍（個人のサイトの写しは取っていない） | 書誌だけ（書籍） |
| Chadwick, O. A. & Chorover, J. (2001). The chemistry of pedogenic thresholds. *Geoderma* 100(3–4), 321–353. DOI 10.1016/S0016-7061(01)00027-1 | Elsevier（自動取得で 403） | 書誌だけ |
| Glatzmaier, G. A. & Roberts, P. H. (1995). A three-dimensional self-consistent computer simulation of a geomagnetic field reversal. *Nature* 377(6546), 203–209. DOI 10.1038/377203a0 | Nature（ログインの画面） | 書誌だけ |
| Roberts, P. H. & Glatzmaier, G. A. (2000). Geodynamo theory and simulations. *Rev. Mod. Phys.* 72(4), 1081–1123. DOI 10.1103/RevModPhys.72.1081 | APS（自動取得で 401） | 書誌だけ |
| Kleine, T., Münker, C., Mezger, K. & Palme, H. (2002). Rapid accretion and early core formation on asteroids and the terrestrial planets from Hf–W chronometry. *Nature* 418(6901), 952–955. DOI 10.1038/nature00982 | Nature（ログインの画面） | 書誌だけ |
| Elkins-Tanton, L. T. (2012). Magma Oceans in the Inner Solar System. *Annu. Rev. Earth Planet. Sci.* 40, 113–139. DOI 10.1146/annurev-earth-042711-105503 | Annual Reviews（自動取得で 403） | 書誌だけ（要旨照合済） |

既存の行に書き足す案：

- 台帳の「Conrad & Lithgow-Bertelloni 2002」の行（Conrad & Lithgow-Bertelloni 2002）：2026-11-09 に台帳の取得先から取れた。PDF の 1 頁目は Science の誌面（2006 年の取得の表紙つき）。
- 台帳の「Suarez & Schopf 1988」の行（Suarez & Schopf 1988）：取得先は上げた人の分からない写しで、画像だけ。AMS の誌面（https://doi.org/10.1175/1520-0469(1988)045%3C3283:ADAOFE%3E2.0.CO;2 ）に替える案。
- 台帳の「Bjerknes 1969」の行（Bjerknes 1969）：ハーバード大学の授業の頁の写し（https://courses.seas.harvard.edu/climate/eli/Courses/EPS281r/Sources/ENSO/Bjerknes-1969.pdf ）で本文が読める。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 地球科学の原典は、ためる力と抑える力の兼ね合いと、分かれ目の両側で何が起きるかを書いていました（岩の強さとひずみ、摩擦の (a−b) の符号、赤道の海の熱の量、促す要因と妨げる要因、上がる速さと埋める速さ）。下で起きることは「何も起きない」でなく、破壊が止まる・ひずみが少しずつ逃げる・事象が育たない・マグマが止まる・地層が残らない、という形で書かれていて、至らない形の材料になりました。
- 報告の引く原論文（Nature・Science・Elsevier・Wiley）は多くが壁の向こうでしたが、同じ論の後の総説や、至らない形を正面から扱う論文（Moran ら 2011 の「失敗した噴火」、Erwin 2001 の回復）が、授業の頁や PMC で読めました。報告の論を確かめるときに、至らない形を題にした論文を探すと、中心の問いに直接効く材料が見つかりやすいと分かりました。
- AGU の雑誌（JGR・Rev. Geophys.）は、24 か月を過ぎて無料のはずですが、Wiley の自動取得はどれも 403 でした。AMS も 403 で、古い号は授業の頁の写しで読めました。Nature はログインの画面に送られました。
- PMC の efetch の XML は、PNAS の古い論文では要旨だけでした。PMC の記事の頁（HTML）で全文が読めました。頼む文の当たり（PMC33226）は別の論文（Rosenzweig）で、Erwin 2001 は PMC33225 でした。
- 要旨は、出版社の頁が閉じていても、OpenAlex の要旨で読めることがありました。要旨照合済として書き、本文の内容は書いていません。
- 走査の画像だけの PDF（Suarez & Schopf）は、1 頁目を画像にして読めました。
