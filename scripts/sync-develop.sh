#!/usr/bin/env bash
# セッションの始めに、worktree の枝を develop に揃える。fetch・早送り・結果の確かめを一つにまとめる。
#
#   bash scripts/sync-develop.sh
#
# 単独の呼び出しで回す（パイプ・リダイレクト・&&・cd と組まない）。.claude/settings.json の
# sandbox.excludedCommands が、呼び出しの全体がこの形のときだけサンドボックスの外で動かす。
# 中で動くと .claude/ に書けず、作業ツリーだけが進んで枝と食い違う（docs/rules/corrections-k.md「繰り返し」・2026-11-08〜11-10）。
#
# すること：
#   1. サンドボックスの中で動いていないか（.claude/ に書けるか）を見る。中なら何もせずに止まる。
#   2. git fetch origin。
#   3. 本体の develop が origin/develop より遅れていて、本体の作業ツリーがきれいなら、本体を早送りする。
#   4. worktree の枝を develop に揃える：
#      - develop の祖先なら早送り。
#      - develop に無い commit が、どれも同じ中身で develop に入っているなら（git cherry で全部 -）、枝を develop に付け直す。
#      - develop に無い commit があるなら、揃えずに止まる（先にその枝を develop へ取り込む）。
#      - 作業ツリーに書きかけがあるなら、揃えずに止まる。
#   5. 確かめ：枝と develop が同じか、作業ツリーが枝と食い違っていないか、取り込んだ .claude/ の差分。
# 終了コード：0 揃った／1 止まった（理由を出す）。
set -u

say() { printf '%s\n' "$*"; }
fail() { printf 'sync-develop: %s\n' "$*" >&2; exit 1; }

top="$(git rev-parse --show-toplevel)" || fail "git の作業ツリーの中で回す"
cd "$top" || exit 1
common="$(cd "$(git rev-parse --git-common-dir)" && pwd)"
main_top="$(dirname "$common")"

# 1. サンドボックスの外か。中なら .claude/skills/ に書けない。
probe="$top/.claude/skills/.sync-develop-probe.$$"
if ! ( : > "$probe" ) 2>/dev/null; then
  fail "サンドボックスの中で動いている（.claude/ に書けない）。何も変えていない。
  呼び出しを 'bash scripts/sync-develop.sh' だけにして回し直す（パイプ・リダイレクト・&& と組まない）。"
fi
rm -f "$probe"

# 2. fetch
say "## fetch"
git fetch -q origin || fail "git fetch origin が通らない"

# 3. 本体の develop と origin/develop
say "## 本体の develop と origin/develop"
dev="$(git rev-parse develop)"
odev="$(git rev-parse origin/develop)"
if [ "$dev" = "$odev" ]; then
  say "同じ（${dev:0:7}）"
elif git merge-base --is-ancestor "$dev" "$odev"; then
  main_branch="$(git -C "$main_top" branch --show-current)"
  if [ "$main_branch" = develop ] && [ -z "$(git -C "$main_top" status --porcelain --untracked-files=no)" ]; then
    git -C "$main_top" merge -q --ff-only origin/develop || fail "本体の develop を origin/develop へ早送りできない"
    dev="$(git rev-parse develop)"
    say "本体の develop を origin/develop へ早送りした（${dev:0:7}）"
  else
    say "注意：本体の develop が origin/develop より遅れているが、本体に書きかけがある（または develop を出していない）ので触らない"
  fi
elif git merge-base --is-ancestor "$odev" "$dev"; then
  say "本体の develop が $(git rev-list --count "$odev..$dev") commit 先にある（まだ push していない）"
else
  say "注意：本体の develop と origin/develop が分かれている（develop に $(git rev-list --count "$odev..$dev")、origin に $(git rev-list --count "$dev..$odev")）。揃えるのは develop のまま進める"
fi

# 4. worktree の枝
branch="$(git branch --show-current)"
say "## worktree（${top#$main_top/}・枝 ${branch:-なし}）"
if [ "$top" = "$main_top" ]; then
  say "本体の checkout なので、枝は動かさない"
  exit 0
fi
[ -n "$branch" ] || fail "枝が無い（detached HEAD）。揃えずに止まる"
[ "$branch" != develop ] || fail "worktree で develop を出している。揃えずに止まる"
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  git status --short --untracked-files=no >&2
  fail "作業ツリーに書きかけがある。揃えずに止まった（先に commit するか、develop へ取り込む）"
fi

old="$(git rev-parse HEAD)"
if [ "$old" = "$dev" ]; then
  say "もう develop と同じ（${dev:0:7}）"
elif git merge-base --is-ancestor "$old" "$dev"; then
  git merge -q --ff-only develop || fail "早送りが通らない"
  say "早送りした（${old:0:7} → ${dev:0:7}・$(git rev-list --count "$old..$dev") commit）"
else
  ahead="$(git cherry develop HEAD | grep -c '^+')"
  if [ "$ahead" -eq 0 ]; then
    git reset -q --keep develop || fail "枝を develop に付け直せない"
    say "枝の commit $(git rev-list --count "develop..$old") 本は、どれも同じ中身で develop に入っていたので、枝を develop に付け直した（${old:0:7} → ${dev:0:7}）"
  else
    git cherry -v develop HEAD | grep '^+' >&2
    fail "develop に無い commit が ${ahead} 本ある。揃えずに止まった（先にこの枝を本体の develop へ取り込む）"
  fi
fi

# 5. 確かめ
say "## 確かめ"
now="$(git rev-parse HEAD)"
[ "$now" = "$dev" ] || fail "枝（${now:0:7}）が develop（${dev:0:7}）と違う"
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  git status --short --untracked-files=no >&2
  fail "作業ツリーが枝と食い違っている（上の差分）。サンドボックスで止まった取り込みの形"
fi
say "枝と develop は同じ（${now:0:7}）。作業ツリーは枝と食い違っていない"
if [ "$old" != "$now" ]; then
  claude_diff="$(git diff --stat "$old" "$now" -- .claude/)"
  if [ -n "$claude_diff" ]; then
    say "取り込んだ .claude/ の差分："
    say "$claude_diff"
  else
    say "取り込んだ差分に .claude/ は無い"
  fi
fi
say "揃った。"
