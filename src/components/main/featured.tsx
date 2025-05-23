// components/project-section.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "NFC", "Smart Tags"]

export default function ProjectSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-6 bg-[#f9fafb] dark:bg-[#0a0a0a]"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Text Section */}
                <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-600/10 text-orange-600 text-sm font-medium mb-4">
                        Featured Project
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Aether
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Aether is an NFC-powered art authentication platform that allows artists, galleries,
                        and collectors to instantly verify the authenticity and provenance of artworks with a single tap.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="https://startup.rashodkorala.com/"
                            target="_blank"
                            className="inline-flex items-center px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-full hover:bg-orange-700 transition"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Link>
                        <Link
                            href="/aether"
                            className="inline-flex items-center px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-full hover:bg-orange-700 transition"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl shadow-lg overflow-hidden"
                >
                    <Image
                        src="/assets/ProjectsPhotos/aether/dashboard.png"
                        alt="Aether Project Screenshot"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}