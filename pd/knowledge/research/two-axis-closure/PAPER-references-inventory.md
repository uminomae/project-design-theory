---
title: PAPER References 出典棚卸しインベントリ（pd#121 工程2 前段）
status: draft
created: 2026-07-16
---

# 出典棚卸し

`knowledge/research/two-axis-closure/` の README・READER・RR-001〜RR-024（.md）から、外部文献（論文・書籍・定理の原典・思想史上の著作等）への言及をすべて抽出し、重複を1行にまとめた棚卸し。**ノートに書かれていない書誌情報は創作していない**——年・巻号・タイトルが RR に無い場合は「要確認」と明記した。精読レベルは各 RR ノート内の記録（「一次全文精読」「abstract 確保」「孫引き」「未精読📚」等）から判定した。

## 集計サマリー

- **総文献数（A+B+C の行数）: 180 件**（重複言及は1行に統合済み。一部の行は近接する複数著作を「（複数）」として1行に束ねている）
- カテゴリ別:
  - A. 数学（定理・原典）: **21 件**
  - B. チームサイズ・組織・集団構造の実証（ゲーム理論・社会選択・符号ネットワーク含む）: **56 件**
  - C. 意識・心理・感情・物理・思想史ほか: **103 件**
    - C1 感情・circumplex・感情モデル: 19
    - C2 量子認知・意識アプローチ: 7
    - C3 精神分析・関係論・発達・現象学: 31
    - C4 物理・量子・宇宙: 33
    - C5 存在論・思想史・光: 12
    - C6 方法論（外部参照）: 1
  - D. 判別不能・要確認: **10 件**（＝A/B/C から独立にカウントせず、上記のうち書誌・精読レベルが曖昧な項目を横断的に再掲したフラグ集。多くは B/C の既出行を指す）
- 精読レベル別（各文献の代表判定で計上。A+B+C の 180 行の内訳）:
  - ★ 一次精読: **20 件**
  - ○ 抄録・部分確保（verbatim / 本文抽出 / 一次寄り二次照合）: **36 件**
  - △ 孫引き・二次資料どまり（経由文献を明記／原典未精読📚）: **119 件**
  - ？ 判別不能: **5 件**

> 注: 精読レベルは「そのノートで到達した最良レベル」を1件につき1つ付与。同一文献が複数 RR で異なるレベルの場合は最良を採り、備考に差分を書いた。△が全体の約3分の2を占めるのは、本プログラムの多くの調査が abstract／二次資料どまり（CL-010 でアクセスレベルを明記する規律）で進んだことの反映。★（一次精読）は Baez 系の数学、量子基礎論の arXiv 数件、精神分析・発達心理の一次全文照合に集中している。

## 凡例
- 精読レベル: ★一次精読（原典本文を読んだ記録あり）／○抄録・部分確保（abstract verbatim・本文抽出・一次寄りの照合）／△孫引き（経由文献を明記／二次資料・教科書どまり・原典未精読📚）／？記録から判別不能
- 「出現箇所」は言及があるファイル名（複数可）。READER＝READER-division-algebra-consciousness-organization.md
- D1-D4 等の定義番号表記は使わない（本 repo 絶対原則）

---

## A. 数学（定理・原典）

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| A1 | Baez, J. (2002) | "The Octonions." *Bull. AMS* 39, 145–205（arXiv math/0105155） | ★ | RR-001, RR-015, RR-016, RR-018, README, READER | 本仮説の数学的背骨。arXiv PDF 実取得→pdftotext 全文精読。自己同型の実軸固定・Re 定義式・G₂ 次元・Bott mod 8 の行番号記録あり |
| A2 | Baez & Huerta (2009) | arXiv:0909.0551 | ★ | RR-016 | h₂(K)・k+2 対応（可除代数↔時空次元 3,4,6,10）の該当行を一次確認。「ℍ は 4+2＝6 次元時空に対応」を確定 |
| A3 | Hurwitz (1898) | Nachr. Ges. Wiss. Göttingen 309–316（normed division algebras 定理） | △ | RR-001, RR-018 | Baez 2002 Thm 1 として精読確認（✅B）。原論文は書誌ポインタのみ（📚） |
| A4 | Zorn (1930) | Abh. Math. Sem. Univ. Hamburg 8, 123–147（alternative division algebras） | △ | RR-001 | Baez Thm 2 経由（✅B）。原論文 📚 |
| A5 | Frobenius (1878) | 結合的有限次元実可除代数は ℝ,ℂ,ℍ のみ | △ | RR-001, RR-018 | Baez 本文に直接記載なし。Thm 2 の系として従う。歴史的原典は 📚 |
| A6 | Bott–Milnor (1958) | Bull. AMS 64, 87–89（次元は 1,2,4,8） | △ | RR-001, RR-018 | Baez Thm 3 経由（✅B）。原論文 📚 |
| A7 | Kervaire (1958) | PNAS 44, 280–283（"Non-parallelizability of the n-sphere for n>7"） | △ | RR-001, RR-018 | Baez 経由。原論文 📚 |
| A8 | Adams (1960) | Ann. Math. 72, 20–104（Hopf 不変量 1 は n=2,4,8 のみ、"the hard part"） | △ | RR-001, RR-018, RR-014 | Baez §3 経由（✅B）。原論文 📚。RR-014 脱線候補7（1,2,4,8 決着史） |
| A9 | Atiyah–Hirzebruch (1961) | 平行化可能性 | △ | RR-001 | Baez refs のみ。📚 |
| A10 | Massey (1983) | *Amer. Math. Monthly* 90(10), 697–701（外積は n=1,3,7 のみ） | ○ | RR-001, RR-018 | 一次原論文は未精読。定理文・性質定義・証明構造は Ekström & Yousef の公開文献実取得で照合（✅照） |
| A11 | Ekström & Yousef (2024) | *Cross Products in Euclidean Spaces*（学士論文, diva2:1865965） | ○ | RR-001 | PDF 実取得・§1.3/§3/結論で「only 1, 3, 7」を確認。Massey の照合ソース |
| A12 | Eckmann (1943) | 外積分類の歴史的先行 | △ | RR-001 | 📚（原論文未精読） |
| A13 | Brouwer (1912) | Math. Ann. 71（ハゲ球／毛玉の定理） | △ | RR-001 | 教科書標準として扱う（📚） |
| A14 | Hopf (1940) | 1,2,4,8 決着史の起点 | ? | RR-014 | RR-014 脱線コラム候補7 に書誌名のみ。詳細記録なし＝要確認 |
| A15 | Conway & Smith (2003) | *On Quaternions and Octonions* | △ | RR-001, READER | 未精読のまま参考文献に留置（📚）。本仮説の主張は Baez 精読＋機械検証で自立 |
| A16 | Cartwright & Harary (1956) | 構造均衡定理（Structure Theorem）*Psychological Review* 63(5) p.286 | ★ | RR-024 | p.286 を一次全文で逐語照合＋独立機械検証。符号付きグラフの均衡⇔二部分割。「偶奇理論」ではない点に注記あり |
| A17 | Gillies (1959) | 協力ゲーム core の形式化 | △ | RR-024 | F-1 表に系として言及。二次確認どまり |
| A18 | （標準事実） | G₂ = Aut(𝕆)、dim G₂ = 14（Baez §4.1） | ★ | RR-001, RR-002, RR-015 | Baez 本文で精読確認（✅B）。so(7)=21=14+7 も Baez §4.1 |
| A19 | （標準事実） | PGL(3,2) ≅ PSL(2,7)、位数 168（Fano 平面 Aut） | △ | RR-001, RR-014, RR-015 | 位数 168 は総当たり機械検証済（✅計）。同型自体は Baez 本文に無し・標準事実 📚。RR-014 M1 で「同じ群として知られている」に弱める修正済 |
| A20 | （標準事実） | Bott 周期性 mod 8／Radon–Hurwitz 数／H 空間（積が連続な球面は S⁰,S¹,S³,S⁷） | ○ | RR-001, RR-014, RR-015, RR-018 | Baez 精読領域に接地（Bott mod 8 は行番号記録あり）。RR-014 で新視点素材として列挙 |
| A21 | （標準事実） | S⁷ = Moufang ループ（結合しない閉じ方） | △ | RR-018 | 標準事実として使用（一次未精読・二次多重） |

