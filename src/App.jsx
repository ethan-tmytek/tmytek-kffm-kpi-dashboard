import { useCallback } from 'react';
import { Chart as ChartJS } from 'chart.js';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import InteractiveMap from './components/InteractiveMap';
import AnalyticsSection from './components/AnalyticsSection';
import Footer from './components/Footer';

ChartJS.defaults.font.family = "'Noto Sans TC', sans-serif";
ChartJS.defaults.color = '#78716c';

export default function App() {
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="text-stone-800 antialiased">
      <Navbar scrollTo={scrollTo} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <IntroSection />
        <InteractiveMap />
        <AnalyticsSection />
      </main>
      <Footer />
    </div>
  );
}
