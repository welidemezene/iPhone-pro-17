import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Buttons animation
        gsap.fromTo(buttonsRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: buttonsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">

                    {/* Title */}
                    <div ref={titleRef} className="mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-none mb-6 drop-shadow-2xl"
                            style={{
                                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            Ready to Experience the Future?
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mt-6 font-semibold leading-relaxed drop-shadow-lg"
                            style={{
                                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            Preorder iPhone 17 Pro and be among the first to experience revolutionary technology
                        </p>
                    </div>

                    {/* Pricing Info */}
                    <div className="mb-12 p-6 sm:p-8 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-3xl border border-blue-700/50 backdrop-blur-sm shadow-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">$1,199</div>
                                <div className="text-blue-100 font-semibold">Starting Price</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">$199</div>
                                <div className="text-blue-100 font-semibold">Per Month</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">Free</div>
                                <div className="text-blue-100 font-semibold">Shipping</div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Buttons */}
                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
                        <button className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden btn-glow w-full sm:w-auto"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            <span className="relative z-10">Preorder Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                        <button className="group px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative overflow-hidden w-full sm:w-auto"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-center p-4 sm:p-6 bg-blue-800/60 rounded-2xl border border-blue-700/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">🚀</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Fast Delivery</h4>
                            <p className="text-blue-100 text-sm font-medium">Free 2-day shipping on all orders</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-green-800/60 rounded-2xl border border-green-700/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">🛡️</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">AppleCare+</h4>
                            <p className="text-green-100 text-sm font-medium">Extended warranty and support</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-purple-800/60 rounded-2xl border border-purple-700/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">💳</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Flexible Payment</h4>
                            <p className="text-purple-100 text-sm font-medium">Monthly installments available</p>
                        </div>

                        <div className="text-center p-4 sm:p-6 bg-orange-800/60 rounded-2xl border border-orange-700/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">🔄</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Easy Returns</h4>
                            <p className="text-orange-100 text-sm font-medium">30-day return policy</p>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-16 p-6 sm:p-8 bg-gradient-to-br from-blue-900/40 to-purple-900/30 rounded-3xl border border-blue-700/50 backdrop-blur-sm">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-lg"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            Limited Time Offer
                        </h3>
                        <p className="text-gray-100 mb-6 leading-relaxed font-medium">
                            Preorder now and get exclusive early access to iPhone 17 Pro features
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl btn-glow"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}>
                            Reserve Your iPhone 17 Pro
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA; 