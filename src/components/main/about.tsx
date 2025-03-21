"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-6 lg:px-12 lg:pb-20 font-thin">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-7xl mb-8 lg:mb-14 relative font-light"
            >
                About Me
                <span className="absolute left-0 bottom-0 h-1 w-16 lg:w-24 bg-orange-600"></span>
            </motion.h1>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose mb-10">
                    I'm Rashod Korala, a Computer Science graduate from Memorial University of Newfoundland with a passion for creating innovative digital solutions.
                    My journey in technology is driven by a desire to build products that make a difference in people's lives.
                </p>
            </motion.div>

            {/* Section: What I Do */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-16"
            >
                <h2 className="text-3xl lg:text-5xl font-light mb-6 lg:mb-10 relative">
                    What I Do
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <ul className="space-y-6 lg:space-y-8 text-lg lg:text-2xl leading-relaxed lg:leading-loose">
                    <li className="flex items-start">
                        <span className="text-orange-600 mr-3">•</span>
                        Full-Stack Development – Specializing in Next.js, React Native, TypeScript, and AWS
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-600 mr-3">•</span>
                        Design & User Experience – Creating minimalist, mobile-first interfaces with a focus on usability
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-600 mr-3">•</span>
                        AI & Machine Learning – Developing intelligent solutions for real-world problems
                    </li>
                </ul>
            </motion.div>

            {/* Section: Skills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl lg:text-5xl font-light mb-6 lg:mb-10 relative">
                    Skills
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Next.js', 'React Native', 'TypeScript', 'AWS', 'Node.js', 'Python', 'UI/UX Design', 'AI/ML', 'Git'].map((skill) => (
                        <div key={skill} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                            {skill}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Section: My Philosophy */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl lg:text-5xl font-light mb-6 lg:mb-10 relative">
                    My Philosophy
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose">
                    I believe that technology should be both functional and beautiful. My approach blends engineering with design,
                    ensuring that every product I create is efficient, intuitive, and scalable. Whether through AI, web development,
                    or digital authentication, my goal is to enhance how people interact with technology.
                </p>
            </motion.div>

            {/* Section: Let's Connect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <h2 className="text-3xl lg:text-5xl font-light mb-6 lg:mb-10 relative">
                    Let's Connect
                    <span className="absolute left-0 bottom-0 h-1 w-12 lg:w-20 bg-orange-600"></span>
                </h2>
                <p className="text-lg lg:text-2xl leading-relaxed lg:leading-loose mb-8">
                    I'm always open to new ideas, collaborations, and projects. Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <a
                        href="/contact"
                        className="text-xl lg:text-2xl underline hover:text-orange-500 transition-colors"
                    >
                        Contact Me →
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500 transition-colors">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
