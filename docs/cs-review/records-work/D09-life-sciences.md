# 生命科学：記録から外した作業の節

`cs/evidence/evidence-D09-life-sciences.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D09-life-sciences.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 版 | 論の数 | 判定の内訳 |
|---|---|---|
| ja の表（77〜87 行）と本文（89 行・213 行） | 11 | 強い 2（有性生殖・獲得免疫）・部分的 6・条件付き 3 |
| en（39 行・130 行） | 11 | 11 のすべてで対応を確かめた（「confirmed in all eleven」「all eleven cases accepted」） |
| pres の冒頭（23 行） | 11 | 強い 1・条件付き 1 |
| pres の表（43〜48 行） | 11 | 確定に近い 3（有性生殖・獲得免疫・モルフォゲン勾配）・有力 4・条件付き 3・費用構造 1 |
| 退避版（9 行） | 11 | Accept 11（縁の印は 🔴 2・🟡 6・⚪ 3） |
| 調べた跡 phase5（25〜27 行） | 11 | Anchor 2・Scoped 6・High-risk 3 |

ja の「強い 2・部分的 6・条件付き 3」は、調べた跡 phase5 の Anchor・Scoped・High-risk の数と、退避版の縁の印の数と同じです。en の「all eleven accepted」は退避版の Accept 11 から来ています。pres は冒頭（強い 1・条件付き 1）と表（確定に近い 3）が同じ版の中で合いません。モルフォゲン勾配は、ja で部分的、pres で確定に近いです。pres 89 行は刈り込みを「5.4節」、オートファジーを「5.5節」としていますが、ja の節は 5.4 がオートファジー、5.5 が刈り込みです。数の食い違いは重さ「高」です（未判定（版の食い違い））。

### 横断の節は報告の作った分け方

報告の横断の節（ja 175〜193 行）の五つ、「意識を伴わない5段階」「渦の二方向性」「縁の実装多様性」「場から波への内発的起動」「スケール横断的な反復」は、調べた跡（phase6・phase7）と退避版が作った分け方で、原典の著者の分け方ではありません（型 H）。原典で確かめると、次のようになります。

- 「場から波への内発的起動」は、オートファジーを「外部刺激なし」とした読みと（9 の節の取り違え）、Turing の均一な状態からの不安定に立っています。オートファジーの飢餓は、培地を移して起こす外の環境の変化です（Ohsumi p.287）。
- 「渦の二方向性」の「分解的な渦」は、刈り込みとオートファジーの原典が、分解を作ることの一部として書いていることと重なります（Ohsumi p.283、Schafer の Discussion）。ただし原典の語ではなく、「渦の本質」を問う形は報告の作ったものです。
- 「縁の実装多様性」の「第4の実装」（en 73 行・119 行）は、神経科学の報告の「三つの系統」に足した数で、原典には根拠がありません。
- 「スケール横断的な反復」の「確認されました」（ja 193 行）は、原典の確かめを経ていません。四つの論のうち、位置情報は部分どうしの働きかけを要らない論として書かれていて（Wolpert p.18）、同じパターンの反復とは読みにくいです。

### 至らない形を外に置いていること

報告は、エネルギーの収支・ミエリン化を「成立条件」、グリンパティック系を「リセットプロセス」として段の外に置き（ja 163〜167 行・217 行）、アロスタティック負荷を「失敗モード」と呼んでいます（ja 143 行・201 行）。原典を開くと、兼ね合いと、それが崩れた形が、論の中心に書かれていました。

| 論 | 原典に書かれた兼ね合い | 原典に書かれた至らない形 | 分かれ目 |
|---|---|---|---|
| 代謝連関 | 取り込みと解糖が互いを要る（Pellerin & Magistretti p.10628） | 解糖を止めると取り込みが落ちる（同） | 解糖の有無。活動中の乳酸の受け渡しは研究の一線 |
| エネルギーの収支 | 信号の費用と情報を表す力（Attwell & Laughlin pp.1133・1141） | 無酸素・虚血で損傷を受けやすい（p.1133） | 同時に働く割合、活動電位の頻度 |
| 刈り込み | 二つの眼の入力の競り合い（Schafer の Discussion） | 刈り込みが止まると余分なシナプスが残る。病気では行き過ぎる（Results・Discussion） | 活動の差、補体と CR3 の信号 |
| ミエリン化 | 伝導の速さと届く時刻の揃い（Fields「Theoretical considerations」） | 揃いが崩れると機能の障害（同） | 届く時刻の精度（数ミリ秒） |
| アロスタティック負荷 | 守る働きと傷める働き（McEwen p.171） | 度重なる・慣れない・止まらない・足りない（pp.172–174） | 応答を止める仕組みの効き方 |
| グリンパティック系 | たまることと除くこと（Xie の要旨） | 眠りを奪うと死ぬ（Xie の本文第 1 段落） | 起きているか眠っているか（すきまの広さ） |
| 予測誤差 | 予測と結果（Schultz ら p.1594） | 予測どおりで信号が出ない（p.1596）。依存で信号が暴走する（Schultz 2016） | 平均の予測誤差が 0 か |
| 有性生殖 | 性の費用と組み換えの利得（Otto pp.S1・S3） | 無性が枝先に留まる（p.S1）。条件が無いと性は不利（pp.S3–S7） | 環境の変わる速さ、集団の大きさ、選択の強さ |
| オートファジー | 合成と分解（Ohsumi pp.283–284） | オートファジーを欠く株は飢餓で早く死に、胞子を作れない（p.291、Tsukada & Ohsumi の要旨） | 飢餓かどうか、分解の仕組みがあるか |
| 位置情報 | 部分の除去や追加と、模様の比の保ち（Wolpert pp.1・7） | 閾値の下では極性が均される（p.13）。モザイク型では部分が作られない（p.5） | 極性の潜在量の閾値 |

化学・進化生物学・複雑系科学と同じく、至らない形は原典の中心にありました。報告が外に置いた三つ（エネルギーの収支・ミエリン化・グリンパティック系）は、どれも兼ね合いと、それが崩れた形を原典が書いていて、外に置かず行として並べられます。アロスタティック負荷は、守る働きと傷める働きが同じ系の両面として書かれていて、片方を「失敗モード」として分ける形は原典に無いものです。

### テンプレート由来の表示

ja：「立ち位置明示」（3〜6 行）、「Phase 1-2」「Phase 3-4」（30 行）、「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（38 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（89 行）、「安全弁」（91〜93 行）、「結びの温度開示」「温度帯」（219〜220 行）、「Colophon」の generator_model（222〜232 行）。49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。en 15 行「the three conditions associated with Edge」は、縁の三条件という報告の作った体系です。en 31 行「If these definitions already produce discomfort…Both are legitimate choices」は、読者への言い訳の文です（型 F）。pres 43 行の見出し「温度」と 107 行「温度帯」も同じです。数学・物理学・化学・経営学・複雑系科学と同じく、テンプレートで一度に直します（旧い規則（創造とはの読み手の規則））。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 有性生殖の「40億年以上」 | 退避版 381 行、調べた跡 phase6 162 行（「最強の論拠」）・phase7 15 行 |
| 性の赤の女王を Van Valen 1973 に帰す | 退避版 356 行 |
| LC3 の PE 結合を Kabeya 2000 に帰す | DR 28 行（Ichimura ら 2000 を並べている）、退避版 404 行 |
| オートファジーの「外部刺激なし」「内発的プロセス」 | 調べた跡 phase5 126 行・phase6 180 行・232 行・phase7 47 行、退避版 428 行 |
| ミエリンが軸索を「束ねる」 | 調べた跡 phase6 71 行 |
| 「失敗モード」「リセットプロセス」「成立条件」 | 退避版 226 行・244〜247 行・273〜294 行、調べた跡 phase5 94 行・phase6 89 行 |
| 判定の数が版ごとに違う | ja は調べた跡 phase5 25〜27 行の Anchor・Scoped・High-risk と退避版 9 行の縁の印。en は退避版の Accept 11 |
| en の「lack」「deficiency」「error that would otherwise be rejected」「retaining a question」 | 退避版 255 行・341 行の「フック有効性」の欄、退避版 428 行（「栄養の欠け＝欠損」） |
| 乳酸の受け渡しと長期記憶（Suzuki 2011） | 退避版 44 行、調べた跡 phase6 17 行 |
| テンプレートの表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（断定・看板・「最も」）：「この領域で最も重要な横断的知見です」（177 行）、「5段階が特定のスケールに依存しない構造的パターンであることの証拠」（193 行）、「強い構造対応が確認されました」（213 行）、en 132 行「That is a settled physiological finding」、en 138 行「provides the largest body of evidence」、pres 104 行「全体として有力な領域であることが確認されました」。
- 型 H（原典に無い体系）：「縁の第4の実装」（en 73 行・119 行）、「縁の三条件」（en 15 行）、「分解的な渦」「包摂的な渦」（ja 181 行）。
- 型 B（二つに切って置く）：「意識を伴う／伴わない」で 11 の論を切り分ける所（ja 177 行）、「成立条件」「リセット過程」を「構造」と分けて置く所（ja 217 行）。
- 欠損駆動思考と抱持の持ち込み：en 47・49・55・61・67・107・132 行。en 132 行は「問いを保持するには文字どおり ATP が要る」を「確定した生理学の知見」と書き、二つの規約（持ち込まない・断定しない）に同時に当たります。
- 語が同じだけの対応：「ミエリンは文字通り軸索を『束ねる』構造であり、束段階の好例」（ja 165 行）。

### 精読ノートと wiki・台帳の誤り（司令塔が直す）

- 精読ノート「Schultz 1997」 7 行・16 行：頁を「pp.1593-1597」「5」としているが、Crossref と誌面では pp.1593–1599（7 頁）。17 行：「DOI / URL」の欄に DOI が無く、utexas.edu の URL だけ（2026-11-09 に 502）。27 行・33 行：引用の頁 p.1595 は p.1596。63 行：引用「the phasic activation of dopamine neurons should place plasticity only to the onset of light」(p.1594) は原典に無い。近い文は p.1596 の「the dopamine neurons should respond phasically only to the onset of light 1」。
- wiki の頁「Schultz 1997」 66 行：「1593–1597」は 1593–1599。10 行・69 行：OA の URL が utexas.edu（502）。Dayan のサイトの写しに替える案。
- 精読ノート「Wolpert 1969」 39 行：引用「It is suggested that pattern formation is at least a two-step process」は原文と違う。原文（p.18）は「It should be clear that the concepts developed here suggest that pattern formation is at least a two-step process」。63 行：引用の文は p.1 の要旨の文で、注記の p.7–8 ではない（p.8 には似た文がある）。
- 精読ノート「Attwell & Laughlin 2001」 41 行：引用の頁 p.1142 は p.1141。102 行：「1 spike/neuron/s equates to…6.5 µmol ATP/g/min」の頁 p.1143 は p.1140。
- 精読ノート「Mcewen 1998」 65 行：「turning on an allostatic response」の頁 p.171 は p.172。
- 精読ノート「Pellerin & Magistretti 1994」 6 行：「PMC (PMC45074) 経由でHTML全文取得」とあるが、PMC45074 は誌面の頁の画像だけで、HTML の全文は無い。
- wiki の頁「Attwell 2001」 57 行：access_status が「取得先を確かめた」で、台帳（手元に保存した）と合わない。
- 台帳に行がある（Tsukada & Ohsumi 1993）：「論で参照しない」とあるが、Europe PMC で要旨が読める（PMID 8224160）。要旨の相補群は 15、Ohsumi の講演 p.291 は 14 で合わない。
- 台帳に行がある（Pellerin & Magistretti 1994）：OA の URL（PNAS の PDF）は確認画面。PMC45074 の頁の画像で読めることを書き足す案。
- 台帳の「Schultz ら 1997」の行：Dayan のサイトの写しを取得先に足す案は、台帳にすでにある（工学・情報科学で足した）。

精読ノート「McEwen 1998」の 28・34・40・46 行、台帳の「Attwell & Laughlin 2001」の行の 31〜35 行・43〜65 行、台帳の「Wolpert 1969」の行の 45・51・57・83〜87 行の引用と頁は、読んだ所では原典と合っていました。台帳の「Schafer ら 2012」の行は XML で読んだため頁の照合はしていません。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Pellerin & Magistretti（1994）は、PNAS と PMC の PDF が確認画面で、PMC の記事の頁が出す誌面の画像を見て読み、本文照合済にしました。PMC は NIH の公的なアーカイブで出所が書けるので、学会・大学のサイトの写しと同じ扱いにしました（「規約で決めたこと」2026-11-09 の ADS の行に近い）。予想：pjdhiro も同じ扱いを選ぶ見込みです。 → 答え（pjdhiro 2026-11-09・調べ方の規約 §3 の写しの行）：著者・関係者・公的機関・信頼できる企業のサービスに置かれた写しで、著作権に配慮されているものは、本文照合済として採ります。この扱いのままで、下げません。
- 位置情報（Wolpert 1969）は、原典が部分どうしの働きかけを要らないと書く論で、中心の問いの芯（対立や衝突が欠かせない形）に当たりにくい論です。論としては残し、閾値と調整に至らない形を行に書きました（調べ方の規約 §3-3、stance 2-1 の「粗い論も芯があれば数える」の逆の場合）。予想：pjdhiro は外さずに並べる見込みです（群盲象の一面として）。 → 答え（2026-11-10、調べ方の計画と規約の中心の問い）：予想のとおり、外さずに「原典から対立・衝突・統合を読むのは難しい」と書いて並べます。対応が無いと出たら、そのまま保ちます。
- 報告が段の外に置いた三つ（エネルギーの収支・ミエリン化・グリンパティック系）は、外に置かず、兼ね合いと至らない形の行として並べました（調べ方の計画と規約の中心の問い、規約で決めたこと「射程を狭める推奨は採らない」）。
- 有性生殖の「40億年以上」は、Speijer ら（2015）で真核生物の年代を確かめて取り違えとしました。直すのは段 6 で、日英・プレゼン版と退避版・調べた跡の出どころまで通します（調べ方の規約 §7-2）。

## 新しく見つけた原典

台帳は書き換えていません。Van Valen（1973）は台帳の「Van Valen 1973」の行、Turing（1952）は台帳の「Turing 1952」の行、Burnet（1959）と Tonegawa（1987）は台帳の「Burnet 1957」の行と同じ文献なので、行を足さずにそちらを参照します。

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Díaz-García, C. M. ら (2017). Neuronal Stimulation Triggers Neuronal Glycolysis and Not Lactate Uptake. *Cell Metab.* 26(2), 361–374.e4. DOI 10.1016/j.cmet.2017.06.021 | PMC5559896（著者稿。NCBI の efetch で XML） | 取得先を確かめた（著者稿） |
| Dienel, G. A. (2019). Brain Glucose Metabolism: Integration of Energetics with Function. *Physiol. Rev.* 99(1), 949–1045. DOI 10.1152/physrev.00062.2017 | APS（確認画面）。要旨は Europe PMC（PMID 30565508） | 書誌だけ（要旨照合済） |
| Araque, A. ら (1999). Tripartite synapses: glia, the unacknowledged partner. *Trends Neurosci.* 22(5), 208–215. DOI 10.1016/S0166-2236(98)01349-6 | Elsevier（有料。取得を試していない） | 書誌だけ |
| Stevens, B. ら (2007). The Classical Complement Cascade Mediates CNS Synapse Elimination. *Cell* 131(6), 1164–1178. DOI 10.1016/j.cell.2007.10.036 | cell.com（確認画面）。要旨は Europe PMC（PMID 18083105） | 書誌だけ（要旨照合済） |
| Xie, L. ら (2013). Sleep Drives Metabolite Clearance from the Adult Brain. *Science* 342(6156), 373–377. DOI 10.1126/science.1241224 | PMC3880190（著者稿。NCBI の efetch で XML） | 取得先を確かめた（著者稿） |
| Smith, A. J. ら (2017). Test of the 'glymphatic' hypothesis demonstrates diffusive and aquaporin-4-independent solute transport in rodent brain parenchyma. *eLife* 6, e27679. DOI 10.7554/eLife.27679 | PMC5578736（CC BY。NCBI の efetch で XML） | 取得先を確かめた |
| Schultz, W. (2016). Dopamine reward prediction error coding. *Dialogues Clin. Neurosci.* 18(1), 23–32. DOI 10.31887/DCNS.2016.18.1/wschultz | PMC4826767（NCBI の efetch で XML） | 取得先を確かめた（著者のまとめ直し） |
| Schultz, W. (1998). Predictive Reward Signal of Dopamine Neurons. *J. Neurophysiol.* 80(1), 1–27. DOI 10.1152/jn.1998.80.1.1 | APS（確認画面） | 書誌だけ |
| Fiorillo, C. D., Tobler, P. N. & Schultz, W. (2003). Discrete Coding of Reward Probability and Uncertainty by Dopamine Neurons. *Science* 299(5614), 1898–1902. DOI 10.1126/science.1077349 | Science（有料。取得を試していない） | 書誌だけ |
| Otto, S. P. (2009). The Evolutionary Enigma of Sex. *Am. Nat.* 174(S1), S1–S14. DOI 10.1086/599084 | https://www.zoology.ubc.ca/~otto/Reprints/Otto2009.pdf （著者のサイトの写し。誌面） | 取得先を確かめた（著者のサイトの写し） |
| Speijer, D., Lukeš, J. & Eliáš, M. (2015). Sex is a ubiquitous, ancient, and inherent attribute of eukaryotic life. *PNAS* 112(29), 8827–8834. DOI 10.1073/pnas.1501725112 | PMC4517231（PMC の記事の頁の HTML） | 取得先を確かめた |
| Ohsumi, Y. (2016). Molecular Mechanisms of Autophagy in Yeast（ノーベル講演）. *Nobel Lectures*, pp.277–313 | https://www.nobelprize.org/uploads/2018/06/ohsumi-lecture.pdf | 取得先を確かめた（著者のまとめ直し） |
| Kabeya, Y. ら (2000). LC3, a mammalian homologue of yeast Apg8p, is localized in autophagosome membranes after processing. *EMBO J.* 19(21), 5720–5728. DOI 10.1093/emboj/19.21.5720 | PMC305793（PMC の記事の頁の HTML） | 取得先を確かめた |
| Schatz, D. G., Oettinger, M. A. & Baltimore, D. (1989). The V(D)J recombination activating gene, RAG-1. *Cell* 59(6), 1035–1048. DOI 10.1016/0092-8674(89)90760-5 | cell.com（確認画面）。要旨は Europe PMC（PMID 2598259） | 書誌だけ（要旨照合済） |
| McEwen, B. S. & Stellar, E. (1993). Stress and the Individual: Mechanisms Leading to Disease. *Arch. Intern. Med.* 153(18), 2093–2101. DOI 10.1001/archinte.1993.00410180039004 | JAMA（有料。取得を試していない） | 書誌だけ |
| Magistretti, P. J. & Allaman, I. (2018). Lactate in the brain: from metabolic end-product to signalling molecule. *Nat. Rev. Neurosci.* 19(4), 235–249. DOI 10.1038/nrn.2018.19 | Nature（有料。取得を試していない） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Pellerin & Magistretti 1994」の行（Pellerin & Magistretti 1994）：PNAS の PDF と PMC の PDF は確認画面（2026-11-09）。PMC45074 の記事の頁が誌面を頁の画像で出していて、読める（文字の層なし）。
- 台帳の「Attwell & Laughlin 2001」の行（Attwell & Laughlin 2001）：SAGE の取得先は 2026-11-09 に Cloudflare の確認画面で、手元の PDF とバイト単位で比べられなかった。PDF の改変の記録に iText（1T3XT）がある。
- 台帳の「McEwen 1998」の行（McEwen 1998）：取得先の PDF は NEJM の誌面（頁の下に「Downloaded from www.nejm.org at UW MADISON」）。2026-11-09 に取れた。
- 台帳の「Iliff ら 2012」の行（Iliff ら 2012）：PMC3551275 の XML（efetch）で本文が読める。
- 台帳の「Tsukada & Ohsumi 1993」の行（Tsukada & Ohsumi 1993）：Wiley と ScienceDirect は確認画面（403）。要旨は Europe PMC（PMID 8224160）で読める。「論で参照しない」を「要旨照合済。本文は Ohsumi 2016 の講演（著者のまとめ直し）」に改める案。
- 台帳の「Wolpert 1969」の行（Wolpert 1969）：取得先の PDF は誌面の走査（文字の層あり）で、2026-11-09 に取れた。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 生命科学の原典は、二つの働きの兼ね合いと、それが崩れた形を、論の芯として書いていました（取り込みと解糖、費用と情報、強い入力と弱い入力、速さと揃い、守る働きと傷める働き、たまることと除くこと、予測と結果、性の費用と利得、合成と分解）。報告が「成立条件」「リセットプロセス」「失敗モード」として段の外に置いた論ほど、原典は兼ね合いをはっきり書いていました。
- 報告が引く原論文の多く（PNAS・Science・Cell・APS・Wiley）は、自動取得で Cloudflare の確認画面になりました。PMC の著者稿（Schafer・Fields・Xie・Iliff・Díaz-García）、PMC の CC の全文（Smith・Schultz 2016）、著者のサイト（Otto・Dayan）、授業の頁（McEwen・Wolpert）で、論の芯に当たれました。古い PNAS（1994）は PMC に文字の層が無く、頁の画像を見て読みました。
- 争いのある論（ANLS・グリンパティック系・性の進化）は、反対の側の OA の論文（Díaz-García ら 2017・Smith ら 2017）や、説明の限界を書く総説（Otto 2009）が PMC や著者のサイトで読め、研究の一線を本文で書けました。
- 有料の原論文が読めないとき、同じ研究室の後の講演（Ohsumi 2016）は、原論文の要旨と数（相補群の数）が合わないことがありました。講演を確かめ先にするときは、要旨と突き合わせるのがよいと分かりました。
- 共著者のサイトの写し（Dayan）は、別の分野（工学・情報科学）で手元に置いた PDF とバイト単位で同じで、分野をまたいで同じファイルを使えました。
- 報告の誤りの多くは、調べた跡（phase6・phase7）が「最強の論拠」などとして作った読みが、本文で事実として書かれたところにありました（40億年・内発的起動・束ねる）。英語版には、退避版の「フック有効性」の欄から来た欠損駆動思考と抱持の語が多く残っていました。
