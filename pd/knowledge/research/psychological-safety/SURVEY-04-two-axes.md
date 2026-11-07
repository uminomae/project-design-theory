# SURVEY-04 二軸 — 生存の側と信頼の側（pd#151）

## 状態

- 日付: 2026-11-06。担当: team-researcher（調べの 4 本目）。共通の規律は同ディレクトリ `BRIEF-researchers.md`。
- 中心の問い: 脅威が無いこと（生存の側）と、信頼の合図があること（信頼の側）は別の軸か。心理的安全性はどちらを指してきたか。
- 取得できた一次資料（本文を読んだもの）: 7 本（critic round 1 で「6 本」から訂正。並べた 7 本を数え直した）。Porges 2022（PDF）・Porges 2021（Europe PMC の全文 XML）・Porges 2026（同）・Grossman 2023（Zenodo のプレプリント版 PDF）・寺井・森田・山岸 2003（J-STAGE PDF）・小杉・山岸 1998（J-STAGE PDF）・Maslow 1943（psychclassics の HTML。原典のページ番号つき）。Edmondson 1999 は前セッションで取得済みの PDF のテキストで p.354 を見直した。
- 要旨だけ照合したもの: Porges 1995・Porges 2003・Grossman & Taylor 2007・Neuhuber & Berthoud 2022（PubMed efetch）、Cesario, Johnson & Eisthen 2020（Semantic Scholar の要旨）。
- 取れなかったもの: 山岸 1999『安心社会から信頼社会へ』の本文（電子版・Internet Archive・Google Books なし。Google Books API は日次上限で 429）、Yamagishi & Yamagishi 1994 の本文（Springer はログインへ 303。Unpaywall・Semantic Scholar とも closed）、Yamagishi, Kikuchi & Kosugi 1999 の本文（Wiley・未試行の経路は末尾）、Porges 2011 の書籍、Porges 1995 の本文（Unpaywall は Wiley の pdfdirect を bronze と示すが、取得すると HTML が返った）。経路の一覧は末尾「取れなかったもの」。
- 保存先: `.cache/raw/psychological-safety/`（ファイル名は末尾の書誌の表）。
- 先に置かれていたもの: develop の `knowledge/research/psychological-safety/SURVEY-00-first-pass.md` §5.1・§5.2（この worktree には無い。develop の main checkout にある）と、awareness-space `knowledge/concepts/CN-006_trust-analysis-axes.md` §3.4・§3.6（2026-11-06 追加。山岸の「安心」を生存軸の側に置いた表がある）。本ファイルは、そこで「未照合」とされた Porges と山岸を、原典の側で確かめ直したもの。
- 2026-11-06 critic round 1 の指摘を反映（REVIEW-critic-20261106.md）。

---

## 1. Porges (2022) "Polyvagal Theory: A Science of Safety"

1. **書誌**: Porges, S. W. (2022). Polyvagal Theory: A Science of Safety. *Frontiers in Integrative Neuroscience*, 16, 871227. DOI 10.3389/fnint.2022.871227。Crossref（題・著者・誌名・巻・2022-05-10）と Semantic Scholar（PMC9131189・PMID 35645742・GOLD OA・CC BY）で一致。PDF の pdfinfo も題が一致、15 ページ。
2. **照合の状態**: `本文照合済`。Semantic Scholar の `openAccessPdf`（`https://www.frontiersin.org/articles/10.3389/fnint.2022.871227/pdf`）から取得。`porges-2022-science-of-safety.pdf`。ページ番号は PDF のページ（論文は記事番号制で、通しページを持たない）。
3. **鍵の文**:
   - p.2: "Feelings of safety are not equivalent to an objective measurement of safety, which may pragmatically be defined as the removal of threat."（安全だと感じることは、脅威を取り除くことと定義できる客観的な安全の測定と同じではない）
   - p.8–9: "removal of threat is assumed to produce feelings of safety. … neither construct elaborates on the mechanisms that would optimize function following the removal of stress or threat, while implicitly assuming that removal is sufficient."（脅威を取り除けば安全だと感じられる、と想定されてきた。どちらの概念も、取り除いたあとに働きを支える仕組みを述べず、取り除けば足りると暗に想定している）
   - p.8: "in the presence of cues of safety, which we associate with positive social interactions, the mammalian social engagement system can downregulate our innate reactions to threat"（安全の合図があるとき、それは良い社会的なやりとりと結びついているが、社会的関与システムが脅威への反応を下げうる）
   - neuroception の定義 p.7: "a neural process, distinct from perception, capable of distinguishing environmental and visceral features that are safe, dangerous, or life-threatening"（知覚とは別の、意識を要しない神経の過程で、安全・危険・生命の危険を見分ける）
   - 三つの回路と順序 p.7: "the newest is labeled the ventral vagal complex, the oldest is the dorsal vagal complex, and in between is the spinal sympathetic nervous system."
4. **読み**:
   - [教科書] 自律神経には交感神経と副交感神経があり、迷走神経の心臓への遠心路は延髄の疑核（nucleus ambiguus）と迷走神経背側運動核から出る。
   - [研究の一線] 三つの回路を系統発生の順（背側迷走が最古・交感・腹側迷走が最新で哺乳類に固有）に並べ、脅威のもとでは新しいものから順に外れていく（Jackson の dissolution）という筋書きは Porges の主張で、強く争われている（§4〜§6）。
   - [研究の一線] 「安全だと感じること」と「脅威が取り除かれたこと」を別のものとして扱う区別は、この論文で最も明示的に書かれている。安全の感じには、脅威が引かれることに加えて、安全の合図（声の抑揚・表情・信頼できる他者が近くにいること）が足されることが要る、という向き。
   - [Claude の読み替え] Porges の語で「safety」は、脅威が無いことより、信頼できる他者からの合図の側に重みがある。日本語で「安全」と訳すと生存の側に聞こえるが、Porges の safety は pd の語では信頼の信号に近いところを指している。
5. **pjdhiro の見立てとの関係**: 「いつの間にか低次欲求だけをケアしてる」と、p.9 の「取り除けば足りると暗に想定している」は、同じ形の指摘として重なる。脅威を取り除く手当て（罰しない仕組み・制度）だけが進み、合図の側が手当てされない、という形。重ならないのは語彙で、Porges は欲求の高低（Maslow）では書かず、神経の状態の切り替わりとして書く。また「生物的に安全ではない」と言うときの「生物的」は、Porges では逆に、安全の感じそのものが生物の側（自律神経の状態）にある、と置かれる。[Claude の読み替え] Porges の枠では、心理的な安全も生物的な安全の一つの現れで、二つは切り離されていない。ただし本人の「生物的」は、続く「いつの間にか低次欲求だけをケアしてる」から見て、Maslow の低次欲求の側の語として使われている。Porges の自律神経の層とは別の切り方で、Porges の語で本人の「生物的」を言い換えると、本人が立てた区別が消える（critic round 1）。二つの「生物的」は分けて書く。

