import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Purple/magenta palette matches the Figma left panel.
const COLORS = ['#b57bff', '#ff6fd8', '#8a2be2', '#c875ff'];

// Immersive 3D background for the login left panel.
//   • ~800 glowing sparkle particles drifting upward with horizontal sway
//   • 5 large slowly-rotating toruses (metallic, additive-blended)
//   • Mouse parallax camera on desktop
//   • Full cleanup + resize handling
function LoginBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Renderer (transparent) ──────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    // ── Particle field ──────────────────────────────────
    const PCOUNT = 800;
    const ppos = new Float32Array(PCOUNT * 3);
    const pcol = new Float32Array(PCOUNT * 3);
    const pvel = new Float32Array(PCOUNT);
    const psway = new Float32Array(PCOUNT * 2);
    const pbase = new Float32Array(PCOUNT);
    const tmp = new THREE.Color();
    for (let i = 0; i < PCOUNT; i += 1) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 3;
      ppos[i * 3] = x; ppos[i * 3 + 1] = y; ppos[i * 3 + 2] = z;
      pbase[i] = x;
      tmp.set(COLORS[Math.floor(Math.random() * COLORS.length)]);
      pcol[i * 3] = tmp.r; pcol[i * 3 + 1] = tmp.g; pcol[i * 3 + 2] = tmp.b;
      pvel[i] = 0.05 + Math.random() * 0.15;
      psway[i * 2] = Math.random() * Math.PI * 2;
      psway[i * 2 + 1] = 0.15 + Math.random() * 0.35;
    }
    const pgeom = new THREE.BufferGeometry();
    pgeom.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
    pgeom.setAttribute('color', new THREE.BufferAttribute(pcol, 3));

    // Soft round sprite canvas texture — no external asset.
    const sc = document.createElement('canvas');
    sc.width = 64; sc.height = 64;
    const ctx = sc.getContext('2d');
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.35, 'rgba(220,170,255,0.75)');
    grd.addColorStop(1, 'rgba(130,50,220,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 64, 64);
    const spriteTex = new THREE.CanvasTexture(sc);

    const pmat = new THREE.PointsMaterial({
      size: 0.08,
      sizeAttenuation: true,
      map: spriteTex,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.9,
    });
    const points = new THREE.Points(pgeom, pmat);
    scene.add(points);

    // ── Mouse parallax (desktop only) ───────────────────
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      if (!isDesktop) return;
      const rect = container.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    if (isDesktop) window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // ── Animation loop ──────────────────────────────────
    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      const dt = clock.getDelta();

      // Particles: upward drift + horizontal sway; wrap to bottom.
      const arr = pgeom.attributes.position.array;
      for (let i = 0; i < PCOUNT; i += 1) {
        arr[i * 3 + 1] += pvel[i] * dt;
        if (arr[i * 3 + 1] > 5.5) {
          arr[i * 3 + 1] = -5.5;
          pbase[i] = (Math.random() - 0.5) * 14;
        }
        arr[i * 3] = pbase[i] + Math.sin(t + psway[i * 2]) * psway[i * 2 + 1];
      }
      pgeom.attributes.position.needsUpdate = true;

      // Smooth camera parallax.
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;
      camera.position.x = mouse.x;
      camera.position.y = -mouse.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      pgeom.dispose();
      pmat.dispose();
      spriteTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}

export default LoginBackground;
