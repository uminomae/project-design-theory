---
id: RR-003
title: チームサイズ科学の実証地形 — 「崖か滑らかか」「三つ組構造の観測有無」の2問裁定
issue: "#117"
pillar: two-axis-closure
status: draft
date_start: 2026-07-02
date_end:
---

## 問い

RR-002（軸④）が本調査に発注した2問に絞る:

- **Q1（F1裁定）**: チーム性能の人数逓減は**崖**（B系: p=2,4,5,6 は圏論的に不能、8で急落）か**滑らか**（A系: コスト漸増）か。安定した5,6人チームは常態か。
- **Q2（F3裁定）**: 機能する7人前後の組織に**三つ組構造**（Fano 予測: 重なり合う3人細胞への分解）は観測されているか。

## 方法と注意

Web survey（2026-07-02）。**主要文献は abstract / 二次資料レベルの確認**であり、一次資料の精読は未了（精読が必要になった文献は個別にエスカレーションする）。数値・主張は出典を末尾に列挙し、精読前の断定を避ける。

## Q1 の結果 — 実証地形

### 主要研究の一覧

| 研究 | 発見 | 崖/滑らか への含意 |
|---|---|---|
| Ringelmann（綱引き実験, 19c末）→ Latané の社会的インパクト理論 | 一人あたり努力は人数とともに逓減。**べき乗則** `R(N)=N^(t−1)`（ヒト集団で t≈0.49–0.90）にフィット | **滑らか**。特定人数での不連続なし |
| Hackman & Vidmar (1970, *Sociometry* 33) | 2–7人で実験。**性能へのサイズ効果はほぼ無し**、満足度は人数にほぼ**線形**で悪化。主観的最適 **4.6人** | **滑らか**。最適は 3 でも 7 でもなく中間 |
| Wheelan (2009, *Small Group Research* 40: 329 実働グループ) | **3–4 > 5–6 > 7–10 > 11+**（生産性・発達段階とも）。3–8 は 9+ より有意に良い | 逓減は 5–6 の時点で**既に始まる**（8での崖ではない）。ただし bin 比較のため崖の検出力は低い |
| Mueller (2012, relational loss) | 大チームの個人は努力・責任・分化タスクが減り性能低下 | メカニズムは関係的・**漸進的** |
| Klimek, Hanel & Thurner (2009, *Physica A*; arXiv:0804.2202) | 内閣サイズと統治効率。**ある人数で質的変化**＝崖は存在するが、それは **≈20** | 崖はあるが**場所が 8 ではない** |
| 三つ組 vs 四つ組 (2021, *Sci Rep* 11) | 多数決が使える奇数（3）は使えない偶数（4）に学習・意思決定で勝る | **離散効果は実在する**が、由来は**パリティ（連立の算術）**であり 1,3,7 梯子ではない |
| Graicunas (1933, span of control) | 上司が管理する関係数 `R = N(2^(N−1) + N − 1)` は**指数**爆発（4→44, 5→100, 6→222）。推奨部下数 5–6 | 第三の組合せ曲線。**A系は quadratic だけでなく exponential の族**を含む |

### Q1 の裁定

1. **8での崖を直接支持する研究は見つからなかった**。実証地形は「滑らかな逓減（べき乗則・線形悪化）＋ パリティ等の**組合せ論的**離散効果」。
2. **安定した5,6人チームは常態である**（存在し、機能する。ただし 3–4 人に劣る: Wheelan）。→ **falsifier F1 は発動**: 「p=5,6 は零因子で割れない（成立しない）」という B系の**記述的**読みは棄却。RR-002 の撤退線1に従い、B は**設計原理**（3と7を選べば閉じたまま拡張できる）として存続させる。
3. 一方で「**3がベスト**」側は予想以上に支持が厚い: Wheelan の 3–4 最適、三つ組の多数決優位、後述の Simmel 系。ただし Hackman & Vidmar の 4.6 を含め、正直な帯は「**3–5**」。
4. 「7上限」の正直な帯は「**7–9**」（Wheelan の 3–8 vs 9+、two-pizza の folklore 5–8）。**上限帯は実在するが、7 という一点も 8 での急落も特定されていない**。
5. **離散効果の存在は B系の勝利を意味しない**。パリティ（奇数優位）は多数決の算術から出る離散性であり、B は「滑らか vs 崖」だけでなく「**どの離散構造か**（連立算術 vs Fano）」でも勝つ必要がある。

