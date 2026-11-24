# Illustrations of the Dynamical Theory of Gases（1860）— 原文（英語）と日本語訳

- 原典：J. C. Maxwell, "Illustrations of the Dynamical Theory of Gases", *The London, Edinburgh and Dublin Philosophical Magazine and Journal of Science*, 4th ser.。Part I "On the Motions and Collisions of Perfectly Elastic Spheres" は 19 巻 124 号（1860 年 1 月）pp.19–32（DOI [10.1080/14786446008642818](https://doi.org/10.1080/14786446008642818)）。Part II "On the Process of Diffusion of two or more kinds of moving particles among one another" と Part III "On the Collision of Perfectly Elastic Bodies of any Form" は 20 巻 130 号（1860 年 7 月）pp.21–37 に一続きで載る（DOI [10.1080/14786446008642902](https://doi.org/10.1080/14786446008642902)。Part II が pp.21–33、Part III が pp.33–37）。どちらも Crossref で著者・題・巻号・頁を照らした。著者はスコットランドの物理学者（James Clerk Maxwell・1831–1879）で、このときアバディーンのマーシャル・カレッジの自然哲学の教授。Part I の題の脚注に「1859 年 9 月 21 日、アバディーンでの英国学術協会の会合で読んだ」とある。
- 訳した範囲：全文（Part I・II・III。題と本文 137 段・脚注 1）。パースが「進化的な愛」（1893）の ¶20 で「ダーウィンの出版の直前の夏には、マクスウェルが英国学術協会で、この主題についての彼の研究のうち最初の、そして最も重要なものを読み上げていた」と書く研究（#175 の A20）。パースは題を挙げていない。協会で読んだのは 1859 年 9 月で、その本論が翌 1860 年にこの誌に載った。一覧の範囲は Part I（19 巻 pp.19–32）と Part II（20 巻 pp.21–37）で、20 巻のこの頁の中に Part III と、論文全体のまとめが入っている。だから Part III も訳した。
- 原文：Internet Archive の誌面の走査に合わせた（2026-11-24・#175）。19 巻は [`londonedinburghp19maga`](https://archive.org/details/londonedinburghp19maga)（頁と画像の対応は p = n − 13。p.19 が `page/n32`、p.32 が `n45`）。20 巻は [`londonedinburghd20lond`](https://archive.org/details/londonedinburghd20lond)（p = n − 15。p.21 が `page/n36`、p.37 が `n52`）。文字起こしが無いので、IA の OCR を下敷きに、読む役（Claude のサブエージェント）七つが全 31 頁の画像と照らして起こし、照らす役七つが段ごとに画像と照らし直した。式・記号・上付き下付きは画像から起こした。
- 直したのは次のとおり。綴りは誌面のとおり（centre・vapour など）。誌面の誤植と見えるものは直さずに置き、訳注に書いた：19 巻 p.24 で指数の底が ε と組まれていること（ほかの頁は e。訳は e にそろえた）、p.27 の 1/<i>l</i><sub>1</sub>・1/<i>l</i><sub>2</sub> の式の N<sub>1</sub>・N<sub>2</sub>、pp.28–29 の式 (14)・(15) の添字と指数、p.32 の平均の速度 1505（√<i>k</i> = 930 から計算すると約 1484）、20 巻 p.21 の「vol. xix. p, 32」、p.24 の式 (30)・(31) の符号、p.28 の式 (43) の <i>l</i>（<i>L</i> と見られる）と q<sub>1</sub> の閉じない括弧、p.30 の式 (54) の係数 4/3（計算では 5/3）、p.31 の deutoxide of nitrogen（今の一酸化窒素。二酸化炭素と密度が等しいのは亜酸化窒素）、p.34 の式 (64) の U′<sub>1</sub>（U′<sub>2</sub> と見られる）、p.35 で本文が引く式の番号 (63)・(64)（(62)・(63) と見られる）、式 (68) の閉じない波括弧。ほかに、計算で確かめた所も訳注に書いた。
- 式の書き方：誌面で分数として縦に組まれた式は、/ で一行に書いた。誌面の小数点（0·0036）は、原文では誌面のまま、訳では 0.0036 にした。掛け算は、訳では中黒（・）にした。独立の行の式は、原文でも訳でも独立の行に置いた。式の番号 (1)〜(69) は誌面のとおり。誌面の小さな線の図（20 巻 p.22 ほか）は写さず、訳注で形を書いた。
- 段の分け方：誌面の段落のとおり。Part I の題と、20 巻の題（「[Concluded from vol. xix. p. 32.]」まで）は、それぞれ一つの段にした。命題（Prop.）の見出しは、誌面のとおり段の頭に残した。
- **訳は Claude（AI）によるもの。** 2026-11-24 に訳した。既にある日本語訳を見ずに、英語の原文から付けた。読む役に原文の起こしと訳の案を出させ、照らす役に原文と画像・訳を段ごとに照らさせ、Claude がつないで入れた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（マクスウェルの表）でそろえた。`訳注：` の行は Claude の注。
- マクスウェルは、気体の性質を、たくさんの小さな完全に弾性のある球がぶつかり合いながら動くことから説く。Part I では、たくさんの衝突のあとで粒子の速度が「最小二乗法の理論で誤差が分布するのと同じ法則」に従って分布することを示し（命題 IV。今のマクスウェル分布）、二種類の粒子の活力が平均で等しくなること、道のりの平均の長さ、壁にかかる圧力、内部摩擦を求め、ストークスの空気の実験から道のりの平均の長さを見積もる。Part II では、二種類の気体の拡散と熱の伝導を同じ考えで扱い、グレアムの実験から道のりの長さを出し直す。Part III では、球でない物体の衝突で並進と回転の活力が等しくなることを示し、それが比熱の比の 1.408 と合わないことから、気体が硬い弾性の粒子の系だという仮説をそのまま受け入れることに反する結果だ、と結ぶ。
- 段の見出しの頁は誌面の頁で、19 巻と 20 巻で頁の数字が重なるので巻を添えた。段の途中で頁が変わるところは `[p.N]`。頁をまたいで切れた語は、ほかの対訳と同じく「ascer- [p.23] tainable」の形で残した。

### ¶1　19 巻 p.19

> V. *Illustrations of the Dynamical Theory of Gases.*—Part I. *On the Motions and Collisions of Perfectly Elastic Spheres. By* J. C. Maxwell, *M.A., Professor of Natural Philosophy in Marischal College and University of Aberdeen*[注1].

V. 気体の動力学的理論（dynamical theory of gases）の例解（illustrations）。第 I 部　完全に弾性のある（perfectly elastic）球（spheres）の運動と衝突について。アバディーンのマーシャル・カレッジ（Marischal College and University of Aberdeen）の自然哲学の教授、文学修士 J. C. マクスウェル[注1]。

訳注：V は誌の号の中での論文の番号。

### ¶2　19 巻 p.19

> So many of the properties of matter, especially when in the gaseous form, can be deduced from the hypothesis that their minute parts are in rapid motion, the velocity increasing with the temperature, that the precise nature of this motion becomes a subject of rational curiosity. Daniel Bernouilli, Herapath, Joule, Krönig, Clausius, &c. have shown that the relations between pressure, temperature, and density in a perfect gas can be explained by supposing the particles to move with uniform velocity in straight lines, striking against the sides of the containing vessel and thus producing pressure. It is not necessary to suppose each particle to travel to any great distance in the same straight line; for the effect in producing pressure will be the same if the particles strike against each other; so that the straight line described may be very short. M. Clausius has determined the mean length of path in terms of the average distance [p.20] of the particles, and the distance between the centres of two particles when collision takes place. We have at present no means of ascertaining either of these distances; but certain phænomena, such as the internal friction of gases, the conduction of heat through a gas, and the diffusion of one gas through another, seem to indicate the possibility of determining accurately the mean length of path which a particle describes between two successive collisions. In order to lay the foundation of such investigations on strict mechanical principles, I shall demonstrate the laws of motion of an indefinite number of small, hard, and perfectly elastic spheres acting on one another only during impact.

物質の性質の多く、とりわけ気体の形にあるときの性質の多くは、物質の微小な部分が速く運動していて、その速度（velocity）が温度（temperature）とともに増す、という仮説から導くことができる。そのため、この運動の正確な性質は、理にかなった好奇心の対象になる。ダニエル・ベルヌーイ、ヘラパス、ジュール、クレーニッヒ、クラウジウスらは、完全な気体での圧力（pressure）・温度・密度（density）の関係が、次のように考えれば説明できることを示した。粒子（particles）は直線の上を一様な速度で動き、入れている容器（vessel）の壁に当たり、そうして圧力を生む。各粒子が同じ直線の上を長い距離にわたって進むと考える必要はない。粒子どうしが互いに当たっても、圧力を生む効果は同じだからである。したがって、粒子の描く直線はごく短くてよい。クラウジウス氏は、道のりの平均の長さ（mean length of path）を、粒子のあいだの平均の距離と、衝突（collision）が起こるときの二つの粒子の中心のあいだの距離とで表した。今のところ、この二つの距離のどちらも確かめる手立てはない。しかし、気体の内部摩擦（internal friction）、気体の中の熱の伝導（conduction of heat）、一つの気体の別の気体の中への拡散（diffusion）のような、いくつかの現象は、一つの粒子が続く二つの衝突のあいだに描く道のりの平均の長さを、正確に決められる見込みを示しているように思われる。そのような研究の土台を厳密な力学の原理の上に置くために、私は、数の限りない、小さく、硬く、完全に弾性のある球で、衝突（impact）のあいだだけ互いに作用し合うものについて、運動の法則を証明する。

訳注：「Bernouilli」は誌面のとおりの綴り（普通は Bernoulli）。「phænomena」は phenomena の古い綴り。

### ¶3　19 巻 p.20

> If the properties of such a system of bodies are found to correspond to those of gases, an important physical analogy will be established, which may lead to more accurate knowledge of the properties of matter. If experiments on gases are inconsistent with the hypothesis of these propositions, then our theory, though consistent with itself, is proved to be incapable of explaining the phænomena of gases. In either case it is necessary to follow out the consequences of the hypothesis.

このような物体の系（system）の性質が気体の性質に対応することがわかれば、物理学の重要な類比（analogy）が打ち立てられ、それが物質の性質についてのより正確な知識に導くかもしれない。もし気体についての実験がこれらの命題（propositions）の仮説と合わないなら、私たちの理論は、それ自身の中では矛盾がなくても、気体の現象を説明できないことが証明されたことになる。どちらの場合にも、この仮説の帰結を最後までたどる必要がある。

### ¶4　19 巻 p.20

> Instead of saying that the particles are hard, spherical, and elastic, we may if we please say that the particles are centres of force, of which the action is insensible except at a certain small distance, when it suddenly appears as a repulsive force of very great intensity. It is evident that either assumption will lead to the same results. For the sake of avoiding the repetition of a long phrase about these repulsive forces, I shall proceed upon the assumption of perfectly elastic spherical bodies. If we suppose those aggregate molecules which move together to have a bounding surface which is not spherical, then the rotatory motion of the system will store up a certain proportion of the whole *vis viva*, as has been shown by Clausius, and in this way we may account for the value of the specific heat being greater than on the more simple hypothesis.

粒子が硬く、球形で、弾性があると言う代わりに、望むなら、粒子は力の中心（centres of force）であって、その作用はある小さな距離のほかでは感じられず、その距離で突然、非常に強い斥力として現れる、と言ってもよい。どちらの仮定からも同じ結果が出ることは明らかである。この斥力について長い言い回しを繰り返すのを避けるために、私は完全に弾性のある球形の物体という仮定で進める。もし、ともに動く分子の集まりが、球でない境の面を持つと考えるなら、クラウジウスが示したように、その系の回転（rotation）の運動が全体の活力（*vis viva*）のある割合を蓄える。こうして、比熱（specific heat）の値が、より単純な仮説によるときよりも大きいことを説明できるかもしれない。

訳注：活力（*vis viva*）は、質量と速度の二乗との積で、今の運動エネルギーの二倍に当たる。「aggregate molecules」は、いくつかの部分がまとまってともに動く分子を指す。

### ¶5　19 巻 p.20

> *On the Motion and Collision of Perfectly Elastic Spheres.*

完全に弾性のある球の運動と衝突について

### ¶6　19 巻 p.20

> Prop. I. Two spheres moving in opposite directions with velocities inversely as their masses strike one another; to determine their motions after impact.

命題 I　質量に反比例する速度で反対の向きに動く二つの球が、互いに衝突する。衝突の後の運動を決めること。

### ¶7　19 巻 p.20

> Let P and Q be the position of the centres at impact; A P, B Q the directions and magnitudes of the velocities before impact; P <i>a</i>, Q <i>b</i> the same after impact; then, resolving the velocities parallel and perpendicular to P Q the line of centres, we find that the velocities parallel to the line of centres are [p.21] exactly reversed, while those perpendicular to that line are unchanged. Compounding these velocities again, we find that the velocity of each ball is the same before and after impact, and that the directions before and after impact lie in the same plane with the line of centres, and make equal angles with it.

P と Q を衝突のときの中心の位置とし、A P、B Q を衝突の前の速度の向きと大きさ、P <i>a</i>、Q <i>b</i> を衝突の後の同じものとする。すると、速度を、中心を結ぶ線（line of centres）P Q に平行な成分と垂直な成分に分ければ、中心を結ぶ線に平行な速度はちょうど逆になり、その線に垂直な速度は変わらないことがわかる。これらの速度をふたたび合成すれば、各球（ball）の速度の大きさは衝突の前と後とで同じであり、衝突の前と後の向きは中心を結ぶ線と同じ平面の上にあって、その線と等しい角をなすことがわかる。

訳注：「ball」は sphere と同じものを指すので、訳ではどちらも球とした。誌面のこの所に図がある（二つの球の中心 P・Q と、衝突の前の向き A・B、後の向き <i>a</i>・<i>b</i>、中心を結ぶ線の向き N を示す線の図）。

### ¶8　19 巻 p.21

> Prop. II. To find the probability of the direction of the velocity after impact lying between given limits.

命題 II　衝突の後の速度の向きが、与えられた範囲のあいだにある確率（probability）を求めること。

### ¶9　19 巻 p.21

> In order that a collision may take place, the line of motion of one of the balls must pass the centre of the other at a distance less than the sum of their radii; that is, it must pass through a circle whose centre is that of the other ball, and radius (<i>s</i>) the sum of the radii of the balls. Within this circle every position is equally probable, and therefore the probability of the distance from the centre being between <i>r</i> and <i>r</i> + <i>dr</i> is
>
> 2<i>rdr</i>/<i>s</i><sup>2</sup>.
>
> Now let φ be the angle AP<i>a</i> between the original direction and the direction after impact, then APN = ½φ, and <i>r</i> = <i>s</i> sin ½φ, and the probability becomes
>
> ½ sin φ <i>d</i>φ.
>
> The area of a spherical zone between the angles of polar distance φ and φ + <i>d</i>φ is
>
> 2π sin φ <i>d</i>φ;
>
> therefore if ω be any small area on the surface of a sphere, radius unity, the probability of the direction of rebound passing through this area is
>
> ω/4π;
>
> so that the probability is independent of φ, that is, all directions of rebound are equally likely.

衝突が起こるためには、一方の球の運動の線が、もう一方の球の中心から、二つの半径の和より小さい距離の所を通らなければならない。つまり、その線は、もう一方の球の中心を中心とし、二つの球の半径の和を半径（<i>s</i>）とする円を通らなければならない。この円の中では、どの位置も同じく確からしい（equally probable）。したがって、中心からの距離が <i>r</i> と <i>r</i> + <i>dr</i> のあいだにある確率は

2・<i>r</i>・<i>dr</i>/<i>s</i><sup>2</sup>

である。ここで、もとの向きと衝突の後の向きとのなす角 AP<i>a</i> を φ とすると、APN = ½φ、<i>r</i> = <i>s</i> sin ½φ であり、確率は

½・sin φ・<i>d</i>φ

になる。極からの角距離が φ と φ + <i>d</i>φ のあいだにある球の帯の面積は

2π・sin φ・<i>d</i>φ

である。したがって、ω を半径 1 の球の表面の上の任意の小さな面積とすると、はね返りの向きがこの面積を通る確率は

ω/4π

である。よって、この確率は φ によらない。つまり、はね返りのどの向きも同じく起こりやすい。

### ¶10　19 巻 p.21

> Prop. III. Given the direction and magnitude of the velocities of two spheres before impact, and the line of centres at impact; to find the velocities after impact.

命題 III　二つの球の衝突の前の速度の向きと大きさ、および衝突のときの中心を結ぶ線が与えられている。衝突の後の速度を求めること。

### ¶11　19 巻 p.21

> Let O A, O B represent the velocities before impact, so that if there had been no action between the bodies they would have been at A and B at the end of a second. Join A B, and let G be their centre of gravity, the position of which is not affected by their mutual action. Draw G N parallel to the line of centres at impact (not necessarily in the plane A O B). Draw <i>a</i> G <i>b</i> in the [p.22] plane A G N, making N G <i>a</i> = N G A, and G <i>a</i> = G A and G <i>b</i> = G B; then by Prop. I. G <i>a</i> and G <i>b</i> will be the velocities relative to G; and compounding these with O G, we have O <i>a</i> and O <i>b</i> for the true velocities after impact.

O A、O B が衝突の前の速度を表すとする。つまり、物体のあいだに作用がなかったなら、二つの物体は 1 秒の終わりに A と B にあったはずである。A B を結び、G をそれらの重心（centre of gravity）とする。重心の位置は、物体どうしの作用によって変わらない。G N を衝突のときの中心を結ぶ線に平行に引く（平面 A O B の中にあるとは限らない）。平面 A G N の中に <i>a</i> G <i>b</i> を、N G <i>a</i> = N G A、G <i>a</i> = G A、G <i>b</i> = G B となるように引く。すると命題 I によって、G <i>a</i> と G <i>b</i> が G に対する相対の速度になる。これらを O G と合成すれば、衝突の後の本当の速度として O <i>a</i> と O <i>b</i> が得られる。

訳注：誌面のこの所に図がある（点 O から引いた速度 O A・O B、重心 G、G を中心とする円、線 G N と <i>a</i> G <i>b</i> を示す線の図）。

### ¶12　19 巻 p.22

> By Prop. II. all directions of the line <i>a</i> G <i>b</i> are equally probable. It appears therefore that the velocity after impact is compounded of the velocity of the centre of gravity, and of a velocity equal to the velocity of the sphere relative to the centre of gravity, which may with equal probability be in any direction whatever.

命題 II によって、線 <i>a</i> G <i>b</i> のすべての向きは同じく確からしい。したがって、衝突の後の速度は、重心の速度と、球の重心に対する相対の速度に等しい速度とを合成したものであり、後の方の速度はどの向きにも同じ確率で向きうる、ということになる。

### ¶13　19 巻 p.22

> If a great many equal spherical particles were in motion in a perfectly elastic vessel, collisions would take place among the particles, and their velocities would be altered at every collision; so that after a certain time the *vis viva* will be divided among the particles according to some regular law, the average number of particles whose velocity lies between certain limits being ascertainable, though the velocity of each particle changes at every collision.

もし、非常に多くの等しい球形の粒子が、完全に弾性のある容器の中で運動しているなら、粒子どうしのあいだで衝突が起こり、その速度は衝突のたびに変わるだろう。そのため、ある時間の後には、活力は何かの規則的な法則に従って粒子のあいだに分けられる。各粒子の速度は衝突のたびに変わるけれども、速度がある範囲のあいだにある粒子の平均の（average）数は確かめることができる。

### ¶14　19 巻 p.22

> Prop. IV. To find the average number of particles whose velocities lie between given limits, after a great number of collisions among a great number of equal particles.

命題 IV　非常に多くの等しい粒子のあいだで非常に多くの衝突が起こった後に、速度が与えられた範囲のあいだにある粒子の平均の数を求めること。

### ¶15　19 巻 p.22

> Let N be the whole number of particles. Let <i>x</i>, <i>y</i>, <i>z</i> be the components of the velocity of each particle in three rectangular directions, and let the number of particles for which <i>x</i> lies between <i>x</i> and <i>x</i> + <i>dx</i> be N<i>f</i>(<i>x</i>)<i>dx</i>, where <i>f</i>(<i>x</i>) is a function of <i>x</i> to be determined.

N を粒子の全体の数とする。<i>x</i>、<i>y</i>、<i>z</i> を、互いに直角な三つの向きについての各粒子の速度の成分とし、<i>x</i> が <i>x</i> と <i>x</i> + <i>dx</i> のあいだにある粒子の数を N<i>f</i>(<i>x</i>)<i>dx</i> とする。ここで <i>f</i>(<i>x</i>) は、これから決める <i>x</i> の関数である。

### ¶16　19 巻 p.22

> The number of particles for which <i>y</i> lies between <i>y</i> and <i>y</i> + <i>dy</i> will be N<i>f</i>(<i>y</i>)<i>dy</i>; and the number for which <i>z</i> lies between <i>z</i> and <i>z</i> + <i>dz</i> will be N<i>f</i>(<i>z</i>)<i>dz</i>, where <i>f</i> always stands for the same function.

<i>y</i> が <i>y</i> と <i>y</i> + <i>dy</i> のあいだにある粒子の数は N<i>f</i>(<i>y</i>)<i>dy</i> になり、<i>z</i> が <i>z</i> と <i>z</i> + <i>dz</i> のあいだにある粒子の数は N<i>f</i>(<i>z</i>)<i>dz</i> になる。ここで <i>f</i> はいつも同じ関数を表す。

### ¶17　19 巻 p.22

> Now the existence of the velocity <i>x</i> does not in any way affect that of the velocities <i>y</i> or <i>z</i>, since these are all at right angles to each other and independent, so that the number of particles whose velocity lies between <i>x</i> and <i>x</i> + <i>dx</i>, and also between <i>y</i> and <i>y</i> + <i>dy</i>, and also between <i>z</i> and <i>z</i> + <i>dz</i>, is
>
> N<i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>)<i>f</i>(<i>z</i>)<i>dx dy dz</i>.
>
> If we suppose the N particles to start from the origin at the same instant, then this will be the number in the element of volume (<i>dx dy dz</i>) after unit of time, and the number referred to unit of volume will be
>
> N<i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>)<i>f</i>(<i>z</i>).
>
> But the directions of the coordinates are perfectly arbitrary, and therefore this number must depend on the distance from the origin alone, that is
>
> <i>f</i>(<i>x</i>)<i>f</i>(<i>y</i>)<i>f</i>(<i>z</i>) = φ(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>).
>
> [p.23] Solving this functional equation, we find
>
> <i>f</i>(<i>x</i>) = C<i>e</i><sup>A<i>x</i><sup>2</sup></sup>,　φ(<i>r</i><sup>2</sup>) = C<sup>3</sup><i>e</i><sup>A<i>r</i><sup>2</sup></sup>.

ところで、速度 <i>x</i> があることは、速度 <i>y</i> や <i>z</i> があることに少しも影響しない。これらはどれも互いに直角で、独立だからである。したがって、速度が <i>x</i> と <i>x</i> + <i>dx</i> のあいだにあり、同時に <i>y</i> と <i>y</i> + <i>dy</i> のあいだにあり、同時に <i>z</i> と <i>z</i> + <i>dz</i> のあいだにある粒子の数は

N・<i>f</i>(<i>x</i>)・<i>f</i>(<i>y</i>)・<i>f</i>(<i>z</i>)・<i>dx</i>・<i>dy</i>・<i>dz</i>

