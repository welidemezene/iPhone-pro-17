import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Performance from './components/Performance';
import Camera from './components/Camera';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-900 text-lg font-light tracking-wide">iPhone 17 Pro</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Camera />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
