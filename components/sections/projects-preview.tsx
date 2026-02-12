"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Dictionary, Lang } from "@/lib/dictionaries";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Nur 2 Projekte auf Homepage
const projects = [
  {
    id: "restaurant",
    image: "/projects/restaurant.png",
    tags: ["Webdesign", "Next.js"],
    liveUrl: "/demos/restaurant",
  },
  {
    id: "portfolio",
    image: "/projects/portfolio.png",
    tags: ["Portfolio", "Animation"],
    liveUrl: "/demos/portfolio",
  },
];

function ProjectCard({
  project,
  dict,
}: {
  project: (typeof projects)[0];
  dict: Dictionary;
}) {
  const projectDict =
    dict.projects.items[project.id as keyof typeof dict.projects.items];

  return (
    <motion.div variants={itemVariants} className="group relative">
      <Link href={project.liveUrl} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-surface/50 border border-white/10 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] cursor-pointer">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={projectDict.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-gradient transition-all duration-300">
              {projectDict.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {projectDict.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsPreview({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Lang;
}) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {dict.projects.title}
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              {dict.projects.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid - 2 Projekte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} dict={dict} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href={`/${lang}/projects`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface/50 border border-white/10 text-text font-medium transition-all duration-300 hover:bg-surface/80 hover:border-white/20 group"
            >
              {dict.projects.viewAll}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
