# 所有で分け合う案を、ほかの論と実例で照らす（調べの記録）

作成：2026-11-21（Claude。手伝いのエージェントが調べて書き、§20・§21 の要約とともにこの場所へ置いた）

## 0. この記録の範囲と読み方

- 照らすもの：pjdhiro の三つの案（何への答えか：野中郁次郎の論が「株主資本主義のルールの中で終身雇用をどう守るか」の仕組みを持たない、と見たことへの問いとして）。
  - 案 A「従業員持株会などで対応する、などの具体的な提案も同時に提起すべきなんですよね。おそらく。」
  - 案 B「ポイントは株に変え、給料は株で支払い、雇用は守られなくても配当で補填して。と。株主になる権利は誰にでもあるのだから。」
  - 案 C「顧客と従業員に株を配ればいいんじゃ。」
- 案の良し悪しは判定しない。すでに論じられ・試されたこと、分かっていること、条件と落とし穴を並べる。
- 照合の状態：
  - **本文照合済**：本文（PDF の文字起こし）を自分で読んで引いた。
  - **本文照合済（要約ツール経由）**：ページを WebFetch（小さなモデルが本文から抜き出す道具）で読んだ。引用の字句は道具が抜いたもので、論旨は本文に合っているが、字句は使う前にもう一度原文で見るのが安全。
  - **要旨照合済**：要旨（abstract）だけを読んだ。
  - **二次資料のみ**：何の二次かを書く。
  - **未照合**：理由を書く。
- 【原典】は資料で確かめたこと。【読み】は Claude の推測。

---

## 1. 従業員所有・株での報酬の効果

### 1-1. Kruse, Freeman & Blasi 編 *Shared Capitalism at Work*（NBER / Univ. of Chicago Press, 2010）

- 状態：本の目次は **本文照合済（要約ツール経由）**（NBER の本のページ）。章のうち第 3 章だけ **本文照合済**（NBER の章 PDF c8088 を文字起こし）。ほかの章は未照合（時間の都合。NBER の章 PDF は c80xx の番号で置かれており、読める見込みは高い）。
- URL：https://www.nber.org/books-and-chapters/shared-capitalism-work-employee-ownership-profit-and-gain-sharing-and-broad-based-stock-options ／ 第 3 章 https://www.nber.org/chapters/c8088 （WP 版 https://www.nber.org/system/files/working_papers/w14229/w14229.pdf ）
- 【原典】章の並び：第 3 章 Blasi, Kruse & Markowitz "Risk and Lack of Diversification…"（pp.105–136）、第 4 章 "Creating a Bigger Pie?"（業績）、第 8 章 "Do Workers Gain by Sharing?"（働く人への効果）、第 9 章 Budd "Does Employee Ignorance Undermine Shared Capitalism?"、第 11 章 "Show Me the Money: Does Shared Capitalism Share the Wealth?" など。
- 【原典】第 3 章（Blasi, Kruse & Markowitz）：
  - 経済的に不安定な働き手では、正の効果が逆になる：「excessive worker exposure based on a worker's level of economic insecurity has the capability of reversing every single positive individual and workplace outcome」（p.126–127, §3.7 Conclusion）。
  - 失敗例として United Airlines の従業員買収を挙げ、原因に「endangering the capital of individual workers, wage substitution, lack of empowerment, and poor employee relations」（p.127）。
  - ESOP が比較的安全なのは、多くの場合働き手が自分の資金で買わないから、と書く：「ESOPS are less dangerous as long as they do not involve wage or benefit concessions」（p.115）。
  - 分散の計算：自社株 8 1/3% が例での最適、10〜15% なら「not too imprudent」。結論「A small but meaningful employee stock ownership level will not significantly deteriorate the diversification of employee portfolios.」（p.126）
  - 働き手の不安は、参加・良い労使関係・高業績の働き方の束で和らぐ（WP 版 abstract）。

### 1-2. O'Boyle, Patel & Gonzalez-Mulé (2016) メタ分析

