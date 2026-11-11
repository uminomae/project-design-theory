#!/usr/bin/env python3
"""READER (knowledge/ の MD 正本) から公開 LP HTML を生成する。

ページ一覧は PAGES を参照（正本 MD × テンプレート × 出力 HTML の組）。
使い方: python3 scripts/build-reader-lp.py

READER を更新したら本スクリプトを再実行して LP を追随させる。

デザイン必須制約（docs/DESIGN-RULES.md §0a）:
- 全公開ページは index.html の VI を継承する（シェーダー背景 + グロークラス体系 + 確立パレット）
- テンプレート（scripts/reader-*-template.html）や後処理を変更するときも上記を満たすこと
- 独自テーマ・埋め込み standalone CSS の新造は禁止（却下実例: DESIGN-RULES §8b 2026-07-03）
"""
import html as htmllib
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# (正本 MD, テンプレート, 出力 HTML, style)。ページ追加時はここに1行足し、reader/README.md の表も更新する
# style:
#   "glow" … three-and-seven 型（透過記事＋要素ごとの glow-card、<!--TOC--> にインライン目次）
#   "flow" … energy-flow 型（cs wave-vortex 参考の一枚ガラスカラム＋garage 型の章 details.sec、
#            目次は src/reader-flow.js がクライアント側で生成。pjdhiro 指示 2026-07-14）
PAGES = [
    (
        ROOT / "knowledge/research/two-axis-closure/READER-division-algebra-consciousness-organization.md",
        ROOT / "scripts/reader-lp-template.html",
        ROOT / "reader/three-and-seven.html",
        "glow",
    ),
    # energy-flow（エネルギーの流れ）は 2026-11-10 に reader/archive/ へしまい、生成の対象から外した（Issue #111）。
    (
        ROOT / "knowledge/research/stages-screener/READER-stages-screener.md",
        ROOT / "scripts/reader-stages-screener-template.html",
        ROOT / "reader/stages-screener.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-driven-dev/READER-love-driven-dev.md",
        ROOT / "scripts/reader-love-driven-dev-template.html",
        ROOT / "reader/love-driven-dev.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/gravity-well/READER-gravity-well.md",
        ROOT / "scripts/reader-gravity-well-template.html",
        ROOT / "reader/gravity-well.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/influences-psychology/READER-influences-psychology.md",
        ROOT / "scripts/reader-influences-psychology-template.html",
        ROOT / "reader/influences-psychology.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/rotation-multiplication/READER-rotation-multiplication.md",
        ROOT / "scripts/reader-rotation-multiplication-template.html",
        ROOT / "reader/rotation-multiplication.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/subtraction-kinds/READER-subtraction-kinds.md",
        ROOT / "scripts/reader-subtraction-kinds-template.html",
        ROOT / "reader/subtraction-kinds.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/intrinsic-motivation/READER-intrinsic-motivation.md",
        ROOT / "scripts/reader-intrinsic-motivation-template.html",
        ROOT / "reader/intrinsic-motivation.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/psychological-safety/READER-psychological-safety.md",
        ROOT / "scripts/reader-psychological-safety-template.html",
        ROOT / "reader/psychological-safety.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/management-drivers/READER-management-drivers.md",
        ROOT / "scripts/reader-management-drivers-template.html",
        ROOT / "reader/management-drivers.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/mintzberg-schools/READER-mintzberg-schools.md",
        ROOT / "scripts/reader-mintzberg-schools-template.html",
        ROOT / "reader/mintzberg-schools.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/developmental-stages/READER-developmental-stages.md",
        ROOT / "scripts/reader-developmental-stages-template.html",
        ROOT / "reader/developmental-stages.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/anxiety/READER-anxiety.md",
        ROOT / "scripts/reader-anxiety-template.html",
        ROOT / "reader/anxiety.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-history/READER-love-history.md",
        ROOT / "scripts/reader-love-history-template.html",
        ROOT / "reader/love-history.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/love-trajectory/READER-love-trajectory.md",
        ROOT / "scripts/reader-love-trajectory-template.html",
        ROOT / "reader/love-trajectory.html",
        "flow",
    ),
    (
        ROOT / "knowledge/research/business-design-syllabus/READER-business-design-syllabus.md",
        ROOT / "scripts/reader-business-design-syllabus-template.html",
        ROOT / "reader/business-design-syllabus.html",
        "flow",
    ),
]

