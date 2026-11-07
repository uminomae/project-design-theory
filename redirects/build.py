#!/usr/bin/env python3
"""今までの公開ページを転送元にするための、中身のないページを作る。

    python3 redirects/build.py

redirects/<今までの repo の名前>/ に index.html・404.html・README.md を書く。
今までの repo を名前を変えて非公開にしたあと、同じ名前で公開 repo を作り直し、
このディレクトリの中身だけを置いて Pages で出す（docs/BUILD-PLAN.md）。

404.html は、今までの URL の下の階層（/awareness-space/reader/x.html など）も、
新しい場所の同じ階層へ送る。GitHub Pages は、無いページに 404.html を返すため。
"""
from pathlib import Path

BASE = "https://uminomae.github.io/project-design-theory/"
SITES = {
    # 今までの repo の名前: (新しい場所, ページの題)
    "project-design": ("", "プロジェクトデザイン論"),
    "awareness-space": ("as/", "意識とは"),
    "kesson-space": ("ks/", "欠損駆動思考"),
    "creation-space": ("cs/", "創造とは"),
}

PAGE = """<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>{title} — 移転しました</title>
<link rel="canonical" href="{dest}">
<script>
  // 今までの URL の階層・クエリ・# を保ったまま、新しい場所へ送る
  (function () {{
    var old = "/{repo}/";
    var path = location.pathname;
    var rest = path.indexOf(old) === 0 ? path.slice(old.length) : "";
    location.replace("{dest}" + rest + location.search + location.hash);
  }})();
</script>
<style>
  body {{ font-family: system-ui, sans-serif; margin: 0; padding: 4rem 1rem; color: #222; background: #fff; text-align: center; }}
  a {{ color: #2a5db0; }}
  @media (prefers-color-scheme: dark) {{ body {{ color: #ddd; background: #111; }} a {{ color: #8ab4f8; }} }}
</style>
</head>
<body>
<p>「{title}」は移転しました。</p>
<p><a href="{dest}">{dest}</a></p>
</body>
</html>
"""

README = """# {repo}

「{title}」は移転しました。新しい場所：{dest}

この repo は、今までの公開ページの URL を新しい場所へ送るためだけのものです。中身は
https://github.com/uminomae/project-design-theory にあります。
"""

root = Path(__file__).resolve().parent
for repo, (sub, title) in SITES.items():
    dest = BASE + sub
    out = root / repo
    out.mkdir(exist_ok=True)
    page = PAGE.format(title=title, dest=dest, repo=repo)
    (out / "index.html").write_text(page, encoding="utf-8")
    (out / "404.html").write_text(page, encoding="utf-8")
    (out / "README.md").write_text(README.format(repo=repo, title=title, dest=dest), encoding="utf-8")
    print(f"{repo} -> {dest}")
