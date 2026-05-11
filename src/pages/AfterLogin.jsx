import AuthHeader from '../components/layout/AuthHeader';
import Footer from '../components/layout/Footer';
import DashboardHero from '../components/sections/DashboardHero';

function AfterLogin() {
  return (
    <div className="flex min-h-screen flex-col bg-[#08070A]">
      <AuthHeader showLogout={false} />
      <main className="flex-1">
        <DashboardHero />
      </main>
      <Footer />
    </div>
  );
}

export default AfterLogin;
