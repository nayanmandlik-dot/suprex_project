import coinGold from '../../assets/images/afterlogin/coin-1.svg';
import coinRed from '../../assets/images/afterlogin/coin-2.svg';

const BALANCES = [
  {
    key: 'social',
    label: 'Social Chips',
    amount: '0.00',
    icon: coinGold,
    iconAlt: 'Social chips icon',
    iconHaloGradient:
      'radial-gradient(circle, rgba(245,158,11,0.55) 0%, rgba(245,158,11,0.28) 45%, transparent 75%)',
    cta: 'Add Free Chips',
  },
  {
    key: 'd1',
    label: 'D1 Chips',
    amount: '0.00',
    icon: coinRed,
    iconAlt: 'D1 chips icon',
    iconHaloGradient:
      'radial-gradient(circle, rgba(239,12,39,0.55) 0%, rgba(239,12,39,0.28) 45%, transparent 75%)',
    cta: 'Buy Chips',
  },
];

function BalanceCards() {
  return (
    <ul className="grid w-full grid-cols-1 gap-[clamp(10px,1vw,14px)] md:grid-cols-2">
      {BALANCES.map(({ key, label, amount, icon, iconAlt, iconHaloGradient, cta }) => (
        <li
          key={key}
          className="flex items-center justify-between gap-4 rounded-[12px] border border-[#232325] bg-[#141316] px-[clamp(16px,1.8vw,24px)] py-[clamp(14px,1.4vw,20px)]"
        >
          <div className="flex items-center gap-3">
            <div
              className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: iconHaloGradient }}
            >
              <img src={icon} alt={iconAlt} draggable="false" className="relative h-8 w-8 select-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[13px] font-medium leading-[1.3] text-[#B5B5B5]">
                {label}
              </span>
              <span className="font-sans text-[18px] font-bold leading-[1.2] text-white">
                {amount}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-1 rounded-[8px] bg-[#EF0C27] px-[clamp(12px,1.2vw,18px)] py-[clamp(7px,0.7vw,10px)] font-sans text-[clamp(11px,0.9vw,13px)] font-semibold leading-[1.21] text-white transition-colors duration-200 hover:bg-[#C9091F] focus:outline-none focus:ring-2 focus:ring-[#EF0C27]/50"
          >
            <span aria-hidden="true" className="text-[13px]">+</span>
            {cta}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BalanceCards;
