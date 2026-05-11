import { useNavigate } from 'react-router-dom';
import {
  FaPaperPlane,
  FaLayerGroup,
  FaWallet,
  FaClock,
  FaShieldHalved,
  FaMobileScreenButton,
} from 'react-icons/fa6';
// Note: the SVG filenames don't match their content.
// Frame 2087327220.svg = Purchase Bundles (title left, coins right)
// Frame 2087327221.svg = Player Dashboard (cards left, title right)
import cardPurchase from '../../assets/images/afterlogin/Frame 2087327220.svg';
import cardPlayer from '../../assets/images/afterlogin/Frame 2087327221.svg';
import mascot from '../../assets/images/afterlogin/features-player.svg';
// Filename-to-shape mapping in the source folder is inconsistent — swapping
// spade and clubs so that each variable name matches the actual suit rendered.
import suitSpade from '../../assets/images/afterlogin/SL_120319_25700_22-2 1.svg';
import suitHeart from '../../assets/images/afterlogin/love 1.svg';
import suitDiamond from '../../assets/images/afterlogin/SL_120319_25700_22-1 1.svg';
import suitClubs from '../../assets/images/afterlogin/SL_120319_25700_22 1.svg';
import LavaBackground from './LavaBackground';

const FEATURES = [
  { Icon: FaPaperPlane, title: 'Lightning-Fast Payouts', desc: 'Cash out winnings in seconds, never wait days.' },
  { Icon: FaLayerGroup, title: 'Clean Poker Client', desc: 'Every button where you expect it, zero fluff.' },
  { Icon: FaWallet, title: 'Instant Purchases', desc: 'Top up instantly with crypto, card, apple pay, google pay, or pay by bank.' },
  { Icon: FaClock, title: '24/7 Games', desc: 'Morning grind or midnight session, there’s always a seat open.' },
  { Icon: FaShieldHalved, title: 'Fully Legal and Secure', desc: '18+ and legal? You’re set. Secure, fair, and transparent.' },
  { Icon: FaMobileScreenButton, title: 'Mobile Friendly', desc: 'Play anywhere. Same games, rewards, and features.' },
];

// The source SVG has a Gaussian-blur red trapezoid with filterUnits="userSpaceOnUse"
// covering the whole viewBox; the dark card frame is inset ~30px on each side
// (x=30 to x=674 of a 705-wide viewBox). We crop the bleed by putting the img
// in an aspect-ratio container sized to the frame's bounding box (644/452) with
// overflow-hidden, and scaling/shifting the img so the frame fills the box.
// buttonStyle is { left, top, width, height } as % of the visible container.
function PromoCard({ image, label, onClick, buttonStyle }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[18px]"
      style={{ aspectRatio: '630 / 452' }}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute select-none"
        style={{ width: '111.9%', left: '-4.76%', top: '-0.22%' }}
      />
      <button
        type="button"
        onClick={onClick}
        style={{ ...buttonStyle, fontFamily: 'Inter, sans-serif' }}
        className="absolute inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[clamp(4px,0.42vw,6px)] bg-[#7717FF] px-[clamp(12px,2.5vw,36px)] py-[clamp(7px,1.4vw,20px)] text-[clamp(9px,1.05vw,15px)] font-bold leading-none text-white shadow-[0_4px_10px_rgba(119,23,255,0.35)] transition-colors hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
      >
        {label}
      </button>
    </div>
  );
}

function DashboardHero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="dashboard-hero-heading"
      className="relative w-full overflow-hidden bg-[#08070A]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px]"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 38% 100% at 0% 0%, rgba(120, 24, 255, 0.35), transparent 65%)',
            'radial-gradient(ellipse 38% 100% at 100% 0%, rgba(120, 24, 255, 0.35), transparent 65%)',
          ].join(', '),
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(16px,4vw,60px)] pb-[clamp(48px,6vw,96px)] pt-[clamp(20px,3vw,40px)]">
        <div className="grid grid-cols-1 gap-[clamp(8px,0.6vw,12px)] md:grid-cols-2">
          <PromoCard
            image={cardPlayer}
            label="View Dashboard"
            onClick={() => navigate('/dashboard')}
            buttonStyle={{ left: '57%', top: '55%' }}
          />
          <PromoCard
            image={cardPurchase}
            label="Purchase"
            onClick={() => navigate('/dashboard')}
            buttonStyle={{ left: '5%', top: '55%' }}
          />
        </div>

        <div className="relative mt-[clamp(40px,5vw,80px)] flex w-full flex-col items-center gap-[clamp(16px,2.5vw,36px)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[clamp(-20px,-1vw,0px)] z-[2] h-[clamp(360px,48vw,680px)] w-[clamp(340px,44vw,620px)] -translate-x-1/2"
          >
            <LavaBackground />
          </div>

          <img
            src={suitSpade}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute left-[5%] top-[4%] h-[clamp(60px,8vw,140px)] w-auto select-none md:left-[16%]"
          />
          <img
            src={suitHeart}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute right-[5%] top-[6%] h-[clamp(56px,7.5vw,130px)] w-auto select-none md:right-[16%]"
          />
          <img
            src={suitDiamond}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute left-[2%] top-[46%] h-[clamp(52px,7.5vw,130px)] w-auto select-none md:left-[6%]"
          />
          <img
            src={suitClubs}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute right-[2%] top-[46%] h-[clamp(52px,7.5vw,130px)] w-auto select-none md:right-[6%]"
          />

          <img
            src={mascot}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="relative z-10 w-[clamp(220px,31.53vw,454px)] select-none"
          />

          <div className="relative z-10 flex flex-col items-center gap-[clamp(16px,1.67vw,24px)] text-center">
            <h1
              id="dashboard-hero-heading"
              className="font-sans text-[clamp(32px,4.44vw,64px)] font-bold leading-[1.15] text-[#FFFFFF]"
            >
              <span className="block uppercase">Welcome to</span>
              <span className="block uppercase text-[#EF0C27]">Suprex</span>
            </h1>
            <button
              type="button"
              onClick={() => navigate('/purchase')}
              className="inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[clamp(24px,2.5vw,36px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.39vw,20px)] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
            >
              Play Now
            </button>
          </div>
        </div>

        <ul className="mt-[clamp(40px,5vw,80px)] grid w-full grid-cols-1 gap-[12px] xs:grid-cols-2 sm:gap-[16px] md:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="group relative min-h-[180px] rounded-[8.7px] p-[1px] transition-all duration-300 hover:bg-gradient-to-b hover:from-[#EF0C27] hover:via-[#EF0C27]/50 hover:to-[#EF0C27]/10 hover:shadow-[0_0_35px_rgba(239,12,39,0.35),0_0_15px_rgba(239,12,39,0.2)]"
            >
              <div className="flex h-full flex-col rounded-[7.7px] bg-[#19191A] px-[12px] pb-[16px] pt-[16px]">
                <div className="mb-[12.7px] flex h-[26px] w-[26px] items-center justify-center">
                  <Icon
                    className="text-[#EF0C27]"
                    style={{ width: 26, height: 26 }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-[13px] font-sans text-[16px] font-bold leading-[1.21] text-[#FFFFFF]">
                  {title}
                </h3>
                <p className="font-sans text-[13.9px] font-normal leading-[1.51] text-[#969696]">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DashboardHero;
