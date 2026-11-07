---
id: RR-005
title: F3 裁定の続き — Fano 三つ組予測の隣接文献と「密度を超えよ」という物差し
issue: "#115"
pillar: two-axis-closure
status: draft
date_start: 2026-07-03
date_end: 2026-07-03
---

## 問い

README §7 残タスク #1。RR-003 が「直接検証なし・隣接証拠は生存側」と残した **F3（Fano 三つ組予測）** の文献裁定を進める。RR-003 の精密版予測:

> 高機能な7人前後のチームでは、Simmelian tie 分析で (a) 三つ組被覆が高く、(b) 三つ組が**重なり合い**（各人が複数細胞に属す）、(c) ペアのホーム三つ組が安定して一意である。低機能チームでは (a') 非重複の2ブロック分割（faultline 型）または (b') ペア中心のスター/ハブ構造が観測される。

本 RR はこの予測の各要素に対する隣接実証を集め、F3 の検証プロトコルを**null model 込みで**厳密化する。

## 方法と注意

Web survey（2026-07-03）。**全文献 abstract / 二次資料レベル（原典精読未了 📚）**。CL-010 準拠: 精読していない原典への §・頁付き帰属はしない。数値・主張は要旨レベルの粒度に留める。

## 発見1 — 生存側の隣接証拠（3系統が予測の別々の要素を支える）

### 1a. 「機能する紐帯の単位は三つ組」— Simmelian контингency

[P] **Tortoriello & Krackhardt (2010, *AMJ* 53(1))**: R&D 技術者 276 名の分析で、部門を跨ぐ bridging tie はそれ自体ではイノベーション成果と関連せず、**その bridging tie が Simmelian（三つ組に埋め込まれている）ときに限って**優位性が現れた。

- 含意: 「ペア（dyad）ではなく**三つ組が機能する関係の単位**」という B 系の中核直観に対する、成果変数つきの最も強い隣接支持。RR-003 の「Simmelian ties は強く安定」（構造的安定性）から一歩進んで、**性能への効果が三つ組埋め込みに条件づけられる**ことを示す。
- 限界: 対象は大組織内ネットワークであり、7人前後の**チーム内部**の三つ組分解ではない。

[P] 補強: **Goh, Krackhardt, Weingart & Koh (2014, *Small Group Research*)** — 三つ組への埋め込みが協力・報復の力学そのものを変える（相互の友人が第三者にいると不公正への報復が変化）。三つ組が行動の文脈として実在することの実験的支持。

### 1b. 「有害なのは非重複2分割」— サブグループ構成の実証

[P] **Carton & Cummings (2012, *AMR* 37; 2013, *JAP* 98:732–758)**: サブグループの類型（identity / resource / knowledge）と構成の理論＋実証。

- チームが最も損なわれるのは **identity ベースのサブグループがちょうど2つ**のとき。この「2分割の特異な害」は knowledge ベースのサブグループでは現れない。
- identity 系は**不均衡**（多数派＋少数派）のほうがまし、knowledge 系は**均衡**のほうが良い。
- 含意: RR-003 の faultline 対比を実証面から精密化する。**害の正体は「非重複の2ブロック化」**であり、サブグループ一般ではない。「多数の・重なりうる・知識ベースの小単位」はむしろ機能に寄与しうる — Fano 分解（全員が3細胞に属す最大重複・7細胞）と方向が整合する。
- 限界: 彼らの「サブグループ」は属性・認知ベースの分類であり、**重なり合う三つ組**そのものを測ってはいない。

### 1c. 「中心ハブなしの分散が高機能」— ソシオメトリック実測

[P] **Pentland (2012, *HBR* "The New Science of Building Great Teams")**: ソシオメトリックバッジによる多業種のチーム実測。コミュニケーションのパターンは個人の知性・スキル・議論の内容を合わせたのと同等以上に成果を予測し、高機能チームの特徴は:

- 発話・傾聴が**全員にほぼ均等**に分配される
- メンバーが**リーダー経由でなく互いに直接**つながる
- 公式会議の外のサイド会話・探索が成果を押し上げる（エネルギーと関与で生産性分散の約1/3を説明）

