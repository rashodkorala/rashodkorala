// components/project-section.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const techStack = [
    // Core Technologies
    {
        category: "Core",
        techs: ["NFC Technology", "Smart Tags", "Mobile App"]
    },
    // Frontend
    {
        category: "Frontend",
        techs: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    // Backend
    {
        category: "Backend",
        techs: ["Node.js", "Express", "MongoDB"]
    }
]

const problemPoints = [
    "Art forgery and fraud remain major challenges in the global art market",
    "Traditional authentication methods can take weeks and cost thousands",
    "Limited transparency in artwork provenance tracking",
    "Barriers to entry for emerging artists and galleries"
]

const solutionPoints = [
    "Instant verification in seconds using NFC smart tags",
    "Secure digital record of artwork history and ownership",
    "Affordable authentication starting at fraction of traditional costs",
    "Simple mobile app for artists, galleries, and collectors"
]

const impactPoints = [
    "Democratizing art authentication for all artists",
    "Building trust through technology",
    "Protecting artist legacies and collector investments",
    "Creating a more transparent art market"
]

export default function ProjectSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#0a0a0a] text-white py-20"
        >
            <div className="container mx-auto px-4">
                {/* Project Header */}
                <div className="max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-orange-600/10 text-orange-600 text-sm font-medium mb-6">
                            Featured Project
                        </span>
                        <h1 className="text-5xl font-bold mb-4 text-orange-600">
                            Aether
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
                            NFC-Powered Art Authentication Platform
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            A revolutionary platform that transforms how art is authenticated and verified.
                            Using cutting-edge NFC technology, Aether provides instant, secure, and
                            cost-effective authentication solutions for artists, galleries, and collectors.
                        </p>
                    </motion.div>

                    <div className="flex justify-center gap-4">
                        <Button
                            variant="outline"
                            className="border-gray-700 hover:bg-gray-800 transition-all rounded-full px-8"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                        </Button>
                        <Button
                            className="bg-orange-600 hover:bg-orange-700 transition-all rounded-full px-8"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </Button>
                    </div>
                </div>

                {/* Hero Section with Image and Description */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-4xl mb-4">📱</div>
                                    <p className="text-gray-400 text-lg">App Interface</p>
                                    <p className="text-gray-500 text-sm mt-2">Replace with actual product screenshot</p>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-4 -right-4 bg-orange-600 p-4 rounded-full shadow-xl"
                        >
                            <p className="text-white font-semibold">Scan to Verify</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-100">
                            Transform Your Art Authentication Process
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Experience the future of art authentication with Aether. Our innovative platform uses cutting-edge NFC technology to provide instant, reliable verification for your valuable artwork.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <Button
                                className="bg-orange-600 hover:bg-orange-700 transition-all rounded-full px-8"
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-700 hover:bg-gray-800 transition-all rounded-full px-8"
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Project Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Problem Statement */}
                        <Card className="bg-[#1a1a1a] border-gray-800 p-6">
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">The Challenge</h3>
                            <ul className="space-y-3">
                                {problemPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Solution */}
                        <Card className="bg-[#1a1a1a] border-gray-800 p-6">
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Our Solution</h3>
                            <ul className="space-y-3">
                                {solutionPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Impact */}
                        <Card className="bg-[#1a1a1a] border-gray-800 p-6">
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Impact</h3>
                            <ul className="space-y-3">
                                {impactPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-400">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Tech Stack */}
                        <Card className="bg-[#1a1a1a] border-gray-800 p-6">
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Technology Stack</h3>
                            <div className="space-y-6">
                                {techStack.map((stack, index) => (
                                    <div key={index} className="space-y-2">
                                        <h4 className="text-gray-300 font-medium">{stack.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.techs.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="bg-gray-800 hover:bg-gray-700 text-gray-200"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-[#1a1a1a] border-gray-800 p-4">
                                <div className="text-2xl font-bold text-orange-600">Instant</div>
                                <div className="text-sm text-gray-400">Authentication</div>
                            </Card>
                            <Card className="bg-[#1a1a1a] border-gray-800 p-4">
                                <div className="text-2xl font-bold text-orange-600">Secure</div>
                                <div className="text-sm text-gray-400">NFC Protected</div>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}