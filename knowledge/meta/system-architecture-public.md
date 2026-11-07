# 技術システム構成

**配置先**: `base/text/meta/system-architecture-public.md`
**性質**: 外部出力用の素材（transform層で読者別に変換される）
**初版**: 2026-02-13
**生成指示書**: `transform/generate-spec-meta.md`
**関連**: `project-overview.md`（プロジェクト群の全体像）が「何を・誰に」を、本ファイルが「どうやって」を担当する

---

## 1. 物理環境

iMac 1台とインターネット接続。それだけ。

- iMac 24インチ（2024, Apple M4）
- macOS
- Chrome ブラウザ
- ターミナル

専用サーバー、クラウドインスタンス、GPUマシンは使っていない。

---

## 2. AI協働スタック

理論構築からコード生成まで、5つのAIサービスを組み合わせている。すべて市販のサービスで、特別なインフラはない。

| サービス | 提供元 | 役割 |
|---------|--------|------|
| Claude.ai | Anthropic | 理論の対話的構築、文書生成、品質管理 |
| Claude Code | Anthropic | ターミナルからのgit操作、ビルドスクリプト実行 |
| Claude in Chrome | Anthropic | ライブサイトのビジュアル確認、スクリーンショット記録 |
| ChatGPT | OpenAI | 並列の視点提供、下書きの独立生成 |
| Gemini | Google | Three.jsコード生成、GLSLシェーダーレビュー |

人間がすべてのサービスを操作する。AIが自律的に動くことはない。

### なぜ複数のAIを使うのか

単一のAIで理論を構築すると、そのモデル固有のバイアスが理論に混入する。複数のAIに同じ問いを投げ、独立した回答を比較することで、AIの多数派意見に理論が引きずられることを防いでいる。

---

## 3. 情報のハブ: GitHub

すべての情報はGitHubリポジトリに集約される。

```
人間 → AIサービス群 → GitHub → 読者のブラウザ
```

GitHub が唯一の正本（Single Source of Truth）。AIが生成した文書も、人間がレビューしてからGitHubにコミットする。AIが直接リポジトリに書き込むことはない。

---

## 4. 読者のブラウザに届くもの

GitHubからGitHub Pagesを通じて、2つのサイトが自動でデプロイされる。

### 3D体験空間 — kesson-space

理論を3D空間として追体験するサイト。

- URL: https://uminomae.github.io/kesson-space/
- 技術: Three.js, GLSL Shaders
- 内容: 闇の中に光が滲み出す——意識の内側で起きていることを視覚で感じ取る空間
- デプロイ: GitHubにpush → GitHub Pagesが自動生成

コードはClaude.aiとGeminiで対話的に生成し、Claude in Chromeで視覚確認を行う。最終判断は人間の目視。

### ブログ + PDF — pjdhiro

理論を言語で伝えるサイト。

- URL: https://uminomae.github.io/pjdhiro/
- 技術: Jekyll（Minimal Mistakesテーマ）
- 内容: ブログ記事 + PDF文書（一般版・設計者版・学術版）
- デプロイ: GitHubにpush → GitHub Pagesが自動生成

PDF文書はClaude.aiで下書きを生成し、pandoc + lualatex または WeasyPrint でビルドする。

---

## 5. ビルドパイプライン

PDFとブログ記事はビルドスクリプトで自動生成される。

| 出力物 | ビルドツール | 実行環境 |
|--------|------------|--------|
| PDF（一般版・設計者版） | pandoc + lualatex | iMacローカル（Claude Code経由） |
| PDF（学術版） | WeasyPrint | iMacローカル（Claude Code経由） |
| ブログ記事（HTML） | Jekyll | GitHub Pages（自動） |
| 3D空間（WebGL） | なし（直書き） | GitHub Pages（自動） |

CIサービスは使っていない。ビルドはすべてiMac上で実行し、成果物をGitHubにpushする。

---

## 6. まとめ: 全体のフロー

```
pjdhiro（人間）
  │
  ├─ 対話 ──→ Claude.ai ─────→ 理論・文書
  ├─ 操作 ──→ Claude Code ───→ git・ビルド
  ├─ 確認 ──→ Claude in Chrome → ビジュアルQA
  ├─ 比較 ──→ ChatGPT ───────→ 並列レビュー
  └─ 生成 ──→ Gemini ────────→ 3Dコード
                    │
                    ▼
              GitHub（正本）
                    │
                    ▼
            GitHub Pages（自動デプロイ）
              ┌─────┴─────┐
              │           │
         kesson-space   pjdhiro
         (3D体験空間)   (ブログ+PDF)
              │           │
              ▼           ▼
         読者のブラウザ  読者のブラウザ
```

---

## 出力変換時の注意

- §2（AI協働スタック）の「なぜ複数のAIを使うのか」は変換先に必ず含めること。技術構成だけでなく、設計意図を伝える
- 内部管理情報（PK同期手順、セッションプロトコル、Phase番号、ISS番号）は出力に含めない
- 各URLは変換時に確認・更新すること
- project-overview.mdと内容が重複しないように注意。本ファイルは「技術的にどう動いているか」に限定する
