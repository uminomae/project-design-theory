# デザインルール — pd サイト公開ページ

## このファイルの位置づけ

pd サイトの VI（ビジュアルアイデンティティ）とUI品質基準の正本。
index.html を基準ページとし、**サイト配下の全公開 HTML ページ（サブページ・LP を含む）に適用される**。
CSS/HTML を編集する際はこのルールに準拠すること。
hook `ui-lint.sh` が機械的に検証可能な項目を自動チェックする。

## 0a. 公開ページ新設時の必須制約（2026-07-03, pjdhiro 指示により明文化）

**新しい公開ページ（LP・サブページ）を作るとき、以下は選択の余地がない必須制約である。**
（違反実例: `reader/three-and-seven.html` 初版が独自の warm-light テーマを新造し pjdhiro に却下された。§8b 参照）

1. **VI の新造禁止**: 新規ページは index.html の VI を継承する。独自のテーマ・パレット・タイポグラフィを発明しない
2. **透過するコンテンツ**: WebGL シェーダー背景（`#webgl-container`）の上にテキストが浮かぶ構造。`body` / コンテンツ層は `background: transparent`（§1・§6）
3. **グロークラス体系**: 可読性は `.glow-heading` / `.glow-text` / `.glow-card` / `.glow-link` で制御（§2）。独自の text-shadow / backdrop-filter を書かない
4. **カラーは既存 CSS 変数のみ**: `src/styles/tokens.css` の `--ink / --mid / --mute / --gold / --navy / --coral` 等。新色のハードコード禁止（§5）
5. **タイポグラフィ階層の継承**: `--serif-en` / `--serif-jp` / `--sans`、ウェイト 300/400、§4 のサイズ階層
6. **スタイルは `src/styles/` を再利用**: ページ内埋め込みの standalone CSS を新造しない。ページ固有スタイルが必要な場合も tokens と glow 体系の上に載せる
7. **レスポンシブ §3・機械検証 §7 の対象に含める**（responsive-test の URL 対象に追加）
8. **コンテンツパターン**: 主要概念には誤解FAQ アコーディオン（§9）を検討する
9. **着工前にこのファイルを必読**（docs-navigator「UI / CSS 変更」）。生成スクリプト経由でページを作る場合も、テンプレートがこの制約を満たすこと

## 0. 運用原則 — 対話駆動のブラッシュアップ

**このルールは完成品ではなく、pjdhiro との対話から継続的に更新される品質管理文書である。**

- pjdhiro との UI に関する対話で決定・変更・却下されたデザイン判断は、同一セッション内でこのファイルに反映する
- セッションログに UI 関連の議論が残っているのにこのファイルが未更新の場合、定期レビュー（`.claude/skills/periodic-review/SKILL.md`）が WARN を出す
- 「試して合わなかった手法」も記録する（§8 却下履歴）。同じ失敗を繰り返さないため
- CLI（Claude）はルールの提案・追記を行えるが、ルールの削除・根本的変更は pjdhiro 承認が必要

## 1. コンセプト

- **透過するコンテンツ**: WebGL シェーダー背景の上にテキストが浮かぶ
- **読みやすさ最優先**: 背景がどのシェーダーでも本文が読めること
- **静かな存在感**: 装飾は控え、余白と文字で構造を伝える

**背景シェーダーの負荷上限（2026-07-05 対話で確立）**: 背景はあくまで背景であり、**スクロールがカクつくほど重いシェーダーはランダム選択プールに入れない**。目安として、フルスクリーン @ devicePixelRatio 2 で毎ピクセルの反復が重いもの（体積レイマーチ×3Dノイズなど）は除外する。除外したファイルは削除せず `src/shaders/` に参照用として保持し、プール（`src/content/site-data.mjs` の `SHADER_PATHS`）のコメントに除外理由を書く。適用例: main2-webgpu（12ステップ体積レイマーチ）を除外し、main-webgpu・main3-webgpu・main4-webgpu の3本を選択（pjdhiro 報告「特定の背景でカクカクする」を受けた措置。当初 main3 も除外したが、pjdhiro の体感確認で重いのは1本だけと判明し、2026-07-05 に main3 を復帰）。

