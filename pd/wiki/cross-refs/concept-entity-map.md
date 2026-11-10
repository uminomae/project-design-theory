---
title: "Concept-Entity Map"
source:
  - repo: "pd"
    path: "knowledge/research/kesson-bridge.md"
  - repo: "pd"
    path: "knowledge/concepts/CN-008_pd-bridge-holding-issues.md"
  - repo: "pd"
    path: "knowledge/research/design-thinking/design-thinking-integrated.md"
  - repo: "pd"
    path: "knowledge/research/value/value-integrated.md"
  - repo: "pd"
    path: "knowledge/research/trust/trust-integrated.md"
  - repo: "pd"
    path: "knowledge/concepts/CN-005_trust-hypothesis-inventory.md"
  - repo: "pd"
    path: "knowledge/concepts/CN-006_trust-analysis-axes.md"
  - repo: "pd"
    path: "knowledge/evidence/awareness-model/hatfield-1993-emotional-contagion.md"
  - repo: "pd"
    path: "src/content/site-data.mjs"
  - repo: "ks"
    path: "knowledge/schema/core-definitions.md"
  - repo: "ks"
    path: "knowledge/text/foundation/phase1-summary.md"
compiled: "2026-11-10"
tags: [cross-ref, map]
status: 暫定
review_state: 未レビュー
---

# Concept-Entity Map

> **高校生向けのやさしい解説**
>
> このページは、この wiki の「考え方」のページ（concepts）と、「人物・理論」のページ（keywords）が、どう結びついているかを表にまとめた索引です。結びつきには二通りあります。もとの研究ノートに対応がはっきり書いてあるものと、wiki のページどうしがリンクで結ばれているだけのものです。表では、この二つを分けて並べています。

wiki の `concepts/`（と根の [[プロジェクトデザイン]]）のページと、`keywords/` の人物・理論のページの対応を並べる。対応は、各ページの front matter の `related_concepts` と本文のリンクから拾った。そのうえで、概念ページが材料にしている正本に、その対応が書かれているかを確かめた。

## 人物・理論ごとの対応

「正本に書いてある」は、正本の中に、その人物・理論とその概念の対応の記述があるもの。「リンクだけ」は、wiki のページの間にリンクはあるが、正本の中に対応の記述が見つからなかったもの。

| 人物・理論 | 正本に書いてある概念 | リンクだけの概念 |
|---|---|---|
| [[アネット・ベイアー]] | [[信頼]] | [[抱持]]・[[PDブリッジ保持論点]] |
| [[アブダクション]] | [[デザイン思考（PD）]]・PDブリッジ保持論点・[[欠損駆動思考]] | — |
| [[ウィキッド・プロブレム]] | デザイン思考（PD）・PDブリッジ保持論点・[[欠損]]・欠損駆動思考 | — |
| [[シュワルツの基本的価値理論]] | [[価値]] | [[感情処理]]・プロジェクトデザイン |
| [[デイヴィッド・グレーバー]] | — | [[間主観性]]・プロジェクトデザイン |
| [[デザイン思考]] | デザイン思考（PD）・PDブリッジ保持論点・欠損駆動思考・プロジェクトデザイン | — |
| [[ドナルド・ショーン]] | デザイン思考（PD）・抱持 | 欠損駆動思考・PDブリッジ保持論点 |
| [[ナイジェル・クロス]] | デザイン思考（PD） | 欠損駆動思考 |
| [[ニクラス・ルーマン]] | 信頼 | PDブリッジ保持論点 |
| [[ネガティブケイパビリティ]] | 抱持 | 欠損駆動思考・[[情動の構成]]・間主観性・信頼・感情処理・PDブリッジ保持論点・欠損・[[情動伝染]] |
| [[ピエール・ブルデュー]] | 価値 | 間主観性・プロジェクトデザイン |
| [[プロスペクト理論]] | 価値 | 感情処理・欠損駆動思考・欠損 |
| [[山岸俊男]] | 信頼・抱持 | PDブリッジ保持論点 |
| [[愛着理論]] | 信頼・抱持・情動伝染 | [[測定設計原則]] |
| [[Value Sensitive Design]] | — | [[Love 駆動開発]]・プロジェクトデザイン |

人物・理論のページと結びついていない概念ページは、[[アウェアネスモデル]]・[[内受容感覚]]・[[創造の5段階モデル]] の三つ。[[wikilink]] は wiki の書き方の説明で、リンクは書き方の例なので、この表に入れていない。

## 正本に書いてある対応

