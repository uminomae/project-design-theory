# 意思決定とは — 調べ 1：語の定義と、規範的な決定理論

調べた日：2026-11-18。訳はすべて Claude。原文の引用は一か所 40 語まで。

## 要点（10 行まで）

- 辞書・事典は、意思決定を「選ぶこと」で定義する。日本大百科全書は「目標を選択し…一群の手段のなかから特定の手段を選択すること」、ブリタニカ小項目は「諸手段を考察し、分析し、その一つを選択決定する人間の認知的活動」、APA は「二つ以上の選択肢から選ぶ認知の過程」。英語の decision はラテン語 decidere（切り離す）から。decision-making の語は 1946 年までに記録がある（Etymonline）。
- 日本大百科全書は、政治学・経営学で意思決定の研究が「第二次世界大戦後とくに」進んだと書く。組織の中の決定を早く主題にしたのは Barnard 1938 で、決定を、熟慮から出た行為の前にある過程と書き、組織の行動を決定の働きから見た（写しの性格のため未照合）。
- 規範理論の芯は、ベルヌーイ 1738 の「期待される価値でなく、各人が得る効用（emolumentum）で測る」と、効用の増え方は持ち物の量に反比例するという仮定（ラテン語原典で照合）。
- ラムジー 1926 は、信念の度合いを「それに基づいて行動する用意の度合い」と置き、賭けで測った。確率の法則は、部分的な信念の「首尾一貫性（consistency）の法則」で、破れば必ず負ける賭けの組（book）を組まれる、と書いた。
- ナイト 1921 は、測れる不確かさ（risk）と測れない不確かさ（uncertainty）を分け、真の不確かさが利潤と企業の形を説明するとした。
- フォン・ノイマンとモルゲンシュテルン（1953 年の第 3 版で読んだ）は、選好の完全な順序と確率の混ぜ合わせの公理から、一次変換を除いて一つに決まる数の効用を導き、「数の効用とは、数学的期待値の計算が正当になるもの」とまで書いた（写しの性格のため未照合）。
- サヴェッジは、1961 年の講演で、首尾一貫性の原理に従う人は、全事象に確率があるかのように、期待効用を最大にするように振る舞う、と書いた。1954 年の本そのものは読めていない。
- 反例：アレ 1953（JSFS 誌）は、合理性を公理への従いで定義すれば議論は同語反復になると論じ、確実なものに近い所での安全の好みを問う問いを出した（「アレの逆説」の名は、本人の 1988 年のノーベル講演）。エルズバーグ 1961 は、壺の例で、多くの思慮深い人がサヴェッジの公理に「熟慮しても」従わないことを示し、情報の「曖昧さ（ambiguity）」を第三の次元と呼んだ。
- 規範・記述・処方の三つ：Bell・Raiffa・Tversky 1988 は「ふつうの二分（ought と is）に、処方の側を足す」と書いた（出版社の頁の冒頭で照合）。規範と記述の二分自体はそれより前からあり、エルズバーグ 1961 も公理の「規範の使い方」と「予測の使い方」を分けている。

## 論ごと

### 語の定義：日本語の事典（コトバンク「意思決定」）

- 書誌：コトバンク「意思決定」の項。収める事典：『最新 心理学事典』（平凡社、執筆 繁桝算男）、『日本大百科全書（ニッポニカ）』（小学館、執筆 谷藤悦史・野々山隆幸）、『流通用語辞典』（ジェリコ・コンサルティング）、『ブリタニカ国際大百科事典 小項目事典』、『世界大百科事典（旧版）』（平凡社）の「サイモン」「ゲーム理論」の項の中の言及。
- 読んだ写し：https://kotobank.jp/word/%E6%84%8F%E6%80%9D%E6%B1%BA%E5%AE%9A-30537 （コトバンク。2026-11-18 に取得）
- 照合の状態：本文照合済（各事典の項の全文。事典そのものは二次資料。意思決定の語の定義の出典として使う）
- 鍵の文：
  - 日本大百科全書：「特定の状況あるいは将来おこると考えられる状況からの要求や要請に対応して、目標を選択し、その時点における利用可能な一群の手段のなかから特定の手段を選択すること。決定作成ともいう。」
  - 同：「第二次世界大戦後とくに研究が進められた政治学および経営学における意思決定」。政治学では 1950 年代のアメリカの行動論政治学で意思決定分析の鍵概念になった。経営学で扱うのは「純粋の個人としての意思決定ではなく、企業などの組織における意思決定」。宮川公男『意思決定論』の分類（経済学的・経営科学的・決定理論的・システム分析的・行動科学的）で概観し、決定理論的アプローチでは「確定性、リスク、狭義の不確実性」を分ける。
  - ブリタニカ小項目：「ある目標達成のための諸手段を考察し，分析し，その一つを選択決定する人間の認知的活動」。
  - 最新 心理学事典：「問題解決に当たって，実行可能な行為の中から最適と思われるものを選択すること。行為選択ともいう。」心理学理論は「規範的意思決定理論」と「記述的意思決定理論」に分かれ、さらに応用のためのモデルを「処方モデル」と呼ぶ節がある。規範モデルの代表は主観的期待効用モデルで、それが規範とされる理由は「少数の公理から導かれるから」。
  - 流通用語辞典：狭義には「所定の行動の代替の中から、特定のひとつの代替案を選び出すこと」。サイモンの広義の定義として、インテリジェンス・デザイン・チョイスの三段階を挙げる（サイモンの原典は調べ 1 の外）。
  - 世界大百科（旧版）「サイモン」の項：サイモンの経営組織論への貢献は「〈意思決定〉という概念に集約できる」。
