# 論文の日本語訳（対訳）

論文・本の原文と、Claude が付けた日本語訳を、段ごとに並べて読むための置き場。著者を問わず、この repo の訳はここに置く。始まりはパースで、pjdhiro がパースを原典で読むために作った（違和感帳の一件、2026-11-16「c.s.パースを原典読みたい。自動スクリプトなどで、mdに日本語訳を作れないか検討して」）。

**訳は Claude（AI）によるもの。** pjdhiro も専門家も校閲していない。誤訳がありうる。論拠にするときは原文で読み、引用は原文で引く（`docs/rules/sources.md` §11）。

## 決まり

pjdhiro が 2026-11-18 に判断のページで選んだ形と、付箋の「どこに」の欄に書いた形（付箋帳 i20261118021606gqf「論文の日本語訳の保管先のルールを決めたい。」・`docs/rules/decisions.md` の「論文の日本語訳の置き場」の行）。規約の正本は `docs/rules/sources.md` §11。

1. **置き場**：この一か所に、平らに置く（話題や著者のディレクトリを作らない）。どの話題から引くかは、引く側のリンクで示す。
2. **名前**：対訳の正本は `<著者>-<年>-<題>.md`。著者は姓の小文字のローマ字、年は初出の年、題は原題の英語（英語以外は原題の綴りのローマ字）を小文字とハイフンで短くしたもの（`peirce-1893-evolutionary-love.md`）。読み物ページの正本は同じ所に `READER-<著者>-<題>-ja.md` で置き、ページは `pd/reader/<著者>-<題>-ja.html`。
3. **置いてよいもの**：原文が米国でも日本でもパブリックドメインのもの（米国で 1931 年より前の出版、かつ日本で著者が 1967 年以前に没）。英語以外（独・仏・羅ほか）は原語の本文から訳し、権利の残る訳や、権利の残る後の版の本文を元にしない（PD の再録を、迷う所を照らすのに使うのはよい）。既にある日本語訳（権利が生きているもの）は見ない・使わない。
4. **そうでないもの**（権利が残る原典、どちらか一方の国だけで PD のもの）：訳を git に入れない。本体の `.local-books/` に置き、非公開の pjdhiro-shelf に上げる。公開の場には題も書かない（`docs/rules/stance.md` 2-6 の行）。
5. **公開の扱い**：置いた対訳は、初めから公開ページにする（noindex を付けず、`sitemap.xml`・`llms.txt`・`llms-full.txt` に入れる）。ページの頭の「訳は AI によるもので、人の校閲はまだ」の帯と、JSON-LD の Draft は残す。
6. **範囲**：論文は全文を訳す。本は、引かれている章・頁だけを訳し、訳した範囲をファイルの頭に書く。本の全文は、pjdhiro が言ったら足す。
7. **ファイルの頭の欄**：原典の書誌／原文の出どころと権利／原文を誌面と照らした方法と直したところ／訳の作り方と「訳は Claude（AI）・人の校閲はまだ」／訳語の表の場所。見本は `peirce-1892-law-of-mind.md` の頭。

## 作り方

pjdhiro が 2026-11-17 に、案のページのボタンで選んだ形（`docs/rules/decisions.md` の「パースの原典の対訳」の行）。

