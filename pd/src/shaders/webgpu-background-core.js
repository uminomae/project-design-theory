const shaderCode = /* wgsl */`
struct Uniforms {
  resolution: vec2f,
  time: f32,
  scroll: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VSOut {
  @builtin(position) position: vec4f,
}

fn hash(p: vec2f) -> f32 {
  var q = fract(p * vec2f(123.34, 456.21));
  let d = dot(q, q + vec2f(45.32, 45.32));
  q = q + vec2f(d, d);
  return fract(q.x * q.y);
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (vec2f(3.0, 3.0) - 2.0 * f);
  return mix(
    mix(hash(i + vec2f(0.0, 0.0)), hash(i + vec2f(1.0, 0.0)), u.x),
    mix(hash(i + vec2f(0.0, 1.0)), hash(i + vec2f(1.0, 1.0)), u.x),
    u.y
  );
}

fn rot(p: vec2f, angle: f32) -> vec2f {
  let s = sin(angle);
  let c = cos(angle);
  return vec2f(c * p.x - s * p.y, s * p.x + c * p.y);
}

fn fbm(inputP: vec2f) -> f32 {
  var p = inputP;
  var f = 0.0;
  var amp = 0.5;
  for (var i = 0; i < 2; i = i + 1) {
    f = f + amp * noise(p);
    p = rot(p, 0.6435011088) * 2.1;
    amp = amp * 0.55;
  }
  return f;
}

fn cdiv(a: vec2f, b: vec2f) -> vec2f {
  let d = max(dot(b, b), 0.001);
  return vec2f(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

@vertex
fn vs(@builtin(vertex_index) vertexIndex: u32) -> VSOut {
  var positions = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f(-1.0, 1.0),
    vec2f(3.0, 1.0)
  );
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

  p = rot(p, uniforms.time * 0.02 + s * 3.14);
  let pBase = p;

  let pWave = p + normalize(p) * cos(length(p) * 20.0 - uniforms.time * 4.0) * 0.04 * exp(-length(p));
  p = mix(p, pWave, w2);

  let pEntangle = vec2f(abs(p.x) - 0.3, p.y + sin(p.x * 10.0 - uniforms.time) * 0.1);
  p = mix(p, pEntangle, w3);

  let rLen = length(p);
  var angle = atan2(p.y, p.x);
  angle = angle + (1.0 / (rLen + 0.2)) * 0.8 * sin(uniforms.time * 0.5);
  let pVortex = vec2f(cos(angle), sin(angle)) * rLen;
  p = mix(p, pVortex, w4);

  let pHopf = cdiv(p + vec2f(0.6, 0.0), p - vec2f(0.6, 0.0)) * 0.4;
  p = mix(p, rot(pHopf, uniforms.time * 0.3), w5);

  let t = uniforms.time * (0.15 + s * 0.25);
  var q = vec2f(fbm(p), fbm(p + vec2f(5.2, 1.3)));
  q = q + vec2f(sin(t * 0.1), cos(t * 0.15)) * 0.1;

  let rVec = vec2f(
    fbm(p + 4.0 * q + vec2f(1.7, 9.2) + t * 0.1),
    fbm(p + 4.0 * q + vec2f(8.3, 2.8) - t * 0.15)
  );

  let field = fbm(p + 4.0 * rVec);

  let deepBlue = vec3f(0.01, 0.05, 0.15);
  let brightCyan = vec3f(0.10, 0.70, 0.90);
  let pinkish = vec3f(0.80, 0.30, 0.60);

  var color = mix(deepBlue, brightCyan, clamp(field * field * 4.0, 0.0, 1.0));
  color = mix(color, pinkish, clamp(length(q), 0.0, 1.0) * 0.3);
  color = mix(color, vec3f(1.0, 1.0, 1.0), clamp(length(rVec), 0.0, 1.0) * 0.1);

  let density = smoothstep(0.1, 0.85, field);
  var finalAlpha = density * 0.6 + length(q) * 0.1 + length(rVec) * 0.05;

  let wavePattern = smoothstep(0.05, 0.0, abs(sin(length(pBase) * 30.0 - uniforms.time * 5.0)));
  finalAlpha = finalAlpha + wavePattern * w2 * 0.4;

  let vignette = smoothstep(1.5, 0.3, length(uv - vec2f(0.5, 0.5)));
  finalAlpha = clamp(finalAlpha * vignette, 0.0, 1.0);

  // premultiplied canvas では色 ≤ alpha が必要（範囲外は合成結果が未定義）。
  let safeColor = clamp(color, vec3f(0.0, 0.0, 0.0), vec3f(1.0, 1.0, 1.0));
  return vec4f(safeColor * finalAlpha, finalAlpha);
}
`;

function createPipeline(device, format) {
  const bindGroupLayout = device.createBindGroupLayout({
    entries: [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } }],
  });

  const pipelineLayout = device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  });

  const shaderModule = device.createShaderModule({ code: shaderCode });

  const pipeline = device.createRenderPipeline({
    layout: pipelineLayout,
    vertex: { module: shaderModule, entryPoint: 'vs' },
    fragment: { module: shaderModule, entryPoint: 'fs', targets: [{ format }] },
    primitive: { topology: 'triangle-list' },
  });

  return { bindGroupLayout, pipeline };
}

function createScrollState() {
  return { target: 0, current: 0 };
}

function updateScrollTarget(scrollState) {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  scrollState.target = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
}

function tickScroll(scrollState) {
  scrollState.current += (scrollState.target - scrollState.current) * 0.02;
}

function getResolution() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  return {
    width: Math.max(1, Math.floor(window.innerWidth * dpr)),
    height: Math.max(1, Math.floor(window.innerHeight * dpr)),
  };
}

function configureCanvas(canvas, context, device, format) {
  const resolution = getResolution();
  canvas.width = resolution.width;
  canvas.height = resolution.height;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.configure({
    device,
    format,
    alphaMode: 'premultiplied',
  });
  return resolution;
}

export async function initWebGPUBackground({ container }) {
  if (!container || !('gpu' in navigator)) {
    console.warn('[project-design] WebGPU unavailable; background skipped.');
    return null;
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    console.warn('[project-design] WebGPU adapter unavailable; background skipped.');
    return null;
  }

  const device = await adapter.requestDevice();
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);

  const context = canvas.getContext('webgpu');
  const format = navigator.gpu.getPreferredCanvasFormat();
  const uniformBuffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const { bindGroupLayout, pipeline } = createPipeline(device, format);
  const bindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
  });

  const scrollState = createScrollState();
  let resolution = configureCanvas(canvas, context, device, format);

  function onResize() {
    resolution = configureCanvas(canvas, context, device, format);
    updateScrollTarget(scrollState);
  }

  function onScroll() {
    updateScrollTarget(scrollState);
  }

  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const start = performance.now();
  let animationId = 0;
  let disposed = false;

  function frame(now) {
    if (disposed) return;
    tickScroll(scrollState);

    const uniforms = new Float32Array([
      resolution.width,
      resolution.height,
      ((now - start) / 1000) * 0.5,
      scrollState.current,
    ]);
    device.queue.writeBuffer(uniformBuffer, 0, uniforms);

    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();
    const pass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: textureView,
        clearValue: { r: 0, g: 0, b: 0, a: 0 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
    });

    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();

    device.queue.submit([commandEncoder.finish()]);
    animationId = requestAnimationFrame(frame);
  }

  animationId = requestAnimationFrame(frame);

  return {
    dispose() {
      disposed = true;
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    },
  };
}
