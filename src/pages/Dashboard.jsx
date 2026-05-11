import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
import AuthHeader from '../components/layout/AuthHeader';
import Footer from '../components/layout/Footer';
import heroIllustration from '../assets/images/loadchips/Group 1000004403.svg';
import socialChipsIcon from '../assets/images/loadchips/ChatGPT Image Dec 2, 2025, 01_58_42 PM 1 (1).svg';
import d1ChipsIcon from '../assets/images/loadchips/freepik__candid-photography-with-natural-textures-and-highl__282267 2 (1).svg';

// Mock activity feed — keep shape backend-friendly so it can swap in later.
const ACTIVITY = {
  load: [
    { id: 1, date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: '30.59', status: 'Success', reason: 'Lorem ipsum imperdiet nulla quis at.' },
    { id: 2, date: '12/12/2025 4:59 PM', club: 'Division 2', amount: '30.59', status: 'Failed', reason: 'Lorem ipsum imperdiet nulla quis at.' },
    { id: 3, date: '12/12/2025 4:59 PM', club: 'Division 5', amount: '30.59', status: 'Pending', reason: 'Lorem ipsum imperdiet nulla quis at.' },
    { id: 4, date: '12/12/2025 4:59 PM', club: 'Division 4', amount: '30.59', status: 'Success', reason: 'Lorem ipsum imperdiet nulla quis at.' },
  ],
  redemption: [
    { id: 5, date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: '50.00', status: 'Success', reason: 'Lorem ipsum imperdiet nulla quis at.' },
    { id: 6, date: '12/12/2025 4:59 PM', club: 'Division 2', amount: '25.00', status: 'Pending', reason: 'Lorem ipsum imperdiet nulla quis at.' },
  ],
  transfer: [
    { id: 7, date: '12/12/2025 4:59 PM', club: 'Division 3', amount: '100.00', status: 'Success', reason: 'Lorem ipsum imperdiet nulla quis at.' },
    { id: 8, date: '12/12/2025 4:59 PM', club: 'DOMINION', amount: '75.50', status: 'Failed', reason: 'Lorem ipsum imperdiet nulla quis at.' },
  ],
};

const TABS = [
  { key: 'load', label: 'Chip Load History' },
  { key: 'redemption', label: 'Chip Redemption History' },
  { key: 'transfer', label: 'Chip Transfer History' },
];

const ACTIONS = [
  { key: 'load', label: 'Load Chips' },
  { key: 'redeem', label: 'Redeem Chips' },
  { key: 'transfer', label: 'Transfer Chips' },
];

const STATUS_CLASS = {
  Success: 'text-[#66FF00]',
  Failed: 'text-[#EF0C27]',
  Pending: 'text-[#E4A324]',
};

