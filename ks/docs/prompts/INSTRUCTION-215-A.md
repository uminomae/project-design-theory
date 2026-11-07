# CLI指示書: #215-A 正本の改訂 — 虚軸の原体験ノート・E11・CN-009 を足す（定義は変えない）

**担当**: Claude Code CLI（Agent-WT・`isolation: "worktree"`）
**対象リポジトリ**: uminomae/kesson-space
**対象 Issue**: https://github.com/uminomae/kesson-space/issues/215
**ブランチ**: Agent-WT のワークツリーに自動で切られるブランチ（起点＝`claude/cosine-90-restructure-c87c30` の HEAD）。**push しない**。Main が取り込む
**前提**: `docs/issues/ISS-215-restructure-plan.md`（構成案。pjdhiro 承認済み 2026-11-02）の §0・§2・§3・§4・§6 を読んでから着手する
**reasoning**: xhigh（原典の読み取りと、何を書かないかの判断を伴う）
**作成日**: 2026-11-02

> **この指示書の内容のみ実行すること。** 指示書に記載のない変更は禁止。
> 概念は用語名で書く。定義番号での参照は禁止（CLAUDE.md §3）。

---

## Step 0: 前提確認（作業開始前に必ず実行）

```bash
pwd                          # Agent-WT のワークツリーであること
git branch --show-current    # claude/cosine-90-restructure-c87c30 ではない、自分のブランチであること
git log --oneline -1         # 283d614 以降であること
ls pjdhiro/_posts/2025/2025-06/ | grep -E '06-1[256]'   # 原典 3 本が読めること
```

原典が読めない場合は作業を止め、その旨を報告して終了する。

---

## 前提確認

### この作業の芯（pjdhiro の言葉。原文のまま。言い換え禁止）

1. 「棄却される誤差を、問いとして拾う態度」は間違えてません。同じタイミングで起きることです。言い方と視点が違うだけ。
2. まだ、それらのことは言葉にし得ないのです。
3. 仮説や表現という方が近い。
4. コサイン 90 度も比喩でしかないし、もしかすると本質かもしれない。わからない。
5. それでも人間は閃いたり気づいてしまう。なぜかはわからない。一つの表現として、コサイン 90 度のようにゼロだと思い込んでいる、または、西洋科学的な客観性の必要性からゼロと言わざるを得ないために見落とされるものがある。現象としては体験として存在しているにもかかわらず。

いずれも 2026-11-01、Issue #215 の対話で pjdhiro が述べたもの。本文に引くときは**この通りに**書く。

### 位置づけ（ISS-215 構成案 §3）

| 種別 | 文 | 置き場 |
|---|---|---|
| 定義（変えない） | 棄却される誤差を、問いとして拾う態度 | `knowledge/schema/core-definitions.md` |
| 仮説・表現 | 虚軸に値があって、しかも、認知上は 0 の直観 | `knowledge/expressions/core/E11.md`（表現）＋ `knowledge/concepts/CN-009_imaginary-axis.md`（仮説 [S] と原体験） |
| 原体験 | 2025-06 の三投稿 | `knowledge/text/foundation/origin-2025-06.md` |

### 一次資料（読む順）

| 日付 | ファイル | 公開 URL |
|---|---|---|
| 2025-06-12 | `pjdhiro/_posts/2025/2025-06/2025-06-12-WoodWideWeb.md` | https://uminomae.github.io/pjdhiro/20250612WoodWideWeb/ |
| 2025-06-15 | `pjdhiro/_posts/2025/2025-06/2025-06-15-sqrtEmpathy.md` | https://uminomae.github.io/pjdhiro/20250612sqrtEmpathy/ （permalink はこの綴り。日付は 06-15） |
| 2025-06-16 | `pjdhiro/_posts/2025/2025-06/2025-06-16-baToMinwa.md` | https://uminomae.github.io/pjdhiro/20250616baToMinwa/ |
| 2026-11-01 | `pd/reader/gravity-love.html` の 5章（L247〜300 付近。「pjdhiro の定義：欠損駆動思考とは、違う言い方をすれば、虚軸に値があって、しかも、認知上は 0 の直観です。」は L264） | — |

既存の書式見本: `knowledge/expressions/core/E04.md`（表現）、`knowledge/concepts/CN-002_f-axis-exposure.md`（概念ノート）、`knowledge/text/foundation/phase1-summary.md`（本文）。各 index のテンプレート節も従う。

