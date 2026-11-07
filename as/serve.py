#!/usr/bin/env python3
import http.server
import os
import sys
import urllib.parse
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent
LOCAL_AWARENESS_PREFIX = "/__pjdhiro/assets/awareness"
AWARENESS_SUBPATH = Path("assets") / "awareness"


def find_pjdhiro_dir():
    """pjdhiro の repo を探す。PJDHIRO_DIR があればそれを使い、無ければ as/ から上へ順に
    pjdhiro/assets/awareness を探す（worktree の中からでも ~/dev/pd/pjdhiro が見つかるように）。"""
    env = os.environ.get("PJDHIRO_DIR")
    if env:
        candidate = Path(env).expanduser().resolve()
        return candidate if (candidate / AWARENESS_SUBPATH).is_dir() else None
    for parent in ROOT_DIR.parents:
        candidate = parent / "pjdhiro"
        if (candidate / AWARENESS_SUBPATH).is_dir():
            return candidate.resolve()
    return None


PJDHIRO_DIR = find_pjdhiro_dir()
LOCAL_AWARENESS_ROOT = (PJDHIRO_DIR / AWARENESS_SUBPATH).resolve() if PJDHIRO_DIR else None


class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        request_path = urllib.parse.urlparse(path).path
        if request_path == LOCAL_AWARENESS_PREFIX or request_path.startswith(f"{LOCAL_AWARENESS_PREFIX}/"):
            if LOCAL_AWARENESS_ROOT is None:
                return str(ROOT_DIR / "__pjdhiro_not_found__")
            relative = request_path.removeprefix(LOCAL_AWARENESS_PREFIX).lstrip("/")
            candidate = (LOCAL_AWARENESS_ROOT / relative).resolve()
            try:
                candidate.relative_to(LOCAL_AWARENESS_ROOT)
            except ValueError:
                return str(LOCAL_AWARENESS_ROOT)
            return str(candidate)
        return super().translate_path(path)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3003
    if LOCAL_AWARENESS_ROOT is None:
        if os.environ.get("PJDHIRO_DIR"):
            print(f"pjdhiro: PJDHIRO_DIR={os.environ['PJDHIRO_DIR']} に {AWARENESS_SUBPATH} が無い。/__pjdhiro/ は 404 になる", flush=True)
        else:
            print("pjdhiro: as/ から上に pjdhiro/assets/awareness が見つからない（PJDHIRO_DIR で指定できる）。/__pjdhiro/ は 404 になる", flush=True)
    else:
        print(f"pjdhiro: {PJDHIRO_DIR}", flush=True)
    print(f"Starting no-cache server on port {port}...")
    http.server.test(HandlerClass=NoCacheHTTPRequestHandler, port=port)
