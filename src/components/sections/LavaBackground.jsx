import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Animated lava/volcanic effect — fbm noise scrolling vertically, tinted deep-red
// → red → orange → yellow, with elliptical alpha fade so it blends into the section.
function LavaBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: container.clientWidth / container.clientHeight },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uAspect;
        uniform vec2 uMouse;
        varying vec2 vUv;

        vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                         dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                     mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                         dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.18;

          // Vector from current pixel to the (smoothed) cursor position.
          // Flow falls off with distance so only nearby smoke bends toward the cursor.
          vec2 toMouse = uMouse - uv;
          float mouseDist = length(toMouse);
          vec2 flow = toMouse * 0.55 * exp(-mouseDist * 2.2);

          // Domain-warped noise — normal upward drift + mouse-based pull
          vec2 p = uv * 3.5;
          vec2 q = vec2(
            fbm(p + vec2(0.0, t) + flow * 2.0),
            fbm(p + vec2(5.2, 1.3 - t) + flow * 2.0)
          );
          float n = fbm(p + 1.6 * q + vec2(0.0, t * 1.2) + flow * 1.8);
          n = n * 0.5 + 0.5;

          // Extra noise density near the cursor — feels like smoke gathering
          float mouseGlow = exp(-mouseDist * 5.5);
          n += mouseGlow * 0.22;

          vec3 black     = vec3(0.03, 0.0,  0.0);
          vec3 darkRed   = vec3(0.22, 0.01, 0.01);
          vec3 red       = vec3(0.62, 0.05, 0.03);
          vec3 brightRed = vec3(0.92, 0.12, 0.06);

          vec3 color = mix(black,   darkRed,   smoothstep(0.15, 0.45, n));
          color      = mix(color,   red,       smoothstep(0.45, 0.75, n));
          color      = mix(color,   brightRed, smoothstep(0.82, 0.97, n));

          // Bright bloom right at the cursor
          color = mix(color, brightRed, mouseGlow * 0.35);

          // Elliptical alpha mask so it fades softly into the surrounding section
          vec2 c = uv - 0.5;
          c.x *= uAspect;
          float d = length(c) * 2.0;
          float mask = 1.0 - smoothstep(0.28, 0.95, d);

          gl_FragColor = vec4(color, mask);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.uAspect.value = w / h;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking — window-level because the container is pointer-events-none.
    // Smoothed in the render loop so the cursor trails like drifting smoke.
    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = 1 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      material.uniforms.uMouse.value.set(current.x, current.y);
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
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

export default LavaBackground;
