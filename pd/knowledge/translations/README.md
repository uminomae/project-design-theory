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
8. **pjdhiro の解釈・感想**：「進化的な愛」の対訳のページは、巻末の章「pjdhiro の解釈・感想」に、pjdhiro の感想・解釈・関心が出るたびに足して育てる。足し方は `docs/rules/decisions.md` の「進化的な愛」の「pjdhiro の解釈・感想」の行。ほかの対訳に同じ章を置くかは、pjdhiro に聞く。

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
| `darwin-1858-tendency-of-species.md` | Darwin & Wallace, "On the Tendency of Species to form Varieties; and on the Perpetuation of Varieties and Species by Natural Means of Selection", *Journal of the Proceedings of the Linnean Society: Zoology* 3 (1858), pp.45–62 | 全文の訳（2026-11-18・#175）。Wikisource の文字起こしから骨を作り、照らす役二つが誌面の全頁と照らした（落ちていた見出しと日付・斜体）。訳は読む役二つの案を照らす役が原文と照らし、Claude が直して入れた。人の校閲はまだ。1893 の ¶58 がこの発表を挙げる。ページ `pd/reader/darwin-wallace-1858-ja.html` |
| `herschel-1850-quetelet-on-probabilities.md` | [John Herschel], "Quetelet on Probabilities", *The Edinburgh Review* 92 (No.185), July 1850, pp.1–57 | 全文の訳（2026-11-18・#175）。無署名の書評で、ハーシェルの論集（1857）への再録で筆者が分かる。文字起こしが無いので、OCR から段を取り、読む役六つが範囲を分けて全 57 頁を画像と照らし、原文を起こして訳の案を出した。照らす役三つが段ごとに照らし、Claude がつないで訳語をそろえた。人の校閲はまだ。1893 の ¶20 が、ハーシェルがケトレーに広く注意を向けさせたと書く。ページ `pd/reader/herschel-quetelet-probabilities-ja.html` |
| `mandeville-1714-fable-of-the-bees.md` | Bernard Mandeville, *The Fable of the Bees: or, Private Vices, Publick Benefits*, London: J. Roberts, 1714, 冒頭の詩「The Grumbling Hive」pp.1–20 | 本の抜きの訳（2026-11-18・#175）。詩の全文 34 段。1705 年の小冊子の Wikisource の文字起こしを下敷きに、読む役が 1714 年の版の画像と一行ずつ照らして原文を起こし、訳の案を出した。照らす役が段ごとに照らし、Claude が直して入れた。1705 年との違いと巻頭の正誤表は訳注に書いた。人の校閲はまだ。1893 の ¶14 がこの本を挙げる。ページ `pd/reader/mandeville-grumbling-hive-ja.html` |
| `kolliker-1864-darwinsche-schopfungstheorie.md` | A. Kölliker, "Ueber die Darwin'sche Schöpfungstheorie", *Zeitschrift für wissenschaftliche Zoologie* 14 (1864), pp.174–186（独語） | 全文の訳（2026-11-18・#175）。原文は独語で、独語の本文から訳した。文字起こしが無いので、誌面の OCR を下敷きに、読む役が全 13 頁を画像と照らして原文を起こし、訳の案を出した。同じ年の別刷り（Engelmann）とも照らし、字の違いは訳注に書いた。照らす役が段ごとに照らし、Claude が直して入れた。人の校閲はまだ。1893 の ¶21 が、ケリカーを内的な必然による進化の説の例に挙げる。ページ `pd/reader/kolliker-darwinsche-schopfungstheorie-ja.html` |
| `helmholtz-1847-erhaltung-der-kraft.md` | H. Helmholtz, *Über die Erhaltung der Kraft*, Berlin: G. Reimer, 1847（独語・72 頁） | 全文の訳（2026-11-18・#175）。一冊の本だが一つの論文なので全文。原文は独語で、独語の本文から訳した。1847 年の版の写真複製（Bruxelles 1966）の走査の OCR を下敷きに、読む役六つが全 72 頁を画像と照らして原文と式を起こし、訳の案を出した。照らす役三つが段ごとに照らし、Claude がつないで入れた。読みにくい記号は 1889 年の再版で裏づけた。人の校閲はまだ。1893 の ¶20 が「1847 年のヘルムホルツによるエネルギー保存の崇高な発見」と呼ぶ。ページ `pd/reader/helmholtz-erhaltung-der-kraft-ja.html` |
| `clausius-1850-bewegende-kraft-der-warme.md` | R. Clausius, "Ueber die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen", *Annalen der Physik und Chemie* 79 (1850), pp.368–397, 500–524（独語・55 頁） | 全文の訳（2026-11-19・#175）。原文は独語で、独語の本文から訳した。誌面の走査の OCR を下敷きに、読む役六つが全 55 頁を画像と照らして原文と式を起こし、訳の案を出した。照らす役三つが段ごとに照らし、Claude がつないで入れた。文中の図 4 つは写さず訳注で形を書いた。人の校閲はまだ。1893 の ¶20・¶58 が「1850 年のクラウジウスとランキンの熱の力学的理論」と言う、クラウジウスの側の論文（パースは題を挙げず、Claude が当てた）。ページ `pd/reader/clausius-bewegende-kraft-der-warme-ja.html` |
| `rankine-1850-mechanical-action-of-heat.md` | W. J. Macquorn Rankine, "On the Mechanical Action of Heat, especially in Gases and Vapours", *Transactions of the Royal Society of Edinburgh* 20 (1853), pp.147–190（1850 年 2 月 4 日に読む・英語） | 全文の訳（2026-11-20・#175）。序論・第 I〜IV 節・付録と表二つ、全文 260 段・脚注 1。文字起こしが無いので、誌面の走査の OCR を下敷きに、読む役六つが全 44 頁を画像と照らして原文と式と表を起こし、訳の案を出した。照らす役三つが段ごとに照らし、Claude がつないで入れた。人の校閲はまだ。1893 の ¶20・¶58 が、1850 年のクラウジウスとランキンの熱の力学的理論に触れる（題は挙げていない）。ページ `pd/reader/rankine-mechanical-action-of-heat-ja.html` |
| `mansel-1858-limits-of-religious-thought.md` | Henry Longueville Mansel, *The Limits of Religious Thought Examined in Eight Lectures*, Oxford: J. Wright for John Murray, 1858, 序文 pp.v–x | 本の抜きの訳（2026-11-20・#175）。初めの序文の全文六段と脚注二つ。パースは題も頁も挙げず、マンセルがハミルトンの哲学を講義の土台にすると自ら述べる所として、Claude が当てた。文字起こしが無いので、OCR を下敷きに Claude が六頁の画像と照らして原文を起こし、訳を付けた。序文が引くハミルトンの二文は、ハミルトンの論集（1852）pp.12・15 で照らした。人の校閲はまだ。1893 の ¶20 が、マンセルのハミルトンの哲学の「無分別な弁護」に触れる。ページ `pd/reader/mansel-limits-of-religious-thought-ja.html` |
| `mill-1865-examination-of-hamilton.md` | John Stuart Mill, *An Examination of Sir William Hamilton's Philosophy*, London: Longman, Green, Longman, Roberts & Green, 1865, 第 VII 章 pp.88–105 | 本の抜きの訳（2026-11-21・#175）。第 VII 章「The Philosophy of the Conditioned, as applied by Mr. Mansel to the Limits of Religious Thought」の全文 25 段と脚注 16。パースは題も頁も挙げず、マンセルの弁護にミルが正面から答えた所として、Claude が当てた。文字起こしが無いので、OCR を下敷きに、読む役三つが十八頁を画像と照らして原文を起こし訳の案を付け、照らす役が段ごとに照らした。ミルが引くマンセルとハミルトンの文は照らしていない。人の校閲はまだ。1893 の ¶20 が「ミルの唯名論」に触れる。ページ `pd/reader/mill-examination-of-hamilton-ja.html` |
| `hamilton-1829-philosophy-of-the-unconditioned.md` | Sir William Hamilton, "Philosophy of the Unconditioned; in reference to Cousin's Doctrine of the Infinito-Absolute", *Edinburgh Review* 50（1829 年 10 月）, pp.194–221。原文は論集 *Discussions on Philosophy and Literature, Education and University Reform*（London, 1852）の再録 pp.1–37 | 論文の全文の訳（2026-11-21・#175）。全文 78 段と脚注 22。パースは題も頁も挙げず、マンセルの序文が名指し、ミルの批判が拠った元の論文として、Claude が当てた。ハミルトン自身が直して脚注を足した 1852 年の再録を原文にした（足した所は角括弧）。文字起こしが無いので、OCR を下敷きに、読む役六つが三十七頁を画像と照らして原文を起こし訳の案を付け、照らす役六つが段ごとに照らした。ハミルトンが引く文と脚注の書誌は照らしていない。人の校閲はまだ。1893 の ¶20 が「ウィリアム・ハミルトン卿に縛られた従僕たち」に触れる。ページ `pd/reader/hamilton-philosophy-of-the-unconditioned-ja.html` |
| `kronig-1856-theorie-der-gase.md` | A. Krönig, "Grundzüge einer Theorie der Gase", *Annalen der Physik und Chemie* 99 (1856), pp.315–322（独語・8 頁） | 全文の訳（2026-11-23・#175）。題と本文 25 段（脚注は無い）。パースは題を挙げず、1856 年のクレーニッヒの論文として Claude が当てた。原文は独語で、独語の本文から訳した。文字起こしが無いので、誌面の走査の OCR を下敷きに、読む役二つが全 8 頁を画像と照らして原文と式を起こし訳の案を付け、照らす役二つが段ごとに照らし、Claude がつないで入れた。誌面の誤植二つは訳注に書いた。人の校閲はまだ。1893 の ¶20 が「1856 年にクラウジウスとクレーニッヒの注目すべき論文」と書く。ページ `pd/reader/kronig-theorie-der-gase-ja.html` |
| `clausius-1857-art-der-bewegung.md` | R. Clausius, "Ueber die Art der Bewegung, welche wir Wärme nennen", *Annalen der Physik und Chemie* 100 (1857), pp.353–380（独語・28 頁） | 全文の訳（2026-11-24・#175）。題と本文 94 段・脚注 5。パースは題を挙げず、クラウジウスの気体の運動論の最初の論文として Claude が当てた（パースは「1856 年」と書くが、この論文は 1857 年 1 月の日付で、その年の号に載る）。原文は独語で、独語の本文から訳した。文字起こしが無いので、誌面の走査の OCR を下敷きに、読む役六つが全 28 頁を画像と照らして原文と式を起こし訳の案を付け、照らす役六つが段ごとに照らし、Claude がつないで入れた。誌面の誤植（節の番号の 10. の抜け・Wirklickeit）は訳注に書いた。人の校閲はまだ。1893 の ¶20 が「1856 年にクラウジウスとクレーニッヒの注目すべき論文」と書く。ページ `pd/reader/clausius-art-der-bewegung-ja.html` |
| `maxwell-1860-dynamical-theory-of-gases.md` | J. C. Maxwell, "Illustrations of the Dynamical Theory of Gases", *Philosophical Magazine*, 4th ser., 19 (1860), pp.19–32（Part I）・20 (1860), pp.21–37（Part II・III）（英語・31 頁） | 全文の訳（2026-11-24・#175）。第 I〜III 部、題と本文 137 段・脚注 1。1859 年 9 月にアバディーンの英国学術協会で読んだ研究の本論。一覧の範囲（20 巻 pp.21–37）に第 III 部と全体のまとめが入るので、第 III 部も訳した。文字起こしが無いので、誌面の走査の OCR を下敷きに、読む役七つが全 31 頁を画像と照らして原文と式を起こし訳の案を付け、照らす役七つが段ごとに照らし、Claude がつないで入れた。式の誤植と見たもの（(54) の係数・(64) の添字ほか）は直さずに訳注に書いた。人の校閲はまだ。1893 の ¶20 が「マクスウェルが英国学術協会で、この主題についての彼の研究のうち最初の、そして最も重要なものを読み上げていた」と書く。ページ `pd/reader/maxwell-dynamical-theory-of-gases-ja.html` |
| `buckle-1857-history-of-civilization-in-england.md` | Henry Thomas Buckle, *History of Civilization in England*, vol. 1, London: John W. Parker and Son, 1857, 第 1 章 pp.18–33 | 本の抜きの訳（2026-11-24・#175）。p.18「Rejecting, then, the metaphysical dogma of free will」の段から章の本文の終わりまで、17 段と脚注 19 本（注19〜注37。番号は誌面のまま）。パースは章も頁も挙げず、「この同じ考え」（偶然が秩序を生む）を用いた所として、殺人・自殺・結婚・宛名を書き忘れた手紙の統計を並べるこの所を Claude が当てた。文字起こしが無いので、初版の走査（IA `10278775bsb`・p = n − 27）の OCR を下敷きに、読む役四つが十六頁を画像と照らして起こし訳の案を付け、照らす役四つが段ごとに照らし、Claude がつないで入れた。誌面のまま置いたもの（注19 の For.・注37 の Médécine）は訳注に書いた。人の校閲はまだ。1893 の ¶20 が「1857 年には、バックルの『文明史』第一巻が、この同じ考えを用いたことによって、たいへんな評判を呼んでいた」と書く。ページ `pd/reader/buckle-history-of-civilization-ja.html` |
| `william-james-1892-psychology-briefer-course.md` | William James, *Psychology*（*Briefer Course*）, London: Macmillan, 1892, 第 12 章「The Self」 | 鍵の文の抜き 4 か所（2026-11-24・#189）。pp.176・216。走査の OCR から起こし、頁の柱で頁を決めた。人の校閲はまだ。ページ `pd/reader/william-james-self-ja.html`（読む順のリンク集。原文を訳の上に出す） |
| `william-james-1890-consciousness-of-self.md` | William James, *The Principles of Psychology* vol.1, New York: Holt, 1890, 第 10 章「The Consciousness of Self」pp.291–401 | 鍵の文の抜き 17 か所（2026-11-24・#189）。York 大学の写しから取り、トロント大の走査の柱の頁と突き合わせた。人の校閲はまだ。ページは同じ |
| `william-james-1890-stream-of-thought.md` | 同じ本の第 9 章「The Stream of Thought」pp.224–290 | 鍵の文の抜き 7 か所（2026-11-24・#189）。写しの誤り（if flows ほか）は走査の版に合わせた。人の校閲はまだ。ページは同じ |
| `william-james-1902-varieties-of-religious-experience.md` | William James, *The Varieties of Religious Experience*, New York, London: Longmans, Green, 1902 | 鍵の文の抜き 10 か所（2026-11-24・#189）。走査の OCR から起こし、p.515 は頁の画像で照らした。人の校閲はまだ。ページは同じ |
| `william-james-1904-does-consciousness-exist.md` | William James, "Does 'Consciousness' Exist?", *The Journal of Philosophy, Psychology and Scientific Methods* 1, 1904, pp.477–491 | 鍵の文の抜き 5 か所（2026-11-24・#189）。初出の誌面の走査（JSTOR が無料で出したもの）の OCR から起こし、York 大学の写しの誤り（I breath ほか）を誌面に合わせた。論文なので全文を訳す決まり（決まり 6）だが、まだ抜きだけ。全文の訳は残した仕事。人の校閲はまだ。ページは同じ |