| 人物・理論 | 概念 | 正本 | 正本に書かれていること |
|---|---|---|---|
| アネット・ベイアー | 信頼 | pd `research/trust/trust-integrated.md` | 哲学の信頼論として Baier の vulnerability account を挙げ、Baier (1986) 以降、信頼を脆弱性から切り離せないとする議論が強いと書く |
| アブダクション | デザイン思考（PD） | pd `research/design-thinking/design-thinking-integrated.md` | abduction をデザイン思考の中核に置き、design framing を abduction の設計的な拡張とする Dorst (2011) の見方を、完全な同一視ではないと添えて書く |
| アブダクション | PDブリッジ保持論点 | pd `concepts/CN-008_pd-bridge-holding-issues.md` | H-2 で、欠損駆動思考から抱持を経て frame creation に至る筋を公式化できるかを、保持論点として置く |
| アブダクション | 欠損駆動思考 | pd `research/kesson-bridge.md`・ks `schema/core-definitions.md` | ブリッジは、欠損駆動思考を abduction の前の態度と位置づけ、design 固有の abduction（abduction-2）との接続を「部分的」とする。コア定義は、欠損駆動思考はアブダクションに似るが、アブダクションの定義が曖昧なので、最後は「違い」か「再定義」になるかもしれないと書く |
| ウィキッド・プロブレム | デザイン思考（PD） | pd `research/design-thinking/design-thinking-integrated.md` | Rittel & Webber (1973) が wicked problems を示し、Buchanan (1992) がデザイン思考に結びつけたと書く |
| ウィキッド・プロブレム | PDブリッジ保持論点・欠損 | pd `concepts/CN-008_pd-bridge-holding-issues.md` | H-4 で、wicked problems を欠損の5類型が束になった「複合欠損」として書けるかを問う。原典の10特性との対応は未検証とする |
| ウィキッド・プロブレム | 欠損駆動思考 | pd `research/kesson-bridge.md` | デザイン思考から欠損駆動思考への節で、同じ問いを浮上した問いとして挙げ、推測の仮説として保持論点に回す |
| シュワルツの基本的価値理論 | 価値 | pd `research/value/value-integrated.md` | 価値の五つの問題系の「規範」に Schwartz の Basic Human Values を置き、10 の基本価値の円環構造として挙げる |
| デザイン思考 | デザイン思考（PD） | pd `research/design-thinking/design-thinking-integrated.md` | 概念ページの材料そのもの。デザイン思考を、設計学的思考・Stanford-IDEO 型の教育実践・経営コンサルのパッケージの三層が混ざったものとして書く |
| デザイン思考 | PDブリッジ保持論点 | pd `concepts/CN-008_pd-bridge-holding-issues.md` | 保持論点は、価値・信頼・デザイン思考の三つのテーマの調査から、欠損駆動思考の概念への接続を確かめた結果として置かれる |
| デザイン思考 | 欠損駆動思考 | pd `research/kesson-bridge.md`・ks `text/foundation/phase1-summary.md` | ブリッジは、デザイン思考のレポートの知見を欠損駆動思考と抱持に接続する節を持つ。phase1-summary は、命名の節で、デザイン思考・アジャイル開発との類比で層を分ける |
| デザイン思考 | プロジェクトデザイン | pd `src/content/site-data.mjs` | サイトの調査ノートの一つに「デザイン思考とは」を置く |
| ドナルド・ショーン | デザイン思考（PD） | pd `research/design-thinking/design-thinking-integrated.md` | 設計学的思考の研究者の一人とし、Schön (1983) の reflection-in-action を挙げる |
| ドナルド・ショーン | 抱持 | pd `research/kesson-bridge.md` | Schön の reflection-in-action と抱持の循環を「共鳴」とする。くり返し更新するループを持つ点が似ていて、主語が違う |
| ナイジェル・クロス | デザイン思考（PD） | pd `research/design-thinking/design-thinking-integrated.md` | Cross (1982) が、design を sciences・humanities と並ぶ独自の知の様式としたと書く |
| ニクラス・ルーマン | 信頼 | pd `research/trust/trust-integrated.md` | Luhmann (1979) の confidence と trust の区別を挙げる |
| ネガティブケイパビリティ | 抱持 | ks `schema/core-definitions.md` | 抱持の関連概念に Keats の negative capability を挙げ、抱持の成立条件の L2-L3（認知的枠組み）の例に入れる |
| ピエール・ブルデュー | 価値 | pd `research/value/value-integrated.md` | 価値の問題系の「象徴」に Bourdieu の象徴資本を置き、4資本の理論として挙げる |
| プロスペクト理論 | 価値 | pd `research/value/value-integrated.md` | 価値の問題系の「効用」に置き、参照点依存・損失回避・確率加重として挙げる |
| 山岸俊男 | 信頼 | pd `research/trust/trust-integrated.md`・pd `concepts/CN-006_trust-analysis-axes.md` | 山岸 (1998) の安心と信頼の区別を挙げる。分析の軸のノートは、山岸の「安心」が生存軸の側に立ち、日常語の「安心」は信頼軸の側に立つと書く |
| 山岸俊男 | 抱持 | pd `research/kesson-bridge.md` | 山岸の安心と信頼の区別と、抱持の成立条件の四つの層を「共鳴」とする。分析の軸が違うので、直接の対応ではないと添える |
| 愛着理論 | 信頼 | pd `research/trust/trust-integrated.md`・pd `concepts/CN-005_trust-hypothesis-inventory.md`・pd `concepts/CN-006_trust-analysis-axes.md` | 信頼の研究の分野に愛着理論（Bowlby の内的作業モデル）を挙げる。仮説の目録は、安全基地が内的作業モデルとして成り立った状態を仮説の一つに置く |
| 愛着理論 | 抱持 | ks `schema/core-definitions.md` | 抱持の成立条件の L0-L1（自律神経の調整）の根拠に Bowlby を挙げる |
| 愛着理論 | 情動伝染 | pd `evidence/awareness-model/hatfield-1993-emotional-contagion.md` | 情動調律の崩壊や愛着の不全が、長い目で見た健康に影響することを挙げる |