である。N 個の粒子が同じ瞬間に原点から出発するとすれば、これは単位の時間の後に体積の要素（element of volume）(<i>dx dy dz</i>) の中にある数になり、単位の体積あたりの数は

N・<i>f</i>(<i>x</i>)・<i>f</i>(<i>y</i>)・<i>f</i>(<i>z</i>)

になる。しかし、座標の向きはまったく任意であるから、この数は原点からの距離だけによるのでなければならない。つまり

<i>f</i>(<i>x</i>)・<i>f</i>(<i>y</i>)・<i>f</i>(<i>z</i>) = φ(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>)

である。この関数方程式を解くと

<i>f</i>(<i>x</i>) = C・<i>e</i><sup>A<i>x</i><sup>2</sup></sup>，　φ(<i>r</i><sup>2</sup>) = C<sup>3</sup>・<i>e</i><sup>A<i>r</i><sup>2</sup></sup>

が得られる。

訳注：ここでの「速度 <i>x</i>」は速度の <i>x</i> 成分を指す。<i>r</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>z</i><sup>2</sup>。「If we suppose…」「But the directions…」「Solving…」の行は誌面で字下げが無く、式を挟んで同じ段落が続くものとした。

### ¶18　19 巻 p.23

> If we make A positive, the number of particles will increase with the velocity, and we should find the whole number of particles infinite. We therefore make A negative and equal to −1/α<sup>2</sup>, so that the number between <i>x</i> and <i>x</i> + <i>dx</i> is
>
> NC<i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup><i>dx</i>.
>
> Integrating from <i>x</i> = −∞ to <i>x</i> = +∞, we find the whole number of particles,
>
> NC√π α = N,　∴ C = 1/(α√π),
>
> <i>f</i>(<i>x</i>) is therefore
>
> (1/(α√π)) <i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>.
>
> Whence we may draw the following conclusions:—

A を正にすると、粒子の数は速度とともに増え、粒子の全体の数が無限になってしまう。そこで A を負にし、−1/α<sup>2</sup> に等しくおく。すると、<i>x</i> と <i>x</i> + <i>dx</i> のあいだにある数は

N・C・<i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>・<i>dx</i>

になる。<i>x</i> = −∞ から <i>x</i> = +∞ まで積分すると、粒子の全体の数が得られ

N・C・√π・α = N，　∴ C = 1/(α√π)

となる。したがって <i>f</i>(<i>x</i>) は

(1/(α√π))・<i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>

である。ここから次の結論を引き出すことができる。

訳注：「Whence…」の行は誌面で字下げが無く、この段落の続きとした。

### ¶19　19 巻 p.23

> 1st. The number of particles whose velocity, resolved in a certain direction, lies between <i>x</i> and <i>x</i> + <i>dx</i> is
>
> N (1/(α√π)) <i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup><i>dx</i>. (1)

第一に、ある向きに分けた速度が <i>x</i> と <i>x</i> + <i>dx</i> のあいだにある粒子の数は

N・(1/(α√π))・<i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>・<i>dx</i>　(1)

である。

### ¶20　19 巻 p.23

> 2nd. The number whose actual velocity lies between <i>v</i> and <i>v</i> + <i>dv</i> is
>
> N (4/(α<sup>3</sup>√π)) <i>v</i><sup>2</sup><i>e</i><sup>−<i>v</i><sup>2</sup>/α<sup>2</sup></sup><i>dv</i>. (2)

第二に、実際の速度が <i>v</i> と <i>v</i> + <i>dv</i> のあいだにある粒子の数は

N・(4/(α<sup>3</sup>√π))・<i>v</i><sup>2</sup>・<i>e</i><sup>−<i>v</i><sup>2</sup>/α<sup>2</sup></sup>・<i>dv</i>　(2)

である。

訳注：「actual velocity」は、成分に分けない速度そのものの大きさを指す。

### ¶21　19 巻 p.23

> 3rd. To find the mean value of <i>v</i>, add the velocities of all the particles together and divide by the number of particles; the result is
>
> mean velocity = 2α/√π. (3)

第三に、<i>v</i> の平均の（mean）値を求めるには、すべての粒子の速度を足し合わせ、粒子の数で割る。その結果は

平均の速度 = 2α/√π　(3)

である。

### ¶22　19 巻 p.23

> 4th. To find the mean value of <i>v</i><sup>2</sup>, add all the values together and divide by N,
>
> mean value of <i>v</i><sup>2</sup> = (3/2)α<sup>2</sup>. (4)
>
> This is greater than the square of the mean velocity, as it ought to be.

第四に、<i>v</i><sup>2</sup> の平均の値を求めるには、すべての値を足し合わせて N で割る。

<i>v</i><sup>2</sup> の平均の値 = (3/2)・α<sup>2</sup>　(4)

これは、当然そうあるべきように、平均の速度の二乗より大きい。

### ¶23　19 巻 p.23–24

> It appears from this proposition that the velocities are distributed among the particles according to the same law as the errors are distributed among the observations in the theory of the "method of least squares." The velocities range from 0 to ∞, but the number of those having great velocities is comparatively small. In addition to these velocities, which are in all directions equally, there may be a general motion of translation [p.24] of the entire system of particles which must be compounded with the motion of the particles relatively to one another. We may call the one the motion of translation, and the other the motion of agitation.

この命題から、速度は、「最小二乗法（method of least squares）」の理論で誤差が観測のあいだに分布するのと同じ法則に従って、粒子のあいだに分布していることがわかる。速度は 0 から ∞ までにわたるが、大きな速度を持つものの数は比較的少ない。どの向きにも等しくあるこれらの速度のほかに、全体としての並進の運動（motion of translation）があってもよい。これは粒子の系全体の運動で、粒子どうしの相対的な運動と合成しなければならない。前者を並進の運動（motion of translation）、後者を揺動の運動（motion of agitation）と呼んでよい。

### ¶24　19 巻 p.24

> Prop. V. Two systems of particles move each according to the law stated in Prop. IV.; to find the number of pairs of particles, one of each system, whose relative velocity lies between given limits.

命題 V　二つの粒子の系が、それぞれ命題 IV で述べた法則に従って動く。各々の系から一つずつ取った粒子の対のうち、相対速度が与えられた範囲にあるものの数を求めること。

### ¶25　19 巻 p.24

> Let there be N particles of the first system, and N′ of the second, then NN′ is the whole number of such pairs. Let us consider the velocities in the direction of <i>x</i> only; then by Prop. IV. the number of the first kind, whose velocities are between <i>x</i> and <i>x</i>+<i>dx</i>, is
>
> N (1/(α√π)) ε<sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup><i>dx</i>,
>
> The number of the second kind, whose velocity is between <i>x</i>+<i>y</i> and <i>x</i>+<i>y</i>+<i>dy</i>, is
>
> N′ (1/(β√π)) ε<sup>−(<i>x</i>+<i>y</i>)<sup>2</sup>/β<sup>2</sup></sup><i>dy</i>,
>
> where β is the value of α for the second system.

第一の系の粒子が N 個、第二の系の粒子が N′ 個あるとすると、そのような対の総数は NN′ である。<i>x</i> の方向の速度だけを考えよう。すると命題 IV により、第一の種類の粒子のうち速度が <i>x</i> と <i>x</i>+<i>dx</i> の間にあるものの数は

N (1/(α√π)) <i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup><i>dx</i>

である。第二の種類の粒子のうち速度が <i>x</i>+<i>y</i> と <i>x</i>+<i>y</i>+<i>dy</i> の間にあるものの数は

N′ (1/(β√π)) <i>e</i><sup>−(<i>x</i>+<i>y</i>)<sup>2</sup>/β<sup>2</sup></sup><i>dy</i>

である。ここで β は第二の系での α の値である。

訳注：誌面ではこの頁の指数の底が ε と組まれている（この段と次の段の式）。原文は誌面のとおり ε とし、訳では <i>e</i> にそろえた。第一の式の終わりは誌面でコンマで、そのあと新しい行が大文字の The で始まる。

### ¶26　19 巻 p.24

> The number of pairs which fulfil both conditions is
>
> NN′ (1/(αβπ)) ε<sup>−(<i>x</i><sup>2</sup>/α<sup>2</sup> + (<i>x</i>+<i>y</i>)<sup>2</sup>/β<sup>2</sup>)</sup><i>dx dy</i>.
>
> Now <i>x</i> may have any value from −∞ to +∞ consistently with the difference of velocities being between <i>y</i> and <i>y</i>+<i>dy</i>; therefore integrating between these limits, we find
>
> NN′ (1/(√(α<sup>2</sup>+β<sup>2</sup>) √π)) ε<sup>−<i>y</i><sup>2</sup>/(α<sup>2</sup>+β<sup>2</sup>)</sup><i>dy</i> (5)
>
> for the whole number of pairs whose difference of velocity lies between <i>y</i> and <i>y</i>+<i>dy</i>.

両方の条件を満たす対の数は

NN′ (1/(αβπ)) <i>e</i><sup>−(<i>x</i><sup>2</sup>/α<sup>2</sup> + (<i>x</i>+<i>y</i>)<sup>2</sup>/β<sup>2</sup>)</sup><i>dx dy</i>

である。ところで、速度の差が <i>y</i> と <i>y</i>+<i>dy</i> の間にあることと両立しながら、<i>x</i> は −∞ から +∞ までのどの値をとってもよい。そこでこの範囲で積分すると、速度の差が <i>y</i> と <i>y</i>+<i>dy</i> の間にある対の総数として

NN′ (1/(√(α<sup>2</sup>+β<sup>2</sup>) √π)) <i>e</i><sup>−<i>y</i><sup>2</sup>/(α<sup>2</sup>+β<sup>2</sup>)</sup><i>dy</i>　(5)

を得る。

### ¶27　19 巻 p.24

> This expression, which is of the same form with (1) if we put NN′ for N, α<sup>2</sup>+β<sup>2</sup> for α<sup>2</sup>, and <i>y</i> for <i>x</i>, shows that the distribution of relative velocities is regulated by the same law as that of the velocities themselves, and that the mean relative velocity is the square root of the sum of the squares of the mean velocities of the two systems.

この式は、N の代わりに NN′、α<sup>2</sup> の代わりに α<sup>2</sup>+β<sup>2</sup>、<i>x</i> の代わりに <i>y</i> を置けば (1) と同じ形になる。このことから、相対速度の分布は速度そのものの分布と同じ法則に従うこと、そして平均の相対速度は二つの系の平均の速度の二乗の和の平方根であることがわかる。

### ¶28　19 巻 p.24

> Since the direction of motion of every particle in one of the systems may be reversed without changing the distribution of velocities, it follows that the velocities compounded of the velocities of two particles, one in each system, are distributed according to the same formula (5) as the relative velocities.

一方の系のすべての粒子の運動の向きを逆にしても速度の分布は変わらないから、各々の系から一つずつ取った二つの粒子の速度を合成した速度も、相対速度と同じ式 (5) に従って分布することになる。

### ¶29　19 巻 p.24–25

> Prop. VI. Two systems of particles move in the same vessel; [p.25] to prove that the mean *vis viva* of each particle will become the same in the two systems.

命題 VI　二つの粒子の系が同じ容器の中を動く。一つの粒子の平均の活力（*vis viva*）が、二つの系で等しくなることを証明すること。

### ¶30　19 巻 p.25

> Let P be the mass of each particle of the first system, Q that of each particle of the second. Let <i>p</i>, <i>q</i> be the mean velocities in the two systems before impact, and let <i>p</i>′, <i>q</i>′ be the mean velocities after one impact. Let A O = <i>p</i> and O B = <i>q</i>, and let A O B be a right angle; then, by Prop. V., A B will be the mean relative velocity, O G will be the mean velocity of centre of gravity; and drawing <i>a</i> G <i>b</i> at right angles to O G, and making <i>a</i> G = A G and <i>b</i> G = B G, then O <i>a</i> will be the mean velocity of P after impact, compounded of O G and G <i>a</i>, and O <i>b</i> will be that of Q after impact.

第一の系の各粒子の質量を P、第二の系の各粒子の質量を Q とする。衝突の前の二つの系の平均の速度を <i>p</i>、<i>q</i> とし、一回の衝突の後の平均の速度を <i>p</i>′、<i>q</i>′ とする。A O = <i>p</i>、O B = <i>q</i> とし、角 A O B を直角とする。すると命題 V により、A B は平均の相対速度になり、O G は重心の平均の速度になる。O G に直角に <i>a</i> G <i>b</i> を引き、<i>a</i> G = A G、<i>b</i> G = B G とすると、O <i>a</i> は O G と G <i>a</i> を合成した、衝突の後の P の平均の速度になり、O <i>b</i> は衝突の後の Q の平均の速度になる。

訳注：誌面のこの所の右に図がある（O から直角に引いた O A・O B、A B 上の点 G、O G に直角な線 <i>a</i> G <i>b</i> を示す線の図）。

### ¶31　19 巻 p.25

> Now
>
> A B = √(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>), A G = (Q/(P+Q))√(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>), B G = (P/(P+Q))√(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>),
>
> O G = √(P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q),
>
> therefore
>
> <i>p</i>′ = O <i>a</i> = √(Q<sup>2</sup>(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)+P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q)
>
> and
>
> <i>q</i>′ = O <i>b</i> = √(P<sup>2</sup>(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)+P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q),
>
> and
>
> P<i>p</i>′<sup>2</sup>−Q<i>q</i>′<sup>2</sup> = ((P−Q)/(P+Q))<sup>2</sup>(P<i>p</i><sup>2</sup>−Q<i>q</i><sup>2</sup>). (6)

ここで

A B = √(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)、A G = (Q/(P+Q))√(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)、B G = (P/(P+Q))√(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)

O G = √(P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q)

である。したがって

<i>p</i>′ = O <i>a</i> = √(Q<sup>2</sup>(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)+P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q)

であり、

<i>q</i>′ = O <i>b</i> = √(P<sup>2</sup>(<i>p</i><sup>2</sup>+<i>q</i><sup>2</sup>)+P<sup>2</sup><i>p</i><sup>2</sup>+Q<sup>2</sup><i>q</i><sup>2</sup>)/(P+Q)

であり、

P<i>p</i>′<sup>2</sup>−Q<i>q</i>′<sup>2</sup> = ((P−Q)/(P+Q))<sup>2</sup>・(P<i>p</i><sup>2</sup>−Q<i>q</i><sup>2</sup>)　(6)

である。

### ¶32　19 巻 p.25

> It appears therefore that the quantity P<i>p</i><sup>2</sup>−Q<i>q</i><sup>2</sup> is diminished at every impact in the same ratio, so that after many impacts it will vanish, and then
>
> P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup>.
>
> Now the mean *vis viva* is (3/2)Pα<sup>2</sup> = (3π/8)P<i>p</i><sup>2</sup> for P, and (3π/8)Q<i>q</i><sup>2</sup> for Q; and it is manifest that these quantities will be equal when P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup>.

したがって、量 P<i>p</i><sup>2</sup>−Q<i>q</i><sup>2</sup> は衝突のたびに同じ比で小さくなり、多くの衝突の後には消えて、

P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup>

となる。ところで平均の活力は、P については (3/2)Pα<sup>2</sup> = (3π/8)P<i>p</i><sup>2</sup>、Q については (3π/8)Q<i>q</i><sup>2</sup> である。P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup> のときにこれらの量が等しくなることは明らかである。

### ¶33　19 巻 p.25

> If any number of different kinds of particles, having masses P, Q, R, and velocities <i>p</i>, <i>q</i>, <i>r</i> respectively, move in the same vessel, then after many impacts
>
> P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup> = R<i>r</i><sup>2</sup>, &c. (7)

質量がそれぞれ P、Q、R、速度がそれぞれ <i>p</i>、<i>q</i>、<i>r</i> の、いくつでもの異なる種類の粒子が同じ容器の中を動くなら、多くの衝突の後には

P<i>p</i><sup>2</sup> = Q<i>q</i><sup>2</sup> = R<i>r</i><sup>2</sup>　など　(7)

となる。

### ¶34　19 巻 p.25–26

> Prop. VII. A particle moves with velocity <i>r</i> relatively to a number of particles of which there are N in unit of volume; to [p.26] find the number of these which it approaches within a distance <i>s</i> in unit of time.

命題 VII　一つの粒子が、単位の体積に N 個ある粒子の群に対して、相対速度 <i>r</i> で動く。単位の時間に、この粒子が距離 <i>s</i> 以内に近づく粒子の数を求めること。

### ¶35　19 巻 p.26

> If we describe a tubular surface of which the axis is the path of the particle, and the radius the distance <i>s</i>, the content of this surface generated in unit of time will be π<i>rs</i><sup>2</sup>, and the number of particles included in it will be
>
> Nπ<i>rs</i><sup>2</sup>, (8)
>
> which is the number of particles to which the moving particle approaches within a distance <i>s</i>.

粒子の道筋を軸とし、距離 <i>s</i> を半径とする管の形の面を描くと、単位の時間にこの面が掃く内容（体積）は π<i>rs</i><sup>2</sup> であり、その中に含まれる粒子の数は

Nπ<i>rs</i><sup>2</sup>　(8)

である。これが、動く粒子が距離 <i>s</i> 以内に近づく粒子の数である。

訳注：誌面では「particle,」の後ろに小さな汚れ（’）がある。本文ではない。

### ¶36　19 巻 p.26

> Prop. VIII. A particle moves with velocity <i>v</i> in a system moving according to the law of Prop. IV.; to find the number of particles which have a velocity relative to the moving particle between <i>r</i> and <i>r</i>+<i>dr</i>.

命題 VIII　一つの粒子が、命題 IV の法則に従って動く系の中を速度 <i>v</i> で動く。この動く粒子に対する相対速度が <i>r</i> と <i>r</i>+<i>dr</i> の間にある粒子の数を求めること。

### ¶37　19 巻 p.26

