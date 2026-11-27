# 学問の地図の下書き（科研費の審査区分表の小区分）

`docs/RELEASE-STAGES.md` 3.2（D 人類の man の範囲）の段 1 の下書き。このファイルは `python3 -I scripts/release-maps.py` が `kaken-assign.tsv` から作る。手で直さず、TSV を直して作り直す。

- 基準：科研費の審査区分表（文部科学省。令和 10 年度の公募から使う版。https://www.mext.go.jp/content/20261021-mxt_gakujokik-000052128_01.pdf の「審査区分表（中区分種目）」）。小区分は `kaken-kubun-r10.tsv` に機械で抜いた。
- 当てたもの：`pd/reader/*.html` の全ページと、cs の 30 分野（`cs/evidence/evidence-Dxx-*.md` の論ごとの節）。
- 当て方は Claude の読み（2026-11-26）。ページは題・説明・見出しを、cs は論の名と著者を読み、区分表の「内容の例」のどこに入るかで当てた。主に扱う区分だけを置いた。別のコンテキストで照合し直す前の下書き。

## 数

| 項目 | 数 |
|---|---|
| 小区分 | 触れている 90 / 295（触れていない 205） |
| うち読み物のページだけ・cs だけ・両方 | 11・50・29 |
| 中区分 | 触れている 41 / 66 |
| 大区分 | 触れている 13 / 13（触れていない：なし） |
| 読み物のページ | 104（区分に当てた 88・当てない 16） |
| cs の分野 | 30（どれも一つ以上の区分に当てた） |

区分に当てないページ：about・abilities・competency-frameworks・complex-plane・kaken-map・kokoro-scale-map・love-trajectory・man・shelf-love・shelf-mind・shelf-number・shelf-org・shelf-self・shelf-translations・site-evaluation・thinking-definitions。並びや目次のページ（中身は呼ぶ先のページの側）と、このサイトを測った結果のページと、pjdhiro の一年の記録（love-trajectory）。

区分の中に場所が無いもの：Love駆動開発そのもの（経営学・臨床心理学・仏教学に触れるが、どれかの区分の研究ではない）、cs の D30 の伝統知そのもの（TEK・メーティスなどの論は区分に入る）。

## 地図

● は触れている小区分で、括弧の中は当てたページ（ファイル名）と cs の分野。○ は触れていない小区分。