## 2. Porges (2021) "Polyvagal Theory: A biobehavioral journey to sociality" — 混ざった状態

1. **書誌**: Porges, S. W. (2021). Polyvagal Theory: A biobehavioral journey to sociality. *Comprehensive Psychoneuroendocrinology*, 7, 100069. DOI 10.1016/j.cpnec.2021.100069。Europe PMC（PMC9216697・PMID 35757052・CC BY）の XML の題・巻と一致。Crossref は未照合（Europe PMC の記録のみ）。
2. **照合の状態**: `本文照合済`。Europe PMC REST の `fullTextXML` を取得（`porges-PMC9216697.xml`）。ページ番号は無い（記事番号制）。節番号で示す。
3. **鍵の文**（§5 の末尾）: "The ventral vagal pathways also coordinate and repurpose circuits that evolved to support defense in socially relevant processes, such as play (i.e., ventral vagal influences constrain sympathetic reactivity), and intimacy (i.e., ventral vagal influences constrain dorsal vagal reactivity)."（腹側迷走の経路は、防衛のために進化した回路を社会的な過程に使い直す。遊び＝腹側迷走が交感神経の反応を抑える、親密さ＝腹側迷走が背側迷走の反応を抑える）
4. **読み**:
   - [研究の一線] 遊び（交感神経＋腹側迷走）と、恐れのない不動・親密な静けさ（背側迷走＋腹側迷走）を「混ざった状態」とする。Porges 2022 p.12 にも「immobilize without fear」の語がある。ここでは「混ざった状態」は依頼文の言い方で、原文は「coordinate and repurpose」「constrain」。
   - [Claude の読み替え] 生存の側の回路（動員・不動）は残ったまま、信頼の側の回路に包まれて別の使われ方をする、という形。二つは切り離された二軸というより、入り込み合う。遊び（交感神経の動員を、腹側迷走が包む）は、異を唱える・試す・失敗するといった、心理的安全性の研究が言う「学習行動」に近い形をしている（この対応を示した研究には当たっていない）。
5. **pjdhiro の見立てとの関係**: 「二軸がある」と言うとき、Porges の筋書きでは軸は直交する二本というより、古い回路と新しい回路の重なりとして書かれる。重なるのは「生存の側と信頼の側は別のもの」という点。重ならないのは、Porges では二つが同時に働いて混ざった状態をつくる、と置かれている点（二つの軸のどちらかの上にいる、という形ではない）。

## 3. Porges (1995)・Porges (2003) — 筋書きの出所と「爬虫類」の語

1. **書誌**:
   - Porges, S. W. (1995). Orienting in a defensive world: Mammalian modifications of our evolutionary heritage. A Polyvagal Theory. *Psychophysiology*, 32(4), 301–318. DOI 10.1111/j.1469-8986.1995.tb01213.x。Crossref・Semantic Scholar・PubMed（7652107）で一致。
   - Porges, S. W. (2003). The Polyvagal Theory: phylogenetic contributions to social behavior. *Physiology & Behavior*, 79(3), 503–513. DOI 10.1016/S0031-9384(03)00156-2。Crossref・Semantic Scholar・PubMed（12954445）で一致。
2. **照合の状態**: どちらも `要旨照合済`（PubMed efetch）。本文は未取得（1995 は Wiley の pdfdirect が HTML を返した。2003 は Elsevier・closed）。
3. **鍵の文**:
   - 1995 要旨: "speculates that mammalian, but not reptilian, brainstem organization is characterized by a ventral vagal complex (including NA)"（哺乳類の脳幹は、爬虫類と違い、腹側迷走複合体をもつ、と推測する）
   - 2003 要旨: "The scientific legacy of Paul MacLean provides important insights into the neural substrate of adaptive social behavior in mammals."（MacLean の遺産から出発する）
4. **読み**:
   - [研究の一線] 「爬虫類＝背側迷走・不動」「哺乳類＝腹側迷走・社会的関与」という対は、1995 の出発点から Porges の筋書きの骨にある。2003 は MacLean（三位一体脳＝爬虫類の脳・旧哺乳類の脳・新哺乳類の脳）の系譜に自分を置いている。
   - [Claude の読み替え] pjdhiro の「爬虫類」という言い方は、この MacLean → Porges の語彙に当たる。develop の SURVEY-00 §5.2 が引く Cook-Greuter 2013 p.9（爬虫類の脳から来る防衛＝逃走・闘争・凍結）も同じ系譜の語。
5. **pjdhiro の見立てとの関係**: 「ポリベーガル理論みたいな二軸」と「爬虫類」は、Porges の中では一つの筋書き（系統発生の順序）の二つの面。後に見るとおり、批判が最も強く当たっているのは、まさにこの「爬虫類」の部分である。

## 4. Grossman (2023) — 五つの前提への批判

1. **書誌**: Grossman, P. (2023). Fundamental challenges and likely refutations of the five basic premises of the polyvagal theory. *Biological Psychology*, 180, 108589. DOI 10.1016/j.biopsycho.2023.108589。Crossref（巻 180・記事 108589・2023-05）と Semantic Scholar（HYBRID OA・CC BY・PMID 37230290）で一致。
2. **照合の状態**: `本文照合済`（ただし**プレプリント版**）。Unpaywall が示した Zenodo（10.5281/zenodo.7955274）の PDF を取得（`grossman-2023-five-premises.pdf`、pdfinfo の題は「Grossman Arxiv Polyvagal Refutation」、22 ページ）。題・著者・五つの前提の構成は掲載版の題と一致。ページは**プレプリントのページ**で、掲載版のページとは違う。掲載版（Elsevier の OA）は未取得。
3. **鍵の文**:
   - p.2（要旨）: "I will also argue that the polyvagal reliance upon RSA as equivalent to general vagal tone or even cardiac vagal tone is conceptually a category mistake (Ryle, 1949)"
   - p.5（前提 2 として Porges 2011 から引く文）: "Neurogenic bradycardia associated with orienting is a phylogenetic vestigial relic of the reptilian brain and is mediated by the dorsal vagal motor nucleus."
   - p.7: "the polyvagal claims of unique forms of sociality and social learning among humans … do not correspond to the existing body of evidence that find both complex forms and levels of social behavior among reptiles, amphibians, birds and even fishes"
   - p.3 脚注 3（Bowlby 1969 の引用）: "what might be called a safety-regulating system, namely a system the activities of which tend to reduce the risk of the individual coming to harm"（二次経由: Bowlby の原典は未照合）
