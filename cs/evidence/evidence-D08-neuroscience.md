---
file_id: EV-D08
domain: neuroscience
domain_id: D08
title: "神経科学：論ごとの照合の記録"
last_updated: 2026-11-08
status: "照合中（#73）"
source_archive: "evidence/archive/pre-rerun-20260407/evidence/evidence-D08-neuroscience.md"
---

# 神経科学：論ごとの照合の記録

この記録の文責は Claude にある。pjdhiro はここで扱う原典を読んでいない。本人の言葉が出てくる所は、Claude の要約への感想である。

神経科学の論では、対立や衝突が過程の中に組み込まれている形が多い。予測と入力のずれ、行動の出口を奪い合う経路どうしの競争、興奮と抑制の律動、生き延びる制約に合わないものが捨てられること、がその例である。衝突の結末も一つではない。ずれを減らすように内部の推定が組み替わる場合（統合）、競争の片方が勝つ場合、二つの仮説を行き来し続ける場合（両眼視野闘争）、偽の推論が自分を養って固まる場合（妄想、うつ）が、原典の中に並んで書かれている。

今の公開報告（`pjdhiro/assets/creation/domains/ja/md/domain-D08-neuroscience.md`、2026-03-18 に LLM が生成）は、このうち良い側だけを5段階に当てている。衝突は「波」に、選ぶ仕組みは「縁」に当て、病理や脅威は「健常な神経系を前提」「安全でなければ創造は始まらない」として過程の外に置いている。この記録は、報告が取り上げた 11 の論を、一次情報で確かめ直したものである。報告の本文はまだ直していない。

History：2026-04-07 までの本文は [退避版](archive/pre-rerun-20260407/evidence/evidence-D08-neuroscience.md) にある。退避版の判定（Accept など）は、この記録の照合の状態の根拠にしていない。

## 読み方

- 照合の状態は四つで書く。本文照合済（原典の本文を読み、該当箇所を控えた）・要旨照合済（要旨まで）・二次資料のみ（精読ノートなど）・未照合（記憶、または書誌だけ）。
- 今の報告への判定は六つで書く。一致・言い過ぎ・取り違え・帰属違い・付け足し・未判定。
- 「ja 98 行」は日本語版の行、「en」は英語版、「pres」はプレゼン版、「退避版」は上の History のファイルを指す。
- 物理寄りの主張には、教科書（分野で確立した記述）・研究の一線（争いがある、または一つの研究が示した）・Claude の読み替え のどれかを添える。
- PMC の全文 XML で読んだものは、頁でなく節の名前を控えた。
- 5段階の定義はまだ決まっていない（`docs/cs-review/README.md` の「判断が要ること」1）。どの段に当てるかの判定は、定義が決まるまで保留にする。この記録では、対立・衝突・統合・新たな安定の読みだけを書く。

## 一面の表

| 論 | 対立（何と何が） | 衝突（どうぶつかるか） | 統合と新たな安定、または至らずにどう終わったか | 微細さ | 照合の状態 |
|---|---|---|---|---|---|
| 予測符号化（Rao & Ballard 1999） | 上位の領域が送る予測と、下位の領域の実際の活動 | 予測と入力のずれ（残差）が、順方向の結合で上位へ送られる | ずれを小さくするように推定と結合の重みが組み替わる。自然画像で学ぶと、単純細胞に似た受容野と、受容野の外の刺激で応答が下がる性質（エンドストッピング）が育つ | 視覚皮質の階層のモデル | 本文照合済（pp.79–80・84） |
| 自由エネルギー原理（Friston 2010） | 生物と、無秩序に向かう傾向（驚き） | 感覚入力が予測と食い違う | 二つの道で驚きを減らす。内部の推定を変えるか、行為で感覚入力を変えるか。驚きの少ない状態にとどまる生物が残る | 細胞から個体まで | 本文照合済（pp.127–129・132）。研究の一線 |
| 両眼視野闘争（Clark 2013 が引く Hohwy ら 2008） | 左右の眼に入る別々の像を説明する二つの仮説 | どちらの仮説も入力の全部を説明できない | 統合に至らない。二つの半安定な状態を行き来し続ける。至らない条件として「一つの場所には一つの物しかない」という強い事前の想定が挙がっている | 知覚・秒 | 本文照合済（Clark pp.185・196） |
| 妄想と幻覚（Clark 2013 §4.2） | 予測と、予測誤差の重み（精度） | 精度の重みづけが狂う | 悪い統合。偽の推論が自分に返って養い合い、妄想と幻覚が固まる | 一人・月〜年 | 本文照合済（Clark p.197） |
| 内受容的推論（Seth & Friston 2016） | 身体の状態についての予測と、身体から上がる信号 | 内受容の予測誤差 | 下りる予測が自律神経の反射を動かして身体を予測に合わせ、上がる信号が予測を直す。循環する因果で恒常性が保たれる | 身体と脳・秒〜日 | 本文照合済（PMC5062097、節「Interoceptive inference」） |
| うつと疲労（Seth & Friston 2016・Barrett & Simmons 2015） | 事前の予測と、雑音の多くなった身体の信号 | 信号の重みが下がり、予測に頼るほど誤差が大きくなる | 暴走から固着へ。正のフィードバックが回り、ある点で疲労・うつに傾く。傾く点は、精度を担う仕組みの個人差と領域間のつながりで変わる、と書かれている | 一人・月〜年 | 本文照合済（PMC5062097 節「Depression and fatigue」、PMC4731102 節「Implications for illnesses」） |
| 構成された情動（Barrett 2017） | 過去の経験から用意された、競合する複数のシミュレーション | 今の入力に最も似ているのはどれかを競う | 一つが選ばれて実行され、予測誤差で補われて知覚や情動の事例になる。勝ち負けと補い合いの両方がある | 一人・秒 | 本文照合済（PMC5390700、節「An internal model is predictive, not reactive」「The theory of constructed emotion」） |
| 前頭前野の統合理論（Miller & Cohen 2001） | 習慣で強い経路と、課題に合う弱い経路（ストループ課題の文字と色） | 行動の出口を奪い合う。勝つのは支えの強い経路 | 片方の勝利。前頭前野が目標を保ち続け、そのバイアスで弱い経路が勝つ。抑制は、競争に負けた側に起きる結果として書かれている | 一人・秒、課題 | 本文照合済（pp.167・170–171・186） |
| グローバル神経ワークスペース（Dehaene & Changeux 2011） | 局所で処理される多くの内容 | ワークスペースへの入場を競う。自発の点火が外からの刺激の点火を妨げることもある | 点火した一つの内容が脳の全体で共有される。反響が足りない弱い刺激は、点火に至らずに消える（消散）。分かれ目は、自分で続く反響を集められるか | 全脳・数百ミリ秒 | 二次資料のみ（精読ノート） |
| 夢（Nir & Tononi 2010） | 外向きのネットワークと既定モードネットワーク。夢は下（感覚）から生まれるか上（願いや記憶）から生まれるか、の二説 | 二つのネットワークの拮抗は「可能性」として書かれている | 原典は、二分そのものが誤りかもしれず、夢は多くの領域で同時に立ち上がる大域的なアトラクタかもしれない、と書く。そのうえで想像に近いという証拠を並べる | 一晩・分 | 本文照合済（PMC2814941、節「Are dreams more like perception or imagination?」） |
| ポリヴェーガル理論（Porges 2009） | 系統的に新しい回路（社会的関与）と、古い回路（闘争・逃走、不動化） | 環境の手がかりを、意識に上らずに安全・危険・命の危険に分ける（neuroception） | 片方の勝利。新しい回路が働かなくなると古い回路が立ち上がる（Jackson の解体の原理）。安全と判断されれば、新しい回路が古い回路を抑える | 一人と対人・秒〜年、系統発生 | 本文照合済（PMC3108032、節「Consistency with Jacksonian dissolution」「Neuroception」） |
| エナクティヴィズム（Varela, Thompson & Rosch 1991） | 生物の自己組織と、生存・生殖の制約 | 制約に合わないものが捨てられる | 最適化でなく「満足できるところで足りる」選び（satisficing）が続き、多様な生き方が残る（自然の漂流） | 生物と環境・進化の時間 | 本文照合済（pp.186–188） |
| STDP（Bi & Poo 1998） | 前のニューロンと後ろのニューロンの発火の順序 | 後ろが 20 ms 以内に後で発火すれば増強、前で発火すれば減弱 | 相対的な時刻が結合の変化の向きを決め、結合の強さとして残る。有意な増強は、初めの強さが低いシナプスでだけ起きた | シナプス・ミリ秒 | 要旨照合済。教科書 |
| 同期による通信（Fries 2015） | 一つの受け手に届こうとする複数の入力群 | 興奮の短い窓と長い抑制の律動 | 片方の勝利。受け手の律動と位相が合った入力が通り、ほかの入力は抑制で締め出される | 神経群・ミリ秒 | 本文照合済（PMC4605134、節「The essence of CTC」「Gamma-band coherence renders communication selective」）。研究の一線 |
| 神経雪崩（Beggs & Plenz 2003） | 情報を伝える要求と、網の安定を保つ要求 | 活動が次の電極へ枝分かれする比（分枝比） | 分枝比が 1 の近くで両方が満たされうる。1 を超えると暴走、下回ると活動が消える | 局所回路・ミリ秒 | 要旨照合済（暴走の側は精読ノートのみ）。研究の一線 |

