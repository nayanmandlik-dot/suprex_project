import { Link } from 'react-router-dom';
import card1 from '../../assets/images/Frame 2087327205.svg';
import card2 from '../../assets/images/Frame 2087327206.svg';
import card3 from '../../assets/images/Frame 2087327207.svg';

const CARDS = [
  {
    img: card1,
    alt: 'Online poker player holding cards at a table',
    title: (
      <>
        <span className="block">Online Poker</span>
        <span className="block">You Can Trust</span>
      </>
    ),
    desc: 'Play with confidence in a legal sweepstakes poker environment available in 40 states.',
    cta: 'Play Now',
    to: '/after-login',
  },
  {
    img: card2,
    alt: 'Glowing poker championship trophy',
    title: (
      <span className="block">
        Real Players{' '}
        <span aria-hidden="true" className="inline-block">
          →
        </span>{' '}
        Real Prizes
      </span>
    ),
    desc: 'Battle against players across America for your chance to win real cash prizes.',
    cta: 'Play Now',
    to: '/after-login',
  },
  {
    img: card3,
    alt: 'Money bag with poker chips and cash',
    title: (
      <>
        <span className="block">Get 20 D1 Chips For</span>
        <span className="block">
          Just <span className="text-[#EF0C27]">$10!</span>
        </span>
      </>
    ),
    desc: 'All players receive a 100% purchase match from our special welcome bundle.',
    cta: 'Claim Offer',
    to: '/after-login',
  },
];

function WhyJoinPoker() {
  return (
    <section
      aria-labelledby="why-join-poker-heading"
      className="relative w-full overflow-hidden bg-black"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[clamp(28px,4.17vw,60px)] px-[clamp(16px,4.17vw,60px)] py-[clamp(48px,6.94vw,100px)]">
        <h2
          id="why-join-poker-heading"
          className="text-center font-sans text-[clamp(22px,3.33vw,48px)] font-bold leading-[1.15] text-white"
        >
          Why Join SUPREX Poker?
        </h2>

        <ul className="flex w-full max-w-[1315px] flex-col gap-[clamp(16px,2.22vw,32px)]">
          {CARDS.map(({ img, alt, title, desc, cta, to }, idx) => (
            <li
              key={idx}
              className="relative w-full overflow-hidden rounded-[12px] sm:rounded-[16px]"
            >
              <img
                src={img}
                alt={alt}
                draggable="false"
                className="block h-auto w-full select-none"
              />

              <div className="absolute inset-y-0 left-0 flex w-[52%] flex-col justify-center px-[clamp(12px,3.47vw,50px)] py-[clamp(8px,1.5vw,20px)] sm:w-[48%] md:w-[45%] lg:w-[42%]">
                <h3
                  className="text-[clamp(11px,2.22vw,32px)] font-semibold uppercase leading-[1.1] text-white"
                  style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-[clamp(4px,1.11vw,16px)] text-[clamp(8px,1.39vw,20px)] font-light leading-[1.5] text-[#B5B5B5] lg:leading-[30px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {desc}
                </p>
                <Link
                  to={to}
                  className="mt-[clamp(6px,1.94vw,28px)] inline-flex w-fit items-center justify-center rounded-[6px] bg-[#7717FF] px-[clamp(10px,2.5vw,36px)] py-[clamp(5px,1.39vw,20px)] font-sans text-[clamp(9px,1.11vw,16px)] font-bold leading-[1.21] text-white transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60 sm:rounded-[8px]"
                >
                  {cta}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyJoinPoker;
