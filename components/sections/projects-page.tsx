"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

type FilterType = "all" | "business" | "portfolio" | "ecommerce" | "webapp";

const projects = [
  {
    id: "restaurant",
    category: "business" as FilterType,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/projects/restaurant.png",
    liveUrl: "/demos/restaurant",
    comingSoon: false,
  },
  {
    id: "portfolio",
    category: "portfolio" as FilterType,
    tags: ["React", "Animation", "Minimal"],
    image: "/projects/portfolio.png",
    liveUrl: "/demos/portfolio",
    comingSoon: false,
  },
  {
    id: "shop",
    category: "ecommerce" as FilterType,
    tags: ["E-Commerce", "Next.js", "Tailwind"],
    image: "/projects/shop.png",
    liveUrl: "/demos/shop",
    comingSoon: false,
  },
  {
    id: "landingpage",
    category: "business" as FilterType,
    tags: ["Landing Page", "Conversion", "React"],
    image: null,
    liveUrl: null,
    comingSoon: true,
  },
  {
    id: "blog",
    category: "portfolio" as FilterType,
    tags: ["Blog", "MDX", "Minimal"],
    image: null,
    liveUrl: null,
    comingSoon: true,
  },
  {
    id: "dashboard",
    category: "webapp" as FilterType,
    tags: ["Dashboard", "Charts", "React"],
    image: null,
    liveUrl: null,
    comingSoon: true,
  },
];

export function ProjectsPage({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: dict.projectsPage.filters.all },
    { key: "business", label: dict.projectsPage.filters.business },
    { key: "portfolio", label: dict.projectsPage.filters.portfolio },
    { key: "ecommerce", label: dict.projectsPage.filters.ecommerce },
    { key: "webapp", label: dict.projectsPage.filters.webapp },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              {dict.projectsPage.title}
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              {dict.projectsPage.subtitle}
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-surface/50 text-text-muted hover:text-text border border-white/10 hover:border-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - OHNE layout prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => {
                const projectDict =
                  dict.projectsPage.items[
                    project.id as keyof typeof dict.projectsPage.items
                  ];

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group relative rounded-2xl overflow-hidden bg-surface/50 border border-white/10 transition-all duration-500 hover:border-white/20 ${
                      project.comingSoon ? "opacity-70" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                      {project.image && !project.comingSoon ? (
                        <img
                          src={project.image}
                          alt={projectDict.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        /* Coming Soon Placeholder - Kein Emoji */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-surface/80">
                          <Clock className="w-8 h-8 text-text-muted/50 mb-2" />
                          <span className="text-text-muted/50 text-sm font-medium">
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {/* Coming Soon Badge */}
                      {project.comingSoon && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          Coming Soon
                        </div>
                      )}

                      {/* Hover Overlay - nur für Live Projekte */}
                      {!project.comingSoon && project.liveUrl && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link
                            href={project.liveUrl}
                            className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform"
                          >
                            Live Demo
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-2 flex items-center gap-2">
                        {projectDict.title}
                        {!project.comingSoon && (
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        {projectDict.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
