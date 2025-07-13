import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const phoneRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const videoRef = useRef(null);
  const lightRef = useRef(null);

  useGSAP(() => {
    // Hero title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Subtitle animation
    gsap.fromTo(subtitleRef.current,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.2
      }
    );

    // Phone animation with parallax
    gsap.fromTo(phoneRef.current,
      {
        opacity: 0,
        scale: 0.7,
        rotationY: -10,
        y: 60
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.8
      }
    );

    // CTA animation
    gsap.fromTo(ctaRef.current,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.8
      }
    );

    // Scroll indicator animation
    gsap.fromTo(scrollIndicatorRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 2.5
      }
    );

    // Parallax effect on phone
    gsap.to(phoneRef.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Video parallax effect
    gsap.to(videoRef.current, {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Floating light animation
    gsap.to(lightRef.current, {
      y: -20,
      x: 10,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });

  }, []);

  // Mouse move effect for lights
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const lights = document.querySelectorAll('.floating-light');

      lights.forEach((light, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX * speed) / window.innerWidth;
        const y = (clientY * speed) / window.innerHeight;

        gsap.to(light, {
          x: x * 50,
          y: y * 50,
          duration: 1,
          ease: "power2.out"
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-black/90"></div>
      </div>

      {/* Animated floating lights */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={lightRef}
          className="floating-light absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div className="floating-light absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="floating-light absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="floating-light absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Hero title */}
        <div className="mb-8 lg:mb-12">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-none mb-6 drop-shadow-2xl"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            iPhone 17 Pro
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-100 tracking-wide max-w-5xl mx-auto leading-relaxed drop-shadow-lg"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Beyond Speed. Beyond Intelligence.
          </p>
        </div>

        {/* Phone mockup */}
        <div
          ref={phoneRef}
          className="relative mx-auto mb-12 lg:mb-16 max-w-6xl"
        >
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 blur-4xl rounded-full scale-150"></div>

          {/* Phone image */}
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="iPhone 17 Pro"
              className="w-full max-w-3xl mx-auto drop-shadow-2xl rounded-3xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Enhanced fallback placeholder */}
            <div className="hidden w-full max-w-3xl mx-auto h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-gray-600 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-inner">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-gray-100 font-semibold text-lg">iPhone 17 Pro</p>
              </div>
            </div>
          </div>

          {/* Enhanced reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className="flex flex-col items-center space-y-6 mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden">
              <span className="relative z-10">Preorder Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
          <p className="text-lg sm:text-xl text-gray-100 font-semibold">
            From $199/month or $1,199
          </p>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero