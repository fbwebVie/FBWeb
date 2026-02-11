"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ShoppingBag, Menu, X, ArrowUpRight, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { DemoWatermark } from "./demo-watermark";

// ============================================
// LUXE - Fashion Shop Demo
// Asymmetric, Editorial, Bold
// ============================================

export function FashionShop() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden cursor-default">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <SideNav />
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <BigStatement />
      <Categories />
      <Newsletter />
      <Footer />
      <DemoWatermark />
    </div>
  );
}

// ============================================
// SIDE NAVIGATION - Vertical on the left
// ============================================

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Side Nav */}
      <nav className="fixed left-0 top-0 h-screen w-16 border-r border-white/10 z-50 hidden lg:flex flex-col items-center py-6 justify-between bg-[#0a0a0a]/80 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/demos/shop" className="font-['Bebas_Neue'] text-2xl tracking-wider vertical-text">
          LUXE
        </Link>

        {/* Nav Items - Vertical */}
        <div className="flex flex-col gap-6 items-center">
          {["Shop", "New", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-['Inter'] text-xs tracking-widest text-white/50 hover:text-white transition-colors vertical-text"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Cart */}
        <button className="relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff4d4d] rounded-full text-[10px] flex items-center justify-center">
            2
          </span>
        </button>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden px-4 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-xl">
        <Link href="/demos/shop" className="font-['Bebas_Neue'] text-2xl tracking-wider">
          LUXE
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff4d4d] rounded-full text-[10px] flex items-center justify-center">
              2
            </span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#0a0a0a] lg:hidden flex flex-col items-center justify-center gap-8"
        >
          {["Shop", "New", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-['Bebas_Neue'] text-5xl tracking-wider hover:text-[#ff4d4d] transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}

// ============================================
// HERO - Horizontal Scroll
// ============================================

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
      title: "SUMMER '24",
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
      title: "BOLD MOVES",
    },
    {
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000",
      title: "NEW ERA",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[200vh] lg:pl-16">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pl-8">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="relative w-[80vw] md:w-[50vw] h-[80vh] flex-shrink-0 group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Title */}
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl tracking-wider">
                  {image.title}
                </h2>
              </div>
              {/* Shop Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-8 right-8 w-24 h-24 bg-[#ff4d4d] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="font-['Inter'] text-sm font-medium">SHOP</span>
              </motion.button>
            </div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-24 lg:translate-x-0">
          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-['Inter'] text-xs tracking-widest text-white/50"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MARQUEE - Running Text
// ============================================

function Marquee() {
  return (
    <div className="py-8 border-y border-white/10 overflow-hidden lg:ml-16">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-wider mx-8 text-white/10">
            NEW COLLECTION • FREE SHIPPING OVER €100 • SUSTAINABLE FASHION • LIMITED EDITION •
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// FEATURED PRODUCTS - Asymmetric Grid
// ============================================

const products = [
  {
    id: 1,
    name: "Oversized Blazer",
    price: "€249",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Silk Dress",
    price: "€189",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: "€399",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
    tag: null,
  },
  {
    id: 4,
    name: "Wide Leg Pants",
    price: "€129",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800",
    tag: "TRENDING",
  },
];

function FeaturedProducts() {
  return (
    <section id="shop" className="py-24 px-6 lg:pl-24 lg:pr-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-['Inter'] text-white/40 text-sm tracking-widest mb-2">
              01 / FEATURED
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wider">
              MUST HAVES
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-['Inter'] text-sm border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {products[0].tag && (
                <span className="absolute top-4 left-4 bg-[#ff4d4d] px-3 py-1 font-['Inter'] text-xs font-medium">
                  {products[0].tag}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="w-full py-3 bg-white text-black font-['Inter'] text-sm font-medium">
                  ADD TO BAG
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="font-['Inter'] font-medium">{products[0].name}</h3>
                <p className="font-['Inter'] text-white/50 text-sm">{products[0].price}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stacked */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {products.slice(1, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#111]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-[#ff4d4d] px-3 py-1 font-['Inter'] text-xs font-medium">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-['Inter'] font-medium">{product.name}</h3>
                    <p className="font-['Inter'] text-white/50 text-sm">{product.price}</p>
                  </div>
                  <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// BIG STATEMENT - Full Width Text
// ============================================

function BigStatement() {
  return (
    <section className="py-32 px-6 lg:pl-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="font-['Bebas_Neue'] text-[15vw] leading-[0.85] tracking-tighter">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="block text-white/10"
          >
            REDEFINE
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="block"
          >
            YOUR
          </motion.span>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="block text-[#ff4d4d]"
          >
            STYLE
          </motion.span>
        </h2>
      </motion.div>
    </section>
  );
}

// ============================================
// CATEGORIES
// ============================================

const categories = [
  {
    name: "Outerwear",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800",
    count: "48 Items",
  },
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800",
    count: "36 Items",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800",
    count: "64 Items",
  },
];

function Categories() {
  return (
    <section id="new" className="py-24 px-6 lg:pl-24 lg:pr-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-['Inter'] text-white/40 text-sm tracking-widest mb-2">
            02 / CATEGORIES
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wider">
            EXPLORE
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.a
              href="#"
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-['Bebas_Neue'] text-4xl md:text-5xl tracking-wider mb-2">
                  {category.name}
                </h3>
                <p className="font-['Inter'] text-white/60 text-sm">{category.count}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100px" }}
                  className="h-px bg-white mt-4"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// NEWSLETTER
// ============================================

function Newsletter() {
  return (
    <section id="about" className="py-24 px-6 lg:pl-24 lg:pr-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Inter'] text-white/40 text-sm tracking-widest mb-4">
              03 / STAY CONNECTED
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl tracking-wider mb-6">
              JOIN THE
              <span className="text-[#ff4d4d]"> MOVEMENT</span>
            </h2>
            <p className="font-['Inter'] text-white/50 font-light leading-relaxed">
              Subscribe to our newsletter and be the first to know about new collections,
              exclusive offers, and style inspiration.
            </p>
          </div>

          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-transparent border border-white/20 font-['Inter'] text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#ff4d4d] font-['Inter'] text-sm font-medium hover:bg-[#ff3333] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            <p className="font-['Inter'] text-white/30 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

function Footer() {
  return (
    <footer className="py-16 px-6 lg:pl-24 lg:pr-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-['Bebas_Neue'] text-3xl tracking-wider mb-4">LUXE</h3>
            <p className="font-['Inter'] text-white/50 text-sm leading-relaxed">
              Contemporary fashion for the modern individual. Sustainable, bold, timeless.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-['Inter'] font-medium mb-4">Shop</h4>
            <div className="space-y-2">
              {["New Arrivals", "Bestsellers", "Sale", "Gift Cards"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-['Inter'] text-white/50 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-['Inter'] font-medium mb-4">Help</h4>
            <div className="space-y-2">
              {["Shipping", "Returns", "Size Guide", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-['Inter'] text-white/50 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-['Inter'] font-medium mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="font-['Inter'] text-white/30 text-xs">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="font-['Inter'] text-white/30 text-xs">Demo by</span>
            <a href="/" className="font-['Inter'] text-white/50 text-sm hover:text-white transition-colors">
              [AGENTUR]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
