# Über die Erhaltung der Kraft（1847）— 原文（独語）と日本語訳

- 原典：H. Helmholtz, *Über die Erhaltung der Kraft, eine physikalische Abhandlung, vorgetragen in der Sitzung der physikalischen Gesellschaft zu Berlin am 23sten Juli 1847*, Berlin: Druck und Verlag von G. Reimer, 1847（本文 72 頁と正誤）。著者はドイツの生理学者・物理学者（Hermann Helmholtz・1821–1894。のちに von Helmholtz）。1847 年 7 月 23 日にベルリンの物理学会で読んだ論を、同じ年に本として出した。
- 訳した範囲：全文（目次の章の題・序と I〜VI 章の本文・脚注 27・巻末の正誤）。一冊の本だが、一つの論文として書かれたものなので、全文を訳した。パースが「進化的な愛」（1893）の ¶20 で「The sublime discovery of the conservation of energy by Helmholtz in 1847」と書く。
- 原文：1847 年の版の写真複製（Bruxelles: Culture et Civilisation, 1966。頁をそのまま写したもので、組み直しではない）の走査、[Internet Archive `berdieerhaltung00berlgoog`](https://archive.org/details/berdieerhaltung00berlgoog)（University of Michigan の本。パブリックドメイン）に合わせた（2026-11-18・#175）。頁と画像の対応は p = n − 11（p.1 が `page/n12`、p.70 が `n81`）。この走査には p.71・p.72 が無いので、その二頁は同じ写真複製の別の走査 [`bub_gb_NXcLAAAAMAAJ`](https://archive.org/details/bub_gb_NXcLAAAAMAAJ)（`n76`・`n77`）で照らした。文字起こしが無いので、IA の OCR を下敷きに、読む役（Claude のサブエージェント）六つが全 72 頁の画像と一行ずつ照らして起こし、照らす役三つが段ごとに画像と照らし直した。式・記号・上付き下付きは画像から起こした（OCR はほとんど崩れていた）。
- 1889 年の再版（Ostwald's Klassiker der exakten Wissenschaften Nr. 1, Leipzig: W. Engelmann。[`berdieerhaltun00helmuoft`](https://archive.org/details/berdieerhaltun00helmuoft)）は組み直しで綴りも一部違うので、原文には使わず、つぶれて読みにくい記号（II 章の下付きのフラクトゥール 𝔞・𝔟・𝔡）の読みを裏づけるのにだけ使った。
- 直したのは次のとおり。綴りは誌面のとおり（Princip・Punct・Electricität・Drath など当時の綴り）。誌面の誤植（Enleitung・Voraussetzuug・Herleituug など）は直さずに置き、訳注に書いた。字間を空けた強調（隔字体）と斜体は `*…*` で示した（原文の人名の斜体も残した。訳では人名に印を付けていない）。式の変数は斜体で示した。誌面の脚注は頁ごとに `*)` で付いているので、通しの注1〜注27 にした。記号の右下の短い斜めの印（<i>t</i><sub>,</sub>・<i>t</i><sub>,,</sub>）は下付きのカンマで書いた。
- 式の書き方：誌面で分数として縦に組まれた式は、括弧と / で一行に書いた（例 (<i>m</i><i>q</i><sup>2</sup>)/2）。独立の行の式は原文でも訳でも独立の行に置き、式の番号（1)・2) など）は誌面のとおり残した。誌面の偏微分の d（弧の印を付けた当時の字体）は ∂ で書いた。
- 段の分け方：誌面の段落のとおり。章の題は、それぞれ一つの段にした（¶1 序・¶10 I・¶18 II・¶33 III・¶41 IV・¶55 V・¶83 VI・¶105 正誤）。
- **訳は Claude（AI）によるもの。** 2026-11-18 に訳した。英訳・日本語訳などの既にある訳を見ずに、独語の原文から付けた。読む役に原文の起こしと訳の案を出させ、照らす役に原文と画像・訳を段ごとに照らさせ、Claude がつないで入れた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（ヘルムホルツの表）でそろえた。`訳注：` の行は Claude の注。
- ヘルムホルツの Kraft は、今の「力」と「エネルギー」の両方にまたがる。この訳では訳し分けずに「力」とし、題も「力の保存について」とした。lebendige Kraft は「活力」（今の運動エネルギーに当たる）、Spannkraft は「緊張力」（今の位置エネルギーに当たる。引っぱる力の「張力」と分けるため）、電気の Spannung は「張り」とした。
- 段の見出しの頁は誌面の頁。段の途中で頁が変わるところは `[p.N]`。

### ¶1　p.1

> Einleitung.

序

### ¶2　p.1–2

> Vorliegende Abhandlung musste ihrem Hauptinhalte nach hauptsächlich für Physiker bestimmt werden, ich habe es daher vorgezogen, die Grundlagen derselben unabhängig von einer philosophischen Begründung rein in der Form einer physikalischen Voraussetzung hinzustellen, deren Folgerungen zu entwickeln, und dieselben in den verschiedenen Zweigen der Physik mit den erfahrungsmässigen Gesetzen der Naturerscheinungen zu vergleichen. Die Herleitung der aufgestellten Sätze kann von zwei Ausgangspuncten angegriffen werden, entweder von dem Satze, dass es nicht möglich sein könne, durch die Wirkungen irgend einer Combination von Naturkörpern auf einander in das Unbegrenzte Arbeitskraft zu gewinnen, oder von der Annahme, dass alle Wirkungen in der Natur zurückzuführen seien auf anziehende und abstossende Kräfte, deren Intensität nur von der Entfernung der auf einander wirkenden Puncte abhängt. Dass beide Sätze identisch sind, ist im Anfange der Abhandlung selbst gezeigt worden. Indessen haben dieselben noch eine wesentlichere Bedeutung für den letzten und eigent- [p.2] lichen Zweck der physikalischen Naturwissenschaften überhaupt, welchen ich in dieser abgesonderten Enleitung darzulegen versuchen werde.

この論文は、その主な内容からして、主に物理学者に向けたものにならざるをえなかった。そこで私は、その基礎を哲学的な基礎づけから切り離し、純粋に物理学上の前提という形で立て、そこから導かれることを展開し、それを物理学のさまざまな分野で、自然現象（Naturerscheinung）の経験上の法則と比べるほうを選んだ。ここに立てた命題は、二つの出発点のどちらからでも導くことができる。一つは、自然物体をどう組み合わせても、それらが互いに及ぼす作用によって仕事をする力（Arbeitskraft）を限りなく得ることはできない、という命題からである。もう一つは、自然のすべての作用は、引き合う力と押し返す力に帰着させられ、その力の強さ（Intensität）は互いに作用し合う点のあいだの距離だけで決まる、という仮定からである。この二つの命題が同じものであることは、論文の本文の初めで示した。しかし、この二つの命題は、物理的な自然科学全体の最後の、本来の目的にとって、さらに本質的な意味をもっている。その目的を、この独立させた序で述べてみたい。

訳注：「Enleitung」は誌面の誤植で、Einleitung（序）のこと。

### ¶3　p.2–3

> Aufgabe der genannten Wissenschaften ist es einmal, die Gesetze zu suchen, durch welche die einzelnen Vorgänge in der Natur auf allgemeine Regeln zurückgeleitet, und aus den letzteren wieder bestimmt werden können. Diese Regeln, z. B. das Gesetz der Brechung oder Zurückwerfung des Lichts, das von *Mariotte* und *Gay Lussac* für das Volum der Gasarten, sind offenbar nichts als allgemeine Gattungsbegriffe, durch welche sämmtliche dahin gehörige Erscheinungen umfasst werden. Die Aufsuchung derselben ist das Geschäft des experimentellen Theils unserer Wissenschaften. Der theoretische Theil derselben sucht dagegen, die unbekannten Ursachen der Vorgänge aus ihren sichtbaren Wirkungen zu finden; er sucht dieselben zu begreifen nach dem Gesetze der Causalität. Wir werden genöthigt und berechtigt zu diesem Geschäfte durch den Grundsatz, dass jede Veränderung in der Natur eine zureichende Ursache haben *müsse*. Die nächsten Ursachen, welche wir den Naturerscheinungen unterlegen, können selbst unveränderlich sein oder veränderlich; im letzteren Falle nöthigt uns derselbe Grundsatz nach anderen Ursachen wiederum dieser Veränderung zu suchen, und so fort, bis wir zuletzt zu letzten Ursachen gekommen sind, welche nach einem unveränderlichen Gesetz wirken, welche folglich zu jeder Zeit unter denselben äusseren Verhältnissen dieselbe Wirkung hervorbringen. Das endliche Ziel der theoretischen Naturwissenschaften ist also, die letzten unveränderlichen Ursachen der Vorgänge in der Natur aufzufinden. Ob nun wirklich alle Vorgänge auf solche zurück- [p.3] zuführen seien, ob also die Natur vollständig begreiflich sein müsse, oder ob es Veränderungen in ihr gebe, die sich dem Gesetze einer nothwendigen Causalität entziehen, die also in das Gebiet einer Spontaneität, Freiheit, fallen, ist hier nicht der Ort zu entscheiden; jedenfalls ist es klar, dass die Wissenschaft, deren Zweck es ist, die Natur zu begreifen, von der Voraussetzuug ihrer Begreiflichkeit ausgehen müsse, und dieser Voraussetzung gemäss schliessen und untersuchen, bis sie vielleicht durch unwiderlegliche Facta zur Anerkenntniss ihrer Schranken genöthigt sein sollte.

これらの学の務めは、一つには、法則を探すことである。法則によって、自然の個々の過程（Vorgang）は一般的な規則に帰着させられ、また逆にその規則から定められる。こうした規則、たとえば光の屈折や反射の法則、気体の体積についてのマリオットとゲイ＝リュサックの法則は、明らかに、そこに属するすべての現象をまとめる一般的な類の概念にほかならない。それを探し出すのは、われわれの学のうち実験の部分の仕事である。これに対して理論の部分は、過程の知られていない原因を、目に見えるその作用から見つけ出そうとする。理論の部分は、過程を因果性（Causalität）の法則にしたがって把握しようとする。われわれがこの仕事を強いられ、またそうしてよいとされるのは、自然のどの変化にも十分な原因がなければ*ならない*、という原則による。われわれが自然現象の下に置く最も近い原因は、それ自体変わらないこともあれば、変わることもある。変わる場合には、同じ原則によって、その変化の原因をさらに探すよう強いられ、こうして続け、ついには、変わらない法則にしたがって作用する、したがっていつでも同じ外の条件のもとで同じ作用を生む、最後の原因に行き着く。ゆえに理論的な自然科学の最終の目標は、自然の過程の、最後の変わらない原因を見つけ出すことである。では本当にすべての過程がそのような原因に帰着させられるのか、つまり自然は完全に把握できるものでなければならないのか、それとも自然の中には、必然的な因果性の法則を逃れ、したがって自発性、自由の領域に入る変化があるのか。それをここで決めるつもりはない。いずれにせよ明らかなのは、自然を把握することを目的とする学は、自然が把握できるという前提から出発し、この前提にしたがって推論し調べなければならない、ということである。反駁できない事実によって、自らの限界を認めるよう強いられることになるかもしれない、そのときまでは。

訳注：「müsse」は誌面で字間を空けた強調。
訳注：マリオットの法則は、今の言い方ではボイルの法則（温度一定で気体の体積は圧力に反比例する）に当たる。ゲイ＝リュサックの法則は、圧力一定での気体の体積と温度の関係を言う。
訳注：「Voraussetzuug」は誌面の誤植で、Voraussetzung（前提）のこと。

### ¶4　p.3–4

> Die Wissenschaft betrachtet die Gegenstände der Aussenwelt nach zweierlei Abstractionen: einmal ihrem blossen Dasein nach, abgesehen von ihren Wirkungen auf andere Gegenstände oder unsere Sinnesorgane; als solche bezeichnet sie dieselben als *Materie*. Das Dasein der Materie an sich ist uns also ein ruhiges, wirkungsloses; wir unterscheiden an ihr die räumliche Vertheilung und die Quantität (Masse), welche als ewig unveränderlich gesetzt wird. Qualitative Unterschiede dürfen wir der Materie an sich nicht zuschreiben, denn wenn wir von verschiedenartigen Materien sprechen, so setzen wir ihre Verschiedenheit immer nur in die Verschiedenheit ihrer Wirkungen d. h. in ihre Kräfte. Die Materie an sich kann deshalb auch keine andere Veränderung eingehen, als eine räumliche, d. h. Bewegung. Die Gegenstände der Natur sind aber nicht wirkungslos, ja wir kommen überhaupt zu ihrer Kenntniss nur durch die Wirkungen, welche von ihnen aus auf unsere Sinnesorgane erfolgen, indem wir aus diesen Wirkungen auf ein Wirkendes schliessen. Wenn wir also den Begriff der Materie in der Wirklichkeit anwenden wollen, so dürfen wir dies nur, indem wir durch eine zweite Abstraction demselben wiederum [p.4] hinzufügen, wovon wir vorher abstrahiren wollten, nämlich das Vermögen Wirkungen auszuüben, d. h. indem wir derselben Kräfte zuertheilen. Es ist einleuchtend, dass die Begriffe von Materie und Kraft in der Anwendung auf die Natur nie getrennt werden dürfen. Eine reine Materie wäre für die übrige Natur gleichgültig, weil sie nie eine Veränderung in dieser oder in unseren Sinnesorganen bedingen könnte; eine reine Kraft wäre etwas, was dasein sollte und doch wieder nicht dasein, weil wir das Daseiende Materie nennen. Ebenso fehlerhaft ist es, die Materie für etwas Wirkliches, die Kraft für einen blossen Begriff erklären zu wollen, dem nichts Wirkliches entspräche; beides sind vielmehr Abstractionen von dem Wirklichen, in ganz gleicher Art gebildet; wir können ja die Materie eben nur durch ihre Kräfte, nie an sich selbst, wahrnehmen.

学は、外界の対象を二通りの抽象によって見る。一つは、その単なる存在のほうから見ることで、ほかの対象やわれわれの感覚器官への作用は度外視する。そう見たものを、学は*物質*（Materie）と呼ぶ。ゆえに物質そのものの存在は、われわれにとって、静かな、作用のないものである。物質について、われわれは空間の中での分布と量（質量）とを区別する。この量は、永遠に変わらないものとして立てられる。物質そのものに質の違いを帰してはならない。種類の違う物質と言うとき、われわれはその違いを、いつも作用の違い、すなわちその力の違いにだけ置いているからである。ゆえに物質そのものは、空間の中での変化、すなわち運動のほかに、どんな変化も受けることができない。しかし自然の対象は作用のないものではない。それどころか、われわれが自然の対象を知るのは、そもそも、それがわれわれの感覚器官に及ぼす作用を通してだけであり、その作用から、作用するものを推論するのである。だから物質の概念を現実に当てはめようとするなら、そうしてよいのは、第二の抽象によって、先に抽象して除こうとしたもの、すなわち作用を及ぼす能力を、物質にもう一度加えるとき、つまり物質に力を割り当てるときだけである。物質の概念と力の概念が、自然に当てはめるときに決して切り離されてはならないことは明らかである。純粋な物質は、ほかの自然にとってどうでもよいものであろう。それは、ほかの自然にも、われわれの感覚器官にも、決して変化をもたらしえないからである。純粋な力は、存在するはずでありながら、やはり存在しないものであろう。われわれは存在するものを物質と呼ぶからである。同じように誤っているのは、物質を現実のものとし、力を、現実の何ものにも対応しない単なる概念だとすることである。どちらもむしろ、現実のものからの抽象であり、まったく同じ仕方で作られている。われわれは物質を、まさにその力を通してだけ知覚でき、物質そのものを知覚することは決してできないのだから。

訳注：「Materie」は誌面で字間を空けた強調。

### ¶5　p.4

> Wir haben oben gesehen, dass die Naturerscheinungen auf unveränderliche letzte Ursachen zurückgeführt werden sollen; diese Forderung gestaltet sich nun so, dass als letzte Ursachen der Zeit nach unveränderliche Kräfte gefunden werden sollen. Materien mit unveränderlichen Kräften (unvertilgbaren Qualitäten) haben wir in der Wissenschaft (chemische) Elemente genannt. Denken wir uns aber das Weltall zerlegt in Elemente mit unveränderlichen Qualitäten, so sind die einzigen noch möglichen Aenderungen in einem solchen System räumliche d. h. Bewegungen, und die äusseren Verhältnisse, durch welche die Wirkung der Kräfte modificirt wird, können nur noch räumliche sein, also die Kräfte nur Bewegungskräfte, abhängig in ihrer Wirkung nur von den räumlichen Verhältnissen.

先に見たように、自然現象は変わらない最後の原因に帰着させられるべきである。この要求は、ここで次の形をとる。最後の原因として、時間に関して変わらない力が見つけられるべきだ、と。変わらない力（消し去れない性質）をもつ物質を、学では（化学の）元素と呼んできた。しかし宇宙が、変わらない性質をもつ元素に分けられていると考えるなら、そのような系の中でなお起こりうる変化は、空間の中での変化、すなわち運動だけである。そして力の作用を変える外の条件も、空間の条件でしかありえない。したがって力は運動力（Bewegungskraft）だけであり、その作用は空間の条件だけで決まる。

### ¶6　p.4–5

> Also näher bestimmt: Die Naturerscheinungen sollen zurückgeführt werden auf Bewegungen von Materien mit [p.5] unveränderlichen Bewegungskräften, welche nur von den räumlichen Verhältnissen abhängig sind.

もっと詳しく定めれば、こうである。自然現象は、空間の条件だけで決まる変わらない運動力をもつ物質の、運動に帰着させられるべきである。

### ¶7　p.5

> Bewegung ist Aenderung der räumlichen Verhältnisse. Räumliche Verhältnisse sind nur möglich gegen abgegrenzte Raumgrössen, nicht gegen den unterschiedslosen leeren Raum. Bewegung kann deshalb in der Erfahrung nur vorkommen als Aenderung der räumlichen Verhältnisse wenigstens zweier materieller Körper gegen einander; Bewegungskraft, als ihre Ursache, also auch immer nur erschlossen werden für das Verhältniss mindestens zweier Körper gegen einander, sie ist also zu definiren als das Bestreben zweier Massen, ihre gegenseitige Lage zu wechseln. Die Kraft aber, welche zwei ganze Massen gegen einander ausüben, muss aufgelöst werden in die Kräfte aller ihrer Theile gegen einander; die Mechanik geht deshalb zurück auf die Kräfte der materiellen Puncte, d. h. der Puncte des mit Materie gefüllten Raums. Puncte haben aber keine räumliche Beziehung gegen einander als ihre Entfernung, denn die Richtung ihrer Verbindungslinie kann nur im Verhältniss gegen mindestens noch zwei andere Puncte bestimmt werden. Eine Bewegungskraft, welche sie gegen einander ausüben, kann deshalb auch nur Ursache zur Aenderung ihrer Entfernung sein, d. h. eine anziehende oder abstossende. Dies folgt auch sogleich aus dem Satz vom zureichenden Grunde. Die Kräfte, welche zwei Massen auf einander ausüben, müssen nothwendig ihrer Grösse und Richtung nach bestimmt sein, sobald die Lage der Massen vollständig gegeben ist. Durch zwei Puncte ist aber nur eine einzige Richtung vollständig gegeben, nämlich die ihrer Verbindungslinie; folglich müssen die Kräfte, welche sie gegen einander ausüben, nach dieser Linie gerichtet sein, und ihre Intensität kann nur von der Entfernung abhängen.

運動とは、空間の関係の変化である。空間の関係は、区切られた空間の大きさに対してだけありうるのであって、区別のない空っぽの空間に対してはありえない。ゆえに運動は、経験の中では、少なくとも二つの物体のあいだの空間の関係の変化としてしか現れえない。したがって運動の原因である運動力も、いつも少なくとも二つの物体のあいだの関係についてしか推論できない。ゆえに運動力は、二つの質量が互いの位置を変えようとする傾向、と定義すべきである。ところで、二つの質量の全体が互いに及ぼす力は、それぞれのすべての部分が互いに及ぼす力に分解しなければならない。ゆえに力学は、質点（materieller Punct）、すなわち物質で満たされた空間の点の力にまでさかのぼる。しかし点どうしには、距離のほかに空間の関係がない。二点を結ぶ線の向きは、少なくともさらに二つの点との関係においてしか定められないからである。ゆえに点どうしが互いに及ぼす運動力も、その距離を変える原因でしかありえない。すなわち、引き合う力か押し返す力である。このことは、十分な根拠の命題（充足理由律）からもすぐに出てくる。二つの質量が互いに及ぼす力は、質量の位置が完全に与えられれば、大きさと向きが必ず定まっていなければならない。しかし二つの点によって完全に与えられる向きは一つしかない。すなわち、二点を結ぶ線の向きである。したがって二点が互いに及ぼす力は、この線に沿って向いていなければならず、その強さは距離だけで決まるほかない。

### ¶8　p.6

> Es bestimmt sich also endlich die Aufgabe der physikalischen Naturwissenschaften dahin, die Naturerscheinungen zurückzuführen auf unveränderliche, anziehende und abstossende Kräfte, deren Intensität von der Entfernung abhängt. Die Lösbarkeit dieser Aufgabe ist zugleich die Bedingung der vollständigen Begreiflichkeit der Natur. Die rechnende Mechanik hat bis jetzt diese Beschränkung für den Begriff der Bewegungskraft nicht angenommen, einmal weil sie sich über den Ursprung ihrer Grundsätze nicht klar war, und dann, weil es ihr darauf ankommt, auch den Erfolg zusammengesetzter Bewegungskräfte berechnen zu können in solchen Fällen, wo die Auflösung derselben in einfache noch nicht gelungen ist. Doch gilt ein grosser Theil ihrer allgemeinen Principien der Bewegung zusammengesetzter Systeme von Massen nur für den Fall, dass dieselben durch unveränderliche anziehende oder abstossende Kräfte auf einander wirken; nämlich das Princip der virtuellen Geschwindigkeiten, das von der Erhaltung der Bewegung des Schwerpuncts, von der Erhaltung der Hauptrotationsebene und des Moments der Rotation freier Systeme, das von der Erhaltung der lebendigen Kraft. Für irdische Verhältnisse finden von diesen Principien hauptsächlich nur das erste und letzte Anwendung, weil sich die anderen nur auf vollkommen freie Systeme beziehen, das erste ist wieder, wie wir zeigen werden, ein specieller Fall des letzteren, welches deshalb als die allgemeinste und wichtigste Folgerung der gemachten Herleitung erscheint.

こうして最後に、物理的な自然科学の務めは次のように定まる。自然現象を、強さが距離で決まる、変わらない引き合う力と押し返す力に帰着させることである。この務めが解けることは、同時に、自然が完全に把握できることの条件である。計算する力学は、これまで運動力の概念にこの制限を受け入れてこなかった。一つには、力学が自らの原則の由来をはっきりとはつかんでいなかったからであり、もう一つには、合成された運動力を単純な力に分解することがまだできていない場合にも、その結果を計算できることが、力学には大事だからである。それでも、質量が組み合わさった系の運動についての力学の一般原理の多くは、質量が変わらない引き合う力か押し返す力によって互いに作用する場合にだけ成り立つ。すなわち、仮想速度の原理、重心の運動の保存の原理、自由な系の主回転面と回転のモーメントの保存の原理、活力（lebendige Kraft）の保存の原理である。地上の条件では、これらの原理のうち主に最初のものと最後のものだけが使われる。ほかのものは、まったく自由な系にしか関わらないからである。そして最初のものは、あとで示すように、最後のものの特別な場合である。ゆえに最後のもの（活力の保存の原理）が、ここで行った導出の、最も一般的で最も重要な帰結として現れる。

訳注：仮想速度の原理は、今の言い方では仮想仕事の原理に当たる。
訳注：重心の運動の保存は今の運動量の保存に、主回転面と回転のモーメントの保存は今の角運動量の保存に当たる。

### ¶9　p.6–7

> Die theoretische Naturwissenschaft wird daher, wenn sie nicht auf halbem Wege des Begreifens stehen bleiben will, ihre Ansichten mit der aufgestellten Forderung über die Natur der einfachen Kräfte und deren Folgerungen in [p.7] Einklang setzen müssen. Ihr Geschäft wird vollendet sein, wenn einmal die Zurückleitung der Erscheinungen auf einfache Kräfte vollendet ist, und zugleich nachgewiesen werden kann, dass die gegebene die einzig mögliche Zurückleitung sei, welche die Erscheinungen zulassen. Dann wäre dieselbe als die nothwendige Begriffsform der Naturauffassung erwiesen, es würde derselben alsdann also auch objective Wahrheit zuzuschreiben sein.

ゆえに理論的な自然科学は、把握の道の半ばで立ち止まるつもりがないなら、その見解を、単純な力の性質について立てた要求と、そこから導かれることとに合わせなければならない。その仕事が完成するのは、現象を単純な力に帰着させることが一度やり遂げられ、同時に、与えた帰着が、現象の許す唯一可能な帰着であると示せたときである。そのときには、その帰着は、自然を捉えるための必然的な概念の形式であると証明されたことになり、したがってそれに客観的な真理を帰してよいことになろう。

### ¶10　p.7

> I. Das Princip von der Erhaltung der lebendigen Kraft.

I. 活力の保存の原理

### ¶11　p.7–8

> Wir gehen aus von der Annahme, dass es unmöglich sei, durch irgend eine Combination von Naturkörpern bewegende Kraft fortdauernd aus nichts zu erschaffen. Aus diesem Satze haben schon *Carnot* und *Clapeyron* [注1] eine Reihe theils bekannter, theils noch nicht experimentell nachgewiesener Gesetze über die specifische und latente Wärme der verschiedensten Naturkörper theoretisch hergeleitet. Zweck der vorliegenden Abhandlung ist es, ganz in derselben Weise das genannte Princip in allen Zweigen der Physik durchzuführen, theils um die Anwendbarkeit desselben nachzuweisen in allen denjenigen Fällen, wo die Gesetze der Erscheinungen schon hinreichend erforscht sind, theils um mit seiner Hülfe, unterstützt durch die vielfältige Analogie der bekannteren Fälle auf die Gesetze der bisher nicht [p.8] vollständig untersuchten weiterzuschliessen, und dadurch dem Experiment einen Leitfaden an die Hand zu geben.

われわれは、自然物体をどう組み合わせても、動かす力を無から絶えず作り出すことはできない、という仮定から出発する。この命題から、すでにカルノーとクラペイロン [注1] が、さまざまな自然物体の比熱と潜熱について、一部は既に知られ、一部はまだ実験で確かめられていない一連の法則を、理論的に導いている。この論文の目的は、まったく同じやり方で、この原理（Princip）を物理学のすべての分野に通すことである。一つには、現象の法則がすでに十分に調べられているすべての場合に、この原理が当てはまることを示すためであり、もう一つには、この原理の助けを借り、よく知られた場合とのさまざまな類比に支えられて、これまで十分に調べられていない場合の法則へと推し進め、それによって実験に手引きを与えるためである。

### ¶12　p.8

> Das erwähnte Princip kann folgendermassen dargestellt werden: Denken wir uns ein System von Naturkörpern, welche in gewissen räumlichen Verhältnissen zu einander stehen, und unter dem Einfluss ihrer gegenseitigen Kräfte in Bewegung gerathen, bis sie in bestimmte andere Lagen gekommen sind: so können wir ihre gewonnenen Geschwindigkeiten als eine gewisse mechanische Arbeit betrachten, und in solche verwandeln. Wollen wir nun dieselben Kräfte zum zweiten Male wirksam werden lassen, um dieselbe Arbeit noch einmal zu gewinnen, so müssen wir die Körper auf irgend eine Weise in die anfänglichen Bedingungen durch Anwendung anderer uns zu Gebote stehender Kräfte zurückversetzen; wir werden dazu also eine gewisse Arbeitsgrösse der letzteren wieder verbrauchen. In diesem Falle fordert nun unser Princip, dass die Arbeitsgrösse, welche gewonnen wird, wenn die Körper des Systems aus der Anfangslage in die zweite, und verloren wird, wenn sie aus der zweiten in die erste übergehen, stets dieselbe sei, welches auch die Art, der Weg oder die Geschwindigkeit dieses Uebergangs sein mögen. Denn wäre dieselbe auf irgend einem Wege grösser als auf dem andern, so würden wir den ersteren zur Gewinnung der Arbeit benutzen können, den zweiten zur Zurückführung, zu welcher wir einen Theil der so eben gewonnenen Arbeit anwenden könnten, und würden so ins Unbestimmte mechanische Kraft gewinnen, ein *perpetuum mobile* gebaut haben, welches nicht nur sich selbst in Bewegung erhielte, sondern auch noch im Stande wäre, nach aussen Kraft abzugeben.

この原理は次のように言い表せる。互いにある空間の関係にある自然物体の系を考え、それが互いの力の影響のもとで運動を始め、定まった別の位置に来たとしよう。そのとき、物体が得た速度を、ある量の力学的な仕事（Arbeit）とみなし、仕事に変えることができる。さて、同じ仕事をもう一度得るために、同じ力をもう一度働かせようとするなら、われわれの使えるほかの力を用いて、なんらかの仕方で物体を初めの条件に戻さなければならない。したがって、そのためには、ほかの力のある仕事の量（Arbeitsgrösse）をまた使うことになる。この場合にわれわれの原理が求めるのは、系の物体が初めの位置から第二の位置へ移るときに得られる仕事の量と、第二の位置から初めの位置へ移るときに失われる仕事の量とが、移り方の種類、道筋、速度がどうであれ、いつも同じであることである。もしある道筋での仕事の量がほかの道筋より大きければ、前者を仕事を得るのに使い、後者を元に戻すのに使い、戻すには今得た仕事の一部を充てればよいことになる。こうして力学的な力を限りなく得て、永久機関（*perpetuum mobile*）を作ったことになるだろう。それは自分の運動を保つだけでなく、さらに外へ力を渡すこともできるものである。

### ¶13　p.8–10

> Suchen wir nach dem mathematischen Ausdruck dieses [p.9] Princips, so finden wir ihn in dem bekannten Gesetz von der Erhaltung der lebendigen Kraft. Die Arbeitsgrösse, welche gewonnen und verbraucht wird, kann bekanntlich ausgedrückt werden als ein auf eine bestimmte Höhe <i>h</i> gehobenes Gewicht <i>m</i>; sie ist dann <i>m</i><i>g</i><i>h</i>, wo <i>g</i> die Intensität der Schwerkraft. Um senkrecht frei in die Höhe <i>h</i> emporzusteigen braucht der Körper <i>m</i> die Geschwindigkeit <i>v</i> = √(2<i>g</i><i>h</i>); und erlangt dieselbe wieder beim Herabfallen. Es ist also ½<i>m</i><i>v</i><sup>2</sup> = <i>m</i><i>g</i><i>h</i>; folglich kann die Hälfte des Products <i>m</i><i>v</i><sup>2</sup>, welches in der Mechanik bekanntlich „die Quantität der lebendigen Kraft des Körpers <i>m</i>“ genannt wird, auch an die Stelle des Maasses der Arbeitsgrösse gesetzt werden. Der besseren Uebereinstimmung wegen mit der jetzt gebräuchlichen Art, die Intensität der Kräfte zu messen, schlage ich vor, gleich die Grösse ½<i>m</i><i>v</i><sup>2</sup> als Quantität der lebendigen Kraft zu bezeichnen, wodurch sie identisch wird mit dem Maasse der Arbeitsgrösse. Für die bisherige Anwendung des Begriffs der lebendigen Kraft, der nur auf das besprochene Princip beschränkt war, ist diese Abänderung ohne Bedeutung, während sie uns im Folgenden wesentliche Vortheile gewähren wird. Das Princip von der Erhaltung der lebendigen Kraft sagt nun bekanntlich aus: Wenn sich eine beliebige Zahl beweglicher Massenpuncte nur unter dem Einfluss solcher Kräfte bewegt, welche sie selbst gegen einander ausüben, oder welche gegen feste Centren gerichtet sind: so ist die Summe der lebendigen Kräfte aller zusammen genommen zu allen Zeitpuncten dieselbe, in welchen alle Puncte dieselben relativen Lagen gegen einander und gegen die etwa vorhandenen festen Centren einnehmen, wie auch ihre Bahnen und Geschwindigkeiten in der Zwischenzeit gewesen sein mögen. Denken wir die lebendigen [p.10] Kräfte angewendet, um die Theile des Systems, oder ihnen äquivalente Massen auf gewisse Höhen zu heben, so folgt aus dem, was wir eben gezeigt haben, dass auch die so dargestellten Arbeitsgrössen unter den genannten Bedingungen gleich sein müssen. Dieses Princip gilt aber nicht für alle möglichen Arten von Kräften; es wird in der Mechanik gewöhnlich angeknüpft an das Princip der virtuellen Geschwindigkeiten, und dies kann nur für materielle Puncte mit anziehenden und abstossenden Kräften bewiesen werden. Wir wollen hier zunächst zeigen, dass das Princip von der Erhaltung der lebendigen Kräfte ganz allein da gilt, wo die wirkenden Kräfte sich auflösen lassen in Kräfte materieller Puncte, welche in der Richtung der Verbindungslinie wirken, und deren Intensität nur von der Entfernung abhängt; in der Mechanik sind solche Kräfte gewöhnlich Centralkräfte genannt worden. Es folgt daraus wiederum auch rückwärts, dass bei allen Wirkungen von Naturkörpern aufeinander, wo das besprochene Princip ganz allgemein auch auf alle kleinsten Theilchen dieser Körper angewendet werden kann, als einfachste Grundkräfte solche Centralkräfte anzunehmen seien.

この原理の数学的な表現を探すと、よく知られた活力の保存の法則に見つかる。得られ、また使われる仕事の量は、よく知られているように、ある高さ <i>h</i> に持ち上げた重さ <i>m</i> として表せる。そのとき仕事の量は <i>m</i><i>g</i><i>h</i> である。ここで <i>g</i> は重力の強さである。物体 <i>m</i> が高さ <i>h</i> まで垂直に自由に昇るには、速度 <i>v</i> = √(2<i>g</i><i>h</i>) が要り、落ちて戻るときに同じ速度をふたたび得る。ゆえに ½<i>m</i><i>v</i><sup>2</sup> = <i>m</i><i>g</i><i>h</i> である。したがって、力学でよく知られているように「物体 <i>m</i> の活力の量」と呼ばれる積 <i>m</i><i>v</i><sup>2</sup> の半分を、仕事の量の尺度の代わりに置くこともできる。いま一般に用いられている力の強さの測り方とよりよく合うように、私は、はじめから量 ½<i>m</i><i>v</i><sup>2</sup> を活力の量と呼ぶことを提案する。そうすれば活力の量は仕事の量の尺度と同じものになる。活力の概念はこれまで、いま述べた原理にだけ限って使われてきたので、その使い方にとってこの変更は意味をもたない。一方、以下では、この変更が本質的な利点をもたらす。さて活力の保存の原理は、よく知られているように、次のことを言う。任意の数の動きうる質点が、それらが互いに及ぼし合う力か、固定された中心に向かう力の影響だけを受けて動くなら、すべての点が互いに対して、またあるかもしれない固定された中心に対して同じ相対的な位置をとるどの時点でも、すべての点の活力を合わせた和は同じである。その間の軌道や速度がどうであったとしても。活力を、系の部分か、それと同等の質量をある高さまで持ち上げるのに使うと考えれば、今示したことから、そのように表した仕事の量も、上の条件のもとでは等しくなければならないことが出てくる。しかしこの原理は、ありうるすべての種類の力について成り立つわけではない。力学では、この原理はふつう仮想速度の原理に結び付けられるが、仮想速度の原理は、引き合う力と押し返す力をもつ質点についてしか証明できない。ここではまず、活力の保存の原理がまさに次の場合にだけ成り立つことを示したい。働いている力が、質点の力に分解でき、その力が二点を結ぶ線の向きに働き、その強さが距離だけで決まる場合である。力学では、このような力はふつう中心力（Centralkraft）と呼ばれてきた。このことから逆に、自然物体が互いに作用し合うとき、いま述べた原理がまったく一般に、その物体のどんな小さな部分にも当てはめられるなら、最も単純な基本の力としては、そのような中心力を仮定すべきだということも出てくる。

