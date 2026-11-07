# 今までの規約の見直し

今までの四つの repo にある規約のうち、調べ方・原典の照合・品質の検査・執筆に関わるものの一覧。ここから一つずつ見直して、この repo に入れる。

作成：2026-11-07。一覧は機械で拾った第一稿。

## 見方

- 「pjdhiro」：ファイルの中に pjdhiro の名が出る回数。「発言」：pjdhiro の発言を「」で引いている箇所の数。どちらも、pjdhiro の指摘から生まれた規約かどうかの目安にすぎない。中身を読んで確かめる。
- 版は各 repo の `develop`（2026-11-07 時点）。

## まとまりと進め方の案

| まとまり | 中身 | 案 |
|---|---|---|
| A　pjdhiro の指摘から生まれたもの | 執筆の段階・二元論にしない・平易に・指摘の台帳・執筆ルール・デザインの採否 | 最初に見直す。指摘の趣旨を残し、Claude が足した説明は削る |
| B　原典の取得と照合 | 原典の扱い・出典ノートの不変条件・証拠の進め方 | 一つの規約にまとめ直す。誤りの事例（捏造・転記ミス・未照合の帰属）から要る項目を確かめる |
| C　品質の検査とレビュー | commit 前の品質ループ・チームでのレビュー・読解テスト・各 repo の品質管理 | 一つの手順にまとめ直す。道具立て（エージェントの種類・段階の名前）は最小にする |
| D　生成物の作り方 | wiki・領域レポート・出典ノートの作り方 | 入れない。ページを作るときに要れば、そのとき見直す |
| E　サイトの発見性 | SEO・llms.txt・クエリリンク | サイトの土台を作るときに見直す |

## 一覧

| まとまり | repo | ファイル | 行 | pjdhiro | 発言 | 最初の commit |
|---|---|---|---|---|---|---|
| A | project-design | `.claude/rules/pjdhiro-corrections.md` | 120 | 18 | 1 | 2026-11-03 |
| A | project-design | `.claude/rules/writing-stage.md` | 65 | 14 | 9 | 2026-11-03 |
| A | project-design | `knowledge/research/two-axis-closure/README.md`（§3 執筆ルール） | 194 | 60 | 8 | 2026-07-03 |
| A | project-design | `docs/DESIGN-RULES.md` | 345 | 32 | 13 | 2026-03-26 |
| B | project-design | `knowledge/meta/knowledge-raw-policy.md` | 59 | 0 | 0 | 2026-04-07 |
| B | creation-space | `docs/knowledge-raw-policy.md` | 246 | 4 | 0 | 2026-04-07 |
| B | creation-space | `.claude/rules/source-note-invariants.md` | 133 | 5 | 0 | 2026-04-18 |
| B | creation-space | `.claude/rules/evidence-progress.md` | 88 | 16 | 0 | 2026-03-16 |
| B | awareness-space | `docs/evidence-metadata-awareness.md` | 148 | 12 | 0 | 2026-03-21 |
| C | project-design | `.claude/rules/commit-rules.md`（品質ループ） | 47 | 3 | 0 | 2026-03-25 |
| C | project-design | `.claude/skills/agent-team-workflow/SKILL.md` | 418 | 1 | 0 | 2026-03-30 |
| C | project-design | `.claude/skills/adversarial-review/SKILL.md` | 115 | 4 | 0 | 2026-07-10 |
| C | project-design | `.claude/skills/reader-comprehension/SKILL.md` | 108 | 3 | 0 | 2026-07-08 |
| C | project-design | `.claude/skills/reader-litt-conformance/SKILL.md` | 84 | 2 | 0 | 2026-07-08 |
| C | project-design | `.claude/agents/team-critic.md` | 93 | 0 | 0 | 2026-03-27 |
| C | project-design | `.claude/agents/team-researcher.md` | 69 | 0 | 0 | 2026-03-27 |
| C | creation-space | `docs/quality-management.md` | 164 | 8 | 0 | 2026-03-15 |
| C | creation-space | `.claude/skills/phase-gate/SKILL.md` | 93 | 4 | 0 | 2026-06-12 |
| C | creation-space | `.claude/agents/report-quality-evaluator.md` | 154 | 0 | 0 | 2026-03-25 |
| C | kesson-space | `docs/quality-management.md` | 62 | 1 | 0 | 2026-03-24 |
| C | kesson-space | `.claude/rules/shared-quality.md` | 35 | 0 | 0 | 2026-03-28 |
| C | kesson-space | `.claude/rules/review-gates.md` | 27 | 0 | 0 | 2026-03-28 |
| C | kesson-space | `docs/CLAUDE-CODE-QC.md` | 66 | 0 | 0 | 2026-02-16 |
| C | awareness-space | `docs/quality-management.md` | 35 | 0 | 0 | 2026-03-17 |
| D | project-design | `.claude/skills/wiki-lint/SKILL.md` | 142 | 0 | 0 | 2026-04-06 |
| D | project-design | `docs/research-operations.md` | 146 | 5 | 0 | 2026-03-27 |
| D | project-design | `.claude/agents/evidence-researcher.md` | 32 | 2 | 0 | 2026-03-25 |
| D | project-design | `.claude/agents/theory-explorer.md` | 33 | 1 | 0 | 2026-03-25 |
| D | creation-space | `.claude/skills/source-note-gen/SKILL.md` | 82 | 0 | 0 | 2026-06-12 |
| D | creation-space | `.claude/skills/domain-report/SKILL.md` | 84 | 8 | 0 | 2026-06-12 |
| D | creation-space | `.claude/agents/source-reader.md` | 76 | 0 | 0 | 2026-04-10 |
| D | awareness-space | `docs/report-structure.md` | 84 | 1 | 0 | 2026-03-17 |
| E | project-design | `.claude/rules/seo-llm.md` | 48 | 0 | 0 | 2026-03-27 |

