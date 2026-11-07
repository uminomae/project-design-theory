# 信頼調査インベントリ・レポート

作成日: 2026-04-03
対象: project-design / 信頼（trust）研究資産の全体整理

---

## 1. 調査の経緯

| 時期 | マイルストーン | コミット |
|------|---------------|---------|
| 2026-02-08 | CN-005 信頼仮説インベントリ初版（Session 13） | 594aff9 |
| 2026-02-09 | CN-006 信頼分析軸（Session 17/18） | 594aff9 |
| 2026-03-26 | 外部LLM広域レビュー 3本投入（ChatGPT / ChatGPT Pro / Codex） | 5ae4312 |
| 2026-03-26 | deep dive 第1波: 愛着・神経現象学・AI（3本） | 559c345 |
| 2026-03-27 | deep dive 第2波: 修復・自己信頼・gaslighting・taxonomy・AI測定・制度修復（6本） | 4b5bbf1 |
| 2026-03-27 | 統合レポート trust-integrated.md（Issue #34） | bff26e8 |
| 2026-03-28 | 公開用 content/knowledge/trust-ja.md + PDF + SEO | 8970568 |
| 2026-03-31 | 必要十分条件レポート（Issue techo#60） | 4212cf5 |

**親 Issue**: #6（「信頼とは」統合調査）
**子 Issue**: #8, #9, #10, #20, #21, #22, #23, #25, #26, #27

---

## 2. ディレクトリ構造

```
project-design/
  knowledge/
    concepts/
      CN-005_trust-hypothesis-inventory.md   # 仮説インベントリ（17仮説）
      CN-006_trust-analysis-axes.md          # 分析軸（時間・内容・状態・F-O）
    research/
      trust/
        PROMPT.md                            # 3 LLM 統一プロンプト
        trust-integrated.md                  # 統合レポート（#34）
        trust-necessary-sufficient-conditions.md  # 必要十分条件（techo#60）
        trust-codex-20260326.md              # Codex 広域レビュー
        trust-chatgpt-20260326.md            # ChatGPT レビュー
        trust-chatgpt-pro-20260326.md        # ChatGPT Pro レビュー
        trust-deep-dives-index-codex-20260326.md  # deep dive 索引
        trust-attachment-deep-dive-codex-20260326.md        # #8 愛着
        trust-neurophenomenology-deep-dive-codex-20260326.md # #10 神経現象学
        trust-ai-deep-dive-codex-20260326.md                # #9 AI
        trust-repair-cross-domain-deep-dive-codex-20260326.md # #20 修復横断
        trust-self-trust-deep-dive-codex-20260327.md        # #21 自己信頼
        trust-gaslighting-cross-domain-deep-dive-codex-20260327.md # #22 gaslighting
        trust-lived-experience-taxonomy-codex-20260327.md   # #23 taxonomy
        trust-lived-experience-taxonomy-pilot-codex-20260327.md   # taxonomy pilot
        trust-ai-measurement-redesign-codex-20260327.md     # #25 AI測定再設計
        trust-ai-measurement-matrix-codex-20260327.md       # AI測定行列
        trust-institutional-repair-deep-dive-codex-20260327.md # #26 制度修復
        REPORT-trust-research-inventory.md   # 本ファイル
  content/
    knowledge/
      trust-ja.md                            # 公開用コンテンツ（日本語）
```

---

## 3. ファイル一覧（詳細）

### 3.1 概念基盤（concepts/）

| ファイル | サイズ | ステータス | 内容 |
|---------|--------|-----------|------|
| CN-005_trust-hypothesis-inventory.md | - | [S] 探索的 | H01-H08 を中心に17仮説。精神分析・F-O軸・エネルギー/ゲート・関係・BSPL 視点 |
| CN-006_trust-analysis-axes.md | - | [S] 暫定 | 時間軸・内容軸・状態軸・F-O軸による多元的記述 |

### 3.2 広域レビュー（3本、外部LLM）

| ファイル | サイズ | エンジン | 特徴 |
|---------|--------|---------|------|
| trust-codex-20260326.md | 61KB | Codex | 12分野横断。「信頼を何として扱うか」の差異を明示 |
| trust-chatgpt-20260326.md | 53KB | ChatGPT | 神経経済学・trust game・オキシトシン研究まで言及 |
| trust-chatgpt-pro-20260326.md | 41KB | ChatGPT Pro | 分野別の詳細整理 |

