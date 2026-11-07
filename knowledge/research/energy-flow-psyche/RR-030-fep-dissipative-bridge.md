---
title: RR-030 FEP／予測の熱力学／散逸構造の橋 — 一次接地の階層マップ
issue: pd#129
date: 2026-07-15
phase: 深掘り調査（鉱脈1・深さ監査 発見1 の解除）
method: agent-team-workflow / 物理・定理側＋FEP・心/係争側の非相関2体で一次逐語を取得、Main が統合
lens: [[feedback_resemblance_depth_over_caveats]]（類似の深掘りが product・自明な否定は無価値・留保は線引きに使う）
honesty記号: ★=定理/数理同型(literal)・●=強い実証/確立・◐=示唆的/中程度・○=係争・思弁(活発)・△=naming coincidence 境界
---

# RR-030 FEP／予測の熱力学／散逸構造の橋

## TL;DR

「流れが維持する形（散逸構造）↔ 心」の橋は、**架かった/禁止の二値ではなく、一本の橋の中で床（★literal）と天井（○思弁）が階層で割れている**。

- **床（★）**：Still 2012 の定理「非予測情報＝散逸仕事」（散逸仕事＝Joule と 相互情報＝nats を、**実測可能な物理逆温度 β を介した**等式で結ぶ）と、Friston 2019 の NESS フローの Helmholtz 分解（散逸勾配流＋ソレノイダル流）は、いずれも数理的に確立。
- **天井（○）**：「存在するものは推論している」は、Friston 自身の一次テキストで **"look as if" / "almost tautologically" / "deflationary"**。字義の「実際に推論している」ではない。ただし Friston の自認は一枚岩でなく、結論部では "necessary consequence" と揺れる（§2 に詳述）。
- **最大の発見**：**過大主張（万物が推論する）も過小否定（名前が同じだけ）も、どちらも一次テキストで否定できる**。honesty の線は外部から引く必要がなく、著者の言葉から引ける（ただし著者内部でも揺れており、その揺れの明示自体が honesty）。これは READER が §2 で警告した「名前の罠」を、その反対側の罠（過大格上げ）ごと同時に避けられることを意味する。

これで深さ監査「発見1：橋が §2 と §5 から二重に消されている」を解除し、§2 の一蹴と §5 の禁止を、**同じ橋の階層地図**に置き換える素材が揃った。

---

## 1. 橋の床（★literal）— 定理級に確立した部分

### 1a. Still, Sivak, Bell & Crooks 2012「Thermodynamics of Prediction」PRL 109:120604〔CONFIRMED・PDF全文逐語〕

**定理の核（逐語）**：
> "any system constructed to keep memory about its environment and to operate with maximal energetic efficiency has to be predictive."

**literal な等式**（Eq.14）：瞬間の非予測情報（nostalgia）＝平均散逸仕事に比例。
`β⟨W_diss[xt→xt+1]⟩ = I_mem(t) − I_pred(t)`（**β=1/k_BT＝実在の熱浴の逆温度**。`I_mem=I[st;xt]`＝系状態と現信号の相互情報、`I_pred=I[st;xt+1]`＝次信号との相互情報）。全プロトコル和で `I_mem − I_pred ≤ β⟨W_diss⟩`（Eq.17-18）。
→ **片側は物理の散逸仕事（Joule・実測量）、もう片側は相互情報（nats）。両者を、実測可能な物理逆温度 β を介して定理で結ぶ**。〔critic 修正 A-1〕この「β 経由」という構造は §3 の Gottwald & Braun の「温度という変換定数」と**同型**だが、Still の β は抽象的トレードオフ係数でなく**実在の熱浴の物理温度**である点で literal 度が高い——ただし**それは β を明示してこそ言える**（単位変換なしの直等式ではない）。naming coincidence には依存しない床。

**この定理が結ぶもの／結ばないもの（射程の床・逐語根拠あり）**：
- 結ぶ：**情報効率（非予測情報の最小化）↔ 散逸（無駄仕事）**。
- 結ばない：**「形を保つこと＝予測すること」ではない**。定理の主語は「メモリを持ち最大効率で動く系」で、散逸構造（空間パターンの維持）とは別レイヤー。両者を「予測＝形の保持」と溶接するのは層またぎ（釘①）。

**射程を狭める3つの床（すべて逐語）**：
1. **条件文であって存在言明でない**：「効率を最大化するなら予測的でなければならない」であり「生物は実際に効率最大である」とは言っていない。著者も適応可能性を明示的に思弁扱い（"If such a principle exists ..."）→ ○。
2. **"no feedback from the system to the driving signal" を仮定**：系→環境へのフィードバックを排除。生物・心は環境へ作用する（能動的推論の閉ループ）ため、**完全なエージェント–環境ループには定理がそのまま成り立たない**。READER で必ず明示。
3. **対象は分子機械スケールの被駆動系**（kinesin・F1-ATPase 等が例示中心）。"arbitrarily far from equilibrium … including biomolecular machines"。「生物一般・心一般」への適用は著者自身 "striking implication"（直観の定理化）として慎重提示。

