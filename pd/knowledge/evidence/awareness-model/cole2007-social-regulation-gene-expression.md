# Cole et al. (2007) 社会的遺伝子発現制御 -- リサーチノート

## 書誌情報

- **著者**: Cole, S.W., Hawkley, L.C., Arevalo, J.M., Sung, C.Y., Rose, R.M., & Cacioppo, J.T.
- **タイトル**: Social regulation of gene expression in human leukocytes
- **誌名**: *Genome Biology*, 8(9), R189
- **年**: 2007
- **DOI**: 10.1186/gb-2007-8-9-r189
- **アクセス**: オープンアクセス（BioMed Central）
- **所属**: UCLA Department of Medicine (Cole, Arevalo, Sung, Rose); University of Chicago (Hawkley, Cacioppo)

---

## 研究の位置づけ

社会的環境がヒトの遺伝子発現を分子レベルで変化させることを初めて体系的に示した先駆的研究。孤独感（perceived social isolation）が白血球のトランスクリプトームに及ぼす影響を、ゲノムワイドのマイクロアレイで解析した。後のCTRA（Conserved Transcriptional Response to Adversity）概念の基盤となった。

---

## 方法論

### サンプル

- **母集団**: Chicago Health, Aging, and Social Relations Study (CHASRS)
- **N = 14**: 高孤独群6名、低孤独群8名
- **選抜基準**: UCLA Loneliness Scale（改訂版）で上位15%（高孤独）と下位15%（低孤独）を抽出
- **人口統計**: 年齢中央値55歳、女性78%、Anglo-American 50%、African-American 43%、Hispanic/Latino 7%
- **収入**: 高孤独群 $45,000 vs 低孤独群 $87,500（差あり）
- **共変量統制**: ANCOVA で年齢、性別、人種、うつ、ストレス、敵意、医療状態、投薬、行動要因を統制（全 p <= 0.0486）

### 遺伝子発現測定

- **プラットフォーム**: Affymetrix U133A 高密度オリゴヌクレオチドアレイ
- **測定対象**: 22,283 mRNA転写産物
- **RNA抽出**: 末梢血白血球（ficoll密度勾配遠心分離）、RNAlater/RNeasy プロトコル
- **RNA量**: 5 μg
- **発現定量**: Robust Multiarray Averaging (RMA)

### 統計閾値

- **差次的発現の基準**: 平均発現レベルの30%以上の差（偽発見率 FDR 10%に対応）
- **感度分析**: 50%差閾値（FDR 5%）でも検証
- **バイオインフォマティクス**: TELiS（Transcription Element Listening System）で上流制御経路を同定

---

## 主要知見

### 209遺伝子の差次的発現

高孤独群 vs 低孤独群で **209の遺伝子転写産物**（144遺伝子に対応）が差次的に発現:

| 方向 | 数 | 割合 | 機能カテゴリ |
|------|-----|------|-------------|
| **上方制御** | 78 | 37% | 炎症促進、免疫活性化、転写制御、細胞増殖 |
| **下方制御** | 131 | 63% | 成熟B細胞機能、I型インターフェロン応答、抗増殖因子 |

下方制御優位（p < 0.0001、二項検定）= 正味の抑制効果。

### 上方制御された主要遺伝子

- **炎症マーカー**: IL1B, IL8, COX2/PTGS2
- **細胞周期制御**: CDC25B, G0S2, MYBL1
- **転写因子**: EGR1, EGR3, FOSB

### 下方制御された主要遺伝子

- **I型インターフェロン応答**: STAT1, OAS1, IFI27, G1P3, IFI44
- **B細胞マーカー**: CD79B、免疫グロブリン鎖
- **抗増殖因子**: CDKN1C, TGF-beta, アポトーシス関連遺伝子

### TELiS による転写因子解析（CTRAパターンの原型）

| 転写因子 | 変化 | p値 |
|----------|------|-----|
| **NF-kappaB/Rel** | 上方制御遺伝子で2.9倍の応答エレメント出現 | p = 0.0108 |
| **GRE（グルココルチコイド応答エレメント）** | 上方制御遺伝子で63%低下 | p = 0.0325 |
| **NF-kappaB/GRE 相反比** | 5.08倍 | p = 0.0070 |
| **CREB/ATF** | 2.2倍増加 | p = 0.0044 |
| **Oct転写因子** | 62.2%低下 | p = 0.0004 |

### 神経内分泌メカニズム

- **コルチゾール**: 高孤独群と低孤独群で平均唾液コルチゾールに有意差なし（p = 0.2374）
- **日内リズム鈍化**: 高孤独群でコルチゾールの日内低下が少ない（p = 0.0474）
- **GR非感受性**: GR mRNA (NR3C1) 発現は正常（< 4%差）だが、GR 介在性転写は低下 → 翻訳後修飾による機能障害を示唆
- **炎症マーカー**: C反応性タンパク質（CRP）が高孤独群で約2倍高い（1.33 vs 0.65 mg/l; p = 0.0014）

---

## 生物学的メカニズム: 社会的シグナル伝達経路

Cole の後続研究で精緻化された「social signal transduction」経路:

