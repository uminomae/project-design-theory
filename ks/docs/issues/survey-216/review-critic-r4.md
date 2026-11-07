# Phase 2 REVIEW（critic・round 4）— critic 報告（原文転記・2026-11-02）

> Main 注: team-critic の最終報告をそのまま転記。入力は `r4-lane1.md`〜`r4-lane10.md`・`r4-lane10b.md`・ブリーフ r4・統合表 v4・棚卸し・`review-critic-r3.md`。critic は 15 ターン上限で止まったため、Main が「追加照合なしで手元の材料から書く」と指示して完了させた（未検査は末尾に列挙あり）。**Main の処置**: §4 の major 2 件（Koriat 行・Tillich 行）と、v5 に影響する minor（Dorst 2010 見出し・Sadler-Smith 2015・lane9「未確認」・lane8 未訪問の列挙・Kuhn ch.VI の二次抜粋注記・IA／csulb の到達の揺れ・「3 本上限」の出所・Bion p.308 と 1959 論文の重なり・Frankl の版表記・「最も近い形」の言い方）を統合表 v5 §9 に反映。草案 v0.3 4-1 の「近い形が三つ」を「近い形の例が三つ」に。lane ファイルは記録として据え置き。

# Phase 2 REVIEW（critic・round 4）— 11 本（r4-lane1〜10・10b）

**critic**: team-critic（READ-ONLY・ファイル書き込みなし）／入力: `docs/issues/ISS-216-survey-brief-r4.md`・`docs/issues/survey-216/r4-lane1.md`〜`r4-lane10.md`・`r4-lane10b.md`・`review-critic-r3.md`（形式の見本）・統合表 v4・棚卸し
**Main 注**: 調整役の指示で、追加照合は止めて手元の材料だけで書いた。**未検査**は末尾に列挙した。

## 1. 独自照合の結果

**報告どおりだったもの**
- Koriat 2000（前セッションのスクラッチパッドに PDF 由来のテキストが残っていた）。lane1 の引用は全て在り、頁も一致した。
  - p.160 "not inherently valid. Rather, their validity is a function of the diagnostic value…" と "dissociated to the extent of being negatively correlated"。
  - p.163 "predictive validity of the mnemonic cues… rather limited or even misleading"。
  - p.157 Hart 紹介の "save the time and effort"。
  - p.159 の memory illusions。
- Peirce MS L75（`l75.txt`）: surprise を emotion とする文、"no such psychological doctrine can be admitted into critical logic"、"merely weeds out the unfit"、"only concludes interrogatively"、"Idle interrogations" が全て在る。
- Peirce 1903 CP 5.181 の "like a flash"（peirce.txt）が在る。
- Peirce 1908 "Retroduction does not afford security."・"entirely rejected"・"guessing right the first time" が在る。
- Dewey 1910（Gutenberg #37423 のテキスト）の lane8 の逐語が全て在る。
  - 五段、"frequently fuse into one"、"undefined uneasiness and shock"、"suspended judgment"。
  - "somewhat painful"、"maintain the state of doubt"、"The easiest way is to accept any suggestion…"、"queer, strange, funny, or disconcerting"。
- Maia & McClelland 2004（`maia.txt`・`maia2.txt`）: "operationalize conscious knowledge as knowledge that can be reported verbally"、Level 0/1/2 と "closely related"、"ruled out nonconscious"、"see no evidence to support this conclusion"、"much more knowledge"、"to appeal to nonconscious somatic markers" が在る。p.16079 の頁は未確認。
- ブリーフとの対応: pjdhiro の原文（問3-5 への答え・定12・抱11・抱13 の引用）は、引用符の中で一致した。
- 禁止事項の機械検査: 定義番号なし、「保持」なし、「棄却される誤差」「捨てられる誤差」なし、cos 90°・虚軸へのタグなし、全 11 本が 120 行以内（最大 99 行）。
  - 「棄却」は仮説（Peirce）に使われており、禁止語の用法ではない。
  - `[M]` は lane4:67 の Bataille の読みにだけ付き、虚軸には付いていない。