> Let <i>u</i> be the actual velocity of a particle of the system, <i>v</i> that of the original particle, and <i>r</i> their relative velocity, and θ the angle between <i>v</i> and <i>r</i>, then
>
> <i>u</i><sup>2</sup> = <i>v</i><sup>2</sup>+<i>r</i><sup>2</sup>−2<i>vr</i> cos θ.
>
> If we suppose, as in Prop. IV., all the particles to start from the origin at once, then after unit of time the "density" or number of particles to unit of volume at distance <i>u</i> will be
>
> N (1/(α<sup>3</sup>π<sup>3/2</sup>)) <i>e</i><sup>−<i>u</i><sup>2</sup>/α<sup>2</sup></sup>.
>
> From this we have to deduce the number of particles in a shell whose centre is at distance <i>v</i>, radius = <i>r</i>, and thickness = <i>dr</i>,
>
> N (1/(α√π)) (<i>r</i>/<i>v</i>) {<i>e</i><sup>−(<i>r</i>−<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>r</i>+<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup>} <i>dr</i>, (9)
>
> which is the number required.

系の一つの粒子の実際の速度を <i>u</i>、もとの粒子の速度を <i>v</i>、両者の相対速度を <i>r</i>、<i>v</i> と <i>r</i> のなす角を θ とすると

<i>u</i><sup>2</sup> = <i>v</i><sup>2</sup>+<i>r</i><sup>2</sup>−2<i>vr</i> cos θ

である。命題 IV のように、すべての粒子が同時に原点から出発するとすれば、単位の時間の後に、距離 <i>u</i> の所の「密度」、すなわち単位の体積あたりの粒子の数は

N (1/(α<sup>3</sup>π<sup>3/2</sup>))・<i>e</i><sup>−<i>u</i><sup>2</sup>/α<sup>2</sup></sup>

である。ここから、中心が距離 <i>v</i> にあり、半径が <i>r</i>、厚さが <i>dr</i> の殻の中にある粒子の数を導かなければならない。それは

N (1/(α√π)) (<i>r</i>/<i>v</i>) {<i>e</i><sup>−(<i>r</i>−<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>r</i>+<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup>} <i>dr</i>　(9)

であり、これが求める数である。

### ¶38　19 巻 p.26

> *Cor.* It is evident that if we integrate this expression from <i>r</i> = 0 to <i>r</i> = ∞, we ought to get the whole number of particles = N, whence the following mathematical result,
>
> ∫<sub>0</sub><sup>∞</sup> <i>dx</i>.<i>x</i>(<i>e</i><sup>−(<i>x</i>−<i>a</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>x</i>+<i>a</i>)<sup>2</sup>/α<sup>2</sup></sup>) = √π <i>a</i>α. (10)

*系*　この式を <i>r</i> = 0 から <i>r</i> = ∞ まで積分すれば、粒子の総数 N が得られるはずであることは明らかである。ここから次の数学の結果が出る。

∫<sub>0</sub><sup>∞</sup> <i>dx</i>・<i>x</i>(<i>e</i><sup>−(<i>x</i>−<i>a</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>x</i>+<i>a</i>)<sup>2</sup>/α<sup>2</sup></sup>) = √π <i>a</i>α　(10)

訳注：Cor.（Corollary）は系（命題から直ちに出る結果）。式 (10) では、指数の分子の <i>a</i>（斜体のラテン文字）と分母の α を誌面で別の字として組んでいる。

### ¶39　19 巻 p.26

> Prop. IX. Two sets of particles move as in Prop. V.; to find the number of pairs which approach within a distance <i>s</i> in unit of time.

命題 IX　二組の粒子が命題 V のように動く。単位の時間に距離 <i>s</i> 以内に近づく対の数を求めること。

### ¶40　19 巻 p.26–27

> The number of the second kind which have a velocity between <i>v</i> and <i>v</i>+<i>dv</i> is
>
> N′ (4/(β<sup>3</sup>√π)) <i>v</i><sup>2</sup><i>e</i><sup>−<i>v</i><sup>2</sup>/β<sup>2</sup></sup><i>dv</i> = <i>n</i>′.
>
> The number of the first kind whose velocity relative to these is [p.27] between <i>r</i> and <i>r</i>+<i>dr</i> is
>
> N (1/(α√π)) (<i>r</i>/<i>v</i>)(<i>e</i><sup>−(<i>r</i>−<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>r</i>+<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup>)<i>dr</i> = <i>n</i>,
>
> and the number of pairs which approach within distance <i>s</i> in unit of time is
>
> <i>n n</i>′π<i>rs</i><sup>2</sup>,
>
> = NN′ (4/(αβ<sup>3</sup>)) <i>s</i><sup>2</sup><i>r</i><sup>2</sup><i>v e</i><sup>−<i>v</i><sup>2</sup>/β<sup>2</sup></sup>{<i>e</i><sup>−(<i>v</i>−<i>r</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>v</i>+<i>r</i>)<sup>2</sup>/α<sup>2</sup></sup>}<i>dr dv</i>.

第二の種類の粒子のうち、速度が <i>v</i> と <i>v</i>+<i>dv</i> の間にあるものの数は

N′ (4/(β<sup>3</sup>√π))・<i>v</i><sup>2</sup><i>e</i><sup>−<i>v</i><sup>2</sup>/β<sup>2</sup></sup><i>dv</i> = <i>n</i>′

である。第一の種類の粒子のうち、これらに対する相対速度が <i>r</i> と <i>r</i>+<i>dr</i> の間にあるものの数は

N (1/(α√π)) (<i>r</i>/<i>v</i>)(<i>e</i><sup>−(<i>r</i>−<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>r</i>+<i>v</i>)<sup>2</sup>/α<sup>2</sup></sup>)<i>dr</i> = <i>n</i>

であり、単位の時間に距離 <i>s</i> 以内に近づく対の数は

<i>n n</i>′π<i>rs</i><sup>2</sup>

= NN′ (4/(αβ<sup>3</sup>))・<i>s</i><sup>2</sup><i>r</i><sup>2</sup><i>v e</i><sup>−<i>v</i><sup>2</sup>/β<sup>2</sup></sup>{<i>e</i><sup>−(<i>v</i>−<i>r</i>)<sup>2</sup>/α<sup>2</sup></sup> − <i>e</i><sup>−(<i>v</i>+<i>r</i>)<sup>2</sup>/α<sup>2</sup></sup>}<i>dr dv</i>

である。

### ¶41　19 巻 p.27

> By the last proposition we are able to integrate with respect to <i>v</i>, and get
>
> NN′ (4√π/(α<sup>2</sup>+β<sup>2</sup>)<sup>3/2</sup>) <i>s</i><sup>2</sup><i>r</i><sup>3</sup><i>e</i><sup>−<i>r</i><sup>2</sup>/(α<sup>2</sup>+β<sup>2</sup>)</sup><i>dr</i>.
>
> Integrating this again from <i>r</i> = 0 to <i>r</i> = ∞,
>
> 2NN′√π √(α<sup>2</sup>+β<sup>2</sup>) <i>s</i><sup>2</sup> (11)
>
> is the number of collisions in unit of time which take place in unit of volume between particles of different kinds, <i>s</i> being the distance of centres at collision. The number of collisions between two particles of the first kind, <i>s</i><sub>1</sub> being the striking distance, is
>
> 2N<sup>2</sup>√π √(2α<sup>2</sup>) <i>s</i><sub>1</sub><sup>2</sup>;
>
> and for the second system it is
>
> 2N′<sup>2</sup>√π √(2β<sup>2</sup>) <i>s</i><sub>2</sub><sup>2</sup>.

前の命題によって <i>v</i> について積分することができ、

NN′ (4√π/(α<sup>2</sup>+β<sup>2</sup>)<sup>3/2</sup>)・<i>s</i><sup>2</sup><i>r</i><sup>3</sup><i>e</i><sup>−<i>r</i><sup>2</sup>/(α<sup>2</sup>+β<sup>2</sup>)</sup><i>dr</i>

を得る。これをさらに <i>r</i> = 0 から <i>r</i> = ∞ まで積分した

2NN′√π・√(α<sup>2</sup>+β<sup>2</sup>)・<i>s</i><sup>2</sup>　(11)

が、単位の体積の中で単位の時間に異なる種類の粒子のあいだで起こる衝突の数である。ここで <i>s</i> は衝突のときの中心どうしの距離である。第一の種類の二つの粒子のあいだの衝突の数は、衝突の距離（striking distance）を <i>s</i><sub>1</sub> として

2N<sup>2</sup>√π・√(2α<sup>2</sup>)・<i>s</i><sub>1</sub><sup>2</sup>

であり、第二の系については

2N′<sup>2</sup>√π・√(2β<sup>2</sup>)・<i>s</i><sub>2</sub><sup>2</sup>

である。

訳注：「前の命題」は命題 VIII の系の式 (10) を指すと読める。

### ¶42　19 巻 p.27

> The mean velocities in the two systems are 2α/√π and 2β/√π; so that if <i>l</i><sub>1</sub> and <i>l</i><sub>2</sub> be the mean distances travelled by particles of the first and second systems between each collision, then
>
> 1/<i>l</i><sub>1</sub> = πN<sub>1</sub>√2 <i>s</i><sub>1</sub><sup>2</sup> + πN<sub>2</sub>(√(α<sup>2</sup>+β<sup>2</sup>)/α)<i>s</i><sup>2</sup>,
>
> 1/<i>l</i><sub>2</sub> = πN<sub>1</sub>(√(α<sup>2</sup>+β<sup>2</sup>)/β)<i>s</i><sup>2</sup> + πN<sub>2</sub>√2 <i>s</i><sub>2</sub><sup>2</sup>.

二つの系の平均の速度は 2α/√π と 2β/√π である。したがって、第一と第二の系の粒子が一回の衝突から次の衝突までに進む平均の距離を <i>l</i><sub>1</sub>、<i>l</i><sub>2</sub> とすると

1/<i>l</i><sub>1</sub> = πN<sub>1</sub>√2・<i>s</i><sub>1</sub><sup>2</sup> + πN<sub>2</sub>(√(α<sup>2</sup>+β<sup>2</sup>)/α)<i>s</i><sup>2</sup>

1/<i>l</i><sub>2</sub> = πN<sub>1</sub>(√(α<sup>2</sup>+β<sup>2</sup>)/β)<i>s</i><sup>2</sup> + πN<sub>2</sub>√2・<i>s</i><sub>2</sub><sup>2</sup>

である。

訳注：この二つの式では、誌面は二つの系の粒子の数を、それまでの N、N′ でなく N<sub>1</sub>、N<sub>2</sub> と書いている。誌面のとおりに置いた。

### ¶43　19 巻 p.27

> Prop. X. To find the probability of a particle reaching a given distance before striking any other.

命題 X　一つの粒子が、ほかの粒子に当たる前に与えられた距離に達する確率を求めること。

### ¶44　19 巻 p.27–28

> Let us suppose that the probability of a particle being stopped while passing through a distance <i>dx</i>, is α<i>dx</i>; that is, if N particles arrived at a distance <i>x</i>, Nα<i>dx</i> of them would be stopped before getting to a distance <i>x</i>+<i>dx</i>. Putting this mathematically,
>
> <i>d</i>N/<i>dx</i> = −Nα, or N = C<i>e</i><sup>−α<i>x</i></sup>.
>
> [p.28] Putting N = 1 when <i>x</i> = 0, we find <i>e</i><sup>−α<i>x</i></sup> for the probability of a particle not striking another before it reaches a distance <i>x</i>.

粒子が距離 <i>dx</i> を通るあいだに止められる確率を α<i>dx</i> としよう。つまり、N 個の粒子が距離 <i>x</i> に着いたとすると、そのうち Nα<i>dx</i> 個は距離 <i>x</i>+<i>dx</i> に着く前に止められる。これを式で書くと

<i>d</i>N/<i>dx</i> = −Nα、すなわち N = C<i>e</i><sup>−α<i>x</i></sup>

である。<i>x</i> = 0 のとき N = 1 とおくと、粒子が距離 <i>x</i> に達する前にほかの粒子に当たらない確率として <i>e</i><sup>−α<i>x</i></sup> を得る。

訳注：誌面では p.28 の頭の「Putting」は字下げが無く、前の頁の段の続きと読める。

### ¶45　19 巻 p.28

> The *mean distance* travelled by each particle before striking is 1/α = <i>l</i>. The probability of a particle reaching a distance = <i>nl</i> without being struck is <i>e</i><sup>−<i>n</i></sup>. (See a paper by M. Clausius, Philosophical Magazine, February 1859.)

各粒子が当たるまでに進む*平均の距離*（mean distance）は 1/α = <i>l</i> である。粒子が当たらずに距離 <i>nl</i> に達する確率は <i>e</i><sup>−<i>n</i></sup> である。（クラウジウス氏の論文、『フィロソフィカル・マガジン』1859 年 2 月号を見よ。）

### ¶46　19 巻 p.28

> If all the particles are at rest but one, then the value of α is
>
> α = π<i>s</i><sup>2</sup>N,
>
> where <i>s</i> is the distance between the centres at collision, and N is the number of particles in unit of volume. If <i>v</i> be the velocity of the moving particle relatively to the rest, then the number of collisions in unit of time will be
>
> <i>v</i>π<i>s</i><sup>2</sup>N;
>
> and if <i>v</i><sub>1</sub> be the actual velocity, then the number will be <i>v</i><sub>1</sub>α; therefore
>
> α = (<i>v</i>/<i>v</i><sub>1</sub>)π<i>s</i><sup>2</sup>N,
>
> where <i>v</i><sub>1</sub> is the actual velocity of the striking particle, and <i>v</i> its velocity relatively to those it strikes. If <i>v</i><sub>2</sub> be the actual velocity of the other particles, then <i>v</i> = √(<i>v</i><sub>1</sub><sup>2</sup>+<i>v</i><sub>2</sub><sup>2</sup>). If <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub>, then <i>v</i> = √2<i>v</i><sub>1</sub>, and
>
> α = √2π<i>s</i><sup>2</sup>N.

一つを除いてすべての粒子が静止しているなら、α の値は

α = π<i>s</i><sup>2</sup>N

である。ここで <i>s</i> は衝突のときの中心どうしの距離、N は単位の体積の中の粒子の数である。動く粒子のほかの粒子に対する相対速度を <i>v</i> とすると、単位の時間の衝突の数は

<i>v</i>π<i>s</i><sup>2</sup>N

である。また実際の速度を <i>v</i><sub>1</sub> とすると、その数は <i>v</i><sub>1</sub>α である。したがって

α = (<i>v</i>/<i>v</i><sub>1</sub>)π<i>s</i><sup>2</sup>N

である。ここで <i>v</i><sub>1</sub> は当たる粒子の実際の速度、<i>v</i> はそれが当たる粒子に対する相対速度である。ほかの粒子の実際の速度を <i>v</i><sub>2</sub> とすると、<i>v</i> = √(<i>v</i><sub>1</sub><sup>2</sup>+<i>v</i><sub>2</sub><sup>2</sup>) である。<i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> なら <i>v</i> = √2<i>v</i><sub>1</sub> であり、

α = √2π<i>s</i><sup>2</sup>N

となる。

### ¶47　19 巻 p.28

> *Note*.—M. Clausius makes α = (4/3)π<i>s</i><sup>2</sup>N.

*注*　クラウジウス氏は α = (4/3)π<i>s</i><sup>2</sup>N としている。

訳注：この「Note」は誌面の脚注でなく、本文の中の一段である。

### ¶48　19 巻 p.28

> Prop. XI. In a mixture of particles of two different kinds, to find the mean path of each particle.

命題 XI　二つの異なる種類の粒子の混合物の中で、各粒子の平均の道のり（mean path）を求めること。

### ¶49　19 巻 p.28

> Let there be N<sub>1</sub> of the first, and N<sub>2</sub> of the second in unit of volume. Let <i>s</i><sub>1</sub> be the distance of centres for a collision between two particles of the first set, <i>s</i><sub>2</sub> for the second set, and <i>s</i>′ for collision between one of each kind. Let <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub> be the coefficients of velocity, M<sub>1</sub> M<sub>2</sub> the mass of each particle.

単位の体積の中に、第一の種類の粒子が N<sub>1</sub> 個、第二の種類の粒子が N<sub>2</sub> 個あるとする。第一の組の二つの粒子が衝突するときの中心どうしの距離を <i>s</i><sub>1</sub>、第二の組では <i>s</i><sub>2</sub>、それぞれの種類から一つずつの粒子が衝突するときは <i>s</i>′ とする。<i>v</i><sub>1</sub> と <i>v</i><sub>2</sub> を速度の係数、M<sub>1</sub>、M<sub>2</sub> を各粒子の質量とする。

訳注：「速度の係数」（coefficients of velocity）は、命題 IV の分布の式の α に当たる量を指すと読める。

### ¶50　19 巻 p.28–29

> The probability of a particle M<sub>1</sub> not being struck till after reaching a distance <i>x</i><sub>1</sub> by another particle of the same kind is
>
> <i>e</i>−√2π<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub><i>x</i>.
>
> The probability of not being struck by a particle of the other kind in the same distance is
>
> <i>e</i><sup>−√(1+<i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)π<i>s</i>′<sup>2</sup>N<sub>2</sub><i>x</i></sup>.
>
> Therefore the probability of not being struck by any particle before reaching a distance <i>x</i> is
>
> <i>e</i><sup>−π(√2<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub> + √(1+<i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)<i>s</i>′<sup>2</sup>N<sub>2</sub>)<i>x</i></sup>; [p.29] and if <i>l</i><sub>1</sub> be the *mean distance* for a particle of the first kind,
>
> 1/<i>l</i><sub>1</sub> = √2 π<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub> + π√(1 + <i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>) <i>s</i>′<sup>2</sup>N<sub>2</sub>. (12)
>
> Similarly, if <i>l</i><sub>2</sub> be the mean distance for a particle of the second kind,
>
> 1/<i>l</i><sub>2</sub> = √2 π<i>s</i><sub>2</sub><sup>2</sup>N<sub>2</sub> + π√(1 + <i>v</i><sub>1</sub><sup>2</sup>/<i>v</i><sub>2</sub><sup>2</sup>) <i>s</i>′<sup>2</sup>N<sub>1</sub>. (13)
>
> The mean density of the particles of the first kind is N<sub>1</sub>M<sub>1</sub> = ρ<sub>1</sub>, and that of the second N<sub>2</sub>M<sub>2</sub> = ρ<sub>2</sub>. If we put
>
> A = √2 π<i>s</i><sub>1</sub><sup>2</sup>/M<sub>1</sub>,　B = π√(1 + <i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>) <i>s</i>′<sup>2</sup>/M<sub>2</sub>,　C = π√(1 + <i>v</i><sub>1</sub><sup>2</sup>/<i>v</i><sub>2</sub><sup>2</sup>) <i>s</i>′<sup>2</sup>/M<sub>1</sub>,
>
> D = √2 π<i>s</i><sub>2</sub>/M<sub>2</sub>, (14)
>
> 1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub>,　1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sup>2</sup>, (15)
>
> and
>
> B/C = M<sub>1</sub><i>v</i><sub>2</sub>/(M<sub>2</sub><i>v</i><sub>1</sub>) = <i>v</i><sub>2</sub><sup>3</sup>/<i>v</i><sub>1</sub><sup>3</sup>. (16)

粒子 M<sub>1</sub> が、距離 <i>x</i><sub>1</sub> に達した後まで同じ種類のほかの粒子に当たらない確率は

<i>e</i><sup>−√2π<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub><i>x</i></sup>

である。同じ距離のあいだに、もう一方の種類の粒子に当たらない確率は

<i>e</i><sup>−√(1+<i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)・π<i>s</i>′<sup>2</sup>N<sub>2</sub><i>x</i></sup>

である。したがって、距離 <i>x</i> に達する前にどの粒子にも当たらない確率は

<i>e</i><sup>−π(√2・<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub> + √(1+<i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)・<i>s</i>′<sup>2</sup>N<sub>2</sub>)<i>x</i></sup>

であり、そして、<i>l</i><sub>1</sub> を第一の種類の粒子（particle）の平均の距離（*mean distance*）とすれば、

1/<i>l</i><sub>1</sub> = √2・π<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub> + π√(1 + <i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)・<i>s</i>′<sup>2</sup>N<sub>2</sub>　(12)

同じように、<i>l</i><sub>2</sub> を第二の種類の粒子の平均の距離とすれば、

1/<i>l</i><sub>2</sub> = √2・π<i>s</i><sub>2</sub><sup>2</sup>N<sub>2</sub> + π√(1 + <i>v</i><sub>1</sub><sup>2</sup>/<i>v</i><sub>2</sub><sup>2</sup>)・<i>s</i>′<sup>2</sup>N<sub>1</sub>　(13)

第一の種類の粒子の平均の密度（density）は N<sub>1</sub>M<sub>1</sub> = ρ<sub>1</sub>、第二の種類のものは N<sub>2</sub>M<sub>2</sub> = ρ<sub>2</sub> である。ここで

A = √2・π<i>s</i><sub>1</sub><sup>2</sup>/M<sub>1</sub>、B = π√(1 + <i>v</i><sub>2</sub><sup>2</sup>/<i>v</i><sub>1</sub><sup>2</sup>)・<i>s</i>′<sup>2</sup>/M<sub>2</sub>、C = π√(1 + <i>v</i><sub>1</sub><sup>2</sup>/<i>v</i><sub>2</sub><sup>2</sup>)・<i>s</i>′<sup>2</sup>/M<sub>1</sub>

D = √2・π<i>s</i><sub>2</sub>/M<sub>2</sub>　(14)

とおけば、

1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub>、1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sup>2</sup>　(15)

であり、また

B/C = M<sub>1</sub><i>v</i><sub>2</sub>/(M<sub>2</sub><i>v</i><sub>1</sub>) = <i>v</i><sub>2</sub><sup>3</sup>/<i>v</i><sub>1</sub><sup>3</sup>　(16)

である。

訳注：最初の式は、誌面では指数が上付きに組まれず、<i>e</i> と同じ高さに「− √2π<i>s</i><sub>1</sub><sup>2</sup>N<sub>1</sub><i>x</i>」と並んでいる。原文は誌面のとおりに置き、訳では指数として書いた。また本文では距離を <i>x</i><sub>1</sub> と書き、式では <i>x</i> と書いている。誌面のとおり。

訳注：<i>v</i><sub>1</sub>・<i>v</i><sub>2</sub> は前の頁で「速度の係数」（coefficients of velocity）と呼ばれたもの、<i>s</i>′ は異なる種類の粒子が衝突するときの中心の距離。式 (12)・(13)・(14) の根号は、誌面では 1 + <i>v</i><sup>2</sup>/<i>v</i><sup>2</sup> の上だけに掛かり、<i>s</i>′<sup>2</sup> はその外にある。(14) の D は、A と並べると π<i>s</i><sub>2</sub><sup>2</sup> となるはずのところが、誌面では <i>s</i><sub>2</sub> に 2 乗の印が無い。(15) の Dρ<sup>2</sup> は、誌面のとおり ρ の上付きの 2 で組まれているが、意味からは Dρ<sub>2</sub> の誤植と見える。(14) の C の <i>s</i>′<sup>2</sup> の上付きは字が欠けて見えるが、B と同じ 2 と読んだ。

### ¶51　19 巻 p.29

> Prop. XII. To find the pressure on unit of area of the side of the vessel due to the impact of the particles upon it.

命題 XII　粒子が容器（vessel）の壁に衝突（impact）することによって、壁の単位面積が受ける圧力（pressure）を求めること。

訳注：この命題の文は、誌面では斜体でなく普通の字で組まれている。

### ¶52　19 巻 p.29–30

> Let N = number of particles in unit of volume; M = mass of each particle; <i>v</i> = velocity of each particle; <i>l</i> = mean path of each particle; then the number of particles in unit of area of a stratum <i>dz</i> thick is
>
> N<i>dz</i>. (17)
>
> The number of collisions of these particles in unit of time is
>
> N<i>dz</i> <i>v</i>/<i>l</i>. (18)
>
> The number of particles, which after collision reach a distance between <i>nl</i> and (<i>n</i> + <i>dn</i>)<i>l</i>, is
>
> N (<i>v</i>/<i>l</i>) <i>e</i><sup>−<i>n</i></sup> <i>dz dn</i>. (19)
>
> The proportion of these which strike on unit of area at distance <i>z</i> is
>
> (<i>nl</i> − <i>z</i>)/2<i>nl</i>; (20)
>
> the mean velocity of these in the direction of <i>z</i> is
>
> <i>v</i> (<i>nl</i> + <i>z</i>)/2<i>nl</i>. (21)
>
> [p.30] Multiplying together (19), (20), and (21), and M, we find the momentum at impact
>
> MN <i>v</i><sup>2</sup>/(4<i>n</i><sup>2</sup><i>l</i><sup>3</sup>) (<i>n</i><sup>2</sup><i>l</i><sup>2</sup> − <i>z</i><sup>2</sup>)<i>e</i><sup>−<i>n</i></sup> <i>dz dn</i>.
>
> Integrating with respect to <i>z</i> from 0 to <i>nl</i>, we get
>
> (1/6)MN<i>v</i><sup>2</sup> <i>ne</i><sup>−<i>n</i></sup> <i>dn</i>.
>
> Integrating with respect to <i>n</i> from 0 to ∞, we get
>
> (1/6)MN<i>v</i><sup>2</sup>
>
> for the momentum in the direction of <i>z</i> of the striking particles; the momentum of the particles after impact is the same, but in the opposite direction; so that the whole pressure on unit of area is twice this quantity, or
>
> <i>p</i> = (1/3)MN<i>v</i><sup>2</sup>. (22)

N を単位体積（volume）の中の粒子の数、M を一つ一つの粒子の質量、<i>v</i> を一つ一つの粒子の速度（velocity）、<i>l</i> を一つ一つの粒子の平均の道のり（mean path）とする。すると、厚さ <i>dz</i> の層（stratum）の単位面積の中にある粒子の数は

N<i>dz</i>　(17)

である。これらの粒子が単位時間に起こす衝突（collision）の数は

N<i>dz</i>・<i>v</i>/<i>l</i>　(18)

である。衝突のあと、<i>nl</i> と (<i>n</i> + <i>dn</i>)<i>l</i> のあいだの距離まで届く粒子の数は

N・(<i>v</i>/<i>l</i>)・<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dn</i>　(19)

である。そのうち、距離 <i>z</i> のところにある単位面積に当たるものの割合は

(<i>nl</i> − <i>z</i>)/2<i>nl</i>　(20)

であり、それらの <i>z</i> の向きの平均の速度は

<i>v</i>・(<i>nl</i> + <i>z</i>)/2<i>nl</i>　(21)

である。(19)、(20)、(21) と M を掛け合わせると、衝突のときの運動量（momentum）は

MN・<i>v</i><sup>2</sup>/(4<i>n</i><sup>2</sup><i>l</i><sup>3</sup>)・(<i>n</i><sup>2</sup><i>l</i><sup>2</sup> − <i>z</i><sup>2</sup>)<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dn</i>

となる。これを <i>z</i> について 0 から <i>nl</i> まで積分すると

(1/6)MN<i>v</i><sup>2</sup>・<i>ne</i><sup>−<i>n</i></sup>・<i>dn</i>

を得る。さらに <i>n</i> について 0 から ∞ まで積分すると、当たる粒子の <i>z</i> の向きの運動量として

(1/6)MN<i>v</i><sup>2</sup>

を得る。衝突のあとの粒子の運動量は大きさが同じで、向きが逆である。したがって、単位面積が受ける圧力の全体はこの量の二倍であり、

<i>p</i> = (1/3)MN<i>v</i><sup>2</sup>　(22)

となる。

訳注：誌面では N・M・<i>v</i>・<i>l</i> の定義の四行が、行を分けて縦に並べて組まれている。

### ¶53　19 巻 p.30

> This value of <i>p</i> is independent of <i>l</i> the length of path. In applying this result to the theory of gases, we put MN = ρ, and <i>v</i><sup>2</sup> = 3<i>k</i>, and then
>
> <i>p</i> = <i>k</i>ρ,
>
> which is Boyle and Mariotte's law. By (4) we have
>
> <i>v</i><sup>2</sup> = (3/2)α<sup>2</sup>,　∴ α<sup>2</sup> = 2<i>k</i>. (23)

この <i>p</i> の値は、道のりの長さ（length of path）<i>l</i> によらない。この結果を気体の理論に当てはめるには、MN = ρ、<i>v</i><sup>2</sup> = 3<i>k</i> とおく。すると

<i>p</i> = <i>k</i>ρ

となり、これはボイルとマリオットの法則である。(4) によって

<i>v</i><sup>2</sup> = (3/2)α<sup>2</sup>、ゆえに α<sup>2</sup> = 2<i>k</i>　(23)

である。

### ¶54　19 巻 p.30

> We have seen that, on the hypothesis of elastic particles moving in straight lines, the pressure of a gas can be explained by the assumption that the square of the velocity is proportional directly to the absolute temperature, and inversely to the specific gravity of the gas at constant temperature, so that at the same pressure and temperature the value of NM<i>v</i><sup>2</sup> is the same for all gases. But we found in Prop. VI. that when two sets of particles communicate agitation to one another, the value of M<i>v</i><sup>2</sup> is the same in each. From this it appears that N, the number of particles in unit of volume, is the same for all gases at the same pressure and temperature. This result agrees with the chemical law, that equal volumes of gases are chemically equivalent.

ここまでで、弾性のある粒子がまっすぐな線の上を動くという仮説（hypothesis）のもとでは、速度の二乗が絶対温度（absolute temperature）に正比例し、温度が一定のときの気体の比重（specific gravity）に反比例すると仮定すれば、気体の圧力が説明できることを見た。そうすると、同じ圧力と温度（temperature）では、NM<i>v</i><sup>2</sup> の値はすべての気体で同じになる。ところが命題 VI で、二つの組の粒子が互いに揺動（agitation）を伝え合うとき、M<i>v</i><sup>2</sup> の値はどちらの組でも同じになることを見いだした。このことから、単位体積の中の粒子の数 N は、同じ圧力と温度では、すべての気体で同じであることがわかる。この結果は、同じ体積の気体は化学的に当量である（chemically equivalent）という化学の法則と合う。

訳注：「同じ体積の気体は化学的に当量である」は、今でいうアヴォガドロの法則に当たる内容。

### ¶55　19 巻 p.30–31

> We have next to determine the value of <i>l</i>, the mean length of the path of a particle between consecutive collisions. The most direct method of doing this depends upon the fact, that when different strata of a gas slide upon one another with different velocities, they act upon one another with a tangential force tending to prevent this sliding, and similar in its results to the friction between two solid surfaces sliding over each other in the same way. The explanation of gaseous friction, according to our hypothesis, is, that particles having the mean velocity of translation belonging to one layer of the gas, pass out of it into another layer having a different velocity of translation; and by striking against the particles of the second layer, exert upon it [p.31] a tangential force which constitutes the internal friction of the gas. The whole friction between two portions of gas separated by a plane surface, depends upon the total action between all the layers on the one side of that surface upon all the layers on the other side.

次に、続けて起こる衝突のあいだに粒子が進む道のりの平均の長さ（mean length of the path）<i>l</i> の値を定めなければならない。そのもっとも直接の方法は、次の事実による。気体の異なる層（strata）が異なる速度で互いの上を滑るとき、それらの層はこの滑りを妨げようとする接線の向きの力（tangential force）を互いに及ぼし合い、その力の結果は、二つの固体の面が同じように互いの上を滑るときの摩擦（friction）に似ている。われわれの仮説によれば、気体の摩擦（gaseous friction）の説明は次のとおりである。気体のある層に属する平均の並進の速度（velocity of translation）をもつ粒子が、その層から出て、並進の速度の異なる別の層に入る。そして第二の層の粒子に当たることによって、その層に接線の向きの力を及ぼす。この力が気体の内部摩擦（internal friction）をなす。平面で隔てられた気体の二つの部分のあいだの摩擦の全体は、その面の一方の側にあるすべての層が、もう一方の側にあるすべての層に及ぼす作用の総和による。

訳注：ここでは stratum（複数 strata）と layer がともに「層」の意味で使われているので、どちらも「層」と訳した。

### ¶56　19 巻 p.31

> Prop. XIII. To find the internal friction in a system of moving particles.

命題 XIII　動いている粒子の系（system）の内部摩擦を求めること。

### ¶57　19 巻 p.31

> Let the system be divided into layers parallel to the plane of <i>xy</i>, and let the motion of translation of each layer be <i>u</i> in the direction of <i>x</i>, and let <i>u</i> = A + B<i>z</i>. We have to consider the mutual action between the layers on the positive and negative sides of the plane <i>xy</i>. Let us first determine the action between two layers <i>dz</i> and <i>dz</i>′, at distances <i>z</i> and −<i>z</i>′ on opposite sides of this plane, each unit of area. The number of particles which, starting from <i>dz</i> in unit of time, reach a distance between <i>nl</i> and (<i>n</i> + <i>dn</i>)<i>l</i> is by (19),
>
> N (<i>v</i>/<i>l</i>) <i>e</i><sup>−<i>n</i></sup> <i>dz dn</i>.
>
> The number of these which have the ends of their paths in the layer <i>dz</i>′ is
>
> N <i>v</i>/(2<i>nl</i><sup>2</sup>) <i>e</i><sup>−<i>n</i></sup> <i>dz dz</i>′ <i>dn</i>.
>
> The mean velocity in the direction of <i>x</i> which each of these has before impact is A + B<i>z</i>, and after impact A + B<i>z</i>′; and its mass is M, so that a mean momentum = MB(<i>z</i> − <i>z</i>′) is communicated by each particle. The whole action due to these collisions is therefore
>
> NMB <i>v</i>/(2<i>nl</i><sup>2</sup>) (<i>z</i> − <i>z</i>′)<i>e</i><sup>−<i>n</i></sup> <i>dz dz</i>′ <i>dn</i>.

系を <i>xy</i> 平面に平行な層に分け、各層の並進の運動（motion of translation）を <i>x</i> の向きに <i>u</i> とし、<i>u</i> = A + B<i>z</i> とする。<i>xy</i> 平面の正の側と負の側にある層のあいだの、互いの作用を考えなければならない。まず、この平面の両側で距離 <i>z</i> と −<i>z</i>′ のところにある、どちらも単位面積の二つの層 <i>dz</i> と <i>dz</i>′ のあいだの作用を定めよう。<i>dz</i> から出発して単位時間に <i>nl</i> と (<i>n</i> + <i>dn</i>)<i>l</i> のあいだの距離まで届く粒子の数は、(19) によって

N・(<i>v</i>/<i>l</i>)・<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dn</i>

である。そのうち、道のりの終わりが層 <i>dz</i>′ の中にあるものの数は

N・<i>v</i>/(2<i>nl</i><sup>2</sup>)・<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dz</i>′・<i>dn</i>

である。これらの粒子の一つ一つが <i>x</i> の向きにもつ平均の速度は、衝突の前に A + B<i>z</i>、衝突のあとに A + B<i>z</i>′ であり、その質量は M である。したがって、粒子一つあたり平均で MB(<i>z</i> − <i>z</i>′) の運動量が伝えられる。ゆえに、これらの衝突による作用の全体は

NMB・<i>v</i>/(2<i>nl</i><sup>2</sup>)・(<i>z</i> − <i>z</i>′)<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dz</i>′・<i>dn</i>

である。

訳注：「衝突のあとに A + B<i>z</i>′」は、層 <i>dz</i>′ に入って衝突したあとは、その層の並進の速度に合わされるという意味。

### ¶58　19 巻 p.31–32

> We must first integrate with respect to <i>z</i>′ between <i>z</i>′ = 0 and <i>z</i>′ = <i>z</i> − <i>nl</i>; this gives
>
> (1/2)NMB <i>v</i>/(2<i>nl</i><sup>2</sup>) (<i>n</i><sup>2</sup><i>l</i><sup>2</sup> − <i>z</i><sup>2</sup>)<i>e</i><sup>−<i>n</i></sup> <i>dz dn</i>
>
> for the action between the layer <i>dz</i> and all the layers below the plane <i>xy</i>. Then integrate from <i>z</i> = 0 to <i>z</i> = <i>nl</i>,
>
> (1/6)MNB<i>lvn</i><sup>2</sup><i>e</i><sup>−<i>n</i></sup> <i>dn</i>.
>
> Integrate from <i>n</i> = 0 to <i>n</i> = ∞, and we find the whole friction between unit of area above and below the plane to be
>
> F = (1/3)MN<i>lv</i>B = (1/3)ρ<i>lv</i> <i>du</i>/<i>dz</i> = μ <i>du</i>/<i>dz</i>,
>
> where μ is the ordinary coefficient of internal friction,
>
> μ = (1/3)ρ<i>lv</i> = (1/(3√2)) M<i>v</i>/π<i>s</i><sup>2</sup>, (24)
>
> [p.32] where ρ is the density, <i>l</i> the mean length of path of a particle, and <i>v</i> the mean velocity <i>v</i> = 2α/√π = 2√(2<i>k</i>/π),
>
> <i>l</i> = (3/2)(μ/ρ)√(π/2<i>k</i>). (25)

まず <i>z</i>′ について <i>z</i>′ = 0 から <i>z</i>′ = <i>z</i> − <i>nl</i> まで積分しなければならない。そうすると、層 <i>dz</i> と <i>xy</i> 平面より下にあるすべての層とのあいだの作用として

(1/2)NMB・<i>v</i>/(2<i>nl</i><sup>2</sup>)・(<i>n</i><sup>2</sup><i>l</i><sup>2</sup> − <i>z</i><sup>2</sup>)<i>e</i><sup>−<i>n</i></sup>・<i>dz</i>・<i>dn</i>

を得る。次に <i>z</i> = 0 から <i>z</i> = <i>nl</i> まで積分すると

(1/6)MNB<i>lvn</i><sup>2</sup><i>e</i><sup>−<i>n</i></sup>・<i>dn</i>

となる。さらに <i>n</i> = 0 から <i>n</i> = ∞ まで積分すると、平面の上と下の単位面積のあいだの摩擦の全体は

F = (1/3)MN<i>lv</i>B = (1/3)ρ<i>lv</i>・<i>du</i>/<i>dz</i> = μ・<i>du</i>/<i>dz</i>

となる。ここで μ は普通の内部摩擦の係数（coefficient of internal friction）であり、

μ = (1/3)ρ<i>lv</i> = (1/(3√2))・M<i>v</i>/π<i>s</i><sup>2</sup>　(24)

である。ρ は密度、<i>l</i> は粒子の道のりの平均の長さ、<i>v</i> は平均の速度で、<i>v</i> = 2α/√π = 2√(2<i>k</i>/π) である。したがって

<i>l</i> = (3/2)・(μ/ρ)・√(π/2<i>k</i>)　(25)

となる。

訳注：積分の端 <i>z</i>′ = <i>z</i> − <i>nl</i> は誌面のとおり。ここでの <i>z</i>′ は、前の段の「距離 −<i>z</i>′」とちがって負の値をとる座標として扱われている（衝突のあとの速度 A + B<i>z</i>′、伝わる運動量 MB(<i>z</i> − <i>z</i>′) も同じ）。そう読めば、<i>z</i>′ を <i>z</i> − <i>nl</i> から 0 まで積分すると (<i>n</i><sup>2</sup><i>l</i><sup>2</sup> − <i>z</i><sup>2</sup>)/2 が出て、次の式と合う。(24) の最後の辺は、誌面では <i>s</i><sup>2</sup> の後ろに読点が付いて「π<i>s</i><sup>2</sup>,」と組まれている。

### ¶59　19 巻 p.32

> Now Professor Stokes finds by experiments on air,
>
> √(μ/ρ) = ·116.
>
> If we suppose √<i>k</i> = 930 feet per second for air at 60°, and therefore the mean velocity <i>v</i> = 1505 feet per second, then the value of <i>l</i>, the mean distance travelled over by a particle between consecutive collisions, = 1/447000th of an inch, and each particle makes 8,077,200,000 collisions per second.

さて、ストークス教授は、空気についての実験から

√(μ/ρ) = 0.116

を見いだしている。60° の空気で √<i>k</i> = 毎秒 930 フィートとし、したがって平均の速度 <i>v</i> = 毎秒 1505 フィートとすれば、続けて起こる衝突のあいだに粒子が進む平均の距離 <i>l</i> の値は 1/447000 インチとなり、一つ一つの粒子は毎秒 8,077,200,000 回の衝突をする。

訳注：「·116」は誌面のとおり小数点を中ほどに置く組み方で、0.116 のこと。60° は華氏の温度と見える（誌面に F の字は無い）。√<i>k</i> の値は、<i>p</i> = <i>k</i>ρ から決まる、気体の圧力と密度の比の平方根。(24) のあとの式 <i>v</i> = 2√(2<i>k</i>/π) に √<i>k</i> = 930 を入れると約 1484 になり、誌面の 1505 と合わない。誌面のとおり置いた。衝突の回数は、<i>v</i> = 1505 フィート（18060 インチ）を <i>l</i> = 1/447000 インチで割った値（約 8,073,000,000）とほぼ合う。

### ¶60　19 巻 p.32

> A remarkable result here presented to us in equation (24), is that if this explanation of gaseous friction be true, the coefficient of friction is independent of the density. Such a consequence of a mathematical theory is very startling, and the only experiment I have met with on the subject does not seem to confirm it. We must next compare our theory with what is known of the diffusion of gases, and the conduction of heat through a gas.

ここで式 (24) が示す注目すべき結果は、気体の摩擦についてのこの説明が正しければ、摩擦の係数（coefficient of friction）は密度によらない、ということである。数学の理論からのこのような帰結はたいへん驚くべきものであり、この主題について私が知っている唯一の実験は、これを確かめるようには見えない。次に、われわれの理論を、気体の拡散（diffusion）と気体の中の熱の伝導（conduction of heat）について知られていることと比べなければならない。

### ¶61　19 巻 p.32

> [To be continued.]

［続く］

### ¶62　20 巻 p.21

> II. *Illustrations of the Dynamical Theory of Gases. By* J. C. Maxwell, *M.A., Professor of Natural Philosophy in Marischal College and University of Aberdeen.* [Concluded from vol. xix. p, 32.]

II. 気体の動力学的理論（dynamical theory of gases）の例解（illustrations）。アバディーンのマリシャル・カレッジ・アンド・ユニヴァーシティの自然哲学の教授、修士 J. C. マクスウェル。［第 19 巻 32 頁からの続き、完結。］

訳注：「p, 32」の p の後はコンマで刷られている。誤植と見て、原文は誌面のとおりに置いた。

### ¶63　20 巻 p.21

> Part II. *On the Process of Diffusion of two or more kinds of moving particles among one another.*

第二部　二種類以上の動く粒子が互いのあいだに拡散する過程について。

### ¶64　20 巻 p.21–22

> We have shown, in the first part of this paper, that the motions of a system of many small elastic particles are of two kinds: one, a general motion of translation of the whole system, which may be called the motion in mass; and the other a motion of agitation, or molecular motion, in virtue of which velocities in all directions are distributed among the particles according to a certain law. In the cases we are considering, the collisions are so frequent that the law of distribution of the molecular velocities, if disturbed in any way, will be re-established in an inappreciably short time; so that the motion will always con- [p.22] sist of this definite motion of agitation, combined with the general motion of translation.

この論文の第一部で、多くの小さな弾性のある粒子（particle）の系（system）の運動は二種類からなることを示した。一つは系の全体の一般的な並進の運動（motion of translation）で、全体としての運動（motion in mass）と呼んでよい。もう一つは揺動の運動（motion of agitation）、つまり分子の運動で、これによって、あらゆる方向の速度がある法則に従って粒子のあいだに分配されている。いま考えている場合には、衝突（collision）がたいへん頻繁なので、分子の速度の分布の法則は、どのように乱されても、気付けないほど短い時間のうちに元に戻る。したがって運動は、いつも、この定まった揺動の運動に、一般的な並進の運動を合わせたものからなる。

### ¶65　20 巻 p.22

> When two gases are in communication, streams of the two gases might run freely in opposite directions, if it were not for the collisions which take place between the particles. The rate at which they actually interpenetrate each other must be investigated. The diffusion is due partly to the spreading of the particles by the molecular agitation, and partly to the actual motion of the two opposite currents in mass, produced by the pressure behind, and resisted by the collisions of the opposite stream. When the densities are equal, the diffusions due to these two causes respectively are as 2 to 3.

二つの気体が通じ合っているとき、粒子どうしのあいだで起こる衝突が無ければ、二つの気体の流れは互いに反対の向きに自由に進むだろう。実際に両者が互いに入り込み合う速さを調べなければならない。拡散（diffusion）は、一部は分子の揺動による粒子の広がりにより、一部は、背後からの圧力（pressure）によって生じ、反対の流れの衝突によって妨げられる、二つの反対の流れの全体としての実際の運動による。密度（density）が等しいとき、この二つの原因による拡散は、それぞれ 2 対 3 の比になる。

### ¶66　20 巻 p.22

> Prop. XIV. *In a system of particles whose density, velocity, &c. are functions of* x, *to find the quantity of matter transferred across the plane of* yz, *due to the motion of agitation alone.*

命題 XIV　密度・速度などが <i>x</i> の関数である粒子の系で、揺動の運動だけによって <i>yz</i> の平面を横切って運ばれる物質の量を求めること。

### ¶67　20 巻 p.22

> If the number of particles, their velocity, or their length of path is greater on one side of this plane than on the other, then more particles will cross the plane in one direction than in the other; and there will be a transference of matter across the plane, the amount of which may be calculated.

粒子の数、その速度、あるいはその道のりの長さ（length of path）が、この平面の一方の側で他方の側より大きければ、一方の向きに平面を横切る粒子は他方の向きより多くなる。そして平面を横切る物質の移動が起こり、その量は計算できる。

### ¶68　20 巻 p.22

> Let there be taken a stratum whose thickness is <i>dx</i>, and area unity, at a distance <i>x</i> from the origin. The number of collisions taking place in this stratum in unit of time will be
>
> N<i>v</i>/<i>l</i> <i>dx</i>.
>
> The proportion of these which reach a distance between <i>nl</i> and (<i>n</i> + <i>dn</i>)<i>l</i> before they strike another particle is
>
> <i>e</i><sup>−<i>n</i></sup><i>dn</i>.
>
> The proportion of these which pass through the plane <i>yz</i> is
>
> (<i>nl</i> + <i>x</i>)/2<i>nl</i> when <i>x</i> is between −<i>nl</i> and 0,
>
> and −(<i>nl</i> − <i>x</i>)/2<i>nl</i> when <i>x</i> is between 0 and +<i>nl</i>;
>
> the sign being negative in the latter case, because the particles cross the plane in the negative direction. The mass of each particle is M; so that the quantity of matter which is projected from the stratum <i>dx</i>, crosses the plane <i>yz</i> in a positive direction, and strikes other particles at distances between <i>nl</i> and (<i>n</i> + <i>dn</i>)<i>l</i> is
>
> MN<i>v</i>(<i>x</i> ∓ <i>nl</i>)/2<i>nl</i><sup>2</sup> <i>dx e</i><sup>−<i>n</i></sup><i>dn</i>, (26)
>
> where <i>x</i> must be between ±<i>nl</i>, and the upper or lower sign is to be taken according as <i>x</i> is positive or negative.

原点から距離 <i>x</i> の所に、厚さ <i>dx</i>、面積が単位の層（stratum）をとる。この層の中で単位の時間に起こる衝突の数は

N<i>v</i>/<i>l</i> <i>dx</i>

である。このうち、別の粒子に当たる前に <i>nl</i> と (<i>n</i> + <i>dn</i>)<i>l</i> のあいだの距離に達するものの割合は

<i>e</i><sup>−<i>n</i></sup><i>dn</i>

である。このうち <i>yz</i> の平面を通り抜けるものの割合は、<i>x</i> が −<i>nl</i> と 0 のあいだのとき

(<i>nl</i> + <i>x</i>)/2<i>nl</i>

であり、<i>x</i> が 0 と +<i>nl</i> のあいだのとき

−(<i>nl</i> − <i>x</i>)/2<i>nl</i>

である。後の場合に符号が負になるのは、粒子が負の向きに平面を横切るからである。各粒子の質量は M である。したがって、層 <i>dx</i> から投げ出され、<i>yz</i> の平面を正の向きに横切り、<i>nl</i> と (<i>n</i> + <i>dn</i>)<i>l</i> のあいだの距離で他の粒子に当たる物質の量は

MN<i>v</i>(<i>x</i> ∓ <i>nl</i>)/2<i>nl</i><sup>2</sup> <i>dx</i> <i>e</i><sup>−<i>n</i></sup><i>dn</i>　(26)

である。ここで <i>x</i> は ±<i>nl</i> のあいだになければならず、<i>x</i> が正か負かに応じて、上の符号か下の符号をとる。

訳注：誌面のこの所（段の始めの右）に図がある（原点を通る縦の線と、距離 <i>x</i> の所の厚さ <i>dx</i> の層を示す二本の縦の線、その間の横の線の図）。N は単位の体積の中の粒子の数、<i>v</i> は揺動の速度、<i>l</i> は道のりの平均の長さ（次の頁の (28) の後の説明による）。

### ¶69　20 巻 p.23

> In integrating this expression, we must remember that N, <i>v</i>, and <i>l</i> are functions of <i>x</i>, not vanishing with <i>x</i>, and of which the variations are very small between the limits <i>x</i> = −<i>nl</i> and <i>x</i> = +<i>nl</i>.

この式を積分するときには、N・<i>v</i>・<i>l</i> が <i>x</i> の関数であり、<i>x</i> とともに 0 にはならず、<i>x</i> = −<i>nl</i> と <i>x</i> = +<i>nl</i> の範囲のあいだでの変化がたいへん小さいことを覚えておかなければならない。

### ¶70　20 巻 p.23

> As we may have occasion to perform similar integrations, we may state here, to save trouble, that if U and <i>r</i> are functions of <i>x</i> not vanishing with <i>x</i>, whose variations are very small between the limits <i>x</i> = +<i>r</i> and <i>x</i> = −<i>r</i>,
>
> ∫<sub>−<i>r</i></sub><sup>+<i>r</i></sup> ±U<i>x</i><sup><i>m</i></sup><i>dx</i> = (2/(<i>m</i> + 2)) <i>d</i>/<i>dx</i> (U<i>r</i><sup><i>m</i>+2</sup>). (27)
>
> When <i>m</i> is an odd number, the upper sign only is to be considered; when <i>m</i> is even or zero, the upper sign is to be taken with positive values of <i>x</i>, and the lower with negative values. Applying this to the case before us,
>
> ∫<sub>−<i>nl</i></sub><sup>+<i>nl</i></sup> MN<i>vx dx</i>/2<i>nl</i><sup>2</sup> = (1/3) <i>d</i>/<i>dx</i> (MN<i>vn</i><sup>2</sup><i>l</i>),
>
> ∫<sub>−<i>nl</i></sub><sup>+<i>nl</i></sup> ∓ MN<i>v</i>/2<i>l</i> <i>dx</i> = −(1/2) <i>d</i>/<i>dx</i> (MN<i>vn</i><sup>2</sup><i>l</i>).

同じような積分をする機会があるかもしれないので、手間を省くために、ここで次のことを述べておく。U と <i>r</i> が <i>x</i> の関数で、<i>x</i> とともに 0 にはならず、<i>x</i> = +<i>r</i> と <i>x</i> = −<i>r</i> の範囲のあいだでの変化がたいへん小さいならば

∫<sub>−<i>r</i></sub><sup>+<i>r</i></sup> ±U<i>x</i><sup><i>m</i></sup><i>dx</i> = (2/(<i>m</i> + 2)) <i>d</i>/<i>dx</i> (U<i>r</i><sup><i>m</i>+2</sup>)　(27)

である。<i>m</i> が奇数のときは上の符号だけを考える。<i>m</i> が偶数か 0 のときは、<i>x</i> が正の値では上の符号を、負の値では下の符号をとる。これをいまの場合に当てはめると

∫<sub>−<i>nl</i></sub><sup>+<i>nl</i></sup> MN<i>vx dx</i>/2<i>nl</i><sup>2</sup> = (1/3) <i>d</i>/<i>dx</i> (MN<i>vn</i><sup>2</sup><i>l</i>)

∫<sub>−<i>nl</i></sub><sup>+<i>nl</i></sup> ∓ MN<i>v</i>/2<i>l</i> <i>dx</i> = −(1/2) <i>d</i>/<i>dx</i> (MN<i>vn</i><sup>2</sup><i>l</i>)

となる。

訳注：(27) の右辺の微分は、範囲の幅 <i>r</i> も <i>x</i> の関数として、U<i>r</i><sup><i>m</i>+2</sup> をまとめて微分する形で書かれている。

### ¶71　20 巻 p.23

> We have now to integrate
>
> ∫<sub>0</sub><sup>∞</sup> −(1/6) <i>d</i>/<i>dx</i> (MN<i>vl</i>)<i>n</i><sup>2</sup><i>e</i><sup>−<i>n</i></sup><i>dn</i>,
>
> <i>n</i> being taken from 0 to ∞. We thus find for the quantity of matter transferred across unit of area by the motion of agitation in unit of time,
>
> <i>q</i> = −(1/3) <i>d</i>/<i>dx</i> (ρ<i>vl</i>), (28)
>
> where ρ = MN is the density, <i>v</i> the mean velocity of agitation, and <i>l</i> the mean length of path.

次に、<i>n</i> を 0 から ∞ までとって

∫<sub>0</sub><sup>∞</sup> −(1/6) <i>d</i>/<i>dx</i> (MN<i>vl</i>)<i>n</i><sup>2</sup><i>e</i><sup>−<i>n</i></sup><i>dn</i>

を積分しなければならない。こうして、揺動の運動によって単位の時間に単位の面積を横切って運ばれる物質の量として

<i>q</i> = −(1/3) <i>d</i>/<i>dx</i> (ρ<i>vl</i>)　(28)

を得る。ここで ρ = MN は密度、<i>v</i> は揺動の平均の速度、<i>l</i> は道のりの平均の長さ（mean length of path）である。

### ¶72　20 巻 p.23

> Prop. XV. The quantity transferred, in consequence of a mean motion of translation V, would obviously be
>
> Q = Vρ. (29)

命題 XV　平均の並進の運動 V によって運ばれる量は、明らかに

Q = Vρ　(29)

となるだろう。

訳注：この命題は、誌面では命題の文が斜体で組まれていない。

### ¶73　20 巻 p.23

> Prop. XVI. *To find the resultant dynamical effect of all the collisions which take place in a given stratum.*

命題 XVI　与えられた層の中で起こるすべての衝突の、合成された動力学的な効果を求めること。

### ¶74　20 巻 p.23–24

> Suppose the density and velocity of the particles to be functions of <i>x</i>, then more particles will be thrown into the given stratum from that side on which the density is greatest; and those particles which have greatest velocity will have the greatest effect, so that the stratum will not be generally in equilibrium, and the dynamical measure of the force exerted on the stratum will be the resultant momentum of all the particles which lodge in it during unit of time. We shall first take the case in which [p.24] there is no mean motion of translation, and then consider the effect of such motion separately.

粒子の密度と速度が <i>x</i> の関数であるとすると、与えられた層には、密度の最も大きい側から、より多くの粒子が投げ込まれる。また速度の最も大きい粒子が最も大きい効果をもつ。したがって層は一般に釣り合い（equilibrium）にはなく、層に働く力の動力学的な尺度は、単位の時間のあいだに層の中にとどまるすべての粒子の合成された運動量（momentum）である。まず平均の並進の運動が無い場合をとり、次に、そのような運動の効果を別に考える。

### ¶75　20 巻 p.24

> Let a stratum whose thickness is α (a small quantity compared with <i>l</i>), and area unity, be taken at the origin, perpendicular to the axis of <i>x</i>; and let another stratum, of thickness <i>dx</i>, and area unity, be taken at a distance <i>x</i> from the first.

原点に、<i>x</i> の軸（axis）に垂直に、厚さ α（<i>l</i> に比べて小さい量）、面積が単位の層をとる。また最初の層から距離 <i>x</i> の所に、厚さ <i>dx</i>、面積が単位のもう一つの層をとる。

訳注：誌面のこの所（段の右）に図がある（原点の厚さ α の層と、距離 <i>x</i> の所の厚さ <i>dx</i> の層を、それぞれ二本の縦の線で示し、その間を横の線で結んだ図）。

### ¶76　20 巻 p.24

> If M<sub>1</sub> be the mass of a particle, N the number in unit of volume, <i>v</i> the velocity of agitation, <i>l</i> the mean length of path, then the number of collisions which take place in the stratum <i>dx</i> is
>
> N<i>v</i>/<i>l</i> <i>dx</i>.
>
> The proportion of these which reach a distance between <i>nl</i> and (<i>n</i> + <i>dn</i>)<i>l</i> is
>
> <i>e</i><sup>−<i>n</i></sup><i>dn</i>.
>
> The proportion of these which have the extremities of their paths in the stratum α is
>
> α/2<i>nl</i>.
>
> The velocity of these particles, resolved in the direction of <i>x</i>, is
>
> −<i>vx</i>/<i>nl</i>,
>
> and the mass is M; so that multiplying all these terms together, we get
>
> NM<i>v</i><sup>2</sup>α<i>x</i>/2<i>n</i><sup>2</sup><i>l</i><sup>3</sup> <i>e</i><sup>−<i>n</i></sup> <i>dx dn</i> (30)
>
> for the momentum of the particles fulfilling the above conditions.

M<sub>1</sub> を一つの粒子の質量、N を単位の体積の中の数、<i>v</i> を揺動の速度、<i>l</i> を道のりの平均の長さとすると、層 <i>dx</i> の中で起こる衝突の数は

N<i>v</i>/<i>l</i> <i>dx</i>

である。このうち <i>nl</i> と (<i>n</i> + <i>dn</i>)<i>l</i> のあいだの距離に達するものの割合は

<i>e</i><sup>−<i>n</i></sup><i>dn</i>

である。このうち道のりの終わりが層 α の中にあるものの割合は

α/2<i>nl</i>

である。これらの粒子の速度を <i>x</i> の方向に分解したものは

−<i>vx</i>/<i>nl</i>

であり、質量は M である。したがって、これらの項をすべて掛け合わせると、上の条件を満たす粒子の運動量として

NM<i>v</i><sup>2</sup>α<i>x</i>/2<i>n</i><sup>2</sup><i>l</i><sup>3</sup> <i>e</i><sup>−<i>n</i></sup> <i>dx</i> <i>dn</i>　(30)

を得る。

訳注：誌面では段の始めで質量を M<sub>1</sub>、後で M と書いていて、そろっていない。また速度の因子 −<i>vx</i>/<i>nl</i> の負の符号は、掛け合わせた (30) には現れていない。どちらも誌面のとおりに置く。(30) を <i>x</i> について −<i>nl</i> から +<i>nl</i> まで積分すると、次の段の正の符号の式になる。負の符号を (30) に残していれば、次の段の式も負になり、(31) の左辺と合う。

### ¶77　20 巻 p.24–25

> To get the whole momentum, we must first integrate with respect to <i>x</i> from <i>x</i> = −<i>nl</i> to <i>x</i> = +<i>nl</i>, remembering that <i>l</i> may be a function of <i>x</i>, and is a very small quantity. The result is
>
> <i>d</i>/<i>dx</i> (NM<i>v</i><sup>2</sup>/3) α<i>ne</i><sup>−<i>n</i></sup><i>dn</i>.
>
> Integrating with respect to <i>n</i> from <i>n</i> = 0 to <i>n</i> = ∞, the result is
>
> −α <i>d</i>/<i>dx</i> (NM<i>v</i><sup>2</sup>/3) = αXρ (31
>
> as the whole resultant force on the stratum α arising from these collisions. Now NM<i>v</i><sup>2</sup>/3 = <i>p</i> by Prop. XII., and therefore we [p.25] may write the equation
>
> −<i>dp</i>/<i>dx</i> = Xρ, (32)
>
> the ordinary hydrodynamical equation.

運動量の全体を得るには、まず <i>x</i> について <i>x</i> = −<i>nl</i> から <i>x</i> = +<i>nl</i> まで積分しなければならない。そのとき、<i>l</i> は <i>x</i> の関数でありうること、またたいへん小さい量であることを覚えておく。結果は

<i>d</i>/<i>dx</i> (NM<i>v</i><sup>2</sup>/3)・α<i>n</i><i>e</i><sup>−<i>n</i></sup><i>dn</i>

である。<i>n</i> について <i>n</i> = 0 から <i>n</i> = ∞ まで積分すると、これらの衝突から生じる、層 α に働く合成された力の全体として

−α <i>d</i>/<i>dx</i> (NM<i>v</i><sup>2</sup>/3) = αXρ　(31)

を得る。ところで命題 XII により NM<i>v</i><sup>2</sup>/3 = <i>p</i> であり、したがって次の式を書くことができる。

−<i>dp</i>/<i>dx</i> = Xρ　(32)

これは普通の流体力学の方程式である。

訳注：式の番号は誌面では「(31」と閉じの括弧が欠けている。誤植と見て、原文は誌面のとおりに置き、訳では (31) と書いた。積分の前の式は正の符号で、(31) の左辺には負の符号が付いている。これも誌面のとおりに置く。X は単位の質量あたりに働く外からの力に当たると読めるが、この範囲の中では説明が無い。<i>p</i> は圧力。

### ¶78　20 巻 p.25

> Prop. XVII. *To find the resultant effect of the collisions upon each of several different systems of particles mixed together.*

命題 XVII　混ぜ合わされたいくつかの異なる粒子の系のそれぞれに、衝突が及ぼす合力の効果を求めること。

### ¶79　20 巻 p.25

> Let M<sub>1</sub>, M<sub>2</sub>, &c. be the masses of the different kinds of particles, N<sub>1</sub>, N<sub>2</sub>, &c. the number of each kind in unit of volume, <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>, &c. their velocities of agitation, <i>l</i><sub>1</sub>, <i>l</i><sub>2</sub> their mean paths, <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, &c. the pressures due to each system of particles; then
>
> 1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub> + &c.
>
> 1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sub>2</sub> + &c. (33)
>
> The number of collisions of the first kind of particles with each other in unit of time will be
>
> N<sub>1</sub><i>v</i><sub>1</sub>Aρ<sub>1</sub>.
>
> The number of collisions between particles of the first and second kinds will be
>
> N<sub>1</sub><i>v</i><sub>1</sub>Bρ<sub>2</sub>, or N<sub>2</sub><i>v</i><sub>2</sub>Cρ<sub>1</sub>, because <i>v</i><sub>1</sub><sup>3</sup>B = <i>v</i><sub>2</sub><sup>3</sup>C.
>
> The number of collisions between particles of the second kind will be N<sub>2</sub><i>v</i><sub>2</sub>Dρ<sub>2</sub>, and so on, if there are more kinds of particles.

M<sub>1</sub>, M<sub>2</sub> などを異なる種類の粒子の質量、N<sub>1</sub>, N<sub>2</sub> などを単位体積の中のそれぞれの種類の数、<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> などをそれらの揺動の速度（velocity of agitation）、<i>l</i><sub>1</sub>, <i>l</i><sub>2</sub> をそれらの平均の道のり（mean path）、<i>p</i><sub>1</sub>, <i>p</i><sub>2</sub> などをそれぞれの粒子の系による圧力とする。すると次のようになる。

1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub> + &c.

1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sub>2</sub> + &c.　(33)

第一の種類の粒子どうしの、単位時間あたりの衝突の数は次のようになる。

N<sub>1</sub><i>v</i><sub>1</sub>Aρ<sub>1</sub>

第一の種類と第二の種類の粒子のあいだの衝突の数は次のようになる。

N<sub>1</sub><i>v</i><sub>1</sub>Bρ<sub>2</sub>　または　N<sub>2</sub><i>v</i><sub>2</sub>Cρ<sub>1</sub>（<i>v</i><sub>1</sub><sup>3</sup>B = <i>v</i><sub>2</sub><sup>3</sup>C であるから）

第二の種類の粒子どうしの衝突の数は N<sub>2</sub><i>v</i><sub>2</sub>Dρ<sub>2</sub> となる。粒子の種類がもっと多ければ、同じように続く。

訳注：ρ<sub>1</sub>, ρ<sub>2</sub> はこの段では定められていないが、それぞれの種類の粒子の密度を表すと読める。式 (33) は誌面では二つの式を右の括弧でまとめ、番号 (33) を一つだけ付けている。&c. は「など」の意で、式の中では誌面のとおり残した。

### ¶80　20 巻 p.25

> Let us now consider a thin stratum of the mixture whose volume is unity.

ここで、体積が 1 である混合物の薄い層を考えよう。

### ¶81　20 巻 p.25

> The resultant momentum of the particles of the first kind which lodge in it during unit of time is
>
> −<i>dp</i><sub>1</sub>/<i>dx</i>.
>
> The proportion of these which strike particles of the first kind is
>
> Aρ<sub>1</sub><i>l</i><sub>1</sub>.
>
> The whole momentum of these remains among the particles of the first kind. The proportion which strike particles of the second kind is
>
> Bρ<sub>2</sub><i>l</i><sub>1</sub>.
>
> The momentum of these is divided between the striking particles in the ratio of their masses; so that M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) of the whole goes to particles of the first kind, and M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) to particles of the second kind.

単位時間のあいだにこの層の中にとどまる（lodge）第一の種類の粒子の、運動量（momentum）の合計は次のとおりである。

−<i>dp</i><sub>1</sub>/<i>dx</i>

そのうち第一の種類の粒子に当たるものの割合は次のとおりである。

Aρ<sub>1</sub><i>l</i><sub>1</sub>

これらの運動量はすべて第一の種類の粒子のあいだにとどまる。第二の種類の粒子に当たるものの割合は次のとおりである。

Bρ<sub>2</sub><i>l</i><sub>1</sub>

これらの運動量は、当たり合う粒子のあいだで質量の比に分けられる。そのため全体のうち M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) が第一の種類の粒子に、M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) が第二の種類の粒子に行く。

訳注：lodge は、層の外から飛び込んできた粒子がこの層の中で衝突して止まる（運動量をそこに置いていく）ことを言う。

### ¶82　20 巻 p.26

> The effect of these collisions is therefore to produce a force
>
> −(<i>dp</i><sub>1</sub>/<i>dx</i>)(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>))
>
> on particles of the first system, and
>
> −(<i>dp</i><sub>1</sub>/<i>dx</i>) Bρ<sub>2</sub><i>l</i><sub>1</sub> M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>)
>
> on particles of the second system.

