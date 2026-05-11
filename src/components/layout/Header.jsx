import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Games', href: '#games' },
  { label: 'Support', href: '#support' },
];

function Header() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('About');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/register', { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#232325] bg-[#0E0D10]">
      <div className="mx-auto flex h-[98px] w-full max-w-[1440px] items-center justify-between px-[clamp(16px,4.17vw,60px)] py-[clamp(16px,1.67vw,24px)]">
        <Link
          to="/"
          className="font-sans text-[clamp(20px,2.24vw,32.21px)] font-bold uppercase leading-[1.18] tracking-normal"
          aria-label="Suprex home"
        >
          <span className="text-[#FFFFFF]">Supr</span>
          <span className="text-[#EF0C27]">ex</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-[clamp(20px,4.17vw,60px)]">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = activeItem === label;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex items-center justify-center rounded-[6px] px-[10px] py-[10px] font-sans font-semibold leading-[1.21] transition-colors duration-200 ${
                      isActive
                        ? 'border-b-2 border-[#7717FF] text-[clamp(11px,0.97vw,14px)] text-[#FFFFFF]'
                        : 'text-[clamp(12px,1.11vw,16px)] text-[#B5B5B5] hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-[clamp(8px,0.83vw,12px)] md:flex">
          <Link
            to="/login"
            className="inline-flex h-[clamp(36px,3.125vw,45px)] w-[clamp(80px,6.94vw,100px)] items-center justify-center rounded-[10px] bg-[#2F2D32] font-sans text-[clamp(11px,0.97vw,14px)] font-semibold leading-[1.21] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#3a363b] focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex h-[clamp(36px,3.125vw,45px)] w-[clamp(80px,6.94vw,100px)] items-center justify-center rounded-[10px] bg-[#7717FF] font-sans text-[clamp(11px,0.97vw,14px)] font-semibold leading-[1.21] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50"
          >
            Dashboard
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden"
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-[#232325] bg-[#0E0D10] md:hidden"
        >
          <nav aria-label="Mobile" className="px-4 py-4">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = activeItem === label;
                return (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => handleNavClick(label)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block rounded-lg px-3 py-3 font-sans text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-white/5 text-[#FFFFFF]'
                          : 'text-[#B5B5B5] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-[45px] w-full items-center justify-center rounded-[10px] bg-[#2F2D32] font-sans text-sm font-semibold text-[#FFFFFF]"
              >
                Login
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-[45px] w-full items-center justify-center rounded-[10px] bg-[#7717FF] font-sans text-sm font-semibold text-[#FFFFFF]"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
