# Friston (2005, 2010) 自由エネルギー原理 詳細リサーチノート

**作成日**: 2026-04-08
**目的**: 意識モデル §1.2「脳は予測と誤差のシステムである」の原典精査。自由エネルギー原理と能動的推論の理論体系を検証する

---

## 1. 書誌情報

### 統一理論論文 (2010)
- **著者**: Friston, Karl
- **タイトル**: The free-energy principle: a unified brain theory?
- **雑誌**: *Nature Reviews Neuroscience*, 11(2), 127-138
- **出版年**: 2010年2月
- **DOI**: 10.1038/nrn2787
- **PMID**: 20068583
- **被引用数**: 7,000件超

### 初期定式化 (2005)
- **著者**: Friston, Karl
- **タイトル**: A theory of cortical responses
- **雑誌**: *Philosophical Transactions of the Royal Society B*, 360(1456), 815-836
- **出版年**: 2005年
- **DOI**: 10.1098/rstb.2005.1622

### 能動的推論 (2009)
- **著者**: Friston, K.J., Daunizeau, J., & Kiebel, S.J.
- **タイトル**: Reinforcement learning or active inference?
- **雑誌**: *PLoS ONE*, 4(7), e6421
- **出版年**: 2009年
- **DOI**: 10.1371/journal.pone.0006421

### 生命と心の理論 (2013)
- **著者**: Friston, Karl
- **タイトル**: Life as we know it
- **雑誌**: *Journal of the Royal Society Interface*, 10(86), 20130475
- **出版年**: 2013年

---

## 2. 自由エネルギー原理（FEP）の核心

### 基本的動機

Friston の出発点は Helmholtz (1867) の「無意識的推論」と統計力学の変分法の融合:

> 脳が行っていることのすべては、変分自由エネルギーの最小化として記述できる。

### 情報理論的定式化

#### 変分自由エネルギー

任意のシステムにおいて、変分自由エネルギー F は:

```
F = D_KL[q(θ) || p(θ|o)] - log p(o)
```

- `q(θ)`: 生成モデルのパラメータに関する近似事後分布（脳が「信じていること」）
- `p(θ|o)`: 真の事後分布
- `p(o)`: 観測データの周辺尤度（モデルエビデンス）
- `D_KL`: KLダイバージェンス（常に ≥ 0）

#### 2つの含意

1. **F ≥ -log p(o)**: 自由エネルギーはサプライズ（-log p(o)）の上界。F を最小化すればサプライズを間接的に最小化
2. **サプライズの最小化 = エントロピー最小化**: 長期的にサプライズを最小化することは、システムの状態のエントロピーを低く保つこと ≈ ホメオスタシス

### 2つの最小化経路

| 経路 | 操作 | 脳での対応 |
|------|------|-----------|
| **知覚的推論（perceptual inference）** | q(θ) を更新して F を最小化 | 信念の更新。予測符号化。トップダウン予測とボトムアップ誤差信号の照合 |
| **能動的推論（active inference）** | 行動により o を変える | 環境への働きかけ。予測に合致する観測を得るための行動選択 |

### 予測符号化の実装

FEP の神経的実装として予測符号化（predictive coding）を提案:

```
皮質の階層構造:
  高次領域 → トップダウン予測 → 低次領域
  低次領域 → ボトムアップ予測誤差 → 高次領域
  
  各層で: 予測誤差 = 感覚入力 - トップダウン予測
  予測誤差の最小化 → 信念の更新 or 行動
```

### 精度重み付け（precision weighting）

- 予測誤差の重要度は「精度」（precision = 逆分散）で調整される
- 高精度の誤差信号: 大きな影響力 → 信念の更新を促す
- 低精度の誤差信号: 無視される
- **精度の調整 ≈ 注意**: 注意とは予測誤差の精度を上げること

---

## 3. マルコフ毛布と存在の条件

### マルコフ毛布（Markov blanket）

Friston (2013) は FEP を生命の一般原理に拡張:

