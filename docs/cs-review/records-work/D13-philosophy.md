# 哲学：記録から外した作業の節

`cs/evidence/evidence-D13-philosophy.md` から、2026-11-10 に外した節です（Issue #111。公開の記録には、読者が読む報告だけを残した）。中身は外したときのままで、直していません。「今の報告」は、2026-11-10 に下げた旧報告（pjdhiro の repo の `assets/creation/domains/`）を指します。外す前の記録の全体は、git の fe43ae9 の `cs/evidence/evidence-D13-philosophy.md` にあります。

## 公開報告の点検のまとめ

### 版の間の食い違い

| 項目 | 日本語版 | 英語版 | プレゼン版 | 退避版 |
|---|---|---|---|---|
| 判定の数 | 強い 3・部分的 6・条件付き 2（87 行・227 行・246 行） | 強い 9・条件付き 2（73 行・209 行） | 冒頭は強い 5・部分的 5・条件付き 1（23 行）。表では強い 5・部分的 4・条件付き 2（46〜56 行） | Accept 9・CA 2（L-2） |
| 「強い」の論 | シモンドン・デューイ・パース | シェリングとドゥルーズ＝ガタリの他の 9 つ | シモンドン・デューイ・ガダマー・パース・西田 | ― |
| 西田の対応段階 | 場・縁・渦に強い対応（85 行） | Strong（71 行） | 全5段階（56 行） | 縁フラグ 🔴 |
| 縁の「強い」の数 | 6 つの縁の記述（189 行） | 強い 6・部分 3・弱い 1・無し 1（79〜82 行） | ― | 「🔴 5件」と書いて 6 つの名を並べる（L-2） |

判定の数は未判定（版の食い違い）。英語版とプレゼン版は訳ではなく別々に書かれていて、どの版も原典の照合から数を出した跡はありません。プレゼン版は冒頭の数と自分の表が合いません。

### 領域全体の主張

| 今の報告の行 | 判定 | 重さ | 中身 |
|---|---|---|---|
| ja 189 行「6つの異なる縁の記述…伝播型・問題化型・跳躍型・可逆型・対話型・矛盾保持型」 | 付け足し | 中 | 型の名は原典に無い。出どころは phase7 17〜22 行 |
| ja 193 行「束→場循環の駆動力の多様性…5つの異なる回答」 | 付け足し | 中 | 出どころは phase7 26〜38 行。アドルノとガダマーは原典を本文で読めていない |
| ja 197 行「受動性→能動性の勾配」 | 付け足し | 中 | 出どころは phase7 40〜52 行。原典で確かめた跡が無い |
| ja 201 行「段階化への内在的抵抗」・213 行「連続的スペクトラム」 | 付け足し | 中 | 出どころは phase6 41・143 行、phase7 54〜62 行。デューイは「第一と第二の段がしばしば溶け合う」と書くだけ（p.72） |
| ja 227 行「3件…で全5段階にわたる強い構造対応が確認されました」・234 行「確定」 | 言い過ぎ | 高 | 照合の跡が無い。パースの節は帰属違いを含む |
| 報告全体 衝突と至らない形 | 抜け | 高 | 本文に当たれた論の多くは、衝突と至らない形を書いていた（一面の表）。報告はそれを落とし、アドルノ・ドゥルーズ＝ガタリ・シェリングを「批判的照射」「段階化への批判」として外に置いた |
| ja 18 行・225 行 選んだ 11 の理論に正反合の系譜が無い | 抜け | 中 | ヘーゲルを足した（12 節） |

### テンプレート由来の表示

ja 5〜8 行「立ち位置明示」、46〜51 行「方法論的開示（S60）」、87 行「温度帯の分布」、89〜91 行「安全弁」、233〜238 行「結びの温度開示」、240〜250 行「Colophon」。32・40 行の「Phase 1-2」「Phase 5（論拠監査）」も LLM の記号です。51 行は「著者（pjdhiro）自身の精読による検証が完了していない箇所」と書き、著者を pjdhiro としていて、文責の書き方（writing §1-1・§1-8）と合いません。英語版 49 行の読者への呼びかけ（「Readers can continue while holding onto that discomfort」）も型 F の表示です。30 領域に共通の見込みで、テンプレートで直します（README 段 1）。

### 誤りの出どころ

