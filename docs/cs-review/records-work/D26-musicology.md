# 音楽学：記録から外した作業の節

`cs/evidence/evidence-D26-musicology.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D26-musicology.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | ja | en | pres | 退避版 |
|---|---|---|---|---|
| 件数 | 強い 2・部分 4・条件付き 4（84 行・Colophon 251 行） | Strong 7・Conditional 3（59〜68 行・177 行「7 of the 10」） | 「主要理論 7件」「強い 1・部分 1・条件付き 2」（21・23 行）。表では「確定に近い」2・「有力」5・「条件つき」3（46〜48 行） | Accept 7・CA 3、縁の旗 🔴 2・🟡 5（523〜531 行） |
| Pressing・ソナタ形式・NHS・グルーヴ・ASA | 部分・部分・条件付き・部分・部分 | Strong（五つとも） | 有力 | Accept |
| ラーガの提唱者 | 「インド古典音楽理論」 | Powers & Widdess (2001)・Jairazbhoy (1971)・Clayton (2000) | ― | Powers & Widdess (2001)・Jairazbhoy (1971)・Clayton (2000)（344 行） |
| グルーヴの提唱者 | Witek et al. (2014) 他 | Madison (2006)・Witek et al. (2014)・Pressing (2002)・Janata et al. (2012) | ― | ― |
| TPS の提唱者 | Lerdahl (2001) | Lerdahl (2001)・Lerdahl & Jackendoff (1983) | ― | ― |

pres は「7件」と書きながら表に 10 の理論を並べ、件数の二つの書き方も合いません。版ごとに別に生成されたことが、件数と提唱者の食い違いの出どころと見られます（言語学・社会学・経営学・人類学・民族学と同じ）。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 14 行「音楽学は『期待→誤差→再評価』の創造的ループを最も明示的に記述する領域の一つ」、ja 182 行・ja 231 行「期待に対する誤差が創造を駆動する」 | 付け足し | 高 | 読めた原典は、期待の違反を情動や快の源として書き、「創造」を駆動するとは書いていない。phase7 16 行の循環構造と phase6 209〜213 行の仮説 1「音楽は『欠損駆動思考の時間的具体化』である」[SPECULATIVE] から来ていて、欠損駆動思考の語を消して残っている |
| ja 182 行「ミリ秒から世紀に至るあらゆる時間スケールで確認」 | 付け足し | 中 | 原典で確かめた跡が無い。phase7 7〜16 行の時間の並べ方 |
| ja 57 行・ja 186〜193 行・ja 233 行「縁の記述が最も豊かな領域」「4種の異なるメカニズム」 | 付け足し | 中 | 型の名（可能性空間型・身体的・形式的・知覚的）は原典に無い。phase5 31・179 行と phase6 191 行、phase7 20〜24 行で LLM が付けた。30 領域を比べた跡は無い |
| ja 61 行・ja 197〜199 行・ja 235 行「束の記述は一貫して最も薄い」「時間芸術であることに起因する」 | 付け足し | 中 | phase5 182 行・phase6 203 行・phase7 31〜41 行の構成。原典はこう書いていない。束を「作品を超えて残る変化に求めるべき」とするのは調べた跡の提案 |
| ja 84 行「強い対応が確認された2件…最も堅い接続点」、ja 229〜231 行 | 言い過ぎ | 中 | 強いとされた二つの提唱者の本（Meyer 1956・Huron 2006）は読まれていない |
| ja 18〜20 行・ja 225 行「西洋音楽理論に偏った選定」 | 一致 | 低 | 偏りの自己点検としては合う。ただしラーガも NHS も原典を挙げずに数えていた |

### テンプレート由来の表示

「立ち位置明示」（3 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6」「Phase 7」（28・30 行）、「方法論的開示（S60）」（42 行）、「温度帯の分布」（84 行）、「安全弁」（86 行）、「結びの温度開示」「温度帯」（239〜243 行）、「Colophon」「generator_model」（245〜255 行）。46〜47 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と書き、著者を pjdhiro としていて、文責の書き方（writing §1-1・§1-8）と合いません。pres 46 行の「温度」の表も同じです。テンプレートで一度に直すものです（README 段 1）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 即興の「誤差が修正対象ではなく次の創造の入力」 | 退避版 33 行の [P] → phase6 18 行で欠損駆動思考の旧い定義に接続 → ja 114 行・en 81 行・pres 72 行（つなぎの語を消して残る） |
| 「期待→誤差→再評価」の創造的ループ・誤差が創造を駆動 | phase6 209〜213 行の仮説 1（欠損駆動思考の時間的具体化、[SPECULATIVE]）・phase7 52〜63 行のパターン 5 → ja 14・182・231 行 |
| ソナタ形式の「弁証法的構造」・Rosen の「大規模な不協和」 | DR 30〜31 行 → 退避版 68 行 → ja 74・120〜122 行 |
| ITPRA の「意識的再評価」と、Tension から解決への対照的情動価 | 退避版 186・188 行 → ja 106 行 |
| アーラープの「漂う」「最も純粋な場」 | 退避版 349・352・360 行 → phase6 の EV-MU-008 → ja 162・166 行 |
| Clarke の「主客未分」「非二元的理解と共鳴」 | 退避版の CHK-A（非二元性）の欄と 486〜493 行 → phase5 125・198 行・phase6 168 行 → ja 172〜174 行 |
| NHS の「研究プロセスへの写像」「メタレベル」 | DR の「メタレベル注意」 → phase5 68〜71・155・190 行 → phase6 61〜62 行 → ja 148〜150 行 |
| 縁の 4 種・束が薄い・時間スケール | phase5 31・179・182 行 → phase6 191・203 行 → phase7 10〜41 行 → ja §6 |
| TPS の「分析生成 vs 存在生成」 | 退避版 17・302 行 → phase5 97・192 行 → phase7 89・122 行 → ja 156〜158 行・pres 47 行 |
| 版ごとの件数と提唱者の食い違い | ja・en・pres が別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 H（原典に無い体系）：「4種の異なるメカニズムが確認されました」「可能性空間型」「身体的」「形式的」「知覚的」（ja 186〜191 行）。型の名は原典に無く、「確認されました」は確かめた跡の無い語です。
- 型 E（言い切る）と「最も」：「最も直接的な理論」（94 行）、「最も堅い接続点」（84 行）、「10件中最も純粋な『場』」（166 行）、「最も豊かな記述が得られた段階」（57 行）、「5段階との全段階対応が堅く成立します」（231 行）。
- writing §7-3・§7-5（理論の理想の像や5段階の語を原典に重ねる）：「5段階モデルの非二元的理解と共鳴する」（172 行）、「場（主客未分の全体性）」（174 行）。
- 至らない形を外に置く書き方：グルーヴの集団同期の解体を「時間スケールが異なります」（134 行）とし、TPS を記述の水準の違いで「限定的」（158 行）とし、束を「時間芸術において固有の困難」（197 行）としています。読めた原典は、期待が立たない形・何も起きない形・予測が崩れる形・入れ替わり続ける形を論の中に書いていました。
- 型 J：ダッシュの挿入（138 行「双安定状態——同一の音信号が…——が特徴的です」、130 行「逆U字型の最適複雑性として記述されます——単純すぎる…」）。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Huron & Margulis（2010）は、Huron の研究室のサイトに置かれた校正刷りを Wayback の記録で読みました。著者のサイトの写しなので、性格を添えて本文照合済にしました（README「規約で決めたこと」の歴史学の行）。校正刷りと刊行版の文字の違いは確かめていません。
- Fox Strangways（1914）は、Internet Archive の Universal Digital Library の走査で、上げた人の欄は個人のアカウントですが、集まり（universallibrary）が図書館の走査の計画なので、歴史学の Digital Library of India と同じ扱いにしました。1914 年の刊行でパブリックドメインです。
- Mehr ら（2019）の論で、報告は研究の手続きを段に当てていましたが、README の領域の対象の行に従い、歌そのものについての原典の書き方で並べ直しました。
- Helmholtz（1895）は、似た論文の行ですが、本文に当たれて、二つの音のぶつかりと、その分かれ目を書いているので、論として足しました（README「調査の手順」1）。Hanslick（1891）・Schulkin & Raglan（2014）・Koelsch & Siebel（2005）・Ellamil ら（2016）・Zatorre & Salimpoor（2013）・Eerola & Lahdelma（2021）は、論として足していません。Ellamil らはグルーヴの節で関わる論として挙げました。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Huron, D. & Margulis, E. H. (2010). Musical expectancy and thrills. In P. N. Juslin & J. A. Sloboda (Eds.), *Handbook of Music and Emotion* (pp.575–604). Oxford University Press. DOI 10.1093/acprof:oso/9780199230143.003.0021 | https://web.archive.org/web/20170705123734/http://www.musiccog.ohio-state.edu/home/data/_uploaded/pdf/LabPublications%28DanEdit%29/Huron_Margulis_proofs.pdf （著者の研究室のサイトの校正刷り、Wayback の記録。保存名の案手元の PDF） | 手元に保存した |
| Hepokoski, J. (2010). Formal process, Sonata Theory, and the first movement of Beethoven's "Tempest" Sonata. *Music Theory Online* 16(2). DOI 10.30535/mto.16.2.7 | https://mtosmt.org/issues/mto.10.16.2/mto.10.16.2.hepokoski.html （2026-11-09 は接続が時間切れ。Wayback の記録 2026-07-27 で読んだ。HTML。保存名の案手元のファイル） | 手元に保存した |
| Witek, M. A. G., Clarke, E. F., Wallentin, M., Kringelbach, M. L. & Vuust, P. (2014). Syncopation, body-movement and pleasure in groove music. *PLoS ONE* 9(4), e94446. DOI 10.1371/journal.pone.0094446 | https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0094446&type=printable （CC BY。保存名の案手元の PDF） | 手元に保存した |
| Vuust, P. & Witek, M. A. G. (2014). Rhythmic complexity and predictive coding: a novel approach to modeling rhythm and meter perception in music. *Frontiers in Psychology* 5, 1111. DOI 10.3389/fpsyg.2014.01111 | https://www.frontiersin.org/articles/10.3389/fpsyg.2014.01111/pdf （CC BY。保存名の案手元の PDF） | 手元に保存した |
| Matthews, T. E., Witek, M. A. G., Heggli, O. A., Penhune, V. B. & Vuust, P. (2019). The sensation of groove is affected by the interaction of rhythmic and harmonic complexity. *PLoS ONE* 14(1), e0204539. DOI 10.1371/journal.pone.0204539 | https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0204539&type=printable （保存名の案手元の PDF） | 手元に保存した |
| Bregman, A. S. & Campbell, J. (1971). Primary auditory stream segregation and perception of order in rapid sequences of tones. *Journal of Experimental Psychology* 89(2), 244–249. DOI 10.1037/h0031163 | https://web.archive.org/web/20250811134001/https://webpages.mcgill.ca/staff/Group2/abregm1/web/pdf/1971_Bregman_Campbell.pdf （著者の McGill の頁、Wayback の記録。元の置き場は 2026-11-09 に「Web Hosting Unavailable」。保存名の案手元の PDF） | 手元に保存した |
| Bregman, A. S. (2008). Auditory scene analysis. In L. Squire (Ed.), *New Encyclopedia of Neuroscience*. Elsevier（著者稿。刊行版の頁と DOI は未確認） | https://web.archive.org/web/20250811133643/https://webpages.mcgill.ca/staff/Group2/abregm1/web/pdf/2008-New-Encyclopedia-Neuroscience.pdf （保存名の案手元の PDF） | 手元に保存した |
| Pressnitzer, D. & Hupé, J.-M. (2006). Temporal dynamics of auditory and visual bistability reveal common principles of perceptual organization. *Current Biology* 16(13), 1351–1357. DOI 10.1016/j.cub.2006.05.054 | https://hal.science/hal-00111082v1/document （HAL の著者稿。保存名の案手元の PDF） | 手元に保存した |
| Savage, P. E. (2025 [2019]). Public peer review of "A natural history of song" / "Universality and diversity in human song" (Mehr et al., 2019). PsyArXiv. https://doi.org/10.31234/osf.io/gxzfq | https://osf.io/download/b69xt/ （著者の公開。保存名の案手元の PDF） | 手元に保存した |
| Will, U., Clayton, M., Wertheim, I., Leante, L. & Berg, E. (2015). Pulse and entrainment to non-isochronous auditory stimuli: The case of North Indian alap. *PLoS ONE* 10(4), e0123247. DOI 10.1371/journal.pone.0123247 | https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0123247&type=printable （CC BY。保存名の案手元の PDF） | 手元に保存した |
| Fox Strangways, A. H. (1914). *The Music of Hindostan*. Oxford: Clarendon Press | https://archive.org/details/musicofhindostan000108mbp （Universal Digital Library の走査。パブリックドメイン。OCR の文字で読んだ。保存名の案手元の PDF） | 手元に保存した |
| Widdess, R. (2011). Dynamics of melodic discourse in Indian music. In M. Tenzer & J. Roeder (Eds.), *Analytical and Cross-Cultural Studies in World Music*. Oxford University Press. DOI 10.1093/acprof:oso/9780195384581.003.0005（題は OpenAlex の返事。編者と書名は Crossref で確かめていない） | https://eprints.soas.ac.uk/13295/1/Dynamics%20of%20melodic%20discourse%20%5Bpre-proof%20version.pdf （SOAS Research Online の刊行前の版。2026-11-09 は 502 で落ちていた） | 手元に保存した（追記 2026-11-09：Wayback の記録から取れた。上の節 9） |
| Napier, J. (2019). Structure and proportion in Hindustani ālāp. *Empirical Musicology Review* 14(1–2), 53–65. DOI 10.18061/emr.v14i1-2.5502 | https://emusicology.org/article/download/5502/5450 ・ https://unsworks.unsw.edu.au/bitstreams/47569e14-d92a-432c-8783-d998e53b27a5/download （どちらも案内の頁を返した） | 自動では取れない |
| Meyer, L. B. (1957). Meaning in music and information theory. *Journal of Aesthetics and Art Criticism* 15(4), 412–424. DOI 10.2307/427154 | JSTOR・Wiley（有料） | 書誌だけ |
| Hepokoski, J. (2001). Back and forth from Egmont: Beethoven, Mozart, and the nonresolving recapitulation. *19th-Century Music* 25(2–3), 127–154. DOI 10.1525/ncm.2001.25.2-3.127 | UC Press（有料） | 書誌だけ |
| Hepokoski, J. (2002). Beyond the sonata principle. *Journal of the American Musicological Society* 55(1), 91–154. DOI 10.1525/jams.2002.55.1.91 | UC Press（有料） | 書誌だけ |
| Hepokoski, J. & Darcy, W. (1997). The medial caesura and its role in the eighteenth-century sonata exposition. *Music Theory Spectrum* 19(2), 115–154. DOI 10.2307/745751 | Oxford・JSTOR（有料） | 書誌だけ |
| Lerdahl, F. & Krumhansl, C. L. (2007). Modeling tonal tension. *Music Perception* 24(4), 329–366. DOI 10.1525/mp.2007.24.4.329 | UC Press（有料） | 書誌だけ |
| Lerdahl, F. (1988). Tonal pitch space. *Music Perception* 5(3), 315–349. DOI 10.2307/40285402 | UC Press・JSTOR（有料） | 書誌だけ |
| Johnson-Laird, P. N. (2002). How jazz musicians improvise. *Music Perception* 19(3), 415–442. DOI 10.1525/mp.2002.19.3.415 | UC Press（有料） | 書誌だけ |
| Bregman, A. S. (1990). *Auditory Scene Analysis: The Perceptual Organization of Sound*. MIT Press. DOI 10.7551/mitpress/1486.001.0001 | Internet Archive は貸出の形 | 自動では取れない |
| Clarke, E. F. (2005). *Ways of Listening*. Oxford University Press. DOI 10.1093/acprof:oso/9780195151947.001.0001。関わる論文 Windsor, W. L. & de Bézenac, C. (2012). Music and affordances. *Musicae Scientiae* 16(1), 102–120. DOI 10.1177/1029864911435734 | Oxford（有料）。White Rose の行 75863 は本文が restricted | 自動では取れない |
| Janata, P., Tomic, S. T. & Haberman, J. M. (2012). Sensorimotor coupling in music and the psychology of the groove. *Journal of Experimental Psychology: General* 141(1), 54–75. DOI 10.1037/a0024208 | https://zenodo.org/record/997607/files/article.pdf （上げた人と権利は未確認。取っていない） | 書誌だけ |

取ってきたファイルは、司令塔が手元の原典の置き場に置き、下の書き足しを台帳に入れました（2026-11-09。台帳の「Helmholtz 1895」の行の版の表示は、司令塔が OCR の文字で確かめられたのは刊年の 1895 までなので、台帳の版の語は変えずに書き添えています）。既存の行に書き足した案：

- 台帳の「Egermann ら 2013」の行：題を全体に直す（Probabilistic models of expectation violation predict psychophysiological emotional responses to live concert music. *CABN* 13(3), 533–553）。McGill の PDF は出版社の「Author's personal copy」（23 頁、誌面の頁番号が無い版）で、先頭は %PDF。取得先を確かめた の行を「手元に保存した」に上げられる（保存名の案手元の PDF）。
- 台帳の「Mehr ら 2019」の行：取得先 https://osf.io/gxzfq_v1/download は、Mehr らの論文でなく、Savage の査読の公開版（上の台帳の「Savage 2025」の行）。Mehr らの著者稿は PMC7001657 の記事の頁（HTML）で読めた（保存名の案手元のファイル）。OpenAlex は PsyArXiv の著者稿（https://osf.io/emq8r ）も挙げる（試していない）。
- 台帳の「Savage ら 2015」の行：PMC4517223 の記事の頁（HTML）で読めた（保存名の案手元のファイル）。
- 台帳の「Madison 2006」の行：備考の「OA代替」の Witek ら 2014 は別の論文で、Madison 2006 の代わりにはならない。上の台帳の「Witek ら 2014」の行を独立の行にする。
- 台帳の「Limb & Braun 2008」の行：PLOS の PDF を取れた（9 頁。パブリックドメインの表示。保存名の案手元の PDF）。取得先を確かめた の行を「手元に保存した」に上げられる。
- 台帳の「Helmholtz 1895」の行：「2nd English ed.」を「3rd ed. (1895), reprinted from the 2nd ed. (1885)」に直す。写しの題の頁に「THIRD EDITION」「1895」とある。Google の走査（unknown library）。_djvu.txt で読んだ。
- 台帳の「Eerola & Lahdelma 2021」の行：SAGE の PDF は Cloudflare の確認画面（「Just a moment...」）を返した。OpenAlex は Durham Research Online（http://dro.dur.ac.uk/33628/ ）と OSF の著者稿（https://osf.io/6aqhx ）を挙げる（試していない）。
- 台帳の「Schulkin & Raglan 2014」の行：PDF を取れ、1 頁目の書誌が合った（保存名の案手元の PDF・手元の PDF・手元の PDF）。取得先を確かめた の行を「手元に保存した」に上げられる。
- 台帳の「Zatorre & Salimpoor 2013」の行：Europe PMC の PDF の取得先は Cloudflare の確認画面、PMC の記事の頁は reCAPTCHA の確認画面を返した。NCBI の efetch（db=pmc）は要旨だけ。下の表。
- 台帳の「Hanslick 1854」の行：Internet Archive の写しは、ノースカロライナ大学チャペルヒル校の音楽図書館の本の走査で、Cohen 訳は独語の第 7 版（1885）から（Novello 1891）。_djvu.txt を取れた。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 書籍の多い分野でしたが、同じ論の著者の短い文章（Huron & Margulis の章の校正刷り、Hepokoski の Music Theory Online の論文、Bregman の事典の項目の著者稿）が、著者のサイトや学会の OA の誌に残っていて、Wayback の CDX の一覧で見つかりました。Huron と Bregman のサイトは今は無いか落ちていて、Wayback の記録で読みました。
- 台帳が「取得先を確かめた」と書く台帳の「Mehr ら 2019」の行の取得先は、同じ論文の別の文書（査読者の公開版）でした。題の語が合うだけの URL を取得先にした例です。中身は、普遍の主張への方法の批判として、この分野の研究の一線を書くのに使えました。
- OpenAlex が van Noorden（1975）の学位論文に挙げた DOI は、別の学位論文に飛びました。
- 出版社や PMC の PDF（SAGE・Europe PMC の PDF・PMC の Zatorre の記事）は確認画面を返しましたが、PMC の記事の頁（HTML）は Mehr と Savage では読めました。Europe PMC の REST はこの日 500 を返しました。mtosmt.org と SOAS は接続が切れ、確認画面と分けて書きました。 追記（2026-11-09）：SOAS の「502」は、ホスト名が引けないときにサンドボックスの中継が返したものでした。取得先が落ちているのか、名前が引けないのか、中継の返事なのかは、司令塔がサンドボックスの外から一度引いて確かめます。
- 精読ノートと wiki の機械的な誤り（直していません）：
  - 精読ノート「Limb 2008」 44 行とwiki の頁「Limb 2008」 48 行の引用「allowing unfettered, unconscious…」は、原文（PDF p.4）では「allowing unfiltered, unconscious…」です。同じノートの 7 行「原典ページ数: 8」は、PLOS の PDF では 9 頁です。
  - 精読ノート「Mehr 2019」 32・38・44・50・63 行は、要約を引用符の中に書いていて、原文の文ではありません。48・52 行「調性は普遍的特徴である」「普遍的特徴であることが示された」は、原文（Abstract）では「tonality is widespread, perhaps universal」です。
  - 精読ノート「Savage 2015」 32 行の引用「[Eighteen] musical features that individually appear across cultures...」は原文に無く、Abstract は「These universals include 18 musical features that are common individually as well as a network of 10 features…」です。
  - wiki の音楽学の 10 枚の frontmatter の `source.repo` は「creation-space」のままです（段 4）。
- 調べた跡の語が言い換えられて報告に入っていた所は、即興の「誤差を次の創造の入力にする」（phase6 18 行の欠損駆動思考との接続）と、「期待に対する誤差が創造を駆動する」（phase6 209 行の仮説 1）でした。欠損・抱持の語は報告に無く、grep だけでは見つからない形でした。phase6 53・195 行の「抱持（保持）」は、報告では「阻害・遅延によって複数の可能性が共存」（ja 98 行）として、語を消した形で残っている見込みです。
