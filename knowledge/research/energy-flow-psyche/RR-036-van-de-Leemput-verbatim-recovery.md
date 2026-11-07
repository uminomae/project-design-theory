---
title: RR-036 臨界減速の橋 — van de Leemput 2014 PNAS 応酬の一次逐語回収
issue: pd#129
date: 2026-07-15
phase: 次ラウンド宿題回収（RR-031 §8 宿題3・最優先＝§1↔§2 溶接の橋）
method: PMC 全文取得（efetch XML＋pmc.ncbi HTML）→ Main が逐語抽出・精査
lens: [[feedback_resemblance_depth_over_caveats]]（留保は線引きに使う・係争の所在を正確に）
honesty記号: ★=定理/数理同型(literal)・●=強い実証・◐=示唆的/理論提案・○=係争・△=naming coincidence 境界
supersedes: RR-031 §8 宿題3（本ノートで CONFIRMED に昇格）
---

# RR-036 臨界減速の橋 — van de Leemput 2014 応酬の一次逐語回収

## なぜこれが最優先だったか

RR-031 は「§1（相転移・臨界）↔ §2（感情の流れ）を溶接する**最強の橋候補＝臨界減速**が、同時に**最も弱く接地された主張**」という緊張を指摘し、READER では「報告された・係争あり」と hedge するよう求めた（RR-031 L79-81）。この橋は二次資料（Kuppens & Verduyn 2017 のレビュー引用）経由でしか接地されておらず、**一次の定式陳述・分岐タイプ・批判応酬の逐語が宿題**として残っていた。本ノートで三論文の全文を回収し、CONFIRMED に昇格する。

## 回収した三論文（書誌クロスチェック済み・PMID→title→journal を照合）

| 役割 | 書誌 | PMID / PMCID | アクセスレベル |
|------|------|--------------|----------------|
| 本論文 | van de Leemput et al. (2014) "Critical slowing down as early warning for the onset and termination of depression." *PNAS* 111(1):87–92. DOI 10.1073/pnas.1312114110 | 24324144 / PMC3890822 | **一次全文**（PNAS open access option・PMC HTML 213KB） |
| 批判 | Bos & De Jonge (2014) "'Critical slowing down in depression' is a great idea that still needs empirical proof." *PNAS* 111(10):E878. DOI 10.1073/pnas.1323672111 | 24550518 / PMC3956175 | **一次全文**（PMC HTML） |
| 著者 Reply | van de Leemput et al. (2014) "Reply to Bos and De Jonge: Between-subject data do provide first empirical support for critical slowing down in depression." *PNAS* 111(10):E879. DOI 10.1073/pnas.1323835111 | 24757714 / PMC3956158 | **一次全文**（PMC HTML） |

取得経路: NCBI eutils esearch→esummary で書誌確定→elink で PMCID→`pmc.ncbi.nlm.nih.gov/articles/PMC*/` の HTML を UA 付き curl。efetch(db=pmc) XML は PNAS 本文 body を返さず abstract/significance 止まり（PMC HTML 側に本文あり）。[[reference_wiki_source_fetch_routes]] の PubMed 経路どおり。誤ヒット検証＝三 PMID の title/journal/volume を esummary で個別照合済み。

## 一次逐語 ① 臨界減速の定式（本論文）＝ §1↔§2 溶接の数理核

> "critical slowing down happens as the dominant eigenvalue, characterizing the return rate to equilibrium upon small perturbations, **goes to zero** in tipping points related to **zero-eigenvalue bifurcations**. … close to the tipping point where the basin of attraction becomes shallower, return to equilibrium upon small perturbations will become slower."（本論文 Introduction）

**橋にどう効くか（★）**: 臨界減速の数学的定義は「**平衡への復元率＝支配的固有値がゼロに近づく**」こと。これは RR-031 L69 の OU 過程 `dx = −β(x−μ)dt + σdW` の **減衰係数 β → 0** と**同じ量**である。谷（basin of attraction）が浅くなる＝β が小さくなる＝復元が遅くなる＝分散と自己相関が増える。つまり臨界減速は「感情＝状態空間を流れる軌道」という §2 の flow 読みと、「相転移・分岐の直前」という §1 の臨界読みを、**β という一つのパラメータで literal に接続する**。ball-in-a-cup（谷の中のボール）像は RR-031 の「谷が浅く/深くなる」像の一次出典。

**分岐タイプ（★→書誌確定）**: 原文の語は "a family of **catastrophic bifurcations**" かつ "**zero-eigenvalue bifurcations**"。RR-031 が「分岐タイプ未確定」としていた宿題を確定＝**カタストロフィ型（支配的固有値がゼロを横切る）分岐族**。〔原文は "fold/saddle-node" と個別名は書いていない。Scheffer 系の早期警戒文献では catastrophic bifurcation は通例 fold を指すが、本論文の逐語に忠実に「zero-eigenvalue のカタストロフィ族」と書く。〕

## 一次逐語 ② 三指標と generic 性（本論文）＝ RR-035 横串の一次アンカー

> "the probability of an upcoming shift between a depressed and a normal state is related to **elevated temporal autocorrelation, variance, and correlation between emotions** in fluctuations of autorecorded emotions. These are indicators of the general phenomenon of critical slowing down"（Abstract）

> "indicators of the proximity of tipping points that are **generic in the sense that they do not depend on the particular mechanism** that causes the tipping point"（Introduction）

