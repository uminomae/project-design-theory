import { initWebGPUShaderBackground } from './webgpu-runtime.js';

const shaderCode = /* wgsl */`
struct Uniforms {
  resolution: vec2f,
  time: f32,
  scroll: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VSOut { @builtin(position) position: vec4f, }

fn hash3d(p: vec3f) -> f32 {
  let f = p.x + p.y * 37.0 + p.z * 521.0;
  return fract(cos(f * 3.333) * 100003.9);
}

fn mixP(f0: f32, f1: f32, a: f32) -> f32 {
  return mix(f0, f1, a * a * (3.0 - 2.0 * a));
}

fn noise3(uv: vec3f) -> f32 {
  let fr = fract(uv);
  let fl = floor(uv);
  let h000 = hash3d(fl);
  let h100 = hash3d(fl + vec3f(1.0, 0.0, 0.0));
  let h010 = hash3d(fl + vec3f(0.0, 1.0, 0.0));
  let h110 = hash3d(fl + vec3f(1.0, 1.0, 0.0));
  let h001 = hash3d(fl + vec3f(0.0, 0.0, 1.0));
  let h101 = hash3d(fl + vec3f(1.0, 0.0, 1.0));
  let h011 = hash3d(fl + vec3f(0.0, 1.0, 1.0));
  let h111 = hash3d(fl + vec3f(1.0, 1.0, 1.0));
  return mixP(
    mixP(mixP(h000, h100, fr.x), mixP(h010, h110, fr.x), fr.y),
    mixP(mixP(h001, h101, fr.x), mixP(h011, h111, fr.x), fr.y),
    fr.z
  );
}

fn rot2(p: vec2f, a: f32) -> vec2f {
  let s = sin(a);
  let c = cos(a);
  return vec2f(c * p.x - s * p.y, s * p.x + c * p.y);
}

fn density(inputP: vec3f) -> f32 {
  var finalVal = noise3(inputP * 0.06125);
  let other = noise3(inputP * 0.06125 + vec3f(1234.567, 1234.567, 1234.567)) - 0.5;
  finalVal = finalVal - 0.5;
  finalVal = 0.1 / (abs(finalVal * finalVal * other) + 0.0001);
  finalVal = finalVal + 0.5;
  return finalVal * 0.0001;
}

@vertex
fn vs(@builtin(vertex_index) vertexIndex: u32) -> VSOut {
  var positions = array<vec2f, 3>(vec2f(-1.0, -3.0), vec2f(-1.0, 1.0), vec2f(3.0, 1.0));
  var out: VSOut;
  out.position = vec4f(positions[vertexIndex], 0.0, 1.0);
  return out;
}

@fragment
fn fs(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
  let resolution = uniforms.resolution;
  var uv = (fragCoord.xy / resolution) * 2.0 - 1.0;
  uv.x = uv.x * resolution.x / resolution.y;

  let s = uniforms.scroll;
  let w2 = smoothstep(0.10, 0.20, s) * (1.0 - smoothstep(0.30, 0.40, s));
  let w3 = smoothstep(0.30, 0.40, s) * (1.0 - smoothstep(0.50, 0.60, s));
  let w4 = smoothstep(0.50, 0.60, s) * (1.0 - smoothstep(0.75, 0.85, s));
  let w5 = smoothstep(0.75, 0.85, s);

  let mx = uniforms.time * 0.05 + s * 3.14;
  let my = sin(uniforms.time * 0.03) * 0.3 + 0.3;
  let camPos = vec3f(cos(my) * cos(mx), sin(my), cos(my) * sin(mx)) * 140.0;
  let camLookat = vec3f(0.0, 0.0, 0.0);
  let camUp = vec3f(0.0, 1.0, 0.0);
  let camVec = normalize(camLookat - camPos);
  let sideNorm = normalize(cross(camUp, camVec));
  let upNorm = cross(camVec, sideNorm);
  let worldFacing = camPos + camVec;
  let worldPix = worldFacing + uv.x * sideNorm + uv.y * upNorm;
  let relVec = normalize(worldPix - camPos);

  var t = 0.0;
  var densityAccum = 0.0;
  let maxDepth = 250.0;

  for (var i = 0; i < 12; i = i + 1) {
    if (t > maxDepth) { break; }
    let pos = camPos + relVec * t;
    var pWarp = pos;

    let dist = length(pos);
    pWarp = pWarp + normalize(pos) * cos(dist * 0.1 - uniforms.time * 5.0) * 8.0 * w2;
    pWarp.x = mix(pWarp.x, abs(pWarp.x) - 30.0, w3);

    let rXZ = length(pWarp.xz);
    var a = atan2(pWarp.z, pWarp.x);
    a = a + (80.0 / (rXZ + 10.0)) * w4 * sin(uniforms.time * 0.5);
    pWarp.x = mix(pWarp.x, cos(a) * rXZ, w4);
    pWarp.z = mix(pWarp.z, sin(a) * rXZ, w4);

    pWarp = mix(pWarp, pWarp / (1.0 + dist * 0.005), w5);

    let temp = density(pWarp - vec3f(0.0, uniforms.time * 15.0, 0.0));
    let inc = 2.0 + temp * 0.05;
    densityAccum = densityAccum + temp * inc;
    t = t + inc;
  }

  let inkCol = vec3f(0.05, 0.1, 0.15);
  let cyanCol = vec3f(0.0, 0.6, 0.85);
  let goldCol = vec3f(0.85, 0.6, 0.1);
  let pinkCol = vec3f(0.8, 0.2, 0.5);

  var baseColor = inkCol;
  baseColor = mix(baseColor, cyanCol, w2 + w3 * 0.5);
  baseColor = mix(baseColor, goldCol, w3 * 0.5 + w4);
  baseColor = mix(baseColor, mix(goldCol, pinkCol, 0.4), w5);

  let d = densityAccum * 0.15;
  let finalColor = baseColor * (1.0 + d * 0.8);
  var alpha = clamp(d, 0.0, 1.0);
  alpha = alpha * smoothstep(1.5, 0.4, length(uv));

  return vec4f(finalColor * alpha, clamp(alpha, 0.0, 1.0));
}
`;

let instance = null;

async function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;
  instance = await initWebGPUShaderBackground({
    container,
    shaderCode,
    logPrefix: '[project-design/main2-webgpu]',
  });
}

export function cleanup() {
  instance?.dispose?.();
  instance = null;
}

void init();