**ずれ**
- **lane1:21・:81** — Koriat は感じを肯定的に価値づける文を書いている。lane1 は「無かった」とする。詳細は issues の major 1。
- **lane4:15** — Tillich の頁の帰属が r3-lane1 とずれている。詳細は major 2。
- lane2:47（Douglas "1966:44"）と lane4:55（"2009 Routledge 版 p.44"）— 同じ p.44 に別の版名が付いている。
- lane8:31 — "Sadler-Smith 2016" だが、DOI 10.1080/10400419.2015.* は 2015 を示す。
- lane5:23 — 「頁はブリーフでは 403-420」とあるが、ブリーフに頁はない。
- 参照先へ届いたかの記述が lane 間で食い違う。
  - Internet Archive は、lane2 が「サンドボックスで接続不可」、lane3 が「貸出で 401」（到達はしている）と書く。lane5・lane10 は「使っていない」、lane7 は「指示により不使用」、lane8 は「運用ルールにより使っていない」。ブリーフ §0 scope は IA を許可先に挙げている。
  - csulb は、lane2 が WebFetch で取得できたと書き、lane6 は証明書エラーで不可と書く。
- lane1 は Dewey を「未取得」とするが、lane8 が同じ Gutenberg #37423 を通読している。lane1 の問い④（示唆が棄てられる場合）の一部は、lane8 の (v) "acceptance or rejection" と ch.1 の "corroborate or to refute the first suggestions" で埋まる。

## 2. review

