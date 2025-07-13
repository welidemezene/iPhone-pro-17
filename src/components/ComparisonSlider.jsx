import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { blackImg, blueImg } from '../utils';

const ComparisonSlider = ({ theme }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    const comparisonData = [
        {
            category: "Chip",
            iphone16: "A16 Bionic",
            iphone17: "A17 Bionic Ultra",
            improvement: "+40% faster",
            icon: "🚀"
        },
        {
            category: "Display",
            iphone16: "6.1\" 120Hz OLED",
            iphone17: "6.1\" 240Hz ProMotion OLED",
            improvement: "+120Hz refresh",
            icon: "📱"
        },
        {
            category: "Camera System",
            iphone16: "48MP Triple-Lens",
            iphone17: "64MP Quad-Lens with AI Zoom",
            improvement: "+16MP main",
            icon: "📸"
        },
        {
            category: "Build Material",
            iphone16: "Titanium",
            iphone17: "Titanium Ultra Edge",
            improvement: "Enhanced durability",
            icon: "💎"
        },
        {
            category: "Battery Life",
            iphone16: "Up to 23h video",
            iphone17: "Up to 26h video",
            improvement: "+13% longer",
            icon: "🔋"
        },
        {
            category: "USB Port",
            iphone16: "USB-C Gen1",
            iphone17: "USB-C Gen3",
            improvement: "3x faster",
            icon: "⚡"
        },
        {
            category: "Storage",
            iphone16: "Up to 1TB",
            iphone17: "Up to 2TB",
            improvement: "+100% capacity",
            icon: "💾"
        }
    ];

    useGSAP(() => {
        gsap.fromTo('#comparison-section',
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo('.comparison-row',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
        );

        gsap.fromTo('.comparison-table',
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.3 }
        );
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section
            id="comparison-section"
            className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        iPhone 16 Pro vs iPhone 17 Pro
                    </h2>
                    <p className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto">
                        See the evolution of innovation. Compare the features that matter most.
                    </p>
                </div>

                {/* Visual Comparison Slider */}
                <div className="mb-20">
                    <div
                        ref={containerRef}
                        className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* iPhone 16 Pro Image */}
                        <div className="absolute inset-0">
                            <img
                                src={blackImg}
                                alt="iPhone 16 Pro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">iPhone 16 Pro</h3>
                                <p className="text-sm opacity-90 font-medium">Previous Generation</p>
                            </div>
                        </div>

                        {/* iPhone 17 Pro Image */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${sliderPosition}%` }}
                        >
                            <img
                                src={blueImg}
                                alt="iPhone 17 Pro"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/20"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">iPhone 17 Pro</h3>
                                <p className="text-sm opacity-90 font-medium">Next Generation</p>
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 w-1 bg-white h-20 flex items-center justify-center"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Slider Track */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-white/30">
                            <div
                                className="h-full bg-white"
                                style={{ width: `${sliderPosition}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Comparison Table */}
                <div className="comparison-table bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-8 border-b border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Feature</h3>
                            </div>
                            <div className="md:col-span-1 text-center">
                                <h3 className="text-lg font-bold text-gray-900">iPhone 16 Pro</h3>
                                <p className="text-sm text-gray-700 mt-1 font-medium">Previous Generation</p>
                            </div>
                            <div className="md:col-span-1 text-center bg-blue-50 rounded-2xl py-4 border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-900">iPhone 17 Pro</h3>
                                <p className="text-sm text-blue-700 mt-1 font-semibold">Next Generation</p>
                            </div>
                            <div className="md:col-span-1 text-center">
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Improvement</h3>
                            </div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-100">
                        {comparisonData.map((item, index) => (
                            <div
                                key={index}
                                className="comparison-row px-6 py-6 hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                                    {/* Feature Category */}
                                    <div className="md:col-span-1">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <h4 className="text-lg font-bold text-gray-900">{item.category}</h4>
                                        </div>
                                    </div>

                                    {/* iPhone 16 Pro */}
                                    <div className="md:col-span-1 text-center">
                                        <p className="text-base font-semibold text-gray-700">{item.iphone16}</p>
                                    </div>

                                    {/* iPhone 17 Pro */}
                                    <div className="md:col-span-1 text-center bg-blue-50 rounded-xl py-3 border border-blue-100">
                                        <p className="text-base font-bold text-blue-900">{item.iphone17}</p>
                                    </div>

                                    {/* Improvement */}
                                    <div className="md:col-span-1 text-center">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-bold shadow">
                                            {item.improvement}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <p className="text-2xl text-gray-900 font-bold mb-8 relative group">
                        <span className="relative z-10">Ready to experience the future?</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Preorder iPhone 17 Pro
                        </button>
                        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                            Compare All Models
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSlider; 