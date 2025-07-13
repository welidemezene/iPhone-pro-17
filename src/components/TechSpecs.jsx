import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TechSpecs = ({ theme }) => {
    const [counters, setCounters] = useState({
        performance: 0,
        battery: 0,
        storage: 0,
        camera: 0
    });

    const specs = [
        {
            category: "Performance",
            items: [
                { name: "A17 Bionic Ultra Chip", value: "3.2 GHz", improvement: "+40%" },
                { name: "Neural Engine", value: "16-core", improvement: "+60%" },
                { name: "GPU Cores", value: "8-core", improvement: "+50%" },
                { name: "RAM", value: "8GB LPDDR5", improvement: "+33%" }
            ]
        },
        {
            category: "Display",
            items: [
                { name: "Screen Size", value: "6.1\"", improvement: "Same" },
                { name: "Resolution", value: "2556 x 1179", improvement: "+15%" },
                { name: "Refresh Rate", value: "240Hz", improvement: "+120Hz" },
                { name: "Peak Brightness", value: "2000 nits", improvement: "+25%" }
            ]
        },
        {
            category: "Camera",
            items: [
                { name: "Main Camera", value: "64MP", improvement: "+16MP" },
                { name: "Ultra Wide", value: "20MP", improvement: "+8MP" },
                { name: "Telephoto", value: "12MP 5x", improvement: "+2x zoom" },
                { name: "Front Camera", value: "24MP", improvement: "+12MP" }
            ]
        },
        {
            category: "Battery & Storage",
            items: [
                { name: "Battery Life", value: "32 hours", improvement: "+39%" },
                { name: "Fast Charging", value: "45W", improvement: "+50%" },
                { name: "Storage", value: "Up to 2TB", improvement: "+100%" },
                { name: "Wireless Charging", value: "15W", improvement: "+25%" }
            ]
        }
    ];

    const features = [
        {
            title: "LightRay AI Zoom",
            description: "Revolutionary AI-powered zoom technology that maintains crystal clear quality at any distance",
            icon: "🔍",
            color: "blue"
        },
        {
            title: "SecurePort USB-C",
            description: "Next-generation USB-C with enhanced security and lightning-fast data transfer",
            icon: "⚡",
            color: "green"
        },
        {
            title: "Titanium Ultra Edge",
            description: "Aerospace-grade titanium frame with ultra-thin bezels for maximum screen real estate",
            icon: "💎",
            color: "purple"
        },
        {
            title: "Neural Security",
            description: "Advanced facial recognition with neural processing for instant, secure authentication",
            icon: "🔐",
            color: "orange"
        }
    ];

    useGSAP(() => {
        // Animate section entrance
        gsap.fromTo('#tech-specs-section',
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        // Animate spec cards
        gsap.fromTo('.spec-card',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }
        );

        // Animate feature cards
        gsap.fromTo('.feature-card',
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
        );

        // Animate progress bars
        gsap.fromTo('.progress-bar',
            { width: 0 },
            { width: "100%", duration: 2, ease: "power2.out", delay: 1 }
        );
    }, []);

    // Animate counters
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounters({
                performance: 100,
                battery: 100,
                storage: 100,
                camera: 100
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="tech-specs-section"
            className={`common-padding relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}
        >
            <div className="screen-max-width">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`section-heading mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                        Technical Specifications
                    </h2>
                    <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Engineered for the future
                    </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className={`spec-card p-6 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-200'
                        }`}>
                        <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                {counters.performance}%
                            </div>
                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Performance Boost
                            </div>
                            <div className="mt-3 bg-gray-600 rounded-full h-2">
                                <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${counters.performance}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={`spec-card p-6 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-200'
                        }`}>
                        <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'
                                }`}>
                                {counters.battery}%
                            </div>
                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Battery Life
                            </div>
                            <div className="mt-3 bg-gray-600 rounded-full h-2">
                                <div
                                    className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${counters.battery}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={`spec-card p-6 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-200'
                        }`}>
                        <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                                }`}>
                                {counters.storage}%
                            </div>
                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Storage Capacity
                            </div>
                            <div className="mt-3 bg-gray-600 rounded-full h-2">
                                <div
                                    className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${counters.storage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={`spec-card p-6 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-gray-50 border-gray-200'
                        }`}>
                        <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                                }`}>
                                {counters.camera}%
                            </div>
                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Camera Quality
                            </div>
                            <div className="mt-3 bg-gray-600 rounded-full h-2">
                                <div
                                    className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${counters.camera}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Specs */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {specs.map((category, index) => (
                        <div
                            key={index}
                            className={`spec-card p-6 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-200'
                                }`}
                        >
                            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex justify-between items-center">
                                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                            {item.name}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'
                                                }`}>
                                                {item.value}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${item.improvement === 'Same'
                                                    ? theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                                                    : theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                                                }`}>
                                                {item.improvement}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Features */}
                <div className="mb-16">
                    <h3 className={`text-2xl font-semibold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                        Revolutionary Features
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card p-6 rounded-2xl border text-center ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-200'
                                    } hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'
                                    }`}>
                                    {feature.title}
                                </h4>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className={`text-xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Experience the power of tomorrow, today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            View Full Specs
                        </button>
                        <button className="btn-secondary">
                            Compare Models
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs; 