### 3.3 統合レポート（3本）

| ファイル | サイズ | Issue | 内容 |
|---------|--------|-------|------|
| trust-integrated.md | 16KB | #34 | 13層の多元的定義 + 日英翻訳ズレ整理 |
| trust-necessary-sufficient-conditions.md | 14KB | techo#60 | 必要条件5要素の収束、十分条件の領域依存性 |
| trust-deep-dives-index-codex-20260326.md | 10KB | - | 9本の deep dive の位置づけと相互接続 |

### 3.4 deep dive（9本）

| # | ファイル | サイズ | Issue | テーマ |
|---|---------|--------|-------|--------|
| 1 | trust-attachment-deep-dive | 13KB | #8 | 愛着と信頼の発達系列 |
| 2 | trust-ai-deep-dive | 11KB | #9 | trust vs reliance vs calibration |
| 3 | trust-neurophenomenology-deep-dive | 12KB | #10 | lived experience の7経験次元 |
| 4 | trust-repair-cross-domain-deep-dive | 16KB | #20 | 修復の横断的6条件 |
| 5 | trust-self-trust-deep-dive | 15KB | #21 | 自己信頼の哲学・臨床接続 |
| 6 | trust-gaslighting-cross-domain-deep-dive | 14KB | #22 | 信頼損傷の三層構造 |
| 7 | trust-lived-experience-taxonomy | 10KB | #23 | 9次元の記述軸 |
| 8 | trust-ai-measurement-redesign | 11KB | #25 | 5層測定の提案 |
| 9 | trust-institutional-repair-deep-dive | 13KB | #26 | 制度信頼修復の精密化 |

### 3.5 補助・実装（3本）

| ファイル | サイズ | 内容 |
|---------|--------|------|
| PROMPT.md | 8KB | 3 LLM に投入した統一プロンプト |
| trust-lived-experience-taxonomy-pilot | 8KB | taxonomy のパイロット適用 |
| trust-ai-measurement-matrix | 9KB | AI trust 測定のテンプレート行列 |

### 3.6 公開用コンテンツ

| ファイル | 内容 |
|---------|------|
| content/knowledge/trust-ja.md | trust-integrated.md をベースに公開向け整形 |

---

## 4. 総量

- ファイル数: 20本（concepts 2 + research 17 + content 1）
- 総サイズ: 約 340KB（research/ のみ）
- 横断分野数: 12+（心理学、社会学、哲学、経済学、神経科学、HCI、政治学、人類学、臨床、公衆衛生、組織論、愛着理論）
- 使用エンジン: Claude (Codex), ChatGPT, ChatGPT Pro

---

## 5. 主要な到達点

### 必要条件（高い収束）
1. **脆弱性** — 損害を受けうる状態にあること
2. **不確実性** — 相手の行動が完全に予測できないこと
3. **期待** — 好ましくふるまうという見込み
4. **依存** — 利害が相手に委ねられていること
5. **監視の限界** — 完全な統制ができないこと

### 十分条件
- **領域依存**: 対人・自己・制度・AI で異なる
- 単一の普遍的十分条件セットは存在しない

### 信頼修復の横断的6条件
1. 違反タイプの診断
2. 責任の明確化
3. 感情的承認（affective acknowledgement）
4. 実質的変化（substantive change）
5. 反復的一貫性
6. 再依存の再学習

### gaslighting の三層構造
- self-trust 損傷 → other-trust 歪曲 → institutional trust 損傷

### AI trust
- 目標は「高信頼」ではなく「適切に校正された依存（calibrated reliance）」

---

## 6. 未踏領域・次の深掘り候補

| 領域 | 状態 | 理由 |
|------|------|------|
| 9本 deep dive の統合フレームワーク（synthesis） | 未着手 | 個別完了、横断統合が次段 |
| lived experience taxonomy の実データ適用 | パイロットのみ | 実エピソードでの検証が必要 |
| 制度信頼修復の十分条件 | 問題提起まで | transparency だけでは不十分と判明 |
| 神経現象学: trust 固有の研究設計 | 方法論のみ | 近接領域からの橋渡し設計が必要 |
| AI gaslighting | 推定段階 | 学術文献が薄い未開拓領域 |
| 欠損駆動思考との接続 | ブリッジのみ | 信頼の「欠損」が思考を駆動する構造 |
