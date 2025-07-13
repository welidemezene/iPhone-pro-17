import { useState, useEffect } from 'react';
import gsap from 'gsap';

const ThemeToggle = ({ theme, setTheme }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleTheme = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTheme(theme === 'dark' ? 'light' : 'dark');

        // Reset animation state after transition
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        // Animate the toggle button on mount
        gsap.fromTo('.theme-toggle',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, delay: 0.5 }
        );
    }, []);

    return (
        <div className="fixed top-6 right-6 z-50 theme-toggle">
            <button
                onClick={toggleTheme}
                className={`
          relative w-14 h-14 rounded-full border-2 transition-all duration-500
          ${theme === 'dark'
                        ? 'bg-white border-gray-300 hover:border-blue-400'
                        : 'bg-black border-gray-600 hover:border-blue-400'
                    }
          ${isAnimating ? 'scale-95' : 'scale-100 hover:scale-110'}
        `}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    {theme === 'dark' ? (
                        // Sun icon for light mode
                        <svg
                            className="w-6 h-6 text-yellow-500 transition-transform duration-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg
                            className="w-6 h-6 text-blue-400 transition-transform duration-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </div>

                {/* Glow effect */}
                <div className={`
          absolute inset-0 rounded-full opacity-0 transition-opacity duration-500
          ${theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-400'}
          ${isAnimating ? 'opacity-20' : ''}
        `} />
            </button>
        </div>
    );
};

export default ThemeToggle; 