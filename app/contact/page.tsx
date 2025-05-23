import Contact from "@/src/components/main/contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Rashod Korala',
};


export default function Index() {
    return (
        <>
            <Contact />
        </>
    );
}
