import { FaXTwitter, FaDiscord, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import bgImage from '../../assets/images/community-background.svg';
import cardBg from '../../assets/images/community-card.svg';

const SOCIALS = [
  { label: 'X (Twitter)', href: '#', Icon: FaXTwitter },
  { label: 'Discord', href: '#', Icon: FaDiscord },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
];

function WhyJoin() {
  return (
    <section
      aria-labelledby="join-community-heading"
      className="relative w-full overflow-hidden"
    >
      {/* Background image as <img> for reliable rendering */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      <div className="relative z-10 flex items-center justify-center px-[clamp(16px,4.17vw,60px)] py-[clamp(48px,8.47vw,122px)]">
        <div
          className="relative w-full max-w-[943px] overflow-hidden rounded-[clamp(20px,2.92vw,42px)] border border-white/15 backdrop-blur-xl"
        >
          <img
            src={cardBg}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          />

          <div className="relative z-10 flex flex-col items-center gap-[clamp(24px,2.78vw,40px)] px-[clamp(20px,3.47vw,50px)] py-[clamp(32px,4.17vw,60px)] text-center">
            <div className="flex flex-col gap-4">
              <h2
                id="join-community-heading"
                className="font-sans text-[clamp(28px,3.33vw,48px)] font-semibold leading-[1.22] text-white"
              >
                Join Our Community
              </h2>
              <p className="mx-auto max-w-[745px] font-sans text-[clamp(14px,1.39vw,20px)] font-normal leading-[1.4] text-[#E8E8E8]">
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
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#141316] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[12px] bg-[#7717FF] px-[clamp(24px,2.5vw,36px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.39vw,20px)] font-semibold leading-[1.21] text-white transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
              >
                Join Telegram Channel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