- 要約：事典はどれも、意思決定を「目標や手段・行為の候補から選ぶこと」と定義する。日本大百科全書は「決定作成」の別名を挙げ、語が戦後の政治学・経営学で研究の鍵になったと書く。経営学で「意思決定」の語が広まった経緯（誰がいつ訳したか）を書く事典は、今回読んだ範囲には無かった。
- 批判・のちの改め：—

### 語の定義：APA Dictionary of Psychology

- 書誌：American Psychological Association. *APA Dictionary of Psychology*. 「decision making」（Updated 04/19/2018）、「decision theory」（同）。
- 読んだ写し：https://dictionary.apa.org/decision-making ・ https://dictionary.apa.org/decision-theory （APA の公開の頁）
- 照合の状態：本文照合済（項の全文。事典は二次資料）
- 鍵の文：
  - decision making：「the cognitive process of choosing between two or more alternatives」 訳：二つ以上の選択肢のあいだで選ぶ認知の過程。例は、食堂で料理を頼むような明快なものから、配偶者を選ぶような複雑なものまで。心理学者は (a) 複雑な課題での多くの決定の統計的な分析と、(b) 単純な決定の実験的な操作、の二つの道で理解しようとしてきた、と書く。
  - decision theory：「a broad class of presumptions … that aim to explain a process and identify optimal ways of arriving at conclusions so that prespecified criteria are met」 訳：過程を説明し、前もって決めた基準を満たすように結論に至る最適な道を見つけようとする、量的・社会・行動の諸科学の前提の広い一群。
- 要約：APA は意思決定を認知の過程として、決定理論を「説明」と「最適な道を見つける」の両方を目指すものとして定義する。normative-decision-theory の項は無かった（頁が辞書の入口に戻った）。
- 批判・のちの改め：—

### 語の定義：英語の辞書・語源

- 書誌：Merriam-Webster「decision」。Online Etymology Dictionary「decision (n.)」。
- 読んだ写し：Merriam-Webster は自動取得に 403 を返したので、Wayback の記録 https://web.archive.org/web/20250202233350/https://www.merriam-webster.com/dictionary/decision （2025-02-02 の写し）。Etymonline も 403 で、Wayback の記録 https://web.archive.org/web/20240312044330/https://www.etymonline.com/word/decision （2024-03-12 の写し）。
- 照合の状態：本文照合済（Wayback の記録。元は辞書の出版元の頁）
- 鍵の文：
  - Merriam-Webster：「the act or process of deciding」「a determination arrived at after consideration」 訳：決めることの行為・過程。熟慮のあとに至った決定（結論）。
  - Etymonline：ラテン語 decisionem、decidere「to decide, determine」、字義は「to cut off」（de「離して」＋ caedere「切る」）。「Decision-making (adj.) is recorded by 1946.」 訳：decision-making（形容詞）は 1946 年までに記録がある。
- 要約：英語の decision は「切り離す」を語源に持ち、熟慮のあとの決定と、決める行為の両方を指す。decision-making の複合語は 1940 年代半ばからの記録。
- 批判・のちの改め：—

### ベルヌーイ「くじの測り方についての新しい理論の試み」（Bernoulli 1738）

