
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
    title: 'Home',
    description: 'Rashod korala',
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