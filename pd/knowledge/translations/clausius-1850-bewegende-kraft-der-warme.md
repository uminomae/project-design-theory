# Ueber die bewegende Kraft der Wärme（1850）— 原文（独語）と日本語訳

- 原典：R. Clausius, "Ueber die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen", *Annalen der Physik und Chemie*（Poggendorff 編）79 (1850), pp.368–397（第 3 号）と pp.500–524（第 4 号・「Schluss von S. 397」）。出版社（Wiley）の通しの巻では 155 巻で、DOI は前半が [10.1002/andp.18501550306](https://doi.org/10.1002/andp.18501550306)、後半が [10.1002/andp.18501550403](https://doi.org/10.1002/andp.18501550403)（Crossref で題・頁を照らした）。著者はドイツの物理学者（Rudolf Clausius・1822–1888）。二つの号に分けて載った一つの論文。
- 訳した範囲：全文（第 3 号の題・序・I 節、第 4 号の続きの題・II 節、脚注 26）。パースが「進化的な愛」（1893）の ¶20 で「the mechanical theory of heat by Clausius and by Rankine, independently, in 1850」、¶58 で「The mechanical theory of heat was set forth by Rankine and by Clausius during the same month of February, 1850」と書く、クラウジウスの側の論文。パースは題を挙げていない。1850 年の熱の力学的理論の論文として、Claude がこれに当てた。
- 原文：Internet Archive の誌面の走査 [`sim_annalen-der-physik_1850_79_3`](https://archive.org/details/sim_annalen-der-physik_1850_79_3)（p.368–397。頁と画像の対応は p = n + 337）と [`sim_annalen-der-physik_1850_79_4`](https://archive.org/details/sim_annalen-der-physik_1850_79_4)（p.500–524。p = n + 481）に合わせた（2026-11-19・#175）。文字起こしが無いので、IA の OCR を下敷きに、読む役（Claude のサブエージェント）六つが全 55 頁の画像と一行ずつ照らして起こし、照らす役三つが段ごとに画像と照らし直した。式・記号・上付き下付きは画像から起こした。p.500 の頭には前の論文の終わりが、p.524 の終わりには次の論文の始まりが載っているが、それは入れていない。
- 直したのは次のとおり。綴りは誌面のとおり（sey・Theil・Werth・Gränze など当時の綴り）。ただし誌面のローマン体の ſs の合字は ss と起こした（dass・grösser）。誌面の誤植（hedeutet・parmanenten・Drnck・Longarithmen など）は直さずに置き、訳注に書いた。字間を空けた強調（隔字体）と斜体は `*…*` で示した（原文の人名の斜体も残した。訳では人名に印を付けていない）。式の変数は斜体で示した。誌面の脚注は頁ごとに 1)・2) で付いているので、通しの注1〜注26 にした。
- 式の書き方：誌面で分数として縦に組まれた式は、/ で一行に書いた。誌面が括弧で囲んだ微分商（今の偏微分に当たる）は、その括弧を残した（例 (<i>dQ</i>/<i>dv</i>)）。誌面に括弧の無い分数は、読み違えない所では括弧を付けていない（<i>dp</i>/<i>dt</i>）。独立の行の式は原文でも訳でも独立の行に置き、式の番号（(I.)・(1.)・(V<i>a</i>.) など）は誌面のとおり残した。小数は、原文も訳も誌面のとおりコンマで書いた（0,622 は 0.622）。
- 図：誌面の文中の木版の図（図1〜図4）は写していない。図のある所に [図N] と置き、訳注で図の形を書いた。誌面の図は、上の走査の p.379（図1）・p.381（図2）・p.385（図3）・p.387（図4）で見られる。
- 段の分け方：誌面の段落のとおり。題と節の見出しは、それぞれ一つの段にした（¶1 第 3 号の題・¶9 I 節・¶57 第 4 号の題・¶58 II 節）。題の頭の「V.」「II.」は、それぞれの号の中の論文の番号。
- **訳は Claude（AI）によるもの。** 2026-11-19 に訳した。英訳・日本語訳などの既にある訳を見ずに、独語の原文から付けた。読む役に原文の起こしと訳の案を出させ、照らす役に原文と画像・訳を段ごとに照らさせ、Claude がつないで入れた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（クラウジウスの表）でそろえた。`訳注：` の行は Claude の注。
- クラウジウスは、熱は仕事に変わるときに消費され、その量は仕事に比例する、という原則（I 節）と、仕事が生まれるときには熱が温かい物体から冷たい物体へ移る、というカルノーの原則を、第一の原則と両立する形に直したもの（II 節）の二つを立てる。この訳では Grundsatz を「原則」、Princip を「原理」とした。蒸気の Spannkraft・Spannung は「張力」（今の圧力に当たる。ヘルムホルツの対訳の Spannkraft＝緊張力とは別の意味）、Dampf im Maximum der Dichte は「密度が最大の蒸気」（今の飽和蒸気）とした。
- 段の見出しの頁は誌面の頁。段の途中で頁が変わるところは `[p.N]`。

### ¶1　p.368

> V. Ueber die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen; von R. *Clausius*.

V. 熱の動力について、またそこから熱学そのものについて導かれる法則について。R. クラウジウス

訳注：題の全体は誌面で斜体。頭の「V.」はこの号の中の論文の番号。著者名は隔字体。bewegende Kraft der Wärme は、カルノーの puissance motrice du feu の独訳に当たる語で、「熱の動力」と訳す。

### ¶2　p.368

> Seit man mit Hülfe der Dampfmaschinen die Wärme als bewegende Kraft benutzt, und dadurch practisch darauf hingewiesen hat, eine gewisse Arbeitsgrösse als Aequivalent für die dazu nöthige Wärme zu betrachten, lag es nahe, auch theoretisch eine bestimmte Beziehung zwischen einer Wärmemenge und der durch sie möglicher Weise hervorzubringenden Arbeit vorauszusetzen, und diese Beziehung zu benutzen, um aus ihr Schlüsse über das Wesen und die Gesetze der Wärme selbst abzuleiten. Es sind auch in der That schon einige erfolgreiche Versuche der Art gemacht; doch glaube ich, dass der Gegenstand damit noch nicht erschöpft ist, sondern die fortgesetzte Beachtung der Physiker verdient, indem sich theils gegen die bisher gezogenen Schlüsse noch erhebliche Einwendungen machen lassen, theils andere Schlüsse, zu welchen sich Gelegenheit bietet, und welche zur Begründung und Vervollständigung der Wärmetheorie wesentlich beitragen können, entweder noch ganz unerwähnt geblieben, oder doch noch nicht mit hinlänglicher Bestimmtheit ausgesprochen sind.

蒸気機関の助けを借りて熱を動力として使うようになり、それによって実地の上で、ある量の仕事を、そのために要る熱の当量とみなすよう促されてきた。そうである以上、理論の上でも、ある熱量と、それによって生み出しうる仕事とのあいだに一定の関係を仮定し、その関係を使って熱そのものの本性と法則について結論を導こう、と考えるのは自然であった。実際、この種の試みはすでにいくつか行われ、成果も上げている。しかし私は、この主題はそれで尽きたのではなく、物理学者がこれからも注意を向けるに値すると考える。というのは、一つには、これまでに引き出された結論に対して、なお重大な異論を立てることができるからであり、もう一つには、引き出す機会があり、熱の理論の基礎づけと完成に本質的に役立ちうる別の結論が、まったく触れられないままか、少なくとも十分な明確さで述べられていないからである。

### ¶3　p.368–369

> Die wichtigste hierher gehörige Untersuchung rührt von S. *Carnot* her [注1] und die Ideen dieses Autors sind später noch auf eine sehr geschickte Weise von *Clapeyron* *analytisch* dargestellt [注2]. *Carnot* weist nach, dass jederzeit, wenn Arbeit durch Wärme geleistet wird, und nicht zugleich eine bleibende [p.369] Veränderung in dem Zustande des wirksamen Körpers eintritt, eine gewisse Wärmemenge von einem warmen zu einem kalten Körper übergeht, wie z. B. bei der Dampfmaschine durch Vermittelung des Dampfes, welcher sich im Kessel entwickelt und dann im Condensator wieder niederschlägt, Wärme vom Heerde, zum Condensator übergetragen wird. Diese *Uebertragung* nun betrachtet er als die der hervorgebrachten Arbeit entsprechende Wärmeveränderung. Er sagt ausdrücklich, dass dabei keine Wärme *verloren* gehe, sondern die *Quantität* derselben unverändert bleibe, indem er hinzufügt: „Diese Thatsache ist nie bezweifelt worden; sie ist zuerst ohne Untersuchung angenommen, und dann in vielen Fällen durch calorimetrische Versuche bestätigt. Sie zu verneinen würde heissen, die ganze Theorie der Wärme, in welcher sie der Hauptgrundsatz ist, umstossen“.

ここに属するもっとも重要な研究は、S. カルノーによるもの [注1] である。この著者の考えは、のちにクラペイロンによって、たいへん巧みなやり方で解析的に書き表された [注2]。カルノーが示すのは次のことである。熱によって仕事がなされ、しかも同時に、働く物体の状態に残る [p.369] 変化が起こらないときには、いつでも、ある熱量が温かい物体から冷たい物体へ移る。たとえば蒸気機関では、ボイラーで生じ、そのあと復水器でふたたび凝結する蒸気の仲立ちによって、熱が炉から復水器へ移される。カルノーは、この*移すこと*を、生み出された仕事に対応する熱の変化とみなす。彼ははっきりと、そのとき熱は少しも*失われ*ず、熱の*量*は変わらないままだと言い、こう付け加えている。「この事実はかつて疑われたことがない。それははじめ調べられることなく受け入れられ、その後、多くの場合に熱量測定の実験によって確かめられた。これを否定することは、それを主要な原則とする熱の理論の全体をくつがえすことになろう」。

訳注：カルノーの引用は、注 1 にあるとおり、クラウジウスがトムソンの英文から独訳したもの。ここでの訳はその独訳から訳した。訳の [p.369] は、原文の切れ目（bleibende の後ろ）に当たる「残る」の後ろに置いた。

### ¶4　p.369–370

> Ich weiss indessen nicht, dass es experimentell hinlänglich feststeht, dass bei der Erzeugung von Arbeit nie ein Verlust von Wärme stattfinde; vielmehr kann man vielleicht mit grösserem Rechte das Gegentheil behaupten, dass, wenn ein solcher Verlust auch noch nicht direct nachgewiesen ist, er doch durch andere Thatsachen nicht nur zulässig, sondern sogar höchst wahrscheinlich gemacht wird. Wenn man annimmt, die Wärme könne, ebenso wie ein Stoff, nicht an Quantität geringer werden, so muss man auch annehmen, dass sie sich nicht vermehren könne. Es ist aber fast unmöglich z. B. die durch Reibung verursachte Erwärmung ohne eine Vermehrung der Wärmequantität zu erklären, und durch die sorgfältigen Versuche von *Joule*, bei welchen auf sehr verschiedene Weisen unter Anwendung von mechanischer Arbeit Erwärmung hervorgerufen wurde, ist ausser der Möglichkeit, die Wärmequantität überhaupt zu vermehren, auch der Satz, dass die Menge der neu erzeugten Wärme der dazu angewandten Arbeit proportional sey, fast zur Gewissheit geworden. Dazu kommt noch, dass in neuerer Zeit immer noch mehr Thatsachen bekannt werden, welche dafür sprechen, dass die Wärme [p.370] nicht ein Stoff sey, sondern in einer Bewegung der kleinsten Theile der Körper bestehe. Wenn dieses richtig ist, so muss sich auf die Wärme auch der allgemeine Satz der Mechanik anwenden lassen, dass eine vorhandene Bewegung sich in Arbeit umsetzen kann, und zwar so, dass der Verlust an lebendiger Kraft der geleisteten Arbeit proportional ist.

しかし私の知るかぎり、仕事を生み出すときに熱がけっして失われないということが、実験によって十分に確かめられているわけではない。むしろ、その反対を主張するほうが理にかなっているかもしれない。すなわち、そうした損失はまだ直接には示されていないとしても、ほかの事実によって、ありうるだけでなく、きわめて確からしいものになっている、と。熱が物質と同じように量を減らすことがありえないと仮定するなら、熱は増えることもありえないと仮定しなければならない。ところが、たとえば摩擦による温まりを、熱の量が増えることなしに説明するのは、ほとんど不可能である。そして、力学的な仕事を使ってさまざまなやり方で温まりを起こしたジュールの念入りな実験によって、熱の量がそもそも増えうることに加えて、新たに生み出された熱の量はそのために使った仕事に比例する、という命題も、ほとんど確実になった。さらに近ごろは、熱は物質 [p.370] ではなく、物体のもっとも小さな部分の運動にある、ということを支持する事実が、ますます多く知られてきている。これが正しいなら、熱にも力学の一般的な命題が当てはまるはずである。すなわち、いまある運動は仕事に変わりうる。しかも、活力の損失がなされた仕事に比例するように変わる。

訳注：活力（lebendige Kraft）は、今の運動エネルギーに当たる量（当時は <i>mv</i><sup>2</sup> または その半分を指した）。

### ¶5　p.370

> Diese Umstände, welche auch *Carnot* sehr wohl kannte, und deren Gewicht er ausdrücklich zugestanden hat, fordern dringend dazu auf, die Vergleichung zwischen Wärme und Arbeit, auch unter der abweichenden Voraussetzung vorzunehmen, dass zur Erzeugung von Arbeit nicht bloss eine Aenderung in der *Vertheilung* der Wärme, sondern auch ein wirklicher *Verbrauch* von Wärme nöthig sey, und dass umgekehrt durch Verbrauch von Arbeit wiederum Wärme *erzeugt* werden könne.

こうした事情は、カルノーもよく知っており、その重みをはっきり認めていた。これらの事情は、熱と仕事の比較を、別の前提のもとでも行うよう強く促す。その前提とは、仕事を生み出すには、熱の*配分*が変わるだけでなく、熱が実際に*消費*されることが必要であり、逆に、仕事を消費することによって、ふたたび熱が*生み出され*うる、というものである。

訳注：カルノーがその重みを認めていた、という箇所を、クラウジウスは示していない。どこを指すかは確かめていない（注 1 のとおり、クラウジウスはカルノーの本を直接は見ず、クラペイロンとトムソンを通して知っている）。

### ¶6　p.370–371

> In einer vor Kurzem erschienenen Abhandlung von *Holtzmann* [注3] scheint es anfangs, als wolle der Verfasser den Gegenstand von diesem letzteren Gesichtspunkte aus betrachten. Er sagt (S. 7): „die Wirkung der zu dem Gase getretenen Wärme ist somit entweder Temperaturerhöhung, verbunden mit Vermehrung der Elasticität, oder eine mechanische Arbeit, oder eine Verbindung von beiden, und eine mechanische Arbeit ist das Aequivalent der Temperaturerhöhung. Die Wärme kann man nur durch ihre Wirkungen messen; von den beiden genannten Wirkungen passt hierzu besonders die mechanische Arbeit, und diese soll in dem Folgenden hierzu gewählt werden. Ich nenne Wärmeeinheit die Wärme, welche bei ihrem Zutritte zu Gas die mechanische Arbeit <i>a</i> zu leisten vermag, d. h. um bestimmte Maasse zu gebrauchen, die <i>a</i> Kilogramme auf 1 Meter erheben kann“. Später (S. 12.) bestimmt er auch den Zahlenwerth der Constanten <i>a</i> auf dieselbe Weise wie es schon früher von *Meyer* geschehen ist [注4], und erhält [p.371] eine Zahl, die ganz dem von *Joule* auf verschiedene andere Weisen bestimmten Wärmeaequivalente entspricht. Bei der weitern Ausführung der Theorie aber, nämlich bei der Entwickelung der Gleichungen, durch welche die von ihm gezogenen Schlüsse vermittelt werden, verfährt er ebenso wie *Clapeyron*, so dass darin doch wieder stillschweigend die Annahme liegt, dass die Quantität der Wärme constant sey.

少し前に出たホルツマンの論文 [注3] では、はじめ、著者はこの後のほうの見地から主題を扱おうとしているように見える。彼は（S. 7 で）こう言う。「したがって、気体に加わった熱の働きは、弾性の増加をともなう温度の上昇か、力学的な仕事か、その両方の組み合わせであり、力学的な仕事は温度の上昇の当量である。熱はその働きによってしか測れない。挙げた二つの働きのうち、測るのに特に向いているのは力学的な仕事であり、以下ではこれを選ぶ。私は、気体に加わったときに力学的な仕事 <i>a</i> をなしうる熱を、熱の単位と呼ぶ。すなわち、決まった単位で言えば、<i>a</i> キログラムを 1 メートル持ち上げうる熱である」。のちに（S. 12 で）彼は、定数 <i>a</i> の数値も、マイヤーがすでに先に行ったのと同じやり方で定め [注4]、ジュールがほかのさまざまなやり方で定めた熱の当量に [p.371] ぴったり合う数を得ている。しかし理論をさらに進めるところ、すなわち彼が引き出す結論を仲立ちする方程式を立てるところでは、彼はクラペイロンと同じように進める。そのため、そこにはやはり、熱の量は一定だという仮定が暗に含まれている。

訳注：Holtzmann は Carl Holtzmann（1811–1865）。誌面は本文で Holtzmann、注で Holzmann と綴る（注3 の訳注）。Meyer は、熱の当量を 1842 年に論じた Julius Robert Mayer（1814–1878）を指す。誌面の綴り Meyer は誤植と見て、直さずに置く。「S. 7」「S. 12」の S. は Seite（頁）で、注 3 のマンハイム版の頁と推測する（OCR は「$. 7」と読むが、画像は S. 7）。

### ¶7　p.371–372

> Viel klarer ist der Unterschied der beiden Betrachtungsweisen von W. *Thomson* aufgefasst, welcher die *Carnot*'sche Abhandlung durch Anwendung der neueren Beobachtungen von *Regnault* über die Spannkraft und latente Wärme des Wasserdampfes vervollständigt hat [注5]. Dieser spricht die Hindernisse, welche der unbedingten Annahme der *Carnot*'schen Theorie entgegenstehen, bestimmt aus, mit besonderer Hinweisung auf die Untersuchungen von *Joule*, und hebt auch einen principiellen Einwand, der sich dagegen machen lässt, hervor. Wenn nämlich auch bei jeder Erzeugung von Arbeit, so fern der wirksame Körper nach ihrer Erzeugung wieder in demselben Zustande ist, wie vorher, Wärme aus einem warmen in einen kalten Körper übergeht, so wird doch nicht umgekehrt bei jedem solchen Uebergange auch Arbeit erzeugt, sondern die Wärme kann auch durch einfache Leitung übergeführt werden, und in allen diesen Fällen würde also, wenn der blosse Uebergang von Wärme das wahre Aequivalent der Arbeit wäre, ein Verlust von Arbeitskraft in der Natur stattfinden, was nicht wohl denkbar ist. Dessen ungeachtet kommt er zu dem Schlusse, dass bei dem gegenwärtigen Stande der Wissenschaft das von *Carnot* angenommene Princip doch noch als die wahrscheinlichste Grundlage einer Untersuchung über die bewegende Kraft der Wärme zu betrachten sey, indem er sagt: „wenn wir dieses Princip verlassen, so stossen wir auf unzählige andere Schwierigkeiten, welche ohne fernere experimentelle Untersuchung und ohne einen vollständigen [p.372] Neubau der Wärmetheorie von Grund auf unüberwindlich sind“.

二つの見方の違いを、はるかにはっきりとつかんだのは W. トムソンである。彼は、水蒸気の張力と潜熱についてのルニョーの新しい観測を用いて、カルノーの論文を補い完成させた [注5]。トムソンは、カルノーの理論をそのまま受け入れることを妨げる障害を、特にジュールの研究を指して、はっきりと述べる。また、カルノーの理論に向けうる原理上の異論も取り上げる。すなわち、仕事が生み出されるたびに、働く物体が仕事のあとで前と同じ状態に戻っているかぎり、熱が温かい物体から冷たい物体へ移るとしても、逆に、そのような移行のたびに仕事も生み出されるわけではない。熱は単なる伝導によっても移りうる。だから、熱の移行だけが仕事の真の当量だとすれば、こうした場合のすべてで、自然の中で仕事をする力が失われることになる。それはおよそ考えにくい。それにもかかわらず、トムソンは、今の学問の状態では、カルノーが採った原理を、それでもなお、熱の動力の研究のもっとも確からしい土台とみなすべきだ、という結論に至る。彼はこう言う。「この原理を捨てるなら、われわれは数えきれないほどの別の困難にぶつかる。それらは、さらなる実験による研究なしに、また熱の理論を根本から [p.372] 建て直すことなしには、乗り越えられない」。

訳注：W. Thomson は William Thomson（1824–1907。のちのケルヴィン卿）。Regnault は Henri Victor Regnault（1810–1878）。Spannkraft（張力）は、今の圧力に当たる（ここでは飽和蒸気の圧力、すなわち蒸気圧）。トムソンの引用も、クラウジウスが英文から独訳したもの。

### ¶8　p.372

> Ich glaube aber, dass man vor diesen Schwierigkeiten nicht zurückschrecken darf, und sich vielmehr mit den Folgen der Idee, dass die Wärme eine Bewegung sey, möglichst vertraut machen muss, indem man nur dadurch die Mittel gewinnen kann, dieselbe zu bestätigen oder zu widerlegen. Auch halte ich die Schwierigkeiten nicht für so bedeutend, wie *Thomson*, denn wenn man auch in der bisher gebräuchlichen *Vorstellungsweise* Einiges ändern muss, so kann ich doch mit *erwiesenen Thatsachen* nirgends einen Widerspruch finden. Es ist nicht einmal nöthig, die *Carnot*'sche Theorie dabei ganz zu verwerfen, wozu man sich gewiss schwer entschliessen würde, da sie zum Theil durch die Erfahrung eine auffallende Bestätigung gefunden hat. Bei näherer Betrachtung findet man aber, dass nicht das eigentliche Grundprincip von *Carnot*, sondern nur der Zusatz, *dass keine Wärme verloren gehe*, der neuen Betrachtungsweise entgegenstehe, denn es kann bei der Erzeugung von Arbeit sehr wohl beides gleichzeitig stattfinden, dass eine gewisse Wärmemenge *verbraucht* und eine andere von einem warmen zu einem kalten Körper *übergeführt* wird, und beide Wärmemengen können zu der erzeugten Arbeit in bestimmter Beziehung stehen. Es wird dieses im Nachstehenden noch deutlicher werden, und es wird sich dabei zeigen, dass die aus beiden Annahmen gefolgerten Schlüsse nicht nur neben einander bestehen können, sondern sich sogar gegenseitig bestätigen.

しかし私は、こうした困難の前でしりごみしてはならないと考える。むしろ、熱は運動であるという考えから出てくる帰結に、できるかぎり親しまなければならない。そうすることによってしか、その考えを確かめたり退けたりする手立ては得られないからである。また私は、困難をトムソンほど大きいとは思わない。これまでふつうだった*考え方*をいくらか変えなければならないとしても、*確かめられた事実*と食い違うところは、どこにも見つからないからである。そのさいカルノーの理論をすっかり捨てる必要すらない。それを捨てる決心はなかなかつかないだろう。カルノーの理論は、一部では経験によって目覚ましく確かめられているからである。よく見ると、新しい見方とぶつかるのは、カルノーの本来の根本原理ではなく、*熱は失われない*という付け足しだけだとわかる。というのは、仕事が生み出されるとき、ある熱量が*消費*され、別の熱量が温かい物体から冷たい物体へ*移される*という二つのことが、同時に起こってかまわないからである。そして、その二つの熱量はどちらも、生み出された仕事と一定の関係にありうる。このことは以下でさらにはっきりするだろう。そのとき、二つの仮定から引き出される結論は、並び立ちうるだけでなく、互いに確かめ合いさえすることがわかるだろう。

訳注：ここで並べられる「二つの仮定」が、のちに熱と仕事の等価（今の第一法則に当たる）と、カルノーの原則を改めたもの（今の第二法則に当たる）として、論文の第 I 部と第 II 部になる。

### ¶9　p.372

> I. Folgerungen aus dem Grundsatze über die Aequivalenz von Wärme und Arbeit.

I. 熱と仕事の等価の原則から出てくる帰結

訳注：節の見出しは、誌面で字間を空けた太字。

### ¶10　p.372–373

> Es soll hier auf die Art der Bewegung, welche man sich etwa im Innern der Körper vorstellen kann, nicht näher eingegangen, sondern nur im Allgemeinen angenommen werden, dass eine Bewegung der Theilchen bestehe, und dass die Wärme das Maass der lebendigen Kraft derselben sey, oder vielmehr noch allgemeiner, es soll nur [p.373] ein durch jene Annahme bedingter Satz als Grundsatz hingestellt werden, nämlich
>
> *dass in allen Fällen, wo durch Wärme Arbeit entstehe, eine der erzeugten Arbeit proportionale Wärmemenge verbraucht werde, und dass umgekehrt durch Verbrauch einer ebenso grossen Arbeit dieselbe Wärmemenge erzeugt werden könne.*

ここでは、物体の内部に思い描きうる運動の種類には、立ち入らない。ただ一般に、粒子の運動があり、熱はその活力の尺度である、と仮定する。いや、もっと一般に、その仮定から出てくる一つの命題だけを原則として [p.373] 立てる。すなわち、

*熱によって仕事が生じるすべての場合に、生み出された仕事に比例する熱量が消費される。そして逆に、同じ大きさの仕事を消費することによって、同じ熱量が生み出されうる。*

訳注：誌面では、原則の文は字下げした斜体の数行で、前の文の「nämlich」を受ける同じ段の続き。ここで立てられた原則が、今の熱力学の第一法則（熱と仕事の等価）に当たる。

### ¶11　p.373

> Bevor wir zu der mathematischen Behandlung dieses Grundsatzes übergehen, mögen einige unmittelbare Folgerungen voraufgeschickt werden, welche auf die ganze Betrachtungsweise der Wärme von Einfluss sind, und welche sich auch schon ohne die bestimmtere Begründung, die sie weiterhin durch die Rechnung finden sollen, verstehen lassen.

この原則を数学的に扱う前に、そこからすぐに出てくる帰結をいくつか先に述べておこう。それらは熱の見方の全体に影響する。また、あとで計算によってもっと確かな裏づけを得ることになるが、その裏づけがなくても、すでに理解できる。

### ¶12　p.373–374

> Man spricht häufig von der *Gesammtwärme* der Körper, besonders der Gase und Dämpfe, indem man darunter die Summe der freien und latenten Wärme versteht, und annimmt, dass diese eine nur vom gegenwärtigen Zustande des betrachteten Körpers abhängige Grösse sey, so dass, wenn man alle übrigen physikalischen Eigenschaften desselben, seine Temperatur, seine Dichte etc. kenne, auch die in ihm enthaltene Gesammtwärme vollkommen bestimmt sey. Diese Annahme ist aber nach dem vorigen Grundsatze nicht mehr zulässig. Wenn nämlich ein Körper in einem bestimmten Zustande z. B. eine Quantität Gas bei der Temperatur <i>t</i><sub>0</sub> und dem Volumen <i>v</i><sub>0</sub> gegeben ist, und man nimmt nun verschiedene Veränderungen in Bezug auf Temperatur und Volumen mit ihm vor, bringt es aber schliesslich wieder in seinen ursprünglichen Zustand zurück, so müsste jener Annahme nach auch seine Gesammtwärme wieder dieselbe seyn, wie zu Anfang, woraus folgt, dass, wenn ihm während eines Theiles der Veränderungen Wärme von Aussen mitgetheilt wurde, er während des anderen Theiles wieder dieselbe Wärmemenge nach Aussen abgegeben haben müsste. Nun wird aber bei jeder Veränderung des Volumens eine gewisse Arbeit von dem Gase geleistet oder verbraucht, indem es bei der Ausdehnung einen äussern Druck [p.374] zurückschiebt, und umgekehrt die Zusammendrückung nur durch Vorrücken des äussern Druckes bewirkt werden kann. Wenn also unter den mit ihm vorgenommenen Veränderungen auch Volumenveränderungen vorkamen, so muss auch hier Arbeit geleistet und verbraucht seyn. Es ist aber nöthig, dass zuletzt, wenn es wieder bei seinem ursprünglichen Zustande angelangt ist, die im Ganzen erzeugte Arbeit der verbrauchten gerade gleich sey, so dass sie sich gegenseitig aufheben, sondern es kann ein Ueberschuss der einen oder der anderen stattfinden, jenachdem die Zusammendrückung bei niederer oder höherer Temperatur, als die Ausdehnung, bewirkt wurde, was weiter unten noch bestimmter nachgewiesen werden soll. Diesem Ueberschusse an erzeugter oder verbrauchter Arbeit muss dann dem Grundsatze nach auch ein proportionaler Ueberschuss an verbrauchter oder erzeugter Wärme entsprechen, und das Gas kann also nicht ebenso viel Wärme nach Aussen abgegeben, als von Aussen empfangen haben.

物体の、特に気体と蒸気の*全熱*ということがよく言われる。それは自由な熱と潜熱の和を指す。そして、全熱は考えている物体の今の状態だけで決まる量だ、と仮定される。つまり、その物体のほかの物理的な性質、温度や密度などをすべて知れば、その中に含まれる全熱も完全に決まる、というのである。しかし、さきの原則に従えば、この仮定はもう許されない。すなわち、ある物体がある決まった状態で、たとえば温度 <i>t</i><sub>0</sub>、体積 <i>v</i><sub>0</sub> の、ある量の気体として与えられているとする。そこで、温度と体積についてさまざまな変化をこの気体に加え、最後にもとの状態へ戻すとする。すると、あの仮定によれば、その全熱も、はじめと同じになっていなければならない。そこから、変化の一部のあいだに外から熱が与えられたのなら、残りの部分のあいだに同じ熱量を外へ出していなければならない、ということになる。ところが、体積が変わるたびに、気体はある仕事をするか、仕事を消費する。膨張するときには外部の圧力を [p.374] 押し返し、逆に圧縮は、外部の圧力が押し進むことによってしか起こせないからである。だから、加えた変化の中に体積の変化もあったなら、ここでも仕事がなされ、また消費されていなければならない。しかし、最後にもとの状態へ戻ったとき、全体として生み出された仕事が、消費された仕事とちょうど等しく、互いに打ち消し合う必要はない。圧縮が膨張より低い温度で行われたか高い温度で行われたかに応じて、どちらかが余りうる。このことは、あとでもっとはっきり示す。すると原則によって、生み出された仕事または消費された仕事のこの余りには、消費された熱または生み出された熱の、比例する余りが対応しなければならない。だから気体は、外から受け取ったのと同じだけの熱を外へ出したことにはなりえない。

訳注：「Es ist aber nöthig, dass …」は、後ろの「sondern」と意味の流れから見て「Es ist aber nicht nöthig」（必要はない）の nicht が落ちた誤植と見る。誌面のまま置き、訳は nicht を補った意味で訳した。全熱（Gesammtwärme）が状態だけで決まらない、という論は、今の言い方では、熱が状態量でない（経路によって決まる）ことに当たる。

### ¶13　p.374

> Derselbe Widerspruch mit der gebräuchlichen Annahme über die *Gesammtwärme* lässt sich noch auf eine etwas andere Weise darstellen. Wenn das Gas von <i>t</i><sub>0</sub> und <i>v</i><sub>0</sub> auf die höhere Temperatur <i>t</i><sub>1</sub> und das grössere Volumen <i>v</i><sub>1</sub> gebracht werden soll, so würde die Wärmemenge, die ihm dazu mitgetheilt werden muss, nach jener Annahme von der Weise, in welcher die Veränderung geschieht, unabhängig seyn; aus dem obigen Grundsatze aber ergiebt sie sich als verschieden, jenachdem man das Gas erst bei dem constanten Volumen <i>v</i><sub>0</sub> erwärmt und dann bei der constanten Temperatur <i>t</i><sub>1</sub> sich ausdehnen lässt, oder erst die Ausdehnung bei der Temperatur <i>t</i><sub>0</sub> geschehen lässt, und dann die Erwärmung vornimmt, oder Ausdehnung und Erwärmung in irgend einer anderen Art wechseln oder auch beide gleichzeitig stattfinden lässt; denn in allen diesen Fällen ist die vom Gase geleistete Arbeit verschieden.

*全熱*についてのふつうの仮定とのこの同じ食い違いは、少し別のやり方でも示せる。気体を <i>t</i><sub>0</sub> と <i>v</i><sub>0</sub> から、より高い温度 <i>t</i><sub>1</sub> とより大きい体積 <i>v</i><sub>1</sub> へ移すとしよう。あの仮定によれば、そのために気体に与えなければならない熱量は、変化のさせ方によらないはずである。しかし、さきの原則からは、その熱量は次のどれを選ぶかによって違ってくる。はじめ一定の体積 <i>v</i><sub>0</sub> で気体を温め、次に一定の温度 <i>t</i><sub>1</sub> で膨張させるか。はじめ温度 <i>t</i><sub>0</sub> で膨張させ、次に温めるか。膨張と温めを何かほかのやり方で交互に行うか、あるいは両方を同時に行わせるか。これらの場合のすべてで、気体がする仕事が違うからである。

### ¶14　p.374–375

