# SURVEY-01 原典と概念の輪郭（pd#151）

## 状態

- 日付: 2026-11-06。担当: team-researcher（Opus）。規律は同ディレクトリ `BRIEF-researchers.md`。
- 一次資料で本文を照合できたもの: **11 本**（文献の単位で数え直した。最初は「8 点」と書いたが数え方が曖昧だった。critic round 1 の後に Edmondson & Bransby 2023 を加えた。Edmondson 1999／Edmondson 2002 HBS WP 02-062／Edmondson & Bransby 2023（SURVEY-02 が保存した CC BY 4.0 の本文）／Schein 1992 MIT WP 3409-92／Schein 1995 MIT WP 3831／Taylor, Collins & Ashford 2022／O'Donovan & McAuliffe 2020 二本／日本語の学会誌 3 本＝山口 2020・山内 2021・大塚と落合 2025）。保存先は `.cache/raw/psychological-safety/`（PDF と `pdftotext -layout` のテキスト）。
- `二次資料のみ`（Internet Archive の全文検索の断片で、原典の語の存在と前後だけを確かめたもの）: Schein & Bennis 1965、Rogers 1961（On Becoming a Person の再録）。Internet Archive の貸出本で、本文は読めない。全文検索 API の抜粋で語の存在と前後だけを確かめた。ページ番号は未確定。
- 要旨だけ照合できたもの: Edmondson & Lei 2014、Newman, Donohue & Eva 2017（OpenAlex・Monash 研究ポータル）。
- 取れなかったもの: Kahn 1990 本文、Edmondson 2004 章の本文、Edmondson & Lei 2014 本文、Newman ら 2017 本文、Frazier ら 2017 本文（SURVEY-02 がブラウザ内で閲覧。ローカル本文なし）、Edmondson 2018 本文、Edmondson 2008 HBR 本文。試した経路は末尾「取れなかったもの」。
- 引用の長さ: 鍵の文は原文の断片を短く（おおむね 15 語以内）にとどめ、ページを付けた。全文はローカルのテキストに行番号つきで残してあるので、照合はそちらで行える。
- 書誌のクロスチェックは Crossref API・Semantic Scholar API・OpenAlex・Unpaywall・出版社/リポジトリの記録で行った。取得した PDF は `pdfinfo` と冒頭の著者・題・誌名で狙いと一致することを確かめた。
- 2026-11-06 critic round 1 の指摘を反映（REVIEW-critic-20261106.md）。

---

## 1. Edmondson (1999) Psychological Safety and Learning Behavior in Work Teams

1. **書誌**: Edmondson, A. (1999). Psychological safety and learning behavior in work teams. *Administrative Science Quarterly*, 44(2), 350–383. DOI 10.2307/2666999。Crossref（巻 44・号 2・pp.350–383・1999-06）、Semantic Scholar（同題・1999・Harvard の機関リポジトリ OA あり）、PDF の JSTOR 表紙（Vol. 44, No. 2, Jun. 1999, pp. 350-383）の三つで一致。
2. **照合の状態**: `本文照合済`。経路＝MIT の授業資料 `https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf`（JSTOR 版の PDF）。保存＝`edmondson-1999-psychological-safety-learning.pdf`／テキスト `edmondson-1999.txt`。ページの対応は、各ページ下の「NNN/ASQ, June 1999」の柱で確かめた（p.354＝テキスト 274–331 行、p.375＝1727–1786 行、p.378＝1907–1964 行）。
3. **鍵の文**（依頼の 5 点に沿って）:
   - 定義（p.354）: "a shared belief that the team is safe for interpersonal risk taking"。続けて、この信念はふつう暗黙で、"taken for granted" だと書く。
   - 信頼との関係（p.354）: "involves but goes beyond interpersonal trust"。その先で "a team climate characterized by interpersonal trust and mutual respect in which people are comfortable being themselves"（この部分は 20 語を超えるので、ローカルの 326–328 行で照合のこと）。**「焦点が他者か自分か」の対比は 1999 には無い**。その対比は §7 の 2002 年の論文で初めて出る。
   - 凝集性との区別（p.354）: 凝集性は異論を言う意欲を下げうるとして、"groupthink (Janis, 1982)" を引き、心理的安全性と凝集性は同じでないと書く。同じ段で "neither a careless sense of permissiveness, nor an unrelentingly positive affect" とも書く。
   - p.375 の考察: "a blend of trust, respect for each other's competence, and caring about each other as people"。信頼をつくっても尊重と気づかいの空気が生まれるとは限らない、とも書く（"may not necessarily create a climate of mutual respect and caring"）。
   - 「明示して話し合っても本質は変わらない」の原文（p.354）: "their being made explicit does not alter the essence of team psychological safety"。主語は、ときどきチームの中で明示的に話し合われる「対人の規範についての暗黙の信念」。
   - 根（p.354）: Schein and Bennis (1965) が、人が "feel secure and capable of changing" のために心理的安全をつくる必要を論じた、と書く。
   - 効く条件の手がかり（p.354・p.378）: 学習行動は "highly routine repetitive tasks" では効率を下げうる（p.354。テキスト 285 行で、p.354 の柱の手前。critic round 1 で p.353 から訂正）。"machine-paced assembly line" のチームは学習行動から得るものが少ない、とも書く（p.378）。p.378 には、信頼など近い構成概念と "could not conclusively differentiate" とも書かれる（構成概念の妥当性は今後の課題）。
4. **読み**:
   - [教科書] 定義は「チームで共有された信念」で、対人のリスクを取っても安全か、についての信念。集団の水準の概念として出された。
   - [教科書] 中身は、罰されない・拒まれない・恥をかかされないという確信（p.354 "will not embarrass, reject, or punish someone for speaking up"）で、その確信は相互の尊重と信頼から生まれる、と書かれる。罰されないことと、尊重・信頼・自分らしくいられることの両方が、一つの段落の中に包まれている。
   - [研究の一線] 著者自身が、信頼との区別は今回のデータでは決着しない、と p.378 で書いている。概念の輪郭のゆれは、出発点から著者が認めていた。
   - [Claude の読み替え] Issue 本文の「明示して話し合っても本質は変わらない（＝宣言で作れるものではない）」の括弧の中は、原文より一歩先に出ている。原文が言うのは「暗黙の信念が明示的に話し合われても、構成概念としての中身は同じ」までで、宣言で作れるかどうかは言っていない。宣言で作れない、と読むのは Claude の読みとして扱う（台帳の型 G）。
   - [Claude の読み替え] 効く条件について、原典自身が「定型の繰り返し作業」「機械のペースの組立ライン」では学習行動の効き目が小さい、と書いている。心理的安全性そのものではなく、それが促す学習行動の効き目の話である点に注意。
5. **pjdhiro の見立てとの関係**:
   - 「心理的に安全であって、生物的に安全ではない。安心のことを差してないか」: 原典の定義の段落は、罰されない確信と、尊重・信頼・自分らしくいられる居心地（"comfortable being themselves"）を同じ段落に置いている。p.375 は信頼・能力への尊重・人としての気づかいの混ざった空気と書く。身体の安全や生存を指す語は出てこない。「安心」の側に重なる部分が大きい。重ならないのは、原典が "safe" "punish" という語も同時に使い、罰の不在を中心の言い方に置いている点。罰の不在だけに読むと（罰の不在を生存の側・低次欲求の側に置くのは Claude の当てはめ）「低次欲求だけをケアする」読みになり、原典の段落の後半が落ちる。
   - 「軍隊型・部品のように扱う組織では低くても機能するかもしれない」: p.354 と p.378 の記述と重なる（定型・機械のペースの仕事では学習行動の効き目が小さい）。重ならないのは、原典が言うのは学習行動の効き目であって、「心理的安全性が低いほうが機能する」とは書いていないこと。
   - 「心理防衛機制で整理」: 原典は Argyris (1982, 1993) を引いて、対人の脅威が学習を妨げる、という防衛の系譜の上に立っている（p.351–354）。

