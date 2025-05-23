import AboutMe from "@/src/components/main/about";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'About Rashod Korala',
};





export default function Index() {
    return (
        <>
            <AboutMe />
        </>
    );
}
