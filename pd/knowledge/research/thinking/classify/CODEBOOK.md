# 思考の定義の符号化の表（コードブック）

2026-11-25。pjdhiro「まず思考についてどう言われてきたか、歴史的なことを簡単にあげ、それを分類するように整理し、使用する場所、使用する道具など、いくつかの視点で整理してほしい。整理の分類のやり方は因子分析など、claudeが得意だと思うので統計的にやってほしい。」への作業の土台。

## 決まり

- 一行は一つの定義（`definitions.csv`）。原典の本文で照らした文だけを材料にする（`../README.md` の §1〜§11 の鍵の文）。
- 各列は 0 か 1。**その定義の文（と、同じ段にある著者自身の例）が、はっきり言っているか、直に例に挙げているときだけ 1**。読み込んで推すものは 0。迷えば 0。
- 視点（列の束）は、pjdhiro が名指した「使う場所」「使う道具」に、Claude が「働き」「場面」「性格」の三つを足した。列の名前を選んだのは Claude で、原典の分け方ではない。

## 列

### 場所：考えることが、どこで起きると書いているか

| 列 | 意味 | 1 にする手がかり |
|---|---|---|
| P1 | 魂・心の内 | soul・mind（心という場所） |
| P2 | 意識の場 | conscious・consciousness の中で起きるもの |
| P3 | 頭・脳（情報の処理） | 頭・脳・information processing・mental representations |
| P4 | 体 | 体・body・感覚と運動の仕組み |
| P5 | 頭の外 | 環境・世界の一部・道具が考える働きに入る |

### 道具：考えるとき、何を使うと書いているか

| 列 | 意味 | 手がかり |
|---|---|---|
| T1 | 言葉 | 話す・対話・language |
| T2 | 像・知覚 | image・perceive・imagine・知覚に似た働き |
| T3 | 概念・規則 | concept・rule・principle・仮設（hypothesis） |
| T4 | 記号・表象 | symbol・representation |
| T5 | 根拠・証拠 | grounds・evidence・basis |
| T6 | 経験則 | heuristic・rule of thumb |
| T7 | 外の道具 | ノート・紙と鉛筆・指 |
| T8 | 感覚と体の動き | sensory・motor |

### 働き：考えることで、何をすると書いているか

| 列 | 意味 | 手がかり |
|---|---|---|
| W1 | 引き比べる・結ぶ | 比べる・uniting・suggest（一つが別のものを示す）・associative |
| W2 | 判断する | judge・affirm・deny・opinion |
| W3 | 探す・問題を解く | problem solving・search |
| W4 | 根拠に照らして確かめる | in the light of the grounds・evidence を確かめる |
| W5 | 段を踏む | 仮設から結論へ下る・consecutive・serial・step-by-step |
| W6 | 形を受け取る | receive the form |
| W7 | 流れる・よぎる | stream・goes through our minds・daydream・free association |
| W8 | 表象を作り替える | transformation・manipulate representations |
| W9 | 問いと答え | asking questions and answering them |

### 場面：その定義が、どこでの考えることを例にしているか

| 列 | 意味 | 手がかり |
|---|---|---|
| S1 | 日常の暮らし | 日々の例（天気・値段・物思い） |
| S2 | 学問・数学 | 幾何学・科学・学問の例 |
| S3 | 教え・学び | 教育・訓練・教科書 |
| S4 | 判断と選択・仕事 | decision・judgment and choice・business・診断・投資 |

### 性格：考えることを、どういうものとして書いているか

| 列 | 意味 | 手がかり |
|---|---|---|
| C1 | 意識されることが前提 | conscious of it |
| C2 | 努力と意図が要る | effortful・deliberate・active, persistent |
| C3 | 目的に向かう | goals・problem を解くため |
| C4 | 速く自動 | fast・automatic |
| C5 | 心の働きのすべてに及ぶ | every form of consciousness・all that takes place in us・grand superordinate |
