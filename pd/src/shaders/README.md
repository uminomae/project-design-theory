# Background Shaders

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `main-webgpu.js` | develop 採用の WebGPU 背景エントリ |
| `webgpu-background-core.js` | WGSL 数式移植の中核 |
| `main.js` | 旧 WebGL 参照（比較用） |
| `src/app.js` | 背景エントリを読み込むアプリ起点 |

## 採用シェーダー

| ファイル | 元バージョン | アプローチ |
|---------|-------------|-----------|
| main-webgpu.js | WebGPU math port | `main.js` の数式を WGSL に移植した背景 |

## ページ固有の背景

- `src/backgrounds/love-gemini.js`：Love駆動開発の背景（Gemini 作・2026-11-10）。`?bg=gemini`。頼む文は `pd/docs/gemini-prompt-love-background.md`。Gemini の出力から直したのは、動かすための二か所だけ（ファイルの頭に書いた）
- `src/backgrounds/love-field.js`：Love駆動開発の背景の見本（three.js の WebGL・三つ）。`reader-app.js` が body の `data-background="love-…"` か `?bg=orbit|lens|binary` のときに読み、失敗したら上のプールに戻す。見比べは `src/backgrounds/samples.html`（noindex）。`?motion=still` で止めた一枚を出す

## 方針

- develop では `main-webgpu.js`・`main3-webgpu.js`・`main4-webgpu.js` を採用する（`src/content/site-data.mjs` の `SHADER_PATHS`）
- **WebGPU が使えない環境では同名の WebGL 版にフォールバックする**（`main-webgpu.js` → `main.js`、`main3-webgpu.js` → `main3.js`、`main4-webgpu.js` → `main4.js`。`src/bootstrap/shaders.js` の `detectWebGPU` → `toWebGLFallbackPath`）。Safari 18 / iOS 18 以前は WebGPU が機能フラグで既定オフ（既定オンは Safari 26 / iOS 26 から）、Firefox も環境による。判定は `navigator.gpu` の有無だけでなく `requestAdapter()` が adapter を返すかまで見る
- したがって WebGL 版は比較用ではなく **フォールバックの本番コード**。WebGPU 版の数式を直したら WebGL 版にも同じ直しを入れる
- `?renderer=webgl` で WebGL 版を強制できる（フォールバック経路の確認用）

## iOS WebKit での数値安全（2026-11-05）

iPhone は Chrome でも WebKit で、WebKit は WGSL を Metal の relaxed math＋fast 数学関数でコンパイルする（WebKit `Source/WebGPU/WebGPU/ShaderModule.mm` の既定。Chrome/Dawn は precise）。Mac で正常でも iOS だけ色が崩れる原因になるので、WGSL では次を守る。

- ハッシュは**整数ハッシュ（u32 のビット演算・`main3-webgpu.js` の `uhash` / `hash22` / `hash21`）**にする。`fract(sin(x) * 43758.5453)` 型も、sin を使わない `fract(大きな積)` 型（Dave Hoskins 型）も不可。relaxed math ではインライン展開された呼び出し箇所ごとに丸めが変わり、積が整数境界をまたぐと fract が 0.998→0.000 に跳ねて同じ格子点で別の値になる（2026-11-05 iPhone 実測）。整数演算は math mode に依らずビット厳密
- 検証は `src/shaders/diag.html`（noindex）。端末の GPU で 4 本を描いて統計を出し、main3 の部品と「dla 最大の画素」の中間値を compute で出す。`?t=33&px=x,y` で画素を固定して Mac と突き合わせる
- `pow` の底を負にしない（`wcurve` のように引数を `clamp(x, 0.0, 1.0)` で閉じる）
- canvas は `alphaMode: 'premultiplied'` なので、出力は **色 ≤ alpha**。色を 1.0 超に持ち上げたら `min(…, 1.0)` で閉じてから alpha を掛ける（範囲外は WebGPU 仕様で「表示時の合成結果は未定義」）
- 端末ごとの再現は `index.html?shader=main3` のように URL で 1 本に固定する（`src/bootstrap/shaders.js` の `pickShaderPath`）
- 実機検証は **HTTPS の公開 URL** で行う。`navigator.gpu` は secure context（HTTPS か localhost）でしか露出しないので、LAN の `http://192.168.x.x:3004` で iPhone から開くと WebGL 版に落ち、WebGPU 経路は再現できない（2026-11-05）。Mac Safari は safaridriver（リモートオートメーション許可済み）で撮れるが、Safari 18 は WebGPU が機能フラグで既定オフ
- 2026-11-05 の修正で iPhone（WebKit WebGPU）の黄色の塊は消えた（pjdhiro 確認）。main-webgpu の `hash`（fract(積) 型）は有限差分を取らないため実害未確認で据え置き

