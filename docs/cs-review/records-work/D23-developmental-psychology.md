# 発達心理学：記録から外した作業の節

`cs/evidence/evidence-D23-developmental-psychology.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D23-developmental-psychology.md` にあります。

## 公開報告の点検のまとめ

**版の間の食い違い**：

| 中身 | ja | en | pres | 退避版 |
|---|---|---|---|---|
| 「強い対応」の数 | 9（うち限定的射程 5）。Colophon も 9・部分 4・なし 2 | 「9 showed strong」・6 conditional（29 行） | 冒頭「強い対応 2件、条件付きの対応 1件」（23 行）。表は確定に近い 5・有力 5・条件つき 4・監査枠 1（45〜48 行） | Accept 9・CA 6（616〜619 行） |
| Fischer | 強い対応（限定的射程） | 記述なし | 確定に近い | Accept |
| DIDS | 部分的対応 | 記述なし | 有力 | CA |
| Maslow | 対応なし | 弱いと書く（31 行） | 条件つき | CA（棄却候補） |

pres の冒頭の「2件・1件」は、同じ版の表とも合いません。判定は「未判定（版の食い違い）」です。英語版は Colophon が「codex:gpt-5」で、日本語版（claude-opus-4-6）と作り手が違います。英語版とプレゼン版は訳ではなく、別々に書かれた文章です。

**テンプレート由来の表示**：ja 3〜6 行「立ち位置明示」、ja 22 行の Phase 5〜7 の記号、ja 28〜31 行の「方法論的開示」（「著者（pjdhiro）自身の精読による検証が完了していない」と書き、著者を pjdhiro としている）、ja 73 行「温度帯」、ja 77〜79 行「安全弁」、ja 217〜222 行「結びの温度開示」、ja 224〜234 行 Colophon。en 37 行は「how AI read」と書く三本の一つ。どれもテンプレートで一度に直すものです（README 段 1）。

**誤りの出どころ**：

- 調べた跡の phase6・phase7 が [SPECULATIVE] や提案として書いたものが、報告では確かめられた知見に格上げされています。「束の二重性」は phase6 303 行で [SPECULATIVE] でしたが、ja 213 行で「明らかになりました」になっています。「生成パターンとして読む方が精度が高いことが示されました」（ja 179・213 行）は phase7 の A3、「縁の定義を…精緻化する根拠が複数の理論から確認されました」（ja 213 行）は phase7 の A2 です。
- ピアジェの対比（「不均衡を問いとして保持する」）は、phase5 67 行・phase6 81 行・88 行・phase7 82 行の「欠損保持」「欠損駆動思考」から来ています。
- ロシャの「フラクタル注記」は phase6 36 行、トマセロの「まだ誰のものでもない意味」は phase7 の A2 から来ています。
- 「Anchor」「Scoped」「High-risk」の格付け（phase5）が、報告の「強い対応」「限定的射程」と pres の「確定に近い」「最も一貫して」になっています。
- Kegan の「成人の多くは秩序3〜4」は、退避版の claims の「（Kegan 1994）」から来ていて、報告では出典が落ちています。

**文体**：

- 言い過ぎ：「構造の機能的等価性が高い対応」（ja 91 行）、「最も一貫して支える補助線」（pres 64 行）、「後半三段階の骨格を最も明確に示す理論の一つ」（pres 57 行）、「確定的に近いのは」（pres 100 行）。
- 型 B（二元で切る）：「均衡化志向と5段階の動的理解」（ja 147 行）は、原典の取り違えの上に二つの態度を対で切っています。
- 型 E（断定）：「縁の核心は…として浮かび上がります」（ja 175 行）、「束は…二重性を持つことが浮かび上がります」（ja 187 行）。
- 善悪の判断：報告は安定した愛着の型を束に、不安定な型を外に置いて読んでいます（ja 123 行）。成人の段階では en 85 行が「higher-order return」と書きます。原典（Cook-Greuter p.3・p.87）は後の段階を良いものとしないと断っています。

## 判断が要るもの

