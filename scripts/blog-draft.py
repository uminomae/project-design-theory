#!/usr/bin/env python3
"""blog の記事の下書きを、claude.ai のアーティファクト（非公開のページ）に載せられる一枚の HTML にする。

使い方: python3 -I scripts/blog-draft.py blog/posts/<記事>.html <書き出す先.html>

- blog/design-system の CSS と theme.js・dialog.js をページの中に写す（アーティファクトは外の CSS を読めない）
- Menu は外す。このサイトのほかのページへの相対リンクは、公開の URL に直す
- YouTube の埋め込みは、アーティファクトの中では再生できないので、動画へのリンクに置き換える
- 書き出した HTML は repo に入れない（Claude の作業場所に置く）
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DS = ROOT / "blog" / "design-system"
SITE = "https://uminomae.github.io/project-design-theory/"


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src = Path(sys.argv[1]).read_text(encoding="utf-8")
    out = Path(sys.argv[2])

    title = re.search(r"<title>(.*?)\s*\|", src).group(1).strip()
    main_html = re.search(r"<main.*?</main>", src, re.S).group(0)
    dialogs = "\n".join(re.findall(r"<dialog.*?</dialog>", src, re.S))
    body = main_html + "\n" + dialogs

    def video(m):
        vid = m.group(1)
        return (f'<a class="bl-draft-video" href="https://www.youtube.com/shorts/{vid}">'
                f'▶ YouTube で動画を開く</a>')
    body = re.sub(r'<iframe class="bl-video" src="https://www\.youtube-nocookie\.com/embed/([\w-]+)"[^>]*></iframe>', video, body)

    body = body.replace('href="../../', f'href="{SITE}')
    body = body.replace('href="../?', f'href="{SITE}blog/?')
    body = body.replace('href="../"', f'href="{SITE}blog/"')

    css = "\n".join((DS / f).read_text(encoding="utf-8") for f in ("tokens.css", "base.css", "components.css"))
    css += """
.bl-draft-banner { font-family: var(--bl-font-ui); font-size: var(--bl-size-sm); color: var(--bl-ink-sub);
  border: 1px dashed var(--bl-rule); border-radius: var(--bl-radius); padding: var(--bl-space-2) var(--bl-space-3);
  margin: 0 0 var(--bl-space-5); }
.bl-draft-video { display: block; max-width: 315px; margin: 0 auto; padding: var(--bl-space-5) var(--bl-space-4);
  text-align: center; font-family: var(--bl-font-ui); background: var(--bl-surface);
  border: 1px solid var(--bl-rule); border-radius: var(--bl-radius); }
"""
    js = "\n".join((DS / f).read_text(encoding="utf-8") for f in ("theme.js", "dialog.js"))

    html = f"""<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&family=Noto+Serif+JP:wght@400;500&display=swap">
<style>
{css}
</style>
<header class="bl-header">
  <div class="bl-header__inner">
    <span class="bl-header__name">Blog</span>
    <nav class="bl-header__nav" aria-label="見た目"><button type="button" class="bl-theme-toggle" data-bl-theme-toggle>暗く</button></nav>
  </div>
</header>
{body.replace('<article class="bl-post">', '<article class="bl-post">' + chr(10) + '    <p class="bl-draft-banner">下書き（非公開）。直し終えたら blog に載せます。</p>', 1)}
<script>
{js}
</script>
"""
    out.write_text(html, encoding="utf-8")
    print(f"blog-draft: {out}")


if __name__ == "__main__":
    main()
