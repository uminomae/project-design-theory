# 欠けは、何からのずれとして感じられるのか — 基準を多種類として探す（好奇心の駆動も）

Issue #98（親 #97 の一つ目）の調べの記録。2026-11-10。

## 要点

- 問い：欠けは、何からのずれとして感じられるのか。基準は一つでなく、多種類ありうる。あわせて、好奇心そのものが何に駆動されているかも見る。
- 候補七つ（予想・つながりの安定・体の恒常性・あるべき姿・美や善・欠けそのものを愛の側に置く系・好奇心の駆動）ごとに、文献を一次情報で当たり、「近い」と「違う」を両方書いた。どれが近いかは決めていない（決めるのは pjdhiro）。
- 当たった文献は 28 件（二つの候補で使ったものは一つと数えた）。本文照合済 17（うち、兄弟の探究の照合を流用したもの 7）、要旨照合済 6、二次資料のみ 2、未照合 3。照合の状態は一件ずつ下に書いた。
- 調べる中で、候補の中に、もう一段細かい基準が見つかった：目指すもの（投企）に照らして初めて欠けになる（サルトル）、処理の流れやすさの見込み（Reber ら）、知識の参照点（Loewenstein）、動く設定点（Sterling のアロスタシス）。ほかに、考えどうしの一貫性（Festinger）を候補として足したが、原典は読めていない。
- 自動で取れなかった原典は、#98 のコメントに保存先の表を置いた。

## pjdhiro の答え（2026-11-09・原文）

- 基準を「確かめずにつながっている安定（臍の緒）からのずれ」と一つだけ置いたことに：「それは一つです。他の可能性もあるし、多種類あると思って探してます。」
- なぜ探索したくなるかに：「なぜかはわかりません。知的好奇心というものが、すでにLoveで駆動されたものかもしれないのです」
- 前からの見立て（Love駆動開発の読み物「ずれを知らせる物差し」）：「安心の経験との類似度で評価してる面もあるかも。胎児の頃の。……その感覚とのズレを違和感や善悪の物差しにしてるのかもしれない。美や善など。」
- 調べは、体験を論証するためでなく、伝えるための共通語を集めるもの（親 #97・`docs/rules/stance.md` 1-4）。

## 調べ方

- 規約は `docs/rules/sources.md`。書誌は Crossref で照らし（DOI は Crossref が返したもの）、置き場は `scripts/find-source.sh` で順に全部引いた。そのあと、著者や大学のサイト（今のものと Wayback）を探した。
- 兄弟の探究に既にある照合を先に見て、流用した。流用元は、Love駆動開発の出典の照合（`pd/knowledge/research/love-driven-dev/BIB-check-20261109.md`・#90）と、「Love とは、どう言われてきたか」（`pd/knowledge/research/love-history/READER-love-history.md`・#79）。流用したものは、そう書いた。手元に写しがあるものは、鍵の文がその写しにあることだけ、このセッションで確かめ直した。
- ks の 2026-11-02 の候補調査（`ks/docs/issues/ISS-216-candidate-survey.md`）は、今までの規約で行ったもので、ここでは探す手がかりにだけ使った（照合し直しは #101）。
- 照合の状態：本文照合済＝原典の本文を読み、該当箇所を頁つきで確かめた／要旨照合済＝要旨まで／二次資料のみ＝事典や解説で読んだ／未照合＝書誌だけ。
- 写しの性格（誰が上げた版か）を確かめ先に添えた。原典のファイルは repo に入れず、手元に置いた。

## 一覧