**背景シェーダーの数値安全（2026-11-05・iPhone で色が崩れる報告を受けて確立）**: iPhone の Chrome も WebKit で、WebKit は WGSL を Metal の relaxed math＋fast 数学関数でコンパイルする（Chrome/Dawn は precise）。そのため Mac で正常でも iOS だけ色が崩れる。WGSL は次を守る。①ハッシュは**整数ハッシュ（u32 のビット演算）**にする。`fract(sin(x) * 43758.5453)` 型も `fract(大きな積)` 型（Dave Hoskins 型）も、relaxed math ではインライン展開された呼び出し箇所ごとに 1 ulp の丸めが変わり、積が整数境界をまたぐと fract が 0.998→0.000 に跳ねて同じ格子点で別の値になる（iPhone 実測 2026-11-05: 格子 (-1,18) で +0.9961 と -1.0000）。有限差分（ラプラシアン）を取る main3 ではノイズの不連続が ×15 されて黄色の塊になった②`pow` の底を負にしない（引数を `clamp` で閉じる）③premultiplied canvas なので**色 ≤ alpha** を保つ（`color * 1.4` のような持ち上げは `min(…, 1.0)` で閉じてから alpha を掛ける。範囲外は WebGPU 仕様で合成結果が未定義）。検証は `?shader=main3` のように URL で 1 本に固定して端末ごとに見る（`src/bootstrap/shaders.js`）。

**背景の WebGPU 判定とフォールバック（2026-11-05・pjdhiro「デフォルトで無効なのは困る。みんな見れない」）**: Safari 18 / iOS 18 以前は WebGPU が既定オフ（既定オンは Safari 26 / iOS 26 から）。背景は `navigator.gpu` の有無と `requestAdapter()` の結果で WebGPU の可否を判定し、使えなければ同じ数式の WebGL 版（`main.js`・`main3.js`・`main4.js`・three.js）に切り替える（`src/bootstrap/shaders.js`）。背景が無い状態で公開しない。WebGL 版はフォールバックの本番コードなので、WebGPU 版の直しは WebGL 版にも入れる。`?renderer=webgl` で強制できる。

## 2. グロークラス体系

テキストの可読性は以下の3クラスで制御する。それ以外の箇所に個別の text-shadow / backdrop-filter を書かない。

| クラス | 用途 | 背景 | 枠 | ホバー |
|--------|------|------|-----|--------|
| `.glow-heading` | 見出し・ラベル | なし | なし | なし |
| `.glow-text` | 本文ブロック | なし | なし | なし |
| `.glow-card` | 情報カード（3カラム等） | 白パネル | ガラス枠 | なし |
| `.glow-link` | タップ対象（リンクカード） | なし | 下線 | 白背景+インデント |

### 禁止事項

- グロークラス以外で `text-shadow`, `backdrop-filter`, `background: rgba(255,255,255,*)` を使わない（menu-toggle / site-menu / lang-toggle / pill / about-trigger / about-modal / knowledge-modal は例外）
- `.glow-card` と `.glow-link` を同じ要素に付けない
- `.glow-text` にパネル系プロパティ（background, backdrop-filter）を付けない

## 3. レスポンシブ

### ブレークポイント

| 名前 | 幅 | 用途 |
|------|-----|------|
| sm | max-width: 480px | スマートフォン |
| md | max-width: 768px | タブレット |
| lg | 769px 以上 | デスクトップ |

### 必須対応

- `.grid` は md 以下で `grid-template-columns: 1fr`
- 本文ブロックの `max-width` はビューポート幅を超えないこと
- `.container` の padding は sm で `0 1rem` 以上
- タッチターゲット（pill, glow-link, menu-toggle, about-trigger 等）は最小 44x44px

### 実装値一覧

#### md（max-width: 768px）

| 対象 | プロパティ | 値 |
|------|-----------|-----|
| `.container` | padding | `0 1.5rem` |
| `.hero h1` | font-size | `3rem` |
| `h2` | font-size | `2rem` |
| `section` | padding | `5rem 0` |
| `section` | min-height | `auto` |
| `.glow-card` | padding | `1.5rem` |
| `.glow-link` | padding | `1rem 1.5rem` |
| `.top-bar` | top / right | `1rem` |
| `.site-menu` | top / right | `3.5rem` / `1rem` |
| `.hero-notice, .overview-text, .being-desc, .future-text` | max-width | `100%` |

#### sm（max-width: 480px）

| 対象 | プロパティ | 値 |
|------|-----------|-----|
| `.container` | padding | `0 1rem` |
| `.hero` | padding | `4rem 0` |
| `.hero h1` | font-size | `2.5rem` |
| `.hero h1` | margin-bottom | `2rem` |
| `h2` | font-size | `1.5rem` |
| `h2` | margin-bottom | `1.5rem` |
| `section` | padding | `3rem 0` |
| `.glow-card` | padding | `1.25rem` |
| `.glow-link` | padding | `0.75rem 1rem` |
| `.pills` | gap | `0.5rem` |
| `footer a` | margin / font-size | `0 0.75rem` / `0.85rem` |

#### タッチターゲット（全幅共通）

| 対象 | min-height |
|------|-----------|
| `.pill`, `.glow-link`, `.menu-toggle`, `.lang-toggle button`, `.about-trigger`, `.about-modal__close`, `.knowledge-modal__close` | `44px` |

## 4. タイポグラフィ

### フォントサイズ階層