次に訳す候補：パースは `../research/peirce-love-abduction/READING-ORDER-20261116.md` の表、1893「Evolutionary Love」が引く論文と本は Issue #175 の一覧。

## 用語集

著者ごとに節を分ける。著者をまたぐ語（love・sympathy など）は、先にある訳語にそろえる。本をまたいで訳語をそろえるための表。決めたのは Claude。pjdhiro が違う訳語を選んだら、ここを直し、訳したファイルも直す。

### ウィリアム・ジェームズ：表

父のヘンリー・ジェイムズ（Sr.）の表（「ジェイムズ（父）：表」）とは別。名前の表記も、父は「ジェイムズ」、ウィリアムは「ジェームズ」と書き分けている（どちらも、この repo で先に使っていた書き方）。ファイルの名前は、父の `james-` と取り違えないよう `william-james-` で始める。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| I / Me / me | I／Me／me | 原語のまま。英語の主格と目的格の私を、ジェームズが二つの面の名にしている |
| self / Self / the total self | 自己／自己／自己の全体 | |
| Empirical Self / empirical ego / pure Ego | 経験的自己／経験的自我／純粋自我 | |
| social self / spiritual self / Self of selves | 社会の自己／精神の自己／自己の中の自己 | |
| Ego | 自我 | |
| thought / Thought / thinker | 思考／思考／考える者 | |
| consciousness / personal consciousness | 意識／人の意識 | |
| stream of thought / of consciousness | 思考の流れ／意識の流れ | |
| fringe / psychic overtone / suffusion / margin | 縁／心の倍音／にじみ／縁 | margin（1902）も「縁」 |
| warmth and intimacy | 温かさと親しさ | |
| personal identity / sense of personal identity | 人格の同一性／人格の同一性の感じ | |
| appropriate / owner / proprietor | 自分のものにする（引き受ける）／持ち主／持ち主 | |
| pretensions / self-esteem / self-feeling | 求め／自尊／自分についての感情 | |
| mystical / ineffability / noetic quality / transiency / passivity | 神秘的な／言い表せないこと／知のような質／移ろいやすさ／受け身 | |
| over-belief | 上乗せの信仰 | |
| entity / function / knowing | 実体／はたらき／知ること | 1904 |
| pure experience | 純粋経験 | 1904 |

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

