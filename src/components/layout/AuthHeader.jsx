import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinGold from '../../assets/images/afterlogin/coin-1.svg';
import coinRed from '../../assets/images/afterlogin/coin-2.svg';
import iconBell from '../../assets/images/afterlogin/icon-bell.svg';
import iconAvatar from '../../assets/images/afterlogin/icon-avatar.svg';
import btnWallet from '../../assets/images/afterlogin/btn-wallet.svg';
import { useAuth } from '../../context/AuthContext';

// Authenticated header shown on the after-login / dashboard pages.
//   • Left: SUPREX wordmark
//   • Center: coin pill + chip pill + pre-styled purple wallet button (SVG)
//   • Right: bell (pink dot), avatar, username
// Fully responsive — center cluster collapses to a drop-down on mobile.
//
// Username defaults to the logged-in user's name from AuthContext; pages can
// still pass a `username` prop to override (e.g. for previews / storybook).
function AuthHeader({
  username,
  coinBalance = 0,
  chipBalance = '0.00',
  notificationsCount = 1,
  showLogout = true,
}) {
  const navigate = useNavigate();
  const { user, logout: signOut } = useAuth();
  const [balancesOpen, setBalancesOpen] = useState(false);
  const hasNotifications = notificationsCount > 0;
  const displayName = username ?? user?.username ?? 'Player';

  const handleLogout = () => {
    signOut();
    navigate('/', { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1E] bg-[#08070A]">
      <div className="mx-auto flex h-[98px] w-full max-w-[1440px] items-center justify-between gap-3 px-[clamp(16px,4vw,60px)]">
        {/* Left — Logo */}
        <Link
          to="/"
          aria-label="Suprex home"
          className="text-[clamp(22px,2vw,32px)] font-black uppercase leading-none tracking-tight"
        >
          <span className="text-white">SUPR</span>
          <span className="text-[#EF0C27]">EX</span>
        </Link>

        {/* Center — Balances + wallet (hidden on mobile) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/dashboard/chips"
            aria-label="View chip balances"
            className="flex items-center gap-1 rounded-xl border-[1.25px] border-[#232325] bg-[#0F0E13] p-1 transition-colors hover:border-[#3A3A3E] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/40"
          >
            <div className="flex items-center gap-2 rounded-lg bg-[#19181D] px-3 py-2">
              <img src={coinGold} alt="" aria-hidden="true" className="h-5 w-auto select-none" />
              <span
                className="text-[14px] font-medium text-white"
                aria-label={`${coinBalance} coins`}
              >
                {coinBalance}
              </span>
            </div>

            <span aria-hidden="true" className="h-5 w-px bg-white" />

            <div className="flex items-center gap-2 rounded-lg bg-[#19181D] px-3 py-2">
              <img src={coinRed} alt="" aria-hidden="true" className="h-5 w-auto select-none" />
              <span
                className="text-[14px] font-medium text-white"
                aria-label={`${chipBalance} chips`}
              >
                {chipBalance}
              </span>
            </div>
          </Link>

          <Link
            to="/dashboard/chips"
            aria-label="Open wallet"
            className="ml-1 inline-flex items-center justify-center rounded-[12.5px] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
          >
            <img
              src={btnWallet}
              alt=""
              aria-hidden="true"
              className="h-[42px] w-[42px] select-none"
            />
          </Link>
        </div>

        {/* Right — Notifications + user */}
        <div className="flex items-center gap-[clamp(8px,1vw,16px)]">
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <img
              src={iconBell}
              alt=""
              aria-hidden="true"
              className="h-[22px] w-[22px] select-none"
            />
          </button>

          <span aria-hidden="true" className="hidden h-8 w-px bg-white/15 sm:block" />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/profile"
              aria-label="View profile"
              className="flex items-center gap-2 rounded-[10px] px-2 py-1 transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 sm:gap-3"
            >
              <img
                src={iconAvatar}
                alt=""
                aria-hidden="true"
                className="h-9 w-9 select-none sm:h-10 sm:w-10"
              />
              <span className="hidden text-[14px] font-semibold text-white sm:inline">
                {displayName}
              </span>
            </Link>
            {showLogout && (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-[8px] border border-[#232325] bg-[#19181D] px-3 py-1.5 font-sans text-[12px] font-semibold text-white/80 transition-colors hover:bg-[#2A2A2E] focus:outline-none focus:ring-2 focus:ring-white/20 sm:inline-flex"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile wallet button (toggles balance drop-down) */}
          <button
            type="button"
            onClick={() => setBalancesOpen((v) => !v)}
            aria-expanded={balancesOpen}
            aria-controls="auth-balances-mobile"
            aria-label="Toggle balances"
            className="inline-flex items-center justify-center rounded-[12.5px] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60 md:hidden"
          >
            <img
              src={btnWallet}
              alt=""
              aria-hidden="true"
              className="h-10 w-10 select-none"
            />
          </button>
        </div>
      </div>

      {/* Mobile balances drop-down */}
      {balancesOpen && (
        <div
          id="auth-balances-mobile"
          className="border-t border-[#1A1A1E] bg-[#08070A] px-4 py-3 md:hidden"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-[#19181D] px-3 py-2">
              <img src={coinGold} alt="" aria-hidden="true" className="h-5 w-auto" />
              <span className="text-[14px] font-medium text-white">{coinBalance}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#19181D] px-3 py-2">
              <img src={coinRed} alt="" aria-hidden="true" className="h-5 w-auto" />
              <span className="text-[14px] font-medium text-white">{chipBalance}</span>
            </div>
            <span className="ml-auto text-[12px] text-white/60">{displayName}</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default AuthHeader;