正本のパスは、pd・ks の `knowledge/` からのパス（`src/content/site-data.mjs` だけは pd の根から）。

### 接続の強さ

`pd/knowledge/research/kesson-bridge.md` は、価値・信頼・デザイン思考の調査と欠損駆動思考の概念との接続に、強さの印を付けている。印は、堅牢（critic の検証済み）・共鳴（働きが似ているが、分析の軸が違う）・部分的（抽象の水準で似ている）の三つ。このうち、人物・理論の名で書かれている接続は次のとおり。このブリッジの文書は、ドラフト（pjdhiro の確認待ち）と書かれている。

| 接続 | 強さ |
|---|---|
| 山岸の安心と信頼 ↔ 抱持の成立条件の四つの層 | 共鳴 |
| Schön の reflection-in-action ↔ 抱持の循環 | 共鳴 |
| 欠損駆動思考 ↔ abduction-2（design 固有の abduction） | 部分的（時の前後の依存がある） |
| wicked problems ↔ 欠損の複合欠損 | 推測の仮説として保持論点に回す |

「堅牢」とされた接続（信頼の脆弱性 ↔ 抱持の成立条件 など）は、人物・理論の名では書かれていない。

## リンクだけの対応

正本の中に対応の記述が見つからなかったもの。どちらのページのリンクかを添える。「概念→」は概念ページの側、「人物→」は人物・理論のページの側にリンクがある。

