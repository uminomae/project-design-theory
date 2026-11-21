# 起業家の漸化式と、ジュリア集合

<figure class="jp-hero"><img src="../assets/img/julia-entre.jpg" alt="生成 AI（Google の Gemini）で作った絵。紺色の宇宙を背景に、金色に光るフラクタルの枝が渦を巻いて広がり、中心へ寄っていく点の並びと、重力で曲がったような格子が重なる。左上に、z → z² + c をくり返す疑似コード「function walk(z, c, n)」の三行が英語で書かれている。数式どおりに計算した図ではない" width="1024" height="572"><figcaption>pjdhiro が生成 AI（Google の Gemini）で作った絵です。数式どおりに計算した図ではありません。</figcaption></figure>

<p class="reader-summary__title">概要</p>

起業家の歩みをジュリア集合の式に当てはめる、と聞くと、こじつけに見えるかもしれません。このページを読む効果について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>こじつけのような論であることは否定しません。ジュリア集合に当てはめようとしている、というのは、むしろその通りで、それによって発散思考をしたい。ゴールでなく、次の足場としての発散です。

<p class="reader-lead"><span class="reader-lead__label">工事中</span>工事中のページです。式への当てはめは、どれも仮説として置いたもので、論証ではありません。</p>

出発点は、pjdhiro の次の見立てです。

<strong>pjdhiro の見方：</strong>漸化式は、起業家のよう。Love と呼びたいものは、重力のようにドリフトする。それは、ジュリア集合の漸化式のようだ。

起業家は、一歩の結果を次の一歩の出発にして進んでいるのではないか。そうなら、前の値から次の値を決める漸化式と、同じ形です。

<figure class="glow-card reader-figure" id="jp-akinai-top"><svg viewBox="0 0 480 280" role="img" aria-label="「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図。左の小さな木を深く進み、外れの枝には×が付いて戻る。見つけた所の星から、条件を変えた次の木が立ち、そこでも外れと星があり、さらに次の木が立っていく" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto"><defs><marker id="akn-a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#5b6476"/></marker></defs><rect x="0" y="0" width="480" height="280" rx="10" fill="#ffffff"/><text x="12" y="24" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">「商いは、飽きない」を、入れ子の深さ優先探索で描く</text><g stroke-width="2.4" stroke-linecap="round"><line x1="60" y1="70" x2="30" y2="130" stroke="#24407a"/><line x1="60" y1="70" x2="90" y2="130" stroke="#24407a"/><line x1="90" y1="130" x2="75" y2="190" stroke="#24407a"/><line x1="90" y1="130" x2="105" y2="190" stroke="#24407a"/><line x1="215" y1="110" x2="190" y2="170" stroke="#c4573f"/><line x1="215" y1="110" x2="240" y2="170" stroke="#c4573f"/><line x1="240" y1="170" x2="225" y2="230" stroke="#c4573f"/><line x1="240" y1="170" x2="255" y2="230" stroke="#c4573f"/><line x1="360" y1="150" x2="340" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/><line x1="360" y1="150" x2="380" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5b6476" stroke-width="1.3" stroke-dasharray="4 3"><path d="M115,186 Q175,186 209,120" marker-end="url(#akn-a)"/><path d="M235,226 Q300,228 353,158" marker-end="url(#akn-a)"/></g><circle cx="60" cy="70" r="5.5" fill="#24407a"/><circle cx="90" cy="130" r="4" fill="#24407a"/><circle cx="240" cy="170" r="4" fill="#c4573f"/><circle cx="215" cy="110" r="5.5" fill="#c4573f"/><circle cx="360" cy="150" r="5.5" fill="#9a7d0a"/><g stroke="#5b6476" stroke-width="2"><line x1="24" y1="124" x2="36" y2="136"/><line x1="36" y1="124" x2="24" y2="136"/><line x1="69" y1="184" x2="81" y2="196"/><line x1="81" y1="184" x2="69" y2="196"/><line x1="184" y1="164" x2="196" y2="176"/><line x1="196" y1="164" x2="184" y2="176"/><line x1="249" y1="224" x2="261" y2="236"/><line x1="261" y1="224" x2="249" y2="236"/></g><path d="M105,181 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><path d="M225,221 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="60" y="56" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#24407a">試す（いまの所）</text><text x="215" y="96" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#c4573f">条件を変えた木で、試す</text><text x="360" y="136" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">また次の木で、試す</text><text x="400" y="232" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#9a7d0a">…</text><text x="240" y="256" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">× 外れ（戻って次の枝へ。やってみたことは経験に残る）　★ 見つけた</text><text x="240" y="272" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#1d2433">外れたら次の枝へ、見つけたら次の木へ。やめずに続けるのが「飽きない」</text></svg><figcaption>「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図です。左の木を深く進み、外れ（×）なら戻って次の枝へ、何かを見つけたら（★）、そこから条件を変えた次の木で、また試します。木ははじめから一本あるのでなく、進むうちに立っていきます。第一部で、疑似コードと一緒に見ます。Claude が描いた図です。</figcaption></figure>

このページは、その一歩の中で、起業家の中の自己と自己が掛け合わさるようなことが起きている、と仮に定めて見ます。自己が一つでないなら、掛け合わさった分は、どちらか一つの自己からは出てきません。周りからは「人に会って決める」のような単純なくり返しに見えても、その一歩は、言葉にできない、認知し得ないものを含んでいるのかもしれません。その一歩ごとに、Love と呼びたいものが、重力のように、歩みを同じ向きへ同じだけ引き寄せているのかもしれません。