4. **読み**:
   - [教科書] 迷走神経の背側運動核と疑核は脊椎動物に広くある。心拍の迷走神経による減速は、哺乳類では主に疑核の側から来る（Grossman はこれを 1976 年以来の動物実験で示されたこととして書く。Neuhuber & Berthoud 2022 の解剖の総説も同じ側）。
   - [研究の一線] Grossman は、Porges 2011 が挙げる五つの前提（①徐脈と RSA は迷走神経の別の枝が担う ②定位の徐脈は爬虫類の脳の名残で背側運動核が担う ③疑核による迷走神経の引き下げは哺乳類の適応 ④疑核は顔と頭の筋と内臓を一緒に調節する ⑤情動は顔の表情と迷走神経の調節の変化で定義される）を、どれも支持できないか、ありそうにないと結論する。とくに「腹側の迷走神経域は哺乳類に固有」「爬虫類は迷走神経の力が弱い」「社会的な行動は哺乳類に固有」の三点を、魚・肺魚・両生類・爬虫類・鳥の比較生物学で退ける。
   - [研究の一線] Porges 2026（§6）はこれに反論している。決着していない。
   - [Claude の読み替え] 批判が当たっているのは、生理と進化の筋書き（どの神経核が何をするか、何が哺乳類に固有か）。「脅威が取り除かれたことと、安全だと感じることは別」という心理の側の区別そのものには、Grossman は直接は触れていない。脚注 3 では、安全を調節する仕組みという考えは Bowlby の愛着理論が先にもっていた、と書く。区別は Porges の生理に頼らなくても、愛着理論の側に立っている、と読める。
5. **pjdhiro の見立てとの関係**: 「山岸は爬虫類のこと言ってないかな」の「爬虫類」は、Porges の筋書きの語彙で、批判側はまさにそこを突いている（「爬虫類は社会的でない・腹側迷走をもたない」は比較生物学と合わない）。だから「爬虫類」を、生存の側を指す名前として使うと、反証されつつある進化の物語ごと持ち込むことになる。重なるのは、生存の側と信頼の側を分けて見る構え。重ならないのは、その分け目を系統発生（爬虫類か哺乳類か）に置くところ。

## 5. Grossman & Taylor (2007)・Neuhuber & Berthoud (2022)

1. **書誌**:
   - Grossman, P., & Taylor, E. W. (2007). Toward understanding respiratory sinus arrhythmia: Relations to cardiac vagal tone, evolution and biobehavioral functions. *Biological Psychology*, 74(2), 263–285. DOI 10.1016/j.biopsycho.2005.11.014。Crossref・Semantic Scholar・PubMed（17081672）で一致。
   - Neuhuber, W. L., & Berthoud, H.-R. (2022). Functional anatomy of the vagus system: How does the polyvagal theory comply? *Biological Psychology*, 174, 108425. DOI 10.1016/j.biopsycho.2022.108425。Crossref・Semantic Scholar・PubMed（36100134）で一致。PubMed に正誤表あり（*Biol Psychol* 179:108554, 2023）。
2. **照合の状態**: どちらも `要旨照合済`（PubMed efetch）。本文は未取得。2007 は Unpaywall・Semantic Scholar とも closed。2022 は Unpaywall が LSU の機関リポジトリ（`repository.lsu.edu/pbrc_basic_science_pubs/241`）を示すが、ページにダウンロードの実体が見つからなかった。
3. **鍵の文**:
   - 2007 要旨: "We present evidence that the polyvagal theory does not accurately depict evolution of vagal control of heart-rate variability"
   - 2022 要旨: 要旨は迷走神経の解剖の総説の紹介に留まり、Porges への判定の文は要旨には無い（本文未照合）。
4. **読み**:
   - [研究の一線] 進化の描き方（魚の心肺同期から哺乳類の RSA まで機能はつながっている）への批判は 2007 から続いている。
   - [教科書] RSA は心臓の迷走神経の働きの近似の指標で、呼吸や身体活動の影響を受ける（2007 要旨の 1〜5 の注意点）。
5. **pjdhiro の見立てとの関係**: 「二軸」の区別より、二軸を体のどこで測るか（RSA で測れるか）の話。pd の問いには遠い。Neuhuber & Berthoud の判定は本文を読まないと書けない。

## 6. Porges (2026) — Grossman らへの反論

1. **書誌**: Porges, S. W. (2026). When a critique becomes untenable: A scholarly response to Grossman et al.'s evaluation of Polyvagal Theory. *Clinical Neuropsychiatry*, 23(1), 113–128. DOI 10.36131/cnfioritieditore20260111。Europe PMC（PMC12937496・PMID 41768026・CC BY-NC-SA）の XML で巻号ページを確認。Crossref は未照合。
2. **照合の状態**: `本文照合済`（Europe PMC の全文 XML。要旨と爬虫類に触れる箇所のみ読んだ）。`porges-PMC12937496.xml`。
3. **鍵の文**（爬虫類に触れる箇所）: "Affiliative or social behaviors observed in birds, reptiles, or fish may be analogous to mammalian social engagement at the behavioral level while relying on different autonomic substrates"
4. **読み**:
   - [研究の一線] Grossman ら（2026、同じ号）がより大人数で批判を出し、Porges が同じ号で反論している。Porges は、爬虫類にも社会的な行動があることは認め、それが哺乳類と同じ自律神経の基盤によるかは別、と応じる。
   - [Claude の読み替え] 反論の後の Porges も、「爬虫類は社会的でない」とは言わなくなっている。「爬虫類＝生存だけの側」という読みは、Porges 本人の最新の書き方からも外れる。
5. **pjdhiro の見立てとの関係**: 論争が 2026 年まで続いていることの確認。pd が借りるなら、生理と進化の主張には寄りかからず、「脅威が無いことと安全の合図があることは別」という区別だけを借りる（develop の SURVEY-00 §5.1 の Claude の読み替えと同じ線）。

## 7. Cesario, Johnson & Eisthen (2020) — 「脳の中の小さな爬虫類」

