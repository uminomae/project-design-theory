# 複素平面で考える

<div class="reader-lead glow-card" id="cp-gist"><span class="reader-lead__label">ざっくりいうと</span>
<p>複素数が関わる数学の法則を、分野で絞らずに並べた目次です。</p>
<p>はじめに読むなら、入口に「<a href="euler-unfolded.html">オイラーの等式が、たたんだもの</a>」、おさらいに「<a href="angle-rotation.html">三角関数から複素平面まで、回転を扱うための角度の話だった</a>」と「<a href="rotation-multiplication.html">回転の掛け算</a>」があります。関数の説明書は「<a href="man.html">人類の man</a>」に集めています。</p>
</div>

表の左の列が、その法則を人の意識やプロジェクトの駆動源に仮に当てて考えるページです。右の列は、もとにする法則の名前と短い説明です。

## 考え始めたもの

<!--OPEN-->

<a id="cp-done"></a>

<div class="tablefit cp-main">

| 考えるページ | もとにする法則 |
|---|---|
| <span class="cp-think">[オイラーの等式が、たたんだもの](euler-unfolded.html)</span><span class="cp-think-note">工事中。禅の円と単位円は似ていないか、から、単位円を基本に並べ直して等式がたたんだものを開く</span> | <span class="cp-law"><span class="cp-num">1</span>[オイラーの式](euler-formula.html) `e^{iθ} = cos θ + i sin θ`</span><span class="cp-sub">大きさ 1 の数を掛け続けると、大きさは変わらず、角度だけが進む。それを一つの式で書いたもの</span><span class="cp-sub"><b>働いているもの</b>：回る</span><span class="cp-sub"><b>数直線だと見えないこと</b>：同じ向きに掛け続けても、大きくならずに回り続けること</span> |
| <span class="cp-think">[代数学の基本定理から、構造の類似を考える](fundamental-theorem-of-algebra-analogy.html)</span><span class="cp-think-note">工事中</span> | <span class="cp-law"><span class="cp-num">2</span>[代数学の基本定理](fundamental-theorem-of-algebra.html)</span><span class="cp-sub">x の 2 乗・3 乗…を含む方程式（n 次方程式）は、複素数まで広げると、必ず n 個の答えを持つ（重なる答えも数える）</span><span class="cp-sub"><b>働いているもの</b>：答えが二つ・いくつかに分かれて、平面に並ぶ</span><span class="cp-sub"><b>数直線だと見えないこと</b>：`x² + 1 = 0` の「答えなし」が、平面では数直線の上と下に一つずつ（`i` と `−i`）</span> |

</div>

## 今後考えたいもの

<a id="cp-todo"></a>

<div class="tablefit cp-main">