- 書誌：*Human Resource Management Journal* 26(4), 425–448. doi:10.1111/1748-8583.12115
- 状態：**本文照合済**（早期公開版の PDF。巻頁が「••」の版なので、頁は PDF の頁で書く）
- URL：https://library.uniteddiversity.coop/Cooperatives/Employee_ownership_and_firm_performance-a_meta-analysis.pdf
- 【原典】102 標本・56,984 社。「Employee ownership has a small, but positive and statistically significant relation to firm performance (r = 0.04).」（abstract, p.1）
- 【原典】公開・非公開会社、株・ストックオプション、会社の規模で差がない。効果は年を追って強まり、米国外の標本のほうが強い。出版の偏りの証拠はほぼない（abstract）。
- 【原典】表 2 の 80% 信用区間は −0.03〜0.10（0 をまたぐ）。米国 r=0.02、米国外 r=0.06（表 2）。
- 【原典】働き手個人の成果を調べた研究が足りず、個人の水準は検定できなかった（Discussion, p.15）。
- 【読み】平均は正だが小さく、会社ごとのばらつきは負の側にも及ぶ。「持株会を入れれば業績が上がる」とは言えず、「平均では少し良い」まで。

### 1-3. Kruse, "Does employee ownership improve performance?" IZA World of Labor（v2, 最新の引用は 2022 年）

- 状態：**本文照合済（要約ツール経由）**（前半 10 万字を読んだ。残り約 5 万字は未読）
- URL：https://wol.iza.org/articles/does-employee-ownership-improve-performance/long （doi:10.15185/izawol.311.v2）
- 【原典】100 を超える研究から、生産性・賃金・雇用の安定・存続と結びつくが「the effects are dispersed and causation is difficult to firmly establish」（Elevator pitch）。
- 【原典】「Employee ownership companies have more stability, higher survival rates, and fewer layoffs in recessions」（Pros）。
- 【原典】「Employer stock tends to come on top of, rather than substitute for, regular employee compensation」（Pros）。
- 【原典】落とし穴：「Workers can be exposed to excessive financial risk, especially when employee ownership is a large share of a worker's wealth, and when it substitutes for other pay and benefits.」（Cons）。効果は参加・雇用保障・訓練などの支えの組み合わせに左右され、支えがないと満足度が下がり離職意向が上がることもある（本文）。
- 【原典】米国で自社株を持つ家族の 6 分の 5 は Markowitz の 15% の線より下（本文）。

### 1-4. Kurtulus & Kruse (2017) 不況時の雇用

- 書誌：*How Did Employee Ownership Firms Weather the Last Two Recessions?* W.E. Upjohn Institute, 2017. doi:10.17848/9780880995276（CC BY-NC-SA とされる）
- 状態：**二次資料のみ**（Rutgers の 2017-04-25 の報道発表、Upjohn の研究紹介ページ、Monthly Labor Review の書評の検索要約）。本の PDF と Employment Research 24(1) の記事は、取りに行ったが HTML が返り読めなかった（自動取得を止めているらしい）。
- URL：https://smlr.rutgers.edu/node/1516 ／ https://www.upjohn.org/research-highlights/how-did-employee-ownership-firms-weather-last-two-recessions ／ https://research.upjohn.org/empl_research/vol24/iss1/2
- 【原典（二次）】上場 8,000 社超のデータで、従業員所有のある会社は 2 度の不況（2001–03・2009–11）で解雇が「only half as many layoffs as other companies」（Rutgers 発表）。ESOP のある会社で破綻の見込みが下がる（検索要約）。
- 【原典（二次）】別の調査（Blasi & Kruse、GSS）として 2010 年に民間の 12.1% が解雇を報告、従業員所有の会社では 2.6%、という数が Rutgers のページにある（検索要約。Kurtulus & Kruse の数ではない）。
- 【読み】選択の偏り（もともと安定した会社が従業員所有を選ぶ）は残る。IZA の Kruse も因果は固く言えないとしている。

### 1-5. Craig & Pencavel (1992) 合板の労働者協同組合

- 書誌：*American Economic Review* 82(5), 1083–1105
- 状態：**二次資料のみ**（RePEc の要旨抜粋の検索要約）。本文は JSTOR で無料では読めない。
- URL：https://ideas.repec.org/a/aea/aecrev/v82y1992i5p1083-105.html
- 【原典（二次）】協同組合は価格の変化に、雇用より稼ぎ（pay）を動かして応じる。
- 【読み】案 B「雇用は守られなくても配当で補填」と逆向きの実例。働く人が持ち主になると、雇用を守って稼ぎを揺らす方向に動いたことになる。

