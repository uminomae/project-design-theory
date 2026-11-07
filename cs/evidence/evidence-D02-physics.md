---
file_id: EV-D02
domain: physics
domain_id: D02
last_updated: 2026-07-11
entry_count: 0
origin: "Archived pre-rerun snapshot for cs#207"
status: "再監査待ち（原典アクセス状態の棚卸し前）"
source_archive: "evidence/archive/pre-rerun-20260407/evidence/evidence-D02-physics.md"
original_access_status: not-yet-reviewed
---

# 論拠DB：物理学（D02）（再監査待ち）

このファイルは `cs#207` 対応として、2026-04-07 時点の分析本文を archive に退避したうえで、再監査用の stub に差し替えたものです。

## 現在の扱い

- 原典アクセス状態: evidence 本文としては `not-yet-reviewed`
- source manifest には D02 first batch 10件を反映済み
- source 内訳は `raw-confirmed` 4 / `blocked-access` 5 / `citation-only` 1
- [P] 主張の verified / accepted 判定は現時点では再保証しない
- `knowledge/raw/` の整備と原典アクセス棚卸しが完了するまで、本文の再構成を優先する

## 2026-04-07 first batch

- raw-confirmed: 4件
- blocked-access: 5件。source ごとの理由は `knowledge/raw/manifest.md` の notes を参照
- citation-only: 1件。archive refs / ref-check 起点の first-pass source rows
- manual/browser 余地:
  blocked-access source は CLI challenge / login redirect / HTML landing の可能性を残すため、notes を維持する
## History

- スナップショット: [`evidence/archive/pre-rerun-20260407/evidence/evidence-D02-physics.md`](archive/pre-rerun-20260407/evidence/evidence-D02-physics.md)
- 退避日: 2026-04-07
- 理由: 原典未入手・本文未確認・LLM 補完混入の可能性を切り分けずに維持しないため

## 関連テーマ調査（部品として参照する）

- **TH-001 wave-vortex-ontology**（cs#258、2026-07 実施）: D02 の調査計画から枝分かれした
  深掘りの寄り道調査（pjdhiro の興味起点。D02 計画の 1 項目ではない）。
  正本: `evidence/themes/TH-001-wave-vortex-ontology/`（output.md / READER-wave-vortex.md）
- D02 再監査・本文再構成の際に**部品として参照できる一次確認済み材料**:
  - アナログ重力実験（Unruh 1981 系譜、Steinhauer 2019 / Kolobov 2021 は arXiv 全文確認、
    Švančara 2024 巨大量子渦。BLV レビューによる「アナロジー≠同一性」の線引き）
  - 超流体真空理論（Volovik 2003 教科書・2008 フェルミ点シナリオ、Zloshchastiev、
    Berezhiani & Khoury 超流体ダークマター。ローレンツ不変性の関門と浸透問題 = Liberati 2013 全文確認）
  - 場の量子論の実在論（Hobson 2013、反論 Stenger 2013）
  - ケルビン渦原子（Kelvin 1867 原著確認）→ 結び目理論の誕生史
- 五段階モデルへの反映は TH-001 側でなくモデル/調査側が判断する（Bohm 川の渦の Stage 4 採用は
  `knowledge/schema/five-stages.md` に記録済み。cs#261 X2、pjdhiro 承認）

## 次の作業

- D02 の残り source を manifest へ追加し、first batch を全 source 行へ拡張する
- raw 取得不能理由を source ごとに追記し、手動ブラウザ余地の有無も切り分ける
- 再調査後に、このファイルへ history 参照つきで新しい本文を戻す
- 再構成時に TH-001 の一次確認済み材料（上記）を候補 source として評価し、
  採用分は manifest / source-note の正規フローに載せる