---

## B. チームサイズ・組織・集団構造の実証（ゲーム理論・社会選択・符号ネットワーク含む）

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| B1 | Hackman & Vidmar (1970) | Effects of size and task type on group performance. *Sociometry* 33, 37–54 | △ | RR-003, README, READER | abstract/二次資料。主観的最適 4.6 人 |
| B2 | Wheelan, S.A. (2009) | Group size, group development, and group productivity. *Small Group Research* 40(2), 247–262 | △ | RR-003, README, READER | 329 実働グループ。abstract/二次。READER「329グループ」の出典 |
| B3 | Mueller, J.S. (2012) | Why individuals in larger teams perform worse. *OBHDP*（relational loss） | △ | RR-003 | abstract/二次。巻号未記載＝一部要確認 |
| B4 | Klimek, Hanel & Thurner (2009) | To how many politicians should government be left? *Physica A*（arXiv:0804.2202） | △ | RR-003, README, READER | 内閣サイズ・崖≈20。abstract/二次。READER「内閣サイズ研究」の出典 |
| B5 | （著者名なし）(2021) | Examining learning coherence in group decision-making: triads vs. tetrads. *Sci Rep* 11 | △ | RR-003 | 三つ組 vs 四つ組。**著者名がノートに無い＝要確認**（D 欄にも再掲） |
| B6 | Krackhardt, D. (1999) | The Ties That Torture: Simmelian Tie Analysis in Organizations | △ | RR-003, README, READER | 二次（Wikipedia 経由で構造確認） |
| B7 | Goh, Krackhardt, Weingart & Koh (2014) | The role of Simmelian friendship ties on retaliation within triads. *Small Group Research* 45(5) | △ | RR-003, RR-005 | abstract/二次 |
| B8 | （著者名なし）(2016) | Calling Dunbar's numbers. *Social Networks*（層スケーリング比≈3） | △ | RR-003 | **著者名がノートに無い＝要確認**（D 欄にも再掲） |
| B9 | Graicunas, V.A. (1933) | Relationship in Organization（span of control・R=N(2^(N-1)+N-1)） | △ | RR-003, RR-023 | 二次（nickols.us / Wikipedia）。RR-023 で 44/100/222 が canonical・Wikipedia の 60/105/160 は転記異本と注記 |
| B10 | Lau & Murnighan (1998) | faultlines。*AMR* 23 | △ | RR-003, RR-005, RR-024, READER | 二次資料レビュー。READER「faultline 研究」の出典 |
| B11 | Miller, G.A. (1956) | The magical number seven, plus or minus two. *Psychological Review* 63, 81–97 | ○ | RR-002, RR-003, README, READER | 論文末尾の「数秘警戒」を引用。7±2 のチーム論転用を範疇誤用として棄却する側で使用。二次だが原典記述を具体的に参照 |
| B12 | Cowan, N. (2001) | The magical number 4 in short-term memory. *BBS* 24 | △ | RR-002, RR-003 | 二次。4±1 改訂 |
| B13 | Ringelmann / Latané | 社会的インパクト理論・べき乗則 R(N)=N^(t−1) | △ | RR-003 | 二次（arxiv 適用例 https://arxiv.org/pdf/2606.02646）。Ringelmann 綱引き実験（19c末） |
| B14 | Tortoriello & Krackhardt (2010) | Activating cross-boundary knowledge: Simmelian ties. *AMJ* 53(1), 167–181 | △ | RR-005, READER | 276 名 R&D 技術者。abstract/二次。READER「研究者276人の組織」の出典 |
| B15 | Carton & Cummings (2012) | A theory of subgroups in work teams. *AMR* 37(3), 441–470 | △ | RR-005 | abstract/二次 |
| B16 | Carton & Cummings (2013) | Subgroup type and configuration on team performance. *JAP* 98(5), 732–758（PMID 23915429） | △ | RR-005 | abstract/二次 |
| B17 | Pentland, A. (2012) | The new science of building great teams. *HBR* 90(4), 60–69 | ○ | RR-005, READER | ソシオメトリックバッジ実測。PDF 二次配布で本文確認。READER「センサーバッジ」の出典 |
| B18 | Faust, K. (2010) | A puzzle concerning triads in social networks. *Social Networks* 32(3), 221–233 | △ | RR-005 | abstract/二次。三つ組分布の9割が密度で説明される（検証物差しの根拠） |
| B19 | Faust, K. (2007) | Very local structure in social networks. *Sociological Methodology* 37 | △ | RR-005 | 二次（PDF リンクあり・精読記録なし） |
| B20 | Balkundi & Harrison (2006) | Ties, leaders, and time in teams. *AMJ* 49(1), 49–68 | △ | RR-005 | 二次。内部密度メタ分析・リーダー中心性 |
| B21 | Simmel, G. (1908) | *Soziologie*（dyad/triad の質的転換・第三者の3役割 mediator/tertius gaudens/divide et impera） | △ | RR-003, RR-013, RR-023, RR-024 | 原典📚未精読・二次（Britannica 等）。RR-013 C3 で3類型 |
| B22 | Scrum Guide (2017 / 2020) | 開発チーム推奨サイズの推移（3–9人→10 or fewer） | ○ | RR-009, RR-023 | RR-023 で 2020 原文一次確認。RR-009 は folklore 級 |
| B23 | Amazon two-pizza rule | ≈5–8 人（folklore） | ？ | RR-009 | 業界二次資料・folklore。学術一次なし |
| B24 | von Neumann & Morgenstern (1944) | 3人目から提携が非自明化（協力ゲーム・core） | △ | RR-023, RR-024 | 二次（Britannica/AMS）。原典📚 |
| B25 | Condorcet 陪審定理 | 正答率>0.5 で人数増→精度↑・奇数は同数割れ回避 | ○ | RR-023 | Wikipedia 本文精読（一次寄り二次）。著者=Condorcet（原典年なし） |
| B26 | Arrow（不可能性定理） | 3択以上で理想的集約なし | △ | RR-023, RR-024 | 二次。書誌年未記載 |
| B27 | May（定理） | 2択＝多数決が一意（単純多数決の特徴づけ） | △ | RR-024 | 二次。書誌年未記載 |
| B28 | Steiner (1972) | process loss（サイズ増→効率単調低下） | △ | RR-023 | 二次。原典📚未精読 |
| B29 | Brooks | *The Mythical Man-Month*（パス数 n(n−1)/2） | △ | RR-023 | 二次。書誌年未記載 |
| B30 | Alchian–Demsetz / Coase / Williamson | 企業サイズ＝測定・取引費用の連続最適化 | △ | RR-023 | 二次。個別書誌なし＝一部要確認 |
| B31 | Heider（バランス理論） | 三角形の符号の積で均衡判定 | △ | RR-023, RR-024 | 二次。Cartwright–Harary（A16）と対で言及 |
| B32 | Eisert, Wilkens & Lewenstein (1999) | 量子ゲーム理論（EWL）quant-ph/9806088 | ○ | RR-023 | Wikipedia 本文精読で rotate the qubit・unitary・non-commutative payoff を逐語確認。実在確認済 |
| B33 | Sydow et al. (2009) | 組織パス依存（path dependence, non-ergodic）*AMR* | △ | RR-013, RR-023 | 書誌・要旨（二次）。ロックイン・不可逆 |
| B34 | Ghemawat | commitment 理論（不可逆性＝戦略性） | △ | RR-013, RR-023 | 一次未読了・二次（通説級）。C1a 反駁の出どころ |
| B35 | Katzenbach & Smith | チーム論（逐語未確認） | △ | RR-023 | 📚 未精読・二次のみ |
| B36 | （著者不明）(2026) | arXiv:2601.07283（Condorcet cycle ↔ Möbius/Klein 壷） | ○ | RR-023 | 本文フェッチ・**査読前プレプリント**。READER 本文不掲載・出典メモ留保 |
| B37 | He & Luo (2018) | even number of directors. *J. of Banking & Finance* 93, 139–150 | △ | RR-024 | 本文 403 blocked・abstract/二次。tie 回避＝多数決算術（frustration 機構とは別） |
| B38 | Dougherty & Edward (2009) | Odd or Even: Assembly Size and Majority Rule. *J. of Politics* 71(2), 733–747 | △ | RR-024 | abstract/二次（403 blocked） |
| B39 | Deng, Gao & Liu (2012) | board 偶奇の機構（tie 回避 or frustration） | ？ | RR-024 | 書誌断片のみ・403 blocked・年以外の書誌未記載＝要確認 |
| B40 | Adil & Khan (2026) | 取締役会サイズ偶奇の実証（列挙のみ） | ？ | RR-024 | 書誌断片のみ・要確認 |
| B41 | Deutsch (1949 / 2006) | 協調-競争理論（*Human Relations* 2(2) 脚注3／2006 Handbook 章 pp.23-28） | ★ | RR-024 | 一次照合（脚注3＋2006 章）。ただし「協調なら偶奇無関係で収束」は Deutsch に無い外挿と注記 |
| B42 | Lipset / Coser | cross-cutting vs reinforcing cleavages | △ | RR-024 | 二次。分断線の重なり方 |
| B43 | Bezrukova et al. (2009) | faultline 内 crisscrossing 概念 | △ | RR-024 | 二次。計算モデルで実証 |
| B44 | Mäs et al. (2013) | *Org Sci* 24(3)（crisscrossing の計算モデル） | △ | RR-024 | 二次（403 blocked） |
| B45 | Zhang & Chen (2023) | faultline メタ分析。*Management and Organization Review* 19(5) | △ | RR-024 | 二次。撤回された T&P 2011 の差し替え一次候補 |
| B46 | Thatcher & Patel (2011) | faultline メタ分析【**2016 撤回済み**・PubMed 27504664】 | △ | RR-024 | **撤回文献**。下流（READER 等）で引かない予防注記。RR-024 本文は直接引用していない |
| B47 | Facchetti et al. (2011) | signed networks。*PNAS* 108(52) | ○ | RR-024 | PMC OA・一次照合（R3）。奇サイクル＝frustration の実データ確認 |
| B48 | Altafini (2012) | opinion dynamics on signed networks。*PLOS ONE* | ○ | RR-024 | PMC OA・一次照合 |
| B49 | Antal, Krapivsky & Redner (2006) | 社会均衡動力学。*Physica D* 224, 130–136 | ★ | RR-024 | 全文一次照合。「有限系は必ず balanced に収束」＝価値づけ逆転の根拠 |
| B50 | Chujyo et al. (2025) | *Sci Rep* 15:39882（unbalanced sign→振動・非収束） | △ | RR-024 | 本文 403 blocked・abstract/一次記述のみ引用 |
| B51 | Granovetter | triadic closure | △ | RR-024 | 二次（F-1 表・社会ネットワーク）。書誌年なし |
| B52 | Burt | structural holes / tertius | △ | RR-024 | 二次（F-1 表）。書誌年なし |
| B53 | Moscovici | 少数派影響（minority influence） | △ | RR-024 | 二次・探索的。書誌年なし |
| B54 | Tyler | 手続的公正（procedural justice・voice） | △ | RR-024 | 二次。β の単純二分を崩す反証。書誌年なし |
| B55 | Trueblood & Busemeyer (2011) | 判断の順序効果（F2 対応） | △ | RR-024 | 二次（F-1 表） |
| B56 | Lichtenstein & Slovic | 選好逆転（preference reversal） | △ | RR-024 | 二次（F-1 表）。書誌年なし |