---

## 2. 日本の従業員持株会

### 2-1. 東京証券取引所「2024 年度従業員持株会状況調査結果の概要」（2026-02-16）

- 状態：**本文照合済**
- URL：https://www.jpx.co.jp/markets/statistics-equities/examination/tvdivq0000001xhe-att/employee_2024.pdf
- 【原典】表 1「従業員持株会状況」（2025-03-31 時点）：
  - 調査対象 3,265 社（東証上場内国会社 3,956 社のうち、証券 5 社と事務委託契約のある会社）
  - 持株会の保有額 8 兆 2,635 億円、調査対象会社の時価総額に占める比率 0.91%（単元数ベースは 0.95%）
  - 加入者 330.2 万人、調査対象会社の従業員数 823.1 万人に対し 40.12%（子会社の従業員も入れるため内数とは限らない）
  - 加入者 1 人当たり平均保有額 250.3 万円
  - 奨励金は 96.6%（3,154 社）が支給。拠出 1,000 円につき平均 107.24 円、最も多いのは 100 円（1,391 社）

### 2-2. 大和総研 瀬戸佑基「企業から見た従業員持株会の意義」（2024-10-07）

- 状態：**本文照合済**
- URL：https://www.dir.co.jp/report/research/capital-mkt/securities/20241007_024658.pdf
- 【原典】要約：上場企業の約 8 割が導入しているが「保有比率は 0.5％未満の企業が多く、『株主としての持株会』の存在感は薄い」（p.1）。NISA などの定着で持株会の魅力が相対的に薄まった可能性（p.1）。
- 【原典】安定株主：日本 IR 協議会 2024 年調査で、安定株主比率を意識する等と答えた企業の 78.2% が安定株主とみなす対象に「従業員持株会」を選ぶ（取引先金融機関 42.7%、政策保有 40.3% より高い）（p.3–4）。
- 【原典】負の面：保有比率が上がると「経営陣への規律付けが弱まる可能性がある」（p.4）。従業員にとって「給与・賞与と株価は共に会社の業績に連動する可能性が高い」ので、過度な出資は「リスクの集中」（p.5–6）。NISA の税の利点がない、株主優待が原則受けられない（p.6）。
- 【原典】効果：Kato, Miyajima & Owan (2016) を引き、1人当たり保有額の増加が付加価値・平均賃金・ROA・トービンの Q に有意に正（p.4）。山本（2016）「ほとんどの研究で従業員持株制度はリテンションに寄与していた」（p.4）。

### 2-3. Kato, Miyajima & Owan (2016) RIETI DP 16-E-073 "Does Employee Stock Ownership Work? Evidence from publicly-traded firms in Japan"

- 状態：**要旨照合済（要約ツール経由）**。本文 PDF（https://www.rieti.go.jp/jp/publications/dp/16e073.pdf ）は未読。
- URL：https://www.rieti.go.jp/en/publications/summary/16060003.html
- 【原典】1989–2013 年、東証上場の 75% 超の会社のパネル。既存の持株会の強さ（1人当たり保有）が増すと生産性が上がり、利益にもつながる。市場はその利得を恒久的と見る（Tobin's Q）。機関・外国の投資家の持ち分が大きいほど利得が大きい、小さく若い会社では限られる（検索要約）。

### 2-4. Jones & Kato (1995) *AER* 85(3), 391–414

- 状態：**二次資料のみ**（RePEc・上海財経大の要旨転載の検索要約）。JSTOR の本文・要旨原文は読めていない。
- URL：https://ideas.repec.org/a/aea/aecrev/v85y1995i3p391-414.html
- 【原典（二次）】持株会（ESOP）の導入で生産性 4〜5% の上昇、3〜4 年かかる。賞与の効果は持株会があると強まる（長期のコミットメントと互いの監視、と著者は解する）。

### 2-5. 持株会が安定株主・買収防衛として使われてきた、という指摘

- 【原典】2-2 の大和総研（IR 協議会の 78.2%）が、企業側の期待としてこれを示す。
- 未照合：日本の持株会と買収防衛を正面から実証した論文（例：持株会の比率と敵対的買収・株主提案の関係）は、今回は探しきれていない。

---

## 3. 落とし穴：給料と資産を同じ会社に寄せる

