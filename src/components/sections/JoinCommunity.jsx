import { FaTelegram, FaXTwitter, FaInstagram, FaDiscord } from 'react-icons/fa6';
import Button from '../ui/Button';
import ctaBg from '../../assets/images/community-background.svg';
import cardBg from '../../assets/images/community-card.svg';

const SOCIALS = [
  { label: 'Telegram', href: '#', Icon: FaTelegram },
  { label: 'X (Twitter)', href: '#', Icon: FaXTwitter },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'Discord', href: '#', Icon: FaDiscord },
];

function JoinCommunity() {
  return (
    <section
      aria-labelledby="community-heading"
      className="relative mx-auto w-full max-w-[1440px] overflow-hidden"
    >
      {/* Blurred background image — rendered as an <img> (not as CSS
          background-image) so filter:blur() paints reliably across browsers.
          transform:scale(1.08) + overflow-hidden clip the blurred edges. */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        style={{
          filter: 'blur(24px)',
          transform: 'scale(1.08)',
          transformOrigin: 'center',
        }}
      />

      <div className="relative z-10 flex items-center justify-center px-[clamp(16px,4.17vw,60px)] py-[clamp(48px,8.47vw,122px)]">
        <div
          className="w-full max-w-[943px] overflow-hidden rounded-[clamp(20px,2.92vw,42px)] border border-white/15 bg-white/[0.08] backdrop-blur-[8.7px]"
          style={{
            backgroundImage: `url(${cardBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center gap-[clamp(24px,2.78vw,40px)] px-[clamp(20px,3.47vw,50px)] py-[clamp(32px,4.17vw,60px)] text-center">
            <div className="flex flex-col gap-4">
              <h2
                id="community-heading"
                className="font-sans text-[clamp(28px,3.33vw,48px)] font-semibold leading-[1.22] text-[#FFFFFF]"
              >
                Join Our Community
              </h2>
              <p className="mx-auto max-w-[745px] font-sans text-[clamp(14px,1.39vw,20px)] font-normal leading-[1.21] text-[#E8E8E8]">
                Be apart of the fastest growing online poker community. Join our
                Telegram Channel and follow us on socials to stay up to date
                with the latest news, rewards, and giveaways!
              </p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <ul className="flex flex-wrap items-center justify-center gap-5">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#141316] text-[#FFFFFF] transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <Button>Join Telegram Channel</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