---

## C. 意識・心理・感情・物理・思想史ほか

### C1. 感情・circumplex・感情の多次元/成長モデル

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C1 | Russell, J.A. (1980) | A circumplex model of affect. *JPSP* 39(6), 1161–1178 | △ | RR-004, README, READER | circumplex 原典。二次資料（教科書）で構造確認・原典精読未了📚 |
| C2 | Posner, Russell & Peterson (2005) | The circumplex model of affect. *Dev. and Psychopathology* 17(3), 715–734 | ○ | RR-004, READER | 「two independent neurophysiological systems」「linear combination」を本文抽出で確認（全文精読は未了） |
| C3 | Kuppens, Tuerlinckx, Russell & Barrett (2013) | The relation between valence and arousal. *Psychological Bulletin* 139(4), 917–940（doi:10.1037/a0030811・PMID 23231533） | ○ | RR-004, RR-006, READER | abstract を verbatim 取得・精読。V 字関係・person/culture 可変 |
| C4 | Watson & Tellegen (1985) | Toward a consensual structure of mood. *Psychological Bulletin* 98(2), 219–235 | △ | RR-004 | 45度回転（PA/NA）論争。二次資料・原典未精読📚 |
| C5 | Yik, Russell & Steiger (2011) | A 12-point circumplex structure of core affect. *Emotion* 11(4), 705–731 | △ | RR-004 | 円環構造の再現。二次（PDF リンクあり・精読記録なし） |
| C6 | Kuppens et al. (2017) | Valence–arousal relation varies with personality and culture. *J. of Personality* 85(4) | △ | RR-004 | 二次。V 字急峻さの外向性・文化差 |
| C7 | Barrett, L.F. (2017) | The theory of constructed emotion. *SCAN* 12(1), 1–23 | ★ | RR-004, RR-022, READER | pd 既存精読 evidence 経由（barrett-2017-constructed-emotion.md）。構成主義的情動理論 |
| C8 | Barrett, L.F. (2017a) | allostasis / body budgeting（PMID 27798257） | ★ | RR-020 | pd 既存 evidence で精読済み。「エネルギー」が代謝実体に接地する唯一点 |
| C9 | Kuppens, Oravecz & Tuerlinckx (2010) | Feelings change (DynAffect). *JPSP* 99(6), 1042–1060（PMID 20853980） | △ | RR-007 | abstract/二次。core affect の OU 型確率力学＝加法系 |
| C10 | Oravecz, Tuerlinckx & Vandekerckhove / De Longis et al. (2022) | DynAffect 階層 OU 実装／emotional inertia 適用（*Applied Psychology*） | △ | RR-007 | abstract/二次 |
| C11 | Plutchik (1980) | 感情の輪（円錐・8基本感情＋強度軸・dyads） | △ | RR-020 | **原典未精読📚**。立体化の構造は二次で確認 |
| C12 | Fontaine et al. (2007) | 感情の4次元構造（PubMed 18031411） | ○ | RR-020, RR-010 | 著者・年・4次元を verbatim 確認 |
| C13 | （複数）VAD/PAD・Lövheim cube・Thayer | 感情の3次元/多次元モデル | △ | RR-020 | 二次多重。Thayer は PubMed CAPTCHA でブロック・書誌のみ📚 |
| C14 | Collins (2004) | *Interaction Ritual Chains*（emotional energy の充填/枯渇） | △ | RR-020 | 二次。社会学的構成概念（熱力学的保存量でない） |
| C15 | Freud / Jung | psychic energy（hydraulic 系譜） | △ | RR-020 | 二次・系譜的発見。「ダムから流れ出す」の直系（字義的実体化の失敗＝航路標識） |
| C16 | （著者不明）(2024) | arXiv:2407.02474（circumplex × 自由エネルギー原理） | ○ | RR-020, RR-010 | 精読。arousal を「不確実性（事後エントロピー）」にマップ＝仮説と食い違う反証的接地点。**著者名がノートに無い＝要確認** |
| C17 | Riso & Hudson（Enneagram）/ Naranjo | エニアグラム9タイプ＋統合/分裂の連結線 | △ | RR-020 | Wikipedia verbatim（Delphi poll "discredited" 4.14・連結線撤回）。疑似科学評価が主流と明記 |
| C18 | Jung / Loevinger / Kegan / Wilber | 個性化・自我発達（WUSCT）・成人発達（分裂→統合の成長ベクトル） | △ | RR-020 | 二次📚。Loevinger のみ WUSCT で相対的に測定可能 |
| C19 | Ekman（基本感情理論） | Barrett 構成主義との係争相手 | △ | RR-022 | 二次（Sage 2025・PMC10261107）。「感情とは何か」の未決着 |