1. Kegan の 1982 年の本は、Internet Archive に利用者が上げた写しで読みました。照合の状態は未照合のままにしています。著者の論文版（1980）は開ける写しが見つかりませんでした。予想：README の写しの行のとおり、未照合のまま残し、読んだ頁を書く（stance 2-7、調べ方の規約 §5-8）。 → 答え（2026-11-10、調べ方の計画と規約「規約で決めたこと」の取れなかった PDF の行）：保存は Issue #73 の表に回し、pjdhiro があとでまとめてブラウザで保存します。保存されるまでは今の状態のままです。Kegan は、本文を読めなかった論として表の外に分けました（2026-11-10）。
2. Stern と Tronick を一つの論にまとめました。Tronick は Stern の同期の見方を名指しで退けていて、同じ論の確かめ先にはならないためです。予想：Stern は未照合（書籍）で残し、Tronick を別の論として立てるかは、段 3 で至らない形（修復の失敗）を並べるときに決める（stance 2-2）。 → 答え（2026-11-10）：Tronick を別の論（7）として立て、Stern は本文を読めなかった論として表の外に分けました。
3. 衝突が芯にない論（Tomasello・Fischer・Vygotsky）をどう並べるか。予想：外さずに「原典から対立・衝突を読むのは難しい」と書いて並べる（README の農学・生態学の行の境界の理論と同じ扱い）。 → 答え（2026-11-10、調べ方の計画と規約の中心の問い）：予想のとおり、外さずに「原典から対立・衝突・統合を読むのは難しい」と書いて並べます。対応が無いと出たら、そのまま保ちます。
4. 本文に当たれなかった Erikson・Wilber・Kohlberg を、表の行に置くか。答え（pjdhiro 2026-11-09）：本文に当たれないものは引用に使わないのが原則。表の外のままにする。ウィルバーは pjdhiro が本を読んで感想を持っているので、あとで pjdhiro の感想を聞く対話に回す。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Smith, L. B. & Thelen, E. (2003). Development as a dynamic system. *Trends in Cognitive Sciences* 7(8), 343–348. DOI 10.1016/S1364-6613(03)00156-6 | https://web.archive.org/web/20160108223526/http://www.indiana.edu/~cogdev/labwork/dynamicsystem.pdf （著者の研究室の写し。保存名の案手元の PDF） | 手元に保存した |
| Thelen, E., Schöner, G., Scheier, C. & Smith, L. B. (2001). The dynamics of embodiment: A field theory of infant perseverative reaching. *Behavioral and Brain Sciences* 24(1), 1–34. DOI 10.1017/S0140525X01003910 | https://web.archive.org/web/20151222143714/http://www.indiana.edu/~cogdev/labwork/DynamicsEmbodiment.pdf （同じ研究室。論評と応答を含む。保存名の案手元の PDF） | 手元に保存した |
| Vygotsky, L. S. (1978). Interaction between learning and development. In M. Cole ら (Eds.), *Mind in Society*, ch.6. Harvard University Press（編集した抄録） | https://www.oerafrica.org/system/files/2024-01/l-l-readersection-one-reading4.pdf （OER Africa の読本の Reading 4。保存名の案手元の PDF） | 手元に保存した（抄録。頁は読本の頁） |
| Tomasello, M., Carpenter, M., Call, J., Behne, T. & Moll, H. (2005). Understanding and sharing intentions: The origins of cultural cognition. *Behavioral and Brain Sciences* 28(5), 675–691. DOI 10.1017/S0140525X05000129 | https://web.archive.org/web/20161213115758/http://www.eva.mpg.de/documents/Cambridge/Tomasello_Understanding_BehBrainSci_2005_1555292.pdf （研究所のサイトの写し。論評を含む。保存名の案手元の PDF） | 手元に保存した |
| Tomasello, M. & Carpenter, M. (2007). Shared intentionality. *Developmental Science* 10(1), 121–125. DOI 10.1111/j.1467-7687.2007.00573.x | https://web.archive.org/web/20180219135220/http://www.eva.mpg.de:80/documents/Wiley-Blackwell/Tomasello_Shared_DevScience_2007_1554748.pdf （保存名の案手元の PDF） | 手元に保存した |
| Bowlby, J. (1958). The nature of the child's tie to his mother. *International Journal of Psycho-Analysis* 39, 350–373 | https://psychology.psy.sunysb.edu/attachment/online/Bowlby_1958_childs%20tie.pdf （Stony Brook 大学。組み直しの写し。保存名の案手元の PDF） | 手元に保存した（写しの頁） |
| Ainsworth, M. D. S. & Bowlby, J. (1991). An ethological approach to personality development. *American Psychologist* 46(4), 333–341. DOI 10.1037/0003-066X.46.4.333 | https://psychology.psy.sunysb.edu/attachment/online/ainsworth_bowlby_1991.pdf （保存名の案手元の PDF） | 手元に保存した |
| Bretherton, I. (1992). The origins of attachment theory: John Bowlby and Mary Ainsworth. *Developmental Psychology* 28(5), 759–775. DOI 10.1037/0012-1649.28.5.759 | https://psychology.psy.sunysb.edu/attachment/online/inge_origins.pdf （組み直しの写し。保存名の案手元の PDF） | 手元に保存した（二次資料。写しの頁） |
| Waters, E., Merrick, S., Treboux, D., Crowell, J. & Albersheim, L. (2000). Attachment security in infancy and early adulthood: A twenty-year longitudinal study. *Child Development* 71(3), 684–689. DOI 10.1111/1467-8624.00176 | https://psychology.psy.sunysb.edu/attachment/online/ew_stability.pdf （保存名の案手元の PDF） | 手元に保存した（写しの頁） |
| Cook-Greuter, S. R. (2013). *Nine Levels of Increasing Embrace in Ego Development*. Prepublication version, revised Dec. 2013 | https://web.archive.org/web/20140928135208/http://www.cook-greuter.com/Cook-Greuter%209%20levels%20paper%20new%201.1%2714%2097p%5B1%5D.pdf （著者のサイトの写し。保存名の案手元の PDF） | 手元に保存した（配布しない） |
| Tronick, E. & Beeghly, M. (2011). Infants' meaning-making and the development of mental health problems. *American Psychologist* 66(2), 107–119. DOI 10.1037/a0021631 | PMC3135310（https://pmc.ncbi.nlm.nih.gov/articles/PMC3135310/ 。保存名の案手元のファイル） | 手元に保存した（PMC。節で控える） |
| Piaget, J. (1964). Development and learning. *Journal of Research in Science Teaching* 2(3), 176–186. DOI 10.1002/tea.3660020306（2003 年の再録 Vol. 40 Suppl., S8–S18） | https://people.wou.edu/~girodm/611/Piaget.pdf （授業用の写し。再録の付録の 50 頁。文字の層なし。保存名の案手元の PDF） | 手元に保存した（頁の画像） |
| Fischer, K. W. (1980). A theory of cognitive development: The control and construction of hierarchies of skills. *Psychological Review* 87(6), 477–531. DOI 10.1037/0033-295X.87.6.477 | https://web.archive.org/web/20060907130313/http://gseweb.harvard.edu/%7Eddl/articlesCopy/FischerTheoryCognDev1980W.pdf （研究室の写し。保存名の案手元の PDF） | 手元に保存した（写しの頁） |
| Fischer, K. W. & Bidell, T. R. (2006). Dynamic development of action and thought. *Handbook of Child Psychology* (6th ed.) Vol. 1, 313–399. DOI 10.1002/9780470147658.chpsy0107 | https://web.archive.org/web/20060907132626/http://gseweb.harvard.edu/%7Eddl/articlesCopy/FischerBidellProofsCorrected.0706.pdf （研究室の写し。校正刷り。保存名の案手元の PDF） | 手元に保存した |
| Maslow, A. H. (1943). A theory of human motivation. *Psychological Review* 50(4), 370–396. DOI 10.1037/h0054346 | http://psychclassics.yorku.ca/Maslow/motivation.htm （York University。HTML。誌面の頁の印あり。保存名の案手元のファイル） | 手元に保存した（HTML） |
| Wood, D., Bruner, J. S. & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry* 17(2), 89–100. DOI 10.1111/j.1469-7610.1976.tb00381.x | https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/j.1469-7610.1976.tb00381.x （Cloudflare の確認画面） | 自動では取れない |

