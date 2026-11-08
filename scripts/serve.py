#!/usr/bin/env python3
"""手元の確認用サーバー。公開（.github/workflows/pages.yml）と同じ並びで配る。

  /            → pd/（サイトのファイル）
  /wiki/       → pd/wiki-out/（Quartz の出力。scripts/serve.sh が作る）
  /as/ /ks/ /cs/ → as/・ks/・cs/
  /__pjdhiro/assets/awareness/ → pjdhiro repo の assets/awareness（as/ の画像カードが使う）

公開の URL の頭（/project-design-theory/）が付いていても同じものを返す。
キャッシュはさせない。拡張子の無い URL は .html を補う（GitHub Pages と同じ）。
"""
import http.server
import os
import sys
import urllib.parse
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SITE_PREFIX = "/project-design-theory"
PJDHIRO_PREFIX = "/__pjdhiro/assets/awareness"
AWARENESS_SUBPATH = Path("assets") / "awareness"


def find_pjdhiro_awareness():
    """PJDHIRO_DIR があればそれを、無ければ repo から上へ順に pjdhiro/ を探す（worktree の中からでも見つかるように）。"""
    env = os.environ.get("PJDHIRO_DIR")
    candidates = [Path(env).expanduser()] if env else [p / "pjdhiro" for p in REPO.parents]
    for candidate in candidates:
        if (candidate / AWARENESS_SUBPATH).is_dir():
            return (candidate / AWARENESS_SUBPATH).resolve()
    return None


PJDHIRO_AWARENESS = find_pjdhiro_awareness()

# 長い頭から順に照らす。
MOUNTS = [
    (PJDHIRO_PREFIX, PJDHIRO_AWARENESS),
    ("/wiki", REPO / "pd" / "wiki-out"),
    ("/as", REPO / "as"),
    ("/ks", REPO / "ks"),
    ("/cs", REPO / "cs"),
    ("", REPO / "pd"),
]


def resolve(request_path):
    """URL のパスを手元のファイルに読み替える。外に出るパスや当てが無いものは None。"""
    if request_path == SITE_PREFIX or request_path.startswith(SITE_PREFIX + "/"):
        request_path = request_path[len(SITE_PREFIX):] or "/"
    for prefix, root in MOUNTS:
        if prefix and not (request_path == prefix or request_path.startswith(prefix + "/")):
            continue
        if root is None:
            return None
        root = root.resolve()
        relative = request_path[len(prefix):].lstrip("/")
        candidate = (root / relative).resolve()
        try:
            candidate.relative_to(root)
        except ValueError:
            return None
        if not candidate.exists() and candidate.suffix == "":
            html = candidate.with_suffix(".html")
            if html.is_file():
                return html
        return candidate
    return None


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        request_path = urllib.parse.unquote(urllib.parse.urlsplit(path).path)
        resolved = resolve(request_path)
        return str(resolved) if resolved else str(REPO / "__not_found__")

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get("PORT", "3001"))
    print(f"repo: {REPO}", flush=True)
    if PJDHIRO_AWARENESS:
        print(f"pjdhiro: {PJDHIRO_AWARENESS}", flush=True)
    else:
        print("pjdhiro: assets/awareness が見つからない（PJDHIRO_DIR で指定できる）。/__pjdhiro/ は 404 になる", flush=True)
    server = http.server.ThreadingHTTPServer(("", port), Handler)
    print(f"http://localhost:{port}/  （/as/ /ks/ /cs/ /wiki/）", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