- 書誌：Bernoulli, D. (1738). Specimen theoriae novae de mensura sortis. *Commentarii Academiae Scientiarum Imperialis Petropolitanae*, Tomus V (1730–1731 年分), pp.175–192. 英訳：Bernoulli, D. (1954). Exposition of a New Theory on the Measurement of Risk (L. Sommer 訳). *Econometrica* 22(1), 23–36. DOI 10.2307/1909829（Crossref と一致。Crossref の頁は 23 から）
- 読んだ写し：ラテン語原典。Internet Archive の commentariiacade05impe（Natural History Museum Library, London の所蔵を Biodiversity Heritage Library の事業で走査したもの。パブリックドメイン）https://archive.org/details/commentariiacade05impe 。OCR の文字（`_djvu.txt`）で読んだ。
- 照合の状態：本文照合済（ラテン語原典。OCR の文字で読んだ。§1〜§6 と、末尾のニコラウス・ベルヌーイとクラメルについての添え書き。pp.175–178・189–190）。英訳 1954 は未照合（有料。OA の写しは無く、授業の頁 cw.fel.cvut.cz の写しは Bot Check を返し、Wayback にも無い）。
- 鍵の文：
  - §2（p.176）：「non iudicia sed consilia danda sunt; regulae nempe, quibus quisque suam sibimet aestimare debeat sortem」 訳：（ここで与えるべきは）判決ではなく助言、すなわち、各人が自分のくじを自分で見積もるべき規則である。
  - §3（p.176）：「valor non est aestimandus ex pretio rei, sed ex emolumento, quod unusquisque inde capessit」 訳：価値は、ものの値段からでなく、各人がそこから得る効用（emolumentum）から見積もるべきだ。続けて「値段は、もの自体から見積もられ誰にも同じ。効用は人の状態から」。
  - §5（pp.177–178）：利得のわずかな増しは「summae bonorum reciproce proportionale」 訳：持ち物の総額に反比例する効用をもたらす（と仮定する）。著者はこれを、ふつう起こることとして置き、例外（身代金の要る囚人）を挙げている。
- 要約：期待値（値×場合の数÷全場合）でくじを測る従来の規則は、人の状態を見ない。ベルヌーイは、規則の中の「価値」を「効用」に読み替え、効用の平均でくじを測ることを基本の規則とした。効用の増え方は持ち物の量に反比例すると仮定した。これは、各人が自分で自分のくじを見積もるための「助言」の規則だと、著者自身が書いている（判決との対比）。
- 批判・のちの改め：論文の末尾の添え書き（pp.189–190）で、ニコラウス・ベルヌーイは、各人が自分のくじを見積もるならこの考えに異論はないが、第三者が裁判官として公平に割り当てる場合は別だ、と答えた。クラメルが先に似た考えを手紙で示していたことも、著者が添えている（本文照合済）。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）§3、p.176：とても貧しい人が、等しい見込みで何も無いか二万ドゥカートかのくじを手に入れたとき、それを一万ドゥカートと見積もるべきか、九千で売ったら愚かか。「Id mihi non videtur」（私にはそう思えない）。ただし、とても豊かな人がそのくじを同じ値で買うのを断るなら、損をしていると思う、と続ける。同じ節に「pauperis magis refert lucrum facere mille ducatorum quam divitis, etsi pretium utrique idem sit」訳：千ドゥカートの儲けは、値段は二人に同じでも、豊かな人より貧しい人にとって大事である。読んだのは BHL の走査（Internet Archive の commentariiacade05impe）の OCR の文字。§3 は p.176 に収まる。

### ラムジー「真理と確率」（Ramsey 1926、刊行 1931）

- 書誌：Ramsey, F. P. (1931). Truth and Probability (1926). In R. B. Braithwaite (Ed.), *The Foundations of Mathematics and Other Logical Essays*（p.156 から）. London: Kegan Paul, Trench, Trubner. 編者の序（p.xii）によれば 1926 年末に書かれ、大部分がケンブリッジの Moral Science Club で読まれた未刊の論文。DOI は無い。書誌は本の題の頁と、Savage 1961 の文献 [24]・Ellsberg 1961 の注 3 で照らした。
- 読んだ写し：Internet Archive の in.ernet.dli.2015.46352（Digital Library of India の走査。Delhi University Central Library の所蔵）https://archive.org/details/in.ernet.dli.2015.46352 。OCR の文字で読んだ。著者は 1930 年に亡くなり、日本と英国では著作権が切れている。
- 照合の状態：本文照合済（パブリックドメインの作品。OCR の文字で読んだ。pp.156–159・166–183）
- 鍵の文：
  - p.169：「the degree of a belief is a causal property of it, which we can express vaguely as the extent to which we are prepared to act on it」 訳：信念の度合いは信念の因果的な性質で、ぼんやり言えば、それに基づいて行動する用意がどれだけあるか、である。その前に、度合いを確信の感じの強さとする見方を「observably false」と退けている。
  - p.182：「the laws of probability are laws of consistency, an extension to partial beliefs of formal logic, the logic of consistency」 訳：確率の法則は首尾一貫性の法則で、形式論理を部分的な信念に広げたもの、首尾一貫性の論理である。
  - p.182：法則を破る人は「could have a book made against him by a cunning better and would then stand to lose in any event」 訳：抜け目のない賭け手に賭けの組を組まれ、どう転んでも負ける。
  - p.183：「all our lives we are in a sense betting」 訳：私たちは一生、ある意味で賭けをしている（駅へ行くのは列車が走ることへの賭け）。
