---
title: RR-037 感情の流れ 部品四本の一次回収 — Rutledge/Sterling/Aston-Jones/DynAffect
issue: pd#129
date: 2026-07-15
phase: 次ラウンド宿題回収（RR-031 §8 宿題1・2・4・5）
method: PMC 全文（Rutledge）＋出版社公式アブストラクト（Sterling/Aston-Jones/DynAffect）を一次取得。ペイウォール body は越えない
lens: [[feedback_resemblance_depth_over_caveats]]／[[feedback_cs_paper_acquisition]]（OA 優先・アクセスレベル明記・書誌クロスチェック）
honesty記号: ★=定理/数理同型(literal)・●=強い実証・◐=示唆的/理論提案・○=係争・△=naming coincidence 境界
supersedes: RR-031 §8 宿題1・2・4・5（本ノートで到達レベルを更新）
---

# RR-037 感情の流れ 部品四本の一次回収

RR-036（臨界減速の橋）に続く宿題回収。RR-031 §8 の宿題1・2・4・5 について、OA 優先で一次を取りに行った結果を**到達レベルを正直に区別**して記録する。

## 取得結果サマリ（アクセスレベルを分けて明記）

| 宿題 | 論文 | 到達レベル | 取得経路 |
|------|------|-----------|----------|
| 5 | Rutledge et al. 2014 *PNAS* 111:12252（happiness 方程式） | **一次全文**（★方程式逐語確保） | PMC4143018 HTML |
| 1 | Sterling 2012 *Physiol. Behav.* 106:5（アロスタシス） | **一次アブストラクト**（numbered-advantages i–iv を逐語確保＝宿題の本丸） | efetch 公式抄録。body は ScienceDirect ペイウォール（OA なし確認） |
| 2 | Aston-Jones & Cohen 2005 *Annu. Rev. Neurosci.* 28:403（適応的ゲイン） | **一次アブストラクト**（phasic/tonic・exploitation/exploration・adaptive gain 確保／ゲイン傾き・逆U字の逐語は body 止まり） | efetch 公式抄録。body は Annual Reviews ペイウォール（OA なし確認） |
| 4 | Kuppens/Oravecz/Tuerlinckx 2010 *JPSP* 99:1042（DynAffect） | **一次アブストラクト**（home base＝baseline attractor・三過程 確保／OU-SDE 式は body/SI 止まり） | efetch 公式抄録。body は APA ペイウォール（OA なし確認） |

OA 探索の diligence（宿題1・2・4）: PMC citedby のみ（本文なし）・Europe PMC `isOpenAccess:N`・Semantic Scholar `openAccessPdf:none` を三経路で確認。**ペイウォールは越えない**方針に従い、出版社が公開する公式アブストラクト（＝一次の抄録レベル）で確保した。書誌は PMID→title→journal→volume を個別照合済み。

## 宿題5 Rutledge 2014 — happiness 方程式（一次全文・★）＝ Eldar「気分＝運動量」の実証アンカー

**逐語（本文の式）**:
> Happiness(t) = w₀ + w₁ Σⱼ₌₁ᵗ γ^(t−j) CRⱼ + w₂ Σⱼ₌₁ᵗ γ^(t−j) EVⱼ + w₃ Σⱼ₌₁ᵗ γ^(t−j) RPEⱼ

（CR＝certain rewards、EV＝選んだ賭けの expected value、RPE＝reward prediction error、**γ＝forgetting factor**「makes events in more recent trials more influential than those in earlier trials」、w₀＝定数）

**逐語（Abstract の結論）**:
> "momentary happiness in response to outcomes … is explained **not by current task earnings, but by the combined influence of recent reward expectations and prediction errors** … The robustness of this account was evident in a large-scale replication involving **18,420 participants**."

**橋にどう効くか（●／★）**: RR-031 L93 は Eldar 2016「気分＝報酬の運動量（変化率）」を「Rutledge 2014 で行動・神経実証あり＝●寄り」と書いた。一次で確定：瞬間の幸福は**現在の水準（earnings）ではなく、最近の期待と予測誤差の重み付き和**で説明される＝**水準でなく変化・ズレを追う**という「運動量（一階微分）」像の直接の実証。しかも γ による指数減衰＝**leaky integrator**＝RR-031 の OU/flow 構造（過去を漏らしながら足す）と同じ数理骨格。18,420 名で追試・striatal fMRI とも一致（●堅い）。

**limit**: momentum なのは**報酬・情報**であって物理の運動量 p=mv ではない（RR-031 の既存 hedge を維持）。式は RPE の指数減衰つき移動平均＝情報処理量。

## 宿題1 Sterling 2012 — numbered-advantages を著者抄録から逐語確保（宿題の本丸）

RR-031 §8 宿題1 は「numbered-advantages 逐語は未取得（Barrett 引用経由の定義文のみ確保）」だった。**Sterling 自身のアブストラクトに numbered list が逐語で載っている**ので、本丸は解消：
> "The advantages: **(i) errors are reduced in magnitude and frequency; (ii) response capacities of different components are matched — to prevent bottlenecks and reduce safety factors; (iii) resources are shared between systems to minimize reserve capacities; (iv) errors are remembered and used to reduce future errors.** This regulatory strategy requires a dedicated organ, the brain."

さらに定義の逐語（Barrett 経由でなく Sterling 直）:
> "allostasis … proposes that efficient regulation requires **anticipating needs and preparing to satisfy them before they arise**."

**橋にどう効くか（●）**: RR-031 床①（代謝＝予測的配分）の一次土台が Barrett 引用から Sterling 直の抄録に格上げ。「予測して先回りで配る」＝pjdhiro の「エネルギーが流れて配られる」像の物理側受け皿、が一次で確定。**残**: body の predictive-regulation 詳細（血流・trade-off の具体）は ScienceDirect ペイウォールで body 未取得だが、numbered-advantages という宿題の核は abstract で足りる。

