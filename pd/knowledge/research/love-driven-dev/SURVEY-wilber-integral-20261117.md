# ウィルバーの統合理論と、Love駆動開発の開発のプロセス（調べの記録）

2026-11-17・違和感帳 i20261116153526ue8・セッション wilber-integral。読み物の本文はまだ直さない。置き場は pjdhiro が判断のページのボタンで選ぶ。

## 起点

pjdhiro の言葉（違和感帳 2026-11-16、Love駆動開発の読み物を読んでいて）：

> ウィルバーの統合理論も近いと思っています。開発のプロセスが。駆動源は覚えてません

pjdhiro はウィルバーの本を読んで感想を持っている（`docs/rules/stance-theories.md`「pjdhiro が読んだ本」：Claude が知っているように解説するのでなく、pjdhiro の感想や解釈を引き出し、それに答える形にする。ウィルバーは誰かの論を下地に積み上げたもの。俯瞰して見る感じが引用したくなる）。この記録は、その答えの材料として、本文を読めたところだけを並べる。

これまでの扱い：読み物の第七部のティール組織の段で、ラルーが色の呼び方をウィルバーから借りた、と書いている（Laloux 2014 p.15 で照合済・`SURVEY-teal-laloux-20261116.md`）。`pd/knowledge/research/developmental-stages/README.md` の表では、統合理論は「[記憶]」のまま。

## 読んだ原典と照合の状態

| 文献 | 置き場 | 状態 |
|---|---|---|
| Wilber, K. (1997) "An Integral Theory of Consciousness", *Journal of Consciousness Studies* 4(1):71–92 | 雑誌の出版社 Imprint Academic のサイトにあった全文の HTML（`http://www.imprint.co.uk/Wilber.htm`）の Wayback の記録（2004 年の写し）。頁に「Copyright, 1997, Imprint Academic」 | 本文照合済（出版社の HTML。頁番号は無いので、節の名で示す） |
| Wilber, K. *Kosmic Karma and Creativity*（Kosmos 三部作の第二巻）の抜粋 A「An Integral Age at the Leading Edge」・抜粋 B「The Many Ways We Touch」 | 出版社 Shambhala の著者のサイト「Ken Wilber Online」（`wilber.shambhala.com/html/books/kosmos/`）の Wayback の記録（2006 年の写し）。頁の題に「from Volume 2 of the Kosmos Trilogy」 | 本文照合済（著者・出版社のサイトに著者が出した抜粋。本としての刊行は確かめていない。頁番号は無いので、抜粋の部の名で示す） |
| Wilber, K. (1995) *Sex, Ecology, Spirituality*（Eros・Agape・Phobos・Thanatos を組み立てた本と言われる） | 探していない | 未照合（書籍）。この記録では、Eros の説明に使わない |

抜粋 C・D・G は、Wayback の取得が途中で止まり、一部しか読んでいない（C の付録 B に「emergent Eros」の一か所）。原典の文字は本体の checkout の `.cache/raw/wilber/` に置いた（git の外）。

取りに行った経路：`scripts/find-source.sh find`（Crossref に該当なし・OpenAlex は closed・Wayback の CDX で imprint.co.uk と wilber.shambhala.com）→ 出版社の頁の URL を Wayback で直に引いた。台帳は本体の `.cache/raw/find-ledger.md`。

## ウィルバーの開発のプロセスに当たるところ

原文は短く引き、訳は Claude による。

1. **四つの象限と、段階**（JCS 1997・要旨）：発達と進化の系列を多く調べると、意識とその発達は四つの象限（意図・行動・文化・社会）を持ち、どれも十余りの段階で展開する。「each of these dimensions was found to unfold in a sequence of at least a dozen major stages or levels」。一人の内側（左上）・外側（右上）・集まりの内側（左下）・外側（右下）が、互いに還元されずに対応し合う（「An All-Quadrant, All-Level Approach」の節）。
2. **含んで超える**（JCS 1997・「The Further Reaches of Human Nature」の節）：内側の意識は「continue the evolutionary process of transcend and include」。合理も、超えられるが含まれる。抜粋 A の第一部では、瞬間ごとに、前の瞬間の全体が今の瞬間の部分になる、と書く（「the whole of one moment becomes a part of the whole of the next」）。
3. **前の瞬間は、気づく前に与えられている**（抜粋 A・第四部 1 頁）：前の瞬間の全体は、今の瞬間に a priori として手渡され、今の瞬間の主観が気づくより先にある（「a given which pre-exists any registration by this moment」）。ただし、ただ与えられたままではなく、今の瞬間に取り上げられ、含んで超えられ、作り直される（「always already taken up, transcended and included, transformed and reworked」）。前の瞬間に自由として生まれたものは、次の瞬間には決まったものとして渡り、次の瞬間はそれを含んだうえで、自分の自由を足す。今日の解釈が明日の事実になる（「The interpretations of today become the facts of tomorrow」）。
4. **段階と線（levels and lines）**（抜粋 A・第三部 2 頁）：ある線（技術・認知など）で高く、別の線（道徳など）で低い、という食い違いが、一人にも社会にも起きる。だから深さが増えることは自動的には進歩でなく、発達はいつも「good news, bad news」の混ざりになる。
5. **調べる人の側の変容**（JCS 1997・「Methodology of an Integral Approach」の節）：統合の方法には二つの翼があり、一つは各象限の段階と線を同時に追うこと、もう一つは「the interior transformation of the researchers themselves」。

## 駆動源に当たるもの

pjdhiro は「駆動源は覚えてません」と書いている。抜粋で読めたのは Eros の語。

