---
title: RR-038 合成レベルの網羅探索 — 「人間間バースト同期」の空白を三層に割り直す
issue: pd#129
date: 2026-07-15
phase: 次ラウンド宿題回収（RR-034 の合成レベル空白＝gap-check の網羅探索）
method: WebSearch + Semantic Scholar + eutils で三候補文献群を系統探索。一次アブストラクト/OA で確保
lens: [[feedback_resemblance_depth_over_caveats]]（正確な空白の形が product）／[[project_pd115_two_lenses]]（見方Bの社会側）
honesty記号: ★=定理/数理同型・●=強い実証・◐=示唆的/理論提案・○=係争/未決・△=naming coincidence 境界
supersedes: RR-034 §gap-check の「合成は本調査では未発見（網羅探索は次ラウンド）」を更新
---

# RR-038 合成レベルの網羅探索

RR-034 は「部品八本は実証済みだが、**人と人のバーストが同期・干渉して一つの時代の流れを作る**を直接モデル化・測定した研究は本調査では未発見。網羅探索は次ラウンド」と正確に空白を畳んだ。本ノートはその**網羅探索**を実施した結果である。結論を先に：

**空白は「無」ではなくなった。三つの独立した文献群が、合成の"別々の顔"を直接測定している。だがどれも「era スケールの創造的到達の同期そのもの」ではない——スケールと対象のズレが正確に特定できる。しかもその文献群の中心的な論争（Poisson＝独立 vs long-tail＝非独立）は、RR-034/RR-032 が指摘した Shalizi–Thomas 交絡そのものであり、2025 年の大規模データが初めて「純粋な独立ではない」側に触れた。**

## 網羅探索で見つかった三層（すべて一次で書誌確定）

### 層A：同時発見（multiples）の大規模定量 ＝ 合成に最も近いが対象が「神経バースト」でなく「発見の再来」

| 論文 | 何を測ったか | 記号 | アクセス |
|------|-------------|------|----------|
| **Simonton 1978** "Independent Discovery in Science and Technology: A Closer Look at the Poisson Distribution", *Social Studies of Science* 8(4)（DOI 10.1177/030631277800800405・開始頁は一次未照合） | 多重発見の頻度分布が **Poisson 過程**に従うか検定。Poisson＝各発見が独立に一定率で生じる＝**"機の成熟（共通原因）"だけで、人間間の相互作用/同期はゼロ**という null モデル | ★（モデル）/●（Ogburn-Thomas・Merton データに当てはめ） | 書誌確定・body は SAGE ペイウォール |
| **Bikard 2020** "Idea twins: Simultaneous discoveries as a research tool", *Strategic Management Journal* 41(8):1528（DOI 10.1002/smj.3162） | 同時発見（idea twins）を PubMed 1960–2018 から**系統的・自動的に抽出**（Jaccard≥50%・共著者なし・1年以内・co-citation で信用配分検査）。Merton の「同時発見＝戦略的研究サイト」を初めて運用可能なデータセット化 | ●（方法・公開データセット） | 書誌確定・データ文書は OA（FIVES） |
| **Li, Lin & Wu 2025** "Is Science Inevitable?"（arXiv:2502.06190） | **4000万論文**を Disruption Index で解析し、同一参照を独立に置換する論文＝機能的等価＝多重発見を同定。**多重発見が典型パターン**＝Merton の共通原因説を支持。**だが分布は long-tail で Poisson モデルを棄却** | ●（大規模実証）/○（機構は未分解） | **OA プレプリント全文**（arXiv・abstract 逐語確保） |

