// three/addons の ParametricGeometry と同じ働き。addons の版は import map（"three"）を前提にしていて、
// reader のページでは読めないため、本体の three.module.js だけで書いたもの（love-gemini.js・love-gemini3.js が使う）。
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.0/build/three.module.js';

// three/addons/geometries/ParametricGeometry.js と同じ作り（頂点・法線・uv・面の並び）
export class ParametricGeometry extends THREE.BufferGeometry {
    constructor(func, slices = 8, stacks = 8) {
        super();
        const indices = [], vertices = [], normals = [], uvs = [];
        const EPS = 0.00001;
        const normal = new THREE.Vector3(), p0 = new THREE.Vector3(), p1 = new THREE.Vector3();
        const pu = new THREE.Vector3(), pv = new THREE.Vector3();
        const sliceCount = slices + 1;
        for (let i = 0; i <= stacks; i++) {
            const v = i / stacks;
            for (let j = 0; j <= slices; j++) {
                const u = j / slices;
                func(u, v, p0);
                vertices.push(p0.x, p0.y, p0.z);
                if (u - EPS >= 0) { func(u - EPS, v, p1); pu.subVectors(p0, p1); }
                else { func(u + EPS, v, p1); pu.subVectors(p1, p0); }
                if (v - EPS >= 0) { func(u, v - EPS, p1); pv.subVectors(p0, p1); }
                else { func(u, v + EPS, p1); pv.subVectors(p1, p0); }
                normal.crossVectors(pu, pv).normalize();
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(u, v);
            }
        }
        for (let i = 0; i < stacks; i++) {
            for (let j = 0; j < slices; j++) {
                const a = i * sliceCount + j, b = i * sliceCount + j + 1;
                const c = (i + 1) * sliceCount + j + 1, d = (i + 1) * sliceCount + j;
                indices.push(a, b, d, b, c, d);
            }
        }
        this.setIndex(indices);
        this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    }
}
