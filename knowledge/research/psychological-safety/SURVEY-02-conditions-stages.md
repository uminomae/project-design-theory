# SURVEY-02 効く条件と段階（pd#151）

## 状態

- 日付: 2026-11-06。担当: team-researcher（opus）。共通指示 `BRIEF-researchers.md` に従う。
- 中心の問い: 心理的安全性は、どんな仕事・どんな組織で、成果や学習と結びつき、どんなときに結びつかない（あるいは逆に働く）か。pjdhiro の見立て「軍隊型の、個人を部品のように扱う組織では心理的安全性は低いと思うけど、そのほうが機能するかもしれない。サービスやデザインなど無形のものを扱うときに有効」「心理的安全性には段階がある。段階ごとにフィットする組織がある」に、研究が何を言うか。
- 本文を取得して照合したもの（6 点）: Frazier ら 2017（`本文照合済（ブラウザ内で閲覧・ローカル本文なし・再照合不可）`。ODU Digital Commons の出版社版 PDF をブラウザ内で pdf.js により読んだ。ファイルとしては保存できていない。`.cache/raw` にあった PDF 名のファイルは Cloudflare の確認画面の HTML で、`frazier-2017-CLOUDFLARE-BLOCK-not-the-paper.html` に改名済み。下の「取れなかったもの」）、Edmondson & Bransby 2023（CC BY 4.0・保存済み）、Swain ら 2024（CC BY 4.0・保存済み）、Helmreich ら 1999（著者版・FAA 掲載・保存済み）、Clark の LeaderFactor 技術報告書（reginfo.gov 掲載・保存済み）、Nubuor ら 2026（Frontiers・JATS XML を読んだ。XML は一時ファイルで `.cache/raw` に無く、ローカル本文なし）。
- 要旨（出版社・Crossref・EuropePMC・大学 CRIS）で照合したもの: Sanner & Bunderson 2015、Eldor ら 2023、Edmondson 1996、Pearsall & Ellis 2011、Anicich ら 2015、Koopmann ら 2016、Deng ら 2019、Gerlach & Gockel 2022、Marlow ら 2025、Kessel ら 2012、Baer & Frese 2003、Hedlund & Österberg 2013、Kang 2024。
- 取れなかったもの: Sanner & Bunderson 2015 本文、Eldor ら 2023 本文、Edmondson 1996 本文、Pearsall & Ellis 2011 本文、Clark 2020 の書籍本文。試した経路は末尾「取れなかったもの」。
- 保存先: `.cache/raw/psychological-safety/`（`edmondson-bransby-2023-annrev.pdf`・`swain-2024-armed-forces.pdf`・`helmreich-1999-crm-evolution.pdf`・`clark-4stages-team-survey-technical-report.pdf` と各 `.txt`）。
- 作業中の事故の記録: ODU の PDF の URL を Browser pane で直接開いたところ、ブラウザが「ファイルの保存」ダイアログを pjdhiro の画面に出した（保存は実行していない）。以後はレコードページを開いてページ内の fetch で読んだ。
- 2026-11-06 critic round 1 の指摘を反映（REVIEW-critic-20261106.md）。

## 0. 先に結論の見取り図（Claude の読み替えを含む）

- [研究の一線] 心理的安全性と学習・成果の結びつきは、仕事の性質で強さが変わる。Sanner & Bunderson 2015 は、複雑さ・創造性・意味づけ（sensemaking）を含む「知識の濃い」仕事で強く、そうでない仕事で弱いと報告した。研究の切り口は仕事の性質で、有形か無形かでは切っていない。
- [研究の一線] 高すぎるところで成果が下がる、という報告がある（Eldor ら 2023・定型の仕事の in-role performance）。ただし「中くらいが最もよい」という逆 U で、「低いほうがよい」ではない。この研究には方法と概念の両面から批判がある（いずれも査読の無い実務家の論評）。
- [研究の一線] 心理的安全性が高いことで不正をかばい合う（Pearsall & Ellis 2011）、働く意欲が下がる経路が同時にある（Deng ら 2019）、階層的な文化は調整と達成を上げると同時に死者も増やす（Anicich ら 2015）。
- [Claude の読み替え] **「心理的安全性が低いほうが機能する」を、心理的安全性を測って直接示した実証研究には当たらなかった。** 軍で「高すぎると意図しない悪い結果」を述べた Swain ら 2024 は概念論文で、データを持たない。critic round 1 で、次の三つが抜けていると指摘された。Higgins ら 2020（教員 17 万人の縦断・Taylor ら 2022 p.4 の二次）は、成果に最適な条件として、説明責任の知覚が高く心理的安全性が比較的低い組み合わせを見たとされる。Langfred 2004（Swain ら 2024 p.59 の二次）は、自律チームで信頼が高く互いの監視が減ると成果が下がったと報告する（測ったのは信頼）。Eldor らの逆 U の高い側では、相対的に低いほうが成果がよい区間がある。この三つを含めると「当たらなかった」は言い過ぎで、§5e に併記した。
- [研究の一線] 「段階」について。Clark 2020 の四段階は、提唱者の会社の技術報告書で、12 項目が**一つの因子**にまとまると報告されている。四段階が別々のものとして測れること、順に進むことを、査読論文で検証したものには当たらなかった。縦断研究は、時間とともに心理的安全性が**下がる**、在籍期間に対して U 字になる、と報告していて、階段を上るような発達の形は見えていない。
- [Claude の読み替え] 最低限の到達点（何を指しているのかが曖昧）に対して: 効く条件の研究は、それぞれ別の「心理的安全性」を測っている。学習行動の前提としての安全（Edmondson）、居心地や罰の無さとして読まれた安全（Eldor の批判点）、止める方向の「言える」（医療・航空）、属して受け入れられる安全（Clark の第一段階）。同じ語で、仕事と組織によって違うものが指されている。

---

## 1. Sanner & Bunderson 2015

1. **書誌**: Sanner, B., & Bunderson, J. S. (2015). When feeling safe isn't enough: Contextualizing models of safety and learning in teams. *Organizational Psychology Review*, 5(3), 224–243. doi:10.1177/2041386614565145。Crossref（巻号ページ・オンライン 2015-01-23）と Semantic Scholar（年・題）で一致。前身の学会発表: Sanner & Bunderson (2013) "Psychological Safety, Learning, and Performance: A Comparison of Direct and Contingent Effects," *Academy of Management Proceedings*, doi:10.5465/ambpp.2013.10198abstract（Crossref）。
2. **照合の状態**: `要旨照合済`（Crossref の abstract 全文・WashU Research Profiles）。本文は未取得。研究数・効果量は `二次資料のみ`（psychsafety.com の Field Guide 要約「51 研究・48 本・約 3,700 チーム」、Lund 大学の学生論文「ρ = .32」。いずれも原典ページ未確認）。Edmondson & Bransby 2023 p.72 にこの論文の要約がある（本文照合済の二次）。
3. **鍵の文**（要旨・p.224）:
   - "psychological safety is more strongly associated with learning and performance in studies conducted in knowledge-intensive task settings, that is, settings that involve complexity, creativity, and sensemaking."
   - "psychological safety may be insufficient to stimulate learning in groups where the task environment does not require learning."
   - 二次（Edmondson & Bransby 2023, p.72）: "the effects of psychological safety on team performance were greater in more knowledge-intensive task settings (those with more complexity and creativity) than for more routine work."
