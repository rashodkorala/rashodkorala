import AboutMe from "@/src/components/main/about";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn about Rashod Korala, a Software Developer specializing in Next.js, React Native, and AI solutions. Discover my journey, skills, and passion for creating innovative digital experiences.',
    openGraph: {
        title: 'About Rashod Korala | Software Developer',
        description: 'Learn about Rashod Korala, a Software Developer specializing in Next.js, React Native, and AI solutions. Discover my journey, skills, and passion for creating innovative digital experiences.',
    },
    twitter: {
        title: 'About Rashod Korala | Software Developer',
        description: 'Learn about Rashod Korala, a Software Developer specializing in Next.js, React Native, and AI solutions. Discover my journey, skills, and passion for creating innovative digital experiences.',
    },
};





export default function Index() {
    return (
        <>
            <AboutMe />
        </>
    );
}
