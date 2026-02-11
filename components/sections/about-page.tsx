"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
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

            {/* Main Content - Side by Side */}
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Image - Kleiner */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="relative">
                  <div className="aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-surface/50 border border-white/10">
                    {/* Placeholder - Neutrales Profilbild */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-surface to-accent/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white/30"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-accent px-4 py-3 rounded-xl text-white text-center">
                    <p className="text-2xl font-bold">
                      {dict.aboutPage.stats.experience.value}
                    </p>
                    <p className="text-xs text-white/80">
                      {dict.aboutPage.stats.experience.label}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Text Content (3 cols) */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <p className="text-xl text-text-muted mb-6 leading-relaxed">
                  {dict.aboutPage.intro}
                </p>

                <div className="space-y-4 mb-10">
                  {dict.aboutPage.bio.map((paragraph, index) => (
                    <p key={index} className="text-text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Stats - Inline */}
                <div className="flex flex-wrap gap-8 mb-10 py-6 border-y border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-gradient">
                      {dict.aboutPage.stats.experience.value}
                    </p>
                    <p className="text-sm text-text-muted">
                      {dict.aboutPage.stats.experience.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gradient">
                      {dict.aboutPage.stats.projects.value}
                    </p>
                    <p className="text-sm text-text-muted">
                      {dict.aboutPage.stats.projects.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gradient">
                      {dict.aboutPage.stats.clients.value}
                    </p>
                    <p className="text-sm text-text-muted">
                      {dict.aboutPage.stats.clients.label}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] group"
                >
                  {dict.aboutPage.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
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