| 階層 | サイズ | 対象 |
|------|--------|------|
| 最小（prose block） | 0.95rem | hero-notice, overview-text, being-desc, future-text の p |
| 標準 | 1rem | タップ対象（pill, menu-toggle, lang-toggle button, footer a, site-menu a）、カード内（card p, card li, repo-card__desc）、h3 |
| ラベル（例外） | 0.75-0.8rem | hero-label, section-label, menu-label（装飾ラベルはタップ対象外のため例外） |

**ルール**: prose block（0.95rem）が本文の最小値。タップ対象・カード内・見出しは 1rem 以上。ラベル類のみ例外。

### 要素別一覧

| 要素 | フォント | サイズ | ウェイト |
|------|----------|--------|----------|
| h1 | --serif-en | clamp(3.5rem, 10vw, 6rem) | 400 |
| h2 | --serif-jp | clamp(1.75rem, 4vw, 2.5rem) | 400 |
| h3 | --sans | 1rem | 500 |
| p（汎用） | --sans | 0.95rem | 300 |
| p（prose block） | --serif-jp | 0.95rem | 300 |
| card p / card li | --sans | 1rem | 300 |
| タップ対象 | 各種 | 1rem | 400 |
| ラベル | --serif-en | 0.75-0.8rem | 400 |
| .repo-card--feature の desc | --sans | 0.95rem | 300 |

**補助テキストの可読性（2026-07-03 対話で確立）**: シェーダー背景上の補助テキストに `--mute` を使うと白黒どちらの背景でも沈む。**色は本文と同じ `--mid` に上げ（`.glow-link span` のグローと併用で両背景対応）、階層差は色でなく文字サイズで付ける**（例: repo-card--feature は title 1.1rem / desc 0.95rem）。半透過白パネルの追加は §2 禁止事項（グロークラス外の background 禁止）に抵触するため採らない。
**読み物のリンクカード（2026-11-03 対話で確立）**: repo のメインページ（pd トップ・cs・ks・as）への導線は、ブログカード型の `.reader-linkcard.glow-link` をページ幅で一枚ずつ並べる（`.reader-linkcards` で包む）。中身はサムネイル（1.91:1＝OGP と同比率・`assets/thumbs/{repo}.jpg`・トップの hero のスクショ）＋タイトル＋サブタイトル＋URL。寸法は Zenn 等の一般的なリンクカードに合わせ、常に横並び・サムネイルは固定幅（PC 200px／480px 以下 112px・サブタイトル2行・URL 非表示）。本文幅に比例させると画像が大きすぎる（却下 2026-11-03）。読み物どうし・節へのリンクは従来どおり本文リンク／箇条書きに残す。
**読み物ページのコールアウト（2026-07-03 対話で確立）**: リード文・用語ほどき（📖）・仮説ボックス等の blockquote は、グローだけではシェーダーに輪郭が溶けるため、**`.glow-card` パネルに載せる**（ビルド時にクラス付与。§2 の枠内で背景を得る正規の方法）。

## 5. カラー

CSS 変数のみ使用。ハードコードされた色は禁止。

| 変数 | 値 | 用途 |
|------|-----|------|
| --ink | #0f172a | 見出し・強調テキスト |
| --mid | #334155 | 本文テキスト |
| --mute | #94a3b8 | ラベル・補助テキスト |
| --gold | #8a7040 | カード見出し（Doing 系） |
| --navy | #2e3a6e | Being 系アクセント |
| --coral | #b04050 | Doing 系アクセント |

## 6. 構造ルール

- `#content` は `background: transparent`（シェーダー表示のため）
- `body` は `background: transparent`
- セクションごとに `min-height: 100vh`
- 各構成要素が `.glow-heading` / `.glow-text` / `.glow-card` / `.glow-link` のいずれかを持つこと
- prose 系本文ブロック（hero / overview / being / future）は `.prose-block` で共通化し、タイポグラフィ設定を個別に複製しない
- UI の振る舞いは `src/app.js` に集約し、`index.html` に `onclick` やインライン `<script>` を残さない

## 7. 機械検証項目

### 7a. 静的チェック（ui-lint.sh — PostToolUse hook）

1. index.html 内の `h1`, `h2`, `span.section-label`, `span.hero-label` に `.glow-heading` が付いているか
2. 本文ブロック（`.overview-text`, `.hero-notice`, `.being-desc`, `.future-text`）に `.glow-text` が付いているか
3. `.card` に `.glow-card` が付いているか
4. `.repo-card` に `.glow-link` が付いているか
5. style.css にグロークラス外の孤立した `text-shadow` がないか
6. style.css にハードコードされた色（#で始まる6桁）が `:root` 外にないか
7. viewport meta タグが存在するか
8. タッチターゲットの min-height/min-width が 44px 以上か（CSS 検証）
9. `user-scalable=no` または `maximum-scale=1` を使っていないか（WCAG 1.4.4）
10. CSS に `orientation` ロックがないか（WCAG 1.3.4）

