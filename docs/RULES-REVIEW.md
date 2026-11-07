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
| D | creation-space | `cs/evidence/RULES-creation-space.md`（もとは `evidence/CLAUDE.md`。入れるまで自動で読まれないよう、2026-11-07 に名前を変えた） | 7 | 0 | 0 | — |
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

### 外したもの・確かめたもの

| 元の規約 | 外した理由 | 判断 |
|---|---|---|
| 執筆ルール 1（一人称の語り） | ルール 14（文責は Claude・本人の言葉は引用）で置き換えられていた | 外す |
| 執筆ルール 2（数学の定義に三点セット）・3（図にする題材）・4（表にする題材）・6（棄却の三層の表）・19（3 と 7 の主張の水準）・23（回転の見方） | 3 と 7 の読み物だけに向けたもの | 外す |
| 執筆ルール 8（デザイン） | デザインはまとまり E とサイトの土台で見直す | あとで |
| 執筆ルール 7（誠実さを売りにする） | 「売り込みの文を書かない」とぶつかる。後の補正（2026-07-05「半信半疑のメモ。無理に論を勝たせる姿は恥ずかしい」、2026-11-05「読み物は事例の報告。ピッチでも売り込みでもない」）が stance 2-6 に入っている | 外す（pjdhiro 2026-11-07） |
| 執筆ルール 11（仮の説明の二層：厳密だとこう／たとえるとこう、後で直す予定と書く） | 数学の題材から生まれた（2026-07-03「過度な解釈も厳密一辺倒も無理。仮の説明として後から修正予定を明記」） | どの題材にも広げて writing.md §2-8 に入れた（pjdhiro 2026-11-07。理由「言葉は渦のようなもので認知できるが、周辺の波と切り離して誤解を招くから」。stance 1-1 に足した） |
| コンテンツ分類（pjdhiro の視点が骨格で、数学・たとえ・人間関係・補足が支える層） | 3 と 7 の読み物の構成。「本人の視点が骨格」の趣旨は stance 1-4・writing 5-8・型 A に入っている。文字どおり入れると型 M（発言を骨格に並べる）を誘う | 入れない（pjdhiro 2026-11-07） |
| 指摘の台帳の事例（90 件ほど） | 型だけではニュアンスが伝わらない。一部は非公開の repo に触れる | 型ごとに代表例を一、二件、趣旨で整えて corrections.md に入れた（pjdhiro 2026-11-07）。選んだのは Claude。pjdhiro の確かめ（2026-11-07）：「とりあえずとしては問題ない。修正していく積み重ねが大事」 |

### Claude が足したもの（確かめてほしい）

- 規約の並べ方（声と帰属・主張の水準・見方の構え・文体・構成・読者と AI・既存の理論・主題ごとの語）。
- 型 N（発言の一つ一つに、すぐ本文を書き換えて返す）と型 O（図の目的を見ない）。台帳の事例（2026-11-05 と 2026-11-06）から立てた。どちらも元の事例に pjdhiro の言葉がある（corrections.md の代表例）。

### 見方と判断の仕方（`docs/rules/stance.md`・2026-11-07 追加）

pjdhiro の指示「移設に必要なルールは pd repo を読み、私の価値観や判断基準などを汲み取ってください。repo の目標はそれを見れば LLM が私と同じように判断できる、というのが理想」を受けて、project-design の対話録（2026-11-05 の常識の擦り合わせ）・love-driven-dev の README §0〜§1・セッションログ（165 本から判定と指摘の行）・指摘の台帳・Issue（pd#155・pd#158）を読み、「pjdhiro ならこう見る・こう決める」を一冊にまとめた。pd#158（本人の判断の仕方と語彙をハーネスへ）の「作るもの」1〜3 に当たる。

- 並べ方（世界の見方／判断の仕方／理論との距離／語彙）は Claude が決めた。
- 「理論との距離」は例として十を選んだ。どれを残すかは pjdhiro に確かめる。

## まとまり B の見直し（2026-11-07・案）

入れる先：`docs/rules/sources.md`（調べ方と原典の照合）。

pjdhiro の指示「pd repo をよく読んで判断基準を見つけてから」に沿って、規約の文面より先に、project-design のセッションログ・指摘の台帳（型 H の行）・調査の共通指示（pd#151 の BRIEF・最も新しい形）・Claude の手元のメモ（正確な調査・物理の三つの区別・一次まで遡る・論文取得の教訓）から、調べることへの pjdhiro の判断を拾ってから組んだ。

### 入れたもの

- 正確な調査が第一・新しい視点は区別・研究は一面で演繹しない・物理は視点を得るため（pjdhiro の判断）
- 文献から調べる・言葉の定義を大切に・原典に無い体系を作らない・兄弟の論を先に見る（指摘）
- 照合の状態の四つ（本文照合済／要旨照合済／二次資料のみ／未照合（記憶））・帰属・引用先との突き合わせ・出典の向き
- 節を頭から読む・鍵の文は原文で短く
- 取得の規律（四つ以上の経路・叩かない・中身で判断・書誌の突き合わせ・有料の手段は pjdhiro）
- 物理の主張の三つの区別・数は一次まで遡る
- 原典ファイルを公開 repo に入れない

### 外したもの

| 元の規約 | 外した理由 |
|---|---|
| 原典の格納先の階層・命名規則・LFS（project-design・creation-space の原典ポリシー） | 原典をこの repo に入れないので要らない。非公開の repo を正本とする書き方も外した |
| manifest・出典ノートの 1:1・領域ごと 5 本以上・Check 番号つきの機械検査（creation-space） | 創造とは の 30 領域の調査の道具。この repo で同じ規模の調査をするときに改めて考える |
| 取得経路ごとの成否の表（ホスト名つき） | 経路の成否は時期で変わる。「叩かない」「中身で判断」の趣旨だけ残した |

### 確かめてほしいこと

1. **鎖の規約**（creation-space）：→ **決定（2026-11-07）：未照合と書いて載せる**（sources.md §3-3）。誰でも確かめられる形で入手できない原典の上には、公開の解釈やまとめを置かず、「読みたいリスト」にだけ載せる。一方、project-design の読み物では「未照合（記憶）」と明記して載せてきた。この repo ではどちらにするか。
2. **今までの書誌の使い方**（sources.md §9.4）：今までの調査結果にあった書誌を、探す手がかりとして使い、書誌自体も確かめ直す、とした。 → **この案のままで commit（2026-11-07）**。

## ハーネスの見直し（2026-11-07）

pjdhiro の指示「一つ一つファイルの中身を見て、今の環境下で必要かを考えて、明確なものは複製、不要なものは複製しない、判断に迷うものはファイル名だけ作り、必要な時に中身を複製したり新設したりする」に沿って、四つの repo のハーネス（`.claude/` と `.github/workflows/`）を読んで分けた（#62）。今までの repo は、この見直しに限って GitHub のアーカイブから読んだ（pjdhiro 2026-11-07）。

- 入れたもの：`.claude/settings.json`・`.claude/hooks/content-compile.sh`・`.claude/launch.json`
- 名前だけ置いたもの：`docs/harness-pending/`（66 ファイル）
- 分けた理由は、一つずつ `docs/harness-pending/README.md` に書いた

見つけたこと：今までの四つの repo の `.claude/hooks.json` は Claude Code が読まない置き場で、そこに書かれた見張りの hooks は動いていなかった。
