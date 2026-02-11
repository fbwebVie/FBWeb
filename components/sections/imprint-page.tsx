"use client";

import { motion } from "framer-motion";
import { Dictionary } from "@/lib/dictionaries";

export function ImprintPage({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            {dict.imprint.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>{dict.imprint.info}</h2>
            <p>
              [AGENTUR NAME]<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              1010 Wien<br />
              Österreich
            </p>

            <h2>{dict.imprint.contact}</h2>
            <p>
              E-Mail: hello@agentur.at<br />
              Telefon: +43 123 456 789
            </p>

            <h2>{dict.imprint.vat}</h2>
            <p>
              UID-Nr: ATU12345678
            </p>

            <h2>{dict.imprint.responsible}</h2>
            <p>
              Max Mustermann
            </p>

            <h2>{dict.imprint.disclaimer.title}</h2>
            <p>{dict.imprint.disclaimer.content}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