### 1b. Edmondson は Argyris の門下と言えるか

- 1999 論文の謝辞（p.350）で名前が挙がるのは Richard Hackman（研究設計と各稿への助言）、Keith Murnighan、Rod Kramer、Mark Cannon。**Argyris は謝辞に無い**。本文では Argyris (1982, 1993)、Argyris & Schön (1978) を繰り返し引く。
- 博士論文: Edmondson, A. C. (1996). *Group and organizational influences on team learning*. Harvard University（Wikipedia の典拠＝ProQuest 304308494。`二次資料のみ`）。
- 指導の記録: HBS のニュースリリース（2014 年 Maastricht 大学の名誉博士号）が、Edmondson が "former academic advisors at Harvard" として Hackman と Argyris に謝意を述べた、と書く。この文は検索結果の抜粋で確かめただけで、リリースのページは DNS の失敗で開けなかった（`二次資料のみ`）。別の紹介記事は Argyris を "one of her supervisors" と書く。
- 読み: [研究の一線] 二次資料 2 件では、Argyris は指導教員の一人とされる。主指導・委員の構成は未確認（critic round 1 で SURVEY-03 §3 と書き方をそろえた）。「Argyris の門下」と書くなら「指導を受けた一人」までにとどめるのが安全。博士論文の謝辞（ProQuest）を見れば確定する。

---

## 2. Schein & Bennis (1965) Personal and Organizational Change Through Group Methods

1. **書誌**: Schein, E. H., & Bennis, W. G. (1965). *Personal and organizational change through group methods: The laboratory approach*. New York: Wiley. Internet Archive の書誌（identifier `personalorganiza0000sche`・Wiley・1965・396 画像）と、Edmondson 1999 の文献表で確認。**食い違い**: Edmondson 1999 の文献表は書名を "Personal and Organizational Change via Group Methods" としている。IA の書誌・題扉は "Through"。
2. **照合の状態**: `二次資料のみ`（Internet Archive の全文検索の断片。本文は貸出制限で読めない）。経路＝Internet Archive の全文検索 API（`archive.org/services/search/beta/page_production/?service_backend=fts` を identifier で絞る）。ページ番号は、一つの断片の頭に「279」が付いていたほかは未確定。djvu テキストは 401、BookReader の inside 検索は「Item not available」。
3. **鍵の文**（断片）:
   - "Creation of psychological safety by reduction of threat or removal of barriers to change"（変化の段階の一つとして挙げる箇所）。
   - "In order for unfreezing to lead to an increased desire to learn rather than to a heightened anxiety"（続けて、人が身動きできなくなる、と書く）。
   - "an environment must be created with maximum psychological safety. This is a difficult and paradoxical task"。
   - "the main source of psychological safety for the individual delegate is his sense of support and strength earned in"（以下は断片で切れる）。
   - 脅威を二つに分ける語: "reduce threat from others" と "reduce threat from within by providing reassurance, support"。
4. **読み**:
   - [研究の一線]（断片からの読み。critic round 1 で [教科書] から改めた）原義は、T グループ（ラボラトリー・トレーニング）で、Lewin の「解凍（unfreezing）」が学ぶ意欲につながるか、不安で身動きできなくなるかを分ける条件。個人が変化し学ぶための条件として置かれている。
   - [研究の一線] 脅威が「他者から」と「内側から」の二つに分けられ、内側の脅威は安心づけ（reassurance）と支えで下げる、とされる。断片からの読みで、章の全体は未読。
   - [Claude の読み替え] ここでの安全は、変わろうとする人が自分を保てるかどうか、つまり自己の側の安全で、身体の安全ではない。
5. **pjdhiro の見立てとの関係**:
   - 「安心のことを差してないか」: 原義は「安心づけと支えで、学ぶ不安を下げる」条件で、安心の側と重なる。重ならないのは、Schein & Bennis が安全を「解凍」と組にして、揺さぶり（脅威）と同時に置く点。脅威が無い状態そのものを目標にしていない。
   - 「心理防衛機制で整理」: 不安が高すぎると学ぶ代わりに身動きできなくなる、という書き方は、防衛の側から心理的安全性を見る視点と重なる。

---

## 3. Schein (1992/1993) How Can Organizations Learn Faster? The Challenge of Entering the Green Room

1. **書誌**: 刊行版＝Schein, E. H. (1993). How can organizations learn faster? The challenge of entering the green room. *Sloan Management Review*, 34(2), 85–92（巻とページは Edmondson 1999 の文献表「34: 85-92」と MIT SMR のショップの題で確認。号の 2 は `未照合（記憶）`）。照合したのはワーキングペーパー版＝Schein, E. H. (1992). *How can organizations learn faster? The problem of entering the Green Room*. MIT Sloan WP #3409-92, Spring 1992（MIT DSpace handle 1721.1/2399・RePEc mit:sloanp:2399）。副題が WP は "problem"、刊行版は "challenge"。
2. **照合の状態**: `本文照合済`（WP 版）。経路＝MIT DSpace の REST（`dspace.mit.edu/server/api/core/bitstreams/6ca83be5-…/content`。handle ページの bitstream リンクは 429 の防護画面になった）。保存＝`schein-1992-green-room-swp3409.pdf`／`.txt`（19 頁）。刊行版 SMR とは文面が違う可能性がある。
3. **鍵の文**:
   - p.4: 解けない問題に出会ったときの不安を "I will call this ANXIETY 1" と名付け、それを避けるために "we deny the problem … or project the problem onto someone else" と書く。
   - p.11: "Anxiety 1" は "doing something new" に伴う不安、"Anxiety 2" は "continuing to do something that will lead to failure" に伴う誘発された不安。
   - p.12: "anxiety prevents learning, but anxiety is necessary to start learning as well"。
   - p.12: 心理的に安全とは "a path forward that is manageable" が見えること、変わる人が "a sense of identity and wholeness" を保てること。
   - p.13: 心理的に安全な環境の要素として、訓練と練習の機会、コーチングと報酬、"norms that legitimize the making of errors"、実験を報いる規範を挙げる。
   - green room は、パブロフ型の条件づけで学習された回避（緑の部屋に入ると電気ショックがあった犬は、ショックを切っても入らない）の比喩（p.7–8）。
4. **読み**:
   - [教科書] Schein は二つの不安を対にした。新しいことをする不安（Anxiety 1）と、変わらずに失敗へ向かう不安（Anxiety 2）。心理的安全はその管理の一部で、Anxiety 2 を立ち上げたうえで、Anxiety 1 を越える道筋を示すことと定義される。
   - [研究の一線] Anxiety 1 を避ける形として、否認・単純化・他者への投影を挙げている。防衛機制の語彙で書かれている（防衛機制の理論として体系立てているわけではない）。
   - [Claude の読み替え] Schein の心理的安全は、不安を無くすことではない。不安を一方で起こし、他方で越えられる道筋を示す、二つを同時に扱う構えとして書かれている。
5. **pjdhiro の見立てとの関係**:
   - 「心理的に安全であって、生物的に安全ではない」: Schein が守ろうとするのは "identity and wholeness"（自己の同一性とまとまり）で、身体ではない。この点はよく重なる。
   - 「保身や日和見の安心・安全は組織によくない」: Schein の枠では、Anxiety 2 が無いまま Anxiety 1 だけを下げても学習は始まらない。安心だけがあって揺さぶりが無い状態は、学習の条件を満たさない、と読める。重なるのはここまでで、Schein はそれを依存とは呼んでいない。
   - 「心理防衛機制で整理」: Anxiety 1 から否認・投影が生まれる、という記述は、pjdhiro の防衛機制の視点と直接重なる一次資料。