1. **書誌**: Cesario, J., Johnson, D. J., & Eisthen, H. L. (2020). Your brain is not an onion with a tiny reptile inside. *Current Directions in Psychological Science*, 29(3), 255–260. DOI 10.1177/0963721420917687。Crossref と Semantic Scholar（GREEN OA・PsyArXiv 10.31234/osf.io/x83dq）で一致。
2. **照合の状態**: `要旨照合済`（Semantic Scholar の要旨）。本文（PsyArXiv）は未取得。
3. **鍵の文**（要旨）: "This belief, although widely shared in introductory psychology textbooks, has long been discredited among neurobiologists"（古い脳の上に新しい脳が足された、という見方は入門教科書に広いが、神経生物学では長く退けられている）
4. **読み**:
   - [教科書]（神経系の進化の研究の側では）脳は古い層の上に新しい層を足していく玉ねぎではない。MacLean の三位一体脳は、心理学の入門書に残っている誤り、とされる。
   - [Claude の読み替え] 「爬虫類の脳」は、比喩としては通じても、神経の構造の主張としては使えない。pd が書くときは、比喩であることを明示するか、別の語（生存の信号）で書く。
5. **pjdhiro の見立てとの関係**: 「爬虫類」という言い方の出所（MacLean → Porges・Cook-Greuter）と、その語に付いている問題の確認。生存の側を指す像として本人が使う分には、比喩として通る。ただ、ページで研究の言葉として出すときは、この批判を添える必要がある。

## 8. 山岸俊男 (1999)『安心社会から信頼社会へ — 日本型システムの行方』

1. **書誌**: 山岸俊男 (1999)『安心社会から信頼社会へ — 日本型システムの行方』中央公論新社（中公新書 1479）、v, 253p、18cm。ISBN 4-12-101479-0（ISBN-13 978-4-12-101479-5）。CiNii Books（NCID BA41878530・v, 253p・1999）・国立国会図書館サーチ（JPNO 99114680・1999.6・中公新書 1479）・中央公論新社の書籍ページ（初版 1999-06-25）で一致。出版社のページは「272 ページ」と書く（本文 253p＋前付けの違いと読める。食い違いとして記録）。
2. **照合の状態**: `未照合`。書誌と出版社の紹介文だけを照合。目次は CiNii・NDL・出版社のページのどれにも無かった。本文の内容は §9（同じ定義を引く 2003 年の共著論文）と、山口一男の追悼文（RIETI 2018、二次資料）でしか確かめていない。
3. **鍵の文**: 出版社の紹介文「社会心理学の実験手法と進化ゲーム理論を併用し」（中央公論新社の書籍ページ）。紹介文に「生物」「脳」「爬虫類」「本能」の語は無い。
4. **読み**:
   - [Claude の読み替え・本文未照合] 山岸の「進化」は、進化ゲーム理論（人が社会の仕組みにどう適応するかを、利得と戦略で書く理論）の進化で、脳の系統発生の進化ではない。紹介文の筋は、閉じた集団の「安心」が崩れたあとに、開かれた社会への適応の道具として「社会的知性」（相手の信頼性を見分ける力）を育てる、というもの。
   - 二次資料のみ（RIETI・山口一男 2018 の追悼文）: 「安心社会」は市場取引について長期的に利害を共有する関係に基礎を置く社会、「信頼社会」は短期的な関係の他人でもその信頼性を見極める知性をもつので、他人と信頼関係を結べる人が多い社会、と要約される。同文に「爬虫類」「生物」の語は無い。
5. **pjdhiro の見立てとの関係**: 「山岸は爬虫類のこと言ってないかな」への答えは、照合できた範囲では「言っていない」。山岸の「安心」は、相手の意図を読まなくて済む**社会の仕組み**（関係の固定・相互監視・担保）の側の語で、脳や生物の側の語ではない。ただし本文は未照合なので、1999 年の本の中に生物の比喩が一か所も無いとまでは言えない。重なるところは §12 の表に置く。[Claude の読み替え]（critic round 1 で併記）上の「言っていない」は、本人の問いを「爬虫類」という語があるかどうかの判定に置き換えて、反する形で切っている（台帳の型 G）。本人の問いは、山岸の「安心」が生存の側（爬虫類の像で指していたもの）を指していないか、とも読める。その読みに対しては、二つのことを同じ重さで書く。一つは、照合できた範囲の山岸の文に爬虫類・脳・生物の語は無いこと。もう一つは、山岸の安心（関係を固定して不確かさを消す）を生存の側に読む対応は、Maslow の安全の欲求（予測できる秩序・慣れたもの・保証された仕事、§12）を通すと成り立つこと。どちらの読みで問われたかは pjdhiro に仰ぐ。

## 9. 山岸 (1998) の定義 — 寺井・森田・山岸 (2003) から

1. **書誌**: 寺井滋・森田康裕・山岸俊男 (2003)「信頼と継続的関係における安心：リアルタイム依存度選択型囚人のジレンマゲームを用いた実験研究」『社会心理学研究』18(3), 172–179。DOI 10.14966/jssp.KJ00004224827。J-STAGE の書誌ページと PDF の冒頭（巻号・172-179）で一致。英題 "Trust and assurance of cooperation in ongoing relations: An experimental study using the prisoner's dilemma with variable dependence"。
2. **照合の状態**: `本文照合済`（2003 論文）。J-STAGE の PDF（`terai-morita-yamagishi-2003-trust-assurance.pdf`）。中で引かれる 山岸 (1998)『信頼の構造 — こころと社会の進化ゲーム』（東京大学出版会）の定義は `二次資料のみ`（寺井ら 2003 の紹介。1998 の本の原ページは未照合）。山岸本人が共著者なので、定義の言い換えとしては信頼できる。
3. **鍵の文**（p.173、2003 論文の地の文。山岸 1998 の定義の紹介）:
   - 「信頼」も「安心」も「相手は自分を裏切らないという期待」である点では同じだが、その期待の根拠が異なる。
   - 「相手に裏切りの誘因の存在しない場合の、相手の協力行動に対する期待」を「安心」と定義し、「相手に裏切りの誘因が存在する場合の、相手の協力行動に対する期待」を「信頼」と定義した。
   - p.177（考察）: 参加者の多くは「継続的関係によって提供されていた安心と相手の人間性の判断に基づく信頼を区別していなかった可能性が強い」。
