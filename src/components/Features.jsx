import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { iphone17Features } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);

  useGSAP(() => {
    // Section title animation
    gsap.fromTo('.feature-section-title',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.feature-section-title',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Feature cards animation
    gsap.fromTo('.feature-card',
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.feature-cards',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect on feature images
    gsap.to('.feature-image', {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: '.feature-image',
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="feature-section-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none mb-6 drop-shadow-2xl"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
            Features
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mt-6 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
            Revolutionary technology that redefines what's possible
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={featuresRef} className="feature-cards grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* A17 Bionic Ultra Chip */}
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 to-blue-800/30 p-6 sm:p-8 lg:p-12 border border-blue-700/50 backdrop-blur-sm hover:border-blue-600/50 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                <div className="feature-image flex-shrink-0 self-center lg:self-start">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl lg:text-3xl">🚀</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    A17 Bionic Ultra Chip
                  </h3>
                  <p className="text-base lg:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-sm font-semibold">
                    The most powerful chip ever in a smartphone. 40% faster performance with revolutionary AI capabilities.
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div className="bg-blue-800/60 rounded-lg p-3 border border-blue-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">CPU</div>
                      <div className="text-white font-semibold text-base">3.2 GHz 8-core</div>
                    </div>
                    <div className="bg-blue-800/60 rounded-lg p-3 border border-blue-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">GPU</div>
                      <div className="text-white font-semibold text-base">8-core</div>
                    </div>
                    <div className="bg-blue-800/60 rounded-lg p-3 border border-blue-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Neural</div>
                      <div className="text-white font-semibold text-base">16-core</div>
                    </div>
                    <div className="bg-blue-800/60 rounded-lg p-3 border border-blue-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Improvement</div>
                      <div className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-bold inline-block">+40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 240Hz ProMotion Display */}
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900/40 to-green-800/30 p-6 sm:p-8 lg:p-12 border border-green-700/50 backdrop-blur-sm hover:border-green-600/50 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                <div className="feature-image flex-shrink-0 self-center lg:self-start">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl lg:text-3xl">📱</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    240Hz ProMotion Display
                  </h3>
                  <p className="text-base lg:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-sm font-semibold">
                    Ultra-smooth 240Hz refresh rate for gaming and content creation. The most responsive display ever.
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div className="bg-green-800/60 rounded-lg p-3 border border-green-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Size</div>
                      <div className="text-white font-semibold text-base">6.1"</div>
                    </div>
                    <div className="bg-green-800/60 rounded-lg p-3 border border-green-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Resolution</div>
                      <div className="text-white font-semibold text-base">2556 x 1179</div>
                    </div>
                    <div className="bg-green-800/60 rounded-lg p-3 border border-green-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Refresh</div>
                      <div className="text-white font-semibold text-base">240Hz</div>
                    </div>
                    <div className="bg-green-800/60 rounded-lg p-3 border border-green-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Brightness</div>
                      <div className="text-white font-semibold text-base">2000 nits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LightRay AI Zoom */}
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-6 sm:p-8 lg:p-12 border border-purple-700/50 backdrop-blur-sm hover:border-purple-600/50 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                <div className="feature-image flex-shrink-0 self-center lg:self-start">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl lg:text-3xl">🔍</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    LightRay AI Zoom
                  </h3>
                  <p className="text-base lg:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-sm font-semibold">
                    Revolutionary AI-powered zoom technology with crystal clear quality at any distance.
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div className="bg-purple-800/60 rounded-lg p-3 border border-purple-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Main</div>
                      <div className="text-white font-semibold text-base">64MP</div>
                    </div>
                    <div className="bg-purple-800/60 rounded-lg p-3 border border-purple-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Ultra</div>
                      <div className="text-white font-semibold text-base">20MP</div>
                    </div>
                    <div className="bg-purple-800/60 rounded-lg p-3 border border-purple-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Tele</div>
                      <div className="text-white font-semibold text-base">12MP 5x</div>
                    </div>
                    <div className="bg-purple-800/60 rounded-lg p-3 border border-purple-700/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">AI</div>
                      <div className="text-white font-semibold text-base">LightRay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Titanium Ultra Edge */}
          <div className="feature-card group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-700/30 p-6 sm:p-8 lg:p-12 border border-gray-600/50 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 shadow-2xl hover:shadow-3xl">
              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                <div className="feature-image flex-shrink-0 self-center lg:self-start">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl lg:text-3xl">💎</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                    Titanium Ultra Edge
                  </h3>
                  <p className="text-base lg:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-sm font-semibold">
                    Aerospace-grade titanium with ultra-thin bezels for maximum screen real estate.
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-sm">
                    <div className="bg-gray-700/60 rounded-lg p-3 border border-gray-600/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Material</div>
                      <div className="text-white font-semibold text-base">Titanium</div>
                    </div>
                    <div className="bg-gray-700/60 rounded-lg p-3 border border-gray-600/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Bezels</div>
                      <div className="text-white font-semibold text-base">0.5mm</div>
                    </div>
                    <div className="bg-gray-700/60 rounded-lg p-3 border border-gray-600/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Weight</div>
                      <div className="text-white font-semibold text-base">185g</div>
                    </div>
                    <div className="bg-gray-700/60 rounded-lg p-3 border border-gray-600/50 backdrop-blur-sm">
                      <div className="font-bold text-white uppercase tracking-wide text-xs">Durability</div>
                      <div className="text-white font-semibold text-base">Military grade</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;