'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/lib/supabase/caseStudies";
import { CaseStudy } from "@/lib/types/caseStudy";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    async function fetchCaseStudies() {
      setIsLoading(true);
      const data = await getFeaturedCaseStudies(2);
      setCaseStudies(data);
      setIsLoading(false);
    }
    fetchCaseStudies();
  }, []);

  return (
    <section ref={ref} className="bg-black dark:bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                Case Studies
            </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Real world Challenges 
              </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {isLoading ? (
            <div className="col-span-2 text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white/50 text-sm">Loading case studies...</p>
            </div>
          ) : caseStudies.length > 0 ? (
            caseStudies.map((study, i) => {
              const publishYear = study.published_at
                ? new Date(study.published_at).getFullYear().toString()
                : new Date(study.created_at).getFullYear().toString();

              // Get first metric or result for display
              const displayResult = study.metrics?.[0]
                ? `${study.metrics[0].label}: ${study.metrics[0].value}`
                : study.results?.[0]?.text || 'View case study';

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <Link href={`/case-studies/${study.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-lg border border-white/10 mb-6 aspect-video">
                      {study.cover_url ? (
                        <img
                          src={study.cover_url}
                          alt={study.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                          <span className="text-white/20 text-sm">No image</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-white/30 font-mono">{publishYear}</span>
                      {study.subject_type && (
                        <span className="text-xs px-2 py-1 border border-white/20 rounded-full text-white/40">
                          {study.subject_type}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-light tracking-tight mb-2 flex items-center gap-2 group-hover:text-white/70 transition-colors">
                      {study.title}
                      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                    </h3>

                    <p className="text-white/50 font-light">{displayResult}</p>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-white/50 text-sm">No featured case studies available.</p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

