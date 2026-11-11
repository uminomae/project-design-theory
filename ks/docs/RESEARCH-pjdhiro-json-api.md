# pjdhiro JSON API 技術検証レポート

> 2026-11-12：ここに書いた道具（`scripts/build-guide-pdf.sh`・`scripts/articles-en-*`）と、入口の記事の段（ARTICLES）は外した。pjdhiro の repo とサイトを使わないことにしたため（Issue #134）。旧ガイドは `ks/archive/guides/` にある。ここから下は当時の運用の記録で、今の手順ではない。

**調査日**: 2026-02-16  
**調査方法**: ChatGPT (GPT) に技術質問 → DT + Claude (書類管理) で吟味  
**ステータス**: ✅ 技術的に可能。実装方式確定。

---

## 結論

pjdhiro (Jekyll + Minimal Mistakes + GitHub Pages) から、特定タグ/カテゴリの記事を JSON で出力し、kesson-space から fetch で取得することは**技術的に可能**。

---

## 1. 調査結果サマリ

| 項目 | 結論 |
|------|------|
| Jekyll Liquid で JSON 出力 | ✅ 可能。front matter 付き `.json` ファイル |
| `_pages` を `site.pages` で取得 | ✅ 可能。`include: [_pages]` が設定済み ([参照][1], [参照][2]) |
| OR 条件フィルタ | ⚠️ `where_exp` の OR は Jekyll 4 専用 ([参照][4])。**loop+push 方式**を使用 |
| CORS | ✅ 問題なし。同一オリジン `uminomae.github.io` ([参照][5]) |
| GitHub Pages 制約 | ✅ カスタムプラグイン不要。標準 Liquid で完結 ([参照][6]) |

---

## 2. 決定事項

### 2-1. 配置場所

**`api/kesson-articles.json`（pjdhiro リポジトリのルート直下に `api/` ディレクトリ）**

- `_pages` 配下ではなくルート直下が推奨
- 理由: `_` 始まりディレクトリの `include` 挙動に依存しないため安全 ([参照][1])
- permalink: `/api/kesson-articles.json`

### 2-2. フィルタ方式

**loop + push 方式**（`where_exp` の OR 演算子を使わない）

- GitHub Pages は **Jekyll 3.10.0 / Liquid 4.0.4** ([参照][3])
- `where_exp` の `or` は **Jekyll 4.0 以降**の機能 ([参照][4])
- loop + push は Jekyll 3 系でも確実に動作する

### 2-3. 公開 URL

```
pjdhiro のサイトの `api/kesson-articles.json`（リンクは外した・#134）
```

---

## 3. 吟味：ChatGPT 回答の検証ポイント

> ⚠️ **重要な前提注意**  
> ChatGPT が参照した Jekyll ドキュメント ([jekyllrb.com/docs/liquid/filters/][4]) は
> **Jekyll 最新版（4.x 系）の説明**。GitHub Pages は **Jekyll 3.10.0** で動作する ([参照][3])。  
> ChatGPT が「公式フィルタ」として紹介した機能の一部は Jekyll 3.10 では未実装の可能性がある。  
> 以下の「要検証」項目は、この版差に起因するリスクである。

### ✅ 確認済み・問題なし

| ポイント | 判断 |
|----------|------|
| `jsonify` フィルタ | Jekyll 3.10 で利用可。JSON エスケープ処理として正しい ([参照][4]) |
| `forloop.last` で末尾カンマ制御 | 標準 Liquid 機能。問題なし |
| `strip_html` フィルタ | Jekyll 3.10 で利用可 ([参照][4]) |
| `date_to_xmlschema` | Jekyll 3.10 で利用可。ISO 8601 出力 |
| CORS 同一オリジン判定 | scheme + host + port が一致 ([参照][5]) |
| カスタムプラグイン不要 | `--safe` 制約に抵触しない ([参照][6]) |

### ⚠️ 要検証（ローカル or GitHub Pages ビルドで確認必要）