### 3-1. Enron の 401(k)：Purcell, CRS Report RS21115 "The Enron Bankruptcy and Employer Stock in Retirement Plans"（2002-01-22、改訂 2002-03-11）

- 状態：**本文照合済（要約ツール経由）**
- URL：https://www.everycrsreport.com/reports/RS21115.html
- 【原典】「62% of the assets held in the corporation's 401(k) retirement plan consisted of shares of Enron stock」（2000-12-31 時点）。株価は 2001 年 1 月に 80 ドル超、2002 年 1 月に 70 セント未満。会社の上乗せ拠出の多くは Enron 株で、自社株で上乗せする会社のうち、すぐ売れるのは 15% だけ。
- 二次のみ：「89% は従業員が自分で選んで買った」という CRS 由来の数（PlanSponsor の記事の検索要約）。未照合。
- 二次のみ：失った額「10 億ドル超」（上院公聴会記録・Wharton の記事の検索要約）。
- 【読み】雇用を失うときに株価も下がる、の典型。ただし CRS の本文は失業と年金の損を一緒には論じていない（道具の答え）。「雇用は守られなくても配当で補填」は、会社が傾いて人を減らす場面では配当も株価も同時に落ちる、という形でここに当たる。

### 3-2. 少数の従業員株主の発言力

- 【原典】東証調査で持株会の保有比率は平均 0.91%（2-1）。大和総研は個社で 0.5% 未満が多いとする（2-2）。
- 【原典】Hansmann (2006) は、株主の利害がそろっていることが多数の持ち主を持つ会社の条件だと見る（4-2）。
- 【読み】1% 弱では議決で何も決まらない。日本の持株会は理事長が議決権をまとめて行使する仕組みが多いと言われるが、今回は規約の原文を確かめていない（未照合）。

### 3-3. 株を給料に替えたときの生活の不安定

- 【原典】1-1 の第 3 章：経済的に不安定な働き手ほど、株や選択権より現金賞与・固定給の上乗せのほうがやる気になると答える（p.115）。賃金の代わりに株を渡す（wage substitution）は United Airlines の失敗の要因の一つ（p.127）。
- 【原典】1-3 の IZA：自社株は通常、給料の上乗せで、代わりではない。代わりのときに危うさが大きい。

---

## 4. 顧客が持ち主になる形

### 4-1. Hansmann, *The Ownership of Enterprise*（Harvard UP, 1996）

- 状態：**未照合**（本。無料の本文は無い）。要旨は出版社の紹介・Orts の書評の検索要約だけ（**二次資料のみ**）。
- 【原典（二次）】持ち主の形の向き不向きは「市場で取引する費用」と「持ち主であることの費用」の釣り合いで決まる。顧客所有（小売・卸・供給・公益・クラブ・住宅）に部を割く。

### 4-2. Hansmann, "Ownership and Organizational Form"（Handbook of Organizational Economics の章の草稿, 2006-12）

- 状態：**本文照合済**（草稿 PDF を文字起こし。刊行版とは字句が違いうる）
- URL：https://arken.nmbu.no/~sigury/AOS_234/AOS234%20files/Hansmann_2006_Ownership_and_Organizational_Form.pdf
- 【原典】持ち主が多い会社では、持ち主の利害がそろっていることが「overwhelming rule」。持ち主は一つの種類（出資者・従業員・供給者・顧客）に限られる（P.16, "Collective Decision-Making"）。
- 【原典】「It is rare to see ownership in the hands of a heterogeneous class of patrons regardless of the costs of contracting」。出資者所有が優勢なのは、出資者の利害が容易にそろうから（P.24）。
- 【原典】著者自身、三者以上で利害の違う持ち主が急に減ることに「we seem to lack systematic empirical evidence」と注で認める（P.16 注 10）。
- 【読み】案 C（顧客と従業員の両方に配る）は、この論では最も成り立ちにくい形（利害の違う二種類の持ち主）に当たる。ただし実例はある（4-4 の Eroski）。

### 4-3. 日本の協同組合

