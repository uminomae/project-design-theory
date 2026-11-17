# SURVEY-03a 集団・場の側の「共感と呼ばれるようなもの」を、原典の本文で照らす

## 状態

- 日付：2026-11-17。worktree `hopeful-kalam-27fe94`。Issue #170「共感と呼ばれてきた現象を、創造の五段階（場・波・縁・渦・束）の面ごとに並べる」の材料集め。司令塔のセッションからの依頼。
- 問い：一人と一人の間を越えた、集団・場の側で「共感」に近い語で呼ばれてきたもの（群衆の中の伝染・集まりの沸騰・集団の中の情動伝染・集団の境で共感が偏ること）を、原典が何と書いているか。五段階のどの面に置くかは頼む側が決める。ここでは原典の文と要旨だけを集める。
- やり方：`scripts/find-source.sh` の `find` で置き場を引き（台帳は本体の `.cache/raw/find-ledger.md` に追記）、`fetch` で取って書誌と突き合わせ、本文を読んだ。古い本は Internet Archive の全文の文字・図書館の OCR で読んだ。原典のファイルは本体の `.cache/raw/empathy170/` に置き、repo には入れていない。
- 頁：誌面・本の頁があるものはその頁。著者稿で誌面の頁が無いものは、稿の下に印刷された頁を「稿の頁」として書き、PDF の頁を添える。
- 鍵の文は原文のまま（OCR の行末の分かち書きは直した）、40 語ほどまで。
- すでに照合済みで読み直さなかったもの：Hatfield ら 1993・Chartrand & Bargh 1999・Singer & Klimecki 2014・Preston & de Waal 2002 ほか（`SURVEY-02-psychology.md`）。Durkheim 1912 の沸騰の所（pp.295・301・312–313・315）は `ks/docs/research/105-connection-stability-beyond-attachment.md` §14 で照合済み。今回は別の写し（1912 年の初版の図書館の走査）で同じ頁を確かめ、象徴に残る所（pp.329–331）と集まりの所（pp.308–309）を足した。
- Unpaywall・CORE は、連絡先のメールとキーが無いので飛ばした（find-source の表のとおり）。

## 一覧

| 原典 | 照合の状態 | 写し | 効く語 |
|---|---|---|---|
| Le Bon 1895（第 11 版 1907 で読んだ） | 本文照合済（パブリックドメイン。大学図書館の走査） | Internet Archive の University of Leeds Library の走査（Wellcome Library・Jisc の事業） | âme collective・unité mentale・contagion・suggestibilité・personnalité consciente s'évanouit |
| Durkheim 1912 | 本文照合済（パブリックドメイン。国立図書館の走査） | Bayerische Staatsbibliothek（MDZ）の 1912 年 Alcan 版の走査と OCR。UQAC の Classiques des sciences sociales の電子版（PUF 1968 から）の Wayback の記録で文を突き合わせた | effervescence・électricité・faire écho・communion・à l'unisson・sans symboles … existence précaire |
| Barsade 2002 | 本文照合済（著者稿。2001 年 8 月の再投稿の稿。誌面の版は読めていない） | ペンシルベニア大学の機関リポジトリ（ScholarlyCommons） | emotional contagion・mood convergence・walking mood inductors・ripple effect・no awareness |
| Cikara, Bruneau & Saxe 2011 | 本文照合済（著者稿。査読後の最終稿。CC BY-NC-SA 3.0） | MIT の機関リポジトリ（DSpace@MIT）の PDF の Wayback の記録 | dampened empathic responses・empathic resonance … absent・Schadenfreude・context-dependent |
| Collins 2004 | 未照合（有料・貸出だけ） | 無料で読める著者・大学・出版社の写しは見つからなかった | （読めていない） |

---

## 1. Le Bon (1895) *Psychologie des foules*

