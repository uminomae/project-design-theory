# 移行記録: D1-D4 定義番号表記 → 用語名 置換（2026-07-08）

> **⏳ この記録は revert 用の保険。有効期限 2027-07-08（1年）。**
> 期限までに問題が出なければ、この記録と CLAUDE.md の注記は破棄してよい。
> 逆に、置換が原因で不整合・意味の取り違えが出た場合は、下記「戻し方」で復元する。

---

## なぜ記録するか

CLAUDE.md 絶対原則「D1-D4 表記禁止（暫定ルール）」に従い、欠損駆動思考のコア概念を
定義番号（D1-D4）で参照していた箇所を**用語名**に置換した。
ただし **D1-D4 表記禁止ルール自体が暫定**（「概念体系が安定したら破棄する」）であり、
将来ルールが撤回されて番号表記に戻す可能性がある。そのため復元に必要な情報を残す。

## マッピング（典拠: `knowledge/research/kesson-bridge.md`）

| 旧番号 | 用語名 |
|---|---|
| D1 | 欠損駆動思考 |
| D2 | 欠損 |
| D3 | 抱持 |
| D3-a | 抱持の成立条件 |
| D4 | 情動の構成 |

補足: `D1（欠損駆動思考）` のように「番号（用語名）」で併記されていた箇所は、
用語名が二重になるため**括弧を落として用語名のみ**にした（例: `D1（欠損駆動思考）` → `欠損駆動思考`）。
`抱持課題（D3）` のように用語名が既に本文にある参照タグは、冗長になるため**タグを削除**した。

## 変更したコミットとファイル

### commit `52aedc0`（Litt 枠組み取り込みに同梱）
- `knowledge/concepts/CN-008_pd-bridge-holding-issues.md`（全文。関連定義・保持論点・成長履歴）
- `knowledge/concepts/index.md`（CN-008 行の関連定義カラム）

### commit `489165c`（D1-D4 掃討・独立コミット）
| ファイル | 変更行数 |
|---|---|
| `knowledge/research/kesson-bridge.md` | 49 |
| `knowledge/meta/project-history.md` | 8 |
| `knowledge/meta/project-overview.md` | 1 |
| `knowledge/concepts/CN-005_trust-hypothesis-inventory.md` | 3 |
| `knowledge/concepts/CN-007_iss42-measurement-design-principles.md` | 1 |

## 触っていないファイル（重要 — 復元時も触るな）

以下の "D番号" は**欠損駆動思考の概念ではない別コード体系**。掃討対象外・不変。

| ファイル | "D" の意味 |
|---|---|
| `knowledge/research/origin-survey/origin-survey-claude-v3.md` | D10, D11… = 調査**30領域**の番号 |
| `knowledge/meta/canonical-keywords.md` | 「定義番号（D1-D4）は使用しない」というルール文そのもの |
| `knowledge/research/trust/trust-lived-experience-taxonomy-pilot-codex-20260327.md` | `D0-D2` / `H2 D2 R1` = 質的コーディングのタグ |
| `knowledge/research/two-axis-closure/RR-010, RR-013, RR-016, RR-017, RR-019, RR-024` | **D＝二者（dyad）** の項目コード（Q＝四元数・O＝八元数と対）。READER 凡例参照 |
| `knowledge/research/two-axis-closure/TEST-reader-llm-comprehension.md` | D2, D3, D4 = 読解テストの**設問 ID**（「D. 流れ」節） |

## 戻し方（復元手順）

**⚠️ 自動の逆置換（用語名→D番号の find-replace）は禁止。**
用語名（欠損・抱持・情動の構成 等）は掃討前から**普通の語**として本文に多数出現しており、
機械的に逆変換すると無関係な箇所まで D 番号化して破壊する。

正しい復元は git の差分反転で行う:

```bash
# 掃討2コミットを反転（新しい方から）
git revert --no-commit 489165c
git revert --no-commit 52aedc0   # ただし 52aedc0 は Litt 枠組みも含む。
                                 # D1-D4 分だけ戻す場合は下記の部分 revert を使う
```

`52aedc0` は Litt 枠組み（CN-011・skill 等）と D1-D4 修正が同居しているため、
**D1-D4 分だけ戻す**なら該当2ファイルのみを対象にする:

```bash
# CN-008 と index.md の D1-D4 修正だけを、その commit 直前の版に戻す
git checkout 52aedc0^ -- knowledge/concepts/CN-008_pd-bridge-holding-issues.md
git checkout 52aedc0^ -- knowledge/concepts/index.md   # ※index.md は CN-011 行の追加も巻き戻るので手当てが要る
```

いずれの場合も、復元後に `grep -rnE '(^|[^0-9A-Za-z])D[1-4]([^0-9A-Za-z]|$)'` で
番号表記が戻ったこと、および除外ファイルが無変更であることを確認する。

## 関連

- ルール典拠: CLAUDE.md §絶対原則「D1-D4 表記禁止（暫定ルール）」
- マッピング典拠: `knowledge/research/kesson-bridge.md`, `knowledge/meta/project-history.md` §2
- 発端: pd#127 作業中に concepts/index.md CN-008 行の違反を検出（2026-07-08）
