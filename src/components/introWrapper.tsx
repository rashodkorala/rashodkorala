"use client";

import { useEffect, useState } from "react";
import Intro from "./main/intro";

export default function IntroWrapper() {
    const [showIntro, setShowIntro] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
        if (!hasSeenIntro) {
            setShowIntro(true);
            // Unmount intro after animation completes (8.5 seconds)
            const timer = setTimeout(() => {
                setShowIntro(false);
            }, 8500);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!mounted || !showIntro) {
        return null;
    }

    return <Intro />;
}
