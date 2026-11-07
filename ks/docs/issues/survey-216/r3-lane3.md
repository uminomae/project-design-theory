# round 3 レーン 3: Litman 2005 の I-type／D-type の定義 — researcher 報告（原文転記・2026-11-02）

> Main 注: team-researcher（fable）の最終報告をそのまま転記。ブリーフ `../ISS-216-survey-brief-r3.md` レーン 3。統合表への反映は v4。

## レーン 3: Litman 2005 の I-type／D-type の定義 — 照合報告（READ-ONLY・ファイル作成なし）

### 1. 未確認のまま残っていたもの（統合表 v3 §7-2 L174-175・r2-laneB L21-23, L87-88・critic r2 L61, L123）

1. Litman 2005（Cogn Emot 19(6) 793-814）は書誌 V1 のみで要旨・本文未読。「need to know」「take it or leave it」は 2019 章要旨と二次からの転記で、2005 本文の語かが未確認
2. I-type が「解消を目的としない」と書いているか、「解消せず保つ」とまで書いているか（critic r2 major）が原典で未確認
3. Litman 2010（PID 48(4)）の need for closure・曖昧さ耐性との結果が未読

### 2. Handoff YAML

```yaml
handoff:
  from: "researcher"
  phase: 1
  round: 3
  lane: 3
  findings:
    - claim: "Litman 2005 の要旨は wanting／liking の神経科学を I/D 理論に統合する提案で、I-type・D-type の定義文も「take it or leave it」「need to know」も要旨には無い。要旨は I/D 理論を Litman & Jimerson (2004) のものとして参照する"
      evidence: "OpenAlex 記録（doi:10.1080/02699930541000101）の abstract_inverted_index を復元。原文: 'evaluates these models in relation to Litman and Jimerson's (2004) recently developed interest-deprivation (I/D) theory of curiosity' / 'an integrative I/D/wanting-liking model is proposed'。Cogn Emot 19(6) 793-814（Crossref で V1）"
      confidence: high   # 要旨は逐語。本文は未読（T&F は Cloudflare 403）
      verification: [V1, V2]
    - claim: "「need to know」「take it or leave it」は Litman 本人の語（2019 章要旨 p.418・本文 p.420）で、本文では Litman 2005, 2008 を出典として挙げる。ただし 2005 本文中にこの語があるかは本レーンでは確認できず"
      evidence: "Litman 2019 'Curiosity: Nature, Dimensionality, and Determinants', Cambridge Handbook of Motivation and Learning ch.17 pp.418-442（著者サイト PDF https://drjlitman.net/papers/Litman-2019-Cambridge-chapter.pdf）p.420: 'D-type curiosity is theorized to reflect an uncomfortable \"need to know\" that becomes increasingly bothersome until satisfied by obtaining the desired specific pieces of missing information (Litman, 2005, 2008). By contrast, I-type curiosity is theorized to be a more relaxed \"take it or leave it\" attitude toward the discovery of new information, more broadly speaking, in which the aim is simply to have fun while learning.'"
      confidence: high   # 2019 本文は逐語。2005 本文への帰属は著者の自己引用のみ
      verification: [V1, V2]
    - claim: "I/D の定義の原出典は Litman & Jimerson (2004)。I-type は「重要な情報が欠けているとは感じていない」場面で、D-type は「不完全な理解に気づいた」ときに起こる（gap の自覚が D-type の前提）"
      evidence: "Litman 2019 p.420: 'According to Litman and Jimerson (2004), experiences of interest-type (I-type) curiosity are expressed in situations where individuals do not feel they are missing any important pieces of information, per se, but rather find an opportunity to learn something new that is anticipated to be aesthetically pleasing or entertaining ... Deprivation-type (D-type) curiosity, on the other hand, is activated when individuals become aware that they have an incomplete understanding of something they want to make sense of'。Litman & Jimerson 2004 J Pers Assess 82(2) 147-157 は本レーンでは書誌のみ（未 V1）"
      confidence: high
      verification: [V1, V2]
    - claim: "I-type の目的は「situational interest を誘発する」こと、D-type は「situational uncertainty を低減する」こと。I-type について「解消せず保つ」「不確実さを維持する」と書いた文は 2019 章・2015 論文・2005 要旨のどこにも無い"
      evidence: "Litman 2019 p.421: 'being motivated either to induce situational interest or reduce situational uncertainty, respectively'。同 p.420 脚注1: 'curiosity always involves a desire for information perceived as (presently) unavailable' / 'increased contact with a curiosity-arousing stimulus always reduces curiosity'。同 p.424: 'the primary function of curiosity is to energize seeking out and obtaining new information capable of resolving recognized discrepancies in our available knowledge (Litman, 2005; Loewenstein, 1994)'"
      confidence: high   # critic r2 の指摘（目的が解消でない ≠ 解消せず保つ）を原典で裏づけ
      verification: [V1, V2]
    - claim: "wanting-liking モデル: D-type は wanting 高・liking 同程度（不快が増し、満たすと強い快と relief）、I-type は wanting 低・liking 相対的に高（快、強度は控えめ、探索は less determined）"
      evidence: "Litman 2019 p.432: 'According to Litman (2005, 2010), the qualitative and quantitative differences found between I-type and D-type curiosity reflect subjective experiences that emerge due to the degree of an individual's initial wanting of new information and the relative degree of subsequent liking' / I-type: 'less determined and lower likelihood' of information-seeking"
      confidence: high
      verification: [V1, V2]
    - claim: "Litman 2010 の結果（著者共著 2015 の記述経由）: I-type は曖昧さ耐性と正相関、D-type は曖昧さ耐性と負相関・negative affect と正相関。D-type は「正しい情報でしか満たされない」ので need for closure とは同値でない"
      evidence: "Lauriola, Litman, Mussel, De Santis, Crowson & Hoffman 2015, PID 83, 202-207（著者サイト PDF https://drjlitman.net/papers/Lauriola-et-al-2015.pdf）p.202: I-type 'correlates positively with openness, preference for novelty, tolerance of ambiguity ... (Litman, 2010; Litman & Mussel, 2013)'; D-type 'correlates negatively with ambiguity-tolerance ... (Litman, 2010 ...)'; p.203: 'D-type EC states can only be satisfied by the right piece of information – merely discovering any new knowledge will simply not suffice (i.e., it is not equivalent to Need for Closure; Litman, 2010)'"
      confidence: medium   # 2010 の要旨・本文は未読（OpenAlex・Semantic Scholar とも abstract null）。共著者の後年記述
      verification: [V1, V2]
    - claim: "著者サイトの I/D モデル表では、I-type の活性化条件は「事前知識がほとんど無い」とき、D-type は「ある程度の事前知識がある／解けそうに感じる」とき。D-type の報酬は「未知を払う relief」"
      evidence: "https://drjlitman.net/context: I-type 'When individuals have little or no prior knowledge' / D-type 'When individuals have some prior knowledge or feel close to solving a problem' / 'The anticipated relief from dispelling an unknown'（図注は Litman 2008）"
      confidence: medium   # 著者サイト（査読外）
      verification: [V1, V2]
  questions:
    - type: probing
      target: "Litman & Jimerson 2004 J Pers Assess 82(2)"
      content: "I/D の定義文の原出典は 2004。統合表の Litman 行の書誌を 2004（定義）＋2005（wanting-liking）に分けるか"
    - type: clarifying
      target: "定12「ゼロのはずなのに違和感がある」"
      content: "D-type は「不完全な理解に気づいた」が前提、I-type は「欠けているとは感じていない」が前提。定12 の違和感は gap の自覚があるのか無いのか（統合表 §8 の二つの読みと同じ分岐）"
    - type: challenging
      target: "統合表 §7-2 I-type 行「解消を目的としない」"
      content: "Litman は I-type も「現在手に入らない情報への欲求」であり接触で低減すると書く（脚注1）。「解消を目的としない」より「低減の対象が不確実さではなく、新情報の享受が目的」と書く方が原典に近いのではないか"
  insights:
    - "「take it or leave it」「need to know」は著者本人の語だが、2005 本文に在るかは未確認。出典表記は「Litman 2019 p.420（Litman 2005, 2008 を参照）」が安全"
    - "I-type／D-type の分岐軸は gap の自覚（D）か否（I）。定12 の「探索」が I と D のどちらかは、違和感に gap の自覚が伴うかで分かれる。両方を残す（位11）"
```

