# 進化生物学：記録から外した作業の節

`cs/evidence/evidence-D04-evolutionary-biology.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D04-evolutionary-biology.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（77〜86 行）と本文（88 行・225 行） | 10 | 強い 9・部分 1（自然選択＋中立説） |
| en（41 行・155 行） | 10 | 10 件すべてに対応、条件付きは無し。縁の強い対応 6 |
| pres（23 行・43〜47 行） | 10 | 23 行は「条件付きの対応 1件」。表は確定に近い 4（自然選択・発生可塑性・雑種帯・内共生）・有力 4・条件つき 2（ニッチ構築・適応放散） |
| 退避版（385〜400 行） | 10 | Accept 10・CA 0。縁🔴 6 |
| 調べた跡 phase5（33〜35 行） | 10 | Anchor 7（EES・発生可塑性・共進化・雑種帯・内共生・HGT・適応放散）・Scoped 3（自然選択・断続平衡・ニッチ構築） |

日本語版の「部分」1 件は、phase5 の Scoped 3 件と合いません。プレゼン版は、同じ頁の中で「条件付きの対応 1件」（23 行）と「条件つき」2 件（47 行）が食い違っています。プレゼン版でニッチ構築と適応放散は「条件つき」ですが、日本語版では「強い対応」です。

### 横断の節は報告の作った分け方

報告の横断の節（ja 184〜205 行）の「縁の4パターン（維持・駆動・融合・生成）」「場の多層構造」「時間の非対称性」「束→場回帰の多様性」は、調べた跡（phase6・phase7）と退避版が作った分け方で、原典の著者の分け方ではありません（型 H）。原典で確かめると、次のようになります。

- 「縁の4パターン」：維持（雑種帯）は、原典では雑種に向かう強い選択との釣り合いです（7）。融合（内共生）は、原典の取り込みと合いません（8）。生成（HGT）は、原典では結びつきの度合いの移り変わりです（9）。駆動（共進化）は、原典では勝てない競り合いの続きです（6）。出どころは調べた跡 phase7 9 行・phase6 212・235 行、退避版 418 行です。
- 「時間の非対称性」の 10⁵〜10⁷ 年と 10³〜10⁵ 年は、1972 年の原典にありません（2）。
- 「場の多層構造」の深層に置く deep homology は、引かれている原典に無い付け足しです（5）。
- 「30領域中で『縁』の機能多様性が最も豊かな領域」（ja 90 行・186 行、en 43 行）は、ほかの 29 分野と比べた根拠が示されていません（型 E）。

### 至らない形を外に置いていること

報告は、衝突や消える側を「阻害」と名指しはしていませんが、論ごとに残る側と立ち上がる側だけを五つの段に当て、消える側を書いていません。原典を開くと、至らない形と分かれ目が、論の中心に書かれていました。

| 論 | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|
| 自然選択と中立説 | 不利な形が減って絶滅する（Darwin pp.109–110）。中立の変異の多くは偶然に消える（Kimura p.367） | 有利・有害・中立の別、選択と浮動の比（Ohta 2002） |
| 断続平衡 | 局所集団が種に分かれない。祖先種が絶滅する（Eldredge & Gould pp.111・115） | 集団の小ささと、種の境の外にいること（p.114） |
| ニッチ構築 | ほかでは有害な対立遺伝子が固定する（悪い統合）。多型が消える（Laland ら 1999） | 構築が生む選択と外の選択の向きと強さ |
| 発生可塑性 | 閾値を越えない。逆に選ばれる形は閾値が上がる（Waddington p.122、West-Eberhard 2005） | 遺伝子の濃さと閾値 |
| 赤の女王 | どの種も勝てず、敗者が入れ替わり、絶滅が一定の率で続く（Van Valen pp.1・21） | 悪化の速さと応答の速さ |
| 雑種帯 | 外来の祖先と雑種が除かれる（Moran ら Principle 1・Box 2） | 分散と雑種への選択の釣り合い |
| 内共生 | 酸素に適応できない細胞は嫌気の環境に留まる（Sagan p.228。未照合の写し） | 酸素の大気 |
| 適応放散 | 初めの速い放散の型が見えない系統群が多い（Harmon ら pp.2385・2393） | 研究の一線 |

数学・物理学・神経科学・人類学・民族学・複雑系科学と同じく、至らない形は原典の中心にありました。進化生物学では、片方の勝利（不利な形の絶滅・雑種の除去・祖先種の絶滅）と、勝ちの無い競り合いの続き（赤の女王）と、悪い統合（有害な対立遺伝子の固定）が、はっきり分かれて書かれていました。

### テンプレート由来の表示

「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（30・38 行）、「方法論的開示（S60）」（44〜49 行）、「温度帯の分布」（88 行）、「安全弁」（92〜94 行）、「結びの温度開示」（229〜236 行）、「Colophon」の generator_model（238〜248 行）。47〜49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。pres の「温度」（43 行）も同じです。en は表示の名を変えていますが、33 行「If these definitions already produce discomfort … Both are legitimate responses」は読者への合いの手で、型 F に当たります。数学・物理学・複雑系科学と同じく、テンプレートで直すものです。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 停滞期 10⁵〜10⁷ 年・急変期 10³〜10⁵ 年 | 退避版 74・78 行、調べた跡 phase7 55・58 行 |
| 細胞膜の融合・境界の消失 | 退避版 283 行の [M]、300〜302 行 |
| 共生か消化かの分岐 | 退避版 304 行の [学び] |
| deep homology（Pax6・Hox） | 退避版 178 行の [P]、2026-02 の DR 75 行 |
| 縁の4パターン | 調べた跡 phase7 9 行・133 行（H-09）、phase6 212・235 行、退避版 418・430 行 |
| 縁の3条件（G×E ほか） | 退避版の縁フラグ（256・290 行ほか）、phase5 39 行 |
| N_e s の絶対値が 1 以下 | 退避版 49 行の [類似] |
| ダーウィンフィンチ 13 種 | 退避版 353 行の [P] |
| 判定の数が版ごとに違う | 退避版の Accept 10 が en に、phase5 の Anchor・Scoped が pres の三つの分け方に写った見込み。ja の 9・1 は phase5 とも合わない |
| 「誤差」「棄却」「保持」の語 | 退避版 15 行の概要（「誤差（変異）から創造（新規性）が生まれる」）。欠損駆動思考の旧い定義（棄却される誤差）の語 |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「『誤差（変異）から新しいもの（新規性）が生まれる』構造を最も厚く実証してきた学問」（14 行）、「30領域中で『縁』の機能多様性が最も豊かな領域」（90 行・186 行）、「5段階モデルとの構造対応が最も豊かに確認された領域の一つ」（225 行）、「確立された事実に基づく確定的な知見です」（232 行）、「最も大規模な束→場回帰の一つ」（160 行）。
- 型 H（原典に無い体系）：「縁の4パターン」（186〜193 行）、「縁の条件――関係網…未決定性…渦への接続」（136 行）、「束→場回帰の多様性」の五つの名（205 行）。
- 型 B（二元で切る）：「誤差（変異）ではなく不在（空白）が創造を駆動する」（174 行）。
- 型 F（Claude が Claude に説明する）：「本調査は…調査記録として読まれたい」（5〜6 行）、en 9 行「It does not consume evolution as a metaphor for creation」。
- 欠損駆動思考・抱持の語の持ち込み：ja 14・102 行、en 53・119〜121・141 行（1 の節）。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- wiki の頁「Sagan 1967」 53 行：DOI が 10.1016/S0022-5193(67)80274-8。Crossref に無い。正しくは 10.1016/0022-5193(67)90079-3（Crossref・表紙の PII）。
- 精読ノート「Sagan 1967」 16 行：「DOI / URL」の欄が「Received 8 June 1966」（受付日）。
- 精読ノート「Darwin 1859」 32 行：引用の頭が「A struggle for existence」。p.467 は「The struggle for existence inevitably follows from the high geometrical ratio of increase…」。「A struggle…」で始まる文は p.63 にあり、続きは「from the high rate at which all organic beings tend to increase」で、二つの文が混ざっている。
- 精読ノート「Woese 2002」 32 行：引用の語が原典と違う（「organizational genealogical trace (record)」→原典は「organismal genealogical trace (recorded in …)」、「Suppose that the ancestors」→「Suppose that the primitive ancestors」）。二つの段落の文を順を入れ替えてつないでいる。72 行「more complex and integrated」→原典の要旨は「more complex and interconnected」。74 行「a more solidified, organizational cell design」→原典は「a more solidified, organized cellular design」。
- 台帳の「Eldredge & Gould 1972」の行：取得先を Internet Archive の B-001-004-118 とするが、これは個人が 2017 年に上げた写し。手元の PDF は、Blackwell Publishing の Ridley *Evolution* の Classic Texts の PDF（Wayback 2006 年の記録）とバイト単位で一致した。
- 台帳の「Waddington 1953」の行：「Zenodo CC-BY deposit」とするが、上げた人は著者でも出版社でもない（Zenodo の記録 10772157、biosyslit・taxodros の共同体）。
- 台帳の「Sagan 1967」の行：Internet Archive の資料は個人が上げた写し（fringe の集め）。
- 台帳の「Woese 2002」の行：Europe PMC の PDF は 2026-11-09 に自動取得の確認画面。PMC の HTML（PMC124369）は読めた。
- 台帳の「Lane & Martin 2012」の行：Lane & Martin 2012 は膜の生体エネルギーの起源の論で、台帳の「Stage 2-4」のほかに、どの論の確かめ先かが書かれていない。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5。聞くとしていた一つは、2026-11-09 に答えが出ました）。規約で答えが出たものは、そのとおり決めて書きました。

- Eldredge & Gould（1972）の手元の PDF は、Blackwell Publishing が教科書（Ridley *Evolution*）のサイトに置いていた写しと同じものでした。出版社のサイトですが、章の出版社（Freeman, Cooper）とは違い、権利は確かめられません。「大学の授業のサイトや著者のサイトに置かれた出版社の版の写し」（調べ方の計画と規約「規約で決めたこと」2026-11-09 の行）に近いとみて、本文照合済にしました。予想：pjdhiro も同じ扱いを選ぶ見込みです（教科書のサイトは出所が書け、Wayback で第三者が確かめられる。stance 2-6 誠実さ）。違えば「未照合（読んだ頁）」に直します。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：著者・関係者・公的機関・信頼できる企業のサービスに置かれた写しで、著作権に配慮されているものは、本文照合済として採ります。この扱いのままで、下げません。
- Waddington（1953）の Zenodo の写しは、上げた人が著者でも出版社でもないので、規約どおり未照合（読んだ頁）にしました。遺伝的収容の論は、West-Eberhard（2005）で本文照合済です。
- Sagan（1967）の Internet Archive の写しは個人のもので、規約どおり未照合（読んだ頁）にしました。内共生の論は、この分野で唯一の未照合の論です。出版社の版は有料の見込みです。
- 調べ方の計画と規約の「中心の問い」は、分かれ道の例に「進化生物学内共生の共生か消化」を挙げています。写しで読んだ範囲の原典に消化の分かれ道は無く、報告と退避版が付け足したものでした。README の例を直すのは司令塔に任せます。 追記（2026-11-09）：司令塔が、計画の「中心の問い」の分かれ道の例から、内共生の消化を外しました。

## 新しく見つけた原典

台帳は書き換えていません。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Kimura, M. (1991). The neutral theory of molecular evolution: A review of recent evidence. *Jpn. J. Genet.* 66, 367–386. DOI 10.1266/jjg.66.367 | https://www.jstage.jst.go.jp/article/jjg/66/4/66_4_367/_pdf （画像だけの PDF） | 手元に保存した（著者のまとめ直し） |
| Ohta, T. (2002). Near-neutrality in evolution of genes and gene regulation. *PNAS* 99, 16134–16137. DOI 10.1073/pnas.252626899 | PMC138577（HTML。PDF は確認画面） | 取得先を確かめた（著者のまとめ直し） |
| Laland, K. N., Odling-Smee, F. J. & Feldman, M. W. (1999). Evolutionary consequences of niche construction and their implications for ecology. *PNAS* 96, 10242–10247. DOI 10.1073/pnas.96.18.10242 | PMC17873（HTML） | 取得先を確かめた |
| Laland, K., Matthews, B. & Feldman, M. W. (2016). An introduction to niche construction theory. *Evol. Ecol.* 30, 191–202. DOI 10.1007/s10682-016-9821-z | PMC4922671（HTML） | 取得先を確かめた |
| West-Eberhard, M. J. (2005). Developmental plasticity and the origin of species differences. *PNAS* 102(suppl. 1), 6543–6549. DOI 10.1073/pnas.0501844102 | PMC1131862（HTML。PDF は確認画面） | 取得先を確かめた（著者のまとめ直し） |
| Moran, B. M. ら (2021). The genomic consequences of hybridization. *eLife* 10, e69016. DOI 10.7554/eLife.69016 | https://api.elifesciences.org/articles/69016 （CC BY。頁は 406） | 取得先を確かめた |
| Schluter, D. (1996). Ecological causes of adaptive radiation. *Am. Nat.* 148, S40–S64. DOI 10.1086/285901 | 著者の研究室の頁の写し（画像だけの PDF） | 手元に保存した（著者のサイトの写し） |
| Harmon, L. J. ら (2010). Early bursts of body size and shape evolution are rare in comparative data. *Evolution* 64, 2385–2396. DOI 10.1111/j.1558-5646.2010.01025.x | Schluter の研究室の頁の写し | 手元に保存した（著者のサイトの写し） |
| Kimura, M. (1968). Evolutionary Rate at the Molecular Level. *Nature* 217, 624–626. DOI 10.1038/217624a0 | Nature（有料） | 書誌だけ |
| Ohta, T. (1973). Slightly Deleterious Mutant Substitutions in Evolution. *Nature* 246, 96–98. DOI 10.1038/246096a0 | Nature（有料） | 書誌だけ |
| Laland, K. ら / Wray, G. A. ら (2014). Does evolutionary theory need a rethink? *Nature* 514, 161–164. DOI 10.1038/514161a | Nature（有料） | 書誌だけ |
| Ehrlich, P. R. & Raven, P. H. (1964). Butterflies and Plants: A Study in Coevolution. *Evolution* 18, 586–608. DOI 10.2307/2406212 | JSTOR・Wiley（有料） | 書誌だけ |
| Harrison, R. G. & Larson, E. L. (2014). Hybridization, Introgression, and the Nature of Species Boundaries. *J. Hered.* 105(S1), 795–809. DOI 10.1093/jhered/esu033 | Oxford（OA。自動取得は確認画面） | 取得先を確かめた（ブラウザでの保存が要る） |
| Woese, C. (1998). The universal ancestor. *PNAS* 95, 6854–6859. DOI 10.1073/pnas.95.12.6854 | PMC（取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Eldredge & Gould 1972」の行（Eldredge & Gould 1972）：手元の PDF は Blackwell Publishing の Classic Texts の PDF（http://web.archive.org/web/2006/http://www.blackwellpublishing.com/ridley/classictexts/eldredge.pdf ）とバイト単位で一致。Internet Archive の B-001-004-118 は個人が上げた同じ写し。画像だけなので、同じ資料の `eldredge_djvu.txt`（OCR の文字）で読んだ。
- 台帳の「Waddington 1953」の行（Waddington 1953）：Zenodo の記録 10772157。上げた人は著者でも出版社でもない。権利は未確認。
- 台帳の「Sagan 1967」の行（Sagan 1967）：DOI 10.1016/0022-5193(67)90079-3。Internet Archive の資料 ontheoriginofmitosingcellslynnsaganorlynnmargulis は個人の写し。
- 台帳の「Woese 2002」の行（Woese 2002）：Europe PMC の PDF は自動取得の確認画面。PMC124369 の HTML で読める。
- 台帳の「Fisher 1930」の行（Fisher 1930）：1930 年の Clarendon Press の初版の写し（インドの大学図書館の蔵書）。
- 台帳の「Goldenfeld & Woese 2007」の行（Goldenfeld & Woese 2007）：arXiv の PDF を取得できた（v2）。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 進化生物学の原典は、競り合いと、そこで消えるもの（絶滅・除去・偶然の消失・閾値に届かない形）を、論の中心に書いていました。報告は、残る側と立ち上がる側だけを段に当てていました。複雑系科学と同じく、分かれ目の下で起きることが、至らない形の材料になりました。
- 片方の勝利（不利な形の絶滅・雑種の除去）と、勝ちの無い競り合いの続き（赤の女王）と、悪い統合（ニッチ構築で有害な対立遺伝子が固定する）が、原典の中で分かれて書かれていました。三つの並べ方を試すのに向いた分野です。
- 手元の PDF の出どころを、台帳の取得先と別の経路で確かめると、性格が変わることがありました。Eldredge & Gould の写しは、台帳では個人の写しでしたが、同じファイルが出版社の教科書のサイトに置かれていたことが Wayback で分かりました。ファイルのバイトを比べる手順は役に立ちました。
- PNAS の論文は、PMC の XML が出版社の決めで取れず（efetch は「全文の XML を許さない」と返す）、PMC の HTML で読みました。eLife は頁が 406 を返し、公開 API の JSON で読めました。
- 有料の原論文（Kimura 1968・Ohta 1973・Barton & Hewitt 1985）は、著者の後の総説（J-STAGE・PMC）と同じ分野の総説（eLife）で論の芯に当たれました。
- 生物学の主張に教科書・研究の一線・読み替えを添えると、報告が「事実として」の見出しで書いた所（EES・ニッチ構築・適応放散の減速）の多くが、研究の一線でした。
