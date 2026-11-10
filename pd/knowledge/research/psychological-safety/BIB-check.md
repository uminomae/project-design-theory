# psychological-safety — 書誌照合の記録（pd#151）

行ごとの書誌（DOI・保存先）は各 SURVEY 末尾の「書誌の表」が正本。本ファイルは、READER を書くときに**どの出典をどの重さで使えるか**を一目で見るための統合表と、SURVEY の間の食い違いの記録。照合の状態＝`本文照合済`／`要旨照合済`／`二次資料のみ`／`未照合`。READER 本文の「出典：」の行に置けるのは `本文照合済` か `要旨照合済` のものだけ。それ以外は本文で「未照合」と書く。

## 状態

- 2026-11-06（後）: READER 初稿の「出典：」行に置いたのは §1（本文照合済）と §2（要旨照合済・「要旨で確認」と明記）だけ。§3 Frazier の数値は本文に出していない。§4 は本文で「未照合」と書いた（Edmondson 2004・Kahn 1990・Rogers 1954・Edmondson 2018・Clark 2020・Bion・Menzies・山岸 1999・Higgins）。critic レビュー 2 で出所を直したもの＝Clark の「65%」（報告書でなく会社のサイト・二次）。

- 2026-11-06: SURVEY-01〜04 の書誌の表（計 85 行・重複込み）を統合。原典テキストの保存先＝main checkout の `.cache/raw/psychological-safety/`（commit しない）。
- Fable の抜き取り照合（V1）: Edmondson 1999 p.354（凝集性・Janis・explicit）／Argyris 1990 p.13・p.25／Janis 1972 p.203／Porges 2022 p.2／寺井ら 2003 の区別／Maslow 1943 の部分的充足／Schein 1995 の identity・competence・self-worth／Edmondson 2002 WP の cozy ＝ **すべて保存テキストと一致**。
- team-critic round 1（`REVIEW-critic-20261106.md`）: FAIL 5（ページ違い 2・過大申告 2・数 1）・WARN 20。反映は worker・同日。V1 抜き取り約 30 か所のうち不一致は上の 2 件のページ違いだけ。

## 1. 本文照合済（READER の出典に使える）

| 出典 | 中身の要点 | 使う SURVEY | 注意 |
|---|---|---|---|
| Edmondson 1999 ASQ | p.354 定義・信頼との関係・凝集性との区別（Janis）・explicit の文／p.375 考察 | 01・03・04 | 保存済 PDF（MIT 授業資料） |
| Edmondson 2002 HBS WP 02-062（2003 章の元） | 信頼との対比（時間・自他・水準）の初出／「cozy environment ではない」 | 01 | 1999 には対比は無い＝1999 に帰属しない |
| Schein 1992 MIT WP 3409（SMR 1993） | 緑の部屋・Anxiety 1／2・否認と投影 | 01 | WP 版 |
| Schein 1995 MIT WP 3831 | learning anxiety／survival anxiety・守られるのは identity・competence・self-worth・脅威は防衛（否認・合理化・他責）を呼ぶ | 01・03 | WP 版 |
| Edmondson & Bransby 2023 Annu. Rev. | 総説（CC BY）。Frazier・Sanner・Koopmann 等の要約の二次としても使う | 02 | 01 は要旨のみと記載＝02 の本文照合を採る |
| Swain ら 2024 JCLD | 軍での上限・規律と釣り合わせる（概念論文・データなし） | 02 | |
| Nubuor ら 2026 Front. Psychiatry（ガーナ軍 n=292） | 成果は flourishing。「階級が抑える」は序論の背景 | 02 | Issue 本文の「階級の構造そのものが抑える」は結果でない＝直す |
| Helmreich ら 1999 CRM | CRM の世代の推移（著者版） | 02 | |
| LeaderFactor 2021 技術報告（Clark の 4 Stages 調査） | 12 項目は一因子・「65% が inclusion を先に」は順位づけの問い | 02 | Clark 2020 の本そのものは未照合 |
| Argyris 1990 Overcoming Organizational Defenses | p.25 防衛的ルーティン・p.13 Model I と submissive/passive/dependent・p.19–20 思いやりの名の自己検閲 | 03 | IA の OCR |
| Janis 1972 Victims of Groupthink（初版） | p.9 定義・p.203 自尊心を保つ相互の努力 | 03 | 1982 第 2 版は未照合＝Edmondson が引くのは 1982 |
| A. Freud 1937 英訳 | p.123・p.132 | 03 | IA の OCR |
| Vaillant 2011 Dialogues Clin Neurosci | 防衛の階層の近年の要約・共感で immature defenses が崩れる | 03 | 1977・1992・1993 の本は未照合 |
| Krantz 2010（著者稿） | Menzies 1960 の要約（二次として） | 03 | |
| Porges 2022 Front. Integr. Neurosci. | p.2 脅威の除去と安全だと感じることは別・p.9 除去で足りるという想定の批判・neuroception | 04 | |
| Porges 2021・2026（EuropePMC XML） | 混ざった状態（遊び・親密さ）／批判への応答 | 04 | |
| Grossman 2023 Biol. Psychol.（プレプリント版） | 五つの前提への反駁（爬虫類の背側迷走神経・RSA の系統発生） | 04 | ページはプレプリントのもの |
| 寺井・森田・山岸 2003 | p.173 山岸 1998 の安心の定義／p.177 人は安心と信頼を区別していなかった可能性 | 04 | 山岸 1999 本体の代わりの一次 |
| 小杉・山岸 1998 | 一般的信頼と信頼性判断（要旨と冒頭） | 04 | |
| Maslow 1943 Psychol. Rev. | p.377・379 安全の欲求の中身／p.386・389 階層は固定でなく同時に部分的に満たされる | 04 | psychclassics |
| Taylor ら 2022・O'Donovan, Van Dun & McAuliffe 2020・O'Donovan & McAuliffe 2020 | スポーツ・医療での定義の縮み（harm・punitive）・測定の多様さ | 01 | |
| 山内 2021・山口 2020・大塚・落合 2025（J-STAGE） | 日本語での受け取り（ぬるま湯・「安心して」の訳） | 01 | |

