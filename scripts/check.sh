#!/usr/bin/env bash
# サイトの検査をまとめて走らせる。手元でも CI（.github/workflows/check.yml）でも同じものを使う。
#
#   bash scripts/check.sh
#
# 一つでも落ちたら 1 で終わる。機械で白黒がつき、公開するサイトが壊れていないかを見るものだけを入れる。
# 何を入れ、何を手で回し、何をまだ作っていないかは docs/TESTING.md。候補を挙げるだけの点検（言い訳の地の文・
# 帰属の監査）は人が判断するものなので、ここには入れない。
set -u

ROOT=$(git rev-parse --show-toplevel)
cd "$ROOT" || exit 2

failed=()
run() {
  local name=$1; shift
  echo "== $name"
  if "$@"; then echo "   ok"; else echo "   失敗：$name"; failed+=("$name"); fi
}

# 今までの四つの repo（転送だけ・非公開のアーカイブ）を前提にした参照。公開ファイルの GitHub・raw・api・Pages の URL、
# 今の repo の GitHub で git に無いファイル（原典の PDF など）へのリンク、repo 名の決め打ち、スクリプトの兄弟の並び。
# 記録（knowledge・docs・wiki ほか）は経緯として残すので見ない。中身は scripts/check-old-repo-refs.mjs。
run "今までの repo を前提にした参照" node scripts/check-old-repo-refs.mjs
run "pd：repo をまたぐ URL" bash -c 'cd pd && bash scripts/check-cross-repo-urls.sh'
run "pd：読み物の内部アンカー" bash -c 'cd pd && node scripts/reader-anchor-check.mjs'
# 対話の形の読み物で、pjdhiro の発言の引用カードの直前が見出し・畳みの題・組む道具の印になっていないか（文脈なしの発言・型 R・2026-11-10）。
run "pd：引用カードの前の文脈" node scripts/check-quote-context.mjs
run "pd：wiki の孤立ページ・不在の出典・旧用語" bash -c 'cd pd && node scripts/wiki-lint.mjs --check --quiet'
run "pd：wiki が読めない原典を出典にしていない" bash -c 'cd pd && node scripts/wiki-access-lint.mjs'
# 出典が compiled 日より後に変わった wiki のページの数。止めずに知らせるだけ（2026-11-10。一覧は pd/wiki/health/freshness-report.md）。
run "pd：wiki の古いページ（知らせるだけ）" node pd/scripts/wiki-stale-check.mjs --count
# cs の台帳で読める原典なのに、wiki の出典ページが無いものの数。止めずに知らせるだけ（2026-11-10。今までの wiki-gen-check）。
run "pd：wiki の出典ページが無い原典（知らせるだけ）" node pd/scripts/wiki-gen-check.mjs --count
# 調査の記録（cs・as の evidence）が「wiki の頁のここが誤り」と書いたのに、その頁がそのあと変わっていないものの数。
# 正本が変わらないと wiki の古いページには出ないので、別に数える。止めずに知らせるだけ（2026-11-10・#111）。
run "cs・as：記録が書いた wiki の誤りの残り（知らせるだけ）" node scripts/check-evidence-wiki-notes.mjs --count
# 公開のページと記録について、今は当たりがあるので、落とさずに数を知らせる三つ（2026-11-10・#111）：
# 読み物と入口の本文の今までの repo の名前・公開の調査の記録の作業の節・読み物の表の横送り。
# 当たりが 0 になったものは、--strict <名前> を付けて「止める」に上げる（名前は names・sections・tables）。
# 記録の作業の節は 2026-11-10 に 0 になったので、止める（--strict sections）。ほかの二つは知らせるだけ。
run "公開のページと記録（作業の節は止める。ほかは知らせるだけ）" node scripts/check-public-notices.mjs --strict sections
run "as：テスト" bash -c 'cd as && node --test tests/*.test.mjs'
run "ks：config の整合" bash -c 'cd ks && node tests/config-consistency.test.js'
run "ks：config の export" bash -c 'cd ks && node --experimental-vm-modules tests/config-exports.test.js'
run "ks：devlog の移動と深いリンク" bash -c 'cd ks && node tests/devlog-navigation.test.js && node tests/offcanvas-deeplink.test.js'
run "ks：devlog の日英" bash -c 'cd ks && node scripts/validate-devlog-i18n.mjs'
# 創造とはの、分野ごとの照合の記録（cs/evidence/evidence-Dxx-*.md）。見るものは docs/cs-review/README.md「記録の品質の点検」。
run "cs：照合の記録" node scripts/check-cs-evidence.mjs
# 創造とはの原典の台帳と記録の突き合わせ：記録が本文照合済とした原典が、台帳で読めない状態のままになっていないか。
# 台帳の行で列がずれているもの。今は当たりがあるので、止めずに数を知らせる（2026-11-10・#111。直ったら --strict に上げる）。
run "cs：原典の台帳と記録の突き合わせ（知らせるだけ）" node scripts/check-cs-ledger.mjs --count
# 意識とはの、領域ごとの照合の記録（as/evidence/evidence-Axx-*.md）と原典の台帳。見るものは docs/as-review/README.md「記録の品質の点検」。
run "as：照合の記録と台帳" node scripts/check-as-evidence.mjs
run "道具：原典を探す find-source（書誌の読み取り・分類・突き合わせ）" python3 -I scripts/test_find_source.py

# 公開するページ・データ・読み物の正本に、文字化け（U+FFFD）が無いか。scripts/ の中の検査の文字は除く。
# 今までの project-design の ci.yml の文字化けの検査の考え方を継いだ（docs/TESTING.md）。
mojibake() {
  local hits
  hits=$(git grep -l -I $'\xef\xbf\xbd' -- '*.html' '*.json' '*.js' '*.css' 'pd/content/' 'pd/wiki/' 'pd/knowledge/' 'as/assets/' 'ks/content/' ':!*/scripts/*')
  [ -z "$hits" ] || { echo "$hits"; return 1; }
}
run "公開するファイルの文字化け" mojibake

# 道具の呼び出しの文字（Claude がファイルを書く道具の閉じタグなど）が、本文の終わりに紛れていないか。
# 読み物の正本と精読ノートに残り、公開ページまで出ていた（2026-11-10・#111）。git に入っている文字のファイルを全部見る。
# この検査自身と、検査の説明を書く docs/TESTING.md は除く。
tool_residue() {
  local hits
  hits=$(git grep -n -I -E '</?(antml:)?(invoke|parameter|function_calls)[ >]|</content>|<parameter name=' -- . ':!scripts/check.sh' ':!docs/TESTING.md')
  [ -z "$hits" ] || { echo "$hits" | cut -c1-200; echo "   道具の呼び出しの文字が残っている。その行を消す（正本なら、消したあと生成し直す）"; return 1; }
}
run "道具の呼び出しの文字の紛れ込み" tool_residue

echo
if [ ${#failed[@]} -gt 0 ]; then
  echo "落ちた検査：${failed[*]}"
  exit 1
fi
echo "すべて通った"