- **マルコフ毛布**: システムの内部状態と外部環境を統計的に分離する状態の集合
- 構成: 感覚状態（sensory states）+ 能動状態（active states）
- **主張**: マルコフ毛布を持つ任意のシステムは、FEP に従うかのように振る舞う

```
外部環境 ←→ [能動状態 | 内部状態 | 感覚状態] ←→ 外部環境
           └─────── マルコフ毛布 ───────┘
```

### 存在論的拡張

> マルコフ毛布を持つものは何であれ、自由エネルギーを最小化しているかのように記述できる。これは細胞、臓器、脳、人間、社会システムに適用される。

---

## 4. 内受容感覚的推論と情動

### Seth & Friston の統合

Seth, A.K. (2013) "Interoceptive inference, emotion, and the embodied self":
- 内受容感覚を FEP の枠組みで再解釈
- 感情 = 内受容感覚的予測誤差の処理結果
- 自己意識 = 内部状態に関する予測モデルの精度

### Barrett & Simmons (2015)
- Barrett の構成主義的情動理論を FEP で再定式化
- 情動 = 身体予算管理（body budgeting）に関する内受容感覚的予測
- 情動カテゴリ = 内受容感覚的予測誤差を解決するための概念的予測

---

## 5. 批判と論争

### 反証可能性の問題

- **批判者**: 複数の哲学者・神経科学者
- **論点**: FEP は「すべてを説明する」ため、何も説明しない（unfalsifiable）
- **具体的批判**: Andrews (2021): FEP は「マルコフ毛布を持つ系は存在し続ける」という自明な主張を複雑な数学で言い換えているだけ
- **Friston の応答**: FEP 自体は原理（principle）であり、直接反証の対象ではない。FEP から導出される具体的モデル（予測符号化、能動的推論等）が反証可能

### マルコフ毛布の形式的問題

- **Biehl et al. (2021)**: *Proceedings of the Royal Society A*
  - マルコフ毛布の「同定」が前提とする統計的独立性条件が、実際の生物系で成立するか疑問
  - マルコフ毛布の境界は観察者が設定するものであり、システムに内在するものではない可能性
- **Bruineberg et al. (2022)**: "The Emperor's New Markov Blankets"
  - マルコフ毛布の存在論的解釈（システムの「自己」を定義する）に対する批判
  - 統計的ツールとしてのマルコフ毛布と、存在論的境界としてのマルコフ毛布を混同していると指摘

### Colombo & Wright (2021) — "First principles in the life sciences"
- **掲載**: *Origins of Life and Evolution of Biospheres*
- **批判**: FEP が生命科学の「第一原理」として機能するという主張に疑義
- FEP の数学的形式主義が経験的内容を持つかどうかが不明確

### 計算論的実装の困難

- **批判**: FEP の数学的枠組みは elegant だが、具体的な神経回路や行動に対する定量的予測を導出することが極めて困難
- **Litwin & Miłkowski (2020)**: FEP の「説明」は事後的な再記述であり、事前予測ではないことが多い

---

## 6. 2024-2025年時点の科学的位置づけ

### 確立された事項

1. **予測符号化の基本原理**: 脳が予測誤差を処理するという一般的な枠組みは広く受容。Rao & Ballard (1999) の視覚皮質での予測符号化、mismatch negativity 等の電気生理学的証拠
2. **能動的推論**: 行動を「予測に合致する観測を得るための手段」として理解する枠組みは、運動制御、探索行動、意思決定の統一的記述として評価
3. **精度重み付けと注意**: 注意を予測誤差の精度調整として説明する枠組みは経験的支持を得ている
4. **内受容感覚的推論**: FEP を通じた内受容感覚と情動の統合は、Seth, Barrett 等により発展

### 論争中の事項

