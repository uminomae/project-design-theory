---
title: "弱い紐帯の強さ"
description: "Granovetter (1973) AJS 論文。社会ネットワークにおいて、情報・影響・機会の広域拡散を担うのは密な強紐帯ではなく、クラスタ間を繋ぐ『弱紐帯（weak ties）』であるという逆説を、禁じられた三項組の数理で示した古典。"
aliases: ["The Strength of Weak Ties", "weak ties", "forbidden triad"]
tags: [source, "D18", "原典解説"]
source:
  repo: "creation-space"
  path: "knowledge/source-notes/D18/D18-S04_granovetter-1973.md"
  manifest_id: "D18-S04"
  oa_url: "https://snap.stanford.edu/class/cs224w-readings/granovetter73weakties.pdf"
compiled: "2026-04-18"
status: 暫定
review_state: 未レビュー
---

# 弱い紐帯の強さ

> **高校生向けのやさしい解説**
>
> 仕事や住居を見つけたり、噂を遠くまで広めたりするとき、実は「親しい友人」より「久しぶりに会う知り合い」の方が役に立つ——これが「弱い紐帯の強さ」というアイデアです。親しい友人同士は同じグループに属しているので情報が重なる。一方、たまにしか会わない人は別のグループとつながっており、こちらに無い情報を持っている。グラノヴェッターは、この直感を「禁じられた三項組」というシンプルな数理で証明しました。社会ネットワーク分析の出発点。

## 概要

Granovetter (1973) は社会ネットワーク分析をミクロ（対人的相互作用）とマクロ（社会移動・コミュニティ組織・政治構造）を接続する道具として提案し、その例示として「紐帯強度」の概念を精緻化する。紐帯の強さは「接触時間・情緒的強度・親密さ・相互サービス」の線形結合として定義され、強紐帯同士が共通する第三者を介して推移的に結び付きやすい（禁じられた三項組: forbidden triad）という仮説から、「橋（bridge）になりうる紐帯は弱紐帯に限られる」という帰結を導く。情報・影響・機会の広域拡散においては、密な強紐帯クラスタ内ではなくクラスタ間を繋ぐ弱紐帯の方が決定的な役割を果たす。直観的には「弱い」ものが構造的には「強い」機能を持つという逆説を、単純な数理モデルと経験証拠で示す。

## 主要概念

**紐帯強度の定義**

> "the strength of a tie is a (probably linear) combination of the amount of time, the emotional intensity, the intimacy (mutual confiding), and the reciprocal services which characterize the tie." (p.1361)

操作的測定は将来研究に委ね、当面は強・弱・不在の直観的区別で議論。

**強紐帯は推移的結合を生みやすい**

> "the stronger the tie between A and B, the larger the proportion of individuals in S to whom they will both be tied" (p.1362)

根拠: 強紐帯は時間投資を伴うため C が A と B の両方と時間共有しやすい。Heider/Newcomb の認知的バランス理論によれば、C が A と B 双方と強く繋がる場合、A-B が強紐帯なら心理的均衡が形成される。

**禁じられた三項組（forbidden triad）**

> "The triad which is most unlikely to occur ... is that in which A and B are strongly linked, A has a strong tie to some friend C, but the tie between C and B is absent." (p.1363)

議論の単純化のため「この三項組は決して現れない」と仮定する。Figure 1 の forbidden triad。

**橋になりうる紐帯は弱紐帯のみ**

> "if the stipulated triad is absent, it follows that, except under unlikely conditions, no strong tie is a bridge." (p.1364)

強紐帯は禁止三項組により推移的に迂回経路を生むため、通常は橋になれない。「すべての橋は弱紐帯である」（ただし逆は偽）。

**local bridge が拡散の要**

> "In large networks it probably happens only rarely, in practice, that a specific tie provides the *only* path between two points. The bridging function may nevertheless be served *locally* ... only weak ties may be local bridges." (p.1365)

完全なグローバル橋は稀だが、局所的に「代替経路が指定距離 n 以上」の local bridge は多数存在し、すべて弱紐帯。

**弱紐帯は大きな社会的距離を横断する**

> "whatever is to be diffused can reach a larger number of people, and traverse greater social distance ... when passed through weak ties rather than strong." (p.1366)

強紐帯クラスタは閉じやすく、噂や情報は cliques 内部で周回する。これが「イノベーション拡散」で marginal な個人が決定的役割を果たす機序の理論的基礎。

## 方法

概念的・数理的アプローチ。ネットワーク分析の用語（bridge, degree, triad, path length）を社会学的議論に応用。Davis (1970) の 651 sociograms 解析、Newcomb (1961), Kerckhoff & Back (1968) のヒステリー集団伝染研究、Milgram (1967) の small-world 研究を引用。Forbidden triad を理想化仮定として明示し、その帰結を導く論法。

## プロジェクトデザインとの関連

「結合の強度と機能の逆説」（弱いものが構造的に強い）という観察は、project-design における「縁（境界）の役割」と直接接続する。とくに local bridge としての弱紐帯は、組織やコミュニティを「閉じたクラスタの集合」ではなく「弱い橋でつながる多数のクラスタ」として捉え直す視点を提供する。社会ネットワーク分析全般の出発点として、PD 論における関係構造の議論で頻繁に参照される基底文献。

## 書誌情報

- 著者: Mark S. Granovetter
- 年: 1973
- 出典: *American Journal of Sociology* 78(6), 1360–1380
- access_status: url-verified
- **DOI**: [10.1086/225469](https://doi.org/10.1086/225469)
- **オープンアクセス**: [Stanford SNAP mirror PDF](https://snap.stanford.edu/class/cs224w-readings/granovetter73weakties.pdf) / [JSTOR](https://www.jstor.org/stable/2776392)

## ソース参照（GitHub・検証用）

- **cs 原典ファイル**: [knowledge/source-notes/D18/D18-S04_granovetter-1973.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D18/D18-S04_granovetter-1973.md)（manifest_id: `D18-S04`）
- **cs 精読ノート**: [knowledge/source-notes/D18/D18-S04_granovetter-1973.md](https://github.com/uminomae/creation-space/blob/main/knowledge/source-notes/D18/D18-S04_granovetter-1973.md)
- **この wiki ページ（pd）**: [wiki/sources/D18_granovetter_1973_1973.md](https://github.com/uminomae/project-design-theory/blob/main/wiki/sources/D18_granovetter_1973_1973.md)
- **参照先（原典 DOI / オープンアクセス）**: 下記「書誌情報」を参照

## 出典メモ

- cs 側読解: `creation-space/knowledge/source-notes/D18/D18-S04_granovetter-1973.md`（2026-04-13、Claude Opus 4.6, Read PDF pp.1360-1368 抜粋）
- 本ページは cs 要約を一次入力として pd 形式に再編した（pd#81 Phase B-2）
