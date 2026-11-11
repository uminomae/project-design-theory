# knowledge/research/

調査レポートのハブ。テーマ別にサブディレクトリを切って管理する。

## 配置判断の経緯

当初 `techo/inquiry/` や `knowledge/pd/` 等が候補に挙がったが、project-design リポの `knowledge/research/` に集約する方針で確定（2026-03-31）。理由:

- 調査資産の一元管理（リポ横断の参照を避ける）
- テーマ別サブディレクトリで拡張性を確保

## サブディレクトリ

| ディレクトリ | 内容 |
|---|---|
| `trust/` | trust 系の調査・深掘り・インデックス（17ファイル） |
| `design-thinking/` | design thinking 系の調査・深掘り・インデックス |
| `value/` | value 系の調査 |
| `origin-survey/` | 起源・語源調査 |
| `meta/` | テーマ横断メモ・評価メモ |
| `ninja/` | 個別テーマ外の作業メモ・補助資料 |
| `stages-screener/` | 自我発達ステージ簡易スクリーナー（STAGES の定義を借りた 16問×5択・pd#131）。README が正本 |
| `psychological-safety/` | 「心理的安全性とは」（pd#151）。調べの一巡目＝`SURVEY-00-first-pass.md`（原典照合の状態と主張の段の印つき） |
| `anxiety/` | 「不安とは」（#135）。正本 `READER-anxiety.md`、新田信也の不安の定義の照合の記録は `README.md` |
| `subtraction-kinds/` | 「いろんな引き算」（欠損駆動思考の章「「私は引き算をしていた。数直線の外で。」」の前提知識）。正本 `READER-subtraction-kinds.md` |
| `developmental-stages/` | 「精神の発達段階とは」の調査ノート（pd#152）。段階ごとの不安・防衛・組織。pd#151 の足場 |
| `intrinsic-motivation/` | 内発的動機が前提にしている人の像（pd#154）。調べの一巡目＝`SURVEY-00-first-pass.md`（Ryan & Deci 2000・Cook-Greuter 2013 の自己保護の段は本文照合） |
