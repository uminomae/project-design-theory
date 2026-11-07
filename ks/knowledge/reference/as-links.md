# awareness-space 参照台帳（as-links）

**目的**: kesson-space（ks）から awareness-space（as）を参照する箇所を、このファイル 1 つに集約する。as が更新されたら、ここの SHA・日付・行番号だけを直す。本文の各所に as の URL を散らさない。
**方針の出所**: `docs/issues/ISS-216-candidate-survey.md` §3「awareness-space との分担と、切れないリンク」（2026-11-02）／uminomae/awareness-space#149「ks からの参照（リンク切れ対策）」
**分担**: 「意識とは」に関する知見は as に残す（pjdhiro・2026-11-02）。ks は結果をリンクで参照し、写さない。「気づき」の定義は as#149 で立てる。
**作成**: 2026-11-02（pjdhiro 承認）

## 0. ピン（いまの固定点）

| 項目 | 値 |
|---|---|
| as `develop` | `a6519ef6758c6282f34cb4fd3fa10e3e1ace831b`（2026-11-02） |
| as `main` | `61c8967`（develop より 13 コミット後ろ。GitHub Pages は main から配信） |
| 前回のピン | `e2ad04cb5e318eb2826d55964cb1cb8ade811549`（ISS-216 §3・lane2 の棚卸し時点。そこに書いた permalink はコミット固定なので有効） |

⚠️ **branch 無指定の URL（`blob/` の次が無い・`tree/main`）は main を指す**。入口は必ず `blob/develop/`、文言の引用は必ずコミット固定（§2）。

## 1. 安定入口（branch URL。ファイル名は動かさない約束＝as#149）

| 入口 | URL | 何があるか |
|---|---|---|
| 正本一覧 | https://github.com/uminomae/project-design-theory/blob/main/as/evidence/review/README.md | `evidence/review/` の正本リスト（調査設計・レビュー・判断ログ） |
| ドキュメント索引 | https://github.com/uminomae/project-design-theory/blob/main/as/docs/README.md | docs/ の入口 |
| 概念ノート一覧 | https://github.com/uminomae/project-design-theory/blob/main/as/knowledge/concepts/index.md | CN-005〜007（信頼の定義仮説・分析軸・測定設計） |
| プロジェクト定義 | https://github.com/uminomae/project-design-theory/blob/main/as/PROJECT.md | 強い原則・スコープ・正本参照 |
| 公開サイト | https://uminomae.github.io/project-design-theory/as/ | 一般向け入口（main） |
| リポジトリ | https://github.com/uminomae/awareness-space | |
| 「気づき」の定義 Issue | https://github.com/uminomae/project-design-theory/issues/36 | ks#216 からの渡し。pjdhiro の言葉（原文）・候補・完了条件 |

## 2. コミット固定の参照（文言を引くときはこちら）

permalink は `a6519ef6758c6282f34cb4fd3fa10e3e1ace831b` 固定。「最終コミット」は各ファイルが最後に変わったコミット（`git log -1 -- <file>`）。行番号（`#L`）は見出し行で、a6519ef 時点。

| ks 側の用途 | as ファイル／節 | as 側の状態（自己申告） | permalink | 最終コミット |
|---|---|---|---|---|
| 正本一覧 | `evidence/review/README.md` | 確定 | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/README.md | `fcfe10b`（2026-03-19） |
| 神経現象学＝中核参照 | `evidence/review/core-source-map.md` §2 中心軸（L12）・§4-3 神経現象学（L81） | 確定。旧リポ kesson-driven-thinking のパスと定義番号表記が残る（lane2 所見） | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/core-source-map.md#L12 | `fe759c9`（2026-03-25） |
| 差異の前景化・一人称記述単位・前反省的気づき／返し方／未確定論点 | `evidence/review/neurophenomenology-intake-map.md` §3-2（L55）・§3-3（L82）・§3-4（L110）・§5（L149）・§6（L173） | 確定。前反省的気づきの層対応と Friston の本論化は未確定（§6） | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/neurophenomenology-intake-map.md#L55 | `712aabb`（2026-03-26） |
| 欠損は「意識化された予測誤差」ではなく一人称経験／Friston 系は使えるがそのまま本論ではない | `evidence/review/layer1-prediction-error-reading.md` §2-2（L35）・§2-3（L49） | 読解メモ（as#55） | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/layer1-prediction-error-reading.md#L35 | `c903dd6`（2026-04-04） |
| 一人称が本論／三人称は参照枠（原則 A–D） | `evidence/review/first-person-vs-third-person.md` §3（L45）・§5（L80）・§6 書き分け原則（L97） | 確定（as#51） | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/first-person-vs-third-person.md#L97 | `c903dd6`（2026-04-04） |
| 主質問 B・C は問いのみ | `evidence/review/neurophenomenology-design.md` §2 主質問（L24。B＝L38・C＝L49） | 未確定（as#50） | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/neurophenomenology-design.md#L24 | `fe759c9`（2026-03-25） |
| 抱持は as で不採用（旧探索ラベル） | `evidence/review/research-design-baseline.md` NOTE（L9）・§2-3（L45）・§3-3（L122） | 確定 | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/review/research-design-baseline.md#L9 | `c903dd6`（2026-04-04） |
| 「ズレ」の経験の一文（Friston 2010 のみ） | `build/theory/what-is-consciousness.md` §3.2（L76） | 叩き台 | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/build/theory/what-is-consciousness.md#L76 | `5417141`（2026-04-09） |
| as の evidence 側プロジェクト定義 | `evidence/PROJECT.md` §0.1.1・§3.1 | 確定 | https://github.com/uminomae/awareness-space/blob/a6519ef6758c6282f34cb4fd3fa10e3e1ace831b/evidence/PROJECT.md | `62a0b42`（2026-03-27） |

## 3. ks 側で as を参照している箇所（逆引き）

| ks ファイル | 何を参照しているか | 固定方法 |
|---|---|---|
| `docs/issues/ISS-216-candidate-survey.md` §3 | 分担・リンク方針・as の現状 | permalink `e2ad04c` 固定（有効） |
| `docs/issues/survey-216/lane2-neuro.md` | as 棚卸し（ファイル別・最終コミット） | `e2ad04c` 時点 |
| `docs/CHARTER-guides.md` §2.4・§3 | 欠損・情動の構成の詳細は as に外部参照 | 公開サイト URL（安定入口） |
| `README.md`／`llms.txt` | 関連リポジトリ一覧 | リポジトリ URL・公開サイト URL（安定入口） |

新しく as を引くときは、本文には「as 参照台帳（`knowledge/reference/as-links.md`）§2 の〇行目」と書き、URL はここに足す。

## 4. 更新手順（as が進んだとき）

1. `git -C as fetch origin && git -C as log -1 --format='%H %cs' origin/develop` で新しい SHA と日付を取り、§0 を書き換える
2. §2 の permalink の SHA を一括置換する。各行の「最終コミット」は `git log -1 --format='%h %cs' -- <file>` で引き直す
3. 見出し行が動いていれば `#L` を直す（`grep -n '^## \|^### ' <file>`）
4. 本文側（§3 の逆引き先）は触らない。永続の引用（e2ad04c 固定など）はそのまま有効
5. as#149 が閉じたら、結果のファイルパス＋SHA を §2 に 1 行足す（as#149 の完了条件 3 と対）

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-11-02 | 初版。ISS-216 §3・lane2 棚卸し（e2ad04c）から a6519ef に再ピン。pjdhiro 承認 |