### エビデンス層タグ（`knowledge/schema/glossary.md`）

- [P] 投稿・読み物に**そう書いてある**こと。評価語を混ぜない
- [M] 本論への読み替え（Claude の読み。候補と明記）
- [S] 検証仮説
- **cos 90°・虚軸・スピノルにはタグを当てない**。「一つの表現として」の形で置く（pjdhiro「比喩でしかないし、本質かもしれない。わからない」）

---

## 作業手順

### Step 1: `knowledge/text/foundation/origin-2025-06.md` を新規作成（原体験ノート）

目的: 2025-06 の三投稿に書かれていることを、本論の側から読める形で一か所に置く。**要約＋短い引用＋原典リンク**。全文転載はしない。

構成（この順）:

```
# 原体験ノート：2025-06 の三投稿 — 虚軸・直交する軸・平方根・ゼロの点

**対象 Issue**: #215  / **状態**: 初版（pjdhiro 確認待ち） / **作成日**: 2026-11-02

## 0. なぜこのノートがあるか
  - 1 段落。三投稿が本論の原体験であること。当時の LLM には伝わらなかった経緯。
    「スピノル＝回転の平方根」の筋は Phase 2 を経て M2 の「渦（Spinor）」へ流れ（いまは creation-space）、
    「虚軸・直交する軸・ゼロの点」の筋には受け皿がなかったこと（ISS-215 §1 の見立て。[M]）。

## 1. 2025-06-12 対話：「森の木」Wood Wide Web と陰陽なフラクタルの青山常運歩
  ### 要約（3〜6 行・[P]）
  ### 引用（3〜5 箇所。各 2 行以内。原文のまま。[P]）
      見るべき箇所: 平方根で真逆の二つが生まれる／虚軸のような人々（海流を逆行した人たち）／
      罪と恥・神と人の「垂直と水平」＝直交する軸／風（受容・包む）と雷（能動・一点に集中）／
      白い方だけ見て黒い方が見えていない
  ### 本論への読み替え（候補・[M]・3 点まで）

## 2. 2025-06-15 発散のタネ・ネタ：draft「√共感マーケティング理論」
  （同じ三節。見るべき箇所: 人は本質的に「√の存在」／表現される姿（ノルム）は二乗された虚構／
   根本には虚軸（感情・無意識・未体験）／√共感＝他者の未体験の情動にふれる／自乗は心理防衛）

## 3. 2025-06-16 スピノル場の理解のために民話をあててみる
  （同じ三節。見るべき箇所: オイラーの公式と四元数／σ₃ は二つの直交する状態を回す／
   スピノルは回転の平方根／右から・左から（順序で結果が変わる）／ヒルコ＝片方だけの生成の失敗。
   かぐや姫の節の量子マインド仮説は**引かない**（ISS-215 §5-B 末尾）。）

## 4. 2026-11-01 最新の言い方
  - pd 読み物「愛は、重力に似ていないか」5章の該当文（L264 を原文のまま 1 箇所）。
  - 前提確認の pjdhiro 5 文を原文のまま。説明を足さない。

## 5. 保持論点（書かずに置くこと）
  - 「垂直と水平」（神と人／罪と恥）と実軸／虚軸が同じ対とは限らない
  - 虚軸と信頼軸（情動の構成）は別の切り口。同じものと書かない
  - cos 90° は比喩か本質か決めない
  - 定義と表現の関係は言語化前

## 更新履歴
```

守ること:
- 引用は**原文のまま**（句読点・表記も）。各投稿 3〜5 箇所、1 箇所 2 行以内。合計で投稿本文の 1 割を超えない
- [P] に評価語（「重要な」「鋭い」「先駆的」等）を混ぜない
- 読み替え [M] は「〜と読める（候補）」の形。断定しない
- 内部文書なので公開文の文体規約は適用しないが、平易に書く。定義番号は使わない

### Step 2: `knowledge/expressions/core/E11.md` を新規作成（表現）

frontmatter（E04 に揃える）:

```yaml
---
id: E11
status: pending
text: 虚軸に値があって、しかも、認知上は 0 の直観
text_en: ""   # 英訳は書かない（pjdhiro の言葉を待つ）。空文字で置く
abstraction: principle
related_definitions: [欠損駆動思考]
related_modules: [M1]
source: pjdhiro 2026-11-01（pd reader/gravity-love.html 5章）／原型 2025-06-12・06-15・06-16 投稿
---
```

