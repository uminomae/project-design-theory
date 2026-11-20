# On the Mechanical Action of Heat, especially in Gases and Vapours（1850）— 原文（英語）と日本語訳

- 原典：W. J. Macquorn Rankine, "On the Mechanical Action of Heat, especially in Gases and Vapours", *Transactions of the Royal Society of Edinburgh* 20 (1853), pp.147–190（論文 VII。1850 年 2 月 4 日にエディンバラ王立協会で読む）。DOI は [10.1017/S008045680003307X](https://doi.org/10.1017/S008045680003307X)（Crossref で題・巻・頁・年を照らした）。著者はスコットランドの技術者・物理学者。
- 訳した範囲：全文（題・序論〔分子渦の仮説の要約〕・第 I 節〜第 IV 節・第 IV 節への付録と表 I・表 II、脚注 1）。同じ巻の pp.191– に続く「Note as to the Dynamical Equivalent of Temperature in Liquid Water …」（1850 年 12 月 2 日に読む）など、のちの補遺は入れていない。パースが「進化的な愛」（1893）の ¶20 で「the mechanical theory of heat by Clausius and by Rankine, independently, in 1850」、¶58 で「The mechanical theory of heat was set forth by Rankine and by Clausius during the same month of February, 1850」と書く、ランキンの側の論文。パースは題を挙げていない。1850 年 2 月に読まれた熱の力学的理論の論文として、Claude がこれに当てた。
- 原文：Internet Archive の誌面の走査 [`transactionsofro20royal`](https://archive.org/details/transactionsofro20royal)（頁と画像の対応は、葉の番号 n で p = n − 30。p.147＝n177〜p.190＝n220）に合わせた（2026-11-20・#175）。文字起こしが無いので、IA の OCR を下敷きに、読む役（Claude のサブエージェント）六つが全 44 頁の画像と一行ずつ照らして起こし、照らす役三つが段ごとに画像と照らした。表の数は、読む役と照らす役が計算でも照らした。誤りの疑いのある式の番号と記号の三か所は、のちにランキンの論集の再録（W. J. Millar 編 *Miscellaneous Scientific Papers*, 1881）の画像とも照らした（2026-11-20）。
- 直したのは次のとおり。綴り・句読点は誌面のとおり。誌面の誤植と見たものは直さずに置き、訳注に書いた。誌面の斜体は `*…*` で示した。誌面で小型大文字の人名は、ふつうの大小文字で起こした。柱・頁番号・折記号は起こしていない。誌面の脚注は頁ごとの印（* など）なので、通しの番号（注1）にして終わりにまとめた。
- 式の書き方：斜体のラテン文字は `<i>…</i>`、下付き・上付きは `<sub>`・`<sup>`。ギリシア文字と、誌面で立体の大文字（P・V・Q・K など）には印を付けていない。真の比熱の記号（誌面の黒体文字の k）は 𝔨 で書いた。誌面で縦に組まれた分数は / で一行に書き、分子や分母が二つ以上の項のときは誌面に無い丸括弧で包んだ。誌面の小数点は中黒（·）で、そのまま置いた。式の番号（(IX.)・(12.) など）は誌面のとおり。
- 表：誌面の数の表は Markdown の表にした。原文の表は見出しも誌面のまま、訳の表は見出しの語だけを訳し、数は同じ。
- 段の分け方：誌面の段落のとおり。題・読んだ日・序論と要約の見出し・節の見出し・付録の見出し・表は、それぞれ一つの段にした。
- **訳は Claude（AI）によるもの。** 2026-11-20 に訳した。既にある訳を見ずに、英語の原文から付けた。読む役に原文の起こしと訳の案を出させ、照らす役に原文と画像・訳を段ごとに照らさせ、Claude がつないで入れた（#175）。**人の校閲はまだ。** 誤訳がありうる。引用や論拠には原文を使う。訳語は `README.md` の用語集（ランキンの表）でそろえた。`訳注：` の行は Claude の注。
- ランキンは、原子が核とそれを包む弾性のある大気からなり、熱はその大気の中の渦の運動の活力である、という分子渦の仮説を序論で要約し、そこから熱と膨張の動力の相互の変換の式を導く（第 I 節）。それを気体の真の比熱と見かけの比熱（第 II 節）、水の蒸発の潜熱と全熱（第 III 節）、完全気体として扱った水蒸気と蒸気機関の動力（第 IV 節と付録）に当てはめる。atmosphere は「大気」、vis viva は「活力」（今の運動エネルギーに当たる量）とした。
- 段の見出しの頁は誌面の頁。段の途中で頁が変わるところは `[p.N]`。

### ¶1　p.147

> VII.—*On the Mechanical Action of Heat, especially in Gases and Vapours.* By William John Macquorn Rankine, Civil Engineer, F.R.S.E., F.R.S.S.A., &c.

VII. 熱の力学的作用について、とくに気体と蒸気における。ウィリアム・ジョン・マッコーン・ランキン（土木技師、F.R.S.E.、F.R.S.S.A. ほか）による。

訳注：F.R.S.E. はエディンバラ王立協会のフェロー、F.R.S.S.A. はスコットランド王立技芸協会のフェローの略と見られる。

### ¶2　p.147

> (Read 4th February 1850.)

（1850 年 2 月 4 日に読む。）

### ¶3　p.147

> INTRODUCTION.

序論

### ¶4　p.147

> SUMMARY OF THE PRINCIPLES OF THE HYPOTHESIS OF MOLECULAR VORTICES, AND ITS APPLICATION TO THE THEORY OF TEMPERATURE, ELASTICITY, AND REAL SPECIFIC HEAT.

分子渦の仮説の原理の要約と、その温度・弾性・真の比熱の理論への応用

### ¶5　p.147

> The ensuing paper forms part of a series of researches respecting the consequences of an hypothesis called that of Molecular Vortices, the object of which is, to deduce the laws of elasticity, and of heat as connected with elasticity, by means of the principles of mechanics, from a physical supposition consistent and connected with the theory which deduces the laws of radiant light and heat from the hypothesis of undulations. Those researches were commenced in 1842, and after having been laid aside for nearly seven years, from the want of experimental data, were resumed in consequence of the appearance of the experiments of M. Regnault on gases and vapours.

以下の論文は、分子渦の仮説と呼ぶ仮説から何が導かれるかを調べる一連の研究の一部である。その研究のねらいは、弾性の法則と、弾性に結びついた熱の法則とを、力学の原理によって、一つの物理的な仮定から導くことにある。その仮定は、放射する光と熱の法則を波動の仮説から導く理論と矛盾せず、それとつながっている。この研究は 1842 年に始めた。実験のデータが無かったために七年近く手を離していたが、ルニョー氏の気体と蒸気についての実験が出たのを受けて、再び取りかかった。

訳注：ルニョー（Regnault）は、フランスの物理学者アンリ・ヴィクトル・ルニョー（Henri Victor Regnault）と考えられる。M. は Monsieur（氏）の略。

### ¶6　p.147

> The investigation which I have now to describe, relates to the mutual conversion of heat and mechanical power by means of the expansion and contraction of gases and vapours.

ここで述べる研究は、気体と蒸気の膨張と収縮によって、熱と力学的な動力とが互いに移り変わることにかかわる。

### ¶7　p.147

> In the introduction which I here prefix to it, I purpose to give such a summary of the principles of the hypothesis as is necessary to render the subsequent investigation intelligible.

その前に置くこの序論では、後に続く研究がわかるのに要るだけの、仮説の原理の要約を示すつもりである。

### ¶8　p.147

> The fundamental suppositions are the following:—

根本の仮定は次のとおりである。

### ¶9　p.147

> *First,—That each atom of matter consists of a nucleus, or central physical point, enveloped by an elastic atmosphere, which is retained in its position by forces attractive towards the nucleus or centre.*

*第一に、物質の各原子は、一つの核、すなわち中心の物理的な点と、それを包む弾性のある大気とからなり、その大気は、核すなわち中心へ向かって引く力によって、その位置に保たれている。*

### ¶10　p.147

> Suppositions similar to this have been brought forward by Franklin, Æpinus, Mossotti, and others. They have in general, however, conceived the atmosphere of each nucleus to be of variable mass. I have treated it, on the contrary, as an essential part of the atom. I have left the question indeterminate, whether the nucleus is a small body of a character distinct from that of the atmosphere, or merely a portion of the atmosphere in a highly condensed state, owing to the mutual attraction of its parts.

これに似た仮定は、フランクリン、エピヌス、モッソッティらが出している。ただし彼らは、一般に、各核の大気の質量は変わりうるものと考えた。私は反対に、大気を原子のなくてはならない部分として扱った。核が、大気とは性質の違う小さな物体なのか、それとも、部分どうしが引き合うために強く凝縮した状態にある大気の一部にすぎないのか、という問いは決めずに置いた。

訳注：フランクリンはベンジャミン・フランクリン（Benjamin Franklin）、エピヌスはフランツ・ウルリヒ・テオドール・エピヌス（Franz Ulrich Theodor Aepinus）、モッソッティはオッタヴィアーノ・ファブリツィオ・モッソッティ（Ottaviano Fabrizio Mossotti）と考えられる。

### ¶11　p.147–148

> According to this first supposition, the boundary between two contiguous atoms of a body is an imaginary surface at which the attractions of all the atomic [p.148] centres of the body balance each other; and the elasticity of the body is made up of two parts: *First,* the elasticity of the atomic atmospheres at the imaginary boundaries of the atoms, which I shall call the superficial-atomic elasticity; and, *secondly,* the force resulting from the mutual actions of distinct atoms. If the atmospheres are so much condensed round their nuclei or centres, that the superficial-atomic elasticity is insensible, and that the resultants of the mutual actions of all parts of the distinct atoms are forces acting along the lines joining the nuclei or centres, then the body is a perfect solid, having a tendency to preserve not only a certain bulk, but a certain figure; and the elasticity of figure, or *rigidity,* bears certain definite relations to the elasticity of volume.

この第一の仮定によれば、物体の中で隣り合う二つの原子の境目は、物体のすべての原子の [p.148] 中心からの引力が互いにつり合う、想像上の面である。そして物体の弾性は二つの部分からなる。*第一に*、原子の想像上の境目における原子の大気の弾性で、これを私は原子表面の弾性と呼ぶ。*第二に*、別々の原子どうしの相互の作用から生じる力である。大気がその核すなわち中心のまわりに強く凝縮していて、原子表面の弾性が感じられないほどになり、別々の原子のすべての部分の相互の作用の合力が、核すなわち中心を結ぶ線に沿ってはたらく力になるなら、その物体は完全な固体である。それは、一定の大きさだけでなく、一定の形も保とうとする。そして形の弾性、すなわち*剛性*は、体積の弾性と、一定の決まった関係にある。

訳注：superficial-atomic elasticity を「原子表面の弾性」と訳した。原子の境目の面での大気の弾性を指す。

### ¶12　p.148

> If the atmospheres are less condensed about their centres, so that the mutual actions of distinct atoms are not reducible to a system of forces acting along the lines joining the atomic centres, but produce merely a cohesive force sufficient to balance the superficial-atomic elasticity, then the condition is that of a *perfect liquid;* and the intermediate conditions between this and perfect solidity constitute the gelatinous, plastic, and viscous states.

大気がその中心のまわりにそれほど凝縮しておらず、別々の原子の相互の作用が、原子の中心を結ぶ線に沿ってはたらく力の系に帰着せず、原子表面の弾性とつり合うだけの凝集の力を生むにとどまるなら、その状態は*完全な液体*である。これと完全な固体との間の中間の状態が、ゼリー状・塑性・粘性の状態をなす。

### ¶13　p.148

> When the mutual actions of distinct atoms are very small as compared with the superficial-atomic elasticity, the condition is that of *gas* or *vapour;* and when the substance is so far rarefied that the influence of the atomic nuclei or centres in modifying the superficial elasticity of their atmospheres is insensible, it is then in the state of *perfect gas.*

別々の原子の相互の作用が、原子表面の弾性に比べてごく小さいとき、その状態は*気体*か*蒸気*である。そして、物質がひどく希薄になって、原子の核すなわち中心がその大気の表面の弾性を変える影響が感じられなくなると、それは*完全気体*の状態にある。

### ¶14　p.148

> So far as our experimental knowledge goes, the elasticity of a perfect gas at a given temperature varies simply in proportion to its density. I have therefore assumed this to be the law of the elasticity of the atomic atmospheres, ascribing a specific coefficient of elasticity to each substance.

実験で知られている範囲では、完全気体の弾性は、温度が一定なら、その密度にただ比例して変わる。そこで私は、これを原子の大気の弾性の法則と仮定し、物質ごとに固有の弾性係数を与えた。

### ¶15　p.148

> The *second supposition,* being that from which the hypothesis of molecular vortices derives its name, is the following:—*That the elasticity due to heat arises from the centrifugal force of revolutions or oscillations among the particles of the atomic atmospheres; so that quantity of heat is the* vis viva *of those revolutions or oscillations.*

*第二の仮定*は、分子渦の仮説の名のもとになったもので、次のとおりである。*熱による弾性は、原子の大気の粒子の間の回転または振動の遠心力から生じる。したがって、熱の量はその回転または振動の*活力*である。*

訳注：vis viva（活力）は、当時の語で、質量と速さの二乗の積（今の運動エネルギーの二倍）を指す。誌面は斜体の文の中で vis viva だけを立体にしている。

### ¶16　p.148

> This supposition appears to have been first definitely stated by Sir Humphry Davy. It has since been supported by Mr Joule, whose valuable experiments to establish the convertibility of heat and mechanical power are well known. So far as I am aware, however, its consequences have not hitherto been mathematically developed.

この仮定をはじめてはっきり述べたのは、サー・ハンフリー・デイヴィであったようである。その後、ジュール氏がこれを支持した。熱と力学的な動力が互いに移り変わりうることを確かめた氏の貴重な実験はよく知られている。しかし、私の知る限り、この仮定から何が導かれるかは、これまで数学的に展開されていない。

訳注：ジュールはジェイムズ・プレスコット・ジュール（James Prescott Joule）と考えられる。

### ¶17　p.148–149

> To connect this hypothesis with the undulatory theory of radiation, I have introduced a *third supposition:—That the medium which transmits light and radiant heat consists of the* nuclei *of the atoms, vibrating independently, or almost independently, of their atmospheres;*—so that the absorption of light and of radiant heat, is the transference of motion from the nuclei to their atmospheres, and the [p.149] emission of light and of radiant heat, the transference of motion from the atmospheres to their nuclei.

この仮説を放射の波動説と結びつけるために、私は*第三の仮定*を入れた。*光と放射する熱を伝える媒質は、原子の*核*からなり、核はその大気とは独立に、あるいはほとんど独立に振動する。*したがって、光と放射する熱の吸収は、核からその大気への運動の移りであり、光と放射する熱の [p.149] 放出は、大気からその核への運動の移りである。

訳注：誌面は斜体の文の中で nuclei だけを立体にしている。

### ¶18　p.149

> Although in all undulations of sensible length and amplitude, such as those of sound, the nuclei must carry their atmospheres along with them, and vibrating thus loaded, produce a comparatively slow velocity of propagation; yet in all probability the minute vibrations of light and radiant heat may be performed by the atomic nuclei in transparent and diathermanous bodies, without moving the atmospheres more than by that amount which constitutes absorption; and those vibrations will therefore be transmitted according to the laws of the elasticity of *perfect solids,* and with a rapidity corresponding to the extreme smallness of the masses set in motion, as compared with the mutual forces exerted by them.

音の波のように、感じられるほどの波長と振幅をもつ波動ではどれも、核はその大気を引き連れて動かねばならず、そのように荷を負って振動するので、伝わる速さは比較的遅くなる。けれども、光と放射する熱のごく小さな振動は、おそらく、透明で熱線を通す物体の中では、原子の核が、大気を吸収にあたる分より多くは動かさずに行うのであろう。したがってその振動は、*完全な固体*の弾性の法則に従って伝わり、その速さは、動かされる質量が、それらが互いに及ぼす力に比べてきわめて小さいことに見合ったものになる。

訳注：diathermanous は、放射する熱（今の赤外線など）を通す性質の物体を指す当時の語。「熱線を通す」と訳した。

### ¶19　p.149

> This supposition is peculiar to my own view of the hypothesis, and is, in fact, the converse of the idea hitherto adopted, of an ether surrounding ponderable particles.

この仮定は、私がこの仮説をどう見るかに固有のものであり、実のところ、重さのある粒子をエーテルが取り巻くという、これまでとられてきた考えの逆である。

### ¶20　p.149

> The second and third suppositions involve the assumption, that motion can be communicated between the nuclei and their atmospheres, and between the different parts of the atmospheres; so that there is a tendency to produce some permanent condition of motion, which constitutes equilibrium of heat. It is now to be considered what kind of motion is capable of producing increase of elasticity, and what are the conditions of permanency of that motion.

第二と第三の仮定は、核とその大気との間で、また大気の異なる部分の間で、運動が伝わりうるという想定を含む。したがって、ある持続する運動の状態が生じようとする傾向があり、それが熱のつり合いをなす。そこで次に、どのような種類の運動が弾性を増しうるのか、またその運動が持続する条件は何かを考える。

### ¶21　p.149

> It is obvious, that the parts of the atomic atmospheres may have motions of alternate expansion and contraction, or of rectilinear oscillation about a position of equilibrium, without affecting the superficial atomic elasticity, except by small periodical changes. Should they have motions, however, of *revolution* about centres, so as to form a group of *vortices,* the centrifugal force will have the effect of increasing the density of the atmosphere at what I have called the bounding surfaces of the atoms, and thus of augmenting the elasticity of the body.

原子の大気の部分は、膨張と収縮を交互にくり返す運動や、つり合いの位置のまわりの直線の振動をしても、小さな周期的な変化のほかは、原子表面の弾性を変えないことは明らかである。しかし、それらが中心のまわりの*回転*の運動をして*渦*の群をなすなら、遠心力は、私が原子の境の面と呼んだ所で大気の密度を増し、こうして物体の弾性を増すはたらきをする。

### ¶22　p.149

> In this summary, I shall not enter into the details of mathematical analysis, but shall state results only. The following, then, are the conditions which must be fulfilled, in order that a group of vortices, of small size as compared with the bulk of an atom, and of various diameters, may permanently coexist, whether side by side, or end to end, in the atomic atmospheres of one substance, or of various substances mixed.

この要約では、数学的な解析の細部には立ち入らず、結果だけを述べる。原子の大きさに比べて小さく、さまざまな直径をもつ渦の群が、一つの物質の原子の大気の中で、あるいはさまざまな物質が混じったものの原子の大気の中で、横に並んでであれ、端と端を接してであれ、持続してともにありうるために満たさねばならない条件は、次のとおりである。

### ¶23　p.149–150

> *First, The mean elasticity must vary continuously;* which involves the condition, that at the surface of contact of two vortices of different substances, side by side, or end to end, the respective densities at each point of contact must be inversely proportional to the coefficients of elasticity. Hence *the specific gravities of the* atmospheric parts of *all substances, under precisely similar circumstances as to heat and molecular forces* (a condition realised in perfect gases at the same pressure and temperature), *are inversely proportional to the coefficients of atmospheric elasticity.* Therefore let μ represent the mass of the atmosphere of one atom of [p.150] any substance, <i>b</i> its coefficient of elasticity, and <i>n</i> the number of atoms which, in the state of perfect gas, occupy unity of volume under unity of pressure at the temperature of melting ice;—then
>
> <i>nμb</i>　(I.)
>
> is a constant quantity for all substances.

*第一に、平均の弾性は連続して変わらねばならない。*このことは、異なる物質の二つの渦が横に並んで、あるいは端と端を接して触れ合う面で、触れ合う各点のそれぞれの密度が、弾性係数に反比例しなければならないという条件を含む。それゆえ、*熱と分子の力について全く同じ事情のもとにある*（同じ圧力と温度の完全気体ではこの条件が満たされる）*すべての物質の*、大気の部分の*比重は、大気の弾性係数に反比例する。*そこで、ある物質の一つの原子の大気の質量を μ、[p.150] その弾性係数を <i>b</i>、完全気体の状態で、氷の融ける温度において圧力の単位のもとで体積の単位を占める原子の数を <i>n</i> で表すと、

<i>nμb</i>　(I.)

はすべての物質で一定の量である。

訳注：誌面は斜体の文の中で atmospheric parts of だけを立体にしている。

### ¶24　p.150

> *Secondly,* The superficial elasticity of a vortex must *not* be a function of its diameter: to fulfil which condition, the linear velocity of revolution must be equal throughout all parts of each individual vortex.

*第二に*、渦の表面の弾性は、その直径の関数であっては*ならない*。この条件を満たすには、回転の線速度が、個々の渦のすべての部分を通じて等しくなければならない。

### ¶25　p.150

> *Thirdly,* In all contiguous vortices of the same substance, the velocities of revolution must be equal; and in contiguous vortices of different substances, the squares of the velocities must be proportional to the coefficients of elasticity of the molecular atmospheres.

*第三に*、同じ物質の隣り合う渦ではどれも、回転の速さが等しくなければならない。異なる物質の隣り合う渦では、速さの二乗が、分子の大気の弾性係数に比例しなければならない。

### ¶26　p.150

> The second and third conditions are those of equilibrium of heat, and are equivalent to this law:—

第二と第三の条件は熱のつり合いの条件であり、次の法則と同じことである。

### ¶27　p.150

> Temperature *is a function of the square of the velocity of revolution in the molecular vortices divided by the coefficient of elasticity of the atomic atmospheres;*—or
>
> Temperature = φ(<i>w</i><sup>2</sup>/<i>b</i>)　(II.)
>
> where <i>w</i> represents that velocity.

温度*は、分子渦の回転の速さの二乗を原子の大気の弾性係数で割ったものの関数である。*すなわち

温度 = φ(<i>w</i><sup>2</sup>/<i>b</i>)　(II.)

ここで <i>w</i> はその速さを表す。

訳注：誌面の Temperature は小型大文字。

### ¶28　p.150

> The *mean* elasticity which a vortex exerts endways is not affected by its motion, being equal to
>
> <i>bρ</i>　(III.)
>
> where ρ is its mean density. The superficial elasticity at its lateral surfaces, however, is expressed by
>
> <i>w</i><sup>2</sup>ρ/2<i>g</i> + <i>bρ</i>　(IV.)

渦が端の方向に及ぼす*平均の*弾性は、その運動によって変わらず、

<i>bρ</i>　(III.)

に等しい。ここで ρ は渦の平均の密度である。しかし、渦の側面での表面の弾性は

<i>w</i><sup>2</sup>ρ/2<i>g</i> + <i>bρ</i>　(IV.)

で表される。

### ¶29　p.150

> The additional elasticity <i>w</i><sup>2</sup>ρ/2<i>g</i>, being that which is due to the motion, is independent of the diameter. The divisor <i>g</i> (the force of gravity) is introduced, on the supposition of the density ρ being measured by weight.

付け加わる弾性 <i>w</i><sup>2</sup>ρ/2<i>g</i> は、運動によるものであり、直径にはよらない。割る数 <i>g</i>（重力）は、密度 ρ を重さで測るという仮定のもとで入れたものである。

### ¶30　p.150

> Supposing the atmosphere of an atom to be divided into concentric spherical layers, it may be shewn that the effect of the coexistence of a great number of small vortices in one of those layers whose radius is <i>r</i>, and mean density ρ, is to give it a centrifugal force, expressed by
>
> <i>w</i><sup>2</sup>/<i>gr</i>　(V.)
>
> which tends to increase the density and elasticity of the atmosphere at the surface, which I have called the boundary of the atom. The layer is also acted upon by the difference between the mean elasticities at its two surfaces, and by the attraction towards the atomic centre; and these three forces must balance each other.

原子の大気を同心の球の層に分けたと考えると、半径が <i>r</i>、平均の密度が ρ の層の一つの中に、多数の小さな渦がともにあることは、その層に

<i>w</i><sup>2</sup>/<i>gr</i>　(V.)

で表される遠心力を与えることを示せる。この力は、私が原子の境目と呼んだ面で、大気の密度と弾性を増そうとする。この層には、ほかに、その二つの面での平均の弾性の差と、原子の中心へ向かう引力とがはたらく。そしてこの三つの力はつり合わねばならない。

訳注：(V.) の分母は誌面で <i>g</i> と <i>r</i> を並べた積（<i>g</i><i>r</i>）。

### ¶31　p.151

> I have integrated the differential equation which results from this condition, for substances in the gaseous state, in which the forces that interfere with the centrifugal force and atmospheric elasticity are comparatively small; and the result is
>
> P = <i>b</i> μ/M D (<i>w</i><sup>2</sup>/3<i>gb</i> + 1) (1 − F) + <i>f</i>(D)　(VI.)

私は、この条件から出る微分方程式を、気体の状態にある物質について積分した。気体の状態では、遠心力と大気の弾性にかかわってくる力は比較的小さい。その結果は

P = <i>b</i> μ/M D (<i>w</i><sup>2</sup>/3<i>gb</i> + 1) (1 − F) + <i>f</i>(D)　(VI.)

である。

訳注：誌面の P・D・M・F・C・Q・T は立体の大文字。<i>b</i> μ/M D は <i>b</i>・(μ/M)・D の積。

### ¶32　p.151

> P is the entire elasticity of the gas, and D its mean density. M represents the total mass of an atom, measured by weight, and μ that of its atmospheric part; so that μ/M D is the mean density of the atomic atmospheres.

P は気体の弾性の全体、D はその平均の密度である。M は一つの原子の全質量を重さで測ったもの、μ はその大気の部分の質量を表す。したがって μ/M D は原子の大気の平均の密度である。

### ¶33　p.151

> <i>f</i>(D) denotes the effect of the mutual actions of separate atoms.

<i>f</i>(D) は、別々の原子の相互の作用の効果を表す。

### ¶34　p.151

> The first term represents the superficial-atomic elasticity. F denotes the effect of the attraction of the nucleus in modifying that elasticity, and can be represented approximately by a converging series, in terms of the negative powers of <i>w</i><sup>2</sup>/3<i>gb</i> + 1, commencing with the inverse square, the coefficients being functions of the density D.

第一の項は原子表面の弾性を表す。F は、核の引力がその弾性を変える効果を表し、<i>w</i><sup>2</sup>/3<i>gb</i> + 1 の負の冪で表した収束する級数で近似して表せる。その級数は逆二乗から始まり、係数は密度 D の関数である。

### ¶35　p.151

> By using the first term of such a series, and determining its coefficient, and the quantity <i>f</i>(D) empirically, I have obtained formulæ agreeing closely with the results of M. Regnault's experiments on the Expansion of Atmospheric Air, Carbonic Acid, and Hydrogen.

そうした級数の第一項を使い、その係数と量 <i>f</i>(D) とを経験的に定めることで、私は、ルニョー氏の大気の空気・炭酸・水素の膨張についての実験の結果とよく合う式を得た。

訳注：Carbonic Acid（炭酸）は当時の呼び名で、今の二酸化炭素の気体を指す。

### ¶36　p.151

> In a perfect gas, the above expression is reduced to
>
> P = <i>b</i> μ/M D (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)　(VII.)

完全気体では、上の式は

P = <i>b</i> μ/M D (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)　(VII.)

になる。

### ¶37　p.151

> Let <i>n</i>, as before, denote the number of atoms of a substance which, in the state of perfect gas, occupy unity of volume under unity of pressure at the temperature of melting ice, so that <i>n</i>M is its specific gravity in that state: then
>
> P = D/<i>n</i>M <i>nμb</i> (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)　(VIII.)

前と同じく、<i>n</i> を、ある物質の、完全気体の状態で、氷の融ける温度において圧力の単位のもとで体積の単位を占める原子の数とする。すると <i>n</i>M はその状態での比重である。このとき

P = D/<i>n</i>M <i>nμb</i> (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)　(VIII.)

である。

訳注：D/<i>n</i>M <i>nμb</i> は (D/<i>n</i>M)・<i>nμb</i> の積。

### ¶38　p.151

> The factor by which D/<i>n</i>M is here multiplied fulfils the condition of being a function of <i>w</i><sup>2</sup>/<i>b</i>, and of constants which are the same for all substances, and is therefore fitted for a measure of temperature. It obviously varies proportionally to the pressure of a perfect gas of a given density, or its volume under a given pressure.

ここで D/<i>n</i>M に掛けられている因子は、<i>w</i><sup>2</sup>/<i>b</i> と、すべての物質で同じ定数との関数であるという条件を満たす。したがって温度の尺度に適している。この因子は明らかに、密度が一定の完全気体の圧力、あるいは圧力が一定のもとでのその体積に比例して変わる。

### ¶39　p.151

> Let τ, therefore, denote temperature, as measured from an *imaginary zero,* C degrees of the scale adopted, below the temperature of melting ice, at which
>
> <i>w</i><sup>2</sup>/3<i>gb</i> + 1 = 0;

そこで、τ で温度を表す。それは、*想像上の零点*から測った温度で、その零点は、採る目盛りで氷の融ける温度より C 度低く、そこでは

<i>w</i><sup>2</sup>/3<i>gb</i> + 1 = 0

となる。

### ¶40　p.152

> Then for all substances
>
> τ = C<i>nμb</i> (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)
>
> and in perfect gases
>
> P = τ/C D/<i>n</i>M　(IX.)

すると、すべての物質で

τ = C<i>nμb</i> (<i>w</i><sup>2</sup>/3<i>gb</i> + 1)

であり、完全気体では

P = τ/C D/<i>n</i>M　(IX.)

である。

訳注：誌面では二つの式を一つの括弧でくくり、番号 (IX.) を一つ付ける。P = τ/C D/<i>n</i>M は (τ/C)・(D/<i>n</i>M) の積。

### ¶41　p.152

> τ may be termed *absolute temperature,* and the point from which it is measured, the *absolute zero of temperature.* This, as I have observed, is an imaginary point, being lower than the absolute zero of heat by the quantity C<i>nμb</i>, which is the same for all substances.

τ を*絶対温度*と呼び、それを測り始める点を*温度の絶対零度*と呼んでよい。前に述べたように、これは想像上の点であり、熱の絶対零度より、すべての物質で同じ量 C<i>nμb</i> だけ低い。

訳注：誌面は、温度を測り始める点（温度の絶対零度）と、熱の絶対零度とを分けて書いている。

### ¶42　p.152

> The value of C, or the absolute temperature of melting ice, as determined from M. Regnault's experiments, is
>
> 274°·6 centigrade,
>
> being the reciprocal of
>
> 0·00364166 per centigrade degree,
>
> the value to which the coefficients of dilatation of gases at the temperature of melting ice approximate as they are rarefied.

C の値、すなわち氷の融ける温度の絶対温度は、ルニョー氏の実験から定めると

摂氏 274°·6

であり、これは

摂氏 1 度あたり 0·00364166

の逆数である。この値は、氷の融ける温度での気体の膨張係数が、気体を希薄にしていくにつれて近づく値である。

### ¶43　p.152

> For Fahrenheit's scale C = 494°·28.

華氏の目盛りでは C = 494°·28 である。

### ¶44　p.152

> In the sequel I shall represent temperatures measured from that of melting ice by
>
> T = τ − C

以下では、氷の融ける温度から測った温度を

T = τ − C

で表す。

### ¶45　p.152

> We have now to consider the absolute quantity of heat, or of molecular *vis viva,* which corresponds to a given temperature in a given substance. It is obvious that
>
> <i>μw</i><sup>2</sup>/2<i>g</i>
>
> represents, in terms of gravity, the portion of *vis viva,* in one atom, due to the molecular vortices; but besides the vortical motion, there may be oscillations of expansion and contraction, or of rectilinear vibration about a position of equilibrium. The velocity with which these additional motions are performed will be in a permanent condition, when the mean value of its square, independent of small periodic changes, is equal throughout the atomic atmosphere. We may therefore represent by
>
> <i>μv</i><sup>2</sup>/2<i>g</i> = <i>k</i> <i>μw</i><sup>2</sup>/2<i>g</i>　(X.)
>
> the total *vis viva* of the atomic atmosphere. To this we have to add that of the nucleus, raising the quantity of heat in one atom to
>
> M<i>v</i><sup>2</sup>/2<i>g</i> = <i>q</i>
>
> While the quantity of heat in unity of weight is
>
> <i>v</i><sup>2</sup>/2<i>g</i> = Q　(XI.)

次に、ある物質のある温度に対応する熱の量、すなわち分子の*活力*の量の絶対の値を考えねばならない。明らかに、

<i>μw</i><sup>2</sup>/2<i>g</i>

は、一つの原子の中の*活力*のうち分子渦による部分を、重力を単位として表す。しかし渦の運動のほかに、膨張と収縮の振動や、つり合いの位置のまわりの直線の振動があるかもしれない。これら付け加わる運動の速さは、小さな周期的な変化を除いたその二乗の平均の値が、原子の大気の全体を通じて等しいとき、持続する状態にある。したがって、原子の大気の*活力*の全体を

<i>μv</i><sup>2</sup>/2<i>g</i> = <i>k</i> <i>μw</i><sup>2</sup>/2<i>g</i>　(X.)

で表してよい。これに核の活力を足さねばならず、すると一つの原子の中の熱の量は

M<i>v</i><sup>2</sup>/2<i>g</i> = <i>q</i>

になる。一方、重さの単位の中の熱の量は

<i>v</i><sup>2</sup>/2<i>g</i> = Q　(XI.)

である。

訳注：誌面では M<i>v</i><sup>2</sup>/2<i>g</i> = <i>q</i> と <i>v</i><sup>2</sup>/2<i>g</i> = Q の二つの式を一つの括弧でくくり、番号 (XI.) を一つ付ける。「重力を単位として」（in terms of gravity）は、重さで測った量として、の意と読んだ。

### ¶46　p.153

> The coefficient <i>k</i> (which enters into the value of specific heat) being the ratio of the *vis viva* of the entire motion impressed on the atomic atmospheres by the action of their nuclei, to the *vis viva* of a peculiar kind of motion, may be conjectured to have a specific value for each substance depending in a manner as yet unknown on some circumstance in the constitution of its atoms. Although it varies in some cases for the same substance in the solid, liquid, and gaseous states, there is no experimental evidence that it varies for the same substance in the same condition. In the investigation which follows, therefore, I have treated it as sensibly constant.

係数 <i>k</i>（比熱の値に入ってくる）は、核のはたらきによって原子の大気に与えられる運動の全体の*活力*と、ある特別な種類の運動の*活力*との比である。それは、物質ごとに固有の値をもち、その値は、原子の成り立ちの中の何らかの事情に、まだ知られていない仕方でよると推測してよい。同じ物質でも固体・液体・気体の状態で変わる場合があるが、同じ物質が同じ状態にあるときに変わるという実験の証拠は無い。したがって、以下の研究では、これを感じられるほどには変わらない一定のものとして扱った。

訳注：「ある特別な種類の運動」は、前の段の分子渦の運動を指すと読める。

### ¶47　p.153

> The following, then, are the expressions for quantity of heat in terms of temperature. In one atom:—
>
> <i>q</i> = <i>v</i><sup>2</sup>/2<i>g</i> M = 3<i>k</i>M/2C<i>nμ</i> (τ − C<i>nμb</i>)
>
> In unity of weight:—
>
> Q = <i>v</i><sup>2</sup>/2<i>g</i> = 3<i>k</i>/2C<i>nμ</i> (τ − C<i>nμb</i>)　(XII.)

そこで、熱の量を温度で表す式は次のとおりである。一つの原子では

<i>q</i> = <i>v</i><sup>2</sup>/2<i>g</i> M = 3<i>k</i>M/2C<i>nμ</i> (τ − C<i>nμb</i>)

重さの単位では

Q = <i>v</i><sup>2</sup>/2<i>g</i> = 3<i>k</i>/2C<i>nμ</i> (τ − C<i>nμb</i>)　(XII.)

訳注：誌面では二つの式を一つの括弧でくくり、番号 (XII.) を一つ付ける。3<i>k</i>M/2C<i>nμ</i> の分母は 2C<i>nμ</i> の全体。

### ¶48　p.153

> *Real specific heat* is consequently expressed by the following equations:—
>
> For one atom:—
>
> <i>dq</i>/<i>dτ</i> = 3<i>k</i>M/2C<i>nμ</i>
>
> For unity of weight:—
>
> <i>d</i>Q/<i>dτ</i> = 3<i>k</i>/2C<i>nμ</i>
>
> For so much of a perfect gas as occupies unity of volume under unity of pressure at the temperature of melting ice:—
>
> <i>n</i> <i>dq</i>/<i>dτ</i> = 3<i>k</i>M/2Cμ　(XIII.)

したがって、*真の比熱*は次の式で表される。

一つの原子について

<i>dq</i>/<i>dτ</i> = 3<i>k</i>M/2C<i>nμ</i>

重さの単位について

<i>d</i>Q/<i>dτ</i> = 3<i>k</i>/2C<i>nμ</i>

氷の融ける温度において圧力の単位のもとで体積の単位を占めるだけの完全気体について

<i>n</i> <i>dq</i>/<i>dτ</i> = 3<i>k</i>M/2Cμ　(XIII.)

訳注：誌面では三つの式と、最後の式の前の説明の文とを一つの括弧でくくり、番号 (XIII.) を一つ付ける。

### ¶49　p.153

> The laws established experimentally by Dulong, that the specific heats of simple atoms, and of certain groups of compound atoms, bear to each other simple ratios, generally that of equality, and that the specific heats of equal volumes of all simple gases are equal, shew that the specific factor <i>k</i>M/μ depends on the chemical constitution of the atom, and thus confirm the conjecture I have stated respecting the coefficient <i>k</i>.

デュロンが実験で確かめた法則、すなわち、単体の原子の比熱と、ある種の化合した原子の群の比熱とは、互いに簡単な比、たいていは等しいという比をなすこと、また、すべての単体の気体の等しい体積の比熱は等しいことは、固有の因子 <i>k</i>M/μ が原子の化学的な成り立ちによることを示し、こうして係数 <i>k</i> について私が述べた推測を裏づける。

訳注：デュロンはピエール・ルイ・デュロン（Pierre Louis Dulong）と考えられる。simple atoms・compound atoms は当時の語で、今の元素の原子と化合物の分子に当たると読める。

### ¶50　p.153

> As I shall have occasion, in the investigation which follows, to refer to and to use the equation for the elasticity of vapours in contact with their liquids, which I published in the *Edinburgh New Philosophical Journal for July* 1849, I shall here state generally the nature of the reasoning from which it was deduced.

以下の研究では、私が *Edinburgh New Philosophical Journal* の 1849 年 7 月号に出した、液体と接する蒸気の弾性の式を引き、また使うことになるので、その式を導いた推論の性質を、ここで大まかに述べておく。

### ¶51　p.154

> The equilibrium of a vapour in contact with its liquid depends on three conditions.

液体と接する蒸気のつり合いは、三つの条件による。

### ¶52　p.154

> *First,* The total elasticity of the substance in the two states must be the same.

*第一に*、二つの状態にある物質の弾性の全体は、同じでなければならない。

### ¶53　p.154

> *Secondly,* The superficial atomic elasticity must vary continuously; so that if at the surface which reflects light there is an abrupt change of density (which seems almost certain), there must there be two densities corresponding to the same superficial-atomic elasticity.

*第二に*、原子表面の弾性は連続して変わらねばならない。したがって、光を反射する面で密度が急に変わるなら（そうであることはほぼ確かと思われる）、そこには、同じ原子表面の弾性に対応する二つの密度がなければならない。

### ¶54　p.154

> *Thirdly,* The two forces, which act on each stratum of vapour parallel to the surface of the liquid, namely, the preponderance of molecular attraction towards the liquid, and the difference of the superficial-atomic elasticities at the two sides of the stratum, must be in equilibrio.

*第三に*、液体の面に平行な蒸気の各層にはたらく二つの力、すなわち、液体の方へ向かう分子の引力がまさる分と、層の両側での原子表面の弾性の差とが、つり合っていなければならない。

訳注：in equilibrio はラテン語で「つり合って」。

### ¶55　p.154

> Close to the surface of the liquid, therefore, the vapour is highly condensed. The density diminishes rapidly as the distance from the liquid increases, and at all appreciable distances has a sensibly uniform value, which is a function of the temperature and of certain unknown molecular forces.

したがって、液体の面のすぐ近くでは、蒸気は強く凝縮している。密度は液体からの距離が増すにつれて急に減り、それとわかるほどの距離ではどこでも、ほぼ一様な値をとる。その値は、温度と、ある知られていない分子の力との関数である。

### ¶56　p.154

> The integration of a differential equation representing the third condition of equilibrium, indicates the *form* of the approximate equation.
>
> Log P = α − β/τ − γ/τ<sup>2</sup>　(XIV.)

つり合いの第三の条件を表す微分方程式を積分すると、近似の式の*形*がわかる。

Log P = α − β/τ − γ/τ<sup>2</sup>　(XIV.)

### ¶57　p.154

> The coefficients of which have been determined empirically by three experimental data for each fluid. For proofs of the extreme closeness with which the formulæ thus obtained agree with experiment, I refer to the Journal in which they first appeared.

その係数は、流体ごとに三つの実験のデータから経験的に定めた。こうして得た式が実験ときわめてよく合うことの証拠については、それがはじめて載った雑誌を参照されたい。

### ¶58　p.154

> I annex a table of the coefficients for water, alcohol, ether, turpentine, petroleum, and mercury, in the direct equation, and also in the inverse formula,
>
> 1/τ = √((α − log P)/γ + β<sup>2</sup>/4γ<sup>2</sup>) − β/2γ　(XV.)
>
> by which the temperature of vapour at saturation may be calculated from the pressure. In the ninth and tenth columns are stated the limits between which the formulæ have been compared with experiment.

水・アルコール・エーテル・テレビン油・石油・水銀について、もとの式の係数と、逆の式

1/τ = √((α − log P)/γ + β<sup>2</sup>/4γ<sup>2</sup>) − β/2γ　(XV.)

の係数との表を付ける。逆の式によって、飽和した蒸気の温度を圧力から計算できる。第九と第十の列には、式を実験と比べた範囲の限りを示した。

訳注：√ の後の丸括弧は根号の及ぶ範囲を示すために補ったもので、誌面では根号の横線が (α − log P)/γ + β<sup>2</sup>/4γ<sup>2</sup> の上に引かれている。表は誌面の次の頁（p.155）にある。

### ¶59　p.154

> For turpentine, petroleum, and mercury, the formula consists of two terms only,
>
> Log P = α − β/τ　(XVI.)
>
> the small range of the experiments rendering the determination of γ impossible.

テレビン油・石油・水銀については、式は二つの項だけからなる。

Log P = α − β/τ　(XVI.)

実験の範囲が狭いので、γ を定められないからである。

### ¶60　p.155

> TABLE *of the Constants in the Formulæ for the Elasticities of Vapours in contact with their Liquids.*
>
> | (1.) Names of the Fluids. | (2.) Scale of Pressures. | (3.) Scale of Temperatures. | (4.) α. | (5.) Log. β. | (6.) Log. γ. | (7.) β/2γ | (8.) β<sup>2</sup>/4γ<sup>2</sup> | (9.) Range of Temperatures. | (10.) Range of Pressures. |
> |---|---|---|---|---|---|---|---|---|---|
> | Water | Millimètres of Mercury. | Centigrade. | 7·831247 | 3·1851091 | 5·0827176 | ·0063294 | ·00004006 | Centigrade. −30° to +230° | Millimètres. 0·35 to 20945 |
> | Do. | Inches of Mercury. | Fahrenheit. | 6·426421 | 3·4403816 | 5·5932626 | ·0035163 | ·000012364 | Fahrenheit. −22° to +446° | Inches. 0·014 to 824·63 |
> | Alcohol sp. gr. 0·813 | do. | do. | 6·16620 | 3·3165220 | 5·7602709 | ·0017998 | ·000003239 | +32° to 264° | 0·41 to 165·58 |
> | Ether boiling at 105° F. | do. | do. | 5·33590 | 3·2084573 | 5·5119893 | ·0024856 | ·000006178 | 105° to 210° | 30·00 to 163·27 |
> | Ether boiling at 104° F. | do. | do. | 5·44580 | 3·2571312 | 5·3962460 | ·0036296 | ·000013174 | 34° to 104° | 6·20 to 30·00 |
> | Turpentine | do. | do. | 5·98187 | 3·5380701 | …… | …… | …… | 304° to 362° | 30·00 to 62·24 |
> | Petroleum | do. | do. | 6·19451 | 3·5648490 | …… | …… | …… | 316° to 375° | 30·00 to 64·50 |
> | Mercury | Millimètres of Mercury. | Centigrade. | 7·5305 | 3·4685511 | …… | …… | …… | Centigrade. 72°·74 to 358° | Millimètres. 0·115 to 760 |
> | Do. | Inches of Mercury. | Fahrenheit. | 6·1259 | 3·7238236 | …… | …… | …… | Fahrenheit. 162°·93 to 676°·4 | Inches. ·0046 to 29·92 |

*液体に接している蒸気の弾性を表す式の定数の表。*

| (1.) 流体の名 | (2.) 圧力の目盛 | (3.) 温度の目盛 | (4.) α | (5.) Log. β | (6.) Log. γ | (7.) β/2γ | (8.) β<sup>2</sup>/4γ<sup>2</sup> | (9.) 温度の範囲 | (10.) 圧力の範囲 |
|---|---|---|---|---|---|---|---|---|---|
| 水 | 水銀柱のミリメートル | 摂氏 | 7·831247 | 3·1851091 | 5·0827176 | ·0063294 | ·00004006 | 摂氏 −30° から +230° | ミリメートル 0·35 から 20945 |
| 同上 | 水銀柱のインチ | 華氏 | 6·426421 | 3·4403816 | 5·5932626 | ·0035163 | ·000012364 | 華氏 −22° から +446° | インチ 0·014 から 824·63 |
| アルコール（比重 0·813） | 同上 | 同上 | 6·16620 | 3·3165220 | 5·7602709 | ·0017998 | ·000003239 | +32° から 264° | 0·41 から 165·58 |
| エーテル（105° F. で沸騰） | 同上 | 同上 | 5·33590 | 3·2084573 | 5·5119893 | ·0024856 | ·000006178 | 105° から 210° | 30·00 から 163·27 |
| エーテル（104° F. で沸騰） | 同上 | 同上 | 5·44580 | 3·2571312 | 5·3962460 | ·0036296 | ·000013174 | 34° から 104° | 6·20 から 30·00 |
| テレビン油 | 同上 | 同上 | 5·98187 | 3·5380701 | …… | …… | …… | 304° から 362° | 30·00 から 62·24 |
| 石油 | 同上 | 同上 | 6·19451 | 3·5648490 | …… | …… | …… | 316° から 375° | 30·00 から 64·50 |
| 水銀 | 水銀柱のミリメートル | 摂氏 | 7·5305 | 3·4685511 | …… | …… | …… | 摂氏 72°·74 から 358° | ミリメートル 0·115 から 760 |
| 同上 | 水銀柱のインチ | 華氏 | 6·1259 | 3·7238236 | …… | …… | …… | 華氏 162°·93 から 676°·4 | インチ ·0046 から 29·92 |

訳注：誌面では頁を横にして刷った一頁の表。前の頁の終わりで著者が「係数の表を添える」と述べた表に当たる。「Do.」「do.」は「同上（ditto）」。第九・第十の欄の数の上に小さく刷った「Centigrade.」「Millimètres.」などは、その行から目盛が変わることを示す小見出し。

### ¶61　p.156

> The following are some additional values of the constant α for steam, corresponding to various units of pressure used in practice.
>
> | Units of Pressure. | Values of α. |
> |---|---|
> | Atmospheres of 760 millimètres of mercury, =29·922 inches of mercury, =14·7 lb. on the square inch, =1·0333 kilogrammes on the square centimètre, | 4·950433 |
> | Atmospheres of 30 inches of mercury, =761·99 millimètres, =14·74 lb. on the square inch, =1·036 kilogrammes on the square centimètre, | 4·949300 |
> | Kilogrammes on the square centimètre, | 4·964658 |
> | Kilogrammes on the circular centimètre, | 4·859748 |
> | Pounds avoirdupois on the square inch, | 6·117662 |
> | Pounds avoirdupois on the circular inch, | 6·012752 |
> | Pounds avoirdupois on the square foot, | 8·276025 |

次に掲げるのは、実地で使われるさまざまな圧力の単位に応じた、水蒸気についての定数 α の値の追加である。

| 圧力の単位 | α の値 |
|---|---|
| 水銀柱 760 ミリメートルの気圧（＝水銀柱 29·922 インチ、＝1 平方インチあたり 14·7 ポンド、＝1 平方センチメートルあたり 1·0333 キログラム） | 4·950433 |
| 水銀柱 30 インチの気圧（＝761·99 ミリメートル、＝1 平方インチあたり 14·74 ポンド、＝1 平方センチメートルあたり 1·036 キログラム） | 4·949300 |
| 1 平方センチメートルあたりのキログラム | 4·964658 |
| 1 円センチメートルあたりのキログラム | 4·859748 |
| 1 平方インチあたりの常衡ポンド | 6·117662 |
| 1 円インチあたりの常衡ポンド | 6·012752 |
| 1 平方フィートあたりの常衡ポンド | 8·276025 |

訳注：「circular centimètre」「circular inch」は、直径 1 センチメートル・1 インチの円の面積を単位とする面積の単位（円センチメートル・円インチ）。「avoirdupois」は常衡（ふつうの重さの単位系）。

### ¶62　p.156

> All the numerical values of the constants are for common logarithms.

定数の数値は、どれも常用対数についてのものである。

### ¶63　p.156

> Section I.—Of the Mutual Conversion of Heat and Expansive Power.

第 I 節　熱と膨張の動力との相互の変換について

### ¶64　p.156

> (1.) The quantity of heat in a given mass of matter, according to the hypothesis of molecular vortices, as well as every other hypothesis which ascribes the phenomena of heat to motion, is measured by the mechanical power to which that motion is equivalent, that being a quantity the total amount of which in a given system of bodies cannot be altered by their mutual actions, although its distribution and form may be altered. This is expressed in Equation XII. of the Introduction, where the quantity of heat in unity of weight, Q, is represented by the height <i>v</i><sup>2</sup>/2<i>g</i>, from which a body must fall in order to acquire the velocity of the molecular oscillations. This height, being multiplied by the weight of a body, gives the mechanical power to which the oscillations constituting its heat are equivalent. The real specific heat of unity of weight, as given in Equation XIII. of the Introduction,
>
> <i>d</i>Q/<i>d</i>τ = 3<i>k</i>/2C<i>n</i>μ
>
> represents the *depth of fall*, which is equivalent to *one degree of rise of temperature* in any given weight of the substance under consideration.

(1.) 与えられた質量の物質の中にある熱の量は、分子渦の仮説によっても、熱の現象を運動に帰する他のどの仮説によっても、その運動に等しい力学的な動力で測られる。力学的な動力は、与えられた物体の系の中でその総量が物体どうしの相互の作用では変えられない量である。ただし、その分布と形は変わりうる。このことは序論の式 XII. に表されている。そこでは、重さの単位の中の熱の量 Q が、高さ <i>v</i><sup>2</sup>/2<i>g</i> で表される。これは、物体が分子の振動の速さを得るために落ちなければならない高さである。この高さに物体の重さを掛けると、その物体の熱をなす振動に等しい力学的な動力が得られる。序論の式 XIII. で与えた重さの単位の真の比熱、

<i>d</i>Q/<i>d</i>τ = 3<i>k</i>/2C<i>n</i>μ

は、考えている物質のどんな重さにおいても、*温度が一度上がること*に等しい*落下の高さ*を表す。

### ¶65　p.156

> We know, to a greater or less degree of precision, the ratios of the specific heats of many substances to each other, and they are commonly expressed by taking that of water at the temperature of melting ice as unity; but their actual mechanical values have as yet been very imperfectly ascertained, and, in fact, the data necessary for their determination are incomplete.

多くの物質の比熱の互いの比は、精度の差はあれ知られている。それらはふつう、融ける氷の温度での水の比熱を 1 として表される。しかし、それらの実際の力学的な値は、まだごく不完全にしか確かめられていない。実のところ、それを決めるのに要るデータがそろっていない。

### ¶66　p.156–157

> (2.) Mr Joule, indeed, has made several very interesting series of experiments, in order to ascertain the quantity of heat developed in various substances [p.157] by mechanical power employed in different ways, viz., by electric currents excited by the rotation of a magnet, by the forcing of water through narrow tubes, by the agitation of water and oil with a paddle, by the compression of air, and by the friction of air rushing through a narrow orifice. The value of the depth of fall equivalent to a rise of one degree of Fahrenheit's scale in the temperature of a mass of water, as determined by that gentleman, varies, in the different series of experiments, between the limits of 760 feet and 890 feet, the value in which Mr Joule appears to place the greatest confidence being about 780 feet.

(2.) なるほどジュール氏は、さまざまな仕方で用いた力学的な動力によって、いろいろな物質の中に [p.157] 生じる熱の量を確かめるために、いくつかのたいへん興味深い一連の実験を行った。すなわち、磁石の回転で起こした電流によって、細い管に水を押し通すことによって、水と油を羽根でかき回すことによって、空気を圧縮することによって、そして狭い口を通って噴き出す空気の摩擦によってである。ある量の水の温度を華氏の目盛で一度上げることに等しい落下の高さの値は、同氏が決めたところでは、実験の系列によって 760 フィートから 890 フィートの範囲で変わる。ジュール氏が最も信を置いているらしい値は、およそ 780 フィートである。

### ¶67　p.157

> Although the smallness of the differences of temperature measured in those experiments renders the numerical results somewhat uncertain, it appears to me that, as evidence of the convertibility of heat and mechanical power, they are unexceptionable. Nevertheless, there is reason to believe that the true mechanical equivalent of heat is considerably less than any of the values deduced from Mr Joule's experiments; for in all of them there are causes of loss of power, the effect of which it is impossible to calculate. In all machinery, a portion of the power which disappears is carried off by waves of condensation and expansion, along the supports of the machine, and through the surrounding air: this portion cannot be estimated, and is, of course, not operative in producing heat within the machine. It is also impossible to calculate, where friction is employed to produce heat, what amount of it has been lost in the production of electricity, a power which is, no doubt, convertible into heat, but which, in such experiments, probably escapes without undergoing that conversion. To make the determination of the mechanical equivalent of heat by electro-magnetic experiments correct, it is necessary that the whole of the mechanical power should be converted into magnetic power, the whole of the magnetic power into what are called electric currents, and the whole of the power of the electric currents into heat, not one of which conditions is likely to be exactly fulfilled. Even in producing heat by the compression of air, it must not be assumed that the whole of the mechanical power is expended in raising the temperature.

それらの実験で測った温度の差が小さいため、数値の結果はいくらか不確かである。それでも、熱と力学的な動力が互いに変換できることの証拠としては、非の打ちどころがないと私には思われる。とはいえ、熱の真の力学的当量は、ジュール氏の実験から導かれたどの値よりもかなり小さいと考える理由がある。それらの実験のどれにも動力を失わせる原因があり、その効果を計算することができないからである。どんな機械でも、消える動力の一部は、凝縮と膨張の波によって、機械の支えを伝わり、また周りの空気を通って運び去られる。この部分は見積もることができず、もちろん機械の中で熱を生むはたらきをしない。また、熱を生むために摩擦を用いるときには、そのうちどれだけが電気を生むことに失われたかを計算することもできない。電気は疑いなく熱に変換できる動力だが、こうした実験では、おそらくその変換を経ずに逃げてしまう。電磁気の実験による熱の力学的当量の決定を正しいものにするには、力学的な動力の全部が磁気の動力に、磁気の動力の全部がいわゆる電流に、電流の動力の全部が熱に変換されなければならない。これらの条件のどれ一つとして、厳密に満たされそうにはない。空気の圧縮によって熱を生む場合でさえ、力学的な動力の全部が温度を上げることに費やされると決めてかかってはならない。

訳注：「waves of condensation and expansion」の condensation は、ここでは媒質が密になること（疎密波の「密」）で、蒸気の凝縮ではない。

### ¶68　p.157

> (3.) The best means of determining the mechanical equivalent of heat are furnished by those experiments in which no machinery is employed. Of this kind are experiments on the velocity of sound in air and other gases, which, according to the received and well-known theory of Laplace, is accelerated by the heat developed by the compression of the medium.

(3.) 熱の力学的当量を決める最もよい手段は、機械を何も用いない実験によって与えられる。この種のものに、空気や他の気体の中の音の速さについての実験がある。音の速さは、受け入れられ、よく知られたラプラスの理論によれば、媒質の圧縮によって生じる熱のために速められる。

訳注：ラプラスは Pierre-Simon Laplace。

### ¶69　p.157–158

> The accuracy of this theory has lately been called in question. There can be no doubt that it deviates from absolute exactness, in so far that the magnitude of the displacements of the particles of air is neglected in comparison with the length of a wave. It appears to me, however, that the Astronomer-Royal, in his remarks on the subject in the *London and Edinburgh Philosophical Magazine for July* 1849, has shewn, in a satisfactory manner, that although the effect of the appreciable magnitude of those displacements, as compared with the length of a [p.158] wave of sound, is to alter slowly the form of the function representing the wave, still that effect is not sufficiently great to make Laplace's theory practically erroneous. I have, therefore, in the sequel, adhered to the experiments of Dulong, and to those quoted by Poisson, on the velocity of sound, as the best data for determining the mechanical equivalent of heat.

この理論の正確さは、近ごろ疑問に付された。空気の粒子の変位の大きさを波長に比べて無視している限りで、この理論が完全な厳密さからずれていることは疑いない。しかし私には、王室天文官が『ロンドン・エディンバラ哲学雑誌』1849 年 7 月号でこの主題について述べたところで、次のことを満足のいくかたちで示したと思われる。音の [p.158] 波長に比べてそれらの変位が無視できない大きさをもつことの効果は、波を表す関数の形をゆっくり変えることではあるが、その効果はラプラスの理論を実際上誤りとするほど大きくはない、ということである。そこで私は、以下では、熱の力学的当量を決めるための最もよいデータとして、音の速さについてのデュロンの実験と、ポアソンが引いている実験とに拠った。

訳注：王室天文官（Astronomer-Royal）が誰かを、誌面は名で挙げていない（確かめていない）。ポアソンは Siméon Denis Poisson。

### ¶70　p.158

> (4.) The expression already given for the real specific heat of unity of weight of a given substance may be resolved into two factors, thus:—
>
> <i>d</i>Q/<i>d</i>τ = 1/C<i>n</i>M × 3<i>k</i>M/2μ . . . (1.)
>
> The first factor, 1/C<i>n</i>M, may be considered in general as a known quantity; for C represents, as already stated, 274·6 centigrade degrees, the absolute temperature of melting ice, and <i>n</i>M the theoretical weight, in the perfectly gaseous state, of unity of volume of the substance, under unity of pressure, at that temperature; or what is the same thing, 1/<i>n</i>M is the height of an imaginary column of the substance, of uniform density, and at the temperature of melting ice, whose pressure by weight upon a given area of base is equal to its pressure by elasticity, supposing it to be perfectly gaseous. The determination of the ratio 3<i>k</i>M/2μ is necessary, to complete the solution of the problem.

(4.) 与えられた物質の重さの単位について、すでに与えた真の比熱の式は、次のように二つの因子に分けることができる。

<i>d</i>Q/<i>d</i>τ = 1/C<i>n</i>M × 3<i>k</i>M/2μ . . . (1.)

一つ目の因子 1/C<i>n</i>M は、一般に既知の量とみなしてよい。C は、すでに述べたように摂氏 274·6 度、すなわち融ける氷の絶対温度を表し、<i>n</i>M は、その物質の体積の単位が、完全な気体の状態で、圧力の単位のもと、その温度でもつ理論上の重さを表すからである。同じことだが、1/<i>n</i>M は、その物質の想像上の柱の高さである。この柱は密度が一様で、融ける氷の温度にあり、与えられた底面積に重さで及ぼす圧力が、それが完全な気体であるとしたときに弾性で及ぼす圧力に等しい。問題の解を仕上げるには、比 3<i>k</i>M/2μ を決めることが要る。

訳注：式の番号 (1.) は、この節の中での番号（序論の式は XII. などのローマ数字）。

### ¶71　p.158

> (5.) The relation now to be investigated between heat and mechanical power, is that which exists between the power expended in compressing a body into a smaller volume, and the increase of heat in consequence of such a compression, and conversely, between the heat which disappears, or, as it is said, becomes *latent*, during the expansion of a body to a greater volume, and the mechanical power gained or developed by that expansion. Those phenomena, according to the hypothesis now under consideration, as well as every hypothesis which ascribes heat to motion, are simply the transformation of mechanical power from one shape into another.

(5.) これから調べる熱と力学的な動力との関係は、物体をより小さな体積に圧縮するのに費やす動力と、その圧縮の結果としての熱の増加との間にある関係であり、逆に、物体がより大きな体積に膨張するあいだに消える熱、いわゆる*潜熱となる*熱と、その膨張によって得られる、つまり生じる力学的な動力との間にある関係である。これらの現象は、いま考えている仮説によっても、熱を運動に帰するどの仮説によっても、力学的な動力が一つの形から別の形へ変わることにすぎない。

### ¶72　p.158

> It is obvious, in the first place, without the aid of algebraical symbols, that the general effect of the compression of an oscillating atomic atmosphere, or molecular vortex, must be to accelerate its motion, and of its dilatation, to retard its motion; for every portion of such an atmosphere is urged towards the nucleus or atomic centre by a centripetal force equal to the centrifugal force arising from the oscillation; so that when, by compression, each portion of the atmosphere is made to *approach* the centre by a given distance, the *vis viva* of its motion will be *increased* by the amount corresponding to the centripetal force acting through that distance; and conversely, when by expansion each portion of the atmosphere is made to *retreat* from the centre, the *vis viva* of its motion will be *diminished* by a similar amount.

まず、代数の記号の助けを借りなくても明らかなことがある。振動している原子の大気、すなわち分子渦を圧縮することの一般的な効果は、その運動を速めることでなければならず、その膨張の効果は、その運動を遅らせることでなければならない。そうした大気のどの部分も、振動から生じる遠心力に等しい向心力によって、核すなわち原子の中心へ向かって押されているからである。それゆえ、圧縮によって大気の各部分が中心に与えられた距離だけ*近づく*ときには、その運動の*活力*は、その距離にわたってはたらく向心力に応じた量だけ*増す*。逆に、膨張によって大気の各部分が中心から*遠ざかる*ときには、その運動の*活力*は同じような量だけ*減る*。

### ¶73　p.158–159

> It is not, however, to be taken for granted, that *all* the power expended in [p.159] compressing a body appears in the form of heat. More or less power may be consumed or developed by changes of molecular arrangement, or of the internal distribution of the density of the atomic atmospheres; and changes of molecular arrangement or distribution may develope or consume heat, independently of changes of volume.

しかし、物体を [p.159] 圧縮するのに費やした動力の*すべて*が熱の形で現れると決めてかかってはならない。分子の配置の変化や、原子の大気の内部での密度の分布の変化によって、多かれ少なかれ動力が費やされたり生じたりしうる。また、分子の配置や分布の変化は、体積の変化とは関わりなく、熱を生じたり費やしたりしうる。

### ¶74　p.159

> (6.) We shall now investigate, according to the hypothesis of molecular vortices, the amount of heat produced by an indefinitely small compression of one atom of a body in that state of perfect fluidity which admits of the bounding surface of the atom being treated as if it were spherical: its radius being denoted by R, and the radius of any internal spherical layer of the atmosphere by multiplying R by a fraction <i>u</i>.

(6.) では、分子渦の仮説に従って、完全な流動性の状態にある物体の一つの原子を限りなく小さく圧縮したときに生じる熱の量を調べよう。その状態では、原子の境の面を球であるかのように扱ってよい。その半径を R で表し、大気の内部の任意の球の層の半径を、R に分数 <i>u</i> を掛けて表す。

### ¶75　p.159

> I shall denote by the ordinary symbol of differentiation <i>d</i>, such changes as depend on the various positions of portions of the atomic atmosphere relatively to each other, when changes of volume and temperature are not taken into consideration; while by the symbol δ of the calculus of variations, I shall represent such changes as arise from the variations of volume and temperature.

体積と温度の変化を考えに入れないときに、原子の大気の各部分の互いに対するさまざまな位置によって決まる変化を、私はふつうの微分の記号 <i>d</i> で表す。一方、体積と温度の変化から生じる変化は、変分法の記号 δ で表す。

### ¶76　p.159

> Let us consider the case of an indefinitely thin spherical layer of the atomic atmosphere, whose distance from the nucleus is R<i>u</i>, its thickness R<i>du</i>, its area 4πR<sup>2</sup><i>u</i><sup>2</sup>, and its density μ/M Dψ(<i>u</i>, D, τ).

原子の大気の、限りなく薄い球の層の場合を考えよう。その核からの距離は R<i>u</i>、厚さは R<i>du</i>、面積は 4πR<sup>2</sup><i>u</i><sup>2</sup>、密度は μ/M Dψ(<i>u</i>, D, τ) とする。

訳注：ψ は誌面では ψ に似た独特の字形で刷られている。

### ¶77　p.159

> The weight, then, of this layer is
>
> 4πR<sup>3</sup> μ/M D<i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)<i>du</i>.
>
> Its velocity of oscillation is <i>v</i>, and having, in virtue of that velocity, a mean centrifugal force, as explained in the Introduction (Equation V.), equal to
>
> its weight × (<i>v</i><sup>2</sup>/<i>gk</i>R<i>u</i> = 2Q/<i>k</i>R<i>u</i>)
>
> it is kept in equilibrio by an equal and opposite centripetal force, arising from attraction and elastic pressure, which is consequently represented by
>
> 4πR<sup>2</sup> μ/M <i>v</i><sup>2</sup>/<i>gk</i> D<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>
>
> =8πR<sup>2</sup> μ/<i>k</i>M QD<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>.

すると、この層の重さは

4πR<sup>3</sup> μ/M D<i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)<i>du</i>

