# 薬学：記録から外した作業の節

`cs/evidence/evidence-D11-pharmacy.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D11-pharmacy.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（75〜86 行） | 10 | 強い 5（パイプライン・PK/PD・耐性・QbD・相互作用）・部分 5 |
| ja の本文（88 行・218 行）と Colophon（236 行） | 10 | 強い 4・部分 6。218 行は「4件で全5段階にわたる強い対応」と書くが、表で全5段階かつ強いのは PK/PD・耐性・QbD の 3 つ |
| en（47 行・147 行） | 10 | 縁と強く対応するもの 6・部分 4（退避版 392 行の縁フラグ🔴 6・🟡 4 と同じ） |
| pres（23 行・45〜47 行） | 10 | 確定に近い 5（QbD・PK/PD・耐性・相互作用・ファーマコゲノミクス）・有力 3・条件つき 2。23 行は「条件付きの対応 1件」と書き、45〜47 行と合わない |
| 退避版（390〜392 行） | 10 | Accept 10・縁フラグ🔴 6・🟡 4 |
| 調べた跡 phase5（23 行） | 10 | Anchor 3（耐性・QbD・相互作用） |

五つの版で、「強い」に当たる論の数と顔ぶれがそろっていません。英語版は日本語版の訳でなく、退避版の縁フラグの数を写しています。

### 横断の節は報告の作った分け方

報告の横断の節（ja 182〜200 行、en 114〜136 行）の「縁の制御可能性スペクトラム」「プロセスの制度化」「束→場循環の追跡可能性」「場の個別性」と、英語版の「Fractal Structure Across Scales」は、どの原典にもありません。

- 「縁のスペクトラム」（構造ベース創薬→プロドラッグ→PK/PD・ファーマコゲノミクス→相互作用）は、調べた跡 phase6 86 行・107 行・129 行と phase7 7 行が作った並びです。原典で見ると、構造ベース創薬は折り合いを、プロドラッグとファーマコゲノミクスは遺伝の型で活性にならない形を、相互作用は広げて推し量る手順とその限界を書いていて、「制御できる度合い」の一本の軸には並びません。
- 「関係の制度化」は、ICH の定義の「相互作用」の語と、漢方の「配伍」の語と、相互作用のガイダンスを、語が同じことでまとめています（規約で決めたこと「語が同じことを対応の根拠に数えない」）。
- 「束→場循環」は、耐性の節の上のとおり、原典では薬が負けて開発が戻る形です。
- 「フラクタル」は、退避版 406 行（L-3）の言い方です。

### 至らない形を外に置いていること

報告は、相互作用の害を「『創発』という用語が持つポジティブな含意との距離」として（ja 164 行）、PK/PD・徐放・QbD を「創造との距離がある」ものとして（ja 110 行・142 行・206 行）、外に置きかけています。原典には、次の至らない形が手順の中に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| パイプライン | 大半の候補は承認に届かない。当てにならない模型では偽の陽性がたまる（Wong ら §4.1・§4.4、Scannell & Bosley） | 段階ごとの成功の確率、模型の当てになり具合 |
| PK/PD | 足りない用量は効かず、多すぎる用量は毒。減らせない差が残る（Holford） | 狙う濃度と、範囲の上下の端 |
| 耐性 | 足りない量で耐性が育ち、治療が効かない。入れ替えでは耐性が消えない。段差が大きすぎると適応が止まる（Fleming pp.92–93、Davies p.429、Baym ら） | 殺すのに足りる濃度か、濃度の段差の大きさ、補う変異 |
| 君臣佐使 | 害し合う組み合わせ（相悪・相反）は使わない。毒は抑える薬と組む（『神農本草経』序録） | 七情の組み合わせ |
| QbD | 品質を満たせない「失敗の縁」。消しきれない危険。回収と逸脱（Q8 付属書 p.13、Q9 p.5、Q10 pp.8–9） | 失敗の縁、受け入れる危険の水準 |
| プロドラッグ | 酵素の働きが弱いと活性にならない（Relling & Evans） | 遺伝の型 |
| ファーマコゲノミクス | 検査の政策が別の薬への切り替えを招き、害は減らなかった（Relling & Evans） | 代わりの薬の害が分かっているか |
| 相互作用 | 予期しない相互作用で、承認の直後に市場から引き上げられた（Zhang ら） | 予測の模型が写せる範囲 |
| 構造ベース創薬 | 合う強さだけでは薬にならず、折り合いが要る（van Montfort & Workman） | 一つの分子に両立できる性質 |

並べ方で見ると、耐性は片方の勝利（薬が負けて場に戻る）、相互作用での引き上げとパイプラインで止まる候補は場に戻る形、QbD の受け入れた危険は危険を抱えたままの統合（悪い統合とも読めます）です。善悪で分けず、統合に至ったかどうかで並べています（調べ方の計画と規約の中心の問い）。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30 行・38 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（88 行）、「安全弁」（90〜92 行）、「結びの温度開示」（224〜228 行）、「Colophon」（230〜240 行）。44〜49 行の「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」は、文責を pjdhiro に置いています（writing §1-1・§1-8）。pres 45〜47 行と 105 行の「確定に近い」「温度帯」、pres 23 行の「判定結果」も同じテンプレートです。英語版には、これらの表示がありません。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 「日本薬学会 (2024)」 | DR 59 行・80 行。退避版 175 行・185 行に写り、台帳の「日本薬学会 2009」の行にも入った |
| 「Paul et al. 2010の推定で約11.8%」 | 退避版 34 行（「他の大規模推定では約13.8%」と並べる。13.8% は Wong ら 2019 の数） |
| 判定の数が版ごとに違う | ja 本文の 4 は出どころが分からない（phase5 の Anchor は 3）。en の 6 は退避版 392 行の縁フラグ🔴 6。pres の三つの温度は退避版にも phase5 にも無い |
| 「縁のスペクトラム」 | 調べた跡 phase6 86 行・107 行・129 行（H2）、phase7 7 行、退避版 L-4（408 行） |
| 「フラクタル」 | 退避版 74 行・181 行・298 行・406 行、調べた跡 phase6 21 行 |
| 「未決定性を制度的に保証」 | 退避版 216〜218 行（縁フラグの「未決定性」の欄） |
| 「組み合わせ爆発で事前予測が原理的に困難」 | 退避版 321 行、調べた跡 phase5 127 行・phase6 83 行 |
| 「起動スイッチ」「適切な出会いまで反応せず保持する」 | 退避版 247 行・255 行、調べた跡 phase6 65 行・68 行・113〜115 行（抱持との類似を問う節） |
| 「ゲノム型判明まで未決定」 | 退避版 285 行 |
| 「Higuchi式が波を定量化」 | 調べた跡 phase6 38 行 |
| 「耐性の自己組織化」 | 調べた跡 phase5 186 行 |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「『似ている』ではなく『規制語彙が同じ構造を記述している』と言いうる堅固な対応であり、薬学で最も強い構造類似を示す事例」（142 行）、「縁との最も直接的な対応」（132 行）、「5段階の定量的記述が可能な稀有な事例」（108 行）、「全30領域を通じても稀少」（220 行）、「一領域内で完全に示す」（220 行）。
- 型 H（原典に無い体系）：「縁の制御可能性スペクトラム」（182〜188 行）、「意識的な螺旋」（196 行）、「場の解像度」（200 行）、en の「Fractal Structure Across Scales」（132 行）。
- 型 B・C（二つに切る・範囲を狭める）：「5段階モデルは『創造のプロセス』か『プロセス一般』か」（206 行）、「自然に自己組織化するもの（耐性進化）と、設計者が意図的に反復するもの（品質管理循環）」（61 行）、「『創発』という用語が持つポジティブな含意との距離」（164 行）。
- 型 J（擬人化）：「設計者が縁の発生を信頼して待つ設計」（148 行）。
- 抱持の語の持ち込み：「適切な出会いまで反応せず保持する」（148 行。調べた跡 phase6 113〜115 行から）。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- wiki の頁「Li 2014」 58 行：DOI が 10.1371/journal.pone.0105865 で、Crossref では Lima ら「Cytoxicity and Apoptotic Mechanism of Ruthenium(II) Amino Acid Complexes in Sarcoma-180 Tumor Cells」（PLoS ONE 2014）を指す。正しくは 10.1371/journal.pone.0095004（同じ頁の 57 行の「e95004」と精読ノート「Li ら 2014」 16 行は正しい）。
- 同じ頁 3 行・17 行：「気参益気滴丸」は「芪参益気」（芪は黄芪）の誤字。
- 精読ノート「Davies 2010」 118 行：「The tragedy is that most pharmaceutical companies are now shirking…」の頁が p.428 で、手元の PDF では p.430。
- 台帳の「Higuchi 1963」の行：OA の代わりに挙げる「Mathematical Modeling of Local Drug Delivery 2024 PMC12845442」は、Crossref では Rakoczy ら（2026）*Pharmaceutics* 18(1), 101（口の中の局所の製剤の総説）。Higuchi と Korsmeyer の原典の照合の代わりにはならない。
- 台帳の「日本薬学会 2009」の行：「日本薬学会 (2024)」は、用語解説の掲載が 2009-05-25、更新が 2014-07。今のサイトは 2026-11-09 に 500 を返し、Wayback の記録で読める。
- 台帳の「ICH 2023」の行：手元の PDF は 2025-01-15 の小さな訂正の版（ファイルの題）。採択は 2023-01-18 のまま。

精読ノート「Davies & Davies 2010」のほかの引用の頁（p.417・p.418・p.419・p.423・p.429）と、台帳の「Wu ら 2014」の行の引用（p.1・p.8）は、読んだ所では原典と合っていました。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- 君臣佐使は東洋の像なので、原典の文脈で照合しました（writing §2-9）。『素問』と『神農本草経』で君臣の定め方が違うことは、どちらを正とするかを決めず、両方を書きました（型 B「両立する面として書けないか」）。
- 日本薬学会の用語解説の今の頁は 500 を返したので、Wayback Machine の記録で読み、二次資料としました。学会のサイトの記録なので出所は書けますが、用語解説は学術の論でも原典でもありません。
- ICH のガイドラインは、規制の当局と業界が定めた手順の文書で、設計者の意図が入っています。「本文照合済」は、文書の本文を読んだという意味で、現象の理論を確かめたという意味ではありません。
- プロドラッグの節で、報告の言い方が抱持の語の言い換えから来ていることを、調べた跡で確かめました。旧い規則の「欠損駆動思考・抱持を持ち込まない」の行に当たるので、付け足しとしました。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Wong, C. H., Siah, K. W. & Lo, A. W. (2019). Estimation of clinical trial success rates and related parameters. *Biostatistics* 20(2), 273–286. DOI 10.1093/biostatistics/kxx069 | PMC6409418（CC BY。NCBI の efetch で XML） | 取得先を確かめた |
| Scannell, J. W. & Bosley, J. (2016). When Quality Beats Quantity: Decision Theory, Drug Discovery, and the Reproducibility Crisis. *PLOS ONE* 11(2), e0147215. DOI 10.1371/journal.pone.0147215 | PMC4749240 | 取得先を確かめた |
| Scannell, J. W., Blanckley, A., Boldon, H. & Warrington, B. (2012). Diagnosing the decline in pharmaceutical R&D efficiency. *Nat. Rev. Drug Discov.* 11, 191–200. DOI 10.1038/nrd3681 | Nature（有料。取得を試していない） | 書誌だけ |
| Holford, N. (2018). Pharmacodynamic principles and target concentration intervention. *Transl. Clin. Pharmacol.* 26(4), 150. DOI 10.12793/tcp.2018.26.4.150 | PMC6989251 | 取得先を確かめた |
| Holford, N. H. G. & Sheiner, L. B. (1981). Understanding the Dose-Effect Relationship. *Clin. Pharmacokinet.* 6(6), 429–453. DOI 10.2165/00003088-198106060-00002 | https://hdl.handle.net/2292/33245 （オークランド大学のリポジトリ。自動取得で確認の画面） | 自動では取れない |
| Fleming, A. (1945). Penicillin（ノーベル講演）. *Nobel Lectures, Physiology or Medicine 1942–1962*, pp.83–93 | https://www.nobelprize.org/uploads/2018/06/fleming-lecture.pdf | 手元に保存した（保存名の案手元の PDF） |
| Melnyk, A. H., Wong, A. & Kassen, R. (2015). The fitness costs of antibiotic resistance mutations. *Evol. Appl.* 8(3), 273–283. DOI 10.1111/eva.12196 | PMC4380921 | 取得先を確かめた |
| Baym, M., Lieberman, T. D., Kelsic, E. D. ら (2016). Spatiotemporal microbial evolution on antibiotic landscapes. *Science* 353(6304), 1147–1151. DOI 10.1126/science.aag0822 | PMC5534434（著者稿） | 取得先を確かめた（著者稿） |
| Andersson, D. I. & Hughes, D. (2010). Antibiotic resistance and its cost: is it possible to reverse resistance? *Nat. Rev. Microbiol.* 8(4), 260–271. DOI 10.1038/nrmicro2319 | Nature（有料。Unpaywall の Zenodo の記録は API で取れなかった） | 書誌だけ |
| 『黄帝内経素問』至真要大論 | https://ctext.org/huangdi-neijing/zhi-zhen-yao-da-lun/zh （パブリックドメイン） | 取得先を確かめた |
| 陶弘景『本草經集注』序錄上（『神農本草経』序録の本文を含む） | https://zh.wikisource.org/wiki/本草經集注/序錄上 （パブリックドメイン） | 取得先を確かめた |
| Siepmann, J. & Peppas, N. A. (2011). Higuchi equation: Derivation, applications, use and misuse. *Int. J. Pharm.* 418(1), 6–12. DOI 10.1016/j.ijpharm.2011.03.051 | Elsevier（有料） | 書誌だけ |
| Rakoczy, R. ら (2026). Mathematical Modeling of Local Drug Delivery in the Oral Cavity. *Pharmaceutics* 18(1), 101. DOI 10.3390/pharmaceutics18010101 | PMC12845442 | 取得先を確かめた（二次資料。台帳の「Higuchi 1963」の行の「OA代替」の書誌を直したもの） |
| Yu, L. X., Amidon, G., Khan, M. A. ら (2014). Understanding Pharmaceutical Quality by Design. *AAPS J.* 16(4), 771–783. DOI 10.1208/s12248-014-9598-3 | PMC4070262（XML は要旨だけ。記事の頁の HTML で全文） | 取得先を確かめた |
| Rautio, J., Kumpulainen, H., Heimbach, T. ら (2008). Prodrugs: design and clinical applications. *Nat. Rev. Drug Discov.* 7, 255–270. DOI 10.1038/nrd2468 | Nature（有料） | 書誌だけ |
| Huttunen, K. M., Raunio, H. & Rautio, J. (2011). Prodrugs—from Serendipity to Rational Design. *Pharmacol. Rev.* 63(3), 750–771. DOI 10.1124/pr.110.003459 | ASPET（自動取得で 403） | 自動では取れない |
| Relling, M. V. & Evans, W. E. (2015). Pharmacogenomics in the clinic. *Nature* 526, 343–350. DOI 10.1038/nature15817 | PMC4711261（著者稿） | 取得先を確かめた（著者稿） |
| Evans, W. E. & McLeod, H. L. (2003). Pharmacogenomics—drug disposition, drug targets, and side effects. *N. Engl. J. Med.* 348, 538–549. DOI 10.1056/NEJMra020526 | NEJM（有料） | 書誌だけ |
| Huang, S.-M., Temple, R., Throckmorton, D. C. ら (2007). Drug interaction studies: study design, data analysis, and implications for dosing and labeling. *Clin. Pharmacol. Ther.* 81(2), 298–304. DOI 10.1038/sj.clpt.6100054 | Wiley（有料） | 書誌だけ |
| Zhang, L., Zhang, Y. D., Zhao, P. & Huang, S.-M. (2009). Predicting Drug–Drug Interactions: An FDA Perspective. *AAPS J.* 11(2), 300–306. DOI 10.1208/s12248-009-9106-3 | PMC2691466（記事の頁の HTML） | 取得先を確かめた |
| ICH (2024). M12 Drug Interaction Studies. Adopted 21 May 2024 | https://database.ich.org/sites/default/files/ICH_M12_Step4_Guideline_2024_0521.pdf | 手元に保存した（保存名の案手元の PDF） |
| Anderson, A. C. (2003). The Process of Structure-Based Drug Design. *Chem. Biol.* 10(9), 787–797. DOI 10.1016/j.chembiol.2003.09.002 | cell.com（Unpaywall は bronze。自動取得で 403） | 自動では取れない |
| van Montfort, R. L. M. & Workman, P. (2017). Structure-based drug design: aiming for a perfect fit. *Essays Biochem.* 61(5), 431–437. DOI 10.1042/EBC20170052 | PMC5869280 | 取得先を確かめた |

既存の行に書き足す案：

- 台帳の「Paul ら 2010」の行（Paul ら 2010）：Unpaywall は閉じた論文。段階ごとの成功率は台帳の「Wong ら 2019」の行（Wong ら 2019）で確かめられる。
- 台帳の「Davies & Davies 2010」の行（Davies & Davies 2010）：手元の PDF の表紙は ASM の誌面。p.430 の引用の頁は精読ノートと違う（上の「精読ノートと wiki・台帳の誤り」）。
- 台帳の「Higuchi 1963」の行：「OA代替」の書誌を台帳の「Rakoczy 2026」の行に直す。
- 台帳の「日本薬学会 2009」の行：題を「薬学用語解説『君臣佐使』（2009-05-25 掲載、2014-07 更新）」に。今のサイトは 500。Wayback：http://web.archive.org/web/20230204154408/https://www.pharm.or.jp/dictionary/wiki.cgi?%E5%90%9B%E8%87%A3%E4%BD%90%E4%BD%BF
- 台帳の「ICH 2023」の行：手元の PDF は 2025-01-15 の小さな訂正の版。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- この分野の論の多くは、人が定めた手順と規則の文書でした。原典が書くのは現象の理論ではなく、利益と害の兼ね合いを取り決める手順でしたが、その手順の中に、失敗（失敗の縁・回収・逸脱・害し合う組み合わせ・引き上げ）がはっきり書かれていました。
- 有料の原論文（Nature Reviews・NEJM・Wiley・Elsevier）は、同じ論の中の OA の論文（Wong ら・Scannell & Bosley・Melnyk ら）、PMC の著者稿（Relling & Evans・Baym ら）、著者の後の解説（Holford 2018）、ノーベル講演（Fleming）、公式のガイドライン（ICH M12）で、論の芯に当たれました。
- 君臣佐使は、ctext と維基文庫の原文で、語の出どころの二つの古典に当たれました。二つの古典で定め方が違い、報告の四つの役の説明は後の整理でした。
- 頼む文に書かれた当たりのうち、Zhang ら（2009）の誌名（Drug Metab. Dispos.）は違い、Crossref では AAPS J でした。頼む文の書誌も Crossref で照らしてから使うと、取り違えを避けられます（型 H の確認）。
- 台帳の「OA代替」が、別の主題の新しい総説を指していることがありました。台帳の代わりの文献も、書誌を Crossref で照らしてから使います。
- PMC の efetch の XML は、Springer の雑誌（AAPS J）では要旨だけでした。そのときは PMC の記事の頁（HTML）で全文が読めました。Europe PMC の fullTextXML は、この日はどれも 500 を返しました。
- 学会のサイトの今の頁がサーバーの誤り（500）を返したときは、Wayback Machine の記録で読めました。確認画面とは分けて書きました。米国 FDA のガイダンスの頁は 404 で、置き場が変わったかは確かめていません。
