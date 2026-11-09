#!/usr/bin/env python3
"""原典（論文・本）を探す道具。docs/rules/sources.md §5 と .claude/skills/find-source/SKILL.md の手順の中身。

使い方は scripts/find-source.sh の頭。モードは六つ。

  find      DOI か題（＋著者・年）か書誌の一行（--cite）から、Crossref → Unpaywall → OpenAlex → Semantic Scholar →
            Europe PMC → CORE → Internet Archive → Wayback の CDX を順に全部引き、見つかった場所を「誰が上げた版か」と
            「自動で取れそうか」つきの表で出す。早く当たっても止めない。頭に判定を一行で書く。
  fetch     見つけた置き場から PDF を一度だけ取り、先頭が %PDF かと頭の頁の書誌を確かめてから保存する。
            確認画面・ログイン・403 を返したホストは覚えて、次からは「ブラウザでの保存が要る」に回す。
  check     手元の PDF を書誌と突き合わせる（%PDF・題・著者・年・頁数と頁の範囲・掲載誌・別の DOI・再録の印・前付けだけ）。
  compare   二つの PDF の本文（pdftotext）を突き合わせる。写しを差し替えるときの全文比較。
  batch     台帳（manifest.md）の行や、id と書誌の表（TSV）をまとめて find に流し、結果の表と経路ごとの数を出す。
  discover  広く探す。主題や理論の名前・ある論文を引用している論文・その参考文献・著者の論文を、OA かどうかつきで並べる。

ネットワークに出る先（サンドボックスの allowed_domains に並べる）：
  api.crossref.org・api.unpaywall.org・api.openalex.org・api.semanticscholar.org・www.ebi.ac.uk・api.core.ac.uk・
  archive.org・web.archive.org（fetch は、それに加えて取りに行く先のホスト）

決まり（sources §5-7）：自動取得を拒むサイトに、別の名乗り（ブラウザのふりをした User-Agent など）で取りに行かない。
find・batch・discover は API と一覧を引くだけ。fetch は、下の UA のまま一度だけ取りに行き、拒まれたら覚えて止まる。

外の情報（メール・キー）は環境変数で渡す。repo は公開なので、ファイルに書かない。無ければその経路は飛ばす。
  FIND_SOURCE_EMAIL  Unpaywall に要る連絡先（Crossref・OpenAlex の礼儀の欄にも使う）
  CORE_API_KEY       CORE の API キー
  OPENALEX_API_KEY   OpenAlex のキー（無くても引ける。無いと検索は一日 100 回ほどまで。DOI で引くぶんは数えられない）
  S2_API_KEY         Semantic Scholar のキー（無くても引ける。無いと 429 が多い）
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

UA = "project-design-theory-find-source/1.1 (+https://github.com/uminomae/project-design-theory)"
TIMEOUT = 30

# ---------------------------------------------------------------- 共通


def clean(s):
    """Crossref の題に入るタグ（<i> など）と改行を除いて一行にする。表が崩れるのを防ぐ。"""
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", s).replace("|", "／").strip()


def fold(s):
    """ラテン文字のアクセントを外す（Muñoz と Munoz、Hénon と Henon を同じに読む）。かなの濁点には触らない。"""
    out, latin = [], False
    for ch in unicodedata.normalize("NFKD", s or ""):
        if unicodedata.combining(ch):
            if latin:
                continue
        else:
            latin = ch.isascii() and ch.isalpha()
        out.append(ch)
    return unicodedata.normalize("NFKC", "".join(out)).replace("ł", "l").replace("Ł", "L").replace("ø", "o").replace("ß", "ss")


def norm(s):
    s = fold(s).lower()
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


def title_score_strict(want, got):
    """副題だけ違う別の文献や、題が短い文献を取り違えないための点。両方の向きの重なりの小さいほう。"""
    a, b = set(words(want)), set(words(got))
    if not a or not b:
        return 0.0
    return min(len(a & b) / len(a), len(a & b) / len(b))


def family_names(author):
    """「Bak, P., Tang, C. & Wiesenfeld, K.」「Eldredge; Gould」「Ulm ら」から姓を取り出す。"""
    out = []
    author = re.sub(r"[（(][^）)]*[）)]", " ", author or "")
    for tok in re.split(r"[;,&・]|\band\b|\bet al\.?|ほか|ら(?![a-z])", author):
        tok = tok.strip().strip(".")
        if not tok or re.fullmatch(r"(?:[A-Z]\.?[\s\-]?){1,4}", tok):  # 頭文字だけ
            continue
        parts = [p for p in tok.split() if not re.fullmatch(r"[A-Z]\.?|(?:[A-Z]\.){2,}|[A-Z]\.-?[A-Z]\.?", p)
                 and p.lower().strip(".") not in NAME_PARTICLES]
        if parts:
            out.append(parts[-1])
    return [o for o in out if len(norm(o)) >= 2]


NAME_PARTICLES = set("van von de der den du di da del della la le el al bin ibn ed eds lord sir jr sr ya yu".split())
_last_call = {}
PAUSE = {"api.semanticscholar.org": 3.0, "web.archive.org": 2.0, "archive.org": 1.5}
LAST_HEADERS = {}


def _wait(url):
    """同じホストを続けて叩かない。ホストごとに間隔を空ける。"""
    host = urllib.parse.urlparse(url).hostname or ""
    gap = PAUSE.get(host, 1.0)
    t = _last_call.get(host, 0)
    if time.time() - t < gap:
        time.sleep(gap - (time.time() - t))
    _last_call[host] = time.time()


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
    _wait(url)
    req = urllib.request.Request(url, headers=h)
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            LAST_HEADERS.clear()
            LAST_HEADERS.update({k.lower(): v for k, v in r.headers.items()})
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
    _wait(url)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return r.status, r.read().decode("utf-8", "replace"), ""
    except urllib.error.HTTPError as e:
        return e.code, "", f"HTTP {e.code}"
    except Exception as e:  # noqa: BLE001
        return 0, "", f"接続できない（{type(e).__name__}: {e}）"


# ---------------------------------------------------------------- 書誌の一行を読む


DOI_RE = re.compile(r"10\.\d{4,9}/[^\s|）)＞>、。\]\"]+")


def find_doi(text):
    m = DOI_RE.search(text or "")
    return m.group(0).rstrip(".,;") if m else ""


def parse_cite(cite, extra=""):
    """台帳や Issue の表の書誌の一行（「著者 (年). 題. *誌名* 巻(号), 頁–頁.」）を、探すための項目に分ける。

    分けきれない行もある（題の無い短い書き方など）。そのときは title が空で返り、find は書誌の一行のまま Crossref に聞く。
    """
    c = unicodedata.normalize("NFKC", cite or "").strip()
    out = {"cite": c, "doi": find_doi(c) or find_doi(extra), "title": "", "author": "", "year": None,
           "journal": "", "volume": "", "pages": "", "book": False}
    c = DOI_RE.sub("", re.sub(r"(?i)\b(doi|DOI)\s*[:：]?\s*(?=10\.)", "", c))
    m = re.match(r"(?P<auth>.+?)\s*[（(](?P<year>\d{4})[a-z]?(?:\s*[/／\[]\s*\d{4}\]?)?[)）][.,]?\s*(?P<rest>.*)", c)
    if not m:
        bare = re.sub(r"[*\"“”]", "", c).strip(" .")
        if len(words(bare)) >= 3 and not re.search(r"[^\x00-\x7f]", bare):
            out["title"] = bare  # 著者も年も無い、題だけの行
        return out
    out["author"] = "; ".join(family_names(m.group("auth")))
    out["year"] = int(m.group("year"))
    rest = m.group("rest").strip()
    star = re.search(r"\*([^*]+)\*", rest)
    quoted = re.match(r"[\"“「]([^\"”」]+)[\"”」]", rest)
    if star and star.start() == 0 and re.match(r"[,\s]*(\(\d+\)\s*)?\d", rest[star.end():]):
        pass  # 「*Nature* 211, 676」：題を省いた短い書き方。誌名と巻・頁だけ（下で読む）
    elif star and star.start() == 0:
        out["title"], out["book"] = star.group(1).strip(" ."), True
    elif quoted:
        out["title"] = quoted.group(1).strip(" .,")
    else:
        head = rest[:star.start()] if star else rest
        head = re.split(r"\s+In[:\s]\s*(?=[A-Z*])", head)[0]  # 本の章：「題. In 編者 (Eds.), *本*」
        if not star:
            head = re.split(r"(?<=[.?!])\s+(?=[A-Z])", head)[0]
        out["title"] = head.strip(" .,")
    if star and not out["book"]:
        after = rest[star.end():]
        if re.search(r"\(Eds?\.\)|\bIn\b|pp\.", rest[:star.start()] + after[:12]) and not re.match(r"\s*\(?\d", after):
            out["book"] = True  # 本の章
        else:
            out["journal"] = star.group(1).strip()
        v = re.match(r"[,\s]*(?:\(\d+\)\s*)?(\d+)\s*(?:\(([^)]*)\))?", after)
        if v and not out["book"]:
            out["volume"] = v.group(1)
        p = re.search(r"(\d+)\s*[-–—]\s*(\d+)", after)
        if p:
            out["pages"] = f"{p.group(1)}-{p.group(2)}"
    out["title"] = re.sub(r"\s*[（(][^）)]*[\u3040-\u30ff\u4e00-\u9fff][^）)]*[）)]", "", out["title"]).strip(" .,")  # （ノーベル講演）などの注
    if re.search(r"[^\x00-\x7f]", out["title"]) and len(words(out["title"])) < 2:
        out["title"] = ""  # 日本語の説明だけが残った（「〜の補遺」など）
    return out


def page_count_expected(pages):
    m = re.match(r"\D*(\d+)\s*[-–—]\s*(\d+)", pages or "")
    if not m:
        return None
    a, b = int(m.group(1)), int(m.group(2))
    if b < a and len(m.group(2)) < len(m.group(1)):  # 1201-4 の書き方
        b = int(m.group(1)[: len(m.group(1)) - len(m.group(2))] + m.group(2))
    return b - a + 1 if b >= a else None


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
    "jneurosci.org", "physiology.org", "ams.org", "ametsoc.org", "acs.org", "aspetjournals.org", "elifesciences.org",
    "berghahnjournals.com", "projecteuclid.org", "numdam.org", "scholarpedia.org", "nobelprize.org", "jetp.ras.ru",
    "aip.org", "rsc.org", "embopress.org", "biologists.com", "rupress.org", "asm.org", "aaas.org", "jbc.org",
]
REPO_HOSTS = [
    "ncbi.nlm.nih.gov", "europepmc.org", "pmc.", "arxiv.org", "biorxiv.org", "medrxiv.org", "psyarxiv.com",
    "osf.io", "hal.science", "hal.archives-ouvertes.fr", "zenodo.org", "ssrn.com", "papers.ssrn.com",
    "repec.org", "econstor.eu", "nber.org", "core.ac.uk", "escholarship.org", "dspace.", "eprints.",
    "repository.", "handle.net", "philarchive.org",
    "iiasa.ac.at", "jairo.nii.ac.jp", "irdb.nii.ac.jp", "ir.", "researchonline.", "openaccess.",
    "digitallibrary.", "digital.library.", "pure.", "research.", "osti.gov", "gallica.bnf.fr", "hathitrust.org",
    "biodiversitylibrary.org", "ntrs.nasa.gov", "cds.cern.ch", "inspirehep.net", "scholar.harvard.edu", "dash.harvard.edu",
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
SELF_POST_HOSTS = ["researchgate.net", "academia.edu", "zenodo.org"]
# 大学のサーバーでも、授業の頁・個人の頁に置かれた写しは、機関リポジトリと分ける（README「規約で決めたこと」の写しの行）
COURSE_PATH = re.compile(r"/(courses?|class(es)?|teaching|syllab|readings?|handouts?|lectures?|el|~[\w.\-]+|people|users?|"
                         r"faculty|staff|home|homepages?)/", re.I)

# 自動取得（この道具の名乗り）に、確認画面・ログイン・403 を返したホスト。ここの PDF には取りに行かず、
# 同じ URL の Wayback の写しを引くか、pjdhiro にブラウザでの保存を頼む（sources §5-7）。
# 出どころは、cs のレビュー（Issue #73・2026-11-08〜09）で実際に止まった取得先。値は、そのとき返ったもの。
# 取りに行って新しく止まったホストは、fetch が手元の一覧（--hosts-file。git の外）に足す。
BROWSER_HOSTS = {
    "pmc.ncbi.nlm.nih.gov": "確認画面（PDF）。本文は Europe PMC の全文 XML（OA の部分集合）か HTML で読めることがある",
    "ncbi.nlm.nih.gov": "確認画面（PMC の PDF）",
    "europepmc.org": "403（?pdf=render）。全文 XML の API（www.ebi.ac.uk）は引ける",
    "cell.com": "確認画面", "nature.com": "確認画面", "royalsocietypublishing.org": "確認画面",
    "academic.oup.com": "確認画面", "onlinelibrary.wiley.com": "確認画面・403", "jneurosci.org": "確認画面",
    "pubs.aeaweb.org": "確認画面（Cloudflare）", "aeaweb.org": "確認画面（Cloudflare）", "ams.org": "確認画面",
    "dl.acm.org": "確認画面", "journals.physiology.org": "確認画面", "journals.aps.org": "案内の頁（有料）・確認画面",
    "link.aps.org": "案内の頁（有料）・確認画面", "pubs.acs.org": "確認画面", "journals.ametsoc.org": "確認画面",
    "journals.uchicago.edu": "確認画面", "annualreviews.org": "確認画面", "journals.sagepub.com": "確認画面",
    "aspetjournals.org": "403", "escholarship.org": "確認画面（WAF）", "pure.mpg.de": "確認画面",
    "repository.arizona.edu": "確認画面", "is.muni.cz": "確かめの画面", "science.org": "確認画面",
    "sciencedirect.com": "確認画面", "tandfonline.com": "確認画面", "jstor.org": "ログイン・確認画面",
    "researchgate.net": "確認画面", "academia.edu": "ログイン", "pnas.org": "確認画面", "berghahnjournals.com": "確認画面",
    "research.rug.nl": "確認画面", "osti.gov": "確認画面",
}


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


def load_hosts(path):
    """手元の一覧（fetch が足したもの）を BROWSER_HOSTS に重ねる。"""
    hosts = dict(BROWSER_HOSTS)
    if path and os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            for line in f:
                p = line.rstrip("\n").split("\t")
                if len(p) >= 2 and not line.startswith("#"):
                    hosts.setdefault(p[0], p[1] + "（手元の一覧）")
    return hosts


def browser_host(url, hosts=None):
    """確認画面などを返すと分かっているホストなら、その理由。Wayback の写しは web.archive.org が出すので当たらない。"""
    if not url or wayback_original(url):
        return ""
    host = (urllib.parse.urlparse(url).hostname or "").lower()
    for h, why in (hosts or BROWSER_HOSTS).items():
        if host == h or host.endswith("." + h):
            return why
    return ""


def repo_host(host):
    """REPO_HOSTS をホスト名だけで当てる（「ir.」が道の their.pdf に当たるような取り違えを避ける）。"""
    for p in REPO_HOSTS:
        if p.endswith("."):
            if host.startswith(p) or ("." + p) in host:
                return True
        elif host == p or host.endswith("." + p) or (p.endswith(".") is False and "." not in p and p in host):
            return True
    return False


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
            return "不明", f"{pre}{p}（だれでも上げられる場。上げた人と権利を頁で確かめる）"
    for p in PUBLISHER_HOSTS:
        if host == p or host.endswith("." + p):
            return "出版社", f"{pre}{p}"
    if re.search(r"(\.edu|\.ac\.[a-z]{2}|\.edu\.[a-z]{2}|\.uni-[a-z\-]+\.de|\.univ-[a-z\-]+\.fr)$", host) or \
            re.search(r"(^|\.)(uni|univ|u)-?[a-z\-]*\.(de|fr|nl|ch|at|it|es|be|se|dk|no|fi|cz|ca)$", host) or \
            repo_host(host):
        if COURSE_PATH.search("/" + hp.split("/", 1)[1] if "/" in hp else "") and not repo_host(host):
            return "授業・個人の頁（大学のサーバー）", f"{pre}{host}（道に授業・個人の頁の印。上げた人を頁で確かめる。権利は未確認）"
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


VERSION_JA = {"publishedVersion": "出版社の版", "acceptedVersion": "著者稿（査読後）", "submittedVersion": "著者稿（投稿時）"}

# ---------------------------------------------------------------- 経路


class Hit:
    def __init__(self, route, url, kind="", version="", note="", oa=None, pdf=None):
        self.route, self.url, self.kind, self.note = route, url, kind, note
        self.version = VERSION_JA.get(version, version or "")
        self.oa = oa  # True＝無料で読めると API が言う／False＝有料・案内だけ／None＝分からない
        self.pdf = bool(pdf) if pdf is not None else bool(re.search(r"\.pdf($|[?#])|/pdf(/|$)|pdf=render", url or "", re.I))
        self.tier, self.how = 9, ""

    def as_dict(self):
        return {k: getattr(self, k) for k in ("route", "url", "kind", "version", "note", "oa", "pdf", "tier", "how")}


TIER_LABEL = {
    0: "自動で取れそう（出版社・機関・著者の OA の PDF）",
    1: "自動で取れそう（Wayback に残る PDF）",
    2: "開いて確かめる（OA の案内の頁・全文の HTML や XML）",
    3: "ブラウザでの保存が要る（OA だが確認画面を返すホスト）",
    4: "読めるが性格を添える（個人・授業の頁・上げた人の分からない写し）",
    5: "借りる形だけ（Internet Archive の貸出。自動では読めない）",
    6: "本文でない（目次・索引・要旨だけ）",
    9: "有料・案内の頁だけ",
}


def grade(hit, hosts=None):
    """置き場ごとに「自動で取れそうか」を決める。見立てなので、取ったら fetch・check で確かめる。"""
    u = hit.url or ""
    orig = wayback_original(u)
    hp = host_of(orig or u)
    if re.search(r"/toc/|[_\-/]toc[_\-.]|inhaltsverzeichnis|table[_\-]of[_\-]contents", hp):
        hit.tier, hit.how = 6, "目次だけの恐れ（URL に toc）"
    elif any(p in hp.split("/")[0] for p in INDEX_HOSTS) and "citeseerx" not in hp:
        hit.tier, hit.how = 6, "索引"
    elif "貸出" in hit.note:
        hit.tier, hit.how = 5, "借りる形"
    elif hit.oa is False:
        hit.tier, hit.how = 9, "有料か案内だけ"
    elif hit.kind in ("個人", "不明") or hit.kind.startswith("授業"):
        hit.tier, hit.how = 4, "性格を添える"
    elif orig:
        hit.tier, hit.how = (1, "Wayback の PDF") if hit.pdf else (2, "Wayback の頁")
    elif browser_host(u, hosts):
        hit.tier, hit.how = 3, f"ブラウザで保存（{browser_host(u, hosts)}）"
    elif hit.oa and hit.pdf:
        hit.tier, hit.how = 0, "OA の PDF"
    elif hit.oa:
        hit.tier, hit.how = 2, "OA の頁"
    else:
        hit.tier, hit.how = 9, "OA かは分からない"
    return hit


class Report:
    def __init__(self, quiet=False):
        self.routes = []  # (経路, 結果)
        self.hits = []
        self.warnings = []
        self.quiet = quiet

    def route(self, name, result):
        self.routes.append((name, result))
        if not self.quiet:
            print(f"  {name}: {result}", file=sys.stderr)


def crossref(args, rep, email):
    base = "https://api.crossref.org/works"
    mail = f"&mailto={urllib.parse.quote(email)}" if email else ""
    want_authors = [norm(a) for a in family_names(args.author or "")]
    if args.doi:
        st, data, note = http_json(f"{base}/{urllib.parse.quote(args.doi)}?{mail.lstrip('&')}")
        if not data:
            rep.route("Crossref", f"引けなかった（{note}）")
            return None
        items = [data["message"]]
    else:
        q = " ".join(x for x in [args.title, args.author] if x) or getattr(args, "cite", "") or ""
        flt = f"&filter=from-pub-date:{args.year},until-pub-date:{args.year}" if args.year else ""
        pc = parse_cite(getattr(args, "cite", "") or "") if not args.title else {}
        if pc.get("journal") and want_authors:
            # 題を省いた短い書誌（「Wilson (1966). *Nature* 211, 676」）：著者と誌名と年で引き、巻と頭の頁で決める
            st, data, note = http_json(
                f"{base}?query.author={urllib.parse.quote(want_authors[0])}"
                f"&query.container-title={urllib.parse.quote(pc['journal'])}&rows=40{flt}{mail}")
        else:
            st, data, note = http_json(
                f"{base}?query.bibliographic={urllib.parse.quote(q)}&rows=8{flt}{mail}")
        if not data:
            rep.route("Crossref", f"引けなかった（{note}）")
            return None
        items = data["message"].get("items", [])
        if not items and args.year:  # 年がずれている（初出と刷りの年）こともあるので、年を外して一度だけ引き直す
            st, data, note = http_json(f"{base}?query.bibliographic={urllib.parse.quote(q)}&rows=8{mail}")
            items = (data or {}).get("message", {}).get("items", [])
    best, best_s = None, -1

    def has_author(it):
        fam = [norm(a.get("family") or a.get("name", "")) for a in it.get("author", []) + it.get("editor", [])]
        return any(w in f or f in w for w in want_authors for f in fam if f)

    for it in items:
        t = (it.get("title") or [""])[0]
        if args.title:
            s = title_score(args.title, t)
            # 同じ題の別の文献（書評・再録・別の著者の同名の論文）を避ける：著者が合うものを先に、書評を後に
            s += 0.05 if want_authors and has_author(it) else 0
            s -= 0.2 if re.match(r"(?i)(book )?review|reviews?:|erratum|correction", clean(t)) and \
                not re.match(r"(?i)(book )?review|erratum|correction", args.title) else 0
        elif getattr(args, "cite", ""):  # 題の無い書誌の一行：著者・巻・頭の頁で決める
            c = args.cite
            after = c.split(")", 1)[-1]  # 年より後ろ（巻・頁）だけで当てる
            s = 0.4 * bool(want_authors and has_author(it))
            s += 0.3 * bool(it.get("volume") and re.search(rf"\b{re.escape(str(it['volume']))}\b", after))
            fp = (it.get("page") or it.get("article-number") or "").split("-")[0]
            s += 0.3 * bool(fp and re.search(rf"\b{re.escape(fp)}\b", after))
        else:
            s = 1.0
        if s > best_s:
            best, best_s = it, s
    if not best:
        rep.route("Crossref", "該当なし")
        return None
    best_s = min(best_s, 1.0)
    meta = {
        "title": clean((best.get("title") or [""])[0]),
        "authors": [a.get("family") or a.get("name", "") for a in best.get("author", [])],
        "year": ((best.get("issued") or {}).get("date-parts") or [[None]])[0][0],
        "journal": clean((best.get("container-title") or [""])[0]),
        "volume": best.get("volume", ""),
        "issue": best.get("issue", ""),
        "page": best.get("page", ""),
        "doi": best.get("DOI", ""),
        "type": best.get("type", ""),
        "score": best_s,
    }
    if not args.doi and best_s < 0.6:
        rep.warnings.append(
            f"Crossref のいちばん近い候補が狙いと離れている（一致 {best_s:.2f}）：「{meta['title']}」。"
            "この DOI を使わない。DOI の無い文献の可能性が高い")
        rep.route("Crossref", f"近い候補なし（いちばん近いもので一致 {best_s:.2f}）")
        meta["rejected"] = True
        return meta
    if want_authors and not args.doi and not has_author(best):
        rep.warnings.append(
            f"Crossref のいちばん近い候補「{meta['title']}」（{', '.join(meta['authors']) or '著者なし'}）に、狙いの著者"
            f"「{args.author}」が無い。別の文献なので、この DOI を使わない")
        rep.route("Crossref", f"近い候補なし（題の一致 {best_s:.2f} の候補は著者が違う）")
        meta["rejected"] = True
        return meta
    if args.title and not args.doi and title_score_strict(args.title, meta["title"]) < 0.5:
        rep.warnings.append(
            f"Crossref の候補「{meta['title']}」は、狙いの題と語の半分も重ならない（副題・章・書評の恐れ）。"
            "DOI を使う前に、巻・頁を目で確かめる")
    if args.year and meta["year"] and abs(int(args.year) - int(meta["year"])) > 1:
        rep.warnings.append(
            f"Crossref の年 {meta['year']} が狙いの年 {args.year} と違う（再刊・再録・電子版の日付・同名の別の文献の恐れ）。"
            "巻・頁を目で確かめる")
    rep.route("Crossref", f"書誌を確定（DOI {meta['doi']}・一致 {best_s:.2f}・{meta['type']}）")
    return meta


def other_work(args, by_doi, title, authors_text, year):
    """題だけで引いた候補が、同じ題の別の文献でないかを見る。別の文献らしければ理由を返す（DOI で引いたときは見ない）。

    短い題・よくある題（The Evolution of Sex、al-Muqaddimah）は、題の一致だけでは別の著者・別の年の文献を掴む
    （2026-11-09 の batch で二件）。著者（姓）と年（±2）を突き合わせる。
    """
    if by_doi:
        return ""
    want = [norm(a) for a in family_names(args.author or "")]
    got = norm(authors_text or "")
    if want and got and not any(w in got for w in want):
        return f"著者が違う（{clean(authors_text)[:40]}）"
    if args.year and year and str(year).isdigit() and abs(int(year) - int(args.year)) > 2:
        return f"年が違う（{year}）"
    if args.title and title and title_score_strict(args.title, title) < 0.6:
        return "題の重なりが足りない（副題・章・書評の恐れ）"
    return ""


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
                            f"host_type={loc.get('host_type')}・{why}" + (f"・license={loc['license']}" if loc.get("license") else ""),
                            oa=True, pdf=bool(loc.get("url_for_pdf"))))
    rep.route("Unpaywall", f"{len(locs)} 件")


def openalex_headers():
    key = os.environ.get("OPENALEX_API_KEY")
    return {"Authorization": f"Bearer {key}"} if key else None


def openalex_budget():
    """キーの無い OpenAlex は、検索に一日の上限がある（返事の頭に残りが書いてある）。"""
    rem = LAST_HEADERS.get("x-ratelimit-remaining")
    return f"・今日の残り {rem} 点（検索は一回 10 点）" if rem and rem.isdigit() and int(rem) < 300 else ""


def openalex(args, meta, rep, email, roles, authors):
    mail = f"mailto={urllib.parse.quote(email)}" if email else ""
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    if doi:
        st, data, note = http_json(f"https://api.openalex.org/works/doi:{urllib.parse.quote(doi)}?{mail}", openalex_headers())
        works = [data] if data else []
    elif args.title:
        flt = f"&filter=publication_year:{args.year}" if args.year else ""
        st, data, note = http_json(
            f"https://api.openalex.org/works?search={urllib.parse.quote(args.title or '')}{flt}&per-page=5&{mail}",
            openalex_headers())
        works = (data or {}).get("results", [])
    else:
        rep.route("OpenAlex", "飛ばした（DOI も題も無い）")
        return None
    if not works:
        why = "一日の上限か、続けて引きすぎ" if st == 429 else note
        rep.route("OpenAlex", f"引けなかった（{note}。{why}）" if st == 429 else (f"該当なし（{note}）" if note else "該当なし"))
        return None
    best = max(works, key=lambda w: title_score(args.title, w.get("title") or "") if args.title else 1)
    s = title_score(args.title, best.get("title") or "") if args.title else 1.0
    if s < 0.6:
        rep.route("OpenAlex", f"近い候補なし（いちばん近い「{clean(best.get('title'))}」で一致 {s:.2f}）")
        return None
    why = other_work(args, bool(doi), best.get("title"),
                     " ".join((a.get("author") or {}).get("display_name") or "" for a in best.get("authorships") or []),
                     None if getattr(args, "book", False) else best.get("publication_year"))
    if why:
        rep.route("OpenAlex", f"同じ題の別の文献らしいので使わない（「{clean(best.get('title'))[:50]}」・{why}）")
        return None
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
                            f"{src.get('display_name') or '出どころ名なし'}・{why}"
                            + (f"・license={loc['license']}" if loc.get("license") else ""),
                            oa=bool(loc.get("is_oa")),
                            # OpenAlex の pdf_url が案内の頁のことがある（UNT の ark: など）。PDF らしい URL だけを PDF と数える
                            pdf=bool(loc.get("pdf_url")) and bool(re.search(
                                r"\.pdf|/pdf|download|bitstream|/document$|/servlets/purl/", loc["pdf_url"], re.I))))
        n += 1
    oa = (best.get("open_access") or {}).get("oa_status", "")
    rep.route("OpenAlex", f"{n} 件（{best.get('id', '').rsplit('/', 1)[-1]}・一致 {s:.2f}・oa_status={oa}）{openalex_budget()}")
    return best


def s2_headers():
    key = os.environ.get("S2_API_KEY")
    return {"x-api-key": key} if key else None


def semantic_scholar(args, meta, rep, roles, authors):
    fields = "title,year,authors,openAccessPdf,externalIds"
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    if doi:
        url = f"https://api.semanticscholar.org/graph/v1/paper/DOI:{urllib.parse.quote(doi)}?fields={fields}"
    elif args.title:
        url = (f"https://api.semanticscholar.org/graph/v1/paper/search/match?"
               f"query={urllib.parse.quote(args.title or '')}&fields={fields}")
    else:
        rep.route("Semantic Scholar", "飛ばした（DOI も題も無い）")
        return
    st, data, note = http_json(url, s2_headers())
    if st == 429:
        rep.route("Semantic Scholar", f"飛ばした（{note}）")
        return
    if not data:
        rep.route("Semantic Scholar", f"該当なし（{note}）")
        return
    paper = (data.get("data") or [data])[0] if "data" in data else data
    s = title_score(args.title, paper.get("title") or "") if args.title else 1.0
    if s < 0.6:
        rep.route("Semantic Scholar", f"近い候補なし（「{clean(paper.get('title'))}」で一致 {s:.2f}）")
        return
    why = other_work(args, bool(doi), paper.get("title"), " ".join(a.get("name") or "" for a in paper.get("authors") or []),
                     paper.get("year"))
    if why:
        rep.route("Semantic Scholar", f"同じ題の別の文献らしいので使わない（「{clean(paper.get('title'))[:50]}」・{why}）")
        return
    oa = paper.get("openAccessPdf") or {}
    n = 0
    if oa.get("url"):
        kind, why = classify(oa["url"], roles, authors)
        # openAccessPdf が doi.org のことがある（出版社の頁へ飛ぶだけ）。PDF とは数えない
        rep.hits.append(Hit("Semantic Scholar", oa["url"], kind, oa.get("status") or "", why, oa=True,
                            pdf=not re.match(r"https?://(dx\.)?doi\.org/", oa["url"])))
        n += 1
    ax = (paper.get("externalIds") or {}).get("ArXiv")
    if ax:  # arXiv の番号があれば、著者稿の置き場として足す
        rep.hits.append(Hit("Semantic Scholar", f"https://arxiv.org/pdf/{ax}", "大学・機関リポジトリ", "submittedVersion",
                            "arXiv（externalIds）。著者稿。出版社の版と節・式の番号が違うことがある", oa=True, pdf=True))
        n += 1
    rep.route("Semantic Scholar", f"{n} 件" if n else "書誌はあるが openAccessPdf なし")


def europe_pmc(args, meta, rep, roles, authors):
    """Europe PMC。生命・医学の論文は、PMC の著者稿や、出版社が後から無料にした版がここで分かる。キーは要らない。"""
    doi = (meta or {}).get("doi") if meta and not meta.get("rejected") else args.doi
    if doi:
        q = f'DOI:"{doi}"'
    elif args.title:
        q = f'TITLE:"{clean(args.title)}"' + (f' AND AUTH:"{family_names(args.author)[0]}"' if family_names(args.author or "") else "")
    else:
        rep.route("Europe PMC", "飛ばした（DOI も題も無い）")
        return
    st, data, note = http_json("https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resultType=core"
                               f"&pageSize=3&query={urllib.parse.quote(q)}")
    res = ((data or {}).get("resultList") or {}).get("result") or []
    if not data:
        rep.route("Europe PMC", f"引けなかった（{note}）")
        return
    res = [r for r in res if not args.title or title_score(args.title, r.get("title") or "") >= 0.6]
    dropped = [r for r in res if other_work(args, bool(doi), r.get("title"), r.get("authorString"), r.get("pubYear"))]
    res = [r for r in res if r not in dropped]
    if dropped and not res:
        rep.route("Europe PMC", "同じ題の別の文献らしいので使わない（「" + clean(dropped[0].get("title"))[:50] + "」・"
                  + other_work(args, False, dropped[0].get("title"), dropped[0].get("authorString"), dropped[0].get("pubYear")) + "）")
        return
    if not res:
        rep.route("Europe PMC", "該当なし（生命・医学の外の文献は載らない）")
        return
    r = res[0]
    n = 0
    pmcid = r.get("pmcid")
    if pmcid and r.get("isOpenAccess") == "Y":
        rep.hits.append(Hit("Europe PMC", f"https://www.ebi.ac.uk/europepmc/webservices/rest/{pmcid}/fullTextXML",
                            "大学・機関リポジトリ", "", f"{pmcid}・OA の部分集合。全文の XML を API で読める（頁が無いので節の名前で控える）",
                            oa=True, pdf=False))
        n += 1
    for u in (r.get("fullTextUrlList") or {}).get("fullTextUrl", []):
        if u.get("availabilityCode") not in ("F", "OA") or u.get("documentStyle") in ("abs", "doi"):
            continue
        kind, why = classify(u.get("url"), roles, authors)
        rep.hits.append(Hit("Europe PMC", u.get("url"), kind, "",
                            f"{u.get('site')}・{u.get('availability')}・{u.get('documentStyle')}・{why}",
                            oa=True, pdf=u.get("documentStyle") == "pdf"))
        n += 1
    rep.route("Europe PMC", f"{n} 件（{pmcid or 'PMC の番号なし'}・OA の部分集合={r.get('isOpenAccess')}）")


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
        rep.hits.append(Hit("CORE", url, kind, "", why, oa=True))
        n += 1
    rep.route("CORE", f"{n} 件")


LIBRARY_COLLECTIONS = ("americana", "toronto", "europeanlibraries", "gutenberg", "biodiversity", "university_of_", "cdl",
                       "library_of_congress", "nasa", "usgovernmentdocuments", "journals", "jstor_", "pubmed", "arxiv")


def internet_archive(args, meta, rep, want_book):
    """Internet Archive の本・古い論文。貸出だけのもの（自動では読めない）と、だれでも読めるものを分けて出す。"""
    if meta and meta.get("rejected"):
        meta = None
    title = args.title or (meta or {}).get("title", "")
    year = args.year or (meta or {}).get("year")
    if not title:
        rep.route("Internet Archive", "飛ばした（題が無い）")
        return
    if not (want_book or args.ia or not meta or (year and int(year) < 1930)):
        rep.route("Internet Archive", "飛ばした（DOI のある 1930 年より後の論文。本・DOI の無い文献・古い文献で引く。--ia で必ず引く）")
        return
    fam = family_names(args.author or "") or [a for a in (meta or {}).get("authors", [])[:1] if a]
    tw = " ".join(words(title)[:8])
    q = f"title:({tw}) AND mediatype:texts" + (f" AND creator:({norm(fam[0])})" if fam else "")
    fl = "".join(f"&fl%5B%5D={f}" for f in ("identifier", "title", "creator", "year", "collection", "access-restricted-item"))
    st, data, note = http_json(f"https://archive.org/advancedsearch.php?q={urllib.parse.quote(q)}{fl}&rows=10&output=json")
    docs = ((data or {}).get("response") or {}).get("docs") or []
    if not data:
        rep.route("Internet Archive", f"引けなかった（{note}）")
        return
    n = lend = 0
    for d in docs:
        t = d.get("title") if isinstance(d.get("title"), str) else " ".join(d.get("title") or [])
        if title_score(title, t) < 0.6:
            continue
        coll = d.get("collection") or []
        coll = [coll] if isinstance(coll, str) else coll
        ident = d["identifier"]
        restricted = str(d.get("access-restricted-item", "")).lower() == "true" or \
            any(c in ("inlibrary", "printdisabled", "internetarchivebooks") for c in coll)
        yr = d.get("year") or "年なし"
        if restricted:
            lend += 1
            rep.hits.append(Hit("Internet Archive", f"https://archive.org/details/{ident}", "不明", "",
                                f"{yr} の版・貸出（ログインして借りる形）。自動では読めない", oa=None, pdf=False))
        else:
            lib = [c for c in coll if any(c.startswith(p) for p in LIBRARY_COLLECTIONS)]
            kind = "大学・機関リポジトリ" if lib else "個人"
            why = (f"図書館・機関の走査の集まり（{lib[0]}）" if lib else "個人が上げた写しの恐れ。上げた人と権利を頁で確かめる")
            rep.hits.append(Hit("Internet Archive", f"https://archive.org/details/{ident}", kind, "",
                                f"{yr} の版・{why}・全文の文字は https://archive.org/download/{ident}/{ident}_djvu.txt",
                                oa=True, pdf=False))
        n += 1
    rep.route("Internet Archive", f"{n} 件（うち貸出だけ {lend}）" if n else "該当なし")


def wayback_urls(urls, rep, roles, authors, auto=False):
    """指定した URL そのものの Wayback の写し（PDF）を引く。確認画面を返すホストの PDF は、ここに残っていることがある。"""
    for u in urls:
        if re.match(r"https?://(web\.)?archive\.org/", u):
            continue  # Internet Archive 自身の URL は、CDX が 403 を返す
        cdx = ("https://web.archive.org/cdx/search/cdx?output=txt&fl=timestamp,original,length&filter=statuscode:200"
               f"&filter=mimetype:application/pdf&limit=-8&url={urllib.parse.quote(u, safe='')}")
        st, text, note = http_text(cdx, retry_timeout=False)
        name = f"Wayback（URL の写し：{urllib.parse.urlparse(u).hostname}）"
        if st != 200:
            rep.route(name, f"引けなかった（{note}）")
            continue
        rows = [l.split() for l in text.splitlines() if len(l.split()) == 3]
        rows = [r for r in rows if r[2].isdigit() and int(r[2]) > 20000]  # 小さすぎるものは確認画面や転送の殻
        if not rows:
            rep.route(name, "PDF の写しは無い")
            continue
        ts, orig, length = max(rows, key=lambda r: (int(r[2]), r[0]))
        wb = f"https://web.archive.org/web/{ts}/{orig}"
        kind, why = classify(wb, roles, authors)
        rep.hits.append(Hit(name, wb, kind, "", f"写しの日 {ts[:4]}-{ts[4:6]}-{ts[6:8]}・{int(length) // 1024} KB（圧縮後）・{why}"
                            + ("・確認画面のホストの PDF を自動で引いた" if auto else ""), oa=True, pdf=True))
        rep.route(name, f"PDF の写し {len(rows)} 件（いちばん大きいものを表に）")


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
                                f"最初の写しの日 {d}・題の語 {w_hit}/{len(want)}・点 {score}・{why}"
                                "（題の語が当たっただけ。別の文献のことがある）", oa=True, pdf=True))
        rep.route(f"Wayback CDX（{dom}）", f"{how}。PDF {len(lines)} 件のうち、題の語が一つ以上ある {len(scored)} 件（点の高い {min(WAYBACK_SHOW, len(scored))} を表に。点＝題の語＋著者名＋年±1）")


# ---------------------------------------------------------------- find


def verdict(hits):
    """表の頭に書く一行。いちばん取りやすい置き場の段で決める。"""
    if not hits:
        return 9, "見つかった置き場は無い。表に無い経路（著者の出版物の一覧・図書館・同じ著者の OA の論文版や総説）を試す"
    best = min(h.tier for h in hits)
    n = sum(1 for h in hits if h.tier == best)
    tail = {
        0: "fetch で取り、check で書誌を確かめる",
        1: "fetch で取り、check で書誌を確かめる。確かめ先には「Wayback の記録」と元の置き場を添える",
        2: "頁を開いて、本文が読めるかを確かめる",
        3: "取りに行かない。同じ URL の Wayback の写しを --url で引くか、Issue の表に残して pjdhiro にブラウザでの保存を頼む",
        4: "読んでよいが、確かめ先に性格を添え、それだけで本文照合済にしない（sources §5-8）。出版社・著者・大学の版を探す",
        5: "自動では読めない。同じ著者の OA の論文版・総説・講演を探す（discover --author）",
        6: "本文の置き場ではない。別の経路を試す",
        9: "OA の写しは見つからない。別の経路（著者のサイトを --domain で・discover --author で同じ著者の OA の版）を試し、"
           "無ければ Issue の表に残す",
    }[best]
    return best, f"{TIER_LABEL[best]}：{n} 件。{tail}"


def run_find(args, quiet=False):
    """find の中身。結果を dict で返す（batch から使う）。"""
    email = os.environ.get("FIND_SOURCE_EMAIL", "")
    if getattr(args, "cite", None):
        c = parse_cite(args.cite)
        args.doi = args.doi or c["doi"] or None
        args.title = args.title or c["title"] or None
        args.author = args.author or c["author"] or None
        args.year = args.year or c["year"]
        args.book = getattr(args, "book", False) or c["book"]
    roles, domains = {}, []
    for d in args.domain or []:
        dom, _, role = d.partition(":")
        domains.append(dom)
        if role:
            roles[dom] = {"author": "著者のサイト", "publisher": "出版社", "university": "大学・機関リポジトリ",
                          "personal": "個人"}.get(role, role)
    hosts = load_hosts(getattr(args, "hosts_file", None))
    rep = Report(quiet)
    if not quiet:
        print("引いています…", file=sys.stderr)
    meta = crossref(args, rep, email)
    ok_meta = meta if meta and not meta.get("rejected") else None
    authors = list(ok_meta["authors"]) if ok_meta else []
    authors += family_names(args.author or "")
    doi = ok_meta["doi"] if ok_meta else args.doi
    want_book = bool(getattr(args, "book", False)) or bool(ok_meta and ok_meta["type"] in (
        "book", "monograph", "book-chapter", "edited-book", "reference-book", "book-section", "book-part"))
    unpaywall(doi, rep, email, roles, authors)
    openalex(args, meta, rep, email, roles, authors)
    semantic_scholar(args, meta, rep, roles, authors)
    europe_pmc(args, meta, rep, roles, authors)
    core(args, meta, rep, roles, authors)
    internet_archive(args, meta, rep, want_book)
    urls = list(getattr(args, "url", None) or [])
    wayback_urls(urls, rep, roles, authors)
    # 確認画面のホストに OA の PDF があるときは、同じ URL の Wayback の写しを自動で引く（二つまで）
    auto = []
    for h in rep.hits:
        if h.oa and h.pdf and browser_host(h.url, hosts) and h.url not in urls and h.url not in auto:
            auto.append(h.url)
    wayback_urls(auto[:2], rep, roles, authors, auto=True)
    wayback(domains, args, meta, rep, roles, authors)

    seen, hits = set(), []
    for h in rep.hits:
        key = re.sub(r"^https?://(www\.)?", "", h.url or "").rstrip("/")
        if key in seen:
            continue
        seen.add(key)
        hits.append(grade(h, hosts))
    hits.sort(key=lambda h: h.tier)  # 安定な並べ替え。同じ段の中は引いた順
    tier, line = verdict(hits)
    q = args.doi or (f"{args.title}" + (f"／{args.author}" if args.author else "") + (f"／{args.year}" if args.year else "")) \
        if (args.doi or args.title) else getattr(args, "cite", "")
    return {"query": q, "meta": ok_meta, "meta_rejected": bool(meta and meta.get("rejected")), "warnings": rep.warnings,
            "routes": rep.routes, "hits": [h.as_dict() for h in hits], "tier": tier, "verdict": line,
            "book": want_book, "doi": doi or ""}


def render_find(res):
    out = [f"## {res['query']}", ""]
    meta = res["meta"]
    out.append(f"- **判定**：{res['verdict']}")
    if meta:
        out.append(f"- 書誌（Crossref）：{', '.join(meta['authors'])} ({meta['year']}). {meta['title'].rstrip('.')}. "
                   f"*{meta['journal']}* {meta['volume']}{'(' + meta['issue'] + ')' if meta['issue'] else ''}"
                   f"{', ' + meta['page'] if meta['page'] else ''}. DOI {meta['doi']}（{meta['type']}）")
    else:
        out.append("- 書誌（Crossref）：確定できなかった。書誌は別の情報源で二つ以上確かめる（sources §5-5）")
    for w in res["warnings"]:
        out.append(f"- **注意**：{w}")
    out += ["", "| 経路 | 結果 |", "|---|---|"]
    for r, result in res["routes"]:
        out.append(f"| {r} | {result} |")
    out.append("")
    if res["hits"]:
        out.append("| # | 取れそうか | 経路 | 誰が上げた版か | 版 | 場所 | 根拠・備考 |")
        out.append("|---|---|---|---|---|---|---|")
        for i, h in enumerate(res["hits"], 1):
            out.append(f"| {i} | {h['how']} | {h['route']} | {h['kind']} | {h['version']} | {h['url']} | {h['note']} |")
    else:
        out.append("見つかった場所は無い。")
    out.append("")
    out.append("- 「誰が上げた版か」「取れそうか」はドメインと API の返事からの見立て。載せる前に頁を開き、上げた人を確かめる（sources §5-8）。")
    out.append("- 取るときは `find-source.sh fetch <場所> --out <保存名> --cite …`（一度だけ取り、%PDF と書誌を確かめる）。"
               "題の語が当たっただけの URL は、別の文献のことがある。")
    return "\n".join(out)


def append_ledger(path, text, label):
    if not path:
        return
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    with open(path, "a", encoding="utf-8") as f:
        f.write(f"\n<!-- find-source {dt.datetime.now().isoformat(timespec='seconds')} -->\n")
        f.write(text.replace("## ", f"### {dt.date.today().isoformat()} {label}：", 1) + "\n")
    print(f"\n台帳に追記した：{path}", file=sys.stderr)


def cmd_find(args):
    res = run_find(args)
    text = render_find(res)
    print(text)
    append_ledger(args.ledger, text, "find-source")
    return 0


# ---------------------------------------------------------------- fetch


BLOCK_WORDS = [("確認画面", r"just a moment|checking your browser|captcha|are you a robot|verify you are human|cf-chl|"
                            r"radware|incapsula|access denied|unusual traffic|bot detection|enable javascript and cookies|"
                            r"preparing to download|security check|ddos"),
               ("ログイン", r"sign in|log ?in|institutional access|shibboleth|openathens|purchase (this )?(article|pdf)|"
                            r"get access|subscribe")]


def cmd_fetch(args):
    """PDF を一度だけ取りに行く。名乗りは UA のまま。拒まれたら、そのホストを手元の一覧に足して止まる。"""
    url = args.url
    hosts = load_hosts(args.hosts_file)
    why = browser_host(url, hosts)
    if why and not args.force:
        print(f"取りに行かない：{urllib.parse.urlparse(url).hostname} は、自動取得に「{why}」を返すと分かっている。\n"
              f"同じ URL の Wayback の写しを `find --url {url}` で引くか、Issue の表に残してブラウザでの保存を頼む（sources §5-7）。")
        return 2
    if os.path.exists(args.out):
        print(f"保存先が既にある：{args.out}。上書きしない。別の名前にするか、compare で比べる。")
        return 2
    get = re.sub(r"(https?://web\.archive\.org/web/\d+)(?:[a-z_]*)/", r"\1id_/", url)  # Wayback は元のバイトのまま取る

    def once():
        """curl で一度だけ取る（名乗りは同じ UA）。urllib は、プロキシ越しの大きい転送で末尾を落とすことがあった（2026-11-09）。"""
        _wait(get)
        st, ctype, body, note, want_len = 0, "", b"", "", None
        part = args.out + ".download"
        os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
        try:
            p = subprocess.run(["curl", "-sS", "-L", "--max-redirs", "5", "-A", UA, "-H", "Accept: application/pdf,*/*;q=0.5",
                                "--max-time", "300", "--max-filesize", str(150 * 1024 * 1024), "-o", part,
                                "-w", "%{http_code}\t%{content_type}\t%{size_download}", get],
                               capture_output=True, text=True, timeout=330)
            f = (p.stdout or "").split("\t")
            st = int(f[0]) if f and f[0].isdigit() else 0
            ctype = f[1] if len(f) > 1 else ""
            if p.returncode != 0:
                note = f"接続できない（curl {p.returncode}: {(p.stderr or '').strip()[:120]}）"
            if os.path.exists(part):
                with open(part, "rb") as fh:
                    body = fh.read()
                os.remove(part)
        except FileNotFoundError:
            note = "curl が無い"
        except subprocess.TimeoutExpired:
            note = "時間切れ（330 秒）"
        if st >= 400 and not note:
            note = f"HTTP {st}"
        # PDF は末尾に %%EOF がある。無ければ、転送が途中で切れている（返事の番号は 200 のまま切れることがある）
        cut = body.lstrip()[:4] == b"%PDF" and b"%%EOF" not in body[-4096:]
        return st, ctype, body, note, cut

    st, ctype, body, note, cut = once()
    if cut:
        time.sleep(8)  # 拒まれたのでなく転送の失敗なので、待って一度だけ取り直す
        st, ctype, body, note, cut = once()
        if cut:
            print(f"取れなかった：PDF が途中で切れている（{len(body) // 1024} KB まで。待って一度だけ取り直した）。時間を置いて試す")
            return 1
    host = urllib.parse.urlparse(wayback_original(url) or url).hostname or ""
    if body.lstrip()[:4] != b"%PDF":
        text = body[:200000].decode("utf-8", "replace")
        title = clean((re.search(r"(?is)<title[^>]*>(.*?)</title>", text) or [None, ""])[1])[:80]
        what = "PDF でない返事"
        for label, pat in BLOCK_WORDS:
            if re.search(pat, text[:20000] + " " + title, re.I):
                what = label
                break
        if st in (401, 403, 429) and what == "PDF でない返事":
            what = f"拒否（HTTP {st}）"
        elif st == 404:
            what = "無い（HTTP 404）"
        elif not body and note:
            what = note
        print(f"取れなかった：{what}（HTTP {st}・{ctype or '種類なし'}" + (f"・頁の題「{title}」" if title else "") + "）")
        if what in ("確認画面", "ログイン") or what.startswith("拒否"):
            if args.hosts_file and not wayback_original(url):
                os.makedirs(os.path.dirname(os.path.abspath(args.hosts_file)), exist_ok=True)
                with open(args.hosts_file, "a", encoding="utf-8") as f:
                    f.write(f"{host}\t{what}\t{dt.date.today().isoformat()}\t{url}\n")
                print(f"ホストを覚えた：{host} → {args.hosts_file}")
            print("同じ所をもう一度叩かない。別の名乗りで取りに行かない。同じ URL の Wayback の写し（find --url）か、"
                  "Issue の表に残してブラウザでの保存を頼む（sources §5-7）。")
        return 1
    tmp = args.out + ".part"
    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with open(tmp, "wb") as f:
        f.write(body.lstrip())
    print(f"取れた：{len(body) // 1024} KB・先頭 %PDF（{get}）")
    args.pdf = tmp
    rc = cmd_check(args)
    if rc != 0 and not args.keep:
        bad = args.out + ".mismatch"
        os.replace(tmp, bad)
        print(f"\n書誌と合わない点があるので、保存名では置かなかった：{bad}（目で確かめ、合っていれば名前を直す。違えば捨てる）")
        return 1
    os.replace(tmp, args.out)
    print(f"\n保存した：{args.out}")
    kind, why2 = classify(url)
    print(f"台帳に書く性格：{kind}（{why2}）。取得先 {url}")
    return 0


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


REPRINT_RE = re.compile(r"(?i)\b(reprinted (from|in|with|by)|reprint(ed)? of|originally (published|appeared)|first published in|"
                        r"this (essay|article|paper|chapter) (first|originally) appeared|from ways of reading|"
                        r"excerpt(ed)? from|translated (from|by)|english translation)\b")
JOURNAL_ABBR_STOP = set("journal of the and for in on de des la le der die das zeitschrift für review reviews letters "
                        "proceedings transactions annals bulletin".split())


def check_text(head, n_pages, want, full_len=None):
    """PDF の頭の頁の文字と頁数を、狙いの書誌と突き合わせる。(合うか, 行のリスト, 注意のリスト)。ネットワークも PDF も要らない（テストできる）。

    want：title・authors（リスト）・year・pages（「381-384」）・journal・doi・book（本か）
    """
    ok, lines, warn = True, [], []
    t = norm(head)
    exp = page_count_expected(want.get("pages"))
    lines.append(f"- 頁数：{n_pages}" + (f"（書誌の頁の範囲 {want['pages']} からは {exp} 頁）" if exp else ""))
    if exp and n_pages:
        if n_pages < exp * 0.6:
            lines.append(f"  - **頁が足りない**（{n_pages} < {exp}）。一部だけ・前付けだけ・別の短い文献の恐れ")
            ok = False
        elif n_pages > exp + max(4, exp * 0.5):
            lines.append(f"  - **頁が多い**（{n_pages} > {exp}）。著者稿（arXiv など。組みが違う）・再録・訳・号まるごと・補遺つきの恐れ。版を目で確かめる")
            warn.append("頁が書誌より多い")
    if want.get("book") and n_pages and n_pages < 40:
        lines.append(f"  - **本なのに {n_pages} 頁しか無い**。前付け（表紙・序文・目次）・抜粋・見本の恐れ")
        ok = False
    if len(t) < 150:
        lines.append("- 頭の頁の文字：取れない（画像だけの PDF。機械では題・著者を確かめられない。表紙を目で見るか、OCR をかける。"
                     "Internet Archive の写しなら _djvu.txt を読む）")
        return (ok and None), lines, ["文字の層が無い"]
    tsq = t.replace(" ", "")  # 字間を空けて組んだ題（S U P R A M O L E C U L A R）や、姓名の間の空白に当てる

    def has(w):
        return w in t or (len(w) >= 4 or not w.isascii()) and w.replace(" ", "") in tsq

    if want.get("title") and words(want["title"]):
        tw = words(want["title"])
        if sum(1 for w in tw if w.isascii()) >= 2:
            tw = [w for w in tw if w.isascii()]
        hit = [w for w in tw if has(w)]
        r = len(hit) / len(tw) if tw else 0
        lines.append(f"- 題：頭の頁に、題の語 {len(hit)}/{len(tw)}（{r:.0%}）")
        if r < 0.7:
            lines.append(f"  - **題が合わない恐れ**。無い語：{', '.join(w for w in tw if not has(w))}")
            ok = False
    au = [(a, bool(norm(a)) and has(norm(a).split()[-1])) for a in (want.get("authors") or [])[:3]]
    for a, found in au:
        lines.append(f"- 著者「{a}」：{'あり' if found else '**無い**'}")
    if au and not au[0][1] and sum(f for _, f in au) * 2 < len(au):
        lines.append("  - **著者が合わない恐れ**（筆頭の著者が無く、ほかの著者も半分に届かない）。同じ題の別の文献・表紙だけの写しの恐れ")
        ok = False
    elif au and not all(f for _, f in au):
        warn.append("著者の一部が頭の頁に無い")
    if want.get("year"):
        found = str(want["year"]) in t
        lines.append(f"- 年 {want['year']}：{'あり' if found else '頭の頁には無い（表紙に年が無い版・別の刷り・再録のことがある。目で確かめる）'}")
    if want.get("journal"):
        jw = [w for w in words(want["journal"]) if w not in JOURNAL_ABBR_STOP]
        if re.fullmatch(r"[A-Z]{2,6}", want["journal"].strip()):
            jw = []  # PRL・PNAS・JEP のような頭文字だけの略は、頁の文字と当てられない
        # 略した誌名（Phys. Rev. Lett.）は語の頭で当てる
        found = [w for w in jw if re.search(rf"\b{re.escape(w[:4] if len(w) > 4 else w)}", t)]
        if jw and len(found) < max(1, len(jw) // 2):
            lines.append(f"- 掲載誌「{want['journal']}」：**頭の頁に見当たらない**。再録・著者稿・別の誌の同名の論文の恐れ（目で確かめる）")
            warn.append("掲載誌の名が頭の頁に無い")
        elif jw:
            lines.append(f"- 掲載誌「{want['journal']}」：あり")
    dois = {d.lower().rstrip(".") for d in DOI_RE.findall(head)}
    if want.get("doi"):
        sq = lambda x: re.sub(r"[^a-z0-9]", "", x.lower())  # noqa: E731  括弧や改行で切れた DOI も当てる
        w = sq(want["doi"])
        same_reg = [d for d in dois if d.split("/")[0] == want["doi"].lower().split("/")[0]]
        if any(sq(d).startswith(w[:len(sq(d))]) or w.startswith(sq(d)) for d in dois):
            lines.append(f"- DOI {want['doi']}：頭の頁にあり")
        elif not same_reg:
            lines.append("- DOI：頭の頁に狙いの DOI は無い（古い論文・著者稿には無いことが多い）")
        elif dois:
            lines.append(f"- DOI：**頭の頁の DOI が狙いと違う**（{', '.join(sorted(dois))}）。別の論文か、補遺・訂正・再録の恐れ")
            ok = False
        else:
            lines.append("- DOI：頭の頁には無い（古い論文・著者稿には無いことが多い）")
    m = REPRINT_RE.search(head)
    if m:
        ctx = clean(head[max(0, m.start() - 60): m.end() + 100])
        lines.append(f"- **再録・訳・抜粋の印**：「…{ctx}…」。初出の版か、再録の版かを確かめ、台帳に版を書く")
        warn.append("再録・訳・抜粋の印")
    if full_len is not None and n_pages and full_len / max(n_pages, 1) < 200:
        lines.append(f"- 文字の層：薄い（1 頁あたり {full_len // max(n_pages, 1)} 字）。画像の PDF の恐れ。読むには OCR が要る")
        warn.append("文字の層が薄い")
    return ok, lines, warn


def crossref_want(doi):
    st, data, note = http_json(f"https://api.crossref.org/works/{urllib.parse.quote(doi)}")
    if not data:
        print(f"（Crossref で DOI を引けなかった：{note}。渡された項目だけで突き合わせる）", file=sys.stderr)
        return {}
    m = data["message"]
    return {"title": clean((m.get("title") or [""])[0]),
            "authors": [a.get("family") or a.get("name", "") for a in m.get("author", [])][:3],
            "year": ((m.get("issued") or {}).get("date-parts") or [[None]])[0][0],
            "pages": m.get("page", ""), "journal": clean((m.get("container-title") or [""])[0]),
            "book": m.get("type") in ("book", "monograph", "edited-book", "reference-book")}


def cmd_check(args):
    want = {"title": None, "authors": [], "year": None, "pages": "", "journal": "", "doi": "", "book": False}
    if getattr(args, "cite", None):
        c = parse_cite(args.cite)
        want.update({"title": c["title"], "authors": family_names(c["author"])[:3], "year": c["year"], "pages": c["pages"],
                     "journal": c["journal"], "doi": c["doi"], "book": c["book"] and not c["pages"]})
    pre = []  # PDF を開く前に分かる、書誌どうしの食い違い
    if getattr(args, "doi", None) or (getattr(args, "crossref", False) and want["doi"]):
        want["doi"] = getattr(args, "doi", None) or want["doi"]
        if getattr(args, "crossref", False) or not (want["title"] or args.title):
            cw = crossref_want(want["doi"])
            given = want["title"] or getattr(args, "title", None)
            if given and cw.get("title") and title_score_strict(given, cw["title"]) < 0.8:
                pre.append(f"- **渡した書誌の題と、DOI {want['doi']} の Crossref の題が同じでない**：「{given}」／「{cw['title']}」。"
                           "DOI か題のどちらかが別の文献を指している恐れ（題を縮めて書いただけのこともある）")
            if want["year"] and cw.get("year") and abs(int(want["year"]) - int(cw["year"])) > 1:
                pre.append(f"- **渡した書誌の年 {want['year']} と、Crossref の年 {cw['year']} が違う**")
            for k, v in cw.items():
                want[k] = want.get(k) or v
    for k in ("title", "year", "journal"):
        if getattr(args, k, None):
            want[k] = getattr(args, k)
    if getattr(args, "author", None):
        a = args.author if isinstance(args.author, list) else [args.author]
        want["authors"] = [x for s in a for x in (family_names(s) or [s])]
    if getattr(args, "page_range", None):
        want["pages"] = args.page_range
    if getattr(args, "book", False):
        want["book"] = True
    lines = [f"## 突き合わせ：{args.pdf}", ""]
    with open(args.pdf, "rb") as f:
        head = f.read(1024)
    if head.lstrip()[:4] != b"%PDF":
        lines.append(f"- 先頭：**PDF でない**（{head[:5]!r}）。HTML の案内頁や確認画面を掴んでいる（sources §5-3）")
        print("\n".join(lines))
        return 1
    lines.append("- 先頭：%PDF")
    n = pdfpages(args.pdf)
    hp = getattr(args, "head_pages", 2) or 2
    if want.get("book") and hp < 8:
        hp = 8  # 本は、表紙・白紙・扉のあとに題と著者が来る
    full = pdftext(args.pdf)
    ok, more, warn = check_text(pdftext(args.pdf, 1, hp), n, want, full_len=len(full.strip()))
    lines += pre + more
    warn += ["書誌どうしの食い違い"] * bool(pre)
    exp_pages = getattr(args, "pages", None)
    if exp_pages and n and n != exp_pages:
        lines.append(f"- **頁数が期待（{exp_pages}）と違う**。抜き刷り・別の版・一部だけの恐れ")
        ok = False
    tw = words(want.get("title") or "")
    if tw and sum(1 for w in tw if w in norm(pdftext(args.pdf, 1, hp))) / len(tw) < 0.7:
        whole = norm(full)
        r = sum(1 for w in tw if w in whole) / len(tw)
        lines.append(f"- 参考：全文では題の語 {r:.0%}。頭の頁に無く全文にあるなら、合本・号まるごと・表紙つきの写しの中にある恐れ")
    lines.append("")
    if ok is None:
        lines.append("判定：**機械では確かめられない**（文字の層が無い）。表紙と頭の頁を目で見て、題・著者・版を確かめる")
        print("\n".join(lines))
        return 3
    if not ok:
        lines.append("判定：**合わない点がある。捨てるか、目で確かめる**（sources §5-4）")
    elif warn:
        lines.append(f"判定：書誌の題・著者は合うが、**注意がある**（{'・'.join(warn)}）。版（初出・再録・著者稿・訳）を目で確かめ、台帳に版を書く")
    else:
        lines.append("判定：書誌と合う。本文を読み、引く箇所を頁つきで控える")
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


# ---------------------------------------------------------------- batch


def manifest_rows(path):
    rows = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            if not re.match(r"\|\s*[A-Za-z]+\d*-S\d+", line):
                continue
            c = [x.strip() for x in line.strip().strip("|").split("|")]
            if len(c) >= 7:
                rows.append({"id": c[0], "domain": c[1], "status": c[2].strip("`"), "cite": c[3], "local": c[4].strip("`—"),
                             "notes": c[6]})
    return rows


def cmd_batch(args):
    """台帳の行や、id と書誌の表をまとめて find に流す。済んだ id は結果のファイルから読んで飛ばす（同じ所を二度叩かない）。"""
    jobs = []
    if args.manifest:
        ids = set(args.ids.split(",")) if args.ids else None
        sts = set(args.status.split(",")) if args.status else None
        for r in manifest_rows(args.manifest):
            if ids is not None and r["id"] not in ids:
                continue
            if sts is not None and r["status"] not in sts:
                continue
            if args.domain_id and r["domain"] not in args.domain_id.split(","):
                continue
            if ids is None and sts is None and not args.domain_id:
                continue
            urls = [u.rstrip(".,)") for u in re.findall(r"https?://[^\s）)、。]+", r["notes"])][:2] if args.note_urls else []
            jobs.append({"id": r["id"], "cite": r["cite"], "extra": r["notes"], "urls": urls, "status": r["status"]})
    if args.input:
        with open(args.input, encoding="utf-8") as f:
            for line in f:
                p = line.rstrip("\n").split("\t")
                if len(p) < 2 or p[0] in ("id", "") or line.startswith("#"):
                    continue
                jobs.append({"id": p[0], "cite": p[1], "extra": "", "urls": [u for u in p[2:3] if u.startswith("http")],
                             "status": p[3] if len(p) > 3 else ""})
    if args.limit:
        jobs = jobs[: args.limit]
    os.makedirs(args.out, exist_ok=True)
    res_path = os.path.join(args.out, "results.jsonl")
    done = {}
    if os.path.exists(res_path):
        with open(res_path, encoding="utf-8") as f:
            for line in f:
                try:
                    d = json.loads(line)
                    done[d["id"]] = d
                except ValueError:
                    pass
    print(f"{len(jobs)} 件。済みは {sum(1 for j in jobs if j['id'] in done)} 件（飛ばす）。結果：{res_path}", file=sys.stderr)
    for i, j in enumerate(jobs, 1):
        if j["id"] in done:
            continue
        c = parse_cite(j["cite"], j["extra"])
        a = argparse.Namespace(doi=c["doi"] or None, title=c["title"] or None, author=c["author"] or None, year=c["year"],
                               domain=None, url=j["urls"], ledger=None, cite=None if (c["doi"] or c["title"]) else j["cite"],
                               book=c["book"], ia=False, hosts_file=args.hosts_file)
        if not (a.doi or a.title or a.cite):
            res = {"query": j["cite"], "meta": None, "warnings": ["書誌の一行を分けられなかった"], "routes": [], "hits": [],
                   "tier": 9, "verdict": "書誌を分けられない。手で --title か --doi を渡す", "book": False, "doi": ""}
        else:
            try:
                res = run_find(a, quiet=True)
            except Exception as e:  # noqa: BLE001  一件の失敗で全体を止めない
                res = {"query": j["cite"], "meta": None, "warnings": [f"道具の失敗：{type(e).__name__}: {e}"], "routes": [],
                       "hits": [], "tier": 9, "verdict": "道具が失敗した", "book": False, "doi": ""}
        res.update({"id": j["id"], "cite": j["cite"], "status": j["status"], "parsed": c})
        done[j["id"]] = res
        with open(res_path, "a", encoding="utf-8") as f:
            f.write(json.dumps(res, ensure_ascii=False) + "\n")
        text = render_find(res).replace("## ", f"## {j['id']}：", 1)
        if args.ledger:
            with open(args.ledger, "a", encoding="utf-8") as f:
                f.write(f"\n<!-- find-source batch {dt.datetime.now().isoformat(timespec='seconds')} -->\n")
                f.write(text.replace("## ", f"### {dt.date.today().isoformat()} find-source：", 1) + "\n")
        print(f"[{i}/{len(jobs)}] {j['id']}：{res['verdict'][:60]}", file=sys.stderr)
    out = batch_summary([done[j["id"]] for j in jobs if j["id"] in done])
    with open(os.path.join(args.out, "summary.md"), "w", encoding="utf-8") as f:
        f.write(out + "\n")
    print(out)
    return 0


def batch_summary(results):
    out = ["## まとめ（find-source batch）", "", "| id | 書誌（Crossref か、渡した一行） | 判定 | いちばん取りやすい置き場 | 誰が上げた版か・版 | 経路 |",
           "|---|---|---|---|---|---|"]
    tiers, route_hit, route_all = {}, {}, {}
    for r in results:
        tiers[r["tier"]] = tiers.get(r["tier"], 0) + 1
        m = r.get("meta")
        bib = (f"{', '.join(m['authors'][:3])} ({m['year']}). {m['title'][:70]}. DOI {m['doi']}" if m else clean(r["cite"])[:110])
        h = r["hits"][0] if r["hits"] else None
        warn = "⚠ " if r.get("warnings") else ""
        out.append(f"| {r['id']} | {warn}{bib} | {TIER_LABEL[r['tier']].split('（')[0]} | {h['url'] if h else '—'} | "
                   f"{(h['kind'] + '・' + h['version']).strip('・') if h else '—'} | {h['route'] if h else '—'} |")
        for name, result in r["routes"]:
            key = re.sub(r"（.*", "", name)
            route_all[key] = route_all.get(key, 0) + 1
        best_routes = {re.sub(r"（.*", "", h2["route"]) for h2 in r["hits"] if h2["tier"] <= 2}
        for key in best_routes:
            route_hit[key] = route_hit.get(key, 0) + 1
    out += ["", "### 判定ごとの数", "", "| 判定 | 件 |", "|---|---|"]
    for t in sorted(tiers):
        out.append(f"| {TIER_LABEL[t]} | {tiers[t]} |")
    out += ["", "### 経路ごとの数（引いた回数と、自動で取れそう・開いて確かめる置き場を出した回数）", "", "| 経路 | 引いた | 当たり |", "|---|---|---|"]
    for k in route_all:
        out.append(f"| {k} | {route_all[k]} | {route_hit.get(k, 0)} |")
    out.append("")
    out.append("⚠ は注意つき（年の食い違い・題の重なりが半分に届かない など）。台帳に足す前に、その行の ledger を開いて目で確かめる。")
    return "\n".join(out)


# ---------------------------------------------------------------- discover（広く探す）


def oa_work_row(w):
    oa = w.get("open_access") or {}
    loc = w.get("best_oa_location") or {}
    au = [((a.get("author") or {}).get("display_name") or "").split()[-1] for a in (w.get("authorships") or [])[:3]]
    return {"year": w.get("publication_year"), "authors": ", ".join(a for a in au if a) + (" ほか" if len(w.get("authorships") or []) > 3 else ""),
            "title": clean(w.get("title") or w.get("display_name") or ""), "type": w.get("type") or "",
            "cited": w.get("cited_by_count") or 0, "oa": oa.get("oa_status") or "", "doi": (w.get("doi") or "").replace("https://doi.org/", ""),
            "url": loc.get("pdf_url") or loc.get("landing_page_url") or "", "id": (w.get("id") or "").rsplit("/", 1)[-1],
            "src": "OpenAlex"}


OA_SELECT = "select=id,doi,title,publication_year,type,cited_by_count,open_access,best_oa_location,authorships"


def discover_openalex(path, rows, notes, label):
    st, data, note = http_json(f"https://api.openalex.org/works?{path}&per-page={rows}&{OA_SELECT}", openalex_headers())
    if not data:
        notes.append(f"OpenAlex（{label}）：引けなかった（{note}" + ("。一日の上限か、続けて引きすぎ" if st == 429 else "") + "）")
        return []
    notes.append(f"OpenAlex（{label}）：全体で {(data.get('meta') or {}).get('count')} 件のうち上から {len(data.get('results', []))} 件{openalex_budget()}")
    return [oa_work_row(w) for w in data.get("results", [])]


def openalex_id(doi, notes):
    st, data, note = http_json(f"https://api.openalex.org/works/doi:{urllib.parse.quote(doi)}?select=id,title,referenced_works",
                               openalex_headers())
    if not data:
        notes.append(f"OpenAlex：DOI {doi} を引けなかった（{note}）")
        return None, None, []
    return data["id"].rsplit("/", 1)[-1], clean(data.get("title")), [r.rsplit("/", 1)[-1] for r in data.get("referenced_works") or []]


def cmd_discover(args):
    """広く探す。出すのは候補の一覧で、分野の論として足すかは別の判断（docs/cs-review/README.md「調査の手順」の目安のまま）。"""
    notes, rows = [], []
    flt = []
    if args.year_from:
        flt.append(f"from_publication_date:{args.year_from}-01-01")
    if args.year_to:
        flt.append(f"to_publication_date:{args.year_to}-12-31")
    if args.oa_only:
        flt.append("is_oa:true")
    if args.reviews:
        flt.append("type:review")
    match = urllib.parse.quote(args.match) if args.match else ""
    head = ""
    if args.topic:
        head = f"主題「{args.topic}」"
        f = "&filter=" + ",".join(flt) if flt else ""
        rows += discover_openalex(f"search={urllib.parse.quote(args.topic)}{f}", args.rows, notes, "主題")
        # Semantic Scholar の検索（キーが無いと 429 が多い。引けなければ飛ばす）
        st, data, note = http_json("https://api.semanticscholar.org/graph/v1/paper/search?"
                                   f"query={urllib.parse.quote(args.topic)}&limit={min(args.rows, 20)}"
                                   "&fields=title,year,authors,openAccessPdf,externalIds,citationCount,publicationTypes"
                                   + (f"&year={args.year_from or ''}-{args.year_to or ''}" if args.year_from or args.year_to else ""),
                                   s2_headers())
        if data and data.get("data"):
            for p in data["data"]:
                rows.append({"year": p.get("year"), "authors": ", ".join((a.get("name") or "").split()[-1] for a in (p.get("authors") or [])[:3]),
                             "title": clean(p.get("title")), "type": "/".join(p.get("publicationTypes") or [])[:20],
                             "cited": p.get("citationCount") or 0, "oa": "あり" if p.get("openAccessPdf", {}) and (p.get("openAccessPdf") or {}).get("url") else "",
                             "doi": (p.get("externalIds") or {}).get("DOI", ""), "url": (p.get("openAccessPdf") or {}).get("url", ""),
                             "id": "", "src": "S2"})
            notes.append(f"Semantic Scholar（主題）：{len(data['data'])} 件")
        else:
            notes.append(f"Semantic Scholar（主題）：飛ばした（{note or '該当なし'}）")
        if args.epmc:
            q = args.topic + (" AND OPEN_ACCESS:y" if args.oa_only else "") + (' AND PUB_TYPE:"review"' if args.reviews else "")
            st, data, note = http_json("https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resultType=lite"
                                       f"&pageSize={args.rows}&sort=CITED%20desc&query={urllib.parse.quote(q)}")
            res = ((data or {}).get("resultList") or {}).get("result") or []
            for r in res:
                rows.append({"year": r.get("pubYear"), "authors": clean(r.get("authorString"))[:40], "title": clean(r.get("title")),
                             "type": r.get("pubType") or "", "cited": r.get("citedByCount") or 0,
                             "oa": "OA" if r.get("isOpenAccess") == "Y" else ("PMC" if r.get("pmcid") else ""),
                             "doi": r.get("doi") or "", "url": f"https://europepmc.org/article/{r.get('source')}/{r.get('id')}",
                             "id": r.get("pmcid") or "", "src": "EPMC"})
            notes.append(f"Europe PMC（主題・引用の多い順）：{len(res)} 件" if data else f"Europe PMC：引けなかった（{note}）")
    for kind in ("cited_by", "refs"):
        doi = getattr(args, kind)
        if not doi:
            continue
        wid, wtitle, refs = openalex_id(doi, notes)
        if not wid:
            continue
        if kind == "cited_by":
            head += f" 「{wtitle}」（{doi}）を引用している論文"
            f = [f"cites:{wid}"] + flt + ([f"title_and_abstract.search:{match}"] if match else [])
            rows += discover_openalex("filter=" + ",".join(f) + "&sort=cited_by_count:desc", args.rows, notes,
                                      "引用している論文・引用の多い順" + (f"・題か要旨に「{args.match}」" if args.match else ""))
        else:
            head += f" 「{wtitle}」（{doi}）の参考文献"
            if not refs:
                notes.append("OpenAlex：参考文献の一覧が無い（古い文献・本では無いことが多い）")
            for i in range(0, min(len(refs), 100), 50):
                rows += discover_openalex("filter=openalex:" + "|".join(refs[i:i + 50]) + "&sort=cited_by_count:desc", 50, notes, "参考文献")
            if match:
                mw = set(words(args.match))
                rows = [r for r in rows if mw & set(words(r["title"]))]
    if args.author:
        head += f" 著者「{args.author}」"
        st, data, note = http_json(f"https://api.openalex.org/authors?search={urllib.parse.quote(args.author)}&per-page=3"
                                   "&select=id,display_name,works_count,cited_by_count,last_known_institutions", openalex_headers())
        cands = (data or {}).get("results") or []
        if not cands:
            notes.append(f"OpenAlex（著者）：見つからない（{note}）")
        else:
            a = cands[0]
            inst = ", ".join(i.get("display_name", "") for i in a.get("last_known_institutions") or [])
            notes.append(f"OpenAlex（著者）：{a['display_name']}（{inst or '所属なし'}・{a.get('works_count')} 本）を使った。"
                         "同名の別人のことがあるので、題で確かめる"
                         + (f"。ほかの候補：{', '.join(c['display_name'] for c in cands[1:])}" if len(cands) > 1 else ""))
            f = [f"authorships.author.id:{a['id'].rsplit('/', 1)[-1]}"] + flt + ([f"title_and_abstract.search:{match}"] if match else [])
            rows += discover_openalex("filter=" + ",".join(f) + "&sort=cited_by_count:desc", args.rows, notes, "著者の論文・引用の多い順")
    # 同じ DOI・同じ題をまとめる
    seen, uniq = set(), []
    for r in rows:
        key = (r["doi"] or "").lower() or norm(r["title"])
        if not key or key in seen:
            continue
        seen.add(key)
        uniq.append(r)
    out = [f"## 広く探す：{head.strip()}", ""]
    out += [f"- {n}" for n in notes]
    out += ["", "| # | 年 | 著者 | 題 | 種類 | 被引用 | OA | DOI | OA の置き場 | 出どころ |", "|---|---|---|---|---|---|---|---|---|---|"]
    for i, r in enumerate(uniq, 1):
        out.append(f"| {i} | {r['year'] or ''} | {r['authors']} | {r['title'][:110]} | {r['type']} | {r['cited']} | {r['oa']} | "
                   f"{r['doi']} | {r['url']} | {r['src']} |")
    out += ["", "- これは候補の一覧。題と要旨で選び、選んだものを `find`（DOI）で置き場を引き、取って読んでから使う。"
                "被引用の数は、論の確かさではない。",
            "- 分野の論として足すかは、docs/cs-review/README.md「調査の手順」1 の目安のまま（広く探した結果は提案にとどめる）。"]
    text = "\n".join(out)
    print(text)
    append_ledger(args.ledger, text, "find-source discover")
    return 0


# ---------------------------------------------------------------- main


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    def bib(sp, author_append=False):
        sp.add_argument("--doi")
        sp.add_argument("--title")
        if author_append:
            sp.add_argument("--author", action="append", help="著者（姓）。何度でも")
        else:
            sp.add_argument("--author", help="著者（姓）。複数は ; で区切る")
        sp.add_argument("--year", type=int)
        sp.add_argument("--cite", help="書誌の一行（台帳の source_title の形：「著者 (年). 題. *誌名* 巻, 頁–頁.」）。DOI・題・著者・年・頁を読み取る")
        sp.add_argument("--book", action="store_true", help="本として扱う（Internet Archive を引く・頁数の少なさを見る）")

    f = sub.add_parser("find", help="置き場所を順に全部引く")
    bib(f)
    f.add_argument("--domain", action="append",
                   help="Wayback の CDX で PDF を探すドメイン。役を :author・:publisher・:university・:personal で添える"
                        "（例 cook-greuter.com:author）。何度でも")
    f.add_argument("--url", action="append", help="この URL そのものの Wayback の写し（PDF）を引く。確認画面で止まった PDF の URL を渡す。何度でも")
    f.add_argument("--ia", action="store_true", help="Internet Archive を必ず引く")
    f.add_argument("--ledger", help="試した経路と結果を追記する台帳（Markdown）")
    f.add_argument("--hosts-file", help="確認画面などを返したホストの手元の一覧（fetch が足す。TSV）")

    g = sub.add_parser("fetch", help="置き場から PDF を一度だけ取り、%%PDF と書誌を確かめて保存する")
    g.add_argument("url")
    g.add_argument("--out", required=True, help="保存名（台帳の名前の付け方：Dxx_姓_年_題の語.pdf）。既にあれば上書きしない")
    bib(g, author_append=True)
    g.add_argument("--journal")
    g.add_argument("--page-range", help="書誌の頁の範囲（例 381-384）")
    g.add_argument("--pages", type=int, help="期待する頁数")
    g.add_argument("--head-pages", type=int, default=2)
    g.add_argument("--crossref", action="store_true", help="--doi の書誌を Crossref で引いて突き合わせに使う")
    g.add_argument("--hosts-file", help="確認画面などを返したホストを足す手元の一覧（TSV。git の外）")
    g.add_argument("--force", action="store_true", help="確認画面のホストと分かっていても一度だけ試す（一覧が古いかを確かめるとき）")
    g.add_argument("--keep", action="store_true", help="書誌と合わなくても保存名で置く（目で確かめて合っていたとき）")

    c = sub.add_parser("check", help="手元の PDF を書誌と突き合わせる")
    c.add_argument("pdf")
    bib(c, author_append=True)
    c.add_argument("--journal")
    c.add_argument("--page-range", help="書誌の頁の範囲（例 381-384）。頁数と比べる")
    c.add_argument("--pages", type=int, help="期待する頁数")
    c.add_argument("--head-pages", type=int, default=2, help="題と著者を探す頭の頁数（既定 2）")
    c.add_argument("--crossref", action="store_true", help="--doi の書誌（題・著者・年・頁・誌名）を Crossref で引いて突き合わせに使う")

    m = sub.add_parser("compare", help="二つの PDF の本文を突き合わせる")
    m.add_argument("a")
    m.add_argument("b")
    m.add_argument("--show", type=int, default=20, help="出す食い違いの数")

    b = sub.add_parser("batch", help="台帳の行や表をまとめて find に流す")
    b.add_argument("--manifest", help="台帳（cs/knowledge/raw/manifest.md の形）")
    b.add_argument("--ids", help="台帳の source_id をカンマで")
    b.add_argument("--status", help="台帳の access_status をカンマで（例 blocked-access,citation-only）")
    b.add_argument("--domain-id", help="台帳の domain_id をカンマで（例 D02,D05）")
    b.add_argument("--note-urls", action="store_true", help="台帳の notes にある URL（二つまで）の Wayback の写しも引く")
    b.add_argument("--input", help="TSV：id・書誌の一行（か DOI）・（あれば）止まった PDF の URL・（あれば）今の状態")
    b.add_argument("--limit", type=int)
    b.add_argument("--out", required=True, help="結果を置くディレクトリ（results.jsonl・summary.md。git の外）")
    b.add_argument("--ledger", help="一件ずつの表を追記する台帳（Markdown）")
    b.add_argument("--hosts-file")

    d = sub.add_parser("discover", help="広く探す（主題・引用している論文・参考文献・著者）")
    d.add_argument("--topic", help="主題や理論の名前（英語の語で）")
    d.add_argument("--cited-by", help="この DOI の論文を引用している論文")
    d.add_argument("--refs", help="この DOI の論文の参考文献")
    d.add_argument("--author", help="著者の名前（フルネームが確か）")
    d.add_argument("--match", help="引用・参考文献・著者の一覧を、題か要旨のこの語で絞る")
    d.add_argument("--year-from", type=int)
    d.add_argument("--year-to", type=int)
    d.add_argument("--oa-only", action="store_true", help="OA のものだけ")
    d.add_argument("--reviews", action="store_true", help="総説だけ")
    d.add_argument("--epmc", action="store_true", help="Europe PMC も引く（生命・医学。上限を気にせず引ける）")
    d.add_argument("--rows", type=int, default=15)
    d.add_argument("--ledger")

    args = p.parse_args()
    if args.cmd == "find":
        if not (args.doi or args.title or args.cite):
            p.error("--doi か --title か --cite が要る")
        return cmd_find(args)
    if args.cmd == "fetch":
        return cmd_fetch(args)
    if args.cmd == "check":
        return cmd_check(args)
    if args.cmd == "batch":
        if not (args.manifest or args.input):
            p.error("--manifest か --input が要る")
        return cmd_batch(args)
    if args.cmd == "discover":
        if not (args.topic or args.cited_by or args.refs or args.author):
            p.error("--topic・--cited-by・--refs・--author のどれかが要る")
        return cmd_discover(args)
    return cmd_compare(args)


if __name__ == "__main__":
    sys.exit(main())
