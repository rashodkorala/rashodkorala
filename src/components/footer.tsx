"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/rashodkorala" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rashodk" },
  { icon: Twitter, label: "Twitter", href: "#" }
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-black/40 dark:text-white/40 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Let's work <span className="font-medium">together</span>
            </h2>
            <p className="text-lg text-black/50 dark:text-white/50 font-light mb-8">
              Have a project in mind or want to discuss opportunities?
              I'm always open to interesting conversations.
            </p>

            <motion.a
              href="mailto:hello@rashodkorala.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-black/60 dark:hover:text-white/60 transition-colors group"
            >
              <Mail className="w-6 h-6" strokeWidth={1} />
              rashodkorala2002@gmail.com
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-black/40 dark:text-white/40 mb-6">
              Connect
            </p>

            <div className="flex md:justify-end gap-4 mb-16">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2 text-black/40 dark:text-white/40 text-sm font-light">
              <p>Based in St. John's, Newfoundland</p>
              <p>Available for remote work worldwide</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-black/30 dark:text-white/30 font-light">
            © {new Date().getFullYear()} — Designed & Built with care
          </p>
          
        </motion.div>
      </div>
    </footer>
  );
}