4. **読み**:
   - [研究の一線] モデレータの語は要旨で確認できたものが「knowledge-intensive task settings」とその中身「complexity, creativity, and sensemaking」。Field Guide の要約によれば、仕事の性質は職業データベース（O*NET 系と推測されるが未確認）から研究ごとにコード化した代理指標で、「学ぶ動機」そのものは測っていない。
   - [研究の一線] Field Guide の批判（著者名なし・二次）: 元の研究の約 8 割が中央値より複雑・創造的な現場から取られていて、分野の代表的な効果量は職場一般より大きく出ている可能性。複雑な仕事は学習行動のばらつきが大きいので、どんな先行要因でも相関が強く出る可能性。鍵の回帰が 22〜27 研究に依っている。
   - [Claude の読み替え] 要旨の題が言うとおり、安全を感じることは学習の十分条件でない。学習が仕事から求められていないと、安全があっても学習は起きにくい。
5. **pjdhiro の見立てとの関係**: 「サービスやデザインなど無形のものを扱うときに有効」と、研究の「複雑さ・創造性・意味づけ」は重なる部分が大きい。無形のサービスやデザインは、多くの場合この三つを含む。重ならない部分は二つある。一つは、有形のものを扱う仕事にも知識の濃い仕事がある（研究開発・製造の工程改善・手術）。もう一つは、無形の仕事にも定型の部分がある（窓口の手順・定型のデータ処理）。研究は有形無形では切っておらず、切り口は仕事が学習を求めるかどうか。重ね方は README §4 の仰ぐこと 1。

## 2. Eldor, Hodor & Cappelli 2023 と批判

1. **書誌**: Eldor, L., Hodor, M., & Cappelli, P. (2023). The limits of psychological safety: Nonlinear relationships with performance. *Organizational Behavior and Human Decision Processes*, 177, 104255. doi:10.1016/j.obhdp.2023.104255。Crossref（2023-07・177・104255）、Tel Aviv University CRIS（同）、Semantic Scholar（同）で一致。
2. **照合の状態**: `要旨照合済`（Tel Aviv University CRIS の abstract 全文 `https://cris.tau.ac.il/en/publications/the-limits-of-psychological-safety-nonlinear-relationships-with-p/` を curl で取得）。本文未取得。研究ごとの標本・測定は `二次資料のみ`（PSNet の要約「nursing and four other organizational settings」、報道の「474 人の知識労働者・80 パーセンタイル」、Field Guide の「転換点は 80〜97 パーセンタイル」）。Cappelli の説明は Knowledge at Wharton の記事（二次・本人の談話）。
3. **鍵の文**（要旨）:
   - "high levels of psychological safety climate can actually harm the performance of routine tasks."
   - "while moderate levels of psychological safety climate are associated with better in-role performance, high levels are associated with decreasing in-role performance. Collective accountability can buffer that decreasing performance."
4. **読み**:
   - [研究の一線] 形は逆 U（中くらいで成果が最もよく、高いところで下がる）。成果は in-role performance（役割の中の仕事の出来）で、定型の仕事に焦点がある。調整変数は collective accountability（集団としての説明責任）。仕組みとして著者は認知心理学から、注意が新しいことへ向き定型の仕事から逸れることを挙げる（Wharton 記事の Cappelli の説明では、それに加えて「悪い成果に重い結果がない」という合図になること）。creative performance を別に測っているかは本文未確認。
   - [研究の一線] 批判（同じ重さで）: psychsafety.com の Field Guide（著者名なし）は、心理的安全性を対人的なリスクの構成概念でなく新しさ・革新の構成概念として扱っている、看護を「定型」に分類しているが看護では誤りの報告と懸念の表明こそが安全の機能である、転換点は統計の人工物の可能性がある、級内相関（ICC）が推奨の閾値を下回る研究がある、と指摘する。Tom Geraghty の「Too Much PS?」（psychsafety.com）は、「多すぎる」という主張が概念を取り違え、倫理と交差性の点検に耐えない、とする。LeanBlog（Mark Graban）と LeaderFactor（Clark の会社）も同じ向きの反論。いずれも査読論文でなく実務家の論評（二次）。
   - [研究の一線] 同じ向きの別の査読研究: Deng, Leung, Lam & Huang 2019（§6b）は、心理的安全性が失敗の怖れを下げて学習を増やす経路と、働く意欲を下げて学習を減らす経路が同時に走る、と報告。
   - [Claude の読み替え] 批判と原論文は、別の「心理的安全性」を見ている。原論文の高い心理的安全性は、要求や評価の圧が緩い状態として働いているように読める。批判側は、対人的なリスクを取れることと説明責任の高さは両立する（Edmondson 2018 の 2×2）という原典の定義から読む。どちらの読みで測定項目が答えられたかは、本文を見ないと決められない。
5. **pjdhiro の見立てとの関係**: 「軍隊型の組織では低いほうが機能するかもしれない」と、「定型の仕事では高すぎると in-role performance が下がる」は、定型の仕事で心理的安全性の役割が小さいという点で重なる。重ならないのは、Eldor らの形が逆 U で、低いところでも成果は下がっていること。「低いほうが機能する」までは言っていない。Eldor らの説明（注意が逸れる・結果が軽いという合図）は、pjdhiro の言う保身・日和見の安心（SURVEY-03 の領分）と近い現象を指している可能性があるが、これは Claude の読み替え。

## 3. Frazier ら 2017（メタ分析）

1. **書誌**: Frazier, M. L., Fainshmidt, S., Klinger, R. L., Pezeshkan, A., & Vracheva, V. (2017). Psychological safety: A meta-analytic review and extension. *Personnel Psychology*, 70(1), 113–165. doi:10.1111/peps.12183。Crossref（巻号ページ一致・issued 2016-10-14＝オンライン先行）、Semantic Scholar（year 2017）、本文 PDF の扉と p.113 の柱で一致。年の食い違い（2016 オンライン・2017 巻号）は両方記す。
2. **照合の状態**: `本文照合済（ブラウザ内で閲覧・ローカル本文なし・再照合不可）`。経路: ODU Digital Commons のレコード `https://digitalcommons.odu.edu/management_fac_pubs/13/` を Browser pane で開き、同一オリジンの `cgi/viewcontent.cgi?article=1018&context=management_fac_pubs`（出版社版 PDF・54 頁）をページ内 fetch → pdf.js でテキスト化して検索した。curl は Cloudflare のチャレンジで止まり、ローカル保存はできていない。`.cache/raw` に残っていた PDF 名のファイルは Cloudflare の確認画面の HTML で、`frazier-2017-CLOUDFLARE-BLOCK-not-the-paper.html` に改名した。ページは誌面の頁番号。Taylor ら 2022 が「Frazier et al. (2017, p. 532)」として引く文は、誌面 pp.113–165 の外の頁番号で、本文の中では確かめていない（Newman ら 2017 の頁である可能性・未決。SURVEY-01 §10b）。
3. **鍵の文**:
   - p.115: "prior research has rarely theorized or empirically tested the contingencies that may influence the relative importance of psychological safety."
   - p.144: "fostering psychological safety—a construct developed in countries with low UA norms—may be even more critical in cultures where risk taking and divergence from status quo is not the norm."
   - p.146: "there may be situations in which psychological safety can lead to negative outcomes."（続けて Pearsall & Ellis 2011 を例に挙げる）
