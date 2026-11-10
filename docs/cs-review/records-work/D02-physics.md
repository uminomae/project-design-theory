# 物理学：記録から外した作業の節

`cs/evidence/evidence-D02-physics.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D02-physics.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

判定の数は、四つの版と調べた跡で、どれも違います。

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja 本文（88 行・284 行・305 行） | 10 | 強い 5（QFT を含む）・部分 3・条件付き 1。合わせて 9 で、10 に足りない |
| ja の表（75〜86 行） | 10 | 強い 6（QFT・アブリコソフ・KZM・くりこみ群・レーザー・核生成）・部分 3・条件付き 1 |
| en（69 行・71〜82 行・200 行） | 10 | Strong 9・Conditional 1 |
| pres（21 行・23 行・44〜55 行・88 行） | 11 | 強い 7（根拠強度「高」）・中 3・棄却 1 |
| 退避版（306 行・351 行） | 10 | Accept 9・CA 1（Reject 1 は数に入れない） |
| 調べた跡 phase5（29〜31 行） | 10 | Anchor 4（QFT・アブリコソフ・くりこみ群・レーザー）・Scoped 4（BKT・KZM・SSB・核生成）・High-risk 1（デコヒーレンス）。ベナール対流はどの段にも入っていない |

論ごとに並べると、BKT は ja「部分的」・en「Strong」・pres「高」、SSB は ja「部分的」・en「Strong」・pres「中」、ベナール対流は ja「部分的」・en「Strong」・pres「中」です。段の当てはめ（「全5段階」か「場・波・縁・束」か）は、四つの版で同じでした。

### 「全5段階」の当てはめ

報告は 10 の論のうち 9 を「全5段階」としています（ja 76〜86 行）。原典で確かめると、9 の当てはめの多くは、場に「対称な相・準安定相」、波に「熱ゆらぎ・臨界ゆらぎ」を置く同じ型で、どの論の原典の構造から出てきたものでもありませんでした。合うところを数える基準（ja 36 行「全5段階に明確な物理的対応がある」）では、相転移の論はほぼどれでも全5段階に当たります。原典で二つのものの競り合いがはっきり書かれていたのは、BKT（エネルギーとエントロピー）、アブリコソフ（磁場と超伝導）、KZM（両立しない選択）、ベナール対流（浮力と粘性・伝導、型どうし）、核生成（表面の仕事と凝縮の利得）、Lorenz（二つの定常な状態）です。場の量子論（Feynman 1948）とくりこみ群の原典には、競り合いは書かれていませんでした。

報告は、至らない形を、5段階の外の問い（ja 262〜280 行「渦段階の必須性」「束の多重性」など）として置いています。原典では、解離する渦の対（BKT）、両立しない選択の跡の欠陥（KZM）、蒸発する小さい核（核生成）、落ち着かない流れ（Bénard p.4、Lorenz）は、どれも論の中心にあります。数学・神経科学・人類学・民族学と同じ形です。

### テンプレート由来の表示

「立ち位置明示」（3 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（32 行・40 行・224 行）、「方法論的開示（S60）」（46 行）、「温度帯の分布」（88 行）、「安全弁」（92〜94 行）、「結びの温度開示」「温度帯」（292〜297 行）、「Colophon」の generator_model（299〜309 行）。48〜51 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。数学・神経科学・経営学・人類学・民族学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 判定の数が版ごとに違う | 退避版の Accept 9・CA 1（351 行）が en に、調べた跡 phase5 の Anchor・Scoped（29〜31 行）が ja の「強い・部分」の分け方に写った。ja の表の KZM の「強い」は、どちらとも合わない |
| QFT の提唱者と Feynman 1948 の引用 | 退避版 58 行の refs（Weinberg・Feynman 1948・Schwinger 1951・Dyson 1949）が、報告の「提唱者」の列と「事実として」の出典に写った |
| 「QFTの構造を抽出し一般化したものが5段階」 | 退避版 47 行 |
| アブリコソフの三角格子 | 退避版 99 行。精読ノート「Abrikosov 1957」 37 行も、1957 年の脚注の値を取り違えている（下の「精読ノートと wiki の誤り」） |
| デコヒーレンスの 10⁻²⁰ 秒 | 調べた跡 phase6 165 行 |
| relevant・irrelevant・marginal を採用・棄却・保持に読む | 退避版 186 行の「誤差の3運命」レンズ、調べた跡 phase5 116 行 |
| 「縁の3条件」 | 調べた跡 phase6 19 行・53 行、退避版の縁フラグの欄、pres 95 行 |
| 「縁の二類型」 | 調べた跡 phase6 220 行（H3）・phase7 30 行 |
| 核の界面の「厚み」 | 退避版の核生成の項の「境界の厚み」レンズ |
| Kibble 2002 | 2026-02 の DR 136 行（arXiv cond-mat/0211110） |
| 閾値遷移と欠損駆動思考を結ぶ文 | 調べた跡 phase7 28 行（報告の本文には写っていない） |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「物理学領域の旗艦事例」（118 行）、「10件の中で最も直感的な実例」（142 行）、「状態ではなく操作として縁を捉えられる稀有な理論」（130 行）、「5段階モデルの最も視覚的な実例」（216 行）、「30の調査領域中でも渦段階の物理的可視性が最も高い領域の一つ」（244 行）、「驚くほど多様な物理的実現」（250 行）、「物理学領域で最も顕著な発見は『閾値遷移の普遍性』」（286 行）。
- 型 H（原典に無い体系）：「縁の3条件（関係網・未決定性・渦への接続）」（90 行）、「縁の二類型——概念的縁と物理的縁」（232〜240 行）、「臨界・界面トリガ型」（44 行・274 行）。
- 型 B（二つに切って置く）：「概念的縁」と「物理的縁」（236〜238 行）。
- 欠損駆動思考の持ち込み：くりこみ群の「採用・棄却・保持」（128 行）。
- 至らない形を過程の外に置く書き方：「渦段階の欠如」「5段階の必須性への直接的な問い」（204〜206 行・288 行）、pres 105 行「重要な反証候補」。

### 精読ノートと wiki の誤り（司令塔が直す）

- 精読ノート「Abrikosov 1957」 37 行「三角格子（beta = 1.16）がさらにエネルギー的に有利であることも脚注で言及されている」、98 行：取り違え。1957 年の脚注（pp.1177–1178）は、三角格子は β＝1.32 で正方格子（1.18）より不利と書いている。1.16 は後の計算の値で、ノーベル講演（pp.60–61）に出る。
- wiki の頁「Abrikosov 1957」 42 行「この渦糸は互いの反発力により規則的な三角格子（アブリコソフ格子）を形成する」「Φ_0 = hc/2e」：帰属違い。1957 年の論文は上部臨界磁場の近くで正方格子。hc/2e は 1957 年の論文の値として確かめていない。
- 精読ノート「Pyka 2013」：ファイル名は Pyka だが、中身は Ulm ら（ncomms3290）。Pyka らは別の論文（ncomms3291）。
- wiki の頁「Unknown 0000」（著者の欄が unknown）と「Ulm 2013」：同じ原典（Ulm ら 2013）の頁が二つある。
- wiki の頁「Rayleigh 1916」 2 行：題が「下方加熱された水平流体層における熱対流の問題」で、台帳の誤った題（下の台帳の「Rayleigh 1916」の行）から来ている。正しい題は aliases の先頭にある。
- wiki の頁「Haken 1983」：status が「正典」だが、元の PDF は前付けだけで、本文は読まれていない。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- 5段階の場の語が量子の場から来ていることは、発想の由来として書き、場の量子論の構造が5段階と似ているかとは分けました。予想：pjdhiro の言葉（素朴な感覚として選んだ）から、発想の由来を構造の類似の証拠にも割り引きにも使わない形が合う見込みです（理論との距離の規約の場の行、stance 1-4）。 → 答え（pjdhiro 2026-11-08、調べ方の計画と規約「判断が要ること」5）：五段階の場は、量子の場から、素朴な感覚として、環境や状況や世界の安定したイメージを空間で言い表すために選んだ語です。野中の場（Ba）やブルデューの場とは、語が同じだけで、系譜は別です。語が同じことは、対応の根拠にも反証にも数えません。
- Becker & Döring（1935）は、Internet Archive が雑誌のマイクロフィルムから作った写しで本文を読みました。権利が確かめられないので「未照合」とし、読んだ頁を書きました（調べ方の計画と規約「規約で決めたこと」の archive.org の行、調べ方の規約 §5-8）。 追記（2026-11-09）：化学の記録で NACA の英訳（NACA TM 1374。パブリックドメイン）を確かめ、この記録の 10 も本文照合済（訳）に上げました。原文の写しは、権利の確かめられないまま、頁の照らし合わせにだけ使っています。
- アブリコソフの混合状態（磁場と超伝導が、糸の形で区別を残したまま一つの試料に入り込み合う）は、pjdhiro が渦について言う「二つに分けられるものが二つに分けられなくなる」形と近いかもしれません。KZM の欠陥（両立しない選択の跡が残る）と、自発的対称性の破れ（選ばれなかった向きが励起として残る）も、統合に至らない形と、衝突の跡が形に残る形の材料です。どれも Claude の読み替えによる類推で、しっくり感の判定は pjdhiro が行います。一面の表を並べる段 3 で見せる材料として残します。答え（pjdhiro 2026-11-09）：既存の理論で本人の見方を論証はしないが、類推はする。この文は、論証でなく類推として残します（書き方の規約 §7-5）。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Kosterlitz, J. M. & Thouless, D. J. (1973). Ordering, metastability and phase transitions in two-dimensional systems. *J. Phys. C* 6, 1181–1203. DOI 10.1088/0022-3719/6/7/010 | IOP（有料） | 書誌だけ |
| Berezinskii, V. L. (1971). Destruction of long-range order in one-dimensional and two-dimensional systems having a continuous symmetry group. I. Classical systems. *Sov. Phys. JETP* 32(3), 493–500 | http://jetp.ras.ru/cgi-bin/dn/e_032_03_0493.pdf （JETP の公開アーカイブ。英訳） | 取得先を確かめた（要旨だけ読んだ） |
| Kosterlitz, J. M. (2017). Nobel Lecture: Topological defects and phase transitions. *Rev. Mod. Phys.* 89, 040501. DOI 10.1103/RevModPhys.89.040501 | https://www.nobelprize.org/uploads/2018/06/kosterlitz-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Abrikosov, A. A. (2004). Nobel Lecture: Type-II superconductors and the vortex lattice. *Rev. Mod. Phys.* 76, 975–979. DOI 10.1103/RevModPhys.76.975 | https://www.nobelprize.org/uploads/2018/06/abrikosov-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Kibble, T. W. B. (1976). Topology of cosmic domains and strings. *J. Phys. A* 9, 1387–1398. DOI 10.1088/0305-4470/9/8/029 | IOP（有料） | 書誌だけ |
| Zurek, W. H. (1985). Cosmological experiments in superfluid helium? *Nature* 317, 505–508. DOI 10.1038/317505a0 | Nature（有料） | 書誌だけ |
| Zurek, W. H. (1996). Cosmological experiments in condensed matter systems. *Phys. Rep.* 276, 177–221. DOI 10.1016/S0370-1573(96)00009-9 | https://arxiv.org/abs/cond-mat/9607135 （著者稿） | 取得先を確かめた |
| Pyka, K. et al. (2013). Topological defect formation and spontaneous symmetry breaking in ion Coulomb crystals. *Nat. Commun.* 4, 2291. DOI 10.1038/ncomms3291 | https://arxiv.org/abs/1211.7005 （著者稿）。Nature の PDF https://www.nature.com/articles/ncomms3291.pdf は自動取得でログインの案内へ送られた（ブラウザでの保存が要る。保存名の案手元の PDF） | 取得先を確かめた（著者稿） |
| Nambu, Y. (2009). Nobel Lecture: Spontaneous symmetry breaking in particle physics: A case of cross fertilization. *Rev. Mod. Phys.* 81, 1015–1018. DOI 10.1103/RevModPhys.81.1015 | https://www.nobelprize.org/uploads/2018/06/nambu_lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Higgs, P. W. (2014). Nobel Lecture: Evading the Goldstone theorem. *Rev. Mod. Phys.* 86, 851–853. DOI 10.1103/RevModPhys.86.851 | https://www.nobelprize.org/uploads/2018/06/higgs-lecture.pdf | 取得先を確かめた（著者のまとめ直し。拾い読み） |
| Goldstone, J. (1961). Field theories with « Superconductor » solutions. *Nuovo Cimento* 19, 154–164. DOI 10.1007/BF02812722 | Springer（有料） | 書誌だけ |
| Anderson, P. W. (1963). Plasmons, Gauge Invariance, and Mass. *Phys. Rev.* 130, 439–442. DOI 10.1103/PhysRev.130.439 | APS（有料） | 書誌だけ |
| Englert, F. & Brout, R. (1964). Broken Symmetry and the Mass of Gauge Vector Mesons. *PRL* 13, 321–323. DOI 10.1103/PhysRevLett.13.321 | APS（取得を試していない） | 書誌だけ |
| Wilson, K. G. (1971). Renormalization Group and Critical Phenomena. I. *Phys. Rev. B* 4, 3174–3183. DOI 10.1103/PhysRevB.4.3174 | APS（有料） | 書誌だけ |
| Wilson, K. G. (1983). The renormalization group and critical phenomena（ノーベル講演 1982）. *Rev. Mod. Phys.* 55, 583–600. DOI 10.1103/RevModPhys.55.583 | https://www.nobelprize.org/uploads/2018/06/wilson-lecture-2.pdf | 取得先を確かめた（著者のまとめ直し） |
| Kadanoff, L. P. (1966). Scaling laws for Ising models near Tc. *Physics Physique Fizika* 2(6), 263–272. DOI 10.1103/PhysicsPhysiqueFizika.2.263 | https://journals.aps.org/ppf/pdf/10.1103/PhysicsPhysiqueFizika.2.263 （APS の無料の PDF） | 取得先を確かめた |
| Haken, H. (1975). Cooperative phenomena in systems far from thermal equilibrium and in nonphysical systems. *Rev. Mod. Phys.* 47, 67–121. DOI 10.1103/RevModPhys.47.67 | APS（有料。自動取得は案内の頁） | 書誌だけ |
| Haken, H. (2007). Synergetics. *Scholarpedia* 2(1):1400. DOI 10.4249/scholarpedia.1400 | http://www.scholarpedia.org/article/Synergetics | 取得先を確かめた（著者のまとめ直し） |
| Bénard, H. (1901). *Les tourbillons cellulaires dans une nappe liquide propageant de la chaleur par convection, en régime permanent*（学位論文）. Paris: Gauthier-Villars（同じ内容は *Ann. Chim. Phys.* (7) 23, 62–144） | https://archive.org/details/lestourbillonsce00bena （イリノイ大学のデジタル化。パブリックドメイン） | 取得先を確かめた（OCR の文字で読んだ） |
| Zurek, W. H. (2002). Decoherence and the Transition from Quantum to Classical—Revisited. *Los Alamos Science* 27, 2–25 | https://arxiv.org/abs/quant-ph/0306072 （著者稿） | 取得先を確かめた |
| Zurek, W. H. (1981). Pointer basis of quantum apparatus: Into what mixture does the wave packet collapse? *Phys. Rev. D* 24, 1516–1525. DOI 10.1103/PhysRevD.24.1516 | APS（有料） | 書誌だけ |
| Volmer, M. & Weber, A. (1926). Keimbildung in übersättigten Gebilden. *Z. Phys. Chem.* 119U, 277–301. DOI 10.1515/zpch-1926-11927 | De Gruyter（有料。取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Feynman 1948」の行（Feynman 1948）：手元の PDF は文字の層の無い画像。頁は 367–387（Crossref）。場の量子論ではなく、非相対論的な量子力学の論文。
- 台帳の「Anderson 1972」の行（Anderson 1972）：手元の PDF は文字の層の無い画像。
- 台帳の「Abrikosov 1957」の行（Abrikosov 1957）：英訳 *Sov. Phys. JETP* 5(6), 1174–1182。原文は ЖЭТФ 32, 1442。PDF の 1 枚目は前の論文の終わり。
- 台帳の「Ulm ら 2013」の行（Ulm ら 2013）：Nature の PDF は自動取得でログインの案内へ送られた。著者稿 https://arxiv.org/abs/1302.5343 （v3）で読める。精読ノートのファイル名（精読ノート「Pyka 2013」）が中身と合わない。
- 台帳の「Nelson & Kosterlitz 1977」の行（Nelson & Kosterlitz 1977）：Crossref の頁は 1201–1205（台帳と精読ノートは 1201–1204）。
- 台帳の「Haken 1983」の行（Haken 1983）：手元の PDF は 12 頁の前付け（表紙・著作権の頁・序文・目次）だけで、本文は無い。手元に保存した のままだと、本文を持っているように読める。
- 台帳の「Rayleigh 1916」の行（Rayleigh 1916）：題が違う。正しくは「On convection currents in a horizontal layer of fluid, when the higher temperature is on the under side」。*Phil. Mag.* (6) 32(192), 529–546。DOI 10.1080/14786441608635602。
- 台帳の「Becker & Döring 1935」の行（Becker & Döring 1935）：Internet Archive の雑誌のマイクロフィルムの写し https://archive.org/details/sim_annalen-der-physik_1935-12_24_8 （権利は未確認）で、pp.719–752 が読める。誌面の巻は (5) 24。
- 台帳の「Lorenz 1963」の行（Lorenz 1963）：手元の PDF は文字の層の無い画像。DOI 10.1175/1520-0469(1963)020<0130:DNF>2.0.CO;2。

## 手順について分かったこと

- 台帳の物理学の行のうち三つ（「Anderson 1972」・「Nelson & Kosterlitz 1977」・「Rayleigh 1916」）は、狙った文献と別の論文を掴んだか、題を誤っていました。「Anderson 1972」と「Nelson & Kosterlitz 1977」は台帳に直した跡があり、もともとの狙い（Kosterlitz & Thouless 1973 と Wilson のくりこみ群）は有料で残っていました。「Rayleigh 1916」は題だけが誤っていました。手元の PDF の表紙を突き合わせる手順が、この分野でも要りました。
- 手元の PDF のうち三つ（Feynman・Anderson・Lorenz）は文字の層が無く、pdftotext が空でした。頁を画像にして読みました。
- 報告が引く理論の多くは、原論文が APS・IOP・Springer で有料でしたが、著者のノーベル講演（Abrikosov・Kosterlitz・Nambu・Higgs・Wilson）と arXiv の著者稿（Zurek・Ulm・Pyka）で、仕組みの芯を読めました。原論文の頁は確かめていないので、講演で読んだものは「著者のまとめ直し」と分けて書きました。
- 物理の原典は、二つのものの兼ね合いと、その分かれ目（Hc1、臨界の滴の半径、式 (44) の臨界値、πK(∞)＝2、凍る瞬間の相関長）を式で書いていました。分かれ目が式で書かれている分、統合に至らない形（溶けて戻る核・解離した渦・欠陥・落ち着かない流れ）も、論の中ではっきり書かれていました。
- 核生成は化学にも出ます。化学で使えるように、Becker & Döring の頁と写しの性格を、この記録の 10 の節に控えました。
