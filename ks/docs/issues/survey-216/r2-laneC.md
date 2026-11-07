# Phase 1 SURVEY round 2 — レーン C: 保つために何が必要か（抱12・抱13。記憶／興味・関心／性格／関係、抱持できない側）

**researcher**: team-researcher（READ-ONLY）／2026-11-02／ブリーフ `../ISS-216-survey-brief-r2.md` レーン C
**状態**: ターン上限で停止し、調査は途中まで。答えは出さず、候補を並べている。Main が本文を転記（原文のまま）

**確認の水準**:
- 書誌（V1）は Crossref／PubMed で確認した。
- 中身（V2）まで確認できたのは、Kruglanski & Webster 1996 の要旨（PubMed）、Mikulincer 1997 の要旨（PubMed）、Silvia 2008 の要旨（Crossref）だけ。
- 残りは二次情報か、書誌のみ。表と YAML に水準を明記した。
- `.claude/agents/team-researcher.md` は worktree で Read できなかったため、形式はシステムプロンプト側の定義に従った。

```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 2
  lane: "C"
  findings:
    - claim: "Kruglanski & Webster 1996 の need for closure は「ある問題について確定した知識を求める欲求」で、安定した個人差であると同時に、状況で呼び起こされる状態でもある。早く閉じたい（urgency）傾向と、閉じた状態をできるだけ長く保ちたい（permanence）傾向を含む"
      evidence: "Kruglanski & Webster 1996, Psychological Review 103(2):263-283。PubMed PMID 8637961 の要旨を確認。章節・頁内の本文は未読"
      confidence: high
      verification: [V1, V2]
    - claim: "NFC を引くと、抱13 の「早く正解めいた結論を出してスッキリしたい欲求」に近い記述（urgency）がある。ただし NFC は発達水準の概念ではなく、状況でも上がる動機として書かれている。抱13 の『発達が低次の場合』とは別の説明の仕方になる"
      evidence: "同上の要旨。「状況で呼び起こされる状態」の内訳（時間圧など）は本文未読のため未確認"
      confidence: medium
      verification: [V1, V2]
    - claim: "Mikulincer 1997: 安定型は自分を好奇心が強いと述べ、閉じることへの選好が低く、新情報を社会的判断に使いやすい。回避型・不安‐両価型より。関係（愛着）の方向が、興味と閉じ方の方向に出る例"
      evidence: "Mikulincer 1997, JPSP 72(5):1217-1230。PubMed PMID 9150591 の要旨を確認。5研究・自己報告中心。本文未読"
      confidence: high
      verification: [V1, V2]
    - claim: "Litman は好奇心を I-type（興味）と D-type（欠乏）に分ける。D-type は『ほしい情報』が得られるまで不快が増す型。2010 年の研究は曖昧さ耐性・NFC との関係を調べた。二次情報では、曖昧さ耐性は I-type と正、D-type と負に相関し、Litman 自身は D-type を NFC と同じものとはしなかったとされる"
      evidence: "Litman 2005, Cognition and Emotion 19(6):793-814（書誌のみ確認）／Litman 2010, Personality and Individual Differences 48(4):397-402（書誌のみ確認）。中身は引用論文の記述（二次）。原典の要旨・係数は未確認"
      confidence: medium
      verification: [V1]
    - claim: "Silvia 2008 は興味を『見過ごされてきた感情』として扱い、何が興味を生むかを論じる。評価の二成分（新奇性‐複雑さ、対処可能性）は二次情報で確認した"
      evidence: "Silvia 2008, Current Directions in Psychological Science 17(1):57-60。Crossref の要旨で4つの問いまで確認。二成分は検索結果の二次記述"
      confidence: medium
      verification: [V1]
    - claim: "曖昧さへの耐性・不耐性は性格変数として Frenkel-Brunswik 1949 と Budner 1962 が書誌上の起点。レビューとして Furnham & Ribchester 1995 がある。中身（定義・尺度）は未読"
      evidence: "Frenkel-Brunswik 1949, J Personality 18(1):108-143／Budner 1962, J Personality 30(1):29-50／Furnham & Ribchester 1995, Current Psychology 14(3):179-199。いずれも書誌のみ確認"
      confidence: medium
      verification: [V1]
    - claim: "記憶の方向は、書誌上の候補は挙げられるが、『問いを保つのに記憶容量がどこまで関わるか』を直接論じる文献は確認できていない"
      evidence: "Kane & Engle 2002 (PBR 9(4):637-671)／Baddeley 2012 (Annu Rev Psychol 63:1-29)／Hofmann, Schmeichel & Baddeley 2012 (TICS 16(3):174-180)／Masicampo & Baumeister 2011 (JPSP 101(4):667-683)／Sio & Ormerod 2009 (Psych Bull 135(1):94-120)。すべて書誌のみ。主張は未読"
      confidence: low
      verification: [V1]
    - claim: "発達の方向は、正解を一つとする見方を扱う理論が複数ある。Perry 1970（二元論から多元性・相対主義・コミットメントへ。九つの位置）、Kegan 1994（心の五つの秩序）、認識論的信念の発達（Kuhn et al. 2000／Hofer & Pintrich 1997）。ただし原典の章節・頁は未確認"
      evidence: "Perry: 二次要約のみ（Holt, Rinehart and Winston, 1970）。Kegan: Harvard UP 1994、396頁（書評の記載）。Kuhn, Cheney & Weinstock 2000, Cognitive Development 15(3):309-328／Hofer & Pintrich 1997, Rev Educ Res 67(1):88-140（書誌のみ）"
      confidence: medium
      verification: [V1]
    - claim: "Bion の container/contained は ks 正本が『関係』の方向の根拠に引いている。原典（1962, 1970）の章節は未確認。ブリーフの『Attention and Interpretation ch.12 付近』も確認できていない。pd のレビューは、Bion の containment と神経科学の直接対応研究は見つかっていないとする"
      evidence: "ks core-definitions.md「関連概念」「成立条件」L1-L2 行、CN-001。pd knowledge/research/awareness-model/REPORT-awareness-model-review-v1.md L114。pd energy-flow-psyche/RR-032 は Bion 1962 を『逐語は二次のみ』と注記。Ogden 2004 (IJP 85(6):1349-1364) は書誌のみ確認"
      confidence: low
      verification: [V1]
    - claim: "ks 正本の抱持の成立条件は四層（生理的余裕／自律神経調整／外部 Container／認知的枠組み）で、ワーキングメモリ容量は最下層の具体例に既にある。興味・性格・発達水準の語は成立条件の表に無い。正本は一年前の生成で、抱12 は『わかりません』と言っているため、候補の一つとして置く"
      evidence: "knowledge/schema/core-definitions.md L111-124。docs/issues/ISS-215-claims-inventory.md 抱12 のメモ"
      confidence: high
      verification: [V1, V2]
    - claim: "CN-003 は『早期収束』（段階3寄り）と『擬似抱持』（段階4寄り）を別々に描く。退行の兆候として、期限・評価・文化が早い結論を報酬化する単純化圧が挙がっている。抱13 の『早く結論を出してスッキリ』と読み手が結びつけることはできるが、ケースは架空で、ks 内の段階と Kegan・Perry の段階との対応づけは無い"
      evidence: "CN-003 §A L25-48、§D.2 L295、§E.2 L342（会話断片は架空と明記）。CN-004 D-1・D-5・P-3 も結論を急がせる圧を観測項目にする"
      confidence: high
      verification: [V1, V2]
    - claim: "ローカルの cs・pd に Kegan・Perry・NFC・曖昧さ耐性の専用ノートは確認できなかった。cs の発達心理学調査は Kegan 1982/1994 を段階対応の候補として引くのみ。pd の stages-screener は Kegan を [CG] が引く範囲でだけ使うとする"
      evidence: "creation-space/evidence/202602-deep-research-30domains-gpt/raw/d23deep-research-report.md L75-76, L169-180。project-design/knowledge/research/stages-screener/README.md L206。grep 一覧の全件は未精読"
      confidence: low
      verification: [V1]
  questions:
    - type: clarifying
      target: "pjdhiro"
      content: "抱13 の『発達が低次』は、Kegan・Perry のような段階の意味か、日常語の『未熟』か。前者なら段階理論と並べられる。後者なら NFC・曖昧さ耐性の側に近い"
    - type: probing
      target: "Main"
      content: "NFC は状況でも上がるとされる。抱13 の『場合』を、人の差と状況の差のどちらも含む語として扱ってよいか（位11 の場合分け）"
    - type: probing
      target: "次ラウンド"
      content: "未調査の方向（下記）を足すか。足すなら優先は Kegan・Perry の原典頁、Bion の原典章節、開放性"
    - type: challenging
      target: "表の読み方"
      content: "ks 正本の成立条件は、記憶・関係の方向だけを既に持つ。興味・性格・発達の方向が正本に無いことは、欠けなのか、定義の外なのか。Claude は決めない"
  insights:
    - "四方向は互いに独立とは限らない。Mikulincer 1997 は『関係（愛着）→興味・閉じ方』を一本の研究で結ぶ。方向の間の因果は、この材料では言えない"
    - "NFC が個人差でも状況でもあるという点は、抱13 の発達水準を原因とする読みと、状況の圧を原因とする読みを、どちらにも置ける。位11 に沿い、場合分けのまま残す"
    - "pjdhiro が挙げた『忍耐力や興味といった心理エネルギーや頭脳の記憶』（抱11）は、本ラウンドの四方向のうち記憶・興味と重なる。忍耐力に当たる直接の概念は、確認した範囲では曖昧さ耐性が最近接。これは Claude の読みで、確定ではない"
    - "気づき（信号が立つ）と抱持（立った信号を持つ）の境目は、本レーンの文献ではどれも直接扱っていない。→as#149 の問いと別にしておく"
```