訳注：当時の力学で「活力」と呼ばれたのは <i>m</i><i>v</i><sup>2</sup> である。ここでヘルムホルツが活力と呼ぶことを提案する ½<i>m</i><i>v</i><sup>2</sup> は、今の言い方では運動エネルギーに当たる。
訳注：「Gewicht <i>m</i>」は誌面のとおり。重さを <i>m</i> と書き、その仕事の量を <i>m</i><i>g</i><i>h</i> としている。

### ¶14　p.10–11

> Betrachten wir zunächst einen materiellen Punct von der Masse <i>m</i>, der sich bewegt unter dem Einfluss der Kräfte von mehreren zu einem festen System <i>A</i> verbundenen Körpern, so zeigt uns die Mechanik die Mittel an, für jeden einzelnen Zeitpunct die Lage und Geschwindigkeit dieses Punctes bestimmen zu können. Wir würden also die Zeit <i>t</i> als die Urvariable betrachten, und von ihr abhängen lassen die Ordinaten <i>x</i>, <i>y</i>, <i>z</i> von <i>m</i> in Beziehung auf ein gegen das System <i>A</i> festbestimmtes Coordinatensystem, seine Tangentialgeschwindigkeit <i>q</i>, die den Axen parallelen Compo- [p.11] nenten derselben <i>u</i> = (<i>d</i><i>x</i>)/(<i>d</i><i>t</i>), <i>v</i> = (<i>d</i><i>y</i>)/(<i>d</i><i>t</i>), <i>w</i> = (<i>d</i><i>z</i>)/(<i>d</i><i>t</i>), und endlich die Componenten der wirkenden Kräfte
>
> <i>X</i> = <i>m</i> (<i>d</i><i>u</i>)/(<i>d</i><i>t</i>),　<i>Y</i> = <i>m</i> (<i>d</i><i>v</i>)/(<i>d</i><i>t</i>),　<i>Z</i> = <i>m</i> (<i>d</i><i>w</i>)/(<i>d</i><i>t</i>).
>
> Unser Princip fordert nun, dass ½<i>m</i><i>q</i><sup>2</sup>, also auch <i>q</i><sup>2</sup>, stets dasselbe sei, wenn <i>m</i> dieselbe Lage gegen <i>A</i> hat, also nicht allein als Function der Urvariablen <i>t</i>, sondern auch als blosse Function der Coordinaten <i>x</i>, <i>y</i>, <i>z</i> hingestellt werden könne, d. h. dass
>
> <i>d</i>(<i>q</i><sup>2</sup>) = (∂(<i>q</i><sup>2</sup>))/(∂<i>x</i>) <i>d</i><i>x</i> + (∂(<i>q</i><sup>2</sup>))/(∂<i>y</i>) <i>d</i><i>y</i> + (∂(<i>q</i><sup>2</sup>))/(∂<i>z</i>) <i>d</i><i>z</i>.　1)
>
> Da <i>q</i><sup>2</sup> = <i>u</i><sup>2</sup> + <i>v</i><sup>2</sup> + <i>w</i><sup>2</sup>, so ist <i>d</i>(<i>q</i><sup>2</sup>) = 2<i>u</i><i>d</i><i>u</i> + 2<i>v</i><i>d</i><i>v</i> + 2<i>w</i><i>d</i><i>w</i>. Wird statt <i>u</i> hier (<i>d</i><i>x</i>)/(<i>d</i><i>t</i>), statt <i>d</i><i>u</i> aber (<i>X</i><i>d</i><i>t</i>)/<i>m</i> aus den oben hingestellten Werthen gesetzt, eben so für <i>v</i> und <i>w</i> die analogen Werthe, so erhalten wir
>
> <i>d</i>(<i>q</i><sup>2</sup>) = (2<i>X</i>)/<i>m</i> <i>d</i><i>x</i> + (2<i>Y</i>)/<i>m</i> <i>d</i><i>y</i> + (2<i>Z</i>)/<i>m</i> <i>d</i><i>z</i>.　2)

まず、質量 <i>m</i> の質点が、一つの固定した系 <i>A</i> に結び付けられたいくつかの物体の力の影響のもとで動くとしよう。力学は、この点の位置と速度をどの時点についても定めることのできる手段を示してくれる。そこで時間 <i>t</i> を元の変数（Urvariable）とみなし、それに依存させるものとして、系 <i>A</i> に対して固定した座標系についての <i>m</i> の座標 <i>x</i>、<i>y</i>、<i>z</i>、<i>m</i> の接線方向の速度（Tangentialgeschwindigkeit）<i>q</i>、軸に平行なその成分 <i>u</i> = (<i>d</i><i>x</i>)/(<i>d</i><i>t</i>)、<i>v</i> = (<i>d</i><i>y</i>)/(<i>d</i><i>t</i>)、<i>w</i> = (<i>d</i><i>z</i>)/(<i>d</i><i>t</i>)、そして最後に、働いている力の成分

<i>X</i> = <i>m</i> (<i>d</i><i>u</i>)/(<i>d</i><i>t</i>),　<i>Y</i> = <i>m</i> (<i>d</i><i>v</i>)/(<i>d</i><i>t</i>),　<i>Z</i> = <i>m</i> (<i>d</i><i>w</i>)/(<i>d</i><i>t</i>).

をとることになる。さて、われわれの原理が求めるのは、<i>m</i> が <i>A</i> に対して同じ位置にあるとき、½<i>m</i><i>q</i><sup>2</sup>、したがって <i>q</i><sup>2</sup> も、いつも同じであることである。つまり <i>q</i><sup>2</sup> が、元の変数 <i>t</i> の関数としてだけでなく、座標 <i>x</i>、<i>y</i>、<i>z</i> だけの関数としても表せること、すなわち

<i>d</i>(<i>q</i><sup>2</sup>) = (∂(<i>q</i><sup>2</sup>))/(∂<i>x</i>) <i>d</i><i>x</i> + (∂(<i>q</i><sup>2</sup>))/(∂<i>y</i>) <i>d</i><i>y</i> + (∂(<i>q</i><sup>2</sup>))/(∂<i>z</i>) <i>d</i><i>z</i>.　1)

であることである。<i>q</i><sup>2</sup> = <i>u</i><sup>2</sup> + <i>v</i><sup>2</sup> + <i>w</i><sup>2</sup> だから、<i>d</i>(<i>q</i><sup>2</sup>) = 2<i>u</i><i>d</i><i>u</i> + 2<i>v</i><i>d</i><i>v</i> + 2<i>w</i><i>d</i><i>w</i> である。ここで、上に立てた値から、<i>u</i> の代わりに (<i>d</i><i>x</i>)/(<i>d</i><i>t</i>) を、<i>d</i><i>u</i> の代わりに (<i>X</i><i>d</i><i>t</i>)/<i>m</i> を置き、<i>v</i> と <i>w</i> にも同じように対応する値を置けば、

<i>d</i>(<i>q</i><sup>2</sup>) = (2<i>X</i>)/<i>m</i> <i>d</i><i>x</i> + (2<i>Y</i>)/<i>m</i> <i>d</i><i>y</i> + (2<i>Z</i>)/<i>m</i> <i>d</i><i>z</i>.　2)

を得る。

訳注：「Ordinaten」は誌面のとおり。ここでは座標（x, y, z の三つ）の意で使われている。
訳注：式 1) の ∂ は、誌面では d に弧の印を付けた字で、偏微分を表す当時の書き方。

### ¶15　p.11

> Da die Gleichungen 1 und 2 für jedes beliebige <i>d</i><i>x</i>, <i>d</i><i>y</i>, <i>d</i><i>z</i> zusammen stattfinden müssen, so folgt, dass auch einzeln
>
> (<i>d</i>(<i>q</i><sup>2</sup>))/(<i>d</i><i>x</i>) = (2<i>X</i>)/<i>m</i>,　(<i>d</i><i>q</i><sup>2</sup>)/(<i>d</i><i>y</i>) = (2<i>Y</i>)/<i>m</i>　und　(<i>d</i><i>q</i><sup>2</sup>)/(<i>d</i><i>z</i>) = (2<i>Z</i>)/<i>m</i>.
>
> Ist aber <i>q</i><sup>2</sup> blosse Function von <i>x</i>, <i>y</i>, <i>z</i>, so folgt hieraus, dass auch <i>X</i>, <i>Y</i> und <i>Z</i>, d. h. Richtung und Grösse der wirkenden Kraft nur Functionen der Lage von <i>m</i> gegen <i>A</i> sei.

式 1 と式 2 は、どんな <i>d</i><i>x</i>、<i>d</i><i>y</i>、<i>d</i><i>z</i> についても一緒に成り立たなければならないから、一つずつについても

(<i>d</i>(<i>q</i><sup>2</sup>))/(<i>d</i><i>x</i>) = (2<i>X</i>)/<i>m</i>,　(<i>d</i><i>q</i><sup>2</sup>)/(<i>d</i><i>y</i>) = (2<i>Y</i>)/<i>m</i>　および　(<i>d</i><i>q</i><sup>2</sup>)/(<i>d</i><i>z</i>) = (2<i>Z</i>)/<i>m</i>.

が成り立つ。ところが <i>q</i><sup>2</sup> が <i>x</i>、<i>y</i>、<i>z</i> だけの関数であるなら、ここから、<i>X</i>、<i>Y</i>、<i>Z</i>、すなわち働いている力の向きと大きさも、<i>A</i> に対する <i>m</i> の位置だけの関数であることが出てくる。

訳注：この三つの式は、誌面では偏微分の印の無い普通の d で書かれている（式 1) とは字が違う）。意味は偏微分である。
訳注：「Functionen … sei」は誌面のとおり（主語は複数で、動詞は単数の形）。

### ¶16　p.11–12

> Denken wir uns nun auch statt des Systems <i>A</i> einen einzelnen materiellen Punct <i>a</i>, so folgt aus dem oben be- [p.12] wiesenen, dass die Richtung und Grösse der Kraft, welche von <i>a</i> auf <i>m</i> einwirkt, nur bestimmt werde durch die relative Lage von <i>m</i> gegen <i>a</i>. Da nun die Lage von <i>m</i> durch seine Beziehung zu dem einzelnen Punct <i>a</i> nur noch der Entfernung <i>m</i><i>a</i> nach bestimmt ist, so würde in diesem Falle das Gesetz dahin zu modificiren sein, dass Richtung und Grösse der Kraft Functionen dieser Entfernung <i>r</i> sein müssen. Denken wir uns die Coordinaten auf irgend ein beliebiges Axensystem bezogen, dessen Anfangspunct in <i>a</i> liegt, so muss hiernach
>
> <i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = 2<i>X</i><i>d</i><i>x</i> + 2<i>Y</i><i>d</i><i>y</i> + 2<i>Z</i><i>d</i><i>z</i> = 0　3)
>
> sein, so oft
>
> <i>d</i>(<i>r</i><sup>2</sup>) = 2<i>x</i><i>d</i><i>x</i> + 2<i>y</i><i>d</i><i>y</i> + 2<i>z</i><i>d</i><i>z</i> = 0
>
> ist, d. h. so oft
>
> <i>d</i><i>z</i> = − (<i>x</i><i>d</i><i>x</i> + <i>y</i><i>d</i><i>y</i>)/<i>z</i>.
>
> Dieser Werth in Gleichung 3 gesetzt, giebt
>
> (<i>X</i> − (<i>x</i>/<i>z</i>)<i>Z</i>) <i>d</i><i>x</i> + (<i>Y</i> − (<i>y</i>/<i>z</i>)<i>Z</i>) <i>d</i><i>y</i> = 0
>
> für jedes beliebige <i>d</i><i>x</i> und <i>d</i><i>y</i>, also auch einzeln
>
> <i>X</i> = (<i>x</i>/<i>z</i>)<i>Z</i>　und　<i>Y</i> = (<i>y</i>/<i>z</i>)<i>Z</i>,
>
> d. h. die Resultante muss nach dem Anfangspuncte der Coordinaten, nach dem wirkenden Puncte <i>a</i>, gerichtet sein.

さて、系 <i>A</i> の代わりに、一つの質点 <i>a</i> を考えよう。すると上で証明したことから、<i>a</i> が <i>m</i> に及ぼす力の向きと大きさは、<i>a</i> に対する <i>m</i> の相対的な位置だけで定まることが出てくる。ところで、ただ一つの点 <i>a</i> との関係による <i>m</i> の位置は、もはや距離 <i>m</i><i>a</i> によってしか定まらない。だからこの場合には、法則を次のように改めなければならないだろう。力の向きと大きさは、この距離 <i>r</i> の関数でなければならない、と。座標を、原点が <i>a</i> にある任意の軸の系にとると、これにしたがって

<i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = 2<i>X</i><i>d</i><i>x</i> + 2<i>Y</i><i>d</i><i>y</i> + 2<i>Z</i><i>d</i><i>z</i> = 0　3)

が、

<i>d</i>(<i>r</i><sup>2</sup>) = 2<i>x</i><i>d</i><i>x</i> + 2<i>y</i><i>d</i><i>y</i> + 2<i>z</i><i>d</i><i>z</i> = 0

であるたびに、すなわち

<i>d</i><i>z</i> = − (<i>x</i><i>d</i><i>x</i> + <i>y</i><i>d</i><i>y</i>)/<i>z</i>.

であるたびに、成り立たなければならない。この値を式 3 に入れると、

(<i>X</i> − (<i>x</i>/<i>z</i>)<i>Z</i>) <i>d</i><i>x</i> + (<i>Y</i> − (<i>y</i>/<i>z</i>)<i>Z</i>) <i>d</i><i>y</i> = 0

がどんな <i>d</i><i>x</i> と <i>d</i><i>y</i> についても成り立つ。したがって一つずつについても

<i>X</i> = (<i>x</i>/<i>z</i>)<i>Z</i>　および　<i>Y</i> = (<i>y</i>/<i>z</i>)<i>Z</i>,

が成り立つ。すなわち、合力（Resultante）は座標の原点、つまり作用する点 <i>a</i> に向いていなければならない。

### ¶17　p.12

> Es müssen folglich in Systemen, welche ganz allgemein dem Gesetz von der Erhaltung der lebendigen Kraft Folge leisten, die einfachen Kräfte der materiellen Puncte Centralkräfte sein.

したがって、まったく一般に活力の保存の法則にしたがう系では、質点の単純な力は中心力でなければならない。

### ¶18　p.13

> II. Das Princip von der Erhaltung der Kraft.

II. 力の保存の原理

### ¶19　p.13

> Wir wollen dem besprochenen Gesetze für die Fälle, wo Centralkräfte wirken, nun noch einen allgemeineren Ausdruck geben.

ここで、中心力が働く場合について、これまで論じてきた法則に、さらに一般的な表し方を与えよう。

### ¶20　p.13–14

> Ist <i>φ</i> die Intensität der Kraft, welche in der Richtung von <i>r</i> wirkt, wenn sie anzieht, als positiv, wenn sie abstösst, als negativ gesetzt, also
>
> <i>X</i> = −(<i>x</i>/<i>r</i>)<i>φ</i>;　<i>Y</i> = −(<i>y</i>/<i>r</i>)<i>φ</i>;　<i>Z</i> = −(<i>z</i>/<i>r</i>)<i>φ</i>　1)
>
> so ist gemäss der Gleichung 2 des vorigen Abschnitts
>
> <i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = −2(<i>φ</i>/<i>r</i>)(<i>x</i><i>d</i><i>x</i> + <i>y</i><i>d</i><i>y</i> + <i>z</i><i>d</i><i>z</i>); also
>
> ½<i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = −<i>φ</i><i>d</i><i>r</i>.
>
> Oder wenn <i>Q</i> und <i>R</i>, <i>q</i> und <i>r</i> zusammengehörige Tangentialgeschwindigkeiten und Entfernungen vorstellen,
>
> ½<i>m</i><i>Q</i><sup>2</sup> − ½<i>m</i><i>q</i><sup>2</sup> = −∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i>.　2)
>
> Betrachten wir diese Gleichung näher, so finden wir auf der linken Seite den Unterschied der lebendigen Kräfte, welche <i>m</i> bei zwei verschiedenen Entfernungen hat. Um die Bedeutung der Grösse ∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i> zu finden, denken wir uns die Intensitäten von <i>φ</i>, welche zu verschiedenen Puncten der Verbindungslinie von <i>m</i> und <i>a</i> gehören, durch rechtwinklig aufgesetzte Ordinaten dargestellt, so würde die genannte Grösse den Flächeninhalt bezeichnen, den die Curve [p.14] zwischen den zu <i>R</i> und <i>r</i> gehörigen Ordinaten mit der Abscissenaxe einschliesst. Wie man sich nun diesen Flächenraum als die Summe aller der unendlich vielen in ihm liegenden Abscissen vorstellen kann, so ist jene Grösse der Inbegriff aller Kraftintensitäten, welche in den zwischen <i>R</i> und <i>r</i> liegenden Entfernungen wirken. Nennen wir nun die Kräfte, welche den Punct <i>m</i> zu bewegen streben, so lange sie eben noch nicht Bewegung bewirkt haben, *Spannkräfte*, im Gegensatz zu dem, was die Mechanik *lebendige Kraft* nennt, so würden wir die Grösse ∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i> als *die Summe der Spannkräfte* zwischen den Entfernungen <i>R</i> und <i>r</i> bezeichnen können, und das obige Gesetz würde auszusprechen sein: Die Zunahme der lebendigen Kraft eines Massenpunctes bei seiner Bewegung unter dem Einfluss einer Centralkraft ist gleich der Summe der zu der betreffenden Aenderung seiner Entfernung gehörigen Spannkräfte.

<i>r</i> の向きに働く力の強さを <i>φ</i> とし、引き合うときは正、押し返すときは負とする。すると

<i>X</i> = −(<i>x</i>/<i>r</i>)<i>φ</i>;　<i>Y</i> = −(<i>y</i>/<i>r</i>)<i>φ</i>;　<i>Z</i> = −(<i>z</i>/<i>r</i>)<i>φ</i>　1)

であり、前の節の式 2 によって

<i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = −2(<i>φ</i>/<i>r</i>)(<i>x</i><i>d</i><i>x</i> + <i>y</i><i>d</i><i>y</i> + <i>z</i><i>d</i><i>z</i>); したがって

½<i>m</i><i>d</i>(<i>q</i><sup>2</sup>) = −<i>φ</i><i>d</i><i>r</i>.

あるいは、<i>Q</i> と <i>R</i>、<i>q</i> と <i>r</i> が、それぞれ互いに対応する接線方向の速度と距離を表すとすれば、

½<i>m</i><i>Q</i><sup>2</sup> − ½<i>m</i><i>q</i><sup>2</sup> = −∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i>.　2)

この式をよく見ると、左辺には、<i>m</i> が二つの異なる距離にあるときにもつ活力の差がある。量 ∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i> の意味を知るために、<i>m</i> と <i>a</i> を結ぶ線上の各点に属する <i>φ</i> の強さを、その点に直角に立てた縦座標で表すと考えよう。すると、この量は、<i>R</i> と <i>r</i> に属する縦座標のあいだで曲線が横軸とともに囲む面積を表す。この面積を、その中にある無限に多くの横座標（Abscissen）の和と考えることができるように、この量は、<i>R</i> と <i>r</i> のあいだの距離で働くすべての力の強さを総べたものである。さて、点 <i>m</i> を動かそうとする力を、それがまだ運動を生じていないあいだは *緊張力*（Spannkraft）と呼び、力学が *活力*と呼ぶものと対置するなら、量 ∫<sub><i>r</i></sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i> を、距離 <i>R</i> と <i>r</i> のあいだの *緊張力の和* と呼ぶことができる。そして上の法則は次のように言い表せる。中心力の影響のもとで運動する質点の活力の増加は、その距離の変化に属する緊張力の和に等しい。

訳注：<i>a</i> は I 章の終わりで <i>m</i> に力を及ぼすとした質点。
訳注：「Abscissen」は誌面のまま（1889 年の再版も同じ）。
訳注：緊張力の和は、今の言い方では位置エネルギーの差に当たる。

### ¶21　p.14–15

> Denken wir uns zwei Puncte unter der Wirkung einer anziehenden Kraft stehend, in einer bestimmten Entfernung <i>R</i>, so werden sie durch Wirkung der Kraft selbst nach den kleineren Entfernungen <i>r</i> hingetrieben, und dabei wird ihre Geschwindigkeit, ihre lebendige Kraft, zunehmen; sollen sie aber nach grösseren Entfernungen <i>r</i> gelangen, so muss ihre lebendige Kraft abnehmen, und endlich ganz verbraucht werden; wir können deshalb bei anziehenden Kräften die Summe der Spannkräfte für die Entfernungen zwischen <i>r</i> = 0 und <i>r</i> = <i>R</i>, ∫<sub>0</sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i>, als die noch vorhandenen, die aber zwischen <i>r</i> = <i>R</i> und <i>r</i> = ∞ als die verbrauchten bezeichnen; die ersteren können unmittelbar, die letzteren erst [p.15] nach einem äquivalenten Verlust an lebendiger Kraft in Wirksamkeit treten. Umgekehrt ist es bei abstossenden Kräften. Befinden sich die Puncte in der Entfernung <i>R</i>, so werden sie bei ihrer Entfernung lebendige Kraft gewinnen, und als die vorhandenen Spannkräfte werden die zu bezeichnen sein zwischen <i>r</i> = <i>R</i> und <i>r</i> = ∞, als die verlorenen, die zwischen <i>r</i> = 0 und <i>r</i> = <i>R</i>.

引き合う力の作用のもとにある二つの点が、ある決まった距離 <i>R</i> にあると考えよう。すると二点は、力そのものの作用によって、より小さい距離 <i>r</i> へと追いやられ、そのとき速度、すなわち活力は増える。逆に、より大きい距離 <i>r</i> へ行かせようとすれば、活力は減り、ついにはすっかり使い尽くされねばならない。そこで引き合う力の場合には、<i>r</i> = 0 から <i>r</i> = <i>R</i> までの距離についての緊張力の和 ∫<sub>0</sub><sup><i>R</i></sup><i>φ</i><i>d</i><i>r</i> を、まだ手元にある緊張力と呼び、<i>r</i> = <i>R</i> から <i>r</i> = ∞ までのものを、使い尽くされた緊張力と呼ぶことができる。前者はそのまま働きうるが、後者は、それと等価な活力の損失を経てはじめて働きうる。押し返す力では逆になる。二点が距離 <i>R</i> にあるとき、二点は離れてゆくあいだに活力を得る。手元にある緊張力と呼ぶべきは <i>r</i> = <i>R</i> から <i>r</i> = ∞ までのもの、失われたものと呼ぶべきは <i>r</i> = 0 から <i>r</i> = <i>R</i> までのものである。

### ¶22　p.15

> Um nun unser Gesetz ganz allgemein durchzuführen, denken wir uns eine beliebige Anzahl materieller Puncte von den Massen <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, <i>m</i><sub>3</sub> u. s. w. allgemein bezeichnet mit <i>m</i><sub>𝔞</sub>, deren Coordinaten <i>x</i><sub>𝔞</sub>, <i>y</i><sub>𝔞</sub>, <i>z</i><sub>𝔞</sub>; die den Axen parallelen Componenten der darauf wirkenden Kräfte seien <i>X</i><sub>𝔞</sub>, <i>Y</i><sub>𝔞</sub>, <i>Z</i><sub>𝔞</sub>, die nach den Axen zerlegten Geschwindigkeiten <i>u</i><sub>𝔞</sub>, <i>v</i><sub>𝔞</sub>, <i>w</i><sub>𝔞</sub>, die Tangentialgeschwindigkeiten <i>q</i><sub>𝔞</sub>; die Entfernung zwischen <i>m</i><sub>𝔞</sub> und <i>m</i><sub>𝔟</sub> sei <i>r</i><sub>𝔞𝔟</sub>, die Centralkraft zwischen beiden <i>φ</i><sub>𝔞𝔟</sub>. Es ist nun für einen einzelnen Punct <i>m</i><sub><i>n</i></sub> analog der Gleichung 1.
>
> <i>X</i><sub><i>n</i></sub> = Σ[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>u</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)
>
> <i>Y</i><sub><i>n</i></sub> = Σ[(<i>y</i><sub>𝔞</sub> − <i>y</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>v</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)
>
> <i>Z</i><sub><i>n</i></sub> = Σ[(<i>z</i><sub>𝔞</sub> − <i>z</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>w</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)
>
> wo das Summationszeichen Σ sich auf alle die Glieder bezieht, welche entstehn, wenn man nach einander für den Index 𝔞 alle einzelnen Indices 1, 2, 3 etc. mit Ausnahme von <i>n</i> setzt.

さて、この法則をまったく一般的に貫くために、質量 <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, <i>m</i><sub>3</sub> など、一般には <i>m</i><sub>𝔞</sub> と書く、任意の数の質点を考えよう。その座標を <i>x</i><sub>𝔞</sub>, <i>y</i><sub>𝔞</sub>, <i>z</i><sub>𝔞</sub>、それに働く力の、軸に平行な成分を <i>X</i><sub>𝔞</sub>, <i>Y</i><sub>𝔞</sub>, <i>Z</i><sub>𝔞</sub>、軸の方向に分けた速度を <i>u</i><sub>𝔞</sub>, <i>v</i><sub>𝔞</sub>, <i>w</i><sub>𝔞</sub>、接線方向の速度を <i>q</i><sub>𝔞</sub> とする。<i>m</i><sub>𝔞</sub> と <i>m</i><sub>𝔟</sub> のあいだの距離を <i>r</i><sub>𝔞𝔟</sub>、両者のあいだの中心力を <i>φ</i><sub>𝔞𝔟</sub> とする。すると一つの点 <i>m</i><sub><i>n</i></sub> について、式 1 と同じように

<i>X</i><sub><i>n</i></sub> = Σ[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>u</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)

<i>Y</i><sub><i>n</i></sub> = Σ[(<i>y</i><sub>𝔞</sub> − <i>y</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>v</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)

<i>Z</i><sub><i>n</i></sub> = Σ[(<i>z</i><sub>𝔞</sub> − <i>z</i><sub><i>n</i></sub>)(<i>φ</i><sub>𝔞<i>n</i></sub>/<i>r</i><sub>𝔞<i>n</i></sub>)] = <i>m</i><sub><i>n</i></sub>(<i>d</i><i>w</i><sub><i>n</i></sub>/<i>d</i><i>t</i>)

が成り立つ。ここで和の記号 Σ は、添字 𝔞 に、<i>n</i> を除くすべての添字 1, 2, 3 などを順に入れたときに生じるすべての項にわたる。

訳注：誌面では、点を一般に指す添字 𝔞・𝔟 はフラクトゥール（ドイツ文字）の小文字、特定の点を指す <i>n</i>・<i>p</i>・<i>q</i> はイタリック。この区別を残した。
訳注：<i>m</i><sub>3</sub> の下付きは誌面で潰れていて「3」とも「s」とも見えるが、並びから 3 と読んだ。

### ¶23　p.15–17

> Multipliciren wir die erste Gleichung mit <i>d</i><i>x</i><sub><i>n</i></sub> = <i>u</i><sub><i>n</i></sub><i>d</i><i>t</i>, die zweite mit <i>d</i><i>y</i><sub><i>n</i></sub> = <i>v</i><sub><i>n</i></sub><i>d</i><i>t</i>, die dritte mit <i>d</i><i>z</i><sub><i>n</i></sub> = <i>w</i><sub><i>n</i></sub><i>d</i><i>t</i>, und denken wir uns die drei dann entstehenden Gleichungen [p.16] für alle einzelnen Puncte <i>m</i><sub>𝔟</sub> aufgestellt, wie es hier für <i>m</i><sub><i>n</i></sub> geschehen ist, und alle addirt, so erhalten wir
>
> Σ[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub>𝔟</sub>)<i>d</i><i>x</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>u</i><sub>𝔞</sub><sup>2</sup>)]
>
> Σ[(<i>y</i><sub>𝔞</sub> − <i>y</i><sub>𝔟</sub>)<i>d</i><i>y</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>v</i><sub>𝔞</sub><sup>2</sup>)]
>
> Σ[(<i>z</i><sub>𝔞</sub> − <i>z</i><sub>𝔟</sub>)<i>d</i><i>z</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>w</i><sub>𝔞</sub><sup>2</sup>)]
>
> Die Glieder der Reihe links werden erhalten, wenn man erst statt 𝔞 alle einzelnen Indices 1, 2, 3 u. s. w. setzt, und bei jedem einzelnen auch für 𝔟 alle grösseren und alle kleineren Werthe, als 𝔞 schon hat. Die Summen zerfallen also in zwei Theile, in deren einem 𝔞 stets grösser ist als 𝔟, im andern stets kleiner, und es ist klar, dass für jedes Glied des einen Theils
>
> (<i>x</i><sub><i>p</i></sub> − <i>x</i><sub><i>q</i></sub>)<i>d</i><i>x</i><sub><i>q</i></sub>(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)
>
> in dem anderen eines vorkommen muss
>
> (<i>x</i><sub><i>q</i></sub> − <i>x</i><sub><i>p</i></sub>)<i>d</i><i>x</i><sub><i>p</i></sub>(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)
>
> beide addirt geben
>
> −(<i>x</i><sub><i>p</i></sub> − <i>x</i><sub><i>q</i></sub>)(<i>d</i><i>x</i><sub><i>p</i></sub> − <i>d</i><i>x</i><sub><i>q</i></sub>)(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)
>
> Machen wir diese Zusammenziehung in den Summen, addiren sie alle drei und setzen
>
> ½<i>d</i>[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub>𝔟</sub>)<sup>2</sup> + (<i>y</i><sub>𝔞</sub> − <i>y</i><sub>𝔟</sub>)<sup>2</sup> + (<i>z</i><sub>𝔞</sub> − <i>z</i><sub>𝔟</sub>)<sup>2</sup>] = <i>r</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>
>
> so erhalten wir
>
> −Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>q</i><sub>𝔞</sub><sup>2</sup>)]　3)
>
> oder [p.17]
>
> −Σ[∫<sub><i>r</i><sub>𝔞𝔟</sub></sub><sup><i>R</i><sub>𝔞𝔟</sub></sup><i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = Σ[½<i>m</i><sub>𝔞</sub><i>Q</i><sub>𝔞</sub><sup>2</sup>] − Σ[½<i>m</i><sub>𝔞</sub><i>q</i><sub>𝔞</sub><sup>2</sup>]　4)
>
> wenn <i>R</i> und <i>Q</i> sowie <i>r</i> und <i>q</i> zusammengehörige Werthe bezeichnen.

第一の式に <i>d</i><i>x</i><sub><i>n</i></sub> = <i>u</i><sub><i>n</i></sub><i>d</i><i>t</i> を、第二の式に <i>d</i><i>y</i><sub><i>n</i></sub> = <i>v</i><sub><i>n</i></sub><i>d</i><i>t</i> を、第三の式に <i>d</i><i>z</i><sub><i>n</i></sub> = <i>w</i><sub><i>n</i></sub><i>d</i><i>t</i> を掛ける。こうしてできる三つの式を、ここで <i>m</i><sub><i>n</i></sub> について行ったように、すべての点 <i>m</i><sub>𝔟</sub> について立て、全部を足し合わせると、

Σ[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub>𝔟</sub>)<i>d</i><i>x</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>u</i><sub>𝔞</sub><sup>2</sup>)]

Σ[(<i>y</i><sub>𝔞</sub> − <i>y</i><sub>𝔟</sub>)<i>d</i><i>y</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>v</i><sub>𝔞</sub><sup>2</sup>)]

Σ[(<i>z</i><sub>𝔞</sub> − <i>z</i><sub>𝔟</sub>)<i>d</i><i>z</i><sub>𝔟</sub>(<i>φ</i><sub>𝔞𝔟</sub>/<i>r</i><sub>𝔞𝔟</sub>)] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>w</i><sub>𝔞</sub><sup>2</sup>)]

を得る。左辺の級数の項は、まず 𝔞 に 1, 2, 3 などのすべての添字を入れ、そのそれぞれについて、𝔟 にも 𝔞 の値より大きいすべての値と小さいすべての値を入れて得られる。したがって和は二つの部分に分かれ、一方では常に 𝔞 が 𝔟 より大きく、他方では常に小さい。そして一方の部分の各項

(<i>x</i><sub><i>p</i></sub> − <i>x</i><sub><i>q</i></sub>)<i>d</i><i>x</i><sub><i>q</i></sub>(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)

に対して、他方の部分に

(<i>x</i><sub><i>q</i></sub> − <i>x</i><sub><i>p</i></sub>)<i>d</i><i>x</i><sub><i>p</i></sub>(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)

という項が一つ現れねばならないことは明らかである。両者を足すと

−(<i>x</i><sub><i>p</i></sub> − <i>x</i><sub><i>q</i></sub>)(<i>d</i><i>x</i><sub><i>p</i></sub> − <i>d</i><i>x</i><sub><i>q</i></sub>)(<i>φ</i><sub><i>p</i><i>q</i></sub>/<i>r</i><sub><i>p</i><i>q</i></sub>)

となる。和の中でこのまとめを行い、三つの式をすべて足し、

½<i>d</i>[(<i>x</i><sub>𝔞</sub> − <i>x</i><sub>𝔟</sub>)<sup>2</sup> + (<i>y</i><sub>𝔞</sub> − <i>y</i><sub>𝔟</sub>)<sup>2</sup> + (<i>z</i><sub>𝔞</sub> − <i>z</i><sub>𝔟</sub>)<sup>2</sup>] = <i>r</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>

と置くと、

−Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = Σ[½<i>m</i><sub>𝔞</sub><i>d</i>(<i>q</i><sub>𝔞</sub><sup>2</sup>)]　3)

あるいは

−Σ[∫<sub><i>r</i><sub>𝔞𝔟</sub></sub><sup><i>R</i><sub>𝔞𝔟</sub></sup><i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = Σ[½<i>m</i><sub>𝔞</sub><i>Q</i><sub>𝔞</sub><sup>2</sup>] − Σ[½<i>m</i><sub>𝔞</sub><i>q</i><sub>𝔞</sub><sup>2</sup>]　4)

を得る。ここで <i>R</i> と <i>Q</i>、<i>r</i> と <i>q</i> は、互いに対応する値を表す。

### ¶24　p.17

> Wir haben hier links wieder die Summe der verbrauchten Spannkräfte, rechts die der lebendigen Kräfte des ganzen Systems, und wir können das Gesetz jetzt so aussprechen: In allen Fällen der Bewegung freier materieller Puncte unter dem Einfluss ihrer anziehenden und abstossenden Kräfte, deren Intensitäten nur von der Entfernung abhängig sind, ist der Verlust an Quantität der Spannkraft stets gleich dem Gewinn an lebendiger Kraft, und der Gewinn der ersteren dem Verlust der letzteren. *Es ist also stets die Summe der vorhandenen lebendigen und Spannkräfte constant.* In dieser allgemeinsten Form können wir unser Gesetz als das *Princip von der Erhaltung der Kraft* bezeichnen.

ここでも左辺には使い尽くされた緊張力の和が、右辺には系全体の活力の和がある。そこで法則を今や次のように言い表すことができる。自由な質点が、強さが距離だけによる、互いに引き合う力と押し返す力の影響のもとで運動するすべての場合に、緊張力の量の損失は常に活力の獲得に等しく、前者の獲得は後者の損失に等しい。*したがって、手元にある活力と緊張力の和は常に一定である。* このもっとも一般的な形において、われわれの法則を *力の保存（Erhaltung der Kraft）の原理* と呼ぶことができる。

