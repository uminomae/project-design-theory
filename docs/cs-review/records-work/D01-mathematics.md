# 数学：記録から外した作業の節

`cs/evidence/evidence-D01-mathematics.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D01-mathematics.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 論 | ja（表 73〜85 行） | pres（表 43〜55 行） | en | 退避版 |
|---|---|---|---|---|
| スピノル | 場・束／部分的 | 場・波・束は比較的明瞭／部分的 | 部分的（縁の二つの解釈） | Accept ❓DEBATE |
| Julia 集合 | 縁／強い | 全段階／強い | 強い | Accept |
| 層 | 全段階／強い（渦＝コサイクル条件） | 全段階／強い（渦＝非自明なコサイクル） | 強い（渦＝非自明なコサイクル） | Accept（渦＝非自明なコサイクル） |
| Milnor | 縁・渦・束／強い | 全段階／強い | 強い | Accept |
| 高次圏 | 場・波／条件付き | 全段階は読める／部分的 | 条件付き | CA |
| ガロア理論 | 場・束／条件付き | 場・波・縁・束／部分的 | 条件付き | CA |
| 分岐理論 | 縁／強い | 全段階／強い | 強い | Accept |
| 持続ホモロジー | 場・波／部分的 | 全段階／強い | 部分的 | Accept |
| 特異摂動 | 縁・束／強い | 全段階／強い | 強い | Accept |
| ホッジ理論 | 場／条件付き | 場・波・縁・束は見える／部分的 | 条件付き | CA |
| Morse 理論 | 縁・渦・束／強い。提唱者 Milnor (1963) | 全段階／強い。提唱者 Marston Morse | 強い | Accept |
| 件数 | 表を数えると強い 6・部分 2・条件付き 3。本文 87 行・251 行・Colophon 269 行は「強い 5・部分 3・条件付き 3」 | 強い 7・部分 4（23 行） | 強い 6・部分 2・条件付き 3（69〜71 行・201 行） | Accept 8・CA 3 |

- 高：ja の表と本文で件数が違います。本文の「5」は調べた跡 phase5 の分け方（Anchor 5・Scoped 3・CA 3、phase5 31〜35 行）を写し、表は Julia 集合を強いに上げたあとのものです（phase5 37 行が Julia を「Anchor 候補」としていた）。pres は別に生成され、どれとも合いません。
- 高：ja の Colophon（270 行）の出典 evidence は、2026-04-07 から再監査待ちの stub でした。2026-02 の DRは原文が保存されていません（神経科学・経営学と同じ）。
- 中：en 74 行の確信度（0.85・0.80）は、退避版の confidence の値を写したもので、LLM が付けた値です。
- 中：cs のトップ（創造とはのトップ 481 行）の英語の題「数学 Mathematics: Structure Condenses at Boundaries and Criticality」は、en の題から来ていて、照合されていない「境界凝縮」を題にしています。
- 中：en 45 行「The five-stage model describes the structure traversed by creative processes」。README の「領域の対象」の決め（分野の理論の構造）と食い違います（英語版の 19/30 と同じ）。
- 低：pres の frontmatter（7 行）の source（元ファイルの名）は、公開報告の日本語版の置き場に無い名前です。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 203 行・253 行「境界凝縮パターン」「6件が独立に…」「数学一般に内在するパターンと考えられます」「5段階モデルの『縁』段階が数学において豊かに実現されていることがわかりました」、en 203 行「six independent theories」 | 言い過ぎ | 中 | 6 件のうち本文で確かめたのは 4（Julia・層・分岐・境界層）で、原典の芯は「凝縮」でなく、二つのもののぶつかり（二つの吸引域、重なりの一致、二つの系列、外の流れと壁）。調べた跡 phase7 19 行は自分で「縁概念に引きずられた選択バイアスの結果かもしれない」と書いていた。独立かどうかも確かめていない（分岐・Morse・Julia は同じ力学系の系譜） |
| ja 215 行「5段階モデルは場→束が必然的に完遂されることを暗黙に前提」、ja 219 行「消滅を明示的に扱いません」、ja 233〜239 行 | 取り違え | 中 | 5段階の手引き 116 行・126 行は、縁に至らない場合と、渦が束にならず波や場に戻る場合を書く。藁人形。出どころは phase6 222・228・242 行、phase7 57・71 行 |
| ja 223 行「構成的対応と分析的対応の二分法…他の領域で5段階との対応を評価する際にも有効な基準」 | 付け足し | 低 | 調べた跡の切り口を一般の基準に上げている（型 B） |
| ja 247 行「数学が記述するのは『意識なしの構造生成』」 | 未判定 | 低 | 創造は物質・生命・心のどこでも起きる現象と見る（理論との距離の規約「創造」）。数学の対象に意識が無いことは、似ているかどうかの反証にならない |
| ja 16 行「合計11の理論・概念を評価」、ja 30 行「一次文献・教科書級文献に基づいて数学的事実を確認しました（Phase 1-2）」 | 言い過ぎ | 中 | 退避版の refs の多くは教科書・講義ノートで、原典の頁を控えた跡が無い（退避版の flags は 11 件のうち 3 件が「v:未検証」） |

### テンプレート由来の表示

「立ち位置明示」（3 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30・38・199 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（87 行）、「安全弁」（89〜91 行）、「結びの温度開示」「温度帯」（257〜261 行）、「Colophon」の generator_model（263〜273 行）。46〜49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。en 57 行の「If these definitions feel strange…」は型 F です。神経科学・経営学・人類学・民族学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則） 155〜179 行、試しの点検の記録（数学））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| Morse 理論の提唱者を Milnor（1963）とする | 退避版 296 行の refs の先頭（Milnor の教科書）が、報告の表の「提唱者/起源」の列に写った |
| 件数「強い 5・部分 3・条件付き 3」 | 調べた跡 phase5 31〜35 行（Anchor 5・Scoped 3・CA 3）。表は Julia を強いに上げたあとの形 |
| 縁の 3 条件 | 調べた跡 phase7 87 行・155 行、phase6 130 行、退避版 190 行・287 行 |
| 確率的構造は一件も無い | 調べた跡 phase7 113〜117 行の「盲点 1」 |
| 5段階は場→束の完遂を前提、消滅を扱わない | 調べた跡 phase6 158・222・228・242 行、phase7 57・71 行 |
| 「棄却される誤差」「本質は捨てられたものに宿る」 | 欠損駆動思考の旧い定義の語。報告に欠損駆動思考を持ち込まない、という決めの前に書かれた |
| 「束」が文字通り束として立つ | 2026-02 の DR 26 行・180 行・199 行（Milnor を「最も強い」とした基準）。DR 自身の注意（142〜143 行）は報告に写らなかった |
| 層の渦が版で違う | ja だけが「コサイクル条件」で、退避版 97 行・en・pres は「非自明なコサイクル」 |
| ハンドル付けの「不可逆的再編成」 | 退避版 289 行・303 行 |
| 確信度 0.85・0.80 | 退避版の confidence |
| 型 F の表示と記号 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「数学一般に内在するパターンと考えられます」（203 行）、「豊かに実現されていることがわかりました」（253 行）、「11件の中で『縁→渦→束』の流れが最もクリーン」（131 行）、「11件の中で全5段階への対応が最も精緻」（101 行）、「モノドロミーは『周回に伴う構造変化』という渦の核心を数学的に精密に記述」（111 行）。
- 退ける語：「局所的な情報を大域的な対象へ統合します」（97 行）。数学の語としては「貼り合わせる」。
- 型 B（二つに切って置く）：「構成的対応と分析的対応の二分法」（221〜223 行）、「抽象整合型と臨界トリガ型」（en 160〜167 行）。
- 型 C（範囲を狭める）：「数学が記述するのは『意識なしの構造生成』」（247 行）を、5段階の射程の問いにつなげている。
- 型 H（原典に無い体系）：「縁の 3 条件」（121 行）。
- 至らない形を過程の外に置く書き方：「非完遂パターン」（213〜215 行）、「生成-消滅の対称性パターン」（217〜219 行）、「5段階モデルの拡張可能性を示唆」（113 行・219 行）。原典では、解の消滅・貼り合わせの障害・解けない方程式・はがれ・特徴の死は、どれも論の中にあります。

### 精読ノートと wiki の誤り（司令塔が直す）

- wiki の頁「Bott 1988」 53 行：DOI が 10.1007/BF02564666（別の論文）。正しくは 10.1007/BF02698544（Crossref で確かめました）。試しの点検で見つかり、まだ直っていません（`git log` で確かめました）。
- wiki の頁「Hadamard 1945」 3 行「準備 → 潜伏 → 照明 → 検証 の4段階を提唱した」、19 行「Hadamard は…4段階があると論じました」、29 行「Hadamard は第 4 段階として検証（Verification）を加え」：帰属違い。三つの段は Helmholtz と Poincaré、第四の段の必要は Poincaré（p.56）、illumination の名は Wallas（p.16）。まだ直っていません。
- wiki の頁「Carlsson 2009」 19 行「Carlsson はそれを実現する方法を提案しました」「分野を切り開いた論文です」：帰属違い。持続は Edelsbrunner ら（2000/2002）が導入し、Zomorodian & Carlsson（2005）が精緻化しました（Ghrist p.65）。Carlsson 2009 はサーベイを兼ねた論文です。
- 精読ノート「Thurston 1994」 15 行、wiki の頁「Thurston 1994」 59 行：頁が 161–177（arXiv 版の記載）。Crossref は 161–178。どちらかを書き足す（低）。
- この記録の以前の stub は、Carlsson と Ghrist を「自動では取れない」と書いていましたが、台帳ではどちらも 手元に保存した です（この記録で置き換えました）。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- スピノルの「仮説 B」は、判定として引き継がず、pjdhiro の解釈として記録にある、とだけ書きました（README「規約で決めたこと」）。今の見方（束＝新たな安定）と合うかを pjdhiro に見せるのは、5段階の定義を決めるときにします。予想：「720 度で元に戻る」は新たな安定ではないので、束の例としては外れる見込みです（理論との距離の規約の場の行）。
- 分岐理論（Poincaré 1885）とホッジ理論は、権利の確かめられない写しで本文や記述を読んだので、照合の状態は「未照合」とし、読んだ頁を書きました（調べ方の規約 §5-8）。
- 高次圏の「弱めること」（違いを消さずに一つ上の射として残す）は、pjdhiro が渦について言う「区別を残したまま切り離せなくなる」形と近いかもしれません。これは Claude の読み替えによる類推で、しっくり感の判定は pjdhiro が行います。一面の表を並べる段 3 で見せる材料として残します。答え（pjdhiro 2026-11-09）：既存の理論で本人の見方を論証はしないが、類推はする。この文は、論証でなく類推として残します（書き方の規約 §7-5）。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Morse, M. (1925). Relations between the critical points of a real function of n independent variables. *Trans. AMS* 27(3), 345–396. DOI 10.1090/S0002-9947-1925-1501318-X | https://www.ams.org/journals/tran/1925-027-03/S0002-9947-1925-1501318-X/S0002-9947-1925-1501318-X.pdf （AMS の無料の古い巻。自動取得に確認画面を返すので、ブラウザでの保存が要る。保存名の案手元の PDF） | 自動では取れない |
| Cartan, É. (1913). Les groupes projectifs qui ne laissent invariante aucune multiplicité plane. *Bull. SMF* 41, 53–96. DOI 10.24033/bsmf.916 | http://www.numdam.org/item/BSMF_1913__41__53_1/ | 取得先を確かめた（本文を読んだ） |
| Julia, G. (1918). Mémoire sur l'itération des fonctions rationnelles. *J. Math. Pures Appl.* (8) 1, 47–245 | http://www.numdam.org/item/JMPA_1918_8_1__47_0/ | 取得先を確かめた |
| Fatou, P. (1919). Sur les équations fonctionnelles. *Bull. SMF* 47, 161–271. DOI 10.24033/bsmf.998（続き：48 (1920), 33–94, DOI 10.24033/bsmf.1003） | http://www.numdam.org/item/BSMF_1919__47__161_0/ | 取得先を確かめた |
| Leray, J. (1950). L'anneau spectral et l'anneau filtré d'homologie d'un espace localement compact et d'une application continue. *J. Math. Pures Appl.* (9) 29, 1–139 | http://www.numdam.org/item/JMPA_1950_9_29__1_0/ | 取得先を確かめた（定義の頁だけ読んだ） |
| Serre, J.-P. (1955). Faisceaux algébriques cohérents. *Annals of Math.* 61(2), 197–278. DOI 10.2307/1969915 | 英訳（Achinger & Krupa）https://achinger.impan.pl/fac/fac.pdf 。仏語の写し https://www.college-de-france.fr/media/jean-pierre-serre/UPL5435398796951750634_Serre_FAC.pdf は接続の証明書の確かめで止まった（ブラウザでの保存が要る） | 取得先を確かめた（訳） |
| Eilenberg, S. & Mac Lane, S. (1945). General theory of natural equivalences. *Trans. AMS* 58, 231–294. DOI 10.1090/S0002-9947-1945-0013131-6 | https://www.ams.org/journals/tran/1945-058-00/S0002-9947-1945-0013131-6/S0002-9947-1945-0013131-6.pdf （確認画面。ブラウザでの保存が要る。保存名の案手元の PDF） | 自動では取れない |
| Baez, J. C. & Dolan, J. (1995). Higher-dimensional algebra and topological quantum field theory. *J. Math. Phys.* 36(11), 6073–6105. DOI 10.1063/1.531236 | https://arxiv.org/abs/q-alg/9503002 | 取得先を確かめた |
| Galois, É. (1846). Mémoire sur les conditions de résolubilité des équations par radicaux. *J. Math. Pures Appl.* 11, 417–433（Œuvres mathématiques, 381–444 の中） | http://www.numdam.org/item/JMPA_1846_1_11__381_0/ | 取得先を確かめた |
| Poincaré, H. (1885). Sur l'équilibre d'une masse fluide animée d'un mouvement de rotation. *Acta Math.* 7, 259–380. DOI 10.1007/BF02402204 | Springer（ログインの画面）。再録 Œuvres VII（1952）は https://archive.org/details/ceuvresdrhenripo027751mbp （Universal Digital Library が上げた写し。権利は未確認） | 自動では取れない（原典）／取得先を確かめた（権利未確認の写し） |
| Edelsbrunner, H., Letscher, D. & Zomorodian, A. (2002). Topological persistence and simplification. *DCG* 28(4), 511–533. DOI 10.1007/s00454-002-2885-2 | https://pub.ista.ac.at/~edels/Papers/2002-04-TopologicalPersistence.pdf （著者の所属機関の写し。13 頁で、FOCS 2000 の会議版の見込み） | 取得先を確かめた（会議版とみられる） |
| Zomorodian, A. & Carlsson, G. (2005). Computing persistent homology. *DCG* 33(2), 249–274. DOI 10.1007/s00454-004-1146-y | 取得を試していない | 書誌だけ |
| Prandtl, L. (1904). Über Flüssigkeitsbewegung bei sehr kleiner Reibung. *Verh. III. Int. Math.-Kongr.*, 484–491。英訳 NACA TM 452 (1928) | https://ntrs.nasa.gov/citations/19930090813 （英訳。米国の政府の文書） | 取得先を確かめた（訳） |
| Hodge, W. V. D. (1941). *The Theory and Applications of Harmonic Integrals*. Cambridge UP | https://archive.org/details/in.ernet.dli.2015.77572 （Digital Library of India の写し。権利は未確認） | 自動では取れない（書籍）／取得先を確かめた（権利未確認の写し） |
| Milnor, J. (1968). *Singular Points of Complex Hypersurfaces*. Annals of Math. Studies 61. Princeton UP | 見つからない | 自動では取れない（書籍） |

既存の行に書き足す案：

- 台帳の「Bott 1988」の行（Bott）：DOI 10.1007/BF02698544。
- 台帳の「Carlsson 2009」の行：この記録で本文を読んだ頁（Carlsson p.255・259・265・269、Ghrist p.61・65・67）。
- 台帳の「Thurston 1994」の行（Thurston）：手元の PDF は arXiv 版で、頁は arXiv 版の 1–17。誌面は 161–177（arXiv の記載）、Crossref は 161–178。
- 台帳の「Li & Yorke 1975」の行（Li & Yorke）：DOI 10.1080/00029890.1975.11994008。取得先の PDF は、カリフォルニア工科大学の教員のサイトに置かれた JSTOR の版（権利は未確認）。

## 手順について分かったこと

- 報告が引く理論の原典の多くは、19 世紀〜20 世紀前半の仏語の論文で、Numdam でログインなしに読めました（Cartan・Julia・Fatou・Leray・Galois）。台帳には行がありませんでした。
- AMS の古い巻（Morse 1925・Eilenberg & Mac Lane 1945）は、無料で公開されているのに、自動取得には確認画面を返しました。Springer（Acta Mathematica の古い巻）はログインの画面に送られました。
- 本文で読めた論の多くは、報告が「5段階にない」「非完遂」として外に置いた形（解の消滅・貼り合わせの障害・解けない方程式・はがれ・特徴の死）を、論の中心に書いていました。神経科学・人類学・民族学と同じ形です。
- 数学では、原典が「対立」「衝突」の語を使わないので、一面の表の対立・衝突・統合はどれも Claude の読み替えになります。原典に書いてある構造（二つの吸引域、二つの系列、重なりの一致）を先に書き、読み替えはそのあとに分けて書きました。
- 試しの点検の「Morse 理論の不可逆的再編成は f を −f にすると入れ替わる」は、Bott p.104 で確かめられました。試しの点検で挙げた wiki の誤り（Bott の DOI、Hadamard の帰属）は、まだ直っていませんでした。