## 論ごとの節

### 1. 予測符号化（Rao & Ballard 1999）

- 要旨：視覚皮質の上位の領域が下位の活動を予測して逆方向に送り、下位は予測と実際の活動のずれ（残差）を順方向に送る、というモデル。自然画像で学ばせると単純細胞に似た受容野が育ち、残差を運ぶ一部のニューロンにエンドストッピングが出た。
- 確かめ先：Rao, R.P.N. & Ballard, D.H. (1999). Predictive coding in the visual cortex. *Nature Neuroscience* 2(1), 79–87. DOI: [10.1038/4580](https://doi.org/10.1038/4580)。manifest D08-S01（`raw-confirmed`）。手元の PDF（9 頁）。書誌は Crossref・PDF の表紙・wiki で一致した。
- 読んだ頁：p.79（要旨。"feedforward connections carry the residual errors between the predictions and the actual lower-level activities"）、p.80（"top-down information influences lower-level estimates, and bottom-up information influences higher-level estimates"）、p.84（図 5 の説明。逆方向の結合を切るとエンドストッピングが消える）、p.85（予測符号化の考えはほかの領域にも当てはまるかもしれない、という結び）。
- 照合の状態：本文照合済。
- 対立・衝突・統合の読み：原典に書いてあるのは、予測とずれが同時に階層を行き来し、ずれを小さくするように推定と重みが変わること（p.80）。予測と入力を「対立」と呼ぶのは Claude の読み替えである。原典は対立の語を使わず、ずれを減らす計算として書いている。
- 今の報告から直したこと：ja 94 行の「階層的なベイズ推論によって予測誤差を最小化する（Rao & Ballard 1999, Friston 2010）」は一致（Rao & Ballard は事後確率を最大にする推定として書く、p.80）。pres 47 行は Rao & Ballard を提唱者の欄に入れ、ja 72 行は入れていない（版の食い違い、低）。

### 2. 自由エネルギー原理（Friston 2010）と予測処理（Clark 2013）

- 要旨：生物は無秩序に向かう傾向に抗う。自由エネルギーは驚き（負の対数確率）の上限なので、自由エネルギーを減らせば驚きも減る。減らす道は、内部の推定を変えることと、行為で感覚入力を変えることの二つ。精度は、下からの予測誤差と上からの予測の相対的な影響を決める。Clark 2013 は、この枠組みを知覚・行為・注意の一つの説明として紹介し、両眼視野闘争・妄想・「暗い部屋の問題」を論じる総説である。
- 確かめ先：
  - Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience* 11(2), 127–138. DOI: [10.1038/nrn2787](https://doi.org/10.1038/nrn2787)。著者の UCL のページの PDF（https://www.fil.ion.ucl.ac.uk/~karl/The%20free-energy%20principle%20A%20unified%20brain%20theory.pdf、12 頁、表紙の書誌が一致）。manifest に行が無い（下の「台帳に足す行の案」）。
  - Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences* 36(3), 181–204. DOI: [10.1017/S0140525X12000477](https://doi.org/10.1017/S0140525X12000477)。manifest D08-S13 の OA の URL（Cambridge Core の PDF、73 頁。論評と応答を含む）。
- 読んだ頁：Friston p.127（"resist a natural tendency to disorder"）、p.128（自由エネルギーは驚きの上限）、p.129（"they can change sensory input by acting on the world or they can change their recognition density"）、p.132（精度が予測誤差と予測の相対的な影響を決める）。Clark p.185（両眼視野闘争。"No single hypothesis accounts for all the data, so the system alternates between the two semi-stable states"）、p.193（暗い部屋の問題）、p.196（「一つの場所には一つの物」という超事前分布）、p.197（"false inferences spiral and feed back upon themselves. Delusion and hallucination then become entrenched"）。
- 照合の状態：本文照合済。自由エネルギー原理は争いのある理論なので、研究の一線として扱う。
- 対立・衝突・統合の読み：
  - 原典に書いてあること：予測と入力のずれは、推定を変えるか行為で入力を変えるかで減らされる（Friston p.129）。ずれが減らない場合も書かれている。両眼視野闘争では二つの仮説を行き来し（Clark p.185）、精度が狂うと偽の推論が固まる（p.197）。
  - Claude の読み替え：両眼視野闘争は、統合に至らずに片方の勝利が入れ替わり続ける形、つまり波として揺らいでいる形に読める。妄想は、ずれを包んだつもりで固まった悪い統合に読める。どちらも、この理論の中では例外でなく、同じ仕組みの別の結末として書かれている。
- 今の報告から直したこと：
  - ja 100 行「この予測-誤差のサイクルは、シナプスレベルから生物体全体まで同型的に作動するとされ、フラクタル的な構造を持ちます」：未判定。Friston 2010 は階層の各段で同じ計算を置くが、「フラクタル」の語は読んだ範囲に無い。退避版 66 行の scale の欄から来ている。言い過ぎの見込み（中）。
  - ja 98 行・pres 67 行・en 95 行「精度による重みづけが縁」：未判定（定義待ち）。精度は、原典ではどのずれを重く見るかを決める量（Friston p.132）。報告自身も「制御パラメータとしての性格が強い」と書いている。縁を接続や選択として読む形で、README が挙げる読み方のずれに当たる（中）。
  - en 49 行「ふだんは捨てられる誤差を問いとして拾う考えは、精度の低い予測誤差がふだん捨てられることに対応する」：付け足し。欠損駆動思考の旧い定義（「棄却される誤差」）を予測処理に結んでいる。報告に欠損駆動思考・抱持を持ち込まないという決め（README「規約で決めたこと」）と合わない（高）。
  - 病理の扱い：ja 258 行（§7.5）は「本調査は健常な神経系を前提としています」と書き、精神疾患を次の課題に置く。Clark 2013 §4.2 は妄想と幻覚を同じ枠組みの結末として書いている（p.197）。過程の外に置いている形で、中心の問いとずれる（中）。

### 3. 内受容的推論（Seth & Friston 2016、Barrett & Simmons 2015）

- 要旨：身体の状態は、深い生成モデルから下りる予測に従う自律神経の反射で整えられる。予測は身体を動かし、身体からの信号は予測を直す。うつと疲労は、雑音の多い信号と予測への頼りすぎが作る正のフィードバックとして説明されている（推測の段階の仮説と、原典自身が書く）。
- 確かめ先：
  - Seth, A.K. & Friston, K.J. (2016). Active interoceptive inference and the emotional brain. *Phil. Trans. R. Soc. B* 371(1708), 20160007. DOI: [10.1098/rstb.2016.0007](https://doi.org/10.1098/rstb.2016.0007)。PMC5062097（Europe PMC の全文 XML）。
  - Barrett, L.F. & Simmons, W.K. (2015). Interoceptive predictions in the brain. *Nature Reviews Neuroscience* 16(7), 419–429. DOI: [10.1038/nrn3950](https://doi.org/10.1038/nrn3950)。PMC4731102（NCBI の全文 XML、著者稿）。
  - Craig, A.D. (2009). How do you feel — now? *Nature Reviews Neuroscience* 10(1), 59–70. DOI: [10.1038/nrn2555](https://doi.org/10.1038/nrn2555)。manifest D08-S02（`blocked-access`）。書誌だけ Crossref で確かめた。
  - manifest は Seth & Friston 2016・Barrett & Simmons 2015 を D08-S02 の代わりとして notes に書くが、行は無い（下の案）。
- 読んだ節：Seth & Friston の要旨、「Interoceptive inference」（"there is a circular causality, where neuronally encoded predictions about bodily states engage autonomic reflexes ... while interoceptive signals inform and update these predictions"）、「Depression and fatigue」（"this process could set up a positive feedback loop ... At some point, the ensuing dyshomoeostasis will tip over into fatigue and sickness behaviour"）。Barrett & Simmons の「Interoceptive sensation is largely prediction」「Implications for illnesses」（"This prediction error may then be ignored"、"the system tips into depression"）。
- 照合の状態：Seth & Friston 2016・Barrett & Simmons 2015 は本文照合済。Craig 2009 は未照合（書誌だけ）。
- 対立・衝突・統合の読み：原典では、予測と身体の信号は互いに直し合う循環で、片方だけが正しいとは書かれていない。うつの説明では、予測が誤差に勝ち続けることがかえって誤差を大きくし、ある点で別の状態に傾く。Claude の読み替えでは、これは統合でなく、片方の勝利が暴走を経て固着に至る形である。傾く点が個人差で変わるという記述は、至るか至らないかの分かれ目の一つの例になる。
- 今の報告から直したこと：
  - ja 104 行「前部島皮質がこれらの感覚の統合と意識化の中枢とされています（Craig 2009）」：未判定（Craig は未照合）。Seth & Friston は前部島皮質を、内受容の階層の上にある内臓運動の領域の一つとして書く。「中枢」の言い方は読んだ範囲に無い（低）。
  - ja 104 行「自己感や身体所有感は…統合的な予測から生じる（Seth & Tsakiris 2018）」：未照合。
  - ja 108 行は島皮質での統合を縁に当て、pres 48 行は全段階、ja 73 行の表は場・波・渦に当てる。版の食い違い（中）。
  - en 67 行「この内受容の予測誤差が、予測と現実のずれを欠けとして受け取る主観的経験の身体的な基盤」：付け足し。欠損の定義に結んでいる（高。2 の en の項と同じ出どころ）。

### 4. 構成された情動（Barrett 2017）

- 要旨：脳は過去の経験を手がかりに、今の入力に何が最も似ているかに答える、競合する複数のシミュレーションを用意する。その中から一つを選んで実行し、予測誤差が小さくなると予測が知覚や経験になる。情動の概念が使われたとき、その分類が情動の一つの事例になる。古典的な情動の理論（刺激から反応への説明）はすべて疑わしい、と原典は書く。
- 確かめ先：Barrett, L.F. (2017). The theory of constructed emotion: an active inference account of interoception and categorization. *Social Cognitive and Affective Neuroscience* 12(1), 1–23. DOI: [10.1093/scan/nsw154](https://doi.org/10.1093/scan/nsw154)（Crossref では 2016 年のオンライン公開）。PMC5390700（全文 XML）。報告が挙げる書籍 Barrett (2017) *How Emotions Are Made* は manifest D08-S03（`blocked-access`、OA 版なし）。論文は書籍と同じ理論を述べるので、書籍の代わりに論として読んだ。
- 読んだ節：「An internal model is predictive, not reactive」（"the brain prepares multiple competing simulations ... a brain uses pattern completion to decide among simulations and implement one of them"、"all classical theories of emotion are called into question"）、「The theory of constructed emotion」（"Once prediction error is minimized, a prediction becomes a perception or an experience"）。
- 照合の状態：論文は本文照合済。書籍は未照合。
- 対立・衝突・統合の読み：原典に書いてあるのは、競合するシミュレーションの中から一つが選ばれること、選ばれた予測が誤差で補われること。Claude の読み替えでは、ここには片方の勝利（選ばれる）と、予測と入力の補い合い（誤差で直される）の二つが重なっている。どちらを渦に当てるかは定義待ち。
- 今の報告から直したこと：
  - ja 110 行の見出し「情動の構成理論（Barrett, Damasio, LeDoux）」、ja 112 行の Damasio（1994）・Frijda（1986）：帰属違い。Barrett は古典的な情動の理論を疑うと書いており（上の節）、ソマティック・マーカー仮説や Frijda の行動傾向の説を同じ「構成理論」に並べると、Barrett の問いを外すことになる（中）。Damasio と Frijda がどの立場かは未照合（記憶）。
  - ja 116 行「縁に対応する記述が薄い」：言い過ぎの反対の向き。原典には「競合するシミュレーション」がはっきり書かれている。衝突を縁とする言い換え（pjdhiro の「安定－変化－衝突－統合－新たな安定」）に照らすと、縁に当たりうる記述が見落とされている（中。判定は定義待ち）。

### 5. 前頭前野の統合理論（Miller & Cohen 2001）

- 要旨：認知制御は、目標とその手段を表す活動を前頭前野が保ち続けることから生まれる。その活動がバイアス信号を送り、脳の中の経路の競争を、課題に合う側へ傾ける。
- 確かめ先：Miller, E.K. & Cohen, J.D. (2001). An integrative theory of prefrontal cortex function. *Annual Review of Neuroscience* 24, 167–202. DOI: [10.1146/annurev.neuro.24.1.167](https://doi.org/10.1146/annurev.neuro.24.1.167)。manifest D08-S04 の MIT の著者ページの PDF（39 頁、表紙の書誌が一致）。
- 読んだ頁：p.167（要旨）、p.170（"processing in the brain is competitive: Different pathways ... compete for expression in behavior, and the winners are those with the strongest sources of support"）、p.171（"the constellation of PFC biases—which resolves competition"）、p.186（"inhibition occurs because of local competition among conflicting representations"）。
- 照合の状態：本文照合済。精読ノート（S04）は pp.167–172 だけを読んでいる。ノートの引用のうち確かめたもの（p.170・p.171）は本文と一致した。
- 対立・衝突・統合の読み：原典の芯は競争である。強い習慣の経路と弱いが課題に合う経路が出口を奪い合い、前頭前野のバイアスが勝ち負けを決める（p.170–171）。Claude の読み替えでは、これは統合でなく片方の勝利で、負けた側は抑えられる。原典は抑制を独立の仕組みでなく、競争の結果として書いている（p.186）。
- 今の報告から直したこと：
  - ja 124 行「反応抑制は『反射的に処理せず保持する』機能であり、これは縁が持つ『まだ決まっていない状態を保持する』という構造的特徴と対応します」：取り違え。Miller & Cohen が保つのは「まだ決まっていない状態」でなく目標と規則で、その目的は競争に決着をつけることである（p.171・p.186）。「反射的に処理せず保持する」は抱持の旧い言い方で、調べた跡（phase5 の 70 行「縁（反応抑制=抱持）」、phase7 のパターン5）から本文に入った（高）。
  - ja 120 行「反応抑制は rIFG・preSMA・STN のネットワークが担います（Aron et al. 2014）」を、表（ja 75 行）は Miller & Cohen の論として「縁・強い対応」にしている：帰属違い。反応抑制のネットワークは Aron らの論で、Miller & Cohen の論の芯ではない（中）。Aron 2014 は未照合。
  - 版の食い違い：ja 75 行は縁だけ、pres 50 行は波・縁・渦・束。

### 6. グローバル神経ワークスペース（Dehaene & Changeux 2011）

- 要旨：局所で処理された情報が、長い軸索でつながる広い網に「点火」して入ると、脳の多くの系に共有され、報告できる意識的な経験になる。弱い刺激は点火に至らず消える。
- 確かめ先：Dehaene, S. & Changeux, J.-P. (2011). Experimental and theoretical approaches to conscious processing. *Neuron* 70(2), 200–227. DOI: [10.1016/j.neuron.2011.03.018](https://doi.org/10.1016/j.neuron.2011.03.018)。manifest D08-S05 の OA の URL（cell.com）は、今回はブラウザの確認画面が返り、取れなかった。精読ノートが挙げる著者の公開版（unicog.org）も、今は PDF でなく HTML が返る。
- 照合の状態：二次資料のみ（精読ノート `cs/knowledge/source-notes/D08/D08-S05_dehaene-changeux-2011.md`）。ノートの引用は原典で確かめていない。
- 対立・衝突・統合の読み（ノートの引用から）：多くの内容がワークスペースに入ろうとし、自発の点火が外からの刺激の点火を妨げることもある（ノートの主張 5）。弱い刺激の波は、自分で続く反響を集められずに消える（ノートの主張 8）。Claude の読み替えでは、点火は一つの内容の勝利と全体での共有で、消える刺激は統合に至らない消散の形、分かれ目は反響が自分で続くかどうか、になる。ノートは統合失調症・麻酔・昏睡も同じ理論の検証の場として挙げる。
- 今の報告から直したこと：
  - ja 76 行「閾値条件・部分的対応」と pres 51 行「横断的（閾値条件）・強い対応」：版の食い違い（高。下の「版の間の食い違い」）。
  - ja 132 行「DMN が漂っている状態で活性化することから、場との対応が仮説として考えられます」：付け足し。DMN（Raichle et al. 2001）は Dehaene & Changeux の論の芯でない（低）。
  - ja 128 行の統合情報理論（Tononi 2008）：未照合。似た論文の Tononi 2004（D08-S12）は manifest にあるが、報告は 2008 を引いている。

### 7. 夢（Hobson ら 2000 と Nir & Tononi 2010）

- 要旨（Nir & Tononi 2010）：夢と覚醒の経験の似ている所と違う所を並べ、睡眠中の意識の水準を決めるもの、環境から切り離される理由、夢が知覚と想像のどちらに近いか、を論じる総説。夢は想像に近い、という証拠を挙げる。
- 確かめ先：
  - Nir, Y. & Tononi, G. (2010). Dreaming and the brain: from phenomenology to neurophysiology. *Trends in Cognitive Sciences* 14(2), 88–100. DOI: [10.1016/j.tics.2009.12.001](https://doi.org/10.1016/j.tics.2009.12.001)。PMC2814941（NCBI の全文 XML、著者稿）。manifest D08-S06 の notes に代わりとして書かれている。
  - Hobson, J.A., Pace-Schott, E.F. & Stickgold, R. (2000). Dreaming and the brain: toward a cognitive neuroscience of conscious states. *Behavioral and Brain Sciences* 23(6), 793–842. DOI: [10.1017/S0140525X00003976](https://doi.org/10.1017/S0140525X00003976)。manifest D08-S06（`blocked-access`）。書誌だけ Crossref で確かめた。
- 読んだ節：「Phenomenology of dreams」の記憶の項（"a dream is not like an episode of life being 'replayed'"）、既定モードネットワークの項（"the putative antagonism between externally oriented cortical networks and internally oriented, default-mode networks"）、「Are dreams more like perception or imagination?」（Hobson の AIM モデルを、脳幹から生じる信号が視覚皮質を興奮させ、上位の領域が後でまとめる説として紹介。"it is possible that such a dichotomy is misguided, and dreams may be best conceptualized as global attractors"）。
- 照合の状態：Nir & Tononi 2010 は本文照合済。Hobson 2000 は未照合。
- 対立・衝突・統合の読み：原典が書く対立は、外向きの網と内向きの網の拮抗（可能性として）と、夢の生まれ方をめぐる二説（Hobson の下からと Freud の上から）である。原典は二分を誤りかもしれないとし、多くの領域で同時に立ち上がる形を候補に挙げる。予測と誤差の話は、読んだ範囲には出てこない。
- 今の報告から直したこと：
  - ja 136 行「夢は、外的入力が遮断された状態での内部生成モデルの活動として理解されています（Hobson et al. 2000）」：帰属違いの見込み。Nir & Tononi が紹介する Hobson の説は、脳幹からの信号を上位がまとめる下からの説で、生成モデルの語は使われていない。生成モデルとして夢を書くのは、後の Hobson & Friston の論文だと記憶している（未照合）。Hobson 2000 の本文は読めていないので、判定は「帰属違いの見込み」にとどめる（高）。
  - ja 136 行「睡眠中の記憶再生は、記憶の固定と予測モデルの更新に寄与すると考えられています（Nir & Tononi 2010）」：帰属違い。Nir & Tononi の読んだ範囲に、記憶の固定や予測モデルの更新の主張は無い。夢は人生の一場面の「再生」ではない、と書いている（高）。
  - ja 136 行「REM 睡眠中も予測的処理は作動し続け（Domhoff & Fox 2015）」：未照合。
  - 版の食い違い：ja 77 行「場・波・部分的対応」、pres 52 行「場・波・渦・強い対応」。

### 8. ポリヴェーガル理論（Porges 2009・2011）

- 要旨：自律神経系には、系統発生の順に並ぶ三つの反応の系がある。社会的なやりとり（有髄の迷走神経）、動員（闘争・逃走、交感神経）、不動化（無髄の迷走神経）。新しい回路は古い回路を抑えており、新しい回路が働かなくなると古い回路が立ち上がる（Jackson の解体の原理）。危険の手がかりは、意識に上らずに判断される（neuroception）。
- 確かめ先：
  - Porges, S.W. (2009). The polyvagal theory: new insights into adaptive reactions of the autonomic nervous system. *Cleveland Clinic Journal of Medicine* 76(Suppl 2), S86–S90. DOI: [10.3949/ccjm.76.s2.17](https://doi.org/10.3949/ccjm.76.s2.17)。PMC3108032（全文 XML、著者稿）。manifest に行が無い（下の案）。
  - Porges, S.W. (2011). *The Polyvagal Theory*. Norton. manifest D08-S07（`blocked-access`、書籍）。
  - Grossman, P. & Taylor, E.W. (2007). Toward understanding respiratory sinus arrhythmia. *Biological Psychology* 74(2), 263–285. DOI: [10.1016/j.biopsycho.2005.11.014](https://doi.org/10.1016/j.biopsycho.2005.11.014)。書誌だけ Crossref で確かめた。
- 読んだ節：「The polyvagal theory: three phylogenetic response systems」、「Consistency with Jacksonian dissolution」（"higher (ie, phylogenetically newer) neural circuits inhibit lower ... 'when the higher are suddenly rendered functionless, the lower rise in activity'"）、「Neuroception」（"if the environment is perceived as safe, inhibit the more primitive limbic structures that control fight, flight, or freeze behaviors"）。
- 照合の状態：Porges 2009 は本文照合済。書籍（2011）と批判（Grossman & Taylor 2007）は未照合（書誌だけ）。理論の神経解剖の細部には争いがあり、研究の一線として扱う。
- 対立・衝突・統合の読み：原典に書いてあるのは、三つの系が階層をなし、状況の判断で上下が入れ替わることである。Claude の読み替えでは、これは統合でなく片方の勝利の形で、脅威のもとで古い回路が勝つことも、安全のもとで新しい回路が勝つことも、どちらも適応の反応として過程の中に書かれている。節の見出しも「適応的・不適応的な生理状態」と並べている。
- 今の報告から直したこと：
  - ja 146 行「安全でなければ探索が起きず、創造的プロセスが始まらない」、en 73 行・121 行「安全が無ければ何も保持できない」「安全なしには創造できない、という発見は教育・臨床・組織設計に直接の含意を持つ」：付け足し。Porges 2009 の読んだ範囲に、創造や探索の前提条件としての安全の主張は無い。脅威への反応を過程の外に置く書き方で、中心の問い（良いこと以外との衝突を包んで進むか）と向きが逆になる。en は「発見」と書き、ja・pres より強い（高）。
  - ja 148 行「縁との対応は特に強く、社会的関与は『他者との境界で接し、影響し合う』構造そのものです」：言い過ぎ（中。判定は定義待ち）。
  - ja 144 行の三つの系の並べ方は、Porges 2009 と一致。
  - 版の食い違い：ja 78 行「場・縁」、pres 53 行「場・波・縁・渦・束」。

### 9. エナクティヴィズム（Varela, Thompson & Rosch 1991）

- 要旨：認知は、あらかじめ与えられた世界を表すことでなく、身体を持つ生物と環境との構造的カップリングの歴史の中で世界が立ち現れること（enaction）とする。進化も最適な適応でなく、生存と生殖の制約に合うものが残る「自然の漂流」として書き直す。
- 確かめ先：Varela, F.J., Thompson, E. & Rosch, E. (1991). *The Embodied Mind*. MIT Press. ISBN 0-262-72021-3。manifest D08-S08（`raw-confirmed`、手元の PDF は D14 と共用）。
- 読んだ頁：p.186（"selection discards what is not compatible with survival and reproduction"）、p.187（"satisficing (taking a suboptimal solution that is satisfactory) rather than optimizing"）、p.188（自然の漂流の三つの条件）。手元の PDF の文字は画像から起こしたもので、pdftotext で読んだ。頁は本の頁。
- 照合の状態：本文照合済（上の頁）。Thompson (2007)、Maturana & Varela (1980)、Allen & Friston (2018) は未照合（Allen & Friston は書誌だけ Crossref で確かめた。*Synthese* 195(6), 2459–2482、DOI: [10.1007/s11229-016-1288-5](https://doi.org/10.1007/s11229-016-1288-5)）。
- 対立・衝突・統合の読み：原典の対立は、生物の自己組織と、生存・生殖という制約である。合わないものは捨てられるが、選びは最適化でなく、続けられるものなら何でも通す広い濾し器として働く（p.187）。Claude の読み替えでは、ここは制約という良いこと以外とのぶつかりを含んだまま、多様さが残る形で、衝突が過程の中にある論に当たる。
- 今の報告から直したこと：
  - ja 154・156 行、pres 106 行「オートポイエーシスの『膜』（自己／非自己の境界）が縁」を、Varela ら 1991 の論として当てる：帰属違いの見込み。手元の PDF の本文を「membrane」で探すと、当たりが無かった（文字起こしの漏れの可能性は残る）。膜の話は Maturana & Varela（1980）や Varela ら（1974）のオートポイエーシスの論で、1974 年の論文は手元に PDF があるが画像だけで文字が取れず、確かめていない（中）。
  - ja 152 行「Allen & Friston（2018）により、自由エネルギー原理とエナクティヴィズムの理論的接続が示されています」：未照合。書誌は実在する。
  - en 81 行「この枠組みは、欠損がまず身体で感じられるという主張の哲学的な地盤を与える」：付け足し（高。2 の en の項と同じ出どころ。退避版 337 行の「欠損は身体的プロセスなしには生じない」から）。

### 10. STDP（Markram ら 1997、Bi & Poo 1998）

- 要旨（Bi & Poo 1998 の要旨）：培養した海馬のニューロンで、前後のニューロンの発火の相対的な時刻がシナプスの変化の向きと大きさを決めた。後ろのニューロンが前の活動の 20 ms 以内に後で発火すると長期増強、20 ms 以内に先に発火すると長期抑圧が起きた。有意な長期増強は、初めの強さが比較的低いシナプスでだけ起きた。
- 確かめ先：
  - Bi, G.-Q. & Poo, M.-M. (1998). Synaptic modifications in cultured hippocampal neurons: dependence on spike timing, synaptic strength, and postsynaptic cell type. *Journal of Neuroscience* 18(24), 10464–10472. DOI: [10.1523/JNEUROSCI.18-24-10464.1998](https://doi.org/10.1523/JNEUROSCI.18-24-10464.1998)。PMC6793365。NCBI からは要旨だけが取れた（本文は PDF だけで、出版社と PMC の PDF は自動取得の確認画面で取れなかった）。manifest に行が無い（下の案）。
  - Markram, H., Lübke, J., Frotscher, M. & Sakmann, B. (1997). Regulation of synaptic efficacy by coincidence of postsynaptic APs and EPSPs. *Science* 275(5297), 213–215. DOI: [10.1126/science.275.5297.213](https://doi.org/10.1126/science.275.5297.213)。manifest D08-S09（`blocked-access`）。書誌だけ Crossref で確かめた。
- 照合の状態：Bi & Poo 1998 は要旨照合済。Markram 1997 は未照合。STDP の現象そのものは教科書の記述として扱う。
- 対立・衝突・統合の読み：要旨に書いてあるのは、時刻の順序で変化の向きが決まることと、初めの強さで増強の起きやすさが違うことである。前後の発火を「対立」と呼ぶのは Claude の読み替えで、原典は相関した発火の時刻の差として書く。良い・悪いの区別は無く、増強も抑圧も同じ規則の二つの結果である。
- 今の報告から直したこと：
  - ja 162・168 行「この時間窓はおよそ±20-40ミリ秒」：取り違え。Bi & Poo の要旨は「20 msec」の窓と書く。±20-40 ms は調べた跡（phase6 の 150 行・215 行、phase7 の 44 行）に初めて出る数で、出典が無い。退避版 391 行は「〜数十ms」（高）。
  - ja 168 行「差異が大きすぎると関係が成立しない（無関係）、差異が小さすぎると区別がつかない（場に留まる）という『縁の有限性』を具体的に示す事例」：取り違え（出典を主張と逆向きに当てている）。要旨は、20 ms 以内の時刻の差で変化が起きると書いており、差が小さいと変化しないとは書いていない。STDP の古典的な図では、差がゼロに近いほど変化が大きい、と記憶している（未照合）。この読みは phase6 の 215 行の「仮説」が、本文で事例に格上げされたもの（高）。
  - ja 170 行「シナプス・回路・行動の各スケールで同型的に現れるとされ」：未判定。出典は DR-D08 の「フラクタル注記」で、文献が無い（中）。
  - 要旨にある条件（初めの強さが低いシナプスでだけ増強、GABA 作動性の後ろのニューロンでは起きない）は、報告に無い。至るか至らないかの分かれ目として一面に入る材料である。

### 11. 同期による通信（Fries 2005・2015）

- 要旨（Fries 2015）：活動している神経群は律動的に同期しやすい。律動は短い興奮と長い抑制の繰り返しを作り、受け手の入力の利得を周期的に変える。受け手の律動と位相の合った入力だけが強く通り、合わない入力は抑制で締め出される。注意による選択はこの仕組みで実現される、という仮説。2005 年の初めの形（ゼロ位相の同期）は、のちの実験で改められた。
- 確かめ先：
  - Fries, P. (2015). Rhythms for cognition: communication through coherence. *Neuron* 88(1), 220–235. DOI: [10.1016/j.neuron.2015.09.034](https://doi.org/10.1016/j.neuron.2015.09.034)。PMC4605134（全文 XML、著者稿）。manifest D08-S10 の notes に代わりとして書かれている。
  - Fries, P. (2005). A mechanism for cognitive dynamics: neuronal communication through neuronal coherence. *Trends in Cognitive Sciences* 9(10), 474–480. DOI: [10.1016/j.tics.2005.08.011](https://doi.org/10.1016/j.tics.2005.08.011)。manifest D08-S10（`blocked-access`）。
- 読んだ節：「The essence of CTC」（"communication requires coherence"）、「Challenges for the original CTC hypothesis」（ゼロ位相の同期から向きのある同期への改め）、「Gamma-band coherence renders communication selective」（"two neuronal groups in a lower visual area compete to communicate with one target group"、"The ensuing inhibition essentially closes the door in front of other inputs"）、「Theta-rhythmic gamma-band synchronization implements attentional sampling」。
- 照合の状態：Fries 2015 は本文照合済。Fries 2005、Canolty ら 2006、Yamamoto ら 2014 は未照合。同期と通信の因果は研究の一線。
- 対立・衝突・統合の読み：原典に書いてあるのは、複数の入力群が一つの受け手を競い、位相の合った側が通り、ほかは抑制で締め出されることである。興奮と抑制の拮抗が律動そのものを作る。Claude の読み替えでは、これは統合でなく片方の勝利で、勝ち負けは律動ごとに決まり直す。
- 今の報告から直したこと：
  - ja 178 行・en 61 行「位相同期が縁、関係による選別」：未判定（定義待ち）。原典の芯は選別だが、その前にある競争（衝突）が報告に書かれていない（中）。
  - ja 180 行「異なる物理量でありながら、『関係が構造を生む』という同じパターンが現れる点が重要」、ja 200 行「縁の多重実装」：言い過ぎ。STDP（結合の長期の変化）と CTC（その時々の通りやすさ）は変わるものが違い、「構造を生む」は CTC には当てはまりにくい（中。Claude の読み替え）。
  - 版の食い違い：ja 81 行「波・縁」、pres 56 行「場・波・縁・渦・束」。

### 12. 神経雪崩とクリティカリティ（Beggs & Plenz 2003）

- 要旨：ラットの皮質の培養と切片で、自発の活動が雪崩の式に従って広がった。事象の大きさは指数 −3/2 のべき則に従い、分枝比は臨界値 1 に近かった。シミュレーションでは、分枝比がこの値のとき情報の伝達が最も良く、網の暴走も防がれた。臨界状態では、情報の伝達と網の安定という競合する要求が両方満たされうる。
- 確かめ先：Beggs, J.M. & Plenz, D. (2003). Neuronal avalanches in neocortical circuits. *Journal of Neuroscience* 23(35), 11167–11177. DOI: [10.1523/JNEUROSCI.23-35-11167.2003](https://doi.org/10.1523/JNEUROSCI.23-35-11167.2003)。PMC6741045。manifest D08-S11（`url-verified`）。今回は要旨だけが取れた（本文の PDF は確認画面で取れなかった）。
- 照合の状態：要旨照合済。考察の「supercritical」の引用は精読ノート（`D08-S11_beggs-plenz-2003.md` 69 行）だけで、原典で確かめていない。臨界性の主張は研究の一線（べき則の判定には統計の争いがある、と報告自身も書く）。
- 対立・衝突・統合の読み：原典は「競合する要求」（"the competing demands of information transmission and network stability"）と書く。Claude の読み替えでは、分枝比 1 の近くは二つの要求が切り離されずに両方満たされる所で、1 を超えると暴走、下回ると消える。至るか至らないかの分かれ目が数（分枝比）で書かれた例になる。
- 今の報告から直したこと：
  - ja 184 行「べき則（指数が約-3/2）」「分枝比が臨界値1に近く」「情報伝達の最適化と活動の暴走抑制の両立」：一致（要旨）。
  - ja 186・188 行「興奮と抑制が釣り合った状態が情報処理の最適条件」「安定すぎれば波が立たず、不安定すぎれば暴走します」：要旨は興奮と抑制の釣り合いを分枝比で書いており、「波が立たず」は 5段階の語での読み替えである（低）。
  - ja 227〜232 行「神経雪崩とポリヴェーガル理論は、異なるスケールで同じ『場の条件』を記述」、ja 272 行「二つの独立した系統から…同じ結論が導かれました」：言い過ぎ。ポリヴェーガル理論の原典に、動的均衡や臨界の話は無い（Porges 2009 の読んだ範囲）。二つを結んだのは調べた跡（phase7 のパターン3）である（中）。
  - 版の食い違い：ja 82 行「場」、pres 57 行「場・波・縁・渦・束」、DR-D08 は縁（分枝）・渦（カスケード）・束（スケール不変性）まで当てている。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 論 | ja（表） | pres（表） | en | 退避版 |
|---|---|---|---|---|
| 予測符号化・自由エネルギー原理 | 全段階・強い | 全段階・強い | 全段階を通す対応（「最も確信度の高い知見」） | Accept |
| 内受容 | 場・波・渦・強い | 全段階・強い | 波（身体のずれ）を欠損の基盤とする | Accept |
| 情動の構成 | 渦・強い | 場・波・渦・束・強い | 渦 | Accept |
| 実行機能 | 縁・強い | 波・縁・渦・束・強い | 「保持」の一つの面 | Accept |
| ワークスペース | 閾値条件・部分的 | 横断的（閾値条件）・強い | 記述なし | Accept |
| 睡眠・夢 | 場・波・部分的 | 場・波・渦・強い | 意識なしに回る例 | Accept |
| ポリヴェーガル | 場・縁・強い | 全段階・強い | 縁（社会的関与）、場（安全） | Accept（縁 🔴） |
| エナクティヴィズム | 全段階・強い | 全段階横断・強い | 縁（膜） | Accept（縁 🔴） |
| STDP | 縁・強い | 全段階・強い | 波→縁→束 | Accept（縁 🔴） |
| 同期による通信 | 波・縁・強い | 全段階・強い | 縁 | Accept（縁 🔴） |
| 神経雪崩 | 場・条件付き | 全段階・条件付き | 条件付き | CA |
| 件数 | 強い 8・部分的 2・条件付き 1（ja 84・262・287 行は一致） | 強い 10・条件付き 1（pres 23・148 行） | 11 のうち 10 | Accept 10・CA 1 |
| 「縁」の多重実装の 4 件 | STDP・CTC・ポリヴェーガル・エナクティヴィズム（ja 200〜205 行）。表で縁に当てた実行機能が入っていない | STDP・CTC・ポリヴェーガル（pres 129 行） | STDP・CTC・ポリヴェーガル・島皮質（en 117 行） | ポリヴェーガル・エナクティヴィズム・STDP・CTC |

- 高：件数が版ごとに違う。pres の「強い 10」は退避版の Accept 10 を写し、ja の 8・2・1 は phase5 の分け方（Anchor・Scoped）から来ている見込み。
- 高：ja の Colophon（288 行）の出典 evidence は、2026-04-07 から再監査待ちの stub だった。DR-D08 は原文が保存されていない（D01・D22 と同じ）。
- 中：「縁」に強い対応を示す 4 件の顔ぶれが、ja・en・pres で違う。
- 中：ja 211 行「7つのスケールで同型的に繰り返されることが確認されました」。表（ja 213〜221 行）は退避版 L-3 の表を写したもので、スケールごとに確かめた記録は無い。
- 中：ja 262 行・pres 25 行「30 領域のなかで最も密な構造対応を示す領域のひとつ」。退避版 L-2 は「全30領域中でも最高レベルと予測される（コアドメインであるため当然）」と書いており、数えた跡でなく予測が本文で事実になった。「コアドメイン」は、欠損駆動思考の定義に直に効く分野という意味で、退避版の L-1・D08-006・D08-008 の欠損の記述と一続きである。
- 低：pres の frontmatter（7 行）の source「domain-D08-neuroscience-academic-ja.md」は、`assets/creation/domains/ja/md/` に無い名前。

### テンプレート由来の表示

ja の「立ち位置明示」（3 行）、「Phase 1-4」「Phase 5（論拠監査）」「Phase 6（構造再読）」「Phase 7（横断統合）」（28〜31 行）、「方法論的開示（S60）」（39 行）、「温度帯」（84・264 行）、「安全弁」（86 行）、「結びの温度開示」（276 行）、「Colophon」の generator_model（286 行）。pres の「温度帯」「温度開示」（24・153 行）。D01・D22 と同じで、テンプレートで一度に直す。

ja 44 行「著者（pjdhiro）自身の精読による検証が完了していない箇所がある」は、著者を pjdhiro としている。en には AI の文責の記述が無い。文責の書き方はテンプレートの直し（README 段 1）に入る。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| STDP の ±20-40 ms と「縁の有限性」 | 調べた跡 phase6（150・215 行）の着想。phase7（44 行）で抱持の微視的な対応物とされ、ja 本文で事例になった |
| 実行機能の「反射的に処理せず保持する」 | 調べた跡 phase5（70 行「反応抑制=抱持」）・phase7（パターン5） |
| en の「four associated definitions」・誤差を問いとして拾う・身体が欠けを感じる | 退避版（L-1・D08-006・D08-008 の欠損の記述）と phase7。英語版は、報告に欠損駆動思考・抱持を持ち込まないという決めより前に書かれた |
| 夢の生成モデル・記憶の再生と予測モデルの更新 | 退避版 D08-006 の [P] の行。照合されないまま「事実として」に写った |
| 安全が創造の前提 | 退避版 D08-007 と phase7 のパターン3 |
| 「最も密な」「7 つのスケールで確認」 | 退避版 L-2・L-3 |
| 件数 | pres は退避版の Accept、ja は phase5 の分け方 |
| 立ち位置明示・Phase・温度帯・安全弁 | テンプレート |

### 意識とは（as）との関係

as の公開ページ（`as/index.html`）は、予測符号化・内受容・グローバルワークスペース・統合情報理論の名前を出していない。as の古い読みのメモ（`as/evidence/review/layer1-prediction-error-reading.md`）は、自由エネルギー原理の系統を「参照枠としては使えるが、そのまま本論ではない」と書く。ja の 274 行（神経科学は5段階の「証明」や「根拠」ではない）はこれと同じ向きで、en 138 行（予測処理が欠損駆動思考の四つの定義すべての計算の参照枠になる）はこれより強い。as は直していない。

### 精読ノートと wiki の機械的な誤り

- `cs/knowledge/source-notes/D08/D08-S05_dehaene-changeux-2011.md` 7 行・20 行：頁が 200–219（20 頁）。Crossref と wiki（`pd/wiki/sources/D08_dehaene_2011_dehaene-changeux-2011-experimental.md` 60 行）は 200–227。
- `cs/knowledge/source-notes/D08/D08-S01_rao-ballard-1999.md` 16 行：DOI の欄が「http://neurosci.nature.com」。DOI は 10.1038/4580。44 行の引用は p.83 とあるが、図 5 の説明で p.84。
- `pd/wiki/sources/D08_miller_2001_integrative-theory-prefrontal-cortex.md` 8 行：source.path の `D08-S04_miller-2001.md` は無い（あるのは `D08-S04_miller-cohen-2001.md`）。同じ原典の wiki が `D08_miller_2001_cohen-j-d.md` と二枚ある。前者の 59 行は「本文は未読。abstract のみ」と書くが、精読ノートは pp.167–172 を読み、manifest には OA の URL がある。

### 文体（writing.md と corrections.md の型）

- 型 F（Claude が Claude に説明する）：ja 86〜88 行「ここまでの全体像で十分な場合、以降の詳細分析は省略可能です」。en 31 行「この定義に違和感があれば、それ自体がこの調査にとって大事な視点です」。
- 型 E（断定・看板）：ja 168 行「縁の定義…の明快な実装です」、ja 148 行「『他者との境界で接し、影響し合う』構造そのものです」、ja 132 行「この領域の重要な知見です」。
- 型 C（範囲を狭める）：ja 258 行「本調査は健常な神経系を前提としています」。病理を同じ仕組みの結末として書く原典（Clark 2013、Seth & Friston 2016、Barrett & Simmons 2015）と向きが逆になる。
- 型 J（演出）：ダッシュの挿入（ja 124・144・148・154・178・205 行ほか）、en の見出し「Timing Decides Fate」「The Body Feels Lack」「Nothing Can Be Retained Without Safety」。
- 型 H（捏造・転記）：上の STDP の窓、夢の帰属。

## 判断が要るもの

1. 縁の当てはめ。報告は、精度・STDP の時刻の差・位相同期・社会的関与を「関係による選別」として縁に当てている。pjdhiro の言い換え（安定－変化－衝突－統合－新たな安定、縁＝衝突）に照らすと、神経科学の論で衝突に当たるのは、選ぶ仕組みより前にある競争（経路どうし、入力どうし、シミュレーションどうし、仮説どうし）のほうかもしれない。そうなると、精度やバイアスは、衝突の勝ち負けを決める側として別に書くことになる。予想：定義（README「判断が要ること」1）が決まるまで保留にし、一面の表には競争と選ぶ仕組みを分けて書いておく（この記録はそうした）。
2. ポリヴェーガル理論を残すか。書籍は読めず、争いのある理論である。予想：残す（`sources.md` §3-3）。照合の状態と批判の書誌を添え、「安全が創造の前提」の段落は原典に無いので外す。
3. 英語版の「four associated definitions」（欠損駆動思考の定義に当てる構成）。規約で答えが出ている（README「規約で決めたこと」の旧い規則の行）。報告から外す。判断は要らないが、英語版は一から書き直すことになるので、書き直しの時期は README の判断 2（済んだ分野の今の報告をどうするか）と一緒に決める。

## 台帳に足す行の案

manifest は書き換えていない。次の行を足す案。

| source_id の案 | 書誌 | 取得先 | 状態の案 |
|---|---|---|---|
| D08-S17 | Friston, K. (2010). The free-energy principle: a unified brain theory? *Nat Rev Neurosci* 11(2), 127–138. DOI: 10.1038/nrn2787 | https://www.fil.ion.ucl.ac.uk/~karl/The%20free-energy%20principle%20A%20unified%20brain%20theory.pdf（著者の UCL のページ、PDF 12 頁） | url-verified（本文を読んだ） |
| D08-S18 | Seth, A.K. & Friston, K.J. (2016). Active interoceptive inference and the emotional brain. *Phil Trans R Soc B* 371(1708), 20160007. DOI: 10.1098/rstb.2016.0007 | PMC5062097（Europe PMC 全文 XML） | url-verified |
| D08-S19 | Barrett, L.F. & Simmons, W.K. (2015). Interoceptive predictions in the brain. *Nat Rev Neurosci* 16(7), 419–429. DOI: 10.1038/nrn3950 | PMC4731102（著者稿） | url-verified |
| D08-S20 | Barrett, L.F. (2017). The theory of constructed emotion. *Soc Cogn Affect Neurosci* 12(1), 1–23. DOI: 10.1093/scan/nsw154 | PMC5390700 | url-verified（D08-S03 の書籍の代わり） |
| D08-S21 | Nir, Y. & Tononi, G. (2010). Dreaming and the brain. *Trends Cogn Sci* 14(2), 88–100. DOI: 10.1016/j.tics.2009.12.001 | PMC2814941（著者稿） | url-verified（D08-S06 の代わり） |
| D08-S22 | Porges, S.W. (2009). The polyvagal theory: new insights into adaptive reactions of the autonomic nervous system. *Cleve Clin J Med* 76(Suppl 2), S86–S90. DOI: 10.3949/ccjm.76.s2.17 | PMC3108032（著者稿） | url-verified（D08-S07 の書籍の代わり） |
| D08-S23 | Bi, G.-Q. & Poo, M.-M. (1998). Synaptic modifications in cultured hippocampal neurons. *J Neurosci* 18(24), 10464–10472. DOI: 10.1523/JNEUROSCI.18-24-10464.1998 | PMC6793365 | url-verified（要旨だけ取れた。本文の PDF は自動取得の確認画面で取れず、ブラウザでの保存が要る） |
| D08-S24 | Fries, P. (2015). Rhythms for cognition: communication through coherence. *Neuron* 88(1), 220–235. DOI: 10.1016/j.neuron.2015.09.034 | PMC4605134（著者稿） | url-verified（D08-S10 の代わり） |

既にある行の直しの案：D08-S04（Miller & Cohen）は MIT の URL から PDF（39 頁）が取れたので、raw-confirmed に上げられる。D08-S13（Clark 2013）は manifest の URL から PDF（73 頁）が取れた。D08-S05（Dehaene & Changeux）と D08-S11（Beggs & Plenz）の OA の URL は、今回は確認画面が返った。

## 手順について分かったこと

- 読める原典は台帳では 5 本だったが、manifest の notes にある代わりの論文と PMC の著者稿で、11 の論のうち 8 つで本文に当たれた。PMC の全文は NCBI と Europe PMC の API から XML で取れ、頁の代わりに節の名前を控えた。
- J Neurosci・Cell・Royal Society・Europe PMC の PDF は、自動取得に確認画面を返した。PMC の PDF を別の名乗りで取りに行く試みは、ボットの確認を避ける操作として止められた。Beggs & Plenz・Bi & Poo・Dehaene & Changeux の本文は、pjdhiro にブラウザで保存してもらう候補になる。
- 報告の誤りの多くは、調べた跡（phase5〜7）が着想として書いたものが、本文で「事実として」「事例」に格上げされたところにある。D22 と同じ形で、STDP の窓は数まで作られていた。
