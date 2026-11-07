# LLM調査レポート品質評価: ChatGPT vs Codex

- 評価日: 2026-03-26
- 評価者: Claude (Opus)
- 対象: `knowledge/research/{topic}/` 配下の GPT / Codex レポート群

## 評価対象ファイル

| ファイル | モデル | テーマ | サイズ |
|---------|--------|--------|--------|
| trust-chatgpt-20260326.md | GPT-5.2 Thinking | 信頼の学際レビュー | ~55KB |
| trust-codex-20260326.md | Codex (GPT-5) | 信頼の学際レビュー | ~62KB |
| design-thinking-deep-research-gpt-20260326.md | GPT-5.2 Thinking | デザイン思考の系譜・アブダクション・形骸化 | ~36KB |
| design-thinking-deep-research--codex-20260326.md | Codex (GPT-5) | デザイン思考の系譜・アブダクション・形骸化 | ~32KB |
| value-chatgpt-20260326.md | GPT-5.2 Thinking | 「価値」の学際的見取り図 | ~29KB |

## 1. Trust（信頼）レポート比較

| 評価軸 | ChatGPT | Codex |
|--------|---------|-------|
| 構造 | エグゼクティブサマリー → 分野別マップ → 論争 → 文献。分野別が散文的でフォーマットが揺れる | エグゼクティブサマリー → 分野別マップ → 横断比較表 → 神経現象学独立セクション → 論争 → 文献。構造が一貫 |
| 分野カバー | 16-20分野 | 21分野。切り方がやや細かい |
| 横断比較 | 分野ごとの記述に留まり横断比較表がない | 大型比較表あり（定義・主体・対象・水準・方法・代表概念・近接概念・主論点）。最大の差 |
| 神経現象学 | 簡潔な紹介で終わる | 独立セクションで経験次元の候補・研究設計案まで踏み込む。PD の関心に合致 |
| 文献の質 | citeturn 参照が多いがDOI・URLの明示が少ない。検証しづらい | DOI・URL付き文献リスト充実。検証可能性が高い |
| 測定論 | 「測れる/測れない」を各分野で記述（良い） | 同様だが横断比較表に組み込まれており参照しやすい |

**判定: Trust は Codex が明確に上。** 横断比較表と神経現象学セクションの質が決定的な差。

## 2. Design Thinking レポート比較

| 評価軸 | ChatGPT (GPT-5.2 Thinking) | Codex (GPT-5) |
|--------|---------------------------|----------------|
| 構造 | 学習目標 → エグゼクティブサマリ → 詳細版。citeturn 参照が大量で読みづらい | 調査の立場 → 系譜 → 推論比較 → 形骸化 → 最終判断 → 参考文献。citeturn なし、URL直書きで読みやすい |
| 系譜の厚み | Simon → McKim → Faste → IDEO → d.school → 批判。mermaid 図あり。kesson-driven-thinking リポ参照あり | 同等の系譜。Simon → Lawson → Cross → Rowe → Schön → IDEO。mermaid 図なし |
| アブダクション | Peirce → Dorst → Martin。「同一視は危険、拡張が必要」を明示 | 同様の結論。「design の abduction は problem frame hypothesis を含む」と踏み込む |
| 形骸化 | 比較表（本来 vs 研修版）あり。innovation theater を具体的に引用 | 同等の比較表。「何が失われるか」表が追加 |
| 日本の受容 | 経産省・東大 i.school・東工大 | 慶應 SDM・大阪大 CBI。「designerly thinking の純粋継承ではなく教育パッケージ接続」と分析 |
| 文献 | citeturn 参照のみ。検証困難 | URL・DOI 付き参考文献リスト。検証容易 |
| PD内部参照 | あり（kesson-driven-thinking を複数回言及） | なし |

**判定: ほぼ同等だが性格が異なる。**
- GPT: kesson-driven-thinking リポを読み込んでおりPD文脈との接続が強い。ただし citeturn だらけで可読性が低い
- Codex: 可読性・検証可能性が高く判断が明快（最終判断セクションが歯切れ良い）。PD 内部参照はない

## 3. Value（価値）— GPT のみ

対になる Codex レポートがないため単体評価。

- 用語マップ（日英対応表）と翻訳ズレ分析が実用的で質が高い
- 領域カバーが広い（経済 → 哲学 → 芸術 → 教育 → AI → 環境）
- mermaid 図で価値の束構造を可視化
- 深掘り候補10項目が PD の今後の調査設計に使える

## 総合スコア

| 観点 | ChatGPT (GPT-5.2 Thinking) | Codex (GPT-5) |
|------|---------------------------|----------------|
| 構造の一貫性 | B+ | **A** |
| 検証可能性（文献） | C（citeturn のみ） | **A**（DOI/URL付き） |
| 可読性 | B（citeturn が邪魔） | **A** |
| 分析の深さ | **A**（PD文脈接続、kesson参照） | A（横断比較表、判断の明快さ） |
| PDプロジェクトとの接続 | **A**（kesson-driven-thinking 参照） | B（独立した学術レポート） |
| evidence としての蓄積価値 | A | **A+** |

## 結論

**Codex のほうが evidence としての品質が高い。** 理由:
1. 文献の検証可能性（DOI/URL）
2. 横断比較表の構造
3. 可読性（citeturn ノイズなし）

**ChatGPT は PD 文脈との接続が強い。** kesson-driven-thinking リポを読み込んで design thinking 批判と欠損駆動思考を橋渡ししている点は Codex にない。

## 今後の調査設計への示唆

1. **evidence の正本は Codex 系を使う**: 検証可能性と構造の一貫性が高い
2. **PD 接続メモは GPT 系を併用**: 内部リポ参照・文脈接続は GPT が強い
3. **citeturn 問題への対処**: GPT レポートを evidence として使う場合、citeturn を実際のURLに置換する後処理が必要
4. **横断比較表を標準フォーマットにする**: Codex の trust レポートの比較表構造を、今後の調査テンプレートとして採用するのが有効
5. **深掘り（deep dive）は Codex で実行するのが品質安定**: trust-*-deep-dive-codex 群は構造が揃っており、シリーズとして蓄積しやすい
6. **プロンプト設計**: Codex に kesson-driven-thinking 参照を明示的に指示すれば、GPT の強みも取り込める可能性がある