### 大区分 A（34 / 67）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 1 思想、芸術およびその関連分野 | 8 / 9 | ● 01010 哲学および倫理学（hamilton-philosophy-of-the-unconditioned-ja・life-drivers・love-history・mansel-limits-of-religious-thought-ja・mill-examination-of-hamilton-ja・no-road-ahead・nondual・peirce-evolutionary-love-ja・peirce-glassy-essence-ja・peirce-law-of-mind-ja・peirce-love-abduction・reasoning・thinking・william-james-self-ja・D13・inseparable-abilities）<br>● 01020 中国哲学、印度哲学および仏教学（anshin・breath-filter・forgiveness-salvation・love-driven-dev・love-driven-dev-en・love-history・nondual・shikan・zen-circle-hs・D24）<br>● 01030 宗教学（draper-intellectual-development-ja・forgiveness-salvation・james-substance-and-shadow-ja・life-drivers・mansel-limits-of-religious-thought-ja・peirce-evolutionary-love-ja・D24）<br>● 01040 思想史（anshin・buckle-history-of-civilization-ja・carus-onslaught-on-necessity-ja・hamilton-philosophy-of-the-unconditioned-ja・james-substance-and-shadow-ja・life-drivers・love-history・mill-examination-of-hamilton-ja・peirce-evolutionary-love-ja・peirce-glassy-essence-ja・peirce-law-of-mind-ja・thinking・to-james・william-james-self-ja・D16）<br>● 01050 美学および芸術論（beauty・D15・D26・D28）<br>○ 01060 美術史<br>● 01070 芸術実践論（D28・D30）<br>● 01080 科学社会学、科学哲学および科学技術史（carus-onslaught-on-necessity-ja・clausius-art-der-bewegung-ja・clausius-bewegende-kraft-der-warme-ja・darwin-historical-sketch-ja・darwin-wallace-1858-ja・draper-intellectual-development-ja・helmholtz-erhaltung-der-kraft-ja・herapath-mathematical-physics-ja・herschel-quetelet-probabilities-ja・kolliker-darwinsche-schopfungstheorie-ja・kronig-theorie-der-gase-ja・maxwell-dynamical-theory-of-gases-ja・naegeli-abstammungslehre-ja・peirce-love-abduction・quetelet-lettres-probabilites-ja・rankine-mechanical-action-of-heat-ja・thomson-heat-ja・via-vulnerability）<br>● 80010 デザイン学（D22） |
| 2 文学、言語学およびその関連分野 | 4 / 7 | ● 02010 日本文学（no-road-ahead）<br>● 02020 英語圏文学およびヨーロッパ文学（mandeville-grumbling-hive-ja）<br>● 02030 文学一般（D19）<br>● 02040 言語学（to-james・D17）<br>○ 70010 日本語教育<br>○ 70020 外国語教育<br>○ 80020 人文社会情報学および図書館情報学 |
| 3 歴史学、考古学、博物館学およびその関連分野 | 3 / 7 | ● 03010 史学一般（D16）<br>○ 03020 日本史<br>● 03030 アジア史およびアフリカ史（D16）<br>● 03040 ヨーロッパ史およびアメリカ史（buckle-history-of-civilization-ja・draper-intellectual-development-ja）<br>○ 03050 考古学<br>○ 03060 文化財科学<br>○ 03070 博物館学 |
| 4 地理学、文化人類学、民俗学およびその関連分野 | 1 / 6 | ○ 04010 地理学<br>○ 04020 人文地理学<br>● 04030 文化人類学および民俗学（D24・D25・D26・D28・D30）<br>○ 70030 地域研究<br>○ 70040 観光学<br>○ 70050 ジェンダー |
| 5 法学およびその関連分野 | 2 / 4 | ○ 05010 基礎法学および刑事法学<br>● 05020 公法学および国際公法学（D20）<br>● 05030 民事法学および国際私法学（D20）<br>○ 05040 社会法学および新領域法学 |
| 6 政治学およびその関連分野 | 2 / 4 | ○ 70030 地域研究<br>○ 70050 ジェンダー<br>● 06010 政治学（D16）<br>● 06020 国際関係論（D20） |
| 7 経済学、経営学およびその関連分野 | 4 / 10 | ○ 70040 観光学<br>● 07010 理論経済学および経済学史（mandeville-grumbling-hive-ja・newcomb-political-economy-ja・D21）<br>○ 07020 経済政策<br>● 07030 公共経済および労働経済（capacity-after-ai・emerging-abilities・soft-skills）<br>● 07040 金融およびファイナンス（D21）<br>○ 07050 経済史<br>● 07060 経営学（business-design-syllabus・decision-making・influences-management・interpersonal-abilities・julia-potential・love-driven-dev・love-driven-dev-en・management-drivers・mintzberg-schools・nonaka-complement・psychological-safety・psychological-safety-en・three-and-seven・D07・D22・inseparable-abilities）<br>○ 07070 商学<br>○ 07080 会計学<br>○ 07090 経済統計および経営情報 |
| 8 社会学およびその関連分野 | 1 / 5 | ○ 70040 観光学<br>○ 70050 ジェンダー<br>● 08010 社会学（quetelet-lettres-probabilites-ja・D18）<br>○ 08020 社会福祉学<br>○ 08030 家政学および生活科学 |
| 9 教育学およびその関連分野 | 4 / 10 | ○ 70010 日本語教育<br>○ 70020 外国語教育<br>● 09010 教育学（creative-thinking・emerging-abilities・D13）<br>○ 09020 教育社会学<br>● 09030 子ども学および保育学（D23）<br>● 09040 教科教育学および初等中等教育学（angle-rotation・rotation-multiplication・zen-circle-hs）<br>● 09050 高等教育学（business-design-syllabus）<br>○ 09060 特別支援教育<br>○ 09070 教育工学<br>○ 09080 科学教育 |
| 10 心理学およびその関連分野 | 5 / 5 | ● 10010 社会心理学（anshin・empathy・interpersonal-abilities・intrinsic-motivation・psychological-safety・psychological-safety-en・D14・D22）<br>● 10020 教育心理学（capacity-after-ai・cognitive-abilities・intelligence-structure・unsupported-ability-models・creative-thinking・developmental-stages・emerging-abilities・influences-psychology・interpersonal-abilities・intrinsic-motivation・metacognition・personality・soft-skills・stages-defense・stages-screener・thinking-dispositions・D23）<br>● 10030 臨床心理学（anxiety・defense-mechanisms・empathy・influences-psychology・love-driven-dev・love-driven-dev-en・personality・shikan・stages-defense・stages-screener・via-vulnerability・D14・D15）<br>● 10040 実験心理学（analogy・breath-filter・cognitive-abilities・executive-functions・intelligence-structure・unsupported-ability-models・decision-making・thinking・thinking-dispositions・D14・D26・inseparable-abilities）<br>● 80030 認知科学（analogy・creative-thinking・empathy・fundamental-theorem-of-algebra-analogy・metacognition・reasoning・D08・D14） |