訳注：「Es ist also … constant.」と「Princip von der Erhaltung der Kraft」は誌面で字間を空けた強調。

### ¶25　p.17

> In der gegebenen Ableitung des Gesetzes ändert sich nichts, wenn ein Theil der Puncte, welche wir mit dem durchlaufenden Buchstaben 𝔡 bezeichnen wollen, fest gedacht wird, so dass <i>q</i><sub>𝔡</sub> constant = 0; es ist dann die Form des Gesetzes:
>
> Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] + Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = −Σ[½<i>m</i><sub>𝔟</sub><i>d</i>(<i>q</i><sub>𝔟</sub><sup>2</sup>)].　5)

上の法則の導き方は、点の一部――これを通しの文字 𝔡 で表すことにする――を固定されたものと考え、<i>q</i><sub>𝔡</sub> が一定で 0 であるとしても、何も変わらない。そのとき法則の形は

Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] + Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = −Σ[½<i>m</i><sub>𝔟</sub><i>d</i>(<i>q</i><sub>𝔟</sub><sup>2</sup>)].　5)

となる。

訳注：固定した点の添字 𝔡 も、誌面ではフラクトゥールの小文字。

### ¶26　p.17–18

> Es bleibt noch übrig zu bemerken, in welchem Verhältniss das Princip von der Erhaltung der Kraft zu dem allgemeinsten Gesetze der Statik, dem sogenannten Princip der virtuellen Geschwindigkeiten steht. Dieses folgt nämlich unmittelbar aus unseren Gleichungen 3 und 5. Soll Gleichgewicht stattfinden bei einer bestimmten Lagerung der Puncte <i>m</i><sub>𝔞</sub>, d. h. soll für den Fall, dass diese Puncte [p.18] ruhen, also <i>q</i><sub>𝔞</sub> = 0, dieser Zustand der Ruhe auch bestehen bleiben, also alle <i>d</i><i>q</i><sub>𝔞</sub> = 0, so folgt aus der Gleichung 3
>
> Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = 0,　6)
>
> oder wenn auch Kräfte von Puncten <i>m</i><sub>𝔟</sub> ausserhalb des Systems einwirken, aus Gleichung 5
>
> Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] + Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = 0.　7)

あとは、力の保存の原理が、静力学のもっとも一般的な法則、いわゆる仮想速度の原理とどういう関係にあるかを述べるだけである。仮想速度の原理は、われわれの式 3 と 5 からただちに出てくる。点 <i>m</i><sub>𝔞</sub> のある決まった配置で釣り合いが成り立つべきだとする。つまり、これらの点が静止している、すなわち <i>q</i><sub>𝔞</sub> = 0 の場合に、この静止の状態がそのまま続く、すなわちすべての <i>d</i><i>q</i><sub>𝔞</sub> = 0 であるべきだとする。すると式 3 から

Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = 0,　6)

が出る。また、系の外にある点 <i>m</i><sub>𝔟</sub> からの力も働く場合には、式 5 から

Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] + Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = 0.　7)

が出る。

訳注：系の外の点を、誌面はここで <i>m</i><sub>𝔟</sub> と書いている（¶25 で固定した点に充てた文字は 𝔡）。

### ¶27　p.18

> In diesen Gleichungen sind unter <i>d</i><i>r</i> Aenderungen der Entfernung zu verstehen, welche bei beliebigen, durch die anderweitigen Bedingungen des Systems zugelassenen, kleinen Verschiebungen der Puncte <i>m</i><sub>𝔞</sub> eintreten. Wir haben in den früheren Deductionen gesehn, dass eine Vermehrung der lebendigen Kraft, also auch ein Uebergang aus Ruhe in Bewegung, nur durch einen Verbrauch von Spannkraft erzeugt werden kann; die letzten Gleichungen sagen dem entsprechend aus, dass unter solchen Bedingungen, wo durch keine einzige der möglichen Bewegungsrichtungen in dem ersten Augenblicke Spannkraft verbraucht wird, das System, wenn es einmal in Ruhe ist, auch in Ruhe bleiben muss.

これらの式で <i>d</i><i>r</i> とは、系のほかの条件が許す、点 <i>m</i><sub>𝔞</sub> の任意の小さな変位に伴って生じる距離の変化と解すべきである。これまでの導出で見たように、活力の増加、したがって静止から運動への移り行きも、緊張力を使うことによってしか生じえない。最後の二つの式は、これに応じて次のことを述べている。可能な運動の向きのどれをとっても、その最初の瞬間に緊張力が使われないような条件のもとでは、系は、ひとたび静止していれば、静止したままでいなければならない。

### ¶28　p.18–19

> Dass aus den hingestellten Gleichungen sämmtliche Gesetze der Statik hergeleitet werden können, ist bekannt. Die für die Natur der wirkenden Kräfte wichtigste Folgerung ist diese: Denken wir uns statt der beliebigen kleinen Verschiebungen der Puncte <i>m</i> solche gesetzt, wie sie stattfinden könnten, wenn das System in sich fest verbunden wäre, so dass in Gleichung 7 alle <i>d</i><i>r</i><sub>𝔞𝔟</sub> = 0, so folgt einzeln
>
> Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = 0　und
>
> Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = 0.
>
> Dann müssen also sowohl die äussern, wie die inneren Kräfte für sich der Gleichgewichtsbedingung genügen. Wird demnach ein beliebiges System von Naturkörpern durch äussere [p.19] Kräfte in eine bestimmte Gleichgewichtslage gebracht, so wird das Gleichgewicht nicht aufgehoben, 1) wenn wir die einzelnen Puncte des Systems in ihrer jetzigen Lage unter sich fest verbunden denken, und 2) wenn wir dann die Kräfte wegnehmen, welche dieselben gegen einander ausüben. Daraus folgt nun aber weiter: Werden die Kräfte, welche zwei Massenpuncte aufeinander ausüben, durch zwei an dieselben angebrachte äussere Kräfte in Gleichgewicht gesetzt, so müssen sich diese auch das Gleichgewicht halten, wenn statt der Kräfte der Puncte gegeneinander eine feste Verbindung derselben substituirt wird. Kräfte, welche zwei Puncte einer festen geraden Linie angreifen, halten sich aber nur im Gleichgewicht, wenn sie in dieser Linie selbst liegen, gleich und entgegengesetzt gerichtet sind. Es folgt also auch für die Kräfte der Puncte selbst, welche den äusseren gleich und entgegengesetzt sind, dass dieselben in der Richtung der verbindenden Linie liegen, also anziehende oder abstossende sein müssen.

ここに立てた式から静力学のすべての法則が導けることは、よく知られている。働く力の性質にとってもっとも大事な帰結は次のものである。点 <i>m</i> の任意の小さな変位の代わりに、系がそれ自身のうちで固くつながれていたなら起こりうるような変位を置き、式 7 ですべての <i>d</i><i>r</i><sub>𝔞𝔟</sub> = 0 となるとする。すると、別々に

Σ[<i>φ</i><sub>𝔞𝔡</sub><i>d</i><i>r</i><sub>𝔞𝔡</sub>] = 0　および

Σ[<i>φ</i><sub>𝔞𝔟</sub><i>d</i><i>r</i><sub>𝔞𝔟</sub>] = 0.

が出る。したがって、外の力も内の力も、それぞれ単独で釣り合いの条件を満たさねばならない。それゆえ、自然物体の任意の系が外の力によってある決まった釣り合いの位置に置かれたとき、1) 系の個々の点を今の位置のまま互いに固くつながれていると考え、2) そのうえで点どうしが互いに及ぼし合う力を取り去っても、釣り合いは破れない。さらにここから次のことが出る。二つの質点が互いに及ぼし合う力が、それらの点に加えた二つの外の力によって釣り合わされるなら、点どうしの力の代わりに二点を固くつないだものを置いても、外の二つの力は釣り合っていなければならない。ところが、固い直線の二点に働く力が釣り合うのは、それらがその直線そのものの上にあり、大きさが等しく向きが反対であるときに限る。したがって、外の力と大きさが等しく向きが反対である点そのものの力についても、それらは結ぶ線の向きにあり、つまり引き合う力か押し返す力でなければならない。

### ¶29　p.19

> Wir können die aufgestellten Sätze folgendermaassen zusammenfassen:

立てた命題は、次のようにまとめることができる。

### ¶30　p.19

> 1) So oft Naturkörper vermöge anziehender oder abstossender Kräfte, welche von der Zeit und Geschwindigkeit unabhängig sind, auf einander einwirken, muss die Summe ihrer lebendigen und Spannkräfte eine constante sein; das Maximum der zu gewinnenden Arbeitsgrösse also ein bestimmtes, endliches.

1) 自然物体が、時間と速度によらない引き合う力または押し返す力によって互いに作用し合うときは、いつでも、その活力と緊張力の和は一定でなければならない。したがって、得られる仕事の量の最大値は、決まった有限のものである。

### ¶31　p.19–20

> 2) Kommen dagegen in den Naturkörpern auch Kräfte vor, welche von der Zeit und Geschwindigkeit abhängen, oder nach anderen Richtungen wirken als der Verbindungslinie je zweier wirksamer materieller Puncte, also z. B. rotirende, so würden Zusammenstellungen solcher Körper [p.20] möglich sein, in denen entweder in das Unendliche Kraft verloren geht, oder gewonnen wird.

2) これに対して、自然物体のうちに、時間と速度による力、あるいは作用し合う二つの質点を結ぶ線とは別の向きに働く力、たとえば回転させる力も現れるなら、そうした物体を組み合わせて、力が限りなく失われるか、限りなく得られるかするものが作れることになろう。

### ¶32　p.20

> 3) Beim Gleichgewicht eines Körpersystems unter der Wirkung von Centralkräften müssen sich die innern und die äussern Kräfte für sich im Gleichgewicht halten, sobald wir die Körper des Systems unter sich unverrückbar verbunden denken, und nur das ganze System gegen ausser ihm liegende Körper beweglich. Ein festes System solcher Körper wird deshalb nie durch die Wirkung seiner inneren Kräfte in Bewegung gesetzt werden können, sondern nur durch Einwirkung äusserer Kräfte. Gäbe es dagegen andere als Centralkräfte, so würden sich feste Verbindungen von Naturkörpern herstellen lassen, welche sich von selbst bewegten, ohne einer Beziehung zu anderen Körpern zu bedürfen.

3) 中心力の作用のもとにある物体の系が釣り合っているとき、系の物体どうしを動かないようにつないだと考え、系の全体だけが外にある物体に対して動けるとするなら、内の力と外の力は、それぞれ単独で釣り合っていなければならない。それゆえ、そうした物体の固い系は、自らの内の力の作用によって動き出すことは決してなく、外の力の作用によってのみ動かされうる。逆に、中心力以外の力があるとすれば、ほかの物体との関わりを要さずに、ひとりでに動く自然物体の固いつながりを作れることになろう。

### ¶33　p.20

> III. Die Anwendung des Princips in den mechanischen Theoremen.

III. 力学の定理における原理の適用

### ¶34　p.20

> Wir gehen jetzt zu den speciellen Anwendungen des Gesetzes von der Constanz der Kraft über. Zuerst haben wir diejenigen Fälle kurz zu erwähnen, in denen das Princip von der Erhaltung der lebendigen Kraft bisher schon benutzt und anerkannt ist.

ここから、力の一定の法則の個々の適用に移る。まず、活力の保存の原理がこれまでにすでに使われ、認められている場合に、短く触れておかねばならない。

### ¶35　p.20–21

> 1) *Alle Bewegungen, welche unter dem Einfluss der allgemeinen Gravitationskraft vor sich gehen*, also die der himmlischen und der schweren irdischen Körper. Bei jenen spricht sich das Gesetz aus in der Zunahme ihrer Geschwindigkeit, sobald sie sich in ihrer Bahn dem Centralkörper nähern, in der Unveränderlichkeit [p.21] ihrer grossen Bahnaxen, ihrer Umlaufs- und Rotationszeit; bei diesen in dem bekannten Gesetz, dass die Endgeschwindigkeit des Falls nur von der Fallhöhe, nicht von der Richtung und Form der durchlaufenen Bahn abhängt, und dass diese Geschwindigkeit, wenn sie nicht durch Reibung oder unelastischen Stoss vernichtet wird, gerade hinreicht, die gefallenen Körper wieder zu derselben Höhe emporzutreiben, aus der sie herabgefallen sind. Dass die Fallhöhe eines bestimmten Gewichts als Maass der Arbeitsgrössen unserer Maschinen benutzt wird, ist schon erwähnt worden.

1) *万有引力の影響のもとで起こるすべての運動*、すなわち天体の運動と、地上の重い物体の運動。前者では、法則は、天体が軌道の上で中心体に近づくにつれて速度が増すこと、軌道の長軸、公転と自転の周期が変わらないことに表れる。後者では、よく知られた法則に表れる。落下の終わりの速度は、落ちた高さだけにより、通った道の向きと形にはよらない。そしてこの速度は、摩擦や非弾性の衝突によって消されないかぎり、落ちた物体を、落ちてきたのと同じ高さまでふたたび押し上げるのにちょうど足りる。決まった重さのものの落ちる高さが、われわれの機械の仕事の量の尺度として使われることは、すでに述べた。

訳注：「grossen Bahnaxen」は軌道の長軸。

### ¶36　p.21

> 2) *Die Uebertragung der Bewegungen durch die incompressibeln festen und flüssigen Körper*, sobald nicht Reibung oder Stoss unelastischer Stoffe stattfindet. Unser allgemeines Princip wird für diese Fälle gewöhnlich als die Regel ausgesprochen, dass eine durch mechanische Potenzen fortgepflanzte und abgeänderte Bewegung stets in demselben Verhältniss an Kraftintensität abnimmt, als sie an Geschwindigkeit zunimmt. Denken wir uns also durch eine Maschine, in welcher durch irgend einen Vorgang gleichmässig Arbeitskraft erzeugt wird, das Gewicht <i>m</i> mit der Geschwindigkeit <i>c</i> gehoben, so wird durch eine andere mechanische Einrichtung das Gewicht <i>n</i><i>m</i> gehoben werden können, aber nur mit der Geschwindigkeit <i>c</i>/<i>n</i>, so dass in beiden Fällen die Quantität der von der Maschine in der Zeiteinheit erzeugten Spannkraft durch <i>m</i><i>g</i><i>c</i> darzustellen ist, wo <i>g</i> die Intensität der Schwerkraft darstellt.

2) *圧縮できない固体と流体による運動の伝達*。ただし摩擦や、非弾性の物質の衝突が起こらないかぎりで。われわれの一般の原理は、これらの場合には、ふつう次の規則として言い表される。機械の要素（mechanische Potenzen）によって伝えられ、変えられた運動は、速度が増すのと常に同じ割合で、力の強さが減る。たとえば、何らかの過程によって一様に仕事をする力が生み出される機械で、重さ <i>m</i> を速度 <i>c</i> で持ち上げるとする。すると、別の機械の仕掛けによって重さ <i>n</i><i>m</i> を持ち上げることもできるが、その速度は <i>c</i>/<i>n</i> にとどまる。こうして、どちらの場合にも、機械が単位時間に生み出す緊張力の量は <i>m</i><i>g</i><i>c</i> で表される。ここで <i>g</i> は重力の強さを表す。

訳注：「mechanische Potenzen」は、当時の力学の語で、梃子・滑車・斜面などの単一機械を指す。

### ¶37　p.21–22

> 3) *Die Bewegungen vollkommen elastischer fester und flüssiger Körper.* Als Bedingung der vollkommenen Elasticität müssen wir nur der gewöhnlich hin- [p.22] gestellten, dass der in seiner Form oder seinem Volumen veränderte Körper dieselben vollständig wiedererlange, auch noch hinzufügen, dass in seinem Innern keine Reibung der Theilchen stattfinde. Bei den Gesetzen dieser Bewegungen ist unser Princip am frühesten erkannt, und am häufigsten benutzt worden. Als die gewöhnlichsten Fälle der Anwendung bei den festen Körpern sind zu erwähnen der elastische Stoss, dessen Gesetze sich leicht aus unserem Princip und dem von der Erhaltung des Schwerpuncts herleiten lassen, und die mannigfaltigen elastischen Vibrationen, welche fortdauern auch ohne neuen Anstoss, bis sie durch die Reibung im Innern und die Abgabe der Bewegung an äussere Medien vernichtet sind. Bei den flüssigen Körpern, sowohl tropfbaren (offenbar auch elastisch, nur mit sehr hohem Elasticitätsmodulus und mit einer Gleichgewichtslage der Theilchen versehen) als auch gasigen (mit niedrigem Elasticitätsmodulus und ohne Gleichgewichtslage) setzen sich im Allgemeinen alle Bewegungen bei ihrer Ausbreitung in Wellenform um. Dazu gehören die Wellen der Oberfläche tropfbarer Flüssigkeiten, die Bewegung des Schalls, und wahrscheinlich die des Lichts und der strahlenden Wärme.

3) *完全に弾性的な固体と流体の運動。* 完全な弾性の条件としては、ふつう立てられる条件、すなわち形や体積を変えられた物体がそれを完全に取り戻すことに、さらに、その内部で粒子の摩擦が起こらないことを加えねばならない。これらの運動の法則において、われわれの原理はもっとも早く認められ、もっともよく使われてきた。固体での適用のもっともふつうの場合として挙げるべきは、弾性衝突――その法則は、われわれの原理と重心の保存の原理から容易に導かれる――と、さまざまな弾性振動――新たな突きがなくても、内部の摩擦と外の媒質への運動の受け渡しによって消されるまで続く――である。流体では、滴をなす流体（明らかにこれも弾性的で、ただ弾性率がきわめて高く、粒子に釣り合いの位置がある）でも、気体（弾性率が低く、釣り合いの位置がない）でも、一般にすべての運動は、広がるときに波の形に変わる。これには、滴をなす液体の表面の波、音の運動、そしておそらく光と放射熱の運動が属する。

訳注：「tropfbar（flüssig）」は当時の語で液体を指し、気体（gasig）と対にされる。

### ¶38　p.22–23

> Die lebendige Kraft eines einzelnen Theilchens Δ<i>m</i> in einem von einem Wellenzuge durchzogenen Medium ist offenbar zu bestimmen durch die Geschwindigkeit, welche dasselbe in der Gleichgewichtslage hat. Die allgemeine Wellengleichung bestimmt die Geschwindigkeit <i>u</i> bekanntlich, wenn <i>a</i><sup>2</sup> die Intensität, <i>λ</i> die Wellenlänge, <i>α</i> die Fortpflanzungsgeschwindigkeit, <i>x</i> die Abscisse und <i>t</i> die Zeit ist, folgendermaassen:
>
> <i>u</i> = <i>a</i>.cos[(2<i>π</i>/<i>λ</i>)(<i>x</i> − <i>α</i><i>t</i>)]
>
> [p.23] Für die Gleichgewichtslage ist <i>u</i> = <i>a</i>, folglich die lebendige Kraft des Theilchens Δ<i>m</i> während der Wellenbewegung ½Δ<i>m</i><i>a</i><sup>2</sup>, proportional der Intensität. Breiten sich Wellen von einem Centrum kugelförmig aus, so setzen sie immer grössere Massen in Bewegung, folglich muss die Intensität abnehmen, wenn die lebendige Kraft dieselbe bleiben soll. Da nun die von der Welle umfassten Massen zunehmen wie die Quadrate der Entfernung, so folgt das bekannte Gesetz, dass die Intensitäten im umgekehrten Verhältnisse abnehmen.

波列が通り抜ける媒質の中の一つの粒子 Δ<i>m</i> の活力は、明らかに、その粒子が釣り合いの位置でもつ速度によって決まる。一般の波の式は、よく知られているように、<i>a</i><sup>2</sup> を強さ、<i>λ</i> を波長、<i>α</i> を伝わる速度、<i>x</i> を横座標、<i>t</i> を時間とすると、速度 <i>u</i> を次のように定める。

<i>u</i> = <i>a</i>.cos[(2<i>π</i>/<i>λ</i>)(<i>x</i> − <i>α</i><i>t</i>)]

釣り合いの位置では <i>u</i> = <i>a</i> であり、したがって波の運動のあいだの粒子 Δ<i>m</i> の活力は ½Δ<i>m</i><i>a</i><sup>2</sup> で、強さに比例する。波が一つの中心から球の形に広がるなら、波はますます大きな質量を動かすので、活力が同じままであるためには、強さは減らねばならない。ところで、波が包む質量は距離の二乗のように増えるので、強さが（距離の二乗に）逆比例して減るという、よく知られた法則が出てくる。

訳注：誌面では <i>a</i>（ラテン文字）と <i>α</i>（ギリシア文字）を書き分けている。
訳注：「im umgekehrten Verhältnisse」は誌面では「二乗の」を書かない。直前の文から距離の二乗への逆比例を指すので、訳では括弧で補った。

### ¶39　p.23

> Die Gesetze der Zurückwerfung, Brechung und Polarisation des Lichts an der Grenze zweier Medien von verschiedener Wellengeschwindigkeit sind bekanntlich schon von *Fresnel* hergeleitet worden aus der Annahme, dass die Bewegung der Grenztheilchen in beiden Mitteln dieselbe sei, und aus der Erhaltung der lebendigen Kraft. Bei der Interferenz zweier Wellenzüge findet keine Vernichtung der lebendigen Kraft statt, sondern nur eine andere Vertheilung. Zwei Wellenzüge von den Intensitäten <i>a</i><sup>2</sup> und <i>b</i><sup>2</sup>, welche nicht interferiren, geben allen getroffenen Puncten die Intensität <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>; interferiren sie, so haben die Maxima (<i>a</i> + <i>b</i>)<sup>2</sup>, um 2<i>a</i><i>b</i> grösser, die Minima (<i>a</i> − <i>b</i>)<sup>2</sup>, um eben so viel kleiner als <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>.

波の速度の異なる二つの媒質の境での光の反射・屈折・偏光の法則は、よく知られているように、すでにフレネルが、境の粒子の運動は両方の媒質で同じであるという仮定と、活力の保存とから導いている。二つの波列の干渉では、活力が消えることはなく、配分が変わるだけである。強さ <i>a</i><sup>2</sup> と <i>b</i><sup>2</sup> の二つの波列は、干渉しないときには、当たるすべての点に強さ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> を与える。干渉するときには、極大は (<i>a</i> + <i>b</i>)<sup>2</sup> で 2<i>a</i><i>b</i> だけ大きく、極小は (<i>a</i> − <i>b</i>)<sup>2</sup> でちょうど同じだけ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> より小さい。

訳注：フレネル（Augustin-Jean Fresnel, 1788–1827）はフランスの物理学者。

### ¶40　p.23–25

> Vernichtet wird die lebendige Kraft der elastischen Wellen erst bei denjenigen Vorgängen, welche wir als Absorption derselben bezeichnen. Die Absorption der Schallwellen finden wir hauptsächlich durch das Gegenstossen gegen nachgiebige unelastische Körper, z. B. Vorhänge, Decken befördert, dürfen sie also wohl hauptsächlich für einen Uebergang der Bewegung an die getroffenen Körper und Vernichtung in diesen durch Reibung halten; ob die Bewegung auch durch Reibung der Lufttheilchen gegen [p.24] einander vernichtet werden könne, möchte noch nicht zu entscheiden sein. Die Absorption der Wärmestrahlen wird von einer proportionalen Wärmeentwicklung begleitet; in wiefern die letztere einem gewissen Kraftäquivalente entspreche, werden wir im nächsten Abschnitt behandeln. Die Erhaltung der Kraft würde stattfinden, wenn so viel Wärme, als in dem ausstrahlenden Körper verschwindet, in dem bestrahlten wiedererscheint, vorausgesetzt, dass keine Ableitung stattfinde, und kein Theil der Strahlung anderswohin gelangt. Das Theorem ist bei den Versuchen über Wärmestrahlung bisher wohl vorausgesetzt worden, doch sind mir keine Versuche zu seiner Begründung bekannt. Bei der Absorption der Lichtstrahlen durch die unvollkommen oder gar nicht durchsichtigen Körper kennen wir dreierlei Vorgänge. Zuerst nehmen die phosphorescirenden Körper das Licht in solcher Weise in sich auf, dass sie es nachher wieder als Licht entlassen können. Zweitens scheinen die meisten, vielleicht alle Lichtstrahlen Wärme zu erregen. Der Annahme von der Identität der wärmenden, leuchtenden und chemischen Strahlen des Spectrum sind in der neueren Zeit die scheinbaren Hindernisse immer mehr aus dem Wege geräumt [注2], nur scheint das Wärmeäquivalent der chemischen und leuchtenden Strahlen ein höchst geringes zu sein im Vergleich zu ihrer intensiven Wirkung auf das Auge. Sollte sich die Gleichartigkeit dieser verschieden wirkenden Strahlungen aber nicht bestätigen, so würden wir allerdings das Ende der Lichtbewegung für ein unbekanntes erklären müssen. In vielen Fällen drittens er- [p.25] zeugt das absorbirte Licht chemische Wirkungen. In Bezug auf die Kraftverhältnisse werden hier zweierlei Arten solcher Wirkungen unterschieden werden müssen, einmal diejenigen, wo es nur den Anstoss zur Thätigkeit der chemischen Verwandtschaft giebt, ähnlich den katalytisch wirkenden Körpern, z. B. die Wirkung auf ein Gemenge von Chlor und Wasserstoff; und zweitens diejenigen, wo es den chemischen Verwandtschaften entgegenwirkt, z. B. bei der Zersetzung der Silbersalze, bei der Einwirkung auf grüne Pflanzentheile. Bei den meisten dieser Vorgänge sind aber die Resultate der Lichteinwirkung noch so wenig gekannt, dass wir über die Grösse der dabei auftretenden Kräfte noch gar nicht urtheilen können; bedeutend durch ihre Quantität und Intensität scheinen dieselben nur bei der Einwirkung auf die grünen Pflanzentheile zu sein.

弾性波の活力が消されるのは、われわれがその吸収と呼ぶ過程においてはじめてである。音波の吸収は、主に、柔らかく非弾性の物体、たとえば幕や覆いに突き当たることで進むとわかる。それゆえ吸収は、主に、当たった物体へ運動が移り、その物体の中で摩擦によって消されることだと考えてよいだろう。運動が空気の粒子どうしの摩擦によっても消されうるかどうかは、まだ決められないだろう。熱線の吸収には、それに比例した熱の発生が伴う。後者がどこまで一定の力の当量（Kraftäquivalent）に当たるかは、次の節で扱う。放射する物体で消えるのと同じだけの熱が、照らされた物体にふたたび現れるなら、力の保存が成り立つことになろう。ただし熱の伝導による逃げがなく、放射のどの部分もほかへ行かないとしてである。この定理は、熱の放射についてのこれまでの実験で、おそらく前提されてきた。しかし、それを裏づける実験を私は知らない。不完全にしか透き通らない物体、あるいはまったく透き通らない物体による光線の吸収では、三種の過程が知られている。第一に、燐光を発する物体は、あとでふたたび光として出せるような仕方で光を取り込む。第二に、たいていの光線、おそらくはすべての光線が、熱を起こすように見える。スペクトルの、温める線・光る線・化学作用をもつ線が同じものだという仮定に対しては、近年、見かけの障りがますます取り除かれてきた [注2]。ただ、化学作用をもつ線と光る線の熱の当量は、目に対するそれらの強い作用に比べて、きわめて小さいように見える。もし、作用の異なるこれらの放射が同じ種類のものであることが確かめられないなら、光の運動の行き着く先は知られていないと言わねばならないことになろう。第三に、多くの場合、吸収された光は化学作用を生む。力の関係からいえば、ここでは、そうした作用を二種に分けねばならないだろう。一つは、光が化学的親和力（Verwandtschaft）の働きにきっかけを与えるだけの場合で、触媒として働く物体に似ている。たとえば塩素と水素の混合物への作用である。もう一つは、光が化学的親和力に逆らって働く場合で、たとえば銀塩の分解や、植物の緑の部分への作用である。しかし、これらの過程のたいていでは、光の作用の結果がまだほとんど知られておらず、そこに現れる力の大きさについては、まだまったく判断できない。量と強さの点で大きいと見えるのは、植物の緑の部分への作用だけである。

訳注：「Ableitung」はここでは熱の伝導による（物体の外への）逃げを指す。
訳注：「Spectrum」は誌面のまま（属格の語尾なし）。

### ¶41　p.25

> IV. Das Kraftäquivalent der Wärme.

IV. 熱の力の当量

### ¶42　p.25

> Diejenigen mechanischen Vorgänge, bei welchen man bisher einen absoluten Verlust von Kraft angenommen hat, sind:

これまで力が絶対的に失われると考えられてきた力学的な過程は、次のものである。

### ¶43　p.25

> 1) *Der Stoss unelastischer Körper.* Derselbe ist meist mit einer Formveränderung und Verdichtung der gestossenen Körper verbunden, also mit Vermehrung der Spannkräfte; dann finden wir bei oft wiederholten Stössen der Art eine beträchtliche Wärmeentwicklung z. B. beim Hämmern eines Metallstücks; endlich wird ein Theil der Bewegung als Schall an die anstossenden festen und luftförmigen Körper abgegeben.

1) *非弾性体の衝突。* これはたいてい、ぶつかった物体の形の変化と圧縮を伴う。つまり緊張力の増加を伴う。次に、この種の衝突を何度も繰り返すと、たとえば金属片を槌で打つときのように、かなりの熱が生じる。最後に、運動の一部は音として、接している固体と気体へ渡される。

### ¶44　p.26

> 2) *Die Reibung*, sowohl an den Oberflächen zweier sich über einander hinbewegender Körper, als im Innern derselben bei Formveränderungen, durch die Verschiebung der kleineren Theilchen aneinander hervorgebracht. Auch bei der Reibung finden meistens geringe Veränderungen in der molecülären Constitution der Körper namentlich im Anfang ihres Aneinanderreibens statt; späterhin pflegen sich die Oberflächen einander so zu accommodiren, dass diese Veränderungen bei fernerer Bewegung als verschwindend klein zu setzen sein möchten. In manchen Fällen fehlen dieselben wohl ganz, z. B. wenn Flüssigkeiten sich an festen Körpern oder unter einander reiben. Ausserdem finden aber stets auch thermische und electrische Aenderungen statt.

2) *摩擦。* 互いの上を動く二つの物体の表面での摩擦も、形が変わるときに小さな部分どうしがずれ合うことで物体の内部に生じる摩擦も含む。摩擦でもたいていは、とくに擦れ合い始めのころに、物体の分子の構成にわずかな変化が起きる。のちには表面が互いになじみ、その先の運動ではこの変化を消えるほど小さいとみなしてよいほどになる。液体が固体に擦れるとき、液体どうしが擦れるときのように、この変化がまったく無い場合もあろう。しかしそれとは別に、熱と電気の変化がいつも起きる。

### ¶45　p.26–27

> Man pflegt in der Mechanik die Reibung als eine Kraft darzustellen, welche der vorhandenen Bewegung entgegen wirkt, und deren Intensität eine Function der Geschwindigkeit ist. Offenbar ist diese Auffassung nur ein zum Behuf der Rechnungen gemachter, höchst unvollständiger Ausdruck des complicirten Vorgangs, bei welchem die verschiedensten Molecülarkräfte in Wechselwirkung treten. Aus jener Auffassung folgte, dass bei der Reibung lebendige Kraft absolut verloren ginge, ebenso nahm man es beim elastischen Stosse an. Dabei ist aber nicht berücksichtigt worden, dass abgesehen von der Vermehrung der Spannkräfte durch die Compression der reibenden oder gestossenen Körper, uns sowohl die gewonnene Wärme eine Kraft repräsentirt, durch welche wir mechanische Wirkungen erzeugen können, als auch die meistentheils erzeugte Electricität entweder direct durch ihre anziehenden und abstossenden Kräfte, oder indirect dadurch dass sie Wärme entwickelt. Es bliebe also [p.27] zu fragen übrig, ob die Summe dieser Kräfte immer der verlorenen mechanischen Kraft entspricht. In den Fällen, wo die molecülaren Aenderungen und die Electricitätsentwicklung möglichst vermieden sind, würde sich diese Frage so stellen, ob für einen gewissen Verlust an mechanischer Kraft jedesmal eine bestimmte Quantität Wärme entsteht, und inwiefern eine Wärmequantität einem Aequivalent mechanischer Kraft entsprechen kann. Zur Lösung der ersteren Frage sind erst wenige Versuche angestellt. *Joule* [注3] hat die Wärmemengen untersucht, welche bei der Reibung des Wassers in engen Röhren und in einem Gefässe entwickelt werden, wo es durch ein nach Art einer Turbine construirtes Rad in Bewegung gesetzt wurde; er hat im ersteren Falle gefunden, dass die Wärme, welche 1 Kilogr. Wasser um 1°C erwärmt, 452 Kilogr. um ein Meter hebt, im zweiten 521 Kilogr. Indessen entsprechen seine Messungsmethoden zu wenig der Schwierigkeit der Untersuchung, als dass diese Resultate irgendwie auf Genauigkeit Anspruch machen könnten; wahrscheinlich sind diese Zahlen zu hoch, weil bei seinem Verfahren wohl leicht Wärme für die Beobachtung verloren werden konnte, dagegen der nothwendige Verlust der mechanischen Kraft in den übrigen Maschinentheilen von dieser nicht in Abrechnung gebracht ist.

力学では摩擦を、今ある運動に逆らって働き、その強さが速度の関数である力として表すのが常である。明らかに、この捉え方は計算のために作った、きわめて不完全な表現にすぎない。実際の過程は込み入っており、さまざまな分子力が互いに作用し合っている。その捉え方からは、摩擦では活力が絶対的に失われることになる。弾性衝突でも同じことが考えられていた。しかしそこでは、次のことが考えに入れられていなかった。擦れ合う物体やぶつかった物体が圧縮されて緊張力が増えることを別にしても、生じた熱は、それによって力学的な作用を生み出せる一つの力を表している。たいていの場合に生じる電気も、引き合う力と押し返す力によって直接に、あるいは熱を生じることで間接に、力を表している。そこで残る問いは、これらの力の和がいつも、失われた力学的な力に見合うかどうかである。分子の変化と電気の発生ができるだけ避けられている場合には、この問いは次の形をとる。力学的な力がある量だけ失われるたびに、決まった量の熱が生じるか。また熱の量は、どの程度まで力学的な力の当量に見合いうるか。前者の問いを解くための実験は、まだわずかしか行われていない。ジュール [注3] は、細い管の中で水が擦れるときと、タービンのように作られた車で水を動かす容器の中とで生じる熱量を調べた。前者では、1 キログラムの水を 1°C 温める熱が 452 キログラムを 1 メートル持ち上げることにあたり、後者では 521 キログラムであった。ただ、彼の測り方は調べの難しさに比べて粗すぎ、これらの結果がいくらかでも正確だと言えるものではない。おそらくこれらの数は高すぎる。彼の手順では熱が観測から漏れやすかったであろうし、一方で、費やした力学的な力から、機械の残りの部分で必ず失われる分が差し引かれていないからである。

訳注：誌面は「beim elastischen Stosse」（弾性衝突で）。1) の見出しは「Der Stoss unelastischer Körper」（非弾性体の衝突）。訳は誌面のとおりにした。
訳注：ここでの「1 キログラムの水を 1°C 温める熱が 452 キログラムを 1 メートル持ち上げる」は、今の言い方では熱の仕事当量を kgf·m/kcal で表したものに当たる。

### ¶46　p.27–28

