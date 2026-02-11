"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Dictionary, Lang } from "@/lib/dictionaries";

// Simplified Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Simplified Floating Shapes - weniger = smoother
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Big gradient blob - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium blob - left */}
      <motion.div
        className="absolute top-1/3 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// Main Hero Component
export function Hero({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 border border-white/10 rounded-full text-sm text-text-muted">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {dict.hero.available}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-2">
              {dict.hero.headline}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-gradient">
              {dict.hero.headlineAccent}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {dict.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link
              href={`/${lang}/projects`}
              className="group relative px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                {dict.hero.cta}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href={`/${lang}/contact`}
              className="group px-8 py-4 bg-surface/50 border border-white/10 rounded-full text-text font-medium transition-all duration-300 hover:bg-surface/80 hover:border-white/20"
            >
              <span className="flex items-center gap-2">
                {dict.hero.ctaSecondary}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