4. **読み**:
   - [研究の一線]（山岸とその共同研究者の区別。分野で標準と言えるかは確かめていないので、critic round 1 で「標準」「[教科書]」を改めた）安心＝裏切る誘因が仕組みの側で消えている状況での期待。信頼＝裏切る誘因が残る状況で、相手の人間性（意図）を見込む期待。どちらも期待で、根拠が違う。
   - [研究の一線] 実験では、安心の状況で協力し合った相手を、誘因が戻った最後の取引でも多くの人が信頼し、半数ほどが裏切られた。人は安心と信頼を区別しにくい、という結果。
   - [Claude の読み替え] 山岸の安心は「不確かさを仕組みで消す」こと。不確かさ（裏切りの可能性）が残るところでしか、信頼は働かない。心理的安全性の定義（対人のリスクを取っても安全）は、リスクが残っている場で働くものなので、山岸の語で言えば「信頼」の側の構造をもつ。罰しない制度を整えて不確かさを消そうとする手当ては、山岸の語では「安心」の側になる。
5. **pjdhiro の見立てとの関係**: 「安心のことを差してないかな」と重なる。山岸の語で読むと、現場で縮んだ心理的安全性（罰されない仕組み・宣言）は「安心」の側、Edmondson の原典の土台（信頼と尊重）は「信頼」の側。2003 の実験結果（安心と信頼は取り違えられやすい）は、二つが同じ「心理的安全性」の名で呼ばれてしまう理由の一つとして読める（Claude の読み替え・この対応を示した研究には当たっていない）。

## 10. 小杉・山岸 (1998) — 信頼する人のほうが、裏切りの兆しに敏感

1. **書誌**: 小杉素子・山岸俊男 (1998)「一般的信頼と信頼性判断」『心理学研究』69(5), 349–357。英題 "General trust and judgments of trustworthiness"。J-STAGE の PDF の冒頭（Vol.69 No.5, 349-357）で一致。DOI は J-STAGE の URL（`jjpsy1926/69/5/69_5_349`）から確認、Crossref は未照合。
2. **照合の状態**: `本文照合済`（英文要旨と本文の冒頭）。J-STAGE の PDF（`kosugi-yamagishi-1998-general-trust.pdf`）。
3. **鍵の文**（p.349 英文要旨）: "Two experiments of this paper further demonstrated that trustful people are more sensitive to information that indicates lack of trustworthiness in other people."
4. **読み**:
   - [研究の一線] 一般的信頼の高い人は、情報がないときは相手を信頼すると予測し、否定的な情報が出ると、低い人より大きく予測を下げる。信頼する人は騙されやすい、という常識と逆の結果。英語の続く論文 Yamagishi, Kikuchi & Kosugi (1999) *Asian Journal of Social Psychology* 2:145–161 は本文未照合（二次資料のみ：検索の要約）。
   - [Claude の読み替え] 山岸の「信頼は社会的知性」は、信頼は、警戒を解くことより、相手を見分ける働きを開いたまま保つことに近い、という見方。Porges の語で言えば、脅威の検出（neuroception）を続けたまま、安全の合図と脅威の合図の両方を読んでいる状態に近い。
5. **pjdhiro の見立てとの関係**: 信頼の側は「無防備」ではない、という点で、「保身や日和見型の精神で求める安心・安全」と向きが逆になる。保身の安心は、見分ける働きを閉じても済む状態を求める（山岸の語の「安心」）。信頼は、見分ける働きを開いたまま関わる。SURVEY-03（防衛）とつながる点。

## 11. Yamagishi & Yamagishi (1994) "Trust and commitment in the United States and Japan"

1. **書誌**: Yamagishi, T., & Yamagishi, M. (1994). Trust and commitment in the United States and Japan. *Motivation and Emotion*, 18(2), 129–166. DOI 10.1007/BF02249397。Crossref と Semantic Scholar で一致。
2. **照合の状態**: `二次資料のみ`（検索結果の要約に引かれた要旨の文）。Springer はログインへ 303、Unpaywall・Semantic Scholar とも closed、WebSearch で PDF は見つからなかった。
3. **鍵の文**（二次経由・原文の要旨と推定されるが未照合）: "A distinction is proposed between trust as a cognitive bias in the evaluation of incomplete information about the (potential) interaction partner and assurance as a perception of the incentive structure that leads the interaction partner to act"
4. **読み**: [研究の一線]（1994 の本文は未照合で、要旨の文も二次資料のみ。critic round 1 で [教科書] から改めた）trust（不完全な情報のもとで相手を評価する）と assurance（相手を協力させる誘因の構造の知覚）の区別の英語の出所。日本は閉じた関係（コミットメント）による assurance が多く、一般的信頼は米国のほうが高い、という調査。
5. **pjdhiro の見立てとの関係**: §9 と同じ。英語の assurance は「保証」で、日本語の日常語の「安心」（落ち着き）の響きは無い。英語圏の心理的安全性の議論と山岸の語を並べるときは、assurance の語で並べたほうがずれが少ない。

## 12. Maslow (1943) "A theory of human motivation"

1. **書誌**: Maslow, A. H. (1943). A theory of human motivation. *Psychological Review*, 50(4), 370–396. DOI 10.1037/h0054346。Crossref と Semantic Scholar で一致。
2. **照合の状態**: `本文照合済`。York University の Classics in the History of Psychology（`http://psychclassics.yorku.ca/Maslow/motivation.htm`）の HTML。原典のページ番号が [p. NNN] で埋め込まれている。`maslow-1943-motivation.html`／`.txt`。
3. **鍵の文**:
   - p.376: "If the physiological needs are relatively well gratified, there then emerges a new set of needs, which we may categorize roughly as the safety needs."
   - p.377: "Another indication of the child's need for safety is his preference for some kind of undisrupted routine or rhythm. He seems to want a predictable, orderly world."
   - p.379: "the very common preference for familiar rather than unfamiliar things, or for the known rather than the unknown."（同じ段に、身分の保証された仕事・貯金・保険への好み）
   - p.380–381: "If both the physiological and the safety needs are fairly well gratified, then there will emerge the love and affection and belongingness needs"
   - p.386（階層の固定性への留保）: "We have spoken so far as if this hierarchy were a fixed order but actually it is not nearly as rigid as we may have implied."
   - p.388–389: 満たされ方は全部か無かでなく、平均的な人で生理 85%・安全 70%・愛 50%・承認 40%・自己実現 10% のように同時に部分的に満たされている、と例示し、新しい欲求は "a gradual emergence by slow degrees from nothingness" と書く。
