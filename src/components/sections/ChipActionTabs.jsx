const ACTIONS = [
  { key: 'load', label: 'Load Chips' },
  { key: 'redeem', label: 'Redeem Chips' },
  { key: 'transfer', label: 'Transfer Chips' },
];

function ChipActionTabs({ active = 'load', onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Chip actions"
      className="grid w-full grid-cols-1 gap-[clamp(10px,1vw,14px)] sm:grid-cols-3"
    >
      {ACTIONS.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(key)}
            className={`inline-flex items-center justify-center rounded-[10px] px-6 py-[clamp(12px,1.25vw,18px)] font-sans text-[clamp(12px,1vw,14px)] font-semibold leading-[1.21] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50 ${
              isActive
                ? 'bg-[#7717FF] text-white hover:bg-[#6611E0]'
                : 'border border-[#232325] bg-[#141316] text-white/90 hover:bg-[#1C1B1E]'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default ChipActionTabs;