### ダーウィン・ウォレス：表

「歴史的概略」（1861）と 1858 の論文で、訳語をそろえる。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| natural selection / selection | 自然選択／選択 | |
| species / variety / variation / modification | 種／変種／変異／変化 | |
| race | 品種（飼育栽培の race）・人種（race of man）・系統（そのほか） | 1858 の ¶4 の "Varieties, Races, and Species" は系統 |
| organisation / organization | 体制 | |
| struggle for life / struggle for existence | 生存のための闘争 | どちらの語かは括弧で添える |
| descent | 由来 | |
| economy（生き物の） | 生活の仕組み | economy of nature は自然の経済 |
| fecundity / fertility | 繁殖力 | |

### パース：そろえ方

訳語は、この repo の読み物「パースの創造的な愛と、アブダクション」（`pd/reader/peirce-love-abduction.html`）と、調べの記録（`../research/peirce-love-abduction/SURVEY-reception-nuance-20261117.md`）の書き方にそろえる（2026-11-17・#164）。

- パースの造語（tychasm・anancasm・agapasm、tychasticism・anancasticism・agapasticism、tychism・anancism・agapism、synechism）は、原語の綴りのまま書く。読み物も記録も、そう書いている。カタカナ（アガパズム など）にすると、日本語の研究の訳語（伊藤 2006 の「アガペー主義」など）とも違う語がもう一つ増える。三つの様式は、パースが定義した段（1893 の ¶24）でだけ、定義の語句を添える（偶然の変異による進化＝tychasm、機械的な必然による進化＝anancasm、創造的な愛による進化＝agapasm）。読み物の要点と同じ。
- 形容詞（tychastic・anancastic・agapastic）は「偶然による」「必然による」「愛による」と訳し、段の初出に原語を括弧で残す。読み物の「偶然による発展」「必然による発展」「愛による発展」と同じ。
- Gospel of Greed は、読み物にそろえて「貪欲の福音」。greed も「貪欲」。