| 基準の候補 | 当たった文献 | 照合の状態 |
|---|---|---|
| 予想 | Seth 2013・Barrett & Simmons 2015・Friston 2010 | 本文照合済 3（うち流用 2） |
| つながりの安定 | Sroufe & Waters 1977・Ainsworth & Bowlby 1991・Mikulincer & Shaver 2020・Coan & Sbarra 2015・Winnicott 1960 | 本文照合済 4（うち流用 3）・要旨照合済 1 |
| 体の恒常性 | Cannon 1929・Sterling 2012・Stephan ら 2016・Damasio & Carvalho 2013 | 本文照合済 1・要旨照合済 2・未照合 1 |
| あるべき姿 | Higgins 1987・Carver & Scheier 1990・Festinger 1957 | 本文照合済 1・未照合 2 |
| 美や善 | Haidt 2001・Reber ら 2004・Van de Cruys & Wagemans 2011・スピノザ『エチカ』・プラトン『饗宴』のディオティマ | 本文照合済 5（うち流用 1） |
| 欠けそのものを愛の側に置く系 | プラトン『饗宴』のソクラテス・初転法輪経の渇愛・サルトル『存在と無』・ラカン | 本文照合済 2（流用）・二次資料のみ 2 |
| 好奇心の駆動 | Loewenstein 1994・Kidd & Hayden 2015・Sroufe & Waters 1977（再掲）・Mikulincer & Shaver 2020（再掲）・Mikulincer 1997・Elliot & Reis 2003・Fredrickson 2001 | 本文照合済 2（再掲を除く）・要旨照合済 3 |

数は文献の数で、基準の確かさの数ではない。

---

## 1. 予想 — 見込みと、届いたものとのずれ

**どう置いているか。** 脳は、体や世界の状態を先に見込み、届いた信号との差（予測誤差）でその見込みを直す。感じられる状態は、この見込みの側から立ち上がる、とする見方。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Seth, A. K. (2013). Interoceptive inference, emotion, and the embodied self. *Trends in Cognitive Sciences* 17(11), 565–573. DOI 10.1016/j.tics.2013.09.007 | 本文照合済（#90 の照合を流用。サセックス大学の機関リポジトリの出版社の版。鍵の文は手元の写しで確かめ直した） | "'interoceptive inference' conceives of subjective feeling states (emotions) as arising from actively-inferred generative (predictive) models of the causes of interoceptive afferents."（p.565 要旨） |
| Barrett, L. F., & Simmons, W. K. (2015). Interoceptive predictions in the brain. *Nature Reviews Neuroscience* 16, 419–429. DOI 10.1038/nrn3950 | 本文照合済（#90 の照合を流用。このセッションでは読み直していない。PMC4731102 は自動では取れなかった） | — |
| Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience* 11(2), 127–138. DOI 10.1038/nrn2787 | 本文照合済（著者の所属先 UCL の著者の頁の PDF：https://www.fil.ion.ucl.ac.uk/~karl/NRN.pdf ） | 生き物は "resist a natural tendency to disorder"、"biological agents must avoid surprises to ensure that their states remain within physiological bounds"（p.127） |

- **近い**：欠けを「何かとのずれ」として書く点で、問いの形にいちばん素直に重なる。ずれの多くが気づかれないまま吸収される、という見方（Love駆動開発の読み物の「信号は、体の内側から湧く」の章）とも合う。Friston は、驚き（予測誤差）を避けることを、体の状態を生きられる範囲に保つことと結んでいて、下の「体の恒常性」と一続きに書いている。
- **違う**：基準になる「見込み」が何かは、これらの論では中身を問わない（形式）。何を見込んでいるか（つながりか、体の状態か、あるべき姿か）は、別の候補が埋める。また、予測誤差は外から測る量で、欠けは本人が内側から感じる経験で、書き方の水準が違う（Love駆動開発の読み物で既に書いたこと）。ks の前の調べでは、予測処理の主流は「意識に上るのは見込みの側で、誤差そのものを意識するとは言わない」と読んでいた（旧調査・#101 で照合し直す）。
- **欠けの基準として読むと**：基準は「見込み」という器で、中身は入れ替わる。ほかの候補の多くは、この器の中身として読める（Claude の読み）。

## 2. つながりの安定 — 安心してつながっている感じ

