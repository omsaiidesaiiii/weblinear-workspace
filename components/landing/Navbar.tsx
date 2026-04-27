"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { PremiumButton } from "@/components/ui/premium-button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Blur navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-2rem)] max-w-7xl transition-all duration-300`}
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
          <span className="ml-2 text-foreground font-bold text-lg tracking-tight">
            Weblinear
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { name: "Home", href: "#" },
            { name: "Services", href: "#", hasChevron: true },
            { name: "Reviews", href: "#" },
            { name: "Contact us", href: "#" },
          ].map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5, duration: 0.5 }}
              className="flex items-center font-normal text-[14px] text-foreground hover:opacity-80 transition-opacity"
            >
              {link.name} {link.hasChevron && <ChevronDown className="ml-1 w-4 h-4" />}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden lg:flex items-center space-x-4"
        >
          <ThemeToggle />
          <PremiumButton 
            variant="secondary" 
            className="!text-[14px] !px-5 !py-2 font-semibold hover:!bg-secondary dark:hover:!bg-white/10"
          >
            Sign In
          </PremiumButton>
          <PremiumButton className="!text-[14px] !px-5 !py-2 font-semibold">
            Get Started
          </PremiumButton>
        </motion.div>

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
            <span className="font-bold text-lg tracking-tight">
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
            <a href="#" className="font-normal text-2xl">
              Home
            </a>
            <a href="#" className="font-normal text-2xl">
              Services
            </a>
            <a href="#" className="font-normal text-2xl">
              Reviews
            </a>
            <a href="#" className="font-normal text-2xl">
              Contact us
            </a>
            <div className="flex flex-col space-y-4 pt-8 w-full px-12">
              <PremiumButton 
                variant="secondary" 
                className="w-full !text-[16px] !py-3 rounded-[8px] font-semibold"
              >
                Sign In
              </PremiumButton>
              <PremiumButton className="w-full !text-[16px] !py-3 rounded-[8px] font-semibold">
                Get Started
              </PremiumButton>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
