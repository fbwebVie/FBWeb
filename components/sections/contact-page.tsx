"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Dictionary, Lang } from "@/lib/dictionaries";
import { useState } from "react";

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

export function ContactPage({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Project request from " + formState.name);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    );

    window.location.href = `mailto:fbwebvie@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                {dict.contact.title}
              </h1>
              <p className="text-xl text-text-muted">{dict.contact.subtitle}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Email</h3>
                      <a
                        href="mailto:fbwebvie@hotmail.com"
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        fbwebvie@hotmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">Location</h3>
                      <p className="text-text-muted">Wien, Österreich</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <p className="text-text-muted mb-4">{dict.contact.or}</p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface/50 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface/50 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface/50 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Availability Badge */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">{dict.footer.available}</span>
                  </div>
                  <p className="text-text-muted text-sm">
                    {lang === "de"
                      ? "Ich bin derzeit für neue Projekte verfügbar. Lass uns über deine Idee sprechen!"
                      : "I'm currently available for new projects. Let's talk about your idea!"}
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-surface/50 border border-white/10"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {lang === "de" ? "Name" : "Name"}
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                        placeholder={lang === "de" ? "Dein Name" : "Your name"}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {lang === "de" ? "Nachricht" : "Message"}
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder={
                          lang === "de"
                            ? "Erzähl mir von deinem Projekt..."
                            : "Tell me about your project..."
                        }
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                    >
                      <Send className="w-4 h-4" />
                      {lang === "de" ? "Nachricht senden" : "Send Message"}
                    </button>
                  </div>
                </form>

                <p className="text-center text-text-muted text-sm mt-4">
                  {lang === "de"
                    ? "Ich antworte normalerweise innerhalb von 24 Stunden."
                    : "I usually respond within 24 hours."}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