### 1b. Friston 2019「A free energy principle for a particular physics」arXiv:1906.10184〔CONFIRMED・PDF全文逐語〕

**NESS フローの Helmholtz 分解（逐語）**：
> "the flow of any random dynamical system, at nonequilibrium steady-state, comprises orthogonal components: a dissipative flow that ascends the gradients established by the logarithm of the nonequilibrium steady-state density and a conservative (divergence-free), solenoidal flow ..."

定式 `f = (Q − Γ)∇ln p(x)`。Friston 自ら **"the key result upon which most of this monograph rests"**、Markov blanket を **"the second cornerstone"** と書く。
→ **これが「散逸構造」と「予測する系」を同じ数式に載せる正体**：勾配（散逸）成分＝散逸構造側、対数密度 `−ln p(x)`（surprisal/自己情報）を変分自由エネルギーとして読む層＝「予測」側。**分解そのものはベクトル解析の基本定理（★）**。

**★ が成り立つ前提（＝ここが仮定・逐語）**：NESS 密度 `p(x)` の存在（pullback/random global attractor・invariant measure を持つこと）／Markov blanket による内部・外部の条件付き独立／多くの結論で**ソレノイダル結合を無視する近似**（"provided there is no solenoidal coupling …"）。

---

## 2. 橋の天井（○思弁）— as-if にとどまる部分、著者自認が honesty のアンカー

- 「あらゆる存続する"もの"はベイズ推論をしている」は、一次逐語では構成的定理でなく **as-if**：
  > "will make it **look as if** autonomous states are trying … to minimise …"（Friston 2019）
  > internal states "**will appear to** minimize a free energy functional"（Friston 2013 abstract）
- 存在レベルの主張を Friston 自身が **near-tautology / deflationary** と自認（逐語）：
  > "This follows, **almost tautologically**, from the definition of the sorts of particles we are trying to explain."
  > "… essentially restatements of the conditions that are necessarily true of things that attain non-equilibrium steady state … follow from assuming that things only exist if they have measurable characteristics."

→ **honesty の決定的所見**：「存在するものは推論している」は一次では "look as if" 止まり。§2 の「名前だけ同じ」一蹴は狭すぎて床（★）を切るが、逆に「万物が推論する」への格上げも一次を踏み越える。**両極端がともに著者の言葉で否定される**。

〔critic 修正 A-2〕**ただし Friston の自認は完全には一貫していない**。同じモノグラフ（2019）の結論部で、Friston は "look as if" を離れて非ヘッジの存在論的断定に滑る（逐語）：
> "existence entails measurement and measurement (**inference**) is a **necessary** consequence of existence."（must / entails / necessary）

つまり honesty のアンカーは「著者の自認」という一枚岩ではなく、**著者内部でも "deflationary（控えめ）" と "necessary（必然）" の間で揺れている**。この揺れ自体を明示することが honesty——「Friston 自身がそう言っている」を根拠に、後段でこの結論部を引いて「存在するものは（as-if でなく）実際に推論する」へ格上げすることを禁じる。揺れの存在は、橋がこの層で **live な係争**にあることの証拠でもある（§4 と整合）。

---

## 3. §2 L89「同じ名前で別物」の精密化 — 三点セット〔Gottwald & Braun 2020 PLOS Comp Biol・逐語〕

L89 は「変分自由エネルギー≠熱力学的自由エネルギー、名前が同じだけ」と一蹴している。一次で腑分けすると：

1. **正しい部分（保持）**：変分FEと熱力学（Helmholtz）FEは**同一の物理量ではない**。
   > "variational free energy is not the same as Helmholtz free energy, the two free energy concepts can be **formally related**."
2. **言い過ぎの部分（△→○へ格上げ）**：両者は**同一の関数形（energy − T·entropy 型）を共有**する（Eq.3 `free energy = energy ± const.×entropy`、const.↔温度）。熱力学FEは変分FEの**物理特殊例**（energy＝物理ハミルトニアン、const.＝物理温度 k_BT を取った場合）。したがって「名前が同じだけ（△）」は誤りで、正しい階層は **○（数学形は同型だが物理接地が別）**。
3. **巻き添えの抹消（発見1の物理側裏づけ）**：**Still 2012 の橋は naming coincidence に一切依存しない独立の★定理**。「free energy という語の一致」で切ると、Still という literal な橋まで巻き添えで消してしまう。