# スクリーナーのデータ（正本 JSON）。出力 HTML 名 → JSON。正本 MD の <!--SCREENER--> に
# no-JS 用の静的リスト＋埋め込み JSON を差し込み、src/reader-screener.js が対話 UI に置き換える
SCREENER_DATA = {
    "stages-screener.html": ROOT / "knowledge/research/stages-screener/screener-data.json",
}


def fold_sections(html: str) -> str:
    """h2 章を garage 型の <details class="sec"> に畳む（flow style 用）。

    h2 の id を details 側へ移す（既存アンカー #2-... は details に着地し、
    reader-flow.js が開いてスクロールする）。h2 より前のリード部はそのまま残す。
    """
    parts = re.split(r'(<h2 id="[^"]+">.*?</h2>)', html, flags=re.S)
    # 正本 MD で章の前に <!--PART:第一部|部の題--> を置くと、章をまとめる部の区切りを
    # 章の外に出す（目次では src/reader-flow.js が部の行にする・#20「章を4つくらいの分類に」）
    part_no = [0]

    def part_html(mark: str) -> str:
        part_no[0] += 1
        no, _, title = mark.partition("|")
        t = f'<p class="reader-part__title">{title.strip()}</p>' if title.strip() else ""
        return (f'<div class="reader-part" id="part-{part_no[0]}">'
                f'<p class="reader-part__no">{no.strip()}</p>{t}</div>')

    def take_part(seg: str) -> tuple[str, str]:
        m = re.search(r"(?:<p>)?<!--PART:(.*?)-->(?:</p>)?", seg, flags=re.S)
        if not m:
            return seg, ""
        return seg[:m.start()] + seg[m.end():], part_html(m.group(1))

    lead, lead_part = take_part(parts[0])
    out = [lead + lead_part]
    for i in range(1, len(parts), 2):
        h2 = parts[i]
        body = parts[i + 1] if i + 1 < len(parts) else ""
        body, next_part = take_part(body)
        hid = re.search(r'id="([^"]+)"', h2).group(1)
        label = re.sub(r"<[^>]+>", "", h2).strip()
        # 正本 MD で h2 直後に <!--OPEN--> を置いた章は、最初から開いておく
        opened = body.lstrip().startswith("<!--OPEN-->")
        if opened:
            body = body.replace("<!--OPEN-->", "", 1)
        # 正本 MD で章末に <!--TURN-->…<!--/TURN--> を置くと、章の外（次の章との間）に
        # 転回点として出す。章を閉じていても見える（#20「独立して章を繋ぐ言葉として印象的に」）
        turn = ""
        m = re.search(r"<!--TURN-->(.*?)<!--/TURN-->", body, flags=re.S)
        if m:
            turn = f'<div class="reader-turn">{m.group(1).strip()}</div>'
            body = body[:m.start()] + body[m.end():]
        out.append(
            f'<details class="sec" id="{hid}"{" open" if opened else ""}><summary>{label}</summary>'
            f'<div class="secbody">{body}</div></details>{turn}{next_part}'
        )
    return "".join(out)


