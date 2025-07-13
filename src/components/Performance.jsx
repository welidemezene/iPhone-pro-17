import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const sectionRef = useRef(null);
    const [counters, setCounters] = useState({
        performance: 0,
        efficiency: 0,
        neural: 0,
        gpu: 0
    });

    useGSAP(() => {
        // Section title animation
        gsap.fromTo('.performance-title',
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.performance-title',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Chip image animation
        gsap.fromTo('.chip-image',
            { opacity: 0, scale: 0.8, rotationY: -15 },
            {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.chip-image',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Counter animation trigger
        ScrollTrigger.create({
            trigger: '.performance-counters',
            start: "top 80%",
            onEnter: () => {
                // Animate counters
                gsap.to({}, {
                    duration: 2,
                    onUpdate: function () {
                        const progress = this.progress();
                        setCounters({
                            performance: Math.floor(40 * progress),
                            efficiency: Math.floor(35 * progress),
                            neural: Math.floor(50 * progress),
                            gpu: Math.floor(45 * progress)
                        });
                    }
                });
            }
        });

        // Spec cards animation
        gsap.fromTo('.spec-card',
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.spec-cards',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="performance-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none mb-6 drop-shadow-2xl"
                        style={{
                            textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}>
                        A17 Bionic Ultra
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mt-6 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                        style={{
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}>
                        The most powerful chip ever in a smartphone
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Chip Image */}
                    <div className="chip-image order-2 lg:order-1">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full scale-125"></div>

                            {/* Chip placeholder */}
                            <div className="relative z-10 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-3xl p-8 lg:p-12 shadow-2xl border border-blue-700/50 backdrop-blur-sm">
                                <div className="text-center">
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                                        <span className="text-3xl lg:text-4xl">🚀</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 drop-shadow-lg">A17 Bionic Ultra</h3>
                                    <p className="text-blue-100 text-base lg:text-lg font-semibold">3.2 GHz 8-core CPU</p>
                                    <p className="text-blue-100 text-base lg:text-lg font-semibold">8-core GPU</p>
                                    <p className="text-blue-100 text-base lg:text-lg font-semibold">16-core Neural Engine</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Stats */}
                    <div className="order-1 lg:order-2">

                        {/* Performance Counters */}
                        <div className="performance-counters mb-12">
                            <div className="grid grid-cols-2 gap-6 lg:gap-8">
                                <div className="text-center p-6 bg-blue-900/40 rounded-2xl border border-blue-700/50 backdrop-blur-sm">
                                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                                        +{counters.performance}%
                                    </div>
                                    <div className="text-blue-100 font-semibold">Performance</div>
                                </div>
                                <div className="text-center p-6 bg-green-900/40 rounded-2xl border border-green-700/50 backdrop-blur-sm">
                                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                                        +{counters.efficiency}%
                                    </div>
                                    <div className="text-green-100 font-semibold">Efficiency</div>
                                </div>
                                <div className="text-center p-6 bg-purple-900/40 rounded-2xl border border-purple-700/50 backdrop-blur-sm">
                                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                                        +{counters.neural}%
                                    </div>
                                    <div className="text-purple-100 font-semibold">Neural Engine</div>
                                </div>
                                <div className="text-center p-6 bg-orange-900/40 rounded-2xl border border-orange-700/50 backdrop-blur-sm">
                                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                                        +{counters.gpu}%
                                    </div>
                                    <div className="text-orange-100 font-semibold">GPU Performance</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-12">
                            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed mb-6 font-medium">
                                The A17 Bionic Ultra chip represents a quantum leap in mobile computing. Built on the most advanced 3nm process technology, it delivers unprecedented performance while maintaining exceptional efficiency.
                            </p>
                            <p className="text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                                With 40% faster performance than the previous generation, the A17 Ultra enables new possibilities in gaming, photography, and AI-powered applications.
                            </p>
                        </div>

                        {/* Spec Cards */}
                        <div className="spec-cards grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div className="spec-card bg-blue-800/60 rounded-2xl p-6 shadow-lg border border-blue-700/50 backdrop-blur-sm">
                                <div className="text-2xl mb-3">⚡</div>
                                <h4 className="font-bold text-white mb-2">CPU</h4>
                                <p className="text-blue-100 text-sm font-medium">3.2 GHz 8-core processor with 2 performance and 6 efficiency cores</p>
                            </div>
                            <div className="spec-card bg-purple-800/60 rounded-2xl p-6 shadow-lg border border-purple-700/50 backdrop-blur-sm">
                                <div className="text-2xl mb-3">🎮</div>
                                <h4 className="font-bold text-white mb-2">GPU</h4>
                                <p className="text-purple-100 text-sm font-medium">8-core graphics processor with hardware-accelerated ray tracing</p>
                            </div>
                            <div className="spec-card bg-green-800/60 rounded-2xl p-6 shadow-lg border border-green-700/50 backdrop-blur-sm">
                                <div className="text-2xl mb-3">🧠</div>
                                <h4 className="font-bold text-white mb-2">Neural Engine</h4>
                                <p className="text-green-100 text-sm font-medium">16-core neural engine for advanced machine learning tasks</p>
                            </div>
                            <div className="spec-card bg-orange-800/60 rounded-2xl p-6 shadow-lg border border-orange-700/50 backdrop-blur-sm">
                                <div className="text-2xl mb-3">🔋</div>
                                <h4 className="font-bold text-white mb-2">Efficiency</h4>
                                <p className="text-orange-100 text-sm font-medium">35% more efficient than previous generation for longer battery life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Performance; 