function Dashboard() {
  const [activeAction, setActiveAction] = useState('load');
  const [activeTab, setActiveTab] = useState('load');

  const rows = ACTIVITY[activeTab] ?? [];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#080809] font-sans text-white">
      <AuthHeader showLogout={false} />

      <main className="relative flex-1 overflow-hidden">
        {/* ─────────── DECORATIVE BACKGROUND GLOWS ─────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[100px] z-0 h-[460px] w-[900px] -translate-x-1/4"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(119,23,255,0.40) 0%, rgba(119,23,255,0.18) 40%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[300px] -top-[200px] z-0 h-[700px] w-[900px]"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(119,23,255,0.32) 0%, rgba(40,12,90,0.18) 45%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[150px] top-[820px] z-0 h-[460px] w-[460px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(119,23,255,0.35) 0%, rgba(60,18,140,0.18) 40%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />

        {/* ─────────── HERO ─────────── */}
        <section className="relative z-10 mx-auto w-full max-w-[1440px] px-[clamp(20px,4vw,60px)] pt-[85px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="flex max-w-[650px] flex-col gap-[29px]">
              <h1
                className="text-[clamp(40px,4.44vw,64px)] capitalize leading-none text-white"
                style={{ fontFamily: "'Bebas Neue', 'Oswald', 'Inter', sans-serif", letterSpacing: '0.02em' }}
              >
                <span className="block">Player</span>
                <span className="block">Dashboard</span>
              </h1>
              <p className="font-light text-[clamp(16px,1.67vw,24px)] leading-[1.33] text-[#939294]">
                Your chips, ready for action.
                <br />
                Track your balance, load up, and move chips across clubs in seconds.
              </p>
              <button
                type="button"
                className="inline-flex w-fit items-center justify-center rounded-[12px] bg-[#7717FF] px-[26px] py-[12px] text-[clamp(14px,1.39vw,20px)] font-bold capitalize text-[#FAFAFA] transition-colors hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
              >
                Daily Bonus
              </button>
            </div>

            <div className="relative flex flex-shrink-0 items-center justify-center md:justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[12%] left-1/2 z-0 h-[80px] w-[clamp(280px,30vw,420px)] -translate-x-1/2 rounded-full"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(239,12,39,0.55) 0%, rgba(239,12,39,0.25) 40%, transparent 75%)',
                  filter: 'blur(28px)',
                }}
              />
              <img
                src={heroIllustration}
                alt="Poker cards and chip"
                draggable="false"
                className="relative z-10 h-auto w-[clamp(280px,33vw,474px)] select-none"
              />
            </div>
          </div>
        </section>

        {/* ─────────── BALANCE + ACTIONS MODULE ─────────── */}
        <section className="relative z-10 mx-auto mt-[60px] w-full max-w-[1440px] px-[clamp(20px,4vw,60px)]">
          <div className="flex flex-col gap-[40px] rounded-[20px] bg-[#131314] p-[clamp(18px,2vw,30px)]">
            <div className="grid grid-cols-1 gap-[clamp(20px,3.33vw,48px)] md:grid-cols-2">
              {/* Social Chips */}
              <div className="relative flex h-[116px] items-center overflow-hidden rounded-[14px] border border-[#232325] bg-[#202022] p-[clamp(16px,2vw,30px)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[51px] top-1/2 z-0 size-[180px] -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(245,158,11,0.45) 0%, rgba(245,158,11,0.18) 40%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
                <div className="relative z-10 flex flex-1 items-center justify-between">
                  <div className="flex items-center gap-[12px]">
                    <img src={socialChipsIcon} alt="" aria-hidden="true" className="h-[48px] w-[44px] select-none rounded-br-[18px] object-cover" />
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-light text-[clamp(16px,1.67vw,24px)] leading-none text-[#939294]">Social Chips</p>
                      <p className="font-semibold text-[clamp(18px,1.67vw,24px)] leading-none text-white">0.00</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-[6px] rounded-[8px] bg-[#EF0C27] px-[14px] py-[10px] text-[14px] font-bold text-white transition-colors hover:bg-[#C9091F] focus:outline-none focus:ring-2 focus:ring-[#EF0C27]/50"
                    style={{ boxShadow: 'inset 0 -4px 16px rgba(238,238,238,0.04), inset 0 4px 16px rgba(238,238,238,0.04)' }}
                  >
                    <FaPlus size={14} aria-hidden="true" />
                    Add Free Chips
                  </button>
                </div>
              </div>

              {/* D1 Chips */}
              <div className="relative flex h-[116px] items-center overflow-hidden rounded-[14px] border border-[#232325] bg-[#202022] p-[clamp(16px,2vw,30px)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[51px] top-1/2 z-0 size-[180px] -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(239,12,39,0.45) 0%, rgba(239,12,39,0.18) 40%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
                <div className="relative z-10 flex flex-1 items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <img src={d1ChipsIcon} alt="" aria-hidden="true" className="h-[48px] w-[41px] select-none object-bottom" />
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-light text-[clamp(16px,1.67vw,24px)] leading-none text-[#939294]">D1 Chips</p>
                      <p className="font-semibold text-[clamp(18px,1.67vw,24px)] leading-none text-white">0.00</p>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#EF0C27] px-[14px] py-[10px] text-[14px] font-bold text-white transition-colors hover:bg-[#C9091F] focus:outline-none focus:ring-2 focus:ring-[#EF0C27]/50"
                    style={{ boxShadow: 'inset 0 -4px 16px rgba(238,238,238,0.04), inset 0 4px 16px rgba(238,238,238,0.04)' }}
                  >
                    Buy Chips
                  </Link>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div role="tablist" aria-label="Chip actions" className="grid grid-cols-1 gap-[clamp(12px,2vw,30px)] md:grid-cols-3">
              {ACTIONS.map(({ key, label }) => {
                const isActive = activeAction === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveAction(key)}
                    className={`flex h-[58px] items-center justify-center rounded-[10.153px] p-[12.183px] text-[clamp(13px,1.23vw,17.7px)] font-bold capitalize text-[#FAFAFA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50 ${
                      isActive ? 'bg-[#7717FF] hover:bg-[#6611E0]' : 'bg-[#202022] hover:bg-[#28282A]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────── CHIP ACTIVITY HISTORY ─────────── */}
        <section className="relative z-10 mx-auto mt-[80px] w-full max-w-[1440px] px-[clamp(20px,4vw,60px)] pb-[80px]">
          <div className="flex flex-col gap-[40px]">
            <h2 className="text-[clamp(22px,2.08vw,30px)] font-semibold capitalize text-white">
              Chip Activity History
            </h2>

            <div className="flex flex-col gap-[40px]">
              <div role="tablist" aria-label="Activity tabs" className="inline-flex w-fit gap-[10px] rounded-[10px] bg-[#19191A] p-[8px]">
                {TABS.map(({ key, label }) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(key)}
                      className={`inline-flex items-center justify-center gap-[12px] rounded-[6px] px-[14px] py-[12px] text-[clamp(13px,1.11vw,16px)] font-semibold capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                        isActive
                          ? 'border-b-2 border-[#7717FF] bg-[#232325] text-[#F5F5F7]'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[840px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#232325]">
                      {['Date', 'Club', 'Chip Amount', 'Status', 'Reason'].map((label, i, arr) => (
                        <th
                          key={label}
                          className="relative h-[56px] px-[20px] py-[20px] text-left align-middle text-[14px] font-semibold tracking-[0.2px] text-[#E8E7E8]"
                        >
                          {label}
                          {i < arr.length - 1 && (
                            <span aria-hidden="true" className="absolute right-0 top-1/2 h-[14px] w-[2px] -translate-y-1/2 bg-[#E8E7E8]" />
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-[20px] py-[40px] text-center text-[#939294]">
                          No activity yet.
                        </td>
                      </tr>
                    ) : (
                      rows.map((row) => (
                        <tr key={row.id} className="border-b border-[#141316] transition-colors hover:bg-white/[0.02]">
                          <td className="px-[20px] py-[20px] text-[14px] font-bold leading-[22px] text-white">{row.date}</td>
                          <td className="px-[20px] py-[20px] text-[14px] text-white">{row.club}</td>
                          <td className="px-[20px] py-[20px] text-[14px] text-white">{row.amount}</td>
                          <td className={`px-[20px] py-[20px] text-[14px] font-medium leading-[24px] tracking-[0.2px] ${STATUS_CLASS[row.status] ?? ''}`}>
                            {row.status}
                          </td>
                          <td className="px-[20px] py-[20px] text-[14px] text-white">{row.reason}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