- **書誌**：Le Bon, G. (1895). *Psychologie des foules*. Paris: Félix Alcan. DOI なし（本）。Crossref・OpenAlex には近い候補なし（find の結果）。初版の年は、読んだ版の序に「Lorsque sa première édition parut en 1895」とある。読んだ版の表紙は「Onzième édition」、Paris: Alcan、1907（Internet Archive の書誌の年も 1907）。
- **読んだ写し**：Internet Archive `b21523812`（https://archive.org/details/b21523812 ）。University of Leeds Library の蔵書を、Jisc と Wellcome Library の事業（UK Medical Heritage Library）で走査したもの。上げたのは Internet Archive の職員。全文の文字 https://archive.org/download/b21523812/b21523812_djvu.txt で読んだ。Le Bon は 1931 年没で、原文はパブリックドメイン。
- **照合の状態**：本文照合済（パブリックドメイン。大学図書館の走査の OCR。第 11 版 1907 の頁）。
- **読んだ頁**：pp.12・15・18–20（第 1 巻第 1 章）、pp.113–115（第 2 巻第 3 章「Les moyens d'action des meneurs」の contagion の節）。頁は OCR の柱の数字で決めた。p.12 の柱は OCR が「42」と読み崩しているが、前後（10・13・14）の並びから p.12。
- **鍵の文**：
  - 心理学の意味の群衆（p.12）：「La personnalité consciente s'évanouit, les sentiments et les idées de toutes les unités sont orientés dans une même direction. Il se forme une âme collective, transitoire sans doute」
  - 一つの存在（p.12）：「Elle forme un seul être et se trouve soumise à la loi de l'unité mentale des foules.」
  - 集まるだけでは足りない（p.12）：「Mille individus accidentellement réunis sur une place publique sans aucun but déterminé, ne constituent nullement une foule au point de vue psychologique.」
  - 一人では感じない仕方で感じる（p.15）：「ils possèdent une sorte d'âme collective qui les fait sentir, penser, et agir d'une façon tout à fait différente de celle dont sentirait, penserait et agirait chacun d'eux isolément.」
  - 三つの原因の二つめ（p.18）：「Dans une foule, tout sentiment, tout acte est contagieux, et contagieux à ce point que l'individu sacrifie très facilement son intérêt personnel à l'intérêt collectif.」
  - 伝染は暗示の結果（p.18）：「Je veux parler de la suggestibilité, dont la contagion mentionnée plus haut n'est d'ailleurs qu'un effet.」
  - 互いに強め合う（p.19）：「la suggestion étant la même pour tous les individus s'exagère en devenant réciproque.」
  - まとめ（p.20）：「Il n'est plus lui-même, il est devenu un automate que sa volonté ne guide plus.」
  - 伝染の強さ（p.113）：「Dans les foules, les idées, les sentiments, les émotions, les croyances possèdent un pouvoir contagieux aussi intense que celui des microbes.」
  - 離れていても（p.114）：「La contagion n'exige pas la présence simultanée d'individus sur un seul point」
  - 感じ方まで（p.115）：「La contagion est si puissante qu'elle impose aux individus non seulement certaines opinions mais encore certaines façons de sentir.」
- **要旨**：ある条件（何かの刺激・興奮）のもとで集まった人々は、一人ひとりと違う性質をもつ「心理学の群衆」になる。意識した人格が消え、感情と考えが一つの向きにそろい、一時の「集合の魂」ができる。原因は三つ：数による無敵の感じ（責任の感じが消える）、伝染、暗示を受けやすくなること（伝染はその結果）。群衆の中の人は催眠にかかった人に近く、自分の意志で動かない自動人形になる。伝染は、同じ場にいなくても出来事を通じて離れた所へ広がり、意見だけでなく感じ方まで人に課す。
- **共感と呼ばれるものとの関係（Claude の読み）**：Le Bon は共感（sympathie）の語でなく、伝染（contagion）・暗示（suggestion）・催眠（hypnotisme）の語で書く。結果は「感情がそろう」より強く、「意識した人格が消え、一つの存在になる」と書く。人と人の間の写りでなく、群衆という一つのまとまりが新しく生まれる、という置き方。評価は否定的で、群衆の中の人は「文明の段を何段も降りる」（p.20）と書く。19 世紀の催眠の理論と、人種・文明の段の考えに乗った本で、後の研究からの批判は、今回は読んでいない。

## 2. Durkheim (1912) *Les formes élémentaires de la vie religieuse*