### 表1: 四つの方向（答えではなく候補）

水準の凡例: 要旨確認＝要旨まで確認／書誌のみ＝書誌だけ確認／二次＝二次情報で確認

| 方向 | 候補（著者・著作・年・章節・頁） | 何を言っているか（原典の語。水準） | 抱12・抱13 との近さ | 違い | 正本の成立条件との関係 |
|---|---|---|---|---|---|
| 記憶 | Baddeley 2012, Annu Rev Psychol 63:1-29 | ワーキングメモリの理論と論争のレビュー（書誌のみ） | 抱12 が「一般的には脳みそでの記憶力」と言う側の標準的な参照先 | 問いを保つことを論じているかは未確認 | 重なる（L0 の具体例にワーキングメモリ容量） |
| 記憶 | Kane & Engle 2002, PBR 9(4):637-671 | ワーキングメモリ容量・実行注意・流動性知能と前頭前野（書誌のみ） | 保つには注意の制御が要る、という読みの候補 | 主張は未読。「問い」を扱うかは未確認 | 候補（L0 に近いが別の層） |
| 記憶 | Hofmann, Schmeichel & Baddeley 2012, TICS 16(3):174-180 | 実行機能と自己制御（書誌のみ） | 反射的に処理しない、の側の機構候補 | 同上。中身未読 | 候補 |
| 記憶（反例側） | Masicampo & Baumeister 2011, JPSP 101(4):667-683 | 題名は、未達の目標が認知に与える影響を、計画づくりが消しうる、という趣旨（書誌のみ） | 開いたままの課題が記憶・注意に残る、という近い話の候補 | 本文未読。『問い』ではなく目標。計画で消える点は、保つことの反対方向にも読める | 別 |
| 記憶（周辺） | Sio & Ormerod 2009, Psych Bull 135(1):94-120 | 題名は、インキュベーションは問題解決を高めるか、のメタ分析（書誌のみ） | 未解決の問題を置いたまま時間が経つ場合の論 | 中身未読。保つ努力か、離れるかの区別は未確認 | 別 |
| 記憶（反対の論） | Bion の記憶と欲望への態度 | 未確認（原典未取得）。ks も pd もこの論点を持たない | もし記憶を手放す立場があるなら、抱12 の『記憶力』と並ぶ別の場合 | 未確認のため材料にしない | 未調査 |
| 興味・関心 | Silvia 2008, Curr Dir Psychol Sci 17(1):57-60 | 興味を感情として扱い、何が興味を生むかを論じる（要旨確認）。評価は新奇性‐複雑さと対処可能性（二次） | 抱11 の「興味」に近い。対処できると感じる程度が関わる、という読みを置ける | 興味は学習・動機の感情。未解決を保つことそのものは主題でない | 候補（正本に無い） |
| 興味・関心 | Litman 2005, Cogn Emot 19(6):793-814 | I-type（興味）と D-type（欠乏）。D-type は欲しい情報を得るまで不快が増す（二次） | 定12 の『探索』の二つの場合を分ける軸。抱13 の解消欲求にも触れる | 原典要旨は未確認。I-type が保つことを支えるかは、この材料では言えない | 候補 |
| 興味・関心 | Litman 2010, PAID 48(4):397-402 | 曖昧さ耐性・NFC との関係を調べた研究（書誌のみ）。二次では、耐性は I-type と正、D-type と負、D-type は NFC と同一ではないとされる | 興味の型と、曖昧さ・閉じ方が同じ研究に入っている | 二次情報のみ。係数は未確認 | 候補 |
| 興味・関心 | Hidi & Renninger 2006, Educ Psychol 41(2):111-127 | 題名は、興味の発達の四段階モデル（書誌のみ） | 興味が一時の状態から続くものへ変わる、という論の候補 | 中身未読 | 候補 |
| 興味・関心 | Dewey 1913, *Interest and Effort in Education* | 未確認（原典未取得） | 未確認 | 未確認 | 未調査 |
| 性格 | Frenkel-Brunswik 1949, J Pers 18(1):108-143 | 題名は、感情・知覚の性格変数としての曖昧さへの不耐性（書誌のみ） | 抱13 の『耐えられない』に語として近い | 中身未読。定義・尺度は未確認 | 候補（正本の表に「不確実性耐性」の行はあるが中身は空） |
| 性格 | Budner 1962, J Pers 30(1):29-50 | 題名は、性格変数としての曖昧さへの不耐性（書誌のみ） | 同上 | 同上 | 同上 |
| 性格 | Furnham & Ribchester 1995, Curr Psychol 14(3):179-199 | 曖昧さ耐性の概念・測定・応用のレビュー（書誌のみ） | 上の二つの整理に使える | 中身未読 | 候補 |
| 性格 | Kruglanski & Webster 1996, Psychol Rev 103(2):263-283 | NFC は確定した知識への欲求。安定した個人差であり、状況で呼び起こされる状態でもある。早く閉じる傾向と、閉じた状態を長く保つ傾向を含む（要旨確認） | 『早く正解めいた結論を出してスッキリしたい欲求』に近い（早く閉じる側） | 発達水準でなく動機。『低 NFC は保つ側か』は要旨から言えない（未確認） | 候補（成立条件に無い） |
| 性格 | Webster & Kruglanski 1994, JPSP 67(6):1049-1062 | NFC の個人差尺度（書誌のみ） | NFC を測る道具 | 中身未読 | 候補 |
| 性格 | 開放性（Big Five） | 未調査 | 未調査 | 未調査 | 未調査 |
| 関係 | Bion 1962 *Learning from Experience*／1970 *Attention and Interpretation* | container/contained。章節・頁は未確認。ks 正本は後期を『制度・文化・テクスト』への拡張として記す（CN-001 L122） | ks が『関係』の根拠にしている原典。抱5 とも続く | 原典の語での報告ができていない。pd は神経科学との直接対応は見つからないとする | 重なる（L1-L2、CN-001）。ただし原典照合は未了 |
| 関係 | Ogden 2004, IJP 85(6):1349-1364 | 題名は、holding と containing、being と dreaming について（書誌のみ） | holding と containing を区別する論の候補 | 中身未読 | 未調査 |
| 関係 | Mikulincer 1997, JPSP 72(5):1217-1230 | 愛着スタイルと好奇心・認知的閉じ方の個人差。安定型は閉じることへの選好が低い（要旨確認） | 関係が興味と閉じ方に関わる、という実証例。方向が互いに独立でないことも示す | 自己報告の個人差研究で、関係を内在化する話とは別 | 近い（関係→興味・閉じ方）。正本の『関係』を支える材料の候補だが、答えとは言わない |

