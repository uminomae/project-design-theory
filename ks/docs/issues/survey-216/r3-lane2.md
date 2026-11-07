# round 3 レーン 2: Frankl と Jaspers の「緊張を保つ」逐語 — researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` レーン 2。統合表への反映は v4。

## レーン 2: Frankl と Jaspers の「緊張を保つ」逐語 — round 3 報告（team-researcher）

### 1. 未確認のまま残っていたもの（統合表 v3 §7-1・§7-2、`docs/issues/survey-216/lane1-existential.md` L14-15・L33-34、`r2-laneA.md` L100-101、`r2-laneB.md` L140 を読んだ結果）
- Frankl: noö-dynamics の定義文は R1 の記憶ベース（"1959 Part II"）で、原文の逐語・版・頁・独語 Noodynamik のいずれも未確認。「緊張を無くすのではなく保つ」の文も逐語なし
- Jaspers: 「限界状況を経験することと実存することは同じ」は二次の逐語で、*Philosophie* II の頁・原語文・前後の文が未確認。*Einführung* 1950 ch.2 は未確認
- 両者とも R2（laneA/laneB）で「時間切れ・R1 を引いただけ」と明記されており、原典照合は本ラウンドが初

### 2. Handoff YAML
```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  findings:
    - claim: "Frankl の noö-dynamics 定義文は英訳本文に逐語で在る: What man needs is not homeostasis but what I call \"noö-dynamics,\" i.e., the spiritual dynamics in a polar field of tension where one pole is represented by a meaning that is to be fulfilled and the other pole by the man who has to fulfill it."
      evidence: "Open Library 全文検索（Internet Archive 所蔵本の OCR）で複数版に一致: Beacon 1959 版 ia:manssearchformea0000unse／Pocket Books 1963 ia:manssearchformea00vict・manssearchformea0000fran_l6z8／Washington Square Press 1969 ia:manssearchformea00fran／WSP 1984 ia:manssearchforme000fran／Rider 2004 ia:manssearchformea00vikt_0。節見出しは Noö-Dynamics（本文中の小見出し）。頁は取れず"
      confidence: high
      verification: [V1, V2]
    - claim: "1959/1963/1969 系の版は spiritual dynamics、1984 WSP・2004 Rider・2017 Beacon 系は existential dynamics と語が異なる（版差）"
      evidence: "上記 OCR スニペットの比較。1959 Beacon・1963 Pocket＝spiritual／1984 WSP・1984 Simon & Schuster・2004 Rider＝existential。2006 Beacon は未確認（二次 EJOP 2021 は existential で引用）"
      confidence: medium
      verification: [V2]
    - claim: "「緊張を無くすのではなく保つ」に当たる文は三文が逐語で在る: ① Thus it can be seen that mental health is based on a certain degree of tension, the tension between what one has already achieved and what one still ought to accomplish, or the gap between what one is and what one should become. Such a tension is inherent in the human being and therefore is indispensable to mental well-being. ② I consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium or, as it is called in biology, \"homeostasis,\" i.e., a tensionless state. What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task. ③ What he needs is not the discharge of tension at any cost, but the call of a potential meaning waiting to be fulfilled by him."
      evidence: "Open Library 全文検索: Beacon 1959 ia:manssearchformea0000unse／Beacon 1963 ia:manssearchformea0000fran_b9n3／Rider 2004／Beacon 2017 ia:manssearchformea0000fran_p2h1 で一致。①②③は同一節（Noö-Dynamics）内で連続する文。頁は取れず"
      confidence: high
      verification: [V1, V2]
    - claim: "Frankl の頁は一次で確定できず。二次の頁引用は 2006 Beacon 版 p.110（EJOP 2021 / PMC8763215）のみ。独語 Noodynamik の原文・頁は未確認"
      evidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8763215/ の引用 (p. 110)、参考文献 Frankl 2006 Man's search for meaning 6th ed. Beacon。Spektrum Lexikon『Noodynamik』は 403 で本文未読。Internet Archive の該当本は貸出限定で全文・頁内検索とも 401/403"
      confidence: low
      verification: [V1]
    - claim: "Jaspers *Philosophie* II の限界状況の定義文（独語・逐語）: ... daß ich nicht ohne Kampf und ohne Leid leben kann, daß ich unvermeidlich Schuld auf mich nehme, daß ich sterben muß, nenne ich Grenzsituationen. Sie wandeln sich nicht, sondern nur in ihrer Erscheinung; sie sind, auf unser Dasein bezogen, endgültig. Sie sind nicht überschaubar; ..."
      evidence: "Open Library 全文検索: Springer 1956 版 ia:philosophie0002jasp／Springer 1973 Band 2: Existenzerhellung ia:philosophieband10002karl で一致（第 7 章 Grenzsituationen）。頁は二次の一致引用 II 203-204（Bollnow *Existenzphilosophie* 1964「(II 204)」、*Glaube und Mythos*「(Ph II, 204)」、一巻本 1948 版は「(Ph 469)」）"
      confidence: high
      verification: [V1, V2]
    - claim: "「留まる・引き受ける」に当たる Jaspers の語は eintreten（offenen Auges）／erfahren／Werden der möglichen Existenz。逐語: Auf Grenzsituationen reagieren wir daher sinnvoll nicht durch Plan und Berechnung, um sie zu überwinden, sondern durch eine ganz andere Aktivität, das Werden der in uns möglichen Existenz; wir werden wir selbst, indem wir in die Grenzsituationen offenen Auges eintreten. ... Grenzsituationen erfahren und Existieren ist dasselbe."
      evidence: "ia:philosophie0002jasp／philosophieband10002karl の OCR 一致（「um sie zu überwinden」の句のみ二次経由）。英訳 Ashton: To experience boundary situations is the same as Existenz.（*Philosophy* vol.2 Chicago 1969/1970 ia:philosophy0000v2jasp・philosophy0002unse の OCR 一致）。英訳頁 p.179 は二次（Holmes, Existenz 14-1, 2019「[P2 179]」）。目次では ch.7 Boundary Situations p.177、節 4 The Desultory Genesis of Existenz in Boundary Situations p.179"
      confidence: high
      verification: [V1, V2]
    - claim: "*Einführung in die Philosophie* 第 2 講 Ursprünge der Philosophie の定義文（独語・本文○・頁あり）: Diese Grundsituationen unseres Daseins nennen wir Grenzsituationen. Das heißt, es sind Situationen, über die wir nicht hinaus können, die wir nicht ändern können. Das Bewußtwerden dieser Grenzsituationen ist nach dem Staunen und dem Zweifel der tiefere Ursprung der Philosophie."
      evidence: "Internet Archive 公開 PDF https://archive.org/download/jaspers-philosophie/Jaspers_Philosophie.pdf（Serie Piper Band 13、Piper München Zürich、刊年表記なし）印字頁 S.18。目次: 2. Ursprünge der Philosophie 16／Grenzsituationen 18／Erfahrung des Scheiterns und Selbstwerdens 20。二次（MThZ 1978）も「Neuausgabe 1971, 18-20」。英訳 Manheim *Way to Wisdom*（Yale 1951/1954/1960 ia:waytowisdomintro0000jasp 等）: We call these fundamental situations of our existence ultimate situations. That is to say, they are situations which we cannot evade or change. Along with wonder and doubt, awareness of these ultimate situations is the most profound source of philosophy.（頁未確認）"
      confidence: high
      verification: [V1, V2]
    - claim: "*Einführung* S.18-20 では限界状況への反応を三つに分ける: Verschleierung（覆い隠す）／Verzweiflung（絶望）／Wiederherstellung（立て直し。wir werden wir selbst in einer Verwandlung unseres Seinsbewußtseins）。S.20: Es ist entscheidend für den Menschen, wie er das Scheitern erfährt: ... ob er es unverschleiert zu sehen vermag und als ständige Grenze seines Daseins gegenwärtig hat; ob er phantastische Lösungen und Beruhigungen ergreift, oder ob er redlich hinnimmt im Schweigen vor dem Undeutbaren."
      evidence: "同 PDF 印字頁 S.18・S.20（本文○）"
      confidence: high
      verification: [V1, V2]
  questions:
    - type: clarifying
      target: "統合表 §7-1 Frankl 行の出典表記"
      content: "「1959 Part II」のまま置くか。IA の 1959 表記本に本文は在るが、Part II の題（1959 初版 Basic Concepts of Logotherapy／1962 以降 Logotherapy in a Nutshell）と頁は一次で未確認。版を「Beacon 1959/1963 系（spiritual）／1984 以降（existential）」と二系で書くか pjdhiro 判断"
    - type: probing
      target: "Frankl の tension の相手"
      content: "原文の緊張は what one has already achieved ↔ what one still ought to accomplish／what one is ↔ what one should become／a meaning that is to be fulfilled ↔ the man who has to fulfill it の三対。どれも「予想と現実の誤差」ではなく「現在と為すべき（ought・should）」の差。pjdhiro の「欠損」（予想と現実の誤差）と ought の差を同じ軸に置けるかは、場合分けのまま pjdhiro に戻す"
    - type: challenging
      target: "Jaspers 行の「留まる」という R1 の要約"
      content: "原文の動詞は eintreten（入る）・erfahren（経験する）・gegenwärtig haben（現前させ続ける）・hinnehmen（引き受ける）で、「留まる」は読み手の訳。統合表の「居る（留まる）」を原語に置き換えるか"
  insights:
    - "Frankl は「緊張を減らさない」ことを健康の条件として言うが、緊張の内容は規範的（ought/should/meaning to be fulfilled）で、臨床の文脈（mental hygiene・homeostasis 批判）。抱11「忍耐力や興味といった心理エネルギー」に当たる語は本節に無い（striving and struggling・call of a potential meaning が最も近い語）"
    - "Jaspers は二つの層で書き分けている: *Philosophie* II は「限界状況を経験すること＝実存すること」（状況そのものが変わらない。sie wandeln sich nicht）、*Einführung* は「限界状況の自覚＝哲学の源泉」（Staunen・Zweifel と並ぶ三つ目の源泉）。定11「実存的課題」「哲学の論を解説することになるかもしれない」に近いのは後者の Ursprung の文脈。両方を並べて置く（位11）"
    - "Jaspers の *Einführung* S.18 は「Im bloßen Dasein weichen wir oft vor ihnen aus, indem wir die Augen schließen und leben, als ob sie nicht wären」と、見ないで済ます側を先に書く。抱13「早く正解めいた結論を出してスッキリしたい欲求」に近い記述だが、対象は死・苦・争い・罪・偶然で、日常の違和感ではない（違い）"
```

