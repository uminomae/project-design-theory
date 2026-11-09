// Love駆動開発の背景（Gemini 作・2026-11-10）。頼む文は pd/docs/gemini-prompt-love-background.md。
// Gemini が出した HTML の <script type="module"> をそのまま移した。Claude が直したのは、動かすための二か所だけ：
//   ① ParametricGeometry は three.js r0.183 の本体に無い。addons の版は import map（"three"）を前提に
//      していてこのページでは読めないので、同じ計算（addons の ParametricGeometry と同じ並び）を下に置く
//   ② 頂点の色（attribute color）をシェーダーで使うので、ShaderMaterial に vertexColors: true を足す
// 見た目・数式・パラメータには手を入れていない。

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

// three/addons/geometries/ParametricGeometry.js と同じ作り（頂点・法線・uv・面の並び）
class ParametricGeometry extends THREE.BufferGeometry {
    constructor(func, slices = 8, stacks = 8) {
        super();
        const indices = [], vertices = [], normals = [], uvs = [];
        const EPS = 0.00001;
        const normal = new THREE.Vector3(), p0 = new THREE.Vector3(), p1 = new THREE.Vector3();
        const pu = new THREE.Vector3(), pv = new THREE.Vector3();
        const sliceCount = slices + 1;
        for (let i = 0; i <= stacks; i++) {
            const v = i / stacks;
            for (let j = 0; j <= slices; j++) {
                const u = j / slices;
                func(u, v, p0);
                vertices.push(p0.x, p0.y, p0.z);
                if (u - EPS >= 0) { func(u - EPS, v, p1); pu.subVectors(p0, p1); }
                else { func(u + EPS, v, p1); pu.subVectors(p1, p0); }
                if (v - EPS >= 0) { func(u, v - EPS, p1); pv.subVectors(p0, p1); }
                else { func(u, v + EPS, p1); pv.subVectors(p1, p0); }
                normal.crossVectors(pu, pv).normalize();
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(u, v);
            }
        }
        for (let i = 0; i < stacks; i++) {
            for (let j = 0; j < slices; j++) {
                const a = i * sliceCount + j, b = i * sliceCount + j + 1;
                const c = (i + 1) * sliceCount + j + 1, d = (i + 1) * sliceCount + j;
                indices.push(a, b, d, b, c, d);
            }
        }
        this.setIndex(indices);
        this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    }
}

    /**
     * ============================================================================
     * 【数式と視覚的意味付けの注記】
     * ----------------------------------------------------------------------------
     * 1. ２つの可変ポテンシャル核（Thomas & Aizawa Chaotic Vector Fields）:
     *    - [意味: 1.見えない源]
     *    - 画面上には源点そのものは直接描かず、そこへ引き込まれ・反発する無数の白銀の
     *      流線軌跡（Instanced/Particle Flow Lines）の密度・速度・屈曲のみで「存在」を示します。
     *
     * 2. 位相的連続曲面（Dynamic Riemann & Möbius Tori Parametrics）:
     *    - [意味: 2.二つで一つ]
     *    - 2つの独立した螺旋に見えるものが、実は単一の連続面（表裏のない構造）として
     *      深部で液体のように流動変化します。「創造とは」の面と対になる兄弟的質感です。
     *
     * 3. 結合振動場と干渉波（Kuramoto Phase Dynamics / Wave Motion）:
     *    - [意味: 3.波と渦]
     *    - 空間全体に波の波紋と局所的な渦の発生・消滅（位相の同期と拡散）を計算。
     *
     * 4. 非線形摂動・非周期性（Non-linear Chaos Perturbation）:
     *    - [意味: 4.制御しきれない]
     *    - 時間・スクロール進行に伴いパラメータ（a, b, c）が非周期的カオス軌道を描き、
     *      同じ視覚的形状に二度と戻らない連続的な変化を生み出します。
     * ============================================================================
     */

    let scene, camera, renderer;
    let particleSystem, particleGeo, particleMat;
    let surfaceMesh, surfaceMat;
    let animId = null;

    // スクロール・マウス状態
    let targetScroll = 0;
    let currentScroll = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isMobile = Math.min(window.innerWidth, window.innerHeight) < 700;

    // 粒子パラメータ
    const particleCount = isMobile ? 35000 : 70000;
    let positions, colors, randoms, velocities;

    // カラーパレット設定
    // ベース: 深い紺 #060913
    // アクセント: navy #2e3a6e, gold #8a7040, coral #b04050, 白銀 #e2e8f0
    const colorSilver = new THREE.Color(0xdde5ed);
    const colorNavy   = new THREE.Color(0x2e3a6e);
    const colorGold   = new THREE.Color(0x8a7040);
    const colorCoral  = new THREE.Color(0xb04050);

    function init() {
      const container = document.getElementById('webgl-container');
      if (!container) return;

      // 1. シーン & カメラ Setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x060913); // 地の色（不透明）

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 18);

      // 2. レンダラー Setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.domElement.dataset.background = 'love-gemini';
      container.appendChild(renderer.domElement);

      // 3. 粒子軌跡（流線）の作成
      buildParticleSystem();

      // 4. 深部の微細な連続曲面（液体的な面）の作成
      buildSurfaceMesh();

      // 5. イベントリスナー
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);
      if (isFinePointer) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
      }
      document.addEventListener('visibilitychange', onVisibilityChange);

      // reduced-motion チェック
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        renderFrame(0);
      } else {
        animate(0);
      }
    }

    function buildParticleSystem() {
      particleGeo = new THREE.BufferGeometry();

      positions = new Float32Array(particleCount * 3);
      colors    = new Float32Array(particleCount * 3);
      randoms   = new Float32Array(particleCount * 3); // 乱数はJSで生成してAttributeで送る
      velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // 広範な3D空間に初期配置（画面の端まで美しく広がるように）
        const u = Math.random();
        const r = 3.0 + Math.random() * 12.0;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI;

        positions[i * 3 + 0] = r * Math.cos(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.sin(phi);

        randoms[i * 3 + 0] = Math.random();
        randoms[i * 3 + 1] = Math.random();
        randoms[i * 3 + 2] = Math.random();

        // 基本色: 大部分は白銀、ごく一部に控えめなアクセントカラー
        const randColor = Math.random();
        let c = colorSilver;
        if (randColor > 0.94) c = colorGold;
        else if (randColor > 0.88) c = colorNavy;
        else if (randColor > 0.85) c = colorCoral;

        colors[i * 3 + 0] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

      // シェーダーマテリアル（極細線・重ね合わせ輝度・安全な数式計算）
      particleMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) }
        },
        vertexShader: `
          uniform float uTime;
          uniform float uScroll;
          uniform vec2 uMouse;
          attribute vec3 aRandom;
          varying vec3 vColor;
          varying float vAlpha;

          // 安全な対数・累乗関数
          float safePow(float b, float e) {
            return pow(max(abs(b), 0.0001), e);
          }

          void main() {
            vColor = color;
            vec3 pos = position;

            // スクロールと時間によるベクトル場の可変（Thomas & Aizawa Chaos Combined）
            float t = uTime * 0.25 + aRandom.x * 6.28;
            float s = uScroll;

            // 2つの重力/引き込み源（見えない源）
            vec3 p1 = vec3(sin(t * 0.5) * 3.5, cos(t * 0.3) * 2.5, sin(t * 0.7) * 2.0);
            vec3 p2 = vec3(-sin(t * 0.4) * 3.5, -cos(t * 0.6) * 2.5, -sin(t * 0.3) * 2.0);

            vec3 d1 = pos - p1;
            vec3 d2 = pos - p2;

            float dist1 = max(length(d1), 0.1);
            float dist2 = max(length(d2), 0.1);

            // 流線ベクトル（渦と波のゆらぎ）
            vec3 v1 = vec3(-d1.y, d1.x + d1.z * 0.2, -d1.x * 0.3) / safePow(dist1, 1.2);
            vec3 v2 = vec3(d2.y + d2.z * 0.3, -d2.x, d2.y * 0.2) / safePow(dist2, 1.2);

            // スクロールによる形態変化（前半：極細の集約力 -> 後半：有機的拡張）
            vec3 flow = mix(v1, v2, sin(s * 3.14159 + aRandom.y) * 0.5 + 0.5);

            // 結合振動子的な波の干渉を加算
            float wave = sin(pos.x * 0.4 + pos.y * 0.4 + uTime + s * 4.0) * 0.15;
            pos += flow * (1.2 + wave);

            // マウスの緩やかな干渉
            pos.x += uMouse.x * (1.0 + aRandom.z);
            pos.y += uMouse.y * (1.0 + aRandom.z);

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            // 端に行くほど透過させ、中央すりガラス背景に美しく溶け込ませる
            float depthScale = clamp(15.0 / max(-mvPosition.z, 0.1), 0.0, 2.0);
            gl_PointSize = (1.2 + aRandom.x * 1.5) * depthScale;
            vAlpha = clamp(0.35 + sin(t + aRandom.y * 10.0) * 0.25, 0.1, 0.85);
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            // 円形のソフトパーティクル描画
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float opacity = smoothstep(0.5, 0.0, d) * vAlpha;
            gl_FragColor = vec4(vColor, opacity);
          }
        `,
        vertexColors: true, // Claude が足した（②）
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);
    }

    function buildSurfaceMesh() {
      // 深部で形を変える「二つで一つ」のパラメトリック連続曲面
      const geo = new ParametricGeometry((u, v, target) => { // Claude が直した（①）
        u = u * Math.PI * 2;
        v = v * Math.PI * 2;

        // 動的クライン/トーラス変型（有機的で表裏のない構造）
        const r = 3.5 + Math.sin(u * 2.0) * 0.8;
        const x = (r + Math.cos(u * 0.5) * Math.sin(v) - Math.sin(u * 0.5) * Math.sin(2.0 * v)) * Math.cos(u);
        const y = (r + Math.cos(u * 0.5) * Math.sin(v) - Math.sin(u * 0.5) * Math.sin(2.0 * v)) * Math.sin(u);
        const z = Math.sin(u * 0.5) * Math.sin(v) + Math.cos(u * 0.5) * Math.sin(2.0 * v);

        target.set(x * 0.8, y * 0.8, z * 0.8);
      }, 60, 60);

      surfaceMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uScroll: { value: 0 }
        },
        vertexShader: `
          uniform float uTime;
          uniform float uScroll;
          varying vec3 vNormal;
          varying vec3 vWorldPosition;

          void main() {
            vec3 pos = position;

            // スクロールに応じた波とうねり
            float env = sin(uScroll * 3.14159);
            pos.x += sin(pos.y * 1.5 + uTime * 0.8) * (0.3 + env * 0.4);
            pos.z += cos(pos.x * 1.5 + uTime * 0.6) * (0.3 + env * 0.4);

            vNormal = normalize(normalMatrix * normal);
            vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
            vWorldPosition = worldPosition.xyz;

            gl_Position = projectionMatrix * viewMatrix * worldPosition;
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uScroll;
          varying vec3 vNormal;
          varying vec3 vWorldPosition;

          void main() {
            vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = pow(clamp(1.0 - dot(viewDir, vNormal), 0.0, 1.0), 3.0);

            // 白銀メイン＋ほのかなアクセント光
            vec3 baseCol = mix(vec3(0.05, 0.08, 0.15), vec3(0.7, 0.75, 0.85), fresnel);
            vec3 goldGlow = vec3(0.54, 0.44, 0.25) * pow(fresnel, 2.0) * 0.4;

            vec3 finalCol = baseCol + goldGlow;
            float alpha = smoothstep(0.0, 1.0, fresnel) * 0.25;

            gl_FragColor = vec4(finalCol, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      surfaceMesh = new THREE.Mesh(geo, surfaceMat);
      surfaceMesh.scale.set(1.4, 1.4, 1.4);
      scene.add(surfaceMesh);
    }

    // ----------------------------------------------------
    // イベント制御 & レンダリングループ
    // ----------------------------------------------------
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = window.scrollY / maxScroll;
      }
    }

    function onPointerMove(e) {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    }

    function onResize() {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
        animId = null;
      } else {
        if (!animId && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          animate(performance.now());
        }
      }
    }

    function renderFrame(timeMs) {
      const t = timeMs * 0.001;

      // スクロールとポインタの慣性追従 (current += (target - current) * 0.05)
      currentScroll += (targetScroll - currentScroll) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // シェーダーユニフォーム更新
      if (particleMat) {
        particleMat.uniforms.uTime.value = t;
        particleMat.uniforms.uScroll.value = currentScroll;
        particleMat.uniforms.uMouse.value.set(mouseX, mouseY);
      }
      if (surfaceMat) {
        surfaceMat.uniforms.uTime.value = t;
        surfaceMat.uniforms.uScroll.value = currentScroll;
      }

      // シーン全体および曲面の緩やかな自転・うねり
      if (particleSystem) {
        particleSystem.rotation.y = t * 0.03 + currentScroll * 0.8;
        particleSystem.rotation.x = Math.sin(t * 0.02) * 0.2;
      }
      if (surfaceMesh) {
        surfaceMesh.rotation.y = -t * 0.04 - currentScroll * 0.5;
        surfaceMesh.rotation.z = t * 0.02;
      }

      renderer.render(scene, camera);
    }

    function animate(timeMs) {
      renderFrame(timeMs);
      animId = requestAnimationFrame(animate);
    }

    // クリーンアップ用関数の公開
    export function cleanup() {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (isFinePointer) {
        window.removeEventListener('pointermove', onPointerMove);
      }
      document.removeEventListener('visibilitychange', onVisibilityChange);

      if (particleGeo) particleGeo.dispose();
      if (particleMat) particleMat.dispose();
      if (surfaceMesh) {
        surfaceMesh.geometry.dispose();
        surfaceMat.dispose();
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    }

    // 初期化実行
    init();