**limit（維持）**: 「アロスタシスがホメオスタシスを置換するか」は係争（○）。抄録は Sterling の主張であって決着ではない。

## 宿題2 Aston-Jones & Cohen 2005 — 二モードは抄録で確保・ゲイン傾きは body 止まり

**逐語（Abstract）**:
> "LC neurons exhibit two modes of activity, **phasic and tonic**. Phasic LC activation … help optimize task performance (**exploitation**). When utility in the task wanes, LC neurons exhibit a **tonic activity mode, associated with disengagement … and a search for alternative behaviors (exploration)**."

タイトルに "**adaptive gain** and optimal performance"。

**橋にどう効くか（●／△）**: RR-031 §3（覚醒＝制御変数）の骨子——位相性/持続性の二モードが搾取↔探索を切り替える——を一次抄録で確保。覚醒＝エネルギーでなく「流れを絞る弁／利得」という制御変数読みの土台。**残（宿題継続）**: 「ゲイン＝活性化関数の傾き(steepness)」「逆U字＝Yerkes-Dodson」の逐語は body/図にあり抄録には無い＝Annual Reviews ペイウォールで未取得。ここは Jepma 2011 学位論文経由の二次接地を維持する（RR-031 現状どおり）。

## 宿題4 DynAffect 2010 — home base＝attractor を著者抄録で確保・OU 式は body/SI 止まり

**逐語（Abstract）**:
> "individuals are characterized by an **affective home base, a baseline attractor state around which affect fluctuates**. These fluctuations vary as the result of internal or external processes … and are regulated and tied back to the home base by the **attractor strength**. Individual differences in these 3 processes — affective home base, variability, and attractor strength …"（実証は "a **diffusion modeling** approach in 2 extensive experience-sampling studies"）

**橋にどう効くか（★書誌／●実証）**: RR-031 床②（力学系＝flow）の核「home base＝attractor・三パラメータ（μ・σ・β）」を著者抄録で一次確保。"diffusion modeling"＝拡散過程＝OU の族。**残（宿題継続）**: `dθ=β(μ−θ)dt+σdW` の**式そのもの**は body/SI にあり抄録には無い＝APA ペイウォールで未取得。RR-031 の既存三重接地（abstract＋著者ソフト頁＋継続論文の OU 式）を維持する。式の literal 性の最終確定は継続論文（Oravecz ら）の OU 式が担っている。

## RR-031 §8 への含意（到達レベル更新）

- 宿題5（Rutledge）: **一次全文で解消**（★方程式・●18,420 名追試）。
- 宿題1（Sterling numbered-advantages）: **宿題の核を一次抄録で解消**（body 詳細のみ paywalled 残）。
- 宿題2（Aston-Jones）: **二モード・adaptive gain を一次抄録で確保**／ゲイン傾き・逆U字の逐語は paywalled 残＝Jepma 二次を維持。
- 宿題4（DynAffect）: **home base=attractor・三過程を一次抄録で確保**／OU-SDE 式は paywalled 残＝継続論文経由を維持。

**overclaim ガード**: 抄録レベルの確保を「本文逐語で確定」と書かない。表のアクセスレベル列（一次全文／一次アブストラクト／body paywalled）を READER 反映時も保つ。ペイウォール body が要るのは「ゲイン傾きの逆U字定式（宿題2）」と「DynAffect の OU 式そのもの（宿題4）」の二点のみで、いずれも二次で既に接地済み＝橋の主張は揺らがない。

## 宿題5 残片 Scherer CPM 原典（Sander/Grandjean/Scherer 2005）＝一次アブストラクト確保

RR-031 §9「自己組織化としての感情」で Lewis 2005 と並置される Scherer の Component Process Model（CPM）の原典を確定・抄録確保。
> Sander, Grandjean & Scherer (2005) "A systems approach to appraisal mechanisms in emotion", *Neural Networks* 18(4):317–352（DOI 10.1016/j.neunet.2005.03.001）。

**逐語（Abstract）**: CPM は "an appraisal-based emotion theory … particularly suited to modeling with the help of artificial neural network approaches … due to its high degree of specificity in postulating underlying mechanisms including efferent physiologi[cal]…"。＝感情を「評価サブシステムの逐次・非線形処理」として機構レベルで定式化し ANN 実装に向く、と著者が位置づけ。

**橋にどう効くか（◐）**: RR-031 §9 の「感情＝自己組織化（引き金→自己増幅→自己安定化）」の一角。CPM は評価過程の**構成部品と時間展開**を機構化する枠組みで、Lewis の力学系創発と同じ「部品から全体が立ち上がる」語彙。ただし ◐（理論枠組み・fitted model ではない）。body（NN 実装詳細）は Elsevier ペイウォールだが、READER で必要なのは「機構レベルの評価過程モデルが存在する」という位置づけで、抄録で足りる。

## 残る宿題（本ノート範囲外）

- 宿題2 の gain-steepness/逆U字 body 逐語・宿題4 の OU-SDE body 逐語 → **✅ 断念（2026-07-15 pjdhiro 判断）**。ResearchGate 経由の再取得を試行したが403（bot拒否）、Semantic Scholar API も429（キー無しレート制限）で取得不能を再確認。二次接地（Jepma 学位論文経由・継続論文の OU 式）で橋は既に成立しており、これ以上の追跡は行わない。
- 合成レベル＝人間間バースト同期の直接測定（RR-034 の空白）＝別筋・**RR-038 で網羅探索を実施**（本ノートと同ラウンド）。