| 誤り | 出どころ |
|---|---|
| アブダクションの定式を 1877 年の論文の段落で書く | 退避版 428 行（CP 5.189 を同じ項目に並べた） |
| 「状況（conditions + intended result）は場」 | 退避版 87 行 |
| シェリングの「縁の不在」「反証的証拠」 | 退避版 186 行の縁フラグ（縁の三条件の点検） → phase6 75 行 → 報告 |
| 縁の 6 類型・束→場の 5 つの駆動力・受動性の勾配・段階化への抵抗 | phase7 17〜62 行 |
| メルロ＝ポンティの「非二元的記述」 | 退避版 293 行（点検の欄の言い方） |
| 西田の「個物は個物の自己否定に於いて全体…」 | 退避版 518 行（1939 年の論文に無い） |
| 英語版のデューイの「expectation and reality」の食い違い | phase6 30・149 行の「予想と現実の誤差」 |
| 英語版のメルロ＝ポンティ・ガダマーの文（en 120・128 行） | 退避版・調べた跡に無い（英語版を書いたときの付け足し） |
| 版ごとの件数 | ja・en・pres が別々に生成されたこと |
| 型 F の表示 | 報告のテンプレート |

### 文体（書き方と誤りの型の規約）

- 型 E（「最も」の言い切り）：「30の調査領域のなかで最も抽象度が高い領域」（16 行）、「11件のなかで最も安定した構造対応」（97 行）、「対応付けの恣意性が最も低い理論」（107 行）、「『縁』を最も多角的に記述する領域」（189 行）。比べた跡は無い。
- 型 H（原典に無い体系）：「伝播型・問題化型・跳躍型・可逆型・対話型・矛盾保持型」（189 行）。
- 型 B・C（外に置く・射程で切る）：「この不一致は対応の『失敗』ではなく、5段階モデルが『線形的段階』として硬直化するリスクへの内在的な警告」（179 行）、「方向は対応ではなく批判です」（167 行）、「分析生成と存在生成の統合可能性」（219 行）。
- 型 E（断定）：「確定（哲学理論群のなかに5段階モデルと構造的に対応する記述が存在する）」（234 行）。
- 型 F：「事実として」「読み取りとして」「解釈として」の札を全節に付ける形は、規約への説明を読者に向ける形に近い。

## 判断が要るもの

pjdhiro に聞くものは、この分野からは新しく出ていません（領域をまたぐ問いは調べ方の計画と規約の「判断が要ること」5）。規約で答えが出たものは、次のとおり決めて書きました。

- ヘーゲルを論として足しました。本文に当たれて、矛盾と止揚をはっきり書いているためです（README「調査の手順」3）。歴史学のマルクスと同じ系譜なので、段 3 で一つに数えます。
- シモンドンは、原典が自分の図式を弁証法と区別しているので、正反合の系譜の裏付けには数えず、「緊張の解決」を書く別の一面として並べました。
- メルロ＝ポンティの Les Classiques des sciences sociales の版は、大学と組んだ電子図書館の打ち直しで出所が書けるので、性格（カナダでのパブリックドメイン）を添えて本文照合済にしました。頁は版の中の [ ] の Gallimard の頁です。
- シェリングの原典の「渦（Wirbel）」は、語が5段階と同じだけなので、対応の根拠に数えていません。
- 1923 年の再録（パース）は、パブリックドメインの図書館の走査なので本文照合済にし、頁は再録の頁と書きました。
- 上げた人の分からない写しで読んだ論（アドルノ・デューイ 1938・シモンドン 1958）は、未照合として読んだ頁を書きました。

## 新しく見つけた原典

