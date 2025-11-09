// app/aether/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ArrowUpRight,
    Globe,
    LayoutDashboard,
    ShieldCheck,
    Sparkles,
    SmartphoneNfc,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const techStack = [
    "NFC Technology",
    "Smart Tags",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS Amplify Gen 2",
]

const highlights = [
    {
        title: "Tamper-Proof Certificates",
        description:
            "Every artwork embeds a unique NFC signature, generating a verifiable chain of custody within seconds.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile-First Scanning",
        description:
            "Collectors tap an artwork and instantly receive provenance, artist story, and condition reports.",
        icon: SmartphoneNfc,
    },
    {
        title: "Unified Artist Portal",
        description:
            "Creators manage editions, media assets, and drop schedules from a single dashboard built with accessibility in mind.",
        icon: LayoutDashboard,
    },
    {
        title: "Global Ready",
        description:
            "Built for galleries and studios collaborating across borders with multilingual support and regional compliance hooks.",
        icon: Globe,
    },
]

const metrics = [
    { value: "⏱️ 5 min", label: "Onboarding time", detail: "From NFC tag activation to verified certificate." },
    { value: "🔒 2-layer", label: "Security model", detail: "Physical NFC protection with encrypted cloud audit log." },
    { value: "📈 Live", label: "Marketplace beta", detail: "Private launch with curators for provenance exchange." },
]

const process = [
    {
        title: "Discovery & Field Research",
        detail:
            "Shadowed gallery operators and emerging artists to map pain points around cataloguing, authentication, and resale.",
        badge: "2 weeks",
    },
    {
        title: "Product Architecture",
        detail:
            "Defined a modular backend with AWS Amplify Gen 2, MongoDB, and serverless functions to handle certificate workflows.",
        badge: "Scalable",
    },
    {
        title: "Experience Design",
        detail:
            "Crafted minimal, premium UI language that balances trust cues with fluid interactions for scan-to-proof journeys.",
        badge: "Design System",
    },
    {
        title: "Pilot & Iteration",
        detail:
            "Launched an invite-only pilot, collecting feedback on scan performance, analytics, and curatorial collaboration.",
        badge: "Closed Beta",
    },
]

export default function AetherPage() {
    return (
        <main className="bg-white px-6 py-20 text-gray-900 dark:bg-[#050505] dark:text-white">
            <div className="mx-auto max-w-6xl">
                <section className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Badge className="rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                                Aether Labs · NFC Provenance
                            </Badge>
                            <div className="space-y-5">
                                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                                    Authenticating art, one tap at a time.
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Aether Labs is my end-to-end platform that links physical artworks to living digital
                                    certificates. Designed for galleries, studios, and independent artists who need
                                    instant, beautiful, and trustworthy provenance.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link href="https://www.aetherlabs.art" target="_blank" rel="noreferrer">
                                    <Button className="rounded-full bg-orange-600 px-6 text-white hover:bg-orange-700">
                                        <ArrowUpRight className="mr-2 h-4 w-4" />
                                        Visit Aether Labs
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="rounded-full px-6">
                                        Talk Partnerships
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-6 rounded-3xl border border-gray-100 bg-gray-50/80 p-10 dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 sm:gap-10">
                            <div className="space-y-4">
                                <Badge className="rounded-full bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white">
                                    Problem
                                </Badge>
                                <h2 className="text-2xl font-semibold">
                                    Art authentication is still slow, expensive, and fragmented.
                                </h2>
                                <p className="text-base text-gray-600 dark:text-gray-300">
                                    Counterfeits and poorly documented provenance erode trust between artists,
                                    collectors, and institutions. Traditional verification workflows take weeks and
                                    demand specialist oversight. Aether replaces that friction with NFC-enabled proof
                                    that anyone can access instantly.
                                </p>
                            </div>
                            <div className="space-y-4 rounded-2xl border border-white/70 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/10">
                                <Badge className="rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-200">
                                    Objective
                                </Badge>
                                <h3 className="text-2xl font-semibold">Design a calm, premium experience for provenance.</h3>
                                <p className="text-base text-gray-600 dark:text-gray-200">
                                    Build a zero-friction system that links physical pieces to secure digital twins,
                                    supports gallery-scale catalogs, and provides collectors with a rich story the
                                    moment they tap an artwork.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Badge className="rounded-full bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white">
                                Product Journey
                            </Badge>
                            <h2 className="text-3xl font-semibold">How Aether came to life</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                From research to live beta, every phase focused on pairing technical reliability with a
                                premium art-world experience.
                            </p>
                            <div className="grid gap-4">
                                {process.map((step, index) => (
                                    <Card
                                        key={step.title}
                                        className="border border-gray-100 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5"
                                    >
                                        <CardHeader className="space-y-3 p-6">
                                            <div className="flex items-center gap-3">
                                                <Badge className="rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-200">
                                                    {step.badge}
                                                </Badge>
                                                <span className="font-medium text-gray-400 dark:text-gray-500">
                                                    Phase {index + 1}
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                                            <CardContent className="p-0 text-sm text-gray-600 dark:text-gray-300">
                                                {step.detail}
                                            </CardContent>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Badge className="rounded-full bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white">
                                Reflection
                            </Badge>
                            <h2 className="text-3xl font-semibold">Building Aether sharpened my full-stack craft.</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I learned how to balance the tactile world of artists and collectors with robust
                                cloud-first architecture. Shipping Aether meant obsessing over micro-interactions, scan
                                latency, and the human stories behind every artwork.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="https://www.aetherlabs.art" target="_blank" rel="noreferrer">
                                    <Button className="rounded-full bg-orange-600 px-6 text-white hover:bg-orange-700">
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Explore Aether Labs
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="rounded-full px-6">
                                        Collaborate
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-12">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 blur-2xl dark:from-orange-500/30 dark:to-purple-500/30" />
                            <div className="relative overflow-hidden rounded-3xl border border-white/40 shadow-2xl dark:border-white/10">
                                <Image
                                    src="/assets/ProjectsPhotos/aether/dashboard.png"
                                    alt="Aether dashboard preview"
                                    width={1200}
                                    height={900}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            {metrics.map((metric) => (
                                <Card
                                    key={metric.label}
                                    className="border-dashed border-gray-200 bg-white/70 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-white/5"
                                >
                                    <CardHeader className="space-y-2 p-5">
                                        <CardTitle className="text-lg font-medium">{metric.value}</CardTitle>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{metric.detail}</p>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <Badge className="rounded-full bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white">
                                Feature Highlights
                            </Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                A platform built for trust, convenience, and story across the full provenance journey.
                            </p>
                            <div className="space-y-4">
                                {highlights.map((item) => (
                                    <Card
                                        key={item.title}
                                        className="border border-gray-100 bg-white/80 shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                                    >
                                        <CardHeader className="flex flex-row items-start gap-4 p-6">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-200">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <div className="space-y-2">
                                                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Badge className="rounded-full bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white">
                                Tech Stack
                            </Badge>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm dark:bg-white/10 dark:text-gray-200"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    )
}