4. **読み**:
   - [研究の一線] 136 の独立標本・22,000 人超・約 5,000 グループ（p.113）。検定した調整は三つ: 研究デザイン（同一回答者か・同時点か・出版の有無・学生標本か）、国の文化の不確実性回避（UA）、分析水準（個人とグループの相同性）。**仕事の性質（定型か非定型か・複雑さ）を調整変数として検定していない。** task complexity は autonomy・job enrichment などと一緒に「work design characteristics」という**先行要因**の束に入れられている（p.127）。相互依存性（interdependence）も先行要因として扱われ、個人水準で ρ̂ = .86 と先行要因の中で最大（p.130・p.140）。相互依存性が成果との結びつきを調整するか、は検定されていない。
   - [研究の一線] 成果との結びつき（個人水準・補正後 ρ̂、p.130–131）: 学習行動 .62、情報共有 .52、task performance .43、創造性 .13（「relatively weak」p.140）、発言（voice）.31。グループ水準（p.132）: 学習行動 .52、情報共有 .50、task performance .29、創造性 .29。
   - [研究の一線] UA の調整（Table 7・p.135, p.138）: 不確実性を避ける文化で、先行要因の効果も、task performance との結びつき（高 UA .78／低 UA .29）も強い。ただし高 UA 側の研究数は少ない（task performance は k = 4）。著者は、上司の関わり（positive leader relations）の効果は高 UA で弱いと述べ、高 UA の文化の上司は統制的で近づきにくい傾向があるという先行研究を引く（p.144）。
   - [Claude の読み替え] 個人水準の創造性との結びつきが弱い（.13）ことは、「創造の仕事に効く」という素朴な読みと緊張する。グループ水準では .29 で、創造性は個人の発想よりチームの過程で心理的安全性と結びつく、と読む余地がある（著者はそう書いていない）。
5. **pjdhiro の見立てとの関係**: 「軍隊型では低いほうが機能するかもしれない」と、メタ分析の UA の結果は逆の向きに見える部分がある。リスクを取ることが規範でない文化ほど、心理的安全性と task performance の結びつきが強かった。ただし UA は国の文化の次元で、組織の統制の型（軍隊型）とは別の切り口で、重ねられるかは分からない。「無形に効く」については、創造性との結びつきが個人水準で弱く、学習行動・情報共有との結びつきが強い。効く先は「作るもの」より「学ぶ・共有する過程」にある、という読みが研究に近い（Claude の読み替え）。

## 4. Clark 2020 と四段階の検証

1. **書誌**: Clark, T. R. (2020). *The 4 Stages of Psychological Safety: Defining the Path to Inclusion and Innovation*. Oakland, CA: Berrett-Koehler. ISBN 9781523087686（出版社 Penguin Random House 系の頁と書店頁で一致・2020-03-03・192 頁）。第 2 版（ISBN 9798890572035・2026-09-22 予定と表示）がある。技術報告書: LeaderFactor, *The 4 Stages of Psychological Safety™ Team Survey Technical Report: Design, Validation, & Reliability*（PDF 作成 2021-11-04・reginfo.gov に掲載された文書、objectID=125627101）。
2. **照合の状態**: 書籍は `未照合`（本文未取得。Internet Archive・Google Books API では見つからず）。四段階の定義と根拠は、技術報告書（`本文照合済`・Clark の会社の文書で、Clark が開発者と明記）と LeaderFactor のサイト（`二次資料のみ`・提唱者の会社の説明）で照合した。報告書の冒頭に「複製・引用を禁じる」旨の記載があるため、引用は短い事実の記述にとどめる。
3. **鍵の文**:
   - 技術報告書 p.4: "individuals and social units move through a linear progression of four successive stages of psychological safety."
   - 技術報告書 p.17: "the analysis indicated a single distinct factor underlying responses to the 12 items"
   - LeaderFactor サイト（二次）: "65% named inclusion first, and 86% named challenging the status quo last."
4. **読み**:
   - 四段階の名称（報告書 p.4–5）: Stage 1 Inclusion Safety（つながり属する基本的な欲求）、Stage 2 Learner Safety（学び育つ欲求）、Stage 3 Contributor Safety（貢献し違いを生む欲求）、Stage 4 Challenger Safety（ものごとをよくする欲求・現状に異を唱える）。全体の定義は "an environment of rewarded vulnerability"（p.4）。操作的定義は、含まれている・学んでよい・貢献してよい・現状に異を唱えてよい、の四つを、恥をかかされる・周縁化される・罰されるという怖れなしに感じる状態（p.13）。
   - 根拠として報告書が挙げる系譜（p.7–8）: Kierkegaard 1844、Schumpeter 1942、Maslow 1943（所属の欲求）、Simon 1947、Rogers 1957、McGregor 1960、Schein & Bennis 1965、Kahn 1990、Edmondson 1999、Google の Project Aristotle。段階が**順に進む**ことの実証の出典は、報告書では Clark 自身（"2020 Timothy R. Clark identifies a pattern of linear progression"）。
   - [研究の一線] 検証の中身: 3,122 件（外れ値除去後 3,047 件）の主成分分析で、第一成分が分散の 65.85%（固有値 7.90）を説明し、報告書の結論は「一つの因子」。各段階 3 項目の α は .847〜.895、12 項目全体で α = .951。12 項目のうち 4 項目は他の段階の項目と中程度に相関した、と報告書自身が書き、それでも元の四段階の構造を維持したとする（p.17）。段階の順序を時間の中で追ったデータは報告書にない。サイトの「65% が inclusion を最初に、86% が異を唱えることを最後に挙げた」は、回答者に順を尋ねた結果で、集団が実際に順に進むことの観察ではない。
   - [研究の一線] 査読論文で Clark の四段階を尺度として検証したものには当たらなかった。看護教育のレビュー（Hardie ら 2022・BMC Medical Education）や病院の実践報告（PMC12398371）が枠組みとして引用しているが、四段階の因子構造や順序を検証していない（いずれも要旨・抜粋のみ確認）。
   - [Claude の読み替え] 提唱者自身のデータでは、四つの「段階」は一つの次元の上の濃淡として答えられている。段階として区別できるか、順に進むかは、いまのところ提唱者の主張にとどまる。