### 3. 照合表
| 項目 | 原文（逐語） | 出典（版・章・頁） | 確認の深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| Frankl noö-dynamics 定義 | What man needs is not homeostasis but what I call "noö-dynamics," i.e., the spiritual [1984 以降: existential] dynamics in a polar field of tension where one pole is represented by a meaning that is to be fulfilled and the other pole by the man who has to fulfill it. | *Man's Search for Meaning* Part II 小見出し Noö-Dynamics。Beacon 1959/1963・Pocket 1963・WSP 1969/1984・Rider 2004（IA 所蔵 OCR）。頁未取得（二次: 2006 Beacon p.110） | 本文○（頁×） | 緊張の場を無くさず二極のまま持つ構え | 二極は「為すべき意味」と「人」。誤差・予測の語は無い。規範的・臨床的 |
| Frankl「緊張を無くさず保つ」① | Thus it can be seen that mental health is based on a certain degree of tension, the tension between what one has already achieved and what one still ought to accomplish, or the gap between what one is and what one should become. Such a tension is inherent in the human being and therefore is indispensable to mental well-being. | 同節。Beacon 1959（ia:manssearchformea0000unse）・Beacon 1963（_b9n3）他 | 本文○（頁×） | gap を健康の条件として持つ点 | gap は achieved↔ought／is↔should。「ゼロのはずなのに違和感」（定12）の 0 ではなく、不足が自覚されている gap |
| Frankl ② | I consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium or, as it is called in biology, "homeostasis," i.e., a tensionless state. What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task. | 同節 | 本文○（頁×） | 解消（tensionless）を目的にしない点 | 向かう先は goal／task（目標志向）。問いを問いのまま持つとは言わない |
| Frankl ③ | What he needs is not the discharge of tension at any cost, but the call of a potential meaning waiting to be fulfilled by him. | 同節 | 本文○（頁×） | discharge（放電・解消）を拒む点 | 「保つ」主体は人でなく「意味の呼びかけ」が先 |
| Frankl 独語 Noodynamik | （未取得） | *Ärztliche Seelsorge* 等。Spektrum Lexikon は 1946 導入とする（要旨） | 要旨 | — | — |
| Jaspers 限界状況 定義（*Philosophie* II） | ... daß ich nicht ohne Kampf und ohne Leid leben kann, daß ich unvermeidlich Schuld auf mich nehme, daß ich sterben muß, nenne ich Grenzsituationen. Sie wandeln sich nicht, sondern nur in ihrer Erscheinung; sie sind, auf unser Dasein bezogen, endgültig. Sie sind nicht überschaubar; | *Philosophie* II（Springer 1932；1956 3 版 ia:philosophie0002jasp；1973 版 ia:philosophieband10002karl）第 7 章 Grenzsituationen。頁は二次一致で II 203-204（一巻本 1948＝469） | 本文○（頁は二次） | 変わらない・見渡せないものを前にして居る点 | 対象は死・苦・争い・罪（＋偶然）。endgültig（最終的）で、解けることを前提にしない。日常の違和感ではない |
| Jaspers「留まる・引き受ける」 | Auf Grenzsituationen reagieren wir daher sinnvoll nicht durch Plan und Berechnung, um sie zu überwinden, sondern durch eine ganz andere Aktivität, das Werden der in uns möglichen Existenz; wir werden wir selbst, indem wir in die Grenzsituationen offenen Auges eintreten. ... Grenzsituationen erfahren und Existieren ist dasselbe.／英訳 Ashton: To experience boundary situations is the same as Existenz. | 同章 II 204（二次一致）。英訳 *Philosophy* vol.2 Chicago 1969/1970（ia:philosophy0000v2jasp・philosophy0002unse）p.179（二次 Holmes 2019。目次節 4 は p.179） | 本文○（頁は二次） | 計画・計算で解かず、目を開けて入る（offenen Auges eintreten）構え | 動詞は eintreten／erfahren／Werden。「保つ」「問いにする」の語は無い。実存の生成が主題 |
| Jaspers 限界状況 定義（*Einführung*） | Diese Grundsituationen unseres Daseins nennen wir Grenzsituationen. Das heißt, es sind Situationen, über die wir nicht hinaus können, die wir nicht ändern können. Das Bewußtwerden dieser Grenzsituationen ist nach dem Staunen und dem Zweifel der tiefere Ursprung der Philosophie.／英訳 Manheim: ... ultimate situations. That is to say, they are situations which we cannot evade or change. Along with wonder and doubt, awareness of these ultimate situations is the most profound source of philosophy. | *Einführung in die Philosophie*（1950 初版。Piper Serie Piper 13 版 S.18、第 2 講 Ursprünge der Philosophie。IA 公開 PDF jaspers-philosophie）。英訳 *Way to Wisdom* Yale 1951/1954/1960（頁×） | 本文○（独語は頁○） | 「自覚（Bewußtwerden）が哲学の源泉」＝気になることが探索を起こす点（定12 に近い） | 源泉は Staunen（驚き）・Zweifel（疑い）・Grenzsituation の三つで、違和感一般ではない。「超えられない・変えられない」状況が前提 |
| Jaspers 反応の三分 | Auf Grenzsituationen aber reagieren wir entweder durch Verschleierung oder, wenn wir sie wirklich erfassen, durch Verzweiflung und durch Wiederherstellung: wir werden wir selbst in einer Verwandlung unseres Seinsbewußtseins.／S.20: ob er es unverschleiert zu sehen vermag und als ständige Grenze seines Daseins gegenwärtig hat; ob er phantastische Lösungen und Beruhigungen ergreift, oder ob er redlich hinnimmt im Schweigen vor dem Undeutbaren. | 同 S.18・S.20 | 本文○ | gegenwärtig haben（現前させ続ける）・hinnehmen（引き受ける）が「保つ」側。Beruhigungen ergreifen（安心をつかむ）が 抱13 の「スッキリしたい欲求」側 | 対象は Scheitern（挫折）。認知の誤差ではなく存在の限界 |

