# ADR-0001: design-system tokens の import 方式

**status**: **Superseded** (2026-05-03, Claude Design 方針転換)
**date**: 2026-04-28 (proposed) / 2026-04-29 (accepted) / 2026-05-03 (superseded)
**deciders**: pjdhiro
**parent issue**: [pd#86](https://github.com/uminomae/project-design-archive/issues/86)
**related**: [pd#85](https://github.com/uminomae/project-design-archive/issues/85) major #2 / [techo#127](https://github.com/uminomae/techo/issues/127) 横断サマリ「構造的課題 3」

> **Superseded note (2026-05-03)**: Claude Design は GitHub repo を直接読み込む方式のため、cross-repo CDN 配信ではなく **各 repo 自己完結 css** が前提。本 ADR の決定（CDN jsDelivr）は撤回し、3 repo は `--ds-*` token を inline 取り込み済み。pd 自身の `design-system/` ディレクトリは pd 専用 visual language として残置。

---

## Context (背景)

3 repo (kesson-space / awareness-space / creation-space) の `src/styles/tokens.css` 冒頭に以下の相対 import がある:

```css
@import url('../../../project-design/design-system/tokens.css');
```

### 動作差異

| 環境 | 配置 | 解決 |
|-----|------|------|
| dev (ローカル) | `~/dev/{repo}` 兄弟配置 | ✅ 解決可 |
| 本番 (GitHub Pages) | `https://uminomae.github.io/{repo}/` 独立 URL | ❌ 階層が合わず未解決 |

### 影響

- 本番で `--ds-*` の値が解決されない
- 各 token の fallback 値が代替するため**表示崩壊は起きない**
- ただし alias 化の意義 (単一ソース管理) が **本番では無効化**
- 結果: pd `--ds-*` を更新しても本番に反映されない

---

## Options (選択肢)

### Option A: CDN (jsDelivr)

```css
@import url('https://cdn.jsdelivr.net/gh/uminomae/project-design@main/design-system/tokens.css');
```

**長所**:
- 本番でも解決
- jsDelivr のグローバル CDN キャッシュで高速
- dev / 本番 両方で同じパスが使える
- pd 側の build step 追加なし
- バージョン固定可 (`@v1.0.0` タグや commit SHA)

**短所**:
- pd の release tag (or `@main`) 運用が前提
- CDN の speed / availability に依存
- `@main` 参照だと pd の develop merge が即座に本番反映される (意図しない反映リスク)
- 解決策: `@v1.0.0` 等のタグ参照で pin

### Option B: Git submodule

```
{repo}/vendor/design-system/  ← submodule for project-design/design-system
```

**長所**:
- 明示的なバージョン管理
- repo に sub commit が記録される

**短所**:
- `git submodule add/update/init` 操作が複雑
- 初学者に優しくない (clone 直後に手順必要)
- CI / GitHub Pages のビルドで submodule init 必要
- 静的 site の運用に対して overhead が大きい

### Option C: Build-time inline (CSS preprocessing)

build step で `@import` を解決し、`tokens.css` を結合してデプロイ。

**長所**:
- 最もシンプルで依存ゼロ (deploy 後に外部依存なし)
- 高速 (CSS が単一ファイル)

**短所**:
- 現状 3 repo は **静的 html only**, build step 不在
- build script 追加 (postcss / esbuild / 自前 sed) が運用変更
- pd 更新時の伝播タイミングを管理する必要 (各 repo で再 build)

### Option D: 絶対パス (GitHub Pages 固定)

```css
@import url('/project-design-theory/design-system/tokens.css');
```

**長所**:
- 単純な path 変更

**短所**:
- dev (ローカル file://) で動かない
- `https://uminomae.github.io/project-design-theory/` 配置を hardcode (組織変更時に破綻)
- 各 repo の dev/本番で path 切替が必要 (環境分岐)

### Option E: 現状維持 (相対パス)

**長所**:
- 変更ゼロ

**短所**:
- 本番で alias 無効化 (= pd 集約の意義消失)
- fallback 値の運用に依存し続ける (pd 単一ソース管理が形骸化)

---

## Pre-condition (採択前の必須対応)

ADR draft 時の確認で判明: pd `main` には **`design-system/tokens.css` が存在しない** (develop のみ、e383d75)。jsDelivr `@main` 参照は 404、`@develop` 参照は 200。

→ Option A 採択前に **pd `design-system/` を `develop` から `main` へ merge** する必要がある (memory: 「pd はdevelopで作業、mainは公開用」)。

| 暫定オプション | 内容 |
|--------------|------|
| **A-pre** | pd `design-system/` を main へ merge (推奨、本来の運用) |
| **A-tmp** | jsDelivr `@develop` を暫定参照 (運用上は推奨しない) |

## Decision (推奨)

### **Option A (CDN jsDelivr) + Pre-condition (pd main merge) を推奨**

#### 推奨方式

```css
@import url('https://cdn.jsdelivr.net/gh/uminomae/project-design@main/design-system/tokens.css');
```

(pd main merge 後、初期は `@main`、安定後に `@v1.0.0` 等のタグへ pin 化)

#### 推奨根拠

1. **dev/本番の path 統一** (Option D の env 分岐を回避)
2. **build step 追加なし** (現状の静的 html 運用を維持、Option C 回避)
3. **submodule の運用 overhead なし** (Option B 回避)
4. **本番で `--ds-*` が解決** (Option E の問題解消)
5. jsDelivr は GitHub repo を直接 CDN 配信できるため、pd の release ワークフローを変えずに導入可

#### 移行段階

0. **Step 0 (Pre-condition)**: pd `design-system/` を develop → main へ merge
   - 現状確認済: `develop` に e383d75 で存在、`main` 不在
   - merge 後に `https://cdn.jsdelivr.net/gh/uminomae/project-design@main/design-system/tokens.css` で 200 OK
1. **Step 1**: jsDelivr で main 配信が確認できる
2. **Step 2**: 3 repo の `tokens.css` を jsDelivr URL に切替 (1 行変更 × 3 repo)
   - 同時に fallback 値は維持 (CDN 障害時のフェイルセーフ)
3. **Step 3**: 本番 deploy で `--ds-*` 解決を確認 (browser DevTools で computed style)
4. **Step 4 (将来)**: pd に release tag を切る運用に移行 (`v1.0.0` 等)、`@main` → `@v1.0.0` に pin
5. **Step 5 (将来)**: techo#128 Phase 2 (Layer A 中継削除) を実施

---

## Consequences (採択後の影響)

### 正

- pd `--ds-*` 更新が本番に伝播 (pd 単一ソース管理が機能)
- techo#128 Phase 2 (Layer A 中継削除) が安全に実施可能
- 各 repo の token alias を最小化できる (将来的に `--{repo}-*` のみ)

### 負

- jsDelivr の速度 / 可用性に依存
  - 緩和策: fallback 値を維持
- `@main` 参照だと pd の更新が即座に本番反映される
  - 緩和策: `@v1.0.0` 等のタグ参照で pin
- 開発時に CDN にアクセスできない環境 (オフライン) で動作しない
  - 緩和策: 各 repo の `tokens.css` の fallback 値で動作継続

### 中立

- pd の release ワークフロー (tag 運用) を整備する必要 (Step 4)
  - ただし `@main` 参照のままでも機能はする

---

## Resolved Questions (2026-04-29 pjdhiro 判断)

1. **pd `design-system/` を develop → main に merge するタイミング** (Pre-condition)
   - **解消済**: 2026-04-28 merge commit 39d3996 で main 反映、jsDelivr `@main` 参照可能化
2. **`@main` か `@v1.0.0` か**
   - **`@main` で開始**。tag 運用 (`@v1.0.0` pin) は Step 4 で後回し
3. **fallback 値の扱い**
   - **各 repo `tokens.css` で fallback 値を維持**。CDN 障害時のフェイルセーフとして残す
4. **Option B (submodule) を完全排除するか**
   - **完全排除**。静的 site 運用で submodule overhead は割に合わない

---

## References

- pd#85 / pd#86 / techo#127 / techo#128
- jsDelivr GitHub CDN: https://www.jsdelivr.com/?docs=gh
- ADR フォーマット: https://adr.github.io/madr/

---

## Status Log

- 2026-04-28: draft 作成 (techo 側で起草)
- 2026-04-28: pd `develop` 移送 (commit 0b369e9)
- 2026-04-28: Pre-condition 解消 (develop → main merge commit 39d3996)
- 2026-04-29: **Accepted** — Option A (CDN jsDelivr `@main`) 採択。Phase 2-B (3 repo 参照差替え) 着手