### 大区分 B（12 / 20）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 11 代数学、幾何学およびその関連分野 | 2 / 2 | ● 11010 代数学（euler-formula・fundamental-theorem-of-algebra・fundamental-theorem-of-algebra-analogy・subtraction-kinds・three-and-seven・D01）<br>● 11020 幾何学（angle-rotation・euler-unfolded・zen-circle-hs・D01） |
| 12 解析学、応用数学およびその関連分野 | 3 / 3 | ● 12010 基礎解析学（angle-rotation・euler-formula・euler-unfolded・fundamental-theorem-of-algebra・rotation-multiplication）<br>● 12020 数理解析学（julia-potential・D01・D02・D29）<br>● 12030 数学基礎、応用数学および統計数学（buckle-history-of-civilization-ja・herschel-quetelet-probabilities-ja・quetelet-lettres-probabilites-ja・subtraction-kinds・D01） |
| 13 物性物理学およびその関連分野 | 2 / 4 | ● 13010 数理物理、物性基礎論および量子系（clausius-art-der-bewegung-ja・helmholtz-erhaltung-der-kraft-ja・herapath-mathematical-physics-ja・kronig-theorie-der-gase-ja・maxwell-dynamical-theory-of-gases-ja・D02・D29）<br>○ 13020 電子物性・光物理および原子分子物理<br>● 13030 磁性、超伝導および強相関系（D02）<br>○ 13040 生物物理、化学物理およびソフトマターの物理 |
| 14 プラズマ学およびその関連分野 | 0 / 3 | ○ 14010 プラズマ科学<br>○ 14020 核融合学<br>○ 14030 プラズマ応用科学 |
| 15 地球惑星科学およびその関連分野 | 4 / 5 | ● 15010 宇宙惑星科学（D06）<br>● 15020 大気水圏科学（D05）<br>○ 15030 地球人間圏科学<br>● 15040 固体地球科学（D05）<br>● 15050 地球生命科学（D05） |
| 91 量子情報およびその関連分野 | 1 / 3 | ○ 91010 量子情報ハードウェア<br>○ 91020 量子情報システム<br>● 91030 量子情報基礎理論・応用（D02） |

### 大区分 C（2 / 4）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 16 素粒子、原子核、宇宙物理学およびその関連分野 | 1 / 3 | ● 16010 素粒子、原子核、宇宙線および宇宙物理にする理論（gravity-love・gravity-well・D02・D06）<br>○ 16020 素粒子、原子核、宇宙線および宇宙物理にする実験<br>○ 80040 量子ビーム科学および加速器科学 |
| 17 天文学およびその関連分野 | 1 / 1 | ● 17010 天文学（gravity-well・D06） |

### 大区分 D（5 / 26）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 18 材料力学、生産工学、設計工学およびその関連分野 | 0 / 4 | ○ 18010 材料力学および機械材料<br>○ 18020 加工学および生産工学<br>○ 18030 設計工学<br>○ 18040 機械要素およびトライボロジー |
| 19 流体工学、熱工学およびその関連分野 | 2 / 2 | ● 19010 流体工学（D01）<br>● 19020 熱工学（clausius-bewegende-kraft-der-warme-ja・rankine-mechanical-action-of-heat-ja・thomson-heat-ja） |
| 20 機械力学、ロボティクスおよびその関連分野 | 0 / 2 | ○ 20010 機械力学およびメカトロニクス<br>○ 20020 ロボティクスおよび知能機械システム |
| 21 土木工学およびその関連分野 | 0 / 6 | ○ 21010 土木材料、施工および建設マネジメント<br>○ 21020 構造工学および地震工学<br>○ 21030 地盤工学<br>○ 21040 水工学<br>○ 21050 土木計画学および交通工学<br>○ 21060 土木環境システム |
| 22 建築学およびその関連分野 | 3 / 5 | ● 80010 デザイン学（D22）<br>○ 22010 建築構造および材料<br>○ 22020 建築環境および建築設備<br>● 22030 建築計画および都市計画（D27）<br>● 22040 建築史および意匠（D27） |
| 23 航空宇宙工学、船舶海洋工学およびその関連分野 | 0 / 2 | ○ 23010 航空宇宙工学<br>○ 23020 船舶海洋工学 |
| 24 社会システム工学、安全工学、防災工学およびその関連分野 | 0 / 3 | ○ 24010 社会システム工学<br>○ 24020 安全工学<br>○ 24030 防災工学 |
| 25 原子力工学、地球資源工学、エネルギー学およびその関連分野 | 0 / 2 | ○ 25010 原子力工学<br>○ 25020 地球資源工学およびエネルギー学 |