したがって、これらの衝突の効果は、第一の系の粒子に

−(<i>dp</i><sub>1</sub>/<i>dx</i>)・(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>))

という力を、第二の系の粒子に

−(<i>dp</i><sub>1</sub>/<i>dx</i>)・Bρ<sub>2</sub><i>l</i><sub>1</sub>・M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>)

という力を生じることである。

### ¶83　20 巻 p.26

> The effect of the collisions of those particles of the second system which strike into the stratum, is to produce a force
>
> −(<i>dp</i><sub>2</sub>/<i>dx</i>) Cρ<sub>1</sub><i>l</i><sub>2</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)
>
> on the first system, and
>
> −(<i>dp</i><sub>2</sub>/<i>dx</i>)(Cρ<sub>1</sub><i>l</i><sub>2</sub> M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) + Dρ<sub>2</sub><i>l</i><sub>2</sub>)
>
> on the second.

層の中へ飛び込む第二の系の粒子の衝突の効果は、第一の系に

−(<i>dp</i><sub>2</sub>/<i>dx</i>)・Cρ<sub>1</sub><i>l</i><sub>2</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)

という力を、第二の系に

−(<i>dp</i><sub>2</sub>/<i>dx</i>)・(Cρ<sub>1</sub><i>l</i><sub>2</sub>・M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) + Dρ<sub>2</sub><i>l</i><sub>2</sub>)