### ハーシェル：表

確率と統計の語。パースと共通の語（chance・law）はパースの表にそろえる。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| probability / chance | 確率／偶然 | chances が「見込み」の意のときは「見込み」 |
| law / law of error / facility | 法則／誤差の法則／起きやすさ | 人の作る法は「法律」 |
| mean / average | 平均 | 区別を論じる段だけ原語を添える |
| error / probable error | 誤差／確率誤差 | 思い違いの意の error は「誤り」 |
| deviation / bias | 偏り／偏向 | |
| statistics / statist | 統計／統計家 | |
| the average man（l'homme moyen） | 平均人 | |
| moral and political sciences | 道徳科学と政治科学 | パースの対訳にそろえた |
| efficient / formal / final cause | 作用因／形相因／目的因 | |
| induction / uniformity | 帰納／一様性 | |

### マンデヴィル：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| Private Vices, Publick Benefits | 私的な悪徳は公共の利益 | パースの対訳（1893 の ¶14）にそろえた |
| Vice / Vertue | 悪徳／美徳 | |
| Luxury / Pride / Avarice / Prodigality | 奢侈／自尊心／強欲／浪費 | |
| Honesty / Fraud / Knaves | 正直／不正／ならず者 | |
| Hive / Grumbling | 巣／ぶつぶつ言う | 題は「ぶつぶつ言う蜂の巣、または正直になったならず者たち」 |
| Jove / Merc'ry | ジュピター／メルクリウス | |

