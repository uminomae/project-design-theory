# CLI指示書: #215-B 公開面の反映 — 「0 に見えるのに、ある」を公開ページに置く

**担当**: Claude Code CLI（Agent-WT・`isolation: "worktree"`）
**対象リポジトリ**: uminomae/kesson-space
**対象 Issue**: https://github.com/uminomae/kesson-space/issues/215
**ブランチ**: Agent-WT のワークツリーに自動で切られるブランチ（起点＝`claude/cosine-90-restructure-c87c30` の HEAD）。**push しない**。Main が取り込む
**前提**: `docs/issues/ISS-215-restructure-plan.md` §0・§3・§6、`transform/rules/slide-content-rules.md` §1・§3・§5 を読んでから着手する
**reasoning**: high（文面は本指示書で確定済み。作業は配置・生成・検証）
**作成日**: 2026-11-02
**並行**: `INSTRUCTION-215-A`（knowledge/ の正本改訂）と同時に走る。触るファイルは重ならない。knowledge/ には触らない

> **この指示書の内容のみ実行すること。** 指示書に記載のない変更は禁止。
> 文面は本指示書に書いた通りに置く。**自分で言い換えない・足さない**。公開面は pjdhiro が localhost で目視する。

---

## Step 0: 前提確認（作業開始前に必ず実行）

```bash
pwd                          # Agent-WT のワークツリーであること
git branch --show-current    # 自分のブランチであること
git log --oneline -1
# Agent-WT のワークツリーは main から切られることがある。その場合は作業ブランチの先頭に揃える:
git merge --ff-only claude/cosine-90-restructure-c87c30
git log --oneline -1         # 4e5aa07 以降（INSTRUCTION-215-A 取り込み済み）であること
python3 scripts/generate-rich-slides.py --help | head -3   # スライド生成器が動くこと
```

---

## 前提確認

### 公開面に置く内容（確定。pjdhiro の言葉は原文のまま）

置くのは次の三つだけ。

1. 定義はそのまま: 「棄却される誤差を、問いとして拾う態度」
2. もう一つの言い方（pjdhiro・原文のまま）: 「虚軸に値があって、しかも、認知上は 0 の直観」
3. 二つは**並べて置くだけ**。「同じときに起きていること」「関係はまだ言葉になっていない」までを書き、**それ以上の説明は書かない**

cos 90°・虚軸を「比喩」とも「本質」とも書かない。「一つの言い方」「もう一つの言い方」の形で置く。

### 文体規約（公開面すべてに適用。`transform/rules/slide-content-rules.md`）

- です・ます調。中学生が読んでわかる語彙。1 文 40 字以内（スライド）
- 禁止: 論文調（〜である・〜と呼ぶ）、学術用語、内部用語（リポジトリ名・定義番号・生存軸/信頼軸の表記）、URL（スライド・SEO 要約本文内）、口語、感情的修辞、LLM 的創作
- 問いから始める。結論から始めない
- 本指示書の文面は上の規約で書いてある。**変えない**。1 文字でも変える必要があると思ったら、変えずに「気づき」に書く

### 書式見本

- スライド: `content/guides/meta-overview.md`（layout コメントと `---` 区切り）。HTML は `scripts/generate-rich-slides.py` で生成する（手で HTML を編集しない）
- SEO 要約: `index.html` の `<div id="seo-content-summary">`（L534 付近）と `<noscript>`（L552 付近）

---

## 作業手順

### Step 1: `content/guides/meta-overview.md` に 1 枚足す

タイトルスライド（「欠損駆動思考とは」）の**直後**、「「欠損」とは何か」の**直前**に、次のブロックをそのまま挿入する（前後の `---` を忘れない）:

```markdown
---

<!-- layout: statement -->

## 0 に見えるのに、ある

とても厚みの薄い棒を、真横（厚さ）の方向に測ると、長さは 0 です。
長さの方向に測れば、長さがあります。
棒が無いのではありません。測る方向が違うだけです。

欠損駆動思考には、もう一つの言い方があります。
「虚軸に値があって、しかも、認知上は 0 の直観」。

0 だと思い込んでいるもの。
0 と言わざるを得ないもの。
それは、体験としては、たしかにあります。

二つの言い方は、同じときに起きていることです。
その関係は、まだ言葉になっていません。
```

frontmatter の `status: draft` はそのまま。他のスライドは変えない。

### Step 2: `content/guides/meta-overview.html` を再生成する

```bash
python3 scripts/generate-rich-slides.py \
  --input content/guides/meta-overview.md \
  --output content/guides/meta-overview.html \
  --title "欠損駆動思考 — 全体像" \
  --lang ja
git diff --stat content/guides/meta-overview.html
```

タイトルは**この文字列**（現行 HTML の `#deckTitle` と同じ）。差分が新しいスライド 1 枚分（`layout-statement` ブロック 1 つ）だけであることを `git diff` で確認する。他の箇所に差分が出たら、生成器の問題として「気づき」に書き、HTML は**手で直さない**。