である。その振動の速さは <i>v</i> であり、その速さのために、序論（式 V.）で説明したとおり、

その重さ × (<i>v</i><sup>2</sup>/<i>gk</i>R<i>u</i> = 2Q/<i>k</i>R<i>u</i>)

に等しい平均の遠心力をもつ。この層は、引力と弾性の圧力から生じる、大きさが等しく向きが反対の向心力によってつり合いに保たれている。したがって、その向心力は

4πR<sup>2</sup> μ/M <i>v</i><sup>2</sup>/<i>gk</i> D<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>

=8πR<sup>2</sup> μ/<i>k</i>M QD<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>

で表される。

### ¶78　p.159–160

> Let the mean density of the atom now be increased by the indefinitely small quantity δD. Then the layer will approach the nucleus through the distance −δ(R<i>u</i>)=−<i>u</i>δR−Rδ<i>u</i>, and being acted upon through that distance by the centripetal force already stated, the *vis viva* of oscillation will be increased by a quantity corresponding to the mechanical power (that is to say, the *heat*), represented by the product of that distance by that force, or by
>
> −8πR<sup>2</sup> μ/<i>k</i>M QD<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>×δ(R<i>u</i>)
>
> [p.160] =−8πR<sup>3</sup> μ/<i>k</i>M QDψ(<i>u</i>, D, τ)<i>u</i><sup>2</sup> (δR/R + δ<i>u</i>/<i>u</i>) <i>du</i>
>
> which, because δR/R=−1/3 · δD/D, and 4πR<sup>3</sup>D/3=M is equal to
>
> +QM . 2μ/<i>k</i>M ψ(<i>u</i>, D, τ)<i>u</i><sup>2</sup> (δD/D − 3 δ<i>u</i>/<i>u</i>) <i>du</i>.