- 要約：ラムジーは確率を、信念の度合いの論理として扱った。度合いは、行動への用意として、選択肢（世界の組み合わせ）の間の選好から測る。倫理的に中立な命題（ethically neutral）を足場に、価値と信念の度合いを同時に測る手順を示し（pp.177–180）、首尾一貫した信念の度合いが確率の法則に従うことを示した。法則は、どの度合いが唯一合理的かを決めるものでなく、首尾一貫した組を見分けるだけだ、と書く（p.182）。
- 批判・のちの改め：Ellsberg 1961（p.3）は、ラムジーの「行動する用意」の考えを、サヴェッジらの公理の流れの出発点として引き、そのうえで反例を出した。Savage 1961 は、詳しくはラムジー 1931 を見よと書く（p.581、文献 [24]）。

### ナイト『リスク・不確実性・利潤』（Knight 1921）

- 書誌：Knight, F. H. (1921). *Risk, Uncertainty and Profit*. Boston and New York: Houghton Mifflin. 読んだのは London School of Economics の Series of Reprints of Scarce Tracts の再刊（1933 年の序つき）。
- 読んだ写し：創造とはの経済学の記録（`cs/evidence/evidence-D21-economics.md`「4. ナイト」）で本文照合済の写し（Internet Archive の公開の写し。本体の `cs/knowledge/raw/D21_knight_1921_risk-uncertainty-profit.pdf`）。今回、同じ写しの p.20 と p.233 を読み直した。パブリックドメイン（米国、1921 年刊）の公開版として Liberty Fund の Econlib https://www.econlib.org/library/Knight/knRUP.html がある（頁は開けたが、本文は頁の中で読み込まれる形で、今回は Econlib の本文を読んでいない）。
- 照合の状態：本文照合済（LSE の再刊の版。p.20・p.233。ほかの頁は D21 の記録を参照）
- 鍵の文：
  - p.20：「a measurable uncertainty, or "risk" proper, as we shall use the term, is so far different from an unmeasurable one that it is not in effect an uncertainty at all」 訳：測れる不確かさ、すなわち本来の「リスク」は、測れないものとまったく違い、実際には不確かさではない。続けて、不確かさの語を量にできない場合に限る、と書く。
  - p.233（第 8 章の頭）：測れるものを「risk」、測れないものを「uncertainty」と呼ぶ。両者は「objective」と「subjective」の確率と呼んでもよい。実際の違いは、前者では一群の事例での結果の分布が（計算か過去の統計で）分かっていることだ、と書く。
- 要約：ナイトは、ふだん「リスク」と呼ばれるものに、測れるものと測れないものの二つが混ざっていると言い、測れない「真の」不確かさが、利潤と、企業という組織の形を説明するとした。ナイトの区別は、決定をどんな不確かさのもとで行うかを分ける言葉として、後の決定理論の議論の足場になった（Ellsberg 1961 の書き出しがナイトから始まる。下）。
- 批判・のちの改め：Ellsberg 1961（p.3 と注 1）は、主観確率の公理の流れが正しければナイトの「測れない不確かさ」の多くは測れることになる、と書き、アローの批判（ナイトの不確かさは通常の確率と同じ性質を多く持つ）を注で引く。そのうえでエルズバーグは、測れない不確かさが残る場合を示した（下。本文照合済）。D21 の記録が、ナイトの論に後から付け足された枠を外した経緯を書いている。

### フォン・ノイマンとモルゲンシュテルン『ゲームの理論と経済行動』（von Neumann & Morgenstern 1944）

- 書誌：von Neumann, J. & Morgenstern, O. (1944). *Theory of Games and Economic Behavior*. Princeton University Press. 第 2 版（1947）で効用の公理からの導出の付録が足された（第 2 版の序、写しの p.x 付近）。読んだのは第 3 版（1953）。
- 読んだ写し：Internet Archive の in.ernet.dli.2015.215284（Digital Library of India の走査。Internet Archive への上げ手は個人）。OCR の文字で読んだ。Princeton University Press の見本の章（Wayback の i7802.pdf）は 2004 年版の Kuhn の序だけで、効用の節は無かった。
- 照合の状態：未照合（上げた人の分からない写しで読んだ。1953 年の第 3 版。§3.3・§3.6・§3.7、pp.17–18・26–28）。出版社の版・大学の写しは見つからなかった。
- 鍵の文（第 3 版の頁）：
  - §3.3.2（p.17）：個人を「whose system of preferences is all-embracing and complete」 訳：選好の体系がすべてを覆い完全な、と置き、二つの出来事だけでなく、確率つきの出来事の組み合わせも比べられるとする。
  - §3.6.1（p.26）：公理は (3:A) 選好の完全な順序（推移性を含む）、(3:B) 順序と組み合わせ、(3:C) 組み合わせの代数。これらから、効用は「one of numbers up to a linear transformation」訳：一次変換を除いて数である、が出る。
  - §3.7.1（p.28）：「We have practically defined numerical utility as being that thing for which the calculus of mathematical expectations is legitimate.」 訳：私たちは事実上、数の効用を、数学的期待値の計算が正当になるもの、として定義した。
- 要約：選好が完全で、確率つきの組み合わせにも及ぶなら、効用は一次変換を除いて数で表せ、期待値の形で組み合わさる。著者たち自身が、賭けること自体の効用（utility of gambling）がこの公理では矛盾なく言い表せないことを認め、それを今の心理学の水準での割り切りとして書いている（p.28）。
- 批判・のちの改め：アレ 1953（下）は、この定式を「Theory of Games の定式」として名指しで退けた。

### サヴェッジ『統計学の基礎』（Savage 1954）と、その要約の講演（Savage 1961）

- 書誌：Savage, L. J. (1954). *The Foundations of Statistics*. New York: Wiley（未照合）。Savage, L. J. (1961). The foundations of statistics reconsidered. In J. Neyman (Ed.), *Proceedings of the Fourth Berkeley Symposium on Mathematical Statistics and Probability*, Vol. 1, pp.575–586. Berkeley: University of California Press. DOI は無い（Crossref に候補なし）。書誌は PDF の頁の頭（「FOURTH BERKELEY SYMPOSIUM: SAVAGE」・頁 575–586）と OpenAlex の記録で照らした。
- 読んだ写し：1961 は UC Berkeley 図書館のデジタル化（Berkeley Symposium の公開の写し）https://digitalassets.lib.berkeley.edu/math/ucb/text/math_s4_v1_article-29.pdf 。Project Euclid の同じ論文の頁 https://projecteuclid.org/euclid.bsmsp/1200512183 は確認画面で止まる。
- 照合の状態：1961 は本文照合済（大学図書館の写し。全文 pp.575–586）。1954 の本は未照合（書籍。Internet Archive の貸し出しだけ）。
- 鍵の文（1961）：
  - p.579：「a person who succeeds in conforming to the principles of coherence will behave as though there were a probability measure associated with all events」 訳：首尾一貫性の原理に従えた人は、すべての事象に確率の測度があるかのように振る舞う。続けて、その測度のもとで期待効用を最大にするように選び、ベイズの定理に従う、と書く。
  - p.581：「Bayesians are not trying to tell anyone what he must do. We are of course content to state what we think are acceptable principles of coherence and let those who agree strive to comply with them.」（抜粋。二文で 40 語ほど）訳：ベイズ派は誰かに何をすべきかを命じているのではない。受け入れられると思う首尾一貫性の原理を述べ、賛同する人がそれに従おうと努めるに任せる。
  - p.581：馬の例。どの馬に 10 ドルを賭けるかの決定が、その人がどれを最もありそうと見ているかを操作的に教える。矛盾した振る舞いをしない人を仮定すると、選好は通常の確率の測度に従う、と書き、詳しくはラムジー 1931 と自著 1954 を指す。
- 要約：サヴェッジは、確率を「個人の確率（personal probability）」として、選好と選択から操作的に定義する立場を、ラムジー・デ・フィネッティに連なるものとして書く。首尾一貫性の原理は、命令でなく、賛同する人が従おうとする原理だと位置づける。
- 二次経由（Ellsberg 1961 の中の Savage 1954）：Ellsberg 1961 は、サヴェッジの公理を P1（行為の完全な順序）・P2（確かなことの原理 Sure-thing Principle）・P4 などと要約し（RAND 版 pp.8–9）、サヴェッジの言葉「Except possibly for the assumption of simple ordering, I know of no other extralogical principle governing decisions that finds such ready acceptance」（p.9、注 5）を引く。1954 の本の頁は確かめていない。
- 批判・のちの改め：アレ 1953・エルズバーグ 1961（下）。

### アレ「危険を前にした合理的な人の心理：理論と実験」（Allais 1953）と、アレの逆説

- 書誌：
  - Allais, M. (1953). La psychologie de l'homme rationnel devant le risque : la théorie et l'expérience. *Journal de la Société de statistique de Paris* 94, 47–73.（Numdam の頁と PDF の頭の頁で照らした。DOI は無い）
  - Allais, M. (1953). Le Comportement de l'Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l'Ecole Americaine. *Econometrica* 21(4), 503–546. DOI 10.2307/1907921（Crossref と一致）
  - Allais, M. (1988). An Outline of My Main Contributions to Economic Science. Nobel Lecture, December 9, 1988（Les Prix Nobel／Economic Sciences 1988 の頁 233 から）。
