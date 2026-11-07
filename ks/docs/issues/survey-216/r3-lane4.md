# round 3 レーン 4: Koriat 2000・Hart 1965・Polanyi 1966 の内容 — researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` レーン 4。統合表への反映は v4。§6 の →as 候補は as#149 へ渡す。

## レーン 4: Koriat 2000・Hart 1965・Polanyi 1966 — 照合報告（READ-ONLY・ファイル未作成）

### 1. 未確認のまま残っていたもの
- Koriat 2000: 統合表 §7-2 L187・r2-laneB L41/L100 は**要旨のみ**。「内容にアクセスせずに生じる」「crossover」の本文逐語・頁が無い
- Hart 1965: §7-2 L188・r2-laneB L101/L137 は**書誌のみ**（56(4):208–216）。方法（RJR）・結論は未読
- Polanyi 1966: §7-2 L190・r2-laneB L104/L139 は round 1（lane3-design L15「ch.1 pp.21–22」）を**再確認失敗**。"we can know more than we can tell" の頁も未確認

### 2. Handoff YAML
```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  findings:
    - claim: "Koriat 2000 の本文は、noetic feeling が記憶痕跡への直接アクセスではなく暗黙・非意図的な推論ヒューリスティクスに基づく、と要旨と本文の両方で述べる"
      evidence: "Koriat 2000 Conscious Cogn 9(2) 要旨 p.149／本文 p.160「FOK is not based on direct monitoring of a memory trace, but is mediated by an inferential process」。PDF: https://newiipdm.haifa.ac.il/wp-content/uploads/2015/05/2000-Koriat-CC.pdf（著者所属ハイファ大）。doi:10.1006/ccog.2000.0433"
      confidence: high
      verification: [V1, V2]
    - claim: "crossover model の定義文は本文 pp.162–163。「implicit as far as their antecedents are concerned but explicit in both their phenomenological quality and their consequences」。情報ベース／経験ベースの区別は pp.153–155"
      evidence: "同 PDF p.153 項目 2、p.154 項目 3–5、p.155 節「DISTINGUISHING BETWEEN EXPERIENCE-BASED AND INFORMATION-BASED JUDGMENTS」、pp.162–163 節「THE CROSSOVER MODE OF OPERATION AND ITS ROLE」"
      confidence: high
      verification: [V1, V2]
    - claim: "Koriat は Hart 1965 を「trace access」説の出典として引く。FOK を標的の記憶痕跡に直接アクセスする専用監視機構の出力とみる説"
      evidence: "同 PDF p.152「It is this quality of the feeling of knowing that has given rise to a ''trace access'' account (Hart, 1965)」"
      confidence: high
      verification: [V1, V2]
    - claim: "Hart 1965 の要旨: 2 実験（N=22, 16）。FOK は記憶貯蔵の比較的正確な指標。想起できない項目について認識の成否を予測できる。結論は memory-monitoring process の有用性"
      evidence: "APA 要旨（stafforini.com 転載・PubMed 5825050・DOI 10.1037/h0022263 を Semantic Scholar API で V1）。本文は未読。RJR（recall-judgment-recognition）という方法名は二次（Wikipedia Metamemory・HED task 頁）"
      confidence: medium
      verification: [V1, V2]
    - claim: "Polanyi *The Tacit Dimension* の「問題を見る＝隠れたものを見る／hitherto not comprehended particulars の coherence への intimation」は Chicago 2009 版 pp.21–22 と二次サイトが頁付きで逐語転載。1966 Doubleday 版頁は未確認"
      evidence: "https://www.joostrekveld.net/?p=1904（University of Chicago Press 2009, pp.21–22 と明記）。Internet Archive の 4 件（tacitdimension0000mich 等）は貸出制限で本文取得不可（HTTP 401）。Google Books API はスニペット 0 件"
      confidence: medium
      verification: [V1]
    - claim: "\"we can know more than we can tell\" は 1966 版 p.4 とする二次引用が 2 件。本文での頁確認は未"
      evidence: "Taylor & Francis 章（10.4324/9780203559055-8）と George Fox Univ. blog が p.4 と引く。2009 Chicago 版は xix+108 p.、章構成 Tacit Knowing／Emergence／A Society of Explorers（Chicago UP 頁）"
      confidence: low
      verification: [V1]
    - claim: "Polanyi 本人の同年論文「The Logic of Tacit Inference」（Philosophy 41, 1966）は、発見の初期に科学者が持つのは「a vague and subtle intimation of its prospects」であり、その内容は「elusive」で到達過程は「cannot be specified」、「discovery without awareness」と述べる"
      evidence: "Cambridge Core PDF doi:10.1017/S0031819100066110（本文 pdftotext で確認。該当箇所の頁番号はレイアウト上特定できず）"
      confidence: high
      verification: [V1, V2]
  questions:
    - type: clarifying
      target: "pjdhiro"
      content: "定12「ゼロのはず」は、Koriat・Hart の FOK が前提とする「欠けた標的があることは分かっている」状態と同じか、それとも「欠けていることすら予測していない」状態か。三者はいずれも前者に属する（下表）"
    - type: probing
      target: "Main"
      content: "Polanyi TD 1966 Doubleday 版の頁確認は、図書館貸出（IA inlibrary）か 2009 版の現物でしか取れない。1966=2009 同頁の仮定を統合表に書くか、2009 版頁で統一するか"
  insights:
    - "Koriat は「自覚する層」の始点を明示している: 「self control (and a conscious-controlled mode of operation) begins only after the feeling itself has been crystallized」（p.163）。抱11「意識にのぼる信号は、予測と誤差がある場合に立つ」の「立つ」とは別の語（crystallize）で、信号が立つ条件は予測誤差ではなく手がかりの accessibility／familiarity"
```

