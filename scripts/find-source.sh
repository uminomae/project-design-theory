#!/usr/bin/env bash
# 原典（論文・本）を探す道具。docs/rules/sources.md §5 の手順の中身。使い方と結果の読み方は .claude/skills/find-source/SKILL.md。
# 中身は scripts/find_source.py、テストは scripts/test_find_source.py（bash scripts/check.sh が走らせる）。
#
#   # 探す：Crossref → Unpaywall → OpenAlex → Semantic Scholar → Europe PMC → CORE → Internet Archive → Wayback を、
#   #       早く当たっても全部引く。頭に判定（自動で取れそうか・ブラウザでの保存が要るか）が一行で出る
#   bash scripts/find-source.sh find --doi 10.1037/h0029841 --ledger .cache/raw/find-ledger.md
#   bash scripts/find-source.sh find --cite "Wilson, J.T. (1966). Did the Atlantic Close and then Re-Open? *Nature* 211, 676-681."
#   bash scripts/find-source.sh find --title "Nine Levels of Increasing Embrace" --author Cook-Greuter --year 2013 \
#        --domain cook-greuter.com:author --url <確認画面で止まった PDF の URL>
#
#   # 取る：一度だけ取り、先頭が %PDF か・途中で切れていないか・頭の頁の書誌を確かめてから保存する
#   bash scripts/find-source.sh fetch <置き場の URL> --out <保存名>.pdf --cite "…" --hosts-file <find-hosts.tsv>
#
#   # 手元の PDF を書誌と突き合わせる（題・著者・頁数と頁の範囲・掲載誌・別の DOI・再録の印・前付けだけ）
#   bash scripts/find-source.sh check paper.pdf --cite "Rubin (1970). Measurement of romantic love. *JPSP* 16(2), 265-273."
#
#   # 写しを差し替えるときの全文比較（pdftotext どうし）
#   bash scripts/find-source.sh compare old.pdf new.pdf
#
#   # まとめて流す：台帳の行や、id・書誌の一行・止まった URL の表（TSV）
#   bash scripts/find-source.sh batch --manifest cs/knowledge/raw/manifest.md --status blocked-access --domain-id D05 --out <dir>
#
#   # 広く探す：主題・引用している論文・参考文献・著者（候補の一覧。OA かどうかつき）
#   bash scripts/find-source.sh discover --topic "self-organized criticality review" --oa-only
#   bash scripts/find-source.sh discover --cited-by 10.1103/PhysRevLett.59.381 --match "failure" --oa-only
#
# 環境変数（repo は公開なのでファイルに書かない。無ければその経路は飛ばす）：FIND_SOURCE_EMAIL（Unpaywall）・CORE_API_KEY・
# OPENALEX_API_KEY・S2_API_KEY。
# サンドボックスでは、allowed_domains に api.crossref.org・api.unpaywall.org・api.openalex.org・api.semanticscholar.org・
# www.ebi.ac.uk・api.core.ac.uk・archive.org・web.archive.org を並べる（fetch は、取りに行く先のホストも）。
set -u
exec python3 -I "$(cd "$(dirname "$0")" && pwd)/find_source.py" "$@"