取ってきたファイルは、司令塔が手元の原典の置き場に置きました（2026-11-09）。既にある行の直し（台帳に書き足した）：台帳の「Rochat 2003」の行の取得先を、著者の研究室の写し（上の Rochat の節の Wayback の URL。journalpsyche.org の写しと MD5 が一致）に替え、「手元に保存した」にする。台帳の「van Geert 2019」の行は、Karger の PDF が 403 なので、PMC7050700 の記事の頁を取得先に足す。台帳の「中間玲子ほか 2014」の行の年を「2015（早期公開 2014）」にする。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 研究室のサイトの写しは、今の URL が消えていても、Wayback Machine の CDX で研究室のドメインの PDF の一覧を引くと見つかりました（Indiana の cogdev・Harvard の ddl・Emory の Rochat・MPI EVA）。APA と Elsevier の壁の向こうの論文の多くは、この経路で読めました。
- 台帳の取得先が個人のサイト（journalpsyche.org）だったものは、著者の研究室の写しと MD5 で比べ、同じファイルと確かめられました（進化生物学の行と同じ手順）。
- 授業の頁の Piaget 1964 は、文字の層の無い頁の画像で、読み取りの道具が無いので、頁の画像を一枚ずつ見て読みました。
- 調べた跡の語が、言葉を替えて報告に入っていました（「欠損保持」→「不均衡を問いとして保持する」）。欠損・抱持の語を grep するだけでは見つからず、調べた跡の対比の語を報告と突き合わせて見つかりました。
- 精読ノートの「Rochat 2003」は pp.717–725 だけを読んだと書き、報告の「アトラクタ」の帰属（p.728）を確かめていませんでした。精読ノートに無いことを原典に無いことと読まず、残りの頁を読むと確かめられました。