---

## 4. Schein (1995) Organizational and Managerial Culture as a Facilitator or Inhibitor of Organizational Transformation（learning anxiety と survival anxiety）

1. **書誌**: Schein, E. H. (1995). *Organizational and managerial culture as a facilitator or inhibitor of organizational transformation*. MIT Sloan Working Paper 3831, July 1995（シンガポールでの講演、1995-06-29）。MIT DSpace handle 1721.1/2581。PDF の表紙と DSpace の記録で一致。
2. **照合の状態**: `本文照合済`。経路＝MIT DSpace REST（bitstream `fafa8ec2-…`）。保存＝`schein-1995-swp3831.pdf`／`.txt`（28 頁）。関連: Coutu, D. L. (2002). The anxiety of learning [Schein へのインタビュー]. *Harvard Business Review*, March 号, 100–107（巻号ページは二次資料の MAAW の要約から。`二次資料のみ`。HBS Working Knowledge の転載ページは 403）。
3. **鍵の文**:
   - p.4: "One kind of anxiety is the fear of learning something new. I will call it 'Learning Anxiety.'"
   - p.5: もう一つを "Survival Anxiety" と呼び、生き延びて栄えるには変わらねばならない、という不快な気づきと書く。命題は "Survival Anxiety must be greater than Learning Anxiety"。
   - p.5–6: Method 1＝生存の不安を上げる（脅す・強い報酬で失う怖さを上げる）。p.6 で、それでも学ぶ不安が高いまま残ると "My learning anxiety may be so high that I become defensive" と書き、続けて現実の否認・合理化・他責を挙げる（critic round 1 で主語を訂正した。防衛的になる理由として書かれているのは、高いまま残る学ぶ不安）。
   - p.6–7: Method 2＝学ぶ不安を下げる。その第一条件が心理的安全で、"a sense that learning something new will not cause loss of identity or our sense of competence"、自尊（self-worth）を壊す道には踏み出さない、と書く。
   - p.24 の図表: SURVIVAL ANXIETY を "the fear, shame, or guilt associated with not learning something new" と定義する。
4. **読み**:
   - [教科書] 学ぶ不安と生存の不安の対は Schein の枠組みとしてよく引かれる。生存の不安が学ぶ不安を上回るときに学習が起きる。
   - [研究の一線] 生存の不安を上げても、学ぶ不安が高いまま残ると、人は防衛的になる（否認・合理化・他責）、と Schein は書く（p.6）。生存の不安を上げるやり方は、学ぶ不安を下げないので届かないことがある、という筋。経験からの主張で、実証研究ではない。
   - [Claude の読み替え] Schein の「心理的安全」は、二つの不安のうち学ぶ不安の側だけを下げる道具として位置づけられている。生存の側は別に、すでに十分ある（"we have plenty of survival anxiety already"）とされる。
5. **pjdhiro の見立てとの関係**（依頼で「丁寧に」とされた点）:
   - **重なるところ**: pd の「生存と信頼」の二軸と、Schein の「生存の不安と学ぶ不安」の対は、生存という語を共有している。Schein の心理的安全は、身分・能力感・自尊（identity / competence / self-worth）を守ることで学ぶ不安を下げるもので、身体の安全ではない。pjdhiro の「心理的に安全であって、生物的に安全ではない」とよく重なる。さらに、学ぶ不安が高いまま残ると防衛（否認・合理化・他責）になる、という記述（p.6）は、「心理防衛機制で整理」の視点に一次資料の足場を与える。
   - **重ならないところ**: Schein の二つはどちらも「不安」で、片方が生存、もう片方が学ぶことの怖さ。pd の信頼の側にあたる「信頼の信号が湧いている」という肯定の側は、Schein の対の中には無い。Schein の対では、信頼に近いもの（支え・励まし・コーチ）は学ぶ不安を下げる手段として出てくる。二軸の対応を一対一に置く（Survival＝生存軸、Learning＝信頼軸）のは Claude の読み替えで、そのまま置けない。
   - **もう一つの重なり**: 現場の「心理的安全性」が「罰されない仕組み」に縮むと、それは Schein の枠で言えば「生存の不安を下げる」ことに当たり、Schein の命題（生存の不安が学ぶ不安を上回るときに学ぶ）とは逆向きに働きうる。これは Claude の読み替え。保身・日和見の安心が組織によくない、という pjdhiro の見立てを、Schein の命題から説明できる可能性がある（吟味待ち）。
   - **別の読み（critic round 1 で併記）**: Schein 自身は、誤りを罰しない規範を学ぶ不安を下げる側に置いている。1992 p.13 は心理的に安全な環境の要素に "norms that legitimize the making of errors" を挙げる。1995 p.7 は、誤りをしてよい練習の場（"a practice field where it is OK to make mistakes"）を学ぶ不安を下げる条件に数え、p.8 で "rewarding correct steps is far more effective than punishing mistakes" と書く。この読みでは、罰されない仕組みは学ぶ不安を下げる手当てで、Schein の命題と同じ向きに働く。二つの読みは、罰されない仕組みが学ぶことへの怖さを下げているのか、変わらないことへの怖さ（生存の不安）まで消しているのかで分かれる。上の「もう一つの重なり」は [Claude の読み替え] として残し、この別の読みと並べておく。

---

## 5. Rogers (1954; 1961 再録) Toward a Theory of Creativity（語の早い使用）

1. **書誌**: Rogers, C. R. (1954). Toward a theory of creativity. *ETC: A Review of General Semantics*, 11(4), 249–260（巻号ページは `未照合（記憶）`。二次資料の Field Guide は 1954 と ETC 誌を挙げる）。再録＝Rogers, C. R. (1961). *On Becoming a Person*. Boston: Houghton Mifflin, ch.19（章番号は `未照合（記憶）`）。
2. **照合の状態**: `二次資料のみ`（Internet Archive の全文検索の断片。1961 の再録。IA identifier `onbecomingperson0000carl`）。ページ未確定。1954 年の初出誌は未取得。
3. **鍵の文**（断片）:
   - "X. Psychological safety. This may be established by three associated processes"。三つは "Accepting the individual as of unconditional worth"、"Providing a climate in which external evaluation is absent"、共感的理解。
   - "Y. Psychological freedom" が対になる。
   - 同じ本の別の箇所に "the safety of being liked and prized as a person" という言い方がある。
4. **読み**:
   - [研究の一線] 「心理的安全」という語を創造性の条件として 1954 年に使っている。語の最初の使用者だとする説（psychsafety.com は "we believe" とぼかして書く）は、確かめられていない。Schein & Bennis や Edmondson が Rogers を引いているかは、1999 の文献表には無い（Rogers は文献表に載っていない）。
   - [Claude の読み替え] Rogers の安全は、無条件の価値として受け入れられること、外からの評価が無いこと、共感的に分かってもらえること。いずれも評価や罰の不在を含みつつ、受容の側に重心がある。
5. **pjdhiro の見立てとの関係**: 「安心のことを差してないか」と最もよく重なる早い用例。受容（unconditional worth）が中心で、身体の安全の語は無い。重ならないのは、Rogers は個人の創造性の条件として書いており、組織やチームの話ではない点と、Edmondson の系譜に直接つながる証拠が今のところ無い点。

---

