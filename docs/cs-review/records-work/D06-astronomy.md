# 天文学・宇宙物理学：記録から外した作業の節

`cs/evidence/evidence-D06-astronomy.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D06-astronomy.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（77〜86 行）と本文（88 行・216 行）、Colophon（234 行） | 10 | 強い 8・条件付き 2（バリオンサイクル・球状星団） |
| en（51 行・139 行） | 10 | 10 すべて strong。§5 で詳しく扱うのは 5 の論だけ |
| pres（23 行・45〜54 行） | 10 | 強い 9・部分的 1（球状星団）。バリオンサイクルは強い |
| 退避版（410 行） | 10 | Accept 10・CA 0 |
| 調べた跡 phase5（17〜19 行・217 行） | 10 | Anchor 4（001・004・006・009）・Scoped 4・High-risk 2（003・010） |

ja の「強い 8」は、調べた跡の High-risk 2（バリオンサイクル・球状星団）を条件付きにした数です。en の 10 は退避版の Accept 10 と同じです。pres の 9・1 は、どの記録とも合わず、出どころが追えません。提唱者の欄も版で違います。pres は 1 に Shu、5 に Hayashi、6 に Sedov と Bell、7 に Leighton、10 に Lynden-Bell を足し、ja と en は 6 に Bell を挙げていません。

### 至らない形を外に置いていること

報告は、10 の論すべてを「全5段階にわたる対応」とし（ja 88 行）、5段階に当てはまらない事例を「負の事例の探索不足」として未解決の問いに置いています（ja 208 行）。原典を開くと、至らない形と、その分かれ目が、論の中に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| 星形成 | 比が臨界に届かない星雲は球のまま（Jeans pp.32–33） | 密度と弾性の比 |
| 銀河形成 | 冷えきらないガスは熱いまま残る。合体した群れは中の構造を消される（White & Rees pp.347–348） | t_cool と t_dyn の比 |
| バリオンサイクル | 供給が絶たれて星形成が止まる（Dekel & Birnboim p.1）。止まり続ける理由は未解決（Tumlinson ら pp.35・37） | ハローの質量 M_shock |
| 降着円盤 | 強い磁場では不安定が起きない（Balbus & Hawley p.214）。弱い磁場では真空が壊れない（Blandford & Znajek p.433） | 磁場と熱のエネルギーの比、磁場の強さ |
| 惑星系形成 | 円盤が先に消えて成長が止まる（Pollack ら p.71）。岩は星に落ちる（Johansen ら p.1）。塊は移動や潮汐で失われる（Drążkowska ら p.22） | 暴走に入るまでの時間と円盤の寿命、Q < 1 |
| 超新星残骸 | 粒子は横切るたびに一部が逃げる（Bell p.149） | 逃げる確率と加速の時間 |
| 太陽 | 磁束の管が上がりきれず黒点が出ない。マウンダー極小期（Charbonneau 2010 pp.62・64） | 約 10 kG の磁場の強さ |
| 大規模構造 | 圧力が潰れに逆らう（Zel'dovich p.88） | ジーンズ質量の尺度 |
| 中性子星合体 | 残るのが中性子星かブラックホールか（Abbott ら p.161101-7） | 残った天体の質量（読んだ所には値が無い） |
| 球状星団 | 軟らかい連星は壊れる（Heggie p.729）。中心が暴走して平衡が無くなる（Lynden-Bell & Wood p.495）。等分配に届かない（Spitzer 1969 p.L139） | 結合のエネルギー、半径 0.335 GM²/(−E)、重い星の総質量 |

数学・物理学・化学・複雑系科学と同じく、至らない形は原典の中心にありました。天文学では、至らない形の多くが、片方の力が勝って形が決まる形（冷えきらないガス、止まった星形成）と、暴走（重力熱的破局）と、時間切れの凍結（円盤が消える）に分かれて見えます。報告が「負の事例」として外に探しにいくより前に、報告が挙げた論の原典の中にありました。

### 横断の節は報告の作った分け方

報告の横断の節の「閾値トリガの普遍性」「縁の物理的多様性」「螺旋的回帰の多様性」「渦の『目的なき自己組織化』」（ja 184〜198 行）は、調べた跡（phase7）と退避版（451 行）が作った分け方で、原典の著者の分け方ではありません（型 H）。閾値の 4 件（ja 186 行）のうち、原典に分かれ目が書かれていたのは、Jeans（密度と弾性の比）・Bond らの臨界の過密度・Toomre の速度の分散です。報告は、White & Rees の冷却の比や、Pollack らの円盤の寿命のような、至らない側の分かれ目を数えていません。「縁の物理的多様性」の七つの類型（ja 190 行・218 行）は、語の当てはめを並べたもので、原典に根拠がありません。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（32 行・40 行）、「方法論的開示（S60）」（46 行）、「温度帯の分布」（90 行）、「安全弁」（92〜94 行）、「結びの温度開示」（222〜226 行）、「Colophon」の generator_model（228〜238 行）。51 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1）。en 45 行は「If anything in these definitions feels uneasy…」と、読者に読むのをやめる選択を勧めています（型 F）。en 25 行の「the three conditions of Edge」（縁の 3 条件）は、化学と同じく原典に無い体系です（型 H）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 「数百億年後」 | 退避版 318 行。en 53 行の「tens of billions of years」も同じ筋 |
| 「Press-Schechter理論（Bond et al. 1991）」 | 退避版 70 行の「Extended Press-Schechter; Bond et al. 1991」から「Extended」が落ちた |
| 「一方向→二方向→三方向崩壊」「パンケーキ→フィラメント→ノード」を Zel'dovich 1970 に帰す | 調べた跡 phase5 116 行・phase6 129 行 |
| 「Maunder極小期＝渦が維持されなかった」 | 調べた跡 phase5 105 行・phase6 105 行 |
| 判定の数が版ごとに違う | ja は phase5 の High-risk 2 を条件付きにした形。en は退避版の Accept 10。pres は追えない |
| 「縁の3条件」 | 退避版と調べた跡の縁フラグ（化学と同じテンプレート） |
| テンプレートの表示 | 報告のテンプレート（Colophon の reader-rules-creation-report v2.2、domain-report-template v1.0） |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「30の調査領域のなかで『意識の不在』が最も純粋に確認される分野」（14 行）、「最も直接的に一致する事例の一つ」（120 行）、「縁の最も純粋な実現の一つ」（144 行）、「天文学は渦の『非目的的本質』を最も純粋に実証する領域」（198 行）、「最も広範に確認される領域の一つ」（216 行）、「大規模な実証を提供しています」（218 行）、「宇宙論的実証です」（112 行・168 行）、「直接的な観測的証拠です」（128 行）。
- 型 J（演出）：「壮大な実例です」（168 行）、en 1 行の題「The Spiral of Unconscious Creation」。
- 型 H（原典に無い体系）：「縁の物理的多様性」の七つの類型（190 行・218 行）、「螺旋的回帰の多様性」の三つ（194 行）、en 25 行の「縁の3条件」。
- 語が同じだけの対応：「物理的な『渦』（MRI乱流）と5段階概念としての『渦』が直接一致」（118 行）、「物理的な『衝撃波』と『不連続面』が5段階の『波』と『縁』に用語レベルで直接対応」（134 行）。
- 型 B（外に置く）：「負の事例の探索不足」（208 行）で、当てはまらない事例を外に探す問いを立てている。原典の中の至らない形は、上の表のとおり報告の論の中にある。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- 精読ノート「Jeans 1902」 34 行：「the whole question of stability depends upon the ratio of the density to the elasticity at infinity.」の頁を p.33 と書くが、PDF では p.32。
- 精読ノート「Balbus 1991」 44 行：引用が原文と違う。原文（p.222）は「The most important consequence of the instability is that…a deficiency at smaller radii. When restoring forces are not able to compensate…」。ノートは「this instability」と書き、「at smaller radii. When」を落として「a deficiency when restoring forces」とつないでいる。
- 精読ノート「Abbott 2017」 7 行：原典頁数を「10」と書くが、手元の PDF は 18 頁（誌面と著者の一覧）。
- 台帳の「Abbott ら 2017」の行（249 行）：注は「arXiv 1710.05832」だが、手元の PDF は PRL の誌面（CC-BY）。
- 台帳の「Springel ら 2005」の行（251 行）・精読ノート「Springel 2005」 14 行：題「Simulating the joint evolution of quasars, galaxies and their large-scale distribution」は arXiv の題。Nature の題は「Simulations of the formation, evolution and clustering of galaxies and quasars」（Crossref）。
- 台帳の「Balbus & Hawley 1991」の行（244 行）：手元の PDF は、I（pp.214–222）と II（Hawley & Balbus、pp.223–233）の二つを含む。Crossref でも二つが同じ DOI 10.1086/170270。書き足す案。
- 台帳の「White & Rees 1978」の行（242 行）：OUP の PDF は 2026-11-09 に自動取得で確認画面（403）。ADS の走査（1978MNRAS.183..341W）で読める。

精読ノート「Jeans 1902」（p.32 の安定の関数、p.50・p.51 の引用）、台帳の「White & Rees 1978」の行（p.347・p.348 の引用）、台帳の「Charbonneau 2010」の行（p.9・p.62 の引用）は、読んだ所では原典と合っていました。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Pollack ら（1996）は、NASA の技術報告のサーバー（NTRS）に置かれた、NASA の助成の最終報告に付けられた Icarus の誌面で読み、性格を添えて本文照合済にしました。政府機関のサーバーは出所が書け、学会や大学のサイトの写しと同じ扱いにできる、と考えました（「規約で決めたこと」2026-11-09 の学会のサイトと政府機関の英訳の行）。予想：出所の書ける写しは認めるという同じ行の趣旨に合う見込みです。違えば「未照合（読んだ頁）」に下げます。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：著者・関係者・公的機関・信頼できる企業のサービスに置かれた写しで、著作権に配慮されているものは、本文照合済として採ります。この扱いのままで、下げません。
- ADS の走査（ApJ・MNRAS・A&A の古い巻）は、頼む文の決め（出版社の許諾で置かれた写し）のとおり、性格を添えて本文照合済にしました。文字の層が無い走査（White & Rees・Zel'dovich）は、頁の画像を見て読みました。
- Charbonneau は、報告が引く 2020 年版が取れず、手元の 2010 年版で確かめました。2020 年版で変わった所がありうるので、2020 年版から書かれた主張の一部は未判定（版の食い違い）にしました。2020 年版は OA で、ブラウザで保存できれば確かめ直せます。
- 報告の「負の事例の探索不足」は、問いとして立てず、原典の中の至らない形を行として並べました（調べ方の計画と規約の中心の問い、規約で決めたこと「射程を狭める推奨は採らない」）。

## 新しく見つけた原典

台帳は書き換えていません。PDF は一時置き場に保存名の案で置いてあります（司令塔が手元の原典の置き場に移す）。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Burbidge, E. M., Burbidge, G. R., Fowler, W. A. & Hoyle, F. (1957). Synthesis of the Elements in Stars. *Rev. Mod. Phys.* 29(4), 547–650. DOI 10.1103/RevModPhys.29.547 | https://journals.aps.org/rmp/pdf/10.1103/RevModPhys.29.547 （APS の誌面。保存名手元の PDF） | 手元に保存した |
| Press, W. H. & Schechter, P. (1974). Formation of Galaxies and Clusters of Galaxies by Self-Similar Gravitational Condensation. *ApJ* 187, 425–438. DOI 10.1086/152650 | https://articles.adsabs.harvard.edu/pdf/1974ApJ...187..425P （手元の PDF） | 手元に保存した（ADS の走査） |
| Bond, J. R., Cole, S., Efstathiou, G. & Kaiser, N. (1991). Excursion Set Mass Functions for Hierarchical Gaussian Fluctuations. *ApJ* 379, 440–460. DOI 10.1086/170520 | https://articles.adsabs.harvard.edu/pdf/1991ApJ...379..440B （手元の PDF） | 手元に保存した（ADS の走査） |
| Dekel, A. & Birnboim, Y. (2006). Galaxy bimodality due to cold flows and shock heating. *MNRAS* 368(1), 2–20. DOI 10.1111/j.1365-2966.2006.10145.x | https://arxiv.org/pdf/astro-ph/0412300 （著者稿 v3。手元の PDF） | 手元に保存した（著者稿） |
| Blandford, R. D. & Znajek, R. L. (1977). Electromagnetic extraction of energy from Kerr black holes. *MNRAS* 179(3), 433–456. DOI 10.1093/mnras/179.3.433 | https://articles.adsabs.harvard.edu/pdf/1977MNRAS.179..433B （手元の PDF） | 手元に保存した（ADS の走査） |
| Shakura, N. I. & Sunyaev, R. A. (1973). Black Holes in Binary Systems. Observational Appearance. *A&A* 24, 337–355 | https://articles.adsabs.harvard.edu/pdf/1973A%26A....24..337S （文字の層の無い走査。手元の PDF） | 手元に保存した（p.337 の書誌だけ見た） |
| Johansen, A. ほか (2007). Rapid planetesimal formation in turbulent circumstellar disks. *Nature* 448, 1022–1025. DOI 10.1038/nature06086 | https://arxiv.org/pdf/0708.3890 （著者稿。手元の PDF） | 手元に保存した（著者稿） |
| Drążkowska, J. ほか (2023). Planet Formation Theory in the Era of ALMA and Kepler: from Pebbles to Exoplanets. *Protostars and Planets VII*（ASP Conf. Ser. 534） | https://arxiv.org/pdf/2203.09759 （著者稿 v3。手元の PDF） | 手元に保存した（著者稿） |
| Toomre, A. (1964). On the gravitational stability of a disk of stars. *ApJ* 139, 1217–1238. DOI 10.1086/147861 | https://articles.adsabs.harvard.edu/pdf/1964ApJ...139.1217T （手元の PDF） | 手元に保存した（ADS の走査） |
| Taylor, G. I. (1950). The formation of a blast wave by a very intense explosion. I. Theoretical discussion. *Proc. R. Soc. A* 201(1065), 159–174. DOI 10.1098/rspa.1950.0049 | Royal Society（自動取得で確認画面。ADS に全文なし） | 自動では取れない（ブラウザでの保存が要る） |
| Bell, A. R. (1978). The acceleration of cosmic rays in shock fronts — I. *MNRAS* 182(2), 147–156. DOI 10.1093/mnras/182.2.147 | https://articles.adsabs.harvard.edu/pdf/1978MNRAS.182..147B （手元の PDF） | 手元に保存した（ADS の走査） |
| Babcock, H. W. (1961). The Topology of the Sun's Magnetic Field and the 22-Year Cycle. *ApJ* 133, 572ff. DOI 10.1086/147060 | https://articles.adsabs.harvard.edu/pdf/1961ApJ...133..572B （手元の PDF） | 手元に保存した（ADS の走査） |
| Parker, E. N. (1955). Hydromagnetic Dynamo Models. *ApJ* 122, 293–314. DOI 10.1086/146087 | https://articles.adsabs.harvard.edu/pdf/1955ApJ...122..293P （手元の PDF） | 手元に保存した（ADS の走査） |
| Charbonneau, P. (2020). Dynamo models of the solar cycle. *Living Rev. Sol. Phys.* 17, 4. DOI 10.1007/s41116-020-00025-6 | Springer（OA。自動取得で確認画面） | 自動では取れない（ブラウザでの保存が要る） |
| Zel'dovich, Ya. B. (1970). Gravitational Instability: An Approximate Theory for Large Density Perturbations. *A&A* 5, 84–89 | https://articles.adsabs.harvard.edu/pdf/1970A%26A.....5...84Z （文字の層の無い走査。手元の PDF） | 手元に保存した（ADS の走査） |
| Lattimer, J. M. & Schramm, D. N. (1974). Black-Hole-Neutron-Star Collisions. *ApJ* 192, L145–L147. DOI 10.1086/181612 | https://articles.adsabs.harvard.edu/pdf/1974ApJ...192L.145L （手元の PDF） | 手元に保存した（ADS の走査） |
| Kasen, D. ほか (2017). Origin of the heavy elements in binary neutron-star mergers from a gravitational-wave event. *Nature* 551, 80–84. DOI 10.1038/nature24453 | https://arxiv.org/pdf/1710.05463 （著者稿。手元の PDF） | 手元に保存した（著者稿） |
| Spitzer, L. (1969). Equipartition and the Formation of Compact Nuclei in Spherical Stellar Systems. *ApJ* 158, L139–L143. DOI 10.1086/180451 | https://articles.adsabs.harvard.edu/pdf/1969ApJ...158L.139S （手元の PDF） | 手元に保存した（ADS の走査） |
| Heggie, D. C. (1975). Binary Evolution in Stellar Dynamics. *MNRAS* 173(3), 729–787. DOI 10.1093/mnras/173.3.729 | https://articles.adsabs.harvard.edu/pdf/1975MNRAS.173..729H （手元の PDF） | 手元に保存した（ADS の走査） |
| Lynden-Bell, D. & Wood, R. (1968). The Gravo-Thermal Catastrophe in Isothermal Spheres and the Onset of Red-Giant Structure for Stellar Systems. *MNRAS* 138(4), 495–525. DOI 10.1093/mnras/138.4.495 | https://articles.adsabs.harvard.edu/pdf/1968MNRAS.138..495L （手元の PDF） | 手元に保存した（ADS の走査） |
| Hénon, M. (1961). *Ann. d'Astrophys.* 24, 369（題は確かめていない） | https://articles.adsabs.harvard.edu/pdf/1961AnAp...24..369H （仏語、文字の層の無い走査。手元の PDF。保存名の題は推測） | 手元に保存した（読んでいない） |
| Kippenhahn, R., Weigert, A. & Weiss, A. (2012). *Stellar Structure and Evolution*, 2nd ed. Springer | 書籍（OA なし） | 書誌だけ |
| Sedov, L. I. (1959). *Similarity and Dimensional Methods in Mechanics*. Academic Press | 書籍（取得を試していない） | 書誌だけ |
| Boss, A. P. (1997). *Science* 276, 1836（巻と頁は Drążkowska らの文献表から。題と DOI は確かめていない） | Science（有料。取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「White & Rees 1978」の行（White & Rees 1978）：ADS の走査（https://articles.adsabs.harvard.edu/pdf/1978MNRAS.183..341W 、手元の PDF）で読める。OUP の PDF は 2026-11-09 に確認画面。
- 台帳の「Tumlinson ら 2017」の行（Tumlinson ら 2017）：arXiv の著者稿 v1 を取った（手元の PDF）。
- 台帳の「Balbus & Hawley 1991」の行（Balbus & Hawley 1991）：手元の PDF は I と II の二つを含む。
- 台帳の「Pollack ら 1996」の行（Pollack ら 1996）：NTRS 19970037595（https://ntrs.nasa.gov/api/citations/19970037595/downloads/19970037595.pdf ）は NASA の助成 NAG2-984 の最終報告で、PDF の 11〜34 頁に Icarus の誌面が付いている（手元の PDF）。状態を 自動では取れない から 手元に保存した（政府の報告に付けられた誌面の写し）に。
- 台帳の「Blandford & Ostriker 1978」の行（Blandford & Ostriker 1978）：ADS の PDF を取った（手元の PDF）。
- 台帳の「Abbott ら 2017」の行（Abbott ら 2017）：手元の PDF は PRL の誌面（CC-BY）。注の「arXiv 1710.05832」を直す。
- 台帳の「Spitzer 1987」の行（Spitzer 1987）：同じ著者の論文版 Spitzer 1969（台帳に足す案）が読める。
- 台帳の「Springel ら 2005」の行（Springel ら 2005）：Nature の題は「Simulations of the formation, evolution and clustering of galaxies and quasars」。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 天文学の古い論文は、ADS の誌面の走査で、ほぼすべて自動取得で取れました（20 本ほど。403 は無かった）。ただし 1970 年代の A&A・MNRAS の一部と仏語の誌は、走査に文字の層が無く、pdftotext が空でした。頁の画像を見て読みました。文字を読み取る道具（OCR）が手元に無いので、画像を見られる頁の数に限りがあります。
- 書籍だけの論（Kippenhahn・Spitzer 1987・Sedov）は、同じ著者の論文版（Spitzer 1969）や、出版社の壁の論文が政府のサーバーに付いている例（Pollack ら 1996 が NASA の助成の報告に付いていた）で、論の芯に当たれました。NTRS の検索で、NASA の研究者が著者の論文を探すと見つかることがあります。
- 報告の帰属の誤りは、後の教科書や研究の像を、古い原典に帰す形が多くありました（ジーンズ質量・ΛCDM・パンケーキからフィラメントへの階層・二つの中性子星の合体）。原典の年と、その論文が使った語を突き合わせると見つかりました。
- 天文学の原典は、分かれ目の下で何が起きるかを、自分の論の一部として書いていました（球のまま残る星雲、熱いまま残るガス、円盤が消えて止まる惑星、壊れる軟らかい連星）。争いのある所（巨大惑星の形成・太陽のダイナモ・星形成を止めるもの）は、総説の著者自身が未解決や合意の無さを書いていて、研究の一線の書き分けの根拠になりました。
