# Clark (2013, 2015) 予測処理 詳細リサーチノート

**作成日**: 2026-04-08
**目的**: 意識モデル §1.2「脳は予測と誤差のシステムである」の原典精査。Clark の予測処理枠組みを検証する

---

## 1. 書誌情報

### 主論文 (2013)
- **著者**: Clark, Andy
- **タイトル**: Whatever next? Predictive brains, situated agents, and the future of cognitive science
- **雑誌**: *Behavioral and Brain Sciences*, 36(3), 181-204
- **出版年**: 2013年6月
- **DOI**: 10.1017/S0140525X12000477
- **PMID**: 23663408
- **被引用数**: 4,000件超
- **備考**: BBS ターゲット記事。28名のコメンテーターによる Open Peer Commentary 付き

### 主著書 (2015)
- **著者**: Clark, Andy
- **タイトル**: Surfing Uncertainty: Prediction, Action, and the Embodied Mind
- **出版社**: Oxford University Press
- **出版年**: 2015年11月
- **ISBN**: 978-0-19-021701-3

### 初期著作 (1997)
- **著者**: Clark, Andy
- **タイトル**: Being There: Putting Brain, Body, and World Together Again
- **出版社**: MIT Press
- **出版年**: 1997年
- **備考**: 身体化認知の先駆的著作

### 拡張された心 (1998)
- **著者**: Clark, Andy & Chalmers, David J.
- **タイトル**: The Extended Mind
- **雑誌**: *Analysis*, 58(1), 7-19
- **出版年**: 1998年
- **DOI**: 10.1093/analys/58.1.7
- **被引用数**: 8,000件超

---

## 2. 予測処理（Predictive Processing）の核心

### 2013年 BBS 論文の主要主張

Clark は Friston の自由エネルギー原理を認知科学の文脈で平易に再定式化し、以下を主張:

> 脳は本質的に予測機械（prediction machine）である。知覚・行動・認知のすべてが、階層的な生成モデルによるトップダウン予測と、ボトムアップの予測誤差の照合として統一的に記述できる。

### 階層的予測符号化

```
高次皮質領域（抽象的・時間的に拡張された予測）
    ↓ トップダウン予測
    ↑ ボトムアップ予測誤差
中間皮質領域
    ↓ トップダウン予測
    ↑ ボトムアップ予測誤差
低次皮質領域（感覚入力に近い予測）
    ↓ トップダウン予測
    ↑ ボトムアップ予測誤差
感覚入力
```

### 3つの核心概念

#### 1. 予測（Prediction）
- 脳の階層的生成モデルが、次に入力される感覚信号を常に予測
- 予測は「最良の推測」（best guess）= ベイズ的事後確率の最大化
- 知覚 = 予測の結果。「見ているもの」は感覚データそのものではなく、脳の予測

#### 2. 予測誤差（Prediction Error）
- 予測と実際の感覚入力の差分
- 予測誤差は階層を上に伝播し、モデルの更新を促す
- 予測誤差が小さい = 世界が予測通り = 安定した知覚
- 予測誤差が大きい = 驚き = モデルの更新が必要

#### 3. 精度重み付け（Precision Weighting）
- すべての予測誤差が等しく重要ではない
- 精度（precision）= 予測誤差の信頼度。高精度の誤差信号は大きな更新を引き起こす
- **注意 = 精度のゲイン調整**: 注意を向けるとは、特定チャネルの予測誤差の精度を上げること
- **感覚の精度 vs 予測の精度**: 状況に応じてどちらを信頼するかが動的に調整される

### 行動と能動的推論

Clark は知覚と行動を同一の原理で統合:

| 知覚 | 行動 |
|------|------|
| 予測に合わせて内部モデルを更新 | 予測に合わせて世界を変える |
| 予測誤差の最小化 = 信念の修正 | 予測誤差の最小化 = 行動による環境の変更 |

> 行動は、脳が世界を自らの予測に合致させるための手段である。

---

## 3. Surfing Uncertainty (2015) の拡張

### 「不確実性をサーフィンする」

2015年の著書で Clark は予測処理を拡張:

1. **知覚的意思決定**: 知覚は（無意識の）ベイズ的意思決定。脳は常に「最も確からしい仮説」を採用
2. **注意と意識**: 意識に上るものは精度の高い予測誤差 = 注意によって選択されたもの
3. **幻覚・妄想**: 予測の過剰（precision の異常配分）= トップダウン予測が感覚入力を圧倒
4. **うつ・不安**: 内受容感覚的予測誤差の慢性的増大 = 身体状態に関する予測モデルの不適合
5. **自閉スペクトラム症**: 予測誤差への精度の過剰配分 → 細部への過敏、文脈統合の困難

### Hohwy との対比

Clark と Hohwy (2013, *The Predictive Mind*) は予測処理の2つの解釈を代表:

| | Clark（リベラル派） | Hohwy（保守派） |
|---|---|---|
| **脳の開放性** | 脳は環境・身体・道具とシームレスに結合 | 脳はマルコフ毛布の内側に閉じ込められている |
| **身体化** | 身体と環境は認知の構成要素 | 身体は外部環境と同様に推論の対象 |
| **拡張された心** | 予測処理は拡張された心を支持 | 予測処理は脳中心主義を支持 |
| **表象** | 最小限の表象主義 or 反表象主義的傾向 | 内部モデル = 表象 |

---

## 4. 関連研究と発展

### Rao & Ballard (1999) — 元祖予測符号化
- **掲載**: *Nature Neuroscience*, 2(1), 79-87
- **知見**: 視覚皮質V1のextra-classical receptive field効果を予測符号化で説明
- **Clark との関係**: Clark が一般化した階層的予測符号化の神経科学的出発点

### Seth (2013, 2021) — 意識と予測処理
- **Seth, A.K. (2021)**: *Being You: A New Science of Consciousness*. Faber & Faber
- 意識体験を「制御された幻覚」（controlled hallucination）として記述
- 内受容感覚的予測 = 感情と自己意識の基盤

### Lupyan & Clark (2015) — 言語と予測
- 言語が知覚の予測を変調する（ラベルによるトップダウン効果）
- 予測処理枠組みにおける言語の位置づけ

---

## 5. 批判と論争

### 反証可能性
- **批判**: 予測処理はあまりにも柔軟で、ほぼすべての神経科学的知見を「事後的に」説明できる
- **Kogo & Trengove (2015)**: 予測符号化のモデルは、非予測符号化モデルと経験的に区別困難
- **Clark の応答**: 予測処理は「原理」であり、具体的な実装レベルのモデルが反証の対象

### 予測符号化の神経的証拠
- **支持的**: ミスマッチ陰性電位（MMN）、反復抑制、コンテキスト効果
- **批判的**: Walsh et al. (2020): 予測符号化の「純粋な」神経的証拠は思ったより少ない。多くの知見は alternative な説明が可能
- **de Lange et al. (2018)**: 予測の影響は知覚に見られるが、予測「符号化」の特定の実装を確証する証拠は限定的

### 意識の説明としての限界
- **批判**: 予測処理は「なぜ予測誤差の処理が意識的体験を伴うのか」（hard problem）を説明しない
- **Clark の応答**: 予測処理は意識の hard problem を解くのではなく、意識の構造と内容（what it's like）を説明する枠組み

### 身体化との緊張
- **Bruineberg & Rietveld (2014)**: 予測処理の「内部モデル」重視は、Clark 自身の初期の身体化認知（Being There, 1997）と緊張
- **Clark の応答**: 予測処理における「モデル」は古典的表象とは異なる。行動傾向性そのものがモデルの一部

---

## 6. 2024-2025年時点の科学的位置づけ

### 確立された事項

1. **脳は予測する**: 脳が感覚入力を予測し、予測誤差を処理するという一般的原理は広く受容
2. **階層的処理**: 皮質の階層構造がフィードフォワード/フィードバック接続を通じて予測的処理を行うことは解剖学的に支持
3. **精度重み付けと注意**: 注意を精度のゲイン調整として記述する枠組みは行動・神経データと整合
4. **臨床応用**: 精神疾患（統合失調症、自閉症、うつ等）を予測誤差の異常として記述するアプローチは活発に研究中