### Miller 7±2 の誤用警告

[P] Miller (1956) の 7±2 は**短期記憶のスパンと絶対判断**についての主張であり、チーム人数の主張ではない。Miller 自身が論文末尾で、7 の頻出は「ピタゴラス的な偶然」かもしれないと数秘への警戒を明示している。チームサイズ論への転用は範疇の飛び越しであり、本プログラムはこの経路に依存しない（Cowan (2001) の 4±1 への改訂もあり、「作業記憶→7上限」経路はさらに弱い）。

## Q2 の結果 — 三つ組構造の観測

### 直接検証は存在しない

Fano 予測（7人組織が「7つの重なり合う3人細胞・ペアごとにホーム細胞一意・各人3細胞」に組織化される）を**直接**検証した研究は見つからなかった。**F3 は未裁定**。

### 隣接証拠（仮説を生かしておく側）

| 証拠 | 内容 | 含意 |
|---|---|---|
| Simmel の三人組論 → Krackhardt の Simmelian ties | 三つ組に埋め込まれたペアは、裸のペアより**強く・安定で・持続的**（実証: 組織ネットワーク分析） | 「関係の最小安定単位は三つ組」[P]。B の細胞概念と整合 |
| Dunbar の同心円層 5-15-50-150 | 層間スケーリング比 **≈3** | 「×3 の入れ子」は人間の社会構造に実在する比率 [P]。ただし Fano の 1→3→7 とは別の入れ子 |
| 三三制（中国人民解放軍）・Viet Cong の3人細胞・仏レジスタンス Jedburgh | 独立な複数の伝統が**3人細胞を設計単位**として採用 | 設計原理としての3人細胞は歴史的に収斂 [P]。ただし採用理由は保安・スパン管理であり代数ではない |
| Faultline 研究（Lau & Murnighan 系） | チームは属性に沿って**2ブロックに割れ**やすく、**重ならない**サブグループ化は性能を毀損する。橋渡し friendship tie があると回復 | **重要な精密化**: 観測される自然発生サブグループは「非重複2分割」で有害。Fano 分解は「**全員が3細胞に属す最大限の重複**」で、faultline とは正反対の構造 |

### F3 の検証プロトコル提案（次の一手）

faultline 研究との対比から、Fano 予測は既存の社会ネットワーク分析（SNA）手法で検証可能な形に絞れる:

> **予測（精密版）**: 高機能な7人前後のチームでは、Simmelian tie 分析で (a) 三つ組被覆が高く、(b) 三つ組が**重なり合い**（各人が複数細胞に属す）、(c) ペアのホーム三つ組が安定して一意である。低機能チームでは (a') 非重複の2ブロック分割（faultline 型）または (b') ペア中心のスター/ハブ構造が観測される。

- 手法: triad census / Simmelian tie 分析（Krackhardt の既存ツール群）を、性能データ付き 6–8 人チームのコミュニケーションログに適用。
- この形なら「三つ組が観測されたか」が **N 判定（Fano対応は装飾）と B 存続を分ける**観測になる。

## 総合裁定（RR-002 の判定表への差し戻し）

