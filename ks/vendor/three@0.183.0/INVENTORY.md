# three@0.183.0 vendored inventory

- source package: npm `three@0.183.0`
- vendored at: `2026-04-01`
- contents: ks が使うファイルだけ（2026-11-08 に絞った。前は `build/`・`examples/jsm/`・`src/` を丸ごと置いていて 24MB あった。uminomae/project-design-theory#66）
  - `build/three.module.js`・`build/three.core.js`
  - `examples/jsm/loaders/GLTFLoader.js` と、それが import する `utils/BufferGeometryUtils.js`・`utils/SkeletonUtils.js`
  - `examples/jsm/postprocessing/`：`EffectComposer.js`・`RenderPass.js`・`ShaderPass.js` と、それらが import する `Pass.js`・`MaskPass.js`
  - `examples/jsm/shaders/CopyShader.js`
  - package metadata (`package.json`, `LICENSE`, `README.md`)

## runtime references

- `ks/index.html`
- `ks/devlog.html`
- `ks/consciousness.html`

（三つとも import map の `three` と `three/addons/`）

## note

`three@0.160.0` was replaced as part of `techo#78` / `techo#77` follow-up work to align active entrypoints on Three.js `r183`.

選び方：三つの入口の import map から、`ks/src/` の import（動的な import も）をたどり、vendor の中で読まれるファイルを集めた。`ks/src/` が `three/addons/` から読むのは GLTFLoader・EffectComposer・RenderPass・ShaderPass の四つだけ。
足りないファイルが出たら、npm `three@0.183.0` の同じパスから写し、ここに足す。