- 含意: B 系の §6 主張（Fano の自己同型 PSL(2,7) はどの人も同格＝**構造に区別された中心がない**、7人チームは分散でしか動けない）の実測面の隣接支持。スター/ハブ構造（予測の (b')）が高機能側で観測されないことと整合。
- 限界: 三つ組被覆・ホーム三つ組の一意性は測っていない。

## 発見2 — 物差しが上がった: 「三つ組シグナルは密度を超えなければならない」

[P] **Faust (2007, *Sociological Methodology*; 2010, *Social Networks* "A puzzle concerning triads in social networks")**: 多数の実ネットワークで triad census を比較すると、**三つ組分布の変動の約9割は、より低次の特徴（密度・ダイアド分布）で説明されてしまう**。

これは F3 検証にとって決定的な方法論的制約である:

- 「高機能チームで三つ組が多い」を観測しただけでは**何も示せない**。高機能チームは密度が高く（[P] Balkundi & Harrison 2006, *AMJ* メタ分析・37研究: 内部密度はチーム成果・存続と正相関）、密度が高ければ三つ組は自動的に増えるからだ。
- つまり素朴な「三つ組被覆が高い」観測は **A 系（密度＝コスト・結束の一般論）に回収されてしまう**。
- **B 系が生き残る観測は「密度を固定した null model（conditional uniform graph / ERGM の三角形項）を超える三つ組シグナル」のみ**。特に予測 (c)「ペアのホーム三つ組の一意性」は密度からは導けない Fano 固有の構造なので、ここが最も判別力が高い。

## 発見3 — 緊張点: リーダー中心性の効果

[P] Balkundi & Harrison (2006) は**リーダーがネットワークの中心にいるチームほど成果が高い**ことも報告している。これは Pentland の「リーダー経由でない直接接続」および B 系の「中心なし」と表面上緊張する。

- 整理: B 系 §6 の主張は「**接続のためのハブは要らない**が、**向き付け（符号規約）としてのリーダーは要る**」だった。Balkundi-Harrison のリーダー中心性（特にチーム間ネットワークでの中心性＝外部との橋渡し）は「向き付け・対外接続」機能として読める余地があり、**内部実行のハブ化**とは区別できる。ただしこれは現状、B 系に都合のよい読み替えであり、[S] 未検証の解釈である（免疫化に注意）。

## F3 の裁定（更新）

| 項目 | 状態 |
|---|---|
| 直接検証（三つ組被覆・重なり・ホーム一意性 vs 性能） | **依然として存在しない**。F3 は未裁定のまま |
| 生存側の隣接証拠 | **強化**: 三つ組が機能単位（1a・成果変数つき）／害は非重複2分割（1b）／中心なし分散が高機能（1c） |
| 反証側の隣接証拠 | 直接の反証なし。ただし**密度で説明され尽くすリスク**が方法論として確定（発見2） |
| 検証の物差し | **引き上げ**: 密度固定 null model を超える三つ組シグナル＋ホーム三つ組一意性が必須。素朴な三つ組カウントは証拠にならない |

**一行サマリ**: F3 は生きているが、合格ラインが上がった。「三つ組が多い」では足りない——**「密度から予測される以上に三つ組に組織化され、かつペアの帰属が一意」**を示したときだけ、Fano 対応は数秘（N）を脱する。

## 検証プロトコル v2（RR-003 の提案を null model 込みで改訂）

> **対象**: 性能データ付き 6–8 人チームのコミュニケーション・ログ（Pentland 型バッジデータ、または Slack/メールのメタデータ）。
> **手続き**:
> 1. 各チームの相互作用ネットワークから Simmelian tie（相互＋三つ組共埋め込み）を抽出
> 2. **密度・ダイアド分布を固定した null model**（CUG 検定 or ERGM の GWESP 項）に対する三つ組過剰を推定
> 3. Fano 固有量を計測: (i) 各人の所属細胞数の分布（予測: 中央値≈3、重なり大）(ii) **ペアごとのホーム三つ組の一意性・時間安定性**（予測: 高機能ほど一意・安定）(iii) 非重複2ブロック度（faultline 指標。予測: 高機能ほど低い）
> 4. 判定: 高機能チームで (2) の過剰＋(3)-(ii) の一意性が観測されなければ **F3 発動＝N 判定**（B の核心予測が死ぬ）

## 次の作業（README §4 ループへの接続）

1. CN-010 の F3 項を「物差し引き上げ・生存側強化」に更新
2. README §6/§7 の表を更新（本 RR 追加、タスク#1 を「文献裁定完了・実データ検証待ち」へ）
3. READER §9「残った部分」に発見1b/1c/2 を反映（高校生の言葉で）→ LP 再生成 → 公開
4. 実データ検証（プロトコル v2 の実走）は本プログラムの外部協力が要る規模。当面は「検証可能な形で公開ページに掲示」まで

## 参照（アクセスレベル: 全て abstract / 二次資料 📚。精読未了）

- Tortoriello, M. & Krackhardt, D. (2010). Activating cross-boundary knowledge: The role of Simmelian ties in the generation of innovations. *Academy of Management Journal* 53(1), 167–181. https://journals.aom.org/doi/10.5465/amj.2010.48037420
- Goh, K.T., Krackhardt, D., Weingart, L.R. & Koh, T.K. (2014). The role of Simmelian friendship ties on retaliation within triads. *Small Group Research* 45(5). https://journals.sagepub.com/doi/10.1177/1046496414537689
- Carton, A.M. & Cummings, J.N. (2012). A theory of subgroups in work teams. *Academy of Management Review* 37(3), 441–470. https://journals.aom.org/doi/10.5465/amr.2009.0322
- Carton, A.M. & Cummings, J.N. (2013). The impact of subgroup type and subgroup configurational properties on work team performance. *Journal of Applied Psychology* 98(5), 732–758. PMID:23915429. https://pubmed.ncbi.nlm.nih.gov/23915429/
- Pentland, A. (2012). The new science of building great teams. *Harvard Business Review* 90(4), 60–69. https://hbr.org/2012/03/measure-your-teams-success （PDF 二次配布で本文確認）
- Faust, K. (2010). A puzzle concerning triads in social networks: Graph constraints and the triad census. *Social Networks* 32(3), 221–233. https://www.sciencedirect.com/science/article/abs/pii/S0378873310000158 ／ Faust, K. (2007). Very local structure in social networks. *Sociological Methodology* 37. https://sites.socsci.uci.edu/~kfaust/faust/research/articles/faust_vls_sm_2007.pdf
- Balkundi, P. & Harrison, D.A. (2006). Ties, leaders, and time in teams: Strong inference about network structure's effects on team viability and performance. *Academy of Management Journal* 49(1), 49–68.

## 関連

- `README.md`（本プログラム正本・§7 タスク#1）, `RR-003-team-size-evidence.md`（F3 の初期裁定・プロトコル v1）, `RR-002-isomorphism-rigor.md`（falsifier 定義）
- `../../concepts/CN-010_division-algebra-consciousness-organization.md`
- pd#115（epic）, #117（RR-003）