| RR-002 の項目 | 本調査後の状態 |
|---|---|
| F1（安定5,6人チーム常態） | **発動**。B の記述的読みは棄却 → 設計原理読み（撤退線1）へ後退確定 |
| F3（三つ組構造） | **未裁定**。直接検証なし。隣接証拠は生存側。検証プロトコル提案済み |
| 「8人目で急に重くなる」＝零因子 | **N 寄りを維持**。崖の実証なし（崖は ≈20 の別現象） |
| 3最適 | 実証は「3–5 帯」。3 の特権性は Simmel 系（三つ組の質的特異性・多数決）が最有力で、これは**A系でもB系でもない第三の離散構造（連立算術）**の可能性が高い |
| 7上限 | 実証は「7–9 帯」。一点特定なし。Miller 経路は範疇誤用で棄却 |

**本 RR の一行サマリ**: 記述法則としての「3と7しかない」は死んだ。しかし「3人細胞は最強の関係単位であり、重なり合う三つ組への分解が大きめチームを機能させる」という**設計原理としての読みは、faultline 研究との対比でむしろ鋭くなり、検証可能になった**。

## CN-010 への反映事項

1. 保持論点の F1 を「発動済み・設計原理へ後退」に更新。
2. 「7上限」の実証帯（7–9）と「3最適」の実証帯（3–5）を明記し、一点一致の主張を撤回。
3. Fano 予測の精密版（faultline 対比・SNA プロトコル）を生成的予測として差し替え。

## 参照（アクセスレベル: abstract / 二次資料。精読未了）

- Hackman, J.R. & Vidmar, N. (1970). Effects of size and task type on group performance and member reactions. *Sociometry* 33, 37–54. https://www.semanticscholar.org/paper/f8abf34bd14f64162106f993c3c27231e8973448
- Wheelan, S.A. (2009). Group size, group development, and group productivity. *Small Group Research* 40(2), 247–262. https://journals.sagepub.com/doi/10.1177/1046496408328703
- Mueller, J.S. (2012). Why individuals in larger teams perform worse. *OBHDP*. https://www.sciencedirect.com/science/article/abs/pii/S0749597811001105
- Klimek, P., Hanel, R. & Thurner, S. (2009). To how many politicians should government be left? *Physica A*. https://arxiv.org/abs/0804.2202
- 三つ組 vs 四つ組: Examining learning coherence in group decision-making: triads vs. tetrads. *Sci Rep* 11 (2021). https://www.nature.com/articles/s41598-021-00089-w
- Krackhardt, D. (1999). The Ties That Torture: Simmelian Tie Analysis in Organizations. https://en.wikipedia.org/wiki/Simmelian_tie
- Goh, Krackhardt, Weingart & Koh (2014). The Role of Simmelian Friendship Ties on Retaliation within Triads. *Small Group Research*. https://journals.sagepub.com/doi/10.1177/1046496414537689
- Dunbar 層とスケーリング比≈3: Calling Dunbar's numbers. *Social Networks* (2016). https://www.sciencedirect.com/science/article/pii/S0378873316301095
- Graicunas, V.A. (1933). Relationship in Organization. 解説: https://www.nickols.us/graicunas.htm / https://en.wikipedia.org/wiki/Span_of_control
- Faultlines: Lau & Murnighan 系レビュー（MIT SMR 解説 https://sloanreview.mit.edu/article/bridging-faultlines-in-diverse-teams/ ; Organization Science 2014 https://pubsonline.informs.org/doi/10.1287/orsc.2014.0944 ）
- 三三制・3人細胞: https://en.wikipedia.org/wiki/Fireteam / https://en.wikipedia.org/wiki/Clandestine_cell_system
- Miller, G.A. (1956). The magical number seven, plus or minus two. *Psychological Review* 63, 81–97.（7±2 の範疇と数秘警戒の原典）／ Cowan, N. (2001). The magical number 4 in short-term memory. *BBS* 24.
- Ringelmann / Latané べき乗則の適用例: https://arxiv.org/pdf/2606.02646

## 関連

- `RR-002-isomorphism-rigor.md`（発注元・判定表）, `../../concepts/CN-010_division-algebra-consciousness-organization.md`
- pd#115（epic）, #116（軸②）, #117（本 RR）, #118（軸④ gate）