本文の節（E04 の構成に揃える。ただし中身は次の通り）:

1. `# E11: 虚軸に値があって、しかも、認知上は 0 の直観`
2. `## 位置づけ` — **定義ではなく、仮説・表現**。定義「棄却される誤差を、問いとして拾う態度」と**並べて置く**。pjdhiro の言葉 1〜3（前提確認）を原文のまま引く。**二つの関係の説明は書かない**（どちらが何の側か、何が原因か、語と語の対応、いずれも書かない）。
3. `## 関連する言い方（2026-11-01）` — pjdhiro の言葉 4・5 を原文のまま。cos 90° にタグを当てない。説明を足さない。
4. `## 群盲象チェック（候補・未検証）` — 3 行。領域: 複素数（実軸への射影 cos 90°＝0）／老子 第11章（轂の空）／西田幾多郎（絶対無の場所）。検証状態はすべて「候補（pjdhiro 採否待ち）」。一致度の断定はしない
5. `## バリエーション` — **作らない**。「未作成。pjdhiro の言葉を待つ（Claude が言い換えない）」と 1 行
6. `## 使用履歴` — pd `reader/gravity-love.html` 5章（2026-11-01）
7. `## 検討経緯` — Issue #215、`docs/issues/ISS-215-restructure-plan.md` §3。初版で Claude が置いた対応表を取り下げた経緯（a32b7e7 → 95e74da）を 1 行

### Step 3: `knowledge/concepts/CN-009_imaginary-axis.md` を新規作成（概念ノート）

タイトル: `# CN-009: 「虚軸に値があって、認知上は 0 の直観」— 仮説・表現と、その原体験`

ヘッダ（CN-002 に揃える）: 関連定義: 欠損駆動思考 ／ 関連表現: E11 ／ 関連発言: pjdhiro 2026-11-01 の 5 文、2025-06 三投稿 ／ 状態: active（仮説 [S]）

必須 7 節（concepts/index.md のテンプレート）:

1. **概念の核心** — 表現を原文のまま。「定義ではない。定義と同じタイミングで起きることの、違う言い方・違う視点（pjdhiro）」まで
2. **なぜこの概念が必要か** — 2025-06 の「虚軸・直交する軸・ゼロの点」の筋に受け皿がなかったこと。定義を変えずに、表現と原体験を置く場所が要ること。関係は言語化前として保持すること（for-ai/preamble.md §3 と同じ構え）
3. **概念の構造** — 原典に**書かれている語**を、出所つきで並べる（虚軸／実軸／直交／平方根／cos 90°＝0／ゼロの点／√の存在／ノルムは二乗された虚構／スピノルは回転の平方根）。**語どうしの対応づけ・図式化はしない**。「並べて置く」ことを節の冒頭に明記
4. **誤解されやすいポイント** — 表（誤解｜弁別）。最低 5 行: 「定義の置き換え」ではない／虚軸＝信頼軸ではない（情動の構成はすでに生存軸・信頼軸の二軸を持つ。別の切り口）／虚＝無い・虚無ではない／cos 90° を比喩と決めつけない・数学的事実として扱うのでもない／量子マインド仮説ではない
5. **pjdhiro 発言との接続** — 前提確認の 5 文と pd L264 を原文のまま。各 1 行の出所のみ。解釈を書かない
6. **成長履歴** — 2025-06-12／06-15／06-16／2026-11-01（pd 5章・Issue #215）／2026-11-02（本ノート）
7. **群盲象チェック** — 候補のみ。複素数（ガウスの「横の単位」は**要出典確認**と明記）／老子 第11・17章／西田幾多郎 絶対無／Wittgenstein『論考』5.633／Bion の O。一致度の列は「候補（pjdhiro 採否待ち）」で統一
8. **保持論点** — origin-2025-06.md §5 と同じ 4 点＋「3D 表現（docs/CONCEPT.md）は別 Issue」「pd・creation-space との境界」

### Step 4: `knowledge/schema/core-definitions.md` を最小限だけ編集

- **定義一覧の表・四つの定義本文・定義間の関係図は変更しない**
- 「欠損駆動思考」節の「補足」の直後に次の節を**追加**するだけ:

```markdown
### 関連表現（仮説・表現。定義ではない）

> 虚軸に値があって、しかも、認知上は 0 の直観（pjdhiro・2026-11-01）

定義と同じタイミングで起きることを、違う言い方・違う視点で言ったもの（pjdhiro「言い方と視点が違うだけ」）。二つの関係は、まだ言葉にし得ない（同）。ここでは並べて置くにとどめる。

- 表現: `knowledge/expressions/core/E11.md`
- 仮説と原体験: `knowledge/concepts/CN-009_imaginary-axis.md`、`knowledge/text/foundation/origin-2025-06.md`
```

- 先頭の「最終更新」を 2026-11-02 に。「状態: 確定」は変えない
- 更新履歴に 1 行: `| 2026-11-02 | #215: 欠損駆動思考に「関連表現」節を追加（E11／CN-009 への参照のみ。定義は不変） |`

### Step 5: index を更新

- `knowledge/concepts/index.md`: 一覧に `| CN-009 | 「虚軸に値があって、認知上は 0 の直観」— 仮説・表現と原体験 | 欠損駆動思考 | E11 | active |`。更新履歴に 1 行
- `knowledge/expressions/core/index.md`: 一覧に `| E11 | 虚軸に値があって、しかも、認知上は 0 の直観 | principle | 欠損駆動思考 | pending |`。抽象度レイヤー principle に E11 を追加。概念カバレッジ「欠損駆動思考」を `E01, E11` に。対関係に `E01（定義の言い方）↔ E11（仮説・表現。関係は言語化前）` を 1 行。更新履歴に 1 行
- `knowledge/text/foundation/` には index が無いことを確認済み（`phase1-summary` を参照する index は無い）。作らない

### Step 6: 検証

```bash
# 定義番号表記が無いこと（0 件であること）
grep -nE '\bD[1-4]\b' knowledge/text/foundation/origin-2025-06.md knowledge/expressions/core/E11.md knowledge/concepts/CN-009_imaginary-axis.md knowledge/schema/core-definitions.md
# 表現が原文のまま入っていること（各ファイルで 1 件以上）
grep -c '虚軸に値があって、しかも、認知上は 0 の直観' knowledge/expressions/core/E11.md knowledge/concepts/CN-009_imaginary-axis.md knowledge/schema/core-definitions.md knowledge/text/foundation/origin-2025-06.md
# 定義一覧の表が不変であること
git diff -U0 knowledge/schema/core-definitions.md | grep '^[-+]|' ; echo "(上が空なら表は不変)"
# 参照先のファイルが存在すること
ls knowledge/expressions/core/E11.md knowledge/concepts/CN-009_imaginary-axis.md knowledge/text/foundation/origin-2025-06.md
# 既存テストに影響が無いこと
node tests/config-consistency.test.js
# 変更が指定 6 ファイルだけであること
git status --short
```

### Step 7: commit（push はしない）

```bash
git add knowledge/text/foundation/origin-2025-06.md knowledge/expressions/core/E11.md knowledge/concepts/CN-009_imaginary-axis.md knowledge/schema/core-definitions.md knowledge/concepts/index.md knowledge/expressions/core/index.md
git commit -m "docs(#215): 虚軸の原体験ノート・E11・CN-009 を追加。定義は変えず関連表現を参照

- knowledge/text/foundation/origin-2025-06.md: 2025-06 三投稿の要約・短い引用・原典リンク
- knowledge/expressions/core/E11.md: 「虚軸に値があって、しかも、認知上は 0 の直観」（pjdhiro 原文。pending）
- knowledge/concepts/CN-009_imaginary-axis.md: 仮説 [S] と原体験、誤解防止、保持論点
- core-definitions.md: 欠損駆動思考に「関連表現」節を追加（定義・表・関係図は不変）
- concepts/expressions の index 更新

Session: 20261101-800

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git log --oneline -1
git branch --show-current
```

**push・main/develop へのマージはしない**。Main が diff を確認して取り込む。

### Step 8: コミット影響レビュー

自分のコミットを `git show --stat HEAD` で見直し、次を報告に含める:

- 指定外ファイルに触れていないか
- 原典の引用量（投稿ごとの箇所数）
- 定義・表・関係図が不変か
- pjdhiro の 5 文と pd L264 が原文のままか（diff で照合）