- **書誌**：Durkheim, É. (1912). *Les formes élémentaires de la vie religieuse : le système totémique en Australie*. Paris: Félix Alcan. 647 p. DOI なし（本）。Durkheim は 1917 年没で、原文はパブリックドメイン。
- **読んだ写し**：
  - Bayerische Staatsbibliothek（ミュンヘン）の MDZ に置かれた 1912 年の Alcan 版の走査（BSB-ID 991106359659707356・bsb11172007）。IIIF の目録 https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11172007/manifest と、頁ごとの OCR（hOCR）https://api.digitale-sammlungen.de/ocr/bsb11172007/<コマの番号> で読んだ（頁 = コマ − 10）。権利の表示は「No Copyright – Non-Commercial Use Only」。
  - 突き合わせ：Les Classiques des sciences sociales（Université du Québec à Chicoutimi の図書館と組む電子の文庫）の第 2 巻の PDF の Wayback の記録（2023-11-17）https://web.archive.org/web/20231117112730id_/http://classiques.uqac.ca/classiques/Durkheim_emile/formes_vie_religieuse/formes_elementaires_2.pdf 。底本は PUF 1968 年の第 5 版。紙の頁は入っていない。p.308・330 の文が一致することを確かめた。今の classiques.uqac.ca はこの日 502 を返した。
  - 同じ頁付けは、ks の記録 §14 が読んだ Gallica 由来の写し（PUF Quadrige 1990）とも合う（p.313 の「C'est donc dans ces milieux sociaux effervescents …」）。
- **照合の状態**：本文照合済（パブリックドメイン。国立図書館の 1912 年版の走査の OCR）。
- **読んだ頁**：pp.295・299–302・308–309・312–317・329–331（第 2 巻第 7 章）。
- **鍵の文**：
  - 時代の沸騰（p.301）：「Il en résulte une effervescence générale, caractéristique des époques révolutionnaires ou créatrices.」／「l'homme devient autre.」
  - 集まりの電気（p.308）：「Une fois les individus assemblés, il se dégage de leur rapprochement une sorte d'électricité qui les transporte vite à un degré extraordinaire d'exaltation.」
  - こだまし合う（p.308）：「Chaque sentiment exprimé vient retentir, sans résistance, dans toutes ces consciences largement ouvertes aux impressions extérieures ; chacune d'elles fait écho aux autres et réciproquement.」
  - 雪崩のように（p.308）：「L'impulsion initiale va ainsi s'amplifiant à mesure qu'elle se répercute, comme une avalanche grossit à mesure qu'elle avance.」
  - 宗教の考えの出どころ（p.313）：「C'est donc dans ces milieux sociaux effervescents et de cette effervescence même que paraît être née l'idée religieuse.」
  - 意識は閉じている（p.329）：「par elles-mêmes, les consciences individuelles sont fermées les unes aux autres ; elles ne peuvent communiquer qu'au moyen de signes où viennent se traduire leurs états intérieurs.」
  - 交わり＝溶け合い（p.329）：「une communion, c'est-à-dire … une fusion de tous les sentiments particuliers en un sentiment commun」
  - 声を合わせて（pp.329–330）：「C'est l'apparition de cette résultante qui avertit les individus qu'ils sont à l'unisson」／「C'est en poussant un même cri, en prononçant une même parole, en exécutant un même geste concernant un même objet qu'ils se mettent et se sentent d'accord.」
  - 動きのそろいが集団を作る（p.330）：「C'est l'homogénéité de ces mouvements qui donne au groupe le sentiment de soi et qui, par conséquent, le fait être.」
  - 象徴が無ければ消える（p.330）：「sans symboles, les sentiments sociaux ne pourraient avoir qu'une existence précaire. Très forts tant que les hommes sont assemblés et s'influencent réciproquement, ils ne subsistent, quand l'assemblée a pris fin, que sous la forme de souvenirs qui … vont de plus en plus en pâlissant」
  - 散ったあと（p.330）：「les individus se demandent avec stupeur comment ils ont pu se laisser emporter à ce point hors de leur caractère.」
  - 物に刻まれて続く（p.331）：「Mais si les mouvements par lesquels ces sentiments se sont exprimés viennent s'inscrire sur des choses qui durent, ils deviennent eux-mêmes durables.」／「c'est comme si la cause initiale qui les a suscités continuait à agir.」
  - 象徴の二つの働き（p.331）：「l'emblématisme, nécessaire pour permettre à la société de prendre conscience de soi, n'est pas moins indispensable pour assurer la continuité de cette conscience.」