> Wenden wir uns nun zu der ferneren Frage, in wie weit Wärme einem Kraftäquivalent entsprechen könne. Die materielle Theorie der Wärme muss nothwendig die Quantität des Wärmestoffs als constant ansehen; mechanische [p.28] Kraft kann er nach ihr nur durch sein Streben sich auszudehnen erzeugen. Für sie kann das Kraftäquivalent der Wärme also auch nur in der Arbeit bestehen, welche dieselbe bei ihrem Uebergang aus einer höheren in eine niedere Temperatur leistet; in diesem Sinne haben *Carnot* und *Clapeyron* die Aufgabe bearbeitet, und alle Folgerungen aus der Annahme eines solchen Aequivalents wenigstens für Gase und Dämpfe bestätigt gefunden.

では、熱がどの程度まで力の当量に見合いうるか、という次の問いに移ろう。熱の物質説は、熱素（Wärmestoff）の量を必ず一定とみなさなければならない。この説によれば、熱素は膨らもうとする傾きによってしか力学的な力を生み出せない。したがってこの説にとっては、熱の力の当量も、熱がより高い温度からより低い温度へ移るときにする仕事にしかありえない。この意味でカルノーとクラペイロンはこの課題に取り組み、そのような当量を仮定して出てくる帰結を、少なくとも気体と蒸気については、すべて確かめられたと見た。

訳注：カルノーは Sadi Carnot（1796–1832）、クラペイロンは Émile Clapeyron（1799–1864）。

### ¶47　p.28–31

> Um die Reibungswärme zu erklären, muss die materielle Theorie entweder annehmen, dass dieselbe von aussen zugeleitet sei, nach *W. Henry* [注4], oder dass dieselbe nach *Berthollet* [注5] durch Compression der Oberflächen und der abgeriebenen Theile entstehe. Der ersteren Annahme fehlt bisher noch jede Erfahrung, dass in der Umgegend geriebener Theile eine der oft gewaltigen Wärmemenge entsprechende Kälte entwickelt werde; die zweite, abgesehen davon, dass sie eine ganz unwahrscheinlich grosse Wirkung der durch die hydrostatische Wage meist nicht wahrnehmbaren Verdichtung annehmen muss, scheitert ganz bei der Reibung von Flüssigkeiten, und bei den Versuchen, wo Eisenkeile durch Hämmern glühend und weich gemacht, Eisstücke durch Reibung geschmolzen werden [注6], da doch das weichgewordene Eisen und das durch Schmelzung entstandene Wasser nicht in dem comprimirten Zustande geblieben sein können. Ausserdem beweist uns aber auch die Erzeugung von Wärme durch electrische Bewegungen, dass [p.29] die Quantität der Wärme in der That absolut vermehrt werden könne. Wenn wir auch die Reibungselectricität und die voltaische übergehn, weil man annehmen könnte, durch irgend eine Verbindung und Beziehung der Electricitäten zum Wärmestoff, werde in diesen Fällen derselbe nur von der Ursprungsstelle fortgeführt und in dem erwärmten Leitungsdrath abgesetzt: so bleiben uns noch zwei Wege übrig, electrische Spannungen auf rein mechanischem Wege hervorzubringen, wobei nirgends Wärme vorhanden ist, welche fortgeführt werden könnte, nämlich durch Vertheilung und durch Bewegung von Magneten. Haben wir einen positiv electrischen vollkommen isolirten Körper, der seine Electricität nicht verlieren kann, so wird ein angenäherter isolirter Leiter freie +<i>E</i> zeigen, wir werden diese auf die Innenseite einer Batterie entladen können, den Leiter entfernen, worauf er freie −<i>E</i> enthält, welche in die Aussenseite der ersten oder in eine zweite Batterie entladen wird. Wir werden durch Wiederholung dieses Verfahrens offenbar eine beliebig grosse Batterie beliebig oft laden, und durch ihre Entladung Wärme erzeugen können, ohne dass dieselbe irgendwo verschwindet. Dagegen werden wir eine gewisse mechanische Kraftgrösse verbraucht haben, weil bei jeder Entfernung des negativ geladenen Leiters von dem positiven vertheilenden Körper die Anziehung zwischen beiden überwunden werden muss. Im Wesentlichen wird dieses Verfahren offenbar ausgeführt bei dem Gebrauche des Electrophors zur Ladung einer Leydner Flasche. Derselbe Fall findet bei den magnetelectrischen Maschinen statt; so lange Magnet und Anker gegeneinander bewegt werden, entstehen electrische Ströme, welche im Schliessungsdrath Wärme erzeugen; und indem sie der Bewegung des Ankers [p.30] gegen den Magneten fortdauernd entgegenwirken, dafür einen gewissen Theil der mechanischen Kraft zerstören. Es kann hier offenbar aus den die Maschine constituirenden Körpern in das Unendliche Wärme entwickelt werden, ohne dass dieselbe irgendwo verschwände. Dass der magnetelectrische Strom auch in dem direct unter dem Einfluss des Magneten stehenden Theil der Spirale Wärme, und nicht Kälte, erzeugt, hat direct durch das Experiment *Joule* [注7] zu beweisen gesucht. Aus diesen Thatsachen folgt nun, dass die Quantität der Wärme absolut vermehrt werden könne durch mechanische Kräfte, dass deshalb die Wärmeerscheinungen nicht hergeleitet werden können von einem Stoffe, welcher durch sein blosses Vorhandensein dieselben bedinge, sondern dass sie abzuleiten seien von Veränderungen, von Bewegungen, sei es eines eigenthümlichen Stoffes, sei es der schon sonst bekannten ponderablen und imponderablen Körper, z. B. der Electricitäten oder des Lichtäthers. Das, was bisher Quantität der Wärme genannt worden ist, würde hiernach der Ausdruck sein erstens für die Quantität der lebendigen Kraft der Wärmebewegung und zweitens für die Quantität derjenigen Spannkräfte in den Atomen, welche bei einer Veränderung ihrer Anordnung eine solche Bewegung hervorbringen können; der erstere Theil würde dem entsprechen, was bisher freie, der zweite dem, was latente Wärme genannt ist. Wenn es erlaubt ist, einen Versuch zu machen, den Begriff dieser Bewegung noch bestimmter zu fassen, so scheint im Allgemeinen eine der Ansicht von *Ampère* sich anschliessende Hypothese dem jetzigen Zustand der Wissenschaft am besten zu entsprechen. Denken wir [p.31] uns die Körper aus Atomen gebildet, welche selbst aus differenten Theilchen bestehen, (chemischen Elementen, Electricitäten etc.) so können an einem solchen Atom dreierlei Arten von Bewegungen unterschieden werden, nämlich 1) Verschiebung des Schwerpuncts, 2) Drehung um den Schwerpunct, 3) Verschiebungen der Theilchen des Atoms gegeneinander. Die beiden ersteren würden durch die Kräfte der Nachbaratome ausgeglichen werden, und sich deshalb auf diese in Wellenform fortpflanzen, eine Fortpflanzungsart, welche wohl der Strahlung, nicht aber der Leitung der Wärme entspricht. Bewegungen der einzelnen Theile des Atoms gegen einander, würden sich durch die innerhalb des Atoms befindlichen Kräfte ausgleichen, und die Nachbaratome nur langsam in Mitbewegung setzen können, wie eine schwingende Saite die andere, dafür aber selbst eine gleiche Quantität Bewegung verlieren; diese Art der Fortpflanzung scheint der der geleiteten Wärme ähnlich zu sein. Auch ist im Allgemeinen klar, dass solche Bewegungen in den Atomen Aenderungen in den Molecülarkräften, also Ausdehnung und Aenderung des Aggregatzustands, hervorbringen können; welcher Art aber diese Bewegungen seien, zu bestimmen, dazu fehlen uns alle Anhaltspuncte, auch ist für unseren Zweck die Einsicht der Möglichkeit hinreichend, dass die Wärmeerscheinungen als Bewegungen gefasst werden können. Die Erhaltung der Kraft würde bei dieser Bewegung so weit stattfinden, als bisher die Erhaltung der Quantität des Wärmestoffs erkannt ist, nämlich bei allen Erscheinungen der Leitung und Strahlung aus einem Körper zu dem andern, bei der Bindung und Entbindung von Wärme durch Aenderung des Aggregatzustandes.

摩擦熱を説明するには、物質説は次のどちらかを仮定しなければならない。ヘンリー [注4] に従って、熱が外から導かれてきたとするか、ベルトレ [注5] に従って、表面と削り取られた部分が圧縮されて熱が生じるとするかである。前者の仮定には、擦られた部分の周りに、しばしば莫大な熱量に見合う冷えが生じるという経験が、これまで一つも無い。後者は、静水天秤でもたいてい捉えられない程度の圧縮に、まったくありそうもないほど大きな作用を認めなければならない。そのことを別にしても、後者は、液体の摩擦と、鉄のくさびを槌で打って赤熱させ軟らかくする実験や、氷片を摩擦で融かす実験 [注6] とで、完全に行き詰まる。軟らかくなった鉄や、融けてできた水が、圧縮された状態のままでいられたはずはないからである。そのうえ、電気の運動によって熱が生じることも、熱の量が実際に絶対的に増えうることをわれわれに示している。摩擦電気とヴォルタの電気は措くとしよう。電気と熱素との何らかの結びつき・関わりによって、これらの場合には熱素が元の場所から運ばれ、熱せられた導線に置かれるだけだ、と仮定することもできるからである。それでもなお、純粋に力学的なやり方で電気の張り（Spannung）を生み出す道が二つ残る。そこには運ばれうる熱はどこにも無い。すなわち、分布（Vertheilung）によるものと、磁石の運動によるものである。完全に絶縁され、電気を失いえない、正に帯電した物体があるとしよう。そこに絶縁された導体を近づけると、導体は自由な +<i>E</i> を示す。これをバッテリー（Batterie）の内側に放電させ、導体を遠ざけると、導体は自由な −<i>E</i> を含む。これを最初のバッテリーの外側か、二つめのバッテリーに放電させる。この手順を繰り返せば、明らかに、いくらでも大きなバッテリーを何度でも充電でき、その放電によって熱を生み出せる。しかもその熱はどこでも消えない。その代わり、われわれはある量の力学的な力を使い果たしたことになる。負に帯電した導体を、分布を起こす正の物体から遠ざけるたびに、両者の間の引力に打ち勝たなければならないからである。本質的には、この手順は、電気盆（Electrophor）でライデン瓶を充電するときに明らかに行われている。磁気電気の機械でも同じことが起きる。磁石と接極子（Anker）を互いに動かしている間、電流が生じ、閉じる導線（Schliessungsdrath）で熱を生む。そして電流は、接極子の磁石に対する運動にずっと逆らって働き、その代わりに力学的な力のある部分を壊す。ここでは明らかに、機械を作る物体から熱を限りなく生み出せ、しかもその熱はどこでも消えない。磁気電気の電流が、磁石の影響を直接に受けるコイルの部分でも、冷えでなく熱を生むことを、ジュール [注7] は実験によって直接に示そうとした。これらの事実から次のことが出てくる。熱の量は、力学的な力によって絶対的に増えうる。したがって熱の現象は、ただそこに在ることで熱の現象を生じさせる物質から導くことはできず、変化から、運動から導かなければならない。それが特有の物質の運動であれ、すでに別に知られている重さのある物体や重さの無い物体、たとえば電気や光のエーテルの運動であれ、である。これによれば、これまで熱の量と呼ばれてきたものは、第一に熱運動の活力の量を、第二に、原子の中の緊張力のうち、原子の配置が変わるときにそのような運動を生みうるものの量を表すことになる。前者はこれまで自由な熱と呼ばれてきたものに、後者は潜熱と呼ばれてきたものに当たる。この運動の概念をさらにはっきり捉えようと試みてよいなら、全体として、アンペールの見方に連なる仮説が、今の科学の状態にいちばん合っているように思われる。物体は原子からなり、原子はさらに異なる小部分（化学元素、電気など）からなると考えよう。すると、そのような原子では三種類の運動を区別できる。すなわち、1) 重心のずれ、2) 重心の周りの回転、3) 原子の小部分どうしのずれである。前の二つは、隣の原子の力によってならされ、そのため隣の原子へ波の形で伝わるだろう。これは熱の放射には当たるが、伝導には当たらない伝わり方である。原子の個々の部分どうしの運動は、原子の内にある力によってならされ、一本の振れる弦が別の弦を共に振らせるように、隣の原子をゆっくりとしか共に動かせない。その代わり、自らは同じ量の運動を失う。この伝わり方は、伝導される熱の伝わり方に似ているように思われる。また全体として、原子の中のそのような運動が分子力の変化を、したがって膨張と集合状態の変化を生みうることも明らかである。しかし、これらの運動がどのような種類のものかを決める手がかりは、われわれには何も無い。われわれの目的には、熱の現象を運動として捉えうるという可能性を見てとるだけで足りる。この運動での力の保存は、これまで熱素の量の保存が認められてきたのと同じ範囲で成り立つであろう。すなわち、ある物体から別の物体への伝導と放射のあらゆる現象において、また集合状態の変化による熱の吸収と放出（Bindung und Entbindung）においてである。

訳注：ここの Batterie は、ライデン瓶をつないだ組のことで、今の化学電池ではない。
訳注：張り（Spannung）は、今の言い方では電位差・電圧に当たる。
訳注：ここでの分布（Vertheilung）は、帯電した物体を近づけて導体の中の電気の分布を変えること。今の言い方では静電誘導に当たる。
訳注：電気盆（Electrophor）は、摩擦で帯電させた板の上に金属板を載せ、静電誘導で電気を取り出す器具。
訳注：「hat direct durch das Experiment Joule zu beweisen gesucht」は誌面のとおり（主語 Joule が後に置かれた語順）。
訳注：重さのある／重さの無い（ponderabel / imponderabel）は、当時の、重さの量れる物質と、熱素・電気流体・光のエーテルのように重さの量れない物質との区別。
訳注：アンペールは André-Marie Ampère（1775–1836）。

### ¶48　p.32

> Von den verschiedenen Entstehungsweisen der Wärme haben wir die durch Einstrahlung und durch mechanische Kräfte besprochen, die durch Electricität werden wir unten durchgehen. Es bleibt die Wärmeentwicklung durch chemische Processe. Man hat dieselbe bisher für ein Freiwerden von Wärmestoff erklärt, welcher in den sich verbindenden Körpern latent vorhanden sei. Da man hiernach jedem einfachen Körper und jeder chemischen Verbindung, die noch weitere Verbindungen höherer Ordnung eingehen kann, eine bestimmte Quantität latenter Wärme beilegen musste, welche nothwendig mit zu ihrer chemischen Constitution gehörte: so folgte hieraus das Gesetz, welches man auch theilweise in der Erfahrung bewahrheitet hat, dass nämlich bei der chemischen Verbindung mehrerer Stoffe zu gleichen Producten stets gleich viel Wärme hervorgebracht werde, in welcher Ordnung und in welchen Zwischenstufen auch die Verbindung vor sich gehen möge [注8]. Nach unserer Vorstellungsweise würde die bei chemischen Processen entstehende Wärme die Quantität der lebendigen Kraft sein, welche durch die bestimmte Quantität der chemischen Anziehungskräfte hervorgebracht werden kann, und das obige Gesetz würde der Ausdruck für das Princip von der Erhaltung der Kraft in diesem Falle werden.

熱のさまざまな生じ方のうち、われわれは、放射を受けることによるものと、力学的な力によるものとを論じた。電気によるものは、のちに扱う。残るのは、化学過程による熱の発生である。これまでそれは、結びつく物体の中に潜んで在った熱素が自由になることだと説明されてきた。そのためには、どの単体にも、さらに高い次の結合に入りうるどの化合物にも、その化学的な成り立ちの一部として必ず属する、決まった量の潜熱を割り当てなければならなかった。ここから次の法則が出てきた。いくつかの物質が化学的に結びついて同じ生成物になるときには、結合がどの順序で、どの中間段階を経て進もうと、常に同じだけの熱が生じる [注8]。この法則は経験でも部分的に確かめられている。われわれの考え方によれば、化学過程で生じる熱は、化学的な引力の決まった量によって生み出されうる活力の量であり、上の法則は、この場合の力の保存の原理を表すものとなる。

訳注：この法則は、今の言い方ではヘスの法則（総熱量保存の法則）に当たる。

### ¶49　p.32–33

> Ebenso wenig, als man die Bedingungen und Gesetze der Erzeugung von Wärme untersucht hat, obgleich eine solche unzweifelhaft stattfindet, ist dies für das Verschwinden derselben geschehen. Bisher kennt man nur die Fälle, wo chemische Verbindungen aufgehoben wurden, oder dünnere Aggregatzustände eintraten, und dadurch Wärme latent [p.33] wurde. Ob bei der Erzeugung mechanischer Kraft Wärme verschwinde, was ein nothwendiges Postulat der Erhaltung der Kraft sein würde, ist noch niemals gefragt worden. Ich kann dafür nur einen Versuch von *Joule* [注9] anführen, der ziemlich zuverlässig zu sein scheint. Derselbe fand nämlich, dass die Luft bei dem Ausströmen aus einem Behälter von 136,5 Cubikzollen, in welchem sie unter 22 Atmosphären Druck stand, das umgebende Wasser um 4°,085 *F.* erkältete, sobald sie in die Atmosphäre ausströmte, also deren Widerstand zu überwinden hatte. Dagegen trat keine Temperaturveränderung ein, wenn dieselbe in ein luftleeres, ebenso grosses Gefäss überströmte, welches in demselben Wassergefäss stand, wo sie also keinen Widerstand zu überwinden hatte, und keine mechanische Kraft ausübte.

熱の生成は疑いなく起きているのに、その条件と法則が調べられてこなかったのと同じく、熱が消えることについても調べられてこなかった。これまで知られているのは、化合が解かれる場合や、より薄い集合状態に移る場合で、それによって熱が潜熱になる場合だけである。力学的な力が生み出されるときに熱が消えるかどうかは、力の保存の必然の要請となるはずのことだが、まだ一度も問われたことがない。これについて私が挙げられるのは、かなり信頼できると思われるジュール [注9] の実験一つだけである。ジュールは次のことを見いだした。136.5 立方インチの容器に 22 気圧で入れた空気は、大気中へ流れ出るとき、つまり大気の抵抗に打ち勝たなければならないときには、周りの水を 4.085°F 冷やした。これに対し、同じ水槽の中に置いた同じ大きさの真空の容器へ流れ込むとき、つまり打ち勝つべき抵抗が無く、力学的な力を及ぼさないときには、温度の変化は起きなかった。

訳注：誌面の「4°,085 F.」は華氏 4.085 度。数の小数点は誌面ではコンマ（136,5 など）。訳では点にした。

### ¶50　p.33–35

> Wir haben jetzt noch zu untersuchen, in welchem Verhältniss die Versuche von *Clapeyron* [注10] und *Holtzmann* [注11], das Kraftäquivalent der Wärme herzuleiten, zu dem unsrigen stehn. *Clapeyron* geht aus von der Betrachtung, dass die Wärme nur durch ihre Verbreitung aus einem wärmeren Körper in einen anderen kälteren als Mittel zur Erzeugung mechanischer Kraft benutzt werden könne, und dass das Maximum der letzteren gewonnen werden müsse, wenn die Ueberleitung der Wärme nur zwischen Körpern gleicher Temperatur stattfinde, die Temperaturänderungen aber durch Compression und Dilatation der erwärmten Körper bewirkt würden. Dieses Maximum müsse aber für alle Naturkörper, [p.34] welche durch Erwärmung und Erkältung eine mechanische Arbeit leisten könnten, dasselbe sein; denn wäre es verschieden, so würde man den einen Körper, in welchem ein gewisses Wärmequantum die grössere Wirkung giebt, zur Gewinnung von mechanischer Arbeit benutzen können, und einen Theil dieser letztern dann, um mit dem andern Körper rückwärts die Wärme wieder aus der kältern in die wärmere Quelle zurückzubringen, und man würde so in das Unendliche mechanische Kraft gewinnen, wobei aber stillschweigend vorausgesetzt wird, dass die Quantität der Wärme dadurch nicht verändert werde. Analytisch stellt er dies Gesetz in folgendem allgemeinen Ausdrucke dar:
>
> (<i>dq</i>/<i>dv</i>) · (<i>dt</i>/<i>dp</i>) − (<i>dq</i>/<i>dp</i>) · (<i>dt</i>/<i>dv</i>) = <i>C</i>
>
> worin <i>q</i> die Quantität der Wärme, welche ein Körper enthält, <i>t</i> seine Temperatur, beide ausgedrückt als Functionen von <i>v</i> dem Volumen und <i>p</i> dem Druck. 1/<i>C</i> ist die mechanische Arbeit, welche die Einheit der Wärme (die 1 Kilogr. Wasser um 1°<i>C</i> erwärmt) leistet, wenn sie in eine um 1° niedrigere Temperatur übergeht. Dieselbe soll für alle Naturkörper identisch sein, aber nach der Temperatur veränderlich. Für Gase wird diese Formel
>
> <i>C</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>).
>
> *Clapeyrons* Folgerungen aus der Allgemeingültigkeit dieser Formel haben wenigstens für Gase eine grosse Zahl von erfahrungsmässigen Analogien für sich. Seine Ableitung des Gesetzes kann nur zugegeben werden, wenn die absolute Quantität der Wärme als unveränderlich betrachtet [p.35] wird; übrigens folgt seine speciellere Formel für Gase, welche allein durch Vergleichung mit der Erfahrung unterstützt ist, auch aus der Formel von *Holtzmann*, wie wir sogleich zeigen werden. Von der allgemeinen Formel hat er nur zu zeigen gesucht, dass das daraus folgende Gesetz der Erfahrung wenigstens nicht widerspricht. Dieses Gesetz ist, dass wenn der Druck auf verschiedene Körper, genommen bei gleicher Temperatur, um eine kleine Grösse erhöht wird, Wärmemengen entwickelt werden, die proportional sind ihrer Ausdehnbarkeit durch die Wärme. Nur auf eine mindestens sehr unwahrscheinliche Folgerung dieses Gesetzes will ich aufmerksam machen. Compression des Wassers bei dem Wendepunct seiner Dichtigkeit würde nämlich keine Wärme, zwischen diesem und dem Gefrierpunct aber Kälte erzeugen.

さて残るのは、熱の力の当量を導こうとしたクラペイロン [注10] とホルツマン [注11] の試みが、われわれの試みとどういう関係にあるかを調べることである。クラペイロンは次の考察から出発する。熱は、より温かい物体からより冷たい別の物体へ広がることによってしか、力学的な力を生む手段として使えない。そして力学的な力の最大量が得られるのは、熱の移しが等しい温度の物体の間でだけ起こり、温度の変化は熱せられた物体の圧縮と膨張によって起こされるときである。この最大量は、熱することと冷やすことで力学的な仕事をしうるすべての自然物体について同じでなければならない。もし違っていれば、ある熱量がより大きな作用を与える一方の物体を使って力学的な仕事を得、その仕事の一部を使って、もう一方の物体で逆向きに熱をより冷たい源からより温かい源へ戻すことができる。こうして力学的な力を限りなく得られることになる。ただしここでは、熱の量がそれによって変わらないことが、暗に前提されている。彼はこの法則を、解析的に次の一般の式で表す。

(<i>dq</i>/<i>dv</i>) · (<i>dt</i>/<i>dp</i>) − (<i>dq</i>/<i>dp</i>) · (<i>dt</i>/<i>dv</i>) = <i>C</i>

ここで <i>q</i> は物体が含む熱の量、<i>t</i> はその温度で、どちらも体積 <i>v</i> と圧力 <i>p</i> の関数として表す。1/<i>C</i> は、熱の単位（1 キログラムの水を 1°C 温める熱）が 1° 低い温度へ移るときにする力学的な仕事である。これはすべての自然物体で同じだが、温度によって変わるとされる。気体では、この式は次のようになる。

<i>C</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>).

この式が一般に成り立つとしてクラペイロンが引き出した帰結は、少なくとも気体については、経験上の多くの類例を味方にしている。彼の法則の導き方は、熱の絶対量を変わらないものとみなすときにしか認められない。もっとも、気体についての彼のより特殊な式は、経験との比べ合わせで支えられている唯一のものだが、すぐあとで示すように、ホルツマンの式からも出てくる。一般の式については、彼は、そこから出てくる法則が少なくとも経験に反しないことを示そうとしただけである。その法則とは、同じ温度にあるさまざまな物体にかかる圧力を少しだけ上げると、それぞれの熱による膨張のしやすさに比例する熱量が生じる、というものである。この法則の、少なくともきわめてありそうもない帰結を一つだけ指摘しておこう。水を、その密度の転回点で圧縮しても熱は生じず、その点と凝固点との間で圧縮すると冷えが生じることになるのである。

訳注：式の <i>d</i> は、今の書き方の偏微分 ∂ に当たる。
訳注：1/<i>C</i> の説明の「1°C」の C は誌面でイタリックに組まれている（摂氏の C。式の定数 <i>C</i> とは別）。
訳注：密度の転回点は、水の密度が最大になる温度（約 4°C）を指す。

### ¶51　p.35–36

> *Holtzmann* geht aus von der Betrachtung, dass eine gewisse Wärmemenge, welche in ein Gas eintritt, darin entweder eine Temperaturerhöhung oder eine Ausdehnung ohne Temperaturerhöhung erzeugen kann. Die durch diese Ausdehnung zu leistende Arbeit nahm er als das mechanische Aequivalent der Wärme, und berechnete aus den Schallversuchen von *Dulong* über das Verhältniss der beiden specifischen Wärmen der Gase für die Wärme, welche 1 Kilogr. Wasser um 1°<i>C</i> erwärmt, 374 Kilogr. gehoben um 1 Meter. Diese Art der Berechnung ist von unseren Betrachtungen aus nur zulässig, wenn die ganze lebendige Kraft der hinzugetretenen Wärme wirklich als Arbeitskraft abgegeben ist, also die Summe der lebendigen und Spannkräfte, d. h. die Quantität der freien und latenten Wärme in dem stärker ausgedehnten Gase ganz dieselbe ist, wie in dem dichteren von derselben Temperatur. Danach müsste [p.36] ein Gas, welches ohne Leistung einer Arbeit sich ausdehnt, seine Temperatur nicht ändern, wie es aus dem oben erwähnten Experiment von *Joule* wirklich hervorzugehen scheint, und die Temperaturerhöhung und Erniedrigung bei der Compression und Dilatation unter den gewöhnlichen Umständen würde von einer Erzeugung von Wärme durch mechanische Kraft und umgekehrt herrühren. Für die Richtigkeit des Gesetzes von *Holtzmann* spricht die grosse Menge der mit der Erfahrung übereinstimmend gezogenen Folgerungen, namentlich die Herleitung der Formel für die Elasticität des Wasserdampfs bei verschiedenen Temperaturen.

ホルツマンは次の考察から出発する。気体に入ったある熱量は、そこで温度の上昇を生むか、温度の上昇を伴わない膨張を生むかのどちらかである。彼はこの膨張がなすべき仕事を熱の力学的な当量とし、気体の二つの比熱の比についてのデュロンの音の実験から、1 キログラムの水を 1°C 温める熱が、374 キログラムを 1 メートル持ち上げることにあたると計算した。この計算の仕方は、われわれの考察からすれば、次の場合にだけ許される。加わった熱の活力が全部、実際に仕事をする力（Arbeitskraft）として渡される場合、つまり、活力と緊張力の和、言いかえれば自由な熱と潜熱の量が、より大きく膨らんだ気体でも、同じ温度のより濃い気体でも、まったく同じである場合である。そうであれば、仕事をせずに膨らむ気体は温度を変えないはずである。前に挙げたジュールの実験からは、実際にそうであるように見える。また、ふつうの状況での圧縮と膨張のときの温度の上昇と低下は、力学的な力によって熱が生じること、およびその逆から来ることになる。ホルツマンの法則が正しいことを支えるのは、経験と合う形で引き出された多くの帰結であり、とくに、さまざまな温度での水蒸気の弾性（Elasticität）の式の導出である。

訳注：ホルツマンは Carl Holtzmann（1811–1865）、デュロンは Pierre Louis Dulong（1785–1838）。
訳注：二つの比熱は、定圧比熱と定積比熱。水蒸気の弾性は、今の言い方では蒸気圧に当たる。

### ¶52　p.36

> *Joule* bestimmt aus seinen eigenen Versuchen das Kraftäquivalent, welches *Holtzmann* aus fremden zu 374 berechnet hat, zu 481, 464, 479, während er durch Reibung für das Kraftäquivalent der Wärmeeinheit 452 und 521 gefunden hatte.

ホルツマンが他人の実験から 374 と計算した力の当量を、ジュールは自分の実験から 481、464、479 と定めた。一方、摩擦によっては、熱の単位の力の当量として 452 と 521 を得ていた。

### ¶53　p.36–37

> Die Formel von *Holtzmann* ist übereinstimmend mit der von *Clapeyron* für Gase, nur ist darin auch die unbestimmte Function der Temperatur <i>C</i> gefunden, und dadurch wird die vollständige Bestimmung des Integrals möglich. Die erstere lautet nämlich
>
> <i>p</i><i>v</i>/<i>a</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>)
>
> wo <i>a</i> das Kraftäquivalent der Wärmeeinheit; die von *Clapeyron*
>
> <i>C</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>).
>
> Beide sind also übereinstimmend, wenn <i>C</i> = <i>p</i><i>v</i>/<i>a</i> oder da <i>p</i> = (<i>k</i>/<i>v</i>)(1 + <i>α</i><i>t</i>), wo <i>α</i> der Ausdehnungscoefficient, <i>k</i> eine [p.37] Constante ist, wenn
>
> 1°/<i>C</i> = <i>a</i>/(<i>k</i>(1 + <i>α</i><i>t</i>)).

ホルツマンの式は、気体についてのクラペイロンの式と一致する。ただ、ホルツマンの式では温度の未定の関数 <i>C</i> も求められており、それによって積分を完全に定めることができる。前者は次のとおりである。

<i>p</i><i>v</i>/<i>a</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>)

ここで <i>a</i> は熱の単位の力の当量である。クラペイロンの式は

<i>C</i> = <i>v</i>(<i>dq</i>/<i>dv</i>) − <i>p</i>(<i>dq</i>/<i>dp</i>).

したがって両者は、<i>C</i> = <i>p</i><i>v</i>/<i>a</i> のとき一致する。あるいは、<i>α</i> を膨張係数、<i>k</i> を定数として <i>p</i> = (<i>k</i>/<i>v</i>)(1 + <i>α</i><i>t</i>) であるから、

1°/<i>C</i> = <i>a</i>/(<i>k</i>(1 + <i>α</i><i>t</i>))

のとき一致する。

訳注：最後の式の左辺は、誌面で分子が「1°」と組まれている（度の印が付く）。前の二式からは 1/<i>C</i> = <i>a</i>/(<i>k</i>(1 + <i>α</i><i>t</i>)) が出る。誌面のとおりに置いた。

### ¶54　p.37

> Die von *Clapeyron* berechneten Werthe von 1/<i>C</i> stimmen nun wirklich ziemlich mit dieser Formel, wie aus der nachstehenden Zusammenstellung hervorgeht.
>
> | Temperatur | Von *Clapeyron* berechnet <i>a</i> | <i>b</i> | <i>c</i> | Nach der Formel |
> |---|---|---|---|---|
> | 0° | 1,410 | | 1,586 | 1,544 |
> | 35,5 | | 1,365 | 1,292 | 1,366 |
> | 78,8 | | 1,208 | 1,142 | 1,198 |
> | 100 | | 1,115 | 1,102 | 1,129 |
> | 156,8 | | 1,076 | 1,072 | 0,904 |
>
> Die Zahl unter <i>a</i> ist aus der Schallgeschwindigkeit in der Luft berechnet, die Reihe <i>b</i> aus den latenten Wärmen des Dampfes von Aether, Alkohol, Wasser, Terpenthinöl, <i>c</i> aus der Expansivkraft des Wasserdunstes für verschiedene Temperaturen. *Clapeyrons* Formel für Gase ist hiernach identisch mit der von *Holtzmann*; ihre Anwendbarkeit auf feste und tropfbar flüssige Körper bleibt vorläufig zweifelhaft.

クラペイロンが計算した 1/<i>C</i> の値は、次の表から分かるように、実際にこの式とかなりよく合う。

| 温度 | クラペイロンの計算 <i>a</i> | <i>b</i> | <i>c</i> | 式による値 |
|---|---|---|---|---|
| 0° | 1.410 | | 1.586 | 1.544 |
| 35.5 | | 1.365 | 1.292 | 1.366 |
| 78.8 | | 1.208 | 1.142 | 1.198 |
| 100 | | 1.115 | 1.102 | 1.129 |
| 156.8 | | 1.076 | 1.072 | 0.904 |

<i>a</i> の欄の数は空気中の音の速さから、<i>b</i> の列はエーテル、アルコール、水、テレビン油の蒸気の潜熱から、<i>c</i> はさまざまな温度での水蒸気の膨張力から計算したものである。これによれば、気体についてのクラペイロンの式はホルツマンの式と同じである。固体と、滴になる液体（tropfbar flüssige Körper）への当てはまりは、さしあたり疑わしいままである。

訳注：誌面の表は、見出しが「Temperatur」「Von Clapeyron berechnet」（その下に a・b・c の三つの欄）「Nach der Formel」の二段組み。ここでは一段にまとめた。0° の行の b の欄は空き。
訳注：「式による値」の欄の 0°〜100° の値は 1.544/(1 + <i>α</i><i>t</i>)（<i>α</i> ≈ 0.00366）とほぼ合う（100° で 1.130）が、156.8° では同じ計算で約 0.98 になり、誌面の 0,904 と合わない。誌面のとおりに置いた。
訳注：滴になる液体は、当時、気体（弾性流体）と分けて液体を指した言い方。
訳注：Aether は今のエチルエーテル（ジエチルエーテル）に当たる。

### ¶55　p.37

> V. Das Kraftäquivalent der electrischen Vorgänge.

V. 電気の過程の力の当量

### ¶56　p.37–38

> *Statische Electricität.* Die Maschinenelectricität kann uns auf zweierlei Weise Ursache von Krafterzeugung werden, einmal indem sie sich *mit* ihren Trägern bewegt, durch ihre anziehende und abstossende Kraft, dann indem [p.38] sie sich *in* den Trägern bewegt, durch Wärmeentwicklung. Die ersteren mechanischen Erscheinungen hat man bekanntlich aus den im umgekehrten Verhältnisse des Quadrats der Entfernung wirkenden, anziehenden und abstossenden Kräften zweier electrischer Fluida hergeleitet, und die Erfahrungen, soweit dieselben mit der Theorie verglichen werden konnten, mit der Rechnung übereinstimmend gefunden. Gemäss unserer anfänglichen Herleitung, muss die Erhaltung der Kraft für solche Kräfte stattfinden. Wir wollen deshalb auf die specielleren Gesetze der mechanischen Wirkungen der Electricität nur so weit eingehn, als es uns für die Ableitung des Gesetzes der electrischen Wärmeentwicklung nöthig ist.

*静電気。* 機械でつくる電気（Maschinenelectricität）は、二つの仕方で力を生む原因となりうる。一つは、電気がその担い手*とともに*動くときで、そのときは引き合い押し返す力によって。もう一つは、電気が担い手の*中を*動くときで、そのときは熱の発生によってである。前者の力学的な現象は、よく知られているように、距離の二乗に反比例して働く、二つの電気の流体（Fluida）の引き合い押し返す力から導かれてきた。そして経験は、理論と比べることができたかぎりで、計算と一致することが確かめられている。はじめに導いたところにより、こうした力については力の保存が成り立たなければならない。そこで、電気の力学的な作用のより細かな法則には、電気による熱の発生の法則を導くのに要るかぎりでだけ立ち入ることにする。
訳注：Maschinenelectricität は、摩擦起電機などの機械でつくる電気。今の言い方では静電気に当たる。

