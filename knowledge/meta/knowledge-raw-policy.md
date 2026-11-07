# knowledge/raw/ 運用ポリシー（pd）

> **正本**: techo/knowledge/pd/mgmt/knowledge-raw-policy.md
> **本ファイルの位置づけ**: pd 固有の補足ルール + 正本への参照

## 参照階層

```
techo（正本）
  └── pd（本ファイル：正本を参照 + pd 独自ルール）
        └── cs（pd を参照 + cs 独自ルール）
```

上位のルールを継承し、矛盾がある場合は上位が優先する。
ただし、repo 固有の事情による補足・具体化は各 repo で定義できる。

## 正本の要約（techo から継承）

以下は techo 正本の要点。詳細は正本を参照すること。

- **目的**: `knowledge/raw/` に一次データ（論文 PDF 等）を集約し、原典への追跡性を確保する
- **命名規則**: `{領域ID}_{著者姓}_{年}_{キーワード}.pdf`
- **メタデータ**: raw/README.md に格納一覧を記載
- **Git 管理**: 試行段階は通常管理、50MB 超または単体 10MB 超で LFS 移行
- **著作権**: OA・プレプリント優先、private repo のみに格納

## pd 独自ルール

### 格納対象

pd の raw/ には以下を格納する:

- 欠損駆動思考の理論基盤となる原典（心理学・哲学・認知科学等）
- メタ研究・方法論に関する原典（調査設計、研究方法論）
- 横断的・領域非依存の原典（DXX を使用）

### 領域別原典の扱い

- 特定領域（D01〜D30）に属する原典は **cs の raw/** に格納することを優先する
- pd に置くのは、領域横断的または理論の根幹に関わるもののみ

### ディレクトリ構成

```
knowledge/
├── raw/                    # ← 新設
│   └── README.md
├── concepts/               # 既存
├── evidence/               # 既存
├── meta/                   # 既存（本ファイルもここ）
├── research/               # 既存
└── schema/                 # 既存
```

## 関連

- 正本: `techo/knowledge/pd/mgmt/knowledge-raw-policy.md`
- 下位: `creation-space/docs/knowledge-raw-policy.md`
- techo#97, cs#205
