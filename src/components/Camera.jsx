import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Camera = () => {
    const sectionRef = useRef(null);
    const cameraRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState('main');

    const cameraFeatures = {
        main: {
            name: '64MP Main Camera',
            description: 'Ultra-high resolution with advanced computational photography',
            specs: ['f/1.6 aperture', 'Sensor-shift OIS', '7-element lens'],
            icon: '📸'
        },
        ultra: {
            name: '20MP Ultra Wide',
            description: 'Capture more of the world with the ultra-wide lens',
            specs: ['f/2.2 aperture', '120° field of view', 'Macro photography'],
            icon: '🌍'
        },
        tele: {
            name: '12MP Telephoto',
            description: '5x optical zoom with LightRay AI enhancement',
            specs: ['f/2.8 aperture', '5x optical zoom', 'LightRay AI'],
            icon: '🔍'
        },
        front: {
            name: '24MP TrueDepth',
            description: 'Advanced front camera with cinematic capabilities',
            specs: ['f/1.9 aperture', 'Cinematic mode', 'Portrait lighting'],
            icon: '👤'
        }
    };

    useGSAP(() => {
        // Section title animation
        gsap.fromTo('.camera-title',
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.camera-title',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Camera mockup animation
        gsap.fromTo('.camera-mockup',
            { opacity: 0, scale: 0.8, rotationY: 15 },
            {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.camera-mockup',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Feature cards animation
        gsap.fromTo('.camera-feature',
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.camera-features',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Parallax effect on camera
        gsap.to('.camera-mockup', {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: '.camera-mockup',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="camera-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none mb-6 drop-shadow-2xl"
                        style={{
                            textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}>
                        LightRay AI Zoom
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mt-6 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                        style={{
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}>
                        Revolutionary camera system that sees beyond the visible
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Camera Mockup */}
                    <div className="camera-mockup order-2 lg:order-1">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-3xl rounded-full scale-125"></div>

                            {/* Camera placeholder */}
                            <div className="relative z-10 bg-gradient-to-br from-purple-900/60 to-purple-800/40 rounded-3xl p-8 lg:p-12 shadow-2xl border border-purple-700/50 backdrop-blur-sm">
                                <div className="text-center">
                                    {/* Camera lenses */}
                                    <div className="flex justify-center items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                                            <span className="text-2xl">📸</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                                            <span className="text-xl">🌍</span>
                                        </div>
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                                            <span className="text-xl">🔍</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 drop-shadow-lg">LightRay AI Camera System</h3>
                                    <p className="text-purple-100 text-base lg:text-lg mb-4 font-semibold">64MP Main • 20MP Ultra Wide • 12MP Telephoto</p>
                                    <p className="text-purple-100 text-sm font-medium">Advanced computational photography with AI enhancement</p>
                                </div>
                            </div>

                            {/* Light reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Camera Features */}
                    <div className="order-1 lg:order-2">

                        {/* Description */}
                        <div className="mb-12">
                            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed mb-6 font-medium">
                                The iPhone 17 Pro features the most advanced camera system ever created. With LightRay AI technology, every photo and video is enhanced with intelligent processing that goes beyond what the human eye can see.
                            </p>
                            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                                From ultra-wide landscapes to detailed macro shots, the LightRay AI system ensures crystal clear quality at any distance or lighting condition.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="camera-features space-y-4 lg:space-y-6">
                            {Object.entries(cameraFeatures).map(([key, feature]) => (
                                <div
                                    key={key}
                                    className={`camera-feature p-4 lg:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activeFeature === key
                                            ? 'border-purple-500 bg-purple-900/40 shadow-lg'
                                            : 'border-gray-700 bg-gray-800/60 hover:border-gray-600'
                                        }`}
                                    onClick={() => setActiveFeature(key)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`text-2xl lg:text-3xl transition-transform duration-300 ${activeFeature === key ? 'scale-110' : ''
                                            }`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white mb-2 text-base lg:text-lg drop-shadow-sm">{feature.name}</h4>
                                            <p className="text-gray-100 text-sm mb-3 font-medium">{feature.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {feature.specs.map((spec, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-purple-800/60 rounded-full text-xs font-bold text-purple-100 border border-purple-700/50"
                                                    >
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* AI Features */}
                        <div className="mt-12 p-6 lg:p-8 bg-gradient-to-br from-purple-900/40 to-pink-900/30 rounded-3xl border border-purple-700/50 backdrop-blur-sm">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 drop-shadow-lg">LightRay AI Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✨</span>
                                    </div>
                                    <span className="text-purple-100 font-semibold">AI Night Mode</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🎯</span>
                                    </div>
                                    <span className="text-purple-100 font-semibold">Smart Focus</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🌈</span>
                                    </div>
                                    <span className="text-purple-100 font-semibold">Color Enhancement</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🎬</span>
                                    </div>
                                    <span className="text-purple-100 font-semibold">Cinematic Mode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Camera; 