### 7b. ブラウザチェック（responsive-test.sh — 定期実行）

Puppeteer で `http://localhost:3004/` に対して実行。根拠は WCAG 2.2 AA。

| # | チェック | 根拠 | 閾値 |
|---|---------|------|------|
| B1 | 320px 幅で横スクロールなし | WCAG 1.4.10 Reflow | `scrollWidth <= clientWidth` |
| B2 | 768px 幅で grid が 1カラム化 | §3 必須対応 | `grid-template-columns: 1fr` |
| B3 | 200% zoom で水平オーバーフローなし | WCAG 1.4.4 Resize Text | `scrollWidth <= clientWidth` |
| B4 | タッチターゲット実測 44x44px 以上 | WCAG 2.5.5 (AAA) | `boundingRect >= 44` |
| B5 | フォント最小 12px | Lighthouse 基準 | 全テキスト要素 `fontSize >= 12` |

実行: `npm test` または `bash .claude/scripts/responsive-test.sh`

## 8. wiki 参照信頼性の原則（pd#113, 2026-06-16）

wiki/sources/ の各ページは、人間も Claude も本文に辿れる識別子を最低1つ持つ必要がある。

| 優先順位 | 識別子 | 備考 |
|---------|--------|------|
| 1 | DOI | 全ドメイン共通。書誌情報セクションに必ず記載 |
| 2 | PMID (PubMed) | 生命科学・医学・心理学系。EuropePMC REST で abstract 回収可能 |
| 3 | PMC ID | PMC 収録論文。フルテキスト回収可能 |
| 4 | arXiv ID | プレプリント系 |
| 5 | 安定 OA URL | archive.org / 機関リポジトリ等 |

**manifest_id**: cs source-note 由来のページは `source.manifest_id` に `DXX-SYY` 形式で記載する。

**wikilink の `/` 禁止**: 年号範囲を含むタイトル（例: `van Gennep 1909/1960`）へのタイトルベース wikilink は basename 誤抽出を引き起こす。`[[sources/FILE|ラベル]]` または aliases を使用すること。`wiki-lint.mjs` WL-6 が自動検出する。

## 8b. 却下履歴 — 試して合わなかった手法

再提案を防ぐために記録する。削除は pjdhiro 承認が必要。

| 日付 | 手法 | 理由 |
|------|------|------|
| 2026-03-26 | 本文テキストに text-shadow のみ（パネルなし）で可読性確保 | 0.9rem の本文ではグローが視認できない。見出しには有効だが本文には不十分 |
| 2026-03-26 | 全要素に同一の glow-panel パネルを適用 | 全部がブロックになり構造のメリハリが消える。見出し/本文/カード/リンクで差別化が必要 |
| 2026-07-03 | 公開 LP（reader/three-and-seven.html 初版）を index.html の VI と無関係な warm-light 独自テーマ（独自パレット #0F6E56 等・埋め込み standalone CSS・グロー体系なし・シェーダーなし）で新造 | **pjdhiro 却下（コンセプト不一致）**。公開ページはサイト VI（透過するコンテンツ + グロー体系 + 確立パレット）の継承が必須。§0a に明文化 |
| 2026-07-08 | READER の **720°二重被覆**を対話的 Micro-world で表現（「裏の針／糸の球／ベルト」の3描画を試作。`src/reader-microworlds.js`・数理は node 検証済み） | **pjdhiro 却下「720度に関するものがわかりづらい」（pd#128・720°の図だけ撤去）**。数理は正しくても、スピノル（720°）は抽象度が高く触れても直感に繋がらなかった。他の3図（複素数回転・四元数非可換・零因子）は有効として**維持**。対話的可視化が効く題材と効かない題材がある。再挑戦はしっくり来る表現の当てを得てから。経緯 RR-014 §G-3 |

## 9. 誤解FAQ アコーディオン（コンテンツパターン）

pjdhiro との対話で生まれたパターン（pd#110, 2026-05-31）。pd の AI協働サイトと pjdhiro 概念ページの両方に適用する。

**原則**: 対話で賢い読者（Claude を含む）が踏んだ誤解は、そのまま読者が知りたいこと。本文を簡潔・断定回避で保ちつつ、誤解を `<details>` アコーディオンに隠して併置する。

| 項目 | ルール |
|------|--------|
| 要素 | `<details><summary>よくある誤解</summary>…</details>`（JS ゲートしない） |
| 中身 | **誤解 → なぜ違うか → 正しい捉え方** の3点構成 |
| 位置 | 各主要概念の直後に添える。本文には混ぜない |
| 発見性 | 折りたたみでも DOM に載るのでクローラ・LLM は読める（seo-llm.md 準拠） |
| 蓄積 | 新たな誤解が吟味で出るたび pd#110 の表に追記してから実装する |