1. **FEP の経験的内容**: 原理として反証不可能であるという批判は未解決
2. **マルコフ毛布の存在論**: 統計的ツール vs 存在論的境界の論争は継続
3. **万物理論としての FEP**: 細胞から社会までを統一的に記述するという野心は、多くの研究者から懐疑的に見られている
4. **定量的予測**: 具体的な実験結果の事前予測に FEP が使われた事例は限定的

### 現在の最有力解釈

> FEP は脳の情報処理を理解するための有力な原理的枠組みであり、予測符号化・能動的推論・精度重み付けなどの具体的理論を統合する上位概念として機能している。ただし、FEP 自体が経験的にテスト可能な理論かどうかについては哲学的論争が続いている。実践的には、FEP から導出される具体的モデル（予測符号化、能動的推論）が神経科学研究で有用に使われている。

---

## 7. 意識モデルへの含意

### §1.2 への貢献

Friston (2010) は v2 ドラフト §1.2「脳は予測と誤差のシステムである」の理論的基盤を提供:

1. **統一的枠組み**: 知覚・行動・学習・注意を単一の原理（自由エネルギー最小化）で記述
2. **予測誤差の中心性**: 脳が「予測誤差を最小化する機械」であるという見方を理論的に正当化
3. **精度重み付け**: 何に注意を向けるか = どの予測誤差を重視するかの決定機構

### §2 核心仮説との関係

- 核心仮説「間主観性の信号が生存関連と同等の重みで処理される」は、FEP の枠組みでは「間主観的予測誤差に高い精度が割り当てられている」と翻訳可能
- Coan の Social Baseline Theory は FEP と親和的: 「社会的近接性がデフォルト」= 社会的孤立は高サプライズ状態
- 能動的推論の観点: 社会的接近行動は、間主観的予測誤差を最小化するための能動的推論

### 欠損駆動思考との接続

- FEP の「予測誤差」概念は、欠損駆動思考の「欠損」（予想と現実の誤差）と直接対応
- 欠損駆動思考が「棄却される誤差を問いとして拾う」とは、通常は精度を下げて無視される予測誤差に精度を上げる（注意を向ける）操作として記述可能

---

## 8. 参考文献一覧

### 原著
- Friston, K. (2005). A theory of cortical responses. *Philosophical Transactions of the Royal Society B*, 360(1456), 815-836.
- Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127-138.
- Friston, K., Daunizeau, J., & Kiebel, S.J. (2009). Reinforcement learning or active inference? *PLoS ONE*, 4(7), e6421.
- Friston, K. (2013). Life as we know it. *Journal of the Royal Society Interface*, 10(86), 20130475.

### 予測符号化の先行研究
- Rao, R.P. & Ballard, D.H. (1999). Predictive coding in the visual cortex: a functional interpretation of some extra-classical receptive-field effects. *Nature Neuroscience*, 2(1), 79-87.
- Helmholtz, H. von (1867). *Handbuch der physiologischen Optik*.

### 内受容感覚的推論
- Seth, A.K. (2013). Interoceptive inference, emotion, and the embodied self. *Trends in Cognitive Sciences*, 17(11), 565-573.
- Barrett, L.F. & Simmons, W.K. (2015). Interoceptive predictions in the brain. *Nature Reviews Neuroscience*, 16(7), 419-429.

### 批判
- Andrews, M. (2021). The math is not the territory: navigating the free energy principle. *Biology & Philosophy*, 36(3), 30.
- Biehl, M., Pollock, F.A., & Kanai, R. (2021). A technical critique of some parts of the free energy principle. *Entropy*, 23(3), 293.
- Bruineberg, J., Dolega, K., Dewhurst, J., & Baltieri, M. (2022). The Emperor's New Markov Blankets. *Behavioral and Brain Sciences*, 45, e183.
- Colombo, M. & Wright, C. (2021). First principles in the life sciences. *Origins of Life and Evolution of Biospheres*, 51(1), 31-48.
- Litwin, P. & Miłkowski, M. (2020). Unification by fiat: arrested development of predictive processing. *Cognitive Science*, 44(7), e12867.
