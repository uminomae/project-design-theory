# 起業家の漸化式と、ジュリア集合

<figure class="jp-hero"><img src="../assets/img/julia-entre.jpg" alt="生成 AI（Google の Gemini）で作った絵。紺色の宇宙を背景に、金色に光るフラクタルの枝が渦を巻いて広がり、中心へ寄っていく点の並びと、重力で曲がったような格子が重なる。左上に、z → z² + c をくり返す疑似コード「function walk(z, c, n)」の三行が英語で書かれている。数式どおりに計算した図ではない" width="1024" height="572"><figcaption>pjdhiro が生成 AI（Google の Gemini）で作った絵です。数式どおりに計算した図ではありません。</figcaption></figure>

<div class="reader-lead glow-card" id="jp-gist"><span class="reader-lead__label">ざっくりいうと</span>
<p>起業家は、試して外れたら次の枝へ、何かを見つけたら条件を変えて次の木へと、飽きずにくり返して進んでいるように見えます。このページは、その歩みを、一歩の結果が次の一歩の出発になる漸化式として書き、そこから広げていきます。人に会って変化した分を足していくだけの漸化式から始め、それを木の上で戻りながらまとめる再帰へ広げます。次に、自己と自己の掛け算を入れたジュリア集合の漸化式に移り、最後にその式を逆にたどります。</p>
<p>図を一つ動かしながら読む、<a href="https://claude.ai/artifact/CgVQoieGKzqiJMszwRKgwT">高校生向けのやさしい解説</a>もあります。</p>
</div>

<p class="reader-summary__title">概要</p>

起業家の歩みをジュリア集合の式に当てはめる、と聞くと、こじつけに見えるかもしれません。このページを読む効果について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>こじつけのような論であることは否定しません。ジュリア集合に当てはめようとしている、というのは、むしろその通りで、それによって発散思考をしたい。ゴールでなく、次の足場としての発散です。

<p class="reader-lead"><span class="reader-lead__label">工事中</span>工事中のページです。式への当てはめは、どれも仮説として置いたもので、論証ではありません。</p>

出発点は、pjdhiro の次の見立てです。

<strong>pjdhiro の見方：</strong>漸化式は、起業家のよう。Love と呼びたいものは、重力のようにドリフトする。それは、ジュリア集合の漸化式のようだ。

このページは、起業家の一歩を、ジュリア集合を描く式 `z → z² + c` に当てはめます。`z` を起業家の思考・心理・行動（気づきや決定も含む）、`z²` を起業家の中で起きる自己と自己の掛け算、`c` を Love と呼びたいものの重力と、仮に置きます。

<p class="jp-peek-chips"><a href="#jp-about-julia"><img src="../assets/img/julia-thumb.png" alt="" width="96" height="96">ジュリア集合とは</a></p>

<figure class="glow-card reader-figure jp-fig" id="jp-about-julia" data-peek data-peek-dock="ジュリア集合とは" data-peek-thumb="../assets/img/julia-thumb.png" data-peek-title="ジュリア集合とは" hidden>
<p class="jp-fig__title">ジュリア集合とは</p>
<div class="jp-stage"><canvas id="jp-intro-cv" width="520" height="660" aria-label="ジュリア集合ができるまでを、場面ごとに動かして見せるアニメ。c を一つ決め、0 から二乗して c を足すをくり返し、遠くへ行く点と行かない点を塗り分け、その縁がジュリア集合になる。一歩を逆に戻すと点は二つに分かれて境目に集まる。c を変えると形が変わる"></canvas><p class="jp-stage__no" id="jp-intro-no">1 / 8</p><p class="jp-stage__cap" id="jp-intro-cap" aria-live="polite">z も c も、平面の上の一点で表せる数（複素数）です。まず、c を一つ決めます。</p></div>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-intro-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-intro-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-intro-back" class="jp-media__word">一場面戻す</button><button type="button" id="jp-intro-step" class="jp-media__word">一場面進める</button></div>
<figcaption>ジュリア集合は、<code>z → z² + c</code> のような簡単な式をくり返すと現れる形です。名は、フランスの数学者ガストン・ジュリアにちなみます。二乗のはたらきは図「<a href="#jp-sq">二乗を手で動かす</a>」で、遡る一段は章「<a href="#jp-back">ジュリア集合を、逆にたどる</a>」で、手で動かして見られます。図は、このページで計算して描きました（計算は Claude）。出典：J. Milnor (1990) "<a href="https://arxiv.org/abs/math/9201272">Dynamics in One Complex Variable: Introductory Lectures</a>"（arXiv の本文で照合済）。くり返しても遠くへ行かない点の集まり（充填ジュリア集合）の縁がジュリア集合であることは、§17 の補題 17.1（p.17-1）。マンデルブロ集合の定め（0 から打った値が遠くへ行かない <code>c</code> の集まりで、そのとき形がひとつながりになる）は、付録 F（p.F-1）。</figcaption>
</figure>

この見立てから、次の問いが立ちました。

<strong>pjdhiro の問い：</strong>ジュリア集合のような何かが、神・愛・美のポテンシャルなのではないか。

ここでのポテンシャルは、pjdhiro の言葉では「場と呼びたいような、可能性」です。

<div class="reader-lead"><span class="reader-lead__label">今の答え</span>
起業家の一歩の中で、自己と自己の掛け算のようなものが起きている、と見ます。もしも自己が一つでないなら、掛け合わさる自己達そのものが、まだ形になっていない可能性なのかもしれません。Love と呼びたいものを駆動源として、起業家が意思決定していると見たら、その可能性の場は、ジュリア集合のようなものかもしれません。これがこのページの主題です。その場が神・愛・美のポテンシャルではないか、という問いには、美の定義から入った四段の仮説で近寄り、美は起業家のエネルギーに近い、と結びます。
</div>

<div class="reader-lead"><span class="reader-lead__label">構成</span>
<p>前半は、起業家の行動の形を見て、ジュリア集合の式の変数が起業家の何に当たるかを、仮説として当てます。後半は、その式のふるまいを、神・愛・美として、Love駆動開発の視点で読みます。</p>
<ul class="reader-lead__list">
<li><b><a href="#jp-recurrence">第一部 起業家の行動は、入れ子の深さ優先探索のよう</a></b>：起業家の行動の形を、木をたどる探索で見る</li>
<li><b><a href="#jp-rec-def">第二部 それは、ジュリア集合の漸化式のようだ</a></b>：式の変数が、起業家の何に当たるかを、一つずつ見る</li>
<li><b><a href="#jp-question">第三部 式を逆にたどると、どんなポテンシャルが見えるか</a></b>：式を逆にたどり、起業家を駆るものが出てくる場を探す</li>
<li><b><a href="#jp-four">第四部 美の定義から入った、四段の仮説</a></b>：美の側から、同じ場に近寄る</li>
<li><b><a href="#jp-gaps">巻末</a></b>：置いた仮説のまとめと、原典を読む順</li>
</ul>
</div>

<!--PART:第一部|起業家の行動は、入れ子の深さ優先探索のよう-->

## 深さ優先探索は、見つけた所から入れ子になって続く

<!--OPEN-->

<a id="jp-recurrence"></a><a id="jp-dfs"></a>起業家は、どう決めて進むのか。いちばん簡単に書くと、次のくり返しになります。pjdhiro が書いた疑似コードです。

```
# 起業家の漸化式 1：起業家の一歩
今の自分 = はじめの自分
while 続ける:
  会って変化した部分 = 人に会う(今の自分)
  今の自分 = 今の自分 ＋ 会って変化した部分
```

今の自分に、人に会って変化した部分を足したものが、次の自分になります。前の値から次の値を決めるので、漸化式の形です（漸化式は、第二部の頭で数の例で見ます）。

外から見ると、人に会う、をくり返しているだけに見えます。その一歩の中身は、どうなっているのか。pjdhiro の見立ての始まりは、リアルオプションが話題になったときの、一言でした。

<strong>pjdhiro の体験：</strong>リアルオプションの視点が話題になったとき、再帰と反復の関数の違いについて、プログラムを書かない人に、思いつきで「後置再帰って書いたことあります？」と聞いたことがある。伏線を回収するように、向こう側から統合しながら戻ってくるような、と。単なる再帰ではなく。その時、「商いは、飽きない」という言葉を思い出した。それは、抱持という概念につながった。

<strong>pjdhiro の見方：</strong>再帰で書きたくなるのは、深さ優先探索のようなプロセスだからだと思う。ツリーを扱う際の反復、そこでの試行錯誤。起業家や研究者のような、愚直に飽きずにやる姿勢を言いたかったのだと思う。

深さ優先探索は、木の形をした分かれ道をたどる手順です。一つの枝を選んだら、行けるところまで深く進み、行き止まりや外れなら、一つ前の分かれ目まで戻って、まだ試していない次の枝へ進みます。

では、一本の木をたどって何かを見つけたら、そのあとはどうなるのか。

<strong>pjdhiro の見方：</strong>DFS（深さ優先探索）の先で見つけたら、そこから、条件やパラメータを変えて、次の探索が違うツリーに対して始まるんじゃないかな。DFS に DFS が入れ子になっている、ということです。DFS を一回やって人生が終わり、ではないよね。

漸化式 1 の「人に会う」を、この入れ子の深さ優先探索の形に広げ、「商いは、飽きない」として、木と疑似コードに書いてみます。pjdhiro が言った後置再帰は、行けるところまで深く潜ってから、戻ってくるときに、たどった先のものをまとめる書き方です。図と疑似コードは Claude が書いたものです。