却下: 誤解を本文に直接書き込む案 → 本文が防御的になり読みにくい。折りたたみで「知りたい人だけ開く」形にする。

### 9a. 読み物アコーディオンの3種別（2026-07-05 対話で確立・2026-11-01 ⓘ 補足を追加）

読み物ページ（reader）の `<details>` は**同列に並べない**。3種別を見た目で区別する:

| 種別 | 意味 | マークアップ | 見た目（reader.css） |
|------|------|-------------|---------------------|
| 「詳しく」 | 本筋の同じ話の深掘り | `<details>`（素） | glass カード＋影・開閉ラベル「詳しく」 |
| 「コラム」 | 本筋から独立した寄り道・補足 | `<details class="pd-column">` | 背景透過・破線枠・影なし・summary 縮小・開閉ラベル「寄り道」 |
| 「ⓘ 補足」 | 論と無関係なもの（図の操作説明・出典リンクの列など） | `<details class="pd-info">` | 背景・枠・影なし・小さな文字・▶ の代わりに丸囲みの i・開閉ラベルなし。寄り道よりさらに一段控えめ |

背景: pjdhiro 指示「全く全体の話と無関係な事柄は同列に並べるべきでない。補足的な位置付けであることが明確な方が良い」。正本ルールは two-axis-closure README §3 ルール22。

「ⓘ 補足」は 2026-11-01 の pjdhiro 指示で追加（pd#138）：「論と無関係なものは i アイコンでアコーディオンにしまって」。図の見方・操作説明・出典リンクの列が対象。論を裏付ける深掘り（例: 物理の事実の箇条）は ⓘ ではなく「詳しく」にしまう。

## 10. Micro-worlds（触って直感できる対話的図・コンテンツパターン）

pd#128（2026-07-08）で確立。Litt 三技法の一つ「Micro-worlds」（CN-011 §2）を読み物に実装するパターン。読者が**その場で触って挙動を直感**できる対話的可視化を置く。現在 READER に3図（複素数回転・四元数非可換・零因子）。

| 項目 | ルール |
|------|--------|
| 配置 | 正本 MD に空のプレースホルダ `<div class="microworld glow-card" data-microworld="{kind}" role="group" aria-label="…">` を書く。中に `<p class="mw-title">` と `<p class="mw-fallback">`（no-JS 用の短い説明文）だけを置く |
| 実装 | `src/reader-microworlds.js`（vanilla・**依存ライブラリなし**）が `[data-microworld]` を探して canvas＋コントロールをマウントする。インライン `<script>` や埋め込み SVG は書かない（後処理で glow-card に二重包装されるため SVG は JS 生成に限る） |
| VI | §0a 準拠。色は `getComputedStyle` で tokens（`--ink/--navy/--gold/--coral/--mid/--mute`）を読む。新色ハードコード禁止。パネルは `glow-card`、スタイルは `reader.css` の `.mw-*` |
| 表示保証 | 折りたたみ `<details>` 内でも壊れないよう、サイズが実際に変わった時だけ canvas をクリアし（同幅の再代入で空白化しない）、`ResizeObserver`＋`<details>` の `toggle` で必ず再描画する |
| アクセシビリティ | コントロールは実体 `<button>`/`<input type=range>`（キーボード可・44px 以上）。状態は `aria-live` の `.mw-status` で読み上げる。JS 不可環境は `.mw-fallback` の文が残る（`.mw-ready` で JS 時のみ隠す・SEO/no-JS 発見性 seo-llm.md 準拠） |
| 正確さ | 図が主張する数理は機械検証してから出す（Cayley–Dickson 乗算・八元数の合成則・16元数零因子は node で検証） |
| 題材の向き不向き | **触れることが直感に効く題材だけ**に使う。抽象度が高い題材（例: 720°二重被覆＝スピノル）は、触れても直感に繋がらず却下された（§8b・RR-014 §G-3）。しっくり来る表現の当てを得てから採る |

却下しない代替として、静的 SVG は引き続き併用してよい（Micro-worlds は静的図を**置き換えず補う**）。監査は skill `reader-litt-conformance`。

## 11. Shared Spaces（共有面の surface・コンテンツパターン）

pd#128（2026-07-08）で確立。Litt 三技法の一つ「Shared Spaces」（CN-011 §2）を読み物に実装するパターン。Micro-worlds と違い**対話的ギミックではない**——JS ウィジェットや偽のフォームを作らない。