1. **傾き**（抜粋 A・第二部）：含んで超える関係が、感じの側で、宇宙が複雑さと深さの増す方へゆるやかに傾くことの土台になる。「a tilt that by any other name is Eros」。
2. **引き**（抜粋 A・第三部 2 頁）：Eros を「the morphogenetic pull to greater depth, complexity, consciousness, and care」と言い換える。深さ・複雑さ・意識・気づかいの増す方への、形づくりの引き。
3. **自己超越による自己組織化**（抜粋 A・第三部 2 頁と第四部 1 頁）：ヤンツの言葉として「self-organization through self-transcendence」を引き、瞬間ごとに創造的に展開する、と書く。
4. **答えの名としての Eros**（抜粋 A・第五部）：新しい種は一匹でなく群れごと現れる。それがどうして起きるかに、「The short answer is: Eros.」と答え、同じ所で、どう起きるかより、内と外、一と多が同時に現れるという事実のほうを先に置く。付録では「a massive mystery, which we summarize as emergent Eros」（抜粋 C・付録 B）。
5. **上へ届く Eros と、下へ届く Agape**（抜粋 B・第二部）：瞬間ごとに、新しい広がりが前のものを包んで抱く。「an Eros that reaches up and an Agape that reaches down」。ホワイトヘッドに同意して、展開する創造の新しさと、包む愛の抱擁の両方がなければ、瞬間ごとの存在は説明しにくい、と書く。
6. **実践すると Eros が動く**（抜粋 B・第三部）：統合の見方を実際に実践するほど、Eros が系の中を揺らし、次の段階への変容へ引く。

## 近いところ・違って見えるところ（Claude の読み）

ここから下は Claude の読み。採るか、どう書くかは pjdhiro が決める。

### 近く見えるところ

- **先に置かれてしまっていること。** 読み物の「開発とは、何を指すか」で、pjdhiro は「意識的に先に能動的に置くことはできないが、無意識的に先に置かれてしまっていることがあって」と言う（`#ldd-development-name`）。ウィルバーの抜粋 A の、前の瞬間は今の瞬間が気づく前に与えられている、という所と向きが近い。ウィルバーは続けて、その与えられたものを今の瞬間が取り上げ、作り直す、と書く。読み物の「主体は私ですが」（`#ldd-development`）と並べられるかもしれない。
- **一人でも、集まりでも、社会でも。** 読み物の開発の表は「誰が」に、一人・人の集まり・社会を並べる（`#ldd-development-scope`）。ウィルバーは、一人の内と外、集まりの内と外が同時に展開する（抜粋 A・第五部「the quadrants tetra-evolve」）と書く。「私が気づいていない私と私の周りの環境によって開発されていく」という pjdhiro の見方の「私」と「周りの環境」が、象限の左と右・上と下に当たって見える。
- **傾き・引き。** Eros を「傾き」「引き」と書く所は、読み物の重力のたとえ（Love に吸い寄せられるように、構造の歪みの中にいる・`stance-theories.md`「重力」）と、たとえの向きが近い。
- **含んで超える と、束が次の場になる。** 前の瞬間の全体が次の瞬間の部分になる、という所は、創造とはの束が次の場になる、という読み物の書き方（開発の章の「開発は、いつ始まり、いつ終わるのか」の畳み）と形が近い。
- **段階と線。** 段階と線の食い違いと「good news, bad news」は、読み物の第四部の、発達段階で扱える細部や複雑さが違う、という pjdhiro の見方（`#ldd-stages`「ハード依存」）と並べられる。
- **Eros と Agape。** 上へ届く Eros と下へ届く Agape、創造の新しさと愛の抱擁、という並びは、読み物のパースのアガパズムの章と、ホワイトヘッドを経て隣り合う。

### 違って見えるところ

- **向き。** ウィルバーは、Eros に、深さが増す方への向きを持たせる（抜粋 A・第三部 1 頁「time's arrow ... is asymmetrically evolutionary」）。退行や病理も書くが、全体の傾きは上へ向く。読み物は、深さ優先探索のように、ハズレを前提に進み、ほどける・離れる・戻ることも開発に入れる。向きを一つに置かない。
- **地図にするか。** ウィルバーは全象限・全段階の地図を描き、そこに諸学派を位置づける（JCS 1997）。読み物は手順の形をとらず、群盲象を評すように一面を重ねる。四つの象限の格子で切ることは、読み物の書き方では避けてきた形でもある（`corrections.md` 型 B）。
- **名前の置き方。** ウィルバーは、謎と呼びつつ、答えに Eros の名を置く。読み物は、駆動源を「Love と呼びたいもの」と、呼び名を仮に置き、指月のたとえで言葉と指すものを分けている。

### 書かないこと

- Eros・Agape・Phobos・Thanatos の四つの組み立て（SES 1995）は、本を読めていないので書かない。
- ウィルバーの段階の実証の弱さ・学術での扱いへの批判（ラルーへの批判と同じ筋）は、ティールの記録（`SURVEY-teal-laloux-20261116.md`）で本文を読めていない分があるので、ここでは足さない。

## 置き場の案

判断のページ（このセッション用）で、pjdhiro がボタンで選ぶ。案：

1. 「開発とは、何を指すか」の章の畳み（pjdhiro の言葉「開発のプロセスが近い」を起点のカードにし、先に置かれてしまっていること・一人と集まりの同時の展開を並べる）
2. 哲学の視点の章に、ウィルバーの節を足す（ホワイトヘッドを経て、純粋経験・パースのアガパズムと隣り合う）
3. 第七部のティールの段の畳み（色の出どころに、ウィルバーの開発の見方を一段足す）
4. 第四部「発達の段階で、何が脅威に見えるかが変わる」の章（段階と線）
5. 置かない（この記録のまま）

どこに置いても、stance の「pjdhiro が読んだ本」のとおり、Claude の解説から入らず、pjdhiro の言葉と感想に答える形にする。