- 読んだ写し：JSFS は Numdam（フランスの数学文献の公開アーカイブ。Société de statistique de Paris の誌面の走査）https://www.numdam.org/item/JSFS_1953__94__47_0/ 。ノーベル講演は nobelprize.org の PDF https://www.nobelprize.org/uploads/2018/06/allais-lecture.pdf 。
- 照合の状態：JSFS 1953 は本文照合済（Numdam の公開版。pp.47–60 と pp.72–73）。ノーベル講演 1988 は本文照合済（nobelprize.org。pp.239–240）。Econometrica 1953 は未照合（有料。OpenAlex・Semantic Scholar に OA の写しは無く、ウェブの検索で当たった Paris-Dauphine の allais.pdf は別の文書〔参考文献の一頁〕だった）。
- 鍵の文：
  - JSFS p.47：「Le problème qui se pose est de savoir si la psychologie d'un homme rationnel doit se conformer ou non à une formulation du type de Bernoulli」 訳：問題は、合理的な人の心理が、ベルヌーイ型の定式に従うべきかどうかだ。著者は、Theory of Games の定式に「tout à fait opposée」（まったく反対）の立場を五年来とってきたと書く。
  - JSFS p.54：合理性を公理系への従いで定義すると、合理的な人はベルヌーイの定式に従うべきだという主張は「une proposition purement tautologique」（純粋に同語反復の命題）になる。
  - JSFS p.55：合理性の定義は二つありうる。抽象的には「non-contradiction avec soi-même」（自分自身と矛盾しないこと。目的の整合と、目的に適った手段の使用を含む）、経験的には、合理的に振る舞うと考える理由のある人が実際にすることを観察すること。著者は後者で、反例を一つ示せば足りるとする。
  - JSFS pp.59–60：問 35・36 など。例：A「確実に 1 億フラン」と B「10% で 5 億・89% で 1 億・1% で無し」、C「11% で 1 億・89% で無し」と D「10% で 5 億・90% で無し」。1952 年 6〜9 月に、合理的と考える理由のある人に問うた。結果の分析は「次の論文で」とあり、この論文には無い（p.73）。
  - ノーベル講演 p.240：反例の一つが「Allais Paradox」として有名になったが、それは「the preference for security in the neighbourhood of certainty」訳：確実さの近くでの安全の好み、という深い心理の現実に対応しているだけだ、と書く。1952 年の調査（約 100 人）の本格的な分析は 1974〜1976 年になった、とも書く。
- 要約：アレは、ベルヌーイ型の定式（期待効用）が、合理的な人の振る舞いの規範としても成り立たないと論じた。理由は、心理的な価値の散らばり（期待値のまわりの分布）を、定式が出発の公理から捨てているからだ（JSFS p.54）。合理性は公理への従いで定義してはならず、合理的と見なされる人の実際の選択で確かめるべきだとした。
- 注意：「多くの人が A を B より、D を C より選ぶ」という結果の記述は、今回読んだ JSFS 1953 とノーベル講演の頁には無い。Econometrica 1953 が読めるまで、その形では書かない。
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）ノーベル講演 p.240：1952 年の調査は、確率の理論をよく学んでいて合理的に振る舞うと見なせる、約百人に出した。1974〜1976 年の分析で「for every subject, there was no index, the maximization of whose mathematical expectation could explain the observed behaviour」訳：どの回答者についても、その数学的期待値を最大にすることで観察された振る舞いを説明できる指標は無かった。読んだのは nobelprize.org の PDF。

### エルズバーグ「リスク・曖昧さ・サヴェッジの公理」（Ellsberg 1961）