### 論争中の事項

1. **予測符号化の実装**: 皮質の微小回路が実際に予測符号化を行っているかどうかの直接的証拠は不十分
2. **リベラル vs 保守**: Clark vs Hohwy の解釈論争は未解決
3. **すべてが予測処理か**: 報酬学習、習慣形成、運動制御のすべてが予測処理に還元可能かは議論あり
4. **意識の説明力**: 予測処理が意識の hard problem に貢献するかは哲学的に未解決

### 現在の最有力解釈

> 脳がトップダウン予測とボトムアップ予測誤差の照合を行うことは広く受容されているが、これが「すべて」を統一的に説明するかは未確定。実践的には、予測処理は知覚・注意・情動・精神疾患の研究に有用な枠組みを提供している。Clark の貢献は、Friston の数学的形式主義を認知科学・哲学のコミュニティにアクセス可能にしたことにある。

---

## 7. 意識モデルへの含意

### §1.2 への貢献

Clark (2013) は v2 ドラフト §1.2「脳は予測と誤差のシステムである」を以下の点で支持:

1. **予測処理の認知科学的正当化**: Friston の数学的原理を、知覚・行動・認知の統一的記述として翻訳
2. **精度重み付けの概念**: 何が意識に上るか（何に注意を向けるか）のメカニズム
3. **行動の統合**: 知覚と行動を同一原理で記述 → 環境への能動的関与を含む

### Friston との相補性

- **Friston**: 数学的形式主義。変分自由エネルギー、マルコフ毛布
- **Clark**: 認知科学的・哲学的解釈。身体化、拡張された心、意識との関係
- 両者は同じ予測処理の「数学」と「意味」を分担

### §2 核心仮説との関係

- 精度重み付けの観点: 「間主観性の信号が生存関連と同等の重みで処理される」= 間主観的予測誤差に生存的予測誤差と同等の精度が配分されている
- Clark の身体化認知の伝統と、Craig/Damasio の身体基盤論は収束: 身体が認知の構成要素であり、社会的身体（間身体性）も同様

### 欠損駆動思考との接続

- 予測誤差 = 欠損。Clark は「予測誤差を最小化する」が脳の基本操作とするが、欠損駆動思考は「予測誤差を問いとして保持する」ことの価値を主張
- これは Clark の枠組みでは「精度を下げるべき誤差信号にあえて高い精度を維持する」操作に相当
- ネガティブ・ケイパビリティ = 予測誤差解消への衝動に抗う態度

---

## 8. 参考文献一覧

### 原著
- Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences*, 36(3), 181-204.
- Clark, A. (2015). *Surfing Uncertainty: Prediction, Action, and the Embodied Mind*. Oxford University Press.
- Clark, A. (1997). *Being There: Putting Brain, Body, and World Together Again*. MIT Press.
- Clark, A. & Chalmers, D.J. (1998). The Extended Mind. *Analysis*, 58(1), 7-19.

### 関連理論
- Hohwy, J. (2013). *The Predictive Mind*. Oxford University Press.
- Rao, R.P. & Ballard, D.H. (1999). Predictive coding in the visual cortex. *Nature Neuroscience*, 2(1), 79-87.
- Seth, A.K. (2021). *Being You: A New Science of Consciousness*. Faber & Faber.

### 批判
- Walsh, K.S., et al. (2020). Evaluating the neurophysiological evidence for predictive processing as a model of perception. *Annals of the New York Academy of Sciences*, 1464(1), 242-268.
- de Lange, F.P., Heilbron, M., & Kok, P. (2018). How do expectations shape perception? *Trends in Cognitive Sciences*, 22(9), 764-779.
- Kogo, N. & Trengove, C. (2015). Is predictive coding theory articulated enough to be testable? *Frontiers in Computational Neuroscience*, 9, 111.
- Bruineberg, J. & Rietveld, E. (2014). Self-organization, free energy minimization, and optimal grip on a field of affordances. *Frontiers in Human Neuroscience*, 8, 599.