| # | ポイント | リスク | 対処 |
|---|----------|--------|------|
| V1 | `normalize_whitespace` | ChatGPT は「公式フィルタ」と主張 ([参照][4]) だが、参照先は Jekyll 4.x ドキュメント。**3.10 での利用可否が未確認** | 使えない場合 → `strip_newlines` に置換 |
| V2 | `sort: "date", "last"` 第2引数 | 同上。Jekyll 公式 sort 説明にあるが **3.10 で動くか未確認** | 使えない場合 → `nil` date の page がソート先頭に来る。pages に `date:` を必ず入れる運用で回避 |
| V3 | `doc.header.teaser` ネストプロパティ | Liquid のドットアクセスで nested hash に到達できるか | 動かなければ `doc.header["teaser"]` に変更 |
| V4 | `doc.collection == "posts"` | pages は `doc.collection` が `nil` の可能性 | type 判定を `site.posts contains doc` に変更、またはフォールバック追加 |
| V5 | `doc.excerpt` が pages で空 | ChatGPT も明記：**pages だと `doc.excerpt` が空になることがある** | テンプレートでは `doc.content` にフォールバック済み。ただし content 全文が入る場合の `truncate: 200` が確実に動くか確認 |
| V6 | `absolute_url` フィルタ | `_config.yml` の `url` + `baseurl` が正しく設定されているか | 現状 `url: "https://uminomae.github.io"`, `baseurl: "/pjdhiro"` で OK のはず |

### 💡 ChatGPT が触れなかった追加リスク

1. **GitHub Pages ビルドキャッシュ**: JSON ファイル更新後、CDN キャッシュで古い版が返る可能性
   - 対処: kesson-space 側で `fetch(url + '?t=' + Date.now())` キャッシュバスター

2. **pjdhiro の記事追加時に JSON が自動更新されるか**: Jekyll ビルドが走れば自動更新される。GitHub Pages は対象ブランチへの push でビルドが走るので問題なし

3. **JSON 出力の改行・空白**: `{%- -%}` で空白制御しているが意図しない空白混入の可能性
   - 対処: kesson-space 側の `JSON.parse()` は空白に寛容なので実害は低い

---

## 4. Liquid テンプレート（確定版）

以下を pjdhiro リポジトリの `api/kesson-articles.json` に配置する。

```liquid
---
layout: null
permalink: /api/kesson-articles.json
sitemap: false
---

{% assign TAG_TARGET  = "欠損駆動思考" %}
{% assign CAT_KESSON   = "欠損駆動思考" %}
{% assign CAT_DESIGN   = "デザイン思考" %}
{% assign EMPTY_ARR    = "" | split: "" %}

{%- assign items = "" | split: "" -%}

{%- for doc in site.posts -%}
  {%- assign tags = doc.tags | default: EMPTY_ARR -%}
  {%- assign cats = doc.categories | default: EMPTY_ARR -%}
  {%- if tags contains TAG_TARGET or cats contains CAT_KESSON or cats contains CAT_DESIGN -%}
    {%- assign items = items | push: doc -%}
  {%- endif -%}
{%- endfor -%}

{%- for doc in site.pages -%}
  {%- assign tags = doc.tags | default: EMPTY_ARR -%}
  {%- assign cats = doc.categories | default: EMPTY_ARR -%}
  {%- if tags contains TAG_TARGET or cats contains CAT_KESSON or cats contains CAT_DESIGN -%}
    {%- assign items = items | push: doc -%}
  {%- endif -%}
{%- endfor -%}

{%- assign items = items | sort: "date", "last" | reverse -%}

[
{%- for doc in items -%}
  {%- if doc.collection == "posts" -%}
    {%- assign dtype = "post" -%}
  {%- else -%}
    {%- assign dtype = "page" -%}
  {%- endif -%}

  {%- assign raw_excerpt = doc.excerpt | default: doc.content | default: "" -%}
  {%- assign excerpt = raw_excerpt | strip_html | normalize_whitespace | strip | truncate: 200, "..." -%}

  {%- assign teaser = doc.header.teaser -%}
  {%- if teaser and teaser contains '://' -%}
    {%- assign teaser_url = teaser -%}
  {%- elsif teaser -%}
    {%- assign teaser_url = teaser | absolute_url -%}
  {%- else -%}
    {%- assign teaser_url = nil -%}
  {%- endif -%}

  {
    "type": {{ dtype | jsonify }},
    "title": {{ doc.title | default: "" | jsonify }},
    "url": {{ doc.url | absolute_url | jsonify }},
    "date": {{ doc.date | date_to_xmlschema | jsonify }},
    "excerpt": {{ excerpt | jsonify }},
    "tags": {{ doc.tags | default: EMPTY_ARR | jsonify }},
    "categories": {{ doc.categories | default: EMPTY_ARR | jsonify }},
    "teaser": {{ teaser_url | jsonify }}
  }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
]
```