- 書誌：Ellsberg, D. (1961). Risk, Ambiguity, and the Savage Axioms. *The Quarterly Journal of Economics* 75(4), 643–669. DOI 10.2307/1884324（Crossref と一致）。読んだのは同じ題の RAND の論文 P-2173（August 1961）。
- 読んだ写し：RAND の版 P-2173。Wayback の記録（元は RAND の頁 https://www.rand.org/content/dam/rand/pubs/papers/2008/P2173.pdf 、2018-10-09 の写し）。RAND の頁は今は自動取得に 403。文字の層の無い走査なので、頁の画像で読んだ。QJE の誌面の頁は確かめていない。
- 照合の状態：本文照合済（RAND の版。頁の画像で読んだ。RAND 版の pp.3–12・16–18）。QJE の誌面は未照合（有料。DTIC の写しは 403、UC Irvine の授業の写しは Wayback から取れなかった）。
- 鍵の文（RAND 版の頁）：
  - p.4：公理の提唱者は、公理を「normative maxims, widely-acceptable principles of rational behavior」とみなす 訳：規範の格率、広く受け入れられる合理的な振る舞いの原理。
  - p.4：公理に従わないことを、規範としての受け入れの失敗と見るか、熟慮した選択の予測の失敗と見るかを分け、「I tend to be more interested in the latter aspect, Savage no doubt in the former.」訳：私は後者に、サヴェッジはきっと前者に関心がある。ライファの見方（公理に従うよう、もっと訓練が要る）を第三として添える。
  - p.5：「a class of choice-situations in which many otherwise reasonable people neither wish nor tend to conform to the Savage postulates」 訳：ほかの点では思慮深い多くの人が、サヴェッジの公理に従いたくもなく、従う傾向もない選択の場面の一群。
  - pp.11–12：二つの壺の例。多くの人は、中身の比の分かる壺 II の赤にも黒にも、分からない壺 I より賭けたがる。そうすると、選択から確率を推し量ることは「impossible」で、P1 か P2（確かなことの原理）を破っている。
  - p.17：違いは、利得の望ましさと出来事の確からしさに加わる「a third dimension of the problem of choice」、すなわち情報の「ambiguity」で、それは「a quality depending on the amount, type, reliability and "unanimity" of information」訳：情報の量・種類・信頼性・「一致」の度合いに依る性質で、推定への「自信」の度合いを生む。
- 要約：エルズバーグは、サヴェッジらの公理を、ナイトの「測れない不確かさ」を測れるものにする試みとして位置づけ、熟慮しても公理に従わない選択の型を示した。その選択は不注意でも無作為でもなく、「定まった規範の基準」が働いているように見える（p.16）。違いを生むのは、確率の分布についての情報の曖昧さだとした。著者は、これで公理が壊れるのでなく、当てはまらない場面を特定すれば、予測にも規範にも使い方がよくなる、と書く（p.5）。
- 批判・のちの改め：—（今回は読んでいない）
  - （2026-11-18・事例と Aha の直しで原文から引き直して足した）RAND 版 p.16：「the choices themselves do not appear to be careless or random. They are persistent, reportedly deliberate, and they seem to predominate empirically; many of the people who take them are eminently reasonable, and they insist that they want to behave this way, even though they may be generally respectful of the Savage axioms.」訳：選択そのものは、不注意にも無作為にも見えない。続けて選ばれ、熟慮したと言われ、経験上は多数を占めるように見える。そう選ぶ人の多くはきわめて思慮深く、サヴェッジの公理をおおむね尊重していても、この振る舞いをしたいのだと言い張る。頁の画像で読んだ。

### バーナード『経営者の役割』（Barnard 1938）

- 書誌：Barnard, C. I. (1938). *The Functions of the Executive*. Cambridge, MA: Harvard University Press. 第 13 章「The Environment of Decision」（pp.185–199）。
- 読んだ写し：Internet Archive の dli.ernet.449382（Digital Library of India の走査。説明に「a project under the auspices of the Government of India」とあるが、Internet Archive への上げ手は個人）。OCR の文字で読んだ。HathiTrust・Internet Archive のほかの版は貸し出しだけ。
- 照合の状態：未照合（上げた人の分からない写しで読んだ。pp.185–188・194）。著者は 1961 年に亡くなっており、パブリックドメインではない。Digital Library of India を公的機関の写しと見るかは、司令役か pjdhiro の判断。
- 鍵の文：
  - p.185：個人の行為は、熟慮・計算・思考から出たものと、無意識・自動・反応的なものに分けられ、前者に先立つ過程が行き着くところを「what may be termed "decision"」（「決定」と呼べるもの）と書く。
  - p.185：決定には、目的と手段の二つの項が意識の上にある。目的は論理の過程から出ることも、「given」（無意識に条件から与えられる）こともあるが、目的が決まれば、手段の決定は「a logical process of discrimination, analysis, choice」（弁別・分析・選択の論理の過程）だ、と書く。
  - pp.186–187：決定の行為は、個人の行動に比べて組織の行動に特有で、組織では決定の過程が経験的な観察により開かれている。
  - p.187：協働の努力には二つの決定がある。参加するかどうかの個人の決定と、組織の目的から見た非人格的な決定。
  - p.194：「The fine art of executive decision consists in not deciding questions that are not now pertinent, in not deciding prematurely, in not making decisions that cannot be made effective, and in not making decisions that others should make.」（40 語ほど）訳：経営者の決定の妙は、今関わりのない問いを決めないこと、早まって決めないこと、実行できない決定をしないこと、ほかの人がすべき決定をしないことにある。
- 要約：バーナードは、決定を、熟慮による行為の前の過程として置き、組織では決定が論理の過程として特に重く、組織の中に分散していると書いた。期待効用の流れとは別の、組織の中の決定の語の早い出どころ。
- 批判・のちの改め：—（調べ 1 の外。サイモンの受け継ぎは別の調べ）

