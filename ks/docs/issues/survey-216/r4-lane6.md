# r4-lane6: 誤差と、枠組みから欠けているものの区別（穴 6）
## 0. 読んだローカル資料（パス）
- `docs/issues/ISS-216-survey-brief-r4.md`（§0・§1・§2 レーン 6・§3）
- `docs/issues/ISS-216-self-review-v0.md` §3 推論 2・推論 8、§4 穴 6
- `docs/issues/survey-216/r4-lane2.md`（書き方の見本。Kuhn ch.6 の本文確認を同レーンが済ませているので、ここでは ch.4 の puzzle 側を足す）
- 確認状況の凡例: 本文○＝原典本文を読んだ／要旨○／二次○＝原典以外の再掲・解説／未取得
- 候補は 3 本に絞った（Kuhn、Rubin、Bateson）。Reason／Johari／Stevens／Kahneman／Rumsfeld／Taleb は追っていない（§3）
## 1. 穴と、何を照合すれば狭まるか（3 行）
穴 6: 「欠損駆動思考は虚軸の欠損」で全てか。実軸の欠損（ふつうの誤差や失敗）は対象外か（定16）。
照合 1: 「測った軸・枠組みの中で出るずれ」と「枠組みが値を持たせない側」を、原典が別の名前で呼び分けているか。
照合 2: 呼び分けがある場合、「ゼロと定義された」（定15）に当たる側と、誤差の側が、それぞれどこに置かれているか。当たる・当たらないの両方を書く。
## 2. 原典ごとの報告

### Kuhn 1962 *The Structure of Scientific Revolutions* ch. IV "Normal Science as Puzzle-Solving"／ch. VI（anomaly）／§VIII
- 書誌: Univ. of Chicago Press, 1962（1st）、1970（2nd）。確認状況: ch.IV・VI・VIII の抜粋を **二次○**（SEKI Working-Paper SWP-2007-01、Wirth 編の英独対訳抜粋。どの版かは抜粋側に明記なし）。ch.VI の "Discovery commences…" は r4-lane2 が 2nd ed. 本文で確認済み。頁は未確認
- 原文: "If it is to classify as a puzzle, a problem must be characterized by more than an assured solution. There must also be rules that limit both the nature of acceptable solutions and the steps by which they are to be obtained."（ch.IV）
- 原文: "Discovery commences with the awareness of anomaly, i.e., with the recognition that nature has somehow violated the paradigm-induced expectations that govern normal science."（ch.VI。r4-lane2 より）
- 原文: "Initially, only the anticipated and usual are experienced, even under circumstances where anomaly is later to be observed."（ch.VI）／"The scientist who pauses to examine every anomaly he notes will seldom get significant work done."（§VIII）
- 別の二次（検索結果の抜粋）に "Failure to achieve a solution discredits only the scientist and not the theory" とあり、ch.IV の puzzle の議論の中の文とされる。頁・版は未確認
- 何を言っているか: puzzle は解の保証と解き方の規則が paradigm から与えられる問題。解けないときは解く人の側の失敗とされる（二次の文）。anomaly は paradigm が生む期待に自然が背くこと。最初は期待されたものだけが経験される。
- 区別: 枠組みの中で解ける／解けない問題（puzzle。解けなければ人の失敗）と、枠組みの期待に背くもの（anomaly）。注意: Kuhn は anomaly を「ゼロと定義されたもの」とは書いていない。
- 「ゼロと定義された」に当たる側: 見つからない。近いのは "only the anticipated and usual are experienced"（期待された範囲だけが経験される）。期待の外のものが最初は経験にのぼらない、という記述。
- 誤差の側: puzzle の解けなさ（人の失敗）。anomaly は誤差ではなく枠組みへの背き、と Kuhn が呼び分けているかは抜粋では断定できない（"anomaly" を測定誤差と区別して定義した文は取得した範囲に無い）
- 近い: 枠組みの内側の失敗（puzzle）と、枠組みの期待に背くもの（anomaly）の二つが別の語で書かれている。後者は最初は経験されにくい。
- 違う: anomaly は paradigm の期待との関係で定まり、別の軸に意味があるとは書かれていない。見つけた anomaly を全部調べる科学者は重要な仕事を終えにくい、とも書く（§VIII の文）。実軸／虚軸に当たる二軸の構図は無い。
- conf: medium（puzzle の定義文・anomaly の文）／low（失敗の帰属の文と区別への対応づけ）

