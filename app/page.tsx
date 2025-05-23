import Projects from "@/src/components/main/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Rashod korala',
}



export default function Index() {
    return (
        <>
            <Projects />
        </>
    );
}
