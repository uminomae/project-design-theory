// src/shaders/aura-v11.js — Divergence noise (DLA) + Dynamism blur
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

let scene, camera, renderer, material, mesh, animationId;
let targetScroll = 0;
let currentScroll = 0;

function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const geometry = new THREE.PlaneGeometry(2, 2);

  const uniforms = {
    u_time: { value: 0.0 },
    u_resolution: { value: new THREE.Vector2(innerWidth, innerHeight) },
    u_scroll: { value: 0.0 }
  };

  material = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_scroll;
      varying vec2 vUv;

      mat2 rot(float a) {
          float s = sin(a), c = cos(a);
          return mat2(c, -s, s, c);
      }

      vec2 cdiv(vec2 a, vec2 b) {
          float d = dot(b, b);
          d = max(d, 0.001);
          return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
      }

      vec2 foldSpace(vec2 p, float t) {
          for(int i = 0; i < 3; i++) {
              p = abs(p) - vec2(0.15 + 0.1 * sin(t));
              p *= rot(t * 0.2 + float(i) * 1.5);
          }
          return p * 1.2;
      }

      // 整数ハッシュ（uint のビット演算・GLSL ES 3.00）。WebGPU 版 main3-webgpu.js と同じ直し。
      // 浮動小数の積の fract を取る型は fast-math で呼び出し箇所ごとに値が変わり、ノイズが不連続になる。
      uint uhash(uint v) {
          uint x = v;
          x ^= x >> 16u;
          x *= 0x7feb352du;
          x ^= x >> 15u;
          x *= 0x846ca68bu;
          x ^= x >> 16u;
          return x;
      }
      vec2 hash22(vec2 p) {
          ivec2 i = ivec2(floor(p + 0.5));
          uvec2 u = uvec2(i);
          uint h1 = uhash(u.x * 0x9e3779b1u + uhash(u.y));
          uint h2 = uhash(h1 + 0x68e31da4u);
          return -1.0 + 2.0 * vec2(float(h1 >> 8u), float(h2 >> 8u)) / 16777216.0;
      }

      float smoothNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          float n00 = dot(hash22(i+vec2(0.0,0.0)), f-vec2(0.0,0.0));
          float n10 = dot(hash22(i+vec2(1.0,0.0)), f-vec2(1.0,0.0));
          float n01 = dot(hash22(i+vec2(0.0,1.0)), f-vec2(0.0,1.0));
          float n11 = dot(hash22(i+vec2(1.0,1.0)), f-vec2(1.0,1.0));
          return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
      }

      float divFBM(vec2 p, float t) {
          float div = 0.0;
          float amp = 1.0;
          vec2 e = vec2(0.03, 0.0);

          for(int i = 0; i < 2; i++) {
              float n0 = smoothNoise(p + t * 0.2);
              float nx = smoothNoise(p + e.xy + t * 0.2) + smoothNoise(p - e.xy + t * 0.2);
              float ny = smoothNoise(p + e.yx + t * 0.2) + smoothNoise(p - e.yx + t * 0.2);
              float laplacian = (nx + ny - 4.0 * n0);
              div += abs(laplacian) * amp * 15.0;
              p = rot(1.57) * p * 2.1;
              amp *= 0.5;
          }
          return div;
      }

      float wcurve(float x, float a, float b) {
          float xc = clamp(x, 0.0, 1.0); // pow の底が負になると NaN
          float r = pow(a + b, a + b) / (pow(a, a) * pow(b, b));
          return r * pow(xc, a) * pow(1.0 - xc, b);
      }

      float hash21(in vec2 n) {
          ivec2 i = ivec2(floor(n));
          uvec2 u = uvec2(i);
          return float(uhash(u.x * 0x9e3779b1u + uhash(u.y)) >> 8u) / 16777216.0;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

          float s = u_scroll;
          float w1 = 1.0 - smoothstep(0.10, 0.20, s);
          float w2 = smoothstep(0.10, 0.20, s) * (1.0 - smoothstep(0.30, 0.40, s));
          float w3 = smoothstep(0.30, 0.40, s) * (1.0 - smoothstep(0.50, 0.60, s));
          float w4 = smoothstep(0.50, 0.60, s) * (1.0 - smoothstep(0.75, 0.85, s));
          float w5 = smoothstep(0.75, 0.85, s);

          float t_rhythmic = u_time * 0.4 + sin(u_time * 1.2) * 0.3;

          p *= 2.0;
          p *= rot(t_rhythmic * 0.1 + s * 3.14);

          vec2 p_base = p;

          vec2 p_wave = p + normalize(p_base) * cos(length(p_base) * 20.0 - t_rhythmic * 4.0) * 0.05;
          p = mix(p, p_wave, w2);

          vec2 p_fold = foldSpace(p, t_rhythmic);
          p = mix(p, p_fold, w3);

          float r_len = length(p);
          float a = atan(p.y, p.x);
          a += (1.0 / (r_len + 0.3)) * mix(0.5, 2.0, s) * sin(t_rhythmic * 0.8);
          p = mix(p, vec2(cos(a), sin(a)) * r_len, w4);

          vec2 p_hopf = cdiv(p + vec2(0.5, 0.0), p - vec2(0.5, 0.0)) * 0.5;
          p_hopf *= rot(t_rhythmic * 0.3);
          p = mix(p, p_hopf, w5);

          vec2 center = vec2(0.0, 0.0);
          vec2 tc = center - p;

          float rnd = hash21(p * 256.0) * 0.75; // [0, 0.75): sr2 を負にしない
          float x_time = u_time;

          float drvT = 1.5 * cos(x_time + sin(0.4 * x_time + cos(0.1 * x_time))) * (cos(0.4 * x_time + cos(0.1 * x_time)) * (0.4 - 0.1 * sin(0.1 * x_time)) + 1.0) + 2.1;

          float strength = 0.01 + drvT * 0.01;

          float dlaIntensity = 0.0;
          float tw = 0.001;

          const int samples = 2;
          for(int i = 0; i < samples; i++) {
              float sr2 = (float(i) + rnd) / float(samples);
              float weight = wcurve(sr2, 1.0, 1.0);
              float displ = wcurve(sr2, 2.0, 1.0);

              vec2 sampleP = p + (tc * sr2 * strength * displ);

              float noiseSample = divFBM(sampleP * 2.5, u_time);

              dlaIntensity += noiseSample * weight;
              tw += 0.9 * weight;
          }
          dlaIntensity /= tw;

          vec3 inkCol = vec3(0.05, 0.08, 0.12);
          vec3 cyanCol = vec3(0.1, 0.7, 0.95);
          vec3 goldCol = vec3(0.9, 0.7, 0.2);

          vec3 pinkCol = vec3(0.85, 0.2, 0.5);

          vec3 color = mix(inkCol, cyanCol, smoothstep(0.05, 0.3, dlaIntensity));
          color = mix(color, goldCol, smoothstep(0.2, 0.5, dlaIntensity));
          color = mix(color, pinkCol, w3 * smoothstep(0.3, 0.7, dlaIntensity) * 0.5);

          color = mix(color, vec3(1.0), w5 * smoothstep(0.6, 1.0, dlaIntensity));

          // 彩度ブースト
          color = min(color * 1.4, vec3(1.0));

          float alpha = smoothstep(0.02, 0.4, dlaIntensity);
          alpha *= smoothstep(1.8, 0.2, length(uv - 0.5));

          gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
      }
    `,
    uniforms,
    transparent: true,
    depthWrite: false
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', onResize);
  onScroll();

  const MAX_SCROLL_STEP = () => window.__shaderScrollStep || 0.002;
  const clockStart = performance.now();
  const clock = {
    getElapsedTime() {
      return (performance.now() - clockStart) / 1000;
    }
  };
  function animate() {
    animationId = requestAnimationFrame(animate);
    onScroll();
    const delta = (targetScroll - currentScroll) * 0.02;
    currentScroll += Math.sign(delta) * Math.min(Math.abs(delta), MAX_SCROLL_STEP());
    uniforms.u_scroll.value = currentScroll;
    uniforms.u_time.value = clock.getElapsedTime() * 0.5;
    renderer.render(scene, camera);
  }
  animate();
}

function onResize() {
  renderer.setSize(innerWidth, innerHeight);
  if (material) {
    material.uniforms.u_resolution.value.set(innerWidth, innerHeight);
  }
  onScroll();
}

function onScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) {
    targetScroll = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  } else {
    targetScroll = 0;
  }
}

export function cleanup() {
  window.removeEventListener('resize', onResize);
  if (animationId) cancelAnimationFrame(animationId);
  if (mesh) {
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  }
  if (renderer) {
    renderer.dispose();
    const container = document.getElementById('webgl-container');
    if (container && renderer.domElement && container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  }
}

init();
