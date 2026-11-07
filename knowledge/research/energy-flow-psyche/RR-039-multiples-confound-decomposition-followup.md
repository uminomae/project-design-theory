---
title: RR-039 多重発見の「共通原因 vs 伝染」交絡 — 分解の到達点と idea-twins の役割の精密化
issue: pd#129
date: 2026-07-15
phase: 次ラウンド宿題回収（RR-038 §残る宿題 ①②③ の追い込み）
method: WebSearch + arXiv/Semantic Scholar 一次確認。到達可能ホスト経由（SSRN/econterms はボット 403 で不可、arXiv・SemanticScholar API・PMC で代替）
lens: [[feedback_resemblance_depth_over_caveats]]（正確な空白の形が product・留保は線引き）／[[project_pd115_two_lenses]]（見方Bの社会側）／[[feedback_one_facet_exploration_stance]]（訂正も過剰にしない）
honesty記号: ★=定理/数理同型・●=強い実証・◐=示唆的/理論提案・○=係争/未決・△=naming coincidence 境界
supersedes: RR-038 §残る宿題 を回収し、RR-038 L31/L49 の「idea-twins＝共通原因 vs 伝染の攻略ツール」を精密化（＝別の交絡を攻める道具）
---

# RR-039 多重発見の交絡分解の到達点と idea-twins の役割の精密化

RR-038 は合成レベルの空白を三層に割り直し、層A（同時発見の大規模計測）の中心論争が RR-034/RR-032 の指摘した **Shalizi–Thomas「共通原因 vs 方向性影響」交絡そのもの**だと特定した。その §残る宿題に置いた三点——①Li ら 2025 の long-tail 逸脱を common-cause 不均一性 vs contagion に分解した研究の探索、②Bikard idea-twins で「同期・伝染」を測った後続、③Kleinberg burst detection の multiples 適用——を追い込んだ。結論を先に：

**三宿題とも「決着した後続研究は無い」で一致する。しかも "無い" の理由が層ごとに違い、その違いが READER の honesty 線を一段深くする。①は generic な識別障壁（Shalizi–Thomas）に当たっており、観察データの多重発見からは原理的に分解できない。②の idea-twins は、実は "この交絡" ではなく "別の交絡（アイデアの質）" を攻める道具で、独立性を前提として捨象する側だった＝RR-038 と READER の言い回しに一段の精密化が要る。③の burst detection はバーストを検出するがその機構は判定しない。**

---

## 宿題① Li ら 2025 の long-tail を「共通原因 vs 伝染」に分解した後続はあるか

### 一次確認したこと

- **Li, Lin & Wu 2025 "Is Science Inevitable?"（arXiv:2502.06190・v2, 2025-02-13）本体は分解していない**。abstract を再確認：long-tail は「Merton の共通原因説（歴史的文脈から生じる）を支持し、科学進歩の構造的必然性を補強する」と読まれ、逸脱を common-cause 側に置く。**Shalizi–Thomas・Bikard・Kleinberg のいずれも引かず**、逸脱を contagion と分解する分析は本文にない（●実証／○機構未分解）。＝RR-038 の読み（「Li ら自身は common-cause 側に読む」）を一次で追認。
- **分解した後続研究は見つからない**。2025-02 のプレプリントゆえ被引用が薄い（Semantic Scholar API はキー無しで 429 レート制限・被引用リストは未取得。ただし long-tail を common-cause vs contagion に割った論文は WebSearch でも出てこない）。→ **①は "決着した後続なし"**。

### なぜ分解されないか＝generic な識別障壁（一次で接地）

- **Shalizi & Thomas 2011**（"Homophily and Contagion Are Generically Confounded in Observational Social Network Studies", *Sociological Methods & Research* 40(2):211／arXiv:1004.4704）は、観察的ネットワークデータでは **潜在的ホモフィリー（共通原因）と contagion（伝染・影響）が generically confounded**＝強いパラメトリック仮定か設計なしには識別不能、と示す（★ 不可能性寄りの定理）。影響の非対称性（A→B は効くが B→A は効かない）で contagion を検出しようとしても、辺形成に非対称があれば潜在ホモフィリーが同じ非対称を再現する。
- 多重発見の分布（Poisson vs long-tail）は、まさにこの交絡の別名——**Poisson＝純粋な共通原因の null／long-tail＝独立からの逸脱**。逸脱は「共通原因の不均一性（歴史的文脈のムラ）」でも「人どうしの伝染（優先的付着・模倣）」でも同じ裾を作りうる。**観察された multiples の分布形からは、この二つを分けられない**（Shalizi–Thomas がそう言う）。
- **交絡を破る手段は "設計" 側にしかない**：ネットワーク上のランダム化実験（例：孤立村での social contagion 誘発実験・PMC12903193／"Experimenting with Networks" arXiv:2506.11313）、間接的な第三者の紐帯を操作変数に使う IV、選択と影響を同時にモデル化する co-evolution モデル、傾向スコア。**これらは個人スケールの行動・知識拡散**（村・チーム・実験室）でこそ回る。所見の一つ：**知識は行動より伝播しやすく、波及は2次の隔たりまで届く**（＝個人スケールでは contagion が識別・測定されている）。
- **だが era スケール（数十年・多数・独立並行到達）の創造的合成には、この設計が原理的に置けない**——誰が何をいつ発見するかをランダム化できない。だから層A の multiples では、交絡は「まだ分けられていない」ではなく「観察データからは分けにくい」に近い。