### Step 3: `index.html` の SEO 要約に 1 段落足す

`<div id="seo-content-summary">` 内、`<h3>コア定義</h3>` の二つの `<p>`（欠損駆動思考の定義／欠損の定義）の**直後**に、次の 1 段落をそのまま挿入する:

```html
  <p>欠損駆動思考には、もう一つの言い方があります。「虚軸に値があって、しかも、認知上は 0 の直観」（pjdhiro）。とても厚みの薄い棒を、真横（厚さ）の方向に測ると、長さは 0 です。長さの方向に測れば、長さがあります。棒が無いのではありません。測る方向が違うだけです。0 だと思い込んでいるもの、0 と言わざるを得ないものが、体験としては、たしかにあります。二つの言い方は、同じときに起きていることです。その関係は、まだ言葉になっていません。</p>
```

`<noscript>` 内の日本語段落（「欠損駆動思考（Kesson-Driven Thinking）とは、棄却される誤差を…」）の**末尾**に、次の 1 文を足す（同じ `<p>` の中。改行しない）:

```
もう一つの言い方として「虚軸に値があって、しかも、認知上は 0 の直観」があり、定義と並べて置いています。
```

JSON-LD 内の二つの `"description"`（L110 付近「…保持する機能（D3）」、L121 付近「…構成されるプロセス（D4）」）から、末尾の「（D3）」「（D4）」だけを削る（定義番号は公開面で禁止。CLAUDE.md §3）。それ以外の JSON-LD・タグライン・その他の本文は**変えない**。

### Step 4: `llms.txt` と `llms-full.txt` に 1 節足す

`llms.txt`: `## Core Concepts` 内、`### Kesson-Driven Thinking (欠損駆動思考)` の節の**直後**に:

```markdown
### Another Phrasing by pjdhiro (もう一つの言い方)

The definition "an attitude of picking up discarded errors as questions" is unchanged. pjdhiro also puts it another way, in his own words:

> 虚軸に値があって、しかも、認知上は 0 の直観

(Literal gloss, not an official translation: "an intuition that has a value on the imaginary axis, yet registers as 0 in cognition.") The two phrasings describe the same moment from different viewpoints. The relation between them has not yet been put into words; this site places them side by side and does not explain one by the other. Origin: pjdhiro's posts of June 2025 (imaginary axis, orthogonal axes, square roots) — see `knowledge/text/foundation/origin-2025-06.md`, `knowledge/expressions/core/E11.md`, `knowledge/concepts/CN-009_imaginary-axis.md`.
```

`llms-full.txt`: `## Core Concepts (Detailed)` 内、`### Kesson-Driven Thinking (欠損駆動思考)` の節（Key characteristics の箇条書きまで）の**直後**に、同じ節を入れる。末尾に次の 1 行を足す:

```markdown
Sources (pjdhiro, 2025-06): https://uminomae.github.io/pjdhiro/20250612WoodWideWeb/ , https://uminomae.github.io/pjdhiro/20250612sqrtEmpathy/ , https://uminomae.github.io/pjdhiro/20250616baToMinwa/
```

（`llms*.txt` は AI 向けファイルで、既に URL を含む。ここだけ URL 可。）

### Step 5: `README.md` の Key Concepts に 1 行足す

`### Key Concepts` の箇条書き、**Kesson-Driven Thinking** の行の**直後**に:

```markdown
- **Another phrasing, in pjdhiro's words** (もう一つの言い方): 「虚軸に値があって、しかも、認知上は 0 の直観」 -- placed side by side with the definition above. The two describe the same moment from different viewpoints; the relation between them is not yet put into words. See `knowledge/expressions/core/E11.md` and `knowledge/concepts/CN-009_imaginary-axis.md`.
```

他の行は変えない。

### Step 6: 検証

```bash
# 変更が指定 6 ファイルだけであること
git status --short
# 原文のまま入っていること（各ファイル 1 件以上）
grep -c '虚軸に値があって、しかも、認知上は 0 の直観' content/guides/meta-overview.md content/guides/meta-overview.html index.html llms.txt llms-full.txt README.md
# 定義番号・内部用語が公開面に出ていないこと（0 件）
grep -nE '\bD[1-4]\b|creation-space|awareness-space|生存軸|信頼軸|比喩|本質' content/guides/meta-overview.md index.html | grep -v 'uminomae.github.io/project-design-theory/cs\|uminomae.github.io/project-design-theory/as\|生存軸（生存\|生存軸（生存：Survival）' 
# スライド md の新規行が 1 文 40 字以内であること（句点で区切って数える。超過行を表示）
awk 'NR>1' content/guides/meta-overview.md | sed -n '/0 に見えるのに、ある/,/まだ言葉になっていません/p' | tr '。' '\n' | awk 'length($0) > 120 {print "LONG: " $0}'
# 生成 HTML にスライドが 1 枚増えていること（現行 7 枚 → 8 枚）
grep -c '<div class="slide ' content/guides/meta-overview.html
# 既存テスト
node tests/config-consistency.test.js
# ローカルで表示確認（ポート 3011 は Main が別ワークツリーで使用中。自分は 3012 で）
python3 -m http.server 3012 >/dev/null 2>&1 & sleep 1; curl -s http://localhost:3012/content/guides/meta-overview.html | grep -c '0 に見えるのに、ある'; kill %1
```