| 人物・理論 | 概念 | リンク | 正本について |
|---|---|---|---|
| アネット・ベイアー | 抱持 | 人物→（related_concepts・本文） | 信頼の統合レポートは Baier を脆弱性の議論に置き、ブリッジは信頼の脆弱性と抱持を結ぶ。ブリッジに Baier の名は無い |
| アネット・ベイアー | PDブリッジ保持論点 | 人物→（本文） | CN-008 に Baier の名は無い |
| シュワルツの基本的価値理論 | 感情処理 | 人物→（related_concepts・本文） | 価値の統合レポートに、感情処理との対応は無い |
| シュワルツの基本的価値理論 | プロジェクトデザイン | 人物→（本文） | — |
| デイヴィッド・グレーバー | 間主観性 | 人物→（related_concepts） | 価値の統合レポートは Graeber を人類学の価値論として挙げるが、間主観性との対応は無い |
| デイヴィッド・グレーバー | プロジェクトデザイン | 人物→（本文） | — |
| ドナルド・ショーン | 欠損駆動思考 | 人物→（related_concepts・本文） | ブリッジが Schön を結ぶ先は抱持の循環 |
| ドナルド・ショーン | PDブリッジ保持論点 | 人物→（本文） | CN-008 に Schön の名は無い |
| ナイジェル・クロス | 欠損駆動思考 | 人物→（本文） | — |
| ニクラス・ルーマン | PDブリッジ保持論点 | 人物→（本文） | CN-008 に Luhmann の名は無い |
| ネガティブケイパビリティ | 欠損駆動思考 | 人物→（related_concepts・本文） | コア定義が negative capability を挙げるのは抱持の節 |
| ネガティブケイパビリティ | 情動の構成 | 人物→（related_concepts・本文） | ks のコア定義の情動の構成の節に、negative capability の名は無い |
| ネガティブケイパビリティ | 間主観性 | 人物→（related_concepts・本文） | — |
| ネガティブケイパビリティ | 信頼 | 概念→（related_concepts・本文） | 仮説の目録の H10（誤差を問いとして保持する心的空間）は抱持と結ぶが、negative capability の名は無い |
| ネガティブケイパビリティ | 感情処理 | 概念→（本文） | ks の臨床心理学の part5 は、参考文献に Keats (1817) を載せる。本文の対応の記述は見つからなかった |
| ネガティブケイパビリティ | PDブリッジ保持論点 | 概念→（本文） | CN-008 は「急いで解かない」を書くが、negative capability の名は無い |
| ネガティブケイパビリティ | 欠損 | 人物→（本文） | — |
| ネガティブケイパビリティ | 情動伝染 | 人物→（本文） | — |
| ピエール・ブルデュー | 間主観性 | 人物→（related_concepts） | — |
| ピエール・ブルデュー | プロジェクトデザイン | 人物→（本文） | — |
| プロスペクト理論 | 感情処理 | 人物→（related_concepts・本文） | — |
| プロスペクト理論 | 欠損駆動思考 | 人物→（related_concepts・本文） | — |
| プロスペクト理論 | 欠損 | 概念→・人物→（本文） | 欠損の概念ページは参照点依存と欠損の評価が「共鳴する」と書くが、ks の正本にプロスペクト理論の名は無い |
| 山岸俊男 | PDブリッジ保持論点 | 人物→（本文） | CN-008 に山岸の名は無い |
| 愛着理論 | 測定設計原則 | 概念→・人物→ | CN-007 は縦断の表象の指標に AAI を挙げるが、愛着理論の名は無い |
| Value Sensitive Design | Love 駆動開発 | 人物→（related_concepts・本文） | 価値の統合レポートは VSD を挙げるが、Love駆動開発の読み物に VSD の名は無い |
| Value Sensitive Design | プロジェクトデザイン | 人物→（related_concepts・本文） | — |

「—」は、どちらの側の正本にも、対応に当たる記述が見つからなかったもの。

## 人物・理論どうしのつながり

`keywords/` のページどうしのリンク。

| 人物・理論 | つながる人物・理論 |
|---|---|
| アネット・ベイアー | ニクラス・ルーマン |
| アブダクション | デザイン思考 |
| ウィキッド・プロブレム | デザイン思考 |
| デザイン思考 | アブダクション・ウィキッド・プロブレム・ドナルド・ショーン・ナイジェル・クロス |
| ドナルド・ショーン | デザイン思考・ウィキッド・プロブレム |
| ナイジェル・クロス | デザイン思考・アブダクション |
| ニクラス・ルーマン | 山岸俊男 |
| ネガティブケイパビリティ | デザイン思考 |
| 山岸俊男 | ネガティブケイパビリティ |

## 出典メモ

- 表の対応は、2026-11-10 の `pd/wiki/concepts/`・`pd/wiki/keywords/`・`pd/wiki/プロジェクトデザイン.md` の front matter（`related_concepts`）と本文のリンクから拾った。「リンクだけの対応」の根拠は、wiki の中のページだけ。
- 「正本に書いてある対応」の正本は、概念ページの `source` に挙がっているもの。ただし `pd/knowledge/research/kesson-bridge.md` は、概念ページの `source` には無い。人物・理論のページ（アブダクション・ウィキッド・プロブレム・山岸俊男・愛着理論）の `source` にあり、CN-008 の起源と書かれている。接続の強さの印もこの文書にあるので、正本に入れた。
- 前の版にあった「堅牢・共鳴・部分的・保持・参照」の印のうち、正本で確かめられたのは上の「接続の強さ」の行だけ。ほかの印（ベイアー ↔ PDブリッジ保持論点 の「堅牢」など）は、正本に当たる記述が見つからなかったので外した。前の版の表で人物・理論の行にあった欠損・欠損駆動思考・抱持・情動の構成・間主観性・内受容感覚・創造の5段階モデルは、今は `concepts/` のページなので、行から外した。
