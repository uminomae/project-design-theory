# 「価値とは」調査設計

Issue: #33
最終更新: 2026-03-27

## 調査目的

「価値」の多義性を整理し、project-design の理論基盤として位置づける。

具体的には:
1. 「価値」が領域ごとにどう異なる意味で使われるかを明らかにする
2. 日本語「価値」と英語 value/values/worth/utility 等の翻訳ズレを整理する
3. project-design の中心概念（Doing/Being, Love駆動開発, 欠損駆動思考, trust, design）と接続する
4. 調査に使用した LLM の能力差を記録し、今後の調査方法論に活かす

## 方法論

### 三段階調査

| 段階 | 内容 | 状態 |
|------|------|------|
| **Phase A**: 一次調査 | 3つの外部 LLM（GPT-5.2 Thinking, GPT-5.4 Pro, GPT-5 Codex）に同一テーマを投げ、独立したレポートを収集 | 完了 |
| **Phase B**: 比較評価 | agent-team-workflow (cs#188) で3レポートを9軸で比較評価 | 完了 |
| **Phase C**: 統合調査 | 3レポートの強みを活かし弱点を補完する統合レポートを作成 | 進行中 |

### 使用ツール・モデル

| 役割 | モデル/ツール |
|------|-------------|
| 一次レポート生成 | GPT-5.2 Thinking, GPT-5.4 Pro, GPT-5 (Codex) |
| 比較・統合の orchestrator | Claude Opus 4.6 |
| 調査・検証 agent | Claude Sonnet (researcher/critic) |
| 出典検証 | WebSearch / WebFetch |
| ワークフロー | agent-team-workflow (cs#188) v1.1 |

### 品質保証

- **V1**: 出典 URL の実在確認
- **V2**: 主張と出典内容の照合
- **V3-V6**: 反論構築、バイアス検出、過度な一般化検出、論理チェック
- **REVIEW サイクル**: critic agent が各 Phase の成果物を検証し、CONSENSUS 判定

## 現在の到達点

### 確立した知見

1. **「価値」は多義語である**: 価格/効用/規範/意味/象徴の少なくとも5つの問題系が束になっている
2. **日英の翻訳ズレがある**: 日本語「価値」は英語の value/values/worth/utility/significance/merit/price に分岐する
3. **3レポートは相補的**: ChatGPT=構造化+網羅性、Pro=横断論点の言語化、Codex=簡潔さ+検証可能な出典
4. **独自フレームワークの出自**: ChatGPT の「束をほどく」は Boltanski & Thevenot に構造的類似、Pro の四層は O'Neill/IPBES の拡張
5. **prompt 準拠の再実行**: `value-deep-research-codex-20260327.md` を追加し、2026-03-27 統一プロンプトに合わせた A-E 形式の広域見取り図を保存

### Phase C で補完済み/補完中の弱点

| 弱点 | 状態 | 成果 |
|------|------|------|
| 検証可能性（citeturn/出典ゼロ） | 補完済み | 27件の URL 付き出典を収集 |
| PD 接続（Doing/Being 等） | 補完済み | 11件の接続点を発見。Being 側の空白が判明 |
| 網羅性の穴（Schwartz, Bourdieu, Graeber） | 補完済み | 3理論の要点と URL を収集 |
| フレームワーク出自 | 補完済み | B&T, O'Neill/IPBES との対応を確認 |
| 統合レポート | 未着手 | Phase C の PLAN → EXECUTE で作成予定 |

### 発見された重要な接続点

| PD 概念 | 「価値」との接続 |
|---------|----------------|
| Doing（行動原理） | 「多様な価値観を受容れる」が第一項 |
| Being | **記述がない — 理論的空白** |
| 欠損駆動思考 | 「無価値感」が入力値。生存-信頼 座標系が価値評価の基底メカニズムとして読める |
| Love 駆動開発 | 暗黙的に含まれるが明示的接続なし |
| trust | 「価値評価・社会予測・誤差学習」の結節点 |
| design-thinking | "human values → user needs" 圧縮の系譜 |
| 感情処理 | 「価値」は処理段階の一要素（value.md 作成中） |

## 次のステップ

1. Phase C REVIEW（critic 検証） — 進行中
2. Phase C PLAN — 統合レポートの構成設計
3. Phase C EXECUTE — 統合レポート執筆
4. Phase C REVIEW — 最終チェック
5. Phase C CLOSE — commit & push、PROCESS-LOG 完成

## 保持論点

- プロンプトの同一性が未確認（モデル比較の前提条件）
- Being 側での「価値」の位置づけ — pjdhiro 判断事項
- 生存-信頼 座標系 → 価値評価メカニズムの読み替え妥当性 — critic 検証中
- Graeber「価値 = 行動の意味」と Doing/Being の接続 — critic 検証中
- value.md（pjdhiro 正本）への反映タイミング — pjdhiro 判断事項
