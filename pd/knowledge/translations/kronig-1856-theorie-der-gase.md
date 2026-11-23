# Grundzüge einer Theorie der Gase（1856）— 原文（独語）と日本語訳

- 原典：A. Krönig, "Grundzüge einer Theorie der Gase", *Annalen der Physik und Chemie*（Poggendorff 編）99 (1856), No.10, pp.315–322。出版社（Wiley）の通しの巻では 175 巻で、DOI は [10.1002/andp.18561751008](https://doi.org/10.1002/andp.18561751008)（Crossref で著者・題・巻号・頁を照らした）。著者はドイツの物理学者・化学者（August Karl Krönig・1822–1879）。論文の終わりの日付は「Berlin, im Juli 1856」。
- 訳した範囲：全文（題・本文 25 段。脚注は無い）。パースが「進化的な愛」（1893）の ¶20 で、気体の運動論への関心が「1856 年にクラウジウスとクレーニッヒの注目すべき論文によって新たにされていた」と書く、クレーニッヒの側の論文。パースは題を挙げていない。1856 年のクレーニッヒの気体の論文として、Claude がこれに当てた（#175 の A19）。クラウジウスの側（"Ueber die Art der Bewegung, welche wir Wärme nennen", 同誌 100, 1857）は、まだ訳していない（A18）。
- 原文：Internet Archive の誌面の走査 [`sim_annalen-der-physik_1856_99_10`](https://archive.org/details/sim_annalen-der-physik_1856_99_10) に合わせた（2026-11-23・#175）。頁と画像の対応は p = n + 177（p.315 が `page/n138`、p.322 が `n145`）。文字起こしが無いので、IA の OCR を下敷きに、読む役（Claude のサブエージェント）二つが全 8 頁の画像と照らして起こし、照らす役二つが段ごとに画像と照らし直した。式・記号・上付き下付きは画像から起こした。p.315 の上半分は前の論文の終わり、p.322 の終わりのあとは次の論文なので入れていない。
- 直したのは次のとおり。綴りは誌面のとおり（seyn・Theil・giebt・Gesammtdruck など当時の綴り）。ただし誌面のローマン体の ſs の合字は ss と起こした（dass・grösser・Stösse）。誌面の誤植（p.318 の「<i>v</i><sub>2</sub> = <i>v</i><sub>2</sub>」、p.319 の根号の中の「<i>c</i><sup>2</sup> = 2<i>gz</i>」）は直さずに置き、訳注に書いた。字間を空けた強調（隔字体）と斜体は `*…*` で示した。式の変数は斜体で示した。
- 式の書き方：誌面で分数として縦に組まれた式は、/ で一行に書いた。誌面が掛け算に使う点（<i>m</i> . <i>c</i> . <i>a</i>）は原文では点のまま、訳では中黒（・）にした。独立の行の式は、原文でも訳でも独立の行に置いた。
- 段の分け方：誌面の段落のとおり。題は一つの段にした（¶1）。
- **訳は Claude（AI）によるもの。** 2026-11-23 に訳した。英訳・日本語訳などの既にある訳を見ずに、独語の原文から付けた。読む役に原文の起こしと訳の案を出させ、照らす役に原文と画像・訳を段ごとに照らさせ、Claude がつないで入れた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（クレーニッヒの表）でそろえた。`訳注：` の行は Claude の注。
- クレーニッヒは、気体を、空っぽの空間を一定の速さでまっすぐに飛び、壁や互いにぶつかってはね返る、完全に弾性のある球（原子）の集まりと見る。壁のでこぼこで道筋は計算できないほど不規則になるが、確率の計算に従って、原子が六つの向きに同じ速さで動くと単純化してよい、とする。そこから、圧力が <i>nmc</i><sup>2</sup>/<i>v</i> に比例することを導き、<i>mc</i><sup>2</sup>（原子の活力）を絶対零度から数えた温度と置いて、マリオットの法則・ゲイ＝リュサックの法則・同じ体積に同じ数の原子、を出し、重さ・拡散・比熱・膨張と圧縮のときの温度に当てはめる。lebendige Kraft は「活力」（今の運動エネルギーに当たる。ここでは ½ の無い <i>mc</i><sup>2</sup>）と訳した。
- 段の見出しの頁は誌面の頁。段の途中で頁が変わるところは `[p.N]`。頁をまたいで切れた語は、ヘルムホルツ・クラウジウスの対訳と同じく「bis- [p.316] her」の形で残した。

### ¶1　p.315

> VII. *Grundzüge einer Theorie der Gase;* *von Dr. A. Krönig.* (Mitgetheilt vom Hrn. Verfasser.)

VII. 気体の理論の大要　A. クレーニッヒ博士（著者からの寄稿）

訳注：頭の「VII.」は、この号の中の論文の番号。題と「von Dr. A. Krönig.」の行は誌面では斜体。Grundzüge は「おもな筋・あらまし」の意で、「大要」と訳した。「Mitgetheilt vom Hrn. Verfasser」は、著者自身から誌に寄せられた、という添え書き。

### ¶2　p.315–316

> Die mechanische Wärmetheorie behauptet, dass die Wärme eines Körpers in nichts anderem besteht als in einer Bewegung seiner kleinsten Theile. Es fehlt aber durchaus an einer klaren Anschauung darüber, wie diese Bewegung eigentlich beschaffen ist. Für die gasförmigen Körper, welche in Beziehung auf mechanische Wärmetheorie bis- [p.316] her am meisten betrachtet worden sind, will ich im Nachfolgenden eine Hypothese darlegen, welche mir den an sie zu stellenden Anforderungen zu entsprechen scheint. Hierzu rechne ich, dass sich aus derselben auch die bis jetzt noch nicht gegebene Erklärung der übrigen Gesetze der Gase, des *Mariotte*'schen, des *Gay-Lussac*'schen u. s. w. ableiten lassen muss. Die Hypothese ist folgende.

熱の力学的理論（mechanische Wärmetheorie）は、物体の熱（Wärme）とは、その物体のいちばん小さな部分の運動にほかならない、と主張する。しかし、この運動が本当はどのようなものなのかについては、はっきりした見通し（Anschauung）がまったく欠けている。これまで熱の力学的理論でいちばん多く考察されてきたのは気体の物体である。その気体について、以下で一つの仮説を述べたい。この仮説は、それに課されるべき要求を満たしているように私には思える。その要求の一つに、気体のほかの法則、すなわちマリオットの法則、ゲイ＝リュサックの法則などの、これまでまだ与えられていない説明も、この仮説から導けなければならない、ということを数える。仮説は次のとおりである。

訳注：「bis- / her」は頁をまたいで切れた bisher（これまで）。冒頭の D は誌面では大きな飾りの頭文字。人名 Mariotte・Gay-Lussac は誌面では字間を空けて組まれている。マリオットの法則は今のボイル＝マリオットの法則（温度一定で圧力と体積が反比例する）。

### ¶3　p.316

> Die Gase bestehen aus Atomen, welche sich verhalten wie feste, vollkommen elastische, mit gewissen Geschwindigkeiten innerhalb eines leeren Raumes sich bewegende Kugeln. Feste und flüssige Körper sind, sobald Gleichgewicht oder ein dauernder Zustand eingetreten ist, den Stössen der Gasatome gegenüber ebenfalls absolut elastisch.

気体（Gas）は原子（Atom）からなる。その原子は、空っぽの空間の中を、ある速さ（Geschwindigkeit）で動く、固く、完全に弾性のある球のようにふるまう。固体と液体も、つり合い（Gleichgewicht）か、変わらない状態が生じてしまえば、気体の原子の衝突（Stoss）に対しては、やはり完全に弾性的である。

訳注：「mit gewissen Geschwindigkeiten」は複数で、原子ごとに何らかの速さを持つ、の含み。「vollkommen elastisch」と「absolut elastisch」を同じ意味で使っているので、どちらも「完全に弾性のある・弾性的」と訳した。

### ¶4　p.316

> Denken wir uns einen Kasten von absolut elastischer Substanz, und in demselben eine Anzahl absolut elastischer Kugeln, welche ruhend nur einen sehr kleinen Theil vom Inhalte des Kastens einnehmen. Der letztere werde nun heftig geschüttelt, so dass die Kugeln in Bewegung gerathen. Kommt der Kasten wieder in Ruhe, so behalten doch die Kugeln die mitgetheilte Bewegung unablässig bei, obgleich die Richtung und die Geschwindigkeit jeder einzelnen Kugel bei jedem Stoss gegen eine andere Kugel oder gegen eine Wand sich ändert. Ebenso wie diese Kugeln verhalten sich die Gasatome in einem Gefäss.

完全に弾性のある物質でできた箱と、その中に、完全に弾性のある球がいくつか入っているところを考えよう。球は、止まっているときには、箱の中身（容積）のごく小さな部分しか占めない。いま、この箱を激しく揺すり、球が動き出すようにする。箱がふたたび止まっても、球は与えられた運動を絶えず保ち続ける。ただし、一つひとつの球の向きと速さは、ほかの球や壁（Wand）に衝突するたびに変わる。気体の原子は、容器（Gefäss）の中で、ちょうどこれらの球と同じようにふるまう。

### ¶5　p.316

> Ein Gasatom oscillirt also nicht etwa um eine Gleichgewichtslage, sondern es bewegt sich in gerader Linie und mit constanter Geschwindigkeit so lange fort, bis es gegen ein anderes Gasatom oder gegen eine feste oder flüssige Wand stösst. Namentlich findet zwischen zwei Gasatomen, die sich nicht berühren, keine gegenseitige Abstossung statt.

したがって、気体の原子は、つり合いの位置のまわりで振動する（oscilliren）のではない。ほかの気体の原子か、固体または液体の壁に衝突するまで、まっすぐな線に沿って、一定の速さで進み続ける。とくに、触れ合っていない二つの気体の原子のあいだには、互いに押し返す力（Abstossung、斥力）ははたらかない。

訳注：つり合いの位置のまわりの振動や、原子どうしの斥力は、当時の気体の像（気体の粒子が互いに退け合って静止に近い位置を保つ、という考え）を念頭に置いて否定していると読める。

### ¶6　p.316

> Den Gasatomen gegenüber ist auch die ebenste Wand als sehr höckerig zu betrachten, und die Bahn jedes Gasatoms muss deshalb eine so unregelmässige seyn, dass sie sich der Berechnung entzieht. Nach den Gesetzen der Wahrscheinlichkeitsrechnung wird man jedoch statt dieser vollkommenen Unregelmässigkeit eine vollkommene Regelmässigkeit annehmen dürfen.

気体の原子から見れば、どんなに平らな壁も、ひどくでこぼこしていると考えなければならない。そのため、気体の原子一つひとつの道筋（Bahn）は、計算ではとらえられないほど不規則（unregelmässig）であるにちがいない。しかし、確率の計算（Wahrscheinlichkeitsrechnung）の法則に従えば、この完全な不規則さの代わりに、完全な規則正しさを仮定してよいだろう。

訳注：最後の文は、次の段の、原子が六つの向きに同じ速さで動くという単純化の根拠になっている。

### ¶7　p.317

> In einem rechtwinklig parallelepipedischen Gefäss mit ebenen Wänden und von den Dimensionen <i>x</i>, <i>y</i>, <i>z</i> seyen <i>n</i> Gasatome, jedes von der Masse <i>m</i>, enthalten. Der von dem Gefäss umschlossene Raum sey in 1/6 <i>n</i> gleiche Würfel zerlegt. In einem bestimmten Momente seyen in jedem dieser Würfel 6 Atome befindlich, die sich bezüglich in den Richtungen +<i>x</i>, −<i>x</i>, +<i>y</i>, −<i>y</i>, +<i>z</i>, −<i>z</i> mit der gemeinschaftlichen Geschwindigkeit <i>c</i> bewegen. Nehmen wir an, die Atome afficirten sich gegenseitig durchaus nicht, gingen vielmehr jedesmal bis zu einer Wand hin ungehindert fort. (Solche Atome, deren Mittelpunkte in derselben graden Linie sich bewegen, verhalten sich auch wirklich so, als ob sie einander nicht afficirten, da sie bei jedem Zusammenstoss nur ihre beiderseitigen Geschwindigkeiten vertauschen.) Es soll der Druck bestimmt werden, den z. B. eine der beiden Wände <i>yz</i> durch das Gas erleidet.

平らな壁をもつ直方体の容器があり、その寸法を <i>x</i>, <i>y</i>, <i>z</i> とする。その中に、質量（Masse）がそれぞれ <i>m</i> の気体の原子が <i>n</i> 個入っているとする。容器に囲まれた空間を、等しい立方体 <i>n</i>/6 個に分ける。ある瞬間に、どの立方体にも原子が 6 個あり、それぞれ +<i>x</i>, −<i>x</i>, +<i>y</i>, −<i>y</i>, +<i>z</i>, −<i>z</i> の向きに、共通の速さ <i>c</i> で動いているとする。原子どうしは互いにまったく影響し合わず（afficiren）、毎回、壁のところまで妨げられずに進むと仮定しよう。（中心が同じ直線の上を動く原子どうしは、実際にも、互いに影響し合わないかのようにふるまう。ぶつかり合う（Zusammenstoss）たびに、互いの速さを取り替えるだけだからである。）ここで、たとえば二つある <i>yz</i> の壁の一方が気体から受ける圧力（Druck）を求めることにする。

訳注：「1/6 <i>n</i>」は誌面では小さな分数 ⅙ に <i>n</i> を続けた形。「bezüglich」はここでは「それぞれ（順に）」の意。「afficiren」は当時の語で「作用する・影響を及ぼす」。

### ¶8　p.317

> Dieser Druck wird hervorgebracht durch die Stösse der Gasatome gegen die Wand. Stiesse gegen die Wand nur ein Atom, so würde der Druck gleich <i>m</i> . <i>c</i> . <i>a</i> seyn, unter <i>a</i> die Anzahl der Stösse während der Zeiteinheit verstanden. Ein senkrecht gegen <i>yz</i>, also parallel <i>x</i> sich bewegendes Atom stösst gegen <i>yz</i> jedesmal, nachdem es den Raum 2<i>x</i> durchlaufen hat; folglich ist <i>a</i> = <i>c</i>/2<i>x</i>. Um den Gesammtdruck <i>P</i> gegen <i>yz</i> zu finden, muss <i>m</i>.<i>c</i>.<i>a</i> noch mit der Anzahl der parallel <i>x</i> sich bewegenden Atome multiplicirt werden. Diese ist, da von je 6 Atomen 2 parallel <i>x</i> sich bewegen, gleich <i>n</i>/3. Folglich ist <i>P</i> = <i>m</i> . <i>c</i> . <i>c</i>/2<i>x</i> . <i>n</i>/3. Bezeichnen wir mit <i>p</i> den Druck gegen die Flächeneinheit der Wand <i>yz</i>, so findet sich <i>p</i> = <i>m</i> . <i>c</i> . <i>c</i>/2<i>x</i> . <i>n</i>/3 . 1/<i>yz</i>, oder wenn wir <i>xyz</i> = <i>v</i> setzen und den constanten Factor fortlassen.
> <i>p</i> = <i>nmc</i><sup>2</sup>/<i>v</i>.

この圧力は、気体の原子が壁に衝突することで生じる。もし壁に衝突する原子が一つだけなら、圧力は <i>m</i>・<i>c</i>・<i>a</i> に等しいだろう。ここで <i>a</i> は、単位時間（Zeiteinheit）のあいだの衝突の回数とする。<i>yz</i> の壁に垂直に、つまり <i>x</i> に平行に動く原子は、2<i>x</i> の道のりを走り終えるたびに <i>yz</i> の壁に衝突する。したがって <i>a</i> = <i>c</i>/2<i>x</i> である。<i>yz</i> の壁にかかる圧力の全体 <i>P</i> を求めるには、<i>m</i>・<i>c</i>・<i>a</i> に、さらに <i>x</i> に平行に動く原子の数を掛けなければならない。6 個の原子のうち 2 個ずつが <i>x</i> に平行に動くので、その数は <i>n</i>/3 である。したがって <i>P</i> = <i>m</i>・<i>c</i>・<i>c</i>/2<i>x</i>・<i>n</i>/3 となる。壁 <i>yz</i> の単位面積（Flächeneinheit）にかかる圧力を <i>p</i> で表せば、<i>p</i> = <i>m</i>・<i>c</i>・<i>c</i>/2<i>x</i>・<i>n</i>/3・1/<i>yz</i> が得られる。あるいは、<i>xyz</i> = <i>v</i> とおき、定数の因数（Factor）を省けば、次のようになる。
<i>p</i> = <i>nmc</i><sup>2</sup>/<i>v</i>

訳注：誌面では式の中の掛け算を中点（.）で示している。「oder wenn wir … fortlassen.」の文は誌面のとおりピリオドで終わり、そのあとに独立の行の式が来る。省いた定数の因数は 1/6。一回の衝突で壁に渡る運動量は今の考えでは 2<i>mc</i> だが、本文は <i>m</i>.<i>c</i>.<i>a</i> としており、いずれにせよ定数の因数として省かれるので結論の形（<i>p</i> が <i>nmc</i><sup>2</sup>/<i>v</i> に比例する）には響かない。「Gesammtdruck」は当時の綴り。

### ¶9　p.317–318

> Dieser Ausdruck zeigt, dass der Druck des Gases gegen die Flächeneinheit jeder der Gefässwände gleich gross, so [p.318] wie auch, dass er umgekehrt proportional dem Volumen ist, wie es das *Mariotte*'sche Gesetz behauptet.

この式は、容器のどの壁でも、単位面積にかかる気体の圧力が同じ大きさであること、また、マリオットの法則が主張するとおり、圧力が体積（Volumen）に反比例することを示している。

### ¶10　p.318

> Zu der bisher gemachten Annahme muss ich jetzt diejenige hinzufügen, dass das Product <i>mc</i><sup>2</sup> oder die lebendige Kraft eines Atoms nichts anderes ist als die vom absoluten Nullpunkt an gezählte Temperatur.

ここまでの仮定に、いま次の仮定を加えなければならない。すなわち、積 <i>mc</i><sup>2</sup>、つまり原子一つの活力（lebendige Kraft）は、絶対零度（absoluter Nullpunkt）から数えた温度（Temperatur）にほかならない、という仮定である。

訳注：活力（lebendige Kraft）は当時の語で、ここでは <i>mc</i><sup>2</sup> とされている。今の運動エネルギー（½<i>mc</i><sup>2</sup>）に当たり、係数の ½ の違いがある。「nichts anderes ist als」は、比例するというより、同じものと見なす言い方。

### ¶11　p.318

> Nach dem *Gay-Lussac*'schen Gesetz übt ein Gas bei − 273° C. gar keinen Druck aus, bei einer um <i>t</i>° höheren Temperatur aber einen <i>t</i> proportionalen Druck (wenn nämlich das Volumen constant bleibt). Dasselbe folgt aus der Formel
> <i>p</i> = <i>nt</i>/<i>v</i>,
> welche aus der obigen hervorgeht, wenn <i>mc</i><sup>2</sup> = <i>t</i> gesetzt wird.

ゲイ＝リュサックの法則によれば、気体は −273 ℃ ではまったく圧力を及ぼさず、それより <i>t</i> 度高い温度では <i>t</i> に比例する圧力を及ぼす（ただし体積が変わらない場合）。同じことが、次の式から導かれる。
<i>p</i> = <i>nt</i>/<i>v</i>
この式は、上の式で <i>mc</i><sup>2</sup> = <i>t</i> とおくと得られる。

訳注：ここでの <i>t</i> は、−273 ℃ から数えた温度（今の絶対温度）。

### ¶12　p.318

> Aus <i>p</i><sub>1</sub> = <i>p</i><sub>2</sub> und <i>t</i><sub>1</sub> = <i>t</i><sub>2</sub> und <i>v</i><sub>2</sub> = <i>v</i><sub>2</sub> folgt <i>n</i><sub>1</sub> = <i>n</i><sub>2</sub>; d. h.: von verschiedenen Gasen sind bei gleichem Druck und gleicher Temperatur in gleichem Raume gleich viel Atome enthalten.

<i>p</i><sub>1</sub> = <i>p</i><sub>2</sub>、<i>t</i><sub>1</sub> = <i>t</i><sub>2</sub>、<i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> から <i>n</i><sub>1</sub> = <i>n</i><sub>2</sub> が出る。つまり、異なる気体でも、圧力と温度が等しければ、等しい空間には同じ数の原子が含まれる。

訳注：誌面では「<i>v</i><sub>2</sub> = <i>v</i><sub>2</sub>」で、<i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> の誤植と見える。原文は誌面のとおりに置き、訳では <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> とした。結論は今のアボガドロの法則に当たる（ただし本文は「分子」でなく「原子」と言う）。下付きの字は `<sub>` で示した。

### ¶13　p.318

> Hiernach ergiebt sich unmittelbar, dass die Masse <i>m</i> eines Atoms proportional ist dem specifischen Gewicht <i>s</i> des Gases. Dann folgt aus <i>p</i> = <i>mnt</i>/<i>mv</i>, dass
> <i>p</i> = <i>P'</i> . <i>t</i>/<i>s</i> . <i>v</i>
> ist, wo <i>P'</i> = <i>nm</i> oder proportional dem Gewicht der gegebenen Gasmasse ist.

このことから直ちに、原子一つの質量 <i>m</i> は、その気体の比重（specifisches Gewicht）<i>s</i> に比例することがわかる。すると、<i>p</i> = <i>mnt</i>/<i>mv</i> から、
<i>p</i> = <i>P'</i>・<i>t</i>/(<i>s</i>・<i>v</i>)
となる。ここで <i>P'</i> = <i>nm</i>、すなわち与えられた気体の量（Gasmasse）の重さ（Gewicht）に比例する量である。

訳注：誌面の式は分数で、分子が <i>P'</i>.<i>t</i>、分母が <i>s</i>.<i>v</i>。<i>mnt</i>/<i>mv</i> は <i>nt</i>/<i>v</i> の分子と分母に <i>m</i> を掛けた形で、分母の <i>m</i> を、それに比例する <i>s</i> に置き換えている（比例の関係なので、定数の因数は省かれている）。

### ¶14　p.318

> Ich habe bis hierher die Gase als in geschlossenen Gefässen enthalten betrachtet und keine Rücksicht genommen auf die Einwirkung der Schwere auf die Gasatome. Ich will jetzt den Druck bestimmen, den ein einziges Gasatom gegen die Erde ausübt. Man könnte nämlich meinen, dieser Druck müsste mit zunehmender Wärme des Atoms grösser werden.

ここまでは、気体を閉じた容器に入っているものとして考え、重力（Schwere）が気体の原子に及ぼす作用は考えに入れなかった。今度は、ただ一つの気体の原子が地球（Erde）に及ぼす圧力を求めたい。というのも、この圧力は原子の熱が増すにつれて大きくなるはずだ、と思う人がいるかもしれないからである。

### ¶15　p.318–319

> Das Atom verlasse zur Zeit 0 die Erde mit einer Geschwindigkeit, deren verticale Componente <i>c</i> ist. Das Atom wird nach der Zeit <i>c</i>/<i>g</i> auf dem höchsten Punkte seiner [p.319] Bahn mit der Geschwindigkeit 0, und nach der Zeit 2<i>c</i>/<i>g</i> wieder auf der Erde mit der Geschwindigkeit <i>c</i> anlangen. In der Zeiteinheit wird es <i>g</i>/2<i>c</i> mal gegen die Erde mit der Geschwindigkeit <i>c</i> stossen; folglich ist sein Druck gegen die Erde oder sein Gewicht = <i>m</i>.<i>c</i>.<i>g</i>/2<i>c</i> = <i>mg</i>/2, also unabhängig von seiner Geschwindigkeit, d. h. auch unabhängig von seiner Temperatur.

原子が、時刻 0 に、鉛直の成分（verticale Componente）が <i>c</i> である速さで地面を離れるとする。原子は、時間 <i>c</i>/<i>g</i> ののちに、その道筋（Bahn）のいちばん高い点に速さ 0 で達し、時間 2<i>c</i>/<i>g</i> ののちに、ふたたび速さ <i>c</i> で地面に戻る。単位時間のうちに、原子は <i>g</i>/2<i>c</i> 回、速さ <i>c</i> で地面に衝突する。したがって、地面に対する原子の圧力、つまりその重さは <i>m</i>・<i>c</i>・<i>g</i>/2<i>c</i> = <i>mg</i>/2 であり、原子の速さによらない。すなわち、その温度にもよらない。

訳注：<i>g</i> は重力の加速度。「Erde」は前の段では「地球」、ここでは原子が離れる面として「地面」と訳した。

訳注：重さが <i>mg</i>/2 となるのは誌面のとおり。¶8 で圧力を <i>m</i>・<i>c</i>・<i>a</i>（質量×速さ×単位時間の衝突の回数）と置いた式をそのまま当てはめたもので、衝突一回の運動量の変化を今の数え方の 2<i>mc</i> でなく <i>mc</i> としているため、<i>mg</i> の半分になる。

### ¶16　p.319

> Es soll ferner, wenn ein Atom zwischen zwei horizontalen Wänden oscillirt, deren verticaler Abstand <i>z</i> ist, der Unterschied der Drucke bestimmt werden, welche das Atom nach unten und nach oben hin ausübt. Das Atom verlasse zur Zeit 0 die untere Wand mit einer Geschwindigkeit, deren verticale Componente <i>c</i> ist. Das Atom würde, wenn die obere Wand nicht da wäre, nach der Zeit <i>c</i>/<i>g</i> die Höhe <i>c</i><sup>2</sup>/2<i>g</i> mit der Geschwindigkeit 0 erreichen. Ist nun <i>z</i> > <i>c</i><sup>2</sup>/2<i>g</i>, so haben wir offenbar den eben betrachteten Fall. Das Atom übt nach unten den Druck <i>mg</i>/2, nach oben den Druck 0 aus, und die Differenz beider Drucke ist <i>mg</i>/2. Für den Fall <i>z</i> < <i>c</i><sup>2</sup>/2<i>g</i> dagegen erreicht das Atom die obere Wand nach der Zeit (<i>c</i> − √(<i>c</i><sup>2</sup> − 2<i>gz</i>))/<i>g</i> mit einer Geschwindigkeit, deren verticale Componente √(<i>c</i><sup>2</sup> − 2<i>gz</i>) ist. Setzt man in die oben für den Druck aufgestellte Formel <i>m</i>.<i>c</i>.<i>a</i> die der vorliegenden Aufgabe entsprechenden Werthe ein, so ergiebt sich, dass der Druck des Atoms nach unten
> = <i>mcg</i>/2(<i>c</i> − √(<i>c</i><sup>2</sup> = 2<i>gz</i>)),
> der Druck des Atoms nach oben
> = <i>m</i>√(<i>c</i><sup>2</sup> − 2<i>gz</i>).<i>g</i>/2(<i>c</i> − √(<i>c</i><sup>2</sup> − 2<i>gz</i>))
> ist, woraus für die Differenz beider Drucke wiederum der Werth <i>mg</i>/2 folgt. Da diess Resultat durch eine etwaige horizontale Componente der Bewegung eines Atoms gar nicht afficirt wird, so erleidet ein ge- [p.320] schlossenes Gefäss, in welchem <i>n</i> Atome von der Masse <i>m</i> enthalten sind, dadurch die Gewichtsvermehrung <i>nmg</i>/2.

さらに、一つの原子が、鉛直の間隔が <i>z</i> の二枚の水平な壁のあいだを往復する（oscilliren）とき、原子が下へ向けて及ぼす圧力と上へ向けて及ぼす圧力の差を求めよう。原子は時刻 0 に、鉛直の成分（Componente）が <i>c</i> の速さで下の壁を離れるとする。上の壁がなければ、原子は時間 <i>c</i>/<i>g</i> の後に、高さ <i>c</i><sup>2</sup>/2<i>g</i> に速さ 0 で達する。そこで <i>z</i> > <i>c</i><sup>2</sup>/2<i>g</i> なら、明らかに、いま見た場合と同じである。原子は下へ <i>mg</i>/2 の圧力を、上へ 0 の圧力を及ぼし、二つの圧力の差は <i>mg</i>/2 である。これに対して <i>z</i> < <i>c</i><sup>2</sup>/2<i>g</i> の場合には、原子は時間 (<i>c</i> − √(<i>c</i><sup>2</sup> − 2<i>gz</i>))/<i>g</i> の後に、鉛直の成分が √(<i>c</i><sup>2</sup> − 2<i>gz</i>) の速さで上の壁に達する。先に圧力について立てた式 <i>m</i>・<i>c</i>・<i>a</i> に、この問題に当たる値を入れると、原子が下へ及ぼす圧力は
<i>mcg</i>/2(<i>c</i> − √(<i>c</i><sup>2</sup> − 2<i>gz</i>))、
上へ及ぼす圧力は
<i>m</i>√(<i>c</i><sup>2</sup> − 2<i>gz</i>)・<i>g</i>/2(<i>c</i> − √(<i>c</i><sup>2</sup> − 2<i>gz</i>))
となる。ここから、二つの圧力の差として、ふたたび <i>mg</i>/2 という値が出てくる。この結果は、原子の運動に水平の成分があっても少しも影響を受けない（afficiren）。だから、質量 <i>m</i> の原子を <i>n</i> 個含む閉じた容器は、それによって <i>nmg</i>/2 だけ重さが増す。

訳注：下へ及ぼす圧力の式の根号の中は、誌面では「<i>c</i><sup>2</sup> = 2<i>gz</i>」と等号に刷られている。すぐ後の式や前の文と比べて「−」の誤植と見え、原文は誌面のとおりに置き、訳では「−」として読んだ。上へ及ぼす圧力の式の分子は、誌面では根号の横線が「.<i>g</i>」の上まで伸びているが、意味のうえでは <i>m</i>√(<i>c</i><sup>2</sup> − 2<i>gz</i>)・<i>g</i> なので、そのように起こした。「<i>m</i>.<i>c</i>.<i>a</i>」の <i>a</i> は、¶8 で「単位時間のあいだの衝突の回数」と断ってある文字。容器の重さが増す分も、¶B1 と同じ数え方のため <i>nmg</i>/2 となっている（誌面のとおり）。

### ¶17　p.320

> Hieraus lässt sich leicht ableiten, dass das *Archimedi'sche* Gesetz für Gase gültig seyn, und dass ein specifisch leichteres Gas innerhalb eines schwereren emporsteigen muss, und umgekehrt.

ここから、アルキメデスの法則が気体についても成り立つこと、また比重（specifisches Gewicht）の小さい気体は、それより重い気体の中では上へ昇らなければならず、その逆も成り立つことが、たやすく導かれる。

訳注：「gültig seyn」は誌面のとおり（「成り立つ（はずである）」という接続法の形）。

### ¶18　p.320

> Um der Annahme der steten Bewegung der Gasatome das Befremdende zu nehmen, brauche ich nur daran zu erinnern, in wie kurzer Zeit z. B. eine geringe Menge Schwefelwasserstoffgas sich durch ein grosses Zimmer verbreitet. Aus der Annahme, dass die Temperatur durch <i>mc</i><sup>2</sup> gemessen wird, ergiebt sich auch, dass ein Gas um so schneller diffundiren muss, je geringer sein specifisches Gewicht ist. Beziehen sich z. B. <i>m</i><sub><i>w</i></sub> und <i>c</i><sub><i>w</i></sub> auf Wasserstoff, <i>m</i><sub><i>s</i></sub> und <i>c</i><sub><i>s</i></sub> auf Sauerstoff, so ist <i>m</i><sub><i>s</i></sub> = 16<i>m</i><sub><i>w</i></sub>; aus <i>m</i><sub><i>w</i></sub><i>c</i><sub><i>w</i></sub><sup>2</sup> = <i>m</i><sub><i>s</i></sub><i>c</i><sub><i>s</i></sub><sup>2</sup> folgt also <i>c</i><sub><i>w</i></sub> = 4<i>c</i><sub><i>s</i></sub>. Haben demnach Wasserstoff und Sauerstoff gleiche Temperatur, so ist die Geschwindigkeit der Wasserstoffatome viermal so gross als die der Sauerstoffatome.

気体の原子がたえず動いているという仮定を奇妙に感じる人には、たとえば少しの硫化水素の気体（Schwefelwasserstoffgas）が、どれほど短い時間で大きな部屋じゅうに広がるかを思い出してもらえば足りる。温度が <i>mc</i><sup>2</sup> によって測られるという仮定からは、気体の比重が小さいほど、その気体は速く拡散する（diffundiren）はずだということも出てくる。たとえば <i>m</i><sub><i>w</i></sub> と <i>c</i><sub><i>w</i></sub> を水素の、<i>m</i><sub><i>s</i></sub> と <i>c</i><sub><i>s</i></sub> を酸素の質量と速さとすると、<i>m</i><sub><i>s</i></sub> = 16<i>m</i><sub><i>w</i></sub> である。したがって <i>m</i><sub><i>w</i></sub><i>c</i><sub><i>w</i></sub><sup>2</sup> = <i>m</i><sub><i>s</i></sub><i>c</i><sub><i>s</i></sub><sup>2</sup> から <i>c</i><sub><i>w</i></sub> = 4<i>c</i><sub><i>s</i></sub> が出る。それゆえ、水素と酸素が同じ温度なら、水素の原子の速さは酸素の原子の速さの四倍である。

訳注：添え字の <i>w</i>・<i>s</i> は Wasserstoff（水素）・Sauerstoff（酸素）の頭文字。

### ¶19　p.320

> Wenn die Temperatur eines Gases gleich ist der lebendigen Kraft eines Gasatoms, so muss die in einem Gase enthaltene Wärmemenge <i>Q</i> gleich seyn der lebendigen Kraft aller Atome desselben. Es ist also <i>Q</i> = <i>nmc</i><sup>2</sup> oder <i>Q</i> = <i>nt</i>. Es folgt, dass, wenn wir die Menge eines Gases nach der Anzahl <i>n</i> der Atome bestimmen, alsdann die in gleichen Gasmengen bei derselben Temperatur enthaltenen Wärmequantitäten gleich sind, oder auch, dass bei gleichem Druck und gleicher Temperatur gleiche Volume jedes Gases gleiche Wärmequantitäten enthalten.

気体の温度が、気体の原子一つの活力（lebendige Kraft）に等しいのなら、気体に含まれる熱量（Wärmemenge）<i>Q</i> は、その気体のすべての原子の活力に等しくなければならない。つまり <i>Q</i> = <i>nmc</i><sup>2</sup>、あるいは <i>Q</i> = <i>nt</i> である。ここから、気体の量を原子の数 <i>n</i> で定めるなら、同じ温度で同じ量の気体に含まれる熱量は等しいこと、言いかえれば、同じ圧力・同じ温度では、どの気体も同じ体積に同じ熱量を含むことが出てくる。

訳注：活力（lebendige Kraft）は今の運動エネルギーに当たる。ただしここでは <i>mc</i><sup>2</sup> の形で書かれ、今の ½<i>mv</i><sup>2</sup> の ½ が無い。<i>t</i> は温度の文字で、¶11 で <i>mc</i><sup>2</sup> = <i>t</i> と置かれている。Wärmemenge と Wärmequantität はどちらも「熱量」と訳した。

### ¶20　p.320

> Die der Gleichung <i>Q</i> = <i>nt</i> entsprechende Differentialgleichung drückt aus, dass alle Gase, nach dem Volumen gemessen, eine gleiche und constante specifische Wärme haben.

式 <i>Q</i> = <i>nt</i> に当たる微分方程式（Differentialgleichung）は、体積を単位に測るなら、すべての気体が等しく一定の比熱（specifische Wärme）を持つことを表している。

### ¶21　p.320

> Mehrere der oben abgeleiteten Gesetze sind bekanntlich durch die genauesten Versuche als nicht in aller Strenge richtig erkannt worden. Eine ganz unbeschränkte Gültig- [p.321] keit dieser Gesetze lässt sich auch nicht erwarten. Zwischen zwei parallelen ebenen Wänden, deren Entfernung <i>x</i> ist, sollen zwei Atome in derselben auf den Wänden senkrecht stehenden Linie oscilliren. Zur Zeit 0 soll von jeder Wand ein Atom mit der Geschwindigkeit <i>c</i> ausgehen. Es ist im Vorhergehenden angenommen, dass beide Atome sich gegenseitig nicht afficiren, dass deshalb jedes Atom die ganze Linie <i>x</i> immerfort hin und zurück durchläuft. Dann ist die Anzahl der Stösse beider Atome gegen eine Wand während der Zeiteinheit 2.<i>c</i>/2<i>x</i>. In Wirklichkeit gehen aber beide Atome nicht durch einander hindurch; sie stossen in der Mitte ihrer Bahn central zusammen und gehen, nachdem ihre gegenseitige Berührung aufgehört hat, mit Geschwindigkeiten auseinander, die den früheren gleich und entgegengesetzt sind. Es stossen also nicht beide Atome gegen beide Wände, sondern gegen eine Wand stösst immer dasselbe Atom. Hier sind nun je nach der verschiedenen Zeit, die für die Wirkung der Elasticität erforderlich ist, drei Fälle möglich, zwischen denen sich a priori nicht entscheiden lässt. Entweder gebraucht jedes Atom, um einmal den Weg von der Wand aus bis zum Zusammenstoss mit dem andern Atom und wieder bis zu der Wand zurück zu durchlaufen, genau die Zeit 2.½<i>x</i>/<i>c</i>, oder eine kleinere, oder eine grössere Zeit. Im ersten Falle ist die oben abgeleitete Formel für den Druck vollkommen richtig; im zweiten Falle würde der Druck <i>p</i> grösser als <i>nmc</i><sup>2</sup>/<i>v</i> seyn, im dritten Falle kleiner. — Aehnliche Betrachtungen lassen sich auch in Bezug auf mehrere der übrigen entwickelten Gesetze anstellen.

上で導いた法則のいくつかは、よく知られているように、きわめて精密な実験（Versuch）によって、厳密には正しくないと認められている。これらの法則がまったく無制限に成り立つことも、期待できない。間隔が <i>x</i> の二枚の平行な平らな壁のあいだで、二つの原子が、壁に垂直な同じ一本の線の上を往復するとしよう。時刻 0 に、それぞれの壁から一つずつ原子が速さ <i>c</i> で出発するとする。これまでは、二つの原子は互いに影響しあわず、それゆえどちらの原子も線 <i>x</i> の全体をたえず行き来すると仮定してきた。そうすると、一枚の壁に対する二つの原子の衝突の回数は、単位時間あたり 2・<i>c</i>/2<i>x</i> になる。しかし実際には、二つの原子は互いを通り抜けはしない。二つは道のりの真ん中で正面から（central）衝突し、互いの接触が終わった後、前と大きさが等しく向きが逆の速さで離れていく。したがって、二つの原子がともに両方の壁に当たるのではなく、一枚の壁にはいつも同じ原子が当たる。ここで、弾性（Elasticität）がはたらくのに要する時間の違いに応じて、三つの場合がありうる。そのどれであるかは、前もって（a priori）は決められない。各原子が、壁を出て相手の原子と衝突し、ふたたび壁に戻るまでの道のりを一回通るのに、ちょうど時間 2・½<i>x</i>/<i>c</i> を要するか、それより短い時間か、長い時間を要するかである。第一の場合には、上で導いた圧力の式はまったく正しい。第二の場合には、圧力 <i>p</i> は <i>nmc</i><sup>2</sup>/<i>v</i> より大きくなり、第三の場合には小さくなる。――ほかに展開した法則のいくつかについても、同じような考察ができる。

訳注：<i>v</i> は体積を表す文字で、<i>p</i> = <i>nmc</i><sup>2</sup>/<i>v</i> は ¶8 で導いた圧力の式。「afficiren」は「作用を及ぼす・影響する」の意。

### ¶22　p.321

> Die Temperaturverhältnisse bei Volumenveränderungen der Gase folgen aus den gemachten Annahmen ebenfalls mit Leichtigkeit.

気体の体積が変わるときの温度の関係も、置いた仮定から同じようにたやすく出てくる。

訳注：Temperaturverhältnisse は「温度のありさま・関係」。ここでは体積の変化にともなう温度の変わり方を指すので「温度の関係」と訳した。

### ¶23　p.321

> Es seyen gegeben zwei Gefässe von gleichem Volumen und mit einer gemeinschaftlichen Scheidewand, das erste gefüllt mit <i>n</i> Gasatomen von der Masse <i>m</i> und der Ge- [p.322] schwindigkeit <i>c</i>, das zweite luftleer. Von der Scheidewand werde ein Stück <i>w</i> fortgenommen. Diejenigen Atome, welche gegen <i>w</i> gestossen haben würden, müssen nun durch die Oeffnung hindurchgehen und von den höckerigen Wänden des zweiten Gefässes nach verschiedenen Richtungen zurückprallen. Bald werden in der Zeiteinheit durch die Oeffnung <i>w</i> eben so viel Atome in der einen als in der entgegengesetzten Richtung passiren, und es herrscht in beiden Gefässen gleicher Druck. Bei diesem Vorgange ist aber offenbar <i>c</i> ungeändert geblieben, folglich auch <i>mc</i><sup>2</sup>. Hieraus ergiebt sich: wenn ein Gas sich ausdehnt, ohne einen Widerstand zu überwinden, so erleidet es dabei keine Temperaturveränderung.

同じ体積の二つの容器が、共通の仕切り壁（Scheidewand）を挟んで並んでいるとする。一つめの容器には、質量 <i>m</i>、速さ <i>c</i> の気体の原子が <i>n</i> 個入っており、二つめの容器は空気が無い（luftleer）。仕切り壁から一片 <i>w</i> を取り去る。すると、<i>w</i> に当たるはずだった原子は、その開口（Oeffnung）を通り抜け、二つめの容器のでこぼこした（höckerig）壁に当たって、さまざまな向きにはね返る。やがて、単位時間に開口 <i>w</i> を一方の向きに通る原子と、逆の向きに通る原子の数が等しくなり、二つの容器の圧力は等しくなる。しかしこの過程で、明らかに <i>c</i> は変わっておらず、したがって <i>mc</i><sup>2</sup> も変わっていない。ここから次のことが出てくる。気体が、何の抵抗にも打ち勝つことなく膨張するとき、気体の温度は変わらない。

### ¶24　p.322

> Wenn dagegen der Druck eines Gases oder die Stösse seiner Atome z. B. gegen einen beweglichen und zurückweichenden Stempel erfolgen, so müssen die Atome von ihrer lebendigen Kraft, d. h. von ihrer Wärme, so viel verlieren, als sie dem Stempel mitgetheilt haben.

これに対して、気体の圧力、つまりその原子の衝突が、たとえば動くことができて後ろへ退いていくピストン（Stempel）に向けて起こるなら、原子は、ピストンに与えた分だけ、自分の活力、すなわち自分の熱を失わなければならない。

### ¶25　p.322

> Wenn endlich ein Gas durch einen Stempel zusammengedrückt wird, so müssen die Gasatome von dem ihnen entgegenkommenden Stempel mit grösserer Geschwindigkeit zurückprallen, als sie an denselben herangekommen sind. Deshalb muss das Gas sich erwärmen.
> Berlin, im Juli 1856.

最後に、気体がピストンによって圧縮されるときには、気体の原子は、向かってくるピストンから、近づいたときより大きな速さではね返らなければならない。それゆえ気体は温まらなければならない。
ベルリン、1856 年 7 月。
