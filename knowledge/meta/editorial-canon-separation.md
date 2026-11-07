# 編集正本の分離 — pjdhiro は手書き、pd/cs は AI協働

**起源**: pjdhiro との対話（2026-06-01、PD推敲セッション。pd#94〜#110）
**性質**: 運用上の参照情報（どの repo を AI が編集してよいか）
**状態**: 確定（pjdhiro 指示）

---

## 原則

同じ内容（PD総論・創造モデル等）が複数 repo に存在するが、**AI が編集してよい正本と、手書きで保つ正本を分ける**。

| 内容 | AI が編集する正本 | 手書き正本（AI 編集不可） | compile 生成物 |
|------|------------------|--------------------------|---------------|
| プロジェクトデザイン総論（射程・領域・Doing/Being・PMBOK・Love駆動） | **pd** `src/content/site-data.mjs`（AI協働サイト, 日英 i18n） | **pjdhiro** `_pages/pd/project-design.md` | pd `wiki/プロジェクトデザイン.md` |
| 創造の5段階モデル | **cs** `knowledge/five-stages-guide.md` / `schema/five-stages.md` / `glossary.md` | **pjdhiro** `_pages/pd/dialogue/dialogue-creation.md` | pd `wiki/concepts/創造の5段階モデル.md` |

---

## 運用ルール

1. **AI は pjdhiro を編集しない**。pjdhiro は手書きが主体の公開サイト。
2. 推敲・改善は **pd / cs の正本**で行う。
3. pjdhiro への公開反映が必要なら、pd/cs の成果を **pjdhiro 側で人間が手写し**する。
4. wiki/ は knowledge/ から compile される **生成物**。直接編集せず、正本（knowledge/ や cs）を直す。

---

## 背景（2026-06-01 セッションの教訓）

PD推敲で当初 AI が pjdhiro `_pages/pd/project-design.md` を直接編集・push してしまった（A-1/A-4/A-7/A-8）。pjdhiro は手書き正本で対象外と判明し、4コミットを全 revert（pjdhiro main 2a199c1）。正しい編集先は pd `src/content/site-data.mjs`（PMBOK は元から「前提知」と謙虚に扱われていた）。

ファイル名「project-design.md」が repo 名と紛らわしく、編集先の取り違えを招いた。**「どの repo の何というファイルか」を必ず確認する**。

---

## 関連
- pd CLAUDE.md「コンテンツ源（pjdhiro 正本）」表
- wiki front matter の `source:`（traceability で正本を辿れる）
- pd#94〜#110（PD推敲セッション）
