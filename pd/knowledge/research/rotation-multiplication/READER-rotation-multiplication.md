# 回転の掛け算

ほかの読み物に、「虚軸」や「i を掛けると 90 度回る」という言葉が出てきます。このページでは、掛け算を回転として見る見方を、数直線から順に説明します。数学 III の知識は要りません。

## −1 を掛けると、向きが反対になる

<!--OPEN-->

3 に −1 を掛けると −3 になります。数直線の上では、0 からの距離は 3 のままで、向きだけが反対になります。

これを、0 を中心に 180 度回した、と見ることができます。もう一度 −1 を掛けると、さらに 180 度回って 3 に戻ります。

<div class="microworld glow-card" data-microworld="neg-rotation" role="group" aria-label="対話：−1 を掛けると向きが反対になる">
<p class="mw-title">触ってみる — −1 を掛けると、矢印が回る</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 数直線の上で 0 から 3 を指す矢印に −1 を掛けると、矢印は 0 を中心に 180 度回って −3 を指します。長さは 3 のままです。もう一度掛けると、さらに 180 度回って 3 に戻ります。）</p>
</div>

## 2 回掛けると −1 になる数、i

<!--OPEN-->

180 度を 2 回に分けると、1 回分は 90 度です。1 回掛けると 90 度回る数があれば、2 回掛けると 180 度回り、−1 を掛けたのと同じになります。この数を i と書きます。i × i = −1 です。

ふつうの数は、2 回掛けると 0 以上になります。i は数直線の上には無く、数直線の外にある数です。

<div class="microworld glow-card" data-microworld="i-rotation" role="group" aria-label="対話：i を掛けると 90 度回る">
<p class="mw-title">触ってみる — i を掛けると、90 度回る</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 数直線の上で 0 から 1 を指す矢印に i を掛けると、矢印は 0 を中心に 90 度回って、0 の真上を指します。これが i で、数直線の外です。もう一度 i を掛けると、さらに 90 度回って −1 を指します。）</p>
</div>

## 虚軸 — もとの数直線と直角に立つ軸

<!--OPEN-->

i の付いた数（i、2i、3i、…）は、0 の真上へ、もとの数直線と直角に並びます。この軸を虚軸と呼び、もとの数直線を実軸と呼びます。二つの軸で平面ができ、平面の点の一つひとつが数になります。i を掛けると、どの点も 0 を中心に 90 度回ります。

<div class="microworld glow-card" data-microworld="complex-plane" role="group" aria-label="対話：実軸と虚軸の平面">
<p class="mw-title">触ってみる — 平面の点と、横と縦の値</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 横の実軸で 2、縦の虚軸で 1 の点は、2 + i という数です。この点に i を掛けると、0 を中心に 90 度回って、横 −1、縦 2 の点、−1 + 2i に移ります。）</p>
</div>

## 直角の軸の値は、もとの軸の上では 0

<!--OPEN-->

3i は、0 から真上に 3 離れた点です。実軸の上で測ると、この点から実軸へまっすぐ下ろした先の 0 になります。

<div class="microworld glow-card" data-microworld="project-to-real" role="group" aria-label="対話：実軸の上で測る">
<p class="mw-title">触ってみる — 矢印を起こして、実軸の上で測る</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 長さ 3 の矢印を、実軸の上から虚軸の向きへ起こしていきます。真上から実軸へ下ろした点で測ると、値は 3 から少しずつ小さくなり、真上の 90 度で 0 になります。矢印の長さは 3 のままです。）</p>
</div>

矢印を起こすと、長さは同じでも、実軸の上で測った値は小さくなります。この値は、長さ × cos（角度）で求まります。cos（コサイン）は、斜めの矢印から実軸へまっすぐ下ろしたとき、実軸の上に残る長さの割合です。cos 90 度 = 0 なので、真上に立つ矢印は実軸の上では 0 です。

地図の上で山の高さを測るのと似ています。高さは、地図の平面と直角に立つ向きです。山はあっても、地図が高さの向きを持っていないので、地図の上では 0 と出ます。