いま、原子の平均の密度が限りなく小さな量 δD だけ増すとしよう。すると層は距離 −δ(R<i>u</i>)=−<i>u</i>δR−Rδ<i>u</i> だけ核に近づく。そして、その距離にわたって先に述べた向心力を受けるので、振動の*活力*は、力学的な動力（すなわち*熱*）に当たる量だけ増す。その量は、その距離とその力との積、つまり

−8πR<sup>2</sup> μ/<i>k</i>M QD<i>u</i>ψ(<i>u</i>, D, τ)<i>du</i>×δ(R<i>u</i>)

[p.160] =−8πR<sup>3</sup> μ/<i>k</i>M QDψ(<i>u</i>, D, τ)<i>u</i><sup>2</sup> (δR/R + δ<i>u</i>/<i>u</i>) <i>du</i>

で表される。これは、δR/R=−1/3 · δD/D であり、4πR<sup>3</sup>D/3=M であるから、

+QM . 2μ/<i>k</i>M ψ(<i>u</i>, D, τ)<i>u</i><sup>2</sup> (δD/D − 3 δ<i>u</i>/<i>u</i>) <i>du</i>

に等しい。

訳注：二つの丸括弧 (δR/R + δ<i>u</i>/<i>u</i>)・(δD/D − 3 δ<i>u</i>/<i>u</i>) は誌面にある括弧。

### ¶79　p.160

> We must suppose that the velocity of oscillation is equalised throughout the atomic atmosphere, by a propagation of motion so rapid as to be practically instantaneous.

振動の速さは、実際上は瞬時とみなせるほど速い運動の伝わりによって、原子の大気の全体にわたって等しくそろえられていると仮定しなければならない。

### ¶80　p.160

> Then if the above expression be integrated with respect to <i>du</i>, from <i>u</i>=0 to <i>u</i>=1, the result will give the whole increase of heat in the atom arising from the condensation δD; and dividing that integral by the atomic weight M, we shall obtain the corresponding development of heat in unity of weight. This is expressed by the following equation:—
>
> δQ′=2Q μ/<i>k</i>M {δD/D ∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)
>
> −3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)} . . (2.)

そこで、上の式を <i>du</i> について <i>u</i>=0 から <i>u</i>=1 まで積分すれば、その結果は、密になること δD から生じる原子の中の熱の増加の全体を与える。そして、その積分を原子量 M で割れば、重さの単位の中で、それに応じて生じる熱が得られる。これは次の式で表される。

δQ′=2Q μ/<i>k</i>M {δD/D ∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)

−3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)} . . (2.)

訳注：「condensation δD」は蒸気の凝縮ではなく、密度が δD だけ増すこと。誌面では式は二行にわたり、波括弧 { } は誌面にある。

### ¶81　p.160

> The letter Q′ is here introduced to denote, when negative, that heat which is consumed in producing changes of volume and of molecular arrangement, and when positive, as in the above equation, the heat which is produced by such changes.

ここで導入した文字 Q′ は、負のときには、体積と分子の配置の変化を生むのに費やされる熱を表し、上の式のように正のときには、そうした変化によって生じる熱を表す。

### ¶82　p.160

> The following substitutions have to be made in Equation (1.) of this Section.

この節の式 (1.) には、次の置き換えをしなければならない。

訳注：誌面は「Equation (1.)」。この節の式 (1.) は <i>d</i>Q/<i>dτ</i> の式で、置き換える Q と二つの積分が現れるのは式 (2.) なので、(2.) の誤りかもしれない（推測。誌面のまま訳した）。ランキンの論集の再録（W. J. Millar 編 *Miscellaneous Scientific Papers*, London: Charles Griffin, 1881, p.248。Internet Archive [`miscellaneoussc01taitgoog`](https://archive.org/details/miscellaneoussc01taitgoog)）も「equation (1)」のままで、直されていない。再録では、すぐ後の段が「The value of the first integral in equation (2) of this Section」と (2.) を指す。

### ¶83　p.160

> For Q is to be substituted its value, according to Equation XII. of the Introduction; or abbreviating C<i>n</i>μ<i>b</i> into κ:—
>
> Q=3<i>k</i>/2C<i>n</i>μ (τ−κ) . . . (3.)

Q には、序論の式 XII. による値を入れる。C<i>n</i>μ<i>b</i> を κ と略して書けば、

Q=3<i>k</i>/2C<i>n</i>μ (τ−κ) . . . (3.)

である。

### ¶84　p.160

> The value of the first integral in Equation (2.) of this Section is
>
> ∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)=1/3

この節の式 (2.) の一つ目の積分の値は

∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)=1/3

である。

### ¶85　p.160–161

> The value of the second integral
>
> −3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)
>
> remains to be investigated. The first step in this inquiry is given by the condition, that whatsoever changes of magnitude a given spherical layer undergoes, the portion of atmosphere between it and the nucleus is invariable. This condition is expressed by the equation
>
> 0=(δ<i>u</i> <i>d</i>/<i>du</i> + δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) . . . (4.)
>
> from which it follows that
>
> δ<i>u</i>=−1/<i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) (δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)
>
> [p.161] and consequently that
>
> −3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)=
>
> +(δτ . <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) 3∫<sub>0</sub><sup>1</sup> <i>du</i>/<i>u</i> ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)

二つ目の積分

−3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)

の値は、これから調べなければならない。この探究の第一歩は、次の条件によって与えられる。与えられた球の層の大きさがどのように変わっても、その層と核との間にある大気の部分は変わらない、という条件である。この条件は次の式で表される。

0=(δ<i>u</i> <i>d</i>/<i>du</i> + δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) . . . (4.)

これから次のことが従う。

δ<i>u</i>=−1/<i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) (δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)

[p.161] したがって、次のことも従う。

−3∫<sub>0</sub><sup>1</sup> <i>du</i> . <i>u</i>δ<i>u</i>ψ(<i>u</i>, D, τ)=

+(δτ . <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) 3∫<sub>0</sub><sup>1</sup> <i>du</i>/<i>u</i> ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ)

訳注：δ<i>u</i> の式の 1/<i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) は、誌面では分母が <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) 全体の縦の分数。演算子を包む丸括弧は誌面にある括弧。

### ¶86　p.161

> Hence, making
>
> 9∫<sub>0</sub><sup>1</sup> <i>du</i>/<i>u</i> ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) = U . . . (5.)

そこで、

9∫<sub>0</sub><sup>1</sup> <i>du</i>/<i>u</i> ∫<sub>0</sub><sup><i>u</i></sup> <i>du</i> . <i>u</i><sup>2</sup>ψ(<i>u</i>, D, τ) = U . . . (5.)

と置くと、

### ¶87　p.161

> The second integral in Equation (2.) is transformed into
>
> +1/3 (δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) U.

式 (2.) の二つ目の積分は

+1/3 (δτ <i>d</i>/<i>d</i>τ + δD <i>d</i>/<i>d</i>D) U

に変わる。

訳注：誌面では「Hence, making」の式 (5.) と「The second integral …」は別の段として字下げされているが、文としては一続き。

### ¶88　p.161

> By means of those substitutions we obtain, for the mechanical value of the heat developed in unity of weight of a fluid by any indefinitely small change of volume or of molecular distribution—
>
> δQ′=(τ−κ)/C<i>n</i>M (δD (1/D + <i>d</i>U/<i>d</i>D) + δτ <i>d</i>U/<i>d</i>τ)
>
> or taking V=1/D to denote the volume of unity of weight of the substance,
>
> δQ′=−(τ−κ)/C<i>n</i>M (δV (1/V − <i>d</i>U/<i>d</i>V) − δτ <i>d</i>U/<i>d</i>τ) . . . (6.)

これらの置き換えによって、流体の重さの単位の中に、体積または分子の分布の限りなく小さな変化によって生じる熱の、力学的な値として、次が得られる。

δQ′=(τ−κ)/C<i>n</i>M (δD (1/D + <i>d</i>U/<i>d</i>D) + δτ <i>d</i>U/<i>d</i>τ)

あるいは、V=1/D でその物質の重さの単位の体積を表すことにすれば、

δQ′=−(τ−κ)/C<i>n</i>M (δV (1/V − <i>d</i>U/<i>d</i>V) − δτ <i>d</i>U/<i>d</i>τ) . . . (6.)

訳注：誌面では二つの式と間の文を右の大きな括弧でくくり、まとめて (6.) としている。式の中の丸括弧は誌面にある括弧（(τ−κ) だけは補った）。

### ¶89　p.161

> Of this expression, the portion (τ−κ)/C<i>n</i>M · δD/D=−(τ−κ)/C<i>n</i>M · δV/V represents the variation of heat arising from mere change of volume.

この式のうち、(τ−κ)/C<i>n</i>M · δD/D=−(τ−κ)/C<i>n</i>M · δV/V の部分は、体積の変化だけから生じる熱の変化を表す。

### ¶90　p.161

> (τ−κ)/C<i>n</i>M δV <i>d</i>U/<i>d</i>V=(τ−κ)/C<i>n</i>M δD <i>d</i>U/<i>d</i>D, denotes the variation of heat produced by change of molecular distribution dependent on change of volume.

(τ−κ)/C<i>n</i>M δV <i>d</i>U/<i>d</i>V=(τ−κ)/C<i>n</i>M δD <i>d</i>U/<i>d</i>D は、体積の変化に伴う分子の分布の変化によって生じる熱の変化を表す。

### ¶91　p.161

> (τ−κ)/C<i>n</i>M δτ <i>d</i>U/<i>d</i>τ expresses the variation of heat due to change of molecular distribution dependent on change of temperature.

(τ−κ)/C<i>n</i>M δτ <i>d</i>U/<i>d</i>τ は、温度の変化に伴う分子の分布の変化による熱の変化を表す。

### ¶92　p.161

> (7.) The function U is one depending on molecular forces, the nature of which is as yet unknown. The only case in which it can be calculated directly is that of a perfect gas. Without giving the details of the integration, it may be sufficient to state, that in this case
>
> U = κ/τ
>
> and therefore that
>
> <i>d</i>U/<i>d</i>τ =−κ/τ<sup>2</sup>; <i>d</i>U/<i>d</i>V = 0 . . . (7.)

(7.) 関数 U は分子の力によって決まるものであり、その力の性質はまだ知られていない。それを直接に計算できるのは、完全気体の場合だけである。積分の詳細は示さないが、この場合には

U = κ/τ

であり、したがって

<i>d</i>U/<i>d</i>τ =−κ/τ<sup>2</sup>; <i>d</i>U/<i>d</i>V = 0 . . . (7.)

であると述べておけば足りるだろう。

訳注：誌面では二つの式を右の括弧でくくり、まとめて (7.) としている。段の頭の (7.) は条の番号、式の (7.) は式の番号で、別のもの。

### ¶93　p.161

> In all other cases, however, the value of this function can be determined indirectly, by introducing into the investigation the principle of the *conservation of vis viva*.

しかし、他のすべての場合には、この関数の値は、*活力の保存*の原理を探究に持ち込むことによって、間接に決めることができる。

### ¶94　p.162

> Suppose a portion of any substance, of the weight *unity*, to pass through a variety of changes of temperature and volume, and at length to be brought back to its primitive volume and temperature. Then the absolute quantity of heat in the substance, and the molecular arrangement and distribution, being the same as at first, the effect of their changes is eliminated; *and the algebraical sum of the vis viva expended and produced, whether in the shape of expansion and compression, or in that of heat, must be equal to zero:*—that is to say, if, on the whole, any mechanical power has appeared, and been given out from the body, in the form of expansion, an equal amount must have been communicated to the body, and must have disappeared in the form of heat; and if any mechanical power has appeared and been given out from the body in the form of heat, an equal amount must have been communicated to the body, and must have disappeared in the form of compression. This principle expressed symbolically is
>
> Δ Π + Δ Q′ = 0 . . . . . . (8.)
>
> Where Π, when positive, represents expansive power given out, when negative, compressive power absorbed; and Q′ represents, when positive, heat given out, when negative, heat absorbed.

任意の物質のうち、重さが*単位*（1）である一部分が、温度と体積のさまざまな変化を経て、ついにもとの体積と温度に戻されるとする。すると、物質の中の熱の絶対量も、分子の配置と分布も、はじめと同じであるから、それらの変化の効果は消える。*そして、費やされた活力と生み出された活力の代数和は、膨張と圧縮の形であれ、熱の形であれ、ゼロに等しくなければならない。*——すなわち、全体として、何らかの力学的な動力が膨張の形で現れ、物体から出されたなら、それと等しい量が物体に与えられ、熱の形で消えていなければならない。また、何らかの力学的な動力が熱の形で現れ、物体から出されたなら、それと等しい量が物体に与えられ、圧縮の形で消えていなければならない。この原理を記号で表すと

Δ Π + Δ Q′ = 0 . . . . . . (8.)

ここで Π は、正のときは出された膨張の動力を、負のときは吸われた圧縮の動力を表す。Q′ は、正のときは出された熱を、負のときは吸われた熱を表す。

訳注：誌面の Π と Δ は小さい字形で組まれている。

### ¶95　p.162

> To take the simplest case possible, let the changes of temperature and of volume be supposed to be indefinitely small, and to occur during distinct intervals of time, so that τ and V are independent variables. Let the initial absolute temperature be τ, the initial volume V, and the initial total elasticity P; and let the substance go through the following four changes.

できるだけ簡単な場合をとるため、温度と体積の変化はかぎりなく小さく、別々の時間の区間に起こるとし、τ と V を独立変数とする。はじめの絶対温度を τ、はじめの体積を V、はじめの全弾性を P とし、物質に次の四つの変化を経させる。

訳注：total elasticity（全弾性）は、ここでは単位面積あたりの圧力を指す。

### ¶96　p.162

> *First,* Let its temperature be raised from τ to τ + δτ, the volume remaining unchanged. Then the quantity of heat absorbed is
>
> − δτ (<i>d</i>Q/<i>dτ</i> − ((τ − κ)/(C<i>n</i>M)) <i>d</i>U/<i>dτ</i>)
>
> and there is no expansion nor compression.

*第一に*、体積を変えずに、温度を τ から τ + δτ へ上げる。すると吸われる熱の量は

− δτ (<i>d</i>Q/<i>dτ</i> − ((τ − κ)/(C<i>n</i>M)) <i>d</i>U/<i>dτ</i>)

であり、膨張も圧縮もない。

### ¶97　p.162

> *Secondly,* Let the body expand, without change of temperature, from the volume V to the volume V + δV. Then the quantity of heat absorbed is
>
> − δV . ((τ + δτ − κ)/(C<i>n</i>M)) (1/V − <i>d</i>/<i>d</i>V . (U + (<i>d</i>U/<i>dτ</i>) δτ))
>
> while the power given out by expansion is
>
> δV (P + (<i>d</i>P/<i>dτ</i>) δτ)

*第二に*、温度を変えずに、物体を体積 V から体積 V + δV へ膨張させる。すると吸われる熱の量は

− δV . ((τ + δτ − κ)/(C<i>n</i>M)) (1/V − <i>d</i>/<i>d</i>V . (U + (<i>d</i>U/<i>dτ</i>) δτ))

であり、膨張によって出される動力は

δV (P + (<i>d</i>P/<i>dτ</i>) δτ)

である。

### ¶98　p.162

> *Thirdly,* Let the temperature fall from τ + δτ to its original value τ, the volume V + δV continuing unchanged; then the heat given out is
>
> + δτ (<i>d</i>Q/<i>dτ</i> − ((τ − κ)/(C<i>n</i>M)) <i>d</i>/<i>dτ</i> (U + (<i>d</i>U/<i>d</i>V) δV))
>
> and there is no expansion nor compression.

*第三に*、体積を V + δV のまま変えずに、温度を τ + δτ からもとの値 τ へ下げる。すると出される熱は

+ δτ (<i>d</i>Q/<i>dτ</i> − ((τ − κ)/(C<i>n</i>M)) <i>d</i>/<i>dτ</i> (U + (<i>d</i>U/<i>d</i>V) δV))

であり、膨張も圧縮もない。

### ¶99　p.163

> *Fourthly,* Let the body be compressed, without change of temperature, to its original volume V; then the heat given out is
>
> + δV ((τ − κ)/(C<i>n</i>M)) (1/V − <i>d</i>U/<i>d</i>V)
>
> while the power absorbed in compression is
>
> − δV . P

*第四に*、温度を変えずに、物体をもとの体積 V まで圧縮する。すると出される熱は

+ δV ((τ − κ)/(C<i>n</i>M)) (1/V − <i>d</i>U/<i>d</i>V)

であり、圧縮で吸われる動力は

− δV . P

である。

### ¶100　p.163

> The body being now restored in all respects to its primitive state, the sum of the two portions of power connected with change of volume, must, in virtue of the principle of *vis viva*, be equal to the sum of the four quantities of heat with their signs reversed. Those additions being made, and the sums divided by the common factor δV δτ, the following equation is obtained:—
>
> <i>d</i>P/<i>dτ</i> = (1/(C<i>n</i>M)) (1/V − <i>d</i>U/<i>d</i>V) . . . (9.)

これで物体はあらゆる点でもとの状態に戻ったから、*活力*の原理により、体積の変化にともなう二つの動力の和は、四つの熱の量の符号を逆にした和に等しくなければならない。その足し算をし、和を共通の因子 δV δτ で割ると、次の式が得られる。

<i>d</i>P/<i>dτ</i> = (1/(C<i>n</i>M)) (1/V − <i>d</i>U/<i>d</i>V) . . . (9.)

### ¶101　p.163

> The integral of this partial differential equation is
>
> U = φ . τ + ∫<i>d</i>V (1/V − C<i>n</i>M <i>d</i>P/<i>dτ</i>) . . . (10.)
>
> Now φ . τ being the same for all densities, is the value of U for the perfectly gaseous state, or κ/τ; for in that state, the integral = 0.

この偏微分方程式の積分は

U = φ . τ + ∫<i>d</i>V (1/V − C<i>n</i>M <i>d</i>P/<i>dτ</i>) . . . (10.)

である。ここで φ . τ はすべての密度で同じであるから、完全に気体の状態での U の値、すなわち κ/τ である。その状態では積分 = 0 だからである。

訳注：φ . τ は「τ の関数 φ」の書き方と読んだ。

### ¶102　p.163

> The values of the partial differential coefficients are accordingly—
>
> <i>d</i>U/<i>d</i>V = 1/V − C <i>n</i> M <i>d</i>P/<i>dτ</i>
>
> <i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup> − C <i>n</i> M ∫<i>d</i>V . <i>d</i><sup>2</sup>P/<i>dτ</i><sup>2</sup> . . . (11.)
>
> and they can, therefore, be determined in all cases in which the quantity κ = C <i>n</i> μ <i>b</i>, and the law of variation of the total elasticity with the volume and temperature are known, so as to complete the data required in order to apply equation 6 of this section to the calculation of the mechanical value of the variations of heat due to changes of volume and molecular arrangement.

したがって偏微分係数の値は：

<i>d</i>U/<i>d</i>V = 1/V − C <i>n</i> M <i>d</i>P/<i>dτ</i>

<i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup> − C <i>n</i> M ∫<i>d</i>V . <i>d</i><sup>2</sup>P/<i>dτ</i><sup>2</sup> . . . (11.)

であり、それゆえ、量 κ = C <i>n</i> μ <i>b</i> と、体積と温度による全弾性の変わり方の法則とがわかっているすべての場合に、これらを決めることができる。こうして、この節の式 6 を、体積と分子の配置の変化による熱の変化の力学的な値の計算に当てはめるのに要るデータがそろう。

訳注：(11.) の二式は誌面では右の波括弧で一つにくくられ、番号が一つ付く。

### ¶103　p.163

> The total elasticity of an imperfect gas, according to Equations VI. and XII. of the introduction, being
>
> P = (τ/(C <i>n</i> M V)) (1 − F (D, τ/κ)) + <i>f</i> (D)
>
> its first and second partial differential coefficients with respect to the temperature are,—
>
> <i>d</i>P/<i>dτ</i> = (1/(C <i>n</i> M V)) (1 − (1 + τ <i>d</i>/<i>dτ</i>) F (D, τ/κ))
>
> <i>d</i><sup>2</sup>P/<i>dτ</i><sup>2</sup> = − (1/(C <i>n</i> M V)) (2 <i>d</i>/<i>dτ</i> + τ <i>d</i><sup>2</sup>/<i>dτ</i><sup>2</sup>) F (D, τ/κ)

不完全気体の全弾性は、序論の式 VI と XII により

P = (τ/(C <i>n</i> M V)) (1 − F (D, τ/κ)) + <i>f</i> (D)

であるから、温度についてのその一階と二階の偏微分係数は：

<i>d</i>P/<i>dτ</i> = (1/(C <i>n</i> M V)) (1 − (1 + τ <i>d</i>/<i>dτ</i>) F (D, τ/κ))

<i>d</i><sup>2</sup>P/<i>dτ</i><sup>2</sup> = − (1/(C <i>n</i> M V)) (2 <i>d</i>/<i>dτ</i> + τ <i>d</i><sup>2</sup>/<i>dτ</i><sup>2</sup>) F (D, τ/κ)

である。

### ¶104　p.164

> Consequently, for the imperfectly gaseous state,
>
> U = κ/τ + (1 + τ <i>d</i>/<i>dτ</i>) ∫<i>d</i>V . F (D, τ/κ)/V
>
> <i>d</i>U/<i>d</i>V = (1/V) . (1 + τ <i>d</i>/<i>dτ</i>) F (D, τ/κ)
>
> <i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup> + (2 <i>d</i>/<i>dτ</i> + τ <i>d</i><sup>2</sup>/<i>dτ</i><sup>2</sup>) ∫<i>d</i>V . F (D, τ/κ)/V . . (12.)

したがって、不完全に気体の状態では

U = κ/τ + (1 + τ <i>d</i>/<i>dτ</i>) ∫<i>d</i>V . F (D, τ/κ)/V

<i>d</i>U/<i>d</i>V = (1/V) . (1 + τ <i>d</i>/<i>dτ</i>) F (D, τ/κ)

<i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup> + (2 <i>d</i>/<i>dτ</i> + τ <i>d</i><sup>2</sup>/<i>dτ</i><sup>2</sup>) ∫<i>d</i>V . F (D, τ/κ)/V . . (12.)

訳注：(12.) の三式は誌面では右の波括弧で一つにくくられる。

### ¶105　p.164

> (8.) It is to be observed that the process followed in ascertaining the nature of the function U is analogous to that employed by M. Carnôt in his theory of the motive power of heat, although founded on contrary principles, and leading to different results.

(8.) 注意しておくべきは、関数 U の性質を確かめるのにたどった手順が、カルノー氏が熱の動力の理論で用いた手順と似ていることである。ただし、こちらは逆の原理に基づき、異なる結果に行き着く。

訳注：誌面は Carnôt と o に曲折アクセントを付ける（今の綴りは Carnot）。誌面のとおり起こした。Sadi Carnot（ニコラ・レオナール・サディ・カルノー）を指すと読んだ。

### ¶106　p.164

> Carnôt, in fact, considers heat to be something of a peculiar kind, whether a condition or a substance, the total amount of which in nature is incapable of increase or of diminution. It is not, therefore, according to his theory, convertible into mechanical power; but is capable, by its transmission through substances under particular circumstances, of causing mechanical power to be developed. He supposes a body to go through certain changes of temperature and volume, and to return at last to its primitive volume and temperature, and conceives, in accordance with his view of the nature of heat, that it must have given out exactly the same quantity of heat that it has absorbed. The transmission of this heat he regards as the cause of the production of an amount of mechanical power, depending on the quantity of heat transmitted and on the temperature at which the transmission has taken place. According to these principles, a body, having received a certain quantity of heat, is capable of giving out not only all the heat it has received, but also a quantity of mechanical power which did not before exist.

実際、カルノーは、熱を、状態であれ物質であれ、ある特別な種類のものと考え、自然の中でのその総量は増えも減りもしないとする。したがって彼の理論では、熱は力学的な動力に変わりうるものではない。しかし熱は、特定の状況の下で物質の中を伝わることによって、力学的な動力を生じさせることができる。彼は、物体が温度と体積のある変化を経て、最後にもとの体積と温度に戻ると仮定し、熱の性質についての自分の見方に沿って、物体は吸ったのとちょうど同じ量の熱を出したはずだと考える。そして、この熱が伝わることを、ある量の力学的な動力が生み出される原因とみなす。その量は、伝わった熱の量と、伝わったときの温度とによる。これらの原理によれば、ある量の熱を受け取った物体は、受け取った熱をすべて出すことができるうえに、それまで存在しなかった量の力学的な動力も出すことができる。

### ¶107　p.164

> According to the theory of this Essay, on the contrary, and to every conceivable theory which regards heat as a modification of motion, no mechanical power can be given out in the shape of expansion unless the quantity of heat emitted by the body in returning to its primitive temperature and volume is *less* than the quantity of heat originally received: the excess of the latter quantity above the former disappearing as heat, to appear as expansive power, so that the sum of the *vis viva* in those two forms continues unchanged.

これに対して、この論文の理論によれば、また熱を運動の一つの様態とみなす考えうるすべての理論によれば、物体がもとの温度と体積に戻るあいだに出す熱の量が、はじめに受け取った熱の量より*少なく*なければ、膨張の形で力学的な動力を出すことはできない。後者の量が前者を超える分は、熱としては消え、膨張の動力として現れる。こうして、その二つの形での*活力*の和は変わらないままである。

### ¶108　p.165

> Section II.—Of Real and Apparent Specific Heat, especially in the State of Perfect Gas.

第 II 節　真の比熱と見かけの比熱について、とくに完全気体の状態で

### ¶109　p.165

> (9.) The apparent specific heat of a given substance is found by adding to the real specific heat (or the heat which retains its form in producing an elevation of one degree of temperature in unity of weight) that additional heat which disappears in producing changes of volume and of molecular arrangement, and which is determined by reversing the sign of Q<sup>1</sup> in equation 6 of Section I. (so as to transform it from heat evolved to heat absorbed), and taking its *total* differential coefficient with respect to the temperature. Hence, denoting total apparent specific heat by K,—
>
> K = <i>d</i>Q/<i>dτ</i> − <i>d</i> . Q<sup>1</sup>/<i>dτ</i> = <i>d</i>Q/<i>dτ</i> − <i>d</i>Q<sup>1</sup>/<i>dτ</i> − (<i>d</i>Q<sup>1</sup>/<i>d</i>V) . (<i>d</i>V/<i>dτ</i>)
>
> = (1/(C<i>n</i>M)) {3<i>k</i>M/(2μ) + (τ − κ) ((<i>d</i>V/<i>dτ</i>) (1/V − <i>d</i>U/<i>d</i>V) − <i>d</i>U/<i>dτ</i>)} (13.)

(9.) ある物質の見かけの比熱は、真の比熱（すなわち、重さの単位の温度を一度上げるのに、熱の形を保ったまま使われる熱）に、体積と分子の配置の変化を生むのに消える追加の熱を足して求められる。その追加の熱は、第 I 節の式 6 の Q<sup>1</sup> の符号を逆にし（出る熱から吸われる熱に変えるため）、温度についてのその*全*微分係数をとって決まる。それゆえ、全体の見かけの比熱を K で表すと：

K = <i>d</i>Q/<i>dτ</i> − <i>d</i> . Q<sup>1</sup>/<i>dτ</i> = <i>d</i>Q/<i>dτ</i> − <i>d</i>Q<sup>1</sup>/<i>dτ</i> − (<i>d</i>Q<sup>1</sup>/<i>d</i>V) . (<i>d</i>V/<i>dτ</i>)

= (1/(C<i>n</i>M)) {3<i>k</i>M/(2μ) + (τ − κ) ((<i>d</i>V/<i>dτ</i>) (1/V − <i>d</i>U/<i>d</i>V) − <i>d</i>U/<i>dτ</i>)} (13.)

訳注：この頁の Q<sup>1</sup> は、誌面で Q の右肩に 1 が付く。p.162 と第 I 節の式 6 では Q′ と刷られており、同じものを指すと読んだ。total differential coefficient は今の全微分係数（全導関数）。

### ¶110　p.165

> Another mode of expressing this coefficient is the following:—
>
> Denote the ratio 2μ/(3<i>k</i>M) by N,
>
> and the real specific heat by 𝔨 = 1/(C<i>n</i>MN) . . (14.)
>
> Then
>
> K = 𝔨 {1 + N (τ − κ) ((<i>d</i>V/<i>dτ</i>) (1/V − <i>d</i>U/<i>d</i>V) − <i>d</i>U/<i>dτ</i>)} (15.)

