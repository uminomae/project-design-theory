---
id: RR-007
title: F5 裁定 — 感情の「掛け算」の操作的対応物は平面には無い。ただし位相が働く層は別にあった
issue: "#115"
pillar: two-axis-closure
status: draft
date_start: 2026-07-03
date_end: 2026-07-03
---

## 問い

README §7 残タスク#3。RR-004 が新設した **F5**:

> 感情の合成・遷移が ℝ² の加法（線形結合・平均）で尽きるなら、意識＝ℂ は ℂ を ℝ² に退化させており N（装飾）。ℂ が非自明に働くと言えるのは、合成・遷移が**回転伸縮**（位相の加算・強度の乗算）で書け、かつ `i` 倍（物質→精神の90度回転）や除法（関係の解消）が操作的対応物を持つと実証されたときのみ。

RR-004 は感情の**静的な合成**（混合感情＝線形結合）を検査した。本 RR は残りの領域——感情の**時間変化（affect dynamics）**——に掛け算的な構造（回転伸縮）が現れるかを検査し、F5 を裁定する。

## 方法と注意

Web survey（2026-07-03）。文献は abstract / 二次資料レベル 📚（原典精読未了）。CL-010 準拠。

## 発見1 — 感情の時間変化の標準モデルも「足し算系」だった

[P] affect dynamics の代表モデル **DynAffect**（Kuppens, Oravecz & Tuerlinckx 2010, *JPSP* 99(6): 1042–1060）は、core affect（valence×arousal 平面上の点）の時間変化を次の3要素で記述する:

- **home base**（各人の基準点＝アトラクタ）
- その周りの**変動幅**
- **アトラクタ強度**（基準点に引き戻す力。弱いと感情的慣性＝前の状態が続く）

数理的実体は **Ornstein–Uhlenbeck 型の確率(微分)方程式**——「ばねで引き戻される点＋ノイズ」であり、**線形（加法的）な力学**である。関連する概念群（emotional inertia＝自己相関、variability、instability、reactivity）もすべて加法・分散ベースで定義される。

**回転伸縮（位相の加算・強度の乗算）・`i` 倍・除法に対応する演算は、affect dynamics の標準的語彙のどこにも現れない。**

### F5 の裁定

| 検査対象 | 結果 |
|---|---|
| 静的合成（RR-004） | 線形結合（加法）で記述。乗法なし |
| 時間変化（本 RR） | アトラクタ＋ノイズの線形確率力学（加法）。乗法なし |

→ **F5 発動を確定**。「意識＝ℂ」の**平面読み**（感情平面そのものが複素数体として働く）については、合成も動態も加法で尽きており、ℂ-field は装飾（N）。CN-010 前提②の平面読みは正式に空虚判定とする。

## 発見2 — ただし、複素位相が心理学で本当に仕事をしている層が一つある

[P] 量子認知（quantum cognition）では、判断・意思決定の確率が古典的な**全確率の法則を系統的に破り**（disjunction effect・conjunction fallacy・カテゴリ化-意思決定の干渉 等）、**非ゼロの干渉項を持つ量子的モデル**がこれに適合する（Busemeyer & Wang の overview、Pothos & Busemeyer 系）。

干渉項は複素振幅の**位相差**（cos θ）から生じる。つまり——

- **複素数の位相が経験的な予測力を持つ場所は、心理学に実在する**。
- ただしそれは **valence×arousal の感情平面ではなく、判断・観測の「確率振幅」の層**である。

これは RR-006 のレイヤー分離と**同じ場所**を指している: ℂ 構造が心理学で稼いでいるのは「状態の平面」ではなく「**測定・確率のレイヤー**」（非可換観測・順序効果・干渉）。

### 含意（理論改訂の選択肢として記録・採否は pjdhiro 専権）

前提②「意識＝ℂ」には二つの読みがあることが確定した:

| 読み | 状態 |
|---|---|
| **平面読み**: 感情平面 `z = 物質 + i·精神` が複素数体として働く | **空虚（N）確定**（F5 発動。合成も動態も加法） |
| **振幅読み**: 意識の判断・観測の確率振幅が複素的（位相→干渉・順序効果） | **生きた実証プログラムが存在**（quantum cognition）。ただしこれは CN-010 の原型仮説そのものではなく**移設**になる |

移設を採るなら「個の意識は ℂ の平面**である**」から「個の意識の**観測は** ℂ 振幅で**振る舞う**」への改訂であり、RR-006 の第三定式化（平面＋非可換な切り口）と一体化できる。採らないなら前提②は平面読みのまま空虚判定で確定。**どちらにするかは理論の最終採否＝pjdhiro 専権**として保持論点に置く。

## 現時点の判定サマリ

| 主張 | 層 | 備考 |
|---|---|---|
| 感情の合成・動態＝加法（ℝ²） | **P（確立）** | 混合＝線形結合（RR-004）＋動態＝OU アトラクタ（本 RR） |
| 意識＝ℂ（平面読み） | **N 確定** | F5 発動。回転伸縮・i 倍・除法の対応物なし |
| 複素位相の経験的仕事 | **M（別レイヤーで実在）** | 量子認知の干渉・順序効果。感情平面ではなく確率振幅の層 |
| 前提②の振幅読みへの移設 | **保持論点（pjdhiro 専権）** | RR-006 第三定式化と整合的だが原型仮説の改訂になる |

## 次の作業

1. CN-010 の F5・前提②を「平面読み＝N 確定／振幅読み＝保持論点」に更新
2. README §6/§7 更新（タスク#3 完了）
3. READER §9 の「空振り」節に追記（関数電卓の比喩の続き: 掛け算ボタンが押されている部屋は別にあった）→ LP 再生成 → 公開

## 参照（アクセスレベル: abstract / 二次資料 📚）

- Kuppens, P., Oravecz, Z. & Tuerlinckx, F. (2010). Feelings change: Accounting for individual differences in the temporal dynamics of affect. *Journal of Personality and Social Psychology* 99(6), 1042–1060. PMID:20853980. https://pubmed.ncbi.nlm.nih.gov/20853980/
- Oravecz, Z., Tuerlinckx, F. & Vandekerckhove, J.（DynAffect の階層 OU 実装系）; De Longis et al. (2022) *Applied Psychology*（emotional inertia の適用例） https://iaap-journals.onlinelibrary.wiley.com/doi/10.1111/apps.12325
- Busemeyer, J.R. & Wang, Z. Quantum Cognition（overview, *Annual Review of Psychology* 系）. https://jbusemey.pages.iu.edu/quantum/annurev-psych.pdf
- 干渉効果の証拠レビュー: What is the evidence for quantum-like interference effects in human judgments and decision behavior? https://www.researchgate.net/publication/275606835
- Pothos, E.M. & Busemeyer, J.R.（disjunction effect の量子的説明系）／ Frontiers in Physics (2016) Quantum probabilistic models revisited. https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2016.00026/full

## 関連

- `README.md` §7 タスク#3, `RR-004-*.md`（F5 の発注元・静的合成の裁定）, `RR-006-*.md`（レイヤー分離・同じ着地点）
- `../../concepts/CN-010_*.md`
- pd#115（epic）
