#!/usr/bin/env python3
"""generate-sessions.py — git log → sessions.json

コミットログを3時間の空白で区切り、セッション単位のJSONを生成する。
写真フォルダのように振り返るためのデータ。

Usage:
    python scripts/generate-sessions.py --dry-run           # 書き出さずに標準出力（まずこれで見る）
    python scripts/generate-sessions.py --since 2026-11-07  # 日付指定
    python scripts/generate-sessions.py --repo project-design-theory  # 指定リポジトリのみ
    python scripts/generate-sessions.py --output /tmp/sessions.json   # 別の場所へ書く

読む先（2026-11-10・Issue #111 の問い 14）：
    設定（devlog-config.json）の approved_repos に local_path が無ければ、この道具が置かれている
    repo（project-design-theory）の履歴を読む。pathspec があれば、その下（ks/）の commit だけを読む。
    別の clone を読ませたいときは、設定に手元の置き場を書かず、--path か環境変数 DEVLOG_REPO_PATH で渡す。
    今までの kesson-space の履歴は、この repo には無い（中身だけを複製した）。その履歴から作った
    開発記録は、assets/devlog/sessions.json と content/devlog/ に出来上がりとして残っている。
"""

import subprocess
import json
import sys
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path
from collections import Counter
import argparse

SCRIPT_DIR = Path(__file__).parent
CONFIG_PATH = SCRIPT_DIR / "devlog-config.json"
PROJECT_ROOT = SCRIPT_DIR.parent

DEFAULT_CATEGORIES = {
    "shader":   {"pattern": ["shaders/", ".glsl"],      "color": "#1a237e"},
    "document": {"pattern": ["docs/", ".md"],           "color": "#f59e0b"},
    "config":   {"pattern": ["config.", ".json"],       "color": "#94a3b8"},
    "code":     {"pattern": ["src/", ".js"],            "color": "#22c55e"},
    "asset":    {"pattern": ["assets/", ".svg", ".png"],"color": "#a855f7"},
    "infra":    {"pattern": ["scripts/", ".github/", ".yml"], "color": "#ef4444"},
}

def load_config():
    if not CONFIG_PATH.exists():
        return {}
    with open(CONFIG_PATH) as f:
        return json.load(f)

def check_approval(repo_name, config, repo_def=None):
    if repo_def and repo_def.get("auto_approve"):
        print(f"  ✓ auto-approved: {repo_name}", file=sys.stderr)
        return repo_def
    for repo in config["approved_repos"]:
        if repo["name"] == repo_name:
            if config.get("auto_approve", False):
                print(f"  ✓ auto-approved: {repo_name}", file=sys.stderr)
                return repo
            else:
                print(f"  ⚠ {repo_name} は承認済みだが auto_approve=false", file=sys.stderr)
                return repo
    print(f"  ✗ {repo_name} は approved_repos に含まれない。スキップ。", file=sys.stderr)
    return None

def default_repo_path():
    """この道具が置かれている repo の根。worktree でも動く。"""
    result = subprocess.run(["git", "-C", str(SCRIPT_DIR), "rev-parse", "--show-toplevel"],
                            capture_output=True, text=True)
    if result.returncode == 0 and result.stdout.strip():
        return result.stdout.strip()
    return str(PROJECT_ROOT.parent)

def resolve_repo_path(repo_def, cli_path=None):
    """読む先：--path → 環境変数 DEVLOG_REPO_PATH → 設定の local_path → この repo。"""
    return cli_path or os.getenv("DEVLOG_REPO_PATH") or repo_def.get("local_path") or default_repo_path()