### ¶57　p.38–39

> Sind <i>e</i><sub>,</sub> und <i>e</i><sub>,,</sub> zwei electrische Massenelemente, deren Einheit diejenige ist, welche eine ihr gleiche in der Entfernung = 1 mit der Kraft = 1 abstösst, werden die entgegengesetzten Electricitäten durch entgegengesetzte Vorzeichen der Massen bezeichnet, und ist <i>r</i> die Entfernung zwischen <i>e</i><sub>,</sub> und <i>e</i><sub>,,</sub>, so ist die Intensität ihrer Centralkraft
>
> <i>φ</i> = − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i><sup>2</sup> .
>
> Der Gewinn an lebendiger Kraft, indem sie aus der Entfernung <i>R</i> in die <i>r</i> übergehn, ist:
>
> − ∫<sub><i>R</i></sub><sup><i>r</i></sup> <i>φ</i><i>d</i><i>r</i> = (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>R</i> − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i> .
>
> Wenn sie aus der Entfernun ∞ in die <i>r</i> übergehn, ist derselbe − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i>. Bezeichnen wir diese letztere Grösse, die Summe der bei der Bewegung von ∞ bis <i>r</i> verbrauchten Spannkräfte und gewonnenen lebendigen Kräfte gemäss der [p.39] Bezeichnung, welche *Gauss* bei den Magnetismen angewendet hat, mit dem Namen *Potential* der beiden electrischen Elemente für die Entfernung <i>r</i>, so ist die Zunahme an lebendiger Kraft bei irgend einer Bewegung gleich zu setzen dem Ueberschuss des Potentials am Ende des Wegs über das am Anfange.

<i>e</i><sub>,</sub> と <i>e</i><sub>,,</sub> を二つの電気の質量要素とする。その単位は、それと等しい量を距離 1 で力 1 をもって押し返すものとし、反対の電気は質量の符号を反対にして表すとする。<i>r</i> を <i>e</i><sub>,</sub> と <i>e</i><sub>,,</sub> のあいだの距離とすると、両者の中心力の強さは

<i>φ</i> = − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i><sup>2</sup> .

である。両者が距離 <i>R</i> から距離 <i>r</i> へ移るときに得られる活力は

− ∫<sub><i>R</i></sub><sup><i>r</i></sup> <i>φ</i><i>d</i><i>r</i> = (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>R</i> − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i> .

である。距離 ∞ から <i>r</i> へ移るときには、それは − (<i>e</i><sub>,</sub><i>e</i><sub>,,</sub>)/<i>r</i> となる。この後の量、すなわち ∞ から <i>r</i> までの運動で費やされた緊張力と得られた活力との和を、ガウスが磁気について用いた呼び方に従って、距離 <i>r</i> における二つの電気の要素のポテンシャル（Potential）と呼ぶことにする。すると、どんな運動においても、活力の増加は、道の終わりでのポテンシャルが始めでのポテンシャルを超える分に等しいとおくことができる。
訳注：「Entfernun」は誌面の誤植で、Entfernung（距離）。
訳注：ガウス（Carl Friedrich Gauß, 1777–1855）。磁気の論でポテンシャルの語を用いた。

### ¶58　p.39

> Bezeichnen wir ebenso die Summe der Potentiale eines electrischen Elements gegen sämmtliche Elemente eines electrisirten Körpers als das Potential des Elements gegen den Körper, und die Summe der Potentiale aller Elemente eines electrischen Körpers gegen alle eines andern als das Potential der beiden Körper, so wird uns wieder der Gewinn an lebendiger Kraft durch den Unterschied der Potentiale gegeben, vorausgesetzt, dass die Vertheilung der Electricität in den Körpern nicht geändert werde, dass dieselben also idioelectrische sind. Aendert sich die Vertheilung, so ändert sich auch die Quantität der electrischen Spannkräfte in den Körpern selbst, die gewonnene lebendige Kraft muss also dann eine andere sein.

同じように、一つの電気の要素が帯電した物体のすべての要素に対してもつポテンシャルの和を、その要素の物体に対するポテンシャルと呼び、一つの電気を帯びた物体のすべての要素が別の物体のすべての要素に対してもつポテンシャルの和を、二つの物体のポテンシャルと呼ぶことにする。すると、得られる活力は、ここでもポテンシャルの差で与えられる。ただし、物体の中の電気の分布が変わらないこと、つまり物体が自ら電気を保つもの（idioelectrisch）であることを前提とする。分布が変われば、物体そのものの中の電気の緊張力の量も変わるので、そのとき得られる活力は別のものにならなければならない。
訳注：idioelectrisch は当時の語で、摩擦などで帯電させられ、電気をその場に保つ物体（今の言い方では不導体・絶縁体）を指した。

### ¶59　p.39–40

> Durch alle Methoden des Electrisirens werden gleiche Quantitäten positiver und negativer Electricität erzeugt; bei der Ausgleichung der Electricitäten zwischen zwei Körpern, deren einer <i>A</i> eben so viel positive Electricität enthält, als der andere <i>B</i> negative, geht die Hälfte positiver Electricität von <i>A</i> nach <i>B</i>, dagegen die Hälfte negativer von <i>B</i> nach <i>A</i>. Nennen wir die Potentiale der Körper auf sich selbst <i>W</i><sub><i>a</i></sub> und <i>W</i><sub><i>b</i></sub>, das Potential derselben gegen einander <i>V</i>, so finden wir die ganze gewonnene lebendige Kraft, wenn wir das Potential der übergehenden electrischen Massen vor der Bewegung gegen jede der anderen Massen und auf sich selbst abziehen von denselben Potentialen nach der [p.40] Bewegung. Dabei ist zu bemerken, dass das Potential zweier Massen sein Zeichen wechselt, wenn eine der Massen dasselbe wechselt. Es kommen also in Betracht folgende Potentiale:
>
> 1) des bewegten + ½<i>E</i> aus <i>A</i>
>
> gegen sich selbst　¼(<i>W</i><sub><i>b</i></sub> − <i>W</i><sub><i>a</i></sub>)
>
> gegen das bewegte − ½<i>E</i>　¼(<i>V</i> − <i>V</i>)
>
> gegen das ruhende + ½<i>E</i>　¼(− <i>V</i> − <i>W</i><sub><i>a</i></sub>)
>
> gegen das ruhende − ½<i>E</i>　¼(− <i>W</i><sub><i>b</i></sub> − <i>V</i>)
>
> 2) des bewegten − ½<i>E</i> aus <i>B</i>
>
> gegen sich selbst　¼(<i>W</i><sub><i>a</i></sub> − <i>W</i><sub><i>b</i></sub>)
>
> gegen das bewegte + ½<i>E</i>　¼(<i>V</i> − <i>V</i>)
>
> gegen das ruhende − ½<i>E</i>　¼(− <i>V</i> − <i>W</i><sub><i>b</i></sub>)
>
> gegen das ruhende + ½<i>E</i>　¼(− <i>W</i><sub><i>a</i></sub> − <i>V</i>)
>
> Summe − (<i>V</i> + (<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)/2).
>
> Diese Grösse giebt uns also das Maximum der zu erzeugenden lebendigen Kraft, und die Quantität der Spannkraft an, welche durch das Electrisiren gewonnen wird.

どの帯電のさせ方でも、正の電気と負の電気が等しい量だけ生じる。一方の <i>A</i> が、他方の <i>B</i> のもつ負の電気と同じだけの正の電気を含む二つの物体のあいだで電気がならされるとき、正の電気の半分が <i>A</i> から <i>B</i> へ移り、負の電気の半分が <i>B</i> から <i>A</i> へ移る。物体がそれ自身に対してもつポテンシャルを <i>W</i><sub><i>a</i></sub> と <i>W</i><sub><i>b</i></sub>、両者が互いに対してもつポテンシャルを <i>V</i> とすると、得られる活力の全体は、移る電気の質量が、ほかのそれぞれの質量に対して、またそれ自身に対してもつポテンシャルを、運動の後の値から運動の前の値を引いて求められる。このとき、一方の質量が符号を変えれば、二つの質量のポテンシャルも符号を変えることに注意しなければならない。したがって、考えに入れるのは次のポテンシャルである。

1) <i>A</i> から動く + ½<i>E</i> の

それ自身に対して　¼(<i>W</i><sub><i>b</i></sub> − <i>W</i><sub><i>a</i></sub>)

動く − ½<i>E</i> に対して　¼(<i>V</i> − <i>V</i>)

とどまる + ½<i>E</i> に対して　¼(− <i>V</i> − <i>W</i><sub><i>a</i></sub>)

とどまる − ½<i>E</i> に対して　¼(− <i>W</i><sub><i>b</i></sub> − <i>V</i>)

2) <i>B</i> から動く − ½<i>E</i> の

それ自身に対して　¼(<i>W</i><sub><i>a</i></sub> − <i>W</i><sub><i>b</i></sub>)

動く + ½<i>E</i> に対して　¼(<i>V</i> − <i>V</i>)

とどまる − ½<i>E</i> に対して　¼(− <i>V</i> − <i>W</i><sub><i>b</i></sub>)

とどまる + ½<i>E</i> に対して　¼(− <i>W</i><sub><i>a</i></sub> − <i>V</i>)

和 − (<i>V</i> + (<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)/2).

この量は、したがって、生じうる活力の最大と、帯電させることで得られる緊張力の量とを与える。
訳注：表は誌面では二つの列に並ぶ（左に相手、右にポテンシャル）。ここでは一行ずつ全角の空きで分けた。係数は画像では小さく潰れているが、左の列は ½、右の列は ¼ と読める（右の列を ¼ とすると、八行の和が誌面の和 − (<i>V</i> + (<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)/2) に一致する）。
訳注：<i>E</i> は、この段では定義されずに使われている。<i>A</i> の正の電気（＝ <i>B</i> の負の電気）の量に当たる。

### ¶60　p.40–41

> Um nun statt dieser Potentiale geläufigere Begriffe in die Rechnung einzuführen, brauchen wir folgende Betrachtung. Denken wir uns Flächen construirt, für welche das Potential eines in ihnen liegenden electrischen Elements in Bezug auf einen oder mehrere vorhandene electrische Körper gleiche Werthe hat, und nennen diese Gleichgewichtsoberflächen, so muss die Bewegung eines electrischen Theilchens von irgend einem Puncte der einen zu irgend einem Puncte einer bestimmten andern stets die lebendige Kraft um eine gleiche Grösse vermehren, dagegen wird eine Bewegung in der Fläche selbst die Geschwindigkeit des Theilchens nicht verändern. Es wird also die Resultante [p.41] sämmtlicher electrischer Anziehungskräfte für jeden einzelnen Punct des Raums auf der durch ihn gehenden Gleichgewichtsoberfläche senkrecht stehen müssen, und jede Fläche, auf der diese Resultanten senkrecht stehn, wird eine Gleichgewichtsoberfläche sein müssen.

さて、これらのポテンシャルの代わりに、よりなじみのある概念を計算に入れるために、次のように考える。ある面を考え、その面の上にある電気の要素が、そこにある一つまたは複数の帯電した物体に対してもつポテンシャルが、面の上のどこでも等しい値をとるようにつくったとし、これを釣り合いの面（Gleichgewichtsoberfläche）と呼ぶ。すると、電気の粒子が一つの面のどこかの点から、ある決まった別の面のどこかの点へ動くと、活力はいつも同じ大きさだけ増えなければならない。これに対して、面そのものの中での運動は、粒子の速さを変えない。したがって、空間の各点で、電気の引き合う力すべての合力は、その点を通る釣り合いの面に垂直でなければならず、またこの合力が垂直に立つ面はどれも釣り合いの面でなければならない。
訳注：Gleichgewichtsoberfläche は、今の言い方では等電位面に当たる。
訳注：誌面では「verändern.」の後に「'」に似た印があるが、頁の下に対応する脚注は無い。

### ¶61　p.41–42

> Das electrische Gleichgewicht in einem Leiter wird nun nicht eher bestehen, als bis die Resultanten sämmtlicher Anziehungskräfte seiner eigenen Electricitäten und etwa noch vorhandener anderer electrisirter Körper senkrecht auf seiner Oberfläche stehen, weil durch dieselben sonst die electrischen Theilchen längs der Oberfläche verschoben werden müssten. Folglich wird die Oberfläche eines electrisirten Leiters selbst eine Gleichgewichtsoberfläche sein, und die lebendige Kraft, welche ein verschwindend kleines electrisches Theilchen bei seinem Uebergange von der Oberfläche eines Leiters zu der eines andern gewinnt, eine Constante. Bezeichnet <i>C</i><sub><i>a</i></sub> die lebendige Kraft, welche die Einheit der positiven Electricität gewinnt bei ihrem Uebergange von der Oberfläche des Leiters <i>A</i> in unendliche Entfernung, so dass <i>C</i><sub><i>a</i></sub> für positiv electrische Ladungen positiv ist, <i>A</i><sub><i>a</i></sub> das Potential derselben Electricitätsmenge, wenn sie sich in einem bestimmten Puncte der Oberfläche von <i>A</i> befindet gegen <i>A</i>, <i>A</i><sub><i>b</i></sub> dasselbe gegen <i>B</i>, <i>W</i><sub><i>a</i></sub> das Potential von <i>A</i> auf sich selbst, <i>W</i><sub><i>b</i></sub> dasselbe von <i>B</i>, <i>V</i> das von <i>A</i> auf <i>B</i>, und <i>Q</i><sub><i>a</i></sub> die Quantität der Electricität in <i>A</i>, <i>Q</i><sub><i>b</i></sub> in <i>B</i>: so ist die lebendige Kraft, welche das electrische Theilchen <i>e</i> bei seinem Uebergange aus unendlicher Entfernung auf die Oberfläche von <i>A</i> gewinnt,
>
> − <i>e</i><i>C</i><sub><i>a</i></sub> = <i>e</i>(<i>A</i><sub><i>a</i></sub> + <i>A</i><sub><i>b</i></sub>).
>
> Setzt man statt <i>e</i> nach einander alle electrischen Theilchen der Oberfläche von <i>A</i>, und für <i>A</i><sub><i>a</i></sub> und <i>A</i><sub><i>b</i></sub> die zugehörigen [p.42] Potentiale, und addirt alle, so erhält man
>
> − <i>Q</i><sub><i>a</i></sub><i>C</i><sub><i>a</i></sub> = <i>V</i> + <i>W</i><sub><i>a</i></sub>.
>
> Ebenso für den Leiter <i>B</i>
>
> − <i>Q</i><sub><i>b</i></sub><i>C</i><sub><i>b</i></sub> = <i>V</i> + <i>W</i><sub><i>b</i></sub>.

導体の中の電気の釣り合いは、その導体自身の電気と、ほかにあるかもしれない帯電した物体とのすべての引き合う力の合力が、導体の表面に垂直に立つまでは成り立たない。そうでなければ、その合力によって電気の粒子は表面に沿ってずらされるはずだからである。したがって、帯電した導体の表面はそれ自体が釣り合いの面であり、限りなく小さな電気の粒子が一つの導体の表面から別の導体の表面へ移るときに得る活力は一定である。<i>C</i><sub><i>a</i></sub> を、正の電気の単位が導体 <i>A</i> の表面から無限の遠方へ移るときに得る活力とし（したがって <i>C</i><sub><i>a</i></sub> は正の電荷については正である）、<i>A</i><sub><i>a</i></sub> を、同じ電気の量が <i>A</i> の表面のある決まった点にあるときの <i>A</i> に対するポテンシャル、<i>A</i><sub><i>b</i></sub> を同じものの <i>B</i> に対するポテンシャル、<i>W</i><sub><i>a</i></sub> を <i>A</i> のそれ自身に対するポテンシャル、<i>W</i><sub><i>b</i></sub> を <i>B</i> の同じもの、<i>V</i> を <i>A</i> の <i>B</i> に対するポテンシャル、<i>Q</i><sub><i>a</i></sub> を <i>A</i> の中の電気の量、<i>Q</i><sub><i>b</i></sub> を <i>B</i> の中の電気の量とする。すると、電気の粒子 <i>e</i> が無限の遠方から <i>A</i> の表面へ移るときに得る活力は

− <i>e</i><i>C</i><sub><i>a</i></sub> = <i>e</i>(<i>A</i><sub><i>a</i></sub> + <i>A</i><sub><i>b</i></sub>).

である。<i>e</i> の代わりに <i>A</i> の表面の電気の粒子をすべて順に入れ、<i>A</i><sub><i>a</i></sub> と <i>A</i><sub><i>b</i></sub> にそれぞれに当たるポテンシャルを入れて、すべてを足すと

− <i>Q</i><sub><i>a</i></sub><i>C</i><sub><i>a</i></sub> = <i>V</i> + <i>W</i><sub><i>a</i></sub>.

を得る。導体 <i>B</i> についても同じく

− <i>Q</i><sub><i>b</i></sub><i>C</i><sub><i>b</i></sub> = <i>V</i> + <i>W</i><sub><i>b</i></sub>.

である。
訳注：Leiter は導体と訳した。

### ¶62　p.42

> Die Constante <i>C</i> muss nun nicht nur für die ganze Oberfläche eines und desselben Leiters gleich sein, sondern auch für getrennte Leiter, wenn dieselben bei Herstellung einer Verbindung, durch welche die Vertheilung ihrer Electricitäten nicht merklich geändert wird, keine Electricität mit einander austauschen, d. h. sie muss gleich sein für alle Leiter von gleicher freier Spannung. Wir können als Maass der freien Spannung eines electrisirten Körpers diejenige Quantität von Electricität gebrauchen, welche ausserhalb der Vertheilungsweite in einer Kugel vom Radius = 1 angehäuft, mit jenem Körper im electrischen Gleichgewicht steht. Ist die Electricität gleichmässig über die Kugel verbreitet, so wirkt sie bekanntlich nach aussen, als wäre sie ganz im Mittelpunct derselben zusammengedrängt. Bezeichnen wir die Masse der Electricität mit <i>E</i>, den Radius der Kugel mit <i>R</i> = 1, so ist für diese Kugel die Constante
>
> <i>C</i> = <i>E</i>/<i>R</i> = <i>E</i>.
>
> Also die Constante <i>C</i> ist unmittelbar gleich der freien Spannung.

さて、定数 <i>C</i> は、一つの同じ導体の表面全体で等しくなければならないだけでなく、別々の導体についても、それらを、電気の分布が目立っては変わらないようにつないだときに互いに電気をやりとりしないならば、等しくなければならない。つまり、自由な張り（freie Spannung）の等しいすべての導体について等しくなければならない。帯電した物体の自由な張りの尺度としては、分布の及ぶ範囲の外で半径 1 の球に集められ、その物体と電気の釣り合いにある電気の量を用いることができる。電気が球の上に一様に広がっているなら、よく知られているように、それは外に向かっては、すべてが球の中心に寄せ集められているかのように作用する。電気の質量を <i>E</i>、球の半径を <i>R</i> = 1 とすると、この球についての定数は

<i>C</i> = <i>E</i>/<i>R</i> = <i>E</i>.

である。つまり、定数 <i>C</i> はそのまま自由な張りに等しい。

### ¶63　p.42–43

> Danach findet sich die Quantität von Spannkräften zweier Leiter, welche gleiche Quantitäten <i>Q</i> von positiver und negativer Electricität enthalten,
>
> − (<i>V</i> + (<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)/2) = <i>Q</i>((<i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub>)/2).
>
> Da <i>C</i><sub><i>b</i></sub> negativ ist, so ist die algebraische Differenz <i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub> [p.43] gleich ihrer absoluten Summe. Ist die Ableitungsgrösse des Leiters <i>B</i> sehr gross, also nahehin <i>C</i> = 0, so ist die Quantität der Spannkräfte (<i>Q</i><i>C</i><sub><i>a</i></sub>)/2 = <i>W</i><sub><i>a</i></sub>/2.

これにより、正と負の電気を等しい量 <i>Q</i> だけ含む二つの導体の緊張力の量は

− (<i>V</i> + (<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)/2) = <i>Q</i>((<i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub>)/2).

となる。<i>C</i><sub><i>b</i></sub> は負なので、代数的な差 <i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub> は、両者の絶対値の和に等しい。導体 <i>B</i> の導きの大きさ（Ableitungsgrösse）が非常に大きく、したがって <i>C</i> がほぼ 0 なら、緊張力の量は (<i>Q</i><i>C</i><sub><i>a</i></sub>)/2 = <i>W</i><sub><i>a</i></sub>/2 である。
訳注：誌面は「C = 0」で下付きが無い。次の段では同じ場合を <i>C</i><sub><i>b</i></sub> = 0 と書いている。
訳注：本の終わりの「正誤（Berichtigung）」（¶105）が、この段の p.43 の 2 行目からを直している。訳は誌面のまま。
訳注：Ableitungsgrösse は、今の言い方では静電容量に当たる（p.43 で <i>C</i><i>S</i> = <i>Q</i> と置かれる）。

### ¶64　p.43

> Die lebendige Kraft, welche bei der Bewegung zweier electrischer Massen entsteht, haben wir gefunden gleich der Abnahme der Summe (<i>Q</i><sub><i>a</i></sub><i>C</i><sub><i>a</i></sub> + <i>Q</i><sub><i>b</i></sub><i>C</i><sub><i>b</i></sub>)/2. Diese lebendige Kraft gewinnen wir als mechanische, wenn die Geschwindigkeit, womit sich die Electricität in den Körpern bewegt, verschwindend klein ist gegen die Fortpflanzungsgeschwindigkeit der electrischen Bewegung; wir müssen sie als Wärme empfangen, wenn dies nicht der Fall ist. Die bei der Entladung gleicher Quantitäten <i>Q</i> entgegengesetzter Electricität erzeugte Wärme <i>Θ</i> findet sich demnach
>
> <i>Θ</i> = (1/(2<i>a</i>)) <i>Q</i>(<i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub>),
>
> wo <i>a</i> das mechanische Aequivalent der Wärmeeinheit bezeichnet, oder wenn <i>C</i><sub><i>b</i></sub> = 0, wie in Batterien, deren äussere Belegung nicht isolirt ist, deren Ableitungsgrösse <i>S</i> ist, so dass <i>C</i><i>S</i> = <i>Q</i>
>
> <i>Θ</i> = (1/(2<i>a</i>)) <i>Q</i><i>C</i> = (1/(2<i>a</i>)) (<i>Q</i><sup>2</sup>/<i>S</i>).

二つの電気の質量の運動で生じる活力は、和 (<i>Q</i><sub><i>a</i></sub><i>C</i><sub><i>a</i></sub> + <i>Q</i><sub><i>b</i></sub><i>C</i><sub><i>b</i></sub>)/2 の減少に等しいことが分かった。電気が物体の中を動く速さが、電気の運動の伝わる速さに比べて限りなく小さいなら、この活力は力学的な活力として得られる。そうでないなら、それを熱として受け取らなければならない。したがって、反対の電気を等しい量 <i>Q</i> だけ放電するときに生じる熱 <i>Θ</i> は

<i>Θ</i> = (1/(2<i>a</i>)) <i>Q</i>(<i>C</i><sub><i>a</i></sub> − <i>C</i><sub><i>b</i></sub>),

となる。ここで <i>a</i> は熱の単位の力学的な当量を表す。あるいは、外側の被覆（Belegung）が絶縁されていないバッテリーのように <i>C</i><sub><i>b</i></sub> = 0 で、導きの大きさが <i>S</i> であり、<i>C</i><i>S</i> = <i>Q</i> となるときには

<i>Θ</i> = (1/(2<i>a</i>)) <i>Q</i><i>C</i> = (1/(2<i>a</i>)) (<i>Q</i><sup>2</sup>/<i>S</i>).

となる。
訳注：Belegung は、ライデン瓶の内外に貼った金属の被覆。

### ¶65　p.43–44

> *Riess* [注12] hat durch Experimente bewiesen, dass bei verschiedenen Ladungen und verschiedener Anzahl gleich construirter Flaschen die in jedem einzelnen Theile desselben Schliessungsdrathes entwickelte Wärme proportional sei der Grösse <i>Q</i><sup>2</sup>/<i>S</i>. Nur bezeichnet er mit <i>S</i> die Oberfläche der [p.44] Belegung der Flaschen. Bei gleich construirten Flaschen muss diese aber der Ableitungsgrösse proportional sein. Aus seinen Versuchen hat ferner *Vorsselmann de Heer* [注13] gefolgert, so wie *Knochenhauer* [注14] aus den eigenen, dass die Wärmeentwickelung bei derselben Ladung derselben Batterie dieselbe bleibe, wie auch der Schliessungsdrath abgeändert werden möge. Der Letztere hat dieses Gesetz auch bei Verzweigung der Schliessungsdräthe und bei Nebenströmen durchgeführt. Ueber die Grösse der Constante 1/(2<i>a</i>) liegen bis jetzt noch keine Beobachtungen vor.

リース [注12] は実験によって、同じつくりの瓶について、充電の量と瓶の数をさまざまに変えても、同じ閉じる導線（Schliessungsdrath）の各部分に生じる熱は量 <i>Q</i><sup>2</sup>/<i>S</i> に比例することを示した。ただしリースは <i>S</i> で瓶の被覆の面積を表している。しかし同じつくりの瓶では、これは導きの大きさに比例するはずである。さらにフォルセルマン・デ・ヘール [注13] は彼（リース）の実験から、クノッヘンハウアー [注14] は自らの実験から、同じバッテリーを同じだけ充電したときの熱の発生は、閉じる導線をどう変えても同じままであると結論した。後者はこの法則を、閉じる導線が枝分かれする場合や、副流（Nebenströme）の場合にも確かめた。定数 1/(2<i>a</i>) の大きさについては、今までのところまだ観測が無い。
訳注：Schliessungsdrath（閉じる導線）は、瓶の内外の被覆をつないで放電させる導線。
訳注：リース（Peter Theophil Riess, 1804–1883）、フォルセルマン・デ・ヘール（Pieter Otto Coenraad Vorsselman de Heer, 1809–1841）、クノッヘンハウアー（Karl Wilhelm Knochenhauer, 1805–1875）。

### ¶66　p.44

> Zu erklären ist dieses Gesetz leicht, sobald wir uns die Entladung einer Batterie nicht als eine einfache Bewegung der Electricität in einer Richtung vorstellen, sondern als ein Hin- und Herschwanken derselben zwischen den beiden Belegungen in Oscillationen, welche immer kleiner werden, bis die ganze lebendige Kraft derselben durch die Summe der Widerstände vernichtet ist. Dafür, dass der Entladungsstrom aus abwechselnd entgegengerichteten Strömen besteht, spricht erstens die abwechselnd entgegengesetzte magnetisirende Wirkung desselben, zweitens die Erscheinung, welche *Wollaston* bei dem Versuch, Wasser durch electrische Schläge zu zersetzen, wahrnahm, dass sich nämlich beide Gasarten an beiden Electroden entwickeln. Zugleich erklärt diese Annahme, warum bei diesem Versuch die Electroden möglichst geringe Oberfläche haben müssen.

この法則は、バッテリーの放電を、電気の一つの向きへの単純な運動としてではなく、二つの被覆のあいだを行き来する揺れ、つまり振動として思い描けば、たやすく説明できる。その振動は、電気の活力の全体が抵抗（Widerstand）の総和によって消し去られるまで、しだいに小さくなる。放電の電流が、向きを交互に反対にする電流からなることを支持するものとして、第一に、それが交互に反対向きに磁化する作用がある。第二に、ウォラストンが電気の打撃（electrische Schläge）で水を分解しようとした実験で見た現象、すなわち二種類の気体がどちらの電極にも生じることがある。同時にこの仮定は、なぜこの実験で電極の表面をできるだけ小さくしなければならないのかをも説明する。
訳注：ウォラストン（William Hyde Wollaston, 1766–1828）。

### ¶67　p.45

> *Galvanismus.* Wir haben in Beziehung auf die galvanischen Erscheinungen zwei Klassen von Leitern zu unterscheiden: 1) diejenigen, welche nach Art der Metalle leiten, und dem Gesetz der galvanischen Spannungsreihe folgen; 2) diejenigen, weche diesem Gesetze nicht folgen. Alle diese letzteren sind zusammengesetzte Flüssigkeiten, und erleiden durch jede Leitung eine der Quantität der geleiteten Electricität proportionale Zersetzung.

*ガルバーニ電気。* ガルバーニの現象に関しては、導体を二つの類に分けなければならない。1) 金属のように伝え、ガルバーニの張りの系列（Spannungsreihe）の法則に従うもの。2) この法則に従わないもの。後者はすべて合成された液体であり、どの伝導によっても、伝えられた電気の量に比例する分解を受ける。
訳注：「weche」は誌面の誤植で、welche。
訳注：galvanische Spannungsreihe は、今の言い方では金属の接触電位の系列（ヴォルタの列）に当たる。
訳注：後者の「伝えられた電気の量に比例する分解」は、今の言い方ではファラデーの電気分解の法則に当たる。

### ¶68　p.45–47

> Wir können danach die experimentellen Thatsachen eintheilen 1) in solche, welche nur zwischen Leitern der ersten Klasse stattfinden, die Ladung verschiedener sich berührender Metalle mit ungleichen Electricitäten, und 2) in solche zwischen Leitern beider Klassen, die electrischen Spannungsunterschiede der offenen und die electrischen Ströme der geschlossenen Ketten. Durch eine beliebige Combination von Leitern erster Klasse können niemals electrische Ströme hervorgebracht werden, sondern nur electrische Spannungen. Diese Spannungen sind aber nicht äquivalent einer gewissen Kraftgrösse, wie die bisher betrachteten, welche eine Störung des electrischen Gleichgewichts bezeichneten; die galvanischen Spannungen sind vielmehr entstanden durch die Herstellung des electrischen Gleichgewichts, durch sie kann keine Bewegung der Electricität hervorgerufen werden ausser bei Lagenveränderungen der Leiter selbst durch die geänderte Vertheilung der gebundenen Electricität. Denken wir uns alle Metalle der Erde mit einander in Berührung gebracht, und die entsprechende Vertheilung der Electricität erfolgt, so kann durch keine andere Verbindung derselben irgend eines eine Aenderung seiner electrischen freien Spannung erleiden, ehe nicht eine Berührung mit einem Leiter zweiter Klasse [p.46] erfolgt ist. Den Begriff der Contactkraft, der Kraft, welche an der Berührungsstelle zweier verschiedenen Metalle thätig ist, und ihre verschiedenen electrischen Spannungen erzeugt und unterhält, hat man bisher nicht näher bestimmt als eben so, weil man mit demselben auch die Erscheinungen der Berührung von Leitern erster und zweiter Klasse zu umfassen suchte zu einer Zeit, wo man den constanten und wesentlichen Unterschied beider Erscheinungen, den chemischen Process, noch nicht als solchen kannte. In dieser dadurch nothwendig gemachten Unbestimmtheit der Begriffsfassung erscheint nun allerdings die Contactkraft als eine solche, welche in das Unendliche Quantitäten freier Electricität und somit mechanische Kräfte, Wärme und Licht erzeugen könnte, wenn es einen einzigen Leiter zweiter Klasse gäbe, welcher nicht durch die Leitung electrolysirt würde. Gerade dieser Umstand ist es auch wohl, welcher der Contacttheorie troz ihrer einfachen und präcisen Erklärung der Erscheinungen ein so entschiedenes Widerstreben entgegengesetzt hat [注15]. Dem von uns hier durchzuführenden Princip widerspricht der bisherige Begriff dieser Kraft also direct, wenn nicht die Nothwendigkeit der chemischen Processe mit in denselben aufgenommen wird. Geschieht dies aber, nehmen wir an, dass die Leiter zweiter Klasse der galvanischen Spannungsreihe eben deshalb nicht folgen, weil sie nur durch Electrolyse leiten, so lässt sich der Begriff der Contactkraft sogleich wesentlich vereinfachen und auf anziehende und abstossende Kräfte zu[p.47]rückführen. Es lassen sich nämlich offenbar alle Erscheinungen in Leitern erster Klasse herleiten aus der Annahme, dass die verschiedenen chemischen Stoffe verschiedene Anziehungskräfte haben gegen die beiden Electricitäten, und dass diese Anziehungskräfte nur in unmessbar kleinen Entfernungen wirken, während die Electricitäten auf einander es auch in grösseren thun. Die Contactkraft würde danach in der Differenz der Anziehungskräfte bestehen, welche die der Berührungsstelle zunächst liegenden Metalltheilchen auf die Electricitäten dieser Stelle ausüben, und das electrische Gleichgewicht eintreten, wenn ein electrisches Theilchen, welches von dem einen zum andern übergeht, nichts mehr an lebendiger Kraft verliert oder gewinnt. Sind <i>c</i><sub>,</sub> und <i>c</i><sub>,,</sub> die freien Spannungen der beiden Metalle, <i>a</i><sub>,</sub><i>e</i> und <i>a</i><sub>,,</sub><i>e</i> die lebendigen Kräfte, welche das electrische Theilchen <i>e</i> bei seinem Uebergange auf das eine oder das andere nicht geladene Metall gewinnt, so ist die Kraft, welche es beim Uebergang von dem einen geladenen Metall zum andern gewinnt:
>
> <i>e</i>(<i>a</i><sub>,</sub> − <i>a</i><sub>,,</sub>) − <i>e</i>(<i>c</i><sub>,</sub> − <i>c</i><sub>,,</sub>).
>
> Beim Gleichgewicht muss diese = 0 sein, also
>
> <i>a</i><sub>,</sub> − <i>a</i><sub>,,</sub> = <i>c</i><sub>,</sub> − <i>c</i><sub>,,</sub>
>
> d. h. die Spannungsdifferenz muss bei verschiedenen Stücken derselben Metalle constant sein, und bei verschiedenen Metallen dem Gesetz der galvanischen Spannungsreihe folgen.

これにより、実験の事実を二つに分けることができる。1) 第一の類の導体のあいだだけで起こるもの、すなわち触れ合う異なる金属が互いに異なる電気を帯びること。2) 両方の類の導体のあいだで起こるもの、すなわち開いた電池（Kette）での電気の張りの差と、閉じた電池での電流である。第一の類の導体をどう組み合わせても、電流は決して生じず、生じるのは電気の張りだけである。しかしこの張りは、これまで考えてきた張り、すなわち電気の釣り合いの乱れを表していた張りのようには、ある力の量と等価ではない。ガルバーニの張りは、むしろ電気の釣り合いができあがることによって生じたものであり、それによっては、導体そのものの位置が変わり、拘束された電気（gebundene Electricität）の分布が変わる場合を除いて、電気のどんな運動も呼び起こされない。地上のすべての金属を互いに触れさせ、それに見合う電気の分布ができたとしよう。そのとき、第二の類の導体との接触が起こらないかぎり、それらをほかのどんなふうにつなぎ直しても、どの金属も、その電気の自由な張りに変化を受けることはない。接触力（Contactkraft）、すなわち二つの異なる金属の接触する所で働き、両者の異なる電気の張りを生み出し保つ力の概念は、これまでまさにそうとしか定められてこなかった。というのも、人々はこの概念で、第一の類と第二の類の導体の接触の現象をもまとめようとしたからであり、しかもそれは、二つの現象の変わらない本質的な違い、すなわち化学の過程を、まだそのものとしては知らなかった時代のことだったからである。こうして避けられなくなった概念のとらえ方のあいまいさのもとでは、接触力は確かに、伝導によって電気分解されない第二の類の導体がただ一つでもあれば、限りなく多くの自由な電気を、したがって力学的な力・熱・光を生み出しうる力のように見える。まさにこの事情こそが、接触説（Contacttheorie）が現象を単純かつ精確に説明するにもかかわらず、それにあれほど断固とした反対が向けられてきた理由でもあろう [注15]。したがって、この力のこれまでの概念は、化学の過程の必然性がその中に取り入れられないかぎり、ここでわれわれが貫こうとする原理に真っ向から矛盾する。しかしそれが取り入れられ、第二の類の導体がガルバーニの張りの系列に従わないのは、まさにそれが電気分解によってしか伝えないからだと仮定するなら、接触力の概念はただちに本質的に簡単になり、引き合い押し返す力に帰着させることができる。すなわち、第一の類の導体の中のすべての現象は、次の仮定から導けることは明らかである。異なる化学の物質は二つの電気に対して異なる引き合う力をもち、その引き合う力は測れないほど小さな距離でしか働かないが、電気どうしはもっと大きな距離でも互いに働き合う、という仮定である。そうすると接触力は、接触する所のすぐそばにある金属の粒子が、その所の電気に及ぼす引き合う力の差にあることになり、一方から他方へ移る電気の粒子がもはや活力を失いも得もしなくなったとき、電気の釣り合いが生じることになる。<i>c</i><sub>,</sub> と <i>c</i><sub>,,</sub> を二つの金属の自由な張り、<i>a</i><sub>,</sub><i>e</i> と <i>a</i><sub>,,</sub><i>e</i> を、電気の粒子 <i>e</i> が充電されていない一方または他方の金属へ移るときに得る活力とすると、充電された一方の金属から他方へ移るときに粒子が得る力は

