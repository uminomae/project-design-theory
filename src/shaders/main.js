// src/shaders/aura-v3.js — 4ttGDH風 多重Domain Warping + 5 octave FBM
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

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      float fbm(vec2 p) {
        float f = 0.0;
        float amp = 0.5;
        mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
        for (int i = 0; i < 2; i++) {
          f += amp * noise(p);
          p = rot * p * 2.1;
          amp *= 0.55;
        }
        return f;
      }

      mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
      }

      vec2 cdiv(vec2 a, vec2 b) {
        float d = dot(b, b);
        d = max(d, 0.001);
        return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
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

        p *= rot(u_time * 0.02 + s * 3.14);
        vec2 p_base = p;

        vec2 p_wave = p + normalize(p) * cos(length(p) * 20.0 - u_time * 4.0) * 0.04 * exp(-length(p));
        p = mix(p, p_wave, w2);

        vec2 p_entangle = vec2(abs(p.x) - 0.3, p.y + sin(p.x * 10.0 - u_time) * 0.1);
        p = mix(p, p_entangle, w3);

        float r_len = length(p);
        float a = atan(p.y, p.x);
        a += (1.0 / (r_len + 0.2)) * 0.8 * sin(u_time * 0.5);
        vec2 p_vortex = vec2(cos(a), sin(a)) * r_len;
        p = mix(p, p_vortex, w4);

        vec2 p_hopf = cdiv(p + vec2(0.6, 0.0), p - vec2(0.6, 0.0)) * 0.4;
        p_hopf *= rot(u_time * 0.3);
        p = mix(p, p_hopf, w5);

        float t = u_time * (0.15 + s * 0.25);

        vec2 q = vec2(fbm(p + vec2(0.0)), fbm(p + vec2(5.2, 1.3)));
        q += vec2(sin(t * 0.1), cos(t * 0.15)) * 0.1;

        vec2 r_vec = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.1),
                          fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.15));

        float field = fbm(p + 4.0 * r_vec);

        vec3 deepBlue = vec3(0.01, 0.05, 0.15);
        vec3 brightCyan = vec3(0.1, 0.7, 0.9);
        vec3 pinkish = vec3(0.8, 0.3, 0.6);

        vec3 color = mix(deepBlue, brightCyan, clamp(field * field * 4.0, 0.0, 1.0));
        color = mix(color, pinkish, clamp(length(q), 0.0, 1.0) * 0.3);
        color = mix(color, vec3(1.0), clamp(length(r_vec), 0.0, 1.0) * 0.1);

        float density = smoothstep(0.1, 0.85, field);

        float finalAlpha = density * 0.6 + length(q) * 0.1 + length(r_vec) * 0.05;

        float wavePattern = smoothstep(0.05, 0.0, abs(sin(length(p_base) * 30.0 - u_time * 5.0)));
        finalAlpha += wavePattern * w2 * 0.4;

        float vignette = smoothstep(1.5, 0.3, length(uv - 0.5));
        finalAlpha *= vignette;

        gl_FragColor = vec4(color, clamp(finalAlpha, 0.0, 1.0));
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
