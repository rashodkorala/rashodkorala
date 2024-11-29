import Footer from "@/src/components/footer"
import Navbar from "@/src/components/navbar"

import '@/styles/globals.css' // Global styles

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body>
                <Navbar />
                {children}
                <Footer />
            </body>

        </html>
    )
}