| 書誌 | 取得先 | 台帳での扱いの案 |
|---|---|---|
| Simondon, G. (2009). The position of the problem of ontogenesis. G. Flanders 訳. *Parrhesia* 7, 4–16 | https://web.archive.org/web/20201212101349/https://www.parrhesiajournal.org/parrhesia07/parrhesia07_simondon1.pdf （Wayback の記録。元は誌のサイト。今の URL は 404） | 手元に保存した（保存名の案手元の PDF） |
| Hegel, G. W. F. (1910). *The Phenomenology of Mind*, Vol. I. J. B. Baillie 訳. London: Sonnenschein | https://archive.org/details/cu31924097557171 （コーネル大学図書館の走査） | 手元に保存した（パブリックドメイン。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Hegel, G. W. F. (1807/1907). *Phänomenologie des Geistes*. G. Lasson 編. Leipzig: Dürr | https://archive.org/details/phnomenologied00hege （イリノイ大学図書館の走査） | 手元に保存した（パブリックドメイン。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Hegel, G. W. F. (1812). *Wissenschaft der Logik*, Bd. 1. Nürnberg: Schrag | https://archive.org/details/wissenschaftderl01hege （Graduate Theological Union の走査） | 手元に保存した（パブリックドメイン。手元に置いたのは同じ資料の OCR の文字手元のファイル） |
| Schelling, F. W. J. (1799). *Einleitung zu seinem Entwurf eines Systems der Naturphilosophie* / *Erster Entwurf eines Systems der Naturphilosophie*. Jena und Leipzig: Gabler | https://archive.org/details/ersterentwurfein00sche （ブリガムヤング大学図書館の走査） | 手元に保存した（保存名の案手元の PDF） |
| Merleau-Ponty, M. (1964). *Le visible et l'invisible*. C. Lefort 編. Gallimard（Les Classiques des sciences sociales の 2020 年の版） | https://web.archive.org/web/20210904115041/http://classiques.uqac.ca/classiques/merleau_ponty_maurice/visible_et_invisible/Le_visible_et_l_invisible.pdf （Wayback の記録。元は大学と組んだ電子図書館） | 手元に保存した（カナダでのパブリックドメイン。保存名の案手元の PDF） |
| 西田幾多郎 (1939). 絶対矛盾的自己同一. 『思想』202 | https://www.aozora.gr.jp/cards/000182/card1755.html （青空文庫。底本『西田幾多郎哲学論集Ⅲ』岩波文庫 1989） | 手元に保存した（パブリックドメイン。手元に置いたのは青空文庫の頁手元のファイル） |
| Husserl, E. (2001). *Analyses Concerning Passive and Active Synthesis*. A. J. Steinbock 訳. Springer. DOI 10.1007/978-94-010-0846-4 | Springer（有料） | 書誌だけ |
| Gadamer, H.-G. (1960). *Wahrheit und Methode*. Tübingen: Mohr | Internet Archive の貸し出しだけ | 書誌だけ |
| Deleuze, G. & Guattari, F. (1980). *Mille plateaux*. Paris: Minuit | OA なし | 書誌だけ |
| Adorno, T. W. (1966). *Negative Dialektik*. Suhrkamp | https://archive.org/details/TheodorAdorno-NegativeDialektik （利用者が上げた写し。上げた人と権利は未確認） | 書誌だけ（写しは読めるが、確かめ先にしない） |
| 西田幾多郎 (1926). 場所. 『哲学研究』（『働くものから見るものへ』岩波書店 1927 所収） | 国立国会図書館デジタルコレクション（インターネット公開でない見込み） | 書誌だけ |
| Stanford Encyclopedia of Philosophy の項目「Edmund Husserl」（Zahavi）・「Hans-Georg Gadamer」（Malpas）・「Gilles Deleuze」（Smith ほか）・「Theodor W. Adorno」（Pickford） | https://plato.stanford.edu/entries/husserl/ ほか | 取得先を確かめた（二次資料） |

既存の行に書き足す案：

- 台帳の「Simondon 1958」の行：Monoskop の写しは 1989 年の Aubier の版の走査（見開き 2 頁で 1 面、182 面、文字の層なし。図版の頁が p.247 と p.248 の間に入る）。上げた人と権利は未確認。読めた頁：pp.159・163・248。
- 台帳の「Deleuze 1966」の行：誌のサイトの PDF は今も取れる（2026-11-09）。見開き 2 頁で 4 面、pp.43–49 の全部。台帳が「取得先を確かめた」と書く行で、本文を読めた（「手元に保存した」に上げられる。保存名の案手元の PDF）。
- 台帳の「Dewey 1938」の行：Internet Archive の JohnDeweyLogicTheTheoryOfInquiry は利用者が上げた写し（Holt、1939 年 1 月の刷）。本文は読めるが、確かめ先としては上げた人と権利が未確認。
- 台帳の「Peirce 1923」の行：トロント大学 Robarts 図書館の走査（スポンサー MSN、2006 年）。「The Fixation of Belief」は pp.7–31 に再録。台帳が「取得先を確かめた」と書く行で、本文を読めた（「手元に保存した」に上げられる）。
- 台帳の「Dewey 1910」の行：手元の PDF はコーネル大学図書館の走査（Internet Archive の cu31924014133221）。
- 台帳の「Varela ら 1974」の行：複雑系科学複雑系の記録は Varela ら 1974 を「未照合（有料）」としているが、この台帳の行の手元の PDF（Monoskop の走査、10 頁）の 1 頁目で、*BioSystems* 5 (1974) 187–196 の題と著者を確かめた。Monoskop の写しなので、上げた人と権利は未確認。

## ブラウザでの保存が要る PDF