def collect_refs(html: str) -> str:
    """正本 MD で「出典：」段落の前に <!--REF:分野--> を置くと、巻末の <!--REFS--> に分野ごとに集める。

    各行には出典が置かれた章（h2）へのリンクを付ける。章の中の出典はそのまま残す
    （#20「論文的な参照を見やすくしたい」）。<!--REFS--> が無いページは何もしない。
    """
    marker = re.search(r"(?:<p>)?<!--REFS-->(?:</p>)?", html)
    if not marker:
        return html
    heads = [(m.start(), m.group(1), re.sub(r"<[^>]+>", "", m.group(2)).strip())
             for m in re.finditer(r'<h2 id="([^"]+)">(.*?)</h2>', html, flags=re.S)]
    groups: dict[str, list[str]] = {}
    for m in re.finditer(r"<!--REF:(.*?)-->\s*<p>出典：(.*?)</p>", html, flags=re.S):
        before = [h for h in heads if h[0] < m.start()]
        where = ""
        if before:
            _, hid, label = before[-1]
            short = re.split(r"\s*[—―]\s*", label)[0]
            where = f'<a class="reader-refs__where" href="#{hid}">{short}</a>'
        groups.setdefault(m.group(1).strip(), []).append(f"<li>{where}{m.group(2).strip()}</li>")
    out = "".join(f'<h4>{field}</h4><ul class="reader-refs">{"".join(items)}</ul>'
                  for field, items in groups.items())
    html = re.sub(r"<!--REF:.*?-->", "", html)
    return re.sub(r"(?:<p>)?<!--REFS-->(?:</p>)?", lambda _: out, html, count=1)


def screener_markup(data_path: Path) -> str:
    """スクリーナーの静的マークアップ（no-JS・SEO/LLM 用）と埋め込み JSON を作る。"""
    data = json.loads(data_path.read_text(encoding="utf-8"))
    bands = {b["id"]: b for b in data["bands"]}
    esc = htmllib.escape
    items = []
    for i, q in enumerate(data["questions"], 1):
        opts = "".join(f"<li>{esc(o['text'])}</li>" for o in q["options"])
        key = "".join(f"<li>{esc(bands[o['band']]['label'])}：{esc(o['text'])}</li>" for o in q["options"])
        items.append(
            f'<li><p class="screener-question">Q{i}. {esc(q["text"])}</p><ul>{opts}</ul>'
            f'<details><summary>各選択肢の帯</summary><ul>{key}</ul></details></li>'
        )
    # JSON は </script> を閉じさせないよう < をエスケープする
    payload = json.dumps(data, ensure_ascii=False).replace("<", "\\u003c")
    return (
        '<section class="screener glow-card" data-screener="screener-data" aria-label="スクリーナー">'
        '<p class="screener-small">JavaScript が動かない環境では、問いと選択肢の一覧だけを表示しています。</p>'
        f'<ol class="screener-static">{"".join(items)}</ol></section>'
        f'<script type="application/json" id="screener-data">{payload}</script>'
    )


