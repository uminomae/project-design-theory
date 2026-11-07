# project-design / design-system

**purpose**: pd 自身の visual language（light theme + warm + glow）の token / component。

> **2026-05-03 撤回**: cs / ks / as への CDN 配信構造（pd#86 ADR）は **Superseded**。Claude Design が GitHub repo を直接読み込むため、各 repo は self-contained に戻った（`--ds-*` token を各 repo の `src/styles/tokens.css` に inline 済）。
> 本ディレクトリは **pd 自身用** として残置する。components/ 配下の clear-storage / startup-error も pd 自身が使うときのリファレンスとして残す。

## 構成

| ファイル | 用途 |
|---------|------|
| `tokens.css` | pd 自身の design token（参考: cs/ks/as は同じ値を inline 保持） |
| `components/` | pd 自身の component reference |
| `components.md` | component カタログ（pd 自身用） |

## 参照方式の現状と既知の落とし穴

### 現状（暫定）

3 repo の `src/styles/tokens.css` 冒頭で相対 import:

```css
@import url('../../../project-design/design-system/tokens.css');
```

各 token は `var(--ds-*, <既存値>)` で fallback 付き alias 化されており、`@import` が解決できない場合も従来動作する。

### 既知の落とし穴（本番 deploy）

GitHub Pages のように各 repo が**別 URL prefix で配置される**環境では、上記相対パスは解決できない:

- dev ローカル（兄弟配置 `~/dev/project-design/` と `~/dev/{repo}/`）: 解決可
- 本番（`https://uminomae.github.io/{repo}/...`）: 解決**不可** → fallback で従来動作するが、`--ds-*` 単一ソースの意味が無効化

### 採用方式の決定

ADR は [pd#86](https://github.com/uminomae/project-design/issues/86) で進行中。CDN / submodule / build-time inline / 絶対パス / 現状維持 を比較検討中。

決着後、本セクションを採用方式に書き換える。

## 含まれるもの

- `tokens.css`: `--ds-*` 44 token
- `components.md`: SYSTEMIZE 候補 component の placeholder（今後の拡充対象）

## 含まれないもの（意図的に除外）

- action 系 token（kesson/as と cs で値が異なる。intentional difference）
- topbar サイズ系（as は tighter）
- markdown token 群（cs 未使用）
- surface 階調（cs のみ 3 段階、kesson/as は単一）
- Three.js / Bootstrap 等の外部依存バージョン統一

## 参照

- 親 issue: [techo#126](https://github.com/uminomae/techo/issues/126)
- 本 repo issue: [#84](https://github.com/uminomae/project-design/issues/84)
- 観点A 棚卸し結果: `docs/reviews/UI-assets-20260420.md`（pd）/ 他 3 repo の同名ファイル
