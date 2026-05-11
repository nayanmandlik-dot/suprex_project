import bgSvg from '../../assets/images/findyourgame-background.svg';
import phoneImg from '../../assets/images/findyourgame-phone.svg';
import classicImg from '../../assets/images/findyourgame-classic.svg';
import tournamentsImg from '../../assets/images/findyourgame-tournaments.svg';
import freerollsImg from '../../assets/images/findyourgame-freerolls.svg';
import suprexBadge from '../../assets/images/suprex-badge.svg';

const ROWS = [
  {
    num: '01',
    title: 'Classic Poker',
    desc: 'Join competitive tables where every hand counts. Drop in anytime and test your skill in soft games online.',
    img: classicImg,
  },
  {
    num: '02',
    title: 'Tournaments',
    desc: 'Play for bigger prizes in structured multi-table events, with free-to-play options and regular promotions.',
    img: tournamentsImg,
  },
  {
    num: '03',
    title: 'Freerolls',
    desc: 'Join our freerolls with massive prize pools. Jump in, play for free, and win real rewards.',
    img: freerollsImg,
  },
];

function FindYourGame() {
  return (
    <section
      aria-labelledby="find-game-heading"
      className="relative w-full overflow-hidden"
    >
      {/* Background SVG — dark pattern + purple corner glows (no red anymore). */}
      <img
        src={bgSvg}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
      />

      <div className="relative z-10 px-[clamp(16px,4.51vw,65px)] py-[clamp(56px,6.94vw,100px)]">
        {/* ── Centered header: badge + title + subtitle ── */}
        <div className="mx-auto flex max-w-[904px] flex-col items-center text-center">
          {/* Suprex badge — SVG asset with black ring, 3D red gradient, split line */}
          <img
            src={suprexBadge}
            alt="Suprex"
            draggable="false"
            className="h-auto w-[clamp(180px,24vw,340px)] select-none"
          />

          <h2
            id="find-game-heading"
            className="mt-[clamp(14px,1.25vw,18px)] font-sans text-[clamp(26px,3.33vw,48px)] font-bold leading-[1.15] text-white"
          >
            Find Your Game
          </h2>
          <p className="mt-[clamp(12px,1.25vw,18px)] max-w-[904px] font-sans text-[clamp(14px,1.39vw,20px)] font-normal leading-[1.55] text-[#B5B5B5]">
            Step into the ultimate online social poker experience where real
            players compete for real prizes. Explore a variety of game modes and
            stakes.
          </p>
        </div>

        {/* ── Content grid: phone left + rows right ── */}
        <div className="mx-auto mt-[clamp(36px,2.78vw,40px)] flex max-w-[1320px] flex-col items-center gap-[clamp(32px,4vw,56px)] lg:flex-row lg:items-start lg:gap-[12px]">
          {/* Phone image with red glow behind it — wrapper keeps the glow
              anchored to the phone at every breakpoint (mobile stack / desktop row). */}
          <div className="relative flex w-[clamp(240px,33.47vw,482px)] flex-shrink-0 items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[110%] w-[130%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  'radial-gradient(ellipse 55% 55% at 50% 55%, rgba(239,12,39,0.6) 0%, rgba(239,12,39,0.3) 35%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <img
              src={phoneImg}
              alt="Suprex poker app on mobile"
              draggable="false"
              className="relative z-10 w-full"
            />
          </div>

          {/* 3 game rows: 812 wide, gap 80, 15px top offset */}
          <div className="flex w-full flex-col gap-[clamp(28px,5.56vw,80px)] lg:flex-1 lg:pt-[15px]">
            {ROWS.map(({ num, title, desc, img }) => (
              <div
                key={num}
                className="flex flex-row items-start gap-[16px] sm:gap-[clamp(20px,2.36vw,34px)]"
              >
                {/* Thumbnail: 252×168, r=10 */}
                <img
                  src={img}
                  alt={title}
                  draggable="false"
                  className="h-auto w-[clamp(120px,26vw,252px)] flex-shrink-0 rounded-[10px] sm:w-[clamp(160px,17.5vw,252px)]"
                />

                {/* Text: badge + title + description */}
                <div className="flex min-w-0 flex-1 flex-col">
                  {/* Red number badge: 62×35 */}
                  <span className="inline-flex h-[30px] w-[52px] items-center justify-center rounded-[8px] bg-[#EF0C27] font-sans text-[15px] font-semibold leading-none text-white sm:h-[35px] sm:w-[62px] sm:rounded-[10px] sm:text-[18px]">
                    {num}
                  </span>

                  {/* Title */}
                  <h3 className="mt-[10px] font-sans text-[clamp(17px,2.22vw,32px)] font-semibold uppercase leading-[1.22] text-white sm:mt-[clamp(12px,1.39vw,20px)]">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-[8px] max-w-[526px] font-sans text-[clamp(13px,1.39vw,20px)] font-light leading-[1.55] text-[#B5B5B5] sm:mt-[12px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindYourGame;
