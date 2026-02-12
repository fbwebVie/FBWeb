"use client";

import { motion, Variants } from "framer-motion";
import { Palette, Code, Rocket } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function TechBadge({ name, logo }: { name: string; logo: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/10 text-text-muted hover:text-text hover:border-white/20 transition-all duration-300"
    >
      <Image
        src={logo}
        alt={name}
        width={20}
        height={20}
        className="invert brightness-0 invert opacity-70"
      />
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative p-6 rounded-2xl bg-surface/50 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-surface/80"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>

        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function Services({ dict }: { dict: Dictionary }) {
  const services = [
    {
      icon: Palette,
      title: dict.services.design.title,
      description: dict.services.design.description,
    },
    {
      icon: Code,
      title: dict.services.development.title,
      description: dict.services.development.description,
    },
    {
      icon: Rocket,
      title: dict.services.landingpages.title,
      description: dict.services.landingpages.description,
    },
  ];

  const techStack = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextdotjs.svg" },
    { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {dict.services.title}
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              {dict.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center pt-8 border-t border-white/5"
          >
            <p className="text-text-muted mb-6">{dict.services.techStack}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <TechBadge key={tech.name} {...tech} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
