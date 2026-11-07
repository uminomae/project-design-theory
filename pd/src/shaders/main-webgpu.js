import { initWebGPUBackground } from './webgpu-background-core.js';

let instance = null;

async function init() {
  const container = document.getElementById('webgl-container');
  if (!container) return;
  instance = await initWebGPUBackground({ container });
}

export function cleanup() {
  instance?.dispose?.();
  instance = null;
}

void init();