- 農協：農林水産省「農協について」（令和 8 年 7 月）、資料は「総合農協統計表」。**本文照合済**。URL：https://www.maff.go.jp/j/keiei/sosiki/kyosoka/k_kenkyu/attach/pdf/index-174.pdf
  - 【原典】令和 6 事業年度：組合員 1,014.8 万人、正組合員 376.6 万人、准組合員 638.2 万人（正組合員の 169%）（p.4 のグラフ）。「准組合員には議決権がなく、農協の事業運営は正組合員である農業者の意思決定により行われている」（p.4）。
  - 【読み】利用する人（顧客に近い准組合員）が持ち主の過半なのに、決める権利は持たない。顧客を持ち主に入れても、決める側に入れるとは限らない例。
- 生協：日本生協連の 2024 年度の概況（全国推計で組合員 3,080 万人、世帯加入率 39.4%）。**二次資料のみ**（日本生協連の資料の検索要約。PDF の取得は失敗）。URL 候補：https://jccu.coop/info/up_item/release_20260622_03_01.pdf
- 相互保険：第一生命は 2010 年に相互会社から株式会社へ移り、契約者に株を割り当てた（**二次資料のみ**：Japan Spotlight・Wikipedia の検索要約。https://www.jef.or.jp/journal/pdf/169th_finance.pdf ）。金融審議会の中間報告（2001-06）は、諸外国で自由度と自己資本の観点から株式会社化が進むと記す（**二次資料のみ**：検索要約。https://www.fsa.go.jp/singi/singi_kinyu/tosin/f-20010626-2.pdf ）。総代会の形骸化を正面から論じた論文は今回見つけていない（未照合）。
  - 【読み】「顧客に株を配る」は、日本ではすでに、顧客所有（相互会社）から出資者所有に移るときの手続きとして行われた。向きが案 C と逆。

### 4-4. 海外の例

- Vanguard：「Vanguard is owned by its U.S. funds, which in turn are owned by their shareholders.」（同社サイト、**二次資料のみ**：検索要約。https://corporate.vanguard.com/content/corporatesite/us/en/corp/why-vanguard/sets-us-apart/ownership.html 。ページの直接取得は 404）。
- REI：2024 年に純損失 1 億 5,640 万ドル、会員 2,500 万人超、会員への還元 1 億 8,900 万ドル。財務諸表では「dividend portion」は 2024 年にほぼ 0 で、還元の多くは販促分（**二次資料のみ**：REI の発表と財務諸表の検索要約。https://www.rei.com/newsroom/article/rei-co-op-releases-2024-impact-report-and-financials-becoming-first-national-retailer-to-achieve-zero-waste ）。
  - 【読み】顧客所有の「配当」は、利益が出なければ出ない。会社が「配当」と「販促」を年ごとに決められる仕組みでもある。
- Mondragón（働く人の所有）・Fagor Electrodomésticos の破綻（2013）：Eurofound の再編の記録で、2,093 人に影響、うち組合員 1,603 人。約 1,200 人をグループの他の組合（Orona・Batz など）へ移し、約 900 人を解雇の見込み（**要旨照合済（要約ツール経由）**。2013-10-30 発表、数字は途中の更新）。URL：https://apps.eurofound.europa.eu/restructuring-events/detail/76090
  - 原因の評価は分かれる（市場の条件／協同組合の意思決定の遅さ・人事の方針）。**二次資料のみ**（Arando & Arenaza 2018 の章、UPV/EHU の研究の検索要約）。
  - 【読み】働く人が持ち主でも、会社が潰れれば雇用は失われる。救ったのは所有ではなく、グループの中で人を移す仕組み（協同組合どうしの連携）。
- Eroski（Mondragón の小売）：統治評議会と総会を消費者会員 50%・労働者会員 50% で構成する、と同社が書く（**二次資料のみ**：同社サイトの検索要約。https://corporativo.eroski.es/en/?p=12081 ）。2022 年末で労働者会員 9,500 人、消費者会員 130 万人超。
  - 【読み】案 C（顧客と従業員の両方を持ち主に）にいちばん近い実例。Hansmann の言う「まれ」だが、ある。

---

## 5. ステークホルダー資本主義の制度の別の形

### 5-1. ドイツの共同決定：Jäger, Schoefer & Heining (2021) "Labor in the Boardroom"