### Rubin 1976 "Inference and missing data" *Biometrika* 63(3): 581-592
- 書誌: DOI 10.1093/biomet/63.3.581。確認状況: 要旨○（Oxford Academic のページ。本文は購読が要る）＋ MCAR／MAR／MNAR の定義は van Buuren *Flexible Imputation of Missing Data*（著者サイト stefvanbuuren.name/fimd）で **二次○**
- 要旨（要約。原文は 125 字超のため逐語を避ける）: 無視してよいのは "missing at random" で、かつ "observed at random" の場合。直接尤度・ベイズ推論では、欠測の仕組みの母数が θ と "distinct" の場合。
- 二次の逐語: "Rubin (1976) classified missing data problems into three categories."／MCAR は "the probability of being missing is the same for all cases"／MAR は "is the same only within groups defined by the observed data"／MNAR は "the probability of being missing varies for reasons that are unknown to us"（いずれも van Buuren の文。Rubin 本文ではない。MNAR の語は Rubin 1976 要旨には無い）
- 何を言っているか: 欠測は、**値が存在するのに記録されていない**場合として扱う。欠けやすさ（欠測の確率）が、観測された値で説明できる（MAR）か、説明できない（MNAR）かで、無視してよいかが変わる。
- 区別: 観測された値（の誤差・ばらつき）／欠測（値が無い）／欠測のしかた（確率の構造）。
- 「ゼロと定義された」に当たる側: 要旨・二次の範囲では、欠測値をゼロにする扱いの是非の記述は取得できていない。「0 と NA の区別」を明示した一次の文は取得できず。近いのは MNAR（欠けやすさが観測の外の理由で変わる）。
- 誤差の側: 観測された値の側。欠測と誤差を別の対象として扱う。
- 近い: 「無い」ことと「ゼロ」を同じにしない前提で推論を組む。欠け方が観測の外の理由に依る場合（MNAR）が別に立てられている。
- 違う: 欠測は、変数が枠組みの中にあり値だけが欠ける場合の話。変数ごと枠組みに無い場合は、取得した範囲では扱われていない（本文未取得のため断定しない）。意味や価値の話は無い。
- conf: medium（要旨）／medium（三区分の定義。二次）／low（ゼロとの対比）

### Bateson 1972 *Steps to an Ecology of Mind* 所収 "Form, Substance and Difference"（1970 Korzybski Memorial Lecture）
- 書誌: Chandler, 1972（Univ. of Chicago Press 版 2000 など別版あり）。確認状況: 講演本文○（faculty.washington.edu/jernel/521/Form.htm の転載。頁なし。文字化けあり）。1972 の頁は未確認
- 原文: "a difference which makes a difference"（Kant の piece of chalk を論じる節。情報の基本単位としての difference）
- 原文: "The territory never gets in at all."／"zero is different from one, and because zero is different from one, zero can be a cause in the psychological world"
- 原文: "The letter which never existed is no source of energy."（返事を書かない手紙、記入しない税の書式の例の後）
- 何を言っているか: 世界のうち心に入るのは territory そのものでなく、差異（difference）だけ。そのうち神経経路が受けて効く差異が情報。心の世界では「無いこと」（書かれなかった手紙）が原因になりうる。ただし存在しなかった手紙は力にならない（期待や文脈があって無さが差異になる）。
- 区別: 差異として入るもの／入らないもの（territory は入らない）。効く差異／効かない差異。期待された事柄の不在（差異になる）／そもそも存在しない事柄（力にならない）。
- 「ゼロと定義された」に当たる側: 近いのは "zero is different from one" の zero（ゼロであることが一として区別される）。入らない側は "territory never gets in"。ただし Bateson の zero は「ゼロと定義されて無視された」ではなく、ゼロ自体が差異として作用する話。
- 誤差の側: 本講演の範囲では誤差と欠けの区別として書かれた箇所は見つからない。
- 近い: 枠組み（地図・神経経路）に入る差異と入らないものを分ける。ゼロ・不在が原因になりうる点は、ゼロを無意味としない読みと向きが合う。
- 違う: Bateson は「効かない差異」を数えない書き方で、枠組みの外に意味があったとは書かない。誤差と枠組みの外の区別を直接論じてはいない。
- 補足: 句の出所には異説あり（二次によると Feigl 1949、Wendell Johnson など。未照合）。"any difference that makes a difference" の形は確認できず（"a difference which makes a difference" が本文の形）
- conf: medium（引用文）／low（区別への対応づけ）

## 3. 見つからなかったこと（探した先を書く）
- 「測った軸の上の誤差」と「枠組みから欠けているもの」を一対の用語で定義した一次の文: 上の 3 本の範囲では見つからない。Kuhn は puzzle／anomaly、Rubin は観測値／欠測、Bateson は入る差異／入らない territory と、別々の区別を別の語で書いている。
- Rubin 本文の 0 と NA の対比、MNAR の語の初出: 本文未取得（購読）。Little & Rubin の本は未確認
- Kuhn の puzzle の失敗帰属文の版・頁: 検索結果の再掲止まり（csulb は証明書エラーで WebFetch 不可）
- 追わなかった（3 本上限）: Reason 1990（slips／lapses／mistakes）、Luft & Ingham 1955（Johari。二次の検索のみで 4 区画の名称を確認、原典未確認）、Stevens 1946、Kahneman 2011 WYSIATI、Rumsfeld 2002、Taleb 2007
## 4. →as#149 候補（あれば）
- Kuhn ch.VI: "Initially, only the anticipated and usual are experienced"（期待された範囲だけが経験される。気づきの無い不一致の記述に当たりうる。r4-lane2 の Bruner & Postman の文と同じ箇所の周辺）
## 5. 残課題（紙でしか確認できないもの等）
- Kuhn 1962 ch.IV の失敗帰属文の頁（1st／2nd／50th anniv. の頁対応）。anomaly と測定誤差を区別する箇所（ch.VI の前後）の有無
- Rubin 1976 本文（missing at random の定義式、欠測指示変数の置き方）と Little & Rubin の MNAR 定義
- Bateson 1972 の頁。Form.htm の転載が 1972 版と一致するかの照合
- Reason 1990 は誤差の側の分類（slips／lapses／mistakes）を定義する先。穴 6 の「ふつうの誤差」の側を厚くする場合の候補（今回は未着手）
