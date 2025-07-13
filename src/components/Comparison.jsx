import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { comparisonData } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
    const sectionRef = useRef(null);

    const comparisonFeatures = [
        {
            feature: 'Chip',
            iphone15: 'A17 Pro',
            iphone17: 'A17 Bionic Ultra',
            improvement: '+40% performance'
        },
        {
            feature: 'Display',
            iphone15: '120Hz ProMotion',
            iphone17: '240Hz ProMotion',
            improvement: '+100% refresh rate'
        },
        {
            feature: 'Main Camera',
            iphone15: '48MP',
            iphone17: '64MP',
            improvement: '+33% resolution'
        },
        {
            feature: 'Battery Life',
            iphone15: '23 hours',
            iphone17: '32 hours',
            improvement: '+39% longer'
        },
        {
            feature: 'Storage',
            iphone15: '1TB max',
            iphone17: '2TB max',
            improvement: '+100% capacity'
        },
        {
            feature: 'Connectivity',
            iphone15: 'USB-C 3.0',
            iphone17: 'SecurePort USB-C',
            improvement: '+300% speed'
        },
        {
            feature: 'Weight',
            iphone15: '187g',
            iphone17: '185g',
            improvement: '2g lighter'
        },
        {
            feature: 'Durability',
            iphone15: 'Ceramic Shield',
            iphone17: 'Titanium Ultra',
            improvement: 'Military grade'
        }
    ];

    useGSAP(() => {
        // Section title animation
        gsap.fromTo('.comparison-title',
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.comparison-title',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Phone models animation
        gsap.fromTo('.phone-model',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.phone-models',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Comparison rows animation
        gsap.fromTo('.comparison-row',
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.comparison-table',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Improvement badges animation
        gsap.fromTo('.improvement-badge',
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.comparison-table',
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
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="comparison-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none mb-6">
                        Compare
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-6 font-light max-w-4xl mx-auto">
                        See how iPhone 17 Pro redefines what's possible
                    </p>
                </div>

                {/* Phone Models */}
                <div className="phone-models flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-16 mb-16">
                    <div className="phone-model text-center">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                            <span className="text-2xl lg:text-3xl">📱</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">iPhone 15 Pro</h3>
                        <p className="text-gray-300">Starting at $999</p>
                    </div>

                    <div className="text-3xl lg:text-4xl text-gray-400">vs</div>

                    <div className="phone-model text-center">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                            <span className="text-2xl lg:text-3xl">🚀</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">iPhone 17 Pro</h3>
                        <p className="text-gray-300">Starting at $1,199</p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="comparison-table bg-gray-800/50 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-700/50">
                                <tr>
                                    <th className="px-4 lg:px-8 py-4 lg:py-6 text-left text-base lg:text-lg font-semibold text-white">Feature</th>
                                    <th className="px-4 lg:px-8 py-4 lg:py-6 text-center text-base lg:text-lg font-semibold text-white">iPhone 15 Pro</th>
                                    <th className="px-4 lg:px-8 py-4 lg:py-6 text-center text-base lg:text-lg font-semibold text-white">iPhone 17 Pro</th>
                                    <th className="px-4 lg:px-8 py-4 lg:py-6 text-center text-base lg:text-lg font-semibold text-white">Improvement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((item, index) => (
                                    <tr key={index} className={`comparison-row border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors ${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'
                                        }`}>
                                        <td className="px-4 lg:px-8 py-4 lg:py-6">
                                            <div className="font-semibold text-white text-sm lg:text-base">{item.feature}</div>
                                        </td>
                                        <td className="px-4 lg:px-8 py-4 lg:py-6 text-center">
                                            <div className="text-gray-300 text-sm lg:text-base">{item.iphone15}</div>
                                        </td>
                                        <td className="px-4 lg:px-8 py-4 lg:py-6 text-center">
                                            <div className="font-semibold text-white text-sm lg:text-base">{item.iphone17}</div>
                                        </td>
                                        <td className="px-4 lg:px-8 py-4 lg:py-6 text-center">
                                            <span className="improvement-badge inline-block px-3 lg:px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs lg:text-sm font-semibold rounded-full">
                                                {item.improvement}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="text-center p-6 lg:p-8 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">40% Faster</h4>
                        <p className="text-gray-300">Performance improvement with A17 Bionic Ultra chip</p>
                    </div>

                    <div className="text-center p-6 lg:p-8 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">🔋</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">39% Longer</h4>
                        <p className="text-gray-300">Battery life for all-day performance</p>
                    </div>

                    <div className="text-center p-6 lg:p-8 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">📸</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">33% More</h4>
                        <p className="text-gray-300">Camera resolution with LightRay AI technology</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg lg:text-xl text-gray-300 mb-8">
                        Ready to experience the future of iPhone?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                            Preorder iPhone 17 Pro
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                            Compare All Models
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison; 