- 書誌：*Quarterly Journal of Economics* 136(2), 669–725（NBER WP 26519）
- 状態：**要旨照合済（要約ツール経由）**
- URL：https://www.nber.org/papers/w26519
- 【原典】1994 年 8 月以降に設立の株式会社で取締役会の 3 分の 1 を働く人にする義務がなくなった改革を使う。「We find no effects of board-level codetermination on wages and the wage structure」。レントの分け合い・労働分配率も変わらない。資本の蓄積はむしろ増える。
- 【読み】発言（声）で分け合う形でも、賃金は変わらなかった。所有で分け合う形とは別の道で、効果の物差しも違う。

### 5-2. John Lewis Partnership（従業員の信託所有）

- 状態：**二次資料のみ**（報道の検索要約：City AM・LBC・Retail Gazette ほか）。年次報告の原文は未読。
- 【原典（二次）】2024/25 年度は税引前利益（特別項目前）が 4,200 万ポンドから 1 億 2,600 万ポンドに増えたが、パートナー賞与は出さず、賃金に 1 億 1,400 万ポンドを回した。2025/26 年度に給与の 2%（1 週分）で賞与を 4 年ぶりに復活。
- 【読み】従業員所有でも、利益の分け前は毎年出るとは限らない。賞与ゼロの年が数年続いた。外部資本を一部入れる案が報じられたこともあるが、今回は確かめていない（未照合）。

### 5-3. 財団所有：Thomsen, Poulsen, Børsting & Kuhn (2018) "Industrial foundations as long-term owners"

- 書誌：*Corporate Governance: An International Review* 26(3), 180–196. doi:10.1111/corg.12236（CC BY）
- 状態：**本文照合済**
- URL：https://research-api.cbs.dk/ws/portalfiles/portal/57312667/steen_thomsen_et_al_industrial_foundations_as_long_term_owners_publishersversion.pdf
- 【原典】デンマークのデータで、財団所有は所有が安定し、経営者の交代が少なく、負債が少なく、「score higher on an index of long‐termism in finance, investment, and employment」、長く存続する（abstract, p.180）。「stable, long‐term employers (Børsting & Thomsen, 2017)」（本文）。
- 【原典】因果の向きは「some unresolved questions regarding the direction of causality remain」（結びの限界の節）。
- 【読み】雇用の長さを所有の形で支える道として、従業員所有より財団所有のほうが直接の証拠を持つ。ただし持ち主は顧客でも従業員でもない。

### 5-4. Business Roundtable 2019 の声明と、Bebchuk & Tallarita (2020)

- 声明：2019-08-19、181 人の CEO が署名。「we share a fundamental commitment to all of our stakeholders」（**二次資料のみ**：報道の検索要約。声明の原文は未読）。
- Bebchuk & Tallarita, "The Illusory Promise of Stakeholder Governance," *Cornell Law Review* 106: 91–178 (2020)
  - 状態：**要旨照合済（要約ツール経由）**（Cornell Law Review のページ、Harvard Law School Forum の紹介記事）。SSRN は 403 で読めなかった。
  - URL：https://publications.lawschool.cornell.edu/lawreview/2020/12/01/the-illusory-promise-of-stakeholder-governance-2 ／ http://corpgov.law.harvard.edu/2020/03/02/the-illusory-promise-of-stakeholder-governance/
  - 【原典】「Stakeholderism, we conclude, is an inadequate and substantially counterproductive approach to addressing stakeholder concerns.」「Stakeholderism should be rejected, including and especially by those who take stakeholder interests seriously.」（Cornell のページの要旨）
  - 【原典】声明は「largely a rhetorical public relations move」で、大きな変化は期待できず、署名者もほとんど意図していなかった。ステークホルダーへの約束がコーポレートガバナンス・ガイドラインに反映されていないことを挙げる（Harvard Forum の紹介, Part IV の要約）。
  - 【原典（二次）】守りは、立法・規制・政策の設計による外からの介入で行うべき、とする（検索要約）。
  - 未照合：署名企業のうち取締役会の承認を得たのは何社か、という数（本文にあると記憶するが、読めた範囲には無かった）。
  - 【読み】ここは野中の評価（声明を前向きに紹介）と向きが逆。Bebchuk らの代わりの道は「外のルール」で、pjdhiro の「ルールの中で持ち主を入れ替える」とも違う第三の道。

---

## 6. 「株主になる権利は誰にでもある」に関わる日本の統計

