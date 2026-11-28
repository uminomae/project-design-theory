# blog/ — ブログ

GitHub Pages で出す静的なページの置き場。build は無く、置いた HTML がそのまま出る。記事は毎回 Claude が書く。

公開の URL は `https://uminomae.github.io/project-design-theory/blog/`。手元では `http://localhost:3001/blog/`（worktree では `.claude/launch.json` のポート）。

## 置き場

| 場所 | 中身 |
|---|---|
| `index.html` | 記事の一覧。カードは手で書かない。記事の頭の meta から `scripts/blog-index.py` が作り直す。絞り込み（タグ・語・日付の並べ替え）は `design-system/list.js` が受け持つ |
| `posts/YYYY-MM-DD-<短い英語名>.html` | 記事一本につき一枚 |
| `assets/thumbs/YYYY-MM-DD-<短い英語名>.svg`（か `.png`・`.jpg`） | カードと og:image のサムネイル。1200×630 |
| `design-system/` | このブログだけの見た目（`--bl-*` のトークンと `bl-` の部品）。中身は `design-system/README.md` |
| `_template/post.html` | 記事の雛形。公開しない（`pages.yml` で外す） |

pd/ のサイトの見た目（`pd/design-system/`・`pd/src/`）は読み込まない。pjdhiro の repo（Jekyll のブログ）も読み込まない・指さない。

## 記事を一本足す手順

記事の正本は、記事の頭の meta だけ。一覧のカードはそこから作るので、題・日付・概要・タグを一覧に手で書かない。

1. `_template/post.html` を `posts/YYYY-MM-DD-<名前>.html` に写す。日付は記事の日付。同じ日に二本なら `-2` を付ける。
2. 雛形の `{{…}}` を全部埋める。頭の meta が一覧のもとになる：
   - `og:title`：題（`<title>` と h1 も同じ題に）
   - `description`：概要（`og:description` も同じ文に）。カードに出る
   - `og:image`：サムネイル（`…/blog/assets/thumbs/<ファイル名>`）
   - `article:published_time`：`YYYY-MM-DD`。並べ替えはこれで行う
   - `article:tag`：タグ一つにつき一行。`#` は付けない。空白を入れない。本文の頭のタグ（`bl-tags`）も同じ並びで書く
3. サムネイルを `assets/thumbs/` に置く（1200×630）。色は `design-system/tokens.css` の明るい見た目の値から取る。
4. `python3 -I scripts/blog-index.py` を回す。一覧の `<!-- BLOG-CARDS:START -->` と `END` のあいだが、新しい順に作り直される。頭の meta の欠け・記事の中の食い違い（`<title>`・h1・本文の日付とタグ）があれば、直す所を出して止まる。
5. 手元で `/blog/` を開き、カード・タグの絞り込み・並べ替え・記事・暗い見た目を確かめる。狭い幅（375px）でも見る。
6. 公開ページの点検（`.claude/skills/public-page-review/SKILL.md`）を通す。`check.sh` は `blog-index.py --check` を回し、一覧が記事と合っていなければ止まる。

## 本文の書き方

- pjdhiro の投稿をそのまま載せるときは、言葉を変えない。行の区切りも投稿のとおりに残す（段落は `<p>`、段落の中の改行は `<br>`）。誤字・脱字の直しも、趣旨が変わりうるなら pjdhiro に確かめる。
- 投稿の頭のハッシュタグは、本文に残さずタグ（`bl-tags`）に移す。
- 解説・補足を付けるときは、本文と分けて、開く窓（`bl-dialog`）に入れる。本文に混ぜない。開くボタンは日付の下（`bl-post__actions`）に置く。
- 窓の中身を claude.ai のアーティファクトから持ってくるときは、中身をこのページに写す（読者はアーティファクトを開けない）。リンク先がこのサイトのページなら、相対のパスに直す。
- このサイトのほかのページへは相対のパスで張る（記事からは `../../reader/…`）。