5. **pjdhiro の見立てとの関係**: 「心理的安全性には段階がある。段階ごとにフィットする組織がある」と、Clark の四段階は、「段階」という語で重なる。重ならない点は二つある。Clark の段階は、どの集団も同じ順に上っていく一本の道として書かれていて、段階ごとに違う組織がフィットする、という組み立てにはなっていない。もう一つは、Clark の段階は Maslow の欲求階層を下敷きにしていて、pjdhiro の「いつの間にか低次欲求だけをケアしてる」という指摘（Issue 151）が、まさにこの下敷きの読まれ方に当たる可能性がある（Claude の読み替え）。[Claude の読み替え] pjdhiro の「段階」は発達段階（pd#152・SURVEY-03）と結ぶ見立てで、Clark の段階とは別のものを指していると読むのが今のところ安全。ただしこの文は断定に寄っている（critic round 1）。「心理的安全性には段階がある。段階ごとにフィットする組織がある」と「心理防衛機制と発達段階の分類での整理が必要」は別の発言で、二つを結ぶかどうか、「段階」が何の段階を指すかは pjdhiro に仰ぐ。

## 5. 上意下達の組織（軍・階層）

### 5a. Swain, Conkey, Kalkstein & Strauchler 2024

1. **書誌**: Swain, J. E., Conkey, K., Kalkstein, Y., & Strauchler, O. (2024). Exploring the utility of psychological safety in the armed forces. *Journal of Character & Leadership Development*, 11(2), 55–67. doi:10.58315/jcld.v11.288。Crossref（11(2):55–67・2024-08-05）、Semantic Scholar、PDF の扉（"2024, 11: 288"・Summer 2024）で一致。著者は全員 United States Military Academy。
2. **照合の状態**: `本文照合済`。`https://jcldusafa.org/index.php/jcld/article/download/288/468/772` を curl で取得（CC BY 4.0）。保存 `swain-2024-armed-forces.pdf`。
3. **鍵の文**:
   - p.55（要旨）: "psychological safety is not a panacea. In fact, high psychological safety in a military context could produce unintended negative outcomes."
   - p.59: "a culture that promotes high psychological safety could potentially create the false impression that decisions can be debated and may degrade good order and discipline in a unit."
   - p.59: "leading in a hierarchy does not mean one must lead with an authoritarian style—this reduces psychological safety"
4. **読み**:
   - [研究の一線] **概念論文で、新しいデータを持たない。** 「悪い結果」の根拠として挙げるのは Pearsall & Ellis 2011、Langfred 2004（信頼が高く監視が減ると自律チームの成果が下がる）、Andersson ら 2020、Deng ら 2019、Eldor ら 2023 で、いずれも軍の標本ではない（p.59）。指揮の一元性（unity of command）を論拠に加える。
   - [研究の一線] 軍で心理的安全性を扱った研究として、Wermser ら 2016、Hedlund & Österberg 2013、英国防省 2022、Lobato ら 2023 を挙げ、外科チーム・警察・消防・高信頼性組織（HRO）での正の結果を引いて、軍でも有効だとする（p.57）。米陸軍の教範 FM 6-22（2022）が「psychologically safe」に触れることも挙げる。
   - [研究の一線] 今後の研究として、規律違反の件数、仲間の責任を問わなくなるか、上官に異を唱えやすくなり指揮系統の拘束を感じにくくなるか、を挙げる（p.61）。つまり軍で「高すぎる害」は**まだ検証されていない問い**として置かれている。
   - [Claude の読み替え] 著者の結論は「心理的安全性を上げよ、ただし規律・説明責任と釣り合わせよ」で、情報の流れを妨げるものを取り除くことと、命令に従うことを両方保つ（p.62）。止める・知らせる方向の「言える」と、決定を議論にかけることを区別している。
5. **pjdhiro の見立てとの関係**: 「軍隊型では低いほうが機能するかもしれない」と、「高すぎると規律を損なうかもしれない」は、軍で心理的安全性の扱いに上限を感じている点で重なる。重ならないのは、Swain らは軍でも心理的安全性を上げることを勧めていて、低いほうがよいとは書いていないこと、そして主張がデータでなく推論であること。

### 5b. ガーナ軍の研究（書誌を特定した）

1. **書誌**: Nubuor, S. A., Bosomtwe, T. E., Obuobi, …, Bampoe, …, & Bosomtwe-Duker, … (2026). Understanding the pathways to workplace flourishing: the effect of trust and psychological safety in high-pressure work environments. *Frontiers in Psychiatry*, 17, 1912314. doi:10.3389/fpsyt.2026.1912314（Crossref・Semantic Scholar で一致。第三著者以下の名は Crossref の姓のみ確認）。同じ筆頭著者らの関連論文: Nubuor, Bosomtwe & Dartey-Baah (2026). How trust and psychological safety mediate the influence of leadership on workplace flourishing in a high-reliability military context. *Journal of Psychology in Africa*, 36(4), 589–599. doi:10.32604/jpa.2026.076334（Crossref のみ・本文未確認・同じデータかは未確認）。依頼にある「n=292・ガーナ軍」はこの Frontiers 論文と一致。
2. **照合の状態**: `本文照合済`（Frontiers の JATS XML `https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2026.1912314/xml` を取得して検索。頁番号の無い電子論文のため節で示す）。ローカル本文なし（XML は一時ファイルで `.cache/raw` に保存していない。再照合は同じ URL から取り直す）。
3. **鍵の文**:
   - 要旨・方法: "data were collected from 292 military personnel stationed at a single military hospital through stratified sampling (response rate = 78.9%)."
   - 序論: "The very hierarchy that ensures order may inadvertently suppress the individual autonomy, open communication, and psychological security that are fundamental to flourishing"
   - 文献の節: "junior personnel may require greater trust to feel safe compared to senior personnel."
4. **読み**:
   - [研究の一線] 成果変数は workplace flourishing（働く場での充実）で、**task performance ではない**。横断・自己報告・単一の軍病院。心理的安全性 → 指揮官への信頼 → flourishing の間接効果（.0781）。
   - [研究の一線] 「階級の構造が抑える」は**序論の論述**（引用文献 8 による）で、この研究のデータが示したものではない。階級による調整は「ありそうだ」と文献の節で述べるが、検定した記述は見つからなかった（XML の検索の範囲で）。
   - [Claude の読み替え] 依頼にあった「階級の構造が抑える」は、論文の前提として書かれた見立てで、結果ではない。
5. **pjdhiro の見立てとの関係**: 軍の中でも、心理的安全性は flourishing と正の関係にあった。「部品のように扱う組織では低い」という前提と、「階層は開かれた対話を抑えうる」という序論の見立ては重なる。成果（機能）との関係はこの研究では測っていないので、「低いほうが機能する」には触れていない。

### 5c. Anicich, Swaab & Galinsky 2015（ヒマラヤ遠征・階層の文化）

1. **書誌**: Anicich, Swaab, & Galinsky (2015)（名の頭文字は未確認）. Hierarchical cultural values predict success and mortality in high-stakes teams. *PNAS*, 112(5), 1338–1343. doi:10.1073/pnas.1408800112。Crossref・Semantic Scholar・EuropePMC（PMID 25605883・PMC4321300）で一致。Swain ら 2024 が p.61 で引く。
2. **照合の状態**: `要旨照合済`（EuropePMC の abstract）。本文は PMC にあるが未読。
3. **鍵の文**（要旨・p.1338）:
   - "climbers expect that a hierarchical culture leads to improved team coordination among climbing teams, but impaired psychological safety and information sharing compared with an egalitarian culture."
   - "Expeditions from more hierarchical countries had more climbers reach the summit, but also more climbers die along the way."