---

## 5. 代替案（テンプレートが動かない場合）

ChatGPT 回答より。優先度順：

| # | 方式 | メリット | デメリット |
|---|------|----------|------------|
| A1 | **GitHub Actions で JSON 事前生成** | Jekyll バージョン制約から完全に解放。カスタムワークフロー利用可 ([参照][7]) | CI/CD 設定が必要。ビルド時間増加 |
| A2 | **Minimal Mistakes 検索インデックス流用** | テーマが `search.json` / Lunr 用データを生成している場合は追加実装なし | タグ絞り込み専用 API には不向き。フォーマット固定 |
| A3 | **`feed.xml` を fetch してクライアント側フィルタ** | `jekyll-feed` が有効なら追加ファイル不要 | pages を含めるのが困難。XML パースが必要。重い |

**判断**: まずは §4 の Liquid テンプレート方式で進める。V1-V6 の検証で問題が多発した場合のみ A1 (GitHub Actions) に切り替えを検討。

---

## 6. デプロイ前プレフライトチェック

pjdhiro に配置する前に確認すべき項目（ChatGPT 回答 + Claude 吟味より）:

### 必須

- [ ] `_config.yml` に `url: "https://uminomae.github.io"` と `baseurl: "/pjdhiro"` があるか（`absolute_url` の前提）
- [ ] `api/kesson-articles.json` に **front matter（`---` ブロック）が付いているか**（付いてないと Liquid が評価されない）
- [ ] 対象 pages（thinking-kesson, thinking-bi 等）の front matter に `date:` が入っているか（ソート安定のため）

### デプロイ後

- [ ] pjdhiro のサイトの `api/kesson-articles.json`（リンクは外した・#134） にアクセスして JSON が返るか
- [ ] JSON が valid か（ブラウザコンソールで `JSON.parse()` してエラーが出ないか）
- [ ] `teaser` が正しい絶対 URL になっているか
- [ ] pages の `date` が null でソート順がおかしくないか
- [ ] excerpt に HTML タグが残っていないか
- [ ] 本テンプレート自身が JSON API ファイルとして出力に含まれていないか（`sitemap: false` は設定済み）

---

## 参照リンク

[1]: https://jekyllrb.com/docs/structure/ "Jekyll Directory Structure — `_` 始まりディレクトリの扱い"
[2]: https://mmistakes.github.io/minimal-mistakes/docs/pages/ "Minimal Mistakes — Working with Pages"
[3]: https://pages.github.com/versions/ "GitHub Pages Dependency versions — Jekyll 3.10.0"
[4]: https://jekyllrb.com/docs/liquid/filters/ "Jekyll Liquid Filters（⚠️ 最新版。3.10 と差異あり得る）"
[5]: https://developer.mozilla.org/ja/docs/Web/Security/Defenses/Same-origin_policy "MDN 同一オリジンポリシー"
[6]: https://jekyllrb.com/docs/plugins/installation/ "Jekyll Plugins — GitHub Pages の --safe 制約"
[7]: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages "GitHub Pages カスタムワークフロー"
