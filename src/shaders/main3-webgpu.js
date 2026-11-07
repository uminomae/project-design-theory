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

// 整数ハッシュ（u32 のビット演算）。iOS WebKit は WGSL を Metal の relaxed math＋fast 関数で
// コンパイルするため、浮動小数の積の fract を取る型のハッシュ（sin 型も Hoskins 型も）は、
// インライン展開された呼び出し箇所ごとに 1 ulp の丸めが変わり、積が整数境界をまたぐと
// fract が 0.998→0.000 に跳ねて同じ格子点で別の値になる（2026-11-05 iPhone 実測: 格子
// (-1,18) で h00.y が +0.9961 と -1.0000）。ノイズが不連続になりラプラシアンが跳ね、
// 黄色の塊になる。整数演算は math mode に依らずビット厳密。
fn uhash(v: u32) -> u32 {
  var x = v;
  x = x ^ (x >> 16u);
  x = x * 0x7feb352du;
  x = x ^ (x >> 15u);
  x = x * 0x846ca68bu;
  x = x ^ (x >> 16u);
  return x;
}
fn hash22(p: vec2f) -> vec2f {
  let i = vec2i(floor(p + vec2f(0.5, 0.5))); // 入力は格子点（整数値）
  let u = bitcast<vec2u>(i);
  let h1 = uhash(u.x * 0x9e3779b1u + uhash(u.y));
  let h2 = uhash(h1 + 0x68e31da4u);
  return -1.0 + 2.0 * vec2f(f32(h1 >> 8u), f32(h2 >> 8u)) / 16777216.0;
}

fn smoothNoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (vec2f(3.0, 3.0) - 2.0 * f);
  let n00 = dot(hash22(i + vec2f(0.0, 0.0)), f - vec2f(0.0, 0.0));
  let n10 = dot(hash22(i + vec2f(1.0, 0.0)), f - vec2f(1.0, 0.0));
  let n01 = dot(hash22(i + vec2f(0.0, 1.0)), f - vec2f(0.0, 1.0));
  let n11 = dot(hash22(i + vec2f(1.0, 1.0)), f - vec2f(1.0, 1.0));
  return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
}

fn divFBM(inputP: vec2f, t: f32) -> f32 {
  var p = inputP;
  var div = 0.0;
  var amp = 1.0;
  let e = vec2f(0.03, 0.0);

  for (var i = 0; i < 2; i = i + 1) {
    let n0 = smoothNoise(p + vec2f(t * 0.2, t * 0.2));
    let nx = smoothNoise(p + e.xy + vec2f(t * 0.2, t * 0.2)) + smoothNoise(p - e.xy + vec2f(t * 0.2, t * 0.2));
    let ny = smoothNoise(p + e.yx + vec2f(t * 0.2, t * 0.2)) + smoothNoise(p - e.yx + vec2f(t * 0.2, t * 0.2));
    let laplacian = nx + ny - 4.0 * n0;
    div = div + abs(laplacian) * amp * 15.0;
    p = rot(p, 1.57) * 2.1;
    amp = amp * 0.5;
  }
  return div;
}

fn wcurve(x: f32, a: f32, b: f32) -> f32 {
  // pow の底が負になると NaN（relaxed math では結果が不定）。[0,1] に閉じる。
  let xc = clamp(x, 0.0, 1.0);
  let r = pow(a + b, a + b) / (pow(a, a) * pow(b, b));
  return r * pow(xc, a) * pow(1.0 - xc, b);
}

fn hash21(n: vec2f) -> f32 {
  let i = vec2i(floor(n)); // 連続値は floor で格子に落としてから整数ハッシュ
  let u = bitcast<vec2u>(i);
  return f32(uhash(u.x * 0x9e3779b1u + uhash(u.y)) >> 8u) / 16777216.0;
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

  p = p * 2.0;
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

  let center = vec2f(0.0, 0.0);
  let tc = center - p;
  // p はピクセルごとに ~0.003 しか変わらないので、ハッシュ前に拡大して白色雑音にする。
  // 旧版は rnd が負になり sr2 < 0 → wcurve の pow(負) が NaN になる画素があった。
  let rnd = hash21(p * 256.0) * 0.75;
  let drvT = 1.5 * cos(uniforms.time + sin(0.4 * uniforms.time + cos(0.1 * uniforms.time))) * (cos(0.4 * uniforms.time + cos(0.1 * uniforms.time)) * (0.4 - 0.1 * sin(0.1 * uniforms.time)) + 1.0) + 2.1;
  let strength = 0.01 + drvT * 0.01;

  var dlaIntensity = 0.0;
  var tw = 0.001;
  for (var i = 0; i < 2; i = i + 1) {
    let sr2 = (f32(i) + rnd) / 2.0;
    let weight = wcurve(sr2, 1.0, 1.0);
    let displ = wcurve(sr2, 2.0, 1.0);
    let sampleP = p + (tc * sr2 * strength * displ);
    let noiseSample = divFBM(sampleP * 2.5, uniforms.time);
    dlaIntensity = dlaIntensity + noiseSample * weight;
    tw = tw + 0.9 * weight;
  }
  dlaIntensity = dlaIntensity / tw;

  let inkCol = vec3f(0.05, 0.08, 0.12);
  let cyanCol = vec3f(0.1, 0.7, 0.95);
  let goldCol = vec3f(0.9, 0.7, 0.2);
  let pinkCol = vec3f(0.85, 0.2, 0.5);

  var color = mix(inkCol, cyanCol, smoothstep(0.05, 0.3, dlaIntensity));
  color = mix(color, goldCol, smoothstep(0.2, 0.5, dlaIntensity));
  color = mix(color, pinkCol, w3 * smoothstep(0.3, 0.7, dlaIntensity) * 0.5);
  color = mix(color, vec3f(1.0, 1.0, 1.0), w5 * smoothstep(0.6, 1.0, dlaIntensity));
  // premultiplied canvas では色 ≤ alpha が必要（範囲外は WebGPU 仕様で合成結果が未定義）。
  color = min(color * 1.4, vec3f(1.0, 1.0, 1.0));

  var alpha = smoothstep(0.02, 0.4, dlaIntensity);
  alpha = alpha * smoothstep(1.8, 0.2, length(uv - vec2f(0.5, 0.5)));

  return vec4f(color * clamp(alpha, 0.0, 1.0), clamp(alpha, 0.0, 1.0));
}
`;

let instance = null;

async function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;
  instance = await initWebGPUShaderBackground({
    container,
    shaderCode,
    logPrefix: '[project-design/main3-webgpu]',
  });
}

export function cleanup() {
  instance?.dispose?.();
  instance = null;
}

void init();
