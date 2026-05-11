import { useState } from 'react';
import { mockChipActivity } from '../../constants/chipActivity';

const TABS = [
  { key: 'load', label: 'Chip Load History' },
  { key: 'redemption', label: 'Chip Redemption History' },
  { key: 'transfer', label: 'Chip Transfer History' },
];

const STATUS_STYLES = {
  success: 'text-[#22C55E]',
  failed: 'text-[#EF0C27]',
  pending: 'text-[#F59E0B]',
};

const STATUS_LABEL = {
  success: 'Success',
  failed: 'Failed',
  pending: 'Pending',
};

// Props:
//   data (optional) — override the mock feed when a backend hooks in later.
//                     Shape: { load: [], redemption: [], transfer: [] }
//   loading (optional) — show a placeholder while data is fetching.
function ChipActivityHistory({ data = mockChipActivity, loading = false }) {
  const [activeTab, setActiveTab] = useState('load');
  const rows = data?.[activeTab] ?? [];

  return (
    <section
      aria-labelledby="chip-activity-heading"
      className="flex w-full flex-col gap-[clamp(16px,1.8vw,24px)]"
    >
      <h2
        id="chip-activity-heading"
        className="font-sans text-[clamp(20px,2vw,28px)] font-bold leading-[1.2] text-white"
      >
        Chip Activity History
      </h2>

      <div
        role="tablist"
        aria-label="Chip activity history tabs"
        className="inline-flex w-fit items-center gap-1 rounded-[10px] bg-[#141316] p-1"
      >
        {TABS.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(key)}
              className={`inline-flex items-center justify-center rounded-[8px] px-[clamp(12px,1.4vw,20px)] py-[clamp(8px,0.9vw,12px)] font-sans text-[clamp(11px,0.9vw,13px)] font-semibold leading-[1.21] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                isActive
                  ? 'bg-[#1F1D24] text-white shadow-[inset_0_-2px_0_#7717FF]'
                  : 'text-[#B5B5B5] hover:text-white'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full table-fixed border-collapse font-sans text-[13px] text-white">
          <thead>
            <tr className="text-left text-[#B5B5B5]">
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Club</th>
              <th className="px-4 py-3 font-medium">Chip Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Reason</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <tr key={`skeleton-${i}`}>
                  {Array.from({ length: 5 }).map((__, j) => (
                    <td key={j} className="px-4 py-4">
                      <span className="block h-3 w-full max-w-[140px] animate-pulse rounded bg-white/5" />
                    </td>
                  ))}
                </tr>
              ))
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-[#B5B5B5]">
                  No activity yet.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-4 py-4 font-semibold">{row.date}</td>
                  <td className="px-4 py-4">{row.club}</td>
                  <td className="px-4 py-4">{row.amount.toFixed(2)}</td>
                  <td className={`px-4 py-4 font-semibold ${STATUS_STYLES[row.status] ?? ''}`}>
                    {STATUS_LABEL[row.status] ?? row.status}
                  </td>
                  <td className="px-4 py-4 text-[#B5B5B5]">{row.reason}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ChipActivityHistory;