## 2. 要旨照合済（要旨の範囲で引ける・数値は二次と明記）

Sanner & Bunderson 2015（効果量は二次）／Eldor ら 2023（標本は二次）／Edmondson 1996／Pearsall & Ellis 2011（題は "…unethical **team** behavior"）／Anicich ら 2015／Hedlund & Österberg 2013／Kang 2024／Deng ら 2019／Kessel ら 2012／Baer & Frese 2003／Koopmann ら 2016／Gerlach & Gockel 2022／Marlow ら 2025／Newman・Donohue & Eva 2017／Edmondson & Lei 2014（＋二次経由）／Porges 1995・2003／Grossman & Taylor 2007／Neuhuber & Berthoud 2022／Cesario ら 2020／Morrison & Milliken 2000／Detert & Edmondson 2011。

## 3. 本文をブラウザで読んだがローカル保存なし

| 出典 | 事情 |
|---|---|
| Frazier ら 2017 Personnel Psychology | 研究者がブラウザ pane の pdf.js で本文を読み、相関（学習行動 .62・情報共有 .52・創造性 .13 など p.130–131）を転記。ODU の PDF は Cloudflare で curl 不可。Fable の再取得も止められた（UA 偽装になるため）。**数値は再照合まで「ブラウザ読み・保存なし」の印**。pjdhiro にブラウザ保存を頼む |

## 4. 二次資料のみ・未照合（本文で「未照合」と書く）

| 出典 | 状態 | 頼むこと |
|---|---|---|
| Edmondson 2004（Kramer & Cook 編の章） | 未照合 | ResearchGate をブラウザ保存 |
| Edmondson & Lei 2014 本文 | 要旨＋二次 | 同上 |
| Kahn 1990 | 二次のみ（定義の頁 p.705／p.708 の食い違い未解決） | JSTOR 等で頁確認 |
| Schein & Bennis 1965／Rogers 1961 | IA 全文検索の断片のみ・頁なし | IA 貸出で頁確認 |
| Edmondson 2018 Fearless Organization／2008 HBR | 二次のみ（2×2・「居心地のよさではない」） | 手元の本で頁確認 |
| Clark 2020 の本 | 未照合 | 同上 |
| Sanner & Bunderson 2015・Eldor ら 2023 本文 | 要旨のみ | ResearchGate をブラウザ保存 |
| Bion 1961 | 二次（オランダ語解説 PDF の頁つき英語引用 p.147） | IA 貸出 |
| Menzies 1960 | 二次（Krantz 2010） | SAGE 403 |
| Vaillant 1977・1992・1993／Argyris 1985・1986／Janis 1982 | 未照合 | 図書館 |
| Klein 1946・Hirschhorn 1988・Obholzer & Roberts 1994 | 二次のみ | — |
| 山岸 1999『安心社会から信頼社会へ』 | **本文未照合**（出版社紹介・追悼文・寺井ら 2003 経由） | **pjdhiro の手元の本で定義の章の頁を確認**（仰ぐこと 3 の前提） |
| Yamagishi & Yamagishi 1994／Yamagishi ら 1999 | 二次のみ | — |
| Porges 2011 の本 | 二次（pd awareness-model C2-porges・Grossman の引用） | — |

## 5. SURVEY の間の食い違い・Issue 本文の直し