<i>e</i>(<i>a</i><sub>,</sub> − <i>a</i><sub>,,</sub>) − <i>e</i>(<i>c</i><sub>,</sub> − <i>c</i><sub>,,</sub>).

である。釣り合いのときには、これは 0 でなければならない。したがって

<i>a</i><sub>,</sub> − <i>a</i><sub>,,</sub> = <i>c</i><sub>,</sub> − <i>c</i><sub>,,</sub>

すなわち、張りの差は、同じ金属どうしの別々の片では一定でなければならず、異なる金属どうしではガルバーニの張りの系列の法則に従わなければならない。
訳注：「troz」は誌面の綴りで、今の綴りでは trotz（にもかかわらず）。
訳注：Kette（字は鎖）は、当時、ガルバーニの電池（galvanische Kette）を指した語。
訳注：gebundene Electricität（拘束された電気）は当時の語で、近くの電荷に引かれて動けない状態の電気を指す。今の言い方では誘導電荷に当たる。
訳注：Contacttheorie は、ヴォルタの電池の起電力を金属の接触に帰する説。これに対し化学説があった。

### ¶69　p.47–48

> Bei den galvanischen Strömen haben wir in Bezug auf die Erhaltung der Kraft hauptsächlich folgende Wirkungen zu betrachten: Wärmeentwicklung, chemische Processe und Polarisation. Die electrodynamischen Wirkungen werden wir beim Magnetismus durchnehmen. Die Wärmeentwick[p.48]lung ist allen Strömen gemein; nach den beiden anderen Wirkungen können wir sie für unseren Zweck unterscheiden in solche, welche blos chemische Zersetzungen, in solche, welche blos Polarisation, und in solche, welche beides hervorbringen.

ガルバーニの電流については、力の保存に関して、主に次の作用を考えなければならない。熱の発生、化学の過程、分極（Polarisation）である。電気力学的な作用は、磁気のところで扱う。熱の発生はすべての電流に共通である。残りの二つの作用によって、われわれの目的のためには、電流を、化学の分解だけを生むもの、分極だけを生むもの、両方を生むものに分けることができる。
訳注：Polarisation は、電極の表面に分解の生成物がたまって、電流と反対向きの起電力が生じること（今の言い方では電極の分極）。
訳注：「Magnctismus」に見える誌面の字は Magnetismus の刷りの崩れと見える。原文は Magnetismus と起こした。

### ¶70　p.48–49

> Zuerst wollen wir die Bedingungen der Erhaltung der Kraft untersuchen an solchen Ketten, bei welchen die Polarisation aufgehoben ist, weil diese die einzigen sind, für welche wir bis jetzt bestimmte durch Messungen bewährte Gesetze haben. Die Intensität des Stromes <i>J</i> einer Kette von <i>n</i> Elementen wird gegeben durch das <i>Ohm</i>sche Gesetz,
>
> <i>J</i> = (<i>n</i><i>A</i>)/<i>W</i> ,
>
> wo die Constante <i>A</i> die electromotorische Kraft des einzelnen Elements und <i>W</i> der Widerstand der Kette genannt wird; <i>A</i> und <i>W</i> sind in diesen Ketten unabhängig von der Intensität. Da während eines gewissen Zeitraums der Wirkung einer solchen Kette nichts in ihr geändert wird, als die chemischen Verhältnisse und die Wärmemenge, so würde das Gesetz von der Erhaltung der Kraft fordern, dass die durch die vorgegangenen chemischen Processe zu gewinnende Wärme gleich sei der wirklich gewonnenen. In einem einfachen Stück einer metallischen Leitung vom Widerstand <i>w</i> ist nach *Lenz* [注16] die während der Zeit <i>t</i> entwickelte Wärme
>
> <i>ϑ</i> = <i>J</i><sup>2</sup><i>w</i><i>t</i>,
>
> wenn man als Einheit von <i>w</i> die Drathlänge nimmt, in welcher die Einheit des Stroms in der Zeiteinheit die Wärme[p.49]einheit entwickelt. Für verzweigte Schliessungsdräthe, wo die Widerstände der einzelnen Zweige mit <i>w</i><sub><i>a</i></sub> bezeichnet werden, ist der Gesammtwiderstand <i>w</i> gegeben durch die Gleichung
>
> 1/<i>w</i> = Σ[1/<i>w</i><sub><i>a</i></sub>]
>
> die Intensität <i>J</i><sub><i>n</i></sub> im Zweige <i>w</i><sub><i>n</i></sub> durch
>
> <i>J</i><sub><i>n</i></sub> = (<i>J</i><i>w</i>)/<i>w</i><sub><i>n</i></sub>
>
> also die Wärme <i>ϑ</i><sub><i>n</i></sub> in demselben Zweige
>
> <i>ϑ</i><sub><i>n</i></sub> = <i>J</i><sup>2</sup><i>w</i><sup>2</sup> · (1/<i>w</i><sub><i>n</i></sub>) <i>t</i>
>
> und die in der ganzen verzweigten Leitung entwickelte Wärme
>
> <i>ϑ</i> = Σ[<i>ϑ</i><sub><i>a</i></sub>] = <i>J</i><sup>2</sup><i>w</i><sup>2</sup> Σ[1/<i>w</i><sub><i>a</i></sub>] <i>t</i> = <i>J</i><sup>2</sup><i>w</i> · <i>t</i>
>
> Folglich ist die in einer mit beliebigen Verzweigungen der Leitung versehenen Kette entwickelte Gesammtwärme, wenn das Gesetz von *Lenz* auch auf flüssige Leiter passt, wie es *Joule* gefunden hat:
>
> <i>Θ</i> = <i>J</i><sup>2</sup><i>W</i><i>t</i> = <i>n</i><i>A</i><i>J</i><i>t</i>.

まず、分極が打ち消されている電池について、力の保存の条件を調べよう。今までのところ、測定で確かめられた決まった法則があるのは、そうした電池だけだからである。<i>n</i> 個の素電池（Element）からなる電池の電流の強さ <i>J</i> は、オームの法則

<i>J</i> = (<i>n</i><i>A</i>)/<i>W</i> ,

で与えられる。ここで定数 <i>A</i> を一つの素電池の起電力（electromotorische Kraft）、<i>W</i> を回路の抵抗と呼ぶ。こうした電池では、<i>A</i> と <i>W</i> は電流の強さによらない。このような電池が働くある時間のあいだ、その中で変わるのは化学の状態と熱量だけなので、力の保存の法則は、起こった化学の過程によって得られるはずの熱が、実際に得られた熱に等しいことを求めるだろう。レンツ [注16] によれば、抵抗 <i>w</i> の金属の導線の単純な一片では、時間 <i>t</i> のあいだに生じる熱は

<i>ϑ</i> = <i>J</i><sup>2</sup><i>w</i><i>t</i>,

である。ただし <i>w</i> の単位には、単位の電流が単位の時間に熱の単位を生む導線の長さをとる。閉じる導線が枝分かれし、それぞれの枝の抵抗を <i>w</i><sub><i>a</i></sub> で表すとき、全体の抵抗 <i>w</i> は式

1/<i>w</i> = Σ[1/<i>w</i><sub><i>a</i></sub>]

で、枝 <i>w</i><sub><i>n</i></sub> の電流の強さ <i>J</i><sub><i>n</i></sub> は

<i>J</i><sub><i>n</i></sub> = (<i>J</i><i>w</i>)/<i>w</i><sub><i>n</i></sub>

で与えられる。したがって同じ枝での熱 <i>ϑ</i><sub><i>n</i></sub> は

<i>ϑ</i><sub><i>n</i></sub> = <i>J</i><sup>2</sup><i>w</i><sup>2</sup> · (1/<i>w</i><sub><i>n</i></sub>) <i>t</i>

であり、枝分かれした導線の全体で生じる熱は

<i>ϑ</i> = Σ[<i>ϑ</i><sub><i>a</i></sub>] = <i>J</i><sup>2</sup><i>w</i><sup>2</sup> Σ[1/<i>w</i><sub><i>a</i></sub>] <i>t</i> = <i>J</i><sup>2</sup><i>w</i> · <i>t</i>

である。よって、導線にどんな枝分かれがある回路でも、ジュールが見いだしたようにレンツの法則が液体の導体にも当てはまるなら、生じる熱の全体は

<i>Θ</i> = <i>J</i><sup>2</sup><i>W</i><i>t</i> = <i>n</i><i>A</i><i>J</i><i>t</i>.

である。
訳注：Σ の下の添字は、画像では小さく潰れているが <i>a</i> と読める（枝の一つを指す <i>n</i> とは字の形が違う）。
訳注：<i>ϑ</i> = <i>J</i><sup>2</sup><i>w</i><i>t</i> は、今の言い方ではジュールの法則（ジュール熱）に当たる。
訳注：オーム（Georg Simon Ohm, 1789–1854）、レンツ（Heinrich Friedrich Emil Lenz, 1804–1865）、ジュール（James Prescott Joule, 1818–1889）。

### ¶71　p.49–50

> Wir haben zweierlei Arten von constanten Ketten, die nach dem Schema der *Daniel*schen und die nach dem der *Grove*schen construirten. Bei den ersteren besteht der chemische Vorgang darin, dass sich das positive Metall in einer Säure auflöst, und aus einer Lösung in derselben Säure das negative sich niederschlägt. Nehmen wir als Einheit der Stromintensität diejenige, welche in der Zeiteinheit ein Aequivalent Wasser zersetzt, (etwa <i>O</i> = 1 *grm.* [p.50] genommen) so werden in der Zeit <i>t</i> gelöst <i>n</i><i>J</i><i>t</i> Aequivalente des positiven Metalls, und eben so viele des negativen niedergeschlagen. Ist nun die Wärme, welche ein Aequivalent des positiven Metalls bei seiner Oxydation und Lösung des Oxyds in der betreffenden Säure entwickelt, <i>a</i><sub><i>z</i></sub>, und die gleiche für das negative <i>a</i><sub><i>c</i></sub>, so würde die chemisch zu entwickelnde Wärme sein
>
> = <i>n</i><i>J</i><i>t</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>).
>
> Die chemische würde also der electrischen gleich sein, wenn
>
> <i>A</i> = <i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>,
>
> d. h. wenn die electromotorischen Kräfte zweier so combinirten Metalle dem Unterschied der bei ihrer Verbrennung und Verbindung mit Säuren zu entwickelnden Wärme proportional wären.

定常電池には二種類ある。ダニエルの電池の型にならって組んだものと、グローブの電池の型にならって組んだものである。前者では、化学的な過程は、正の金属が酸に溶け、同じ酸の溶液から負の金属が析出することにある。電流の強さの単位として、単位時間に水の一当量を分解する強さをとれば（たとえば <i>O</i> = 1 *grm.* とする）、時間 <i>t</i> のあいだに正の金属が <i>n</i><i>J</i><i>t</i> 当量溶け、負の金属が同じだけ析出する。さて、正の金属の一当量が酸化され、その酸化物が当の酸に溶けるときに発生する熱を <i>a</i><sub><i>z</i></sub>、負の金属についての同じ熱を <i>a</i><sub><i>c</i></sub> とすれば、化学的に発生するはずの熱は

= <i>n</i><i>J</i><i>t</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>).

となる。したがって、化学的な熱が電気的な熱に等しくなるのは、

<i>A</i> = <i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>,

のとき、すなわち、このように組み合わせた二つの金属の起電力が、それらが燃え、酸と化合するときに発生するはずの熱の差に比例するときである。

訳注：Element は、電池（Kette）を組む一つ一つの電池で、素電池と訳す。
訳注：*Daniel* は誌面の綴り。今の綴りは Daniell（John Frederic Daniell）。*Grove* は William Robert Grove。
訳注：<i>n</i>・<i>A</i>・<i>W</i> は p.48 の段で置かれた記号を受ける（<i>n</i> は素電池の数、<i>A</i> は一つの素電池の起電力、<i>W</i> は全体の抵抗）。
訳注：<i>O</i> は酸素、*grm.* は Gramm（グラム）の略。
訳注：「= <i>n</i><i>J</i><i>t</i>(…)」の式は、誌面でも左辺を書かずに等号から始まっている。

### ¶72　p.50–51

> In den nach Art der *Grove*schen Kette gebauten Elementen wird die Polarisation dadurch aufgehoben, dass der auszuscheidende Wasserstoff sogleich zur Reduction der sauerstoffreichen Bestandtheile der Flüssigkeit verbraucht wird, welche das negative Metall umgiebt. Es sind dahin zu rechnen die *Grove*schen und *Bunsen*schen Elemente: amalgamirtes Zink, verdünnte Schwefelsäure, rauchende Salpetersäure, Platin oder Kohle; ferner die mit Chromsäure gebauten constanten Ketten, unter denen genaueren Messungen unterworfen sind: amalgamirtes Zink, verdünnte Schwefelsäure, Lösung von saurem chromsaurem Kali mit Schwefelsäure, Kupfer oder Platin. Die chemischen Processe sind in den beiden mit Salpetersäure gebauten Ketten gleich, eben so die in den beiden genannten mit Chromsäure; daraus würde gemäss der eben gemachten Deduction folgen, dass auch die electromotorischen Kräfte gleich seien, [p.51] und das ist in der That nach den Messungen von *Poggendorf* [注17] sehr genau der Fall. Die mit Kohle gebaute Chromsäure-Kette ist sehr inconstant, und hat eine beträchtlich höhere electromotorische Kraft, wenigstens im Anfang; dieselbe ist deshalb hier nicht herzurechnen, sondern zu den Ketten mit Polarisation. Bei diesen constanten Ketten ist also die electromotorische Kraft unabhängig von dem negativen Metall; wir können sie uns auf den Typus der *Daniel*schen Kette zurückbringen, wenn wir als den letzten die Flüssigkeit unmittelbar berührenden Leiter erster Klasse die dem Platin zunächst liegenden Theilchen von salpetriger Säure und Chromoxyd ansehn, so dass wir die *Grove*schen und *Bunsen*schen Elemente als Ketten zwischen Zink und salpetriger Säure, die mit Chromsäure gebauten als Zink-Chromoxydketten erklären würden.

グローブの電池の型にならって組んだ素電池では、析出するはずの水素が、負の金属を囲む液体の酸素に富む成分を還元するのにすぐ使われることで、分極（Polarisation）が打ち消される。これに数えられるのは、グローブとブンゼンの素電池（アマルガムにした亜鉛、薄めた硫酸、発煙硝酸、白金または炭素）であり、さらにクロム酸で組んだ定常電池で、そのうち精しい測定にかけられたもの（アマルガムにした亜鉛、薄めた硫酸、硫酸を加えた酸性クロム酸カリの溶液、銅または白金）である。硝酸で組んだ二つの電池では化学的な過程が同じであり、クロム酸で組んだ先の二つの電池でも同じである。そこから、いま行った演繹にしたがえば、起電力も等しいことになるはずであり、実際、ポッゲンドルフの測定[注17]によれば、それはきわめてよく当たっている。炭素で組んだクロム酸の電池はひどく定常でなく、少なくとも初めのうちは起電力がかなり高い。それゆえ、これはここには数えず、分極のある電池に数える。したがって、これらの定常電池では、起電力は負の金属によらない。液体にじかに触れる最後の第一種の導体として、白金のすぐそばにある亜硝酸と酸化クロムの粒子を見るならば、これらの電池をダニエルの電池の型に引き戻すことができる。そうすると、グローブとブンゼンの素電池は亜鉛と亜硝酸のあいだの電池、クロム酸で組んだものは亜鉛と酸化クロムの電池と説明されることになる。

訳注：*Bunsen* は Robert Wilhelm Bunsen。*Poggendorf* は誌面の綴りで、今の綴りは Poggendorff（Johann Christian Poggendorff）。
訳注：saures chromsaures Kali（酸性クロム酸カリ）は、今の重クロム酸カリウムに当たる。
訳注：第一種の導体（Leiter erster Klasse）は金属のように化学変化なしに電気を通す導体、第二種は電解液。

### ¶73　p.51–52

> Unter den Ketten mit Polarisation können wir solche unterscheiden, welche blos Polarisation und keine chemische Zersetzung hervorbringen, und solche welche beides bewirken. Zu den ersteren, welche einen inconstanten meist bald verschwindenden Strom geben, gehören unter den einfachen Ketten die von *Faraday* [注18] mit Lösung von Aetzkali, Schwefelkalium, salpetriger Säure gebildeten Combinationen, ferner die der stärker negativen Metalle in den gewöhnlichen Säuren, wenn das positivere derselben die Säure nicht mehr zu zersetzen vermag, z. B. Kupfer mit Silber, Gold, Platin, Kohle in Schwefelsäure u. s. w.; von den zusammengesetzten alle mit eingeschalteten [p.52] Zersetzungszellen, deren Polarisation die electromotorische Kraft der anderen Elemente überwiegt. Scharfe messende Versuche haben über die Intensitäten dieser Ketten bis jetzt wegen der grossen Veränderlichkeit des Stroms nicht gemacht werden können. Im Allgemeinen scheint die Intensität ihrer Ströme von der Natur der eingetauchten Metalle abzuhängen, ihre Dauer wächst mit der Grösse der Oberflächen und mit der Abschwächung der Stromintensität; aufgefrischt können sie werden, auch wenn sie fast ganz verschwunden sind, durch Bewegungen der Platten in der Flüssigkeit und durch Berührung derselben mit der Luft, wodurch die Polarisation der Wasserstoffplatte aufgehoben wird. Von solchen Einwirkungen mag auch wohl der geringe, nicht aufhörende Rest des Stromes herrühren, den feinere galvanometrische Instrumente immer anzugeben pflegen. Der ganze Vorgang ist also eine Herstellung des electrischen Gleichgewichts der Flüssigkeitstheilchen mit den Metallen; dabei scheinen sich einmal die Flüssigkeitstheilchen anders zu ordnen, und dann, wenigstens in vielen Fällen [注19], auch chemische Umänderungen der oberflächlichen Metallschichten zu entstehen. Bei den zusammengesetzten Ketten, wo die Polarisation ursprünglich gleicher Platten die Wirkung des Stroms anderer Elemente ist, können wir die dabei verlorene Kraft des ursprünglichen Stroms als secundären Strom wiedergewinnen, nachdem wir die erregenden Elemente entfernt, und die Metalle der polarisirten unter sich geschlossen haben. Um das Princip von der Erhaltung der Kraft hier näher anzuwenden, fehlen uns bis jetzt noch alle speciellen Thatsachen.

分極のある電池のうちには、分極だけを生じて化学的な分解を生じないものと、その両方を生じるものとを分けることができる。前者は、定常でなく、たいていすぐに消える電流を与える。これに属するのは、単一の電池のうちでは、ファラデー[注18]が苛性カリ、硫化カリウム、亜硝酸の溶液で作った組み合わせ、さらに、より強く負の金属どうしを普通の酸に入れたもので、そのうち正のほうの金属がもはや酸を分解できないときのもの（たとえば硫酸の中の銅と銀・金・白金・炭素など）である。複合の電池のうちでは、分解槽を組み入れたもので、その分解槽の分極がほかの素電池の起電力にまさるもの全部がこれに属する。これらの電池の電流の強さについては、電流の変わりやすさが大きいために、今までのところ精密な測定の実験はできていない。一般に、その電流の強さは浸した金属の性質によるようであり、その持続は表面の大きさとともに、また電流の強さが弱まるとともに長くなる。ほとんど消えてしまっていても、液体の中で板を動かすことや、板を空気に触れさせることで、電流を生き返らせることができる。これによって水素の板の分極が打ち消されるのである。精密な検流計がいつも示す、わずかで、止まない電流の残りも、おそらくこのような作用から来るのであろう。したがって、この過程の全体は、液体の粒子と金属とのあいだに電気的な釣り合いを打ち立てることである。そのさい、一つには液体の粒子が並び方を変え、もう一つには、少なくとも多くの場合[注19]、金属の表面の層に化学的な変化も生じるように見える。もとは同じであった板の分極がほかの素電池の電流の作用である複合の電池では、励起する素電池を取り除き、分極した板の金属どうしを閉じれば、そのさいに失われたもとの電流の力を、二次電流として取り戻すことができる。ここで力の保存の原理をさらに精しく当てはめるには、今のところ個々の事実がまだ全く欠けている。

訳注：*Faraday* は Michael Faraday。
訳注：分解槽（Zersetzungszelle）は、電気分解をさせるために回路に入れた槽。
訳注：二次電流（secundärer Strom）は、分極した板から取り出す電流。今の蓄電池の原理に当たる。

### ¶74　p.53

> Den verwickeltesten Fall bilden diejenigen Ketten, in welchen Polarisation und chemische Zersetzung neben einander vor sich gehen; dazu gehören die Ketten mit Gasentwickelung. Der Strom derselben ist, wie der der blossen Polarisationsketten, zu Anfang am stärksten, und sinkt schneller oder langsamer auf eine ziemlich constant bleibende Grösse. Bei einzelnen Elementen dieser Art, oder Ketten, welche nur aus solchen zusammengesetzt sind, hört der Polarisationsstrom nur äusserst langsam auf; leichter gelingt es dagegen, schnell constante Ströme zu erhalten, bei Combination von constanten Ketten mit einzelnen inconstanten, namentlich, wenn die Platten der letzteren verhältnissmässig klein sind. Bisher sind aber an solchen Zusammenstellungen nur wenige Messungsreihen gemacht worden; aus den wenigen, welche ich aufgefunden habe, von *Lenz* [注20] und *Poggendorf* [注21], geht hervor, dass die Intensitäten solcher Ketten bei verschiedenen Drathwiderständen nicht durch die einfache <i>Ohm</i>sche Formel gegeben werden können, sondern wenn man die Constanten derselben bei geringen Intensitäten berechnet, werden die Ergebnisse der Rechnung für höhere Intensitäten zu gross. Man muss deshalb den Zähler oder den Nenner derselben, oder beide als Functionen der Intensität betrachten; die bisher bekannten Thatsachen liefern uns keine Entscheidung dafür, welcher von diesen Fällen eigentlich stattfinde.

いちばん込み入った場合をなすのは、分極と化学的な分解とが並んで進む電池であり、気体の発生する電池がこれに属する。その電流は、分極だけの電池の電流と同じく、初めに最も強く、速く、あるいはゆっくりと、かなり一定にとどまる大きさまで下がる。この種の素電池一つ、あるいはそれだけで組んだ電池では、分極の電流はきわめてゆっくりとしか止まない。これに対して、定常電池と、定常でない電池の一つとを組み合わせると、とくに後者の板が比較的小さいときには、定常な電流が速く得られやすい。しかし、このような組み合わせについては、これまで測定の系列がわずかしか作られていない。私が見つけたわずかなもの、レンツ[注20]とポッゲンドルフ[注21]のものからわかるのは、導線の抵抗を変えたときのこのような電池の電流の強さは、単純なオームの式では与えられず、その式の定数を弱い電流の強さで計算すると、強い電流の強さについての計算の結果が大きすぎる、ということである。それゆえ、その式の分子か分母か、あるいは両方を、電流の強さの関数と見なければならない。これまでに知られている事実からは、これらの場合のどれが本当に起こっているのかは決められない。

訳注：*Lenz* は Heinrich Friedrich Emil Lenz。*Ohm* は Georg Simon Ohm。オームの式は、ここでは p.48 の <i>J</i> = <i>n</i><i>A</i>/<i>W</i> の形（分子が起電力、分母が抵抗）。

### ¶75　p.53–55

> Suchen wir das Princip von der Erhaltung der Kraft auf diese Ströme anzuwenden, so müssen wir dieselben in zwei Theile theilen, in den inconstanten oder [p.54] Polarisationsstrom, über den dasselbe gilt, was wir über die reinen Polarisationsströme gesagt haben, und in den constanten oder Zersetzungsstrom. Auf den letzteren ist dieselbe Betrachtungsweise anwendbar, wie für die constanten Ströme ohne Gasentwickelung. Die durch den Strom erzeugte Wärme muss gleich sein der durch den chemischen Process zu erzeugenden. Ist z. B. in einer Combination von Zink und einem negativen Metalle in verdünnter Schwefelsäure die Wärmeentbindung eines Atoms Zink bei seiner Auflösung und der Austreibung des Wasserstoffs <i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>, so ist die in der Zeit <i>d</i><i>t</i> zu erzeugende Wärme
>
> <i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>)<i>d</i><i>t</i>.
>
> Wäre nun die Wärmeentwickelung in allen Theilen einer solchen Kette proportional dem Quadrate der Intensität, also <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i>, so hätten wir wie oben
>
> <i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>)/<i>W</i>,
>
> also die einfache <i>Ohm</i>sche Formel. Da diese aber ihre Anwendung hier nicht findet, so folgt, dass es Querschnitte in der Kette giebt, in denen die Wärmeentwicklung einem andern Gesetze folgt, deren Widerstand also nicht als constant zu setzen ist. Ist z. B. die Entbindung von Wärme in irgend einem Querschnitt direct proportional der Intensität, wie es unter andern die durch Aenderung der Aggregatzustände gebundene Wärme sein muss, also <i>ϑ</i> = <i>μ</i><i>J</i><i>d</i><i>t</i>, so ist
>
> <i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>) = <i>J</i><sup>2</sup><i>w</i> + <i>J</i><i>μ</i>
>
> <i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub> − <i>μ</i>)/<i>w</i>.
>
> Die Grösse <i>μ</i> würde also mit in dem Zähler der <i>Ohm</i>schen [p.55] Formel erscheinen. Der Widerstand eines solchen Querschnitts würde sein <i>w</i> = <i>ϑ</i>/<i>J</i><sup>2</sup> = <i>μ</i>/<i>J</i>. Ist nun aber die Wärmeentwickelung desselben nicht genau proportional der Intensität, also die Grösse <i>μ</i> nicht ganz constant, sondern mit der Intensität steigend, so erhalten wir den Fall, welcher den Beobachtungen von *Lenz* und *Poggendorf* entspricht.

力の保存の原理をこれらの電流に当てはめようとするなら、電流を二つの部分に分けなければならない。一つは定常でない電流、すなわち分極の電流で、これについては、純粋な分極の電流について述べたことと同じことが言える。もう一つは定常な電流、すなわち分解の電流である。後者には、気体の発生しない定常な電流についてと同じ見方が当てはまる。電流によって生じる熱は、化学的な過程によって生じるはずの熱に等しくなければならない。たとえば、亜鉛と負の金属一つとを薄めた硫酸の中で組み合わせたとき、亜鉛の一原子が溶けて水素を追い出すさいの熱の放出が <i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub> であれば、時間 <i>d</i><i>t</i> のあいだに生じるはずの熱は

<i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>)<i>d</i><i>t</i>.

である。さて、このような電池のすべての部分で、熱の発生が電流の強さの二乗に比例するのであれば、つまり <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i> であれば、上と同じく

<i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>)/<i>W</i>,

すなわち単純なオームの式が得られるであろう。しかし、この式はここでは当てはまらないのだから、電池の中には、熱の発生が別の法則にしたがう断面があり、したがってその断面の抵抗（Widerstand）は一定と置けない、ということになる。たとえば、ある断面での熱の放出が電流の強さにじかに比例するなら（集合状態の変化によって潜熱となる熱は、とりわけそうでなければならない）、つまり <i>ϑ</i> = <i>μ</i><i>J</i><i>d</i><i>t</i> であれば、

<i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub>) = <i>J</i><sup>2</sup><i>w</i> + <i>J</i><i>μ</i>

<i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>h</i></sub> − <i>μ</i>)/<i>w</i>.

となる。したがって、量 <i>μ</i> はオームの式の分子の中に一緒に現れることになる。このような断面の抵抗は <i>w</i> = <i>ϑ</i>/<i>J</i><sup>2</sup> = <i>μ</i>/<i>J</i> となるであろう。ところが、その断面の熱の発生が電流の強さに正確には比例せず、つまり量 <i>μ</i> が全く一定ではなく、電流の強さとともに増すのであれば、レンツとポッゲンドルフの観察に合う場合が得られる。

訳注：誌面では、抵抗の記号が大文字 <i>W</i>（<i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i>、<i>J</i> = (…)/<i>W</i>）と小文字 <i>w</i>（<i>J</i><sup>2</sup><i>w</i> + <i>J</i><i>μ</i> 以下）とで混ざっている。誌面のとおりに写した。
訳注：集合状態（Aggregatzustand）は固体・液体・気体の別。「gebundene Wärme（潜熱となる熱）」は、状態の変化に使われて温度に現れない熱で、今の言い方では潜熱に当たる。
訳注：Wärmeentwickelung と Wärmeentwicklung の二つの綴りが誌面に混ざっている。誌面のとおりに写した。

### ¶76　p.55–56

> Als electromotorische Kraft einer solchen Kette würde nach Analogie der constanten Ketten, sobald der Polarisationsstrom aufgehört hat, die zwischen Zink und Wasserstoff zu bezeichnen sein. In der Ausdrucksweise der Contacttheorie wäre es die zwischen Zink und dem negativen Metall, vermindert um die Polarisation des letztern in Wasserstoff. Wir müssen dann nur dieses Maximum der Polarisation für unabhängig von der Intensität des Stroms ansehen, und für verschiedene Metalle um eben so viel verschieden, als es die electromotorischen Kräfte dieser Metalle sind. Der Zähler der <i>Ohm</i>schen Formel, berechnet aus Intensitätsmessungen bei verschiedenen Widerständen, kann aber ausser der electromotorischen Kraft einen Summanden enthalten, welcher von dem Uebergangswiderstande herrührt, und welcher bei verschiedenen Metallen vielleicht verschieden ist. Dass ein Uebergangswiderstand existire, folgt nach dem Princip von der Erhaltung der Kraft aus der Thatsache, dass die Intensitäten dieser Ketten nicht nach dem <i>Ohm</i>schen Gesetz zu berechnen sind, da doch die chemischen Processe dieselben bleiben. Dafür, dass in Ketten, wo die Polarisationsströme aufgehört haben, der Zähler der <i>Ohm</i>schen Formel von der Natur des negativen Metalls abhänge, habe ich noch keine sicheren [p.56] Beobachtungen auffinden können. Um die Polarisationsströme schnell zu beseitigen ist es hierbei nöthig, die Dichtigkeit des Stroms an der polarisirten Platte möglichst zu erhöhen theils durch Einfügung von Zellen mit constanter electromotorischer Kraft, theils durch Verkleinerung der Oberfläche dieser Platte. In den hierher gehörenden Versuchen von *Lenz* und *Saweljev* [注22] ist nach ihrer eigenen Angabe die Constanz der Ströme nicht erreicht worden, die von ihnen berechneten electromotorischen Kräfte enthalten demnach noch die der Polarisationsströme. Sie fanden für Zink Kupfer in Schwefelsäure 0,51, für Zink Eisen 0,76, für Zink Quecksilber 0,90.

このような電池の起電力としては、定常電池になぞらえれば、分極の電流が止んだのちは、亜鉛と水素のあいだの起電力を挙げることになるであろう。接触説（Contacttheorie）の言い方では、それは亜鉛と負の金属のあいだの起電力から、負の金属の水素による分極を差し引いたものである。そのときは、この分極の最大値を、電流の強さによらないと見なし、また金属が違えば、それらの金属の起電力が違うのとちょうど同じだけ違うと見なしさえすればよい。ところが、抵抗を変えて電流の強さを測り、そこから計算したオームの式の分子は、起電力のほかに、移行抵抗（Uebergangswiderstand）から来る項を含みうる。その項は金属によって違うかもしれない。移行抵抗があることは、力の保存の原理にしたがえば、化学的な過程は同じままなのに、これらの電池の電流の強さがオームの法則では計算できない、という事実から出てくる。分極の電流が止んだ電池で、オームの式の分子が負の金属の性質によることについては、私はまだ確かな観察を見つけることができていない。そのさい分極の電流を速く取り除くには、一つには起電力の一定な槽を組み入れることで、もう一つにはその板の表面を小さくすることで、分極した板での電流の密度をできるだけ高めることが要る。ここに属するレンツとサヴェリエフの実験[注22]では、彼ら自身の申し立てによれば、電流の一定は得られておらず、したがって彼らの計算した起電力は、まだ分極の電流の起電力を含んでいる。彼らは、硫酸の中の亜鉛と銅で 0,51、亜鉛と鉄で 0,76、亜鉛と水銀で 0,90 を得た。

訳注：接触説（Contacttheorie）は、ボルタ以来の、異なる金属の接触そのものに起電力の源を置く説。これに対し、化学説は化学反応に源を置く。
訳注：移行抵抗（Uebergangswiderstand）は、金属と液体の境で生じるとされた抵抗。
訳注：*Saweljev* は Lenz の共同研究者 Savelyev（ロシア語の名のドイツ語での綴り）。
訳注：数値の 0,51 などは誌面のとおり小数点にコンマを使う。単位は誌面に書かれていない。

### ¶77　p.56

> Schliesslich bemerke ich noch, dass ein Versuch, die Gleichheit der auf chemischem und electrischem Wege entwickelten Wärme experimentell nachzuweisen, gemacht ist von *Joule* [注23]. Doch ist gegen seine Messungsmethoden mancherlei einzuwenden. Er setzt z. B. für die Tangentenbussole das Gesetz der Tangenten als richtig voraus bis in die höchsten Grade hinein, hat keine constanten Ströme, sondern berechnet deren Intensität nur nach dem Mittel der Anfangs- und Endablenkung, setzt electromotorische Kraft und Widerstand von Zellen mit Gasentwickelung als constant voraus. Auf die Abweichung seiner quantitativen Wärmebestimmungen von anderweitig gefundenen Zahlen hat *Hess* schon aufmerksam gemacht. Dasselbe Gesetz will *E. Becquerel* empirisch bestätigt gefunden haben nach einer Anzeige desselben in den *Comptes rendues* (1843. No. 16).

最後になお述べておくと、化学的な道筋と電気的な道筋とで発生する熱が等しいことを実験で示そうとする試みが、ジュール[注23]によってなされている。しかし、彼の測定の方法にはいろいろと異論がある。たとえば、彼は正接検流計について、正接の法則が最も大きな角度に至るまで正しいと前提しており、定常な電流を使わず、電流の強さを初めと終わりの振れの平均からだけ計算し、気体の発生する槽の起電力と抵抗を一定と前提している。彼の熱の定量が、ほかで求められた数値からずれていることには、ヘスがすでに注意を促している。E. ベクレルは、コント・ランデュ（1843 年 16 号）に載った彼自身の報告によれば、同じ法則を経験的に確かめたと言う。