```yaml
review:
  from: "critic"
  phase: "2"
  round: "4"
  consensus: CONSENSUS-3   # critical なし。major 2 件と minor を v5 転記時に適用すれば進行に支障なし
  questions:
    - type: probing
      target: "r4-lane1.md:21,81 Koriat「感じを肯定的に価値づける箇所は無かった」"
      content: "grep に使った語（illusion／misleading／incorrect／inaccura）は誤りを探す語で、肯定的な価値づけを探せない。p.161〜163 の該当文をどう扱うか"
      verification: [V3, V4]
    - type: clarifying
      target: "r4-lane4.md:15 Tillich 頁 ch.2 pp.54-57"
      content: "r3-lane1 は pp.54-57 を 'Despair is an ultimate or boundary-line situation' の文に付け、'anxiety of meaninglessness…' の文は「頁未確認」とした。lane4 は再掲と称して両文を pp.54-57 に置いた。頁の根拠は何か"
      verification: [V3]
    - type: structuring
      target: "r4-lane10b.md:46,51 と r4-lane10.md:32 — Dorst abduction-1 と Peirce の二つの式"
      content: "Dorst abduction-1（how と value が既知で what を探す）は形式上、Peirce 1878 の「規則と結果から事例を推論」に並ぶ。lane10b は Kroll & Koskela 経由で explanatory abduction（5.189 型）に並べている。どちらに並べるかは未決のまま、両方を v5 に置けるか"
      verification: [V5]
    - type: challenging
      target: "r4-lane9.md:50 / r4-lane8.md:54 の「見つかっていない」"
      content: "lane9 は 3 本とも本文未取得で、範囲は「読んでいない」。「見つかっていない」は「未確認」と読み分けられるか。lane8 は段階モデル 7 候補のうち 3 本で、残り（Gendlin 六段・Schön・Bion・Peirce）が未訪問と列挙されていない"
      verification: [V4]
    - type: clarifying
      target: "r4-lane6.md:7・lane7.md:6・lane9.md:12 の「3 本」上限"
      content: "ブリーフに 3 本上限の記述はない。起動プロンプト由来なら、v5 に「3 本で打ち切り。残りは未調査」と書いてよいか"
      verification: [V3]
    - type: probing
      target: "r4-lane10.md:35 と :67（1878 の動詞）"
      content: "「形成か採用かは言えない」とするのは誠実。この句は一般に CP 2.624 で引かれる文で、動詞は 'adopt' だったと記憶する（本調査では未照合）。取得できれば lane10 の終点欄が埋まる"
      verification: [V3]
  issues:
    - severity: major
      target: "r4-lane1.md:21,81（Koriat 2000）"
      description: "L21「価値の論は読んだ範囲に無い」と L81「全文の grep の範囲では、感じを肯定的に価値づける箇所は無かった」は、同じ論文の次の文と合わない。p.161 'These reported dissociations are probably the exception rather than the rule, because the heuristics… tend to have some degree of validity, by and large. Nevertheless… self-evident intuitions can be wrong!'／p.162 'subjective feelings serve as a potent basis for behavior'／p.163 'the important function of the crossover mode is that of expanding the range of actions over which a person has some degree of control'。lane1 自身も L21 で p.163 の「制御行為の基になる」を書いている。さらに grep 語（illusion／misleading／incorrect／inaccura）は誤りを探す語で、肯定的な価値づけの有無は探せない。「外れる頻度は例外的」という Koriat の評価は穴 1 に直接かかわる。なお、外れの名称は本文には無いが、参考文献に 'Illusions of knowing'（Koriat 1998a）・'illusory tip-of-the-tongue states' がある。"
      suggestion: "L21 を「外れた感じに価値があるとは書かない。一方、感じは概ね妥当（p.161 'exception rather than the rule'）で、行動の基になる（p.162-163）」に直す。L81 は「肯定的に価値づける箇所は無かった」を削り、「外れた感じに固有の名を与える箇所は本文に無い（参考文献に Koriat 1998a 'Illusions of knowing' 等の題）」とする。範囲は『全文通読』と『誤り系語の grep』を分けて書く"
    - severity: major
      target: "r4-lane4.md:15（Tillich ch.2 pp.54-57）"
      description: "ch.2 の頁 pp.54-57 を、'The anxiety of meaninglessness is anxiety about the loss of an ultimate concern…' の文の頁として載せている。r3-lane1（L70-71）では pp.54-57 'The Meaning of Despair' は 'Despair is an ultimate or boundary-line situation' の文に付いた頁で、'anxiety of meaninglessness' の文は Fordham 転写・頁未確認だった。「r3 の再掲」としながら、頁が文に付け替わっている。さらに確認状況の「本文○（二次転写・Google Books snippet）」は、r3 critic が v4 凡例で分けるよう勧めた「転写○」に当たる深さで、そのまま転記すると過大になる"
      suggestion: "'anxiety of meaninglessness' の文は「ch.2・頁未確認」とする。pp.54-57 は 'Despair…boundary-line' の文にだけ付ける。確認状況は「転写○（二次転写・頁は複数二次の一致・頁画像未見）」とする"
    - severity: minor
      target: "r4-lane1.md:36,17-19,64-66"
      description: "L36 の Polanyi「探して見つからなかった」は、探した先がローカル grep と r3-lane4 だけ（§3 L80）。原典未取得との区別が §2 では見えにくい。また 原文欄が Koriat 3 文・Peirce 1908 で 3 文・MS L75 で 3 文あり、ブリーフ §3「2 文以内」を超える"
      suggestion: "L36 に「原典未取得。ローカル grep のみ」と書く。原文欄は 2 文以内に絞る（残りは要約欄へ）。Dewey 欄には lane8 の ch.6・ch.1 逐語を相互参照として足せる"
    - severity: minor
      target: "r4-lane2.md:17,88,5,26,47"
      description: "(a) L17 の原文欄は Simons & Chabris 要旨の冒頭文だが、下の「何を言っているか」の根拠にならない。抄録の出所も未検査。(b) L88「上の 7 件」だが §2 の見出しは 8。(c) ブリーフ ②の Polanyi（tacit／explicit）が §2 に行を持たず、L5 の「再照合せず」だけ。(d) L26 の頁 'pp. 52, 62-64' は、L29 の 'novelty ordinarily emerges…' の位置を含まない。(e) L47 Douglas '1966:44' は、lane4:55 の '2009 Routledge 版 p.44' と版名が食い違う"
      suggestion: "(a) 原文欄は主張を支える文に替えるか、抄録の出所を確かめるまで「要照合」と付す。(b) 件数を合わせる。(c) Polanyi 欄を r3-lane4 への参照 1 行で足す。(d) L29 の文の位置を書くか「位置未記録」とする。(e) 版名を「書評が引く頁（版不明）」に統一する"
    - severity: minor
      target: "r4-lane3.md:36,53,41"
      description: "L36 の確認状況「要旨○（二次引用のみ…）」は、ブリーフ凡例の「要旨○」（要旨のみ）と意味が合わない。lane2 の「二次○」に当たる。L53 の 'not a mental experience but a physical one' は、確認できなかった語句を引用符で囲んでいる（確認できていないと明記しており、原文扱いではない）。L41 の p.308 は、ks 側 `knowledge/text/clinical-psychology/part1-alpha-function-4layer.md` L337 に Bion 1959 'Attacks on linking' IJP 40: 308-315 の書誌があり、p.308 はその開始頁とも重なる。α機能は 1962 の語なので、1959 論文の頁とも混ざっている可能性がある（照合は未了）"
      suggestion: "確認状況を「二次○」に直す。L53 は引用符を外して語を地の文にする。L41 に part1 L337 の 1959 書誌を併記し、ks 側の引用は未照合のままにする"
    - severity: minor
      target: "r4-lane4.md:40,16,74,67"
      description: "L40 Frankl は「1959 本文 Part II」と書く。r3 critic の major（Part II は 1962 増補版以降。1959 初版は題が違う）と同じ版の書き方が戻っている。照合済みとは書いていないので minor。L40 は「逐語未確認につき引用しない」としながら 'manifests itself mainly in a state of boredom' を引用符で出している。L74 の「最も近い形は Bataille・老子・Tillich」は、三つに絞る言い方になっている（直後に『書き方が違う』とあるので絞り切ってはいない）。L16 の 原文欄は Tillich 2 文＋ほかに複数"
      suggestion: "Frankl は「Beacon 系（Part II は 1962 以降。1959 初版は未確認）」とする。引用符つきの語句は外すか「二次断片」と付す。L74 は「近い形の例は…（書き方は三つとも別）」とする"
    - severity: minor
      target: "r4-lane5.md:23,43,18"
      description: "L23「頁はブリーフでは 403-420」はブリーフに無い。頁は検索結果由来なら、そう書く。L43 の Esposito 注 2「Vertrautheit を 'confidence' と訳すのが適切」は、Vertrautheit が一般に familiarity と訳される点と合わない。Luhmann 1988 の trust／confidence／familiarity の三区別と取り違えている可能性があり、二次の読みの転記が正確かは未検査。原文欄が複数（L14-16）で 2 文を超える。なお suspension と抱持の近い／違うは L18-19 に両方あり、「問いとして保つ」と「as if で先へ進む」の併存は確認できていないとも書いている（良い）"
      suggestion: "L23 は「頁は二次文献の表示（未確定）」とする。L43 は v5 に載せる前に Esposito の注の原文で確かめる（未確認なら載せない）"
    - severity: minor
      target: "r4-lane6.md:14,57,5"
      description: "L14 の見出し '§VIII' は ch.VIII の意味で、他は 'ch.' 表記。L57 の csulb「証明書エラーで WebFetch 不可」は、lane2:89「WebFetch 経由で PDF を取得」と食い違う。L5 は Kuhn を 3 本に絞ったと明記しており（追わなかった候補の列挙も L58 にある）、この点は良い。誤差の側（Reason）が未着手のため、ブリーフの『誤差の側はどれか』欄は薄い"
      suggestion: "'ch.VIII' に揃える。csulb の到達可否は「取得できた回とできなかった回があった」と書く。v5 では誤差の側を未充足と明記する"
    - severity: minor
      target: "r4-lane7.md:49,56,60"
      description: "「focusing.org・archive.org は使わない指示」「指示により追わず」は、ブリーフに該当する指示が無い。ブリーフ scope は IA を許可している。起動プロンプト由来なら出所を書くべき。ほかの lane の IA 記述（接続不可／貸出 401／運用ルール）と理由が食い違う。Bechara（p.測定が報告に限る点）・Maia（操作的定義）の扱いは、本文○で慎重（良い）"
      suggestion: "理由を「ブリーフ外の追加指示（Main の起動プロンプト）」など出所つきで書く。v5 には「IA は届く回と届かない回があった」と一行で足す"
    - severity: minor
      target: "r4-lane8.md:31,52,54"
      description: "L31 の Sadler-Smith は DOI が 2015 を示し、'2016' と合わない。L54 の「三本の範囲では見つからない」は範囲つきで良いが、ブリーフ ③Peirce・④Gendlin 六段・⑤Schön・⑥Bion が未訪問と列挙されていない（lane10 が Peirce の一部を持つ）。Gendlin の六段には『保つ』に近い段があるはずで、未訪問のままだと lane8 が穴 8 を代表しているように見える。L52 の「運用ルールにより使っていない」は出所不明。Wallas の Incubation で『保つ』と『離れる』の両方の読みを残している点は良い"
      suggestion: "Sadler-Smith は 2015 とする（DOI で確認）。§3 に「Gendlin 六段・Schön・Bion・Peirce は未訪問」と一行足す"
    - severity: minor
      target: "r4-lane9.md:50,48,12"
      description: "L50「慣習は 3 本の範囲では見つかっていない」は、3 本とも本文未取得（L48）なので、実質は『未確認』。L12 のとおり Robinson・Lakatos・van Manen と ブリーフ ⑦（文章上の慣習）は未着手。v5 に『見つからない』と転記されると、探した上で無いと読まれる。Blumer の引用が 1969a 経由であること（L15）は明記されており良い"
      suggestion: "L50 を「3 本とも本文未取得のため未確認。Robinson・Lakatos・van Manen・⑦慣習は未調査」に直す"
    - severity: minor
      target: "r4-lane10.md:57,19,35 と r4-lane1.md:82"
      description: "L57 の未取得一覧に Magnani 2001/2009 と Schurz 2008 の片方が無く（Hintikka・Paavola・Schurz のみ。Magnani はブリーフ ②にある）。L19 の 5.189 の句読点（セミコロン・コンマ）が lane1:82（ピリオド。SEP 転載）と違う。どちらも転載由来で、逐語差は句読点のみ。L35 の 1878 の動詞は問い 6 のとおり、探せば埋まる可能性がある"
      suggestion: "Magnani を未取得に足す。5.189 は『CP の行分け形（転載）』と『SEP の書き下し』と出所を書き分ける"
    - severity: minor
      target: "r4-lane10b.md:16-17,59"
      description: "見出しは 'Dorst 2011' だが、逐語は 2010 DTRS8 版（本文○）のもの。L17・L59 で明記されていて誠実だが、見出しだけ v5 に写ると 2011 版の逐語に見える。Kolko 2010 は未取得（L67）、Roozenburg は二次（Kroll & Koskela）のみ。Brown 2008 はブリーフ外だが、定義文の逐語で有用"
      suggestion: "v5 の見出しは 'Dorst 2010（DTRS8）。2011 版の同一性は未確認' とする。Kolko は『未取得』と書く"
    - severity: info
      target: "lane 全般"
      description: "lane1・lane3 は打ち切り注記を冒頭に置き、未着手の原典を項ごとに書いている（要件の ① を満たす）。lane4 には打ち切り注記が無く『約 15 ターン』とあるが、ブリーフの全項目に行がある。「見つからない」の主張は、ほぼ全て探した先が付いている。lane2・6・7 の Kuhn ch.VI は文字列が一致した（"Discovery commences…" は lane2/6、"Without any awareness of trouble" は lane2/7 で同一）。頁は lane2 の 'p.62' と 'pp.62-64' が内部で揺れ、lane6 の 'Initially, only the anticipated…' は二次抜粋由来で lane2 の通読とは未突合"
      suggestion: "v5 で Kuhn ch.VI は『csulb 版 PDF の頁（1970 enlarged）で pp.52, 62-64』と一括し、lane6 の文だけ『二次抜粋』と注記する"
  insights:
    - "critical は 11 本とも無し。pjdhiro の原文は引用符内で一致し、定義番号・「保持」・「棄却される誤差」・cos 90°／虚軸へのタグ・穴への答えの決め打ちは見当たらない。近い／違うの両方は全 lane にある"
    - "lane5 の Möllering は、suspension と抱持を『向きが逆に読める箇所』と『近い点（irreducible を残す・根拠で説明し切れない・vague と自ら言う）』の両方で書き、確認できていない併存の可能性も明記している。要件 ④ を満たす"
    - "lane10 と lane10b の Peirce／Dorst の記述に食い違いは見当たらない。ただし二つの式（5.189 の驚き→説明／1878 の規則と結果→事例）と Dorst の abduction-1・2 の対応は、lane10b が Kroll & Koskela 経由で『explanatory abduction に並ぶ』と書き、lane10 は形式の違いを書く。並べ方は未決のまま v5 に両方置ける"
    - "起点の語を比べると、Peirce 5.189 は 'surprising fact'（観察された事実の文）、1878 は 'very curious circumstance'、MS L75 は surprise を emotion、Dewey は 'felt difficulty'（衝撃・'vague feeling of the unexpected' として現れうる）、Dorst・Roozenburg は望む価値／結果。起点に命題でない感覚を置いた記述は Dewey と L75（emotion の言及）に出る。これは Claude の横断読みで、断定しない"
    - "lane7 のとおり、気づきの判定法（言語報告／試行ごとの自己判定／操作的定義）が論ごとに違う。『気づきの無い違和感』は判定法ごとに言い方が変わる。as#149 候補（lane2 の Kuhn、lane7 の三組）と合わせて渡せる"
    - "lane1 の Koriat は、『外れる』ことが例外的（p.161）で、外れうる事実（p.160-161 'self-evident intuitions can be wrong!'）と同じ箇所に書かれている。穴 1 への当たり方は『外れうる』だけでなく『概ね当たる』の側も含めて書いた方が、近い／違うの両方が揃う"
  convergence:
    agreement: true
    new_insights: true
    open_challenges: 2
    recommendation: "proceed — v5 に major 2 件・minor を反映して転記。round 5 は不要（紙・図書館・出版社サイトでのみ埋まる未取得は §下の『未検査・未取得』に列挙）"
```

