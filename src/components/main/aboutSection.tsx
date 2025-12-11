"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Where curiosity
              <br />
              <span className="font-medium">meets execution</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-black/60 font-light leading-relaxed">
              A software engineer with a deep love for building products that solve real problems.
              Years of experience across the full stack, specializing in creating elegant,
              performant applications.
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed">
              Currently focused on building a startup, reimagining how people
              interact with technology. Every line of code is an opportunity to make
              something beautiful and functional.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-8">
              {[
                { number: "5+", label: "Years Exp." },
                { number: "20+", label: "Projects" },
                { number: "1", label: "Startup" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-light">{stat.number}</p>
                  <p className="text-sm text-black/40 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors group"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Photography Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-16 border-t border-black/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4">
                Beyond Code
              </p>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
                Photography
              </h3>
              <p className="text-lg text-black/50 font-light max-w-md">
                Capturing moments and telling stories through the lens
              </p>
            </div>

            <motion.a
              href="https://photos.rashodkorala.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition-colors group"
            >
              View Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}