訳注：*Joule* は James Prescott Joule。*Hess* は Germain Henri Hess。*E. Becquerel* は Edmond Becquerel。
訳注：正接検流計（Tangentenbussole）は、電流の強さが磁針の振れの角の正接に比例するとして電流を測る器械。
訳注：*Comptes rendues* は誌面の綴り。正しくは *Comptes rendus*（パリ科学アカデミーの Comptes rendus hebdomadaires des séances de l'Académie des sciences）。

### ¶78　p.57–58

> Wir haben oben uns genöthigt gesehen, den Begriff der Contactkraft zurückzuführen auf einfache Anziehungs- und Abstossungskräfte, um denselben mit unserem Princip in Uebereinstimmung zu bringen. Versuchen wir nun auch, die electrischen Bewegungen zwischen Metallen und Flüssigkeiten darauf zurückzuführen. Denken wir uns die Theile des zusammengesetzten Atoms einer Flüssigkeit mit verschiedenen Anziehungskräften gegen die Electricitäten begabt, und demgemäss verschieden electrisch. Scheiden diese Atomtheile an den metallischen Electroden aus, so giebt jedes Atom nach dem electrolytischen Gesetz eine von seinen electromotorischen Kräften unabhängige Menge ±<i>E</i> an dieselben ab. Wir können uns deshalb vorstellen, dass auch in der chemischen Verbindung schon die Atome mit Aequivalenten ±<i>E</i> verbunden sind, welche für alle ebenso gleich sind, wie die stöchiometrischen Aequivalente der wägbaren Stoffe in verschiedenen Verbindungen. Tauchen nun zwei verschiedene electrische Metalle in eine Flüssigkeit ein, ohne dass ein chemischer Process stattfindet, so werden die positiven Bestandtheile derselben von dem negativen Metall, die negativen vom positiven angezogen. Der Erfolg wird also eine veränderte Richtung und Vertheilung der verschieden electrischen Flüssigkeitstheilchen sein, deren Eintreten wir als Polarisationsstrom wahrnehmen. Die bewegende Kraft dieses Stromes würde die electrische Differenz der Metalle sein, ihr müsste deshalb auch seine anfängliche Intensität proportional sein; seine Dauer muss bei gleicher Intensität der Menge der an den Platten anzulagernden Atome, also ihrer Oberfläche proportional sein. Bei den mit chemischer Zersetzung verbundenen Strömen kommt es dagegen nicht zu einem [p.58] dauernden Gleichgewicht der Flüssigkeitstheilchen mit den Metallen, weil die positiv geladene Oberfläche des positiven Metalls fortdauernd entfernt wird, dadurch dass sie selbst zum Bestandtheil der Flüssigkeit wird, also eine stete Erneuerung der Ladung hinter ihr stattfinden muss. Durch jedes Atom des positiven Metalls, welches mit einem Aequivalent positiver Electricität vereinigt in die Lösung eintritt, wofür ein Atom des negativen Bestandtheils neutral electrisch ausscheidet, wird eine Beschleunigung der einmal begonnenen Bewegung hervorgerufen, sobald die Quantität der Anziehungskraft des ersteren Atoms zur +<i>E</i>, bezeichnet durch <i>a</i><sub><i>z</i></sub>, grösser ist als die des letzteren <i>a</i><sub><i>c</i></sub>. Die Bewegung würde dadurch in das Unbegrenzte an Geschwindigkeit zunehmen, wenn nicht auch zugleich der Verlust an lebendiger Kraft durch Wärmeentwicklung wüchse. Sie wird deshalb nur wachsen bis dieser Verlust, <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i>, gleich ist dem Verbrauch an Spannkraft <i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>)<i>d</i><i>t</i> oder bis
>
> <i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>)/<i>W</i>.
>
> Ich glaube, dass in dieser Unterscheidung der galvanischen Ströme in solche, welche Polarisation, und in solche, welche Zersetzung hervorbringen, wie sie durch das Princip von der Erhaltung der Kraft bedingt wird, der einzige Ausweg zu finden sein möchte, um gleichzeitig die Schwierigkeiten der chemischen und der Contactheorie zu umgehen.

上でわれわれは、接触力（Contactkraft）の概念をわれわれの原理と合わせるために、それを単純な引き合う力と押し返す力とに帰さざるをえないと見た。そこで今度は、金属と液体のあいだの電気の運動も、それらの力に帰してみよう。液体の複合原子の部分が、二つの電気に対してそれぞれ違う引力を持ち、それに応じて違うふうに帯電していると考えてみる。これらの原子の部分が金属の電極で析出するとき、各原子は、電気分解の法則にしたがって、その起電力によらない量 ±<i>E</i> を電極に渡す。それゆえ、化学的な化合物の中でも、原子はすでに当量 ±<i>E</i> と結びついていると考えることができる。この当量は、重さのある物質の化学量論的な当量がいろいろな化合物の中で等しいのと同じく、すべての原子にとって等しい。さて、電気的に違う二つの金属を液体に浸し、化学的な過程が起こらないとすれば、液体の正の成分は負の金属に、負の成分は正の金属に引き寄せられる。その結果は、違うふうに帯電した液体の粒子の向きと配置が変わることであり、それが起こるのを、われわれは分極の電流として認める。この電流を動かす力は金属の電気的な差であろうから、電流の初めの強さもそれに比例しなければならないであろう。またその持続は、強さが同じなら、板に付着するはずの原子の量に、つまり板の表面に比例しなければならない。これに対して、化学的な分解と結びついた電流では、液体の粒子と金属とのあいだに持続する釣り合いは生じない。正の金属の正に帯電した表面は、それ自身が液体の成分になることで絶えず取り除かれ、したがってその後ろで電荷が絶えず新しくならなければならないからである。正の金属の原子が、正の電気の一当量と結びついて溶液に入り、そのかわりに負の成分の原子が電気的に中性になって析出するたびに、いったん始まった運動が加速される。ただし、それは、前者の原子の +<i>E</i> への引力の量（<i>a</i><sub><i>z</i></sub> で表す）が、後者の原子のそれ（<i>a</i><sub><i>c</i></sub>）より大きいときである。もし熱の発生による活力（lebendige Kraft）の損失も同時に増えないならば、運動はこれによって限りなく速さを増すであろう。それゆえ、運動は、この損失 <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i> が緊張力（Spannkraft）の消費 <i>J</i>(<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>)<i>d</i><i>t</i> に等しくなるまでしか、すなわち

<i>J</i> = (<i>a</i><sub><i>z</i></sub> − <i>a</i><sub><i>c</i></sub>)/<i>W</i>.

となるまでしか増さない。私は、ガルバーニの電流を、分極を生じるものと分解を生じるものとに分けるこの区別、力の保存の原理によって求められるこの区別のうちにこそ、化学説と接触説との難点を同時に避けるための、ただ一つの出口が見いだせるのではないかと思う。

訳注：「上で」は p.46–47 の段を指す。そこでは接触力を、金属の粒子が電気に及ぼす引力の差として述べている。
訳注：「電気分解の法則」は、今の言い方ではファラデーの電気分解の法則に当たる。
訳注：<i>a</i><sub><i>z</i></sub>・<i>a</i><sub><i>c</i></sub> は ¶71 では熱の量として置かれ、この段では +<i>E</i> への引力の量として置き直されている。誌面のとおり。
訳注：「Contactheorie」は誌面の綴り（t が一つ）。¶76 では「Contacttheorie」。
訳注：活力（lebendige Kraft）は、今の言い方では運動エネルギーに当たる。緊張力（Spannkraft）は位置エネルギーに当たる。

### ¶79　p.58

> *Thermoelectrische Ströme.* Bei diesen Strömen müssen wir die Quelle der Kraft in den von *Peltier* gefundenen Wirkungen auf die Löthstellen suchen, welche einen dem gegebenen Strom entgegengesetzten erzeugen würden.

*熱電流。* この電流では、力の源を、ペルティエが見つけた、接合点（Löthstelle）への作用のうちに求めなければならない。その作用は、与えられた電流とは逆向きの電流を生じさせるような作用である。

訳注：「Thermoelectrische Ströme.」は誌面で字間を空けた見出し語。
訳注：*Peltier* は Jean Charles Athanase Peltier。接合点への作用は、今の言い方ではペルティエ効果（異なる金属の接合点を電流が通るときに熱が出入りする現象）に当たる。
訳注：Löthstelle は二つの金属をはんだ付けした継ぎ目。訳では「接合点」とした。

### ¶80　p.59–60

> Denken wir uns einen hydroelectrischen constanten Strom, in dessen Leitungsdrath ein Stück eines andern Metalls eingelöthet ist, dessen Löthstellen die Temperaturen <i>t</i>′ und <i>t</i>″ haben, so wird der electrische Strom während des Zeittheilchens <i>d</i><i>t</i> in der ganzen Leitung die Wärme <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i> erzeugen, ausserdem in der einen Löthstelle <i>q</i><sub>,</sub><i>d</i><i>t</i> entwickeln, in der andern <i>q</i><sub>,,</sub><i>d</i><i>t</i> verschlucken. Ist <i>A</i> die electromotorische Kraft der hydroelectrischen Kette, also <i>A</i><i>J</i><i>d</i><i>t</i> die chemisch zu erzeugende Wärme, so folgt aus dem Gesetz von der Erhaltung der Kraft
>
> <i>A</i><i>J</i> = <i>J</i><sup>2</sup><i>W</i> + <i>q</i><sub>,</sub> − <i>q</i><sub>,,</sub>　　1)
>
> Ist <i>B</i><sub><i>t</i></sub> die electromotorische Kraft der Thermokette, wenn eine der Löthstellen die Temperatur <i>t</i> und die andere irgend eine constante Temperatur z. B. 0° hat, so ist für die ganze Kette
>
> <i>J</i> = (<i>A</i> − <i>B</i><sub><i>t</i><sub>,</sub></sub> + <i>B</i><sub><i>t</i><sub>,,</sub></sub>)/<i>W</i>.　　2)
>
> Für <i>t</i><sub>,</sub> = <i>t</i><sub>,,</sub> wird
>
> <i>J</i> = <i>A</i>/<i>W</i>.
>
> Dies in die Glelchung 1) gesetzt giebt
>
> <i>q</i><sub>,</sub> = <i>q</i><sub>,,</sub>
>
> d. h. bei gleicher Temperatur der Löthstellen derselben Metalle und gleicher Intensität des Stroms müssen die entwickelten und verschluckten Wärmemengen gleich sein, unabhängig vom Querschnitt. Dürfen wir annehmen, dass dieser Vorgang in jedem Puncte des Querschnitts derselbe ist, so folgt, dass die in gleichen Flächenräumen verschiedener Querschnitte durch denselben Strom entwickelten Wärmemengen sich wie die Dichtigkeiten des Stroms verhalten, [p.60] und daraus wieder, dass die durch verschiedene Ströme in den ganzen Querschnitten entwickelten sich direct wie die Intensitäten der Ströme verhalten.

ある定常なボルタ電池の電流を考え、その導線に別の金属の一片がはんだ付けされていて、その接合点の温度が <i>t</i>′ と <i>t</i>″ であるとしよう。すると、電流は、短い時間 <i>d</i><i>t</i> のあいだに、導線全体で熱 <i>J</i><sup>2</sup><i>W</i><i>d</i><i>t</i> を生じ、そのうえ一方の接合点で <i>q</i><sub>,</sub><i>d</i><i>t</i> を発生させ、他方の接合点で <i>q</i><sub>,,</sub><i>d</i><i>t</i> を吸い込む。<i>A</i> がボルタ電池の起電力で、したがって <i>A</i><i>J</i><i>d</i><i>t</i> が化学的に生じるはずの熱であれば、力の保存の法則から

<i>A</i><i>J</i> = <i>J</i><sup>2</sup><i>W</i> + <i>q</i><sub>,</sub> − <i>q</i><sub>,,</sub>　　1)

が出てくる。一方の接合点が温度 <i>t</i>、他方が何か一定の温度、たとえば 0° であるときの熱電対（Thermokette）の起電力を <i>B</i><sub><i>t</i></sub> とすれば、回路全体について

<i>J</i> = (<i>A</i> − <i>B</i><sub><i>t</i><sub>,</sub></sub> + <i>B</i><sub><i>t</i><sub>,,</sub></sub>)/<i>W</i>.　　2)

である。<i>t</i><sub>,</sub> = <i>t</i><sub>,,</sub> のときは

<i>J</i> = <i>A</i>/<i>W</i>.

となる。これを式 1) に入れると

<i>q</i><sub>,</sub> = <i>q</i><sub>,,</sub>

が得られる。すなわち、同じ金属どうしの接合点の温度が等しく、電流の強さが等しければ、発生する熱量と吸い込まれる熱量とは、断面によらず等しくなければならない。この過程が断面のどの点でも同じだと仮定してよいなら、同じ電流によって、違う断面の等しい面積に発生する熱量どうしは電流の密度の比になり、さらにそこから、違う電流によって断面全体に発生する熱量どうしは、電流の強さにじかに比例する、ということが出てくる。

訳注：hydroelectrisch（ボルタ電池の）は、液体を使う化学電池による、の意で、熱電気（thermoelectrisch）と対にした語。
訳注：本文の <i>t</i>′・<i>t</i>″ と、式とその後の <i>t</i><sub>,</sub>・<i>t</i><sub>,,</sub> とは、誌面で印の付け方が違うが、同じ二つの接合点の温度を指す。
訳注：「Glelchung」は誌面の綴り（Gleichung の誤植か、i の欠け）。

### ¶81　p.60

> Sind die Löthstellen von verschiedener Temperatur, so folgt aus den Gleichungen 1) und 2)
>
> (<i>B</i><sub><i>t</i><sub>,</sub></sub> − <i>B</i><sub><i>t</i><sub>,,</sub></sub>)<i>J</i> = <i>q</i><sub>,</sub> − <i>q</i><sub>,,</sub>
>
> dass also bei gleichen Stromintensitäten die Wärme entwickelnde und bindende Kraft in demselben Maasse mit der Temperatur steigt, als die electromotorische.

接合点の温度が違うときは、式 1) と 2) から

(<i>B</i><sub><i>t</i><sub>,</sub></sub> − <i>B</i><sub><i>t</i><sub>,,</sub></sub>)<i>J</i> = <i>q</i><sub>,</sub> − <i>q</i><sub>,,</sub>

が出てくる。つまり、電流の強さが等しければ、熱を発生させ、また熱を潜ませる力は、起電力と同じ割合で温度とともに増す。

### ¶82　p.60

> Für beide Folgerungen sind mir bis jetzt noch keine messenden Versuche bekannt.

この二つの帰結のどちらについても、測定をした実験を、私は今までのところまだ知らない。

### ¶83　p.60

> VI. Kraftäquivalent des Magnetismus und Electromagnetismus.

VI. 磁気と電磁気の力の当量

### ¶84　p.60

> *Magnetismus.* Ein Magnet ist vermöge seiner anziehenden und abstossenden Kräfte gegen andere Magnete und unmagnetisches Eisen fähig, eine gewisse lebendige Kraft zu erzeugen. Da die Anziehungserscheinungen von Magneten vollständig herzuleiten sind aus der Annahme zweier Fluida, welche sich umgekehrt wie die Quadrate der Entfernung anziehen und abstossen, so folgt hieraus allein schon nach der im Anfang unserer Abhandlung gegebenen Herleitung, dass die Erhaltung der Kraft bei der Bewegung magnetischer Körper gegen einander stattfinden müsse. Der folgenden Theorie der Induction wegen müssen wir auf die Gesetze dieser Bewegungen etwas näher eingehen.

*磁気。* 磁石は、ほかの磁石や磁化していない鉄に対して引き合う力と押し返す力をもつので、ある量の活力を生み出すことができる。磁石の引力の現象は、距離の二乗に反比例して引き合い押し返す二つの流体（Fluida）を仮定すれば完全に導けるのだから、この論文の初めに与えた導出によって、それだけで、磁性をもつ物体どうしの運動では力の保存が成り立たなければならないことが従う。後に述べる誘導（Induction）の理論のために、これらの運動の法則にもう少し立ち入らなければならない。

訳注：二つの流体は、当時の磁気の説明で北と南の磁気を担うとされた二種の「磁気流体」。

### ¶85　p.61

> 1) Sind <i>m</i><sub>,</sub> und <i>m</i><sub>,,</sub> zwei magnetische Massenelemente, deren Einheit diejenige ist, welche eine gleiche in der Entfernung = 1 mit der Kraft = 1 abstösst, werden entgegengesetzte Magnetismen mit entgegengesetzten Vorzeichen der Massen bezeichnet, und ist <i>r</i> die Entfernung zwischen <i>m</i><sub>,</sub> und <i>m</i><sub>,,</sub>, so ist die Intensität ihrer Centralkraft
>
> <i>φ</i> = − (<i>m</i><sub>,</sub><i>m</i><sub>,,</sub>)/<i>r</i><sup>2</sup>.
>
> Der Gewinn an lebendiger Kraft beim Uebergange aus unendlicher Entfernung in die <i>r</i> ist − (<i>m</i><sub>,</sub><i>m</i><sub>,,</sub>)/<i>r</i>.

1) <i>m</i><sub>,</sub> と <i>m</i><sub>,,</sub> を二つの磁気の質量の要素とし、その単位は、同じものを距離 = 1 で力 = 1 で押し返すものとする。反対の磁気には質量の反対の符号を付け、<i>r</i> を <i>m</i><sub>,</sub> と <i>m</i><sub>,,</sub> の間の距離とすると、両者の中心力の強さは

<i>φ</i> = − (<i>m</i><sub>,</sub><i>m</i><sub>,,</sub>)/<i>r</i><sup>2</sup>

である。無限の距離から距離 <i>r</i> へ移るときの活力の増し分は − (<i>m</i><sub>,</sub><i>m</i><sub>,,</sub>)/<i>r</i> である。

訳注：「磁気の質量」（magnetische Masse）は、今の言い方では磁荷（磁極の強さ）に当たる。

### ¶86　p.61

> 2) Bezeichnen wir diese Grösse als Potential der beiden Elemente, und übertragen wir die Benennung Potential auf magnetische Körper wie bei den Electricitäten, so erhalten wir den Gewinn an lebendiger Kraft bei der Bewegung zweier Körper, deren Magnetismus sich nicht ändert, also von Stahlmagneten, wenn wir von dem Werth des Potentials am Ende der Bewegung den zu Anfang der Bewegung abziehen. Dagegen wird wie bei den Electricitäten der Gewinn an lebendiger Kraft bei der Bewegung magnetischer Körper, deren Vertheilung sich ändert, gemessen durch die Veränderungen der Summe
>
> <i>V</i> + ½(<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>),
>
> wo <i>V</i> das Potential der Körper gegen einander, <i>W</i><sub><i>a</i></sub> und <i>W</i><sub><i>b</i></sub> das derselben auf sich selbst ist. Ist der Körper <i>B</i> ein unveränderlicher Stahlmagnet, so erzeugt die Annäherung eines Körpers von veränderlichem Magnetismus eine lebendige Kraft, gleich der Zunahme der Summe <i>V</i> + ½<i>W</i><sub><i>a</i></sub>.

2) この量を二つの要素のポテンシャル（Potential）と呼び、電気のときと同じくポテンシャルという名を磁性をもつ物体に移すと、磁気の変わらない二つの物体、つまり鋼の磁石どうしの運動での活力の増し分は、運動の終わりのポテンシャルの値から初めの値を引けば得られる。これに対して、電気のときと同じく、分布の変わる磁性の物体の運動での活力の増し分は、和

<i>V</i> + ½(<i>W</i><sub><i>a</i></sub> + <i>W</i><sub><i>b</i></sub>)

の変化で測られる。ここで <i>V</i> は物体どうしのポテンシャル、<i>W</i><sub><i>a</i></sub> と <i>W</i><sub><i>b</i></sub> はそれぞれの物体の自分自身に対するポテンシャルである。物体 <i>B</i> が変わらない鋼の磁石なら、磁気の変わる物体が近づくことで生じる活力は、和 <i>V</i> + ½<i>W</i><sub><i>a</i></sub> の増し分に等しい。

訳注：「電気のときと同じく」は、V 章（p.38–41）で帯電した物体について述べたことを指す。

### ¶87　p.61–62

> 3) Es ist bekannt, dass die Wirkungen eines Magneten nach aussen stets durch eine gewisse Vertheilung der [p.62] magnetischen Fluida an seiner Oberfläche ersetzt werden können. Wir können also statt der Potentiale der Magneten die Potentiale solcher Oberflächen setzen. Dann finden wir wie bei den leitenden electrischen Oberflächen für ein vollkommen weiches Eisen <i>A</i>, welches durch Vertheilung von einem Magneten <i>B</i> magnetisirt ist, den Gewinn <i>C</i> an lebendiger Kraft für die Einheit der Quantität des als positiv bezeichneten Magnetismus bei dem Uebergange von der Oberfläche des Eisens in unendliche Entfernung gegeben durch die Gleichung
>
> − <i>Q</i><i>C</i> = <i>V</i> + <i>W</i><sub><i>a</i></sub>.

3) 磁石の外への作用は、いつでも、その表面に磁気の流体をある仕方で分布させたもので置き換えられることが知られている。だから磁石のポテンシャルの代わりに、そのような表面のポテンシャルを置いてよい。すると、導体である電気の表面のときと同じく、磁石 <i>B</i> からの分布（Vertheilung）によって磁化された完全な軟鉄 <i>A</i> について、正とした磁気の量の単位が鉄の表面から無限の距離へ移るときの活力の増し分 <i>C</i> は、式

− <i>Q</i><i>C</i> = <i>V</i> + <i>W</i><sub><i>a</i></sub>

で与えられる。

訳注：「分布によって磁化」（durch Vertheilung magnetisirt）は、今の言い方では磁気誘導（感応）による磁化に当たる。
訳注：<i>Q</i> は物体のもつ磁気の量の総和。記号は V 章（p.41–42）の帯電した導体の式 − <i>Q</i><sub><i>a</i></sub><i>C</i><sub><i>a</i></sub> = <i>V</i> + <i>W</i><sub><i>a</i></sub>（<i>Q</i> は電気の量）から移している。

### ¶88　p.62

> Da nun jeder Magnet so viel nördlichen wie südlichen Magnetismus enthält, also <i>Q</i> in jedem gleich 0 ist, so folgt für ein solches Eisenstück, oder für ein Stahlstück von derselben Form, Lage und Vertheilung des Magnetismus, dessen Magnetismus also vollständig durch den Magneten <i>B</i> gebunden ist, dass
>
> <i>V</i> = − <i>W</i><sub><i>a</i></sub>.

ところで、どの磁石も北の磁気と南の磁気を同じだけ含むので、どの磁石でも <i>Q</i> は 0 に等しい。そこで、そのような鉄の片について、また形・位置・磁気の分布が同じで、したがってその磁気が磁石 <i>B</i> によって完全に結合されている鋼の片について、

<i>V</i> = − <i>W</i><sub><i>a</i></sub>

が従う。

### ¶89　p.62

> 4) <i>V</i> ist aber die lebendige Kraft, welche der Stahlmagnet bei seiner Annäherung bis zur Bindung seiner Magnetismen erzeugt; sie muss nach dieser Gleichung dieselbe sein, an welchen Magneten er sich auch annähern möge, sobald es nur bis zur vollständigen Bindung kommt, weil <i>W</i><sub><i>a</i></sub> immer dasselbe bleibt. Dagegen ist die lebendige Kraft eines gleichen Eisenstücks, welches bis zu derselben Vertheilung des Magnetismus genähert wird, wie oben gezeigt ist
>
> <i>V</i> + ½<i>W</i> = − ½<i>W</i>,
>
> also nur halb so gross als die des schon magnetisirten Stückes; zu bedenken ist, dass <i>W</i> an sich negativ ist, also − ½<i>W</i> stets positiv.

4) ところで <i>V</i> は、鋼の磁石が、その磁気が結合されるまで近づくあいだに生み出す活力である。この式によれば、完全な結合にまで至りさえすれば、どの磁石に近づいてもこの活力は同じでなければならない。<i>W</i><sub><i>a</i></sub> がいつも同じだからである。これに対して、同じ形の鉄の片を、磁気が同じ分布になるまで近づけたときの活力は、上で示したとおり

<i>V</i> + ½<i>W</i> = − ½<i>W</i>

であり、すでに磁化された片の活力の半分にすぎない。<i>W</i> はそれ自体が負なので、− ½<i>W</i> はつねに正であることに注意する。

訳注：この式の <i>W</i> には下付きの <i>a</i> が無い。誌面のとおり。

### ¶90　p.63

> Wird ein Stahlstück dem vertheilenden Magneten unmagnetisch genähert, und behält es beim Entfernen den erlangten Magnetismus, so wird dabei − ½<i>W</i> an mechanischer Arbeit verloren, dafür ist der nunmehrige Magnet auch im Stande − ½<i>W</i> Arbeit mehr zu leisten, als es das Stahlstück vorher konnte.

鋼の片を、磁化していない状態で、分布を起こす磁石に近づけ、遠ざけるときに得た磁気を保つなら、そのとき − ½<i>W</i> の力学的な仕事が失われる。その代わりに、いまや磁石になったものは、前の鋼の片よりも − ½<i>W</i> だけ多くの仕事をすることができる。

### ¶91　p.63–64

> *Electromagnetismus.* Die electrodynamischen Erscheinungen sind zurückgeführt worden von *Ampère* auf anziehende und abstossende Kräfte der Stromelemente, deren Intensität von der Geschwindigkeit und Richtung der Ströme abhängt. Seine Herleituug umfasst aber die Inductionserscheinungen nicht. Letztere sind dagegen zugleich mit den electrodynamischen von *W. Weber* zurückgeführt worden auf anziehende und abstossende Kräfte der electrischen Fluida selbst, deren Intensität abhängt von der Näherungs- oder Entfernungsgeschwindigkeit und der Zunahme derselben. Für jetzt ist noch keine Hypothese aufgefunden worden, vermöge deren man diese Erscheinungen auf constante Centralkräfte zurückführen könnte. Die Gesetze der inducirten Ströme sind von *Neumann* [注24] entwickelt worden, indem er die experimentell für ganze Ströme gefundenen Gesetze von *Lenz* auf die kleinsten Theilchen derselben übertrug, und dieselben stimmen bei geschlossenen Strömen mit den Entwicklungen von *Weber* überein. Ebenso stimmen die Gesetze von *Ampère* und *Weber* für die electrodynamischen Wirkungen geschlossener Ströme mit der Herleitung derselben aus Rotationskräften von *Grassmann* [注25]. Weiter giebt uns auch die Erfahrung keine Aufschlüsse, [p.64] weil bis jetzt nur mit geschlossenen oder beinahe geschlossenen Strömen experimentirt worden ist. Wir wollen deshalb auch unser Princip nur auf geschlossene Ströme anwenden, und zeigen, dass daraus dieselben Gesetze herfolgen.

*電磁気。* 電気力学の現象は、アンペールによって、電流の要素どうしの引き合う力と押し返す力に帰着させられた。その強さは電流の速さと向きによる。しかし彼の導出は誘導の現象を含まない。誘導の現象は、これに対して、電気力学の現象とともにW. ヴェーバーによって、電気の流体そのものの引き合う力と押し返す力に帰着させられた。その強さは、近づく速さまたは遠ざかる速さと、その増し分によって決まる。いまのところ、これらの現象を一定の中心力に帰着させられるような仮説はまだ見つかっていない。誘導された電流の法則はノイマン[注24] が展開した。彼は、レンツが電流の全体について実験で見いだした法則を、電流の最も小さい部分に移したのであり、その法則は、閉じた電流についてはヴェーバーの展開と一致する。同じく、閉じた電流の電気力学の作用についてのアンペールとヴェーバーの法則は、グラスマン[注25] が回転の力からそれを導いたものと一致する。それ以上のことは経験も教えてくれない。これまで、閉じた電流か、ほとんど閉じた電流でしか実験がされていないからである。そこでわれわれも、われわれの原理を閉じた電流にだけ当てはめ、そこから同じ法則が出てくることを示そう。

訳注：「Herleituug」は「Herleitung」（導出）の誤植。
訳注：Ampère は André-Marie Ampère、W. Weber は Wilhelm Weber、Neumann は Franz Ernst Neumann、Lenz は Heinrich Friedrich Emil Lenz、Grassmann は Hermann Grassmann。

### ¶92　p.64

> Es ist schon von *Ampère* gezeigt worden, dass die electrodynamischen Wirkungen eines geschlossenen Stroms stets ersetzt werden können durch eine gewisse Vertheilung der magnetischen Fluida an einer beliebigen von dem Strom begränzten Fläche. *Neumann* hat daher den Begriff des Potentials auf die geschlossenen Ströme übertragen, indem er dafür das Potential einer solchen Fläche setzt.

閉じた電流の電気力学の作用が、いつでも、その電流を縁とする任意の面に磁気の流体をある仕方で分布させたもので置き換えられることは、すでにアンペールが示した。そこでノイマンは、その代わりにそのような面のポテンシャルを置くことで、ポテンシャルの考えを閉じた電流に移した。

訳注：今の言い方では、閉じた電流と等価な「磁気二重層（磁気殻）」の考えに当たる。

### ¶93　p.64–65

> 5) Bewegt sich ein Magnet unter dem Einfluss eines Stroms, so muss die lebendige Kraft, die er dabei gewinnt, geliefert werden aus den Spannkräften, welche in dem Strome verbraucht werden. Diese sind während des Zeittheilchens <i>dt</i> nach der schon oben gebrauchten Bezeichnungsweise <i>A</i><i>J</i><i>dt</i> in Wärmeeinheiten, oder <i>a</i><i>A</i><i>J</i><i>dt</i> in mechanischen, wenn <i>a</i> das mechanische Aequivalent der Wärmeeinheit ist. Die in der Strombahn erzeugte lebendige Kraft ist <i>a</i><i>J</i><sup>2</sup><i>W</i><i>dt</i>, die vom Magneten gewonnene <i>J</i>(<i>dV</i>/<i>dt</i>)<i>dt</i>, wo <i>V</i> sein Potential gegen den von der Stromeinheit durchlaufenen Leiter ist. Also
>
> <i>a</i><i>A</i><i>J</i><i>dt</i> = <i>a</i><i>J</i><sup>2</sup><i>W</i><i>dt</i> + <i>J</i>(<i>dV</i>/<i>dt</i>)<i>dt</i>,
>
> folglich
>
> <i>J</i> = (<i>A</i> − (1/<i>a</i>)(<i>dV</i>/<i>dt</i>))/<i>W</i>.
>
> Wir können die Grösse (1/<i>a</i>)(<i>dV</i>/<i>dt</i>) als eine neue [p.65] electromotorische Kraft bezeichnen, als die des Inductionsstromes. Sie wirkt stets der entgegen, welche den Magneten in der Richtung, die er hat, bewegen, oder seine Geschwindigkeit vermehren würde. Da diese Kraft unabhängig ist von der Intensität des Stroms, muss sie auch dieselbe bleiben, wenn vor der Bewegung des Magneten gar kein Strom vorhanden war.

5) 磁石が電流の影響のもとで動くなら、磁石がそのとき得る活力は、電流の中で費やされる緊張力から供給されなければならない。この緊張力は、短い時間 <i>dt</i> のあいだに、上ですでに使った書き方で、熱の単位で <i>A</i><i>J</i><i>dt</i>、力学の単位で <i>a</i><i>A</i><i>J</i><i>dt</i> である。ここで <i>a</i> は熱の単位の力学的な当量である。電流の通り道で生じる活力は <i>a</i><i>J</i><sup>2</sup><i>W</i><i>dt</i>、磁石の得る活力は <i>J</i>(<i>dV</i>/<i>dt</i>)<i>dt</i> である。ここで <i>V</i> は、単位の電流が流れる導体（Leiter）に対する磁石のポテンシャルである。したがって

<i>a</i><i>A</i><i>J</i><i>dt</i> = <i>a</i><i>J</i><sup>2</sup><i>W</i><i>dt</i> + <i>J</i>(<i>dV</i>/<i>dt</i>)<i>dt</i>

であり、ゆえに

<i>J</i> = (<i>A</i> − (1/<i>a</i>)(<i>dV</i>/<i>dt</i>))/<i>W</i>

である。量 (1/<i>a</i>)(<i>dV</i>/<i>dt</i>) を新しい起電力（electromotorische Kraft）、つまり誘導電流（Inductionsstrom）の起電力と呼ぶことができる。それはいつも、磁石をそのいまの向きに動かす、あるいはその速さを増すような起電力に逆らって働く。この力は電流の強さによらないので、磁石が動く前にまったく電流が無かった場合にも同じままでなければならない。

訳注：<i>A</i> は電池の起電力、<i>J</i> は電流の強さ、<i>W</i> は回路の抵抗。いずれも V 章で使った記号。
訳注：<i>a</i> は今の言い方では熱の仕事当量に当たる。

### ¶94　p.65

> Ist die Intensität wechselnd, so ist der ganze während einer gewissen Zeit inducirte Strom
>
> ∫<i>J</i><i>dt</i> = − (1/(<i>a</i><i>W</i>))∫(<i>dV</i>/<i>dt</i>)<i>dt</i> = (1/<i>a</i>)(<i>V</i><sub>,</sub> − <i>V</i><sub>,,</sub>)/<i>W</i>
>
> wo <i>V</i><sub>,</sub> das Potential zu Anfang und <i>V</i><sub>,,</sub> zu Ende der Bewegung bedeutet. Kommt der Magnet aus sehr grosser Entfernung, so ist
>
> ∫<i>J</i><i>dt</i> = − ((1/<i>a</i>)<i>V</i><sub>,,</sub>)/<i>W</i>
>
> unabhängig von dem Wege und der Geschwindigkeit des Magneten.

強さが変わる場合、ある時間のあいだに誘導される電流の全体は

∫<i>J</i><i>dt</i> = − (1/(<i>a</i><i>W</i>))∫(<i>dV</i>/<i>dt</i>)<i>dt</i> = (1/<i>a</i>)(<i>V</i><sub>,</sub> − <i>V</i><sub>,,</sub>)/<i>W</i>

である。ここで <i>V</i><sub>,</sub> は運動の初めの、<i>V</i><sub>,,</sub> は終わりのポテンシャルである。磁石がとても遠いところから来るなら

∫<i>J</i><i>dt</i> = − ((1/<i>a</i>)<i>V</i><sub>,,</sub>)/<i>W</i>

であり、磁石の通る道と速さによらない。

訳注：この式には電池の起電力 <i>A</i> の項が無い。前の段の終わりで、磁石が動く前に電流が無かった場合を述べている。式は誌面のとおり。

### ¶95　p.65–66

> Wir können das Gesetz so aussprechen: Die gesammte electromotorische Kraft des Inductionsstroms, den eine Lagenänderung eines Magneten gegen einen geschlossenen Stromleiter hervorbringt, ist gleich der Veränderung, die dabei in dem Potentiale des Magneten gegen den Leiter vor sich geht, wenn letzterer von dem Strome − 1/<i>a</i> durchflossen gedacht wird. Einheit der electromotorischen Kraft ist dabei die, durch welche die willkührliche Stromeinheit in der Widerstandseinheit hervorgebracht wird. Letztere aber diejenige, in welcher jene Stromeinheit in der Zeiteinheit die Wärmeeinheit entwickelt. Dasselbe Gesetz bei [p.66] *Neumann* l. c. §. 9., nur hat er statt 1/<i>a</i> eine unbestimmte Constante <i>ε</i>.

この法則は次のように言える。閉じた電流の導体に対して磁石の位置が変わることで生じる誘導電流の起電力の全体は、その導体に電流 − 1/<i>a</i> が流れていると考えたときに、そのあいだに導体に対する磁石のポテンシャルに起こる変化に等しい。このとき起電力の単位は、任意に決めた電流の単位を、抵抗（Widerstand）の単位の中に生じさせる起電力である。そして抵抗の単位は、その電流の単位が単位の時間に熱の単位を生じさせる抵抗である。同じ法則がノイマンの前掲の §.9 にある。ただし彼は 1/<i>a</i> の代わりに定まらない定数 <i>ε</i> を置いている。

