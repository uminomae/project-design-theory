# 人類の man

<div class="reader-lead glow-card" id="man-gist"><span class="reader-lead__label">ざっくりいうと</span>
<p>数学の関数や式を、プログラムの説明書（man ページ）の形で書いて並べたページです。一つの関数ごとに、何を受け取って何を返すか、定義、式に書かれずに置かれている既定値、例、使い所、注意、関連を書き、詳しく解説するページへつなぎます。</p>
<p>いま書いてあるのは exp(z) の一件です。</p>
</div>

<p class="reader-summary__title">概要</p>

このページは、pjdhiro の頼みに、Claude が調べて答える形で作っています。読み物「[オイラーの等式が、たたんだもの](euler-unfolded.html#eo-help)」の巻末で、Claude は exp という関数の説明書に、ページで開いたものを書き足しました。その説明書を読んで、pjdhiro はこう言いました。

<strong>pjdhiro の見方：</strong>このような記述をまとめて、人類の man として呼び出せるようなネタがいいな。ユーモアだけど、LLM には良いのじゃ？

man は、コンピュータで「man exp」のように打つと、その命令や関数の説明書が出てくる仕組みです。このページは、数学の関数を、その形で引けるように並べます。読む人は人でも、AI（LLM）でもかまいません。説明書は文字だけで書き、ほかを読まなくても一件ずつで意味が通るようにしています。

<div class="reader-lead"><span class="reader-lead__label">構成</span>
<ul class="reader-lead__list">
<li><b><a href="#man-howto">説明書の読み方</a></b>：見出しの並び</li>
<li><b><a href="#man-exp">exp(z)</a></b>：複素数 z を受け取り、e の z 乗を返す</li>
<li><b><a href="#man-todo">まだ書いていない説明書</a></b>：工事中</li>
</ul>
</div>

## 説明書の読み方

<!--OPEN-->

<a id="man-howto"></a>どの説明書も、次の見出しを、この順で使います。関数によって要らない見出しは省き、その関数にだけ要る見出し（exp の「周期」など）は足します。

<div class="tablefit">

| 見出し | 書くこと |
|---|---|
| 一行目 | 関数の名前と、何を受け取り、何を返すか |
| 定義 | その関数を決める式や決まり |
| 何をしているか | 返した値が、平面や数直線の上で何をするか |
| 前提（省略されている既定値） | 式に書かれずに置かれているもの。平面の上だけで使う限り書かなくても困らないので、ふつうの説明書には書かれにくいもの |
| 例 | 入れる値と、返る値 |
| 使い所 | その関数が使われてきた場面 |
| 注意 | 取り違えやすい所 |
| 関連 | 一緒に引くとよい関数 |
| 詳しく読むページ | このサイトの中で、その関数を解説するページ |

</div>

## exp(z)

<!--OPEN-->

<a id="man-exp"></a>複素数の指数関数です。オイラーの等式 e<sup>iπ</sup> + 1 = 0 は、この関数に iπ を入れると −1 が返る、という一行にあたります。

この説明書は、元になったものに書き足した形です。元は、数学のライブラリの厚めの説明書（NumPy の exp や Wolfram Language の Exp など）によく書かれている中身です。そこに、読み物「[オイラーの等式が、たたんだもの](euler-unfolded.html#eo-help)」で開いたものを書き足しました。<span class="help-add">色の付いた行</span>が、書き足した所です。

<pre class="help-doc" id="man-exp-doc"><b>exp(z)</b>
  複素数 z を受け取り、e の z 乗を返す。

  定義
    e ≈ 2.71828。実数 x では、e^x は (1 + x/n)^n の n をどこまでも大きくした先の値。
    複素数 z でも、同じ式 (1 + z/n)^n の行き着く先として決められる。

  複素数のとき
    z = a + ib（a と b は実数）なら、e^z = e^a (cos b + i sin b)。
    e^a が大きさ、cos b + i sin b が大きさ 1 の向き（角度 b が位相）。

<span class="help-add">  何をしているか</span>
<span class="help-add">    返した値をほかの数に掛けると、平面の全体を、原点を中心に、大きさ e^a 倍に伸ばし、角度 b だけ左回りに回す。</span>
<span class="help-add">    a = 0 なら、伸ばさずに回すだけ（値は半径 1 の円の上を進む）。</span>

<span class="help-add">  なぜ底が e か</span>
<span class="help-add">    底を 1 でない正の数 c にすると、c^(iθ) = e^(iθ ln c) は、半径 1 の円の上を速さ |ln c| で進む</span>
<span class="help-add">    （c < 1 なら逆回り。c = 2 なら速さ約 0.69）。</span>
<span class="help-add">    左回りに速さがちょうど 1 になり、θ がそのまま円の上の道のりになるのは、底が e のときだけ。</span>
    微分しても形が変わらない（e^x を微分すると e^x）のも、底が e のときだけ。

<span class="help-add">  前提（省略されている既定値）</span>
<span class="help-add">    回す軸：平面に直交する奥行きの向き。複素数には軸の置き場がなく、式に出てこない。</span>
<span class="help-add">    掛ける順番：複素数の掛け算は、順番を入れ替えても結果が同じなので、順番は式に出てこない。</span>
<span class="help-add">    立体で回すときは、軸を長さ 1 の純虚の四元数 u（u² = −1）で書き、q = e^(uθ/2) で、</span>
<span class="help-add">    純虚の四元数 v（位置）を前と後ろから挟む（v' = q v q⁻¹）。</span>
<span class="help-add">    そこでは掛ける順番を入れ替えると結果が変わる。</span>
<span class="help-add">    回転そのものは θ = 2π の一周で戻るが、回す数 q は一周で −1、二周（θ = 4π）でやっと 1 に戻る。</span>

  周期
    e^(z + 2πi) = e^z。虚の向きに 2π 進むごとに、同じ値に戻る。
<span class="help-add">    回った量で読むと：0 周、1 周、2 周……は、どれも同じ点に来る。</span>
<span class="help-add">    だから逆の関数 log は、何周したかの分だけ 2πi ずつ違う値が出て、一つに決まらない。</span>

  例
    exp(0) = 1　　exp(iπ) = −1　　exp(2πi) = 1
<span class="help-add">    exp(iπ) は半周、exp(2πi) は一周。肩（指数）を半分にすると、一周が半周になる。</span>
<span class="help-add">    オイラーの等式 e^(iπ) + 1 = 0 は、exp(iπ) = −1 の −1 を左へ移して、1 と 0 も式に入れた形。</span>

<span class="help-add">  返さないもの</span>
<span class="help-add">    e^z は、どの z でも 0 にならない（e^z × e^(−z) = 1 なので）。値はいつも有限。</span>

<span class="help-add">  球の上で（ステレオ投影）</span>
<span class="help-add">    半径 1 の球を、赤道の高さの平面に置く。北極と平面の点を結ぶ線が球と交わる所に写すと、</span>
<span class="help-add">    0 は南極に、半径 1 の円は赤道に来る。平面に足す一点 ∞ が、北極に来る。</span>
<span class="help-add">    a = 0 の値（半径 1 の円）は赤道を回る。a を負の向きに限りなく大きくすると（a → −∞）e^z は 0（南極）へ、</span>
<span class="help-add">    正の向きに限りなく大きくすると（a → +∞）∞（北極）へ近づくが、どちらにも着かない。</span>

<span class="help-add">  地図で読むと（メルカトル図法）</span>
<span class="help-add">    z = a + ib を船の地図（メルカトル図法）の点と見ると、exp は地図を平面に訳す。</span>
<span class="help-add">    縦の a は大きさ e^a に、横の b は回転に訳され、横は 2π ごとに同じ所を指す。</span>

  使い所
    微分方程式（増え方が今の量に比例するもの）、確率と統計（正規分布）。
    波、交流回路（フェーザ）、信号処理（フーリエ変換）、量子の時間の変化、<span class="help-add">立体の回転（四元数へ広げた exp）</span>。

  注意
    複素数では、(e^z)^w = e^(zw) がいつも成り立つとは限らない。
    たとえば e^(2πi) = 1 なので、1 の 1/2 乗を (e^(2πi))^(1/2) と読むと e^(πi) = −1 になり、
    ふつうに決める値（主値）の 1 と食い違う。
    多くのライブラリの複素数の log は、何周したかを一つに決めた値（主値）を返す。
    主値の虚の部分は、−π より大きく π 以下。
    符号付きのゼロを区別するライブラリでは、負の実軸の下側から来ると −π になる。
    log 0 は定まらない。
    実数の exp(x) は、倍精度の数では x が約 709.78 を超えると大きすぎて表せず、無限大になる。

  関連
    log（逆の関数）、sin、cos、べき乗<span class="help-add">、四元数の回転 q v q⁻¹</span></pre>

<p>詳しく読むページ：</p>

- [オイラーの式](euler-formula.html)：e<sup>iθ</sup> が、半径 1 の円の上を道のり θ だけ回った点であることを、中学の数学で読める言葉で解説します（定義と解説）。
- [オイラーの等式が、たたんだもの](euler-unfolded.html)：禅の円と単位円は似ていないか、という問いから、単位円を基本に並べ直して等式を開き、前提（回す軸・掛ける順番・二周で戻る回し手）と、球の上と地図の上の見方を確かめます。この説明書の色の付いた行は、ここから来ています。
- [三角関数から複素平面まで、回転を扱うための角度の話だった](angle-rotation.html)：角度を回った量として読む、おさらいです。
- [禅の円を、高校の数学で読む](zen-circle-hs.html)：底が e のときだけ速さ 1 で回ることと、球の上の見方を、高校の数学だけで追います。

<details><summary>詳しく — 説明書の数を、その場で確かめるコード</summary>

上の説明書の数のうち、計算で確かめられるものを、JavaScript で確かめます。書き換えて「実行」を押すと、別の値でも試せます。

<div class="code-run">

```
// 複素数 a + ib を [a, b] の並びで書き、e^(a+ib) = e^a (cos b + i sin b) を返す
function exp([a, b]) {
  return [Math.exp(a) * Math.cos(b), Math.exp(a) * Math.sin(b)];
}
const r = (v) => v.map((x) => +x.toFixed(6) + 0); // + 0 で −0 を 0 にする

console.log("exp(iπ)  =", r(exp([0, Math.PI])));      // 半周で −1
console.log("exp(2πi) =", r(exp([0, 2 * Math.PI])));  // 一周で 1

// 周期：z と z + 2πi は同じ値
console.log(r(exp([0.3, 1.2])), r(exp([0.3, 1.2 + 2 * Math.PI])));

// 底 c のとき、円の上を進む速さは ln c（負なら逆回り）
for (const c of [2, Math.E, 10, 0.5]) {
  console.log("底", +c.toFixed(4), "の速さ", +Math.log(c).toFixed(4));
}

// (1 + z/n)^n は、n を大きくすると e^z に近づく（z = iπ）
function mul([a, b], [c, d]) { return [a * c - b * d, a * d + b * c]; }
for (const n of [4, 16, 100, 10000]) {
  let p = [1, 0];
  for (let k = 0; k < n; k++) p = mul(p, [1, Math.PI / n]);
  console.log("n =", n, r(p));
}

// 倍精度で表せる exp(x) の境目
console.log("境目の x =", Math.log(Number.MAX_VALUE), Math.exp(709.79));
```

</div>

</details>

## まだ書いていない説明書

<!--OPEN-->

<a id="man-todo"></a>次の説明書は、工事中です。

- log(z)（工事中）：exp の逆の関数。何周したかの分だけ値が開く。
- z ↦ z² + c のくり返し（工事中）：ジュリア集合を描く式。読み物「[起業家の漸化式と、ジュリア集合](julia-potential.html)」が使っている。
- q v q⁻¹（工事中）：四元数で立体を回す式。