## 6. Kahn (1990) Psychological Conditions of Personal Engagement and Disengagement at Work

1. **書誌**: Kahn, W. A. (1990). Psychological conditions of personal engagement and disengagement at work. *Academy of Management Journal*, 33(4), 692–724. DOI 10.2307/256287（Crossref・OpenAlex・Semantic Scholar で一致。OpenAlex は 10.5465/256287 も同じ論文の場所として持つ）。
2. **照合の状態**: `二次資料のみ`。本文は取れなかった（経路は末尾）。二次で見たもの: Edmondson 2002 WP（Kahn の発言の引用 "interpersonal relationships … promoted psychological safety when they were supportive and trusting"、ページ無し）、psychsafety.com Field Guide（p.708 とする）、Campbell Institute（National Safety Council）の解説（p.705 とする。PDF はリダイレクトで取れず、検索結果の抜粋で確認）、大塚と落合 2025（日本語の言い換え）。
3. **鍵の文**（二次経由）: "without fear of negative consequences to self-image, status, or career"。Field Guide はこの部分を p.708、Campbell Institute は "Sense of being able to show and employ self without fear …" の形で p.705 と書く。
4. **読み**:
   - [教科書] Kahn は仕事への関与の三条件（意味・安全・余力）の一つとして心理的安全を置いた。個人の水準の概念。
   - [研究の一線] ページの食い違い（705／708）は、二つの二次資料が別の箇所を引いている可能性がある。一方が条件をまとめた表（"Sense of being able to …" の名詞句の形）、もう一方が本文の定義文（"was experienced as feeling able to …" の形）という可能性がある。これは Claude の推測で、本文を見るまで確定しない。
5. **pjdhiro の見立てとの関係**: 守られるのは自己像・地位・キャリアで、身体ではない。「心理的に安全であって、生物的に安全ではない」と重なる。ただし地位・キャリアへの悪い結果という言い方は、社会的な生存（職を失う・評価が下がる）にかかわる側も含んでいて、生存の側と信頼の側の両方にまたがる。自己を「見せて使える（show and employ）」という言い方は、Edmondson 1999 の "comfortable being themselves" と同じ向き。

---

## 7. Edmondson (2002 WP／2003 章) Managing the Risk of Learning: Psychological Safety in Work Teams（信頼との対比の原文）

1. **書誌**: Edmondson, A. C. (2002, March 15). *Managing the risk of learning: Psychological safety in work teams*. HBS Working Paper 02-062（PDF の表紙に "Forthcoming in West, M. (Ed) International Handbook of Organizational Teamwork, London: Blackwell"）。刊行版は Edmondson, A. C. (2003). In M. A. West, D. Tjosvold & K. G. Smith (Eds.), *International Handbook of Organizational Teamwork and Cooperative Working* (pp. 255–275). Wiley（刊行版の書誌は `未照合（記憶）`。表紙の "Blackwell" と食い違う。版元の移行か記憶の誤りか未確認）。
2. **照合の状態**: `本文照合済`（WP 版）。経路＝HBS `https://www.hbs.edu/ris/Publication%20Files/02-062_0b5726a8-443d-4629-9e75-736679b870fc.pdf`。保存＝`edmondson-2002-managing-risk-of-learning-hbs-wp02-062.pdf`／`edmondson-2002-wp.txt`。pdfinfo の題・本文冒頭の題と著者で一致。
3. **鍵の文**:
   - p.7: 心理的安全性は "does not imply a cozy environment in which people are necessarily close friends, nor does it suggest an absence of pressure or problems"。
   - p.8（テキスト 352 行で、p.8 の柱の手前。critic round 1 で p.7 から訂正）: 信頼との違いを三つで述べる＝"the timeframe, the object of focus, and level of analysis"。
   - p.8（時間）: 心理的安全性の暗黙の計算は "very short-term interpersonal consequences" を見る。信頼は遠い将来を含む広い時間の幅。
   - p.8–9（焦点）: 信頼は "giving others the benefit of the doubt"。心理的安全性は、ほかの人が自分に benefit of the doubt をくれるかどうか。チームの一員の言葉 "I don't have to wear a mask in this team…it's easy to be myself" を引き、"The focus is internal" と書く。
   - p.9–10（水準）: 心理的安全性は集団の水準、信頼は "primarily to a dyadic relationship"。
   - p.6–7: 根は Schein & Bennis (1965)。Schein (1985) が心理的安全は "learning anxiety" と呼ばれる防衛を越える助けになると論じた、と書く。
4. **読み**:
   - [教科書] 「焦点が他者か自分か」「時間の幅」「分析の水準」の三つで信頼と区別する、という整理の原文はこの論文にある。2004 年の章で同じ対比が引かれることが多いが、確かめられた原文は 2002 WP のもの。
   - [研究の一線] 1999 では「信頼を含んで超える」、2002 では「補い合うが別の信念」。言い方が少し動いている。
   - [Claude の読み替え] "I don't have to wear a mask … easy to be myself" という例は、罰の不在よりも、仮面を外しても受け入れられる感覚を中心に置いている。
5. **pjdhiro の見立てとの関係**:
   - 「安心のことを差してないか」: 仮面を付けなくてよい、自分でいられる、という例が定義の説明の中心に置かれている点で、安心の側と強く重なる。p.7 の「居心地のよい仲良しの場ではない、圧力や問題が無いことでもない」は、保身・日和見の安心と原典の概念を分ける、原典自身の線。
   - 「焦点が自分」という対比は、pd の言い方では、自分が受け取られるかどうかの信号にあたる（Claude の読み替え）。信頼（他者へ向かう）と心理的安全性（自分が受け取られる）を二つの向きとして書く足場になる。

---

## 8. Edmondson (2004) Psychological Safety, Trust, and Learning in Organizations: A Group-Level Lens

1. **書誌**: Edmondson, A. C. (2004). Psychological safety, trust, and learning in organizations: A group-level lens. In R. M. Kramer & K. S. Cook (Eds.), *Trust and distrust in organizations: Dilemmas and approaches* (pp. 239–272). New York: Russell Sage Foundation。ページは二次資料（引用文献表）から。Field Guide には 2003 年版の項もある（年の食い違い。Russell Sage の刊行は 2004 とするものが多い）。DOI は見つからない（Crossref の検索で該当なし）。
2. **照合の状態**: `未照合`。本文の経路は見つからなかった（末尾）。§7 の 2002 WP が同じ三つの対比の原文を持つので、内容の確認は 2002 WP で代えた。2004 の章の文面が 2002 と同じかは未確認。
3. **鍵の文**: なし（未取得）。
4. **読み**: [研究の一線] CIPD 2024 のレビュー（前セッションで本文照合済）などが同じ対比を 2004 や Edmondson & Lei 2014 を出典にして書く。対比の原文としては 2002 WP（§7）を引くのが確かめられた経路。
5. **pjdhiro の見立てとの関係**: §7 と同じ。

---

## 9. Edmondson & Lei (2014) Psychological Safety: The History, Renaissance, and Future of an Interpersonal Construct

1. **書誌**: Edmondson, A. C., & Lei, Z. (2014). Psychological safety: The history, renaissance, and future of an interpersonal construct. *Annual Review of Organizational Psychology and Organizational Behavior*, 1, 23–43. DOI 10.1146/annurev-orgpsych-031413-091305（Crossref・Semantic Scholar・OpenAlex で一致）。
2. **照合の状態**: `要旨照合済`（OpenAlex の要旨）。本文の一部は `二次資料のみ`（Taylor ら 2022 の二次。p.39 の一文と、測定についての指摘）。Annual Reviews は 403（2014 の巻は Unpaywall・OpenAlex とも closed）。
3. **鍵の文**:
   - 要旨: "people's perceptions of the consequences of taking interpersonal risks in a particular context such as a workplace"。1960 年代の先駆者に始まり、1990 年代から "renaissance"。研究を "individual, group, and organizational levels of analysis" に分けて見る。
   - 二次経由（Taylor ら 2022 による）: p.39 "the effects of PS become less pronounced over time as people become too comfortable with each other"。また、1999 年の定義と合わない測定が使われていることへの懸念を述べた、とされる。