def claude_prompt(data_path: Path) -> str:
    """Claude（チャット）に貼るとスクリーナーを再現できるプロンプトを、正本 JSON から組み立てる。

    問い・選択肢・帯・バージョンは毎回 JSON から取る（選択肢を直したときにずれないように）。
    採点の決まりは src/reader-screener.js の score() と同じ。
    """
    data = json.loads(data_path.read_text(encoding="utf-8"))
    bands = data["bands"]
    by_id = {b["id"]: b for b in bands}
    points = "、".join(f'{b["label"]}={b["points"]}' for b in bands)
    lines = [
        f'あなたは「ものの見方の広さスクリーナー」（バージョン {data["version"]}）の進行役です。'
        "視座・メタ認知・インクルーシブ（包摂）——どの視点から観ているか、何が観えているか、"
        "どこまでを含めて観ているか——を、16問×5択で確かめます。"
        "いちばん奥の帯（6.0・6.5）では、非二元性（時間や境界に限られないものと日常とが二つに分かれていない見方）があるかも見ます。",
        "",
        "## 進め方",
        "- まず「診断ではなく、ふだんの見方に気づくための目安です。回答はこの会話の外には保存しません」と一言伝えてから始める。",
        "- 1問ずつ出す。各問の5つの選択肢は、問ごとに並びを入れ替えて A〜E で示す。どの選択肢がどの帯かは、全問に答え終えるまで言わない。",
        "- 回答者は A〜E のどれか、または「飛ばす」で答える。迷っていたら「一時的な体験ではなく、ふだんの自分にいちばん近いもの」を選ぶよう促すだけにし、特定の選択肢へ誘導しない。",
        "- 言葉の意味を聞かれたら、どの選択肢がどの帯か分からない範囲で答える。",
        "- 「前の問に戻りたい」と言われたら戻って答え直してもらう。",
        "",
        "## 採点（全問のあとで）",
        f"- 選んだ選択肢の帯を {points} として平均し、平均 ÷ 4 × 100 を四捨五入した値を「6.5 への近さ」（0〜100）とする。飛ばした問は数えない。",
        "- 帯ごとに選ばれた数を数える。",
        "- 回答が 8 問以上のとき、いちばん多い帯を「いまの位置（参考）」とする（同数なら並べて示す）。8 問未満なら位置は出さず、分布だけを示す。",
        "- 「移行期」などの判定はしない。帯の境目ははっきり分かれるものではないので、分布はグラデーションとして示し、どう読むかは回答者に委ねる。",
        "",
        "## 結果の伝え方",
        "- 6.5 への近さ、帯ごとの回答数（グラデーションが見えるよう、多い帯から少ない帯まですべて）、いまの位置（参考）を示す。",
        "- 各問で選んだ選択肢と、その帯を一覧で示す。求められたら、ほかの選択肢の帯も示す。",
        "- 必ず添える:「数字は優劣ではありません。どの帯も、次の見方へ移る途中の一つの場所です。」",
        "- 診断や正式な測定ではない（何度答えても同じ結果になることや、STAGES の正式な測定との一致は求めていない）。結果を断定したり、病気や能力の判定に使ったりしない。",
        "- そのあと回答者が望めば、結果について一緒に考える。",
        "",
        "## 帯（定義の要約。回答中は回答者に見せない）",
        "帯の名前と定義は Terri O'Fallon の STAGES モデルの公開論文（Integral Review 16(1), 2020）、段階の見分け方は Cook-Greuter の自我発達理論（2013）を要約して借りている。",
    ]
    for b in bands:
        lines.append(
            f'- {b["label"]} {b["name"]}（{b["phrase"]}）：視座＝{b["perspective"]}。'
            f'見えているもの＝{b["metacognition"]}。取り込むもの＝{b["inclusion"]}。'
        )
    lines += [
        "- 非二元性: 6.0 は、時間や境界に限られないものと日常の行為が別々になっていない（二つを並べるのではない）。"
        "6.5 は、体・感情・考えの層と、それに気づいている意識そのものが互いに入り込み合う。どちらも「区別が消えて一つになる」ことではない。",
        "",
        "## 問いと選択肢（[ ] 内は帯。回答者には見せない）",
    ]
    for i, q in enumerate(data["questions"], 1):
        lines.append(f'Q{i}. {q["text"]}')
        for o in q["options"]:
            lines.append(f'- [{by_id[o["band"]]["label"]}] {o["text"]}')
    lines += ["", "準備ができたら、最初の一言と Q1 から始めてください。"]
    return "\n".join(lines)