> Ebenso muss es, wenn eine Quantität Wasser von der Temperatur <i>t</i><sub>0</sub> in Dampf von der Temperatur <i>t</i><sub>1</sub> und dem Volumen <i>v</i><sub>1</sub> gebracht werden soll, in Bezug auf die dazu [p.375] nöthige Wärmemenge einen Unterschied machen, ob man das Wasser erst als solches bis <i>t</i><sub>1</sub> erwärmt, und dann verdampfen lässt, oder es bei <i>t</i><sub>0</sub> verdampfen lässt, und dann den Dampf auf das geforderte Volumen und die geforderte Temperatur <i>v</i><sub>1</sub> und <i>t</i><sub>1</sub> bringt, oder endlich die Verdampfung bei irgend einer mittleren Temperatur geschehen lässt.

同じように、温度 <i>t</i><sub>0</sub> の水のある量を、温度 <i>t</i><sub>1</sub>、体積 <i>v</i><sub>1</sub> の蒸気にするときにも、そのために要る熱量 [p.375] に違いが出るはずである。水を水のまま <i>t</i><sub>1</sub> まで温めてから蒸発させるか、<i>t</i><sub>0</sub> で蒸発させてから、蒸気を求める体積 <i>v</i><sub>1</sub> と求める温度 <i>t</i><sub>1</sub> にするか、あるいはまた、どこか中間の温度で蒸発させるか、によってである。

### ¶15　p.375

> Hieraus und aus der unmittelbaren Betrachtung des Grundsatzes übersieht man auch, welche Vorstellung man sich von der *latenten* Wärme bilden muss. Nehmen wir wieder das zuletzt angewandte Beispiel, so unterscheiden wir in der Wärmemenge, welche dem Wasser bei seinen Veränderungen mitgetheilt werden muss, die *freie* und *latente* Wärme. Von diesen dürfen wir aber in dem gebildeten Dampfe nur die erstere als wirklich vorhanden betrachten. Die letztere ist nicht bloss, wie der Name andeutet, für unsere Wahrnehmung *verborgen*, sondern *überhaupt nicht vorhanden*; sie ist während der Veränderungen zu Arbeit *verbraucht*.

ここから、また原則をじかに考えることから、*潜熱*についてどんな考えを持たなければならないかも見てとれる。最後に使った例をふたたび取ると、水がその変化のあいだに与えられなければならない熱量の中に、われわれは*自由な*熱と*潜*熱を区別する。しかし、できた蒸気の中に実際にあるとみなしてよいのは、そのうち前者だけである。後者は、名前が示すように、われわれの知覚から*隠れている*だけではなく、*そもそも存在しない*。それは変化のあいだに仕事へと*消費された*のである。

訳注：latent は「隠れた」の意。潜熱はもとは、温度計に表れずに物体の中に隠れている熱、という熱素説の考えから来た名。

### ¶16　p.375

> In der verbrauchten Wärme müssen wir wiederum noch eine Unterscheidung einführen. Die geleistete Arbeit ist nämlich von zweifacher Art. Erstens gehört eine gewisse Arbeit dazu, um die gegenseitige Anziehungskraft der Theilchen des Wassers zu überwinden, und sie bis zu der Entfernung von einander zu trennen, in welcher sie sich beim Dampfe befinden. Zweitens muss der Dampf bei seiner Entwickelung einen äusseren Druck zurückschieben, um sich Raum zu schaffen. Die erstere Arbeit wollen wir die *innere*, die letztere die *äussere* nennen, und danach auch die latente Wärme eintheilen.

消費された熱の中にも、さらにもう一つ区別を入れなければならない。なされる仕事が二通りだからである。第一に、水の粒子どうしが引き合う力に打ち勝ち、蒸気のときの間隔まで粒子を互いに引き離すのに、ある仕事が要る。第二に、蒸気は生じるときに、自分の場所をつくるために外部の圧力を押し返さなければならない。前者の仕事を*内部の*仕事、後者を*外部の*仕事と呼ぶことにしよう。そして、それに従って潜熱も分ける。

### ¶17　p.375–376

> In Bezug auf die *innere* Arbeit kann es keinen Unterschied machen, ob die Verdampfung bei <i>t</i><sub>0</sub> oder bei <i>t</i><sub>1</sub> oder bei einer mittleren Temperatur geschieht, indem wir die anziehende Kraft der Theilchen, welche zu überwinden ist, als unveränderlich betrachten müssen [注6]. Die *äussere* [p.376] Arbeit dagegen richtet sich nach dem von der Temperatur abhängigen Drucke. Dasselbe gilt natürlich, ebenso wie in diesem besonderen Beispiele, auch allgemein, und wenn daher oben gesagt wurde, dass die Wärmemenge, welche einem Körper mitgetheilt werden muss, um ihn aus einem Zustande in einen anderen zu bringen, nicht bloss von dem Anfangs- und Endzustande, sondern von dem ganzen Wege, auf dem die Veränderung geschieht, abhänge, so bezieht sich das nur auf *den* Theil der *latenten* Wärme, welcher der *äusseren* Arbeit entspricht. Der andere Theil der *latenten* Wärme, so wie die ganze *freie* Wärme, sind von dem Wege der Veränderungen unabhängig.

*内部の*仕事については、蒸発が <i>t</i><sub>0</sub> で起こるか、<i>t</i><sub>1</sub> で起こるか、中間の温度で起こるかで、違いはありえない。打ち勝たなければならない粒子の引き合う力は、変わらないものとみなさなければならないからである [注6]。これに対して、*外部の* [p.376] 仕事は、温度によって決まる圧力に従う。この特別な例でそうであるのと同じく、これは当然、一般にも成り立つ。だから、上で、物体をある状態から別の状態へ移すために与えなければならない熱量は、はじめの状態と終わりの状態だけでなく、変化がたどる道の全体によって決まる、と言ったが、それは潜熱のうち、*外部の*仕事に対応する*その*部分だけにかかわる。*潜熱*の残りの部分は、*自由な*熱の全体と同じく、変化の道によらない。

訳注：内部の仕事と自由な熱が道によらず、外部の仕事に当たる熱だけが道による、という区別は、のちに内部エネルギー（状態で決まる量）として整理されるものの芽に当たる、と言える（推測を含む見取り）。

### ¶18　p.376

> Wenn sich nun der Dampf von <i>t</i><sub>1</sub> und <i>v</i><sub>1</sub> wieder in Wasser von <i>t</i><sub>0</sub> verwandelt, so wird dabei umgekehrt Arbeit *verbraucht*, indem die Theilchen ihrer Anziehung wieder nachgeben und sich nähern und der äussere Druck wieder vorrückt. Demgemäss muss Wärme *erzeugt* werden und die sogenannte *frei werdende* Wärme, welche dabei erscheint, tritt also nicht bloss aus ihrer bisherigen Verborgenheit wieder hervor, sondern ist wirklich *neu entstanden*. Diese auf dem Rückwege erzeugte Wärme braucht aber der auf dem Hinwege verbrauchten nicht gleich zu seyn, sondern der Theil, welcher der *äusseren* Arbeit entspricht, kann auch hier nach Umständen grösser oder kleiner seyn.

さて、<i>t</i><sub>1</sub> と <i>v</i><sub>1</sub> の蒸気が、ふたたび <i>t</i><sub>0</sub> の水に変わるときには、逆に仕事が*消費される*。粒子がふたたび引き合う力に従って近づき、外部の圧力がふたたび押し進むからである。それに応じて熱が*生み出され*なければならない。だから、そのとき現れる、いわゆる*放たれる*熱は、それまでの隠れ場所からふたたび出てくるだけではなく、本当に*新たに生じた*のである。しかし、この帰り道で生み出される熱は、行きの道で消費された熱と等しい必要はない。*外部の*仕事に対応する部分は、ここでも事情によって大きくも小さくもなりうる。

訳注：frei werdende Wärme（放たれる熱）は、凝結のときに出てくる熱を指す当時の言い方。今の凝結熱に当たる。

### ¶19　p.376–377

> Wir wenden uns nun zur mathematischen Behandlung des Gegenstandes, doch wollen wir uns dabei auf die Betrachtung der *permanenten Gase* und der *Dämpfe im Maximum ihrer Dichte* beschränken, indem diese Fälle durch die anderweitigen Kenntnisse, welche wir über sie besitzen, der [p.377] Rechnung am zugänglichsten sind, und ausserdem auch das meiste Interesse darbieten. Man wird indessen leicht übersehen, wie sich der Grundsatz auch auf andere Fälle anwenden lässt.

では、主題の数学的な扱いに移ろう。ただし、そのさい*永久気体*と*密度が最大の蒸気*だけを考えることにする。これらの場合は、われわれがほかに持っている知識のおかげで、計算にもっとも [p.377] 乗りやすく、そのうえもっとも興味深いからである。とはいえ、原則がほかの場合にもどう当てはまるかは、たやすく見てとれるだろう。

訳注：永久気体（permanente Gase）は、当時まだ液化できなかった気体（空気・酸素・水素など）を指す。密度が最大の蒸気（Dämpfe im Maximum ihrer Dichte）は、その温度でとりうる最大の密度にある蒸気、すなわち飽和蒸気のこと。

### ¶20　p.377

> Sey ein gewisses Quantum, etwa eine Gewichtseinheit von einem *permanenten Gase* gegeben, so müssen zur Bestimmung seines gegenwärtigen Zustandes drei Grössen bekannt seyn: der Druck, unter dem es sich befindet, sein Volumen und seine Temperatur. Diese Grössen stehen in gegenseitiger Abhängigkeit, welche durch das vereinigte *Mariotte*'sche und *Gay-Lussac*'sche Gesetz [注7] ausgedrückt wird, und sich durch folgende Gleichung darstellen lässt:
>
> (I.) <i>pv</i> = <i>R</i>(<i>a</i> + <i>t</i>),
>
> worin <i>p</i> <i>v</i> und <i>t</i> Druck, Volumen und Temperatur des Gases im gegenwärtigen Zustande bedeuten, <i>a</i> eine für alle Gase gleiche Constante ist, und <i>R</i> endlich ebenfalls eine Constante ist, die vollständig <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>) heisst, wenn <i>p</i><sub>0</sub>, <i>v</i><sub>0</sub> und <i>t</i><sub>0</sub> die zusammengehörigen Werthe der obigen drei Grössen für irgend einen anderen Zustand des Gases sind. Diese letztere Constante ist also für die verschiedenen Gase in sofern verschieden, als sie ihrem specifischen Gewichte umgekehrt proportional ist.

ある量の、たとえば重さの単位一つ分の*永久気体*が与えられたとする。その今の状態を定めるには、三つの量が知られていなければならない。気体がどんな圧力の下にあるか、その体積、その温度である。この三つの量は互いに依存しあっている。その依存は、マリオットの法則とゲイ＝リュサックの法則をあわせたもの [注7] で表され、次の式で書ける。

(I.) <i>pv</i> = <i>R</i>(<i>a</i> + <i>t</i>),

ここで <i>p</i>、<i>v</i>、<i>t</i> は今の状態での気体の圧力・体積・温度を表す。<i>a</i> はすべての気体に共通の定数である。<i>R</i> もまた定数で、<i>p</i><sub>0</sub>、<i>v</i><sub>0</sub>、<i>t</i><sub>0</sub> を気体のほかの何かの状態での上の三つの量の組の値とすれば、略さずに書くと <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>) である。したがってこの後の定数は、気体の比重に反比例するという意味で、気体ごとに異なる。

訳注：誌面は「worin <i>p v</i> und <i>t</i>」で、<i>p</i> と <i>v</i> のあいだのコンマが落ちている（誤植とみて置いた）。(I.) は今の理想気体の状態方程式に当たり、<i>R</i> は単位質量あたりの気体定数、<i>a</i> + <i>t</i> は今の絶対温度に当たる。

### ¶21　p.377–378

> Zwar hat in neuerer Zeit *Regnault* durch sehr sorgfältige Versuche nachgewiesen, das dieses Gesetz nicht in aller Strenge richtig ist, doch sind die Abweichungen für die permanenten Gase sehr gering, und werden nur bei denen bedeutender, welche sich condensiren lassen. Daraus scheint zu folgen, dass das Gesetz um so strenger gültig ist, je weiter das Gas in Bezug auf Druck und Temperatur von seinem Condensationspunkte entfernt ist. Man kann sich daher, während die Genauigkeit für die permanenten Gase schon im gewöhnlichen Zustande so gross ist, dass man sie für die meisten Untersuchungen als vollkommen [p.378] betrachten kann, für jedes Gas einen Gränzzustand denken, in dem die Genauigkeit wirklich vollkommen wird, und diesen ideellen Zustand wollen wir im Folgenden, wo wir von den parmanenten Gasen als solchen handeln, voraussetzen.

たしかに近ごろルニョーが、非常に注意深い実験によって、この法則が厳密には正しくないことを示した。しかし永久気体ではずれはごくわずかで、ずれが大きくなるのは凝縮させられる気体だけである。ここから、気体が圧力と温度について凝縮点から離れているほど、法則はより厳密に成り立つ、ということになりそうである。永久気体では、ふつうの状態ですでに、たいていの研究でこの正確さを完全とみなせるほどである。だから、どの気体についても、正確さが本当に完全になる極限の状態を [p.378] 考えることができる。以下、永久気体そのものを扱うところでは、この理想の状態を前提とする。

訳注：誌面の「nachgewiesen, das dieses Gesetz」の das は dass の誤植とみて置いた。「parmanenten」も permanenten の誤植で、そのまま置いた。

### ¶22　p.378

> Der Werth von 1/<i>a</i> ist nach übereinstimmenden Versuchen von *Regnault* und *Magnus* für die atmosphärische Luft, wenn die Temperatur nach Centesimalgraden vom Gerfrierpunkte aus gezählt wird, gleich 0,003665. Da aber die Gase, wie erwähnt, nicht genau dem M. und G. Gesetze folgen, so erhält man, wenn man die Versuche unter verschiedenen Umständen anstellt, nicht immer denselben Werth für 1/<i>a</i>. Die vorstehende Zahl gilt für den Fall, wo die atmosphärische Luft bei 0° unter dem Drucke von *einer* Atmosphäre genommen, und dann bei constantem Volumen bis 100° erwärmt wird, und man dabei die Zunahme der Expansivkraft beobachtet. Lässt man dagegen den Druck constant und beobachtet die Zunahme des Volumens, so erhält man die etwas grössere Zahl 0,003670. Ferner wachsen die Zahlen, wenn man die Versuche unter höherem, als dem atmosphärischen Drucke anstellt, während sie bei geringerem Drucke etwas abnehmen. Man kann demnach nicht mit Bestimmtheit angeben, welcher Werth für die Gase im ideellen Zustande, in welchem jene Unterschiede natürlich fortfallen müssten, anzunehmen ist, doch wird die Zahl 0,003665 gewiss nicht weit von der Wahrheit abweichen, zumal da für Wasserstoff, welcher wahrscheinlich unter allen Gasen dem ideellen Zustande am nächsten ist, nahe dieselbe Zahl gilt, und die Aenderungen bei diesem im entgegengesetzten Sinne stattfinden, als bei den anderen Gasen. Behalten wir daher jenen Werth von 1/<i>a</i> bei, so bekommen wir
>
> <i>a</i> = 273.

1/<i>a</i> の値は、ルニョーとマグヌスの一致した実験によれば、大気の空気について、温度を氷点から百分度で数えるとき、0,003665 である。しかし、すでに述べたように、気体はマリオットとゲイ＝リュサックの法則に正確には従わない。だから実験を違う条件で行うと、1/<i>a</i> にいつも同じ値が得られるわけではない。上の数は、大気の空気を 0° で*一*気圧の下に取り、体積を一定にして 100° まで温め、そのときの膨張力の増えを見る場合のものである。逆に圧力を一定にして体積の増えを見ると、少し大きい数 0,003670 が得られる。さらに、実験を大気圧より高い圧力の下で行うと数は大きくなり、低い圧力では少し小さくなる。したがって、理想の状態の気体（そこでは当然これらの違いは消えるはずである）にどの値をとるべきかは、確かには言えない。それでも 0,003665 という数は、きっと真の値から遠くはない。水素は、おそらくすべての気体のうちで理想の状態にいちばん近いが、それにもほぼ同じ数が当てはまり、しかも水素での変わり方はほかの気体と逆の向きだからである。そこで 1/<i>a</i> のこの値を保つと、

<i>a</i> = 273

を得る。

訳注：誌面の「Gerfrierpunkte」は Gefrierpunkte（氷点）の誤植で、そのまま置いた。マグヌス（Heinrich Gustav Magnus, 1802–1870）はベルリンの物理学者・化学者。「膨張力」（Expansivkraft）は、ここでは体積一定で測る気体の圧力のこと。1/<i>a</i> は今の気体の膨張係数に当たる。「百分度」は今のセルシウス度。

### ¶23　p.378–379

> Zufolge der Gleichung (I.) kann man von den drei Grössen <i>p</i>, <i>v</i> und <i>t</i> eine, z. B. <i>p</i>, als Function der beiden anderen [p.379] <i>v</i> und <i>t</i> betrachten, welche letzteren dann die unabhängigen Veränderlichen bleiben, die den Zustand des Gases bedingen. Wir wollen nun zu bestimmen suchen, wie die auf die *Wärmemenge* bezüglichen Grössen von jenen beiden abhängen.

式 (I.) によれば、三つの量 <i>p</i>、<i>v</i>、<i>t</i> のうちの一つ、たとえば <i>p</i> を、ほかの二つ [p.379] <i>v</i> と <i>t</i> の関数とみなせる。すると <i>v</i> と <i>t</i> が、気体の状態を決める独立変数として残る。そこで、*熱量*にかかわる量がこの二つにどう依存するかを定めてみよう。

### ¶24　p.379

> Wenn irgend ein Körper sein Volumen verändert, so wird dabei im Allgemeinen mechanische Arbeit erzeugt oder verbraucht. Es ist aber in den meisten Fällen nicht möglich, diese genau zu bestimmen, weil zugleich mit der *äusseren* Arbeit auch gewöhnlich noch eine unbekannte *innere* stattfindet. Um diese Schwierigkeit zu vermeiden, hat *Carnot* das schon oben erwähnte sinnreiche Verfahren angewandt, dass er den Körper nach einander verschiedene Veränderungen durchmachen lässt, die so angeordnet sind, dass er zuletzt wieder genau in seinen ursprünglichen Zustand zurückkommt. Dann muss, wenn bei einigen der Veränderungen *innere* Arbeit geleistet wurde, diese bei den anderen gerade wieder aufgehoben seyn, und man ist sicher, dass die *äussere* Arbeit, die etwa bei den Veränderungen übrig bleibt, auch die ganze überhaupt hervorgebrachte Arbeit ist. *Clapeyron* hat dieses Verfahren sehr anschaulich graphisch dargestellt, und dieser Darstellung wollen wir zunächst für die permanenten Gase folgen, jedoch mit einer geringen Aenderung, die durch unseren Grundsatz bedingt wird.

ある物体が体積を変えると、一般にそのとき力学的な仕事が生み出されるか、消費される。しかし多くの場合、それを正確に定めることはできない。*外部の*仕事と同時に、ふつうは知られていない*内部の*仕事も起きているからである。この難しさを避けるため、カルノーは、すでに上で触れた巧みな方法を用いた。物体にいくつもの変化を次々に通らせ、その変化を、物体が最後にはちょうどもとの状態に戻るように組んでおくのである。そうすれば、いくつかの変化で*内部の*仕事がなされたとしても、それはほかの変化でちょうど打ち消されているはずである。そして、変化のあとに残る*外部の*仕事が、生み出された仕事の全部だと確かに言える。クラペイロンはこの方法をたいへん見やすく図に表した。われわれもまず永久気体について、この表し方に従う。ただし、われわれの原則から来る小さな変更を加える。

訳注：「われわれの原則」は、熱によって仕事が生じるとき、生み出された仕事に比例する熱が消費される、という第 I 部の頭で立てた原則（今の第一法則に当たる）。

### ¶25　p.379–381

> Sey in nebenstehender Figur durch die Abscisse <i>oe</i> das Volumen, und durch die Ordinate <i>ea</i> der Druck der Gewichtseinheit Gas in einem Zustande, in welchem zugleich ihre Temperatur = <i>t</i> sey, angedeutet. [図1] Man nehme nun an, das Gas befinde sich in einer ausdehnsamen Hülle, mit der es aber keine Wärme austauschen könne. Lässt man es nun in dieser Hülle sich ausdehnen, so würde es dabei, wenn [p.380] ihm keine neue Wärme mitgetheilt würde, seine Temperatur erniedrigen. Um dieses zu vermeiden, sey es während der Ausdehnung mit einem Körper <i>A</i> in Berührung gebracht, der auf der constanten Temperatur <i>t</i> erhalten wird, und dem Gase immer so viel Wärme mittheilt, dass seine Temperatur ebenfalls <i>t</i> bleibt. Während dieser Ausdehnung bei constanter Temperatur nimmt der Druck nach dem M. Gesetze ab, und lässt sich durch die Ordinate einer Curve <i>ab</i> darstellen, welche ein Stück einer gleichseitigen Hyperbel ist. — Hat das Gas auf diese Weise sein Volumen von <i>oe</i> bis <i>of</i> vermehrt, so nehme man den Körper <i>A</i> fort, und lasse nun, ohne dass neue Wärme hinzutreten kann, die Ausdehnung noch weiter stattfinden. Dann wird die Temperatur sinken und daher der Druck schneller abnehmen, wie vorher, und das Gesetz, nach welchem dieses geschieht, sey durch die Curve <i>bc</i> angedeutet. — Ist so das Volumen des Gases von <i>of</i> bis <i>og</i> vermehrt, und dabei seine Temperatur von <i>t</i> bis <i>τ</i> erniedrigt, so fange man an, es wieder zusammenzudrücken, um es zu seinem ursprünglichen Volumen <i>oe</i> zurückzubringen. Dabei würde, wenn es sich selbst überlassen wäre, seine Temperatur sogleich wieder steigen. Das gestatte man aber zunächst nicht, sondern bringe es mit einem Körper <i>B</i> von der constanten Temperatur <i>τ</i> in Berührung, dem es die entstehende Wärme immer gleich abgeben muss, so dass es die Temperatur <i>τ</i> behält, und in dieser Berührung drücke man es so weit zusammen, (um das Stück <i>gh</i>,) dass das übrigbleibende Stück <i>he</i> gerade ausreicht, um die Temperatur des Gases, wenn es während dieser letzten Zusammendrückung keine Wärme abgeben kann, von <i>τ</i> bis <i>t</i> zu erhöhen. Während der ersteren Zusammendrückung nimmt der Druck nach dem M. Gesetze zu, und wird durch das Stück <i>cd</i> einer anderen gleichseitigen Hyperbel dargestellt. Während der letzteren dagegen geschieht die Zunahme schneller und sey durch die Curve <i>da</i> angedeutet. Diese Curve muss genau in <i>a</i> enden, denn da am Schlusse der Operation das Volumen und die Temperatur wieder ihren [p.381] ursprünglichen Werth haben, so muss dieses auch mit dem Drucke stattfinden, welcher eine Function jener beiden ist. Das Gas befindet sich also jetzt wieder ganz in demselben Zustande, wie zu Anfange.

かたわらの図で、横座標 <i>oe</i> が体積を、縦座標 <i>ea</i> が圧力を表すとする。どちらも、重さの単位一つ分の気体の、温度が同時に <i>t</i> である状態のものである。[図1] いま、気体は伸び縮みできる包みの中にあり、その包みとは熱をやりとりできないとする。この包みの中で気体を膨張させると、新しい熱が [p.380] 与えられなければ、気体の温度は下がるだろう。これを避けるため、膨張のあいだ、気体を物体 <i>A</i> に触れさせておく。<i>A</i> は一定の温度 <i>t</i> に保たれ、気体の温度も <i>t</i> のままであるだけの熱を、いつも気体に与える。温度一定でのこの膨張のあいだ、圧力はマリオットの法則に従って下がり、曲線 <i>ab</i> の縦座標で表せる。この曲線は直角双曲線の一部である。――こうして気体が体積を <i>oe</i> から <i>of</i> まで増やしたら、物体 <i>A</i> を取り去り、新しい熱が入れないまま、膨張をさらに続けさせる。すると温度が下がり、そのため圧力は前より速く下がる。それが従う法則を曲線 <i>bc</i> で示すとする。――こうして気体の体積が <i>of</i> から <i>og</i> まで増え、そのあいだに温度が <i>t</i> から <i>τ</i> へ下がったら、気体をもとの体積 <i>oe</i> に戻すため、ふたたび圧縮しはじめる。そのとき、気体をそのままにしておけば、温度はすぐまた上がるだろう。しかしまずはそうさせず、一定の温度 <i>τ</i> の物体 <i>B</i> に触れさせる。気体は生じる熱をいつもすぐ <i>B</i> に渡さなければならず、そのため温度 <i>τ</i> を保つ。この接触のまま、気体を（<i>gh</i> の長さだけ）圧縮する。どこまでかと言えば、残りの長さ <i>he</i> が、この最後の圧縮のあいだに熱を渡せない気体の温度を、<i>τ</i> から <i>t</i> まで上げるのにちょうど足りるところまでである。前の圧縮のあいだ、圧力はマリオットの法則に従って増え、もう一つの直角双曲線の一部 <i>cd</i> で表される。それに対して後の圧縮のあいだでは、増え方がもっと速く、それを曲線 <i>da</i> で示すとする。この曲線はちょうど <i>a</i> で終わらなければならない。操作の終わりには体積と温度がふたたびもとの [p.381] 値になるので、この二つの関数である圧力も、もとの値にならなければならないからである。したがって気体は今、始めとまったく同じ状態にある。

訳注：図1。縦軸と横軸が <i>o</i> で交わり、横軸の上に左から <i>e</i>、<i>h</i>、<i>f</i>、<i>g</i> が並ぶ。それぞれの真上に <i>a</i>、<i>d</i>、<i>b</i>、<i>c</i> があり、縦の線 <i>ea</i>・<i>hd</i>・<i>fb</i>・<i>gc</i> で結ばれる。<i>a</i> から右下の <i>b</i> へ曲線（温度 <i>t</i> の等温線）、<i>b</i> からさらに急に <i>c</i> へ下る曲線（熱の出入りの無い膨張）、<i>c</i> から左上の <i>d</i> へ曲線（温度 <i>τ</i> の等温線）、<i>d</i> から急に <i>a</i> へ上る曲線（熱の出入りの無い圧縮）で、四辺形 <i>abcd</i> が閉じる。今の言い方では、二本の等温線と二本の断熱線からなるカルノーのサイクルの <i>p</i>–<i>v</i> 図である。「直角双曲線」（gleichseitige Hyperbel）は <i>pv</i> = 一定 の曲線。

### ¶26　p.381

> Um nun die bei diesen Veränderungen hervorgebrachte Arbeit zu bestimmen, brauchen wir aus den oben angeführten Gründen unser Augenmerk nur auf die *äussere* Arbeit zu richten. Während der Ausdehnung *erzeugt* das Gas eine Arbeit, die durch das Integral des Productes aus dem Differential des Volumens in den dazu gehörigen Drnck bestimmt, und also geometrisch durch die Vierecke <i>eabf</i> und <i>fbcg</i> dargestellt wird. Zur Zusammendrückung dagegen wird Arbeit *verbraucht*, die ebenso durch die Vierecke <i>gcdh</i> und <i>hdae</i> dargestellt wird. Der Ueberschuss der ersteren Arbeit über die letztere ist als die im Ganzen während der Veränderungen erzeugte Arbeit anzusehen, und dieser wird dargestellt durch das Viereck <i>abcd</i>.

これらの変化で生み出された仕事を定めるには、上に挙げた理由から、*外部の*仕事だけに目を向ければよい。膨張のあいだ、気体は仕事を*生み出す*。その仕事は、体積の微分にそれに属する圧力を掛けた積の積分で定まり、したがって図の上では四辺形 <i>eabf</i> と <i>fbcg</i> で表される。それに対して圧縮には仕事が*消費され*、それは同じように四辺形 <i>gcdh</i> と <i>hdae</i> で表される。前の仕事が後の仕事を上回る分が、変化の全体で生み出された仕事とみなされる。それは四辺形 <i>abcd</i> で表される。

訳注：誌面の「Drnck」は Druck（圧力）の誤植で、そのまま置いた。

### ¶27　p.381

> Wenn man den vollständigen vorher beschriebenen Process in umgekehrter Ordnung ausführt, so erhält man dieselbe Grösse <i>abcd</i> als Ueberschuss der *verbrauchten* Arbeit über die *erzeugte*.

上に述べた過程の全体を逆の順に行えば、同じ大きさ <i>abcd</i> が、*消費された*仕事が*生み出された*仕事を上回る分として得られる。

### ¶28　p.381–382

> Um nun die vorstehenden Betrachtungen analytisch anwenden zu können, wollen wir annehmen, die von dem Gase erlittenen Veränderungen seyen alle *unendlich klein* gewesen. Dann können wir die erhaltenen Curven als gerade Linien betrachten, wie es in nebenstehender Figur geschehen ist. [図2] Zugleich können wir bei der Bestimmung des Flächeninhaltes das Viereck <i>abcd</i> als Parallelogramm ansehen, indem der dadurch entstehende Fehler nur ein unendlich Kleines *dritter* Ordnung seyn kann, während der Inhalt selbst ein solches *zweiter* Ordnung ist. Bei dieser Annahme lässt sich der Inhalt, wie man leicht sieht, durch [p.382] das Product <i>ef</i>.<i>bk</i> ausdrücken, wenn <i>k</i> der Punkt ist, wo die Ordinate <i>bf</i> die untere Seite des Vierecks schneidet. Die Grösse <i>bk</i> ist die Zunahme des Druckes, während das Gas bei constantem Volumen <i>of</i> seine Temperatur von <i>τ</i> bis <i>t</i>, also um das Differential <i>t</i> − <i>τ</i> = <i>dt</i> erhöht. Diese Grösse lässt sich mittelst der Gleichung (I.) in <i>v</i> und <i>t</i> ausdrücken, nämlich:
>
> <i>dp</i> = <i>R dt</i>/<i>v</i>.
>
> Bezeichnen wir ferner die Volumenzunahme <i>ef</i> mit <i>dv</i>, so erhalten wir den Inhalt des Vierecks, und somit
>
> (1.) *die erzeugte Arbeit* = <i>R dv dt</i>/<i>v</i>.

さて上の考察を解析的に使えるようにするため、気体が受けた変化はすべて*無限に小さかった*と仮定しよう。すると、得られた曲線を、かたわらの図のように直線とみなせる。[図2] 同時に、面積を定めるとき、四辺形 <i>abcd</i> を平行四辺形とみなせる。それで生じる誤りは*三次*の無限小にすぎず、面積そのものは*二次*の無限小だからである。この仮定の下では、すぐわかるように、面積は [p.382] 積 <i>ef</i>·<i>bk</i> で表せる。ここで <i>k</i> は、縦座標 <i>bf</i> が四辺形の下の辺と交わる点である。大きさ <i>bk</i> は、気体が体積 <i>of</i> を一定に保ったまま温度を <i>τ</i> から <i>t</i> へ、すなわち微分 <i>t</i> − <i>τ</i> = <i>dt</i> だけ上げるあいだの、圧力の増えである。この大きさは、式 (I.) によって <i>v</i> と <i>t</i> で表せる。すなわち

<i>dp</i> = <i>R dt</i>/<i>v</i>.

さらに体積の増え <i>ef</i> を <i>dv</i> と書けば、四辺形の面積が得られ、したがって

(1.) *生み出された仕事* = <i>R dv dt</i>/<i>v</i>.

訳注：図2。図1の四辺形を無限に小さくしたもの。横軸の上に左から <i>e</i>、<i>h</i>、<i>f</i>、<i>g</i>、その上に <i>a</i>、<i>d</i>、<i>b</i>、<i>c</i>。<i>ab</i>・<i>bc</i>・<i>cd</i>・<i>da</i> が直線になり、縦の線 <i>fb</i> が下の辺 <i>dc</i> と交わる点に <i>k</i> と記してある。

### ¶29　p.382–383