4. **読み**:
   - [研究の一線] 階層の機能説（調整がよくなる）と逆機能説（下位の者の声が出ない）の両方を、同じデータで示した。効果は集団の遠征でだけ現れ、単独行では現れない。
   - [研究の一線] 心理的安全性は、実験の部で登山家が**予想として**答えたもので、30,625 人の記録データでは測っていない。記録データの変数は国の文化の階層の値。
   - [Claude の読み替え] 「上意下達のほうが機能する」と「上意下達は危険を見落とす」が、成果の指標を変えると同時に成り立つ例。何を成果とするか（頂上に届く・全員が生きて帰る）で、心理的安全性の役割の見え方が変わる。
5. **pjdhiro の見立てとの関係**: 「軍隊型の組織は、低いほうが機能するかもしれない」と、最も近く重なる研究。登頂という一つの目標に向けた調整では、階層の文化が効いた。重ならないのは、同じ文化で死者も増えたことで、止める方向の声が出にくい代償が見えている。心理的安全性そのものは測られていない。

### 5d. 階層のなかの研究（ほか）

- **Hedlund, E., & Österberg, J. (2013).** Team training, team learning, leadership and psychology safety: A study of team training and team learning behavior during a Swedish military staff exercise. *Sociology Mind*, 3(1), 89–98. doi:10.4236/sm.2013.31014。`要旨照合済`（Semantic Scholar の abstract・CC BY）。[研究の一線] スウェーデン軍の参謀演習で、Edmondson の学習モデル（文脈の支え・リーダーのコーチング・心理的安全性・学習行動）が支持された。演習は定型でない問題解決の場で、Sanner & Bunderson の「学習を求める仕事」に当たる、というのは Claude の読み替え。
- **De Hoogh ら 2015**（Edmondson & Bransby 2023 p.67 の要約・`二次資料のみ`）: 金融業の小売店舗 60 か所で、権力争いが少ない（成員が階層を受け入れている）とき、専制的リーダーシップは心理的安全性と**正の**関係、権力争いが多いときは負の関係。[研究の一線] 階層そのものより、階層が受け入れられているかで心理的安全性との関係が変わる。原典の書誌は未確認（Annual Review の文献表で Leadership Quarterly の論文と読めるが未照合）。
- **権力格差**（Edmondson & Bransby 2023 p.67・`二次資料のみ`）: 高い権力格差は個人・集団水準で心理的安全性と負の関係（Appelbaum ら 2016・Fleştea ら 2017・Hu ら 2018）。研修医では権力格差 → 心理的安全性 → 有害事象を報告する意図、の経路。
- **製造ライン・警察**: 心理的安全性と、事故・誤り・成果を製造ラインや警察で直接検定した査読研究には、今回の検索では当たらなかった。Kang, W. (2024). Describing the impact of psychological safety on risk prevention: A threshold model construction. *Work*, 79(1), 277–288. doi:10.3233/WOR-230234（Crossref の要旨・`要旨照合済`）は高危険産業で「心理的安全性は高いほどよいとは限らない」と述べるが、文献の帰納と類推による理論モデルで、データを持たない。

### 5e. 「心理的安全性が低いほうが機能する」を直接示した研究

- **当たらなかった。** 心理的安全性を測り、それが低いほうが成果がよいことを示した実証研究は、今回の検索の範囲（上記と Edmondson & Bransby 2023 の総説）に無い。
- 近いもの: 逆 U で高すぎるところの低下（Eldor ら 2023）、高い心理的安全性 × 功利的な倫理観で不正が増える（Pearsall & Ellis 2011）、意欲が下がる経路（Deng ら 2019）、階層の文化で登頂が増える（Anicich ら 2015・心理的安全性は予想としてのみ）、受け入れられた階層の下では専制的リーダーと心理的安全性が両立する（De Hoogh ら 2015・二次）。いずれも「低いほうがよい」とは別の形。
- **反例・別の読み（critic round 1 で併記）**: 上の「当たらなかった」は、検索の範囲を広げると言い過ぎになる。
  - Higgins, M., Dobrow, S. R., Weiner, J. M., & Liu, H. (2020). When is psychological safety helpful? A longitudinal study. *Academy of Management Discoveries*, 8, 77–102. doi:10.5465/amd.2018.0242（書誌は Taylor ら 2022 の文献表による）。`二次資料のみ`（Taylor ら 2022 p.4）。Taylor らは "a large-scale longitudinal study of 170,000 teachers" で、心理的安全性が時間を通じて組織の成果を支えるとは限らず、"optimal conditions for performance identified relatively low PS against high perceptions of accountability" と要約する。[研究の一線] 心理的安全性を測り、相対的に低いほうが成果に結びつく組み合わせを示した可能性のある実証研究。原典は未照合で、「低い」がどの程度か、説明責任との組み合わせの形は確かめていない。
  - Langfred, C. W. (2004). Too much of a good thing? Negative effects of high trust and individual autonomy in self-managing teams. *Academy of Management Journal*, 47(3), 385–399. doi:10.5465/20159588（書誌は Swain ら 2024 の文献表による）。`二次資料のみ`（Swain ら 2024 p.59）。[研究の一線] 自律チームで信頼が高く監視が減ると成果が下がる。測っているのは信頼で、心理的安全性は測っていない。Swain らは、心理的安全性が信頼を高めうるので同じことが起きうる、と推論している。
  - Eldor ら 2023 の逆 U では、高い側の区間に限ると、相対的に低いほうが成果がよい。区間を限れば「低いほうがよい」と言える場面がある。
  - [Claude の読み替え] 「低いほうが機能する」を直接示したと言えるかは、Higgins ら 2020 の本文を見るまで決められない。いま言えるのは、心理的安全性が成果を上げる向きにだけ働くわけではない、という報告が縦断（Higgins）・逆 U（Eldor）・信頼の研究（Langfred）にある、というところまで。

## 6. 医療と航空（止める方向の「言える」）

### 6a. Edmondson 1996

1. **書誌**: Edmondson, A. C. (1996). Learning from mistakes is easier said than done: Group and organizational influences on the detection and correction of human error. *Journal of Applied Behavioral Science*, 32(1), 5–28. doi:10.1177/0021886396321001。Crossref・Semantic Scholar で一致。同題の再掲: *JABS* 40(1), 66–90 (2004), doi:10.1177/0021886304263849（PSNet が 2004/2006 と表記する食い違いはこの再掲による可能性）。
2. **照合の状態**: `要旨照合済`（Crossref の abstract）。研究の設計と数値は `二次資料のみ`（psychsafety.com Field Guide の要約）。
3. **鍵の文**（要旨・p.5）: "Findings from patient care groups in two hospitals show systematic differences not just in the frequency of errors, but also in the likelihood that errors will be detected and learned from by group members."
4. **読み**:
   - [教科書] 心理的安全性の研究の出発点としてよく引かれる。
   - [研究の一線]（細部は二次経由。critic round 1 で印を分けた）二つの病院の 8 病棟で、上司のコーチングや関係がよいと評価された病棟ほど、**検出された**投薬ミスが多かった。Edmondson は、検出された誤りは実際の誤りと報告の意欲の両方に依る、と読んだ（二次）。
   - [研究の一線] Field Guide によれば、この論文には「psychological safety」の語は出てこない。開かれた雰囲気と怖れの雰囲気として書かれ、1999 年の論文で構成概念に名が付いた（二次・SURVEY-01 の領分と重なる）。標本は 8 病棟で順位相関しかとれない。
   - [Claude の読み替え] ここで心理的安全性が効いているのは、作るほうでなく止める・知らせるほう（誤りを言う）。仕事は定型の色が濃い（投薬）が、誤りの報告は学習を求める。Eldor らが看護を「定型」に分けたことへの批判は、この点を突いている。
