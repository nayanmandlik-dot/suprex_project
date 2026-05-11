import { useNavigate } from 'react-router-dom';
import AuthHeader from '../components/layout/AuthHeader';
import Footer from '../components/layout/Footer';

function Purchase() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[#08070A]">
      <AuthHeader username="Nayan" />
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-sans text-[clamp(28px,4vw,56px)] font-extrabold uppercase text-white">
            Purchase Bundles
          </h1>
          <p className="max-w-[480px] text-[15px] leading-[1.5] text-white/60">
            Chip purchase flow coming soon.
          </p>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="mt-2 inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-8 py-3 font-sans text-[14px] font-bold text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Purchase;
