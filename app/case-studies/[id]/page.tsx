"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Quote, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { getCaseStudyBySlug } from "@/lib/supabase/caseStudies";
import { CaseStudyWithMDX } from "@/lib/types/caseStudy";

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.id as string;
  const [caseStudy, setCaseStudy] = useState<CaseStudyWithMDX | null>(null);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mdxError, setMdxError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCaseStudy() {
      setIsLoading(true);
      const data = await getCaseStudyBySlug(slug);

      if (data) {
        setCaseStudy(data);

        // Serialize MDX content if it exists
        if (data.mdx_content) {
          try {
            const mdx = await serialize(data.mdx_content, {
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                format: 'mdx',
                parseOptions: {
                  ecmaVersion: 2020,
                  sourceType: 'module',
                },
              },
              parseFrontmatter: false,
            });
            setMdxSource(mdx);
            setMdxError(null);
          } catch (error: any) {
            console.error('Error serializing MDX:', error);
            console.error('Error details:', error.message);
            let errorMessage = 'Failed to parse MDX content. ';
            if (error.position) {
              const line = error.position.start?.line;
              const column = error.position.start?.column;
              console.error('Error at line:', line, 'column:', column);
              if (line) {
                const lines = data.mdx_content.split('\n');
                const errorLine = lines[line - 1];
                console.error('Problematic line:', errorLine);
                errorMessage += `Error at line ${line}, column ${column || 'unknown'}. `;
              }
            }
            errorMessage += 'Check for unclosed curly braces, invalid JSX, or syntax errors.';
            setMdxError(errorMessage);
            setMdxSource(null);
          }
        }
      }

      setIsLoading(false);
    }

    fetchCaseStudy();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black/50">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white dark:bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-black/50 mb-4">Case study not found</p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  const publishYear = caseStudy.published_at
    ? new Date(caseStudy.published_at).getFullYear().toString()
    : new Date(caseStudy.created_at).getFullYear().toString();

  return (
    <div className="min-h-screen bg-white dark:bg-white text-black">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-sm font-light">Back to case studies</span>
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
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {caseStudy.subject_type && (
                <span className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/40">
                  {caseStudy.subject_type}
                </span>
              )}
              <span className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/40">
                {publishYear}
              </span>
              {caseStudy.timeline && (
                <span className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/40">
                  {caseStudy.timeline}
                </span>
              )}
              {caseStudy.industry && (
                <span className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/40">
                  {caseStudy.industry}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              {caseStudy.title}
            </h1>

            {caseStudy.role && (
              <p className="text-xl text-black/50 font-light mb-4">
                {caseStudy.role}
              </p>
            )}

            {caseStudy.summary && (
              <p className="text-lg text-black/60 font-light leading-relaxed max-w-3xl">
                {caseStudy.summary}
              </p>
            )}
          </motion.div>

          {/* Hero Image */}
          {caseStudy.cover_url && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <div className="aspect-video rounded-lg overflow-hidden border border-black/10">
                <img
                  src={caseStudy.cover_url}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Tags & Stack */}
          {(caseStudy.tags || caseStudy.skills || caseStudy.stack) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack?.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-black text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {caseStudy.tags?.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 border border-black/10 rounded-full text-black/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* MDX Error Message */}
          {mdxError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-red-800 font-medium mb-2">MDX Parsing Error</p>
              <p className="text-red-700 text-sm">{mdxError}</p>
              <p className="text-red-600 text-xs mt-2">
                Common issues: unclosed curly braces {'{}'}, invalid JSX syntax, or special characters in code blocks.
              </p>
            </motion.div>
          )}

          {/* MDX Content */}
          {mdxSource && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <article className="prose prose-lg max-w-none
                prose-headings:font-light prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:text-black
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-black
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-black
                prose-p:text-black/70 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-black prose-a:underline prose-a:decoration-black/20
                hover:prose-a:decoration-black/60
                prose-strong:text-black prose-strong:font-medium
                prose-code:text-black/80 prose-code:bg-black/5
                prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-black/5 prose-pre:border prose-pre:border-black/10
                prose-pre:rounded-lg prose-pre:p-4
                prose-ul:list-disc prose-ul:my-6 prose-ul:pl-6
                prose-ol:list-decimal prose-ol:my-6 prose-ol:pl-6
                prose-li:text-black/70 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-black/20
                prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-black/60
                prose-img:rounded-lg prose-img:my-8
                [&_table]:border-collapse [&_table]:w-full
                [&_th]:text-left [&_th]:font-medium [&_th]:text-black
                [&_td]:text-black/70"
              >
                <MDXRemote
                  {...mdxSource}
                  components={{
                    h1: (props) => <h1 className="text-4xl font-light tracking-tight mb-6 text-black" {...props} />,
                    h2: (props) => <h2 className="text-3xl font-light tracking-tight mt-12 mb-6 text-black" {...props} />,
                    h3: (props) => <h3 className="text-2xl font-light tracking-tight mt-8 mb-4 text-black" {...props} />,
                    h4: (props) => <h4 className="text-xl font-light tracking-tight mt-6 mb-3 text-black" {...props} />,
                    p: (props) => <p className="text-black/70 leading-relaxed mb-4" {...props} />,
                    a: (props) => <a className="text-black underline decoration-black/20 hover:decoration-black/60 transition-colors" {...props} />,
                    ul: (props) => <ul className="list-disc pl-6 my-6 space-y-2" {...props} />,
                    ol: (props) => <ol className="list-decimal pl-6 my-6 space-y-2" {...props} />,
                    li: (props) => <li className="text-black/70" {...props} />,
                    blockquote: (props) => <blockquote className="border-l-4 border-black/20 pl-4 italic text-black/60 my-6" {...props} />,
                    code: (props) => <code className="text-black/80 bg-black/5 px-2 py-0.5 rounded text-sm font-mono" {...props} />,
                    pre: (props) => <pre className="bg-black/5 border border-black/10 rounded-lg p-4 overflow-x-auto my-6" {...props} />,
                    table: (props) => (
                      <div className="overflow-x-auto my-8 border border-black/10 rounded-lg">
                        <table className="min-w-full" {...props} />
                      </div>
                    ),
                    thead: (props) => <thead className="bg-black/5 border-b-2 border-black/20" {...props} />,
                    tbody: (props) => <tbody className="bg-white divide-y divide-black/10" {...props} />,
                    tr: (props) => <tr className="hover:bg-black/[0.02] transition-colors" {...props} />,
                    th: (props) => <th className="px-6 py-4 text-left text-sm font-medium text-black whitespace-nowrap" {...props} />,
                    td: (props) => <td className="px-6 py-4 text-sm text-black/70 whitespace-normal" {...props} />,
                    img: (props) => <img className="rounded-lg my-8 w-full" {...props} />,
                    hr: (props) => <hr className="my-8 border-black/10" {...props} />,
                  }}
                />
              </article>
            </motion.div>
          )}

          {/* Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6">
                Key Metrics
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-black text-white rounded-lg"
                  >
                    <p className="text-sm text-white/50 mb-2">{metric.label}</p>
                    <p className="text-4xl font-light">{metric.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6">
                Results
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 border border-black/10 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-black/30 mt-2" />
                    <p className="text-black/60 font-light">{result.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          {caseStudy.links && caseStudy.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6">
                Links
              </p>
              <div className="flex flex-wrap gap-4">
                {caseStudy.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition-colors group"
                  >
                    {link.label}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          {caseStudy.gallery_urls && caseStudy.gallery_urls.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6">
                Gallery
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.gallery_urls.map((url, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="aspect-video rounded-lg overflow-hidden border border-black/10"
                  >
                    <img
                      src={url}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-black/10 pt-16 text-center"
          >
            <p className="text-lg text-black/50 font-light mb-6">
              Interested in similar results?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

