'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface WorkItem {
    title: string;
    subtitle: string;
    description: string;
    imageUrl?: string;
    liveUrl?: string;
    techStack: string[];
    featured?: boolean;
}

const Work: React.FC = () => {
    // You can replace this with data from Supabase or props
    const workItems: WorkItem[] = [
        {
            title: 'Aether Labs',
            subtitle: 'NFC-Powered Art Authentication Platform',
            description: 'Aether Labs is an end-to-end platform that links physical artworks to living digital certificates. Designed for galleries, studios, and independent artists who need instant, beautiful, and trustworthy provenance. Every artwork embeds a unique NFC signature, generating a verifiable chain of custody within seconds.',
            imageUrl: '/assets/ProjectsPhotos/aether/dashboard.png',
            liveUrl: 'https://startup.rashodkorala.com/',
            techStack: ['NFC Technology', 'Next.js', 'TypeScript', 'AWS Amplify', 'MongoDB', 'Smart Tags'],
            featured: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px] mb-3">
                        Work
                    </div>
                    <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold mb-4 tracking-[-0.5px] leading-[1.2] text-gray-900 dark:text-gray-50">
                        Startup & Ventures
                    </h2>
                    <p className="text-[17px] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
                        Building innovative solutions that push the boundaries of technology and design.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-20"
                >
                    {workItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="notion-block"
                        >
                            {/* Image Section - Notion Style */}
                            {item.imageUrl && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-12 bg-gray-50 dark:bg-gray-900"
                                >
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 900px"
                                        priority
                                    />
                                </motion.div>
                            )}

                            {/* Content Section - Notion Style */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    {item.featured && (
                                        <div className="text-[13px] leading-[18px] text-orange-600 dark:text-orange-400 font-normal">
                                            Featured Startup
                                        </div>
                                    )}
                                    <h3 className="text-[32px] leading-[1.3] font-semibold tracking-[-0.3px] text-gray-900 dark:text-gray-50">
                                        {item.title}
                                    </h3>
                                    <p className="text-[20px] leading-[1.5] text-gray-600 dark:text-gray-400 font-normal">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <div className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                                    {item.description}
                                </div>

                                {/* Tech Stack - Notion Style */}
                                {item.techStack && item.techStack.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2 pt-2 pb-6 border-b border-gray-200/50 dark:border-gray-800/50">
                                        <span className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal">Tech</span>
                                        <span className="text-[13px] leading-[18px] text-gray-400 dark:text-gray-600">•</span>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {item.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-[13px] leading-[18px] text-gray-600 dark:text-gray-400 font-normal"
                                                >
                                                    {tech}{techIndex < item.techStack.length - 1 && ','}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action Links - Notion Style */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {item.liveUrl && (
                                        <Link
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Visit Website
                                        </Link>
                                    )}
                                    <Link
                                        href="/aether"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
                                    >
                                        Learn More
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;

