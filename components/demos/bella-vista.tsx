"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Instagram, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DemoWatermark } from "./demo-watermark";

// ============================================
// BELLA VISTA - Italian Restaurant Demo
// ============================================

export function BellaVistaRestaurant() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap');
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Hours />
      <Reservation />
      <Footer />
      <DemoWatermark />
    </div>
  );
}

// ============================================
// NAVBAR
// ============================================

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Menu", "Gallery", "Reservation"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/demos/restaurant" className="flex items-center gap-2">
            <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#d4af37]">
              Bella Vista
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['Lato'] text-sm text-white/70 hover:text-[#d4af37] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#reservation"
            className="hidden md:block px-5 py-2 bg-[#d4af37] text-black font-['Lato'] font-semibold text-sm rounded-full hover:bg-[#c4a030] transition-colors"
          >
            Book a Table
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-['Lato'] text-white/70 hover:text-[#d4af37] transition-colors border-b border-white/10 last:border-0"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// ============================================
// HERO
// ============================================

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Lato'] text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-6"
        >
          Authentic Italian Cuisine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-medium mb-6"
        >
          Bella Vista
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Playfair_Display'] italic text-xl md:text-2xl text-white/80 mb-10"
        >
          "La dolce vita in every bite"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reservation"
            className="px-8 py-4 bg-[#d4af37] text-black font-['Lato'] font-semibold rounded-full hover:bg-[#c4a030] transition-all hover:scale-105"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-white/30 text-white font-['Lato'] rounded-full hover:bg-white/10 transition-all"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// ABOUT
// ============================================

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                alt="Chef preparing pasta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-black p-6 rounded-2xl">
              <p className="font-['Playfair_Display'] text-4xl font-bold">25+</p>
              <p className="font-['Lato'] text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-['Lato'] text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6">
              Tradition meets
              <span className="italic text-[#d4af37]"> Passion</span>
            </h2>
            <p className="font-['Lato'] text-white/70 leading-relaxed mb-6">
              Since 1998, we have been bringing the authentic flavors of Italian cuisine to Vienna.
              Our founder, Marco Rossi, came from Naples with a dream – to share his Nonna's
              recipes with the world.
            </p>
            <p className="font-['Lato'] text-white/70 leading-relaxed mb-8">
              Today, 25 years later, we still use the same hand-selected ingredients,
              imported directly from Italy. Every dish tells a story of tradition,
              family, and love for the craft.
            </p>

            <div className="flex gap-8">
              <div>
                <p className="font-['Playfair_Display'] text-3xl text-[#d4af37]">100%</p>
                <p className="font-['Lato'] text-sm text-white/50">Fresh Ingredients</p>
              </div>
              <div>
                <p className="font-['Playfair_Display'] text-3xl text-[#d4af37]">50+</p>
                <p className="font-['Lato'] text-sm text-white/50">Dishes</p>
              </div>
              <div>
                <p className="font-['Playfair_Display'] text-3xl text-[#d4af37]">4.9★</p>
                <p className="font-['Lato'] text-sm text-white/50">Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MENU
// ============================================

const menuItems = {
  antipasti: [
    { name: "Bruschetta Classica", desc: "Toasted bread with tomatoes, garlic & basil", price: "9.50" },
    { name: "Carpaccio di Manzo", desc: "Thinly sliced beef with arugula & parmesan", price: "16.00" },
    { name: "Burrata Pugliese", desc: "Creamy burrata with San Marzano tomatoes", price: "14.50" },
  ],
  pasta: [
    { name: "Spaghetti Carbonara", desc: "Guanciale, pecorino, egg & black pepper", price: "18.00" },
    { name: "Tagliatelle al Tartufo", desc: "Homemade pasta with black truffle", price: "28.00" },
    { name: "Rigatoni all'Amatriciana", desc: "With guanciale & pecorino romano", price: "17.50" },
  ],
  secondi: [
    { name: "Ossobuco alla Milanese", desc: "Braised veal shank with gremolata", price: "34.00" },
    { name: "Branzino al Forno", desc: "Whole sea bass with herbs", price: "32.00" },
    { name: "Saltimbocca Romana", desc: "Veal cutlet with sage & prosciutto", price: "29.00" },
  ],
};

function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuItems>("antipasti");

  return (
    <section id="menu" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Lato'] text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
            Culinary Highlights
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium">
            Our <span className="italic">Menu</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-['Lato'] text-sm capitalize transition-all ${
                activeTab === tab
                  ? "bg-[#d4af37] text-black"
                  : "border border-white/20 text-white/70 hover:border-[#d4af37] hover:text-[#d4af37]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {menuItems[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between p-6 border border-white/10 rounded-xl hover:border-[#d4af37]/30 transition-colors"
            >
              <div>
                <h3 className="font-['Playfair_Display'] text-xl mb-2">{item.name}</h3>
                <p className="font-['Lato'] text-white/50 text-sm">{item.desc}</p>
              </div>
              <p className="font-['Playfair_Display'] text-2xl text-[#d4af37]">€{item.price}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 border border-[#d4af37] text-[#d4af37] font-['Lato'] rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GALLERY
// ============================================

const galleryImages = [
  "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=800",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
  "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800",
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Lato'] text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
            Impressions
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium">
            A Glimpse of Our <span className="italic">Restaurant</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "md:col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOURS
// ============================================

function Hours() {
  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday - Friday", time: "12:00 - 14:30, 18:00 - 23:00" },
    { day: "Saturday", time: "18:00 - 23:30" },
    { day: "Sunday", time: "12:00 - 21:00" },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-['Lato'] text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
              Visit Us
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8">
              Opening <span className="italic">Hours</span>
            </h2>

            <div className="space-y-4">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-white/10"
                >
                  <span className="font-['Lato'] text-white/70">{item.day}</span>
                  <span className="font-['Playfair_Display'] text-[#d4af37]">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 rounded-2xl p-8"
          >
            <h3 className="font-['Playfair_Display'] text-2xl mb-6">Contact & Location</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1" />
                <div>
                  <p className="font-['Lato'] text-white">Kärntner Straße 42</p>
                  <p className="font-['Lato'] text-white/50">1010 Vienna, Austria</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#d4af37]" />
                <p className="font-['Lato'] text-white">+43 1 234 56 78</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                <p className="font-['Lato'] text-white">reservation@bellavista.at</p>
              </div>

              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-[#d4af37]" />
                <p className="font-['Lato'] text-white">@bellavista_vienna</p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 border border-[#d4af37] text-[#d4af37] font-['Lato'] text-sm rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// RESERVATION
// ============================================

function Reservation() {
  return (
    <section id="reservation" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-['Lato'] text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
            Reservation
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-4">
            Your Table <span className="italic">Awaits</span>
          </h2>
          <p className="font-['Lato'] text-white/60">
            Reserve now and secure an unforgettable evening
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-['Lato'] text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white placeholder:text-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-['Lato'] text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white placeholder:text-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block font-['Lato'] text-sm text-white/70 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-['Lato'] text-sm text-white/70 mb-2">Time</label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white focus:border-[#d4af37] focus:outline-none transition-colors">
                <option value="">Select</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block font-['Lato'] text-sm text-white/70 mb-2">Guests</label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white focus:border-[#d4af37] focus:outline-none transition-colors">
                <option value="">Select</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-['Lato'] text-sm text-white/70 mb-2">
              Special Requests
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-['Lato'] text-white placeholder:text-white/30 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              placeholder="Allergies, occasions, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#d4af37] text-black font-['Lato'] font-semibold rounded-xl hover:bg-[#c4a030] transition-colors"
          >
            Request Reservation
          </button>

          <p className="text-center font-['Lato'] text-white/40 text-sm">
            We will confirm your reservation within 24 hours
          </p>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-['Playfair_Display'] text-xl text-[#d4af37]">Bella Vista</span>
            <span className="font-['Lato'] text-white/40">|</span>
            <span className="font-['Lato'] text-white/40 text-sm">Ristorante Italiano</span>
          </div>

          <p className="font-['Lato'] text-white/40 text-sm">
            © {new Date().getFullYear()} Bella Vista Vienna. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-['Lato'] text-white/40 text-xs">Demo by</span>
            <a
              href="/"
              className="font-['Lato'] text-[#d4af37] text-sm hover:underline"
            >
              [AGENTUR]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
