import { QuartzTransformerPlugin } from "../types"

// 読者の頁から、作業の印を落とす（この repo で足した部品。2026-11-10・Issue #111）。
//
// wiki の md は、正本から作り直すための記録（どのモデルが・どの Issue で・どの台帳の行から作ったか）を
// 本文の末尾の節（「出典メモ」「ソース参照」「書誌情報」）に持っている。記録は md に残し、
// 組んだ頁（Pages・3001）には出さない。頁を一枚ずつ直さず、ここで一度に落とす。
//
// 落とすもの：
//   1. git に入れていない原典の PDF（cs/knowledge/raw/*.pdf）への GitHub のリンク。読者には開けない。
//      リンクを外し、「手元の PDF（公開していません）」の文字にする。書誌と DOI は同じ頁の「書誌情報」にある。
//   2. 生成の記録の行（「- 生成: 2026-06-14, Claude Opus 4.8（…）」）。
//   3. モデルの名前（Claude Opus 4.8・claude-opus-4-6 など）。
//   4. Issue の番号（pd#81・cs#249・techo#44 など）と、それに続く作業の段の名前（Phase C-2a・Step 3b）。
//      括弧の頭が番号なら、括弧ごと落とす。
//   5. 台帳の取得の状態の行（「- access_status: raw-confirmed」）。
//
// 落とさないもの：頁が自分で書いている断り（「本文は読んでいない」など）と、精読ノート・台帳へのリンク。

const RAW_PDF_LINK =
  /\[[^\]]*\]\(https:\/\/github\.com\/uminomae\/project-design-theory\/(?:blob|raw|tree)\/[^)\s]*\/knowledge\/raw\/[^)\s]*\.pdf\)/g
const GENERATED_LINE = /^[ \t]*- 生成: .*\n?/gm
const ACCESS_STATUS_LINE = /^[ \t]*- \*{0,2}access_status\*{0,2}: .*\n?/gm
const MODEL_NAME =
  /[、,]?\s*(?:Claude (?:Opus|Sonnet|Haiku|Fable)(?: ?[0-9][0-9.]*)?|claude-(?:opus|sonnet|haiku|fable)-[0-9][0-9-]*)[,、]?/g
const ISSUE = "(?<![A-Za-z-])(?:pd|cs|ks|as|techo)#[0-9]+"
const STAGE = "(?:\\s*Phase\\s*[A-Z](?:-[0-9]+[a-z]?)?)?(?:\\s*Step\\s*[0-9]+[a-z]?)?"
const ISSUE_PAREN = new RegExp(`[（(]${ISSUE}[^（）()\\n]*[）)]`, "g")
const ISSUE_BARE = new RegExp(`${ISSUE}${STAGE}[ \\t]*(?:として[ \\t]*)?`, "g")

export function stripWorkMarks(src: string): string {
  return src
    .replace(RAW_PDF_LINK, "手元の PDF（公開していません）")
    .replace(GENERATED_LINE, "")
    .replace(ACCESS_STATUS_LINE, "")
    .replace(MODEL_NAME, "")
    .replace(ISSUE_PAREN, "")
    .replace(ISSUE_BARE, "")
}

export const ReaderView: QuartzTransformerPlugin = () => ({
  name: "ReaderView",
  textTransform(_ctx, src) {
    return stripWorkMarks(src)
  },
})
