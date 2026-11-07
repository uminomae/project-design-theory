// src/shaders/aura-v12.js — Lyapunov fractal (chaos/order boundary)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

let scene, camera, renderer, material, mesh, animationId;
let targetScroll = 0;
let currentScroll = 0;

function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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

      float lyapunovFractal(vec2 p, float t) {
          float x = 0.5;
          float lambda = 0.0;

          vec2 ab = 2.5 + 1.5 * abs(sin(p * 1.5 + t * 0.1));

          const int iterations = 10;
          for(int i = 0; i < iterations; i++) {
              float r = (i / 2 * 2 == i) ? ab.x : ab.y;
              r += sin(t * 0.5 + float(i) * 0.2) * 0.02;
              x = r * x * (1.0 - x);
              float deriv = abs(r * (1.0 - 2.0 * x));
              lambda += log(max(deriv, 1e-6));
          }

          return lambda / float(iterations);
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

          p *= 1.5;
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

          float lambda = lyapunovFractal(p, t_rhythmic);

          vec3 inkCol = vec3(0.55, 0.58, 0.62);
          vec3 cyanCol = vec3(0.65, 0.78, 0.82);
          vec3 goldCol = vec3(0.82, 0.78, 0.7);
          vec3 pinkCol = vec3(0.8, 0.72, 0.74);

          vec3 color = vec3(1.0);
          float alpha = 0.0;

          float chaosForce = smoothstep(0.0, 0.4, lambda);
          color = mix(color, mix(goldCol, pinkCol, chaosForce), chaosForce);
          alpha += chaosForce * 0.6;

          float stableLines = smoothstep(0.05, 0.0, abs(fract(abs(lambda) * 12.0 - u_time * 0.5) - 0.5));
          float stableDepth = smoothstep(0.0, -1.5, lambda);

          vec3 stableColor = mix(cyanCol, inkCol, stableDepth);
          color = mix(color, stableColor, stableLines);

          alpha += stableLines * (0.4 + stableDepth * 0.5);

          float edge = smoothstep(0.02, 0.0, abs(lambda));
          color = mix(color, vec3(1.0), edge);
          alpha += edge * 0.8;

          color = mix(color, mix(goldCol, cyanCol, stableLines), w5 * 0.5);

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
