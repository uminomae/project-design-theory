# 「価値とは」統合調査レポート

Issue: #33
作成日: 2026-03-27
作成: Claude (agent-team-workflow, cs#188)
入力: value-chatgpt-20260326.md, value-chatgptpro-20260327.md, value-deep-research-codex-20260327.md

## 要約

「価値」は価格/効用/規範/意味/象徴の少なくとも5つの問題系が束になった多義語である。日本語「価値」は英語の value/values/worth/utility/significance/merit/price に分岐し、翻訳時に問題系の混線が起きやすい。領域ごとに「何が価値か」「どう測るか」が異なるため、「価値とは何か」を問うときは、まずどの問題系・どの領域の話かを切り分ける必要がある。価値は対象の内部に固定的にあるものでも主体の気分だけでもなく、対象・主体・制度・文脈の関係のなかで立ち上がる多層概念である。

## 「価値」の多義性

### 五つの問題系

| 問題系 | 定義 | 代表理論 | 英語対応語 |
|--------|------|----------|-----------|
| 価格 | 財・サービスの交換における貨幣的表現 | 古典派経済学（Smith, Ricardo）、マルクス労働価値説 | price, market value |
| 効用 | 目的達成や欲求充足の度合い | 限界効用理論（Jevons, Menger）、プロスペクト理論（Kahneman & Tversky） | utility, usefulness |
| 規範 | 善悪・正不正に関わる信念・基準 | 価値論 axiology（Moore, Ross）、Schwartz Basic Human Values | values, moral value |
| 意味 | 重要性・意義・生きられた経験としての重み | 現象学的アプローチ、meaning of life 論 | significance, importance, meaning |
| 象徴 | 地位・名誉・威信・記号としての価値 | Bourdieu 象徴資本、Baudrillard 記号価値 | prestige, symbolic value, sign value |

この5分類は複数の既存理論（Spranger, Baudrillard, IPBES, VSD 等）を折衷的に再構成したものであり、単一の学術的出典に帰属しない。Boltanski & Thevenot の正当化レジーム（6秩序）と構造的アナロジーがあるが、B&T は正当化の文法であり価値の分類ではない [10]。

### 日英翻訳ズレ

| 英語 | 主な日本語対応 | ズレのポイント |
|------|--------------|---------------|
| value | 価値 | 日本語「価値」は下記の語の守備範囲をすべて覆う傘語 |
| values | 価値観・信条 | 単数 value（重要性）と混同されやすい。"our values" は通常「価値観」 |
| worth | 値打ち・自己価値 | 「割に合う」ニュアンスが強い（worth it）。倫理的価値は含みにくい |
| utility | 有用性・効用 | 経済学では選好順序の表現であり心理的快楽とは別概念 |
| significance | 意義・重要性 | 「意味」と「重要性」を跨ぐ。統計的有意性にもなる |
| merit | 長所・功績 | 日本語「メリット」は利得寄りだが英語は正当性・功績を含む |
| price | 価格・値段 | 価値の貨幣的表現。価値そのものではない |

「価値がある」の英訳は文脈で分岐する: 高価なら valuable、費用対効果なら worth it、道具的なら useful、意味の深さなら meaningful、優先順位なら important [36, 37]。

### フレームワークの出自と限界

- 上記の5分類は「独自構成」ではなく「既存理論の再構成」。単一の学術的権威に帰属しない
- Pro レポートの4層（交換/道具的/規範的/生きられた重要性）は O'Neill/IPBES の3分類（instrumental/intrinsic/relational）に現象学的「生きられた重要性」を加えた拡張 [19]
- いずれの枠組みも万能ではなく、領域ごとに別の分類が優先される場合がある

## 主要理論の概観

| 理論 | 提唱者 | 要点 | 限界 | 出典 |
|------|--------|------|------|------|
| Basic Human Values | Schwartz (1992) | 10基本価値の円環構造。対立と両立を4高次元で記述 | WEIRD 偏重の標本、自己報告尺度への依存 | [7] |
| 4資本理論 | Bourdieu (1986) | 経済/文化/社会/象徴の4形態。資本間転換と再生産 | 資本概念の過度な拡張、転換率の測定困難 | [9] |
| 人類学的価値論 | Graeber (2001) | 社会学的/経済学的/言語学的の3伝統を統合 | 経験的検証の不足、定義の循環性 | [11] |
| 正当化レジーム | Boltanski & Thevenot (1991) | 6つの正当化秩序。価値衝突を文法として記述 | フランス社会に偏った経験的基盤 | [10] |
| プロスペクト理論 | Kahneman & Tversky (1979) | 参照点依存、損失回避、確率加重 | 記述理論で規範的含意なし、多属性への適用限界 | [6] |
| Active Inference | Friston et al. | extrinsic value と epistemic value の二重構造 | 計算モデルと現象的経験の対応が不明確 | [14] |
| Value Sensitive Design | Friedman et al. (2006) | 技術設計に human values を組み込む三相調査 | 価値の選定基準が不明確、衝突解決手順が弱い | [16] |
| ACT values | Hayes et al. | values = 選ばれた生の方向。柔軟性を重視 | 価値の内容的妥当性を問わない | [18] |
| 使用価値/交換価値 | Smith, Marx | 財の有用性 vs 交換比率の区別 | 労働価値説の経験的反証、限界効用への移行 | [38, 39] |

## 領域横断の論点

| 論点 | 内容 | 強く出る領域 |
|------|------|-------------|
| 客観 vs 主観 | 価値は世界の性質か、評価者と対象の関係か。現実には関係論が増えている | 哲学、経済学、環境倫理 |
| 発見 vs 付与 | 「ある」価値を見出すのか、人間が付与するのか。実務では「設計する」とも言う | 哲学、宗教、AI/HCI |
| 価値 vs 価格 | 価格は価値の貨幣的表現の一部。芸術・尊厳・自然では価格化しにくい価値が残る | 経済学、芸術、環境倫理 |
| 価値 vs 意味 | 価値は「なぜ大事か」、意味は「何を表しどう経験されるか」。significance は両者を跨ぐ | 哲学、臨床、神経現象学 |
| 評価 vs 価値 | 価値は対象側の worth、評価はそれを見積もる行為。混同すると議論が混線する | 経済学、教育、AI |
| 個人 vs 社会 | 価値の主体（誰の価値か）と権威（誰が決めるか）の衝突 | 法学、政治学、社会学 |
| 比較可能性 | 異種の価値を単一尺度に載せられるか。聖性・尊厳・生態系では通約への抵抗が強い | 哲学、環境倫理、公共政策 |
| 価値 vs 欲望/報酬 | 報酬学習モデルは徳・義務・尊厳を表しきれない | 認知科学、神経科学、臨床 |

## 探索すべき問い

「価値」の定義としてまだ定まっていない部分:

- **内在的価値の該当物**: intrinsic value は「それ自体で価値がある」とされるが、何がそれに該当するかは立場で異なる [1, 2]
- **比較可能性**: 異なる種類の価値を共通の尺度で比較できるか（commensurability 問題）[3]
- **事実と価値の境界**: 「価値がある」は記述か規範か（fact-value distinction）[1]
- **概念史の空白**: 日本語「価値」が近代の翻訳語としてどう定着したか。1878年の用例は確認されるが全体像は未整理 [23]
- **生きられた重要性と主観価値の関係**: 認知科学の subjective value と現象学の lived significance は重なるのか切れるのか [14, 40]

## 深掘り候補

| # | テーマ | 問い | 出典入口 |
|---|--------|------|---------|
| 1 | subjective value と生きられた意味 | 認知科学の主観価値と臨床・現象学の「意味あること」はどこで切れるか | [14, 40] |
| 2 | reward prediction error と規範的価値 | 神経科学の報酬学習モデルは徳・義務・聖性をどこまで表現できるか | [15, 41] |
| 3 | sacred values と通約不可能性 | 「売れない価値」はなぜ出てくるのか。法と行動科学の接続 | [42] |
| 4 | 日本語「価値」の概念史 | value/Wert の翻訳史から「価値」の広さの由来を検証する | [23, 43] |
| 5 | Schwartz の価値地図と神経 valuation | 社会心理学の価値観構造と脳内 valuation の接続可能性 | [7, 15] |

## 出典一覧

本調査の出典は二次文献中心である。一次資料への遡及は今後の課題。

### 哲学

| # | 出典 | URL |
|---|------|-----|
| 1 | SEP "Value Theory" | https://plato.stanford.edu/entries/value-theory/ |
| 2 | SEP "Intrinsic vs. Extrinsic Value" | https://plato.stanford.edu/entries/value-intrinsic-extrinsic/ |
| 3 | SEP "Value Pluralism" | https://plato.stanford.edu/entries/value-pluralism/ |
| 4 | SEP "The Meaning of Life" | https://plato.stanford.edu/entries/life-meaning/ |
| 5 | Britannica "Axiology" | https://www.britannica.com/topic/axiology |

### 経済学・行動経済学

| # | 出典 | URL |
|---|------|-----|
| 6 | Kahneman & Tversky (1979) Prospect Theory | https://www.uzh.ch/cmsssl/slaw/dam/jcr:00000000-64a0-1db1-0000-00003b7ec704/10.18-kahneman-tversky-79.pdf |
| 38 | Adam Smith, *Wealth of Nations* | https://www.gutenberg.org/files/3300/3300-h/3300-h.htm |
| 39 | Marx, *Capital* Vol.1 Ch.1 | https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm |

### 社会学

| # | 出典 | URL |
|---|------|-----|
| 7 | Schwartz Basic Human Values 概説 | https://doi.org/10.9707/2307-0919.1116 |
| 8 | Schwartz 価値理論 解説 | https://i2insights.org/2021/11/02/schwartz-human-values/ |
| 9 | Bourdieu "Forms of Capital" PDF | https://home.iitk.ac.in/~amman/soc748/bourdieu_forms_of_capital.pdf |
| 10 | Boltanski & Thevenot "On Justification" | https://press.princeton.edu/books/paperback/9780691123776/on-justification |

### 人類学

| # | 出典 | URL |
|---|------|-----|
| 11 | Graeber "Toward an Anthropological Theory of Value" | https://davidgraeber.org/books/toward-an-anthropological-theory-of-value/ |
| 12 | Mauss, *The Gift* | https://archive.org/details/essaisurledonforme0000maus |

### 認知科学・神経科学

| # | 出典 | URL |
|---|------|-----|
| 14 | Active Inference (MIT Press OA) | https://direct.mit.edu/books/oa-monograph/5299/Active-InferenceThe-Free-Energy-Principle-in-Mind |
| 15 | Reward signals (Scholarpedia) | https://www.scholarpedia.org/article/Reward_signals |
| 40 | Varela neurophenomenology | https://scholar.google.com/scholar?q=Francisco+Varela+neurophenomenology |

### AI・設計

| # | 出典 | URL |
|---|------|-----|
| 16 | VSD Lab 公式 | https://vsdesign.org/ |
| 17 | CIRL (Hadfield-Menell et al., 2016) | https://arxiv.org/abs/1606.03137 |
| 18 | ACT 概説 | https://contextualscience.org/act |

### 経営学

| # | 出典 | URL |
|---|------|-----|
| 28 | Zeithaml (1988) | https://doi.org/10.2307/1251446 |
| 29 | Keller (1993) | https://doi.org/10.1177/002224299305700101 |

### 環境

| # | 出典 | URL |
|---|------|-----|
| 19 | IPBES Values Assessment | https://ipbes.net/the-values-assessment |
| 20 | TEEB | https://teebweb.org/ |
| 21 | SEP "Environmental Ethics" | https://plato.stanford.edu/entries/ethics-environmental/ |

### 法学・政治学・教育

| # | 出典 | URL |
|---|------|-----|
| 22 | OECD Learning Compass 2030 | https://www.oecd.org/education/2030-project/teaching-and-learning/learning/ |
| 30 | Universal Declaration of Human Rights | https://www.un.org/en/about-us/universal-declaration-of-human-rights |
| 31 | SEP "Virtue Ethics" | https://plato.stanford.edu/entries/ethics-virtue/ |

### 美学

| # | 出典 | URL |
|---|------|-----|
| 32 | Britannica "Aesthetics" | https://www.britannica.com/topic/aesthetics |
| 33 | Britannica "Sacred" | https://www.britannica.com/topic/sacred |

### 日本語辞書

| # | 出典 | URL |
|---|------|-----|
| 23 | コトバンク「価値」 | https://kotobank.jp/word/%E4%BE%A1%E5%80%A4-460651 |
| 24 | コトバンク「価値観」 | https://kotobank.jp/word/%E4%BE%A1%E5%80%A4%E8%A6%B3-460652 |

### 英語辞書・語源

| # | 出典 | URL |
|---|------|-----|
| 36 | Cambridge Dictionary "value" | https://dictionary.cambridge.org/dictionary/english/value |
| 37 | Cambridge Dictionary "worth" | https://dictionary.cambridge.org/dictionary/english/worth |
| 43 | Etymonline "value" | https://www.etymonline.com/word/value |

### その他

| # | 出典 | URL |
|---|------|-----|
| 41 | Sacred values 検索入口 | https://scholar.google.com/scholar?q=sacred+values+religion+anthropology |
| 42 | Baudrillard sign value 検索入口 | https://scholar.google.com/scholar?q=Baudrillard+sign+value |

## 方法論ノート（付録）

3つの外部 LLM レポート（GPT-5.2 Thinking, GPT-5.4 Pro, GPT-5 Codex）を入力とし、Codex レポート（PROMPT.md 準拠）を primary source として統合した。出典は二次文献中心であり、一次資料への遡及は今後の課題である。
