# startup-error

Boot 失敗 / runtime error の可視化 overlay。boot bootstrap と runtime handler が共有。

## 構成

| file | 用途 |
|------|------|
| `overlay.css` | overlay/banner 表示スタイル |
| `overlay.js` | error format / overlay 生成 / event handler installer |

## 使い方

```html
<link rel="stylesheet" href="./startup-error/overlay.css">
```

```js
import { installStartupErrorHandlers, showStartupErrorOverlay, showStartupWarningBanner } from './startup-error/overlay.js';

installStartupErrorHandlers();
// 任意のタイミングで:
// showStartupErrorOverlay(err);
// showStartupWarningBanner('config not loaded — using defaults');
```

## token

- `--ds-font-mono-ui` (overlay font、fallback あり)
- `--ds-font-serif-ui` (banner font、fallback あり)
- `--app-topbar-actual-height` / `--app-topbar-height` (banner top offset、各 repo で setProperty / 定義可能、fallback `3.4rem`)

→ token override が必要な場合は consumer 側 CSS で定義する。

## 出自

cs/src/{startup-error-overlay.js, styles/startup-errors.css} (techo#129 Phase 2-A、pd#93)。

リファクタ点:
- token 名を `--ds-*` / `--app-*` に generic 化
- JS 識別子 `__kessonStartupError*` → `__pdStartupError*`
- `var(--cs-font-mono-system)` → `var(--ds-font-mono-ui, <fallback>)`
