---
id: RR-042
title: energy-flow READER に Micro-worlds / Shared Spaces を実装（設計＋数理仕様）
issue: pd#130
pillar: energy-flow-psyche
status: 設計確定・実装委任中（しっくり判定は pjdhiro 専権）
date: 2026-07-15
---

## 目的

energy-flow READER に Litt 三技法の残り2つ——**Micro-worlds（触れる小世界）と Shared Spaces（共有の場）**——を実装し、three-and-seven（pd#128）と対称化する。RR-041 §B で ❌ 判定だった2技法を回収する。

## 設計方針（DESIGN-RULES §0a 準拠）

- 独自テーマ・standalone CSS を新造しない。`tokens.css` の CSS 変数と glow 体系の上にのみ載せる（新色ハードコード禁止）。
- Micro-worlds は three-and-seven の `src/reader-microworlds.js` のアーキテクチャ（`<div data-microworld="KIND">` にマウント・`MOUNTS` レジストリ・`makeCanvas`/`controls`/`slider` ヘルパ・ResizeObserver＋details toggle 対応）を**再利用**し、energy-flow 用の新種を足すだけにする。依存ライブラリなし（vanilla）。
- no-JS フォールバック文（`.mw-fallback`）を必ず置く（SEO/no-JS で本文の比喩が読める）。
- **採用の最終判定は pjdhiro のしっくり感（専権）**。数理が正しくても直感喚起に効かない図は落とす（720°スピノルの前例＝[[feedback_microworlds_topic_fit]]）。実装・自己検証まで CLI が行い、公開前に :3004 で確認を仰ぐ。

## L2 Micro-worlds — 2つの小世界

### ① `ou-well`（§2・くぼみのボール＋臨界減速）
本文 §2 の「くぼみに置かれたボール」＝オルンシュタイン–ウーレンベック過程を、触れる図にする。

- **描画**: ポテンシャルの井戸 U(x)=½·k·x² の中を、点（ボール）が「底へ引き戻す力」と「ランダムな揺れ」の釣り合いで動く。右側に x の時系列トレース（時間 vs 位置）を描き、「つつくと転がるが、やがて底へ戻る」が目で見える。
- **操作**: スライダー2本——「引き戻す力（k＝井戸の急さ）」「揺れ（σ）」。ボタン/トグル「くぼみを浅くする（臨界減速）」で k を小さくしていくと、①戻るのに時間がかかる（自己相関時間 τ=1/k が伸びる）②ばらつきが広がる（定常分散 σ²/2k が増える）ことを status に表示。
- **数理核（要機械検証）**: OU の離散化（Euler–Maruyama）`x ← x − k·x·Δt + σ·√Δt·N(0,1)`。定常分散 Var=σ²/(2k)、ラグτ自己相関 ρ(τ)=exp(−k·τ)。臨界減速＝k→0 で τ→∞・Var→∞。

### ② `kuramoto-sync`（横串・結合振動子の同期）
横串節の「同じ結合振動子（蔵本モデル）の仲間」＝閾値で位相が一斉に揃う相転移を、触れる図にする。

- **描画**: 円周上に N 個の振動子（点）。各点は固有振動数 ω_i で回り、結合 K で引き込み合う。秩序変数 r=|(1/N)Σexp(iφ)| を中心のベクトル長で可視化。K が小さいと散らばり（r≈0）、閾値を超えると一斉に固まる（r→1）。
- **操作**: スライダー「結合の強さ K」。status に r と「バラバラ／揃った」を表示。
- **数理核（要機械検証）**: `dφ_i/dt = ω_i + (K/N)Σ_j sin(φ_j − φ_i)`。秩序変数 r は K<K_c で r≈0、K>K_c で単調増加。閾値 K_c が存在（連続相転移）。

## L3 Shared Spaces — 共有の場（§7 に小節新設）

three-and-seven §9「共有の場」の型を energy-flow に移す。§7「この読み物の作り方」の末尾に小節を足し:
- この読み物が「できあがった結論」でなく **pjdhiro（問い・判定）と Claude（調査・候補）が同じ台帳の上で読みを確定していく作業台**であることを明示。
- **いま台帳の上で起きていること**を surface: 採用（"流れ"字義は生き残り）／保留（関係の強い読み＝識別不能・束ねモデルの空白 RR-040）／見送り（感情＝保存量エネルギーの水力学版）。判定台帳・調査ファイルは同じ公開リポジトリにある。
- **読者の参加導線**: 公開リポジトリで現在地を確かめられる／末尾の問い返しが保留欄を動かす入口。
- scope を正直に注記（リアルタイム共同編集ではなく、公開された非同期の作業台）。

## 実装の受け入れ条件

