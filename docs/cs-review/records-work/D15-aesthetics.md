# 美学：記録から外した作業の節

`cs/evidence/evidence-D15-aesthetics.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D15-aesthetics.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | 日本語版 | 英語版 | プレゼン版 | 退避版 |
|---|---|---|---|---|
| 判定の数 | 表は強い 3・部分的 5・条件付き 2（53〜62 行。Colophon 238 行も同じ）。47 行は「3 理論で全5段階…5 理論で 3〜4 段階に射程を限定…2 理論では場→波→縁」と別の分け方で書く | 強い 10（61〜72 行・180 行「None remained conditional」） | 冒頭は強い 9・部分的 1（23 行）。表は強い 5・部分的 3・条件付き 2（45〜54 行） | Accept 10（CA 昇格 3 を含む。357〜362 行） |
| 「強い」の論 | Dewey・Schiller・Eco | 10 のすべて | 表では Meltzer・日本美学・Dewey・Schiller・Eco | ― |
| メルツァーの対応段階 | 波・縁（53 行） | 全5段階（82 行） | 全5段階（45 行） | 波↔縁の往復（phase6） |
| 日本美学の対応段階 | 縁（54 行） | 全5段階（90 行） | 全5段階（縁に特に強い）（46 行） | 縁🟡（368 行） |

判定の数は未判定（版の食い違い）。英語版とプレゼン版は訳ではなく別々に書かれていて、どの版も原典の照合から数を出した跡はありません。プレゼン版は冒頭の数と自分の表が合いません。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 179〜181 行 §6.1「処理の保留が美を生む」と最後の文「ここでの保留は単なる『停止』ではなく、『保留することで関係の可能性空間を開く』積極的機能」 | 付け足し | 高 | phase7 5〜11 行の Pattern 1「『抱持 が美を生む』」と「抱持が単なる『保留』ではなく、『保留することで関係の可能性空間を開く』積極的機能」を、抱持の語だけ「保留」「停止」に替えて写した文。原典はそれぞれ別のこと（カントは利害の無さ p.204、シラーは美的状態が一つの結果も与えないこと p.68、世阿弥は見る人が知らないこと p.60、メルツァーは押し入る誘惑との葛藤 p.5）を書く |
| ja 181 行「単一の偶然ではなく、精神分析・芸道・西洋哲学において独立に到達された知見」・ja 227 行「4理論伝統にわたるパターンの確認」 | 言い過ぎ | 高 | シラーはカントを土台にすると書く（第 1 書簡 p.8）。四つは原典で照合されていない。出どころは phase7 13 行「確信度: 高」 |
| ja 209〜211 行 §7「縁に留まることの創造性」 | 付け足し | 中 | phase6 149 行と phase7 111 行（「Pattern 1（抱持）と接続」）の保持論点。原典のメルツァーは葛藤から退く形と越える形の分かれ目を書き（p.5）、SEP のアドルノは緊張を解いていく矛盾と書く |
| ja 185 行・ja 227 行「縁の型の多様性（保持・停止・接合・関係・分岐・境界・結合・緊張）」 | 付け足し | 中 | 型の名は原典に無い。出どころは退避版 366〜378 行（L-2）と phase7 17〜23 行 |
| ja 195〜197 行 §6.5「渦の弱さ」・ja 187〜189 行 §6.3「開かれた束」 | 抜け | 高 | 本文に当たれた原典は、統合に至らない・閉じない形を、至らない形として具体に書いていた（シラーの Null と混ぜるだけ、デューイの二つの極と固着、ベンヤミンの政治の美学化、メルツァーの冷たくなる・追い払う、エーコの伝わらなくなる無秩序、カントの深淵）。報告はそれを「美学の特徴」「縁に留まる」と一般にまとめ、原典の分かれ目を書いていない |
| ja 223 行「美学領域における5段階モデルの構造的妥当性を支持する有力な根拠」 | 言い過ぎ | 高 | 照合の跡が無い。シラーの節は取り違えを含む |
| ja 22 行 参照した一次ソースの列挙 | 言い過ぎ | 中 | 本文を読んだ跡が無い（退避版の flags は lit:概要・lit:複数）。ja 49 行は自ら「原典の精読による検証を主張するものではありません」と書いていて、22 行と食い違う |
| ja 219 行「非西洋圏は日本美学の1件のみ」 | 未判定 | 低 | 「日本美学」が五つの原典の束で、一つの論ではない（2 節） |

### テンプレート由来の表示

ja 3〜4 行「立ち位置明示」、24〜25 行「方法論的開示（S60）」、66 行「温度帯の分布」、68〜69 行「安全弁」、229〜230 行「結びの温度開示」、232〜242 行「Colophon」。18 行の「Phase 1-4」「Phase 5（論拠監査）」「Phase 6」「Phase 7」も LLM の記号です。25 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所」と書き、著者を pjdhiro としていて、文責の書き方（writing §1-1・§1-8）と合いません。英語版 49 行の読者への呼びかけ（「Readers can continue while holding onto that discomfort」）も型 F の表示です。各論の「事実として」「読み取りとして」「解釈として」の札は、規約への説明を読者に向ける形に近いです。30 領域に共通の見込みで、テンプレートで直します（README 段 1）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| §6.1「処理の保留が美を生む」と最後の文 | phase7 5〜13 行の Pattern 1「抱持 が美を生む」（抱持の語を消して写した） |
| §5.5「処理を保留する（反射的に解消しない）」 | phase6 131 行の抱持の定義（H2） |
| §5.5 見出し「保持の構造」・英語版「Structure of Retention」 | 退避版 52 行（EV-AE-002 の題）・phase6 18 行 |
| §7「縁に留まることの創造性」 | phase6 101・149 行 → phase7 111 行 |
| シラーの規定可能性を場に当てる | 退避版 269・276・398 行 → phase6 75 行 |
| カントの「概念の不適合は波」 | 退避版 99 行（「予測誤差」の語を消した） |
| アドルノの「否定と差異の発生の違い」 | 退避版 319 行・phase6 83 行（「欠損」の語を消した） |
| 英語版の「lack」「error-driven logic」（デューイ・日本美学） | 退避版・調べた跡にこの文は無い（英語版を書いたときの付け足し。語は欠損駆動思考） |
| 縁の 8 類型 | 退避版 366〜378 行 → phase7 17〜23 行 |
| 能勢『幽玄論』を 1940 とする | 退避版 59・71 行（精読ノート「能勢朝次 1944」も 1940） |
| 版ごとの件数 | ja・en・pres が別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

退避版と調べた跡で、欠損・抱持・非二元の語は次の所にありました：退避版 99・100 行（予測誤差）、319 行（否定と欠損）、388〜394 行（「直接的」「非二元的」「二元性を保持」のレンズ）、phase6 18・28・83・129〜131・150 行、phase7 5〜11・72・112・129 行。報告の日本語版の本文に「欠損」「抱持」の語そのものはありません。

### 文体（書き方と誤りの型の規約）

- 型 E（「最も」の言い切り）：「本調査で最も整合的な対応を示す理論の一つ」（83 行）、「5段階の初期状態の哲学的に最も精密な定式化」（91 行）、「縁の存在論的記述の中で最も根源的なものの一つ」（133 行）、「場への対応は本調査の10理論中で最も弱く」（143 行）、「渦の対応が最も弱い領域」（197 行）。比べた跡は無い。
- 型 H（原典に無い体系）：「保持型・停止型・接合型・関係型・分岐型・境界型・結合型・緊張型」（185 行）。
- 型 B・C（射程で切る・外に置く）：「Benjaminが記述するのは社会的・歴史的変容であり、個人の創造プロセスとは射程が異なります」（151 行）、「Rancièreの記述は社会的配置の変換であり、個人の美的経験とは射程が異なります」（161 行）。
- 型 E（断定）：「このパターンは単一の偶然ではなく…独立に到達された知見です」（181 行）、「これは美学の欠陥ではなく」（197 行）。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- 「日本美学」は、報告の論の単位のまま一つの節にし、中で原典ごとに分けて書きました。五つの原典を別々の論に割ると、報告と論の数が合わなくなり、宣長と久松は読めていないためです（stance 2-6「網羅しようとしない」）。
- メルツァーの 1993 年の講演の書き起こしは、著者の著作を管理する財団のサイトの PDF で、著者のサイトの写しと同じ扱いにして本文照合済にしました（README「規約で決めたこと」音楽学の行）。1988 年の本は未照合（書籍）と書き分けました。
- ベンヤミンの 1936 年の仏語版は、Internet Archive の雑誌の集まりの走査で、出所（誌名・号・頁）が書けるので、図書館の走査と同じ扱いにして本文照合済（訳）にしました。訳者 Klossowski の権利は確かめていません。 追記（2026-11-10）：Internet Archive の資料の情報（metadata）で、上げた人を確かめ直しました。上げた人（uploader）は、Internet Archive が雑誌の号を作る仕組みのアカウント（periodicalissuegenerator）、contributor は Internet Archive、走査の拠点は cebu で、2024-10-03 に加えられています。匿名の個人の写しではなく、雑誌の号を Internet Archive が走査したものなので、本文照合済（訳）のままにします。
- デューイ 1934・ハイデガー・エーコは、上げた人の分からない写しで読んだので、未照合として読んだ頁を書きました。
- シラーの第 20 書簡の「同時に滅ぼし、保つ」と哲学のヘーゲルの止揚は、正反合の系譜として段 3 で一つに数えるかを見ます（歴史学のマルクスと同じ扱い）。
- 論は足していません。似た論文（神経美学）は本文を取れましたが、報告の論の構造を確かめるものではなく、衝突や至らない形をはっきり書いているかを見ていないので、論として足していません（README「調査の手順」1）。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Schiller, F. (1795). Ueber die ästhetische Erziehung des Menschen, in einer Reihe von Briefen. *Die Horen* 1795, 1. Stück pp.7–48・2. Stück pp.51–94・6. Stück pp.45–124 | https://archive.org/details/diehoreneinemona12unse （イリノイ大学 Urbana-Champaign 図書館の走査。v.1–2） | 手元に保存した（パブリックドメイン。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Benjamin, W. (1936). L'œuvre d'art à l'époque de sa reproduction mécanisée. P. Klossowski 訳. *Zeitschrift für Sozialforschung* 5(1), 40–68 | https://archive.org/details/studies-in-philosophy-and-social-science_1936_5_1 （Internet Archive の雑誌の走査） | 手元に保存した（訳者の権利は未確認。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Meltzer, D. (1993). Aesthetic Conflict and Creativity（Stavanger での講演の書き起こし） | https://web.archive.org/web/2023/http://www.harris-meltzer-trust.org.uk/pdfs/MeltzerAestheticCreativity.pdf （Wayback の記録。元は Harris Meltzer Trust のサイト） | 手元に保存した（保存名の案手元の PDF） |
| Harris Williams, M. (2018). Foreword. Meltzer & Williams, *The Apprehension of Beauty*, 2nd ed., pp.xv–xviii | https://web.archive.org/web/20231117042449/https://www.harris-meltzer-trust.org.uk/pdfs/ApprehensionBeauty_Foreword.pdf （Wayback の記録。元は財団のサイト） | 手元に保存した（保存名の案手元の PDF） |
| Harris Williams, M. (2005/2011). Genesis of the 'aesthetic conflict' | https://web.archive.org/web/20220124162214/https://www.harris-meltzer-trust.org.uk/pdfs/GenesisAesthetic.pdf （Wayback の記録。元は財団のサイト） | 手元に保存した（保存名の案手元の PDF） |
| Eco, U. (1989). *The Open Work*. A. Cancogni 訳. Harvard University Press | http://monoskop.org/images/6/6b/Eco_Umberto_The_Open_Work.pdf （Monoskop の写し。上げた人と権利は未確認）・https://archive.org/details/openwork0000ecou （貸し出し） | 書誌だけ（写しは読めるが、確かめ先にしない） |
| Rancière, J. (2002). The aesthetic revolution and its outcomes. *New Left Review* 14 | https://newleftreview.org/issues/ii14/articles/jacques-ranciere-the-aesthetic-revolution-and-its-outcomes （出版社の頁。冒頭だけ無料） | 取得先を確かめた（冒頭の部分だけ） |
| Rancière, J. (2001). Ten theses on politics. *Theory & Event* 5(3). DOI 10.1353/tae.2001.0028 | Project MUSE（有料） | 書誌だけ |
| Okakura, K. (1906). *The Book of Tea*. New York: Fox, Duffield | https://archive.org/details/cu31924021575695 （コーネル大学図書館の走査） | 手元に保存した（パブリックドメイン。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Rancière, J. (2000). *Le Partage du sensible: Esthétique et politique*. Paris: La Fabrique | OA なし | 書誌だけ |
| Adorno, T. W. (1970). *Ästhetische Theorie*. Suhrkamp（英訳 1997、Hullot-Kentor 訳） | https://archive.org/details/aesthetictheory0000ador （貸し出し） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「本居宣長 1799」の行：手元の PDF（28 面）は版本でなく写本の画像。冒頭の面に「源氏物語玉乃小櫛」「本居宣長考」と、印「□曜文庫」「佐知屋」。くずし字で、本文は題と冒頭の数行しか読めていない。
- 台帳の「能勢朝次 1944」の行：扉は「能勢朝次著 幽玄論 河出書房」、序の日付は「昭和十八年九月」。図書館の本の走査（ラベル 910-N97ウ）。概説 p.1 を頁の画像で読んだ。
- 台帳の「Kant 1790」の行：書誌の「邦訳: 牧野英二訳『判断力批判』岩波文庫」は手元のファイルでない。手元は『Kant's gesammelte Schriften』Bd. V（Berlin: Reimer, 1908）の KU の部分（AA pp.165–485）。PDF の面 n が AA の n+156 頁。
- 台帳の「Heidegger 1935」の行：mission17.org の URL は 2026-11-09 に PDF を返さない（別の頁へ送る HTML）。Wayback の記録（2017〜2025 年の写し。https://web.archive.org/web/20190728081949/http://www.mission17.org:80/documents/Heidegger_TheOriginOfTheWorkOfArt.pdf ）は『Poetry, Language, Thought』（Hofstadter 訳）の pp.17–81 の、書き込みのある走査。上げた人と権利は未確認。
- 台帳の「Dewey 1934」の行：手元の PDF は Perigee 1980 年の刷（23rd Impression）の走査で、1934 年の初版ではない。上げた人は未確認。
- 台帳の「Marin 2015」の行：Frontiers の PDF を 2026-11-09 に取り、1 頁目の題・著者・DOI を確かめた（「手元に保存した」に上げられる。保存名の案手元の PDF・手元の PDF・手元の PDF）。中身は読んでいない。
- 台帳の「Markovic 2012」の行：SAGE の PDF は 403（HTML）を返した。Europe PMC の全文 XML（PMC3485814）は取れ、題を確かめた。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 書籍が多い分野でしたが、パブリックドメインの原文（カント 1908 年のアカデミー版、シラー 1795 年の『Die Horen』、岡倉 1906）と、雑誌の走査（ベンヤミンの 1936 年の仏語版）、著者の財団のサイトの Wayback の記録（メルツァーの講演）で、10 のうち 5 つの論の本文に当たれました。
- 手元の PDF の三つが、台帳の書き方と違っていました。カントは独語原文のアカデミー版で台帳の訳ではなく、宣長は版本でなく写本で、デューイは 1934 年の初版でなく 1980 年の刷でした。台帳の取得先（mission17.org）は、今は PDF を返しませんでした。
- 報告が抱持の語で立てた仮説を語だけ替えて写した所は、「保持」「保留」「留まる」で調べた跡と突き合わせると見つかりました（phase7 の Pattern 1 の題「抱持 が美を生む」と、報告 §6.1 の最後の文がほぼ同じ）。英語版にだけ「lack」「error-driven logic」が入っていました。
- 古い独語の雑誌（『Die Horen』）は OCR の文字が良く、書簡の番号と誌面の頁で控えられました。頁の画像では確かめていません。カントのアカデミー版は亀の子文字ですが、80〜90 dpi の頁の画像で読めました。
- 縦書きのくずし字の写本（宣長）は、頁の画像でも読めませんでした。手元の文字認識の道具は使っていません。
- 原典を探す道具は、書籍の題では Internet Archive の貸し出しと Monoskop の写ししか出しませんでした。図書館の走査は Internet Archive の検索 API（contributor の欄）で探しました。Semantic Scholar は回数の制限（429）を返しました。Unpaywall と CORE は鍵が無く飛ばしました。

### 精読ノートと wiki の誤り

追記（2026-11-09・司令塔）：能勢『幽玄論』の年（精読ノート「能勢朝次 1944」の題と 15 行、wiki の 45 行）は、序の面を頁の画像で開いて「昭和十八年九月」を確かめて直しました。精読ノート「能勢朝次 1944」の 26 行の引用、台帳の「Heidegger 1935」の行の 51・78 行の引用、台帳の「Kant 1790」の行の 64 行、wiki のリンクは、司令塔が原文の頁で確かめていないので直さず、段 4（wiki との整合）に回します。シラーの第 13 書簡の「Null」と「leere Unendlichkeit」、ベンヤミンの仏語版の結びの二文は、司令塔も OCR の文字で確かめました。ハイデガーの写しは、Hofstadter 訳の走査（書き込みあり）であることを一面で見ました。

- 精読ノート「Nose 1940」 15 行：直す前「河出書房, 昭和19年（1944年刊行、序文には昭和15年=1940年の日付）」→ 直したあと「河出書房, 昭和19年（1944年刊行、序文の日付は昭和十八年九月＝1943年）」。1 行目の題「能勢朝次 (1940)」とファイル名の「1940」も同じ。
- 同 26 行：引用符の中の文「『幽玄』は格形的に見れば支那に於ける造語であって、この熟語の中の『玄』にしろ、『幽』にしろ、老荘方面に愛用せられた文字」は概説 p.1 の文と違う。p.1 の文は「幽玄といふ語は支那で作られた言葉であつて、この熟語の中心は「玄」にあり、…「玄」といふ文字は、老子の所謂「道」を容形して、「玄之又玄」といひ、…老荘方面で愛用せられた言葉である」。引用符を外して要約と書くか、p.1 の文に差し替える。
- 精読ノート「Heidegger 1935」 51 行・78 行：引用符の中の「The striving does not tear them apart in discord and disputation, but rather carries the opponents into intimacy of simple belonging to one another」は p.49 に無い。p.49 の文は「we would surely all too easily falsify its nature if we were to confound striving with discord and dispute」と「the more inflexibly do the opponents let themselves go into the intimacy of simple belonging to one another」。引用符を外して要約と書くか、二つの文に分けて差し替える。
- 精読ノート「Kant 1790」 64 行：「"freies Spiel unsrer Erkenntniskraefte" (S9付近, p.217)」は p.217 の語のままではない。p.217 の文は「in einem freien Spiele」「Zustand eines freien Spiels der Erkenntnißvermögen」（低）。
- wiki の頁「Nose 1944」 45 行：「年: 1940/1944年」→「年: 1944年（序の日付は 1943 年 9 月）」。
- wiki の頁「Kant 1790」 52 行：「邦訳参照: 牧野英二訳」は手元の PDF の書誌ではない（低）。54 行・wiki の頁「Motoori 1799」 48 行・wiki の頁「Nose 1944」 48 行の「全文: Wikimedia Commons」のリンクが Commons のトップを指していて、ファイルを指していない（低。哲学の記録の Whitehead と同じ形）。
- wiki の頁「Heidegger 1935」 51 行：mission17.org のリンクは今は PDF を返さない。Wayback の記録に差し替えるか、上げた人の分からない写しと添える（低）。
- 精読ノート「本居宣長 1799」は「pp.1-20（表紙・序文・桐壺巻注釈の冒頭部分）」を読んだと書くが、手元の PDF は 28 面の写本で、冒頭の題は読めたものの、ノートの引用（「この物語は、もののあはれを知るを、むねとはしたる物語なり」p.2 付近）は確かめられなかった。段 4 に回す。
