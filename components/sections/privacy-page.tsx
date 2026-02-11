"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/lib/dictionaries";

export function PrivacyPage({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            {dict.privacy.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>{dict.privacy.intro.title}</h2>
            <p>{dict.privacy.intro.content}</p>

            <h2>{dict.privacy.hosting.title}</h2>
            <p>{dict.privacy.hosting.content}</p>

            <h2>{dict.privacy.cookies.title}</h2>
            <p>{dict.privacy.cookies.content}</p>

            <h2>{dict.privacy.contact.title}</h2>
            <p>{dict.privacy.contact.content}</p>

            <h2>{dict.privacy.rights.title}</h2>
            <p>{dict.privacy.rights.content}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
