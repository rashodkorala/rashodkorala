"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPublishedCaseStudies } from "@/lib/supabase/caseStudies";
import type { CaseStudy } from "@/lib/types/caseStudy";

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getPublishedCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error loading case studies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-sm font-light">Back to home</span>
          </Link>
        </div>
      </motion.div>

      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Featured
              <br />
              <span className="font-medium">Case Studies</span>
            </h1>
            <p className="text-lg text-black/50 font-light max-w-2xl">
              Real world challenges, explored through systems and design.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black mx-auto mb-4" />
                <p className="text-black/50 text-sm">Loading case studies...</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {caseStudies.length > 0 ? (
                caseStudies.map((study, i) => {
                  const publishYear = study.published_at
                    ? new Date(study.published_at).getFullYear().toString()
                    : new Date(study.created_at).getFullYear().toString();

                  const displayResult =
                    study.metrics?.[0]
                      ? `${study.metrics[0].label}: ${study.metrics[0].value}`
                      : study.results?.[0]?.text || "View case study for details";

                  return (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    >
                      <Link href={`/case-studies/${study.slug}`} className="group block">
                        <div className="relative overflow-hidden rounded-lg border border-black/10 mb-6 aspect-video">
                          {study.cover_url ? (
                            <img
                              src={study.cover_url}
                              alt={study.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-black/5 flex items-center justify-center">
                              <span className="text-black/20 text-sm">No image</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-black/30 font-mono">{publishYear}</span>
                          {study.subject_type && (
                            <span className="text-xs px-2 py-1 border border-black/10 rounded-full text-black/40">
                              {study.subject_type}
                            </span>
                          )}
                          {study.industry && (
                            <span className="text-xs px-2 py-1 border border-black/10 rounded-full text-black/40">
                              {study.industry}
                            </span>
                          )}
                        </div>

                        <h2 className="text-2xl font-light tracking-tight mb-2 group-hover:text-black/60 transition-colors">
                          {study.title}
                        </h2>

                        {study.summary && (
                          <p className="text-black/50 font-light text-sm mb-3 leading-relaxed">
                            {study.summary}
                          </p>
                        )}

                        <p className="text-black font-light">{displayResult}</p>
                      </Link>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-2 text-center py-20">
                  <p className="text-black/50 font-light">No case studies published yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