### C2. 量子認知・意識への量子アプローチ

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C20 | Wang, Solloway, Shiffrin & Busemeyer (2014) | Context effects... quantum nature of human judgments. *PNAS* 111(26), 9431–9436 | ○ | RR-006, RR-013, RR-021, RR-024 | QQ equality。abstract＋二次で確認、本文は 403 で未直読📚。RR-024 F2 で「一次全文」と記す箇所あり＝**RR 間で精読レベル記述に揺れ**（要確認・下記 D 参照） |
| C21 | Boyer-Kassem, Duchêne & Guerci (2016) | Testing quantum-like models of judgment for question order effect. *Mathematical Social Sciences* | △ | RR-006 | 二次。退化測定モデルでは QQ 不成立 |
| C22 | Busemeyer & Bruza (2012) | *Quantum Models of Cognition and Decision*. Cambridge UP | △ | RR-006 | 枠組みの標準文献📚 |
| C23 | Busemeyer & Wang / Pothos & Busemeyer | Quantum Cognition（*Annual Review of Psychology* 系・annurev-psych PDF） | ○ | RR-007, RR-021 | 原著 PDF を pdftotext で一次逐語抽出（「QPT is the theory of probability... without any of the physics」「no quantum brain hypothesis」） |
| C24 | Atmanspacher, H. | "Quantum Approaches to Consciousness." *SEP*（§4.1–4.2, §5.1–5.3） | ★ | RR-006, RR-019, RR-021, RR-022 | 本文フェッチ・該当節確認。Pauli–Jung/dual-aspect monism・quantum mind without quantum brain |
| C25 | （著者不明）(2016) | Quantum probabilistic models revisited. *Frontiers in Physics* 4:26 | △ | RR-007 | 二次。干渉効果レビュー。**著者名がノートに無い＝要確認** |
| C26 | （著者不明）| QQ equality 批判（arXiv:1811.00045） | ○ | RR-013 | 全文確認。「同じデータで破れる別の量子等式・古典も QQ を満たしうる」。**著者名がノートに無い＝要確認** |

