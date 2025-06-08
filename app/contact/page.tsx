import Contact from "@/src/components/main/contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Get in touch with Rashod Korala for collaboration opportunities, project inquiries, or to discuss innovative software solutions. Let\'s create something amazing together!',
    openGraph: {
        title: 'Contact Rashod Korala | Software Developer',
        description: 'Get in touch with Rashod Korala for collaboration opportunities, project inquiries, or to discuss innovative software solutions. Let\'s create something amazing together!',
    },
    twitter: {
        title: 'Contact Rashod Korala | Software Developer',
        description: 'Get in touch with Rashod Korala for collaboration opportunities, project inquiries, or to discuss innovative software solutions. Let\'s create something amazing together!',
    },
};


export default function Index() {
    return (
        <>
            <Contact />
        </>
    );
}
