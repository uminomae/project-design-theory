# three@0.183.0 vendored inventory (as)

- source package: npm `three@0.183.0`（`ks/vendor/three@0.183.0` から写した。中身は同じ）
- vendored at: `2026-11-07`
- contents: as が使うファイルだけ
  - `build/three.module.js`・`build/three.core.js`
  - `examples/jsm/postprocessing/`：`EffectComposer.js`・`RenderPass.js`・`UnrealBloomPass.js` と、それらが import する `Pass.js`・`ShaderPass.js`・`MaskPass.js`
  - `examples/jsm/shaders/`：`CopyShader.js`・`LuminosityHighPassShader.js`
  - package metadata (`package.json`, `LICENSE`, `README.md`)

## runtime references

- `as/index.html`（import map の `three` と `three/addons/`）

## note

今までは jsDelivr から integrity 無しで読んでいた。ks と同じく同梱にした（uminomae/project-design-theory#63）。
足りないファイルが出たら、`ks/vendor/three@0.183.0` か npm `three@0.183.0` の同じパスから写す。
