// app/aether/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AetherPage() {
    const techStack = [
        "NFC Technology",
        "Smart Tags",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS Amplify Gen 2"
    ]

    return (
        <main className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Intro Section */}
                <section className="text-center">
                    <h1 className="text-6xl font-extrabold mb-6">Aether</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A case study of how I built an NFC-powered art authentication platform—merging design, usability, and smart technology to solve real-world problems in the creative economy.
                    </p>
                </section>

                {/* Visual Hero */}
                <section className="rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/ProjectsPhotos/aether/dashboard.png"
                        alt="Aether Dashboard Interface"
                        width={1400}
                        height={800}
                        className="rounded-xl object-cover"
                        priority
                    />
                </section>

                {/* Goals Section */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Problem</h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg">
                            Art forgery continues to affect trust in the global art market. Traditional authentication methods are slow, expensive, and inaccessible to many. Emerging artists have few tools to protect their work or share it authentically.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Objective</h2>
                        <p className="text-gray-700 dark:text-gray-400 text-lg">
                            Build a scalable, user-friendly platform that links physical artworks to secure digital certificates using NFC technology. Enable instant verification, portfolio access, and metadata management through a beautiful, intuitive interface.
                        </p>
                    </div>
                </section>

                {/* Design Decisions */}
                <section className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-center">Design Thinking</h2>
                        <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-400">
                            I focused on minimal UI with professional tone—creating a smooth user experience that prioritizes trust, speed, and visual clarity. Color cues, motion feedback, and accessible design patterns were core principles.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Image
                            src="/assets/ProjectsPhotos/aether/mobile-scan.png"
                            alt="Mobile Scan Example"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover"
                        />
                        <Image
                            src="/assets/ProjectsPhotos/aether/cert-verification.png"
                            alt="Certificate Verification"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Figma Prototype Embed */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold mb-4 text-center">Interactive Prototype</h2>
                        <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                            <iframe className="w-full h-screen rounded-xl border-none "
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSN4A3ktoLiSap42KYnVple%2FUntitled%3Fnode-id%3D0-1%26embed-host%3Dshare"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </section>
                </section>

                {/* Technology Stack */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech) => (
                            <Badge key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Results + Reflection */}
                <section className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">What I Learned</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">
                        Aether helped me blend backend architecture with creative UI thinking. I learned to balance tech constraints with UX expectations and refined my skills in full-stack development, responsive design, and NFC integrations.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="https://www.aetherlabs.art" target="_blank">
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="rounded-full px-6">Get in Touch</Button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