### 表2: 抱13（抱持できない側）

pjdhiro の原文:
- 「発達が低次の場合、正解を一つにしたがるので耐えられないと思います」
- 「早く正解めいた結論を出してスッキリしたい欲求があるはずです」

これを一般化せず、近い点と違う点を両方書く。

| 候補 | 何を言っているか（水準） | 近い | 違う |
|---|---|---|---|
| Kegan 1994（Harvard UP, 396頁）の心の秩序 | 五つの秩序があるとされる（二次）。章節・頁は未確認。archive.org の全文取得は試みたが未精読 | 『発達が低次の場合』を、段階の語で述べる論の候補 | 段階の記述が『正解を一つにしたがる』かは未確認。原典の語で報告できていない |
| Perry 1970（Holt, Rinehart & Winston） | 二元論（正しい答えが一つあると考える）から多元性、相対主義、相対主義の中のコミットメントへ。九つの位置（二次要約） | 『正解を一つにしたがる』に近い記述が二次要約にある（二元論＝正しい答えがあると感じる） | 原典の頁・語は未確認。大学生の知的・倫理的発達の記述であり、抱持の記述ではない |
| Kuhn, Cheney & Weinstock 2000／Hofer & Pintrich 1997 | 認識論的信念（知識についての見方）の発達（書誌のみ） | 『正解を一つ』を知識観として見る別の候補 | 中身未読 |
| NFC（Kruglanski & Webster 1996） | 早く閉じたい傾向と、閉じた状態を保ちたい傾向（要旨確認） | 『早く…スッキリしたい欲求』に最も語が近い | 発達水準ではなく動機。状況でも上がる。個人差と状況のどちらで説明するかは場合による（位11） |
| 曖昧さ耐性（Frenkel-Brunswik 1949／Budner 1962） | 性格変数としての曖昧さへの不耐性（書誌のみ） | 『耐えられない』に近い | 中身未読。発達とは別軸で論じられてきた可能性があるが、未確認 |
| Litman 2010（二次） | D-type は NFC と同一ではないと Litman は述べたとされる | 『早く結論を』の欲求を、閉じ方一般とは分けて見る候補 | 二次情報のみ。原典未確認 |
| Bion／Klein の PS↔D | ks 正本が『Klein: PS に留まる耐性』と記す（core-definitions L102） | 揺れる往復という見方の候補 | Bion 原典の章節未確認。ブリーフの『ch.12 付近』も未確認。Klein 原典は未調査 |
| ks CN-003 の早期収束・擬似抱持 | 早い結論が報酬化される単純化圧で、早期収束へ落ちる（架空ケース） | 抱13 の『実社会での現象』と同じ方向を、ks 内で描いたもの | 架空ケース。ks 内の段階と Kegan・Perry の段階の対応は無い。正本は E.1 でも、ケースはラベルでないと注記 |
| 『誤解や逆効果になっている知識』（抱13 後半） | 該当する文献は、本ラウンドでは未確認 | — | NFC の『閉じた状態を長く保つ』傾向が近い、という読み手の解釈はありうるが、要旨からは言えない |

