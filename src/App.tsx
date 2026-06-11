import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import TechStack from './components/TechStack';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-800 dark:text-surface-100 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <TechStack />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