- 数理核を `RR-042a-microworld-math-check.mjs` で機械検証し ALL CHECKS PASSED。
- 品質ループ: `build-reader-lp.py` 再ビルド → static-checks 11/11・U+FFFD 0・内部アンカー全解決。
- 実装後 `reader-litt-conformance` 再監査（L2/L3 を honest に更新・§7 の適合表を ✅ へ）。
- 文脈ゼロ読解テストで Micro-worlds が本文の理解を助けるか点検。
- **公開（develop→main）は pjdhiro しっくり判定＋「公開して」指示待ち**。

## 実装結果（2026-07-16・L2 は Opus 委任＋Fable 統合／L3 は Fable）

**L2 Micro-worlds（実装済み・Opus subagent→Fable 検証統合）**
- `src/reader-microworlds.js` に `mountOUWell`（ou-well）・`mountKuramotoSync`（kuramoto-sync）を追加＋MOUNTS 登録。既存4種（three-and-seven）は不変。`gaussian()`（Box–Muller）を追加。
  - ou-well: ポテンシャル井戸＋ボール＋時系列トレース。スライダー「引き戻す力 k」「揺れ σ」＋ボタン「くぼみを浅く（臨界減速）」「リセット」。status に τ=1/k・σ²/2k を live 表示。井戸クリックで「つつく」。
  - kuramoto-sync: 円周上 N=24 振動子＋秩序ベクトル r。スライダー「結合の強さ K」＋「かき混ぜる」。status に r と バラバラ/揃ってきた/揃った。
- マウントマーカーを正本 MD に挿入: ou-well＝§2「くぼみのボール」段落直後（MD L105）、kuramoto-sync＝横串の同期箇条書き直後（MD L312）。no-JS フォールバック文つき。
- スクリプト注入: `scripts/reader-energy-flow-template.html` の `</body>` 直前に `reader-microworlds.js`（module）。
- **CSS**: mw-* は既に `src/styles/reader.css`（energy-flow も読込・`.reader-article` を使用）で効くため、当初 reader-flow.css へ移植したが**二重定義なので差し戻し**、reader.css 単一ソースに統一。

**L3 Shared Spaces（実装済み・Fable）**: §7 に「共有の場 — この読み物は、公開の作業台の上にある」小節を新設。採用（"流れ"字義）／保留（関係の強い読み＝識別不能・束ねモデルの空白）／見送り（保存量エネルギー水力学版）を surface し、公開リポジトリの台帳と読者の参加導線（末尾の問い返し）を明示。scope を正直に注記（非同期の作業台）。§7 の Litt 適合表を L2/L3 とも ✅ へ更新。

**数理検証（RR-042a・Fable 独立再実行）**: `node RR-042a-microworld-math-check.mjs` → **ALL CHECKS PASSED**。OU 定常分散 σ²/(2k)（相対誤差 0.2–0.4%）・自己相関 exp(−kτ)・臨界減速（k↓ で τ=1/k・分散が単調増加）／Kuramoto r(K)（K=0→0.18・K=4→0.99・単調・閾値存在）。実装 JS と同一更新式。

**品質ループ**: static-checks 11/11（three-and-seven も不変）・U+FFFD 0・内部アンカー全解決（39件）・`node --check` OK・シェルエスケープ混入 0・再ビルド 44,179 bytes。

**ブラウザ検証（:3004）**: 両ウィジェットとも mount（mw-ready）・canvas 実サイズ（480×240／480×298）・コントロール/status 正常表示・no-JS フォールバック非表示・**コンソールエラー 0**。VI 継承（星背景・glow・目次）も正常。
⚠️ **動きの検証は headless ペインでは不能**（`visibilityState:hidden` で requestAnimationFrame が停止し r・トレースが進まない＝ウィジェット不具合ではない）。**アニメーションのしっくり感は pjdhiro が可視ブラウザ（:3004）で §2・横串を開いて判定する**（720°の前例どおり・専権）。

**Litt 適合監査 第3回（実装後・honest 更新）**: Explanations＋speed regulator＝✅、Micro-worlds＝✅（2図）、Shared Spaces＝✅（scope 明示付き＝非同期の作業台）。**三技法すべて実装**（three-and-seven と対称化）。§7 の適合表は「未実装を実装済みと書かない」honest 要件を満たす（L3 の非リアルタイム性を明記）。総合判定は「**適合（core fully adopted, 3技法・L3 は scope 付き）**」。ただし L2 の最終採否＝しっくり感は pjdhiro 専権。

## 関連
- [[RR-041-reader-review-round1]]（本実装の発端・L2/L3 ❌ 判定）
- pd#128 / three-and-seven `src/reader-microworlds.js`・§9 共有の場（範型）
- [[project_reader_quality_gates]]・[[feedback_microworlds_topic_fit]]・CN-011
