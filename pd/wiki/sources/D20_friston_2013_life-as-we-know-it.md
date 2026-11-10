---
title: "私たちが知っている生命（Friston 2013）"
description: "Friston (2013, J R Soc Interface)。マルコフ・ブランケットを持つエルゴード的な確率動的系は、変分自由エネルギーを最小化しているかのように振る舞い、自らの構造と動態を保つように見える、という発見的証明を示した論文。128 個の部分系の『原始スープ』のシミュレーションで、細胞に似た構造が現れること、ブランケットの働きを止めると自己組織化が崩れることを示す。"
aliases: ["Life as we know it", "Life as we know it (Friston 2013)"]
tags: [source, "D20", "原典解説"]
source:
  repo: "cs"
  path: "knowledge/raw/manifest.md"
  manifest_id: "D20-S16"
compiled: "2026-11-10"
status: 暫定
review_state: 未レビュー
---

# 私たちが知っている生命（Friston 2013）

> **高校生向けのやさしい解説**
>
> 生き物とそうでないものを分けるのは何か、という問いに数学で答えようとした論文です。Friston は、内側と外側を統計的に隔てる境界（マルコフ・ブランケット）を持つ系なら、どんな系でも、自分の形を保とうとするように振る舞うと論じました。計算機の中で 128 個の小さな部品を動かすと、細胞に似た形が自然に現れ、境界の働きを止めるとその形が崩れることも示しています。

## 概要

Friston (2013) は、生命、あるいは生物の自己組織化を、境界を持つ確率的な動的系の性質として定式化した。系の状態を、外部状態・感覚状態・行動状態・内部状態に分ける。感覚状態と行動状態をあわせたものがマルコフ・ブランケットで、内部状態を外部状態から統計的に隔てる。著者は、マルコフ・ブランケットを持つエルゴード的な確率動的系では、内部状態と行動状態の流れが変分自由エネルギーを最小化しているかのように振る舞うことを、発見的証明（heuristic proof）として示す。この振る舞いは、内部状態が外部状態について確率的な推論をしているように見えること（能動的推論）にあたり、著者はこれをオートポイエーシス（Maturana と Varela）の数学的な言い直しとして位置づける。証明の原理を示すために、128 個の結合した部分系のシミュレーションを行い、内部状態をマルコフ・ブランケットが包む細胞に似た構造が現れること、内部状態の動きから外部状態の動きが予測できること、ブランケットの一部の働きを止めると自己組織化が崩れることを示す。

## 主要概念

**生命は、マルコフ・ブランケットを持つ系の避けられない性質である**

> "This paper presents a heuristic proof (and simulations of a primordial soup) suggesting that life—or biological self-organization—is an inevitable and emergent property of any (ergodic) random dynamical system that possesses a Markov blanket." (Abstract, p.1)

著者は、生命らしさの根本の条件を、特定の化学の性質ではなく、マルコフ・ブランケットがあることに置く。

**マルコフ・ブランケット**

> "A Markov blanket is a set of states that separates two other sets in a statistical sense." (p.2)

> "External states cause sensory states that influence—but are not influenced by—internal states, while internal states cause active states that influence—but are not influenced by—external states" (p.2)

ブランケットは、外部状態の影響を受ける感覚状態と、外部状態に働きかける行動状態に分かれる。この二つの条件付き独立が、内部と外部を隔てる境界の数学的な中身になる。

**自由エネルギーの最小化と能動的推論**

> "the flow of internal and active states minimizes free energy, rendering the variational density equivalent to the posterior density over external states." (p.4)

内部状態は、外部状態についての事後確率を表しているかのように見える。著者は、行動状態がこうして生物の状態のばらつき（エントロピー）に上限を置き、構造と動態を保っているように見えると論じる。著者はこの見方を、Conant と Ashby の「よい制御器はその環境のモデルである」という定理とも整合するものとして挙げる。

**シミュレーションに現れる細胞に似た構造**

> "a clear structure can be seen, where the internal subsystems are (unsurprisingly) close together and enshrouded by the Markov blanket. Interestingly, the active subsystems support the sensory subsystems that are exposed to hidden environmental states. This is reminiscent of a biological cell with a cytoskeleton that supports some sensory epithelia or receptors within its membrane." (p.7)