| 項目 | ルール |
|------|--------|
| 本質 | 「共有された心的モデル」の実体（pd では **RR-010 判定台帳＋公開リポジトリ**）を、ページ上に **surface**（現在地を可視化）し、読者の**参加導線を実在**させるコンテンツ小節。新規の協働 UI は作らない |
| 中身 | ①共有面が何で、誰が何を持ち寄るか（pjdhiro＝問い・判定／AI＝調査・候補）②**いまの状態**（採用/保留/見送り）を簡潔に。詳細は既存の該当節（§7 スコアボード）と台帳へリンクし**重複を避ける**③読者が同じ面に入る**実在の入口**（公開リポジトリ・末尾の問い返し） |
| honest 制約 | **無いものを主張しない**。偽の投稿フォーム・存在しないリアルタイム共同編集を作らない。live でなければ「公開された非同期の作業台」と scope を明示する。誇張・通説丸め禁止（§0a・一面の探究スタンス） |
| VI | §0a 準拠。素の Markdown（見出し＋箇条書き＋既存節へのリンク）で書く。build で `.glow-heading` が付く。standalone CSS 新造しない |
| 判定の分離 | 「✅ に達したか＝この surface が"共有の場"としてしっくり来るか」は pjdhiro のしっくり感（専権）。CLI は誠実に実装・自己監査し、**公開前に確認を仰ぐ**（720° §8b と同じ姿勢） |

監査は skill `reader-litt-conformance`（L3）。記録は RR-014 §G-4・CN-011 §2/§4。

## 12. 理解度テスト（読者向け・任意クイズ／コンテンツパターン）

2026-07-08 の pjdhiro との対話で確立、2026-07-10 に配置を改定。Litt の「解説に埋め込むクイズ」を読者向けに実装するパターン。

| 項目 | ルール |
|------|--------|
| **関門にしない（必須）** | **「答えないと先に進めない」ゲートは禁止**（pjdhiro 指示 2026-07-08「クイズに答えないと先に進めないというのはマズイ」）。答えなくても・間違えても・読み飛ばしても先へ進める任意の自己チェックとして置く。speed regulator の役目は読者ではなく公開ワークフロー側の LLM 読解テストが担う（skill `reader-comprehension`） |
| **配置（その都度）** | **問う内容を教えたセクションの直後に、その都度置く**（pjdhiro 指示 2026-07-10「振り返りテストはその都度がいい」）。末尾一括は不採用（「ここまでの本筋を振り返る」等の位置依存の文言が必要になり、質問と本文も離れる）。正本 MD に静的マークアップ（`<div class="reader-quiz glow-card" data-quiz>` ＋ 質問・`<ol class="quiz-choices">`・`<details class="quiz-explain">`答えと解説）を書く |
| **前置きしない** | ブロックの見出しはラベル `<p class="quiz-label">理解度テスト</p>` のみ。導入・説明の段落は付けない（pjdhiro 指示 2026-07-10「特になんの解説もいらない。理解度テストとだけあれば」）。h2 見出しにはしない（TOC に出さない） |
| 実装 | `src/reader-quiz.js`（vanilla・依存なし）が選択肢をボタン化し「押すとその場で答え合わせ」を足す。複数ブロック対応（`[data-quiz]` ごとに初期化）。インライン `<script>` 禁止。no-JS では静的リスト＋ details で同内容が読める（SEO/LLM 発見性も同時に満たす） |
| VI | §0a 準拠。パネルは `glow-card`、スタイルは `reader.css` の `.quiz-*`（tokens の上のみ）。選択肢は実体 `<button>` 44px 以上、状態は `aria-live` の `.quiz-status` |
| **CSS 詳細度の罠** | reader 本文は `<article class="reader-article prose-block glow-text">`。`p`/`ol` を対象にする単独クラスセレクタ（0,1,0）は **`.prose-block p`（0,1,1）に負けて適用されない**。`.reader-article .quiz-label` のように `.reader-article` スコープ（0,2,0）で書くこと |
| 文面 | 誤答への応答は誤りの指摘でなく気づきの提供（「そう読めるのも自然です」＋根にある実在現象を解説に書く）。「先へ進める」「ここまでの」等、配置位置に依存する言い回しを質問文・導入に書かない |

## 13. READER flow レイアウト（一枚ガラスカラム＋章アコーディオン＋常設/ドロワー目次）

pjdhiro 指示（2026-07-14、energy-flow READER の対話で確立）:
「reader html は cs の wave-vortex ページを参考に。アウトラインとアコーディオン、目次は garage のものを使う」。