### 3. 照合表
| 項目 | 原文（逐語） | 出典 | 深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| Koriat: 直接アクセスでない | "Rather than reflecting direct access to memory traces, noetic feelings are based on inferential heuristics that operate implicitly and unintentionally. Once such heuristics give rise to a conscious feeling that feeling can then affect controlled action." | Koriat 2000, 要旨 p.149 | 本文○ | 内容が取れないのに感じだけ立つ点が 定12 前半に近い | 記憶の有無の感じ。予測と現実の誤差という語は無い |
| Koriat: 部分情報の正誤にもアクセスなし | "people are assumed to also have no direct access to the correctness of the partial information that comes to mind. Therefore, both correct and incorrect clues contribute to the enhancement of the FOK." | 同 p.159 | 本文○ | 感じが誤りうる＝「ゼロのはずなのに」の逆（有るはずなのに無い）も含む | 感じの妥当性は手がかりの診断力次第（p.160「these feelings are not inherently valid」） |
| Koriat: crossover 定義 | "They are implicit as far as their antecedents are concerned but explicit in both their phenomenological quality and their consequences. Thus, they play the role of a go-between, allowing a transition between an implicit-uncontrolled mode of operation and an explicit and relatively controlled mode." | 同 pp.162–163 | 本文○ | 「信号が立つ層／自覚する層」の境目をこの 1 文で置く（→as） | 保つ機能の記述ではない。感じは制御の入口であって保持ではない |
| Koriat: 自覚の始点 | "people have little control over which cues to take into account in forming a noetic feeling, and how to weight them, so that self control ... begins only after the feeling itself has been crystallized." | 同 p.163 | 本文○ | 抱持（反射的に処理せず問いとして保つ）が働きうるのは crystallize 以後、と読める | Koriat は保つ／保たないを論じず、「act on such feelings or not to act on them」（p.163）の自由までを言う |
| Koriat: TOT の記述 | "The question that emerges, then, is what is the special nature of this kind of subjective, immediate knowledge, particularly when it concerns something that the person, in some sense, does not know." | 同 p.152 | 本文○ | 「知らないものについての知」＝定12 の違和感に近い構造 | TOT は欠けた語が在ることを自覚している（gap 認識あり） |
| Koriat: 直観の質 | "Intuitive feelings do not have an articulate content but emerge as an unexplainable ''hunch'' or ''feel.''" | 同 p.164 | 本文○ | 内容のない感じ | 直観一般の話。探索欲求は論じない |
| Koriat: フィードバック | "conscious experience is neither only a cause nor only an effect, but represents an intermediate step in psychological processes." | 同 p.164 | 本文○ | →as | 意識論の主張。欠損の語なし |
| Hart 1965 要旨 | "Both experiments (Ns of 22 and 16, respectively) show the phenomenon to be a relatively accurate indicator of memory storage, as measured by the ability of Ss to predict recognition failures and successes for items they cannot recall. The results are discussed in terms of the utility of a memory-monitoring process for the efficient functioning of a fallible storage and retrieval system." | Hart 1965 J Educ Psychol 56(4):208–216, APA 要旨 | 要旨 | 想起失敗という欠けの上に感じが立つ | 欠け（想起失敗）は課題設計上明示。「ゼロのはず」ではなく「有るはずなのに出ない」 |
| Hart 方法（RJR） | 想起→未想起項目に FOK 判定→多肢認識、という手順名は二次 | Wikipedia Metamemory／HED task 頁 | 二次 | — | 本文未読。手順の原文は未確認 |
| Polanyi TD: 問題を見る | "For to see a problem is to see something that is hidden. It is to have an intimation of the coherence of hitherto not comprehended particulars." | TD, Chicago 2009, pp.21–22（二次転載） | 二次（逐語一致・頁付き） | 「まだ理解されていないもの」の一貫性への予感＝定12 前半に近い | 予感は既に知の一種（Meno 論）。「ゼロ」ではなく「隠れた何かが見えている」 |
| Polanyi TD: Meno | "we cannot know a problem or look for its solution" | 同 pp.21–22（二次転載。前置き「if all knowledge is explicit」相当は転載頁で未確認） | 二次 | — | — |
| Polanyi TD: know more than tell | "we can know more than we can tell" | TD 1966, p.4（二次引用 2 件） | 二次 | — | 頁は本文未確認 |
| Polanyi 1966 Philosophy | "Discovery comes in stages, and at the beginning the scientist has but a vague and subtle intimation of its prospects. ... their content is elusive and the process by which they are reached cannot be specified. It is a typical feat of discovery without awareness." | "The Logic of Tacit Inference", Philosophy 41(155), 1966, pp.1–18（頁未特定） | 本文○ | intimation の内容が「elusive」＝内容なしの感じ | 対象は科学的発見。情動・違和感の語は無く「anticipations」「expectations」 |

