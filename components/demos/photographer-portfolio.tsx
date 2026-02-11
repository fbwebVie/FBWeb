"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Instagram, Mail, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { DemoWatermark } from "./demo-watermark";

// ============================================
// PHOTOGRAPHER PORTFOLIO - Minimal & Artistic
// ============================================

export function PhotographerPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@200;300;400&display=swap');
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <DemoWatermark />
    </div>
  );
}

// ============================================
// NAVBAR
// ============================================

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/demos/portfolio" className="font-['Space_Grotesk'] text-xl font-medium tracking-tight">
          ELENA MÜLLER
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-['Outfit'] text-sm text-white/60 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-['Outfit'] text-sm border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
}

// ============================================
// HERO
// ============================================

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-['Outfit'] text-white/50 tracking-[0.4em] uppercase text-xs mb-8"
        >
          Photographer & Visual Artist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
        >
          Capturing
          <span className="block font-medium">Timeless Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-['Outfit'] text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Vienna-based photographer specializing in portraits, lifestyle, and artistic photography.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#work"
            className="group font-['Outfit'] text-sm tracking-wide flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ============================================
// ABOUT
// ============================================

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-['Outfit'] text-white/40 tracking-[0.3em] uppercase text-xs mb-6">
              About Me
            </p>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-light mb-8">
              Every photo tells
              <span className="block font-medium">a unique story</span>
            </h2>
            <div className="space-y-6 font-['Outfit'] text-white/60 font-light leading-relaxed">
              <p>
                With over 8 years of experience behind the lens, I've dedicated my craft
                to capturing the raw, unfiltered beauty of human connection and emotion.
              </p>
              <p>
                Based in Vienna, I work with clients across Europe, bringing a distinctive
                aesthetic that blends documentary-style authenticity with artistic vision.
              </p>
              <p>
                My approach is simple: create a comfortable space where genuine moments
                can unfold naturally, then capture them with precision and artistry.
              </p>
            </div>

            <div className="flex gap-12 mt-12">
              <div>
                <p className="font-['Space_Grotesk'] text-4xl font-medium">8+</p>
                <p className="font-['Outfit'] text-white/40 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-['Space_Grotesk'] text-4xl font-medium">200+</p>
                <p className="font-['Outfit'] text-white/40 text-sm mt-1">Projects Done</p>
              </div>
              <div>
                <p className="font-['Space_Grotesk'] text-4xl font-medium">50+</p>
                <p className="font-['Outfit'] text-white/40 text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
                alt="Elena Müller"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6">
              <p className="font-['Space_Grotesk'] font-medium">Elena Müller</p>
              <p className="font-['Outfit'] text-black/60 text-sm">Photographer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PORTFOLIO
// ============================================

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800",
    category: "Portrait",
    title: "Natural Light",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800",
    category: "Fashion",
    title: "Urban Style",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
    category: "Portrait",
    title: "Studio Session",
  },
  {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800",
    category: "Lifestyle",
    title: "Golden Hour",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
    category: "Fashion",
    title: "Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    category: "Portrait",
    title: "Character Study",
  },
];

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-['Outfit'] text-white/40 tracking-[0.3em] uppercase text-xs mb-6">
            Selected Work
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-light">
            Portfolio
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="font-['Outfit'] text-white/60 text-xs tracking-wider uppercase">
                    {image.category}
                  </p>
                  <p className="font-['Space_Grotesk'] text-white text-lg mt-1">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : portfolioImages.length - 1);
              }}
              className="absolute left-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage < portfolioImages.length - 1 ? selectedImage + 1 : 0);
              }}
              className="absolute right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].title}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ============================================
// SERVICES
// ============================================

const services = [
  {
    title: "Portrait Photography",
    description: "Professional headshots, personal branding, and artistic portraits that capture your essence.",
    price: "from €250",
  },
  {
    title: "Fashion & Editorial",
    description: "High-end fashion photography for brands, magazines, and creative projects.",
    price: "from €500",
  },
  {
    title: "Lifestyle Sessions",
    description: "Natural, candid photography for couples, families, and personal projects.",
    price: "from €350",
  },
  {
    title: "Event Coverage",
    description: "Professional coverage of private events, launches, and corporate gatherings.",
    price: "from €800",
  },
];

function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-['Outfit'] text-white/40 tracking-[0.3em] uppercase text-xs mb-6">
            What I Offer
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-light">
            Services
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2 group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
                <p className="font-['Outfit'] text-white/50 font-light">
                  {service.description}
                </p>
              </div>
              <div className="font-['Space_Grotesk'] text-white/60 md:text-right">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-['Outfit'] text-white/40 text-sm mb-6">
            Custom packages available. Let's discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-block font-['Outfit'] text-sm tracking-wide border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT
// ============================================

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Outfit'] text-white/40 tracking-[0.3em] uppercase text-xs mb-6">
            Get in Touch
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-light mb-6">
            Let's create something
            <span className="block font-medium">beautiful together</span>
          </h2>
          <p className="font-['Outfit'] text-white/50 font-light max-w-xl mx-auto">
            Ready to book a session or have questions? Reach out and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-['Outfit'] text-white/40 text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 font-['Outfit'] text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-['Outfit'] text-white/40 text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 font-['Outfit'] text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block font-['Outfit'] text-white/40 text-sm mb-2">Service</label>
            <select className="w-full px-0 py-4 bg-transparent border-b border-white/20 font-['Outfit'] text-white focus:border-white focus:outline-none transition-colors">
              <option value="" className="bg-[#0a0a0a]">Select a service</option>
              <option value="portrait" className="bg-[#0a0a0a]">Portrait Photography</option>
              <option value="fashion" className="bg-[#0a0a0a]">Fashion & Editorial</option>
              <option value="lifestyle" className="bg-[#0a0a0a]">Lifestyle Sessions</option>
              <option value="event" className="bg-[#0a0a0a]">Event Coverage</option>
              <option value="other" className="bg-[#0a0a0a]">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-['Outfit'] text-white/40 text-sm mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-0 py-4 bg-transparent border-b border-white/20 font-['Outfit'] text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full md:w-auto font-['Outfit'] text-sm tracking-wide border border-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-medium mb-2">Elena Müller</p>
            <p className="font-['Outfit'] text-white/40 text-sm">Vienna, Austria</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@elenamueller.com"
              className="font-['Outfit'] text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              hello@elenamueller.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Outfit'] text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              @elenamueller
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-['Outfit'] text-white/30 text-xs">Demo by</span>
            <a href="/" className="font-['Outfit'] text-white/60 text-sm hover:text-white transition-colors">
              [AGENTUR]
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-['Outfit'] text-white/30 text-xs">
            © {new Date().getFullYear()} Elena Müller Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