- **要旨**：オーストラリアの社会は、散って暮らす時と、集まる時（コロボリー）を行き来する。集まると、近さから「一種の電気」が生まれ、表された感情はそれぞれの意識の中でこだまし合い、雪崩のように大きくなる。この沸騰の中で、人は自分でなくなり、外の力に運ばれると感じ、そこから聖と俗の二つの世界の考えが生まれた、と Durkheim は書く。一人ひとりの意識は閉じていて、しるし（叫び・言葉・身ぶり）を通してしか通じない。同じ叫び・同じ身ぶりを合わせたとき、人は自分たちが「ユニゾン」にあると気づき、動きのそろいが集団に自分の感じを与える。集まりで強かった感情は、散ったあとは記憶として薄れていくが、その動きが長く続く物（トーテムの紋章）に刻まれると、物がそれを呼び起こし続け、感情も続く。紋章は、社会が自分を意識するのにも、その意識を続けるのにも要る。
- **共感と呼ばれるものとの関係（Claude の読み）**：Durkheim は sympathie や contagion を芯の語にしない（p.314 には、物の感情がその象徴に「contagieusement」に広がる、という使い方はある）。芯は、集まりで感情が響き合い強まる沸騰と、それが一つの共通の感情に溶け合う「communion」。Le Bon と違い、溶け合いは集団が自分を知る道として肯定的に置かれ、新しい考えを生む「創造の時代」とも結ばれる（p.301）。もう一つの所は時間の向き：集まりの感情は散れば薄れ、物（象徴）に刻まれると続く。共感と呼ばれるものが、その場が終わったあと何に残るか、を原典が直に書いている所。

## 3. Barsade (2002) "The ripple effect"

- **書誌**：Barsade, S. G. (2002). The ripple effect: Emotional contagion and its influence on group behavior. *Administrative Science Quarterly*, 47(4), 644–675. DOI 10.2307/3094912（Crossref と一致）。
- **読んだ写し**：ペンシルベニア大学の機関リポジトリ ScholarlyCommons（https://repository.upenn.edu/mgmt_papers/72 ）の PDF。取得先 https://repository.upenn.edu/server/api/core/bitstreams/031164e3-33ca-4d04-8959-a62cfc13ab56/content （OpenAlex の示した `…/download` の URL は案内の HTML を返したので、同じ物の REST の URL で取った）。67 頁。頭の頁に「August 2001」「Revise and Resubmit, ASQ; Comments Welcome」とあり、所属は Yale の School of Management。誌面の版でなく、再投稿の段の著者稿。
- **照合の状態**：本文照合済（著者稿。2001 年 8 月の再投稿の稿。頁は稿の頁）。誌面の版（pp.644–675）は有料で読めていない。この稿には研究 1（94 人の学部生・29 組、仕掛け人つき）と研究 2（113 人の MBA の学生、仕掛け人なし）の二つがある。誌面に両方がそのまま残ったかは確かめていない。
- **読んだ頁**：稿の pp.3–8・15・28–29・36–38・42（PDF pp.2–7・14・27–28・35–37・41）。
- **鍵の文**：
  - 要旨（稿 p.3）：「Emotional contagion, the transfer of emotion between individuals, and its influence on work group dynamics was examined in two managerial simulations」／「group members experienced positive emotional contagion, and this contagion improved cooperation, decreased conflict, and increased perceptions of task performance」
  - 定義（稿 p.6。Schoenewolf 1990: 50 から）：「a process in which a person or group influences the emotions, or behavior of another person or group through the conscious or unconscious induction of emotion states and behavioral attitudes」
  - 意識の側の経路（稿 p.8）：「Emotional contagion has also been shown to occur at a conscious level through social comparison processes in which people look around and compare their affective moods to those of others」
  - 外から内へ（稿 p.8）：「Emotional contagion shows that emotions can also be produced from the outside in」
  - 研究 2 の収斂（稿 p.36）：「the ICC for group pleasant mood at Time 1 is .00 - indicating absolutely no convergence of mood at the start of the experiment. At Time 2, however, after the experiment, the group members' moods converged, raising the ICC to .24」
  - 対の関係でない（稿 p.37）：「it helps to show that mood contagion is a group phenomenon and not due to the dyadic nature of the relationship between the confederate and the group member.」
  - 歩く気分の誘い手（稿 p.38）：「people are "walking mood inductors," continuously influencing the moods and then the judgments and behaviors of others. The process is a subtle one, however, in terms of people's awareness of both its occurrence and its effects」
  - 気づいていない（稿 p.38）：「they then indicated absolutely no awareness of the relationship between the mood they were in and their attributions for their degree of effectiveness in the group discussion.」
  - 波紋（稿 p.42）：「people do not live on emotional islands but, rather, that group members experience moods at work, these moods ripple out」
  - 仮説 2 は支えられず（稿 p.28）：「The absolute values of the positive and negative contagion, or changes, were not significantly different」
