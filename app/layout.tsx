import { Metadata } from 'next'
import '@/styles/globals.css'

import { Josefin_Sans, Inter, Poppins, Space_Grotesk } from 'next/font/google';
import Footer from '@/src/components/footer';
import Home from '@/src/components/main/home';
import Provider from '@/lib/provider';

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
});

const inter = Inter({
    subsets: ['latin'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: '300'
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin-ext'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://rashodkorala.com'),
    title: {
        default: 'Rashod Korala | Software Developer',
        template: '%s | Rashod Korala'
    },
    description: 'Software Developer specializing in Next.js, React Native, and AI solutions. Building innovative digital experiences with a focus on user-centric design.',
    keywords: ['Software Developer', 'Next.js', 'React Native', 'AI', 'Web Development', 'Mobile Development', 'TypeScript', 'AWS'],
    authors: [{ name: 'Rashod Korala' }],
    creator: 'Rashod Korala',
    publisher: 'Rashod Korala',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rashodkorala.com',
        title: 'Rashod Korala | Software Developer',
        description: 'Software Developer specializing in Next.js, React Native, and AI solutions. Building innovative digital experiences with a focus on user-centric design.',
        siteName: 'Rashod Korala',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rashod Korala | Software Developer',
        description: 'Software Developer specializing in Next.js, React Native, and AI solutions. Building innovative digital experiences with a focus on user-centric design.',
        creator: '@rashodkorala',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    verification: {
        google: 'your-google-site-verification',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en" suppressHydrationWarning  >
                <body>
                    <Provider>
                        <main className='max-w-[2000px] mx-auto px-6'>
                            <Home />
                            {children}
                            <Footer />
                        </main>
                    </Provider>
                </body>
            </html>
        </>
    )
}