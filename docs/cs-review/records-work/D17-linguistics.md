# 言語学：記録から外した作業の節

`cs/evidence/evidence-D17-linguistics.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D17-linguistics.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | ja | en | pres | 退避版 |
|---|---|---|---|---|
| 件数 | 強い 3・部分 5・条件付き 2（84 行・Colophon 267 行） | Strong 3・Partial, but strong 4・Partial 1・Conditional 2（51〜62 行。49 行は「eight showed strong or partial」） | 強い 6・部分 2・条件付き 2（23 行） | Accept 8・CA 2 |
| 文法化・音変化・最適性理論 | 部分 | Partial, but strong | 強い（場→波→縁→渦→束） | Accept |
| 語用論 | 部分 | Partial, but strong | 部分（波→縁→渦） | Accept |
| 臨界期の提唱者 | Lenneberg, Johnson & Newport | ― | Lenneberg (1967) | Lenneberg (1967) |
| 反復学習の提唱者 | Kirby et al. | ― | Kirby et al. (2014) | ― |
| ニカラグア手話の時間表現 | Kocaba et al. (2016) | ― | Kocab et al. (2016) | Kocaba et al. (2016) |

同じ報告の訳でなく、版ごとに別に生成されたことが、件数と段の食い違いの出どころと見られます（社会学・経営学・人類学・民族学と同じ）。pres は 10 のうち 8 に「場→波→縁→渦→束」と書いていて、ja の対応段階の欄と合いません。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 234 行「言語学の10の理論は全て『構造の生成』を記述しており、『構造の解体』（言語の衰退・消滅）を扱うものがありません」、ja 42 行「言語の衰退・消滅のプロセスについても、現在の調査範囲には含まれていません」 | 取り違え | 高 | 本文で読めた原典は、至らない形と消える形を書いている。窓を過ぎた言語の損傷（Lenneberg p.639）、退化した言語（Kirby ら 2015 pp.89–90・2008 の実験 1）、広がりで構造が失われる（Labov 2007 の要旨）、取り残される語（Wang 1969 の要旨）、限られたまま残るピジン（Bickerton p.11）、消えた手話（Sandler ら 2005）、失語で区別が失われる順（Jakobson & Halle pp.26–27）。報告は、読んでいない原典について「無い」と書き、射程の外に置いた。出どころは phase7 125〜127 行の Blind-1 |
| ja 200〜208 行・252 行「波→縁の移行を駆動する二重メカニズム」の「発見」 | 付け足し | 高 | 原典に無い構成。phase6 209 行の H1 は [SPECULATIVE] と書いていた。phase7 7〜17 行・141〜143 行で「Pattern-1」になり、報告では結論の「発見」になった。反復学習の原典の兼ね合いは、圧縮と表現力（Kirby ら 2015）で、蓄積と制約の二つではない |
| ja 84 行・212 行・252 行「10の理論が10種類の異なる縁の型を提示」「他の単一領域では見られない多様性」「最も明確に示す領域」 | 付け足し | 中 | 型の名（制度型・伝播型・界面型など）は原典に無い。phase6 203 行・phase7 60 行で LLM が付けた。30 領域を比べた跡は無い |
| ja 250 行「言語学は、5段階モデルとの構造的対応が高い領域です」、pres 107 行「全体として強い領域であると確認されました」 | 言い過ぎ | 中 | 11 の論のうち、原典で衝突や兼ね合いが確かめられたのは 8 つほどで、「全5段階」とした反復学習も、原典は二つの実験に分けて至らない形を書いている |
| ja 238 行「完全に意図なき極（ニカラグア手話、反復的学習モデル）」 | 未判定 | 低 | Kirby ら 2008 は、学ぶ人の意図した設計は無いと書く（Discussion）。実験 2 の filter は実験する人の手。ニカラグア手話は要旨まで |
| ja 53〜63 行 5段階の定義（縁「対立する要素が共存し、どちらにも収束しない緊張状態」） | 未判定 | 中 | 5段階の定義の置き場ごとの食い違い（README「判断が要ること」1）。報告は縁の定義に「対立」を入れながら、当てはめでは忠実性と有標性の「競合」を波に（ja 174 行）、縁を「ランキングの確定」「機能分化」として読んでいる（薬学〜法学・政治学と同じ） |

### テンプレート由来の表示

「立ち位置明示」（3 行）、「Phase 1-2」「Phase 3-4」「Phase 5（論拠監査）」「Phase 6」「Phase 7」（30・38 行）、「方法論的開示（S60）」（44 行）、「温度帯の分布」（84 行）、「安全弁」（86 行）、「結びの温度開示」「温度帯」（256〜259 行）、「Colophon」「generator_model」（261〜271 行）。46〜49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所があります」と、著者を pjdhiro にしています（書き方の規約 §1-1・§1-8）。英語版は AI に触れる 3 本の一つ（README 段 1）。報告のテンプレートが原因で、個別でなくテンプレートで直します。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| 「構造の解体」を扱う論が無い | phase7 125〜127 行の Blind-1 → 報告 §7 |
| 波→縁の二重メカニズム | phase6 209〜227 行の H1 [SPECULATIVE] → phase7 7〜17 行の Pattern-1・141〜143 行の PT-1 → 報告 §6・§8 で「発見」 |
| 10 種類の縁の型 | phase6 203 行 → phase7 60 行・159 行 |
| Kocaba（Kocab の綴り違い） | DR 77・112 行 → 退避版 170・180 行 → ja 96 行 |
| 反復学習の実験 1 と 2 を一つにする | 退避版の要約（台帳の「Kirby ら 2008」の行の精読ノートが 2026-04 に実験を分けて読んだあとも、報告は 2026-03 のまま） |
| Bickerton を「大きく批判」とし、提唱者を Thomason & Kaufman にする | 退避版 98〜120 行（「Bickerton(1981)の生得主義的解釈は後退し、社会歴史的条件の重視が主流」） |
| 版ごとの件数と段の食い違い | ja・en・pres が別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 H（原典に無い体系）：「言語学の10の理論は、10種類の異なる『縁』の型を提示しています」（212 行）、「大きく『内生的』と『外生的』に分類できます」（214 行）。型の名は原典に無い。
- 型 E（急いで解く・言い切る）と「最も」：「言語学で最も重要な横断的パターンは」（202 行）、「言語学がこの調査に対して最も豊かに貢献する領域の一つ」（212 行）、「最も明確に示す領域」（252 行）、「5段階モデルの記述が最も弱い部分への具体的な貢献」（252 行）。30 領域を数えた跡は無い。
- 型 C（範囲を狭める）：「言語の衰退・消滅のプロセスについても、現在の調査範囲には含まれていません」（42 行）。至らない形を射程の外に置いている。
- 型 J：ダッシュの挿入（206 行「世代間伝達のボトルネック——全入力を伝達できないという制約——が」）。
- 至らない形を外に置く書き方：反復学習の実験 1、臨界期の窓を過ぎた形、ピジンのまま残る大人の世代を、報告は書いていない。読めた原典では、どれも論の中心に書かれている。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- Haspelmath（1999）の Zenodo の写しは、作者の欄とライセンスの表示が著者を指しますが、上げたアカウントが著者本人かを確かめられませんでした。複雑系科学の決め（Zenodo の表示は権利の確かめにならない）に従い、未照合とし、読んだ頁を書きました。著者のサイト（MPI EVA の頁）に同じ PDF があれば、本文照合済に上げられます。
- 弁別素性（Jakobson & Halle 1956）は、似た論文の行ですが、本文に当たれて、壊れる順を同じ法則の中に書いているので、論として足しました（README「調査の手順」1）。Lupyan & Dale（2010）は、論として足さず、反復学習の節で関わる論として挙げました。
- クレオール形成の提唱者を Thomason & Kaufman とするのは、同書を読めないので「未判定（帰属）」としました。stance 2-1 から、確かめられない帰属は外さずに状態を書く、と予想しました。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Weinreich, U., Labov, W. & Herzog, M. I. (1968). Empirical foundations for a theory of language change. In Lehmann & Malkiel (Eds.), *Directions for Historical Linguistics* (pp.97–195). University of Texas Press | https://lrc.la.utexas.edu/books/directions/5-weinreich （UT Austin の Linguistics Research Center の公開の全文。HTML。保存名の案手元のファイル） | 取得先を確かめた（HTML。頁は節） |
| Prince, A. & Smolensky, P. (1993/2002). *Optimality Theory: Constraint Interaction in Generative Grammar*. ROA-537（ROA 版 8/2002。RuCCS-TR-2）。書籍は Blackwell 2004（DOI 10.1002/9780470759400） | https://roa.rutgers.edu/files/537-0802/537-0802-PRINCE-0-0.PDF （著者版。保存名の案手元の PDF） | 手元に保存した（手元に置くなら） |
| Kirby, S., Tamariz, M., Cornish, H. & Smith, K. (2015). Compression and communication in the cultural evolution of linguistic structure. *Cognition* 141, 87–102. DOI 10.1016/j.cognition.2015.03.016 | https://dspace.stir.ac.uk/bitstream/1893/22564/1/Kirby%20et%20al_Cognition_2015.pdf （スターリング大学。CC BY 4.0。保存名の案手元の PDF） | 手元に保存した（手元に置くなら） |
| Sandler, W., Meir, I., Padden, C. & Aronoff, M. (2005). The emergence of grammar: Systematic structure in a new language. *PNAS* 102(7), 2661–2665. DOI 10.1073/pnas.0405448102 | https://pmc.ncbi.nlm.nih.gov/articles/PMC548320/ （HTML。保存名の案手元のファイル） | 取得先を確かめた |
| Bybee, J. (2006). From usage to grammar: The mind's response to repetition. *Language* 82(4), 711–733. DOI 10.1353/lan.2006.0186 | https://ling.unm.edu/assets/documents/bybee2006fromusage.pdf （ニューメキシコ大学の言語学科。保存名の案手元の PDF） | 手元に保存した（手元に置くなら） |
| Haspelmath, M. (1999). Why is grammaticalization irreversible? *Linguistics* 37(6), 1043–1068. DOI 10.1515/ling.37.6.1043 | https://zenodo.org/records/571365 （上げた人と権利は未確認。CC BY 4.0 の表示。保存名の案手元の PDF） | 取得先を確かめた（上げた人が未確認の写し） |
| Boroditsky, L. (2001). Does language shape thought?: Mandarin and English speakers' conceptions of time. *Cognitive Psychology* 43(1), 1–22. DOI 10.1006/cogp.2001.0748 | https://lera.ucsd.edu/papers/mandarin.pdf （著者のサイト。保存名の案手元の PDF） | 手元に保存した（手元に置くなら） |
| Winawer, J., Witthoft, N., Frank, M. C., Wu, L., Wade, A. R. & Boroditsky, L. (2007). Russian blues reveal effects of language on color discrimination. *PNAS* 104(19), 7780–7785. DOI 10.1073/pnas.0701644104 | https://pmc.ncbi.nlm.nih.gov/articles/PMC1876524/ （HTML。保存名の案手元のファイル） | 取得先を確かめた |
| January, D. & Kako, E. (2007). Re-evaluating evidence for linguistic relativity: Reply to Boroditsky (2001). *Cognition* 104(2), 417–426. DOI 10.1016/j.cognition.2006.07.008 | Elsevier（有料） | 書誌だけ |
| Chen, J.-Y. (2007). Do Chinese and English speakers think about time differently? Failure of replicating Boroditsky (2001). *Cognition* 104(2), 427–436. DOI 10.1016/j.cognition.2006.09.012 | Elsevier（有料） | 書誌だけ |
| Labov, W. (2007). Transmission and diffusion. *Language* 83(2), 344–387. DOI 10.1353/lan.2007.0082 | https://www.ling.upenn.edu/~wlabov/Papers/TD.html （著者の頁。自動取得に 403） | 自動では取れない |
| Wang, W. S.-Y. (1969). Competing changes as a cause of residue. *Language* 45(1), 9–25. DOI 10.2307/411748 | JSTOR（有料） | 書誌だけ（要旨は OpenAlex） |
| Labov, W. (1981). Resolving the Neogrammarian controversy. *Language* 57(2), 267–308. DOI 10.2307/413692 | JSTOR（有料） | 書誌だけ（要旨は OpenAlex） |
| Newport, E. L. (1990). Maturational constraints on language learning. *Cognitive Science* 14(1), 11–28. DOI 10.1207/s15516709cog1401_2 | Wiley（OpenAlex は pdfdirect を OA と挙げる。試していない） | 書誌だけ（要旨は OpenAlex） |
| DeGraff, M. (2003). Against Creole exceptionalism. *Language* 79(2), 391–410. DOI 10.1353/lan.2003.0114 | Project MUSE（有料） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Bickerton 1981」の行：手元の PDF は Language Science Press の 2016 年の再刊（Classics in Linguistics 3、CC BY 4.0、DOI 10.17169/langsci.b91.109）。初版の Karoma 1981 ではない。
- 台帳の「Lenneberg 1969」の行：手元の PDF は JSTOR の表紙つきの写し。台帳の ehu.eus の URL は今回 SSL の誤りで取れず、同じファイルかは比べていない。
- 台帳の「Johnson & Newport 1989」の行：台帳の UT Dallas の URL は、別の案内の頁（atlas.utdallas.edu）に飛ばされる。写しは無くなった見込み。
- 台帳の「Beckner ら 2017」の行：書誌に頁 160–176 を足す。OUP の PDF は確認画面を返す。ORA の写し（https://ora.ox.ac.uk/objects/uuid:48356b4a-41c9-43c9-95b2-d231b197f3d5 ）で読めた。
- 台帳の「Kirby ら 2008」の行：手元に保存した だが local_file が空。PNAS の PDF は確認画面を返す。PMC2504810 の HTML で読めた（保存名の案手元のファイル）。
- 台帳の「Raviv ら 2020」の行：手元に保存した だが local_file が空。グラスゴー大学の機関リポジトリ（https://eprints.gla.ac.uk/281184/1/281184.pdf ）の出版社の版で読めた（保存名の案手元の PDF）。
- 台帳の「Senghas ら 2004」の行：MPG PuRe は自動取得に確認画面を返す。下の表。
- 台帳の「Lupyan & Dale 2010」の行：PLOS の PDF を取れた（保存名の案手元の PDF）。取得先を確かめた の行を「手元に保存した」に上げられる。
- 台帳の「Jakobson & Halle 1956」の行：MIT の Halle の頁の PDF を取れ、本文を読めた（保存名の案手元の PDF）。取得先を確かめた の行を「手元に保存した」に上げられる。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 報告が「OA 版がなく」と書いた論のうち二つ（音変化の Weinreich, Labov & Herzog 1968、最適性理論の ROA 版）は、頼む文の当たりの場所で全文が公開されていました。書籍だけの論も、同じ論の核になる章や著者版を探すと本文に当たれました（工学・情報科学・経済学・人類学・民族学と同じ）。
- 出版社と PMC の PDF（PNAS・OUP・Wiley・MPG PuRe）は確認画面を返しましたが、PMC の記事の頁（HTML）と機関リポジトリ（ORA・グラスゴー・スターリング）の写しで、四つの論文を読めました。OpenAlex の挙げた写しは、どれも 1 頁目の書誌が狙った論文と合いました。
- 2026-11-09 は Internet Archive が「Temporarily Offline」で、Wayback と古典の走査（Meillet）を使えませんでした。確認画面と分けて書きました。追記（2026-11-09）：同じ日のあとで司令塔が取り直し、Johnson & Newport (1989) と Meillet (1912) を読んで、上の節に書き足しました。
- 読めた原典は、至らない形を論の中心に書いていました（退化した言語・窓を過ぎた損傷・限られたまま残るピジン・取り残される語・失語の後退）。報告は §7 で「解体を扱う論が無い」と書いていて、原典を読まずに無いと書いた例でした。
- 精読ノートと台帳について：精読ノート「Raviv 2020」 100〜107 行は、ネットワークの形を「縁の実体」とし、全 5 段階を「強」としますが、原典の要旨（同じノートの 28 行に引く）は、ネットワークの形の効果は出なかったと書きます。出典を主張と逆の向きに当てています（中）。精読ノート「Lenneberg 1967」は、ファイル名が 1967 で、中身は 1969 年の論文です（低）。wiki の頁「Jakobson 1956」は、ファイル名の題の部分が共著者の名（halle-m）になっています（低）。精読ノートと wiki の DOI（9 本）は、Crossref の書誌と合っていました。