**①の結論**：long-tail を共通原因 vs 伝染に分解した後続は無い。無いのは怠慢ではなく **generic identification barrier**（Shalizi–Thomas）による。交絡を破る設計は実在するが、個人スケールの拡散に限られ、era スケールの創造的合成には移植できない。→ READER の「まだ決着していない」は正しく、その理由を「原理的に見分けにくい」と一段深く書ける（既に §4 に近い表現あり・後述の判断保留を参照）。

---

## 宿題② Bikard idea-twins は「この交絡」を攻める道具か——否、別の交絡を攻める道具だった（要精密化）

### 一次確認したこと

- **Bikard 2020**（*Strategic Management Journal* 41(8):1528・DOI 10.1002/smj.3162）abstract 逐語確保：idea-twins は「同時発見を **戦略的研究サイト** として運用可能にする道具」。**578 件の multiples／1,246 チーム**を自動抽出したデータセットを提示。
- **idea-twins が制御する交絡＝"アイデアの質"であって"共通原因 vs 伝染"ではない**。後続の使われ方が証拠：
  - **Marx & Hsu 2022**（"The Entrepreneurial Commercialization of Science: Evidence from Twin Discoveries"）：同一発見の双子対を使い、**アイデアの内容・質を固定**して「どちらが startup で事業化されるか」を測る。
  - **Masclans ら 2025**（*Strategic Management Journal*・DOI 10.1002/smj.3720 "Measuring the commercial potential of science"）：同じく双子で質を固定し商業ポテンシャルを測る。
  - 共通の論理：「同じ発見が独立に二度現れた」ことを**識別上の自然実験**として使い、**アイデアの潜在的な質を一定に保った上で、下流（受容・信用配分・事業化）の差**を discoverer/文脈に帰属する。
- **idea-twins は独立性を "識別仮定" として前提し、伝染ケースを設計上むしろ捨てる**（共著者なし・短時間窓で独立に到達した対のみ採る）。したがって **双子どうしの間の contagion は構成上測れない**（測る対象ではない）。攻めているのは「アイデアの質 vs discoverer/文脈の効果」という**別の交絡**であって、「共通原因 vs 伝染（なぜ多重が起きたか）」ではない。

### RR-038・READER への含意（精密化）

- RR-038 L31「idea-twins はこの交絡を攻めるために作られた識別ツール」／L49「idea-twins がその攻略ツール」は **不正確**。L31 の後半の描写（「同じアイデア＝内容を固定して『誰が担ったか』の効果を切り出す自然実験」）は**正しい**——が、それが切り分けるのは "アイデアの質" の交絡であって "共通原因 vs 伝染" ではない。→ RR-038 を精密化する（本ノートで supersede・下記 Edit 済み）。
- **公開 READER も同じ言い回しを持つ**（[reader/energy-flow.html:268]）：「『アイデアの双子』はまさにこの交絡を切り分けるために作られた道具です」。これは公開ページの精度問題＝**pjdhiro 専権の反映判断（しっくり＋公開）＝判断保留**（§判断保留 参照）。正しく書くなら「アイデアの双子は同時発見を研究サイト化した道具だが、**独立性を前提に "アイデアの質" を固定して下流を測る**ためのもので、"共通原因 vs 伝染" の識別そのものを解く道具ではない」。

**②の結論**：idea-twins データセットで「同期・伝染」を測った後続は無い（構成上、双子間の伝染は測れない）。RR-038/READER の「攻略ツール」表現は一段の精密化を要する＝別の交絡（アイデアの質）を攻める道具。

---

## 宿題③ Kleinberg burst detection を multiples 時系列に当てた研究はあるか

- **Kleinberg 2002**（"Bursty and Hierarchical Structure in Streams"）は2状態（非バースト/バースト）の隠れマルコフでストリームの**バースト区間を検出**する。適用先は主に**研究注意・キーワードのサージ**（トピックの立ち上がり）で、地震等の外的事象・方法論革新に紐づく注意シフトを可視化する用途が多い。
- **multiples（同時発見の再来）の時系列にバースト検出を当て、その機構（共通原因 vs 伝染）を判定した研究は見つからない**。近縁は層C の Lorenz-Spreen 2019（collective attention の加速）だが、これは**注意のバースト**であって創造的到達の同期ではない（RR-038 層C のまま）。
- 原理的にも、burst detection は「バーストがある/ない」を出すが「なぜ束になったか」は出さない——**検出はするが機構は判定しない**。①の識別障壁を burst detection は解かない。