**どう置いているか。** 愛着の研究は、養育する人とのつながりを、物理的な近さでなく「安心の感じ」（felt security）として置き直した。人はこの感じを拠点にして離れ、探り、脅かされると戻る。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Sroufe, L. A., & Waters, E. (1977). Attachment as an organizational construct. *Child Development* 48, 1184–1199. DOI 10.2307/1128475 | 本文照合済（共著者 Waters のストーニーブルック大学の愛着研究のサイトの写し。Wayback 2025-03-25：psychology.sunysb.edu/attachment/online/Sroufe articles/） | "the set goal of the attachment behavioral system is viewed as 'felt security'"、近づくかどうかは "a subjective experience of security-insecurity" による評価で決まる。安心は "the ability of the infant to use the caregiver as a base from which to explore the environment" から読み取れる（p.1186） |
| Ainsworth, M. D. S., & Bowlby, J. (1991). An ethological approach to personality development. *American Psychologist* 46(4), 333–341. DOI 10.1037/0003-066X.46.4.333 | 本文照合済（#90 の照合を流用。同じサイトの Wayback の打ち直しの写し。頁は写しの頁。鍵の文は手元の写しで確かめ直した） | "a secure base from which to explore and learn"（写し p.2）、"a secure base from which to explore the world and as a haven of safety"（写し p.6） |
| Mikulincer, M., & Shaver, P. R. (2020). Enhancing the "broaden and build" cycle of attachment security in adulthood. *International Journal of Environmental Research and Public Health* 17(6), 2054. DOI 10.3390/ijerph17062054 | 本文照合済（#85・#90 の照合を流用。PMC の全文。節の名はこのセッションで確かめ直した） | 大人になっても、安心の循環は "reminders of loving relationship partners or groups and imaginary interactions with them and with various non-human or symbolic figures (e.g., pets, God)" で新しくなりうる（第 3 節） |
| Coan, J. A., & Sbarra, D. A. (2015). Social Baseline Theory: the social regulation of risk and effort. *Current Opinion in Psychology* 1, 87–91. DOI 10.1016/j.copsyc.2014.12.021 | 本文照合済（#90 の照合を流用。PMC4375548 の著者稿） | "the human brain assumes proximity to social resources"（導入・p.87） |
| Winnicott, D. W. (1960). The theory of the parent-infant relationship. *International Journal of Psycho-Analysis* 41, 585–595（全集 第 6 巻 pp.141–158 に再録） | 要旨照合済（Oxford Academic の全集の章の要旨。本文は読めていない。Crossref は書誌を返さなかった） | 要旨：乳児期の鍵は依存で、母と両親の「抱える環境」（holding environment）を要する |

- **近い**：Sroufe & Waters は、愛着の目標を「近くにいること」から「安心の感じ」へ置き直し、それを本人の主観の評価だと書く。基準が「外の状態」でなく「感じ」に置かれている点で、pjdhiro の「確かめずにつながっている安定」に、文献の中ではいちばん近い。Coan らの社会的基線理論は、脳が「近くに他者がいること」を前提（基線）にしている、と置く。基線がつながりで、そこから外れると脅威への反応を自分で負う、という読みになる。Mikulincer & Shaver は、相手が目の前にいなくても、思い浮かべるだけで、また象徴的な相手（神など）でも、安心の循環が働くと書く。
- **違う**：どの論も、基準は「応えてくれた経験」で育つ見込み（内的作業モデル）で、名指せる相手がいる。pjdhiro の言う安定は、「母がいることを、胎児は認識していない」まま、その先が見えないつながりで、確かめる経験の前にある。Winnicott の抱える環境は、乳児が依存していることに気づいていない段を扱う点で近いかもしれないが、要旨しか読めていない。
- **欠けの基準として読むと**：ずれは「安心の感じ」が揺らぐことで、Sroufe & Waters の言い方では、評価は "internal and external parameters" による。何がその感じを支えているか（名指せる相手か、名指せないつながりか）は、論によって違う。

## 3. 体の恒常性 — 体の状態を生きられる範囲に保つこと