### ケリカー：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| Schöpfungstheorie / Schöpfung | 創造説／創造 | 題は「ダーウィンの創造説について」 |
| heterogene Zeugung | 異種発生 | 英語の heterogenesis に当たる |
| Generationswechsel / Amme | 世代交代／乳母 | |
| natürliche Züchtung / Züchtung | 自然選択／育種 | Züchtung は人の育種の意味のときに「育種」 |
| Varietät / Variation | 変種／変異 | |
| Species / Art | 種 | どちらも「種」 |
| Entwicklungsplan / Entwicklungsgesetz | 発展の計画／発展の法則 | 卵や胚について言う Entwicklung は「発生」 |
| Kampf um das Dasein | 生存闘争 | |
| Zeugung / Fortpflanzung | 生殖／繁殖 | |
| Generatio spontanea | 自然発生 | |

### ヘルムホルツ：表

ヘルムホルツの Kraft は、今の「力」と「エネルギー」の両方にまたがる。訳し分けずに「力」とした（題も「力の保存について」）。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| Erhaltung der Kraft / Princip | 力の保存／原理 | |
| lebendige Kraft | 活力 | 今の運動エネルギーに当たる |
| Spannkraft | 緊張力 | 今の位置エネルギーに当たる。引っぱる力の「張力」と分ける |
| Intensität (der Kraft) / Kraftintensität | （力の）強さ | |
| Arbeit / Arbeitskraft / Arbeitsgrösse | 仕事／仕事をする力／仕事の量 | |
| Centralkraft / anziehend / abstossend | 中心力／引き合う／押し返す | |
| materieller Punct / Massenpunct / Masse / Materie | 質点／質点／質量／物質 | |
| Geschwindigkeit / Naturkörper / Naturerscheinung / Vorgang | 速度／自然物体／自然現象／過程 | |
| Wärme / Wärmestoff / Wärmeeinheit / Kraftäquivalent | 熱／熱素／熱の単位／力の当量 | |
| Aggregatzustand | 集合状態 | |
| Spannung（電気の） | 張り | 今の電位差・電圧に当たる。Spannkraft の「緊張力」と分ける |
| Vertheilung（静電・磁気の） | 分布 | 過程の意（今の静電誘導・磁気誘導）も「分布」。Induction は「誘導」 |
| Potential | ポテンシャル | |
| Ableitungsgrösse | 導きの大きさ | 今の静電容量に当たる |
| Kette / galvanische Kette | 電池／ガルバーニの電池 | 閉じた回路の意味がはっきりしている所だけ「回路」 |
| Element / Batterie | 素電池／バッテリー | Batterie はライデン瓶などの組 |
| Schliessung / Schliessungsdrath | 閉じる導線 | |
| electromotorische Kraft / Widerstand / Uebergangswiderstand | 起電力／抵抗／移行抵抗 | |
| Polarisation / Zersetzung / Electrolyse | 分極／分解／電気分解 | |
| Induction / Extracurrent | 誘導／余剰電流 | |
| perpetuum mobile | 永久機関 | |