結果は Step 最終の DONE ファイルに書く（`.cache/outbox/REVIEW-*.md` は作らない。小規模のため DONE に統合）。

### Step 気づき: 作業中の発見と助言（必須）

- 原典を読んで、ISS-215 構成案 §2 の「本論に効く箇所」と食い違う点
- 書きかけて「関係を説明してしまいそうになった」箇所（あれば、どこで止めたか）
- 保持論点に足すべきもの
- 既存ファイルとの不整合

「特になし」でも明記すること。

### Step 完了報告（必須・この形式のまま）

```
---
## 完了報告

### ブランチ・ワークツリー
- ブランチ: `<git branch --show-current>`
- ワークツリー: `<pwd>`

### コミット
- SHA: `<sha>`
- push: していない（Main が取り込む）

### 変更ファイル一覧（6 ファイル）
- knowledge/text/foundation/origin-2025-06.md — 新規
- knowledge/expressions/core/E11.md — 新規
- knowledge/concepts/CN-009_imaginary-axis.md — 新規
- knowledge/schema/core-definitions.md — 「関連表現」節と更新履歴のみ
- knowledge/concepts/index.md — CN-009 行
- knowledge/expressions/core/index.md — E11 行

### 検証結果
- Step 6 の各コマンドの結果

### 引用量
- 06-12: n 箇所 / 06-15: n 箇所 / 06-16: n 箇所

### 気づき
- （Step 気づき）

### 残作業・注意事項
- （なければ「なし」）

- instruction: docs/prompts/INSTRUCTION-215-A.md
- model: <使用モデル名>
- tokens used: <概算>
```

## Step 最終: 完了処理

1. DONE ファイルを **main 側のパス**に作成する（ワークツリーの `.cache/` には書かない）:
   `ks/.cache/outbox/DONE-215-A-20261102.md`
   形式:
   ```markdown
   # DONE: #215-A 正本の改訂（origin-2025-06 / E11 / CN-009）
   - SHA: <commit hash>
   - Branch: <branch>
   - Worktree: <path>
   - 判定: PASS / WARN / FAIL
   - instruction: docs/prompts/INSTRUCTION-215-A.md
   ## コミット影響レビュー
   （Step 8）
   ## 完了報告
   （Step 完了報告の本文をそのまま）
   ```
2. Issue コメントは **Main が投稿する**（Agent-WT のサンドボックスでは `gh` が TLS で失敗するため）。試して成功したら投稿してよいが、失敗しても再試行しない
3. **Issue は close しない**（段 3〜5 が残る）

## 完了条件

- [ ] 6 ファイルが上記の通りに作成・編集され、他のファイルに変更が無い
- [ ] 定義一覧の表・四定義本文・関係図が不変（`git diff` で確認）
- [ ] pjdhiro の 5 文と pd L264 が原文のまま入っている（言い換え・要約なし）
- [ ] 定義と表現の関係を説明する文が無い。語と語の対応表が無い
- [ ] cos 90°・虚軸・スピノルに [P][M][S] タグが当たっていない
- [ ] 虚軸＝信頼軸と読める文が無い
- [ ] 定義番号表記が 0 件
- [ ] 引用は各投稿 3〜5 箇所・1 箇所 2 行以内
- [ ] commit 済み・push していない
- [ ] `node tests/config-consistency.test.js` 通過
- [ ] DONE ファイルが `ks/.cache/outbox/DONE-215-A-20261102.md` にある

### Issue close 条件

close しない（段 2 のみ。段 3 公開面・段 4 他 repo・段 5 3D が残る）。

## 禁止事項

- 指定 6 ファイル以外の変更（公開面 `index.html`・`llms*.txt`・`README.md`・`content/` は **触らない**。段 3 の指示書で扱う）
- 定義一覧の表・四定義の本文・定義間の関係図の変更
- pjdhiro の言葉の言い換え・要約・英訳
- 定義と表現の関係の説明、語ごとの対応表、どちらが原因かの記述
- cos 90°・虚数・スピノルを比喩 [M] または事実 [P] と書くこと
- 虚軸と信頼軸を同一視する記述
- 投稿の全文転載。量子マインド仮説の節の引用
- 定義番号での概念参照
- push、main／develop へのマージ、Issue の close