<div class="microworld glow-card" data-microworld="map-mountain" role="group" aria-label="対話：地図と山">
<p class="mw-title">触ってみる — 山の高さを変えても、上から見た図では高さはわからない</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 上に横から見た山、下に上から見た山（地図）を並べています。山の高さを変えると、横から見た図では高さが変わります。上から見た図は、どの高さでも同じで、高さはわかりません。）</p>
</div>

ほかの読み物で「虚軸に値があって、しかも 0」と書くときは、この形を指しています。

## 立体を回す — 四元数

<!--OPEN-->

ここまでの回転は、平面の上の回転でした。平面では、回す中心が 0 の一点で、回る向きは右回りか左回りかだけです。30 度回してから 60 度回しても、60 度回してから 30 度回しても、行き先は同じ 90 度です。

立体（三次元）では、回し方が増えます。手に持った本で考えます。本は、前に倒すことも、横に傾けることも、机に置いたまま向きを変えることもできます。回す軸の向きが三つあり、その間のどの向きを軸にしても回せます。

立体を回すには、平面の i にあたる数を三つ使います。i、j、k と書きます。どれも、2 回掛けると −1 になります。

i × i = −1、j × j = −1、k × k = −1

立体では、i を一回掛けると 90 度回る、という平面のような単純な対応にはなりません。i・j・k は、掛ける順序で答えが変わる数です。

1 と、この i・j・k の四つを組み合わせた数を、四元数と呼びます。回す軸の向きと回す角度から一つの四元数が決まり、その四元数で立体の向きを計算できます。ゲームの中でキャラクターや視点を回すときにも、四元数が使われています。

四元数では、掛ける順序で結果が変わります。

i × j = k、j × i = −k

同じ i と j でも、どちらを先に掛けるかで、答えが変わります。立体の回転も、順序で行き先が変わります。本を前に 90 度倒してから右に 90 度回すのと、右に 90 度回してから前に 90 度倒すのとでは、最後に表を向く面が違います。

<div class="microworld glow-card" data-microworld="quaternion-order" role="group" aria-label="対話：順序で行き先が変わる">
<p class="mw-title">触ってみる — 同じ二つの回転でも、順序で向きが変わる</p>
<p class="mw-fallback">（この対話図は JavaScript で動きます。動かない環境では: 左は「前へ 90 度、次に右へ 90 度」、右は「右へ 90 度、次に前へ 90 度」と立方体を回します。同じ二つの回転でも、順序を変えると、最後に手前へ来る面が違います。）</p>
</div>

平面の回転は順序を変えても同じで、立体の回転は順序で変わります。四元数は、立体の回転を計算する道具の一つで、その掛け算も順序で答えが変わります。ただし、i × j と j × i の答え（k と −k）は、立体の回転としては同じ回転に当たります。四元数は、符号を変えても同じ回転を表すからです。順序で行き先が変わるのは、本の例のような回転です。

## このページの言葉が出てくる読み物

<div class="reader-linkcards">
<a class="reader-linkcard glow-link" href="love-driven-dev.html">
<img class="reader-linkcard__thumb" src="../assets/thumbs/project-design.jpg" alt="" width="720" height="378" loading="lazy">
<span class="reader-linkcard__body"><span class="reader-linkcard__title">Love駆動開発と呼びたいもの β</span><span class="reader-linkcard__sub">欠損の章で、欠損駆動思考の体感を「虚軸に値があって、しかも、認知上は 0」とたとえています。</span><span class="reader-linkcard__url">project-design-theory/reader/love-driven-dev.html</span></span>
</a>
<a class="reader-linkcard glow-link" href="three-and-seven.html">
<img class="reader-linkcard__thumb" src="../assets/thumbs/project-design.jpg" alt="" width="720" height="378" loading="lazy">
<span class="reader-linkcard__body"><span class="reader-linkcard__title">なぜ 3 と 7 だけが特別なのか</span><span class="reader-linkcard__sub">実数・複素数・四元数の回り方の違いを使って、人数の話を見ています。</span><span class="reader-linkcard__url">project-design-theory/reader/three-and-seven.html</span></span>
</a>
</div>
