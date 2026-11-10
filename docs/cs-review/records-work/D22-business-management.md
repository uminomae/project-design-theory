# 経営学：記録から外した作業の節

`cs/evidence/evidence-D22-business-management.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D22-business-management.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

試しの点検（2026-11-08）で見つけたもの：

- 件数：ja の表を数えると強い 4・部分 6・条件付き 1。ja 71 行は確定 4・有力 4・仮説 2・未解決 1（デザイン思考を二度数え、March が抜け、表では「部分的」の Scharmer を「仮説」に）。ja 221 行は 4・4・2。Colophon は 4・5・2。en は「中核」を五つ。pres は Tuckman だけ「高」で Weick は「中」。退避版は 11 件とも Accept。
- Adjourning の読み：ja「原典を超える解釈が必要」、en「自然に読める」、pres「高整合」。

この記録で新しく見つけたもの：

- 対応段階：エフェクチュエーションは ja が場・波・縁で渦と束は「射程外」、en は五つ全部（en 157 行）。Senge は ja が場・波・縁、en が「Wave to Bundle」。Tuckman は ja が場から渦、en が「Field to Bundle」。March は ja が場・波・渦・束、en が「Field and Bundle」。Weick は ja が五つ全部、en が「Wave to Boundary to Bundle」。
- 5 フェーズの出典：ja は 1995 年の書籍だけを挙げるが、本文で確かめられるのは 1996 年の論文（pp.213–215）。

### テンプレート由来の表示

「立ち位置明示」（3 行）、「方法論的開示」（28 行）、「Phase 5（論拠監査）」ほか（24 行）、「温度帯の分布」（71 行）、「安全弁」（73 行）、「結びの温度開示」（227 行）、「Colophon generator_model」（232 行）。数学と同じく、報告のテンプレートが原因で、個別でなくテンプレートで直す。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| Gourlay の「問題発見の欠落」 | 2026-02 の DR 59 行が名を挙げずに書き、退避版 39 行で Gourlay 2006 に結び付いた |
| 「センゲの弟子」 | 退避版 567 行の主張（[P]） |
| 「神経科学・精神分析・日本思想から構築された」 | 退避版 584 行と調べた跡（phase7） |
| エフェクチュエーションの「5原則」の名 | 退避版 460 行の主張（[P]）。2001 年の論文と照合していない |
| 「コンピテンシー・トラップ」を March 1991 に帰す | 退避版 294 行の主張（[P]） |
| スプリントを証拠とする | 退避版 413・426 行の着想（[M]）が本文で証拠になった |
| 「誤差」「反射的に処理」「保持」 | 調べた跡（phase7）が欠損・抱持の旧い定義と結び付けた語 |
| 版ごとの件数と対応段階の食い違い | ja・en・pres が同じ報告の訳でなく、別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E と退ける語：「cross-leveling は束の…定義と正確に一致します」（85 行）、「Norming は…縁の定義と正確に一致する記述です」（101 行）、「縁の三条件を全て満たす」（147・149・185 行）、「この二面がどう統合されるか」（213 行）。
- 型 D（管理の語彙）：「波の制度的増幅装置」「早すぎる渦への凝集を防ぐ安全弁」（133 行）、「遷移阻害メカニズムの体系」「分類枠」（173・179 行）。
- 型 B：「因果論理/エフェクチュエーションの対比は、束…と場…の対比と構造的に対応」（149 行）、「場は受動的か能動的か」（215 行）。
- 「30 領域の中でも最も」の言い切り：16・175・195・221 行。30 領域を数えた跡が無い。
- 段階が進むのを正しい向きとし、止まることを「阻害」とする書き方（173〜179 行）。統合に至らない形を、過程の外の失敗として置いている。この記録では、至らない形も一面の表の行として書いた。
- 型 J：ダッシュ（——）での挿入が 85・91・97・107・113 行ほか多い。

## 判断が要るもの

1. 本文で確かめられない論（Christensen・Senge と Bion・トヨタ生産方式とリーン・Taleb）を、この分野の論として残すか。予想：残し、照合の状態を書く（本文を読めない出典は、確かめたことまでしか書かない）。流れに沿わないものは外す。Taleb は対立や衝突の書き方を確かめられていないので、外す候補。代わりに、本文で読めた Gersick と Weick（1993）を独立した論として立てた。 → 答え（pjdhiro 2026-11-10「読めなかったものは、明確にして。10本に入れたくないのです。できれば」）：本文を読めなかった論は、分野の論の数に入れず、一面の表の外に分けます。四つは、表の外の「本文を読めなかった論」に分けました。
2. エフェクチュエーションを残す書き方。予想：理論の紹介として残し、「強い対応」「最も精密」と、二つの論理を両端に分ける対比を外す。2001 年の原典が二つは同時に重なると書いていることを書く。この理論と pjdhiro の見方との関わりは、本文に書かない。 → 答え（2026-11-10、書き方の規約 §7-3・§7-5）：予想のとおりにします。
3. 野中の「場（Ba）」と5段階の「場」。five-stages-guide は Ba を場の対応概念に挙げていた。答え（pjdhiro 2026-11-08）：野中の場とは違う。発想は量子の場で、素朴な感覚として、環境や状況や世界の安定したイメージを空間的な表現として選んだもの。時間は含まない（時間も入れるなら「時代」）。よって、Ba と5段階の場は語が同じだけで、系譜は別。この記録では対応の根拠に数えず、guide の対応概念の例からも外した。
4. Tuckman の storming（対立と二極化）を5段階のどこに当てるか。今の報告は波に当てている。5段階を「安定・変化・衝突・統合・新たな安定」と言い換える案では、衝突は縁に当たる。定義が決まるまで保留。 → 答え（pjdhiro 2026-11-09・11-10、調べ方の計画と規約「判断が要ること」1・5）：縁は衝突で、縁と渦は同時に起きます。Tuckman の storming は、縁に当たります。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| March, J. G. (1991). Exploration and exploitation in organizational learning. *Organization Science* 2(1), 71–87. DOI 10.1287/orsc.2.1.71 | https://arken.nmbu.no/~sigury/AOS_234/320_Pensum/March_91_Exploration%20and%20exploitation.pdf （授業用の写し。JSTOR の表紙つき） | 取得先を確かめた |
| Weick, K. E. (1993). The collapse of sensemaking in organizations: The Mann Gulch disaster. *Administrative Science Quarterly* 38(4), 628–652. DOI 10.2307/2393339 | https://alnap.org/documents/12477/The_Collapse_of_Sensemaking_in_Organizations_The_Mann_Gulch.pdf （再録版。誌面の頁番号なし） | 取得先を確かめた |
| Sarasvathy, S. D. (2001). Causation and effectuation. *Academy of Management Review* 26(2), 243–263. DOI 10.2307/259121 | https://effectuation.org/hubfs/Journal%20Articles/2016/06/amr01-inevitability-to-contingency-1.pdf （画像のみ） | 取得先を確かめた |
| Scharmer, C. O. (2007). *Addressing the Blind Spot of Our Time*（Theory U の要約版）. Presencing Institute | http://presencing.com/docs/publications/execsums/Theory_U_Exec_Summary.pdf （著者の研究所のサイト。Wayback の記録 2011-01-03）。講座の資料の置き場の写し https://csasupervisors.c1448228.myzen.co.uk/files/uk15/mod1/theory-u-exec-summary.pdf も読んだ | 取得先を確かめた |
| Christensen, C. M. & Bower, J. L. (1996). Customer power, strategic investment, and the failure of leading firms. *Strategic Management Journal* 17(3), 197–218 | 本文 OA なし | 書誌だけ |
| Christensen, C. M. & Rosenbloom, R. S. (1995). Explaining the attacker's advantage. *Research Policy* 24(2), 233–257. DOI 10.1016/0048-7333(93)00764-K | 本文 OA なし | 書誌だけ |
| Cohen, M. D., March, J. G. & Olsen, J. P. (1972). A garbage can model of organizational choice. *Administrative Science Quarterly* 17(1). DOI 10.2307/2392088 | 本文は探していない | 書誌だけ |

## 手順について分かったこと

- 台帳にある OA の写しと、新しく探した写しを、作業用の一時置き場に取ってきて読んだ（repo には入れていない）。本文で読めた論は 12 のうち 8。
- 写しには、誌面の頁番号が無いもの（Tuckman & Jensen 1977 の打ち直し、Weick 1993 の再録）と、文字の層が無いもの（Sarasvathy 2001）があった。頁を誌面の頁で書けるかは、写しごとに確かめる必要がある。精読ノート「Tuckman & Jensen 1977」は、頁番号の無い写しから誌面の頁（pp.420–425）を書いている。
- 精読ノート「Nonaka ら 1996」は、1996 年の論文の後半（pp.213–216 の 5 フェーズ・創造的カオス・集団思考）を扱っていない。試しの点検は、このノートを根拠に「5 フェーズは書籍でしか確かめられない」と書いたが、原典の本文を開くと、5 フェーズは論文の中にあった。ノートに無いことを、原典に無いことと読まない。
- 衝突と、統合に至らない形は、今の報告にも精読ノートにもほとんど書かれていなかった。原典を開くと、野中の breakdown、Gersick の解散、March の閉じ込め、Weick の解体のように、はっきり書かれていた。一面の表は、報告やノートからは作れず、原典を読み直す必要がある。
