#!/usr/bin/env python3
"""原典（論文・本）の置き場所を、決まった順番で全部引いて表にする。docs/rules/sources.md §5 の手順の道具。

使い方は scripts/find-source.sh の頭。三つのモードがある。

  find     DOI か題（＋著者・年）から、Crossref → Unpaywall → OpenAlex → Semantic Scholar → CORE → Wayback の CDX を
           順に全部引き、見つかった場所を「誰が上げた版か」つきの表で出す。早く当たっても止めない。
  check    手元の PDF を書誌と突き合わせる（先頭が %PDF か・頭の頁に題と著者があるか・頁数）。
  compare  二つの PDF の本文（pdftotext）を突き合わせる。写しを差し替えるときの全文比較。

ネットワークに出る先（サンドボックスの allowed_domains に並べる）：
  api.crossref.org・api.unpaywall.org・api.openalex.org・api.semanticscholar.org・api.core.ac.uk・web.archive.org

決まり（sources §5-7）：自動取得を拒むサイトに、別の名乗り（ブラウザのふりをした User-Agent など）で取りに行かない。
この道具は API と CDX の一覧を引くだけで、PDF そのものは取りに行かない。名乗りは下の UA だけ。

外の情報（メール・キー）は環境変数で渡す。repo は公開なので、ファイルに書かない。
  FIND_SOURCE_EMAIL  Unpaywall に要る連絡先（Crossref・OpenAlex の礼儀の欄にも使う）。無ければ Unpaywall は飛ばす
  CORE_API_KEY       CORE の API キー。無ければ CORE は飛ばす
"""

import argparse
import datetime as dt
import difflib
import json
import os
import re
import subprocess
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request

UA = "project-design-theory-find-source/1.0 (+https://github.com/uminomae/project-design-theory)"
TIMEOUT = 30

# ---------------------------------------------------------------- 共通


def norm(s):
    s = unicodedata.normalize("NFKC", s or "").lower()
    s = re.sub(r"<[^>]+>", " ", s)  # Crossref の題に入る <i> など
    s = re.sub(r"[^\w\s]|_", " ", s)  # URL のファイル名の issue_1_starr_and_torbert も語に分ける
    return re.sub(r"\s+", " ", s).strip()


STOP = set("a an the of and or in on for to with from by at as is are its toward towards into".split())


def words(s):
    return [w for w in norm(s).split() if w not in STOP and len(w) > 2]


NUMS = {"one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8",
        "nine": "9", "ten": "10", "first": "1st", "second": "2nd", "third": "3rd"}
WAYBACK_SHOW = 15


def numwords(ws):
    """URL のファイル名は「9 levels」、題は「Nine Levels」のように書き方が揺れるので、数の語を数字にそろえる。"""
    return [NUMS.get(w, w) for w in ws]


def title_score(want, got):
    """0〜1。題の語の重なりと、文字列の近さの大きいほう。"""
    if not want or not got:
        return 0.0
    a, b = set(words(want)), set(words(got))
    overlap = len(a & b) / len(a) if a else 0.0
    seq = difflib.SequenceMatcher(None, norm(want), norm(got)).ratio()
    return max(overlap, seq)


def http_json(url, headers=None, retry=True):
    """(status, data or None, note)。例外は投げない。429 は 5 秒待って一度だけ引き直す。"""
    st, data, note = _http_json(url, headers)
    if st in (429, 0) and retry:  # 0 は接続の途中切れ（IncompleteRead など）
        time.sleep(5)
        st, data, note = _http_json(url, headers)
        if st == 429:
            note = "HTTP 429 が二度。待って一度だけ再試行した"
        elif st == 0:
            note += "。待って一度だけ再試行した"
    return st, data, note


def _http_json(url, headers=None):
    h = {"User-Agent": UA, "Accept": "application/json"}
    if headers:
        h.update(headers)
    req = urllib.request.Request(url, headers=h)
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            body = r.read()
            try:
                return r.status, json.loads(body), ""
            except ValueError:
                return r.status, None, "JSON でない返事"
    except urllib.error.HTTPError as e:
        return e.code, None, f"HTTP {e.code}"
    except Exception as e:  # noqa: BLE001  ネットワークの失敗はすべて「引けなかった」として表に出す
        return 0, None, f"接続できない（{type(e).__name__}: {e}）"


