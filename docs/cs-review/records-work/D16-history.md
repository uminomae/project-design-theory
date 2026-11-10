# 歴史学：記録から外した作業の節

`cs/evidence/evidence-D16-history.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D16-history.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | 日本語版 | 英語版 | プレゼン版 | 退避版 |
|---|---|---|---|---|
| 判定の数 | 強い 1・部分的 8・条件付き 1（84 行・243 行） | 強い 9・条件付き 1（70 行・180 行） | 強い 4・部分的 5・条件付き 1（23 行） | 全体の強度「中〜高」（393 行） |
| 「強い」の論 | ヒューズ | ホワイトの他の 9 つ | 経路依存・イブン・ハルドゥーン・ヒューズ・ターチン（109 行） | ― |
| ブローデルの年 | 1949 | 1949 | 1949 | 1949（36・41 行） |
| ヴィーコの年 | 1725/1744（152 行）・1725（表） | 1725 | 1725 | ― |
| ターチンの年 | 2003 | 2003, 2006 | 2003 | 周期は 2009（355 行） |
| 経路依存の提唱者 | ピアソン・マホニー | ピアソン・マホニー・ノース | ピアソン・マホニー・ノース | ピアソン・マホニー |

判定の数は未判定（版の食い違い）。英語版とプレゼン版は訳ではなく別々に書かれていて、どの版も原典の照合から数を出した跡はありません。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 180〜182 行「歴史学が10の理論で10タイプの縁を記述」「型のカタログ」 | 付け足し | 中 | 型の名（層間型・応答型…）は原典に無い。出どころは phase5 24 行・phase7 5〜7 行・退避版 410 行 |
| ja 186 行「『成功→自壊』メカニズムの独立的収束」 | 言い過ぎ | 中 | ターチンは自らイブン・ハルドゥーンを引いている（2009, p.195）ので独立ではない。ヴィーコの回帰は三つの救いの一つ（§1106）。出どころは phase7 15〜19 行 |
| ja 188〜190 行「場の消極性」「場に積極的な内容を与えるのはコゼレックのみ」 | 付け足し | 中 | 出どころは phase7 25 行。コゼレックは未照合 |
| ja 226〜228 行「最も堅固な対応はヒューズ」 | 言い過ぎ | 高 | ヒューズは未照合 |
| ja 172・220〜222 行「存在の生成」と「理解の生成」の境界 | 未判定 | 低 | 5段階の射程の問いで、原典の照合からは答えが出ない |
| 報告全体 衝突と至らない形 | 抜け | 高 | 本文に当たれた 7 つの論は、どれも衝突と至らない形を書いていた（一面の表）。報告はそれを関係の形成（縁）の型として読んでいる |

### テンプレート由来の表示

ja 3〜6 行「立ち位置明示」、44〜49 行「方法論的開示（S60）」、86〜88 行「安全弁」、84 行「温度帯の分布」、234〜235 行「結びの温度開示」、237〜247 行「Colophon」。38 行の「Phase 5（論拠監査）…Phase 7（横断統合）」も LLM の記号です。49 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所」と書き、著者を pjdhiro としていて、文責の書き方（writing §1-1・§1-8）と合いません。30 領域に共通の見込みで、テンプレートで直します（README 段 1）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| ブローデルの三層を『地中海』（1949）に帰す | 退避版 36・41 行（三部構成の対応） |
| 「サンクコスト効果」 | 退避版 107 行 |
| 四つのメカニズムをピアソンが「特定」 | 退避版 106〜107 行（Pierson, 2000; Mahoney, 2000 の名で書く） |
| 縁の 10 タイプ | phase5 24 行 → phase7 5〜7 行 → 退避版 410 行 |
| 成功→自壊の独立的収束 | phase7 15〜19 行 |
| 場の消極性 | phase7 25 行 |
| 破壊的渦 | phase5 118〜120・151 行（[UNCERTAIN]）→ phase7 69・122 行 |
| ヒューズを「最も明瞭」 | phase5 の判定（強い対応）→ 報告 |
| 版ごとの件数 | ja・en・pres が別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（「最も」の言い切り）：「本調査において5段階モデルとの対応が最も明瞭な理論」（94 行）、「調査全体で最も堅固な対応の一つ」（100 行）、「5段階の中で最も精密なものの一つ」（124 行）、「縁の概念を社会科学的に最も精緻に定式化した事例の一つ」（132 行）、「本調査の最大の発見」（180 行）。比べた跡は無い。
- 型 H（原典に無い体系）：「層間型（ブローデル）、応答型（トインビー）、分岐型（経路依存）…閾値型（ターチン）」（180 行）。
- 型 B（二つに切って置く）：「モメンタムは『動いている』、ロックインは『固まっている』」（210 行）。「『存在の創造』…『理解の生成』は射程外」（222 行）。
- 型 C（射程を狭める）：ホワイトとの対応の弱さを「対応の『失敗』ではなく、5段階モデルの射程を明確にする逆照射」とし、射程外を引く（172 行）。
- 型 F：「事実として」「読み取りとして」「解釈として」の札を全節に付ける形は、規約への説明を読者に向ける形に近い。
- 衝突を過程の外に置く書き方：ターチンの崩壊を「渦の標準的定義と逆方向」とし、束の解体として外に出そうとする（162〜164 行・214 行）。トインビーの強すぎる挑戦も、条件の一つとしてだけ書き、流産と停止の行き先を落としている（144〜148 行）。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- インド政府の図書館（考古局の中央考古図書館）の本を走査した Digital Library of India の写し（トインビー第 1 巻、Internet Archive の in.gov.ignca.2921）は、出所（どの図書館の本の走査か）が書けるので、大学の授業の頁や NTRS・ADS の走査と同じ扱いにし、性格と「権利は未確認」を添えて本文照合済にしました（README「規約で決めたこと」2026-11-09 の天文学・宇宙物理学・歴史学の行）。1934 年の本の権利は切れていないかもしれません。手元の PDF と Internet Archive の資料の MD5 が一致することは、司令塔も確かめました。
- 足した論（マルクスの 1859 年の序言）は、本文に当たれて衝突をはっきり書いているので、分野の論として残しました（README「調査の手順」1・3）。哲学（哲学）のヘーゲルと並べるときに、同じ系譜を二つに数えないよう段 3 で見ます。

- 個人が上げた写しで本文を読んだ論（ウォーラーステインの 2011 年版）は、未照合とし、読んだ頁を書きました（README「規約で決めたこと」）。
- 授業の頁と著者のサイトの写し（ピアソン・マホニー・ターチン 2009・2012）は、性格を添えて本文照合済にしました。著者のサイトは移っていて、Wayback の記録で読みました。
- 翻刻（de Slane 訳と Vico の原文の wikisource）は、翻刻であることと校正の段を添えて本文照合済にしました（README 2026-11-09 薬学の行）。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Toynbee, A. J. (1946). *A Study of History. Abridgement of Volumes I–VI* by D. C. Somervell. Oxford UP | https://archive.org/details/in.ernet.dli.2015.241704 （Digital Library of India。今の台帳の「Toynbee 1934」の行の public 検証リンクがこれを指している） | 取得先を確かめた（抄約。権利は未確認） |
| Ibn Khaldoun. *Les Prolégomènes*, tome I. M. G. de Slane 訳. Paris: Imprimerie Impériale, 1863 | https://fr.wikisource.org/wiki/Les_Prol%C3%A9gom%C3%A8nes （頁は「Page:Ibn Khaldoun - Prolégomènes, Slane, 1863, tome I.djvu/471–482」。OCR の未校正の翻刻） | 取得先を確かめた（パブリックドメイン） |
| Vico, G. (1744). *Principj di scienza nuova*. F. Nicolini 編 *La scienza nuova seconda*, Bari: Laterza, 1928 | https://it.wikisource.org/wiki/La_scienza_nuova_seconda （未校正の翻刻） | 取得先を確かめた（パブリックドメイン） |
| Turchin, P. (2012). Dynamics of political instability in the United States, 1780–2010. *Journal of Peace Research* 49(4), 577–591. DOI 10.1177/0022343312442078 | https://web.archive.org/web/2024id_/https://peterturchin.com/wp-content/uploads/2012/06/Turchin_JPR2012.pdf （著者のサイトの記録。早期公開版） | 手元に保存した（手元に置くなら。保存名の案手元の PDF） |
| Turchin, P. (2009). A theory for formation of large empires. *Journal of Global History* 4(2), 191–217. DOI 10.1017/S174002280900312X | https://web.archive.org/web/2024id_/https://peterturchin.com/wp-content/uploads/2023/06/Turchin_JGH_2009.pdf （著者のサイトの記録） | 手元に保存した（保存名の案手元の PDF） |
| Marx, K. (1859/1904). *A Contribution to the Critique of Political Economy*. N. I. Stone 訳. Chicago: Charles H. Kerr | https://archive.org/details/cu31924011249889 （コーネル大学図書館の走査） | 取得先を確かめた（パブリックドメイン） |
| Capoccia, G. & Kelemen, R. D. (2007). The study of critical junctures. *World Politics* 59(3), 341–369. DOI 10.1017/S0043887100020852 | Cambridge・Project MUSE（有料） | 書誌だけ |
| Hughes, T. P. (1987). The evolution of large technological systems. Bijker, Hughes & Pinch 編 *The Social Construction of Technological Systems*. MIT Press（頁は未確認） | 本文 OA なし | 書誌だけ |
| Hughes, T. P. (1969). Technological momentum in history. *Past & Present* 44(1), 106–132. DOI 10.1093/past/44.1.106 | OUP（有料） | 書誌だけ |
| Koselleck, R. (2006). Crisis. M. W. Richter 訳. *Journal of the History of Ideas* 67(2), 357–400. DOI 10.1353/jhi.2006.0013 | Project MUSE（有料） | 書誌だけ |
| Koselleck, R. (2011). Introduction and prefaces to the *Geschichtliche Grundbegriffe*. M. W. Richter 訳. *Contributions to the History of Concepts* 6(1), 1–37. DOI 10.3167/choc.2011.060102 | Berghahn（PDF の URL がサーバーの誤り 500） | 書誌だけ |
| White, H. (1980). The value of narrativity in the representation of reality. *Critical Inquiry* 7(1), 5–27. DOI 10.1086/448086 | UChicago・JSTOR（有料） | 書誌だけ |
| Řídký, J. (2019). The narrativism quarrel revisited: Can inquiry revive narrative? *Dějiny – teorie – kritika* 2019(1), 7–33 | https://medusa.is.cuni.cz/dejinyteoriekritika/article/download/2852/2224/14670 （カレル大学の雑誌のサイト） | 取得先を確かめた（ホワイトの二次資料） |
| Wallerstein, I. (1974). The rise and future demise of the world capitalist system. *Comparative Studies in Society and History* 16(4), 387–415. DOI 10.1017/S0010417500007520 | Cambridge（有料） | 書誌だけ |

既存の行に書き足す案：

- 台帳の「Toynbee 1934」の行：手元の PDF は Internet Archive の in.gov.ignca.2921（インド考古局の中央考古図書館の本の走査。Digital Library of India）と MD5 が一致した。第 1 巻の第 2 版（1935）の第 6 刷（1955）。文字の層が無く、同じ資料の `2921_djvu.txt` で読める。今の public 検証リンク in.ernet.dli.2015.241704 は Somervell の抄約（台帳に足す案）なので差し替える。第 4 巻の dli.ernet.12121 も Digital Library of India の走査（1948 年版）。
- 台帳の「Pierson 2000」の行：台帳の OA の URL（cadmus.eui.eu/bitstream/…）は今は HTML を返す。機関リポジトリの handle https://hdl.handle.net/1814/23648 と API の bitstream で PDF が取れる。これは 1997 年の作業論文版。誌面（APSR）は UNC の授業の頁の写し（https://fbaum.unc.edu/teaching/articles/Pierson_APSR_2000.pdf 。頁の画像）で読める。
- 台帳の「Mahoney 2000」の行：ETH の写しは JSTOR の版（2008 年の取得の印つき）。
- 台帳の「Ibn Khaldun 1377」の行：Rosenthal 訳の写しは Internet Archive に利用者が上げたもので、権利は未確認。de Slane 訳（台帳に足す案）で同じ箇所を照らした。
- 台帳の「Wallerstein 1974」の行：Internet Archive の写しは利用者（opensource の集まり）が上げた 2011 年の UC Press の版で、権利は未確認。
- 台帳の「Turchin 2014」の行：eScholarship の PDF は自動取得に確認画面を返す。DOI 10.21237/C7clio5125308（Crossref で題・著者・巻号を照らした）。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 書籍が多い分野でしたが、パブリックドメインの訳と原文の翻刻（de Slane 1863・Vico 1744・Stone 1904）と、授業の頁と著者のサイトの写しで、11 の論のうち 7 つで本文に当たれました。著者のサイトが移って 404 のときは、Wayback の CDX で著者の uploads の一覧を引くと見つかりました（ターチン）。
- 手元の PDF の表紙を突き合わせると、台帳の public 検証リンクが別の本（Somervell の抄約）を指していました。手元の PDF そのものは、Internet Archive の別の資料と MD5 が一致し、そこから OCR の文字が取れました。手元の PDF に文字の層が無いときは、まず MD5 で同じ資料を探すと早いです。
- 精読ノート「Pierson 2000」は APSR を UNC の授業の頁で読んだと書いていて、その写しで誌面の頁に当たれました。台帳の取得先（EUI の作業論文）より、精読ノートの確かめ先のほうが良いことがありました。
- 報告が訳した語（サンクコスト）を、原典の脚注が名指しで退けていました。報告の語と原典の語を一つずつ突き合わせると、言い換えが逆向きになっている所が見つかります。
- 本文に当たれた論は、どれも衝突と至らない形を書いていて、報告はそれを落としていました（人類学・民族学・社会学と同じ形）。歴史の論は、至らない形と分かれ目（挑戦の強さ・攻める者の有無・内の君主と外の征服・生産力の発達の度合い）を、論の中で書き分けていました。
- OpenAlex が途中で回数の制限を返しました。Unpaywall と CORE は鍵が無く飛ばしました。

### 精読ノートと wiki の誤り（司令塔が直す）

- wiki の頁「Toynbee 1934」 32 行：全文のリンク https://archive.org/details/studyofhistory0010toyn は第 10 巻（1954、貸し出しのみ）を指す。手元の PDF は in.gov.ignca.2921。
- wiki の頁「Toynbee 1934」 28 行：「Volume I (Parts I-III)」。第 1 巻の目次では、第 1 巻は Part I と Part II の前半（II.A〜C）で、Part III は第 3 巻から。
- 台帳の「Toynbee 1934」の行の備考：public 検証リンク in.ernet.dli.2015.241704 は Somervell の抄約（第 1〜6 巻の要約）で、第 1 巻ではない。
- 台帳の「Pierson 2000」の行：OA の URL（bitstream の古い形）が今は DSpace の HTML を返す。
- wiki の頁「Braudel 1958」 75 行：『地中海世界』（1949）の実践に基づいて精緻化したと書くが、1958 年の論文が 1949 年の本を引くのは都市の周期のモデル（p.741 の注）だけで、三つの層の出どころとは書いていない（低）。
