# パースの原典の対訳

C. S. パースの論文を、原文の段落と日本語訳を並べて読むための置き場。pjdhiro がパースを原典で読むために作る（違和感帳の一件、2026-11-16「c.s.パースを原典読みたい。自動スクリプトなどで、mdに日本語訳を作れないか検討して」）。

**訳は Claude（AI）によるもの。** pjdhiro も専門家も校閲していない。誤訳がありうる。論拠にするときは原文で読み、引用は原文で引く（`docs/rules/sources.md`）。

## 作り方

pjdhiro が 2026-11-17 に、案のページのボタンで選んだ形（`docs/rules/decisions.md` の「パースの原典の対訳」の行）。

1. 原文は Wikisource の文字起こし（パブリックドメインの誌面を、有志が頁の画像と並べて校正したもの）から取る。`scripts/wikisource-to-md.py` が、段落ごとに「段の番号・誌面の頁・原文・訳の空欄」を並べた骨を作る。誌面の頁が段の途中で変わるところは、原文の中に `[p.N]` と置く。
1. 原文の欄は、初出の誌面の走査と一字ずつ照らす。OCR の文字（Internet Archive の `_djvu.txt`）と語ごとに突き合わせて違う所を拾い、記号の付いた字（ö・æ など。OCR は落とす）と斜体は頁の画像で見る。Wikisource の文字起こしにも、行末で切れた語のつなぎ（physio- logical）や記号の落ち（Kronig）がある。直したものは、訳したファイルの頭に書く。
2. 訳は、一本ずつ、セッションの中で Claude が付ける。訳語は下の用語集でそろえ、鍵の語は訳のあとに原語を括弧で残す。訳だけでは伝わらない含みは、段の下に「訳注」として短く書く。
3. 照らすときは、段の頁から誌面の走査（各ファイルの頭の Internet Archive の URL）を開く。

既にある日本語訳（権利が生きているもの）は見ない・使わない。

## 置いたもの

| ファイル | 原典 | 状態 |
|---|---|---|
| `1893-evolutionary-love.md` | "Evolutionary Love", *The Monist* 3(2), January 1893, pp.176–200 | 全文の訳（2026-11-17）。原文の欄を初出の誌面と照らし、訳を Claude が原文と段ごとに照らして直した（2026-11-17・#164）。人の校閲はまだ |

次に訳す候補と、無料で読める写しは `../READING-ORDER-20261116.md` の表。

## 用語集

本をまたいで訳語をそろえるための表。決めたのは Claude。pjdhiro が違う訳語を選んだら、ここを直し、訳したファイルも直す。

### そろえ方

訳語は、この repo の読み物「パースの創造的な愛と、アブダクション」（`pd/reader/peirce-love-abduction.html`）と、調べの記録（`../SURVEY-reception-nuance-20261117.md`）の書き方にそろえる（2026-11-17・#164）。

- パースの造語（tychasm・anancasm・agapasm、tychasticism・anancasticism・agapasticism、tychism・anancism・agapism、synechism）は、原語の綴りのまま書く。読み物も記録も、そう書いている。カタカナ（アガパズム など）にすると、日本語の研究の訳語（伊藤 2006 の「アガペー主義」など）とも違う語がもう一つ増える。三つの様式は、パースが定義した段（1893 の ¶24）でだけ、定義の語句を添える（偶然の変異による進化＝tychasm、機械的な必然による進化＝anancasm、創造的な愛による進化＝agapasm）。読み物の要点と同じ。
- 形容詞（tychastic・anancastic・agapastic）は「偶然による」「必然による」「愛による」と訳し、段の初出に原語を括弧で残す。読み物の「偶然による発展」「必然による発展」「愛による発展」と同じ。
- Gospel of Greed は、読み物にそろえて「貪欲の福音」。greed も「貪欲」。

### 表

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
| idea | 考え | 心の中の「観念」の意味が強い段は「観念（idea）」 |
| continuity | 連続 | |
| greed / Gospel of Greed | 貪欲／貪欲の福音 | 読み物にそろえた |
| the Gospel of Christ | キリストの福音 | |
| cherish | いつくしむ | |
| fortuitous variation | 偶然の変異 | |
| mechanical necessity | 機械的な必然 | |
| clear / distinct（1878） | 明晰な／判明な | デカルトの「明晰・判明」に合わせる |
