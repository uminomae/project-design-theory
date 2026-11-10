#!/usr/bin/env bash
# PreToolUse hook（Bash）：git の取り込み（merge・pull）を、ほかのコマンドと組んだ呼び出しで回すのを止める。
# .claude/settings.json の sandbox.excludedCommands は、呼び出しの全体が `git merge --ff-only …` などに合うときだけ
# サンドボックスの外で動かす。パイプ・リダイレクト・&&・;・改行と組むと中に残り、.claude/ で止まって作業ツリーだけが進む。
# 確認の文では止まらなかった（規約を読む前の操作は、読んで止める確認では止まらない）ので、機械で止める。
# 経緯：docs/rules/corrections-k.md の K1 と「繰り返し」（2026-11-09〜11-10・pjdhiro 2026-11-10 に入れた）。

HOOK_PAYLOAD="$(cat)" python3 -I - <<'PY'
import json, os, re, sys

try:
    p = json.loads(os.environ.get("HOOK_PAYLOAD") or "{}")
except ValueError:
    sys.exit(0)
if p.get("tool_name") != "Bash":
    sys.exit(0)
cmd = ((p.get("tool_input") or {}).get("command") or "").strip()
if not cmd:
    sys.exit(0)

# heredoc の本文（commit の文など）は見ない。
head = cmd.split("<<", 1)[0]
C = r'(?:\s+-C\s+(?:"[^"]*"|\'[^\']*\'|\S+))?'
SUB = r'\s+(?:merge|pull)(?=\s|$)'
if not re.search(r'(?:^|[\s;&|(])git' + C + SUB, head):
    sys.exit(0)

# 取り込みだけの呼び出し（組んでいない）は通す。引用符の中（commit の文など）の記号は見ない。
unquoted = re.sub(r'"(?:[^"\\]|\\.)*"|\'[^\']*\'', '""', cmd)
if re.fullmatch(r'git' + C + SUB + r'[^|;&<>`$\n]*', unquoted):
    # 単独でも、--ff-only の無い取り込みは excludedCommands に合わず、サンドボックスの中で走る。
    # 外で動かす印（dangerouslyDisableSandbox）が無ければ止める。--abort・--continue・--quit は通す
    # （2026-11-10・膜の背景の直しのセッションで、単独の `git merge --no-edit develop` が中で走り、.claude/ で止まった。pjdhiro 2026-11-11「入れる」）。
    ti = p.get("tool_input") or {}
    if (ti.get("dangerouslyDisableSandbox") is True
            or re.search(r'\s--(?:ff-only|abort|continue|quit)(?=\s|$)', unquoted)):
        sys.exit(0)
    print(
        "止めました：--ff-only の無い git の取り込み（merge・pull）は、sandbox.excludedCommands に合わず、"
        "サンドボックスの中で走って .claude/ で止まり、作業ツリーだけが半端に進みます。"
        "worktree を develop に揃えるなら `bash scripts/sync-develop.sh` だけを回し、止まったらその案内に従ってください"
        "（枝に develop に無い commit があれば、先に本体の develop へ枝を取り込む）。"
        "早送りで済むなら `--ff-only` を付け、merge の commit が要るなら、この呼び出しをサンドボックスの外で回してください"
        "（docs/rules/corrections-k.md の K1）。",
        file=sys.stderr,
    )
    sys.exit(2)

print(
    "止めました：git の取り込み（merge・pull）を、パイプ・リダイレクト・&&・;・改行などと組んで回そうとしています。"
    "sandbox.excludedCommands は呼び出しの全体が合うときだけサンドボックスの外で動かすので、組むと中に残り、"
    ".claude/ で止まって作業ツリーだけが進みます。worktree を develop に揃えるなら `bash scripts/sync-develop.sh` だけを、"
    "ほかの取り込みは取り込みだけを一つの呼び出しにして、出力はそのまま見てください。"
    "commit の文が要る merge は、-m を重ねて一行ずつ渡せます（docs/rules/corrections-k.md の K1）。",
    file=sys.stderr,
)
sys.exit(2)
PY
