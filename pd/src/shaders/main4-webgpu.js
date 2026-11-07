import { initWebGPUShaderBackground } from './webgpu-runtime.js';

const shaderCode = /* wgsl */`
struct Uniforms {
  resolution: vec2f,
  time: f32,
  scroll: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VSOut { @builtin(position) position: vec4f, }

fn rot(p: vec2f, a: f32) -> vec2f {
  let s = sin(a);
  let c = cos(a);
  return vec2f(c * p.x - s * p.y, s * p.x + c * p.y);
}

fn cdiv(a: vec2f, b: vec2f) -> vec2f {
  let d = max(dot(b, b), 0.001);
  return vec2f(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

fn foldSpace(inputP: vec2f, t: f32) -> vec2f {
  var p = inputP;
  for (var i = 0; i < 3; i = i + 1) {
    p = abs(p) - vec2f(0.15 + 0.1 * sin(t), 0.15 + 0.1 * sin(t));
    p = rot(p, t * 0.2 + f32(i) * 1.5);
  }
  return p * 1.2;
}

fn lyapunovFractal(p: vec2f, t: f32) -> f32 {
  var x = 0.5;
  var lambda = 0.0;
  let ab = 2.5 + 1.5 * abs(sin(p * 1.5 + vec2f(t * 0.1, t * 0.1)));
  for (var i = 0; i < 10; i = i + 1) {
    var r = select(ab.y, ab.x, (i % 2) == 0);
    r = r + sin(t * 0.5 + f32(i) * 0.2) * 0.02;
    x = r * x * (1.0 - x);
    let deriv = abs(r * (1.0 - 2.0 * x));
    lambda = lambda + log(max(deriv, 1e-6));
  }
  return lambda / 10.0;
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
  let coord = vec2f(fragCoord.x, resolution.y - fragCoord.y);
  let uv = coord / resolution;
  var p = (coord * 2.0 - resolution) / min(resolution.x, resolution.y);

  let s = uniforms.scroll;
  let w2 = smoothstep(0.10, 0.20, s) * (1.0 - smoothstep(0.30, 0.40, s));
  let w3 = smoothstep(0.30, 0.40, s) * (1.0 - smoothstep(0.50, 0.60, s));
  let w4 = smoothstep(0.50, 0.60, s) * (1.0 - smoothstep(0.75, 0.85, s));
  let w5 = smoothstep(0.75, 0.85, s);

  let tRhythmic = uniforms.time * 0.4 + sin(uniforms.time * 1.2) * 0.3;
  p = p * 1.5;
  p = rot(p, tRhythmic * 0.1 + s * 3.14);

  let pBase = p;
  let pWave = p + normalize(pBase) * cos(length(pBase) * 20.0 - tRhythmic * 4.0) * 0.05;
  p = mix(p, pWave, w2);
  let pFold = foldSpace(p, tRhythmic);
  p = mix(p, pFold, w3);

  let rLen = length(p);
  var a = atan2(p.y, p.x);
  a = a + (1.0 / (rLen + 0.3)) * mix(0.5, 2.0, s) * sin(tRhythmic * 0.8);
  p = mix(p, vec2f(cos(a), sin(a)) * rLen, w4);

  let pHopf = cdiv(p + vec2f(0.5, 0.0), p - vec2f(0.5, 0.0)) * 0.5;
  p = mix(p, rot(pHopf, tRhythmic * 0.3), w5);

  let lambda = lyapunovFractal(p, tRhythmic);

  let inkCol = vec3f(0.55, 0.58, 0.62);
  let cyanCol = vec3f(0.65, 0.78, 0.82);
  let goldCol = vec3f(0.82, 0.78, 0.7);
  let pinkCol = vec3f(0.8, 0.72, 0.74);

  var color = vec3f(1.0, 1.0, 1.0);
  var alpha = 0.0;

  let chaosForce = smoothstep(0.0, 0.4, lambda);
  color = mix(color, mix(goldCol, pinkCol, chaosForce), chaosForce);
  alpha = alpha + chaosForce * 0.6;

  let stableLines = smoothstep(0.05, 0.0, abs(fract(abs(lambda) * 12.0 - uniforms.time * 0.5) - 0.5));
  let stableDepth = smoothstep(0.0, -1.5, lambda);
  let stableColor = mix(cyanCol, inkCol, stableDepth);
  color = mix(color, stableColor, stableLines);
  alpha = alpha + stableLines * (0.4 + stableDepth * 0.5);

  let edge = smoothstep(0.02, 0.0, abs(lambda));
  color = mix(color, vec3f(1.0, 1.0, 1.0), edge);
  alpha = alpha + edge * 0.8;
  color = mix(color, mix(goldCol, cyanCol, stableLines), w5 * 0.5);

  alpha = alpha * smoothstep(1.8, 0.2, length(uv - vec2f(0.5, 0.5)));

  // premultiplied canvas では色 ≤ alpha が必要（範囲外は合成結果が未定義）。
  let safeColor = clamp(color, vec3f(0.0, 0.0, 0.0), vec3f(1.0, 1.0, 1.0));
  let safeAlpha = clamp(alpha, 0.0, 1.0);
  return vec4f(safeColor * safeAlpha, safeAlpha);
}
`;

let instance = null;

async function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;
  instance = await initWebGPUShaderBackground({
    container,
    shaderCode,
    logPrefix: '[project-design/main4-webgpu]',
  });
}

export function cleanup() {
  instance?.dispose?.();
  instance = null;
}

void init();