**ブランケットを止めると自己組織化が崩れる（oscillator death）**

> "In our setting, they are a testament to autopoiesis or self-creation—in the sense that self-organized dynamics are necessary to maintain structural or configurational integrity." (Figure 5 caption, p.10)

行動状態・感覚状態・内部状態のどれの働きを止めても、構造が崩れる。

**入れ子になったマルコフ・ブランケット**

> "the Markov blanket of an animal encloses the Markov blankets of its organs, which enclose Markov blankets of cells, which enclose Markov blankets of nuclei and so on." (p.10)

> "One might conjecture that minimum entropy Markov blankets characterize biological systems." (p.10)

後者は著者が予想として述べたもので、本論文では数値で確かめていない。

## 方法

形式の部分では、状態空間を五つの組（標本空間・外部状態・感覚状態・行動状態・内部状態）に分け、Fokker–Planck 方程式の定常解とヘルムホルツ分解から流れを導き、それが変分自由エネルギーの最小化と等しいことを示す（式 2.6–2.9）。シミュレーションでは、128 個の部分系を結合し、電気化学的な状態を Lorenz 型の力学、運動を短い距離での反発と長い距離での引力で与える。マルコフ・ブランケットは、隣接関係から作った行列の主固有ベクトルで同定する（スペクトルグラフ理論）。内部状態の動きが外部状態の動きを予測するかを正準変量分析で調べ、帰無分布との比較で有意とする（p = 0.00052）。最後に、ブランケットの一部の機能的なつながりを切って、その後の軌道を比べる。

出典ノートが挙げる限界は次のとおり。証明は著者自身が「発見的」と呼ぶもので、厳密な数学的証明ではない。著者は生物の系が局所的にしかエルゴード的でないと述べる。128 個の部分系は小さな規模の原理の例示で、Lorenz 型の力学の選択は著者自身が「やや恣意的」と書く。マルコフ・ブランケットが一つに決まるかは開いた問いとして残される。生殖や遺伝による継承は扱わない。

## 関連

- 出典ノートは、この論文を、境界を持ち自己を保つ系という自律性の形式化として読み、創造の五段階（場・波・縁・渦・束）のすべてに強い対応があると評価している。とくに、マルコフ・ブランケットを縁（境界）に、行動と知覚の循環的な因果を渦にあてている。これは出典ノートの読みで、著者の主張ではない。
- 生命らしさを別の種類の境界から形式化した論文として、[[D29_hordijk-hein-steel_2010_autocatalytic-sets-origin-of-life|自己触媒集合と生命の起源（Hordijk, Hein & Steel 2010）]] がある。

## 書誌情報

- 著者: Karl Friston（The Wellcome Trust Centre for Neuroimaging, Institute of Neurology, London）
- 年: 2013
- 出典: *Journal of The Royal Society Interface* 10: 20130475
- access_status: raw-confirmed
- **DOI**: [10.1098/rsif.2013.0475](https://doi.org/10.1098/rsif.2013.0475)
- **オープンアクセス**: [Europe PMC（PMC3730701）](https://europepmc.org/articles/PMC3730701)

## ソース参照（GitHub・検証用）

- **cs マニフェスト（該当行）**: [knowledge/raw/manifest.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/raw/manifest.md)（manifest_id: `D20-S16`）
- **cs 精読ノート**: [knowledge/source-notes/D20/D20-S16_friston-2013.md](https://github.com/uminomae/project-design-theory/blob/main/cs/knowledge/source-notes/D20/D20-S16_friston-2013.md)
- **この wiki ページ（pd）**: [wiki/sources/D20_friston_2013_life-as-we-know-it.md](https://github.com/uminomae/project-design-theory/blob/main/pd/wiki/sources/D20_friston_2013_life-as-we-know-it.md)

## 出典メモ

- 材料は cs の出典ノートだけ（2026-04-24 読解。PDF を画像で全 12 頁精読）。引用と頁は出典ノートのとおりに写した。手元に原典の PDF が無いので、この作成では引用を原典と照らし直していない。
- 出典ノートは、参考文献（pp.11-12）のうち主な理論的先行研究だけを読んでいる。62 本の参考文献の個々は読んでいない。
- 生成: 2026-11-10（wiki-compile）。
