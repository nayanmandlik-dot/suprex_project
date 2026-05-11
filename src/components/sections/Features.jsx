import {
  FaPaperPlane,
  FaLayerGroup,
  FaWallet,
  FaClock,
  FaShieldHalved,
  FaMobileScreenButton,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
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

function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Animated lava effect — centered behind the mascot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[clamp(40px,5.5vw,110px)] z-[2] h-[clamp(360px,50vw,720px)] w-[clamp(320px,42vw,600px)] -translate-x-1/2"
      >
        <LavaBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[clamp(32px,4.17vw,60px)] px-[clamp(16px,4.17vw,60px)] pb-[clamp(48px,6.94vw,100px)] pt-[clamp(48px,6.94vw,100px)]">
        <div className="relative flex w-full flex-col items-center gap-[clamp(16px,2.5vw,36px)]">
          {/* Decorative suit icons from afterlogin/, positioned around the mascot */}
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
            alt="Character mascot"
            draggable="false"
            className="relative z-10 w-[clamp(220px,31.53vw,454px)] select-none"
          />

          <div className="relative z-10 flex flex-col items-center gap-[clamp(16px,1.67vw,24px)] text-center">
            <h2
              id="features-heading"
              className="font-sans text-[clamp(32px,4.44vw,64px)] font-bold leading-[1.15] text-[#FFFFFF]"
            >
              <span className="block uppercase">Welcome to</span>
              <span className="block uppercase text-[#EF0C27]">Suprex</span>
            </h2>
            <Button as={Link} to="/after-login">Play Now</Button>
          </div>
        </div>

        <ul className="grid w-full grid-cols-1 gap-[12px] xs:grid-cols-2 sm:gap-[16px] md:grid-cols-3 lg:grid-cols-6">
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

export default Features;