**どう置いているか。** 体の内側の状態（体温・血糖など）には保たれる範囲があり、そこから外れると、空腹・痛み・疲れのような感じになる。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Cannon, W. B. (1929). Organization for physiological homeostasis. *Physiological Reviews* 9(3), 399–431. DOI 10.1152/physrev.1929.9.3.399 | 未照合（出版社の PDF は確認画面で止まった。#98 の保存の表へ） | — |
| Sterling, P. (2012). Allostasis: a model of predictive regulation. *Physiology & Behavior* 106, 5–15. DOI 10.1016/j.physbeh.2011.06.004 | 要旨照合済（PubMed 21684297 の著者の要旨） | ホメオスタシスの前提は "flawed: the goal of regulation is not to preserve constancy of the internal milieu"。アロスタシスは "anticipating needs and preparing to satisfy them before they arise" |
| Stephan, K. E., Manjaly, Z. M., Mathys, C. D., ら (2016). Allostatic self-efficacy: a metacognitive theory of dyshomeostasis-induced fatigue and depression. *Frontiers in Human Neuroscience* 10, 550. DOI 10.3389/fnhum.2016.00550 | 本文照合済（出版社の OA の PDF。CC BY） | 恒常性の乱れを "chronically enhanced surprise about bodily signals" と定義し、アロスタシスを "a change in prior beliefs or predictions which define setpoints for homeostatic reflex arcs" とする（p.1 要旨）。調整が予測誤差を減らせないと気づくことが "fatigue as a subjective feeling" として現れうる（本文） |
| Damasio, A., & Carvalho, G. B. (2013). The nature of feelings: evolutionary and neurobiological origins. *Nature Reviews Neuroscience* 14, 143–152. DOI 10.1038/nrn3403 | 要旨照合済（PubMed 23329161） | "Feelings are mental experiences of body states." 生理的な必要（空腹）・傷（痛み）・脅威（恐れや怒り）、そして社会的なやりとり（思いやり・感謝・愛）を知らせる |

- **近い**：ずれの基準を体に置く。Love駆動開発の読み物の「信号は、体の内側から湧く」と同じ足場。Damasio & Carvalho は、感じを、体の状態を知らせるものとし、その中に「愛」のような社会的なやりとりまで入れている。Sterling と Stephan らは、基準（設定点）が固定でなく、先回りして動くと書く。基準が動くなら、欠けは「元の値からのずれ」だけでなく、「見込んだ設定点からのずれ」でもある。
- **違う**：基準は生き延びる側（生存の信号）に寄っている。pjdhiro が「生き延びるための条件をそろえて得られるものとは、別のもの」と見ている安定（Love駆動開発の読み物）は、この候補だけでは書けない。Damasio & Carvalho が感じの例に愛を入れているのは、要旨の一文で、何を基準にしたずれかは読めていない。Stephan らが扱うのは、疲れと抑うつという病の側の話で、違和感一般ではない。
- **欠けの基準として読むと**：基準は体の設定点。ただし「設定点そのものが見込みである」（Stephan ら）とすると、1 の「予想」の器に、体の中身が入った形になる（Claude の読み）。

## 4. あるべき姿 — 理想・義務とのずれ（正義感が向くもの）

**どう置いているか。** 人は「今の自分」とは別に、「こうありたい自分」「こうあるべき自分」を持っていて、その差が特定の感情として感じられる。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Higgins, E. T. (1987). Self-discrepancy: a theory relating self and affect. *Psychological Review* 94(3), 319–340. DOI 10.1037/0033-295X.94.3.319 | 本文照合済（著者のコロンビア大学の頁の PDF：https://www.columbia.edu/cu/psychology/higgins/papers/ ） | 今の自分と理想の自分（本人や大切な他者の願い）とのずれは "the absence of positive outcomes" で、落胆の系の感情（失望・不満・悲しみ）に、義務の自分（責任・務め）とのずれは "the presence of negative outcomes" で、動揺の系の感情（恐れ・脅かされ・落ち着かなさ）に結びつく（p.319 要旨）。理想と義務の自分を "self-directive standards or acquired guides for being—in brief, self-guides" と呼ぶ（p.321） |
| Carver, C. S., & Scheier, M. F. (1990). Origins and functions of positive and negative affect: a control-process view. *Psychological Review* 97, 19–35. DOI 10.1037/0033-295X.97.1.19 | 未照合（OA の写しが見つからない。図書館か購入） | — |
| Festinger, L. (1957). *A Theory of Cognitive Dissonance*. Stanford University Press. DOI 10.1515/9781503620766 | 未照合（Internet Archive の貸出だけ） | — |