## Gemini 向け生成プロンプト

新しいシェーダーを Gemini に依頼する際は、以下のプロンプトを使用する。

```
あなたは世界トップレベルのWebGL / GLSL / Three.jsエンジニアです。
以下の【技術要件】と【不変のフレームワーク仕様】を厳格に守り、
【テーマとビジュアル仕様】に基づいた、最高品質の単一HTMLファイル（JSインライン）を作成してください。

【テーマとビジュアル仕様】
・メインテーマ: 【量子、神話、意識などのキーワードを入力】
・ビジュアルの参考/数式のアプローチ: 【ShadertoyのURLや、「〇〇フラクタル」などの数式名を入力】
・カラーパレット: 白背景に映える、【深い墨色、シアン、金】などのエレガントな色彩。

【技術要件】
・Three.js (ES Module, cdn.jsdelivr.netからimport)
・Vanilla JSのみ（ReactやVueなどのフレームワーク不使用）
・<div id="webgl-container"> にマウント
・Rendererは `alpha: true`, `antialias: true`
・画面全体を覆う `PlaneGeometry(2, 2)` と `OrthographicCamera` を使用した2Dシェーダー構成
・メモリ解放用の `export function cleanup()` を実装すること

【不変のフレームワーク仕様（必ず実装すること）】
1. 白背景への調和 (Alpha Blending):
背景は黒ではなく「白（あるいはWebサイトの背景色）」です。GLSL内でアルファ値（透過度）を計算し、構造や光が存在しない空間は `alpha = 0.0` にして背景を透かしてください。加算合成のような白飛びではなく、上品なアルファブレンドを目指してください。

2. スクロール連動とLerp補間:
windowのスクロール率（0.0 ~ 1.0）を取得し、JSの `requestAnimationFrame` 内で `currentScroll += (targetScroll - currentScroll) * 0.05` のように慣性（Lerp）をつけて `uniform float u_scroll` に渡してください。

3. 5フェーズの空間変容 (Phase Transitions):
GLSL内で `u_scroll` を元に、以下の5つのフェーズの重み（w1〜w5）を `smoothstep` で作成し、メインの座標系 `p` を連続的に変容させてください。
- w1 (0-15%): ほぼ静止・真空
- w2 (15-35%): 波紋・波動・干渉縞
- w3 (35-55%): 空間の折り畳み・対称性・分裂
- w4 (55-80%): 強力な回転・渦・スピノール
- w5 (80-100%): Hopf Fibration / 特異点への収束 / トーラス状の射影

メインの【ビジュアル仕様】の計算は、この変容した座標系 `p` に対して適用し、ダイナミックな動きのメリハリを生み出してください。
```

## ES Module 変換手順

Gemini は HTML インラインで出力するため、以下の手順で変換する:

1. `<script type="module">` 内のコードを抽出
2. 一時ファイルとして `src/shaders/` 配下に保存して確認
3. 採用なら `main.js` に統合
4. 不採用なら比較終了後に削除