4. **読み**:
   - [教科書] 2014 年のレビュー自体が、個人・集団・組織の三つの水準に研究を分けて整理している。概念が複数の水準で使われていることは、著者自身が前提にしている。
   - [研究の一線] 「居心地がよくなりすぎて効き目が薄れる」可能性を著者が書いている（二次経由）。
   - 歴史の節（Schein & Bennis → Kahn → Edmondson）の原文は確かめられていない。
5. **pjdhiro の見立てとの関係**: 「保身や日和見の安心」と、著者自身が書く「互いに居心地がよくなりすぎる」は重なる。重ならないのは、著者がそれを防衛や依存として読んでいるわけではなく、効き目の時間的な減衰として推測している点（二次経由で、原文の前後は未確認）。

### 9b. Edmondson & Bransby (2023) Psychological Safety Comes of Age

- 書誌: *Annu. Rev. Organ. Psychol. Organ. Behav.*, 10, 55–78. DOI 10.1146/annurev-orgpsych-120920-055217（Crossref）。Unpaywall では出版社の場所で OA（hybrid）。
- 照合: `本文照合済`（critic round 1 の後に更新。SURVEY-02 が保存した CC BY 4.0 の本文 `edmondson-bransby-2023-annrev.pdf`／`.txt` で照合。ページは誌面の柱「Psychological Safety Comes of Age NN」「NN Edmondson • Bransby」から取った）。最初の調べでは要旨（OpenAlex）だけで、本文の取得は bot 対策で止められていた。
- 鍵の文:
  - p.55（要旨）: "psychological safety—a state of reduced interpersonal risk"。四つの主題（物事を成し遂げる・学習行動・働く経験の改善・リーダーシップ）。仕事の複雑さと相互依存が増すほど意義が増す、と書く。
  - p.57（文献の選び方）: "a belief that an environment is safe for interpersonal risk-taking (Edmondson 1999, Kahn 1990)" に合わない研究は外した、と書く。
  - p.59: Edmondson の "shared belief among team members" に沿う集団の水準の扱いが最も多い（79 研究）。個人・組織の水準の尺度（Liang ら 2012・Baer & Frese 2003 など）も使われている（Table 3、定量 153 本の内訳＝個人 40・集団 79・組織 28・不明 6）。
  - p.69: 心理的安全性は "an emergent property of a social system" で、集団は "a shared interpersonal climate" を育てる、と書く。同じ頁に "despite modest variations in conceptualization and measurement"。
- 読み:
  - 最初の読み（要旨だけから）: [研究の一線] 2023 では「共有された信念」から「対人のリスクが下がった状態」へ、言い方が状態の側に寄っている。
  - 本文で確かめ直した読み: [研究の一線] 「状態」の語は要旨の一句（p.55）にとどまる。本文では、文献を選ぶ基準として「環境が対人のリスクを取っても安全だという信念」（p.57）を使い、集団の水準の「共有された信念」（p.59）、社会システムから現れる「共有された対人の風土」（p.69）と書く。定義の中心が状態の側へ移ったとは言えない。要旨の一句は、信念の中身（対人のリスクが下がっていること）を短く言ったものとも読める。最初の読みは、本文に照らすと言い過ぎだった。
  - [研究の一線] 著者自身が、構成概念と測定に「控えめなばらつき」があると認め（p.69）、定量の 153 本で個人・集団・組織の水準が混ざって測られていることを表にしている（p.59 Table 3）。概念の輪郭のゆれを、水準と測定の側で記録した一次資料として使える。

---

## 10. 概念の曖昧さ・水準・測定を論じたもの

### 10a. Newman, Donohue & Eva (2017) Psychological safety: A systematic review of the literature

1. **書誌**: *Human Resource Management Review*, 27(3), 521–535. DOI 10.1016/j.hrmr.2017.01.001（Crossref・Semantic Scholar・Monash 研究ポータルで一致）。
2. **照合の状態**: `要旨照合済`（Monash 研究ポータルの要旨）。Deakin のリポジトリ（Unpaywall が指す figshare 20862007）は "File(s) under permanent embargo" でファイルが無い。
3. **鍵の文**（要旨）: 先行要因・結果・調整変数の研究が "at different levels of analysis" で増えた、と書き、心理的安全性が "develops and influences work outcomes at different levels of analysis" ことを説明する理論の統合が要る、と書く。
4. **読み**: [研究の一線] 水準の混在（個人・チーム・組織）を、統合が要る課題として挙げている。測定の違い、先行要因と結果の区別の議論は本文未読で確かめられていない。
5. **pjdhiro の見立てとの関係**: 「何を指しているのかが曖昧な概念であること」の、学術の側の足場の一つ。どの水準で測り、何を原因・結果に置くかが研究ごとに違う、という形の曖昧さ。

### 10b. Frazier, Fainshmidt, Klinger, Pezeshkan & Vracheva (2017) Psychological Safety: A Meta-Analytic Review and Extension

- 書誌: *Personnel Psychology*, 70(1), 113–165. DOI 10.1111/peps.12183（Unpaywall・ODU Digital Commons の記録）。
- 照合: `二次資料のみ`（本ファイルの経路では）。SURVEY-02 §3 は ODU の出版社版をブラウザ内で読んでいる（`本文照合済（ブラウザ内で閲覧・ローカル本文なし・再照合不可）`）。本ファイルで試した経路は ODU（`digitalcommons.odu.edu/cgi/viewcontent.cgi?article=1018&context=management_fac_pubs`）・CORE（`core.ac.uk/download/217291252.pdf`）とも Cloudflare の確認画面、WebFetch は 403。MDSOAR は 400。
- 二次経由（Taylor ら 2022）: "there has been an inordinate focus in prior empirical work on examining the positive outcomes of psychological safety" を "Frazier et al. (2017, p. 532)" として引く。ただし p.532 は Frazier（pp.113–165）の範囲外で、Newman ら（pp.521–535）の範囲内。**未決・Newman 2017 の頁である可能性**。Taylor ら 2022 の文献表は Frazier を Pers. Psychol. 70, 113–165、Newman を Hum. Resour. Manag. Rev. 27, 521–535 と書く（`sport-2022-raw.txt` 493–495・626–628 行）。p.532 は Frazier の範囲に入らず、Newman の範囲に入る。同じ文の直前で Newman ら 2017 が引かれている（351–353 行）。Newman の本文が手に入っていないので、文がどちらのものかは決められない。最初の調べでは「Taylor らの出典表記の誤りの可能性が高い」と書いたが、未決に改める（critic round 1。BIB-check に残す）。
- SURVEY-02（効く条件）と重なるので、ここでは深入りしない。

### 10c. Taylor, Collins & Ashford (2022) Psychological Safety in High-Performance Sport: Contextually Applicable?

