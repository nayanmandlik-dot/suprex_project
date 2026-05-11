import { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────
// Card3D — premium playing card built entirely from inline SVG. Two
// halves of pip detail, raised gold edge, drop shadow, soft sheen.
// Animates in 3D and reacts to mouse hover with realistic tilt.
// ─────────────────────────────────────────────────────────────────────
function Card3D({
  rank,
  suit,
  width = 130,
  className = '',
  initialRotateZ = 0,
  initialRotateY = 0,
  bobAmplitude = 14,
  bobDuration = 5,
  delay = 0,
  parallaxX,
  parallaxY,
  z = 0,
}) {
  const isRed = suit === '♥' || suit === '♦';
  const suitColor = isRed ? '#D7263D' : '#1A1A1A';

  // Local mouse-relative tilt on top of the parallax/idle motion.
  const cardRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sTiltX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const sTiltY = useSpring(tiltY, { stiffness: 200, damping: 20 });

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 22);
    tiltX.set(-py * 22);
  };
  const onMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`absolute ${className}`}
      style={{ x: parallaxX, y: parallaxY, perspective: 1200, width, zIndex: z }}
      initial={{ opacity: 0, y: 80, rotateY: initialRotateY + 90, rotateZ: initialRotateZ, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, rotateY: initialRotateY, rotateZ: initialRotateZ, scale: 1 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -bobAmplitude, 0], rotateZ: [initialRotateZ, initialRotateZ + 2.5, initialRotateZ] }}
        transition={{ duration: bobDuration, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
        style={{
          rotateX: sTiltX,
          rotateY: sTiltY,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 100 140"
          width={width}
          height={width * 1.4}
          className="block"
          style={{
            filter: 'drop-shadow(0 25px 30px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(215,38,61,0.25))',
          }}
        >
          <defs>
            <linearGradient id={`face-${rank}-${suit}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFEF8" />
              <stop offset="50%" stopColor="#F5EFD9" />
              <stop offset="100%" stopColor="#D9C997" />
            </linearGradient>
            <linearGradient id={`edge-${rank}-${suit}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFE9A8" />
              <stop offset="50%" stopColor="#C8973C" />
              <stop offset="100%" stopColor="#7A4F0E" />
            </linearGradient>
            <linearGradient id={`sheen-${rank}-${suit}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Card body with raised gold border */}
          <rect
            x="3"
            y="3"
            width="94"
            height="134"
            rx="10"
            fill={`url(#face-${rank}-${suit})`}
            stroke={`url(#edge-${rank}-${suit})`}
            strokeWidth="2.4"
          />
          {/* Inner gold rule */}
          <rect
            x="8"
            y="8"
            width="84"
            height="124"
            rx="7"
            fill="none"
            stroke={`url(#edge-${rank}-${suit})`}
            strokeWidth="0.9"
            opacity="0.7"
          />
          {/* Top-left rank + suit */}
          <text
            x="11"
            y="26"
            fontFamily="Georgia, 'Cinzel', serif"
            fontWeight="700"
            fontSize="18"
            fill={suitColor}
          >
            {rank}
          </text>
          <text x="11" y="42" fontFamily="Georgia, serif" fontSize="14" fill={suitColor}>
            {suit}
          </text>
          {/* Bottom-right rank + suit */}
          <g transform="translate(100,140) rotate(180)">
            <text x="11" y="26" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill={suitColor}>
              {rank}
            </text>
            <text x="11" y="42" fontFamily="Georgia, serif" fontSize="14" fill={suitColor}>
              {suit}
            </text>
          </g>
          {/* Big center suit */}
          <text
            x="50"
            y="92"
            fontFamily="Georgia, serif"
            fontSize="60"
            textAnchor="middle"
            fill={suitColor}
            opacity="0.95"
          >
            {suit}
          </text>
          {/* Diagonal sheen */}
          <rect
            x="3"
            y="3"
            width="94"
            height="134"
            rx="10"
            fill={`url(#sheen-${rank}-${suit})`}
            opacity="0.45"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Coin3D — gold/red casino chip. Inline SVG with concentric rings,
// "$" stamp, sheen highlight. Spins on Y axis with floating bob.
// ─────────────────────────────────────────────────────────────────────
function Coin3D({
  size = 60,
  className = '',
  delay = 0,
  variant = 'gold', // 'gold' | 'red'
  rotateDuration = 5,
  bobDuration = 4,
  bobAmplitude = 12,
  parallaxX,
  parallaxY,
  z = 0,
}) {
  const isRed = variant === 'red';
  const id = `coin-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: parallaxX, y: parallaxY, perspective: 800, width: size, height: size, zIndex: z }}
      initial={{ opacity: 0, scale: 0.4, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -bobAmplitude, 0] }}
        transition={{ duration: bobDuration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          animate={{ rotateY: 360 }}
          transition={{ duration: rotateDuration, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="block"
        >
          <defs>
            <radialGradient id={`${id}-face`} cx="0.35" cy="0.30" r="0.85">
              {isRed ? (
                <>
                  <stop offset="0%" stopColor="#FFD0D5" />
                  <stop offset="40%" stopColor="#EF0C27" />
                  <stop offset="80%" stopColor="#82081A" />
                  <stop offset="100%" stopColor="#3A0309" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#FFF3B0" />
                  <stop offset="45%" stopColor="#F5C247" />
                  <stop offset="80%" stopColor="#B27517" />
                  <stop offset="100%" stopColor="#5C3F0E" />
                </>
              )}
            </radialGradient>
            <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={isRed ? '#FCA5A5' : '#FCD34D'} />
              <stop offset="100%" stopColor={isRed ? '#7F1D1D' : '#7A4F0E'} />
            </linearGradient>
          </defs>
          {/* Outer disc */}
          <circle cx="40" cy="40" r="36" fill={`url(#${id}-face)`} stroke={`url(#${id}-edge)`} strokeWidth="3" />
          {/* Decorative ridge ring */}
          <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Inner bevel ring */}
          <circle cx="40" cy="40" r="24" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
          {/* "$" or "♦" stamp */}
          <text
            x="40"
            y="52"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="32"
            fontWeight="900"
            fill={isRed ? '#3A0309' : '#5C3F0E'}
          >
            $
          </text>
          {/* Highlight sheen */}
          <ellipse cx="30" cy="26" rx="11" ry="5" fill="rgba(255,255,255,0.55)" />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Particles — drifting upward sparkles for ambient atmosphere.
// ─────────────────────────────────────────────────────────────────────
function Particles({ count = 36 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        delay: Math.random() * 10,
        duration: 9 + Math.random() * 10,
        tint: i % 4 === 0 ? '#FBBF24' : i % 4 === 1 ? '#EF4444' : i % 4 === 2 ? '#FCA5A5' : '#FFFFFF',
      })),
    [count],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {items.map(({ id, left, size, delay, duration, tint }) => (
        <motion.span
          key={id}
          className="absolute bottom-[-10px] rounded-full"
          style={{
            left: `${left}%`,
            width: size,
            height: size,
            background: tint,
            boxShadow: `0 0 ${size * 5}px ${tint}`,
          }}
          animate={{ y: [0, -900], opacity: [0, 1, 1, 0] }}
          transition={{ duration, repeat: Infinity, delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// AmbientLights — slow drifting blurred crimson + amber blobs.
// ─────────────────────────────────────────────────────────────────────
function AmbientLights() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <motion.div
        className="absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239,12,39,0.55) 0%, rgba(239,12,39,0.12) 45%, transparent 75%)',
          filter: 'blur(70px)',
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-[480px] w-[480px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.32) 0%, rgba(245,158,11,0.10) 45%, transparent 75%)',
          filter: 'blur(75px)',
        }}
        animate={{ x: [0, -40, 0], y: [0, 35, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(127,29,29,0.40) 0%, rgba(82,8,15,0.20) 45%, transparent 75%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// HomeHero entry.
// ─────────────────────────────────────────────────────────────────────
function HomeHero() {
  // Global mouse parallax — single rAF-throttled listener feeds motion
  // values that every animated layer derives its own depth from.
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const px8 = useTransform(sx, (v) => v * -8);
  const py8 = useTransform(sy, (v) => v * -8);
  const px15 = useTransform(sx, (v) => v * -15);
  const py15 = useTransform(sy, (v) => v * -15);
  const px25 = useTransform(sx, (v) => v * -25);
  const py25 = useTransform(sy, (v) => v * -25);
  const px40 = useTransform(sx, (v) => v * -40);
  const py40 = useTransform(sy, (v) => v * -40);
  const px20p = useTransform(sx, (v) => v * 20);
  const py20p = useTransform(sy, (v) => v * 20);
  const px35p = useTransform(sx, (v) => v * 35);
  const py35p = useTransform(sy, (v) => v * 35);

  useEffect(() => {
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (!sectionRef.current) {
          raf = 0;
          return;
        }
        const rect = sectionRef.current.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
        raf = 0;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-hero-heading"
      className="relative w-full overflow-hidden text-white"
      style={{
        minHeight: 'clamp(720px, 95vh, 980px)',
        background:
          'radial-gradient(ellipse 75% 60% at 50% 50%, #5C0610 0%, #2A030A 35%, #0E0204 70%, #050103 100%)',
      }}
    >
      <AmbientLights />
      <Particles count={42} />

      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,1,3,0.85) 100%)' }}
      />

      {/* Top spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[60%]"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 50% -10%, rgba(255,200,200,0.18) 0%, rgba(255,180,180,0.06) 30%, transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Faint ground glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-1/2 z-[3] h-[clamp(220px,26vw,360px)] w-[clamp(620px,70vw,1100px)] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(239,12,39,0.50) 0%, rgba(127,29,29,0.20) 45%, transparent 75%)',
          filter: 'blur(50px)',
        }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Floating cards ── */}
      <Card3D
        rank="A"
        suit="♠"
        width={150}
        className="left-[8%] top-[28%]"
        initialRotateZ={-18}
        initialRotateY={-15}
        bobAmplitude={16}
        bobDuration={5}
        delay={0.35}
        parallaxX={px40}
        parallaxY={py40}
        z={6}
      />
      <Card3D
        rank="K"
        suit="♥"
        width={170}
        className="left-[22%] top-[38%]"
        initialRotateZ={-8}
        initialRotateY={-6}
        bobAmplitude={14}
        bobDuration={5.4}
        delay={0.5}
        parallaxX={px25}
        parallaxY={py25}
        z={7}
      />
      <Card3D
        rank="Q"
        suit="♦"
        width={190}
        className="left-1/2 top-[28%] -translate-x-1/2"
        initialRotateZ={0}
        initialRotateY={0}
        bobAmplitude={12}
        bobDuration={6}
        delay={0.65}
        parallaxX={px15}
        parallaxY={py15}
        z={9}
      />
      <Card3D
        rank="J"
        suit="♣"
        width={170}
        className="right-[22%] top-[38%]"
        initialRotateZ={8}
        initialRotateY={6}
        bobAmplitude={14}
        bobDuration={5.6}
        delay={0.5}
        parallaxX={px20p}
        parallaxY={py20p}
        z={7}
      />
      <Card3D
        rank="10"
        suit="♥"
        width={150}
        className="right-[8%] top-[28%]"
        initialRotateZ={18}
        initialRotateY={15}
        bobAmplitude={16}
        bobDuration={5.2}
        delay={0.35}
        parallaxX={px35p}
        parallaxY={py35p}
        z={6}
      />

      {/* ── Foreground / background coins ── */}
      <Coin3D variant="gold" size={120} className="left-[4%] top-[56%]" delay={0.6} parallaxX={px40} parallaxY={py40} z={5} />
      <Coin3D variant="red"  size={140} className="right-[4%] top-[52%]" delay={0.7} rotateDuration={6} parallaxX={px35p} parallaxY={py35p} z={5} />
      <Coin3D variant="gold" size={92} className="left-[16%] top-[76%]" delay={0.8} parallaxX={px25} parallaxY={py25} z={4} />
      <Coin3D variant="red"  size={100} className="right-[16%] top-[78%]" delay={0.9} rotateDuration={5.4} parallaxX={px20p} parallaxY={py20p} z={4} />
      <Coin3D variant="gold" size={78} className="left-[36%] top-[88%]" delay={1.0} bobDuration={3.5} parallaxX={px15} parallaxY={py15} z={3} />
      <Coin3D variant="red"  size={72} className="right-[36%] top-[90%]" delay={1.1} bobDuration={3.2} parallaxX={px8} parallaxY={py8} z={3} />
      {/* Background coins (slightly smaller, slower) */}
      <Coin3D variant="gold" size={64} className="left-[34%] top-[22%]" delay={0.4} rotateDuration={9} bobDuration={6} parallaxX={px8} parallaxY={py8} z={2} />
      <Coin3D variant="red"  size={60} className="right-[34%] top-[24%]" delay={0.45} rotateDuration={8} bobDuration={6.5} parallaxX={px8} parallaxY={py8} z={2} />

      {/* ── Centered headline + subtitle + CTA ── */}
      <div className="relative z-[11] mx-auto flex w-full max-w-[1100px] flex-col items-center px-[clamp(20px,4vw,60px)] pt-[clamp(280px,32vw,460px)] text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur"
          style={{ boxShadow: '0 0 24px rgba(239,12,39,0.25), inset 0 0 12px rgba(255,255,255,0.04)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-rose-500 opacity-80" />
            <span className="relative h-2 w-2 rounded-full bg-rose-500" />
          </span>
          Live Tournaments • $1.2M Pool
        </motion.span>

        {/* Heading */}
        <motion.h1
          id="home-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-sans uppercase leading-[1.05] tracking-tight"
          style={{ textShadow: '0 6px 30px rgba(239,12,39,0.45), 0 2px 4px rgba(0,0,0,0.6)' }}
        >
          <span className="block text-[clamp(28px,3.86vw,55.6px)] font-bold text-white">
            America&apos;s #1
          </span>
          <span
            className="block text-[clamp(36px,5.15vw,74.14px)] font-bold"
            style={{ color: '#EF0C27', textShadow: '0 0 40px rgba(239,12,39,0.5)' }}
          >
            Online Poker
          </span>
          <span className="block text-[clamp(36px,5.15vw,74.14px)] font-bold text-white">
            Community
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-5 max-w-[560px] font-sans text-[clamp(14px,1.39vw,20px)] capitalize leading-[1.5] text-[#B5B5B5]"
        >
          Play Legal Online Poker in the US. Real Players, Real Wins. Claim Your Seat at the Table.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/login"
            className="group relative inline-flex h-[clamp(52px,4.6vw,66px)] items-center justify-center overflow-hidden rounded-[12px] border-2 border-white bg-[#7717FF] px-[clamp(28px,2.8vw,42px)] text-[clamp(14px,1.39vw,20px)] font-bold capitalize text-[#FAFAFA] transition-all hover:scale-[1.05] hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ boxShadow: '0 12px 30px rgba(119,23,255,0.55)' }}
          >
            <span className="relative z-10">Play Now</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-white/45"
        >
          <span>★ Licensed in 40 States</span>
          <span>♦ Instant Payouts</span>
          <span>♥ 120K+ Active Players</span>
        </motion.div>
      </div>

      {/* Bottom dark fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-44"
        style={{ background: 'linear-gradient(180deg, transparent, #050103 88%)' }}
      />
    </section>
  );
}

export default HomeHero;