この係数を表すもう一つの仕方は次のとおりである。

比 2μ/(3<i>k</i>M) を N で、

真の比熱を 𝔨 = 1/(C<i>n</i>MN) で表す . . (14.)

すると

K = 𝔨 {1 + N (τ − κ) ((<i>d</i>V/<i>dτ</i>) (1/V − <i>d</i>U/<i>d</i>V) − <i>d</i>U/<i>dτ</i>)} (15.)

訳注：𝔨 は誌面で亀の子文字（ドイツ文字）の k。斜体の <i>k</i> とは別の記号である。

### ¶111　p.165

> The value of <i>d</i>V/<i>dτ</i> is to be determined from the conditions of each particular case; so that each substance may have a variety of apparent specific heats, according to the manner in which the volume varies with the temperature.

<i>d</i>V/<i>dτ</i> の値は、それぞれの場合の条件から決めなければならない。それゆえ、一つの物質が、温度とともに体積がどう変わるかに応じて、さまざまな見かけの比熱をもちうる。

### ¶112　p.165

> If the volume is not permitted to vary, so that <i>d</i>V/<i>dτ</i> = 0, there is obtained the following result, being the apparent specific heat at constant volume:—
>
> K<sub>V</sub> = (1/(C<i>n</i>M)) (1/N − (τ − κ) <i>d</i>U/<i>dτ</i>)
>
> = 𝔨 (1 − N (τ − κ) <i>d</i>U/<i>dτ</i>) . . (16.)

体積が変わるのを許さず、<i>d</i>V/<i>dτ</i> = 0 とすると、次の結果が得られる。これが体積一定での見かけの比熱である。

K<sub>V</sub> = (1/(C<i>n</i>M)) (1/N − (τ − κ) <i>d</i>U/<i>dτ</i>)

= 𝔨 (1 − N (τ − κ) <i>d</i>U/<i>dτ</i>) . . (16.)

### ¶113　p.165

> (10.) When the substance under consideration is a perfect gas, it has already been stated (Eq. 7), that <i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup>, <i>d</i>U/<i>d</i>V = 0; and because the volume of unity of weight is directly as the absolute temperature and inversely as the pressure,
>
> (1/V) (<i>d</i>V/<i>dτ</i>) = 1/τ − (1/P) (<i>d</i>P/<i>dτ</i>) . . . (17.)

(10.) 考えている物質が完全気体のときは、すでに述べたとおり（式 7）、<i>d</i>U/<i>dτ</i> = − κ/τ<sup>2</sup>、<i>d</i>U/<i>d</i>V = 0 である。また、重さの単位の体積は絶対温度に正比例し、圧力に反比例するから

(1/V) (<i>d</i>V/<i>dτ</i>) = 1/τ − (1/P) (<i>d</i>P/<i>dτ</i>) . . . (17.)

### ¶114　p.166

> Hence the following are the values of the apparent specific heats of unity of weight of a theoretically perfect gas under different circumstances:—
>
> General value of the total apparent specific heat:—
>
> K = (1/(C<i>n</i>M)) {1/N + (τ − κ) (κ/τ<sup>2</sup> + <i>d</i>V/(V <i>dτ</i>))}
>
> = (1/(C<i>n</i>M)) {1/N + (τ − κ) (κ/τ<sup>2</sup> + 1/τ − <i>d</i>P/(P <i>dτ</i>))}
>
> Apparent specific heat at constant volume:—
>
> K<sub>V</sub> = (1/(C<i>n</i>M)) {1/N + κ/τ − κ<sup>2</sup>/τ<sup>2</sup>}
>
> = 𝔨 (1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>))
>
> Apparent specific heat under constant pressure:—
>
> K<sub>P</sub> = (1/(C<i>n</i>M)) (1/N + 1 − κ<sup>2</sup>/τ<sup>2</sup>)
>
> = 𝔨 {1 + N (1 − κ<sup>2</sup>/τ<sup>2</sup>)} . . . (18.)

それゆえ、理論上の完全気体の重さの単位の見かけの比熱は、状況に応じて次の値をとる。

全体の見かけの比熱の一般の値：

K = (1/(C<i>n</i>M)) {1/N + (τ − κ) (κ/τ<sup>2</sup> + <i>d</i>V/(V <i>dτ</i>))}

= (1/(C<i>n</i>M)) {1/N + (τ − κ) (κ/τ<sup>2</sup> + 1/τ − <i>d</i>P/(P <i>dτ</i>))}

体積一定での見かけの比熱：

K<sub>V</sub> = (1/(C<i>n</i>M)) {1/N + κ/τ − κ<sup>2</sup>/τ<sup>2</sup>}

= 𝔨 (1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>))

圧力一定での見かけの比熱：

K<sub>P</sub> = (1/(C<i>n</i>M)) (1/N + 1 − κ<sup>2</sup>/τ<sup>2</sup>)

= 𝔨 {1 + N (1 − κ<sup>2</sup>/τ<sup>2</sup>)} . . . (18.)

訳注：(18.) は誌面では、三つの見出しと式の全体を右の縦線でくくり、番号が一つ付く。K<sub>V</sub> の二行目の τ の分母のあたりに小さな点があるが、汚れと見て起こさなかった。

### ¶115　p.166

> The ratio of the apparent specific heat under constant pressure to the apparent specific heat at constant volume is the following:—
>
> K<sub>P</sub>/K<sub>V</sub> = (1 + N (1 − κ<sup>2</sup>/τ<sup>2</sup>))/(1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>)) = 1 + N (1 − κ/τ)/(1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>)) . . . (19.)

圧力一定での見かけの比熱と、体積一定での見かけの比熱との比は、次のとおりである。

K<sub>P</sub>/K<sub>V</sub> = (1 + N (1 − κ<sup>2</sup>/τ<sup>2</sup>))/(1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>)) = 1 + N (1 − κ/τ)/(1 + N (κ/τ − κ<sup>2</sup>/τ<sup>2</sup>)) . . . (19.)

### ¶116　p.166

> The value of κ is unknown; and, as yet, no experimental data exist from which it can be determined. I have found, however, that practically, results of sufficient accuracy are obtained by regarding κ as so small in comparison with τ, that κ/τ, and *à fortiori* κ<sup>2</sup>/τ<sup>2</sup>, may be neglected in calculation.

κ の値はわかっておらず、それを決められる実験のデータもまだない。しかし私は、実用上は、κ を τ に比べてごく小さいとみなし、κ/τ を、ましてや κ<sup>2</sup>/τ<sup>2</sup> を、計算で無視しても十分に正確な結果が得られることを見いだした。

訳注：誌面の à fortiori は a に重アクセントが付く（ラテン語の a fortiori、「なおさら」）。誌面のとおり起こした。

### ¶117　p.166–167

> Thus are obtained the following *approximate* results, for perfect gases, and gases which may without material error be treated as perfect.
>
> General value of the total apparent specific heat:—
>
> K = (1/(C<i>n</i>M)) (1/N + (τ/V) (<i>d</i>V/<i>dτ</i>)) = 𝔨 + P <i>d</i>V/<i>dτ</i>
>
> = (1/(C<i>n</i>M)) (1/N + 1 − (τ/P) (<i>d</i>P/<i>dτ</i>))
>
> Apparent specific heat at constant volume:—
>
> K<sub>V</sub> = 1/(C<i>n</i>MN) = 𝔨
>
> being equal to the real specific heat.
>
> Apparent specific heat under constant pressure:—
>
> K<sub>P</sub> = (1/(C<i>n</i>M)) (1/N + 1) = 𝔨 (1 + N) . . (20.)
>
> [p.167] Ratio of those two specific heats:—
>
> K<sub>P</sub>/K<sub>V</sub> = 1 + N . . . . (21.)

こうして、完全気体と、大きな誤りなしに完全とみなしてよい気体について、次の*近似の*結果が得られる。

全体の見かけの比熱の一般の値：

K = (1/(C<i>n</i>M)) (1/N + (τ/V) (<i>d</i>V/<i>dτ</i>)) = 𝔨 + P <i>d</i>V/<i>dτ</i>

= (1/(C<i>n</i>M)) (1/N + 1 − (τ/P) (<i>d</i>P/<i>dτ</i>))

体積一定での見かけの比熱：

K<sub>V</sub> = 1/(C<i>n</i>MN) = 𝔨

これは真の比熱に等しい。

圧力一定での見かけの比熱：

K<sub>P</sub> = (1/(C<i>n</i>M)) (1/N + 1) = 𝔨 (1 + N) . . (20.)

[p.167] その二つの比熱の比：

K<sub>P</sub>/K<sub>V</sub> = 1 + N . . . . (21.)

訳注：(20.) は誌面では p.166 の三つの見出しと式を右の波括弧でくくって付く。(21.) は p.167 の頭に続く見出しと式で、同じ一続きと見てこの段に入れた。

### ¶118　p.167

> This ratio is the quantity called by Poisson γ, in his researches on the propagation of sound.

この比は、ポアソンが音の伝わりの研究で γ と呼んだ量である。

### ¶119　p.167

> (11.) It is unnecessary to do more than to refer to the researches of Poisson, and to those of Laplace, for the proof that the effect of the production of heat by the compression of air is the same as if the elasticity varied in proportion to that power of the density whose index is the ratio of the two specific heats; so that the actual velocity of sound is greater than that which it would have if there were no such development of heat, in the proportion of the square root of that ratio.

(11.) 空気を圧縮して熱が生じることの効果が、弾性が密度のある冪に比例して変わる場合と同じであり、その冪の指数が二つの比熱の比であることの証明については、ポアソンの研究とラプラスの研究を挙げるだけで足りる。こうして、実際の音速は、そのような熱の発生が無い場合の音速より、その比の平方根の割合で大きい。

### ¶120　p.167

> The following is the value of the velocity of sound in a gas, as given by Poisson, in the second volume of his *Traité de Mécanique*:—
>
> <i>a</i> = √(<i>g</i> . γ . (1 + ET) <i>m</i><i>h</i>/Δ) . . . . (22.)
>
> where <i>a</i> denotes the velocity of sound, <i>g</i> the velocity generated by gravity in unity of time, E the coefficient of increase of elasticity with temperature, at the freezing point of water, T the temperature measured from that point, <i>m</i> the specific gravity of mercury, Δ that of the gas at the temperature of melting ice, and pressure corresponding to a column of mercury of the height <i>h</i>. It follows that the ratio γ is given by the formula
>
> γ = 1 + N nearly = <i>a</i><sup>2</sup> Δ/(<i>g</i> <i>m</i> <i>h</i> (1 + E T)) . . . (23.)

ポアソンが『力学概論』（*Traité de Mécanique*）第二巻で与えている、気体の中の音速の値は次のとおりである。

<i>a</i> = √(<i>g</i> . γ . (1 + ET) <i>m</i><i>h</i>/Δ) . . . . (22.)

ここで <i>a</i> は音速、<i>g</i> は重力が単位時間に生む速さ、E は水の凝固点での、温度による弾性の増加の係数、T はその点から測った温度、<i>m</i> は水銀の比重、Δ は、融ける氷の温度で、高さ <i>h</i> の水銀柱に当たる圧力の下での気体の比重を表す。したがって比 γ は次の式で与えられる。

γ = 1 + N 近似的に = <i>a</i><sup>2</sup> Δ/(<i>g</i> <i>m</i> <i>h</i> (1 + E T)) . . . (23.)

訳注：誌面の根号は (1 + ET) <i>m</i><i>h</i>/Δ までを覆うように組まれていると読んだ。Δ は誌面で小さい三角の字形。

### ¶121　p.167

> Calculations have been made to determine the ratio γ from the velocity of sound; but as many of them involve erroneous values of the coefficient of elasticity E, the experiments have to be reduced anew.

比 γ を音速から決める計算はこれまでもなされてきた。しかしその多くは弾性の係数 E の誤った値を含むので、実験を新たに整約し直さなければならない。

### ¶122　p.167

> The following calculation is founded on an experiment quoted by Poisson on the velocity of sound in atmospheric air, the values of E, <i>m</i>, and Δ being taken from the experiments of M. Regnault.
>
> <i>a</i> = 340·89 mètres per second.
>
> <i>g</i> = 9<sup>m</sup>·80896.　<i>h</i> = 0<sup>m</sup>·76.　T = 15°·9 Centigrade.
>
> E = 0·003665; <i>m</i>/Δ = 10513.
>
> Consequently, for atmospheric air,
>
> γ = 1·401.

次の計算は、ポアソンが引いている大気中の音速の実験に基づき、E・<i>m</i>・Δ の値はルニョー氏の実験からとる。

<i>a</i> = 340·89 メートル毎秒。

<i>g</i> = 9<sup>m</sup>·80896。　<i>h</i> = 0<sup>m</sup>·76。　T = 摂氏 15°·9。

E = 0·003665；<i>m</i>/Δ = 10513。

したがって、大気については

γ = 1·401。

訳注：9<sup>m</sup>·80896 は 9.80896 メートル（毎秒毎秒）、0<sup>m</sup>·76 は 0.76 メートルの当時の書き方。

### ¶123　p.167

> The results of a reduction, according to correct data, of the experiments of Dulong upon the velocity of sound in atmospheric air, oxygen, and hydrogen, are as follows:—
>
> | | |
> |---|---|
> | Atmospheric air, . . . . . | γ = 1·410 |
> | Oxygen, . . . . . . . . . | 1·426 |
> | Hydrogen, . . . . . . . . | 1·426 |

デュロンの、大気・酸素・水素の中の音速の実験を、正しいデータで整約し直した結果は次のとおりである。

| | |
|---|---|
| 大気 | γ = 1·410 |
| 酸素 | 1·426 |
| 水素 | 1·426 |

訳注：誌面は表の罫も見出しも無い、点の導線の並びである。

### ¶124　p.168

> Thus it appears, that for the simple substances, oxygen and hydrogen, the ratio N is the same, while for atmospheric air it is somewhat smaller. [注1]

こうして、単体である酸素と水素では比 N は同じであり、大気ではいくらか小さいことがわかる。 [注1]

### ¶125　p.168

> (12.) The ordinary mode of expressing the specific heats of gases is to state their ratios to that of an *equal volume* of atmospheric air at the same pressure and temperature.

(12.) 気体の比熱をふつうに表す仕方は、同じ圧力と温度での、*同じ体積*の大気の比熱に対する比を述べることである。

### ¶126　p.168

> When κ/τ is a very small fraction, specific heats of *unity of volume* of a perfect gas are given by the equations
>
> <i>n</i> M K<sub>V</sub> = 1/(C N)
>
> <i>n</i> M K<sub>P</sub> = (1/C) (1/N + 1) . . . (24.)

κ/τ がごく小さい分数のとき、完全気体の*単位体積*の比熱は次の式で与えられる。

<i>n</i> M K<sub>V</sub> = 1/(C N)

<i>n</i> M K<sub>P</sub> = (1/C) (1/N + 1) . . . (24.)

### ¶127　p.168

> That is to say, the specific heat of unity of volume at constant volume is inversely proportional to the fraction by which the ratio of the two specific heats exceeds unity; a conclusion already deduced from experiment by Dulong.

すなわち、体積一定での単位体積の比熱は、二つの比熱の比が 1 を超える分の分数に反比例する。これは、デュロンがすでに実験から導いた結論である。

### ¶128　p.168

> The following is a comparison of the ratios of the apparent specific heats under constant pressure, of unity of volume of oxygen and hydrogen respectively, to that of atmospheric air, as deduced from Equation (24.), with those determined experimentally by De la Roche and Bérard.
>
> | Gas. | Ratio <i>n</i> M K<sub>P</sub> (Gas)/<i>n</i> M K<sub>P</sub> (Atmos. air) By Theory. | By Experiment. |
> |---|---|---|
> | Oxygen, . . . . | 0·973 | 0·9765 |
> | Hydrogen, . . . . | 0·973 | 0·9033 |
>
> This comparison exhibits a much more close agreement between theory and experiment than has been hitherto supposed to exist, the errors in the constants employed having had the effect of making the ratio 1 + N seem greater for atmospheric air than for oxygen and hydrogen, while in fact it is smaller.

次は、酸素と水素それぞれの単位体積の、圧力一定での見かけの比熱の、大気のそれに対する比を、式 (24.) から導いたものと、ド・ラ・ロシュとベラールが実験で決めたものとで比べたものである。

| 気体 | 比 <i>n</i> M K<sub>P</sub> (Gas)/<i>n</i> M K<sub>P</sub> (Atmos. air)　理論による | 実験による |
|---|---|---|
| 酸素 | 0·973 | 0·9765 |
| 水素 | 0·973 | 0·9033 |

この比較は、理論と実験とが、これまで考えられていたよりずっとよく合うことを示している。用いられた定数の誤りのせいで、比 1 + N は大気のほうが酸素や水素より大きく見えていたが、実際には小さいのである。

訳注：誌面の表は、「Ratio」と分数の見出しが「By Theory.」「By Experiment.」の二つの列の上にまたがる。Markdown の表では一つ目の数の列の見出しに入れた。分数の中の Gas・Atmos. air は式の一部として訳さずに残した（気体・大気）。

### ¶129　p.168–169

> To treat the other substances on which both M. Dulong and MM. De la [p.169] Roche and Bérard made experiments as perfect gases, would lead to sensible errors. I have, therefore, confined my calculations for the present to oxygen, hydrogen, and atmospheric air.

デュロン氏とド・ラ・[p.169] ロシュ、ベラール両氏が実験した他の物質を完全気体として扱うと、目に見える誤りを生むだろう。それゆえ私は、さしあたり計算を酸素・水素・大気に限った。

### ¶130　p.169

> (13.) The heat produced by compressing so much of a perfect gas as would occupy unity of volume under the pressure unity, at the temperature 0° centigrade, from its actual volume <i>n</i> M V<sub>1</sub> = τ/(P C) into a volume which is less in a given ratio <i>s</i> (when κ is neglected as compared with τ), is expressed by the following motion :—
>
> <i>n</i> M Q′ = − (1/C) ∫<sub>V<sub>1</sub></sub><sup><i>s</i> V<sub>1</sub></sup> <i>d</i> V . τ/V = − <i>n</i> M V<sub>1</sub> ∫<sub>1</sub><sup><i>s</i></sup> P <i>d s</i> (25.)
>
> being, in fact, equal to the mechanical power used in the compression. When the temperature is maintained constant, this becomes
>
> <i>n</i> M Q′<sub>(τ)</sub> = (τ/C) log<sub><i>e</i></sub> . 1/<i>s</i> (26.)
>
> which is obviously independent of the nature of the gas.

(13.) 圧力の単位のもと、摂氏 0° で体積の単位を占めるだけの量の完全気体を、今の体積 <i>n</i> M V<sub>1</sub> = τ/(P C) から、与えられた比 <i>s</i> だけ小さい体積へ圧縮するとき（κ を τ に比べて無視するとき）に生じる熱は、次の書き方で表される。

<i>n</i> M Q′ = − (1/C) ∫<sub>V<sub>1</sub></sub><sup><i>s</i> V<sub>1</sub></sup> <i>d</i> V . τ/V = − <i>n</i> M V<sub>1</sub> ∫<sub>1</sub><sup><i>s</i></sup> P <i>d s</i> (25.)

これは実のところ、圧縮に使われた力学的な動力に等しい。温度を一定に保つときには、これは次のようになる。

<i>n</i> M Q′<sub>(τ)</sub> = (τ/C) log<sub><i>e</i></sub> . 1/<i>s</i> (26.)

これは明らかに、気体の種類によらない。

訳注：誌面は "the following motion"。文脈からは "notation"（書き方）の誤植と見て、そのように訳した（推測）。

### ¶131　p.169

> Hence *equal volumes of all substances in the state of perfect gas, at the same pressure and at equal and constant temperatures, being compressed by the same amount, disengage equal quantities of heat;* a law already deduced from experiment by Dulong.

ゆえに、*完全気体の状態にあるあらゆる物質の等しい体積は、同じ圧力のもと、等しく一定の温度で、同じだけ圧縮されると、等しい量の熱を放つ*。これはデュロンがすでに実験から導いた法則である。

### ¶132　p.169

> (14.) The determination of the fraction N affords the means of calculating the mechanical or absolute value of specific heat, as defined by Equation 1, Section First. The data for atmospheric air being taken as follows :—
>
> N = 0·4, C = 274°·6 centigrade,
>
> 1/(<i>n</i> M) = height of an imaginary column of air of uniform density, at the temperature 0° cent., whose pressure by weight on a given base is equal to its pressure by elasticity, = 7990 mètres, = 26214 feet :—
>
> the real specific heat of atmospheric air, or the depth of fall equivalent to one centigrade degree of temperature in that gas, is found to be
>
> 𝔨 = 1/(C <i>n</i> M N) = 72·74 mètres = 238·66 feet (27.)

(14.) 分数 N が定まると、第一節の式 1 で定めた比熱の、力学的な値、すなわち絶対的な値を計算する手立てが得られる。大気について、データを次のようにとる。

N = 0·4, C = 274°·6 摂氏,

1/(<i>n</i> M) = 摂氏 0° で一様な密度をもつと考えた空気の柱の高さで、与えられた底面にかかるその重さによる圧力が、弾性による圧力に等しいもの = 7990 メートル = 26214 フィート

すると、大気の真の比熱、すなわちその気体で温度の摂氏 1 度に当たる落下の高さは、次のようになる。

𝔨 = 1/(C <i>n</i> M N) = 72·74 メートル = 238·66 フィート (27.)

訳注：誌面の 𝔨 は飾りのある字形の k（真の比熱の記号）。この訳では 𝔨 で写した。「落下の高さ」は、重さの単位の物体がその高さを落ちてする仕事で熱の量を表す、当時の言い方。

### ¶133　p.169–170

> The apparent specific heat of atmospheric air, under constant pressure, according to De la Roche and Bérard, is equal to that of liquid water at 0° centigrade × 0·2669. The ratio of its real specific heat to the apparent specific heat of water at 0° centigrade, is, therefore,
>
> ·2669 × 1·0/1.4 = ·1906,
>
> And, consequently, the mechanical value of the apparent specific heat of liquid water, at the temperature of melting ice, is [p.170]
>
> 𝔨 (at. air)/·1906 = 381·64 mètres = 1252 feet per centigrade degree,
> or 695·6 feet per degree of Fahrenheit's scale, (28.)

ド・ラ・ロシュとベラールによれば、圧力一定での大気の見かけの比熱は、摂氏 0° の液体の水の比熱 × 0·2669 に等しい。ゆえに、空気の真の比熱と、摂氏 0° の水の見かけの比熱との比は、

·2669 × 1·0/1.4 = ·1906,

となる。したがって、氷の融ける温度での液体の水の見かけの比熱の力学的な値は、[p.170]

𝔨 (at. air)/·1906 = 381·64 メートル = 摂氏 1 度あたり 1252 フィート,
または華氏の目盛りの 1 度あたり 695·6 フィート, (28.)

である。

訳注：誌面の分母 "1.4" は小数点が中黒でなく下の点。誌面のとおりに置いた。"at. air" は atmospheric air（大気）の略。

### ¶134　p.170

> This quantity we shall denote by K<sub>w</sub>. It is the mechanical equivalent of the ordinary *thermal unit*.

この量を K<sub>w</sub> で表す。これは、ふつうの*熱の単位*の力学的当量である。

### ¶135　p.170

> I have already pointed out (in Article 2. of the First Section) the causes which tend to make the apparent value of the mechanical equivalent of heat, in Mr Joule's experiments, greater than the true value. The differences between the result I have just stated, and those at which he has arrived, do not seem greater than those causes are capable of producing, when combined with the uncertainty of experiments, like those of Mr Joule, on extremely small variations of temperature.

ジュール氏の実験で、熱の力学的当量の見かけの値を真の値より大きくしがちな原因は、すでに（第一節の第 2 条で）指摘した。私がいま述べた結果と、彼が得た結果との違いは、それらの原因が、ジュール氏の実験のような、きわめて小さな温度の変化についての実験の不確かさと合わさって生みうる違いより、大きいとは見えない。

### ¶136　p.170

> (15.) Besides the conditions of constant volume and constant pressure, there is a third condition in which it is of importance to know the apparent specific heat of an elastic fluid, namely, the condition of vapour at saturation, or in contact with its liquid.

(15.) 体積が一定の条件と、圧力が一定の条件のほかに、弾性のある流体の見かけの比熱を知ることが大事な第三の条件がある。すなわち、飽和した蒸気の条件、言いかえれば、その液体と接している蒸気の条件である。

### ¶137　p.170

> The apparent specific heat of a vapour at saturation, is the quantity of heat which unity of weight of that vapour receives or gives out, while its temperature is increased by one degree, its volume being at the same time compressed so as to bring it to the maximum pressure corresponding to the increased temperature.

飽和した蒸気の見かけの比熱とは、その蒸気の重さの単位が、温度を 1 度上げられ、同時に体積を圧縮されて、上がった温度に応じる最大の圧力にされる間に、受け取る、または出す熱の量である。

### ¶138　p.170

> It has been usually taken for granted, that this quantity is the same with the variation for one degree of temperature, of what is called the *total heat* of evaporation. Such is, indeed, the case according to the theory of Carnôt; but I shall shew that, according to the mechanical theory of heat, these two quantities are not only distinct, but in general of contrary signs.

この量は、蒸発の*全熱*と呼ばれるものの、温度 1 度あたりの変化と同じだと、ふつうは当然のこととされてきた。カルノーの理論によれば、たしかにそうなる。しかし私は、熱の力学的な理論によれば、この二つの量は別のものであるだけでなく、一般には符号が逆であることを示す。

### ¶139　p.170

> I shall, for the present, consider such vapours only as may be treated in practice as perfect gases, so as to make the first of the Equations (20.) applicable.

ここではさしあたり、実際上完全気体として扱ってよく、式 (20.) の第一の式が当てはまる蒸気だけを考える。

### ¶140　p.170

> It has been shewn that the logarithm of the maximum elasticity of a vapour in contact with its liquid may be represented by the expression
>
> log P = <i>a</i> − β/τ − γ/τ<sup>2</sup>

液体と接している蒸気の最大の弾性の対数は、次の式で表せることが示されている。

log P = <i>a</i> − β/τ − γ/τ<sup>2</sup>

訳注：誌面の式の頭は斜体のラテン文字 a で、次の段の α と字形が違う。α の誤植と見た。「示されている」は、ランキンが別の論文で示した蒸気圧の式を指すと見られる（推測）。

### ¶141　p.170

> The coefficients α, β, γ, being those adapted for calculating the common logarithm of the pressure, I shall use the accented letters α′, β′, γ′, to denote those suited to calculate the hyperbolic logarithm, being equal respectively to the former coefficients × 2·3025851.

係数 α, β, γ は圧力の常用対数を計算するためのものなので、双曲線対数（自然対数）を計算するのに合うものを、印を付けた文字 α′, β′, γ′ で表す。これらはそれぞれ、前の係数 × 2·3025851 に等しい。

訳注：数の後ろに小さな印が見えるが、この頁に脚注は無く、汚れと見て起こさない。

### ¶142　p.170–171

> Then for vapour at saturation,
>
> <i>d</i> P/(P <i>d τ</i>) = β′/τ<sup>2</sup> + 2 γ′/τ<sup>3</sup> (29.)
>
> Making this substitution in the general Equation (21.), we find the following value for the apparent specific heat of perfectly gaseous vapour at saturation :— [p.171]
>
> K<sub>s</sub> = 𝔨 + P <i>d</i> V/<i>d τ</i> = 𝔨 (1 + N . (τ/V) (<i>d</i> V/<i>d τ</i>))
>
> = 𝔨 {1 + N (1 − (τ/P) (<i>d</i> P/<i>d τ</i>))}
>
> = (1/(C <i>n</i> M)) (1/N + 1 − β′/τ − 2 γ′/τ<sup>2</sup>) (30.)

すると、飽和した蒸気については、

<i>d</i> P/(P <i>d τ</i>) = β′/τ<sup>2</sup> + 2 γ′/τ<sup>3</sup> (29.)

となる。これを一般の式 (21.) に代入すると、完全に気体としてふるまう飽和した蒸気の見かけの比熱について、次の値が得られる。[p.171]

K<sub>s</sub> = 𝔨 + P <i>d</i> V/<i>d τ</i> = 𝔨 (1 + N . (τ/V) (<i>d</i> V/<i>d τ</i>))

= 𝔨 {1 + N (1 − (τ/P) (<i>d</i> P/<i>d τ</i>))}

= (1/(C <i>n</i> M)) (1/N + 1 − β′/τ − 2 γ′/τ<sup>2</sup>) (30.)

訳注：式 (30.) の三行は、誌面では一つの括弧でまとめて (30.) の番号が付く。

訳注：誌面は「the general Equation (21.)」。式 (21.) は K<sub>P</sub>/K<sub>V</sub> = 1 + N で、<i>d</i>P/(P<i>dτ</i>) を代入する所が無い。代入の先は、見かけの比熱の一般の式 (15.) と、完全気体の式 (17.) と見られ、番号の取り違えかもしれない（推測。誌面のまま訳した）。1881 年の論集の再録（p.260）も「the general equation (21,)」のままで、直されていない。

### ¶143　p.171

> (16.) For the vapours of which the properties are known, the negative terms of this expression exceed the positive at all ordinary temperatures, so that the kind of apparent specific heat now under consideration is a negative quantity :—that is to say, that if a given weight of vapour at saturation is increased in temperature, and at the same time maintained by compression at the maximum elasticity, the heat generated by the compression is greater than that which is required to produce the elevation of temperature, and a surplus of heat is given out; and on the other hand, if vapour at saturation is allowed to expand, and at the same time maintained at the temperature of saturation, the heat which disappears in producing the expansion is greater than that set free by the fall of temperature, and the deficiency of heat must be supplied from without, *otherwise a portion of the vapour will be liquefied, in order to supply the heat necessary for the expansion of the rest.*

(16.) 性質の知られている蒸気では、ふつうのどの温度でも、この式の負の項が正の項を上回る。したがって、いま考えている種類の見かけの比熱は負の量である。すなわち、ある重さの飽和した蒸気の温度を上げ、同時に圧縮によって最大の弾性に保つと、圧縮で生じる熱は、温度を上げるのに要る熱より大きく、余った熱が外へ出される。逆に、飽和した蒸気を膨張させ、同時に飽和の温度に保つと、膨張を生むのに消える熱は、温度が下がって放たれる熱より大きく、足りない熱を外から補わなければならない。*さもなければ、蒸気の一部が液化して、残りの膨張に要る熱を補うことになる。*

### ¶144　p.171

> This circumstance is obviously of great importance in meteorology, and in the theory of the steam-engine. There is as yet no experimental proof of it. It is true, that, in the working of non-condensing engines, it has been found that the steam which escapes is always at the temperature of saturation corresponding to its pressure, and carries along with it a portion of water in the liquid state; but it is impossible to distinguish between the water which has been liquefied by the expansion of the steam, and that which has been carried over mechanically from the boiler.

この事情は、気象学にとっても、蒸気機関の理論にとっても、明らかにたいへん大事である。これを実験で示したものは、まだ無い。たしかに、復水器を持たない機関の運転では、逃げ出る水蒸気がつねにその圧力に応じる飽和の温度にあり、液体の状態の水を一部いっしょに運び出すことが見いだされている。しかし、水蒸気の膨張によって液化した水と、ボイラーから機械的に運ばれてきた水とを見分けることはできない。

訳注：non-condensing engines は、復水器を持たず、使った水蒸気を大気へ出す機関を指す。

### ¶145　p.171

> The calculation of the proportion of vapour liquefied by a given expansion, requires the knowledge of the latent heat of evaporation, which forms the subject of the next section.

与えられた膨張によって液化する蒸気の割合を計算するには、蒸発の潜熱を知る必要がある。これが次の節の主題である。

### ¶146　p.171

> Section III.—Of the Latent and Total Heat of Evaporation, especially for Water.

第 III 節　蒸発の潜熱と全熱について、とくに水について

### ¶147　p.171

> (17.) The latent heat of evaporation of a given substance at a given temperature, is the amount of heat which disappears in transforming unity of weight of the substance from the liquid state, to that of vapour of the maximum density for the given temperature, being consumed in producing an increase of volume, and an unknown change of molecular arrangement.

