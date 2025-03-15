
import { Metadata } from 'next'
import '@/styles/globals.css'

import { Josefin_Sans, Inter, Poppins } from 'next/font/google';
import Footer from '@/src/components/footer';

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
        <html lang="en" className={inter.className}>
            <body>
                <div>
                    {children}
                    <Footer />
                </div>
            </body>
        </html >
    )
}