1. **書誌**: Taylor, J., Collins, D., & Ashford, M. (2022). *Frontiers in Sports and Active Living*, 4, 823488. DOI 10.3389/fspor.2022.823488（PDF の表紙・2022-05-09 公開）。
2. **照合の状態**: `本文照合済`（OA）。保存＝`sport-2022-fspor-823488.pdf`／`sport-2022.txt`・`sport-2022-raw.txt`（段組みの順に読める版）。
3. **鍵の文**:
   - 解釈が多様で、"interpretations in use may limit the practical application of the construct"（要旨）。
   - Vella ら (2022) のスポーツでの定義を引く: "the perception that one is protected from, or unlikely to be at risk of, psychological harm in sport"（Vella et al., 2022, p.15）。これにより "changed to an individual level construct" だと指摘する。
   - Bean ら (2020) の定義: "free from being physically harmed and accepted and respected"（p.40）。身体の安全と受容を一つの定義に入れている。
   - "there is a risk of conceptual leakage"。
   - Edmondson (2018, p.15) の定義（"neither the formal nor informal consequences of interpersonal risks … will be punitive"）と、Edmondson (2008, p.6) の 2×2 の「快適」の象限（"really enjoy working with each other, but do not feel challenged"）を引く。
4. **読み**:
   - [研究の一線] 英語圏の研究の中でも、心理的安全性が「心理的な害からの保護」「身体的に害されないこと」へ読み替えられ、集団の水準から個人の水準へ移っている例がある。これは査読論文が明示的に指摘している。
   - [Claude の読み替え] 「安全」が害からの保護の向きへ引っぱられる動きは、日本語の訳語だけの問題ではなく、英語の "safety" の語でも起きている。日本語の「安全」が物理的・生物的な安全へ引っぱる、という Claude の仮説（未検証）にとって、英語の側で同じ向きの動きがあることは、訳語だけが原因ではない可能性を示す。
5. **pjdhiro の見立てとの関係**:
   - 「心理的に安全であって、生物的に安全ではない。いつの間にか低次欲求だけをケアしてる」: 「心理的な害から守られる」（Vella）・「身体的に害されない」（Bean）への読み替えは、まさに pjdhiro が言う「低次欲求だけをケアする」向きの読み替えが、学術の定義の中でも起きている実例。重ならないのは、Bean の定義が身体の安全と同時に「受け入れられ尊重される」を入れている点で、生存の側だけに縮んでいるわけではない。

### 10d. O'Donovan, Van Dun & McAuliffe (2020)・O'Donovan & McAuliffe (2020)（医療チーム。二本）

1. **書誌**: (a) O'Donovan, R., Van Dun, D., & McAuliffe, E. (2020). Measuring psychological safety in healthcare teams: developing an observational measure to complement survey methods. *BMC Medical Research Methodology*, 20. DOI 10.1186/s12874-020-01066-z（論文番号は `未照合`）。(b) O'Donovan, R., & McAuliffe, E. (2020). A systematic review exploring the content and outcomes of interventions to improve psychological safety, speaking up and voice behaviour. *BMC Health Services Research*, 20. DOI 10.1186/s12913-020-4931-2（論文番号は `未照合`）。EuropePMC の書誌で DOI・年・誌名を確認。(a) の著者は三人（2026-11-10 に Crossref で確かめ、二人と書いていたのを直した。20(1), 論文番号 203）。
2. **照合の状態**: `本文照合済`（EuropePMC の全文 XML。PMC7387873・PMC7011517）。保存＝`odonovan-PMC*.xml`／`.txt`。
3. **鍵の文**:
   - (a) 調査票だけに頼ると "limited by self-report bias"。チームの水準の項目を個人の水準の評価に作り変えて使った（"Adapted Edmondson (1999)'s team level items to capture individual level assessment"）。
   - (b) 共有の意思決定が組織の規範になっていない組織では心理的安全性を育てにくい（O'Leary を引く）。介入はチームだけでなく組織の水準も狙うべき。
4. **読み**: [研究の一線] 測定の側の曖昧さ: チームの水準の構成概念を、個人への質問で測り、個人の水準でも使う。調査票の自己報告の限界。水準が測定の手続きの中で入れ替わる。
5. **pjdhiro の見立てとの関係**: 「何を指しているか曖昧」の、測定の側の実例。誰の感じを、どの水準で測っているかが研究ごとに違う。

---

## 11. Edmondson (2018) The Fearless Organization と Edmondson (2008) HBR の 2×2

1. **書誌**: Edmondson, A. C. (2018). *The fearless organization: Creating psychological safety in the workplace for learning, innovation, and growth*. Hoboken, NJ: Wiley（ISBN 9781119477242。O'Reilly の書誌）。Edmondson, A. C. (2008). The competitive imperative of learning. *Harvard Business Review*, 86(7/8), 60–67（巻号ページは `未照合（記憶）`）。和訳＝『恐れのない組織』英治出版、2021、野津智子訳（`未照合（記憶）`）。
2. **照合の状態**: `二次資料のみ`。本文の経路: O'Reilly の章ページは 403、出版社の公式抜粋は見つからない。検索で出た PDF（大学の電子書籍サイト・squarespace）は無許諾の複製の疑いがあるので開かなかった。二次＝Taylor ら 2022（本文照合済の論文の中の引用）、ブログ・書評。
3. **鍵の文**（二次経由）:
   - 2018 p.15（Taylor ら経由）: 形式的・非形式的な結果のどちらも "will be punitive" ではない、という信念。
   - 2008 p.6（Taylor ら経由）: 責任（accountability）の低い象限は「快適」で、人々は互いに働くのを楽しむが挑まれていない、"Nor do they work very hard"。
   - 「居心地のよさ（nice）ではない・性格ではない・信頼の別名ではない・基準を下げることではない」の四つ（ブログ経由の引用。原文未照合）。
4. **読み**:
   - [教科書] 心理的安全性と、責任・基準の高さを別の軸に置く 2×2（快適・学習・無関心・不安の四つ）は、2008 年の HBR に先に出て、2018 の本でも使われる、と二次資料は書く。どちらが初出かは本文で未確認。
   - [研究の一線] 2018 の定義は「罰を受けない」の言い方に重心が寄っている（Taylor らはこれを "dual effect" と呼ぶ）。1999 の段落にあった尊重・信頼・自分らしさの側が、定義の文からは見えにくくなっている、と読める。これは定義の一文だけの比較で、本の全体は未読。
5. **pjdhiro の見立てとの関係**:
   - 「保身や日和見の安心・安全は組織によくない」: 2×2 の「快適」の象限（安全は高いが基準が低い）は、この見立てと重なる。重ならないのは、Edmondson はそれを基準・責任の側が低いことで説明し、防衛や依存として説明していない点。pjdhiro の見立ては、同じ象限を防衛機制の側から読む、別の切り口になる。
   - 「低次欲求だけをケアしてる」: 2018 の定義の言い方（罰を受けない）は、原典の著者自身の言い方の中でも、罰の不在の側へ重心が動いていることを示すかもしれない（要本文照合）。

---

## 12. 日本語訳をめぐる記録

1. **書誌**（照合したもの）:
   - 山内桂子 (2021). 現場のチームワークを高める心理的安全性. *安全工学*, 60(1), 9–14.（J-STAGE PDF）
   - 山口裕幸 (2020). 組織の「心理的安全性」構築への道筋. *医療の質・安全学会誌*, 15(4), 366–371.（J-STAGE PDF）
   - 大塚泰正・落合由子 (2025). 心理的安全性と産業保健における意義. *産業医学レビュー*, 38(1), 53–77.（J-STAGE PDF）
   - 石井遼介 (2022-01-24). 「報告をしてもしなくても､結局怒られる」日本の大企業の生産性が低くなる根本原因. PRESIDENT Online（一般誌の記事・WebFetch で確認）。
   - 西尾泰和「心理的安全性の意味の歪み」Scrapbox（個人のメモ・日付なし）。
   - 和訳書: エドモンドソン『チームが機能するとはどういうことか』野津智子訳、英治出版、2014（ISBN 9784862761828。紀伊國屋の書誌で確認）。