### 大区分 E（1 / 12）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 26 電気電子工学およびその関連分野 | 1 / 6 | ○ 26010 電力工学<br>○ 26020 通信工学<br>○ 26030 計測工学<br>● 26040 制御およびシステム工学（D07）<br>○ 26050 電気電子材料工学<br>○ 26060 電子デバイスおよび電子機器 |
| 27 材料工学およびその関連分野 | 0 / 6 | ○ 27010 金属材料物性<br>○ 27020 無機材料および物性<br>○ 27030 複合材料および界面<br>○ 27040 構造材料および機能材料<br>○ 27050 材料加工および組織制御<br>○ 27060 金属生産および資源生産 |

### 大区分 F（0 / 17）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 28 化学工学およびその関連分野 | 0 / 4 | ○ 28010 移動現象および単位操作<br>○ 28020 反応工学およびプロセスシステム工学<br>○ 28030 触媒プロセスおよび資源化学プロセス<br>○ 28040 バイオ機能応用およびバイオプロセス工学 |
| 29 ナノマイクロ科学およびその関連分野 | 0 / 5 | ○ 29010 ナノ構造化学<br>○ 29020 ナノ構造物理<br>○ 29030 ナノ材料科学<br>○ 29040 ナノマイクロバイオサイエンス<br>○ 29050 ナノマイクロシステム |
| 30 応用物理物性およびその関連分野 | 0 / 3 | ○ 30010 応用物性<br>○ 30020 薄膜および表面界面物性<br>○ 30030 応用物理一般 |
| 31 応用物理工学およびその関連分野 | 0 / 2 | ○ 31010 結晶工学<br>○ 31020 光工学および光量子科学 |
| 90 人間医工学およびその関連分野 | 0 / 3 | ○ 90010 生体機械工学<br>○ 90020 生体材料工学<br>○ 90030 生体電気・情報工学 |

### 大区分 G（2 / 16）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 32 物理化学、機能物性化学、分析化学およびその関連分野 | 1 / 3 | ● 32010 基礎物理化学（D03）<br>○ 32020 機能物性化学<br>○ 32030 分析化学 |
| 33 有機化学、高分子化学およびその関連分野 | 1 / 3 | ● 33010 構造有機化学および物理有機化学（D03）<br>○ 33020 有機合成化学<br>○ 33030 高分子化学 |
| 34 基礎無機化学およびその関連分野 | 0 / 2 | ○ 34010 無機・錯体化学<br>○ 70060 無機物質および無機材料化学 |
| 35 生体分子化学およびその関連分野 | 0 / 3 | ○ 35010 生体化学<br>○ 35020 生物分子化学<br>○ 35030 ケミカルバイオロジー |
| 36 材料化学およびその関連分野 | 0 / 3 | ○ 70060 無機物質および無機材料化学<br>○ 36010 有機機能材料<br>○ 36020 高分子材料 |
| 37 エネルギー関連化学、環境化学およびその関連分野 | 0 / 2 | ○ 37010 エネルギー化学<br>○ 37020 グリーンサステイナブルケミストリーおよび環境化学 |

### 大区分 H（4 / 25）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 38 農芸化学およびその関連分野 | 2 / 6 | ● 38010 植物栄養学および土壌学（D12）<br>● 38020 応用微生物学（D30）<br>○ 38030 応用生物化学<br>○ 38040 生物有機化学<br>○ 38050 食品科学<br>○ 38060 応用分子細胞生物学 |
| 39 生産環境農学およびその関連分野 | 1 / 5 | ○ 39010 遺伝育種科学<br>○ 39020 作物生産科学<br>○ 39030 園芸科学<br>● 39040 植物保護科学（D12）<br>○ 39050 昆虫科学 |
| 40 森林圏科学、水圏応用科学、ランドスケープ科学およびその関連分野 | 1 / 5 | ○ 40010 森林科学<br>○ 40020 木質科学<br>○ 40030 水圏生産科学<br>○ 40040 水圏生命科学<br>● 40050 統合的ランドスケープ科学（D12） |
| 41 社会経済農学、農業工学およびその関連分野 | 0 / 5 | ○ 41010 食料農業経済<br>○ 41020 農業社会構造<br>○ 41030 地域環境工学および農村計画学<br>○ 41040 農業環境工学および農業情報工学<br>○ 41050 環境農学 |
| 42 獣医学、畜産学およびその関連分野 | 0 / 4 | ○ 42010 動物生産科学<br>○ 42020 獣医学<br>○ 42030 基礎獣医学および動物生命科学<br>○ 42040 実験動物学 |