1. 原文は Wikisource の文字起こし（パブリックドメインの誌面を、有志が頁の画像と並べて校正したもの）から取る。`scripts/wikisource-to-md.py` が、段落ごとに「段の番号・誌面の頁・原文・訳の空欄」を並べた骨を作る。誌面の頁が段の途中で変わるところは、原文の中に `[p.N]` と置く。
1. 原文の欄は、初出の誌面の走査と一字ずつ照らす。OCR の文字（Internet Archive の `_djvu.txt`）と語ごとに突き合わせて違う所を拾い、記号の付いた字（ö・æ など。OCR は落とす）と斜体は頁の画像で見る。Wikisource の文字起こしにも、行末で切れた語のつなぎ（physio- logical）や記号の落ち（Kronig）がある。直したものは、訳したファイルの頭に書く。
2. 訳は、一本ずつ、セッションの中で Claude が付ける。訳語は下の用語集でそろえ、鍵の語は訳のあとに原語を括弧で残す。訳だけでは伝わらない含みは、段の下に「訳注」として短く書く。
3. 照らすときは、段の頁から誌面の走査（各ファイルの頭の Internet Archive の URL）を開く。
4. 読み物ページは `pd/scripts/build-reader-lp.py` で作る。正本の `<!--JA-TEXT:<対訳の名前>-->` に対訳の本文が差し込まれ、章を切る段は同じ道具の `JA_CHAPTERS` に書く。

## 置いたもの

| ファイル | 原典 | 状態 |
|---|---|---|
| `peirce-1893-evolutionary-love.md` | Peirce, "Evolutionary Love", *The Monist* 3(2), January 1893, pp.176–200 | 全文の訳（2026-11-17）。原文の欄を初出の誌面と照らし、訳を Claude が原文と段ごとに照らして直した（2026-11-17・#164）。人の校閲はまだ。ページ `pd/reader/peirce-evolutionary-love-ja.html` |
| `peirce-1892-law-of-mind.md` | Peirce, "The Law of Mind", *The Monist* 2(4), July 1892, pp.533–559 | 全文の訳（2026-11-18・#173）。原文の欄を初出の誌面と照らした。訳は読む役四つに範囲を分けて案を出させ、Claude が原文と段ごとに照らして入れた。人の校閲はまだ。1893 の ¶5 がこの論文を挙げる。ページ `pd/reader/peirce-law-of-mind-ja.html` |
| `peirce-1892-mans-glassy-essence.md` | Peirce, "Man's Glassy Essence", *The Monist* 3(1), October 1892, pp.1–22 | 全文の訳（2026-11-18・#175）。原文の欄を初出の誌面と照らし、式を誌面から写した。訳は読む役二つに範囲を分けて案を出させ、照らす役に原文と照らさせ、Claude が直して入れた。人の校閲はまだ。1893 の ¶21・¶23 がこの論文を挙げる。ページ `pd/reader/peirce-glassy-essence-ja.html` |
| `carus-1892-onslaught-on-necessity.md` | Carus, "Mr. Charles S. Peirce's Onslaught on the Doctrine of Necessity", *The Monist* 2(4), July 1892, pp.560–582 | 全文の訳（2026-11-18・#175）。文字起こしが無いので、OCR から `scripts/ocr-to-md.py` で骨を作り、照らす役が全 23 頁を画像と照らして原文を作った。訳は読む役二つの案を照らす役が原文と照らし、Claude が直して入れた。人の校閲はまだ。1893 の ¶20 がこの論文の句を引く。ページ `pd/reader/carus-onslaught-on-necessity-ja.html` |
| `james-1863-substance-and-shadow.md` | Henry James（Sr.）, *Substance and Shadow*, Boston: Ticknor and Fields, 1863, 第 24 章 pp.439–443 | 本の抜きの訳（2026-11-18・#175）。p.439「Let my reader bear with me」の段から p.443 の脚注まで。文字起こしが無いので、OCR から段を取り、照らす役が頁の画像と照らして原文を作った。訳は読む役の案を照らす役が原文と照らし、Claude が直して入れた。人の校閲はまだ。1893 の ¶3 が p.442 の「創造的な愛」の文を引く。ページ `pd/reader/james-substance-and-shadow-ja.html` |
| `newcomb-1886-principles-of-political-economy.md` | Simon Newcomb, *Principles of Political Economy*, New York: Harper & Brothers, 1886, 第 V 編 §56・§57 と巻末の要約 pp.534–543 | 本の抜きの訳（2026-11-18・#175）。パースが「進化的な愛」¶7〜¶12 で引く句がみな入る範囲。文字起こしが無いので、OCR から段を取り、照らす役が全頁を画像と照らして原文を作った。訳は読む役の案を照らす役が原文と照らし、Claude が直して入れた。人の校閲はまだ。パースが引いた句はパースの対訳と同じ訳語にし、パースが落とした語・言い換えを訳注に書いた。ページ `pd/reader/newcomb-political-economy-ja.html` |
| `darwin-1861-historical-sketch.md` | Darwin, "An Historical Sketch of the Recent Progress of Opinion on the Origin of Species", *On the Origin of Species*, 3rd ed., 1861, pp.xiii–xix | 全文の訳（2026-11-18・#175）。第 3 版の形で、のちの版の書き足しは入っていない。OCR から段を取り、照らす役が全 7 頁を画像と照らして原文を作った。訳は読む役の案を照らす役が原文と照らし、Claude が直して入れた。人の校閲はまだ。1893 の ¶58 がこの概略を挙げる。ページ `pd/reader/darwin-historical-sketch-ja.html` |