```
社会的脅威・孤立（知覚レベル）
    |
    v
中枢神経系の脅威応答系（扁桃体等）
    |
    v
交感神経系（SNS）活性化
    |
    v
ノルエピネフリン放出（交感神経末端から）
    |
    v
白血球 beta-アドレナリン受容体への結合
    |
    v
cAMP/PKA 細胞内シグナル経路
    |
    v
転写因子活性の変化:
  - 上昇: CREB, NF-kappaB, AP-1 → 炎症促進遺伝子の発現増加
  - 低下: IRF（インターフェロン応答因子）, GR → 抗ウイルス遺伝子の発現低下
    |
    v
骨髄系免疫細胞（単球・好中球・樹状細胞）の産生増加
    |
    v
炎症促進的/抗ウイルス低下の循環免疫プロファイル = CTRA
```

---

## CTRA（Conserved Transcriptional Response to Adversity）

### 定義

慢性的脅威に曝露された個体の循環免疫細胞で観察される遺伝子発現パターン:
- **上方制御**: 炎症関連遺伝子（NF-kappaB 標的）
- **下方制御**: I型インターフェロン応答遺伝子（IRF標的）、抗体合成遺伝子

### CTRAが確認された逆境条件（Cole, 2014, 2019 のレビューより）

| 条件 | 研究例 |
|------|--------|
| 孤独・知覚的社会的孤立 | Cole et al. 2007; 複数の追試 |
| 死別・悲嘆 | 配偶者喪失研究 |
| 低社会経済的地位 | SES と遺伝子発現の研究 |
| 介護ストレス | 家族介護者の研究 |
| PTSD | 心的外傷後ストレス |
| 社会的敗北・低社会的地位 | 動物モデルでも確認 |
| 人種差別 | 差別経験と CTRA |
| 戦争曝露 | 戦闘経験者の研究 |
| がん診断 | 転移性がんの組織でも確認 |
| 児童期逆境体験（ACE） | 性的少数者男性での追試（2024） |
| 都市居住 | urbanity とCTRA |

### 動物モデルによる確証

- **マウス**: 反復社会的敗北で炎症促進バイアスと抗ウイルス遺伝子発現低下
- **霊長類**: アカゲザルで社会的地位に関連した免疫変化
- **魚類**: ストレス飼育環境で骨髄系動員増加

### 介入によるCTRA逆転

- 瞑想・マインドフルネスストレス低減法（MBSR）
- ヨガ・太極拳
- 認知行動的ストレス管理
- 向社会的行動・親切介入
- ユーダイモニック（eudaimonic）な生き方の促進
- beta遮断薬（薬理学的介入: がん患者の初期試験で有望）

---

## 後続の主要レビュー論文

### Cole (2014) "Human Social Genomics"

- **誌名**: *PLoS Genetics*, 10(8), e1004601
- **内容**: 社会ゲノミクス分野の包括的レビュー。CTRA概念の定式化、social signal transduction 経路の詳細、複数の逆境条件にわたる知見の一貫性を整理
- **DOI**: 10.1371/journal.pgen.1004601

### Cole (2019) "The Conserved Transcriptional Response to Adversity"

- **誌名**: *Current Opinion in Behavioral Sciences*, 28, 31-37
- **内容**: CTRA研究の10年超の蓄積を総括。beta-アドレナリンシグナル経路の機構的解明、動物モデルでの因果証拠、介入研究の成果、genomic biofeedback の将来展望
- **PMID**: 31592179

### Slavich & Irwin (2014) "Social Signal Transduction Theory of Depression"

- **誌名**: *Psychological Bulletin*, 140(3), 774-815
- **内容**: CTRAから抑うつへの経路。社会的脅威 → 炎症 → 抑うつの因果モデルを精緻化
- **PMID**: 24417575

### Slavich & Cole (2023) "Human social genomics: Concepts, mechanisms, and implications for health"

- **誌名**: *Lifestyle Medicine*, 4(2), e75
- **内容**: 最新の概念的フレームワーク更新

---

## 最新の展開（2024-2025）

### Lee et al. (2025)

- **タイトル**: "Positive social relations, loneliness, and immune system gene regulation"
- **誌名**: *Annals of the New York Academy of Sciences*
- **知見**: 韓国人成人2コホートで、温かく信頼に満ちたポジティブな社会関係がCTRA遺伝子発現と逆相関。孤独感とは独立の効果。「社会的充実」が分子レベルのwell-beingに寄与する証拠

### ストレス関連遺伝子制御研究 (2024)

- **誌名**: *Brain, Behavior, and Immunity*
- **N = 102**: 孤立群と接続群でCTRA発現パターンが逆転する場合があることを発見。客観的孤立と主観的孤独の乖離を示唆。社会的に孤立した個体にとって社会的交流が逆にストレッサーとなりうる知見

### 児童期逆境とCTRA (2024)

- 性的少数者男性で53のCTRA遺伝子の発現をベースラインと12ヶ月後に測定。児童期逆境体験とCTRAの関連を追試

---

## 批判と限界

### サンプルサイズの問題