### C3. 精神分析・関係論・発達心理・現象学・社会科学

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C27 | Ogden, T.H. (2004) | analytic third。*Psychoanalytic Quarterly* 73:167- | ★ | RR-016, RR-024 | 一次全文・行番号特定（81-86, 719-724）。「the experience of the third... is not identical for each participant」 |
| C28 | Britton, R. (2004 / 1989) | triangular space / 第三の位置。*Psychoanalytic Quarterly* 73:47-61（PMID 14750465） | ★ | RR-013, RR-024 | RR-013 は PMID 抄録確認、RR-024 は一次全文（1989）逐語。「witness, not a participant」 |
| C29 | Benjamin | thirdness | △ | RR-013 | 二次。「物理的な三人目」ではない限定つき |
| C30 | Bion (1961) | work group / basic assumption group | △ | RR-013 | 原文確認と記すが二次レベル。Bion「O」は RR-016 C6 で不採用推奨 |
| C31 | De Jaegher & Di Paolo (2007) | Participatory sense-making. *Phenom Cogn Sci* 6:485-507（DOI 10.1007/s11097-007-9076-9） | ★ | RR-013, RR-015, RR-017 | 一次精読（著者公開版 PDF 全文）。「at least two autonomous agents」「多人数拡張を予想」を逐語。RR-015 時点では孫引きだったのを RR-017 で格上げ |
| C32 | De Jaegher & Di Paolo (2008) | 書章（relational domain with its own properties）IOS Press pp.33-47 | ○ | RR-017 | 著者公開版で文脈確認 |
| C33 | Di Paolo, Cuffari & De Jaegher (2018) | *Linguistic Bodies*（MIT Press） | △ | RR-017 | 書籍非OA・書誌/要約の多重確認どまり（§付き引用はしない） |
| C34 | McHale, Fivaz-Depeursinge, Dickstein, Robertson & Daley (2008) | LTP/family alliance。*Family Process* 47(4):445-463（PMC2761722） | ★ | RR-017, READER | PMC 全文をローカルに逐語照合。97%・"unexplained by dyadic" を照合済 |
| C35 | Lavanchy (2002) | 3ヶ月児 97% の rapid gaze transition（学位論文） | △ | RR-017, READER | **孫引き（McHale et al. 2008 が報告した値）**。原学位論文は未取得と明記。READER 本文も「McHale…が報告した Lavanchy 2002 の値・原学位論文までは未取得」と経由を明示済 |
| C36 | Sawyer & DeZutter (2009) | collaborative emergence（13人即興劇団）。*Psychology of Aesthetics, Creativity, and the Arts* 3(2):81-92（DOI 10.1037/a0013282） | ★ | RR-017 | 一次全文（著者公開版・V1 達成） |
| C37 | Foulkes, S.H. (1948 / 1964) | *Introduction to Group-Analytic Psychotherapy* / *Therapeutic Group Analysis*（group matrix） | △ | RR-016, RR-017 | 一次は非OAで V1 未達（blocked）。GASI 公式解説＋独立 OA 論文（PMC9893044）の二次多重で語義確定 |
| C38 | Winnicott | 可能性空間・抱える環境（第三の領域） | △ | RR-016 | 体系内確立・二次資料。原理的に二者の場（3人拡張は本文上の空白） |
| C39 | Tomasello | 共同注意・共有志向性（自己・他者・対象の三項） | △ | RR-015 | 二次。Q9/O5 と最も構造的に一致する「最強の支持」（ただし二次確認どまり） |
| C40 | Husserl | 生活世界・間主観性・第五省察（客観的世界は構成の帰結） | △ | RR-015, RR-019 | 二次（第五省察系） |
| C41 | Merleau-Ponty | 間身体性・沈殿・肉（Leib/Körper・可逆的一元性） | △ | RR-013, RR-015, RR-019 | 二次。習慣的身体は PMC11890556 経由。原著未精読 |
| C42 | Schutz | 多元的現実（間主観的世界は一つ・意味領域は複数） | △ | RR-015 | 二次 |
| C43 | Goffman / Clark | working consensus / common ground | △ | RR-015 | 二次。実務的収束の読み |
| C44 | Lewin | 場理論・life space（場＝個人ごとに一つ） | △ | RR-015, RR-016 | 二次。「場」という語の心理学伝統との衝突＝最強の反証 |
| C45 | von Glasersfeld | 急進的構成主義 | △ | RR-015 | 二次 |
| C46 | Klein, M. | スプリッティング・母子未分離 | △ | RR-013, READER | 二次（Melanie Klein Trust で用語確認）。RR-013 B2 の読み替え素材 |
| C47 | Bowen (1978) / Kerr & Bowen (1988) | 家族システム論・三角関係化（triangulation） | △ | RR-024 | 一次本体は blocked。Comella 2001 の逐語（二次確認どまり）経由 |
| C48 | Minuchin | detouring / coalition（第三者を排除する連合） | △ | RR-024 | 二次。病理的機能不全の側 |
| C49 | Comella (2001) | Bowen 三角形の解説（PDF 逐語） | ○ | RR-024 | PDF 逐語（一次に近い二次解説） |
| C50 | （著者不明・Family Alliance Model）(2017) | 三者水準の非還元。*Frontiers*（2017） | ★ | RR-024 | 一次全文照合。「二者系は足し合わせられない」。**著者名がノートに無い＝要確認** |
| C51 | Coe & Davies (2020) | detouring が子の適応を独自予測。*J. Fam. Psychol.* 34(7):814-824（PMC8324313） | ★ | RR-024 | 一次全文照合 |
| C52 | Trevarthen (2001) | 一次/二次間主観性（person-person-object の三項, 9ヶ月〜） | △ | RR-024 | 原論文が書籍章で未取得・二次確認どまり（PMC9116197 の逐語経由） |
| C53 | Bakeman & Adamson (1984) | 共同注意＝「最も複雑な二者相互作用」（PMC8172475） | △ | RR-024 | 二次確認どまり・画像 PDF で blocked。理論分岐（3は原初か2から構成か）の一方 |
| C54 | Parke & O'Leary (1976) | "second-order effect"（第三者の presence の効果） | △ | RR-024 | 二次。「順番（sequence）」ではない混同の罠として注記 |
| C55 | Wilke (1974) / Coe (1985) | coalition の rotation／順序実証（可能性） | ？ | RR-024 | Wiley 有料壁（HTTP 402）で blocked。読めれば「順序実証未発見」結論が覆る可能性（確度 medium） |
| C56 | Lacan | 大文字の他者 | △ | RR-024 | 二次（F-1 表・精神分析の三者） |
| C57 | Gallotti & Frith (2013) | we-mode（一人称複数） | △ | RR-016 | 書誌確認・二次。dyad 中心の制約 |

