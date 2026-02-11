"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, Lang } from "@/lib/dictionaries";

const bubbleStyle =
  "bg-surface/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all";

const bubbleStyleMobile =
  "bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all";

export function Navbar({ lang }: { lang: Lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // DIREKT aufrufen - NICHT async!
  const dict = getDictionary(lang);

  const navLinks = [
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/projects`, label: dict.nav.demos },
    { href: `/${lang}/about`, label: dict.nav.about },
  ];

  const switchLang = lang === "de" ? "en" : "de";
  const switchPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  return (
    <>
      {/* ==================== DESKTOP NAVBAR ==================== */}
      <header className="fixed top-6 left-6 right-6 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Bubble */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/${lang}`}
              className={`block px-5 py-3 font-heading font-bold text-sm tracking-tight hover:border-white/20 ${bubbleStyle}`}
            >
              FBWebVie
            </Link>
          </motion.div>

          {/* Nav Links + Language + CTA */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {/* Links Bubble */}
            <div className={`flex items-center gap-1 p-2 ${bubbleStyle}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-text-muted hover:text-text hover:bg-white/10 rounded-full transition-all text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <Link
              href={switchPath}
              className={`px-4 py-3 text-sm font-medium text-text-muted hover:text-text ${bubbleStyle}`}
            >
              {switchLang.toUpperCase()}
            </Link>

            {/* CTA Button */}
            <Link
              href={`/${lang}/contact`}
              className="group relative px-5 py-3 rounded-full text-white text-sm font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{dict.nav.contact}</span>
            </Link>
          </motion.nav>
        </div>
      </header>

      {/* ==================== MOBILE NAVBAR ==================== */}
      <header className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between">
          {/* Logo Bubble */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/${lang}`}
              className={`block px-4 py-3 font-heading font-bold text-sm tracking-tight ${bubbleStyleMobile}`}
            >
              FBWebVie
            </Link>
          </motion.div>

          {/* Right side: Language + Menu Button */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-2"
          >
            {/* Language Switcher - Mobile */}
            <Link
              href={switchPath}
              className={`px-3 py-3 text-sm font-medium text-text-muted hover:text-text ${bubbleStyleMobile}`}
            >
              {switchLang.toUpperCase()}
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-3 text-text-muted hover:text-text ${bubbleStyleMobile}`}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 7 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    scaleX: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-full bg-current rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -7 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </header>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-surface/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden">
                <div className="p-3 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-text hover:bg-white/5 rounded-2xl transition-all font-medium"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Divider */}
                  <div className="h-px bg-white/10 mx-2 my-2" />

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <Link
                      href={`/${lang}/contact`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block relative px-4 py-3 rounded-2xl text-white font-medium text-center overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-glow" />
                      <span className="relative">{dict.nav.contact}</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