def http_text(url, retry_timeout=True):
    """CDX は混むと 503・504 を返すので、10 秒待って一度だけ引き直す。retry_timeout=False なら 504（60 秒の打ち切り）は引き直さない。"""
    st, text, note = _http_text(url)
    if st != 200 and (retry_timeout or st != 504):
        time.sleep(10)
        st, text, note = _http_text(url)
        if st != 200:
            note += "。待って一度だけ再試行した"
    return st, text, note


def _http_text(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return r.status, r.read().decode("utf-8", "replace"), ""
    except urllib.error.HTTPError as e:
        return e.code, "", f"HTTP {e.code}"
    except Exception as e:  # noqa: BLE001
        return 0, "", f"接続できない（{type(e).__name__}: {e}）"


# ---------------------------------------------------------------- 誰が上げた版か
#
# sources §5-8 の判定に使う。ドメインからの見立てなので、載せる前に、その頁を開いて上げた人を確かめる。
# 分類：出版社／大学・機関リポジトリ／著者のサイト／個人／不明

PUBLISHER_HOSTS = [
    "doi.org", "springer.com", "link.springer.com", "sciencedirect.com", "elsevier.com", "wiley.com",
    "tandfonline.com", "sagepub.com", "apa.org", "psycnet.apa.org", "jstor.org", "oup.com", "academic.oup.com",
    "cambridge.org", "nature.com", "science.org", "pnas.org", "plos.org", "frontiersin.org", "mdpi.com",
    "aps.org", "iop.org", "ieee.org", "acm.org", "aeaweb.org", "journals.uchicago.edu", "mitpressjournals.org",
    "direct.mit.edu", "annualreviews.org", "cell.com", "bmj.com", "emerald.com", "degruyter.com", "brill.com",
    "hindawi.com", "biomedcentral.com", "royalsocietypublishing.org", "karger.com", "thieme-connect.com",
    "informs.org", "aom.org", "journals.aom.org", "ingentaconnect.com", "muse.jhu.edu",
]
REPO_HOSTS = [
    "ncbi.nlm.nih.gov", "europepmc.org", "pmc.", "arxiv.org", "biorxiv.org", "medrxiv.org", "psyarxiv.com",
    "osf.io", "hal.science", "hal.archives-ouvertes.fr", "zenodo.org", "ssrn.com", "papers.ssrn.com",
    "repec.org", "econstor.eu", "nber.org", "core.ac.uk", "escholarship.org", "dspace.", "eprints.",
    "repository.", "handle.net", "philarchive.org",
    "iiasa.ac.at", "jairo.nii.ac.jp", "irdb.nii.ac.jp", "ir.", "researchonline.", "openaccess.",
]
PERSONAL_HOSTS = [
    "archive.org/details", "archive.org/download", "scribd.com", "docplayer", "studylib", "pdfcoffee",
    "dokumen.pub", "vdoc.pub", "epdf.", "libgen", "z-lib", "sci-hub", "pdfdrive", "yumpu.com", "issuu.com",
    "stafforini.com", "slideshare.net", "coursehero.com", "dokumen.tips", "fliphtml5.com",
]
# 索引・機械の写し。本文の置き場でないか、元の置き場を頁で確かめる要るもの
INDEX_HOSTS = {"pubmed.ncbi.nlm.nih.gov": "索引。本文は無い", "doaj.org": "OA 誌の索引。雑誌の頁へのリンク", "citeseerx.ist.psu.edu": "機械が集めた写し。元の置き場を頁で確かめる",
               "semanticscholar.org": "機械が集めた写し。元の置き場を頁で確かめる", "philpapers.org": "索引。元の置き場を頁で確かめる",
               "scholar.archive.org": "機械が集めた写し。元の置き場を頁で確かめる"}
# 著者が上げたと名乗る場。上げた人を頁で確かめるまで「不明」とする
SELF_POST_HOSTS = ["researchgate.net", "academia.edu"]


def host_of(url):
    try:
        u = urllib.parse.urlparse(url)
    except ValueError:
        return ""
    h = (u.hostname or "").lower()
    return h + (u.path or "").lower()


def wayback_original(url):
    m = re.match(r"https?://web\.archive\.org/web/\d+[a-z_]*/(.+)", url or "")
    return m.group(1) if m else None


def classify(url, roles=None, authors=None, hint=None):
    """(分類, 根拠)。roles は {ドメイン: 分類}（引数 --domain で渡したもの）。"""
    if not url:
        return "不明", ""
    orig = wayback_original(url)
    target = orig or url
    hp = host_of(target)
    host = hp.split("/")[0]
    pre = "Wayback の写し・元は " if orig else ""
    for dom, role in (roles or {}).items():
        if host == dom or host.endswith("." + dom):
            return role, f"{pre}{dom}（引数で指定）"
    for p in PERSONAL_HOSTS:
        if p in hp:
            return "個人", f"{pre}{p}"
    for p, why in INDEX_HOSTS.items():
        if p in host:
            return "不明", f"{pre}{p}（{why}）"
    for p in SELF_POST_HOSTS:
        if p in hp:
            return "不明", f"{pre}{p}（著者の投稿の場。上げた人を頁で確かめる）"
    for p in PUBLISHER_HOSTS:
        if p in host:
            return "出版社", f"{pre}{p}"
    if re.search(r"(\.edu|\.ac\.[a-z]{2}|\.edu\.[a-z]{2}|\.uni-[a-z\-]+\.de|\.univ-[a-z\-]+\.fr)$", host) or \
            any(p in hp for p in REPO_HOSTS):
        return "大学・機関リポジトリ", f"{pre}{host}"
    for a in authors or []:
        s = norm(a).replace(" ", "")
        if len(s) >= 4 and s in host.replace("-", "").replace(".", ""):
            return "著者のサイト", f"{pre}{host}（著者名がドメインにある。推定）"
    if hint == "publisher":
        return "出版社", f"{pre}{host}（API の host_type）"
    if hint == "repository":
        return "不明", f"{pre}{host}（API はリポジトリとするが、どこのものかは未確認）"
    return "不明", f"{pre}{host}"


# ---------------------------------------------------------------- 経路


class Hit:
    def __init__(self, route, url, kind="", version="", note=""):
        self.route, self.url, self.kind, self.version, self.note = route, url, kind, version, note


class Report:
    def __init__(self):
        self.routes = []  # (経路, 結果)
        self.hits = []
        self.warnings = []

    def route(self, name, result):
        self.routes.append((name, result))
        print(f"  {name}: {result}", file=sys.stderr)


def crossref(args, rep, email):
    base = "https://api.crossref.org/works"
    mail = f"&mailto={urllib.parse.quote(email)}" if email else ""
    if args.doi:
        st, data, note = http_json(f"{base}/{urllib.parse.quote(args.doi)}?{mail.lstrip('&')}")
        if not data:
            rep.route("Crossref", f"引けなかった（{note}）")
            return None
        items = [data["message"]]
    else:
        q = " ".join(x for x in [args.title, args.author] if x)
        flt = f"&filter=from-pub-date:{args.year},until-pub-date:{args.year}" if args.year else ""
        st, data, note = http_json(
            f"{base}?query.bibliographic={urllib.parse.quote(q)}&rows=5{flt}{mail}")
        if not data:
            rep.route("Crossref", f"引けなかった（{note}）")
            return None
        items = data["message"].get("items", [])
        if not items and args.year:  # 年がずれている（初出と刷りの年）こともあるので、年を外して一度だけ引き直す
            st, data, note = http_json(f"{base}?query.bibliographic={urllib.parse.quote(q)}&rows=5{mail}")
            items = (data or {}).get("message", {}).get("items", [])
    best, best_s = None, -1
    for it in items:
        t = (it.get("title") or [""])[0]
        s = title_score(args.title, t) if args.title else 1.0
        if s > best_s:
            best, best_s = it, s
    if not best:
        rep.route("Crossref", "該当なし")
        return None
    meta = {
        "title": (best.get("title") or [""])[0],
        "authors": [a.get("family") or a.get("name", "") for a in best.get("author", [])],
        "year": ((best.get("issued") or {}).get("date-parts") or [[None]])[0][0],
        "journal": (best.get("container-title") or [""])[0],
        "volume": best.get("volume", ""),
        "issue": best.get("issue", ""),
        "page": best.get("page", ""),
        "doi": best.get("DOI", ""),
        "type": best.get("type", ""),
        "score": best_s,
    }
    if args.title and best_s < 0.6:
        rep.warnings.append(
            f"Crossref のいちばん近い候補の題が狙いと離れている（一致 {best_s:.2f}）：「{meta['title']}」。"
            "この DOI を使わない。DOI の無い文献の可能性が高い")
        rep.route("Crossref", f"近い候補なし（いちばん近いもので一致 {best_s:.2f}）")
        meta["rejected"] = True
        return meta
    want_authors = [norm(a).split()[-1] for a in re.split(r"[;&]| and ", args.author or "") if norm(a)]
    if want_authors and not any(w in norm(a) for w in want_authors for a in meta["authors"]):
        rep.warnings.append(
            f"Crossref のいちばん近い候補「{meta['title']}」（{', '.join(meta['authors']) or '著者なし'}）に、狙いの著者"
            f"「{args.author}」が無い。別の文献なので、この DOI を使わない")
        rep.route("Crossref", f"近い候補なし（題の一致 {best_s:.2f} の候補は著者が違う）")
        meta["rejected"] = True
        return meta
    if args.year and meta["year"] and abs(int(args.year) - int(meta["year"])) > 1:
        rep.warnings.append(f"Crossref の年 {meta['year']} が狙いの年 {args.year} と違う")
    rep.route("Crossref", f"書誌を確定（DOI {meta['doi']}・一致 {best_s:.2f}）")
    return meta


def unpaywall(doi, rep, email, roles, authors):
    if not doi:
        rep.route("Unpaywall", "飛ばした（DOI が無い）")
        return
    if not email:
        rep.route("Unpaywall", "飛ばした（FIND_SOURCE_EMAIL が無い）")
        return
    st, data, note = http_json(f"https://api.unpaywall.org/v2/{urllib.parse.quote(doi)}?email={urllib.parse.quote(email)}")
    if not data:
        rep.route("Unpaywall", f"引けなかった（{note}）")
        return
    locs = data.get("oa_locations") or []
    if not locs:
        rep.route("Unpaywall", f"無料の版なし（is_oa={data.get('is_oa')}）")
        return
    for loc in locs:
        url = loc.get("url_for_pdf") or loc.get("url")
        kind, why = classify(url, roles, authors, loc.get("host_type"))
        rep.hits.append(Hit("Unpaywall", url, kind, loc.get("version") or "",
                            f"host_type={loc.get('host_type')}・{why}" + (f"・license={loc['license']}" if loc.get("license") else "")))
    rep.route("Unpaywall", f"{len(locs)} 件")


def openalex(args, meta, rep, email, roles, authors):
    mail = f"mailto={urllib.parse.quote(email)}" if email else ""
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    if doi:
        st, data, note = http_json(f"https://api.openalex.org/works/doi:{urllib.parse.quote(doi)}?{mail}")
        works = [data] if data else []
    else:
        flt = f"&filter=publication_year:{args.year}" if args.year else ""
        st, data, note = http_json(
            f"https://api.openalex.org/works?search={urllib.parse.quote(args.title or '')}{flt}&per-page=5&{mail}")
        works = (data or {}).get("results", [])
    if not works:
        rep.route("OpenAlex", f"該当なし（{note}）" if note else "該当なし")
        return
    best = max(works, key=lambda w: title_score(args.title, w.get("title") or "") if args.title else 1)
    s = title_score(args.title, best.get("title") or "") if args.title else 1.0
    if s < 0.6:
        rep.route("OpenAlex", f"近い候補なし（いちばん近い「{best.get('title')}」で一致 {s:.2f}）")
        return
    locs = best.get("locations") or []
    n = 0
    for loc in locs:
        url = loc.get("pdf_url") or loc.get("landing_page_url")
        if not url:
            continue
        src = loc.get("source") or {}
        hint = "repository" if src.get("type") == "repository" else ("publisher" if src.get("type") == "journal" else None)
        kind, why = classify(url, roles, authors, hint)
        rep.hits.append(Hit("OpenAlex", url, kind, loc.get("version") or "",
                            f"{src.get('display_name') or '出どころ名なし'}・is_oa={loc.get('is_oa')}・"
                            f"{'PDF' if loc.get('pdf_url') else '案内の頁'}・{why}"))
        n += 1
    rep.route("OpenAlex", f"{n} 件（{best.get('id', '').rsplit('/', 1)[-1]}・一致 {s:.2f}）")


def semantic_scholar(args, meta, rep, roles, authors):
    fields = "title,year,authors,openAccessPdf,externalIds"
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    if doi:
        url = f"https://api.semanticscholar.org/graph/v1/paper/DOI:{urllib.parse.quote(doi)}?fields={fields}"
    else:
        url = (f"https://api.semanticscholar.org/graph/v1/paper/search/match?"
               f"query={urllib.parse.quote(args.title or '')}&fields={fields}")
    st, data, note = http_json(url)
    if st == 429:
        rep.route("Semantic Scholar", f"飛ばした（{note}）")
        return
    if not data:
        rep.route("Semantic Scholar", f"該当なし（{note}）")
        return
    paper = (data.get("data") or [data])[0] if "data" in data else data
    s = title_score(args.title, paper.get("title") or "") if args.title else 1.0
    if s < 0.6:
        rep.route("Semantic Scholar", f"近い候補なし（「{paper.get('title')}」で一致 {s:.2f}）")
        return
    oa = paper.get("openAccessPdf") or {}
    if not oa.get("url"):
        rep.route("Semantic Scholar", "書誌はあるが openAccessPdf なし")
        return
    kind, why = classify(oa["url"], roles, authors)
    rep.hits.append(Hit("Semantic Scholar", oa["url"], kind, oa.get("status") or "", why))
    rep.route("Semantic Scholar", "1 件")


def core(args, meta, rep, roles, authors):
    key = os.environ.get("CORE_API_KEY")
    if not key:
        rep.route("CORE", "飛ばした（CORE_API_KEY が無い。CORE はキーが要る）")
        return
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    q = f'doi:"{doi}"' if doi else f'title:"{args.title}"'
    st, data, note = http_json(f"https://api.core.ac.uk/v3/search/works?q={urllib.parse.quote(q)}&limit=5",
                               {"Authorization": f"Bearer {key}"})
    if not data:
        rep.route("CORE", f"引けなかった（{note}）")
        return
    n = 0
    for w in data.get("results", []):
        if args.title and title_score(args.title, w.get("title") or "") < 0.6:
            continue
        url = w.get("downloadUrl") or (w.get("sourceFulltextUrls") or [None])[0]
        if not url:
            continue
        kind, why = classify(url, roles, authors, "repository")
        rep.hits.append(Hit("CORE", url, kind, "", why))
        n += 1
    rep.route("CORE", f"{n} 件")


def wayback(domains, args, meta, rep, roles, authors):
    if not domains:
        rep.route("Wayback CDX", "飛ばした（--domain が無い。著者のサイト・雑誌のサイトのドメインを渡すと、昔の PDF も探す）")
        return
    want = set(numwords(words(args.title or (meta or {}).get("title", ""))))
    names = {norm(a).split()[-1] for a in authors if a and norm(a)}
    year = args.year or (meta or {}).get("year")
    years = {str(y) for y in range(int(year) - 1, int(year) + 2)} | {str(y)[2:] for y in range(int(year) - 1, int(year) + 2)} \
        if year else set()
    for dom in domains:
        cdx = "https://web.archive.org/cdx/search/cdx?output=txt&collapse=urlkey&fl=timestamp,original&limit=20000"
        # まずドメインの全体（下位のドメインも）を、URL が .pdf を含むもので引く。大きいドメインは CDX が 60 秒で
        # 切る（504）ので、そのときは www あり・なしの道の頭（prefix）を、mimetype が PDF のもので引き直す
        st, text, note = http_text(f"{cdx}&url={urllib.parse.quote(dom)}&matchType=domain"
                                   f"&filter=original:.*%5B.%5D%5BpP%5D%5BdD%5D%5BfF%5D.*", retry_timeout=False)
        how = "ドメインの全体"
        if st != 200:
            parts = []
            for h in [dom, "www." + dom] if not dom.startswith("www.") else [dom]:
                st2, t2, note2 = http_text(f"{cdx}&url={urllib.parse.quote(h)}/&matchType=prefix"
                                           f"&filter=mimetype:application/pdf")
                if st2 == 200:
                    parts.append(t2)
            if not parts:
                rep.route(f"Wayback CDX（{dom}）", f"引けなかった（{note}。prefix でも引けなかった）")
                continue
            text = "\n".join(parts)
            how = f"ドメインの全体は {note}。www あり・なしの prefix を mimetype が PDF のもので引き直した"
        lines = [l.split(" ", 1) for l in text.splitlines() if " " in l]
        scored = []
        for ts, orig in lines:
            # ドメインそのものに著者名が入っている（著者のサイト）ことがあるので、点は URL の道（path）だけで付ける
            path = urllib.parse.unquote(urllib.parse.urlparse(orig).path)
            fw = set(numwords(norm(path).split()))
            w_hit = len(want & fw)
            n_hit = sum(1 for n in names if n and n in norm(path))
            y_hit = 1 if years & fw else 0
            score = w_hit + n_hit + y_hit
            if w_hit >= 1:
                scored.append((score, w_hit, ts, orig))
        scored.sort(key=lambda x: (-x[0], x[2]))
        for score, w_hit, ts, orig in scored[:WAYBACK_SHOW]:
            wb = f"https://web.archive.org/web/{ts}/{orig}"
            kind, why = classify(wb, roles, authors)
            d = f"{ts[:4]}-{ts[4:6]}-{ts[6:8]}"
            rep.hits.append(Hit(f"Wayback（{dom}）", wb, kind, "",
                                f"最初の写しの日 {d}・題の語 {w_hit}/{len(want)}・点 {score}・{why}"))
        rep.route(f"Wayback CDX（{dom}）", f"{how}。PDF {len(lines)} 件のうち、題の語が一つ以上ある {len(scored)} 件（点の高い {min(WAYBACK_SHOW, len(scored))} を表に。点＝題の語＋著者名＋年±1）")


# ---------------------------------------------------------------- find


def cmd_find(args):
    email = os.environ.get("FIND_SOURCE_EMAIL", "")
    roles = {}
    domains = []
    for d in args.domain or []:
        dom, _, role = d.partition(":")
        domains.append(dom)
        if role:
            roles[dom] = {"author": "著者のサイト", "publisher": "出版社", "university": "大学・機関リポジトリ",
                          "personal": "個人"}.get(role, role)
    rep = Report()
    print("引いています…", file=sys.stderr)
    meta = crossref(args, rep, email)
    authors = list(meta["authors"]) if meta and not meta.get("rejected") else []
    if args.author:
        authors += [a.strip() for a in re.split(r"[;&]| and ", args.author) if a.strip()]
    doi = meta["doi"] if meta and not meta.get("rejected") else args.doi
    unpaywall(doi, rep, email, roles, authors)
    openalex(args, meta, rep, email, roles, authors)
    semantic_scholar(args, meta, rep, roles, authors)
    core(args, meta, rep, roles, authors)
    wayback(domains, args, meta, rep, roles, authors)

    out = []
    q = args.doi or f"{args.title}" + (f"／{args.author}" if args.author else "") + (f"／{args.year}" if args.year else "")
    out.append(f"## {q}")
    out.append("")
    if meta and not meta.get("rejected"):
        out.append(f"- 書誌（Crossref）：{', '.join(meta['authors'])} ({meta['year']}). {meta['title'].rstrip('.')}. "
                   f"*{meta['journal']}* {meta['volume']}{'(' + meta['issue'] + ')' if meta['issue'] else ''}"
                   f"{', ' + meta['page'] if meta['page'] else ''}. DOI {meta['doi']}（{meta['type']}）")
    else:
        out.append("- 書誌（Crossref）：確定できなかった。書誌は別の情報源で二つ以上確かめる（sources §5-5）")
    for w in rep.warnings:
        out.append(f"- **注意**：{w}")
    out.append("")
    out.append("| 経路 | 結果 |")
    out.append("|---|---|")
    for r, res in rep.routes:
        out.append(f"| {r} | {res} |")
    out.append("")
    if rep.hits:
        out.append("| # | 経路 | 誰が上げた版か | 版 | 場所 | 根拠・備考 |")
        out.append("|---|---|---|---|---|---|")
        seen = set()
        i = 0
        for h in rep.hits:
            if h.url in seen:
                continue
            seen.add(h.url)
            i += 1
            out.append(f"| {i} | {h.route} | {h.kind} | {h.version} | {h.url} | {h.note} |")
    else:
        out.append("見つかった場所は無い。")
    out.append("")
    out.append("- 「誰が上げた版か」はドメインからの見立て。載せる前に頁を開き、上げた人を確かめる（sources §5-8）。")
    out.append("- 取ったら `find-source.sh check` で書誌と突き合わせる。題の語が当たっただけの URL は、別の文献のことがある。")
    text = "\n".join(out)
    print(text)
    if args.ledger:
        with open(args.ledger, "a", encoding="utf-8") as f:
            f.write(f"\n<!-- find-source {dt.datetime.now().isoformat(timespec='seconds')} -->\n")
            f.write(text.replace("## ", f"### {dt.date.today().isoformat()} find-source：", 1) + "\n")
        print(f"\n台帳に追記した：{args.ledger}", file=sys.stderr)


# ---------------------------------------------------------------- check / compare


def pdftext(path, first=None, last=None):
    cmd = ["pdftotext", "-q", "-layout"]
    if first:
        cmd += ["-f", str(first)]
    if last:
        cmd += ["-l", str(last)]
    cmd += [path, "-"]
    try:
        return subprocess.run(cmd, capture_output=True, text=True, timeout=120).stdout
    except FileNotFoundError:
        sys.exit("pdftotext が無い（brew install poppler）")


def pdfpages(path):
    try:
        out = subprocess.run(["pdfinfo", path], capture_output=True, text=True, timeout=60).stdout
    except FileNotFoundError:
        return None
    m = re.search(r"^Pages:\s+(\d+)", out, re.M)
    return int(m.group(1)) if m else None


def cmd_check(args):
    ok = True
    lines = [f"## 突き合わせ：{args.pdf}", ""]
    with open(args.pdf, "rb") as f:
        head = f.read(5)
    if head[:4] != b"%PDF":
        lines.append(f"- 先頭：**PDF でない**（{head!r}）。HTML の案内頁や確認画面を掴んでいる（sources §5-3）")
        print("\n".join(lines))
        return 1
    lines.append("- 先頭：%PDF")
    n = pdfpages(args.pdf)
    lines.append(f"- 頁数：{n}" + (f"（期待 {args.pages}）" if args.pages else ""))
    if args.pages and n and n != args.pages:
        lines.append("  - **頁数が期待と違う**。抜き刷り・別の版・一部だけの恐れ")
        ok = False
    t = norm(pdftext(args.pdf, 1, args.head_pages))
    if not t:
        lines.append("- 頭の頁の文字：取れない（画像だけの PDF の恐れ。OCR が要る）")
        ok = False
    if args.title:
        tw = words(args.title)
        hit = [w for w in tw if w in t]
        r = len(hit) / len(tw) if tw else 0
        lines.append(f"- 題：頭の {args.head_pages} 頁に、題の語 {len(hit)}/{len(tw)}（{r:.0%}）")
        if r < 0.7:
            lines.append(f"  - **題が合わない恐れ**。無い語：{', '.join(w for w in tw if w not in t)}")
            ok = False
    for a in args.author or []:
        s = norm(a).split()[-1] if norm(a) else ""
        found = s in t
        lines.append(f"- 著者「{a}」：{'あり' if found else '**無い**'}")
        ok = ok and found
    if args.year:
        found = str(args.year) in t
        lines.append(f"- 年 {args.year}：{'あり' if found else '頭の頁には無い（表紙に年が無い版もある。目で確かめる）'}")
    lines.append("")
    lines.append("判定：" + ("書誌と合う。本文を読み、引く箇所を頁つきで控える" if ok else "**合わない点がある。捨てるか、目で確かめる**（sources §5-4）"))
    print("\n".join(lines))
    return 0 if ok else 1


def cmd_compare(args):
    def body(p):
        with open(p, "rb") as f:
            if f.read(4) != b"%PDF":
                sys.exit(f"PDF でない：{p}")
        # レイアウトの違い（改行・空白・ハイフンでの分かち）を除いて、語の並びで比べる
        t = unicodedata.normalize("NFKC", pdftext(p).replace("-\n", ""))
        return re.findall(r"\w+", t.lower())
    a, b = body(args.a), body(args.b)
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    ratio = sm.ratio()
    print(f"## 全文の突き合わせ\n\n- A：{args.a}（{len(a)} 語・{pdfpages(args.a)} 頁）\n- B：{args.b}（{len(b)} 語・{pdfpages(args.b)} 頁）")
    print(f"- 語の並びの一致：{ratio:.4f}")
    diffs = [op for op in sm.get_opcodes() if op[0] != "equal"]
    print(f"- 食い違う箇所：{len(diffs)}")
    for tag, i1, i2, j1, j2 in diffs[: args.show]:
        print(f"  - {tag}: A「{' '.join(a[max(0, i1 - 3):i2 + 3])}」／B「{' '.join(b[max(0, j1 - 3):j2 + 3])}」")
    if len(diffs) > args.show:
        print(f"  - ほか {len(diffs) - args.show} 箇所（--show で増やす）")
    same = not diffs
    print("\n判定：" + ("語の並びは一字も違わない" if same else "違いがある。上の箇所を目で見て、版の違いか抜き出しの揺れかを決める"))
    return 0 if same else 1


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("find", help="置き場所を順に全部引く")
    f.add_argument("--doi")
    f.add_argument("--title")
    f.add_argument("--author", help="著者（姓）。複数は ; で区切る")
    f.add_argument("--year", type=int)
    f.add_argument("--domain", action="append",
                   help="Wayback の CDX で PDF を探すドメイン。役を :author・:publisher・:university・:personal で添える"
                        "（例 cook-greuter.com:author）。何度でも")
    f.add_argument("--ledger", help="試した経路と結果を追記する台帳（Markdown）")
    c = sub.add_parser("check", help="手元の PDF を書誌と突き合わせる")
    c.add_argument("pdf")
    c.add_argument("--title")
    c.add_argument("--author", action="append")
    c.add_argument("--year", type=int)
    c.add_argument("--pages", type=int, help="期待する頁数")
    c.add_argument("--head-pages", type=int, default=2, help="題と著者を探す頭の頁数（既定 2）")
    m = sub.add_parser("compare", help="二つの PDF の本文を突き合わせる")
    m.add_argument("a")
    m.add_argument("b")
    m.add_argument("--show", type=int, default=20, help="出す食い違いの数")
    args = p.parse_args()
    if args.cmd == "find":
        if not (args.doi or args.title):
            p.error("--doi か --title が要る")
        cmd_find(args)
        return 0
    if args.cmd == "check":
        return cmd_check(args)
    return cmd_compare(args)


if __name__ == "__main__":
    sys.exit(main())
