import heroImage from '../../assets/images/loadchips/Group 1000004403.svg';

function LoadChipHero() {
  return (
    <section
      aria-labelledby="load-chip-hero-heading"
      className="relative w-full overflow-hidden rounded-[16px] bg-[#070310]"
    >
      {/* Left purple gradient block — only the text/CTA area, not the full hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[62%]"
        style={{
          background:
            'radial-gradient(ellipse 80% 130% at 25% 50%, #3B1C82 0%, #2A1560 30%, #1A0D3D 55%, #0F0A22 78%, transparent 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-start gap-6 px-[clamp(20px,3vw,40px)] py-[clamp(24px,3vw,40px)] md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex max-w-[460px] flex-col gap-[clamp(10px,1vw,14px)]">
          <h1
            id="load-chip-hero-heading"
            className="font-sans text-[clamp(28px,3.33vw,48px)] font-extrabold uppercase leading-[1.05] tracking-tight text-white"
          >
            <span className="block">Player</span>
            <span className="block">Dashboard</span>
          </h1>

          <p className="font-sans text-[clamp(12px,1vw,14px)] font-normal leading-[1.5] text-[#B5B5B5]">
            Your chips, ready for action.
            <br />
            Track your balance, load up, and move chips across clubs in seconds.
          </p>

          <button
            type="button"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-[8px] bg-[#7717FF] px-[clamp(18px,2vw,28px)] py-[clamp(8px,0.9vw,12px)] font-sans text-[clamp(12px,1vw,14px)] font-bold leading-[1.21] text-white transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
          >
            Daily Bonus
          </button>
        </div>

        {/* Image with its own dedicated radial glow behind it */}
        <div className="relative flex flex-shrink-0 items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(123,32,201,0.55) 0%, rgba(80,20,150,0.30) 35%, rgba(40,10,80,0.10) 60%, transparent 80%)',
            }}
          />
          <img
            src={heroImage}
            alt="Poker cards and chip"
            draggable="false"
            className="relative z-10 h-auto w-[clamp(180px,25vw,320px)] select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default LoadChipHero;