- **近い**：pjdhiro が親の問い 4 で挙げた「期待や正義感」の向く先が、この候補に当たる。Higgins は、基準を一つでなく、領域（理想・義務）と視点（自分・大切な他者）の組で、いくつも持つ、と書く。基準が多種類で、人によって持つ組が違う、という形は、問いの前提（基準は多種類）と同じ向き。ずれの種類で感じ方が変わる（落胆か動揺か）ことも書いている。
- **違う**：基準は、本人が知っている（言葉にできる）自己像で、育つ中で身についたもの（"acquired"）。「ゼロのはずのところに湧く違和感」とは逆で、何が欠けているかが分かっている。善悪の判断が基準に入る形でもある（stance 1-2 は、善悪の判断を持ち込まないとする）。Carver & Scheier の、目標への近づく速さのずれが感情になる、という見方は、ここに入る候補だが読めていない。Festinger の認知的不協和（考えどうしの食い違い）は、自己像でなく考えどうしの一貫性を基準にする別の候補で、読めていない。
- **欠けの基準として読むと**：基準は、身につけた「こうあるべき・こうありたい」。

## 5. 美や善 — 美しい・善いと感じる物差し

**どう置いているか。** 善い・悪い、美しい・醜いの判断は、理由を組み立てる前に、感じとして先に来る、とする見方。その感じの元に、処理の流れやすさや見込みがある、とする見方もある。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Haidt, J. (2001). The emotional dog and its rational tail: a social intuitionist approach to moral judgment. *Psychological Review* 108(4), 814–834. DOI 10.1037/0033-295X.108.4.814 | 本文照合済（著者のヴァージニア大学の研究室の頁の出版社の版。Wayback 2011-09-05。画像の PDF なので頁を画像で読んだ） | 道徳的直観を "the sudden appearance in consciousness of a moral judgment, including an affective valence (good–bad, like–dislike), without any conscious awareness of having gone through steps of searching, weighing evidence, or inferring a conclusion" と定義し、"a process akin to aesthetic judgment" とする（p.818） |
| Reber, R., Schwarz, N., & Winkielman, P. (2004). Processing fluency and aesthetic pleasure: is beauty in the perceiver's processing experience? *Personality and Social Psychology Review* 8(4), 364–382. DOI 10.1207/s15327957pspr0804_3 | 本文照合済（第一著者のベルゲン大学の機関リポジトリの版。Wayback。頁は写しの頁） | "aesthetic pleasure is a function of the perceiver's processing dynamics: The more fluently perceivers can process an object, the more positive their aesthetic response."（p.364 要旨）。流れやすさが感じとして立つのは、それが "unexpected in light of the person's processing expectations, which constitute a 'norm' for the event" のとき（写し p.11、不一致帰属仮説の紹介） |
| Van de Cruys, S., & Wagemans, J. (2011). Putting reward in art: a tentative prediction error account of visual art. *i-Perception* 2, 1035–1062. DOI 10.1068/i0466aap | 本文照合済（PMC3485793 の全文 XML） | 優れた作品はしばしば調和や流れやすさに背き、"artists often destroy predictions that they have first carefully built up in their viewers"。報いは "this transition from a state of uncertainty to a state of increased predictability" から来る（要旨） |
| スピノザ『エチカ』第 3 部 定理 9 の備考（1677） | 本文照合済（訳）（Elwes の英訳・パブリックドメイン・Project Gutenberg #3800。ラテン語の原文は照らしていない） | "in no case do we strive for, wish for, long for, or desire anything, because we deem it to be good, but on the other hand we deem a thing to be good, because we strive for it"（第 3 部 定理 9 備考） |
| プラトン『饗宴』のディオティマ（202d–212a） | 本文照合済（#79 の照合を流用。Perseus の Burnet 版ギリシャ語と Fowler 英訳） | エロスは「善いものがいつまでも自分のものであること」を求め（206a）、その働きは「美の中で産むこと」（206b）。一つの美しい体から段を上り、美そのものを学ぶ（210a–212a） |