- **N = 14**（高孤独6、低孤独8）は極めて小さい。Cole自身も「proof-of-concept」研究と位置づけ
- 第一世代のマイクロアレイ研究はコストと技術的制約から小規模横断研究にならざるを得なかった
- Cole (2014) は「first-generation social genomics studies involved small cross-sectional analyses with limited assessment of socioenvironmental confounders」と自認

### 相関 vs 因果

- 横断研究デザインのため、孤独感が遺伝子発現を変化させるのか、遺伝子発現パターンが孤独傾向を生むのか、第三変数が両方を駆動するのかは区別不能
- 動物モデル（社会的敗北パラダイム）で因果方向の部分的確認
- beta遮断薬介入でCTRAパターンが変化する知見が因果の方向性を支持

### Brown et al. (2014) の批判的再解析

- **論文**: Brown, N.J.L., MacDonald, D.A., Samanta, M.P., Friedman, H.L., & Coyne, J.C. (2014). "A critical reanalysis of the relationship between genomics and well-being." *PNAS*, 111(35), 12705-12709
- **批判内容**:
  - Fredrickson et al. (2013) のhedonic/eudaimonic well-being とCTRA遺伝子発現の関係について、統計的に「fatally flawed」と主張
  - hedonic と eudaimonic の相関が r = 0.79 と極めて高く、弁別妥当性に疑問
  - N = 80 で17の独立変数を分析する統計的検出力の問題
  - 別の方法でモデルを検証すると有意でない
- **反論**: Cole & Fredrickson (2014) は Brown et al. の再解析自体に統計的・事実的誤りがあると反論（"Errors in the Brown et al. critical reanalysis", *PNAS*)
- **その後**: Brown et al. (2016) がさらに "More Questions than Answers" を *PLOS ONE* に発表し、論争は継続

### 方法論上の一般的懸念

- マイクロアレイからRNA-seq への技術的移行の影響
- 末梢血白血球の組成比変化（cell composition）が遺伝子発現の見かけの差を生む可能性
- 多重比較補正の適切性
- 第二世代研究（より大きなサンプル、実験的デザイン）では「broadly replicated」とされるが、効果量の縮小は社会科学全般に共通する傾向

---

## 理論的含意: 「間主観性の信号が生存関連と同等の価値を持つ」ことの分子的証拠

### 本研究が支持する命題

Cole et al. (2007) の知見は、社会的つながりの欠如（=間主観的信号の欠損）がゲノムレベルの生物学的応答を引き起こすことを示す。これは以下の点で「間主観性の信号が生存関連シグナルと同等の生物学的重みを持つ」ことの直接的エビデンスとなる:

1. **遺伝子発現の大規模変化**: 209遺伝子にわたる差次的発現は、孤独が単なる心理的不快ではなく、免疫系の分子的再編成を引き起こす「生存に関わるシグナル」として生体に処理されていることを示す

2. **炎症促進/抗ウイルス低下の進化的論理**: CTRA パターンは「社会的孤立 = 物理的脅威（外傷）のリスク増大」という祖先的環境への適応と解釈される。つまり生体は「他者との関係性の有無」を「物理的危険の確率」に直接変換するシグナルとして扱っている

3. **NF-kappaB の中心性**: 炎症の主要転写因子 NF-kappaB が孤独感で活性化される事実は、社会的シグナルが最も基本的な生存関連経路（感染防御・創傷治癒）と同じ分子装置を共有していることを意味する

4. **交感神経系を介する即応性**: 社会的脅威の知覚が交感神経 → beta-アドレナリンシグナル → 遺伝子発現という高速経路を持つことは、この処理が「高次認知の産物」ではなく、「生存脅威検出システムの一部」として組み込まれていることを示す

5. **条件横断的保存性（CTRA）**: 孤独、死別、低SES、介護ストレス、人種差別など、表面的には異なる社会的逆境が同一の遺伝子発現パターンを引き起こすことは、「社会的つながりの質」が単一の生存軸上の変数として生物学的にコード化されていることを示唆する

6. **可逆性と介入応答**: 瞑想やeudaimonic行動でCTRAが逆転することは、間主観的信号の「回復」が分子レベルで検証可能であることを意味する

### 要約

> 社会的環境は遺伝子発現を変える。この変化は「感じ方」の問題ではなく、免疫系の分子的再構成という「生存戦略の切り替え」である。生体にとって「他者との関係性」は、飢餓や外傷と同じ階層の生存変数として処理されている。

---

## 参照URL

- [Cole et al. 2007 原論文 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2375027/)
- [Cole 2014 "Human Social Genomics" (PLoS Genetics)](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1004601)
- [Cole 2019 CTRA レビュー (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6779418/)
- [Slavich & Irwin 2014 Social Signal Transduction Theory (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4006295/)
- [Brown et al. 2014 批判的再解析 (PNAS)](https://www.pnas.org/content/111/35/12705)
- [Cole & Fredrickson 2014 反論 (PNAS)](https://www.pnas.org/doi/10.1073/pnas.1413316111)
- [Lee et al. 2025 ポジティブ社会関係とCTRA](https://nyaspubs.onlinelibrary.wiley.com/doi/full/10.1111/nyas.15372)