### 4. 確認できなかったもの
- Frankl の頁（全版）: Internet Archive の該当本は全て貸出限定で、全文 txt（401）・頁内検索 API（Item not available）とも不可。Open Library 全文検索は本文一致は返すが頁を返さない。Google Books API は日次クォータ超過。二次の頁は 2006 Beacon p.110 のみ（EJOP 2021）
- Frankl 1959 初版の Part II 題と、noö-dynamics 節が 1959 初版に在るか（1962 増補で Part II が差し替えられたとする二次あり。IA の 1959 表記本に本文は在るが、刷の年は未確認）
- Frankl 独語 Noodynamik の原文・出典頁: Spektrum Lexikon 403、他は二次要旨のみ
- Jaspers *Philosophie* II の頁 203-204 と *Philosophy* vol.2 の p.179 は二次引用の一致で置いた（一次の頁画像は未見）。「um sie zu überwinden」の句は二次経由
- *Way to Wisdom*（Manheim 訳）の頁: 本文一致はあるが頁なし。Piper 版の刊年は PDF に表記なし（Serie Piper 13＝1971 新版系と推定。推定）

### 5. 問い・insights
上記 YAML の questions（clarifying 1・probing 1・challenging 1）と insights 3 件のとおり。追加なし。

### 参照 URL（V1 済）
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8763215/（Frankl 2006 p.110 の二次引用）
- https://archive.org/download/jaspers-philosophie/Jaspers_Philosophie.pdf（*Einführung* Piper 版 PDF、S.18-20）
- https://archive.org/details/philosophie0002jasp ／ https://archive.org/details/philosophy0000v2jasp ／ https://archive.org/details/manssearchformea0000unse（いずれも貸出限定。本文一致は Open Library search/inside.json 経由）
- https://existenz.us/volumes/Vol.14-1Holmes.html（Ashton 訳 p.179 の二次）

ローカル参照: `docs/issues/ISS-216-candidate-survey.md` §7-1 L158-159・§7-2 L193-198、`docs/issues/survey-216/lane1-existential.md` L14-15・L33-34、`survey-216/r2-laneA.md` L100-101、`survey-216/r2-laneB.md` L140。ファイルの作成・編集なし。
