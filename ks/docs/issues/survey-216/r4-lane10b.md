# r4-lane10b: デザイン側のアブダクション再定義と、デザイン思考の定義文（位14）
## 0. 読んだローカル資料（パス）
- `docs/issues/ISS-216-survey-brief-r4.md`（§0・§1 位14・§2 レーン 10・§3）
- `docs/issues/ISS-216-outline-v0.md` 節 9（差分の 5 観点 ①〜⑤）
- `docs/issues/survey-216/r3-lane6.md`・`ISS-216-candidate-survey.md`（Cross 1982・Lawson は照合済みのため取り直さない。Dorst・Brown・Roozenburg・Kolko を grep → Dorst 2015 の frame creation の行のみ、定義文は無し）
- `docs/drafts/kesson-academic-ja-v0.md` §2（欠損・抱持・駆動）
- 確認状況の凡例: 本文○＝原典本文を読んだ／別版○＝同著者の別の版を読んだ／書誌のみ／未取得

## 1. 穴と、何を照合すれば狭まるか（3 行）
位14: アブダクションとの違い、もしくは再定義になるかもしれない。デザイン思考の一部か本質に触れていると思って出発した。
照合 1: デザイン側のアブダクションの定義文で、起点が命題か感覚か／価値が既知か／起点と仮説のあいだに保つ段が書かれているか。
照合 2: business 層のデザイン思考の定義文が、何を起点・終点とし、価値をどう置いているか。

## 2. 原典ごとの報告

### ① Dorst 2011 "The core of 'design thinking' and its application" *Design Studies* 32(6): 521-532
- 確認状況: **2011 の雑誌版は本文未取得**（ScienceDirect 閉架。UTS リポジトリ opus.lib.uts.edu.au/handle/10453/18751 は閉架と表示）。代わりに**同著者の別版**を本文○: Dorst 2010 "The Nature of Design Thinking", in *Proceedings of DTRS8*（Sydney, 19-20 Oct 2010）pp.131-139 前後。UTS リポジトリ `opus.lib.uts.edu.au/bitstream/10453/16590/1/2010000367OK.pdf`。以下の逐語は**この 2010 版**のもの。2011 版で同じ文かは未確認（別版である点に注意）
- 書誌: 同 §2 "The Challenge: Abduction"、proceedings p.132-133（脚注の頁番号 131/132 から推定。PDF の文字化けは +29 のずれで復号して確認）
- 原文（等式）: "WHAT (thing) + HOW (working principle) leads to RESULT (observed)"（deduction／induction の設定。induction は "???" が HOW の位置）。abduction は "WHAT (thing) + HOW (scenario) leads to VALUE (aspired)"
- 原文（abduction の共通点）: "Abduction comes in two forms—what they have in common is that we actually know the value that we want to achieve."
- 原文（abduction-1）: "In the first form of Abduction-1, that is often associated with 'problem solving', we also know the 'how', a 'working principle' and how that will help achieve the value we aim for. What is still missing is a 'what' (an object, a service, a system), so we set out to search for a solution."（等式: "??? + HOW leads to VALUE"）
- 原文（abduction-2）: "In the second form of Abduction-2 we ONLY know the end value we want to achieve." ／ "So the challenge is to figure out 'what' to create, while there is no known or chosen 'working principle' that we can trust to lead to the aspired value."（等式: "??? + ??? leads to VALUE"）
- 起点: 既知の value（望む結果）。abduction-1 は value と how が既知、abduction-2 は value だけが既知。**命題化された事実（Peirce の surprising fact）ではなく、望む価値が起点の位置に置かれている**。感覚・違和感への言及は §2 には無い（同書の別所に "intuition of what will work" あり: 下記）
- 終点: what（物・サービス・システム）と how（working principle）。abduction-2 では両方を作る。その組が frame
- 価値の既知性: **与えられている**（"we actually know the value"／"aspired"）
- 保つ段: §2 の定義文には書かれていない。後続の記述に "playing around with ideas, tossing up possibilities (proposals)" と、"building up a repertoire of experiences that help them developing an intuition of what will work in the problematic situation" がある。後者は経験の蓄積であり、起点の違和感を保つ段としては書かれていない（読みは両方ありうる）
- 草案 v0.2 との近い点: 「問題」として与えられた状況に探索が向かう点／frame を作る段が「作る」側で、既存の working principle に頼らない点（abduction-2）／試行を重ねて直観を育てる記述（"intuition"）が出てくる点
- 草案 v0.2 との違う点: 起点が「望む価値」で、欠損の「ゼロと定義され無意味・無価値と扱われたもの」ではない／違和感（言語化できない感覚）が定義に入っていない／抱持（問いとして抱え保つ）に当たる段が定義文にない／終点が実行可能な what＋how の提案で、探索の向かう先は価値に向けて既に決まっている
- conf: high（2010 版の逐語）／2011 版との同一性は **low**（未取得）

