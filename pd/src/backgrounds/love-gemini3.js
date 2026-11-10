// Love駆動開発の背景（Gemini 作・三つ目・2026-11-10）。`?bg=gemini3`。
// 案：双曲スパイラル・複素ポテンシャルの流線と、中央の液体のような面（一つ目 love-gemini.js・二つ目 love-gemini2.js）。
// Gemini が出した HTML の <script type="module"> をそのまま移した。Claude が直したのは、動かすための二か所だけ：
//   ① THREE.ParametricGeometry は three.js r0.183 の本体に無いので、parametric-geometry.js の同じ働きのものを使う
//   ② 頂点の色（attribute color）をシェーダーで使うので、ShaderMaterial に vertexColors: true を足す
// 見た目・数式・パラメータには手を入れていない。

    import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';
    import { ParametricGeometry } from './parametric-geometry.js';

    /**
     * ============================================================================
     * 【数式と視覚的意味付けの注記】
     * ----------------------------------------------------------------------------
     * 1. 双曲スパイラル・複素ポテンシャル流線（Hyperbolic Complex Potentials）
     *    - [意味: 1.見えない源 / 3.波と渦]
     *    - 中心に不可視の特異点を持ち、そこへ収束・旋回する無数の白銀の粒子軌跡。
     * 2. 位相的クライン・トーラス変形面（Parametric Liquid Surface）
     *    - [意味: 2.二つで一つ]
     *    - 中央でゆっくりと形を変える液体のような面。表裏が一体となった連続曲面。
     * 3. 非線形カオス摂動（Non-linear Chaos Modulation）
     *    - [意味: 4.制御しきれない]
     *    - スクロール（uScroll）と時間（uTime）に連動してパラメータが非周期的に変化。
     * ============================================================================
     */

    let scene, camera, renderer;
    let particleSystem, particleGeo, particleMat;
    let liquidMesh, liquidMat;
    let animId = null;

    let targetScroll = 0;
    let currentScroll = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isMobile = Math.min(window.innerWidth, window.innerHeight) < 700;

    const particleCount = isMobile ? 40000 : 80000;
    let positions, colors, randoms;

    // 指定された色パレット
    const colorSilver = new THREE.Color(0xe2e8f0);
    const colorNavy   = new THREE.Color(0x2e3a6e);
    const colorGold   = new THREE.Color(0x8a7040);
    const colorCoral  = new THREE.Color(0xb04050);

    function init() {
      const container = document.getElementById('webgl-container');
      if (!container) return;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x05070d); // 深い紺の地（不透明）

      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 16);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.domElement.dataset.background = 'love-gemini3';
      container.appendChild(renderer.domElement);

      buildParticleLayers();
      buildLiquidCenterSurface();

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);
      if (isFinePointer) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
      }
      document.addEventListener('visibilitychange', onVisibilityChange);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        renderFrame(0);
      } else {
        animate(0);
      }
    }

    function buildParticleLayers() {
      particleGeo = new THREE.BufferGeometry();
      positions = new Float32Array(particleCount * 3);
      colors = new Float32Array(particleCount * 3);
      randoms = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // 画面全体・端まで美しく広がる重層的な配置
        const u = Math.random();
        const r = 1.0 + Math.random() * 12.0;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 0.8;

        positions[i * 3 + 0] = r * Math.cos(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.sin(phi) * 0.5;

        randoms[i * 3 + 0] = Math.random();
        randoms[i * 3 + 1] = Math.random();
        randoms[i * 3 + 2] = Math.random();

        // 圧倒的多数の白銀の中に、控えめな指定アクセントカラーを配置
        const randC = Math.random();
        let c = colorSilver;
        if (randC > 0.95) c = colorGold;
        else if (randC > 0.90) c = colorNavy;
        else if (randC > 0.87) c = colorCoral;

        colors[i * 3 + 0] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

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

          void main() {
            vColor = color;
            vec3 pos = position;

            float t = uTime * 0.3 + aRandom.x * 6.28;
            float s = uScroll;

            // 複素ポテンシャルと渦の重ね合わせ（見えない源と流線の層）
            float r = length(pos.xy);
            float angle = atan(pos.y, pos.x);

            // 渦を巻く層構造
            float spiral = angle + t * 0.5 + r * (0.2 + s * 0.5);
            float flowDist = 1.0 / (0.2 + r * 0.4);

            pos.x += cos(spiral) * flowDist * 0.8;
            pos.y += sin(spiral) * flowDist * 0.8;
            pos.z += sin(r * 1.5 - t * 2.0 + s * 3.14) * 0.6;

            // マウスの微小な追従
            pos.x += uMouse.x * (1.0 - aRandom.y * 0.5);
            pos.y += uMouse.y * (1.0 - aRandom.y * 0.5);

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            // 端に向かって美しく溶け込むグラデーション
            float depthScale = clamp(16.0 / max(-mvPosition.z, 0.1), 0.0, 2.0);
            gl_PointSize = (1.0 + aRandom.x * 1.8) * depthScale;
            vAlpha = clamp(0.4 + sin(t * 1.5 + aRandom.y * 10.0) * 0.3, 0.05, 0.85);
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
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

    function buildLiquidCenterSurface() {
      // 「創造とは」の中心にあった液体のように形を変える面を、Love駆動の解釈で再構築
      const geo = new ParametricGeometry((u, v, target) => { // Claude が直した（①）
        u = u * Math.PI * 2;
        v = v * Math.PI * 2;

        const r = 2.2 + Math.sin(u * 3.0) * 0.4;
        const x = r * Math.cos(u) * (1.0 + 0.3 * Math.sin(v));
        const y = r * Math.sin(u) * (1.0 + 0.3 * Math.cos(v));
        const z = Math.sin(u + v) * 0.8;

        target.set(x, y, z);
      }, 50, 50);

      liquidMat = new THREE.ShaderMaterial({
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
            float s = uScroll;

            // スクロールと時間でゆっくり形を変える液体状のうねり
            pos.z += sin(pos.x * 1.2 + uTime * 0.7 + s * 4.0) * 0.4;
            pos.xy += cos(pos.yx * 0.8 + uTime * 0.5) * 0.2;

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
            float fresnel = pow(clamp(1.0 - dot(viewDir, vNormal), 0.0, 1.0), 2.5);

            vec3 baseCol = mix(vec3(0.04, 0.07, 0.14), vec3(0.75, 0.8, 0.9), fresnel);
            vec3 goldGlow = vec3(0.54, 0.44, 0.25) * fresnel * 0.35;

            gl_FragColor = vec4(baseCol + goldGlow, fresnel * 0.3);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      liquidMesh = new THREE.Mesh(geo, liquidMat);
      liquidMesh.scale.set(1.5, 1.5, 1.5);
      scene.add(liquidMesh);
    }

    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = window.scrollY / maxScroll;
      }
    }

    function onPointerMove(e) {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 1.2;
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

      currentScroll += (targetScroll - currentScroll) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      if (particleMat) {
        particleMat.uniforms.uTime.value = t;
        particleMat.uniforms.uScroll.value = currentScroll;
        particleMat.uniforms.uMouse.value.set(mouseX, mouseY);
      }
      if (liquidMat) {
        liquidMat.uniforms.uTime.value = t;
        liquidMat.uniforms.uScroll.value = currentScroll;
      }

      if (particleSystem) {
        particleSystem.rotation.y = t * 0.03 + currentScroll * 0.9;
        particleSystem.rotation.x = Math.sin(t * 0.015) * 0.15;
      }
      if (liquidMesh) {
        liquidMesh.rotation.y = -t * 0.04 - currentScroll * 0.6;
        liquidMesh.rotation.z = t * 0.02;
      }

      renderer.render(scene, camera);
    }

    function animate(timeMs) {
      renderFrame(timeMs);
      animId = requestAnimationFrame(animate);
    }

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
      if (liquidMesh) {
        liquidMesh.geometry.dispose();
        liquidMat.dispose();
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    }

    init();