次に訳す候補：パースは `../research/peirce-love-abduction/READING-ORDER-20261116.md` の表、1893「Evolutionary Love」が引く論文と本は Issue #175 の一覧。

## 用語集

著者ごとに節を分ける。著者をまたぐ語（love・sympathy など）は、先にある訳語にそろえる。本をまたいで訳語をそろえるための表。決めたのは Claude。pjdhiro が違う訳語を選んだら、ここを直し、訳したファイルも直す。

### ケーラス：表

ケーラスの文は、パースへの反論。パースと共通の語（chance・law・habit・mind・feeling）はパースの表にそろえる。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| necessity / the doctrine of necessity / necessitarianism | 必然／必然論／必然論 | 1892 |
| determinism / indeterminism | 決定論／非決定論 | |
| causation / causality / sequence | 因果／因果性／継起 | |
| transformation | 変換 | |
| regularity / uniformity | 規則性／一様性 | |
| settle（opinion） / maxim | 落ち着かせる／格率 | パースの "The Fixation of Belief" の語 |
| *a priori* / *a posteriori* | 原語のまま。初出に（先天的）（後天的） | カントの transcendental（先験的）と取り違えないため |
| world-conception | 世界観 | |

### ジェイムズ（父）：表

スウェーデンボリ派の神学の語。パースと共通の語（love・creative Love）はパースの表にそろえる。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| creature / creator / creation | 被造物／創造者／創造 | |
| creative Love / creative perfection | 創造的な愛／創造的な完全性 | creative は「創造的な」にそろえ、influx は「創造の流入」 |
| selfhood / identity / individuality | 自己性／同一性／個体性 | |
| Divine | 神の | |
| influx / inhabitation | 流入／内住 | スウェーデンボリの語 |
| natural / spiritual | 自然的な／霊的な | |
| Pantheism / Atheism / Revelation | 汎神論／無神論／啓示 | |
| culture / generation / regeneration | 陶冶／生まれ／再生 | regeneration は霊的に生まれ直すこと（新生） |

### ニューカム：表

パースが「進化的な愛」で引いた句は、パースの対訳の訳語にそろえる。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| the love of self / selfishness / egoism | 自己への愛／利己心／利己主義 | ニューカムは self-love と書かない |
| sympathy / charity / charitable effort | 共感／慈善／慈善の努力 | |
| philanthropist / philanthropic | 博愛家／博愛の | |
| political economy / economics / economist | 政治経済学／経済学／経済学者 | |
| capital / interest / rent / wages | 資本／利子／地代／賃金 | |
| abstinence | 節欲 | シーニアの語 |
| class / trades-union | 階級／労働組合 | |

### パース：そろえ方

訳語は、この repo の読み物「パースの創造的な愛と、アブダクション」（`pd/reader/peirce-love-abduction.html`）と、調べの記録（`../research/peirce-love-abduction/SURVEY-reception-nuance-20261117.md`）の書き方にそろえる（2026-11-17・#164）。