### 見送った候補

- 開放性（Big Five）: 未調査。
- Dewey 1913 *Interest and Effort in Education*: 原典未取得のため未確認。
- Keats の negative capability（ks 正本が引く）: 未確認。
- Kashdan の5次元好奇心尺度: 書誌のみ確認。尺度の中身（ストレス耐性の次元など）は未読。
- King & Kitchener 1994 *Reflective Judgment*: 未調査。
- Klein 1946: 未調査。
- Hart・Koriat 系などレーン B の領域: 担当外。
- 全般: Perry の頁、Kegan の章節、Bion の章節は、確認できなかったため表に載せていない。

### 注意

- 表の『近い』は読み手（Claude）の対応づけで、原典がそう言っているわけではない。
- 抱12 の『保つために、何が必要なのかわかりません』という立場を、答えで埋めていない。
- 抱持と気づきは混ぜていない。

### 主な参照ファイル
- ks: `knowledge/schema/core-definitions.md`、`knowledge/concepts/CN-001_internalized-relationship.md`、`CN-003_boundary-casebook.md`、`CN-004_collective-hoji.md`、`docs/issues/ISS-215-claims-inventory.md`
- pd: `knowledge/research/awareness-model/REPORT-awareness-model-review-v1.md`、`knowledge/research/energy-flow-psyche/RR-032-relational-flow-bridge.md`、`knowledge/research/stages-screener/README.md`
- cs: `evidence/202602-deep-research-30domains-gpt/raw/d23deep-research-report.md`
- 外部: Crossref API（書誌）／PubMed 要旨 https://pubmed.ncbi.nlm.nih.gov/8637961/ ・ https://pubmed.ncbi.nlm.nih.gov/9150591/ ／Perry の位置の二次要約 https://cse.buffalo.edu/~rapaport/perry-positions.html ・ https://ii.library.jhu.edu/2013/12/13/perrys-scheme-understanding-the-intellectual-development-of-college-age-students/
