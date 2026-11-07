function createPipeline(device, format, shaderCode) {
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

export async function initWebGPUShaderBackground({ container, shaderCode, logPrefix = '[project-design]' }) {
  if (!container || !('gpu' in navigator)) {
    console.warn(`${logPrefix} WebGPU unavailable; background skipped.`);
    return null;
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    console.warn(`${logPrefix} WebGPU adapter unavailable; background skipped.`);
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

  const { bindGroupLayout, pipeline } = createPipeline(device, format, shaderCode);
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