自動で取れなかった原典のうち、ブラウザでの保存を頼むものは、作業の記録（[Issue #73](https://github.com/uminomae/project-design-theory/issues/73)）の表にまとめました。

## 手順について分かったこと

- 書籍が多い分野でしたが、パブリックドメインの原文と古い訳（ヘーゲル 1812・1907・1910、シェリング 1799、パース 1923、デューイ 1910）と、OA の誌の訳（Parrhesia の序論の英訳）、大学と組んだ電子図書館（メルロ＝ポンティ）、青空文庫（西田 1939）で、12 のうち 8 つの論の本文に当たれました。古い独語の走査は、亀の子文字の OCR が読める本（1799・1812）と崩れて読めない本（1798）がありました。読んだ頁は一つ頁の画像で確かめました（シェリング p.29・30）。
- 報告が「対応が弱い」「外に置く」とした論ほど、原典は二つの力の兼ね合いと至らない形をはっきり書いていました（シェリングの「産物は 0」）。逆に、報告が「強い対応」とした論の一つ（シモンドン）は、原典が自ら弁証法との違いを書いていました。
- 精読ノートが「原文引用」と書く所に、編者の序文の要約が引用符で入っていました（下の「Peirce 1923」）。精読ノートの頁が、見開き 2 頁の PDF の面の読み違いでずれていました（下の「Deleuze 1966」）。
- 台帳に無い古典は、Internet Archive の検索 API で図書館の走査（contributor が図書館のもの）を先に選ぶと、上げた人の分からない写しを避けられました。原典を探す道具は書籍の題では Internet Archive の貸し出しと個人の写ししか出さないことが多く、図書館の走査は検索 API で探しました。
- 原典を探す道具の使い方の表示（`--help`）は Python の argparse の書式の誤り（help の文字列の「%」）で落ちます。サブコマンドの引数は原典を探す道具の `add_argument` で見ました。macOS に `timeout` が無いので、時間の上限は `perl -e 'alarm 120; exec @ARGV'` で付けました。
- Semantic Scholar は回数の制限（429）を返しました。Unpaywall と CORE は鍵が無く飛ばしました。

### 精読ノートと wiki の誤り

追記（2026-11-09・司令塔）：下の「Deleuze 1966」の四か所と「Peirce 1923」の四か所（26・38・44・50 行）は、原典の文字と頁の画像（Pli 12 の pp.44・46、1923 年の再録の OCR の文字）で確かめて直しました。「Peirce 1923」のノートの読んだ範囲の書き足しと、wiki の二つのリンクは、段 4（wiki との整合）に回します。シェリングの p.29（PDF の 35 面）と、ヘーゲル 1812 年の「Es widerspricht sich also in sich selbst」の文（OCR の文字）は、司令塔も開いて確かめました。Les Classiques des sciences sociales のサーバーは、サンドボックスの外からも時間切れでした（名前は引けます。2026-11-09）。

- 精読ノート「Deleuze 1966」 52 行：直す前「…of a `resolution' for [a problem posed by disparates]." (p.49 付近)」→ 直したあと「…of a 'resolution' for an objectively problematic system." (p.46)」。角括弧の中の語は原文に無く、頁は p.46（見開きの左の段）。
- 同 67 行：「(p.49)」→「(p.46)」。
- 同 40 行・64 行：「Singular without being individual…」の頁「(p.45)」→「(p.44)」。
- 精読ノート「Peirce 1923」 26 行：引用符の中に要約が入っている。直す前「"laboratory work reveals that 'no two observers...get absolutely identical results,' suggesting that irregularity is fundamental to nature rather than merely observational error."」→ 直したあと、引用は「"no two observers, and no one observer in successive experiments, get absolutely identical results"」だけにし、残りは要約として引用符の外に書く（Cohen の序文）。
- 同 38 行：直す前「"ideas literally spread themselves continuously and become more and more general, generating order through habitual patterns."」→ 直したあと「"ideas literally spread themselves continuously and become more and more general or inclusive"」（後半は要約）。
- 同 44 行・50 行：「"Peirce's approach integrated modern physics with medieval realism…"」「"establishing him as a foundational figure…"」は 1923 年の本の文に無い。引用符を外して要約と書く。
- 同ノートは Cohen の序文だけを読んでいて、報告が頼る「The Fixation of Belief」（pp.7–31）を読んでいない（頁の範囲の欄に足す）。
- wiki の頁「Whitehead 1929」 61 行：「全文: Wikimedia Commons」のリンクが Commons のトップ（https://commons.wikimedia.org/ ）で、ファイルを指していない。
- wiki の頁「Dewey 1938」 55 行：全文のリンク（Internet Archive の JohnDeweyLogicTheTheoryOfInquiry）は利用者が上げた写しで、66 行の「archive.org 公開の原典」は性格が違う（低）。