### 大区分 I（8 / 19）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 43 分子レベルから細胞レベルの生物学およびその関連分野 | 1 / 6 | ○ 43010 分子生物学<br>○ 43020 構造生物化学<br>○ 43030 機能生物化学<br>○ 43040 生物物理学<br>○ 43050 ゲノム生物学<br>● 43060 システム生命情報科学（D03・D29） |
| 44 細胞レベルから個体レベルの生物学およびその関連分野 | 2 / 5 | ● 44010 細胞生物学（D09）<br>● 44020 発生生物学（kolliker-darwinsche-schopfungstheorie-ja・D04・D09）<br>○ 44030 植物分子および生理科学<br>○ 44040 形態および構造<br>○ 44050 動物生理化学、生理学および行動学 |
| 45 個体レベルから集団レベルの生物学と人類学およびその関連分野 | 3 / 6 | ● 45010 遺伝学（weismann-significance-of-sexual-reproduction-ja・D04）<br>● 45020 進化生物学（darwin-historical-sketch-ja・darwin-wallace-1858-ja・kolliker-darwinsche-schopfungstheorie-ja・naegeli-abstammungslehre-ja・weismann-significance-of-sexual-reproduction-ja・D03・D04・D09）<br>○ 45030 多様性生物学および分類学<br>● 45040 生態学および環境学（D04・D12・D30）<br>○ 45050 自然人類学<br>○ 45060 応用人類学 |
| 46 神経系の科学およびその関連分野 | 2 / 2 | ● 46010 分子・細胞レベルの神経科学（D09）<br>● 46020 システム・個体レベルの神経科学（D08・D09） |

### 大区分 J（7 / 17）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 47 薬学およびその関連分野 | 4 / 6 | ● 47010 薬系化学および創薬科学（D11）<br>● 47020 薬系分析および物理化学（D11）<br>○ 47030 薬系衛生および生物化学<br>○ 47040 薬理学<br>● 47050 環境および天然医薬資源学（D11）<br>● 47060 医療薬学（D11） |
| 48 生体の構造と機能およびその関連分野 | 1 / 4 | ○ 48010 解剖学<br>● 48020 生理学（D08・D09）<br>○ 48030 薬理学<br>○ 48040 基礎医化学および基礎遺伝学 |
| 49 病理病態学、感染・免疫学およびその関連分野 | 2 / 7 | ○ 49010 病態医化学および疾患遺伝学<br>○ 49020 人体病理学<br>○ 49030 実験病理学<br>○ 49040 寄生虫学<br>● 49050 細菌学（D11）<br>○ 49060 ウイルス学<br>● 49070 免疫学（D09・D10） |