### クラウジウス：表

ヘルムホルツの表と重なる語（Kraft＝力、lebendige Kraft＝活力、Wärmestoff＝熱素）はそろえた。ただし蒸気の Spannkraft は、ヘルムホルツの Spannkraft（緊張力・今の位置エネルギー）と意味が違い、今の圧力に当たるので「張力」とした。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| bewegende Kraft der Wärme | 熱の動力 | カルノーの puissance motrice du feu に当たる |
| Wärmelehre / Wärmetheorie | 熱学／熱の理論 | |
| Grundsatz / Princip / Grundprincip | 原則／原理／根本原理 | 第一の原則＝熱と仕事の等価、第二の原則＝カルノーの原則を直したもの |
| Aequivalenz von Wärme und Arbeit / Aequivalent | 熱と仕事の等価／当量 | |
| Wärmeaequivalent / Aequivalent der Arbeit für die Wärmeeinheit | 熱の当量／熱の単位に対する仕事の当量 | 式の <i>A</i> と 1/<i>A</i> |
| Arbeit / äussere Arbeit / innere Arbeit | 仕事／外部の仕事／内部の仕事 | |
| Verbrauch / verbrauchen / erzeugen | 消費／消費する／生み出す | 「費やす」にしない |
| Uebergang (der Wärme) / Uebertragung / Vertheilung | （熱の）移行／移すこと／配分 | |
| Wärmemenge / Wärmeeinheit / Gesammtwärme | 熱量／熱の単位／全熱 | |
| freie Wärme / latente Wärme / specifische Wärme | 自由な熱／潜熱／比熱 | |
| Spannkraft / Spannung / Expansivkraft（蒸気・気体の） | 張力／張力／膨張力 | 今の圧力に当たる |
| Dampf im Maximum der Dichte | 密度が最大の蒸気 | 今の飽和蒸気 |
| permanentes Gas / Nebenannahme | 永久気体／副次の仮定 | |
| das M. und G. Gesetz | マリオットとゲイ＝リュサックの法則 | 誌面の略は訳で開く |
| Gefrierpunkt / gleichseitige Hyperbel | 氷点／直角双曲線 | |
| Gewichtseinheit / Volumeneinheit | 重さの単位／体積の単位 | |
| Gränzwerth / Differentialquotient | 極限値／微分商 | |
| Kessel / Condensator / Heerd | ボイラー／復水器／炉 | |

### クラウジウス 1857：表

「熱と呼ぶ運動の種類について」（1857）の訳語。上のクラウジウス 1850 の表と、クレーニッヒの表と重なる語（lebendige Kraft＝活力、Wärmemenge＝熱量、specifische Wärme＝比熱、Expansivkraft＝膨張力、Atom＝原子、Stoss＝衝突、Geschwindigkeit＝速さ）はそろえた。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| Art der Bewegung | 運動の種類 | 題 |
| Molecül / Gasmolecül / Massenatom | 分子／気体の分子／質量原子 | クラウジウスは「分子」と言い、分子が原子からなると見る |
| Bestandtheil / Bewegungen der Bestandtheile | 構成部分／構成部分の運動 | 分子の中の原子などの運動 |
| fortschreitende Bewegung | 進む運動 | 今の並進運動 |
| drehende (rotirende) Bewegung / Schwingung | 回転の運動／振動 | |
| vibriren / vibrirende Bewegung | 震える／震える運動 | 固体の運動。Schwingung（振動）と訳し分けた |
| permanentes Gas / vollkommenes Gas / ideell | 永久気体／完全な気体／理想的な | |
| einfache Gase / zusammengesetzte Gase | 単体の気体／化合物の気体 | |
| Aggregatzustand | 集まりの状態 | 固体・液体・気体の別 |
| Verdampfung / Niederschlag / condensiren | 蒸発／凝結／凝縮する | |
| Molecularkraft / Wirkungssphäre | 分子の力／作用の及ぶ範囲 | |
| mittlere Entfernung / mittlere Geschwindigkeit | 平均の距離／平均の速さ | 平均の速さは、活力が同じになるように取る（今の二乗平均平方根の速さ） |
| Dichte / Dichtigkeit | 密度 | |
| wahre specifische Wärme | 真の比熱 | ランキンの呼び名 |
| bei constantem Volumen / Drucke | 体積一定で／圧力一定で | |
| Wärmeerzeugung / Wärmeverbrauch | 熱の発生／熱の消費 | |
| innere / äussere Arbeit | 内部の仕事／外部の仕事 | |