## 3. レーン別一覧

| レーン | critical | major | minor | 一言 |
|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 打ち切り注記と未着手の明記は良い。Koriat の「肯定的な価値づけは無かった」が p.161〜163 と合わない（grep 語も誤り系のみ） |
| 2 | 0 | 0 | 1 | 三つの面の先行例は無いと範囲つきで書く。Mack & Rock の原文欄と Polanyi 欠落、版名の食い違いを直す |
| 3 | 0 | 0 | 1 | 打ち切りと未取得を明記。確認状況の凡例のずれ、p.308 の ks 側出典に 1959 論文の書誌が重なる |
| 4 | 0 | 1 | 1 | 判断／経験の整理は慎重。Tillich の頁が r3 と付け替わっている。Frankl の版の書き方が戻っている |
| 5 | 0 | 0 | 1 | suspension と抱持の近い／違うが両方ある。ブリーフに無い頁、Vertrautheit の訳は要確認 |
| 6 | 0 | 0 | 1 | 3 本に絞り、追わなかった候補も列挙。csulb の到達可否が lane2 と食い違う |
| 7 | 0 | 0 | 1 | 気づきの判定法を論ごとに書いた良い報告。「指示により」の出所が不明 |
| 8 | 0 | 0 | 1 | Dewey の逐語は全て一致。Sadler-Smith の年、未訪問の候補（Gendlin・Schön・Bion）が未列挙 |
| 9 | 0 | 0 | 1 | 3 本とも本文未取得。「見つかっていない」は「未確認」と読み替える |
| 10 | 0 | 0 | 1 | Peirce の定義と曖昧さは二次の範囲を明記。Magnani の未取得が一覧に無い。1878 の動詞は探せば埋まる |
| 10b | 0 | 0 | 1 | 2010 版を別版と明記して誠実。v5 の見出しを 2010 に直す。Kolko は未取得 |
| **計** | **0** | **2** | **11** | |