### 3. 照合表

| 項目 | 原文（逐語） | 出典（版・章・頁） | 確認の深さ | 抱持との近さ | 違い |
|---|---|---|---|---|---|
| 2005 要旨の主題 | "proposes a new theoretical model of curiosity that incorporates the neuroscience of 'wanting' and 'liking' ... an integrative I/D/wanting-liking model is proposed" | Litman 2005 Cogn Emot 19(6) 793-814、要旨（OpenAlex 復元） | 要旨○（本文未読） | 「気になって探索したくなる」の情動側の説明装置 | I/D の定義文は要旨に無い。「誤差を問いとして保つ」記述なし |
| I-type 定義 | "expressed in situations where individuals do not feel they are missing any important pieces of information, per se, but rather find an opportunity to learn something new that is anticipated to be aesthetically pleasing or entertaining" | Litman 2019 ch.17 p.420（Litman & Jimerson 2004 を参照） | 本文○（2019） | 解消を急がない態度 | 欠けを感じていないことが前提。定12「違和感」と前提が逆 |
| D-type 定義 | "activated when individuals become aware that they have an incomplete understanding of something they want to make sense of" | 同 p.420 | 本文○（2019） | 「気になって」の側 | gap の自覚が前提。満たすことが目的 |
| need to know | "an uncomfortable 'need to know' that becomes increasingly bothersome until satisfied by obtaining the desired specific pieces of missing information (Litman, 2005, 2008)" | 同 p.420（要旨 p.418 にも） | 本文○（2019）／2005 本文は未確認 | 抱13「スッキリしたい」と語は近い | 不快が増し、特定情報で満たすまで続く。保つ機能ではない |
| take it or leave it | "a more relaxed 'take it or leave it' attitude toward the discovery of new information ... in which the aim is simply to have fun while learning" | 同 p.420 | 本文○（2019）／2005 本文は未確認 | 保つ圧の低さ | 目的は楽しむこと。誤差を問いとして保つ記述なし |
| 目的の対比 | "being motivated either to induce situational interest or reduce situational uncertainty, respectively" | 同 p.421 | 本文○ | 場合分けの軸そのもの | I も「現在手に入らない情報への欲求」で接触により低減（脚注1 p.420） |
| 好奇心の機能 | "the primary function of curiosity is to energize seeking out and obtaining new information capable of resolving recognized discrepancies in our available knowledge (Litman, 2005; Loewenstein, 1994)" | 同 p.424 | 本文○ | 「誤差」を扱う点 | 認識済みの discrepancy の解消。棄却される誤差を拾う態度ではない |
| wanting-liking と I/D | "high levels of wanting activation are theorized to underlie the affective tone of ... D-type curiosity-states (i.e., increasingly bothersome until sated)" / I-type: "relatively low levels of initial wanting ... (generally pleasant) ... (less determined and lower likelihood)" | 同 p.432（Litman 2005, 2010 を参照） | 本文○ | 抱11「心理エネルギー」に当たりうる量的軸 | 保つ機能ではなく欲求の強さ |
| need for closure | "D-type EC states can only be satisfied by the right piece of information – merely discovering any new knowledge will simply not suffice (i.e., it is not equivalent to Need for Closure; Litman, 2010)" | Lauriola et al. 2015 PID 83 p.203 | 本文○（2015）／2010 本文・要旨は未確認 | 抱13 との区別に使える | D-type は正確な解を要求。「早く結論」とは別 |
| 曖昧さ耐性 | I-type "correlates positively with ... tolerance of ambiguity"; D-type "correlates negatively with ambiguity-tolerance ... essentially unrelated to positive affect (Litman, 2010 ...)" | 同 pp.202-203 | 本文○（2015）／2010 未確認 | 「保つために何が必要か」（抱12）の性格側候補 | 相関であり機構ではない |