- **近い**：Haidt は、善悪の判断が、理由を探す前に「好き・嫌い」の感じとして意識に現れると書き、それを美的な判断に近い過程とする。pjdhiro の「その感覚とのズレを違和感や善悪の物差しにしてるのかもしれない。美や善など」と、感じが先に立つ点で重なる。Reber らと Van de Cruys らは、美しいという感じの元を、見込みに沿って流れること、または崩れた見込みが取り戻されることに置く。どちらも、美の物差しを「見込み」と結ぶ。
- **違う**：Haidt の直観は、善い・悪いの判断そのもので、何からのずれかは、文化や社会で身につけたもの（社会的直観）として書かれる。pjdhiro が言う、胎児の頃の安心を物差しにする、という基準の手前までは書かない。スピノザは向きが逆で、善いから欲するのでなく、欲するから善いと判断する、と書く。美や善が基準として先にあるのでなく、駆動の側が先にある、という読みになる。ディオティマは、エロスが美を目指して上る道を書き、美そのものを行き着く先に置く。基準というより、引かれていく先として書かれている。
- **欠けの基準として読むと**：美や善を「物差し」と置く論（Haidt・Reber ら）と、美や善を「駆動の結果」や「行き先」と置く論（スピノザ・ディオティマ）がある。pjdhiro の「好奇心がすでに Love で駆動されたものかもしれない」と並べると、後者の向きに近い（Claude の読み）。

## 6. 欠けそのものを愛の側に置く系

**どう置いているか。** 愛や欲望を、欠けているものへ向かう動きとして書く。欠けは、愛の外にある不足でなく、愛そのものの形になる。

| 文献 | 照合の状態・確かめ先 | 鍵の文（位置） |
|---|---|---|
| プラトン『饗宴』のソクラテスとアガトンの問答（199c–201c）・ディオティマ（203b） | 本文照合済（#79 の照合を流用） | 欲する者は「手元にないもの・持っていないもの・欠けているもの」を欲する（200e）。エロスはポロス（資源・工夫）とペニア（貧しさ）の子（203b） |
| 初転法輪経（SN 56.11）の渇愛（taṇhā） | 本文照合済（#79 の照合を流用。SuttaCentral のパーリ原文と Sujato の英訳・CC0） | 苦の元としての渇き。欲への渇き、存在し続けることへの渇き、無くなることへの渇き（kāmataṇhā・bhavataṇhā・vibhavataṇhā） |
| サルトル『存在と無』（1943） | 二次資料のみ（スタンフォード哲学百科「Jean-Paul Sartre」2022・2026 改訂：https://plato.stanford.edu/entries/sartre/ 。原典は読めていない） | 百科が引く一文："Action necessarily implies as its condition the recognition of a 'desideratum'; that is, of an objective lack"（英訳 1956 p.433）。百科の要約："A factual state, even poverty, does not determine consciousness to apprehend it as a lack." |
| ラカンの欲望と欠如 | 二次資料のみ（スタンフォード哲学百科「Jacques Lacan」2013・2026 改訂：https://plato.stanford.edu/entries/lacan/ 。原典は読めていない） | 百科の要約：欲望の主体は "derailed onto the tracks of non-natural desires doomed never to reach enjoyable destinations"、手にした対象は "never quite 'IT'" |

