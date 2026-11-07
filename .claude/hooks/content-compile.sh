#!/usr/bin/env bash
set -euo pipefail

# PostToolUse hook: 公開ページが読む Markdown を書き換えたら、
# wiki リンク入りの compiled 版を作り直す。
#   pd/content/*.md     → pd/content/compiled/  （pd/scripts/compile-content-links.mjs）
#   as/assets/about/*.md → as/assets/about/compiled/ （as/scripts/compile-content-links.mjs）
# 今までの project-design・awareness-space の content-compile.sh を、この repo の構成に合わせて一つにした。

HOOK_PAYLOAD="$(cat)" python3 - <<'PY'
import json, os, sys, pathlib, subprocess

payload = json.loads(os.environ.get("HOOK_PAYLOAD") or "{}")

if payload.get("hook_event_name") != "PostToolUse":
    raise SystemExit(0)

tool_input = payload.get("tool_input") or {}
file_path = tool_input.get("file_path", "") or tool_input.get("path", "")
if not file_path or not file_path.endswith(".md"):
    raise SystemExit(0)

try:
    top = subprocess.run(["git", "rev-parse", "--show-toplevel"], capture_output=True, text=True, timeout=5,
                         cwd=str(pathlib.Path(file_path).parent))
    repo_root = pathlib.Path(top.stdout.strip())
except Exception:
    raise SystemExit(0)
if not repo_root or not repo_root.is_dir():
    raise SystemExit(0)

try:
    rel = pathlib.Path(file_path).resolve().relative_to(repo_root.resolve())
except ValueError:
    raise SystemExit(0)

parts = rel.parts
targets = {
    ("pd", "content"): "pd",
    ("as", "assets", "about"): "as",
}
site = None
for prefix, name in targets.items():
    n = len(prefix)
    # 直下の .md だけ（compiled/ や下の階層は除く）
    if parts[:n] == prefix and len(parts) == n + 1:
        site = name
        break
if site is None:
    raise SystemExit(0)

site_root = repo_root / site
script = site_root / "scripts" / "compile-content-links.mjs"
if not script.is_file():
    raise SystemExit(0)

file_arg = str(pathlib.Path(*parts[1:]))
try:
    result = subprocess.run(["node", str(script), "--file", file_arg], cwd=str(site_root),
                            capture_output=True, text=True, timeout=15)
    if result.returncode == 0:
        print(f"Content compiled: {result.stderr.strip()}", file=sys.stderr)
    else:
        print(f"Content compile failed: {result.stderr[:300]}", file=sys.stderr)
except subprocess.TimeoutExpired:
    print("Content compile timed out (15s)", file=sys.stderr)
except FileNotFoundError:
    print("node not found, skipping content compile", file=sys.stderr)

raise SystemExit(0)
PY
