# Mathematical Physics, vol. 1（1847）の気体の運動論の所 — 原文と日本語訳

- 原典：John Herapath, *Mathematical Physics; or the Mathematical Principles of Natural Philosophy: with a Development of the Causes of Heat, Gaseous Elasticity, Gravitation, and Other Great Phenomena of Nature*, vol. 1, London: Whittaker and Co., and Herapath’s Railway Journal Office, 1847（2 巻のうち第 1 巻）。著者はイギリスの物理学者・数学者で、鉄道の雑誌（*Herapath’s Railway Journal*）を出した人（1790–1868）。
- 訳した範囲：第 1 巻の三か所。①第 I 編 第 I 節の小見出し「Of Force.」の §9 から §10「Theory of Gases」の終わりまで（pp.12–17。¶1〜¶9）。②第 II 編 第 I 節の小見出し「Theories of Heat.」の §40 から §46 の終わりまで（pp.212–220。¶10〜¶32）。③第 II 編 第 II 節「Of the Laws of Gaseous Bodies」の全部（pp.236–265。定義・一般の考察・命題 I〜IX と系・注解。¶33〜¶146）。その間の所（§11 からの力学、§47 からの比熱と潜熱、第 II 節の前の比熱の段）と、第 III 節からあと、第 2 巻（気体の拡散・音の速さほか、走査は [Internet Archive `mathematicalphys02herauoft`](https://archive.org/details/mathematicalphys02herauoft)）は訳していない（`docs/rules/sources.md` §11 の 5）。
- 範囲を決めたわけ：パースは「進化的な愛」（1893）の ¶20 で「Dr. John Herapath, an English chemist, had in 1847 outlined the kinetical theory of gases in his "Mathematical Physics"」と書き、章も頁も挙げない。第 1 巻で、気体を器の中で動き回ってぶつかる小さな物体の集まりと見て、その衝突から気体の弾性（圧力）・温度・熱を導く所は、目次で三か所に分かれる。①は衝撃の積み重ねが圧する力になることから気体の理論を初めて述べる所、②は熱を粒子の内部運動とし、温度を粒子の運動量で測ると定める所、③はそれを定義と命題に組んで、気体の膨張と収縮の法則・絶対的な寒さ（絶対零度に当たる）・粒子の数と質量と速さの関係を導く所。どこを訳すかが一つに決まらないので、三か所を案として pjdhiro に示し、三か所とも訳すことにした（2026-11-25）。
- 原文：Google Books のハーバード大学図書館の写し（[`id=nH0tAAAAYAAJ`](https://books.google.com/books?id=nH0tAAAAYAAJ)。扉は「VOL. I.」「LONDON: WHITTAKER AND CO. AND HERAPATH’S RAILWAY JOURNAL OFFICE」）の頁の画像から起こした（2026-11-25・#175）。頁と画像の対応は、本の頁 N がそのまま `pg=PAN`（p.15＝`pg=PA15`）。Internet Archive には第 1 巻の走査が無く、文字起こしも無いので、頁の画像を読む役（Claude のサブエージェント）九つが受け持ちの頁ごとに一行ずつ起こして訳の案を付け、照らす役九つが段ごとに照らした。式は、照らす役が前後の式と本文から計算して筋が通るかを確かめた。
- 直したのは次のとおり。頁の柱と図書館の印を外した。行末で切れた語をつないだ（頁をまたいで切れた語は `conse- [p.214] quence` の形）。小さな大文字の見出し（PROPOSITION I. など）はふつうの大文字小文字にした。p.239 の行末で切れた「where-」「ever」は whereever とつないだ。誌面の古い綴り（inclosed など）と、中点の小数点（·76・491°·13）は誌面のまま。式は `<i>`（斜体）・`<b>`（太字の記号）・`<small>`（小さな大文字の記号）・`<sup>`・`<sub>` で写し、式の番号の前の点の並びを外した。
- 誌面のまま置いたもの：p.14 の「as long we please」（as が一つ抜けている）、p.215 の「no such an effect」、p.254 の「if some particles, are beaten back」（主語のあとのコンマ）、p.262 の「and we obtain」（余分な and）。どれも訳注に書いた。式に、計算と合わないものは見つからなかった。ヘラパスが引く実験の本（ドルトン・ゲイ＝リュサック・ルニョー・クロフォード・ラメほか）とは照らしていない。
- **訳は Claude（AI）によるもの。** 2026-11-25 に訳した。既にある日本語訳を見ずに、英語の原文から付けた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（ヘラパスの表）でそろえた。`訳注：` の行は Claude の注。
- 段の見出しの頁は本の頁。段の途中で頁が変わるところは `[p.N]`。段の番号は、訳した三か所を通した番号。

### ¶1　p.12

> OF FORCE.

力について

### ¶2　p.12

> § 9. *Force is the cause of any change or is that power by which the change is produced.* If, therefore, a body be perfectly free to yield to any change of state, and none take place, it follows that the body is not acted on by any force; or if it be, it must be by an accumulation of opposing forces, which, in the aggregate, destroy one another. Mathematicians usually estimate force by the effect it produces, or would produce, in a given time, and consider the intensity of the force as proportional to the effect. Thus, if one of two forces produce twice the effect of the other, it is considered to be doubly as powerful; if three times the effect, trebly; and so on. But this is rather estimating the effects than the forces; since it is possible for the same primitive force, by successive actions, to produce very unequal effects in equal times.

§9　*力（force）とは、何であれ変化の原因であり、その変化を生み出す働きである。* したがって、ある物体（body）がどんな状態の変化にも完全に自由に従えるのに、何の変化も起こらないなら、その物体にはどんな力も働いていない。働いているとしても、それは互いに逆向きの力が積み重なり、合わせると互いに打ち消し合っているからである。数学者はふつう、力を、それが決まった時間のうちに生む（あるいは生むはずの）効果で見積もり、力の強さを効果に比例する（proportional to）ものとみなす。たとえば、二つの力のうち一方が他方の二倍の効果を生むなら、二倍強いとされ、三倍の効果なら三倍強いとされる、というぐあいである。しかしこれは、力を見積もるというより、効果を見積もっていることになる。同じもとの力が、何度も続けて働くことで、等しい時間のうちに大きく異なる効果を生むこともありうるからである。

### ¶3　p.12

> Forces have likewise been distinguished into two kinds, pressive and impulsive, or those which act by pressure, and those which act by impulsion. The former generate changes in bodies by a continued unceasing action, from the beginning to the end of the stroke, or fit, of action; and, consequently, always consume time. The latter act either by an instantaneous impulse, or by a succession of those impulses; but each impulse, individually considered [p.13] occupies not the smallest portion of time. It is an action that in one moment might be said not to have come into existence; and in the next to have ended. This is the kind of force we shall presently have to consider.

力はまた、圧する力（pressive）と衝撃力（impulsive）の二種、つまり圧力（pressure）によって働くものと、衝撃（impulsion）によって働くものとに分けられてきた。前者は、ひとまとまりの働きの始めから終わりまで、途切れずに続く働きによって物体に変化を生む。したがって、いつも時間を費やす。後者は、一瞬の衝撃（impulse）によって、あるいはそうした衝撃の連なりによって働く。しかし一つ一つの衝撃を取り出してみれば、それはどんなに小さな時間も占めない。ある瞬間にはまだ生じていなかったと言え、次の瞬間にはもう終わっている、そういう働きである。私たちがこれから考えなければならないのは、この種の力である。

訳注：「the stroke, or fit, of action」の fit は、ひと続きの発作・ひとしきりの意。ここでは一回分のまとまった働きを指す。

### ¶4　p.13

> If we take single impulses, it is plain that the forces and the changes they produce are proportional, under the same circumstances of action. But if a succession of impulses takes place, the effects are no longer proportional to the forces, but to the collected actions of the forces in equal times. When, therefore, the forces are equal, the effects are proportional to the numbers of their respective repetitions; and when those forces are unequal, but uniformly intense in their actions, the effects are in the compound ratio of those numbers and the forces. It is hence manifestly possible for a weak force, by a greater number of successive actions, to produce effects equal to those of a stronger by a less number of actions; and if the impulses of the two forces be at regular intervals, and yet the intervals of the slower be not sensible to observation, the effects will always have the same ratio, whatever be the length of time in which they are compared.

一回ずつの衝撃をとれば、働く状況が同じなら、力とそれが生む変化とが比例することは明らかである。しかし衝撃が続けて起こるなら、効果はもはや力に比例するのでなく、等しい時間のうちの力の働きを集めたものに比例する。したがって、力が等しければ、効果はそれぞれの繰り返しの回数に比例する。力が等しくなく、ただしそれぞれの働きの強さが一定なら、効果はその回数と力との複比（compound ratio）になる。ここから明らかに、弱い力でも、続けて働く回数を多くすれば、少ない回数で働く強い力と等しい効果を生むことができる。そして二つの力の衝撃が規則正しい間隔で起こり、しかも遅いほうの間隔さえ観察で感じ取れないほど短いなら、どれだけの時間をとって比べても、効果はいつも同じ比になる。

訳注：複比は、二つの比を掛け合わせた比。ここでは効果が「回数×力」に比例するということ。

### ¶5　p.13

> These impulses may also be opposed to a pressive force and effect precisely the same things. For let us suppose a hard body to be acted on from a state of quiescence by a continued force, such, for instance, as what we commonly conceive gravity to be, urging it in any direction; then, after it has been impelled forward for any length of time by this force, and has acquired a certain momentum, [p.14] let it be met by another hard body, moving uniformly with an equal momentum in the opposite direction; and by our laws of collision, presently to be expounded, it will receive such a change in its motion by the contact as will give it an equal and opposite momentum in the path it has already described. It will, therefore, being acted on still by the soliciting force, retrace this path, until, having ascended to the point whence it set out, it has lost all its velocity, and begins to descend again as before. As soon as it has arrived again to the place where it before was met by the other body, let it receive a second equal shock, and again it will begin to ascend, and so on as long we please. Thus it might be continually kept oscillating between these two points by impulses properly regulated. And if the distance between the points be diminished, the number of oscillations will be increased, and the intervals between the shocks diminished, and the body consequently approach nearer to a state of apparent rest.

これらの衝撃は、圧する力に向かい合わせて置くこともでき、そのときまったく同じことをなしとげる。たとえば、硬い物体が静止の状態から、続けて働く力、たとえば私たちがふつう重力と考えているような力によって、ある向きに押されるとする。この力でしばらくのあいだ前へ押し進められ、ある運動量（momentum）を得たところで、等しい運動量で反対向きに一様に動いてくる別の硬い物体に出会わせる。すると、まもなく述べる私たちの衝突（collision）の法則によって、この物体は接触によって運動に変化を受け、それまでに通ってきた道筋の上で、等しく反対向きの運動量を与えられる。したがって物体は、押す力（soliciting force）をなお受けながらこの道筋を引き返し、出発した点まで上ったところで速さ（velocity）をすべて失い、前と同じようにまた下り始める。前に別の物体と出会った所に再び着いたとたんに、二度目の等しい打撃を与えれば、物体はまた上り始める。これを好きなだけ繰り返せる。こうして、うまく調整した衝撃によって、物体をこの二点のあいだで振動させ続けることができる。そして二点の距離を縮めれば、振動の回数は増え、打撃と打撃の間隔は縮まり、物体はそれだけ見かけの静止の状態に近づく。

訳注：誌面は「as long we please」で、as long as の as が一つ抜けていると見られる。訳は「好きなだけ」とした。soliciting force は、物体をある向きへ動かそうとする力（ここでは重力のような力）。

### ¶6　p.14

> This is how things will happen when the affected body comes in contact with only one other body, and receives the strokes in the direction of the track of its centre of gravity. But the same would evidently take place, if, instead of one body striking it in this identical manner, it were struck by several in different parts of its surface, either all at once, or in any order; the aggregate direction and intensity of whose strokes, however, should be similar to those of the single body under similar circumstances. Then might the body acted on by the force remain [p.15] in a state of rest, if not absolute, at least so nearly so as to differ from it insensibly. Now the tendency of this body to move in the direction in which it is solicited is precisely the same thing as mathematicians understand by the force which they call pressure; and therefore the opposition of the other smaller bodies is also equivalent, and, as to effect, the same as this force of pressure. And because the value of this pressure might be increased or diminished, by increasing or diminishing the soliciting force, or the pressing body, so also might the value of the resisting force of the smaller bodies be increased or diminished, by increasing or diminishing their momentum, the number of their collisions, or the number of the bodies.

ここまでは、働きを受ける物体がほかの物体一つだけと接し、その重心の通る道筋の向きに打撃を受ける場合である。しかし、一つの物体がまったく同じしかたで打つ代わりに、いくつもの物体が表面のいろいろな所を、いっせいに、あるいはどんな順番ででも打つとしても、明らかに同じことが起こる。ただし、それらの打撃を合わせた向きと強さが、同じような状況での一つの物体の打撃と同じようでなければならない。そのとき、力を受ける物体は静止の状態にとどまりうる。絶対的な静止ではないにしても、それと感じ取れないほどしか違わない静止である。さて、この物体が押される向きへ動こうとする傾向は、数学者が圧力（pressure）と呼ぶ力として理解しているものとまったく同じである。したがって、ほかの小さな物体（smaller bodies）の向かい合う働きも、この圧力と等しく、効果の点で同じものである。そして、この圧力の値は、押す力、あるいは圧する物体を大きくしたり小さくしたりすることで増やしたり減らしたりできるのだから、小さな物体の抵抗する力の値も、その運動量、その衝突の回数、あるいは物体の数を増やしたり減らしたりすることで、増やしたり減らしたりできる。

### ¶7　p.15

> § 10. *Theory of Gases.* From these considerations it follows, that if a number of small bodies be inclosed in any hollow body, and be continually impinging on one another, and on the sides of the inclosing body; and if the motions of the bodies be conserved by an equivalent action in the sides of the containing body, then will these small bodies compose a medium, whose elastic force will be like that of our air and other gaseous bodies; for if the bodies be exceedingly small, the medium might, like any aeriform body, be compressed into a very small space; and yet, if it had no other tendency than what would arise from the internal collision of its atoms, it would, if left to itself, extend to the occupation of a space of almost indefinite greatness. And its temperature remaining the same, its elasticity [p.16] would also be greater when occupying a less, and less when occupying a greater space; for in a compressed state the number of atoms striking against a given portion of the containing vessel must be augmented, and the space in which the atoms have to move being less, their motions or periods must be shorter, and the number of them in a given time consequently greater; on both of which accounts the elasticity is greater the greater the compression. Besides, when other things are the same, the elastic force augments with an augmentation of temperature and diminishes with a diminution; for an increase of temperature, according to our theory, must necessarily be attended with an increase of velocity, and, therefore, with an increase in the number of collisions. But these things will be more accurately treated of presently.

§10　*気体の理論*　ここまでの考察から、次のことが出てくる。いくつもの小さな物体（small bodies）を何かの中空の物体（hollow body）、つまり器に閉じ込め、それらが互いに、また閉じ込める物体の内壁に、絶えずぶつかる（impinge）とする。そして、それらの物体の運動が、器の内壁の側の等しい働きによって保たれるとする。すると、これらの小さな物体は一つの媒質（medium）をつくり、その弾性力（elastic force）は、私たちの空気（air）やほかの気体の物体（gaseous bodies）の弾性力のようになる。というのも、物体がきわめて小さければ、この媒質は、どの気体状の（aeriform）物体とも同じように、ごく小さな空間（space）に押し縮められうる。それでいて、その原子（atoms）どうしの内部の衝突から生じる傾向のほかに何の傾向も持たないなら、放っておけば、ほとんど限りのない大きさの空間を占めるまで広がるだろう。また温度（temperature）が同じままなら、その弾性（elasticity）は、小さな空間を占めるときほど大きく、大きな空間を占めるときほど小さい。押し縮められた状態では、器の決まった部分に打ち当たる原子の数が増えるはずであり、また原子が動き回る空間が小さくなるので、その運動、つまり周期は短くなり、したがって決まった時間のうちの周期の数は多くなるはずだからである。この二つの理由のどちらからも、押し縮めるほど弾性は大きくなる。さらに、ほかの条件が同じなら、弾性力は温度が上がれば増し、下がれば減る。私たちの理論によれば、温度が上がることには必ず速さ（velocity）が増すことがともない、したがって衝突の回数が増すことがともなうからである。しかしこれらのことは、のちにもっと正確に扱う。

訳注：「their motions or periods must be shorter」は、原子が壁から壁へ往復するのにかかる時間（周期）が短くなる、という意味に読んだ。

### ¶8　p.16

> Whether all pressive forces be not the same as this gaseous action is a question we do not at present intend to consider. It might come under our notice hereafter, when we shall have had more opportunities of collating our principles with experiments. In the meantime it is sufficient to anticipate that our inquiries, whatever be the possibility of the existence of another kind of pressive force, lead us to conclude that nature operates by no other.

圧する力（pressive forces）はすべて、この気体の働きと同じものではないか。この問いを、私たちは今は考えるつもりがない。私たちの原理を実験と照らし合わせる機会がもっと得られたのちに、取り上げることになるかもしれない。さしあたっては、次のことを先回りして言っておけば足りる。別の種類の圧する力がありうるかどうかはともかく、私たちの探究は、自然がそれ以外の力では働いていない、という結論へ私たちを導く。

### ¶9　p.16

> It might be asked, by what means is it, if the parts of gases are absolutely hard, that they are reflected back into the medium from the sides of the containing vessel? This question is easily answered, if we allow heat to consist in an intestine motion of the parts of the bodies, for then the parts of a solid of [p.17] equal temperature with a gas must have the same quantity, though they have not the same freedom of motion as the parts of a gas have; and hence the parts of a gas will have the same reflection from the sides of a vessel which they have from one another.

もし気体の部分が絶対的に硬いなら、それらはどんなしくみで、器の内壁から媒質の中へはね返されるのか、と問われるかもしれない。この問いには、熱（heat）が物体の部分の内部運動（intestine motion）にあると認めるなら、たやすく答えられる。そうであれば、気体と等しい温度の固体の部分も、気体の部分と同じだけの運動の自由は持たないにしても、同じ量（の運動）を持っているはずだからである。したがって気体の部分は、器の内壁から、互いのあいだではね返るのと同じはね返りを受ける。

訳注：「内部運動」は intestine motion の訳。物体の内部で粒子が行き来する運動のこと（今の言い方の熱運動に当たる）。

訳注：「the same quantity」は何の量かが誌面に書かれていない。前の「intestine motion」を受けて、内部運動の量と読んだ。

### ¶10　p.212

> THEORIES OF HEAT.

熱の理論

### ¶11　p.212

> § 40. Two principal theories have been framed respecting the nature and cause of heat. One of them has been advocated by Bacon, Boyle, Newton, and it is said by Descartes; the other is, however, now generally received. According to the Newtonian doctrine, heat consists in a vibratory motion of the particles. By the rival doctrine it is due to the agency of an extremely subtile and, as to sense, imponderable fluid, whose particles have a strong affinity for the particles of other matter, but are highly repulsive of each other. When bodies have an additional quantity of this fluid, which is usually called caloric, they expand, because it diminishes their mutual attraction, and when a deficiency, they contract by the superior power of their cohesive attraction.

§40　熱（heat）の本性と原因については、二つの主な理論が立てられてきた。一つはベーコン（Bacon）、ボイル（Boyle）、ニュートン（Newton）が唱え、デカルト（Descartes）も唱えたと言われるものである。しかし、今広く受け入れられているのは、もう一つのほうである。ニュートンの説では、熱は粒子（particle）の振動する運動（vibratory motion）にある。対立する説では、熱は、きわめて微細で、感覚の上では重さを持たない流体の働きによる。この流体の粒子は、ほかの物質の粒子とは強く引き合うが、互いどうしは強く反発し合う。物体（body）がこの流体（ふつうカロリック（熱素）（caloric）と呼ばれる）を余分に持つと、物体は膨張（expansion）する。この流体が、物体の粒子どうしの引力を弱めるからである。逆に足りなくなると、物体は、凝集の引力のほうが勝って収縮（contraction）する。

訳注：「imponderable」は秤で量れない、つまり重さを持たないの意。カロリック説は、熱を重さのない流体とみる当時の通説。

### ¶12　p.212

> Setting out from this view, it does not appear to us how this theory of caloric can subsist. For example, if the calorific fluid is to have the effect of diminishing the attraction of the particles towards each other, and making them separate, it should [p.213] cause a recession to that distance where the repulsion just balances the attraction. If the particles remain within this distance, they will come nearer and nearer until they touch by the greater force of attraction; and if they should go beyond it, they will fly off to an indefinite distance by the excess of repulsion.

この見方から出発すると、このカロリックの理論がどうして成り立ちうるのか、私たちには分からない。たとえば、熱の流体（calorific fluid）が粒子どうしの引力を弱め、粒子を引き離す働きを持つのなら、それは粒子を、反発力がちょうど引力と釣り合う距離まで退かせるはずである。粒子がこの距離より内側にとどまれば、引力のほうが強いので、粒子はしだいに近づいて触れ合うまでになる。この距離を越えれば、反発力が勝って、粒子は限りなく遠くまで飛び去る。

### ¶13　p.213

> Now if they came to the nearest point, they could not come nearer by any diminution of heat. The particles, therefore, must be held in a very nice balance between these two forces of attraction and repulsion. There is no other way in which the particles can subsist by opposing forces, and allow of compression and expansion, which all bodies, more or less, possess. Hence, to maintain the balance, we come to this property, namely, that the rate of calorific repulsion must diminish and increase much faster, as the distance increases or diminishes, than the attraction between the particles does. This conceded, there is no difficulty in explaining the expansion and contraction of solids and liquids. Neither is there possibly anything insuperable in a solid gradually becoming liquid, by the particles being driven off beyond the point that keeps them in the solid state, and maintained in that state by the balance of the forces. But if at this point a great portion of the caloric becomes latent,—as to explain the great diminution of temperature which generally accompanies the change from the solid to the liquid state it is assumed it does—how is it, by this diminution in the calorific repulsion, that the particles do not come within their distance of existence in a solid state? It appears to me that must be the inevitable conse- [p.214] quence. For if a certain amount of caloric is necessary to bring them to the common limits of solidity and fluidity, a part of that becoming inactive or impotent, should bring the body back again to the solid state.

さて、粒子がいちばん近い点まで来てしまえば、熱をいくら減らしても、それ以上は近づけない。したがって粒子は、引力と反発力というこの二つの力のあいだで、きわめて微妙に釣り合って保たれていなければならない。粒子が相反する力によって存在し、しかも、どの物体も多かれ少なかれ持つ圧縮と膨張を許すには、これ以外のやり方はない。そこで、この釣り合いを保つために、次の性質が要ることになる。すなわち、距離が大きくなったり小さくなったりするとき、熱による反発力の割合は、粒子どうしの引力よりもずっと速く減ったり増したりしなければならない。これを認めれば、固体と液体の膨張と収縮を説明するのに難しさはない。また、固体がしだいに液体になること、つまり粒子が、粒子を固体の状態にとどめる点の外まで追いやられ、力の釣り合いによってその状態に保たれることにも、おそらく越えられない難しさはない。しかし、もしこの点でカロリックの大きな部分が潜熱（latent）になるのなら（固体から液体への変化にふつう伴う大きな温度（temperature）の低下を説明するために、そうなると仮定されている）、熱による反発力がこのように減るのに、なぜ粒子は固体の状態で存在する距離の内側に入り込まないのか。私には、それが避けられない帰結であるように思える。なぜなら、粒子を固体と流体の共通の境まで運ぶのに一定の量のカロリックが要るのなら、その一部が働かなくなる、つまり力を失えば、物体は再び固体の状態へ戻るはずだからである。

訳注：「latent」は、熱が物体に吸収されても温度計に現れない状態をいう（潜熱）。

### ¶14　p.214

> Again, when bodies pass from the fluid to the aeriform state, another large amount of caloric is absorbed or lost as to activity, which by the preceding reasoning should again bring the body back to the liquid state; but no such thing occurs.

また、物体が流体から気体状（aeriform）の状態へ移るとき、またしても大量のカロリックが吸収される、つまり働きの上では失われる。前の推論によれば、これは物体を再び液体の状態に戻すはずである。しかし、そのようなことは起こらない。

### ¶15　p.214

> Here, too, a phenomenon takes place of very difficult, or rather impossible, explanation. When a body changes from the fluid to the aeriform state, it subsists entirely by its repulsion in the caloric of its particles, and its attraction seems suddenly to have ceased altogether. This is attempted to be explained on the hypothesis that the particles have passed the limit of their mutual attraction, or something of the kind. If such a limit exists, and the particles had passed that limit, it follows either that there must be an inexplicable discontinuity in the corpuscular attraction, or that the attraction must actually decrease faster than the calorific repulsion decreases. Was the latter the case, it would be inconsistent with the existence of the body, as we have shown, in a solid or fluid, expansible and contractible state. Besides, when the body comes into the aeriform state, the law of repulsion between the particles, which must evidently be the law of the calorific repulsion, is in intensity inversely as the distance; that is, an intensity diminishing slower than is given by gravitation, and therefore much slower than is supposed to be the rate of diminu- [p.215] tion of the corpuscular attraction. But it has been shown it must be faster; therefore, it does not appear that any calorific repulsion will explain the phenomena.

ここでもまた、説明がきわめて難しい、むしろ説明できない現象が起こる。物体が流体から気体状の状態に変わるとき、物体はもっぱら、その粒子のカロリックの中の反発力によって存在し、引力は突然まったくなくなってしまったように見える。これを、粒子が互いの引力の届く限界を越えたのだ、といった仮説で説明しようとする試みがある。もしそのような限界があり、粒子がそれを越えたのだとすると、次のどちらかになる。微粒子の（corpuscular）引力に説明のつかない不連続があるか、あるいは、引力が実際に、熱による反発力が減るよりも速く減るかである。後者だとすれば、先に示したように、物体が膨張も収縮もできる固体や流体の状態で存在することと両立しない。そのうえ、物体が気体状の状態になったとき、粒子のあいだの反発の法則は、明らかに熱による反発の法則であるはずだが、その強さは距離に反比例する。つまり、その強さは重力が与えるよりもゆっくり減り、したがって、微粒子の引力が減る割合として想定されているものよりも、ずっとゆっくり減る。しかし、反発力のほうが速く減らなければならないことは、すでに示した。それゆえ、どのような熱による反発力によっても、これらの現象は説明できないように見える。

訳注：「距離に反比例する」反発力は、ボイルの法則（圧力が体積に反比例する）を、静止した粒子どうしの反発として説明しようとするニュートン以来の考え方を指す。重力は距離の二乗に反比例するので、それより「ゆっくり減る」。

### ¶16　p.215

> There is also another phenomenon which, if there was no defect in the laws of variation, makes very strongly against the doctrine. If it be the superior repulsion of the caloric in the body, which keeps the particles apart, and determines the difference of states, it seems reasonable that so great a pressure may be applied as could bring a fluid back to its solid state; but though a force many hundred, nay, many thousand, times greater than the cohesion of liquids has been applied to compress them, no such effect has taken place; and, from all that appears, we may fairly conclude no such an effect could. Was it, indeed, possible, the sea itself must be solid at some distance below its surface.

さらに、変化の法則に欠陥がなかったとしても、この説に強く不利になる現象がもう一つある。物体の中のカロリックの反発力が勝っていることが粒子を引き離し、状態の違いを決めているのだとすれば、流体を固体の状態へ戻せるほど大きな圧力（pressure）を加えることもできそうに思える。しかし、液体の凝集力の何百倍、いや何千倍もの力を加えて液体を圧縮しても、そのような効果は起きていない。見えるかぎりのことから、そのような効果は起こりえないと結論してよいだろう。実際、もしそれが起こりうるのなら、海そのものが、海面から下のある深さで固体になっていなければならない。

訳注：誌面は「no such an effect could」（such と an が重なる）。「no such effect could」の意で訳す。

### ¶17　p.215

> The objections to the doctrine of caloric have been argued entirely on what may be called its mathematical defects. No notice has been taken of the mechanical difficulties attending the doctrine, as, for instance, the impossibility of explaining how an interminable quantity of heat can be extracted from a finite and limited quantity of material, as Count Rumford has proved, nor the difficulty of explaining how heat can be generated by friction. The explanation, as it is called, by means of latent caloric, is only conquering one difficulty by another, and far greater. One may ask, and ask in vain, by what operation caloric can become latent, or as it were extinguished. But it will be useless to detain the reader with discussions of this kind, since we shall be able to show how the [p.216] phenomena attributed to latent heat and other phenomena flow mathematically from much simpler principles. It is, perhaps, wrong to have touched upon the subject at all.

カロリックの説への反論は、ここまで、もっぱらその数学上の欠陥と呼べるものについて論じてきた。この説に伴う力学上の難しさには触れなかった。たとえば、ランフォード伯（Count Rumford）が証明したように、有限で限られた量の材料から限りのない量の熱が取り出せることを説明できないこと、また、摩擦によって熱が生じることを説明するのが難しいことである。潜熱のカロリックによる、いわゆる説明は、一つの難しさを、別の、もっとずっと大きな難しさで押さえ込んでいるにすぎない。どのような働きによってカロリックが潜熱に、いわば消えた状態になるのかと問うことはできるが、問うても答えは得られない。しかし、この種の議論で読者を引き止めても役に立たない。潜熱に帰せられている現象やほかの現象が、ずっと簡単な原理から数学的に導かれることを、私たちは示せるからである。そもそもこの話題に触れたこと自体が、おそらく誤りだったのだろう。

訳注：ランフォードは大砲の砲身をくり抜く実験（1798）で、摩擦から尽きることなく熱が出ることを示し、カロリック説に疑いを投げた。

### ¶18　p.216

> § 41. The reader will by this time be prepared to expect that our theory of heat is not the calorific. We consider heat to consist in a vibratory motion of the particles of bodies, and that the temperature is measured not by the velocity simply, as it has been supposed, of the particles, but by the individual momentum of them. Thus two bodies, to be of the same temperature, must have their particles vibrate individually with the same force.

§41　読者はもう、私たちの熱の理論がカロリックの理論ではないと予想しているだろう。私たちは、熱は物体の粒子の振動する運動にあると考え、温度は、これまで想定されてきたように粒子の速さ（velocity）だけで測られるのではなく、粒子一つ一つの運動量（momentum）によって測られると考える。したがって、二つの物体が同じ温度であるためには、それぞれの粒子が一つ一つ同じ力で振動していなければならない。

訳注：ヘラパスは温度を粒子一つの運動量（<i>mv</i>）で測る。今の運動論では、温度は粒子一つの運動エネルギー（½<i>mv</i><sup>2</sup>）の平均に比例する。

### ¶19　p.216

> Whether this is exactly Newton’s idea or not I do not know. I rather think he considers the velocity of the particles to be the measure of their temperature. In the same body this coincides with our view, but when we compare the temperatures of different bodies, it is necessary to consider the momentum. *We, therefore, define heat to consist in motion, and the intensity of it to be measured by the individual momentum of the particles.*

これがニュートンの考えとまったく同じかどうかは、私には分からない。むしろニュートンは、粒子の速さを温度の尺度と考えていると思う。同じ物体の中では、これは私たちの見方と一致する。しかし、異なる物体の温度を比べるときには、運動量を考えなければならない。*それゆえ私たちは、熱は運動にあり、その強さは粒子一つ一つの運動量によって測られる、と定義する。*

### ¶20　p.216

> It is immaterial how these vibrations are made, whether in this direction or that, but simply that there are vibratory motions, and that these motions are propagated from particle to particle throughout the body. If the vibrations, therefore, be greater in one part of a body than in another, the tendency will be to an equality of vibratory force, or, as it may otherwise be expressed, of intestine motion.

これらの振動がどのように起こるか、この向きかあの向きかは、どうでもよい。大事なのは、振動する運動があり、その運動が物体全体にわたって粒子から粒子へ伝わる、ということだけである。したがって、物体のある部分で振動が他の部分より大きければ、振動の力が等しくなる方へ向かう。言い換えれば、内部運動（intestine motion）が等しくなる方へ向かう。

### ¶21　p.216

> For the very same reason, if a body with particles [p.217] of a greater or less intestine motion be brought into contact with those of another body, the tendency will be to an equality of intestine motion throughout the two bodies; and if no other cause interfere, that equality, after some time, will be perfectly established.

まったく同じ理由で、内部運動が大きいか小さい粒子を持つ物体を、別の物体の粒子に触れさせると、二つの物体全体にわたって内部運動が等しくなる方へ向かう。そして、ほかの原因が妨げなければ、しばらくすると、その等しさは完全に成り立つ。

### ¶22　p.217

> § 42. The degree of this intestine motion is called the temperature of the body. So that all bodies which are brought into contact with the thermometer, are said to be of the same temperature when their particles communicate the same motion or momentum to the particles of the mercury, or matter of the thermometer.

§42　この内部運動の度合いを、その物体の温度（temperature）と呼ぶ。したがって、温度計（thermometer）に触れさせた物体はどれも、その粒子が温度計の水銀の粒子、つまり温度計をなす物質の粒子に、同じ運動または運動量（momentum）を伝えるとき、同じ温度であると言われる。

### ¶23　p.217

> The greater this intestine motion is the greater will be the excursions of the particles of the bodies, presuming their mutual attraction to remain the same, and the greater the expansion of the body.

この内部運動が大きいほど、物体の粒子の振れ幅（excursions）は大きくなり、物体の膨張（expansion）も大きくなる。ただし、粒子どうしの引き合う力は変わらないものとする。

### ¶24　p.217

> § 43. In this view of the nature of heat, it is confined entirely to vibratory motions; and the less the vibrating particle the greater must be its velocity in the exact inverse ratio of its mass to have the same temperature. Possibly also it may have a greater extent of vibration; but that is not a necessary consequence, as it may make more frequent vibrations without at all altering its temperature, and its power to communicate temperature. Generally speaking, however, the less the particle the more lengthy are its excursions.

§43　熱（heat）の本性をこのように見ると、熱はもっぱら振動の運動に限られる。そして、同じ温度であるためには、振動する粒子が小さいほど、その速さ（velocity）は、ちょうど質量（mass）に反比例して大きくなければならない。振動の幅も大きくなるかもしれない。しかし、それは必ずそうなるわけではない。粒子は、温度も、温度を伝える力も少しも変えずに、より頻繁に振動することができるからである。とはいえ、一般に言えば、粒子が小さいほど、その振れ幅は長い。

訳注：温度を粒子一つの運動量（質量×速さ）で測るという §41 の定めから、同じ温度なら速さが質量に反比例する、という筋。今の運動論では、温度は粒子一つの運動エネルギーの平均に比例し、速さの二乗が質量に反比例する。

### ¶25　p.217

> § 44. Circular or rotary motions, as suggested by Sir H. Davy, we do not consider. They have [p.218] no place in the view here taken of heat. If there be any phenomena requiring such motions, they are unknown to us. We think there are none; at least we have not met with any.

§44　H・デーヴィ卿（Sir H. Davy）が示した円運動や回転の運動は、ここでは考えない。それらは、ここでとる熱の見方の中に置き場をもたない。そのような運動を必要とする現象があるとしても、私たちはそれを知らない。そんな現象は無いと考える。少なくとも、私たちは一つも出会っていない。

訳注：Sir H. Davy はイギリスの化学者ハンフリー・デーヴィ（Humphry Davy）。デーヴィが回転の運動をどこで論じたかは照らしていない。

### ¶26　p.218

> § 45. Twisting or rending bodies asunder generates heat in a very sensible manner. Thus if a bar of iron, or wood, be sharply twisted, or be broken by longitudinal tension, or bent by lateral strain, considerable heat is generated. Buffon observed, that if a beam of green timber be supported at one end, and weights be rapidly suspended on the other, so as to bend or break it, that a violent hissing ensued and smoke issued from both ends.

§45　物体をねじったり、引き裂いたりすると、はっきり感じられるほどの熱が生じる。たとえば、鉄や木の棒を鋭くねじるか、縦に引っ張って折るか、横からの力で曲げるかすると、かなりの熱が生じる。ビュフォン（Buffon）は、生木の梁の一方の端を支え、もう一方の端に重りを素早く吊るして曲げたり折ったりすると、激しくしゅうしゅうと音がして、両方の端から煙が出たことを観察した。

### ¶27　p.218

> It seems difficult to me to explain these phenomena by the doctrine of caloric. In Buffon’s experiments, for example, it might be contended that the compression on the under side sets free the latent caloric, but would not the expansion above the neutral point, which is much nearer the lower than the upper side, also, from the opposite cause, induce an absorption of caloric, and, as the expansion exceeds the compression, by a much greater quantity? Again, in the direct rending asunder, the dimensions of the bar no doubt contract about the point of fracture, but the longitudinal expansion must much more than make up for that; so that it does not appear how heat can be generated by twisting or rending, on the hypothesis of caloric.

これらの現象を、カロリック（熱素）（caloric）の説で説明するのは難しいと私には思われる。たとえばビュフォンの実験では、下の側の圧縮が潜んでいたカロリックを解き放つ、と主張することもできよう。しかし、中立点（それは上の側よりも下の側にずっと近い）より上の膨張も、反対の理由から、カロリックの吸収を引き起こすのではないか。そして膨張は圧縮を上回るのだから、その吸収はずっと多い量になるのではないか。また、まっすぐに引き裂く場合、折れる所のあたりで棒の太さが縮むのは確かだが、縦の膨張がそれを十分以上に埋め合わせるはずである。こうして、カロリックの仮説の上では、ねじったり引き裂いたりすることでどうして熱が生じうるのかがわからない。

訳注：「潜んでいたカロリック」は the latent caloric の訳。カロリック説では、物体の中に潜熱として隠れたカロリックが、圧縮で外に押し出されて熱として現れると考えた。

### ¶28　p.218

> On the corpuscular hypothesis the phenomena are easily explained. They depend in part on the [p.219] friction generated by the strain; but likewise on other circumstances. For example, when the parts of a body are in their normal state, the particles vibrate within their proper limits, but should any force be applied by which the body is extended and they are drawn out of that, or are compelled to make longer excursions, it is obvious that they will return to the collisions with greater force the further they are compelled to go in their vibrations, and heat therefore will be generated by the extension of the body until the moment of fracture.

微粒子の（corpuscular）仮説の上では、これらの現象はたやすく説明される。現象は、一つには、ひずみによって生じる摩擦による。しかし、ほかの事情にもよる。たとえば、物体の各部がふだんの状態にあるとき、粒子はそれぞれの決まった範囲の中で振動している。しかし、物体を引き伸ばす力が加わり、粒子がその範囲から引き出されるか、より長い振れ幅をとらされるとすれば、振動の中で遠くまで行かされるほど、粒子は大きな力で衝突（collisions）に戻ってくることは明らかである。したがって、物体を引き伸ばすことで、折れる瞬間まで熱が生じる。

### ¶29　p.219

> This probably will be most sensible in bodies which admit of the greatest extension before they break. Fragile bodies and those which break abruptly will not, I apprehend, exhibit so great an increase, if any, of temperature.

このことは、折れるまでに最も大きく伸びることのできる物体で、おそらく最もはっきり感じられるだろう。もろい物体や、いきなり折れる物体は、温度が上がるとしても、それほど大きくは上がらないと私は思う。

### ¶30　p.219

> The very same explanation applies to the increase of heat at the points of compression. For as the parts are compressed longitudinally, they are extended latitudinally. Moreover, by the compression we impress new motion on the particles, as will be hereafter shown, and thus also augment the heat.

まったく同じ説明が、圧縮される所で熱が増すことにも当てはまる。各部は縦に圧縮されると、横に引き伸ばされるからである。さらに、あとで示すように、圧縮によって粒子に新たな運動を与え、そのことでも熱を増す。

### ¶31　p.219

> § 46. In assuming that heat consists in the vibrations of the particles of bodies, it should be observed, that it is not understood to mean the first order of particles to which we should arrive on dividing the body. It may be the vibrations of the secondary particles, or the particles composing these first particles, or even the particles composing another inferior order of particles. It is the vibra- [p.220] tions of some particles in the body, either simple or compound, which with us give the measure of temperature.

§46　熱が物体の粒子の振動にあると仮定するとき、注意しておくべきことがある。その粒子とは、物体を分けていって最初に行き着く段の粒子を意味すると解されているわけではない。それは二次の粒子、つまりこの最初の粒子を組み立てている粒子の振動かもしれないし、さらに下の段の粒子を組み立てている粒子の振動でさえあるかもしれない。私たちにとって温度の尺度を与えるのは、物体の中の、単純なものであれ複合したものであれ、何らかの粒子の振動である。

### ¶32　p.220

> Hence the power to heat a body is as the temperature directly and the total number of vibrating particles conjointly; that is, as the total intestine motion in the body.

したがって、物体を熱する力は、温度と、振動する粒子の総数とを掛け合わせたものに比例する。つまり、物体の中の内部運動の総量に比例する。

訳注：「熱する力」は the power to heat の訳。物体がもつ熱の量のこと。次の §47 で比熱につながる。

### ¶33　p.236

> SECT. II.

第 II 節

### ¶34　p.236

> OF THE LAWS OF GASEOUS BODIES.

気体の物体の法則について

### ¶35　p.236

> *Definitions.*

*定義*

### ¶36　p.236

> *Def.* 1. The homogeneity of a gas is the perfect equality of its atoms, or particles, throughout, in quantity of matter. It is of no consequence whether the atoms are similar in figure or not; their figures might be very different, provided, however, the quantity of solid matter in each is the same.

*定義* 1　気体の一様さ（homogeneity）とは、その原子すなわち粒子（atoms, or particles）が、どれをとっても物質の量（quantity of matter）において完全に等しいことである。原子の形が似ているかどうかは問題にならない。それぞれの中にある固い物質の量が同じでありさえすれば、形はたいへん違っていてもよい。

### ¶37　p.236

> *Def.* 2. Density is the quantity of matter in a given space, when the atoms, or particles, whatever be their relative magnitudes, are uniformly disposed in the medium.

*定義* 2　密度（density）とは、原子すなわち粒子が、互いの大きさがどうであれ、媒質（medium）の中に一様に配されているときの、与えられた空間の中の物質の量である。

### ¶38　p.236

> *Cor.* 1. The mean density of any body is, therefore, proportional to the whole quantity of matter, divided by the whole bulk, or magnitude of the body.

*系* 1　したがって、どんな物体の平均の密度も、物質の量の全体を、物体のかさ（bulk）すなわち大きさの全体で割ったものに比例する。

### ¶39　p.236

> *Cor.* 2. In a homogeneous body, the density is equal to the mass of an atom drawn into the number contained in a given space.

*系* 2　一様な物体では、密度は、一つの原子の質量（mass）に、与えられた空間に含まれる原子の数を掛けたものに等しい。

訳注：drawn into は「〜を掛ける」の古い言い方。

### ¶40　p.236

> *Def.* 3. Numeratom is a term I have employed to express the number of atoms, or particles, distributed throughout a given space, without respect to the density or homogeneity of the body.

*定義* 3　原子数（numeratom）とは、与えられた空間の全体に分布している原子すなわち粒子の数を、物体の密度や一様さにかかわりなく言い表すために、私が用いてきた語である。

訳注：numeratom は、一定の体積の中の粒子の数を言うヘラパスの造語。今の言い方の数密度に当たる。

### ¶41　p.236

> *Cor.* Hence the numeratom of a homogeneous [p.237] body is proportional to the density directly, and the mass of a particle, or atom, inversely.

*系*　ここから、一様な物体の原子数は、密度に比例し、一つの粒子すなわち原子の質量に反比例する。

### ¶42　p.237

> This conclusion might also have been drawn from *Cor.* 2 of the preceding definition.

この結論は、前の定義の*系* 2 からも引き出せたはずである。

### ¶43　p.237

> *Def.* 4. The elasticity of a gas is the force with which it endeavours to expand itself, or with which it resists compression; and is estimated by the amount of its action against similar and equal portions of the containing bodies.

*定義* 4　気体の弾性（elasticity）とは、気体がみずからを膨張させようと努める力、すなわち圧縮に抵抗する力である。それは、気体を入れている物体の、形が相似で大きさの等しい部分に対して気体が及ぼす作用の量で見積もられる。

### ¶44　p.237

> *General Considerations.*

*全般的な考察*

### ¶45　p.237

> In the definition of force we have explained our views of the nature of airs, or permanent gases. We conceive airs to be composed of a number of very minute, perfectly hard particles, which, flying about in all directions, and, by their collisions on each other and the sides of the containing vessel, maintain a constant pressure against the sides, as if endeavouring to press them outwards. In what direction these motions are made we do not consider; all that we have to do with is the mean state of the case. We assume each gas to be homogeneous unless otherwise mentioned, but we do not consider the figures of the particles; they may be anything, provided they lead to no union among themselves, so as to produce condensation. Hereafter we shall have to speak of condensible gases, but in the present section we understand airs which do not condense, but maintain their state permanently. For the present we also assume that their magnitudes are insensible in comparison of the lengths of the paths they describe. In short, we here treat of perfectly mechanical airs, which [p.238] are neither condensible within themselves, nor have any chemical action between their particles and those of the containing body. The particles, likewise, may be either primitive atoms, or composed of several atoms, provided their bulk bear no sensible proportion to their paths.

力の定義のところで、私たちは空気（の類）すなわち永久気体（airs, or permanent gases）の性質についての見方を説明した。私たちは、空気（の類）が、たいへん小さく完全に硬い多数の粒子（particles）からできていると考える。粒子はあらゆる向きに飛び回り、互いに、また器の側面にぶつかる衝突（collisions）によって、側面に一定の圧力（pressure）を保つ。それはあたかも側面を外へ押し出そうと努めているかのようである。これらの運動がどの向きに行われるかは考えない。扱うのは、その場合の平均の状態だけである。とくに断らないかぎり、どの気体も一様（homogeneous）であると仮定するが、粒子の形は考えない。粒子どうしが結びついて凝縮を起こすことにならないかぎり、形はどんなものでもよい。のちに凝縮しうる気体について述べなければならないが、この節では、凝縮せず、その状態を永久に保つ空気（の類）を考える。また当面は、粒子の大きさが、粒子のえがく道すじの長さに比べて感じとれないほど小さいと仮定する。要するに、ここで扱うのは完全に力学的な空気（の類）であり、それ自身の中で凝縮することもなく、その粒子と、それを入れている物体の粒子との間に化学的な作用をもつこともない。また粒子は、元の原子でも、いくつかの原子からできたものでもよい。ただし、そのかさが道すじに比べて感じとれるほどの割合をもたないことが条件である。

訳注：「力の定義」は、この本の第 I 編の §9〜§10 で気体の理論を述べた所を指すと見られる。

### ¶46　p.238

> Proposition I.

命題 I

### ¶47　p.238

> *The figure of a vessel, in which a gas is contained, has no influence on the elastic force of the gas, such a constitution of things being granted as we have supposed.*

*私たちが仮定したような事物の成り立ちを認めるならば、気体を入れている器の形は、気体の弾性力（elastic force）に何の影響も与えない。*

### ¶48　p.238

> For since the particles of the gas receive their reflection from the superficial particles of the containing body; and since these particles have not only their intestine motion, but likewise their figure and arrangement, independent of the superficial figure of the containing body, it follows, that the direction of their action on the particles of the gas is also independent of the figure of the body in which they are inclosed. But other things being alike, this action is equal to the contrary action of the particles of the gas, which constitutes its elastic force; therefore, its elastic force is not affected by the figure of the body in which it is contained.

なぜなら、気体の粒子は、器である物体の表面の粒子から跳ね返りを受ける。そしてこれら表面の粒子は、その内部運動（intestine motion）だけでなく、形と並び方も、器の表面の形とはかかわりがない。そこで、表面の粒子が気体の粒子に及ぼす作用の向きも、気体を閉じこめている物体の形とはかかわりがないことになる。ところで、ほかの条件が同じなら、この作用は、気体の粒子の逆向きの作用に等しく、その逆向きの作用こそが気体の弾性力をなしている。したがって、気体の弾性力は、それを入れている物体の形に左右されない。

### ¶49　p.238

> *Cor.* Hence we gather that in any bodies of equal capacity and of the same temperature, the same, or an equal portion of the same gas, would be equally elastic; for the motion of the particles being independent of the figure of the containing body, must depend entirely upon the temperature of that [p.239] body; and this being the same, the motion is the same. But the motion, quantity of gas, and capacity being the same, the elasticity must be the same.

*系*　ここから次のことがわかる。容積が等しく温度の同じ物体（器）の中では、同じ気体の同じ量、あるいは等しい量は、等しい弾性をもつ。なぜなら、粒子の運動は器の形にかかわりがないので、その物体の温度にすっかり依存するはずであり、温度が同じなら運動も同じである。そして運動と気体の量と容積とが同じなら、弾性も同じでなければならない。

### ¶50　p.239

> *Scholium.*

*注解*

### ¶51　p.239

> This theorem and its *Cor.* agree with the opinion of philosophers respecting the elasticity of gaseous bodies, though I am not aware that they have ever been made the subject of direct experiment. Indeed, it seems to have been taken for granted that whereever the temperatures, spaces occupied, gases, and quantities of gas were the same, the elasticities were the same; but it would be worth while to be more certain of it. An experiment to settle this point, taking every circumstance into consideration, would, perhaps, require as much care and skill as almost any of those that have been made on gases.

この定理とその*系*は、気体の物体の弾性についての学者たちの見解と一致する。もっとも、それが直接の実験の主題にされたことがあるとは、私は知らない。じっさい、温度と占める空間と気体の種類と気体の量とが同じでありさえすれば弾性は同じだと、当然のこととされてきたように見える。しかし、そのことをもっと確かにしておくのは、やる価値があるだろう。あらゆる事情を考えに入れてこの点を決着させる実験は、おそらく、これまで気体について行われたほとんどどの実験にも劣らないほどの、注意と技量を要するだろう。

訳注：誌面は行末で where- と切れ、次の行が ever で始まる（wherever の意）。philosophers は当時の言い方で、自然哲学者すなわち科学者を指す。

### ¶52　p.239

> Proposition II.

命題 II

### ¶53　p.239

> *If a given portion of a gas, composed of particles mutually impinging on one another and the sides of the containing body, in the manner that has been described, has its temperature the same, and if the particles be indefinitely small, its elastic force, under different compressions, is reciprocally proportional to the space it occupies.*

*述べてきたようなしかたで、互いに、また器である物体の側面に打ち当たる（impinging）粒子からできた気体の、与えられた量があり、その温度が同じで、粒子がいくらでも小さいならば、いろいろな圧縮のもとでのその弾性力は、気体の占める空間に反比例する。*

### ¶54　p.239

> Let us suppose that equal portions of the same gas be inclosed in two vessels of unequal capacity. Then, by the last proposition, it is immaterial whether these [p.240] vessels be of the same or of different figures; the difference of figures would have no influence upon the ratio of the elasticities; but, for the sake of simplicity, we will suppose the two figures similar. Now, because the only change that is supposed to take place is in the space which the gas occupies, the motions and collisions of a particle in the one will be similar to those of a corresponding particle in the other; and the temperature, that is in this case the velocity, being the same in each, the numbers of revolutions that two corresponding particles in the two media make in a given time must be inversely proportional to the paths the particles describe; that is, these paths being alike, and described with equal velocities, in the inverse subtriplicate ratio of the spaces occupied by the equal portions of gases. But because the elasticity of a gas is proportional to the action of its particles against a given portion of the surface of the containing body, the ratio of the elastic forces, arising from the repeated actions of equal numbers of corresponding particles in the two media, will likewise, their velocities being the same in both media, be inversely as the subtriplicate of the spaces occupied. And if we conceive the two gases to be divided into strata, parallel to the sides of the bodies on which the elastic forces are measured, and of one, two, or any number of particles thick, it is manifest, since the motions of the particles are alike in each medium, that if the elasticity in one medium arises from the action of the particles of the first stratum alone, so it does also in the other medium; and if it arises [p.241] from the action of the particles of the first two, first three, or <i>n</i> first strata in one medium, the same holds true with the elasticity in the other medium. But the number of particles of any one stratum that strike against a given portion of the containing surface of one medium, is to the number of particles of the corresponding stratum that strike against an equal and similar portion of the other medium, in the duplisubtriplicate ratio of the numeratoms directly; that is, in the duplisubtriplicate ratio of the spaces occupied by equal portions of the gases inversely. Therefore, as the whole elastic forces of these corresponding strata are in a ratio compounded of the ratios of the numbers of particles that strike against equal portions of the sides of the containing bodies, and of the numbers of returns which they make to the sides in a given time, that ratio must be equal to one compounded of the inverse duplisubtriplicate and of the inverse subtriplicate ratios of the spaces occupied by the two gases; it must, therefore, be equal to the simple inverse ratio of the spaces occupied. And since the same number of strata affects the elasticity of the one gas as of the other; and since the inverse ratio of the spaces is the ratio of the elastic force of any two corresponding strata, it is consequently the ratio of the united elastic forces of all the strata that affect the elasticity; and is, therefore, the ratio of the elastic forces of the two gases.

同じ気体の等しい量が、容積の等しくない二つの器に閉じこめられているとしよう。すると前の命題により、これらの器の形が同じか違うかは問題にならない。形の違いは弾性の比に何の影響も与えない。しかし簡単のために、二つの形は相似であるとしよう。さて、起こると仮定している変化は気体の占める空間だけなので、一方の器の中の一つの粒子の運動と衝突は、他方の器の中の対応する粒子の運動と衝突に相似になる。そして温度、つまりこの場合は速さ（velocity）が、どちらでも同じなので、二つの媒質の中の対応する二つの粒子が与えられた時間にする往復（revolutions）の回数は、粒子のえがく道すじに反比例するはずである。すなわち、これらの道すじは相似で、等しい速さでえがかれるので、気体の等しい量が占める空間の立方根の逆比（inverse subtriplicate ratio）になる。ところで、気体の弾性は、器である物体の表面の与えられた部分に対する粒子の作用に比例するので、二つの媒質の中で対応する等しい数の粒子がくり返し作用することから生じる弾性力の比も、速さがどちらの媒質でも同じなので、占める空間の立方根に反比例する。そして、二つの気体を、弾性力を測る物体の側面に平行で、粒子一つ、二つ、あるいはいくつ分かの厚さの層（strata）に分けて考えれば、粒子の運動はどちらの媒質でも相似なので、次のことは明らかである。一方の媒質での弾性が最初の層の粒子の作用だけから生じるなら、他方の媒質でもそうであり、一方の媒質で最初の二つ、最初の三つ、あるいは最初の <i>n</i> 個の層の粒子の作用から生じるなら、他方の媒質の弾性でも同じことが成り立つ。ところで、一方の媒質で器の表面の与えられた部分に打ち当たる、ある一つの層の粒子の数と、他方の媒質で等しく相似な部分に打ち当たる、対応する層の粒子の数との比は、原子数の立方根の二乗の比（duplisubtriplicate ratio）になる。すなわち、気体の等しい量が占める空間の立方根の二乗の逆比になる。したがって、これら対応する層の弾性力の全体は、器の側面の等しい部分に打ち当たる粒子の数の比と、粒子が与えられた時間に側面に戻ってくる回数の比とを掛け合わせた比になるので、その比は、二つの気体の占める空間の立方根の二乗の逆比と立方根の逆比とを掛け合わせた比に等しいはずである。それゆえ、その比は、占める空間の一乗の逆比（simple inverse ratio）に等しいはずである。そして、同じ数の層が一方の気体の弾性にも他方の気体の弾性にも効いており、空間の逆比は対応する任意の二つの層の弾性力の比なので、それは結局、弾性に効くすべての層の弾性力を合わせたものの比であり、したがって二つの気体の弾性力の比である。

訳注：subtriplicate ratio は「立方根の比」（<i>V</i><sup>1/3</sup> の比）、duplisubtriplicate ratio は「立方根の二乗の比」（<i>V</i><sup>2/3</sup> の比）。器の側面の一定の部分に当たる粒子の数は <i>V</i><sup>−2/3</sup> に、往復の回数は <i>V</i><sup>−1/3</sup> に比例するので、二つを掛けて <i>V</i><sup>−2/3</sup>・<i>V</i><sup>−1/3</sup> = <i>V</i><sup>−1</sup> となり、弾性が体積に反比例する（ボイル（Boyle）の法則）ことを導いている。revolutions と returns は、ここでは粒子が器の側面へ行って戻る往復の回数を指す。

### ¶55　p.241

> *Cor.* Because the numeratoms are reciprocally proportional to the spaces occupied, it follows that [p.242] the elasticities are, under equal temperatures, directly as the numeratoms.

系　原子数（numeratom）は占める空間（space）に反比例するので、温度が等しいとき、弾性（elasticity）は原子数に正比例することになる。

### ¶56　p.242

> *Scholium.*

注解

### ¶57　p.242

> We have in the two preceding theorems and their corollaries supposed the atoms, or particles, to be perfectly hard; but the same consequences would follow if they were either perfectly or imperfectly elastic, and the containing vessel either elastic or hard. For the temperature being invariable, the intensity of the collisions, and consequently of the reflections, would remain the same in a rare as in a denser medium. The law, therefore, that the elasticities and compressions are proportional, under equal temperatures, is true not only in permanent airs or gases, but in all kinds of vapours, which is conformable to experience.

前の二つの定理とその系では、原子（atom）すなわち粒子（particle）を完全に硬いものと仮定した。しかし、粒子が完全に弾性的でも不完全に弾性的でも、また器が弾性的でも硬くても、同じ帰結が出てくる。温度が変わらなければ、衝突（collision）の強さも、したがって跳ね返りの強さも、希薄な媒質（medium）と密な媒質とで同じままだからである。それゆえ、温度が等しいとき弾性と圧縮が比例するという法則は、永久気体（permanent airs）すなわち気体（gas）だけでなく、あらゆる種類の蒸気でも成り立つ。これは経験に合っている。

訳注：永久気体は、どうしても液にならないと思われていた気体（空気・水素など）を言う当時の言い方。

### ¶58　p.242

> Proposition III.

命題 III

### ¶59　p.242

> *The same things remaining, the elasticity of a gas under a variable temperature and compression, is proportional to its numeratom and the square of its temperature conjointly; or the elasticity varies as the square of the temperature directly, and the simple of the space inversely.*

ほかの条件が同じままなら、温度と圧縮が変わる気体の弾性は、その原子数と、その温度の二乗とに、合わせて比例する。言いかえれば、弾性は温度の二乗に正比例し、空間の一乗に反比例して変わる。

訳注：ヘラパスの「温度」は粒子の運動量（同じ気体では速さ）に比例する量として立てられているので、今の言い方の圧力 ∝ <i>nT</i> ではなく、弾性 ∝（原子数）×（温度）<sup>2</sup> となる。

### ¶60　p.242

> If we first suppose in two portions of the same gas the numeratoms to be equal, the elasticities of those portions will have the same ratio as the elasticities arising from the actions of corresponding particles in the two media; for the change of temperature does not alter the manner in which [p.243] the corresponding particles act in the media, but only the intensity of action. This being the case, the elasticities due to the actions of corresponding particles are to one another as their momenta and the number of their revolutions or returns in a given time; that is, as their temperatures and velocities. But the masses of the corresponding particles being the same, the velocities are as the temperatures; therefore, the elasticities due to corresponding particles, and consequently the elasticities of the media, are as the squares of the temperatures. And by the *Cor.* to the preceding Proposition, the temperatures being the same, the elasticities are as the numeratoms. Whence, if neither the temperatures, nor the numeratoms are the same, the elasticities are in a ratio compounded of the ratio of the numeratoms, and that of the squares of the temperatures, or, which is the same, in a ratio compounded of the inverse ratio of the volumes and the duplicate direct of the temperatures.

まず、同じ気体の二つの部分で原子数が等しいとすると、それらの部分の弾性は、二つの媒質の中で対応する粒子の作用から生じる弾性と同じ比になる。温度が変わっても、対応する粒子が媒質の中で作用する仕方は変わらず、作用の強さだけが変わるからである。そうであれば、対応する粒子の作用による弾性どうしの比は、それらの運動量（momentum）の比と、一定の時間に往復する回数すなわち戻ってくる回数の比とを合わせた比になる。つまり、温度の比と速さ（velocity）の比とを合わせた比になる。ところが、対応する粒子の質量（mass）は同じなので、速さは温度に比例する。したがって、対応する粒子による弾性、ひいては媒質の弾性は、温度の二乗に比例する。また前の命題の系により、温度が同じなら弾性は原子数に比例する。ゆえに、温度も原子数も同じでないときは、弾性の比は、原子数の比と温度の二乗の比とを合成した比になる。同じことだが、体積（volume）の逆の比と、温度の正の向きの二乗の比とを合成した比になる。

### ¶61　p.243

> *Cor.* 1. Hence the elasticities are also in a ratio which is equal to that compounded of the simple ratio of the numeratoms, and the duplicate of the velocities of the particles of the gas.

系 1　ここから、弾性の比は、原子数の一乗の比と、気体の粒子の速さの二乗の比とを合成した比にも等しい。

### ¶62　p.243

> *Cor.* 2. And hence, also, the elasticities are in a ratio compounded of these three simple ratios; namely, the ratio of the numeratoms, the ratio of the temperatures, and the ratio of the velocities of the gaseous particles.

系 2　またここから、弾性の比は、次の三つの一乗の比を合成した比でもある。すなわち、原子数の比、温度の比、気体の粒子の速さの比である。

### ¶63　p.243

> Proposition IV.

命題 IV

### ¶64　p.243

> *The spaces occupied by equal portions of the* [p.244] same gas, under equal elasticities, are directly proportional to the squares of the temperatures.

同じ気体の等しい量が占める空間は、弾性が等しいとき、温度の二乗に正比例する。

訳注：誌面は命題の文の p.243 の部分だけが斜体で、p.244 に移った部分は立体で刷られている。

### ¶65　p.244

> For, by the preceding Proposition, the elasticity varies as the numeratom and the square of the temperature conjointly; therefore, the elasticity being constant, the numeratom is inversely as the square of the temperatures. But the quantity of gas being the same, the space occupied is reciprocally as the numeratom; consequently the space, or volume, is directly as the square of the temperature.

というのは、前の命題により、弾性は原子数と温度の二乗とに合わせて比例して変わる。したがって、弾性が一定なら、原子数は温度の二乗に反比例する。ところが、気体の量が同じなら、占める空間は原子数に反比例する。よって、空間すなわち体積は温度の二乗に正比例する。

### ¶66　p.244

> *Cor.* 1. Because this is true of any gas, it follows that equal volumes of any gases whatever, under equal pressures and temperatures, will be equally augmented by equal augmentations of temperature.

系 1　これはどんな気体にも成り立つので、圧力（pressure）と温度が等しいもとで体積の等しい気体は、どんな気体であれ、温度を等しく上げれば等しく増えることになる。

### ¶67　p.244

> *Cor.* 2. Or more generally, if the elasticities of any two gases have an invariable ratio, and if their temperatures also have an invariable ratio, their volumes will have an invariable ratio.

系 2　もっと一般に言えば、任意の二つの気体の弾性の比が変わらず、温度の比も変わらないなら、体積の比も変わらない。

### ¶68　p.244

> *Cor.* 3. It has been found by MM. Dalton and Gay Lussac, and lately confirmed by the further experiments of MM. Dulong and Petit, that the volume of a given portion of gas at the temperature of water-freezing is to its volume under an equal pressure at the temperature of water-boiling as 1000 to 1375, or as 8 to 11. Therefore, granting the truth of our principles, the temperature of water-freezing is to that of water-boiling in the subduplicate ratio of 8 to 11; that is, nearly in the ratio of 6 to 7; or, more nearly, in that of 100 to 117, or that of 579 to 679.

系 3　ドルトン（Dalton）とゲイ＝リュサック（Gay-Lussac）が見いだし、近年デュロン（Dulong）とプティ（Petit）のさらなる実験で確かめられたところでは、ある量の気体の、水の凍る温度での体積と、等しい圧力のもと水の沸く温度での体積との比は、1000 対 1375、すなわち 8 対 11 である。したがって、われわれの原理が正しいとすれば、水の凍る温度と水の沸く温度との比は、8 対 11 の平方根の比（subduplicate ratio）になる。つまり、ほぼ 6 対 7、もっと近くは 100 対 117、あるいは 579 対 679 である。

訳注：誌面の人名は「Gay Lussac」（つなぎの線なし）。ここの「温度」は粒子の運動から立てたヘラパスの温度で、氷点と沸点の比は √(8/11) ≒ 0.8528 になる（6/7 ≒ 0.857、100/117 ≒ 0.855、579/679 ≒ 0.8527）。今の絶対温度の比（273 対 373 ≒ 8 対 11）は、体積の比そのものに一致する。

### ¶69　p.244

> *Cor.* 4. Because the temperatures are in the same [p.245] gas as the velocities, the spaces occupied at equal elasticities are as the square of the velocities.

系 4　同じ気体では温度は速さに比例するので、弾性が等しいときに占める空間は、速さの二乗に比例する。

### ¶70　p.245

> *Cor.* 5. It has been demonstrated by the experiments of philosophers, that the volumes of mercury and air, under the same pressure, go on *pari passu* within certain limits; namely, from about—36 of Centigrade to nearly 150. Therefore, let <i>AB</i>, *fig.* 41, be a common mercurial thermometer, of which <i>F</i> is the freezing and <i>B</i> the boiling point of water; and let the tube, or a line by the side of it, be continued to the point <i>C</i>, so that <i>BC</i> : <i>FC</i> :: 11 : 8; and let <i>CB</i> be made the axis of a parabola, whose vertex is <i>C</i>; then will any semiordinate <i>MP</i>, between the limits <i>l</i> (—36) and <i>L</i> (nearly 150,) drawn from the surface <i>M</i> of the mercury, represent the temperature of the body in which the thermometer is plunged; and <i>CM</i> the volume, due to the expansion of air under the same temperature and a uniform pressure.

系 5　学者たちの実験により、同じ圧力のもとで水銀と空気の体積は、ある範囲の中で、すなわち摂氏およそ −36 度からほぼ 150 度まで、歩調をそろえて（*pari passu*）変わることが示されている。そこで、図 41 の <i>AB</i> をふつうの水銀温度計（thermometer）とし、<i>F</i> を水の氷点、<i>B</i> を水の沸点とする。管、あるいはその脇の線を点 <i>C</i> まで延ばし、<i>BC</i> : <i>FC</i> :: 11 : 8 とする。そして <i>CB</i> を、頂点を <i>C</i> とする放物線の軸とする。すると、水銀の面 <i>M</i> から引いた半縦線（semiordinate）<i>MP</i> は、<i>l</i>（−36）から <i>L</i>（ほぼ 150）までの範囲で、温度計を差し入れた物体の温度を表し、<i>CM</i> は、同じ温度で一定の圧力のもとでの空気の膨張（expansion）による体積を表す。

訳注：誌面の「—36」はダッシュで負の符号を刷ったもの。放物線では半縦線の二乗が頂点からの軸の長さに比例するので、<i>MP</i>（温度）の二乗が <i>CM</i>（体積）に比例し、命題 IV を図に表したことになる。<i>BC</i> : <i>FC</i> = 11 : 8 は、系 3 の沸点と氷点の体積の比にあたる。

### ¶71　p.245

> *Cor.* 6. Since, if the temperatures are the same, the volumes are inversely proportional to the elasticities, it follows that the volumes being the same, the squares of the temperatures are as the elasticities. Hence, therefore, the same results would be obtained by measuring the temperatures by the elasticities, under an invariable volume, as by the volumes under an invariable compression, which is conformable to what MM. Dulong and Petit say they have found from experiment.

系 6　温度が同じなら体積は弾性に反比例するので、体積が同じなら温度の二乗は弾性に比例することになる。したがって、体積を一定にして弾性で温度を測っても、圧縮を一定にして体積で温度を測っても、同じ結果が得られるはずである。これは、デュロンとプティが実験から見いだしたと述べていることに合っている。

### ¶72　p.245

> *Scholium* 1.

注解 1

### ¶73　p.245

> In the preceding theorems and their corollaries, we have not considered whether the media be homogeneous or not, or whether their particles be [p.246] similar or dissimilar. The Theorems are totally independent of all considerations of homogeneity or similarity, and are, therefore, equally applicable to all gases, simple or compound, supposing, however, their particles to be indefinitely small, or their diameters to have no sensible proportion to the lines they describe.

前の定理とその系では、媒質が一様（homogeneous）かどうか、またその粒子が互いに似ているかどうかは考えなかった。これらの定理は、一様さ（homogeneity）や似ているかどうかの考察にまったくよらず、したがって単体でも化合物でも、すべての気体に等しく当てはまる。ただし、粒子がいくらでも小さい、すなわち粒子の直径が、粒子の描く線（道筋）に比べて目に見えるほどの割合をもたないと仮定してである。

### ¶74　p.246

> One of the longest known laws of gaseous bodies is that of the volume being reciprocally proportional to the elasticity. This law is demonstrated in Proposition II, and is one that I have been careful to establish by a clear and explicit proof, as well on account of its own importance, as of its being the foundation of most of the other deductions on the properties of gaseous bodies. I have, however, shown, in the Scholium to Proposition II, that the same law would result from the supposition of the particles being either perfectly or imperfectly elastic. But though this is true in the present instance, it is not so universally. For if we suppose a medium to be composed of elastic particles, and to be kept in a gaseous state by the actions of its particles on one another, and on the particles of the containing body; and if we also suppose the temperature to be equal to the momenta which these gaseous particles impress on the particles of the other bodies, then we find that, in order to preserve the temperature of the containing body, the gaseous particles must have such motions as will repel the particles of the containing body with momenta equal to the momenta which they had previous to the contact. But to do this, the particles of the gas, if they and the particles of the containing body [p.247] are unequal, will have different motions before and after the collision, which is evidently absurd. And if the gas should be transferred into a different body whose particles are larger or smaller than the particles of the other body, the temperature and elasticity of the gas will be changed, though both the capacity and temperature of the two containing bodies should be the same. Besides, the temperatures of the gas and of the containing bodies would never be the same, if their particles were unequal. Nor could a gas, constituted of elastic particles, follow the laws of either of the other propositions.

気体の物体（gaseous bodies）の法則のうちで最も古くから知られているものの一つは、体積が弾性（elasticity）に反比例する（reciprocally proportional）という法則である。この法則は命題 II で証明した。私はこれを、はっきりした明示的な証明で打ち立てるよう気を配った。それ自体が大事だからでもあり、気体の物体の性質について引き出すほかの結論のほとんどの土台だからでもある。ただし私は命題 II の注解で、粒子（particles）が完全に弾性的だと考えても、不完全に弾性的だと考えても、同じ法則が出てくることを示した。しかし、この場合にはそれが成り立っても、いつも成り立つわけではない。というのは、ある媒質（medium）が弾性のある粒子でできていて、その粒子どうしの作用と、器（containing body）の粒子への作用とによって気体の状態に保たれていると考え、さらに温度（temperature）が、この気体の粒子がほかの物体の粒子に与える運動量（momenta）に等しいと考えると、次のことがわかる。器の温度を保つには、気体の粒子は、器の粒子を、接触の前に自分が持っていた運動量に等しい運動量ではね返すような運動をしなければならない。ところがそうするには、気体の粒子は、もし器の粒子と等しくなければ、衝突（collision）の前と後とで違う運動を持つことになる。これは明らかに不合理である。また、その気体を、粒子が前の物体の粒子より大きい、あるいは小さい別の物体へ移すと、二つの器の容積（capacity）も温度も同じであっても、気体の温度と弾性は変わってしまう。そのうえ、粒子が等しくなければ、気体の温度と器の温度は決して同じにならない。さらに、弾性のある粒子でできた気体は、ほかの命題のどの法則にも従いえない。

訳注：「弾性のある粒子」は、ぶつかってはね返る粒子のこと。ヘラパスは、気体の粒子を硬い（完全には弾性的でない）物体とみなす自分の衝突の理論を前提にしている。capacity は器の容積（命題 I の系の「容積が等しく温度の同じ物体」と同じ語）で、熱容量ではない。

### ¶75　p.247

> If any method were known of experimentally determining the ratio of the temperatures of two bodies, we might easily devise ways enough of putting our theory to the test of observation; but since this is not the case, independent of theorems drawn from our principles, we are obliged to search for such consequences as are not under the control of the ratio, or of the quantity of temperature. The inference drawn in the first *Cor.* to Proposition IV is precisely of this kind, and presents us with a law that is easily examined by experiment. Indeed this law was discovered several years ago by MM. Dalton and Gay Lussac, and has been established by many experiments. It is one of the most important laws relative to the expansion and contraction of gaseous bodies that has yet been discovered; and affords not only a striking instance of the coincidence of the present theory of the constitution of gases with phenomena, but also a corroboration of our theory of collision; because [p.248] on no other theory of collision would the same gaseous laws follow.

もし二つの物体の温度の比を実験で定める方法が知られていれば、私たちの理論を観測で試す方法はいくらでもたやすく考え出せるだろう。しかしそうではないので、私たちの原理から引き出した定理とは別に、温度の比にも温度の量にも左右されない帰結を探さなければならない。命題 IV の系 1 で引き出した推論は、まさにこの種のものであり、実験でたやすく確かめられる法則を与える。実際この法則は、何年か前にドルトン（Dalton）とゲイ＝リュサック（Gay-Lussac）の両氏が見いだし、多くの実験で確かめられている。これは、気体の物体の膨張（expansion）と収縮（contraction）について今までに見いだされた法則のうちで最も大事なものの一つである。そしてこの法則は、気体の成り立ちについての今の理論が現象とよく合うことの際立った例になるだけでなく、私たちの衝突の理論の裏づけにもなる。ほかのどんな衝突の理論からも、同じ気体の法則は出てこないからである。

訳注：「温度の比を実験で定める方法が無い」は、ヘラパスの真の温度（粒子の運動量に比例する量）を、当時の温度計の目盛りからは直接に測れないという意味。

### ¶76　p.248

> In *Cor.* 2, this law is generalized, by which means we have an opportunity of comparing the theory with phenomena on a more extensive and varied scale. For if we suppress the ratio of the temperatures, by making it the ratio of equality, this *Cor.* will, in a variety of ways, become comparable with observation. By taking portions of any two gases, and measuring their elasticities and volumes at any common temperature, we ought by this *Cor.* to find that, if we raise or diminish the temperatures equally, and make the ratios of the first and second volumes equal, the ratios of the first and second elasticities ought to be equal. Again, if the two temperatures be equal, and we anyhow change the temperature, elasticity, and volume of one of the gases, and if we make the second elasticities and volumes to hold respectively the same ratios as the first, then ought the second temperature of the one gas to be equal to the second temperature of the other.

系 2 では、この法則が一般化される。これによって、理論と現象をもっと広く、もっと多様な形で比べる機会が得られる。温度の比を等しさの比（ratio of equality、1 対 1）にして、温度の比を消してしまえば、この系はいろいろな仕方で観測と比べられるようになる。任意の二つの気体を少しずつ取り、共通のある温度で弾性と体積を測ると、この系によれば、温度を等しく上げるか下げるかし、第一の体積どうしの比と第二の体積どうしの比を等しくすれば、第一の弾性どうしの比と第二の弾性どうしの比も等しくなるはずである。また、二つの温度が等しいとき、一方の気体の温度・弾性・体積を何らかの仕方で変え、第二の弾性どうし・体積どうしの比が、それぞれ第一のときと同じになるようにすれば、一方の気体の第二の温度は、もう一方の気体の第二の温度に等しくなるはずである。

訳注：「第一の」「第二の」は、変える前と後。二つの気体のあいだの比を、変える前と後とで比べている（命題 V の記号で、<i>t</i> ＝ <i>t</i><sub>1</sub> ＝ 1 なら <i>v</i> ＝ <i>v</i><sub>1</sub> のとき <i>e</i> ＝ <i>e</i><sub>1</sub>）。

### ¶77　p.248

> *Scholium* 2.

注解 2

### ¶78　p.248

> Let <b>B</b> = mean height of the barometer, which by the English is reckoned 30 inches, and by the French ·76 metre.
>
> <i>E</i> = any other elasticity in inches of mercury.
>
> <i>T</i> = true temperature, that at 32° F. being 1.
>
> <i>N</i> = numeratom in unity volume, that at 32° Fahr. and elasticity <b>B</b> being <b>N</b>.
>
> <i>D</i> = density or weight of unity volume, that at 32° Fahr. and elasticity <b>B</b> being <b>G</b>.
>
> [p.249] <i>V</i> = volume of gas that at 32° Fahr. and elasticity <b>B</b> being unity.
>
> Then we have the following elementary theorems for a single gas.
>
> <i>E</i> = <b>B</b><i>T</i><sup>2</sup>/<i>V</i>
>
> <i>N</i> = <b>N</b><i>E</i>/(<b>B</b><i>T</i><sup>2</sup>)　(1)
>
> <i>D</i> = <i>E</i><b>G</b>/(<b>B</b><i>T</i><sup>2</sup>)

次のように置く。

<b>B</b> ＝ 気圧計の平均の高さ。イギリスでは 30 インチ、フランスでは 0.76 メートルとされる。

<i>E</i> ＝ ほかの任意の弾性。水銀柱のインチで表す。

<i>T</i> ＝ 真の温度（true temperature）。32°F での値を 1 とする。

<i>N</i> ＝ 単位体積の中の原子数（numeratom）。32°F・弾性 <b>B</b> での値を <b>N</b> とする。

<i>D</i> ＝ 密度（density）、すなわち単位体積の重さ。32°F・弾性 <b>B</b> での値を <b>G</b> とする。

<i>V</i> ＝ 気体の体積。32°F・弾性 <b>B</b> での値を 1 とする。

すると、一つの気体について、次の基本的な定理が得られる。

<i>E</i> ＝ <b>B</b>・<i>T</i><sup>2</sup>/<i>V</i>

<i>N</i> ＝ <b>N</b>・<i>E</i>/(<b>B</b>・<i>T</i><sup>2</sup>)　(1)

<i>D</i> ＝ <i>E</i>・<b>G</b>/(<b>B</b>・<i>T</i><sup>2</sup>)

訳注：三つの式は <i>N</i> ＝ <b>N</b>/<i>V</i>、<i>D</i> ＝ <b>G</b>/<i>V</i> と同じことで、32°F・弾性 <b>B</b> では <i>E</i> ＝ <b>B</b>、<i>N</i> ＝ <b>N</b>、<i>D</i> ＝ <b>G</b> になる。弾性が真の温度の二乗に比例するのは、ヘラパスが温度を粒子の運動量（速さ）に比例する量とみなすから。今の言い方では、圧力は絶対温度（速さの二乗に比例する量）に比例する。

### ¶79　p.249

> *Scholium* 3.

注解 3

### ¶80　p.249

> Hence, the point of absolute cold is 480° Fahr. below water-freezing, or 448° below the Fahr. zero. For 1000 : 1375 :: 480 : 480+180 (660). At this point, therefore, all corpuscular motion would cease, and the temperature would be nothing, or it would be absolutely cold.

ここから、絶対的な寒さ（absolute cold）の点は、水の凍る点より 480°F 下、すなわち華氏の零度より 448° 下にある。なぜなら 1000 : 1375 :: 480 : 480+180（660）だからである。したがって、この点では微粒子の（corpuscular）運動はすべて止まり、温度は無くなる。つまり絶対的に寒くなる。

訳注：氷点から沸点（180°F の差）までに空気が 1 から 1.375 に膨らむという、ゲイ＝リュサックとドルトンの膨張の率に拠る（480 × 1.375 ＝ 660）。480 と 660 は、絶対的な寒さの点から測った華氏の度数で氷点と沸点を表したもの。今の値では絶対零度は氷点の下およそ 491.67°F。

### ¶81　p.249

> Latterly, this rate of expansion of gases, as before observed, has been challenged by MM. Magnus and Regnault, who have both come to a similar conclusion, namely, that air expands from 1·0000 at water-freezing to 1·3665 at the temperature of water-boiling. Assuming this to be the true rate, the point of absolute cold would be no less than 491°·13 Fahr. below freezing, instead of 480° by the previous expansion of Gay Lussac and Dalton, confirmed as it was believed to be by Dulong and Petit.

前にも述べたように、近ごろ、気体のこの膨張の率に、マグヌス（Magnus）とルニョー（Regnault）の両氏が異を唱えた。両氏はどちらも似た結論に達した。すなわち、空気は水の凍る点での 1.0000 から、水の沸く温度での 1.3665 まで膨張する。これを本当の率とすれば、絶対的な寒さの点は、ゲイ＝リュサックとドルトンの前の膨張の率による 480° ではなく、氷点より 491.13°F も下になる。前の率は、デュロン（Dulong）とプティ（Petit）が確かめたと信じられていたものである。

訳注：誌面の小数点は中点（1·0000・491°·13）。訳では 1.0000・491.13 と書いた。180 ÷ 0.3665 ＝ 491.13。

### ¶82　p.249

> The want of precision in this point is a matter of great inconvenience in investigations of the laws of heat, and much interferes with our own researches. [p.250] All our tables, which have been constructed for many years, and some of them stereotyped, were computed on the faith of the accuracy of Lussac and Dalton’s experiments; and as a great portion of the other computations were made just after Dulong and Petit’s celebrated Memoir respecting the Cooling Power of Gases appeared, I could make no alteration without nearly recasting the work, a labour for which I do not at all feel disposed. We shall, therefore, keep to the expansion laid down by Lussac and Dalton.

この点が精確でないことは、熱の法則を調べるうえで大きな不便であり、私たち自身の研究をひどく妨げている。私たちの表はどれも何年もかけて作ったもので、そのいくつかはすでに鉛版（stereotype）にしてあるが、すべてリュサックとドルトンの実験が精確だと信じて計算したものである。また、ほかの計算の多くは、気体の冷却の力についてのデュロンとプティの名高い論文が出た直後に行った。そのため、この著作をほとんど作り直さなければ、どこも改められない。そのような労を取る気はまったく無い。したがって、リュサックとドルトンが定めた膨張の率をそのまま使う。

訳注：「Cooling Power of Gases」はデュロンとプティの冷却についての論文（1817）を指すと見られる。stereotyped は、組んだ活字から鉛版を取って刷り増しに備えたこと。

### ¶83　p.250

> Proposition V.

命題 V

### ¶84　p.250

> *If the ratio of the elasticities of any two gases be that of* <i>e</i> *to* 1, *the ratio of their volumes that of* <i>v</i> *to* 1, *and of their temperatures that of* <i>t</i> *to* 1; *and if the elasticities, volumes, and temperatures of these gases be anyhow varied, so that the ratios of the second elasticities, volumes, and temperatures be respectively those of* <i>e</i><sub>1</sub> *to* 1, <i>v</i><sub>1</sub> *to* 1, *and* <i>t</i><sub>1</sub> *to* 1, *then will the ratio of* <i>e</i><sub>1</sub> *to* 1 *be equal to that of* <i>e</i> <i>t</i><sub>1</sub><sup>2</sup><i>v</i> *to* <i>t</i><sup>2</sup><i>v</i><sub>1</sub>.

*任意の二つの気体の弾性の比が* <i>e</i> *対 1、体積の比が* <i>v</i> *対 1、温度の比が* <i>t</i> *対 1 であるとする。そしてこれらの気体の弾性・体積・温度を何らかの仕方で変えて、第二の弾性・体積・温度の比が、それぞれ* <i>e</i><sub>1</sub> *対 1、*<i>v</i><sub>1</sub> *対 1、*<i>t</i><sub>1</sub> *対 1 になったとする。そのとき、*<i>e</i><sub>1</sub> *対 1 の比は、*<i>e</i>・<i>t</i><sub>1</sub><sup>2</sup>・<i>v</i> *対* <i>t</i><sup>2</sup>・<i>v</i><sub>1</sub> *の比に等しい。*

訳注：誌面の命題の文は斜体で、記号 <i>e</i>・<i>v</i>・<i>t</i> だけが立体で刷られている（訳ではほかの記号とそろえて斜体にした）。一つの気体では <i>E</i><i>V</i>/<i>T</i><sup>2</sup> が変わらない（命題 III）ので、二つの気体の比どうしで <i>e</i><sub>1</sub><i>v</i><sub>1</sub>/<i>t</i><sub>1</sub><sup>2</sup> ＝ <i>e</i><i>v</i>/<i>t</i><sup>2</sup> となり、命題の比が出る。

### ¶85　p.250

> For let us call <i>V</i>, <b>V</b> the first volumes; <i>E</i>, <b>E</b> the first elasticities; and <i>T</i>, <b>T</b> the first temperatures of the gases; and let <i>V</i><sub>1</sub>, <b>V</b><sub>1</sub> in like manner denote their second volumes; <i>E</i><sub>1</sub>, <b>E</b><sub>1</sub> their second elasticities; and <i>T</i><sub>1</sub>, <b>T</b><sub>1</sub> their second temperatures. Then by hypothesis, we have
>
> <i>V</i> : <b>V</b> :: <i>v</i> : 1 and <i>V</i><sub>1</sub> : <b>V</b><sub>1</sub> :: <i>v</i><sub>1</sub> : 1
>
> <i>E</i> : <b>E</b> :: <i>e</i> : 1　　<i>E</i><sub>1</sub> : <b>E</b><sub>1</sub> :: <i>e</i><sub>1</sub> : 1
>
> <i>T</i> : <b>T</b> :: <i>t</i> : 1　　<i>T</i><sub>1</sub> : <b>T</b><sub>1</sub> :: <i>t</i><sub>1</sub> : 1

というのは、二つの気体の第一の体積を <i>V</i>、<b>V</b>、第一の弾性を <i>E</i>、<b>E</b>、第一の温度を <i>T</i>、<b>T</b> とし、同じように第二の体積を <i>V</i><sub>1</sub>、<b>V</b><sub>1</sub>、第二の弾性を <i>E</i><sub>1</sub>、<b>E</b><sub>1</sub>、第二の温度を <i>T</i><sub>1</sub>、<b>T</b><sub>1</sub> で表すことにする。すると仮定から、次が成り立つ。

<i>V</i> : <b>V</b> :: <i>v</i> : 1 および <i>V</i><sub>1</sub> : <b>V</b><sub>1</sub> :: <i>v</i><sub>1</sub> : 1

<i>E</i> : <b>E</b> :: <i>e</i> : 1　　<i>E</i><sub>1</sub> : <b>E</b><sub>1</sub> :: <i>e</i><sub>1</sub> : 1

<i>T</i> : <b>T</b> :: <i>t</i> : 1　　<i>T</i><sub>1</sub> : <b>T</b><sub>1</sub> :: <i>t</i><sub>1</sub> : 1

### ¶86　p.251

> But by Proposition III,
>
> <i>E</i><sub>1</sub> : <i>E</i> :: <i>T</i><sub>1</sub><sup>2</sup><i>V</i> : <i>T</i><sup>2</sup><i>V</i><sub>1</sub>, and
>
> <b>E</b> : <b>E</b><sub>1</sub> :: <b>T</b><sup>2</sup><b>V</b><sub>1</sub> : <b>T</b><sub>1</sub><sup>2</sup><b>V</b>, and
>
> <i>E</i> : <b>E</b> :: <i>e</i> : 1.

ところが命題 III によって、次のようになる。

<i>E</i><sub>1</sub> : <i>E</i> :: <i>T</i><sub>1</sub><sup>2</sup>・<i>V</i> : <i>T</i><sup>2</sup>・<i>V</i><sub>1</sub>

<b>E</b> : <b>E</b><sub>1</sub> :: <b>T</b><sup>2</sup>・<b>V</b><sub>1</sub> : <b>T</b><sub>1</sub><sup>2</sup>・<b>V</b>

<i>E</i> : <b>E</b> :: <i>e</i> : 1

### ¶87　p.251

> Therefore, compounding these ratios, we shall get <i>E</i><sub>1</sub> : <b>E</b><sub>1</sub> or <i>e</i><sub>1</sub> : 1 :: <i>T</i><sub>1</sub><sup>2</sup> <b>T</b><sup>2</sup> <i>V</i> <b>V</b><sub>1</sub> <i>e</i> : <i>T</i><sup>2</sup> <b>T</b><sub>1</sub><sup>2</sup> <i>V</i><sub>1</sub> <b>V</b>; and consequently <i>e</i><sub>1</sub> : 1 :: <i>et</i><sub>1</sub><sup>2</sup> <i>v</i> : <i>t</i><sup>2</sup> <i>v</i><sub>1</sub>.

したがって、これらの比を合成する（掛け合わせる）と、<i>E</i><sub>1</sub> : <b>E</b><sub>1</sub>、すなわち <i>e</i><sub>1</sub> : 1 :: <i>T</i><sub>1</sub><sup>2</sup>・<b>T</b><sup>2</sup>・<i>V</i>・<b>V</b><sub>1</sub>・<i>e</i> : <i>T</i><sup>2</sup>・<b>T</b><sub>1</sub><sup>2</sup>・<i>V</i><sub>1</sub>・<b>V</b> が得られ、その結果 <i>e</i><sub>1</sub> : 1 :: <i>e</i>・<i>t</i><sub>1</sub><sup>2</sup>・<i>v</i> : <i>t</i><sup>2</sup>・<i>v</i><sub>1</sub> となる。

訳注：斜体の <i>E</i>・<i>T</i>・<i>V</i> は一方の気体、太字の <b>E</b>・<b>T</b>・<b>V</b> はもう一方の気体の弾性・温度・体積（p.250 の定め）。小文字はその比（<i>t</i> = <i>T</i>/<b>T</b>、<i>v</i> = <i>V</i>/<b>V</b> など）。今の言い方では <i>e</i><sub>1</sub> = <i>e</i>・<i>t</i><sub>1</sub><sup>2</sup>・<i>v</i>/(<i>t</i><sup>2</sup>・<i>v</i><sub>1</sub>)。

### ¶88　p.251

> *Cor.* 1. From this theorem it appears, that if the ratio of the first temperatures be a ratio of equality; and if the same be the case with the ratio of the second temperatures, no matter what be the ratio of the first and second temperatures, and if the same hold good with the ratios of the first and second volumes, then will the ratio of the first elasticities be equal to that of the second. That is, the volumes and temperatures of two gases always preserving ratios of equality, however much these volumes and temperatures may vary, the elasticities will maintain a given ratio. This is precisely what follows from *Cor.* 2 to the preceding Proposition.

系 1　この定理から次のことがわかる。最初の温度（temperature）の比が等しさの比（1 対 1）であり、二度目の温度の比も同じくそうであれば、最初と二度目の温度の比がどうであっても、また最初と二度目の体積（volume）の比についても同じことが成り立つならば、最初の弾性（elasticity）の比は二度目の弾性の比に等しい。つまり、二つの気体の体積と温度が、どれほど変わっても、いつも互いに等しい比を保つなら、弾性は一定の比を保つ。これはちょうど、前の命題の系 2 から出てくることである。

### ¶89　p.251

> *Cor.* 2. Supposing the same things to hold good respecting the temperatures, the theorem becomes <i>v</i><sub>1</sub> : 1 :: { <i>e</i> : 1, 1 : <i>e</i><sub>1</sub>, <i>v</i> : 1 }; that is, the ratio of the second volumes is equal to the ratio compounded of these three ratios; namely, the direct ratio of the first elasticities, the inverse of the second, and the direct of the first volumes.

系 2　温度について同じことが成り立つとすると、定理は <i>v</i><sub>1</sub> : 1 :: { <i>e</i> : 1, 1 : <i>e</i><sub>1</sub>, <i>v</i> : 1 } となる。すなわち、二度目の体積の比は、次の三つの比を合成した比に等しい。最初の弾性の比そのもの、二度目の弾性の比の逆、最初の体積の比そのもの、の三つである。

訳注：誌面は波括弧の中に三つの比を縦に並べる。それらを合成した比（掛け合わせた比）の意。今の言い方では <i>v</i><sub>1</sub> = <i>e</i>・<i>v</i>/<i>e</i><sub>1</sub>。

### ¶90　p.251

> N.B. The same things will also hold good in both these corollaries, if the two ratios of temperatures, instead of being ratios of equality, are equal.

注意　二つの温度の比が、等しさの比でなくても、互いに等しければ、この二つの系のどちらでも同じことが成り立つ。

### ¶91　p.252

> *Cor.* 3. In the construction of Mr. Leslie’s differential thermometer, it is supposed when the two balls are of equal temperatures, that the elasticities and volumes are also equal. Therefore in this case, <i>e</i>, <i>t</i>, and <i>v</i>, are each unity, and <i>t</i><sub>1</sub> : 1 :: √{ <i>v</i><sub>1</sub> : 1, <i>e</i><sub>1</sub> : 1 } which, because the alteration in volume is but trifling, is nearly equal to √ <i>e</i><sub>1</sub> : 1. Hence, if we know the ratios of the second volumes and elasticities, we also know the ratio of the second temperatures; or if we know only the ratio of the second elasticities, this ratio of the second temperatures is nearly ascertained; and, therefore, one of the second temperatures being known, the other, and the difference of the two, become known. But the ratio of the volumes is easily ascertained, by admeasurements previous to the making of the instrument; and the difference in the elastic forces is determined by the difference in the altitudes of the fluid in the two legs, from which and by keeping one of the legs at a certain temperature, and by having measured the elastic force of the gas at that temperature, before the finishing of the instrument, we shall be enabled to obtain the difference and ratio of the two elasticities, and thence the temperature of the gas in the other leg.

系 3　レズリー（Leslie）氏の示差温度計（differential thermometer）の作りでは、二つの球が等しい温度にあるとき、弾性と体積も等しいと仮定している。したがってこの場合、<i>e</i>、<i>t</i>、<i>v</i> はどれも 1 であり、<i>t</i><sub>1</sub> : 1 :: √{ <i>v</i><sub>1</sub> : 1, <i>e</i><sub>1</sub> : 1 } となる。体積の変化はごくわずかなので、これはほぼ √<i>e</i><sub>1</sub> : 1 に等しい。それゆえ、二度目の体積と弾性の比がわかれば、二度目の温度の比もわかる。また二度目の弾性の比だけがわかっても、二度目の温度の比はほぼ確かめられる。したがって、二度目の温度の一方がわかれば、もう一方と、二つの差もわかる。ところで体積の比は、器具を作る前の測定によってたやすく確かめられる。また弾性力（elastic force）の差は、二本の脚の中の液の高さの差によって定まる。このことから、一方の脚をある決まった温度に保ち、器具を仕上げる前にその温度での気体の弾性力を測っておけば、二つの弾性の差と比を得ることができ、そこからもう一方の脚の中の気体の温度を得ることができる。

訳注：√ は平方根で、誌面は波括弧の中に二つの比を縦に並べる（合成した比の平方根）。今の言い方では <i>t</i><sub>1</sub> = √(<i>v</i><sub>1</sub>・<i>e</i><sub>1</sub>)。レズリーはスコットランドの物理学者ジョン・レズリー（John Leslie, 1766–1832）。示差温度計は、管でつないだ二つの空気の球の温度差を、間の液柱の高さの差で示す器具。

### ¶92　p.252

> I have but just mentioned this ingenious and useful little instrument, whose theory is contained in the preceding Proposition, but he that wishes to be fully acquainted with its merits and the variety of purposes to which it is applicable, may consult [p.253] Mr. Leslie’s ‘Essay on Heat and Moisture,’ published some years since.

この巧みで役に立つ小さな器具については、その理論が前の命題に含まれているので、触れるだけにとどめた。その長所と、使える目的の多さを詳しく知りたい人は、数年前に出たレズリー氏の『熱と湿気についての試論』（‘Essay on Heat and Moisture’）を見るとよい。

訳注：誌面の題は略記と見られる。レズリーが 1813 年に出した *A Short Account of Experiments and Instruments, Depending on the Relations of Air to Heat and Moisture* を指すか。

### ¶93　p.253

> *Scholium.*

注解

### ¶94　p.253

> It has, in *Cor.* 5 to Proposition III, been remarked that the augmentations of volume in mercury and any gas have so nearly a given proportion, between certain temperatures, that scarcely any difference can be observed. With this fact, therefore, it will be no difficult matter to examine the preceding Theorem by direct experiment, in a more general way than we have yet supposed; for all the other ratios might be easily determined by methods already known, and the temperatures might be measured between the limits alluded to by a common mercurial thermometer, either in the way that is pointed out in *Cor.* 5, Proposition IV, or by dividing the thermometer into equal parts, letting the freezing point stand at 80° and the boiling at 110°; in which case the divisions would indicate the squares of the temperatures. Thus all the ratios might be obtained by experiment independently of each other; consequently, by combining any of them according to the theory, we shall be able to see whether the result agrees with that given by experiment.

命題 III の系 5 で、ある温度の間では、水銀と任意の気体の体積の増え方がほとんど一定の割合を保ち、違いがほとんど見えないことを述べた。したがってこの事実を使えば、前の定理を、これまで考えたより一般的な形で、直接の実験によって確かめるのは難しくない。ほかの比はみな、すでに知られた方法でたやすく決められるし、温度は、いま触れた範囲の中なら、ふつうの水銀温度計（thermometer）で測れるからである。測り方は、命題 IV の系 5 で示したやり方でもよいし、温度計を等しい目盛りに分け、氷点を 80°、沸点を 110° とするやり方でもよい。後の場合、目盛りは温度の二乗を示すことになる。こうしてすべての比を、互いに独立に実験で得ることができる。その結果、理論に従ってそれらのどれかを組み合わせれば、その結果が実験の与える結果と合うかどうかを見ることができる。

訳注：ヘラパスの温度（真の温度）は、その二乗が気体の体積（一定の圧力のもと）に比例する量。80 から 110 への比 1.375 は、ゲイ＝リュサック（Gay-Lussac）とドルトン（Dalton）の、氷点から沸点までの膨張 0.375 に当たる。

### ¶95　p.253

> Proposition VI. *Theorem.*

命題 VI　定理

### ¶96　p.253

> *If two or more airs which do not act chemically on one another have any communication, they will, in proportion to the space of communication, quickly* [p.254] *intermix, and severally diffuse themselves uniformly throughout the entire space.*

*化学的に互いに作用しない二つ以上の空気（の類）が、何らかの形でつながっていれば、それらは、つながる所の広さに比例して速やかに混ざり合い、それぞれが空間全体に一様に広がる。*

### ¶97　p.254

> For since the particles of airs move about in all possible ways, it is obvious the particles of no one gas can meet and beat back every particle of another gas. Hence, if some particles, are beaten back, others will pass and go on from step to step, to the end of the space in which they are contained, and the two airs will not settle into a perfect state of equilibrious action until each air is uniformly distributed throughout the entire space.

なぜなら、空気の粒子（particle）はありとあらゆる向きに動き回っているので、どの一つの気体の粒子も、別の気体のすべての粒子に出会って押し返すことはできないのは明らかだからである。それゆえ、ある粒子が押し返されても、ほかの粒子は通り抜けて、一歩一歩進み、それらを収めている空間の端まで行く。そして二つの空気は、どちらの空気も空間全体に一様に行きわたるまでは、作用の完全なつり合いの状態に落ち着かない。

訳注：誌面は「if some particles, are beaten back」と、主語のあとにコンマがある。

### ¶98　p.254

> *Scholium.*

注解

### ¶99　p.254

> This property of airs is well known to philosophers. Heavy gases have been put into communication with much lighter, by means of an extremely small hole or tube between the vessels containing the two airs, and in order to throw the obstacle of superior gravity in the way, a far heavier air has been placed below and the lighter above; but, in spite of this obstacle, the heavier air has gradually risen up into the space occupied by the lighter air, and the lighter air gradually descended into the lower space, until at length the airs have become equally intermixed throughout the whole spaces above and below. Dalton, who made the experiment, endeavours to explain this property by saying, “each gas is a vacuum to another.”

空気のこの性質は、自然を研究する人々（philosophers）によく知られている。重い気体を、ずっと軽い気体と、二つの空気を入れた器の間のごく小さな穴または管によってつないだ実験がある。重さがまさるという妨げをわざと置くために、ずっと重い空気を下に、軽い空気を上に置いた。それでもこの妨げにかかわらず、重い空気は少しずつ軽い空気の占める空間へ昇り、軽い空気は少しずつ下の空間へ降りて、ついには空気が上と下の空間全体に等しく混ざり合った。この実験をしたドルトン（Dalton）は、「どの気体も、別の気体にとっては真空である」と言って、この性質を説明しようとしている。

訳注：philosophers は当時の用法で、自然哲学者（今の科学者）の意。

### ¶100　p.254

> Proposition VII. *Theorem.*

命題 VII　定理

### ¶101　p.254

> *If several airs, not acting chemically on each other,* [p.255] *of the same temperature, be put together into the same space, and if <i>p</i>, <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, <i>p</i><sub>3</sub>, &c. would be the pressures or elasticities of these airs, each occupying the space above, the pressure or elasticity of the combined or compound air will be the sum <i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+<i>p</i><sub>3</sub>+ &c. of the pressures of all the simple airs.*

*化学的に互いに作用しない、同じ温度のいくつかの空気を、同じ一つの空間に入れるとき、それぞれの空気が単独でその空間を占めたときの圧力（pressure）すなわち弾性を <i>p</i>、<i>p</i><sub>1</sub>、<i>p</i><sub>2</sub>、<i>p</i><sub>3</sub> などとすれば、合わさった空気（混合した空気）の圧力すなわち弾性は、すべての単一の空気の圧力の和 <i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+<i>p</i><sub>3</sub>+ などになる。*

訳注：今のドルトンの分圧の法則に当たる。

### ¶102　p.255

> Let us suppose <i>s</i>, <i>s</i><sub>1</sub>, <i>s</i><sub>2</sub>, <i>s</i><sub>3</sub>, &c., to be the spaces which would be occupied by the airs respectively if their elasticities were all equal, and let us suppose they are all now put into communication with each other. Then, by the preceding proposition, they will all, in a short time, diffuse themselves uniformly throughout the connected spaces. If, therefore, we suppose each gas to keep itself in equilibrio, and <i>S</i> to be the space in which, if separately confined, the gases would have the elasticities <i>p</i>, <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, <i>p</i><sub>3</sub>, &c., respectively, the elasticity of each will be these several elasticities multiplied by the fraction <i>S</i>/(<i>s</i>+<i>s</i><sub>1</sub>+<i>s</i><sub>2</sub>+<i>s</i><sub>3</sub>+, &c.). Consequently the elasticity of the compound air is the sum <i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+<i>p</i><sub>3</sub>+, multiplied into the preceding fraction, and if compressed into the space <i>S</i>, it will by Proposition II be increased in the ratio of <i>S</i> to <i>s</i>+<i>s</i><sub>1</sub>+<i>s</i><sub>2</sub>+ . . that is, it will be equal to <i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+.

空気の弾性がみな等しいとしたときに、それぞれの空気が占める空間を <i>s</i>、<i>s</i><sub>1</sub>、<i>s</i><sub>2</sub>、<i>s</i><sub>3</sub> などとし、いま、それらをみな互いにつないだとしよう。すると前の命題によって、それらはみな短い時間のうちに、つながった空間全体に一様に広がる。そこで、それぞれの気体が自分だけでつり合いを保つ（in equilibrio）とし、また <i>S</i> を、気体を別々に閉じこめたときにそれぞれ弾性 <i>p</i>、<i>p</i><sub>1</sub>、<i>p</i><sub>2</sub>、<i>p</i><sub>3</sub> などを持つ空間とすれば、それぞれの弾性は、これらの弾性に分数 <i>S</i>/(<i>s</i>+<i>s</i><sub>1</sub>+<i>s</i><sub>2</sub>+<i>s</i><sub>3</sub>+ …) を掛けたものになる。したがって、合わさった空気の弾性は、和 <i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+<i>p</i><sub>3</sub>+ … に前の分数を掛けたものであり、これを空間 <i>S</i> に押し縮めれば、命題 II によって、<i>S</i> 対 <i>s</i>+<i>s</i><sub>1</sub>+<i>s</i><sub>2</sub>+ … の比で増える。すなわち、<i>p</i>+<i>p</i><sub>1</sub>+<i>p</i><sub>2</sub>+ … に等しくなる。

訳注：誌面は分数を行の頭に置き、同じ行に続けて「Consequently …」と書く。分母は「s+s₁+s₂+s₃+, &c.」。「A 対 B の比で増える」は、A であったものが B になる割合で、B/A 倍の意。ここでは (<i>s</i>+<i>s</i><sub>1</sub>+<i>s</i><sub>2</sub>+ …)/<i>S</i> 倍で、混ざった空気の弾性 (<i>p</i>+<i>p</i><sub>1</sub>+ …)・<i>S</i>/(<i>s</i>+<i>s</i><sub>1</sub>+ …) に掛けると和 <i>p</i>+<i>p</i><sub>1</sub>+ … になる。

### ¶103　p.255

> But if, instead of supposing the airs to preserve a separate and independent action, we assume, as soon as they are uniformly diffused throughout, that they act upon each other, then it is evident that the distribution must be such that each particle can [p.256] occupy no greater space in its mean motions than it did before communication was made between the spaces; for, if it did, it would have a less mean intensity of action, and some of the other particles would have a greater than is due to them. The consequence of this would be an inequality of action, which in a perfect fluid could not exist. Each particle, therefore, must have the same space to act in after the mixture of the gases as it had before the said mixture. But if each particle has the same space to act in, and the same velocity, its mean action must be the same; and hence the mean action of the whole particular air to which it belongs must be the same as before. Consequently the action of all the airs must be the same as they were previous to the union of the spaces, and of course the elasticity of the whole in the united space is the same as that which either of the airs had prior to the commixture. Now, the elasticity of the whole air, and the elasticity of each of these airs, in the space is
>
> <i>p</i> <i>S</i>/<i>s</i> = <i>p</i><sub>1</sub> <i>S</i>/<i>s</i><sub>1</sub> = <i>p</i><sub>2</sub> <i>S</i>/<i>s</i><sub>2</sub> = <i>p</i><sub>3</sub> <i>S</i>/<i>s</i><sub>3</sub> = . . . .

しかし、空気がそれぞれ別々に独立して作用し続けると考えるのではなく、空気が全体に一様に広がるとすぐに互いに作用し合うと仮定すれば、その分布は、どの粒子も、平均の運動（motion）の中で、空間どうしがつながる前より大きな空間を占めることがないようなものでなければならないのは明らかである。もし大きな空間を占めたとすれば、その粒子の作用の平均の強さは小さくなり、ほかのいくつかの粒子は、本来の分より大きな作用を持つことになるからである。その結果は作用の不等であり、それは完全な流体の中ではありえない。したがって、どの粒子も、気体が混ざったあとで、混ざる前と同じ大きさの、作用する空間を持たなければならない。ところで、どの粒子も作用する空間が同じで、速さ（velocity）も同じなら、その平均の作用は同じでなければならない。それゆえ、その粒子が属する個々の空気全体の平均の作用も、前と同じでなければならない。したがって、すべての空気の作用は、空間が一つになる前と同じでなければならず、当然、一つになった空間の中の全体の弾性は、混ざる前にどの空気が持っていた弾性とも同じである。さて、全体の空気の弾性と、これらの各空気の弾性は、その空間の中では次のとおりである。

<i>p</i>・<i>S</i>/<i>s</i> = <i>p</i><sub>1</sub>・<i>S</i>/<i>s</i><sub>1</sub> = <i>p</i><sub>2</sub>・<i>S</i>/<i>s</i><sub>2</sub> = <i>p</i><sub>3</sub>・<i>S</i>/<i>s</i><sub>3</sub> = …

訳注：<i>p</i>・<i>S</i>/<i>s</i> などは、空間 <i>S</i> で弾性 <i>p</i> の空気を空間 <i>s</i> に移したときの弾性（命題 II）で、<i>s</i> などの定めにより、どの空気でも同じ値になる。

### ¶104　p.256

> And, if the whole air was compressed into the space, its elasticity, by Proposition II, would be
>
> <i>p</i> (<i>s</i> + <i>s</i><sub>1</sub> + <i>s</i><sub>2</sub> +)/<i>s</i> = <i>p</i> + <i>p</i> (<i>s</i><sub>1</sub>/<i>s</i> + <i>s</i><sub>2</sub>/<i>s</i> + <i>s</i><sub>3</sub>/<i>s</i> +)
>
> = <i>p</i> + <i>p</i><sub>1</sub> + <i>p</i><sub>2</sub> + . . . .
>
> by the property just shown.

そして、もし空気全体をその空間に押し縮めたとすれば、その弾性（elasticity）は、命題 II によって次のようになる。

<i>p</i>・(<i>s</i> + <i>s</i><sub>1</sub> + <i>s</i><sub>2</sub> + …)/<i>s</i> = <i>p</i> + <i>p</i>・(<i>s</i><sub>1</sub>/<i>s</i> + <i>s</i><sub>2</sub>/<i>s</i> + <i>s</i><sub>3</sub>/<i>s</i> + …)

= <i>p</i> + <i>p</i><sub>1</sub> + <i>p</i><sub>2</sub> + …

二行目は、いま示した性質による。

訳注：左辺の分子は誌面では <i>s</i> + <i>s</i><sub>1</sub> + <i>s</i><sub>2</sub> + で切れ、右辺の括弧は <i>s</i><sub>3</sub> まで書く。どちらも続く項を「+」で示しており、式の筋は同じ。いま示した性質とは、直前の <i>p</i>/<i>s</i> = <i>p</i><sub>1</sub>/<i>s</i><sub>1</sub> = … のことで、これから <i>p</i>・<i>s</i><sub>1</sub>/<i>s</i> = <i>p</i><sub>1</sub> などが出る。

### ¶105　p.257

> *Scholium.*

注解

### ¶106　p.257

> To prepare for more extended researches, and to avoid the repetition of definitions and the meaning of letters, we assume that each gas is homogeneous. Let, then,

これから先のより広い研究に備え、また定義と文字の意味を繰り返さないために、それぞれの気体（gas）は一様（homogeneous）であると仮定する。そこで、次のように置く。

### ¶107　p.257

> <i>M</i>, <i>m</i> denote the masses of the particles of two airs;
>
> <i>L</i>, <i>l</i> the lengths of their paths in their transit;
>
> <i>S</i>, <i>s</i> their velocities;
>
> <i>R</i>, <i>r</i> their numbers of revolutions in a given time;
>
> <i>N</i>, <i>n</i> their numeratoms, or numbers of particles in unity volumes;
>
> <i>D</i>, <i>d</i> the weights of unity volumes;
>
> <i>T</i>, <i>t</i> the true temperatures; <i>T</i> = 1 at 32° Fahr.;
>
> <i>E</i>, <i>e</i> their elasticities in barometric inches;
>
> <i>G</i>, <i>g</i> their specific gravities when <i>T</i> = 1 and <i>E</i> = <b>E</b> = 30.
>
> <i>V</i>, <i>v</i> the volumes;
>
> <i>W</i>, <i>w</i> the weights of the volumes <i>V</i>, <i>v</i>.
>
> <i>P</i>, <i>p</i> the numbers of particles in <i>V</i>, <i>v</i>.
>
> <i>C</i>, <i>c</i> the numbers of collisions against unity, area in unity time.

<i>M</i>, <i>m</i> は二つの空気（airs）の粒子（particle）の質量（mass）を表す。

<i>L</i>, <i>l</i> は、粒子が行き来するときの道のりの長さ。

<i>S</i>, <i>s</i> は粒子の速さ（velocity）。

<i>R</i>, <i>r</i> は、与えられた時間のうちに粒子が巡る回数（numbers of revolutions）。

<i>N</i>, <i>n</i> は粒子の原子数（numeratom）、すなわち単位体積の中の粒子の数。

<i>D</i>, <i>d</i> は単位体積の重さ。

<i>T</i>, <i>t</i> は真の温度（true temperature）。華氏 32° で <i>T</i> = 1 とする。

<i>E</i>, <i>e</i> は、気圧計のインチで測った弾性。

<i>G</i>, <i>g</i> は、<i>T</i> = 1 かつ <i>E</i> = <b>E</b> = 30 のときの比重。

<i>V</i>, <i>v</i> は体積（volume）。

<i>W</i>, <i>w</i> は体積 <i>V</i>, <i>v</i> の重さ。

<i>P</i>, <i>p</i> は <i>V</i>, <i>v</i> の中の粒子の数。

<i>C</i>, <i>c</i> は、単位時間に単位面積にぶつかる衝突（collision）の回数。

訳注：誌面は定義を一行ずつ字下げして並べる。原子数（numeratom）は、一定の体積の中の粒子の数を言うヘラパスの造語。revolution は、粒子が器の中を行って戻る一巡りのこと。最後の行の「unity, area」のコンマは誌面のまま（「単位面積」の意）。

### ¶108　p.257

> All these letters, except <i>M</i>, <i>m</i>, and <i>G</i>, <i>g</i> are represented by corresponding Roman letters, when <i>T</i> = 1 and <b>E</b> = 30.

これらの文字はすべて、<i>M</i>, <i>m</i> と <i>G</i>, <i>g</i> を除き、<i>T</i> = 1 かつ <b>E</b> = 30 のときには、対応する立体（ローマン体）の文字で表す。

訳注：立体の文字は、誌面では太字の <b>N</b>・<b>E</b> と、小さな大文字の <small>N</small>（<i>n</i> にあたる）で刷られている。

### ¶109　p.257

> From these definitions certain preliminary equations immediately flow. For example, [p.258]
>
> <i>T</i> = <i>SM</i>
>
> <i>R</i> = <i>S</i>/<i>L</i>
>
> <i>N</i> = <i>E</i><b>N</b>/<b>E</b><i>T</i><sup>2</sup>
>
> <i>D</i> = <i>NM</i> = <i>W</i>/<i>V</i> = <i>G</i> <i>E</i>/<b>E</b><i>T</i><sup>2</sup>　(2)
>
> <i>P</i> = <i>NV</i>
>
> <i>W</i> = <i>MP</i> = <i>MNV</i> = <i>DV</i>
>
> <i>E</i> = <i>CT</i>
>
> <i>G</i> = <b>N</b><i>M</i>.

これらの定義から、いくつかの前置きの式がすぐに出てくる。たとえば次のとおり。

<i>T</i> = <i>S</i>・<i>M</i>

<i>R</i> = <i>S</i>/<i>L</i>

<i>N</i> = <i>E</i>・<b>N</b>/(<b>E</b>・<i>T</i><sup>2</sup>)

<i>D</i> = <i>N</i>・<i>M</i> = <i>W</i>/<i>V</i> = <i>G</i>・<i>E</i>/(<b>E</b>・<i>T</i><sup>2</sup>)　(2)

<i>P</i> = <i>N</i>・<i>V</i>

<i>W</i> = <i>M</i>・<i>P</i> = <i>M</i>・<i>N</i>・<i>V</i> = <i>D</i>・<i>V</i>

<i>E</i> = <i>C</i>・<i>T</i>

<i>G</i> = <b>N</b>・<i>M</i>

訳注：<i>T</i> = <i>SM</i> は、真の温度を粒子の運動量（速さ×質量）に比例させるヘラパスの立て方による。今の物理では温度は粒子の運動エネルギーの平均に比例する。誌面の番号 (2) は八つの式のまとまりの中ほどに付き、まとまり全体の番号と読める。

### ¶110　p.258

> Besides these the following equations of comparison are very obvious:
>
> <i>L</i> ∝ 1/<i>N</i><sup>⅓</sup> ∝ ∛(<i>V</i>/<i>P</i>) ∝ ∛(<i>W</i>/<i>PMN</i>) ∝ ∛(<i>W</i>/<i>DP</i>)
>
> <i>R</i> ∝ <i>N</i><sup>⅓</sup> <i>S</i> ∝ <i>N</i><sup>⅓</sup><i>T</i>/<i>M</i> ∝ <i>T</i>/<i>ML</i>.　(3)

このほかに、次の比較の式（比例の式）もごく明らかである。

<i>L</i> ∝ 1/<i>N</i><sup>⅓</sup> ∝ ∛(<i>V</i>/<i>P</i>) ∝ ∛(<i>W</i>/(<i>P</i>・<i>M</i>・<i>N</i>)) ∝ ∛(<i>W</i>/(<i>D</i>・<i>P</i>))

<i>R</i> ∝ <i>N</i><sup>⅓</sup>・<i>S</i> ∝ <i>N</i><sup>⅓</sup>・<i>T</i>/<i>M</i> ∝ <i>T</i>/(<i>M</i>・<i>L</i>)　(3)

### ¶111　p.258

> These theorems flow so obviously from the premises as to require no formal demonstration. They will, however, be found exceedingly useful in all our inquiries hereafter, for which reason, and to save a multiplicity of words and references, I here throw them together.

これらの定理は前提からあまりに明らかに出てくるので、形式の整った証明は要らない。けれども、この先のすべての探究でたいへん役に立つことがわかるだろう。そのため、また言葉と参照の数を減らすために、ここにまとめて置く。

### ¶112　p.258

> The equations of comparison may be converted into equations of equality by making ratios with the smaller letters. Thus
>
> <i>L</i>/<i>l</i> = ∛(<i>n</i>/<i>N</i>) = ∛(<i>Vp</i>/<i>vP</i>) = ∛(<i>Wpmn</i>/<i>wPMN</i>) = ∛(<i>Wpd</i>/<i>wPD</i>)
>
> <i>R</i>/<i>r</i> = <i>S</i>/<i>s</i> ∛(<i>N</i>/<i>n</i>) = <i>N</i><sup>⅓</sup><i>Tm</i>/<i>n</i><sup>⅓</sup><i>tM</i> = <i>Tml</i>/<i>tML</i>.　(4)

比較の式は、小文字との比をとれば、等しさの式に直せる。すなわち次のとおり。

<i>L</i>/<i>l</i> = ∛(<i>n</i>/<i>N</i>) = ∛(<i>V</i>・<i>p</i>/(<i>v</i>・<i>P</i>)) = ∛(<i>W</i>・<i>p</i>・<i>m</i>・<i>n</i>/(<i>w</i>・<i>P</i>・<i>M</i>・<i>N</i>)) = ∛(<i>W</i>・<i>p</i>・<i>d</i>/(<i>w</i>・<i>P</i>・<i>D</i>))

<i>R</i>/<i>r</i> = (<i>S</i>/<i>s</i>)・∛(<i>N</i>/<i>n</i>) = <i>N</i><sup>⅓</sup>・<i>T</i>・<i>m</i>/(<i>n</i><sup>⅓</sup>・<i>t</i>・<i>M</i>) = <i>T</i>・<i>m</i>・<i>l</i>/(<i>t</i>・<i>M</i>・<i>L</i>)　(4)

### ¶113　p.259

> Proposition VIII.

命題 VIII

### ¶114　p.259

> *If there be two gases whose elasticities are <i>E</i>, <i>e</i>, densities <i>D</i>, <i>d</i>, temperatures <i>T</i>, <i>t</i>, and numeratoms <i>N</i>, <i>n</i>, then*
>
> <i>E</i> : <i>e</i> :: <i>N</i><sup>2</sup><i>T</i><sup>2</sup><i>d</i> : <i>n</i><sup>2</sup><i>t</i><sup>2</sup><i>D</i>.

弾性が <i>E</i>, <i>e</i>、密度（density）が <i>D</i>, <i>d</i>、温度が <i>T</i>, <i>t</i>、原子数が <i>N</i>, <i>n</i> の二つの気体があれば、次が成り立つ。

<i>E</i> : <i>e</i> :: <i>N</i><sup>2</sup>・<i>T</i><sup>2</sup>・<i>d</i> : <i>n</i><sup>2</sup>・<i>t</i><sup>2</sup>・<i>D</i>

### ¶115　p.259

> For if we suppose the same number of particles in each of the two airs to be confined in similar spaces, the motions of their particles will be similar, at least there is no reason why they should not. The similar sides will also be struck by the same number of particles; and if we suppose the airs to be divided into strata, the numbers out of the first, second, third, &c. strata of the two airs, which respectively strike the like sides, will be the same in both airs. Therefore the number of particles which strike in the same time against equal areas in the similar sides, will be inversely as the areas of those sides, or inversely as the 2-3d power of the whole volumes, or, which is the same, as the 2-3d powers directly of the numeratoms of the gases, that is, as <i>N</i><sup>⅔</sup> to <i>n</i><sup>⅔</sup>. But the elasticities are as the numbers that strike in a given time; the forces with which they strike, that is, their temperatures; and the number of times two corresponding particles in the two airs strike, conjointly. If, therefore, <i>R</i>, <i>r</i> be the numbers of revolutions of two corresponding particles in a given time as in the last Scholium,
>
> <i>E</i> : <i>e</i> :: <i>N</i><sup>⅔</sup> <i>TR</i> : <i>n</i><sup>⅔</sup> <i>tr</i>.

というのは、二つの空気のそれぞれで、同じ数の粒子を相似な空間に閉じ込めたとすれば、粒子の運動（motion）も相似になるだろう。少なくとも、そうならない理由はない。相似な面は、同じ数の粒子にぶつかられもする。また、空気を層に分けたと考えれば、二つの空気の第一・第二・第三などの層から、それぞれ対応する面にぶつかる粒子の数は、両方の空気で同じになる。したがって、同じ時間に相似な面の等しい面積にぶつかる粒子の数は、それらの面の面積に反比例する。すなわち体積全体の 2/3 乗に反比例し、同じことだが、気体の原子数の 2/3 乗に正比例する。つまり <i>N</i><sup>⅔</sup> 対 <i>n</i><sup>⅔</sup> である。ところで、弾性は、与えられた時間にぶつかる粒子の数と、ぶつかるときの力（すなわち温度）と、二つの空気で対応する二つの粒子がぶつかる回数とを、掛け合わせたものに比例する。そこで、前の注解のとおり <i>R</i>, <i>r</i> を、対応する二つの粒子が与えられた時間に巡る回数とすれば、次のようになる。

<i>E</i> : <i>e</i> :: <i>N</i><sup>⅔</sup>・<i>T</i>・<i>R</i> : <i>n</i><sup>⅔</sup>・<i>t</i>・<i>r</i>

訳注：「2-3d power」は 2/3 乗のこと。ぶつかる力を温度とするのは、ヘラパスが真の温度を粒子の運動量としているため（p.258 の <i>T</i> = <i>SM</i>）。

### ¶116　p.260

> Now from the equations (3) we have
>
> <i>R</i> : <i>r</i> :: <i>N</i><sup>⅓</sup> <i>S</i> : <i>n</i><sup>⅓</sup> <i>s</i>.
>
> Whence　<i>E</i> : <i>e</i> :: <i>NTS</i> : <i>nts</i>.

さて、式 (3) から次が得られる。

<i>R</i> : <i>r</i> :: <i>N</i><sup>⅓</sup>・<i>S</i> : <i>n</i><sup>⅓</sup>・<i>s</i>

よって、

<i>E</i> : <i>e</i> :: <i>N</i>・<i>T</i>・<i>S</i> : <i>n</i>・<i>t</i>・<i>s</i>

### ¶117　p.260

> Again, <i>M</i>, <i>m</i> being the masses of two particles in the two airs, <i>T</i> = <i>SM</i> and <i>t</i> = <i>sm</i>, so that
>
> <i>E</i> : <i>e</i> :: <i>NT</i><sup>2</sup>/<i>M</i> : <i>nt</i><sup>2</sup>/<i>m</i> :: <i>N</i><sup>2</sup><i>T</i><sup>2</sup>/<i>MN</i> : <i>n</i><sup>2</sup><i>t</i><sup>2</sup>/<i>mn</i> ::
>
> <i>N</i><sup>2</sup><i>T</i><sup>2</sup><i>d</i> : <i>n</i><sup>2</sup><i>t</i><sup>2</sup><i>D</i>,
>
> as was to be proved, which gives
>
> <i>E</i>/<i>e</i> = <i>N</i><sup>2</sup><i>T</i><sup>2</sup><i>d</i>/<i>n</i><sup>2</sup><i>t</i><sup>2</sup><i>D</i> = <i>NT</i><sup>2</sup><i>m</i>/<i>nt</i><sup>2</sup><i>M</i>.　(5)

また、<i>M</i>, <i>m</i> を二つの空気の二つの粒子の質量とすれば、<i>T</i> = <i>SM</i>、<i>t</i> = <i>sm</i> である。したがって、

<i>E</i> : <i>e</i> :: <i>N</i>・<i>T</i><sup>2</sup>/<i>M</i> : <i>n</i>・<i>t</i><sup>2</sup>/<i>m</i> :: <i>N</i><sup>2</sup>・<i>T</i><sup>2</sup>/(<i>M</i>・<i>N</i>) : <i>n</i><sup>2</sup>・<i>t</i><sup>2</sup>/(<i>m</i>・<i>n</i>) ::

<i>N</i><sup>2</sup>・<i>T</i><sup>2</sup>・<i>d</i> : <i>n</i><sup>2</sup>・<i>t</i><sup>2</sup>・<i>D</i>

となり、これが証明すべきことであった。これから次が出る。

<i>E</i>/<i>e</i> = <i>N</i><sup>2</sup>・<i>T</i><sup>2</sup>・<i>d</i>/(<i>n</i><sup>2</sup>・<i>t</i><sup>2</sup>・<i>D</i>) = <i>N</i>・<i>T</i><sup>2</sup>・<i>m</i>/(<i>n</i>・<i>t</i><sup>2</sup>・<i>M</i>)　(5)

訳注：二行目の <i>MN</i>・<i>mn</i> は単位体積の重さ <i>D</i>・<i>d</i> にあたる（p.258 の <i>D</i> = <i>NM</i>）。

### ¶118　p.260

> *Cor.* 1. When <i>E</i> = <i>e</i> and <i>T</i> = <i>t</i>, <i>D</i>/<i>d</i> is the ratio of the specific gravities, and therefore
>
> <i>N</i><sup>2</sup>/<i>n</i><sup>2</sup> = <i>D</i>/<i>d</i> = <i>G</i>/<i>g</i>.
>
> That is, the numbers of particles in given volumes, under equal pressures and temperatures, are as the square roots of the specific gravities. Consequently, if oxygen is 16 times heavier than hydrogen, there is quadruple the number of particles of oxygen in a given volume that there is of hydrogen.

系 1　<i>E</i> = <i>e</i> かつ <i>T</i> = <i>t</i> のとき、<i>D</i>/<i>d</i> は比重の比である。したがって、

<i>N</i><sup>2</sup>/<i>n</i><sup>2</sup> = <i>D</i>/<i>d</i> = <i>G</i>/<i>g</i>

すなわち、与えられた体積の中の粒子の数は、圧力（pressure）と温度が等しいとき、比重の平方根に比例する。したがって、酸素が水素の 16 倍重ければ、与えられた体積の中の酸素の粒子の数は、水素の粒子の数の 4 倍である。

訳注：今の物理（アボガドロの法則）では、同じ圧力と温度で同じ体積の気体は、気体の種類によらず同じ数の分子を含む。ここでの結論はそれと食い違う。真の温度を運動量に比例させた立て方から出てくる。

### ¶119　p.260

> *Cor.* 2. Because <i>G</i> : <i>g</i> :: <b>N</b><i>M</i> : <small>N</small><i>m</i>; we obtain by the last corollary
>
> <b>N</b><i>M</i>/<small>N</small><i>m</i> = <i>G</i>/<i>g</i> = <i>N</i><sup>2</sup>/<i>n</i><sup>2</sup>　(6)
>
> when the elasticities and temperatures are equal. [p.261] Therefore when <i>N</i> = <b>N</b> and <i>n</i> = <small>N</small>
>
> <b>N</b><sup>2</sup>/<small>N</small><sup>2</sup> = <i>G</i>/<i>g</i>　(7)

系 2　<i>G</i> : <i>g</i> :: <b>N</b><i>M</i> : <small>N</small><i>m</i> であるから、前の系によって、弾性と温度が等しいときには次が得られる。

<b>N</b>・<i>M</i>/(<small>N</small>・<i>m</i>) = <i>G</i>/<i>g</i> = <i>N</i><sup>2</sup>/<i>n</i><sup>2</sup>　(6)

したがって、<i>N</i> = <b>N</b> かつ <i>n</i> = <small>N</small> のときには、次のようになる。

<b>N</b><sup>2</sup>/<small>N</small><sup>2</sup> = <i>G</i>/<i>g</i>　(7)

訳注：<b>N</b>・<small>N</small> は、<i>T</i> = 1、<b>E</b> = 30 のときの <i>N</i>・<i>n</i>。(6) から <i>M</i>/<i>m</i> = <b>N</b>/<small>N</small> も出る。

### ¶120　p.261

> This is indeed a natural consequence of the preceding *Cor.*

これは、まさに前の系から自然に出てくる結果である。

### ¶121　p.261

> *Cor.* 3. Hence, also
>
> <i>s</i>/<i>S</i> = <i>M</i>/<i>m</i> = <b>N</b>/<small>N</small> = √(<i>G</i>/<i>g</i>)　(8)
>
> That is, the masses of the particles, and their velocities at the same temperature, are as the numeratoms or square roots of the specific gravities.

系 3　ここから、また次のようになる。

<i>s</i>/<i>S</i> = <i>M</i>/<i>m</i> = <b>N</b>/<small>N</small> = √(<i>G</i>/<i>g</i>)　(8)

すなわち、粒子の質量（mass）と、同じ温度での粒子の速さ（velocity）は、原子数（numeratom）の比、つまり比重（specific gravity）の平方根の比になる。

訳注：太字の <b>N</b> と小さな大文字の <small>N</small> は、温度 <i>T</i> = 1・弾性 <b>E</b> = 30 のときの二つの気体の原子数（p.257 の定め）。式では速さの比が <i>s</i>/<i>S</i> と逆向きに置かれており、速さは比重の平方根に反比例する。

### ¶122　p.261

> *Cor.* 4. If Δ, δ denote the diameters of the particles, and they be of similar figures and densities,
>
> Δ<sup>6</sup>/δ<sup>6</sup> = <i>G</i>/<i>g</i> and <b>N</b>/<small>N</small> = Δ<sup>3</sup>/δ<sup>3</sup>　(9)

系 4　Δ、δ が粒子の直径を表し、粒子が互いに相似な形と同じ密度（density）をもつとすれば、次のようになる。

Δ<sup>6</sup>/δ<sup>6</sup> = <i>G</i>/<i>g</i>　および　<b>N</b>/<small>N</small> = Δ<sup>3</sup>/δ<sup>3</sup>　(9)

### ¶123　p.261

> *Cor.* 5. So we find
>
> <i>C</i>/<i>c</i> = <i>Et</i>/<i>Te</i> = (<i>N</i><sup>2</sup><i>Td</i>)/(<i>n</i><sup>2</sup><i>tD</i>) = (<i>N</i><sup>2</sup><i>T</i><sup>3</sup><i>eg</i>)/(<i>n</i><sup>2</sup><i>t</i><sup>3</sup><i>EG</i>)　(10)

系 5　こうして次のことがわかる。

<i>C</i>/<i>c</i> = (<i>E</i>・<i>t</i>)/(<i>T</i>・<i>e</i>) = (<i>N</i><sup>2</sup>・<i>T</i>・<i>d</i>)/(<i>n</i><sup>2</sup>・<i>t</i>・<i>D</i>) = (<i>N</i><sup>2</sup>・<i>T</i><sup>3</sup>・<i>e</i>・<i>g</i>)/(<i>n</i><sup>2</sup>・<i>t</i><sup>3</sup>・<i>E</i>・<i>G</i>)　(10)

訳注：分母の <i>t</i> の指数は刷りが細いが 3 と読む。第 2 辺と第 4 辺を等しいと置くと <i>E</i><sup>2</sup>/<i>e</i><sup>2</sup> = <i>N</i><sup>2</sup>・<i>T</i><sup>4</sup>・<i>g</i>/(<i>n</i><sup>2</sup>・<i>t</i><sup>4</sup>・<i>G</i>) となり、式 (11) の二乗と合う。第 2 辺は <i>E</i> = <i>CT</i>、第 3 辺は式 (5) から出る。

### ¶124　p.261

> *Cor.* 6. From this last equation we obtain
>
> <i>E</i>/<i>e</i> = (<i>NT</i><sup>2</sup>√<i>g</i>)/(<i>nt</i><sup>2</sup>√<i>G</i>)　(11)

系 6　この最後の式から、次が得られる。

<i>E</i>/<i>e</i> = (<i>N</i>・<i>T</i><sup>2</sup>・√<i>g</i>)/(<i>n</i>・<i>t</i><sup>2</sup>・√<i>G</i>)　(11)

### ¶125　p.261

> Proposition IX. Problem.

命題 IX　問題

### ¶126　p.261

> *It is required to investigate a theorem to contain all conditions or relations of permanent airs.*

*永久気体（permanent airs）のすべての条件、すなわち関係を含む一つの定理を探し出すこと。*

訳注：永久気体は、当時どんな圧力・寒さでも液にならないと考えられていた気体（水素・酸素・窒素など）。

### ¶127　p.261

> Using the preceding equations, to introduce all the letters, we have
>
> <i>E</i><sup>2</sup> ∝ (<i>P</i><sup>2</sup><i>LT</i><sup>6</sup><i>NRD</i><sup>2</sup>)/(<i>VC</i><sup>2</sup><i>M</i><sup>3</sup><i>SWG</i>) and also ∝ (<i>NL</i><sup>2</sup><i>T</i><sup>3</sup><i>CD</i><sup>3</sup><i>V</i><sup>2</sup><i>S</i>)/(<i>MPRWG</i>)　(12)

前の諸式を使って、すべての文字を入れると、次のようになる。

<i>E</i><sup>2</sup> ∝ (<i>P</i><sup>2</sup>・<i>L</i>・<i>T</i><sup>6</sup>・<i>N</i>・<i>R</i>・<i>D</i><sup>2</sup>)/(<i>V</i>・<i>C</i><sup>2</sup>・<i>M</i><sup>3</sup>・<i>S</i>・<i>W</i>・<i>G</i>)　また　∝ (<i>N</i>・<i>L</i><sup>2</sup>・<i>T</i><sup>3</sup>・<i>C</i>・<i>D</i><sup>3</sup>・<i>V</i><sup>2</sup>・<i>S</i>)/(<i>M</i>・<i>P</i>・<i>R</i>・<i>W</i>・<i>G</i>)　(12)

### ¶128　p.262

> The latter is found by a different process. A great variety of formulæ may indeed be found, all coming to the same thing.

後のほうの式は、別の道筋で求めたものである。じっさい、結局は同じことになる式を、ほかにもいろいろ見つけることができる。

### ¶129　p.262

> These are general expressions from which any may be eliminated when not wanted. Either expression is as good as the other.

これらは一般的な式で、要らない文字はどれでもここから消去できる。どちらの式も同じように役に立つ。

### ¶130　p.262

> *Cor.* 1. Eliminating <i>R</i>, <i>L</i>, and <i>S</i>, by means of the preliminary equations (2) and (3), we have from the latter of the equations (12)
>
> <i>E</i><sup>2</sup> ∝ (<i>NT</i><sup>3</sup><i>CD</i><sup>3</sup><i>V</i><sup>3</sup>)/(<i>MP</i><sup>2</sup><i>WG</i>)　(13).

系 1　前置きの式 (2) と (3) を使って <i>R</i>、<i>L</i>、<i>S</i> を消去すると、式 (12) の後のほうから次が得られる。

<i>E</i><sup>2</sup> ∝ (<i>N</i>・<i>T</i><sup>3</sup>・<i>C</i>・<i>D</i><sup>3</sup>・<i>V</i><sup>3</sup>)/(<i>M</i>・<i>P</i><sup>2</sup>・<i>W</i>・<i>G</i>)　(13)

### ¶131　p.262

> *Cor.* 2. Again eliminating <i>D</i>, <i>V</i>, <i>P</i>, and <i>W</i>, and we obtain
>
> <i>E</i><sup>2</sup> ∝ (<i>NT</i><sup>3</sup><i>CM</i>)/<i>G</i>　(14)
>
> and because <i>CM</i> ∝ <i>NT</i> by (2) and (5) we have
>
> <i>E</i> ∝ (<i>NT</i><sup>2</sup>)/√<i>G</i>　(15).

系 2　さらに <i>D</i>、<i>V</i>、<i>P</i>、<i>W</i> を消去すると、次が得られる。

<i>E</i><sup>2</sup> ∝ (<i>N</i>・<i>T</i><sup>3</sup>・<i>C</i>・<i>M</i>)/<i>G</i>　(14)

そして、(2) と (5) により <i>C</i>・<i>M</i> ∝ <i>N</i>・<i>T</i> であるから、次のようになる。

<i>E</i> ∝ (<i>N</i>・<i>T</i><sup>2</sup>)/√<i>G</i>　(15)

訳注：誌面は「Again eliminating … and we obtain」で、「and」が一つ余分に見える。訳では落とした。

### ¶132　p.262

> This is a very useful theorem in the phenomena of gases.

これは、気体の現象を扱うのにたいへん役に立つ定理である。

### ¶133　p.262

> *Cor.* 3. By putting for <i>NT</i><sup>2</sup>, in (14), its value <i>EM</i>, we have
>
> <i>E</i> ∝ (<i>TCM</i><sup>2</sup>)/<i>G</i>.

系 3　(14) の中の <i>N</i>・<i>T</i><sup>2</sup> に、その値 <i>E</i>・<i>M</i> を入れると、次のようになる。

<i>E</i> ∝ (<i>T</i>・<i>C</i>・<i>M</i><sup>2</sup>)/<i>G</i>

訳注：誌面の <i>NT</i><sup>2</sup> の指数は刷りがかすれているが、式 (5) から <i>N</i>・<i>T</i><sup>2</sup> ∝ <i>E</i>・<i>M</i> となるので 2 と読む。(14) の <i>N</i>・<i>T</i><sup>3</sup> を <i>N</i>・<i>T</i><sup>2</sup>・<i>T</i> と見てこれを入れると、<i>E</i><sup>2</sup> ∝ <i>E</i>・<i>T</i>・<i>C</i>・<i>M</i><sup>2</sup>/<i>G</i> となり、この式が出る。

### ¶134　p.262

> *Cor.* 4. Because by (3) <i>M</i> ∝ √<i>G</i> (14) becomes
>
> <i>E</i><sup>2</sup> ∝ (<i>NT</i><sup>3</sup><i>C</i>)/√<i>G</i>　(16)

系 4　(3) により <i>M</i> ∝ √<i>G</i> であるから、(14) は次のようになる。

<i>E</i><sup>2</sup> ∝ (<i>N</i>・<i>T</i><sup>3</sup>・<i>C</i>)/√<i>G</i>　(16)

### ¶135　p.263

> *Scholium* 1.

注解 1

### ¶136　p.263

> The above equations of comparison may be changed into equations of equality by simply dividing each of the capital letters, signifying one gas, by the corresponding ones, signifying like things of another.

上の比べる式（比例の式）は、一つの気体を表す大文字のそれぞれを、もう一つの気体の同じものを表す対応する文字で割るだけで、等しさの式に変えることができる。

訳注：「equations of comparison」は ∝ で結んだ比例の式、「equations of equality」は = で結んだ二つの気体の比の式のこと。

### ¶137　p.263

> If any members of the equation become equal in the two airs, as the temperatures, elasticities, &c., they eliminate each other.

式のどれかの項が、二つの空気で等しくなるなら（温度や弾性（elasticity）など）、それらは互いに消し合う。

### ¶138　p.263

> In all cases, <i>G</i>, <i>g</i> are referred to the same temperature and pressure.

どの場合も、<i>G</i>、<i>g</i> は同じ温度と圧力（pressure）のもとでの値とする。

### ¶139　p.263

> It is usual to reckon the specific gravity of some one gas unity under the mean barometric pressure of 30 inches, and temperature 32° Fahr., or unity of ours, and to refer the values of all other gases to it; in which case, the equation of equality must be made to correspond with it. But the masses of the particles, and the numeratom of the standard gas at 30 inches pressure, and temperature 32° Fahr., may likewise be put each equal to 1, which would give convenient equations of equality, and much facilitate investigations.

ふつうは、どれか一つの気体の比重を、平均の気圧 30 インチ、温度 32°F（われわれの温度の単位 1）のもとで 1 とし、ほかのすべての気体の値をそれに比べて表す。その場合は、等しさの式もそれに合わせなければならない。しかし、粒子の質量と、気圧 30 インチ・温度 32°F での基準の気体の原子数も、同じようにそれぞれ 1 と置いてよい。そうすれば使いやすい等しさの式が得られ、調べがずっと楽になる。

訳注：「unity of ours」は、ヘラパスの真の温度で 32°F を <i>T</i> = 1 とすることを指す（p.257 の定め）。

### ¶140　p.263

> *Scholium* 2.

注解 2

### ¶141　p.263

> It appears by the above theorems, as mentioned in *Cor.* 1, that, if the specific gravity of oxygen be 16 times that of hydrogen, the numbers of particles in equal volumes under equal elasticities and temperatures, are 4 oxygen to 1 hydrogen. Therefore, if 2 volumes of hydrogen go to 1 volume of oxygen to form water, there are 2 particles of oxygen to 1 of hydrogen.

上の諸定理から、系 1 で述べたように、酸素の比重が水素の 16 倍なら、弾性と温度が等しいとき、等しい体積（volume）の中の粒子の数は、酸素 4 に対して水素 1 になることがわかる。したがって、水を作るのに水素 2 体積が酸素 1 体積と結びつくなら、そこには水素 1 に対して酸素 2 の粒子がある。

訳注：「系 1」は命題 VIII の系 1（p.260）。今の分子論（アボガドロの法則）では、同じ体積・圧力・温度の気体は分子の数が等しく、水は水素 2 分子に酸素 1 分子で、ヘラパスの結論とは違う。

### ¶142　p.264

> The preceding theorems furnish us with the means of determining not merely the proportional numbers of particles in any two gases, but their proportional masses and magnitudes, supposing them of similar figures and densities.

前の諸定理は、任意の二つの気体の中の粒子の数の比だけでなく、粒子が相似な形と同じ密度をもつと仮定すれば、粒子の質量の比と大きさの比をも決める手段を与える。

### ¶143　p.264

> They likewise enable us to determine what are understood by the specific heats of the gases. These specific heats are proportional to the numbers of particles in the equal volumes or equal weights, whichever are used. If equal volumes be taken, then the specific heat of oxygen should be 4 times that of hydrogen; if equal weights, the specific heat of hydrogen should be 4 times that of oxygen. Indeed, the specific heats should be as the square roots of the specific gravities directly in equal volumes, and inversely as the said square roots in equal weights, of the gases. According to the experiments of Delaroche, Bérard, Haycraft, &c., it would appear that the specific heats for equal volumes are nearly the same for all gases. The specific heats of these philosophers are determined by sending streams of the gases with a given excess of temperature through tubes surrounded by ice or water. In a future part of this work it will be shown, that these experiments really have no relation to the specific heats, but are referrible to the conducting power of gases, deprived of the influence of gravity, of which the results they have obtained are simple consequences.

同じように、これらの定理によって、気体の比熱（specific heat）と呼ばれているものが何であるかも決められる。これらの比熱は、等しい体積をとるにせよ等しい重さをとるにせよ、その中の粒子の数に比例する。等しい体積をとれば、酸素の比熱は水素の 4 倍になるはずであり、等しい重さをとれば、水素の比熱が酸素の 4 倍になるはずである。じっさい、気体の比熱は、等しい体積では比重の平方根に比例し、等しい重さではその平方根に反比例するはずである。ドラローシュ（Delaroche）、ベラール（Bérard）、ヘイクラフト（Haycraft）らの実験によれば、等しい体積での比熱はすべての気体でほぼ同じであるらしい。これらの学者の比熱は、決まった分だけ温度を高くした気体の流れを、氷か水で囲んだ管に通して求めたものである。この本の後の部分で、これらの実験はじつは比熱とは関わりがなく、重力の影響を除いた気体の熱を伝える力（conducting power）によるものであって、彼らの得た結果はその単純な帰結であることを示す。

訳注：今の物理では、同じ体積・圧力・温度の二原子気体の定積比熱はほぼ等しく、ドラローシュとベラールの結果のほうに近い。

### ¶144　p.264

> The only satisfactory course, it appears to me, is the one attempted by Dr. Crawford; that is, by immersing balloons with the gases, at a high temperature, in water. It is, however, attended with very [p.265] great difficulties, on account of the inconsiderable quantity of matter in the gas, compared to that of the balloon and water, and the great influence which trifling circumstances would have on the result. For equal weights Crawford made the specific heat of hydrogen about 4½ instead of 4 times that of oxygen. But his other results are very discordant. There does not, indeed, appear to be any mode on which dependence can be placed for settling the question of the specific heats of the gases. The subject is almost in as bad a state as some time ago the determination of the velocity of sound in gases was.

私の見るところ、満足できるただ一つのやり方は、クロフォード博士（Dr. Crawford）が試みたもの、つまり気体を入れた球形の容器（balloon）を高い温度にして水に沈めるやり方である。しかし、これにはたいへん大きな困難が伴う。気体の中の物質の量（quantity of matter）が、容器と水の物質の量に比べてごくわずかであり、ささいな事情が結果に大きく効いてしまうからである。等しい重さについて、クロフォードは水素の比熱を酸素の 4 倍ではなく約 4½ 倍とした。しかし、彼のほかの結果はひどく食い違っている。じっさい、気体の比熱の問題を決めるのに頼れるやり方は、何もないように見える。この問題は、しばらく前の気体の中の音の速さの決定とほとんど同じくらい、ひどい状態にある。

### ¶145　p.265

> In reference to this matter M. Lamé has mentioned, (vol. i, p. 489 of his ‘Cours de Physique,’ second edition,) that when glass balloons are filled with different gases, and immersed in water of the same excess of temperature, hydrogen manifests a quicker disposition to receive heat than any other gas, which he attributed to the less size, and therefore greater mobility of its particles. That is a part of the cause, but the chief part consists in the much fewer number of particles for the heat to be distributed among.

このことについて、ラメ氏（M. Lamé）は、自著の『物理学講義』（*Cours de Physique*）第 2 版の第 1 巻 p.489 で、ガラスの球形の容器にいろいろな気体を満たし、同じだけ温度を高くした水に沈めると、水素はほかのどの気体よりも速く熱を受け取る性質を示すと述べている。ラメはそれを、水素の粒子がより小さく、そのためより動きやすいことに帰した。それは原因の一部ではあるが、主な部分は、熱を分け合う粒子の数がずっと少ないことにある。

### ¶146　p.265

> These conflicting results show how very desirable it is to have experiments made in the most direct and unexceptionable manner, to decide these points. No indirect experiments would be at all satisfactory, and the difficulty of making direct is confessedly great, on account of the small quantity of matter which can be operated on, compared with that of the containing bodies.

これらの食い違う結果は、これらの点を決めるために、最も直接的で文句のつけようのないやり方で実験を行うことが、どれほど望ましいかを示している。間接の実験では少しも満足できない。そして直接の実験を行う困難は、誰もが認めるとおり大きい。扱える物質の量が、それを入れる物体（器）の物質の量に比べて小さいからである。
