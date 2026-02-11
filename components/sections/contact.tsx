"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

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

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/EUER_NAME",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/EUER_NAME",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/EUER_NAME",
  },
];

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
          >
            {dict.contact.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-muted mb-12"
          >
            {dict.contact.subtitle}
          </motion.p>

          {/* Email Button */}
          <motion.a
            variants={itemVariants}
            href="mailto:fbwebvie@hotmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface/50 border border-white/10 text-xl font-medium transition-all duration-300 hover:bg-surface/80 hover:border-white/20 hover:scale-105 group mb-12"
          >
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span>fbwebvie@hotmail.com</span>
          </motion.a>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 justify-center mb-8"
          >
            <div className="h-px w-16 bg-white/10" />
            <span className="text-text-muted">{dict.contact.or}</span>
            <div className="h-px w-16 bg-white/10" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface/50 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-surface/80 hover:border-white/20 hover:scale-110 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-text-muted group-hover:text-text transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
