"use client";

import { motion, Variants } from "framer-motion";
import {
  Palette,
  Code,
  Rocket,
  CheckCircle,
  MessageSquare,
  PenTool,
  Eye,
} from "lucide-react";
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

const services = [
  {
    id: "design",
    icon: Palette,
    features: ["ui", "responsive", "prototype"],
  },
  {
    id: "development",
    icon: Code,
    features: ["nextjs", "performance", "seo"],
  },
  {
    id: "landingpages",
    icon: Rocket,
    features: ["conversion", "speed", "testing"],
  },
];

const processSteps = [
  { id: "discovery", icon: MessageSquare, step: "01" },
  { id: "design", icon: PenTool, step: "02" },
  { id: "review", icon: Eye, step: "03" },
  { id: "launch", icon: Rocket, step: "04" },
];

export function ServicesPage({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-20"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              {dict.servicesPage.title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-text-muted max-w-2xl mx-auto"
            >
              {dict.servicesPage.subtitle}
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const serviceDict =
                dict.servicesPage.services[
                  service.id as keyof typeof dict.servicesPage.services
                ];

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-surface/50 border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-surface/80"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {serviceDict.title}
                  </h3>
                  <p className="text-text-muted mb-6">
                    {serviceDict.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-text-muted">
                          {
                            serviceDict.features[
                              featureKey as keyof typeof serviceDict.features
                            ]
                          }
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                {dict.servicesPage.process.title}
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                {dict.servicesPage.process.subtitle}
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const stepDict =
                  dict.servicesPage.process.steps[
                    step.id as keyof typeof dict.servicesPage.process.steps
                  ];

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className="relative text-center"
                  >
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                    )}

                    {/* Step Number */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold mb-2">
                      {stepDict.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {stepDict.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-surface/50 to-accent/10 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {dict.servicesPage.cta.title}
            </h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              {dict.servicesPage.cta.subtitle}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              {dict.servicesPage.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