| 事項 | 01 | 02／03／04 | 採る |
|---|---|---|---|
| Edmondson と Argyris の師弟 | 1999 謝辞は Hackman のみ。HBS のリリース（二次）が指導者の一人と記す | 03: 確認できず | 「指導にあたった人の一人とされる（二次）」までに留める |
| Edmondson & Bransby 2023 | 要旨のみ | 02: 本文照合済（CC BY） | 本文照合済 |
| Frazier 2017 | 二次のみ | 02: ブラウザで本文 | §3 の印で扱う |
| 信頼との対比（焦点が他者か自分か・時間） | 初出は 2002 WP。Issue 本文は 2004 章に帰属 | — | 2002 WP（2003 章）に帰属し、2004 は未照合と書く |
| Issue 本文「明示して話し合っても本質は変わらない（＝宣言で作れるものではない）」 | 括弧内は原文を超える読み | — | 原文は「明示的に議論されても構成概念の本質は変わらない」まで。宣言云々は Claude の読み替えの印 |
| Issue 本文「ガーナ軍：階級の構造そのものが抑える」 | — | 02: 序論の背景・成果は flourishing | Issue を直す |
| 「爬虫類」の語の出所 | — | 04: MacLean → Porges（1995・2003）。山岸には無い（照合範囲） | 山岸 1999 本文の確認待ち |
| Taylor ら 2022 が引く「Frazier p.532」 | 01: Frazier 2017 は pp.113–165 なので p.532 はありえない | — | **未決**。Newman ら 2017 HRMR 27:521–535 の頁の可能性。Frazier の本文（ブラウザ保存）が届いたら決める |
| Schein 1995 の防衛反応の読み | 01「生存の不安を上げると防衛」 | 03「学ぶ不安が高いまま残ると defensive（p.6）」 | 原文 p.6 に近い 03 を採る（critic 9） |
| 「低いほうが機能する」の直接の研究 | — | 02: 無い、と書いたが Higgins ら 2020（教員 17 万人縦断・Taylor 2022 経由・二次）と Langfred 2004（Swain 経由）が抜け | 二次経由で一覧に足す。Eldor の逆 U の高い側は「相対的に低いほうがよい区間」 |
| 日本語の「安全」の仮説 | 01: 直接支持する資料なし（コーパス調査はしていない） | — | 受け入れ先が安全工学・医療安全・産業保健の雑誌である点は状況証拠として残す（critic 13） |
| Frazier 2017 の偽 PDF | — | .cache/raw の `frazier-2017-meta-analytic-review.pdf` は Cloudflare の HTML だった | `frazier-2017-CLOUDFLARE-BLOCK-not-the-paper.html` に改名（2026-11-06） |
| Edmondson & Lei 2014 本文 | 01: 要旨＋二次 | 00（別セッション）: 本文照合済（Field Guide が張る著者 PDF・ローカル保存なし）。p.24 核の定義・p.25 水準・p.36 条件・p.39–41 高すぎるとき | 本文照合済（保存なし）。自他の対比は本文に無い＝CIPD の帰属は誤り（00 §6）。初出は 2002 WP（01 §7） |
| 「Schein 1995」が二つ | 01・03: MIT WP 3831（Organizational and managerial culture as a facilitator…）p.6 の learning anxiety | 00: MIT WP 3821（Kurt Lewin's change theory in the field and in the classroom）p.3–4 | **別の論文**。READER で引くときは WP 番号と題で区別する |
| 「爬虫類」の語 | 04: 山岸には無い。出所は MacLean → Porges | 00／152: Cook-Greuter 2013 p.9 が防衛を「爬虫類の脳から来るもの（逃走・闘争・凍結）」と「心理的なもの」に分ける（本文照合済） | 山岸ではなく Cook-Greuter（pjdhiro が読んでいる発達段階の資料）に爬虫類の語がある。仰ぐこと 7 の材料 |
| Higgins の研究 | 02: Higgins ら 2020（教員 17 万人縦断・Taylor 2022 経由） | 00: Higgins et al. 2022（低い安全×高い説明責任が最良・二次） | **未決**。同じ著者の別論文か同一か。原典未読 |
| 自我発達の段階と防衛の成熟度 | — | 152: Vaillant & McCullough 1987（要旨）＝相関しなかった | 段階と防衛を一本の物差しに溶接しない根拠。READER の段階の章で引く |

## 追記（2026-11-10・Issue #111 の出典の直し）

公開文に載せるのは本文を読めたものだけ（sources §3-3）に合わせ、読み物から、要旨だけ・二次資料だけ・未照合・個人の写しだけで読んだ出典に頼る文を外した。外した文と書誌は Issue #111 のコメントに残した。

- 本文照合済に上げた：Gerlach & Gockel (2022)（出版社 Frontiers の PDF。要旨 p.1：5 か月・自主管理チーム 61・N=236・三回の測定・"PS decreased from project beginning to end"。方法：学生 236 人）／Cesario, Johnson & Eisthen (2020)（著者が PsyArXiv https://osf.io/x83dq に置いた版。p.1："has long been discredited among neurobiologists"）。
- Grossman (2023) の写しは Zenodo（10.5281/zenodo.7955274。Unpaywall が示した置き場）の著者稿。
- 外した：Sanner & Bunderson 2015・Eldor ら 2023 とその批判・Anicich ら 2015・教員の縦断研究・Edmondson 1996・Pearsall & Ellis 2011・Kessel ら 2012・Baer & Frese 2003・Koopmann ら 2016・Marlow ら 2025・Vaillant & McCullough 1987・Morrison & Milliken 2000・Detert & Edmondson 2011・Argyris 1990・Janis 1972（個人の写しだけ）・Bion・Menzies 1960・Kahn 1990・Rogers 1954・Edmondson 2004・Edmondson 2018・Clark 2020 への断り書き・提唱者の会社のサイト・山岸 1999 への断り書き・一般向けの記事と実務の記事。

