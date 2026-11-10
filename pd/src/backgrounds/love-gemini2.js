// Love駆動開発の背景（Gemini 作・二つ目・2026-11-10）。`?bg=gemini2`。
// 案：蔵本モデルの位相の同期と、トーラス上の流線群（一つ目は love-gemini.js）。
// Gemini が出した HTML の <script type="module"> をそのまま移した。Claude が直したのは、動かすための一か所だけ：
//   ① 頂点の色（attribute color）をシェーダーで使うので、ShaderMaterial に vertexColors: true を足す
// 見た目・数式・パラメータには手を入れていない。

    import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

    /**
     * ============================================================================
     * 【数式と視覚的意味付けの注記】
     * ----------------------------------------------------------------------------
     * 1. 蔵本モデル（Kuramoto Phase Synchronization）:
     *    - [意味: 2.二つで一つ / 3.波と渦]
     *    - 粒子群が持つ固有位相がスクロール（uScroll）と時間に応じて引き合うことで、
     *      散らばった状態から一筋の美しい調和（同期）へと滑らかに変化します。
     *
     * 2. 4次元トーラス上の測地線（Clifford / Flat Torus Geodesics）:
     *    - [意味: 1.見えない源]
     *    - 画面全体を覆うように、二重のねじれを持つ立体的な流線メッシュと
     *      高密度なパーティクル軌跡を配置し、端から端まで美しい構図を保ちます。
     *
     * 3. 非線形ゆらぎ（Non-linear Torus Perturbation）:
     *    - [意味: 4.制御しきれない]
     *    - 同じ形に二度戻らない微細な位相ノイズを重ね、有機的な息づかいを与えます。
     * ============================================================================
     */

    let scene, camera, renderer;
    let particleSystem, particleGeo, particleMat;
    let torusLinesMesh, torusLinesMat;
    let animId = null;

    let targetScroll = 0;
    let currentScroll = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isMobile = Math.min(window.innerWidth, window.innerHeight) < 700;

    const particleCount = isMobile ? 30000 : 60000;
    let positions, colors, randoms;

    const colorSilver = new THREE.Color(0xdce4ed);
    const colorNavy   = new THREE.Color(0x2e3a6e);
    const colorGold   = new THREE.Color(0x8a7040);

    function init() {
      const container = document.getElementById('webgl-container');
      if (!container) return;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x05070d);

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 16);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.domElement.dataset.background = 'love-gemini2';
      container.appendChild(renderer.domElement);

      buildParticles();
      buildTorusMesh();

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

    function buildParticles() {
      particleGeo = new THREE.BufferGeometry();
      positions = new Float32Array(particleCount * 3);
      colors = new Float32Array(particleCount * 3);
      randoms = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // トーラス断面状の初期配置
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        const R = 4.0 + (Math.random() - 0.5) * 2.0;
        const r = 1.5 + (Math.random() - 0.5) * 1.0;

        positions[i * 3 + 0] = (R + r * Math.cos(v)) * Math.cos(u);
        positions[i * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
        positions[i * 3 + 2] = r * Math.sin(v);

        randoms[i * 3 + 0] = Math.random();
        randoms[i * 3 + 1] = Math.random();
        randoms[i * 3 + 2] = Math.random();

        const randC = Math.random();
        let c = colorSilver;
        if (randC > 0.93) c = colorGold;
        else if (randC > 0.86) c = colorNavy;

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

            float t = uTime * 0.2 + aRandom.x * 6.28;
            float s = uScroll;

            // 蔵本モデル的位相同期場：スクロールによって粒子が求心的に整列する
            float phase = t + aRandom.y * 3.14159;
            float syncFactor = sin(s * 3.14159);

            pos.x += cos(phase) * (1.5 - syncFactor * 0.8);
            pos.y += sin(phase) * (1.5 - syncFactor * 0.8);
            pos.z += sin(t * 0.5 + aRandom.z * 4.0) * 0.8;

            // マウスインタラクション
            pos.x += uMouse.x * 1.2 * (1.0 - aRandom.x);
            pos.y += uMouse.y * 1.2 * (1.0 - aRandom.x);

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            float depthScale = clamp(14.0 / max(-mvPosition.z, 0.1), 0.0, 2.0);
            gl_PointSize = (1.0 + aRandom.x * 1.8) * depthScale;
            vAlpha = clamp(0.3 + sin(t * 2.0 + aRandom.y * 10.0) * 0.2, 0.05, 0.8);
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
        vertexColors: true, // Claude が足した（①）
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);
    }

    function buildTorusMesh() {
      // 空間の骨格をなす高次元トーラスのワイヤーフレーム／流線面
      const geo = new THREE.TorusGeometry(4.2, 1.4, 40, 120);

      torusLinesMat = new THREE.ShaderMaterial({
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

            // スクロールでトーラスがねじれ、形がダイナミックに変容
            pos.z += sin(pos.x * 0.5 + uTime + s * 5.0) * 0.5;

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
            float fresnel = pow(clamp(1.0 - dot(viewDir, vNormal), 0.0, 1.0), 3.5);

            vec3 baseCol = mix(vec3(0.04, 0.06, 0.12), vec3(0.65, 0.72, 0.82), fresnel);
            vec3 goldGlow = vec3(0.54, 0.44, 0.25) * fresnel * 0.3;

            gl_FragColor = vec4(baseCol + goldGlow, fresnel * 0.22);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        wireframe: true,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      torusLinesMesh = new THREE.Mesh(geo, torusLinesMat);
      scene.add(torusLinesMesh);
    }

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

      currentScroll += (targetScroll - currentScroll) * 0.05;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      if (particleMat) {
        particleMat.uniforms.uTime.value = t;
        particleMat.uniforms.uScroll.value = currentScroll;
        particleMat.uniforms.uMouse.value.set(mouseX, mouseY);
      }
      if (torusLinesMat) {
        torusLinesMat.uniforms.uTime.value = t;
        torusLinesMat.uniforms.uScroll.value = currentScroll;
      }

      if (particleSystem) {
        particleSystem.rotation.y = t * 0.04 + currentScroll * 1.2;
        particleSystem.rotation.x = t * 0.02;
      }
      if (torusLinesMesh) {
        torusLinesMesh.rotation.y = -t * 0.03 - currentScroll * 0.8;
        torusLinesMesh.rotation.z = t * 0.015;
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
      if (torusLinesMesh) {
        torusLinesMesh.geometry.dispose();
        torusLinesMat.dispose();
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    }

    init();
