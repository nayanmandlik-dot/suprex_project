import LoginBackground from './LoginBackground';
import cardsGif from '../../assets/images/mxjfiles-cards-20318.gif';

// Shared left panel used by Login and Register.
// Mobile/tablet: natural flow, SUPREX stacked above GIF.
// Desktop (lg+): absolute positioning — SUPREX upper-third, GIF bottom-centered, cropped.
function BrandPanel() {
  return (
    <section
      aria-label="Brand visual"
      className="relative flex w-full flex-shrink-0 flex-col items-center overflow-hidden py-10 sm:py-12 md:py-14 lg:h-screen lg:w-1/2 lg:self-start lg:py-0"
      style={{ background: '#080809' }}
    >
      <LoginBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 42% 30% at 50% 0%, rgba(75, 30, 110, 0.5), transparent 65%)',
        }}
      />

      {/* Seam fade — desktop only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-1/2 lg:block"
        style={{
          background:
            'linear-gradient(270deg, #080809 0%, rgba(8, 8, 9, 0) 100%)',
        }}
      />

      {/* SUPREX wordmark */}
      <h1 className="relative z-10 whitespace-nowrap text-center text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl lg:absolute lg:left-1/2 lg:top-[22%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[100px] xl:text-[124px]">
        <span className="text-white">SUPR</span>
        <span className="text-[#ED1C24]">EX</span>
      </h1>

      {/* Cards GIF — natural flow on mobile/tablet, bottom-cropped on desktop */}
      <div className="pointer-events-none relative z-10 mt-6 w-[70%] max-w-[360px] sm:mt-8 sm:w-[62%] sm:max-w-[420px] md:mt-10 md:w-[56%] md:max-w-[480px] lg:absolute lg:bottom-[-5%] lg:left-1/2 lg:mt-0 lg:w-[76%] lg:max-w-[680px] lg:-translate-x-1/2">
        <img
          src={cardsGif}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="block h-auto w-full select-none"
        />
      </div>
    </section>
  );
}

export default BrandPanel;
