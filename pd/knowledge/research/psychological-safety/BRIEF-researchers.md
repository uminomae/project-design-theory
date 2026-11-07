# 調べの共通指示（team-researcher 向け・pd#151・2026-11-06）

4 本の調べ（SURVEY-01〜04）に共通する規律。各本の問いは Agent の依頼文にある。計画の全体は同ディレクトリ `README.md`、経緯と「ここまでに分かったこと」は Issue 151 本文（`gh issue view 151 --repo uminomae/project-design` は sandbox で TLS に失敗することがある。失敗したら README と本ファイルの範囲で進める）。

## 1. 書くもの

- 出力は自分の担当ファイル `knowledge/research/psychological-safety/SURVEY-0N-*.md` 一つだけ。他の SURVEY・README・BIB-check・pd#144 の READER は触らない。
- 冒頭に「状態」節: 日付・担当・取得できた一次資料の数／取れなかったものと試した経路。
- 出典ごとに一つの節。各節は次の 5 項目を**この順**で:
  1. **書誌**: 著者・年・題・誌名/書名・巻号ページ・DOI。二つ以上の独立した情報源でクロスチェック（Crossref API `https://api.crossref.org/works/{doi}`、出版社ページ、Semantic Scholar API `https://api.semanticscholar.org/graph/v1/paper/DOI:{doi}?fields=title,year,authors,openAccessPdf,externalIds`、Google Scholar の検索結果）。食い違いは両方書く。
  2. **照合の状態**: `本文照合済`／`要旨照合済`／`二次資料のみ`（何の二次か）／`未照合（記憶）`。取得した経路（URL と方法）を書く。
  3. **鍵の文**: 原典の中で、問いに直接答える箇所を **1〜3 文、英語原文のまま短く**（1 か所 40 語以内）、ページ番号つき。訳は添えてよいが、訳で原文を置き換えない。長い引用・全文転記はしない。
  4. **読み**: この出典が pd#151 の問いに何を言うか。**三段の印**で仕分ける: `[教科書]`（分野で確立した記述）／`[研究の一線]`（争いがある・一つの研究が示した）／`[Claude の読み替え]`（pd の問いへ当てた解釈）。
  5. **pjdhiro の見立てとの関係**: Issue に書かれた本人の見立て（下の §3）のどれに触れるか。「支持」「反する」で切らず、どこが重なり、どこが重ならないかを書く。
- 末尾に「書誌の表」（著者・年・題・DOI・照合の状態・保存先）と「取れなかったもの」（試した経路を全部）と「次に調べると効くこと」。

## 2. 取得の規律（諦めない・偽らない）

- **取れないと言う前に、経路を 4 つ以上試す**: ①Semantic Scholar API の `openAccessPdf`／Unpaywall（`https://api.unpaywall.org/v2/{doi}?email={email}`）②著者の大学サイト・ワーキングペーパー（HBS Working Knowledge、SSRN）③大学リポジトリ（Digital Commons・ODU・WUSTL openscholarship・CORE `https://core.ac.uk/search?q=`）④Google Scholar の「[PDF]」リンク（WebSearch で `"題名" filetype:pdf`）⑤EuropePMC REST（心理・医学）⑥Internet Archive の書籍（借りて読める本は目次と該当ページの確認に使える）⑦Google Books の snippet（鍵の文の存在確認に）。
- **叩かない**: ResearchGate・Academia.edu（自動取得は拒否される。「pjdhiro にブラウザ保存を頼む」と書く）。大手出版社（SAGE・Wiley・Elsevier・Springer article・Annual Reviews・JSTOR）で 403 が出たら同じ URL を繰り返さない。
- PDF は `.cache/raw/psychological-safety/{author-year-slug}.pdf` に保存し、`pdftotext -layout` でテキスト化してから読む。`curl -o` は hook に止められることがあるので `curl ... > file` で。
- **取得後は書誌クロスチェック**: `pdfinfo`／本文冒頭の著者・年・題・DOI が狙った論文と一致するか。別論文を掴んだら捨てて記録する（同名別論文の誤ヒットは過去に何度も起きた）。
- 二次資料（レビュー・ブログ・Field Guide・Wikipedia）は「二次資料のみ」と明記し、何の二次かを書く。二次資料の中の引用は、原典のページが確認できるまで「二次経由」。
- 記憶で書く箇所は `未照合（記憶）` と書く。推測で書誌を埋めない（巻号ページ・DOI は確認したものだけ）。

## 3. pjdhiro の見立て（Issue 151 から逐語・2026-11-06）

- 「心理的に安全であって、生物的に安全ではないよね。安心のことを差してないかな。いつの間にか低次欲求だけをケアしてるけども」
- 「ポリベーガル理論みたいな二軸があると思うよ。山岸は爬虫類のこと言ってないかな」
- 「心理的安全性の効く条件も間違えてる。軍隊型の、個人を部品のように扱う組織では心理的安全性は低いと思うけど、そのほうが機能するかもしれない。サービスやデザインなど無形のものを扱うときに有効だと思う（なんとなく）」
- 「もしくは心理的安全性には段階がある。段階ごとにフィットする組織がある」
- 「コンプライアンスや不正、ガバナンスの文脈で言うなら別だろうけど」
- 「保身や日和見型の精神で、安心・安全とは、組織にとってよくない効果があるし、それは心理防衛機制という依存のような状態。心理防衛機制で整理していく視点が必要」
- 「心理防衛機制と発達段階の分類での整理が必要だろうね」
- 最低限の到達点: **段階や効く条件から見て、何を指しているのかが曖昧な概念であること**を明確にする。

## 4. 書き方

- 日本語。普通の説明文（体言止めの連打・ダッシュ・飾りをしない）。
- 「AではなくB」で切らない。二つのものを書くときは、どこが重なり、どこが重ならないかを書く。
- 段階や成熟度で並べるときに上下の評価語（高い・低い・未熟・優れた）を使わない。研究の語（Vaillant の mature/immature など）はそのまま引用し、引用であることが分かるようにする。
- 無理に論を勝たせない。「〜を直接示した研究には当たらなかった」と書けることは成果。
- 既にリポジトリにあるもの（`knowledge/research/stages-screener/README.md` §6・`knowledge/research/influences-psychology/READER-influences-psychology.md`・awareness-space CN-006）と重なるときは、そのパスを引いて重複を書かない。