## 対象外にしたもの

セッションの記録・ブランチや worktree の運用・別の AI への作業依頼・シェーダーの実装など、調べ方と執筆に関わらない運用の規約。新しい repo の運用が決まるときに、要るものだけを改めて書く。

## まとまり A の見直し（2026-11-07・案）

入れる先：`docs/rules/writing.md`（公開文の書き方）・`docs/rules/corrections.md`（Claude が繰り返す誤りの型）。

### 入れたもの

- `writing-stage.md` の全項目（発達段階 6.5・二元論にしない・平易にシンプルに・重力と空間の語）。
- 執筆ルール 1〜25 のうち、どのページにも当てはまるもの（声の帰属・主張の水準・文体・構成・AI の読み取り・先回りの補足・追体験）。
- 指摘の台帳の型 A〜M。事例は入れていない。
- Claude の手元のメモにあった pjdhiro の指示のうち、執筆に関わるもの（既存の理論の四行の表・対比は相手ごとに一ページ・原典を読んでいない理論のページの文責・要所をつなぐ記述・物理の主張の三つの区別）。

### 外したもの

| 元の規約 | 外した理由 | 判断 |
|---|---|---|
| 執筆ルール 1（一人称の語り） | ルール 14（文責は Claude・本人の言葉は引用）で置き換えられていた | 外す |
| 執筆ルール 2（数学の定義に三点セット）・3（図にする題材）・4（表にする題材）・6（棄却の三層の表）・19（3 と 7 の主張の水準）・23（回転の見方） | 3 と 7 の読み物だけに向けたもの | 外す |
| 執筆ルール 8（デザイン） | デザインはまとまり E とサイトの土台で見直す | あとで |
| 執筆ルール 7（誠実さを売りにする） | 「売り込みの文を書かない」とぶつかる。趣旨（うまくいかなかった部分も正直に書く）は残すかどうか | **pjdhiro に確かめる** |
| 執筆ルール 11（仮の説明の二層：厳密だとこう／たとえるとこう、後で直す予定と書く） | 数学の題材から生まれたが、ほかの題材にも当てはまりうる | **pjdhiro に確かめる** |
| コンテンツ分類（pjdhiro の視点が骨格で、数学・たとえ・人間関係・補足が支える層） | 3 と 7 の読み物の構成。ただ「本人の視点が骨格」はどのページにも当てはまりうる | **pjdhiro に確かめる** |
| 指摘の台帳の事例（90 件ほど） | 型だけを入れた。事例は今までのページの中身に深く結びついている | **pjdhiro に確かめる**（型ごとに代表例を趣旨で整えて入れるか） |

### Claude が足したもの（確かめてほしい）

- 規約の並べ方（声と帰属・主張の水準・見方の構え・文体・構成・読者と AI・既存の理論・主題ごとの語）。
- 型 N（発言の一つ一つに、すぐ本文を書き換えて返す）と型 O（図の目的を見ない）。台帳の事例（2026-11-05 と 2026-11-06）から立てた。

### 見方と判断の仕方（`docs/rules/stance.md`・2026-11-07 追加）

pjdhiro の指示「移設に必要なルールは pd repo を読み、私の価値観や判断基準などを汲み取ってください。repo の目標はそれを見れば LLM が私と同じように判断できる、というのが理想」を受けて、project-design の対話録（2026-11-05 の常識の擦り合わせ）・love-driven-dev の README §0〜§1・セッションログ（165 本から判定と指摘の行）・指摘の台帳・Issue（pd#155・pd#158）を読み、「pjdhiro ならこう見る・こう決める」を一冊にまとめた。pd#158（本人の判断の仕方と語彙をハーネスへ）の「作るもの」1〜3 に当たる。

- 並べ方（世界の見方／判断の仕方／理論との距離／語彙）は Claude が決めた。
- 「理論との距離」は例として十を選んだ。どれを残すかは pjdhiro に確かめる。