### 大区分 K（7 / 51）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 50 腫瘍学およびその関連分野 | 0 / 2 | ○ 50010 腫瘍生物学<br>○ 50020 腫瘍診断および治療学 |
| 51 脳の活動と病態およびその関連分野 | 1 / 2 | ● 51010 脳科学一般（thinking-dispositions・via-vulnerability・D08）<br>○ 51020 病態脳科学 |
| 52 内科学一般およびその関連分野 | 1 / 5 | ○ 52010 内科学一般<br>○ 52020 神経内科学<br>● 52030 精神神経科学（anxiety・D10）<br>○ 52040 放射線科学<br>○ 52050 胎児医学および小児成育学 |
| 53 器官システム内科学およびその関連分野 | 0 / 5 | ○ 53010 消化器内科学<br>○ 53020 循環器内科学<br>○ 53030 呼吸器内科学<br>○ 53040 腎臓内科学<br>○ 53050 皮膚科学 |
| 54 生体情報内科学およびその関連分野 | 1 / 4 | ○ 54010 血液および腫瘍内科学<br>● 54020 膠原病およびアレルギー内科学（D10）<br>○ 54030 感染症内科学<br>○ 54040 代謝および内分泌学 |
| 55 恒常性維持器官の外科学およびその関連分野 | 1 / 6 | ○ 55010 外科学一般および小児外科学<br>○ 55020 消化器外科学<br>○ 55030 心臓血管外科学<br>○ 55040 呼吸器外科学<br>○ 55050 麻酔科学<br>● 55060 救急医学（D10） |
| 56 生体機能および感覚に関する外科学およびその関連分野 | 2 / 7 | ○ 56010 脳神経外科学<br>● 56020 整形外科学（D10）<br>○ 56030 泌尿器科学<br>○ 56040 産婦人科学<br>○ 56050 耳鼻咽喉科学<br>○ 56060 眼科学<br>● 56070 形成外科学（D10） |
| 57 口腔科学およびその関連分野 | 0 / 8 | ○ 57010 常態系口腔科学<br>○ 57020 病態系口腔科学<br>○ 57030 保存治療系歯学<br>○ 57040 口腔再生医学および歯科医用工学<br>○ 57050 補綴系歯学<br>○ 57060 外科系歯学<br>○ 57070 成長および発育系歯学<br>○ 57080 社会系歯学 |
| 58 社会医学、看護学およびその関連分野 | 0 / 8 | ○ 58010 医療管理学、医療系社会学および医療技術評価<br>○ 58020 衛生学および公衆衛生学分野：実験系を含む<br>○ 58030 衛生学および公衆衛生学分野：実験系を含まない<br>○ 58040 法医学<br>○ 58050 基礎看護学<br>○ 58060 臨床看護学<br>○ 58070 生涯発達看護学<br>○ 58080 高齢者看護学および地域看護学 |
| 59 リハビリテーション科学、スポーツ科学、体育、健康科学およびその関連分野 | 1 / 4 | ○ 59010 リハビリテーション科学および医療福祉<br>○ 59020 スポーツ科学<br>● 59030 体育および身体教育学（inseparable-abilities）<br>○ 59040 健康科学および栄養学 |

### 大区分 L（9 / 23）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 60 情報科学、情報工学およびその関連分野 | 4 / 10 | ● 60010 情報学基礎論（D07）<br>○ 60020 数理情報学<br>○ 60030 統計科学<br>○ 60040 計算機システム<br>● 60050 ソフトウェア（vibe-to-code・D07）<br>● 60060 情報ネットワーク（D07）<br>● 60070 情報セキュリティ（D07）<br>○ 60080 データベースおよびビッグデータ<br>○ 60090 高性能計算<br>○ 60100 計算科学 |
| 61 人間情報学およびその関連分野 | 5 / 8 | ● 80010 デザイン学（D22）<br>● 80030 認知科学（analogy・creative-thinking・empathy・fundamental-theorem-of-algebra-analogy・metacognition・reasoning・D08・D14）<br>○ 61010 知覚情報処理<br>● 61020 ヒューマンインタフェースおよびインタラクション（vibe-to-code）<br>● 61030 知能情報学（capacity-after-ai・reading-directions・D07）<br>● 61040 ソフトコンピューティング（D29）<br>○ 61050 知能ロボティクス<br>○ 61060 感性情報学 |
| 62 応用情報学およびその関連分野 | 0 / 5 | ○ 80020 人文社会情報学および図書館情報学<br>○ 62010 生命、健康および医療情報学<br>○ 62020 ウェブ情報学およびサービス情報学<br>○ 62030 学習支援システム<br>○ 62040 エンタテインメントおよびゲーム情報学 |

### 大区分 M（2 / 10）

| 中区分 | 触れている | 小区分 |
|---|---|---|
| 63 環境解析評価およびその関連分野 | 0 / 4 | ○ 63010 環境動態解析<br>○ 63020 放射線影響<br>○ 63030 化学物質影響<br>○ 63040 環境影響評価 |
| 64 環境保全対策およびその関連分野 | 2 / 6 | ○ 64010 環境負荷およびリスク評価管理<br>○ 64020 環境負荷低減技術および保全修復技術<br>○ 64030 環境材料およびリサイクル技術<br>● 64040 自然共生システム（D12）<br>○ 64050 循環型社会システム<br>● 64060 環境政策および環境配慮型社会（D20・D30） |

複数の中区分に現れる小区分は、それぞれの中区分の行に出す（大区分の数は、出た行で数える）。上の「数」の小区分は、重ねずに数えた。