## 4. 統合表 v5 への転記で Main が直すべきもの（major のみ）

- **Koriat 2000 の行（lane1:21,81）**
  - 「価値の論は読んだ範囲に無い／肯定的に価値づける箇所は無かった」を書かない。
  - 代わりに、感じは概ね妥当で外れは例外的（p.161）、行動の基になる（p.162-163）、それでも 'self-evident intuitions can be wrong!'（p.161）と書く。
  - 外れた感じに固有の名を与える箇所は本文に無い、とする。参考文献に Koriat 1998a 'Illusions of knowing' と 'illusory tip-of-the-tongue states'（Schwartz et al.）の題がある、と添える。
  - 範囲は「通読」と「誤り系語の grep」を分けて書く。
- **Tillich の行（lane4:15）**
  - 'anxiety of meaninglessness…' の文は「ch.2・頁未確認」とする。
  - pp.54-57 'The Meaning of Despair' は 'Despair is an ultimate or boundary-line situation' の文にだけ付ける。
  - 確認状況は「転写○（二次転写・頁は複数二次の一致・頁画像未見）」とする。「本文○」とは書かない。
  - 余力があれば Frankl の版も「Beacon 系（Part II は 1962 以降。1959 初版は未確認）」に揃える。

## 未検査・未取得（上記の照合は、手元に残っていたテキストの範囲）

次のものは、逐語・頁を自分の目では確認していない。lane の報告をそのまま読んだ。
- Kuhn（csulb PDF）、Möllering 2006 抜粋、Bechara 1997、Nieuwenhuis 2001 要旨、Barrett 2017、Popper 講演、Nagel PDF、Bataille PDF
- Dorst 2010（DTRS8）、Brown 2008、Kroll & Koskela 2015
- 各レーンの二次引用: SEP、Wikipedia、van Buuren、Esposito 2024 など

## 参照パス
- `docs/issues/ISS-216-survey-brief-r4.md`
- `docs/issues/survey-216/r4-lane1.md` 〜 `r4-lane10.md`・`r4-lane10b.md`
- `docs/issues/survey-216/review-critic-r3.md`
- 照合に使った前セッションのテキスト（スクラッチパッド・揮発）: koriat.txt・l75.txt・peirce.txt・na.txt・dw2.txt・maia.txt・maia2.txt
