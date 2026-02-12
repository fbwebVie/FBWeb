"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight, Code, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Dictionary, Lang } from "@/lib/dictionaries";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AboutPage({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header - Zentriert */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <p className="text-primary font-medium mb-4 tracking-wide">
                {dict.aboutPage.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                {dict.aboutPage.title}
              </h1>
              <div className="flex items-center justify-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>{dict.aboutPage.location}</span>
              </div>
            </motion.div>

            {/* Stats - Horizontal Cards */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-3 gap-4 mb-16"
            >
              <div className="text-center p-6 rounded-2xl bg-surface/50 border border-white/10">
                <p className="text-4xl font-bold text-gradient mb-1">
                  {dict.aboutPage.stats.experience.value}
                </p>
                <p className="text-sm text-text-muted">
                  {dict.aboutPage.stats.experience.label}
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface/50 border border-white/10">
                <p className="text-4xl font-bold text-gradient mb-1">
                  {dict.aboutPage.stats.projects.value}
                </p>
                <p className="text-sm text-text-muted">
                  {dict.aboutPage.stats.projects.label}
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface/50 border border-white/10">
                <p className="text-4xl font-bold text-gradient mb-1">
                  {dict.aboutPage.stats.clients.value}
                </p>
                <p className="text-sm text-text-muted">
                  {dict.aboutPage.stats.clients.label}
                </p>
              </div>
            </motion.div>

            {/* Bio Text - Zentriert */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
                {dict.aboutPage.intro}
              </p>

              <div className="space-y-4 text-text-muted leading-relaxed max-w-2xl mx-auto text-left">
                {dict.aboutPage.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* CTA - Zentriert */}
            <motion.div variants={itemVariants} className="text-center">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] group"
              >
                {dict.aboutPage.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills/Tools Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-heading font-bold mb-8">
              Tools & Technologies
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Figma",
                "Node.js",
                "Vercel",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-surface/50 border border-white/10 text-text-muted text-sm hover:text-text hover:border-white/20 transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
