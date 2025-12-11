"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Zap, Shield, Globe } from "lucide-react";
import { getProjectsByCategory } from "@/lib/supabase/projects";
import { Project } from "@/lib/types";

const defaultFeatures = [
    { icon: Zap, title: "Lightning Fast", desc: "Built for speed and performance" },
    { icon: Shield, title: "Secure First", desc: "Enterprise-grade security" },
    { icon: Globe, title: "Global Scale", desc: "Infrastructure that grows with you" }
];

export default function Startup() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [startupProject, setStartupProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchStartupProject() {
            try {
                setIsLoading(true);
                const projects = await getProjectsByCategory('startup');
                // Get the first startup project (or featured one if available)
                const project = projects.find(p => p.featured) || projects[0] || null;
                setStartupProject(project);
            } catch (err) {
                console.error('Error fetching startup project:', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchStartupProject();
    }, []);

    return (
        <section ref={ref} className="min-h-screen bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                        Startup
                    </p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                        My current <span className="font-medium">venture</span>
                    </h2>
                    <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                        {startupProject?.subtitle || "Building the next generation of developer tools that empower teams to ship faster and more confidently."}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative border border-white/10 rounded-2xl p-8 md:p-16 overflow-hidden"
                >
                    {/* Gradient glow effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-light mb-4">
                                    {startupProject?.title ? (
                                        startupProject.title.split(' ').map((word, i, arr) =>
                                            i === arr.length - 1 ? (
                                                <span key={i} className="font-medium">{word}</span>
                                            ) : (
                                                <span key={i}>{word} </span>
                                            )
                                        )
                                    ) : (
                                        <>Company<span className="font-medium">Name</span></>
                                    )}
                                </h3>
                                <p className="text-white/50 font-light max-w-md">
                                    {startupProject?.solution || startupProject?.subtitle || "We're on a mission to democratize software development. Our platform helps teams of all sizes build, deploy, and scale applications with unprecedented ease."}
                                </p>
                            </div>

                            {startupProject?.live_url && (
                                <motion.a
                                    href={startupProject.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors group"
                                >
                                    Visit Website
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                                </motion.a>
                            )}
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {(startupProject?.features && startupProject.features.length > 0
                                ? startupProject.features.slice(0, 3).map((feature, index) => ({
                                    icon: defaultFeatures[index % defaultFeatures.length].icon,
                                    title: feature.split(':')[0] || feature,
                                    desc: feature.split(':')[1]?.trim() || feature
                                }))
                                : defaultFeatures
                            ).map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                    className="p-6 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                                >
                                    <feature.icon className="w-8 h-8 mb-4 text-white/60" strokeWidth={1} />
                                    <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                                    <p className="text-white/40 text-sm font-light">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {startupProject && startupProject.tech && startupProject.tech.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-white/30"
                    >
                        <span className="text-sm">Built with {startupProject.tech.slice(0, 3).join(', ')}</span>
                        {startupProject.roles && startupProject.roles.length > 0 && (
                            <>
                                <span className="text-sm">•</span>
                                <span className="text-sm">{startupProject.roles.join(', ')}</span>
                            </>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-white/30"
                    >
                        <span className="text-sm">Backed by Y Combinator</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">$2M Seed Round</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">10+ Team Members</span>
                    </motion.div>
                )}
            </div>
        </section>
    );
}