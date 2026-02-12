"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  BarChart3,
  Users,
  Shield,
  Check,
  ArrowRight,
  Play,
  Star,
  ChevronDown,
  Sparkles,
  Layers,
  Target,
  Clock,
  Menu,
  X,
} from "lucide-react";
import { DemoWatermark } from "./demo-watermark";

// Custom Font Style - überschreibt globals.css
const fontInter = { fontFamily: "'Inter', system-ui, sans-serif" };

// ============================================
// MAIN COMPONENT
// ============================================

export function StartupLanding() {
  // Fix: Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ ...fontInter, backgroundColor: "#fafafa" }}>
      <DemoWatermark />
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ============================================
// NAVBAR
// ============================================

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
      style={{ ...fontInter, backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900" style={fontInter}>FlowSync</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Product", "Features", "Pricing", "Company"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                style={fontInter}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium" style={fontInter}>
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-semibold px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              style={fontInter}
            >
              Get Started
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-200 px-6 py-6"
            style={{ ...fontInter, backgroundColor: "white" }}
          >
            <div className="flex flex-col gap-4">
              {["Product", "Features", "Pricing", "Company"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 font-medium py-2"
                  style={fontInter}
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <hr className="my-2 border-gray-200" />
              <a
                href="#"
                className="w-full py-3 bg-emerald-500 text-white rounded-lg text-center font-semibold"
                style={fontInter}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ============================================
// HERO
// ============================================

function Hero() {
  return (
    <section
      className="pt-32 pb-20 px-6"
      style={{ ...fontInter, background: "linear-gradient(to bottom, #ecfdf5 0%, #fafafa 100%)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "#d1fae5", border: "1px solid #a7f3d0" }}
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-700" style={fontInter}>
            Introducing AI-powered workflows
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          style={{ ...fontInter, letterSpacing: "-0.02em" }}
        >
          The modern way to
          <br />
          manage <span className="text-emerald-500">projects</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={fontInter}
        >
          FlowSync helps teams of all sizes plan, track, and deliver their best work. 
          Simple, fast, and incredibly powerful.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
            style={fontInter}
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            style={fontInter}
          >
            <Play className="w-4 h-4" />
            Watch demo
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500"
          style={fontInter}
        >
          <div className="flex items-center -space-x-2">
            {["#10b981", "#059669", "#047857", "#065f46"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                style={{ backgroundColor: color, fontFamily: "'Inter', sans-serif" }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>Loved by <strong className="text-gray-900">10,000+</strong> teams</span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Browser Window */}
            <div className="rounded-xl shadow-2xl shadow-gray-300/50 border border-gray-200 overflow-hidden" style={{ backgroundColor: "white" }}>
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100" style={{ backgroundColor: "#f9fafb" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="w-48 h-5 bg-gray-200 rounded mx-auto" />
                </div>
              </div>

              {/* App Content */}
              <div className="p-6" style={{ backgroundColor: "#f3f4f6" }}>
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 space-y-2">
                    <div className="h-8 bg-emerald-100 rounded" />
                    <div className="h-8 bg-gray-200 rounded" />
                    <div className="h-8 bg-gray-200 rounded" />
                    <div className="h-8 bg-gray-200 rounded" />
                  </div>

                  {/* Main Content */}
                  <div className="col-span-9">
                    <div className="rounded-lg border border-gray-200 p-4 h-52" style={{ backgroundColor: "white" }}>
                      <div className="flex gap-4 h-full">
                        {["To Do", "In Progress", "Done"].map((col) => (
                          <div key={col} className="flex-1">
                            <div className="text-xs font-semibold text-gray-400 mb-2" style={fontInter}>{col}</div>
                            <div className="space-y-2">
                              {[1, 2].map((card) => (
                                <div key={card} className="h-12 bg-gray-50 rounded border border-gray-100" />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// LOGO CLOUD
// ============================================

function LogoCloud() {
  const logos = ["Linear", "Vercel", "Stripe", "Notion", "Figma"];

  return (
    <section className="py-16 px-6 border-y border-gray-200" style={{ ...fontInter, backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8" style={fontInter}>
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-semibold text-gray-300" style={fontInter}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FEATURES
// ============================================

function Features() {
  const features = [
    { icon: Layers, title: "Multiple Views", description: "Kanban boards, lists, calendars, and timelines.", color: "#10b981" },
    { icon: Target, title: "Goal Tracking", description: "Set ambitious goals and track progress in real-time.", color: "#14b8a6" },
    { icon: Users, title: "Team Collaboration", description: "Comments, @mentions, and real-time updates.", color: "#06b6d4" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Beautiful dashboards for data-driven decisions.", color: "#3b82f6" },
    { icon: Clock, title: "Time Tracking", description: "Built-in timers with detailed reports.", color: "#6366f1" },
    { icon: Shield, title: "Enterprise Security", description: "SOC 2 certified, SSO, and advanced permissions.", color: "#8b5cf6" },
  ];

  return (
    <section id="features" className="py-24 px-6" style={{ ...fontInter, backgroundColor: "#fafafa" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold mb-3"
            style={fontInter}
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ ...fontInter, letterSpacing: "-0.02em" }}
          >
            Everything you need to deliver great work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
            style={fontInter}
          >
            Powerful features that help your team collaborate and ship faster.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={fontInter}>{feature.title}</h3>
              <p className="text-gray-500 text-sm" style={fontInter}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS
// ============================================

function HowItWorks() {
  const steps = [
    { num: "01", title: "Create your workspace", description: "Sign up in seconds. No credit card required." },
    { num: "02", title: "Invite your team", description: "Everyone can join with just a link." },
    { num: "03", title: "Start shipping", description: "Create projects and watch your team deliver." },
  ];

  return (
    <section className="py-24 px-6" style={{ ...fontInter, backgroundColor: "#111827" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-semibold mb-3"
            style={fontInter}
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ ...fontInter, letterSpacing: "-0.02em" }}
          >
            Up and running in minutes
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-emerald-500/30 mb-6" 
                style={{ backgroundColor: "rgba(16,185,129,0.1)" }}
              >
                <span className="text-2xl font-bold text-emerald-400" style={fontInter}>{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={fontInter}>{step.title}</h3>
              <p className="text-gray-400" style={fontInter}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS
// ============================================

function Testimonials() {
  const testimonials = [
    { quote: "FlowSync has completely transformed how our team works. We've never been more productive.", author: "Sarah Chen", role: "Head of Product, TechCorp" },
    { quote: "The best project management tool we've ever used. Simple, powerful, and enjoyable.", author: "Marcus Johnson", role: "CTO, StartupXYZ" },
    { quote: "We shipped 3x more features last quarter after switching to FlowSync.", author: "Emily Rodriguez", role: "Engineering Lead, DevStudio" },
  ];

  return (
    <section className="py-24 px-6" style={{ ...fontInter, backgroundColor: "#fafafa" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold mb-3"
            style={fontInter}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ ...fontInter, letterSpacing: "-0.02em" }}
          >
            Loved by teams worldwide
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200"
              style={{ backgroundColor: "white" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6" style={fontInter}>"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm" 
                  style={{ background: "linear-gradient(135deg, #10b981, #14b8a6)", ...fontInter }}
                >
                  {testimonial.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm" style={fontInter}>{testimonial.author}</p>
                  <p className="text-gray-500 text-xs" style={fontInter}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRICING
// ============================================

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "For small teams getting started",
      features: ["Up to 5 members", "Basic views", "1GB storage"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/user/month",
      description: "For growing teams",
      features: ["Unlimited members", "All views", "100GB storage", "Priority support", "Analytics"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: ["Everything in Pro", "SSO & SAML", "Dedicated support", "Custom SLA"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6" style={{ ...fontInter, backgroundColor: "white" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold mb-3"
            style={fontInter}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ ...fontInter, letterSpacing: "-0.02em" }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
            style={fontInter}
          >
            Start for free, upgrade when you need to.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-xl border-2 ${plan.popular ? "border-emerald-500" : "border-gray-200"}`}
              style={{ backgroundColor: plan.popular ? "#111827" : "white" }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full" style={fontInter}>
                    Most Popular
                  </span>
                </div>
              )}

              <h3 
                className={`text-lg font-semibold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}
                style={fontInter}
              >
                {plan.name}
              </h3>
              <p 
                className={`text-sm mb-4 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}
                style={fontInter}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span 
                  className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}
                  style={fontInter}
                >
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-gray-400" : "text-gray-500"} style={fontInter}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${plan.popular ? "text-emerald-400" : "text-emerald-500"}`} />
                    <span 
                      className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-600"}`}
                      style={fontInter}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                style={fontInter}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ
// ============================================

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: "How does the free trial work?", answer: "14 days, full access, no credit card required." },
    { question: "Can I change my plan later?", answer: "Yes, upgrade or downgrade anytime." },
    { question: "Is my data secure?", answer: "SOC 2 Type II certified with end-to-end encryption." },
    { question: "What integrations do you support?", answer: "100+ including Slack, GitHub, Figma, and Notion." },
  ];

  return (
    <section className="py-24 px-6" style={{ ...fontInter, backgroundColor: "#fafafa" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold mb-3"
            style={fontInter}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ ...fontInter, letterSpacing: "-0.02em" }}
          >
            Got questions?
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-gray-200 overflow-hidden"
              style={{ backgroundColor: "white" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900" style={fontInter}>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-gray-500" style={fontInter}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FINAL CTA
// ============================================

function FinalCTA() {
  return (
    <section className="py-24 px-6" style={{ ...fontInter, background: "linear-gradient(135deg, #10b981, #14b8a6)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ ...fontInter, letterSpacing: "-0.02em" }}
        >
          Ready to get started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-emerald-100 mb-8"
          style={fontInter}
        >
          Join thousands of teams shipping faster with FlowSync.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
            style={fontInter}
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            style={fontInter}
          >
            Contact Sales
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-emerald-200 text-sm"
          style={fontInter}
        >
          No credit card required • Free 14-day trial
        </motion.p>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ ...fontInter, backgroundColor: "#111827" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white" style={fontInter}>FlowSync</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {["Product", "Features", "Pricing", "About", "Privacy", "Terms"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors" style={fontInter}>
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500" style={fontInter}>© 2024 FlowSync</p>
        </div>
      </div>
    </footer>
  );
}