**層Aの核心（RR-034/RR-032 の交絡に直結）**: 同時発見の定量文献の**中心的論争は「Poisson（独立）か long-tail（非独立）か」**であり、これは RR-034 が §gap-check で「合成の空白は識別問題を含む構造的難所かも（◐仮説）」と置いた **Shalizi–Thomas「共通原因 vs 方向性影響」交絡そのもの**——
- **Poisson（Simonton 1978）＝純粋な共通原因**：多重は「機が熟した所へ独立な探索者が各自ランダムに当たる」＝相互作用・同期ゼロの null。これが半世紀の標準モデル。
- **long-tail（Li ら 2025）＝独立からの逸脱**：4000万論文で分布が Poisson から外れ long-tail になる＝**「純粋な独立」では説明しきれない構造**（クラスタリング/優先的付着/伝染の余地）を、初めて大規模データが示した。ただし著者はこの逸脱を common-cause の構造（歴史的文脈の不均一性）として読み、**contagion（人間間の同期・影響）とは分解していない**——交絡は残る。
- **Bikard 2020 の idea-twins は同時発見を研究サイト化した識別ツール**（同じアイデア＝内容を固定して「誰が担ったか」の効果を切り出す自然実験）。⚠️ **精密化（RR-039）**: この道具が攻めるのは「アイデアの質」の交絡であって「共通原因 vs 伝染」の交絡ではない。独立性を識別仮定として前提し、伝染ケースをむしろ捨象する側なので、双子間の contagion は構成上測れない。よって「Shalizi–Thomas 交絡の攻略装置」と読むのは取り違え——攻略装置は別（ネットワーク RCT/IV で、個人スケールの拡散でのみ回り era スケールには移植不能）。詳細は [[RR-039-multiples-confound-decomposition-followup]]。

→ **RR-034 の◐仮説「合成の空白は識別問題を含む構造的難所」は、思弁でなく実在の研究フロンティアだった**。標準モデル（Poisson＝独立）を、2025 年の大規模データが long-tail で揺さぶった。ただし交絡を分解する道具は「まだ無い」のでなく、観察データからは generic に識別困難（Shalizi–Thomas）＝原理的な難所である（RR-039 で追認）。

### 層B：人間間の同期の直接測定 ＝ 実在するが「秒〜分・対面相互作用」スケール

- **Hyperscanning（fNIRS/EEG inter-brain synchrony）**：二人以上の脳活動を同時記録し脳間同期(IBS)を直接測定。協力・問題解決・**チームの創造課題**でも IBS を計測（例：real-life creative problem solving in teams, fNIRS hyperscanning, *NeuroImage* 2019 系）。DLPFC/TPJ 等で協力時に IBS が上がる（●）。
- **限界（スケールのズレ）**：測るのは**秒〜分、二者〜小集団、直接相互作用**の同期。pjdhiro の問いの「時代の同時多発（数十年・多数・**独立**並行到達）」とは対象が違う。hyperscanning の同期は「一緒にいる二人の脳が引き込む」＝ RR-032 の対人同期（literal ★/●）の神経版であって、era スケールの創造的到達の同期ではない。**RR-032 の橋を神経同期で補強するが、RR-034 の era 空白は埋めない**。

### 層C：集団的注意のバースト ＝ population 規模だが対象が「注意」であって「創造的到達」でない

- **Lorenz-Spreen, Mønsted, Hövel & Lehmann 2019** "Accelerating dynamics of collective attention", *Nature Communications* 10:1759（OA）：複数分野・数十年の縦断データで、文化的アイテムへの集団的注意が**バーストで立ち上がり、より短い時間で減衰し、より高頻度で反復**。有限の注意を巡ってトピックが競合する単純モデルで実データを再現（★モデル/●実証）。
- **限界（対象のズレ）**：測るのは**注意の集団バースト**（何が話題になるか）であって**創造的到達の同期**（誰が同時に同じ発見へ届くか）ではない。層Aの multiples とは別物。ただし「有限資源を巡る競合でバーストが加速する」という population 規模のバースト力学の一次アンカーにはなる。

## RR-034 の空白を三層に割り直す（更新後の正確な現在地）

RR-034 は「合成は未発見」と一枚で畳んだ。網羅探索の後、空白は**三層に割れ、それぞれ埋まり方が違う**：