訳注：l. c.（loco citato）は「前掲の箇所」。注24 のノイマンの論文を指す。
訳注：誌面の <i>ε</i> は斜体のギリシア文字のイプシロンと読んだ（OCR は「«」）。

### ¶96　p.66

> 6) Bewegt sich ein Magnet unter dem Einfluss eines Leiters, gegen den sein Potential bei der Stromeinheit <i>φ</i> sei, und eines durch diesen Leiter magnetisirten Eisenstücks, gegen welches sein Potential für den durch die Stromeinheit erregten Magnetismus <i>χ</i> sei, so ist wie vorher
>
> <i>a</i><i>A</i><i>J</i> = <i>a</i><i>J</i><sup>2</sup><i>W</i> + <i>J</i>(<i>dφ</i>/<i>dt</i>) + <i>J</i>(<i>dχ</i>/<i>dt</i>),
>
> also
>
> <i>J</i> = (<i>A</i> − (1/<i>a</i>)((<i>dφ</i>/<i>dt</i>) + (<i>dχ</i>/<i>dt</i>)))/<i>W</i>.
>
> Die electromotorische Kraft des Inductionsstroms, welcher von der Anwesenheit des Eisenstücks herrührt, ist also
>
> − (1/<i>a</i>)(<i>dχ</i>/<i>dt</i>).

6) 磁石が、ある導体と、その導体によって磁化された鉄の片との影響のもとで動くとする。単位の電流のときの導体に対する磁石のポテンシャルを <i>φ</i>、単位の電流が起こす磁気についての鉄の片に対する磁石のポテンシャルを <i>χ</i> とすると、前と同じく

<i>a</i><i>A</i><i>J</i> = <i>a</i><i>J</i><sup>2</sup><i>W</i> + <i>J</i>(<i>dφ</i>/<i>dt</i>) + <i>J</i>(<i>dχ</i>/<i>dt</i>)

であり、したがって

<i>J</i> = (<i>A</i> − (1/<i>a</i>)((<i>dφ</i>/<i>dt</i>) + (<i>dχ</i>/<i>dt</i>)))/<i>W</i>

である。だから、鉄の片があることから来る誘導電流の起電力は

− (1/<i>a</i>)(<i>dχ</i>/<i>dt</i>)

である。

### ¶97　p.66–67

> Wird in dem Electromagneten durch den Strom <i>n</i> dieselbe Vertheilung des Magnetismus hervorgerufen, wie durch den genäherten Magneten, so muss nach dem in No. 4 gesagten das Potential desselben gegen den Magneten, <i>n</i><i>χ</i>, gleich sein seinem Potential gegen den Leitungsdrath <i>n</i><i>V</i>, wenn <i>V</i> dasselbe für die Stromeinheit bedeutet. Es ist also <i>χ</i> = <i>V</i>. Wird also ein Inductionsstrom hervorgerufen, dadurch dass das Eisenstück durch Vertheilung von dem Magneten magnetisirt wird, so ist die electromotorische Kraft − (1/<i>a</i>)(<i>dχ</i>/<i>dt</i>) = − (1/<i>a</i>)(<i>dV</i>/<i>dt</i>), und wie in No. 7 der Gesammtstrom
>
> [p.67] ∫<i>J</i><i>dt</i> = ((1/<i>a</i>)(<i>V</i><sub>,</sub> − <i>V</i><sub>,,</sub>))/<i>W</i>,
>
> wo <i>V</i><sub>,</sub> und <i>V</i><sub>,,</sub> die Potentiale des magnetisirten Eisens gegen den Leitungsdrath vor und nach der Magnetisirung sind. — *Neumann* folgert dies Gesetz aus der Analogie mit dem vorigen Falle.

電磁石の中に、電流 <i>n</i> によって、近づけた磁石によるのと同じ磁気の分布が起こされるなら、No. 4 で述べたことにより、磁石に対する電磁石のポテンシャル <i>n</i><i>χ</i> は、導線（Leitungsdrath）に対する磁石のポテンシャル <i>n</i><i>V</i> に等しくなければならない。ここで <i>V</i> は単位の電流のときの同じポテンシャルである。だから <i>χ</i> = <i>V</i> である。そこで、鉄の片が磁石からの分布によって磁化されることで誘導電流が起こされるなら、起電力は − (1/<i>a</i>)(<i>dχ</i>/<i>dt</i>) = − (1/<i>a</i>)(<i>dV</i>/<i>dt</i>) であり、No. 7 のときと同じく、電流の全体は

∫<i>J</i><i>dt</i> = ((1/<i>a</i>)(<i>V</i><sub>,</sub> − <i>V</i><sub>,,</sub>))/<i>W</i>

である。ここで <i>V</i><sub>,</sub> と <i>V</i><sub>,,</sub> は、磁化の前と後の、導線に対する磁化された鉄のポテンシャルである。—— ノイマンはこの法則を、前の場合との類比から導いている。

訳注：「No. 7」は誌面のとおり。∫<i>J</i><i>dt</i> の同じ形の式は No. 5 の項（p.65）に出ている。No. 7 はこの後の項。
訳注：「Leitungsdrath」は当時の綴り（今の Leitungsdraht）。

### ¶98　p.67

> 7) Wird ein Electromagnet unter dem Einfluss eines Stromes magnetisch, so geht durch den Inductionsstrom Wärme verloren; ist das Eisenstück weich, so wird bei der Oeffnung derselbe Inductionsstrom in entgegengesetzter Richtung gehn, und die Wärme wieder gewonnen. Ist es ein Stahlstück, welches seinen Magnetismus behält, so bleibt jene Wärme verloren, und an ihrer Stelle gewinnen wir magnetische Arbeitskraft, gleich dem halben Potential jenes Magneten bei vollständiger Bindung, wie in No. 4 gezeigt ist. Aus der Analogie der vorigen Fälle möchte es indessen nicht unwahrscheinlich sein, dass die electromotorische Kraft seinem ganzen Potential entspricht, wie *Neumann* den gleichen Schluss macht, und dass ein Theil der Bewegung der magnetischen Fluida wegen der Schnelligkeit derselben als Wärme verloren geht, welche hierbei in dem Magneten gewonnen wird.

7) 電磁石が電流の影響のもとで磁化されるとき、誘導電流によって熱が失われる。鉄の片が軟らかいなら、回路を開くときに同じ誘導電流が反対の向きに流れ、熱がふたたび得られる。それが磁気を保つ鋼の片なら、その熱は失われたままであり、その代わりに、No. 4 で示したとおり、完全な結合のときのその磁石のポテンシャルの半分に等しい、磁気の仕事をする力が得られる。とはいえ、前の場合との類比からすると、ノイマンが同じ結論を出しているように、起電力はそのポテンシャルの全体に当たり、磁気の流体の運動の一部は、その速さのために熱として失われる、つまりそのとき磁石の中で熱が得られる、ということもありそうでなくはない。

### ¶99　p.67–68

> 8) Werden zwei geschlossene Stromleiter gegen einander bewegt, so kann die Intensität des Stroms in beiden verändert werden. Ist <i>V</i> ihr Potential für die Stromeinheit gegen einander, so muss wie in den vorigen Fällen und aus denselben Gründen sein
>
> <i>A</i><sub>,</sub><i>J</i><sub>,</sub> + <i>A</i><sub>,,</sub><i>J</i><sub>,,</sub> = <i>J</i><sub>,</sub><sup>2</sup><i>W</i><sub>,</sub> + <i>J</i><sub>,,</sub><sup>2</sup><i>W</i><sub>,,</sub> + (1/<i>a</i>)<i>J</i><sub>,</sub><i>J</i><sub>,,</sub>(<i>dV</i>/<i>dt</i>).
>
> Ist nun die Stromintensität in dem einen Leiter <i>W</i><sub>,,</sub> sehr [p.68] viel geringer als in dem andern <i>W</i><sub>,</sub>, so dass die electromotorische Inductionskraft, welche von <i>W</i><sub>,,</sub> in <i>W</i><sub>,</sub> erregt wird, gegen die Kraft <i>A</i><sub>,</sub> verschwindet, und wir <i>J</i> = <i>A</i><sub>,</sub>/<i>W</i><sub>,</sub> setzen können, so erhalten wir aus der Gleichung
>
> <i>J</i><sub>,,</sub> = (<i>A</i><sub>,,</sub> − (1/<i>a</i>)<i>J</i><sub>,</sub>(<i>dV</i>/<i>dt</i>))/<i>W</i><sub>,,</sub>.
>
> Die electromotorische Inductionskraft ist also dieselbe, welche ein Magnet erzeugen würde, der dieselbe electrodynamische Kraft hat als der inducirende Strom. Dieses Gesetz hat *W. Weber* [注26] experimentell erwiesen.

8) 閉じた二つの電流の導体を互いに動かすと、両方の電流の強さが変わりうる。単位の電流のときの両者の互いのポテンシャルを <i>V</i> とすると、前の場合と同じく、同じ理由から

<i>A</i><sub>,</sub><i>J</i><sub>,</sub> + <i>A</i><sub>,,</sub><i>J</i><sub>,,</sub> = <i>J</i><sub>,</sub><sup>2</sup><i>W</i><sub>,</sub> + <i>J</i><sub>,,</sub><sup>2</sup><i>W</i><sub>,,</sub> + (1/<i>a</i>)<i>J</i><sub>,</sub><i>J</i><sub>,,</sub>(<i>dV</i>/<i>dt</i>)

でなければならない。いま、一方の導体 <i>W</i><sub>,,</sub> の電流の強さが、もう一方の <i>W</i><sub>,</sub> の中よりもずっと小さく、<i>W</i><sub>,,</sub> が <i>W</i><sub>,</sub> の中に起こす誘導の起電力が力 <i>A</i><sub>,</sub> に比べて消えるほどで、<i>J</i> = <i>A</i><sub>,</sub>/<i>W</i><sub>,</sub> と置けるなら、この式から

<i>J</i><sub>,,</sub> = (<i>A</i><sub>,,</sub> − (1/<i>a</i>)<i>J</i><sub>,</sub>(<i>dV</i>/<i>dt</i>))/<i>W</i><sub>,,</sub>

が得られる。だから誘導の起電力は、誘導を起こす電流と同じ電気力学の力をもつ磁石が生み出すものと同じである。この法則はW. ヴェーバー[注26] が実験で証明した。

訳注：導体を抵抗の記号 <i>W</i><sub>,</sub>・<i>W</i><sub>,,</sub> で呼んでいるのは誌面のとおり。
訳注：「<i>J</i> = <i>A</i><sub>,</sub>/<i>W</i><sub>,</sub>」の <i>J</i> には下付きが無い。誌面のとおり。文脈からは <i>J</i><sub>,</sub> に当たる。

### ¶100　p.68

> Ist dagegen die Intensität in <i>W</i><sub>,</sub> verschwindend klein gegen die in <i>W</i><sub>,,</sub>, so findet sich
>
> <i>J</i><sub>,</sub> = (<i>A</i><sub>,</sub> − (1/<i>a</i>)<i>J</i><sub>,,</sub>(<i>dV</i>/<i>dt</i>))/<i>W</i><sub>,</sub>.
>
> Die electromotorischen Kräfte der Leiter aufeinander sind sich also gleich, wenn die Stromintensitäten gleich sind, wie auch die Form der Leiter sein mag.

これに対して、<i>W</i><sub>,</sub> の中の強さが <i>W</i><sub>,,</sub> の中の強さに比べて消えるほど小さいなら

<i>J</i><sub>,</sub> = (<i>A</i><sub>,</sub> − (1/<i>a</i>)<i>J</i><sub>,,</sub>(<i>dV</i>/<i>dt</i>))/<i>W</i><sub>,</sub>

となる。だから、導体が互いに及ぼす起電力は、電流の強さが等しければ、導体の形がどうであれ等しい。

### ¶101　p.68–69

> Die gesammte Inductionskraft, welche während einer gewissen Bewegung der Leiter gegen einander ein Strom liefert, der selbst durch die Induction nicht verändert wird, ist hiernach wieder gleich der Aenderung in dem Potentiale desselben gegen den andern von − 1/<i>a</i> durchflossenen Leiter. In dieser Form erschliesst *Neumann* das Gesetz aus der Analogie der magnetischen und electrodynamischen Kräfte l. c. §. 10, und dehnt es auch auf den Fall aus, wo die [p.69] Induction in ruhenden Leitern durch Verstärkung oder Schwächung der Ströme hervorgebracht wird. *W. Weber* zeigt die Uebereinstimmung seiner Annahme für die electrodynamischen Kräfte mit diesen Theoremen l. c. S. 147—153. Aus dem Gesetz von der Erhaltung der Kräfte ist für diesen Fall keine Bestimmung zu entnehmen; nur muss durch Rückwirkung des inducirten Stroms auf den inducirenden eine Schwächung des letzteren eintreten, welche einem ebenso grossen Wärmeverlust entspricht, als in dem inducirten Strome gewonnen wird. Dasselbe Verhältniss muss bei der Wirkung des Stroms auf sich selbst zwischen der anfänglichen Schwächung und dem Extracurrent stattfinden. Indessen lassen sich hieraus keine weiteren Folgerungen ziehen, weil die Form des Ansteigens der Ströme nicht bekannt ist, und ausserdem das <i>Ohm</i>sche Gesetz nicht unmittelbar anwendbar ist, da diese Ströme wohl nicht gleichzeitig die ganze Ausdehnung der Leitung einnehmen möchten.

したがって、導体どうしがある運動をするあいだに、誘導によって自分は変わらない電流がもたらす誘導の力の全体は、ここでもまた、− 1/<i>a</i> が流れるもう一方の導体に対するその電流のポテンシャルの変化に等しい。この形でノイマンは、磁気の力と電気力学の力の類比から前掲の §.10 でこの法則を推し、さらに、静止した導体の中で電流が強まったり弱まったりすることで誘導が起こる場合にも広げている。W. ヴェーバーは前掲の S.147—153 で、電気力学の力についての彼の仮定がこれらの定理と一致することを示している。この場合については、力の保存の法則から何も定められない。ただ、誘導された電流が誘導する電流へ及ぼす反作用によって、誘導する電流が弱まらなければならず、その弱まりは、誘導された電流の中で得られるのと同じ大きさの熱の損失に当たる。電流が自分自身に及ぼす作用でも、初めの弱まりと余剰電流（Extracurrent）とのあいだに同じ関係がなければならない。とはいえ、ここからそれ以上の結論は引き出せない。電流の立ち上がりの形が知られておらず、そのうえ、これらの電流はおそらく導線の全体の広がりを同時には占めないだろうから、オームの法則をそのまま当てはめられないからである。

訳注：「Extracurrent」は回路を開閉するときに現れる余分の電流で、今の言い方では自己誘導による電流に当たる。
訳注：Weber の「l. c.」は注26 の『Electrodynamische Maassbestimmungen』を指す。「<i>Ohm</i>sche」は Georg Simon Ohm の名で、名の部分だけが斜体。
訳注：原文の「Erhaltung der Kräfte」（複数）は誌面のとおり。

### ¶102　p.69–70

> Es bleiben uns von den bekannten Naturprocessen noch die der organischen Wesen übrig. In den Pflanzen sind die Vorgänge hauptsächlich chemische, und ausserdem findet, wenigstens in einzelnen, eine geringe Wärmeentwicklung statt. Vornehmlich wird in ihnen eine mächtige Quantität chemischer Spannkräfte deponirt, deren Aequivalent uns als Wärme bei der Verbrennung der Pflanzensubstanzen geliefert wird. Die einzige lebendige Kraft, welche dafür nach unseren bisherigen Kenntnissen während des Wachsthums der Pflanzen absorbirt wird, sind die chemischen Strahlen des Sonnenlichts. Es fehlen uns indessen noch alle Angaben zur näheren Vergleichung der [p.70] Kraftäquivalente, welche hierbei verloren gehen, und gewonnen werden. Für die Thiere haben wir schon einige nähere Anhaltpuncte. Dieselben nehmen die complicirten oxydablen Verbindungen, welche von den Pflanzen erzeugt werden, und Sauerstoff in sich auf, geben dieselben meist verbrannt, als Kohlensäure und Wasser, theils auf einfachere Verbindungen reducirt wieder von sich, verbrauchen also eine gewisse Quantität chemischer Spannkräfte, und erzeugen dafür Wärme und mechanische Kräfte. Da die letzteren eine verhältnissmässig geringe Arbeitsgrösse darstellen gegen die Quantität der Wärme, so reducirt sich die Frage nach der Erhaltung der Kraft ungefähr auf die, ob die Verbrennung und Umsetzung der zur Nahrung dienenden Stoffe eine gleiche Wärmequantität erzeuge, als die Thiere abgeben. Diese Frage kann nach den Versuchen von *Dulong* und *Despretz* wenigstens annähernd bejaht werden [注27].

知られた自然の過程のうち、残るのは生物の過程である。植物の中の過程は主に化学的なもので、そのほか、少なくとも一部の植物では、わずかな熱の発生がある。何より、植物の中には化学的な緊張力が大量に蓄えられ、その当量は、植物の物質を燃やすときに熱としてわれわれに与えられる。そのために植物の成長のあいだに吸収される活力は、いままでの知識によれば、太陽の光の化学的な光線だけである。とはいえ、このとき失われる力の当量と得られる力の当量とを詳しく比べるための資料は、まだ何も無い。動物については、すでにいくつかの、より詳しい手がかりがある。動物は、植物が作る複雑な酸化しうる化合物と酸素とを取り入れ、それらを、多くは燃やして炭酸と水として、一部はより単純な化合物に還元して、ふたたび外へ出す。だから動物は、ある量の化学的な緊張力を費やし、その代わりに熱と力学的な力とを生み出す。力学的な力は、熱の量に比べれば仕事の量としては比較的わずかなので、力の保存の問いは、ほぼ、食物となる物質の燃焼と変化が、動物が出すのと等しい熱量を生むかどうかという問いに帰する。この問いは、デュロンとデプレの実験によれば、少なくとも近似的には肯定できる [注27]。

訳注：「Kohlensäure」（炭酸）は、今の言い方では二酸化炭素に当たる。
訳注：Dulong は Pierre Louis Dulong、Despretz は César-Mansuète Despretz。二人は 1820 年代に動物の熱の発生を熱量計で測った。
訳注：「chemische Strahlen」（化学的な光線）は、当時、化学作用を起こすとされた光の成分の呼び名。

### ¶103　p.70–71

> Schliesslich muss ich noch einiger Bemerkungen von *Matteucci* gegen die hier durchgeführte Betrachtungsweise erwähnen, welche sich in der Biblioth. univ. de Genève Suppl. No. 16. 1847. 15. Mai. S. 375 finden. Derselbe geht aus von dem Satze, dass nach derselben ein chemischer Process nicht so viel Wärme erzeugen könne, wenn er Electricität, Magnetismus oder Licht zugleich entwickelt, als wenn dies nicht der Fall sei. Er führt dagegen an, dass, wie er durch eine Reihe von Messungen zu zeigen sich bemüht, Zink bei seiner Auflösung in Schwefelsäure [p.71] ebenso viel Wärme erzeugt, wenn dieselbe unmittelbar durch die chemische Verwandtschaft geschieht, als wenn es mit Platin eine Kette bildet, und dass ein electrischer Strom, der einen Magneten in Ablenkung erhält, ebenso viel chemische und thermische Wirkungen erzeuge als ohne diese Ablenkung. Dass *Matteucci* diese Thatsachen als Einwürfe betrachtet, rührt von einem vollständigen Missverstehen der Ansicht her, welche er widerlegen will, wie sich aus einem Vergleich mit unserer Darstellung dieser Verhältnisse sogleich ergiebt. Dann führt er zwei calorimetrische Versuche an über die Wärme, welche bei der Verbindung von Aetzbaryt mit concentrirter oder verdünnter Schwefelsäure sich entwickelt, und über die, welche in einem Drathe in Gasen von verschiedenem Abkühlungsvermögen durch denselben electrischen Strom erzeugt wird, wobei jene Masse und der Drath bald glühend werden, bald nicht. Er findet diese Wärmemengen im ersteren Fall nicht kleiner als im letzteren. Wenn man aber die Unvollkommenheit unserer calorimetrischen Vorrichtungen bedenkt, so kann es nicht auffallen, dass Unterschiede der Abkühlung durch Strahlung nicht bemerkt werden, welche davon herrühren könnten, dass diese Strahlung je nach der leuchtenden oder nicht leuchtenden Natur derselben die umgebenden diathermanen Mittel leichter oder schwerer durchdringt. In dem ersteren Versuche von *Matteucci* geschieht die Vereinigung des Baryts mit der Schwefelsäure noch dazu in einem nicht diathermanen Gefässe von Blei, wo die leuchtenden Strahlen gar nicht einmal herausdringen können. Die Unvollkommenheiten von *Matteucci's* Methoden bei diesen Messungen können wir daher wohl unerwähnt lassen.

最後に、ここで行った考え方に対するマッテウッチのいくつかの批評に触れておかなければならない。それは『Biblioth. univ. de Genève』の Suppl. No. 16、1847 年 5 月 15 日、S.375 にある。彼が出発するのは、この考え方によれば、化学的な過程は、電気・磁気・光を同時に生じるときには、そうでないときほど多くの熱を生めないはずだ、という命題である。これに対して彼は、一連の測定で示そうと努めているように、亜鉛が硫酸に溶けるとき、溶解が化学的な親和力によってじかに起こる場合にも、亜鉛が白金と電池（Kette）を組む場合と同じだけの熱が生じること、また、磁石を振れたままに保つ電流は、その振れが無い場合と同じだけの化学的・熱的な作用を生むことを挙げる。マッテウッチがこれらの事実を反論とみなすのは、彼が反駁しようとする見方をまったく誤解していることから来る。これは、これらの関係についてのわれわれの叙述と比べればすぐに分かる。次に彼は二つの熱量測定の実験を挙げる。一つは、苛性バリタを濃い硫酸または薄い硫酸と化合させるときに生じる熱について、もう一つは、冷やす能力の異なる気体の中で、同じ電流によって針金の中に生じる熱についての実験であり、そこでは、かのバリタの塊と針金が、あるときは灼熱し、あるときはしない。彼は、前者の場合の熱量が後者の場合より小さくないと見いだす。しかし、われわれの熱量測定の装置の不完全さを考えれば、放射による冷え方の違いに気づかれないのは驚くに当たらない。その違いは、放射が、光るものか光らないものかによって、まわりの熱を通す媒質（diatherman）を通りやすかったり通りにくかったりすることから来うるものである。マッテウッチの前者の実験では、そのうえ、バリタと硫酸の化合が、熱を通さない鉛の容器の中で行われ、光る光線はそもそも外へ出られない。だから、これらの測定でのマッテウッチの方法の不完全さには、触れないでおいてよいだろう。

訳注：「Drathe」「Drath」は当時の綴り（今の Draht）。
訳注：Matteucci は Carlo Matteucci。『Biblioth. univ. de Genève』は『Bibliothèque universelle de Genève』。
訳注：「Aetzbaryt」（苛性バリタ）は水酸化バリウム。「diatherman」は熱の放射を通す性質。

### ¶104　p.72

> Ich glaube durch das Angeführte bewiesen zu haben, dass das besprochene Gesetz keiner der bisher bekannten Thatsachen der Naturwissenschaften widerspricht, von einer grossen Zahl derselben aber in einer auffallenden Weise bestätigt wird. Ich habe mich bemüht, die Folgerungen möglichst vollständig aufzustellen, welche aus der Combination desselben mit den bisher bekannten Gesetzen der Naturerscheinungen sich ergeben, und welche ihre Bestätigung durch das Experiment noch erwarten müssen. Der Zweck dieser Untersuchung, der mich zugleich wegen der hypothetischen Theile derselben entschuldigen mag, war, den Physikern in möglichster Vollständigkeit die theoretische, practische und heuristische Wichtigkeit dieses Gesetzes darzulegen, dessen vollständige Bestätigung wohl als eine der Hauptaufgaben der nächsten Zukunft der Physik betrachtet werden muss.

以上に挙げたことによって、論じてきた法則が、これまで知られた自然科学のどの事実とも矛盾せず、むしろその多くの事実によって目立った仕方で確かめられることを、証明できたと思う。私は、この法則をこれまで知られた自然現象の法則と組み合わせて出てくる結論で、まだ実験による確かめを待たなければならないものを、できるかぎり完全に並べようと努めた。この研究の目的は、それがこの研究の仮説的な部分の言いわけにもなるだろうが、この法則の理論上・実用上・発見法上の重要さを、物理学者たちにできるかぎり完全に示すことであった。この法則を完全に確かめることは、おそらく、物理学のすぐ先の未来の主な課題の一つとみなされなければならない。

訳注：本文はこの段で終わる。下に区切りの飾り線があり、続けて正誤（次の段）が組まれている。

### ¶105　p.72

> *Berichtigung.*
>
> S. 43 von Zeile 2 v. o. ab lies: also nahehin <i>C</i><sub><i>b</i></sub> = 0, so ist die Quantität der electrischen Spannkräfte (<i>Q</i><i>C</i><sub><i>a</i></sub>)/2 = − (<i>V</i> + <i>W</i><sub><i>a</i></sub>)/2; ist auch die Entfernung beider Leiter sehr gross, so ist dieselbe − ½<i>W</i><sub><i>a</i></sub>.

*正誤。*

43 頁、上から 2 行目から次のように読む。したがってほぼ <i>C</i><sub><i>b</i></sub> = 0 なら、電気の緊張力の量は (<i>Q</i><i>C</i><sub><i>a</i></sub>)/2 = − (<i>V</i> + <i>W</i><sub><i>a</i></sub>)/2 である。さらに二つの導体の距離もとても大きいなら、それは − ½<i>W</i><sub><i>a</i></sub> である。

訳注：「Berichtigung.」は誌面で字間を空けた見出し語。
訳注：p.43 の段（「Ist die Ableitungsgrösse des Leiters <i>B</i> sehr gross, also nahehin <i>C</i> = 0, …」）を直すもの。その段の誌面では (<i>Q</i><i>C</i><sub><i>a</i></sub>)/2 = <i>W</i><sub><i>a</i></sub>/2 となっている。
訳注：v. o.（von oben）は「上から」。

### 注1　p.7

> *Poggendorffs* Annalen LIX 446. 566.

ポッゲンドルフの『年報』第 59 巻、446 頁、566 頁。

訳注：『年報』は Poggendorff が編んだ *Annalen der Physik und Chemie*。第 59 巻（1843 年）に、クラペイロンの論文（原文はフランス語、1834 年）の独訳が載っている。

### 注2　p.24

> S. *Melloni* in *Poggd.* Ann. Bd. LVII. S. 300. *Brücke* in Ann. Bd. LXV. 593.

メローニ、ポッゲンドルフの『年報』第 57 巻 300 頁を見よ。ブリュッケ、同『年報』第 65 巻 593 頁。

訳注：*Poggd.* Ann. は J. C. Poggendorff 編 *Annalen der Physik und Chemie*。メローニ（Macedonio Melloni, 1798–1854）はイタリアの物理学者で熱放射の研究者。ブリュッケ（Ernst Wilhelm von Brücke, 1819–1892）はドイツの生理学者。

### 注3　p.27

> *J. P. Joule.* On the existence of an equivalent relation between heat and the ordinary forms of mechanical power. Phil. mag. XXVII. 205.

J. P. ジュール「熱と力学的な力のふつうの形との間に当量の関係があることについて」、Phil. Mag. 27 巻 205 頁。

訳注：Philosophical Magazine 第 3 集 27 巻（1845）。

### 注4　p.28

> Mem. of the Society of Manchester. T. V. p. 2. London 1802.

『マンチェスター協会紀要』第 5 巻 第 2 部、ロンドン、1802 年。

訳注：W. Henry は William Henry（1774–1836）。誌面の「p. 2.」は、訳では巻の部（part）と取り「第 2 部」とした。

### 注5　p.28

> Statique chimique. T. I. p. 247.

『化学静力学』第 1 巻 247 頁。

訳注：Claude-Louis Berthollet, *Essai de statique chimique*（1803）。

### 注6　p.28

> *Humphrey Davy*, Essay on heat, light and the combinations of light.

ハンフリー・デーヴィ『熱、光、および光の化合についての論考』。

訳注：1799 年。誌面の綴りは Humphrey（本人の綴りは Humphry）。

### 注7　p.30

> Philos. Magazine. 1844.

Philosophical Magazine、1844 年。

### 注8　p.32

> *Hess* in *Poggd.* Ann. L 392. LVI 598.

ヘス、ポッゲンドルフ『年報』50 巻 392 頁、56 巻 598 頁。

訳注：ヘスは Germain Henri Hess（1802–1850）。*Poggd.* Ann. は Poggendorffs *Annalen der Physik und Chemie*。

### 注9　p.33

> Philos. Magaz. XXVI 369.

Philosophical Magazine 26 巻 369 頁。

訳注：Joule, "On the changes of temperature produced by the rarefaction and condensation of air", Phil. Mag. 第 3 集 26 巻（1845）。

### 注10　p.33

> *Poggd.* Ann. Bd. LIX 446. 566.

ポッゲンドルフ『年報』59 巻 446 頁、566 頁。

訳注：クラペイロンの 1834 年の論文の独訳（1843）。

### 注11　p.33

> Ueber die Wärme und Elasticität der Gase und Dämpfe. Mannheim, 1845. Ein Auszug davon in *Poggd.* Ann. Ergänzungsbd. II.

『気体と蒸気の熱と弾性について』、マンハイム、1845 年。その抜粋がポッゲンドルフ『年報』補巻 2 にある。

### 注12　p.43

> *Poggd.* Ann. XLIII 47.

『ポッゲンドルフ年報』第 43 巻 47 頁。
訳注：Poggd. Ann. は *Annalen der Physik und Chemie*（J. C. Poggendorff 編）。第 43 巻は 1838 年。

### 注13　p.44

> *Poggd.* Ann. XLVIII. 292. Dazu die Bemerkung von *Riess* ebendas. S. 320.

『ポッゲンドルフ年報』第 48 巻 292 頁。これについてのリースの所見が同じ巻の 320 頁にある。
訳注：第 48 巻は 1839 年。

### 注14　p.44

> Ann. LXII. 364. LXIV. 64.

『年報』第 62 巻 364 頁、第 64 巻 64 頁。
訳注：第 62 巻は 1844 年、第 64 巻は 1845 年。

### 注15　p.46

> S. *Faraday* Experimentaluntersuchungen über Electricität. 17te Reihe. Philos. Transact. 1840 p. I. No. 2071. und *Poggd.* Ann. LIII. 568.

ファラデー『電気の実験的研究』第 17 集を見よ。Philos. Transact. 1840 年 第 1 部、第 2071 節。および『ポッゲンドルフ年報』第 53 巻 568 頁。
訳注：Philos. Transact. は *Philosophical Transactions of the Royal Society of London*。「p. I.」は第 1 部（Part I）。No. 2071 は、ファラデーが論文の段落に通しで振った番号。
訳注：第 53 巻は 1841 年。

### 注16　p.48

> S. *Poggd.* Ann. LIX. S. 203 u. 407 aus den Bull. de l'acad. d. scienc. de St. Petersbourg. 1843.

『ポッゲンドルフ年報』第 59 巻 203 頁と 407 頁を見よ。『サンクトペテルブルク科学アカデミー紀要』（1843 年）からの転載。
訳注：第 59 巻は 1843 年。「Petersbourg」は誌面の綴り（仏語の Pétersbourg の形）。

### 注17　p.51

> *Poggd.* Ann. LIV. 429 und LVII. 104.

『ポッゲンドルフ年報』第 54 巻 429 頁、および第 57 巻 104 頁。

訳注：*Poggd.* Ann. は Poggendorff 編 Annalen der Physik und Chemie。

### 注18　p.51

> Experimentaluntersuchungen über Electricität. 16te Reihe. Philos. Transact. 1840 p. I. u. *Poggd.* Ann. LII. S. 163 u. 547.

『電気についての実験研究』第 16 系列。Philosophical Transactions 1840 年 第 1 部、および『ポッゲンドルフ年報』第 52 巻 163 頁と 547 頁。

訳注：Faraday の Experimental Researches in Electricity の第 16 系列のドイツ語の題。

### 注19　p.52

> S. *Ohm* in *Poggd.* Ann. LXIII. 389.

『ポッゲンドルフ年報』第 63 巻 389 頁のオームを見よ。

### 注20　p.53

> *Poggd.* Ann. LIX. 229.

『ポッゲンドルフ年報』第 59 巻 229 頁。

### 注21　p.53

> Ann. LXVII. 531.

同年報 第 67 巻 531 頁。

### 注22　p.56

> Bull. de la classe phys. math. de l'acad. d. scienc. de St. Petersbourg. T. V. p. 1. und *Poggd.* Ann. LVII. 497.

『サンクトペテルブルク科学アカデミー物理数学部紀要』第 5 巻 1 頁、および『ポッゲンドルフ年報』第 57 巻 497 頁。

訳注：巻の番号 LVII は誌面のとおり。Lenz と Saweljev の論文「Ueber die galvanische Polarisation und elektromotorische Kraft in Hydroketten」は、出版社の書誌（Wiley・DOI 10.1002/andp.18461430404）では Annalen der Physik 第 143 巻（＝ポッゲンドルフ年報 第 67 巻、1846 年）497–527 頁にある。誌面の LVII は LXVII の誤植とみられる。

### 注23　p.56

> Philos. Magaz. 1841. vol. XIX. S. 275. u. 1843. XX. S. 204.

Philosophical Magazine 1841 年 第 19 巻 275 頁、および 1843 年 第 20 巻 204 頁。

訳注：出版社の書誌（Taylor & Francis）では、Joule の「On the heat evolved by metallic conductors of electricity, and in the cells of a battery during electrolysis」は Philosophical Magazine 第 19 巻（1841 年）260–277 頁（DOI 10.1080/14786444108650416）。「On the electrical origin of chemical heat」は第 22 巻（1843 年）204–208 頁（DOI 10.1080/14786444308636352）。誌面の「1843. XX」の巻は XXII の誤りとみられる。

### 注24　p.63

> *Poggd.* Ann. LXVII. 31.

『ポッゲンドルフ年報』（Poggendorffs Annalen）第 67 巻、31 頁。

訳注：Annalen der Physik und Chemie, Bd. 67（1846）に載った F. E. Neumann の誘導電流の論文（「Allgemeine Gesetze der inducirten elektrischen Ströme」）。

### 注25　p.63

> Ann. LXIV. 1.

同年報、第 64 巻、1 頁。

訳注：Annalen der Physik und Chemie, Bd. 64（1845）の H. Grassmann の論文（「Neue Theorie der Elektrodynamik」）。

### 注26　p.68

> Electrodynamische Maassbestimmungen. S. 71—75.

『電気力学的な量の測定』（Electrodynamische Maassbestimmungen）、71—75 頁。

訳注：W. Weber, *Elektrodynamische Maassbestimmungen*（Leipzig, 1846）。

### 注27　p.70

> Näher eingegangen bin ich auf diese Frage in dem *Encycl. Wörterbuch der medicinischen Wissenschaften*. Art. „Wärme", und in den *Fortschritten der Physik im Jahre 1845, dargestellt von der physikalischen Gesellschaft zu Berlin*. S. 346.

この問いには、『医学百科事典』（Encycl. Wörterbuch der medicinischen Wissenschaften）の項目「熱」と、『1845 年の物理学の進歩、ベルリン物理学会の編』の 346 頁で、より詳しく立ち入った。

訳注：誌面では二つの書名が字間を空けた字体（隔字体）。