(17.) ある物質の、ある温度での蒸発の潜熱とは、その物質の重さの単位を、液体の状態から、その温度での最大の密度の蒸気の状態へ変えるのに消える熱の量である。この熱は、体積の増加と、分子の配置の知られていない変化とを生むのに使われる。

### ¶148　p.171–172

> It is obvious, that if the vapour thus produced is reconverted into the liquid state *at the same temperature*, the heat given out during the liquefaction must be [p.172] equal to that consumed during the evaporation; for as the sum of the expansive and compressive powers, and of those dependent on molecular arrangement during the whole process, is equal to zero, so must the sum of the quantities of heat absorbed and evolved.

こうして生じた蒸気を*同じ温度で*液体の状態に戻すなら、液化の間に出される熱は、蒸発の間に使われた熱に [p.172] 等しくなければならないことは明らかである。なぜなら、過程の全体を通じて、膨張と圧縮の動力、および分子の配置にかかわる動力の和がゼロに等しいのだから、吸われた熱と出された熱の量の和もゼロでなければならないからである。

### ¶149　p.172

> The heat of liquefaction, at a given temperature, is therefore equal to that of evaporation, with the sign reversed.

ゆえに、ある温度での液化の熱は、蒸発の熱に等しく、符号が逆である。

### ¶150　p.172

> (18.) If to the latent heat of evaporation at a given temperature, is added the quantity of heat necessary to raise unity of weight of the liquid from a certain fixed temperature (usually that of melting ice) to the temperature at which the evaporation takes place, the result is called the total heat of evaporation from the fixed temperature chosen.

(18.) ある温度での蒸発の潜熱に、液体の重さの単位を、ある決まった温度（ふつうは氷の融ける温度）から蒸発の起きる温度まで上げるのに要る熱の量を足すと、その結果を、選んだ決まった温度から測った蒸発の全熱と呼ぶ。

### ¶151　p.172

> According to the theory of Carnôt, this quantity is called the constituent heat of vapour; and it is conceived, that if liquid at the temperature of melting ice be raised to any temperature and evaporated, and finally brought in the state of vapour to a certain given temperature, the whole heat expended will be equal to the constituent heat corresponding to that given temperature, and will be the same, whatsoever may have been the intermediate changes of volume, or the temperature of actual evaporation.

カルノーの理論では、この量を蒸気の構成熱と呼ぶ。そして、氷の融ける温度の液体を、どの温度まで上げて蒸発させ、最後に蒸気の状態である与えられた温度にしても、使った熱の全体は、その与えられた温度に応じる構成熱に等しく、途中の体積の変化や、実際に蒸発した温度がどうであっても同じだと考えられている。

### ¶152　p.172

> According to the mechanical theory of heat, on the other hand, the quantity of heat expended must vary with the intermediate circumstances; for otherwise no power could be gained by the alternate evaporation and liquefaction of a fluid at different temperatures.

これに対して、熱の力学的な理論によれば、使われる熱の量は途中の事情によって変わらなければならない。さもなければ、流体を異なる温度で蒸発と液化を交互にさせることで、動力を得ることはできないはずだからである。

### ¶153　p.172

> (19.) The law of the latent and total heat of evaporation is immediately deducible from the principle of the constancy of the total *vis viva* in the two forms of heat and expansive power, when the body has returned to its primitive density and temperature, as already laid down in Article 7.

(19.) 蒸発の潜熱と全熱の法則は、第 7 条ですでに述べた原理、すなわち、物体がもとの密度と温度に戻ったとき、熱と膨張の動力という二つの形の*活力*の総和が一定であるという原理から、ただちに導ける。

### ¶154　p.172

> That principle, when applied to evaporation and liquefaction, may be stated as follows :—

その原理を蒸発と液化に当てはめると、次のように述べられる。

### ¶155　p.172

> Let a portion of fluid in the liquid state be raised from a certain temperature to a higher temperature: let it be evaporated at the higher temperature: let the vapour then be allowed to expand, being maintained always at the temperature of saturation for its density, until it is restored to the original temperature, at which temperature let it be liquefied :—then *the excess of the heat absorbed by the fluid above the heat given out, will be equal to the expansive power generated.*

液体の状態にある流体の一部を、ある温度からより高い温度へ上げる。その高い温度で蒸発させる。次に、その蒸気を、つねにその密度に応じる飽和の温度に保ちながら、もとの温度に戻るまで膨張させる。その温度で液化させる。すると、*流体が吸った熱が出した熱を上回る分は、生じた膨張の動力に等しい。*

### ¶156　p.172

> To represent those operations algebraically,—let the lower absolute temperature be τ<sub>0</sub> :—the volume of unity of weight of liquid at that temperature, <i>v</i><sub>0</sub>, and that of vapour at saturation, V<sub>0</sub>: let the pressure of that vapour be P<sub>0</sub>: the latent heat of evaporation of unity of weight, L<sub>0</sub>; and let the corresponding quantities for the higher absolute temperature τ<sub>1</sub>, be <i>v</i><sub>1</sub>, V<sub>1</sub>, P<sub>1</sub>, L<sub>1</sub>. Let K<sub>L</sub> represent the mean apparent specific heat of the substance in the liquid form between the temperatures τ<sub>0</sub> and τ<sub>1</sub>. Then,—

これらの操作を代数で表すために、低いほうの絶対温度を τ<sub>0</sub> とする。その温度での液体の重さの単位の体積を <i>v</i><sub>0</sub>、飽和した蒸気の体積を V<sub>0</sub> とし、その蒸気の圧力を P<sub>0</sub>、重さの単位あたりの蒸発の潜熱を L<sub>0</sub> とする。高いほうの絶対温度 τ<sub>1</sub> について、それぞれに当たる量を <i>v</i><sub>1</sub>, V<sub>1</sub>, P<sub>1</sub>, L<sub>1</sub> とする。温度 τ<sub>0</sub> と τ<sub>1</sub> の間での、液体の形のその物質の見かけの比熱の平均を K<sub>L</sub> で表す。すると、

### ¶157　p.173

> *First,* Unity of weight of liquid being raised from the temperature τ<sub>0</sub> to the temperature τ<sub>1</sub>, absorbs the heat,
>
> K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>)
>
> and produces the expansive power,
>
> ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P

*第一に*、液体の重さの単位は、温度 τ<sub>0</sub> から温度 τ<sub>1</sub> へ上げられて、次の熱を吸い、

K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>)

次の膨張の動力を生む。

∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P

### ¶158　p.173

> *Secondly,* It is evaporated at the temperature τ<sub>1</sub>, absorbing the heat
>
> L<sub>1</sub>
>
> and producing the expansive power,
>
> P<sub>1</sub> (V<sub>1</sub> − <i>v</i><sub>1</sub>)

*第二に*、液体は温度 τ<sub>1</sub> で蒸発し、次の熱を吸い、

L<sub>1</sub>

次の膨張の動力を生む。

P<sub>1</sub> (V<sub>1</sub> − <i>v</i><sub>1</sub>)

### ¶159　p.173

> *Thirdly,* The vapour expands, at saturation, until it is restored to the original temperature τ. In this process it absorbs the heat,
>
> − ∫<sub>τ<sub>0</sub></sub><sup>τ<sub>1</sub></sup> <i>d τ</i> . K<sub>s</sub>
>
> and produces the expansive power,
>
> ∫<sub>V<sub>1</sub></sub><sup>V<sub>0</sub></sup> <i>d</i> V . P

*第三に*、蒸気は飽和したまま、もとの温度 τ に戻るまで膨張する。この過程で、蒸気は次の熱を吸い、

− ∫<sub>τ<sub>0</sub></sub><sup>τ<sub>1</sub></sup> <i>d τ</i> . K<sub>s</sub>

次の膨張の動力を生む。

∫<sub>V<sub>1</sub></sub><sup>V<sub>0</sub></sup> <i>d</i> V . P

訳注：誌面の "original temperature τ" は添字が無い。τ<sub>0</sub> の意と見た（誤植か）。

### ¶160　p.173

> *Fourthly,* It is liquefied at the original temperature, giving out the heat
>
> L<sub>0</sub>
>
> and consuming the compressive power,
>
> P<sub>0</sub> (V<sub>0</sub> − <i>v</i><sub>0</sub>).

*第四に*、蒸気はもとの温度で液化し、次の熱を出し、

L<sub>0</sub>

次の圧縮の動力を使う。

P<sub>0</sub> (V<sub>0</sub> − <i>v</i><sub>0</sub>).

### ¶161　p.173

> The equation between the heat which has disappeared, and the expansive power which has been produced, is as follows :—
>
> L<sub>1</sub> − L<sub>0</sub> + K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>) − ∫<sub>τ<sub>0</sub></sub><sup>τ<sub>1</sub></sup> <i>d τ</i> . K<sub>s</sub>
>
> = P<sub>1</sub> (V<sub>1</sub> − <i>v</i><sub>1</sub>) − P<sub>0</sub> (V<sub>0</sub> − <i>v</i><sub>0</sub>) + ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P + ∫<sub>V<sub>1</sub></sub><sup>V<sub>0</sub></sup> <i>d</i> V · P (31.)

消えた熱と、生じた膨張の動力との間の式は、次のとおりである。

L<sub>1</sub> − L<sub>0</sub> + K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>) − ∫<sub>τ<sub>0</sub></sub><sup>τ<sub>1</sub></sup> <i>d τ</i> . K<sub>s</sub>

= P<sub>1</sub> (V<sub>1</sub> − <i>v</i><sub>1</sub>) − P<sub>0</sub> (V<sub>0</sub> − <i>v</i><sub>0</sub>) + ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P + ∫<sub>V<sub>1</sub></sub><sup>V<sub>0</sub></sup> <i>d</i> V · P (31.)

### ¶162　p.173

> If the vapour be such that it can be regarded as a perfect gas without sensible error, the substitution of 𝔨 + P <i>d</i> V/<i>d τ</i> for K<sub>s</sub>, and of τ/(C <i>n</i> M) = 𝔨 N τ for P V, transforms the above to
>
> L<sub>1</sub> − L<sub>0</sub> + {K<sub>L</sub> − 𝔨 (1 + N)} (τ<sub>1</sub> − τ<sub>0</sub>)
>
> = − P<sub>1</sub> <i>v</i><sub>1</sub> + P<sub>0</sub> <i>v</i><sub>0</sub> + ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P = − ∫<sub>P<sub>0</sub></sub><sup>P<sub>1</sub></sup> <i>d</i> P . <i>v</i> (32.)

蒸気が、感じられるほどの誤りなしに完全気体と見なせるものなら、K<sub>s</sub> の代わりに 𝔨 + P <i>d</i> V/<i>d τ</i> を、P V の代わりに τ/(C <i>n</i> M) = 𝔨 N τ を入れると、上の式は次のように変わる。

L<sub>1</sub> − L<sub>0</sub> + {K<sub>L</sub> − 𝔨 (1 + N)} (τ<sub>1</sub> − τ<sub>0</sub>)

= − P<sub>1</sub> <i>v</i><sub>1</sub> + P<sub>0</sub> <i>v</i><sub>0</sub> + ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i><sub>1</sub></sup> <i>d v</i> . P = − ∫<sub>P<sub>0</sub></sub><sup>P<sub>1</sub></sup> <i>d</i> P . <i>v</i> (32.)

訳注：式 (32.) の二行目の頭の "=" は、誌面では字がつぶれている。"=" と読んだ。

### ¶163　p.173

> In almost all cases which occur in practice, <i>v</i> is so small as compared with V, that − ∫ <i>d</i> P . <i>v</i> may be considered as sensibly = 0; and therefore (sensibly)
>
> L<sub>1</sub> + K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>) = L<sub>0</sub> + 𝔨 (1 + N) (τ<sub>1</sub> − τ<sub>0</sub>) (33.)

実際に起きるほとんどすべての場合、<i>v</i> は V に比べてたいへん小さいので、− ∫ <i>d</i> P . <i>v</i> は実際上 = 0 と見なしてよい。したがって（実際上）

L<sub>1</sub> + K<sub>L</sub> (τ<sub>1</sub> − τ<sub>0</sub>) = L<sub>0</sub> + 𝔨 (1 + N) (τ<sub>1</sub> − τ<sub>0</sub>) (33.)

### ¶164　p.174

> Now this quantity, which I shall denote by H, is the total heat required to raise unity of weight of liquid from τ<sub>0</sub> to τ<sub>1</sub> of absolute temperature, and to evaporate it at the latter temperature. Therefore *the total heat of evaporation, where the vapour may be treated as a perfect gas, increases sensibly at an uniform rate with the temperature of evaporation; and the coefficient of its increase with temperature is equal to the apparent specific heat of the vapour at constant pressure,* 𝔨 (1 + N).

さて、この量を H で表すと、これは液体の重さの単位を、絶対温度 τ<sub>0</sub> から τ<sub>1</sub> まで上げ、後のほうの温度で蒸発させるのに要る全熱である。ゆえに、*蒸気を完全気体として扱ってよい場合、蒸発の全熱は、蒸発の温度とともに、感じられる範囲で一様な割合で増す。そして、温度に対するその増加の係数は、圧力一定での蒸気の見かけの比熱* 𝔨 (1 + N) *に等しい。*

訳注：誌面の τ<sub>0</sub> の添字はつぶれて 6 のように見える。0 と読んだ。

### ¶165　p.174

> (20.) There have never been any experiments from which the apparent specific heat of steam under constant pressure can be deduced in the manner in which that of permanent gases has been ascertained.

(20.) 永久気体の見かけの比熱を確かめたのと同じやり方で、圧力一定での水蒸気の見かけの比熱を導けるような実験は、これまで一つも無い。

訳注：permanent gases（永久気体）は、当時液化できないと考えられていた気体（酸素・水素・空気など）を指す。

### ¶166　p.174

> The experiments of M. Regnault, however, prove that the total heat of evaporation of water increases uniformly with the temperature from 0° to 200° centigrade, and thus far fully confirm the results of this theory.

しかしルニョー氏の実験は、水の蒸発の全熱が、摂氏 0° から 200° まで、温度とともに一様に増すことを示しており、その範囲でこの理論の結果を十分に確かめている。

### ¶167　p.174

> The coefficient of increase is equal to
>
> K<sub>w</sub> × 0·305
>
> Its mechanical value is consequently
>
> 116·4 metres = 382 feet per centigrade degree, or
> 212 feet per degree of Fahrenheit. (34.)

増加の係数は

K<sub>w</sub> × 0·305

に等しい。したがって、その力学的な値は

116·4 メートル = 摂氏 1 度あたり 382 フィート、または
華氏 1 度あたり 212 フィート (34.)

である。

訳注：この頁では "metres" と、アクセントの無い綴りで刷られている（他の頁は "mètres"）。誌面のとおりに置いた。式 (34.) は、誌面では「K<sub>w</sub> × 0·305」から二つの値の行までをまとめて括弧で括り、番号を付ける。

### ¶168　p.174

> Although the principle of the conservation of *vis viva* has thus enabled us to ascertain the *law of increase* of the total heat of evaporation, it does not enable us to calculate *à priori* the constant L<sub>0</sub> of the formula, being the latent heat of evaporation at the fixed temperature from which the total heat is measured; for the changes of molecular arrangement which constitute evaporation are unknown.

*活力*の保存の原理によって、こうして蒸発の全熱の*増加の法則*を確かめることはできたが、この原理では、式の定数 L<sub>0</sub>、すなわち全熱を測りはじめる決まった温度での蒸発の潜熱を、*先験的に*計算することはできない。蒸発をなす分子の配置の変化が知られていないからである。

### ¶169　p.174

> When the fixed temperature is that of melting ice, M. Regnault's experiments give 606·5 centigrade degrees, applied to liquid water as the value of this constant; so that
>
> H = K<sub>w</sub> (606°·5 + ·305 T°) For the centigrade scale,
>
> H = K<sub>w</sub> (1091°·7 + ·305 (T° − 32°)) For Fahrenheit's scale. (35.)
>
> is the complete expression for the heat required to raise unity of weight of water from the temperature of melting ice to T° above the ordinary zero, and to evaporate it at the latter temperature. This formula has been given by M. Regnault as merely empirical; but we have seen that it closely represents the physical law, when quantities depending on the expansion of water are neglected.

決まった温度を氷の融ける温度とすると、ルニョー氏の実験は、この定数の値として、液体の水に当てて摂氏 606·5 度を与える。したがって、

H = K<sub>w</sub> (606°·5 + ·305 T°) 摂氏の目盛りについて,

H = K<sub>w</sub> (1091°·7 + ·305 (T° − 32°)) 華氏の目盛りについて. (35.)

が、水の重さの単位を、氷の融ける温度から、ふつうの零度の上 T° まで上げ、その温度で蒸発させるのに要る熱を、完全に表す式である。ルニョー氏はこの式を単に経験式として与えた。しかし私たちが見たとおり、水の膨張にかかわる量を無視すれば、この式は物理の法則をよく表している。

訳注：「摂氏 606·5 度」は、液体の水の温度をそれだけ上げる熱の量、という意味（熱の量を水の温度の度で測る当時の言い方）。

### ¶170　p.174

> It must be remarked, that the unit of heat in M. Regnault's tables is not precisely the specific heat of water at 0° centigrade, but its mean specific heat between the initial and final temperatures of the water in the calorimeter. The utmost error, however, which can arise from this circumstance, is less than 1/1200 of the total heat of evaporation, so that it may safely be neglected.

注意しておかなければならないのは、ルニョー氏の表の熱の単位は、正確には摂氏 0° の水の比熱ではなく、熱量計の中の水の初めの温度と終わりの温度の間での、水の平均の比熱だということである。しかし、この事情から生じうる誤差は最大でも蒸発の全熱の 1/1200 より小さいので、無視してさしつかえない。

### ¶171　p.175

> The coefficient ·305 K<sub>w</sub> = 382 feet per centigrade degree is the apparent specific heat of steam at constant pressure; that is to say, for steam,—
>
> 𝔨 + 1/(C <i>n</i> M) = 382 feet per centigrade degree,
>
> but 1/(C <i>n</i> M) = 153 feet.
>
> Therefore the real specific heat of steam is
>
> 𝔨 = 1/(C <i>n</i> M N) = 229 feet per centigrade degree,
>
> = 127·4 feet per deg. of Fahrenheit,
>
> = K<sub>w</sub> × ·183
>
> and N = 153/229 = 2/3. (36.)

係数 ·305 K<sub>w</sub> = 摂氏 1 度あたり 382 フィートは、圧力一定での水蒸気の見かけの比熱である。すなわち、水蒸気について、

𝔨 + 1/(C <i>n</i> M) = 摂氏 1 度あたり 382 フィート,

ところが 1/(C <i>n</i> M) = 153 フィート.

ゆえに、水蒸気の真の比熱は

𝔨 = 1/(C <i>n</i> M N) = 摂氏 1 度あたり 229 フィート,

= 華氏 1 度あたり 127·4 フィート,

= K<sub>w</sub> × ·183

であり、N = 153/229 = 2/3. (36.)

訳注：式 (36.) は、誌面では「𝔨 + …」から「N = …」までの行をまとめて括弧で括り、番号を付ける。

### ¶172　p.175

> The quantity − ∫<sub>P<sub>0</sub></sub><sup>P<sub>1</sub></sup> <i>d</i> P . <i>v</i> has been neglected, as already explained, in these calculations, on account of its smallness. When τ<sub>0</sub> = C, or the fixed point is 0° centigrade, this integral is nearly equal to
>
> − <i>v</i> P<sub>1</sub> = − (<i>v</i>/V<sub>1</sub>) . τ<sub>1</sub>/(C <i>n</i> M) = − 𝔨 N . (<i>v</i>/V<sub>1</sub>) τ<sub>1</sub> (37.)
>
> which, for steam, is equal to
>
> − K<sub>w</sub> × ·122 (<i>v</i>/V<sub>1</sub>) τ<sub>1</sub>.

量 − ∫<sub>P<sub>0</sub></sub><sup>P<sub>1</sub></sup> <i>d</i> P . <i>v</i> は、すでに説明したとおり、小さいので、これらの計算では無視してきた。τ<sub>0</sub> = C のとき、すなわち決まった点が摂氏 0° のとき、この積分はほぼ次に等しい。

− <i>v</i> P<sub>1</sub> = − (<i>v</i>/V<sub>1</sub>) . τ<sub>1</sub>/(C <i>n</i> M) = − 𝔨 N . (<i>v</i>/V<sub>1</sub>) τ<sub>1</sub> (37.)

これは、水蒸気については、次に等しい。

− K<sub>w</sub> × ·122 (<i>v</i>/V<sub>1</sub>) τ<sub>1</sub>.

### ¶173　p.175

> For a pressure of eight atmospheres,
>
> <i>v</i>/V<sub>1</sub> = 1/252 nearly, τ<sub>1</sub> = 445°·5 (T = 170°·9 cent.)
>
> consequently, − <i>v</i> P<sub>1</sub> = − K<sub>w</sub> × 0°·22 cent.
>
> a quantity much less than the limit of errors of observation in experiments on latent heat.

8 気圧の圧力では、

<i>v</i>/V<sub>1</sub> = ほぼ 1/252, τ<sub>1</sub> = 445°·5 (T = 摂氏 170°·9)

したがって、− <i>v</i> P<sub>1</sub> = − K<sub>w</sub> × 摂氏 0°·22

これは、潜熱の実験での観測の誤差の限界よりずっと小さい量である。

### ¶174　p.175

> This shews that in practice we are justified in overlooking the influence of the volume of the liquid water on the heat of evaporation.

このことから、実際上、液体の水の体積が蒸発の熱に及ぼす影響を見過ごしてよいことがわかる。

### ¶175　p.175

> Section IV.—Of the Mechanical Action of Steam, treated as a Perfect Gas, and the Power of the Steam-Engine.

第 IV 節　完全気体として扱った水蒸気の力学的作用と、蒸気機関の動力について

### ¶176　p.175

> (21.) In the present limited state of our experimental knowledge of the density of steam at pressures differing much from that of the atmosphere, it is desirable to ascertain whether any material error is likely to arise from treating it as a perfect gas. For this purpose the ratio of the volume of steam at 100° centigrade, under the pressure of one atmosphere, to that of the water which produces it at 4°·1 centigrade, as calculated theoretically on the supposition of steam being a perfect gas, is to be compared with the actual ratio.

(21.) 大気圧と大きく違う圧力での水蒸気の密度について、実験による知識は今のところ限られている。この状態では、水蒸気を完全気体として扱うことで、大きな誤りが生じそうかどうかを確かめておくのが望ましい。そのために、1 気圧のもとで摂氏 100° の水蒸気の体積と、それを生む摂氏 4°·1 の水の体積との比を、水蒸気が完全気体であるという仮定のもとで理論的に計算し、実際の比と比べる。

### ¶177　p.176

> The weight of one volume of water at 4°·1 centigrade being taken as unity, that of half a volume of oxygen at 0° centigrade, under the pressure of one atmosphere, according to the experiments of M. Regnault, is 0·000714900
>
> That of one volume of hydrogen, . . . . . 0·000089578
>
> The sum being . . . . . . . 0·000804478

摂氏 4°·1 の水の 1 体積の重さを 1 とすると、摂氏 0 度・1 気圧のもとでの酸素の半体積の重さは、ルニョー氏の実験によれば 0·000714900 である。

水素の 1 体積の重さは . . . . . 0·000089578

その和は . . . . . . . 0·000804478

訳注：「酸素の半体積と水素の 1 体積」は、水蒸気 1 体積をつくる量として並べたものと読める（推測）。

### ¶178　p.176

> The reciprocal of this sum being multiplied by 374·6/274·6 = 1·364166 the ratio of dilatation of a perfect gas from 0° to 100° centigrade) the result gives, for the volume of steam of saturation at 100° centigrade as compared with that of water at
>
> 4·°1 . . . . . . 1695·72
>
> And for its density, . . . 0·00058972

この和の逆数に 374·6/274·6 = 1·364166（完全気体が摂氏 0 度から 100 度までの膨張の比）を掛けると、摂氏 100 度の飽和した水蒸気の体積は、4°·1 の水の体積と比べて

. . . . . . 1695·72

となる。またその密度は . . . 0·00058972 となる。

訳注：誌面には閉じ括弧「)」だけがあり、開き括弧が無い。組みの落ちと見た。また表の頭の「4·°1」は、誌面で度の印と小数点の順が入れ替わっている。誤植と見た（本文の他の所は 4°·1）。

### ¶179　p.176

> The agreement of those results with the known volume and density of steam is sufficiently close to shew, that at pressures less than one atmosphere, it may be regarded as a gas sensibly perfect; from which it may be concluded, that in the absence of more precise data, the errors arising from treating it as a perfect gas at such higher pressures as occur in practice, will not be of much importance.

これらの結果は、知られている水蒸気の体積・密度と十分によく合う。そのことから、1 気圧より低い圧力では、水蒸気はほぼ完全な気体とみなしてよいことがわかる。ここから、より精しいデータが無いうちは、実際に出てくるもっと高い圧力で水蒸気を完全気体として扱っても、それで生じる誤りはさほど大きくないと結論してよい。

### ¶180　p.176

> Representing, then, by <i>v</i> the volume of unity of weight of water at 4°·1 centigrade, that of unity of weight of steam at any pressure and temperature will be given by the formula
>
> V=(1696 <i>v</i> ϖ)/(τ) · τ/P . . . (38.)
>
> ϖ representing the number of units of weight per unit of area in the pressure of one atmosphere, and (τ) the absolute temperature at which the pressure of saturation is one atmosphere; being for the centigrade scale 374°·6, and for Fahrenheit's scale 674°·28.

そこで、摂氏 4°·1 の水の重さの単位の体積を <i>v</i> で表すと、任意の圧力と温度での水蒸気の重さの単位の体積は、次の式で与えられる。

V=(1696 <i>v</i> ϖ)/(τ) · τ/P . . . (38.)

ϖ は 1 気圧の圧力を、単位面積あたりの重さの単位の数で表したもの、(τ) は飽和の圧力が 1 気圧になる絶対温度である。(τ) は摂氏の目盛りで 374°·6、華氏の目盛りで 674°·28 である。

訳注：(τ) の丸括弧は誌面そのもの（1 気圧での飽和の温度を表す記法）で、分母を包む括弧ではない。

### ¶181　p.176

> The mechanical action of unity of weight of steam at the temperature τ and pressure P, during its entrance into a cylinder, before it is permitted to expand, is represented by the product of its pressure and volume, or by
>
> P V=(1696 <i>v</i> ϖ)/(τ) · τ . . . (39.)

温度 τ・圧力 P の水蒸気の重さの単位が、シリンダーに入る間、膨張を許される前にする力学的作用は、その圧力と体積の積で表される。すなわち

P V=(1696 <i>v</i> ϖ)/(τ) · τ . . . (39.)

### ¶182　p.176–177

> The coefficient (1696 <i>v</i> ϖ)/(τ) represents a certain depth of fall per degree of absolute temperature, and is the same with the coefficient 1/(C <i>n</i> M) already referred to. By taking the following values of the factors:—
>
> <i>v</i>=0·016 cubic foot per pound avoirdupois,
>
> ϖ=2117 pounds avoirdupois per square foot,
>
> we find this coefficient to be
>
> 153·35 feet=46·74 mètres per centigrade degree,
>
> 85·19 feet per degree of Fahrenheit; . . (40.)
>
> [p.177] this determination may be considered correct to about 1/1200 part. When French measures are used in the calculation, the following is the result:—
>
> <i>v</i>=1 cubic centimètre per gramme,
>
> ϖ=1033·3 grammes per square centimètre,
>
> 1/(C <i>n</i> M)= 46·78 mètres per centigrade degree,
>
> =153·48 feet ··· ··· ···
>
> or 85·27 feet per degree of Fahrenheit. . . . (41.)

係数 (1696 <i>v</i> ϖ)/(τ) は、絶対温度の 1 度あたりの、ある落下の高さを表し、先に触れた係数 1/(C <i>n</i> M) と同じものである。因子に次の値をとる。

<i>v</i>=常衡ポンドあたり 0·016 立方フィート

ϖ=平方フィートあたり 2117 常衡ポンド

すると、この係数は次のとおりになる。

摂氏の 1 度あたり 153·35 フィート=46·74 メートル

華氏の 1 度あたり 85·19 フィート . . (40.)

[p.177] この値は、約 1/1200 の精度で正しいとみてよい。フランスの単位で計算すると、結果は次のとおりである。

<i>v</i>=グラムあたり 1 立方センチメートル

ϖ=平方センチメートルあたり 1033·3 グラム

1/(C <i>n</i> M)= 摂氏の 1 度あたり 46·78 メートル

=153·48 フィート（同上）

すなわち華氏の 1 度あたり 85·27 フィート . . . (41.)

訳注：(40.) と (41.) は、誌面では右の波括弧で数行をまとめ、式の番号を一つ付けている。「=153·48 feet」の行の「··· ··· ···」は「per centigrade degree」をくり返す同上の印と読んだ。

### ¶183　p.177

> The difference, which is of no practical importance in calculating the power of the steam-engine, arises in the estimation of the density of liquid water.

この差は、蒸気機関の動力を計算するうえでは実際上の重みが無く、液体の水の密度の見積もり方から生じる。

### ¶184　p.177

> (22.) Unit of weight of steam at saturation, of the elasticity P<sub>1</sub> and volume V<sub>1</sub> corresponding to the absolute temperature τ<sub>1</sub>, being cut off from external sources of heat, it is now to be investigated what amount of power it will produce in expanding to a lower pressure P<sub>2</sub> and temperature τ<sub>2</sub>.

(22.) 絶対温度 τ<sub>1</sub> に当たる弾性 P<sub>1</sub>・体積 V<sub>1</sub> の、飽和した水蒸気の重さの単位を、外の熱源から断つ。これが、より低い圧力 P<sub>2</sub>・温度 τ<sub>2</sub> まで膨張するとき、どれだけの動力を生むかを、これから調べる。

訳注：ここの「弾性」は圧力のこと。

### ¶185　p.177

> It has already been shewn, at the end of the second section, that if vapour at saturation is allowed to expand, it requires a supply of heat from without to maintain it at the temperature of saturation, otherwise a portion of it must be liquefied to supply the heat required to expand the rest. Hence, when unity of weight of steam at saturation, at the pressure P<sub>1</sub> and volume V<sub>1</sub>, expands to a lower pressure P, being cut off from external sources of heat, it will not occupy the entire volume V corresponding to that pressure, according to Equation (38.), but a less volume
>
> S=<i>m</i> V,
>
> where <i>m</i> represents the weight of water remaining in the gaseous state, the portion 1−<i>m</i> having been liquefied during the expansion of the remainder. The expansive action of the steam will therefore be represented by
>
> ∫<sub>V<sub>1</sub></sub><sup>S<sub>2</sub></sup> <i>d</i> S · P . . . (42.)

第二節の終わりで既に示したとおり、飽和した蒸気を膨張させると、飽和の温度に保つには外から熱を補わなければならない。さもなければ、残りを膨張させるのに要る熱をまかなうため、その一部が液化しなければならない。したがって、圧力 P<sub>1</sub>・体積 V<sub>1</sub> の飽和した水蒸気の重さの単位が、外の熱源から断たれたまま、より低い圧力 P まで膨張するとき、それは式 (38.) によってその圧力に当たる体積 V をまるごと占めはせず、より小さい体積

S=<i>m</i> V

を占める。ここで <i>m</i> は気体の状態のまま残る水の重さで、残りの 1−<i>m</i> は、ほかの部分が膨張する間に液化している。したがって、水蒸気の膨張の作用は次で表される。

∫<sub>V<sub>1</sub></sub><sup>S<sub>2</sub></sup> <i>d</i> S · P . . . (42.)

### ¶186　p.177

> The law of variation of the fraction <i>m</i> flows from the following considerations:—

割合 <i>m</i> の変わり方の法則は、次の考察から出てくる。

### ¶187　p.177–178