- **要旨**：会社の役員の賞与の配分を話し合う集団の実験で、訓練した仕掛け人（役者）が、快・不快 × 強い・弱い の四通りの気分を出した。集団の成員の気分は仕掛け人の快・不快の向きに写り（本人の評定・ビデオの評定者の評定の両方）、快の気分の伝染は、協力を増やし、衝突を減らし、自分の仕事の出来の見積もりを上げた。不快の方がよく写る（仮説 2）は支えられず、強さ（energy）の効きは向きが割れて示唆にとどまった。仕掛け人のいない研究 2 でも、始めに 0 だった集団の気分のそろいが終わりに .24 になった。人は自分の気分が他人から来て、それが判断に効いていることに気づいていなかった。
- **共感と呼ばれるものとの関係（Claude の読み）**：Hatfield らの二人の間の情動伝染を、集団に広げて、そろい（convergence）として測った研究。「共感」の語は使わず、「emotional contagion」「mood convergence」「collective emotion」の語で書く。経路は、無意識の真似とフィードバックと、意識した社会的比較の二つとして並べる（稿 pp.7–8）。集団の気分は、一人の仕掛け人から広がるもの（研究 1）と、集団の中で互いに収斂するもの（研究 2）の二つの形で出てくる。

## 4. Cikara, Bruneau & Saxe (2011) "Us and them"

- **書誌**：Cikara, M., Bruneau, E. G., & Saxe, R. R. (2011). Us and them: Intergroup failures of empathy. *Current Directions in Psychological Science*, 20(3), 149–153. DOI 10.1177/0963721411408713（Crossref と一致）。
- **読んだ写し**：MIT の機関リポジトリ DSpace@MIT（http://hdl.handle.net/1721.1/70034 ）の PDF の Wayback の記録（2024-11-30）https://web.archive.org/web/20241130103321id_/https://dspace.mit.edu/bitstream/handle/1721.1/70034/Saxe-2011-Us%20and%20Them.pdf 。頭紙に「Version: Author's final manuscript: final author's manuscript post peer review, without publisher's formatting or copy editing」「Terms of use: Creative Commons Attribution-Noncommercial-Share Alike 3.0」。20 頁。今の dspace.mit.edu は自動取得にログインの画面を返すと手元の一覧にあったので、取りに行かず Wayback を使った。
- **照合の状態**：本文照合済（著者稿。査読後の最終稿。CC BY-NC-SA 3.0。頁は稿の頁）。
- **読んだ頁**：全部（稿 pp.1–12。PDF pp.1–13）。
- **鍵の文**：
  - 要旨（稿 p.3）：「From this perspective, empathic responses are rare and fragile」／「outgroup members' suffering elicits dampened empathic responses as compared to ingroup members' suffering.」
  - 立てる共感の意味（稿 p.4。Batson 2009 を引いて）：「people recognize emotional experiences in others, experience matched sensations and emotions, and are motivated to alleviate the other's suffering」
  - 自動の見方への問い（稿 pp.5–6）：「Seeing another human being in pain, observers must feel the other's pain.」／「We know, however, that adults with normal empathic capacity also frequently fail to respond to another's suffering.」
  - 境が恣意でも（稿 p.6）：「Empathy is even fragile between minimal groups—groups in which the boundary is arbitrary」
  - 共鳴が消える（稿 p.6。Avenanti ら 2010 の紹介）：「Black and White participants show "empathic resonance" (i.e., sensorimotor contagion …) when watching an ingroup member's hand … being pricked by a pin, but this response is absent when the hand belongs to an outgroup member.」
  - 競争で喜びに（稿 pp.7–8）：「competitive rivals' pain may even elicit pleasure, sometimes referred to as Schadenfreude」
  - 内の共感と外への喜びが並ぶ（稿 p.10）：「Paradoxically, people with the most empathy for members of their ingroup may thus experience the most Schadenfreude toward a threatening outgroup.」
  - 結び（稿 p.12）：「Empathy is, however, a highly flexible, context-dependent response.」