- **近い**：ソクラテスの問答は、欲することを、欠けているものへ向かうことと定義する。欠けと愛（エロス）が同じ動きの両面になる。渇愛は、欲だけでなく、在り続けることへの渇きと、無くなることへの渇きまで入れる。サルトルは、事実の状態（貧しさでさえ）はそれだけでは欠けにならず、目指すもの（投企）に照らして初めて欠けとして捉えられる、と書く（百科の要約）。欠けの基準が、外にある値でなく、人が投げかけた先にある、という形で、この問いに直接当たる。
- **違う**：渇愛は、苦の元として、手放すべきものとして置かれ、育てるべき心の慈（mettā）とは別の語（#79）。欠けを愛の側に置くが、その愛は肯定されていない。ディオティマの話は、欠けから始まって、美の中で産むことへ移り、欠けにとどまらない。サルトルとラカンは、二次資料でしか読めておらず、欠けが満たされることはない、という側（ラカン）を本人の文で確かめていない。どの論も、欠けを感じる「基準」を、体や関係でなく、欲望の構造に置く。
- **欠けの基準として読むと**：欠けは、基準からのずれでなく、向かう動きそのものに含まれる。基準は、向かう先（目指すもの・美・在り続けること）の側にある（Claude の読み）。

## 7. 好奇心の駆動 — なぜ探索したくなるのか

**どう置いているか。** 二つの流れがある。一つは、知識の隙間（欠け）を感じるから探す、という流れ。もう一つは、安心があるから離れて探れる、という流れ。

| 文献 | 照合の状態・確かめ先 | 鍵の文（頁） |
|---|---|---|
| Loewenstein, G. (1994). The psychology of curiosity: a review and reinterpretation. *Psychological Bulletin* 116(1), 75–98. DOI 10.1037/0033-2909.116.1.75 | 本文照合済（著者のカーネギーメロン大学の学科の頁の PDF：https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf 。画像の PDF なので頁を画像で読んだ） | 好奇心は "arising when attention becomes focused on a gap in one's knowledge"、その隙間が "the feeling of deprivation labeled curiosity" を生む。好奇心は参照点の現象で、"when one's informational reference point in a particular domain becomes elevated above one's current level of knowledge" に起きる（p.87） |
| Kidd, C., & Hayden, B. Y. (2015). The psychology and neuroscience of curiosity. *Neuron* 88, 449–460. DOI 10.1016/j.neuron.2015.09.010 | 本文照合済（第一著者の研究室のサイトの出版社の版：kiddlab.com） | 好奇心を "a drive state for information" と置く定式を紹介する（p.450）。定義を争うより、情報を求める動機を、その生き物の暮らしの中で見るほうがよい、と提案する（p.449 要旨） |
| Sroufe & Waters 1977（2 の再掲） | 本文照合済 | 安心は、養育する人を "a base from which to explore" にできることから読み取れる。乳児には "strong exploratory and affiliative tendencies" がある（p.1186） |
| Mikulincer & Shaver 2020（2 の再掲） | 本文照合済 | 安心は、愛着でない営み（"exploration, play, learning"）に、心配や防衛に力を割かずに打ち込めるようにする（第 3 節） |
| Mikulincer, M. (1997). Adult attachment style and information processing: individual differences in curiosity and cognitive closure. *Journal of Personality and Social Psychology* 72(5), 1217–1230. DOI 10.1037/0022-3514.72.5.1217 | 要旨照合済（PubMed 9150591） | 安定型と不安型の人は、回避型の人より、自分を好奇心が強いと言い、好奇心に好意的だった。安定型の人は、早く結論を閉じることを好まず、新しい情報に頼りやすかった |
| Elliot, A. J., & Reis, H. T. (2003). Attachment and exploration in adulthood. *Journal of Personality and Social Psychology* 85, 317–331. DOI 10.1037/0022-3514.85.2.317 | 要旨照合済（PubMed 12916573） | 愛着の理論の探索の系を、White（1959）の effectance motivation と達成動機に結ぶ。大人の愛着と達成の動機・目標の結びつきを 4 研究で示す |
| Fredrickson, B. L. (2001). The role of positive emotions in positive psychology: the broaden-and-build theory of positive emotions. *American Psychologist* 56, 218–226. DOI 10.1037/0003-066X.56.3.218 | 要旨照合済（PubMed 11315248。PMC3122271 は自動では取れなかった） | 正の情動は、その場の考えと行動の幅を広げ、それが長く続く資源を築く |