| 要素 | 参考元 | pd での実装 |
|------|--------|------------|
| 一枚ガラスの読書カラム | cs `reader/wave-vortex.html` の `.wrap` | `.reader-wrap`（`--glass-bg-medium`＋blur。シェーダーは減光せず、可読性はカラムが担う） |
| 草稿バナー | cs `.draft-banner` | 同名クラス。左ボーダーは `--gold` |
| 章アコーディオン | garage `details.sec`（見出しタップで開閉・＋/−） | build script `fold_sections()` が h2 章を自動で畳む。id は h2 のものを details に移す（既存アンカー互換） |
| 本文中の畳みカード | garage `details.acc` | MD の `<details>` に build が `.acc` を付与 |
| 目次 | garage TOC（PC=左常設サイドバー ≥1260px / モバイル=右下「☰ 目次」＋右ドロワー・スクロール連動ハイライト・主/サブタイトル分解） | `src/reader-flow.js` がクライアント側で生成。目次タップで章を開いてスクロール |

制約と学び:

- **VI は維持**: シェーダー背景（reader-app.js）と `tokens.css` 変数のみ使用。cs/garage の配色はコピーせず、型だけ移植する（§0a は不変）
- スタイルは `src/styles/reader-flow.css`（`body.reader-flow` スコープ）。three-and-seven の glow 型と併存し、build script の PAGES で `style: glow|flow` を選ぶ
- **native smooth scroll は使わない**: このシェーダー背景ページでは `scrollTo/scrollIntoView` の `behavior:'smooth'` が rAF ループと干渉して途中停止する事象を確認。`reader-flow.js` の自前イージング＋着地の遅延補正（garage の 420ms 補正と同型）で代替する
- **比較表は表のまま、スマホでも横スクロールさせない**（pjdhiro 2026-11-04・pd#144「表の方が見やすい。横スクロールせずに見たい。スマホを考慮してほしい」）。正本 MD で表を `<div class="tablefit">` に囲む（`table-layout: fixed`・600px 以下で文字と余白を詰める・B1）。三列をほぼ均等に割るときは `tablefit cols-3`（32%／30%／残り）。カード列に崩す案は不採用
- **読み物の参照は、一つの表にまとめる**（pjdhiro 2026-11-09・love-history「参照の出し方がおかしくない？全て一つの表でいいよね。カラムに項目・読んだ形・確かめ先を加えれば」）。列は「分野｜出典｜読んだ形｜確かめ先」で、確かめ先は一行ずつ URL のリンクにする。章ごとの「出典：」の行と、照合の状態の別の一覧は置かない。表は `<div class="tablefit refs">` で囲む（`reader-flow.css`：13%／43%／17%／残り。出典の列を広く取り、320px でも語の途中で折れにくくする）
- **pjdhiro 本人の言葉の引用は引用カードに載せる**（pjdhiro 2026-11-04・pd#144「pjdhiro の問い： のように私の発言集を引用するときは特定のスタイルをつけて。愛と重力の記事のように。」）: `<strong>pjdhiro の問い／見方／体験…：</strong>` で始まる段落は `blockquote.reader-callout.reader-request`（gravity-love と同じ・紺の左罫のカード）。flow 型は build（`fold_sections` の前）が自動で包むので、正本 MD は段落のまま書く
- **節の中の問いは小見出し（h3）で立てる**（pjdhiro 2026-11-04・pd#144「サブタイトルのような形で問いを目立たせることはできないかな？」→採用）: 段落頭の太字（`**問い。** 本文…`）でなく、正本 MD で `### 問い`（句点なし）を置き、その下の段落が答える形にする。見た目は既存の `.reader-article h3`（構成要素の「1. 駆動源 — …」と同じ）。目次は章（h2）だけを拾うので h3 は目次に出ない。実例＝love-driven-dev 入口の三つの問い
- **畳みの中で概念を一つずつ説明するときは、概念名を見出しにする**（pjdhiro 2026-11-04・pd#144「概念名を句読点でなくタイトルとしたい」「テーブルに近い構成だよね」）。表の行（群）を h4、概念名を h5 にして表と同じ順に並べる。太字＋句点で本文に続ける形は使わない。項目が揃う説明（出どころ／考え方／よく効く場面／届かないところ）は、概念ごとに `<div class="tablefit cols-2">` の二列の小さな表にする（「２列三行がいい」。上の一覧表と同じ列を繰り返さない＝「単に概念を増やしただけで重複」）。CSS＝`reader-flow.css` の `details.acc h4/h5`・`.tablefit.cols-2`。
- **ページ全体の転回点は、章の外に独立した一文として置く**（pjdhiro 2026-11-04・pd#144「全体的なターニングポイントのこと」「独立して章を繋ぐ言葉として印象的に残す」）。正本 MD の章末に `<!--TURN-->…<!--/TURN-->` で書くと、build が章（details.sec）の外、次の章との間に `.reader-turn`（金の細線で上下を区切る中央寄せ・一行目を大きく）として出す。章を閉じていても見える。乱用しない＝ページに一つか二つ。
  - **部に分けた長い読み物では、部と部のあいだに一つずつ置く**（2026-11-09・pjdhiro・Love駆動開発の読み物の接続四つの案へのコメント「この読み物の細部にのめり込んだ思考をリセットするのが目的で部の間に接続を入れているのです」）。このときの役目は、印象に残すことでなく、細部に入った視点を全体へ戻すこと。数は部の数で決まり（Love駆動開発は四つ）、「一つか二つ」は部に分けていないページの目安として残す。文は短く、包括的な語で書く。書き方は `docs/rules/stance.md` 2-4 の Love駆動開発の行。