> Let δ<i>m</i> represent the indefinitely small variation of <i>m</i> corresponding to the indefinitely small change of temperature δτ; L, the latent heat of evaporation of unity of weight; K<sub>s</sub>, as in Equation (30.), the specific heat of vapour at saturation, which is a negative coefficient varying with the temperature; then we must have
>
> −L δ<i>m</i>=<i>m</i> K<sub>s</sub> δτ, or δ<i>m</i>/<i>m</i>=−K<sub>s</sub>/L δτ,
>
> in order that the heat produced by the liquefaction of δ<i>m</i> may be equal to the heat required to expand <i>m</i>. Hence making, according to Equation (30.)—
>
> K<sub>s</sub> δτ=𝔨 (δτ+N τ/V δV)
>
> [p.178] and
>
> δτ=−τ/V δV 1/(β′/τ+2γ′/τ<sup>2</sup>−1)
>
> we obtain
>
> δ<i>m</i>/<i>m</i>=−𝔨 τ/L (N−1/(β′/τ+2γ′/τ<sup>2</sup>−1)) δV/V . . . (43.)
>
> and denoting the coefficient of δV/V by −ν,
>
> (<i>d</i> log <i>m</i>)/(<i>d</i> log V)=−ν ; (<i>d</i> log S)/(<i>d</i> log V)=1−ν
>
> and because (<i>d</i> log V)/(<i>d</i> log P)=−1+1/(β′/τ+2γ′/τ<sup>2</sup>)
>
> (<i>d</i> log <i>m</i>)/(<i>d</i> log P)=+ν (1−1/(β′/τ+2γ′/τ<sup>2</sup>))
>
> (<i>d</i> log S)/(<i>d</i> log P)=−(1−ν) (1−1/(β′/τ+2γ′/τ<sup>2</sup>))=−σ . . . (44.)

温度の限りなく小さい変化 δτ に当たる <i>m</i> の限りなく小さい変化を δ<i>m</i>、重さの単位の蒸発の潜熱を L、式 (30.) と同じく、飽和した蒸気の比熱を K<sub>s</sub> とする。K<sub>s</sub> は温度とともに変わる負の係数である。すると、δ<i>m</i> の液化で生じる熱が <i>m</i> を膨張させるのに要る熱と等しくなるためには、

−L δ<i>m</i>=<i>m</i> K<sub>s</sub> δτ、すなわち δ<i>m</i>/<i>m</i>=−K<sub>s</sub>/L δτ

でなければならない。そこで、式 (30.) にしたがって

K<sub>s</sub> δτ=𝔨 (δτ+N τ/V δV)

[p.178] とし、また

δτ=−τ/V δV 1/(β′/τ+2γ′/τ<sup>2</sup>−1)

とすると、次が得られる。

δ<i>m</i>/<i>m</i>=−𝔨 τ/L (N−1/(β′/τ+2γ′/τ<sup>2</sup>−1)) δV/V . . . (43.)

δV/V の係数を −ν で表すと、

(<i>d</i> log <i>m</i>)/(<i>d</i> log V)=−ν ; (<i>d</i> log S)/(<i>d</i> log V)=1−ν

であり、また (<i>d</i> log V)/(<i>d</i> log P)=−1+1/(β′/τ+2γ′/τ<sup>2</sup>) であるから、

(<i>d</i> log <i>m</i>)/(<i>d</i> log P)=+ν (1−1/(β′/τ+2γ′/τ<sup>2</sup>))

(<i>d</i> log S)/(<i>d</i> log P)=−(1−ν) (1−1/(β′/τ+2γ′/τ<sup>2</sup>))=−σ . . . (44.)

訳注：𝔨 は誌面の黒体文字の k で、この論文の真の比熱の記号。(44.) は、誌面では右の縦線で四行をまとめ、式の番号を一つ付けている。

### ¶188　p.178

> As the mean temperature of the liquid thus produced more or less exceeds that of the remaining vapour, a small fraction of it will be reconverted into vapour, if the expansion is carried on slowly enough; but its amount is so small, that to take it into account would needlessly complicate the calculation, without making it to any material extent more accurate.

こうして生じた液体の平均の温度は、残る蒸気の温度をいくらか上回るので、膨張が十分にゆっくり進めば、その液体のわずかな部分はふたたび蒸気に戻る。しかしその量はごく小さく、それを勘定に入れると、計算を目立って正確にすることなく、いたずらに込み入らせるだけである。

### ¶189　p.178

> (23.) The extreme complexity of the exponent σ, considered as a function of the pressure P, would render a general formula for the expansive action ∫P <i>d</i> S very cumbrous in its application. For practical purposes, it is sufficient to consider the exponent σ as constant during the expansion which takes place in any given engine, assigning it an average value suitable to the part of the scale of pressures in which the expansion takes place. For engines in which the steam is introduced at pressures not exceeding four atmospheres, I conceive that it will be sufficiently accurate to make
>
> σ=6/7;
>
> while for engines in which the initial pressure lies between four and eight atmospheres, the suitable value is
>
> σ=5/6.

(23.) 指数 σ を圧力 P の関数とみると、ひどく込み入っている。そのため、膨張の作用 ∫P <i>d</i> S の一般の式は、使うのにとても煩わしくなる。実用のためには、ある機関の中で起こる膨張の間、指数 σ を一定とみなし、膨張が起こる圧力の目盛りの範囲に合った平均の値を与えれば足りる。水蒸気が 4 気圧を超えない圧力で入る機関では、

σ=6/7

とすれば十分に正確であろうと私は考える。初めの圧力が 4 気圧と 8 気圧の間にある機関では、合う値は

σ=5/6

である。

### ¶190　p.178

> The utmost error which can arise from using these exponents is about 1/100 of the whole power of the engine, and that only in extreme cases.

これらの指数を使うことで生じうる誤りは、最も大きくても機関の全動力の約 1/100 であり、それも極端な場合に限られる。

### ¶191　p.178–179

> Making, therefore,
>
> P=P<sub>1</sub> (S/V<sub>1</sub>)<sup>−1/σ</sup>
>
> [p.179] we obtain for the value of the expansive action of unity of weight of steam,
>
> ∫<sub>V<sub>1</sub></sub><sup>S<sub>2</sub></sup> <i>d</i> S · P=P<sub>1</sub> V<sub>1</sub> σ/(1−σ) (1−(S<sub>2</sub>/V<sub>1</sub>)<sup>1−1/σ</sup>)
>
> =P<sub>1</sub> V<sub>1</sub> σ/(1−σ) (1−<i>s</i><sup>1−1/σ</sup>) . . . (45.)
>
> <i>s</i> being used to denote S<sub>2</sub>/V<sub>1</sub>, or the ratio of the volumes occupied by steam at the end and at the beginning of the expansion respectively.

そこで

P=P<sub>1</sub> (S/V<sub>1</sub>)<sup>−1/σ</sup>

と置くと、[p.179] 水蒸気の重さの単位の膨張の作用の値として、次が得られる。

∫<sub>V<sub>1</sub></sub><sup>S<sub>2</sub></sup> <i>d</i> S · P=P<sub>1</sub> V<sub>1</sub> σ/(1−σ) (1−(S<sub>2</sub>/V<sub>1</sub>)<sup>1−1/σ</sup>)

=P<sub>1</sub> V<sub>1</sub> σ/(1−σ) (1−<i>s</i><sup>1−1/σ</sup>) . . . (45.)

ここで <i>s</i> は S<sub>2</sub>/V<sub>1</sub>、すなわち膨張の終わりと初めに水蒸気が占める体積の比を表す。

訳注：(45.) は、誌面では右の縦線で二行をまとめ、式の番号を一つ付けている。

### ¶192　p.179

> A table to facilitate the computation is given in the Appendix.

計算を楽にする表を付録に載せる。

### ¶193　p.179

> The gross mechanical action of unity of weight of steam on one side of the piston is found by adding to the above quantity the action of the steam before it begins to expand, or P<sub>1</sub> V<sub>1</sub>, and is therefore
>
> P<sub>1</sub> V<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>) . . . (46.)

ピストンの片側での、水蒸気の重さの単位の力学的作用の総量は、上の量に、膨張を始める前の水蒸気の作用 P<sub>1</sub> V<sub>1</sub> を足せば得られる。したがって

P<sub>1</sub> V<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>) . . . (46.)

である。

### ¶194　p.179

> The values of the coefficients and exponent being
>
> | For initial pressures between | 1/(1−σ) | σ/(1−σ) | 1−1/σ |
> |---|---|---|---|
> | 1 and 4 atmospheres, . . . . . | 7 | 6 | −1/6 |
> | 4 and 8 atmospheres, . . . . . | 6 | 5 | −1/5 |

係数と指数の値は次のとおりである。

| 初めの圧力の範囲 | 1/(1−σ) | σ/(1−σ) | 1−1/σ |
|---|---|---|---|
| 1 気圧と 4 気圧の間 | 7 | 6 | −1/6 |
| 4 気圧と 8 気圧の間 | 6 | 5 | −1/5 |

訳注：誌面では「For initial pressures between」は表の上の行にあり、その下の二行に掛かる。表の見出しの列にまとめて起こした。

### ¶195　p.179

> (24.) The following deductions have to be made from the gross action, in order to obtain the action effective in overcoming resistance.

(24.) 抵抗に打ち勝つのに実際に効く作用を得るには、作用の総量から次のものを差し引かなければならない。

### ¶196　p.179

> *First,* For loss of power owing to a portion of the steam being employed in filling steam-passages, and the space called the *clearance* of the cylinder at one end. Let the bulk of steam so employed be the fraction <i>c</i> S<sub>2</sub> of the space filled by steam at the end of the expansion; then the loss of power from this cause is
>
> P<sub>1</sub> <i>c</i> S<sub>2</sub>=<i>c s</i> P<sub>1</sub> V<sub>1</sub>.

*第一に*、水蒸気の一部が、蒸気の通り道と、シリンダーの一方の端の*すき間*（クリアランス）と呼ばれる空間を満たすのに使われることによる、動力の損失。こうして使われる水蒸気のかさを、膨張の終わりに水蒸気が満たす空間の割合 <i>c</i> S<sub>2</sub> とする。するとこれによる動力の損失は

P<sub>1</sub> <i>c</i> S<sub>2</sub>=<i>c s</i> P<sub>1</sub> V<sub>1</sub>

である。

### ¶197　p.179

> *Secondly,* For the pressure on the opposite side of the piston, of the steam which escapes into the condenser, or into the atmosphere, as the case may be. Let P<sub>3</sub> be the pressure of this steam; the deduction to be made for its action is
>
> P<sub>3</sub> S<sub>2</sub> (1−<i>c</i>)=P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i>.

*第二に*、場合に応じて復水器へ、あるいは大気へ抜けていく水蒸気が、ピストンの反対側にかける圧力。この水蒸気の圧力を P<sub>3</sub> とする。その作用について差し引くものは

P<sub>3</sub> S<sub>2</sub> (1−<i>c</i>)=P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i>

である。

### ¶198　p.179

> These deductions having been made, there is obtained for the effect of unity of weight of water evaporated,
>
> V<sub>1</sub> {P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)−P<sub>3</sub> (1−<i>c</i>) <i>s</i>} . . . (47.)

これらを差し引くと、蒸発した水の重さの単位の効果として、次が得られる。

V<sub>1</sub> {P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)−P<sub>3</sub> (1−<i>c</i>) <i>s</i>} . . . (47.)

### ¶199　p.179–180

> (25.) The effect of the engine in unity of time is found by multiplying the [p.180] above quantity by the number of units of weight of water evaporated in unity of time.

(25.) 単位時間あたりの機関の効果は、上の量に、単位時間に蒸発する水の重さの単位の数を掛ければ得られる。[p.180]

### ¶200　p.180

> If this number be denoted by W,
>
> W S<sub>2</sub> (1−<i>c</i>)=W V<sub>1</sub> (1−<i>c</i>) <i>s</i>=A <i>u</i> . . . (48.)
>
> will represent the cubical space traversed by the piston in unity of time, A denoting the area of the piston, and <i>u</i> its mean velocity.

この数を W で表すと、

W S<sub>2</sub> (1−<i>c</i>)=W V<sub>1</sub> (1−<i>c</i>) <i>s</i>=A <i>u</i> . . . (48.)

は、ピストンが単位時間に通る空間の体積を表す。A はピストンの面積、<i>u</i> はその平均の速さである。

### ¶201　p.180

> Now let the whole resistance to be overcome by the engine be reduced by the principles of statics to a certain equivalent pressure per unit of area of piston, and let this pressure be denoted by R. Then,
>
> R A <i>u</i>=R W V<sub>1</sub> (1−<i>c</i>) <i>s</i> . . . (49.)
>
> expresses the effect of the engine in terms of the gross resistance.

さて、機関が打ち勝つべき抵抗の全体を、静力学の原理によって、ピストンの単位面積あたりの、ある等価な圧力に直し、この圧力を R で表す。すると

R A <i>u</i>=R W V<sub>1</sub> (1−<i>c</i>) <i>s</i> . . . (49.)

は、機関の効果を抵抗の総量で言い表したものである。

### ¶202　p.180

> We have now the means of calculating the circumstances attending the working of a steam-engine according to the principle of the conservation of *vis viva*, or, in other words, of the equality of power and effect, which regulates the action of all machines that move with an uniform or periodical velocity.

これで、蒸気機関のはたらきに伴う事情を、*活力*の保存の原理、言いかえれば動力と効果が等しいという原理にしたがって計算する手立てがそろった。この原理は、一様な速さ、または周期的な速さで動くすべての機械の作用を律している。

### ¶203　p.180

> This principle was first applied to the steam-engine by the Count de Pambour; and accordingly, the formulæ which I am about to give only differ from those of his work in the expressions for the maximum pressure at a given temperature, and for the expansive action of the steam, which are results peculiar to the theory of this essay.

この原理を初めて蒸気機関に当てはめたのは、ド・パンブール伯である。したがって、私がこれから示す式は、伯の著作の式と、二つの所でしか違わない。与えられた温度での最大の圧力の式と、水蒸気の膨張の作用の式で、これらはこの論文の理論に固有の結果である。

訳注：「maximum pressure at a given temperature」は、その温度での飽和の圧力のことと読める（推測）。

### ¶204　p.180

> In the first place, the effect, as expressed in terms of the pressure, is to be equated to the effect as expressed in terms of the resistance, as follows:—
>
> R A <i>u</i>=R W V<sub>1</sub> (1−<i>c</i>) <i>s</i>=W V<sub>1</sub> {P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)−P<sub>3</sub> (1−<i>c</i>) <i>s</i>} . . (50.)

まず、圧力で言い表した効果を、抵抗で言い表した効果と等しいと置く。次のとおりである。

R A <i>u</i>=R W V<sub>1</sub> (1−<i>c</i>) <i>s</i>=W V<sub>1</sub> {P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)−P<sub>3</sub> (1−<i>c</i>) <i>s</i>} . . (50.)

### ¶205　p.180

> This is the fundamental equation of the action of the steam-engine, and corresponds with Equation A. of M. de Pambour's theory.

これが蒸気機関の作用の基本の式であり、ド・パンブール氏の理論の式 A に当たる。

### ¶206　p.180

> (26.) Dividing both sides of Equation (50.) by the space traversed by the piston in unity of time W V<sub>1</sub> (1−<i>c</i>) <i>s</i>, and transferring the pressure of the waste steam, P<sub>3</sub>, to the first side, we obtain this equation:—
>
> R+P<sub>3</sub>=P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)/((1−<i>c</i>) <i>s</i>) . . . (51.)
>
> which gives the means of determining the pressure P<sub>1</sub> at which the steam must enter the cylinder, in order to overcome a given resistance and counter-pressure with a given expansion; or supposing the expansion <i>s</i> to be variable at pleasure, and the initial pressure P<sub>1</sub> fixed, the equation gives the means of finding, by approximation, the expansion best adapted to overcome a given resistance and counter-pressure.

(26.) 式 (50.) の両辺を、ピストンが単位時間に通る空間 W V<sub>1</sub> (1−<i>c</i>) <i>s</i> で割り、排気の蒸気の圧力 P<sub>3</sub> を左辺に移すと、次の式が得られる。

R+P<sub>3</sub>=P<sub>1</sub> (1/(1−σ)−σ/(1−σ) <i>s</i><sup>1−1/σ</sup>−<i>c s</i>)/((1−<i>c</i>) <i>s</i>) . . . (51.)

この式から、与えられた膨張で、与えられた抵抗と背圧に打ち勝つには、水蒸気がどの圧力 P<sub>1</sub> でシリンダーに入らなければならないかを決められる。あるいは、膨張 <i>s</i> を思いのままに変えられるとし、初めの圧力 P<sub>1</sub> を決めておけば、この式から、与えられた抵抗と背圧に打ち勝つのに最も合う膨張を、近似によって求められる。

### ¶207　p.180–181

> The next step is to determine, from Equations XV. of the Introduction and [p.181] (38.) of this section, the volume V<sub>1</sub> of unity of weight of steam corresponding to the maximum pressure P<sub>1</sub>. Then Equation (48.) gives the space traversed by the piston in unity of time, which, being multiplied by the resistance R per unit of area of piston, gives the gross effect of the engine.

次の手順は、序論の式 XV. とこの節の式 [p.181] (38.) から、最大の圧力 P<sub>1</sub> に当たる、水蒸気の重さの単位の体積 V<sub>1</sub> を決めることである。すると式 (48.) が、ピストンが単位時間に通る空間を与える。これにピストンの単位面積あたりの抵抗 R を掛けると、機関の効果の総量が得られる。

訳注：p.181 の頭の式の番号は、二つ目の数字がかすれている。(38.) と読んだ（OCR は 33）。

### ¶208　p.181

> (27.) If, on the other hand, the space traversed by the piston in unity of time is fixed, Equation (48.) gives the means of determining, from the evaporating power of the boiler W, either the volume V<sub>1</sub> of unity of weight of steam required to work the engine at the given velocity with a given expansion, or the expansion <i>s</i> proper to enable steam of a given initial density to work the engine at the given velocity. The initial pressure P<sub>1</sub> being then determined from the volume V<sub>1</sub>, the resistance which the engine is capable of overcoming with the given velocity is to be calculated by means of Equation (51.)

(27.) 逆に、ピストンが単位時間に通る空間が決まっているなら、式 (48.) により、ボイラーの蒸発の能力 W から、次のどちらかを決められる。与えられた膨張で、与えられた速さで機関を動かすのに要る、水蒸気の重さの単位の体積 V<sub>1</sub>。あるいは、与えられた初めの密度の水蒸気が、与えられた速さで機関を動かせるようにする膨張 <i>s</i>。そのうえで体積 V<sub>1</sub> から初めの圧力 P<sub>1</sub> を決めれば、与えられた速さで機関が打ち勝てる抵抗を、式 (51.) によって計算できる。

### ¶209　p.181

> (28.) This calculation involves the determination of the pressure P<sub>1</sub> from the volume V<sub>1</sub> of unity of weight of steam at saturation, which can only be done by approximation. The following formula will be found useful for this purpose:—
>
> P<sub>1</sub>=ϖ (V<sub>0</sub>/V<sub>1</sub>)<sup>12/11</sup> . . . (52.)
>
> where ϖ represents the pressure of one atmosphere, V<sub>0</sub> the volume of steam of saturation at that pressure (being 1696 times the volume of water at 4°·1 cent., or 27·136 cubic feet per pound avoirdupois), and V<sub>1</sub> the volume of steam of saturation at the pressure P<sub>1</sub>. This formula is only applicable between the pressures of one and eight atmospheres: that is to say, when the volume of steam is not greater than 27 cubic feet per pound, nor less than 4, and the temperature not lower than 100° centigrade, nor higher than 171° centigrade (which correspond to 212° and 340° Fahrenheit).

(28.) この計算には、飽和した水蒸気の重さの単位の体積 V<sub>1</sub> から圧力 P<sub>1</sub> を決めることが含まれ、それは近似でしかできない。そのためには次の式が役に立つ。

P<sub>1</sub>=ϖ (V<sub>0</sub>/V<sub>1</sub>)<sup>12/11</sup> . . . (52.)

ここで ϖ は 1 気圧の圧力、V<sub>0</sub> はその圧力での飽和した水蒸気の体積（摂氏 4°·1 の水の体積の 1696 倍、すなわち常衡ポンドあたり 27·136 立方フィート）、V<sub>1</sub> は圧力 P<sub>1</sub> での飽和した水蒸気の体積である。この式が使えるのは、1 気圧から 8 気圧までの圧力の間だけである。すなわち、水蒸気の体積がポンドあたり 27 立方フィートより大きくなく、4 より小さくなく、温度が摂氏 100 度より低くなく、摂氏 171 度より高くないとき（華氏の 212 度と 340 度に当たる）である。

### ¶210　p.181

> The greatest error in computing the pressure by means of this formula is about 1/50 of an atmosphere, and occurs at the pressure of four atmospheres, so that it is 1/200 of the whole pressure. This is sufficiently accurate for practice, in calculating the power of steam-engines; but should a more accurate result be required, the approximate value of the pressure may be used to calculate the temperature by means of Equation XV.; and the temperature thus determined (which will be correct to 1/5 of a centigrade degree) may then be used in conjunction with the volume to compute a corrected value of the pressure, according to Equation (38.) The pressure, as thus ascertained, will be correct to 1/2000 of its amount, which may be considered the greatest degree of accuracy attainable.

この式で圧力を計算したときの最も大きい誤りは、約 1/50 気圧で、4 気圧の圧力のところで起こる。したがって、圧力全体の 1/200 である。蒸気機関の動力を計算するのには、実用上これで十分に正確である。しかし、もっと正確な結果が要るなら、圧力の近似の値を使って、式 XV. で温度を計算すればよい。こうして決めた温度（摂氏の 1/5 度まで正しい）を、体積と合わせて使い、式 (38.) にしたがって圧力の直した値を計算すればよい。こうして確かめた圧力は、その大きさの 1/2000 まで正しく、これは得られる精度の最も高いものとみてよい。

### ¶211　p.181

> The most convenient and expeditious mode, however, of computing the pressure from the volume, or *vice versâ*, is by interpolation from the table given in the Appendix to this paper.

ただし、体積から圧力を、あるいは*その逆*を計算するのに最も便利で手早いやり方は、この論文の付録に載せる表から補間することである。

### ¶212　p.181–182

> (29.) The resistance denoted by R may be divided into two parts; that which arises from the *useful work performed,* and that which is independent of it, being, [p.182] in fact, the resistance of the engine when unloaded. Now it is evident, that the maximum *useful* effect of the steam has been attained, as soon as it has expanded to a pressure which is in equilibrio with the pressure of the waste steam added to the resistance of the engine when unloaded; for any further expansion, though increasing the total effect, diminishes the useful effect. Therefore if we make
>
> R=R′+<i>f</i>,
>
> R′ being the resistance arising from the useful work, and <i>f</i> the resistance of the engine when unloaded, both expressed in the form of pressure on the piston, the expansion corresponding to the maximum of useful effect will take place when
>
> P<sub>2</sub>=P<sub>3</sub>+<i>f</i>
>
> the corresponding ratio of expansion being
>
> <i>s</i>=(P<sub>1</sub>/(P<sub>3</sub>+<i>f</i>))<sup>σ</sup> . . . (53.)

(29.) R で表した抵抗は、二つに分けられる。*なされる有用な仕事*から生じるものと、それとは関わりの無いもの、すなわち [p.182] 実のところ、負荷の無いときの機関の抵抗である。さて、水蒸気の*有用な*効果が最大に達するのは、明らかに、水蒸気が、排気の蒸気の圧力に負荷の無いときの機関の抵抗を足したものと釣り合う圧力まで膨張したときである。それより先の膨張は、全体の効果を増やしはしても、有用な効果を減らすからである。そこで

R=R′+<i>f</i>

と置く。R′ は有用な仕事から生じる抵抗、<i>f</i> は負荷の無いときの機関の抵抗で、どちらもピストンにかかる圧力の形で表したものである。すると、有用な効果の最大に当たる膨張は

P<sub>2</sub>=P<sub>3</sub>+<i>f</i>

のときに起こり、それに当たる膨張比は

<i>s</i>=(P<sub>1</sub>/(P<sub>3</sub>+<i>f</i>))<sup>σ</sup> . . . (53.)

である。

訳注：(53.) は、誌面では右の縦線で P<sub>2</sub>=P<sub>3</sub>+<i>f</i> から終わりまでの行をまとめ、式の番号を一つ付けている。

### ¶213　p.182

> The maximum useful effect with a given pressure on the safety-valve has been so fully discussed by M. de Pambour, that it is unnecessary to do more than to state that it takes place when the initial pressure in the cylinder is equal to that at the safety-valve: that is to say, when it and the useful resistance are the greatest that the safety-valve will permit.

安全弁にかかる圧力が与えられたときの有用な効果の最大は、ド・パンブール氏が十分に論じているので、ここでは次のことを述べるだけでよい。それは、シリンダーの中の初めの圧力が安全弁のところの圧力と等しいとき、すなわち、その圧力と有用な抵抗が、安全弁の許す最も大きいものであるときに起こる。

### ¶214　p.182

> (30.) Annexed is a table of the values of some of the quantities which enter into the preceding equations in the notation of the Count de Pambour's works.
>
> | Expression in the Notation of this paper. | Equivalent Expression in M. de Pambour's Notation. |
> |---|---|
> | R=R′+<i>f</i> | (1+δ) <i>r</i>+<i>f</i> |
> | A <i>u</i> | <i>a v</i> |
> | W | S × weight of one cubic foot of water. |
> | P<sub>3</sub> | <i>p</i> |
> | <i>s</i> | (<i>l</i>+<i>c</i>)/(<i>l</i>′+<i>c</i>) |
> | <i>c</i> | <i>c</i>/(<i>l</i>′+<i>c</i>) |

(30.) 前の式に入る量のいくつかを、ド・パンブール伯の著作の記法で表した値の表を添える。

| この論文の記法での式 | ド・パンブール氏の記法での同じ式 |
|---|---|
| R=R′+<i>f</i> | (1+δ) <i>r</i>+<i>f</i> |
| A <i>u</i> | <i>a v</i> |
| W | S × 水 1 立方フィートの重さ |
| P<sub>3</sub> | <i>p</i> |
| <i>s</i> | (<i>l</i>+<i>c</i>)/(<i>l</i>′+<i>c</i>) |
| <i>c</i> | <i>c</i>/(<i>l</i>′+<i>c</i>) |

