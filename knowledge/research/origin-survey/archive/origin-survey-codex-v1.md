# 30学問領域「原点」調査 — Codex v1

Issue: #46  
Parent: #44  
作成日: 2026-03-28  
作成: Codex  
使用モデル: `GPT-5`

## 0. 前置き

このレポートは、`techo/prompts/30-domains-origin-survey-v1.md` に従った簡易調査である。各領域について「ゼロ・原点・無・空」に最も近い概念を 1 つか 2 つ選び、そこがその領域で「不足」として扱われるのか、「立ち上がりの足場」として扱われるのかを分けて整理した。

注意点は 3 つある。第一に、学問領域によっては単一の「原点」概念がなく、計測上の基準点と存在論的な無がずれる。第二に、ここでいう「原点」は本調査の背景にある仮説であり、各領域の概念と完全一致すると主張するものではない。第三に、今回は簡易調査なので、出典は各領域の代表的な入口を優先し、未精査の箇所は「未確認」と明記した。

## A. 領域別レポート

### D01 数学

- 概念: `0`、加法単位元、座標の原点、空集合の基準化。
- 扱い: 主には「足場」。数量の欠如を表すだけでなく、演算体系や座標系を成立させる基準点として使われる。
- 創造との関係: 零があることで正負・対称・極限・位置の概念が整理され、構造全体が定義可能になる。
- 方向: 形式の基準点。
- 出典: [Zero (Britannica)](https://www.britannica.com/science/zero-mathematics), [Zero (Encyclopedia of Mathematics)](https://encyclopediaofmath.org/wiki/Zero)

### D02 物理学

- 概念: 絶対零度、真空、零点エネルギー。
- 扱い: 「両方」。古典的には最低状態だが、量子的には零点でも揺らぎが残り、真空は単なる無ではない。
- 創造との関係: 場の励起や真空揺らぎは、何かが立ち上がる最小条件として理解される。
- 方向: 揺らぐ基底状態。
- 出典: [Absolute zero](https://www.britannica.com/science/absolute-zero), [Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D03 化学

- 概念: 標準生成熱 0、標準状態という参照点。
- 扱い: 主には「足場」。元素単体の標準生成熱を 0 と置くのは自然な無ではなく、反応を比較可能にする約束事である。
- 創造との関係: 反応熱・自由エネルギー差は、このゼロ参照があるから初めて系統的に比較できる。
- 方向: 反応比較の基準点。
- 出典: [Heat of formation](https://www.britannica.com/science/heat-of-formation)

### D04 生物学（進化）

- 概念: 中立進化、選択圧 0 に近い基線、適応度 0。
- 扱い: 「両方」。適応度 0 は消滅だが、中立理論では「選択が効いていない」状態が進化の重要な背景になる。
- 創造との関係: 中立変異の蓄積は、のちの共適応や機能獲得の素材になりうる。
- 方向: 選択圧ゼロの背景。
- 出典: [PubMed: neutral theory evolution](https://pubmed.ncbi.nlm.nih.gov/?term=neutral+theory+evolution)

### D05 地球科学

- 概念: 平均海水面、垂直基準面、地球計測の datum。
- 扱い: 主には「足場」。ゼロ高は地球が空であることを意味せず、地形や変動を測る参照面である。
- 創造との関係: 隆起・沈降・侵食・海面変動は、共有されたゼロ面があることで初めて差分として読める。
- 方向: 地球計測の参照面。
- 出典: [USGS search: vertical datum](https://www.usgs.gov/search?keywords=vertical+datum)

### D06 天文学・宇宙物理学

- 概念: ビッグバン初期条件、量子真空、初期揺らぎ。
- 扱い: 「両方」。初期特異点は理論の限界として現れ、真空は空無ではなく宇宙構造の母地として扱われる。
- 創造との関係: 初期の微小揺らぎが拡大されて銀河や大規模構造の種になる。
- 方向: 宇宙生成の初期条件。
- 出典: [Big Bang model](https://www.britannica.com/science/big-bang-model), [Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D07 工学・情報科学

- 概念: バイナリの 0、ゼロ点調整、初期状態、null。
- 扱い: 主には「足場」。0 は欠落記号でもあるが、計算機では表現・初期化・制御の基準値として働く。
- 創造との関係: デジタル系は 0/1 の差分から立ち上がり、工学系はゼロ調整から制御を始める。
- 方向: 実装可能性の初期条件。
- 出典: [Zero (Britannica)](https://www.britannica.com/science/zero-mathematics), [Britannica search: computer science](https://www.britannica.com/search?query=computer%20science)

### D08 神経科学

- 概念: resting state、自発活動、ベースライン発火。
- 扱い: 主には「足場」。生きた脳に完全なゼロ活動はほぼなく、安静時活動こそが神経機能の土台と見なされる。
- 創造との関係: 自発活動は結合性の維持、予測、再活性化の下地になり、課題活動の準備面をなす。
- 方向: 機能生成の自発基底。
- 出典: [PubMed: resting-state spontaneous brain activity review](https://pubmed.ncbi.nlm.nih.gov/?term=resting-state+spontaneous+brain+activity+review)

### D09 生命科学（代謝・細胞）

- 概念: quiescence、休止相、ground state pluripotency。
- 扱い: 「両方」。活動停止に見えるが、細胞レベルでは保存・修復・再活性化のための準備状態でもある。
- 創造との関係: 幹細胞や組織は休止状態から再び分化・増殖へ移り、再生の源になる。
- 方向: 再生準備の休止相。
- 出典: [PubMed: cellular quiescence review](https://pubmed.ncbi.nlm.nih.gov/?term=cellular+quiescence+review), [Homeostasis](https://www.britannica.com/science/homeostasis)

### D10 臨床医学・免疫学

- 概念: 免疫恒常性、免疫寛容、炎症のベースライン。
- 扱い: 「両方」。炎症ゼロそのものが目標ではなく、過剰反応でも無反応でもない恒常点が重要になる。
- 創造との関係: 治癒は「免疫を消す」ことではなく、損傷修復と恒常性回復を再編成することとして起こる。
- 方向: 過不足を避ける恒常点。
- 出典: [Homeostasis](https://www.britannica.com/science/homeostasis), [PubMed: immune homeostasis tolerance review](https://pubmed.ncbi.nlm.nih.gov/?term=immune+homeostasis+tolerance+review)

### D11 薬学

- 概念: placebo、zero dose、対照群。
- 扱い: 主には「足場」。有効成分が 0 でも効果評価の基準は成立し、しかも placebo/nocebo によって「無投与」も無影響ではない。
- 創造との関係: 薬効はゼロ投与との差として現れ、文脈効果も治療反応の一部として立ち上がる。
- 方向: 効果判定の対照点。
- 出典: [Placebo](https://www.britannica.com/science/placebo), [PubMed: placebo nocebo review](https://pubmed.ncbi.nlm.nih.gov/?term=placebo+nocebo+review)

### D12 農学・生態学

- 概念: primary succession、裸地、休閑、種子バンク。
- 扱い: 「両方」。裸地は生態学的には欠損だが、同時に生態系が組み上がり直す出発面でもある。
- 創造との関係: 先駆種が土壌と環境を変え、次の生物群集が立ち上がる。
- 方向: 生態再生の出発面。
- 出典: [Primary succession](https://www.britannica.com/science/primary-succession)

### D13 哲学

- 概念: nothingness、無、非存在、空。
- 扱い: 「両方」。無は否定や欠如としても論じられるが、存在が際立つ条件や自由の地平としても扱われる。
- 創造との関係: 実存主義では、根拠のなさや無が選択・意味形成を迫る条件になる。
- 方向: 存在を際立たせる否定地平。
- 出典: [Nothingness](https://www.britannica.com/topic/nothingness), [Existentialism (SEP)](https://plato.stanford.edu/entries/existentialism/)

### D14 心理学

- 概念: 欲求不均衡、恒常性のずれ、緊張低減。
- 扱い: 「両方」。欠乏は不快として扱われるが、心理学ではそのズレ自体が行動の起動条件でもある。
- 創造との関係: 欲求や不均衡が探索・学習・適応行動を駆動する。
- 方向: 行動駆動の欠如点。
- 出典: [Homeostasis](https://www.britannica.com/science/homeostasis), [Britannica search: motivation psychology](https://www.britannica.com/search?query=motivation%20psychology)

### D15 美学

- 概念: negative space、余白、非充満の美。
- 扱い: 主には「足場」。美学では「ない部分」は不足ではなく、知覚と感受を開く構成要素として働く。
- 創造との関係: 余白があることで形・気配・視線・想像が立ち上がる。
- 方向: 感受を開く余白。
- 出典: [Negative space](https://www.britannica.com/art/negative-space)

### D16 歴史学

- 概念: 記録の始点、史料の沈黙、前史との境界。
- 扱い: 主には「足場」。歴史学に絶対的なゼロはなく、むしろ「どこから記録可能か」という閾が問題になる。
- 創造との関係: 歴史叙述は、断絶や史料の欠落を埋めるのではなく、その境界を意識しながら構成される。
- 方向: 記録可能性の閾。
- 出典: [Historiography](https://www.britannica.com/topic/historiography)

### D17 言語学

- 概念: zero morpheme、empty category、無標。
- 扱い: 主には「足場」。音声的に現れない要素でも、文法機能や意味差を担うと考えられる。
- 創造との関係: 「言わないこと」が統語構造や屈折の差異を成立させる。
- 方向: 意味差を担う無標。
- 出典: [Morpheme](https://www.britannica.com/topic/morpheme)  
  直接に zero morpheme を立項する辞典 URL は今回未確認。

### D18 社会学

- 概念: anomie、規範の空白、社会的統合の低下。
- 扱い: 「両方」。主には病理的欠損だが、既存規範の空白が新しい規範形成や逸脱的創発の場にもなる。
- 創造との関係: 逸脱・再編・制度変化は、しばしばこの規範の裂け目から出てくる。
- 方向: 社会秩序の裂け目。
- 出典: [Anomie](https://www.britannica.com/topic/anomie)

### D19 文学・文芸学

- 概念: negative capability、沈黙、余白、曖昧さ。
- 扱い: 主には「足場」。文学では説明の欠如や不確定性は失敗ではなく、読者参加を生む条件である。
- 創造との関係: 書き尽くさないことによって、意味生成がテキストと読者のあいだに立ち上がる。
- 方向: 意味生成の余白。
- 出典: [Negative capability](https://www.britannica.com/art/negative-capability)

### D20 法学・政治学

- 概念: state of nature、法以前の状態、無効（nullity）。
- 扱い: 「両方」。国家や法の不在は危険として描かれる一方、制度成立の原点としても構想される。
- 創造との関係: 契約・主権・法秩序は、この「まだ制度化されていない場」から正当化される。
- 方向: 制度成立前の基底。
- 出典: [State of nature](https://www.britannica.com/topic/state-of-nature-political-theory)

### D21 経済学（理論）

- 概念: zero profit condition、均衡基準、期待収益 0 の参照。
- 扱い: 主には「足場」。理論経済学のゼロは多くの場合「欠損」ではなく、均衡や裁定消失のベンチマークである。
- 創造との関係: 利潤や成長は、このゼロ利潤基準からの逸脱として理解され、革新はそこに楔を打つ。
- 方向: 均衡の基準点。
- 出典: [Britannica search: zero profit](https://www.britannica.com/search?query=zero%20profit), [Britannica search: economic equilibrium](https://www.britannica.com/search?query=economic%20equilibrium)

### D22 経営学

- 概念: zero-based budgeting、既存前提をいったん 0 に戻す再設計。
- 扱い: 「両方」。ゼロベースは既得の正当化を剥ぐ厳しさを持つが、同時に組織を作り直すための始点でもある。
- 創造との関係: 既存配分や惰性を一度解除し、価値創出の論理を再立ち上げる局面として働く。
- 方向: 再設計の初期条件。
- 出典: [Britannica search: zero-based budgeting](https://www.britannica.com/search?query=zero-based%20budgeting), [Britannica search: entrepreneurship](https://www.britannica.com/search?query=entrepreneurship)  
  「ゼロイチ」そのものを経営学標準概念として置くのは未確認。

### D23 発達心理学・教育学

- 概念: 認知的不均衡、初心者状態、schema の未整合。
- 扱い: 主には「足場」。できなさや未熟さは単なる欠損ではなく、発達と学習を起動する起点になる。
- 創造との関係: 同化と調節は不均衡から始まり、より高次の均衡へ移ることで発達が進む。
- 方向: 発達を駆動する不均衡。
- 出典: [Jean Piaget](https://www.britannica.com/biography/Jean-Piaget), [Tabula rasa](https://www.britannica.com/topic/tabula-rasa)

### D24 宗教学・神秘主義

- 概念: 空、emptiness、apophatic unknowing、自己の空洞化。
- 扱い: 主には「足場」。多くの宗教的伝統では空は虚無ではなく、執着を離れて根源へ触れる通路とされる。
- 創造との関係: 自我や像の剥奪が、覚り・合一・転生的な再編の条件になる。
- 方向: 超越への空性。
- 出典: [Britannica search: emptiness religion](https://www.britannica.com/search?query=emptiness%20religion), [Britannica search: apophatic theology](https://www.britannica.com/search?query=apophatic%20theology)

### D25 人類学・民族学

- 概念: liminality、通過儀礼の「あいだ」。
- 扱い: 「両方」。旧い身分を失った不安定状態だが、新しい社会的人格が作られるための必須の閾でもある。
- 創造との関係: 分離・移行・再統合の真ん中で、共同体的に新しい存在が作られる。
- 方向: 身分変容の閾。
- 出典: [Rite of passage](https://www.britannica.com/topic/rite-of-passage)

### D26 音楽学

- 概念: rest、silence、tacet。
- 扱い: 主には「足場」。音がない区間は欠落ではなく、拍・緊張・呼吸を組織する要素である。
- 創造との関係: 休符や沈黙があることで、音型・フレーズ・聴取の期待が立ち上がる。
- 方向: 音を成立させる間。
- 出典: [Musical notation](https://www.britannica.com/art/musical-notation), [Britannica search: silence music](https://www.britannica.com/search?query=silence%20music)

### D27 建築・空間デザイン

- 概念: void、space、空隙、余白。
- 扱い: 主には「足場」。建築は物体を作るだけでなく、囲われた「空」を設計する学でもある。
- 創造との関係: 人の動線、滞在、関係、光の流れは、空隙の与え方から生まれる。
- 方向: 居住を生む空隙。
- 出典: [Architecture](https://www.britannica.com/topic/architecture), [Negative space](https://www.britannica.com/art/negative-space)

### D28 舞台芸術

- 概念: empty space、空舞台、最小の上演空間。
- 扱い: 主には「足場」。舞台装置の欠如は貧しさではなく、俳優と観客の関係を露出させる条件になりうる。
- 創造との関係: 上演世界は「何もない場所」に身体と視線が置かれた瞬間に立ち上がる。
- 方向: 上演関係の起点。
- 出典: [Theater building](https://www.britannica.com/art/theater-building), [Britannica search: Peter Brook empty space](https://www.britannica.com/search?query=Peter%20Brook%20empty%20space)

### D29 複雑系科学

- 概念: criticality、edge of chaos、秩序と無秩序の境界。
- 扱い: 主には「足場」。完全秩序でも完全ランダムでもない境界域が、複雑な振る舞いの生起点として重視される。
- 創造との関係: 適応、情報処理、相転移的創発は、この臨界域で最も豊かになると考えられる。
- 方向: 臨界境界。
- 出典: [Chaos theory](https://www.britannica.com/science/chaos-theory), [PubMed: criticality complex systems review](https://pubmed.ncbi.nlm.nih.gov/?term=criticality+complex+systems+review)

### D30 伝統知・技芸

- 概念: 見習いの未形成状態、型に入る前の空き、徒弟制的受容。
- 扱い: 「両方」。初心は技能の欠如だが、伝統知ではその空きがあるからこそ型・身体感覚・勘所が入る。
- 創造との関係: 反復・模倣・矯正を通じて、無形の技が身体化されていく。
- 方向: 伝承受容の素地。
- 出典: [Apprenticeship](https://www.britannica.com/topic/apprenticeship), [Britannica search: beginner's mind](https://www.britannica.com/search?query=beginner%27s%20mind)  
  伝統知一般の「原点」概念としては暫定整理。

## B. 横断比較表

| 領域 | ゼロの概念 | 扱い | 創造との関係 | 方向 |
|------|-----------|------|-------------|------|
| 数学 | 0・原点・空集合 | 足場 | 構造全体の定義を可能にする | 形式の基準点 |
| 物理学 | 真空・零点エネルギー | 両方 | 揺らぎから励起が生まれる | 揺らぐ基底状態 |
| 化学 | 標準生成熱 0 | 足場 | 反応差分を比較可能にする | 反応比較の基準点 |
| 生物学（進化） | 中立進化・適応度 0 | 両方 | 中立変異が素材になる | 選択圧ゼロの背景 |
| 地球科学 | 海水面 datum | 足場 | 地形・変動を差分化する | 地球計測の参照面 |
| 天文学・宇宙物理学 | 初期条件・量子真空 | 両方 | 宇宙構造の種が生まれる | 宇宙生成の初期条件 |
| 工学・情報科学 | binary 0・初期状態 | 足場 | 計算と制御が起動する | 実装可能性の初期条件 |
| 神経科学 | resting state | 足場 | 課題活動の土台になる | 機能生成の自発基底 |
| 生命科学（代謝・細胞） | quiescence | 両方 | 再生・分化に戻る準備になる | 再生準備の休止相 |
| 臨床医学・免疫学 | 免疫恒常性 | 両方 | 治癒は恒常点の回復として起こる | 過不足を避ける恒常点 |
| 薬学 | placebo・zero dose | 足場 | 効果が差分として見える | 効果判定の対照点 |
| 農学・生態学 | primary succession | 両方 | 裸地から群集が組み上がる | 生態再生の出発面 |
| 哲学 | nothingness・無 | 両方 | 存在と自由が際立つ | 否定地平 |
| 心理学 | 欲求不均衡 | 両方 | 行動・探索を駆動する | 行動駆動の欠如点 |
| 美学 | negative space | 足場 | 感受と想像を開く | 感受を開く余白 |
| 歴史学 | 記録の始点・史料の沈黙 | 足場 | 叙述の境界条件になる | 記録可能性の閾 |
| 言語学 | zero morpheme・empty category | 足場 | 無音のまま意味差を担う | 意味差を担う無標 |
| 社会学 | anomie | 両方 | 逸脱と再編の契機になる | 社会秩序の裂け目 |
| 文学・文芸学 | negative capability | 足場 | 読者との共同生成を招く | 意味生成の余白 |
| 法学・政治学 | state of nature | 両方 | 制度成立の原点を与える | 制度成立前の基底 |
| 経済学（理論） | zero profit condition | 足場 | 利潤や革新を逸脱として測る | 均衡の基準点 |
| 経営学 | zero-based budgeting | 両方 | 組織を作り直す始点になる | 再設計の初期条件 |
| 発達心理学・教育学 | 認知的不均衡 | 足場 | 学習と発達を起動する | 発達を駆動する不均衡 |
| 宗教学・神秘主義 | 空・unknowing | 足場 | 覚り・合一への通路になる | 超越への空性 |
| 人類学・民族学 | liminality | 両方 | 新しい身分が生成される | 身分変容の閾 |
| 音楽学 | rest・silence | 足場 | 音の意味と緊張を作る | 音を成立させる間 |
| 建築・空間デザイン | void・space | 足場 | 居住と関係の場を作る | 居住を生む空隙 |
| 舞台芸術 | empty space | 足場 | 上演世界が立ち上がる | 上演関係の起点 |
| 複雑系科学 | criticality | 足場 | 創発が最も豊かになる | 臨界境界 |
| 伝統知・技芸 | 見習いの空き | 両方 | 技が身体に入る余地になる | 伝承受容の素地 |

## C. 原点の共通構造についての仮説

### 1. 見えるパターン

- 第一のパターンは、「ゼロ」が欠如そのものではなく、差分を立ち上げる基準点として機能していることだ。数学の原点、化学の標準状態、地球科学の datum、経済学の zero profit condition はすべてこの型に入る。
- 第二のパターンは、「ゼロ」が静止や停止ではなく、見えにくい生成可能性を抱えた基底として現れることだ。物理学の真空、神経科学の resting state、細胞生物学の quiescence、免疫学の homeostasis は、表面上は静かな状態だが、そこから活動が再び立ち上がる。
- 第三のパターンは、「ゼロ」が既存のアイデンティティや秩序が剥がれた閾として働くことだ。法政治の state of nature、人類学の liminality、社会学の anomie、舞台芸術の empty space は、旧い秩序が外れた場所として出てくる。
- 第四のパターンは、「ゼロ」が余白・沈黙・不確定性として、受け手側の参与を開くことだ。美学、文学、音楽、建築では、埋まっていないことそれ自体が経験を生成する条件になる。

### 2. 交点として見えるもの

- 30 領域を並べると、「原点」は単なる不足ではなく、`測定可能性`、`再活性化可能性`、`秩序再編可能性`、`参与可能性` を開く位置として現れている。
- つまり原点は「何もない点」よりも、「何かがまだ固定されていない点」として共通しているように見える。
- この意味で本調査の背景にある「有るを支える足場」という見立ては、多くの領域で完全一致ではないにせよ、少なくとも複数の独立な学問語彙から支持線を引ける。

### 3. 残る問い

- 原点が「基準点」なのか「生成場」なのかは、領域ごとにかなり違う。数学・化学・経済学では前者が強く、宗教・芸術・複雑系では後者が強い。
- 「不足」と「足場」が同時に現れる領域では、両者を分ける条件が何かをさらに精査する必要がある。進化、免疫、社会、法政治、人類学がその代表である。
- 歴史学、伝統知・技芸、経営学のように、標準化された「ゼロ概念」が弱い領域では、今回の対応づけが操作的すぎる可能性がある。ここは次段で一次資料を増やして再検証が必要。

## D. 暫定メモ

- 本調査で最も強く見えたのは、「原点は value の欠如ではなく、form がまだ固定されていない場だ」というパターンである。
- 逆に、「ゼロ=悪い状態」としか見なさない領域は少なく、多くの領域で不足概念と生成概念が二重化していた。
- 後続タスクでは、各領域について一次資料を 1-2 本ずつ確定し、`ゼロが足場として扱われる局面` と `ゼロが病理として扱われる局面` を明示的に切り分けるとよい。
