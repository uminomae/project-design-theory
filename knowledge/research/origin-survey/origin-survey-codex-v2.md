# 30学問領域「原点」調査 — Codex v2

Issue: #46  
Parent: #44  
作成日: 2026-03-29  
作成: Codex  
使用モデル: `GPT-5`

## 0. 前置き

このレポートは、`techo/prompts/30-domains-origin-survey-v2.md` と `techo/prompts/origin-survey-v2-agent-team.md` に基づく調査設計用調査2である。Stage 1 では 30 領域について「ゼロ・原点・無・空・欠如」に相当する概念がどう扱われるかを事実ベースで収集し、Stage 2 ではその結果を仮説と突き合わせる。

Stage 1 は 6 グループの並行調査を統合し、未着の一部グループは既存アーカイブと直接URL付き出典で補完した。未確認の箇所はそのまま `未確認` と記す。

## A. Stage 1 領域別レポート

### D01 数学

**概念**: ゼロ、空集合

**概念1: ゼロ（0）**
- 否定的な扱い: 量がないこと、欠如の表現として扱われる。加えて、`0` を含む演算でも `0` で割ることは定義されない。
- 肯定的な扱い: 加法単位元、位取り記数法の桁の保持、数直線上の基準点として機能する。
- 両者の関係: 同じ記号でも、「欠如の表現」と「構造を成立させる基準値」という役割が文脈で分かれる。
- 出典: [Britannica: Zero (mathematics)](https://www.britannica.com/science/zero-mathematics), [Encyclopedia of Mathematics: Zero](https://encyclopediaofmath.org/wiki/Zero)

**概念2: 空集合**
- 否定的な扱い: 要素を持たない集合として、内容の欠如がそのまま定義である。
- 肯定的な扱い: 集合論では基礎的対象で、空集合から集合の階層が組み立てられる。
- 両者の関係: 「何もない」こと自体が、集合論の出発点として使われる。
- 出典: [Encyclopedia of Mathematics: Empty set](https://encyclopediaofmath.org/wiki/Empty_set)

### D02 物理学

**概念**: 絶対零度、零点エネルギー

**概念1: 絶対零度**
- 否定的な扱い: これ以上下がらない温度の下限として扱われる。完全な冷却の終端である。
- 肯定的な扱い: ケルビン温度目盛の基準点であり、熱力学の絶対尺度を成立させる。
- 両者の関係: 同じ下限が、限界であると同時に基準点でもある。
- 出典: [Britannica: Absolute zero](https://www.britannica.com/science/absolute-zero)

**概念2: 零点エネルギー**
- 否定的な扱い: 古典的な「空」は完全な無ではない、と扱われる。
- 肯定的な扱い: 量子系の基底状態でもエネルギーが残り、真空揺らぎがあるとされる。
- 両者の関係: 古典的な空虚さを、量子的な実体をもつ状態として再記述している。
- 出典: [Britannica: Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D03 化学

**概念**: 標準生成エンタルピーのゼロ基準

**概念1: 標準生成エンタルピーのゼロ基準**
- 否定的な扱い: ゼロは物理的な「無」ではなく、慣習的に置かれた参照点である。絶対エンタルピーは直接測れない。
- 肯定的な扱い: 元素の標準状態に対して生成エンタルピーを 0 と定義することで、反応熱の比較が可能になる。
- 両者の関係: この分野では、ゼロは「欠如」よりも「比較のための基準」として使われる。
- 出典: [Britannica: Heat of formation](https://www.britannica.com/science/heat-of-formation)

### D04 生物学（進化）

**概念**: 絶滅、ニッチ空白、適応放散

**概念1: 絶滅 / ニッチ空白**
- 否定的な扱い: 絶滅は種の消失そのものであり、生物多様性の減少、系統の途絶、環境変化への失敗として扱われる。
- 肯定的な扱い: 大規模絶滅や局所的消失の後に生じるニッチ空白は、適応放散や急速な分化の条件として扱われる。
- 両者の関係: 同じ出来事が、消失としては破壊的でありつつ、生態学的機会の開口としては生成的にも働く。
- 出典: [Britannica: Extinction](https://www.britannica.com/science/extinction-biology), [Britannica: Adaptive radiation](https://www.britannica.com/science/adaptive-radiation)

### D05 地球科学

**概念**: 垂直データム、平均海面

**概念1: 垂直データム / 平均海面**
- 否定的な扱い: データムがないと標高は絶対値にならず、測量・地図・海面高が互いに比較しにくくなる。
- 肯定的な扱い: 標高や水準をそろえる共通の基準面として機能する。
- 両者の関係: 「ゼロ高度」は自然にあるものではなく、選ばれた参照面である。
- 出典: [NOAA: Datum facts](https://geodesy.noaa.gov/INFO/facts/datum.shtml), [NOAA Ocean Service: Datum](https://oceanservice.noaa.gov/facts/datum.html)

### D06 天文学・宇宙物理学

**概念**: ビッグバンの初期状態、零点エネルギー、真空ゆらぎ

**概念1: ビッグバンの初期状態 / 特異点**
- 否定的な扱い: 特異点は理論の破綻点・限界として現れ、初期時刻の先は未確定である。
- 肯定的な扱い: 高温高密度の初期宇宙として、宇宙膨張の出発点を与える。
- 両者の関係: 同じ「始まり」が、理論の境界でもあり、宇宙史の起点でもある。
- 出典: [Britannica: Big Bang model](https://www.britannica.com/science/big-bang-model)

**概念2: 零点エネルギー / 真空の量子ゆらぎ**
- 否定的な扱い: 空間は古典的な意味での「完全な無」ではない。
- 肯定的な扱い: 真空にも零点エネルギーや揺らぎがあるとされ、宇宙論ではそれが重要な物理量として扱われる。
- 両者の関係: 空虚は「何もない状態」ではなく、物理的な基底状態として理解される。
- 出典: [Britannica: Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D07 工学・情報科学

**概念**: binary 0、off state

**概念1: binary 0 / off state**
- 否定的な扱い: `0` は off、停止、信号なしの側を担い、内容の欠如や偽値の側として扱われる。
- 肯定的な扱い: `0/1` の区別自体がデジタル計算と符号化の基盤になる。
- 両者の関係: 「何もない側」の記号が、他方の `1` と対になって体系全体を成立させる。
- 出典: [Britannica: Binary code](https://www.britannica.com/technology/binary-code), [Britannica: Zero (mathematics)](https://www.britannica.com/science/zero-mathematics)

### D08 神経科学

**概念**: resting potential

**概念1: resting potential**
- 否定的な扱い: 静止電位からの逸脱は脱分極や過分極として扱われ、維持できない場合は興奮性や信号伝達の破綻につながる。
- 肯定的な扱い: 静止電位は神経細胞の基準面であり、活動電位と情報伝達を可能にする前提条件として働く。
- 両者の関係: 「何も起きていない電位」は受動的空白ではなく、そこからの偏差によって初めて信号が成立する。
- 出典: [Britannica: Resting potential](https://www.britannica.com/science/resting-potential), [Britannica: Bioelectricity](https://www.britannica.com/science/bioelectricity)

### D09 生命科学（代謝・細胞）

**概念**: quiescence、autophagy

**概念1: quiescence**
- 否定的な扱い: 細胞周期に入らない休止状態は、増殖停止や機能低下に見えうる。病理的には休止制御の破綻も問題になる。
- 肯定的な扱い: quiescence は可逆的な休止状態として、幹細胞保存、組織維持、損傷後の再活性化の前提になる。
- 両者の関係: 停止と保存が同居する。増えないことが、そのまま長期維持と再生可能性を支える。
- 出典: [Mechanisms, Hallmarks, and Implications of Stem Cell Quiescence](https://pmc.ncbi.nlm.nih.gov/articles/PMC6565921/)

**概念2: autophagy**
- 否定的な扱い: 細胞成分の自己分解として、失われるもの、分解されるものの側面をもつ。
- 肯定的な扱い: 異常成分の除去、再利用、ストレス下でのエネルギー均衡維持に必須のハウスキーピング機構として扱われる。
- 両者の関係: 分解が破壊ではなく維持と更新の条件になる。
- 出典: [Britannica: Autophagy](https://www.britannica.com/science/autophagocytosis)

### D10 臨床医学・免疫学

**概念**: peripheral immune tolerance、homeostasis

**概念1: peripheral immune tolerance**
- 否定的な扱い: 免疫が自己を攻撃しないよう抑える仕組みであり、その破綻は自己免疫の危険として扱われる。逆に過度な不応答も問題になりうる。
- 肯定的な扱い: 成熟した免疫細胞が自己組織を攻撃しないよう保つ境界条件として働き、免疫系の恒常性を支える。
- 両者の関係: 反応しないことは単なる欠如ではなく、防御と自己保護の両立を可能にする制御である。
- 出典: [Britannica: Peripheral immune tolerance](https://www.britannica.com/topic/peripheral-immune-tolerance), [Britannica: Homeostasis](https://www.britannica.com/science/homeostasis)

### D11 薬学

**概念**: placebo

**概念1: placebo**
- 否定的な扱い: 薬理活性を持たない inert drug として、成分の欠如や「偽薬」の側面をもつ。
- 肯定的な扱い: 薬効判定の対照基準になり、placebo effect という実際の反応を引き出す場合もある。
- 両者の関係: 「成分がないこと」が、そのまま比較の基準と心身反応の検出装置になる。
- 出典: [Britannica: Placebo](https://www.britannica.com/science/placebo)

### D12 農学・生態学

**概念**: primary succession、bare ground

**概念1: primary succession / bare ground**
- 否定的な扱い: 土壌も生物群集もない barren, lifeless habitat として扱われる。
- 肯定的な扱い: 先駆種が土壌を作り、生態系の複雑化を始める出発面として扱われる。
- 両者の関係: 生の欠如が、そのまま群集形成の始点になる。
- 出典: [Britannica: Primary succession](https://www.britannica.com/science/primary-succession), [Britannica: Ecological succession](https://www.britannica.com/science/ecological-succession)

### D13 哲学

**概念**: パルメニデスの非存在、ハイデガーの `Nichts`、サルトルの `néant`、仏教哲学の `空`

**概念1: パルメニデスの「非存在 / ないもの」**
- 否定的な扱い: 「ないもの」は思考も発話もできないものとして排除される。存在しないものを語ること自体が禁じられる。
- 肯定的な扱い: 主要な肯定的扱いは見つからなかった。
- 両者の関係: ほぼ否定一色。後代の「無」論の出発点という位置づけはあるが、パルメニデス自身は非存在を認めない。
- 出典: [Stanford Encyclopedia of Philosophy: Parmenides](https://plato.stanford.edu/entries/parmenides/)

**概念2: ハイデガーの `Nichts`**
- 否定的な扱い: 不安や無化、存在者の崩れとして現れる。ふつうの意味では「何もない」としか言えない経験として扱われる。
- 肯定的な扱い: その「無」は、存在者を際立たせ、否定や区別、開示を可能にする契機として扱われる。
- 両者の関係: 同一概念の両義性。否定の経験が、そのまま開示条件にもなる。
- 出典: [Stanford Encyclopedia of Philosophy: Nothingness](https://plato.stanford.edu/entries/nothingness/)

**概念3: サルトルの `néant`**
- 否定的な扱い: 欠如、裂け目、空白、不安の源として語られる。
- 肯定的な扱い: 意識は否定する力を持ち、その否定性が自由や自己超越の条件になる。
- 両者の関係: 「欠如」と「自由」が同じ構造に結びつく。無は単なる不足ではなく、意識の働きそのものでもある。
- 出典: [Stanford Encyclopedia of Philosophy: Sartre](https://plato.stanford.edu/entries/sartre/)

**概念4: 仏教哲学の `空` / `śūnyatā`**
- 否定的な扱い: 自性や固定実体の否定として読まれる。誤読すると虚無論に見える。
- 肯定的な扱い: 依存的生起、執着からの解放、認識の転換を支える概念として扱われる。
- 両者の関係: 否定表現と解放機能が結びつく。ここは「無い」ことの主張ではなく、実体視を外す働きが中心である。
- 出典: `SEP` 系の直接記事URLは今回未確認。`Madhyamaka` / `emptiness` の直接記事追加確認が必要。

### D14 心理学

**概念**: drive / need、self-actualization

**概念1: drive / need**
- 否定的な扱い: `drive` は、食欲・渇きのような生理的緊張、欠乏、アンバランスに根ざした「満たされるべき状態」として扱われる。`need` も deprived state として区別されうる。
- 肯定的な扱い: 同じ概念は、行動を起動し学習を説明する動因としても扱われる。`drive-reduction theory` では、drive の低減が学習や反応強化の中心になる。
- 両者の関係: 連続的・順序的。欠乏や緊張が行動を生み、その解消が満足や次の段階につながる。
- 出典: [Britannica: drive](https://www.britannica.com/topic/drive), [Britannica: drive-reduction theory](https://www.britannica.com/science/drive-reduction-theory)

**概念2: self-actualization**
- 否定的な扱い: 下位の基本的欲求が満たされない限り、出現しにくい上位概念として扱われる。
- 肯定的な扱い: 個人の潜在能力を十分に発揮する到達点として扱われる。
- 両者の関係: 階層的。欠乏段階の充足の先に、自己実現が位置づけられる。
- 出典: [Britannica: self-actualization](https://www.britannica.com/science/self-actualization), [Britannica: humanistic psychology](https://www.britannica.com/science/humanistic-psychology)

### D15 美学

**概念**: negative space、empty space / silence / absence

**概念1: negative space**
- 否定的な扱い: 形そのものではない「空き」「余白」として、図の外側・間の領域として扱われる。
- 肯定的な扱い: その余白は、正のイメージを強める構成要素として扱われる。絵画や造形では、空白が作意を支える。
- 両者の関係: 同一の構図内での figure/ground 関係。空白は単なる欠如ではなく、構成上の要素として再評価される。
- 出典: [Britannica: negative space](https://www.britannica.com/art/negative-space)

**概念2: empty space / silence / absence**
- 否定的な扱い: 空白や沈黙を `absence experience` とみなす立場がある一方、論文はそれに批判的で、空白や沈黙は必ずしも欠如経験ではないと論じる。
- 肯定的な扱い: 空白や沈黙は知覚の対象として論じられ、周囲の物体や場の知覚に重要な役割を持つとされる。
- 両者の関係: 研究上の対立が残る。空白・沈黙を「欠如」とみるか、「知覚可能な対象」とみるかで分かれる。
- 出典: [Cambridge: Empty Space, Silence, and Absence](https://www.cambridge.org/core/journals/canadian-journal-of-philosophy/article/empty-space-silence-and-absence/96428326CEFC5BD24ED0386C0EB96DED)

### D16 歴史学

**概念**: 史料の沈黙、アーカイブの欠落

**概念1: 史料の沈黙 / アーカイブの欠落**
- 否定的な扱い: 記録が残らない、残っていても偏るため、過去の復元を難しくする欠如として扱われる。
- 肯定的な扱い: 史料批判や非典型資料、オーラルヒストリーなどで、その「沈黙」自体を手がかりに再構成する対象になる。
- 両者の関係: 同じ欠落が、方法論上は障害にも証拠にもなる。
- 出典: [Britannica: Historiography - Methodology of historiography](https://www.britannica.com/topic/historiography/Methodology-of-historiography)
- 補足: 個別の `archival silence` 専用文献は今回は直接URLを確定できず未確認。

### D17 言語学

**概念**: zero morpheme / zero marking

**概念1: zero morpheme / zero marking**
- 否定的な扱い: `zero morpheme` は、明示的な音形を持たない「仮説的」な形態統語装置として扱われ、論争的な null constituent の一種だとされる。
- 肯定的な扱い: `zero marking` は、顕在的な語尾がないこと自体を体系的な標識として捉える分析であり、形態パラダイム内の意味差・文法差を説明する手段として使われる。
- 両者の関係: 理論的立場の対立。ゼロを「実在する文法装置」と見るか、「分析上の便法」と見るかで分かれる。
- 出典: [Frontiers: Inflectional zero morphology – Linguistic myth or neurocognitive reality?](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.1015435/full), [JLM: Zero marking in inflection](https://jlm.ipipan.waw.pl/index.php/JLM/article/view/361), [Toronto TWPL: Properties of particle “omission” revisited](https://twpl.library.utoronto.ca/index.php/twpl/article/view/6178)

### D18 社会学

**概念**: anomie / normlessness

**概念1: anomie / normlessness**
- 否定的な扱い: デュルケム以来、規範の弱体化・不安定化・目的喪失として扱われる。
- 肯定的な扱い: 主要には否定語だが、後続の理論では規範の空白が逸脱・適応・変化の説明条件として使われる。
- 両者の関係: 否定的評価が基本で、分析概念としては社会変動の診断に転用される。
- 出典: [Britannica: Anomie](https://www.britannica.com/topic/anomie), [Britannica: Deviance - Sociological perspectives](https://www.britannica.com/topic/deviance/Sociological-perspectives)

### D19 文学・文芸学

**概念**: negative capability、省略、沈黙

**概念1: negative capability**
- 否定的な扱い: 確定的な答え、説明、整理を保留する態度として読める。批評的には曖昧さや非論証性として見られうる。
- 肯定的な扱い: 不確実性・神秘・疑いの中にとどまる創作能力として高く評価される。
- 両者の関係: 名前は `negative` だが、文学的価値は明確に肯定側にある。否定は欠陥ではなく、感受の条件として再評価される。
- 出典: [Britannica: negative capability](https://www.britannica.com/art/negative-capability)

**概念2: 省略 / ellipsis / omission**
- 否定的な扱い: 言葉が欠けている、語られていない、空白があるという意味で扱われる。
- 肯定的な扱い: 省略が含意、余韻、リズム、読者参加を生む技法として働く。
- 両者の関係: 欠落がそのまま効果になる。ここでは「ないこと」が意味生成の装置になる。
- 出典: `ellipsis` / `omission` の直接項目は未確認。

**概念3: 沈黙 / silence**
- 否定的な扱い: 言い切れなさ、途切れ、沈黙、語りの停止として扱われる。
- 肯定的な扱い: 余白、暗示、読者の補完、強いドラマ効果として働く。
- 両者の関係: 沈黙は単なる欠如ではなく、文体的な力を持つ。詩や散文で特に重要である。
- 出典: 文学理論としての direct article は未確認。

### D20 法学・政治学

**概念**: state of nature、nullity / void

**概念1: state of nature**
- 否定的な扱い: ホッブズ的には、共通権力がないため不安・暴力・戦争状態として描かれる。
- 肯定的な扱い: 社会契約論では、国家や法を考えるための仮説的な基底点として使われる。
- 両者の関係: 同じ前政治的条件が、秩序の欠如としても、制度正当化の基準点としても機能する。
- 出典: [Britannica: State of nature](https://www.britannica.com/topic/state-of-nature-political-theory)

**概念2: nullity / void**
- 否定的な扱い: 法的効果が最初からない、という「無効」の扱いになる。
- 肯定的な扱い: 取引・契約・処分の有効性を切り分け、無効を宣言するための法技術として働く。
- 両者の関係: 法秩序の境界を引くための概念で、欠如そのものを制度的に利用する。
- 出典: 直接URLは今回は未確認。

### D21 経済学（理論）

**概念**: zero economic profit / zero-profit condition

**概念1: zero economic profit / zero-profit condition**
- 否定的な扱い: 企業の経済利潤が 0 に近づくことは、超過利潤が消えた状態として扱われる。
- 肯定的な扱い: 完全競争の長期均衡や、参入・退出が働いた後のベンチマークとして使われる。
- 両者の関係: 短期の損益と、理論上の長期均衡が区別される。ゼロ利潤は「失敗」でもありうるが、「均衡」でもある。
- 出典: [OpenStax: Perfect Competition and Why It Matters](https://openstax.org/books/principles-economics-3e/pages/8-1-perfect-competition-and-why-it-matters)

### D22 経営学

**概念**: zero-based budgeting

**概念1: zero-based budgeting**
- 否定的な扱い: 既存予算を毎回ゼロから正当化するため、工数が大きく、短期的な削減に寄りやすい。
- 肯定的な扱い: 不要支出を見つけやすく、配分を戦略目標に合わせて再設計できる。
- 両者の関係: 同じ手法の中に、統制の強さと運用負荷が同居する。
- 出典: [Britannica: Zero-base budgeting](https://www.britannica.com/topic/zero-base-budgeting), [OpenStax: Describe How and Why Managers Use Budgets](https://openstax.org/books/principles-managerial-accounting/pages/7-1-describe-how-and-why-managers-use-budgets)

### D23 発達心理学・教育学

**概念**: cognitive equilibrium / disequilibrium

**概念1: cognitive equilibrium / disequilibrium**
- 否定的な扱い: `disequilibrium` は、既存の思考枠組みと環境がずれる状態であり、内的に不快な状態として扱われる。
- 肯定的な扱い: `equilibration` は、同化と調節を通じて認知構造を更新し、発達を進める基盤として扱われる。
- 両者の関係: 段階的・循環的。ズレが生じ、それを調整することでより安定した認知構造へ移る。
- 出典: [Britannica: cognitive equilibrium](https://www.britannica.com/science/cognitive-equilibrium), [Britannica: educational psychology](https://www.britannica.com/science/educational-psychology), [Britannica: developmental psychology](https://www.britannica.com/science/developmental-psychology)

### D24 宗教学・神秘主義

**概念**: 否定神学、仏教の `空`、神秘主義的な無化

**概念1: 否定神学 / apophatic theology**
- 否定的な扱い: 神は肯定的な言葉では捉えきれず、あらゆる名づけが不十分だとされる。
- 肯定的な扱い: 否定を通じてこそ、超越への接近や神秘的一致が可能になる。
- 両者の関係: 否定は失敗ではなく方法である。語らないこと、言い切らないことが接近の技法になる。
- 出典: [Britannica: apophatic theology](https://www.britannica.com/topic/apophatic-theology), [Britannica: mysticism](https://www.britannica.com/topic/mysticism)

**概念2: 仏教の `空` / `śūnyatā`**
- 否定的な扱い: 固定的な本質がないこと、実体視できないこととして扱われる。
- 肯定的な扱い: その「空」であることが、執着解除、智慧、解放の基盤になる。
- 両者の関係: 虚無ではなく、実体化を外すための認識構造として機能する。
- 出典: 仏教の `emptiness` に関する Britannica 個別項目URLは未確認。

**概念3: 神秘主義一般における「無 / nothingness」**
- 否定的な扱い: 自我や像を剥がす、把握不能な空白として扱われる。
- 肯定的な扱い: その空白が、合一・静寂・超越体験の入口として扱われる。
- 両者の関係: 失うことと到達することが重なるタイプの概念で、宗派ごとの差が大きい。
- 出典: [Britannica: mysticism](https://www.britannica.com/topic/mysticism)

### D25 人類学・民族学

**概念**: liminality

**概念1: liminality / transition stage**
- 否定的な扱い: 旧い社会的地位が剥奪された不安定・中間的状態として扱われる。
- 肯定的な扱い: 新しい身分や共同体的再統合に向かう不可欠な過渡段階として扱われる。
- 両者の関係: 同じ閾状態が、危うさと変容可能性を同時に持つ。
- 出典: [Britannica: Rite of passage](https://www.britannica.com/topic/rite-of-passage), [Britannica: Primary rites of passage](https://www.britannica.com/topic/rite-of-passage/Primary-rites-of-passage)

### D26 音楽学

**概念**: rest / tacet、silence

**概念1: rest / tacet / silence**
- 否定的な扱い: 休符や `tacet` は、意図された音が鳴らない区間、演奏停止、音の欠如として扱われる。
- 肯定的な扱い: 休符はリズム構造の一部であり、`4′33″` では沈黙が環境音と聴取行為を前景化する。
- 両者の関係: 音の不在が、単なる空白ではなく拍節、期待、聴取の枠組みを形成する。
- 出典: [Britannica: 4′33″](https://www.britannica.com/topic/433-by-Cage), [Britannica: Musical notation](https://www.britannica.com/art/musical-notation)

### D27 建築・空間デザイン

**概念**: court / patio / cortile

**概念1: court / patio / cortile**
- 否定的な扱い: 建築質量が占めていない空所、囲まれた空き、未充填の領域として扱われる。
- 肯定的な扱い: 光、風、動線、集まり、眺め、私密性を生み出す組織原理として機能する。
- 両者の関係: 空いていること自体が、居住や構成の中心機能になる。
- 出典: [Britannica: court (architecture)](https://www.britannica.com/technology/court-architecture), [Britannica: patio](https://www.britannica.com/technology/patio), [Britannica: cortile](https://www.britannica.com/technology/cortile)

### D28 舞台芸術

**概念**: empty space、poor theatre

**概念1: empty space**
- 否定的な扱い: 装置、背景、装飾が剥ぎ取られた空の場として扱われる。
- 肯定的な扱い: 俳優と観客の関係だけで上演が成立する最小条件として扱われる。
- 両者の関係: 欠如した舞台装置が、そのまま演劇の本質条件を露出させる。
- 出典: [Google Books: The Empty Space](https://books.google.com/books/about/The_Empty_Space.html?id=TqS7QgAACAAJ), [Britannica: theatre](https://www.britannica.com/art/theater-building)

**概念2: poor theatre**
- 否定的な扱い: 演劇から装飾的・技術的な豊かさを引き算し、貧しい形へ還元する。
- 肯定的な扱い: その削減が、俳優の身体・声・観客との encounter を中心化する方法として評価される。
- 両者の関係: 「貧しさ」が劣化ではなく、核を露出させる訓練法になる。
- 出典: [Google Books: Towards a Poor Theatre](https://books.google.com/books/about/Towards_a_Poor_Theatre.html?id=hQ5xpkMVDUUC)

### D29 複雑系科学

**概念**: criticality、edge of chaos

**概念1: criticality / self-organized criticality**
- 否定的な扱い: 系が不安定化し、小さな摂動が大きな崩壊や雪崩を引き起こす境界として扱われる。
- 肯定的な扱い: 同じ臨界域が、スケールフリーな構造、自己組織化、豊かな変動、計算可能性の高さを生む場として扱われる。
- 両者の関係: 不安定さと創発性が同じ境界条件に結びつく。
- 出典: [Britannica: Chaos theory](https://www.britannica.com/science/chaos-theory), [25 Years of Self-organized Criticality: Concepts and Controversies](https://link.springer.com/article/10.1007/s11214-015-0155-x), [Santa Fe Institute: Dynamics, Computation, and the “Edge of Chaos”](https://www.santafe.edu/research/results/working-papers/dynamics-computation-and-the-edge-of-chaos-a-re-ex)

### D30 伝統知・技芸

**概念**: apprenticeship、beginner's mind / 初心

**概念1: apprenticeship**
- 否定的な扱い: 未熟で、まだ一人前でない学習段階として扱われる。
- 肯定的な扱い: 技芸を身体化し、型を継承するための必須の導入過程として扱われる。
- 両者の関係: できなさや未完成が、そのまま伝承と熟達の条件になる。
- 出典: [Britannica: apprenticeship](https://www.britannica.com/topic/apprenticeship)

**概念2: beginner's mind / 初心**
- 否定的な扱い: 専門的熟練に達していない、まだ固まっていない状態として語られる。
- 肯定的な扱い: 可能性が多く、学びや更新に開かれた状態として高く評価される。
- 両者の関係: 未熟さは単なる欠如ではなく、技芸の継続的刷新を支える開放性として再評価される。
- 出典: [Britannica: Zen](https://www.britannica.com/topic/Zen), [Apple Books: Zen Mind, Beginner's Mind](https://books.apple.com/us/book/zen-mind-beginners-mind/id1505206271), [OverDrive: The Spirit of Noh](https://www.overdrive.com/media/1751379/the-spirit-of-noh)

## B. Stage 1 横断比較表

| 領域 | 概念（複数あれば/区切り） | 否定的扱いの有無 | 肯定的扱いの有無 | 両者の関係 |
|------|------------------------|----------------|----------------|-----------|
| D01 数学 | ゼロ / 空集合 | あり | あり | 欠如と構造基準が文脈で分岐 |
| D02 物理学 | 絶対零度 / 零点エネルギー | あり | あり | 限界と基準、空虚と量子的実体 |
| D03 化学 | 標準生成エンタルピーのゼロ基準 | あり | あり | 慣習的参照点として機能 |
| D04 生物学（進化） | 絶滅 / ニッチ空白 | あり | あり | 消失が機会の開口にもなる |
| D05 地球科学 | 垂直データム / 平均海面 | あり | あり | 参照面の有無が比較可能性を左右 |
| D06 天文学・宇宙物理学 | ビッグバン初期状態 / 真空ゆらぎ | あり | あり | 理論限界と生成起点が重なる |
| D07 工学・情報科学 | binary 0 / off state | あり | あり | 空側の記号が体系の基盤になる |
| D08 神経科学 | resting potential | あり | あり | 基準面からの偏差で信号が成立 |
| D09 生命科学（代謝・細胞） | quiescence / autophagy | あり | あり | 停止や分解が保存・再生条件になる |
| D10 臨床医学・免疫学 | peripheral immune tolerance | あり | あり | 不応答が自己保護の制御になる |
| D11 薬学 | placebo | あり | あり | 成分欠如が基準と反応検出に転化 |
| D12 農学・生態学 | primary succession / bare ground | あり | あり | 生の欠如が群集形成の始点になる |
| D13 哲学 | パルメニデス / ハイデガー / サルトル / 空 | あり | あり | 思想家ごとに構造が大きく分岐 |
| D14 心理学 | drive / need / self-actualization | あり | あり | 欠乏から行動・階層上昇が生じる |
| D15 美学 | negative space / empty space / silence | あり | あり | 欠如と構成要素のあいだで再評価 |
| D16 歴史学 | 史料の沈黙 / アーカイブの欠落 | あり | あり | 障害であり証拠にもなる |
| D17 言語学 | zero morpheme / zero marking | あり | あり | 実在か分析便法かで理論対立 |
| D18 社会学 | anomie | あり | あり | 基本は否定、分析上は変動診断に転用 |
| D19 文学・文芸学 | negative capability / 省略 / 沈黙 | あり | あり | 欠落が効果と参加条件に転化 |
| D20 法学・政治学 | state of nature / nullity | あり | あり | 前制度状態と無効概念が境界線を引く |
| D21 経済学（理論） | zero economic profit | あり | あり | 失敗にも均衡にもなりうる |
| D22 経営学 | zero-based budgeting | あり | あり | 同一手法に利点と負荷が同居 |
| D23 発達心理学・教育学 | cognitive equilibrium / disequilibrium | あり | あり | ズレと調整が循環的に発達を駆動 |
| D24 宗教学・神秘主義 | 否定神学 / 空 / 神秘的無化 | あり | あり | 伝統ごとの差が大きい |
| D25 人類学・民族学 | liminality | あり | あり | 不安定な中間状態が変容条件になる |
| D26 音楽学 | rest / tacet / silence | あり | あり | 音の不在が構造と聴取を成立させる |
| D27 建築・空間デザイン | court / patio / cortile | あり | あり | 空所が機能の中心になる |
| D28 舞台芸術 | empty space / poor theatre | あり | あり | 引き算が上演条件を露出させる |
| D29 複雑系科学 | criticality / edge of chaos | あり | あり | 不安定さと創発性が同じ境界に宿る |
| D30 伝統知・技芸 | apprenticeship / beginner's mind | あり | あり | 未熟さが継承と刷新の条件になる |

## C. 仮説を支持するデータ

### 1. 「ゼロ」が足場・基準として機能している領域

- D01 数学: `0` と空集合は、欠如を表すだけでなく、加法単位元や集合論の出発点として機能している。
- D03 化学: 標準生成エンタルピーのゼロ基準は、自然な無ではなく比較可能性を作る参照点である。
- D05 地球科学: 垂直データムや平均海面は、地形や海面の差分を読むための共有原点として働く。
- D07 工学・情報科学: binary `0` は off 側の記号だが、`1` と対になって計算と符号化の基盤を作る。
- D08 神経科学: resting potential は「何も起きていない」状態ではなく、そこからの偏差で信号が成立する基準面である。
- D10 臨床医学・免疫学: peripheral immune tolerance は、単なる欠如ではなく、自己攻撃を防ぐ境界条件として機能する。
- D21 経済学、D22 経営学: zero-profit condition や zero-based budgeting は、逸脱や再配分を評価する基準面として働く。

### 2. 「欠如や空白」が生成・再編の条件になっている領域

- D02 物理学、D06 天文学: 真空や零点エネルギーは、古典的な無ではなく、基底状態や宇宙論的始点として扱われる。
- D04 生物学（進化）: 絶滅は破壊だが、ニッチ空白が適応放散の条件にもなる。
- D09 生命科学、D12 農学・生態学: quiescence や bare ground は、停止や空白でありながら保存・再生・遷移の始点になる。
- D25 人類学、D28 舞台芸術、D29 複雑系科学、D30 伝統知・技芸: liminality、empty space、criticality、beginner's mind は、いずれも不安定さや未充填性が変容や創発を可能にする。
- D26 音楽学、D27 建築・空間デザイン: rest / silence や court / patio は、空いていること自体が構造・機能・知覚を成立させる。

### 3. 「否定」が開示や自由の条件になる領域

- D13 哲学: ハイデガーの `Nichts`、サルトルの `néant`、仏教哲学の `空` は、いずれも単純な不足ではなく、存在開示、自由、依存的生起の条件として報告された。
- D24 宗教学・神秘主義: 否定神学や神秘主義的無化では、語れなさや空白が超越への接近方法になる。
- D19 文学・文芸学、D15 美学: negative capability や negative space は、欠落や余白が感受や意味生成の条件になる例である。

### 4. v1 より仮説支持の質が改善した点

- v1 では「足場」への回収が強すぎたが、v2 では D13 を思想別に、D24 を伝統別に分けられ、どの概念が本当に足場として働くかを個別に見分けやすくなった。
- 否定的扱いと肯定的扱いを独立に書いたことで、D04、D10、D18、D20、D25 のように「破壊的でもあり条件でもある」という関係が前より見えやすくなった。

## D. 仮説に反するデータ

### 1. 「原点」が足場として機能しているとは言いがたい領域

- D13 パルメニデス: 「ないもの」は思考も発話もできないものとして排除され、主要な肯定的扱いが見つからなかった。
- D18 社会学: anomie は基本的に規範崩壊と病理の語であり、肯定側は分析概念としての二次的利用にとどまる。
- D20 法学・政治学: state of nature は秩序不在の危険状態であり、nullity も法的効果の欠如を示す。どちらも「足場」というより境界設定や破綻側が強い。
- D16 歴史学: 史料の沈黙はまず復元困難をもたらす欠如であり、肯定側は方法論的転用にすぎない。

### 2. 「ゼロ」が単なる参照規約であって存在論的原点ではない領域

- D03 化学、D05 地球科学、D21 経済学、D22 経営学では、ゼロはしばしば測定や配分の基準として採用される慣習的参照点である。
- これらは「有るが立ち上がるための足場」というより、「差分を比較するための約束事」に近い。
- したがって、仮説のいう「全軸が交わる原点」と同一視するには飛躍がある。

### 3. 30領域に単一の共通構造がある、という主張を弱めるデータ

- Stage 1 を見ると、ゼロ概念は少なくとも「基準点」「生成的空白」「否定的欠如」「境界的閾値」の複数型に分かれる。
- D02 の真空、D18 の anomie、D21 のゼロ利潤、D28 の empty space は、いずれも「ゼロ」に見えても役割がかなり異なる。
- v2 で固有性を保った結果、v1 よりむしろ単一収束しにくいことが見えた。これは仮説への重要な反証的データである。

## E. 判定不能なデータ

### 1. 概念の地位自体が争われるもの

- D17 言語学: zero morpheme は実在する文法装置か、分析上の便法かで理論対立があり、「原点」概念とみなせるか判定しにくい。
- D29 複雑系科学: criticality は「ゼロ」より「境界」に近く、原点概念への対応づけ自体がやや操作的である。

### 2. 理論の境界や未確認が大きいもの

- D06 天文学・宇宙物理学: 特異点は宇宙史の起点である一方、理論破綻点でもあり、実在的な「原点」と呼べるかは保留が必要。
- D24 仏教の `空`: 内容自体は支持的だが、今回は直接記事URLが未確認で、裏取りの厚みが十分ではない。
- D30 伝統知・技芸: apprenticeship と beginner's mind は近接概念として妥当だが、`初心` や `守破離` の直接出典を今回の統合版では十分に固定できていない。
- D15 美学: negative space は明確だが、empty space / silence / absence は知覚哲学寄りで、美学の標準用語としての位置づけは追加確認が要る。

### 3. 支持と反証が拮抗するもの

- D11 薬学: placebo は「成分がないこと」が基準として働くが、薬学の中心的原点概念というより方法論的対照概念である。
- D04 生物学、D25 人類学、D26 音楽学は、否定と肯定の転化が比較的きれいに見える一方、そこから「原点一般」まで一般化してよいかはまだ慎重であるべきである。

## F. 三角測量の暫定評価

### 1. 30領域のゼロ概念に共通構造はあるか

ある。ただし単一ではなく、少なくとも次の 3 から 4 群に分かれる。

1. 基準点型
   D01, D03, D05, D07, D08, D21, D22
   ゼロは差分計測や比較を可能にする参照面として機能する。
2. 生成的空白型
   D02, D04, D09, D12, D25, D26, D27, D28, D30
   空白・停止・未充填・未熟が、再編や創発の条件になる。
3. 否定的開示型
   D13, D15, D19, D24
   否定や空が、存在理解・自由・感受・超越への接近を開く。
4. 病理・破綻型
   D16, D18, D20
   欠如は主として障害や無秩序として現れ、足場性は弱い。

### 2. その共通構造は仮説が言う「原点」と一致するか

部分的一致にとどまる。仮説の中核である「単なる欠如ではなく足場として機能する」は、多くの領域で観察された。しかし、それはすべての領域で同じ強さではなく、しかも「存在の原点」ではなく「測定上の基準」「制度上の境界」「訓練上の初期条件」として現れる場合も多い。

### 3. 一致しない場合、データが示す構造は何か

データがより強く示しているのは、「ゼロ的概念は境界装置である」という構造である。つまり、それは:

- 何かを比較可能にする参照面である
- 崩壊や欠如を通じて再編を起こす閾値である
- 否定や空白によって知覚・意味・自由を開く操作である
- ときに病理や破綻を記述する診断語でもある

この意味で、共通しているのは「ゼロそのもの」より「ゼロが差分・転換・境界を生む働き」である。

### 4. v2 の設計変更は効いたか

概ね効いた。

- v1 で消えていた否定側が、D13 パルメニデス、D16、D18、D20 などで明確に回収された。
- D13 と D24 は分岐ルールのおかげで固有性が保たれ、見かけの収束が減った。
- 一方で、肯定側を広く拾えたため、30/30 で「否定も肯定もあり」という分布になりやすく、依然として「広義に解釈すると両方に寄る」傾向は残る。
- また、今回は Stage 1 の一部を手動補完しており、出典の厚みが領域間で均一ではない。

### 5. 信頼度と次に調べるべきこと

- 信頼度: 中
- 理由: v1 より反証と固有性は明確に改善したが、未確認URLがまだ残り、領域間で出典の厚みが不均一であるため。

次に調べるべきこと:

1. D13 哲学と D24 宗教学について、各概念に一次資料を 1 本ずつ固定する。
2. D18 社会学と D20 法学で、「病理」と「制度生成」のどちらが主文脈かを一次資料で厳密に切り分ける。
3. D29 複雑系科学が「原点」ではなく「境界」なのかを、対応づけの妥当性から再評価する。
4. D30 伝統知・技芸について、`初心`、`守破離`、見習い段階の直接出典を補強する。
