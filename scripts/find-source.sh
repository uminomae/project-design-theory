#!/usr/bin/env bash
# 原典（論文・本）の置き場所を、決まった順番で全部引く。docs/rules/sources.md §5 の手順の道具。中身は scripts/find_source.py。
#
#   # 探す：Crossref → Unpaywall → OpenAlex → Semantic Scholar → CORE → Wayback の CDX を、早く当たっても全部引く
#   bash scripts/find-source.sh find --doi 10.1037/h0029841 --ledger .cache/raw/find-ledger.md
#   bash scripts/find-source.sh find --title "Nine Levels of Increasing Embrace" --author Cook-Greuter --year 2013 \
#        --domain cook-greuter.com:author
#
#   # 取った PDF を書誌と突き合わせる（先頭が %PDF か・頭の頁に題と著者があるか・頁数）
#   bash scripts/find-source.sh check paper.pdf --title "…" --author Rubin --year 1970
#
#   # 写しを差し替えるときの全文比較（pdftotext どうし）
#   bash scripts/find-source.sh compare old.pdf new.pdf
#
# 環境変数（repo は公開なのでファイルに書かない）：FIND_SOURCE_EMAIL（Unpaywall に要る）・CORE_API_KEY（CORE に要る）。
# サンドボックスでは、allowed_domains に api.crossref.org・api.unpaywall.org・api.openalex.org・api.semanticscholar.org・
# api.core.ac.uk・web.archive.org を並べて走らせる。
set -u
exec python3 -I "$(cd "$(dirname "$0")" && pwd)/find_source.py" "$@"