def get_git_log(repo_path, since=None, pathspec=None):
    repo_path = Path(repo_path).expanduser()
    # worktree では .git はファイルなので、exists で見る（ディレクトリとは限らない）
    if not (repo_path / ".git").exists():
        print(f"  ✗ .git not found: {repo_path}", file=sys.stderr)
        return []

    cmd = ["git", "-C", str(repo_path), "log", "--format=%H|%aI|%s|%an", "--reverse"]
    if since:
        cmd.append(f"--since={since}")
    if pathspec:
        cmd += ["--", pathspec]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ✗ git log failed: {result.stderr}", file=sys.stderr)
        return []

    commits = []
    for line in result.stdout.strip().split("\n"):
        if not line: continue
        parts = line.split("|", 3)
        if len(parts) < 4: continue
        commits.append({"hash": parts[0], "datetime": parts[1], "message": parts[2], "author": parts[3]})

    cmd_stat = ["git", "-C", str(repo_path), "log", "--format=%H", "--numstat", "--reverse"]
    if since:
        cmd_stat.append(f"--since={since}")
    if pathspec:
        cmd_stat += ["--", pathspec]

    result_stat = subprocess.run(cmd_stat, capture_output=True, text=True)
    if result_stat.returncode == 0:
        current_hash = None
        file_stats = {}
        for line in result_stat.stdout.strip().split("\n"):
            line = line.strip()
            if not line: continue
            if len(line) == 40 and all(c in "0123456789abcdef" for c in line):
                current_hash = line
                file_stats[current_hash] = []
            elif current_hash and "\t" in line:
                parts = line.split("\t")
                if len(parts) == 3:
                    ins = int(parts[0]) if parts[0] != "-" else 0
                    dels = int(parts[1]) if parts[1] != "-" else 0
                    file_stats[current_hash].append((ins, dels, parts[2]))

        for commit in commits:
            stats = file_stats.get(commit["hash"], [])
            commit["files"] = [s[2] for s in stats]
            commit["insertions"] = sum(s[0] for s in stats)
            commit["deletions"] = sum(s[1] for s in stats)

    return commits

def split_sessions(commits, gap_hours=3):
    if not commits: return []
    sessions = []
    current_session = [commits[0]]
    gap = timedelta(hours=gap_hours)
    for i in range(1, len(commits)):
        prev_dt = datetime.fromisoformat(commits[i - 1]["datetime"])
        curr_dt = datetime.fromisoformat(commits[i]["datetime"])
        if curr_dt - prev_dt > gap:
            sessions.append(current_session)
            current_session = [commits[i]]
        else:
            current_session.append(commits[i])
    if current_session:
        sessions.append(current_session)
    return sessions

def classify_file(filepath, categories):
    for cat_name, cat_def in categories.items():
        for pattern in cat_def["pattern"]:
            if pattern in filepath:
                return cat_name
    return "code"

def dominant_category(files, categories):
    if not files: return "code"
    cats = [classify_file(f, categories) for f in files]
    counter = Counter(cats)
    return counter.most_common(1)[0][0]

def calc_intensity(commit_count, insertions, deletions, file_count):
    i1 = min(1.0, commit_count / 30) * 0.5
    i2 = min(1.0, (insertions + deletions) / 500) * 0.3
    i3 = min(1.0, file_count / 15) * 0.2
    return round(i1 + i2 + i3, 3)

def build_session_json(sessions, repo_name, categories):
    result = []
    for idx, session_commits in enumerate(sessions):
        start_dt = session_commits[0]["datetime"]
        end_dt = session_commits[-1]["datetime"]
        t0 = datetime.fromisoformat(start_dt)
        t1 = datetime.fromisoformat(end_dt)
        duration_min = max(1, int((t1 - t0).total_seconds() / 60))
        all_files = []
        total_ins = 0
        total_dels = 0
        for c in session_commits:
            all_files.extend(c.get("files", []))
            total_ins += c.get("insertions", 0)
            total_dels += c.get("deletions", 0)
        unique_files = sorted(set(all_files))
        messages = [c["message"] for c in session_commits]
        dom_cat = dominant_category(unique_files, categories)
        intensity = calc_intensity(len(session_commits), total_ins, total_dels, len(unique_files))
        session_id = f"{repo_name[:2]}{idx + 1:03d}"
        result.append({
            "id": session_id, "repo": repo_name,
            "start": start_dt, "end": end_dt, "duration_min": duration_min,
            "commit_count": len(session_commits), "files_changed": unique_files,
            "insertions": total_ins, "deletions": total_dels,
            "dominant_category": dom_cat,
            "color": categories.get(dom_cat, {}).get("color", "#94a3b8"),
            "messages": messages, "intensity": intensity, "texture_url": None
        })
    return result