**③の結論**：直接適用は無し。あってもバーストの検出であって機構の分解ではない。

---

## honesty 線引き（RR-038 を継承・一段強化）

- 「同時発見は物理の波の干渉だ」は依然 △（naming）。維持。
- 「Poisson 棄却＝人どうしの同期の証明」は**書かない**（○）。維持。加えて **「idea-twins があるからもうすぐ分解が決まる」という含みも書かない**——idea-twins は別の交絡を攻める道具で、era スケールの共通原因 vs 伝染は generic に識別困難（Shalizi–Thomas）。**"見分けが本質的に難しい" の理由は "道具がまだ無いから" ではなく "観察データからは原理的に分けにくいから"**。
- 交絡を破る設計（RCT/IV）は個人スケールの拡散で実在するが、era スケールの創造的合成へは移植不能。この線を越えない。
- 全体として **READER の主張の向きは変わらない**。変わるのは「idea-twins＝この交絡の攻略ツール」という一文の精度と、「なぜ分解が難しいか」の理由の深さのみ。

## CONFIRMED / 判断保留 / 残（優先度低）

**CONFIRMED（一次）**：
- Li ら 2025 本体は long-tail を common-cause 側に読み、contagion と分解しない（abstract 逐語・Shalizi–Thomas/Bikard/Kleinberg 未引用）。
- Shalizi–Thomas 2011＝共通原因と contagion は観察データで generically confounded（★）。
- Bikard 2020 idea-twins＝578 multiples/1,246 チーム、独立性を前提にアイデアの質を固定して下流を測る道具（Marx&Hsu 2022・Masclans ら 2025 の用法で追認）。**双子間の伝染は構成上測れない**。
- Kleinberg burst detection は multiples の機構分解に使われていない。
- 交絡を破る設計（ネットワーク RCT/IV）は個人スケールの拡散で実在（知識は行動より伝播しやすい・波及2次まで）。era スケール創造的合成へは移植不能。

**判断保留（pjdhiro 専権）**：
- **READER [reader/energy-flow.html:268] の「『アイデアの双子』はまさにこの交絡を切り分けるために作られた道具です」を精密化するか**。今回の一次確認では、この一文は idea-twins の目的を取り違えている（アイデアの質の交絡 ≠ 共通原因 vs 伝染の交絡）。訂正するなら「独立性を前提にアイデアの質を固定して下流を測る道具」と書き換え、「合成が進まないのは道具が無いからでなく、観察データからは原理的に見分けにくいから（Shalizi–Thomas）」へ理由を差し替える。**公開内容の書き換え＝しっくり判定＋develop→main 公開は pjdhiro 専権**。本ノートでは反映せず flag のみ。
- 上記を反映する場合の副次：§4 の「識別問題は層①の中心的論争そのもの」は**正しいので維持**（Poisson vs long-tail の論争は実在）。変えるのは idea-twins の役割の一文だけで足りる。

**残（優先度低・body ペイウォール）**：Simonton 1978 body（SAGE）・Bikard body 詳細・RR-037 で積んだ Aston-Jones ゲイン傾き/DynAffect OU 式の body 逐語。いずれも二次接地済で橋は成立。合成レベルの「束ねモデル」を新規に構築するかは pjdhiro 専権（理論の採否）。

## 出典メモ（内部参照は本文に混ぜず別枠）

- 一次：arXiv:2502.06190（Li ら 2025 v2）／arXiv:1004.4704＝*Sociological Methods & Research* 40(2):211（Shalizi–Thomas 2011）／DOI 10.1002/smj.3162（Bikard 2020）／DOI 10.1002/smj.3720（Masclans ら 2025）／Marx & Hsu "Twin Discoveries"（commercialization）／Kleinberg 2002 "Bursty and Hierarchical Structure in Streams"。
- 個人スケール contagion 設計：PMC12903193（孤立村 induction 実験）／arXiv:2506.11313（"Experimenting with Networks"）。
- 継承：RR-038（三層割り直し）・RR-034（gap-check）・RR-032（Shalizi–Thomas を対人／社会統計の窓として導入）。
- 取得制約：SSRN・econterms・newthingsunderthesun・Wiley は本セッションのフェッチで 403/到達不可。Semantic Scholar API はキー無しで 429。abstract は arXiv・SMJ abstract・WebSearch スニペットで確保。body 逐語（SMJ 全文・SAGE）は未取得＝優先度低。