訳注：表の行の間の点線（. . . .）は省いた。最後の行の分母は誌面で <i>l</i>′+<i>c</i> だが、本文の <i>c</i> の定義（膨張の終わりの空間に対する割合）と ¶215 の数（行程の 1/20 のすき間で <i>c</i>=1/21）からは <i>l</i>+<i>c</i> になるはずで、誤植かもしれない。付録（p.188）でランキンは <i>l</i> を行程の全長、<i>l</i>′ を全圧で進む部分としており、その意味なら <i>s</i> の行とも合う。ド・パンブールの原典の英訳（*The Theory of the Steam Engine*, London: J. Weale, 1839, p.145。Internet Archive [`theoryofsteameng00guyorich`](https://archive.org/details/theoryofsteameng00guyorich)）では、<i>l</i> はピストンの行程、<i>c</i> はすき間をシリンダーの長さに直したもので、その記法でランキンの <i>c</i> を書けば <i>c</i>/(<i>l</i>+<i>c</i>) になる。1881 年の論集の再録（p.273）も <i>l</i>′+<i>c</i> のままで、直されていない（誤植かどうかは推測）。

### ¶215　p.182–183

> (31.) As an illustration, I shall calculate the maximum useful effect of one pound, and of one cubic foot of water, in a Cornish double-acting engine, in the circumstances taken by M. de Pambour as an example for that kind of engine: that is to say,—
>
> Clearance one-twentieth of the stroke, or <i>c</i>=1/21
>
> Resistance not depending on the useful load, <i>f</i>= 72 lb. per square foot.
>
> Pressure of condensation, . . . . P<sub>3</sub>= 576 lb. ··· ···
>
> [p.183] Consequently to give the maximum useful effect,
>
> P<sub>2</sub>=P<sub>3</sub>+<i>f</i> = 648 lb. per square foot.
>
> Total pressure of the steam when first admitted, P<sub>1</sub>=7200 lb. ··· ···
>
> Volume of 1 lb. of steam V<sub>1</sub>=8·7825 cubic feet.
>
> Therefore P<sub>1</sub> V<sub>1</sub>=63234 lbs. raised one foot.
>
> P<sub>1</sub>/P<sub>2</sub>=7200/648 and consequently,
>
> Expansion to produce the maximum useful effect <i>s</i>=(P<sub>1</sub>/P<sub>2</sub>)<sup>6/7</sup> =7·877
>
> Space traversed by the piston during the action of one pound of steam,
>
> =V<sub>1</sub> (1−<i>c</i>) <i>s</i>=65·886 cubic feet.
>
> Gross effect of one pound of steam, in pounds raised one foot high,
>
> =P<sub>1</sub> V<sub>1</sub> (7−6<i>s</i><sup>−1/6</sup>−<i>s</i>/21)−P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i> . . =112004
>
> Deduct for resistance of engine when unloaded <i>f</i> V<sub>1</sub> (1−<i>c</i>) <i>s</i> . = 4744
>
> Effect of one pound of steam in overcoming resistance depending on useful load, . . . . . . . . . 107260
>
> This being multiplied by 62½, gives for the effect of one cubic foot of water evaporated, in pounds raised one foot, . . . . . 6,703,750

(31.) 例として、コーンウォール式の複動機関で、水 1 ポンドと水 1 立方フィートが生む有用な効果の最大を計算する。条件は、ド・パンブール氏がその種の機関の例としてとったものである。すなわち、

すき間は行程の 20 分の 1、すなわち <i>c</i>=1/21

有用な負荷によらない抵抗 <i>f</i>= 平方フィートあたり 72 ポンド

復水の圧力 . . . . P<sub>3</sub>= 576 ポンド（同上）

[p.183] したがって、有用な効果を最大にするには

P<sub>2</sub>=P<sub>3</sub>+<i>f</i> = 平方フィートあたり 648 ポンド

初めに入るときの水蒸気の全圧力 P<sub>1</sub>=7200 ポンド（同上）

水蒸気 1 ポンドの体積 V<sub>1</sub>=8·7825 立方フィート

したがって P<sub>1</sub> V<sub>1</sub>=1 フィート持ち上げた 63234 ポンド

P<sub>1</sub>/P<sub>2</sub>=7200/648、したがって

有用な効果を最大にする膨張 <i>s</i>=(P<sub>1</sub>/P<sub>2</sub>)<sup>6/7</sup> =7·877

水蒸気 1 ポンドが作用する間にピストンが通る空間

=V<sub>1</sub> (1−<i>c</i>) <i>s</i>=65·886 立方フィート

水蒸気 1 ポンドの効果の総量（1 フィート持ち上げたポンドで）

=P<sub>1</sub> V<sub>1</sub> (7−6<i>s</i><sup>−1/6</sup>−<i>s</i>/21)−P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i> . . =112004

負荷の無いときの機関の抵抗の分を引く <i>f</i> V<sub>1</sub> (1−<i>c</i>) <i>s</i> . = 4744

有用な負荷による抵抗に打ち勝つ、水蒸気 1 ポンドの効果 . . . . . . . . . 107260

これに 62½ を掛けると、蒸発した水 1 立方フィートの効果として（1 フィート持ち上げたポンドで） . . . . . 6,703,750

訳注：「··· ···」は「per square foot」をくり返す同上の印と読んだ。62½ は水 1 立方フィートの重さ（ポンド）と読める（推測）。誌面では 107260 の行が右の波括弧で二行をまとめ、112004 と 4744 の下、6,703,750 の下に線がある。lbs. raised one foot は仕事の単位（フィート・ポンド）に当たる。

### ¶216　p.183

> It is here necessary to observe, that M. de Pambour distinguishes the useful resistance into two parts, the resistance of the useful load independently of the engine, and the increase in the resistance of the engine, arising from the former resistance, and found by multiplying it by a constant fraction which he calls δ. In calculating the net useful effect, he takes into account the former portion of the resistance only; consequently,
>
> Net useful effect as defined by M. de Pambour = (Gross effect −<i>f</i> V<sub>1</sub> (1−<i>c</i>) <i>s</i>)/(1+δ) . (54.)

ここで述べておく必要がある。ド・パンブール氏は、有用な抵抗を二つの部分に分ける。一つは、機関とは別に見た有用な負荷の抵抗であり、もう一つは、その抵抗から生じる機関の抵抗の増加である。後者は、前者に、氏が δ と呼ぶ一定の割合を掛けて求める。氏は、正味の有用な効果を計算するとき、抵抗のうち前者の部分だけを勘定に入れる。したがって、

ド・パンブール氏の定義による正味の有用な効果 = (効果の総量 −<i>f</i> V<sub>1</sub> (1−<i>c</i>) <i>s</i>)/(1+δ) . (54.)

訳注：ここで「有用な抵抗」は、機関が仕事として打ち勝つ負荷の抵抗を指す。

### ¶217　p.183

> The value of δ, for double acting steam-engines generally, is considered by M. de Pambour to be 1/7; consequently, to reduce the effect of one cubic foot of water as calculated above to that which corresponds with his definition, we must deduct 1/8, which leaves,
>
> 5,865,781 lb. raised one foot.

複動の蒸気機関一般について、ド・パンブール氏は δ の値を 1/7 と見ている。したがって、上で計算した水 1 立方フィートの効果を、氏の定義に合う値に直すには、1/8 を差し引かなければならない。残るのは、

5,865,781 ポンドを 1 フィート持ち上げる仕事

訳注：1/(1+1/7) = 7/8 なので、1/8 を差し引く。

### ¶218　p.183

> M. de Pambour's own calculation gives,
>
> 6,277,560
>
> being too large by about one-fifteenth.

ド・パンブール氏自身の計算では、

6,277,560

となり、およそ 15 分の 1 だけ大きすぎる。

### ¶219　p.183

> (32.) In order to shew the limit of the effect which may be expected from the expenditure of a given quantity of heat in evaporating water, and also to verify the approximate method employed in calculating the expansive action of the steam, I shall now investigate the *maximum gross effect*, including resistance of all kinds, producible by evaporating unity of weight of water at a higher temperature and liquefying it at a lower, and compare, in two examples, the power produced, with the heat which disappears during the action of the steam, as calculated directly.

(32.) 与えられた量の熱を水の蒸発に費やすとき、期待できる効果の限界を示すため、また水蒸気の膨張の作用の計算に用いた近似の方法を確かめるため、これから*効果の総量の最大*を調べる。これは、重さの単位の水を高い温度で蒸発させ、低い温度で液化させることで生み出せる効果で、あらゆる種類の抵抗を含む。そして二つの例で、生み出される動力と、水蒸気が作用するあいだに消える熱を直接に計算したものとを比べる。

訳注：shew は show の古い綴り。

### ¶220　p.184

> To obtain the maximum gross effect, the steam must continue to act expansively until it reaches the pressure of condensation, so that P<sub>2</sub>=P<sub>3</sub>. The clearance must also be null, or <i>c</i>=0. Making those substitutions in the formula (47.), we find, for the maximum gross effect of unity of weight of water, evaporated under the pressure P<sub>1</sub> and liquefied under the pressure P<sub>2</sub>,
>
> P<sub>1</sub>V<sub>1</sub> 1/(1−σ) (1 − <i>s</i><sup>1−1/σ</sup>) =P<sub>1</sub> V<sub>1</sub> (1− (P<sub>2</sub>/P<sub>1</sub>)<sup>1−σ</sup>)/(1−σ) . . . (55.)

効果の総量の最大を得るには、水蒸気は復水の圧力に達するまで膨張して働き続けなければならない。つまり P<sub>2</sub>=P<sub>3</sub> である。すき間（クリアランス）もなく、<i>c</i>=0 でなければならない。式 (47.) にこれらを代入すると、圧力 P<sub>1</sub> のもとで蒸発し、圧力 P<sub>2</sub> のもとで液化する重さの単位の水の効果の総量の最大として、次を得る。

P<sub>1</sub>V<sub>1</sub> 1/(1−σ) (1 − <i>s</i><sup>1−1/σ</sup>) =P<sub>1</sub> V<sub>1</sub> (1− (P<sub>2</sub>/P<sub>1</sub>)<sup>1−σ</sup>)/(1−σ) . . . (55.)

訳注：condensation は、ここでは復水器で水蒸気を水に戻すこと（凝縮）。clearance は、ピストンが行程の端にあるときにシリンダーに残るすき間の容積。

### ¶221　p.184

> In order to calculate directly the heat which is converted into power in this operation, let τ<sub>1</sub>, τ<sub>2</sub>, respectively represent the absolute temperatures of evaporation and liquefaction, and L<sub>2</sub> the latent heat of evaporation at the lower temperature τ<sub>2</sub>; then the total heat of evaporation at τ<sub>1</sub>, starting from τ<sub>2</sub> as the fixed point, by Equation (33.), is
>
> H<sub>2,1</sub>=L<sub>2</sub> +·305 K<sub>W</sub> (τ<sub>1</sub>−τ<sub>2</sub>).
>
> This is the heat communicated to the water in raising it from τ<sub>2</sub> to τ<sub>1</sub> and evaporating it. Now a weight 1−<i>m</i> of the steam is liquefied during the expansion at temperatures varying from τ<sub>1</sub> to τ<sub>2</sub>, so that it may be looked upon as forming a mass of liquid water approximately at the mean temperature (τ<sub>1</sub>+τ<sub>2</sub>)/2, and from which a quantity of heat, approximately represented by
>
> K<sub>W</sub> (1−<i>m</i>) (τ<sub>1</sub>−τ<sub>2</sub>)/2
>
> must be abstracted, to reduce it to the primitive temperature τ<sub>2</sub>.

この操作で動力に変わる熱を直接に計算するため、τ<sub>1</sub>、τ<sub>2</sub> をそれぞれ蒸発と液化の絶対温度とし、L<sub>2</sub> を低いほうの温度 τ<sub>2</sub> での蒸発の潜熱とする。すると、τ<sub>2</sub> を定点として出発したときの、τ<sub>1</sub> での蒸発の全熱は、式 (33.) により、

H<sub>2,1</sub>=L<sub>2</sub> +·305 K<sub>W</sub> (τ<sub>1</sub>−τ<sub>2</sub>).

である。これは、水を τ<sub>2</sub> から τ<sub>1</sub> まで温め、蒸発させるときに水に与える熱である。ところで、水蒸気のうち重さ 1−<i>m</i> は、膨張のあいだに、τ<sub>1</sub> から τ<sub>2</sub> まで変わる温度で液化する。そこで、これは近似的に平均の温度 (τ<sub>1</sub>+τ<sub>2</sub>)/2 にある液体の水の塊をなすと見てよい。この塊を元の温度 τ<sub>2</sub> に戻すには、近似的に

K<sub>W</sub> (1−<i>m</i>) (τ<sub>1</sub>−τ<sub>2</sub>)/2

で表される量の熱を取り去らなければならない。

訳注：K<sub>W</sub> は液体の水の比熱（この論文の記号）。·305 は 0·305 の意。

### ¶222　p.184

> Finally, the weight of steam remaining, <i>m</i>, has to be liquefied at the temperature τ<sub>2</sub>, by the abstraction of the heat
>
> <i>m</i> L<sub>2</sub>.

最後に、残った水蒸気の重さ <i>m</i> は、温度 τ<sub>2</sub> で、熱

<i>m</i> L<sub>2</sub>.

を取り去ることで液化させなければならない。

### ¶223　p.184

> The difference between the heat given to the water, and the heat abstracted from it, or
>
> H<sub>2,1</sub> −K<sub>W</sub> (1−<i>m</i>) (τ<sub>1</sub>−τ<sub>2</sub>)/2 − <i>m</i> L<sub>2</sub>
>
> =(1−<i>m</i>) L<sub>2</sub> +K<sub>W</sub> (·305 − (1−<i>m</i>)/2) (τ<sub>1</sub>−τ<sub>2</sub>) . . . (56.)
>
> is the heat which has disappeared, and ought to agree with the expression (55.) for the power produced, if the calculation has been conducted correctly.

水に与えた熱と、水から取り去った熱との差、すなわち

H<sub>2,1</sub> −K<sub>W</sub> (1−<i>m</i>) (τ<sub>1</sub>−τ<sub>2</sub>)/2 − <i>m</i> L<sub>2</sub>

=(1−<i>m</i>) L<sub>2</sub> +K<sub>W</sub> (·305 − (1−<i>m</i>)/2) (τ<sub>1</sub>−τ<sub>2</sub>) . . . (56.)

が消えた熱である。計算が正しく行われていれば、これは生み出された動力を表す式 (55.) と合うはずである。

訳注：誌面では二行の式を右の波括弧でまとめ、一つの番号 (56.) を付けている。

### ¶224　p.184–185

> As a first example, I shall suppose unity of weight of water to be evaporated under the pressure of four atmospheres, and liquefied under that of half an atmosphere; so that the proper values of the coefficients and exponent are
>
> 1/(1−σ)=7　1−σ=1/7
>
> [p.185] The data in this case for calculating the power, are,
>
> P<sub>1</sub>=8468 lb. per square foot.
>
> V<sub>1</sub>=7·584 cubic feet for one lb. of steam.
>
> P<sub>1</sub> V<sub>1</sub>=64221 lb. raised one foot.
>
> P<sub>2</sub>/P<sub>1</sub>=1/8, whence <i>s</i>=8<sup>6/7</sup> =5·944.

第一の例として、重さの単位の水を 4 気圧のもとで蒸発させ、半気圧のもとで液化させるとする。すると、係数と指数のふさわしい値は

1/(1−σ)=7　1−σ=1/7

である。[p.185] この場合に動力を計算するためのデータは、

P<sub>1</sub>=1 平方フィートあたり 8468 ポンド

V<sub>1</sub>=水蒸気 1 ポンドあたり 7·584 立方フィート

P<sub>1</sub> V<sub>1</sub>=64221 ポンドを 1 フィート持ち上げる仕事

P<sub>2</sub>/P<sub>1</sub>=1/8、ここから <i>s</i>=8<sup>6/7</sup> =5·944

である。

### ¶225　p.185

> Maximum possible effect of one pound of water,
>
> =P<sub>1</sub> V<sub>1</sub> ×7 (1 − (1/8)<sup>1/7</sup>) =115600 lb. raised one foot.
>
> Being the mechanical equivalent of 92°·3 centigrade degrees applied to one pound of liquid water at 0° C.; or,
>
> 92°·3 K<sub>W</sub>

水 1 ポンドで得られる最大の効果は、

=P<sub>1</sub> V<sub>1</sub> ×7 (1 − (1/8)<sup>1/7</sup>) =115600 ポンドを 1 フィート持ち上げる仕事

これは、0° C の液体の水 1 ポンドに与えた摂氏 92°·3 度の力学的当量である。すなわち、

92°·3 K<sub>W</sub>

訳注：92°·3 は 92·3 度。誌面は度の印を小数点の前に置く。

### ¶226　p.185

> Maximum possible effect of one cubic foot of water, 7,225,000 lb. raised one foot.

水 1 立方フィートで得られる最大の効果は、7,225,000 ポンドを 1 フィート持ち上げる仕事。

### ¶227　p.185

> In order to calculate directly the heat converted into power, we have,
>
> τ<sub>1</sub>=C+144°·1 cent. τ<sub>2</sub>=C+81°·7
>
> L<sub>2</sub>=549°·7 K<sub>W</sub>
>
> H<sub>2,1</sub>=568°·7 K<sub>W</sub> = heat expended in the boiler.
>
> 1−<i>m</i>=·14 nearly = proportion of steam liquefied during the expansion.

動力に変わった熱を直接に計算するため、次の値を用いる。

τ<sub>1</sub>=C+144°·1（摂氏）　τ<sub>2</sub>=C+81°·7

L<sub>2</sub>=549°·7 K<sub>W</sub>

H<sub>2,1</sub>=568°·7 K<sub>W</sub> = ボイラーで費やされた熱

1−<i>m</i>=·14 ほど = 膨張のあいだに液化する水蒸気の割合

訳注：C は、摂氏の温度に足して絶対温度にする定数（この論文の記号）。

### ¶228　p.185

> The heat converted into mechanical power, as calculated from these data, is found to be,
>
> 91°·6 K<sub>W</sub>
>
> differing by only 0°·7 from the amount as calculated from the power produced.

これらのデータから計算すると、力学的な動力に変わった熱は

91°·6 K<sub>W</sub>

となり、生み出された動力から計算した量と 0°·7 しか違わない。

### ¶229　p.185

> The direct method, however, is much less precise than the other, and is to be regarded as only a verification of the general principle of calculation.

ただし、直接の方法はもう一方の方法よりずっと精度が低く、計算の一般の原理を確かめるものとしてだけ見るべきである。

### ¶230　p.185

> The heat rendered effective, in the above example, is 92·3/568·7, or less than *one-sixth* of that expended in the boiler.

上の例で有効になった熱は、ボイラーで費やされた熱の 92·3/568·7、すなわち *6 分の 1* に足りない。

### ¶231　p.185

> As a second example, I shall suppose the steam to be produced at a pressure of eight atmospheres, and to expand to that of one atmosphere. In this case,
>
> P<sub>1</sub>=16936 lbs. per square foot.
>
> V<sub>1</sub>=4·03 cubic feet per lb. of steam.
>
> P<sub>1</sub> V<sub>1</sub>=68252 lbs. raised one foot.
>
> P<sub>2</sub>/P<sub>1</sub>=1/8 ∴ <i>s</i>=5·657=8<sup>5/6</sup>

第二の例として、水蒸気が 8 気圧の圧力で作られ、1 気圧まで膨張するとする。この場合、

P<sub>1</sub>=1 平方フィートあたり 16936 ポンド

V<sub>1</sub>=水蒸気 1 ポンドあたり 4·03 立方フィート

P<sub>1</sub> V<sub>1</sub>=68252 ポンドを 1 フィート持ち上げる仕事

P<sub>2</sub>/P<sub>1</sub>=1/8 ∴ <i>s</i>=5·657=8<sup>5/6</sup>

訳注：この例では、次の段の式から 1−σ=1/6 を用いている（第一の例は 1/7）。

### ¶232　p.185

> Maximum possible effect of one pound of water,
>
> =P<sub>1</sub> V<sub>1</sub> ×6 (1− (1/8)<sup>1/6</sup>) =119,942 lb. raised one foot.
>
> Being the equivalent of 95°·8 K<sub>W</sub> (Centigrade).

水 1 ポンドで得られる最大の効果は、

=P<sub>1</sub> V<sub>1</sub> ×6 (1− (1/8)<sup>1/6</sup>) =119,942 ポンドを 1 フィート持ち上げる仕事

これは 95°·8 K<sub>W</sub>（摂氏）の当量である。

### ¶233　p.185

> Maximum possible effect of one cubic foot of water = 7,496,375 lb. raised one foot.

水 1 立方フィートで得られる最大の効果 = 7,496,375 ポンドを 1 フィート持ち上げる仕事。

### ¶234　p.185–186

> The data for calculating directly the heat rendered effective are,
>
> τ<sub>1</sub>=C+170°·9 cent. τ<sub>2</sub>=C+100°
>
> L<sub>2</sub>=537° K<sub>W</sub>
>
> H<sub>2,1</sub>=558°·6 K<sub>W</sub> = heat expended in the boiler.
>
> 1−<i>m</i>=·148 nearly = steam liquefied during the expansion.
>
> [p.186] Whence, the heat converted in power, as calculated directly, is,
>
> 95°·8 K<sub>W</sub>
>
> agreeing with the calculation from the power produced.

有効になった熱を直接に計算するためのデータは、

τ<sub>1</sub>=C+170°·9（摂氏）　τ<sub>2</sub>=C+100°

L<sub>2</sub>=537° K<sub>W</sub>

H<sub>2,1</sub>=558°·6 K<sub>W</sub> = ボイラーで費やされた熱

1−<i>m</i>=·148 ほど = 膨張のあいだに液化する水蒸気

である。[p.186] ここから、直接に計算した、動力に変わった熱は

95°·8 K<sub>W</sub>

となり、生み出された動力からの計算と合う。

### ¶235　p.186

> In this example, the heat rendered effective is 95·8/558·6, or somewhat more than one-sixth of that expended in the boiler.

この例で有効になった熱は、ボイラーで費やされた熱の 95·8/558·6、すなわち 6 分の 1 を少し上回る。

### ¶236　p.186

> (33.) The results of the calculations of maximum possible effect, of which examples have just been given, are *limits* which may be approached in practice by Cornish and similar engines, but which cannot be fully realised; and yet it has been shewn, that in those theoretical cases only about *one-sixth* of the heat expended in the boiler is rendered effective. In practice, of course, the proportion of heat rendered effective must be still smaller; and, in fact, in some unexpansive engines, it amounts to only one-twenty-fourth, or even less.

(33.) いま例を挙げた、得られる最大の効果の計算の結果は、コーンウォール式の機関やそれに似た機関が実地で近づくことはできても、完全には実現できない*限界*である。それなのに、こうした理論上の場合でさえ、ボイラーで費やされた熱のうち有効になるのは、およそ *6 分の 1* にすぎないことが示された。実地では、言うまでもなく、有効になる熱の割合はさらに小さいはずである。実際、膨張を使わない機関のいくつかでは、24 分の 1、あるいはそれ以下にしかならない。

訳注：Cornish engine は、コーンウォールの鉱山で使われた、膨張を活かす揚水用の蒸気機関。

### ¶237　p.186

> Dr Lyon Playfair, in a memoir on the Evaporating Power of Fuel, has taken notice of the great disproportion between the heat expended in the steam-engine and the work performed. It has now been shewn that this waste of heat is, to a great extent, a necessary consequence of the nature of the machine. It can only be reduced by increasing the initial pressure of the steam, and the extent of the expansive action; and to both of those resources there are practical limits, which have already in some instances been nearly attained.

ライアン・プレイフェア博士は、燃料の蒸発力についての論文で、蒸気機関で費やされる熱と、なされる仕事との大きな不釣り合いに注意を向けた。いま示したように、この熱の浪費は、かなりの程度まで、この機械の性質から必然的に生じるものである。これを減らすには、水蒸気の初めの圧力を上げ、膨張の作用の幅を広げるほかない。そしてこの二つの手段には、どちらも実地の限界があり、いくつかの例では、すでにその限界にほぼ達している。

訳注：Lyon Playfair はイギリスの化学者。論文の正確な題は確かめていない。

### ¶238　p.186

> APPENDIX TO THE FOURTH SECTION,
>
> containing tables to be used in calculating the pressure, volume, and mechanical action of steam, treated as a perfect gas.

第 IV 節への付録

完全気体として扱った水蒸気の、圧力・体積・力学的作用を計算するときに使う表を収める

訳注：誌面では二行目も小型の大文字で組まれている。

### ¶239　p.186

> The object of the first of the annexed tables is to facilitate the calculation of the volume of steam of saturation at a given pressure, of the pressure of steam of saturation at a given volume, and of its mechanical action at full pressure.

付けた表の第一のものの目的は、与えられた圧力での飽和水蒸気の体積、与えられた体積での飽和水蒸気の圧力、そして全圧でのその力学的作用の計算を楽にすることである。

訳注：steam of saturation は飽和した水蒸気。full pressure（全圧）は、膨張を始める前の、ボイラーから入ったままの圧力。

### ¶240　p.186

> The pressures are expressed in pounds avoirdupois per square foot, and the volumes by the number of cubic feet occupied by one pound avoirdupois of steam, when considered as a perfect gas; those denominations being the most convenient for mechanical calculations in this country.

圧力は 1 平方フィートあたりの常衡ポンドで表し、体積は、完全気体と見たときの水蒸気 1 常衡ポンドが占める立方フィートの数で表す。この国で力学の計算をするには、これらの単位がいちばん便利だからである。

訳注：pound avoirdupois（常衡ポンド）は、ふつうの重さのポンド（約 453·6 グラム）。

### ¶241　p.186

> The columns to be used in determining the pressure from the volume, and *vice versâ*, are the third, fourth, sixth, and seventh.

体積から圧力を求めるとき、またその逆のときに使う列は、第三・第四・第六・第七の列である。

### ¶242　p.186

> The third column contains the common logarithms of the pressures of steam of saturation for every fifth degree of the centigrade thermometer from −30° to +260°: that is to say, for every ninth degree of Fahrenheit's thermometer from −22° to +500°.

第三の列には、摂氏の温度計で −30° から +260° まで 5 度ごとの、飽和水蒸気の圧力の常用対数を載せる。つまり、華氏の温度計で −22° から +500° まで 9 度ごとである。

### ¶243　p.186

> The fourth column gives the differences of the successive terms of the third column.

第四の列は、第三の列の相次ぐ項の差を示す。

### ¶244　p.187

> The sixth column contains the common logarithms of the volume of one pound of steam of saturation corresponding to the same temperatures.

第六の列には、同じ温度に対応する、飽和水蒸気 1 ポンドの体積の常用対数を載せる。

### ¶245　p.187

> The seventh column contains the differences of the successive terms of the sixth column, which are negative; for the volumes diminish as the pressures increase.

第七の列には、第六の列の相次ぐ項の差を載せる。この差は負である。圧力が増すにつれて体積は減るからである。

訳注：表の第七の列は負の印を付けずに、差の大きさだけを載せている。

### ¶246　p.187

> By the ordinary method of taking proportional parts of the differences, the logarithms of the volumes corresponding to intermediate pressures, or the logarithms of the pressures corresponding to intermediate volumes, can be calculated with great precision. Thus, let X+<i>h</i> be the logarithm of a pressure not found in the table, X being the next less logarithm which is found in the table; let Y be the logarithm of the volume corresponding to X, and Y−<i>k</i> the logarithm of the volume corresponding to X+<i>h</i>; let H be the difference between X and the next greater logarithm in the table, as given in the fourth column, and K the corresponding difference in the seventh column; then by the proportion
>
> H : K :: <i>h</i> : <i>k</i>
>
> either Y−<i>k</i> may be found from X+<i>h</i>, or X+<i>h</i> from Y−<i>k</i>.

差の比例部分をとるふつうの方法で、中間の圧力に対応する体積の対数、あるいは中間の体積に対応する圧力の対数を、高い精度で計算できる。すなわち、X+<i>h</i> を表に無い圧力の対数とし、X を表にある、それのすぐ下の対数とする。Y を X に対応する体積の対数とし、Y−<i>k</i> を X+<i>h</i> に対応する体積の対数とする。H を、X と表でそのすぐ上の対数との差（第四の列にある）とし、K を第七の列の対応する差とする。すると比例

H : K :: <i>h</i> : <i>k</i>

によって、X+<i>h</i> から Y−<i>k</i> を、あるいは Y−<i>k</i> から X+<i>h</i> を求めることができる。

訳注：H : K :: <i>h</i> : <i>k</i> は、H 対 K が <i>h</i> 対 <i>k</i> に等しいという比例の古い書き方。この段の H・K は、本文の全熱 H や比熱の K とは別の、ここだけの記号。

### ¶247　p.187

> In the fifth and eighth columns respectively, are given the actual pressures and volumes corresponding to the logarithms in the third and sixth columns, to five places of figures.

第五と第八の列には、それぞれ、第三と第六の列の対数に対応する実際の圧力と体積を、5 桁で示す。

### ¶248　p.187

> In the ninth column are given the values of the quantity denoted by P<sub>1</sub> V<sub>1</sub> in the formulæ, which represents the mechanical action of unity of weight of steam at full pressure, or before it has begun to expand, in raising an equal weight. Those values are expressed in feet, being the products of the pressures in the fifth column by the volumes in the eighth, and have been found by multiplying the absolute temperature in centigrade degrees by 153·48 feet. Intermediate terms in this column, for a given pressure or a given volume, may be approximated to by the method of differences, the constant difference for 5° centigrade being 767·4 feet;, but it is more accurate to calculate them by taking the product of the pressure and volume.

第九の列には、式の中で P<sub>1</sub> V<sub>1</sub> と記す量の値を示す。これは、重さの単位の水蒸気が、全圧で、つまり膨張を始める前に、等しい重さを持ち上げる力学的作用を表す。これらの値はフィートで表してあり、第五の列の圧力と第八の列の体積の積である。値は、摂氏の度で表した絶対温度に 153·48 フィートを掛けて求めた。この列の中間の項は、与えられた圧力または体積について、差の方法で近似できる。摂氏 5° あたりの一定の差は 767·4 フィートである。しかし、圧力と体積の積をとって計算するほうが正確である。

訳注：「フィートで表す」は、重さの単位の水蒸気が等しい重さを持ち上げる高さで仕事を表すため。誌面は「767·4 feet ;,」と、セミコロンのあとに余分な点がある。誤植と見た。

### ¶249　p.187

> When the pressure is given in other denominations, the following logarithms are to be added to its logarithm, in order to reduce it to pounds avoirdupois per square foot:—
>
> | | |
> |---|---|
> | For Millimètres of mercury, | 0·44477 |
> | Inches of mercury, | 1·84960 |
> | Atmospheres of 760 millimètres, | 3·32559 |
> | Atmospheres of 30 inches, | 3·32672 |
> | Kilogrammes on the square centimètre, | 3·31136 |
> | Kilogrammes on the circular centimètre, | 3·41627 |
> | Kilogrammes on the square mètre, | 1̄·31136 |
> | Pounds avoirdupois on the square inch, | 2·15836 |
> | Pounds avoirdupois on the circular inch, | 2·26327 |

圧力が別の単位で与えられたときは、1 平方フィートあたりの常衡ポンドに直すために、その対数に次の対数を足す。

| | |
|---|---|
| 水銀柱のミリメートルには | 0·44477 |
| 水銀柱のインチ | 1·84960 |
| 760 ミリメートルの気圧 | 3·32559 |
| 30 インチの気圧 | 3·32672 |
| 1 平方センチメートルあたりのキログラム | 3·31136 |
| 1 円センチメートルあたりのキログラム | 3·41627 |
| 1 平方メートルあたりのキログラム | 1̄·31136 |
| 1 平方インチあたりの常衡ポンド | 2·15836 |
| 1 円インチあたりの常衡ポンド | 2·26327 |

訳注：誌面は見出しの無い、点線でつないだ二列の並び。1̄·31136 は、整数部が −1 の対数（−1+0·31136）。circular centimètre・circular inch は、直径 1 センチメートル・1 インチの円の面積を単位とする面積。

### ¶250　p.188

> To reduce the logarithm of the number of cubic mètres occupied by one kilogramme to that of the number of cubic feet occupied by one pound avoirdupois, add 1·20463.

1 キログラムが占める立方メートルの数の対数を、1 常衡ポンドが占める立方フィートの数の対数に直すには、1·20463 を足す。

### ¶251　p.188

> The logarithms are given to five places of decimals only, as a greater degree of precision is not attainable in calculations of this kind.

対数は小数 5 位までしか示さない。この種の計算では、それ以上の精度は得られないからである。

### ¶252　p.188

> The second table is for the purpose of calculating the mechanical action of steam in expansive engines.

第二の表は、膨張を使う機関での水蒸気の力学的作用を計算するためのものである。

### ¶253　p.188

> The first column contains values of the fraction of the entire capacity of the cylinder which is filled with steam before the expansion commences (being the quantity 1/<i>s</i> of the formulæ), for every hundredth part, from 1·00, or the whole cylinder, down to 0·10, or one-tenth.

第一の列には、膨張が始まる前に水蒸気で満たされる、シリンダーの全容積の割合（式の量 1/<i>s</i>）の値を、100 分の 1 ごとに、1·00 すなわちシリンダー全体から、0·10 すなわち 10 分の 1 まで載せる。

### ¶254　p.188

> If <i>l</i> be the entire length of stroke, <i>l</i>′ the portion performed at full pressure, and <i>c</i> the fraction of the entire capacity of the cylinder allowed for clearance, then
>
> <i>l</i>′/<i>l</i> = (1/<i>s</i> − <i>c</i>)/(1−<i>c</i>), and 1/<i>s</i> = (1 − <i>c</i>) <i>l</i>′/<i>l</i> + <i>c</i>.

<i>l</i> を行程の全長、<i>l</i>′ を全圧で進む部分、<i>c</i> をすき間に充てるシリンダーの全容積の割合とすると、

<i>l</i>′/<i>l</i> = (1/<i>s</i> − <i>c</i>)/(1−<i>c</i>)、そして 1/<i>s</i> = (1 − <i>c</i>) <i>l</i>′/<i>l</i> + <i>c</i>.

### ¶255　p.188

> The *entire capacity of the cylinder* is to be understood to include clearance at one end only.

*シリンダーの全容積*には、一方の端のすき間だけを含めると解する。

### ¶256　p.188

> The second column gives the reciprocals of the quantities in the first, or the values of the ratio of expansion <i>s</i>.

第二の列は、第一の列の量の逆数、すなわち膨張比 <i>s</i> の値を示す。

### ¶257　p.188

> The third and fourth columns, headed Z, give the values of the quantity
>
> 1/(1−σ) − σ/(1−σ) <i>s</i><sup>1−1/σ</sup>
>
> of Article 23, which represents the ratio of the entire gross action of the steam to its action at full pressure, without allowing for clearance. The third column is to be used for initial pressures of from one to four atmospheres; and the fourth for initial pressures of from four to eight atmospheres.

Z と見出しを付けた第三と第四の列は、第 23 条の量

1/(1−σ) − σ/(1−σ) <i>s</i><sup>1−1/σ</sup>

の値を示す。これは、すき間を考えに入れないときの、水蒸気の作用の総量の全体と、全圧での作用との比を表す。第三の列は初めの圧力が 1 気圧から 4 気圧のときに、第四の列は 4 気圧から 8 気圧のときに使う。

訳注：誌面ではこの式は本文の行の中に組まれている。計算すると、第三の列は 1−σ=1/7、第四の列は 1−σ=1/6 の値に当たる（§32 の二つの例と同じ）。

### ¶258　p.188

> The deduction to be made from the quantity Z for clearance is <i>c s</i>, or the product of the fraction of the cylinder allowed for clearance by the ratio of expansion. Hence, to calculate from the tables the net mechanical action of unity of weight of steam, allowing for the counter-pressure of the waste steam P<sub>3</sub>, as well as for clearance, we have the formula
>
> P<sub>1</sub> V<sub>1</sub> (Z−<i>c s</i>)−P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i>
>
> being equivalent to the formula (47.) of this paper.

すき間のために量 Z から差し引くのは <i>c s</i>、すなわち、すき間に充てるシリンダーの割合と膨張比との積である。したがって、すき間に加えて、排気の水蒸気の背圧 P<sub>3</sub> も考えに入れて、重さの単位の水蒸気の正味の力学的作用を表から計算するには、次の式を用いる。

P<sub>1</sub> V<sub>1</sub> (Z−<i>c s</i>)−P<sub>3</sub> V<sub>1</sub> (1−<i>c</i>) <i>s</i>

これはこの論文の式 (47.) と同じである。

### ¶259　p.189

> TABLE I.—*Pressure and Volume of Steam, and its Action at Full Pressure.*
>
> | (1.) Temperature Fahrenheit. | (2.) Temperature Centigrade. | (3.) Logarithm of pressure in lbs. per square foot. | (4.) Differences. | (5.) Pressure in lbs. per square foot. | (6.) Logarithm of volume of one lb. of Steam in cubic feet. | (7.) Differences. | (8.) Volume of one lb. of Steam in cubic feet. | (9.) Action of a given weight of Steam in raising an equal weight in feet, at full pressure =P<sub>1</sub> V<sub>1</sub> |
> |---|---|---|---|---|---|---|---|---|
> | −22° | −30° | 1̄·99278 | 0·20563 | 0·9835 | 4·58173 | 0·19684 | 38171 | 37541 |
> | −13 | −25 | 0·19841 | 0·19602 | 1·5791 | 4·38489 | 0·18741 | 24260 | 38309 |
> | −4 | −20 | 0·39443 | 0·18710 | 2·4799 | 4·19748 | 0·17865 | 15757 | 39076 |
> | +5 | −15 | 0·58153 | 0·17864 | 3·8153 | 4·01883 | 0·17036 | 10443 | 39843 |
> | 14 | −10 | 0·76017 | 0·17085 | 5·7567 | 3·84847 | 0·16272 | 7054·6 | 40611 |
> | 23 | −5 | 0·93102 | 0·16348 | 8·5314 | 3·68575 | 0·15550 | 4850·1 | 41378 |
> | 32 | 0 | 1·09450 | 0·15661 | 12·431 | 3·53025 | 0·14877 | 3390·4 | 42146 |
> | 41 | +5 | 1·25111 | 0·15012 | 17·828 | 3·38148 | 0·14242 | 2407·0 | 42913 |
> | 50 | 10 | 1·40123 | 0·14404 | 25·190 | 3·23906 | 0·13648 | 1734·0 | 43680 |
> | 59 | 15 | 1·54527 | 0·13836 | 35·097 | 3·10258 | 0·13093 | 1266·4 | 44448 |
> | 68 | 20 | 1·68363 | 0·13284 | 48·265 | 2·97165 | 0·12553 | 936·81 | 45215 |
> | 77 | 25 | 1·81647 | 0·12780 | 65·535 | 2·84612 | 0·12061 | 701·65 | 45983 |
> | 86 | 30 | 1·94427 | 0·12297 | 87·957 | 2·72551 | 0·11590 | 531·51 | 46750 |
> | 95 | 35 | 2·06724 | 0·11842 | 116·75 | 2·60961 | 0·11146 | 407·01 | 47517 |
> | 104 | 40 | 2·18566 | 0·11410 | 153·34 | 2·49815 | 0·10725 | 314·88 | 48285 |
> | 113 | 45 | 2·29976 | 0·11002 | 199·42 | 2·39090 | 0·10328 | 245·98 | 49052 |
> | 122 | 50 | 2·40978 | 0·10614 | 256·91 | 2·28762 | 0·09950 | 193·92 | 49820 |
> | 131 | 55 | 2·51592 | 0·10247 | 328·04 | 2·18812 | 0·09593 | 154·21 | 50587 |
> | 140 | 60 | 2·61839 | 0·09897 | 415·33 | 2·09219 | 0·09253 | 123·65 | 51354 |
> | 149 | 65 | 2·71736 | 0·09566 | 521·63 | 1·99966 | 0·08931 | 99·922 | 52122 |
> | 158 | 70 | 2·81302 | 0·09250 | 650·16 | 1·91035 | 0·08625 | 81·349 | 52889 |
> | 167 | 75 | 2·90552 | 0·08953 | 804·49 | 1·82410 | 0·08336 | 66·696 | 53657 |
> | 176 | 80 | 2·99505 | 0·08658 | 988·67 | 1·74074 | 0·08050 | 55·048 | 54424 |
> | 185 | 85 | 3·08163 | 0·08388 | 1206·8 | 1·66024 | 0·07788 | 45·734 | 55191 |
> | 194 | 90 | 3·16551 | 0·08129 | 1463·9 | 1·58236 | 0·07538 | 38·226 | 55959 |
> | 203 | 95 | 3·24680 | 0·07879 | 1765·2 | 1·50698 | 0·07295 | 32·135 | 56726 |
> | 212 | 100 | 3·32559 | 0·07640 | 2116·4 | 1·43403 | 0·07064 | 27·166 | 57494 |
> | 221 | 105 | 3·40199 | 0·07415 | 2523·4 | 1·36339 | 0·06847 | 23·088 | 58261 |
> | 230 | 110 | 3·47614 | 0·07196 | 2993·2 | 1·29492 | 0·06635 | 19·721 | 59028 |
> | 239 | 115 | 3·54810 | 0·06988 | 3532·6 | 1·22857 | 0·06434 | 16·927 | 59796 |
> | 248 | 120 | 3·61798 | 0·06788 | 4149·3 | 1·16423 | 0·06241 | 14·596 | 60563 |
> | 257 | 125 | 3·68586 | 0·06597 | 4851·3 | 1·10182 | 0·06057 | 12·642 | 61331 |
> | 266 | 130 | 3·75183 | 0·06414 | 5647·2 | 1·04125 | 0·05881 | 10·996 | 62098 |
> | 275 | 135 | 3·81597 | 0·06238 | 6545·9 | 0·98244 | 0·05711 | 9·6037 | 62865 |
> | 284 | 140 | 3·87835 | 0·06069 | 7557·0 | 0·92533 | 0·05548 | 8·4204 | 63633 |
> | 293 | 145 | 3·93904 | 0·05907 | 8690·4 | 0·86985 | 0·05393 | 7·4105 | 64400 |
> | 302 | 150 | 3·99811 | 0·05751 | 9956·6 | 0·81592 | 0·05242 | 6·5452 | 65168 |
> | 311 | 155 | 4·05562 | 0·05601 | 11366 | 0·76350 | 0·05099 | 5·8010 | 65935 |
> | 320 | 160 | 4·11163 | 0·05456 | 12931 | 0·71251 | 0·04959 | 5·1583 | 66702 |
> | 329 | 165 | 4·16619 | 0·05319 | 14662 | 0·66292 | 0·04828 | 4·6017 | 67470 |
> | 338 | 170 | 4·21938 | 0·05184 | 16572 | 0·61464 | 0·04698 | 4·1176 | 68237 |
> | 347 | 175 | 4·27122 | 0·05056 | 18673 | 0·56766 | 0·04576 | 3·6954 | 69005 |
> | 356 | 180 | 4·32178 | 0·04932 | 20979 | 0·52190 | 0·04457 | 3·3258 | 69772 |
> | 365 | 185 | 4·37110 | 0·04812 | 23502 | 0·47733 | 0·04342 | 3·0014 | 70539 |
> | 374 | 190 | 4·41922 | 0·04696 | 26256 | 0·43391 | 0·04231 | 2·7159 | 71307 |
> | 383 | 195 | 4·46618 | 0·04586 | 29254 | 0·39160 | 0·04126 | 2·4638 | 72074 |
> | 392 | 200 | 4·51204 | 0·04478 | 32512 | 0·35034 | 0·04023 | 2·2405 | 72842 |
> | 401 | 205 | 4·55682 | 0·04375 | 36043 | 0·31011 | 0·03924 | 2·0423 | 73609 |
> | 410 | 210 | 4·60057 | 0·04274 | 39863 | 0·27087 | 0·03829 | 1·8663 | 74376 |
> | 419 | 215 | 4·64331 | 0·04176 | 43986 | 0·23258 | 0·03734 | 1·7084 | 75144 |
> | 428 | 220 | 4·68507 | 0·04085 | 48425 | 0·19524 | 0·03649 | 1·5676 | 75911 |
> | 437 | 225 | 4·72592 | 0·03994 | 53201 | 0·15875 | 0·03561 | 1·4413 | 76679 |
> | 446 | 230 | 4·76586 | 0·03906 | 58326 | 0·12314 | 0·03478 | 1·3278 | 77446 |
> | 455 | 235 | 4·80492 | 0·03819 | 63815 | 0·08836 | 0·03395 | 1·2256 | 78213 |
> | 464 | 240 | 4·84311 | 0·03740 | 69680 | 0·05441 | 0·03320 | 1·1335 | 78981 |
> | 473 | 245 | 4·88051 | 0·03660 | 75947 | 0·02121 | 0·03244 | 1·0501 | 79748 |
> | 482 | 250 | 4·91711 | 0·03582 | 82625 | 1̄·98877 | 0·03170 | 0·97447 | 80516 |
> | 491 | 255 | 4·95293 | 0·03507 | 89728 | 1̄·95707 | 0·03099 | 0·90588 | 81283 |
> | 500 | 260 | 4·98800 |  | 97275 | 1̄·92608 |  | 0·84349 | 82050 |

表 I　*水蒸気の圧力と体積、および全圧でのその作用*

| (1.) 華氏の温度 | (2.) 摂氏の温度 | (3.) 1 平方フィートあたりのポンドで表した圧力の対数 | (4.) 差 | (5.) 1 平方フィートあたりのポンドで表した圧力 | (6.) 1 ポンドの水蒸気の、立方フィートで表した体積の対数 | (7.) 差 | (8.) 1 ポンドの水蒸気の、立方フィートで表した体積 | (9.) 与えられた重さの水蒸気が、全圧で、等しい重さを持ち上げる作用（フィート）=P<sub>1</sub> V<sub>1</sub> |
|---|---|---|---|---|---|---|---|---|
| −22° | −30° | 1̄·99278 | 0·20563 | 0·9835 | 4·58173 | 0·19684 | 38171 | 37541 |
| −13 | −25 | 0·19841 | 0·19602 | 1·5791 | 4·38489 | 0·18741 | 24260 | 38309 |
| −4 | −20 | 0·39443 | 0·18710 | 2·4799 | 4·19748 | 0·17865 | 15757 | 39076 |
| +5 | −15 | 0·58153 | 0·17864 | 3·8153 | 4·01883 | 0·17036 | 10443 | 39843 |
| 14 | −10 | 0·76017 | 0·17085 | 5·7567 | 3·84847 | 0·16272 | 7054·6 | 40611 |
| 23 | −5 | 0·93102 | 0·16348 | 8·5314 | 3·68575 | 0·15550 | 4850·1 | 41378 |
| 32 | 0 | 1·09450 | 0·15661 | 12·431 | 3·53025 | 0·14877 | 3390·4 | 42146 |
| 41 | +5 | 1·25111 | 0·15012 | 17·828 | 3·38148 | 0·14242 | 2407·0 | 42913 |
| 50 | 10 | 1·40123 | 0·14404 | 25·190 | 3·23906 | 0·13648 | 1734·0 | 43680 |
| 59 | 15 | 1·54527 | 0·13836 | 35·097 | 3·10258 | 0·13093 | 1266·4 | 44448 |
| 68 | 20 | 1·68363 | 0·13284 | 48·265 | 2·97165 | 0·12553 | 936·81 | 45215 |
| 77 | 25 | 1·81647 | 0·12780 | 65·535 | 2·84612 | 0·12061 | 701·65 | 45983 |
| 86 | 30 | 1·94427 | 0·12297 | 87·957 | 2·72551 | 0·11590 | 531·51 | 46750 |
| 95 | 35 | 2·06724 | 0·11842 | 116·75 | 2·60961 | 0·11146 | 407·01 | 47517 |
| 104 | 40 | 2·18566 | 0·11410 | 153·34 | 2·49815 | 0·10725 | 314·88 | 48285 |
| 113 | 45 | 2·29976 | 0·11002 | 199·42 | 2·39090 | 0·10328 | 245·98 | 49052 |
| 122 | 50 | 2·40978 | 0·10614 | 256·91 | 2·28762 | 0·09950 | 193·92 | 49820 |
| 131 | 55 | 2·51592 | 0·10247 | 328·04 | 2·18812 | 0·09593 | 154·21 | 50587 |
| 140 | 60 | 2·61839 | 0·09897 | 415·33 | 2·09219 | 0·09253 | 123·65 | 51354 |
| 149 | 65 | 2·71736 | 0·09566 | 521·63 | 1·99966 | 0·08931 | 99·922 | 52122 |
| 158 | 70 | 2·81302 | 0·09250 | 650·16 | 1·91035 | 0·08625 | 81·349 | 52889 |
| 167 | 75 | 2·90552 | 0·08953 | 804·49 | 1·82410 | 0·08336 | 66·696 | 53657 |
| 176 | 80 | 2·99505 | 0·08658 | 988·67 | 1·74074 | 0·08050 | 55·048 | 54424 |
| 185 | 85 | 3·08163 | 0·08388 | 1206·8 | 1·66024 | 0·07788 | 45·734 | 55191 |
| 194 | 90 | 3·16551 | 0·08129 | 1463·9 | 1·58236 | 0·07538 | 38·226 | 55959 |
| 203 | 95 | 3·24680 | 0·07879 | 1765·2 | 1·50698 | 0·07295 | 32·135 | 56726 |
| 212 | 100 | 3·32559 | 0·07640 | 2116·4 | 1·43403 | 0·07064 | 27·166 | 57494 |
| 221 | 105 | 3·40199 | 0·07415 | 2523·4 | 1·36339 | 0·06847 | 23·088 | 58261 |
| 230 | 110 | 3·47614 | 0·07196 | 2993·2 | 1·29492 | 0·06635 | 19·721 | 59028 |
| 239 | 115 | 3·54810 | 0·06988 | 3532·6 | 1·22857 | 0·06434 | 16·927 | 59796 |
| 248 | 120 | 3·61798 | 0·06788 | 4149·3 | 1·16423 | 0·06241 | 14·596 | 60563 |
| 257 | 125 | 3·68586 | 0·06597 | 4851·3 | 1·10182 | 0·06057 | 12·642 | 61331 |
| 266 | 130 | 3·75183 | 0·06414 | 5647·2 | 1·04125 | 0·05881 | 10·996 | 62098 |
| 275 | 135 | 3·81597 | 0·06238 | 6545·9 | 0·98244 | 0·05711 | 9·6037 | 62865 |
| 284 | 140 | 3·87835 | 0·06069 | 7557·0 | 0·92533 | 0·05548 | 8·4204 | 63633 |
| 293 | 145 | 3·93904 | 0·05907 | 8690·4 | 0·86985 | 0·05393 | 7·4105 | 64400 |
| 302 | 150 | 3·99811 | 0·05751 | 9956·6 | 0·81592 | 0·05242 | 6·5452 | 65168 |
| 311 | 155 | 4·05562 | 0·05601 | 11366 | 0·76350 | 0·05099 | 5·8010 | 65935 |
| 320 | 160 | 4·11163 | 0·05456 | 12931 | 0·71251 | 0·04959 | 5·1583 | 66702 |
| 329 | 165 | 4·16619 | 0·05319 | 14662 | 0·66292 | 0·04828 | 4·6017 | 67470 |
| 338 | 170 | 4·21938 | 0·05184 | 16572 | 0·61464 | 0·04698 | 4·1176 | 68237 |
| 347 | 175 | 4·27122 | 0·05056 | 18673 | 0·56766 | 0·04576 | 3·6954 | 69005 |
| 356 | 180 | 4·32178 | 0·04932 | 20979 | 0·52190 | 0·04457 | 3·3258 | 69772 |
| 365 | 185 | 4·37110 | 0·04812 | 23502 | 0·47733 | 0·04342 | 3·0014 | 70539 |
| 374 | 190 | 4·41922 | 0·04696 | 26256 | 0·43391 | 0·04231 | 2·7159 | 71307 |
| 383 | 195 | 4·46618 | 0·04586 | 29254 | 0·39160 | 0·04126 | 2·4638 | 72074 |
| 392 | 200 | 4·51204 | 0·04478 | 32512 | 0·35034 | 0·04023 | 2·2405 | 72842 |
| 401 | 205 | 4·55682 | 0·04375 | 36043 | 0·31011 | 0·03924 | 2·0423 | 73609 |
| 410 | 210 | 4·60057 | 0·04274 | 39863 | 0·27087 | 0·03829 | 1·8663 | 74376 |
| 419 | 215 | 4·64331 | 0·04176 | 43986 | 0·23258 | 0·03734 | 1·7084 | 75144 |
| 428 | 220 | 4·68507 | 0·04085 | 48425 | 0·19524 | 0·03649 | 1·5676 | 75911 |
| 437 | 225 | 4·72592 | 0·03994 | 53201 | 0·15875 | 0·03561 | 1·4413 | 76679 |
| 446 | 230 | 4·76586 | 0·03906 | 58326 | 0·12314 | 0·03478 | 1·3278 | 77446 |
| 455 | 235 | 4·80492 | 0·03819 | 63815 | 0·08836 | 0·03395 | 1·2256 | 78213 |
| 464 | 240 | 4·84311 | 0·03740 | 69680 | 0·05441 | 0·03320 | 1·1335 | 78981 |
| 473 | 245 | 4·88051 | 0·03660 | 75947 | 0·02121 | 0·03244 | 1·0501 | 79748 |
| 482 | 250 | 4·91711 | 0·03582 | 82625 | 1̄·98877 | 0·03170 | 0·97447 | 80516 |
| 491 | 255 | 4·95293 | 0·03507 | 89728 | 1̄·95707 | 0·03099 | 0·90588 | 81283 |
| 500 | 260 | 4·98800 |  | 97275 | 1̄·92608 |  | 0·84349 | 82050 |

訳注：誌面では第四・第七の列の差を、相次ぐ二つの行のあいだの高さに組んでいる。ここでは、差を、二つの行のうち上の行に置いた（最後の行は空）。1̄·99278 などは、整数部が −1 の対数。第八の列の 210°（摂氏）の行は、誌面は 1·8663（拡大しても 1·8663 と読める）。第六の列の対数 0·27087 から求めると 1·8658、第九の列の 74376 を第五の列の 39863 で割っても 1·8658 で、誤植と見た。他の行は、第三・第六の列の対数と、第五・第八の列の数、第四・第七の列の差、第九の列（第五×第八）が互いに合うことを計算で確かめた。誌面の見出しの行の中の語の切れ目の連字符（Tempera-ture など）は、つないで起こした。

### ¶260　p.190

> TABLE II.—*Expansive Action of Steam.*
>
> | (1.) Fraction of Cylinder filled with Steam at full pressure =1/<i>s</i> | (2.) Ratio of Expansion =<i>s</i>. | (3.) Coefficient of gross action =Z. Initial Pressure one to four Atmospheres. | (4.) Coefficient of gross action =Z. Initial Pressure four to eight Atmospheres. | (1.) Fraction of Cylinder filled with Steam at full pressure. =1/<i>s</i> | (2.) Ratio of Expansion. =<i>s</i>. | (3.) Coefficient of gross action =Z. Initial Pressure one to four Atmospheres. | (4.) Coefficient of gross action =Z. Initial Pressure four to eight Atmospheres. |
> |---|---|---|---|---|---|---|---|
> | 1·00 | 1·000 | 1·000 | 1·000 | ·54 | 1·852 | 1·586 | 1·580 |
> | ·99 | 1·010 | 1·010 | 1·010 | ·53 | 1·887 | 1·602 | 1·596 |
> | ·98 | 1·020 | 1·020 | 1·020 | ·52 | 1·923 | 1·620 | 1·613 |
> | ·97 | 1·031 | 1·030 | 1·030 | ·51 | 1·961 | 1·637 | 1·630 |
> | ·96 | 1·042 | 1·041 | 1·041 | ·50 | 2·000 | 1·655 | 1·647 |
> | ·95 | 1·053 | 1·051 | 1·051 | ·49 | 2·041 | 1·673 | 1·665 |
> | ·94 | 1·064 | 1·062 | 1·062 | ·48 | 2·083 | 1·691 | 1·683 |
> | ·93 | 1·075 | 1·072 | 1·072 | ·47 | 2·128 | 1·709 | 1·701 |
> | ·92 | 1·087 | 1·083 | 1·083 | ·46 | 2·174 | 1·728 | 1·719 |
> | ·91 | 1·099 | 1·094 | 1·093 | ·45 | 2·222 | 1·748 | 1·738 |
> | ·90 | 1·111 | 1·104 | 1·104 | ·44 | 2·273 | 1·767 | 1·757 |
> | ·89 | 1·124 | 1·115 | 1·115 | ·43 | 2·326 | 1·787 | 1·777 |
> | ·88 | 1·136 | 1·126 | 1·126 | ·42 | 2·381 | 1·808 | 1·796 |
> | ·87 | 1·149 | 1·138 | 1·137 | ·41 | 2·439 | 1·829 | 1·817 |
> | ·86 | 1·163 | 1·149 | 1·149 | ·40 | 2·500 | 1·850 | 1·837 |
> | ·85 | 1·176 | 1·160 | 1·160 | ·39 | 2·564 | 1·871 | 1·858 |
> | ·84 | 1·190 | 1·172 | 1·171 | ·38 | 2·632 | 1·894 | 1·880 |
> | ·83 | 1·205 | 1·183 | 1·183 | ·37 | 2·703 | 1·916 | 1·902 |
> | ·82 | 1·220 | 1·195 | 1·195 | ·36 | 2·778 | 1·939 | 1·924 |
> | ·81 | 1·235 | 1·207 | 1·206 | ·35 | 2·857 | 1·963 | 1·947 |
> | ·80 | 1·250 | 1·219 | 1·218 | ·34 | 2·941 | 1·987 | 1·970 |
> | ·79 | 1·266 | 1·231 | 1·230 | ·33 | 3·030 | 2·012 | 1·994 |
> | ·78 | 1·282 | 1·243 | 1·242 | ·32 | 3·125 | 2·038 | 2·019 |
> | ·77 | 1·299 | 1·256 | 1·255 | ·31 | 3·225 | 2·064 | 2·044 |
> | ·76 | 1·316 | 1·268 | 1·267 | ·30 | 3·333 | 2·091 | 2·070 |
> | ·75 | 1·333 | 1·281 | 1·280 | ·29 | 3·448 | 2·119 | 2·097 |
> | ·74 | 1·351 | 1·294 | 1·292 | ·28 | 3·571 | 2·147 | 2·124 |
> | ·73 | 1·370 | 1·307 | 1·305 | ·27 | 3·704 | 2·176 | 2·152 |
> | ·72 | 1·389 | 1·320 | 1·318 | ·26 | 3·846 | 2·207 | 2·181 |
> | ·71 | 1·408 | 1·333 | 1·331 | ·25 | 4·000 | 2·238 | 2·211 |
> | ·70 | 1·429 | 1·346 | 1·344 | ·24 | 4·167 | 2·270 | 2·242 |
> | ·69 | 1·449 | 1·360 | 1·358 | ·23 | 4·348 | 2·304 | 2·273 |
> | ·68 | 1·471 | 1·374 | 1·371 | ·22 | 4·545 | 2·338 | 2·306 |
> | ·67 | 1·493 | 1·387 | 1·385 | ·21 | 4·762 | 2·374 | 2·341 |
> | ·66 | 1·515 | 1·401 | 1·399 | ·20 | 5·000 | 2·412 | 2·376 |
> | ·65 | 1·538 | 1·416 | 1·413 | ·19 | 5·263 | 2·451 | 2·413 |
> | ·64 | 1·563 | 1·430 | 1·427 | ·18 | 5·556 | 2·492 | 2·452 |
> | ·63 | 1·587 | 1·445 | 1·441 | ·17 | 5·882 | 2·534 | 2·492 |
> | ·62 | 1·613 | 1·459 | 1·456 | ·16 | 6·250 | 2·579 | 2·434 |
> | ·61 | 1·640 | 1·474 | 1·471 | ·15 | 6·667 | 2·626 | 2·579 |
> | ·60 | 1·667 | 1·490 | 1·486 | ·14 | 7·143 | 2·676 | 2·626 |
> | ·59 | 1·695 | 1·505 | 1·501 | ·13 | 7·692 | 2·730 | 2·675 |
> | ·58 | 1·724 | 1·521 | 1·516 | ·12 | 8·333 | 2·786 | 2·728 |
> | ·57 | 1·754 | 1·537 | 1·532 | ·11 | 9·091 | 2·847 | 2·784 |
> | ·56 | 1·786 | 1·553 | 1·547 | ·10 | 10·000 | 2·912 | 2·845 |
> | ·55 | 1·818 | 1·569 | 1·563 |  |  |  |  |

表 II　*水蒸気の膨張の作用*

| (1.) 全圧の水蒸気で満たされるシリンダーの割合 =1/<i>s</i> | (2.) 膨張比 =<i>s</i> | (3.) 作用の総量の係数 =Z。初めの圧力 1〜4 気圧 | (4.) 作用の総量の係数 =Z。初めの圧力 4〜8 気圧 | (1.) 全圧の水蒸気で満たされるシリンダーの割合 =1/<i>s</i> | (2.) 膨張比 =<i>s</i> | (3.) 作用の総量の係数 =Z。初めの圧力 1〜4 気圧 | (4.) 作用の総量の係数 =Z。初めの圧力 4〜8 気圧 |
|---|---|---|---|---|---|---|---|
| 1·00 | 1·000 | 1·000 | 1·000 | ·54 | 1·852 | 1·586 | 1·580 |
| ·99 | 1·010 | 1·010 | 1·010 | ·53 | 1·887 | 1·602 | 1·596 |
| ·98 | 1·020 | 1·020 | 1·020 | ·52 | 1·923 | 1·620 | 1·613 |
| ·97 | 1·031 | 1·030 | 1·030 | ·51 | 1·961 | 1·637 | 1·630 |
| ·96 | 1·042 | 1·041 | 1·041 | ·50 | 2·000 | 1·655 | 1·647 |
| ·95 | 1·053 | 1·051 | 1·051 | ·49 | 2·041 | 1·673 | 1·665 |
| ·94 | 1·064 | 1·062 | 1·062 | ·48 | 2·083 | 1·691 | 1·683 |
| ·93 | 1·075 | 1·072 | 1·072 | ·47 | 2·128 | 1·709 | 1·701 |
| ·92 | 1·087 | 1·083 | 1·083 | ·46 | 2·174 | 1·728 | 1·719 |
| ·91 | 1·099 | 1·094 | 1·093 | ·45 | 2·222 | 1·748 | 1·738 |
| ·90 | 1·111 | 1·104 | 1·104 | ·44 | 2·273 | 1·767 | 1·757 |
| ·89 | 1·124 | 1·115 | 1·115 | ·43 | 2·326 | 1·787 | 1·777 |
| ·88 | 1·136 | 1·126 | 1·126 | ·42 | 2·381 | 1·808 | 1·796 |
| ·87 | 1·149 | 1·138 | 1·137 | ·41 | 2·439 | 1·829 | 1·817 |
| ·86 | 1·163 | 1·149 | 1·149 | ·40 | 2·500 | 1·850 | 1·837 |
| ·85 | 1·176 | 1·160 | 1·160 | ·39 | 2·564 | 1·871 | 1·858 |
| ·84 | 1·190 | 1·172 | 1·171 | ·38 | 2·632 | 1·894 | 1·880 |
| ·83 | 1·205 | 1·183 | 1·183 | ·37 | 2·703 | 1·916 | 1·902 |
| ·82 | 1·220 | 1·195 | 1·195 | ·36 | 2·778 | 1·939 | 1·924 |
| ·81 | 1·235 | 1·207 | 1·206 | ·35 | 2·857 | 1·963 | 1·947 |
| ·80 | 1·250 | 1·219 | 1·218 | ·34 | 2·941 | 1·987 | 1·970 |
| ·79 | 1·266 | 1·231 | 1·230 | ·33 | 3·030 | 2·012 | 1·994 |
| ·78 | 1·282 | 1·243 | 1·242 | ·32 | 3·125 | 2·038 | 2·019 |
| ·77 | 1·299 | 1·256 | 1·255 | ·31 | 3·225 | 2·064 | 2·044 |
| ·76 | 1·316 | 1·268 | 1·267 | ·30 | 3·333 | 2·091 | 2·070 |
| ·75 | 1·333 | 1·281 | 1·280 | ·29 | 3·448 | 2·119 | 2·097 |
| ·74 | 1·351 | 1·294 | 1·292 | ·28 | 3·571 | 2·147 | 2·124 |
| ·73 | 1·370 | 1·307 | 1·305 | ·27 | 3·704 | 2·176 | 2·152 |
| ·72 | 1·389 | 1·320 | 1·318 | ·26 | 3·846 | 2·207 | 2·181 |
| ·71 | 1·408 | 1·333 | 1·331 | ·25 | 4·000 | 2·238 | 2·211 |
| ·70 | 1·429 | 1·346 | 1·344 | ·24 | 4·167 | 2·270 | 2·242 |
| ·69 | 1·449 | 1·360 | 1·358 | ·23 | 4·348 | 2·304 | 2·273 |
| ·68 | 1·471 | 1·374 | 1·371 | ·22 | 4·545 | 2·338 | 2·306 |
| ·67 | 1·493 | 1·387 | 1·385 | ·21 | 4·762 | 2·374 | 2·341 |
| ·66 | 1·515 | 1·401 | 1·399 | ·20 | 5·000 | 2·412 | 2·376 |
| ·65 | 1·538 | 1·416 | 1·413 | ·19 | 5·263 | 2·451 | 2·413 |
| ·64 | 1·563 | 1·430 | 1·427 | ·18 | 5·556 | 2·492 | 2·452 |
| ·63 | 1·587 | 1·445 | 1·441 | ·17 | 5·882 | 2·534 | 2·492 |
| ·62 | 1·613 | 1·459 | 1·456 | ·16 | 6·250 | 2·579 | 2·434 |
| ·61 | 1·640 | 1·474 | 1·471 | ·15 | 6·667 | 2·626 | 2·579 |
| ·60 | 1·667 | 1·490 | 1·486 | ·14 | 7·143 | 2·676 | 2·626 |
| ·59 | 1·695 | 1·505 | 1·501 | ·13 | 7·692 | 2·730 | 2·675 |
| ·58 | 1·724 | 1·521 | 1·516 | ·12 | 8·333 | 2·786 | 2·728 |
| ·57 | 1·754 | 1·537 | 1·532 | ·11 | 9·091 | 2·847 | 2·784 |
| ·56 | 1·786 | 1·553 | 1·547 | ·10 | 10·000 | 2·912 | 2·845 |
| ·55 | 1·818 | 1·569 | 1·563 |  |  |  |  |

訳注：誌面は一つの表を左右の二段に組んでいる（左が 1·00〜·55、右が ·54〜·10）。ここでは誌面のとおり八つの列で起こした。誌面の見出しでは「Coefficient of gross action =Z.」が第三・第四の列にまたがる。·64 の行の (2.) の列は、画像がつぶれて一字が読めない。1·563 と読んだ（1/·64=1·5625）。(2.) の列の ·61 の行の 1·640 と ·31 の行の 3·225 は、誌面でもそう読める。(1.) の列の逆数から計算するとそれぞれ 1·639・3·226 で、末の一桁が違う（丸めの違いか誤植かは決めない）。右の段の (4.) の列の ·16 の行の 2·434 は、誌面でもそう読める。同じ列の前後の値（·17 の 2·492・·15 の 2·579）と計算（6−5<i>s</i><sup>−1/5</sup>≒2·534）から、2·534 の誤植と見た。他の行は、第二の列が第一の列の逆数に、第三の列が 7−6<i>s</i><sup>−1/6</sup> に、第四の列が 6−5<i>s</i><sup>−1/5</sup> に、小数 3 位で合うことを計算で確かめた。

### 注1　p.168

> The following are some additional determinations of the value of γ for atmospheric air, founded upon experiments on the velocity of sound:—
>
> | Observers. | T Centigrade. | <i>a</i> Mètres per second. | γ |
> |---|---|---|---|
> | *Bravais and Martins:* mean of several experiments at temperatures varying from 5° to 11° centigrade, reduced to 0° (Comptes Rendus, xix.) . . . | 0° | 332·37 | 1·40955 |
> | *Moll and Van Beek:* reduced to . . . . . | 0° | 332·25 | 1·40853 |
> | *Stampfer and Myrbach:* reduced to 0° (not corrected for moisture) . . . . . . . | 0° | 332·96 | 1·41456 |
> | *Académie des Sciences,* 1738: (not corrected for moisture) . . . . . . . | 6°·1 | 337·10 | 1·418 |
>
> A variation of one mètre per second in the velocity of sound at 0° corresponds to a variation of ·0085 in the value of γ.

音速の実験に基づく、大気の γ の値の追加の決定をいくつか挙げる。

| 観測者 | T 摂氏 | <i>a</i> メートル毎秒 | γ |
|---|---|---|---|
| *Bravais and Martins:* 摂氏 5° から 11° までの温度での数回の実験の平均を 0° に換算（Comptes Rendus, xix.） | 0° | 332·37 | 1·40955 |
| *Moll and Van Beek:* （0° に）換算 | 0° | 332·25 | 1·40853 |
| *Stampfer and Myrbach:* 0° に換算（湿気の補正なし） | 0° | 332·96 | 1·41456 |
| *Académie des Sciences,* 1738：（湿気の補正なし） | 6°·1 | 337·10 | 1·418 |

0° での音速が毎秒 1 メートル変わると、γ の値は ·0085 変わる。

訳注：観測者の名は訳さずに残した（ブラヴェとマルタン、モルとファン・ベーク、シュタンプファーとミルバッハ、科学アカデミー）。Moll and Van Beek の行は誌面で「reduced to」の後が点の導線で、T の列の 0° に続けて読むと読んだ。誌面の表は、複数行の観測者の欄を右の波括弧で数の行にまとめる。

