# DESIGN-RULES-LDD — Love駆動開発のページだけの見た目の決まり

対象は `reader/love-driven-dev.html`（テンプレート `scripts/reader-love-driven-dev-template.html`）だけ。ほかの読み物は `DESIGN-RULES.md` のまま。

きっかけ：pjdhiro 2026-11-10「デザインルールを別にしたいね。LDD 特有の。白いすりガラスはおかしい。ダークな感じは ks、cs レポがいいと思う」（膜の渦の背景の上に、白いすりガラスの読書欄が乗っている画面を見て）。

## 1. 雰囲気

- **ダーク。** 暗い地の上で、背景（膜の渦）の光が見え、読書欄は暗いすりガラス、文字は明るい色。手本は cs の読み物（`cs/reader/wave-vortex.html`）と ks。
- **背景は膜の渦。** `src/backgrounds/love-membrane.js`（創造とはの `cs/src/scene-intent.js` の作り方を移したもの・WebGL）。body の `data-background="love-membrane"` で選ぶ。読み始めは 1:30 の位置から、中央の円の中心へ落ちていく。分析と経緯は `docs/gemini-prompt-love-background.md`。
- **背景の色は、創造とはと同じにしない。** 今の値は cs に近いので、pjdhiro が調整の板で決める（2026-11-10「創造とはと似てる色であることが、ちょっと嫌なんだ」）。決まったら `love-membrane.js` の既定に写す。

## 2. 色の付け方

- html に `class="ldd-dark"` を付け、`src/styles/reader-ldd-dark.css` を `reader-flow.css` のあとに読む。
- **トークンを差し替える。** pd の読み物は色をトークン（`tokens.css` の `--ink`・`--mid`・`--mute`・`--gold`・`--navy`・`--coral`・`--white`・`--glass-*`・`--glow-*`）経由で塗っているので、`html.ldd-dark` でトークンの値だけをダーク用にする。部品ごとの直しは最小にする。
- 差し替えは html に掛ける。図を描くスクリプト（`reader-gravity-love.js` など）は html 要素からトークンを読むので、body に掛けると図だけ明るい地の色のまま残る。
- 差し色の色相は tokens の gold・navy・coral のまま、暗い地で読める明るさに上げる（新しい色相を作らない。`DESIGN-RULES.md` §0a の考え方は継ぐ）。

| トークン | 既定（明るい地） | LDD（ダーク） | 役 |
|---|---|---|---|
| `--ink` | #0f172a | #e6ebf5 | 本文の強い文字 |
| `--mid` | #334155 | #c3cbdc | 本文 |
| `--mute` | #94a3b8 | #8e98b2 | 補助 |
| `--gold` | #8a7040 | #d2b47c | 小見出し・線 |
| `--navy` | #2e3a6e | #aebcff | 見出し・強調・押したボタンの面 |
| `--coral` | #b04050 | #e58a97 | 注意 |
| `--white` | #ffffff | #0b1020 | 明るい面・明るい文字（ダークでは役が逆になる） |
| `--glass-bg-medium` | 白 75% | 紺黒 64% | 読書欄 |
| `--glow-*` | 白 | 地の色 | 文字の後ろのにじみ |

## 3. 部品ごとの直し（トークンだけでは済まないもの）

- リンク：ブラウザの既定の青は暗い地で沈むので、明るい青（#9db4ff）。
- 明るい紺（`--navy`）の面に乗る文字（押したボタンなど）は、白でなく地の色（#0b1020）。
- 白い面を直に書いている部品（Menu・メニュー・言語の切り替え）は、暗いすりガラスに。
- 白い地のための白いにじみ（`.glow-card` の text-shadow）は外す。

部品を足したときは、その部品が色を直に書いていないかを見る。直に書いていたら、このファイルの 3 に足す。

## 4. 調整の板

- ページ右端の「dev」ボタンで、読者も背景の調整の板（`src/backgrounds/membrane-panel.js`）を開ける（pjdhiro 2026-11-10「dev ボタンを右端などに置いて呼び出せるといいね。読者も」）。板の値は、その人の画面の中だけで変わる。
- 調整のページは `src/backgrounds/studio.html`（画面のドラッグで時刻を送り戻す）。

## 5. 確かめること

- 3001 で、広い画面（1440）とスマートフォン（375）の両方で見る。冒頭・表・畳み・図（重力の井戸）・Menu・目次・dev ボタン。
- 文字が背景の明るいところに重なっても読めるか（読書欄のすりガラスが受け持つ）。