2. **照合の状態**: 学会誌 3 本は `本文照合済`（保存＝`jp-*.pdf`／`.txt`）。PRESIDENT と Scrapbox は `二次資料のみ`（WebFetch の抜粋）。和訳書の本文は未見。
3. **鍵の文**:
   - 山内 2021: Teaming の和訳書の定義「関連のある考えや感情について人々が気兼ねなく発言できる雰囲気」を引き、「この訳書では心理的安全と訳出されているが，本稿では，心理的安全性と記す」と注記する。日本で広く注目されたきっかけを Google 社の 2012 年からのプロジェクトとする。
   - 山口 2020: 集団の水準の概念を逸脱した捉え方による研究も多数行われ「少なからず混乱を生んでいる」。チームの心理的安全性の構築は「単に安心して発言できる安寧な環境を整えるというだけでなく」、互いに学び合うことにも意味がある。信頼は特定の相手に向かう個人の認知、心理的安全性は集団の状態、と区別する。
   - 大塚と落合 2025: Edmondson 1999 の定義を「チームメンバーが安心して個人間のリスクテイク行動に出られるという共有された信念」と訳す（原文の "safe for interpersonal risk taking" に「安心して」をあてている）。Schein と Kahn を個人の水準、Edmondson をチームの水準と整理する。
   - 石井 2022: 「安全」という言葉を日常的な意味でそのまま捉え、「何もしなくても安全」「努力しなくても安全」と解したことが誤解の原因、とする。
   - 西尾（Scrapbox）: 本来は不穏なことも言い合える安全性なのに、不穏なことを言わずに安全を確保する、という意味に歪んだ、とする。引用された他者の投稿に「『安全』としてしまったのがミスだった気も」とある。
4. **読み**:
   - [研究の一線] 訳語の初出と訳者の選択の理由を書いた資料には当たらなかった。最初の和訳書（2014）は「心理的安全」で、「性」の付いた形は後から定着したらしい（山内 2021 の注記から。初出は未確認）。
   - [研究の一線] 学術の日本語の解説では、原文の "safe" に「安心して」をあてる訳が使われている（大塚と落合 2025）。日本語の書き手が、原典の中身を「安心」の語で受け取っている例。
   - [Claude の読み替え]（critic round 1 で足す）状況証拠として残しておく点がある。照合した日本語の学術解説 3 本の載った先は、安全工学（山内 2021）・医療の質と安全（山口 2020）・産業保健（大塚と落合 2025）の雑誌で、どれも事故や健康被害の防止を扱う分野。日本語の「心理的安全性」が、身体と事故の安全を扱う場で受け止められてきた、という状況は見える。日本語の用例を集めたコーパス調査はしていないので、次の項の「直接支持する資料には当たらなかった」はそのまま残す。
   - [Claude の読み替え] 日本語の「安全」が物理的・生物的な安全の向きへ引っぱる、という仮説を直接支持する資料には当たらなかった。当たったのは、「安全」の日常的な意味が「何もしなくても安全」「ぬるま湯」の向きへ引っぱる、という指摘（石井 2022・SmartHR・freee などの実務記事）。引っぱられる向きは、身体の安全よりも、努力や不穏さが無い状態の側だった。物理的・生物的な安全への引っぱりは、むしろ英語のスポーツ研究の定義（§10c の Vella・Bean）で起きている。
5. **pjdhiro の見立てとの関係**:
   - 「安心のことを差してないか」: 日本語の学術解説が原文の "safe" を「安心して」と訳している例（大塚と落合 2025）は、この見立てと重なる。山口 2020 の「単に安心して発言できる安寧な環境を整えるというだけでなく」は、安心の語を使いつつ、それだけでは足りないとする線で、保身・日和見の安心と原典を分ける pjdhiro の見立てとも重なる。
   - 「いつの間にか低次欲求だけをケアしてる」: 日本語の実務記事に見える誤解の向き（何もしなくても安全・ぬるま湯）は、生存の側（罰の不在。罰の不在を生存の側に置くのは Claude の当てはめ）へ縮む向きと、努力の不在へ流れる向きの二つが混ざっている。前者は pjdhiro の「低次欲求」の読みと重なり、後者は「保身・日和見」の読みと重なる。

---

## 13. 横断して見えたこと（三段の印つき）

- [教科書] 原典の系譜は、Schein & Bennis 1965（変化と学習の条件・個人）→ Schein 1992/1993・1995（学ぶ不安と生存の不安・自己の同一性と能力感を守る）→ Kahn 1990（関与の条件・自己像と地位とキャリア・個人）→ Edmondson 1999（チームで共有された信念）→ Edmondson 2002（信頼との三つの違い）→ Edmondson & Lei 2014（個人・集団・組織の三水準）。それより早い用例に Rogers 1954（創造性の条件・無条件の受容）がある。
- [研究の一線] どの原典も、守られるものを自己（identity・self-worth・self-image・自分らしさ・仮面を外せること）の側に置いている。身体の安全を指すものは無い。
- [研究の一線] 曖昧さは三つの形で記録されている。水準の混在（Newman ら 2017・Edmondson & Lei 2014・山口 2020・大塚と落合 2025）、測定の水準の入れ替わりと自己報告（O'Donovan, Van Dun & McAuliffe 2020）、害からの保護への読み替え（Taylor ら 2022 が示す Vella 2022・Bean 2020）。
- [Claude の読み替え] 罰の不在だけに縮む読みは、現場の誤解だけでなく、英語の研究の定義の動き（スポーツ）と、原典の著者自身の後年の定義の言い方（2018 の "punitive"）にも見える。縮みは、現場・訳語・研究・著者の言い方のどこか一か所で起きたというより、複数の場所で同じ向きに起きているかもしれない（吟味待ち）。

---

## 書誌の表