- **要旨**：共感（他人の感じを見て取り、合った感じを経験し、苦しみを和らげたいと動く）は、相手が外集団の人だと弱まり、消え、競争の相手なら他人の不幸を喜ぶ気持ち（シャーデンフロイデ）に置き換わる。人種で分けた集団だけでなく、赤組・青組のような恣意の集団でも起きる。体の共鳴（針で刺される手を見たときの運動の誘発電位）も、外集団の人の手では出ない。内集団への共感が強い人ほど、脅かす外集団への喜びも強いことがある。共感を増やす介入（視点取得・接触）は効くこともあるが、逆に働くこともある。著者は、共感を、状況に強く左右される柔らかい応答と結ぶ。
- **共感と呼ばれるものとの関係（Claude の読み）**：短い総説で、引く実験の多くは他の著者のもの（Avenanti ら 2010・Xu ら 2009・Hein ら 2010 など。どれも今回は原典を読んでいない）。この総説そのものが示すのは、集団の境が、自動と言われる共鳴（「empathic resonance」）まで切る、という見方。内の共感の強さと外への喜びが同じ人の中で並ぶ（稿 p.10）のは、集団の中で共感がそろうことと、集団の外へ向かう敵意が裏表になりうる、という所。

## 取れなかったもの

| 原典 | 試した経路 | 結果 |
|---|---|---|
| Collins, R. (2004). *Interaction Ritual Chains*. Princeton UP. DOI 10.1515/9781400851744（Crossref と一致。種類は edited-book と返る） | (1) find（Crossref・OpenAlex・Semantic Scholar・Internet Archive）(2) Internet Archive の題での検索 (3) cs の台帳の授業用の写し（is.muni.cz）の URL の Wayback の CDX (4) Princeton UP の本の頁の Wayback の記録（試し読みの章の PDF の印を探した）(5) De Gruyter・Project MUSE（OpenAlex の示した出版社の置き場） | Internet Archive は貸出だけ（`interactionritua0000coll`・printdisabled）。is.muni.cz の写しは Wayback に無い（cs の台帳では、今のものは自動取得の確認画面を返す。授業用の写しで、権利は未確認）。Princeton UP の頁に試し読みの PDF の印は見つからなかった。De Gruyter・Project MUSE は有料。本文は未照合。sources §5-6 のとおり有料のものは使わない。同じ著者の読める版として、cs の D18 の記録が Collins (1981) のスペイン語訳（CC BY-NC-ND）を読んでいる（`cs/evidence/evidence-D18-sociology.md`） |

## 道具と台帳のこと

- 台帳（本体の `.cache/raw/find-ledger.md`）に、Le Bon・Durkheim・Barsade・Cikara・Collins の find の結果が追記された。Barsade の一度めの find（`--domain` に Wharton の二つのドメインを渡したもの）は、Wayback の CDX の一覧が長く 3 分を越えたので止めた。台帳には一度め・二度めの行が混ざっていることがある。
- 道具を通さずに取ったもの：Le Bon の全文の文字と Internet Archive の書誌（curl）、Durkheim の MDZ の目録と頁ごとの OCR（curl）。どちらも本体の `.cache/raw/empathy170/` に置いた。
- 手元の止まるホストの一覧に `dspace.mit.edu`（ログイン）がすでにあり、道具が取りに行くのを止めた。`repository.upenn.edu` の `…/bitstreams/<id>/download` は案内の HTML を返し、`/server/api/core/bitstreams/<id>/content` は PDF を返した（DSpace 7 の機関リポジトリで、次からはこの形を先に試せる）。