### C4. 物理・量子・宇宙

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C58 | Jozsa (2007) | 弱値の実部/虚部の分離測定（arXiv:0706.4207 定理 eq.9-10） | ★ | RR-019 | 一次精読（定理全文） |
| C59 | Pusey, Barrett & Rudolph (2011/2012) | PBR 定理（arXiv:1111.3328） | ★ | RR-019 | 一次精読。"real" は波動関数全体の実在性で実部/虚部と無関係と確認 |
| C60 | Hoffreumon & Woods (2026) | 実数量子論論争（arXiv:2603.19208） | ★ | RR-019, RR-016 | 一次精読・**査読前/係争中**。Renou 2021 への直接反論 |
| C61 | Heisenberg (1958) | potentia（該当章逐語・marxists.org 掲載版） | ★ | RR-019 | 一次逐語。「量子状態＝アリストテレス的 potentia の客観的言明」 |
| C62 | Renou et al. (2021) | 複素数量子論の必要性。*Nature*（arXiv:2101.10873・pd 既収蔵） | ○ | RR-016, RR-019, RR-021 | Nature abstract 直接取得。排除したのは特定ネットワークシナリオに限る（射程限定） |
| C63 | Yīng et al. (2025) | foil theories perspective（arXiv:2506.08091） | ○ | RR-016 | abstract 直接引用。RQT 再解釈。**表記（Yīng）不確実＝要確認** |
| C64 | Zurek (2009) | Quantum Darwinism | ○ | RR-016, READER | 二次だが最有力として本文採用候補。光子系・NV センター・超伝導回路で実験検証。READER §6 コラム掲載 |
| C65 | Riedel, Zurek & Zwolak (2012) | 冗長性の崩壊（多体・長時間） | △ | RR-016 | 二次確認（要約止まり） |
| C66 | Kramers–Kronig 関係 | 実部＝分散/虚部＝吸収（因果律） | △ | RR-019 | 二次（古典線形応答一般の標準事実） |
| C67 | Minkowski (1908) / Poincaré (1906) / MTW (1973) | ict 表記（時間＝虚軸）の放棄史 | △ | RR-019 | 二次。実/虚の安易な存在論化への歴史的教訓 |
| C68 | Hawking | 虚時間（「どちらが実在かは無意味」） | △ | RR-019 | 二次逐語（原典頁未特定・要一次確認と自認） |
| C69 | Newton–Wigner (1949) / Adamo (arXiv:1712.02196) | 光子の位置演算子問題／twistor の real slice | △ | RR-019, RR-022 | 二次（nLab・Adamo レビュー要約）。twistor 一次精読は未達（判定待ち） |
| C70 | Tegmark (2000) | 脳のデコヒーレンス時間（*Phys. Rev. E* 61:4194） | △ | RR-021 | 本体未精読📚・値は SEP＋複数二次一致。**係争中**（Hagan らの反論あり） |
| C71 | Hagan, Hameroff & Tuszynski (2002) | デコヒーレンス時間の桁の反論（arXiv:quant-ph/0005025） | ○ | RR-021 | abstract 取得 |
| C72 | Babcock (2024) / Kalra (2023) | 微小管の in vitro 量子効果（superradiance 等） | △ | RR-021 | Frontiers 2026 レビュー経由（二次） |
| C73 | （著者不明）(2026) | 微小管量子効果の批判的レビュー。*Frontiers*（2026） | ○ | RR-021 | verbatim 確認。「in vitro/ex vivo であり in vivo は不確実」。**著者名がノートに無い＝要確認** |
| C74 | Wigner / von Neumann–Wigner / Zeh (1970) | 意識による波束収縮解釈とその後退（環境デコヒーレンス） | △ | RR-021 | 二次。撤回の程度・時期は係争と注記 |
| C75 | IIT 公開書簡 (2023) / Koch / Seth | 統合情報理論の疑似科学論争（124名書簡） | △ | RR-021 | 二次（Nature 記事）。汎心論リスクの実例 |
| C76 | （著者不明）| 陽子質量分解（約99%＝グルーオン場エネルギー）arXiv:1710.09011 | ○ | RR-021 | 一次寄り＋symmetry magazine・lattice-QCD 二次多重。**著者名がノートに無い＝要確認** |
| C77 | Jaynes–Cummings model | 結合項 ℏg(σ₊a+σ₋a†)（arXiv:1111.1143） | ○ | RR-020, RR-021 | 一次寄り＋量子光学講義の2独立ソース一致 |
| C78 | Larmor 公式 | P=q²a²/(6πε₀c³)（加速電荷の放射） | ○ | RR-020 | Wikipedia 逐語（一次寄り） |
| C79 | Prigogine（散逸構造） | 非平衡でエントロピー生成が秩序を維持 | △ | RR-020 | 二次多重（AIP Chaos 27,104501／MDPI Fluids 7(4)141／PMC7712552） |
| C80 | Noether（定理） | energy＝時間並進対称性の保存量 | △ | RR-020 | 二次（Baez/LibreTexts）。「最も厳しい同型条件」 |
| C81 | （複数二次）E=mc² / 束縛エネルギー放出 | 対消滅・核反応・崩壊で塊⇄放出（Britannica/LibreTexts/OpenStax） | △ | RR-020, RR-021 | 二次多重。仮説の最も近い物理対応 |
| C82 | （標準・Wikipedia 逐語）自発放出/誘導放出・ZPE | 脱励起は塊保存・真空ゼロ点ゆらぎ駆動 | ○ | RR-020, RR-021, RR-022 | Wikipedia 逐語（QED 標準）。「ダム＝真空」の物理側翻訳 |
| C83 | Milonni (1975) | 自発放出の相補的二描像（PhysRevA.11.814） | ○ | RR-022 | 一次寄り。真空ゆらぎ／放射反作用の演算子順序依存 |
| C84 | Wilson et al. (2011) | 動的カシミール効果観測（arXiv:1105.4714・*Nature* 479:376） | ○ | RR-022 | 一次寄り（本文📚）。超伝導回路 2011 |
| C85 | （複数）光子非局在 | arXiv:0903.3712・quant-ph/0511270 | ○ | RR-022 | 一次寄り。「光子は放出/吸収の瞬間にのみ存在」は係争中の解釈 |
| C86 | （著者不明）| 相補性 D²+V²≤1。*Science Advances* abi9268 | ○ | RR-022 | 一次寄り。which-path 情報と干渉可視度のトレードオフ。**著者名がノートに無い＝要確認** |
| C87 | FLRW / Gödel 宇宙 / CMB | 宇宙時間の創発・閉じた時間的曲線・晴れ上がりの化石光 | △ | RR-016, RR-022 | 二次（複数独立ソース一致）。「場は1本」は条件付き創発 |
| C88 | Unruh 効果 / Hawking 放射 | 真空から光が生まれる（加速/地平線） | △ | RR-022 | 二次（PIRSA/PhysicsWorld/Royal Society）。実証階層＝アナロジーの強引さの階層 |
| C89 | Cohl Furey | 八元数と標準模型（検証中の研究） | △ | RR-014 | 二次。RR-014 脱線候補6。「確立理論ではない」明記必須 |
| C90 | Rauch / Werner (1975) | 中性子干渉計で 720° を実測 | △ | RR-014 | 書誌 V1 確認。ベルトトリックが「お話」でない証拠 |