### 4. 確認できなかったもの
- Polanyi TD 1966 Doubleday 版の頁: Internet Archive 4 件（1967 Doubleday・1983 Peter Smith）はいずれも access-restricted（401/403）で本文・inside 検索とも不可。Google Books API はスニペット 0 件。Web 上の「PDF」リンクは spam と判定し開かず
- Polanyi TD p.4 の本文確認: 二次引用止まり
- Hart 1965 本文（手順の原文・統計）: APA PsycNet は読み込み不可（Loading のみ）。Semantic Scholar API は要旨を出版社が非公開
- Koriat 1993（Hart の方法を詳述）: ダウンロードが exfil-guard フックでブロックされ未読
- Koriat 2000 の TOT「driving force」段落（p.152–153）: grep で行頭のみ確認、全文未読のため引用せず

### 5. 問い・insights
- clarifying（pjdhiro）: 上 YAML の 1 件。三者とも「欠けがあること」は自覚された上での感じ。定12「ゼロのはず」がこれと同じか別かで列の埋まり方が変わる（両方の読みを残す）
- probing（Main）: 1966 版と 2009 版の頁の扱い
- challenging: §7-2 L187「内容にアクセスせず生じる感じ」は要旨の正確な要約だが、Koriat の「アクセスしない」対象は**記憶痕跡**であり、「gap の内容」ではない。表の列語を「記憶痕跡への直接アクセスなし」に直すか検討
- insights: YAML の 1 件（crystallize 以後に自覚・制御が始まる）

### 6. →as 候補一覧（信号が立つ層／自覚する層）
- Koriat 2000 p.153–154 項目 4: 経験ベース判断は「a transition from the lower to the higher level of experience」。先行過程は implicit、現象的身分と行動結果は explicit
- Koriat 2000 p.163: 「self control ... begins only after the feeling itself has been crystallized」＝自覚する層の始点の明示
- Koriat 2000 p.163: 「the feeling of knowing, which is at the heart of consciousness, is itself determined by unconscious processes」
- Koriat 2000 p.164: 意識経験は原因のみでも結果のみでもなく「an intermediate step」。pp.164–166 制御行為から監視へのフィードバックループ（「from behavior to consciousness」）
- Koriat 2000 p.164: blindsight・split-brain の報告と noetic feeling の質の類似（Weiskrantz 1986・Sergent 1990）
- Hart 1965 要旨: 「memory-monitoring process for the efficient functioning of a fallible storage and retrieval system」＝監視機構の機能説
- Polanyi 1966 Philosophy: 「learning without awareness」（subception）→「discovery without awareness」。自覚なしに発見が進む層
- Spehn & Reder 2000（同号 pp.187–192）: 過程の多くは implicit とする Koriat への批評（検索要約のみ・未読・low）

ローカル参照: `docs/issues/ISS-216-candidate-survey.md`（§7-2 L183–191）、`docs/issues/survey-216/r2-laneB.md`（L41, L100–105, L137–139, L148–149）、`docs/issues/survey-216/lane3-design.md`（L15, L28）