<figure class="glow-card reader-figure" id="jp-akinai"><svg viewBox="0 0 480 280" role="img" aria-label="「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図。左の小さな木を深く進み、外れの枝には×が付いて戻る。見つけた所の星から、条件を変えた次の木が立ち、そこでも外れと星があり、さらに次の木が立っていく" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto"><defs><marker id="akn-b" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#5b6476"/></marker></defs><rect x="0" y="0" width="480" height="280" rx="10" fill="#ffffff"/><text x="12" y="24" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">「商いは、飽きない」を、入れ子の深さ優先探索で描く</text><g stroke-width="2.4" stroke-linecap="round"><line x1="60" y1="70" x2="30" y2="130" stroke="#24407a"/><line x1="60" y1="70" x2="90" y2="130" stroke="#24407a"/><line x1="90" y1="130" x2="75" y2="190" stroke="#24407a"/><line x1="90" y1="130" x2="105" y2="190" stroke="#24407a"/><line x1="215" y1="110" x2="190" y2="170" stroke="#c4573f"/><line x1="215" y1="110" x2="240" y2="170" stroke="#c4573f"/><line x1="240" y1="170" x2="225" y2="230" stroke="#c4573f"/><line x1="240" y1="170" x2="255" y2="230" stroke="#c4573f"/><line x1="360" y1="150" x2="340" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/><line x1="360" y1="150" x2="380" y2="210" stroke="#9a7d0a" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5b6476" stroke-width="1.3" stroke-dasharray="4 3"><path d="M115,186 Q175,186 209,120" marker-end="url(#akn-b)"/><path d="M235,226 Q300,228 353,158" marker-end="url(#akn-b)"/></g><circle cx="60" cy="70" r="5.5" fill="#24407a"/><circle cx="90" cy="130" r="4" fill="#24407a"/><circle cx="240" cy="170" r="4" fill="#c4573f"/><circle cx="215" cy="110" r="5.5" fill="#c4573f"/><circle cx="360" cy="150" r="5.5" fill="#9a7d0a"/><g stroke="#5b6476" stroke-width="2"><line x1="24" y1="124" x2="36" y2="136"/><line x1="36" y1="124" x2="24" y2="136"/><line x1="69" y1="184" x2="81" y2="196"/><line x1="81" y1="184" x2="69" y2="196"/><line x1="184" y1="164" x2="196" y2="176"/><line x1="196" y1="164" x2="184" y2="176"/><line x1="249" y1="224" x2="261" y2="236"/><line x1="261" y1="224" x2="249" y2="236"/></g><path d="M105,181 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><path d="M225,221 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="60" y="56" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#24407a">試す（いまの所）</text><text x="215" y="96" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#c4573f">条件を変えた木で、試す</text><text x="360" y="136" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">また次の木で、試す</text><text x="400" y="232" font-family="Noto Sans JP, sans-serif" font-size="13" fill="#9a7d0a">…</text><text x="240" y="256" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">× 外れ（戻って次の枝へ。やってみたことは経験に残る）　★ 見つけた</text><text x="240" y="272" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#1d2433">外れたら次の枝へ、見つけたら次の木へ。やめずに続けるのが「飽きない」</text></svg><figcaption>「商いは、飽きない」を、入れ子の深さ優先探索の木で描いた図です。下の疑似コードの <code>試す</code> の一回が、木を一本たどることに当たります。外れ（×）なら戻って次の枝へ、見つけたら（★）、条件を変えた次の木で、次の <code>試す</code> が始まります。Claude が描いた図です。</figcaption></figure>

```
# 商いは、飽きない（起業家の漸化式 1 を広げた再帰）
function 試す(いまの所):
  経験 = 空
  for 次の手 in 打てる手(いまの所):
    結果 = やってみる(次の手)
    経験に足す(経験, 結果)                        # 外れも、抱えたまま
    if 外れ(結果):
      continue                                   # 戻って次の枝へ
    if 見つけた(結果):
      経験に足す(経験, 試す(条件を変えた木(結果)))  # 違う木で次の探索
      break
    経験に足す(経験, 試す(結果))                  # その枝を深く
  return まとめる(いまの所, 経験)                  # 戻りながら、伏線を回収するように
```

打てる手は、手持ちの手段から出します。やってみたことは、外れも含めて、経験として抱えておきます。外れでも、見つけたのでもなければ、出てきた結果に `試す` をもう一度当てて、その枝を深く進みます。何かを見つけたら、条件を変えた違う木で、次の `試す` が始まります。「試す」という一つの形（構造）を、くり返し当てていくので、自分を呼ぶ関数（再帰）で書きたくなります。

後置再帰なので、最後の行の `まとめる` は、先へ出した `試す` が全部戻ってきてから動きます。外れも、違う木で見つけたものも、その場では意味を決めずに抱えたまま進み、戻ってくるときに、伏線を回収するように一つにまとめます。先へ進む途中では見えなかったつながりが、向こう側から戻ってくるときに見えてくる、という書き方です。外れたら戻って次の枝へ、見つけたら次の木へ進み、戻るたびにまとめ直す。それをやめずに続けるのが、「飽きない」です。

<details><summary>詳しく — 答えを急がずに抱えておくこと（抱持）</summary>

