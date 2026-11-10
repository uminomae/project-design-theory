# 工学・情報科学：記録から外した作業の節

`cs/evidence/evidence-D07-engineering.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D07-engineering.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（75〜86 行） | 10 | 強い 3（フィードバック・深層学習・強化学習）・部分的 6（PDCA・TCP・情報理論・圧縮センシング・GA・暗号）・条件付き 1（リファクタリング） |
| ja の本文（88 行・238 行）と Colophon（256 行） | 10 | 88 行と 238 行は「5件で部分的な対応」で、合計が 9 になる。Colophon は「部分的: 6」 |
| en（67〜76 行・78 行） | 10 | Strong 3・Partial 5（PDCA・TCP・GA・リファクタリング・暗号）・Conditional 2（情報理論・圧縮センシング）。本文の節は 5.1〜5.5 の五つだけで、TCP・GA・PDCA・リファクタリング・暗号の節が無い |
| pres（23 行・43〜47 行） | 10 | 23 行は「部分的な対応 1件、条件付きの対応 1件」。表は確定に近い 3・有力 3（TCP・GA・PDCA）・条件つき 4（情報理論・圧縮センシング・暗号・リファクタリング） |
| 退避版（28 行ほか） | 10 | Accept 10 |
| 調べた跡 phase5（21〜23 行） | 10 | Anchor 3・Scoped 5（PDCA・TCP・圧縮センシング・GA・リファクタリング）・High-risk 2（情報理論・暗号） |

ja 88 行の「5件で部分的な対応」は、表の 6 件と合いません。ja の表の「主な対応段階」は、TCP（波・渦・束）・情報理論（場・縁・束）・圧縮センシング（場・縁）・リファクタリング（波）・暗号（場・束）と書きながら、同じ版の本文の解釈（126・134・142・166・174 行）では五つの段を全部当てています。en の 6.1 節（160 行）は「十の事例のすべてが、予測と現実の差が駆動力になる構造を持つ」と書き、雑音（情報理論）と足りない観測（圧縮センシング）まで誤差に数えています。

### 至らない形を外に置いていること

報告は、どの論も誤差を打ち消して安定に向かう輪として読み、ja の本文には、振動・崩壊・誤りの残る通信・発散・停止・破られる暗号が出てきません。en 96 行と pres 57 行だけが、帰還が過ぎると振動すると一文で書いています。報告は「調査の限界」（ja 42 行）で、フィードバックを持たない工学系を対象外にしています。原典を開くと、至らない形と、その分かれ目が、論の中心に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| フィードバック制御 | 激しさを増す振動・がくつく動き（Maxwell p.272）。鳴き（Black p.2）。企図振戦（Wiener の写し p.8） | 方程式の根の実部の符号、帰還の効きの強さと位相のずれ |
| 深層学習 | 悪い局所解に止まる（Rumelhart ら p.535） | 結合の数 |
| 強化学習 | 片方だけでは課題に失敗する。死の三つ組で発散する（Sutton & Barto pp.3・264） | 三つの要素がそろうか |
| TCP | 輻輳崩壊。千分の一に落ちる（Jacobson & Karels pp.1・8–9）。公平は端だけでは保証できない（p.11） | γ が 1 を超えるか |
| 情報理論 | 容量の上では誤りが残る（Shannon pp.22・43） | 情報源の速さと容量 C |
| 圧縮センシング | 戻らない（Candès ら pp.1・7） | 非ゼロの数と、観測の数を log N で割った値 |
| PDCA | 統計的な管理の状態は自然にはまれ（Shewhart p.44） | 突き止められる原因を取り除いたか |
| リファクタリング | 組織全体が負債で止まる（Cunningham）。設計がかえって崩れる（Opdyke の写し p.4） | 負債を返すか |
| 公開鍵の配送 | 速い解き方が見つかれば破られる。無条件には安全でない（Diffie & Hellman pp.649・653） | 攻撃者の計算の力と、対数の難しさ |
| 頑健さと脆さ | 乗っ取り（依存症・ウイルス）。新しい破局の脆さ（Doyle & Csete） | 兼ね合いは必然で、なくせない |

数学〜地球科学・複雑系科学と同じく、至らない形は原典の中心にありました。工学の原典は、設計者が避けたい形として至らない形を書き、どこまで攻めると至らない側に入るかの分かれ目を、式や数で示しています。

### 横断の節は報告の作った分け方

報告の横断の節（ja 176〜208 行）の五つのパターン、「場の構造化度と渦の必要性のトレードオフ」「束の分類学（6 つの型）」「5段階の入れ子構造」、未解決の問いの「渦なき5段階」「束の多義性」は、調べた跡（phase7 34・46〜48・135・150・166 行）と退避版の分け方で、原典の著者の分け方ではありません（型 H）。「束の分類学」の公平性型（max-min 公平性）と限界値型（容量の先在）は、上の 4 と 5 の節で原典と合いませんでした。「場の構造化度と渦の必要性の逆相関」は「RIP 条件や No Free Lunch 定理で部分的に裏付けられ」（ja 192 行）と書きますが、RIP は読んだ原典に無く、No Free Lunch 定理は読んでいません。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30 行・38 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（88 行）、「安全弁」（90〜92 行）、「結びの温度開示」「温度帯」（244〜248 行）、「Colophon」の generator_model（250〜260 行）。49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。pres 43 行の見出し「温度」、en の 3 節の終わりの「If these definitions already generate discomfort, that itself is an important perspective」（型 F）も同じです。数学〜化学・経営学・複雑系科学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 判定の数が版ごとに違う | ja は調べた跡 phase5 の Anchor 3（21 行）に合わせ、残りを部分と条件付きに分けた形。ja 88 行の「5件」は phase5 の Scoped 5（22 行）の数を写した見込み（確かめていない）。en と pres の分け方の出どころは追えない |
| PDCA を Shewhart（1939）と Deming（1986）に帰す | 退避版 67 行・83 行。83 行は Shewhart 1939 の出版元を「Van Nostrand」としているが、表紙は米国農務省の Graduate School |
| 「縁の3条件」 | 退避版の縁フラグの欄（40・77・190・227・303・341・380 行）、調べた跡 phase6 14・72・131 行 |
| 「max-min公平性」 | 退避版 114・119 行、調べた跡 phase6 53 行・phase7 48 行 |
| 「束が先在」 | 退避版 203 行、調べた跡 phase5 89 行・phase6 103 行・phase7 46 行 |
| 「RIP条件」を Donoho と Candès らに帰す | 退避版 219・227・231 行、DR 124 行、調べた跡 phase6 122 行・phase7 135 行 |
| 「閉形式解」 | 退避版と調べた跡 phase6 の圧縮センシングの節（行は確かめていない） |
| 「産業制御の90%以上（Astrom & Hagglund 2006）」 | 退避版 31 行 |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「5段階全段にわたる対応が確認されます」（102 行）、「この領域の最大の知見は」（240 行）、「5段階モデルの設計原理としての頑健性を示唆しています」（240 行）、en 86 行「This theory shows the most direct structural correspondence」、en 136 行「Shannon capacity is the purest formulation of Bundle」、en 198 行「unlikely to be a mere coincidence」、en 204 行「close to determinate」、pres 77 行「縁が持つ未決定性を工学的に最も鮮明に表現」。
- 型 H（原典に無い体系）：「縁の3条件」（102 行、en 25〜29 行）、「束の分類学」の 6 つの型（202 行）、「5段階の入れ子構造」（208 行）。
- 型 B（二つに切って置く）：「設計された5段階と自然に生じる5段階」（194〜198 行）。報告は工学の対応を「自然の構造の証拠」と「設計原理の証拠」に分け、後者に置いて独立の証拠類型と呼びます。原典に書かれた兼ね合いは、設計者が決めた目的の中で起きていますが、振動や崩壊は設計者の意図に反して起きています（Maxwell p.272、Jacobson & Karels p.1）。
- 語が同じだけの対応：「誤差」を 5段階の「波」の芯とし（ja 186 行・228 行）、品質の主観の指標や「未知の可能性への気づき」まで誤差に数える所（ja 184〜186 行、en 160 行）。
- 至らない形を外に置く：ja 42 行（フィードバックを持たない系を対象外にする）と、上の「至らない形を外に置いていること」。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- 台帳の「Heylighen 2026」の行（292 行）：Heylighen の年が 2025。PDF の頭書きは Received 18 December 2025・Published 13 March 2026・*Complexities* 2026, 2, 6 で、Crossref も 2026 年。精読ノート「Heylighen 2026」の 19 行は 2026 が正しいと書いている。同じ年はwiki の頁「Heylighen 2025」の 2・3・15・23 行と、手元の PDF の名前にもある。
- 台帳の「Wiener 1948」の行（278 行）：題は 1948 年だが、手元の PDF は第 2 版（1961 年の版の 1985 年の第 4 刷）。出どころは「BG Agent 取得」としか書かれておらず、上げた人が分からない。
- 台帳の「Jacobson 1988」の行（280 行）：OA の URL（dl.acm.org）は 2026-11-09 に確認画面（403）を返した。LBL の写し（https://ee.lbl.gov/papers/congavoid.pdf ）は取れる。1988 年 11 月の改訂版であることを書き足す案。
- 台帳の「Schultz ら 1997」の行（284 行）と台帳の「Schultz ら 1997」の行（323 行）：取得先（utexas.edu）は 2026-11-09 に 502 を返した。Dayan のサイトの写し（http://www.gatsby.ucl.ac.uk/~dayan/papers/sdm97.pdf ）は誌面の PDF で取れる。
- 台帳の「Shannon 1948」の行（282 行）：Harvard のサイトの写しは、1998 年の訂正つき再録（55 頁）で、頁は誌面の頁と合わない。精読ノート「Shannon 1948」の 15〜16 行は誌面の頁を書くが、ノートの引用の頁（p.1・p.24 など）は再録の頁で、本文と合っていた。
- 精読ノート「Schultz ら 1997」の 7 行：「原典ページ数: 5 (pp.1593-1597)」。Crossref と写しでは pp.1593–1599（7 頁）。同じノートの 15 行は 1599 で正しい。
- 精読ノート「Diffie & Hellman 1976」の 38 行：引用「We note that computing log mod q is in fact close to optimal…」は原文と違う。原文（p.649）は「For now we assume that the best known algorithm for computing logs mod q is in fact close to optimal and hence that q1/2 is a good measure of the problem's complexity, for a properly chosen q.」。見出しの主張 3（一方向関数とトラップドア）とも合っていない。
- wiki の頁「Wiener 1948」 31 行：「情報とはエントロピーではなくネゲントロピーである」を Wiener の言葉のように書く。写しの p.11 には、情報の量はエントロピーの負だという書き方がある。「ネゲントロピー」の語が本にあるかは、全頁を見ていないので確かめていない（未判定）。

読んだ所では、精読ノート「Jacobson 1988」・「Rumelhart ら 1986」・「Shannon 1948」・「Candes ら 2006」（Candès ら）の引用は、原典の文と合っていました。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Wiener（1948）の手元の PDF は、出どころの分からない第 2 版の写しなので、読んだ頁を書いて「未照合」としました（「規約で決めたこと」の上げた人の分からない写しの行）。同じ論は、パブリックドメインの Maxwell（1868）で本文に当たれたので、論の照合の状態は本文照合済にしています。予想：pjdhiro も同じ扱いを選ぶ見込みです（stance 2-6 誠実さ）。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：匿名の個人が上げた写しは、本文照合済にせず、未照合のまま読んだ頁を書きます。この扱いのままです。
- Kalman（1960）は、イェール大学の授業の読み物の写しで読みました。打ち直しの版で誌面の頁が無いので、写しの頁で控え、本文照合済にしました（「規約で決めたこと」2026-11-09 の授業用の写しの行）。
- BSTJ の論文（Black 1934・Hamming 1950）は、Internet Archive の利用者が上げた写ししか見つからず、「未照合」として読んだ頁を書きました。Alcatel-Lucent がかつて自分のサイトで BSTJ を公開していたので、その記録が Wayback Machine に残っていれば、出所の書ける写しとして本文照合済に上げられます（「規約で決めたこと」2026-11-09 の進化生物学の行）。試していません。
- Doyle と Csete（2011）を論として足しました。報告の論が書籍だけで欠けた分の穴埋めではなく、本文に当たれて、兼ね合いと至らない形をはっきり書いているからです（README「調査の手順」1）。予想：pjdhiro は、似た論文を数のために並べないという決めの範囲と見る見込みです。外すなら、論 1 と論 3 の節に確かめ先として移せます。 → 答え（2026-11-10、調べ方の計画と規約「調査の手順」1）：本文に当たれて、衝突や至らない形をはっきり書いている論なので、足したままにします。
- 報告の「設計原理としての独立の証拠類型」（ja 198・240 行）は、問いとして立てず、設計者の意図が入る点を「読み方」の一行と各節に書くにとどめました（中心の問いは、分野に合否を付けず一面を並べること）。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Maxwell, J. C. (1868). On Governors. *Proc. R. Soc. Lond.* 16, 270–283. DOI 10.1098/rspl.1867.0055 | https://archive.org/details/per_proceedings-of-the-royal-society-of-london_proceedings-of-the_june-6-1867-june-18-1868_16 （パブリックドメイン。OCR の文字で読んだ）。Royal Society の PDF は確認画面 | 取得先を確かめた |
| Kalman, R. E. (1960). A New Approach to Linear Filtering and Prediction Problems. *J. Basic Eng.* 82(1), 35–45. DOI 10.1115/1.3662552 | https://www.cs.yale.edu/homes/yry/readings/general/Kalman1960.pdf （授業用の写し。打ち直し） | 取得先を確かめた（授業用の写し） |
| Black, H. S. (1934). Stabilized Feedback Amplifiers. *Bell Syst. Tech. J.* 13(1), 1–18. DOI 10.1002/j.1538-7305.1934.tb00652.x | https://archive.org/details/bstj13-1-1 （利用者が上げた写し。権利は未確認） | 書誌だけ（写しで読んだ） |
| Hamming, R. W. (1950). Error Detecting and Error Correcting Codes. *Bell Syst. Tech. J.* 29(2), 147–160. DOI 10.1002/j.1538-7305.1950.tb00463.x | https://archive.org/details/bstj29-2-147 （利用者が上げた写し。権利は未確認） | 書誌だけ（写しで読んだ） |
| Chiu, D.-M. & Jain, R. (1989). Analysis of the increase and decrease algorithms for congestion avoidance in computer networks. *Computer Networks and ISDN Systems* 17(1), 1–14. DOI 10.1016/0169-7552(89)90019-6 | https://www.cse.wustl.edu/~jain/papers/ftp/cong_av.pdf （著者のサイトの写し。走査の画像） | 取得先を確かめた（著者の写し） |
| Sutton, R. S. & Barto, A. G. (2018). *Reinforcement Learning: An Introduction*, 2nd ed. MIT Press | http://incompleteideas.net/book/RLbook2020.pdf （著者のサイト。CC BY-NC-ND 2.0） | 取得先を確かめた（著者の公開版） |
| Sutton, R. S. (1988). Learning to predict by the methods of temporal differences. *Machine Learning* 3(1), 9–44. DOI 10.1007/BF00115009 | http://incompleteideas.net/papers/sutton-88-with-erratum.pdf （著者のサイトの写し） | 取得先を確かめた（著者の写し） |
| Donoho, D. L. (2006). Compressed sensing. *IEEE Trans. Inf. Theory* 52(4), 1289–1306. DOI 10.1109/TIT.2006.871582 | IEEE（有料）。著者のスタンフォードの頁は 2026-11-09 に 502 | 書誌だけ |
| Holland, J. H. (1962). Outline for a Logical Theory of Adaptive Systems. *J. ACM* 9(3), 297–314. DOI 10.1145/321127.321128 | ACM（自動取得で確認画面） | 書誌だけ |
| Shewhart, W. A. (1939). *Statistical Method from the Viewpoint of Quality Control*. Washington: The Graduate School, The Department of Agriculture | https://archive.org/details/CAT10502416 （米国農務省国立農業図書館の資料。パブリックドメイン） | 取得先を確かめた |
| Moen, R. (2009). Foundation and History of the PDSA Cycle. Associates in Process Improvement | https://businesswales.gov.wales/sites/main/files/documents/Foundation%20and%20the%20history%20of%20the%20PDSA%20cycle.pdf （政府のサイトに置かれた写し。二次資料） | 取得先を確かめた（二次資料） |
| Deming, W. E. (1986). *Out of the Crisis*. MIT Press | 書籍 | 書誌だけ |
| Opdyke, W. F. (1992). *Refactoring Object-Oriented Frameworks*. PhD thesis, University of Illinois at Urbana-Champaign | https://www.laputan.org/pub/papers/opdyke-thesis.pdf （個人のサイトの写し。権利は未確認）。IDEALS は学内だけ | 書誌だけ（写しで読んだ） |
| Cunningham, W. (1992). The WyCash Portfolio Management System. *ACM SIGPLAN OOPS Messenger* 4(2), 29–30. DOI 10.1145/157710.157715 | http://c2.com/doc/oopsla92.html （著者のサイト） | 取得先を確かめた（著者の写し） |
| Dauphin, Y. ら (2014). Identifying and attacking the saddle point problem in high-dimensional non-convex optimization. arXiv:1406.2572 | https://arxiv.org/abs/1406.2572 （要旨だけ読んだ） | 取得先を確かめた（要旨） |

既存の行に書き足す案：

- 台帳の「Wiener 1948」の行（Wiener）：手元の PDF は第 2 版（1961 年の版の 1985 年の第 4 刷）。出どころ不明。
- 台帳の「Jacobson 1988」の行（Jacobson）：著者に Karels を足す。取れる写しは LBL の 1988 年 11 月の改訂版。ACM は確認画面。
- 台帳の「Rumelhart ら 1986」の行（Rumelhart ら）・台帳の「Shannon 1948」の行（Shannon）・台帳の「Candes ら 2006」の行（Candès ら）・台帳の「Diffie & Hellman 1976」の行（Diffie & Hellman）：手元の PDF が、それぞれ Hinton・ハーバード大学数学科・arXiv・Hellman のサイトのファイルとバイト単位で同じことを確かめた。Shannon は 1998 年の訂正つき再録。
- 台帳の「Schultz ら 1997」の行（Schultz ら）：utexas.edu は 502。Dayan のサイトの写しを取得先に足す。台帳の「Schultz ら 1997」の行も同じ。
- 台帳の「Heylighen 2026」の行（Heylighen）：年を 2026 に。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 手元の PDF の四つ（Rumelhart ら・Shannon・Candès ら・Diffie & Hellman）は、台帳の取得先のファイルとバイト単位で同じで、出どころをすぐ確かめられました。出どころの書かれていない Wiener は、奥付で第 2 版と分かりました。
- 工学の古典は、パブリックドメインの雑誌（Proc. R. Soc. 1868）と米国政府の刊行物（Shewhart 1939。農務省の図書館の資料）が Internet Archive にあり、本文に当たれました。BSTJ は利用者が上げた写ししか見つからず、性格の書き方に迷いました。
- 報告が提唱者に挙げた原典（Wiener・Deming・Fowler・Holland）は書籍が多く、同じ論の中の古い論文や短い経験報告（Maxwell・Shewhart・Cunningham）のほうが、至らない形をはっきり書いていました。
- 工学の原典は、設計者が避けたい形として至らない形を書き、その分かれ目を式や数で示していました（根の実部の符号・γ＞1・H＞C・log N の因子）。一面の表は、分かれ目の両側を一行に書く形が合いました。