### 規範・記述・処方の三つの区別（Bell, Raiffa & Tversky 1988）

- 書誌：Bell, D. E., Raiffa, H. & Tversky, A. (1988). Descriptive, normative, and prescriptive interactions in decision making. In D. E. Bell, H. Raiffa & A. Tversky (Eds.), *Decision Making: Descriptive, Normative, and Prescriptive Interactions* (pp.9–30). Cambridge University Press. DOI 10.1017/CBO9780511598951.003（Crossref と一致）
- 読んだ写し：Cambridge Core の章の頁 https://www.cambridge.org/core/books/abs/decision-making/descriptive-normative-and-prescriptive-interactions-in-decision-making/E9C320AB14791B3F586A583AA4989DD0 （出版社が出している章の冒頭の抜き書き）。
- 照合の状態：要旨照合済（出版社の頁の冒頭の段落。章の本文は未照合〔書籍〕）
- 鍵の文：「we shall augment the usual dichotomy that distinguishes between the normative and descriptive sides (the "ought" and the "is") of decision making, by adding a third component: the prescriptive side」 訳：意思決定の規範の側と記述の側（「べき」と「である」）を分けるふつうの二分に、第三の要素、処方の側を足す。理由は、現実の人が、深い認知の関心を損なわずに、よりよく選ぶにはどうすればよいか、という問いが、ふつうの規範・記述の枠に収まらないから、と書く。
- 要約：三人は、決定を、人が実際にどう決めるか（記述）、合理的な人がどう決めるべきか（規範）、合理的でありたいと願う現実の人をどう助けるか（処方）に分ける。三つめは自分たちが足すと明言している。規範と記述の二分は、三人自身が「ふつうの」と呼ぶとおりそれより前からあり、エルズバーグ 1961（p.4）も公理の規範の使い方と予測の使い方を分けている。最新 心理学事典（コトバンク）もこの三つで整理する。
- 批判・のちの改め：—

## 読めなかったもの・載せられないもの

| 文献 | 試した経路 | 状態 |
|---|---|---|
| Bernoulli 1954 英訳（*Econometrica* 22(1)） | Crossref・OpenAlex（closed）・Semantic Scholar・授業の頁 cw.fel.cvut.cz（Bot Check）・同じ URL の Wayback（無し）・ウェブの検索 | 未照合（有料）。ラテン語原典で照合済なので、英訳は無くても足りる |
| Allais 1953（*Econometrica* 21(4)） | Crossref・OpenAlex（closed）・Semantic Scholar・Econometric Society の頁（JSTOR へ）・Paris-Dauphine の allais.pdf（別の文書）・ウェブの検索 | 未照合（有料）。同じ年の JSFS の論文とノーベル講演で代えた |
| Savage 1954『The Foundations of Statistics』 | Internet Archive（貸し出しだけ）・ウェブの検索 | 未照合（書籍）。著者の 1961 年の講演（大学図書館の写し）で代えた |
| von Neumann & Morgenstern 1944/1953 | Princeton UP の見本の章（Wayback。Kuhn の序だけ）・Internet Archive（DLI の写しと貸し出し）・ウェブの検索 | 未照合（上げた人の分からない写しで読んだ。pp.17–18・26–28） |
| Barnard 1938 | Internet Archive（DLI の写しと貸し出し）・HathiTrust（記録なし） | 未照合（上げた人の分からない写しで読んだ。pp.185–188・194） |
| Ellsberg 1961 の QJE の誌面 | DTIC（403）・UC Irvine の授業の写しの Wayback（取れず）・RAND の頁（403） | 未照合（有料）。RAND の版 P-2173 で本文照合済 |
| Bell, Raiffa & Tversky 1988 の章の本文 | Crossref・OpenAlex（closed）・Semantic Scholar・Internet Archive（無し）・ザグレブ大学の授業の頁（接続できず） | 要旨照合済（出版社の頁の冒頭）。本文は未照合（書籍） |
| 経営学で「意思決定」の訳語が広まった経緯 | コトバンクの各事典の項 | 当たらなかった。日本大百科全書の「戦後とくに研究が進んだ」以上の経緯は、読んだ事典に無い |

手元に置いた原典（本体の `.cache/raw/decision-making/`。git の外）：`allais_1953_jsfs-psychologie-homme-rationnel.pdf`・`ellsberg_1961_rand-p2173.pdf`・`savage_1961_foundations-statistics-reconsidered_ucb.pdf`。ベルヌーイ・ラムジー・フォン・ノイマンとモルゲンシュテルン・バーナードは Internet Archive の OCR の文字で読み、手元には置いていない。