5. **pjdhiro の見立てとの関係**: 「コンプライアンスや不正、ガバナンスの文脈で言うなら別だろうけど」と重なる。誤りや危険を止める方向では、定型の仕事でも心理的安全性が機能を担う。「無形に効く」とは別の軸で、有形か無形かに関わらず、止める方向の声に効く。

### 6b. 航空の CRM（Helmreich, Merritt & Wilhelm 1999）

1. **書誌**: Helmreich, R. L., Merritt, A. C., & Wilhelm, J. A. (1999). The evolution of Crew Resource Management training in commercial aviation. *International Journal of Aviation Psychology*, 9(1), 19–32. doi:10.1207/s15327108ijap0901_2。Crossref・Semantic Scholar・著者版の脚注で一致。
2. **照合の状態**: `本文照合済`（著者版・University of Texas Human Factors Research Project 235。`https://www.faa.gov/sites/faa.gov/files/crmhistory.pdf` を curl で取得。保存 `helmreich-1999-crm-evolution.pdf`）。頁は著者版の頁（誌面の頁と対応していない）。
3. **鍵の文**:
   - 著者版 p.2: "correcting deficiencies in individual behavior such as a lack of assertiveness by juniors and authoritarian behavior by captains."
   - 著者版 p.6: "High Power Distance cultures, such as China and many Latin American countries, stress the absolute authority of leaders."（続けて、下位の者に機長への問いかけを促す訓練が届きにくい、と書く）
   - 著者版 p.8: "Instruction in the fifth generation has at its aim the normalization of error and the development of strategies for managing error"
4. **読み**:
   - [教科書] CRM は、事故原因として NTSB が機長の下位乗員の入力の拒否と航空機関士の主張の弱さを挙げたこと（1978 年の United 機）に出発点を持つ（p.2）。訓練は第 5 世代で「誤りを当たり前のものとして扱い、管理する」方向へ移った。第 3 世代では新任機長に「指揮に伴うリーダーの役割」の訓練も作られた（p.4）。
   - [研究の一線] CRM の態度は、反復訓練があっても数年で後退する（p.5）。輸入した CRM は国の文化（権力格差・不確実性回避）と合わずに届きにくい（p.5–6）。
   - [Claude の読み替え] 依頼にある読み「上意下達の中で異を唱えることだけを訓練で開けている」は、論文の言葉ではない。論文から言えるのは、機長の指揮（command）は保ったまま、誤りを避ける・捕える・結果を和らげる（error troika）ための下位乗員の主張と、機長の入力の受け入れを訓練した、ということまで。「だけ」は Claude の読みで、論文は CRM が状況認識・ブリーフィング・自動化の扱いなどへ広がったことも書いている。
5. **pjdhiro の見立てとの関係**: 「軍隊型の組織」と CRM の機長の指揮は重なる。重ならないのは、航空は階層を保ったまま止める方向の声を訓練で開けてきたことで、「低いほうが機能する」でなく、「階層の中で必要な向きの安全だけを狙って開ける」形。pjdhiro の「段階ごとにフィットする組織」に、Clark の段階でなく「どの向きの声を開けるか」で重ねる読みは成り立つかもしれない（Claude の読み替え・吟味待ち）。

### 6c. Pearsall & Ellis 2011

1. **書誌**: Pearsall, M. J., & Ellis, A. P. J. (2011). Thick as thieves: The effects of ethical orientation and psychological safety on unethical team behavior. *Journal of Applied Psychology*, 96(2), 401–411. doi:10.1037/a0021503。Crossref・EuropePMC（PMID 21142339）・Semantic Scholar で一致。依頼文の題は "unethical behavior" だが、正しくは "unethical **team** behavior"。
2. **照合の状態**: `要旨照合済`（EuropePMC）。標本の詳細は `二次資料のみ`（BPS Research Digest: 経営学の学部生 378 人・3 人ずつの学習グループ・課題の自己評価でのごまかし）。Frazier ら 2017 p.146 と Swain ら 2024 p.59 に要約あり（本文照合済の二次）。
3. **鍵の文**（要旨）: "the relationship between utilitarianism and unethical outcomes was moderated by the level of psychological safety within the team, such that teams with high levels of safety were more likely to engage in unethical behaviors."
4. **読み**:
   - [研究の一線] 126 チーム。功利的な倫理観の成員がいるチームで、心理的安全性が高いと不正が増えた。形式的（規則に従う）な倫理観の成員がいると不正の決定は減った。標本は学生で、ごまかしの利害は小さい（BPS の注）。
   - [Claude の読み替え] 心理的安全性は向きを持たない増幅器のように働きうる。対人的なリスクが下がることは、異を唱えることも、かばい合うことも容易にする。
5. **pjdhiro の見立てとの関係**: 「保身や日和見型の精神で、安心・安全とは、組織にとってよくない効果がある」と重なる。重ならないのは、この研究の「不正」は保身というより功利的な判断の共有で、防衛機制として読めるかは SURVEY-03 の領分。

## 7. サービス・デザイン・創造の仕事

### 7a. Kessel, Kratzer & Schultz 2012

1. **書誌**: Kessel, Kratzer, & Schultz (2012)（名の頭文字は未確認）. Psychological safety, knowledge sharing, and creative performance in healthcare teams. *Creativity and Innovation Management*, 21(2), 147–157. doi:10.1111/j.1467-8691.2012.00635.x。Crossref・Semantic Scholar で一致。
2. **照合の状態**: `要旨照合済`（Crossref の abstract）。
3. **鍵の文**（要旨）: "a high level of psychological safety within the team is a significant predictor of creative team performance and is mediated by the sharing of two types of knowledge: information and know-how."
4. **読み**: [研究の一線] 希少疾患に取り組む患者中心の医療チーム 73。創造的なチームの成果は、情報とノウハウの共有を介して心理的安全性と結びつく。[Claude の読み替え] 医療という有形の身体を扱う場での「創造」で、無形かどうかより、知識を組み合わせる仕事かどうかが効いている例。
5. **pjdhiro の見立てとの関係**: 「デザインなど無形のもの」と、「創造的な成果」で重なる。重ならないのは、扱う対象が身体と医療である点。

### 7b. Baer & Frese 2003

