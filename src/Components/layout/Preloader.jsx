import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoIcon from '../../assets/Logo-Icon.png';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const startTime = Date.now();
        const minimumDisplayTime = 2500; // 2.5 seconds minimum

        const finishLoading = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

            setTimeout(() => {
                setIsLoading(false);
            }, remainingTime);
        };

        if (document.readyState === 'complete') {
            finishLoading();
        } else {
            window.addEventListener('load', finishLoading);
        }

        // Safety fallback
        const safetyTimeout = setTimeout(finishLoading, 6000);

        return () => {
            window.removeEventListener('load', finishLoading);
            clearTimeout(safetyTimeout);
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
                        scale: 1.1,
                        filter: "blur(10px)",
                        transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-10000 bg-white flex items-center justify-center pointer-events-auto"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Outer Glow/Pulse */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute w-32 h-32 bg-mg-yellow rounded-full blur-2xl"
                        />

                        {/* Rotating Border */}
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
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
                        </div>

                        {/* Centered Logo */}
                        <div className="absolute flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-3 rounded-full shadow-lg"
                            >
                                <img
                                    src={logoIcon}
                                    alt="MorGab Logo icon"
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