### 4. 確認できなかったもの

- Litman 2005 本文: Taylor & Francis は WebFetch 403・curl も Cloudflare チャレンジ。Semantic Scholar・Crossref は abstract 省略。OpenAlex で要旨のみ復元。「take it or leave it」「need to know」が 2005 本文に在るかは未確認（2019 の自己引用で 2005, 2008 を挙げるのみ）
- Litman 2008 PID 44(7) 1585-1595: 書誌 V1（Crossref/OpenAlex）。要旨は OpenAlex・Semantic Scholar とも null。未読
- Litman 2010 PID 48(4) 397-402: 書誌 V1。要旨 null。結果は Lauriola et al. 2015 の記述経由のみ
- Litman & Jimerson 2004 J Pers Assess 82(2) 147-157: 2019 章・2005 要旨が定義の原出典として参照。本レーンでは未 V1
- PMC 検索（"take it or leave it" + Litman）: 0 件
- Cambridge Core の 2019 章ページ: DNS 不達。章の書誌は PDF 内の柱（"17 Curiosity"、pp.418-442）と machias.edu・検索結果の cambridge.org URL で確認

### 5. 問い・insights

YAML の questions・insights のとおり。追加 1 点: 統合表 §7-2 の Litman 行「書誌＋2019 章要旨・二次。本文未読」は「2005 要旨○・2019 本文○・2015 本文○・2005/2008/2010 本文未読」に更新できる。

### 参照ローカルファイル
- `docs/issues/ISS-216-candidate-survey.md`（§7-2 L168-180）
- `docs/issues/survey-216/r2-laneB.md`（L21-23, L87-88）
- `docs/issues/survey-216/review-critic-r2.md`（L32, L61, L123）
- 抽出テキスト（scratchpad、揮発）: litman2019.txt、lauriola2015.txt