1. **書誌**: Baer, M., & Frese, M. (2003). Innovation is not enough: Climates for initiative and psychological safety, process innovations, and firm performance. *Journal of Organizational Behavior*, 24(1), 45–68. doi:10.1002/job.179。Crossref（issued 2002-12-12＝オンライン先行）・Semantic Scholar（2003）で一致。
2. **照合の状態**: `要旨照合済`（Crossref の abstract）。
3. **鍵の文**（要旨）: "process innovations, defined as deliberate and new organizational attempts to change production and service processes, need to be accompanied by climates that complement the adoption and implementation of such innovations."
4. **読み**: [研究の一線] ドイツの中規模企業 47 社。主体性の風土と心理的安全性の風土は、資産利益率の変化と目標達成の両方と正の関係で、工程の革新と業績の関係を調整した。[Claude の読み替え] 対象は生産とサービスの**工程**の革新で、製造業の有形の工程も含む。定型の現場でも、仕組みを変えている最中には心理的安全性が効く、という読みになる。
5. **pjdhiro の見立てとの関係**: 「サービスに有効」と重なる（サービスの工程を含む）。重ならないのは、製造の工程の変化にも効いている点。効いているのは有形無形の区別より「変えている最中かどうか」に見える（Claude の読み替え）。

### 7c. まとめ（研究の切り口と pjdhiro の見立ての重なり）

| 研究の切り口 | 出典 | 「無形のものに効く」との重なり | 重ならないところ |
|---|---|---|---|
| 知識の濃さ（複雑さ・創造性・意味づけ） | Sanner & Bunderson 2015 | 無形のサービス・デザインの多くはこれを含む | 有形の研究開発・手術・工程改善も含む。無形の定型業務は含まない |
| 定型の仕事か | Eldor ら 2023 | 定型の仕事で高すぎると下がる＝定型でない仕事に向く | 有形無形と独立。逆 U で、低いと下がる |
| 学習行動・情報共有と強く、創造性（個人）と弱い | Frazier ら 2017 | 効く先は「作るもの」より「学ぶ・共有する過程」 | 創造という成果そのものとの結びつきは個人水準で弱い |
| 工程の革新の最中 | Baer & Frese 2003 | サービスの工程を含む | 製造の工程も含む |
| 止める方向の声 | Edmondson 1996・CRM | 「コンプライアンス・不正・ガバナンスは別」と重なる | 定型・有形の仕事（投薬・操縦）で効く |

[Claude の読み替え] 研究は「有形か無形か」で切っていない。研究の切り口は、仕事が学習・知識の組み合わせ・変化を求めるかどうか、そして声の向き（作る・変える方向か、止める・知らせる方向か）。pjdhiro の「無形」は、前者の多くと重なる日常語として読める。この重ね方の採否は pjdhiro に仰ぐ（README §4 の 1）。

## 8. 段階・時間経過（縦断研究）

### 8a. Koopmann, Lanaj, Wang, Zhou & Shi 2016

1. **書誌**: Koopmann, J., Lanaj, K., Wang, M., Zhou, L., & Shi, J. (2016). Nonlinear effects of team tenure on team psychological safety climate and climate strength: Implications for average team member performance. *Journal of Applied Psychology*, 101(7), 940–957. doi:10.1037/apl0000097。Crossref・EuropePMC（PMID 26949818）・Semantic Scholar で一致。Edmondson & Bransby 2023 p.62 に要約（本文照合済の二次）。
2. **照合の状態**: `要旨照合済`（EuropePMC）。
3. **鍵の文**（要旨）: "team psychological safety climate and climate strength were higher in new and longer tenured teams compared with moderately tenured teams."
4. **読み**: [研究の一線] 研究開発チーム 115。在籍期間に対して心理的安全性は U 字（新しいチームと長いチームで高く、中ほどで低い）。創造的な成果も在籍期間に対して曲線で、心理的安全性が部分的に媒介。task performance を上げたのは、心理的安全性の風土が「強い」（成員の認識がそろっている）ときだけ。[Claude の読み替え] 集団形成の理論（形成・混乱・規範・遂行に近い）を下敷きにしていて、「段階」に最も近い実証。ただし一方向に積み上がる段階でなく、いったん下がって戻る形。
5. **pjdhiro の見立てとの関係**: 「心理的安全性には段階がある」と、チームの時間の中で心理的安全性の水準が形を変えて動く、という点で重なる。重ならないのは、段階ごとに組織がフィットする、という組み立てでなく、同じチームの時間の中の変化である点。

### 8b. Gerlach & Gockel 2022、Marlow, Lacerenza & Salas 2025

- **Gerlach, R., & Gockel, C. (2022).** A question of time: How demographic faultlines and deep-level diversity impact the development of psychological safety in teams. *Frontiers in Psychology*, 13, 765793. doi:10.3389/fpsyg.2022.765793（EuropePMC・Semantic Scholar で一致）。`要旨照合済`。鍵の文: "Results of a multilevel growth curve model show that PS decreased from project beginning to end." [研究の一線] 自己管理型チーム 61（236 人）を 5 か月・3 時点。属性の断層線と神経症傾向のばらつきが初めの水準を下げ、協調性のばらつきと課題の能力の自己評価の高さが下がり方を急にした。
- **Marlow, S. L., Lacerenza, C. N., & Salas, E. (2025).** Examining how psychological safety consensus emerges over time. *Small Group Research*, 56(2), 175–205. doi:10.1177/10464964241288221（Crossref・Semantic Scholar で一致。オンライン 2024-10-12）。`要旨照合済`。鍵の文: "team psychological safety climate develops over time through consensus emergence, this process is initiated by early information sharing, and there is a decline in the average level of psychological safety over time." [研究の一線] 時間とともに育つのは成員の認識の**そろい方**で、平均の水準は下がる。
- [Claude の読み替え] 縦断研究で見えている「発達」は、水準が階段を上ることでなく、そろい方が育つことと、水準が下がる（または U 字に戻る）ことの組み合わせ。Clark の「一本の道を順に上る」形と合う縦断のデータには当たらなかった。Edmondson & Bransby 2023 p.72 も、研究の大半が昔ながらの固定的なチームを対象にしていると書く。

## 書誌の表