- 日本銀行調査統計局「資金循環の日米欧比較」（2026-08-31、2026 年 3 月末）。**本文照合済**。URL：https://www.boj.or.jp/statistics/sj/sjhiq.pdf
  - 【原典】図表 2「家計の金融資産構成」：日本（2,386 兆円）現金・預金 47.2%、株式等 16.7%、投資信託 6.9%、保険・年金・定型保証 24.5%。米国 株式等 43.4%、投資信託 13.3%。ユーロエリア 株式等 25.5%。
- 金融庁「NISA 口座の利用状況（令和 7 年 12 月末時点）」の図（2026-07-03 公表、訂正後）。**本文照合済**。URL：https://www.fsa.go.jp/policy/nisa/20260703/2512nisa-graph.pdf
  - 【原典】NISA 口座 2,821 万（目標：2027 年末までに 3,400 万）、累計買付 71 兆円（目標 56 兆円）。
- 東証ほか「2024 年度株式分布状況調査の調査結果について」（2025-07-04）。**本文照合済**。URL：https://www.fse.or.jp/files/sta_dis/j-bunpu2024.pdf
  - 【原典】個人・その他の保有比率 17.3%（外国法人等 32.4%、事業法人等 18.7%）。個人株主の延べ人数 8,359 万人、名寄せ後（ほふりの資料）約 1,599 万人。
- 【読み】権利は誰にでもあるが、株を持つ人は名寄せで約 1,600 万人、家計の資産に占める株式は 2 割弱。「持ち主を入れ替える」には、配る量より、すでに株を持たない人に届くかが問われる。NISA は持株会の魅力を相対的に下げている、という大和総研の指摘（2-2）とも重なる：分散した株（NISA の投信）と、勤め先の株（持株会）は、資産形成の手段として競合している。

---

## 7. 三つの案と、近い形・効果・条件と落とし穴

| | 案 A 持株会などで対応する | 案 B 給料を株で払い、雇用は守られなくても配当で補う | 案 C 顧客と従業員に株を配る |
|---|---|---|---|
| すでにある近い形 | 日本の従業員持株会（上場の約 8 割、加入 330 万人、保有比率 0.91%）〔2-1・2-2〕。米国の ESOP・401(k) の自社株〔1-4・3-1〕。英国 John Lewis の信託所有〔5-2〕 | 米国のストックオプション・自社株での上乗せ拠出〔1-1〕。United Airlines の従業員買収（賃金を譲って株を得た）〔1-1 第 3 章〕。Enron の 401(k) の自社株での上乗せ〔3-1〕 | 顧客所有：生協・農協・相互保険・Vanguard・REI〔4-3・4-4〕。両方：Eroski（消費者 50%・労働者 50%）〔4-4〕。顧客に株を渡した例：第一生命の株式会社化（2010）〔4-3〕 |
| 分かっている効果 | 業績へは平均で小さな正（r=0.04、ばらつきは負にも及ぶ）〔1-2〕。日本でも生産性・賃金・ROA・Q に正〔2-3・2-4〕。不況時の解雇が半分（因果は固くない）〔1-4〕。定着に寄与〔2-2〕 | 株が給料の上乗せなら効果の報告は 案 A と同じ〔1-3〕。給料の代わりにした例では効果の裏付けは見つからず、失敗例が挙がる〔1-1 第 3 章〕。働く人の所有は、雇用より稼ぎを揺らして守る方向に動いた〔1-5〕 | 顧客所有は特定の業種（保険・卸・農業・公益）で長く続く〔4-1・4-2〕。財団所有は長期の雇用と結びつく（持ち主は顧客でも従業員でもない）〔5-3〕。顧客と従業員の両方の所有の効果は、まとまった実証を見つけていない |
| 言われている条件 | 参加・雇用保障・訓練などの支えと組で効く〔1-3〕。量は資産の 10〜15% までなら分散を大きく損なわない〔1-1 第 3 章〕。奨励金の水準〔2-2〕 | 経済的に不安定な働き手には効果が逆になる〔1-1 第 3 章〕。ESOP が比較的安全なのは働き手の資金で買わせず、賃金を譲らせないとき〔1-1 第 3 章〕 | 持ち主の利害がそろっていること（多数の持ち主では「圧倒的な決まり」）〔4-2〕。決める権利の配り方（農協の准組合員は議決権なし）〔4-3〕 |
| 言われている落とし穴 | 給与と株価が同じ業績に連動する（リスクの集中）〔2-2・3-1〕。保有が小さく発言力がない〔2-1・2-2〕。安定株主・防衛として使われ、経営への規律が弱まりうる〔2-2〕。NISA に比べ税の利点がない〔2-2〕 | 会社が傾いて人を減らすとき、配当も株価も同時に落ちる（Enron：401(k) の 62% が自社株、株価 80 ドル→1 ドル未満）〔3-1〕。賃金の代わりの株は生活を不安定にする〔1-1・1-3〕 | 利害の違う二種類の持ち主は集団の意思決定の費用が高く、まれ〔4-2〕。顧客の持ち分は名目になりやすい（議決権なし・配当が販促に置き換わる）〔4-3・4-4〕。日本では向きが逆（顧客所有→株式会社）の動きがあった〔4-3〕。既存の株主の持ち分が薄まる（【読み】） |