- **近い（欠けから）**：Loewenstein は、好奇心を、知識の参照点と今の知識との隙間から生まれる「欠けている感じ」と書く。好奇心の基準を「参照点」と呼んでいて、この問いの形（何からのずれか）にそのまま当たる。
- **近い（安心から）**：Sroufe & Waters、Mikulincer & Shaver、Mikulincer 1997 は、安心が探索を可能にする、と書く。pjdhiro の「知的好奇心というものが、すでにLoveで駆動されたものかもしれない」は、この流れに重なる。Mikulincer & Shaver は、その安心を "feel loved, appreciated, and cared for" と結んでいて（第 3 節）、愛されている感じが探索の下地になる、という読みは文献の中にある。
- **違う**：Loewenstein の好奇心は、隙間があると分かっていることが前提で、「ゼロのはずのところに湧く違和感」とは違う（ks の前の調べでも同じ指摘）。参照点が上がる理由（なぜ知りたくなるのか）は、この論では問わない。愛着の流れは、安心が探索を「許す」と書くが、探索そのものを駆動するのは別の系（探索の系・effectance）として置く（Elliot & Reis の要旨）。安心と好奇心を同じもの（Love）から出たものとして書く文献は、当たった範囲には無い。Kidd & Hayden は、好奇心の定義はまだ定まっていないと書いている。
- **好奇心の基準として読むと**：二つの流れは、基準を別の所に置く。欠けの流れは「知識の参照点」、安心の流れは「つながりの安定」。pjdhiro の見立ては、二つを分けずに、どちらも Love と呼びたいものから出ている、と見るものかもしれない（Claude の読み。決めない）。

---

## 横に並べて見えたこと（Claude の読み。断定しない）

- 基準は、少なくとも二つの形で書かれている。一つは、ずれを測る「物差し」として先にある基準（見込み・体の設定点・あるべき自分・美しさの見込み）。もう一つは、向かう動きの先にある基準（目指すもの・美そのもの・在り続けること）。後者では、欠けは、基準からのずれでなく、向かう動きそのものに含まれる（サルトル・プラトン・スピノザ）。
- 物差しの側の多くは、「見込み」という器に、中身（体・つながり・自己像・処理の流れ）を入れた形で書ける。器そのもの（予測処理）は、中身を問わない。
- 基準が動く、と書く論がある（アロスタシスの設定点・知識の参照点・Reber らの「norm」）。基準は一つの固定した値でなく、見込みとして、そのつど立つ。
- つながりの安定を基準にする論は、どれも、応えてくれた経験で育つ見込みを扱う。確かめる経験の前にあるつながり（pjdhiro の臍の緒の安定）を基準にする論は、当たった範囲には無い。Winnicott の抱える環境が手がかりになりうるが、要旨しか読めていない。
- 好奇心の駆動は、欠けから（Loewenstein）と、安心から（愛着の研究）の二つの流れで、文献の中では別々の系として書かれている。

ほかの基準が見つかれば足す。数で閉じない。

## 足す候補（まだ当たっていない）

- 考えどうしの一貫性（Festinger 1957 の認知的不協和）。原典は貸出だけ。
- 目標への近づく速さ（Carver & Scheier 1990）。原典は読めていない。
- 抱える環境（Winnicott 1960）。全集の本文が要る。
- 一人称の方法で、違和感がどこから湧くかを記述した研究（as の領域。#103 と重なる）。

## 取れなかった原典

#98 のコメントに、開く場所と保存名の表を置いた（Cannon 1929・Carver & Scheier 1990・Winnicott 1960・Barrett & Simmons 2015・Fredrickson 2001・Festinger 1957・Mikulincer 1997・Elliot & Reis 2003・Damasio & Carvalho 2013・Sterling 2012）。

## pjdhiro の判断

（見せたあとで、原文で写す）