| 著者・年 | 題（短縮） | DOI／ISBN | 照合の状態 | 保存先 |
|---|---|---|---|---|
| Sanner & Bunderson 2015 | When feeling safe isn't enough | 10.1177/2041386614565145 | 要旨照合済（効果量は二次） | なし |
| Eldor, Hodor & Cappelli 2023 | The limits of psychological safety | 10.1016/j.obhdp.2023.104255 | 要旨照合済（標本は二次） | なし |
| Frazier ら 2017 | Psychological safety: A meta-analytic review and extension | 10.1111/peps.12183 | 本文照合済（ブラウザ内で閲覧・ローカル本文なし・再照合不可） | なし（Cloudflare で curl 不可。`frazier-2017-CLOUDFLARE-BLOCK-not-the-paper.html` は本文でない） |
| Clark 2020 | The 4 Stages of Psychological Safety | ISBN 9781523087686 | 未照合（書籍） | なし |
| LeaderFactor（Clark）2021 | 4 Stages Team Survey Technical Report | reginfo.gov objectID=125627101 | 本文照合済 | `clark-4stages-team-survey-technical-report.pdf` |
| Swain ら 2024 | Exploring the utility of PS in the armed forces | 10.58315/jcld.v11.288 | 本文照合済 | `swain-2024-armed-forces.pdf` |
| Nubuor ら 2026 | Pathways to workplace flourishing（ガーナ軍 n=292） | 10.3389/fpsyt.2026.1912314 | 本文照合済（XML・ローカル本文なし） | なし（XML は一時ファイル） |
| Nubuor, Bosomtwe & Dartey-Baah 2026 | Trust and PS mediate leadership…military | 10.32604/jpa.2026.076334 | 未照合（Crossref の書誌のみ） | なし |
| Anicich, Swaab & Galinsky 2015 | Hierarchical cultural values predict success and mortality | 10.1073/pnas.1408800112 | 要旨照合済 | なし |
| Hedlund & Österberg 2013 | Team training…Swedish military staff exercise | 10.4236/sm.2013.31014 | 要旨照合済 | なし |
| Kang 2024 | Psychological safety on risk prevention: threshold model | 10.3233/WOR-230234 | 要旨照合済 | なし |
| Deng, Leung, Lam & Huang 2019 | Slacking off in comfort | 10.1177/0149206317693083 | 要旨照合済 | なし |
| Edmondson 1996 | Learning from mistakes is easier said than done | 10.1177/0021886396321001 | 要旨照合済（設計は二次） | なし |
| Helmreich, Merritt & Wilhelm 1999 | The evolution of CRM training | 10.1207/s15327108ijap0901_2 | 本文照合済（著者版） | `helmreich-1999-crm-evolution.pdf` |
| Pearsall & Ellis 2011 | Thick as thieves | 10.1037/a0021503 | 要旨照合済（標本は二次） | なし |
| Kessel, Kratzer & Schultz 2012 | PS, knowledge sharing, and creative performance in healthcare teams | 10.1111/j.1467-8691.2012.00635.x | 要旨照合済 | なし |
| Baer & Frese 2003 | Innovation is not enough | 10.1002/job.179 | 要旨照合済 | なし |
| Koopmann ら 2016 | Nonlinear effects of team tenure on team PS climate | 10.1037/apl0000097 | 要旨照合済 | なし |
| Gerlach & Gockel 2022 | A question of time | 10.3389/fpsyg.2022.765793 | 要旨照合済 | なし |
| Marlow, Lacerenza & Salas 2025 | Examining how PS consensus emerges over time | 10.1177/10464964241288221 | 要旨照合済 | なし |
| Edmondson & Bransby 2023 | Psychological safety comes of age（総説・二次として使用） | 10.1146/annurev-orgpsych-120920-055217 | 本文照合済（CC BY 4.0） | `edmondson-bransby-2023-annrev.pdf` |

## 取れなかったもの

- **Sanner & Bunderson 2015 本文**: ①Semantic Scholar `openAccessPdf`＝CLOSED ②Unpaywall＝OA なし ③WUSTL openscholarship の検索（curl で 403）・WashU Research Profiles（本文リンクなし・All rights reserved）④WebSearch で `"題名" filetype:pdf` 系（ResearchGate の著者アップロードのみ。叩いていない）⑤SAGE の abstract ページ（WebFetch で 403。繰り返していない）。**pjdhiro にブラウザ保存を頼む**: ResearchGate の著者アップロード `https://www.researchgate.net/publication/273278892`。sci-hub 系の検索結果は使っていない。
- **Eldor ら 2023 本文**: ①Semantic Scholar＝CLOSED ②Unpaywall＝なし ③Tel Aviv University CRIS（要旨のみ・ファイルなし）④WebSearch（ResearchGate のみ）⑤PSNet（要約のみ）。**pjdhiro にブラウザ保存を頼む**: ResearchGate `https://www.researchgate.net/publication/372113343`、または著者（Eldor・Cappelli）へ依頼。
- **Edmondson 1996 本文**: ①Semantic Scholar＝CLOSED（abstract も出版社が非表示）②Unpaywall＝なし ③Crossref（abstract のみ）④WebSearch（PSNet・Harvard Magazine の要約のみ）。書籍再録 *Strategic Learning in a Knowledge Economy*（Butterworth-Heinemann 2000, pp.203–230, doi:10.1016/b978-0-7506-7223-8.50012-5）は Internet Archive の貸出を次に試す。
- **Pearsall & Ellis 2011 本文**: ①Semantic Scholar＝CLOSED ②Unpaywall＝なし ③EuropePMC（abstract のみ・PMC なし）④WebSearch（Arizona 大学の experts ページ・BPS の要約のみ）。
- **Frazier ら 2017 のローカル保存**: ODU Digital Commons（curl は Cloudflare のチャレンジ）、CORE `core.ac.uk/download/217291252.pdf`（同）、CORE API v3（同）、MD-SOAR（DSpace の API が応答せず）、UMD DRUM の DOI（MD-SOAR へ転送）、Creighton の Esploro（JS ページで取得できず）。本文は Browser pane 内で読めたので照合は済み。保存が要るなら pjdhiro にブラウザで ODU から保存を頼む。
- **Clark 2020 書籍本文**: Internet Archive の検索（該当なし）、Google Books API（応答なし）、出版社・書店頁（書誌のみ）。四段階の定義は技術報告書で照合した。書籍の章ごとの根拠の記述は未照合。
- **Deng ら 2019 著者版**: Durham Research Online（`durham-repository.worktribe.com/OutputFile/1343127`、Cloudflare で取得できず）。要旨で足りるので深追いしていない。
- **De Hoogh ら 2015** の原典: 未特定（Annual Review の要約のみ）。

## 次に調べると効くこと

1. Sanner & Bunderson 2015 の本文（pjdhiro のブラウザ保存）: モデレータのコード化の手順（職業データベースのどの指標か）、研究数、効果量の表、「学ぶ動機」の論の組み立て。Field Guide の批判（標本の偏り・22〜27 研究）の当否。
2. Eldor ら 2023 の本文: 五つの研究の標本・心理的安全性の尺度の項目（Edmondson の 7 項目か）・creative performance を別に測ったか・転換点の位置。批判側の「ICC が低い」の確認。
3. Anicich ら 2015 の本文（PMC4321300 で読める）: 実験の部の心理的安全性の測り方と、記録データとの対応。
4. 軍・警察・製造ラインで心理的安全性と成果を測った実証: Wermser ら 2016、Lobato ら 2023（Swain らが引く）、Bienefeld & Grote 2014（航空の乗員 1,500 近く・状態と発言）。De Hoogh ら 2015 の原典の特定。
5. 「段階」: Koopmann ら 2016 の本文（集団形成の理論との対応）、Clark の書籍で根拠として挙げる研究の一覧。pd#152 の発達段階と結ぶのは SURVEY-03 と統合の段で。
6. サービス・デザインの仕事で直接見た研究（デザインチーム・サービスの最前線）を 1〜2 本。今回は医療の創造的チームと工程の革新で代えている。
