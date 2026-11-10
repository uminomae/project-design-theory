# 文学・文芸学：記録から外した作業の節

`cs/evidence/evidence-D19-literary-studies.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D19-literary-studies.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | 日本語版 | 英語版 | プレゼン版 | 退避版 |
|---|---|---|---|---|
| 判定の数 | 強い 3・部分的 5・条件付き 2（75〜86 行。結論 249〜253 行。Colophon 265 行も同じ） | 強い 9・条件付き 1（49 行・55〜64 行・186 行） | 冒頭は「部分的な対応 1件、条件付きの対応 1件」（23 行）。表は確定に近い 3・有力 5・条件付き 2（45〜47 行） | Accept 9・CA 1（26〜330 行の triage） |
| 「強い」の論 | Shklovsky・Todorov・Bourdieu | Todorov を除く 9 | 確定に近い：Shklovsky・Jauss/Iser・Bakhtin | Todorov を除く 9 |
| Todorov | 強い対応（79 行） | Conditional。原典で確かめていないため（59 行・128 行） | 条件付き。原典照合が未完了のため（47 行・94 行） | CA（158 行） |

判定の数は未判定（版の食い違い）。英語版は退避版の triage（Accept 9・CA 1）をそのまま写し、日本語版は phase5〜7 の後の温度帯で数え直していて、プレゼン版はさらに別の組み合わせです。どの版も原典の照合から数を出した跡はありません。Todorov を条件付きにした理由（原典で五つを確かめていない）は、1971 年の論文の p.39 で答えが出ました。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 206〜208 行 §6「循環駆動——束→場回帰の反復」・en 156〜160 行・en 192 行「independently confirmed」 | 付け足し | 高 | phase7 11〜15 行のパターン1 の題と文をほぼそのまま写した。原典で確かめた範囲では、Shklovsky に技法の規範化と再異化の周期は無く（リズムの条件文 p.13 だけ）、Todorov の「cycle」は一つの話の中の均衡の回復（p.39）。Frye の 1951 年の論文は四つの相を周期と書くが（pp.15–16。写しで読んだ）、Bloom は読めていない。「independently」は比べた跡の無い言い切り |
| ja 210〜212 行 §6「多層同型性」・ja 255 行「5つのスケールで類似した構造パターンが反復する…確認されました」 | 言い過ぎ | 中 | phase7 17〜21 行のパターン2 の写し。原典はそれぞれ別の単位（一つの話の筋・一つの語の知覚・一つの発話・一時代の文学の場）で別の兼ね合いを書く |
| ja 214〜216 行 §6「逸脱-規範の弁証法」・ja 22 行・ja 255 行「領域全体を貫いている」・en 19 行・en 164〜166 行 | 付け足し | 中 | 退避版 21 行の評価レンズ 2 と 388 行のレンズ②、phase7 23〜27 行のパターン3 から来ている。読んだ原典に「弁証法」の語は無い。原典が書く対は、自動の知覚と技法（Shklovsky）、名のある者と新しく入る者（Bourdieu）、均衡とその崩れ（Todorov）で、「逸脱」と「規範」の二つに揃えたのは調べた跡の分け方 |
| ja 218〜220 行 §6「プロセス記述型と分析枠組み型の区別」「構造的に必然と考えられます」 | 言い過ぎ | 中 | phase7 29〜33 行のパターン4 の写し。「必然」は型 E。Genette が道具立てを書く論であることは原典と合う（p.27） |
| 報告の全体 衝突や至らない形を書いていない（phase7 72〜74 行は「『創造の失敗』の理論の不在」を盲点に挙げた） | 抜け | 高 | 本文を読めた原典は至らない形を書いていた：悲劇で終わる半周期（Todorov p.39）、不運に終わる「the right ending」（Aristotle p.47）、主人公の破滅と対立する力の調整（Freytag p.138）、習慣が生を食い尽くす・慣習になった乱れは効かない（Shklovsky pp.9・13）、試しに応えない主人公・偽の主人公（Propp pp.42・60。写しで読んだ）、退けられる新しい作品・異議を閉じる正統・看板への閉じ込め（Bourdieu pp.157–158。写しで読んだ） |
| ja 30 行「各理論について一次文献の特定箇所を参照し、理論の内在的構造を確認しました」 | 言い過ぎ | 中 | 退避版の flags は「lit:概要」で、本文を読んだ跡は無い。ja 46〜49 行と 71 行は自ら「原典の精読による検証を主張するものではありません」と書いていて、30 行と食い違う |
| ja 249 行「3件…で5段階モデルとの強い構造対応が確認されました」・en 186 行「nine showed strong structural correspondence」 | 言い過ぎ | 高 | 照合の跡が無い。版ごとに数が違う |
| en 152 行・en 66 行・en 190 行付近「all ten theories implement Edge in different forms」 | 付け足し | 中 | 退避版 365〜377 行の「縁の実装」表と「縁の型の多様性：10タイプ」から来ている。型の名（機能型・誤読型など）は原典に無い（型 H） |
| ja 257 行「メタ対応」・en 178 行「all creation is narrative」 | 未判定 | 低 | 退避版の [学び]（EV-LT-005）と phase7 90 行の保持論点。原典の主張ではない |

### テンプレート由来の表示

ja 3〜6 行「立ち位置明示」、44〜49 行「方法論的開示（S60）」、86 行「温度帯の分布」、88〜90 行「安全弁」、246〜247 行「結びの温度開示」、259〜269 行「Colophon」。30 行・38 行の「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6」「Phase 7」と、104 行の「Phase 6の構造再読では」も LLM の記号です。48〜49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所」と書き、著者を pjdhiro としていて、文責の書き方（writing §1-1・§1-8）と合いません。英語版 43 行の読者への呼びかけ（不快さを抱えたまま進むか、ここで止まるか）と、35 行の縁の定義に足された「Whether a process can remain at this stage bears on the quality of creation」は、ほかの分野の英語版にもある文で、型 F の表示とテンプレートの付け足しです。各論の「事実として」「読み取りとして」「解釈として」の札は、規約への説明を読者に向ける形に近いです。30 領域に共通の見込みで、テンプレートで直します（README 段 1）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| §6 の四つの横断パターン（題と順） | phase7 11〜33 行の §A パターン1〜4 |
| Todorov の「同じだが同一ではない」 | DR 79 行 → 退避版 164 行の [P] の主張 → phase6 80 行。DR は Todorov (1969) を参考文献に挙げる（DR 105 行） |
| Todorov を条件付きとした英語版・プレゼン版の理由 | 退避版 158・181 行の CA（「5要素列挙の一次確認が未完了」）。原典を開かずに残った |
| Shklovsky の「再慣習化→再異化」と束→場回帰 | 退避版 138 行 → phase7 13 行 |
| 「渦の時間性」「遅延」 | phase6 66 行と 186〜190 行の仮説1 [SPECULATIVE] → phase7 107 行 |
| Barthes の「閉じた束／開いた束」 | phase6 196 行の仮説 → phase7 108 行 [SPECULATIVE] |
| 「逸脱-規範の弁証法」 | 退避版 21 行・388 行（評価レンズ）→ phase7 23〜27 行 |
| 英語版の「all ten theories implement Edge in different forms」 | 退避版 365〜377 行 |
| 版ごとの件数 | 英語版は退避版の triage、日本語版は phase5〜7 の後の温度帯、プレゼン版は別に生成 |
| 至らない形を書いていないこと | phase7 72〜74 行の盲点2（「失敗した創造」の理論を持たない）。原典を開かずに書かれた |
| 型 F の表示 | 報告のテンプレート |

退避版と調べた跡には、この分野では隣の概念の語そのものは見つかりませんでした。「保持論点」の語は phase6 204 行・phase7 82 行と退避版 395 行にあり、報告の本文には「保留」（プレゼン版 94 行「判断を保留しています」）として出るだけで、理論の当てはめには入っていません。英語版の Propp の「Lack」（74 行）は、原典の機能の名です。

### 文体（書き方と誤りの型の規約）

- 型 E（「最も」「正確に」の言い切り）：「本調査における最も直接的な構造対応の一つ」（114 行）、「渦の『自律的な立ち上がり』と正確に対応」（102 行）、「数的にも順序的にも最も直接的な対応」（249 行）、「最も顕著な横断パターン」（208 行）、「最も多層的な例証の一つ」（212 行）。比べた跡は無い。
- 型 E（断定）：「この傾向は構造的に必然と考えられます」（220 行）、「確認されました」（86・249・251・255 行）。
- 型 H（原典に無い体系）：英語版の縁の 10 の型（66 行・152 行）、日本語版の「閉じた束／開いた束」（168 行）。
- 型 B・C（射程で切る）：ja 42 行「デジタル環境での文学生産形態も射程外です」。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Todorov 1971 の写しは、北テキサス大学の教員のサイトに置かれた JSTOR の誌面の画像で、Wayback の一覧にそのサイトの授業の頁があるので、授業用の写しとして本文照合済にしました（README「規約で決めたこと」人類学・民族学の行）。サイトは大学のサーバーではなく教員のドメインですが、連絡先は大学のアドレスで、「Courses」の欄に授業の頁があります（2026-11-09 に司令塔がサイトの頭の頁と Wayback の一覧で確かめました）。上げた人が分かり、授業の資料として置かれた出版社の誌面なので、授業用の写しの扱いにしています。
- Bourdieu 1985 の写しは、MIT のサーバーに置かれた美術家 Allan McCollum の個人の頁の打ち直しで、授業の頁かどうかを確かめられなかったので、未照合にしました。
- Shklovsky は、出版社 Wiley が見本として出している論集の抄録で、出版社の版として本文照合済（訳）にしました。省略の印があり、Lemon & Reis の本の全文ではありません。
- Aristotle と Freytag は、パブリックドメインで本文に当たれて、物語の中の衝突と至らない形をはっきり書いているので、論として足しました。どちらも物語の筋の論で、分野の変化の論ではありません。Freytag は Aristotle を引くので、段 3 で二つを一つの系譜として数えるかを見ます。
- 似た論文のうち、Reagan ら（2016）は arXiv の著者稿を取り、六つの感情の弧（悲劇＝下降、Oedipus＝下降・上昇・下降を含む）を確かめましたが、物語の感情の推移を測る論文で、衝突を論の芯に置いていないので、論として足していません。Polti（1916）も足していません。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Shklovsky, V. Art as Technique. Lemon & Reis 訳（1965）の抄録の再録. Rivkin, J. & Ryan, M. (eds.) (2017). *Literary Theory: An Anthology*. 3rd ed. Wiley-Blackwell, pp.8–14 | https://catalogimages.wiley.com/images/db/pdf/9781119622604.c01.2.pdf （出版社の見本の PDF） | 手元に保存した（保存名の案手元の PDF） |
| Bourdieu, P. The Market of Symbolic Goods. R. Swyer 訳. *Poetics* 14(1–2), 13–44 (1985). DOI 10.1016/0304-422X(85)90003-8。写しは『The Field of Cultural Production』第 1 章の打ち直し | https://web.mit.edu/allanmc/www/bourdieu2.pdf （MIT のサーバーの個人の頁。権利は未確認） | 取得先を確かめた（性格を添える。保存名の案手元の PDF） |
| Bourdieu, P. (1983). The field of cultural production, or: The economic world reversed. *Poetics* 12(4–5), 311–356. DOI 10.1016/0304-422X(83)90012-8 | Elsevier（有料） | 書誌だけ |
| Jauss, H. R. (1970). Literary History as a Challenge to Literary Theory. E. Benzinger 訳. *New Literary History* 2(1), 7–37. DOI 10.2307/468585 | JSTOR（有料） | 書誌だけ |
| Iser, W. (1972). The Reading Process: A Phenomenological Approach. *New Literary History* 3(2), 279–299. DOI 10.2307/468316 | JSTOR・Project MUSE（有料） | 書誌だけ |
| Shklovsky, V. (2015). Art, as Device. A. Berlina 訳. *Poetics Today* 36(3), 151–174. DOI 10.1215/03335372-3160709 | Duke（有料） | 書誌だけ |
| Todorov, T. (1969). Structural Analysis of Narrative. A. Weinstein 訳. *NOVEL: A Forum on Fiction* 3(1), 70–76. DOI 10.2307/1345003 | JSTOR（有料） | 書誌だけ |
| Frye, N. (1951). The Archetypes of Literature. *The Kenyon Review* 13(1), 92–110。再録：*Fables of Identity* (1963), Harcourt, Brace & World | https://archive.org/details/fables-of-identity-studies-in-poetic-mythology-northrop-frye-1963 （利用者が上げた写し。権利は未確認）・https://archive.org/details/fablesofidentity00frye （貸し出し） | 書誌だけ（写しは読めるが、確かめ先にしない） |
| Frye, N. (1957). *Anatomy of Criticism: Four Essays*. Princeton University Press | https://archive.org/details/anatomyofcritici1957frye （貸し出し） | 書誌だけ |
| Bloom, H. (1973). *The Anxiety of Influence: A Theory of Poetry*. Oxford University Press | https://archive.org/details/anxietyofinfluen0000bloo （貸し出し） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Propp 1928」の行：手元の PDF は UT Press 1968 年 第 2 版（American Folklore Society Vol. 9 / Revised Edition 1968）の Monoskop の写し。PDF の面 n が本の n−27 頁。
- 台帳の「Bakhtin 1981」の行：Internet Archive に利用者が上げた打ち直しの写し（the-dialogic-imagination-four-essays-m.-m.-bakhtin-berserker-books-2。頁の番号は角括弧）がある。上げた人と権利は未確認。図書館の版は貸し出しだけ。
- 台帳の「Todorov 1971」の行：台帳の URL の PDF は JSTOR の誌面の画像（2016-02-25 に北テキサス大学の回線から取ったもの）で、北テキサス大学の教員 David Bard-Schwarz のサイトの授業の資料の写し。2026-11-09 に取り、1 頁目の書誌と p.39 を確かめた（「手元に保存した」に上げられる。保存名の案手元の PDF）。
- 台帳の「Bourdieu 1971」の行：備考の MIT の写しは、『The Field of Cultural Production』第 1 章（1985 年の英訳の再録）の打ち直しで、置き場は美術家 Allan McCollum の個人の頁（台帳に足す案）。
- 台帳の「Bourdieu 1992」の行：手元の PDF は見開き 2 頁が 1 面の Monoskop の写し。扉の OCR は「Stanford … 1995」、訳の © は 1996 Polity。面 n の左が本の 2n−20 頁。
- 台帳の「Barthes 1970」の行：手元の PDF は Blackwell の 1990 年版の 2002 年の刷（訳 © 1974 Farrar, Straus and Giroux）。
- 台帳の「Freytag 1863」の行：手元の PDF は Internet Archive の資料と MD5 が一致（Freytag は Marygrove College の図書館の本、Aristotle はトロント大学 Robarts 図書館の本の走査で、扉の裏の刷は 1923 年まで）。
- 台帳の「Polti 1895」の行：Digital Library of India の走査は、1945 年の刷（Copyright 1916, 1917 The Editor Company ほか）。
- 台帳の「Reagan ら 2016」の行：出版社の PDF は 2026-11-09 に idp.springer.com へ送られ、取れなかった。arXiv の著者稿（https://arxiv.org/pdf/1606.07772 、v3）を取り、1 頁目の題・著者を確かめた（保存名の案手元の PDF）。
- 台帳の「Genette 1980」の行：Internet Archive の「opensource」「community」の集まりに利用者が上げた写し。見開き 2 頁が 1 面で、面 n の左が本の 2n 頁。上げた人と権利は未確認。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 報告の論の多くは書籍で、提唱者の本文に当たれたのは、核になる論文が教員のサイトに残っていた Todorov、出版社が見本として出している論集の抄録の Shklovsky、パブリックドメインの Aristotle と Freytag でした。Jauss と Iser は、書籍の核になる論文（*New Literary History*）を探しましたが、OA の写しは見つからず、授業の頁はログインの壁でした。
- 報告が自ら未解決に挙げていた問い（Todorov の五つ）は、原典の 1 頁を開くと答えが出ました。退避版の段階で原典の URL は台帳にあり（取得先を確かめた）、開かずに「未確認」が三つの版に残っていました。
- 報告の §6 の題は、phase7 の §A の題と順がそのまま写っていました。隣の概念の語はこの分野の調べた跡に無く、写されたのは [SPECULATIVE] の印のついた仮説（渦の遅延・束の開放度）でした。印は報告で外されていました。
- 出版社の論集の見本（Wiley の catalogimages）は、出版社の版として読める短い抄録が置かれていることがあり、原典を探す道具の表には出ませんでした。検索で見つけました。
- Internet Archive の検索 API（contributor の欄）で、図書館の走査（トロント大学・Marygrove College・Digital Library of India）と利用者が上げた写しを分けられました。手元の Aristotle と Freytag は MD5 で図書館の走査と一致しました。
- Springer Open の PDF は 2026-11-09 に idp.springer.com へ送られ、取れませんでした。arXiv の著者稿で代えました。Wayback の CDX は一度、時間切れで返事がありませんでした。
- 手元の文字認識の道具は使っていません。文字の層の無い走査は、Internet Archive の OCR の文字（`_djvu.txt`）と頁の画像で読みました。

### 精読ノートと wiki の誤り

追記（2026-11-09・司令塔）：精読ノート「Todorov 1971」の五つの要素の頁（p.41 → p.39。誌面の右上の番号を頁の画像で確かめた）、台帳の「Polti 1895」の行の 26 行の引用（原典の OCR の文字で「Gozzi maintained that there can be but thirty-six tragic situations」を確かめた）、wiki の「ゲルツィ」（Gozzi）は直しました。台帳の「Polti 1895」の行の 56〜60 行の表の引用と、wiki の Aristotle の刷の書き方は、段 4（wiki との整合）に回します。Aristotle の「the right ending」と Freytag の「a real adjustment of conflicting forces」は、司令塔も OCR の文字で確かめました。

- 精読ノート「Todorov 1971」 26 行と 62〜66 行：五つの要素の引用の頁「(p.41)」→「(p.39)」。誌面の右上の番号 39 を頁の画像で確かめた。
- 精読ノート「Polti 1895」 26 行：引用符の中の「There are only 36 tragic situations」は原典に無い。原典（1945 年の刷）の文は「Gozzi maintained that there can be but thirty-six tragic situations」。56〜60 行の表の「原文引用」の欄（「all dramatic narrative reduces to exactly 36 fundamental situations」「drama is fundamentally about *conflict*—the clash of opposing wills and circumstances」ほか）も、原典の OCR の文字に見つからない要約を引用符に入れている。引用符を外して要約と書く（低）。
- wiki の頁「Polti 1895」 3 行：「ゲルツィ」は Gozzi の読み違いの見込み（同じ頁の 37 行は「ゴッツィ」）（低）。
- wiki の頁「Aristotle 1907」 67 行「1907 (Butcher 4th ed.)」：手元の走査は第 4 版の後の刷（扉の裏は 1923 年まで）（低）。
- 精読ノート「Aristotle 1907」・台帳の「Freytag 1863」の行の「5段階対応」の欄（台帳の「Stage 2-4」「Stage 1-5」）は旧い判定で、機械的な誤りではないので段 4 に回す。