**二重刃（◐・重要）**: 著者自身が臨界減速指標を「**機構非依存＝generic**」と明言している。これは RR-035「同じ数理≠同じ物理／topic-neutral」の**一次アンカー**であり、しかも刃が両側に向く——
- **強み側**: 機構非依存だからこそ、湖・気候・金融・気分に**同じ早期警戒シグナル**が転用できる（＝橋が本物である理由）。
- **弱み側**: 機構非依存だからこそ、指標が出ても「気分システムが本当に fold 分岐の tipping point を持つ」機構は**確定できない**。著者自身が「full-blown critical slowing down（復元率ゼロ）でなくても、閾値近傍で敏感に応答する系なら slowing down の兆候は出うる」と留保（Results, recovery-rate 節）＝**指標の存在は tipping point の存在を含意しない**。

RR-035 は「同じ数式は接続が本物ゆえ名前の罠より危険」と書いたが、本論文はその **generic 性を方法論の売りとして自認**している。READER の横串コラムに「当事者（Scheffer 一派）自身が generic ＝ topic-neutral と認めている」を一次で足せる。

## 一次逐語 ③ 批判と Reply の正確な所在（係争のスコープ確定）

**Bos & De Jonge の告発（逐語）**:
> "the authors fall into the trap of generalizing group-level results to the individual level and **mixing up between-subject and within-subject variability**. … the design does not allow a within-subject interpretation, because the indicators of critical slowing down were not measured repeatedly within individuals."

批判の核は二点: (i) 群レベル結果の個人レベルへの一般化、(ii) between/within の統計的混同（多水準モデルの自己回帰係数が平均差を「拾う」・分散は平均に依存し floor/ceiling で低くなりうる）。

**著者 Reply の応答（逐語・ここが RR-031 の hedge を精密化する肝）**:
> "we indeed provided support for an intraindividual model through **individual differences data**. … if individual people display early warning signals when closing in on a transition, then individuals who are closer to a tipping point should show higher levels of autocorrelation and variance."（＝設計の論理を defend）

> "the authors suggest that between- and within-effects were not properly disaggregated … **This suggestion is incorrect. We used the strategy of person-mean centering, which unambiguously disaggregates these effects** … we addressed this issue through the analysis of the **coefficients of variation** … robust against correction for the mean."（＝統計批判 ii を明確に反論）

> "we do agree with Bos and De Jonge that **time series assessments obtained while individuals undergo a transition would be ideal** … Future within-subject designs may further elucidate the presence of relevant transitions."（＝設計限界のみ譲歩）

**係争スコープの確定（○→精密化）**: RR-031 は「実証レベルで係争中」と書いた（正しい）。だが一次を見ると係争は**対称な膠着ではない**。著者は統計的混同の告発（ii）を person-mean centering と変動係数で**反論して押し返し**、譲歩したのは「**遷移の最中の個人内時系列を直接は測っていない**」という設計限界の一点のみ。タイトルが要約する: between-subject データは "do provide **first empirical support**"（初期的支持は提供する）＝**「支持ゼロ」でも「確立」でもなく「初期的支持」**。RR-031 の "first empirical support 段階" は書誌上も正確だった。

## RR-031 への含意（hedge の精密化・改稿メモ）

READER §2/§5 で臨界減速の橋を出すときの hedge を、次の三段で書けるようになった（すべて一次接地）:

1. **数理核は literal（★）**: 臨界減速＝復元率（＝OU の β）がゼロへ。§2 の flow 読みと §1 の臨界読みを一つのパラメータで接続。谷が浅くなる像は原典の ball-in-a-cup。
2. **実証は "初期的支持・係争あり"（○）**: 気分データで三指標（自己相関・分散・感情間相関の上昇）が将来の遷移と関連＝報告された。批判（between/within 混同）に対し著者は person-mean centering・変動係数で反論、譲歩は「遷移中の個人内時系列は未測定」のみ。**対称な行き詰まりではなく、著者がかなり押し返している**（＝RR-031 が「最も弱い橋」と書いたのはやや強すぎ。"初期的支持だが機構は未確定" が正確）。
3. **generic 性が二重刃（◐）**: 指標は機構非依存＝だから転用できる／だから機構は確定できない。著者自身が topic-neutral と自認（RR-035 横串の一次アンカー）。

**注意（overclaim ガード）**: 「臨界減速が確立した」「気分に tipping point がある」とは書かない。書けるのは「復元率ゼロという数理シグネチャが、気分の将来遷移の早期警戒指標として初期的に支持され、機構非依存ゆえ物理と心に同型に現れる」まで。tipping point の**存在**は指標からは出ない（著者留保）。

## CONFIRMED / 残る宿題

**CONFIRMED（一次全文）**: 臨界減速の固有値定義・catastrophic bifurcation 族・三指標・generic 自認（本論文）／between-within 告発（Bos & De Jonge）／person-mean centering 反論・設計限界のみ譲歩・"first empirical support"（Reply）。RR-031 §8 宿題3 を解消。

**残る宿題（RR-031 §8 の他項・本ノート範囲外）**: Sterling 2012 原文（宿題1）・Aston-Jones & Cohen 2005 原著（宿題2）・DynAffect JPSP 本文の OU 逐語（宿題4）・Rutledge 2014／Scherer CPM（宿題5）。合成レベル（人間間バースト同期の直接測定＝RR-034 の空白）は別筋。