4. **読み**:
   - [教科書] 安全の欲求は生理の次、所属と愛の欲求の前に置かれ、別の層とされる。
   - [教科書] Maslow 自身が、階層は固定した順序ではない（自尊が愛より先に来る人など例外の列挙）、満たされ方は部分的で同時、と 1943 の原文で書いている。
   - [Claude の読み替え] Maslow の安全の欲求には、身の危険からの保護だけでなく、「予測できる秩序だった世界」「慣れたものへの好み」「保証された仕事」が入る（p.377・p.379）。これは山岸の「安心」（関係を固定して不確かさを消す）とよく重なる。山岸の安心を「生存の側」に置く読みは、Porges の語（爬虫類・背側迷走）ではなく、Maslow の語（安全の欲求）を通すと成り立つ。
5. **pjdhiro の見立てとの関係**: 「いつの間にか低次欲求だけをケアしてる」はこの語彙。重なるのは、罰されない仕組みや制度は安全の欲求（予測できる・身の危険が無い）を手当てし、所属と愛の欲求（信頼・尊重）は別の層として残る、という点。重ならないのは、Maslow 自身が層を固定せず、同時に部分的に満たされるものとして書いている点。「低次だけ」と言うときも、低次を満たせば高次が順に現れる、とは Maslow 自身も言い切っていない。

## 13. Edmondson (1999) p.354 — 比べる側の確認

1. **書誌**: Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. *Administrative Science Quarterly*, 44(2), 350–383。書誌の照合は SURVEY-01 と develop の SURVEY-00 §1 に任せる。
2. **照合の状態**: `本文照合済`（前セッションで取得済みの `edmondson-1999-psychological-safety-learning.pdf` のテキスト `edmondson-1999.txt` で p.354 を見直した）。
3. **鍵の文**（p.354）:
   - "a sense of confidence that the team will not embarrass, reject, or punish someone for speaking up. This confidence stems from mutual respect and trust among team members."
   - "Team psychological safety involves but goes beyond interpersonal trust; it describes a team climate characterized by interpersonal trust and mutual respect in which people are comfortable being themselves."
4. **読み**:
   - [教科書] 心理的安全性は、恥をかかせない・拒まない・罰しない、という確信で、その確信は尊重と信頼から来る。信頼を含み、それを超える。
   - [Claude の読み替え] 三つの動詞は、Maslow の層に散らばっている。punish（罰する）は安全の欲求、reject（拒む）は所属と愛の欲求、embarrass（恥をかかせる）は承認の欲求に近い。原典の定義は、はじめから一つの層に収まっていない。そして確信の出どころを「尊重と信頼」に置くので、根は信頼の側にある。
5. **pjdhiro の見立てとの関係**: 「心理的に安全であって、生物的に安全ではない」と重なる。原典は、罰されない（生存の側に近い）ことを含みながら、確信の根を信頼と尊重に置いている。縮んだ読みは、三つの動詞のうち punish だけを残し、根の側（信頼と尊重）を落としたもの、と読める（develop の SURVEY-00 §2 の注意＝縮んだ読みと言えるのは、信頼・尊重・自分らしさを落とした場合に限る、と同じ線）。

## 14. pd の中の二軸 — 定義の文（パスつき）

- awareness-space `README.md` 26 行: 「意識体験が生存（脅威・安全・地位・資源）と信頼（愛着・所属・間主観性）の少なくとも二方向でズレや欠損を評価しているのではないか」「信頼軸の問題を生存軸の達成で解こうとする誤適用が、多くの苦しみの核心ではないか」。同 34–35 行の用語表は信頼軸に「信頼」を足して「愛着・所属・信頼・間主観性」。
- awareness-space `knowledge/survival-trust-axis-starting-memo.md` 21 行: 「生存軸であり、生存、脅威、安全、身体的・社会的な危険回避に関わる」。`evidence/PROJECT.md` 28 行は生存軸に「保身」を含める。
- awareness-space `knowledge/concepts/CN-006_trust-analysis-axes.md` §3.4: 時間軸（期待的・信頼的）・内容軸は生存-信頼軸と「直交」。生存軸にも信頼的状態があり（物理法則への信頼）、信頼軸にも期待的状態がある。§3.6（2026-11-06）: 山岸の「安心」を生存軸の側、日常語の「安心」を信頼軸の側に置く表。
- pd `reader/love-driven-dev.html` 章「人は何で世界を切り取っているか — 生存と信頼の信号」（920 行付近）: 「生き延びられるかどうか（生存）と、つながっていられるかどうか（信頼）です。生存の側は脅威・安全・地位・資源を、信頼の側は愛着・所属・信頼・間主観性を見ています」。

注意: pd の定義では「安全」は生存の側の語として置かれている。Porges の safety（§1）は信頼の側に重みがあるので、同じ「安全」の語が pd と Porges で逆の側を指す。

### 並べた表（溶接しない。重なりとずれだけ）

各セルは **[Claude の読み替え]**。一つの図にまとめず、行ごとに pd の二軸との関係だけを書く。

| 出典の対 | pd の生存の信号と重なるところ | pd の信頼の信号と重なるところ | 重ならないところ |
|---|---|---|---|
| Porges：脅威が取り除かれたこと／安全の合図があること | 脅威の取り除き、交感神経の動員と背側迷走の不動（脅威への反応の側）[Claude の読み替え] | 安全の合図・社会的関与・信頼できる他者と近くにいることで安全だと感じる（Porges の「safety」はこちらに重み）[Claude の読み替え] | Porges は「安全」の語を信頼の側に置く。pd は「安全」を生存の側に置く。また Porges では二つは混ざった状態（遊び・親密さ）をつくり、二本の直交する軸ではない。生存の側を系統発生（爬虫類）に重ねる点は批判されている [Claude の読み替え] |
| 山岸：安心／信頼 | 安心＝裏切る誘因を仕組みで消し、相手の意図を読まずに済む。不確かさを消す点で、生存の側の「脅威・安全」に寄る [Claude の読み替え] | 信頼＝裏切りの可能性が残るところで相手の人間性を見込む。社会的知性で見分け続ける [Claude の読み替え] | 山岸の安心は社会の仕組み（関係の固定・監視・担保）の語で、体に湧く信号の語ではない。爬虫類・脳の話はしていない（照合できた範囲）。また山岸の安心は閉じた関係の内側の「所属」を前提にするので、pd の信頼の側の「所属」とも重なる。一つの側に収まらない [Claude の読み替え] |
| Edmondson：罰されない／信頼・尊重・自分らしくいられる | punish（罰されない）。罰しない仕組み・宣言・制度として縮んだ読み [Claude の読み替え] | reject（拒まれない）・embarrass（恥をかかされない）、確信の根としての信頼と尊重、自分らしくいられる空気 [Claude の読み替え] | Edmondson は二つを一つの確信として書き、根を信頼と尊重に置く。分けて書いているのは Claude の側。対人のリスクが残る場で働くので、山岸の語では信頼の構造をもつ [Claude の読み替え] |
| Maslow：安全の欲求／所属と愛の欲求 | 安全の欲求＝身の危険からの保護、予測できる秩序、慣れたもの、保証された仕事 [Claude の読み替え] | 所属と愛の欲求＝集団の中の居場所、愛情のある関係 [Claude の読み替え] | Maslow は層を固定せず、同時に部分的に満たされると書く。承認の欲求（embarrass に近い）は pd の二軸のどちらにも置き場が決まっていない。pd の生存の側にある「地位」は Maslow では承認の欲求で、安全の欲求ではない [Claude の読み替え] |
| Schein：生存の不安（survival anxiety）／学ぶ不安（learning anxiety） | 生存の不安＝変わらなければ生き延び栄えられないという不快な気づき（1995 p.5）。失う怖さ・恥・罪悪感（p.24 の図表） [Claude の読み替え] | 心理的安全＝学ぶ不安を下げる手当てで、身分の同一性・能力感・自尊を守り、友好的で支えになる励ましを伴う（1995 p.7） [Claude の読み替え] | Schein の対はどちらも「不安」で、信頼の側の肯定の信号は対の中に無い。生存の不安は学習を起こすのに要るものとして置かれ、下げる対象になっていない（SURVEY-01 §4・critic round 1 の INFO で足した行） [Claude の読み替え] |