意味を決めずに抱えたまま進むところは、pjdhiro が後置再帰の話から思い出した「抱持」と重なって見えます。抱持は、「[欠損駆動思考](https://uminomae.github.io/project-design-theory/ks/)」の言葉で、欠けや違和感に気づいたとき、すぐに答えを出さず、問いのまま持ち続けることです。pjdhiro は、抱持には支えになる環境や関係が要り、不安の強いときや、発達の段階が手前のときには難しくなる、とも見ています。詳しくは「[Love駆動開発と呼びたいもの](love-driven-dev.html#ldd-hold)」の章「信号と考えがずれると欠けを感じる」にあります。

</details>

起業家の行動は、この入れ子の深さ優先探索のようなものではないでしょうか。

## 補足：木で意思決定を見る、経営学のほかの見方

<!--OPEN-->

<a id="jp-others"></a>後置再帰のほかにも、経営学には、意思決定を木で描いて考える見方がいくつかあります。補足として、軽く触れておきます。下の図は、同じ形の木を、三つの位置から見たものです。

<figure class="glow-card reader-figure" id="jp-trees"><div class="jp-trees"><svg viewBox="0 0 260 270" role="img" aria-label="一つ目の木。木の全部が描かれ、先の端の八つの点がどれも見込みで比べられ、根元から一本の道が太く選ばれている" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">① 木の全部を見比べる</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">決定ツリー・リアルオプション・コーゼーション</text><g stroke="#9aa3b5" stroke-width="1.4"><line x1="130" y1="70" x2="70" y2="120"/><line x1="130" y1="70" x2="190" y2="120"/><line x1="70" y1="120" x2="40" y2="170"/><line x1="70" y1="120" x2="100" y2="170"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="190" y1="120" x2="220" y2="170"/><line x1="40" y1="170" x2="25" y2="220"/><line x1="40" y1="170" x2="55" y2="220"/><line x1="100" y1="170" x2="85" y2="220"/><line x1="100" y1="170" x2="115" y2="220"/><line x1="160" y1="170" x2="145" y2="220"/><line x1="160" y1="170" x2="175" y2="220"/><line x1="220" y1="170" x2="205" y2="220"/><line x1="220" y1="170" x2="235" y2="220"/></g><g stroke="#24407a" stroke-width="3.2" stroke-linecap="round"><line x1="130" y1="70" x2="190" y2="120"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="160" y1="170" x2="175" y2="220"/></g><g fill="#24407a"><circle cx="130" cy="70" r="5"/><circle cx="70" cy="120" r="4"/><circle cx="190" cy="120" r="4"/><circle cx="40" cy="170" r="4"/><circle cx="100" cy="170" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="220" cy="170" r="4"/><circle cx="25" cy="220" r="4"/><circle cx="55" cy="220" r="4"/><circle cx="85" cy="220" r="4"/><circle cx="115" cy="220" r="4"/><circle cx="145" cy="220" r="4"/><circle cx="175" cy="220" r="5.5"/><circle cx="205" cy="220" r="4"/><circle cx="235" cy="220" r="4"/></g><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#24407a">先の端を全部、見込みで比べて選ぶ</text></svg><svg viewBox="0 0 260 270" role="img" aria-label="二つ目の木。同じ形の木の中ほどに、歩いている人の点がある。点の周りの数手先だけが濃く見え、その先は薄い点線。数手先の一つの点で、十分として止まっている" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">② 迷路の中から数手先を見る</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">サイモン（満足化）</text><g stroke="#d9dde5" stroke-width="1.2" stroke-dasharray="3 3"><line x1="130" y1="70" x2="190" y2="120"/><line x1="190" y1="120" x2="160" y2="170"/><line x1="190" y1="120" x2="220" y2="170"/><line x1="40" y1="170" x2="25" y2="220"/><line x1="40" y1="170" x2="55" y2="220"/><line x1="100" y1="170" x2="85" y2="220"/><line x1="100" y1="170" x2="115" y2="220"/><line x1="160" y1="170" x2="145" y2="220"/><line x1="160" y1="170" x2="175" y2="220"/><line x1="220" y1="170" x2="205" y2="220"/><line x1="220" y1="170" x2="235" y2="220"/></g><circle cx="70" cy="120" r="58" fill="#c4573f" fill-opacity="0.06" stroke="#c4573f" stroke-width="1" stroke-dasharray="4 3"/><g stroke="#9aa3b5" stroke-width="1.4"><line x1="70" y1="120" x2="40" y2="170"/><line x1="70" y1="120" x2="100" y2="170"/></g><g stroke="#c4573f" stroke-width="3.2" stroke-linecap="round"><line x1="130" y1="70" x2="70" y2="120"/><line x1="70" y1="120" x2="100" y2="170"/></g><g fill="#d9dde5"><circle cx="190" cy="120" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="220" cy="170" r="4"/><circle cx="25" cy="220" r="4"/><circle cx="55" cy="220" r="4"/><circle cx="85" cy="220" r="4"/><circle cx="115" cy="220" r="4"/><circle cx="145" cy="220" r="4"/><circle cx="175" cy="220" r="4"/><circle cx="205" cy="220" r="4"/><circle cx="235" cy="220" r="4"/></g><circle cx="130" cy="70" r="4" fill="#9aa3b5"/><circle cx="40" cy="170" r="4" fill="#24407a"/><circle cx="70" cy="120" r="6.5" fill="#c4573f"/><path d="M100,160 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="112" y="186" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">十分</text><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#c4573f">見える数手先で、十分な道を選んで止まる</text></svg><svg viewBox="0 0 260 270" role="img" aria-label="三つ目の絵。小さな木を深く進み、外れの枝には×が付く。見つけた所の星から、条件を変えた次の木が立ち、そこでも外れと星があり、さらに次の木が立っていく" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="260" height="270" rx="10" fill="#ffffff"/><text x="12" y="22" font-family="Noto Sans JP, sans-serif" font-size="13" font-weight="700" fill="#1d2433">③ 見つけた所から次の木へ</text><text x="12" y="40" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">エフェクチュエーション・入れ子の深さ優先探索</text><g stroke-width="2.4" stroke-linecap="round"><line x1="50" y1="62" x2="28" y2="104" stroke="#24407a"/><line x1="50" y1="62" x2="74" y2="104" stroke="#24407a"/><line x1="142" y1="126" x2="120" y2="168" stroke="#c4573f"/><line x1="142" y1="126" x2="166" y2="168" stroke="#c4573f"/><line x1="222" y1="190" x2="204" y2="228" stroke="#9a7d0a" stroke-dasharray="3 3"/><line x1="222" y1="190" x2="242" y2="228" stroke="#9a7d0a" stroke-dasharray="3 3"/></g><g fill="none" stroke="#5b6476" stroke-width="1.2" stroke-dasharray="4 3"><path d="M80,100 Q120,96 136,120"/><path d="M172,164 Q206,160 217,184"/></g><path d="M136,120 l-6,-2 3,-5 z" fill="#5b6476"/><path d="M217,184 l-6,-2 3,-5 z" fill="#5b6476"/><circle cx="50" cy="62" r="5" fill="#24407a"/><circle cx="142" cy="126" r="5" fill="#c4573f"/><circle cx="222" cy="190" r="5" fill="#9a7d0a"/><g stroke="#5b6476" stroke-width="2"><line x1="22" y1="98" x2="34" y2="110"/><line x1="34" y1="98" x2="22" y2="110"/><line x1="114" y1="162" x2="126" y2="174"/><line x1="126" y1="162" x2="114" y2="174"/></g><path d="M74,95 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><path d="M166,159 l2.9,6 6.6,1 -4.8,4.6 1.1,6.6 -5.8,-3.1 -5.8,3.1 1.1,-6.6 -4.8,-4.6 6.6,-1 z" fill="#9a7d0a"/><text x="14" y="128" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">外れ・戻る</text><text x="88" y="90" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">次の木</text><text x="180" y="156" font-family="Noto Sans JP, sans-serif" font-size="10.5" fill="#5b6476">次の木</text><text x="130" y="252" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="11" fill="#9a7d0a">見つけた所から、条件を変えた木が立つ</text></svg></div><figcaption>同じ形の木を、三つの位置から見た図です。①は、先に木の全部を描いて、先の端を全部見込みで比べ、一本を選びます（太線）。②は、木の中を歩く人（赤い点）から見ます。見えるのは数手先まで（丸の中）で、十分な道が見つかれば、そこで止まります。③は、深く進み、外れなら戻り（×）、何かを見つけたら（星）、そこから条件を変えた次の木で、また探します。木ははじめから一本あるのでなく、進むうちに立っていきます。論の中身から Claude が描いた図で、どの論の図の写しでもありません。</figcaption></figure>

①は、未来を予測できるものとして先に木を全部描き、先の端を見比べて一本を選ぶ見方です（決定ツリー・リアルオプション・コーゼーション）。②と③は、木の中を歩きながら進む見方です（サイモンの迷路・エフェクチュエーション）。どの論をどの位置に置くかは、このページが割り当てたものです。

pjdhiro は、こう見ています。

<strong>pjdhiro の見方：</strong>起業家の探索的なエフェクチュエーションのようなことも、ツリー構造に見える。DFS（深さ優先探索）のように目的を変えながら、人に会って気づいたり約束したりする、という構造は変わらない。サラスバシーの言うことも、入れ子の DFS として、ツリーで表せそう。みんな、ツリーをどの位置からどう見ているかの違いで、群盲象を評すように見える。

<strong>pjdhiro の見方：</strong>探索をどうやるのか。未来の側が予測できるものとして、全探索するのか。未来は作られるかのように、入れ子の DFS で進むのか。サイモンの迷路も含めて、各論はこれでまとめて書けると思う。

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

<details><summary>詳しく — ②と③は、木を最後まで探しきらない所が重なる</summary>

<strong>pjdhiro の見方：</strong>サイモンの迷路を途中で止めるネズミも、エフェクチュエーションの分岐や決定がそこそこの段階で切り替わるのも、DFS の先で DFS が始まるのも、どれも同じものを指していると思う。

サイモンの生き物は、十分に満たす道が見つかれば、そこで探すのをやめます。エフェクチュエーションで進む人は、失ってもよい分の中で試し、そこそこの所で目的のほうを作り直します。入れ子の深さ優先探索は、見つけた所で、条件を変えた次の木へ移ります。三つは、一本の木を最後まで探しきらない所が、重なって見えます。

</details>

<details><summary>詳しく — 探して選ぶより、変えていく（サラスバシーとデュー）</summary>

サラスバシーとデューは、のちに、新しい市場は、ありうる市場の全体を探して選ぶこと（探索と選択）より、手元の現実を変えていくこと（変換）で生まれる、と見ました（2005）。見つけたものから次の木が立つ、という絵は、この変換の見方とも重なって見えます。Love駆動開発でも、pjdhiro は、ほどける・離れる・戻ることを開発に入れ、そのイメージを深さ優先探索で言っています（「[Love駆動開発と呼びたいもの](love-driven-dev.html#ldd-development-scope)」の章「開発とは、何を指すか」）。
</details>

この三つの木を、過去・今・未来の時間の向きで並べ直すと何が見えるかは、[時間の向き - 僕の前に道はない](no-road-ahead.html#nr-search)で見ています。

<!--TURN-->起業家の行動を、入れ子の深さ優先探索のように見ました。次は、その一歩をくり返す形を、式に当てます。<!--/TURN-->

<!--PART:第二部|それは、ジュリア集合の漸化式のようだ-->

## 一歩をくり返す形は、漸化式と同じ

<!--OPEN-->

<a id="jp-rec-def"></a>入れ子の深さ優先探索で進む起業家を、外から一本の道として見ると、やってみた結果が、次の一歩の出発になっています。その一歩のくり返しについて、pjdhiro はこう見ました。

<strong>pjdhiro の見方：</strong>一歩のくり返しに、Love という重力のような c を加えて、非二元を考慮すると、ジュリア集合の漸化式に似ていた。

この部では、このカードの式の所が、起業家の何に当たるかを、一つずつ見ていきます。

まず、一歩のくり返しそのものです。木が変わっても、人に会い、気づき、約束する、という一歩の形は変わりません。第一部の起業家の漸化式 1 のように、前の結果から次を決める形を、数学では漸化式と言います。漸化式は、数の並びの次の値を、前の値から決める決まりです。

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

漸化式 1 の足し算の前に、今の自分を今の自分で掛ける一手を入れ、足すものを、一歩ごとに同じだけ引き寄せるもの（Love と呼びたいもの）に替えてみます。これを起業家の漸化式 2 とします。

```
# 起業家の漸化式 2：自己と自己の掛け算
今の自分 = はじめの自分
while 続ける:
  今の自分 = 今の自分 × 今の自分 ＋ 引き寄せ
```

記号で書くと、カードの式 `z → z² + c` になります。いまの値 `z` を二乗して `c` を足したものが、次の値になります。出てきた値に、また同じことをします。計算機で書くと、次のくり返しです。

```
# z → z² + c を前へ
z = 0
while 決めた歩数まで:
  z = z*z + c
```

<b>仮説：一歩（`→`）は、人に会い、気づき、約束する、のくり返し。</b>木が変わっても、この一歩の形は変わらず、やってみた結果が次の一歩の出発になります。

非二元は、二つが見分けられるのに、切り離せないことを言う語です。カードの「非二元を考慮すると」は、pjdhiro の読みでは、式の二か所に当たります。一つは `z` で、平面の上の一点で表す数は、横と縦の二つの成分を一つの数に持ちます（次の章）。もう一つは、一歩を逆に戻すときで、平方根が二つあるので、一つの点が、0 の周りに半回転した二つの写しに分かれます。pjdhiro は、それを ☯ のように見ています（第三部「[ジュリア集合を、逆にたどる](#jp-back)」）。

式の所は、一歩のほかに、`z`・`z²`・`c` の三つです。続く章で、所ごとに仮説を置き、最後の章で、平面の上で計算して見ます。

## z は、起業家の思考・心理・行動

<!--OPEN-->

<a id="jp-z"></a><b>仮説：`z` は、起業家の思考・心理・行動。</b>気づくことも、決めることも、ここに入ります。

式の `z` は、平面の上の一点で表す数（複素数）で、横の向き（実軸）と縦の向き（虚軸）の二つの成分を持ちます。このページは、横の向きに認知できるもの、縦の向きに認知し得ないものを当てます。思想や DNA のような、よく使われる呼び名について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>思想や DNA というものは、何でもいいけど、実軸、認知できるものだけを切り取った概念じゃないか？ 波間の渦のように、渦以外の波の存在が抜けているのではないか？ というのが、認知し得ない面。

「波間の渦」の渦と波は、「[創造とは](../cs/)」が創造の五つの段（場・波・縁・渦・束）に置く語です。`z` を思想や DNA のような呼び名でなく、思考・心理・行動という働きの側で置いたのは、認知し得ない面まで含めるためです。

<details><summary>詳しく — 平面の上の数（複素数）とは（図）</summary>

`z` は、ふつうの数ではなく、平面の上の一点で表す数（複素数）です。ふつうの数は、一本の数直線の上に並びます。複素数は、横の向き（実軸）に加えて、縦の向き（虚軸）にも広がります。横に `x`、縦に `y` 進んだ点を `x + yi` と書きます。`i` は、二乗すると −1 になる数で、縦の向きの 1 目盛りを表します。

<figure class="glow-card reader-figure jp-fig" id="jp-cplx">
<p class="jp-fig__title">複素数：平面の一点が、横と縦の二つの成分を一度に持つ</p>
<div class="jp-fig__grid jp-fig__grid--one"><div class="jp-fig__panel"><p class="jp-fig__label">図をクリックすると、その点が z になる</p><canvas id="jp-cplx-cv" width="480" height="480" aria-label="横の軸（実軸）と縦の軸（虚軸）の平面。クリックした点 z から、横の成分と縦の成分の線が引かれる"></canvas></div></div>
<p class="jp-fig__readout" id="jp-cplx-out">図はページの中の JavaScript で描きます。</p>
<figcaption>金色の線が横の成分（実軸の向き）、赤の線が縦の成分（虚軸の向き）です。一つの点が、二つの成分を一度に持ちます。</figcaption>
</figure>

</details>

`z` の中身は、一つとは限りません。その中身が掛け合わさる所を、次の章で二乗として見ます。

pjdhiro は、初めの値は、起業家ごと、状況ごと、時代ごとにばらばらだと見ています。このページの図は、0 から始めた一例です。

## z の二乗は、起業家の中で起きる、自己と自己の掛け算

<!--OPEN-->

<a id="jp-square"></a>式の二乗の所は、起業家の何に当たるのか。pjdhiro は、こう問いました。

<strong>pjdhiro の問い：</strong>z の二乗に当てはまる、現実世界の起業家の行動が見つかるといいんだよね。心理面でも良いので。

二乗は、自分に自分を掛けることです。もしも `z` の中身が一つでないなら、掛け合わさるのは何と何か。一つには決まらず、入口になる読みは三つあります。

- 脳の中に、いくつもの自己が重なっていて、その重ね合わせで一歩が出るとしたら？（下の畳み「先行研究 — 自己は、いくつもの重なりか」）
- ユングの言う自我とシャドーのように、気づいている側と気づいていない側が、一緒に一歩を作っているとしたら？
- 野中郁次郎が組織に見た、言葉にならない知と言葉にした知が入れ替わりながららせんを描く形が、一人の中でも起きるとしたら？（下の畳み「[野中郁次郎の知識創造とは](#jp-about-nonaka)」）

この三つ目について、pjdhiro はこう見ています。

<strong>pjdhiro の見方：</strong>あれは組織だけど、起業家一人の内面でも起きるのかもしれない。フラクタルに。

一つ目の足場は、自己には一つの中核が無い、とする神経科学のプレプリントです（下の畳み）。それを読んで、pjdhiro は、二乗をこう見ました。

<strong>pjdhiro の見方：</strong>自己は単一では無い。とするなら、二乗するように、自己と自己が創造的に協働するイメージです。

<b>仮説：`z²` は、起業家の中で起きる、自己と自己の掛け算。</b>もしも自己が一つでないなら、二つの自己が掛け合わさる分は、どちらか一つの自己からは出てきません。自己と自己が協働して、一つでは出ないものを次の一歩に生む、と読めます。式では、`z` を二つの自己の重なり `a + b` と書くと、`(a + b)² = a² + 2ab + b²` の `2ab` が、その掛け合わさる分に当たります（下の畳み「[詳しく — 自己と自己の掛け算を、式に当てると](#jp-self-calc)」）。

式の上では、`z` に `z` を掛けると、`z` は自分の角度だけ回り、自分の大きさの分だけ伸び縮みします（図は「[二乗を手で動かす](#jp-sq)」）。pjdhiro は、それを、自分で自分を回すように進むこととしても見ています。

<strong>pjdhiro の見方：</strong>自分自身と自分自身を回転させるように進む、という視点はどうだろうか？

その回転は、周りからはどう見えるのか。

<strong>pjdhiro の見方：</strong>起業家自身を回転させる、とは、周囲から見ると、「人に会って決める」を繰り返す、のようなシンプルな繰り返しに見える。でもそれは、認知できるものとしてそうで、実際は認知し得ないものも含まれるし、その存在は言語化できずに、認知されるものだけが切り取られる。

<details class="acc" id="jp-about-nonaka" data-peek data-peek-dock="野中の知識創造とは" hidden><summary>詳しく — 野中郁次郎の知識創造とは</summary>

経営学者の野中郁次郎は、組織が新しい知識を生む過程を論じました。竹内弘高との共著『知識創造企業』（1995）で広く知られる論です。野中は、知識を、決まった言葉で人に渡せる形式知と、その人に根を持ち言葉にしにくい暗黙知に分け、新しい知識は、二つのあいだで一方が他方に変わり続けることから生まれる、とします（1994）。変わり方は、共同化（暗黙知から暗黙知へ）・表出化（暗黙知から形式知へ）・連結化（形式知から形式知へ）・内面化（形式知から暗黙知へ）の四つで、頭文字を取って SECI と呼ばれます。四つを回ると、元の所に戻る円でなくらせんになり、個人から集団、組織へと上るほど大きくなる、と野中らは書きます（2000）。

野中は、一人の中での二つの知のやりとりにも触れています。個人の知識は、経験の知と合理の知のやりとりで広がる（1994）、内面化は個人の心理の過程だ（2009）、と書きます。一人の内面でもらせんがくり返す、というのは、こうした野中の論の材料から組み立てた、このページの読みです。

出典：Nonaka (1994) "[A Dynamic Theory of Organizational Knowledge Creation](https://doi.org/10.1287/orsc.5.1.14)", *Organization Science* 5(1):14–37（本文照合済。[ケンタッキー大学の授業の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20261009125025/https://www.uky.edu/~gmswan3/EDC608/Nonaka_1994.pdf)。pp.16・20・22）／Nonaka, Toyama & Konno (2000) "[SECI, Ba and Leadership: a Unified Model of Dynamic Knowledge Creation](https://doi.org/10.1016/S0024-6301(99)00115-6)", *Long Range Planning* 33(1):5–34（本文照合済。[ノルウェー技術博物館の研究計画のサイトに置かれた誌面の写し](https://tingene.tekniskmuseum.no/images/PDF/Litteratur_MK/SECI_Ba_and_Leadership_a_Unified_Model.pdf)。pp.7・9・10・12・14・15・19）／Nonaka & Toyama (2003) "[The knowledge-creating theory revisited: knowledge creation as a synthesizing process](https://doi.org/10.1057/palgrave.kmrp.8500001)", *Knowledge Management Research & Practice* 1(1):2–10（本文照合済。[ウィーン経済大学の教員の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20130512161449/http://www.ai.wu.ac.at:80/~kaiser/birgit/Nonaka-Papers/The-knowledge-creation-theory-revisited-2003.pdf)。p.4）／Nonaka & von Krogh (2009) "[Tacit Knowledge and Knowledge Conversion: Controversy and Advancement in Organizational Knowledge Creation Theory](https://doi.org/10.1287/orsc.1080.0412)", *Organization Science* 20(3):635–652（本文照合済。[ウィーン経済大学の教員の頁に置かれた誌面の写し（Wayback）](https://web.archive.org/web/20120712130320/http://www.ai.wu.ac.at/~kaiser/birgit/Nonaka-Papers/tacit-knowledge-and-knowledge-conversion-2009.pdf)。p.643）／Nonaka & Takeuchi (2021) "[Humanizing strategy](https://doi.org/10.1016/j.lrp.2021.102070)", *Long Range Planning* 54(4):102070（本文照合済。[PubMed Central の全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC9753931/)。節 From knowledge to wisdom）

</details>

<details><summary>先行研究 — 自己は、いくつもの重なりか</summary>

- スキッパーら（2026・査読前のプレプリント）：自己の処理を調べた 912 本の脳画像の論文を集め直すと、自己には共通の中核が無く、散らばった脳の系がその時々に組む連合だった。「自己」は、系が一緒に働く組み合わせに付けた名だ、とする（[bioRxiv の全文](https://www.biorxiv.org/content/10.64898/2026.11.12.766263v1.full)）
- ギャラガー（2013）：自己は、体・感情・人とのあいだ・語り・置かれた状況などの側面が型に組まれたもので、側面どうしの動的な相互作用から現れる（[論文](https://www.frontiersin.org/articles/10.3389/fnhum.2013.00443/full)）
- ギャラガーとデイリー（2018）：側面は足し算の一覧でなく、一つの側面に手を入れると、ほかの側面も変わる（[論文](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00664/full)）
- ハーマンスら（2017）：自己は、多くの「私」の位置がやりとりし、張り合う場で、そこから前には無かった位置や連合が生まれうる（[論文](https://link.springer.com/article/10.1007/s12124-016-9370-6)）

自己を複数の重なりと見る所と、重なりどうしが互いに変え合い、新しいものを生む所を借ります。それを起業家の一歩に当て、二乗の掛け合わせの項に見るのは、このページの仮説です。どれも本文で照らしました。訳は Claude。

</details>

<a id="jp-shadow"></a>二つ目の自我とシャドーの読みについて、pjdhiro は、今の仮の視点をこう言っています。

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

「[Love駆動開発と呼びたいもの](love-driven-dev.html)」は、人やプロジェクトを動かしているもの（駆動源）を、Love と呼びたいものと置く読み物です。pjdhiro は、その Love と呼びたいものを、漸化式の `c` に置きました。第一部の木で言えば、人に会い、気づき、約束する一歩ごとに、毎回同じだけ加わるものです。土台には、Love と重力の構造の似かたを問う見方があります（読み物「[愛は、重力に似ていないか](gravity-love.html)」）。

エフェクチュエーションの論では、起業家を動かすものは謎のまま残っている、と pjdhiro は見ています。`c` は、その謎のまま残る駆動源を、一歩ごとに環の外から加わるものとして、式に置いたものです。

<strong>pjdhiro の見方：</strong>愛は重力と似ていないか？ それは c と似ていないか？ これは基礎にある視点なので、汎用的に色々使えそう。まずは創造、それ以外にも。

思考・心理・行動が自分で自分を回すだけなら、式の値は、原点の周りで回り、原点からの距離が変わるだけです。そこに `c` を足すと、値は毎回、同じ向きに同じだけずれます。一歩ごとのずれは小さくても、くり返すうちに、値が外へ限りなく遠ざかるか、外へ出ずに残るかを分けます。物を同じように引き寄せ、通り道を少しずつ曲げていく重力のようなもの、とたとえられます。なぜ重力なのかを、pjdhiro は、符号の数から言っています。

<strong>pjdhiro の見方：</strong>＋の符号しかない物理の概念って、今のところ、それ（重力）が一番有名では？ 確認されていることの中では。

電気の力には、引き合う向きと退け合う向きがありますが、重力のもとになる質量には、知られている限り、符号が一つしかありません。式で符号が一つに当たるのは、`c` がいつも足され、引かれることが無い所だ、と見ます。`c` = −1 や −0.8 + 0.16i のように値に − が付いていても、それは引き寄せる向き（左や下）を表すだけで、一歩ごとに、その向きへ同じだけ足されます。

Love駆動開発で、pjdhiro は、同じ駆動が、成果と呼ばれる向きにも、お金や名誉や権力の向きにも、知識や子孫のようなお金にならないものの向きにもドリフトする、と見ています。どの向きも、善悪でなく、同等の現れと見ます（「[Love駆動開発と呼びたいもの](love-driven-dev.html#ldd-drift)」で引いた見方）。式でも、`c` の値に、良い値と悪い値はありません。違う `c` は、違う形を残すだけです。

式の数学そのものは、Love駆動開発の章「[数学の視点で見る](love-driven-dev.html#ldd-math)」で見ています。この置き方を意思決定に当てた仮の案は、「[意思決定とは](decision-making.html#dm-circle)」の巻末にあります。

## 平面の数で、式を一歩ずつ見る

<!--OPEN-->

<a id="jp-origin"></a>冒頭の見立ての「それは、ジュリア集合の漸化式のようだ」を、この部で式の所ごとに置いた仮説で、平面の上の計算に当てて見ます。図は畳みの中で、手で動かせます。

章「[z は、起業家の思考・心理・行動](#jp-z)」の当て方で計算してみます。`z = x + iy` を二乗すると、`z² = (x² − y²) + 2ixy` になります。`x` を認知できる成分、`y` を認知し得ない成分と当てるなら、次の一歩の認知できる成分に、認知し得ない成分の二乗 `y²` が、引かれて入ってきます。認知し得ないものは、見えないまま、次に見えるものを変えているのかもしれません。二乗の章の `z = a + b`（自我とシャドー）に重ねて、`a = x`、`b = iy` と仮に置くと、`a² + b² + 2ab` はこの式と一致し、シャドーの二乗が、認知できる側へ引かれて入る、と読めます。

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

第三部では、この問いを、同じ式を逆にたどって見ていきます。起業家の思考・心理・行動が一歩ごとに移っていった跡を、順に平面へ点として打っていくと（このページでは「前へ打つ」と言います）、どこに行き着き、そこから遡ると何が出てくるのか。

<!--/PARTLEAD-->

## ジュリア集合を、逆にたどる

<!--OPEN-->

<a id="jp-back"></a>式の一歩は、逆に一段戻すこともできます（数学では、一歩を逆に戻す決まりを逆写像と言います）。`c` の分を引いてから、平方根（`√`）を取ります。二乗して 4 になる数が 2 と −2 の二つあるように、平方根はプラスとマイナスの二つあります。

起業家の漸化式 2 を、逆にたどる向きへ広げると、今の自分から一つ前の自分を出す式になります。

```
# 起業家の漸化式 2 を逆にたどる（逆写像）
while 続ける:
  前の自分 = ±√(今の自分 − 引き寄せ)    # 答えは二つ
```

答えが二つあるので、これは一本の漸化式ではありません。一段ごとに二つに分かれ、たどると、どの段でも同じ決まりで二つに分かれる木になります。

[二乗で角度が二倍になった](#jp-sq)のを逆に戻すので、平方根で角度は半分になります。マイナスの平方根は、もう一方を 0 の周りに半回転させた写しになります。pjdhiro は 2025 年 5 月、ジュリア集合の形を、点がどこから来たかをさかのぼる向きから動かして見て、この所を記事に次のように書いています。記事は、Steven Wittens の記事「[How to Fold a Julia Fractal](https://acko.net/blog/how-to-fold-a-julia-fractal/)」の図を参考にしていました。

<strong>pjdhiro の見方：</strong>☯️陰陽マークのように見える。円の分割（平方根による角度が半分になる）と反転コピー（マイナスの平方根）の箇所が。

（pjdhiro の公開文「[陰陽なJulia集合を逆にたどる](https://uminomae.github.io/pjdhiro/20250531julia/)」から）

<details><summary>先行研究 — 一が二に分かれる並びを書いた古典</summary>

- 『周易』繋辞上伝：太極が両儀を、両儀が四象を、四象が八卦を生む（1 → 2 → 4 → 8）（[中國哲學書電子化計劃の頁](https://ctext.org/book-of-changes/xi-ci-shang/zh)）
- 『老子』42 章・40 章：道は一を、一は二を、二は三を、三は万物を生み、万物は陰を負い陽を抱く。返ることが道の動き（「反」は、返るとも、反対に向かうとも読まれる）（[中國哲學書電子化計劃の頁](https://ctext.org/dao-de-jing/zh)）

一が二に分かれ、2 倍ずつに開く並びの言い方を借ります。繋辞伝は生じる向きに、式は遡る向きに二つへ開きます。それを ☯ の二つの写しに重ねるのは、このページの仮説です。どれも本文で照らしました。訳は Claude。

</details>

その一段を、下の図で一歩ずつ見ます。図の左は、`c` を選ぶための地図で、マンデルブロ集合（「[ジュリア集合とは](#jp-about-julia)」の地図）です。右の図の背景には、この陰陽の印を薄く描いています。

<figure class="glow-card reader-figure jp-fig" id="jp-fold" data-peek>
<p class="jp-fig__title">遡る一段：円を、c の分だけ戻して ±√ で二つに分け、畳む</p>
<div class="jp-fig__grid jp-fig__grid--fold">
<div class="jp-fig__panel"><p class="jp-fig__label">c を選ぶ地図（黒い形の中をクリックすると c が変わる）</p><canvas id="jp-fold-c" width="300" height="260" aria-label="マンデルブロ集合。黒い形の中でクリックした所が c になる"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">大きさ 2 の円を、一歩ずつ遡る（▶ か「一歩進める」をクリック）</p><div class="jp-stage"><canvas id="jp-fold-cv" width="520" height="600" aria-label="大きさ 2 の円を、− c の平行移動と、角を半分にする √ と、半回転の写しの三歩で一段ずつ遡る。色は、その部分が前の曲線のどこから来たか。背景に薄い陰陽の印"></canvas><p class="jp-stage__cap" id="jp-fold-cap" aria-live="polite">図はページの中の JavaScript で描きます。</p></div></div>
</div>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-fold-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-fold-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-fold-back" class="jp-media__word">一歩戻す</button><button type="button" id="jp-fold-step" class="jp-media__word">一歩進める</button></div>
<div class="jp-fig__btns" role="group" aria-label="c の例"><button type="button" data-fc="-0.79,0.13">c = −0.79 + 0.13i</button><button type="button" data-fc="-0.123,0.745">c = −0.12 + 0.75i</button><button type="button" data-fc="golden">黄金角の c</button><button type="button" data-fc="-0.8,0.16">c = −0.8 + 0.16i</button><button type="button" data-fc="-1,0">c = −1</button><button type="button" data-fc="0,0">c = 0（円のまま）</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-fold-out">図はページの中の JavaScript で描きます。</p>
<figcaption>大きさ 2 の円を、遡る一段 <code>±√(w − c)</code> で一段ずつ遡ります。一段は「− c」「√」「−√」の三歩で、その一歩で起きたことを図の中の字幕で添えています。色は、その点が最初の円のどこから来たかで、同じ色の所は、最初の円の同じ所から来ています。薄い灰の線は、その一歩の前の形です。背景に薄く描いた陰陽の印（☯）は、上の pjdhiro の見方の所（√ で角が半分になって右半分に縮み、−√ の半回転の写しが左半分を埋める）に重ねたものです。</figcaption>
</figure>

段を重ねるほど、円は細かく畳まれて、ジュリア集合の形に寄っていきます。

<details><summary>詳しく — 図の見方：一段を三歩に分けて遡ると、円が畳まれる</summary>

この図は、Steven Wittens の「[How to Fold a Julia Fractal](https://acko.net/blog/how-to-fold-a-julia-fractal/)」（2013）の見せ方に倣って、このページで新しく描いたものです。Wittens は、点が収まる円を、遡る向きに一段ずつ畳んでいくと、ジュリア集合の形になる様子を、動く図で見せています。

円の上の一点は、一段遡るごとに二つに分かれ、二つの点は、0 を挟んで向かい合います。前の曲線の一周が、右の半分と左の半分に一回ずつ写り、円が自分に巻きついて畳まれます。くびれと突き出しは、段ごとに細かくなっていきます。

二歩目の「√」は平方根の主値で、曲線は、0 から左へのびる線（負の実軸）で切れます。曲線の内側は、遡った段の数だけ前へ打っても大きさ 2 を超えない点の集まりで、段を重ねるほど、くり返しても遠くへ行かない点の集まり（充填ジュリア集合）に寄ります。段が深くなると、線は、境目の細かい入り江（巻き込み）の奥まで追いきれずに横切るので、薄くしています。形は、内側の塗りで見られます。

図の最初の `c` = −0.79 + 0.13i は、左の地図の黒い形の中で、本体の左隣の丸い房の、ふちの近くにあります。形はひとつながりなので、段をいくら重ねても曲線は一本のままです。ふちに近いので、境目の模様は、渦を巻くように巻き込みます。巻き込みは、20 段を過ぎたころから見えてきます（図は 30 段まで）。ページの上の「ジュリア集合とは」のサムネイル（`c` = −0.8 + 0.16i）と、ほぼ同じ形です。その −0.8 + 0.16i は、黒い形のわずかに外にあります。0 から前へ打つと 39 歩目で大きさ 2 を超えるので、39 段目で曲線は二つに切れ、遠くへ行かない点は、かけらに分かれます（この図の 30 段までは、一本のままです）。

</details>

同じ記事は、遡った先を、こう見ています。

<strong>pjdhiro の見方：</strong>発散しそうでしない境界で複雑な模様になる。「境界が曖昧な地点」＝「創造が生まれる土壌」という直感にまた一つ。

（同じ公開文「[陰陽なJulia集合を逆にたどる](https://uminomae.github.io/pjdhiro/20250531julia/)」から）

## 値を前へ打つと渦になり、遡るとジュリア集合の形になる

<!--OPEN-->

<a id="jp-vortex"></a>よく見るジュリア集合の絵は、平面の点を一つずつ出発点にして式をくり返し、遠くへ飛んでいくかどうかで色を付けた絵です（章の終わりの畳みで見られます）。全部の点を試す、全探索の絵です。この章では、0 の一点から前へ打った値 `z₀, z₁, z₂…`（赤）が、一本の道を歩いた跡です。その赤の一点から、同じ式を逆に一段ずつ遡ると、遡りは木になります。第一部の探索の木とは別の、遡る向きの木です。二つの木を時間の向きで並べると何が見えるかは、[時間の向き - 僕の前に道はない](no-road-ahead.html#nr-back)にあります。

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

木の図の最初の `c` = −0.79 + 0.13i は、ハート形の左隣の房にあり、前へ打つと、二つの点を行き来しながら寄っていきます。下の図は、`c` を、前へ打つと渦になる黄金角の `c` に替えて、この遡りを前へ打った赤の渦と一枚に重ね、段を 100 まで深くしたものです。

<figure class="glow-card reader-figure jp-fig" id="jp-lab" data-peek>
<p class="jp-fig__title">前へは渦、遡ると境目：同じ式を、0 から前へ打ち、その一点から遡る</p>
<div class="jp-fig__grid">
<div class="jp-fig__panel"><p class="jp-fig__label">c を選ぶ地図（クリックすると c が変わる）</p><canvas id="jp-lab-c" width="300" height="260" aria-label="マンデルブロ集合。クリックした所が c になる"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">0 から前へ打った値（赤）と、赤の一点から遡った枝（紺から金）。図をクリックすると、遡り始める赤の点が変わる</p><canvas id="jp-lab-1" width="420" height="420" aria-label="前へ打った値の軌跡と、その一点から一段ごとに二つに分かれて遡った点。実際に通った道は赤い太線"></canvas></div>
</div>
<div class="jp-media" role="group" aria-label="再生の操作"><button type="button" id="jp-lab-reset" class="jp-media__icon" aria-label="最初から" title="最初から"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2.4v14H6zM19 5v14L9 12z"/></svg></button><button type="button" id="jp-lab-play" class="jp-media__play" aria-pressed="false" aria-label="再生" title="再生・止める"><svg class="jp-media__on" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="jp-media__off" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg></button><button type="button" id="jp-lab-back" class="jp-media__word">一歩戻す</button><button type="button" id="jp-lab-step" class="jp-media__word">一歩進める</button></div>
<div class="jp-fig__btns"><button type="button" id="jp-lab-deeper">一段深く遡る</button><button type="button" id="jp-lab-bg" aria-pressed="false">よく見るジュリア集合の絵を薄く重ねる</button></div>
<p class="jp-fig__readout jp-fig__readout--pre" id="jp-lab-out">図はページの中の JavaScript で描きます。</p>
<div class="jp-fig__group"><p class="jp-fig__glabel">決まった c で見る</p>
<div class="jp-fig__btns"><button type="button" data-lc="golden">黄金角（137.5°）で回る c</button><button type="button" data-lc="-0.1248,0.6152">120° で回る c</button><button type="button" data-lc="-1,0">c = −1</button><button type="button" data-lc="-0.123,0.745">c = −0.12 + 0.75i</button><button type="button" data-lc="-0.8,0.16">c = −0.8 + 0.16i</button><button type="button" data-lc="0.3,0">c = 0.3（外へ出る）</button></div></div>
<div class="jp-fig__group"><p class="jp-fig__glabel">歩数と段数を変える</p>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>前へ打つ歩数（遡り始める点） <output for="jp-lab-n">100</output></span><input type="range" id="jp-lab-n" min="0" max="200" step="1" value="100"></label>
<label class="jp-fig__slider"><span>遡る段数 <output for="jp-lab-d">100</output></span><input type="range" id="jp-lab-d" min="0" max="100" step="1" value="100"></label>
</div></div>
<details class="jp-fig__group jp-fig__fold"><summary class="jp-fig__glabel">自分で c を選ぶ</summary>
<p class="jp-fig__glabel">回る角度と寄る倍率、または c の実部と虚部で選びます。どちらで動かしても、もう一方が揃います。</p>
<div class="jp-fig__sliders">
<label class="jp-fig__slider"><span>一歩ごとに回る角度 <output for="jp-lab-deg">137.5°</output></span><input type="range" id="jp-lab-deg" min="0" max="360" step="0.1" value="137.5"></label>
<label class="jp-fig__slider"><span>一歩ごとに寄る倍率 <output for="jp-lab-r">0.970</output></span><input type="range" id="jp-lab-r" min="0.5" max="0.995" step="0.005" value="0.97"></label>
<label class="jp-fig__slider"><span>c の実部 <output for="jp-lab-re">−0.378</output></span><input type="range" id="jp-lab-re" min="-2.25" max="0.75" step="0.001" value="-0.378"></label>
<label class="jp-fig__slider"><span>c の虚部 <output for="jp-lab-im">0.562</output></span><input type="range" id="jp-lab-im" min="-1.3" max="1.3" step="0.001" value="0.562"></label>
</div></details>
<figcaption>前へは 0 から、はじめは 100 歩、最大 200 歩。原点からの距離が 2 を超えたら外へ出たとして止めます。遡りは、赤の一点（いま打った最後の歩の値。紺の点）から、一段ごとに +√ と −√ の両方をたどります。はじめは 100 段遡ります。色は、紺が浅い段、金が深い段です。赤い太線は、そのうち実際に前へ通ってきた値（一つ前の歩、その前の歩…）をたどる一通りです。計算は Claude。</figcaption>
</figure>

<details><summary>手を動かして確かめる — こう動かすと、こう見える</summary>

- 遡る段数を 0 にして、「一段深く遡る」を何度かクリック：紺の点から、一段ごとに枝が二つに分かれます。赤い太線（実際に通ってきた道）は一通りだけで、ほかの枝は渦から離れて外へ広がり、8 段ほどで境目の形が見えてきます。
- 遡る段数を 100 に戻す：12 段より深い段は、金の点が境目の上に細かく散ります。深く遡るほど、どこから遡っても同じ境目に寄ることが見えます。
- 「前へ打つ歩数」を 12 ほどに下げる：100 歩目の値は寄る一点にほとんど重なっていて、実際に通ってきた道もその一点に重なって見えません。歩数を下げると、赤い太線が渦をさかのぼって 0 のほうへ戻る道として見えます。
- 図の中の赤い渦の別の点をクリック、または「前へ打つ歩数」を動かす：どの歩の値から遡っても、実際の道の一通りのほかは、同じ境目に散ります。
- 「最初から」をクリックして「再生」：赤い点が一歩ずつ打たれ、渦を巻いて一か所へ寄っていきます。遡りは、そのつど最後の歩の値から描き直されます。
- 「よく見るジュリア集合の絵を薄く重ねる」：深い段の点が、その絵の縁と重なることを確かめられます。
- 畳み「自分で c を選ぶ」を開き、回る角度を 120° や 90° の近くにする：寄っていく点が、ほぼ三本、四本の筋に並びます。黄金角（137.5°）では、筋がそろわず、ひまわりの種の並びに近い散らばり方になります。
- 寄る倍率を 1 に近づける：寄るのが遅くなり、渦の巻きが増え、境目の形も変わります。
- 左の地図で、黒い形の外をクリック（または「c = 0.3」）：赤は外へ出て、遡った枝は一つながりでない塵のように散ります。

</details>

前へ進めると、赤い点は、一か所の周りを回りながら少しずつ寄っていきます。これが渦です。渦になるのは、`c` がマンデルブロ集合の本体（大きなハート形）の中にあるときです。点は寄り続けますが、止まりはしません。寄っていく一点は、止まる所ではなく、くり返しても外へ出ずに形として残る所、と読んでみます。

後ろへ遡ると、一段ごとに道が二つに分かれ、8 段ほどで、ジュリア集合の境目に散らばります。実際に通ってきた道は、そのうちの一本だけです。

同じ式なのに、前へ進めるか、後ろへ遡るかで、まるで違う形になります。

図を描く前、pjdhiro は、別の形を思い描いていました。図を見たあとの感想です。

<strong>pjdhiro の見方：</strong>私は当初、発散して飛び散ったエネルギー以外の収束、という感じのものになるんだろうと思っていました。淘汰やサバイブのようなものです。それのルーツとして、性交時の射精のエネルギーのジュリア集合のようなポテンシャルから、収束的に一点が卵子に到達するような。我々は死に向かって、自己という脳のエネルギーをほとばしるように拡散させながら生きるのだろうと。ギリギリ自我として、昨日の自分がまるで同じ自我であると信じながら。体の細胞も水分も、自我を構成する身体や脳神経や信号やいろいろなものを入れ替えながら、「私」という一点をギリギリ保つような。そういうエネルギーを拡散させる生き物として記述したかったんだと思います。そうはならなかった。

そのうえで、pjdhiro は、こう添えています。

<strong>pjdhiro の見方：</strong>まだ、その直感は残していますが、今回は、そうではない方向に Claude と進みました。私のコントロールというより、Claude の理解がそうだったように思います。

<details><summary>詳しく — 図の最初の c と、数学で確かめられていること</summary>

図の最初の `c` は、一歩ごとに回る角度が約 137.5°（黄金角）になるように選んだ値で、値は一歩ごとに 0.97 倍に寄っていきます。マンデルブロ集合の本体（大きなハート形）の中の、実数でない `c` なら、どれを選んでも、前へは渦、遡ると境目、の関係は変わりません（実数の `c` では、値は横の軸の上だけを動き、渦にはなりません）。境目の上の点から遡った点が境目のどこにでも近づくことは、数学で確かめられています（ミルナーの定理 3.9）。渦の上の点から遡った枝が境目に寄ることは、Claude が計算で確かめました（黄金角の `c` で、5・30・500 歩目のどの値から遡っても、8 段目の点の 7 割より多くが、境目から 0.01 より近い）。

遡る枝の数は、k 段遡ると 2 の k 乗通りに分かれ、100 段では約 1.27 × 10 の 30 乗通りになるので、全部は打てません。図は、11 段目（2,048 通り）までは枝を全部打ち、それより深い段は、その 2,048 本の道を、一段ごとに +√ と −√ のどちらか一つを選んで遡って打ちます（一つを選んで遡るのは、ジュリア集合を描くよく知られた方法です）。スライダの、回る角度と寄る倍率は、寄る一点 z* での傾き λ = 2z* の角度と大きさで、c = λ/2 − λ²/4 の関係にあります（倍率が 1 より小さいときだけ決まる）。

</details>

この図を見て、pjdhiro は次の問いを立てました。

<strong>pjdhiro の問い：</strong>この渦の軌跡と、ジュリア集合の関係が何を意味するのか。それを直感で読み取りたいのです。

起業家のたとえに戻すと、前へ打った赤は、起業家の思考・心理・行動が一歩ごとに移っていった跡で、実際に通ってきた一通りの道と読めます。遡ると、一段ごとに、ありえた一つ前が二つに分かれます。pjdhiro は、起業家は渦を巻くように進み、違うルートで来ていたら、その渦はジュリア集合のような軌跡だったかもしれない、と見ています。赤い太線のほかの枝は、認知されなかった道かもしれず、それらはジュリア集合の境目に散ります。

この振る舞いを、Love駆動開発の言葉で読んでみます。読みは一つに決まらないので、いまの読みを並べます。

- 残ると遠ざかる：`c` を足すくり返しで、外へ出ずに残るのは、関わりが続いて形になること、外へ遠ざかるのは、散って切れること、と当ててみることができます。
- 駆動源：境目の形を決めているのは `c` です。同じ `c` なら、どの値から遡っても同じ境目に寄ります。
- 場：境目は、遠くへ行きそうで行かない所で、認知されなかった道の散る所です。pjdhiro は 2025 年の記事で、そこを「創造が生まれる土壌」と見ました。
- 渦：前へ打った渦は、「[創造とは](../cs/)」が五つの段に置く渦かもしれない、と pjdhiro は見ています。

<details><summary>詳しく — よく見るジュリア集合の絵と、ほかの c（c を選ぶ地図）</summary>

よく見るジュリア集合の絵も、ここで見られます。左の地図で `c` をクリックするか、下のスライダで `c` の実部と虚部を動かすと、右に、その `c` で残る形が出ます。遡ると境目に集まる様子は、本文の図「前へは渦、遡ると境目」で見られます。

<figure class="glow-card reader-figure jp-fig" id="jp-paint">
<p class="jp-fig__title">よく見るジュリア集合の絵：c を一つ選び、平面の点を一つずつ試して、遠くへ行くかで色を付ける</p>
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

<a id="jp-idea"></a>問いの筋を、pjdhiro は、次のように整理しています。

<strong>pjdhiro の見方：</strong>起業家は、自身を回転させるように、認知できるものと、し得ないもので進む。それは、体感では、神・美・愛のようなもので駆動する。それは、ジュリア集合のようなポテンシャルから出る。かな。

一歩ごとに引き寄せる `c` と、その `c` が形を決める境目は、別々のものではないのかもしれません。問いの筋の「駆動する」と「ポテンシャルから出る」は、この関係に重ねて読めそうです。冒頭の問い「ジュリア集合のような何かが、神・愛・美のポテンシャルなのではないか」も、この重なりから読めるかもしれません。

<!--TURN-->駆動する `c` と、形の出てくる境目を、一つの問いの筋に重ねました。次は、美の側から、もう一度この場に近寄ります。<!--/TURN-->

<!--PART:第四部|美の定義から入った、四段の仮説-->

## 四段の仮説の見取り

<!--OPEN-->

<a id="jp-four"></a>第三部には、二つの問いが残りました。前へ打った渦と、遡ったジュリア集合の境目の関係は、何を意味するのか。起業家の行動の結果は、そもそもどんなポテンシャルだったのか。pjdhiro は、この二つに、美の定義から入って、四段の仮説を立てました。問いの筋のうち、神・美・愛のようなもので駆動し、それがジュリア集合のようなポテンシャルから出る、という所に、美の側から近寄る仮説です。

- 一つ目：美は、美醜・恐怖の入り乱れたところから出る（章「美は、恐ろしさの入り乱れたところから出るのか」）
- 二つ目：ジュリア集合に似た形は、自然の中に、善悪の判断のない形として並ぶ。その形が神や愛のようなポテンシャルの場で、そこから元型のようなイメージや美が生まれる（章「ジュリア集合に似た形を、自然の中に探す」「神・愛・美は、心を惹きつける一つの場から出るのか」）
- 三つ目：もしも美・神・愛が同じで、愛で駆動するのがプロジェクトだとしたら、その場の形も、そこから生まれる（章「美・神・愛が同じなら、プロジェクトの場の形は」）
- 四つ目：それがあらゆる大きさで自己相似なら、至る所にジュリア集合が現れる（章「どの大きさでも同じ形なら、至る所に現れる」）
- 結び：美は、起業家のエネルギーに近い（章「美は、起業家のエネルギーに近いか」）

四段のあいだには飛躍があります。番号と並べ方は、Claude が対話を整理して付けました。四段を言い終えて、pjdhiro はこう添えました。

<strong>pjdhiro の見方：</strong>この四段が、私の直感的な仮説です。

pjdhiro は、ジュリア集合を見て、創造の五つの段（場・波・縁・渦・束）の着想を得ました。そのあと「[創造とは](../cs/)」で 30 の分野の論を調べる中で、似た構造が、いろいろな分野に見つかってきました。四段の仮説は、その延長にある着想です。

## 美は、恐ろしさの入り乱れたところから出るのか

<a id="jp-awe"></a><a id="jp-awe-ground"></a>一つ目は、美がどこから出るか、という仮説です。入口は、ひまわりの渦でした。

<strong>pjdhiro の仮説（一つ目）：</strong>黄金比のひまわりの渦は、美しさを感じる。黄金比というのも、美しさの定義の一つ。そのポテンシャルは、ジュリア集合の形。それは、見る人によっては、恐ろしさや醜さも感じる。美は、美醜・恐怖の入り乱れたところから出る、という解釈が一つ目。

ひまわりの種は、黄金角（約 137.5°）ずつ回る渦に並びます。第三部の図の最初の `c` は、前へ打った値がこの角度ずつ回るように選んだ値です。第三部で問いに残った、渦と境目の関係について、pjdhiro は、渦の奥にあるもの（ポテンシャル）が、同じ式を遡ると出てくるジュリア集合の形だ、と見ています。

<figure class="glow-card reader-figure jp-fig" id="jp-golden">
<p class="jp-fig__title">黄金角の渦と、ひまわりの並び：同じ角度で回り、距離の変わり方だけが違う</p>
<div class="jp-fig__grid">
<div class="jp-fig__panel"><p class="jp-fig__label">渦：黄金角の c で前へ打った値（寄る一点の周りを拡大）</p><canvas data-g="2" width="420" height="420" aria-label="一歩ごとに 137.5 度回り、0.97 倍に縮む点の並び"></canvas></div>
<div class="jp-fig__panel"><p class="jp-fig__label">ひまわり：種の並べ方（黄金角・距離 √n）</p><canvas data-g="3" width="420" height="420" aria-label="一つごとに 137.5 度回り、外へ広がる種の並び"></canvas></div>
</div>
<figcaption>渦の図は、一歩ごとに 137.5° 回り、0.97 倍に縮みます。外ほど古い点です。ひまわりの図は、中心から外へ数えて一つごとに 137.5° 回り、距離 √n で広がります。実際の花では、外の小花ほど古い（数える向きは、花が育つ順の逆）ので、渦の図と同じく外ほど古く、角度も同じです。違うのは距離の変わり方で、渦の図は一歩ごとに 0.97 倍に縮み、ひまわりの図は √n に比例して伸びます。</figcaption>
</figure>

<details><summary>詳しく — ひまわりの並びを描く式（フォーゲルの式）</summary>

ひまわりの頭花の小花（種）の並びは、フォーゲルの式で描かれてきました。中心から外へ n 番目の小花を、n × 137.5° の向きに、中心から √n に比例する距離に置く式です。植物の形を計算で描く研究の本は、この番号の振り方は実際の小花の齢と逆だ、と書いています。外の小花ほど古い、ということです。

出典：Prusinkiewicz & Lindenmayer (1990) [*The Algorithmic Beauty of Plants*](https://algorithmicbotany.org/papers/abop/abop.pdf), Springer（本文照合済。著者の研究室〔カルガリー大学〕が公開している電子版。第 4 章 pp.100–101。フォーゲルの式 4.1 と、番号が小花の齢と逆であること）。

</details>

お寺や教会、美術品などを前にして、美しいのに畏れを感じることがあります。ジュリア集合の形を見たときの印象を、pjdhiro はこう言います。

<strong>pjdhiro の体験：</strong>ジュリア集合の形状を見た時に感じる、美しさ・恐怖・禍々しさのような印象は、キリスト教の絵画などを見た時に感じたイメージに近い。私の感覚の類似から、神と呼びたいもの、畏怖のような、頼れる存在でありながら恐怖する存在とも言えそう。これが足場です。

18 世紀の思想家バークが、神の力の前で、人は身震いしながら喜ぶ、と書いた段を読んで、pjdhiro はこう言いました。

<strong>pjdhiro の体験：</strong>これを体感した時の表現は、分裂に近いのでは？だと思います。強烈な退行が身体に出る。たとえば、高所恐怖症や寒気など。

ここでの分裂は、精神分析家クラインの言う分裂です。一つの相手を、よい面と悪い面に割って持つ心の動きで、頼れる像と恐ろしい像が、一つの相手から対で出てきます。

<details><summary>先行研究 — 美と恐ろしさを、一つの体験の中に見た論</summary>

- リルケ『ドゥイノの悲歌』（1923）：美は、恐ろしいものの始まりにほかならない（[Zeno.org の翻刻](http://www.zeno.org/Literatur/M/Rilke,+Rainer+Maria/Gedichte/Duineser+Elegien/Die+erste+Elegie)）
- バーク『崇高と美の観念の起原』（1757）：美は愛を起こす性質から、崇高は恐ろしいものから来る。神の力の前で、人は身震いしながら喜ぶ（[初版の走査](https://archive.org/details/enqphilosophical00burkrich)・[増補後の本文の走査](https://archive.org/details/harvardclassicso0024char)）
- オットー『聖なるもの』（1917）：聖なるものの体験は、退かせる戦慄と、惹きつける魅惑の、対照の調和（[第 13 版の走査](https://archive.org/details/dasheiligeuberda00otto)・[英訳の走査](https://archive.org/details/ideaofholyinquir0000otto_k1y1)）
- 石津とゼキ（2014）：崇高と美は別々の脳の系に乗るが、崇高と感じた写真は、美しいとも醜いとも感じられうる（[論文](https://doi.org/10.3389/fnhum.2014.00891)）
- クライン（1946）：分裂は不安への守りで、理想化は迫害の恐れと対で出る（[PEP-Web の記録](https://pep-web.org/browse/document/IJP.027.0099A)）
- カーハート＝ハリスら（2014）：退行した認知は、秩序と無秩序の境目（臨界）にあり、そこでは元型的な主題が意識に上る、という仮説（[論文](https://doi.org/10.3389/fnhum.2014.00020)）
- 数学の式の美しさが、絵や音楽の美と同じ脳の所で働く研究は、読み物「[美とは](beauty.html#bt-euler)」で見ています。

どれも本文で照らしました。訳は Claude。

</details>

## ジュリア集合に似た形を、自然の中に探す

<a id="jp-form"></a>二つ目は、形の側からの仮説です。ジュリア集合に似た形を、自然の中に探していきます。

<strong>pjdhiro の仮説（二つ目）：</strong>ジュリア集合の形に似ているものを、探して挙げていくのがいいね。地形とか、植物とか、化学反応とか、細胞とか。実は、自然界で善悪判断のない形状が列挙される。これが二つ目。

挙げられた形は、どれも、誰かが良い悪いを判断して作った形ではありません。ジュリア集合の形も、式をくり返したときに、外へ出ずに残る所の境目に、良いも悪いもなく現れます。

<p class="reader-lead"><span class="reader-lead__label">工事中</span>自然の中から、ジュリア集合に似た形を挙げていくところは、まだ書いていません。</p>

## 神・愛・美は、心を惹きつける一つの場から出るのか

<a id="jp-potential"></a>二つ目の仮説は、形の話から、神と愛の話へ進みます。pjdhiro は、神と呼ばれる存在を感じてしまう心の作りを、ユングの元型（多くの人の心に共通して湧く像の型）から見ていました。その話を受けて、二つ目は次のようにまとまりました。

<strong>pjdhiro の仮説（二つ目）：</strong>ジュリア集合のようなものが、神や愛のようなポテンシャルの場で、そこから元型のようなイメージが湧いたり、美と呼ばれたりするものが生まれる。それらは、心を惹きつけられる、という意味で同じ。

主張は、神・愛・美は、どれも心を惹きつけるという点で同じで、その惹きつけるものが出てくる場が、ジュリア集合のような形をしている、ということです。

このページは、`c` を、一歩ごとに同じだけ引き寄せる、Love と呼びたいものの重力と仮に置いてきました。心を惹きつける、という言い方は、その `c` の働きと同じ向きを指しているように見えます。惹きつけられた先で、像が湧けば元型と呼ばれ、心が動けば美と呼ばれる、と読めます。

<details><summary>先行研究 — 惹きつけるものと、その場の形を書いた論</summary>

- サッコ、マークス＝ターロウ、ベイトマン（2024）：マンデルブロ集合の美しさは境目にあり、実数と虚数をまたぐことは、ユングの意識と無意識の考えを補う（[論文](https://doi.org/10.32388/JK522A.2)）
- マークス＝ターロウ（2010）：フラクタルは境目を占め、分けると同時につなぐ。ウィニコットの潜在空間（potential space）は、フラクタルの境目で写せる（[論文](https://www.museumofplay.org/app/uploads/2022/01/3-1-article-fractal-self-at-play.pdf)）
- L. カウフマン（2005）：くり返しの行き着く形（不動点）は、観察する者と世界が分かれていない、くり返しの関わりの印（[論文](https://doi.org/10.1108/03684920510575780)・[著者の大学の頁の PDF](http://homepages.math.uic.edu/~kauffman/Eigen.pdf)）
- アリストテレス『形而上学』Λ 巻 7 章：はじめの動者は、動かずに、愛されるものとして動きを生む（[MIT の英訳](http://classics.mit.edu/Aristotle/metaphysics.12.xii.html)）
- ホワイトヘッド『過程と実在』（1929）：神は「感じへの誘い（lure for feeling）」で、可能性（potentiality）の絶対の富（[走査](https://archive.org/details/processrealityes00whit_1)）

どれも本文で照らしました。訳は Claude。

</details>

## 美・神・愛が同じなら、プロジェクトの場の形は

<a id="jp-source"></a>三つ目は、二つ目を Love駆動開発につなぐ仮説です。

<strong>pjdhiro の仮説（三つ目）：</strong>もしも、美・神・愛が同じものを指しているとしたら、愛で駆動するのがプロジェクトだとしたら、その場の形は、美のポテンシャルであるジュリア集合から生まれる。かなり飛躍のある仮説ですが。

Love駆動開発は、プロジェクトを動かしているもの（駆動源）を、Love と呼びたいものと置きます。二つ目の仮説では、神も愛も美も、心を惹きつけられる、という点で同じ、と置きました。三つ目は、そこに「もしも」を二つ重ねて、プロジェクトの場の形へつなぎます。

「もしも美・神・愛が同じなら」という所にも、古典の足場があります。三つを一つの名に重ねた古典、愛と美を生み出すことと結んだ古典、愛を渦や円い動きとして書いた哲学者です。

<details><summary>先行研究 — 美・神・愛を一つに重ね、生み出すことや渦と結んだ古典</summary>

- 偽ディオニュシオス『神名論』第 4 章（5 世紀末〜6 世紀ごろ）：神を善・美・愛の名で呼ぶ。美は、すべてのものを自分のほうへ呼び寄せるので「美」と呼ばれ、すべては美と善への憧れに動かされる（[ロルト訳 1920 の走査](https://archive.org/details/dionysiusareopag00dion)。7 節 p.95・10 節 pp.99–102。ギリシア語の原典とは照らしていません）
- プラトン『饗宴』：愛する人たちが目指すのは、美の中で生むこと。美を順に見ていく人は、終わりに突然、美そのものを見る（[ジョウエット訳](http://classics.mit.edu/Plato/symposium.html)。ディオティマの話の段）
- エンペドクレス（紀元前 5 世紀）：愛が渦の中心に達したとき、すべてが集まって一つになる（[バーネットの英訳](https://en.wikisource.org/wiki/Early_Greek_Philosophy/Empedokles_of_Akragas)。断片 35・p.211）
- パース「進化的な愛」（1893）：愛の運動は円く、作ったものを独立へ押し出すことと、調和へ引き寄せることが、一つの衝動の中にある（[原文と対訳](peirce-evolutionary-love-ja.html)。p.177。読み物「[パースの創造的な愛と、アブダクション](peirce-love-abduction.html#pa-love)」）

三つを一つの源に重ねる所、愛と美を生み出すことと結ぶ所、愛を渦や円い動きとして書く所を借ります。その源の形をジュリア集合のようなものに見て、式の渦と重ねるのは、このページの仮説です。どれも本文で照らしました。訳は Claude。

</details>

## どの大きさでも同じ形なら、至る所に現れる

<a id="jp-scale"></a>四つ目は、ここまでの仮説が、大きさを変えても同じ形で成り立つとしたら、という仮説です。

<strong>pjdhiro の仮説（四つ目）：</strong>その仮説が、あらゆるスケールで自己相似だとしたら、宇宙の場や、光の励起する背景など、至る所にジュリア集合が現れる。30 領域で創造が報告された理由の仮説です。

自己相似は、部分を拡大すると全体と同じ形が見える、という性質です。ジュリア集合の境目も、どれほど拡大しても込み入った模様が続きます。もしも美・神・愛の場の形が、どの大きさでも同じなら、宇宙のような大きなものから、人の心の小さな動きまで、至る所に同じ形が現れることになります。pjdhiro は、起業家・組織・社会がフラクタルで、起業家の内面の微細な心理要素も同じ形で相似する、とも見ています。どこかの大きさで当てはまるものが見つかれば、ほかの大きさにも当てて読める、という見方です。

どの大きさでも同じ形、という所には、部分に全体が入るという東アジアの古典の見方が近く、至る所にある創造を神の名と結んだ研究者もいます。

<details><summary>先行研究 — 部分に全体が入る形と、至る所にある創造</summary>

- 法蔵『華厳金師子章』（7〜8 世紀）：一本一本の毛の中に限りない獅子が在り、それがまた一本の毛の中に入る。重なり重なって尽きない様を、帝釈天の網の珠にたとえる（[CBETA の頁](https://cbetaonline.dila.edu.tw/zh/T45n1880_p0665c23)。宋の淨源の註の本〔大正蔵 T45 No.1880〕に引かれた本文。p.665c23–27）
- S. カウフマン『聖なるものを再発明する』（2008）：神とは、自然の宇宙・生物圏・人の文化の絶えざる創造性に、私たちが選んで付けた名だ、という見方を出す（[Edge の頁「Breaking the Galilean Spell」](https://www.edge.org/conversation/stuart_a_kauffman-breaking-the-galilean-spell)。序文と第 1 章の抜粋で、本の頁は照らしていません）

部分に全体が入る形と、至る所にある創造に神の名を当てる見方を借ります。それを、どの大きさでも同じ形が現れる、という四つ目の仮説に重ねるのは、このページの仮説です。どれも本文で照らしました。訳は Claude。

</details>

## 美は、起業家のエネルギーに近いか

<!--OPEN-->

<a id="jp-entrepreneur"></a>四段には、行き先があります。美の定義から入ろうと決めたとき、pjdhiro は、行き先も一緒に見ていました。

<strong>pjdhiro の見方：</strong>美とは、起業家のエネルギーと近い。

その結びに、pjdhiro は、こう添えています。

<strong>pjdhiro の見方：</strong>ならば、愛もそうかもしれない。

愛が起業家のエネルギーに近いなら、この結びは、読み物「[Love駆動開発と呼びたいもの β](love-driven-dev.html)」につながります。Love駆動開発は、人やプロジェクトを動かしているもの（駆動源）を、Love と呼びたいものと置いて、プロジェクトがどう進むかを見ています。このページの問いは、その駆動源の出てくる場の形を、ジュリア集合に見てみたものです。

このページは、`c` を Love と呼びたいものの重力と仮に置き、起業家の思考・心理・行動を一歩ごとに引き寄せるもの（駆動源）と見てきました。章「[c は、一歩ごとに同じだけ引き寄せる](#jp-drift)」で、エフェクチュエーションの論では起業家を動かすものは謎のまま残っている、という pjdhiro の見方に触れました。四段の仮説は、その謎の所に、美・神・愛と同じものを置いてみる見方です。起業家が何かに惹きつけられて動き出すとき、その惹きつけるものは、美しいものに心を惹かれるときと同じものかもしれない。結びは、そう読めます。章「[駆動源と場は、別々のものではないのか](#jp-idea)」の問いの筋の「体感では神・美・愛のようなもので駆動する」は、この結びを、起業家の体感の側から言ったものとして読めます。

このページの芯に戻して読むなら、一人の中で掛け合わさる自己達が、まだ形になっていない可能性で、その可能性を惹きつけて一歩ごとに形にしていくものが、美・神・愛のようなものなのかもしれません（芯と結びをつなぐこの読みは、Claude が置いたものです）。

<!--TURN-->四段の仮説で、問いに近寄りました。最後に、式の所ごとに置いた仮説を並べます。<!--/TURN-->

<!--PART:巻末-->

## 式の所ごとに置いた仮説

<!--OPEN-->

<a id="jp-gaps"></a>このページは、式の所ごとに、起業家の何に当たるかを仮説として置いてきました。所ごとに並べます。

<b>起業家の漸化式：漸化式と呼べる二つの式を足場にしました。</b>1 は人に会って変化した分を足していく式（第一部）、2 は自己と自己の掛け算を入れた式（第二部）です。1 からは、戻りながら伏線を回収するようにまとめる再帰（後置再帰・第一部）へ、2 からは、逆にたどる逆写像（第三部）へ広げました。

<b>一歩（`→`）：人に会い、気づき、約束する、のくり返し。</b>起業家の行動を、見つけた所から条件を変えた次の木へ移る、入れ子の深さ優先探索のように見ました（第一部）。

<b>`z`：起業家の思考・心理・行動。</b>実軸に認知できる面、虚軸に認知し得ない面を当てました（章「[z は、起業家の思考・心理・行動](#jp-z)」）。

<b>`z²`：起業家の中で起きる、自己と自己の掛け算。</b>掛け合わさる分（`2ab`）は、どちらか一つの自己からは出てきません。気づいていない自分（シャドー）との掛け合わせでは、見込みとの差として振り返られる、と当てました（章「[z の二乗は、起業家の中で起きる、自己と自己の掛け算](#jp-square)」）。

<b>`c`：Love と呼びたいものの重力。</b>一歩ごとに同じ向きへ同じだけ引き寄せ、符号が一つしかないものと当てました（章「[c は、一歩ごとに同じだけ引き寄せる](#jp-drift)」）。

<b>境目：起業家を駆るものが出てくる、ポテンシャルの場。</b>四段の仮説では、神・愛・美のポテンシャルの場と読みました（第三部・第四部）。四段のうち、自然によく見られる形と美しさのあいだ、美・神・愛が同じものを指すかの「もしも」は、飛躍をはらんだまま置いた仮説です。

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

先行研究の紹介は、Claude が原典を読んで書いた要約です。古典は、パブリックドメインの翻刻と本の走査で読み、頁と節はそれぞれの版のものです。論文は、出版元が公開している本文と、著者の頁に置かれた写しで読みました。クラインの論文は、Internet Archive にある走査で読みました。上げた人と権利が確かめられない写しなので、その写しにはリンクを張らず、出版元の記録（PEP-Web）に張っています。パースの論文は、このサイトの対訳で照合したものを使っています。英語・ドイツ語・漢文の訳は、どれも Claude です。図の値は Claude が計算しました。

</details>