| 著者 | 年 | 題 | DOI／識別子 | 照合の状態 | 保存先（`.cache/raw/psychological-safety/`） |
|---|---|---|---|---|---|
| Edmondson | 1999 | Psychological safety and learning behavior in work teams | 10.2307/2666999 | 本文照合済 | `edmondson-1999-psychological-safety-learning.pdf`・`edmondson-1999.txt` |
| Schein & Bennis | 1965 | Personal and organizational change through group methods | IA `personalorganiza0000sche` | 二次資料のみ（IA 全文検索の断片） | なし（貸出本） |
| Schein | 1992 (WP)／1993 (SMR 34:85–92) | How can organizations learn faster? | MIT WP 3409-92・handle 1721.1/2399 | 本文照合済（WP 版） | `schein-1992-green-room-swp3409.pdf`・`.txt` |
| Schein | 1995 | Organizational and managerial culture as a facilitator or inhibitor of organizational transformation | MIT WP 3831・handle 1721.1/2581 | 本文照合済 | `schein-1995-swp3831.pdf`・`.txt` |
| Coutu | 2002 | The anxiety of learning (HBR) | — | 二次資料のみ | なし |
| Rogers | 1954／1961 | Toward a theory of creativity | IA `onbecomingperson0000carl`（1961 再録） | 二次資料のみ（IA 全文検索の断片） | なし（貸出本） |
| Kahn | 1990 | Psychological conditions of personal engagement and disengagement at work | 10.2307/256287 | 二次資料のみ（p.705／708 食い違い） | なし |
| Edmondson | 2002 (WP)／2003 (章) | Managing the risk of learning | HBS WP 02-062 | 本文照合済（WP 版） | `edmondson-2002-managing-risk-of-learning-hbs-wp02-062.pdf`・`edmondson-2002-wp.txt` |
| Edmondson | 2004 | Psychological safety, trust, and learning in organizations: A group-level lens | なし（Russell Sage） | 未照合 | なし |
| Edmondson & Lei | 2014 | Psychological safety: The history, renaissance, and future of an interpersonal construct | 10.1146/annurev-orgpsych-031413-091305 | 要旨照合済（本文の一部は二次資料のみ：Taylor 2022 経由） | なし |
| Edmondson & Bransby | 2023 | Psychological safety comes of age | 10.1146/annurev-orgpsych-120920-055217 | 本文照合済（SURVEY-02 の保存分） | `edmondson-bransby-2023-annrev.pdf`・`.txt` |
| Newman, Donohue & Eva | 2017 | Psychological safety: A systematic review of the literature | 10.1016/j.hrmr.2017.01.001 | 要旨照合済 | なし |
| Frazier et al. | 2017 | Psychological safety: A meta-analytic review and extension | 10.1111/peps.12183 | 二次資料のみ（SURVEY-02 は本文照合済（ブラウザ内で閲覧・ローカル本文なし・再照合不可）） | なし（`frazier-2017-CLOUDFLARE-BLOCK-not-the-paper.html` は本文でない） |
| Taylor, Collins & Ashford | 2022 | Psychological safety in high-performance sport | 10.3389/fspor.2022.823488 | 本文照合済 | `sport-2022-fspor-823488.pdf`・`sport-2022*.txt` |
| O'Donovan, Van Dun & McAuliffe | 2020 | Measuring psychological safety in healthcare teams | 10.1186/s12874-020-01066-z | 本文照合済 | `odonovan-PMC7387873.*` |
| O'Donovan & McAuliffe | 2020 | A systematic review … interventions to improve psychological safety | 10.1186/s12913-020-4931-2 | 本文照合済 | `odonovan-PMC7011517.*` |
| Edmondson | 2018 | The fearless organization | ISBN 9781119477242 | 二次資料のみ | なし |
| Edmondson | 2008 | The competitive imperative of learning (HBR) | — | 二次資料のみ | なし |
| 山内桂子 | 2021 | 現場のチームワークを高める心理的安全性（安全工学 60(1):9–14） | J-STAGE safety/60/1/60_9 | 本文照合済 | `jp-safety-60-1-9.*` |
| 山口裕幸 | 2020 | 組織の「心理的安全性」構築への道筋（医療の質・安全学会誌 15(4):366–371） | J-STAGE jsqsh/15/4/15_366 | 本文照合済 | `jp-jsqsh-2020-15-4-366.*` |
| 大塚泰正・落合由子 | 2025 | 心理的安全性と産業保健における意義（産業医学レビュー 38(1):53–77） | J-STAGE ohpfrev/38/1/38_53 | 本文照合済 | `jp-ohpfrev-2025-38-1-53.*` |
| 石井遼介 | 2022 | PRESIDENT Online の記事 | president.jp/articles/-/53934 | 二次資料のみ | なし |

## 取れなかったもの（試した経路）

- **Kahn 1990 本文**: ①Semantic Scholar（openAccessPdf なし・CLOSED）②Unpaywall（is_oa false）③OpenAlex（closed・どのリポジトリにも全文なし）④CORE 検索（Cloudflare の確認画面）⑤WebSearch の filetype:pdf（Scribd の無許諾らしい複製と ProQuest のプレビューだけ。開かなかった）⑥Campbell Institute の解説 PDF（nsc.org へのリダイレクト先が HTML）⑦Semantic Scholar の snippet 検索（429）。→ pjdhiro に図書館経由か AOM の購読で本文を見てもらう。確かめたいのは p.705 と p.708 のどちらに定義の文があるか。
- **Edmondson 2004 章**: ①Crossref 検索（DOI なし）②Google Books API（1 日の上限で 429）③HBS の Publication Files（2002 WP は見つかったが 2004 版は無し）④WebSearch（Field Guide は ResearchGate を指す。ResearchGate は叩かない）⑤Semantic Scholar 検索（429）。→ ResearchGate のブラウザ保存を pjdhiro に頼む。2002 WP と文面が同じかを確かめる。
- **Edmondson & Lei 2014 本文**: ①Annual Reviews（403。繰り返さない）②Unpaywall（closed）③OpenAlex（closed）④Semantic Scholar（CLOSED）⑤Field Guide（リンク先は第三者のサイトの複製で、取得は止められた）。→ pjdhiro にブラウザ保存を頼む。歴史の節と三水準の節を読む。
- **Edmondson & Bransby 2023 本文**: Unpaywall は出版社で OA と出るが、取得は bot 対策で止められた。→ pjdhiro にブラウザ保存を頼む（OA なので手で開けるはず）。その後 SURVEY-02 が CC BY 4.0 の本文を保存したので、§9b は本文で照合し直した。
- **Newman ら 2017 本文**: ①Unpaywall→figshare（Deakin、permanent embargo でファイルなし）②Monash 研究ポータル（要旨のみ）③WebSearch（無料 PDF なし）④Semantic Scholar の OA リンクは同じ figshare。→ 図書館経由。
- **Frazier ら 2017 本文**: ①ODU Digital Commons（Cloudflare の確認画面・WebFetch 403）②CORE（同）③MDSOAR（400）④Unpaywall（MDSOAR を指す）。→ pjdhiro にブラウザで ODU から保存を頼む（gold OA とされる）。SURVEY-02 と共有。
- **Edmondson 2018・2008**: O'Reilly（403）、出版社の公式抜粋は見つからず、無許諾の疑いのある複製は開かなかった。→ 本を手元で見るか、図書館。確かめたいのは p.15 の定義、2×2 の図のページ、「居心地のよさではない」の四つの否定の原文。
- **Schein & Bennis 1965 のページ**: IA の貸出本は djvu テキスト 401・inside 検索不可。全文検索の断片だけ。→ 貸出で開いてページを確かめる（pjdhiro の IA アカウント）。
- **Coutu 2002 HBR**: HBS Working Knowledge の転載は 403。
- **訳語の初出**: 「心理的安全性」の初出と訳者の選択理由を書いた資料は見つからなかった。

## 次に調べると効くこと

1. Schein 1985『組織文化とリーダーシップ』（Edmondson 2002 が「learning anxiety」の出典として挙げる）と Schein の 1990 年代の諸論文で、learning anxiety／survival anxiety がどこで初めて名付けられたか。1992 は Anxiety 1／2、1995 は Learning／Survival。名付けの移り変わりを押さえると、pd の「生存と信頼」との対応を、Schein のどの版と照らすかが決まる。
2. Kahn 1990 の本文で、p.705 と p.708 のどちらに何があるか。あわせて、Kahn が安全をどの経験（関係・集団の力学・管理のスタイル・組織の規範）から導いたか。
3. Edmondson 2018 の p.15 の定義の前後と、2×2 の初出（2008 HBR か）。著者自身の定義の言い方が「罰を受けない」の側へ動いたかどうかの確認（§11 の読み）。
4. Vella ら 2022（スポーツの系統的レビュー）の本文で、個人の水準・害からの保護への読み替えの理由。「安全」の語が害からの保護へ引っぱる動きの、英語の側の一次資料。
5. 日本語の「心理的安全」（2014 和訳書）から「心理的安全性」への移り変わりと、Google re:Work 日本語版の訳語。訳者・編集者が「安心」を検討したかの記録。
6. Rogers 1954 の初出誌の本文と、Rogers → Schein & Bennis のつながり（1965 の本が Rogers を引いているか）。安心の側の系譜が Edmondson の系譜とつながっているかが分かる。