という力を生じることである。

### ¶84　20 巻 p.26

> The whole effect of these collisions is therefore to produce a resultant force
>
> −(<i>dp</i><sub>1</sub>/<i>dx</i>)(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)) − (<i>dp</i><sub>2</sub>/<i>dx</i>) Cρ<sub>1</sub><i>l</i><sub>2</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) + &c. (34)
>
> on the first system,
>
> −(<i>dp</i><sub>1</sub>/<i>dx</i>) Bρ<sub>2</sub><i>l</i><sub>1</sub> M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) − (<i>dp</i><sub>2</sub>/<i>dx</i>)(Cρ<sub>1</sub><i>l</i><sub>2</sub> M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) + Dρ<sub>2</sub><i>l</i><sub>2</sub>) + &c. (35)
>
> on the second, and so on.

したがって、これらの衝突の効果の全体は、第一の系に

−(<i>dp</i><sub>1</sub>/<i>dx</i>)・(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)) − (<i>dp</i><sub>2</sub>/<i>dx</i>)・Cρ<sub>1</sub><i>l</i><sub>2</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) + &c.　(34)

という合力を、第二の系に

−(<i>dp</i><sub>1</sub>/<i>dx</i>)・Bρ<sub>2</sub><i>l</i><sub>1</sub>・M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) − (<i>dp</i><sub>2</sub>/<i>dx</i>)・(Cρ<sub>1</sub><i>l</i><sub>2</sub>・M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>) + Dρ<sub>2</sub><i>l</i><sub>2</sub>) + &c.　(35)

という合力を生じることである。ほかの系についても同じように続く。

### ¶85　20 巻 p.26

> Prop. XVIII. *To find the mechanical effect of a difference in the mean velocity of translation of two systems of moving particles.*

命題 XVIII　運動する粒子の二つの系のあいだで、並進の平均の速度に差があるときの、力学的な効果を求めること。

### ¶86　20 巻 p.26

> Let V<sub>1</sub>, V<sub>2</sub> be the mean velocities of translation of the two systems respectively, then (M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))(V<sub>1</sub> − V<sub>2</sub>) is the mean momentum lost by a particle of the first, and gained by a particle of the second at collision. The number of such collisions in unit of volume is
>
> N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub>, or N<sub>2</sub>Cρ<sub>1</sub><i>v</i><sub>2</sub>;
>
> therefore the whole effect of the collisions is to produce a force
>
> = −N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub> (M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))(V<sub>1</sub> − V<sub>2</sub>) (36)
>
> on the first system, and an equal and opposite force
>
> = +N<sub>2</sub>Cρ<sub>1</sub><i>v</i><sub>2</sub> (M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))(V<sub>1</sub> − V<sub>2</sub>) (37)
>
> on unit of volume of the second system.

V<sub>1</sub>, V<sub>2</sub> をそれぞれ二つの系の並進の平均の速度とする。すると (M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))・(V<sub>1</sub> − V<sub>2</sub>) が、衝突のときに第一の系の粒子が失い、第二の系の粒子が得る平均の運動量である。単位体積の中でのこのような衝突の数は次のとおりである。

N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub>　または　N<sub>2</sub>Cρ<sub>1</sub><i>v</i><sub>2</sub>

したがって、衝突の効果の全体は、第一の系に

= −N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub>・(M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))・(V<sub>1</sub> − V<sub>2</sub>)　(36)

という力を、第二の系の単位体積に、それと大きさが等しく向きが反対の力

= +N<sub>2</sub>Cρ<sub>1</sub><i>v</i><sub>2</sub>・(M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))・(V<sub>1</sub> − V<sub>2</sub>)　(37)

を生じることである。

訳注：「単位体積の中でのこのような衝突の数」は、誌面では単位時間あたりとは書かれていないが、前の命題の衝突の数（単位時間あたり）と同じ式である。式 (36)・(37) の頭の「=」は誌面のとおり。

### ¶87　20 巻 p.27

> Prop. XIX. *To find the law of diffusion in the case of two gases diffusing into each other through a plug made of a porous material, as in the case of the experiments of Graham.*

命題 XIX　グレアムの実験のように、多孔質の材料でできた栓（plug）を通して二つの気体が互いに拡散しあう場合に、拡散の法則を求めること。

### ¶88　20 巻 p.27

> The pressure on each side of the plug being equal, it was found by Graham that the quantities of the gases which passed in opposite directions through the plug in the same time were directly as the square roots of their specific gravities.

栓の両側の圧力が等しいとき、同じ時間に栓を反対の向きに通り抜ける気体の量は、それぞれの比重（specific gravity）の平方根に正比例することを、グレアムは見いだした。

訳注：ここでの「量」は、すぐ後の Q<sub>1</sub> = ρ<sub>1</sub>V<sub>1</sub> = M<sub>1</sub>N<sub>1</sub>V<sub>1</sub> のとおり質量で量ったものである。体積で量れば比重の平方根に反比例する（よく知られたグレアムの法則の形）。

### ¶89　20 巻 p.27

> We may suppose the action of the porous material to be similar to that of a number of particles fixed in space, and obstructing the motion of the particles of the moving systems. If L<sub>1</sub> is the mean distance a particle of the first kind would have to go before striking a fixed particle, and L<sub>2</sub> the distance for a particle of the second kind, then the mean paths of particles of each kind will be given by the equations
>
> 1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub> + 1/L<sub>1</sub>, 1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sub>2</sub> + 1/L<sub>2</sub>. (38)
>
> The mechanical effect upon the plug of the pressures of the gases on each side, and of the percolation of the gases through it, may be found by Props. XVII. and XVIII. to be
>
> M<sub>1</sub>N<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub>/L<sub>1</sub> + M<sub>2</sub>N<sub>2</sub><i>v</i><sub>2</sub>V<sub>2</sub>/L<sub>2</sub> − (<i>dp</i><sub>1</sub>/<i>dx</i>)(<i>l</i><sub>1</sub>/L<sub>1</sub>) − (<i>dp</i><sub>2</sub>/<i>dx</i>)(<i>l</i><sub>2</sub>/L<sub>2</sub>) = 0; (39)
>
> and this must be zero, if the pressures are equal on each side of the plug. Now if Q<sub>1</sub>, Q<sub>2</sub> be the quantities transferred through the plug by the mean motion of translation, Q<sub>1</sub> = ρ<sub>1</sub>V<sub>1</sub> = M<sub>1</sub>N<sub>1</sub>V<sub>1</sub>; and since by Graham's law
>
> Q<sub>1</sub>/Q<sub>2</sub> = −√(M<sub>1</sub>/M<sub>2</sub>) = −<i>v</i><sub>2</sub>/<i>v</i><sub>1</sub>,
>
> we shall have
>
> M<sub>1</sub>N<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub> = −M<sub>2</sub>N<sub>2</sub><i>v</i><sub>2</sub>V<sub>2</sub> = U suppose;
>
> and since the pressures on the two sides are equal, <i>dp</i><sub>2</sub>/<i>dx</i> = −<i>dp</i><sub>1</sub>/<i>dx</i>, and the only way in which the equation of equilibrium of the plug can generally subsist is when L<sub>1</sub> = L<sub>2</sub> and <i>l</i><sub>1</sub> = <i>l</i><sub>2</sub>. This implies that A = C and B = D. Now we know that <i>v</i><sub>1</sub><sup>3</sup>B = <i>v</i><sub>2</sub><sup>3</sup>C. Let K = 3A/<i>v</i><sub>1</sub><sup>3</sup>, then we shall have
>
> A = C = ⅓K<i>v</i><sub>1</sub><sup>3</sup>, B = D = ⅓K<i>v</i><sub>2</sub><sup>3</sup>, (40)
>
> and
>
> 1/<i>l</i><sub>1</sub> = 1/<i>l</i><sub>2</sub> = K(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>) + 1/L. (41)
>
> The diffusion is due partly to the motion of translation, and partly to that of agitation. Let us find the part due to the motion of translation.

