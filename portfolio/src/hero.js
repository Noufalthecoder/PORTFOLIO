// The one 3D piece on the site: the portrait as a cloud of points that
// assembles on load, leans toward the pointer, and scatters as you scroll away.
import * as THREE from 'three';

const VERT = /* glsl */ `
  attribute vec3 aSeed;
  attribute float aSize;
  uniform float uTime, uProgress, uScroll, uScale;
  uniform vec2 uMouse;
  varying float vAlpha;

  void main() {
    // each point arrives on its own schedule
    float t = clamp((uProgress - aSeed.x * 0.45) / 0.55, 0.0, 1.0);
    t = 1.0 - pow(1.0 - t, 3.0);

    vec3 scatter = (aSeed - 0.5) * vec3(9.0, 7.0, 6.0);
    vec3 p = mix(position + scatter, position, t);

    // idle drift
    p.x += sin(uTime * 0.6 + aSeed.y * 40.0) * 0.008;
    p.y += cos(uTime * 0.5 + aSeed.z * 40.0) * 0.008;

    // the pointer pushes nearby points out of the way
    vec2 d = p.xy - uMouse;
    float push = smoothstep(0.75, 0.0, length(d));
    p.xy += normalize(d + 0.0001) * push * 0.22;
    p.z += push * 0.35;

    // scrolling away blows the portrait apart
    p += (aSeed - 0.5) * vec3(5.0, 6.0, 4.0) * uScroll * uScroll;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uScale / -mv.z;
    vAlpha = (0.35 + 0.65 * t) * (1.0 - uScroll * 0.85);
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.38, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;

function samplePortrait(img, cols) {
  const rows = Math.round(cols * (img.height / img.width));
  const c = document.createElement('canvas');
  c.width = cols; c.height = rows;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, cols, rows);
  const px = ctx.getImageData(0, 0, cols, rows).data;

  const pos = [], seed = [], size = [];
  const H = 4.6, W = H * (cols / rows);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const k = (j * cols + i) * 4;
      let v = (0.2126 * px[k] + 0.7152 * px[k + 1] + 0.0722 * px[k + 2]) / 255;
      v = Math.min(1, Math.max(0, (v - 0.07) / 0.86));
      const fx = i / cols, fy = j / rows;
      if (v < 0.05) continue;
      if (fx > 0.77 && fy > 0.5) continue;   // background glow in the source photo
      if (fx > 0.8 && fy < 0.16) continue;
      if (fx < 0.04 && fy < 0.5) continue;
      const stagger = j % 2 ? 0.5 : 0;
      pos.push(((i + stagger) / cols - 0.5) * W, (0.5 - fy) * H, (v - 0.4) * 0.5);
      seed.push(Math.random(), Math.random(), Math.random());
      size.push(0.42 + 0.58 * Math.pow(v, 1.1));
    }
  }
  return { pos, seed, size, cell: W / cols };
}

export function mountHero(canvas, section) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
  } catch {
    section.classList.add('no-webgl');
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.z = 9;

  const uniforms = {
    uTime: { value: 0 }, uProgress: { value: reduce ? 1 : 0 }, uScroll: { value: 0 },
    uScale: { value: 1 }, uMouse: { value: new THREE.Vector2(99, 99) },
    uColor: { value: new THREE.Color('#ffffff') },
  };
  const group = new THREE.Group();
  scene.add(group);
  let cell = 0.03;

  const img = new Image();
  img.onload = () => {
    const narrow = innerWidth < 760;
    const { pos, seed, size, cell: c } = samplePortrait(img, narrow ? 96 : 132);
    cell = c;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seed, 3));
    geo.setAttribute('aSize', new THREE.Float32BufferAttribute(size, 1));
    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false });
    group.add(new THREE.Points(geo, mat));
    resize();
    section.classList.add('ready');
    start = performance.now();
  };
  img.src = '/img/portrait.jpg';

  function resize() {
    const w = section.clientWidth, h = section.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w < 760;
    // world size of the view at the portrait's depth
    const viewH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const viewW = viewH * camera.aspect;
    const fit = narrow ? Math.min((viewW * 0.8) / 3.4, ((270 / h) * viewH) / 4.6) : Math.min(1.16, (viewW * 0.4) / 3.4);
    group.scale.setScalar(fit);
    group.position.set(narrow ? 0 : viewW * 0.26, narrow ? viewH * (0.5 - 212 / h) : -0.05, 0);
    // point diameter in pixels for one grid cell
    uniforms.uScale.value = (h / viewH) * cell * fit * 1.7 * camera.position.z * renderer.getPixelRatio();
  }
  addEventListener('resize', resize);

  const target = new THREE.Vector2(0, 0), look = new THREE.Vector2(0, 0);
  const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hit = new THREE.Vector3();
  addEventListener('pointermove', (e) => {
    const r = section.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
    target.set(nx, ny);
    ray.setFromCamera(new THREE.Vector2(nx, ny), camera);
    if (ray.ray.intersectPlane(plane, hit)) {
      group.worldToLocal(hit);
      uniforms.uMouse.value.set(hit.x, hit.y);
    }
  });

  let start = performance.now(), visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(section);

  function frame(now) {
    requestAnimationFrame(frame);
    if (!visible) return;
    const t = (now - start) / 1000;
    uniforms.uTime.value = t;
    if (!reduce) uniforms.uProgress.value = Math.min(1, t / 2.4);
    uniforms.uScroll.value = Math.min(1, Math.max(0, scrollY / (section.clientHeight * 0.8)));
    look.lerp(target, 0.05);
    if (!reduce) {
      group.rotation.y = look.x * 0.28;
      group.rotation.x = -look.y * 0.16;
    }
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
