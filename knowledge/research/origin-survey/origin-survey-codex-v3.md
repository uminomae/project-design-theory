# 30学問領域「原点」調査 — Codex v3

Issue: #46  
Parent: #44  
作成日: 2026-03-30  
作成: Codex  
使用モデル: `GPT-5`

## 0. 前置き

このレポートは `techo/prompts/30-domains-origin-survey-v3.md` に基づく調査設計用調査3である。  
今回は `v2` の既存成果を土台にしつつ、`v3` の追加要件である `見つからなかった` の許容、`権力的ゼロ`、`語りの限界`、5類型の明示を優先して再構成した。

方法上の留保:

- 30領域すべてをゼロから再探索したのではなく、`origin-survey-codex-v2.md` と `origin-survey-claude-v2.md` を下敷きにした
- 外部確認は、`v2` で弱かった `D16/D17/D20/D24/D25/D29/D30` を中心に追加した
- したがって、本稿は `v3` の初版ドラフトであり、領域間で出典の厚みはまだ均一ではない

## A. Stage 1 領域別レポート

### D01 数学

**概念**: ゼロ、空集合

**概念1: ゼロ / 空集合**
- 否定的な扱い: `0` は量の欠如を表し、`0` で割ることは未定義である。空集合も要素の欠如として定義される。
- 肯定的な扱い: `0` は加法単位元であり、位取り記数法と座標系の基準になる。空集合は集合論の基礎対象である。
- 両者の関係: `レベル差`。対象レベルでは欠如だが、体系レベルでは構造を支える基準である。
- 語りの限界: 数学内部では比較的安定しているが、`0` の歴史的受容は文化圏差が大きい。
- 出典: [Britannica: Zero](https://www.britannica.com/science/zero-mathematics), [Encyclopedia of Mathematics: Empty set](https://encyclopediaofmath.org/wiki/Empty_set)

### D02 物理学

**概念**: 絶対零度、零点エネルギー

**概念1: 絶対零度 / 零点エネルギー**
- 否定的な扱い: 絶対零度は到達不能な下限であり、古典的直観では「完全停止」に近い。零点エネルギーは「真空は無である」という直観を崩す。
- 肯定的な扱い: 絶対零度はケルビン尺度の基準であり、零点エネルギーは量子系の基底状態を記述する。
- 両者の関係: `同時的共存`。限界や空虚さが、そのまま基準や基底状態の記述になる。
- 語りの限界: 古典物理の「空」と量子論の「真空」は同じ語では捉えにくい。
- 出典: [Britannica: Absolute zero](https://www.britannica.com/science/absolute-zero), [Britannica: Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D03 化学

**概念**: 生成エンタルピーのゼロ基準、エントロピーゼロ、化学平衡の `ΔG=0`

**概念1: 化学のゼロ基準**
- 否定的な扱い: ここでのゼロは物理的な「無」ではなく、自然に与えられた原点でもない。参照点の選択が前提になる。
- 肯定的な扱い: 標準生成エンタルピーや `ΔG=0` は、反応の比較と平衡判定を可能にする基準として不可欠である。
- 両者の関係: `レベル差`。存在論的な無ではないが、方法論上は強力な原点として働く。
- 語りの限界: 化学には数学的ゼロに相当する単一の標準概念があるというより、複数の参照ゼロが分散している。
- 出典: [Britannica: Heat of formation](https://www.britannica.com/science/heat-of-formation), [Britannica: Third law of thermodynamics](https://www.britannica.com/science/third-law-of-thermodynamics)

### D04 生物学（進化）

**概念**: 絶滅、ニッチ空白

**概念1: 絶滅 / ニッチ空白**
- 否定的な扱い: 絶滅は系統の消失と多様性の減少であり、破壊的出来事として扱われる。
- 肯定的な扱い: 絶滅後に生じるニッチ空白は、適応放散や新しい分化の条件になる。
- 両者の関係: `段階的変容`。消失が先行し、その後に生態学的機会が開く。
- 出典: [Britannica: Extinction](https://www.britannica.com/science/extinction-biology), [Britannica: Adaptive radiation](https://www.britannica.com/science/adaptive-radiation)

### D05 地球科学

**概念**: 垂直データム、平均海面、ジオイド

**概念1: 標高ゼロ面**
- 否定的な扱い: 絶対的な自然ゼロ面がそのまま与えられているわけではなく、基準面の選定が必要である。
- 肯定的な扱い: データムやジオイドは、測量・地図・海面高比較の共通基準になる。
- 両者の関係: `レベル差`。自然の無ではないが、計測系では原点に相当する。
- 語りの限界: この分野でも単一の存在論的ゼロより、実務上の参照面が中心である。
- 出典: [NOAA: Datum](https://oceanservice.noaa.gov/facts/datum.html), [国土地理院: ジオイドとは](https://www.gsi.go.jp/buturisokuchi/grageo_geoid.html)

### D06 天文学・宇宙物理学

**概念**: ビッグバン初期状態、特異点、真空ゆらぎ

**概念1: 初期宇宙 / 特異点 / 真空**
- 否定的な扱い: 特異点は理論の破綻点であり、プランク時代以前は記述不能に近い。真空も古典的な無ではない。
- 肯定的な扱い: 初期宇宙は宇宙史の起点を与え、量子的真空は宇宙論的に実体的な役割を持つ。
- 両者の関係: `学派依存`。特異点を理論限界とみるか、より深い理論への入口とみるかで分かれる。
- 語りの限界: 宇宙の「始まり」を因果的に語れるか自体が未決着である。
- 出典: [Britannica: Big Bang model](https://www.britannica.com/science/big-bang-model), [Britannica: Zero-point energy](https://www.britannica.com/science/zero-point-energy)

### D07 工学・情報科学

**概念**: binary `0`、off state、zero-based indexing

**概念1: 工学の `0`**
- 否定的な扱い: `0` は off、停止、信号なし、false 側の記号として扱われる。
- 肯定的な扱い: `0/1` の差自体がデジタル計算、論理回路、符号化の基盤になる。ゼロ始まりは機械的処理を簡潔にする。
- 両者の関係: `レベル差`。使用場面では不在側だが、体系全体では不可欠な構成要素である。
- 出典: [Britannica: Binary code](https://www.britannica.com/technology/binary-code), [Britannica: Zero-based numbering](https://www.britannica.com/science/zero-mathematics)

### D08 神経科学

**概念**: resting potential

**概念1: 静止電位**
- 否定的な扱い: 基準からの逸脱が維持不能になると、神経機能の破綻や異常興奮につながる。
- 肯定的な扱い: 静止電位は活動電位と情報伝達の基準面である。
- 両者の関係: `レベル差`。一見「何も起きていない」状態だが、実際には信号成立の前提条件である。
- 出典: [Britannica: Resting potential](https://www.britannica.com/science/resting-potential), [Britannica: Bioelectricity](https://www.britannica.com/science/bioelectricity)

### D09 生命科学（代謝・細胞）

**概念**: quiescence、autophagy

**概念1: quiescence / autophagy**
- 否定的な扱い: 増殖停止や自己分解は、低下・消耗・損失として見える。
- 肯定的な扱い: 休止は保存と再活性化の条件であり、autophagy は維持と更新の基盤になる。
- 両者の関係: `同時的共存`。停止や分解が、そのまま保存や再生の条件になっている。
- 出典: [Mechanisms, Hallmarks, and Implications of Stem Cell Quiescence](https://pmc.ncbi.nlm.nih.gov/articles/PMC6565921/), [Britannica: Autophagy](https://www.britannica.com/science/autophagocytosis)

### D10 臨床医学・免疫学

**概念**: immune tolerance、homeostasis

**概念1: 免疫寛容 / 恒常性**
- 否定的な扱い: 反応しなさすぎることは感染防御の低下を招き、破綻すれば自己免疫に向かう。
- 肯定的な扱い: 免疫寛容は自己攻撃を防ぐ境界条件であり、恒常性維持の核である。
- 両者の関係: `レベル差`。局所的には反応欠如に見えても、全体系では自己保護の制御である。
- 出典: [Britannica: Peripheral immune tolerance](https://www.britannica.com/topic/peripheral-immune-tolerance), [Britannica: Homeostasis](https://www.britannica.com/science/homeostasis)

### D11 薬学

**概念**: placebo

**概念1: placebo**
- 否定的な扱い: 有効成分の欠如した偽薬として扱われる。
- 肯定的な扱い: 薬効判定の対照基準となり、placebo effect 自体も臨床的に無視できない。
- 両者の関係: `レベル差`。薬理学的には不在だが、試験設計上は積極的な基準になる。
- 出典: [Britannica: Placebo](https://www.britannica.com/science/placebo)

### D12 農学・生態学

**概念**: primary succession、bare ground

**概念1: 裸地 / 一次遷移**
- 否定的な扱い: 土壌や群集のない barren ground は生の欠如として扱われる。
- 肯定的な扱い: 一次遷移の出発面として、先駆種の侵入と生態系形成を可能にする。
- 両者の関係: `段階的変容`。空白状態が時間を通じて群集形成へ転化する。
- 出典: [Britannica: Primary succession](https://www.britannica.com/science/primary-succession), [Britannica: Ecological succession](https://www.britannica.com/science/ecological-succession)

### D13 哲学

**概念**: 非存在、`Nichts`、`néant`、`空`

**概念1: パルメニデスの非存在**
- 否定的な扱い: 「ないもの」は思考も発話もできないものとして退けられる。
- 肯定的な扱い: 主要な肯定的扱いは見つからなかった。
- 両者の関係: `片方のみ`。少なくともパルメニデス自身では、非存在は原理化されない。
- 語りの限界: 語ろうとすると矛盾に落ちる、という形で限界が主題化される。
- 出典: [SEP: Parmenides](https://plato.stanford.edu/entries/parmenides/)

**概念2: ハイデガー / サルトルの無**
- 否定的な扱い: 不安、欠如、裂け目として経験される。
- 肯定的な扱い: 存在開示、自由、否定能力の条件として働く。
- 両者の関係: `同時的共存`。否定性そのものが開示条件になる。
- 語りの限界: `無` は通常の存在者言語では十分に捉えにくい。
- 出典: [SEP: Nothingness](https://plato.stanford.edu/entries/nothingness/), [SEP: Sartre](https://plato.stanford.edu/entries/sartre/)

**概念3: 仏教哲学の `空`**
- 否定的な扱い: 実体の否定として読まれ、虚無論と誤解されやすい。
- 肯定的な扱い: 縁起と非実体性を示し、執着解除と認識転換の条件になる。
- 両者の関係: `学派依存`。虚無論的読解と中道的読解が明確に分かれる。
- 語りの限界: `空` を実体化してしまうと概念自体を取り違える。
- 出典: [IEP: Nagarjuna](https://iep.utm.edu/nagarjun/)

### D14 心理学

**概念**: 欠乏欲求、drive、self-actualization

**概念1: 欠乏欲求 / drive**
- 否定的な扱い: 欠乏や緊張は不快な不足状態として扱われる。
- 肯定的な扱い: 同じ欠乏が行動の起動因となり、充足と発達を促す。
- 両者の関係: `段階的変容`。不足が行動を起こし、その解消が次段階を開く。
- 出典: [Britannica: Drive](https://www.britannica.com/topic/drive), [Britannica: Self-actualization](https://www.britannica.com/science/self-actualization)

### D15 美学

**概念**: negative space、間、侘び寂び、崇高

**概念1: 余白 / negative space / 間**
- 否定的な扱い: 空白は未充填や不足として読まれうる。西洋美学では `horror vacui` 的な空白忌避もある。
- 肯定的な扱い: 余白や `間` は構図と知覚を支える能動的要素として扱われる。侘び寂びでは不足が価値に転化する。
- 両者の関係: `学派依存`。空白を欠如とみるか、構成要素とみるかで評価が割れる。
- 語りの限界: 美学と知覚哲学の境界にまたがり、用語の中心性が流動的である。
- 出典: [Britannica: Negative space](https://www.britannica.com/art/negative-space), [SEP: Japanese Aesthetics](https://plato.stanford.edu/entries/japanese-aesthetics/), [Cambridge: Empty Space, Silence, and Absence](https://www.cambridge.org/core/journals/canadian-journal-of-philosophy/article/empty-space-silence-and-absence/96428326CEFC5BD24ED0386C0EB96DED)

### D16 歴史学

**概念**: アーカイヴの沈黙、Year Zero、Stunde Null

**概念1: アーカイヴの沈黙**
- 否定的な扱い: 記録の欠落や偏りは、過去の復元を困難にする。
- 肯定的な扱い: 同じ沈黙が、権力による記録生成の偏りを読む手がかりになる。
- 両者の関係: `段階的変容`。当初は欠損だが、後続の史学では分析対象に転化した。
- 語りの限界: 何が「残らなかった」のかは、定義上完全には回収できない。
- 出典: [Britannica: Historiography - Methodology](https://www.britannica.com/topic/historiography/Methodology-of-historiography), [Wikipedia: Silencing the Past](https://en.wikipedia.org/wiki/Silencing_the_Past)

**概念2: Year Zero / Stunde Null**
- 否定的な扱い: 過去の断絶を宣言し、歴史の連続性を暴力的に切断する政治的レトリックになりうる。
- 肯定的な扱い: 主要な肯定的扱いは見つからなかった。
- 権力的な扱い: カンボジアの `Year Zero` は、過去の制度と文化の抹消を正当化する宣言として機能した（Kiernan, *The Pol Pot Regime*, 2002）。`Stunde Null` も戦後ドイツにおいて連続性を切断する神話として使われたが、実際にはナチ体制との人的・制度的連続性は維持されていた（Judt, *Postwar*, 2005）。
- 両者の関係: `片方のみ`。少なくとも歴史学的評価では、主に危険な断絶言説として現れる。
- 語りの限界: 「本当にゼロから始まった」とは歴史学的にはほとんど言えない。Year Zero の宣言が実際に何を破壊し何を温存したかは、Chandler (*A History of Cambodia*, 4th ed., 2008) が詳述している。
- 出典: [Britannica: Cambodian Genocide](https://www.britannica.com/event/Cambodian-Genocide), Ben Kiernan, *The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79* (Yale University Press, 2002), David Chandler, *A History of Cambodia* (4th ed., Westview Press, 2008), Tony Judt, *Postwar: A History of Europe Since 1945* (Penguin, 2005)

### D17 言語学

**概念**: zero morpheme、zero marking

**概念1: zero morpheme / zero marking**
- 否定的な扱い: 音形を持たない形態素は、分析上の便法にすぎないという批判がある。
- 肯定的な扱い: 表面形がなくても、文法対立を説明するゼロ標示として有効に機能する。
- 両者の関係: `学派依存`。実在的形態素とみるか、記述装置とみるかで分かれる。
- 語りの限界: 「ないものがあるように振る舞う」という存在論的地位が未決着である。
- 出典: [Frontiers: Inflectional zero morphology](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.1015435/full), [JLM: Zero marking in inflection](https://jlm.ipipan.waw.pl/index.php/JLM/article/view/361)

### D18 社会学

**概念**: anomie、normlessness

**概念1: anomie**
- 否定的な扱い: 規範崩壊、目的喪失、統合不全という病理概念として扱われる。
- 肯定的な扱い: 主要な肯定的扱いは見つからなかった。後続理論で分析概念として使われることはある。
- 両者の関係: `片方のみ`。中心文脈はなお否定的である。
- 語りの限界: 病理記述と価値中立的分析概念のあいだで語の位置づけが揺れる。
- 出典: [Britannica: Anomie](https://www.britannica.com/topic/anomie), [Britannica: Deviance - Sociological perspectives](https://www.britannica.com/topic/deviance/Sociological-perspectives)

### D19 文学・文芸学

**概念**: negative capability、省略、沈黙、余白

**概念1: negative capability**
- 否定的な扱い: 決定不能性や曖昧さに耐える態度として、理論的には非論証的とも読まれる。
- 肯定的な扱い: 不確実性の中にとどまる創作能力として高く評価される。
- 両者の関係: `レベル差`。認識論的には欠如に見えるが、文学的には能力となる。
- 語りの限界: 説明しすぎると失われる能力であり、定義が自己消去的である。
- 出典: [Britannica: Negative capability](https://www.britannica.com/art/negative-capability)

**概念2: 省略 / 沈黙 / 余白**
- 否定的な扱い: 語られていないこと、欠けていることとして現れる。
- 肯定的な扱い: 読者の補完、余韻、リズム、緊張を生む技法になる。
- 両者の関係: `同時的共存`。欠落そのものが意味生成装置として働く。
- 語りの限界: 空白の意味は本文ではなく読者側に移るため、固定化しにくい。
- 出典: [Wikipedia: Un coup de dés](https://en.wikipedia.org/wiki/Un_coup_de_d%C3%A9s_jamais_n'abolira_le_hasard_(Mallarm%C3%A9)), [Aleph: Minimalism in American Literature](https://aleph.edinum.org/1839)

### D20 法学・政治学

**概念**: state of nature、nullity / void、terra nullius

**概念1: state of nature**
- 否定的な扱い: ホッブズでは暴力と不安の状態として描かれる。
- 肯定的な扱い: ロックやルソーでは、国家以前の基底条件や比較基準として用いられる。
- 両者の関係: `学派依存`。同じ「政治のゼロ地点」が、恐怖にも規範的基準にもなる。
- 出典: [Britannica: State of nature](https://www.britannica.com/topic/state-of-nature-political-theory)

**概念2: nullity / void**
- 否定的な扱い: 法的効果がないこと、最初から無効であることを示す。
- 肯定的な扱い: 有効性の境界を引く法技術として働く。
- 両者の関係: `レベル差`。当事者にとっては欠如だが、法秩序にとっては境界設定装置である。
- 語りの限界: 無効が事実上存在する行為をどこまで消去できるのかは制度ごとに異なる。
- 出典: [Cornell Wex: Void](https://www.law.cornell.edu/wex/void)

**概念3: terra nullius**
- 否定的な扱い: 主要な肯定的扱いは見つからなかった。むしろ、所有者不在の宣言が先住民の権利抹消に使われた。
- 権力的な扱い: `terra nullius` は土地を「空白」と宣言することで、収奪と排除を正当化した。その法的根拠はローマ法の *res nullius* 概念と15世紀の教皇勅書（Discovery Doctrine）に遡る。
- 両者の関係: `片方のみ`。ここでの「ゼロ」は足場ではなく権力の言説装置である。
- 語りの限界: 法的な「無主地」と現地の lived reality が乖離する。オーストラリア最高裁 Mabo v Queensland (No 2) [1992] HCA 23 は、terra nullius の法的虚構性を認定し、先住民の土地権を回復した画期的判決である。
- 出典: [Cornell Wex: Terra nullius](https://www.law.cornell.edu/wex/terra_nullius), Mabo v Queensland (No 2) [1992] HCA 23, Hannah Arendt, *The Origins of Totalitarianism* (Harcourt, 1951), Giorgio Agamben, *Homo Sacer: Sovereign Power and Bare Life* (Stanford University Press, 1998)

### D21 経済学（理論）

**概念**: zero-profit condition、zero-sum

**概念1: ゼロ利潤 / ゼロサム**
- 否定的な扱い: 超過利潤の消失や固定パイ思考として読まれる。
- 肯定的な扱い: 長期均衡や理論モデルの基準点として使われる。
- 両者の関係: `レベル差`。企業実感では欠如だが、理論ではベンチマークである。
- 語りの限界: 均衡ゼロと創発的成長の関係は学派差が大きい。
- 出典: [OpenStax: Perfect Competition](https://openstax.org/books/principles-economics-3e/pages/8-1-perfect-competition-and-why-it-matters), [Britannica: Constant-sum game](https://www.britannica.com/topic/constant-sum-game)

### D22 経営学

**概念**: zero-based budgeting

**概念1: ゼロベース予算**
- 否定的な扱い: 毎回ゼロから正当化するため負荷が高く、短期削減圧力も強い。
- 肯定的な扱い: 既得配分をいったん白紙化し、戦略に応じた再配分を可能にする。
- 両者の関係: `同時的共存`。白紙化は統制圧力であると同時に、再設計の条件でもある。
- 権力的な扱い: 組織内部では、「ゼロに戻す」ことが統制や査定の道具として働きうる。
- 出典: [Britannica: Zero-base budgeting](https://www.britannica.com/topic/zero-base-budgeting), [OpenStax: Managers Use Budgets](https://openstax.org/books/principles-managerial-accounting/pages/7-1-describe-how-and-why-managers-use-budgets)

### D23 発達心理学・教育学

**概念**: disequilibrium、ZPD、deficit model

**概念1: 認知的不均衡 / 最近接発達領域**
- 否定的な扱い: まだできないこと、ズレていること、不均衡であることは欠如として経験される。
- 肯定的な扱い: 同じズレが学習と発達を駆動し、ZPD は足場かけの基準になる。
- 両者の関係: `段階的変容`。不均衡が調整を生み、より高い均衡へ進む。
- 権力的な扱い: deficit model は「足りない子ども」を制度的に固定化しうる。
- 出典: [Britannica: Cognitive equilibrium](https://www.britannica.com/science/cognitive-equilibrium), [Wikipedia: Zone of proximal development](https://en.wikipedia.org/wiki/Zone_of_proximal_development), [CA Dept of Education: Asset-Based Pedagogies](https://www.cde.ca.gov/ci/pl/assetbasedpedagogies.asp)

### D24 宗教学・神秘主義

**概念**: `空`、否定神学、ファナー、無為、ケノーシス、ツィムツーム

**概念1: 仏教の `空`**
- 否定的な扱い: 実体否定のため、虚無主義と誤解されやすい。ナーガールジュナ『中論』24:11 はこの誤読を明示的に批判している。
- 肯定的な扱い: 縁起と非実体性を示し、悟りへの認識転換を支える。空は諸法の成立条件であり、空でなければ四聖諦も成り立たない（『中論』24:14）。
- 両者の関係: `学派依存`。虚無論的読解と中道的読解が分かれる。
- 語りの限界: `空` を固定的な「何か」として語ると取り違えになる。空自体もまた空である（空空）という再帰構造が語りを困難にする。
- 出典: [IEP: Nagarjuna](https://iep.utm.edu/nagarjun/), [SEP: Nagarjuna](https://plato.stanford.edu/entries/nagarjuna/)

**概念2: 否定神学 / 神秘的無化**
- 否定的な扱い: 神は肯定的表象で捉えられず、沈黙や否定に追い込まれる。
- 肯定的な扱い: その否定が超越への接近方法になり、ファナーでは自己の消滅がバカーへの前提になる。
- 両者の関係: `同時的共存`。否定がそのまま接近方法になる。
- 語りの限界: 語れば外し、黙れば届かない、という自己矛盾を抱える。ハッラージュの「アナ・アル=ハック（我は真理なり）」宣言（922年処刑）は、ファナーの極致が言語化された瞬間であり、その言語化自体が異端として裁かれた。
- 出典: [Britannica: Apophatic theology](https://www.britannica.com/topic/apophatic-theology), [Britannica: Fana](https://www.britannica.com/topic/fana-Sufism), [Britannica: Nirguna](https://www.britannica.com/topic/nirguna), [SEP: Laozi](https://plato.stanford.edu/entries/laozi/), [SEP: Mysticism](https://plato.stanford.edu/entries/mysticism/)

**概念3: ケノーシス（キリスト教）**
- 否定的な扱い: 神が自己を空にする（ピリピ書2:7「己を虚しうし」）行為は、全能性の放棄として映る。
- 肯定的な扱い: 自己空虚化が受肉と救済の条件になる。神学的には神の愛の極致として解釈される。
- 両者の関係: `同時的共存`。全能の放棄がそのまま救済の条件になる。
- 語りの限界: 無限者の有限化をどう語るかは教派によって大きく異なる。マザー・テレサの手紙（"Come Be My Light", 2007）は、信仰者における神の不在体験が数十年にわたり持続しうることを示した。
- 出典: [SEP: Christianity and Philosophy - Kenosis](https://plato.stanford.edu/entries/christiantheology-philosophy/#Keno)

**概念4: ツィムツーム（カバラ）**
- 否定的な扱い: 神の自己収縮は、被造世界に神の不在領域を生む。
- 肯定的な扱い: 収縮なしには有限な世界が存在できない。創造の前提条件として機能する。ルーリア派カバラ（16世紀）の中核概念。
- 両者の関係: `同時的共存`。不在の創出がそのまま存在の条件になる。
- 語りの限界: ルーリア派カバラの特殊な文脈を普遍化することへの留保が必要。
- 出典: [SEP: Kabbalah](https://plato.stanford.edu/entries/kabbalah/)

### D25 人類学・民族学

**概念**: liminality、terra nullius、floating signifier

**概念1: liminality**
- 否定的な扱い: 古い身分が失われた中間状態であり、不安定で危うい。
- 肯定的な扱い: 変容とコミュニタスの条件であり、儀礼の中核的段階になる。Victor Turner (*The Ritual Process: Structure and Anti-Structure*, 1969) は通過儀礼の中間段階（リミナリティ）において、既存の社会構造が一時的に解体され、平等で未分化な共同性（コミュニタス）が生じることを示した。
- 両者の関係: `段階的変容`。剥奪から再編への過程で意味を持つ。
- 語りの限界: Turner のコミュニタス概念は儀礼文脈を超えて広く援用されるが、脱文脈化による概念の希薄化が指摘されている。
- 出典: [Britannica: Rite of passage](https://www.britannica.com/topic/rite-of-passage), Victor Turner, *The Ritual Process: Structure and Anti-Structure* (Aldine, 1969)

**概念2: terra nullius**
- 否定的な扱い: 主要な肯定的扱いは見つからなかった。
- 権力的な扱い: 文化的・法的に inhabited だった土地を「無主」と宣言することで、植民地支配を正当化する。Mabo v Queensland (No 2) [1992] は、この法的虚構の転換点となった。
- 両者の関係: `片方のみ`。この「空白」は記述ではなく支配の技法である。
- 語りの限界: 人類学的実在と国家法のカテゴリーが衝突する。
- 出典: [Cornell Wex: Terra nullius](https://www.law.cornell.edu/wex/terra_nullius), [Society for Cultural Anthropology: Emptiness](https://www.culanth.org/fieldsights/emptiness-an-introduction), Mabo v Queensland (No 2) [1992] HCA 23

### D26 音楽学

**概念**: rest、tacet、silence

**概念1: 休符 / tacet / silence**
- 否定的な扱い: 音が鳴っていない区間、演奏の停止として現れる。
- 肯定的な扱い: 休符は拍節・期待・構成の要素であり、`4′33″` では聴取行為自体を前景化する。
- 両者の関係: `同時的共存`。音の不在が、同時に音楽構造を成立させる。
- 語りの限界: どこまでを作品内部の沈黙とみなすかは作品観に依存する。
- 出典: [Britannica: 4′33″](https://www.britannica.com/topic/433-by-Cage), [Britannica: Musical notation](https://www.britannica.com/art/musical-notation)

### D27 建築・空間デザイン

**概念**: courtyard、patio、void、間

**概念1: 建築的空所**
- 否定的な扱い: 物体が詰まっていない空きとして見える。
- 肯定的な扱い: 光、風、視線、集まり、動線を組織する機能的中心になる。
- 両者の関係: `レベル差`。充填されていないことが、空間機能としては積極的意味を持つ。
- 出典: [Britannica: Court](https://www.britannica.com/technology/court-architecture), [Britannica: Patio](https://www.britannica.com/technology/patio), [Britannica: Cortile](https://www.britannica.com/technology/cortile)

### D28 舞台芸術

**概念**: empty space、poor theatre

**概念1: empty space / poor theatre**
- 否定的な扱い: 装置や装飾の欠如、貧しい舞台として現れる。
- 肯定的な扱い: 俳優と観客の関係だけを前景化し、演劇の最小条件を露出させる。
- 両者の関係: `同時的共存`。引き算がそのまま演劇の核を強める。
- 出典: [Google Books: The Empty Space](https://books.google.com/books/about/The_Empty_Space.html?id=TqS7QgAACAAJ), [Google Books: Towards a Poor Theatre](https://books.google.com/books/about/Towards_a_Poor_Theatre.html?id=hQ5xpkMVDUUC)

### D29 複雑系科学

**概念**: この領域には数学的ゼロに相当する単一の標準概念が明確に存在しない。近似候補として criticality、bifurcation、edge of chaos を扱う。

**概念1: criticality / bifurcation / edge of chaos**
- 否定的な扱い: わずかな摂動で系が不安定化し、予測不能や崩壊につながる境界である。
- 肯定的な扱い: 同じ境界が創発、自己組織化、多様なダイナミクスを生む条件になる。
- 両者の関係: `同時的共存`。不安定さと創発性が同じ境界条件に宿る。
- 語りの限界: これは `原点` より `境界` に近く、v3 の問いにどこまで含めるべきか自体が未決着である。
- 出典: [Britannica: Chaos theory](https://www.britannica.com/science/chaos-theory), [Santa Fe Institute: Edge of Chaos](https://www.santafe.edu/research/results/working-papers/dynamics-computation-and-the-edge-of-chaos-a-re-ex)

### D30 伝統知・技芸

**概念**: 初心、beginner's mind、守破離、無心

**概念1: 初心 / beginner's mind**
- 否定的な扱い: 未熟で、まだ一人前ではない段階として現れる。
- 肯定的な扱い: 開放性と学習可能性に富む状態として評価され、熟達後も更新の条件とされる。世阿弥『花鏡』の「初心忘るべからず」は、初心を単なる未熟ではなく、熟達者が回帰すべき原点として位置づけた。鈴木俊隆『禅マインド ビギナーズ・マインド』(1970) はこの概念を禅の文脈で西洋に紹介し、「初心者の心には多くの可能性がある。専門家の心にはほとんどない」と定式化した。
- 両者の関係: `段階的変容`。未熟さが、そのまま熟達の入り口と刷新条件になる。
- 出典: [Britannica: Zeami](https://www.britannica.com/biography/Zeami), [Britannica: Zen](https://www.britannica.com/topic/Zen), Shunryu Suzuki, *Zen Mind, Beginner's Mind* (Weatherhill, 1970), 世阿弥『花鏡』

**概念2: 守破離**
- 否定的な扱い: `守` は型の模倣であり、自由や個性の抑制として見える。
- 肯定的な扱い: 型の内面化を経て、破り、離れるという熟達過程の説明になる。
- 両者の関係: `段階的変容`。拘束がなければ離脱も成立しない。
- 語りの限界: 守破離の語は千利休の弟子・川上不白『不白筆記』(1794) に遡るとされるが、概念の原型は世阿弥の段階的修行論（『風姿花伝』における年来稽古条々）に見出される。茶道・武道・能楽にまたがる出典系譜を持ち、単一の原典に帰することは困難である。
- 出典: [Britannica: Apprenticeship](https://www.britannica.com/topic/apprenticeship), [国立国会図書館レファレンス協同データベース: 守破離](https://crd.ndl.go.jp/reference/entry/index.php?id=1000054037&page=ref_view), 世阿弥『風姿花伝』, 川上不白『不白筆記』(1794)

**概念3: 無心（mushin）**
- 否定的な扱い: 心を空にすることは、判断力や意識の放棄と映る。
- 肯定的な扱い: 沢庵宗彭『不動智神妙録』では、心がどこにも止まらない状態が最高の境地とされる。武蔵『五輪書』空の巻でも、空を知ることが道を知ることとされる。
- 両者の関係: `段階的変容`。意識的修練を経て、意識を手放す段階に至る。
- 語りの限界: 「無心」を言語で定義すること自体が、無心の状態と矛盾する。
- 出典: [Wikipedia: Mushin](https://en.wikipedia.org/wiki/Mushin_(mental_state)), [Britannica: Takuan Sōhō](https://www.britannica.com/biography/Takuan-Soho), 宮本武蔵『五輪書』空の巻, 沢庵宗彭『不動智神妙録』

## B. 横断比較表

| 領域 | 概念 | 否定的扱い | 肯定的扱い | 権力的扱い | 関係類型 | 語りの限界 |
|------|------|-----------|-----------|-----------|---------|-----------|
| D01 | ゼロ / 空集合 | あり | あり | なし | レベル差 | 小 |
| D02 | 絶対零度 / 零点エネルギー | あり | あり | なし | 同時的共存 | 中 |
| D03 | 化学のゼロ基準 | あり | あり | なし | レベル差 | 中 |
| D04 | 絶滅 / ニッチ空白 | あり | あり | なし | 段階的変容 | 小 |
| D05 | 標高ゼロ面 | あり | あり | なし | レベル差 | 中 |
| D06 | 初期宇宙 / 特異点 / 真空 | あり | あり | なし | 学派依存 | 大 |
| D07 | binary `0` | あり | あり | なし | レベル差 | 小 |
| D08 | 静止電位 | あり | あり | なし | レベル差 | 小 |
| D09 | quiescence / autophagy | あり | あり | なし | 同時的共存 | 小 |
| D10 | 免疫寛容 | あり | あり | なし | レベル差 | 小 |
| D11 | placebo | あり | あり | なし | レベル差 | 小 |
| D12 | 裸地 / 一次遷移 | あり | あり | なし | 段階的変容 | 小 |
| D13 | 非存在 / 無 / 空 | あり | 一部のみ | なし | 片方のみ・同時的共存・学派依存 | 大 |
| D14 | 欠乏欲求 | あり | あり | なし | 段階的変容 | 小 |
| D15 | 余白 / 間 | あり | あり | なし | 学派依存 | 中 |
| D16 | アーカイヴの沈黙 / Year Zero | あり | 一部のみ | あり | 段階的変容・片方のみ | 大 |
| D17 | zero morpheme | あり | あり | なし | 学派依存 | 大 |
| D18 | anomie | あり | 見つからず | なし | 片方のみ | 中 |
| D19 | negative capability / 沈黙 | あり | あり | なし | レベル差・同時的共存 | 中 |
| D20 | state of nature / nullity / terra nullius | あり | 一部のみ | あり | 学派依存・レベル差・片方のみ | 大 |
| D21 | ゼロ利潤 / ゼロサム | あり | あり | なし | レベル差 | 中 |
| D22 | ゼロベース予算 | あり | あり | あり | 同時的共存 | 中 |
| D23 | 不均衡 / ZPD / deficit model | あり | あり | あり | 段階的変容 | 中 |
| D24 | 空 / 否定神学 / ケノーシス / ツィムツーム | あり | あり | なし | 学派依存・同時的共存 | 大 |
| D25 | liminality / terra nullius | あり | 一部のみ | あり | 段階的変容・片方のみ | 大 |
| D26 | rest / silence | あり | あり | なし | 同時的共存 | 中 |
| D27 | 建築的空所 | あり | あり | なし | レベル差 | 小 |
| D28 | empty space / poor theatre | あり | あり | なし | 同時的共存 | 小 |
| D29 | criticality / edge of chaos | あり | あり | なし | 同時的共存 | 大 |
| D30 | 初心 / 守破離 / 無心 | あり | あり | なし | 段階的変容 | 中 |

## C. 仮説を支持するデータ

1. D11 `placebo` は、成分の欠如がそのまま比較基準として機能する例であり、`何もない` が方法論上の足場になる。
2. D17 `zero morpheme` は、表面に何も現れないことが文法体系の差異を担う例で、`不在が構造を支える` という支持データになっている。
3. D23 `ZPD` と認知的不均衡は、まだできないことが学習の足場になるという点で、欠如の生成的側面を示す。
4. D26 音楽の沈黙は、音の欠如が拍節・期待・聴取枠組みを成立させる点で、単なる空白ではない。
5. D30 `初心` は、未熟さが一回限りの不足ではなく、継続的刷新の条件として再評価される点で、仮説の「足場」イメージに近い。
6. D24 `ケノーシス` は、全能の放棄（自己空虚化）がそのまま受肉と救済の条件になる構造を示す。「持つこと」の放棄が「与えること」を可能にするという反転は、欠如が生成的条件になるという仮説の最も鮮明な事例の一つである。
7. D24 `ツィムツーム` は、神の自己収縮による不在の創出が有限な世界の存在条件になるという構造を示す。不在空間の意図的生成が、被造物の成立に先行するという点で、欠如が構造的前提になる仮説を強く支持する。
8. D30 `無心` は、意識を手放すことが最高の技芸的境地になるという構造を示す（沢庵宗彭『不動智神妙録』、宮本武蔵『五輪書』空の巻）。意識の放棄という欠如が、意識的制御より高次の能力を開くという点で、仮説の足場イメージを補強する。

## D. 仮説に反するデータ

1. D16 `Year Zero / Stunde Null` は、ゼロ宣言が歴史の切断と暴力のレトリックに転じる事例であり、足場というより支配装置である。Kiernan (*The Pol Pot Regime*, 2002) と Chandler (*A History of Cambodia*, 4th ed., 2008) による一次的記録によって、この断絶宣言が実際に何を破壊し何を温存したかが詳細に示されており、反証の記録的根拠は強固である。
2. D20 `terra nullius` は、「空白」の宣言が排除と収奪を正当化する典型例で、仮説に対する強い反証である。オーストラリア最高裁 Mabo v Queensland (No 2) [1992] HCA 23 は、この「空白」の法的虚構性を司法が公式に認定した事例であり、権力的ゼロへの対抗記録としても位置づけられる。
3. D18 `anomie` は中心文脈で肯定的扱いが見つからず、ゼロ概念が生成的足場になるとは言いがたい。
4. D03 と D05 のゼロは存在論的原点ではなく、比較のための参照規約に近い。
5. D29 は単一の標準的ゼロ概念を持たず、`原点` より `境界` に近い。そもそもこの調査枠にうまく入らない可能性がある。
6. D13 パルメニデスは、非存在を思考不能とみなし、`欠如が足場になる` という方向に乗らない。

## E. 判定不能なデータ

1. D06 の初期宇宙は、起点であると同時に理論破綻点でもあり、`原点` と呼んでよいか保留が必要である。
2. D17 `zero morpheme` は、現実に存在するのか分析上の便法なのか未決着である。
3. D24 の概念群（`空`・否定神学・ケノーシス・ツィムツーム）は、v3 で概念数が2から4に増え、個別の出典が固定された。ただし、仏教・キリスト教・ユダヤ・イスラームの伝統を横断して「同一構造」とみなすことには粗さが残る。ケノーシスとツィムツームは `欠如が条件になる` 仮説と整合が高いが、異なる神学体系内での機能を同列に扱う際は注意が必要である。
4. D30 `守破離` は概念として有効で、直接出典（川上不白『不白筆記』1794・世阿弥『風姿花伝』）が v3 で特定された。ただし、茶道・武道・能楽にまたがる出典系譜の統一性については留保が残る。`無心` は出典（沢庵宗彭・宮本武蔵）が固定され、C節支持データとして移行可能な水準に達したが、定義の言語化が状態と矛盾するという内在的困難は残る。

## F. 三角測量の暫定評価

### 1. 30領域のゼロ概念に共通構造はあるか

ある。ただし単一の「原点」より、次の機能群として見たほうが安定する。

- 参照面を作る群: D01, D03, D05, D07, D08, D10, D21, D22
- 生成的空白を作る群: D04, D09, D12, D23, D26, D27, D28, D30
- 否定が開示条件になる群: D13, D15, D19, D24（D24 はケノーシス・ツィムツームを含め4概念で最も多様。特にケノーシス・ツィムツームは欠如が構造的条件になる仕組みが出典上明確で、この群の記録的根拠を強化した）
- 主に病理・破綻として現れる群: D16, D18, D20
- 境界的で収まりが悪い群: D06, D29

### 2. v2 の4群分類は妥当か

概ね妥当だが、`v3` では第5群として `権力的ゼロ` を追加したい。  
これは `空白の宣言` そのものが支配・排除・歴史切断に使われる群で、D16 `Year Zero`、D20 `terra nullius`、D25 の植民地主義的空白化が該当する。

### 3. 権力的ゼロは独立した群か

暫定的には `独立群` とみるほうがよい。  
理由は、ここではゼロが足場でも病理でもなく、`宣言行為` として制度的暴力を生むからである。  
v3 の一次資料追加（Mabo 判決・Kiernan・Chandler）により、この群の事例記録は強化された。Mabo 判決は権力的ゼロへの司法的対抗として独立した記録価値を持ち、`空白宣言の虚構性が制度内部から解体された事例` として群の内部構造を精緻化する余地がある。

### 4. 各領域の「語りの限界」に共通構造はあるか

ある。大きく3つに分かれる。

- そもそも語ると矛盾する型: D13, D24（D24 の無心・空・否定神学はいずれも「言語化が状態を破壊する」という内在的矛盾を持つ。ケノーシスも無限者の有限化を語る際に同様の構造が現れる）
- モデルが破綻して語れなくなる型: D06, D29
- 不在の意味が読み手や制度側に移って固定できない型: D16, D17, D19（D16 は Kiernan/Chandler により「何が実際に消された・温存されたか」の記録的補強が入り、「語れないように見えた」部分が歴史学的に部分回収されたケースでもある）

### 5. 仮説が言う「原点」とデータが示す構造の関係

部分的一致である。  
多くの領域で `欠如が条件になる` 事例は見つかったが、それは単一の原点というより、`参照面 / 閾値 / 開示操作 / 支配宣言` の複合体として現れている。  
したがって、データが強く示すのは `原点` より `境界装置` という見方である。

### 6. 信頼度と次に調べるべきこと

- 信頼度: `中高`
- 理由: 30領域の俯瞰としては成立しており、v3 での一次資料追加（D16: Kiernan/Chandler/Judt、D20: Mabo 判決・Arendt・Agamben、D24: ケノーシス→SEP・ツィムツーム→SEP Kabbalah、D30: 世阿弥/川上不白/沢庵宗彭/宮本武蔵）により、最も出典が薄かった領域の根拠が補強された。ただし、D24 の異なる神学伝統を横断した比較の粗さ、D29 の調査枠適合性、D25 の terra nullius（D20 との重複整理）は未解決である。

次に調べるべきこと:

1. `権力的ゼロ` の独立事例をさらに集める（Mabo 以外の「空白宣言の法的解体」事例が候補になりうる）
2. D29 をこの調査に含め続けるか再判定する
3. D24 の4概念を「否定が開示条件になる」という単一構造で統一することの神学的妥当性を検討する
4. D18 のような `片方のみ` 領域を増やして、本当に30領域すべてが両義的なのかを再点検する
5. D25 の `terra nullius` を D20 と分離して記述することの意義を再確認する（人類学的文脈と法学的文脈の差異）