多孔質の材料の働きは、空間に固定されていて、運動する系の粒子の運動を妨げる、多くの粒子の働きと似ていると考えてよい。第一の種類の粒子が固定された粒子に当たるまでに進まなければならない平均の距離を L<sub>1</sub>、第二の種類の粒子についての同じ距離を L<sub>2</sub> とすると、それぞれの種類の粒子の平均の道のりは次の式で与えられる。

1/<i>l</i><sub>1</sub> = Aρ<sub>1</sub> + Bρ<sub>2</sub> + 1/L<sub>1</sub>、1/<i>l</i><sub>2</sub> = Cρ<sub>1</sub> + Dρ<sub>2</sub> + 1/L<sub>2</sub>　(38)

両側の気体の圧力と、気体が栓の中をしみ通ること（percolation）とが栓に及ぼす力学的な効果は、命題 XVII と命題 XVIII によって次のように求められる。

M<sub>1</sub>N<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub>/L<sub>1</sub> + M<sub>2</sub>N<sub>2</sub><i>v</i><sub>2</sub>V<sub>2</sub>/L<sub>2</sub> − (<i>dp</i><sub>1</sub>/<i>dx</i>)・(<i>l</i><sub>1</sub>/L<sub>1</sub>) − (<i>dp</i><sub>2</sub>/<i>dx</i>)・(<i>l</i><sub>2</sub>/L<sub>2</sub>) = 0　(39)

栓の両側の圧力が等しいなら、これは 0 でなければならない。ここで Q<sub>1</sub>, Q<sub>2</sub> を、並進の平均の運動によって栓を通って運ばれる量とすれば、Q<sub>1</sub> = ρ<sub>1</sub>V<sub>1</sub> = M<sub>1</sub>N<sub>1</sub>V<sub>1</sub> である。そしてグレアムの法則により

Q<sub>1</sub>/Q<sub>2</sub> = −√(M<sub>1</sub>/M<sub>2</sub>) = −<i>v</i><sub>2</sub>/<i>v</i><sub>1</sub>

であるから、

M<sub>1</sub>N<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub> = −M<sub>2</sub>N<sub>2</sub><i>v</i><sub>2</sub>V<sub>2</sub> = U

とおける。また両側の圧力が等しいから <i>dp</i><sub>2</sub>/<i>dx</i> = −<i>dp</i><sub>1</sub>/<i>dx</i> であり、栓のつりあいの式が一般に成り立つことができるのは、L<sub>1</sub> = L<sub>2</sub> かつ <i>l</i><sub>1</sub> = <i>l</i><sub>2</sub> のときに限られる。このことから A = C、B = D となる。ところで <i>v</i><sub>1</sub><sup>3</sup>B = <i>v</i><sub>2</sub><sup>3</sup>C であることがわかっている。K = 3A/<i>v</i><sub>1</sub><sup>3</sup> とおくと、

A = C = ⅓K<i>v</i><sub>1</sub><sup>3</sup>、B = D = ⅓K<i>v</i><sub>2</sub><sup>3</sup>　(40)

および

1/<i>l</i><sub>1</sub> = 1/<i>l</i><sub>2</sub> = K(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>) + 1/L　(41)

が得られる。拡散は、一部は並進の運動により、一部は揺動の運動による。並進の運動による部分を求めよう。

訳注：式 (41) の L は、L<sub>1</sub> = L<sub>2</sub> となった共通の値を指す。式 (41) の <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub> は圧力で、<i>p</i> = ρ<i>v</i><sup>2</sup>/3 を使えば (38)・(40) から出る。

### ¶90　20 巻 p.28

> The equation of motion of one of the gases through the plug is found by adding the forces due to pressures to those due to resistances, and equating these to the moving force, which in the case of slow motions may be neglected altogether. The result for the first is
>
> (<i>dp</i><sub>1</sub>/<i>dx</i>)(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)) + (<i>dp</i><sub>2</sub>/<i>dx</i>) Cρ<sub>1</sub><i>l</i><sub>2</sub> M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) + N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub> (M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))(V<sub>1</sub> − V<sub>2</sub>) + ρ<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub>/L = 0. (42)
>
> Making use of the simplifications we have just discovered, this becomes
>
> (<i>dp</i>/<i>dx</i>)(K<i>l</i>/(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>))(<i>v</i><sub>1</sub><sup>3</sup><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><sup>3</sup><i>p</i><sub>2</sub>) + K(<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>))(<i>p</i><sub>1</sub><i>v</i><sub>2</sub> + <i>p</i><sub>2</sub><i>v</i><sub>1</sub>)U + (1/<i>l</i>)U, (43)
>
> whence
>
> U = −(<i>dp</i>/<i>dx</i>) K<i>l</i>(<i>v</i><sub>1</sub><sup>3</sup><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><sup>3</sup><i>p</i><sub>2</sub>)/(K<i>v</i><sub>1</sub><i>v</i><sub>2</sub>(<i>p</i><sub>1</sub><i>v</i><sub>2</sub> + <i>p</i><sub>2</sub><i>v</i><sub>1</sub>) + (<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>)/L); (44)
>
> whence the rate of diffusion due to the motion of translation may be found; for
>
> Q<sub>1</sub> = U/<i>v</i><sub>1</sub>, and Q<sub>2</sub> = −U/<i>v</i><sub>2</sub>. (45)

栓を通る気体の一方の運動の方程式は、圧力による力を抵抗（resistance）による力に加え、それを運動を起こす力（moving force）に等しいとおけば得られる。運動を起こす力は、運動がゆっくりな場合にはまったく無視してよい。第一の気体についての結果は次のとおりである。

(<i>dp</i><sub>1</sub>/<i>dx</i>)・(Aρ<sub>1</sub><i>l</i><sub>1</sub> + Bρ<sub>2</sub><i>l</i><sub>1</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>)) + (<i>dp</i><sub>2</sub>/<i>dx</i>)・Cρ<sub>1</sub><i>l</i><sub>2</sub>・M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) + N<sub>1</sub>Bρ<sub>2</sub><i>v</i><sub>1</sub>・(M<sub>1</sub>M<sub>2</sub>/(M<sub>1</sub> + M<sub>2</sub>))・(V<sub>1</sub> − V<sub>2</sub>) + ρ<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub>/L = 0　(42)

いま見いだした簡単化を使うと、これは次のようになる。

(<i>dp</i>/<i>dx</i>)・(K<i>l</i>/(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>))・(<i>v</i><sub>1</sub><sup>3</sup><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><sup>3</sup><i>p</i><sub>2</sub>) + K・(<i>v</i><sub>1</sub><i>v</i><sub>2</sub>/(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>))・(<i>p</i><sub>1</sub><i>v</i><sub>2</sub> + <i>p</i><sub>2</sub><i>v</i><sub>1</sub>)・U + (1/<i>l</i>)・U　(43)

これから

U = −(<i>dp</i>/<i>dx</i>)・K<i>l</i>(<i>v</i><sub>1</sub><sup>3</sup><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><sup>3</sup><i>p</i><sub>2</sub>)/(K<i>v</i><sub>1</sub><i>v</i><sub>2</sub>(<i>p</i><sub>1</sub><i>v</i><sub>2</sub> + <i>p</i><sub>2</sub><i>v</i><sub>1</sub>) + (<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>)/L)　(44)

が得られ、これから並進の運動による拡散の速さ（rate of diffusion）が求められる。なぜなら

Q<sub>1</sub> = U/<i>v</i><sub>1</sub>、Q<sub>2</sub> = −U/<i>v</i><sub>2</sub>　(45)

であるからである。

訳注：式 (43) は誌面のとおり「= 0」が書かれていない。式 (44) を導くには、(43) の左辺を 0 とおく。式 (43)・(44) の <i>dp</i>/<i>dx</i> は、<i>dp</i><sub>1</sub>/<i>dx</i> を指すと読める（<i>dp</i><sub>2</sub>/<i>dx</i> = −<i>dp</i><sub>1</sub>/<i>dx</i> を使ってまとめた形）。式 (43) の最後の項は誌面では (1/<i>l</i>)U（小文字の <i>l</i>）だが、式 (42) の最後の項 ρ<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub>/L は U = M<sub>1</sub>N<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub> = ρ<sub>1</sub><i>v</i><sub>1</sub>V<sub>1</sub> によって (1/L)U になり、式 (44) の分母の (<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>)/L もこれと合う。(43) の <i>l</i> は L の誤植と見られるが、誌面のとおり置いた。(43) のほかの二つの項は、(42) に A = C = ⅓K<i>v</i><sub>1</sub><sup>3</sup>、B = D = ⅓K<i>v</i><sub>2</sub><sup>3</sup>、<i>p</i> = ρ<i>v</i><sup>2</sup>/3、M<sub>1</sub>/(M<sub>1</sub> + M<sub>2</sub>) = <i>v</i><sub>2</sub><sup>2</sup>/(<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>) を入れると、そのとおりに出る。

### ¶91　20 巻 p.28

> To find the diffusion due to the motion of agitation, we must find the value of <i>q</i><sub>1</sub>.
>
> <i>q</i><sub>1</sub> = −⅓ (<i>d</i>/<i>dx</i>)(ρ<sub>1</sub><i>v</i><sub>1</sub><i>l</i><sub>1</sub>),
>
> = −(L/<i>v</i><sub>1</sub>)(<i>d</i>/<i>dx</i>)(<i>p</i><sub>1</sub>/(1 + KL(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>)),
>
> <i>q</i><sub>1</sub> = −(<i>l</i><sup>2</sup>/(<i>v</i><sub>1</sub>L))(<i>dp</i>/<i>dx</i>)(1 + KL<i>v</i><sub>2</sub>(<i>p</i><sub>1</sub> + <i>p</i><sub>2</sub>)). (46)
>
> Similarly,
>
> <i>q</i><sub>2</sub> = +(<i>l</i><sup>2</sup>/(<i>v</i><sub>2</sub>L))(<i>dp</i>/<i>dx</i>)(1 + KL<i>v</i><sub>1</sub>(<i>p</i><sub>1</sub> + <i>p</i><sub>2</sub>)). (47)
>
> The whole diffusions are Q<sub>1</sub> + <i>q</i><sub>1</sub> and Q<sub>2</sub> + <i>q</i><sub>2</sub>. The values of <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> have a term not following Graham's law of the square roots of the specific gravities, but following the law of equal volumes. The closer the material of the plug, the less will this term affect the result.

揺動の運動による拡散を求めるには、<i>q</i><sub>1</sub> の値を求めなければならない。

<i>q</i><sub>1</sub> = −⅓・(<i>d</i>/<i>dx</i>)(ρ<sub>1</sub><i>v</i><sub>1</sub><i>l</i><sub>1</sub>)

= −(L/<i>v</i><sub>1</sub>)・(<i>d</i>/<i>dx</i>)(<i>p</i><sub>1</sub>/(1 + KL(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>))

<i>q</i><sub>1</sub> = −(<i>l</i><sup>2</sup>/(<i>v</i><sub>1</sub>L))・(<i>dp</i>/<i>dx</i>)・(1 + KL<i>v</i><sub>2</sub>(<i>p</i><sub>1</sub> + <i>p</i><sub>2</sub>))　(46)

同じようにして

<i>q</i><sub>2</sub> = +(<i>l</i><sup>2</sup>/(<i>v</i><sub>2</sub>L))・(<i>dp</i>/<i>dx</i>)・(1 + KL<i>v</i><sub>1</sub>(<i>p</i><sub>1</sub> + <i>p</i><sub>2</sub>))　(47)

拡散の全体は Q<sub>1</sub> + <i>q</i><sub>1</sub> と Q<sub>2</sub> + <i>q</i><sub>2</sub> である。<i>q</i><sub>1</sub> と <i>q</i><sub>2</sub> の値には、比重の平方根についてのグレアムの法則には従わず、等しい体積の法則に従う項がある。栓の材料が密であるほど、この項が結果に及ぼす影響は小さくなる。

訳注：<i>q</i><sub>1</sub> の二行目は、誌面では分母の KL(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub> の閉じの括弧が無く、すぐ後に「,」が来る。刷りの落ちと見て、原文・訳とも誌面のとおり括弧を一つ欠いたまま置いた。正しくは <i>p</i><sub>1</sub>/(1 + KL(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>)) で、これは <i>l</i> = L/(1 + KL(<i>v</i><sub>1</sub><i>p</i><sub>1</sub> + <i>v</i><sub>2</sub><i>p</i><sub>2</sub>))（式 (41) から）と ρ<sub>1</sub><i>v</i><sub>1</sub> = 3<i>p</i><sub>1</sub>/<i>v</i><sub>1</sub> を一行目に入れた形である。そこから <i>dp</i><sub>2</sub>/<i>dx</i> = −<i>dp</i><sub>1</sub>/<i>dx</i> として微分すると式 (46) になり、(46) の <i>dp</i>/<i>dx</i> は <i>dp</i><sub>1</sub>/<i>dx</i> を指す。「等しい体積の法則」は、反対の向きに等しい体積の気体が入れ替わるという法則を指すと読める（次の命題 XX で、管でつないだ二つの容器のあいだの拡散として扱われる）。

### ¶92　20 巻 p.28–29

> Our assumptions that the porous plug acts like a system of fixed particles, and that Graham's law is fulfilled more accurately the more compact the material of the plug, are scarcely sufficiently well verified for the foundation of a theory of gases; and [p.29] even if we admit the original assumption that they are systems of moving elastic particles, we have not very good evidence as yet for the relation among the quantities A, B, C, and D.

多孔質の栓が固定された粒子の系のように働くという仮定と、栓の材料が緻密であるほどグレアムの法則がより正確に満たされるという仮定は、気体の理論の基礎にするほど十分に確かめられているとは、とても言えない。そして、たとえ気体が動く弾性のある粒子の系であるというもとの仮定を認めるとしても、量 A・B・C・D のあいだの関係については、今のところあまりよい証拠がない。

訳注：原文の「and」は次の頁の文に続くので、訳は「そして」で切った。

### ¶93　20 巻 p.29

> Prop. XX. *To find the rate of diffusion between two vessels connected by a tube.*

命題 XX　管でつながれた二つの容器（vessel）のあいだの拡散（diffusion）の速さを求めること。

### ¶94　20 巻 p.29

> When diffusion takes place through a large opening, such as a tube connecting two vessels, the question is simplified by the absence of the porous diffusion plug; and since the pressure is constant throughout the apparatus, the volumes of the two gases passing opposite ways through the tube at the same time must be equal. Now the quantity of gas which passes through the tube is due partly to the motion of agitation as in Prop. XIV., and partly to the mean motion of translation as in Prop. XV.

二つの容器をつなぐ管のような大きな開口を通って拡散が起こるときには、拡散のための多孔質の栓が無いので、問題は簡単になる。また装置の全体で圧力（pressure）が一定なので、同じ時間に管を反対の向きに通る二つの気体の体積（volume）は等しくなければならない。さて、管を通る気体の量は、一部は命題 XIV のような揺動の運動（motion of agitation）により、一部は命題 XV のような平均の並進の運動（mean motion of translation）による。

### ¶95　20 巻 p.29

> Let us suppose the volumes of the two vessels to be <i>a</i> and <i>b</i>, and the length of the tube between them <i>c</i>, and its transverse section <i>s</i>. Let <i>a</i> be filled with the first gas, and <i>b</i> with the second at the commencement of the experiment, and let the pressure throughout the apparatus be P.

二つの容器の体積を <i>a</i> と <i>b</i>、そのあいだの管の長さを <i>c</i>、管の横の断面を <i>s</i> とする。実験の初めに <i>a</i> を第一の気体で、<i>b</i> を第二の気体で満たし、装置の全体の圧力を P とする。

訳注：誌面のこの所に図がある（二つの円の容器 <i>a</i>・<i>b</i> を細い管でつないだ線の図）。

### ¶96　20 巻 p.29

> Let a volume <i>y</i> of the first gas pass from <i>a</i> to <i>b</i>, and a volume <i>y</i>′ of the second pass from <i>b</i> to <i>a</i>; then if <i>p</i><sub>1</sub> and <i>p</i><sub>2</sub> represent the pressures in <i>a</i> due to the first and second kinds of gas, and <i>p</i>′<sub>1</sub> and <i>p</i>′<sub>2</sub> the same in the vessel <i>b</i>,
>
> <i>p</i><sub>1</sub>=((<i>a</i>−<i>y</i>)/<i>a</i>)P, <i>p</i><sub>2</sub>=(<i>y</i>′/<i>a</i>)P, <i>p</i>′<sub>1</sub>=(<i>y</i>/<i>b</i>)P, <i>p</i>′<sub>2</sub>=((<i>b</i>−<i>y</i>′)/<i>b</i>)P. (48)
>
> Since there is still equilibrium,
>
> <i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>=<i>p</i>′<sub>1</sub>+<i>p</i>′<sub>2</sub>,
>
> which gives
>
> <i>y</i>=<i>y</i>′ and <i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>=P=<i>p</i>′<sub>1</sub>+<i>p</i>′<sub>2</sub>. (49)
>
> The rate of diffusion will be +<i>dy</i>/<i>dt</i> for the one gas, and −<i>dy</i>/<i>dt</i> for the other, measured in volume of gas at pressure P.

第一の気体の体積 <i>y</i> が <i>a</i> から <i>b</i> へ移り、第二の気体の体積 <i>y</i>′ が <i>b</i> から <i>a</i> へ移るとする。容器 <i>a</i> の中で第一の種類と第二の種類の気体による圧力を <i>p</i><sub>1</sub> と <i>p</i><sub>2</sub>、容器 <i>b</i> の中の同じものを <i>p</i>′<sub>1</sub> と <i>p</i>′<sub>2</sub> で表すと、

<i>p</i><sub>1</sub>=((<i>a</i>−<i>y</i>)/<i>a</i>)P, <i>p</i><sub>2</sub>=(<i>y</i>′/<i>a</i>)P, <i>p</i>′<sub>1</sub>=(<i>y</i>/<i>b</i>)P, <i>p</i>′<sub>2</sub>=((<i>b</i>−<i>y</i>′)/<i>b</i>)P　(48)

である。なお釣り合いがあるので、

<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>=<i>p</i>′<sub>1</sub>+<i>p</i>′<sub>2</sub>

であり、これから

<i>y</i>=<i>y</i>′ かつ <i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>=P=<i>p</i>′<sub>1</sub>+<i>p</i>′<sub>2</sub>　(49)

が得られる。拡散の速さは、圧力 P の気体の体積で測って、一方の気体では +<i>dy</i>/<i>dt</i>、他方では −<i>dy</i>/<i>dt</i> になる。

### ¶97　20 巻 p.29

> Now the rate of diffusion of the first gas will be
>
> <i>dy</i>/<i>dt</i>=<i>s</i>(<i>k</i><sub>1</sub><i>q</i><sub>1</sub>+<i>p</i><sub>1</sub>V<sub>1</sub>)/P=<i>s</i>(−⅓<i>v</i><sub>1</sub>(<i>d</i>/<i>dx</i>)(<i>p</i><sub>1</sub><i>l</i><sub>1</sub>)+<i>p</i><sub>1</sub>V<sub>1</sub>)/P; (50)
>
> [p.30] and that of the second,
>
> −<i>dy</i>/<i>dt</i>=<i>s</i>(−⅓<i>v</i><sub>2</sub>(<i>d</i>/<i>dx</i>)(<i>p</i><sub>2</sub><i>l</i><sub>2</sub>)+<i>p</i><sub>2</sub>V<sub>2</sub>)/P. (51)
>
> We have also the equation, derived from Props. XVI. and XVII.,
>
> (<i>dp</i><sub>1</sub>/<i>dx</i>)(Aρ<sub>1</sub><i>l</i><sub>1</sub>(M<sub>1</sub>+M<sub>2</sub>)+Bρ<sub>2</sub><i>l</i><sub>1</sub>M<sub>1</sub>−Cρ<sub>1</sub><i>l</i><sub>2</sub>M<sub>1</sub>) +Bρ<sub>1</sub>ρ<sub>2</sub><i>v</i><sub>1</sub>M<sub>2</sub>(V<sub>1</sub>−V<sub>2</sub>)=0. (52)

さて、第一の気体の拡散の速さは

<i>dy</i>/<i>dt</i>=<i>s</i>(<i>k</i><sub>1</sub><i>q</i><sub>1</sub>+<i>p</i><sub>1</sub>V<sub>1</sub>)/P=<i>s</i>(−⅓<i>v</i><sub>1</sub>(<i>d</i>/<i>dx</i>)(<i>p</i><sub>1</sub><i>l</i><sub>1</sub>)+<i>p</i><sub>1</sub>V<sub>1</sub>)/P　(50)

となり、第二の気体の拡散の速さは

−<i>dy</i>/<i>dt</i>=<i>s</i>(−⅓<i>v</i><sub>2</sub>(<i>d</i>/<i>dx</i>)(<i>p</i><sub>2</sub><i>l</i><sub>2</sub>)+<i>p</i><sub>2</sub>V<sub>2</sub>)/P　(51)

となる。また、命題 XVI と XVII から導いた次の式もある。

(<i>dp</i><sub>1</sub>/<i>dx</i>)(Aρ<sub>1</sub><i>l</i><sub>1</sub>(M<sub>1</sub>+M<sub>2</sub>)+Bρ<sub>2</sub><i>l</i><sub>1</sub>M<sub>1</sub>−Cρ<sub>1</sub><i>l</i><sub>2</sub>M<sub>1</sub>)+Bρ<sub>1</sub>ρ<sub>2</sub><i>v</i><sub>1</sub>M<sub>2</sub>(V<sub>1</sub>−V<sub>2</sub>)=0　(52)

訳注：(52) は誌面で二行に分けて組まれている（二行目は「+Bρ<sub>1</sub>ρ<sub>2</sub>…」から）。(50)・(51) の <i>q</i>・<i>l</i>・<i>k</i> は命題 XIV・XV の記号で、<i>l</i> は道のりの平均の長さ。

### ¶98　20 巻 p.30

> From these three equations we can eliminate V<sub>1</sub> and V<sub>2</sub>, and find <i>dy</i>/<i>dt</i> in terms of <i>p</i> and <i>dp</i>/<i>dx</i>, so that we may write
>
> <i>dy</i>/<i>dt</i>=<i>f</i>(<i>p</i><sub>1</sub>, <i>dp</i><sub>1</sub>/<i>dx</i>). (53)

この三つの式から V<sub>1</sub> と V<sub>2</sub> を消去して、<i>dy</i>/<i>dt</i> を <i>p</i> と <i>dp</i>/<i>dx</i> で表すことができる。そこで次のように書ける。

<i>dy</i>/<i>dt</i>=<i>f</i>(<i>p</i><sub>1</sub>, <i>dp</i><sub>1</sub>/<i>dx</i>)　(53)

### ¶99　20 巻 p.30

> Since the capacity of the tube is small compared with that of the vessels, we may consider <i>dy</i>/<i>dt</i> constant through the whole length of the tube. We may then solve the differential equation in <i>p</i> and <i>x</i>; and then making <i>p</i>=<i>p</i><sub>1</sub> when <i>x</i>=0, and <i>p</i>=<i>p</i>′<sub>1</sub> when <i>x</i>=<i>c</i>, and substituting for <i>p</i><sub>1</sub> and <i>p</i>′<sub>1</sub> their values in terms of <i>y</i>, we shall have a differential equation in <i>y</i> and <i>t</i>, which being solved, will give the amount of gas diffused in a given time.

管の容積（capacity）は容器の容積に比べて小さいので、<i>dy</i>/<i>dt</i> は管の全長にわたって一定と考えてよい。そうすれば <i>p</i> と <i>x</i> についての微分方程式を解くことができる。次に、<i>x</i>=0 で <i>p</i>=<i>p</i><sub>1</sub>、<i>x</i>=<i>c</i> で <i>p</i>=<i>p</i>′<sub>1</sub> とし、<i>p</i><sub>1</sub> と <i>p</i>′<sub>1</sub> に <i>y</i> で表した値を代入すると、<i>y</i> と <i>t</i> についての微分方程式が得られる。これを解けば、与えられた時間に拡散する気体の量が求まる。

### ¶100　20 巻 p.30

> The solution of these equations would be difficult unless we assume relations among the quantities A, B, C, D, which are not yet sufficiently established in the case of gases of different density. Let us suppose that in a particular case the two gases have the same density, and that the four quantities A, B, C, D are all equal.

これらの式を解くのは、量 A・B・C・D のあいだに関係を仮定しないかぎり難しい。そしてその関係は、密度（density）の異なる気体の場合にはまだ十分に確かめられていない。そこで特別な場合として、二つの気体の密度が同じで、四つの量 A・B・C・D がすべて等しいとしよう。

### ¶101　20 巻 p.30

> The volume diffused, owing to the motion of agitation of the particles, is then
>
> −⅓(<i>s</i>/P)(<i>dp</i>/<i>dx</i>)<i>vl</i>,
>
> and that due to the motion of translation, or the interpenetration of the two gases in opposite streams, is
>
> −(<i>s</i>/P)(<i>dp</i>/<i>dx</i>)(<i>kl</i>/<i>v</i>).
>
> The values of <i>v</i> are distributed according to the law of Prop. IV., so that the mean value of <i>v</i> is 2α/√π, and that of 1/<i>v</i> is 2/(√π α), that of <i>k</i> being ½α<sup>2</sup>. The diffusions due to these two causes are [p.31] therefore in the ratio of 2 to 3, and their sum is
>
> <i>dy</i>/<i>dt</i>=−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/P)(<i>dp</i>/<i>dx</i>). (54)
>
> If we suppose <i>dy</i>/<i>dt</i> constant throughout the tube, or, in other words, if we regard the motion as *steady* for a short time, then <i>dp</i>/<i>dx</i> will be constant and equal to (<i>p</i>′<sub>1</sub>−<i>p</i><sub>1</sub>)/<i>c</i>; or substituting from (48),
>
> <i>dy</i>/<i>dt</i>=−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/<i>abc</i>)((<i>a</i>+<i>b</i>)<i>y</i>−<i>ab</i>), (55)
>
> whence
>
> <i>y</i>=(<i>ab</i>/(<i>a</i>+<i>b</i>))(1−<i>e</i><sup>−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/<i>abc</i>)(<i>a</i>+<i>b</i>)<i>t</i></sup>). (56)