**一致/別物の精密な線**：変分FE ⊇ 熱力学FE（後者は前者の物理特殊例）。一致するのは「平衡極限」ではなく「**変分問題を物理エネルギー＋物理温度で instantiate した時**」（Jaynes MaxEnt が橋）。別物になるのは変分FEの energy が log-確率（surprise・nats）で const. が抽象的トレードオフ係数（物理温度でない）場合＝Joule への換算経路がないとき。

---

## 4. 反証可能性の三層地図（honesty の本体）

FEP は「反証不能な同語反復」でも「確立した統一理論」でもなく、三層に割れる：

| 層 | 内容 | 反証可能性 | 階層 |
|---|---|---|---|
| 存在テーゼ | 存続するもの＝NESS＋Markov blanket＝自由エネルギーを最小化しているように見える | 低（Friston 自認 "almost tautologically"＝必要条件の言い換え） | ○（near-tautology） |
| process 理論 | 能動的推論による知覚・行動の予測モデル | **反証可能**（Aguilera が特定系で反例） | ◐〜○（係争・活発） |
| 形而上学的読み | Markovian Monism 等 | 科学の外 | 禁止 |

**係争は live（decided でない）**：
- Aguilera, Millidge, Tschantz & Buckley 2021（arXiv:2105.11203・逐語）：Markov blanket 条件は "only valid for a very narrow space of parameters"／数理中心の欠陥＝"the dynamics of the average states" と "the average of the dynamics" の暗黙の等値は "does not hold in general even for linear systems"／"require an absence of perception-action asymmetries … highly unusual for living systems"。
- **Friston 陣営の反論** Heins & Da Costa 2022, arXiv:2205.10190〔critic 修正 E・対称化〕：Gaussian 定常密度の場合について sparse coupling が Markov blanket を導く/導かない条件を精密に導出したが、**限定的かつ将来課題を残すトーン**——逐語 "Future work should focus on **verifying whether these sorts of constraints are satisfied in realistic models**."。つまり反論も「現実の系で満たされるかは未検証」と自認しており、Aguilera 側の「満たされない場合が広い」と**対称に未決着**。どちらの側も勝利宣言していない。
- Sánchez-Cañizares 2021（Entropy・逐語）：科学的ヒューリスティックとしての循環は許容／形而上学的読みへの流用は不可、の線引き。

→ **釘④**：「反証された」と書けば、§2 の名前の罠と同じ「狭い正しさで橋を切る」過ちを反対側から犯す。「係争中・思弁的だが活発」を明示する。

---

## 5. §5 三帯化マップ（禁止を地図に開く・ただし一番深い禁止は残す）

現行 §5 の三層表「実証（渦炎）／仮説（生命代謝）／飛躍＝意識魂（禁止）」の第3層 over-block を、次の三帯に開く：

| 帯 | 内容 | 階層 | 橋の状態 |
|---|---|---|---|
| 第1帯 代謝→自己組織化 | 生きている＝代謝流で形を保つ／死＝流れの途絶。NESS（Recordati 2004）・生物＝散逸構造（Kondepudi 2020・査読・自己申告限界つき） | ● established | **架かっている**（既存 R5 で一次確認済） |
| 第2帯 認知・予測・自己調整 | (a) FEP 能動的推論＝★Helmholtz 分解＋○as-if 解釈／(b) オートポイエーシス（Varela-Maturana-Uribe 1974）→ 生命-心連続性テーゼ（Thompson "Mind in Life" 2007）→ エナクティビズム（Di Paolo） | ○ 係争・活発 | **橋の途中**。数理骨格はあるが仮定が狭く as-if 止まり。生命-心連続性は物理定理でなく研究プログラム |
| 第3帯 形而上（魂・現象的意識） | 現象的意識のハードプロブレム・自我/魂の消滅を散逸で説明 | 未架橋 | **禁止として残す** |

**境界は Thompson 自身が引いている**：説明ギャップは「二つの異なる存在論の間」から「一つの embodiment 類型内の二型の間」へ **"reconceived"（再構成）**されるが **"not closed"**。第2帯（生命-心連続性）と第3帯（現象的意識）の線は著者が明示。

---

## 6. §1↔§5 背骨（発見2）との接続

Still の床も Friston の床も「NESS＝流れが保つ非平衡パターン」を情報側で言い換えたもの。これは §5（非平衡＝貫流が保つパターン）側の床であり、§1（平衡＝束縛/場の定在励起が保つパターン）と合わせて背骨「もの＝過程が保つパターン」を成す。§1 の粒子（throughflow なしの束縛）と §5 の散逸構造（throughflow あり）は**機構が違う二レジーム**——この区別（束縛 vs 貫流）は欠陥でなく正直な nuance として併記する。cs TH-001 `survey-R3-lineage-ontology.md` L28 が三方面独立定式化として接地済み。

---

## 7. RR-020 C3 の要修正（自己資産の整合）

