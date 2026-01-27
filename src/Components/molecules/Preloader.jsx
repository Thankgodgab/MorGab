import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoIcon from '../../assets/Logo-Icon.png';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // We ensure the preloader shows for at least 1.5 seconds for branding
        // or until the window is fully loaded
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Fallback timer
        const timer = setTimeout(() => setIsLoading(false), 2500);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-9999 bg-white flex items-center justify-center"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Outer Glow/Pulse */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute w-32 h-32 bg-mg-yellow rounded-full blur-2xl"
                        />

                        {/* Rotating Border */}
                        <svg className="w-24 h-24 transform -rotate-90">
                            <circle
                                cx="48"
                                cy="48"
                                r="45"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                className="text-gray-100"
                            />
                            <motion.circle
                                cx="48"
                                cy="48"
                                r="45"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="283"
                                initial={{ strokeDashoffset: 283 }}
                                animate={{ strokeDashoffset: [283, 0, -283] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                                className="text-mg-yellow"
                            />
                        </svg>

                        {/* Centered Logo */}
                        <div className="absolute flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-white p-3 rounded-full shadow-sm"
                            >
                                <img
                                    src={logoIcon}
                                    alt="MorGab Logo"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
