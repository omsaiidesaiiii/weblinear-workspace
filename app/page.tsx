"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";
import FUIHeroWithBorders, {
  AnimatedLogoCloud,
} from "@/components/ui/herowith-logos";
import BentoShowcase from "@/components/ui/bento-showcase";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import ValuePropBento from "@/components/bento";

import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/ui/testimonial-card";

import Footer from "@/components/ui/footer";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const testimonials = [
    {
      name: "David Chen",
      role: "Founder & CEO, VelocityTech",
      content:
        "Weblinear replaced 4 different tools we were paying for. Our team is working faster, and our financial reporting has never been clearer.",
      gradient: "from-[#7c3aed] to-[#4c1d95]",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Sales, OmniFlow",
      content:
        "The CRM and automation tools alone are worth the price. We've cut down our lead response time from hours to literally seconds.",
      gradient: "from-[#2d1b69] to-[#7c3aed]",
    },
    {
      name: "Marcus Johnson",
      role: "Director of HR, ShiftWorks",
      content:
        "Onboarding new employees used to be a massive headache. Now it's a seamless, beautiful experience. Best HR software we've used.",
      gradient: "from-[#4c1d95] to-[#2d1b69]",
    },
    {
      name: "Sarah Jenkins",
      role: "CTO, NexaGen",
      content:
        "The developer experience and API integration are top-notch. It saved us months of custom development and lowered our overhead.",
      gradient: "from-[#7c3aed] to-blue-600",
    },
    {
      name: "Michael Wu",
      role: "Operations Manager, PeakFlow",
      content:
        "Finally, a platform that actually understands how modern teams collaborate. Our productivity has increased by 40% since switching.",
      gradient: "from-blue-600 to-[#4c1d95]",
    },
    {
      name: "Jessica Lee",
      role: "Creative Director, BrightScale",
      content:
        "The interface is beautiful and intuitive. It's rare to find a tool that combines deep functionality with such a clean aesthetic.",
      gradient: "from-[#4c1d95] to-[#7c3aed]",
    },
  ];

  // Blur navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full flex flex-col selection:bg-[#7b39fc] selection:text-white bg-background font-inter transition-colors duration-500">
      {/* Navbar Overlay */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-sm bg-background/50 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 text-foreground font-manrope font-bold text-lg tracking-tight">
              Weblinear
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
            >
              Home
            </a>
            <a
              href="#"
              className="flex items-center font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            <a
              href="#"
              className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
            >
              Reviews
            </a>
            <a
              href="#"
              className="font-manrope font-medium text-[14px] text-foreground hover:opacity-80 transition-opacity"
            >
              Contact us
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button className="bg-card dark:bg-white border border-border dark:border-[#d4d4d4] text-foreground dark:text-[#171717] rounded-full font-manrope font-semibold text-[14px] px-5 py-2 hover:bg-secondary dark:hover:bg-gray-50 transition-colors">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground rounded-full shadow-sm font-manrope font-semibold text-[14px] px-5 py-2 hover:brightness-110 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background flex flex-col text-foreground animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-[16px]">
              <span className="font-manrope font-bold text-lg tracking-tight">
                Weblinear
              </span>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <a href="#" className="font-manrope text-2xl font-medium">
                Home
              </a>
              <a href="#" className="font-manrope text-2xl font-medium">
                Services
              </a>
              <a href="#" className="font-manrope text-2xl font-medium">
                Reviews
              </a>
              <a href="#" className="font-manrope text-2xl font-medium">
                Contact us
              </a>
              <div className="flex flex-col space-y-4 pt-8 w-full px-12">
                <button className="w-full bg-secondary text-secondary-foreground border border-border rounded-[8px] font-manrope font-semibold text-[16px] py-3">
                  Sign In
                </button>
                <button className="w-full bg-primary text-primary-foreground rounded-[8px] font-manrope font-semibold text-[16px] py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <FUIHeroWithBorders>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-32 lg:mt-40 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center bg-card dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-xl rounded-full h-[32px] pl-1 pr-4 mb-8 shadow-sm dark:shadow-2xl"
          >
            <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-0.5 font-inter font-bold text-[10px] uppercase tracking-wider mr-3 ml-0.5">
              New
            </span>
            <span className="text-foreground dark:text-white/80 font-inter font-medium text-[13px] tracking-tight">
              Weblinear Workspace v3.2 is here
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-instrument text-foreground dark:text-white text-5xl md:text-7xl lg:text-[100px] leading-[0.95] tracking-tighter max-w-5xl">
            Run Your Business <br className="hidden md:block" />
            <span className="text-muted-foreground dark:text-white/40">from One Workspace</span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-[18px] md:text-[20px] text-muted-foreground dark:text-white/50 max-w-[600px] mt-8 leading-relaxed">
            A deeply integrated platform designed for teams who value speed and
            simplicity. Manage everything in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
            <button className="bg-primary text-primary-foreground rounded-full font-inter font-semibold text-[15px] px-10 py-4 hover:brightness-110 transition-all hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(123,57,252,0.39)] dark:shadow-[0_0_40px_rgba(124,58,237,0.25)] border border-border dark:border-white/10">
              Start Free Trial
            </button>
            <button className="bg-card dark:bg-white/5 text-foreground dark:text-white rounded-full font-inter font-semibold text-[15px] px-10 py-4 hover:bg-secondary dark:hover:bg-white/10 transition-all hover:scale-[1.02] border border-border dark:border-white/10 backdrop-blur-sm">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Decorative gradient overlay at bottom for smoother scroll transition */}
        {/* <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" /> */}
      </FUIHeroWithBorders>
      {/* Trust & Logos Section */}
      <section className="w-full py-10 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-inter text-sm text-muted-foreground mb-6 tracking-wide uppercase">
            Trusted by growing businesses to automate operations and boost
            efficiency
          </p>
          <AnimatedLogoCloud />
        </div>
      </section>
      {/* Value Proposition Section (Bento Style) */}
      <ValuePropBento />
      {/* Premium Unified Features Showcase */}
      <BentoShowcase />
      {/* Selected Projects Showcase */}
      <ProjectShowcase />
      {/* Testimonials Section */}
      <section className="w-full bg-background dark:bg-[#0a0812] py-16 lg:py-20 relative z-10 overflow-hidden border-t border-border dark:border-white/5">
        {/* Background decorative elements to match hero */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-[#4c1d95]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="font-instrument text-foreground dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Trusted by Visionary Teams
            </h2>
            <p className="font-inter text-[18px] text-muted-foreground dark:text-white/70 leading-relaxed">
              See how companies are accelerating their growth and simplifying
              their operations with Weblinear Workspace.
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8 py-10 overflow-hidden">
            <Marquee className="[--duration:30s]" pauseOnHover repeat={4}>
              {testimonials.slice(0, 3).map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </Marquee>{" "}
            <Marquee
              direction="right"
              className="[--duration:40s]"
              pauseOnHover
              repeat={4}
            >
              {testimonials.slice(3).map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </Marquee>
            {/* Edge Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-[#0a0812]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-[#0a0812]"></div>
          </div>
        </div>
      </section>{" "}
      {/* Final CTA Section with Vertical Marquee */}
      <CTAWithVerticalMarquee />
      {/* Premium Footer */}
      <Footer />
    </main>
  );
}