RR-020 C3 は「変分FEと熱力学FEが一致するのは**平衡極限のみ**」とするが、これは不正確。Gottwald & Braun 2020 によれば両者は**常に同一の関数形を共有**し、熱力学FEは変分FEの**物理特殊例**。→ RR-020 C3 を引用/更新する際は「平衡極限のみ」を「**物理エネルギー・物理温度で接地した特殊例で一致（数学形は常に同型）**」に差し替える。また RR-020 C3 は Friston FEP のみ論じ **Still 2012 を扱っていない**ため、READER では「FEP の same-name 罠（C3 が正しく警告）」と「Still 型の name-independent 定理（独立に literal）」を**別扱い**する（混ぜると C3 の警告が Still を誤って巻き込む）。

---

## 8. 過大主張への釘（READER で橋を書くときのガード・7点）

1. Still 2012 を「散逸構造が心である証明」に使わない。情報効率↔散逸であって形態維持↔予測ではない（層またぎ禁止）。
2. Still の "no feedback" 仮定を隠さない。心・生物の能動性（閉ループ）は定理の外。
3. Friston の "look as if" を "is/does" に格上げしない。as-if・解釈的枠組みのまま書く。
4. ★は Helmholtz 分解（数学的恒等式）に限定。心・認知への適用は ○。
5. §2 L89 の「名前だけ同じ」は使い方を変える：△警告は残すが、それで橋を切らない。正しくは「別量だが情報幾何を介した実在の数理的写像はある。争点は(i)現実の系が NESS+Markov blanket を満たすか(Aguilera)、(ii)as-if=literal と言えるか」。
6. 「係争中・思弁的だが活発」を明示（Aguilera↔Friston は進行中）。「反証された」とも「確立した」とも書かない。
7. Friston 自身の "almost tautologically / deflationary" 自認を honesty のアンカーに使う（過大主張と過小否定を同時に回避）。ハードプロブレム（第3帯）は未架橋＝禁止のまま。散逸構造と autopoiesis を独立二重支持に数えない（共通源流・cs W8）。

---

## 9. READER で断定してよい射程 vs できない射程

| 断定してよい（★/●・CONFIRMED） | 断定できない（○/思弁・要ヘッジ） |
|---|---|
| Still 2012 は「非予測情報＝散逸仕事」を等式/下界で literal に結ぶ定理 | 「形を保つこと＝予測すること」——Still は言っていない |
| メモリを持ち効率最大の系は予測的でなければならない（分子機械スケールで定理級） | 生物・心は実際に効率最大だから予測している——Still は条件文 |
| NESS フロー＝勾配（散逸）＋ソレノイダルの直交分解（数学的恒等式） | 「存在するものは実際に推論している」——一次は "look as if" |
| 変分FEと熱力学FEは同一の関数形を共有（熱力学FEは物理特殊例） | 変分FEと熱力学FEは測って同じ量——単位・物理温度が別 |
| 生物＝散逸構造の代謝レベル対応（既存R5・査読） | 意識・魂・現象的意識への拡張（第3帯・禁止） |

---

## 10. CONFIRMED / 宿題

**CONFIRMED（一次逐語取得済）**：Still 2012 PRL 全文（定理・nostalgia 定義・no-feedback 仮定・スコープ）／Gottwald & Braun 2020（二種の free energy）／Friston 2019 arXiv 全文（Helmholtz 分解・"look as if"・"almost tautologically"）／Aguilera 2021 abstract・本文レベル／Sánchez-Cañizares 2021（循環性の線引き）／Thompson Précis（gap "reconceived not closed"）／Friston 反論 2205.10190 の存在／cs ref04 Varela 1974 一次PDF 所蔵。

**宿題（EXECUTE 時）**：
1. arXiv:2001.06408（Biehl et al）全文抽出＝free energy lemma の反例逐語・Markov blanket 定義非同値。
2. Aguilera 2105.11203 本文の定量条件を逐語化。
3. Colombo & Palacios 2021 本文逐語（Springer 403 回避経路）。
4. Friston 2013 本文（PMC/arXiv 版）。
5. cs ref04 Varela 1974 OCR で autopoiesis 定義原文接地／Di Paolo エナクティビズム一次。
6. Jarzynski/Crooks 揺らぎ定理・Landauer 1961 原典の一次逐語（Still の床の下支え）。

## 11. pjdhiro 判断が要る設計論点（専権）
- **同一鉱脈内で床（★）と天井（○）が階層で割れている**稀な例。READER でこの「一本の橋の中の段差」をどう可視化するか（三帯表？橋の断面図？）。
- FEP（情報側）と autopoiesis-enactivism（生命-心連続性）を「認知への二つのアプローチ」として並置するか、層を分けるか（cs W8 二重カウント回避と併せて）。