### C5. 存在論・思想史・光のメタファー

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C91 | Plotinus / 新プラトン主義 | 流出論（emanation・一者は放射しても減らない） | △ | RR-022 | 二次（SEP Neoplatonism）。原典『エネアデス』未精読📚。「消尽しない源」の (b) 足場 |
| C92 | （思想史群）lumen naturale / divine illumination | Augustine=外/Aquinas=分有/Descartes=内（心の光の源泉） | △ | RR-022 | 二次（SEP）。pjdhiro の「光はどこから」＝1500年来の争点の再来 |
| C93 | Blumenberg (1957) | メタフォロロギー（絶対的隠喩） | △ | RR-022 | 二次多重・原著未直読📚。(b) 層の理論的後ろ盾（一学派の立場と限定） |
| C94 | Derrida | "White Mythology"（光＝真理＝現前の形而上学批判） | △ | RR-019, RR-022 | 二次・原著未直読📚。virtual/actual（RR-019）は不採用推奨 |
| C95 | Heidegger | Lichtung（開け・受容の空間） | △ | RR-022 | 二次・原著未読。晩年の自己制動（Lichtung は光と語源無関係） |
| C96 | （仏教）prabhāsvara / Luminous mind | 明示的に「暗室のランプのアナロジー」として運用 | ○ | RR-022 | WebFetch 精読（"metaphorical rather than literal" verbatim） |
| C97 | 光学史（Alhazen・Newton・Huygens・Young・Maxwell・Einstein） | 光の本性論の転換史（視線放射→流入→粒子/波→電磁波→光量子→QED） | △ | RR-022 | 二次（Emission theory・Book of Optics 等）。本性論の暫定性のアナロジー |
| C98 | Pauli–Jung / unus mundus / dual-aspect monism | 心物中立実在の二相（Atmanspacher 系） | ○ | RR-006, RR-019, RR-021 | SEP 精読（C24 と同系）。哲学的最堅足場だが実部/虚部の分解とは接続しない（RR-019 C3） |
| C99 | Whitehead | 潜在→現実化 | △ | RR-019 | 二次・一次未精読📚 |
| C100 | Aristotle | potentia / actuality（現実態・可能態） | △ | RR-019 | 二次（Heisenberg potentia の並走概念として） |
| C101 | Spinoza（conatus）/ Russellian monism | 自己保存の力・中立一元論（SEP） | △ | RR-019 | 二次（SEP）。「力と向きの候補」の素材 |
| C102 | Deleuze | virtual / actual | △ | RR-019 | 二次・一次未精読📚。**不採用推奨**（real の語が重なるだけ・借用の罠） |

### C6. 方法論（外部参照）

| # | 著者 (年) | タイトル・出典情報（ノート記載のまま） | 精読レベル | 出現箇所 | 備考 |
|---|---|---|---|---|---|
| C103 | Litt, G. (2026) | "Understanding is the new bottleneck for AI-assisted coding"（geoffreylitt.com 2026-07-02） | ○ | READER, RR-014 | 本文フェッチ。READER §9 の理解度テスト方針＋Litt 適合監査（reader-litt-conformance）の典拠。論の内容ではなく方法論の外部参照 |

---

## D. 判別不能・要確認

著者名・年が曖昧、同一文献か判別できない、または RR 間で精読レベル記述が食い違う言及。

| # | 言及（ノート記載のまま） | 出現箇所 | 問題点 |
|---|---|---|---|
| D-1 | Gallup「平均12.1人」のチームサイズ | RR-013 | 書誌情報が一切ない。報告書名・年・URL 要確認 |
| D-2 | Spotify squad 失敗事例分析 | RR-013 | 出典（記事・書籍・年）が特定されていない。要確認 |
| D-3 | triads vs tetrads. *Sci Rep* 11 (2021) | RR-003（B5 再掲） | 著者名がノートに無い。DOI/著者要確認 |
| D-4 | Calling Dunbar's numbers. *Social Networks* (2016) | RR-003（B8 再掲） | 著者名がノートに無い。要確認 |
| D-5 | arXiv:2407.02474（circumplex×自由エネルギー・2024） | RR-020（C16 再掲） | 著者名がノートに無い。要確認 |
| D-6 | Frontiers in Physics (2016) 干渉レビュー／Frontiers (2026) 微小管レビュー／Family Alliance *Frontiers* (2017)／Science Advances abi9268／Frontiers 系複数 | RR-007, RR-021, RR-024, RR-022 | いずれも著者名がノートに無く「Frontiers 2026」等の誌名+年のみ。C16/C25/C50/C73/C86 と対応。著者・タイトル要確認 |
| D-7 | Wang et al. (2014) PNAS の精読レベル | RR-006/RR-021（"本文403未直読📚"）vs RR-024 F-1（"一次全文"） | **RR 間で精読レベル記述が矛盾**。実際の到達レベルを一本化して要確認（C20） |
| D-8 | 陽子質量分解 arXiv:1710.09011 / 相補性 Science Advances abi9268 / Yīng et al. 2025 arXiv:2506.08091 | RR-021, RR-022, RR-016 | 著者名・正式タイトルが未記載または表記不確実（Yīng の綴り含む）。要確認（C63/C76/C86） |
| D-9 | Deng-Gao-Liu 2012 / Adil & Khan 2026（board 偶奇） | RR-024 | 年以外の書誌（誌名・巻号・正式著者名）が未記載。403 blocked。要確認（B39/B40） |
| D-10 | De Longis et al. (2022) *Applied Psychology* / Oravecz-Tuerlinckx-Vandekerckhove（DynAffect 実装系） | RR-007 | 巻号・DOI 未記載。同一群の複数論文が1行に束ねられており分離要確認（C10） |

---

## 作業メモ（棚卸し時に気づいた問題）