| 考えるページ | もとにする法則 |
|---|---|
| <span class="cp-think">[起業家の漸化式と、ジュリア集合](julia-potential.html#jp-gaps)</span><span class="cp-think-note">独立したページの代わりの、長い読み物。起業家の一歩をこの式に当てて読む。巻末の、式の所ごとに置いた仮説の一覧から読むと入りやすい</span> | <span class="cp-law"><span class="cp-num">3</span>ジュリア集合（工事中）</span><span class="cp-sub">c を一つ決めて、z から「2 乗して c を足す」をくり返す。遠くへ飛んでいかない z の場所の縁（ふち）。どの c を選ぶかの地図は、マンデルブロ集合と呼ばれる</span><span class="cp-sub"><b>働いているもの</b>：くり返す・回りながら伸び縮みする・縁で分かれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：c = 0 なら、遠くへ飛んでいかない場所は半径 1 の円の内側で、縁はその円。数直線の上では、縁は −1 と 1 の二点にしか見えない</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">4</span>フーリエ変換（工事中）</span><span class="cp-sub">どんな波も、いろいろな速さで回る針を重ねて書ける</span><span class="cp-sub"><b>働いているもの</b>：回る・波になる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：位相（今どこまで回ったか）</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">5</span>リーマンのゼータ関数とリーマン予想（工事中）</span><span class="cp-sub">素数の並び方の不規則さを、平面の上で、ある式が 0 になる点（零点）の並び方で読む</span><span class="cp-sub"><b>働いているもの</b>：波になる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：素数の並びが、波の重ね合わせとして読めること</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">6</span>等角写像（ジューコフスキー変換・メビウス変換。工事中）</span><span class="cp-sub">平面を、小さな角の形を崩さずに曲げて、別の形に写す</span><span class="cp-sub"><b>働いているもの</b>：場所ごとに違う倍率と角度で、伸ばして回す</span><span class="cp-sub"><b>数直線だと見えないこと</b>：円を翼の形に写し、翼を持ち上げる力を計算できる</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">7</span>量子力学の波動関数（工事中）</span><span class="cp-sub">電子などの状態を、場所ごとに大きさと向きを持つ波で書く</span><span class="cp-sub"><b>働いているもの</b>：波になる・打ち消し合う</span><span class="cp-sub"><b>数直線だと見えないこと</b>：二つの波を足すと 0 になる、打ち消し合い（干渉）</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">8</span>留数定理（コーシーの積分定理。工事中）</span><span class="cp-sub">ある点の周りを一周する道に沿って細かく足し合わせると、答えが、その点に残るもの（留数）だけで決まる</span><span class="cp-sub"><b>働いているもの</b>：一周する・回り込む</span><span class="cp-sub"><b>数直線だと見えないこと</b>：数直線の上では難しい足し合わせが、平面へ出て回り込むと解ける</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">9</span>四元数（工事中）</span><span class="cp-sub">複素数を二つ組んだ数で、立体の回転を掛け算一回で書く</span><span class="cp-sub"><b>働いているもの</b>：立体の中で回る</span><span class="cp-sub"><b>数直線だと見えないこと</b>：立体の回転と、回す順番を入れ替えると結果が変わること</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">10</span>リーマン面（複素数の対数 `log z`。工事中）</span><span class="cp-sub">「何乗すればその数になるか」（対数）を平面で考えると、0 の周りを一周するごとに答えが一段ずれる。だから平面を、螺旋の階段のように重ねる</span><span class="cp-sub"><b>働いているもの</b>：回って、一段ずれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：同じ点に戻っても、何周したかが違う</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">11</span>ポアンカレの円板（双曲幾何。工事中）</span><span class="cp-sub">円の中だけで、無限に広がる世界を描く</span><span class="cp-sub"><b>働いているもの</b>：縁へ向かって縮む</span><span class="cp-sub"><b>数直線だと見えないこと</b>：縁に近づくほど、同じ距離が小さく見える。一つの点を通る平行線が何本も引ける</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">12</span>ニュートン法のフラクタル（工事中）</span><span class="cp-sub">答えに少しずつ近づく計算を、平面でくり返す。どの答えに着くかの境目が、どこまで拡大しても細かい模様（フラクタル）になる</span><span class="cp-sub"><b>働いているもの</b>：くり返す・分かれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：近い所から始めれば近い答えに着く、とは限らない</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">13</span>ラプラス変換と z 変換（工事中）</span><span class="cp-sub">揺れるもの（ばね・電気の回路・音）を、平面の上の特別な点（極）の位置で読む。z 変換では、極が半径 1 の円の内なら揺れは消え、外なら膨らみ、円の上なら鳴り続ける（ラプラス変換では、左の半分・右の半分・縦の軸が同じ働きをする）</span><span class="cp-sub"><b>働いているもの</b>：回りながら伸びる・縮む</span><span class="cp-sub"><b>数直線だと見えないこと</b>：揺れが消えるか膨らむかが、平面の位置で一目で分かる</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">14</span>交流回路のフェーザ（工事中）</span><span class="cp-sub">家の電気のように向きが行ったり来たりする電圧と電流を、回る針で書く。二つが 90 度ずれると、行き来するだけの電力（無効電力）になる</span><span class="cp-sub"><b>働いているもの</b>：回る・ずれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：平均すると 0 だが、無いと回らない量</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">15</span>ガウス整数（複素数の素数。工事中）</span><span class="cp-sub">`a + bi`（`a` と `b` は整数）の数で素因数分解する。5 は `(2 + i)(2 − i)`</span><span class="cp-sub"><b>働いているもの</b>：割れて、二つに分かれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：どの素数が二つの平方の和で書けるか（フェルマー）が、平面の素数で分かる</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">16</span>量子ビット（工事中）</span><span class="cp-sub">状態を a\|0⟩ + b\|1⟩ と書く。a と b は複素数で、大きさの二乗を足すと 1 になる。0 と 1 の両方を、複素数の重みで同時に持ち、測ると 0 か 1 のどちらかが出る。状態は球（ブロッホ球）の上の一点で、0 が北極、1 が南極にあたる</span><span class="cp-sub"><b>働いているもの</b>：重なる・測ると分かれる</span><span class="cp-sub"><b>数直線だと見えないこと</b>：0 か 1 かの二択のあいだに、面が広がっていること。二つの複素数の重みが、立体の球を描く足場になる</span> |
| <span class="cp-none">工事中</span> | <span class="cp-law"><span class="cp-num">17</span>`i` の四つの向きと、虚数四進法（工事中）</span><span class="cp-sub">`i` を掛け続けると、`1 → i → −1 → −i → 1` と四回で一周する。クヌースの虚数四進法（`2i` を位の数にする書き方）は、0・1・2・3 の四つの数字だけで、マイナスの記号を使わずにどの複素数も書ける</span><span class="cp-sub"><b>働いているもの</b>：回る・四つで一周する</span><span class="cp-sub"><b>数直線だと見えないこと</b>：数直線の正と負の二つの向きが、平面では四つの向きの一周になること</span> |

</div>
