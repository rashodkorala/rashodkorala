// app/aether/page.tsx
import {
    ArrowUpRight,
    Globe,
    LayoutDashboard,
    ShieldCheck,
    SmartphoneNfc,
    ExternalLink,
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
        <main className="px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-20">
            <div className="mx-auto max-w-4xl">
                <section className="space-y-20">
                    {/* Header Section - Notion Style */}
                    <div className="space-y-6">
                        <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                            Aether Labs · NFC Provenance
                        </div>
                        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.5px] leading-[1.2] text-gray-900 dark:text-gray-50">
                            Authenticating art, one tap at a time.
                        </h1>
                        <p className="text-[17px] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
                            Aether Labs is my end-to-end platform that links physical artworks to living digital
                            certificates. Designed for galleries, studios, and independent artists who need
                            instant, beautiful, and trustworthy provenance.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Link
                                href="https://www.aetherlabs.art"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Visit Aether Labs
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                            >
                                Talk Partnerships
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image - Notion Style */}
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                        <Image
                            src="/assets/ProjectsPhotos/aether/dashboard.png"
                            alt="Aether dashboard preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 900px"
                            priority
                        />
                    </div>

                    {/* Problem & Objective - Notion Style */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                                Problem
                            </div>
                            <h2 className="text-[24px] leading-[1.4] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                Art authentication is still slow, expensive, and fragmented.
                            </h2>
                            <p className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                                Counterfeits and poorly documented provenance erode trust between artists,
                                collectors, and institutions. Traditional verification workflows take weeks and
                                demand specialist oversight. Aether replaces that friction with NFC-enabled proof
                                that anyone can access instantly.
                            </p>
                        </div>
                        <div className="space-y-4 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                            <div className="text-[13px] leading-[18px] text-orange-600 dark:text-orange-400 font-normal uppercase tracking-[0.5px]">
                                Objective
                            </div>
                            <h3 className="text-[24px] leading-[1.4] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                Design a calm, premium experience for provenance.
                            </h3>
                            <p className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                                Build a zero-friction system that links physical pieces to secure digital twins,
                                supports gallery-scale catalogs, and provides collectors with a rich story the
                                moment they tap an artwork.
                            </p>
                        </div>
                    </div>

                    {/* Product Journey - Notion Style */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                                Product Journey
                            </div>
                            <h2 className="text-[28px] leading-[1.3] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                How Aether came to life
                            </h2>
                            <p className="text-[17px] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
                                From research to live beta, every phase focused on pairing technical reliability with a
                                premium art-world experience.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {process.map((step, index) => (
                                <div
                                    key={step.title}
                                    className="space-y-3 pb-6 border-b border-gray-200/50 dark:border-gray-800/50 last:border-0 last:pb-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[13px] leading-[18px] text-orange-600 dark:text-orange-400 font-normal">
                                            {step.badge}
                                        </span>
                                        <span className="text-[13px] leading-[18px] text-gray-400 dark:text-gray-600 font-normal">
                                            Phase {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-[20px] leading-[1.4] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                                        {step.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics - Notion Style */}
                    <div className="space-y-6 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                        <div className="grid gap-6 sm:grid-cols-3">
                            {metrics.map((metric) => (
                                <div key={metric.label} className="space-y-2">
                                    <div className="text-[20px] leading-[1.4] font-semibold text-gray-900 dark:text-gray-50">
                                        {metric.value}
                                    </div>
                                    <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                                        {metric.label}
                                    </div>
                                    <p className="text-[14px] leading-[1.5] text-gray-600 dark:text-gray-400 font-normal">
                                        {metric.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Highlights - Notion Style */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                                Feature Highlights
                            </div>
                            <p className="text-[14px] leading-[1.5] text-gray-600 dark:text-gray-400 font-normal">
                                A platform built for trust, convenience, and story across the full provenance journey.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {highlights.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 flex-shrink-0 mt-0.5">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <h3 className="text-[18px] leading-[1.4] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack - Notion Style */}
                    <div className="space-y-6 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                        <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                            Tech Stack
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {techStack.map((tech, index) => (
                                <span
                                    key={tech}
                                    className="text-[13px] leading-[18px] text-gray-600 dark:text-gray-400 font-normal"
                                >
                                    {tech}{index < techStack.length - 1 && ','}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Reflection - Notion Style */}
                    <div className="space-y-6 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
                        <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
                            Reflection
                        </div>
                        <h2 className="text-[28px] leading-[1.3] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                            Building Aether sharpened my full-stack craft.
                        </h2>
                        <p className="text-[17px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                            I learned how to balance the tactile world of artists and collectors with robust
                            cloud-first architecture. Shipping Aether meant obsessing over micro-interactions, scan
                            latency, and the human stories behind every artwork.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Link
                                href="https://www.aetherlabs.art"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Explore Aether Labs
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                            >
                                Collaborate
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