> Wir müssen nun die bei jenen Veränderungen verbrauchte Wärmemenge bestimmen. Die Wärmemenge, welche dem Gase mitgetheilt werden muss, während es aus irgend einem früheren Zustande auf einem bestimmten Wege in den Zustand übergeführt wird, in welchem sein Volumen = <i>v</i> und seine Temperatur = <i>t</i> ist, möge <i>Q</i> heissen, und die in dem obigen Processe vorkommenden Volumenveränderungen, welche hier einzeln betrachtet werden müssen, seyen bezeichnet: <i>ef</i> mit <i>dv</i>, <i>hg</i> mit <i>d′v</i>, <i>eh</i> mit <i>δv</i> und <i>fg</i> mit <i>δ'v</i>. — Während einer Ausdehnung von dem Volumen <i>oe</i> = <i>v</i> zu dem <i>of</i> = <i>v</i> + <i>dv</i> bei der constanten Temperatur <i>t</i> muss dann das Gas die Wärmemenge
>
> (<i>dQ</i>/<i>dv</i>) <i>dv</i>
>
> erhalten, und dem entsprechend während einer Ausdehnung von <i>oh</i> = <i>v</i> + <i>δv</i> bis <i>og</i> = <i>v</i> + <i>δv</i> + <i>d′v</i> bei der Temperatur <i>t</i> − <i>dt</i> die Wärmemenge
>
> [(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>.
>
> Diese letztere muss in unserem Falle, weil statt einer solchen Ausdehnung eine Zusammendrückung stattfand, negativ in Rechnung gebracht werden. Während der Ausdehnung [p.383] von <i>of</i> bis <i>og</i> und der Zusammendrückung von <i>oh</i> bis <i>oe</i> hat das Gas weder Wärme erhalten noch verloren, und somit ist die Wärmemenge, die das Gas mehr empfangen als abgegeben hat, also *die verbrauchte Wärmemenge*
>
> (2.) = (<i>dQ</i>/<i>dv</i>) <i>dv</i> − [(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>.

次に、これらの変化で消費された熱量を定めなければならない。気体を、何かの前の状態から決まった道筋で、体積が <i>v</i>、温度が <i>t</i> である状態へ移すあいだに、気体に与えなければならない熱量を <i>Q</i> と呼ぶ。また、上の過程に出てくる体積の変化は、ここでは一つずつ見なければならないので、次のように書く。<i>ef</i> を <i>dv</i>、<i>hg</i> を <i>d′v</i>、<i>eh</i> を <i>δv</i>、<i>fg</i> を <i>δ'v</i> とする。――すると、一定の温度 <i>t</i> で体積 <i>oe</i> = <i>v</i> から <i>of</i> = <i>v</i> + <i>dv</i> へ膨張するあいだ、気体は熱量

(<i>dQ</i>/<i>dv</i>) <i>dv</i>

を受け取らなければならない。それに応じて、温度 <i>t</i> − <i>dt</i> で <i>oh</i> = <i>v</i> + <i>δv</i> から <i>og</i> = <i>v</i> + <i>δv</i> + <i>d′v</i> へ膨張するあいだには、熱量

[(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>

を受け取らなければならない。この後のほうは、われわれの場合、そのような膨張でなく圧縮が起きたのだから、負として計算に入れなければならない。<i>of</i> から <i>og</i> への膨張 [p.383] と、<i>oh</i> から <i>oe</i> への圧縮のあいだ、気体は熱を受け取りも失いもしなかった。したがって、気体が渡したより多く受け取った熱量、すなわち*消費された熱量*は

(2.) = (<i>dQ</i>/<i>dv</i>) <i>dv</i> − [(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>.

訳注：括弧で囲んだ微分商 (<i>dQ</i>/<i>dv</i>)・(<i>dQ</i>/<i>dt</i>) は、もう一方の変数を一定にした微分で、今の偏微分 ∂<i>Q</i>/∂<i>v</i>・∂<i>Q</i>/∂<i>t</i> に当たる。ただし <i>Q</i> は道筋に依存する量なので（下の ¶13）、今の言い方では、各状態で熱を受け取る割合を表す係数と読むのが近い。

### ¶30　p.383

> Hieraus müssen die Grössen <i>δv</i> und <i>d′v</i> fortgeschafft werden. Dazu hat man erstens die unmittelbar aus der Anschauung der Figur folgende Gleichung:
>
> <i>dv</i> + <i>δ'v</i> = <i>δv</i> + <i>d′v</i>,
>
> und ausserdem ergeben sich aus der Bedingung, dass das Gas während der Zusammendrückung von <i>oh</i> bis <i>oe</i>, und also auch umgekehrt bei einer unter denselben Umständen stattfindenden Ausdehnung von <i>oe</i> bis <i>oh</i>, und ebenso bei der Ausdehnung von <i>of</i> bis <i>og</i>, welche beide eine Temperaturerniedrigung um <i>dt</i> verursachen, keine Wärme empfängt und verliert, die Gleichungen:
>
> (<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>dQ</i>/<i>dt</i>) <i>dt</i> = 0
>
> [(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>dv</i>] <i>δ'v</i> − [(<i>dQ</i>/<i>dt</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>) <i>dv</i>] <i>dt</i> = 0.
>
> Eliminirt man aus diesen drei Gleichungen und der Gleichung (2.) die drei Grössen <i>d′v</i>, <i>δv</i> und <i>δ'v</i>, und vernachlässigt auch hier bei der Entwickelung die Glieder, welche in Bezug auf die Differentiale von höherer als der zweiten Ordnung sind, so erhält man:
>
> (3.) *Die verbr. Wärme* = [(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i>.

ここから大きさ <i>δv</i> と <i>d′v</i> を消さなければならない。そのためにまず、図を見ればすぐわかる式

<i>dv</i> + <i>δ'v</i> = <i>δv</i> + <i>d′v</i>

がある。さらに、次の条件から式が得られる。気体は、<i>oh</i> から <i>oe</i> への圧縮のあいだ（したがって逆に、同じ条件の下で <i>oe</i> から <i>oh</i> へ膨張するあいだも）、また <i>of</i> から <i>og</i> への膨張のあいだも、熱を受け取りも失いもしない。そしてこの二つの膨張は、どちらも温度を <i>dt</i> だけ下げる。この条件から、次の式が出る。

(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>dQ</i>/<i>dt</i>) <i>dt</i> = 0

[(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>dv</i>] <i>δ'v</i> − [(<i>dQ</i>/<i>dt</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>) <i>dv</i>] <i>dt</i> = 0.

この三つの式と式 (2.) から、三つの大きさ <i>d′v</i>、<i>δv</i>、<i>δ'v</i> を消し、ここでも展開のときに微分について二次より高い項を省くと、次を得る。

(3.) *消費された熱* = [(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i>.

訳注：「verbr.」は verbrauchte（消費された）の略。

### ¶31　p.383–384

> Gehen wir nun zurück auf den Grundsatz, dass zur Erzeugung einer bestimmten Arbeit auch immer der Verbrauch einer proportionalen Wärmemenge nöthig sey, so können wir daraus die Gleichung bilden:
>
> (4.) *die verbrauchte Wärme*/*die erzeugte Arbeit* = <i>A</i>,
>
> worin *<i>A</i> eine Constante ist, welche das Wärmeaequivalent [p.384] für die Einheit der Arbeit bedeutet.* In diese Gleichung die Ausdrücke (1.) und (3.) eingesetzt, giebt:
>
> [(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i> / (<i>R</i>.<i>dv dt</i>/<i>v</i>) = <i>A</i>
>
> oder:
>
> (II.) (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>) = <i>A</i>.<i>R</i>/<i>v</i>.

さて、決まった仕事を生み出すには、いつもそれに比例する熱量を消費することが要る、という原則に戻ろう。そこから次の式が立てられる。

(4.) *消費された熱*/*生み出された仕事* = <i>A</i>,

ここで *<i>A</i> は定数で、仕事の単位一つに当たる [p.384] 熱の当量を表す。* この式に (1.) と (3.) の式を入れると、

[(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i> / (<i>R</i>·<i>dv dt</i>/<i>v</i>) = <i>A</i>

すなわち

(II.) (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>) = <i>A</i>·<i>R</i>/<i>v</i>

を得る。

訳注：<i>A</i> は仕事の単位あたりの熱量で、今の熱の仕事当量 <i>J</i> の逆数（1/<i>J</i>）に当たる。誌面の (4.) と、<i>A</i> の後ろの分数は縦に組まれた分数で、一行に直した。誌面の「<i>R</i>.<i>dv dt</i>」「<i>A</i>.<i>R</i>」の点は掛け算の点。

### ¶32　p.384

> Diese Gleichung können wir als den für die permanenten Gase geltenden analytischen Ausdruck des obigen Grundsatzes betrachten. Sie zeigt, dass <i>Q</i> keine Function von <i>v</i> und <i>t</i> seyn kann, so lange die letzteren von einander unabhängig sind. Denn sonst müsste nach dem bekannten Satze der Differentialrechnung, dass, wenn eine Function von zwei Veränderlichen nach beiden differenzirt werden soll, die Ordnung, in der dieses geschieht, gleichgültig ist, die rechte Seite der Gleichung Null seyn.

この式を、永久気体について成り立つ、上の原則の解析的な表現とみなすことができる。この式は、<i>v</i> と <i>t</i> が互いに独立であるかぎり、<i>Q</i> が <i>v</i> と <i>t</i> の関数ではありえないことを示す。もし関数であれば、二つの変数の関数を両方の変数で微分するとき、その順序はどちらでもよい、という微分学のよく知られた定理によって、式の右辺は零でなければならないはずだからである。

訳注：今の言い方では、受け取った熱 <i>dQ</i> が状態量の全微分でない（不完全微分である）ことを述べている。

### ¶33　p.384

> Man kann die Gleichung auch auf die Form einer *vollständigen* Differentialgleichung bringen, nämlich:
>
> (II<i>a</i>.) <i>dQ</i> = <i>dU</i> + <i>A</i>.<i>R</i> (<i>a</i> + <i>t</i>)/<i>v</i> <i>dv</i>,
>
> worin <i>U</i> eine willkührliche Function von <i>v</i> und <i>t</i> ist. Diese Differentialgleichung ist natürlich nicht integrabel, sondern wird es erst, wenn zwischen den Veränderlichen noch eine zweite Beziehung gegeben wird, derzufolge man <i>t</i> als Function von <i>v</i> betrachten kann. Der Grund davon liegt aber nur in dem letzten Gliede, und dieses entspricht gerade der, bei der Veränderung vollbrachten *äusseren* Arbeit, denn das Differential dieser Arbeit ist <i>pdv</i>, und daraus erhält man, wenn man <i>p</i> mittelst (I.) eliminirt:
>
> <i>R</i>(<i>a</i> + <i>t</i>)/<i>v</i> <i>dv</i>.

この式は、*完全な*微分方程式の形にも書ける。すなわち

(II<i>a</i>.) <i>dQ</i> = <i>dU</i> + <i>A</i>·<i>R</i> (<i>a</i> + <i>t</i>)/<i>v</i> <i>dv</i>,

ここで <i>U</i> は <i>v</i> と <i>t</i> の任意の関数である。この微分方程式は、もちろんそのままでは積分できない。変数のあいだにもう一つの関係が与えられ、それによって <i>t</i> を <i>v</i> の関数とみなせるようになって、はじめて積分できる。しかしその理由は最後の項だけにある。そしてこの項は、ちょうど変化のあいだになされた*外部の*仕事に当たる。この仕事の微分は <i>pdv</i> であり、そこから (I.) で <i>p</i> を消すと

<i>R</i>(<i>a</i> + <i>t</i>)/<i>v</i> <i>dv</i>

を得るからである。

訳注：「完全な微分方程式」（vollständige Differentialgleichung）は、ここでは (II.) の二階の式を、<i>dQ</i> そのものを書く一階の形に直したもの、という意味に読める（推測）。<i>U</i> は今の内部エネルギーに当たる（ただしここでは熱の単位で測られている）。(II<i>a</i>.) は、今の第一法則 <i>dQ</i> = <i>dU</i> + <i>p dv</i> を熱の単位で書いたものに当たる。<i>U</i> を「任意の関数」と言うのは、(II.) だけからは <i>U</i> の形が決まらないということ。

### ¶34　p.384–385

> Es ergiebt sich also zunächst aus der Gleichung (II<i>a</i>.), was schon oben als eine unmittelbare Folge des Grundsatzes angeführt wurde, dass man die ganze vom Gase während einer in Bezug auf Temperatur und Volumen stattgefundenen [p.385] Veränderung aufgenommene Wärmemenge <i>Q</i> in zwei Theile zerlegen kann, deren einer <i>U</i>, welcher die hinzugekommene *freie* Wärme und die zu *innerer* Arbeit, falls solche geschehen ist, *verbrauchte* Wärme umfasst, sich so verhält, wie man es gewöhnlich von der Gesammtwärme annahm, dass er eine Function von <i>v</i> und <i>t</i> ist, und daher durch den Anfangs- und Endzustand des Gases, zwischen denen der Uebergang stattfinden soll, schon vollkommen bestimmt wird; während der andere, welcher die zu *äusserer* Arbeit *verbrauchte* Wärme begreift, ausser von jenen Gränzzuständen noch von dem ganzen Wege der Veränderungen zwischen denselben abhängt.

したがって式 (II<i>a</i>.) から、まず、上ですでに原則のすぐの帰結として挙げたことが出てくる。温度と体積について起きた [p.385] 変化のあいだに気体が受け取った熱量 <i>Q</i> の全体は、二つの部分に分けられる。一つは <i>U</i> で、加わった*自由な*熱と、*内部の*仕事がなされたならそれに*消費された*熱とを含む。この部分は、ふつう*全熱*について考えられていたとおりにふるまう。すなわち <i>v</i> と <i>t</i> の関数であり、したがって移行の始めと終わりの気体の状態だけで、すでに完全に定まる。もう一つの部分は、*外部の*仕事に*消費された*熱を含み、その両端の状態のほかに、両者のあいだの変化の道筋全体にも依存する。

訳注：全熱（Gesammtwärme）は、第 I 部の頭（p.373）で論じた、自由な熱と潜熱の和。

### ¶35　p.385

> Bevor wir uns damit beschäftigen, diese Gleichung auch noch zu weiteren Schlüssen geeignet zu machen, wollen wir auch für *die Dämpfe im Maximum der Dichte* den analytischen Ausdruck des angenommenen Grundsatzes entwickeln.

この式をさらにほかの結論にも使えるように整える前に、*密度が最大の蒸気*についても、とった原則の解析的な表現を導いておこう。

### ¶36　p.385–386

> Für diesen Fall dürfen wir das M. und G. Gesetz nicht als richtig betrachten, und müssen uns daher auf jenen Grundsatz allein beschränken. Um daraus eine Gleichung zu gewinnen, wenden wir wieder mit einer kleinen Abänderung das von *Carnot* angegebene und von *Clapeyron* graphisch dargestellte Verfahren an. Es sey in einem für Wärme undurchdringlichen Gefässe eine Flüssigkeit enthalten, welche aber nur einen Theil des Raumes ausfülle und den übrigen Theil für den Dampf freilasse, der die Dichte hat, welche der stattfindenden Temperatur <i>t</i> als Maximum entspricht. Das Gesammtvolumen beider sey in nebenstehender Figur durch die Abscisse <i>oe</i> und der Druck des Dampfes durch die Ordinate <i>ea</i> dargestellt. [図3] Nun gebe das Gefäss dem Drucke nach, und erweitere sich, während Flüssigkeit und Dampf mit einem Körper <i>A</i> von der constanten [p.386] Temperatur <i>t</i> in Berührung seyen. So wie der Raum grösser wird, verdampft mehr Flüssigkeit, aber die dabei latent werdende Wärme wird immer wieder vom Körper <i>A</i> ersetzt, so dass die Temperatur und mit ihr auch der Druck des Dampfes ungeändert bleiben. Wenn auf diese Weise das Gesammtvolumen von <i>oe</i> bis <i>of</i> angewachsen ist, so ist dabei eine äussere Arbeit erzeugt, die durch das Rechteck <i>eabf</i> dargestellt wird. — Jetzt nehme man den Körper <i>A</i> fort, und lasse das Gefäss sich noch mehr erweitern, während weder Wärme hinein- noch heraus kann. Dabei wird theils der vorhandene Dampf sich ausdehnen, theils neuer entstehen, und demzufolge wird die Temperatur sinken und somit auch der Druck abnehmen. Dieses setzt man fort, bis die Temperatur aus <i>t</i> in <i>τ</i> übergegangen ist, wobei das Volumen <i>og</i> erreicht werde. Wird die während dieser Ausdehnung stattfindende Druckabnahme durch die Curve <i>bc</i> dargestellt, so ist die dabei erzeugte äussere Arbeit = <i>fbcg</i>.

この場合には、マリオットとゲイ＝リュサックの法則を正しいとみなしてはならない。だから、あの原則だけに頼らなければならない。そこから式を得るため、ここでもカルノーが示しクラペイロンが図に表した方法を、少し変えて用いる。熱を通さない容器に液体が入っているとする。液体は空間の一部だけを満たし、残りを蒸気のために空けておく。その蒸気は、そのときの温度 <i>t</i> に最大として対応する密度をもつ。両者を合わせた体積を、かたわらの図で横座標 <i>oe</i> で、蒸気の圧力を縦座標 <i>ea</i> で表す。[図3] いま、液体と蒸気が一定の [p.386] 温度 <i>t</i> の物体 <i>A</i> に触れているあいだに、容器が圧力に押されて広がるとする。空間が大きくなるにつれて、より多くの液体が蒸発する。しかしそのとき潜熱となる熱は、いつも物体 <i>A</i> から補われる。そのため温度も、それとともに蒸気の圧力も、変わらないままである。こうして合わせた体積が <i>oe</i> から <i>of</i> まで増えたとき、そのあいだに外部の仕事が生み出されている。それは長方形 <i>eabf</i> で表される。――次に物体 <i>A</i> を取り去り、熱が入ることも出ることもできないまま、容器をさらに広げる。そのとき、一部はすでにある蒸気が膨張し、一部は新しい蒸気ができる。その結果、温度は下がり、したがって圧力も下がる。これを、温度が <i>t</i> から <i>τ</i> に移るまで続け、そのとき体積 <i>og</i> に達するとする。この膨張のあいだの圧力の下がりを曲線 <i>bc</i> で表せば、そのとき生み出された外部の仕事は <i>fbcg</i> である。

訳注：図3。縦軸と横軸が <i>o</i> で交わり、横軸の上に左から <i>e</i>、<i>h</i>、<i>f</i>、<i>g</i>。<i>a</i>（<i>e</i> の上）と <i>b</i>（<i>f</i> の上）は同じ高さで水平の線 <i>ab</i> で結ばれ（温度 <i>t</i> で圧力一定の蒸発）、<i>b</i> から右下の <i>c</i>（<i>g</i> の上）へ曲線が下り（熱の出入りの無い膨張）、<i>c</i> から左へ水平の線が <i>d</i>（<i>h</i> の上）まで延び（温度 <i>τ</i> で圧力一定の凝結）、<i>d</i> から左上の <i>a</i> へ曲線が上る（熱の出入りの無い圧縮）。縦の線 <i>ea</i>・<i>hd</i>・<i>fb</i>・<i>gc</i> がある。図の下の「Poggendorff's Annal. Bd. LXXIX.」と「25」は折丁の印で、本文ではない。

### ¶37　p.386

> Nun drücke man das Gefäss zusammen, um die Flüssigkeit mit dem Dampfe wieder auf ihr ursprüngliches Gesammtvolumen <i>oe</i> zurückzubringen; und zwar geschehe diese Zusammendrückung zum Theil in Berührung mit dem Körper <i>B</i> von der Temperatur <i>τ</i>, auf den alle bei der Condensation des Dampfes frei werdende Wärme übergehe, so dass die Temperatur constant = <i>τ</i> bleibe, zum Theil ohne diesen Körper, so dass die Temperatur steige, und man richte es so ein, dass die erste Zusammendrückung nur so weit (bis <i>oh</i>) fortgesetzt werde, dass der dann noch bleibende Raum <i>he</i> gerade hinreiche, um die Temperatur wieder von <i>τ</i> bis <i>t</i> zu erhöhen. Während der ersten Volumenverringerung bleibt der Druck unveränderlich = <i>gc</i>, und die dabei verbrauchte äussere Arbeit ist gleich dem Rechtecke <i>gcdh</i>. Während der letzten Volumenverringerung nimmt der Druck zu und werde dargestellt durch die Curve <i>da</i>, welche gerade im Punkte <i>a</i> enden muss, da der ursprünglichen Temperatur <i>t</i> auch wieder der ursprüngliche Druck <i>ea</i> entsprechen muss. Die zuletzt verbrauchte äussere Arbeit ist = <i>hdae</i>.

次に容器を圧縮し、液体と蒸気をもとの合わせた体積 <i>oe</i> に戻す。この圧縮の一部は、温度 <i>τ</i> の物体 <i>B</i> に触れたまま行う。蒸気が凝結するときに出てくる熱はすべて <i>B</i> に移り、そのため温度は一定の <i>τ</i> のままである。残りはこの物体なしで行い、そのため温度が上がる。そして、はじめの圧縮を（<i>oh</i> まで）続けるのは、そのとき残る空間 <i>he</i> が、温度をふたたび <i>τ</i> から <i>t</i> まで上げるのにちょうど足りるところまで、となるようにしておく。はじめの体積の減りのあいだ、圧力は変わらず <i>gc</i> であり、そのとき消費された外部の仕事は長方形 <i>gcdh</i> に等しい。最後の体積の減りのあいだ、圧力は増え、それを曲線 <i>da</i> で表すとする。この曲線はちょうど点 <i>a</i> で終わらなければならない。もとの温度 <i>t</i> には、ふたたびもとの圧力 <i>ea</i> が対応しなければならないからである。最後に消費された外部の仕事は <i>hdae</i> である。

### ¶38　p.387

> Am Schlusse der Operation sind Flüssigkeit und Dampf wieder in demselben Zustande, wie zu Anfang, so dass der Ueberschuss der erzeugten *äusseren* Arbeit über die verbrauchte auch die *ganze* erzeugte Arbeit ist. Er wird dargestellt durch das Viereck <i>abcd</i>, und dessen Inhalt muss also mit der zu gleicher Zeit *verbrauchten Wärme* verglichen werden.

操作の終わりには、液体と蒸気はふたたび始めと同じ状態にある。だから、生み出された*外部の*仕事が、消費された仕事を上回る分は、生み出された仕事の*全体*でもある。その分は四辺形 <i>abcd</i> で表される。したがって、その面積を、同じときに*消費された熱*と比べなければならない。

訳注：「生み出された仕事」は erzeugte Arbeit、「消費された」は verbraucht の訳。液体と蒸気が元の状態に戻るので、内部の仕事は差し引きで残らず、外部の仕事の差だけが仕事の全体になる、という論の運び。

### ¶39　p.387

> Zu diesen Bestimmungen nehme man wieder die im Vorigen beschriebenen Veränderungen als *unendlich klein* an, und unter dieser Voraussetzung sey der Vorgang in nebenstehender Figur [図4] dargestellt, in welcher die in Fig. 3 vorkommenden Curven <i>ad</i> und <i>bc</i> in gerade Linien übergegangen sind. In Bezug auf den Flächeninhalt des Vierecks <i>abcd</i> kann man dieses wieder als ein Parallelogramm betrachten, und braucht also nur das Product <i>ef</i>.<i>bk</i> zu nehmen. Ist nun der Druck des Dampfes bei der Temperatur <i>t</i> im Maximum seiner Spannkraft gleich <i>p</i>, und wird die Temperaturdifferenz <i>t</i> − <i>τ</i> mit <i>dt</i> bezeichnet, so ist
>
> <i>bk</i> = <i>dp</i>/<i>dt</i> <i>dt</i>.
>
> <i>ef</i> ist die Volumenvermehrung, die dadurch entstanden ist, dass eine gewisse Menge Flüssigkeit, welche mit <i>dm</i> bezeichnet werde, in Dampf übergegangen ist. Sey nun das Volumen einer Gewichtseinheit Dampf im Maximum seiner Dichte bei der Temperatur <i>t</i> mit <i>s</i> bezeichnet, und das Volumen derselben Menge Flüssigkeit bei der Temperatur <i>t</i> mit <i>σ</i>, so ist offenbar
>
> <i>ef</i> = (<i>s</i> − <i>σ</i>) <i>dm</i>
>
> und somit der Inhalt des Vierecks oder
>
> (5.) <i>die erz. Arb.</i> = (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>.

これを定めるために、前と同じく、先に述べた変化を*無限に小さい*とする。この前提のもとで、過程を横の図 [図4] のように表す。図では、図3 に出てきた曲線 <i>ad</i> と <i>bc</i> が直線になっている。四辺形 <i>abcd</i> の面積については、これをまた平行四辺形と見なしてよい。だから、積 <i>ef</i>·<i>bk</i> をとればよい。いま、温度 <i>t</i> で張力が最大のときの蒸気の圧力を <i>p</i> とし、温度の差 <i>t</i> − <i>τ</i> を <i>dt</i> と書けば、

<i>bk</i> = <i>dp</i>/<i>dt</i> <i>dt</i>

である。<i>ef</i> は、ある量の液体が蒸気に変わったために生じた体積の増加である。その液体の量を <i>dm</i> と書く。さらに、温度 <i>t</i> で密度が最大の蒸気の、重さの単位あたりの体積を <i>s</i> とし、同じ量の液体の温度 <i>t</i> での体積を <i>σ</i> とすれば、明らかに

<i>ef</i> = (<i>s</i> − <i>σ</i>) <i>dm</i>

であり、したがって四辺形の面積、すなわち

(5.) <i>生み出された仕事</i> = (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>

となる。

訳注：図4 は、左に縦の軸（下端が原点 o）、下に横の軸があり、横の軸の上に左から e・h・f・g の点がある。上の水平な辺 ab（a は e の真上、b は f の真上）と、下の水平な辺 dc（d は h の真上、c は g の真上）を、斜めの線 ad と bc がつなぎ、四辺形 abcd になっている。e・h・f・g からはそれぞれ a・d・b・c へ縦の線が立つ。k は辺 dc の上で b の真下に当たる点で、bk は温度 t と τ での圧力の差を表す。横の軸が体積、縦の軸が圧力。図の文字は誌面の図から読んだ。<i>p</i> は今の飽和蒸気圧、<i>s</i> は飽和蒸気の比体積に当たる。式の <i>die erz. Arb.</i> は die erzeugte Arbeit（生み出された仕事）の略。誌面の縦に組んだ分数は「/」で一行にした（誌面で括弧の無い <i>dp</i>/<i>dt</i> には括弧を付けていない）。τ は前の段（図3 の説明）で導入された低い方の温度。

### ¶40　p.387–388

> Um die Wärmemengen ausdrücken zu können, wollen [p.388] wir folgende Bezeichnungen einführen. Die Wärmemenge, welche latent wird, wenn eine Gewichtseinheit Flüssigkeit bei der Temperatur <i>t</i> und unter dem entsprechenden Drucke verdampft, heisse <i>r</i> und die specifische Wärme der Flüssigkeit <i>c</i>, welche beiden Grössen, so wie auch die vorigen <i>s</i>, <i>σ</i> und <i>dp</i>/<i>dt</i> als Functionen von <i>t</i> anzusehen sind. Endlich sey die Wärmemenge, welche einer Gewichtseinheit Dampf mitgetheilt werden muss, wenn er von der Temperatur <i>t</i> auf <i>t</i> + <i>dt</i> gebracht, dabei aber so zusammengedrückt werden soll, dass er sich für diese Temperatur, ohne dass ein Theil von ihm niedergeschlagen wird, gerade wieder im Maximum der Dichte befindet, mit <i>hdt</i> bezeichnet, worin <i>h</i> ebenfalls eine Function von <i>t</i> hedeutet, von welcher vorläufig dahingestellt bleibe, ob sie ihrem Werthe nach positiv oder negativ ist.

熱量を式に表せるように、 [p.388] 次の記号を入れよう。重さの単位一つの液体が、温度 <i>t</i> で、それに応じた圧力のもとで蒸発するときに潜熱となる熱量を <i>r</i> と呼び、液体の比熱を <i>c</i> と呼ぶ。この二つの量は、前の <i>s</i>、<i>σ</i>、<i>dp</i>/<i>dt</i> と同じく、<i>t</i> の関数と見なす。最後に、重さの単位一つの蒸気を温度 <i>t</i> から <i>t</i> + <i>dt</i> へ上げ、そのときに、その温度で一部も凝結せずにちょうどまた密度が最大になるように圧縮するとき、蒸気に与えなければならない熱量を <i>hdt</i> と書く。<i>h</i> もまた <i>t</i> の関数である。その値が正か負かは、ひとまず決めずにおく。

訳注：<i>r</i> は今の蒸発の潜熱。<i>h</i> は、飽和の状態を保ったまま温度を上げるときの蒸気の比熱に当たる（今の言い方で飽和蒸気の比熱）。誌面の「hedeutet」は bedeutet の誤植で、直さずに置いた。

### ¶41　p.388

> Wenn wir nun die ursprünglich im Gefässe vorhandene Flüssigkeitsmasse <i>μ</i> und die Dampfmasse <i>m</i> nennen, ferner die bei der Ausdehnung von <i>oe</i> bis <i>of</i> verdampfende Masse <i>dm</i> und die bei der Zusammendrückung von <i>og</i> bis <i>oh</i> niedergeschlagene <i>d′m</i>, so wird bei der ersteren die Wärmemenge
>
> <i>rdm</i>
>
> latent und dem Körper <i>A</i> entzogen, und bei der letzteren die Menge
>
> (<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>
>
> frei und dem Körper <i>B</i> abgegeben. Bei der anderen Ausdehnung und Zusammendrückung wird weder Wärme gewonnen noch verloren, folglich ist zu Ende des Processes
>
> (6.) <i>Die verbr. Wärme</i> = <i>rdm</i> − (<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>.

いま、はじめに容器の中にある液体の質量を <i>μ</i>、蒸気の質量を <i>m</i> と呼ぶ。さらに、<i>oe</i> から <i>of</i> までの膨張で蒸発する質量を <i>dm</i>、<i>og</i> から <i>oh</i> までの圧縮で凝結する質量を <i>d′m</i> と呼ぶ。すると、前者では熱量

<i>rdm</i>

が潜熱となり、物体 <i>A</i> から奪われる。後者では熱量

(<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>

が自由な熱となり、物体 <i>B</i> に渡される。もう一つの膨張と圧縮では、熱は得られも失われもしない。したがって、過程の終わりには

(6.) <i>消費された熱</i> = <i>rdm</i> − (<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>

となる。

訳注：<i>A</i>・<i>B</i> は前の段で導入された、温度 <i>t</i> と <i>τ</i> の熱の源の物体（ここでは仕事の当量の <i>A</i> ではない）。<i>d′m</i> は誌面で d に ′ を付けた字。<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i> は低い温度 <i>τ</i> での潜熱。<i>die verbr. Wärme</i> は die verbrauchte Wärme（消費された熱）の略。

### ¶42　p.388–389

> Hierin muss noch das Differential <i>d′m</i> durch <i>dm</i> und <i>dt</i> ersetzt werden, und dazu dienen die Bedingungen, unter welchen die zweite Ausdehnung und die zweite Zusammendrückung geschehen sind. Die Dampfmasse, welche sich bei der Zusammendrückung von <i>oh</i> bis <i>oe</i> niederschlägt [p.389], und sich also auch bei der entsprechenden Ausdehnung von <i>oe</i> bis <i>oh</i> entwickeln würde, sey mit <i>δm</i> und die, welche sich bei der Ausdehnung von <i>of</i> bis <i>og</i> entwickelt mit <i>δ′m</i> bezeichnet, dann hat man zunächst, da am Schlusse wieder die ursprüngliche Flüssigkeitsmasse <i>μ</i> und die Dampfmasse <i>m</i> vorhanden seyn muss, die Gleichung:
>
> <i>dm</i> + <i>δ′m</i> = <i>d′m</i> + <i>δm</i>.
>
> Ferner ergiebt sich für die Ausdehnung von <i>oe</i> bis <i>oh</i>, indem dabei die Flüssigkeitsmasse <i>μ</i> und die Dampfmasse <i>m</i> ihre Temperatur um <i>dt</i> erniedrigen müssen, ohne dass Wärme fortgeht, die Gleichung:
>
> <i>rδm</i> − <i>μ</i>.<i>cdt</i> − <i>m</i>.<i>hdt</i> = 0,
>
> und ebenso für die Ausdehnung von <i>of</i> bis <i>og</i>, indem man nur <i>μ</i> − <i>dm</i> und <i>m</i> + <i>dm</i> an die Stelle von <i>μ</i> und <i>m</i>, und <i>δ′m</i> an die Stelle von <i>δm</i> setzt,
>
> <i>rδ′m</i> − (<i>μ</i> − <i>dm</i>) <i>cdt</i> − (<i>m</i> + <i>dm</i>) <i>hdt</i> = 0.
>
> Wenn man aus diesen drei Gleichungen und (6.) die Grössen <i>d′m</i>, <i>δm</i> und <i>δ′m</i> eliminirt, und die Glieder von höherer als der zweiten Ordnung fortlässt, so kommt:
>
> (7.) <i>die verbr. Wärme</i> = (<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i>.

ここで、なお微分 <i>d′m</i> を <i>dm</i> と <i>dt</i> で置き換えなければならない。それには、二度目の膨張と二度目の圧縮が行われた条件を使う。<i>oh</i> から <i>oe</i> までの圧縮で凝結する蒸気の質量 [p.389]、したがって逆向きの <i>oe</i> から <i>oh</i> までの膨張では生じるはずの蒸気の質量を <i>δm</i> とし、<i>of</i> から <i>og</i> までの膨張で生じる蒸気の質量を <i>δ′m</i> とする。すると、まず、終わりにはふたたび元の液体の質量 <i>μ</i> と蒸気の質量 <i>m</i> がなければならないから、次の式を得る。

<i>dm</i> + <i>δ′m</i> = <i>d′m</i> + <i>δm</i>

次に、<i>oe</i> から <i>oh</i> までの膨張では、液体の質量 <i>μ</i> と蒸気の質量 <i>m</i> が、熱が出ていかないまま温度を <i>dt</i> だけ下げなければならない。そこから次の式を得る。

<i>rδm</i> − <i>μ</i>·<i>cdt</i> − <i>m</i>·<i>hdt</i> = 0

同じように、<i>of</i> から <i>og</i> までの膨張については、<i>μ</i> と <i>m</i> の代わりに <i>μ</i> − <i>dm</i> と <i>m</i> + <i>dm</i> を、<i>δm</i> の代わりに <i>δ′m</i> を置けばよく、

<i>rδ′m</i> − (<i>μ</i> − <i>dm</i>) <i>cdt</i> − (<i>m</i> + <i>dm</i>) <i>hdt</i> = 0

となる。この三つの式と (6.) から量 <i>d′m</i>、<i>δm</i>、<i>δ′m</i> を消去し、二次より高い次数の項を捨てると、

(7.) <i>消費された熱</i> = (<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i>

となる。

訳注：誌面は「die Gleichung:」と書いてから式を独立の行に置く。訳では「次の式を得る」とした。

### ¶43　p.389

> Die Formeln (7.) und (5.) müssen nun auf dieselbe Weise zusammengestellt werden, wie es bei den permanenten Gasen geschehen ist, nämlich:
>
> (<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i> / ((<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>) = <i>A</i>,
>
> und man erhält also als den für die Dämpfe im Maximum der Dichte geltenden analytischen Ausdruck des Grundsatzes die Gleichung:
>
> (III.) <i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = <i>A</i> (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>.

さて、式 (7.) と (5.) を、永久気体のときと同じやり方で組み合わせなければならない。すなわち

(<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i> / ((<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>) = <i>A</i>

とする。こうして、密度が最大の蒸気について成り立つ、原則の解析的な表現として、次の式を得る。

(III.) <i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = <i>A</i> (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>

訳注：「原則」（Grundsatz）は、前の部分で立てた、熱と仕事の等価の原則を指す。<i>A</i> は前の部分で導入された、仕事の単位あたりの熱（今の仕事の熱当量）。誌面の縦の分数は、分子と分母をそれぞれ括弧に入れて「/」で一行にした。

### ¶44　p.389–390

> Wenn man anstatt des obigen Grundsatzes die Annahme [p.390], dass die Quantität der Wärme *constant* sey, festhielte, so würde man zufolge (7.) statt der Gleichung (III.) setzen müssen:
>
> (8.) <i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = 0,
>
> und diese Gleichung hat man, wenn auch nicht gerade in derselben Form, so doch ihrem Sinne nach bisher benutzt, um den Werth der Grösse <i>h</i> zu bestimmen. So lange man bei dem Wasser das *Watt*'sche Gesetz für richtig hielt, dass die Summe der freien und latenten Wärme eines Quantums Dampf im Maximum der Dichte für alle Temperaturen gleich, und dass also
>
> <i>dr</i>/<i>dt</i> + <i>c</i> = 0
>
> sey, musste man schliessen, dass für diese Flüssigkeit auch <i>h</i> = 0 sey, und dieses hat man in der That auch vielfach als richtig ausgesprochen, indem man sagte, wenn ein Quantum Dampf sich im Maximum der Dichte befinde, und dann in einem für Wärme undurchdringlichen Gefässe zusammengedrückt werde oder sich ausdehne, so bleibe es im Maximum der Dichte. Nachdem aber *Regnault* [注8] das *Watt*'sche Gesetz dahin berichtigt hat, dass man ziemlich angenähert setzen kann:
>
> <i>dr</i>/<i>dt</i> + <i>c</i> = 0,305,
>
> giebt die Gleichung (8.) auch für <i>h</i> den Werth 0,305. Es würde also folgen, dass das vorher betrachtete Dampfquantum in dem für Wärme undurchdringlichen Gefässe bei der Zusammendrückung sich zum Theil niederschlagen müsse, dagegen bei der Ausdehnung nicht mehr im Maximum der Dichte bleibe, indem seine Temperatur nicht in dem Verhältnisse abnehme, wie es der Abnahme der Dichte entspreche.

もし上の原則の代わりに、熱の量は*一定*であるという仮定を [p.390] 守るなら、(7.) から、式 (III.) の代わりに

(8.) <i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = 0

と置かなければならないだろう。そしてこの式は、まったく同じ形ではないにせよ、趣旨としては、これまで量 <i>h</i> の値を定めるのに使われてきた。水について、ワットの法則、すなわち密度が最大の蒸気の一定量がもつ自由な熱と潜熱の和はどの温度でも等しく、したがって

<i>dr</i>/<i>dt</i> + <i>c</i> = 0

であるという法則が正しいとされていたあいだは、この液体については <i>h</i> = 0 でもある、と結論せざるをえなかった。じっさい、これは正しいものとして何度も述べられてきた。蒸気の一定量が密度の最大にあり、それを熱を通さない容器の中で圧縮したり膨張させたりしても、密度の最大にとどまる、と言われたのである。ところが、ルニョー [注8] がワットの法則を直し、かなりよい近似で

<i>dr</i>/<i>dt</i> + <i>c</i> = 0,305

と置けることを示した。すると式 (8.) から、<i>h</i> の値も 0,305 となる。したがって、先に考えた蒸気の一定量は、熱を通さない容器の中で、圧縮のときには一部が凝結しなければならず、逆に膨張のときには、密度の減り方に見合うほどには温度が下がらないので、もはや密度の最大にとどまらない、ということになるだろう。

訳注：熱の量が一定という仮定は、熱素の説（熱は生じも消えもしない）に当たる。ワットの法則は、飽和蒸気の全熱（自由な熱と潜熱の和）が温度によらないとする説（James Watt）。ルニョーの測定は、全熱が温度 1 度につき 0,305 だけ増えるとした。数の 0,305 は誌面のとおり小数点にコンマを使う。

### ¶45　p.390–391

> Ganz anders verhält es sich, wenn man die Gleichung (8.) durch (III.) ersetzt. Der Ausdruck auf der rechten Seite [p.391] ist seiner Natur nach immer positiv, und daraus folgt zunächst, dass <i>h</i> kleiner als 0,305 seyn muss. Weiterhin wird sich aber auch noch ergeben, dass der Werth jenes Ausdrucks so gross ist, dass <i>h</i> sogar *negativ* wird. Man muss also schliessen, dass das obige Dampfquantum nicht bei der *Zusammendrückung* sondern vielmehr bei der *Ausdehnung* sich theilweise niederschlägt, während bei der Zusammendrückung seine Temperatur in stärkerem Verhältnisse steigt, als es der Zunahme der Dichte entspricht, so dass es dann nicht mehr im Maximum der Dichte bleibt.

式 (8.) を (III.) で置き換えると、まったく違ってくる。右辺の式は [p.391] その性質からつねに正である。そこからまず、<i>h</i> は 0,305 より小さくなければならないことが出る。さらに、のちに、その式の値はかなり大きく、<i>h</i> は*負*にさえなることもわかるだろう。だから、上の蒸気の一定量は、*圧縮*のときではなく、むしろ*膨張*のときに一部が凝結する、と結論しなければならない。一方、圧縮のときには、密度の増え方に見合う以上に温度が上がり、そのため、もはや密度の最大にとどまらない。

訳注：右辺 <i>A</i> (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> が正なのは、蒸気の体積が液体より大きく、飽和の圧力が温度とともに増えるから。<i>h</i> が負とは、今の言い方で、飽和蒸気の比熱が負であること。断熱膨張で飽和蒸気の一部が凝結する、という今も知られた結果に当たる。

### ¶46　p.391–392

> Dieses Resultat ist freilich der vorher erwähnten gewöhnlichen Vorstellung gerade entgegengesetzt, doch glaube ich nicht, dass irgend eine experimentelle Erfahrung dagegen spricht. Vielmehr steht es mit dem von *Pambour* beobachteten Verhalten des Dampfes besser in Einklang, als jene Vorstellung. Dieser fand nämlich [注9], dass der Dampf, welcher nach verrichteter Arbeit aus einer Locomotive tritt, stets die Temperatur besitzt, zu welcher die gleichzeitig beobachtete Spannkraft als Maximum gehört. Daraus folgt, dass <i>h</i> entweder = 0 ist, wie man es damals annahm, weil diess mit dem so schon für wahrscheinlich gehaltenen *Watt*'schen Gesetze übereinstimmte, oder dass <i>h</i> *negativ* ist. Wäre nämlich <i>h</i> *positiv*, so müsste die Temperatur des Dampfes bei der Ausströmung, im Vergleiche zu seiner Spannkraft, zu hoch seyn, und das hätte *Pambour* nicht entgehen können. Ist dagegen der vorherigen Angabe gemäss <i>h</i> *negativ*, so kann dadurch nicht eine zu niedrige Temperatur entstehen, sondern es muss nur ein Theil des Dampfes tropfbar flüssig werden, um den übrigen Dampf in der gehörigen Temperatur zu erhalten. Dieser Theil braucht aber nicht gross zu seyn, da eine geringe Menge Dampf beim Niederschlagen eine verhältnissmässig grosse Wärmemenge frei macht, und das entstandene Wasser wird daher wahrscheinlich mechanisch von dem übrigen Dampfe mit fortgeführt, und konnte bei jenen Versuchen um so [p.392] eher unbeachtet bleiben, als man, wenn man es bemerkte, glauben konnte, es sey schon aus dem Dampfkessel als Wasser mechanisch mit fortgerissen.

この結果は、たしかに、先に述べた普通の考えとちょうど反対である。しかし、実験で知られたことのうちに、これに反するものがあるとは私は思わない。むしろ、この結果は、パンブールが観察した蒸気のふるまいと、あの考えよりもよく合う。パンブールは [注9]、仕事をしたあとで機関車から出てくる蒸気が、いつも、同じときに観察された張力が最大の張力となる温度をもつことを見いだした。そこから、<i>h</i> = 0 であるか、それとも <i>h</i> は*負*であるか、のどちらかが出る。前者は当時そう仮定されていた。もともと確からしいとされていたワットの法則に合ったからである。というのも、もし <i>h</i> が*正*なら、流れ出るときの蒸気の温度は、その張力に比べて高すぎるはずで、パンブールがそれを見逃したはずはない。逆に、先に述べたとおり <i>h</i> が*負*なら、それで温度が低すぎることにはならない。ただ、残りの蒸気をしかるべき温度に保つために、蒸気の一部が滴になる液体にならなければならないだけである。だがこの部分は大きくなくてよい。少しの蒸気でも、凝結するときに比較的大きな熱量を放つからである。そうしてできた水は、たぶん残りの蒸気に機械的に運ばれていく。そしてあの実験では、 [p.392] なおさら気づかれずに済みえた。気づいたとしても、それはすでにボイラーから水のまま機械的に引きずられてきたのだ、と思えたからである。

訳注：パンブール（François-Marie Guyonneau de Pambour）は蒸気機関車の試験で知られるフランスの技術者。「同じときに観察された張力が最大の張力となる温度」とは、今の言い方で、蒸気の圧力に対応する飽和温度。tropfbar flüssig（滴をなす液体）は、気体に対して液体を言う当時の言い方。

### ¶47　p.392

> Die bisherigen Folgerungen sind nur aus dem oben aufgestellten Grundsatze ohne irgend eine weitere Voraussetzung abgeleitet. Die für die permanenten Gase erhaltene Gleichung (II<i>a</i>.) lässt sich indessen durch eine sehr nahe liegende Nebenannahme noch bedeutend fruchtbarer machen. Die Gase zeigen in ihrem Verhalten, besonders in der durch das M. und G. Gesetz ausgesprochenen Beziehung zwischen Volumen, Druck und Temperatur, eine so grosse Regelmässigkeit, dass man dadurch zu der Vorstellung geleitet wird, dass die gegenseitige Anziehung der Theilchen, welche im Innern der festen und tropfbar flüssigen Körper wirkt, bei den Gasen schon aufgehoben sey, so dass die Wärme, während sie bei jenen Körpern, um eine Ausdehnung zu bewirken, nicht bloss den äusseren Druck, sondern auch die innere Anziehung überwinden muss, es bei den Gasen nur mit dem äusseren Drucke zu thun habe. Ist dieses der Fall, so kann bei der Ausdehnung eines Gases nur so viel Wärme *latent* werden, wie zu *äusserer* Arbeit verbraucht wird. Ferner ist auch kein Grund vorhanden, anzunehmen, dass ein Gas, wenn es sich bei constanter Temperatur ausgedehnt hat, dann mehr *freie* Wärme enthalte, als vorher. Giebt man auch dieses zu, so erhält man den Satz: *ein permanentes Glas verschluckt, wenn es sich bei constanter Temperatur ausdehnt, nur so viel Wärme, wie zu der äusseren Arbeit, die es dabei leistet, verbraucht wird;* ein Satz, der wahrscheinlich für jedes Gas in eben dem Grade genau ist, in welchem das M. und G. Gesetz auf dasselbe Anwendung findet.

ここまでの帰結は、上で立てた原則だけから、ほかの前提を何も置かずに導いた。しかし、永久気体について得た式 (II<i>a</i>.) は、ごく手近な副次の仮定を一つ置くと、さらにずっと実りあるものにできる。気体は、そのふるまいに、とくにマリオットとゲイ＝リュサックの法則が言い表す体積・圧力・温度のあいだの関係に、たいへん大きな規則正しさを見せる。そのため、次のような考えに導かれる。固体や液体の内部ではたらく粒子どうしの引き合いは、気体ではすでに消えている。だから、熱は、固体や液体では、膨張を起こすのに外の圧力だけでなく内部の引き合いにも打ち勝たなければならないが、気体では外の圧力だけを相手にすればよい、と。そうだとすると、気体が膨張するときには、*外部の*仕事に消費されるだけの熱しか*潜熱*にならない。さらに、気体が一定の温度で膨張したあとで、前よりも多くの*自由な*熱を含むと考える理由もない。これも認めれば、次の命題を得る。*永久気体は、一定の温度で膨張するとき、そのときに行う外部の仕事に消費されるだけの熱しか吸い込まない。*この命題は、たぶん、どの気体についても、マリオットとゲイ＝リュサックの法則がその気体に当てはまるのとちょうど同じ程度に正確である。

訳注：式 (II<i>a</i>.) は前の部分で導いた、永久気体についての式。誌面の「ein permanentes Glas」の Glas（ガラス）は Gas（気体）の誤植で、直さずに置いた。訳は Gas として訳した。「副次の仮定」（Nebenannahme）の中身は、気体では粒子どうしの引き合いが消えているので、一定の温度で膨張するとき、外部の仕事に消費される分しか熱が潜熱にならず、自由な熱も増えない、ということ。この命題は、今の言い方で、理想気体の内部エネルギーが体積によらない（温度だけの関数である）ことに当たる。

### ¶48　p.392–393

> Hieraus folgt dann sogleich, dass
>
> (9.) (<i>dQ</i>/<i>dv</i>) = <i>A</i>.<i>R</i> (<i>a</i> + <i>t</i>)/<i>v</i>
>
> ist, da, wie schon oben erwähnt, <i>R</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i> die bei der Ausdehnung um <i>dv</i> geleistete äussere Arbeit darstellt. Demnach [p.393] kann die in (II<i>a</i>.) vorkommende Function <i>U</i> kein <i>v</i> enthalten, und die Gleichung geht daher über in:
>
> (II<i>b</i>.) <i>dQ</i> = <i>cdt</i> + <i>AR</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i>,
>
> worin <i>c</i> nur eine Function von <i>t</i> seyn kann, und es ist sogar wahrscheinlich, dass diese Grösse <i>c</i>, welche die specifische Wärme des Gases bei constantem Volumen bedeutet, eine Constante ist.

ここからただちに

(9.) (<i>dQ</i>/<i>dv</i>) = <i>A</i>·<i>R</i> (<i>a</i> + <i>t</i>)/<i>v</i>

が出る。上で述べたように、<i>R</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i> は、<i>dv</i> だけ膨張するときに行われる外部の仕事を表すからである。 [p.393] したがって、(II<i>a</i>.) に出てくる関数 <i>U</i> は <i>v</i> を含みえない。そこで式は次のようになる。

(II<i>b</i>.) <i>dQ</i> = <i>cdt</i> + <i>AR</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i>

ここで <i>c</i> は <i>t</i> だけの関数でしかありえない。それどころか、体積が一定のときの気体の比熱を意味するこの量 <i>c</i> は、定数であるらしい。

訳注：(9.) の微分商を囲む括弧は誌面のとおり。<i>R</i>・<i>a</i> は前の部分の式 (I.)（<i>pv</i> = <i>R</i> (<i>a</i> + <i>t</i>)）の定数で、<i>a</i> + <i>t</i> は今の絶対温度に当たる。<i>U</i> は前の部分の式 (II<i>a</i>.) に出る関数。

### ¶49　p.393

> Um nun diese Gleichung auf besondere Fälle anzuwenden, muss man die aus den Bedingungen jedes einzelnen Falles sich ergebende Beziehung zwischen den Veränderlichen <i>Q</i>, <i>t</i> und <i>v</i> mit der Gleichung in Verbindung bringen, und sie dadurch integrabel machen. Es sollen hier nur einige einfache Beispiele der Art angeführt werden, welche entweder an sich von Interesse sind, oder es dadurch werden, dass man sie mit anderen schon früher ausgesprochenen Sätzen vergleichen kann.

さて、この式を個々の場合に当てはめるには、それぞれの場合の条件から出てくる変数 <i>Q</i>·<i>t</i>·<i>v</i> のあいだの関係を、この式と組み合わせ、それによって式を積分できるようにしなければならない。ここでは、そうした例のうち、簡単なものをいくつか挙げるだけにする。それ自体で興味深いものか、前にすでに述べられたほかの命題と比べられるので興味深くなるものである。

### ¶50　p.393–394

> Man kann zunächst die specifische Wärme des Gases bei constantem Volumen und die bei constantem Drucke erhalten, wenn man in (II<i>b</i>.) <i>v</i> = const. und <i>p</i> = const. setzt. Im ersteren Falle wird <i>dv</i> = <i>o</i> und (II<i>b</i>.) geht über in:
>
> (10.) <i>dQ</i>/<i>dt</i> = <i>c</i>.
>
> Im letzteren Falle ergiebt sich aus der Bedingung <i>p</i> = const. mit Hülfe der Gleichung (I.):
>
> <i>dv</i> = <i>Rdt</i>/<i>p</i>
>
> oder:
>
> <i>dv</i>/<i>v</i> = <i>dt</i>/(<i>a</i> + <i>t</i>),
>
> und dieses in (II<i>b</i>.) eingesetzt, giebt, wenn man die specifische Wärme bei constantem Drucke mit <i>c′</i> bezeichnet:
>
> (10<i>a</i>.) <i>dQ</i>/<i>dt</i> = <i>c′</i> = <i>c</i> + <i>AR</i>.
>
> Man sieht also, *dass die Differenz der beiden specifischen Wärmen für jedes Gas eine constante Grösse <i>AR</i> ist.* [p.394] Diese Grösse bietet aber auch für die verschiedenen Gase eine einfache Beziehung dar. Der vollständige Ausdruck für <i>R</i> ist <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>), wenn <i>p</i><sub>0</sub>, <i>v</i><sub>0</sub> und <i>t</i><sub>0</sub> irgend drei zusammengehörige Werthe von <i>p</i>, <i>v</i> und <i>t</i> für eine Gewichtseinheit des betrachteten Gases sind, und daraus folgt, wie schon bei der Aufstellung der Gleichung (I.) erwähnt wurde, dass <i>R</i> umgekehrt proportional dem specifischen Gewichte des Gases ist, und dasselbe muss daher auch für die Differenz <i>c′</i> − <i>c</i> = <i>AR</i> gelten, da <i>A</i> für alle Gase gleich ist.

まず、(II<i>b</i>.) で <i>v</i> = 一定、<i>p</i> = 一定 と置けば、体積が一定のときの気体の比熱と、圧力が一定のときの比熱が得られる。前者の場合には <i>dv</i> = 0 となり、(II<i>b</i>.) は

(10.) <i>dQ</i>/<i>dt</i> = <i>c</i>

となる。後者の場合には、条件 <i>p</i> = 一定 と式 (I.) から

<i>dv</i> = <i>Rdt</i>/<i>p</i>

すなわち

<i>dv</i>/<i>v</i> = <i>dt</i>/(<i>a</i> + <i>t</i>)

が出る。これを (II<i>b</i>.) に入れ、圧力が一定のときの比熱を <i>c′</i> と書くと、

(10<i>a</i>.) <i>dQ</i>/<i>dt</i> = <i>c′</i> = <i>c</i> + <i>AR</i>

となる。したがって、*二つの比熱の差は、どの気体についても一定の量 <i>AR</i> である*ことがわかる。 [p.394] しかもこの量は、気体の種類のあいだにも簡単な関係を示す。<i>p</i><sub>0</sub>・<i>v</i><sub>0</sub>・<i>t</i><sub>0</sub> を、考えている気体の重さの単位についての、<i>p</i>·<i>v</i>·<i>t</i> の互いに対応する三つの値とすれば、<i>R</i> を略さずに書いた形は <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>) である。そこから、式 (I.) を立てたときにすでに述べたように、<i>R</i> は気体の比重に反比例する。<i>A</i> はどの気体でも同じだから、同じことが差 <i>c′</i> − <i>c</i> = <i>AR</i> についても成り立たなければならない。

訳注：誌面の「<i>dv</i> = <i>o</i>」は、数字の 0 でなく斜体の o の字に見える。誤植と見て、原文は誌面のとおり置き、訳は 0 とした（推測）。<i>c′</i> − <i>c</i> = <i>AR</i> は、今のマイヤーの関係（<i>C</i><sub>p</sub> − <i>C</i><sub>v</sub> = <i>R</i> を熱の単位で書いたもの）に当たる。式 (10.) と (10<i>a</i>.) の微分商は、誌面では括弧で囲まれていない。

### ¶51　p.394

> Will man die specifische Wärme der Gase nicht nach der *Gewichts*einheit, sondern, wie es gebräuchlicher ist, nach der *Volumen*einheit rechnen, so braucht man, wenn das Volumen sich auf die Temperatur <i>t</i><sub>0</sub> und den Druck <i>p</i><sub>0</sub> bezieht, <i>c</i> und <i>c′</i> nur durch <i>v</i><sub>0</sub> zu dividiren. Seyen diese Quotienten mit <i>γ</i> und <i>γ′</i> bezeichnet, so erhält man:
>
> (11.) <i>γ′</i> − <i>γ</i> = <i>A</i>.<i>R</i>/<i>v</i><sub>0</sub> = <i>A</i> <i>p</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>).
>
> In dieser letzten Grösse kommt nichts mehr vor, was von der besonderen Natur des Gases abhängig wäre, und *die Differenz der nach der Volumeneinheit gerechneten specifischen Wärmen ist also für alle Gase gleich.* Diesen Satz hat auch *Clapeyron* aus der Carnot'schen Theorie abgeleitet, während sich die vorher gefundene Constanz der Differenz <i>c′</i> − <i>c</i> dort nicht ergiebt, sondern der für dieselbe gefundene Ausdruck noch die Form einer Temperaturfunction hat.

気体の比熱を、*重さ*の単位でなく、よく行われるように*体積*の単位について数えたいなら、その体積が温度 <i>t</i><sub>0</sub> と圧力 <i>p</i><sub>0</sub> でのものだとして、<i>c</i> と <i>c′</i> を <i>v</i><sub>0</sub> で割るだけでよい。その商を <i>γ</i> と <i>γ′</i> と書けば、

(11.) <i>γ′</i> − <i>γ</i> = <i>A</i>·<i>R</i>/<i>v</i><sub>0</sub> = <i>A</i> <i>p</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>)

を得る。この最後の量には、気体の種類による性質に関わるものはもう何も出てこない。したがって、*体積の単位について数えた二つの比熱の差は、すべての気体で等しい。*この命題は、クラペイロンもカルノーの理論から導いた。しかし、先に見いだした差 <i>c′</i> − <i>c</i> が一定であることは、そこでは出てこない。そこで得られたこの差の式は、なお温度の関数の形をしている。

### ¶52　p.394–395

> Dividirt man die Gleichung (11.) auf beiden Seiten mit <i>γ</i>, so kommt:
>
> (12). <i>k</i> − 1 = (<i>A</i>/<i>γ</i>).(<i>p</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>)),
>
> worin <i>k</i> der Kürze wegen für den Quotienten <i>γ′</i>/<i>γ</i> gesetzt ist, welcher mit dem Quotienten <i>c′</i>/<i>c</i> gleichbedeutend ist, und durch die theoretischen Betrachtungen von *Laplace* über die Fortpflanzung des Schalles in der Luft eine besondere Wichtigkeit für die Wissenschaft erlangt hat. *Der [p.395] Ueberschuss dieses Quotienten über die Einheit ist also bei verschiedenen Gasen der specifischen Wärme derselben bei constantem Volumen umgekehrt proportional, wenn die letztere nach der Volumeneinheit gerechnet wird.* Dieser Satz ist in der That von *Dulong* durch Versuche [注10] so nahe als richtig gefunden worden, dass er ihn mit Rücksicht auf seine theoretische Wahrscheinlichkeit als streng richtig angenommen, und dann umgekehrt dazu benutzt hat, aus den durch die Beobachtung ermittelten Werthen von <i>k</i> die specifischen Wärmen der verschiedenen Gase zu berechnen. Dabei muss jedoch bemerkt werden, dass der Satz theoretisch nur so weit verbürgt ist, als das M. und G. Gesetz gilt, was nicht bei allen von *Dulong* angewandten Gasen mit hinlänglicher Genauigkeit stattfindet.

式 (11.) の両辺を <i>γ</i> で割ると、

(12.) <i>k</i> − 1 = (<i>A</i>/<i>γ</i>)·(<i>p</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>))

となる。ここで <i>k</i> は、短く書くために商 <i>γ′</i>/<i>γ</i> の代わりに置いたもので、商 <i>c′</i>/<i>c</i> と同じ意味である。この商は、空気の中の音の伝わりについてのラプラスの理論的な考察によって、学問にとってとくに重要になった。*したがって、この商が 1 を超える分は、気体の種類ごとに、体積が一定のときのその気体の比熱を体積の単位について数えたものに反比例する。* [p.395] この命題は、じっさいデュロンが実験によって [注10]、ごく近く正しいと見いだした。それでデュロンは、理論から見て確からしいことも考え合わせて、これを厳密に正しいものとして受け入れ、そして逆に、観察で求めた <i>k</i> の値から、いろいろな気体の比熱を計算するのに使った。ただし、次のことは言っておかなければならない。この命題が理論の上で保証されるのは、マリオットとゲイ＝リュサックの法則が成り立つ範囲に限られる。そしてそれは、デュロンが使ったすべての気体について十分な精度で成り立つわけではない。

訳注：誌面は式の番号を「(12).」と、点を括弧の外に置く。原文は誌面のとおり置き、訳では (12.) とそろえた。式の「.」は掛け算の点。<i>k</i> は今の比熱比（<i>γ</i> と書かれることが多いが、ここでの <i>γ</i> は体積あたりの比熱で別のもの）。ラプラス（Pierre-Simon Laplace）は、音速についてのニュートンの式を、断熱の圧縮を入れて <i>k</i> で直した。デュロン（Pierre Louis Dulong）。強調の文は、誌面で p.394 の終わりの「Der」から p.395 にまたがる。

### ¶53　p.395

> Nimmt man an, dass die specifische Wärme der Gase bei constantem Volumen <i>c</i> constant sey, was schon oben als sehr wahrscheinlich bezeichnet wurde, so ergiebt sich dasselbe auch für die specifische Wärme, bei constantem Drucke, und folglich *muss dann auch der Quotient beider specifischen Wärmen <i>c′</i>/<i>c</i> = <i>k</i> constant seyn.* Dieser Satz, welchen schon *Poisson* nach Versuchen von *Gay-Lussac* und *Welter* als richtig angenommen, und seinen Untersuchungen über die Spannkraft und Wärme der Gase zu Grunde gelegt hat [注11], stimmt also mit der vorstehenden Theorie sehr gut überein, während er nach der Carnot'schen Theorie bei ihrer bisherigen Behandlung nicht möglich wäre.

体積が一定のときの気体の比熱 <i>c</i> が一定であると仮定すれば（上ですでに、たいへん確からしいと述べた）、圧力が一定のときの比熱についても同じことが出る。したがって、*そのときは二つの比熱の商 <i>c′</i>/<i>c</i> = <i>k</i> も一定でなければならない。*この命題は、すでにポアソンが、ゲイ＝リュサックとヴェルテールの実験に基づいて正しいものとして受け入れ、気体の張力と熱についての研究の土台に置いた [注11]。だからこの命題は、上の理論とたいへんよく合う。これに対し、カルノーの理論では、これまでの扱い方のままなら、この命題は成り立ちえないだろう。

訳注：ポアソン（Siméon Denis Poisson）。ヴェルテール（Jean-Joseph Welter）は、ゲイ＝リュサックと組んで気体の比熱比を測った化学者。

### ¶54　p.395–396

> Setzt man in der Gleichung (II<i>b</i>.) <i>Q</i> = const. so erhält man folgende Gleichung zwischen <i>v</i> und <i>t</i>:
>
> (13) <i>cdt</i> + <i>A</i>.<i>R</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i> = 0
>
> woraus sich, wenn man <i>c</i> als constant betrachtet, ergiebt:
>
> <i>v</i><sup><i>A</i>.<i>R</i>/<i>c</i></sup>.(<i>a</i> + <i>t</i>) = const.
>
> oder, [p.396] da nach Gleichung (10<i>a</i>.) <i>AR</i>/<i>c</i> = <i>c′</i>/<i>c</i> − 1 = <i>k</i> − 1 ist:
>
> <i>v</i><sup><i>k</i>−1</sup> (<i>a</i> + <i>t</i>) = const.
>
> und daraus wird, wenn <i>v</i><sub>0</sub>, <i>t</i><sub>0</sub> und <i>p</i><sub>0</sub> drei zusammengehörige Werthe von <i>v</i>, <i>t</i> und <i>p</i> sind:
>
> (14.) (<i>a</i> + <i>t</i>)/(<i>a</i> + <i>t</i><sub>0</sub>) = (<i>v</i><sub>0</sub>/<i>v</i>)<sup><i>k</i>−1</sup>.
>
> Führen wir hierin mittelst der Gleichung (I.) erst für <i>v</i> und dann für <i>t</i> den Druck <i>p</i> ein, so kommt:
>
> (15). ((<i>a</i> + <i>t</i>)/(<i>a</i> + <i>t</i><sub>0</sub>))<sup><i>k</i></sup> = (<i>p</i>/<i>p</i><sub>0</sub>)<sup><i>k</i>−1</sup>
>
> (16.) <i>p</i>/<i>p</i><sub>0</sub> = (<i>v</i><sub>0</sub>/<i>v</i>)<sup><i>k</i></sup>
>
> Dieses sind die Beziehungen, welche zwischen Volumen, Temperatur und Druck stattfinden, wenn ein Gasquantum in einer für Wärme undurchdringlichen Hülle zusammengedrückt wird, oder sich ausdehnt. Diese Gleichungen stimmen ganz mit denen überein, welche von *Poisson* für denselben Fall entwickelt sind [注12], was eben darauf beruht, dass auch er <i>k</i> als constant betrachtet hat.

式 (II<i>b</i>.) で <i>Q</i> = 一定 と置けば、<i>v</i> と <i>t</i> のあいだに次の式を得る。

(13.) <i>cdt</i> + <i>A</i>·<i>R</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i> = 0

ここから、<i>c</i> を定数と見なせば、

<i>v</i><sup><i>A</i>·<i>R</i>/<i>c</i></sup>·(<i>a</i> + <i>t</i>) = 一定

が出る。 [p.396] あるいは、式 (10<i>a</i>.) から <i>AR</i>/<i>c</i> = <i>c′</i>/<i>c</i> − 1 = <i>k</i> − 1 だから、

<i>v</i><sup><i>k</i>−1</sup> (<i>a</i> + <i>t</i>) = 一定

となる。そしてここから、<i>v</i><sub>0</sub>・<i>t</i><sub>0</sub>・<i>p</i><sub>0</sub> を <i>v</i>·<i>t</i>·<i>p</i> の互いに対応する三つの値とすれば、

(14.) (<i>a</i> + <i>t</i>)/(<i>a</i> + <i>t</i><sub>0</sub>) = (<i>v</i><sub>0</sub>/<i>v</i>)<sup><i>k</i>−1</sup>

となる。これに、式 (I.) を使って、はじめに <i>v</i> の代わりに、次に <i>t</i> の代わりに圧力 <i>p</i> を入れると、

(15.) ((<i>a</i> + <i>t</i>)/(<i>a</i> + <i>t</i><sub>0</sub>))<sup><i>k</i></sup> = (<i>p</i>/<i>p</i><sub>0</sub>)<sup><i>k</i>−1</sup>

(16.) <i>p</i>/<i>p</i><sub>0</sub> = (<i>v</i><sub>0</sub>/<i>v</i>)<sup><i>k</i></sup>

となる。これらが、気体の一定量を熱を通さない覆いの中で圧縮したり、膨張させたりするときに、体積・温度・圧力のあいだに成り立つ関係である。この式は、ポアソンが同じ場合について導いた式と [注12] まったく一致する。それは、ポアソンもまた <i>k</i> を定数と見なしたことによる。

訳注：(13.) は熱の出入りが無い変化、すなわち今の断熱変化の式。(16.) は今のポアソンの式 <i>pv</i><sup><i>k</i></sup> = 一定 に当たる。誌面は (13) の番号に点を付けず、(15) は括弧のあとに点を置く。訳では (13.)・(15.) とそろえた。<i>c′</i>/<i>c</i> の分母は誌面ではローマン体の c に見えるが、斜体にそろえた。

### ¶55　p.396–397

> Setzt man endlich in der Gleichung (II<i>b</i>.) <i>t</i> = const. so fällt das erste Glied auf der rechten Seite fort, und es bleibt:
>
> (17.) <i>dQ</i> = <i>AR</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i>,
>
> woraus folgt:
>
> <i>Q</i> = <i>AR</i> (<i>a</i> + <i>t</i>) log. <i>v</i> + const.
>
> oder wenn man die zu Anfang der Volumenveränderung stattfindenden Werthe von <i>v</i>, <i>p</i>, <i>t</i> und <i>Q</i> mit <i>v</i><sub>0</sub>, <i>p</i><sub>0</sub>, <i>t</i><sub>0</sub> und <i>Q</i><sub>0</sub> bezeichnet:
>
> (18.) <i>Q</i> − <i>Q</i><sub>0</sub> = <i>AR</i> (<i>a</i> + <i>t</i><sub>0</sub>) log. <i>v</i>/<i>v</i><sub>0</sub>.
>
> Hieraus ergiebt sich zunächst der auch von *Carnot* entwickelte Satz: *wenn ein Gas ohne Temperaturveränderung sein Volumen verändert, so stehen die von demselben entwickelten [p.397] oder verschluckten Wärmemengen in arithmetischer Reihe, während die Volumina eine geometrische Reihe bilden.*

最後に、式 (II<i>b</i>.) で <i>t</i> = 一定 と置けば、右辺の第一項が消え、

(17.) <i>dQ</i> = <i>AR</i> ((<i>a</i> + <i>t</i>)/<i>v</i>) <i>dv</i>

が残る。ここから

<i>Q</i> = <i>AR</i> (<i>a</i> + <i>t</i>) log. <i>v</i> + 一定

が出る。あるいは、体積が変わり始めるときの <i>v</i>·<i>p</i>·<i>t</i>·<i>Q</i> の値を <i>v</i><sub>0</sub>・<i>p</i><sub>0</sub>・<i>t</i><sub>0</sub>・<i>Q</i><sub>0</sub> と書けば、

(18.) <i>Q</i> − <i>Q</i><sub>0</sub> = <i>AR</i> (<i>a</i> + <i>t</i><sub>0</sub>) log. <i>v</i>/<i>v</i><sub>0</sub>

となる。ここからまず、カルノーも導いた次の命題が出る。*気体が温度を変えずに体積を変えるとき、その気体が出す熱量や [p.397] 吸い込む熱量は等差の数列をなし、体積は等比の数列をなす。*

訳注：log. は自然対数（d log <i>v</i> = <i>dv</i>/<i>v</i> として積分しているので、式の運びから決まる）。(17.)・(18.) は今の等温変化で出入りする熱の式に当たる。

### ¶56　p.397

> Setzt man ferner in (18.) für <i>R</i> wieder den vollständigen Ausdruck <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>), so kommt:
>
> (19.) <i>Q</i> − <i>Q</i><sub>0</sub> = <i>Ap</i><sub>0</sub><i>v</i><sub>0</sub> log <i>v</i>/<i>v</i><sub>0</sub>.
>
> Wendet man nun diese Gleichung auf die verschiedenen Gase in der Weise an, dass man nicht gleiche *Gewichts*mengen derselben betrachtet, sondern solche Mengen, die zu Anfang das gleiche *Volumen* <i>v</i><sub>0</sub> einnehmen, so ist sie in allen ihren Theilen von der besonderen Natur des Gases unabhängig, und stimmt mit dem bekannten Satze überein, welchen *Dulong*, geleitet durch die oben erwähnte einfache Beziehung der Grösse <i>k</i> − 1, aufgestellt hat, *dass alle Gase, wenn man bei gleicher Temperatur und unter gleichem Drucke ein gleiches Volumen von ihnen nimmt, und sie dann um einen gleichen Bruchtheil dieses Volumens zusammendrückt oder ausdehnt, eine gleiche absolute Wärmemenge entwickeln oder verschlucken.* Die Gleichung (19.) ist aber noch viel allgemeiner. Sie sagt ausserdem, *dass die Wärmemenge unabhängig ist von der Temperatur, bei welcher die Volumenveränderung geschieht*, wenn nur die Quantität des angewandten Gases immer in der Weise bestimmt wird, dass auch bei den verschiedenen Temperaturen die anfänglich stattfindenden Volumina <i>v</i><sub>0</sub> gleich sind; ferner, *dass, wenn der anfängliche Druck in den veschiedenen Fällen verschieden ist, die Wärmemengen diesem proportional sind.*

さらに、(18.) で <i>R</i> にふたたび略さない形 <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>) を入れると、

(19.) <i>Q</i> − <i>Q</i><sub>0</sub> = <i>Ap</i><sub>0</sub><i>v</i><sub>0</sub> log <i>v</i>/<i>v</i><sub>0</sub>

となる。さて、この式をいろいろな気体に当てはめるとき、それぞれの*重さ*の等しい量でなく、始めに等しい*体積* <i>v</i><sub>0</sub> を占める量を考えるなら、式はどの部分も気体の種類による性質によらない。そしてこの式は、デュロンが上で述べた量 <i>k</i> − 1 の簡単な関係に導かれて立てた、よく知られた命題と一致する。その命題とは、*すべての気体は、等しい温度と等しい圧力のもとで等しい体積をとり、それをその体積の等しい割合だけ圧縮または膨張させると、等しい絶対の熱量を出すか吸い込む*、というものである。しかし式 (19.) は、さらにずっと一般的である。この式はそのうえ、*熱量は体積の変化が起こる温度によらない*ことを言う。ただし、使う気体の量を、温度が違っても始めの体積 <i>v</i><sub>0</sub> が等しくなるように、いつも定めておくとする。さらに、*始めの圧力が場合ごとに違うなら、熱量はその圧力に比例する*ことも言う。

訳注：誌面の「veschiedenen」は verschiedenen の誤植で、直さずに置いた。(19.) では誌面は「log」に点を付けていない（(18.) では「log.」）。誌面のとおり置いた。この段のあとに、誌面は「(Schluss im nächsten Heft.)」（次の号に続く）と一行置き、3 号の分が終わる。続きは 4 号の p.500 から。

### ¶57　p.500

> II. Ueber die bewegende Kraft der Wärme und die Gesetze, welche sich daraus für die Wärmelehre selbst ableiten lassen; von R. *Clausius* [注13]. (Schluss von S. 397.)

II. 熱の動力について、またそこから熱学そのものについて導かれる法則について。R. クラウジウス [注13]。（397 頁からの続き、完結）

訳注：誌面では題の全体が斜体、著者名が隔字体。題の頭の「II.」はこの号の論文の通し番号で、論文の中の節の番号ではない。

### ¶58　p.500

> II. Folgerungen aus dem Carnot'schen Grundsatze in Verbindung mit dem Vorigen.

II. カルノーの原則から、前の節と結びつけて導かれる帰結

訳注：「前の節」は 3 号に載った第 I 節（熱と仕事の等価から導いた帰結）を指す。

### ¶59　p.500

> *Carnot* hat, wie schon oben erwähnt wurde, angenommen, *dass der Erzeugung von Arbeit als Aequivalent ein blosser Uebergang von Wärme aus einem warmen in einen kalten Körper entspreche, ohne dass die Quantität der Wärme dabei verringert werde.*

すでに上で述べたように、カルノーは次のように仮定した。*仕事が生み出されることには、その当量として、熱の、温かい物体から冷たい物体への移行だけが対応し、そのさい熱の量は減らない*、と。

### ¶60　p.500–501

> Der letzte Theil dieser Annahme, nämlich dass die Quantität der Wärme unverringert bleibe, widerspricht unserem früheren Grundsatze, und muss daher, wenn wir diesen festhalten wollen, verworfen werden. Der erste Theil dagegen kann seinem Hauptinhalte nach fortbestehen. Denn wenn wir auch eines eigenthümlichen Aequivalentes [p.501] für die erzeugte Arbeit nicht mehr bedürfen, nachdem wir als solches einen wirklichen *Verbrauch* von Wärme angenommen haben, so bleibt es doch möglich, dass jener Uebergang *gleichzeitig* mit dem Verbrauche stattfinde, und ebenfalls zur Arbeit in einer bestimmten Relation stehe. Es kommt also darauf an, zu untersuchen, ob diese Annahme ausser der Möglichkeit auch eine hinlängliche Wahrscheinlichkeit für sich habe.

この仮定の後ろの部分、すなわち熱の量が減らないままだという部分は、われわれの前の原則と矛盾する。だから、前の原則を保とうとするなら、捨てなければならない。これに対して前の部分は、その主な内容のとおりに残ることができる。なぜなら、われわれは生み出された仕事の当量として、熱の現実の*消費*をすでに仮定したので、 [p.501] それとは別の特有の当量はもう要らない。それでも、あの移行が消費と*同時に*起こり、それもまた仕事と一定の関係に立つ、ということはありうるからである。そこで、この仮定が、ありうるというだけでなく、十分な確からしさも持つかどうかを調べることが問題になる。

訳注：「前の原則」は第 I 節で立てた、熱と仕事の等価の原則（今の第一法則に当たる）。

### ¶61　p.501

> Ein Uebergang von Wärme aus einem warmen in einen kalten Körper findet allerdings in solchen Fällen statt, wo Arbeit durch Wärme erzeugt, und zugleich die Bedingung erfüllt wird, dass der wirksame Stoff sich am Schlusse wieder in demselben Zustande befinde, wie zu Anfang. Bei den oben beschriebenen und in den Fig. 1 und 3. dargestellten Processen z. B. haben wir gesehen, dass das Gas und das verdampfende Wasser bei der Volumenvergrösserung Wärme vom Körper <i>A</i> empfing, und bei der Volumenverringerung Wärme an den Körper <i>B</i> abgab, so dass also eine gewisse Wärmemenge von <i>A</i> nach <i>B</i> übertragen wurde, und diese war sogar viel grösser als die, welche wir als verbraucht annahmen, so dass bei den unendlich kleinen Veränderungen, welche in Fig. 2 und 4. dargestellt sind, die letztere ein unendlich Kleines der zweiten Ordnung bildete, während die erstere ein solches von der ersten Ordnung war. Um jedoch diese übergeführte Wärme mit der Arbeit in Beziehung bringen zu können, ist noch eine Beschränkung nöthig. Da nämlich auch ein Wärmeübergang ohne mechanischen Effect stattfinden kann, wenn ein warmer und ein kalter Körper sich unmittelbar berühren, und die Wärme durch Leitung hinüberströmt, so muss, wenn man für den Uebergang einer bestimmten Wärmemenge zwischen zwei Körpern von bestimmten Temperaturen <i>t</i> und <i>τ</i> das Maximum der Arbeit erlangen will, der Vorgang so geleitet werden, wie es in den obigen Fällen geschehen ist, dass nie zwei Körper von verschiedener Temperatur in Berührung kommen.

たしかに、熱によって仕事が生み出され、しかも働く物質が終わりに初めと同じ状態に戻るという条件が満たされる場合には、熱の、温かい物体から冷たい物体への移行が起こる。たとえば、上で述べ、図 1 と図 3 に示した過程では、気体と、蒸発する水が、体積が増えるときに物体 <i>A</i> から熱を受け取り、体積が減るときに物体 <i>B</i> へ熱を渡すのを、われわれは見た。つまり、ある熱量が <i>A</i> から <i>B</i> へ移された。しかもこの熱量は、われわれが消費されたと仮定した熱量よりずっと大きかった。そのため、図 2 と図 4 に示した無限に小さい変化では、後者（消費された熱）は二次の無限小になり、前者（運ばれた熱）は一次の無限小であった。けれども、この運ばれた熱を仕事と関係づけられるようにするには、もう一つ制限が要る。というのは、温かい物体と冷たい物体がじかに触れて、熱が伝導によって流れ移るときのように、力学的な効果を伴わない熱の移行もありうるからである。だから、決まった温度 <i>t</i> と <i>τ</i> を持つ二つの物体のあいだで、決まった熱量の移行について仕事の最大値を得ようとするなら、上の場合にそうしたように、温度の違う二つの物体がけっして触れ合わないように過程を導かなければならない。

訳注：図 1〜4 は 3 号の第 I 節に載った図（この範囲には図は無い）。図 1・2 は気体の、図 3・4 は蒸発する水の過程。<i>A</i> は温度 <i>t</i> の温かい物体、<i>B</i> は温度 <i>τ</i> の冷たい物体。

### ¶62　p.501–502

> Dieses *Maximum* der Arbeit nun ist es, welches mit [p.502] dem Wärmeübergange verglichen werden muss, und dabei findet sich, dass man in der That Grund hat, mit *Carnot* anzunehmen, dass es nur von Menge der übergeführten Wärme und von den Temperaturen <i>t</i> und <i>τ</i> der beiden Körper <i>A</i> und <i>B</i>, nicht aber von der Natur des vermittelnden Stoffes abhänge. Dieses Maximum hat nämlich die Eigenschaft, dass man durch *Verbrauch* desselben auch wieder eine ebenso grosse Wärmemenge von dem kalten Körper <i>B</i> nach dem warmen <i>A</i> hinüberschaffen kann, als bei seiner *Hervorbringung* von <i>A</i> nach <i>B</i> gehen musste. Man wird sich davon leicht überzeugen, wenn man sich die ganzen oben beschriebenen Vorgänge in umgekehrter Weise ausgeführt denkt, so dass also z. B. im ersten Falle das Gas sich zuerst allein ausdehnt, bis seine Temperatur von <i>t</i> bis <i>τ</i> gesunken ist, dann die Ausdehnung in Verbindung mit <i>B</i> fortsetzt, darauf allein zusammengedrückt wird, bis seine Temperatur wieder <i>t</i> ist, und endlich die letzte Zusammendrückung in Verbindung mit <i>A</i> erleidet. Dann wird bei der Zusammendrückung mehr Arbeit verbrancht, als bei der Ausdehnung erzeugt ist, so dass im Ganzen ein Verlust von Arbeit stattfidet, der ebenso gross ist, als der bei dem früheren Verfahren entstandene Gewinn. Ferner wird dem Körper <i>B</i> ebenso viel Wärme entzogen, als ihm früher mitgetheilt wurde, und dem Körper <i>A</i> ebenso viel mitgetheilt, als ihm früher entzogen wurde, woraus folgt, dass sowohl dieselbe Wärmemenge, welche früher verbraucht wurde, jetzt erzeugt wird, als auch die, welche früher von <i>A</i> nach <i>B</i> geführt wurde jetzt von <i>B</i> nach <i>A</i> geht.

熱の移行と比べなければならないのは、まさにこの仕事の*最大値*である。 [p.502] そして比べてみると、カルノーとともに次のように仮定する根拠が実際にあることがわかる。すなわち、この最大値は、運ばれた熱の量と、二つの物体 <i>A</i> と <i>B</i> の温度 <i>t</i> と <i>τ</i> だけによって決まり、なかだちをする物質の性質にはよらない、と。というのは、この最大値には次の性質があるからである。この最大値を*消費*することによって、それを*生み出す*ときに <i>A</i> から <i>B</i> へ移らなければならなかったのと同じ大きさの熱量を、こんどは冷たい物体 <i>B</i> から温かい物体 <i>A</i> へ運び戻すことができる。このことは、上で述べた過程の全体を逆の向きに行うと考えてみれば、たやすく納得できる。たとえば最初の場合なら、気体はまず単独で膨張し、温度が <i>t</i> から <i>τ</i> まで下がるまで続ける。次に <i>B</i> とつながったまま膨張を続ける。そのあと単独で圧縮され、温度が再び <i>t</i> になるまで続ける。最後に、<i>A</i> とつながったまま、終わりの圧縮を受ける。すると、圧縮のときには、膨張のときに生み出されるより多くの仕事が消費される。だから全体としては仕事の損失が起こり、その大きさは、前のやり方で生じた得と同じである。さらに、物体 <i>B</i> からは、前に与えられたのと同じだけの熱が奪われ、物体 <i>A</i> には、前に奪われたのと同じだけの熱が与えられる。ここから次のことが従う。前に消費されたのと同じ熱量が、こんどは生み出される。また、前に <i>A</i> から <i>B</i> へ運ばれた熱量が、こんどは <i>B</i> から <i>A</i> へ移る。

訳注：誌面の「nur von Menge」は「nur von der Menge」の der が落ちたものとみられる（誤植の疑い。そのまま置いた）。「verbrancht」は verbraucht の、「stattfidet」は stattfindet の誤植。訳は正しい語で訳した。

### ¶63　p.502–503

> Denkt man sich nun, dass es zwei Stoffe gebe, von denen der eine bei einem bestimmten Wärmeübergange mehr Arbeit als der andere erzeugen könne, oder, was dasselbe ist, bei Hervorbringung einer bestimmten Arbeit weniger Wärme von <i>A</i> nach <i>B</i> überzuführen brauche, als der andere, so könnte man diese beiden Stoffe abwechselnd anwenden, indem man mit dem ersteren durch den obigen Process Arbeit erzeugte, und dann mit dem letzteren unter [p.503] Verwendung derselben Arbeit den umgekehrten Process vornähme. Dann würden am Schlusse beide Körper wieder in ihrem ursprünglichen Zustande seyn; ferner würden die erzeugte und die verbrauchte Arbeit sich gerade aufgehoben haben, und somit könnte auch nach dem früheren Grundsatze die Quantität der Wärme sich weder vermehrt noch vermindert haben. Nur in Bezug auf die *Vertheilung* der Wärme wäre ein Unterschied eingetreten, indem mehr Wärme von <i>B</i> nach <i>A</i> als von <i>A</i> nach <i>B</i> gebracht wäre, und somit im Ganzen ein Uebergang von <i>B</i> nach <i>A</i> stattgefunden hätte. Durch Wiederholung dieser beiden abwechselnden Processe könnte man also, ohne irgend einen Kraftaufwand oder eine andere Veränderung, beliebig viel Wärme aus einem *kalten* Körper in einen *warmen* schaffen, und das widerspricht dem sonstigen Verhalten der Wärme, indem sie überall das Bestreben zeigt, vorkommende Temperaturdifferenzen auszugleichen und also aus den *wärmeren* Körpern in die *kälteren* überzugehen.

さて、二つの物質があると考えてみよう。その一方は、決まった熱の移行のもとで、もう一方より多くの仕事を生み出せる。あるいは同じことだが、決まった仕事を生み出すのに、もう一方より少ない熱を <i>A</i> から <i>B</i> へ運べばすむ。そうであれば、この二つの物質をかわるがわる使うことができるだろう。前者を使って上の過程で仕事を生み出し、次に後者を使い、 [p.503] その同じ仕事を使って逆の過程を行うのである。すると、終わりには二つの物体はどちらも元の状態に戻っているだろう。また、生み出された仕事と消費された仕事はちょうど打ち消し合っているだろう。したがって前の原則によっても、熱の量は増えても減ってもいないはずである。ただ熱の*配分*についてだけ違いが生じているだろう。<i>A</i> から <i>B</i> へよりも多くの熱が <i>B</i> から <i>A</i> へ運ばれ、全体として <i>B</i> から <i>A</i> への移行が起こったことになるからである。だから、この二つの過程をかわるがわる繰り返せば、力をまったく費やさず、ほかに何の変化も起こさずに、いくらでも多くの熱を*冷たい*物体から*温かい*物体へ移せることになる。しかしこれは、熱がふだん示すふるまいと矛盾する。熱はどこでも、生じた温度の差をならそうとし、したがって*より温かい*物体から*より冷たい*物体へ移ろうとする傾きを示すからである。

訳注：ここで述べられた「熱はひとりでに冷たい物体から温かい物体へは移らない」という原則が、今の熱力学の第二法則のクラウジウスの言い方の芽に当たる。Kraftaufwand は「力を費やすこと」と訳した（今の言い方なら仕事の消費）。

### ¶64　p.503

> Demnach scheint es *theoretisch* gerechtfertigt zu seyn, den ersten und eigentlich wesentlichen Theil der Carnot'schen Annahme beizubehalten, und als zweiten Grundsatz neben dem früher aufgestellten anzuwenden; und die Richtigkeit dieses Verfahrens wird, wie wir gleich sehen werden, auch durch den *Erfolg* schon mehrfach bestätigt.

それゆえ、カルノーの仮定の前の部分、すなわち本来の要となる部分を残し、これを前に立てた原則と並ぶ第二の原則として使うことは、*理論の上で*正当であるように思われる。そして、このやり方が正しいことは、すぐに見るように、その*結果*によってもすでにいくつもの点で確かめられている。

### ¶65　p.503

> Nach dieser Annahme können wir das Maximum der Arbeit, welche bei dem Uebergange einer Wärmeeinheit aus dem Körper <i>A</i> mit der Temperatur <i>t</i> in den Körper <i>B</i> mit der Temperatur <i>τ</i> hervorgebracht werden kann, als Function von <i>t</i> und <i>τ</i> bezeichnen. Diese Funktion muss natürlich ihrem Werthe nach um so kleiner seyn, je kleiner die Differenz <i>t</i> − <i>τ</i> ist, und muss, wenn diese unendlich klein (= <i>dt</i>) wird, in das Product aus <i>dt</i> und einer Function von <i>t</i> allein übergehen. Für den letzteren Fall, auf den es uns vorläufig ankommt, kann man also die Arbeit unter der Form:
>
> (1/<i>C</i>) · <i>dt</i>
>
> darstellen, worin <i>C</i> eine blosse Function von <i>t</i> bedeutet.

この仮定によれば、温度 <i>t</i> の物体 <i>A</i> から温度 <i>τ</i> の物体 <i>B</i> へ熱の単位一つが移るときに生み出しうる仕事の最大値を、<i>t</i> と <i>τ</i> の関数として表すことができる。この関数の値は、もちろん差 <i>t</i> − <i>τ</i> が小さいほど小さくなければならない。そして、この差が無限に小さく（= <i>dt</i>）なるときには、<i>dt</i> と、<i>t</i> だけの関数との積にならなければならない。さしあたりわれわれに大事なのはこの後者の場合であり、そのとき仕事は次の形で表せる。

(1/<i>C</i>) · <i>dt</i>

ここで <i>C</i> は <i>t</i> だけの関数を表す。

訳注：誌面では同じ段の中に Function と Funktion の両方の綴りがある。行末の「unend」にハイフンが無い（誤植。unendlich とつないだ）。誌面の掛け算の点（.）は · で書いた。この 1/<i>C</i> は、今の言い方なら熱の単位あたりのカルノーの関数に当たる。

### ¶66　p.504

> Um dieses Resultat auf die permanenten Gase anzuwenden, kehren wir wieder zu dem in Fig. 2. dargestellten Vorgange zurück. Dort ging bei der ersten Ausdehnung die Wärmemenge:
>
> (<i>dQ</i>/<i>dv</i>) <i>dv</i>
>
> aus <i>A</i> in das Gas über, und bei der ersten Zusammendrückung wurde davon der Theil:
>
> [(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>
>
> oder
>
> (<i>dQ</i>/<i>dv</i>) <i>dv</i> − [(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i>
>
> an den Körper <i>B</i> abgegeben. Die letztere Grösse ist also die übergeführte Wärmemenge; da wir aber das Glied zweiter Ordnung gegen das von der ersten Ordnung vernachlässigen können, so behalten wir einfach:
>
> (<i>dQ</i>/<i>dv</i>) <i>dv</i>.
>
> Die zugleich hervorgebrachte Arbeit war:
>
> (<i>R dv</i> · <i>dt</i>)/<i>v</i>,
>
> und wir können somit die Gleichung bilden:
>
> (<i>R</i> (<i>dv</i> · <i>dt</i>)/<i>v</i>) / ((<i>dQ</i>/<i>dv</i>) <i>dv</i>) = (1/<i>C</i>) · <i>dt</i>
>
> oder:
>
> (IV.) (<i>dQ</i>/<i>dv</i>) = (<i>R</i> · <i>C</i>)/<i>v</i>.

この結果を永久気体に当てはめるため、図 2 に示した過程にもう一度戻ろう。そこでは、最初の膨張のときに、次の熱量

(<i>dQ</i>/<i>dv</i>) <i>dv</i>

が <i>A</i> から気体へ移った。そして最初の圧縮のときに、そのうち次の部分

[(<i>dQ</i>/<i>dv</i>) + (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dv</i>) <i>δv</i> − (<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) <i>dt</i>] <i>d′v</i>

すなわち

(<i>dQ</i>/<i>dv</i>) <i>dv</i> − [(<i>d</i>/<i>dt</i>)(<i>dQ</i>/<i>dv</i>) − (<i>d</i>/<i>dv</i>)(<i>dQ</i>/<i>dt</i>)] <i>dv dt</i>

が物体 <i>B</i> へ渡された。だから、この後の量が運ばれた熱量である。しかし、二次の項は一次の項に比べて無視できるので、単に

(<i>dQ</i>/<i>dv</i>) <i>dv</i>

が残る。同時に生み出された仕事は

(<i>R dv</i> · <i>dt</i>)/<i>v</i>

であった。そこで次の等式を立てることができる。

(<i>R</i> (<i>dv</i> · <i>dt</i>)/<i>v</i>) / ((<i>dQ</i>/<i>dv</i>) <i>dv</i>) = (1/<i>C</i>) · <i>dt</i>

すなわち

(IV.) (<i>dQ</i>/<i>dv</i>) = (<i>R</i> · <i>C</i>)/<i>v</i>

訳注：<i>Q</i> は気体が受け取った熱量、<i>v</i> は体積、<i>R</i> は第 I 節の式 (I.)（<i>pv</i> = <i>R</i>(<i>a</i> + <i>t</i>)）の定数。最初の角括弧の式の終わりは、誌面のとおり <i>d′v</i>（第 I 節で <i>hg</i> を <i>d′v</i> と置いた。p.382 の同じ式と同じ）。次の行の「すなわち」の式では、<i>d′v</i> を <i>dv</i> と <i>dt</i> で置き換えている。

### ¶67　p.504–505

> Machen wir zweitens die entsprechende Anwendung auf den in Fig. 4. dargestellten Vorgang bei der Verdampfung, so war dort die von A nach <i>B</i> übergeführte Wärmemenge:
>
> (<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>
>
> oder:
>
> <i>r dm</i> − (<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i>,
>
> [p.505] wofür wir wieder mit Vernachlässigung des Gliedes von der zweiten Ordnung einfach
>
> <i>r dm</i>
>
> setzen können. Die dabei hervorgebrachte Arbeit war:
>
> (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>,
>
> und wir erhalten also die Gleichung:
>
> ((<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> · <i>dm</i> · <i>dt</i>)/(<i>r dm</i>) = (1/<i>C</i>) · <i>dt</i>
>
> oder:
>
> (V.) <i>r</i> = <i>C</i> · (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>.

第二に、図 4 に示した蒸発の過程に同じように当てはめてみよう。そこでは、<i>A</i> から <i>B</i> へ運ばれた熱量は

(<i>r</i> − <i>dr</i>/<i>dt</i> <i>dt</i>) <i>d′m</i>

すなわち

<i>r dm</i> − (<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i>) <i>dm dt</i>

であった。 [p.505] ここでも二次の項を無視して、単に

<i>r dm</i>

と置くことができる。そのとき生み出された仕事は

(<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> <i>dm dt</i>

であった。したがって次の等式が得られる。

((<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i> · <i>dm</i> · <i>dt</i>)/(<i>r dm</i>) = (1/<i>C</i>) · <i>dt</i>

すなわち

(V.) <i>r</i> = <i>C</i> · (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>

訳注：誌面では「von A nach <i>B</i>」の A だけが斜体でなく立体（組みの不揃い。訳では <i>A</i> とした）。最初の式の <i>d′m</i> は誌面のとおりで、p.388 の式 (6.) と同じく、低い温度での圧縮で凝結する蒸気の質量。記号は第 I 節（p.387–388）で定めたもの：<i>r</i> は重さの単位一つの液体が温度 <i>t</i> で蒸発するときに潜熱となる熱量、<i>dm</i> は膨張のあいだに蒸発する質量（<i>m</i> は容器の中の蒸気の質量）、<i>c</i> は液体の比熱、<i>hdt</i> は密度が最大の蒸気を、その状態を保ったまま温度 <i>t</i> から <i>t</i> + <i>dt</i> へ移すのに与える熱量、<i>s</i> と <i>σ</i> は温度 <i>t</i> での、密度が最大の蒸気と液体の、重さの単位あたりの体積、<i>p</i> は温度 <i>t</i> で張力が最大のときの蒸気の圧力。(V.) は今のクラペイロン＝クラウジウスの式に当たる。

### ¶68　p.505

> Dieses sind die beiden analytischen Ausdrücke des Carnot'schen Grundsatzes, wie sie von *Clapeyron* in seiner Arbeit, wenn auch in etwas anderer Form, aufgestellt sind. In Bezug auf die Dämpfe bleibt dieser bei der Gleichung (V.) und einigen unmittelbaren Anwendungen derselben stehen. Bei den Gasen dagegen macht er die Gleichung (IV.) zur Grundlage einer weitern Entwickelung, und nur durch diese Entwickelung ist die theilweise Abweichung seiner Resultate von den unsrigen entstanden.

これが、カルノーの原則の二つの解析的な表し方である。クラペイロンもその論文で、いくらか違う形ではあるが、これらを立てている。蒸気については、クラペイロンは等式 (V.) と、そのいくつかの直接の応用にとどまっている。これに対して気体については、彼は等式 (IV.) をさらに進んだ展開の土台にしている。そして、彼の結果がわれわれの結果と部分的に食い違うのは、ひとえにこの展開のためである。

### ¶69　p.505

> Wir wollen nun jene beiden Gleichungen mit den Ergebnissen des ersten Grundsatzes in Verbindung bringen, und zwar zunächst die Gleichung (IV.) mit den dort für permanente Gase abgeleiteten Folgerungen.

では、この二つの等式を、第一の原則から得た結果と結びつけてみよう。まず等式 (IV.) を、そこで永久気体について導いた帰結と結びつける。

### ¶70　p.505

> Beschränken wir uns dabei auf diejenige Folgerung, bei welcher nur der Grundsatz selbst vorausgesetzt ist, also auf die Gleichung (II<i>a</i>.), so können wir die Grösse <i>U</i>, welche darin als willkürliche Function von <i>v</i> und <i>t</i> steht, durch (IV.) näher bestimmen, und die Gleichung geht dann über in:
>
> (II<i>c</i>.) <i>dQ</i> = [<i>B</i> + <i>R</i>(<i>dC</i>/<i>dt</i> − <i>A</i>) log <i>v</i>] <i>dt</i> + ((<i>R</i> · <i>C</i>)/<i>v</i>) <i>dv</i>,
>
> worin <i>B</i> nur noch eine willkürliche Function von <i>t</i> ist.

そのさい、原則そのものだけを前提にしている帰結、すなわち等式 (II<i>a</i>.) に限るとしよう。すると、そこで <i>v</i> と <i>t</i> の任意の関数として置かれている量 <i>U</i> を、(IV.) によってもっと詳しく決めることができる。そのとき等式は次のようになる。

(II<i>c</i>.) <i>dQ</i> = [<i>B</i> + <i>R</i>(<i>dC</i>/<i>dt</i> − <i>A</i>) log <i>v</i>] <i>dt</i> + ((<i>R</i> · <i>C</i>)/<i>v</i>) <i>dv</i>

ここで <i>B</i> は、もはや <i>t</i> だけの任意の関数である。

訳注：(II<i>a</i>.) と <i>U</i> は第 I 節のもの。<i>A</i> は第 I 節で入れた、仕事の単位一つに当たる熱の当量。log は自然対数（第 I 節の (17.) から (18.) で d log <i>v</i> = <i>dv</i>/<i>v</i> として積分しており、(II<i>c</i>.) も log <i>v</i> を <i>v</i> で微分して 1/<i>v</i> になるとして (II.) を満たす）。

### ¶71　p.505–506

> Erkennen wir dagegen auch die Nebenannahme als richtig an, so wird dadurch die Gleichung (IV.) zur näheren [p.506] Bestimmung von (II<i>a</i>.) unnöthig, indem derselbe Zweck schon durch die Gleichung (9.), welche als unmittelbare Folge aus jener Annahme, in Verbindung mit dem ersten Grundsatze, hervorging, viel vollständiger erreicht ist. Wir gewinnen aber dadurch eine Gelegenheit, die Resultate beider Grundsätze einer gegenseitigen Probe zu unterwerfen. Die Gleichung (9.) lautete:
>
> <i>dQ</i>/<i>dv</i> = (<i>R</i> · <i>A</i>(<i>a</i> + <i>t</i>))/<i>v</i>,
>
> und indem wir diese mit (IV.) zusammenhalten, sehen wir dass beide dasselbe aussagen, nur die eine in bestimmterer Weise als die andere, indem für die in (IV.) nur allgemein angedeutete Temperaturfunction <i>C</i> in (9.) schon der specielle Ausdruck <i>A</i>(<i>a</i> + <i>t</i>) gegeben ist.

これに対して、副次の仮定も正しいと認めるなら、(II<i>a</i>.) を [p.506] もっと詳しく決めるのに等式 (IV.) は要らなくなる。同じ目的は、その仮定から第一の原則と結びつけてじかに出てきた等式 (9.) によって、すでにずっと完全に果たされているからである。しかし、そのおかげで、二つの原則から出た結果を互いに試し合う機会が得られる。等式 (9.) は次のとおりであった。

<i>dQ</i>/<i>dv</i> = (<i>R</i> · <i>A</i>(<i>a</i> + <i>t</i>))/<i>v</i>

これを (IV.) と並べると、二つは同じことを言っており、ただ一方が他方より決まった形で言っているだけだとわかる。(IV.) では温度の関数 <i>C</i> が一般的にほのめかされているだけだが、(9.) ではすでに特定の表し方 <i>A</i>(<i>a</i> + <i>t</i>) が与えられているからである。

訳注：「副次の仮定」（Nebenannahme）は第 I 節（p.392）で置いた仮定。気体では粒子どうしの引き合いが消えているので、永久気体が一定の温度で膨張するとき、外部の仕事に消費されるだけの熱しか吸い込まない、というもの。そこから (9.) が出た。p.500 の脚注 1 の正誤表により、(9.) の左辺は括弧付きの (<i>dQ</i>/<i>dv</i>) が正しい（p.506 の 8 行目。誌面のまま括弧なしで起こした）。<i>a</i> は気体の膨張係数の逆数で、あとで <i>a</i> = 273 と置かれる。<i>C</i> = <i>A</i>(<i>a</i> + <i>t</i>) は、今の言い方なら、カルノーの関数が絶対温度に比例するということに当たる。

### ¶72　p.506–507

> Zu dieser auffallenden Uebereinstimmung kommt noch, dass auch die Gleichung (V.), in welcher eben jene Function <i>C</i> vorkommt, ganz dafür spricht, dass <i>A</i>(<i>a</i> + <i>t</i>) wirklich der richtige Ausdruck für dieselbe sey. Diese Gleichung ist nämlich von *Clapeyron* und *Thomson* benutzt, um für einzelne Temperaturen die Werthe von <i>C</i> zu berechnen. *Clapeyron* hat als solche Temperaturen die Kochpunkte von Aether, Alkohol, Wasser und Terpenthinöl gewählt, und ist, indem er die für diese Flüssigkeiten bei ihren Kochpunkten durch Versuche bestimmten Werthe von <i>dp</i>/<i>dt</i>, <i>s</i> und <i>r</i> in die Gleichung (V.) eingesetzt hat, für <i>C</i> zu den in der zweiten Columne der folgenden Tabelle enthaltenen Zahlen gelangt. *Thomson* dagegen hat nur den *Wasserdampf*, aber bei verschiedenen Temperaturen betrachtet, und daraus für alle einzelnen Grade zwischen 0° und 230° Cent. den Werth von <i>C</i> berechnet. Dazu haben ihm in Bezug auf die Grössen <i>dp</i>/<i>dt</i> und <i>r</i> die Regnault'schen Beobachtungsreihen eine zuverlässige Grundlage geliefert; aber die Grösse <i>s</i> ist für andere Temperaturen noch weniger bekannt, als für den Kochpunkt, und in Bezug auf diese sah er sich daher genöthigt, eine [p.507] Annahme zu machen, die er selbst nur als annähernd richtig und als eine vorläufige Aushülfe bis zur Ermittelung genauerer Data betrachtete, dass nämlich der Wasserdampf im Maximum seiner Dichte dem M. und G. Gesetze folge. Die Zahlen, welche sich aus seiner Rechnung für dieselben Temperaturen, welche *Clapeyron* benutzt hat, ergeben, sind nach vorheriger Reduction auf französische Maasse in der dritten Columne angeführt.
>
> I.
>
> | 1. <i>t</i> in Cent.-Gr. | 2. <i>C</i> nach *Clapeyron*. | 3. <i>C</i> nach *Thomson*. |
> |---|---|---|
> | 35°,5 | 0,733 | 0,728 |
> | 78°,8 | 0,828 | 0,814 |
> | 100° | 0,897 | 0,855 |
> | 156°,8 | 0,930 | 0,952 |

この目を引く一致に、さらに次のことが加わる。ちょうどこの関数 <i>C</i> が現れる等式 (V.) もまた、<i>A</i>(<i>a</i> + <i>t</i>) が本当に <i>C</i> の正しい表し方であることを、すっかり裏づけている。というのは、クラペイロンとトムソンが、いくつかの温度について <i>C</i> の値を計算するのにこの等式を使っているからである。クラペイロンは、そうした温度として、エーテル・アルコール・水・テレビン油の沸点を選んだ。そして、これらの液体について沸点で実験によって決めた <i>dp</i>/<i>dt</i>·<i>s</i>·<i>r</i> の値を等式 (V.) に入れて、<i>C</i> について次の表の第 2 列の数を得た。これに対してトムソンは、*水蒸気*だけを、しかしさまざまな温度で考え、そこから摂氏 0° から 230° までの一度ごとに <i>C</i> の値を計算した。そのさい、量 <i>dp</i>/<i>dt</i> と <i>r</i> については、ルニョーの一連の観測が確かな土台を与えた。しかし量 <i>s</i> は、沸点以外の温度では沸点のときよりさらに知られていない。そのためトムソンは、<i>s</i> については一つの仮定を置かざるをえなかった。 [p.507] 彼自身もそれを、おおよそ正しいだけのもの、もっと正確なデータが得られるまでの仮の間に合わせとみなしていた。すなわち、密度が最大の状態にある水蒸気は、マリオットとゲイ＝リュサックの法則に従う、という仮定である。トムソンの計算から、クラペイロンが使ったのと同じ温度について出てくる数を、あらかじめフランスの単位に直して、第 3 列に挙げる。

I.

| 1. <i>t</i>（摂氏の度） | 2. クラペイロンによる <i>C</i> | 3. トムソンによる <i>C</i> |
|---|---|---|
| 35°,5 | 0,733 | 0,728 |
| 78°,8 | 0,828 | 0,814 |
| 100° | 0,897 | 0,855 |
| 156°,8 | 0,930 | 0,952 |

訳注：トムソンの計算は、注5 の論文のものと見られる（推測）。表の数は誌面のとおり小数点をコンマで書いた（35°,5 は 35.5°）。表の「I.」は表の番号。

### ¶73　p.507

> Man sieht, dass die in beiden Fällen gefundenen Werthe von <i>C</i>, ebenso wie die von <i>A</i>(<i>a</i> + <i>t</i>), mit der Temperatur langsam zunehmen. Sie verhalten sich unter einander, wie die Zahlen folgender Reihen:
>
> 1; 1,13; 1,22; 127
>
> 1; 1,12; 1,17; 1,31
>
> und wenn man die Verhältnisse der denselben Temperaturen entsprechenden Werthe von <i>A</i>(<i>a</i> + <i>t</i>) bestimmt, indem man <i>a</i> = 273 setzt, so erhält man:
>
> 1; 1,14; 1,21; 1,39.
>
> Diese Reihe *relativer* Werthe weicht von den beiden vorigen nur so weit ab, wie es die Unsicherheit der Data, welche jenen zu Grunde liegen, gestattet, und dasselbe wird sich später bei der Bestimmung der Constanten <i>A</i> auch in Bezug auf die *absoluten* Werthe zeigen.

見てのとおり、どちらの場合に求めた <i>C</i> の値も、<i>A</i>(<i>a</i> + <i>t</i>) の値と同じく、温度とともにゆっくり増える。それらどうしの比は、次の数の列のとおりである。

1; 1,13; 1,22; 127

1; 1,12; 1,17; 1,31

そして、<i>a</i> = 273 と置いて、同じ温度に当たる <i>A</i>(<i>a</i> + <i>t</i>) の値の比を求めると、次の列が得られる。

1; 1,14; 1,21; 1,39

この*相対的な*値の列が前の二つの列からずれているのは、あの二つの列のもとにあるデータの不確かさが許す範囲にとどまる。そして同じことは、のちに定数 <i>A</i> を決めるときに、*絶対的な*値についても示されるだろう。

訳注：最初の列の終わりの「127」は「1,27」の誤植（表の 0,930/0,733 ≈ 1,27）。誌面のまま起こした。

### ¶74　p.507

> Ein solche Uebereinstimmung zwischen Resultaten, welche aus ganz verschiedenen Grundsätzen abgeleitet sind, kann nicht zufällig seyn, und bildet vielmehr eine wichtige Bestätigung der beiden Grundsätze und der dem ersten hinzugefügten Nebenannahme.

まったく違う原則から導かれた結果のあいだに、このような一致があることは、偶然ではありえない。むしろそれは、二つの原則と、第一の原則に付け加えた副次の仮定とを、大きく裏づけるものである。

訳注：誌面の「Ein solche」は「Eine solche」の誤植。

### ¶75　p.508

> Kehren wir nun zur Anwendung der Gleichungen (IV.) und (V.) zurück, so hat die erstere für die *permanenten Gase* nur dazu gedient, die schon gewonnenen Schlüsse noch mehr zu befestigen. Für die *Dämpfe* aber, und für alle anderen Stoffe, auf welche man etwa den *Carnot*'schen Grundsatz noch anwenden will, gewährt sie darin einen wesentlichen Vortheil, dass man durch sie berechtigt ist, für die überall wiederkehrende Function <i>C</i> immer den bestimmten Ausdruck <i>A</i>(<i>a</i> + <i>t</i>) zu setzen.

では、等式 (IV.) と (V.) の応用に戻ろう。前者は、*永久気体*については、すでに得た結論をいっそう固めるのに役立っただけである。しかし*蒸気*について、またカルノーの原則をこれから当てはめようとするほかのすべての物質について、それは大事な利点を与える。すなわち、どこにでも繰り返し現れる関数 <i>C</i> の代わりに、いつでも決まった表し方 <i>A</i>(<i>a</i> + <i>t</i>) を置いてよいという保証を与えるのである。

訳注：「前者」は文法上は (IV.) だが、<i>C</i> = <i>A</i>(<i>a</i> + <i>t</i>) を与えたのは (IV.) と (9.) の比較である。誌面では「Carnot'-schen」の Carnot だけが隔字体。

### ¶76　p.508

> Die Gleichung (V.) geht dadurch über in:
>
> (V<i>a</i>.) <i>r</i> = <i>A</i>(<i>a</i> + <i>t</i>) · (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>,
>
> und wir erhalten also für den Dampf eine einfache Beziehung zwischen der Temperatur, bei der er sich bildet, dem Drucke, dem Volumen und der latenten Wärme, und können diese zu weiteren Schlüssen benutzen.

これによって等式 (V.) は次のようになる。

(V<i>a</i>.) <i>r</i> = <i>A</i>(<i>a</i> + <i>t</i>) · (<i>s</i> − <i>σ</i>) <i>dp</i>/<i>dt</i>

こうして蒸気について、それができるときの温度・圧力・体積・潜熱のあいだの簡単な関係が得られ、これをさらに先の結論に使うことができる。

### ¶77　p.508–509

> Wenn das M. und G. Gesetz auch für die Dämpfe im Maximum der Dichte richtig wäre, so müsste
>
> (20.) <i>ps</i> = <i>R</i>(<i>a</i> + <i>t</i>)
>
> seyn. Eliminirt man mittelst dieser Gleichung die Grösse <i>s</i> aus (V<i>a</i>.), und vernachlässigt die Grösse <i>σ</i>, welche, wenn die Temperatur nicht sehr hoch ist, gegen <i>s</i> verschwindet, so kommt:
>
> (1/<i>p</i>) <i>dp</i>/<i>dt</i> = <i>r</i>/(<i>AR</i>(<i>a</i> + <i>t</i>)<sup>2</sup>).
>
> Macht man hierin noch die zweite Annahme, dass <i>r</i> constant sey, so erhält man durch Integration, wenn <i>p</i><sub>1</sub> die Spannkraft des Dampfes bei 100° bedeutet:
>
> log (<i>p</i>/<i>p</i><sub>1</sub>) = <i>r</i>(<i>t</i> − 100)/(<i>A</i> · <i>R</i>(<i>a</i> + 100)(<i>a</i> + <i>t</i>)),
>
> oder wenn man <i>t</i> − 100 = <i>τ</i>, <i>a</i> + 100 = <i>α</i> und <i>r</i>/(<i>A</i> · <i>R</i>(<i>a</i> + 100)) = <i>β</i> setzt:
>
> (21.) log (<i>p</i>/<i>p</i><sub>1</sub>) = (<i>β</i> · <i>τ</i>)/(<i>α</i> + <i>τ</i>).
>
> Diese Gleichung kann natürlich nicht genau richtig seyn, weil die bei ihrer Entwickelung gemachten beiden Annahmen [p.509] es nicht sind; da aber die letzteren sich wenigstens einigermassen der Wahrheit nähern, so wird auch die Formel (<i>β</i> · <i>τ</i>)/(<i>α</i> + <i>τ</i>) den Gang der Grösse log (<i>p</i>/<i>p</i><sub>1</sub>) so zu sagen im Groben darstellen, und man kann sich daraus erklären, woher es kommt, dass sie, wenn man in ihr noch die Constanten <i>α</i> und <i>β</i>, anstatt ihnen die durch ihre Bedeutung bedingten Werthe zu geben, als willkürlich betrachtet, so geeignet ist, als empirische Formel zur Berechnung der Spannkräfte der Dämpfe zu dienen, ohne dass man sie doch für *vollkommen* theoretisch begründet zu halten braucht, wie es von einigen Seiten geschehen ist.

もしマリオットとゲイ＝リュサックの法則が、密度が最大の状態にある蒸気についても正しいとすれば、

(20.) <i>ps</i> = <i>R</i>(<i>a</i> + <i>t</i>)

でなければならない。この等式を使って (V<i>a</i>.) から量 <i>s</i> を消し、量 <i>σ</i> を無視すると（<i>σ</i> は、温度があまり高くなければ <i>s</i> に比べて消えるほど小さい）、次が得られる。

(1/<i>p</i>) <i>dp</i>/<i>dt</i> = <i>r</i>/(<i>AR</i>(<i>a</i> + <i>t</i>)<sup>2</sup>)

ここでさらに、<i>r</i> は一定であるという第二の仮定を置くと、<i>p</i><sub>1</sub> を 100° での蒸気の張力として、積分によって次が得られる。

log (<i>p</i>/<i>p</i><sub>1</sub>) = <i>r</i>(<i>t</i> − 100)/(<i>A</i> · <i>R</i>(<i>a</i> + 100)(<i>a</i> + <i>t</i>))

あるいは、<i>t</i> − 100 = <i>τ</i>、<i>a</i> + 100 = <i>α</i>、<i>r</i>/(<i>A</i> · <i>R</i>(<i>a</i> + 100)) = <i>β</i> と置けば、

(21.) log (<i>p</i>/<i>p</i><sub>1</sub>) = (<i>β</i> · <i>τ</i>)/(<i>α</i> + <i>τ</i>)

この等式は、もちろん正確に正しいことはありえない。それを導くときに置いた二つの仮定が [p.509] 正確に正しくはないからである。しかし、二つの仮定は少なくともある程度は真実に近い。だから式 (<i>β</i> · <i>τ</i>)/(<i>α</i> + <i>τ</i>) も、量 log (<i>p</i>/<i>p</i><sub>1</sub>) の変わり方を、いわば大づかみに表すだろう。このことから、次のことがなぜ起こるのかが説明できる。この式の定数 <i>α</i> と <i>β</i> に、その意味から決まる値を与えずに任意のものとみなせば、この式は蒸気の張力を計算する経験式としてよく役立つ。それでも、ある方面でなされたように、この式を*完全に*理論で裏づけられたものとみなす必要はない。

訳注：ここでの <i>τ</i> は <i>t</i> − 100 の略記で、前の段までの冷たい物体 <i>B</i> の温度 <i>τ</i> とは別のもの。(20.) の番号は第 I 節からの通し番号。log はここでも自然対数（(1/<i>p</i>) <i>dp</i>/<i>dt</i> を積分して log <i>p</i> としている）。誌面の <i>p</i><sub>1</sub> は下付きの 1 とみて起こした（p.508 本文では <i>p</i> , のように離れて見える所がある）。「ある方面」で (21.) の形の式を理論から出たものとした人々が誰かは、本文に無い（推測では、この形の蒸気圧の式を立てた同時代の人々）。

### ¶78　p.509

> Die nächste Anwendung der Gleichung (V<i>a</i>.) möge nun darin bestehen, beim *Wasserdampfe*, für welchen wir die meisten Beobachtungsdata besitzen, zu untersuchen, *wie weit er im Maximum seiner Dichte vom M. und G. Gesetze abweicht*, was nicht unbedeutend seyn kann, da schon die Kohlensäure und schweflige Säure, bei Temperaturen und Spannungen, bei welchen sie noch weit von der Condensation entfernt sind, erhebliche Abweichungen zeigen.

式 (V<i>a</i>.) の次の応用として、観測の資料をいちばん多く持っている*水蒸気*について、*密度が最大の状態で、水蒸気がマリオットとゲイ＝リュサックの法則からどれほど外れるか*を調べよう。この外れは小さくないはずである。炭酸や亜硫酸でさえ、凝縮からまだ遠い温度と張力のもとで、すでにはっきりした外れを示すからである。

訳注：Kohlensäure（炭酸）は今の二酸化炭素、schweflige Säure（亜硫酸）は今の二酸化硫黄に当たる。訳の斜体は誌面の斜体の箇所を示す。

### ¶79　p.509–510

> Die Gleichung (V<i>a</i>.) lässt sich in folgende Form bringen:
>
> (22.)　<i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) = <i>ar</i>/[(<i>a</i> + <i>t</i>)<sup>2</sup> (1/<i>p</i>) (<i>dp</i>/<i>dt</i>)].
>
> Der hier auf der linken Seite befindliche Ausdruck müsste, wenn das M. und G. Gesetz gültig wäre, sehr nahe constant seyn, denn jenes Gesetz würde nach (20.) unmittelbar geben:
>
> <i>A</i> · <i>ps</i> <i>a</i>/(<i>a</i> + <i>t</i>) = <i>A</i> · <i>Ra</i>,
>
> und darin kann man für <i>s</i> mit grosser Annäherung <i>s</i> − <i>σ</i> setzen. Dieser Ausdruck ist somit hesonders geeignet, durch Vergleichung seiner wahren Werthe, wie sie sich aus der auf der rechten Seite von (22.) befindlichen Formel berechnen lassen, jede vorkommende Abweichung vom M. und G. Gesetze deutlich zu zeigen. Ich habe diese [p.510] Rechnung für eine Reihe von Temperaturen ausgeführt, indem ich für <i>r</i> und <i>p</i> die von *Regnault* gegebenen Zahlen angewandt habe [注14].

式 (V<i>a</i>.) は次の形に書き直せる。

(22.)　<i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) = <i>ar</i>/[(<i>a</i> + <i>t</i>)<sup>2</sup> (1/<i>p</i>) (<i>dp</i>/<i>dt</i>)].

左辺の式は、マリオットとゲイ＝リュサックの法則が成り立つなら、ほとんど一定のはずである。その法則からは、(20.) によって、ただちに

<i>A</i> · <i>ps</i> <i>a</i>/(<i>a</i> + <i>t</i>) = <i>A</i> · <i>Ra</i>,

が出てくるからであり、ここで <i>s</i> の代わりに、よい近似で <i>s</i> − <i>σ</i> を置くことができる。だからこの式は、(22.) の右辺の式から計算できる本当の値と比べることで、マリオットとゲイ＝リュサックの法則からの外れがあれば、それをはっきり示すのにとりわけ向いている。私はこの [p.510] 計算を一連の温度について行った。<i>r</i> と <i>p</i> には、ルニョーが与えた数値を使った [注14]。

訳注：記号は前の節からのもの。<i>s</i> は蒸気の重さの単位あたりの体積、<i>σ</i> は同じ重さの液体の体積、<i>r</i> は潜熱、<i>p</i> は圧力、<i>t</i> は温度（摂氏）、<i>a</i> は 273（1/<i>a</i> が気体の膨張係数）、<i>A</i> は仕事の熱当量（仕事の単位を熱の単位に直す係数）、<i>R</i> は気体ごとの定数。(22.) の分母の角括弧は、縦に組まれた分数を一行にするために訳者が足した。誌面の「hesonders」は besonders（とりわけ）の誤植と思われるので、誌面のまま置いた。

### ¶80　p.510

> Was zunächst die *latente Wärme* betrifft, so lässt sich nach *Regnault* [注15] die Wärmemenge <i>λ</i>, welche eine Gewichtseinheit Wasser bedarf, um sich von 0° bis <i>t</i>° zu erwärmen und dann bei dieser Temperatur zu verdampfen, mit ziemlicher Annäherung durch folgende Formel darstellen:
>
> (23.)　<i>λ</i> = 606,5 + 0,305 <i>t</i>.
>
> Nun ist aber zufolge der Bedeutung von <i>λ</i>:
>
> (23<i>a</i>.)　<i>λ</i> = <i>r</i> + ∫<sub>0</sub><sup><i>t</i></sup> <i>c dt</i>
>
> und für die hierin vorkommende Grösse <i>c</i>, welche die specifische Wärme des Wassers bezeichnet, hat *Regnault* in einer anderen Arbeit [注16] folgende Formel gegeben:
>
> (23<i>b</i>.)　<i>c</i> = 1 + 0,00004 · <i>t</i> + 0,0000009 · <i>t</i><sup>2</sup>.
>
> Mit Hülfe dieser beiden Gleichungen erhält man aus (23.) für die latente Wärme den Ausdruck:
>
> (24.)　<i>r</i> = 606,5 − 0,695 · <i>t</i> − 0,00002 · <i>t</i><sup>2</sup> − 0,0000003 · <i>t</i><sup>3</sup> [注17].

まず*潜熱*について。ルニョーによれば [注15]、重さの単位の水を 0° から <i>t</i>° まで温め、その温度で蒸発させるのに要る熱量 <i>λ</i> は、次の式でかなりよく表せる。

(23.)　<i>λ</i> = 606,5 + 0,305 <i>t</i>.

ところが <i>λ</i> の意味から、

(23<i>a</i>.)　<i>λ</i> = <i>r</i> + ∫<sub>0</sub><sup><i>t</i></sup> <i>c dt</i>

である。ここに出てくる量 <i>c</i> は水の比熱を表し、これについてはルニョーが別の仕事で [注16] 次の式を与えている。

(23<i>b</i>.)　<i>c</i> = 1 + 0,00004 · <i>t</i> + 0,0000009 · <i>t</i><sup>2</sup>.

この二つの式を使うと、(23.) から潜熱について次の式が得られる。

(24.)　<i>r</i> = 606,5 − 0,695 · <i>t</i> − 0,00002 · <i>t</i><sup>2</sup> − 0,0000003 · <i>t</i><sup>3</sup> [注17].

訳注：<i>λ</i> は今の言い方では、0° の水から <i>t</i>° の飽和蒸気をつくるのに要る全熱量に当たる。(24.) は (23.) から (23<i>b</i>.) の積分 <i>t</i> + 0,00002 <i>t</i><sup>2</sup> + 0,0000003 <i>t</i><sup>3</sup> を引いたもので、係数は計算が合う。数の小数点は誌面のとおりコンマで書く。

### ¶81　p.511

> Was ferner den Druck betrifft, so hat *Regnault* [注18], um aus seinen zahlreichen Beobachtungen die wahrscheinlichsten Werthe zu erhalten, eine graphische Darstellung zu Hülfe genommen, indem er Curven construirt hat, deren Abscissen die Temperatur, und deren Ordinaten den Druck <i>p</i> bedeuten, und welche in verschiedenen Absätzen von − 33° bis + 230° gehen. Von 100° bis 230° hat er auch noch eine Curve gezeichnet, deren Ordinaten nicht <i>p</i> selbst, sondern die Logarithmen von <i>p</i> bedeuten. Aus dieser Darstellung haben sich folgende Werthe ergeben, welche als das unmittelbarste Resultat seiner Beobachtungen zu betrachten sind, während die anderen in dem Memoire enthaltenen *vollständigeren* Tabellen aus Formeln berechnet sind, deren Wahl und Bestimmung erst auf diesen Werthen beruht.
>
> II.
>
> | <i>t</i> in Cent.-Gr. des Luftthermometers. | <i>p</i> in Millimeter. | <i>t</i> in Cent.-Gr. des Luftthermometers. | <i>p</i> in Millimeter, nach der Curve der Zahlen. | <i>p</i> in Millimeter, nach der Curve der Logarithmen [注19]. |
> |---|---|---|---|---|
> | − 20° | 0,91 | 110° | 1073,7 | 1073,3 |
> | − 20 | 2,08 | 120 | 1489,0 | 1490,7 |
> | 0 | 4,60 | 130 | 2029,0 | 2030,5 |
> | 10 | 9,16 | 140 | 2713,0 | 2711,5 |
> | 20 | 17,39 | 150 | 3572,0 | 3578,5 |
> | 30 | 31,55 | 160 | 4647,0 | 4651,6 |
> | 40 | 54,91 | 170 | 5960,0 | 5956,7 |
> | 50 | 91,98 | 180 | 7545,0 | 7537,0 |
> | 60 | 148,79 | 190 | 9428,0 | 9425,4 |
> | 70 | 233,09 | 200 | 11660,0 | 11679,0 |
> | 80 | 354,64 | 210 | 14308,0 | 14325,0 |
> | 90 | 525,45 | 220 | 17390,0 | 17390,0 |
> | 100 | 760,00 | 230 | 20915,0 | 20927,0 |

次に圧力について。ルニョーは [注18]、たくさんの観測からいちばん確からしい値を得るために、図を描く方法を使った。横座標に温度、縦座標に圧力 <i>p</i> をとった曲線を描き、それをいくつかの区切りに分けて −33° から +230° まで通した。100° から 230° までは、縦座標を <i>p</i> そのものでなく <i>p</i> の対数にとった曲線も描いた。この図から次の値が出た。これを彼の観測のいちばん直接の結果とみるべきである。これに対し、論文に載っている*もっと細かい*表は、式から計算したもので、その式の選び方と定め方が、そもそもこの値にもとづいている。

表 II.

| 空気温度計による <i>t</i>（摂氏の度） | <i>p</i>（ミリメートル） | 空気温度計による <i>t</i>（摂氏の度） | <i>p</i>（ミリメートル）、数の曲線から | <i>p</i>（ミリメートル）、対数の曲線から [注19] |
|---|---|---|---|---|
| − 20° | 0,91 | 110° | 1073,7 | 1073,3 |
| − 20 | 2,08 | 120 | 1489,0 | 1490,7 |
| 0 | 4,60 | 130 | 2029,0 | 2030,5 |
| 10 | 9,16 | 140 | 2713,0 | 2711,5 |
| 20 | 17,39 | 150 | 3572,0 | 3578,5 |
| 30 | 31,55 | 160 | 4647,0 | 4651,6 |
| 40 | 54,91 | 170 | 5960,0 | 5956,7 |
| 50 | 91,98 | 180 | 7545,0 | 7537,0 |
| 60 | 148,79 | 190 | 9428,0 | 9425,4 |
| 70 | 233,09 | 200 | 11660,0 | 11679,0 |
| 80 | 354,64 | 210 | 14308,0 | 14325,0 |
| 90 | 525,45 | 220 | 17390,0 | 17390,0 |
| 100 | 760,00 | 230 | 20915,0 | 20927,0 |

訳注：表は誌面と同じ五列で組んだ。左の二列が −20° から 100°、右の三列が 110° から 230°。誌面の二行目の温度は「− 20」と刷られているが、並びから見て − 10 の誤植と思われるので、誌面のまま置いた。圧力はミリメートル水銀柱で、100° で 760,00 になる。Memoire はルニョーの論文（注5 の Mém. VIII）を指す。

### ¶82　p.511–513

> Um nun mit diesen Daten die beabsichtigte Rechnung auszuführen, habe ich zuerst nach der vorstehenden Tabelle [p.512] die Werthe von (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) für die Temperaturen − 15°, − 5°, 5°, 15° etc. bestimmt, und zwar auf folgende Weise. Da die Grösse (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) mit wachsender Temperatur nur langsam abnimmt, habe ich die Abnahme in jedem Intervall von 10 Graden, also von − 20° bis − 10° von − 10° bis 0° etc. als gleichförmig betrachtet, so dass ich den z. B. für 25° geltenden Werth als das Mittel aus allen zwischen 20° und 30° vorkommenden Werthen ansehen konnte. Dann konnte ich mich, da (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) = <i>d</i>(log <i>p</i>)/<i>dt</i> ist, folgender Formel bedienen:
>
> ((1/<i>p</i>) · (<i>dp</i>/<i>dt</i>))<sub>25°</sub> = (log <i>p</i><sub>30°</sub> − log <i>p</i><sub>20°</sub>)/10
>
> oder auch:
>
> (25.)　((1/<i>p</i>) · (<i>dp</i>/<i>dt</i>))<sub>25°</sub> = (Log <i>p</i><sub>30°</sub> − Log <i>p</i><sub>20°</sub>)/(10 · <i>M</i>)
>
> worin Log das Zeichen der Briggs'schen Longarithmen und <i>M</i> der Modulus dieses Systems ist. Mit Hülfe dieser Werthe von (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) und der durch Gleichung (24.) gegebenen Werthe von <i>r</i>, so wie endlich des Werthes 273 von <i>a</i> sind die Werthe, welche die Formel auf der rechten Seite von (22.) und somit auch der Ausdruck <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) für die Temperaturen − 15°, − 5°, 5° etc. annimmt, berechnet, und finden sich in der zweiten Columne der nachstehenden Tabelle angeführt. Bei den Temperaturen über 100° sind die beiden oben für <i>p</i> mitgetheilten Zahlenreihen einzeln benutzt, und die dadurch gefundenen doppelten Resultate neben einander gestellt. Die Bedeutung der dritten und vierten Columne wird gleich weiter unten noch näher bezeichnet werden.
>
> III. [p.513]
>
> | 1. <i>t</i> in Cent.-Gr. des Luftthermometers. | 2. nach den Beobachtungswerthen. | 2. (zweite Zahl) | 3. nach der Gleichung (27.) | 4. Differenzen. | 4. (zweite Zahl) |
> |---|---|---|---|---|---|
> | − 15° | 30,61 | | 30,61 | 0,00 | |
> | − 5 | 29,21 | | 30,54 | + 1,33 | |
> | 5 | 30,93 | | 30,46 | − 0,47 | |
> | 15 | 30,60 | | 30,38 | − 0,22 | |
> | 25 | 30,40 | | 30,30 | − 0,10 | |
> | 35 | 30,23 | | 30,20 | − 0,03 | |
> | 45 | 30,10 | | 30,10 | 0,00 | |
> | 55 | 29,98 | | 30,00 | + 0,02 | |
> | 65 | 29,88 | | 29,88 | 0,00 | |
> | 75 | 29,76 | | 29,76 | 0,00 | |
> | 85 | 29,65 | | 29,63 | − 0,02 | |
> | 95 | 29,49 | | 29,48 | − 0,01 | |
> | 105 | 29,47 | 29,50 | 29,33 | − 0,14 | − 0,17 |
> | 115 | 29,16 | 29,02 | 29,17 | + 0,01 | + 0,15 |
> | 125 | 28,89 | 28,93 | 28,99 | + 0,10 | + 0,06 |
> | 135 | 28,88 | 29,01 | 28,80 | − 0,08 | − 0,21 |
> | 145 | 28,65 | 28,40 | 28,60 | − 0,05 | + 0,20 |
> | 155 | 28,16 | 28,25 | 28,38 | + 0,22 | + 0,13 |
> | 165 | 28,02 | 28,19 | 28,14 | + 0,12 | − 0,05 |
> | 175 | 27,84 | 27,90 | 27,89 | + 0,05 | − 0,01 |
> | 185 | 27,76 | 27,67 | 27,62 | − 0,14 | − 0,05 |
> | 195 | 27,45 | 27,20 | 27,33 | − 0,12 | + 0,13 |
> | 205 | 26,89 | 26,94 | 27,02 | + 0,13 | + 0,08 |
> | 215 | 26,56 | 26,79 | 26,68 | + 0,12 | − 0,11 |
> | 225 | 26,64 | 26,50 | 26,32 | − 0,32 | − 0,18 |

このデータで予定の計算をするため、私はまず上の表から、[p.512] −15°、−5°、5°、15° などの温度での (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) の値を定めた。やり方は次のとおり。量 (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) は温度が上がるとゆっくりとしか減らないので、10 度ずつの区間、つまり −20° から −10°、−10° から 0° などの中では、その減り方を一様とみなした。そうすれば、たとえば 25° での値を、20° と 30° のあいだに現れるすべての値の平均とみなせる。そして (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) = <i>d</i>(log <i>p</i>)/<i>dt</i> であるから、次の式を使えた。

((1/<i>p</i>) · (<i>dp</i>/<i>dt</i>))<sub>25°</sub> = (log <i>p</i><sub>30°</sub> − log <i>p</i><sub>20°</sub>)/10

または

(25.)　((1/<i>p</i>) · (<i>dp</i>/<i>dt</i>))<sub>25°</sub> = (Log <i>p</i><sub>30°</sub> − Log <i>p</i><sub>20°</sub>)/(10 · <i>M</i>)

ここで Log はブリッグスの対数の記号、<i>M</i> はこの対数の系の母数である。こうして得た (1/<i>p</i>) · (<i>dp</i>/<i>dt</i>) の値と、式 (24.) が与える <i>r</i> の値、そして <i>a</i> の値 273 を使って、−15°、−5°、5° などの温度で (22.) の右辺の式がとる値、したがって式 <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) がとる値を計算した。それを次の表の第二列に載せる。100° を超える温度では、上で <i>p</i> について示した二つの数列を別々に使い、それで出た二通りの結果を並べて置いた。第三列と第四列の意味は、すぐ下でもう少し詳しく述べる。

表 III. [p.513]

| 1. 空気温度計による <i>t</i>（摂氏の度） | 2. 観測値から | 2.（二つめの値） | 3. 式 (27.) から | 4. 差 | 4.（二つめの値） |
|---|---|---|---|---|---|
| − 15° | 30,61 | | 30,61 | 0,00 | |
| − 5 | 29,21 | | 30,54 | + 1,33 | |
| 5 | 30,93 | | 30,46 | − 0,47 | |
| 15 | 30,60 | | 30,38 | − 0,22 | |
| 25 | 30,40 | | 30,30 | − 0,10 | |
| 35 | 30,23 | | 30,20 | − 0,03 | |
| 45 | 30,10 | | 30,10 | 0,00 | |
| 55 | 29,98 | | 30,00 | + 0,02 | |
| 65 | 29,88 | | 29,88 | 0,00 | |
| 75 | 29,76 | | 29,76 | 0,00 | |
| 85 | 29,65 | | 29,63 | − 0,02 | |
| 95 | 29,49 | | 29,48 | − 0,01 | |
| 105 | 29,47 | 29,50 | 29,33 | − 0,14 | − 0,17 |
| 115 | 29,16 | 29,02 | 29,17 | + 0,01 | + 0,15 |
| 125 | 28,89 | 28,93 | 28,99 | + 0,10 | + 0,06 |
| 135 | 28,88 | 29,01 | 28,80 | − 0,08 | − 0,21 |
| 145 | 28,65 | 28,40 | 28,60 | − 0,05 | + 0,20 |
| 155 | 28,16 | 28,25 | 28,38 | + 0,22 | + 0,13 |
| 165 | 28,02 | 28,19 | 28,14 | + 0,12 | − 0,05 |
| 175 | 27,84 | 27,90 | 27,89 | + 0,05 | − 0,01 |
| 185 | 27,76 | 27,67 | 27,62 | − 0,14 | − 0,05 |
| 195 | 27,45 | 27,20 | 27,33 | − 0,12 | + 0,13 |
| 205 | 26,89 | 26,94 | 27,02 | + 0,13 | + 0,08 |
| 215 | 26,56 | 26,79 | 26,68 | + 0,12 | − 0,11 |
| 225 | 26,64 | 26,50 | 26,32 | − 0,32 | − 0,18 |

訳注：一つめの式の log は自然対数で、(25.) の Log は常用対数（ブリッグスの対数）。<i>M</i>（母数）は常用対数と自然対数の比 0,4343… で、Log <i>p</i> = <i>M</i> log <i>p</i> だから二つの式は同じことを言う。下付きの 25°・30°・20° は、その温度での値を表す。誌面の「Longarithmen」は Logarithmen の誤植で、誌面のまま置いた。「− 10° von − 10°」のあいだのコンマが誌面に無いのも、そのまま置いた。表 III の誌面では、第二列と第三列の上に <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) という見出しが掛け括弧で掛かっている（二つの列がこの式の値であることを示す）。100° を超える行では、第二列と第四列に数が二つずつ並ぶ。一つめは表 II の「数の曲線」の <i>p</i>、二つめは「対数の曲線」の <i>p</i> から出したものと読める。Markdown の表にするため、二つめの数を別の列に分けた。第四列の差は「第三列 − 第二列」で、全行で計算が合う。

### ¶83　p.513–514

> Man sieht in dieser Tabelle sogleich, dass <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) nicht, wie es seyn müsste, wenn das M. und G. Gesetz gültig wäre, constant ist, sondern mit der Temperatur entschieden abnimmt. Zwischen 35° und 90° zeigt sich diese Abnahme sehr gleichförmig. Vor 35°, besonders in der Nähe von 0°, finden bedeutende Unregelmässigkeiten statt, die sich aber einfach daraus erklären lassen, dass hier der Druck <i>p</i> und sein Differentialquotient <i>dp</i>/<i>dt</i> sehr klein sind und daher geringe Ungenauigkeiten, die ganz in die Gränzen der Beobachtungsfehler fallen, doch *verhältnissmässig* bedeutend werden können. Dazu kommt noch, dass die [p.514] Curve durch welche, wie oben erwähnt, die einzelnen Werthe von <i>p</i> bestimmt wurden, nicht in einem Zuge von − 33° bis 100° gezeichnet, sondern der Raumersparniss wegen bei 0° gebrochen ist, so dass sich bei dieser Temperatur der Gang der Curve nicht so zuverlässig bestimmen liess, als innerhalb der einzelnen Stücke unter 0° und über 0°. Nach der Art, wie die Abweichungen in der vorstehenden Tabelle sich zeigen, scheint es, als ob der bei 0° angenommene Werth von <i>p</i>, nämlich 4<sup>mm</sup>, 60 etwas zu gross sey, denn dadurch mussten die Werthe von <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) für die Temperaturen zunächst unter 0° zu klein und für die über 0° zu gross werden. — Ueber 100° hinaus nehmen die Werthe dieses Ausdrucks ebenfalls nicht so regelmässig ab, wie zwischen 35° und 95°, doch zeigen sie wenigstens im *Allgemeinen* einen entsprechenden Gang, und besonders, wenn man eine graphische Darstellung ausführt, findet man, dass die Curve, welche innerhalb jenes Intervalls fast genau die Punkte verbindet, welche durch die in der Tabelle enthaltenen Zahlen bestimmt werden, sich auch darüber hinaus bis 230° ganz natürlich so fortsetzen lässt, dass diese Punkte gleichmässig auf beiden Seiten vertheilt liegen.

この表を見るとすぐわかるように、<i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) は、マリオットとゲイ＝リュサックの法則が成り立つならそうでなければならないのに、一定ではない。温度とともにはっきり減っていく。35° と 90° のあいだでは、この減り方はとても一様である。35° より下、とくに 0° の近くでは大きな不規則が現れる。しかしこれは簡単に説明がつく。ここでは圧力 <i>p</i> とその微分商 <i>dp</i>/<i>dt</i> がとても小さい。そのため、観測の誤差の範囲にすっかり収まる小さな不正確さでも、*割合としては*大きくなりうるのである。さらに、上で述べたように <i>p</i> の個々の値を定めた [p.514] 曲線は、−33° から 100° まで一筆で描かれてはおらず、紙面を節約するために 0° で折れている。そのため、この温度では、0° より下と上の個々の部分の中ほど確かには曲線の走り方を定められなかった。上の表での外れの現れ方から見ると、0° で採った <i>p</i> の値、すなわち 4,60 mm が、いくらか大きすぎるように思われる。そうであれば、0° のすぐ下の温度では <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) の値が小さくなりすぎ、0° のすぐ上では大きくなりすぎたはずだからである。—— 100° を超えると、この式の値はやはり 35° と 95° のあいだほど規則正しくは減らない。それでも少なくとも*大筋では*それに見合った走り方を示す。とくに図に描いてみると、その区間の中で表の数が決める点をほとんどぴったり結ぶ曲線は、その先 230° まで、ごく自然に延ばせることがわかる。しかも、延ばした先で、点が曲線の両側に均等に散らばるように延ばせる。

訳注：Differentialquotient は「微分商」と訳した（今の導関数に当たる）。誌面の「4<sup>mm</sup>, 60」は 4,60 mm（単位の印を整数部のあとに上付きで置く、当時の書き方）。誌面は一様な減り方の区間を、ここで「35° と 90° のあいだ」、すぐ後で「35° と 95° のあいだ」と書いていて、くい違う。表 III の行は 95° まであるので、後のほうが表に合うと思われる（推測）。「Curve durch welche」のあいだのコンマが誌面に無いのは、そのまま置いた。

### ¶84　p.514–515

> Der Gang dieser Curve kann in der ganzen Ausdehnung der Tabelle ziemlich genau durch eine Gleichung von der Form
>
> (26.)　<i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) = <i>m</i> − <i>ne</i><sup><i>kt</i></sup>
>
> ausgedrückt werden, worin <i>e</i> die Basis der natürlichen Logarithmen bedeutet, und <i>m</i>, <i>n</i> und <i>k</i> Constante sind. Wenn die letzteren aus den Werthen, welche die Curve für 45°, 125° und 205° giebt, bestimmt werden, so kommt:
>
> (26<i>a</i>.)　<i>m</i> = 31,549;　<i>n</i> = 1,0486;　<i>k</i> = 0,007138,
>
> und wenn man zur Bequemlichkeit noch Briggs'sche Logarithmen einführt, so erhält man:
>
> (27.)　Log [31,549 − <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>)] = 0,0206 + 0,003100 <i>t</i>.
>
> [p.515] Nach dieser Gleichung sind die in der dritten Columne enthaltenen Zahlen berechnet, und in der vierten sind die Differenzen hinzugefügt, welche diese Zahlen mit den in der zweiten befindlichen bilden.

この曲線の走り方は、表の全範囲にわたって、次の形の式でかなり正確に表せる。

(26.)　<i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) = <i>m</i> − <i>ne</i><sup><i>kt</i></sup>

ここで <i>e</i> は自然対数の底、<i>m</i>·<i>n</i>·<i>k</i> は定数である。これらの定数を、曲線が 45°・125°・205° で与える値から定めると、

(26<i>a</i>.)　<i>m</i> = 31,549;　<i>n</i> = 1,0486;　<i>k</i> = 0,007138,

となる。さらに便利のためにブリッグスの対数を入れると、

(27.)　Log [31,549 − <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>)] = 0,0206 + 0,003100 <i>t</i>.

を得る。[p.515] 表の第三列の数は、この式で計算したものである。第四列には、この数と第二列の数との差を書き足した。

訳注：(27.) は (26.) の常用対数をとったもので、0,0206 = Log 1,0486、0,003100 = 0,007138 × <i>M</i>（<i>M</i> = 0,4343）と、計算が合う。

### ¶85　p.515

> Aus dem Vorstehenden lässt sich nun leicht eine Formel ableiten, aus welcher man noch bestimmter erkennen kann, in welcher Weise das Verhalten des Dampfes vom M. und G. Gesetze abweicht. Unter Annahme dieses Gesetzes würde man, wenn <i>ps</i><sub>0</sub> den bei 0° geltenden Werth von <i>ps</i> bedeutet, nach (20) setzen müssen
>
> <i>ps</i>/<i>ps</i><sub>0</sub> = (<i>a</i> + <i>t</i>)/<i>a</i>
>
> und würde also für den Differentialquotienten (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) eine constante Grösse, nämlich den bekannten Ausdehnungscoëfficienten 1/<i>a</i> = 0,003665 erhalten. Statt dessen ergiebt sich aus (26.), wenn man darin für <i>s</i> − <i>σ</i> einfach <i>s</i> setzt, die Gleichung:
>
> (28.)　<i>ps</i>/<i>ps</i><sub>0</sub> = [(<i>m</i> − <i>n</i> · <i>e</i><sup><i>kt</i></sup>)/(<i>m</i> − <i>n</i>)] · (<i>a</i> + <i>t</i>)/<i>a</i>
>
> und daraus folgt:
>
> (29.)　(<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) = (1/<i>a</i>) · (<i>m</i> − <i>n</i>[1 + <i>k</i>(<i>a</i> + <i>t</i>)]<i>e</i><sup><i>kt</i></sup>)/(<i>m</i> − <i>n</i>).
>
> Der Differentialquotient ist also nicht eine Constante, sondern eine mit wachsender Temperatur abnehmende Function, welche, nachdem man für <i>m</i>, <i>n</i> und <i>k</i> die in (26<i>a</i>.) mitgetheilten Zahlen eingesetzt hat, unter anderen folgende Werthe annimmt:
>
> IV.
>
> | <i>t</i>. | (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>). |
> |---|---|
> | 0° | 0,00342 |
> | 10 | 0,00338 |
> | 20 | 0,00334 |
> | 30 | 0,00329 |
> | 40 | 0,00325 |
> | 50 | 0,00319 |
> | 60 | 0,00314 |
> | 70° | 0,00307 |
> | 80 | 0,00300 |
> | 90 | 0,00293 |
> | 100 | 0,00285 |
> | 110 | 0,00276 |
> | 120 | 0,00266 |
> | 130 | 0,00256 |
> | 140° | 0,00244 |
> | 150 | 0,00231 |
> | 160 | 0,00217 |
> | 170 | 0,00203 |
> | 180 | 0,00187 |
> | 190 | 0,00168 |
> | 200 | 0,00149 |

ここまでのことから、蒸気のふるまいがマリオットとゲイ＝リュサックの法則からどのように外れるかを、もっとはっきり見てとれる式が、たやすく導ける。この法則を仮定すると、<i>ps</i><sub>0</sub> が 0° での <i>ps</i> の値を表すとして、(20) により

<i>ps</i>/<i>ps</i><sub>0</sub> = (<i>a</i> + <i>t</i>)/<i>a</i>

と置かねばならない。したがって微分商 (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) は一定の量、すなわちよく知られた膨張係数 1/<i>a</i> = 0,003665 になるはずである。ところが実際には、(26.) で <i>s</i> − <i>σ</i> の代わりに単に <i>s</i> を置くと、次の式が出る。

(28.)　<i>ps</i>/<i>ps</i><sub>0</sub> = [(<i>m</i> − <i>n</i> · <i>e</i><sup><i>kt</i></sup>)/(<i>m</i> − <i>n</i>)] · (<i>a</i> + <i>t</i>)/<i>a</i>

そしてここから

(29.)　(<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) = (1/<i>a</i>) · (<i>m</i> − <i>n</i>[1 + <i>k</i>(<i>a</i> + <i>t</i>)]<i>e</i><sup><i>kt</i></sup>)/(<i>m</i> − <i>n</i>).

が出る。つまりこの微分商は定数ではなく、温度が上がるにつれて減る関数である。<i>m</i>·<i>n</i>·<i>k</i> に (26<i>a</i>.) の数を入れると、たとえば次の値をとる。

表 IV.

| <i>t</i> | (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) |
|---|---|
| 0° | 0,00342 |
| 10 | 0,00338 |
| 20 | 0,00334 |
| 30 | 0,00329 |
| 40 | 0,00325 |
| 50 | 0,00319 |
| 60 | 0,00314 |
| 70° | 0,00307 |
| 80 | 0,00300 |
| 90 | 0,00293 |
| 100 | 0,00285 |
| 110 | 0,00276 |
| 120 | 0,00266 |
| 130 | 0,00256 |
| 140° | 0,00244 |
| 150 | 0,00231 |
| 160 | 0,00217 |
| 170 | 0,00203 |
| 180 | 0,00187 |
| 190 | 0,00168 |
| 200 | 0,00149 |

訳注：表 IV は、誌面では「<i>t</i>・値」の組を横に三つ並べた六列（0°–60°、70°–130°、140°–200°）で組まれている。ここでは縦の二列に組み直した。<i>ps</i><sub>0</sub> は「0° での <i>ps</i>」、つまり (<i>ps</i>)<sub>0</sub> の意味。<i>d</i>/<i>dt</i> は誌面のまま書いた。ここでの <i>d</i> は、飽和の条件に沿って温度とともに <i>p</i> と <i>s</i> が両方変わるときの全微分で、偏微分ではない。(28.) の角括弧は、縦に組まれた分数を一行にするために訳者が足した。(29.) は (28.) を <i>t</i> で微分したもので、計算が合う。

### ¶86　p.516

> Man sieht hieraus, dass die Abweichungen vom M. und G. Gesetze bei niedrigen Temperaturen nur gering sind, bei höheren aber, z. B. bei 100° und darüber hinaus, nicht mehr vernachlässigt werden dürfen.

ここから、マリオットとゲイ＝リュサックの法則からの外れは、低い温度ではわずかだが、もっと高い温度、たとえば 100° やそれより上では、もう無視してはならないことがわかる。

### ¶87　p.516

> Es kann vielleicht auf den ersten Blick auffallend erscheinen, dass die gefundenen Werthe von (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) *kleiner* sind, als 0,003665, während man doch weiss, dass unter den Gasen, bei denen, die vorzugsweise vom M. und G. Gesetze abweichen, wie die Kohlensäure und die schwefelige Säure, der Ausdehnungscoëfficient nicht *kleiner*, sondern *grösser* ist, als jene Zahl. Man darf jedoch den vorher berechneten Differentialquotienten nicht ganz gleichstellen mit dem Ausdehnungscoëfficienten im *wörtlichen* Sinne, welcher sich auf die Vermehrung des Volumens bei *constantem Drucke* bezieht, auch nicht mit der Zahl, welche man erhält, wenn man bei der Erwärmung das *Volumen constant* lässt, und dann die Zunahme der Expansivkraft beobachtet, sondern es handelt sich hier um einen dritten besonderen Fall des allgemeinen Differentialquotienten (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>), nämlich um den, wo zugleich mit der Erwärmung der Druck in so starkem Verhältnisse wächst, wie es beim Wasserdampfe geschieht, wenn dieser im Maximum seiner Dichte bleibt; und diesen Fall müssen wir auch bei der Kohlensäure betrachten, wenn wir eine Vergleichung anstellen wollen.

一見すると、求めた (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) の値が 0,003665 より*小さい*ことは、意外に思えるかもしれない。気体のうちマリオットとゲイ＝リュサックの法則からとくに外れるもの、たとえば炭酸や亜硫酸では、膨張係数がこの数より*小さい*のではなく*大きい*ことが知られているからである。しかし、先に計算した微分商を、*文字どおりの*意味での膨張係数と同じものとみてはならない。文字どおりの膨張係数は、*圧力を一定に*したときの体積の増え方にかかわる。また、温めるときに*体積を一定に*しておき、膨張力の増え方を観測して得る数とも同じではない。ここで扱っているのは、一般の微分商 (<i>d</i>/<i>dt</i>)(<i>ps</i>/<i>ps</i><sub>0</sub>) の第三の特別な場合である。すなわち、温めるのと同時に、圧力が強い割合で増える場合で、その増え方は、水蒸気が、密度が最大の状態にとどまるときのそれと同じである。比べようとするなら、炭酸についてもこの場合を考えなければならない。

訳注：Expansivkraft（膨張力）は、ここでは体積を一定にしたときの気体の圧力のこと。三つの場合は、今の言い方では、圧力一定の膨張係数、体積一定の圧力係数、飽和曲線に沿った変化に当たる。

### ¶88　p.516–517

> Der Wasserdampf hat bei etwa 108° eine Spannkraft von 1<sup>m</sup> und bei 129½° eine solche von 2<sup>m</sup>. Wir wollen daher untersuchen, wie sich die Kohlensäure verhält, wenn sie sich auch um 21½° erwärmt, und dabei der Druck von 1<sup>m</sup> bis 2<sup>m</sup> vermehrt wird. Nach *Regnault* [注20] ist der Ausdehnungscoëfficient der Kohlensäure bei constantem Drucke, wenn dieser 760<sup>mm</sup> beträgt, 0,003710, und wenn er 2520<sup>mm</sup> beträgt, 0,003846. Für einen Druck von 1500<sup>mm</sup>, (dem Mittel zwischen 1<sup>m</sup> und 2<sup>m</sup>,) erhält man daraus, wenn man [p.517] die Zunahme des Ausdehnungscoëfficienten als proportional der Druckzunahme betrachtet, den Werth 0,003767. Würde also die Kohlensäure unter diesem mittleren Drucke von 0° bis 21½° erwärmt, so würde dabei die Grösse <i>pv</i>/<i>pv</i><sub>0</sub> von 1 zu 1 + 0,003767 × 21,5 = 1,08099 anwachsen. — Ferner ist aus anderen Versuchen von *Regnault* [注21] bekannt, dass, wenn Kohlensäure, welche sich bei einer Temperatur von nahe 0° unter dem Drucke von 1<sup>m</sup> befunden hat, mit einem Drucke von 1<sup>m</sup>, 98292 belastet wird, dabei die Grösse <i>pv</i> im Verhältnisse von 1 : 0,99146 abnimmt, woraus sich bei einer Druckvermehrung von 1<sup>m</sup> zu 2<sup>m</sup> eine Abnahme im Verhältnisse von 1 : 0,99131 ergiebt. — Wenn nun beides gleichzeitig stattfindet, die Temperaturerhöhung von 0° bis 21½° und die Druckzunahme von 1<sup>m</sup> zu 2<sup>m</sup> so muss dabei die Grösse <i>pv</i>/<i>pv</i><sub>0</sub> sehr nahe von 1 zu 1,08099 × 0,99131 = 1,071596 anwachsen, und daraus erhält man als mittleren Werth des Differentialquotienten (<i>d</i>/<i>dt</i>)(<i>pv</i>/<i>pv</i><sub>0</sub>):
>
> 0,071596/21,5 = 0,00333.
>
> Man sieht also, dass man für den Fall, auf den es hier ankommt, schon bei der Kohlensäure einen Werth erhält, der kleiner als 0,003665 ist, und es kann daher jenes Resultat beim Dampfe *im Maximum seiner Dichte* um so weniger befremden.

水蒸気は、およそ 108° で 1 m の張力を、129½° で 2 m の張力をもつ。そこで、炭酸も同じく 21½° 温められ、そのあいだに圧力が 1 m から 2 m に増えるとき、炭酸がどうふるまうかを調べよう。ルニョーによれば [注20]、圧力一定のもとでの炭酸の膨張係数は、圧力が 760 mm のとき 0,003710、2520 mm のとき 0,003846 である。ここから、膨張係数の増え方を圧力の増え方に比例するとみなせば、[p.517] 1500 mm（1 m と 2 m の中ほど）の圧力では 0,003767 という値が出る。だから炭酸をこの中ほどの圧力のもとで 0° から 21½° まで温めれば、量 <i>pv</i>/<i>pv</i><sub>0</sub> は 1 から 1 + 0,003767 × 21,5 = 1,08099 に増えるはずである。——また、ルニョーの別の実験から [注21]、次のことが知られている。0° 近くの温度で 1 m の圧力のもとにあった炭酸に 1,98292 m の圧力をかけると、量 <i>pv</i> は 1 : 0,99146 の比で減る。ここから、圧力を 1 m から 2 m に増やすと、1 : 0,99131 の比で減ることになる。——さて、0° から 21½° への温度の上昇と、1 m から 2 m への圧力の増加とが、同時に起こるとしよう。そのとき量 <i>pv</i>/<i>pv</i><sub>0</sub> は、ごく近似的に 1 から 1,08099 × 0,99131 = 1,071596 に増えるはずである。ここから、微分商 (<i>d</i>/<i>dt</i>)(<i>pv</i>/<i>pv</i><sub>0</sub>) の平均の値として

0,071596/21,5 = 0,00333.

を得る。つまり、ここで問題にしている場合については、炭酸でもすでに 0,003665 より小さい値が出る。だから、*密度が最大の状態の*蒸気で出たあの結果は、なおさら不思議ではない。

訳注：1<sup>m</sup>・2<sup>m</sup> は水銀柱の高さで 1 メートル・2 メートルの圧力（1500 mm を「1 m と 2 m の中ほど」と言うことからわかる）。表 II で 110° が 1073,7 mm なので、1 m がおよそ 108° に当たるのと合う。誌面の「1<sup>m</sup>, 98292」は 1,98292 m。<i>v</i> はここで炭酸の体積を表す（前の節の <i>s</i> に当たる）。0,003767 は 760 mm と 2520 mm のあいだの一次の内挿で、計算が合う。誌面の「constantem」は e の字が欠けて constant·m のように刷られているが、constantem と起こした。

### ¶89　p.517

> Wollte man dagegen den eigentlichen Ausdehnungscoëfficienten des Dampfes bestimmen, also die Zahl, welche angiebt, um wie viel ein Dampfquantum sich ausdehnt, wenn es bei einer bestimmten Temperatur im Maximum seiner Dichte genommen, und dann getrennt von Wasser, unter constantem Drucke erwärmt wird, so würde man gewiss einen Werth erhalten, der *grösser* und vielleicht *beträchtlich* grösser wäre, als 0,003665. —

これに対して、蒸気の本来の膨張係数を決めようとするなら、すなわち、ある温度で密度が最大の状態にある蒸気の量を取り、それを水から切り離して一定の圧力のもとで温めたとき、どれだけ膨張するかを示す数を決めようとするなら、得られる値はきっと 0,003665 より*大きく*、ことによると*かなり*大きくなるだろう。——

訳注：0,003665 は気体の膨張係数（1/273）で、ゲイ＝リュサックの法則に従う気体の値。

### ¶90　p.517–518

> Aus der Gleichung (26.) ergeben sich leicht die *relativen* Volumina einer Gewichtseinheit Dampf im Maximum [p.518] seiner Dichte für die verschiedenen Temperaturen, bezogen auf das Volumen bei einer bestimmten Temperatur. Um auch die *absoluten* Volumina aus ihr mit hinlänglicher Genauigkeit berechnen zu können, müsste der Werth der Constanten <i>A</i> mit mehr Sicherheit bekannt seyn, als es bisjetzt der Fall ist.

式 (26.) からは、密度が最大の状態にある重さの単位の蒸気が、さまざまな温度でとる体積を、ある一つの温度での体積に対する [p.518] *相対的な*値として、たやすく得られる。この式から*絶対的な*体積まで十分な精度で計算するには、定数 <i>A</i> の値が今よりも確かにわかっていなければならない。

訳注：<i>A</i> は仕事の量を熱量に換える係数で、1/<i>A</i> が熱の単位に対する仕事の当量。その数値は、この少しあとで求める。

### ¶91　p.518–519

> Es fragt sich nun, ob sich vielleicht anderweitig ein einzelnes Volumen mit Zuverlässigkeit angeben lässt, um dadurch auch für die übrigen aus den relativen Werthen auf die absoluten schliessen zu können. Man hat freilich über das specifische Gewicht des Wasserdampfes schon mancherlei Versuche angestellt, doch glaube ich, dass für den besonderen Fall, um den es sich hier handelt, wo der Dampf sich im Maximum der Dichte befindet, die Resultate noch nicht entscheidend sind. Die Zahlen, welche man gewöhnlich anführt, besonders die von *Gay-Lussac* gefundene 0,6235, stimmen ziemlich gut mit dem theoretischen Werthe überein, welchen man erhält, wenn man annimmt, dass 2 Maass Wasserstoff und 1 Maass Sauerstoff bei ihrer Verbindung 2 Maass Wasserdampf geben, also mit dem Werthe
>
> (2×0,06926 + 1,10563)/2 = 0,622.
>
> Jene Zahlen beruhen aber auf Beobachtungen, welche nicht bei den Temperaturen angestellt wurden, bei denen der stattfindende Druck dem Maximum der Expansivkraft gleich war, sondern bei höheren Temperaturen. In diesem Zustande mochte der Dampf dem M. und G. Gesetze schon beinahe folgen, und man kann sich daraus die Uebereinstimmung mit dem theoretischen Werthe erklären. Von hier aus aber bis zu dem Zustande des Maximums der Dichte unter Anwendung desselben Gesetzes zurückschliessen zu wollen, würde unseren früheren Resultaten widersprechen, indem die Tabelle (IV.) bei den Temperaturen, auf welche sich diese Bestimmungen beziehen, schon zu bedeutende Abweichungen von dem Gesetze zeigt. In der That haben auch solche Versuche, bei denen der Dampf wirklich im [p.519] Maximum der Dichte beobachtet wurde, meistens grössere Zahlen gegeben, und *Regnault* hat sich davon überzeugt [注22], dass man selbst bei einer Temperatur von wenig über 30° für den Fall, wo der Dampf sich im *leeren Raume* entwickelt, erst dann eine genügende Uebereinstimmung mit dem theoretischen Werthe findet, wenn die Spannkraft des Dampfes nur noch 0,8 von derjenigen beträgt, die der gleichzeitig stattfindenden Temperatur als Maximum entspricht. Bei verhältnissmässig grösserer Spannung werden die Zahlen zu gross. Eine definitive Entscheidung kann indessen diese Esfahrung noch nicht geben, da es, wie *Regnault* anführt, zweifelhaft ist, ob die Abweichung wirklich von einem zu grossen specifischen Gewichte des entwickelten Dampfes, oder von einer an den Wänden des Glasballons condensirt gebliebenen Quantität Wasser herrührte. Andere Versuche, welche so angestellt wurden, dass der Dampf sich nicht im leeren Raume entwickelte, sondern einen Luftstrom bis zur Sättigung schwängerte, gaben Resultate, die von jener Unregelmässigkeit ziemlich frei waren [注23], doch erlauben diese wieder, so wichtig sie in anderer Beziehung sind, keinen sicheren Schluss auf das Verhalten des Dampfes im leeren Raume.

そこで問題になるのは、ほかの方法で一つの体積だけでも確かに示せないか、ということである。それができれば、残りの温度についても、相対的な値から絶対的な値を推し量れる。水蒸気の比重については、たしかにこれまでいろいろな実験が行われてきた。しかし私は、ここで問題にしている特別な場合、つまり蒸気が、密度が最大の状態にある場合については、その結果はまだ決め手にならないと考える。ふつう挙げられる数、とくにゲイ＝リュサックが見いだした 0,6235 は、水素 2 容と酸素 1 容が化合して水蒸気 2 容ができると仮定したときに得られる理論上の値、すなわち

(2×0,06926 + 1,10563)/2 = 0,622

とかなりよく合う。しかしこれらの数は、そのときの圧力が膨張力の最大値に等しくなる温度で行った観測ではなく、それより高い温度で行った観測に基づいている。その状態では、蒸気はもうほとんどマリオットとゲイ＝リュサックの法則に従っていたのかもしれない。理論上の値と合うのは、そのためだと説明できる。しかし、そこから同じ法則を当てはめて、密度が最大の状態まで逆にたどろうとすると、われわれの先の結果と食い違う。表 (IV.) は、これらの測定が関わる温度で、すでにこの法則からのずれが大きすぎることを示しているからである。実際、蒸気を本当に [p.519] 密度が最大の状態で観測した実験は、たいてい、より大きな数を与えてきた。そしてルニョーは次のことを確かめた [注22]。蒸気が*真空*の中で生じる場合には、30° を少し超える温度でさえ、蒸気の張力が、その時の温度に最大値として対応する張力の 0,8 にまで下がって、はじめて理論上の値と十分に合う。張力が相対的にそれより大きいと、数は大きくなりすぎる。とはいえ、この経験もまだ最終的な決め手にはならない。ルニョーが述べているように、このずれが本当に、生じた蒸気の比重が大きすぎることから来たのか、それともガラスの球の壁に凝結したまま残った水の量から来たのかが疑わしいからである。蒸気を真空の中で生じさせず、空気の流れを飽和するまで湿らせる形で行ったほかの実験は、あの不規則さをほとんど含まない結果を与えた [注23]。しかしこれらの実験は、ほかの点でどれほど大事であっても、真空の中での蒸気のふるまいについて確かな結論を許さない。

訳注：比重は空気を 1 とした値。0,06926 は水素の、1,10563 は酸素の比重。誌面の「Esfahrung」は Erfahrung（経験）の誤植と見て、原文はそのまま置いた。

### ¶92　p.519–520

> Bei dieser Unsicherheit kann vielleicht die folgende Betrachtung dazu dienen, die Lücke einigermassen auszufüllen. Die Tabelle (IV.) zeigt, dass der Dampf im Maximum der Dichte sich dem M. und G. Gesetze um so mehr zuwendet, je niedriger die Temperatur ist, und daraus muss man schliessen, dass auch das specifische Gewicht für niedere Temperaturen dem theoretischen Werthe näher kommt, als für höhere. Wenn man also z. B. für 0° jenen Werth 0,622 als richtig annimmt, und dann die entsprechenden Werthe <i>d</i> für höhere Temperaturen mittelst der folgenden aus (26.) abgeleiteten Gleichung
>
> (30.)　<i>d</i> = 0,622 · (<i>m</i> − <i>n</i>)/(<i>m</i> − <i>n</i><i>e</i><sup><i>kt</i></sup>)
>
> [p.520] berechnet, so erhält man schon viel wahrscheinlichere Zahlen, als wenn man 0,622 für alle Temperaturen beibehalten wollte. Die folgende Tabelle giebt einige derselben.
>
> V.
>
> | <i>t</i>. | 0°. | 50°. | 100°. | 150°. | 200°. |
> |---|---|---|---|---|---|
> | <i>d</i>. | 0,622 | 0,631 | 0,645 | 0,666 | 0,698 |

このように確かでないところでは、次の考察が、その隙間をいくらか埋めるのに役立つかもしれない。表 (IV.) が示すように、密度が最大の状態にある蒸気は、温度が低いほどマリオットとゲイ＝リュサックの法則に近づく。そこから、比重も、高い温度より低い温度のほうが理論上の値に近い、と結論しなければならない。そこで、たとえば 0° では先の値 0,622 が正しいとし、それより高い温度での値 <i>d</i> を、(26.) から導いた次の式で

(30.)　<i>d</i> = 0,622 · (<i>m</i> − <i>n</i>)/(<i>m</i> − <i>n</i><i>e</i><sup><i>kt</i></sup>)

[p.520] 計算すれば、すべての温度で 0,622 を使い続けるよりも、ずっと確からしい数が得られる。次の表はその一部である。

表 V.

| <i>t</i> | 0° | 50° | 100° | 150° | 200° |
|---|---|---|---|---|---|
| <i>d</i> | 0,622 | 0,631 | 0,645 | 0,666 | 0,698 |

訳注：<i>m</i>・<i>n</i>・<i>k</i> は式 (26.) の定数で、(26.) は <i>Ap</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) を <i>m</i> − <i>ne</i><sup><i>kt</i></sup> で表したもの。比重 <i>d</i> は、同じ圧力と温度の空気に対する蒸気の密度の比なので、<i>s</i> − <i>σ</i> を <i>s</i> とみれば <i>ps</i> <i>a</i>/(<i>a</i> + <i>t</i>) に反比例する。だから 0° での値を 0,622 に固定して比を取ると (30.) になる（検算による）。

### ¶93　p.520–521

> Streng genommen müsste man noch weiter gehen. In der Tabelle (III.) sieht man, dass die Werthe von <i>A</i><i>p</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) sich mit abnehmender Temperatur einem Gränzwerthe nähern, der bei den niedrigsten Temperaturen der Tabelle noch nicht erreicht ist, und für diesen Gränzwerth darf man eigentlich erst die Gültigkeit der M. und G. Gesetzes zugestehen, und das specifische Gewicht zu 0,622 annehmen. Es fragt sich nun, welches dieser Gränzenwerth ist. Könnte man die Formel (26.) auch für die Temperaturen unter −15° als zuverlässig betrachten, so brauchte man nur den Werth zu nehmen, welchem sie sich asymptotisch nähert, <i>m</i> = 31,549, und man könnte daher an die Stelle von (30.) die Gleichung
>
> (31.)　<i>d</i> = 0,622 · <i>m</i>/(<i>m</i> − <i>n</i><i>e</i><sup><i>kt</i></sup>)
>
> setzen. Daraus würde für 0° schon ein specifisches Gewicht von 0,643 anstatt 0,622 folgen, und in demselben Verhältnisse müsste man auch die übrigen Zahlen der vorigen Tabelle vergrössern. Zu einer so ausgedehnten Anwendung der Formel (26.) sind wir doch nicht berechtigt, da sie nur empirisch aus den in der Tabelle (III.) enthaltenen Werthen abgeleitet ist, und unter diesen schon die zu den niedrigsten Temperaturen gehörigen ziemlich unsicher sind. Wir müssen daher vorläufig den Gränzwerth von <i>A</i>(<i>s</i> − <i>σ</i>) <i>a</i>/(<i>a</i> + <i>t</i>) als unbekannt betrachten, und uns mit einer Annäherung der Art begnügen, wie sie die Zahlen der vorigen Tabelle gewähren, können aber wenig- [p.521] stens den Schluss ziehen, dass diese Zahlen eher noch etwas zu klein als zu gross sind.

厳密に言えば、さらに先へ進まなければならない。表 (III.) を見ると、<i>A</i><i>p</i>(<i>s</i> − <i>σ</i>)<i>a</i>/(<i>a</i> + <i>t</i>) の値は、温度が下がるにつれてある極限値に近づくが、表のいちばん低い温度でもまだそこに達していない。本来は、この極限値に対してはじめて、マリオットとゲイ＝リュサックの法則が成り立つと認め、比重を 0,622 としてよいのである。では、その極限値はいくらか。式 (26.) を −15° より低い温度でも信頼できるとみなせるなら、式が漸近的に近づく値 <i>m</i> = 31,549 を取ればよい。そうすれば (30.) の代わりに次の式

(31.)　<i>d</i> = 0,622 · <i>m</i>/(<i>m</i> − <i>n</i><i>e</i><sup><i>kt</i></sup>)

を置くことができる。そこからは、0° でもう比重は 0,622 でなく 0,643 となり、前の表の残りの数も同じ割合で大きくしなければならない。しかし、式 (26.) をそこまで広く当てはめる資格は、われわれには無い。この式は表 (III.) の値から経験的に導いただけのもので、その値のうちでも、いちばん低い温度に属するものはすでにかなり不確かだからである。したがって、さしあたり <i>A</i>(<i>s</i> − <i>σ</i>)<i>a</i>/(<i>a</i> + <i>t</i>) の極限値は未知とみなし、前の表の数が与える程度の近似で満足するほかない。それでも少なくとも [p.521] 次の結論は引き出せる。これらの数は、大きすぎるよりは、むしろまだいくらか小さすぎるだろう。

訳注：後ろの「<i>A</i>(<i>s</i> − <i>σ</i>)<i>a</i>/(<i>a</i> + <i>t</i>)」には、前の行の同じ量にある <i>p</i> が無い。誌面の落ちと見られる（推測）。原文はそのまま置いた。「der M. und G. Gesetzes」の der は des の誤植と見られる。「Gränzenwerth」はほかの箇所の「Gränzwerth」と綴りが違うが、そのまま置いた。

### ¶94　p.521

> Wenn man die Gleichung (V<i>a</i>.) mit der aus dem ersten Grundsatze abgeleiteten (III.) in Verbindung setzt, so lässt sich daraus <i>A</i>(<i>s</i> − <i>σ</i>) eleminiren, und es kommt:
>
> (32.)　<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = <i>r</i>/(<i>a</i> + <i>t</i>).
>
> Mittelst dieser Gleichung kann man die Grösse <i>h</i>, von welcher schon oben gesagt wurde, dass sie negativ sey, näher bestimmen. Setzt man nämlich für <i>c</i> und <i>r</i> die in (23<i>b</i>.) und (24.) angeführten Ausdrücke, und für <i>a</i> die Zahl 273, so erhält man:
>
> (33.)　<i>h</i> = 0,305 − (606,5 − 0,695<i>t</i> − 0,00002<i>t</i><sup>2</sup> − 0,0000003<i>t</i><sup>3</sup>)/(273 + <i>t</i>)
>
> und hieraus ergeben sich für <i>h</i> unter anderen folgende Werthe:
>
> VI.
>
> | <i>t</i>. | 0°. | 50°. | 100°. | 150°. | 200°. |
> |---|---|---|---|---|---|
> | <i>h</i>. | −1,916 | −1,465 | −1,133 | −0,879 | −0,676 |

式 (V<i>a</i>.) を、第一の原則から導いた式 (III.) と組み合わせると、そこから <i>A</i>(<i>s</i> − <i>σ</i>) を消去でき、次の式が出る。

(32.)　<i>dr</i>/<i>dt</i> + <i>c</i> − <i>h</i> = <i>r</i>/(<i>a</i> + <i>t</i>).

この式を使うと、量 <i>h</i> を、もっと詳しく決めることができる。<i>h</i> が負であることは、すでに上で述べた。すなわち、<i>c</i> と <i>r</i> に (23<i>b</i>.) と (24.) に挙げた式を入れ、<i>a</i> に 273 を入れると、

(33.)　<i>h</i> = 0,305 − (606,5 − 0,695<i>t</i> − 0,00002<i>t</i><sup>2</sup> − 0,0000003<i>t</i><sup>3</sup>)/(273 + <i>t</i>)

となり、ここから <i>h</i> について、たとえば次の値が得られる。

表 VI.

| <i>t</i> | 0° | 50° | 100° | 150° | 200° |
|---|---|---|---|---|---|
| <i>h</i> | −1,916 | −1,465 | −1,133 | −0,879 | −0,676 |

訳注：「第一の原則」は熱と仕事の等価の原則（今の第一法則に当たる）。(V<i>a</i>.) はカルノーの原則から導いた式。<i>r</i> は蒸発の潜熱、<i>c</i> は液体の水の比熱、<i>h</i> は飽和したまま温度を上げるときの蒸気の比熱（今の言い方で飽和蒸気の比熱）。<i>h</i> が負とは、飽和を保って温めるには熱を奪わなければならないということ。(33.) の 0,305 は、ルニョーの <i>r</i> の式の <i>dr</i>/<i>dt</i> と <i>c</i> の式の和の定数項（−0,695 + 1）で、<i>t</i> の項は打ち消し合う（検算による）。誌面の「eleminiren」は eliminiren の誤植と見られる。「(24.)」の 4 は誌面ではかすれていて 1 にも見える。

### ¶95　p.521

> In ähnlicher Weise, wie wir es bisher auf den Wasserdampf gethan haben, könnten wir nun die Gleichung (V<i>a</i>.) auch auf die Dämpfe anderer Flüssigkeiten anwenden, und dann die bei den verschiedenen Flüssigkeiten erhaltenen Resultate wieder untereinander vergleichen, wie es mit den in Tabelle (I.) enthaltenen von *Clapeyron* berechneten Zahlen geschehen ist. Wir wollen indessen auf diese Anwendungen hier nicht weiter eingehen.

これまで水蒸気について行ったのと同じように、式 (V<i>a</i>.) をほかの液体の蒸気にも当てはめ、液体ごとに得た結果を互いに比べることもできるだろう。表 (I.) に収めた、クラペイロンが計算した数について行ったように。しかし、ここではこうした応用にはこれ以上立ち入らない。

### ¶96　p.521

> Es muss nun noch versucht werden, den numerischen Werth der Constanten <i>A</i> oder, was gebräuchlicher ist, des Bruches 1/<i>A</i>, also *des Arbeitäquivalentes für die Einheit der Wärme* wenigstens annähernd zu bestimmen.

最後に、定数 <i>A</i> の数値を、あるいはこちらのほうがよく使われるが、分数 1/<i>A</i>、すなわち*熱の単位に対する仕事の当量*の数値を、少なくとも近似的に決めてみなければならない。

訳注：今の言い方で熱の仕事当量（熱の単位 1 に当たる仕事）。

### ¶97　p.521–522

> Dazu können wir uns zunächst der für die *permanenten Gase* entwickelten Gleichung (10<i>a</i>.) bedienen, was mit dem Verfahren zusammenfällt, welches *Mayer* und *Holtzmann* angewandt haben. Jene Gleichung hiess:
>
> [p.522] <i>c</i>′ = <i>c</i> + <i>A</i><i>R</i>,
>
> und wenn man darin für <i>c</i> den gleichbedeutenden Ausdruck <i>c</i>′/<i>k</i> setzt, so kommt:
>
> (34.)　1/<i>A</i> = <i>k</i>.<i>R</i>/((<i>k</i> − 1).<i>c</i>′).
>
> Für <i>c</i>′ nimmt man bei der atmosphärischen Luft gewöhnlich nach *de Laroche* und *Bérard* die Zahl 0,267 und für <i>k</i> nach *Dulong* 1,421 an. Ausserdem weiss man zur Bestimmung von <i>R</i> = <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>), dass der Druck von einer Atmosphäre (760<sup>mm</sup>) auf einen Quadratmeter 10333 Kil. beträgt, und das Volumen von 1 Kil atmosphärischer Luft unter eben jenem Drucke und bei der Temperatur des Gefrierpunktes = 0,7733 Cubikmeter ist. Daraus folgt:
>
> <i>R</i> = 10333.0,7733/273 = 29,26
>
> und somit:
>
> 1/<i>A</i> = 1,421.29,26/(0,421.0,267) = 370,
>
> d. h. durch den Verbrauch einer Wärmeeinheit, (der Wärmemenge, welche 1 Kil. Wasser von 0° bis 1° erwärmt), können 370 Kil. auf die Höhe von 1<sup>m</sup> gehoben werden. Dieser Werth verdient aber wegen der Unsicherheit der Zahlen 0,267 und 1,421 nur wenig Zutrauen. *Holtzmann* giebt als die Gränzen, zwischen denen er zweifelhaft ist, 343 und 429 an.

そのためには、まず*永久気体*について導いた式 (10<i>a</i>.) を使える。これは、マイヤーとホルツマンが用いたやり方と同じになる。その式は

[p.522] <i>c</i>′ = <i>c</i> + <i>A</i><i>R</i>

であった。ここで <i>c</i> に、同じ意味の式 <i>c</i>′/<i>k</i> を入れると、

(34.)　1/<i>A</i> = <i>k</i>·<i>R</i>/((<i>k</i> − 1)·<i>c</i>′)

となる。大気の空気について、<i>c</i>′ にはふつうドラロッシュとベラールに従って 0,267 を、<i>k</i> にはデュロンに従って 1,421 を取る。さらに <i>R</i> = <i>p</i><sub>0</sub><i>v</i><sub>0</sub>/(<i>a</i> + <i>t</i><sub>0</sub>) を決めるために、1 気圧（760 mm）の圧力は 1 平方メートルあたり 10333 キログラムであり、1 キログラムの大気の空気の体積は、その圧力と氷点の温度のもとで 0,7733 立方メートルであることがわかっている。そこから

<i>R</i> = 10333 · 0,7733/273 = 29,26

となり、したがって

1/<i>A</i> = 1,421 · 29,26/(0,421 · 0,267) = 370

となる。すなわち、熱の単位一つ（1 キログラムの水を 0° から 1° に温める熱量）を消費することで、370 キログラムを 1 メートルの高さまで持ち上げられる。しかしこの値は、0,267 と 1,421 という数が不確かなため、あまり信用できない。ホルツマンは、自分が確信を持てない範囲の境として 343 と 429 を挙げている。

訳注：<i>c</i>′ は定圧比熱、<i>c</i> は定積比熱、<i>k</i> はその比 <i>c</i>′/<i>c</i>。<i>R</i> は今の気体定数（ここでは 1 kg の空気あたり、圧力を kg 重/m² で測った値）。式中の点「.」は掛け算の印。370 は今の単位で 1 キロカロリーあたり 370 kg 重·m（今の値はおよそ 427）。「1 Kil atmosphärischer」の Kil の後ろに点が無いのは誌面のまま。ドラロッシュとベラール（François Delaroche と Jacques Étienne Bérard）は 1813 年の気体の比熱の測定。デュロンの 1,421 は比熱比の値。

### ¶98　p.522–523

> Ferner können wir uns der für *die Dämpfe* entwickelten Gleichung (V<i>a</i>.) bedienen. Wenn wir diese auf den *Wasser*dampf anwenden wollen, so können wir die schon im Vorigen ausgeführten Bestimmungen benutzen, deren Resultat in der Gleichung (26.) ausgesprochen ist. Wählt man in dieser Gleichung z. B. die Temperatur 100°, und setzt für <i>p</i> den entsprechenden Druck von 1 Atm. = 10333 Kil., so kommt:
>
> (35.)　1/<i>A</i> = 257.(<i>s</i> − <i>σ</i>).
>
> Nimmt man nun mit *Gay-Lussac* das specifische Gewicht [p.523] des Wasserdampfes zu 0,6235 an, so erhält man <i>s</i> = 1,699 und somit:
>
> 1/<i>A</i> = 437,
>
> und ähnliche Werthe geben auch die in der Tabelle (I.) enthaltenen Zahlen, welche *Clapeyron* und *Thomson* aus der Gleichung (V.) für <i>C</i> berechnet haben. Betrachtet man diese nämlich als die den nebenstehenden Temperaturen entsprechenden Werthe von <i>A</i>(<i>a</i> + <i>t</i>), so erhält man für 1/<i>A</i> lauter Grössen, die zwischen 416 und 462 liegen.

次に、*蒸気*について導いた式 (V<i>a</i>.) を使うこともできる。これを*水*蒸気に当てはめるなら、前に行った決定を使える。その結果は式 (26.) に表されている。この式で、たとえば温度 100° を選び、<i>p</i> にそれに当たる圧力 1 気圧 = 10333 キログラムを入れると、

(35.)　1/<i>A</i> = 257 · (<i>s</i> − <i>σ</i>)

となる。ここでゲイ＝リュサックに従って水蒸気の比重を [p.523] 0,6235 とすると、<i>s</i> = 1,699 となり、したがって

1/<i>A</i> = 437

となる。表 (I.) に収めた、クラペイロンとトムソンが式 (V.) から <i>C</i> について計算した数も、似た値を与える。すなわち、それらの数を、横に並ぶ温度に対応する <i>A</i>(<i>a</i> + <i>t</i>) の値とみなすと、1/<i>A</i> について、どれも 416 から 462 のあいだにある量が得られる。

訳注：<i>s</i> は 1 kg の蒸気の体積（立方メートル）、<i>σ</i> は 1 kg の水の体積（0,001）。<i>C</i> はカルノーの関数（クラペイロンの記号）。

### ¶99　p.523

> Es ist indessen schon oben erwähnt, dass das von *Gay-Lussac* angegebene specifische Gewicht des Wasserdampfes für den Fall, wo der Dampf sich im Maximum der Dichte befindet, wahrscheinlich etwas zu klein ist, und dasselbe lässt sich auch von den meisten specifischen Gewichten sagen, welche gewöhnlich für die anderen Dämpfe angeführt werden, und man muss daher die daraus berechneten Werthe von 1/<i>A</i> meistens für etwas zu gross halten. Nimmt man für Wasserdampf die in der Tabelle (V.) gegebene Zahl 0,645, aus welcher <i>s</i> = 1,638 folgt, so erhält man:
>
> 1/<i>A</i> = 421,
>
> welcher Werth vielleicht auch noch etwas, aber wahrscheinlich nicht mehr viel zu gross ist. Wir können somit, da dieses Resultat vor dem aus der atmosphärischen Luft erhaltenen den Vorzug verdient, schliessen, *dass das Arbeitäquivalent für die Wärmeeinheit die Erhebung von etwas über 400 Kil. auf die Höhe von 1<sup>m</sup> sey.*

しかし、すでに上で述べたように、ゲイ＝リュサックが示した水蒸気の比重は、蒸気が、密度が最大の状態にある場合には、おそらく少し小さすぎる。同じことは、ほかの蒸気についてふつう挙げられる比重の多くにも言える。したがって、それらから計算した 1/<i>A</i> の値は、たいてい少し大きすぎると見なければならない。水蒸気について表 (V.) にある数 0,645 を取ると、そこから <i>s</i> = 1,638 となり、

1/<i>A</i> = 421

が得られる。この値も、まだいくらか大きすぎるかもしれないが、おそらくもう大きくは外れていない。この結果は大気の空気から得た結果よりも優先してよいので、われわれは次のように結論できる。*熱の単位に対する仕事の当量は、400 キログラムを少し超える重さを 1 メートルの高さまで持ち上げることである。*

訳注：表 (V.) の 0,645 は 100° での値。

### ¶100　p.523–524

> Mit diesem theoretischen Resultate kann man nun diejenigen vergleichen, welche *Joule* auf sehr verschiedene Weisen durch directe Beobachtungen gefunden hat. Dieser erhielt nämlich aus der durch Magnetoelektricität erzeugten Wärme:
>
> 1/<i>A</i> = 460 [注24],
>
> [p.524] aus der Wärmemenge, welche atmosphärische Luft bei ihrer Ausdehnung verschluckt:
>
> 1/<i>A</i> = 438 [注25],
>
> und als Mittel aus sehr vielen Versuchen, bei welchen die durch Reibung von Wasser, von Quecksilber und von Gusseisen erregte Wärme beobachtet wurde:
>
> 1/<i>A</i> = 425 [注26].

この理論上の結果を、ジュールがまったく異なるいくつもの方法で、直接の観測から見いだした結果と比べることができる。ジュールは、磁気電気によって生み出された熱から

1/<i>A</i> = 460 [注24]

を、[p.524] 大気の空気が膨張するときに吸い込む熱量から

1/<i>A</i> = 438 [注25]

を、そして、水・水銀・鋳鉄の摩擦で生じた熱を観測した非常に多くの実験の平均として

1/<i>A</i> = 425 [注26]

を得た。

訳注：ジュール（James Prescott Joule, 1818–1889）。「磁気電気」（Magnetoelektricität）は、磁石の中で回したコイルに起こる電流（今の電磁誘導）のこと。

### ¶101　p.524

> Die Uebereinstimmung dieser drei Zahlen unter einander trotz der Schwierigkeit der Versuche lässt wohl keinen Zweifel mehr an der Richtigkeit des Grundsatzes über die Aequivalenz von Wärme und Arbeit, und die Uebereinstimmung derselben mit der Zahl 421 bestätigt in gleicher Weise die Richtigkeit des Carnot'schen Grundsatzes, in der Form, welche er durch die Verbindung mit dem ersteren Grundsatze angenommen hat.

実験が難しいにもかかわらず、この三つの数が互いに合っていることは、熱と仕事の等価についての原則が正しいことに、もはや疑いを残さないだろう。そしてこれらの数が 421 という数と合っていることは、同じように、カルノーの原則が正しいことを確かめる。ただしそれは、第一の原則と結び付けられて得た形での、カルノーの原則である。

訳注：「第一の原則と結び付けられて得た形」とは、熱がすべて保存されるという熱素の前提を外し、熱と仕事の等価と両立させたカルノーの原則のこと（今の第二法則の始まりに当たる）。誌面ではこの段のあとに区切りの線があり、次の論文「III. Ueber den Wassergehalt des krystallisirten Cholesterins …; von W. Heintz.」が始まる。クラウジウスの論文はここで終わる。

### 注1　p.368

> *Réflexion sur la puissance motrice du feu, et sur les machines propre à déveloper cette puissance, par S. Carnot. Paris* 1824. Ich habe mir dieses Werk selbst nicht verschaffen können, sondern kenne es nur aus den Bearbeitungen von *Clapeyron* und *Thomson*, und aus der letzteren sind auch die weiter unten angeführten Stellen entnommen.

S. カルノー『火の動力、およびこの力を発生させるのに適した機関についての考察』パリ、1824 年。私はこの著作そのものを手に入れることができず、クラペイロンとトムソンの論述を通してしか知らない。下に引いた箇所も、後者（トムソン）から取った。

訳注：書名の原題は Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance。誌面の Réflexion（s が無い）・propre（s が無い）・déveloper（p が一つ）は誤植と見て、直さずに置く。S. Carnot は Sadi Carnot（1796–1832）。書名と著者名は誌面で斜体。

### 注2　p.368

> *Journ. de l'école polytechnique T. XIX.* (1834) und Pogg. Ann. Bd. LIX.

『理工科学校雑誌』第 XIX 巻（1834 年）、およびポッゲンドルフの『年報』第 LIX 巻。

訳注：クラペイロン（Émile Clapeyron, 1799–1864）の「熱の動力についての論文」（Mémoire sur la puissance motrice de la chaleur）。二次資料（[英語版 Wikipedia の Clapeyron の項](https://en.wikipedia.org/wiki/%C3%89mile_Clapeyron)と、[DSB の Clapeyron の項](https://mathshistory.st-andrews.ac.uk/DSB/Clapeyron.pdf)）では『理工科学校雑誌』第 23 冊・第 XIV 巻（1834）、153–190 頁とされる。誌面の「T. XIX」は XIV の誤りと見られるが、原誌の巻は見ていないので、誌面のまま置く。『年報』第 LIX 巻（1843）は独訳で、[ヘルムホルツ『力の保存について』](helmholtz-erhaltung-der-kraft-ja.html)の注1 も同じ巻（446 頁・566 頁）を引く。

### 注3　p.370

> Ueber die Wärme und Elasticität der Gase und Dämpfe; von C. *Holzmann*. Mannheim 1845; auch *Pogg. Ann.* Bd. 72<i>a</i>.

『気体と蒸気の熱と弾性について』C. ホルツマン、マンハイム、1845 年。ポッゲンドルフの『年報』第 72<i>a</i> 巻にも。

訳注：注では Holzmann、本文では Holtzmann と綴りが違う。本人の綴りは Holtzmann なので、注の Holzmann は誤植と見て直さずに置く。「Bd. 72<i>a</i>」は誌面のまま（<i>a</i> は斜体）。『年報』の補巻（Ergänzungsband）を指すと推測するが、確かめていない。

### 注4　p.370

> Ann. der Chem. und Pharm. von *Wöhler* und *Liebig* Bd. XLII. S. 239.

ヴェーラーとリービッヒの『化学・薬学年報』第 XLII 巻、239 頁。

訳注：マイヤーの「無生物界の力についての考察」（1842）。本文の「Meyer」は Mayer の誤植と見る（¶6 の訳注）。

### 注5　p.371

> *Transact. of the Royal Soc. of Edinb. V. XVI.*

『エディンバラ王立協会紀要』第 XVI 巻。

訳注：W. Thomson, "An Account of Carnot's Theory of the Motive Power of Heat; with Numerical Results deduced from Regnault's Experiments on Steam" と見られる（推測）。同じ題の要旨は *Proceedings of the Royal Society of Edinburgh* 2, pp.198–204 にある（[doi:10.1017/s0370164600036348](https://doi.org/10.1017/s0370164600036348)・Crossref で照らした）。紀要（Transactions）第 XVI 巻の頁は確かめていない。

### 注6　p.375–376

> Man darf hiergegen nicht einwenden, dass das Wasser bei <i>t</i><sub>1</sub> eine geringere Cohäsion habe, als bei <i>t</i><sub>0</sub>, also zu ihrer Ueberwindung eine geringere Arbeit nöthig sey. Es liegt nämlich auch schon in der Verringerung [p.376] der Cohäsion eine gewisse Arbeit, die, während das Wasser als solches sich erwärmt, geleistet wird, und diese muss man zu der bei der Verdampfung selbst geleisteten hinzurechnen. Daraus folgt zugleich, dass von der Wärmemenge, welche das Wasser bei seiner Erwärmung von Aussen empfängt, nur ein Theil als freie Wärme zu betrachten ist, während der andere zur Verringerung der Cohäsion verbraucht wird. Mit dieser Ansicht steht auch der Umstand im Einklange, dass das Wasser eine so viel grössere specifische Wärme hat als das Eis, und wahrscheinlich auch als der Dampf.

これに対して、水は <i>t</i><sub>1</sub> では <i>t</i><sub>0</sub> のときより凝集力が小さく、したがってそれに打ち勝つのに要る仕事も小さい、と反論してはならない。凝集力が減る [p.376] こと自体の中に、すでにある仕事が含まれている。それは水が水のまま温まるあいだになされる仕事であり、蒸発そのもののときになされる仕事に足し合わせなければならない。そこから同時に、水が温まるときに外から受け取る熱量のうち、自由な熱とみなすべきなのは一部だけで、残りは凝集力を減らすのに消費される、ということが出てくる。水の比熱が氷よりずっと大きく、おそらく蒸気よりも大きい、という事情も、この見方と合っている。

訳注：注は p.375 の下で始まり、p.376 の下で終わる。頁は Verrin-gerung の語の中で変わるので、語をつないで後ろに [p.376] を置いた。

### 注7　p.377

> Dieses Gesetz soll im Folgenden immer kurz als das M. und G. Gesetz, und das *Mariotte*'sche Gesetz allein als das M. Gesetz bezeichnet werden.

この法則を、以下ではいつも短く「M. und G. の法則」と呼び、マリオットの法則だけを「M. の法則」と呼ぶ。

訳注：訳では略さず「マリオットとゲイ＝リュサックの法則」「マリオットの法則」と訳す。

### 注8　p.390

> *Mém. de l'Acad. T. XXI*, das 9te und 10te Mémoire.

『アカデミー紀要』第 21 巻、第 9 と第 10 の論文。

訳注：ルニョーの水蒸気の測定の報告で、パリの科学アカデミーの紀要（Mémoires de l'Académie des sciences, t. 21, 1847）に載る。

### 注9　p.391

> *Traité des locomotives II<sup>e</sup> édition* und *Théorie des machines à vapeur II<sup>e</sup> éd.*

『機関車論』第 2 版、および『蒸気機関の理論』第 2 版。

訳注：どちらもパンブールの著書。

### 注10　p.395

> *Ann. de chim. et de phys. XLI.* und *Pogg. Ann. XVI.*

『化学・物理学年報』第 41 巻、およびポッゲンドルフの『年報』第 16 巻。

訳注：デュロンの気体の比熱の論文（Annales de chimie et de physique 41, 1829）とその独訳。

### 注11　p.395

> *Traité de mécanique II<sup>e</sup> éd. T. II, p.* 646.

『力学概論』第 2 版、第 2 巻、646 頁。

訳注：ポアソンの著書。

### 注12　p.396

> *Traité de méc. II, p.* 647.

『力学概論』第 2 巻、647 頁。

### 注13　p.500

> 1) Zu berichtigen ist:
> S. 274 Z. 6 l. nicht nöthig st. nöthig,
> S. 506 Z. 8 l. (<i>dQ</i>/<i>dv</i>) st. <i>dQ</i>/<i>dv</i>.

1) 次のとおり正す。
274 頁 6 行目：「nöthig（要る）」を「nicht nöthig（要らない）」と読む。
506 頁 8 行目：<i>dQ</i>/<i>dv</i> を (<i>dQ</i>/<i>dv</i>) と読む。

訳注：正誤表の脚注。l. は lies（読め）、st. は statt（の代わりに）の略。「S. 274」は誌面のとおり置いた。374 頁の誤り：この論文は 368 頁から始まり、374 頁の 6 行目は「nöthig, dass zuletzt …」で始まる（画像で確かめた）。前の行の終わりの「Es ist aber」とつないで「Es ist aber nicht nöthig, dass …」と正す所で、第 I 節の訳はすでに nicht を補って訳している。506 頁 8 行目は ¶15 の (9.) の式の行に当たる。

### 注14　p.510

> *Mém. de l'Acad. de l'Inst. de France T. XXI.* (1847).

『フランス学士院 科学アカデミー紀要』第 21 巻（1847）。

訳注：ルニョーの大きな論文集（蒸気機関にかかわる諸数値の測定）を収めた巻。

### 注15　p.510

> A. a. O. *Mém. IX* auch Pogg. Ann. Bd. 78.

同上、第 9 論文。ポッゲンドルフの『年報』第 78 巻にも載る。

### 注16　p.510

> A. a. O. *Mém. X.*

同上、第 10 論文。

### 注17　p.510

> *Regnault* hat bei dem grössten Theile seiner Versuche nicht sowohl die *latent* werdende Wärme bei der Verdampfung, als vielmehr die beim Niederschlagen des Dampfes *frei* werdende Wärme beobachtet, und es kann daher, nachdem oben gezeigt ist, dass, wenn der Grundsatz über die Aequivalenz von Wärme und Arbeit richtig ist, die Wärmemenge, welche ein Dampfquantum beim Niederschlagen abgiebt, nicht immer dieselbe zu seyn braucht, wie die, welche es früher bei seiner Bildung verschluckt hat, die Frage entstehen, ob nicht auch bei den *Regnault*'schen Versuchen solche Unterschiede eingetreten seyen, so dass die angegebene Formel für <i>r</i> dadurch unzuverlässig werde. Ich glaube indessen, dass dieses verneint werden kann, indem *Regnault* es so eingerichtet hat, dass das Niederschlagen des Dampfes unter demselben Drucke geschehen ist, wie seine Entstehung, d. h. nahe unter dem Drucke, welcher der zugleich beobachteten Temperatur als Maximum entsprach, und in diesem Falle musste beim Niederschlagen eben so viel Wärme erzeugt werden, wie bei der Entstehung verbraucht wurde.

ルニョーは実験の大部分で、蒸発のときに*潜熱となる*熱を観測したのではなく、むしろ蒸気が凝結するときに*自由になる*熱を観測した。ところで上で示したように、熱と仕事の等価の原則が正しいなら、ある量の蒸気が凝結のときに出す熱量は、それが前にできるときに吸い込んだ熱量と、いつも同じである必要はない。そこで、ルニョーの実験でもそうした違いが生じていて、そのせいで上に示した <i>r</i> の式が当てにならなくなっているのではないか、という問いが出うる。しかし私は、これは否定できると考える。ルニョーは、蒸気の凝結が、蒸気ができたときと同じ圧力のもとで、すなわち、同時に観測した温度に最大として対応する圧力の近くで起こるように実験を組んでいた。この場合には、凝結のときに、できるときに消費されたのとちょうど同じだけの熱が生み出されたはずである。

訳注：誌面の「angegebene」は、e の字がかすれて ang·gebene のように見えるが、angegebene と起こした。「同時に観測した温度に最大として対応する圧力」は、その温度での飽和蒸気の圧力のこと。「上で示した」は、この論文の前の部分（熱と仕事の等価から、熱量が経路によることを論じた所）を指すと思われる（推測）。

### 注18　p.511

> A. a. O. *Mém. VIII.*

同上、第 8 論文。

### 注19　p.511

> Es sind in dieser Columne statt der durch die Curve unmittelbar gegebenen und von *Regnault* angeführten *Logarithmen*, die dazu gehörigen *Zahlen* mitgetheilt, um sie besser mit den Werthen der vorhergehenden Columne vergleichen zu können.

この列には、曲線がじかに与え、ルニョーが挙げている*対数*の代わりに、それに当たる*数*そのものを載せた。前の列の値と比べやすくするためである。

### 注20　p.516

> *Mém. de l'Acad. T. XXI, Mém. I.*

『紀要』第 21 巻、第 1 論文。

### 注21　p.517

> A. a. O. *Mém. VI.*

同上、第 6 論文。

### 注22　p.519

> *Ann. de chim. et de phys.* III<sup>e</sup> *Sér. T. XV, p.* 148.)

『化学物理学年報』第 3 集 第 15 巻 148 頁。

訳注：閉じ括弧「)」だけがあるのは誌面のまま。

### 注23　p.519

> A. a. O. S. 158 ff.

同書 158 頁以下。

### 注24　p.523

> *Phil. Mag. XXIII p.* 441. Die in englischen Maassen gegebene Zahl ist auf französische Maasse reducirt.

『フィロソフィカル・マガジン』第 23 巻 441 頁。英国の単位で与えられた数を、フランスの単位に直した。

訳注：J. P. Joule, "On the calorific effects of magneto-electricity, and on the mechanical value of heat", *Philosophical Magazine* 23 (1843)。三回に分けて載り、441 頁は三回目（pp.435–443・[doi:10.1080/14786444308644766](https://doi.org/10.1080/14786444308644766)）に入る（Crossref で照らした。記事の中身は見ていない）。

### 注25　p.524

> A. a. O. XXVI. p. 381.

同誌 第 26 巻 381 頁。

訳注：J. P. Joule, "On the changes of temperature produced by the rarefaction and condensation of air", *Philosophical Magazine* 26 (1845), pp.369–383（[doi:10.1080/14786444508645153](https://doi.org/10.1080/14786444508645153)）。381 頁はこの論文に入る（Crossref で照らした。記事の中身は見ていない）。

### 注26　p.524

> A. a. O. XXXV. p. 534.

同誌 第 35 巻 534 頁。

訳注：第 35 巻 534 頁の記事は、Crossref では見つけられず、確かめていない。前の二つの注と同じくジュールの数を引いた所と見られるが、どの記事かは分からない。p.524 の脚注 3)（J. f. pract. Chem. Bd. 16, S. 37.）は次のハインツの論文のもので、ここには入れない。