1. **同一文献の表記ゆれ**: Kuppens 系が RR-004（2013・2017・2010）に複数あり役割が異なる。Krackhardt は単著（1999）・Goh 共著（2014）・Tortoriello 共著（2010）で別文献。統合時に取り違えないこと。
2. **孫引き関係の明示済み例**: Lavanchy 2002 の 97% は McHale et al. 2008 経由（C35）。RR-017・READER とも経由を明記済みで、References では Lavanchy を「as cited in McHale et al. 2008」形式にすべき。
3. **撤回文献**: Thatcher & Patel (2011) は 2016 撤回済み（B46）。References に載せるなら撤回注記必須、または Zhang & Chen (2023) で代替。
4. **精読レベルの RR 間不整合**: Wang et al. 2014（D-7）は RR により「一次全文」「本文403未直読」と食い違う。工程2 で一本化が必要。
5. **著者名欠落が多いのは Frontiers 系・arXiv 系**（D-5/D-6/D-8）。誌名+年のみで著者が RR に落ちていない。References 正規化前に著者・正式タイトルの取得が要る。
6. **標準事実（教科書）扱いの数学項**（A18–A21）は原典を持たない書き方が多い。論文では「standard, see Baez 2002」等の扱い方針を決める必要。
7. **査読前プレプリント**（B36 arXiv:2601.07283, C60 Hoffreumon & Woods 2026）は「係争中/未査読」注記付きでのみ引用可の方針が RR 内に既にある。

---

## 工程2 本番: 発見の解消記録（2026-07-16・Fable5 一次確認）

前段（棚卸し）で挙げた3発見を、一次ソースの確認で解消した。以下を References 正規化の確定入力とする。

### 発見①（撤回文献）— 解消: 不掲載＋撤回注記
- **Thatcher & Patel (2011)**（B46）は 2016 撤回済み（PubMed 27504664）。RR-024 本文は直接引用していない。→ **References に本体エントリを載せない**。faultline メタ分析の生きた引用が要る箇所は **Zhang & Chen (2023)**（B45・*Management and Organization Review* 19(5)）で代替。撤回の事実は「撤回文献につき不掲載」の一行注記としてのみ残す（下流での誤引用予防）。READER §II 出典メモにも既に「Thatcher & Patel 2011 は撤回済みのため使いません」と明記済み＝整合。

### 発見②（Wang 2014 の精読レベル不整合）— 解消: ★一次全文に一本化
- **Wang, Solloway, Shiffrin & Busemeyer (2014)**（C20/D-7）は **PMC4084470 で OA 全文アクセス可**（2026-07-16 Fable5 が本文取得・独立照合）。QQ equality の定義式 `q=[p(AyBy)+p(AnBn)]−[p(ByAy)+p(BnAy)]=…=0`（パラメータフリー）と「**70 の全国代表調査＋2 実験**で支持」を本文で確認。→ 精読レベルを **★一次全文** に確定。RR-024 F2 の「一次全文」が正・RR-006/021 の「本文403未直読📚」は**古いアクセス経路の記録**（403 でブロックされた経路のみを見た時点の注記）であり、PMC 経由で解消済み。References は ★ で記載。DOI 10.1073/pnas.1407756111。

### 発見③（著者名欠落）— 解消: 学術文献は一次確認で著者確定／灰色文献は要確認フラグ維持
2026-07-16 に arXiv / OA 一次ソースで著者・正式書誌を確認（Fable5）:

| 旧# | 確定した書誌 | 経路 |
|---|---|---|
| C16 | Pattisapu, Verbelen, Pitliya, Kiefer & Albarracin (2024). "Free Energy in a Circumplex Model of Emotion." arXiv:2407.02474 | arXiv |
| C25 | Moreira & Wichert (2016). "Quantum Probabilistic Models Revisited: The Case of Disjunction Effects in Cognition." *Frontiers in Physics* 4:26. doi:10.3389/fphy.2016.00026 | Frontiers OA |
| C26 | Lebedev & Khrennikov (2018). "Quantum-like modeling of the order effect in decision making: POVM viewpoint on the Wang–Busemeyer QQ-equality." arXiv:1811.00045 | arXiv |
| C50 | Favez, Frascarolo & Tissot (2017). "The Family Alliance Model: A Way to Study and Characterize Early Family Interactions." *Frontiers in Psychology* 8:1441. doi:10.3389/fpsyg.2017.01441 | Frontiers OA |
| C63 | Yīng, Ciudad Alañón, Centeno, Surace, Maciel Ansanelli, Liu, Schmid & Spekkens (2025). "On whether quantum theory needs complex numbers: the foil theories perspective." arXiv:2506.08091 | arXiv（Yìlè Yīng 表記確定） |
| C73 | Ma & Wang (2026). "Quantum theories of consciousness: a critical review of feasibility, philosophical sufficiency, and empirical testability." *Frontiers in Psychology* 17:1730965. doi:10.3389/fpsyg.2026.1730965 | Frontiers OA |
| C76 | Yang, Chen, Draper, Liang & Liu (2017). "Proton mass decomposition." arXiv:1710.09011（Lattice2017） | arXiv |
| C86 | Yoon, T.H. & Cho, M. (2021). "Quantitative Complementarity of Wave-Particle Duality." *Science Advances* 7(34):eabi9268. arXiv:2104.04230（PMC8373128 で巻号確認: vol 7, issue 34, 2021-08-18） | arXiv/Sci Adv OA。※本論文の関係式は `P²+V²=μₛ²`。RR-022 に記した一般形 `D²+V²≤1`（Englert 型）とは別式＝正規化時に精密化 |
| B5 | Harada (2021). "Examining learning coherence in group decision-making: triads vs. tetrads." *Scientific Reports* 11:20463. doi:10.1038/s41598-021-00089-w（PMC8516953） | Nature/PMC OA |
| B8 | Mac Carron, Kaski & Dunbar (2016). "Calling Dunbar's numbers." *Social Networks* 47:151–155. arXiv:1604.02400 | ScienceDirect/arXiv |

**未解消（灰色文献・ペイウォールにつき「書誌未確定・要確認」を維持）**:
- D-1 Gallup「平均12.1人」= 商用調査レポート（学術一次でない）。論文で使うなら Gallup 報告書名・年の特定が要る。RR-013 由来。
- D-2 Spotify squad 失敗事例 = ブログ/記事系の灰色文献。出典特定できず。
- D-9 Deng, Gao & Liu (2012) / Adil & Khan (2026)（board 偶奇）= 403/ペイウォールで書誌断片のみ。RR-024 F-1 表の周辺証拠どまり。
- D-10 De Longis et al. (2022) *Applied Psychology* / Oravecz-Tuerlinckx-Vandekerckhove（DynAffect 実装系）= 巻号・DOI 未取得。同一群の複数論文が1行に束ねられており分離が要る。RR-007 由来。
- B39/B40 Deng-Gao-Liu 2012 / Adil & Khan 2026（D-9 と同一）。
- これらは論文本文が実際に引用する場合のみ工程3/工程4 で個別に追う。灰色文献は References では二次経由を明示（"as reported in …" / "cited in RR-013"）。