## 15. 発見（pjdhiro の見立てに触れたもの）

1. **山岸は爬虫類のことを言っていない（照合できた範囲）。** 山岸の「安心」は、裏切る誘因を仕組みで消した状況での期待（寺井・森田・山岸 2003 p.173 が引く山岸 1998 の定義）で、社会の仕組みの語。山岸の「進化」は進化ゲーム理論の進化で、脳の系統発生ではない（出版社の紹介文）。「爬虫類」の語の出所は MacLean → Porges（1995 要旨・2003 要旨）と Cook-Greuter で、そこには Grossman 2023 と Cesario ら 2020 の強い批判がある。ただし、山岸の安心を「生存の側」に読むこと自体は、Maslow の安全の欲求（予測できる秩序・慣れたもの・保証された仕事 p.377・p.379）を通すと成り立つ。山岸 1999 の本文は未照合で、仰ぐこと 3 の判断材料はここまで。[Claude の読み替え]（critic round 1 で併記）見出しの「言っていない」は語の有無の判定で、本人の問いを反する形で切っている。語は無い（照合できた範囲）こと、安心を生存の側に読む対応は Maslow を通すと成り立つこと、の二つを同じ重さで置く（§8 の 5）。
2. **Porges 自身が「脅威の取り除き」と「安全の感じ」を別のものとし、取り除けば足りるという暗黙の想定を批判している（2022 p.2・p.9）。** これは「いつの間にか低次欲求だけをケアしてる」と同じ形の指摘。しかも Porges の「safety」は、安全の合図（信頼できる他者の声・表情・近さ）の側に重みがあり、pd の語では信頼の信号に近い。「安全」の語は、Porges では信頼の側、pd と Maslow では生存の側、山岸の「安心」は仕組みの側、日常語の「安心」は落ち着きの側を指し、同じ漢字が別々の側を指している。心理的安全性が曖昧になる理由の一つは、ここにあるかもしれない（Claude の読み替え）。
3. **区別は残るが、切り離されていない。** Porges の混ざった状態（遊び＝交感神経を腹側迷走が包む、親密さ＝背側迷走を腹側迷走が包む、2021 §5）、寺井・森田・山岸 2003 の「人は安心と信頼を区別していなかった可能性が強い」（p.177）、Edmondson 1999 の一つの確信の中の三つの動詞（p.354）、Maslow の同時に部分的に満たされる層（p.386・p.389）は、どれも二つの側が分けて名指せるのに、一人の中・一つの場で入り込み合って働くことを示している。「二軸がある」は確かめられるが、「心理的安全性はどちらか一方を指す」とは、原典のどれも書いていない。ただし、この節で照合した心理的安全性の文献は Edmondson 1999 だけで、範囲を絞ると「Edmondson 1999 の定義は一方だけを指していない」までになる（critic round 1）。後の文献には片側に寄るものがある。Edmondson 2018 p.15 の定義は罰を受けないことの言い方に重心が寄り、スポーツの Vella ら 2022 は「心理的な害から守られる」、Bean ら 2020 は「身体的に害されない」ことを定義に入れる（いずれも Taylor ら 2022 の二次。SURVEY-01 §10c・§11）。

## 書誌の表

