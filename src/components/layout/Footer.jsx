import { FOOTER_LINK_COLUMNS, SOCIAL_LINKS } from '../../constants/footer';

const FONT = "'Gilroy-SemiBold', 'Gilroy', 'Poppins', 'Inter', system-ui, sans-serif";

// Mobile: Legal → About side-by-side (row 1), Support full-width (row 2).
// Desktop: About | Legal | Support natural reading order.
const ORDER_CLASSES = {
  About: 'order-2 lg:order-1',
  Legal: 'order-1 lg:order-2',
  Support: 'order-3 col-span-2 md:col-span-1 lg:order-3',
};

function Footer() {
  // Render the same content blocks once and reuse them across the mobile stack
  // and desktop grid so we can lay them out differently at each breakpoint.
  const Logo = (
    <a
      href="/"
      aria-label="Suprex home"
      className="inline-block text-[clamp(32px,3.33vw,48px)] font-black uppercase leading-none tracking-tight"
    >
      <span className="text-white">SUPR</span>
      <span className="text-[#EF0C27]">EX</span>
    </a>
  );

  const Descriptions = (
    <div className="flex flex-col gap-4">
      <p
        className="m-0 leading-[1.5] text-white"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: '14px',
        }}
      >
        Experience gaming excellence. Where luck meets excitement.
      </p>
      <p
        className="m-0 leading-[1.5] text-white"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: '14px',
        }}
      >
        Suprex is committed to responsible gaming. Play
        <br className="hidden lg:block" />
        {' '}
        smart, stay safe, and enjoy responsibly.
      </p>
    </div>
  );

  const Regulatory = (
    <p
      className="m-0 leading-[1.5] text-white"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '14px',
      }}
    >
      18+. NO PURCHASE NECESSARY. VOID WHERE PROHIBITED by law
    </p>
  );

  const Copyright = (
    <div
      className="leading-[1.5] text-white"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '14px',
      }}
    >
      <p className="m-0">
        Copyright @ {new Date().getFullYear()} Suprex Academy LLC All Rights Reserved
      </p>
      <p className="m-0">
        Suprex operates under regulated jurisdictions, as described in Terms &amp; Conditions
      </p>
    </div>
  );

  const ClubGG = (
    <p
      className="m-0 text-[#6E6E72]"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '120%',
        letterSpacing: 0,
      }}
    >
      ClubGG is a free poker client that only offers poker gameplay with play money that doesn&apos;t have any monetary value and is not affiliated with, sponsoring, or endorsing this promotional activity.
    </p>
  );

  const Socials = (
    <ul className="flex flex-wrap items-center gap-3">
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-white/10 bg-[#1A1A1E] text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );

  const LinkColumns = (
    <div className="grid w-full grid-cols-2 gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(28px,3vw,40px)] md:grid-cols-3 lg:w-auto lg:grid-cols-3 lg:gap-x-[clamp(48px,5.5vw,80px)]">
      {FOOTER_LINK_COLUMNS.map(({ title, links }) => (
        <nav
          key={title}
          aria-label={title}
          className={`flex flex-col gap-4 ${ORDER_CLASSES[title] || ''}`}
        >
          <h3
            className="uppercase leading-[1.2] tracking-[0.02em] text-white"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '20px',
            }}
          >
            {title}
          </h3>
          <ul className="flex flex-col gap-3">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block whitespace-pre-line leading-[1.35] text-white transition-colors duration-200 hover:text-white/70 focus:outline-none"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );

  const Divider = <div aria-hidden="true" className="h-px w-full bg-white/10" />;

  return (
    <footer
      className="relative w-full overflow-hidden bg-[#0B0A10] lg:h-[482px]"
      style={{ fontFamily: FONT }}
    >
      {/* Bottom-center purple glow — concentrated behind the SUPREX watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[200px] w-[clamp(320px,45vw,640px)] -translate-x-1/2 rounded-[50%] bg-[#7717FF] opacity-40 blur-[140px]"
      />

      {/* Large faded SUPREX watermark — spans full viewport */}
      <h2
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[clamp(70px,22vw,270px)] font-black uppercase leading-[1] tracking-tight text-[#3A2770] lg:bottom-[-40px] lg:text-[#1E1533]"
      >
        SUPREX
      </h2>

      {/* Content wrapper — centered at max 1440px so layout stays readable on ultrawide */}
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* ─────────────── MOBILE LAYOUT (< lg) ─────────────── */}
        <div className="relative z-10 flex flex-col gap-6 px-[clamp(20px,4vw,32px)] pb-[clamp(28px,4vw,40px)] pt-[clamp(32px,4vw,44px)] lg:hidden">
          {Logo}
          {Descriptions}
          <div className="flex flex-col gap-0">
            {Regulatory}
            {Copyright}
          </div>
          {LinkColumns}
          {Divider}
          {ClubGG}
          {Socials}
        </div>

        {/* ─────────────── DESKTOP LAYOUT (lg+) ─────────────── */}
        <div className="relative z-10 hidden h-full flex-col gap-6 px-[clamp(40px,4.17vw,60px)] pb-[clamp(24px,2.5vw,36px)] pt-[clamp(40px,4vw,60px)] lg:flex">
          {/* Top: brand content (left) + link columns (right) */}
          <div className="flex flex-1 justify-between gap-[clamp(40px,5vw,72px)]">
            {/* Left column — logo, paragraphs, address, socials at bottom */}
            <div className="flex max-w-[560px] flex-col gap-6">
              {Logo}
              {Descriptions}
              <div className="flex flex-col gap-0">
                {Regulatory}
                {Copyright}
              </div>
              {Socials}
            </div>

            {/* Right column — link columns, aligned with the "Experience gaming..." paragraph */}
            <div className="pt-[72px]">{LinkColumns}</div>
          </div>

          {/* ClubGG at the very bottom, full width */}
          {ClubGG}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