### ② Brown 2008 "Design Thinking" *Harvard Business Review* 86(6): 84-92（June 2008）
- 確認状況: 本文○（Waterloo の授業用に置かれた HBR 誌面 PDF、10 頁。2 段組のため抽出が混ざるが当該文は連続で読める。誌面頁の厳密な特定は未）
- 原文（定義文）: "Put simply, it is a discipline that uses the designer's sensibility and methods to match people's needs with what is technologically feasible and what a viable business strategy can convert into customer value and market opportunity."（"it" は直前の "Design thinking"）
- 原文（人物像・Empathy）: "Great design thinkers observe the world in minute detail. They notice things that others do not and use their insights to inspire innovation."／"…imagine solutions that are inherently desirable and meet explicit or latent needs."
- 原文（Integrative thinking）: "…exhibit the ability to see all of the salient – and sometimes contradictory – aspects of a confounding problem and create novel solutions…"
- 起点: 人々のニーズ（needs。explicit または latent）と、技術的に可能なこと、事業として成立すること、の三つの突き合わせ。定義文に違和感・驚き・anomaly の語は無い
- 終点: customer value と market opportunity に変換できるもの。"novel solutions"
- 価値の既知性: 価値は終点側に置かれ、needs との match で決まる。「望む価値が与えられている」とは書いていない。latent needs の語は、まだ表に出ていない必要の存在を認めている
- 保つ段: 定義文には無い。"Integrative thinking" は矛盾する側面を見る能力として書かれるが、「保つ」とは書かれていない。本文に "hunch"（プロジェクトの出だし）の語が 1 件（1 件のみ確認、文脈未精査）
- 草案 v0.2 との近い点: "latent needs"・"notice things that others do not"・矛盾する側面を見る能力が、「無意味・無価値と扱われたものに意味があった」と読める余地／「観察して insight を得る」が、体験の側（違和感に気づく）に隣り合う
- 草案 v0.2 との違う点: 定義の主眼が match（ニーズ・技術・事業の三つの適合）で、ゼロとされたものを拾う構図ではない／違和感・抱持に当たる語が定義に無い／駆動に当たる記述は、定義文では事業価値への変換として書かれている（好奇心の語は確認した範囲に無い。全文精査はしていない）
- conf: high（定義文の逐語）／誌面頁は medium

### ③ Roozenburg 1993 "On the pattern of reasoning in innovative design" *Design Studies* 14(1): 4-18
- 確認状況: **Roozenburg 1993 本文は未取得**（Elsevier 閉架。UTS／RCA／著者サイトで PDF 見つからず）。**二次○**: Kroll & Koskela 2015 "On Abduction in Design", in *Design Computing and Cognition '14*, Springer, pp. 327-344（Huddersfield eprints 25229、本文○）が Roozenburg [4]=1993 を要約。「innoduction」の語は Kroll & Koskela が Roozenburg & Eekels 1995 *Product design: fundamentals and methods* ch.4 [17] に帰している（1993 の語かは未確認）。Kolko 2010 は代替候補だったが、取得先（paul.zhdk.ch）がログイン画面で本文未取得
- 原文（Kroll & Koskela による要約。**Roozenburg の逐語ではない**）: "the only given is a desired result, and both the rule and the cause need to be discovered"／"a rule to be inferred first, IF p THEN q"（pattern (4)）／Roozenburg が explanatory abduction を診断・trouble-shooting 向きと位置づけ、設計の核は別型で "innovative abduction" と "innoduction" と呼んだ、という記述
- 起点: **desired result（q。purpose／function）**。pattern (4) では "q is a given fact, a desired result"（Kroll の記述）。命題化された観察事実ではなく、望む結果が与えられる
- 終点: p（原因・form＋use）と、p→q の規則（先に推論される）
- 価値の既知性: 与えられている（Kroll の要約。Roozenburg の kettle の例では function "boil water" が given）
- 保つ段: 二次の範囲では書かれていない。Kroll & Koskela は Roozenburg の一段推論を、function→mode of action→way of use と form の二段（double innovative abduction）に直す提案をしている
- 同二次が書く Dorst 2011 との関係: abduction-1＝explanatory abduction の型、abduction-2＝Roozenburg の innoduction に比べうる（"comparable"）。同論文は Dorst が framing を "a form of induction" と呼ぶ点を「Peirce と食い違う」と注記している
- 草案 v0.2 との近い点: 既存の説明型の枠（驚き→説明）と違う型を立てる点（位14 の「演繹、帰納など他とは違うもの」の問いと同じ向き）
- 草案 v0.2 との違う点: 起点が desired result で、ゼロとされたものへの違和感ではない／違和感・抱持に当たる語が二次の範囲に無い／探索の向きは「望む結果から手段へ」
- conf: **low**（二次のみ。Roozenburg の逐語は未取得）

## 3. 見つからなかったこと（探した先を書く）
- Dorst 2011 の雑誌版本文: ScienceDirect は閉架、UTS リポジトリ handle 10453/18751 も閉架表示。2010 版（DTRS8）で代替した
- Roozenburg 1993 本文・Kolko 2010 本文: Elsevier 閉架／paul.zhdk.ch はログイン画面（HTML）で PDF でなかった。paperingest.jspadams.duckdns.org にも Kolko の写しがあるが出所不明のため使わず
- Dorst 2011 が "value（望む結果）が与えられている" と書いているか: **2010 版では書いている**（"we actually know the value that we want to achieve"）。2011 版の逐語は未確認

## 4. →as#149 候補
- なし（本レーンの範囲では気づきの定義は出ない）

## 5. 残課題
- Dorst 2011 本文（abduction-1／2 の定義文が 2010 版と同じ語か）
- Roozenburg 1993 の innovative abduction 定義文の逐語、innoduction の語が 1993 か 1995 か
- Kolko 2010 の abduction 定義文（本文を取れた経路が要る）
- Brown 2008 の誌面頁（hbr.org の公式ページか紙）
