# 複雑系科学：記録から外した作業の節

`cs/evidence/evidence-D29-complexity-science.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D29-complexity-science.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（73〜82 行）と本文（84 行・269 行） | 10 | 強い 5（散逸構造・SOC・自己触媒集合・臨界現象・パーコレーション）・部分 4・条件付き 1 |
| en（59〜70 行・177 行） | 10 | Strong 9・Conditional 1 |
| pres（23 行・46〜55 行） | 10 | 強い 9・条件付き 1 |
| 退避版（418 行） | 10 | Accept 9・CA 1 |
| 調べた跡 phase5（19〜21 行） | 10 | Anchor 5（散逸構造・SOC・臨界現象・パーコレーション・反応拡散）・Scoped 4（自己触媒集合・シナジェティクス・オートポイエーシス・ネットワーク科学）・High-risk 1（カオスの縁） |

日本語版の「強い」5 件は、調べた跡の Anchor 5 件と、自己触媒集合と反応拡散が入れ替わっています。縁の「特に強い」件数も、ja 269 行「10件中4件で縁の3条件」、pres 97 行「4理論」、en 11 行「in 8 of the 10 entries」と違います。束の型の数は、ja 212 行が 4 つ、pres 104 行が 3 つで、en 113 行は「universality type」を三つ目に数え、日本語版と型の名が合いません。pres 43〜45 行は表の見出しが崩れています。

### 横断の節は報告の作った分け方

報告の横断の節（ja 204〜235 行）の四つ、「拮抗構造が縁の前提条件となる」（10 件中少なくとも 7 件）、「束の多型性」（4 つの型）、「縁の5つの実現型」、「束→場の循環」は、調べた跡（phase5〜7）が作った分け方で、原典の著者の分け方ではありません（型 H）。原典で確かめると、次のようになります。

- 「二つの力の拮抗」7 件のうち、原典に兼ね合いが書かれていたのは SOC（駆動と緩和の時間の尺度。Watkins p.21、Dickman pp.7–8）です。反応拡散の「活性化と阻害」は Turing の語ではなく（8 の節）、パーコレーションの「接続と非接続」と自己触媒集合の「触媒と食物供給」は、原典に押し合う二つの力として書かれていません。シナジェティクスとオートポイエーシスは本文に当たれていません。逆に、報告が 7 件に数えなかった臨界現象（相互作用と熱のゆらぎ。Wilson p.104）とカオスの縁（蓄積と伝達。Langton p.31）は、原典に兼ね合いが書かれていました。
- 「縁の5つの実現型」（閾値型・競合型・界面型・伝播型・構造型）と「束の4タイプ」は、原典に根拠がありません。束の型は調べた跡 phase5 で 3 つ、phase6 で 4 つに増えています（phase6 109 行・143 行）。
- 「束→場の循環」は、SOC で系が臨界の状態に戻ること（BTW 1988 p.365）と、散逸構造で分岐が続くこと（Prigogine p.272）に、原典の手がかりがあります。それを5段階の循環と読むのは読み替えです。

### 至らない形を外に置いていること

報告は「秩序の崩壊」「カスケード故障」「系の死」を調査の対象の外に置き（ja 40 行）、「『破壊』と『消滅』の過程が未記述」を未解決の問いにしています（ja 255〜257 行）。原典を開くと、至らない形と、その分かれ目が、論の中心に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| 散逸構造 | ゆらぎが減衰して消える。有限の系ではゆらぎが秩序の位相を乱す（Prigogine pp.267・277） | 勾配の臨界値、系の大きさ |
| SOC | 活動が止まる吸収状態。臨界を跳び越す。くっつき滑り。途切れない活動（Dickman pp.4・8、Watkins p.21） | 密度 ζc、駆動と緩和の時間の尺度の比 |
| 自己触媒集合 | RAF が閉じない（Hordijk & Steel p.8） | 触媒の度合い 1.25〜1.5 ほど |
| 臨界現象 | 固定点から離れて秩序か無秩序の側へ流れる（Wilson p.112） | 臨界温度 |
| パーコレーション | 成分がどれも小さい。狙った攻撃で崩れる（Newman pp.15・21） | 辺の割合 |
| 反応拡散 | 均一なまま続く。模様にならない不安定の形（Turing pp.42・51–52） | パラメータ I の符号 |
| カオスの縁 | 凍結・乱れ。最適でない種分化に留まる（Langton p.34、Mitchell ら p.36） | 秩序と乱れの間の転移、対称性の破れ方 |
| ネットワーク科学 | 協力が育ちにくい。片方の要素だけでは失敗する（Watts & Strogatz p.442、Barabási & Albert p.6） | 近道の割合、成長と選好の有無 |

数学・物理学・神経科学・人類学・民族学と同じく、至らない形は原典の中心にありました。

### テンプレート由来の表示

「立ち位置明示」（3 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（28〜30 行）、「方法論的開示（S60）」（42 行）、「温度帯の分布」（84 行）、「安全弁」（88〜90 行）、「結びの温度開示」「温度帯」（265〜267 行）、「Colophon」の generator_model（277〜287 行）。47 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。en 81・89・97 行などの「CX-004」のような番号も LLM の記号です。数学・物理学・経営学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 判定の数が版ごとに違う | 退避版の Accept 9・CA 1（418 行）が en と pres に、調べた跡 phase5 の Anchor・Scoped（19〜21 行）が ja の「強い・部分」の分け方に写った。ja の表の自己触媒集合と反応拡散は、phase5 と入れ替わっている |
| 「10件中少なくとも7件」の拮抗 | 調べた跡 phase7 7 行・116 行、phase6 127 行（仮説 2） |
| 束の多型性（3 型→4 型） | 調べた跡 phase5 28 行・171 行、phase6 109 行・143 行、phase7 21 行・114 行 |
| 縁の5つの実現型 | 調べた跡 phase7 34〜36 行（phase5 が元） |
| 縁の3条件、「10件中4件」 | 退避版の縁フラグ（114・190・230・272 行、418〜422 行）、phase7 79 行 |
| 活性化因子・阻害因子を Turing に帰す | 退避版 304 行・317 行、phase6 75 行 |
| λ が「信頼性の低い予測子」、トートロジー | 退避版 342 行・357 行、phase5 110 行、phase6 83 行 |
| Broido & Clauset、Battiston | 退避版 73 行・370 行、2026-02 の DR 176・196・257 行 |
| RAF を Kauffman に帰す | 退避版 101〜128 行の EV-CX-003 |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「5段階との構造対応が特に高い領域」（86 行）、「5段階の循環構造と最も整合する理論の一つ」（114 行）、「臨界点…縁に対応する強度は、本調査で最も高いもののひとつ」（134 行）、「縁の最も純粋な数学的モデル」（146 行）、「縁と渦の関係の最も明示的な記述」（156 行）、「従属原理は…最も明示的に記述する理論」（176 行）、pres 114 行「最も確定的な知見は、複雑系科学が『縁の学問』であるという点です」。
- 型 H（原典に無い体系）：「縁の5つの実現型」（221〜231 行）、「束の多型性」（210〜219 行）、「縁の3条件」（269 行）。
- 型 C（範囲を狭める）：「反-創造的プロセスは調査対象に含まれていません」（40 行）。原典は至らない形を中心に書いている。
- 型 J（演出）：pres 83 行「水が沸点に達する瞬間、磁性体がキュリー温度を通過する瞬間を想像してください」（呼びかけ）。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- 台帳の「Bak ら 1987」の行：題が「Self-Organized Criticality」。正しくは「Self-organized criticality: An explanation of the 1/f noise」（Crossref）。
- 台帳の「Kauffman 1986」の行：題が「Autocatalytic sets」。正しくは「Autocatalytic sets of proteins」（Crossref）。
- 台帳の「Hordijk & Steel 2004」の行：題が「Detecting autocatalytic sets」。正しくは「Detecting autocatalytic, self-sustaining sets in chemical reaction systems」（Crossref・著者の写しの表紙）。
- 台帳の「Clauset ら 2009」の行：取得版を「CMU tech report tr853, 2007 author version」とするが、手元の PDF の表紙は arXiv:0706.1062v1。
- 台帳の「Bak ら 1988」の行：OA の取得先が psychsafety.com（著者・出版社のサイトでない）。手元の PDF には ResearchGate の表紙が付く。
- 台帳の「Hordijk ら 2010」の行：状態が「手元に保存した」だが、local_file が「—」。
- wiki の頁「Bak, Tang & Wiesenfeld 1988」 81 行：1987 年の題が「An Explanation of 1/f Noise」。正しくは「An explanation of the 1/f noise」。
- 精読ノート「Munoz 2018」 26 行：引用が「hypothesis conjectures that」。arXiv 版 p.1 は「hypothesis suggests that」。
- 精読ノート「Langton 1990」 48 行・50 行：頁を p.16 とするが、誌面では p.25（Physica D の頁。ノートが OSTI の報告の頁で書いた可能性はあるが、確かめていない）。
- wiki の頁「Dickman ら 2000」 62 行：引用の頭が「SOC refers neither」。arXiv 版 p.18 は「"self-organized criticality" refers neither」で、略した語を引用符の中に入れている。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- BTW 1988 の手元の PDF（ResearchGate の表紙つき）と Langton 1990 の Zenodo の写し（CC0 と表示）は、上げた人と権利が確かめられないので、archive.org の個人の写しと同じ扱いにし、「未照合（読んだ頁）」と書きました（調べ方の計画と規約「規約で決めたこと」の archive.org の行、調べ方の規約 §5-8）。予想：pjdhiro も同じ扱いを選ぶ見込みです（stance 2-6 誠実さ）。Langton は OSTI の版が取れれば本文照合済にできます。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：匿名の個人が上げた写しは、本文照合済にせず、未照合のまま読んだ頁を書きます。この扱いのままです。
- Turing（1952）と Watts & Strogatz（1998）は、大学の授業の頁に置かれた誌面の写しで読み、本文照合済にしました（「規約で決めたこと」2026-11-09 の行）。
- SOC が自己調整か、隠れた調整か（Dickman ら 2000）は、研究の一線として書き、報告の「自己組織化」の主張を退けてはいません。悪い統合も統合として扱う決まり（調べ方の計画と規約の中心の問い）なので、統合の良し悪しで行を分けず、「悪い統合」という別の行も立てていません。

## 新しく見つけた原典

台帳は書き換えていません。Wilson の講演と 1971 年の論文、Haken の 1975 年の総説と Scholarpedia は、物理学の記録の案と同じ文献なので、行を足さずにそちらを参照します。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Turing, A. M. (1952). The chemical basis of morphogenesis. *Phil. Trans. R. Soc. Lond. B* 237(641), 37–72. DOI 10.1098/rstb.1952.0012 | https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf （授業用の写し。JSTOR の誌面）。Royal Society の PDF は確認画面 | 取得先を確かめた（授業用の写し） |
| Broadbent, S. R. & Hammersley, J. M. (1957). Percolation processes: I. Crystals and mazes. *Math. Proc. Camb. Phil. Soc.* 53(3), 629–641. DOI 10.1017/S0305004100032680 | Cambridge Core（要旨だけ。PDF は有料） | 書誌だけ（要旨照合済） |
| Varela, F. G., Maturana, H. R. & Uribe, R. (1974). Autopoiesis: The organization of living systems, its characterization and a model. *BioSystems* 5(4), 187–196. DOI 10.1016/0303-2647(74)90031-8 | Elsevier（有料） | 書誌だけ |
| Maturana, H. R. & Varela, F. J. (1980). *Autopoiesis and Cognition: The Realization of the Living*. Reidel | 書籍 | 書誌だけ [no-oa] |
| Mitchell, M., Hraber, P. T. & Crutchfield, J. P. (1993). Revisiting the Edge of Chaos: Evolving Cellular Automata to Perform Computations. Santa Fe Institute Working Paper 93-03-014 | https://arxiv.org/abs/adap-org/9303003 | 取得先を確かめた |
| Watts, D. J. & Strogatz, S. H. (1998). Collective dynamics of 'small-world' networks. *Nature* 393, 440–442. DOI 10.1038/30918 | https://snap.stanford.edu/class/cs224w-readings/watts98smallworld.pdf （授業用の写し。誌面）。Nature の PDF はログインの頁 | 取得先を確かめた（授業用の写し） |
| Barabási, A.-L. & Albert, R. (1999). Emergence of Scaling in Random Networks. *Science* 286, 509–512. DOI 10.1126/science.286.5439.509 | https://arxiv.org/abs/cond-mat/9910332 （著者稿） | 取得先を確かめた（著者稿） |
| Broido, A. D. & Clauset, A. (2019). Scale-free networks are rare. *Nat. Commun.* 10. DOI 10.1038/s41467-019-08746-5 | https://arxiv.org/abs/1801.03400 （著者稿）。出版社の版もオープンアクセス | 取得先を確かめた |
| Gierer, A. & Meinhardt, H. (1972). A theory of biological pattern formation. *Kybernetik* 12, 30–39. DOI 10.1007/BF00289234 | Springer（取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Bak ら 1987」の行（BTW 1987）：題を「Self-organized criticality: An explanation of the 1/f noise」に。APS の PDF は自動取得で案内の頁。
- 台帳の「Bak ら 1988」の行（BTW 1988）：手元の PDF は ResearchGate の表紙つきの誌面の写しで、上げた人は不明。取得先の psychsafety.com は第三者のサイト。
- 台帳の「Clauset ら 2009」の行（Clauset ら）：手元の PDF は arXiv:0706.1062v1。
- 台帳の「Kauffman 1986」の行（Kauffman 1986）：題を「Autocatalytic sets of proteins」に。
- 台帳の「Hordijk & Steel 2004」の行（Hordijk & Steel 2004）：題を「Detecting autocatalytic, self-sustaining sets in chemical reaction systems」に。著者の頁の写しは出版社の校正刷りで、誌面の頁番号が無い。
- 台帳の「Hordijk ら 2010」の行（Hordijk ら 2010）：https://mdpi-res.com/d_attachment/entropy/entropy-12-01733/article_deploy/entropy-12-01733.pdf で PDF が取れた（MDPI の頁は 403）。
- 台帳の「Langton 1990」の行（Langton 1990）：OSTI は 2026-11-09 に 502 と接続の拒否。誌面の写しが Zenodo（records/1258375、CC0 と表示、権利未確認）にある。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 複雑系の原典は、分かれ目の上と下で何が起きるかを、式や数で書いていました（勾配の臨界値、密度 ζc、触媒の度合い 1.25〜1.5、臨界温度、パラメータ I の符号）。下で起きることは「何も起きない」でなく、減衰・吸収状態・閉じない集まり・均一のまま、という形で書かれていて、至らない形の材料になりました。
- 報告の横断の節は、調べた跡（phase5〜7）が作った分け方を、そのまま本文に移したものでした。原典で確かめると、報告が数えた「拮抗」と、原典に書かれた兼ね合いは、半分ほどしか重なりませんでした。
- 有料の原論文は、同じ分野の総説（Watkins ら・Dickman ら・Newman）と著者稿（arXiv）、著者の大学の頁、授業の頁で、論の芯に当たれました。物理学と同じく、ノーベル講演は著者のまとめ直しとして使えました。
- 台帳の題が、Crossref の題と三つ合いませんでした（「Bak ら 1987」・「Kauffman 1986」・「Hordijk & Steel 2004」）。手元の PDF の表紙と Crossref の両方で突き合わせる手順が、この分野でも要りました。
- OSTI のように台帳が OA と書く取得先が、その日は落ちていることがあります。落ちたのか確認画面なのかを分けて書きました。
