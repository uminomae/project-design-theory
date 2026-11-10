# 化学：記録から外した作業の節

`cs/evidence/evidence-D03-chemistry.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D03-chemistry.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（73〜84 行）と本文（86 行・258 行） | 10 | 強い 5（核生成・ミクロ相分離・BZ・反応拡散・ゾル－ゲル）・部分 4・条件付き 1 |
| en（59 行・63〜72 行・184 行） | 10 | Strong 8（上の 5 に、超分子と化学振動を足す）・Partial 2・Judgment withheld 1。59 行・184 行は「nine of the ten」に対応 |
| pres（23 行・46〜55 行） | 10 | 強い 5・部分 4・条件付き 1。段の欄は ja と 6 か所で違う |
| 退避版（392 行・396〜405 行） | 10 | Accept 9・CA 1 |
| 調べた跡 phase5（25〜27 行） | 10 | Anchor 4（核生成・ミクロ相分離・BZ・反応拡散）・Scoped 4（触媒・超分子・ゾル－ゲル・化学振動）・High-risk 2（爆発限界・化学進化） |

ja の表の「主な対応段階」と pres の段の欄は、BZ（全5段階／場→波→縁→渦）、触媒（渦／全5段階の循環）、超分子（場・縁・束／全5段階）、爆発限界（縁／場→波→縁→渦）、化学進化（--／場→波→(縁)→渦→束）で違います。ja の「強い 5」は、調べた跡の Anchor 4 にゾル－ゲルを足したものです。en の Strong 8 は退避版の Accept 9 から爆発限界と触媒を引いた数と合わず、出どころが追えません。pres 43〜45 行は表の見出しが崩れています（「温度｜理論群｜位置づけ」の下に別の表の区切りの行がある）。

### 横断の節は報告の作った分け方

報告の横断の節（ja 206〜230 行）の四つ、「拮抗が縁を生む」「制約が創造を可能にする」「局所からグローバルへの質的転換」「同一の数学的構造のスケール横断」と、未解決の問いの「縁の二系統分類」（ja 240〜242 行）は、調べた跡（phase6 210 行の仮説 1・phase7 の パターン 2）と退避版（429〜443 行・463 行）が作った分け方で、原典の著者の分け方ではありません（型 H）。原典で確かめると、次のようになります。

- 「拮抗が縁を生む」の 5 件のうち、原典に兼ね合いが書かれていたのは、核生成（Becker & Döring pp.1・3）と BZ（Field & Noyes p.1878 の competition）です。反応拡散の「activator と inhibitor」は Turing の語ではなく、ゾル－ゲルの「局所架橋の蓄積とグローバル連結の臨界条件」は、二つのものの押し合いでなく一つの量の分かれ目です（Chambon & Winter p.684）。ミクロ相分離は原典に当たれていません。逆に、報告が 5 件に数えなかった爆発限界（分岐と停止、Semenov p.491）・超分子（引力と斥力、平衡化とガラス、Whitesides & Grzybowski p.2419）・化学振動（負のフィードバックと遅れ、Novák & Tyson）・化学進化（取り合いと寄生体、Ameta ら pp.7–8）は、原典に兼ね合いが書かれていました。
- 「制約が創造を可能にする」は、原典に根拠がありません。超分子で原典が書くのは、可逆であることが規則正しい構造に要ることで（p.2419）、制約の語ではありません。
- 「同一の数学的構造のスケール横断」は、Lotka–Volterra を Hopf 分岐の正規形に並べる取り違え（9 の節）に立っています。
- 「縁の二系統分類」の平衡型と分岐型は、Whitesides と Grzybowski の静的と動的の分け方（pp.2418–2419）と似ていますが、報告はこの原典を引いていません。

### 至らない形を外に置いていること

報告は、爆発を「秩序形成ではなく破壊的変換」として5段階への「重要な反例」に置き（ja 174 行）、未解決の問いに「創造的な縁と破壊的な縁の区別」を立てています（ja 252〜254 行、pres 100 行は「適用範囲をどう限定するか」）。平衡系の超分子は「渦の欠如」の問いに置いています（ja 236〜238 行）。原典を開くと、至らない形と、その分かれ目が、論の中心に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| 核生成 | 小さい滴は蒸発する。液体の核が先に勝つ（Becker & Döring pp.3・29–30） | 臨界の滴の半径、核の形 |
| BZ 反応 | 定常に落ち着いて振動しない。閉じた系では平衡へ崩れる。Lotka の振動は一つの形に落ち着かない（Field & Noyes pp.1877・1883–1884） | 係数 f と k_M5 の範囲、臭化物イオンの臨界の濃度 |
| 反応拡散 | 均一なまま続く（Turing p.42） | パラメータ I の符号 |
| ゾル－ゲル | pc の下は溶液のまま。ガラス化が割り込む（Chambon & Winter pp.684・696。写し） | 架橋の進み具合 pc |
| 触媒サイクル | 生成物が酵素を奪う。平衡に近づくと式が合わない（Johnson & Goody。二次資料） | 生成物の濃度 |
| 爆発限界 | 何も起きない。連鎖の雪崩（Semenov p.491） | 分岐と停止の速さ、圧力・容器の大きさ |
| 超分子 | ガラスになる。流れを止めると細胞は死ぬ（Whitesides & Grzybowski p.2419） | 可逆か、エネルギーの流れがあるか |
| 化学振動 | 定常に落ち着く。刺激の窓の外では振動しない。双安定の病気の枝（Novák & Tyson、Goldbeter 2018 §1–3） | 遅れの長さ、刺激の強さ、時間の尺度 |
| 化学進化 | 集合ができない。寄生体の支配。分子種の絶滅。誤りの破局（Ameta ら pp.4・6–7・10） | つながりの密度 ρ*∼1/M、増え方の速さの差、系の大きさ |

数学・物理学・複雑系科学と同じく、至らない形は原典の中心にありました。爆発限界は、分かれ目の下（何も起きない）と上（暴走）の両方を一つの式の両側として書いており、創造的か破壊的かで分けるより、至る形と至らない形の境目の例として並べられます。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30 行・38 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（86 行）、「安全弁」（90〜92 行）、「結びの温度開示」「温度帯」（264〜265 行）、「Colophon」の generator_model（267〜277 行）。49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。pres 43 行の見出し「温度」も同じです。数学・物理学・経営学・複雑系科学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 判定の数が版ごとに違う | ja は調べた跡 phase5 の Anchor 4（25 行）にゾル－ゲルを足した形。en の Strong 8 は退避版の Accept 9（392 行）とも合わない |
| Lotka–Volterra を Hopf 分岐の同じ正規形に並べる | 退避版 357 行、調べた跡 phase5 245 行・phase6 169 行 |
| 「Semenov 1935, Hinshelwood 1956」 | 退避版 246 行 |
| 第三の限界の機構 | 退避版 249 行（HO₂・H₂O₂）。ja と en はそれぞれ別の書き方にした |
| ゲル点のフラクタル | 退避版 306 行、調べた跡 phase6 188 行 |
| 「制約が創造を可能にする」 | 退避版 429 行・463 行、調べた跡 phase7 23 行 |
| 「縁の二系統分類」 | 調べた跡 phase6 210 行（[SPECULATIVE]）・phase7 115 行・146 行 |
| 「縁の3条件」 | 調べた跡 phase6、退避版の縁フラグの欄（110 行・184 行） |
| 動的共有結合化学（Lehn 2007） | 退避版 213 行、調べた跡 phase5 92 行 |
| 触媒の劣化の「開いた螺旋」 | 調べた跡 phase6 |
| pres 65 行の「ずれ（誤差）が構造の源泉」 | 欠損駆動思考の語の持ち込み。退避版の「誤差」のレンズの見込み（確かめていない） |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「構造対応が最も直接的に確認される事例の一つ」（98 行）、「5段階モデルとの構造対応が数学的に最も厳密な事例」（134 行）、「縁を最も直観的に表現する事例」（146 行）、「化学領域では、縁の対応が最も強く現れました」（230 行）、「他領域にない貢献」（260 行）、en 78 行「among the strongest examples in the whole investigation」、pres 92 行「縁を物理的実体として定量的に記述できる稀有な領域」。
- 型 H（原典に無い体系）：「縁の3条件」（204 行）、「平衡型縁」「分岐型縁」（242 行）、「制約が創造を可能にする」（118 行・218 行）。
- 型 B（二つに切って置く）：「創造的な縁と破壊的な縁」（252〜254 行）、「平衡系」と「非平衡系」を切り分けて「渦なし」の4段階を立てる所（238 行）。
- 欠損駆動思考の持ち込み：pres 65 行「ずれ（誤差）が構造の源泉になりうる」。
- 語が同じだけの対応：「『波』が文字通り理論の中心に物理的実体として存在する」（110 行）、「『渦』が文字通り物理的な渦として出現」（122 行）。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- wiki の頁「Winter & Chambon 1986」 8 行：`source.path` が手元の PDF で、そのファイルは無い（手元の PDF は 1987 年の論文）。9 行：manifest_id が台帳の「Chambon & Winter 1987」の行で、wiki の頁「Chambon & Winter 1987」と同じ番号の頁が二つある。11〜13 行：status が「正典」、ocr_verified が true だが、1986 年の論文の本文は手元に無い。26 行「（PDF p.684 の Synopsis 部分より）」：Synopsis は p.683。
- wiki の頁「Unknown 0000」（著者の欄が unknown）と「Turing 1952」：同じ原典（Turing 1952）の頁が二つある（どちらも 9 行の台帳の番号の欄が、台帳の同じ行を指す）。
- wiki の頁「Ameta 2021」 4 行：aliases の題「Self-Reproduction in Autocatalytic Chemical Reaction Systems」は誤り。正しくは「Self-Reproduction and Darwinian Evolution in Autocatalytic Chemical Reaction Systems」（精読ノート「Ameta ら 2021」 1 行・14 行は正しい）。
- 台帳の「Ameta ら 2021」の行（179 行）：題が上と同じく誤り。
- 台帳の「Hordijk ら 2010」の行（178 行）：「Hordijk & Steel (2010)」は著者が欠けている。正しくは Hordijk, Hein & Steel（精読ノート「Hordijk ら 2010」 13 行は正しい）。
- 台帳の「Becker-Doring 1935」の行（165 行）：取得先は「UNT Digital Library (NASA technical reports)」とあるが、同じ PDF が NASA の NTRS 19930093856 にある（バイト単位で同じ）。NACA TM 1374（1954、訳者 J. Vanier）の英訳であることを書き足す案。
- 台帳の「Chambon & Winter 1987」の行（172 行）：取得先の rheology.tripod.com は個人向けのホスティングで、上げた人が分からない。
- 台帳の「Johnson & Goody 2011」の行（166 行）：OA の URL（europepmc.org の `?pdf=render`）は、2026-11-09 に確認画面（403）を返した。

精読ノート「Becker-Doring 1935」・「Field & Noyes 1974」・「Chambon & Winter 1987」の引用と頁は、読んだ所では原典と合っていました（「Field & Noyes 1974」の p.1878・p.1882、「Chambon & Winter 1987」の p.684・p.695・p.696）。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Chambon & Winter（1987）の手元の PDF は、個人向けのホスティング（rheology.tripod.com）から取られ、上げた人が分かりません。archive.org の個人の写しと同じ扱いにし、「未照合（読んだ頁）」と書きました（「規約で決めたこと」の archive.org の行、調べ方の規約 §5-8）。予想：pjdhiro も同じ扱いを選ぶ見込みです（stance 2-6 誠実さ）。Journal of Rheology の版がブラウザで保存できれば本文照合済にできます。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：匿名の個人が上げた写しは、本文照合済にせず、未照合のまま読んだ頁を書きます。この扱いのままです。
- Miller（1953）は、国際生命起源学会（ISSOL）のサイトに置かれていた誌面の写しを、Wayback Machine の記録で読みました。学会のサイトは出所が書けるので、大学や著者のサイトの写しと同じ扱いにし、性格を添えて本文照合済にしました（「規約で決めたこと」2026-11-09 の授業用の写しの行）。予想：出所が書ける写しは認める、という同じ行の趣旨に合う見込みです。違えば「未照合（読んだ頁）」に下げます。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：著者・関係者・公的機関・信頼できる企業のサービスに置かれた写しで、著作権に配慮されているものは、本文照合済として採ります。この扱いのままで、下げません。
- Becker & Döring（1935）は、NACA の英訳（パブリックドメイン）で本文照合済（訳）にしました。物理学の記録の 10 は、同じ論文を権利の確かめられない写しで読んで「未照合」としています。NACA の英訳を確かめ先に足せば、物理学の記録の照合の状態も上げられます。直すのは司令塔です（型 K の「済んだものを使う」の逆向き）。 追記（2026-11-09）：司令塔が、物理学の記録の 10 を本文照合済（訳）に上げました。
- 報告の「創造的な縁と破壊的な縁の区別」は、問いとして立てず、爆発限界を至らない形の行として並べました（調べ方の計画と規約の中心の問い、規約で決めたこと「射程を狭める推奨は採らない」）。

## 新しく見つけた原典

台帳は書き換えていません。Volmer & Weber（1926）は物理学の記録の案（台帳の「Volmer & Weber 1926」の行）、Turing（1952）は台帳の「Turing 1952」の行、Hordijk ら（2010）は台帳の「Hordijk ら 2010」の行と同じ文献なので、行を足さずにそちらを参照します。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Semenov, N. N. (1956). Some problems relating to chain reactions and to the theory of combustion（ノーベル講演）. *Nobel Lectures, Chemistry 1942–1962*, pp.487–514 | https://www.nobelprize.org/uploads/2018/06/semenov-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Hinshelwood, C. N. (1956). Chemical kinetics in the past few decades（ノーベル講演）. *Nobel Lectures, Chemistry 1942–1962*, pp.474–484 | https://www.nobelprize.org/uploads/2018/06/hinshelwood-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Semenov, N. N. (1928). *Z. Physik* 48, 571（題と DOI は確かめていない） | Springer（有料。取得を試していない） | 書誌だけ |
| Lehn, J.-M. (1987). Supramolecular Chemistry—Scope and Perspectives（ノーベル講演）. 同じ内容は *Angew. Chem. Int. Ed. Engl.* 27(1), 89–112 (1988). DOI 10.1002/anie.198800891 | https://www.nobelprize.org/uploads/2018/06/lehn-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Whitesides, G. M. & Grzybowski, B. (2002). Self-Assembly at All Scales. *Science* 295(5564), 2418–2421. DOI 10.1126/science.1070821 | https://courses.cs.duke.edu/spring06/cps296.5/papers/WG02.pdf （授業用の写し。誌面） | 取得先を確かめた（授業用の写し） |
| Field, R. J., Kőrös, E. & Noyes, R. M. (1972). Oscillations in chemical systems. II. *J. Am. Chem. Soc.* 94(25), 8649–8664. DOI 10.1021/ja00780a001 | ACS（有料。取得を試していない） | 書誌だけ |
| Zhabotinsky, A. M. (2007). Belousov-Zhabotinsky reaction. *Scholarpedia* 2(9):1435. DOI 10.4249/scholarpedia.1435 | http://www.scholarpedia.org/article/Belousov-Zhabotinsky_reaction | 取得先を確かめた（著者のまとめ） |
| Fredrickson, G. H. & Helfand, E. (1987). Fluctuation effects in the theory of microphase separation in block copolymers. *J. Chem. Phys.* 87(1), 697–705. DOI 10.1063/1.453566 | AIP（有料。自動取得で 403） | 書誌だけ |
| Flory, P. J. (1941). Molecular Size Distribution in Three Dimensional Polymers. I. Gelation. *J. Am. Chem. Soc.* 63(11), 3083–3090. DOI 10.1021/ja01856a061 | ACS（有料。取得を試していない） | 書誌だけ |
| Stockmayer, W. H. (1943). Theory of Molecular Size Distribution and Gel Formation in Branched-Chain Polymers. *J. Chem. Phys.* 11(2), 45–55. DOI 10.1063/1.1723803 | AIP（有料。取得を試していない） | 書誌だけ |
| Winter, H. H. & Chambon, F. (1986). Analysis of Linear Viscoelasticity of a Crosslinking Polymer at the Gel Point. *J. Rheol.* 30(2), 367–382. DOI 10.1122/1.549853 | AIP（有料。取得を試していない） | 書誌だけ |
| Flory, P. J. (1974). Spatial Configuration of Macromolecular Chains（ノーベル講演） | https://www.nobelprize.org/uploads/2018/06/flory-lecture.pdf | 取得先を確かめた（ゲル化は扱っていない） |
| Langmuir, I. (1918). The adsorption of gases on plane surfaces of glass, mica and platinum. *J. Am. Chem. Soc.* 40(9), 1361–1403. DOI 10.1021/ja02242a004 | ACS（有料。取得を試していない） | 書誌だけ |
| Goldbeter, A. (2018). Dissipative structures in biological systems: bistability, oscillations, spatial patterns and waves. *Phil. Trans. R. Soc. A* 376(2124), 20170376. DOI 10.1098/rsta.2017.0376 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6000149/ （PMC の全文の頁。Royal Society と Europe PMC の PDF は確認画面） | 取得先を確かめた |
| Novák, B. & Tyson, J. J. (2008). Design principles of biochemical oscillators. *Nat. Rev. Mol. Cell Biol.* 9(12), 981–991. DOI 10.1038/nrm2530 | PMC2796343（著者稿。NCBI の efetch で XML） | 取得先を確かめた（著者稿） |
| Prigogine, I. & Lefever, R. (1968). Symmetry Breaking Instabilities in Dissipative Systems. II. *J. Chem. Phys.* 48(4), 1695–1700. DOI 10.1063/1.1668896 | AIP（有料。取得を試していない） | 書誌だけ |
| Gilbert, W. (1986). Origin of life: The RNA world. *Nature* 319(6055), 618. DOI 10.1038/319618a0 | Nature（有料。取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Becker-Doring 1935」の行（Becker & Döring 1935）：手元の PDF は NACA TM 1374（1954 年 9 月、訳者 J. Vanier）の英訳。NTRS 19930093856（https://ntrs.nasa.gov/api/citations/19930093856/downloads/19930093856.pdf ）と同じファイル。パブリックドメイン。
- 台帳の「Johnson & Goody 2011」の行（Johnson & Goody 2011）：本文は PMC の著者稿で読める。1913 年の論文の英訳は補遺（`NIHMS324930-supplement-1_si_001.pdf`）で、PMC と Europe PMC で確認画面。
- 台帳の「Field & Noyes 1974」の行（Field & Noyes 1974）：手元の PDF は AIP の誌面（2012 年の AIP のサイトの表紙つき）。授業用の写しの元の URL が台帳に無い。
- 台帳の「Chambon & Winter 1987」の行（Chambon & Winter 1987）：手元の PDF は走査の画像で文字の層が無い。取得先の rheology.tripod.com は上げた人が分からない。
- 台帳の「Miller 1953」の行（Miller 1953）：誌面の写しが Wayback Machine の ISSOL のサイトの記録にある（http://web.archive.org/web/20090930124014/http://www.issol.org/miller/miller1953.pdf ）。台帳の OA の代替（ハワイ大学の FTP）は 2026-11-09 に 502。
- 台帳の「Hordijk ら 2010」の行（Hordijk ら 2010）：著者を Hordijk, Hein & Steel に。台帳の「Hordijk ら 2010」の行と同じ文献。
- 台帳の「Ameta ら 2021」の行（Ameta ら 2021）：題を「Self-Reproduction and Darwinian Evolution in Autocatalytic Chemical Reaction Systems」に。PDF は https://mdpi-res.com/d_attachment/life/life-11-00308/article_deploy/life-11-00308.pdf で取れる。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 化学の原典は、分かれ目の上と下で何が起きるかを、はっきり書いていました（臨界の滴の半径、臭化物イオンの臨界の濃度と係数 f の範囲、分岐と停止の速さ、ゲル点 pc、つながりの密度 ρ*）。下で起きることは「何も起きない」でなく、蒸発する・定常に落ち着く・溶液のまま・反応の跡が無い・集合ができない、という形で書かれていて、至らない形の材料になりました。Semenov の講演は、何も起きない形と暴走する形を、同じ分かれ目の両側として書いていました。
- 有料の原論文は、ノーベル講演（Semenov・Hinshelwood・Lehn）と PMC の著者稿（Johnson & Goody・Novák & Tyson）と授業の頁（Whitesides & Grzybowski）で、論の芯に当たれました。Flory のノーベル講演は鎖の形の話でゲル化を扱っておらず、講演がいつも論の確かめ先になるとは限りませんでした。
- 古い論文の政府機関の英訳（NACA TM 1374）は、手元の PDF と NTRS の PDF がバイト単位で同じで、パブリックドメインとして本文照合済（訳）にできました。済んだ分野（物理学）が同じ論文を権利の確かめられない写しで読んでいたので、分野をまたいで照合の状態を見直す必要がありました。
- PMC の XML（efetch）は、出版社の権利によって要旨だけのことがありました（Goldbeter 2018）。そのときは PMC の記事の頁（HTML）で全文が読めました。Europe PMC の REST は 500、Europe PMC の PDF は確認画面でした。
- 台帳の取得先が、その日は落ちているもの（ハワイ大学の FTP の 502）と、今は無いもの（ISSOL の 404。Wayback に記録あり）がありました。確認画面と分けて書きました。
- 台帳の題と著者が、Crossref と二つ合いませんでした。wiki に同じ原典の頁が二つある組も二つありました。