このとき、粒子（particle）の揺動の運動によって拡散する体積は

−⅓(<i>s</i>/P)(<i>dp</i>/<i>dx</i>)<i>vl</i>

であり、並進の運動、つまり二つの気体が反対の向きの流れとなって互いに入り込むことによるものは

−(<i>s</i>/P)(<i>dp</i>/<i>dx</i>)(<i>kl</i>/<i>v</i>)

である。<i>v</i> の値は命題 IV の法則にしたがって分布するので、<i>v</i> の平均の値は 2α/√π、1/<i>v</i> の平均の値は 2/(√π α) であり、<i>k</i> の値は ½α<sup>2</sup> である。したがって、この二つの原因による拡散は 2 対 3 の比になり、その和は

<i>dy</i>/<i>dt</i>=−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/P)(<i>dp</i>/<i>dx</i>)　(54)

である。<i>dy</i>/<i>dt</i> が管の全体で一定だとすれば、言いかえれば短い時間のあいだ運動を定常（*steady*）とみなせば、<i>dp</i>/<i>dx</i> は一定で (<i>p</i>′<sub>1</sub>−<i>p</i><sub>1</sub>)/<i>c</i> に等しい。(48) から代入すると

<i>dy</i>/<i>dt</i>=−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/<i>abc</i>)((<i>a</i>+<i>b</i>)<i>y</i>−<i>ab</i>)　(55)

となり、これから

<i>y</i>=(<i>ab</i>/(<i>a</i>+<i>b</i>))(1−<i>e</i><sup>−⁴⁄₃√(2<i>k</i>/π)(<i>sl</i>/<i>abc</i>)(<i>a</i>+<i>b</i>)<i>t</i></sup>)　(56)

が得られる。

訳注：誌面では 1/<i>v</i> の平均の値の分母は「√πα」と組まれ、根号の上の線は π の上だけにある。2/(√π α) と読む（命題 IV の分布で 1/<i>v</i> の平均を計算しても 2/(√π α) になる）。(56) の指数の中の係数は小さな活字で ⁴⁄₈ にも見えるが、(55) を解くと ⁴⁄₃ になるので ⁴⁄₃ と読む。また、二つの拡散の和は、上の平均の値を入れると ⅓・(2α/√π)・<i>l</i>＋½α<sup>2</sup>・(2/(√π α))・<i>l</i>＝(5/3)(α/√π)<i>l</i> となり、2 対 3 の比とは合うが、√(2<i>k</i>/π)＝α/√π なので (54) の係数は ⁵⁄₃ になるはずである。誌面は ⁴⁄₃ で、(55)〜(57) もこの ⁴⁄₃ を引き継いでいる。誌面のとおりに置いた。

### ¶102　20 巻 p.31

> By choosing pairs of gases of equal density, and ascertaining the amount of diffusion in a given time, we might determine the value of <i>l</i> in this expression. The diffusion of nitrogen into carbonic oxide or of deutoxide of nitrogen into carbonic acid, would be suitable cases for experiment. The only existing experiment which approximately fulfils the conditions is one by Graham, quoted by Herapath from Brande's Quarterly Journal of Science, vol. xviii. p. 76.

密度の等しい気体の組を選び、与えられた時間に拡散する量を確かめれば、この式の <i>l</i> の値を決められるだろう。窒素の一酸化炭素（carbonic oxide）への拡散や、一酸化窒素（deutoxide of nitrogen）の炭酸（carbonic acid）への拡散は、実験に適した場合だろう。この条件をおおよそ満たす既にある実験は、グレアムによるものただ一つで、ヘラパスがブランドの『季刊科学雑誌』（Quarterly Journal of Science）第 18 巻 76 頁から引いている。

訳注：carbonic oxide は今の一酸化炭素、carbonic acid は今の二酸化炭素（炭酸ガス）。窒素（分子量 28）と一酸化炭素（28）は密度が等しい。deutoxide of nitrogen は当時の呼び名で、今の一酸化窒素（NO、分子量 30）に当たる。一酸化窒素の密度は二酸化炭素（44）よりかなり小さく、二酸化炭素と密度が等しいのは亜酸化窒素（N<sub>2</sub>O、分子量 44、当時の protoxide of nitrogen）である。誌面の語は取り違えの可能性があるが、誌面のとおりに訳した。

### ¶103　20 巻 p.31

> A tube 9 inches long and 0·9 inch diameter, communicated with the atmosphere by a tube 2 inches long and 0·12 inch diameter; 152 parts of olefiant gas being placed in the tube, the quantity remaining after four hours was 99 parts.

長さ 9 インチ・直径 0.9 インチの管が、長さ 2 インチ・直径 0.12 インチの管で大気とつながっていた。管に油生気体（olefiant gas）を 152 部入れると、4 時間の後に残った量は 99 部であった。

訳注：olefiant gas は今のエチレン（分子量 28）で、空気との密度の差は小さい。

### ¶104　20 巻 p.31

> In this case there is not much difference of specific gravity between the gases, and we have <i>a</i>=9×(0·9)<sup>2</sup>π/4 cubic inches, <i>b</i>=∞, <i>c</i>=2 inches, and <i>s</i>=(0·12)<sup>2</sup>π/4 square inches;
>
> <i>l</i>=√(π/2<i>k</i>) ¾ (<i>ac</i>/<i>s</i>) log<sub><i>e</i></sub> 10 . (1/<i>t</i>) . log<sub>10</sub>(<i>a</i>/(<i>a</i>−<i>y</i>)); (57)
>
> ∴ <i>l</i>=0·00000256 inch = 1/389000 inch. (58)

この場合、二つの気体の比重（specific gravity）にあまり差は無く、<i>a</i>=9×(0.9)<sup>2</sup>π/4 立方インチ、<i>b</i>=∞、<i>c</i>=2 インチ、<i>s</i>=(0.12)<sup>2</sup>π/4 平方インチである。したがって

<i>l</i>=√(π/2<i>k</i>)・¾・(<i>ac</i>/<i>s</i>)・log<sub><i>e</i></sub> 10・(1/<i>t</i>)・log<sub>10</sub>(<i>a</i>/(<i>a</i>−<i>y</i>))　(57)

∴ <i>l</i>=0.00000256 インチ=1/389000 インチ　(58)

となる。

訳注：誌面の「0·9」などは小数点を中点で組んだもの。(57) は (56) で <i>b</i>=∞ としたもの。(58) の二つの値は少しずれる（1/389000＝0.00000257、0.00000256 の逆数は約 390600）。

### ¶105　20 巻 p.31

> Prop. XXI. *To find the amount of energy which crosses unit of area in unit of time when the velocity of agitation is greater on one side of the area than on the other.*

命題 XXI　揺動の速度が、ある面の一方の側で他方の側より大きいとき、単位の時間に単位の面積を横切るエネルギー（energy）の量を求めること。

訳注：誌面の「To」の T は崩れた字形で組まれている（誤植か版の傷と見える）。

### ¶106　20 巻 p.31

> The energy of a single particle is composed of two parts,—the *vis viva* of the centre of gravity, and the *vis viva* of the various motions of rotation round that centre, or, if the particle be capable of internal motions, the *vis viva* of these. We shall suppose that the whole *vis viva* bears a constant proportion to that [p.32] due to the motion of the centre of gravity, or
>
> E=½βM<i>v</i><sup>2</sup>,
>
> where β is a coefficient, the experimental value of which is 1·634. Substituting E for M in Prop. XIV., we get for the transference of energy across unit of area in unit of time,
>
> J<i>gq</i>=−⅓(<i>d</i>/<i>dx</i>)(½βM<i>v</i><sup>2</sup>N<i>vl</i>),
>
> where J is the mechanical equivalent of heat in foot-pounds, and <i>q</i> is the transfer of heat in thermal units.

一つの粒子のエネルギーは二つの部分からなる。一つは重心（centre of gravity）の活力（*vis viva*）、もう一つはその中心のまわりのさまざまな回転（rotation）の運動の活力、あるいは粒子が内部の運動をなしうるなら、その運動の活力である。全体の活力は重心の運動による活力に一定の比をもつと仮定する。すなわち

E=½βM<i>v</i><sup>2</sup>

であり、β は係数で、実験から得た値は 1.634 である。命題 XIV で M の代わりに E を置くと、単位の時間に単位の面積を横切るエネルギーの移りについて

J<i>gq</i>=−⅓(<i>d</i>/<i>dx</i>)(½βM<i>v</i><sup>2</sup>N<i>vl</i>)

が得られる。ここで J はフィート・ポンドで表した熱の仕事当量（mechanical equivalent of heat）、<i>q</i> は熱量の単位（thermal unit）で表した熱の移りである。

訳注：β=1.634 は、全体の活力と重心の運動の活力の比。J<i>gq</i> の <i>g</i> は重力の加速度で、重さの単位（ポンド）を力学の単位に直すために掛かる（誌面に説明は無い）。(60) の <i>p</i> を力学の単位で測ると <i>p</i> に <i>g</i> が掛かって両辺の <i>g</i> が消え、次の段（¶107）の値から (61) の係数がほぼ出ることとも合う。

### ¶107　20 巻 p.32

> Now MN=ρ, and <i>l</i>=1/(Aρ), so that MN<i>l</i>=1/A;
>
> ∴ J<i>gq</i>=−½(β<i>v</i><sup>2</sup>/A)(<i>dv</i>/<i>dx</i>). (59)
>
> Also, if T is the absolute temperature,
>
> (1/T)(<i>d</i>T/<i>dx</i>)=(2/<i>v</i>)(<i>dv</i>/<i>dx</i>);
>
> ∴ J<i>gq</i>=−¾β<i>plv</i>(1/T)(<i>d</i>T/<i>dx</i>), (60)
>
> where <i>p</i> must be measured in dynamical units of force.

さて MN=ρ、<i>l</i>=1/(Aρ) なので、MN<i>l</i>=1/A である。したがって

J<i>gq</i>=−½(β<i>v</i><sup>2</sup>/A)(<i>dv</i>/<i>dx</i>)　(59)

となる。また T を絶対温度（absolute temperature）とすると

(1/T)(<i>d</i>T/<i>dx</i>)=(2/<i>v</i>)(<i>dv</i>/<i>dx</i>)

なので、

J<i>gq</i>=−¾β<i>plv</i>(1/T)(<i>d</i>T/<i>dx</i>)　(60)

となる。ここで <i>p</i> は力の力学の単位（dynamical units of force）で測らなければならない。

### ¶108　20 巻 p.32

> Let J=772 foot-pounds, <i>p</i>=2116 pounds to square foot, <i>l</i>=1/400000 inch, <i>v</i>=1505 feet per second, T=522 or 62° Fahrenheit; then
>
> <i>q</i>=(T′−T)/40000<i>x</i>, (61)
>
> where <i>q</i> is the flow of heat in thermal units per square foot of area; and T′, and T are the temperatures at the two sides of a stratum of air <i>x inches</i> thick.

J=772 フィート・ポンド、<i>p</i>=1 平方フィートあたり 2116 ポンド、<i>l</i>=1/400000 インチ、<i>v</i>=毎秒 1505 フィート、T=522（華氏 62 度）とすると

<i>q</i>=(T′−T)/40000<i>x</i>　(61)

となる。ここで <i>q</i> は面積 1 平方フィートあたりの熱量の単位で表した熱の流れ、T′ と T は厚さ <i>x</i> インチの空気の層（stratum）の両側の温度である。

訳注：T=522 は華氏の目盛りで測った絶対温度（62+460）。<i>l</i> は (58) の 1/389000 インチを丸めた値と見える。(60) にこれらの値と β=1.634 を入れると係数はおよそ 1/41000 になり、誌面の 1/40000 は丸めた値と見える。誌面では「<i>x inches</i>」の inches も斜体で組まれている。

### ¶109　20 巻 p.32

> In Prof. Rankine's work on the Steam-engine, p. 259, values of the *thermal resistance*, or the reciprocal of the *conductivity*, are given for various substances as computed from a Table of conductivities deduced by M. Peclet from experiments by M. Despretz:—
>
> | | Resistance. |
> |---|---|
> | Gold, Platinum, Silver | 0·0036 |
> | Copper | 0·0040 |
> | Iron | 0·0096 |
> | Lead | 0·0198 |
> | Brick | 0·3306 |
> | *Air by our calculation* | 40000 |

ランキン教授の蒸気機関（Steam-engine）についての著作の 259 頁に、さまざまな物質について熱の抵抗（*thermal resistance*）、すなわち伝導率（*conductivity*）の逆数の値が載っている。これはペクレ氏がデプレ氏の実験から導いた伝導率の表から計算したものである。

| | 抵抗 |
|---|---|
| 金・白金・銀 | 0.0036 |
| 銅 | 0.0040 |
| 鉄 | 0.0096 |
| 鉛 | 0.0198 |
| 煉瓦 | 0.3306 |
| *われわれの計算による空気* | 40000 |

訳注：誌面では表の各行の名と数のあいだを点線でつないでいる。表の見出し「Resistance.」は数の列の上にある。

### ¶110　20 巻 p.32–33

> It appears, therefore, that the resistance of a stratum of air to the conduction of heat is about 10,000,000 times greater than [p.33] that of a stratum of copper of equal thickness. It would be almost impossible to establish the value of the conductivity of a gas by direct experiment, as the heat radiated from the sides of the vessel would be far greater than the heat conducted through the air, even if currents could be entirely prevented.

したがって、熱の伝導（conduction of heat）に対する空気の層の抵抗（resistance）は、同じ厚さの銅の層の抵抗の約 10,000,000 倍大きい。気体の伝導率（conductivity）の値を直接の実験で確かめることは、ほとんどできないだろう。流れをすっかり止められたとしても、容器の壁から放射される熱が、空気を通って伝導される熱よりはるかに大きくなるからである。

訳注：この文は次の頁で「同じ厚さの銅の層の抵抗の約 10,000,000 倍大きい」と続く。

訳注：「約 10,000,000 倍大きい」は前の頁の終わりの語（about 10,000,000 times greater than）で、日本語の語順のためここに置いた。

### ¶111　20 巻 p.33

> Part III. *On the Collision of Perfectly Elastic Bodies of any Form.*

第 III 部　任意の形の完全に弾性のある物体の衝突について

### ¶112　20 巻 p.33

> When two perfectly smooth spheres strike each other, the force which acts between them always passes through their centres of gravity; and therefore their motions of rotation, if they have any, are not affected by the collision, and do not enter into our calculations. But; when the bodies are not spherical, the force of compact will not, in general, be in the line joining their centres of gravity; and therefore the force of impact will depend both on the motion of the centres and the motions of rotation before impact, and it will affect both these motions after impact.

二つの完全に滑らかな球がぶつかり合うとき、その間に働く力はつねに両方の重心（centre of gravity）を通る。そのため、球が回転（rotation）の運動をしていても、その運動は衝突（collision）の影響を受けず、私たちの計算には入ってこない。しかし物体が球形でないときは、衝突の力は一般には重心どうしを結ぶ線の上にない。そのため衝突の力は、衝突の前の中心の運動と回転の運動の両方によって決まり、衝突の後のこの二つの運動の両方に影響する。

訳注：「But;」のセミコロンは誌面のとおり。「force of compact」は誌面のとおりで、impact の誤植と見られる。訳は「衝突の力」とした。

### ¶113　20 巻 p.33

> In this way the velocities of the centres and the velocities of rotation will act and react on each other, so that finally there will be some relation established between them; and since the rotations of the particles about their three axes are quantities related to each other in the same way as the three velocities of their centres, the reasoning of Prop. IV. will apply to rotation as well as velocity, and both will be distributed according to the law
>
> <i>d</i>N/<i>dx</i> = N (1/(α√π)) <i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>.
>
> Also, by Prop. V., if <i>x</i> be the average velocity of one set of particles, and <i>y</i> that of another, then the average value of the sum or difference of the velocities is
>
> √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>);
>
> from which it is easy to see that, if in each individual case
>
> <i>u</i> = <i>ax</i> + <i>by</i> + <i>cz</i>,
>
> where <i>x</i>, <i>y</i>, <i>z</i> are independent quantities distributed according to the law above stated, then the *average values* of these quantities will be connected by the equation
>
> <i>u</i><sup>2</sup> = <i>a</i><sup>2</sup><i>x</i><sup>2</sup> + <i>b</i><sup>2</sup><i>y</i><sup>2</sup> + <i>c</i><sup>2</sup><i>z</i><sup>2</sup>.

このようにして、中心の速度（velocity）と回転の速度は互いに作用し合い、最後にはその間に何らかの関係ができあがる。また、粒子（particle）の三つの軸（axis）のまわりの回転は、中心の三つの速度と同じ仕方で互いに関わる量である。そのため命題 IV の推論は速度だけでなく回転にも当てはまり、どちらも次の法則に従って分布する。

<i>d</i>N/<i>dx</i> = N・(1/(α√π))・<i>e</i><sup>−<i>x</i><sup>2</sup>/α<sup>2</sup></sup>

また命題 V によれば、ある組の粒子の平均の速度を <i>x</i>、別の組の平均の速度を <i>y</i> とすると、速度の和または差の平均の値は

√(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)

である。ここから次のことが容易にわかる。一つ一つの場合に

<i>u</i> = <i>ax</i> + <i>by</i> + <i>cz</i>

であり、<i>x</i>, <i>y</i>, <i>z</i> が上に述べた法則に従って分布する互いに独立な量であるなら、これらの量の*平均の値*は次の式で結ばれる。

<i>u</i><sup>2</sup> = <i>a</i><sup>2</sup><i>x</i><sup>2</sup> + <i>b</i><sup>2</sup><i>y</i><sup>2</sup> + <i>c</i><sup>2</sup><i>z</i><sup>2</sup>

訳注：分布の法則の式は誌面では N の後に分数 1/(α√π) と <i>e</i> の累乗が並ぶ形で組まれている。最後の式では、<i>u</i>・<i>x</i>・<i>y</i>・<i>z</i> がそれぞれの量の平均の値を表している（命題 V と同じ書き方）。

### ¶114　20 巻 p.33

> Prop. XXII. *Two perfectly elastic bodies of any form strike each other: given their motions before impact, and the line of impact, to find their motions after impact.*

命題 XXII　任意の形の完全に弾性のある（perfectly elastic）二つの物体がぶつかり合う。衝突の前の運動と衝突の線（line of impact）が与えられたとき、衝突の後の運動を求めること。

### ¶115　20 巻 p.34

> Let M<sub>1</sub> and M<sub>2</sub> be the centres of gravity of the two bodies. M<sub>1</sub> X<sub>1</sub>, M<sub>1</sub> Y<sub>1</sub>, and M<sub>1</sub> Z<sub>1</sub> the principal axes of the first; and M<sub>2</sub> X<sub>2</sub>, M<sub>2</sub>, Y<sub>2</sub>, and M<sub>2</sub> Z<sub>2</sub> those of the second. Let I be the point of impact, and R<sub>1</sub> I R<sub>2</sub> the line of impact.

二つの物体の重心を M<sub>1</sub>、M<sub>2</sub> とし、M<sub>1</sub> X<sub>1</sub>、M<sub>1</sub> Y<sub>1</sub>、M<sub>1</sub> Z<sub>1</sub> を一つ目の物体の主軸（principal axis）、M<sub>2</sub> X<sub>2</sub>、M<sub>2</sub> Y<sub>2</sub>、M<sub>2</sub> Z<sub>2</sub> を二つ目の物体の主軸とする。I を衝突の点（point of impact）、R<sub>1</sub> I R<sub>2</sub> を衝突の線とする。

訳注：誌面のこの所の右に図がある（二つの重心 M<sub>1</sub>・M<sub>2</sub> から出る主軸 X・Y・Z と、点 I を通る衝突の線 R<sub>1</sub> I R<sub>2</sub> を示す線の図）。「M<sub>2</sub>, Y<sub>2</sub>」の間の余分なコンマは誌面のとおり。

### ¶116　20 巻 p.34

> Let the coordinates of I with respect to M<sub>1</sub> be <i>x</i><sub>1</sub> <i>y</i><sub>1</sub> <i>z</i><sub>1</sub>, and with respect to M<sub>2</sub> let them be <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> <i>z</i><sub>2</sub>.

M<sub>1</sub> を基準とした I の座標を <i>x</i><sub>1</sub> <i>y</i><sub>1</sub> <i>z</i><sub>1</sub> とし、M<sub>2</sub> を基準とした座標を <i>x</i><sub>2</sub> <i>y</i><sub>2</sub> <i>z</i><sub>2</sub> とする。

### ¶117　20 巻 p.34

> Let the direction-cosines of the line of impact R<sub>1</sub> I R<sub>2</sub> be
>
> <i>l</i><sub>1</sub> <i>m</i><sub>1</sub> <i>n</i><sub>1</sub> with respect to M<sub>1</sub>, and <i>l</i><sub>2</sub> <i>m</i><sub>2</sub> <i>n</i><sub>2</sub> with respect to M<sub>2</sub>.

