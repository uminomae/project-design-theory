# 細かく見ていくと、何が起きるか

<div class="reader-lead glow-card" id="lc-gist"><span class="reader-lead__label">ざっくりいうと</span>
<p>電子を、どこまでも細かく見ていくと、何が見えてくるのでしょうか。物理の答えは、見ること自体が相手を変え、底は見つからず、ある細かさから先は「一個の粒」という像が崩れる、というものです。</p>
<p>pjdhiro は、自分を分けていくメタ認知を、この作業にたとえています。このページは、そのたとえの物理の側を、Claude が教科書や論文で調べて書いたものです。</p>
<p>古典の見え方と量子の見え方の境目が、思ったほどくっきりした線ではないことも見えてきます。</p>
</div>

<p class="reader-summary__title">概要</p>

<div class="reader-lead"><span class="reader-lead__label">問い</span>
電子のような小さなものを、どこまでも細かく見ていくと、何が起きるのか。古典の世界と量子の世界の境目は、どこにあるのか。
</div>

<div class="reader-lead"><span class="reader-lead__label">今の答え</span>
細かく見るには波長の短い光を当てる必要があり、当てるほど相手は弾かれて変わります。電子には、どれだけ細かく調べても内部の構造が見つかっていません。電子をコンプトン波長ほどの範囲に閉じ込めようとすると、電子と陽電子の対が生まれうるようになり、電荷も近づくほど大きく見えます。古典と量子の境目は大きさだけでは決まらず、まわりとの関わり合いで、量子のふるまいが少しずつ薄れていくところに現れます。
</div>

## 見ること自体が、相手を変え始める

<a id="lc-microscope"></a>小さなものを細かく見るには、波長の短い光を当てる必要があります。波長が長いままでは、その長さより細かい所を見分けられないからです。

ハイゼンベルクは 1927 年の論文で、ガンマ線の顕微鏡で電子の位置を測る思考実験を置きました。光が電子に当たると、電子ははね返され（コンプトン効果）、運動量が乱されます。波長を短くするほど位置は細かく決まりますが、その分、電子が受ける運動量の変化も大きくなります。位置を細かく決めるほど運動量は分からなくなる、という不確定性の関係が、ここから導かれました。

見ることは、相手に何かを当てることでもあります。細かく見ようとするほど、当てるものの力が強くなり、見られる側は大きく変わります。

<details><summary>出典</summary>

