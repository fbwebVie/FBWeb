"use client";

import Link from "next/link";
import { getDictionary, Lang } from "@/lib/dictionaries";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

export function Footer({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  const navLinks = [
    { href: `/${lang}`, label: "Home" },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/projects`, label: dict.nav.demos },
    { href: `/${lang}/about`, label: dict.nav.about },
  ];

  const legalLinks = [
    { href: `/${lang}/imprint`, label: dict.footer.imprint },
    { href: `/${lang}/privacy`, label: dict.footer.privacy },
  ];

  return (
    <footer className="relative mt-32 pb-8">
      {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href={`/${lang}`}
              className="inline-block font-heading font-bold text-2xl tracking-tight mb-4"
            >
              FBWebVie
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {lang === "de"
                ? "Moderne Webentwicklung aus Wien. Wir bauen Websites die Kunden überzeugen."
                : "Modern web development from Vienna. We build websites that convince customers."}
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm font-medium text-text-muted">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {dict.footer.available}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
              {dict.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
              {dict.footer.social}
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} FBWebVie. {dict.footer.rights}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-text-muted text-xs">Built with</span>
              <div className="flex items-center gap-1 px-3 py-1 bg-surface/80 border border-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] text-xs text-text-muted">
                <span>Next.js</span>
                <span className="text-white/20">•</span>
                <span>Tailwind</span>
                <span className="text-white/20">•</span>
                <span>Framer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
