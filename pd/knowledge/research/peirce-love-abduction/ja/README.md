# パースの原典の対訳

C. S. パースの論文を、原文の段落と日本語訳を並べて読むための置き場。pjdhiro がパースを原典で読むために作る（違和感帳の一件、2026-11-16「c.s.パースを原典読みたい。自動スクリプトなどで、mdに日本語訳を作れないか検討して」）。

**訳は Claude（AI）によるもの。** pjdhiro も専門家も校閲していない。誤訳がありうる。論拠にするときは原文で読み、引用は原文で引く（`docs/rules/sources.md`）。

## 作り方

pjdhiro が 2026-11-17 に、案のページのボタンで選んだ形（`docs/rules/decisions.md` の「パースの原典の対訳」の行）。

1. 原文は Wikisource の文字起こし（パブリックドメインの誌面を、有志が頁の画像と並べて校正したもの）から取る。`scripts/wikisource-to-md.py` が、段落ごとに「段の番号・誌面の頁・原文・訳の空欄」を並べた骨を作る。誌面の頁が段の途中で変わるところは、原文の中に `[p.N]` と置く。
2. 訳は、一本ずつ、セッションの中で Claude が付ける。訳語は下の用語集でそろえ、鍵の語は訳のあとに原語を括弧で残す。訳だけでは伝わらない含みは、段の下に「訳注」として短く書く。
3. 照らすときは、段の頁から誌面の走査（各ファイルの頭の Internet Archive の URL）を開く。

既にある日本語訳（権利が生きているもの）は見ない・使わない。

## 置いたもの

| ファイル | 原典 | 状態 |
|---|---|---|
| `1893-evolutionary-love.md` | "Evolutionary Love", *The Monist* 3(2), January 1893, pp.176–200 | 全文の訳（2026-11-17）。校閲していない |

次に訳す候補と、無料で読める写しは `../READING-ORDER-20261116.md` の表。

## 用語集

本をまたいで訳語をそろえるための表。決めたのは Claude。pjdhiro が違う訳語を選んだら、ここを直し、訳したファイルも直す。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| agapasm / agapastic | アガパズム／アガパズム的 | 愛（agape）による進化の様式。パースの造語 |
| tychasm / tychastic | ティカズム／ティカズム的 | 偶然（tyche）による進化の様式。パースの造語 |
| anancasm / anancastic | アナンカズム／アナンカズム的 | 必然（ananke）による進化の様式。パースの造語 |
| agapism | アガピズム | 愛を進化の働きとする説 |
| tychasticism / anancasticism / agapasticism | ティカズム説／アナンカズム説／アガパズム説 | 三つの様式のそれぞれを宇宙の進化の主な働きとする説（1893 の ¶24） |
| anancism | 必然主義（anancism） | |
| tychism | 偶然主義（tychism） | |
| synechism | 連続主義（synechism） | |
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
| Gospel of Greed | 強欲の福音 | |
| the Gospel of Christ | キリストの福音 | |
| cherish | いつくしむ | |
| fortuitous variation | 偶然の変異 | |
| mechanical necessity | 機械的な必然 | |
| clear / distinct（1878） | 明晰な／判明な | デカルトの「明晰・判明」に合わせる |