def main():
    parser = argparse.ArgumentParser(description="git log → sessions.json")
    parser.add_argument("--repo", help="対象リポジトリ名")
    parser.add_argument("--path", help="リポジトリのローカルパス（CI用。configのlocal_pathを上書き）")
    parser.add_argument("--since", help="開始日 (YYYY-MM-DD)")
    parser.add_argument("--dry-run", action="store_true", help="標準出力のみ")
    parser.add_argument("--output", help="出力先パス")
    parser.add_argument("--force", action="store_true",
                        help="出力先に、この道具の形でない開発記録（手で整えた sessions.json）があっても上書きする")
    args = parser.parse_args()

    config = load_config()
    categories = config.get("categories", DEFAULT_CATEGORIES) or DEFAULT_CATEGORIES
    gap_hours = config.get("session_gap_hours", 3)

    ci_workspace = os.getenv("GITHUB_WORKSPACE") if os.getenv("GITHUB_ACTIONS") == "true" else None
    if ci_workspace and not args.repo and not args.path:
        repo_name = os.getenv("GITHUB_REPOSITORY", Path(ci_workspace).name).split("/")[-1]
        targets = [{
            "name": repo_name,
            "local_path": ci_workspace,
            "permissions": ["read_log"],
            "auto_approve": True,
        }]
    elif args.repo:
        targets = [r for r in config.get("approved_repos", []) if r["name"] == args.repo]
        if not targets:
            print(f"✗ '{args.repo}' は approved_repos に含まれない", file=sys.stderr)
            sys.exit(1)
    else:
        targets = config.get("approved_repos", [])

    if not targets:
        print("✗ approved_repos が空です。--path か --repo を指定してください。", file=sys.stderr)
        sys.exit(1)

    all_sessions = []
    for repo_def in targets:
        repo_name = repo_def["name"]
        print(f"\n--- {repo_name} ---", file=sys.stderr)
        approved = check_approval(repo_name, config, repo_def)
        if not approved: continue
        if "read_log" not in approved.get("permissions", []):
            print(f"  ✗ read_log 権限なし", file=sys.stderr)
            continue
        repo_path = resolve_repo_path(repo_def, args.path)
        commits = get_git_log(repo_path, since=args.since, pathspec=repo_def.get("pathspec"))
        print(f"  コミット数: {len(commits)}", file=sys.stderr)
        if not commits: continue
        sessions = split_sessions(commits, gap_hours)
        print(f"  セッション数: {len(sessions)}", file=sys.stderr)
        session_jsons = build_session_json(sessions, repo_name, categories)
        all_sessions.extend(session_jsons)

    all_sessions.sort(key=lambda s: s["start"], reverse=True)
    output_json = json.dumps(all_sessions, indent=2, ensure_ascii=False)

    if args.dry_run:
        print(output_json)
    else:
        output_path = args.output or str(PROJECT_ROOT / config.get("output_path", "assets/devlog/sessions.json"))
        output_path = Path(output_path)
        # 今の assets/devlog/sessions.json は、今までの履歴から作って手で整えた出来上がり（題・要約・表紙つき）。
        # この道具の出力（repo・messages を持つ行）とは形が違うので、黙って上書きしない。
        if output_path.exists() and not args.force:
            try:
                existing = json.loads(output_path.read_text(encoding="utf-8"))
            except (ValueError, OSError):
                existing = None
            if isinstance(existing, list) and existing and not all(
                    isinstance(e, dict) and "repo" in e and "messages" in e for e in existing):
                print(f"\n✗ {output_path} には、この道具の形でない開発記録があります。上書きしません。", file=sys.stderr)
                print("  中身を見るなら --dry-run、別の場所へ書くなら --output、上書きするなら --force。", file=sys.stderr)
                sys.exit(1)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(output_json, encoding="utf-8")
        print(f"\n✓ {len(all_sessions)} sessions → {output_path}", file=sys.stderr)

if __name__ == "__main__":
    main()
