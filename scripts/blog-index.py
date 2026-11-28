#!/usr/bin/env python3
"""blog/index.html の記事のカードを、blog/posts/*.html の頭の meta から作り直す。

  python3 -I scripts/blog-index.py           一覧のカードを書き換える
  python3 -I scripts/blog-index.py --check   書き換えずに、一覧が古い・記事の頭が欠けているときに 1 で終わる（check.sh が回す）

記事の正本は、記事の頭の meta だけ：
  og:title（題）・description（概要）・og:image（サムネイル。assets/thumbs/ のファイル名を見る）
  article:published_time（日付 YYYY-MM-DD）・article:tag（タグ。一つにつき一行）
カードは日付の新しい順（同じ日はファイル名の逆順）に、index.html の
<!-- BLOG-CARDS:START --> と <!-- BLOG-CARDS:END --> のあいだへ置く。
あわせて、記事の中で同じ値を二度書いている所（<title>・h1・og:description・本文の日付とタグ）が meta と合うかを見る。
Python の標準だけで書く。
"""
import html
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
BLOG = REPO / "blog"
POSTS = BLOG / "posts"
INDEX = BLOG / "index.html"
START = "<!-- BLOG-CARDS:START -->"
END = "<!-- BLOG-CARDS:END -->"
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


class Head(HTMLParser):
    """記事から meta・<title>・h1・本文の日付とタグを拾う。"""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.meta = {}
        self.tags = []
        self.title = ""
        self.h1 = ""
        self.body_tags = []
        self.body_time = None
        self._in = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "meta":
            key = a.get("property") or a.get("name")
            if key == "article:tag":
                self.tags.append((a.get("content") or "").strip())
            elif key:
                self.meta[key] = (a.get("content") or "").strip()
        elif tag == "title":
            self._in = "title"
        elif tag == "h1" and "bl-post__title" in (a.get("class") or ""):
            self._in = "h1"
        elif tag == "a" and "bl-tag" in (a.get("class") or "").split():
            self._in = "tag"
        elif tag == "time" and self.body_time is None:
            self.body_time = a.get("datetime")

    def handle_endtag(self, tag):
        if tag in ("title", "h1", "a"):
            self._in = None

    def handle_data(self, data):
        if self._in == "title":
            self.title += data
        elif self._in == "h1":
            self.h1 += data
        elif self._in == "tag":
            self.body_tags.append(data.strip().lstrip("#"))


def read_post(path, problems):
    text = path.read_text(encoding="utf-8")
    p = Head()
    p.feed(text)
    name = path.relative_to(REPO)
    title = p.meta.get("og:title", "")
    desc = p.meta.get("description", "")
    date = p.meta.get("article:published_time", "")
    image = p.meta.get("og:image", "")
    thumb = image.rsplit("/assets/thumbs/", 1)[-1] if "/assets/thumbs/" in image else ""

    def bad(msg):
        problems.append(f"{name}: {msg}")

    if "{{" in text:
        bad("雛形の {{…}} が残っている")
    if not title:
        bad("og:title が無い")
    if not desc:
        bad("description が無い")
    if not DATE.match(date):
        bad(f"article:published_time が YYYY-MM-DD でない（{date!r}）")
    if not p.tags or any(not t or re.search(r"\s", t) for t in p.tags):
        bad(f"article:tag が無いか、空白を含む（{p.tags}）")
    if not thumb or not (BLOG / "assets" / "thumbs" / thumb).is_file():
        bad(f"og:image のサムネイルが blog/assets/thumbs/ に無い（{image!r}）")
    # 記事の中で二度書いている所
    if p.meta.get("og:description", desc) != desc:
        bad("og:description が description と違う")
    if not p.title.strip().startswith(title + " |"):
        bad(f"<title> が og:title で始まっていない（{p.title.strip()!r}）")
    if p.h1.strip() != title:
        bad(f"h1 が og:title と違う（{p.h1.strip()!r}）")
    if p.body_time != date:
        bad(f"本文の日付（{p.body_time}）が article:published_time と違う")
    if p.body_tags != p.tags:
        bad(f"本文のタグ {p.body_tags} が article:tag {p.tags} と違う")

    return {"file": path.name, "title": title, "desc": desc, "date": date, "tags": p.tags, "thumb": thumb}


def card(post):
    e = lambda s: html.escape(s, quote=True)
    tags = "\n".join(
        f'            <li><a class="bl-tag" href="?tag={e(t)}">#{e(t)}</a></li>' for t in post["tags"]
    )
    return f"""    <li data-date="{e(post['date'])}" data-tags="{e(' '.join(post['tags']))}" data-text="{e(post['title'] + ' ' + post['desc'])}">
      <article class="bl-card">
        <img class="bl-card__thumb" src="assets/thumbs/{e(post['thumb'])}" alt="" width="1200" height="630" loading="lazy">
        <div class="bl-card__body">
          <time class="bl-card__date" datetime="{e(post['date'])}">{e(post['date'])}</time>
          <h2 class="bl-card__title"><a href="posts/{e(post['file'])}">{e(post['title'])}</a></h2>
          <p class="bl-card__lede">{e(post['desc'])}</p>
          <ul class="bl-tags" aria-label="タグ">
{tags}
          </ul>
        </div>
      </article>
    </li>
"""


def main():
    check = "--check" in sys.argv[1:]
    problems = []
    posts = [read_post(p, problems) for p in sorted(POSTS.glob("*.html"))]
    posts.sort(key=lambda x: (x["date"], x["file"]), reverse=True)

    index = INDEX.read_text(encoding="utf-8")
    if index.count(START) != 1 or index.count(END) != 1:
        problems.append(f"{INDEX.relative_to(REPO)}: 印 {START} と {END} が一つずつ無い")
    if problems:
        print("blog: 記事の頭を直す", *problems, sep="\n  ")
        return 1

    head, rest = index.split(START, 1)
    _, tail = rest.split(END, 1)
    new = head + START + "\n" + "".join(card(p) for p in posts) + END + tail

    if new == index:
        print(f"blog: 一覧は記事と合っている（{len(posts)} 本）")
        return 0
    if check:
        print("blog: 一覧が記事と合っていない。python3 -I scripts/blog-index.py で作り直す")
        return 1
    INDEX.write_text(new, encoding="utf-8")
    print(f"blog: 一覧を作り直した（{len(posts)} 本）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
