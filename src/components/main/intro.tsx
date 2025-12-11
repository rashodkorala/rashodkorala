"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Intro = () => {
    const router = useRouter();
    const [animationStage, setAnimationStage] = useState<'first' | 'second' | 'third' | 'complete'>('first');
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const firstTimer = setTimeout(() => setAnimationStage('second'), 2000);
        const secondTimer = setTimeout(() => setAnimationStage('third'), 4500);
        const thirdTimer = setTimeout(() => {
            setAnimationStage('complete');
            setIsExiting(true);
        }, 7500);
        const navigateTimer = setTimeout(() => {
            sessionStorage.setItem('hasSeenIntro', 'true');
            router.push('/');
        }, 8500);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(navigateTimer);
        };
    }, [router]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center"
        >
            <div className="relative font-light">
                <AnimatePresence mode="wait">
                    {/* Stage 1 */}
                    {animationStage === 'first' && (
                        <motion.div
                            key="first"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-center"
                        >
                            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight font-light text-black dark:text-white">
                                Rashod Korala
                            </h1>
                        </motion.div>
                    )}

                    {/* Stage 2 */}
                    {animationStage === 'second' && (
                        <motion.div
                            key="second"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-center max-w-3xl px-6"
                        >
                            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-light tracking-tight leading-[1.2] text-black dark:text-white">
                                Where curiosity meets execution
                            </h2>
                        </motion.div>
                    )}

                    {/* Stage 3 */}
                    {animationStage === 'third' && (
                        <motion.div
                            key="third"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isExiting ? 0 : 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-center max-w-3xl px-6"
                        >
                            <p className="text-[clamp(1.125rem,2vw,1.35rem)] text-black/60 dark:text-white/60 leading-relaxed font-light">
                                Creating at the intersection of intention and imagination, where details breathe and experiences linger
                            </p>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Intro;