- **本文で項目ごとに同じ型の段落が並ぶときも、ラベルは太字＋句点でなく小見出しにする**（pjdhiro 2026-11-04・pd#144 構成要素の「主張」「仮説」）。MD は h3 の下に `#### 主張` のように書く。章本文の直下の h4（`.secbody > h4`）は金の小さな字のラベルとして出る。畳みの中の h4（群の見出し）とは別の見た目。
- **リンクは、行き先を印で見分けられるようにする**（pjdhiro 2026-11-09・#91「リンクが別ページに飛んでいることがわかりづらい」。見本を並べた三案から選んだ）。本文の中のリンクは、ページの中へ飛ぶもの（`#…`）は印なし、同じサイトの別ページへ飛ぶものは紙の印、サイトの外へ出るものは箱から出る矢印を、リンクの後ろに付ける。`reader-flow.css` が href から付けるので、正本 MD には何も書かない。印は文字（↗ など）でなく線画のマスクで描く（iPhone で絵文字に化けない・色はリンクの色に従う）。印は改行しない空白に載せ、印だけが次の行の頭に送られないようにする。リンクカード（`.reader-linkcard`）には付けない
- flow 型ページの正本 MD には `<!--TOC-->` マーカーを置かない（目次はクライアント生成。build が混入を検査する）

## 14. ツールページ（スクリーナー）と読み物ページの共通 Menu（2026-10-24 対話で確立）

pjdhiro 指示（2026-10-24、ものの見方の広さスクリーナーの対話）:「なるべく『答える』までの距離を減らしたい」「目次も TOC など別のものに」「プロジェクトデザイン論という冒頭のリンクよりも、統一感のある menu に」「日付とバージョンで状態を管理する」「ルートの index にツールという項目を」。

| 要素 | 決定 | 実装 |
|------|------|------|
| ページの型 | 対話して使うページも flow 型（§13）に載せる。章はすべて畳み、**操作する章だけ最初から開く** | 正本 MD の h2 直後に `<!--OPEN-->` を置く → `fold_sections()` が `details.sec` に `open` を付ける |
| 目次 | 本文中の目次カードは使わない。§13 の garage 型 TOC（PC 左常設／モバイル右下「☰ 目次」） | `src/reader-flow.js` |
| 冒頭のリンク | 「プロジェクトデザイン論」などの単発リンクを冒頭に置かない。**トップと同じ Menu**（右上の Menu ボタン＋ドロップダウン）を置く | ページに `.top-bar` の `[data-menu-toggle]` と `<nav class="site-menu" id="site-menu">`、`src/reader-menu.js` が `site-data.mjs` の `getMenuItems({context: "reader"})` を `ui/menu.js` で描画（項目の正本は一か所） |
| 状態の表示 | 「監修中」「作成中」などの状態の札や注記を置かない。**最終更新日とバージョン**で示す | テンプレートの `<!--VERSION-->` を build がスクリーナーの正本 JSON の `version` から差し込む |
| トップの導線 | トップに「ツール」節（「問い」節と同じカード型）を置き、Menu にも「ツール」見出しとリンクを足す | `index.html` の `#tools`、`site-data.mjs` の `TOOL_MENU_LINKS` |
| 冒頭の言葉 | 冒頭のリードとサブタイトルに、興味を引く語（視座・メタ認知・インクルーシブ（包摂）・非二元性）を置く。中身の三軸（視座・メタ認知・包摂）と一致する語に限る | 正本 MD の冒頭段落・テンプレートのサブタイトル・META/JSON-LD の keywords |

却下・置き換え:

- 6 列の表（帯・呼び方・視座・メタ認知・包摂・出典）は、スマホ幅で枠からはみ出した（表 689px／枠 359px）。**長い文が並ぶ多列の表は、項目ごとの見出し＋箇条書きに組み替える**
- 本文中の目次カード（glow 型の `<!--TOC-->`）は、答える章までの距離を伸ばすので、ツールページでは使わない

追記（2026-11-03・love-driven-dev）: 読み物ページにも同じ Menu を置く場合、冒頭の草稿バナー（`.draft-banner`）が fixed の Menu ボタンの下に潜る。`reader-flow.css` で `.top-bar ~ #content .reader-wrap > .draft-banner:first-child` にだけ上余白を足して避ける（スクリーナーはバナーを持たないので影響なし）。