def build(SRC: Path, TPL: Path, OUT: Path, STYLE: str) -> None:
    md = SRC.read_text(encoding="utf-8")

    # front matter を剥がす
    m = re.match(r"^---\n.*?\n---\n", md, re.S)
    body_md = md[m.end():] if m else md

    # 最終更新日は正本の git 履歴から取る。ただし未コミットの編集があるときは今日の日付
    # （MD 編集と再ビルドを同一コミットに入れる通常運用では、コミット前のビルド時点で
    #  git log が 1 コミット前の日付を返し、表示が古いまま公開される）
    dirty = subprocess.run(
        ["git", "status", "--porcelain", "--", str(SRC)],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout.strip()
    if dirty:
        updated = date.today().isoformat()
    else:
        updated = subprocess.run(
            ["git", "log", "-1", "--format=%ad", "--date=format:%Y-%m-%d", "--", str(SRC)],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.strip() or "unknown"

    # GFM → HTML（インライン SVG は raw HTML としてそのまま通る）
    html = subprocess.run(
        ["pandoc", "-f", "gfm", "-t", "html", "--wrap=none"],
        input=body_md, capture_output=True, text=True, check=True,
    ).stdout

    # 先頭 H1 はテンプレートの hero と重複するため除去
    html = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", html, count=1)

    if OUT.name in SCREENER_DATA:
        if "<!--SCREENER-->" not in html:
            sys.exit(f"ERROR: <!--SCREENER--> marker not found in generated body ({SRC.name})")
        # glow 後処理（表の glow-card 化など）が静的リストに及ばないよう、最後に差し込む
        screener_html = screener_markup(SCREENER_DATA[OUT.name])
    else:
        screener_html = None

    if STYLE == "glow":
        # DESIGN-RULES §0a: グロークラス体系を生成 HTML に適用する
        # 見出しは .glow-heading（本文の glow は article 側の .glow-text が担う）
        html = re.sub(r"<h([23])( |>)", lambda m: f'<h{m.group(1)} class="glow-heading"' + (" " if m.group(2) == " " else ">"), html)
        # 図版（インライン SVG）と表は .glow-card の白ガラスパネルに載せる
        # SVG 直後の <figcaption> は同じ figure に含める（正本 MD 側で </svg> の次行に置く）
        html = re.sub(
            r"(<svg\b.*?</svg>)(\s*<figcaption>.*?</figcaption>)?",
            lambda m: '<figure class="glow-card reader-figure">' + m.group(1) + (m.group(2) or "") + "</figure>",
            html, flags=re.S,
        )
        html = re.sub(r"(<table\b.*?</table>)", r'<div class="glow-card reader-table">\1</div>', html, flags=re.S)
        # 引用・コールアウト（lede/📖/仮説ボックス）はガラスパネルに載せる（シェーダー上の可読性）
        html = html.replace("<blockquote>", '<blockquote class="glow-card reader-callout">')

        # 目次: 本文の h1（部）/ h2（章）から生成し、正本 MD の <!--TOC--> 位置に挿す
        toc_items = []
        for level, hid, text in re.findall(r'<h([12])[^>]*\bid="([^"]+)"[^>]*>(.*?)</h\1>', html, flags=re.S):
            label = re.sub(r"<[^>]+>", "", text).strip()
            cls = ' class="reader-toc-part"' if level == "1" else ""
            toc_items.append(f'<li{cls}><a href="#{hid}">{label}</a></li>')
        toc_html = (
            '<nav class="reader-toc glow-card" aria-label="目次">'
            '<p class="reader-toc-title">目次</p>'
            "<ol>" + "".join(toc_items) + "</ol></nav>"
        )
        if "<!--TOC-->" not in html:
            sys.exit(f"ERROR: <!--TOC--> marker not found in generated body ({SRC.name})")
        html = html.replace("<!--TOC-->", toc_html, 1)
    elif STYLE == "flow":
        # flow 型（DESIGN-RULES §13）: 一枚ガラスカラム上なので glow クラスは付けない。
        # 表は garage 型の横スクロール枠、引用はコールアウト、MD の畳みは .acc カードに
        html = re.sub(r"(<table\b.*?</table>)", r'<div class="tablewrap">\1</div>', html, flags=re.S)
        html = html.replace("<blockquote>", '<blockquote class="reader-callout">')
        # pjdhiro 本人の言葉（「pjdhiro の問い：」等で始まる段落）は gravity-love と同じ引用カードに載せる（#20）
        html = re.sub(
            # 段落の頭にページ内リンクの印（<a id="…"></a>）があっても、引用カードに載せる（#96・2026-11-10）
            r"(?<!<blockquote class=\"reader-callout\">\n)<p>((?:<a id=\"[^\"]*\"></a>)?<strong>pjdhiro の[^<：]{1,8}：</strong>.*?)</p>",
            r'<blockquote class="reader-callout reader-request">\n<p>\1</p>\n</blockquote>',
            html, flags=re.S,
        )
        html = html.replace("<details>", '<details class="acc">')
        # 章の出典を巻末の参照の一覧に集めてから、h2 章を garage 型の details.sec に畳む（目次は src/reader-flow.js が生成）
        html = collect_refs(html)
        html = fold_sections(html)
        if "<!--TOC-->" in html:
            sys.exit(f"ERROR: flow style page must not contain <!--TOC--> marker ({SRC.name})")
    else:
        sys.exit(f"ERROR: unknown style {STYLE!r} for {SRC.name}")

    if screener_html is not None:
        html = html.replace("<!--SCREENER-->", screener_html, 1)
    if "<!--CLAUDE-PROMPT-->" in html:
        if OUT.name not in SCREENER_DATA:
            sys.exit(f"ERROR: <!--CLAUDE-PROMPT--> needs a data source ({OUT.name})")
        prompt = htmllib.escape(claude_prompt(SCREENER_DATA[OUT.name]))
        html = html.replace(
            "<!--CLAUDE-PROMPT-->",
            '<div class="prompt-box"><button type="button" class="screener-btn" data-copy="claude-prompt">プロンプトをコピー</button>'
            f'<pre id="claude-prompt" class="prompt-text">{prompt}</pre></div>',
            1,
        )

    page = TPL.read_text(encoding="utf-8")
    page = page.replace("<!--BODY-->", html).replace("<!--UPDATED-->", UPDATED_MARK)
    # 状態は日付とバージョンで示す（pjdhiro 2026-10-24）。バージョンはスクリーナーの正本 JSON から取る
    if "<!--VERSION-->" in page:
        if OUT.name not in SCREENER_DATA:
            sys.exit(f"ERROR: <!--VERSION--> needs a data source ({OUT.name})")
        version = json.loads(SCREENER_DATA[OUT.name].read_text(encoding="utf-8"))["version"]
        page = page.replace("<!--VERSION-->", version)

    # 中身が今の HTML と同じなら、今の HTML の日付を保ち、書き換えない。
    # git の最終コミット日は、移動やリンクの一括置換でも進むので、それだけでは日付を変えない
    # （repo の引っ越しで全ページが 2026-11-07 になりかけた。pjdhiro 2026-11-08）
    kept = kept_date(OUT, page)
    if kept:
        print(f"SAME: {OUT.relative_to(ROOT)} (updated {kept} のまま)")
        return
    page = page.replace(UPDATED_MARK, updated)

    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(page, encoding="utf-8")

    # UTF-8 置換文字（U+FFFD）検査
    if "�" in page:
        sys.exit(f"ERROR: U+FFFD found in output ({OUT.name})")
    print(f"OK: {OUT.relative_to(ROOT)} ({len(page):,} bytes, updated {updated})")

    update_sitemap_lastmod(OUT, updated)


UPDATED_MARK = "\x00UPDATED\x00"


def kept_date(out: Path, page: str) -> "str | None":
    """日付の所を除いて out と page が同じなら、out の日付を返す。違えば None。"""
    if not out.exists():
        return None
    parts = page.split(UPDATED_MARK)
    pattern = (
        re.escape(parts[0])
        + r"(?P<d>\d{4}-\d{2}-\d{2}|unknown)"
        + r"(?P=d)".join(re.escape(p) for p in parts[1:])
    )
    m = re.fullmatch(pattern, out.read_text(encoding="utf-8"), re.S)
    return m.group("d") if m else None


def update_sitemap_lastmod(out: Path, updated: str) -> None:
    """sitemap.xml の該当 <url> の <lastmod> をビルド日付に追随させる（pd#122）。"""
    if updated == "unknown":
        return
    sm = ROOT / "sitemap.xml"
    xml = sm.read_text(encoding="utf-8")
    loc = f"https://uminomae.github.io/project-design-theory/reader/{out.name}"
    pattern = re.compile(
        r"(<loc>" + re.escape(loc) + r"</loc>\s*<lastmod>)[^<]+(</lastmod>)"
    )
    new_xml, n = pattern.subn(lambda m: m.group(1) + updated + m.group(2), xml)
    if n and new_xml != xml:
        sm.write_text(new_xml, encoding="utf-8")
        print(f"OK: sitemap.xml lastmod -> {updated} ({out.name})")


def main() -> None:
    for src, tpl, out, style in PAGES:
        build(src, tpl, out, style)


if __name__ == "__main__":
    main()