### バックル：表

『イギリス文明史』第 1 巻（1857）の第 1 章の訳語。統計の語はハーシェルの表（「ケトレーの確率論」）にそろえた。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| free will / predestination | 自由意志／予定 | the theological dogma of predestined events は「予定された出来事という神学の教義」 |
| antecedents / consequent | 先行するもの／帰結 | |
| uniformity / regularity / law | 一様性／規則性／法則 | undeviating regularity は「それることのない規則性」、uniformity of sequence は「継起の一様性」 |
| statistics / statistician / moral statistics | 統計／統計家／道徳の統計 | ケトレーの書名 *Statistique Morale* は『道徳統計』 |
| average | 平均 | |
| crime / offence | 犯罪／罪 | |
| virtue / vice | 徳／悪徳 | |
| volition | 意志のはたらき | |
| philosophic history | 哲学的な歴史 | |
| physical laws / physical science(s) | 物理的な法則／自然科学 | |
| moral world / material world | 道徳の世界／物質の世界 | |
| perturbation / disturbance | 摂動／乱れ | |
| moralists / metaphysicians | 道徳家／形而上学者 | |

### マクスウェル：表

「気体の動力学的理論の例解」（1860）の訳語。英語の論文なので、独語のクラウジウス・クレーニッヒの表とは原語が違う。重なる量（vis viva＝活力、specific heat＝比熱、diffusion＝拡散）はそろえた。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| dynamical theory of gases / illustrations | 気体の動力学的理論／例解 | 題は「気体の動力学的理論の例解」 |
| particle / sphere / perfectly elastic | 粒子／球／完全に弾性のある | |
| collision / impact / line of impact | 衝突／衝突／衝突の線 | |
| velocity / mean velocity / average | 速度／平均の速度／平均の | |
| vis viva | 活力 | 質量と速度の二乗の積。今の運動エネルギーの二倍 |
| motion of translation / motion in mass / motion of agitation | 並進の運動／全体としての運動／揺動の運動 | |
| length of path / mean length of path / mean path | 道のりの長さ／道のりの平均の長さ／平均の道のり | 今の平均自由行程に当たる |
| probability / equally probable | 確率／同じく確からしい | |
| method of least squares | 最小二乗法 | 命題 IV のあとの段 |
| system of particles / centre of gravity | 粒子の系／重心 | |
| internal friction / coefficient of friction | 内部摩擦／摩擦の係数 | 今の粘性・粘性係数に当たる |
| diffusion / porous plug | 拡散／多孔質の栓 | |
| conduction of heat / conductivity / thermal resistance | 熱の伝導／伝導率／熱の抵抗 | |
| stratum / element of volume | 層／体積の要素 | |
| rotation / axis | 回転／軸 | |
| Prop.（Proposition） | 命題 | 命題 I〜XXIII |
| olefiant gas / carbonic acid / carbonic oxide / deutoxide of nitrogen | 油生気体／炭酸／一酸化炭素／一酸化窒素 | 当時の呼び名。油生気体は今のエチレン、炭酸は今の二酸化炭素 |

### クレーニッヒ：表

ヘルムホルツ・クラウジウスの表と重なる語（lebendige Kraft＝活力、Wärmemenge＝熱量、specifische Wärme＝比熱、mechanische Wärmetheorie＝熱の力学的理論）はそろえた。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| Grundzüge | 大要 | 題 |
| Atom / Gasatom / Molecül | 原子／気体の原子／分子 | クレーニッヒは「分子」でなく「原子」と言う |
| vollkommen (absolut) elastisch | 完全に弾性のある・完全に弾性的 | |
| Stoss / Zusammenstoss / zurückprallen | 衝突／衝突・ぶつかり合い／はね返る | |
| Geschwindigkeit / verticale Componente | 速さ／鉛直の成分 | |
| oscilliren | 振動する／往復する | つり合いの位置のまわり（¶5）は振動、壁のあいだ（¶16・¶21）は往復 |
| afficiren | 影響し合う・作用を及ぼす | |
| Bahn | 道筋 | |
| Wahrscheinlichkeitsrechnung | 確率の計算 | |
| Druck / Gesammtdruck | 圧力／圧力の全体 | |
| absoluter Nullpunkt | 絶対零度 | |
| specifisches Gewicht / Gewicht / Schwere | 比重／重さ／重力 | |
| Scheidewand / Oeffnung / Stempel | 仕切り壁／開口／ピストン | |
| diffundiren | 拡散する | |

