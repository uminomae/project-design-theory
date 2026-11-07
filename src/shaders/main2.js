// src/shaders/aura-v10.js — 3D Volumetric raymarching + density filaments
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

let scene, camera, renderer, material, mesh, animationId;
let targetScroll = 0;
let currentScroll = 0;

function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1));
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
      /*
        Base volumetric logic inspired by Otavio Good (CC0)
        Adapted for 5-phase quantum/mythos scroll transformations on a white background.
      */
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_scroll;
      varying vec2 vUv;

      float Hash3d(vec3 uv) {
          float f = uv.x + uv.y * 37.0 + uv.z * 521.0;
          return fract(cos(f*3.333)*100003.9);
      }

      float mixP(float f0, float f1, float a) {
          return mix(f0, f1, a*a*(3.0-2.0*a));
      }

      const vec2 zeroOne = vec2(0.0, 1.0);

      float noise(vec3 uv) {
          vec3 fr = fract(uv.xyz);
          vec3 fl = floor(uv.xyz);
          float h000 = Hash3d(fl);
          float h100 = Hash3d(fl + zeroOne.yxx);
          float h010 = Hash3d(fl + zeroOne.xyx);
          float h110 = Hash3d(fl + zeroOne.yyx);
          float h001 = Hash3d(fl + zeroOne.xxy);
          float h101 = Hash3d(fl + zeroOne.yxy);
          float h011 = Hash3d(fl + zeroOne.xyy);
          float h111 = Hash3d(fl + zeroOne.yyy);
          return mixP(
              mixP(mixP(h000, h100, fr.x), mixP(h010, h110, fr.x), fr.y),
              mixP(mixP(h001, h101, fr.x), mixP(h011, h111, fr.x), fr.y),
              fr.z
          );
      }

      float Density(vec3 p) {
          float final_val = noise(p * 0.06125);
          float other = noise(p * 0.06125 + 1234.567);
          other -= 0.5;
          final_val -= 0.5;
          final_val = 0.1 / (abs(final_val * final_val * other) + 0.0001);
          final_val += 0.5;
          return final_val * 0.0001;
      }

      mat2 rot(float a) {
          float s = sin(a), c = cos(a);
          return mat2(c, -s, s, c);
      }

      void main() {
          vec2 uv = (gl_FragCoord.xy / u_resolution.xy) * 2.0 - 1.0;
          uv.x *= u_resolution.x / u_resolution.y;

          float s = u_scroll;
          float w1 = 1.0 - smoothstep(0.10, 0.20, s);
          float w2 = smoothstep(0.10, 0.20, s) * (1.0 - smoothstep(0.30, 0.40, s));
          float w3 = smoothstep(0.30, 0.40, s) * (1.0 - smoothstep(0.50, 0.60, s));
          float w4 = smoothstep(0.50, 0.60, s) * (1.0 - smoothstep(0.75, 0.85, s));
          float w5 = smoothstep(0.75, 0.85, s);

          vec3 camUp = vec3(0, 1, 0);
          vec3 camLookat = vec3(0, 0, 0);

          float mx = u_time * 0.05 + s * 3.14;
          float my = sin(u_time * 0.03) * 0.3 + 0.3;
          vec3 camPos = vec3(cos(my)*cos(mx), sin(my), cos(my)*sin(mx)) * 140.0;

          vec3 camVec = normalize(camLookat - camPos);
          vec3 sideNorm = normalize(cross(camUp, camVec));
          vec3 upNorm = cross(camVec, sideNorm);
          vec3 worldFacing = camPos + camVec;
          vec3 worldPix = worldFacing + uv.x * sideNorm + uv.y * upNorm;
          vec3 relVec = normalize(worldPix - camPos);

          float t = 0.0;
          float densityAccum = 0.0;
          float maxDepth = 250.0;

          for (int i = 0; i < 12; i++) {
              if (t > maxDepth) break;

              vec3 pos = camPos + relVec * t;

              vec3 p_warp = pos;

              float dist = length(pos);
              p_warp += normalize(pos) * cos(dist * 0.1 - u_time * 5.0) * 8.0 * w2;

              p_warp.x = mix(p_warp.x, abs(p_warp.x) - 30.0, w3);

              float r_xz = length(p_warp.xz);
              float a = atan(p_warp.z, p_warp.x);
              a += (80.0 / (r_xz + 10.0)) * w4 * sin(u_time * 0.5);
              p_warp.x = mix(p_warp.x, cos(a) * r_xz, w4);
              p_warp.z = mix(p_warp.z, sin(a) * r_xz, w4);

              p_warp = mix(p_warp, p_warp / (1.0 + dist * 0.005), w5);

              float temp = Density(p_warp - vec3(0.0, u_time * 15.0, 0.0));

              float inc = 2.0 + temp * 0.05;

              densityAccum += temp * inc;
              t += inc;
          }

          vec3 inkCol = vec3(0.05, 0.1, 0.15);
          vec3 cyanCol = vec3(0.0, 0.6, 0.85);
          vec3 goldCol = vec3(0.85, 0.6, 0.1);
          vec3 pinkCol = vec3(0.8, 0.2, 0.5);

          vec3 baseColor = inkCol;
          baseColor = mix(baseColor, cyanCol, w2 + w3 * 0.5);
          baseColor = mix(baseColor, goldCol, w3 * 0.5 + w4);
          baseColor = mix(baseColor, mix(goldCol, pinkCol, 0.4), w5);

          float d = densityAccum * 0.15;

          vec3 finalColor = baseColor * (1.0 + d * 0.8);

          float alpha = clamp(d, 0.0, 1.0);

          alpha *= smoothstep(1.5, 0.4, length(uv));

          gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
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