1. **同時発見の合成（層A）は、実は半世紀の定量研究がある**——ただし標準モデル(Poisson)は**独立を仮定**＝「同期」ではなく「共通原因での並行独立到達」を測ってきた。2025 年の 4000万論文が初めて Poisson を long-tail で棄却＝**独立からの逸脱**を大規模に示した。**"人間間の同期・干渉"に最も近い実データはここにあり、しかも交絡（共通原因 vs 影響）は未分解のまま研究フロンティアとして開いている**（⚠️ RR-039: 分解は「道具が無い」のでなく Shalizi–Thomas により観察データから generic に識別困難。idea-twins は "アイデアの質" の交絡を攻める別の道具で、この交絡の攻略ツールではない）。
2. **人間間の同期の直接測定（層B・hyperscanning）は実在するが秒〜分スケール**——era スケールへは架からない。RR-032 の対人同期の神経版。
3. **population 規模のバースト（層C・collective attention）は注意の話**——創造的到達の同期ではない。

**したがって "真の空白" は精密化される**：欠けているのは「**多数の独立した創造的到達（層Aの対象）が、era スケールで、互いの同期・干渉として（層Bの機構を）、population 力学（層C）に組み上がる合成**」——三層を**一つのモデルに束ねた研究**。個々の層は測定済みで、束ねる合成だけが無い。そして束ねられない理由は RR-034 の◐が言った通り**識別問題**（Poisson＝共通原因 と contagion＝影響 が同じ multiples パターンを生む）で、これは今や思弁でなく層Aの中心論争として実在する。

## honesty 線引き（READER 反映時に保つ）

- 「同時発見は物理の波の干渉だ」は依然 △（naming）。層Aの multiples は**波の重ね合わせでなく、拡大する可能性空間への独立並行到達＋（long-tail が示唆する）非独立構造**。RR-034 の「superposition ではない」を維持。
- 「Poisson が棄却された＝人間間の同期が証明された」は**書かない**（○）。long-tail の逸脱は共通原因の不均一性でも説明でき、Li ら自身は common-cause 側に読む。**contagion の証明ではない**。書けるのは「独立 null が大規模データで綻び、交絡の分解が未決の研究フロンティアになった」まで。
- hyperscanning を era スケールへ外挿しない（層B は秒〜分）。RR-034 の「era スケール外挿は断定禁止」を維持。

## CONFIRMED / 残る宿題

**CONFIRMED（一次書誌・OA/抄録）**: Simonton 1978（Poisson＝独立 null）・Bikard 2020（idea-twins 識別ツール・PubMed 1960–2018）・Li ら 2025（4000万論文・D-index・Poisson を long-tail で棄却・abstract 逐語）・Lorenz-Spreen 2019（collective attention バースト・OA）・hyperscanning 創造チーム IBS（●・秒〜分スケール）。RR-034 §gap-check を「未発見」から「三層に割れ、合成のみ未束・交絡が研究フロンティア」へ更新。

**残る宿題 → ✅ 回収済み（RR-039）**: ①Li ら 2025 の long-tail 逸脱を common-cause vs contagion に分解した研究＝**無し**（generic identification barrier＝Shalizi–Thomas による原理的難所と判明）。②Bikard idea-twins で同期・伝染を測った後続＝**無し**（idea-twins は独立性を前提にアイデアの質を固定する別の道具で、双子間の伝染は構成上測れない）。③Kleinberg burst detection の multiples 適用＝**直接は無し**（burst は検出するが機構は判定しない）。詳細と精密化は [[RR-039-multiples-confound-decomposition-followup]]。**READER への反映（idea-twins の一文の精密化）は pjdhiro 専権＝判断保留**。

**優先度低・body ペイウォール → ✅ 断念（2026-07-15 pjdhiro 判断・再取得試行済み）**: Simonton 1978 body（SAGE）・Bikard body 詳細・RR-037 の Aston-Jones ゲイン傾き/DynAffect OU 式の body 逐語。ResearchGate 4件とも403（bot拒否）・Semantic Scholar API 429（キー無しレート制限）で新規取得不能を再確認。二次接地（Jepma 学位論文・継続論文の OU 式等）で橋は既に成立しており、これ以上の追跡は行わない。

**合成レベルの「束ねモデル」→ 選択 (C) で処理済み（[[RR-040-synthesis-gap-specification]]）**: pjdhiro 判断は「モデルを作らず空白の仕様を彫る」。空白は二重の壁（表現の壁＝部品の状態空間が非互換／識別の壁＝書けても検証不能）で塞がれていることを精密化。新規の合成的主張は立てていない（保持論点は開いたまま）。