既存の SEO 要約の「情動の構成」段落に「生存軸（生存：Survival）」の表記があるのは**既存**であり、本作業では触らない。

### Step 7: commit（push はしない）

```bash
git add content/guides/meta-overview.md content/guides/meta-overview.html index.html llms.txt llms-full.txt README.md
git commit -m "docs(#215): 公開面に「0 に見えるのに、ある」を追加。定義と、もう一つの言い方を並べて置く

- content/guides/meta-overview.md/.html: スライド 1 枚追加（タイトルの直後。HTML は生成器で再生成）
- index.html: SEO 要約に 1 段落、noscript に 1 文
- llms.txt / llms-full.txt: Another Phrasing 節（原文＋直訳の注記＋原典）
- README.md: Key Concepts に 1 行
- 定義は不変。二つの関係は説明しない（pjdhiro 2026-11-01）

Session: 20261101-800

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git log --oneline -1
git branch --show-current
```

### Step 8: コミット影響レビュー

`git show --stat HEAD` と `git show HEAD -- content/guides/meta-overview.html | grep '^[-+]' | grep -v 'layout-statement\|slide-inner\|slide-bg\|slide-content\|animate-in\|accent-line\|^[-+]\s*</div>\|^[-+]$' | head` で、HTML の差分が新スライド以外に無いことを見る。報告に含める:

- 指示書の文面と実際の文面の一致（diff で照合。1 文字の差も報告）
- 生成 HTML の差分範囲
- 指定外ファイルに触れていないこと

### Step 気づき: 作業中の発見と助言（必須）

- 文面で「変えたほうがよい」と思った箇所（**変えずに**ここに書く）
- 生成器の挙動（タイトル以外に差分が出た等）
- 公開面で他に同じ内容を置くべき場所（候補のみ）

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
- content/guides/meta-overview.md — スライド 1 枚追加
- content/guides/meta-overview.html — 再生成
- index.html — SEO 要約 1 段落・noscript 1 文・JSON-LD の「（D3）」「（D4）」削除
- llms.txt — Another Phrasing 節
- llms-full.txt — Another Phrasing 節＋原典 URL
- README.md — Key Concepts 1 行

### 検証結果
- Step 6 の各コマンドの結果（スライド枚数、grep 件数、テスト）

### 気づき
- （Step 気づき）

### 残作業・注意事項
- （なければ「なし」）

- instruction: docs/prompts/INSTRUCTION-215-B.md
- model: <使用モデル名>
- tokens used: <概算>
```

## Step 最終: 完了処理

1. DONE ファイルを **main 側のパス**に作成する（ワークツリーの `.cache/` には書かない）:
   `ks/.cache/outbox/DONE-215-B-20261102.md`
   形式は INSTRUCTION-215-A と同じ（SHA・Branch・Worktree・判定・instruction・コミット影響レビュー・完了報告）
2. Issue コメントは **Main が投稿する**。`gh` を試して失敗しても再試行しない
3. **Issue は close しない**

## 完了条件

- [ ] 6 ファイルだけが変更されている
- [ ] 文面が本指示書と 1 文字も違わない（pjdhiro の言葉は原文のまま）
- [ ] 定義「棄却される誤差を、問いとして拾う態度」の文は不変
- [ ] 二つの言い方の関係を説明する文が無い。「比喩」「本質」の語が公開面に無い
- [ ] スライド・SEO 要約に URL・リポジトリ名・定義番号が無い
- [ ] `meta-overview.html` が生成器で再生成され、差分が新スライド 1 枚分
- [ ] `node tests/config-consistency.test.js` 通過
- [ ] commit 済み・push していない
- [ ] DONE ファイルが `ks/.cache/outbox/DONE-215-B-20261102.md` にある

### Issue close 条件

close しない（段 4 他 repo・段 5 3D が残る。公開面は pjdhiro の目視待ち）。

## 禁止事項

- 指定 6 ファイル以外の変更。`knowledge/` は **触らない**（INSTRUCTION-215-A が並行して編集中）
- 文面の言い換え・追加・削除。英訳の追加（llms の直訳注記以外）
- 二つの言い方の関係の説明。cos 90°・虚軸を比喩／本質と書くこと
- `meta-overview.html` の手編集
- 定義本文・JSON-LD・タグライン・既存スライドの変更
- push、main／develop へのマージ、Issue の close
