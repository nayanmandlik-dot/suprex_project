import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HomeHero from '../components/sections/HomeHero';
import Features from '../components/sections/Features';
import FindYourGame from '../components/sections/FindYourGame';
import WhyJoinPoker from '../components/sections/WhyJoinPoker';
import WhyJoin from '../components/sections/WhyJoin';
import FAQ from '../components/sections/FAQ';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <Features />
        <FindYourGame />
        <WhyJoinPoker />
        <FAQ />
        <WhyJoin />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