### ランキン：表

クラウジウスの表と重なる語（潜熱・全熱・比熱・活力）はそろえた。

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| mechanical action of heat | 熱の力学的作用 | |
| molecular vortices / atmosphere (of the atom) / nucleus | 分子渦／（原子の）大気／核 | |
| vis viva | 活力 | 今の運動エネルギーに当たる |
| real specific heat / apparent specific heat | 真の比熱／見かけの比熱 | 真の比熱の記号は黒体文字の k（𝔨） |
| latent heat / total heat / constituent heat | 潜熱／全熱／構成熱 | |
| expansive power / mechanical power | 膨張の動力／力学的な動力 | |
| superficial-atomic elasticity | 原子表面の弾性 | |
| absolute zero of heat / of temperature | 熱の絶対零度／温度の絶対零度 | |
| perfect gas / imperfect gas / permanent gases | 完全気体／不完全気体／永久気体 | |
| unity of weight / of volume / of pressure | 重さの単位／体積の単位／圧力の単位 | |
| hyperbolic logarithm | 双曲線対数 | 今の自然対数 |
| partial / total differential coefficient | 偏微分係数／全微分係数 | |
| depth of fall | 落下の高さ | |
| useful effect / gross effect / counter-pressure / clearance / ratio of expansion | 有用な効果／効果の総量／背圧／すき間／膨張比 | 蒸気機関の語 |

### マンセル：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| religious thought | 宗教的思考 | 題の語。マンセルは、意識のうちにはっきり捉えられ、言葉で伝えられるもの全部を指す、と断る |
| the Unconditioned / the Conditioned | 無条件者／条件づけられたもの | ハミルトンの語 |
| incognisable / inconceivable | 認識できない／考えることもできない | |
| philosophical Theology | 哲学的な神学 | |
| Revelation | 啓示 | |
| faculty | 能力 | |
| Rationalism | 合理主義 | |
| Christian Evidences | キリスト教の証拠 | 神学の一分野の呼び名 |

### ミル：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| the Philosophy of the Conditioned | 条件づけられたものの哲学 | ハミルトンの哲学の呼び名 |
| the Unconditioned / the Conditioned | 無条件者／条件づけられたもの | マンセルの表と同じ |
| the Absolute / the Infinite | 絶対者／無限者 | 形容詞は 絶対的な／無限な |
| relativity of human knowledge | 人間の知識の相対性 | |
| Being / Absolute Being | 存在者／絶対的な存在者 | |
| the Deity | 神性 | |
| goodness / good | 善さ／善い | |
| Noumenon / Phænomenon | ヌーメノン／現象 | 誌面の æ はそのまま |
| ignoratio elenchi | 論点のすりかえ | 原語を残す |
| Discussions / Lectures | 『論集』／『講義』 | ハミルトンの本 |
| farrago | 寄せ集め | |
| Rationalism / Rationalists | 合理主義／合理主義者 | |

### ハミルトン：表

| 原語 | 訳語 | 覚え書き |
|---|---|---|
| the Unconditioned / the Conditioned | 無条件者／条件づけられたもの | マンセル・ミルの表と同じ |
| the Absolute / the Infinite / the Finite | 絶対者／無限者／有限者 | クザンの語を並べた所は 無限なもの・有限なもの |
| the Infinito-Absolute / absoluto-infinite | 無限・絶対者／絶対・無限者 | 語順のとおりに訳し分けた |
| the unconditionally unlimited / the unconditionally limited | 無条件に限られないもの／無条件に限られたもの | |
| inconditionates | 無条件なもの | 無条件者と分ける |
| the Philosophy of the Conditioned | 条件づけられたものの哲学 | |
| inconceivable / incognisable | 考えることのできない／認識できない | |
| construe to the mind | 精神に組み立てて示す | |
| intellectual intuition / intellectual vision | 知的直観／知的な見ること | |
| Reason / Understanding | 理性／悟性 | Vernunft／Verstand |
| Rationalism / Intellectualism | 合理論／知性論 | |
| the Deity / the Divinity | 神性／神的なもの | |
| learned ignorance | 学識ある無知 | |
| indifference | 無差別 | シェリングの語 |
| correality | 共に実在すること | |

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