式に当てると `z → z² + c` になりそうです。`z` を起業家の思考・心理・行動（気づきや決定も含む）、`z²` を起業家の中で起きる自己と自己の掛け算、`c` を Love と呼びたいものの重力と、仮に置きます。これは、[ジュリア集合](#jp-about-julia)を描く式です。0 から始めて式をくり返し、出てきた値を順に平面へ点として打っていくと（このページでは「前へ打つ」と言います）、`c` によっては、一か所に寄る渦になります。そこから一歩ずつ逆に遡ると、ジュリア集合の込み入った境目になります。

<p class="jp-peek-chips"><a href="#jp-about-julia"><img src="../assets/img/julia-thumb.png" alt="" width="96" height="96">ジュリア集合とは</a></p>

<details class="acc" id="jp-about-julia" data-peek data-peek-dock="ジュリア集合とは" hidden><summary><img class="jp-acc-thumb" src="../assets/img/julia-thumb.png" alt="" width="96" height="96">詳しく — ジュリア集合とは</summary>

ジュリア集合は、`z → z² + c` のような簡単な式をくり返すと現れる形です。名は、フランスの数学者ガストン・ジュリアにちなみます。

<figure class="glow-card reader-figure"><div class="jp-pair"><img src="../assets/img/julia-set-c-right.png" alt="c = −0.8 + 0.16i のジュリア集合。渦を巻く細い枝が、左右に連なる。背景の青は、遠くへ行く点" width="520" height="520" loading="lazy"><img src="../assets/img/julia-set-c-left.png" alt="c = −0.12 + 0.75i のジュリア集合。淡い色の塗りが、くびれでつながった丸い房の連なりになる。背景の青は、遠くへ行く点" width="520" height="520" loading="lazy"></div><figcaption>左は <code>c = −0.8 + 0.16i</code>、右は <code>c = −0.12 + 0.75i</code>。左の <code>c</code> は、0 から打つと遠くへ行く値で、遠くへ行かない点はひとつながりにならず、細かなかけらに散ります。左の淡い点は、計算した回数では遠くへ行かなかった点です。右の淡い色は、くり返しても遠くへ行かない点で、その縁がジュリア集合です。青は遠くへ行く点で、明るいほど、遠くへ行くまでに多くの歩数がかかった点です。どちらも、このページで計算して描きました（計算は Claude）。</figcaption></figure>

- `z` も `c` も、平面の上の一点で表せる数（複素数）です。`c` を一つ決め、出発点の `z` を一つ選んで、二乗して `c` を足す、をくり返します。
- 二乗すると、点は、原点から見た角度が二倍になり、原点からの距離が二乗になります（図：[二乗を手で動かす](#jp-sq)）。`c` を足すと、毎回、同じ向きに同じだけずれます（章「c は、一歩ごとに同じだけ引き寄せる」）。
- 出発点によって、くり返すうちに限りなく遠くへ行く点と、いつまでも遠くへ行かない点に分かれます。遠くへ行かない点の集まりの縁（境目）が、ジュリア集合です。
- 境目は、ほとんどの `c` で、どれほど拡大しても込み入った模様が続きます（章「どの大きさでも同じ形なら、至る所に現れる」）。形は `c` ごとに違い、`c = 0` のときは円です。
- `c` を平面のどこに置くと境目がひとつながりになるかを塗った地図が、マンデルブロ集合です。このページの図の「c を選ぶ」の黒い形がそれです。その本体の大きなハート形の中に `c` があると、0 から打った値は一点に寄ります（章「値を前へ打つと渦になり、遡るとジュリア集合の形になる」）。
- 一歩を逆に戻すと、平方根が二つあるので、点は二つに分かれます。遡った点は、境目に集まっていきます。このページは、この遡る向きから見ます（章「ジュリア集合を、逆にたどる」）。

出典：J. Milnor (1990) "[Dynamics in One Complex Variable: Introductory Lectures](https://arxiv.org/abs/math/9201272)"（arXiv の本文で照合済）。くり返しても遠くへ行かない点の集まり（充填ジュリア集合）の縁がジュリア集合であることは、§17 の補題 17.1（p.17-1）。マンデルブロ集合の定め（0 から打った値が遠くへ行かない `c` の集まりで、そのとき形がひとつながりになる）は、付録 F（p.F-1）。

</details>

この見立てから、次の問いが立ちました。

<strong>pjdhiro の問い：</strong>ジュリア集合のような何かが、神・愛・美のポテンシャルなのではないか。

ここでのポテンシャルは、pjdhiro の言葉では「場と呼びたいような、可能性」です。第三部では、同じ問いを、起業家の行動の結果は、そもそもどんなポテンシャルだったのか、という側から問い直します。

<div class="reader-lead"><span class="reader-lead__label">今の答え</span>
このページは、起業家の一歩の中で、自己と自己の掛け算のようなものが起きている、と見ます。自己が一つでないなら、掛け合わさる自己達そのものが、まだ形になっていない可能性です。pjdhiro はそれを「脳内の自己と自己の掛け合わせなら、脳内の自己”達”が可能性だよね」と言いました。その可能性の場は、どんな形をしているのか。Love と呼びたいものを駆動源として、起業家が意思決定していると見たら、その場はジュリア集合のようなものかもしれません。これがこのページの主題で、問いへの答えは、美の定義から入った四段の仮説として置いています。ジュリア集合のような形が神・愛・美のポテンシャルの場で、美は起業家のエネルギーに近い、と結びます。
</div>

<div class="reader-lead"><span class="reader-lead__label">構成</span>
<p>前半（第一部・第二部）は、起業家の行動の形を見て、ジュリア集合の式の変数に、起業家の何に当たるかを仮説として当てます。後半（第三部・第四部）は、その式のふるまいを、神・愛・美として、Love駆動開発の視点で解釈していきます。</p>
<ul class="reader-lead__list">
<li><b><a href="#jp-recurrence">第一部 起業家の行動は、入れ子の深さ優先探索のよう</a></b>：「商いは、飽きない」を入れ子の深さ優先探索の木で描き、起業家の行動をその形で見る。ほかの意思決定の論は、同じ木を別の位置から見たものとして対比する</li>
<li><b><a href="#jp-rec-def">第二部 それは、ジュリア集合の漸化式のようだ</a></b>：ジュリア集合の漸化式の変数が、起業家の何に当たるかを一つずつ見る（一歩は漸化式のくり返し、<code>z</code> は起業家の思考・心理・行動、<code>z²</code> は起業家の中で起きる自己と自己の掛け算、<code>c</code> は Love と呼びたいものの重力）。一歩を平面の上で計算して見る</li>
<li><b><a href="#part-3">第三部 式を逆にたどると、どんなポテンシャルが見えるか</a></b>：起業家の行動の結果は、そもそもどんなポテンシャルだったのか、と問い、式を逆にたどる。前へ打った値は渦、遡った値はジュリア集合の境目になる。その境目を、起業家を駆るものが出てくるポテンシャルの場と見る</li>
<li><b><a href="#jp-four">第四部 美の定義から入った、四段の仮説</a></b>：美の側から同じ場に近寄り、ジュリア集合のような形が神・愛・美のポテンシャルの場だと仮に置いて、最後に、美は起業家のエネルギーに近い、と結ぶ</li>
<li><b><a href="#jp-gaps">巻末</a></b>：式の所ごとに置いた仮説と、触れていた論。原典を読む順</li>
</ul>
</div>

<!--PART:第一部|起業家の行動は、入れ子の深さ優先探索のよう-->

## 深さ優先探索は、見つけた所から入れ子になって続く

<!--OPEN-->

<a id="jp-recurrence"></a><a id="jp-dfs"></a>起業家は、どう決めて進むのか。pjdhiro は、その進み方を、計算機の深さ優先探索のように見ています。サラスバシーの語ではなく、pjdhiro の見立てです。見立ての始まりは、リアルオプションが話題になったときの、一言でした。

<strong>pjdhiro の体験：</strong>リアルオプションの視点が話題になったとき、再帰と反復の関数の違いについて、思いつきで「再帰を使いたい時って、構造を繰り返してる時なんです。起業家みたいに」と言ったことがある。その時、「商いとは飽きない」という言葉を思い出した。

<strong>pjdhiro の見方：</strong>再帰で書きたくなるのは、深さ優先探索のようなプロセスだからだと思う。ツリーを扱う際の反復、そこでの試行錯誤。起業家や研究者のような、愚直に飽きずにやる姿勢を言いたかったのだと思う。

深さ優先探索は、木の形をした分かれ道をたどる手順です。一つの枝を選んだら、行けるところまで深く進み、行き止まりや外れなら、一つ前の分かれ目まで戻って、まだ試していない次の枝へ進みます。

探索は、一本の木を一度たどって終わり、ではありません。

<strong>pjdhiro の見方：</strong>DFS の先で見つけたら、そこから、条件やパラメータを変えて、次の探索が違うツリーに対して始まるんじゃないかな。DFS に DFS が入れ子になっている、ということです。というか、常識的にそうでは？ DFS を一回やって人生終わり、ではないよね。

「商いとは飽きない」を、この入れ子の深さ優先探索の形で、木と疑似コードに書いてみます。図と疑似コードは Claude が書いたものです。

<figure class="glow-card reader-figure" id="jp-akinai"><svg viewBox="0 0 480 280" role="img" aria-label="「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図。左の小さな木を深く進み、外れの枝には×が付いて戻る。見つけた所の星から、条件を変えた次の木が立ち、そこでも外れと星があり、さらに次の木が立っていく" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto"><defs><marker id="akn-b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#5b6476"/></marker></defs><rect x="0" y="0" width="480" height="280" rx="10" fill="#ffffff"/><text x="12" y="24" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">「商いは、飽きない」を、入れ子の深さ優先探索で描く</text><g stroke-width="2.4" stroke-linecap="round"><line x1="60" y1="70" x2="30" y2="130" stroke="#24407a"/><line x1="60" y1="70" x2="90" y2="130" stroke="#24407a"/><line x1="90" y1="130" x2="75" y2="190" stroke="#24407a"/><line x1="90" y1="130" x2="105" y2="190" stroke="#24407a"/><line x1="215" y1="110" x2="190" y2="170" stroke="#c4573f"/><line x1="215" y1="110" x2="240" y2="170" stroke="#c4573f"/><line x1="240" y1="170" x2="225" y2="230" stroke="#c4573f"/><line x1="240" y1="170" x2="255" y2="230" stroke="#c4573f"/><line x1="360" y1="150" x2="340" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/><line x1="360" y1="150" x2="380" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5b6476" stroke-width="1.3" stroke-dasharray="4 3"><path d="M115,186 Q175,186 209,120" marker-end="url(#akn-b)"/><path d="M235,226 Q300,228 353,158" marker-end="url(#akn-b)"/></g><circle cx="60" cy="70" r="5.5" fill="#24407a"/><circle cx="90" cy="130" r="4" fill="#24407a"/><circle cx="240" cy="170" r="4" fill="#c4573f"/><circle cx="215" cy="110" r="5.5" fill="#c4573f"/><circle cx="360" cy="150" r="5.5" fill="#9a7d0a"/><g stroke="#5b6476" stroke-width="2"><line x1="24" y1="124" x2="36" y2="136"/><line x1="36" y1="124" x2="24" y2="136"/><line x1="69" y1="184" x2="81" y2="196"/><line x1="81" y1="184" x2="69" y2="196"/><line x1="184" y1="164" x2="196" y2="176"/><line x1="196" y1="164" x2="184" y2="176"/><line x1="249" y1="224" x2="261" y2="236"/><line x1="261" y1="224" x2="249" y2="236"/></g><path d="M105,181 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><path d="M225,221 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="60" y="56" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#24407a">試す（いまの所）</text><text x="215" y="96" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#c4573f">条件を変えた木で、試す</text><text x="360" y="136" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">また次の木で、試す</text><text x="400" y="232" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#9a7d0a">…</text><text x="240" y="256" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">× 外れ（戻って次の枝へ。やってみたことは経験に残る）　★ 見つけた</text><text x="240" y="272" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#1d2433">外れたら次の枝へ、見つけたら次の木へ。やめずに続けるのが「飽きない」</text></svg><figcaption>「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図です。下の疑似コードの <code>試す</code> の一回が、木を一本たどることに当たります。外れ（×）なら戻って次の枝へ、見つけたら（★）、条件を変えた次の木で、次の <code>試す</code> が始まります。Claude が描いた図です。</figcaption></figure>

```
# 商いは、飽きない
function 試す(いまの所):
  for 次の手 in 打てる手(いまの所):
    結果 = やってみる(次の手)
    経験に足す(結果)
    if 外れ(結果):
      continue                    # 戻って次の枝へ
    if 見つけた(結果):
      試す(条件を変えた木(結果))    # 見つけた所から、違う木で次の探索
      return
    試す(結果)                     # その枝を深く
```

打てる手は、手持ちの手段から出します。外れても、やってみたことは経験として残ります。当たりなら、出てきた結果に `試す` をもう一度当てて、その枝を深く進みます。何かを見つけたら、条件を変えた違う木で、次の `試す` が始まります。「試す」という一つの形（構造）を、くり返し当てていくので、自分を呼ぶ関数（再帰）で書きたくなります。外れたら戻って次の枝へ、見つけたら次の木へ、をやめずに続けるのが、「飽きない」です。

起業家の行動は、この入れ子の深さ優先探索のようなものではないでしょうか。

## それ以外の意思決定の論は、同じ形の木を、別の位置から見ている

<!--OPEN-->

<a id="jp-others"></a>意思決定の論も、決めて進む形を木で描いてきました。並べると、入れ子の深さ優先探索が、ほかの見方とどこで違うのかが見えます。下の図は、同じ形の木を、三つの位置から見たものです。

<figure class="glow-card reader-figure" id="jp-trees"><div class="jp-trees"><svg viewBox="0 0 260 270" role="img" aria-label="一つ目の木。木の全部が描かれ、先の端の八つの点がどれも見込みで比べられ、根元から一本の道が太く選ばれている" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">① 木の全部を見比べる</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">決定ツリー・リアルオプション・コーゼーション</text><g stroke="#9aa3b5" stroke-width="1.4"><line x1="130" y1="70" x2="70" y2="120"/><line x1="130" y1="70" x2="190" y2="120"/><line x1="70" y1="120" x2="40" y2="170"/><line x1="70" y1="120" x2="100" y2="170"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="190" y1="120" x2="220" y2="170"/><line x1="40" y1="170" x2="25" y2="220"/><line x1="40" y1="170" x2="55" y2="220"/><line x1="100" y1="170" x2="85" y2="220"/><line x1="100" y1="170" x2="115" y2="220"/><line x1="160" y1="170" x2="145" y2="220"/><line x1="160" y1="170" x2="175" y2="220"/><line x1="220" y1="170" x2="205" y2="220"/><line x1="220" y1="170" x2="235" y2="220"/></g><g stroke="#24407a" stroke-width="3.2" stroke-linecap="round"><line x1="130" y1="70" x2="190" y2="120"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="160" y1="170" x2="175" y2="220"/></g><g fill="#24407a"><circle cx="130" cy="70" r="5"/><circle cx="70" cy="120" r="4"/><circle cx="190" cy="120" r="4"/><circle cx="40" cy="170" r="4"/><circle cx="100" cy="170" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="220" cy="170" r="4"/><circle cx="25" cy="220" r="4"/><circle cx="55" cy="220" r="4"/><circle cx="85" cy="220" r="4"/><circle cx="115" cy="220" r="4"/><circle cx="145" cy="220" r="4"/><circle cx="175" cy="220" r="5.5"/><circle cx="205" cy="220" r="4"/><circle cx="235" cy="220" r="4"/></g><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#24407a">先の端を全部、見込みで比べて選ぶ</text></svg><svg viewBox="0 0 260 270" role="img" aria-label="二つ目の木。同じ形の木の中ほどに、歩いている人の点がある。点の周りの数手先だけが濃く見え、その先は薄い点線。数手先の一つの点で、十分として止まっている" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">② 迷路の中から数手先を見る</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">サイモン（満足化）</text><g stroke="#d9dde5" stroke-width="1.2" stroke-dasharray="3 3"><line x1="130" y1="70" x2="190" y2="120"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="190" y1="120" x2="220" y2="170"/><line x1="40" y1="170" x2="25" y2="220"/><line x1="40" y1="170" x2="55" y2="220"/><line x1="100" y1="170" x2="85" y2="220"/><line x1="100" y1="170" x2="115" y2="220"/><line x1="160" y1="170" x2="145" y2="220"/><line x1="160" y1="170" x2="175" y2="220"/><line x1="220" y1="170" x2="205" y2="220"/><line x1="220" y1="170" x2="235" y2="220"/></g><circle cx="70" cy="120" r="58" fill="#c4573f" fill-opacity="0.06" stroke="#c4573f" stroke-width="1" stroke-dasharray="4 3"/><g stroke="#9aa3b5" stroke-width="1.4"><line x1="70" y1="120" x2="40" y2="170"/><line x1="70" y1="120" x2="100" y2="170"/></g><g stroke="#c4573f" stroke-width="3.2" stroke-linecap="round"><line x1="130" y1="70" x2="70" y2="120"/><line x1="70" y1="120" x2="100" y2="170"/></g><g fill="#d9dde5"><circle cx="190" cy="120" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="220" cy="170" r="4"/><circle cx="25" cy="220" r="4"/><circle cx="55" cy="220" r="4"/><circle cx="85" cy="220" r="4"/><circle cx="115" cy="220" r="4"/><circle cx="145" cy="220" r="4"/><circle cx="175" cy="220" r="4"/><circle cx="205" cy="220" r="4"/><circle cx="235" cy="220" r="4"/></g><circle cx="130" cy="70" r="4" fill="#9aa3b5"/><circle cx="40" cy="170" r="4" fill="#24407a"/><circle cx="70" cy="120" r="6.5" fill="#c4573f"/><path d="M100,160 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="112" y="186" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">十分</text><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#c4573f">見える数手先で、十分な道を選んで止まる</text></svg><svg viewBox="0 0 260 270" role="img" aria-label="三つ目の絵。小さな木を深く進み、外れの枝には×が付く。見つけた所の星から、条件を変えた次の木が立ち、そこでも外れと星があり、さらに次の木が立っていく" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">③ 見つけた所から次の木へ</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">エフェクチュエーション・入れ子の深さ優先探索</text><g stroke-width="2.4" stroke-linecap="round"><line x1="50" y1="62" x2="28" y2="104" stroke="#24407a"/><line x1="50" y1="62" x2="74" y2="104" stroke="#24407a"/><line x1="142" y1="126" x2="120" y2="168" stroke="#c4573f"/><line x1="142" y1="126" x2="166" y2="168" stroke="#c4573f"/><line x1="222" y1="190" x2="204" y2="228" stroke="#9a7d0a" stroke-dasharray="3 3"/><line x1="222" y1="190" x2="242" y2="228" stroke="#9a7d0a" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5b6476" stroke-width="1.2" stroke-dasharray="4 3"><path d="M80,100 Q120,96 136,120"/><path d="M172,164 Q206,160 217,184"/></g><path d="M136,120 l-6,-2 3,-5 z" fill="#5b6476"/><path d="M217,184 l-6,-2 3,-5 z" fill="#5b6476"/><circle cx="50" cy="62" r="5" fill="#24407a"/><circle cx="142" cy="126" r="5" fill="#c4573f"/><circle cx="222" cy="190" r="5" fill="#9a7d0a"/><g stroke="#5b6476" stroke-width="2"><line x1="22" y1="98" x2="34" y2="110"/><line x1="34" y1="98" x2="22" y2="110"/><line x1="114" y1="162" x2="126" y2="174"/><line x1="126" y1="162" x2="114" y2="174"/></g><path d="M74,95 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><path d="M166,159 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="14" y="128" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">外れ・戻る</text><text x="88" y="90" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">次の木</text><text x="180" y="156" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">次の木</text><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">見つけた所から、条件を変えた木が立つ</text></svg></div><figcaption>同じ形の木を、三つの位置から見た図です。①は、先に木の全部を描いて、先の端を全部見込みで比べ、一本を選びます（太線）。②は、木の中を歩く人（赤い点）から見ます。見えるのは数手先まで（丸の中）で、十分な道が見つかれば、そこで止まります。③は、深く進み、外れなら戻り（×）、何かを見つけたら（星）、そこから条件を変えた次の木で、また探します。木ははじめから一本あるのでなく、進むうちに立っていきます。論の中身から Claude が描いた図で、どの論の図の写しでもありません。</figcaption></figure>

pjdhiro は、意思決定の論（決定ツリー・リアルオプション・サイモンの迷路・サラスバシーのコーゼーションとエフェクチュエーション）を、この一本の木の上に並べて見ています。

<strong>pjdhiro の見方：</strong>起業家の探索的なエフェクチュエーションのようなことも、ツリー構造に見える。DFS（深さ優先探索）のように目的を変えながら、人に会って気づいたり約束したりする、という構造は変わらない。サラスバシーの言うことも、入れ子の DFS として、ツリーで表せそう。みんな、ツリーをどの位置からどう見ているかの違いで、群盲象を評すように見える。

では、何が違って見えるのか。pjdhiro は、探索のやり方だと見ています。

<strong>pjdhiro の見方：</strong>探索をどうやるのか。未来の側が予測できるものとして、全探索するのか。未来は作られるかのように、入れ子の DFS で進むのか。サイモンの迷路も含めて、各論はこれでまとめて書けると思う。

図の①は、未来を予測できるものとして先に木を描き、先の端を全部見比べて選ぶ、全探索の見方です。分かれ道ごとに先を見込んで選ぶ決定ツリー、先で選べる権利の値打ちを見積もるリアルオプション、起業家を調べたサラスバシーが書いたコーゼーションを、ここに置きます。②と③は、未来が作られるかのように、木の中を歩く位置からの見方です。②には、迷路の中では数手先までしか見えないとしたサイモンの限定合理性を、③には、サラスバシーのエフェクチュエーションを、入れ子の深さ優先探索の形で置きます。どの論をどの位置に置くかは、論の中身から、このページが割り当てたものです。

<details><summary>詳しく — 未来を予測できるなら、木の全部を探して選ぶ（決定ツリー・リアルオプション・コーゼーション）</summary>

<a id="jp-full"></a>図の①は、未来を見込めるものとして、先に木を描く見方です。

決定ツリーは、決めることを木の形に描き、分かれ道ごとに選べる道を並べて、それぞれの先を見込みます。先の端まで全部を見込みで比べ、良さそうな一本を選ぶので、木の全部を探す進み方（全探索）です。意思決定はこう進むものだ、と見られることがあり、それが正しい進め方だと受け取っている人も、少なくないのではないでしょうか。

経営学のリアルオプションも、同じ木の上で、先で続ける・やめる・広げる、を選べる権利の値打ちを見積もります。サラスバシーのいうコーゼーションは、作りたい結果を先に決め、そこへ至る手段を、見込みの利益で選び比べる進み方です。サラスバシーは、コーゼーションの土台の考え方を、未来を予測できる限り、未来をコントロールできる、とまとめています（2001）。どれも、未来の側を見込める木として先に描いておく所が、共通しています。

<details id="jp-tree"><summary>詳しく — 決定ツリーと、リアルオプション（図）</summary>

決定ツリーは、決めることを木の形に描いて、選ぶ道を見積もるやり方です。四角は自分が選ぶ点、丸は運で分かれる点です。丸の先には、起こりうることと、その確率を書きます。木の先の端に見込みの値を置き、後ろから、丸では確率で重みをつけて足し、四角では大きいほうを取って、根元まで畳みます。

<figure class="glow-card reader-figure"><div style="overflow-x:auto"><svg style="display:block;min-width:560px" viewBox="0 0 600 268" role="img" aria-label="決定ツリーの例。四角の「決める」点から、投資する（100 を払う）と投資しないの二本が出る。投資するの先は丸の「運」の点で、確率 0.5 で 180、確率 0.5 で 60 になる。後ろから見込みの値を畳むと 0.5×180＋0.5×60−100＝20 で、投資しない（0）より大きいので投資するを選ぶ" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="600" height="268" rx="10" fill="#ffffff"/><line x1="48" y1="130" x2="240" y2="70" stroke="#5b6476" stroke-width="1.5"/><line x1="48" y1="130" x2="240" y2="215" stroke="#5b6476" stroke-width="1.5"/><line x1="258" y1="70" x2="430" y2="36" stroke="#5b6476" stroke-width="1.5"/><line x1="258" y1="70" x2="430" y2="108" stroke="#5b6476" stroke-width="1.5"/><rect x="31" y="121" width="18" height="18" fill="#ffffff" stroke="#24407a" stroke-width="2"/><circle cx="249" cy="70" r="9" fill="#ffffff" stroke="#c4573f" stroke-width="2"/><text x="30" y="160" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#24407a" text-anchor="start">決める</text><text x="232" y="98" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#c4573f" text-anchor="start">運</text><text x="66" y="72" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start">投資する（−100）</text><text x="120" y="196" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start">投資しない</text><text x="282" y="40" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#5b6476" text-anchor="start">うまくいく 0.5</text><text x="266" y="124" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#5b6476" text-anchor="start">うまくいかない 0.5</text><text x="440" y="40" font-family="Noto Sans JP, sans-serif" font-size="14" fill="#1d2433" text-anchor="start" font-weight="700">180</text><text x="440" y="112" font-family="Noto Sans JP, sans-serif" font-size="14" fill="#1d2433" text-anchor="start" font-weight="700">60</text><text x="250" y="219" font-family="Noto Sans JP, sans-serif" font-size="14" fill="#1d2433" text-anchor="start" font-weight="700">0</text><text x="20" y="250" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#24407a" text-anchor="start">後ろから畳む：0.5 × 180 ＋ 0.5 × 60 − 100 ＝ 20。0 より大きいので「投資する」を選ぶ</text></svg></div><figcaption>決定ツリーの例。数は説明のための例で、時間の割引は省いています（計算は Claude）。</figcaption></figure>

リアルオプションは、同じ木を、先で選べる権利の側から見ます。今すぐ決めずに待てば、運の丸が先に開き、結果を見てから四角で選べます。良いときだけ投資できるので、悪いほうの損を避けられます。この「先で選べること」の値打ちを、金融のオプション（決めた値段で、あとから買える権利）になぞらえて見積もるのが、リアルオプションの考え方です。

<figure class="glow-card reader-figure"><div style="overflow-x:auto"><svg style="display:block;min-width:660px" viewBox="0 0 700 280" role="img" aria-label="リアルオプションの例。同じ投資を、一年待って結果が分かってから決める。待ったあとの運の点で、良い（確率 0.5）なら投資して 80、悪い（確率 0.5）ならやめて 0。良いときだけ投資するので、見込みは 0.5×80＋0.5×0＝40。今すぐ投資する 20 との差 20 が、待つ権利の値打ち" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="700" height="280" rx="10" fill="#ffffff"/><rect x="31" y="121" width="18" height="18" fill="#ffffff" stroke="#24407a" stroke-width="2"/><line x1="48" y1="130" x2="180" y2="130" stroke="#5b6476" stroke-width="1.5"/><circle cx="189" cy="130" r="9" fill="#ffffff" stroke="#c4573f" stroke-width="2"/><line x1="198" y1="130" x2="300" y2="64" stroke="#5b6476" stroke-width="1.5"/><line x1="198" y1="130" x2="300" y2="196" stroke="#5b6476" stroke-width="1.5"/><rect x="300" y="55" width="18" height="18" fill="#ffffff" stroke="#24407a" stroke-width="2"/><rect x="300" y="187" width="18" height="18" fill="#ffffff" stroke="#24407a" stroke-width="2"/><line x1="318" y1="64" x2="430" y2="36" stroke="#5b6476" stroke-width="1.5"/><line x1="318" y1="64" x2="430" y2="92" stroke="#5b6476" stroke-width="1.5"/><line x1="318" y1="196" x2="430" y2="168" stroke="#5b6476" stroke-width="1.5"/><line x1="318" y1="196" x2="430" y2="224" stroke="#5b6476" stroke-width="1.5"/><text x="60" y="120" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start">一年待つ</text><text x="172" y="158" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#c4573f" text-anchor="start">運</text><text x="205" y="86" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#5b6476" text-anchor="start">良い 0.5</text><text x="205" y="190" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#5b6476" text-anchor="start">悪い 0.5</text><text x="440" y="40" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start" font-weight="700">投資する 180 − 100 ＝ 80</text><text x="440" y="96" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start">やめる 0</text><text x="440" y="172" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start">投資する 60 − 100 ＝ −40</text><text x="440" y="228" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#1d2433" text-anchor="start" font-weight="700">やめる 0</text><text x="20" y="262" font-family="Noto Sans JP, sans-serif" font-size="12" fill="#24407a" text-anchor="start">良いときだけ投資する：0.5 × 80 ＋ 0.5 × 0 ＝ 40。今すぐ投資する（20）との差 20 が、待つ権利の値打ち</text></svg></div><figcaption>上と同じ投資を、一年待ってから決める例。待つ権利の値打ちは 20 になります。数は説明のための例です（計算は Claude）。</figcaption></figure>

どちらも、先に木を描き、見込みで一本を選ぶ、という形は同じです。違うのは、先で選ぶ四角を、木の中に残しておくかどうかです。

図の例と、この畳みの決定ツリーとリアルオプションの手順の説明は、このページを書いた LLM（Claude）の学習時の知識から書いたもので、原典とは照らしていません。リアルオプションとコーゼーションについてサラスバシーらが書いたことは、すぐ下の畳み「先行研究 — リアルオプションと、コーゼーション」で原典と照らしています。

</details>

<details><summary>先行研究 — リアルオプションと、コーゼーション</summary>

サラスバシーは、2001 年の論文の表で、コーゼーションとエフェクチュエーションを並べました。コーゼーションは、結果が先に与えられ、その結果を作る手段を、見込みの利益で選び比べます。土台の考え方は、未来を予測できる限り、未来をコントロールできる、です。表は、コーゼーションを、予測できる面に目を向けるもの、エフェクチュエーションを、予測できない未来の、自分たちで左右できる面に目を向けるもの、と書き分けています。

リアルオプションについて、サラスバシーとデューは、新しい市場に入ることを、その市場に関わるオプションを買うことと見る論（ミラーとフォルタ、2002）を、ありうる市場の中を探して選ぶ見方の一つとして挙げています（2005）。サラスバシーは 2001 年の論文の推測の一つで、起業家（エフェクチュエーションで進む人）は、長期の計画や正味現在価値の分析を使うことが少なく、使うとしても、リアルオプションの形式ばらない形くらいだろう、と書きました。

<p><b>原文</b></p>

- サラスバシー p.251（表 1・Underlying logic）：コーゼーション "To the extent we can predict future, we can control it"／エフェクチュエーション "To the extent we can control future, we do not need to predict it"
- サラスバシー p.251（表 1・Nature of unknowns）：コーゼーション "Focus on the predictable aspects of an uncertain future"／エフェクチュエーション "Focus on the controllable aspects of an unpredictable future"
- サラスバシー p.251（表 1・Decision-making selection criteria）："Help choose between means to achieve the given effect"／"Selection criteria based on expected return"
- サラスバシーとデュー p.537："Miller and Folta (2002) take a similar view in 'Option value and entry timing' where they describe a firm's decision to enter a new product or geographic market in terms of purchasing an option on being involved in the market."
- サラスバシー p.261："effectuators are less likely to use long-term planning or net present value (NPV) analyses; instead, they are likely to be focused on the short term and, at most, to use informal versions of real options."

訳は Claude。

出典：Sarasvathy (2001) "Causation and Effectuation", *Academy of Management Review* 26(2):243–263（本文照合済。[effectuation.org が置いた誌面の写し](https://effectuation.org/hubfs/Journal%20Articles/2016/06/amr01-inevitability-to-contingency-1.pdf)。pp.251・261）／Sarasvathy & Dew (2005) "New market creation through transformation", *Journal of Evolutionary Economics* 15(5):533–565（本文照合済。[米海軍大学院の機関リポジトリの写し](https://hdl.handle.net/10945/41240)。p.537）

</details>

</details>

<details><summary>詳しく — 未来が作られるなら、木の中を歩いて進む（サイモンの迷路・エフェクチュエーション）</summary>

<a id="jp-effectuation"></a>図の②と③は、木の中を歩く位置からの見方です。

サイモンは、1956 年の論文で、生き物の生きる場を、迷路のような分かれ道の系として描きました。生き物は数手先までしか見えず、いちばん良い道を探しきるのでなく、十分に満たす道を選ぶ（満足化）、としました。木の中にいると、木の全部は見えません。

サラスバシーは、起業家の意思決定を調べ、コーゼーションと並べてエフェクチュエーションを書きました（2001）。手持ちの手段を先に置き、その手段で作れる結果のほうを選ぶ進み方です。失ってもよい分を先に決め、限られた手段でできるだけ多くを試し、うまくいかなければ、目的のほうを作り直します。土台の考え方は、未来をコントロールできる限り、未来を予測する必要はない、と書かれています。予測できない未来を、自分たちで形づくっていく見方です。

<details><summary>先行研究 — サイモンの迷路と、エフェクチュエーションの例</summary>

サイモンは、分かれ目の一つ一つを選ぶ点とし、枝を一つ選んで次の分かれ目まで進むことを「一手」と呼びます。生き物は数手先まで見え、その中に食べ物があれば、そこへ行く道を選べます。論文の結びでは、生き物は「最適」な道を見つける感覚も知恵も持たないので、すべての必要をある水準で満たす、満足化の道をたどるしくみを考えた、とまとめます。

サラスバシーの例では、カレーの店を開こうとした人が、まず昼の配達を数週間やってみて、喜ばれているのが料理より本人の人柄や話だと分かれば、店でなく、本を書き、話をする方へ進むかもしれません。失敗を避けるより、失敗を扱っていく、という見方です。

<p><b>原文</b></p>

- サイモン（節 Perceptual Powers, Storage Capacity, and Survival）："It is convenient to describe the organism's life space not as a continuous surface, but as a branching system of paths, like a maze, each branch point representing a choice point."
- サイモン（結び）："we are concerned only with finding a choice mechanism that will lead it to pursue a 'satisficing' path"
- サラスバシー p.245（定義）："Causation processes take a particular effect as given and focus on selecting between means to create that effect. Effectuation processes take a set of means as given and focus on selecting between possible effects that can be created with that set of means."
- サラスバシー p.252（許容できる損失）："Effectuation predetermines how much loss is affordable and focuses on experimenting with as many strategies as possible with the given limited means."
- サラスバシー p.247（カレーの店の例）："after a few weeks of trying to build the lunch business, she might discover that the people who said they enjoyed her food did not really enjoy it"
- サラスバシー p.259（失敗）："The normative aspects of effectuation ... would have to do with the 'management' of failures rather than with their avoidance."
- サラスバシーとデュー p.538："the transformation of current realities into new possibilities rather than search (however bounded or unbounded) and selection within exotic regions of the unknown."

訳は Claude。木や深さ優先探索のたとえは pjdhiro のもので、2001 年の論文の図は、手持ちの手段から、作れる結果の一つ一つへ、扇のように矢印が広がる形です（p.253）。

出典：Simon (1956) "Rational choice and the structure of the environment", *Psychological Review* 63(2):129–138（本文照合済。[SAGE が公開している再録の PDF](https://uk.sagepub.com/sites/default/files/upm-binaries/25239_Chater~Vol_1~Ch_03.pdf)。頁は再録のもので、節の名で示した）／Sarasvathy (2001) "Causation and Effectuation", *Academy of Management Review* 26(2):243–263（本文照合済。[effectuation.org が置いた誌面の写し](https://effectuation.org/hubfs/Journal%20Articles/2016/06/amr01-inevitability-to-contingency-1.pdf)。pp.245・247・252・253・259）／Sarasvathy & Dew (2005) "New market creation through transformation", *Journal of Evolutionary Economics* 15(5):533–565（本文照合済。[米海軍大学院の機関リポジトリの写し](https://hdl.handle.net/10945/41240)。p.538。手段から人と関わり約束を重ねていく環の図は p.543）

</details>

</details>

入れ子の深さ優先探索の形で見ると、図の②と③は、同じものの別の見え方になります。

<strong>pjdhiro の見方：</strong>サイモンの迷路を途中で止めるネズミも、エフェクチュエーションの分岐や決定がそこそこの段階で切り替わるのも、DFS の先で DFS が始まるのも、どれも同じものを指していると思う。

サイモンの生き物は、十分に満たす道が見つかれば、そこで探すのをやめます。エフェクチュエーションで進む人は、失ってもよい分の中で試し、そこそこの所で目的のほうを作り直します。入れ子の深さ優先探索は、見つけた所で、条件を変えた次の木へ移ります。どれも、一本の木を最後まで探しきらずに、途中で次の木へ移る進み方です。

<details><summary>詳しく — 探して選ぶより、変えていく（サラスバシーとデュー）</summary>

サラスバシーとデューは、のちに、新しい市場は、ありうる市場の全体を探して選ぶこと（探索と選択）より、手元の現実を変えていくこと（変換）で生まれる、と見ました（2005）。見つけたものから次の木が立つ、という絵は、この変換の見方とも重なって見えます。Love駆動開発でも、pjdhiro は、ほどける・離れる・戻ることを開発に入れ、そのイメージを深さ優先探索で言っています（「[Love駆動開発と呼びたいもの](love-driven-dev.html#ldd-development-scope)」の章「開発とは、何を指すか」）。
</details>

<!--TURN-->起業家の行動を、入れ子の深さ優先探索のように見ました。次は、その一歩をくり返す形を、式に当てます。<!--/TURN-->

<!--PART:第二部|それは、ジュリア集合の漸化式のようだ-->

## 一歩をくり返す形は、漸化式と同じ

<!--OPEN-->

<a id="jp-rec-def"></a>入れ子の深さ優先探索で進む起業家を、外から一本の道として見ると、やってみた結果が、次の一歩の出発になっています。pjdhiro は、その一歩のくり返しを、ジュリア集合の式に重ねました。

<strong>pjdhiro の見方：</strong>一歩のくり返しに、Love という重力のような c を加えて、非二元を考慮すると、ジュリア集合の漸化式に似ていた。

この部では、このカードの式の所が、起業家の何に当たるかを、一つずつ見ていきます。

まず、一歩のくり返しそのものです。木が変わっても、人に会い、気づき、約束する、という一歩の形は変わりません。人に会い、気づきを得て、その気づきを持ってまた人に会う。この「前の結果から次を決める」形を、数学では漸化式と言います。漸化式は、数の並びの次の値を、前の値から決める決まりです。

<details><summary>詳しく — 漸化式を、フィボナッチ数で一歩ずつ見る（図）</summary>

たとえば、フィボナッチ数は「前の二つを足す」と決めて、1、1 から始めます。1 + 1 = 2、1 + 2 = 3、2 + 3 = 5 と進み、出てきた値に、また同じ決まりを当てます。下の図で、一歩ずつ進めてみてください。

<figure class="glow-card reader-figure jp-fig" id="jp-rec">
<p class="jp-fig__title">漸化式：前の値に決まりを当てて、次の値を出す（フィボナッチ数）</p>
<p class="jp-fig__label">▶ で再生、「一歩進める」で一歩ずつ</p>
<canvas id="jp-rec-cv" width="900" height="240" aria-label="0 から 100 までの数直線。1、1 から始めて、前の二つを足した値へ、弧を描いて跳ぶ"></canvas>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-rec-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-rec-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-rec-step" class="jp-media__word">一歩進める</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-rec-chain">a₁ = 1　→　a₂ = 1</p>
<p class="jp-fig__readout" id="jp-rec-out">図はページの中の JavaScript で描きます。</p>
<figcaption>a₁、a₂、a₃ … は、一つ目の値、二つ目の値、三つ目の値 … です。どの値も、その前の二つの値の和です。</figcaption>
</figure>

</details>

カードの式は `z → z² + c` です。いまの値 `z` を二乗して `c` を足したものが、次の値になります。出てきた値に、また同じことをします。計算機で書くと、次のくり返しです。

```
# z → z² + c を前へ
z = 0
while 決めた歩数まで:
  z = z*z + c
```

<b>仮説：一歩（`→`）は、人に会い、気づき、約束する、のくり返し。</b>木が変わっても、この一歩の形は変わらず、やってみた結果が次の一歩の出発になります。

カードの「非二元を考慮すると」は、pjdhiro の読みでは、式の二か所に当たります。一つは `z` で、平面の上の一点で表す数は、横と縦の二つの成分を一つの数に持ちます（次の章）。もう一つは、一歩を逆に戻すときで、平方根が二つあるので、一つの点が、0 の周りに半回転した二つの写しに分かれます。pjdhiro は、それを ☯ のように見ています（第三部「[ジュリア集合を、逆にたどる](#jp-back)」）。

式の所は、一歩のほかに、`z`・`z²`・`c` の三つです。続く章で、所ごとに仮説を置き、最後の章で、平面の上で計算して見ます。

## z は、起業家の思考・心理・行動

<!--OPEN-->

<a id="jp-z"></a><b>仮説：`z` は、起業家の思考・心理・行動。</b>気づくことも、決めることも、ここに入ります。起業家その人ではなく、一歩ごとにくり返されている働きのほうです。

式の `z` は、平面の上の一点で表す数（複素数）で、横の向き（実軸）と縦の向き（虚軸）の二つの成分を持ちます。このページは、横の向きに認知できるもの、縦の向きに認知し得ないものを当てます。思想や DNA のような、よく使われる呼び名について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>思想や DNA というものは、何でもいいけど、実軸、認知できるものだけを切り取った概念じゃないか？ 波間の渦のように、渦以外の波の存在が抜けているのではないか？ というのが、認知し得ない面。

「波間の渦」の渦と波は、「[創造とは](../cs/)」が創造の五つの段（場・波・縁・渦・束）に置く語です。`z` を思想や DNA のような呼び名でなく、思考・心理・行動という働きの側で置いたのは、認知し得ない面まで含めるためです。

`z` の中身は、一つとは限りません。いくつもの自己の重なりかもしれず、本人が気づいていない自分（シャドー）も入っているかもしれません。その中身が掛け合わさる所を、次の章で二乗として見ます。

pjdhiro は、初めの値は、起業家ごと、状況ごと、時代ごとにばらばらだと見ています。このページの図は、0 から始めた一例です。

## z の二乗は、起業家の中で起きる、自己と自己の掛け算

<!--OPEN-->

<a id="jp-square"></a>式の二乗の所は、起業家の何に当たるのか。pjdhiro は、こう問いました。

<strong>pjdhiro の問い：</strong>z の二乗に当てはまる、現実世界の起業家の行動が見つかるといいんだよね。心理面でも良いので。

pjdhiro は、その答えを、起業家の中で起きることに見ています。脳の研究には、自己を一つの中核でなく、いくつもの系の重なりとして見るものがあります（下の畳み「先行研究 — 自己は、いくつもの重なりか」）。それを読んで、pjdhiro は、二乗をこう見ました。

<strong>pjdhiro の見方：</strong>自己は単一では無い。とするなら、二乗するように、自己と自己が創造的に協働するイメージです。

<b>仮説：`z²` は、起業家の中で起きる、自己と自己の掛け算。</b>二つの自己が掛け合わさる分は、どちらか一つの自己からは出てきません。自己と自己が協働して、一つでは出ないものを次の一歩に生む、と読めます（式では `2ab` の項。下の畳み「[詳しく — 自己と自己の掛け算を、式に当てると](#jp-self-calc)」）。

式の上では、`z` に `z` を掛けると、`z` は自分の角度だけ回り、自分の大きさの分だけ伸び縮みします（図は「[二乗を手で動かす](#jp-sq)」）。pjdhiro は、それを、自分で自分を回すように進むこととしても見ています。

<strong>pjdhiro の見方：</strong>自分自身と自分自身を回転させるように進む、という視点はどうだろうか？

ただし、この回転は、外からはそう見えないのかもしれません。

<strong>pjdhiro の見方：</strong>起業家自身を回転させる、とは、周囲から見ると、「人に会って決める」を繰り返す、のようなシンプルな繰り返しに見える。でもそれは、認知できるものとしてそうで、実際は認知し得ないものも含まれるし、その存在は言語化できずに、認知されるものだけが切り取られる。

掛け合わさる自己が何と何かは、一つに決まりません。いまの読みは三つです。

- 脳の中に、いくつもの自己が重なっていて、その重ね合わせで一歩が出るとしたら？（下の畳み「先行研究 — 自己は、いくつもの重なりか」）
- ユングの言う自我とシャドーのように、気づいている側と気づいていない側が、一緒に一歩を作っているとしたら？
- 野中郁次郎が組織に見た、言葉にならない知と言葉にした知が入れ替わりながららせんを描く形が、一人の中でも起きるとしたら？（下の畳み「[野中郁次郎の知識創造とは](#jp-about-nonaka)」）

この三つ目について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>あれは組織だけど、起業家一人の内面でも起きるのかもしれない。フラクタルに。

<details class="acc" id="jp-about-nonaka" data-peek data-peek-dock="野中の知識創造とは" hidden><summary>詳しく — 野中郁次郎の知識創造とは</summary>

経営学者の野中郁次郎は、組織が新しい知識を生む過程を論じました。竹内弘高との共著『知識創造企業』（1995）で広く知られる論です。野中は、知識を、決まった言葉で人に渡せる形式知と、その人に根を持ち言葉にしにくい暗黙知に分け、新しい知識は、二つのあいだで一方が他方に変わり続けることから生まれる、とします（1994）。変わり方は、共同化（暗黙知から暗黙知へ）・表出化（暗黙知から形式知へ）・連結化（形式知から形式知へ）・内面化（形式知から暗黙知へ）の四つで、頭文字を取って SECI と呼ばれます。四つを回ると、元の所に戻る円でなくらせんになり、個人から集団、組織へと上るほど大きくなる、と野中らは書きます（2000）。

野中は、一人の中での二つの知のやりとりにも触れています。個人の知識は、経験の知と合理の知のやりとりで広がる（1994）、内面化は個人の心理の過程だ（2009）、と書きます。一人の内面でもらせんがくり返す、というのは、こうした野中の論の材料から組み立てた、このページの読みです。

出典：Nonaka (1994) "[A Dynamic Theory of Organizational Knowledge Creation](https://doi.org/10.1287/orsc.5.1.14)", *Organization Science* 5(1):14–37（本文照合済。[ケンタッキー大学の授業の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20261009125025/https://www.uky.edu/~gmswan3/EDC608/Nonaka_1994.pdf)。pp.16・20・22）／Nonaka, Toyama & Konno (2000) "[SECI, Ba and Leadership: a Unified Model of Dynamic Knowledge Creation](https://doi.org/10.1016/S0024-6301(99)00115-6)", *Long Range Planning* 33(1):5–34（本文照合済。[ノルウェー技術博物館の研究計画のサイトに置かれた誌面の写し](https://tingene.tekniskmuseum.no/images/PDF/Litteratur_MK/SECI_Ba_and_Leadership_a_Unified_Model.pdf)。pp.7・9・10・12・14・15・19）／Nonaka & Toyama (2003) "[The knowledge-creating theory revisited: knowledge creation as a synthesizing process](https://doi.org/10.1057/palgrave.kmrp.8500001)", *Knowledge Management Research & Practice* 1(1):2–10（本文照合済。[ウィーン経済大学の教員の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20130512161449/http://www.ai.wu.ac.at:80/~kaiser/birgit/Nonaka-Papers/The-knowledge-creation-theory-revisited-2003.pdf)。p.4）／Nonaka & von Krogh (2009) "[Tacit Knowledge and Knowledge Conversion: Controversy and Advancement in Organizational Knowledge Creation Theory](https://doi.org/10.1287/orsc.1080.0412)", *Organization Science* 20(3):635–652（本文照合済。[ウィーン経済大学の教員の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20120712130320/http://www.ai.wu.ac.at/~kaiser/birgit/Nonaka-Papers/tacit-knowledge-and-knowledge-conversion-2009.pdf)。p.643）／Nonaka & Takeuchi (2021) "[Humanizing strategy](https://doi.org/10.1016/j.lrp.2021.102070)", *Long Range Planning* 54(4):102070（本文照合済。[PubMed Central の全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC9753931/)。節 From knowledge to wisdom）

</details>

<details><summary>先行研究 — 自己は、いくつもの重なりか</summary>

神経科学者のスキッパーらは、自己の処理を調べた 912 本の脳画像の論文を集め直し、自伝的な記憶・体の持ち主の感じ・内受容など、十の自己の形ごとに、働く所の地図を作りました（2026）。十の地図のうち九つ以上で重なる点は一つもなく、自己には共通の中核が無い、とします。自己は、散らばった脳の系が、その時々に寄与の強さを変えながら組む連合で、「自己」という語は、系が一緒に働く組み合わせ（配置）に付けた名だ、と書きます。いくつかの型を連続的な強さで重ねたモデルのほうが、一つの型や、型の有る無しの組み合わせより、別に取り分けた論文の結果をよく当てた、とも報告しています。

いくつもの自己が重なっている、という所は、`z` を重なった自己と見る置き方の足場になります。重なりを掛け合わせとして読むのは、このページの読みです。査読前のプレプリントです。

<p><b>プレプリントの参照から足した三本</b></p>

一本目は、[ギャラガーのパターン理論](https://www.frontiersin.org/articles/10.3389/fnhum.2013.00443/full)（2013）です。このプレプリントが序論で拠り所にしている論の一つです。哲学者ギャラガーは、自己を一つに決めず、体・経験・感情・人とのあいだ・心理と認知・語り・身の回りに広がるもの・置かれた状況などの側面が、ある型に組まれたものを「自己」と呼ぶ、と提案しました。自己は、側面どうしの動的な相互作用から現れる複雑な系として働き、一人の中でも型は時とともに変わりうる、と書きます。自己という考えは、一つに絞らず複数のままにしておく、とも書きます。

- このページの論に関わる所：自己を一つに決めず、側面の組み合わせと見る所は、`z` を重なった自己と見る置き方に近く見えます。
- 起業家の思考や心理に近い所：心理と認知の側面の中に、熟慮と意思決定の過程が挙がり、身の回りに広がる側面の例に、働く場の制度が挙がります。

二本目は、[ギャラガーとデイリーの論文](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00664/full)（2018）です。パターン理論は側面の一覧にすぎない、という批判に答えた論文です。側面は足し算の一覧ではなく、互いに動的に関わり合う組で、一つの側面に手を入れると、相互作用を通じてほかの側面も変わる、と書きます。ある程度を超えた一つの側面の変化が、ほかの側面の変化を呼ぶ、とも書きます。関わり合いをたどる手がかりに、語り、心の病（統合失調症・うつ病など）、脳の予測の理論を挙げます。

- このページの論に関わる所：側面どうしが互いに変え合う所は、自己と自己の掛け合わせの項（`2ab`）を読む見方に近く見えます。自己の型が語りの中に振り返って写る、という所は、pjdhiro の「振り返って自己分析して成長に気づく」に近く見えます。
- 起業家の思考や心理に近い所：自分が行為の主だという感じが、語りを通じて、先の行為の選び方に効く、と書く所です。

三本目は、[ハーマンスらの対話的自己論](https://link.springer.com/article/10.1007/s12124-016-9370-6)（2017）です。プレプリントの参照の一覧には無い論です。心理学者のハーマンスらは、自己を、多くの「私」の位置（職業人としての私・父としての私など）が、互いにやりとりし、張り合う場として描き、その場を民主的な社会になぞらえます。張り合いの場からは、やりとりの前には無かった新しい位置や、位置どうしの連合が生まれうる、と書きます。対立する二つの位置を組み合わせる「第三の位置」は、衝突を実りのある連合に変えうる、とします。多くの位置をまとめる位置として、全体を見渡すメタ位置と、先へ開かれ、新しい位置を生み出していく推進位置を挙げます。

- このページの論に関わる所：どちらか一つの自己には無いものが、自己と自己のやりとりから生まれる、という所は、pjdhiro の「自己と自己が創造的に協働する」に近く見えます。メタ位置は、自己を振り返って見渡す位置で、二乗の章のシャドーの読み（振り返って差に気づく）に近く見えます。
- 起業家の思考や心理に近い所：二つあります。推進位置を、社会で人を奮い立たせる指導者になぞらえ、自己を新しくしていく「自己の革新者」と呼ぶ所と、張り合いの場は、ストレスを生むだけでなく、適応と創造の力も持つ、とする所です。例に挙がるのは、文化・人種・性のあいだで生きる人の自己です。

三本から借りるのは、自己を複数の重なりとして見る所と、重なりどうしが互いに変え合い、新しいものを生む所です。それを起業家の一歩に当て、二乗の掛け合わせの項に見るのは、このページの仮説です。

<p><b>原文</b></p>

- スキッパーら 要旨："self-related processing has no core and emerges from shifting coalitions of distributed brain systems"
- スキッパーら 序論："The word 'self' then names systems working together in a configuration"
- スキッパーら 考察："continuity comes from recurring members and from the shared name 'self'"
- ギャラガー 2013（節 A Pattern Theory of Self）："On this view selves operate as complex systems that emerge from dynamic interactions of constituent aspects."
- ギャラガー 2013（節 Introduction）："In this paper I propose to stay plural about the concept of self."
- ギャラガー 2013（節 Some Benefits of a Pattern Theory of Self）："psychological/cognitive processes of deliberation and decision-making"
- ギャラガーとデイリー 2018（節 A Pattern Theory of Self (PTS)）："this is not intended to be an additive list of factors, but a set of components dynamically interrelated in a pattern or gestalt arrangement"／"an intervention that affects one factor will involve modulations in the other factors."／"Adjustments in one aspect, above a certain threshold, will lead via dynamical interactions to changes in others"
- ギャラガーとデイリー 2018（要旨）："a self-pattern is reflectively reiterated in its narrative component"
- ギャラガーとデイリー 2018（節 What's the Use of Narrative?）："can have an effect on my future choice of action"
- ハーマンスら p.511："A field of tension allows not only for movements between different I-positions but also for the emergence of new positions or coalitions of positions that were not there before the process of interchange started."
- ハーマンスら（p.511 の引用と同じ段の前の文）："fields of tension not only lead to stress but can also have adaptive and creative potentials"
- ハーマンスら p.514："the construction of third positions is particularly valuable as they have the potential of transforming conflicts between I-positions into productive coalitions"
- ハーマンスら（節 Meta-Position）："A meta-position, like meta-cognition (Flavell 1979; Hussain 2015), provides an overview of more specific I-positions, including their patterns and inter-relationships."
- ハーマンスら（節 Promoter Position）："Analogous to inspiring leaders in society, they imply a considerable openness towards the future and have the capacity of organizing and producing a diverse range of more specialized positions that are relevant to the further development of the self, in this way operating as innovators of the self."

訳は Claude。

出典：Skipper, Blackburne, Cooper, Jaglinska, Jedlovszky, Kuc, McAlpine & Timmermann (2026) "["The self" as shifting coalitions of brain systems in a continuous configuration space](https://doi.org/10.64898/2026.11.12.766263)", *bioRxiv*（査読前。本文照合済。[bioRxiv の全文](https://www.biorxiv.org/content/10.64898/2026.11.12.766263v1.full)で序論・結果・考察・方法の前半と参照の一覧を読んだ）／Gallagher (2013) "[A pattern theory of self](https://doi.org/10.3389/fnhum.2013.00443)", *Frontiers in Human Neuroscience* 7:443（本文照合済。[Frontiers の全文](https://www.frontiersin.org/articles/10.3389/fnhum.2013.00443/full)・[PMC の全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC3730118/)。節 Introduction・Pattern Theories・A Pattern Theory of Self・Some Benefits of a Pattern Theory of Self）／Gallagher & Daly (2018) "[Dynamical relations in the self-pattern](https://doi.org/10.3389/fpsyg.2018.00664)", *Frontiers in Psychology* 9:664（本文照合済。[Frontiers の全文](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00664/full)・[PMC の全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC5958307/)。要旨・節 A Pattern Theory of Self (PTS)・What's the Use of Narrative?）／Hermans, Konopka, Oosterwegel & Zomer (2017) "[Fields of tension in a boundary-crossing world: Towards a democratic organization of the self](https://doi.org/10.1007/s12124-016-9370-6)", *Integrative Psychological and Behavioral Science* 51(4):505–535（本文照合済。オープンアクセス。[Springer の全文](https://link.springer.com/article/10.1007/s12124-016-9370-6)・[全文の PDF](https://link.springer.com/content/pdf/10.1007/s12124-016-9370-6.pdf)。pp.511・514、節 Meta-Position・Promoter Position）

</details>

<a id="jp-shadow"></a>pjdhiro は、自己と自己の掛け合わせを、気づいていない自分（シャドー）の側からも、仮の視点として見ています。

<strong>pjdhiro の見方：</strong>ユングのシャドーに気づいていないとします。z は客観的な自分です。中身は、自我とシャドーがいるとします。それには気づいていません。そういう視点で今考えていました。一つは、回転が自己認識とは違う。思いもよらない方向に進んでいく。もう一つは、2ab として新たな自分に気づいていく。分離と包摂で。自己刷新に気づくのは、これかもしれない。z の二乗は、a の二乗と b の二乗と 2ab の分だけの差が出る。そういうものを振り返って自己分析して、成長に気づくのでは？という意味です。私の今の仮の視点です。

自己認識が自我の側だけを見ているなら、実際の一歩は、見込みとずれていきます。そのずれを振り返ると、気づいていなかった自分が見えてくる、という読みです（式に当てた計算は、下の畳み）。

<details id="jp-self-calc" data-peek><summary>詳しく — 自己と自己の掛け算を、式に当てると</summary>

二乗を自己と自己の掛け合わせと読むなら、`z` を二つの自己が重なったものと見て、`z = a + b` と書くと、二乗は `z² = a² + b² + 2ab` になります。`a²` と `b²` は、それぞれが自分を回す分です。`2ab` は、二つが互いに掛け合わさる分で、どちらか一つだけからは出てきません。

気づいていない自分（シャドー）の側から見る視点も、式に当ててみます（当てはめは Claude の読みで、仮のものです）。`z = a + b` の `a` を自我（本人が自分と思っている側）、`b` をシャドー（本人が気づいていない側）と置きます。自己認識が `a` だけを見ているなら、次の一歩の見込みは `a²` で、実際の一歩 `z² = a² + b² + 2ab` とは `b² + 2ab` だけ違います。向きで見ると、二乗は角度を二倍にするので、`a` と `a + b` の向きの小さなずれも、一回ごとに二倍になります（[二乗を手で動かす](#jp-sq)の図で、角度を少しずらして確かめられます）。くり返すうちに、思いもよらない方向へ進んでいくのかもしれません。

`2ab` は、ここでは自我とシャドーが掛け合わさる項です。一歩を終えてから見込みとの差を振り返ると、気づいていなかった `b` が、自我と掛け合わさった形で見えてくるのかもしれません。pjdhiro の言う、振り返って自己分析して成長に気づくことは、この差を見ることに当てられそうです。

</details>

## c は、一歩ごとに同じだけ引き寄せる

<!--OPEN-->

<a id="jp-drift"></a>冒頭の見立ての「Love と呼びたいものは、重力のようにドリフトする」は、式では `c` に当たります。ドリフトは、流れに押されて、少しずつ漂うようにずれていくことです。

<b>仮説：`c` は、Love と呼びたいものの重力。</b>一歩ごとに、同じ向きへ同じだけ引き寄せます。`c` は人ごとに違い、一人の中では一定だ、と置いています。

「[Love駆動開発と呼びたいもの](love-driven-dev.html)」は、人やプロジェクトを動かしているもの（駆動源）を、Love と呼びたいものと置く読み物です。pjdhiro は、その Love と呼びたいものを、漸化式の `c` に置きました。第一部の木で言えば、人に会い、気づき、約束する一歩ごとに、毎回同じだけ加わるものです。土台には、Love と重力の構造の似かたを問う見方があります（読み物「[愛は、重力に似ていないか](gravity-love.html)」）。 エフェクチュエーションの論では、起業家を動かすものは謎のまま残っている、と pjdhiro は見ています。`c` は、その謎のまま残る駆動源を、一歩ごとに環の外から加わるものとして、式に置いたものです。

<strong>pjdhiro の見方：</strong>愛は重力と似ていないか？ それは c と似ていないか？ という感じですね。一つは、基礎にある視点。なので、汎用的に色々使えそう。まずは創造、それ以外にも。

思考・心理・行動が自分で自分を回すだけなら、式の値は、原点の周りで回り、原点からの距離が変わるだけです。そこに `c` を足すと、値は毎回、同じ向きに同じだけずれます。一歩ごとのずれは小さくても、くり返すうちに、値が外へ限りなく遠ざかるか、外へ出ずに残るかを分けます。物を同じように引き寄せ、通り道を少しずつ曲げていく重力のようなもの、とたとえられます。なぜ重力なのかを、pjdhiro は、符号の数から言っています。

<strong>pjdhiro の見方：</strong>＋の符号しかない物理の概念って、今のところ、それ（重力）が一番有名では？ 確認されていることの中では。

電気の力には、引き合う向きと退け合う向きがありますが、重力のもとになる質量には、知られている限り、符号が一つしかありません。式でも、`c` は毎回、同じ向きに同じだけ足されます。

Love駆動開発で、pjdhiro は、同じ駆動が、成果と呼ばれる向きにも、お金や名誉や権力の向きにも、知識や子孫のようなお金にならないものの向きにもドリフトする、と見ています。どの向きも、善悪でなく、同等の現れと見ます（「[Love駆動開発と呼びたいもの](love-driven-dev.html#ldd-drift)」で引いた見方）。式でも、`c` の値に、良い値と悪い値はありません。違う `c` は、違う形を残すだけです。

式の数学そのものは、Love駆動開発の章「[数学の視点で見る](love-driven-dev.html#ldd-math)」で見ています。この置き方を意思決定に当てた仮の案は、「[意思決定とは](decision-making.html#dm-circle)」の巻末にあります。

## 平面の数で、式を一歩ずつ見る

<!--OPEN-->

<a id="jp-origin"></a>冒頭の見立ての「それは、ジュリア集合の漸化式のようだ」を、この部で式の所ごとに置いた仮説で、平面の上の計算に当てて見ます。図は畳みの中で、手で動かせます。

<details><summary>詳しく — 平面の上の数（複素数）とは（図）</summary>

`z` は、ふつうの数ではなく、平面の上の一点で表す数（複素数）です。ふつうの数は、一本の数直線の上に並びます。複素数は、横の向き（実軸）に加えて、縦の向き（虚軸）にも広がります。横に `x`、縦に `y` 進んだ点を `x + yi` と書きます。`i` は、二乗すると −1 になる数で、縦の向きの 1 目盛りを表します。

<figure class="glow-card reader-figure jp-fig" id="jp-cplx">
<p class="jp-fig__title">複素数：平面の一点が、横と縦の二つの成分を一度に持つ</p>
<div class="jp-fig__grid jp-fig__grid--one"><div class="jp-fig__panel"><p class="jp-fig__label">図をクリックすると、その点が z になる</p><canvas id="jp-cplx-cv" width="480" height="480" aria-label="横の軸（実軸）と縦の軸（虚軸）の平面。クリックした点 z から、横の成分と縦の成分の線が引かれる"></canvas></div></div>
<p class="jp-fig__readout" id="jp-cplx-out">図はページの中の JavaScript で描きます。</p>
<figcaption>金色の線が横の成分（実軸の向き）、赤の線が縦の成分（虚軸の向き）です。一つの点が、二つの成分を一度に持ちます。</figcaption>
</figure>

</details>

章「[z は、起業家の思考・心理・行動](#jp-z)」の当て方で計算してみます。`z = x + iy` を二乗すると、`z² = (x² − y²) + 2ixy` になります。`x` を認知できる成分、`y` を認知し得ない成分と当てるなら、次の一歩の認知できる成分に、認知し得ない成分の二乗 `y²` が、引かれて入ってきます。認知し得ないものは、見えないまま、次に見えるものを変えているのかもしれません。

<details><summary>詳しく — 二乗を手で動かす：角度は二倍、距離は二乗、z と −z は同じ所へ（図）</summary>

二乗には、式の上で二つのはたらきがあります。一つは、平面の上の点を、原点から見た角度を二倍にし、原点からの距離を二乗にすることです。距離が 1 より小さい値はさらに小さく、1 より大きい値はさらに大きくなります。もう一つは、向きが逆の二つの値 `z` と `−z` を、同じ一つの値に送ることです（二対一）。二乗したあとの値からは、二つのどちらから来たのかが分かりません。

<figure class="glow-card reader-figure jp-fig" id="jp-sq" data-peek data-peek-dock="二乗を手で動かす">
<p class="jp-fig__title">二乗を手で動かす：角度は二倍、距離は二乗、z と −z は同じ所へ</p>
<div class="jp-fig__grid jp-fig__grid--one"><div class="jp-fig__panel"><p class="jp-fig__label">点 z をつまんで動かすと、z²（赤）が動く</p><canvas id="jp-sq-cv" class="jp-fig__drag" width="480" height="480" aria-label="平面に、距離 1 の円が点線で描かれている。つまんで動かせる点 z と、その二乗 z²、原点の反対側の点 −z が、原点からの線と角度の弧で示される"></canvas></div></div>
<div class="jp-media" role="group" aria-label="二乗をくり返す操作"><button type="button" id="jp-sq-back" class="jp-media__icon" aria-label="はじめの z に戻す" title="はじめの z に戻す"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-sq-iter" class="jp-media__play" aria-pressed="false" aria-label="二乗をくり返す" title="二乗をくり返す・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-sq-once" class="jp-media__word">もう一度二乗する</button></div>
<div class="jp-fig__btns"><button type="button" id="jp-sq-play" aria-pressed="false">z を一周させる</button><button type="button" id="jp-sq-neg" aria-pressed="true">−z も見る（二対一）</button></div>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>z の角度 <output for="jp-sq-a">30°</output></span><input type="range" id="jp-sq-a" min="0" max="359" step="1" value="30"></label>
<label class="jp-fig__slider"><span>z の原点からの距離 <output for="jp-sq-r">0.80</output></span><input type="range" id="jp-sq-r" min="0.1" max="1.6" step="0.01" value="0.8"></label>
</div>
<div class="jp-fig__group"><p class="jp-fig__glabel">c も足してみる</p>
<div class="jp-fig__btns" role="group" aria-label="c を足すか"><button type="button" data-sqc="0,0" aria-pressed="true">c を足さない</button><button type="button" data-sqc="-0.8,0.16" aria-pressed="false">c = −0.8 + 0.16i を足す</button></div></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-sq-out">図はページの中の JavaScript で描きます。</p>
<figcaption>弧は、横の軸から左回りに測った角度です（青が z、赤が z²）。赤の弧は、いつも青の弧の二倍です。角度のスライダを動かすと、z² は z の二倍の速さで回ります。距離のスライダを 1 より小さくすると z² は原点へ寄り、1 より大きくすると離れます。「z を一周させる」をクリックすると、z が一周するあいだに、z² は二周します（薄い線は通った跡）。白抜きの点 −z は、原点の反対側の点で、二乗すると z と同じ z² に行きます。z が半周して −z の位置に来たとき、z² はちょうど一周して同じ所に戻ります。「c を足す」をクリックすると、z² から、決まった向きに決まった長さだけずれた点（金色）が出ます。これが次の値 z² + c です。「もう一度二乗する」をクリックすると、いまの z² が次の z になり、その二乗が出ます（c を足しているときは z² + c が次の z）。灰の点と点線は、それまでの z です。c を足さないとき、距離 1 の円の内側から始めると原点へ寄り、外側から始めると遠ざかります。</figcaption>
</figure>

</details>

<!--TURN-->式の所ごとに仮説を置き、一歩を平面の上で見ました。次は、その式のふるまいを解釈します。<!--/TURN-->

<!--PART:第三部|式を逆にたどると、どんなポテンシャルが見えるか-->

<!--PARTLEAD-->

<a id="jp-question"></a>式の所ごとに置いた仮説から、pjdhiro は次の問いを立てました。

<strong>pjdhiro の問い：</strong>仮に、起業家（プロジェクト推進者）の行動の二乗という何かがあって、それが Love の力で引き寄せられるなら、起業家の行動の結果は、そもそもどんなポテンシャルだったのか？

二乗を、起業家の中で起きる自己と自己の掛け算と置きました。その置き方から、pjdhiro は、こうも見ています。

<strong>pjdhiro の見方：</strong>脳内の自己と自己の掛け合わせなら、脳内の自己”達”が可能性だよね。

第三部では、この問いを、同じ式を逆にたどって見ていきます。起業家の思考・心理・行動が一歩ごとに移っていった跡を前へ打つと、どこに行き着き、そこから遡ると何が出てくるのか。

<!--/PARTLEAD-->

## ジュリア集合を、逆にたどる

<!--OPEN-->

<a id="jp-back"></a>式の一歩は、逆に一段戻すこともできます（数学では、一歩を逆に戻す決まりを逆写像と言います）。`c` の分を引いてから、平方根（`√`）を取ります。二乗して 4 になる数が 2 と −2 の二つあるように、平方根はプラスとマイナスの二つあります。

[二乗で角度が二倍になった](#jp-sq)のを逆に戻すので、平方根で角度は半分になります。マイナスの平方根は、もう一方を 0 の周りに半回転させた写しになります。pjdhiro は 2025 年 5 月、ジュリア集合の形を、点がどこから来たかをさかのぼる向きから動かして見て、この所を記事に次のように書いています。記事は、Steven Wittens の記事「[How to Fold a Julia Fractal](https://acko.net/blog/how-to-fold-a-julia-fractal/)」の図を参考にしていました。

<strong>pjdhiro の見方：</strong>☯️陰陽マークのように見える。円の分割（平方根による角度が半分になる）と反転コピー（マイナスの平方根）の箇所が。

（pjdhiro の公開文「[陰陽なJulia集合を逆にたどる](https://uminomae.github.io/pjdhiro/20250531julia/)」から）

その一段を、下の図で一歩ずつ見ます。図の左は、`c` を選ぶための地図で、マンデルブロ集合（「[ジュリア集合とは](#jp-about-julia)」の地図）です。右の図の背景には、この陰陽の印を薄く描いています。

<figure class="glow-card reader-figure jp-fig" id="jp-fold" data-peek>
<p class="jp-fig__title">遡る一段：円を、c の分だけ戻して ±√ で二つに分け、畳む</p>
<div class="jp-fig__grid jp-fig__grid--fold">
<div class="jp-fig__panel"><p class="jp-fig__label">c を選ぶ地図（黒い形の中をクリックすると c が変わる）</p><canvas id="jp-fold-c" width="300" height="260" aria-label="マンデルブロ集合。黒い形の中でクリックした所が c になる"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">大きさ 2 の円を、一歩ずつ遡る（▶ か「一歩進める」をクリック）</p><canvas id="jp-fold-cv" width="520" height="520" aria-label="大きさ 2 の円を、− c の平行移動と、角を半分にする √ と、半回転の写しの三歩で一段ずつ遡る。色は、その部分が前の曲線のどこから来たか。背景に薄い陰陽の印"></canvas></div>
</div>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-fold-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-fold-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-fold-back" class="jp-media__word">一歩戻す</button><button type="button" id="jp-fold-step" class="jp-media__word">一歩進める</button></div>
<div class="jp-fig__btns" role="group" aria-label="c の例"><button type="button" data-fc="-0.79,0.13">c = −0.79 + 0.13i</button><button type="button" data-fc="-0.123,0.745">c = −0.12 + 0.75i</button><button type="button" data-fc="golden">黄金角の c</button><button type="button" data-fc="-0.8,0.16">c = −0.8 + 0.16i</button><button type="button" data-fc="-1,0">c = −1</button><button type="button" data-fc="0,0">c = 0（円のまま）</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-fold-out">図はページの中の JavaScript で描きます。</p>
<figcaption>大きさ 2 の円を、遡る一段 <code>±√(w − c)</code> で一段ずつ遡ります。一段を「− c」「√」「−√」の三歩に分けて、一歩ずつ進めたり戻したりできます。色は、その点が最初の円のどこから来たかで、同じ色の所は、最初の円の同じ所から来ています。薄い灰の線は、その一歩の前の形です。背景に薄く描いた陰陽の印（☯）は、上の pjdhiro の見方の所（√ で角が半分になって右半分に縮み、−√ の半回転の写しが左半分を埋める）に重ねたものです。</figcaption>
</figure>

<details><summary>詳しく — 図の見方：一段を三歩に分けて遡ると、円が畳まれる</summary>

この図は、Steven Wittens の「[How to Fold a Julia Fractal](https://acko.net/blog/how-to-fold-a-julia-fractal/)」（2013）の見せ方に倣って、このページで新しく描いたものです。Wittens は、点が収まる円を、遡る向きに一段ずつ畳んでいくと、ジュリア集合の形になる様子を、動く図で見せています。図では、大きさ 2 の円の上の点を、`±√(w − c)` で一段ずつ遡ります。一段を「− c」「√」「−√」の三歩に分けて、一歩ずつ進めたり戻したりできます。

円の上の一点は、一段遡るごとに二つに分かれ、二つの点は、0 を挟んで向かい合います。前の曲線の一周が、右の半分と左の半分に一回ずつ写り、円が自分に巻きついて畳まれます。くびれと突き出しは、段ごとに細かくなっていきます。

一歩目の「− c」で、曲線の全体を <code>−c</code> だけずらします（矢印）。二歩目の「√」で、0 の周りの角を半分に、0 からの距離を √ にします。曲線は、0 から左へのびる線（負の実軸）で切れ、一周が右半分の半周に縮みます。三歩目の「−√」で、その写しを 0 の周りに半回転させたもう一つの写し（濃い色）が、左半分を埋めます。曲線の内側は、遡った段の数だけ前へ打っても大きさ 2 を超えない点の集まりで、段を重ねるほど、くり返しても遠くへ行かない点の集まり（充填ジュリア集合）に寄ります。段が深くなると、線は、境目の細かい入り江（巻き込み）の奥まで追いきれずに横切るので、薄くしています。形は、内側の塗りで見られます。

図の最初の `c` = −0.79 + 0.13i は、左の地図の黒い形の中で、本体の左隣の丸い房の、ふちの近くにあります。形はひとつながりなので、段をいくら重ねても曲線は一本のままです。ふちに近いので、境目の模様は、渦を巻くように巻き込みます。巻き込みは、20 段を過ぎたころから見えてきます（図は 30 段まで）。ページの上の「ジュリア集合とは」のサムネイル（`c` = −0.8 + 0.16i）と、ほぼ同じ形です。その −0.8 + 0.16i は、黒い形のわずかに外にあります。0 から前へ打つと 39 歩目で大きさ 2 を超えるので、段を 39 より深く重ねると曲線は二つに切れ、遠くへ行かない点は、かけらに分かれます（この図の 30 段までは、一本のままです）。

</details>

同じ記事は、遡った先を、こう見ています。

<strong>pjdhiro の見方：</strong>発散しそうでしない境界で複雑な模様になる。「境界が曖昧な地点」＝「創造が生まれる土壌」という直感にまた一つ。

（同じ公開文「[陰陽なJulia集合を逆にたどる](https://uminomae.github.io/pjdhiro/20250531julia/)」から）

## 値を前へ打つと渦になり、遡るとジュリア集合の形になる

<!--OPEN-->

<a id="jp-vortex"></a>前へ進めて渦になるのは、`c` がマンデルブロ集合の本体（大きなハート形）の中にあるときです。

よく見るジュリア集合の絵は、平面の全部の点から式をくり返して塗り分けた、全探索の絵です（章の終わりの畳みの図）。この章では、0 の一点から前へ打った値 `z₀, z₁, z₂…`（赤）が、一本の道を歩いた跡です。その赤の一点から、同じ式を逆に一段ずつ遡ると、遡りは木になります。

<figure class="glow-card reader-figure jp-fig" id="jp-btree">
<p class="jp-fig__title">遡りの木：赤の一点から、一段ごとに +√ と −√ の二つに分かれる</p>
<div class="jp-fig__grid jp-fig__grid--btree">
<div class="jp-fig__panel"><p class="jp-fig__label">木（根が赤の一点。左の枝が +√、右の枝が −√）。点をクリックすると、根からの道が出る</p><canvas id="jp-btree-t" width="560" height="380" aria-label="遡りの木。根は赤の一点で、一段ごとにどの点も +√ と −√ の二つの枝に分かれる。実際に通ってきた道は赤い太線"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">同じ点を平面に打つ（薄い色の形の縁が、ジュリア集合の境目）</p><canvas id="jp-btree-p" width="420" height="420" aria-label="遡った点を平面に打つ。浅い段は紺、深い段は金で、深い段ほど薄い色の形の縁に寄る"></canvas></div>
</div>
<div class="jp-media" role="group" aria-label="遡りの操作"><button type="button" id="jp-btree-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-btree-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-btree-back" class="jp-media__word">一段戻す</button><button type="button" id="jp-btree-step" class="jp-media__word">一段遡る</button></div>
<div class="jp-fig__btns" role="group" aria-label="c の例"><button type="button" data-bc="-0.79,0.13" aria-pressed="true">c = −0.79 + 0.13i</button><button type="button" data-bc="golden" aria-pressed="false">黄金角の c</button><button type="button" data-bc="-0.123,0.745" aria-pressed="false">c = −0.12 + 0.75i</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-btree-out">図はページの中の JavaScript で描きます。</p>
<figcaption>根は、0 から 5 歩前へ打った赤の一点 <code>z₅</code> です。一段遡るごとに、どの点も <code>+√(w − c)</code> と <code>−√(w − c)</code> の二つに分かれ、k 段目は 2 の k 乗の点になります。木は 5 段まで、平面には 10 段まで同じ点を打ちます（紺が浅い段、金が深い段）。赤い太線は、実際に前へ通ってきた道で、5 段で出発の 0 に着きます。ほかの枝は、通らなかった一つ前で、段が深いほど、薄い色の形の縁（ジュリア集合の境目）に寄ります。木の点か平面の点をクリックすると、その点と、根からの +√・−√ の道が出ます。計算は Claude。</figcaption>
</figure>

下の図は、この遡りを、前へ打った赤の渦と一枚に重ねて、段を 100 まで深くしたものです。

<details><summary>詳しく — よくある塗り分けと、この章の打ち方の違い（計算式とプロット）</summary>

三つとも同じ式 `z → z² + c` を使い、`c` は一つに決めておきます。違うのは、どこから始めるか、何をくり返すか、何を平面に打つかです。

<div class="tablefit cols-4">

| | よくある塗り分け | 前へ打つ（赤） | 遡る（紺から金） |
|---|---|---|---|
| 出発点 | 平面のすべての点（画面の一つ一つの点を `z₀` にする） | 0 の一点だけ | 前へ打った赤の一点 `zₙ` |
| くり返す式 | `zₙ₊₁ = zₙ² + c` | `zₙ₊₁ = zₙ² + c` | `wₖ₊₁ = +√(wₖ − c)` と `−√(wₖ − c)` の両方（一段ごとに二倍に分かれる） |
| やめる所 | `zₙ` の原点からの距離が 2 を超えたら（遠くへ行く）。決めた回数（この章の図では 110 回）超えなければ、行かないとみなす | 決めた歩数まで（この章の図では、はじめ 100 歩。200 歩まで） | 決めた段数まで（この章の図では、はじめ 100 段。100 段まで） |
| 平面に打つもの | 出発点の位置に、遠くへ行くまでの回数を色にして塗る。行かない点は濃い色 | 出てきた値 `z₁, z₂, z₃…` のそれぞれの位置 | 遡って出てきた点（`k` 段目は `2ᵏ` 通り。この章の図では、11 段目までは全部、それより深い段は 2,048 本の道を一段ごとに枝を一つ選んで遡ったもの） |
| 見えるもの | 行かない点の集まり（充填ジュリア集合）と、その縁（ジュリア集合） | 一つの点の通った跡。`c` がマンデルブロ集合の本体（大きなハート形）にあると、一点 `z*` の周りを回りながら寄る渦 | 浅い段は渦の近く。段が深くなるにつれて縁（ジュリア集合）に寄り、内側は塗られない。枝の一つは、実際に通ってきた `zₙ₋₁, zₙ₋₂…` |

</div>

塗り分けは、出発点ごとに「行き先が遠くか、そうでないか」を色にした地図です。一つ一つの点がどう動いたかは、絵に残りません。前へ打つ赤は、その逆に、一つの点の動きだけを残した絵です。渦の回る角度と寄る割合は、`z*` での傾き `λ = 2z*` で決まり、一歩ごとに角度 `arg λ` だけ回り、`|λ|` 倍に寄ります（この章のスライダの二つの値）。遡って点を撒き、縁を描く方法は、ミルナーの講義録 p.3-6 に描き方として出てきます。

c を選ぶ地図（マンデルブロ集合）は、塗り分けと同じ計算を、`z₀` を 0 に決めて、`c` のほうを平面の一つ一つの点にして回したものです（章の終わりの畳み）。

</details>

<figure class="glow-card reader-figure jp-fig" id="jp-lab" data-peek>
<p class="jp-fig__title">前へは渦、遡ると境目：同じ式を、0 から前へ打ち、その一点から遡る</p>
<div class="jp-fig__grid">
<div class="jp-fig__panel"><p class="jp-fig__label">c を選ぶ地図（クリックすると c が変わる）</p><canvas id="jp-lab-c" width="300" height="260" aria-label="マンデルブロ集合。クリックした所が c になる"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">0 から前へ打った値（赤）と、赤の一点から遡った枝（紺から金）。図をクリックすると、遡り始める赤の点が変わる</p><canvas id="jp-lab-1" width="420" height="420" aria-label="前へ打った値の軌跡と、その一点から一段ごとに二つに分かれて遡った点。実際に通った道は赤い太線"></canvas></div>
</div>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-lab-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-lab-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-lab-step" class="jp-media__word">一歩進める</button></div>
<div class="jp-fig__btns"><button type="button" id="jp-lab-deeper">一段深く遡る</button><button type="button" id="jp-lab-bg" aria-pressed="false">よくある塗り分けを薄く重ねる</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-lab-out">図はページの中の JavaScript で描きます。</p>
<div class="jp-fig__group"><p class="jp-fig__glabel">決まった c で見る</p>
<div class="jp-fig__btns"><button type="button" data-lc="golden">黄金角（137.5°）で回る c</button><button type="button" data-lc="-0.1248,0.6152">120° で回る c</button><button type="button" data-lc="-1,0">c = −1</button><button type="button" data-lc="-0.123,0.745">c = −0.12 + 0.75i</button><button type="button" data-lc="-0.8,0.16">c = −0.8 + 0.16i</button><button type="button" data-lc="0.3,0">c = 0.3（外へ出る）</button></div></div>
<div class="jp-fig__group"><p class="jp-fig__glabel">歩数と段数を変える</p>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>前へ打つ歩数（遡り始める点） <output for="jp-lab-n">100</output></span><input type="range" id="jp-lab-n" min="0" max="200" step="1" value="100"></label>
<label class="jp-fig__slider"><span>遡る段数 <output for="jp-lab-d">100</output></span><input type="range" id="jp-lab-d" min="0" max="100" step="1" value="100"></label>
</div></div>
<div class="jp-fig__group"><p class="jp-fig__glabel">自分で c を選ぶ（どちらで動かしても、もう一方が揃う）</p>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>一歩ごとに回る角度 <output for="jp-lab-deg">137.5°</output></span><input type="range" id="jp-lab-deg" min="0" max="360" step="0.1" value="137.5"></label>
<label class="jp-fig__slider"><span>一歩ごとに寄る倍率 <output for="jp-lab-r">0.970</output></span><input type="range" id="jp-lab-r" min="0.5" max="0.995" step="0.005" value="0.97"></label>
<label class="jp-fig__slider"><span>c の実部 <output for="jp-lab-re">−0.378</output></span><input type="range" id="jp-lab-re" min="-2.25" max="0.75" step="0.001" value="-0.378"></label>
<label class="jp-fig__slider"><span>c の虚部 <output for="jp-lab-im">0.562</output></span><input type="range" id="jp-lab-im" min="-1.3" max="1.3" step="0.001" value="0.562"></label>
</div></div>
<figcaption>前へは 0 から、はじめは 100 歩、最大 200 歩。原点からの距離が 2 を超えたら外へ出たとして止めます。遡りは、赤の一点（いま打った最後の歩の値。紺の点）から、一段ごとに +√ と −√ の両方をたどります。はじめは 100 段遡ります。色は、紺が浅い段、金が深い段です。赤い太線は、そのうち実際に前へ通ってきた値（一つ前の歩、その前の歩…）をたどる一通りです。計算は Claude。</figcaption>
</figure>

<details><summary>手を動かして確かめる — こう動かすと、こう見える</summary>

- 遡る段数を 0 にして、「一段深く遡る」を何度かクリック：紺の点から、一段ごとに枝が二つに分かれます。赤い太線（実際に通ってきた道）は一通りだけで、ほかの枝は渦から離れて外へ広がり、8 段ほどで境目の形が見えてきます。
- 遡る段数を 100 に戻す：12 段より深い段は、金の点が境目の上に細かく散ります。深く遡るほど、どこから遡っても同じ境目に寄ることが見えます。
- 「前へ打つ歩数」を 12 ほどに下げる：100 歩目の値は寄る一点にほとんど重なっていて、実際に通ってきた道もその一点に重なって見えません。歩数を下げると、赤い太線が渦をさかのぼって 0 のほうへ戻る道として見えます。
- 図の中の赤い渦の別の点をクリック、または「前へ打つ歩数」を動かす：どの歩の値から遡っても、実際の道の一通りのほかは、同じ境目に散ります。
- 「最初から」をクリックして「再生」：赤い点が一歩ずつ打たれ、渦を巻いて一か所へ寄っていきます。遡りは、そのつど最後の歩の値から描き直されます。
- 「よくある塗り分けを薄く重ねる」：深い段の点が、塗り分けの縁と重なることを確かめられます。
- 回る角度を 120° や 90° の近くにする：寄っていく点が、ほぼ三本、四本の筋に並びます。黄金角（137.5°）では、筋がそろわず、ひまわりの種の並びに近い散らばり方になります。
- 寄る倍率を 1 に近づける：寄るのが遅くなり、渦の巻きが増え、境目の形も変わります。
- 左の地図で、黒い形の外をクリック（または「c = 0.3」）：赤は外へ出て、遡った枝は一つながりでない塵のように散ります。

</details>

前へ打った赤い点は、外へ飛び出さず、一か所の周りを、一歩ごとに同じ角度だけ回りながら、渦を巻いて寄っていきます。その渦の上の一点から遡ってみると、一段ごとに道が二つに分かれます。実際に通ってきた道は、そのうちの一通りだけで、ほかの枝は渦から離れて外へ広がり、8 段ほどでジュリア集合の境目の近くに集まります。一つの式を前へ進めた跡と、後ろへ遡った跡が、渦と込み入った境目という、まるで違う形になります。大きなハート形の中の、実数でない `c` なら、どれを選んでも、この関係は変わりません（実数の `c` では、回らずにまっすぐ寄ります）。

<details><summary>詳しく — 図の最初の c と、数学で確かめられていること</summary>

図の最初の `c` は、一歩ごとに回る角度が約 137.5°（黄金角）になるように選んだ値で、値は一歩ごとに 0.97 倍に寄っていきます。境目の上の点から遡った点が境目のどこにでも近づくことは、数学で確かめられています（ミルナーの定理 3.9）。渦の上の点から遡った枝が境目に寄ることは、Claude が計算で確かめました（黄金角の `c` で、5・30・500 歩目のどの値から遡っても、8 段目の点の 7 割より多くが、境目から 0.01 より近い）。

遡る枝の数は、k 段遡ると 2 の k 乗通りに分かれ、100 段では約 1.27 × 10 の 30 乗通りになるので、全部は打てません。図は、11 段目（2,048 通り）までは枝を全部打ち、それより深い段は、その 2,048 本の道を、一段ごとに +√ と −√ のどちらか一つを選んで遡って打ちます（一つを選んで遡るのは、ジュリア集合を描くよく知られた方法です）。スライダの、回る角度と寄る倍率は、寄る一点 z* での傾き λ = 2z* の角度と大きさで、c = λ/2 − λ²/4 の関係にあります（倍率が 1 より小さいときだけ決まる）。

</details>

この図を見て、pjdhiro は次の問いを立てました。

<strong>pjdhiro の問い：</strong>この渦の軌跡と、ジュリア集合の関係が何を意味するのか。それを直感で読み取りたいのです。

起業家のたとえに戻すと、前へ打った赤は、起業家の思考・心理・行動が一歩ごとに移っていった跡で、実際に通ってきた一通りの道と読めます。遡ると、一段ごとに、ありえた一つ前が二つに分かれます。pjdhiro は、起業家は渦を巻くように進み、違うルートで来ていたら、その渦はジュリア集合のような軌跡だったかもしれない、と見ています。赤い太線のほかの枝は、認知されなかった道かもしれず、それらはジュリア集合の境目に散ります。同じ枝は、起業家がどこから来たかの来歴とも同じ形をしています。人は父と母の二人から生まれ、k 代前の親の席は 2 の k 乗あるからです。

この振る舞いを、Love駆動開発の言葉で読んでみます。読みは一つに決まらないので、いまの読みを並べます。

- 残ると遠ざかる：`c` を足すくり返しで、外へ出ずに残るのは、関わりが続いて形になること、外へ遠ざかるのは、散って切れること、と当ててみることができます。
- 駆動源：境目の形を決めているのは `c` です。同じ `c` なら、どの値から遡っても同じ境目に寄ります。一歩ごとに引き寄せる駆動源が、そのまま場の形を決めている、と読めるかもしれません。
- 場：境目は、遠くへ行きそうで行かない所で、認知されなかった道の散る所です。pjdhiro は 2025 年の記事で、そこを「創造が生まれる土壌」と見ました。
- 渦：前へ打った渦は、「[創造とは](../cs/)」が五つの段に置く渦かもしれない、と pjdhiro は見ています。

<details><summary>詳しく — よく見るジュリア集合の絵と、ほかの c（c を選ぶ地図）</summary>

よく見るジュリア集合の絵（塗り分け）も、ここで見られます。左の地図で `c` をクリックするか、下のスライダで `c` の実部と虚部を動かすと、右に、その `c` で残る形が出ます。遡ると境目に集まる様子は、本文の図「前へは渦、遡ると境目」で見られます。

<figure class="glow-card reader-figure jp-fig" id="jp-paint">
<p class="jp-fig__title">よくある塗り分け：c を一つ選び、平面のすべての点から打って塗る</p>
<div class="jp-fig__grid">
<div class="jp-fig__panel"><p class="jp-fig__label">c を選ぶ地図（c の平面）。クリックすると c が変わる</p><canvas id="jp-mand" width="520" height="460" aria-label="マンデルブロ集合。クリックした所が c になる"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">その c で残る形（z の平面）</p><canvas id="jp-julia" width="520" height="460" aria-label="選んだ c の充填ジュリア集合"></canvas></div>
</div>
<div class="jp-fig__btns" role="group" aria-label="c の例"><button type="button" data-jc="0,0">c = 0（円）</button><button type="button" data-jc="-1,0">c = −1</button><button type="button" data-jc="-0.378,0.562">黄金角の c</button><button type="button" data-jc="-0.123,0.745">c = −0.12 + 0.75i</button><button type="button" data-jc="-0.8,0.16">c = −0.8 + 0.16i</button><button type="button" data-jc="0.3,0">c = 0.3（地図の外）</button></div>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>c の実部 <output id="jp-cre-out">−0.800</output></span><input type="range" id="jp-cre" min="-2.25" max="0.75" step="0.001" value="-0.8"></label>
<label class="jp-fig__slider"><span>c の虚部 <output id="jp-cim-out">0.160</output></span><input type="range" id="jp-cim" min="-1.3" max="1.3" step="0.001" value="0.16"></label>
</div>
<p class="jp-fig__readout" id="jp-readout">図はページの中の JavaScript で描きます。</p>
<figcaption>左は、0 から始めて <code>z → z² + c</code> をくり返しても遠くへ行かない <code>c</code> の集まり（マンデルブロ集合）。右は、選んだ <code>c</code> で、くり返しても遠くへ行かない点（濃い色）と、行ってしまう点（薄い色ほど早く行く）。<code>c</code> を地図の外に置くと、形はひとつながりでなく、かけらに分かれます。</figcaption>
</figure>

</details>

<details><summary>出典</summary>

出典：J. Milnor (1990) "[Dynamics in One Complex Variable: Introductory Lectures](https://arxiv.org/abs/math/9201272)"（ストーニーブルック数理科学研究所の講義録。1991 年 9 月の改訂版。arXiv の本文で照合済）。ジュリア集合の一点から一つ前の点をくり返し集めると、ジュリア集合のどこにでも近づくこと（定理 3.9）と、それを使う絵の描き方は p.3-6。図の値（c ≈ −0.378 + 0.562i、不動点の大きさ 0.485、一歩ごとの回転 137.5°・0.970 倍、前へ打った値の大きさの最大 0.725）は Claude が計算した。

</details>

## 駆動源と場は、別々のものではないのか

<!--OPEN-->

式で確かめられるのは、遡った先の境目の形が `c` ごとに決まる、というところまでです。ここからは、式の外へ出ます。Love と呼びたいものを駆動源として、起業家が意思決定していると見たら、その場はジュリア集合のようなものかもしれない。その仮説で、第三部の頭の問いに近寄ります。

<a id="jp-idea"></a>pjdhiro は、そのポテンシャルを、ジュリア集合の形を見たときの印象から、神・愛・美と呼ばれてきたものに見ています。問いの筋は、次のように整理しています。

<strong>pjdhiro の見方：</strong>起業家は、自身を回転させるように、認知できるものと、し得ないもので進む。それは、体感では、神・美・愛のようなもので駆動する。それは、ジュリア集合のようなポテンシャルから出る。かな。

一歩ごとに引き寄せる `c` と、その `c` が形を決める境目は、別々のものではないのかもしれません。問いの筋の「駆動する」と「ポテンシャルから出る」は、この関係に重ねて読めそうです。冒頭の問い「ジュリア集合のような何かが、神・愛・美のポテンシャルなのではないか」は、この重なりを、神・愛・美の名で問うたものです。

<!--TURN-->駆動する `c` と、形の出てくる境目を、一つの問いの筋に重ねました。次は、美の側から、もう一度この場に近寄ります。<!--/TURN-->

<!--PART:第四部|美の定義から入った、四段の仮説-->

## 四段の仮説の見取り

<!--OPEN-->

<a id="jp-four"></a>第三部には、二つの問いが残りました。前へ打った渦と、遡ったジュリア集合の境目の関係は、何を意味するのか。起業家の行動の結果は、そもそもどんなポテンシャルだったのか。pjdhiro は、この二つに、美の定義から入って、四段の仮説を立てました。問いの筋のうち、神・美・愛のようなもので駆動し、それがジュリア集合のようなポテンシャルから出る、という所に、美の側から近寄る仮説です。

- 一つ目：美は、美醜・恐怖の入り乱れたところから出る（章「美は、どこから出るのか」）
- 二つ目：ジュリア集合に似た形は、自然の中に、善悪の判断のない形として並ぶ。その形が神や愛のようなポテンシャルの場で、そこから元型のようなイメージや美が生まれる（章「ジュリア集合に似た形を、自然の中に探す」「その形が、神や愛のようなポテンシャルの場になるのか」）
- 三つ目：美・神・愛が同じなら、愛で駆動するプロジェクトの場の形も、そこから生まれる（章「美・神・愛が同じなら、プロジェクトの場の形は」）
- 四つ目：それがあらゆる大きさで自己相似なら、至る所にジュリア集合が現れる（章「どの大きさでも同じ形なら、至る所に現れる」）
- 結び：美は、起業家のエネルギーに近い（章「美は、起業家のエネルギーに近いか」）

四段のあいだには飛躍があります。番号と並べ方は、Claude が対話を整理して付けました。四段を言い終えて、pjdhiro はこう添えました。

<strong>pjdhiro の見方：</strong>この四段が、私の直感的な仮説です。

四段は、これまでの着想の延長にあります。pjdhiro は、ジュリア集合を見て、創造の五つの段（場・波・縁・渦・束）の着想を得ました。そのあと「[創造とは](../cs/)」で、30 の分野の論を原典で読み、似た構造をいろいろな分野に見つけてきています。四段の仮説は、その延長にある着想です。

## 美は、どこから出るのか

<a id="jp-awe"></a>一つ目は、美がどこから出るか、という仮説です。入口は、ひまわりの渦でした。

<strong>pjdhiro の仮説（一つ目）：</strong>黄金比のひまわりの渦は、美しさを感じる。黄金比というのも、美しさの定義の一つ。そのポテンシャルは、ジュリア集合の形。それは、見る人によっては、恐ろしさや醜さも感じる。美は、美醜・恐怖の入り乱れたところから出る、という解釈が一つ目。

ひまわりの種は、黄金比から出る角度（黄金角、約 137.5°）ずつ回る渦に並びます。第三部の図の最初の `c` は、前へ打った値がこの角度ずつ回るように選んだ値です。pjdhiro は、黄金比を美しさの定義の一つと見て、その渦の奥にあるもの（ポテンシャル）を、同じ式を遡ると出てくるジュリア集合の形に見ています。

<figure class="glow-card reader-figure jp-fig" id="jp-golden">
<p class="jp-fig__title">黄金角の渦と、ひまわりの並び：同じ角度で回り、距離の変わり方だけが違う</p>
<div class="jp-fig__grid">
<div class="jp-fig__panel"><p class="jp-fig__label">渦：黄金角の c で前へ打った値（寄る一点の周りを拡大）</p><canvas data-g="2" width="420" height="420" aria-label="一歩ごとに 137.5 度回り、0.97 倍に縮む点の並び"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">ひまわり：種の並べ方（黄金角・距離 √n）</p><canvas data-g="3" width="420" height="420" aria-label="一つごとに 137.5 度回り、外へ広がる種の並び"></canvas></div>
</div>
<figcaption>渦の図は、一歩ごとに 137.5° 回り、0.97 倍に縮みます。外ほど古い点です。ひまわりの図は、中心から外へ数えて一つごとに 137.5° 回り、距離 √n で広がります。実際の花では、外の小花ほど古い（数える向きは、花が育つ順の逆）ので、渦の図と同じく外ほど古く、角度も同じです。違うのは距離の変わり方で、渦の図は一歩ごとに 0.97 倍に縮み、ひまわりの図は √n に比例して伸びます。</figcaption>
</figure>

嵐の海や、切り立った崖の上からの眺めを、美しいのに怖い、と感じたことのある人は多いと思います。ジュリア集合の形も、見る人によっては美しく、見る人によっては恐ろしく、醜くも見えます。

脳を測る側からも、美と崇高（大きく恐ろしいものを前にして、震えるように心を動かされる感じ）の体験が調べられています。

<details><summary>先行研究 — 測ると、美と崇高は分かれるのか</summary>

石津とゼキ（2014）は、一つの写真から美しさと恐ろしさの両方が来うることに触れていて、足場の体感と同じ所に、測る側から触れています。美と崇高を別の働きとして測る見方と、一つの体験の中に見る見方は、同じ体験の違う面に触れているのかもしれません。

数学の式の美しさが、絵や音楽の美と同じ脳の所で働く、というゼキらの別の研究は、読み物「[美とは](beauty.html#bt-euler)」で見ています。

<p><b>石津とゼキが測ったこと</b></p>

神経科学者の石津智大とゼキは、21 人に自然の風景の写真を見せ、崇高と感じる強さを評定してもらいながら、脳の働きを測りました（2014）。崇高の体験で働いた所は、以前の研究で美の体験と結びついた所とは重ならず、崇高と美は、別々の脳の系に乗る、と報告しています。一方で、崇高と感じられた写真は、美しいとも、ときに醜いとも感じられうる、とも書いています。「崇高」という語が、恐れ・畏怖・快と苦の混じりのような、逆向きの感情を一つの傘に入れていることの難しさにも触れています。

出典：Ishizu & Zeki (2014) "[A neurobiological enquiry into the origins of our experience of the sublime and beautiful](https://doi.org/10.3389/fnhum.2014.00891)", *Frontiers in Human Neuroscience* 8:891（本文照合済。出版社の公開版を [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4227571/) で読んだ。CC BY）

</details>

## 神は、なぜ恐ろしくもあるのか

<a id="jp-awe-ground"></a>一つ目の仮説で、美と恐ろしさが一緒に感じられる所には、pjdhiro の体感があります。四段のうち、神が出てくる所の足場です。

<strong>pjdhiro の体験：</strong>ジュリア集合の形状を見た時に感じる、美しさ・恐怖・禍々しさのような印象は、キリスト教の絵画などを見た時に感じたイメージに近い。私の感覚の類似から、神と呼びたいもの、畏怖のような、頼れる存在でありながら恐怖する存在とも言えそう。これが足場です。

この体感は、身体にも出ます。18 世紀の思想家バークが、神の力の前で、人は身震いしながら喜ぶ、と書いた段を読んで、pjdhiro はこう言いました。

<strong>pjdhiro の体験：</strong>これを体感した時の表現は、分裂に近いのでは？だと思います。強烈な退行が身体に出る。たとえば、高所恐怖症や寒気など。

pjdhiro の言う分裂は、精神分析家クラインが書いた分裂のほうです。クラインの分裂は、一つの相手を、よい面と悪い面に割って持つ心の動きです。頼れる像と恐ろしい像が、一つの相手から対で出てきます。

美しいのに恐ろしい、という一つ目の足場には、詩や宗教学の古典が近い所を書いています。

<details><summary>先行研究 — 美と恐ろしさを、一続きに見た人はいるか</summary>

三人から借りるのは、美と恐ろしさが一つの体験の中に在る、という所です。オットーの言う対照の調和は、足場の「頼れる存在でありながら恐怖する存在」と、キリスト教の絵画の印象に、形が近く見えます。バークの、神の力の前で身震いしながら喜ぶ、という言葉を、pjdhiro は「近い」と言いました。その体験を呼ぶ形を境目に見るのは、このページの仮説です。

<p><b>リルケ・バーク・オットーが書いたこと</b></p>

詩人リルケは、『ドゥイノの悲歌』（1923）の第一の悲歌で、美とは、恐ろしいものの始まりにほかならず、私たちはそれをまだどうにか耐えている、と書きました。私たちがそれを讃えるのは、それが、私たちを壊すことを平然と見送っているからだ、と続け、どの天使も恐ろしい、と書きます。直前には、天使に抱きしめられたら、そのより強い存在のために私は滅びるだろう、という行があります。

18 世紀の思想家バークは、『崇高と美の観念の起原』（1757）で、美と崇高を分けて書きました。美は、愛を起こす性質から来ます。崇高は、恐ろしいものから来ます。二つは自然の中で一つのものに混じることがあるが、混じっても同じものにはならない、とバークは、のちの版で書きます。黒と白が混じり合っても、黒と白でなくなるわけではない、というたとえです。初版には無く、のちの版で足された段では、神の力の前で、人は正義と慈悲を知っても恐れを消せず、身震いしながら喜ぶ、と書いています。

宗教学者オットーは、『聖なるもの』（1917）で、聖なるものの体験に、人を退かせる戦慄の面と、惹きつける魅する面の二つを見ました。二つは、対照の不思議な調和をなす、と書きます。崇高の感じは、この対照の調和の、美の側の薄い写しにすぎない、とも書いています。古いビザンチンのいかめしい聖母の絵が、多くのカトリックの信者にとって、ラファエロのやさしい聖母より強い崇敬を集める、という例も挙げています。

<p><b>原文</b></p>

- リルケ：「Denn das Schöne ist nichts als des Schrecklichen Anfang, den wir noch grade ertragen」「Ein jeder Engel ist schrecklich.」
- オットー：英訳の p.31「These two qualities, the daunting and the fascinating, now combine in a strange harmony of contrasts」。ドイツ語では「Kontrast-harmonie」（S.38）。
- バーク 第 3 部 I（初版 pp.73–74）：「By beauty I mean, that quality or those qualities in bodies by which they cause love, or some passion similar to it.」
- バーク 第 3 部 XXVII（1909 年の版 p.107）：「Black and white may soften, may blend; but they are not therefore the same.」
- バーク 第 2 部 V（1909 年の版 p.61）：「If we rejoice, we rejoice with trembling」。

訳は Claude。

出典：Otto (1917) *Das Heilige*（本文照合済。[1925 年の第 13 版の走査](https://archive.org/details/dasheiligeuberda00otto)。イリノイ大学の図書館の蔵書。S.38・52・74）。英訳は Otto, *The Idea of the Holy*, J. W. Harvey 訳, Oxford University Press（[1923 年版の 1943 年の刷の走査](https://archive.org/details/ideaofholyinquir0000otto_k1y1)。pp.31・42・64）／Rilke (1923) *Duineser Elegien*, Die erste Elegie（本文照合済。[Zeno.org の翻刻](http://www.zeno.org/Literatur/M/Rilke,+Rainer+Maria/Gedichte/Duineser+Elegien/Die+erste+Elegie)。パブリックドメイン。底本は『全集』第 1 巻 1955 年の S.685）／Burke (1757) *A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful*, London: R. and J. Dodsley（本文照合済。美の定義は [1757 年の初版の走査](https://archive.org/details/enqphilosophical00burkrich)の第 3 部 I pp.73–74。初版に無い段〔神の力の段・黒と白の段〕は、増補後の本文を収めた [The Harvard Classics 第 24 巻（1909）の走査](https://archive.org/details/harvardclassicso0024char)の第 2 部 V p.61・第 3 部 XXVII p.107。節の番号は版で違う）

</details>

<details><summary>先行研究 — 頼れる像と恐ろしい像は、なぜ対で出るのか</summary>

クライン（1946）は、分裂を、不安への守りとして書きました。それを美や神の体験に当てるのは、pjdhiro の体感からの読みです。

カーハート＝ハリスらの仮説（2014）では、境目（臨界）・退行・元型・霊的な体験の四つが、一つの論に並びます。その並びを足場に借りています。著者たちも、仮説だと書いています。

<p><b>クラインとカーハート＝ハリスらが書いたこと</b></p>

精神分析家メラニー・クラインは、1946 年の論文「分裂的機制についての覚書」で、乳児の心の早い時期を書きました。不安は、滅ぼされる恐れとして感じられ、迫害の恐れの形をとります。その圧の下で、心は一つの相手（乳房）を、よい面と悪い面に割って持ちます（分裂）。よい面は、迫害する面への恐れから守るために誇張されます。クラインは、理想化は迫害の恐れと対で出るもの（corollary）だが、欲求の力からも出て、尽きることのない乳房の像を作る、と書いています。

脳の研究者カーハート＝ハリスらは、2014 年の論文で、サイケデリックの状態・夢・精神病の始まりのような意識を、退行した認知の様式と呼び、それが秩序と無秩序の移り目（臨界）にあるかもしれない、という仮説を出しました。臨界では、べき乗則のような統計が現れる、と書いています。霊的な体験の節では、ユングを引いて、夢や精神病のような変わった状態では元型的な主題が意識に上る、と紹介し、薬を使った人の体験の報告にも元型的な主題が多く出る、と書いています。

<p><b>原文</b></p>

- クライン：理想化は "the corollary of persecutory fear"。
- カーハート＝ハリスら："a regressive style of cognition"、臨界は "a transition zone between order and disorder"。

訳は Claude。

出典：Klein (1946) "Notes on some schizoid mechanisms", *International Journal of Psycho-Analysis* [27:99–110](https://pep-web.org/browse/document/IJP.027.0099A)（PEP-Web の記録・本文は有料。本文照合済。pp.100–102。読んだ走査の写しは、上げた人と権利が確かめられないので、リンクを張りません）／Carhart-Harris, Leech, Hellyer, Shanahan, Feilding, Tagliazucchi, Chialvo & Nutt (2014) "[The entropic brain: a theory of conscious states informed by neuroimaging research with psychedelic drugs](https://doi.org/10.3389/fnhum.2014.00020)", *Frontiers in Human Neuroscience* 8:20（本文照合済。出版社の公開版を [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3909994/) で読んだ。CC BY）

</details>

## ジュリア集合に似た形を、自然の中に探す

<a id="jp-form"></a>二つ目は、形の側からの仮説です。ジュリア集合に似た形を、自然の中に探していきます。

<strong>pjdhiro の仮説（二つ目）：</strong>ジュリア集合の形に似ているものを、探して挙げていくのがいいね。地形とか、植物とか、化学反応とか、細胞とか。実は、自然界で善悪判断のない形状が列挙される。これが二つ目。

挙げられた形は、どれも、誰かが良い悪いを判断して作った形ではありません。ジュリア集合の形も、式をくり返したときに、外へ出ずに残る所の境目に、良いも悪いもなく現れます。

<details><summary>詳しく — ジュリア集合に似た自然の形は、どこまで確かめられているか</summary>

ひまわりの頭花の小花（種）の並びは、フォーゲルの式で描かれてきました。中心から外へ n 番目の小花を、n × 137.5° の向きに、中心から √n に比例する距離に置く式です。植物の形を計算で描く研究の本は、この番号の振り方は実際の小花の齢と逆だ、と書いています。外の小花ほど古い、ということです。

第三部の図で前へ打った値と、この並びを並べた図は、章「[美は、どこから出るのか](#jp-awe)」の「黄金角の渦と、ひまわりの並び」です。

出典：Prusinkiewicz & Lindenmayer (1990) [*The Algorithmic Beauty of Plants*](https://algorithmicbotany.org/papers/abop/abop.pdf), Springer（本文照合済。著者の研究室〔カルガリー大学〕が公開している電子版。第 4 章 pp.100–101。フォーゲルの式 4.1 と、番号が小花の齢と逆であること）。

</details>

## その形が、神や愛のようなポテンシャルの場になるのか

<a id="jp-potential"></a>二つ目の仮説は、形の話から、神と愛の話へ進みます。神と呼ばれる存在を感じてしまう心の作りを、pjdhiro は別の対話で、ユングの元型の概念から見ていました。その話を受けて、二つ目は次のようにまとまりました。

<strong>pjdhiro の仮説：</strong>ジュリア集合のようなものが、神や愛のようなポテンシャルの場で、そこから元型のようなイメージが湧いたり、美と呼ばれたりするものが生まれる。それらは、心を惹きつけられる、という意味で同じ。

元型は、心理学者ユングが、多くの人の心に共通して湧く像の型を呼んだ語です。

形が心を惹きつけ、像や美が湧く場になる、という所には、心理学・数学・哲学から近い論があります。境目や自己相似の形を心や元型に結んだ論、くり返しの行き着く形を心と世界の関わりの印と見た数学者、惹きつけるもの・可能性（ポテンシャル）の語で神を書いた哲学者です。

<details><summary>先行研究 — 境目の形を、心や元型に結んだ論はあるか</summary>

問いの骨組み（境目・自己相似・くり返し・元型・大きさをまたぐこと）にいちばん近い組み立ては、サッコら（2024）とマークス＝ターロウ（2010）でした。二つから借りるのは、境目の形を心に結ぶ、という所です。マークス＝ターロウの、幼いころの自己の全体がのちの表現に自己相似の響きとして現れる、という見方は、pjdhiro の強い仮説（章「どの大きさでも同じ形なら、至る所に現れる」）に、心の側から近く見えます。サッコらが、実数と虚数をまたぐことをユングの意識と無意識に結ぶ所は、`z` の実軸に認知できるもの、虚軸に認知し得ないものを置く、このページの置き方に近く見えます。そこに神・愛・美を重ねるのは、このページの仮説です。

<p><b>サッコらとマークス＝ターロウが書いたこと</b></p>

サッコ、マークス＝ターロウ、ベイトマンは、2024 年の論文で、マンデルブロ集合（ジュリア集合がひとつながりになる `c` の集まり）が、自分の尾をくわえる蛇ウロボロスという、くり返しの古い象徴を体現している、と論じました。集合の美しさは境目にあり、外へ逃げもせず、落ち着きもしない縁に、最も込み入った模様が出る、と書きます。ウロボロスのくり返しは、フィードバックの元型だとします。マンデルブロ集合が実数と虚数をまたぐことを、ユングの意識と無意識の考えと補い合うもの、とも書いています。自然の、おおよその自己相似と、数学の、厳密な自己相似は分けて見るべきだ、とも注意しています。

心理療法家マークス＝ターロウは、2010 年の論文で、フラクタルを、開いていて閉じ、有限で無限、という逆説が形になったもの、と書きました。自然では、フラクタルはしばしば境目を占め、領域を分けると同時につなぐ、とします。精神分析家ウィニコットが、赤ん坊と母、個人と世界のあいだに置いた逆説の空間（潜在空間・potential space）は、フラクタルの境目でよく写せる、と書いています。幼いころの遊びの中の自己の全体が、のちの表現に、自己相似の響きとして現れる、という見方も出しています。

<p><b>原文</b></p>

- サッコら p.1：マンデルブロ集合がウロボロスを "embody" する。p.2：「The beauty of the Mandelbrot set lies in its boundary」。p.4：自然の統計的な自己相似と、数学の厳密な自己相似を分ける。p.5：実数と虚数をまたぐことが、ユングの意識と無意識の考えを "complements" する。
- マークス＝ターロウ p.43：フラクタルは "the embodiment of paradox"。p.44：フラクタルは境目を占め、分けると同時につなぐ。

訳は Claude。

出典：Sacco, Marks-Tarlow & Beitman (2024) "[Archetypal Resonances Between Realms: The Fractal Interplay of Chaos and Order](https://doi.org/10.32388/JK522A.2)", *Qeios* 6(2)（本文照合済。出版元の公開版。CC BY。pp.1–2・4–5）／Marks-Tarlow (2010) "[The Fractal Self at Play](https://www.museumofplay.org/app/uploads/2022/01/3-1-article-fractal-self-at-play.pdf)", *American Journal of Play* 3(1):31–62（本文照合済。出版元〔The Strong 遊びの博物館〕の公開版。pp.43–44）

</details>

<details><summary>先行研究 — くり返しの行き着く形は、虚数と結ばれるか</summary>

この論から借りるのは、くり返しの行き着く形（不動点）を、心と世界の関わりの印と見る所です。図の渦の中心（一歩ごとに寄っていく一点）は、この不動点に当たります。根が虚数のとき、値は寄らずに振動し続ける、という記述は、`√` と虚数に、式の側から触れています。

<p><b>L. カウフマンが書いたこと</b></p>

数学者ルイス・カウフマンは、2005 年の論文「固有形（EigenForm）」で、くり返し `X(t+1) = F(X(t))` の行き着く所 `X = F(X)`（不動点）を、固有形と呼びました。ものは、くり返しのふるまいの印だ、というフォン・フェルスターの考えを受けたものです。入れ子の箱の限りない重なりは、箱を一つ足しても変わらないので、不動点になります。それは物の世界には無く、想像の中に在る、とします。二次方程式を、くり返しの形に書き直すと、根が実数なら値は一つの根に寄り、根が虚数なら、値は寄らずに振動し続ける、とも書いています。結びでは、観察する者は世界の外から見ているのでなく、見えるものは、観察する者と世界が分かれていない、くり返しの関わりの印だ、とします。

<p><b>原文</b></p>

- 不動点は "exists in the imagination"（p.134）。
- 根が虚数のとき、連分数の列は "oscillate with no convergence"（p.135）。
- 結び："there is no separation of the observer and the observed"（p.149）。

訳は Claude。

出典：Kauffman, L. H. (2005) "[EigenForm](https://doi.org/10.1108/03684920510575780)", *Kybernetes* 34(1/2):129–150（本文照合済。[著者の大学の頁に置かれた PDF](http://homepages.math.uic.edu/~kauffman/Eigen.pdf)。出版社の組版。pp.133–135・149）

</details>

<details><summary>先行研究 — 心を惹きつけるものは、どう働くと書かれてきたか</summary>

二人から借りるのは、惹きつけるもの・誘うものとして神を書く語です。ホワイトヘッド（1929）が、神の原初の面を可能性（potentiality）の絶対の富と書く所には、問いの語の「ポテンシャル」がそのまま出てきます。一つ一つの生成のたびに誘いとして働く、という置き方は、一歩ごとに同じだけ加わる `c` の置き方と近く見えます。その形を境目に見るのは、このページの仮説です。

<p><b>アリストテレスとホワイトヘッドが書いたこと</b></p>

アリストテレスは『形而上学』で、宇宙の動きのいちばん初めにあるもの（不動の動者）を、自分は動かずに、愛されるものとして動きを生む、と書きました。ほかのものは、動かされて動かします。動かずに周りを動かす、という点で、読み物「[愛は、重力に似ていないか](gravity-love.html)」が見てきた、重いものが周りの時空をくぼませ、周りを引き寄せる形と、たとえとして似て見えます。

20 世紀の哲学者ホワイトヘッドは、『過程と実在』（1929）の結びで、神を「感じへの誘い（lure for feeling）」、欲求の永遠の促しと呼び、すぐあとに『形而上学』の同じ章の、欲求の対象が動かされずに動かす段を、似た所と違う所がある言い方として引きました。原初の面から見た神は、可能性（potentiality）の絶対の富を、限りなく概念として実現したもので、その面では、現実としては足りていない、と書きます。ホワイトヘッドの神は、力で世界を創るのでなく、真・美・善の見通しで世界を導く「世界の詩人」です。世界の中の愛は天の愛へ移り、また世界へあふれ戻る、とも書いています。

<p><b>原文</b></p>

- アリストテレス『形而上学』Λ 巻 7 章："The final cause, then, produces motion as being loved, but all other things move by being moved."（目的因は、愛されるものとして動きを生み、ほかのものは、動かされて動かす）
- ホワイトヘッド p.521：原初の面から見た神は "the unlimited conceptual realization of the absolute wealth of potentiality"。この面では神は "deficiently actual"。
- p.522："He is the lure for feeling, the eternal urge of desire."
- p.526：神は "the poet of the world, with tender patience leading it by his vision of truth, beauty, and goodness"。
- p.532："the love in the world passes into the love in heaven, and floods back again into the world"。

訳は Claude。

出典：Aristotle, *Metaphysics*, Book XII (Λ), Part 7, W. D. Ross 訳（本文照合済。[MIT の The Internet Classics Archive](http://classics.mit.edu/Aristotle/metaphysics.12.xii.html)）／Whitehead (1929) *Process and Reality: An Essay in Cosmology*, New York: Macmillan（本文照合済。[Internet Archive の走査](https://archive.org/details/processrealityes00whit_1)。プリンストン神学校の図書館の蔵書。第 5 部第 2 章 pp.521–522・526・532）

</details>

ただし、ここには飛躍があります。自然によく見られる形が、なぜ美しいのか。pjdhiro は、それを次のように見ています。

<strong>pjdhiro の見方：</strong>自然界によく見られるポテンシャルの形と、美しさの関係が謎。ここは飛躍しているから、埋めるとした場合、その推論が美の定義に触れそうだ、という読みです。

その飛躍のうち、くり返しが美を生むか、という所は、作る側から考えた建築家が書いています。

<details><summary>先行研究 — くり返しから、美は出るのか</summary>

アレグザンダーから借りるのは、くり返しから美が出る、という作る側の見方です。単純な変換のくり返しから、大きさをまたぐ入れ子と美が出る、という所は、問いの骨組みと同じ向きです。

<p><b>アレグザンダーが書いたこと</b></p>

建築家クリストファー・アレグザンダーは、原稿「調和を求める計算」で、世界のどの部分にも「全体性」という構造があり、それは多くの大きさにまたがる、と書きました。全体性は「中心」からなり、中心は入れ子のくり返しの構造を持ちます。いまある構造を壊さずに深める変換をくり返すと、美しいものが自然に生まれる、とします。一方で、「フラクタル」という語は、狭すぎる語だ、とも書いています。

<p><b>原文</b></p>

- "Centers are recursive in structure"（p.2）。
- 構造を壊さない変換をくり返すと "a beautiful thing arises, naturally"（p.10）。
- フラクタルは "a far too specific term"（p.51）。

訳は Claude。

出典：Alexander, C. "Harmony-Seeking Computations: A Science of Non-Classical Dynamics Based on the Progressive Evolution of the Larger Whole"（本文照合済。ヨーク大学で開かれた研究会が置いた [原稿 version 20 の PDF](https://www.cs.york.ac.uk/nature/workshop/papers/Harmony-Seeking_Computation.pdf)。pp.2・10・51）

</details>

## 美・神・愛が同じなら、プロジェクトの場の形は

<a id="jp-source"></a>三つ目は、二つ目を Love駆動開発につなぐ仮説です。

<strong>pjdhiro の仮説（三つ目）：</strong>もしも、美・神・愛が同じものを指しているとしたら、愛で駆動するのがプロジェクトだとしたら、その場の形は、美のポテンシャルであるジュリア集合から生まれる。かなり飛躍のある仮説ですが。

Love駆動開発は、プロジェクトを動かしているもの（駆動源）を、Love と呼びたいものと置きます。二つ目の仮説では、神も愛も美も、心を惹きつけられる、という点で同じでした。三つ目は、そこに「もしも」を二つ重ねて、プロジェクトの場の形へつなぎます。

「もしも美・神・愛が同じなら」という所にも、古典の足場があります。三つを一つの名に重ねた古典、愛と美を生み出すことと結んだ古典、愛を渦や円い動きとして書いた哲学者です。

<details><summary>先行研究 — 美・神・愛を、一つに重ねた論はあるか</summary>

偽ディオニュシオスから借りるのは、美・神・愛を一つの源に重ね、その源がすべてを惹きつける、という見方です。三つ目の仮説の「もしも」に、古典の側からいちばんはっきり触れています。その源の形を、ジュリア集合のようなものに見るのは、このページの仮説です。

<p><b>偽ディオニュシオスが書いたこと</b></p>

5 世紀末から 6 世紀ごろのキリスト教の著者、偽ディオニュシオス・アレオパギテースは、『神名論』の第 4 章で、神を善・美・愛（エロース）の名で呼びました。美が「美」と呼ばれるのは、すべてのものに美を分け与えるからで、またすべてのものを自分のほうへ来るよう呼び寄せるからだ、と書いています。ギリシア語では「呼ぶ（kaloun）」と「美（kallos）」の音が近く、訳者は注にギリシア語の句を添えています。

すべてのものは、美と善への憧れに動かされる、とも書きます。下のものは上のものを、同じ位のものは互いを、上のものは下のものを、それぞれの仕方で慕います。造り主みずからもすべてを慕い、その慕いが、神を自分の内に留まらせず、宇宙を生み出すほうへ動かした、とされます。神は、慕う者とも、慕われる者とも呼ばれます。動かされ、また動かす、という二つの向きを一つの名に持たせています。

<p><b>原文と、らせんの動き</b></p>

- 第 4 章 7 節：超本質的な美は "It summons all things to fare unto Itself (from whence It hath the name of 'Fairness')"（すべてのものを、自分のほうへ来るよう呼び寄せる。そこから「美」の名を持つ）。
- 第 4 章 10 節："all things are moved by a longing for the Beautiful and Good"（すべては、美と善への憧れに動かされる）。
- 第 4 章 8–9 節では、天の知性と魂の動きを、円・まっすぐ・らせんの三つに分けます。天の知性のらせんの動きは、下のものを導きながら、美と善の周りを絶えず回って、自分であることに留まる動きとされます（魂のらせんは、推論で順に照らされる別の動きです）。

英訳はロルト（1920）。訳は Claude。ギリシア語の原典とは照らしていません。

出典：Dionysius the Areopagite, *On the Divine Names and the Mystical Theology*, C. E. Rolt 訳, London: SPCK, 1920（本文照合済。[Internet Archive の走査](https://archive.org/details/dionysiusareopag00dion)。第 4 章 7 節 p.95、8–9 節 pp.98–99、10 節 pp.99–102、14 節 pp.106–107。トロント大学の図書館の蔵書の走査）

</details>

<details><summary>先行研究 — 愛と美は、生み出すことと結ばれてきたか</summary>

プラトンから借りるのは、愛と美が、生み出すこと（創造）と結ばれている、という所です。美を順に見ていく人が、終わりに「突然」美そのものを見る、という言い方は、見えていなかったものが突如現れる、という気づきの言い方にも近く見えます。

<p><b>『饗宴』が語ること</b></p>

『饗宴』の中で、ソクラテスは、巫女ディオティマから聞いた話として、愛する人たちが目指すのは、美の中で生むこと（体でも魂でも）だ、と語ります。美しいものを順に見ていく人は、やがて美の大海に向かい、終わりに、突然、生じも滅びもしない美そのものを見る、とされます。

<p><b>原文</b></p>

- 目当て："The object which they have in view is birth in beauty, whether of body or, soul."（原文のまま）
- 美の段："the vast sea of beauty"。その美は "not fair in one point of view and foul in another"。
- 生むことは "in the inharmonious they can never be"（調和しないものの中では、決して起きない）。

ジョウエット訳。訳は Claude。

出典：Plato, *Symposium*, B. Jowett 訳（本文照合済。[MIT の The Internet Classics Archive](http://classics.mit.edu/Plato/symposium.html)。ディオティマの話の段）

</details>

<details><summary>先行研究 — 愛は、渦や円い動きとして書かれてきたか</summary>

二人から借りるのは、愛を、渦や円い動きとして書く言い方です。エンペドクレスの、愛が渦の中心に達したとき、すべてが集まって一つになる、という断片は、値を前へ打つと一か所の周りに寄る図の渦と、言葉の上で近く見えます。パースは 1893 年の論文「進化的な愛」で、愛の運動は円い、と書き、作ったものを独立へ押し出すことと、調和へ引き寄せることを、一つの衝動に置きました（読み物「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-love)」）。

集まる向きと分かれる向きを、一つの動きの入れ替わりや一つの衝動の中に見る所は、二つを一つに送る一歩と、一つを二つに開く `√` が、同じ式の前と後ろにあることと重なって見えます。それを式の渦と重ねるのは、このページの仮説です。

<p><b>エンペドクレスが書いたこと</b></p>

紀元前 5 世紀のギリシアの哲学者エンペドクレスは、世界を、愛と争いの二つの力の入れ替わりで書きました。あるときは、愛によって多くのものが一つに集まり、あるときは、争いによって一つのものが多くに分かれます。入れ替わりは止まず、ものは存在の円を巡ります。ある断片では、争いが渦の底へ落ち、愛が渦の中心に達したとき、そこですべてが集まって一つになる、と書いています。一度にでなく、それぞれの所から寄ってきます。争いがまだ退ききらない分は、混じらずに残る、とされます。

<p><b>原文</b></p>

- 断片 17："I shall tell thee a twofold tale. At one time it grew to be one only out of many; at another, it divided up to be many instead of one."（二重の話をしよう。あるときは多から一つに育ち、あるときは分かれて一つから多になった）
- 断片 35："When Strife was fallen to the lowest depth of the vortex, and Love had reached to the centre of the whirl, in it do all things come together so as to be one only"
- パース 1893："The movement of love is circular, at one and the same impulse projecting creations into independency and drawing them into harmony."

エンペドクレスはバーネットの英訳。断片の番号はバーネットの本の番号。訳は Claude。

出典：Burnet (1920) *Early Greek Philosophy*, 3rd ed., London: A. & C. Black（本文照合済。[Wikisource の翻刻](https://en.wikisource.org/wiki/Early_Greek_Philosophy/Empedokles_of_Akragas)。断片 17 は p.207、断片 35 は p.211）／Peirce (1893) "Evolutionary Love", *The Monist* 3(2):176–200（本文照合済。原文と対訳は「[パース「進化的な愛」を日本語で読む](peirce-evolutionary-love-ja.html)」。p.177）

</details>

## どの大きさでも同じ形なら、至る所に現れる

<a id="jp-scale"></a>四つ目は、ここまでの仮説が、大きさを変えても同じ形で成り立つとしたら、という仮説です。

<strong>pjdhiro の仮説（四つ目）：</strong>その仮説が、あらゆるスケールで自己相似だとしたら、宇宙の場や、光の励起する背景など、至る所にジュリア集合が現れる。30 領域で創造が報告された理由の仮説です。

自己相似は、部分を拡大すると全体と同じ形が見える、という性質です。ジュリア集合の境目も、どれほど拡大しても込み入った模様が続きます。もしも美・神・愛の場の形が、どの大きさでも同じなら、宇宙のような大きなものから、人の心の小さな動きまで、至る所に同じ形が現れることになります。pjdhiro は、起業家・組織・社会がフラクタルで、起業家の内面の微細な心理要素も同じ形で相似する、とも見ています。どこかの大きさで当てはまるものが見つかれば、ほかの大きさにも当てて読める、という見方です。

pjdhiro は、それを強い仮説として言い直しています。

<strong>pjdhiro の仮説：</strong>強い仮説として、波間の渦のような創造は、あらゆる学問領域で見つかるほど、遍く存在する。

どの大きさでも同じ形、という所には、部分に全体が入るという東アジアの古典の見方が近く、至る所にある創造を神の名と結んだ研究者もいます。

<details><summary>先行研究 — 部分に全体が入る形は、古くから言われてきたか</summary>

三つから借りるのは、部分に全体が入る形と、一が二に分かれる並びの言い方です。法蔵の、一本の毛に限りない獅子が入る形は、部分に全体が入る、という所で四段の四つ目と重なります。『周易』の繋辞伝の、太極から両儀・四象・八卦へ（1 → 2 → 4 → 8）は、`√` で遡ると点が 2 倍ずつに開く並びと、数の上で同じで、2025 年の記事が ☯ を見た所とも重なります。繋辞伝は生じる向きに、式は遡る向きに二つへ開き、どちらの向きで読むかは、どの変数をどう見るかで変わります。『老子』40 章の「反」は、返るとも、反対に向かうとも読まれ、返ると読めば、遡りと重なります。

<p><b>法蔵・繋辞伝・老子が書いたこと</b></p>

7 世紀から 8 世紀の唐の僧、法蔵は、『華厳金師子章』で、金の獅子の像をたとえに、一本一本の毛の中に、限りない獅子がみな在り、その一本一本の毛が、限りない獅子を帯びて、また一本の毛の中に入る、と書きました。このように重なり重なって尽きない様を、帝釈天の網の珠にたとえています。部分に全体が入り、それがまた部分に入る、という古い言い方の一つです。

『周易』の繋辞伝は、易に太極があり、それが両儀を生み、両儀が四象を、四象が八卦を生む、と書きます。『老子』は、道は一を生み、一は二を、二は三を、三は万物を生む、万物は陰を負い陽を抱く、と書き、別の章で、返ることが道の動きだ、と書きます。

<p><b>原文</b></p>

- 金師子章：「一一毛中皆有無邊師子，又復一一毛帶此無邊師子還入一毛中。…如是重重無盡，猶天帝網珠」。
- 繋辞上伝：「易有太極，是生兩儀，兩儀生四象，四象生八卦」。
- 老子 42：「道生一，一生二，二生三，三生萬物。萬物負陰而抱陽」。40：「反者道之動」。

訳は Claude。

出典：法蔵『華厳金師子章』。宋の淨源の註の本『金師子章雲間類解』（大正蔵 T45 No.1880）に引かれた法蔵の本文で読んだ（本文照合済。[CBETA の頁](https://cbetaonline.dila.edu.tw/zh/T45n1880_p0665c23)。p.665c23–27）／『周易』繋辞上伝（本文照合済。[中國哲學書電子化計劃の頁](https://ctext.org/book-of-changes/xi-ci-shang/zh)）／『老子』40 章・42 章（本文照合済。[中國哲學書電子化計劃の頁](https://ctext.org/dao-de-jing/zh)）

</details>

<details><summary>先行研究 — 至る所にある創造を、神と呼んだ論はあるか</summary>

この論から借りるのは、宇宙から文化までのどの層にも在る創造に、神の名を当てる見方です。

<p><b>S. カウフマンが書いたこと</b></p>

複雑系の研究者スチュアート・カウフマンは、『聖なるものを再発明する』（2008）の序文と第 1 章で、生命の網は物理の法則を破らないが、部分的に法則の外にあり、絶えず創造的だ、と書きました。この創造性は、驚くべきもので、畏れ（awesome）と敬いに値する、とします。そして、神についての一つの見方として、神とは、自然の宇宙・生物圏・人の文化の絶えざる創造性に、私たちが選んで付けた名だ、という見方を出します。

<p><b>原文</b></p>

- "One view of God is that God is our chosen name for the ceaseless creativity in the natural universe, biosphere, and human cultures."
- この創造性は "stunning, awesome, and worthy of reverence"。

訳は Claude。

出典：Kauffman (2008) *Reinventing the Sacred: A New View of Science, Reason, and Religion*, Basic Books（本文照合済。序文と第 1 章からの抜粋を、出版社の許しを得て著者の名で載せた [Edge の頁「Breaking the Galilean Spell」](https://www.edge.org/conversation/stuart_a_kauffman-breaking-the-galilean-spell)で読んだ。本の頁は照らしていない）

</details>

## 美は、起業家のエネルギーに近いか

<!--OPEN-->

<a id="jp-entrepreneur"></a>四段には、行き先があります。美の定義から入ろうと決めたとき、pjdhiro は、行き先も一緒に見ていました。

<strong>pjdhiro の見方：</strong>美とは、起業家のエネルギーと近い。

このページは、`c` を Love と呼びたいものの重力と仮に置き、起業家の思考・心理・行動を一歩ごとに引き寄せるもの（駆動源）と見てきました。章「[c は、一歩ごとに同じだけ引き寄せる](#jp-drift)」で、エフェクチュエーションの論では起業家を動かすものは謎のまま残っている、という pjdhiro の見方に触れました。四段の仮説は、その謎の所に、美・神・愛と同じものを置いてみる見方です。起業家が何かに惹きつけられて動き出すとき、その惹きつけるものは、美しいものに心を惹かれるときと同じものかもしれない。結びは、そう読めます。章「[駆動源と場は、別々のものではないのか](#jp-idea)」の問いの筋の「体感では神・美・愛のようなもので駆動する」は、この結びを、起業家の体感の側から言ったものとして読めます。

章「[美・神・愛が同じなら、プロジェクトの場の形は](#jp-source)」の畳みに置いた古典（偽ディオニュシオス・プラトン・エンペドクレスほか）は、それぞれ、この結びの一部に触れています。それらを並べると、美と愛と神が、惹きつけ、生み出させるものとして重なって見えます。その重なりを起業家を動かすものに見るのが、この結びの仮説です。

このページの芯に戻して読むなら、一人の中で掛け合わさる自己達が、まだ形になっていない可能性で、その可能性を惹きつけて一歩ごとに形にしていくものが、美・神・愛のようなものなのかもしれません（芯と結びをつなぐこの読みは、Claude が置いたものです）。

<!--TURN-->四段の仮説で、問いに近寄りました。最後に、式の所ごとに置いた仮説を並べます。<!--/TURN-->

<!--PART:巻末-->

## 式の所ごとに置いた仮説

<!--OPEN-->

<a id="jp-gaps"></a>このページは、式の所ごとに、起業家の何に当たるかを仮説として置いてきました。所ごとに並べます。

<b>一歩（`→`）：人に会い、気づき、約束する、のくり返し。</b>起業家の行動を、見つけた所から条件を変えた次の木へ移る、入れ子の深さ優先探索のように見ました（第一部）。

<b>`z`：起業家の思考・心理・行動。</b>実軸に認知できる面、虚軸に認知し得ない面を当てました（章「[z は、起業家の思考・心理・行動](#jp-z)」）。

<b>`z²`：起業家の中で起きる、自己と自己の掛け算。</b>掛け合わさる分（`2ab`）は、どちらか一つの自己からは出てきません。気づいていない自分（シャドー）との掛け合わせでは、見込みとの差として振り返られる、と当てました（章「[z の二乗は、起業家の中で起きる、自己と自己の掛け算](#jp-square)」）。

<b>`c`：Love と呼びたいものの重力。</b>一歩ごとに同じ向きへ同じだけ引き寄せ、符号が一つしかないものと当てました（章「[c は、一歩ごとに同じだけ引き寄せる](#jp-drift)」）。

<b>境目：起業家を駆るものが出てくる、ポテンシャルの場。</b>四段の仮説では、神・愛・美のポテンシャルの場と読みました（第三部・第四部）。四段のうち、自然によく見られる形と美しさのあいだ、美・神・愛が同じものを指すかの「もしも」は、飛躍をはらんだまま置いた仮説です。

<details><summary>先行研究 — 問いと四段のどの面に、どの論が触れたか</summary>

括弧の「一つ目」〜「四つ目」は、第四部の四段の仮説の章を指します。一つ目は章「[美は、どこから出るのか](#jp-awe)」「[神は、なぜ恐ろしくもあるのか](#jp-awe-ground)」、二つ目は章「[ジュリア集合に似た形を、自然の中に探す](#jp-form)」「[その形が、神や愛のようなポテンシャルの場になるのか](#jp-potential)」、三つ目は章「[美・神・愛が同じなら、プロジェクトの場の形は](#jp-source)」、四つ目は章「[どの大きさでも同じ形なら、至る所に現れる](#jp-scale)」です。

<div class="tablefit cols-3">

| 問いの面 | 触れていた論（括弧は、その論を置いた畳みのある所） | どう触れていたか |
|---|---|---|
| `z`：認知できる面（実軸）と、認知し得ない面（虚軸） | サッコら（二つ目） | マンデルブロ集合が実数と虚数をまたぐことを、ユングの意識と無意識の考えと補い合うもの、とする。たとえの水準 |
| `z²`：自己と自己の協働（掛け合わせの項） | スキッパーら、ギャラガー、ギャラガーとデイリー、ハーマンスら（第二部の二乗の章） | 自己を中核の無い系の連合と見る（スキッパーら）。側面が足し算でなく互いに変え合う（ギャラガーら）。「私」の位置どうしのやりとりから、前には無かった位置や連合が生まれる（ハーマンスら）。掛け合わせの項を読む足場 |
| 一つ目：美は、美醜・恐怖の入り乱れたところから出る | リルケ・バーク・オットー（一つ目） | 美と恐ろしさが一つの体験の中に在る、と書く。測る側（石津・ゼキ）も、一つの写真から両方が来うることに触れる |
| 一つ目の足場：頼れる存在でありながら恐怖する存在 | リルケ・バーク・オットー・クライン（一つ目） | 天使に抱かれたら滅びる・身震いしながら喜ぶ・戦慄と魅する面の調和・理想化と迫害の恐れの対。身体に出る退行（寒気・高所恐怖）は、pjdhiro の体感 |
| 二つ目：ジュリア集合のようなもの（境目の形） | サッコら・マークス＝ターロウ（二つ目）、カーハート＝ハリスら（一つ目） | 境目に込み入った模様が出る・境目は分けてつなぐ・臨界で霊的な体験。どれも、たとえか仮説 |
| 二つ目：ポテンシャルの場 | ホワイトヘッド・マークス＝ターロウ（二つ目） | 可能性の富・潜在空間の語を借りる。その形を境目に見るのは、このページの仮説 |
| 二つ目：心を惹きつけられる、という意味で同じ | アリストテレス・ホワイトヘッド（二つ目）、偽ディオニュシオス（三つ目） | 愛されるものとして動かす・誘い・呼び寄せる、と言い方が近い。惹きつけるものを一つの源と見る語を借りる |
| 二つ目の飛躍：自然によく見られる形と、美しさ | アレグザンダー（二つ目） | くり返しから美が出る、と作る側から書く。飛躍を渡る足場の一つ |
| 三つ目：美・神・愛が同じものを指しているとしたら | 偽ディオニュシオス・プラトン（三つ目）、ホワイトヘッド（二つ目） | 三つを神の名として重ねる（偽ディオニュシオス）。そのうちの二つを結ぶ（ホワイトヘッド・プラトン） |
| 三つ目：愛で駆動する、その動き | エンペドクレス・偽ディオニュシオス・パース（三つ目） | 愛を、渦の中心・らせん・円い運動と結ぶ。式の渦と重ねるのは、このページの仮説 |
| 三つ目の結び：美は起業家のエネルギーに近い | （このページの仮説） | 上の論が重ねた美・愛・神を、起業家を動かすものに見る |
| 四つ目：あらゆる大きさで自己相似 | 金師子章（四つ目）、マークス＝ターロウ・サッコら・アレグザンダー（二つ目） | 見方として古くから在り、心や作ることに当てる提案もある |
| 四つ目：至る所にある創造 | S. カウフマン（四つ目）、プラトン（三つ目） | 創造を神・美・愛と結ぶ。創造を境目の形に見るのは、このページの仮説 |
| 式：一つに集まる向きと、二つに分かれる向き | エンペドクレス・パース（三つ目）、繋辞伝・老子（四つ目） | 集まる向きと分かれる向きを、一つの動きや並びの中に書く |
| 式：`√`・遡り | L. カウフマン（二つ目）、老子（四つ目） | 根が虚数なら振動する、と式の側から触れる（L. カウフマン）。「反」を返ると読めば、遡りと重なる（老子） |

</div>

美・愛・神を一つの源に重ねる論と、境目や自己相似の形を心に結ぶ論は、それぞれ、問いの一面に触れています。二つを重ねて、源の形を境目に見るのが、このページの仮説です。

</details>

## 原典と、読む順

<a id="jp-reading"></a>このページで読んだ文献のうち、まず読むものを、自分で読むときの順に並べました。どれも、無料で読める写しがあります。

<div class="tablefit cols-2">

| 1. 問いの出発点を読む | pjdhiro の記事「[陰陽なJulia集合を逆にたどる](https://uminomae.github.io/pjdhiro/20250531julia/)」（2025）。逆にたどる動画と、☯ の図があります |
|---|---|
| 2. 起業家のくり返しを読む | サラスバシーとデューの論文（2005、[米海軍大学院の機関リポジトリ](https://hdl.handle.net/10945/41240)）。手段から人と関わり、約束を重ねていく環の図は p.543 です |
| 3. 式の数学を読む | ミルナーの講義録（[arXiv](https://arxiv.org/abs/math/9201272)）。遡った点が境目のどこにでも近づく定理 3.9 は p.3-6 です |
| 4. 美と恐ろしさを読む | リルケの第一の悲歌（[Zeno.org](http://www.zeno.org/Literatur/M/Rilke,+Rainer+Maria/Gedichte/Duineser+Elegien/Die+erste+Elegie)）。冒頭の数行で足ります。続けて、石津・ゼキの論文（2014、[出版社の公開版](https://doi.org/10.3389/fnhum.2014.00891)）で、測る側の結果を見ます |
| 5. 境目と、退行・霊的な体験を読む | カーハート＝ハリスらの論文（2014、[出版社の公開版](https://doi.org/10.3389/fnhum.2014.00020)）。臨界の節と、霊的な体験の節です |
| 6. 自然の形と、境目を心に結ぶ論を読む | マークス＝ターロウ「[The Fractal Self at Play](https://www.museumofplay.org/app/uploads/2022/01/3-1-article-fractal-self-at-play.pdf)」（2010）。境目と潜在空間の段は pp.43–44 です。続けて、サッコらの論文（2024、[Qeios](https://doi.org/10.32388/JK522A.2)）で、境目と元型の組み立てを見ます |
| 7. 美・神・愛を重ねる論を読む | 偽ディオニュシオス『神名論』第 4 章（ロルト訳 1920、[Internet Archive](https://archive.org/details/dionysiusareopag00dion)）。美が呼び寄せる段は 7 節、すべてが美と善への憧れに動かされる段は 10 節です |

</div>

<details><summary>出典の確かめ方</summary>

先行研究の紹介は、Claude が原典を読んで書いた要約です。古典は、パブリックドメインの翻刻と本の走査で読み、頁と節はそれぞれの版のものです。論文は、出版元が公開している本文と、著者の頁に置かれた写しで読みました。クラインの論文は、Internet Archive にある走査で読みました。上げた人と権利が確かめられない写しなので、リンクは張っていません。パースの論文は、このサイトの対訳で照合したものを使っています。英語・ドイツ語・漢文の訳は、どれも Claude です。図の値は Claude が計算しました。

</details>
