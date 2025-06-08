import Projects from "@/src/components/main/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Rashod Korala\'s portfolio. Explore innovative software solutions, projects, and expertise in Next.js, React Native, and AI development.',
    openGraph: {
        title: 'Rashod Korala | Software Developer Portfolio',
        description: 'Welcome to Rashod Korala\'s portfolio. Explore innovative software solutions, projects, and expertise in Next.js, React Native, and AI development.',
    },
    twitter: {
        title: 'Rashod Korala | Software Developer Portfolio',
        description: 'Welcome to Rashod Korala\'s portfolio. Explore innovative software solutions, projects, and expertise in Next.js, React Native, and AI development.',
    },
};



export default function Index() {
    return (
        <>
            <Projects />
        </>
    );
}