| 著者・年 | 題 | DOI | 照合の状態 | 保存先（`.cache/raw/psychological-safety/`） |
|---|---|---|---|---|
| Porges 2022 | Polyvagal Theory: A Science of Safety | 10.3389/fnint.2022.871227 | 本文照合済 | `porges-2022-science-of-safety.pdf`（`.txt`・`p22.txt`） |
| Porges 2021 | Polyvagal Theory: A biobehavioral journey to sociality | 10.1016/j.cpnec.2021.100069 | 本文照合済（XML） | `porges-PMC9216697.xml`／`.txt` |
| Porges 2026 | When a critique becomes untenable | 10.36131/cnfioritieditore20260111 | 本文照合済（一部・XML） | `porges-PMC12937496.xml`／`.txt` |
| Porges 1995 | Orienting in a defensive world … A Polyvagal Theory | 10.1111/j.1469-8986.1995.tb01213.x | 要旨照合済 | なし |
| Porges 2003 | The Polyvagal Theory: phylogenetic contributions to social behavior | 10.1016/S0031-9384(03)00156-2 | 要旨照合済 | なし |
| Porges 2011 | The Polyvagal Theory（書籍、Norton、ISBN 978-0-393-70700-7） | — | 二次資料のみ（pd `knowledge/research/awareness-model/C2-porges.md`・Grossman 2023 の引用） | なし |
| Grossman 2023 | Fundamental challenges and likely refutations of the five basic premises of the polyvagal theory | 10.1016/j.biopsycho.2023.108589 | 本文照合済（プレプリント版・ページはプレプリント） | `grossman-2023-five-premises.pdf`／`.txt` |
| Grossman & Taylor 2007 | Toward understanding respiratory sinus arrhythmia … | 10.1016/j.biopsycho.2005.11.014 | 要旨照合済 | なし |
| Neuhuber & Berthoud 2022 | Functional anatomy of the vagus system: How does the polyvagal theory comply? | 10.1016/j.biopsycho.2022.108425 | 要旨照合済（判定は要旨に無し） | なし |
| Cesario, Johnson & Eisthen 2020 | Your brain is not an onion with a tiny reptile inside | 10.1177/0963721420917687 | 要旨照合済 | なし |
| 山岸 1999 | 安心社会から信頼社会へ（中公新書 1479） | ISBN 4-12-101479-0 | 未照合（書誌と出版社の紹介文のみ） | なし |
| 山岸 1998 | 信頼の構造 — こころと社会の進化ゲーム（東京大学出版会） | — | 二次資料のみ（寺井ら 2003 p.173 の紹介） | なし |
| 寺井・森田・山岸 2003 | 信頼と継続的関係における安心 | 10.14966/jssp.KJ00004224827 | 本文照合済 | `terai-morita-yamagishi-2003-trust-assurance.pdf`（`t03.txt`） |
| 小杉・山岸 1998 | 一般的信頼と信頼性判断 | J-STAGE `jjpsy1926/69/5/69_5_349`（Crossref 未照合） | 本文照合済（要旨と冒頭） | `kosugi-yamagishi-1998-general-trust.pdf`（`k98.txt`） |
| Yamagishi & Yamagishi 1994 | Trust and commitment in the United States and Japan | 10.1007/BF02249397 | 二次資料のみ（検索要約の要旨文） | なし |
| Yamagishi, Kikuchi & Kosugi 1999 | Trust, gullibility, and social intelligence | 10.1111/1467-839X.00030（検索結果の URL から。Crossref 未照合） | 二次資料のみ（検索要約） | なし |
| Maslow 1943 | A theory of human motivation | 10.1037/h0054346 | 本文照合済（psychclassics・原典ページ番号つき） | `maslow-1943-motivation.html`／`.txt` |
| Edmondson 1999 | Psychological safety and learning behavior in work teams | （SURVEY-01 に任せる） | 本文照合済（p.354 を再確認） | `edmondson-1999-psychological-safety-learning.pdf`（前セッション） |
| 山口一男 2018 | 山岸俊男の追悼文（RIETI Special Report 097） | — | 二次資料のみ（山岸 1999 の要約として） | なし（`https://www.rieti.go.jp/jp/special/special_report/097.html`） |

## 取れなかったもの（試した経路）

- **山岸 1999 本文**: ①CiNii Books（書誌のみ・目次なし）②国立国会図書館サーチ OpenSearch と書誌ページ（目次なし）③中央公論新社の書籍ページ（紹介文のみ）④Internet Archive の advancedsearch（該当なし）⑤Google Books API（429・日次上限）⑥WebSearch（目次・定義の本文ページは出ない。書評とブログ・追悼文のみ）。次の経路: pjdhiro に手元の本か図書館で、安心と信頼を定義する章のページを確かめてもらう／NDL デジタルコレクションの個人向け送信の対象か確認（未試行）。
- **Yamagishi & Yamagishi 1994 本文**: ①Unpaywall（is_oa false）②Semantic Scholar（CLOSED）③Springer（ログインへ 303、繰り返していない）④WebSearch で PDF（なし）。未試行: 北海道大学の HUSCAP、Hokudai の COE ワーキングペーパー（`lynx.let.hokudai.ac.jp/COE21/workingpaper/`）に山岸の英語の定義文が無いか。
- **Yamagishi, Kikuchi & Kosugi 1999 本文**: WebSearch のみ（Wiley）。未試行: Unpaywall・Semantic Scholar の openAccessPdf・HUSCAP。
- **Porges 1995 本文**: Unpaywall が示す Wiley pdfdirect を 1 回取得（HTML が返った・繰り返していない）。Europe PMC は OA でない。未試行: Porges の個人サイト・CORE。
- **Porges 2003 本文**: Unpaywall・Semantic Scholar とも closed。Europe PMC は OA でない。
- **Grossman & Taylor 2007 本文**: Unpaywall・Semantic Scholar とも closed。
- **Neuhuber & Berthoud 2022 本文**: Unpaywall が示す LSU の機関リポジトリ（ページは開くがダウンロードの実体が見当たらない）。Europe PMC は「Subscription required」。
- **Grossman 2023 掲載版**: Elsevier の OA（CC BY）だが、プレプリントで足りたので取得していない。ページ番号を掲載版で引くときは要取得。
- **Cesario ら 2020 本文**: PsyArXiv（10.31234/osf.io/x83dq）は未試行。
- **Porges 2011 書籍**: 未試行（Internet Archive の貸出の有無を見ていない）。
- **Bowlby 1969 の safety-regulating system の原ページ**: Grossman 2023 脚注 3 の二次経由のみ。

## 次に調べると効くこと

1. 山岸 1999 の本文で、安心と信頼を定義する箇所のページと、生物・本能・脳の比喩が一か所も無いかの確認（pjdhiro の手元の本か図書館）。仰ぐこと 3 の判断はこの照合の後が確か。
2. Bowlby (1969) の safety-regulating system と、愛着理論の「安全基地」（secure base）。Porges の生理に頼らず、「脅威の不在」と「安全の合図」の区別を立てられる出典として。awareness-space CN-006 §5 の群盲象表にすでに Bowlby の行がある。
3. 日本語で「心理的安全性」が「安心して発言できる」と説明されるときの「安心」が、山岸の安心（仕組みで不確かさを消す）と日常語の安心（落ち着き）のどちらに寄るかを、日本語の解説の言い回しで調べる（SURVEY-01 の日本語訳の議論と重なる。例として Newsweek Japan の解説は「安心して発言や行動ができる環境や雰囲気」と書く［二次資料・検索要約］）。
4. 遊び（交感神経＋腹側迷走）と、心理的安全性の研究の「学習行動」（試す・異を唱える・失敗を話す）を直接つないだ研究があるか。今回は当たっていない。
5. awareness-space CN-006 §3.6 の表は、山岸の「安心」を生存軸の側にだけ置いている。本調べでは、山岸の安心は閉じた関係の内側の所属も前提にしていて、一つの側に収まらない（§14 の表）。同じく「日常語の安全＝生存の側」の行も、Porges の safety は信頼の側に重みがあるので、誰の語かを添える必要がある。直すかどうかは pjdhiro に仰ぐ（本ファイルからは CN-006 を編集していない）。