【読み】三つを並べて見えること（判定ではなく、資料の向き）：
- 資料が支えるのは、案 A の「上乗せとしての所有」。案 B の「代わりとしての所有」は、同じ研究者たちがいちばん強く警告する形。
- 「雇用は守られなくても配当で補填」は、配当と雇用が同じ会社の業績から出る限り、両方が同時に落ちる場面に弱い。補うなら、勤め先でない株（分散した株・NISA）で持つほうが論の上では筋が通る（Blasi, Kruse & Markowitz の分散の論）。ただしそれは「持ち主を入れ替える」ではなく「家計が株主になる」に近い。
- 案 C は Hansmann の論が最も難しいと見る形だが、Eroski という実例がある。効いた理由・効かなかった理由の実証は、今回の範囲では見つけていない。
- 野中の論に「仕組み」を足す方向の資料は、所有（持株会・財団・信託）、声（共同決定）、外のルール（Bebchuk）の三つに分かれる。終身雇用（雇用の長さ）に直接の証拠があるのは、不況時の解雇の少なさ（米国の従業員所有）と財団所有の長期性で、どちらも因果は固く言えないと著者自身が書く。

---

## 8. 読めた・読めなかった文献

### 読めた（本文）
- O'Boyle, Patel & Gonzalez-Mulé 2016（PDF）
- Blasi, Kruse & Markowitz 2010（NBER の章 c8088・WP 14229）
- Kruse, IZA World of Labor v2（前半、要約ツール経由）
- 東証 2024 年度従業員持株会状況調査
- 大和総研 2024-10-07
- Purcell, CRS RS21115（要約ツール経由）
- Hansmann 2006 の Handbook 草稿
- Thomsen ほか 2018
- 日銀「資金循環の日米欧比較」2026-08-31
- 金融庁 NISA の図（2025 年 12 月末）
- 東証ほか 2024 年度株式分布状況調査
- 農林水産省「農協について」（令和 8 年 7 月）

### 要旨・紹介だけ
- Shared Capitalism at Work の目次（NBER）
- Kato, Miyajima & Owan 2016（RIETI の要旨）
- Jäger, Schoefer & Heining 2021（NBER の要旨）
- Bebchuk & Tallarita 2020（Cornell Law Review の要旨、Harvard Forum の紹介）
- Eurofound の Fagor の記録

### 二次資料のみ
- Kurtulus & Kruse 2017（Rutgers の発表・Upjohn の紹介）
- Jones & Kato 1995（RePEc の要旨転載）
- Craig & Pencavel 1992（RePEc の要旨抜粋）
- Hansmann 1996（出版社の紹介・書評）
- 生協の組合員数（日本生協連の資料）
- 第一生命の株式会社化
- 金融審議会 2001
- Vanguard・REI・Eroski（各社のサイトの検索要約）
- John Lewis（報道）
- BRT 声明の原文

### 読めなかった・未照合
- Kurtulus & Kruse の本と Employment Research の記事の PDF（HTML が返る）
- SSRN（403）
- Hansmann 1996 の本文（本）
- Shared Capitalism の第 3 章以外の章（未着手）
- Enron の「89% は自発的購入」の数
- BRT 署名企業の取締役会承認の数
- 日本の持株会と買収防衛の実証論文
- 相互会社の総代会の形骸化の論文
- 持株会の議決権行使の規約