- パースの造語（tychasm・anancasm・agapasm、tychasticism・anancasticism・agapasticism、tychism・anancism・agapism、synechism）は、原語の綴りのまま書く。読み物も記録も、そう書いている。カタカナ（アガパズム など）にすると、日本語の研究の訳語（伊藤 2006 の「アガペー主義」など）とも違う語がもう一つ増える。三つの様式は、パースが定義した段（1893 の ¶24）でだけ、定義の語句を添える（偶然の変異による進化＝tychasm、機械的な必然による進化＝anancasm、創造的な愛による進化＝agapasm）。読み物の要点と同じ。
- 形容詞（tychastic・anancastic・agapastic）は「偶然による」「必然による」「愛による」と訳し、段の初出に原語を括弧で残す。読み物の「偶然による発展」「必然による発展」「愛による発展」と同じ。
- Gospel of Greed は、読み物にそろえて「貪欲の福音」。greed も「貪欲」。

### パース：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| tychasm / anancasm / agapasm | 原語のまま | 偶然（tyche）・必然（ananke）・愛（agape）による進化の様式。パースの造語。¶24 でだけ定義の語句を添える |
| tychastic / anancastic / agapastic | 偶然による／必然による／愛による | 段の初出に原語を括弧で残す |
| agapic | 愛による（agapic） | |
| tychasticism / anancasticism / agapasticism | 原語のまま | 三つの様式のそれぞれを宇宙の進化の主な働きとする説（1893 の ¶24） |
| tychism / anancism / agapism | 原語のまま | 絶対的な偶然・機械的な必然・愛の法則が宇宙で働いている、とだけ言う命題（1893 の ¶24）。日本語の研究では「偶然主義」「アガペー主義」（伊藤 2006） |
| synechism / synechistic | 原語のまま／連続の論の（synechistic） | 初出に「連続の論」を添える。日本語の研究では「連続主義」 |
| agape / eros | アガペー／エロース | |
| love | 愛 | |
| creative love | 創造的な愛 | |
| sympathy | 共感 | |
| evolution | 進化 | |
| growth | 成長 | |
| habit | 習慣 | |
| mind | 心 | |
| idea | 考え | 心の中の「観念」の意味が強い段は「観念（idea）」。1892「The Law of Mind」は、心の中の出来事としての意味が全体を通して強いので、全体を「観念」にした |
| general idea | 一般観念 | 1892 |
| feeling | 感じ | 1892。「感情」にしない |
| instant / moment | 時点／瞬間 | 1892 の ¶17 で、パースが instant を時間の点、moment を無限小の長さと定める |
| affect / affectible | 働きかける／働きかけを受けうる | 1892 |
| insistency | 迫る強さ | 1892 |
| continuum / infinitesimal | 連続体／無限小 | 1892 |
| personality / coördination | 人格／協調 | 1892。数学の coördinates は「座標」 |
| syllogism of transposed quantity / Fermatian inference | 量の転置の三段論法／フェルマー的推論 | 1892 |
| continuity | 連続 | |
| greed / Gospel of Greed | 貪欲／貪欲の福音 | 読み物にそろえた |
| the Gospel of Christ | キリストの福音 | |
| cherish | いつくしむ | |
| fortuitous variation | 偶然の変異 | |
| mechanical necessity | 機械的な必然 | |
| protoplasm / slime | 原形質／粘液 | 1892「Man's Glassy Essence」。life-slime は「生命の粘液」 |
| sub-molecule / dissociation | 下位分子／解離 | 1892「Man's Glassy Essence」 |
| habit-taking | 習慣をとること | |
| chance-spontaneity | 偶然の自発性 | |
| tychistic（idealism） | tychism に立つ（観念論） | 1892「Man's Glassy Essence」¶47。tychastic（偶然による）とは別の語 |
| aspect | 相 | 「心的な相と物理的な相」 |
| clear / distinct（1878） | 明晰な／判明な | デカルトの「明晰・判明」に合わせる |