衝突の線 R<sub>1</sub> I R<sub>2</sub> の方向余弦（direction-cosine）を、M<sub>1</sub> を基準として

<i>l</i><sub>1</sub> <i>m</i><sub>1</sub> <i>n</i><sub>1</sub>、M<sub>2</sub> を基準として <i>l</i><sub>2</sub> <i>m</i><sub>2</sub> <i>n</i><sub>2</sub>

とする。

### ¶118　20 巻 p.34

> Let M<sub>1</sub> and M<sub>2</sub> be the masses, and A<sub>1</sub> B<sub>1</sub> C<sub>1</sub> and A<sub>2</sub> B<sub>2</sub> C<sub>2</sub> the moments of inertia of the bodies about their principal axes.

M<sub>1</sub> と M<sub>2</sub> を二つの物体の質量（mass）とし、A<sub>1</sub> B<sub>1</sub> C<sub>1</sub> と A<sub>2</sub> B<sub>2</sub> C<sub>2</sub> をそれぞれの主軸のまわりの慣性モーメント（moment of inertia）とする。

訳注：重心の点と質量に同じ字 M<sub>1</sub>・M<sub>2</sub> を使うのは誌面のとおり。

### ¶119　20 巻 p.34

> Let the velocities of the centres of gravity, resolved in the direction of the principal axes of each body, be
>
> U<sub>1</sub> V<sub>1</sub> W<sub>1</sub> and U<sub>2</sub> V<sub>2</sub> W<sub>2</sub> before impact,
>
> and
>
> U′<sub>1</sub> V′<sub>1</sub> W′<sub>1</sub> and U′<sub>2</sub> V′<sub>2</sub> W′<sub>2</sub> after impact.

それぞれの物体の主軸の向きに分けた重心の速度を、衝突の前は

U<sub>1</sub> V<sub>1</sub> W<sub>1</sub> と U<sub>2</sub> V<sub>2</sub> W<sub>2</sub>

衝突の後は

U′<sub>1</sub> V′<sub>1</sub> W′<sub>1</sub> と U′<sub>2</sub> V′<sub>2</sub> W′<sub>2</sub>

とする。

### ¶120　20 巻 p.34

> Let the angular velocities round the same axes be
>
> <i>p</i><sub>1</sub> <i>q</i><sub>1</sub> <i>r</i><sub>1</sub> and <i>p</i><sub>2</sub> <i>q</i><sub>2</sub> <i>r</i><sub>2</sub> before impact,
>
> and
>
> <i>p</i>′<sub>1</sub> <i>q</i>′<sub>1</sub> <i>r</i>′<sub>1</sub> and <i>p</i>′<sub>2</sub> <i>q</i>′<sub>2</sub> <i>r</i>′<sub>2</sub> after impact.

同じ軸のまわりの角速度（angular velocity）を、衝突の前は

<i>p</i><sub>1</sub> <i>q</i><sub>1</sub> <i>r</i><sub>1</sub> と <i>p</i><sub>2</sub> <i>q</i><sub>2</sub> <i>r</i><sub>2</sub>

衝突の後は

<i>p</i>′<sub>1</sub> <i>q</i>′<sub>1</sub> <i>r</i>′<sub>1</sub> と <i>p</i>′<sub>2</sub> <i>q</i>′<sub>2</sub> <i>r</i>′<sub>2</sub>

とする。

### ¶121　20 巻 p.34

> Let R be the impulsive force between the bodies, measured by the momentum it produces in each.

R を二つの物体の間の撃力（impulsive force）とし、それがそれぞれの物体に生む運動量（momentum）で測る。

### ¶122　20 巻 p.34

> Then, for the velocities of the centres of gravity, we have the following equations:
>
> U′<sub>1</sub> = U<sub>1</sub> + R<i>l</i><sub>1</sub>/M<sub>1</sub>,　U′<sub>2</sub> = U<sub>2</sub> − R<i>l</i><sub>2</sub>/M<sub>2</sub>, (62)
>
> with two other pairs of equations in V and W. The equations for the angular velocities are
>
> <i>p</i>′<sub>1</sub> = <i>p</i><sub>1</sub> + (R/A<sub>1</sub>)(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>),　<i>p</i>′<sub>2</sub> = <i>p</i><sub>2</sub> − (R/A<sub>2</sub>)(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>), (63)
>
> with two other pairs of equations for <i>q</i> and <i>r</i>.

すると、重心の速度について次の式が成り立つ。

U′<sub>1</sub> = U<sub>1</sub> + R<i>l</i><sub>1</sub>/M<sub>1</sub>　U′<sub>2</sub> = U<sub>2</sub> − R<i>l</i><sub>2</sub>/M<sub>2</sub>　(62)

V と W についても、ほかに二組の式がある。角速度についての式は

<i>p</i>′<sub>1</sub> = <i>p</i><sub>1</sub> + (R/A<sub>1</sub>)・(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)　<i>p</i>′<sub>2</sub> = <i>p</i><sub>2</sub> − (R/A<sub>2</sub>)・(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)　(63)

であり、<i>q</i> と <i>r</i> についても、ほかに二組の式がある。

### ¶123　20 巻 p.34

> The condition of perfect elasticity is that the whole *vis viva* shall be the same after impact as before, which gives the equation
>
> M<sub>1</sub>(U′<sub>1</sub><sup>2</sup> − U<sub>1</sub><sup>2</sup>) + M<sub>2</sub>(U′<sub>1</sub><sup>2</sup> − U<sub>2</sub><sup>2</sup>) + A<sub>1</sub>(<i>p</i>′<sub>1</sub><sup>2</sup> − <i>p</i><sub>1</sub><sup>2</sup>) + A<sub>2</sub>(<i>p</i>′<sub>2</sub><sup>2</sup> − <i>p</i><sub>2</sub><sup>2</sup>) + &c. = 0. (64)
>
> The terms relating to the axis of <i>x</i> are here given; those relating to <i>y</i> and <i>z</i> may be easily written down.

完全な弾性（perfect elasticity）の条件は、全体の活力（*vis viva*）が衝突の後も前と同じであることである。ここから次の式が出る。

M<sub>1</sub>(U′<sub>1</sub><sup>2</sup> − U<sub>1</sub><sup>2</sup>) + M<sub>2</sub>(U′<sub>1</sub><sup>2</sup> − U<sub>2</sub><sup>2</sup>) + A<sub>1</sub>(<i>p</i>′<sub>1</sub><sup>2</sup> − <i>p</i><sub>1</sub><sup>2</sup>) + A<sub>2</sub>(<i>p</i>′<sub>2</sub><sup>2</sup> − <i>p</i><sub>2</sub><sup>2</sup>) + &c. = 0　(64)

ここには <i>x</i> の軸に関わる項だけを書いた。<i>y</i> と <i>z</i> に関わる項も容易に書き下せる。

訳注：二つ目の項の U′<sub>1</sub> は誌面のとおりで、U′<sub>2</sub> の誤植である。式 (62)・(63) を代入して R で割ると式 (65) の第二項 −<i>l</i><sub>2</sub>(U′<sub>2</sub> + U<sub>2</sub>) が出るのは、ここが M<sub>2</sub>(U′<sub>2</sub><sup>2</sup> − U<sub>2</sub><sup>2</sup>) のときだけである。式の番号 (64) は誌面では右の端で一部が切れている。

### ¶124　20 巻 p.34

> Substituting the values of these terms, as given by equations [p.35] (62) and (63), and dividing by R, we find
>
> <i>l</i><sub>1</sub>(U′<sub>1</sub> + U<sub>1</sub>) − <i>l</i><sub>2</sub>(U′<sub>2</sub> + U<sub>2</sub>) + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)(<i>p</i>′<sub>1</sub> + <i>p</i><sub>1</sub>) − (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)(<i>p</i>′<sub>2</sub> + <i>p</i><sub>2</sub>) + &c. = 0. (65)

式 (62) と (63) が与えるこれらの項の値を代入し、R で割ると、次の式が得られる。

<i>l</i><sub>1</sub>(U′<sub>1</sub> + U<sub>1</sub>) − <i>l</i><sub>2</sub>(U′<sub>2</sub> + U<sub>2</sub>) + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)・(<i>p</i>′<sub>1</sub> + <i>p</i><sub>1</sub>) − (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)・(<i>p</i>′<sub>2</sub> + <i>p</i><sub>2</sub>) + &c. = 0　(65)

### ¶125　20 巻 p.35

> Now if <i>v</i><sub>1</sub> be the velocity of the striking-point of the first body before impact, resolved along the line of impact,
>
> <i>v</i><sub>1</sub> = <i>l</i><sub>1</sub>U<sub>1</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<i>p</i><sub>1</sub> + &c.;
>
> and if we put <i>v</i><sub>2</sub> for the velocity of the other striking-point resolved along the same line, and <i>v</i>′<sub>1</sub> and <i>v</i>′<sub>2</sub> the same quantities after impact, we may write equation (65),
>
> <i>v</i><sub>1</sub> + <i>v</i>′<sub>1</sub> − <i>v</i><sub>2</sub> − <i>v</i>′<sub>2</sub> = 0, (66)
>
> or
>
> <i>v</i><sub>1</sub> − <i>v</i><sub>2</sub> = <i>v</i>′<sub>2</sub> − <i>v</i>′<sub>1</sub>, (67)
>
> which shows that the velocity of separation of the striking-points resolved in the line of impact is equal to that of approach.

ここで、衝突の前の一つ目の物体の打点（striking-point）の速度を衝突の線に沿って分けたものを <i>v</i><sub>1</sub> とすると、

<i>v</i><sub>1</sub> = <i>l</i><sub>1</sub>U<sub>1</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)・<i>p</i><sub>1</sub> + &c.

である。もう一方の打点の速度を同じ線に沿って分けたものを <i>v</i><sub>2</sub> とし、衝突の後の同じ量を <i>v</i>′<sub>1</sub> と <i>v</i>′<sub>2</sub> とすると、式 (65) は

<i>v</i><sub>1</sub> + <i>v</i>′<sub>1</sub> − <i>v</i><sub>2</sub> − <i>v</i>′<sub>2</sub> = 0　(66)

または

<i>v</i><sub>1</sub> − <i>v</i><sub>2</sub> = <i>v</i>′<sub>2</sub> − <i>v</i>′<sub>1</sub>　(67)

と書ける。これは、衝突の線の向きに分けた打点どうしの離れる速度が、近づく速度に等しいことを示している。

### ¶126　20 巻 p.35

> Substituting the values of the accented quantities in equation (65) by means of equations (63) and (64), and transposing terms in R, we find
>
> 2{U<sub>1</sub><i>l</i><sub>1</sub> − U<sub>2</sub><i>l</i><sub>2</sub> + <i>p</i><sub>1</sub>(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>) − <i>p</i><sub>2</sub>(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)} + &c.
>
> = −R{<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c., (68)
>
> the other terms being related to <i>y</i> and <i>z</i> as these are to <i>x</i>. From this equation we may find the value of R; and by substituting this in equations (63), (64), we may obtain the values of all the velocities after impact.

式 (63) と (64) を使って、式 (65) の中のダッシュの付いた量の値を代入し、R を含む項を移すと、次の式が得られる。

2{U<sub>1</sub><i>l</i><sub>1</sub> − U<sub>2</sub><i>l</i><sub>2</sub> + <i>p</i><sub>1</sub>(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>) − <i>p</i><sub>2</sub>(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)} + &c.

= −R{<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c.　(68)

ほかの項は、ここの項が <i>x</i> に関わるのと同じように <i>y</i> と <i>z</i> に関わる。この式から R の値が求まる。これを式 (63)、(64) に代入すれば、衝突の後のすべての速度の値が得られる。

訳注：「accented quantities」はダッシュ（′）の付いた量、つまり衝突の後の量のこと。ここと次の文で引く式の番号 (63)・(64) は誌面のとおりで、U′<sub>1</sub> = U<sub>1</sub> + R<i>l</i><sub>1</sub>/M<sub>1</sub> などを式 (65) に代入すると式 (68) がそのまま出るので、使うのは速度の式 (62)・(63) であり、番号が一つずれている。式 (68) の右辺の波括弧は、誌面では閉じられていない。

### ¶127　20 巻 p.35

> We may, for example, find the value of U′<sub>1</sub> from the equation
>
> U′<sub>1</sub>{<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c.}M<sub>1</sub>/<i>l</i><sub>1</sub>
>
> = U<sub>1</sub>{−<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c.}M<sub>1</sub>/<i>l</i><sub>1</sub>
>
> + 2U<sub>2</sub><i>l</i><sub>2</sub> − 2<i>p</i><sub>1</sub>(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>) + 2<i>p</i><sub>2</sub>(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>) − &c. (69)

たとえば U′<sub>1</sub> の値は、次の式から求められる。

U′<sub>1</sub>・{<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c.}・M<sub>1</sub>/<i>l</i><sub>1</sub>

= U<sub>1</sub>・{−<i>l</i><sub>1</sub><sup>2</sup>/M<sub>1</sub> + <i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub> + (<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c.}・M<sub>1</sub>/<i>l</i><sub>1</sub>

+ 2U<sub>2</sub><i>l</i><sub>2</sub> − 2<i>p</i><sub>1</sub>・(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>) + 2<i>p</i><sub>2</sub>・(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>) − &c.　(69)

訳注：式 (69) は誌面では三行にわたり、右の大きな括弧でまとめて番号 (69) を付けている。三行目の項は M<sub>1</sub>/<i>l</i><sub>1</sub> の掛かる範囲の外にあり、右辺に足される。式 (68) から R を求め、U′<sub>1</sub> = U<sub>1</sub> + R<i>l</i><sub>1</sub>/M<sub>1</sub> に入れて両辺に波括弧の量と M<sub>1</sub>/<i>l</i><sub>1</sub> を掛けると、この形になる。誌面では右の大きな括弧の後に終わりの点がある。

### ¶128　20 巻 p.35

> Prop. XXIII. *To find the relations between the average velocities of translation and rotation after many collisions among many bodies.*

命題 XXIII　多くの物体の間で多くの衝突が起きた後の、並進（translation）と回転の平均の速度の間の関係を求めること。

### ¶129　20 巻 p.35

> Taking equation (69), which applies to an individual collision, we see that U′<sub>1</sub> is expressed as a linear function of U<sub>1</sub>, U<sub>2</sub>, <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, &c., all of which are quantities of which the values are distributed among the different particles according to the law of Prop. IV. It follows from Prop. V., that if we square every term of the equation, we shall have a new equation between the *average values* of the different quantities. It is plain that, as soon as the required relations have been established, they will remain the [p.36] same after collision, so that we may put U<sub>1</sub>′<sup>2</sup> = U<sub>1</sub><sup>2</sup> in the equation of averages. The equation between the average values may then be written
>
> (M<sub>1</sub>U<sub>1</sub><sup>2</sup> − M<sub>2</sub>U<sub>2</sub><sup>2</sup>)<i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (M<sub>1</sub>U<sub>1</sub><sup>2</sup> − A<sub>1</sub><i>p</i><sub>1</sub><sup>2</sup>)(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub>
>
> + (M<sub>1</sub>U<sub>1</sub><sup>2</sup> − A<sub>2</sub><i>p</i><sub>2</sub><sup>2</sup>)(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c. = 0.
>
> Now since there are collisions in every possible way, so that the values of <i>l</i>, <i>m</i>, <i>n</i>, &c. and <i>x</i>, <i>y</i>, <i>z</i>, &c. are infinitely varied, this equation cannot subsist unless
>
> M<sub>1</sub>U<sub>1</sub><sup>2</sup> = M<sub>2</sub>U<sub>2</sub><sup>2</sup> = A<sub>1</sub><i>p</i><sub>1</sub><sup>2</sup> = A<sub>2</sub><i>p</i><sub>2</sub><sup>2</sup> = &c.

一つ一つの衝突に当てはまる式 (69) を見ると、U′<sub>1</sub> は U<sub>1</sub>、U<sub>2</sub>、<i>p</i><sub>1</sub>、<i>p</i><sub>2</sub> などの一次の関数として表されている。これらはどれも、値が命題 IV の法則に従って粒子の間に分布する量である。命題 V から、式のすべての項を二乗すれば、さまざまな量の*平均の値*の間の新しい式が得られることになる。求める関係がいったんできあがれば、それは衝突の後も同じに保たれることは明らかである。そのため、平均の値の式では U<sub>1</sub>′<sup>2</sup> = U<sub>1</sub><sup>2</sup> と置いてよい。すると平均の値の間の式は次のように書ける。

(M<sub>1</sub>U<sub>1</sub><sup>2</sup> − M<sub>2</sub>U<sub>2</sub><sup>2</sup>)・<i>l</i><sub>2</sub><sup>2</sup>/M<sub>2</sub> + (M<sub>1</sub>U<sub>1</sub><sup>2</sup> − A<sub>1</sub><i>p</i><sub>1</sub><sup>2</sup>)・(<i>y</i><sub>1</sub><i>n</i><sub>1</sub> − <i>z</i><sub>1</sub><i>m</i><sub>1</sub>)<sup>2</sup>/A<sub>1</sub>

+ (M<sub>1</sub>U<sub>1</sub><sup>2</sup> − A<sub>2</sub><i>p</i><sub>2</sub><sup>2</sup>)・(<i>y</i><sub>2</sub><i>n</i><sub>2</sub> − <i>z</i><sub>2</sub><i>m</i><sub>2</sub>)<sup>2</sup>/A<sub>2</sub> + &c. = 0

ところで、衝突はありとあらゆる仕方で起きるので、<i>l</i>, <i>m</i>, <i>n</i> などや <i>x</i>, <i>y</i>, <i>z</i> などの値は限りなくさまざまである。そのため、この式が成り立つのは次の場合だけである。

M<sub>1</sub>U<sub>1</sub><sup>2</sup> = M<sub>2</sub>U<sub>2</sub><sup>2</sup> = A<sub>1</sub><i>p</i><sub>1</sub><sup>2</sup> = A<sub>2</sub><i>p</i><sub>2</sub><sup>2</sup> = &c.

訳注：式の中の U<sub>1</sub><sup>2</sup>、<i>p</i><sub>1</sub><sup>2</sup> などは、それぞれの量の二乗の平均の値を表す。平均の値の間の最初の式には番号が付いていない。

### ¶130　20 巻 p.36

> The final state, therefore, of any number of systems of moving particles of any form is that in which the average *vis viva* of translation along each of the three axes is the same in all the systems, and equal to the average *vis viva* of rotation about each of the three principal axes of each particle.

したがって、任意の形の動く粒子からなる系（system）がいくつあっても、その最後の状態は次のようになる。三つの軸のそれぞれに沿った並進の平均の活力がすべての系で同じになり、それが、それぞれの粒子の三つの主軸のそれぞれのまわりの回転の平均の活力に等しくなる。

### ¶131　20 巻 p.36

> Adding the *vires vivæ* with respect to the other axes, we find that the whole *vis viva* of translation is equal to that of rotation in each system of particles, and is also the same for different systems, as was proved in Prop. VI.

ほかの軸についての活力（*vires vivæ*）を足し合わせると、粒子のそれぞれの系で、並進の活力の全体は回転の活力の全体に等しいことがわかる。また、命題 VI で証明したとおり、並進の活力の全体は系が違っても同じである。

訳注：*vires vivæ* は *vis viva* の複数形。

### ¶132　20 巻 p.36

> This result (which is true, however nearly the bodies approach the spherical form, provided the motion of rotation is at all affected by the collisions) seems decisive against the unqualified acceptation of the hypothesis that gases are such systems of hard elastic particles. For the ascertained fact that γ, the ratio of the specific heat at constant pressure to that at constant volume, is equal to 1·408, requires that the ratio of .the whole *vis viva* to the *vis viva* of translation should be
>
> β = 2/(3(γ − 1)) = 1·634;
>
> whereas, according to our hypothesis, β = 2.

この結果は、回転の運動が衝突から少しでも影響を受けるなら、物体がどれほど球の形に近くても成り立つ。この結果は、気体がこのような硬い弾性のある粒子の系であるという仮説（hypothesis）を、そのまま受け入れることに対して決定的に不利であるように見える。というのは、定圧の比熱（specific heat）と定積の比熱の比 γ が 1·408 に等しいという確かめられた事実からは、全体の活力と並進の活力の比が

β = 2/(3(γ − 1)) = 1.634

でなければならない。ところが私たちの仮説によれば β = 2 である。

訳注：「of .the」の余分な点は誌面のとおり。1·408 などの中ほどの点は小数点（誌面のとおり）。

### ¶133　20 巻 p.36

> We have now followed the mathematical theory of the collisions of hard elastic particles through various cases, in which there seems to be an analogy with the phænomena of gases. We have deduced, as others have done already, the relations of pressure, temperature, and density of a single gas. We have also proved that when two different gases act freely on each other (that is, when at the same temperature), the mass of the single particles of each is inversely proportional to the square of the molecular velocity; and therefore, at equal temperature and pressure, *the number of particles in unit of volume is the same.*

ここまで、硬い弾性のある粒子の衝突の数学的な理論を、気体の現象（phænomena）と類比（analogy）があるように見えるさまざまな場合について追ってきた。すでにほかの人たちがしてきたように、一つの気体の圧力（pressure）・温度（temperature）・密度（density）の関係を導いた。また、二つの異なる気体が互いに自由に作用し合うとき（つまり同じ温度にあるとき）、それぞれの一つ一つの粒子の質量は、分子の（molecular）速度の二乗に反比例することを証明した。したがって、温度と圧力が等しければ、*単位体積の中の粒子の数は同じである*。

### ¶134　20 巻 p.36

> We then offered an explanation of the internal friction of [p.37] gases, and deduced from experiments a value of the mean length of path of a particle between successive collisions.

次に、気体の内部摩擦（internal friction）の説明を示し、実験から、粒子が続けて起こす衝突の間の道のりの平均の長さ（mean length of path）の値を導いた。

### ¶135　20 巻 p.37

> We have applied the theory to the law of diffusion of gases, and, from an experiment on olefiant gas, we have deduced a value of the length of path not very different from that deduced from experiments on friction.

この理論を気体の拡散（diffusion）の法則に当て、油生気体（olefiant gas）についての実験から、摩擦の実験から導いた値とあまり違わない道のりの長さの値を導いた。

訳注：olefiant gas は今のエチレンのこと。

### ¶136　20 巻 p.37

> Using this value of the length of path between collisions, we found that the resistance of air to the conduction of heat is 10,000,000 that of copper, a result in accordance with experience.

衝突の間の道のりの長さのこの値を使って、空気の熱の伝導（conduction of heat）に対する抵抗（resistance）が銅の 10,000,000 倍であることを見いだした。これは経験に合う結果である。

訳注：「10,000,000 that of copper」は誌面のとおりで、times が抜けていると見られる。

### ¶137　20 巻 p.37

> Finally, by establishing a necessary relation between the motions of translation and rotation of all particles not spherical, we proved that a system of such particles could not possibly satisfy the known relation between the two specific heats of all gases.

最後に、球形でないあらゆる粒子の並進の運動と回転の運動の間に必然の関係を立てることによって、そのような粒子の系は、すべての気体の二つの比熱の間の知られた関係をとうてい満たしえないことを証明した。

### 注1　19 巻 p.19

> Communicated by the Author, having been read at the Meeting of the British Association at Aberdeen, September 21, 1859.

著者から寄せられた。1859 年 9 月 21 日、アバディーンでの英国学術協会（British Association）の会合で読まれたもの。