Hilgevoord, J. & Uffink, J. "The Uncertainty Principle", *Stanford Encyclopedia of Philosophy*（2001 年初出・2016 年改訂。[SEP の本文](https://plato.stanford.edu/entries/qt-uncertainty/)。本文照合済）：§2.2「Heisenberg's argument」。顕微鏡の測定の細かさは照らす光の波長で限られること、ガンマ線のような短い波長では「the Compton effect cannot be ignored」こと、電子が「suffers a recoil which disturbs its momentum」こと。同じ項は、この形の議論が不十分であることと、ハイゼンベルクが 1930 年のシカゴの講義で改めたことも論じています。

</details>

## 分けても、底が見つからない

<a id="lc-size"></a>電子には、どれだけ細かく調べても、内部の構造が見つかっていません。ノースウェスタン大学の Gabrielse 研究室は、電子の大きさに上限を付ける二つの測り方を紹介しています。一つは、電子の磁気モーメントの精密な測定が、理論の予測と合うことから上限を付ける方法です。もう一つは、ヨーロッパの加速器 LEP で、10 TeV のエネルギーの尺度まで電子の構造を探したもので、半径は 2×10<sup>−20</sup> メートルより小さい、とされています。分けても分けても、「これが芯だ」という部品は出てきていません。

電子より大きな陽子では、中に部品があります。けれど、陽子の重さは、部品の重さを足したものになっていません。陽子の質量は 938 MeV で、中の価クォーク（陽子の性質を決めている三つのクォーク）の質量は、一つあたり約 3 MeV です。三つを合わせても、陽子の 1% ほどです。

格子 QCD（クォークとグルーオンの理論を、計算機の上で解く方法）で陽子の質量を分けた一つの研究では、クォークのエネルギーが約 33%、グルーオンの場のエネルギーが約 37%、トレース・アノマリーと呼ばれる量子の効果が約 23%、クォークの質量に関わる項が約 9% でした。陽子の重さの大部分は、中の部品そのものの重さでなく、中で動いているクォークとグルーオンのエネルギーから来ている、という結果です。

<details><summary>出典</summary>

[電子の内部構造の探索](https://cfp.physics.northwestern.edu/gabrielse-group/electron-substructure.html)（ノースウェスタン大学 Gabrielse 研究室。本文照合済）：磁気モーメント（g/2）の測定と QED の予測の一致から構成粒子の質量と半径に上限を付けること、LEP での接触相互作用の探索が「probes for electron structure at the 10 TeV energy scale」こと、その結果の R < 2×10<sup>−20</sup> m（D. Bourilkov, *Phys. Rev. D* 64, 071701R, 2001 として引かれている）。

[Yang, Y.-B. et al.（χQCD Collaboration）(2018)](https://doi.org/10.1103/PhysRevLett.121.212001) "Proton Mass Decomposition from the QCD Energy Momentum Tensor", *Phys. Rev. Lett.* 121, 212001（[arXiv の写し](https://arxiv.org/abs/1808.08677)。本文照合済）：要旨の quark energy 33(4)(4)%・glue field energy 37(5)(4)%・trace anomaly の四分の一 23(1)(1)%・u・d・s のスカラー凝縮 9(2)(1)%（MS‾ スキーム、µ = 2 GeV）。序論の「The masses of the valence quarks in the proton are just ∼3 MeV per quark …, while the total proton mass is 938 MeV」。「1% ほど」は、この二つの数から Claude が割り算したもの。

</details>

## 原子は、小さな太陽系ではない

<a id="lc-cloud"></a>原子を、太陽のまわりを惑星が回るような、小さな太陽系として思い描く絵があります。けれど、量子力学では、電子の居場所は確率の密度で表され、原子核のまわりに雲のように広がります。

水素原子のいちばん低いエネルギーの状態（基底状態）では、確率の密度がいちばん高い点は、原子核のある中心そのものです。一方、中心からの距離ごとに薄い殻に分けて数えると、電子がいちばん見つかりやすい殻は、ボーア半径の殻になります。殻は外へ行くほど広くなるので、点としては中心がいちばん濃く、殻としてはボーア半径がいちばん多い、という二つが両立します。

中心は、電子が避けて回る場所ではなく、いちばん濃いところでした。

<details><summary>出典</summary>

Sean Oh, *Quantum Mechanics and Atomic Physics*, Lecture 17「Hydrogen Atom Probability Distribution」（ラトガース大学 Physics 361 の講義資料。[講義資料の PDF](https://www.physics.rutgers.edu/~ohsean/361/Lectures/lecture17.pdf)。本文照合済）：「We have an electron cloud around the nucleus.」、基底状態（1,0,0）で「What is the position of the highest probability density? r=0」、殻の体積 4πr<sup>2</sup>Δr で数えた「rmp in the ground state of Hydrogen is exactly one Bohr radius!」。

</details>

## ある細かさを越えると、「一個の電子」という像が崩れる

<a id="lc-compton"></a>電子のコンプトン波長は、約 2.426×10<sup>−12</sup> メートルです。これを 2π で割った換算コンプトン波長は、約 3.862×10<sup>−13</sup> メートルです。

電子を、換算コンプトン波長ほどの範囲に閉じ込めようとすると、不確定性の関係から、エネルギーのゆらぎが電子の静止エネルギーほどの大きさになります。相対論のもとでは、このゆらぎで、真空から電子と陽電子の対が生まれうるようになります。そこから先は、一個の電子だけを取り出して見ている、とは言えなくなります。

<a id="lc-screening"></a>場の量子論では、電荷のまわりには、生まれては消える電子と陽電子の対がたくさんある、と描かれます。この対は、誘電体の中の双極子のようにはたらいて電荷を遮り、遠くから見た電荷を小さくします。そのため、近づくほど、つまり高いエネルギーで調べるほど、電荷は大きく見えます。

この電荷の変わり方は、加速器の実験で測られています。LEP の L3 実験は、電子と陽電子の散乱を使い、運動量の受け渡しが大きいほど、電磁気の力の強さ（実効的な微細構造定数）が大きくなることを測り、理論の予測と合うことを確かめました。

<details><summary>詳しく — 微細構造定数の値の変わり方</summary>

電磁気の力の強さを表す微細構造定数 α は、ふだんの低いエネルギーでは逆数が約 137.036 です。L3 の論文の序論は、Z 粒子の質量の尺度では、ほかの測定から見積もった値として逆数が 128.886 ± 0.090 になる、と書いています。L3 自身の測定では、運動量の受け渡しの二乗が 12.25 GeV<sup>2</sup> のときと 3434 GeV<sup>2</sup> のときで、逆数の差が 3.80 ± 1.29 でした。逆数が小さくなるほど、力は強くなります。

</details>

<details><summary>出典</summary>

[CODATA 2022 の推奨値：電子のコンプトン波長](https://physics.nist.gov/cgi-bin/cuu/Value?ecomwl)（NIST。本文照合済）：2.426 310 235 38(76)×10<sup>−12</sup> m。[換算コンプトン波長](https://physics.nist.gov/cgi-bin/cuu/Value?ecomwlbar)（同。本文照合済）：3.861 592 6744(12)×10<sup>−13</sup> m。

Álvarez-Gaumé, L. & Vázquez-Mozo, M. A. "Introductory Lectures on Quantum Field Theory"（CERN-CLAF の講義をもとにした講義録。[arXiv の写し](https://arxiv.org/abs/hep-th/0510040)・第 4 版 2013。本文照合済）：§2 の「The creation of particles is impossible to avoid whenever one tries to locate a particle of mass m within its Compton wavelength」と、Δx ∼ 1/m から ΔE ∼ m が出ること（p.9）。§8.2 の、真空の偏極で電荷のまわりに電子と陽電子の対が生まれ、「These virtual pairs behave as dipoles that, as in a dielectric medium, tend to screen this charge and decreasing its value at long distances」こと、実効的な電荷がエネルギーとともに大きくなること（pp.84–85）。

[L3 Collaboration (2000)](https://doi.org/10.1016/S0370-2693(00)00122-2) "Measurement of the Running of the Fine-Structure Constant", *Phys. Lett. B* 476, 40–48（[arXiv の写し](https://arxiv.org/abs/hep-ex/0002035)。本文照合済）：要旨の α<sup>−1</sup>(−2.1 GeV<sup>2</sup>) − α<sup>−1</sup>(−6.25 GeV<sup>2</sup>) = 0.78 ± 0.26、α<sup>−1</sup>(−12.25 GeV<sup>2</sup>) − α<sup>−1</sup>(−3434 GeV<sup>2</sup>) = 3.80 ± 1.29、「in agreement with theoretical predictions」。序論の α<sup>−1</sup>(0) = 137.035 999 76(50)、α<sup>−1</sup>(m<sub>Z</sub><sup>2</sup>) = 128.886 ± 0.090 と、この変わり方が真空の偏極の補正から来ること。

</details>

## 古典と量子の境目は、くっきりした線ではない

<a id="lc-decoherence"></a>どこから量子のふるまいになり、どこから古典のふるまいになるのか。はっきりした目安は見つかっていません。大きなものは古典、と見なす考え方もありましたが、重さが一トンにもなる低温の重力波の検出器を、量子の振動子として扱わなければならない例が出てきました。大きさだけでは決まらない、ということです。

ツェー（1970 年）とズレック（1981・1982 年）らが進めたデコヒーレンスの考え方では、大きなものは、まわり（環境）から切り離されていることがありません。まわりと関わり合ううちに、重ね合わせという量子のふるまいがまわりへ漏れ出し、古典のように見えるふるまいが現れます。

漏れ出しにかかる時間は、質量や温度、重ね合わせた位置の離れ方で大きく変わります。ズレックの見積もりでは、室温で 1 グラムのものを 1 センチ離した重ね合わせは、10<sup>−23</sup> 秒ほどで失われます。電子では、この時間が、原子の大きさで起きる出来事の時間よりずっと長くなりえます。量子か古典かは、物の種類で決まる二択ではなく、まわりとの関わり合いの度合いで移っていきます。

<details><summary>出典</summary>

Zurek, W. H. (2002) "Decoherence and the Transition from Quantum to Classical—Revisited", *Los Alamos Science* 27, 2–25（1991 年の *Physics Today* の記事を改めたもの。[arXiv の写し](https://arxiv.org/abs/quant-ph/0306072)。本文照合済）：「In the absence of a crisp criterion to distinguish between quantum and classical, an identification of the classical with the macroscopic has often been tentatively accepted.」と、一トンにもなる低温のウェーバー棒を量子の調和振動子として扱う例（p.4）、「Macroscopic systems are never isolated from their environments」とツェー（1970）・ズレック（1981・1982）（p.5）、デコヒーレンスによる有効な境目（p.6）、T = 300 K・m = 1 g・Δx = 1 cm で τ<sub>D</sub> ∼ 10<sup>−23</sup> 秒、電子ではずっと長くなりうること（pp.13–14）。

</details>

## このサイトで、この話を使っているところ

<a id="lc-used"></a>この話は、メタ認知を説明するたとえとして使われています。pjdhiro は、メタ認知をどう説明するかを話す中で、この作業を挙げています。

<strong>pjdhiro の見方：</strong>メタ認知とは、自分を分けていく作業でもあるはずです。止観して、自分の中を対象として指さすように観ていくと、最後に観察する私が残る。それすらも観ようとするところから、観る私と観られる私が同じになる。分けられなくなる。そこからのプロセスは、古典から量子論に変わるような、違う感覚になる。私がメタ認知を説明するとしたら、比喩として最も近いのは、電子をどこまでも細かく見ていく作業に似ていると思う。

このたとえで重ねているのは、細かく見ようとするほど見ること自体が相手を変え、分けていった先で分けられなくなる、という作業の形です。物理の結果を、心の側の論拠にしているのではありません。

- 「[愛は、重力に似ていないか](gravity-love.html#gl-manager)」の 4 章：意思決定から Being 的なものを切り分けていく作業を、メタ認知と、電子を細かく見ていく作業に重ねているところ。
