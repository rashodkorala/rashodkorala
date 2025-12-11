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
        }
    }, []);

    if (!mounted || !showIntro) {
        return null;
    }

    return <Intro />;
}
