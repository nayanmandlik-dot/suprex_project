import { useState } from 'react';
import AuthHeader from '../components/layout/AuthHeader';
import Footer from '../components/layout/Footer';
import LoadChipHero from '../components/sections/LoadChipHero';
import BalanceCards from '../components/sections/BalanceCards';
import ChipActionTabs from '../components/sections/ChipActionTabs';
import ChipActivityHistory from '../components/sections/ChipActivityHistory';

function LoadChip() {
  const [activeAction, setActiveAction] = useState('load');

  return (
    <div className="flex min-h-screen flex-col bg-[#08070A]">
      <AuthHeader username="Nayan" />

      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[clamp(20px,2vw,32px)] px-[clamp(16px,4vw,60px)] pb-[clamp(48px,6vw,96px)] pt-[clamp(20px,3vw,40px)]">
          <LoadChipHero />

          <div className="flex w-full flex-col gap-[clamp(12px,1.2vw,18px)] rounded-[16px] border-[1.5px] border-[#2A2A2E] bg-[#121115] p-[clamp(14px,1.4vw,22px)] shadow-[0_0_0_1px_rgba(0,0,0,0.4)]">
            <BalanceCards />
            <ChipActionTabs active={activeAction} onChange={setActiveAction} />
          </div>

          <ChipActivityHistory />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LoadChip;
